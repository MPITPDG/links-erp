(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BankReconcil-BankReconcil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>Bank Reconciliation</b> </td>\r\n           </tr>\r\n                <tr>\r\n                    <td >\r\n                        <span  class=\"col-form-span-label\"><b>Bank</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n\r\n                            <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"BankList\" bindLabel=\"acctname\"\r\n                               bindValue=\"acctcodename\"  [(ngModel)]=\"Bank\"\r\n                               class=\"custom\" placeholder=\"--Select OurBank--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>From</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                     class=\"form-control\"  [selDate]=\"FromDate\"  ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Balance As Per Bank</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                 <input [(ngModel)]=\"BankBalance\" type=\"text\"  [OnlyNumber]=\"true\"  class=\"form-control width150\" maxlength=\"40\" > \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"SearchData()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>\r\n                                Search </span></button>&nbsp;\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" *ngIf=\"bankrecList.length > 0\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n            <div>\r\n                <span class=\"col-form-span-label\"><b>\r\n                    Cheque Issued But Not Clear  </b> </span>\r\n            </div>\r\n           <div class=\"row  xyscroll\"  style=\"height: 150px;\">\r\n                <table class=\"table table-bordered table-sm-new table-striped \" >\r\n                 <thead>\r\n                        <tr class=\"title-head formheading \">\r\n                            <th class=\"col-form-span-label\" align=\"center\">\tEntry No </th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Chq Type</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Cheque No</th>    \r\n                            <th class=\"col-form-span-label\" align=\"center\">Cheque Date</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Amount</th>   \r\n                         </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"bankpayList.length > 0\">\r\n                        <tr *ngFor=\"let data of bankpayList\">\r\n                            <td ><span  class=\"col-form-span-label anchor-link \" (click)=\"Openprint(data.ENTRYNO,data.STATUS)\" >{{data.ENTRYNO}}</span> </td> \r\n                            <td  ><span class=\"col-form-span-label\">{{data.ENTRYDT}}</span>  </td>                             \r\n                            <td  ><span class=\"col-form-span-label\">{{data.STATUS}}</span>  </td> \r\n                            <td ><span class=\"col-form-span-label\">{{data.CHEQUENO}}</span>  </td> \r\n                            <td ><span class=\"col-form-span-label\">{{data.CHEQUEDT}}</span>  </td>\r\n                            <td  ><span class=\"col-form-span-label\">{{data.ACTUALAMOUNT|number:'2.2-4'}}</span>  </td> \r\n                       \r\n                        </tr>\r\n                      \r\n                    </tbody>\r\n                </table>\r\n                     </div>\r\n            <div  style=\"float: right;\">\r\n                <span class=\"col-form-span-label\"><b>\r\n                    {{IssueTotal}} </b> </span>\r\n            </div>\r\n         </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n                    \r\n    </div>  \r\n    <div class=\"row no-gutters\" *ngIf=\"bankrecList.length > 0\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n         \r\n             <div>\r\n                <span class=\"col-form-span-label\"><b>\r\n                    Cheque Received But Not Clear  </b> </span>\r\n            </div>\r\n            <div class=\"row  xyscroll\"  style=\"height: 150px;\">\r\n             <table class=\"table table-bordered table-sm-new table-striped \" >\r\n              \r\n                <thead>\r\n                    <tr class=\"title-head formheading \">\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tEntry No </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>   \r\n                        <th class=\"col-form-span-label\" align=\"center\">Chq Type</th>   \r\n                        <th class=\"col-form-span-label\" align=\"center\">Cheque No</th>    \r\n                        <th class=\"col-form-span-label\" align=\"center\">Cheque Date</th>   \r\n                        <th class=\"col-form-span-label\" align=\"center\">Amount</th>   \r\n                         \r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"bankrecList.length > 0\">\r\n                    <tr *ngFor=\"let data of bankrecList\">\r\n                        <td ><span  class=\"col-form-span-label anchor-link \" (click)=\"Openprint(data.ENTRYNO,data.STATUS)\" >{{data.ENTRYNO}}</span> </td> \r\n                        <td  ><span class=\"col-form-span-label\">{{data.ENTRYDT}}</span>  </td>                             \r\n                        <td  ><span class=\"col-form-span-label\">{{data.STATUS}}</span>  </td> \r\n                        <td ><span class=\"col-form-span-label\">{{data.CHEQUENO}}</span>  </td> \r\n                        <td ><span class=\"col-form-span-label\">{{data.CHEQUEDT}}</span>  </td>\r\n                        <td  ><span class=\"col-form-span-label\">{{data.ACTUALAMOUNT|number:'2.2-4'}}</span>  </td> \r\n                     </tr>\r\n               </tbody>\r\n            </table>\r\n            </div>\r\n            <div style=\"float: right;\" >\r\n                <span class=\"col-form-span-label\"><b>\r\n                     {{RecTotal}} </b> </span>\r\n            </div>\r\n            </div>\r\n             <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n                    \r\n    </div>  \r\n    <div class=\"row no-gutters\"  *ngIf=\"bankrecList.length > 0\" >\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n            <div style=\"float:right\" class=\"row no-gutters\">\r\n            \r\n                <table  class=\"table  table-sm-new bgwhite\" style=\"width:325px\">     \r\n                       \r\n                    <tr>\r\n                      <td class=\"col-form-span-label\" align=\"right\">Opening Balance:</td>\r\n                      <td class=\"col-form-span-label\" align=\"left\">{{lblOpBal}}</td>\r\n                     \r\n                    </tr>\r\n                    <tr>\r\n                      <td  class=\"col-form-span-label\" align=\"right\">Dr. Amt :</td>\r\n                      <td  class=\"col-form-span-label\" align=\"left\">{{CurrentDrBal}} </td>\r\n                      <td  class=\"col-form-span-label\" align=\"right\">Cr. Amt :</td>\r\n                      <td  class=\"col-form-span-label\" align=\"left\">{{CurrentCrbal}} </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td  class=\"col-form-span-label\" align=\"right\">Closing Balance  :</td>\r\n                        <td  class=\"col-form-span-label\" align=\"left\">{{lblclbal}} </td>\r\n                      \r\n                      </tr>\r\n                      <tr>\r\n                        <td  class=\"col-form-span-label\" align=\"right\">Difference Amount:</td>\r\n                        <td  class=\"col-form-span-label\" align=\"left\">{{lbldiff}} </td>\r\n                      \r\n                      </tr>\r\n              </table>\r\n            </div>\r\n         \r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\" >\r\n            <div style=\"float:center\" class=\"row no-gutters\">\r\n                <table  class=\"table  table-sm-new bgwhite\" > \r\n                    <tr>\r\n                        <td align=\"center\">\r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"ExportOutstand()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Outstanding</span></button>\r\n            <button class=\"btn btn-sm btn-success\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Exportrecstatement();\"><i class=\"fa fa-ban\"></i> Statement</span></button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div> \r\n            </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Master/BankReconcil/bank-reconcil.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Master/BankReconcil/bank-reconcil.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"br-page\">\r\n\r\n  <!-- ========================================================= -->\r\n  <!-- SEARCH SCREEN -->\r\n  <!-- ========================================================= -->\r\n\r\n  <div *ngIf=\"!showResult\">\r\n<div class=\"br-card search-card-clean\">\r\n  <div class=\"clean-row-layout\">\r\n\r\n    <!-- BANK ACCOUNT -->\r\n    <div class=\"clean-field clean-bank\">\r\n      <label>Bank Account <span class=\"br-req\">*</span></label>\r\n      <ng-select\r\n        [items]=\"BankList\"\r\n        bindLabel=\"acctname\"\r\n        bindValue=\"acctcodename\"\r\n        [(ngModel)]=\"Bank\"\r\n        [appendTo]=\"'body'\"\r\n        placeholder=\"Select Bank Account\">\r\n      </ng-select>\r\n    </div>\r\n\r\n    <!-- FROM DATE -->\r\n    <div class=\"clean-field clean-date\">\r\n      <label>From Date <span class=\"br-req\">*</span></label>\r\n      <my-date-picker\r\n        name=\"FromDate\"\r\n        (dateChanged)=\"FromDateChanged($event)\"\r\n        [options]=\"myDatePickerOptions\"\r\n        [selDate]=\"FromDate\"\r\n        class=\"search-date-control\">\r\n      </my-date-picker>\r\n    </div>\r\n\r\n    <!-- TO DATE -->\r\n    <div class=\"clean-field clean-date\">\r\n      <label>To Date <span class=\"br-req\">*</span></label>\r\n      <my-date-picker\r\n        name=\"ToDate\"\r\n        (dateChanged)=\"ToDateChanged($event)\"\r\n        [options]=\"myDatePickerOptions\"\r\n        [selDate]=\"ToDate\"\r\n        class=\"search-date-control\">\r\n      </my-date-picker>\r\n    </div>\r\n\r\n    <!-- BUTTONS -->\r\n    <div class=\"clean-actions\">\r\n      <button class=\"br-btn br-btn--primary\" type=\"button\" (click)=\"SearchData()\">\r\n        <i class=\"fa fa-search\"></i> Search\r\n      </button>\r\n      <button class=\"br-btn br-btn--ghost\" type=\"button\" (click)=\"Reset()\">\r\n        <i class=\"fa fa-refresh\"></i> Reset\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n \r\n\r\n\r\n  <!-- ========================================================= -->\r\n  <!-- RESULT SCREEN -->\r\n  <!-- ========================================================= -->\r\n\r\n  <div *ngIf=\"showResult\" class=\"br-result-view\">\r\n\r\n    <!-- TOP BAR -->\r\n<!-- \r\n    <div class=\"br-topbar\">\r\n\r\n      \r\n      <div class=\"br-topbar-right\">\r\n\r\n        \r\n      </div>\r\n\r\n    </div> -->\r\n\r\n    <!-- SUMMARY -->\r\n\r\n    <div class=\"br-summary-strip\">\r\n\r\n      <!-- OPENING -->\r\n\r\n      <div class=\"br-summary-card\">\r\n\r\n        <div class=\"br-summary-label\">\r\n          Opening Balance\r\n        </div>\r\n\r\n        <div class=\"br-summary-val\">\r\n\r\n          <span class=\"dr\" *ngIf=\"OpBalDr\">\r\n            {{ OpBalDr }}\r\n          </span>\r\n\r\n          <span class=\"cr\" *ngIf=\"OpBalCr\">\r\n            {{ OpBalCr }}\r\n          </span>\r\n\r\n          <span class=\"neutral\" *ngIf=\"!OpBalDr && !OpBalCr\">\r\n            —\r\n          </span>\r\n\r\n        </div>\r\n\r\n        <div class=\"br-summary-sub\">\r\n          Dr / Cr\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- BOOK BAL -->\r\n\r\n      <div class=\"br-summary-card\">\r\n\r\n        <div class=\"br-summary-label\">\r\n          Balance As per Bank\r\n        </div>\r\n\r\n        <div class=\"br-summary-val\">\r\n\r\n          <span class=\"dr\" *ngIf=\"BalanceDr\">\r\n            {{ BalanceDr }}\r\n          </span>\r\n\r\n          <span class=\"cr\" *ngIf=\"BalanceCr\">\r\n            {{ BalanceCr }}\r\n          </span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- UNRECONCILED -->\r\n\r\n      <div class=\"br-summary-card\">\r\n\r\n        <div class=\"br-summary-label\">\r\n          Amount Not Reflected In Bank\r\n        </div>\r\n\r\n        <div class=\"br-summary-val stacked\">\r\n\r\n          <span class=\"dr\" *ngIf=\"DrNotRef\">\r\n            {{ DrNotRef }}\r\n          </span>\r\n\r\n          <span class=\"cr\" *ngIf=\"CrNotRef\">\r\n            {{ CrNotRef }}\r\n          </span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- TARGET -->\r\n\r\n      <div class=\"br-summary-card br-summary-card--highlight\">\r\n\r\n        <div class=\"br-summary-label\">\r\n          <!-- Target Bank Balance -->\r\n           Balance As Per Company Book\r\n        </div>\r\n\r\n        <div class=\"br-summary-val\">\r\n\r\n          <span class=\"dr\" *ngIf=\"DrRef\">\r\n            {{ DrRef }}\r\n          </span>\r\n\r\n          <span class=\"cr\" *ngIf=\"CrRef\">\r\n            {{ CrRef }}\r\n          </span>\r\n\r\n          <span class=\"neutral\" *ngIf=\"!DrRef && !CrRef\">\r\n            0.00\r\n          </span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- TABLE CARD -->\r\n\r\n    <div class=\"br-card br-table-card\">\r\n\r\n      <!-- HEADER -->\r\n\r\n      <!-- <div class=\"br-card-header\">\r\n\r\n        <div class=\"br-card-title\">\r\n\r\n          <i class=\"fa fa-list-alt\"></i>\r\n\r\n          Transaction Entries\r\n\r\n        </div>\r\n\r\n        <div class=\"br-card-actions\">\r\n\r\n          <span class=\"br-record-chip\">\r\n            {{ selectedCount }} Selected\r\n          </span>\r\n\r\n          <select\r\n            class=\"br-type-filter\"\r\n            [(ngModel)]=\"typeFilter\">\r\n\r\n            <option value=\"\">\r\n              All Types\r\n            </option>\r\n\r\n            <option value=\"BR\">\r\n              BR — Receipt\r\n            </option>\r\n\r\n            <option value=\"BP\">\r\n              BP — Payment\r\n            </option>\r\n\r\n          </select>\r\n\r\n        </div>\r\n\r\n      </div> -->\r\n\r\n      <!-- TABLE -->\r\n\r\n      <div class=\"br-table-wrap\">\r\n\r\n        <table class=\"br-table\">\r\n\r\n          <thead>\r\n\r\n            <tr>\r\n\r\n              <th class=\"num\">\r\n               \r\n              </th>\r\n\r\n              <th>\r\n                Entry No\r\n              </th>\r\n\r\n              <th>\r\n                Date\r\n              </th>\r\n\r\n              <th>\r\n                Type\r\n              </th>\r\n\r\n              <th>\r\n                Party / Reference\r\n              </th>\r\n\r\n              <th>\r\n                Chq Type\r\n              </th>\r\n\r\n              <th>\r\n                Chq No\r\n              </th>\r\n\r\n              <th>\r\n                Chq Dt\r\n              </th>\r\n\r\n              <th class=\"num\">\r\n                Debit\r\n              </th>\r\n\r\n              <th class=\"num\">\r\n                Credit\r\n              </th>\r\n\r\n              <th>\r\n                Clearance Date\r\n              </th>\r\n\r\n            </tr>\r\n\r\n          </thead>\r\n\r\n          <tbody>\r\n\r\n            <tr\r\n              *ngFor=\"let data of filteredBankreconcilList\"\r\n              [class.br-row--receipt]=\"data.STATUS === 'BR'\"\r\n              [class.br-row--payment]=\"data.STATUS === 'BP'\">\r\n\r\n              <!-- CHECK -->\r\n\r\n              <td class=\"num\">\r\n\r\n                <input\r\n                  type=\"checkbox\"\r\n                  [(ngModel)]=\"data._selected\">\r\n\r\n              </td>\r\n\r\n              <!-- ENTRY -->\r\n\r\n              <td class=\"mono\">\r\n                {{ data.ENTRYNO }}\r\n              </td>\r\n\r\n              <!-- DATE -->\r\n\r\n              <td class=\"mono\">\r\n                {{ data.ENTRYDT }}\r\n              </td>\r\n\r\n              <!-- TYPE -->\r\n\r\n              <td>\r\n\r\n                <span\r\n                  class=\"br-badge\"\r\n                  [ngClass]=\"data.STATUS === 'BR'\r\n                  ? 'br-badge--br'\r\n                  : 'br-badge--bp'\">\r\n\r\n                  {{ data.STATUS }}\r\n\r\n                </span>\r\n\r\n              </td>\r\n\r\n              <!-- PARTY -->\r\n\r\n              <td>\r\n\r\n                <div\r\n                 class=\"br-party-name\"\r\n                  [innerHTML]=\"data.PARTYNAME\">\r\n                </div>\r\n\r\n                <div\r\n                  class=\"br-party-ref\"\r\n                  *ngIf=\"data.CHEQUENO\">\r\n\r\n                  {{ data.CHEQUETYPE }}\r\n                  |\r\n                  {{ data.CHEQUENO }}\r\n\r\n                </div>\r\n\r\n              </td>\r\n\r\n              <!-- CHQ TYPE -->\r\n\r\n              <td class=\"mono\">\r\n                {{ data.CHEQUETYPE || '—' }}\r\n              </td>\r\n\r\n              <!-- CHQ NO -->\r\n\r\n              <td class=\"mono\">\r\n                {{ data.CHEQUENO || '—' }}\r\n              </td>\r\n\r\n              <!-- CHQ DATE -->\r\n\r\n              <td class=\"mono\">\r\n                {{ data.CHEQUEDT || '—' }}\r\n              </td>\r\n\r\n              <!-- DR -->\r\n\r\n              <td class=\"num dr-amt\">\r\n\r\n                <span *ngIf=\"data.DRAMT\">\r\n                  {{ data.DRAMT | number:'1.2-2' }}\r\n                </span>\r\n\r\n                <span\r\n                  *ngIf=\"!data.DRAMT\"\r\n                  class=\"muted\">\r\n                  —\r\n                </span>\r\n\r\n              </td>\r\n\r\n              <!-- CR -->\r\n\r\n              <td class=\"num cr-amt\">\r\n\r\n                <span *ngIf=\"data.CRAMT\">\r\n                  {{ data.CRAMT | number:'1.2-2' }}\r\n                </span>\r\n\r\n                <span\r\n                  *ngIf=\"!data.CRAMT\"\r\n                  class=\"muted\">\r\n                  —\r\n                </span>\r\n\r\n              </td>\r\n\r\n              <!-- CLEARANCE -->\r\n\r\n              <td>\r\n\r\n              <my-date-picker\r\n  name=\"dtbld_{{ data.ENTRYNO }}\"\r\n  [options]=\"myDatePickerOptions\"\r\n  [(ngModel)]=\"data.CLEARANCEDATE\"\r\n   (dateChanged)=\"autoCheckRow($event, data)\"\r\n  class=\"form-control br-datepicker br-datepicker--inline\">\r\n</my-date-picker>\r\n              </td>\r\n\r\n            </tr>\r\n\r\n          </tbody>\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- ACTION BAR -->\r\n  <div class=\"br-action-bar\">\r\n\r\n  <!-- ✅ LEFT SIDE — Back button -->\r\n  <button class=\"br-back-btn\" type=\"button\" (click)=\"BackToSearch()\">\r\n    <i class=\"fa fa-arrow-left\"></i> Back To Search\r\n  </button>\r\n\r\n  <!-- ✅ LEFT SIDE — Records count -->\r\n  <span class=\"br-record-chip\">\r\n    {{ bankreconcilList.length }} Records\r\n  </span>\r\n\r\n  <!-- ✅ Diff pill — also left side -->\r\n  <!-- <div class=\"br-diff-pill\" [ngClass]=\"isDifferenceZero ? 'ok' : 'warn'\">\r\n    Difference : {{ differenceLabel }}\r\n  </div> -->\r\n\r\n  <!-- ✅ RIGHT SIDE — pushed by margin-left:auto on Reset -->\r\n  <button class=\"br-btn br-btn--ghost\" type=\"button\" (click)=\"Reset()\"\r\n          style=\"margin-left: auto;\">\r\n    <i class=\"fa fa-ban\"></i> Reset\r\n  </button>\r\n\r\n  <button class=\"br-btn br-btn--submit\" type=\"button\" (click)=\"BankRecUpdate()\">\r\n    <i class=\"fa fa-check-circle\"></i> Submit Reconciliation\r\n  </button>\r\n\r\n</div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/Master/BankReconcil/BankReconcil.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/Master/BankReconcil/BankReconcil.module.ts ***!
  \*********************************************************************/
/*! exports provided: BankReconcilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReconcilModule", function() { return BankReconcilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _BankReconcil_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BankReconcil.routing */ "./src/app/accounts/Master/BankReconcil/BankReconcil.routing.ts");
/* harmony import */ var _bank_reconcil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-reconcil.component */ "./src/app/accounts/Master/BankReconcil/bank-reconcil.component.ts");
/* harmony import */ var _bank_reconcil_rpt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bank-reconcil-rpt.component */ "./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BankReconcilModule = /** @class */ (function () {
    function BankReconcilModule() {
    }
    BankReconcilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_BankReconcil_routing__WEBPACK_IMPORTED_MODULE_6__["BankReconcilRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _bank_reconcil_component__WEBPACK_IMPORTED_MODULE_7__["BankReconcilComponent"], _bank_reconcil_rpt_component__WEBPACK_IMPORTED_MODULE_8__["BankReconcilStatementComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], BankReconcilModule);
    return BankReconcilModule;
}());



