USE [LinksDB20]
GO

/*
	Purpose : Schema for the "Void - Not Effected at Bank" feature (Bank Reconciliation module).
			  Adds nullable void-tracking columns to ACC_BANK and two permanent audit-history
			  tables that capture a FULL pre-void snapshot of the master + detail rows (every
			  business column, not just the ones being zeroed) - additive only, no existing
			  column is altered/dropped, so no breaking change to existing procs/reports.

	VOIDEDON IS NOT NULL is the single source of truth for "this entry is voided" - no separate
	ISVOID bit, to avoid the two ever drifting out of sync.

	Audit table columns mirror ACC_BANK (29 cols) / ACC_BANKDTLS (24 cols) exactly - confirmed
	live via INFORMATION_SCHEMA.COLUMNS against BOTH LinksDB20 and manilal (same physical
	server, sibling deployments) - the two schemas are identical except:
		ACC_BANK.BANKREFNO          -> nvarchar(25) in LinksDB20, varchar(25) in manilal
		ACC_BANKDTLS.narration      -> varchar(1000) in LinksDB20, varchar(500) in manilal
	Audit columns below are sized to the wider of the two so this same script runs unmodified
	against either database.
*/

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('dbo.ACC_BANK') AND name = 'VOIDREASON')
BEGIN
	ALTER TABLE ACC_BANK ADD VOIDREASON NVARCHAR(500) NULL
END
GO

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('dbo.ACC_BANK') AND name = 'VOIDEDBY')
BEGIN
	ALTER TABLE ACC_BANK ADD VOIDEDBY VARCHAR(20) NULL
END
GO

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('dbo.ACC_BANK') AND name = 'VOIDEDON')
BEGIN
	ALTER TABLE ACC_BANK ADD VOIDEDON DATETIME NULL
END
GO

-- Full mirror of ACC_BANK (29 columns) + the 3 void-metadata columns for THIS void action.
-- (The mirrored snapshot is taken BEFORE the UPDATE, so ACC_BANK's own VOIDREASON/VOIDEDBY/
--  VOIDEDON are deliberately NOT mirrored here - they're always NULL at snapshot time, since
--  the idempotency guard already rejects any entry that's already voided. The VOIDEDBY/VOIDEDON/
--  VOIDREASON columns on THIS table are the real audit metadata for the void action itself.)
IF OBJECT_ID('dbo.ACC_BANK_VOID_AUDIT') IS NULL
BEGIN
	CREATE TABLE dbo.ACC_BANK_VOID_AUDIT
	(
		ID                    INT IDENTITY(1,1) PRIMARY KEY,
		ACC_BANK_ID           INT NOT NULL,             -- mirrors ACC_BANK.ID
		ENTRYNO               VARCHAR(15) NOT NULL,
		ENTRYDT               VARCHAR(10) NULL,
		[STATUS]              VARCHAR(2) NULL,
		BANK                  VARCHAR(50) NULL,
		CHEQUETYPE            VARCHAR(40) NULL,
		CHEQUENO              VARCHAR(7) NULL,
		CHEQUEDT              VARCHAR(10) NULL,
		OURBANK               VARCHAR(7) NULL,
		NARRATION1            NVARCHAR(120) NULL,
		NARRATION2            VARCHAR(60) NULL,
		CITYCODE              VARCHAR(3) NULL,
		CMPCODE               VARCHAR(3) NULL,
		ENTMM                 VARCHAR(2) NULL,
		ENTYR                 VARCHAR(2) NULL,
		ENTDD                 VARCHAR(2) NULL,
		ENTNO                 VARCHAR(3) NULL,
		EXPENSE               VARCHAR(1) NULL,
		USERNAME              VARCHAR(20) NULL,
		CMPID                 INT NULL,
		ACTUALAMOUNT          DECIMAL(18,2) NULL,
		NARRATION             NVARCHAR(120) NULL,
		ADVAMT                DECIMAL(18,2) NULL,
		AMTWITHOUTADV         DECIMAL(18,2) NULL,
		CLEARANCEDATE         DATETIME NULL,
		COMPUTERISEDCHEQUE    INT NULL,
		PAYEENAME             VARCHAR(150) NULL,
		NOTOVERFLAG           VARCHAR(1) NULL,
		BANKREFNO             NVARCHAR(25) NULL,
		-- audit metadata for THIS void action (not part of the source-row mirror)
		VOIDEDBY              VARCHAR(20) NULL,
		VOIDEDON              DATETIME NULL,
		VOIDREASON            NVARCHAR(500) NULL
	)
END
GO

-- Full mirror of ACC_BANKDTLS (24 columns) - one audit row per detail line.
IF OBJECT_ID('dbo.ACC_BANKDTLS_VOID_AUDIT') IS NULL
BEGIN
	CREATE TABLE dbo.ACC_BANKDTLS_VOID_AUDIT
	(
		ID                 INT IDENTITY(1,1) PRIMARY KEY,
		VOID_AUDIT_ID      INT NOT NULL,   -- FK to ACC_BANK_VOID_AUDIT.ID
		ACC_BANKDTLS_ID    INT NOT NULL,   -- mirrors ACC_BANKDTLS.ID
		ENTRYNO            VARCHAR(15) NOT NULL,
		CLIENT             VARCHAR(7) NULL,
		JOBNO              VARCHAR(15) NULL,
		BILLNO             VARCHAR(15) NULL,
		DEDUCTION          VARCHAR(15) NULL,
		AMOUNT             VARCHAR(15) NULL,
		ENTRYTYPE          VARCHAR(2) NULL,
		EMP_CODE           VARCHAR(10) NULL,
		USERNAME           VARCHAR(20) NULL,
		CRParentEntryNo    VARCHAR(15) NULL,
		NARRATION          VARCHAR(1000) NULL,
		IS_NOT_EDIT_ABLE   VARCHAR(1) NULL,
		ITEMCODE           NVARCHAR(10) NULL,
		DeptId             INT NULL,
		Act_EntryType      VARCHAR(2) NULL,
		Entry_StartDate    DATETIME NULL,
		IS_GST             VARCHAR(1) NULL,
		ISTDSCALC          VARCHAR(2) NULL,
		IS_TDS             VARCHAR(1) NULL,
		TDS_TYPE           VARCHAR(5) NULL,
		RATE               DECIMAL(18,2) NULL,
		TDS_AMT            DECIMAL(18,2) NULL,
		GSTRATE            DECIMAL(18,2) NULL
	)
END
GO

IF NOT EXISTS (SELECT 1 FROM sys.foreign_keys WHERE name = 'FK_ACC_BANKDTLS_VOID_AUDIT_ACC_BANK_VOID_AUDIT')
BEGIN
	ALTER TABLE dbo.ACC_BANKDTLS_VOID_AUDIT
	ADD CONSTRAINT FK_ACC_BANKDTLS_VOID_AUDIT_ACC_BANK_VOID_AUDIT
		FOREIGN KEY (VOID_AUDIT_ID) REFERENCES dbo.ACC_BANK_VOID_AUDIT(ID)
END
GO
