USE [LinksDB20]
GO

/*
	Purpose : Backs the in-app "Void - Not Effected at Bank" action on the Bank Reconciliation
			  screen. Formalizes the manual fix already applied by hand on 2026-07-18
			  (see FIX_ACC_BANK_ZERO_AMOUNT_20260718*.sql) as an audited, reason-required,
			  idempotent stored procedure.

	Run ADD_ACC_BANK_VOID_COLUMNS_AND_AUDIT_TABLES.sql first - this proc depends on
	ACC_BANK.VOIDREASON/VOIDEDBY/VOIDEDON and the two *_VOID_AUDIT tables existing.

	Target: SQL Server 2008 R2 (confirmed live via @@VERSION) - no CREATE OR ALTER PROCEDURE,
	no THROW, no STRING_AGG; uses the same IF OBJECT_ID(...) IS NULL EXEC('CREATE PROC stub')
	pattern already used elsewhere in this codebase for new procs on this instance.

	Result-set contract matches the app-wide convention (62 existing call sites read
	Table[0].STATUS/STATUSTEXT): '100' = success, '103' = validation/business rejection.
*/

IF OBJECT_ID('dbo.USP_ACC_BANK_VOID_NG', 'P') IS NULL
	EXEC('CREATE PROCEDURE dbo.USP_ACC_BANK_VOID_NG AS BEGIN SET NOCOUNT ON END')
GO

