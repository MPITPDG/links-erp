(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OEBankReceipt-bankreceiptOE-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkrules=='N') ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('R')\"></i>  \r\n                    <b> Rules for Old Entry </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkrules=='Y'\">\r\n                <td colspan=\"4\">\r\n                    <table>\r\n                        <td>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">1. Main General Details and Cheque Details is non-editable.</span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\"  style=\"font-weight:lighter ;color: red;\" >{{lblNetSummary}}</span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">3. Accounts and Account's Net Total (Amount-Deduction) should be same. </span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">4. Entry wise: Item, Entry Type, Department, Bill No., Job No., Amount, Deduction, Narration are editable.</span>\r\n                            </tr>\r\n                        </td>\r\n                    </table>\r\n                 </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <b> General Details </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span  class=\"col-form-span-label\"><b>Entry No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >\r\n                    <table >\r\n                        <tbody  style=\"border: none;\">\r\n                        <tr>\r\n                               <td >  <input [(ngModel)]=\"EntryNo\" type=\"text\"  [disabled]='disableentryno' class=\"form-control width150\" maxlength=\"40\" ></td>\r\n                               <td *ngIf=\"showhidebtn==false\"> <button type=\"submit\" (click)=\"ShowoldData(EntryNo)\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Search</span></button> </td> \r\n                        </tr>\r\n                    </tbody>\r\n                    </table>\r\n           \r\n                </td>\r\n                <td ><span class=\"col-form-span-label\"><b>Entry Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n                <td>\r\n                    <input [(ngModel)]=\"EntryDate\" disabled=\"disabled\" [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">  <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > </td>\r\n             </tr>\r\n             <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Cheque Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Cheque Date</b> </span></td>\r\n                <td>\r\n                    <input [(ngModel)]=\"ChequeDate\" disabled=\"disabled\" [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n                </td>\r\n                <td><span class=\"col-form-span-label\"><b>Cheque No.</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"ChequeNo\"  disabled=\"disabled\"  [OnlyNumber]=\"true\" type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Our Bank</b> </span></td>\r\n                <td colspan=\"3\">\r\n                <select class=\"form-control width500\"  disabled=\"disabled\"  [(ngModel)]=\"OurBank\" (change)=\"GetOurBankName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of OurBankList\"  value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\r\n                </select>\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Bank Name</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BankName\"  disabled=\"disabled\"  type=\"text\"   class=\"form-control width200\" maxlength=\"40\" > </td>\r\n\r\n                <td><span class=\"col-form-span-label\"><b>Bank Ref. No.</b> </span></td> \r\n                <td >  <input [(ngModel)]=\"BankRefNo\"  disabled=\"disabled\"  type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkoriginactdtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('OA')\"></i>  \r\n                    <b> Original Accounts Detail </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkoriginactdtl==true\">\r\n                <td colspan=\"4\" class=\"table table-bordered table-sm-new bgblue\">\r\n                    <table>\r\n                        <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"OriginalAccountlist.length>0\" >\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                    \r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                 <tbody   >\r\n                                    <tr *ngFor=\"let obj of OriginalAccountlist\">\r\n                                     \r\n                                       <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                       </div>\r\n                    </table>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkactwisedtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('A')\"></i>  \r\n                    <b> Accounts Wise Detail </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkactwisedtl==true\">\r\n                <td colspan=\"4\">\r\n                    <table class=\"table table-bordered table-sm-new bgblue\">\r\n                        <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountwiselist.length>0\" >\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount Total</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction Total</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Net Total</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                 <tbody   >\r\n                                    <tr *ngFor=\"let obj of Accountwiselist\">\r\n                                       <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.TOT_AMOUNT}}</span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.TOT_DEDUCTION}}</span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.NET_AMOUNT}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                       </div>\r\n                    </table>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Accounts Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"2\">\r\n\r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Entry Type</b> </span></td>\r\n                <td style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" [disabled]='disableEntryType' (change)=\"listbillpopup($event.target.value)\"  >\r\n                        <option value=\"0\">-- Select Type --</option>\r\n                        <option value=\"AB1\">Bill - Help</option>\r\n                        <option value=\"AB\">Bill - Manual</option>\r\n                        <option value=\"AO\">Opening Balance</option>\r\n                        <option value=\"AD\">Advance</option>\r\n                        <option value=\"OA\">On Account</option>\r\n                        <option value=\"JB\">JobNo</option>\r\n                        <option value=\"PE\">Purchase Entry</option>\r\n                        <option value=\"GR\">General</option>\r\n                        </select>\r\n\r\n            </td>\r\n                <td><span class=\"col-form-span-label\"><b> Department</b> </span></td>\r\n                <td>\r\n                 <select class=\"form-control width150\"  [(ngModel)]=\"Department\" (change)=\"GetDepartmentName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of Departmentlist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n\r\n                </select>\r\n\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Bill No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"BillNo\" type=\"text\"  [OnlyNumber]=\"true\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Job No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Amount\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]='toggledebit' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Deduction\" [OnlyNumber]=\"true\" type=\"text\"  [disabled]='disable_deduction'   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ShortNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"showhidebtn==true\">\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchild();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    <!-- <button class=\"btn btn-sm btn-danger\" type=\"List\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> List</span></button> -->\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Net Total</b> </span></td>\r\n                <td colspan=\"3\" >  <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalDeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n\r\n       <tr>\r\n        <td colspan=\"4\">\r\n        <!-- <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                 <td colspan=\"4\" > style=\"width:615px;\" -->\r\n                    <div class=\"row xyscroll\" style=\"width:715px;\"   >\r\n                        <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\" >\r\n                            <thead>\r\n                                <tr class=\"bakgrdliteBlue\">\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\" ></th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                </tr>\r\n                            </thead>\r\n                             <tbody   >\r\n                                <tr *ngFor=\"let obj of Accountlist\">\r\n                                    <td class=\"centerlabel\">\r\n                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                        &nbsp;\r\n                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.ACC_BANKDTLS_ID)\"></i>\r\n                                    </td>\r\n                                   <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                   <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                   </div>\r\n                 <!-- </td>\r\n            </tr>\r\n\r\n        </table>   -->\r\n\r\n    </td>\r\n</tr>\r\n<tr *ngIf=\"showhidebtn==true\">\r\n    <td colspan=\"4\"  class=\"centerlabel\">\r\n        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n    </td>\r\n</tr>\r\n </table>\r\n    </div>\r\n   \r\n\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_ListBill ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-mg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:600px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">BILL DETAILS</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > -->\r\n                        <div class=\"col\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Client:  </b> </span>\r\n                                    <span class=\"col-form-span-label\"><b>{{client}}</b></span>\r\n                                </td>\r\n                                 \r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <thead style=\"text-align: center;\">\r\n                                        <tr>\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label\">INVOICE NO.</th>\r\n                                            <th class=\"col-form-span-label\">JOB NO.</th>\r\n                                            <th class=\"col-form-span-label\">AMOUNT</th>\r\n                                            <th class=\"col-form-span-label\">DEDUCTION</th>\r\n                                            <th class=\"col-form-span-label\">NARRATION</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody >\r\n                                       \r\n                                        <tr *ngFor=\"let obj of ListBill \">\r\n                                            <td class=\"col-form-span-label\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.CHECKED\" [id]=\"i\" [value]=\"i\"\r\n                                                    (ngModelChange)=\"getCheckboxValues($event,obj.INV_NO,obj.INV_JOBNO,obj.TOTALAMT,obj.DEDUCTION,obj.NARRATION,obj.CLIENT)\">\r\n                                                &nbsp; </td>\r\n                                            <td class=\"col-form-span-label\">{{obj.INV_NO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.INV_JOBNO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.TOTALAMT}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.DEDUCTION}}</td>\r\n                                            <td class=\"col-form-span-label\"> <input [(ngModel)]=\"obj.NARRATION\"  type=\"text\" maxlenght=\"40\"  class=\"form-control width150\" ></td>\r\n\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n                <div style=\"float: right;\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"popup_listbill()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                            (click)=\"close()\"><i class=\"fa fa-ban\"></i>\r\n                            Close</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.ts ***!
  \********************************************************************************/
