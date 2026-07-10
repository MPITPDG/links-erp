(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BankPayment-bankpayment-module~BankRecpt-bankrecpt-module~cashrecipt-cashrecipt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <b> General Details </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n                <td><span  class=\"col-form-span-label\"><b>Entry No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"EntryNo\" type=\"text\"   disabled=\"disabled\" class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td ><span class=\"col-form-span-label\"><b>Entry Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n                <!-- <td>\r\n                    <my-date-picker name=\"EntryDate\"  [disabled]='toggleentrydate' (dateChanged)=\"EntryDateChanged($event)\" [options]=\"myDatePickerOptions\" class=\"form-control\" [selDate]=\"EntryDate\" ></my-date-picker>\r\n                </td> -->\r\n                <td>\r\n                    <my-date-picker name=\"EntryDate\"  (dateChanged)=\"EntryDateChanged($event)\" [options]=\"myDatePickerOptions\" class=\"form-control\" [selDate]=\"EntryDate\" ></my-date-picker>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">  \r\n                    <!-- <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > -->\r\n                    <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\r\n                    placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"Narration\"></textarea>\r\n                 </td>\r\n             </tr>\r\n             <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Cheque Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Cheque Date</b> </span></td>\r\n                <td>\r\n                    <my-date-picker name=\"ChequeDate\"  [options]=\"myDatePickerOptions\" class=\"form-control\" [selDate]=\"ChequeDate\"  ></my-date-picker>\r\n                </td>\r\n                <td><span class=\"col-form-span-label\"><b>Cheque No.</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"ChequeNo\"  [OnlyNumber]=\"true\" type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Our Bank</b> </span></td>\r\n                <td colspan=\"3\">\r\n                <select class=\"form-control width500\"  [(ngModel)]=\"OurBank\" (change)=\"GetOurBankName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of OurBankList\"  value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\r\n                </select>\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Bank Name</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BankName\"   type=\"text\"   class=\"form-control width200\" maxlength=\"40\" > </td>\r\n\r\n                <td><span class=\"col-form-span-label\"><b>Bank Ref. No.</b> </span></td> \r\n                <td >  <input [(ngModel)]=\"BankRefNo\"   type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Accounts Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"2\">\r\n\r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Entry Type</b> </span></td>\r\n                <td style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [disabled]='disableEntryType'[(ngModel)]=\"EntryType\" (change)=\"listbillpopup($event.target.value)\"  >\r\n                        <option value=\"0\">-- Select Type --</option>\r\n                        <option value=\"AB1\">Bill - Help</option>\r\n                        <option value=\"AB\">Bill - Manual</option>\r\n                        <option value=\"AO\">Opening Balance</option>\r\n                        <option value=\"AD\">Advance</option>\r\n                        <option value=\"OA\">On Account</option>\r\n                        <option value=\"JB\">JobNo</option>\r\n                        <option value=\"PE\">Purchase Entry</option>\r\n                        <option value=\"GR\">General</option>\r\n                        </select>\r\n\r\n            </td>\r\n                <td><span class=\"col-form-span-label\"><b> Department</b> </span></td>\r\n                <td>\r\n                 <select class=\"form-control width150\"  [(ngModel)]=\"Department\" (change)=\"GetDepartmentName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of Departmentlist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n\r\n                </select>\r\n\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Bill No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"BillNo\" type=\"text\"  [OnlyNumber]=\"true\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Job No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Amount\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]='toggledebit' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Deduction\" [OnlyNumber]=\"true\" type=\"text\"  [disabled]='togglededuction'   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ShortNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchild();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    <!-- <button class=\"btn btn-sm btn-danger\" type=\"List\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> List</span></button> -->\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Net Total</b> </span></td>\r\n                <td colspan=\"3\" >  <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalDeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n\r\n       <tr>\r\n        <td colspan=\"4\">\r\n        <!-- <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                 <td colspan=\"4\" > style=\"width:615px;\" -->\r\n                    <div class=\"row xyscroll\" style=\"width:715px;\"   >\r\n                        <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\" >\r\n                            <thead>\r\n                                <tr class=\"bakgrdliteBlue\">\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\" ></th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                </tr>\r\n                            </thead>\r\n                             <tbody   >\r\n                                <tr *ngFor=\"let obj of Accountlist\">\r\n                                    <td class=\"centerlabel\">\r\n                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                        &nbsp;\r\n                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.ACC_BANKDTLS_ID)\"></i>\r\n                                    </td>\r\n                                   <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                   <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                   </div>\r\n                 <!-- </td>\r\n            </tr>\r\n\r\n        </table>   -->\r\n\r\n    </td>\r\n</tr>\r\n<tr>\r\n    <td colspan=\"4\"  class=\"centerlabel\">\r\n        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n    </td>\r\n</tr>\r\n </table>\r\n    </div>\r\n   \r\n\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_ListBill ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-mg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:500px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">BILL DETAILS</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > -->\r\n                        <div class=\"col\" style=\"height:300px;overflow-y: auto;\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Client:  </b> </span>\r\n                                    <span class=\"col-form-span-label\"><b>{{client}}</b></span>\r\n                                </td>\r\n                                 \r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <thead style=\"text-align: center;\">\r\n                                        <tr>\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label\">INVOICE NO.</th>\r\n                                            <th class=\"col-form-span-label\">JOB NO.</th>\r\n                                            <th class=\"col-form-span-label\">AMOUNT</th>\r\n                                            <!-- <th class=\"col-form-span-label\">DEDUCTION</th>\r\n                                            <th class=\"col-form-span-label\">NARRATION</th> -->\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody >\r\n                                       \r\n                                        <tr *ngFor=\"let obj of ListBill \">\r\n                                            <td class=\"col-form-span-label\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.CHECKED\" [id]=\"i\" [value]=\"i\"\r\n                                                    (ngModelChange)=\"getCheckboxValues($event,obj.INV_NO,obj.INV_JOBNO,obj.TOTALAMT,obj.CLIENT)\">\r\n                                                &nbsp; </td>\r\n                                            <td class=\"col-form-span-label\">{{obj.INV_NO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.INV_JOBNO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.TOTALAMT}}</td>\r\n                                            <!-- <td class=\"col-form-span-label\">{{obj.DEDUCTION}}</td>\r\n                                            <td class=\"col-form-span-label\"> <input [(ngModel)]=\"obj.NARRATION\"  type=\"text\" maxlenght=\"40\"  class=\"form-control width150\" ></td> -->\r\n\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n                <div style=\"float: right;\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"popup_listbill()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                            (click)=\"close()\"><i class=\"fa fa-ban\"></i>\r\n                            Close</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{searchHeaderText}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite table-bordered\">\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width130\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CODE\" [(ngModel)]=\"Type\" />&nbsp;<B>Entry No</B></span>\r\n                    </td>\r\n                    <td class=\"width130\">\r\n                        <input type=\"text\" [(ngModel)]=\"EntryNo\" class=\"form-control width150\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CODE'\"\r\n                        />\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-primary\" (click)=\"printButton();\" [disabled]=\"Type!='CODE'\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-print\"></i> Print</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                 <tr class=\"trbg\">\r\n                    <td >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CHEQUENO\" [disabled]=\"PageType=='CR'\" [(ngModel)]=\"Type\" />&nbsp;<B>Cheque No</B></span>\r\n                    </td>\r\n                    <td colspan=\"3\" >\r\n                        <input type=\"text\" [(ngModel)]=\"ChequeNo\"   class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CHEQUENO'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n               <tr class=\"trbg\" >\r\n                    <td  rowspan=\"2\" >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CLIENT\" [(ngModel)]=\"Type\" />&nbsp;<B>Account</B></span>\r\n                    </td> \r\n                    <td colspan=\"3\">\r\n                        <div style=\"display: inline-flex;\">\r\n                            <span class=\"col-form-span-label\">Bank:</span> \r\n                            <ng-select [items]=\"AccountList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                            [(ngModel)]=\"Account\" class=\"custom\" placeholder=\"--Select--\" [disabled]=\"Type!='CLIENT'\" style=\"width: 380px;\">\r\n                        </ng-select> \r\n                        </div>                        \r\n                    </td>\r\n                </tr>\r\n                    <tr class=\"trbg\" >                     \r\n                    <td colspan=\"3\">\r\n                        <div>\r\n                            <span class=\"col-form-span-label\">From</span> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"frmActDateChanged($event)\" [selDate]=\"ActFromDate\" [disabled]=\"Type!='CLIENT'\"></my-date-picker>\r\n                            &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <span class=\"col-form-span-label\">To</span> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"toactDateChanged($event)\" [selDate]=\"ActToDate\" [disabled]=\"Type!='CLIENT'\"></my-date-picker>\r\n                        </div>                       \r\n                    </td>                \r\n                </tr>\r\n                            <tr class=\"trbg\" >\r\n                    <td  rowspan=\"2\">                        \r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" [disabled]=\"PageType=='CR'\" value=\"OURBANK\" [(ngModel)]=\"Type\" />&nbsp;<B>Our Bank</B></span>\r\n                    </td>\r\n                    <td colspan=\"3\">     \r\n                        <div style=\"display: inline-flex;\">\r\n                            <span class=\"col-form-span-label\">Bank:</span>                    \r\n                             <ng-select [items]=\"OurBankList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                                [(ngModel)]=\"OurBank\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom\" placeholder=\"--Select--\" [disabled]=\"Type!='OURBANK'\" style=\"width: 380px;\">\r\n                            </ng-select> \r\n                        </div>           \r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\" >                   \r\n                        <td colspan=\"3\" >\r\n                            <div>\r\n                                <span class=\"col-form-span-label\">From</span> &nbsp; &nbsp; &nbsp; &nbsp; \r\n                                <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"frmBankDateChanged($event)\" [selDate]=\"BankFromDate\" [disabled]=\"Type!='OURBANK'\"></my-date-picker>\r\n                                &nbsp; &nbsp; &nbsp; &nbsp; \r\n                                <span class=\"col-form-span-label\">To</span>&nbsp; &nbsp; &nbsp; &nbsp; \r\n                                <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"toBankDateChanged($event)\" [selDate]=\"BankToDate\" [disabled]=\"Type!='OURBANK'\"></my-date-picker>\r\n                            </div>                       \r\n                         </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  >  <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"JOBNO\" [(ngModel)]=\"Type\" />&nbsp;<B>Job No</B></span>\r\n                    </td>\r\n                    <td colspan=\"3\" >\r\n                        <input type=\"text\" [(ngModel)]=\"JobNo\"   class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [OnlyNumber]=\"true\" [disabled]=\"Type!='JOBNO'\" />\r\n                    </td>                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td > <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"AMOUNT\" [(ngModel)]=\"Type\" />&nbsp;<B>Amount</B></span>\r\n                    </td>\r\n                    <td  >\r\n                        <input type=\"text\" [(ngModel)]=\"Amount\" [OnlyNumber]=\"true\"  [maxlength]=\"15\" class=\"form-control width150\" [disabled]=\"Type!='AMOUNT'\"\r\n                        />\r\n                    </td>\r\n                    <td >\r\n                        <span class=\"col-form-span-label\"><B>Transfer Voucher Type</B></span>\r\n                    </td>\r\n                    <td  >\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"VoucherType\"  [disabled]=\"Type!='AMOUNT'\" >                                   \r\n                            <option value=\"0\">-- Select Type --</option>\t\r\n                            <option value=\"BP\">Bank - Payment</option>\t\r\n                            <option value=\"BR\">Bank - Receipt</option>\r\n                            <option value=\"CP\">Cash - Payment</option>\r\n                            <option value=\"CR\">Cash - Receipt</option>\r\n                            <option value=\"CE\">Cash - Expenses</option>\r\n                            <option value=\"All\">All</option>\r\n                        </select> \r\n                    </td>\r\n                   \r\n                </tr>\r\n         \r\n                <!-- <tr class=\"trbg\">\r\n                    <td  >  <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DATE\" [(ngModel)]=\"Type\" />&nbsp;<B>Date Wise</B> </span>\r\n                    </td>\r\n                    <td colspan=\"2\">   <span class=\"col-form-span-label\">From</span>\r\n                        <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                        </td>\r\n                    \r\n                        <td>\r\n                            <span class=\"col-form-span-label\">To</span> \r\n                                <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                        </td> \r\n                </tr>    -->\r\n                <tr class=\"trbg\" >   \r\n                    <td >  <span class=\"col-form-span-label\">\r\n                        <input type=\"radio\" name=\"check\" value=\"DATE\" [(ngModel)]=\"Type\" />&nbsp;<B>Date Wise</B> </span>\r\n                </td>                  \r\n                    <td colspan=\"3\">\r\n                        <!-- <div>\r\n                            <span class=\"col-form-span-label\">From</span> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                            &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <span class=\"col-form-span-label\">To</span> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                        </div>     -->         \r\n                                 \r\n                          <div>\r\n                         <span class=\"col-form-span-label\">From</span> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                           <my-date-picker name=\"FromDate\" (dateChanged)=\"frmDateChanged($event)\" [options]=\"myDatePickerOptions\" [selDate]=\"FromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                             &nbsp; &nbsp; &nbsp; &nbsp;\r\n                           <span class=\"col-form-span-label\">To</span> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                             <my-date-picker name=\"ToDate\" (dateChanged)=\"toDateChanged($event)\" [options]=\"myDatePickerOptions\" [selDate]=\"ToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                             </div>      \r\n                    </td>                \r\n                </tr>             \r\n                <tr class=\"trbg\">\r\n                    <td  colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"PRINTAV\" [(ngModel)]=\"Type\" />&nbsp; <B>Print Vouchers of a day</B></span>\r\n                    </td>\r\n                    <td   colspan=\"2\">   \r\n                            <my-date-picker name=\"Day\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"VoucherDay\" [disabled]=\"Type!='PRINTAV'\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width200\" colspan=\"2\" >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DISPLAY\" [(ngModel)]=\"Type\" />&nbsp;<B>Display</B></span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                      \r\n                        <div class=\"leftlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"0\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;List</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;Details</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n             \r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"4\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i> Search</span>\r\n                                      \r\n                        </button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\">\r\n                            <span class=\"col-form-span-label\" (click)=\"ResetAll();\"><i class=\"fa fa-ban\"></i> Reset</span></button> \r\n                    </td>\r\n                </tr> \r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-1\">\r\n        </div>\r\n        <div class=\"col-10 xyscroll\" style=\"height:550px;\" >\r\n            <table class=\"table table-sm-new table-bordered bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th colspan=\"9\">\r\n                            {{searchHeaderText}}\r\n                            <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';searchList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                        </th>\r\n                    </tr>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th *ngIf=\"Type=='PRINTAV'\" class=\"centerlabel\"><input type=\"checkbox\" [(ngModel)]='checkbox'\r\n                            (change)=\"checkAll($event)\" /> &nbsp; </th>\r\n                        <th>Entry No</th>\r\n                        <th>Entry Date</th>\r\n                        <th>Status</th>\r\n                        <th>Bank Name</th>\r\n                        <th>Cheque No</th>\r\n                        <th>Amount</th>\r\n                        <th>Payee Name</th>\r\n                        <th>Narration</th>\r\n                        <!-- <th>CompChqFlag</th> -->\r\n                     \r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of searchList\">\r\n                        <td *ngIf=\"Type=='PRINTAV'\"  class=\"centerlabel\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\r\n                            (ngModelChange)=\"getCheckboxValues($event,obj.ENTRYNO)\"> &nbsp; </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label anchor-link\" (click)=\"redirectToEdit(obj.ENTRYNO)\" style=\"cursor:hand;\">{{obj.ENTRYNO}}</span>\r\n                            <!-- <span class=\"col-form-span-label\">\r\n                                 <a href=\"javascript:void(0);\" (click)=\"redirectToEdit(obj.pur_code)\">{{obj.PUR_CODE}}</a> \r\n                            </span> -->\r\n                        </td>\r\n                        <!-- <td>\r\n                            <span class=\"col-form-span-label\">{{obj.ENTRYNO}}</span>\r\n                        </td> -->\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.ENTRYDT}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.STATUS}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OURBANK}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.CHEQUENO}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.AMOUNT}}</span>\r\n                        </td>\r\n\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PAYEENAME}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><p>{{obj.NARRATION}}</p></span>\r\n                        </td>\r\n                      \r\n                    </tr>\r\n                </tbody>\r\n                <tr *ngIf=\"Type=='PRINTAV'\" >\r\n                    <td colspan=\"9\" class=\"right-text pr-2\">\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print_Multiple()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>&nbsp;Print</span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        \r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n<!-- <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Search</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CODE\" [(ngModel)]=\"Type\" />&nbsp;Entry No</span>\r\n                    </td>\r\n                    <td class=\"width130\">\r\n                        <input type=\"text\" [(ngModel)]=\"EntryNo\" class=\"form-control width150\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CODE'\"\r\n                        />\r\n                    </td>\r\n                    <td>\r\n                        <button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-primary\" (click)=\"Print();\" [disabled]=\"Type!='CODE'\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-print\"></i> Print</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CHEQUENO\" [(ngModel)]=\"Type\" />&nbsp;Cheque No</span>\r\n                    </td>\r\n                    <td colspan=\"3\" >\r\n                        <input type=\"text\" [(ngModel)]=\"ChequeNo\"   class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CHEQUENO'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\" >\r\n                    <td rowspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CLIENT\" [(ngModel)]=\"Type\" />&nbsp;Account</span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                       \r\n                                 <select class=\"form-control width300\"  [(ngModel)]=\"Account\" [disabled]=\"Type!='CLIENT'\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of AccountList\" value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option> \r\n                                </select>\r\n                     \r\n                    </td>\r\n\r\n                </tr>\r\n               \r\n                     \r\n                <tr class=\"trbg\" >  \r\n                           \r\n                    </td> \r\n                        <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">From</span>\r\n                        <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"BankFromDate\" [disabled]=\"Type!='OURBANK'\"></my-date-picker>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <span class=\"col-form-span-label\">To</span>\r\n                        <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"BankToDate\" [disabled]=\"Type!='OURBANK'\"></my-date-picker>\r\n                    </td>\r\n\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"JOBNO\" [(ngModel)]=\"Type\" />&nbsp;Job No</span>\r\n                    </td>\r\n                    <td colspan=\"3\" >\r\n                        <input type=\"text\" [(ngModel)]=\"JobNo\"   class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [OnlyNumber]=\"true\" [disabled]=\"Type!='JOBNO'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n             \r\n              \r\n              \r\n                <tr class=\"trbg\">\r\n                    <td >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"AMOUNT\" [(ngModel)]=\"Type\" />&nbsp;Amount</span>\r\n                    </td>\r\n                    <td colspan=\"3\"  >\r\n                        <input type=\"text\" [(ngModel)]=\"Amount\" [OnlyNumber]=\"true\"  [maxlength]=\"15\" class=\"form-control width150\" [disabled]=\"Type!='AMOUNT'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td >\r\n                        <span class=\"col-form-span-label\">Status</span>\r\n                    </td>\r\n                    <td >\r\n                        <span class=\"col-form-span-label\">Transfer Voucher Type</span>\r\n                    </td>\r\n                    <td colspan=\"3\"  >\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"VoucherType\" >\r\n                                   \r\n                            <option value=\"0\">-- Select Type --</option>\t\r\n                            <option value=\"BP\">Bank - Payment</option>\t\r\n                            <option value=\"BR\">Bank - Receipt</option>\r\n                            <option value=\"CP\">Cash - Payment</option>\r\n                            <option value=\"CR\">Cash - Receipt</option>\r\n                            <option value=\"CE\">Cash - Expenses</option>\r\n                            <option value=\"All\">All</option>\t\r\n                           \r\n                            </select> \r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DATE\" [(ngModel)]=\"Type\" />&nbsp; Date Wise</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">From</span>\r\n                        <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <span class=\"col-form-span-label\">To</span>\r\n                        <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                    </td>\r\n                \r\n                </tr>\r\n                \r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"PRINTAV\" [(ngModel)]=\"Type\" />&nbsp; Print Vouchers of a day</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                      \r\n                            <span class=\"col-form-span-label\">Date</span>\r\n                            <my-date-picker name=\"Day\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"VoucherDay\" [disabled]=\"Type!='PRINTAV'\"></my-date-picker>\r\n                       \r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DISPLAY\" [(ngModel)]=\"Type\" />&nbsp;Display</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                      \r\n                        <div class=\"leftlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"0\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;List</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;Details</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n             \r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i> Search</span>\r\n                                      \r\n                        </button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\">\r\n                            <span class=\"col-form-span-label\" (click)=\"ResetAll();\"><i class=\"fa fa-ban\"></i> Reset</span></button> \r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 xyscroll\" style=\"height:300px;\" >\r\n            <table class=\"table table-sm-new table-bordered bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th colspan=\"8\">\r\n                            {{searchHeaderText}}\r\n                            <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';searchList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                        </th>\r\n                    </tr>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th>Entry No</th>\r\n                        <th>Entry Date</th>\r\n                        <th>Status</th>\r\n                        <th>Bank Name</th>\r\n                        <th>Cheque No</th>\r\n                        <th>Amount</th>\r\n                        <th>Payee Name</th>\r\n                        <th>Narration</th>\r\n                        \r\n                     \r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of searchList\">\r\n                        <td>\r\n                            <span class=\"col-form-span-label anchor-link\" (click)=\"redirectToEdit(obj.ENTRYNO)\" style=\"cursor:pointer;\">{{obj.ENTRYNO}}</span>\r\n                            \r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.ENTRYDT}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.STATUS}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OURBANK}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.CHEQUENO}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.AMOUNT}}</span>\r\n                        </td>\r\n\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PAYEENAME}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.NARRATION}}</span>\r\n                        </td>\r\n\r\n                       \r\n\r\n\r\n                      \r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n   \r\n</div>  -->"

/***/ }),