ALTER PROCEDURE dbo.USP_ACC_BANK_VOID_NG
	@CMPID      VARCHAR(5),
	@CMPCODE    VARCHAR(3),
	@CITYCODE   VARCHAR(3),
	@USERNAME   VARCHAR(20),
	@ENTRYNO    VARCHAR(15),
	@VOIDREASON NVARCHAR(500),
	@MAKERIP    NVARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON
	SET XACT_ABORT ON

	-- 1. Reason is mandatory - re-validate server-side even though the frontend already checks,
	--    since Common() POSTs a plain JSON body nothing stops a direct API call from bypassing.
	IF (LTRIM(RTRIM(ISNULL(@VOIDREASON,''))) = '')
	BEGIN
		SELECT '103' [STATUS], 'Please provide a reason for voiding this entry.' [STATUSTEXT]
		RETURN
	END

	-- 2. Defensively cap the reason (mirrors the NARRATION 120-char truncation failure already
	--    hit live - Msg 8152 - fixing it proactively here instead of reactively).
	SET @VOIDREASON = LEFT(LTRIM(RTRIM(@VOIDREASON)), 500)

	-- 3. Look up the entry, scoped to CMPCODE/CITYCODE like every other query on this screen.
	DECLARE @PK_ID INT, @STATUS_COL VARCHAR(2), @CLEARANCEDATE DATETIME,
			@EXISTING_VOIDEDON DATETIME, @EXISTING_VOIDEDBY VARCHAR(20), @EXISTING_VOIDREASON NVARCHAR(500),
			@OLD_ACTUALAMOUNT DECIMAL(18,2), @OLD_NARRATION NVARCHAR(120), @OLD_ENTRYDT VARCHAR(10)

	SELECT	@PK_ID = ID, @STATUS_COL = [STATUS], @CLEARANCEDATE = clearanceDate,
			@EXISTING_VOIDEDON = VOIDEDON, @EXISTING_VOIDEDBY = VOIDEDBY, @EXISTING_VOIDREASON = VOIDREASON,
			@OLD_ACTUALAMOUNT = ACTUALAMOUNT, @OLD_NARRATION = NARRATION, @OLD_ENTRYDT = ENTRYDT
	FROM	ACC_BANK
	WHERE	ENTRYNO = @ENTRYNO AND CMPCODE = @CMPCODE AND CITYCODE = @CITYCODE

	IF (@PK_ID IS NULL)
	BEGIN
		SELECT '103' [STATUS], 'Bank payment entry ' + @ENTRYNO + ' was not found.' [STATUSTEXT]
		RETURN
	END

	-- 4. v1 scope is bank PAYMENTS only (the incident this feature exists for) - not receipts.
	IF (@STATUS_COL <> 'BP')
	BEGIN
		SELECT '103' [STATUS], 'Only bank payment entries (STATUS = BP) can be voided.' [STATUSTEXT]
		RETURN
	END

	-- 5. Defense in depth behind the UI, which already only shows Void on uncleared rows.
	IF (@CLEARANCEDATE IS NOT NULL)
	BEGIN
		SELECT '103' [STATUS], 'This entry has already cleared at the bank and cannot be voided.' [STATUSTEXT]
		RETURN
	END

	-- 6. Idempotency guard - echo back who/when/why so a second accountant working off a stale
	--    grid understands what happened without needing to ask a developer.
	IF (@EXISTING_VOIDEDON IS NOT NULL)
	BEGIN
		SELECT '103' [STATUS],
			'This entry was already voided on ' + CONVERT(VARCHAR, @EXISTING_VOIDEDON, 106)
			+ ' by ' + ISNULL(@EXISTING_VOIDEDBY,'') + '. Reason: ' + ISNULL(@EXISTING_VOIDREASON,'') [STATUSTEXT]
		RETURN
	END

	-- TRY/CATCH (supported since SQL Server 2005) is the real error handler here - a bare
	-- "ERROR_HANDLER:" label with no GOTO/CATCH pointing at it (as in the legacy
	-- FIX_BRBPCRCPCE_INSERT_NG.sql, whose GOTOs are all commented out) is dead code: with
	-- XACT_ABORT ON, a runtime error terminates the batch immediately and never reaches a
	-- dangling label.
	BEGIN TRY
		BEGIN TRANSACTION

		-- 7. Pre-void snapshot into the permanent audit tables - EVERY column of the master
		--    row and every detail row, not just the ones being zeroed, so anyone auditing
		--    later has the complete picture, not just the amount/narration delta.
		DECLARE @VoidAuditId INT

		INSERT INTO dbo.ACC_BANK_VOID_AUDIT
		(
			ACC_BANK_ID, ENTRYNO, ENTRYDT, [STATUS], BANK, CHEQUETYPE, CHEQUENO, CHEQUEDT, OURBANK,
			NARRATION1, NARRATION2, CITYCODE, CMPCODE, ENTMM, ENTYR, ENTDD, ENTNO, EXPENSE, USERNAME,
			CMPID, ACTUALAMOUNT, NARRATION, ADVAMT, AMTWITHOUTADV, CLEARANCEDATE, COMPUTERISEDCHEQUE,
			PAYEENAME, NOTOVERFLAG, BANKREFNO,
			VOIDEDBY, VOIDEDON, VOIDREASON
		)
		SELECT
			ID, ENTRYNO, ENTRYDT, [STATUS], BANK, CHEQUETYPE, CHEQUENO, CHEQUEDT, OURBANK,
			NARRATION1, NARRATION2, CITYCODE, CMPCODE, ENTMM, ENTYR, ENTDD, ENTNO, EXPENSE, USERNAME,
			CMPID, ACTUALAMOUNT, NARRATION, ADVAMT, AMTWITHOUTADV, clearanceDate, ComputerisedCheque,
			PayeeName, NotOverFlag, BANKREFNO,
			@USERNAME, GETDATE(), @VOIDREASON
		FROM ACC_BANK
		WHERE ID = @PK_ID

		SET @VoidAuditId = SCOPE_IDENTITY()

		INSERT INTO dbo.ACC_BANKDTLS_VOID_AUDIT
		(
			VOID_AUDIT_ID, ACC_BANKDTLS_ID, ENTRYNO, CLIENT, JOBNO, BILLNO, DEDUCTION, AMOUNT,
			ENTRYTYPE, EMP_CODE, USERNAME, CRParentEntryNo, NARRATION, IS_NOT_EDIT_ABLE, ITEMCODE,
			DeptId, Act_EntryType, Entry_StartDate, IS_GST, ISTDSCALC, IS_TDS, TDS_TYPE, RATE,
			TDS_AMT, GSTRATE
		)
		SELECT
			@VoidAuditId, ID, ENTRYNO, CLIENT, JOBNO, BILLNO, DEDUCTION, AMOUNT,
			ENTRYTYPE, EMP_CODE, USERNAME, CRParentEntryNo, NARRATION, IS_NOT_EDIT_ABLE, ITEMCODE,
			DeptId, Act_EntryType, Entry_StartDate, IS_GST, ISTDSCALC, IS_TDS, TDS_TYPE, RATE,
			TDS_AMT, GSTRATE
		FROM ACC_BANKDTLS
		WHERE ENTRYNO = @ENTRYNO

		-- 8. Zero the master + detail amounts (matches the already-applied manual fix exactly) and
		--    stamp the void-tracking columns.
		UPDATE	ACC_BANK
		SET		ACTUALAMOUNT = 0,
				NARRATION = LEFT('[VOID-BANK] ' + NARRATION, 120),
				VOIDREASON = @VOIDREASON,
				VOIDEDBY = @USERNAME,
				VOIDEDON = GETDATE()
		WHERE	ID = @PK_ID

		UPDATE	ACC_BANKDTLS
		SET		AMOUNT = 0,
				DEDUCTION = 0
		WHERE	ENTRYNO = @ENTRYNO

		-- 9. Audit trail in TBL_USERTRACK, same 9-column shape used by USP_ACC_BRBPCRCPCE_INSERT_NG
		--    (confirmed live against this instance).
		DECLARE @COLNAMES NVARCHAR(4000), @ORIGINALDATA NVARCHAR(4000)
		SET @COLNAMES = 'ACTUALAMOUNT|NARRATION|VOIDREASON|VOIDEDBY'
		SET @ORIGINALDATA = CONVERT(VARCHAR,@OLD_ACTUALAMOUNT) + '|' + ISNULL(@OLD_NARRATION,'') + '|' + @VOIDREASON + '|' + @USERNAME

		INSERT INTO TBL_USERTRACK (USERID, [DATETIME], MODE, TABLENAME, COLUMNNAME, ORIGINALDATA, MODIFIEDDATA, RECORDID, CODE)
		VALUES (@CMPID, GETDATE(), 'VOID', 'ACC_BANK', @COLNAMES, @ORIGINALDATA, '', @PK_ID, @ENTRYNO)

		COMMIT TRANSACTION

		SELECT '100' [STATUS], 'Bank Payment ' + @ENTRYNO + ' voided successfully.' [STATUSTEXT]
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
		-- Deliberately generic message, not raw ERROR_MESSAGE() - matches the existing
		-- restraint in FIX_BRBPCRCPCE_INSERT_NG.sql (lines 496-499, which explicitly
		-- comments out ERROR_MESSAGE()/ERROR_LINE() from the text returned to the client).
		SELECT '103' [STATUS], 'Unable to void this entry due to a system error. Please try again or contact support.' [STATUSTEXT]
	END CATCH
END
GO