/*! exports provided: BankReceiptOEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptOEComponent", function() { return BankReceiptOEComponent; });
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








var BankReceiptOEComponent = /** @class */ (function () {
    function BankReceiptOEComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
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
        this.OriginalAccountlist = [];
        this.AllDepartmentlist = [];
        this.codelistActt = [];
        this.AccountNameList = [];
        this.Departmentlist = [];
        this.Department = "0";
        this.codelistDept = [];
        this.OurBankList = [];
        this.AllOurBankList = [];
        this.ChqType = "CHQ";
        this.ChkTypeList = [];
        this.ItemList = [];
        this.EntryTypeList = [];
        this.BillNo = "";
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.TotalAmount = "0";
        this.TotalDeduction = "0";
        this.NetTotal = "0";
        this.OldNetTotal = "0";
        this.NewnetAmt = "0";
        this.ID = "0";
        this.ISNOTEDITABLE = "0";
        this.ACC_BANKDTLS_ID = "0";
        this.Header = "BANK RECEIPT - UPDATE OLD ENTRY";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.Accountlist = [];
        this.Accountwiselist = [];
        this.ACCTNAME = "";
        this.STATUS = "BR";
        this.NOTOVERFLAG = "";
        this.PAYEENAME = "";
        this.CRPARENTENTRYNO = "0";
        this.ChequeNo = "";
        this.ChequeDate = '';
        this.CompChequeFlag = "0";
        this.dfltourbank = "";
        this.showModal_ChqList = false;
        this.showModal_ChqValidate = false;
        this.ListChq = [];
        this.Conf = "";
        this.strmsg = "";
        this.disable_BillNo = false;
        this.disable_EntryType = false;
        this.disable_cmdadd = false;
        this.disable_cmdcancel = false;
        this.disable_chequetype = false;
        this.disable_chequeno = false;
        this.disable_deduction = false;
        this.showModal_ListBill = false;
        this.toggledebit = false;
        this.ListBill = [];
        this.newArray = [];
        this.chequelabel = "Normal cheque print";
        this.confirmsave = "";
        this.BankRefNo = "";
        this.chkrules = "N";
        this.chkoriginactdtl = false;
        this.chkactwisedtl = false;
        this.IsOldEntry = "1";
        this.lblNetSummary = "2. Net Amount will be same.";
        this.showhidebtn = false;
        this.disableentryno = false;
        this.togglededuction = false;
        this.disableEntryType = false;
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
    }
    BankReceiptOEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.EntryDate = new Date();
        this.EntryDate = this._dataService.datechnge(this.EntryDate);
        this.ChequeDate = new Date();
        this.ChequeDate = this._dataService.datechnge(this.ChequeDate);
        var jsonparam = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "BR" };
        this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            ///this.Departmentlist=data.Table1;
            _this.OurBankList = data.Table2;
            _this.Allitemlist = data.Table5;
            _this.EntryTypeList = data.Table6;
            _this.AllDepartmentlist = data.Table1;
            _this.Departmentlist = data.Table1;
            var defCode = data.Table3[0].ACCTCODE;
            _this.OurBank = defCode;
            _this.dfltourbank = data.Table3[0].ACCTCODE;
        });
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonreset)
            .subscribe(function (data) {
        });
    };
    BankReceiptOEComponent.prototype.ShowoldData = function () {
        var _this = this;
        if (this.Validate_BRBPCRCPCE_OldEntryNo() == false) {
            return false;
        }
        else {
            var jsonview = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.EntryNo,
                VGUID: this._loginService.getLogin()[0].GUID,
                STATUS: this.STATUS
            };
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_View_OLD", jsonview)
                .subscribe(function (data) {
                _this.EntryNo = data.Table2[0].ENTRYNO;
                _this.EntryDate = (data.Table2[0].ENTRYDT != "") ? (data.Table2[0].ENTRYDT) : "";
                _this.Narration = data.Table2[0].NARRATION;
                _this.ChqType = data.Table2[0].CHEQUETYPE;
                _this.ChequeNo = data.Table2[0].CHEQUENO;
                _this.ChequeDate = (data.Table2[0].CHEQUEDT != "") ? (data.Table2[0].CHEQUEDT) : "";
                _this.OurBank = data.Table2[0].OURBANK;
                _this.OurBankName = "";
                _this.BankName = data.Table2[0].BANK;
                _this.NOTOVERFLAG = data.Table2[0].NOTOVERFLAG;
                _this.CompChequeFlag = data.Table2[0].COMPCHEQUE;
                _this.Accountlist = data.Table;
                _this.OriginalAccountlist = data.Table;
                _this.Accountwiselist = data.Table1;
                _this.TotalAmount = data.Table3[0].TOTAMOUNT;
                _this.TotalDeduction = data.Table3[0].TOTDEDUCTION;
                _this.NetTotal = data.Table3[0].NETTOTAL;
                _this.OldNetTotal = data.Table[0].ACTUALAMOUNT;
                _this.BankRefNo = data.Table2[0].BANKREFNO;
                _this.lblNetSummary = data.Table3[0].MSG_LINE2;
                _this.chkrules = 'Y';
                _this.showhidebtn = true;
                _this.disableentryno = true;
                _this.OLD_NETAMOUNT = data.Table3[0].TOTAMOUNT;
                _this.OLD_DEDUCTION = data.Table3[0].TOTDEDUCTION;
                _this.OLDNETTOTAMT = data.Table3[0].NETTOTAL;
            });
        }
    };
    BankReceiptOEComponent.prototype.GetActName = function (Acctcode) {
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    BankReceiptOEComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text; //.split("|")[1];
    };
    BankReceiptOEComponent.prototype.GetOurBankName = function (event) {
        this.OurBankName = event.target.options[event.target.options.selectedIndex].text;
    };
    BankReceiptOEComponent.prototype.Addchildrcrd = function () {
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
        if (this.EntryType == "" || this.EntryType == undefined) {
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
            if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
                return false;
            }
        }
        if (this.JobNo == "" && this.BillNo == "") {
            if (this.Department == "" || this.Department == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        if (this._loginService.getLogin()[0].CMPCODE == "20") {
            if (this.JobNo.length > 0 && this.JobNo.length != 10) {
                this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
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
            ISOLDENTRY: this.IsOldEntry
        };
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_TMP_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this.Accountlist = data.Table;
                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetTotal = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table1[0].STATUS.split("#")[1]);
                _this.loaderService.display(false);
            }
        });
    };
    BankReceiptOEComponent.prototype.Resetchild = function () {
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
        this.disable_BillNo = false;
        this.disable_EntryType = false;
        this.disable_cmdadd = false;
    };
    BankReceiptOEComponent.prototype.Editchildrecd = function (id) {
        var _this = this;
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.ID = filterData.ID;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === _this.AccountName.split("|")[0]; });
        this.Item = filterData.ITEM_DATAVALUE;
        this.Amount = filterData.AMOUNT;
        this.Deduction = filterData.DEDUCTION;
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
    BankReceiptOEComponent.prototype.deletechildrecd = function (id, brdtlsid) {
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
    BankReceiptOEComponent.prototype.Validate_OLD_NEW_NETAMT_IU = function () {
        this.NEW_NETAMOUNT = this.TotalAmount;
        this.NEW_DEDUCTION = this.TotalDeduction;
        this.NEWNETTOTAMT = this.NEW_NETAMOUNT - this.NEW_DEDUCTION;
        this.OLDNETTOTAMT = parseFloat(this.OLDNETTOTAMT).toFixed(2);
        if ((this.NEWNETTOTAMT) != (this.OLDNETTOTAMT)) {
            alert('Failed to Submit!\n\nOriginal Net Total [' + this.OLDNETTOTAMT + '] (i.e., Total Amount [' + this.OLD_NETAMOUNT + '] less Total Deduction [' + this.OLD_DEDUCTION + ']) is not equal to Current Net Total [' + this.NEWNETTOTAMT + '] (i.e., Total Amount [' + this.NEW_NETAMOUNT + '] less total Deduction [' + this.NEW_DEDUCTION + '])\n');
            return false;
        }
    };
    BankReceiptOEComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.IsOldEntry == "1") {
            if (this.Validate_OLD_NEW_NETAMT_IU() == false) {
                return false;
            }
        }
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
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                _this.Print(data.Table1[0].ENTRYNO);
                _this.loaderService.display(false);
                _this.ResetMain();
                _this.showhidebtn = false;
                _this.EntryType = "";
                _this.Department = "";
                _this.AccountName = undefined;
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    BankReceiptOEComponent.prototype.Print = function (entryno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'BR' + '/' + entryno + '/', "CashBook BankPayment Print", toolbar);
    };
    BankReceiptOEComponent.prototype.ResetMain = function () {
        this.Resetchildrcrd();
        this.EntryNo = " ";
        this.disableentryno = false;
        this.EntryDate = '';
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
        this.lblNetSummary = '2. Net Amount will be same.';
        this.OriginalAccountlist = [];
        this.Accountwiselist = [];
        this._router.navigate(['/accounts/OldEntry/OEBankReceipt/Add/ ']);
    };
    BankReceiptOEComponent.prototype.Validate_BRBPCRCPCE_OldEntryNo = function () {
        if (this.EntryNo.substring(11, 12) != '1') {
            alert("You have entered Entryno. is not Bank Receipt No. !!");
            return false;
        }
        if (this.EntryNo.substring(2, 5) != this._loginService.getLogin()[0].CITYCODE1) {
            alert("You have entered Entryno. is not for current city !!");
            return false;
        }
    };
    BankReceiptOEComponent.prototype.Reset = function () {
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.EntryNo = " ";
            this.disableentryno = false;
            //this.EntryDate ='';
            this.Narration = '';
            this.ChequeNo = '';
            this.ChequeDate = '';
            this.BankName = '';
            // this.OurBank='';
            this.TotalAmount = '';
            this.TotalDeduction = '';
            this.NetTotal = '';
            this.text = "Submit";
            this.ChqType = "CHQ";
            this.Accountlist = [];
            this.showhidebtn = false;
            this.lblNetSummary = '2. Net Amount will be same.';
            this.BankRefNo = '';
            this.OriginalAccountlist = [];
            this.Accountwiselist = [];
            this.EntryType = "";
            this.AccountName = undefined;
            this.Department = "";
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            // this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonreset)
            // .subscribe((data: any) => {                         
            //     this._toasterService.toast('info', 'success', "Clear all data");
            //     this.loaderService.display(false);
            this._router.navigate(['/accounts/OldEntry/OEBankReceipt/Add/ ']);
            this.OurBank = this.dfltourbank;
            //  });                    
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    BankReceiptOEComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        //this.AccountName=undefined;
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.Item = undefined;
        ///this.Department="";
        //this.EntryType="";
        this.txtchild = "Add";
        this.BillNo = "";
        this.ACC_BANKDTLS_ID = "0";
        this.disable_BillNo = false;
        this.disable_EntryType = false;
        this.disable_cmdadd = false;
    };
    BankReceiptOEComponent.prototype.EntryTypeChg = function (entrytypeval) {
        if (entrytypeval == "AD") {
            this.Deduction = "";
            this.disable_deduction = true;
        }
        else {
            this.disable_deduction = false;
        }
        if (entrytypeval == "PE") {
            this.BillNo = "";
            this.Amount = "";
        }
        if (entrytypeval == "AB") {
            this.BillNo = "";
        }
    };
    BankReceiptOEComponent.prototype.showrules = function (chktype) {
        if (chktype == 'R') {
            if (this.chkrules == 'N') {
                this.chkrules = "Y";
            }
            else {
                this.chkrules = "N";
            }
        }
        else if (chktype == 'OA') {
            if (this.chkoriginactdtl == false) {
                this.chkoriginactdtl = true;
            }
            else {
                this.chkoriginactdtl = false;
            }
        }
        else if (chktype == 'A') {
            if (this.chkactwisedtl == false) {
                this.chkactwisedtl = true;
            }
            else {
                this.chkactwisedtl = false;
            }
        }
    };
    BankReceiptOEComponent.prototype.listbillpopup = function (entrytypeval) {
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
    BankReceiptOEComponent.prototype.popup_listbill = function () {
        var _this = this;
        if (this.newArray == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Bill!');
            return false;
        }
        var str = '';
        for (var i = 0, len = this.newArray.length; i < len; i++) {
            str += this.newArray[i].BILLNO + ' |' + this.newArray[i].JOBNO + '|' + this.newArray[i].AMOUNT + '|' + this.newArray[i].DEDUCTION + '|' + this.newArray[i].NARRATION + '|' + this.newArray[i].ACCOUNT_NAME + '|' + this.newArray[i].ISJOBREPORT + ";";
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
            _this.loaderService.display(false);
        });
        this.newArray = [];
        this.close();
    };
    BankReceiptOEComponent.prototype.close = function () {
        this.showModal_ListBill = false;
    };
    BankReceiptOEComponent.prototype.getCheckboxValues = function (event, invno, jobno, amt, ded, narration, acctname) {
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
                DEDUCTION: ded,
                NARRATION: narration,
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
    BankReceiptOEComponent.prototype.ValidateJobNo = function (jbno) {
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
    BankReceiptOEComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    BankReceiptOEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./bankreceipt-IUOld.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], BankReceiptOEComponent);
    return BankReceiptOEComponent;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEBankReceipt/bankreceiptOE.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEBankReceipt/bankreceiptOE.module.ts ***!
  \*************************************************************************/