/***/ "./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.ts ***!
  \*************************************************************************/
/*! exports provided: BankReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptComponent", function() { return BankReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

///import{DataService} from '../../..authServiceshared/service/dataService';







var BankReceiptComponent = /** @class */ (function () {
    function BankReceiptComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.EntryNo = "";
        this.EntryDate = "";
        this.Narration = "";
        this.client = "";
        this.Allitemlist = [];
        this.codelistActt = [];
        this.AccountNameList = [];
        this.Departmentlist = [];
        this.Department = "0";
        this.OurBankList = [];
        this.ItemList = [];
        this.EntryType = "0";
        this.EntryTypeList = [];
        this.BillNo = "";
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.TotalAmount = "0";
        this.TotalDeduction = "0";
        this.NetTotal = "0";
        this.ID = "0";
        this.ISNOTEDITABLE = "0";
        this.ACC_BANKDTLS_ID = "0";
        this.Header = "BANK RECEIPT";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.Accountlist = [];
        this.ACCTNAME = "";
        this.STATUS = "BR";
        this.NOTOVERFLAG = "";
        this.PAYEENAME = "";
        this.CRPARENTENTRYNO = "0";
        this.ChequeNo = "";
        this.ChequeDate = '';
        this.CompChequeFlag = "0";
        this.togglededuction = false;
        this.toggleentrydate = false;
        this.showModal_ListBill = false;
        this.toggledebit = false;
        this.disableEntryType = false;
        this.ListBill = [];
        this.newArray = [];
        this.BillNoList = "";
        this.STRTXT = [];
        this.billstr = "";
        this.NARRATION = "";
        this.dfltourbank = "";
        this.BankRefNo = "";
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
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
    }
    BankReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.EntryNo = params["EntryNo"];
            _this.EntryDate = new Date();
            _this.EntryDate = _this._dataService.datechnge(_this.EntryDate);
            _this.ChequeDate = new Date();
            _this.ChequeDate = _this._dataService.datechnge(_this.ChequeDate);
        });
        var jsonparam = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "BR" };
        this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.Departmentlist = data.Table1;
            _this.OurBankList = data.Table2;
            _this.Allitemlist = data.Table5;
            var defCode = data.Table3[0].ACCTCODE;
            _this.OurBank = defCode;
            _this.dfltourbank = data.Table3[0].ACCTCODE;
        });
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonreset)
            .subscribe(function (data) {
        });
        if (this.EntryNo != ' ') {
            this.verifyPermission('5', 'Modify');
            this.Header = 'BANK RECEIPT - UPDATE ';
            this.editpopulate();
        }
        if (this.EntryNo == ' ') {
            this.verifyPermission('5', 'Add');
            this.Header = 'BANK RECEIPT  - ADD';
        }
    };
    BankReceiptComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    BankReceiptComponent.prototype.EntryDateChanged = function (ev) {
        this.EntryDate = ev.formatted;
    };
    BankReceiptComponent.prototype.GetActName = function (Acctcode) {
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    BankReceiptComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text; //.split("|")[1];
    };
    BankReceiptComponent.prototype.GetOurBankName = function (event) {
        this.OurBankName = event.target.options[event.target.options.selectedIndex].text;
    };
    BankReceiptComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.ItemList.length > 1) {
            if (this.Item == "" || this.Item == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.EntryType == "0" || this.EntryType == undefined || this.EntryType == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select EntryType First !');
            return false;
        }
        if (this.EntryType == "AB" || this.EntryType == "AO" || this.EntryType == "PE") {
            if (this.BillNo == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter BillNo. !');
                return false;
            }
            if (this._loginService.getLogin()[0].CMPCODE == "20") {
                if (this.BillNo.length != 10) {
                    this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                    return false;
                }
            }
            else {
                if (this.BillNo.length < 15) {
                    this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                    return false;
                }
            }
        }
        if (this.EntryType == "AD" || this.EntryType == "JB") {
            if (this.JobNo == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter Job No. !');
                return false;
            }
        }
        if (this.JobNo.length > 0 && this.JobNo.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            return false;
        }
        if (this.JobNo.length > 0 && this.JobNo.length == 15) {
            if (this.JobNo.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
                return false;
            }
            // if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1)   {
            //     this._toasterService.toast("warning","warning",'You have entered Job No of different City !');
            //     return false;
            //     }
        }
        if (this.JobNo == "" && this.BillNo == "") {
            if (this.Department == "0" || this.Department == undefined || this.Department == "") {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        if ((this.Amount == "" || this.Amount == "0") && (this.Deduction == "" || this.Deduction == "0")) {
            this._toasterService.toast('warning', 'warning', 'Both Deduction & Amount cannot be Left Blank !');
            return false;
        }
        if (parseFloat(this.Amount) > 0 && parseFloat(this.Deduction) > 0) {
            this._toasterService.toast('warning', 'warning', 'Either Deduction or Amount can be Entered !');
            return false;
        }
        if (this.Deduction.length > 0) {
            var tmpdeduction = this.Deduction;
            if (isNaN((Math.round(parseFloat(tmpdeduction) * 100) / 100))) {
                this._toasterService.toast('warning', 'warning', 'Deduction Entered not Valid !');
                return false;
            }
            if (parseFloat(tmpdeduction) <= 0) {
                this._toasterService.toast('warning', 'warning', 'Deduction Entered not Valid !');
                return false;
            }
        }
        if (this.Amount.length > 0) {
            var tmpamount = this.Amount;
            if (isNaN((Math.round(parseFloat(tmpamount) * 100) / 100))) {
                this._toasterService.toast('warning', 'warning', 'Amount Entered not Valid !');
                return false;
            }
            if (parseFloat(tmpamount) <= 0) {
                this._toasterService.toast('warning', 'warning', 'Amount Entered not Valid !');
                return false;
            }
        }
        var clientcodeval = this.AccountName.split("|")[1];
        if (clientcodeval == 'Y') {
            if (this.JobNo.length == 0) {
                this._toasterService.toast('warning', 'warning', 'Please Enter JobNo !');
                return false;
            }
        }
        var jsonchild = { ID: this.ID, ENTRYNO: this.EntryNo, CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo, BILLNO: this.BillNo,
            DEDUCTION: this.Deduction, AMOUNT: this.Amount,
            ENTRYTYPE: (this.EntryType == undefined) ? "" : this.EntryType,
            EMP_CODE: "", USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            CRPARENTENTRYNO: this.CRPARENTENTRYNO,
            NARRATION: this.ShortNarration, IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: (this.Item == undefined) ? "" : this.Item.split("|")[0], DEPTID: this.Department,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: (this.Item == undefined || this.Item == "") ? "" : this.Item.split("|")[2],
            DEPARTMENT: (this.DepartmentName == undefined) ? "" : this.DepartmentName,
            ACC_BANKDTLS_ID: this.ACC_BANKDTLS_ID,
            STATUS: this.STATUS,
            ISJOBREPORT: this.AccountName.split("|")[1],
            EMP_CODE_VALUE: "", EMP_CODE_TEXT: "",
            ITEM_DATAVALUE: (this.Item == undefined) ? "" : this.Item,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            ISOLDENTRY: "0"
        };
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_TMP_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Accountlist = data.Table;
                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetTotal = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    BankReceiptComponent.prototype.Resetchild = function () {
        this.AccountName = undefined;
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.Item = undefined;
        this.Department = "";
        this.EntryType = "";
        this.txtchild = "Add";
        this.BillNo = "";
    };
    BankReceiptComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        // this.AccountName=undefined;
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.Item = undefined;
        ///this.Department="";
        // this.EntryType="";
        this.txtchild = "Add";
        this.BillNo = "";
        this.ACC_BANKDTLS_ID = "0";
    };
    BankReceiptComponent.prototype.Editchildrecd = function (id) {
        var _this = this;
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.ID = filterData.ID;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === _this.AccountName.split("|")[0]; });
        this.Item = filterData.ITEM_DATAVALUE;
        this.Amount = filterData.AMOUNT;
        this.Deduction = (filterData.DEDUCTION == null) ? "" : filterData.DEDUCTION;
        this.EntryType = filterData.ENTRYTYPE;
        this.BillNo = filterData.BILLNO;
        this.JobNo = filterData.JOBNO;
        this.ShortNarration = filterData.NARRATION;
        this.txtchild = "Update";
        this.ACC_BANKDTLS_ID = filterData.ACC_BANKDTLS_ID;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
        this.DepartmentName = filterData.DEPARTMENT;
        this.Department = filterData.DEPTID;
        this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
        if (id != "0" && this.EntryType == "AB1") {
            this.disableEntryType = true;
        }
    };
    BankReceiptComponent.prototype.deletechildrecd = function (id, brdtlsid) {
        var _this = this;
        if (this.ISNOTEDITABLE == "1") {
            this._toasterService.toast("warning", "warning", "You cannot delete this reocrd!");
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_BANKDTLS_ID: brdtlsid };
                this._dataService.getData("Accounts/ACC_BRBPCRCPCE_TMP_DEL", jsondelete)
                    .subscribe(function (data) {
                    if (data.Table1[0].STATUS.split("#")[0] == "100") {
                        _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUSTEXT);
                        _this.Accountlist = data.Table;
                        _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                        _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                        _this.NetTotal = data.Table1[0].NETTOTAL;
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", data.Table1[0].STATUSTEXT);
                        _this.loaderService.display(false);
                    }
                });
            }
            else {
                return false;
                this.loaderService.display(false);
            }
        }
    };
    BankReceiptComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.EntryDate == "") {
            this._toasterService.toast('warning', 'warning', 'Please Enter Entry Date !');
            return false;
        }
        if (this.OurBank == "" || this.OurBank == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Our Bank !');
            return false;
        }
        if (this.BankRefNo == "" || this.BankRefNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Enter Bank Ref. No. !');
            return false;
        }
        if (parseFloat(this.TotalAmount) < parseFloat(this.TotalDeduction)) {
            this._toasterService.toast('warning', 'warning', 'Total Deduction cannot be greater than Total Amount !');
            return false;
        }
        if (parseFloat(this.TotalAmount) <= 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter Account Details !');
            return false;
        }
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.EntryNo,
            ENTRYDT: this.EntryDate,
            STATUS: this.STATUS,
            OURBANK: this.OurBank,
            OURBANKNM: "",
            CHEQUETYPE: "",
            CHEQUENO: this.ChequeNo,
            CHEQUEDT: this.ChequeDate.formatted,
            BANK: this.BankName,
            NARRATION: this.Narration,
            ACTUALAMOUNT: this.NetTotal,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            NOTOVERFLAG: this.NOTOVERFLAG,
            ACTION: (this.EntryNo == " ") ? "INSERT" : "UPDATE",
            PAYEENAME: this.PAYEENAME,
            BANKREFNO: this.BankRefNo
        };
        this.loaderService.display(true);
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                _this.Print(data.Table1[0].ENTRYNO);
                _this.loaderService.display(false);
                _this.ResetMain();
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    BankReceiptComponent.prototype.Print = function (entryno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'BR' + '/' + entryno + '/', "CashBook BankPayment Print", toolbar);
    };
    BankReceiptComponent.prototype.ResetMain = function () {
        this.Resetchildrcrd();
        this.EntryNo = " ";
        // this.EntryDate ='';
        this.TotalAmount = '';
        this.TotalDeduction = '';
        this.NetTotal = '';
        this.text = "Submit";
        this.Accountlist = "";
        this.ChequeNo = '';
        this.ChequeDate = '';
        this.OurBank = "";
        this.BankName = '';
        this.Narration = '';
        this.BankRefNo = '';
        this.EntryType = '';
        this.AccountName = undefined;
        this.Department = '';
        this._router.navigate(['/accounts/Voucher/BankRecpt/Add/ ']);
    };
    BankReceiptComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonview = { EntryNo: this.EntryNo,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_View", jsonview)
            .subscribe(function (data) {
            _this.EntryNo = data.Table[0].ENTRYNO;
            _this.EntryDate = (data.Table[0].ENTRYDT != "") ? (data.Table[0].ENTRYDT) : "";
            _this.Narration = data.Table[0].NARRATION;
            _this.ChequeNo = data.Table[0].CHEQUENO;
            _this.ChequeDate = (data.Table[0].CHEQUEDT != "") ? (data.Table[0].CHEQUEDT) : "";
            _this.OurBank = data.Table[0].OURBANK;
            _this.OurBankName = "";
            _this.BankName = data.Table[0].BANK;
            _this.NOTOVERFLAG = data.Table[0].NOTOVERFLAG;
            _this.CompChequeFlag = data.Table[0].COMPCHEQUE;
            _this.Accountlist = data.Table1;
            _this.TotalAmount = data.Table2[0].TOTAMOUNT;
            _this.TotalDeduction = data.Table2[0].TOTDEDUCTION;
            _this.NetTotal = data.Table[0].ACTUALAMOUNT;
            _this.toggleentrydate = true;
            _this.BankRefNo = data.Table[0].BANKREFNO;
            _this.loaderService.display(false);
        });
        if (this.CompChequeFlag == "1" && this.NOTOVERFLAG != "Y") {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
        }
        else if (this.CompChequeFlag == "1" && this.NOTOVERFLAG == "Y") {
            this._toasterService.toast("warning", "warning", "You can edit but net total should be less than or equal to BankPayment Amount=" + this.NetTotal);
            this.loaderService.display(false);
        }
    };
    BankReceiptComponent.prototype.Reset = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.EntryNo = " ";
            // this.EntryDate ='';
            this.Narration = '';
            this.ChequeNo = '';
            //this.ChequeDate='';
            this.BankName = '';
            this.OurBank = '';
            this.TotalAmount = '';
            this.TotalDeduction = '';
            this.NetTotal = '';
            this.BankRefNo = '';
            this.text = "Submit";
            this.Accountlist = [];
            this.EntryType = '';
            this.Department = '';
            this.AccountName = undefined;
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this.loaderService.display(false);
                _this._router.navigate(['/accounts/Voucher/BankRecpt/Add/ ']);
                _this.OurBank = _this.dfltourbank;
            });
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    BankReceiptComponent.prototype.ValidateJobNo = function (jbno) {
        if (this.JobNo.length > 0) {
            if (this._loginService.getLogin()[0].CMPCODE == "20") {
                if (this.JobNo.length > 0 && this.JobNo.length != 10) {
                    this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
                    return false;
                }
            }
            else {
                if (this.JobNo.length > 0 && this.JobNo.length < 15) {
                    this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
                    return false;
                }
                if (this.JobNo.length > 0 && this.JobNo.length == 15) {
                    if (this.JobNo.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                        this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
                        return false;
                    }
                    if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                        this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
                        return false;
                    }
                }
            }
        }
    };
    BankReceiptComponent.prototype.EntryTypeChg = function (entrytypeval) {
        if (entrytypeval == "AD") {
            this.Deduction = "";
            this.togglededuction = true;
        }
        else {
            this.togglededuction = false;
        }
        if (entrytypeval == "PE") {
            this.BillNo = "";
            this.Amount = "";
        }
        if (entrytypeval == "AB") {
            this.BillNo = "";
        }
    };
    BankReceiptComponent.prototype.listbillpopup = function (entrytypeval) {
        var _this = this;
        if (entrytypeval == "AD") {
            this.Deduction = "";
            this.togglededuction = true;
        }
        else {
            this.togglededuction = false;
        }
        if (entrytypeval == "PE") {
            this.BillNo = "";
            this.Amount = "";
        }
        if (entrytypeval == "AB") {
            this.BillNo = "";
        }
        if (this.EntryType == "AB1") {
            if (this.AccountName == "" || this.AccountName == undefined) {
                this._toasterService.toast("warning", "warning", "Select Account Name first");
                this.EntryType = "0";
                return false;
            }
            else {
                this.showModal_ListBill = true;
                this.loaderService.display(true);
                var jsoninvdtl = {
                    CLIENT: this.AccountName.split("|")[0],
                    FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                    FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
                    CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                    CITYCODE: this._loginService.getLogin()[0].CITYCODE
                };
                this._dataService.getData("Accounts/ACC_RECEIPT_POPULATE_CLIENTBILL", jsoninvdtl)
                    .subscribe(function (data) {
                    if (data.Table.length > "0") {
                        _this.ListBill = data.Table;
                        console.log(_this.ListBill);
                        _this.client = data.Table1[0].CLIENT;
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", "No record found");
                        _this.client = data.Table1[0].CLIENT;
                        _this.loaderService.display(false);
                    }
                });
            }
        }
    };
    BankReceiptComponent.prototype.getCheckboxValues = function (event, invno, jobno, amt, acctname) {
        var _this = this;
        for (var i = 0; i < this.ListBill.length; i++) {
            if (this.ListBill[i].INV_NO === invno && this.ListBill[i].INV_JOBNO === jobno) {
                if (event == false) {
                    this.ListBill[i]["NARRATION"] = "";
                }
                this.ListBill[i]["Disabled"] = false;
            }
        }
        this.sel_jobno = jobno;
        this.sel_inv_no = invno;
        var index = this.newArray.findIndex(function (x) { return x.BILLNO == invno; });
        if (event) {
            var obj = {
                BILLNO: invno,
                JOBNO: jobno,
                AMOUNT: amt,
                ///ENTRYTYPE:"AB1",
                ACCOUNT_NAME: acctname,
                ISJOBREPORT: this.AccountName.split("|")[1]
            };
            //this.STRTXT=this.STRTXT + invno +  "|" + jobno +  "|" +  amt +  "|" + ded +  "|" + narration  +  "|" + acctname + "|" + this.AccountName.split("|")[1] +";"       
            this.newArray.push(obj);
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.BILLNO == _this.sel_inv_no; });
            this.newArray.splice(index, 1);
        }
    };
    BankReceiptComponent.prototype.popup_listbill = function () {
        var _this = this;
        if (this.newArray == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Bill!');
            return false;
        }
        var str = '';
        for (var i = 0, len = this.newArray.length; i < len; i++) {
            str += this.newArray[i].BILLNO + ' |' + this.newArray[i].JOBNO + '|' + this.newArray[i].AMOUNT + '|' + this.newArray[i].ACCOUNT_NAME + '|' + this.newArray[i].ISJOBREPORT + ";";
        }
        this.showModal_ListBill = false;
        var jsonbilldtl = {
            CLIENT: this.AccountName.split("|")[0],
            ITEMCODE: (this.Item == undefined) ? "" : this.Item.split("|")[0],
            STATUS: this.STATUS,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            STRINGTEXT: str
        };
        this._dataService.Common("Accounts/ACC_BR_BLHELP_TMP_IU", jsonbilldtl)
            .subscribe(function (data) {
            _this.Accountlist = data.Table;
            _this.TotalAmount = data.Table1[0].TOTAMOUNT;
            _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
            _this.NetTotal = data.Table1[0].NETTOTAL;
            _this.disableEntryType = true;
            _this.loaderService.display(false);
        });
        this.newArray = [];
        this.close();
    };
    BankReceiptComponent.prototype.close = function () {
        this.showModal_ListBill = false;
    };
    BankReceiptComponent.prototype.TextareaValueChange = function (ev) {
        this.Narration = ev.target.value;
    };
    BankReceiptComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    BankReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./bankreceipt-IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], BankReceiptComponent);
    return BankReceiptComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BankReceiptSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptSearchComponent", function() { return BankReceiptSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LoginService } from '../../authServiceshared/service/loginService';