/***/ }),

/***/ "./src/app/accounts/Master/BankReconcil/BankReconcil.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Master/BankReconcil/BankReconcil.routing.ts ***!
  \**********************************************************************/
/*! exports provided: BankReconcilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReconcilRoutingModule", function() { return BankReconcilRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bank_reconcil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-reconcil.component */ "./src/app/accounts/Master/BankReconcil/bank-reconcil.component.ts");
/* harmony import */ var _bank_reconcil_rpt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-reconcil-rpt.component */ "./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        data: {
            title: ' Bank Reconcillation'
        },
        children: [
            { path: 'Add', component: _bank_reconcil_component__WEBPACK_IMPORTED_MODULE_2__["BankReconcilComponent"], data: { title: '' } },
            { path: 'Statement', component: _bank_reconcil_rpt_component__WEBPACK_IMPORTED_MODULE_3__["BankReconcilStatementComponent"], data: { title: '' } },
        ]
    }
];
var BankReconcilRoutingModule = /** @class */ (function () {
    function BankReconcilRoutingModule() {
    }
    BankReconcilRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BankReconcilRoutingModule);
    return BankReconcilRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BankReconcilStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReconcilStatementComponent", function() { return BankReconcilStatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BankReconcilStatementComponent = /** @class */ (function () {
    function BankReconcilStatementComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _router, _loginService, _loaderService, exportser) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.exportser = exportser;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '16px',
            width: '120px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px'
        };
        this.bankpayList = [];
        this.bankrecList = [];
        this.BankList = [];
        this.displayType = 'SEARCH';
        this.Header = "Bank Reconciliation Statement";
        this.dataForExcel = [];
        this.recdataForExcel = [];
        this.tbl10dataForExcel = [];
        this.tbl11dataForExcel = [];
        this.tbl12dataForExcel = [];
        this.tbl1 = [];
        this.tbl2 = [];
        this.tbl10 = [];
        this.tbl11 = [];
        this.tbl12 = [];
    }
    BankReconcilStatementComponent.prototype.ngOnInit = function () {
        this._loaderService.display(true);
        this.FillAccount();
        this.getCompanyName();
        this.verifyPermission('45', 'View');
        this._loaderService.display(false);
    };
    BankReconcilStatementComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    BankReconcilStatementComponent.prototype.FillAccount = function () {
        var _this = this;
        var jsonBank = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/Acc_CashBook_FillOurbank", jsonBank)
            .subscribe(function (data) {
            _this.BankList = data.Table;
            _this._loaderService.display(false);
        });
    };
    BankReconcilStatementComponent.prototype.SearchData = function () {
        var _this = this;
        this.loaderService.display(true);
        if (this.Bank == "" || this.Bank == undefined || this.Bank == "--Select OurBank--") {
            this._toasterService.toast('warning', 'warning', 'Please select Our Bank  !');
            this.loaderService.display(false);
            return false;
        }
        if (this.FromDate == "" || this.FromDate == undefined) {
            this._toasterService.toast('warning', 'warning', "From Date cannot be blank !.");
            this.loaderService.display(false);
            return false;
        }
        if (this.ToDate == "" || this.ToDate == undefined) {
            this._toasterService.toast('warning', 'warning', "To Date cannot be blank !.");
            this.loaderService.display(false);
            return false;
        }
        if (this.BankBalance == "" || this.BankBalance == undefined) {
            this._toasterService.toast('warning', 'warning', "Please Enter Bank Balance!.");
            this.loaderService.display(false);
            return false;
        }
        var jsonData = {
            _ourbank: (this.Bank == undefined) ? "" : this.Bank,
            _FromDt: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate),
            _ToDt: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate),
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        this._dataService.getData("Accounts/Fill_CashBook_BankRecRpt", jsonData)
            .subscribe(function (data) {
            _this.bankpayList = data.Table;
            _this.bankrecList = data.Table2;
            _this.IssueTotal = (data.Table1[0].TOTAL == "0.00") ? "" : (data.Table1[0].TOTAL);
            _this.RecTotal = (data.Table3[0].TOTAL == "0.00") ? "" : (data.Table3[0].TOTAL);
            _this.OurBankName = data.Table9[0].acctname;
            if (data.Table4[0].OPENINGBAL >= 0) {
                _this.OpBal = (data.Table4[0].OPENINGBAL == "0.00") ? "0" : Math.abs(data.Table4[0].OPENINGBAL);
            }
            if (data.Table5[0].CRAMT >= 0) {
                _this.CrBalance = (data.Table5[0].CRAMT == "0.00") ? "0" : Math.abs(data.Table5[0].CRAMT);
            }
            if (data.Table6[0].DRAMT >= 0) {
                _this.DrBalance = (data.Table6[0].DRAMT == "0.00") ? "0" : Math.abs(data.Table6[0].DRAMT);
            }
            if (data.Table7[0].CURRENTCRAMT >= 0) {
                _this.CurrentCrbal = (data.Table7[0].CURRENTCRAMT == "0.00") ? "" : Math.abs(data.Table7[0].CURRENTCRAMT);
            }
            if (data.Table8[0].CURRENTDRAMT >= 0) {
                _this.CurrentDrBal = (data.Table8[0].CURRENTDRAMT == "0.00") ? "" : Math.abs(data.Table8[0].CURRENTDRAMT);
            }
            _this.lblOpBal = _this.OpBal + _this.DrBalance - _this.CrBalance;
            _this.lblclbal = _this.lblOpBal + _this.CurrentDrBal - _this.CurrentCrbal;
            _this.lbldiff = _this.BankBalance - _this.lblclbal;
        });
        this.OutstandingData();
        this.loaderService.display(false);
    };
    BankReconcilStatementComponent.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    BankReconcilStatementComponent.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    BankReconcilStatementComponent.prototype.Openprint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print and Cancel to Edit')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-Print/' + No + '/', "PI Print", toolbar);
            }
            else if (Type == "JV") {
                window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
            }
            else if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-Print/' + No + '/', "CN Print", toolbar);
            }
            else if (Type == "II") {
                //  window.open('./#/popup/Account-Invoice-Print/' + No + '/' , "INV Print", toolbar);   
                var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                    "huhpnk=" + this._loginService.getLogin()[0].GUID
                    + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                    + "&Userid=" + this._loginService.getLogin()[0].CMPID
                    + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                    + "&InvoiceNo=" + No
                    + "&DisplayMode=" + "0"
                    + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
                window.open(URL_1, "Invoice Print", toolbar);
                return false;
            }
            else if (Type == "SI") {
                return false;
            }
            else if (Type == "BI") {
                return false;
            }
            else {
                window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/', "BR Print", toolbar);
            }
        }
        else {
            if (Type == "JV") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]);
            }
            else if (Type == "BR") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]);
            }
            else if (Type == "BP") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]);
            }
            else if (Type == "SI") {
                return false;
            }
            else if (Type == "II") {
                return false;
            }
            else if (Type == "PI") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]);
            }
            return false;
        }
    };
    BankReconcilStatementComponent.prototype.OutstandingData = function () {
        var _this = this;
        var jsonData = {
            _ourbank: (this.Bank == undefined) ? "" : this.Bank,
            _FromDt: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate),
            _ToDt: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate),
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        this._dataService.getData("Accounts/Fill_CashBook_BankRecRptNew1", jsonData)
            .subscribe(function (data) {
            _this.tbl1 = data.Table;
            _this.tbl2 = data.Table2;
            _this.tbl10 = data.Table10;
            _this.tbl11 = data.Table11;
            _this.tbl12 = data.Table12;
            _this.exIssueTotal = (data.Table1[0].Total == "0.00") ? "" : (data.Table1[0].Total);
            _this.exRecTotal = (data.Table3[0].Total == "0.00") ? "" : (data.Table3[0].Total);
            _this.Payoutstand = (data.Table10[0].CrAmtNotRef == "0.00") ? "" : (data.Table10[0].CrAmtNotRef);
            _this.Payoutstandtotal = (data.Table11[0].DrAmtNotRef == "0.00") ? "" : (data.Table11[0].DrAmtNotRef);
            _this.recoutstand = (data.Table12[0].ClBalance == "0.00") ? "" : (data.Table12[0].ClBalance);
            _this.OurBankName = data.Table9[0].acctname;
            _this.tempcr = (data.Table12[0].ClBalance == "0.00") ? "" : (data.Table12[0].ClBalance);
            _this.tempdr = (data.Table11[0].DrAmtNotRef == "0.00") ? "" : (data.Table11[0].DrAmtNotRef);
            _this.rptCurrentCrbal = (data.Table7[0].CurrentCrAmt == "0.00") ? "" : (data.Table7[0].CurrentCrAmt);
            _this.rptCurrentDrBal = (data.Table8[0].CurrentDrAmt == "0.00") ? "" : (data.Table8[0].CurrentDrAmt);
            _this.rptCrBalance = (data.Table5[0].CrAmt == "0.00") ? "" : (data.Table5[0].CrAmt);
            _this.rptDrBalance = (data.Table6[0].DrAmt == "0.00") ? "" : (data.Table6[0].DrAmt);
            _this.rptopbal = (data.Table4[0].OpeningBal == "0.00") ? "" : (data.Table4[0].OpeningBal);
        });
    };
    BankReconcilStatementComponent.prototype.ExportOutstand = function () {
        var _this = this;
        // this.OutstandingData();
        this.tbl1.forEach(function (row) {
            _this.dataForExcel.push(Object.values(row));
        });
        this.tbl2.forEach(function (row) {
            _this.recdataForExcel.push(Object.values(row));
        });
        this.tbl10.forEach(function (row) {
            _this.tbl10dataForExcel.push(Object.values(row));
        });
        this.tbl11.forEach(function (row) {
            _this.tbl11dataForExcel.push(Object.values(row));
        });
        this.tbl12.forEach(function (row) {
            _this.tbl12dataForExcel.push(Object.values(row));
        });
        var openingbalance = (this.rptopbal + this.rptDrBalance) - this.rptCrBalance;
        var closingbalance = (openingbalance + this.rptCurrentDrBal) - this.rptCurrentCrbal;
        var reportData = {
            data: this.dataForExcel,
            recdata: this.recdataForExcel,
            headers: ['Entry No', 'Entry Date', 'Status', 'Cheque No', 'Cheque Date', 'Clearing Date', 'Amount'],
            paytotal: this.exIssueTotal,
            rectotal: this.exRecTotal,
            recheaders: ['Entry No', 'Entry Date', 'Status', 'Cheque No', 'Cheque Date', 'Clearing Date', 'Amount'],
            pagetype: "BankRecOutStatement",
            title: this.Compname,
            subtitle: "Outstanding Reconcilation Statement For " + this.OurBankName,
            subtitle1: "From  " + this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate) + " To " + this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate),
            subtitle2: "BALANCE AS PER CASH BOOK :  ",
            payoutstand: this.Payoutstand,
            payoutstandtotal: this.Payoutstandtotal,
            recoutstand: this.recoutstand,
            clbalance: closingbalance,
            bankbalance: this.BankBalance,
            diffamt: closingbalance - this.BankBalance + this.tempdr - this.tempcr,
            crheaders: ['CrAmtNotRef'],
            drheaders: ['DrAmtNotRef'],
            clheaders: ['ClBalance'],
            crdata: this.tbl10dataForExcel,
            drdata: this.tbl11dataForExcel,
            cldata: this.tbl12dataForExcel,
        };
        this.exportser.exportExceltry(reportData, "Bankrecout");
        this.dataForExcel = [];
    };
    BankReconcilStatementComponent.prototype.Exportrecstatement = function () {
        var _this = this;
        // this.OutstandingData();
        this.tbl1.forEach(function (row) {
            _this.dataForExcel.push(Object.values(row));
        });
        this.tbl2.forEach(function (row) {
            _this.recdataForExcel.push(Object.values(row));
        });
        var openingbalance = (this.rptopbal + this.rptDrBalance) - this.rptCrBalance;
        var closingbalance = (openingbalance + this.rptCurrentDrBal) - this.rptCurrentCrbal;
        var reportData = {
            data: this.dataForExcel,
            recdata: this.recdataForExcel,
            headers: ['Entry No', 'Entry Date', 'Status', 'Cheque No', 'Cheque Date', 'Clearing Date', 'Amount'],
            paytotal: this.exIssueTotal,
            rectotal: this.exRecTotal,
            recheaders: ['Entry No', 'Entry Date', 'Status', 'Cheque No', 'Cheque Date', 'Clearing Date', 'Amount'],
            pagetype: "BankRecStatement",
            title: this.Compname,
            subtitle: "Reconcilation Statement For " + this.OurBankName,
            subtitle1: "From  " + this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate) + " To " + this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate),
            CurrentDrBal: this.CurrentDrBal,
            CurrentCrBal: this.CurrentCrbal,
            openingbalance: this.OpBal,
            clbalance: closingbalance,
            bankbalance: this.BankBalance,
            diffamt: closingbalance - this.BankBalance,
        };
        this.exportser.exportExceltry(reportData, "bankrecstatement");
        this.dataForExcel = [];
    };
    BankReconcilStatementComponent.prototype.getCompanyName = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsoncmp)
            .subscribe(function (data) {
            _this.Compname = data.Table[0].cmp_name;
            _this.loaderService.display(false);
        });
    };
    BankReconcilStatementComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] }
    ]; };
    BankReconcilStatementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-BankReconcil-rpt',
            template: __webpack_require__(/*! raw-loader!./bank-reconcil-rpt.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Master/BankReconcil/bank-reconcil-rpt.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], BankReconcilStatementComponent);
    return BankReconcilStatementComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Master/BankReconcil/bank-reconcil.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/Master/BankReconcil/bank-reconcil.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    height: calc(100vh - 95px);\r\n    overflow: hidden;\r\n}\r\n\r\n/* PAGE */\r\n\r\n.br-page {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n   padding: 5px 10px !important;\r\n  gap: 5px !important;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* RESULT LAYOUT — fills viewport, no outer scroll */\r\n\r\n.br-result-view {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n    min-height: 0;\r\n    overflow: hidden;\r\n    gap: 4px !important;\r\n\r\n}\r\n\r\n/* TOP AREA */\r\n\r\n.br-filter-card,\r\n.br-summary-strip,\r\n.br-topbar,\r\n.br-action-bar {\r\n    flex-shrink: 0;\r\n}\r\n\r\n/* TABLE CARD */\r\n\r\n.br-table-card {\r\n    flex: 1;\r\n    min-height: 0;\r\n    /* overflow: hidden; */\r\n    overflow: visible;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.br-table-wrap {\r\n    flex: 1;\r\n    min-height: 0;\r\n    /* overflow-y: auto;\r\n    overflow-x: auto; */\r\n      overflow:auto;\r\n    position:relative;\r\n}\r\n\r\n/* TABLE HEADER */\r\n\r\n.br-card-header {\r\n    flex-shrink: 0;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* TOP */\r\n\r\n/* ============================= */\r\n\r\n.br-search-header {\r\n  margin-bottom: 5px !important;\r\n}\r\n\r\n.br-title {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  color: #111827;\r\n}\r\n\r\n.br-subtitle {\r\n  margin-top: 4px;\r\n  color: #6B7280;\r\n  font-size: 13px;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* CARD */\r\n\r\n/* ============================= */\r\n\r\n.br-card {\r\n  background: #fff;\r\n  border-radius: 14px;\r\n  border: 1px solid #E5E7EB;\r\n  box-shadow: 0 2px 10px rgba(0,0,0,0.04);\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* FILTER */\r\n\r\n/* ============================= */\r\n\r\n.br-filter-card {\r\n  padding: 18px;\r\n  max-width: 1250px;\r\n}\r\n\r\n/* BANK DROPDOWN - Takes remaining space */\r\n\r\n.br-filter-row .br-field--wide {\r\n  flex-grow: 1 !important; \r\n  min-width: 200px !important;\r\n}\r\n\r\n/* DATE PICKERS - Fixed size */\r\n\r\n.br-filter-row .date-field {\r\n  width: 150px !important;\r\n  flex-shrink: 0 !important;\r\n}\r\n\r\n/* BUTTONS - Stay on the same line, pushed to bottom */\r\n\r\n.br-filter-row .inline-actions {\r\n  display: flex !important;\r\n  flex-direction: row !important;\r\n  gap: 10px !important;\r\n  margin-top: 0 !important;\r\n  padding-bottom: 0 !important;\r\n  flex-shrink: 0 !important;\r\n}\r\n\r\n/* Make sure the input boxes inside the new row look correct */\r\n\r\n.br-filter-row .br-datepicker,\r\n.br-filter-row .br-ng-select {\r\n  width: 100% !important;\r\n}\r\n\r\n.br-field label {\r\n  display: block;\r\n  margin-bottom: 6px;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  color: #64748B;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.br-req {\r\n  color: #DC2626;\r\n}\r\n\r\n.br-search-input,\r\n.br-datepicker,\r\n.br-type-filter,\r\n.form-control {\r\n  border-radius: 10px !important;\r\n  border: 1px solid #D1D5DB !important;\r\n  min-height: 30px;\r\n  font-size: 13px;\r\n}\r\n\r\n.br-search-actions {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 18px;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* BUTTONS */\r\n\r\n/* ============================= */\r\n\r\n.br-btn {\r\n  height: 25px;\r\n  padding: 0 12px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n}\r\n\r\n.br-btn--primary,\r\n.br-btn--submit {\r\n  background: #2563EB;\r\n  color: #fff;\r\n}\r\n\r\n.br-btn--primary:hover,\r\n.br-btn--submit:hover {\r\n  background: #1D4ED8;\r\n}\r\n\r\n.br-btn--ghost {\r\n  background: #fff;\r\n  border: 1px solid #D1D5DB;\r\n}\r\n\r\n.br-back-btn {\r\n  border: 1px solid #D1D5DB;\r\n  background: #fff;\r\n  height: 36px;\r\n  padding: 0 14px;\r\n  border-radius: 10px;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* TOPBAR */\r\n\r\n/* ============================= */\r\n\r\n.br-topbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* SUMMARY */\r\n\r\n/* ============================= */\r\n\r\n.br-summary-strip {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.br-summary-card {\r\n  background: #fff;\r\n  border-radius: 12px;\r\n  border: 1px solid #E5E7EB;\r\n  /* padding: 10px 12px; */\r\n   padding: 4px 8px;\r\n}\r\n\r\n.br-summary-card--highlight {\r\n  background: #EFF6FF;\r\n  border-color: #BFDBFE;\r\n}\r\n\r\n.br-summary-label {\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  color: #64748B;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.br-summary-val {\r\n  margin-top: 1px;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n1\r\n\r\n.br-summary-val .dr {\r\n  color: #DC2626;\r\n}\r\n\r\n.br-summary-val .cr {\r\n  color: #059669;\r\n}\r\n\r\n.br-summary-val .neutral {\r\n  color: #94A3B8;\r\n}\r\n\r\n.br-summary-sub {\r\n  margin-top: 4px;\r\n  font-size: 10px;\r\n  color: #64748B;\r\n}\r\n\r\n.stacked {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* TABLE */\r\n\r\n/* ============================= */\r\n\r\n.br-card-header {\r\n  padding: 12px 14px;\r\n  border-bottom: 1px solid #E5E7EB;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.br-card-title {\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.br-card-actions {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.br-record-chip {\r\n  background: #EEF2FF;\r\n  color: #4338CA;\r\n  padding: 4px 10px;\r\n  border-radius: 999px;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n/* TABLE */\r\n\r\n.br-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-size: 11px;\r\n  table-layout: fixed;\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.br-table thead th {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  color: #6B7280;\r\n  padding: 7px 8px;\r\n  border-bottom: 0.5px solid #E5E7EB;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 20;\r\n  background: #F9FAFB;\r\n}\r\n\r\n/* BODY */\r\n\r\n.br-table tbody td {\r\n  padding: 6px 8px;\r\n  border-bottom: 0.5px solid #F3F4F6;\r\n  color: #111827;\r\n  vertical-align: middle;\r\n  font-size: 11px;\r\n  overflow: visible;\r\n}\r\n\r\n/* PARTY NAME */\r\n\r\n/* .br-party-name {\r\n  font-size: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n  max-width: 220px;\r\n  word-break: break-word;\r\n} */\r\n\r\n/* PARTY REF */\r\n\r\n/* .br-party-ref {\r\n  font-size: 9px;\r\n  color: #6B7280;\r\n  margin-top: 1px;\r\n  line-height: 1.2;\r\n} */\r\n\r\n/* MONO TEXT */\r\n\r\n.br-table .mono {\r\n  font-size: 10px;\r\n  color: #6B7280;\r\n}\r\n\r\n/* DATE PICKER COLUMN */\r\n\r\n.br-table td:last-child,\r\n.br-table th:last-child {\r\n  min-width: 130px;\r\n  width: 130px;\r\n}\r\n\r\n.br-table td,\r\n.br-table th{\r\n    vertical-align:middle;\r\n}\r\n\r\n/* DATE PICKER */\r\n\r\n.br-datepicker--inline {\r\n  min-width: 120px;\r\n  width: 120px;\r\n  font-size: 10px;\r\n}\r\n\r\n/* DATE PICKER INPUT */\r\n\r\n.br-datepicker--inline input {\r\n  height: 28px !important;\r\n  font-size: 10px !important;\r\n  padding: 2px 6px !important;\r\n}\r\n\r\n/* BADGES */\r\n\r\n.br-badge {\r\n  display: inline-flex;\r\n  padding: 1px 6px;\r\n  border-radius: 99px;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* DEBIT CREDIT */\r\n\r\n.dr-amt,\r\n.cr-amt {\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* CHECKBOX COLUMN */\r\n\r\n/* .br-table td:first-child,\r\n.br-table th:first-child {\r\n  width: 50px;\r\n  text-align: center;\r\n} */\r\n\r\n/* ENTRY COLUMN */\r\n\r\n/* .br-table td:nth-child(2),\r\n.br-table th:nth-child(2) {\r\n  min-width: 90px;\r\n} */\r\n\r\n/* 1. ENTRY NO COLUMN (Now the 1st column) */\r\n\r\n/* .br-table td:first-child,\r\n.br-table th:first-child {\r\n  min-width: 160px; \r\n  width: 160px;\r\n  white-space: nowrap; \r\n  text-align: left;\r\n} */\r\n\r\n/* 2. DATE COLUMN (Now the 2nd column) */\r\n\r\n/* .br-table td:nth-child(2),\r\n.br-table th:nth-child(2) {\r\n  min-width: 75px;\r\n  width: 75px;\r\n  white-space: nowrap;\r\n} */\r\n\r\n/* 3. TYPE COLUMN (Now the 3rd column) */\r\n\r\n/* .br-table td:nth-child(3),\r\n.br-table th:nth-child(3) {\r\n  min-width: 50px;\r\n  width: 50px;\r\n  text-align: center;\r\n} */\r\n\r\n/* 4. PARTY / REFERENCE COLUMN (Now the 4th column) */\r\n\r\n/* .br-table td:nth-child(4),\r\n.br-table th:nth-child(4) {\r\n  min-width: 300px;\r\n  width: 300px;\r\n  max-width: 300px;\r\n} */\r\n\r\n/* 10. CLEARANCE DATE (Still the last column, handled automatically) */\r\n\r\n/* .br-table td:last-child,\r\n.br-table th:last-child {\r\n  min-width: 130px;\r\n  width: 130px;\r\n} */\r\n\r\n/* 1. CHECKBOX (New First Column) */\r\n\r\n.br-table th:nth-child(1), .br-table td:nth-child(1) { \r\n  width: 40px; \r\n  text-align: center; \r\n}\r\n\r\n/* 2. ENTRY NO (Shifted from 1 to 2) */\r\n\r\n.br-table th:nth-child(2), .br-table td:nth-child(2) { \r\n  width: 110px; \r\n}\r\n\r\n/* 3. DATE (Shifted from 2 to 3) */\r\n\r\n.br-table th:nth-child(3), .br-table td:nth-child(3) { \r\n  width: 70px; \r\n  text-align: center; \r\n}\r\n\r\n/* 4. TYPE (Shifted from 3 to 4) */\r\n\r\n.br-table th:nth-child(4), .br-table td:nth-child(4) { \r\n  width: 60px; \r\n  text-align: left; \r\n}\r\n\r\n/* 5. PARTY / REF (Shifted from 4 to 5) */\r\n\r\n.br-table th:nth-child(5), .br-table td:nth-child(5) { \r\n  width: 270px; \r\n  white-space: normal; /* Let the name stack on multiple lines */\r\n}\r\n\r\n/* 6. CHQ TYPE (Shifted from 5 to 6) */\r\n\r\n.br-table th:nth-child(6), .br-table td:nth-child(6) { \r\n  width: 75px; \r\n  text-align: center; \r\n}\r\n\r\n/* 7. CHEQUE NO (Shifted from 6 to 7) */\r\n\r\n.br-table th:nth-child(7), .br-table td:nth-child(7) { \r\n  width: 75px; \r\n  text-align: center; \r\n}\r\n\r\n/* 8. CHEQUE DATE (Shifted from 7 to 8) */\r\n\r\n.br-table th:nth-child(8), .br-table td:nth-child(8) { \r\n  width: 75px; \r\n  text-align: center; \r\n}\r\n\r\n/* 9. DEBIT (Shifted from 8 to 9) */\r\n\r\n.br-table th:nth-child(9), .br-table td:nth-child(9) { \r\n  width: 85px; \r\n  text-align: right; \r\n  padding-right: 12px !important; \r\n}\r\n\r\n/* 10. CREDIT (Shifted from 9 to 10) */\r\n\r\n.br-table th:nth-child(10), .br-table td:nth-child(10) { \r\n  width: 85px; \r\n  text-align: right; \r\n  padding-right: 12px !important; \r\n}\r\n\r\n/* 11. CLEARANCE DATE (Shifted from 10 to 11) */\r\n\r\n.br-table th:nth-child(11), .br-table td:nth-child(11) { \r\n  width: 120px; \r\n  overflow: visible !important; /* Required so calendar pop-up escapes cell */\r\n}\r\n\r\n/* RESPONSIVE */\r\n\r\n@media (max-width: 1200px) {\r\n  .br-table {\r\n    min-width: 1200px;\r\n  }\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* TEXT */\r\n\r\n/* ============================= */\r\n\r\n/* .br-party-name {\r\n  font-weight: 600;\r\n} */\r\n\r\n.br-party-ref {\r\n  /* margin-top: 3px;\r\n  font-size: 11px;\r\n  color: #64748B; */\r\n    font-size: 9px;\r\n  line-height: 10px;\r\n  max-height: 20px;\r\n  margin-top: 1px;\r\n}\r\n\r\n.mono {\r\n  font-family: monospace;\r\n  color: #64748B;\r\n}\r\n\r\n.dr-amt {\r\n  color: #DC2626;\r\n  font-weight: 700;\r\n}\r\n\r\n.cr-amt {\r\n  color: #059669;\r\n  font-weight: 700;\r\n}\r\n\r\n.muted {\r\n  color: #CBD5E1;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* ACTION BAR */\r\n\r\n/* ============================= */\r\n\r\n.br-action-bar {\r\n  flex-shrink: 0;\r\n  background: rgba(255,255,255,0.95);\r\n  border-top: 1px solid #E5E7EB;\r\n  padding: 8px 14px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n/* ✅ Push reset + submit to right side */\r\n\r\n.br-action-bar .br-btn--ghost {\r\n  margin-left: auto;  /* ← pushes everything after it to the right */\r\n}\r\n\r\n.br-diff-pill {\r\n  margin-right: auto;\r\n  padding: 7px 14px;\r\n  border-radius: 999px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.br-diff-pill.ok {\r\n  background: #DCFCE7;\r\n  color: #166534;\r\n}\r\n\r\n.br-diff-pill.warn {\r\n  background: #FEF3C7;\r\n  color: #92400E;\r\n}\r\n\r\n/* ============================= */\r\n\r\n/* RESPONSIVE */\r\n\r\n/* ============================= */\r\n\r\n@media (max-width: 992px) {\r\n\r\n  .br-filter-grid {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .br-summary-strip {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .br-filter-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .br-summary-strip {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .br-card-header {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n  }\r\n\r\n  .br-action-bar {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n}\r\n\r\n/* REMOVE OUTER BOX OF DATE PICKER */\r\n\r\n.br-datepicker--inline,\r\n.br-datepicker--inline .mydp,\r\n.br-datepicker--inline .mydp input,\r\n.br-datepicker--inline .selectiongroup {\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n  background: transparent !important;\r\n}\r\n\r\n/* DATE PICKER INPUT */\r\n\r\n.br-datepicker--inline input {\r\n  height: 22px !important;\r\n  min-height: 22px !important;\r\n  padding: 0 4px !important;\r\n  font-size: 10px !important;\r\n  border: 1px solid #D1D5DB !important;\r\n  border-radius: 4px !important;\r\n  background: #fff !important;\r\n}\r\n\r\n/* REMOVE EXTRA CONTAINER SPACE */\r\n\r\n.br-datepicker--inline .mydp {\r\n  width: 110px !important;\r\n}\r\n\r\n/* REMOVE FORM CONTROL STYLE */\r\n\r\n.br-datepicker.form-control,\r\n.br-datepicker--inline.form-control {\r\n  padding: 0 !important;\r\n  border: none !important;\r\n  background: transparent !important;\r\n  height: auto !important;\r\n}\r\n\r\n/* CALENDAR BUTTON */\r\n\r\n.br-datepicker--inline .btnpicker {\r\n  height: 24px !important;\r\n  min-height: 24px !important;\r\n  border: 1px solid #D1D5DB !important;\r\n  border-left: none !important;\r\n  border-radius: 0 4px 4px 0 !important;\r\n  background: #F9FAFB !important;\r\n}\r\n\r\n/* SMALLER TABLE ROW */\r\n\r\n.br-table tbody td {\r\n  padding-top: 1px !important;\r\n  padding-bottom: 1px !important;\r\n  line-height: 1 !important;\r\n}\r\n\r\n.br-table th {\r\n  white-space: nowrap !important;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n}\r\n\r\n.br-party-name{\r\n    font-size:10px;\r\n    line-height:11px;\r\n    max-height:24px;\r\n    overflow:hidden;\r\n    display:-webkit-box;\r\n    -webkit-line-clamp:2;\r\n    word-break:break-word;\r\n}\r\n\r\n/* SECOND LINE */\r\n\r\n.br-party-ref{\r\n    font-size:9px;\r\n    line-height:10px;\r\n    color:#6B7280;\r\n\r\n    max-height:24px;\r\n    overflow:hidden;\r\n\r\n    display:-webkit-box;\r\n    -webkit-line-clamp:2;\r\n\r\n    word-break:break-word;\r\n}\r\n\r\n/* .br-table td:nth-child(5),\r\n.br-table th:nth-child(5){\r\n    width:220px;\r\n    max-width:220px;\r\n} */\r\n\r\n::ng-deep .br-datepicker--inline .selector {\r\n    background: #ffffff !important;\r\n    border: 1px solid #D1D5DB !important;\r\n    box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important;\r\n    z-index: 9999 !important;\r\n    position: absolute !important;\r\n}\r\n\r\n.search-card-clean {\r\n  padding: 12px 18px !important;\r\n  margin-bottom: 10px !important;\r\n}\r\n\r\n/* 1. The Flex Container (Forces one line) */\r\n\r\n/* =========================================\r\n   SEARCH ROW LAYOUT\r\n========================================= */\r\n\r\n.clean-row-layout{\r\n  display:flex;\r\n  align-items:flex-end;\r\n  gap:10px;\r\n  flex-wrap:nowrap;\r\n  width:100%;\r\n}\r\n\r\n/* =========================================\r\n   COMMON FIELD\r\n========================================= */\r\n\r\n.clean-field{\r\n  display:flex;\r\n  flex-direction:column;\r\n}\r\n\r\n.clean-field label{\r\n  font-size:11px;\r\n  font-weight:600;\r\n  margin-bottom:4px;\r\n  white-space:nowrap;\r\n}\r\n\r\n/* =========================================\r\n   BANK FIELD\r\n========================================= */\r\n\r\n.clean-bank{\r\n  flex:1 1 auto;\r\n  min-width:250px;\r\n}\r\n\r\n/* =========================================\r\n   DATE FIELD\r\n========================================= */\r\n\r\n.clean-date{\r\n  flex:0 0 135px;\r\n  width:135px;\r\n  min-width:135px;\r\n}\r\n\r\n/* =========================================\r\n   ACTION BUTTONS\r\n========================================= */\r\n\r\n.clean-actions{\r\n  display:flex;\r\n  gap:8px;\r\n  align-items:flex-end;\r\n  margin-bottom:1px;\r\n  white-space:nowrap;\r\n}\r\n\r\n.clean-actions .br-btn{\r\n  height:32px !important;\r\n  padding:0 14px !important;\r\n  font-size:12px !important;\r\n}\r\n\r\n/* =========================================\r\n   NG-SELECT\r\n========================================= */\r\n\r\n.clean-bank ::ng-deep .ng-select-container{\r\n  height:32px !important;\r\n  min-height:32px !important;\r\n  border-radius:4px !important;\r\n  border:1px solid #ced4da !important;\r\n  box-shadow:none !important;\r\n}\r\n\r\n.clean-bank ::ng-deep .ng-value-container{\r\n  height:30px !important;\r\n  display:flex !important;\r\n  align-items:center !important;\r\n  padding-left:8px !important;\r\n  font-size:13px !important;\r\n}\r\n\r\n/* =========================================\r\n   DATE PICKER\r\n========================================= */\r\n\r\n::ng-deep .search-date-control .mydp{\r\n  width:135px !important;\r\n  min-width:135px !important;\r\n  display:block !important;\r\n}\r\n\r\n/* Main wrapper */\r\n\r\n::ng-deep .search-date-control .selectiongroup{\r\n  height:30px !important;\r\n  border:1px solid #ced4da !important;\r\n  border-radius:4px !important;\r\n  background:#fff !important;\r\n  overflow:visible !important;\r\n}\r\n\r\n/* Input */\r\n\r\n::ng-deep .search-date-control input{\r\n  height:30px !important;\r\n  line-height:30px !important;\r\n  border:none !important;\r\n  outline:none !important;\r\n  box-shadow:none !important;\r\n  font-size:12px !important;\r\n  padding-left:6px !important;\r\n  background:transparent !important;\r\n}\r\n\r\n/* Calendar + clear buttons */\r\n\r\n::ng-deep .search-date-control .btnpicker,\r\n::ng-deep .search-date-control .btnclear{\r\n  width:24px !important;\r\n  min-width:24px !important;\r\n  height:30px !important;\r\n  padding:0 !important;\r\n  border:none !important;\r\n  background:#f8fafc !important;\r\n}\r\n\r\n/* Force icon visibility */\r\n\r\n::ng-deep .search-date-control .btnpicker span,\r\n::ng-deep .search-date-control .btnclear span,\r\n::ng-deep .search-date-control .btnpicker i,\r\n::ng-deep .search-date-control .btnclear i{\r\n  display:inline-block !important;\r\n  visibility:visible !important;\r\n  opacity:1 !important;\r\n  font-size:13px !important;\r\n  line-height:1 !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvTWFzdGVyL0JhbmtSZWNvbmNpbC9iYW5rLXJlY29uY2lsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQSxTQUFTOztBQUNUO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0dBQ2pCLDRCQUE0QjtFQUM3QixtQkFBbUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBLG9EQUFvRDs7QUFDcEQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUEsYUFBYTs7QUFDYjs7OztJQUlJLGNBQWM7QUFDbEI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYjt1QkFDbUI7TUFDakIsYUFBYTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLFFBQVE7O0FBQ1Isa0NBQWtDOztBQUVsQztFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLFNBQVM7O0FBQ1Qsa0NBQWtDOztBQUVsQztFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVDQUF1QztBQUN6Qzs7QUFFQSxrQ0FBa0M7O0FBQ2xDLFdBQVc7O0FBQ1gsa0NBQWtDOztBQUVsQztFQUNFLGFBQWE7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QTBCO0VBQzFCLDRCQUE0QjtFQUM1QixtQ0FBbUM7RUFDbkMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTs7MkNBRTJDOztBQUUzQztFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBLDZCQUE2Qjs7QUFDN0I7O0VBRUUscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUEsMEJBQTBCOztBQUMxQjs7OztFQUlFLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9NYXN0ZXIvQmFua1JlY29uY2lsL2JhbmstcmVjb25jaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBQQUdFICovXHJcbi5ici1wYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICBnYXA6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUkVTVUxUIExBWU9VVCDigJQgZmlsbHMgdmlld3BvcnQsIG5vIG91dGVyIHNjcm9sbCAqL1xyXG4uYnItcmVzdWx0LXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBnYXA6IDRweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLyogVE9QIEFSRUEgKi9cclxuLmJyLWZpbHRlci1jYXJkLFxyXG4uYnItc3VtbWFyeS1zdHJpcCxcclxuLmJyLXRvcGJhcixcclxuLmJyLWFjdGlvbi1iYXIge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8qIFRBQkxFIENBUkQgKi9cclxuLmJyLXRhYmxlLWNhcmQge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJyLXRhYmxlLXdyYXAge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bzsgKi9cclxuICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBUQUJMRSBIRUFERVIgKi9cclxuLmJyLWNhcmQtaGVhZGVyIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBUT1AgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5ici1zZWFyY2gtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuLmJyLXN1YnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgY29sb3I6ICM2QjcyODA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBDQVJEICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnItY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU3RUI7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDQpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBGSUxURVIgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5ici1maWx0ZXItY2FyZCB7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBtYXgtd2lkdGg6IDEyNTBweDtcclxufVxyXG5cclxuLyogQkFOSyBEUk9QRE9XTiAtIFRha2VzIHJlbWFpbmluZyBzcGFjZSAqL1xyXG4uYnItZmlsdGVyLXJvdyAuYnItZmllbGQtLXdpZGUge1xyXG4gIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyBcclxuICBtaW4td2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIERBVEUgUElDS0VSUyAtIEZpeGVkIHNpemUgKi9cclxuLmJyLWZpbHRlci1yb3cgLmRhdGUtZmllbGQge1xyXG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEJVVFRPTlMgLSBTdGF5IG9uIHRoZSBzYW1lIGxpbmUsIHB1c2hlZCB0byBib3R0b20gKi9cclxuLmJyLWZpbHRlci1yb3cgLmlubGluZS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gIGdhcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSB0aGUgaW5wdXQgYm94ZXMgaW5zaWRlIHRoZSBuZXcgcm93IGxvb2sgY29ycmVjdCAqL1xyXG4uYnItZmlsdGVyLXJvdyAuYnItZGF0ZXBpY2tlcixcclxuLmJyLWZpbHRlci1yb3cgLmJyLW5nLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5ici1maWVsZCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhCO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5ici1yZXEge1xyXG4gIGNvbG9yOiAjREMyNjI2O1xyXG59XHJcblxyXG4uYnItc2VhcmNoLWlucHV0LFxyXG4uYnItZGF0ZXBpY2tlcixcclxuLmJyLXR5cGUtZmlsdGVyLFxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQiAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uYnItc2VhcmNoLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIEJVVFRPTlMgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5ici1idG4ge1xyXG4gIGhlaWdodDogMjVweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA3cHg7XHJcbn1cclxuXHJcbi5ici1idG4tLXByaW1hcnksXHJcbi5ici1idG4tLXN1Ym1pdCB7XHJcbiAgYmFja2dyb3VuZDogIzI1NjNFQjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJyLWJ0bi0tcHJpbWFyeTpob3ZlcixcclxuLmJyLWJ0bi0tc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMUQ0RUQ4O1xyXG59XHJcblxyXG4uYnItYnRuLS1naG9zdCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRDFENURCO1xyXG59XHJcblxyXG4uYnItYmFjay1idG4ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQ1REI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIFRPUEJBUiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmJyLXRvcGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBTVU1NQVJZICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnItc3VtbWFyeS1zdHJpcCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYnItc3VtbWFyeS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1RTdFQjtcclxuICAvKiBwYWRkaW5nOiAxMHB4IDEycHg7ICovXHJcbiAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbn1cclxuXHJcbi5ici1zdW1tYXJ5LWNhcmQtLWhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZDogI0VGRjZGRjtcclxuICBib3JkZXItY29sb3I6ICNCRkRCRkU7XHJcbn1cclxuXHJcbi5ici1zdW1tYXJ5LWxhYmVsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzY0NzQ4QjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYnItc3VtbWFyeS12YWwge1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufTFcclxuXHJcbi5ici1zdW1tYXJ5LXZhbCAuZHIge1xyXG4gIGNvbG9yOiAjREMyNjI2O1xyXG59XHJcblxyXG4uYnItc3VtbWFyeS12YWwgLmNyIHtcclxuICBjb2xvcjogIzA1OTY2OTtcclxufVxyXG5cclxuLmJyLXN1bW1hcnktdmFsIC5uZXV0cmFsIHtcclxuICBjb2xvcjogIzk0QTNCODtcclxufVxyXG5cclxuLmJyLXN1bW1hcnktc3ViIHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhCO1xyXG59XHJcblxyXG4uc3RhY2tlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBUQUJMRSAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmJyLWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU3RUI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJyLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmJyLWNhcmQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmJyLXJlY29yZC1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiAjRUVGMkZGO1xyXG4gIGNvbG9yOiAjNDMzOENBO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4vKiBUQUJMRSAqL1xyXG4uYnItdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogSEVBREVSICovXHJcbi5ici10YWJsZSB0aGVhZCB0aCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2QjcyODA7XHJcbiAgcGFkZGluZzogN3B4IDhweDtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRTVFN0VCO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiAjRjlGQUZCO1xyXG59XHJcblxyXG4vKiBCT0RZICovXHJcbi5ici10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogNnB4IDhweDtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRjNGNEY2O1xyXG4gIGNvbG9yOiAjMTExODI3O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4vKiBQQVJUWSBOQU1FICovXHJcbi8qIC5ici1wYXJ0eS1uYW1lIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1heC13aWR0aDogMjIwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufSAqL1xyXG5cclxuLyogUEFSVFkgUkVGICovXHJcbi8qIC5ici1wYXJ0eS1yZWYge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGNvbG9yOiAjNkI3MjgwO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59ICovXHJcblxyXG4vKiBNT05PIFRFWFQgKi9cclxuLmJyLXRhYmxlIC5tb25vIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICM2QjcyODA7XHJcbn1cclxuXHJcbi8qIERBVEUgUElDS0VSIENPTFVNTiAqL1xyXG4uYnItdGFibGUgdGQ6bGFzdC1jaGlsZCxcclxuLmJyLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xyXG4gIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG59XHJcbi5ici10YWJsZSB0ZCxcclxuLmJyLXRhYmxlIHRoe1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcbi8qIERBVEUgUElDS0VSICovXHJcbi5ici1kYXRlcGlja2VyLS1pbmxpbmUge1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLyogREFURSBQSUNLRVIgSU5QVVQgKi9cclxuLmJyLWRhdGVwaWNrZXItLWlubGluZSBpbnB1dCB7XHJcbiAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMnB4IDZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBCQURHRVMgKi9cclxuLmJyLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAxcHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIERFQklUIENSRURJVCAqL1xyXG4uZHItYW10LFxyXG4uY3ItYW10IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogQ0hFQ0tCT1ggQ09MVU1OICovXHJcbi8qIC5ici10YWJsZSB0ZDpmaXJzdC1jaGlsZCxcclxuLmJyLXRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi8qIEVOVFJZIENPTFVNTiAqL1xyXG4vKiAuYnItdGFibGUgdGQ6bnRoLWNoaWxkKDIpLFxyXG4uYnItdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbn0gKi9cclxuIC8qIDEuIEVOVFJZIE5PIENPTFVNTiAoTm93IHRoZSAxc3QgY29sdW1uKSAqL1xyXG4vKiAuYnItdGFibGUgdGQ6Zmlyc3QtY2hpbGQsXHJcbi5ici10YWJsZSB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgbWluLXdpZHRoOiAxNjBweDsgXHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0gKi9cclxuXHJcbi8qIDIuIERBVEUgQ09MVU1OIChOb3cgdGhlIDJuZCBjb2x1bW4pICovXHJcbi8qIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoMiksXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoMikge1xyXG4gIG1pbi13aWR0aDogNzVweDtcclxuICB3aWR0aDogNzVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59ICovXHJcblxyXG4vKiAzLiBUWVBFIENPTFVNTiAoTm93IHRoZSAzcmQgY29sdW1uKSAqL1xyXG4vKiAuYnItdGFibGUgdGQ6bnRoLWNoaWxkKDMpLFxyXG4uYnItdGFibGUgdGg6bnRoLWNoaWxkKDMpIHtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcblxyXG4vKiA0LiBQQVJUWSAvIFJFRkVSRU5DRSBDT0xVTU4gKE5vdyB0aGUgNHRoIGNvbHVtbikgKi9cclxuLyogLmJyLXRhYmxlIHRkOm50aC1jaGlsZCg0KSxcclxuLmJyLXRhYmxlIHRoOm50aC1jaGlsZCg0KSB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufSAqL1xyXG5cclxuLyogMTAuIENMRUFSQU5DRSBEQVRFIChTdGlsbCB0aGUgbGFzdCBjb2x1bW4sIGhhbmRsZWQgYXV0b21hdGljYWxseSkgKi9cclxuLyogLmJyLXRhYmxlIHRkOmxhc3QtY2hpbGQsXHJcbi5ici10YWJsZSB0aDpsYXN0LWNoaWxkIHtcclxuICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxufSAqL1xyXG4vKiAxLiBDSEVDS0JPWCAoTmV3IEZpcnN0IENvbHVtbikgKi9cclxuLmJyLXRhYmxlIHRoOm50aC1jaGlsZCgxKSwgLmJyLXRhYmxlIHRkOm50aC1jaGlsZCgxKSB7IFxyXG4gIHdpZHRoOiA0MHB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4vKiAyLiBFTlRSWSBOTyAoU2hpZnRlZCBmcm9tIDEgdG8gMikgKi9cclxuLmJyLXRhYmxlIHRoOm50aC1jaGlsZCgyKSwgLmJyLXRhYmxlIHRkOm50aC1jaGlsZCgyKSB7IFxyXG4gIHdpZHRoOiAxMTBweDsgXHJcbn1cclxuXHJcbi8qIDMuIERBVEUgKFNoaWZ0ZWQgZnJvbSAyIHRvIDMpICovXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoMyksIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoMykgeyBcclxuICB3aWR0aDogNzBweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLyogNC4gVFlQRSAoU2hpZnRlZCBmcm9tIDMgdG8gNCkgKi9cclxuLmJyLXRhYmxlIHRoOm50aC1jaGlsZCg0KSwgLmJyLXRhYmxlIHRkOm50aC1jaGlsZCg0KSB7IFxyXG4gIHdpZHRoOiA2MHB4OyBcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxufVxyXG5cclxuLyogNS4gUEFSVFkgLyBSRUYgKFNoaWZ0ZWQgZnJvbSA0IHRvIDUpICovXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoNSksIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoNSkgeyBcclxuICB3aWR0aDogMjcwcHg7IFxyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIExldCB0aGUgbmFtZSBzdGFjayBvbiBtdWx0aXBsZSBsaW5lcyAqL1xyXG59XHJcblxyXG4vKiA2LiBDSFEgVFlQRSAoU2hpZnRlZCBmcm9tIDUgdG8gNikgKi9cclxuLmJyLXRhYmxlIHRoOm50aC1jaGlsZCg2KSwgLmJyLXRhYmxlIHRkOm50aC1jaGlsZCg2KSB7IFxyXG4gIHdpZHRoOiA3NXB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4vKiA3LiBDSEVRVUUgTk8gKFNoaWZ0ZWQgZnJvbSA2IHRvIDcpICovXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoNyksIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoNykgeyBcclxuICB3aWR0aDogNzVweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLyogOC4gQ0hFUVVFIERBVEUgKFNoaWZ0ZWQgZnJvbSA3IHRvIDgpICovXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoOCksIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoOCkgeyBcclxuICB3aWR0aDogNzVweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLyogOS4gREVCSVQgKFNoaWZ0ZWQgZnJvbSA4IHRvIDkpICovXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoOSksIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoOSkgeyBcclxuICB3aWR0aDogODVweDsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi8qIDEwLiBDUkVESVQgKFNoaWZ0ZWQgZnJvbSA5IHRvIDEwKSAqL1xyXG4uYnItdGFibGUgdGg6bnRoLWNoaWxkKDEwKSwgLmJyLXRhYmxlIHRkOm50aC1jaGlsZCgxMCkgeyBcclxuICB3aWR0aDogODVweDsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi8qIDExLiBDTEVBUkFOQ0UgREFURSAoU2hpZnRlZCBmcm9tIDEwIHRvIDExKSAqL1xyXG4uYnItdGFibGUgdGg6bnRoLWNoaWxkKDExKSwgLmJyLXRhYmxlIHRkOm50aC1jaGlsZCgxMSkgeyBcclxuICB3aWR0aDogMTIwcHg7IFxyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IC8qIFJlcXVpcmVkIHNvIGNhbGVuZGFyIHBvcC11cCBlc2NhcGVzIGNlbGwgKi9cclxufVxyXG4vKiBSRVNQT05TSVZFICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuYnItdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBURVhUICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKiAuYnItcGFydHktbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSAqL1xyXG5cclxuLmJyLXBhcnR5LXJlZiB7XHJcbiAgLyogbWFyZ2luLXRvcDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogIzY0NzQ4QjsgKi9cclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcblxyXG4ubW9ubyB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBjb2xvcjogIzY0NzQ4QjtcclxufVxyXG5cclxuLmRyLWFtdCB7XHJcbiAgY29sb3I6ICNEQzI2MjY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNyLWFtdCB7XHJcbiAgY29sb3I6ICMwNTk2Njk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm11dGVkIHtcclxuICBjb2xvcjogI0NCRDVFMTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogQUNUSU9OIEJBUiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uYnItYWN0aW9uLWJhciB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjk1KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTdFQjtcclxuICBwYWRkaW5nOiA4cHggMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4vKiDinIUgUHVzaCByZXNldCArIHN1Ym1pdCB0byByaWdodCBzaWRlICovXHJcbi5ici1hY3Rpb24tYmFyIC5ici1idG4tLWdob3N0IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bzsgIC8qIOKGkCBwdXNoZXMgZXZlcnl0aGluZyBhZnRlciBpdCB0byB0aGUgcmlnaHQgKi9cclxufVxyXG5cclxuLmJyLWRpZmYtcGlsbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnItZGlmZi1waWxsLm9rIHtcclxuICBiYWNrZ3JvdW5kOiAjRENGQ0U3O1xyXG4gIGNvbG9yOiAjMTY2NTM0O1xyXG59XHJcblxyXG4uYnItZGlmZi1waWxsLndhcm4ge1xyXG4gIGJhY2tncm91bmQ6ICNGRUYzQzc7XHJcbiAgY29sb3I6ICM5MjQwMEU7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIFJFU1BPTlNJVkUgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAuYnItZmlsdGVyLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxuXHJcbiAgLmJyLXN1bW1hcnktc3RyaXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLmJyLWZpbHRlci1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmJyLXN1bW1hcnktc3RyaXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuYnItY2FyZC1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJyLWFjdGlvbi1iYXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qIFJFTU9WRSBPVVRFUiBCT1ggT0YgREFURSBQSUNLRVIgKi9cclxuLmJyLWRhdGVwaWNrZXItLWlubGluZSxcclxuLmJyLWRhdGVwaWNrZXItLWlubGluZSAubXlkcCxcclxuLmJyLWRhdGVwaWNrZXItLWlubGluZSAubXlkcCBpbnB1dCxcclxuLmJyLWRhdGVwaWNrZXItLWlubGluZSAuc2VsZWN0aW9uZ3JvdXAge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBEQVRFIFBJQ0tFUiBJTlBVVCAqL1xyXG4uYnItZGF0ZXBpY2tlci0taW5saW5lIGlucHV0IHtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCA0cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRDFENURCICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBSRU1PVkUgRVhUUkEgQ09OVEFJTkVSIFNQQUNFICovXHJcbi5ici1kYXRlcGlja2VyLS1pbmxpbmUgLm15ZHAge1xyXG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBSRU1PVkUgRk9STSBDT05UUk9MIFNUWUxFICovXHJcbi5ici1kYXRlcGlja2VyLmZvcm0tY29udHJvbCxcclxuLmJyLWRhdGVwaWNrZXItLWlubGluZS5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBDQUxFTkRBUiBCVVRUT04gKi9cclxuLmJyLWRhdGVwaWNrZXItLWlubGluZSAuYnRucGlja2VyIHtcclxuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDVEQiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjRjlGQUZCICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNNQUxMRVIgVEFCTEUgUk9XICovXHJcbi5ici10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZy10b3A6IDFweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG59XHJcbi5ici10YWJsZSB0aCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xyXG59XHJcbi5ici1wYXJ0eS1uYW1le1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDoxMXB4O1xyXG4gICAgbWF4LWhlaWdodDoyNHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgZGlzcGxheTotd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDoyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xyXG4gICAgd29yZC1icmVhazpicmVhay13b3JkO1xyXG59XHJcblxyXG4vKiBTRUNPTkQgTElORSAqL1xyXG4uYnItcGFydHktcmVme1xyXG4gICAgZm9udC1zaXplOjlweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEwcHg7XHJcbiAgICBjb2xvcjojNkI3MjgwO1xyXG5cclxuICAgIG1heC1oZWlnaHQ6MjRweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuXHJcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOjI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7XHJcblxyXG4gICAgd29yZC1icmVhazpicmVhay13b3JkO1xyXG59XHJcbi8qIC5ici10YWJsZSB0ZDpudGgtY2hpbGQoNSksXHJcbi5ici10YWJsZSB0aDpudGgtY2hpbGQoNSl7XHJcbiAgICB3aWR0aDoyMjBweDtcclxuICAgIG1heC13aWR0aDoyMjBweDtcclxufSAqL1xyXG5cclxuOjpuZy1kZWVwIC5ici1kYXRlcGlja2VyLS1pbmxpbmUgLnNlbGVjdG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQ1REIgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLDAsMCwwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWNhcmQtY2xlYW4ge1xyXG4gIHBhZGRpbmc6IDEycHggMThweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogMS4gVGhlIEZsZXggQ29udGFpbmVyIChGb3JjZXMgb25lIGxpbmUpICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFNFQVJDSCBST1cgTEFZT1VUXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2xlYW4tcm93LWxheW91dHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbiAgZ2FwOjEwcHg7XHJcbiAgZmxleC13cmFwOm5vd3JhcDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDT01NT04gRklFTERcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jbGVhbi1maWVsZHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG59XHJcblxyXG4uY2xlYW4tZmllbGQgbGFiZWx7XHJcbiAgZm9udC1zaXplOjExcHg7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQkFOSyBGSUVMRFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmNsZWFuLWJhbmt7XHJcbiAgZmxleDoxIDEgYXV0bztcclxuICBtaW4td2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIERBVEUgRklFTERcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jbGVhbi1kYXRle1xyXG4gIGZsZXg6MCAwIDEzNXB4O1xyXG4gIHdpZHRoOjEzNXB4O1xyXG4gIG1pbi13aWR0aDoxMzVweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQUNUSU9OIEJVVFRPTlNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jbGVhbi1hY3Rpb25ze1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBnYXA6OHB4O1xyXG4gIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206MXB4O1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxufVxyXG5cclxuLmNsZWFuLWFjdGlvbnMgLmJyLWJ0bntcclxuICBoZWlnaHQ6MzJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6MCAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTkctU0VMRUNUXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2xlYW4tYmFuayA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OjMycHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OjMycHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOjRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xlYW4tYmFuayA6Om5nLWRlZXAgLm5nLXZhbHVlLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6MzBweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6ZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlciAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDo4cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6MTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBEQVRFIFBJQ0tFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuOjpuZy1kZWVwIC5zZWFyY2gtZGF0ZS1jb250cm9sIC5teWRwe1xyXG4gIHdpZHRoOjEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOjEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNYWluIHdyYXBwZXIgKi9cclxuOjpuZy1kZWVwIC5zZWFyY2gtZGF0ZS1jb250cm9sIC5zZWxlY3Rpb25ncm91cHtcclxuICBoZWlnaHQ6MzBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6NHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6dmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBJbnB1dCAqL1xyXG46Om5nLWRlZXAgLnNlYXJjaC1kYXRlLWNvbnRyb2wgaW5wdXR7XHJcbiAgaGVpZ2h0OjMwcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDozMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDo2cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIENhbGVuZGFyICsgY2xlYXIgYnV0dG9ucyAqL1xyXG46Om5nLWRlZXAgLnNlYXJjaC1kYXRlLWNvbnRyb2wgLmJ0bnBpY2tlcixcclxuOjpuZy1kZWVwIC5zZWFyY2gtZGF0ZS1jb250cm9sIC5idG5jbGVhcntcclxuICB3aWR0aDoyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOjI0cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6MzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDojZjhmYWZjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZvcmNlIGljb24gdmlzaWJpbGl0eSAqL1xyXG46Om5nLWRlZXAgLnNlYXJjaC1kYXRlLWNvbnRyb2wgLmJ0bnBpY2tlciBzcGFuLFxyXG46Om5nLWRlZXAgLnNlYXJjaC1kYXRlLWNvbnRyb2wgLmJ0bmNsZWFyIHNwYW4sXHJcbjo6bmctZGVlcCAuc2VhcmNoLWRhdGUtY29udHJvbCAuYnRucGlja2VyIGksXHJcbjo6bmctZGVlcCAuc2VhcmNoLWRhdGUtY29udHJvbCAuYnRuY2xlYXIgaXtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6MSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/accounts/Master/BankReconcil/bank-reconcil.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/Master/BankReconcil/bank-reconcil.component.ts ***!
  \*************************************************************************/
/*! exports provided: BankReconcilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReconcilComponent", function() { return BankReconcilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BankReconcilComponent = /** @class */ (function () {
    function BankReconcilComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _router, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '30px',
            width: '120px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '200px',
            selectorWidth: '220px',
            alignSelectorRight: true,
        };
        this.myDatePickerOptionsFilter = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '34px',
            width: '140px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '220px',
            selectorWidth: '240px'
        };
        this.myDatePickerOptionsBank = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '16px',
            width: '140px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px'
        };
        this.bankreconcilList = [];
        this.BankList = [];
        this.displayType = 'SEARCH';
        this.Header = "Bank Reconciliation";
        this.searched = false;
        this.typeFilter = '';
        this.globalSearch = '';
        this.reconsillationstr = "";
        this.reconsillationstr1 = "";
        this.showResult = false;
    }
    //   ngOnChanges() {
    //     for (let data of this.bankreconcilList) {
    //       data["clearanceDatenew"] = (data["clearanceDatenew"] != "") ? this._dataService.stringdttoArry(data["clearanceDatenew"]) : null;
    //   }
    // }
    BankReconcilComponent.prototype.ngOnInit = function () {
        this._loaderService.display(true);
        this.FillAccount();
        this.verifyPermission('45', 'View');
        this._loaderService.display(false);
    };
    Object.defineProperty(BankReconcilComponent.prototype, "filteredBankreconcilList", {
        get: function () {
            var _this = this;
            var list = this.bankreconcilList || [];
            if (this.typeFilter) {
                list = list.filter(function (x) { return x.STATUS === _this.typeFilter; });
            }
            if (this.globalSearch && this.globalSearch.trim() !== '') {
                var q_1 = this.globalSearch.toLowerCase();
                list = list.filter(function (x) {
                    return ((x.ENTRYNO || '') + '').toLowerCase().includes(q_1) ||
                        ((x.PARTYNAME || '') + '').toLowerCase().includes(q_1) ||
                        ((x.CHEQUENO || '') + '').toLowerCase().includes(q_1) ||
                        ((x.STATUS || '') + '').toLowerCase().includes(q_1);
                });
            }
            return list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankReconcilComponent.prototype, "selectedCount", {
        get: function () {
            return (this.filteredBankreconcilList || []).filter(function (x) { return x._selected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankReconcilComponent.prototype, "differenceLabel", {
        get: function () {
            var book = this.toNumber(this.BalanceDr) - this.toNumber(this.BalanceCr);
            var bank = this.toNumber(this.DrRef) - this.toNumber(this.CrRef);
            var diff = book - bank;
            if (diff === 0) {
                return '0.00';
            }
            return Math.abs(diff).toFixed(2) + (diff > 0 ? ' Dr' : ' Cr');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankReconcilComponent.prototype, "isDifferenceZero", {
        get: function () {
            return this.differenceLabel === '0.00';
        },
        enumerable: true,
        configurable: true
    });
    BankReconcilComponent.prototype.toNumber = function (val) {
        if (!val) {
            return 0;
        }
        var n = parseFloat((val + '').replace(/[^0-9.\-]/g, ''));
        return isNaN(n) ? 0 : n;
    };
    BankReconcilComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    BankReconcilComponent.prototype.FillAccount = function () {
        var _this = this;
        var jsonBank = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/Acc_CashBook_FillOurbank", jsonBank)
            .subscribe(function (data) {
            var rawList = (data && data.Table) ? data.Table : [];
            _this.BankList = rawList.map(function (item) { return (__assign({}, item, { acctname: item.acctname || item.ACCTNAME || '', acctcodename: item.acctcodename || item.ACCTCODENAME || '' })); });
            _this._loaderService.display(false);
        });
    };
    BankReconcilComponent.prototype.SearchData = function () {
        var _this = this;
        this.searched = true;
        this.loaderService.display(true);
        if (this.Bank == "" || this.Bank == undefined || this.Bank == "--Select OurBank--") {
            this._toasterService.toast('warning', 'warning', 'Please select Our Bank  !');
            this.loaderService.display(false);
            return false;
        }
        if (this.FromDate == "" || this.FromDate == undefined) {
            this._toasterService.toast('warning', 'warning', "From Date cannot be blank !.");
            this.loaderService.display(false);
            return false;
        }
        if (this.ToDate == "" || this.ToDate == undefined) {
            this._toasterService.toast('warning', 'warning', "To Date cannot be blank !.");
            this.loaderService.display(false);
            return false;
        }
        var jsonData = {
            _ourbank: (this.Bank == undefined) ? "" : this.Bank,
            _FromDt: this.FromDate,
            _ToDt: this.ToDate,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        this._dataService.getData("Accounts/Acc_CashBook_BankRecousillation", jsonData)
            .subscribe(function (data) {
            _this.bankreconcilList = data.Table;
            for (var _i = 0, _a = _this.bankreconcilList; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                data_1["CLEARANCEDATE"] = (data_1["CLEARANCEDATE"] != "") ? _this._dataService.stringdttoArry(data_1["CLEARANCEDATE"]) : null;
                data_1["_selected"] = false;
                // console.log(this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(data["clearanceDate"]));
                // data["clearanceDate"]=this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(data["clearanceDate"]);
            }
            if (data.Table1[0].BALANCE > 0) {
                _this.BalanceDr = data.Table1[0].BALANCE + " Dr";
            }
            else {
                _this.BalanceCr = (data.Table1[0].BALANCE == "0.00") ? "" : Math.abs(data.Table1[0].BALANCE) + " Cr";
            }
            if (data.Table2[0].CRAMTNOTREFLECTED > 0) {
                _this.CrNotRef = (data.Table2[0].CRAMTNOTREFLECTED == "0.00") ? "" : Math.abs(data.Table2[0].CRAMTNOTREFLECTED) + " Cr";
            }
            if (data.Table2[0].DRAMTNOTREFLECTED > 0) {
                _this.DrNotRef = (data.Table2[0].DRAMTNOTREFLECTED == "0.00") ? "" : Math.abs(data.Table2[0].DRAMTNOTREFLECTED) + " Dr";
            }
            if (data.Table3[0].AMTREFLECTED > 0) {
                _this.DrRef = data.Table3[0].AMTREFLECTED + " Dr";
            }
            else {
                _this.CrRef = (data.Table3[0].AMTREFLECTED == "0.00") ? "" : Math.abs(data.Table3[0].AMTREFLECTED) + " Cr";
            }
            if (data.Table4[0].OPENINGBALANCE > 0) {
                _this.OpBalDr = data.Table4[0].OPENINGBALANCE + " Dr";
            }
            else {
                _this.OpBalCr = (data.Table4[0].OPENINGBALANCE == "0.00") ? "" : Math.abs(data.Table4[0].OPENINGBALANCE) + " Cr";
            }
        });
        this.showResult = true;
        this.loaderService.display(false);
    };
    BankReconcilComponent.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    BankReconcilComponent.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    BankReconcilComponent.prototype.BankRecUpdateold = function () {
        var _this = this;
        this.loaderService.display(true);
        this.reconsillationstr = '';
        for (var i = 0; i < this.bankreconcilList.length; i++) {
            this.ClearingDate = (this.bankreconcilList[i].CLEARANCEDATE) ? this.bankreconcilList[i].CLEARANCEDATE : "",
                this.reconsillationstr += (" UPDATE acc_bank set clearanceDate = "
                    + (((this.ClearingDate == "") ? "NULL" : (" '" + (this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ClearingDate.formatted) + "' "))) + (" where ID = '"
                        + (this.bankreconcilList[i].ID + "'")))) + ";";
        }
        var jsonData = {
            _reconsillationstr: this.reconsillationstr,
        };
        this._dataService.getData("Accounts/Acc_CashBook_BankRecousillation_Update", jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', "Bank Reconcillation saved successfully");
                _this.SearchData();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", "Error in saving data ");
                _this.loaderService.display(false);
            }
        });
    };
    BankReconcilComponent.prototype.BankRecUpdate_20260525 = function () {
        var _this = this;
        // ✅ VALIDATION 1 — Check if any rows are selected
        var selectedRows = this.bankreconcilList.filter(function (r) { return r._selected; });
        if (selectedRows.length === 0) {
            this._toasterService.toast('warning', 'Warning', 'Please select at least one transaction to reconcile.');
            return;
        }
        // ✅ VALIDATION 2 — Check if selected rows have clearance date
        var selectedWithoutDate = selectedRows.filter(function (r) {
            return !r.CLEARANCEDATE || !r.CLEARANCEDATE.formatted;
        });
        if (selectedWithoutDate.length > 0) {
            this._toasterService.toast('warning', 'Warning', selectedWithoutDate.length + " selected transaction(s) have no clearance date. \n       Please enter clearance date for all selected rows.");
            return;
        }
        // ✅ CONFIRMATION before submit
        if (!confirm("Submit reconciliation for " + selectedRows.length + " transaction(s)?")) {
            return;
        }
        this.loaderService.display(true);
        this.reconsillationstr = '';
        // ✅ Loop only selected rows, use local variable
        for (var i = 0; i < this.bankreconcilList.length; i++) {
            var row = this.bankreconcilList[i];
            // ✅ Local variable — not class property
            var clearingDate = (row.CLEARANCEDATE && row.CLEARANCEDATE.formatted)
                ? row.CLEARANCEDATE.formatted
                : '';
            var dateVal = (clearingDate === '')
                ? 'NULL'
                : "'" + this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(clearingDate) + "'";
            this.reconsillationstr +=
                "UPDATE acc_bank SET clearanceDate = " + dateVal + " WHERE ID = '" + row.ID + "';";
        }
        var jsonData = {
            _reconsillationstr: this.reconsillationstr
        };
        this._dataService.getData('Accounts/Acc_CashBook_BankRecousillation_Update', jsonData).subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.Table[0].STATUS === '100') {
                _this._toasterService.toast('info', 'Success', 'Bank Reconciliation saved successfully.');
                _this.SearchData();
            }
            else {
                _this._toasterService.toast('warning', 'Warning', 'Error in saving data.');
            }
        }, function (error) {
            // ✅ Handle API error
            _this.loaderService.display(false);
            _this._toasterService.toast('error', 'Error', 'Something went wrong. Please try again.');
            console.error('BankRecUpdate error:', error);
        });
    };
    BankReconcilComponent.prototype.BankRecUpdatewithstring = function () {
        var _this = this;
        // ✅ 1. Get Selected Rows
        var selectedRows = this.bankreconcilList.filter(function (r) { return r._selected; });
        if (selectedRows.length === 0) {
            this._toasterService.toast('warning', 'Warning', 'Please select at least one transaction to reconcile.');
            return;
        }
        // ✅ 2. VALIDATION: Check if selected rows are missing a clearance date
        var selectedWithoutDate = selectedRows.filter(function (r) {
            return !r.CLEARANCEDATE || !r.CLEARANCEDATE.formatted;
        });
        if (selectedWithoutDate.length > 0) {
            this._toasterService.toast('warning', 'Warning', "You selected " + selectedWithoutDate.length + " transaction(s) without a clearance date. Please enter dates for all selected rows.");
            return;
        }
        // ✅ 3. NEW VALIDATION: Check if user entered a date but forgot the checkbox!
        var unselectedWithDate = this.bankreconcilList.filter(function (r) {
            return !r._selected && r.CLEARANCEDATE && r.CLEARANCEDATE.formatted;
        });
        if (unselectedWithDate.length > 0) {
            this._toasterService.toast('warning', 'Warning', "You entered a clearance date for " + unselectedWithDate.length + " row(s) but forgot to tick the Match checkbox. Please select them.");
            return;
        }
        // ✅ 4. CONFIRMATION
        if (!confirm("Are you sure you want to submit reconciliation for " + selectedRows.length + " transaction(s)?")) {
            return;
        }
        this.loaderService.display(true);
        this.reconsillationstr = '';
        // ✅ 5. BUG FIX: Loop ONLY through selectedRows! (Not the whole list)
        for (var i = 0; i < selectedRows.length; i++) {
            var row = selectedRows[i];
            // Since we validated above, we know formatting exists
            var clearingDate = row.CLEARANCEDATE.formatted;
            var dateVal = "'" + this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(clearingDate) + "'";
            this.reconsillationstr +=
                "UPDATE acc_bank SET clearanceDate = " + dateVal + " WHERE ID = '" + row.ID + "'; ";
        }
        var jsonData = {
            _reconsillationstr: this.reconsillationstr
        };
        this._dataService.getData('Accounts/Acc_CashBook_BankRecousillation_Update', jsonData).subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.Table[0].STATUS === '100') {
                _this._toasterService.toast('success', 'Success', 'Bank Reconciliation saved successfully.');
                _this.SearchData(); // Refresh the grid
            }
            else {
                _this._toasterService.toast('warning', 'Warning', 'Error in saving data.');
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this._toasterService.toast('error', 'Error', 'Something went wrong. Please try again.');
            console.error('BankRecUpdate error:', error);
        });
    };
    BankReconcilComponent.prototype.BankRecUpdate = function () {
        var _this = this;
        // ✅ VALIDATION 1: Get Selected Rows
        var selectedRows = this.bankreconcilList.filter(function (r) { return r._selected; });
        if (selectedRows.length === 0) {
            this._toasterService.toast('warning', 'Warning', 'Please select at least one transaction to reconcile.');
            return;
        }
        // ✅ VALIDATION 2: Check if selected rows are missing a clearance date
        var selectedWithoutDate = selectedRows.filter(function (r) {
            return !r.CLEARANCEDATE || !r.CLEARANCEDATE.formatted;
        });
        if (selectedWithoutDate.length > 0) {
            this._toasterService.toast('warning', 'Warning', "You selected " + selectedWithoutDate.length + " transaction(s) without a clearance date. Please enter dates for all selected rows.");
            return;
        }
        // ✅ VALIDATION 3: Check if user entered a date but forgot the checkbox
        var unselectedWithDate = this.bankreconcilList.filter(function (r) {
            return !r._selected && r.CLEARANCEDATE && r.CLEARANCEDATE.formatted;
        });
        if (unselectedWithDate.length > 0) {
            this._toasterService.toast('warning', 'Warning', "You entered a clearance date for " + unselectedWithDate.length + " row(s) but forgot to tick the Match checkbox. Please select them.");
            return;
        }
        // ✅ CONFIRMATION DIALOG
        if (!confirm("Are you sure you want to submit reconciliation for " + selectedRows.length + " transaction(s)?")) {
            return;
        }
        this.loaderService.display(true);
        // ✅ BUILD XML STRING (For SQL Server 2008 Bulk Update)
        this.reconsillationstr = '<root>';
        for (var i = 0; i < selectedRows.length; i++) {
            var row = selectedRows[i];
            // Format the date using your existing data service
            var clearingDate = row.CLEARANCEDATE.formatted;
            var dateVal = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(clearingDate);
            // Append XML node for each row
            this.reconsillationstr += "<row id=\"" + row.ID + "\" date=\"" + dateVal + "\" />";
        }
        // Close the XML string
        this.reconsillationstr += '</root>';
        // Prepare payload for API
        var jsonData = {
            _reconsillationstr: this.reconsillationstr
        };
        // ✅ CALL THE API
        this._dataService.Common('Accounts/Acc_CashBook_BankRecousillation_Update_NG', jsonData).subscribe(function (data) {
            _this.loaderService.display(false);
            // Safely check if the API returned our '100' status from the Stored Procedure
            if (data && data.Table && data.Table.length > 0 && data.Table[0].STATUS === '100') {
                _this._toasterService.toast('success', 'Success', data.Table[0].MESSAGE || 'Bank Reconciliation saved successfully.');
                // Refresh the grid
                _this.SearchData();
            }
            else {
                // If SQL Server returned '500' (Error) from the CATCH block
                var errorMsg = (data && data.Table && data.Table[0] && data.Table[0].MESSAGE)
                    ? data.Table[0].MESSAGE
                    : 'Error in saving data.';
                _this._toasterService.toast('warning', 'Warning', errorMsg);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this._toasterService.toast('error', 'Error', 'Something went wrong. Please try again.');
            console.error('BankRecUpdate error:', error);
        });
    };
    BankReconcilComponent.prototype.Reset = function () {
        this.searched = false;
        this.typeFilter = '';
        this.globalSearch = '';
        this.Bank = "";
        this.FromDate = "";
        this.ToDate = "";
        this.bankreconcilList = [];
        this.BalanceCr = "";
        this.BalanceDr = "";
        this.CrNotRef = "";
        this.DrNotRef = "";
        this.DrRef = "";
        this.CrRef = "";
    };
    BankReconcilComponent.prototype.BackToSearch = function () {
        this.showResult = false;
    };
    BankReconcilComponent.prototype.autoCheckRow = function (event, row) {
        if (event && event.formatted) {
            row._selected = true; // Auto-check if date is selected
        }
        else {
            row._selected = false; // Uncheck if date is cleared
        }
    };
    BankReconcilComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    BankReconcilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-BankReconcil',
            template: __webpack_require__(/*! raw-loader!./bank-reconcil.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Master/BankReconcil/bank-reconcil.component.html"),
            styles: [__webpack_require__(/*! ./bank-reconcil.component.css */ "./src/app/accounts/Master/BankReconcil/bank-reconcil.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], BankReconcilComponent);
    return BankReconcilComponent;
}());



/***/ })

}]);
//# sourceMappingURL=BankReconcil-BankReconcil-module.js.map