/*! exports provided: BankReceiptOEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptOEModule", function() { return BankReceiptOEModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _bankreceiptOE_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bankreceiptOE.routing */ "./src/app/accounts/OldEntry/OEBankReceipt/bankreceiptOE.routing.ts");
/* harmony import */ var _bankreceipt_IUOld_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bankreceipt-IUOld.component */ "./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SharedModule } from '../../../shared/shared.module';


;
///import {BankReceiptModule} from '../BankRecpt/bankrecpt.module';
var BankReceiptOEModule = /** @class */ (function () {
    function BankReceiptOEModule() {
    }
    BankReceiptOEModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_bankreceiptOE_routing__WEBPACK_IMPORTED_MODULE_6__["BankReceiptOERoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _bankreceipt_IUOld_component__WEBPACK_IMPORTED_MODULE_7__["BankReceiptOEComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], BankReceiptOEModule);
    return BankReceiptOEModule;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEBankReceipt/bankreceiptOE.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEBankReceipt/bankreceiptOE.routing.ts ***!
  \**************************************************************************/
/*! exports provided: BankReceiptOERoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptOERoutingModule", function() { return BankReceiptOERoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bankreceipt_IUOld_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bankreceipt-IUOld.component */ "./src/app/accounts/OldEntry/OEBankReceipt/bankreceipt-IUOld.component.ts");
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
            title: ' BP'
        },
        children: [
            { path: 'Add/:EntryNo', component: _bankreceipt_IUOld_component__WEBPACK_IMPORTED_MODULE_2__["BankReceiptOEComponent"], data: { title: 'Add' } },
        ]
    }
];
var BankReceiptOERoutingModule = /** @class */ (function () {
    function BankReceiptOERoutingModule() {
    }
    BankReceiptOERoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BankReceiptOERoutingModule);
    return BankReceiptOERoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=OEBankReceipt-bankreceiptOE-module.js.map