var BankReceiptSearchComponent = /** @class */ (function () {
    function BankReceiptSearchComponent(_dataService, datePipe, _loginService, _toasterService, _router, _activatedRoute, _loaderService) {
        this._dataService = _dataService;
        this.datePipe = datePipe;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._loaderService = _loaderService;
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
            selectorHeight: '198px',
            selectorWidth: '200px'
        };
        this.searchList = [];
        this.printarray = [];
        this.displayType = 'SEARCH';
        this.searchHeaderText = 'List of Vouchers';
        this.Display = "0";
        this.Type = 'CODE';
        this.EntryNo = '';
        this.FromDate = null;
        this.ToDate = null;
        this.FrmDt = null;
        this.ToDt = null;
        this.ActFromDate = null;
        this.ActToDate = null;
        this.BankFromDate = null;
        this.BankToDate = null;
        this.VoucherDay = null;
        this.JobNo = '';
        this.Amount = '';
        this.Day = null;
        this.AccountList = [];
        this.OurBankList = [];
        this.Account = null;
        this.ChequeNo = '';
        this.STATUS = 'BR';
        this.VoucherType = "0";
    }
    BankReceiptSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            //  console.log(params)
            _this.PageType = params["Type"];
            if (_this.PageType == "BR") {
                _this.searchHeaderText = "Bank Receipt";
            }
            else if (_this.PageType == "BP") {
                _this.searchHeaderText = "Bank Payment";
            }
            else if (_this.PageType == "CR") {
                _this.searchHeaderText = "Cash Receipt";
            }
            else if (_this.PageType == "CP") {
                _this.searchHeaderText = "Cash Payment";
            }
            else if (_this.PageType == "CE") {
                _this.searchHeaderText = "Cash Expense";
            }
            else if (_this.PageType == "CC") {
                _this.searchHeaderText = "Request Bank Payment";
            }
            else {
                _this.searchHeaderText = "";
            }
        });
        var _jsonData = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "BR"
        };
        this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.AccountList = data.Table;
            _this.OurBankList = data.Table2;
        });
        //  this._loginService.verifyRights(9, '')
        //  .subscribe((data: any) => { this._loginService.checkVerify('View', data); });
        if (this.PageType == "BR") {
            this._loginService.verifyRights(5, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
        else if (this.PageType == "BP") {
            this._loginService.verifyRights(6, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
        else if (this.PageType == "CR") {
            this._loginService.verifyRights(7, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
        else if (this.PageType == "CP") {
            this._loginService.verifyRights(8, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
        else if (this.PageType == "CE") {
            this._loginService.verifyRights(29, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
        else if (this.PageType == "CC") {
            this._loginService.verifyRights(91, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
    };
    BankReceiptSearchComponent.prototype.frmDateChanged = function (ev) {
        this.FromDate = ev.formatted;
        this.frmdt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate);
    };
    BankReceiptSearchComponent.prototype.toDateChanged = function (ev) {
        this.ToDate = ev.formatted;
        this.todt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate);
    };
    BankReceiptSearchComponent.prototype.frmBankDateChanged = function (ev) {
        this.BankFromDate = ev.formatted;
        this.frmdt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.BankFromDate);
    };
    BankReceiptSearchComponent.prototype.toBankDateChanged = function (ev) {
        this.BankToDate = ev.formatted;
        this.todt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.BankToDate);
    };
    BankReceiptSearchComponent.prototype.frmActDateChanged = function (ev) {
        this.ActFromDate = ev.formatted;
        this.frmdt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ActFromDate);
    };
    BankReceiptSearchComponent.prototype.toactDateChanged = function (ev) {
        this.ActToDate = ev.formatted;
        this.todt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ActToDate);
    };
    BankReceiptSearchComponent.prototype.fnValidate_Code = function () {
        if (this.EntryNo.trim().length === 0) {
            alert("Please Enter Voucher No.");
            return false;
        }
        else if (this.EntryNo.trim().length != 15) {
            alert("Invalid Voucher No.");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_ChequeNo = function () {
        if (this.ChequeNo.trim().length === 0) {
            alert("Please Enter Cheque No.");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_JobNo = function () {
        if (this.JobNo.trim().length === 0) {
            alert("Please Enter Job No.");
            return false;
        }
        else if (this.JobNo.trim().length != 15) {
            alert("Invalid Job No.");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_Client = function () {
        if (!this.Account) {
            alert("Please select Client.");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_Ourbank = function () {
        if (!this.OurBank) {
            alert("Please select Our Bank.");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_Amount = function () {
        if (this.Amount.trim().length === 0) {
            alert("Please Enter Amount.");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_Date = function () {
        if (!this.FromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.ToDate) {
            alert("Please select To Date.");
            return false;
        }
        else if (this.FromDate != "" && this.ToDate != "") {
            var intdtfrm = void 0, intdtTo = void 0;
            intdtfrm = this._dataService.datechnge(this.FromDate.formatted);
            intdtTo = this._dataService.datechnge(this.ToDate.formatted);
            if (this._dataService.date2Comparison(intdtfrm, intdtTo) == false) {
                this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                return false;
            }
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.fnValidate_Day = function () {
        if (!this.VoucherDay) {
            alert("Please select Date");
            return false;
        }
        return true;
    };
    BankReceiptSearchComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    BankReceiptSearchComponent.prototype.search = function () {
        // this._loginService.verifyRights(9, '')
        // .subscribe((data: any) => { 
        //     this._loginService.checkVerify('View', data); 
        // });
        var SearchType = "";
        var Typevalue = "";
        if (this.Type == 'CODE') {
            if (this.fnValidate_Code()) {
                SearchType = "ENTRYNO";
                this.getData(SearchType);
            }
            ;
        }
        else if (this.Type == 'CHEQUENO') {
            if (this.fnValidate_ChequeNo()) {
                SearchType = "CHQNO";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'CLIENT') {
            if (this.fnValidate_Client()) {
                SearchType = "ACCOUNT";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'OURBANK') {
            if (this.fnValidate_Ourbank()) {
                SearchType = "BANK";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'JOBNO') {
            if (this.fnValidate_JobNo()) {
                SearchType = "JOBNO";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'AMOUNT') {
            if (this.fnValidate_Amount()) {
                SearchType = "AMOUNT";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'DATE') {
            if (this.fnValidate_Date()) {
                SearchType = "DATE";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'PRINTAV') {
            if (this.fnValidate_Day()) {
                SearchType = "DAY";
                this.getDataofDay(SearchType);
            }
        }
    };
    BankReceiptSearchComponent.prototype.getbankactdate = function (searchtype) {
        if (searchtype == 'BANK') {
            // this.FrmDt= this.BankFromDate,
            // this.ToDt=this.BankToDate    
            this.frmdt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.BankFromDate);
            this.todt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.BankToDate);
        }
        else if (searchtype == 'CLIENT') {
            // this.FrmDt= this.ActFromDate,
            // this.ToDt=this.ActToDate   
            this.frmdt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ActFromDate);
            this.todt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ActToDate);
        }
        else if (searchtype == 'DATE') {
            // this.frmdt= this.FromDate.formatted,
            // this.todt=this.ToDate.formatted   
            this.frmdt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate);
            this.todt = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate);
        }
    };
    BankReceiptSearchComponent.prototype.getData = function (searchtype) {
        var _this = this;
        this.getbankactdate(searchtype);
        var API_Pass = "";
        var _jsonData;
        if (this.PageType == "CC") {
            _jsonData = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.EntryNo,
                FROMDATE: (this.frmdt) ? this.frmdt : "",
                TODATE: (this.todt) ? this.todt : "",
                CLIENT: (this.Account == undefined) ? "" : this.Account.split("|")[0],
                CHEQUENO: (this.ChequeNo == undefined) ? "" : this.ChequeNo,
                OURBANK: (this.OurBank == undefined) ? "" : this.OurBank,
                JOBNO: this.JobNo,
                AMOUNT: this.Amount,
                STATUS: "BP",
                MODE: "Search",
                DISPLAYTYPE: searchtype,
                YEARID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
                Cmpid: this._loginService.getLogin()[0].CMPID
            };
            API_Pass = "Accounts/ACC_ReqBP_SEARCH";
        }
        else {
            _jsonData = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.EntryNo,
                // FROMDATE:(this.FrmDt) ?this.FrmDt.formatted : "",
                // TODATE: (this.ToDt) ? this.ToDt.formatted : "",
                FROMDATE: (this.frmdt) ? this.frmdt : "",
                TODATE: (this.todt) ? this.todt : "",
                CLIENT: (this.Account == undefined) ? "" : this.Account.split("|")[0],
                CHEQUENO: (this.ChequeNo == undefined) ? "" : this.ChequeNo,
                OURBANK: (this.OurBank == undefined) ? "" : this.OurBank,
                JOBNO: this.JobNo,
                AMOUNT: this.Amount,
                STATUS: this.PageType,
                MODE: "SEARCH",
                DISPLAYTYPE: searchtype,
                YEARID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
            };
            API_Pass = "Accounts/ACC_CASHBOOK_SEARCH";
        }
        // console.log(_jsonData)
        this._loaderService.display(true);
        this._dataService.getData(API_Pass, _jsonData)
            .subscribe(function (data) {
            // console.log(data)
            _this._loaderService.display(false);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                if (_this.PageType == "BR") {
                    _this._router.navigate(["/accounts/Voucher/BankRecpt/Add/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "BP") {
                    _this._router.navigate(["/accounts/Voucher/BankPaymnt/Add/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CR") {
                    _this._router.navigate(["/accounts/Voucher/cashrecipt/cashpayment/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CE") {
                    _this._router.navigate(["accounts/Voucher/CashExpence/Add/CE/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CP") {
                    _this._router.navigate(["accounts/Voucher/CashPayment/Add/CP/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CC") {
                    _this._router.navigate(["/accounts/CompCheque/ReqBP/Add_reqBP/", data.Table[0].ENTRYNO]);
                }
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    BankReceiptSearchComponent.prototype.getDataofDay = function (searchtype) {
        var _this = this;
        console.log(this.VoucherDay);
        var _jsonData = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            ENTRYNO: "",
            FROMDATE: "",
            TODATE: "",
            CLIENT: "",
            CHEQUENO: "",
            OURBANK: "",
            JOBNO: "",
            AMOUNT: "",
            STATUS: (this.PageType == "CC") ? "BP" : this.PageType,
            MODE: "search",
            DISPLAYTYPE: searchtype,
            DAY: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.VoucherDay.formatted),
            YEARID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
        };
        console.log(_jsonData);
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_BP_SEARCH_DAY", _jsonData)
            .subscribe(function (data) {
            console.log(data);
            _this._loaderService.display(false);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                if (_this.PageType == "BR") {
                    _this._router.navigate(["/accounts/Voucher/BankRecpt/Add/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "BP") {
                    _this._router.navigate(["accounts/Voucher/BankPaymnt/Add/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CR") {
                    _this._router.navigate(["/accounts/Voucher/cashrecipt/cashpayment/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CE") {
                    _this._router.navigate(["/accounts/Voucher/CashExpence/Add/CE/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CP") {
                    _this._router.navigate(["/accounts/Voucher/CashPayment/Add/CP/", data.Table[0].ENTRYNO]);
                }
                else if (_this.PageType == "CC") {
                    // this._router.navigate(["/accounts/Voucher/ReqBP/Add/", data.Table[0].ENTRYNO]);
                    _this._router.navigate(["/accounts/CompCheque/ReqBP/Add_reqBP/", data.Table[0].ENTRYNO]);
                }
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    BankReceiptSearchComponent.prototype.getCheckboxValues = function (event, data) {
        var index = this.printarray.findIndex(function (x) { return x.entryno == data; });
        if (event) {
            var obj = {
                entryno: data
            };
            this.printarray.push(obj);
            console.log(this.printarray);
        }
        else {
            this.printarray.splice(index, 1);
            console.log(this.printarray);
        }
    };
    BankReceiptSearchComponent.prototype.checkAll = function (ev) {
        this.printarray = [];
        this.searchList.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.searchList.length; i++) {
                var obj = {
                    entryno: this.searchList[i].ENTRYNO
                };
                this.printarray.push(obj);
                console.log(this.printarray);
            }
        }
        else {
            this.printarray = [];
        }
    };
    BankReceiptSearchComponent.prototype.Print_Multiple = function () {
        if (this.printarray.length == "0") {
            this._toasterService.toast("warning", "warning", "Select at least One Entry No to Print.");
            return false;
        }
        var output = this.printarray.map(function (item) {
            return item.entryno;
        });
        var datatry = output.join(",");
        var printnolist = datatry;
        console.log(printnolist);
        var URL = "http://180.179.207.163/erp/UI/Accounts/frm_Acc_Tran_BRBPCRCP_Print.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&entryno=" + printnolist
            + "&CurLogInIP=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    BankReceiptSearchComponent.prototype.redirectToEdit = function (EntryNo) {
        if (confirm('Click Ok to Print or Click Cancel to Edit ?')) {
            var theTop = (screen.height / 2) - (483 / 2);
            var theLeft = (screen.width / 2) - (780 / 2);
            var toolbar_1 = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + this.PageType + '/' + EntryNo + '/', "CashBook BankReceipt Print", toolbar_1);
        }
        else {
            if (this.PageType == "BR") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + EntryNo]);
            }
            else if (this.PageType == "BP") {
                this._router.navigate(["/accounts/Voucher/BankPaymnt/Add/", EntryNo]);
            }
            else if (this.PageType == "CR") {
                this._router.navigate(['/accounts/Voucher/cashrecipt/cashpayment/' + EntryNo]);
            }
            else if (this.PageType == "CE") {
                this._router.navigate(['/accounts/Voucher/CashExpence/Add/CE/' + EntryNo]);
            }
            else if (this.PageType == "CP") {
                this._router.navigate(['/accounts/Voucher/CashPayment/Add/CP/' + EntryNo]);
            }
            else if (this.PageType == "CC") {
                // this._router.navigate(["/accounts/voucher/ReqBP/Add/", EntryNo]);
                this._router.navigate(["/accounts/CompCheque/ReqBP/Add_reqBP/", EntryNo]);
            }
        }
    };
    BankReceiptSearchComponent.prototype.ResetAll = function () {
        this.EntryNo = "",
            this.JobNo = "",
            this.Amount = "",
            this.Account = "",
            this.FromDate = "",
            this.ToDate = "",
            this.VoucherDay = "",
            this.Day = "",
            this.OurBank = "",
            this.ChequeNo = "";
        this.BankFromDate = "",
            this.BankToDate = "",
            this.ActFromDate = "",
            this.ActToDate = "",
            this.FrmDt = "",
            this.ToDt = "";
    };
    BankReceiptSearchComponent.prototype.printButton = function () {
        if (this.EntryNo == '' || this.EntryNo == undefined || this.EntryNo.length < 15) {
            alert("Enter 15 digit No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + this.PageType + '/' + this.EntryNo + '/', "CashBook BankReceipt Print", toolbar);
    };
    BankReceiptSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    BankReceiptSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts-vouchers-receipt-bankreceipt-search',
            template: __webpack_require__(/*! raw-loader!./bankreceipt-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.html"),
            // styleUrls: ['../../../../node_modules/@ng-select/ng-select/themes/default.theme.css'], 
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], BankReceiptSearchComponent);
    return BankReceiptSearchComponent;
}());

// import { Component, OnInit,ViewEncapsulation } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../../shared/service/dataService';
// //import { LoginService } from '../../authServiceshared/service/loginService';
// import { LoginService } from '../../../shared/service/loginService';
// import { ToastCommonService } from '../../../shared/service/toastService';
// import { IMyDpOptions } from 'mydatepicker';
// import { LoaderService } from '../../../shared/service/loader.service';
// import { iif } from 'rxjs';
// @Component({
//     selector: 'app-accounts-vouchers-receipt-bankreceipt-search',
//     templateUrl: 'bankreceipt-search.component.html',
//     // styleUrls: ['../../../../node_modules/@ng-select/ng-select/themes/default.theme.css'], 
//     encapsulation: ViewEncapsulation.None
// })
// export class BankReceiptSearchComponent implements OnInit {
//     public myDatePickerOptions: IMyDpOptions = {
//         dateFormat: 'dd/mm/yyyy',
//         inline: false,
//         height: '16px',
//         width: '120px',
//         componentDisabled: false,
//         selectionTxtFontSize: '12px',
//         editableDateField: false,
//         sunHighlight: true,
//         satHighlight: true,
//         firstDayOfWeek: 'su',
//         openSelectorTopOfInput: false,
//         openSelectorOnInputClick: true,
//         selectorHeight: '198px',
//         selectorWidth: '200px'
//     };
//     searchList: any = [];
//     displayType: string = 'SEARCH';
//     searchHeaderText: string = 'List of Vouchers';
//     Display:string="0";
//     Type: string = 'CODE';
//     EntryNo: any = '';
//     FromDate: any = null;
//     ToDate: any = null;
//     FrmDt: any = null;
//     ToDt: any = null;
//     ActFromDate:any = null;
//     ActToDate:any = null;
//     BankFromDate:any = null;
//     BankToDate:any = null;
//     VoucherDay: any = null;
//     JobNo: any = '';
//     Amount: any = '';
//     Day:any = null;
//     AccountList: any = [];
//     OurBankList: any = [];
//     Account: any = null;
//     AccountName: string;
//     ChequeNo: any = '';
//     OurBank: string;
//     STATUS: string='BR';
//     constructor(
//         private _dataService: DataService,
//         private _loginService: LoginService,
//         private _toasterService: ToastCommonService,
//         private _router: Router,
//         private _loaderService: LoaderService) { }
//     ngOnInit() {
//         const _jsonData = {
//             CMPCODE: this._loginService.getLogin()[0].CMPCODE,
//             CITYCODE: this._loginService.getLogin()[0].CITYCODE,
//             CITYCODE1:this._loginService.getLogin()[0].CITYCODE1,
//             PSTATUS:"BR"
//         };
//         this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD", _jsonData)
//             .subscribe((data: any) => {
//                 this._loaderService.display(false);
//                 this.AccountList= data.Table;
//                 this.OurBankList=data.Table2;
//              });
//              this._loginService.verifyRights(9, '')
//              .subscribe((data: any) => { this._loginService.checkVerify('View', data); });
//     }
//     fnValidate_Code(): boolean {
//         if (this.EntryNo.trim().length === 0) {
//             alert("Please Enter Voucher No.");
//             return false;
//         } else if (this.EntryNo.trim().length != 15) {
//             alert("Invalid Voucher No.");
//             return false;
//         }
//         return true;
//     }
//     fnValidate_ChequeNo(): boolean {
//         if (this.ChequeNo.trim().length === 0) {
//             alert("Please Enter Cheque No.");
//             return false;
//         // } else if (this.EntryNo.trim().length != 15) {
//         //     alert("Invalid Voucher No.");
//         //     return false;
//         }
//         return true;
//     }
//     fnValidate_JobNo(): boolean {
//         if (this.JobNo.trim().length === 0) {
//             alert("Please Enter Job No.");
//             return false;
//         } else if (this.JobNo.trim().length != 15) {
//             alert("Invalid Job No.");
//             return false;
//         }
//         return true;
//     }
//     fnValidate_Client(): boolean {
//         if (!this.Account) {
//             alert("Please select Client.");
//             return false;
//         }
//         return true;
//     }
//     fnValidate_Ourbank(): boolean {
//         if (!this.OurBank) {
//             alert("Please select Our Bank.");
//             return false;
//         }
//         return true;
//     }
//     fnValidate_Amount(): boolean {
//         if (this.Amount.trim().length === 0) {
//             alert("Please Enter Amount.");
//             return false;
//         }
//         return true;
//     }
//     fnValidate_Date(): boolean {
//         if (!this.FromDate) {
//             alert("Please select From Date.");
//             return false;
//         }
//         else if (!this.ToDate) {
//             alert("Please select To Date.");
//             return false;
//         }
//         else if (!this._dataService.DateFromAndToComparision(this.FromDate.formatted, this.ToDate.formatted)) {
//             alert("To Date should be greater than From Date");
//             return false;
//         }
//         return true;
//     }
//     fnValidate_Day(): boolean {
//         if (!this.VoucherDay) {
//             alert("Please select Date");
//             return false;
//         }
//         return true;
//     }
//     SqlDate(strdateP) {
//         if (strdateP != "" || strdateP != undefined) {
//             let strdate = strdateP.split("/");
//             let StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
//             return StrSqlDate;
//         }
//         else return "";
//     }
//     search() {
//         this._loginService.verifyRights(9, '')
//         .subscribe((data: any) => { 
//             this._loginService.checkVerify('View', data); 
//         });
//         let SearchType = ""; let Typevalue="";
//         if (this.Type == 'CODE') { if (this.fnValidate_Code()) { SearchType = "ENTRYNO"; this.getData(SearchType); }; }
//         else if (this.Type == 'CHEQUENO') { if (this.fnValidate_ChequeNo()) { SearchType = "CHQNO"; this.getData(SearchType); } }
//         else if (this.Type == 'CLIENT') { if (this.fnValidate_Client()) { SearchType = "ACCOUNT";   this.getData(SearchType); } }
//         else if (this.Type == 'OURBANK') { if (this.fnValidate_Ourbank()) { SearchType = "BANK";   this.getData(SearchType); } }
//         else if (this.Type == 'JOBNO') { if (this.fnValidate_JobNo()) { SearchType = "JOBNO"; this.getData(SearchType); } }
//         else if (this.Type == 'AMOUNT') { if (this.fnValidate_Amount()) { SearchType = "AMOUNT"; this.getData(SearchType); } }
//         else if (this.Type == 'DATE') { if (this.fnValidate_Date()) { SearchType = "DATE";  this.getData(SearchType); } }
//         else if (this.Type == 'PRINTAV') { if (this.fnValidate_Day()) { SearchType = "DAY"; Typevalue=this.VoucherDay;""; } }
//         }
//         getbankactdate(searchtype)
//             {
//         if(searchtype == 'BANK')
//         {    
//             this.FrmDt= this.BankFromDate,
//             this.ToDt=this.BankToDate    
//         }
//         else
//         if(searchtype == 'CLIENT')
//         {    
//             this.FrmDt= this.ActFromDate,
//             this.ToDt=this.ActToDate   
//         }
//         else
//         if(searchtype == 'DATE')
//         {    
//             this.FrmDt= this.FromDate,
//             this.ToDt=this.ToDate   
//         }
//             }
//     getData(searchtype) {
//         this.getbankactdate(searchtype)
//         const _jsonData = {
//             CMPCODE: this._loginService.getLogin()[0].CMPCODE,
//             CITYCODE: this._loginService.getLogin()[0].CITYCODE,
//             ENTRYNO:this.EntryNo,
//             FROMDATE:(this.FrmDt) ?this.FrmDt.formatted : "",
//             TODATE: (this.ToDt) ? this.ToDt.formatted : "",
//             CLIENT:(this.Account==undefined)?"" :this.Account.split("|")[0],
//             CHEQUENO:(this.ChequeNo==undefined)?"" :this.ChequeNo,
//             OURBANK:(this.OurBank==undefined)?"" :this.OurBank,
//             JOBNO:this.JobNo,
//             AMOUNT:this.Amount,
//             STATUS:this.STATUS,
//             MODE:"SEARCH",
//             DISPLAYTYPE:searchtype,
//             YEARID:this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID
//         };
//         this._loaderService.display(true);
//         this._dataService.getData("Accounts/ACC_CASHBOOK_SEARCH", _jsonData)
//             .subscribe((data: any) => {
//                 this._loaderService.display(false);
//                // console.log(data);
//                 if (data.Table.length == 0) {
//                     this._toasterService.toast("warning", "Alert", "No record found");
//                 }
//                   else if (data.Table.length == 1) {
//                      this._router.navigate(["/accounts/Voucher/BankRecpt/Add/", data.Table[0].ENTRYNO]);
//                  }
//                 else if (data.Table.length >1) {
//                     this.displayType = 'LIST';
//                     this.searchList = data.Table;
//                 }
//             });
//     }
//     redirectToEdit(EntryNo) {
//         this._router.navigate(['/accounts/Voucher/BankRecpt/Add/'+EntryNo]);
//     }
//     ResetAll(){
//         this.EntryNo="",
//         this.JobNo="",
//         this.Amount="",
//         this.Account="",
//         this.FromDate="",
//         this.ToDate="",
//         this.VoucherDay="",
//         this.Day="",
//         this.OurBank="",
//         this.ChequeNo=""
//         this.BankFromDate="",
//         this.BankToDate="",
//         this.ActFromDate="",
//         this.ActToDate="",
//         this.FrmDt="",
//         this.ToDt=""
//     }
// }


/***/ }),

/***/ "./src/app/accounts/Vouchers/BankRecpt/bankrecpt.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankRecpt/bankrecpt.module.ts ***!
  \*****************************************************************/
/*! exports provided: BankReceiptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptModule", function() { return BankReceiptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _bankrecpt_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bankrecpt.routing */ "./src/app/accounts/Vouchers/BankRecpt/bankrecpt.routing.ts");
/* harmony import */ var _bankreceipt_IU_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bankreceipt-IU.component */ "./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.ts");
/* harmony import */ var _bankreceipt_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bankreceipt-search.component */ "./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SharedModule } from '../../../shared/shared.module';



var BankReceiptModule = /** @class */ (function () {
    function BankReceiptModule() {
    }
    BankReceiptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_bankrecpt_routing__WEBPACK_IMPORTED_MODULE_6__["BankReceiptRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _bankreceipt_IU_component__WEBPACK_IMPORTED_MODULE_7__["BankReceiptComponent"],
                _bankreceipt_search_component__WEBPACK_IMPORTED_MODULE_8__["BankReceiptSearchComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], BankReceiptModule);
    return BankReceiptModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/BankRecpt/bankrecpt.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankRecpt/bankrecpt.routing.ts ***!
  \******************************************************************/
/*! exports provided: BankReceiptRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptRoutingModule", function() { return BankReceiptRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bankreceipt_IU_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bankreceipt-IU.component */ "./src/app/accounts/Vouchers/BankRecpt/bankreceipt-IU.component.ts");
/* harmony import */ var _bankreceipt_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bankreceipt-search.component */ "./src/app/accounts/Vouchers/BankRecpt/bankreceipt-search.component.ts");
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
            title: ' BR'
        },
        children: [
            { path: 'Add/:EntryNo', component: _bankreceipt_IU_component__WEBPACK_IMPORTED_MODULE_2__["BankReceiptComponent"], data: { title: 'Add' } },
            { path: 'Search/:Type', component: _bankreceipt_search_component__WEBPACK_IMPORTED_MODULE_3__["BankReceiptSearchComponent"], data: { title: 'Search' } }
        ]
    }
];
var BankReceiptRoutingModule = /** @class */ (function () {
    function BankReceiptRoutingModule() {
    }
    BankReceiptRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BankReceiptRoutingModule);
    return BankReceiptRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    //edocumentIp: 'http://109.15.43.138/'
    edocumentIp: 'http://81.250.195.254/'
};


/***/ })

}]);
//# sourceMappingURL=default~BankPayment-bankpayment-module~BankRecpt-bankrecpt-module~cashrecipt-cashrecipt-module.js.map