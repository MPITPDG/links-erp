(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OEBankPayment-bankpaymentOE-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkrules=='N') ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('R')\"></i>  \r\n                    <b> Rules for Old Entry </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkrules=='Y'\">\r\n                <td colspan=\"4\">\r\n                    <table>\r\n                        <td>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">1. Main General Details and Cheque Details is non-editable.</span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\"  style=\"font-weight:lighter ;color: red;\" >{{lblNetSummary}}</span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">3. Accounts and Account's Net Total (Amount-Deduction) should be same. </span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">4. Entry wise: Item, Entry Type, Department, Bill No., Job No., Amount, Deduction, Narration are editable.</span>\r\n                            </tr>\r\n                        </td>\r\n                    </table>\r\n                 </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <b> General Details </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span  class=\"col-form-span-label\"><b>Entry No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                     <td >\r\n                    <table style=\"width:220px ;\" >\r\n                        <tbody  style=\"border: none;\">\r\n                        <tr>\r\n                               <td >  <input [(ngModel)]=\"EntryNo\" type=\"text\"  [disabled]='disableentryno' class=\"form-control width120\" maxlength=\"40\" ></td>\r\n                                <td *ngIf=\"showhidebtn==false\"> <button type=\"submit\" (click)=\"ShowoldData(EntryNo)\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Search</span></button> </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    </table>\r\n           \r\n                </td>\r\n                 <td ><span class=\"col-form-span-label\"><b>Entry Date</b> </span>  </td>\r\n                 <td>\r\n                    <input [(ngModel)]=\"EntryDate\" disabled=\"disabled\" [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">  <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > </td>\r\n             </tr>\r\n             <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Payment Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Payment Mode</b> </span></td>\r\n                <td  style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"ChqType\" (change)=\"fnchequeType()\" >\r\n                        <option value=\"CHQ\" > CHEQUE</option>\r\n                        <option value=\"Y\">NOT OVER</option>\r\n                        <option value=\"PO\">PAY ORDER</option>\r\n                        <option value=\"NEFT\">NEFT</option>\r\n                        <option value=\"RTGS\">RTGS</option>\r\n                          </select>\r\n            </td>\r\n                 <!-- <td colspan=\"2\"><span style=\"color: red;\">\r\n                    Normal Cheque Print\r\n                </span></td> -->\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-error\">{{chequelabel}}</span>\r\n                </td>\r\n                 </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Cheque No.</b> </span></td>\r\n                <td  > \r\n                       <input [(ngModel)]=\"ChequeNo\" disabled=\"disabled\"  [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n              \r\n               <!-- <button  style=\"background-color:chocolate;text-decoration-color: whitesmoke;\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"fnChqValidate();\"> Status</span></button> -->\r\n                     </td>\r\n                       <td ><span class=\"col-form-span-label\"><b>Cheque Date</b> </span>  </td>\r\n                         <td>\r\n                        <input [(ngModel)]=\"ChequeDate\" disabled=\"disabled\" [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n                    </td>\r\n            </tr>\r\n               <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Our Bank</b> </span></td>\r\n                <td colspan=\"3\">\r\n                <select class=\"form-control width350\" disabled=\"disabled\" [(ngModel)]=\"OurBank\" (change)=\"GetOurBankName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of OurBankList\"  value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\r\n\r\n                </select>\r\n            </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Bank Name</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BankName\" disabled=\"disabled\"  type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Bank Ref. No.</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BankRefNo\" disabled=\"disabled\"  type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkoriginactdtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('OA')\"></i>  \r\n                    <b> Original Accounts Detail </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkoriginactdtl==true\">\r\n                <td colspan=\"4\" class=\"table table-bordered table-sm-new bgblue\">\r\n                    <table>\r\n                        <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"OriginalAccountlist.length>0\" >\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                    \r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                 <tbody   >\r\n                                    <tr *ngFor=\"let obj of OriginalAccountlist\">\r\n                                     \r\n                                       <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                       </div>\r\n                    </table>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkactwisedtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('A')\"></i>  \r\n                    <b> Accounts Wise Detail </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkactwisedtl==true\">\r\n                <td colspan=\"4\">\r\n                    <table class=\"table table-bordered table-sm-new bgblue\">\r\n                        <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountwiselist.length>0\" >\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount Total</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction Total</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Net Total</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                 <tbody   >\r\n                                    <tr *ngFor=\"let obj of Accountwiselist\">\r\n                                       <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.TOT_AMOUNT}}</span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.TOT_DEDUCTION}}</span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.NET_AMOUNT}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                       </div>\r\n                    </table>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Accounts Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span></td>\r\n                <td colspan=\"3\">\r\n\r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\" \r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Entry Type</b> </span></td>\r\n                <td style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" [disabled]='disableEntryType'  (change)=\"listbillpopup($event.target.value)\" [disabled]=\"disable_EntryType\" >\r\n                       \r\n                        <option value=\"0\">Please select</option>\r\n                        <option *ngFor=\"let d of EntryTypeList\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                        </select>\r\n\r\n            </td>\r\n                <td><span class=\"col-form-span-label\"><b> Department</b> </span></td>\r\n                <td>\r\n                 <select class=\"form-control width150\"  [(ngModel)]=\"Department\" (change)=\"GetDepartmentName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of Departmentlist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n\r\n                </select>\r\n\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Bill No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BillNo\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]=\"disable_BillNo\" (change)=\"fnBillNoChk()\" class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Job No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\" (change)=\"FillDepartment()\"  class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Amount\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]='toggledebit' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Deduction\" [OnlyNumber]=\"true\" type=\"text\"  [disabled]='disable_deduction'   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ShortNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td *ngIf=\"showhidebtn==true\" colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]=\"disable_cmdadd\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\" [disabled]=\"disable_cmdcancel\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    <!-- <button class=\"btn btn-sm btn-danger\" type=\"List\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> List</span></button> -->\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Net Total</b> </span></td>\r\n                <td colspan=\"3\" >  <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalDeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n\r\n       <tr>\r\n        <td colspan=\"4\">\r\n        <!-- <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                 <td colspan=\"4\" > style=\"width:615px;\" -->\r\n                    <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                        <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\" >\r\n                            <thead>\r\n                                <tr class=\"bakgrdliteBlue\">\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\" ></th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                </tr>\r\n                            </thead>\r\n                             <tbody   >\r\n                                <tr *ngFor=\"let obj of Accountlist\">\r\n                                    <td class=\"centerlabel\">\r\n                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                        &nbsp;\r\n                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.ACC_BANKDTLS_ID)\"></i>\r\n                                    </td>\r\n                                   <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                   <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                   </div>\r\n                 <!-- </td>\r\n            </tr>\r\n\r\n        </table>   -->\r\n\r\n    </td>\r\n</tr>\r\n<tr *ngIf=\"showhidebtn==true\">\r\n    <td colspan=\"4\"  class=\"centerlabel\">\r\n        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n        <button class=\"btn btn-sm btn-danger\" type=\"reset\" (click)=\"Reset();\" ><span class=\"col-form-span-label\" ><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n    </td>\r\n</tr>\r\n </table>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.ts ***!
  \********************************************************************************/
/*! exports provided: BankPaymentOEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentOEComponent", function() { return BankPaymentOEComponent; });
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








var BankPaymentOEComponent = /** @class */ (function () {
    function BankPaymentOEComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
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
        this.Header = "BANK PAYMENT - UPDATE OLD ENTRY";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.Accountlist = [];
        this.Accountwiselist = [];
        this.ACCTNAME = "";
        this.STATUS = "BP";
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
        this.toggledebit = false;
        this.showModal_ListBill = false;
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
        this.disableEntryType = false;
        this.ListBill = [];
        this.newArray = [];
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
    BankPaymentOEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ChequeDate = this._dataService.getCurrentdate();
        // this._activatedRoute.params.subscribe(params => {
        //     this.EntryNo = params["EntryNo"];                 
        //     })
        this.EntryDate = new Date();
        this.EntryDate = this._dataService.datechnge(this.EntryDate);
        this.ChequeDate = new Date();
        this.ChequeDate = this._dataService.datechnge(this.ChequeDate);
        var jsonparam = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "BP" };
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
    BankPaymentOEComponent.prototype.ShowoldData = function () {
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
                _this.fnchequeType();
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
    BankPaymentOEComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text; //.split("|")[1];
    };
    BankPaymentOEComponent.prototype.GetOurBankName = function (event) {
        this.OurBankName = event.target.options[event.target.options.selectedIndex].text;
    };
    BankPaymentOEComponent.prototype.GetActName = function (Acctcode) {
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    BankPaymentOEComponent.prototype.FillDepartment = function () {
        var _this = this;
        this.codelistDept = this.AllDepartmentlist.filter(function (code) { return code.CODE === (_this.JobNo.substr(0, 2) + _this.JobNo.substr(2, 3) + _this.JobNo.substr(6, 1)); });
        this.Departmentlist = this.AllDepartmentlist.filter(function (code) { return code.CODE === (_this.JobNo.substr(0, 2) + _this.JobNo.substr(2, 3) + _this.JobNo.substr(6, 1)); });
        this.Department = this.codelistDept[0].VALUEFIELD;
        this.DepartmentName = this.codelistDept[0].TEXTFIELD;
    };
    BankPaymentOEComponent.prototype.fnchequeType = function () {
        if (this.ChqType == "CHQ") {
            this.chequelabel = "Normal cheque print";
        }
        if (this.ChqType == "Y") {
            this.chequelabel = "Cheque will print but amt is Not Over !";
        }
        if (this.ChqType == "PO") {
            this.chequelabel = "Cheque print with Payee Name : Yourself - PO - PayeeName!";
        }
        if (this.ChqType == "DD") {
            this.chequelabel = "Cheque print with Payee Name : Yourself - DD - PayeeName!";
        }
        if (this.ChqType == "NEFT") {
            this.chequelabel = "Cheque Print Only when amt in between 1 Lakh and 1,99,999.99!";
        }
        if (this.ChqType == "RTGS") {
            this.chequelabel = "Cheque Print Only when amt is Greater or Equal to 2 Lakh !";
        }
    };
    BankPaymentOEComponent.prototype.GetBankName = function () {
        var _this = this;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.AllOurBankList = this.OurBankList.filter(function (code) { return code.ACCTCODENAME === _this.OurBank; });
        this.OurBankName = this.AllOurBankList[0].ACCTNAME;
    };
    BankPaymentOEComponent.prototype.Addchildrcrd = function () {
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
            if (this.Department == "" || this.Department == undefined || this.Department == "0") {
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
        else {
            if (this.JobNo.length != 15 && this.JobNo.length > 0) {
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
    BankPaymentOEComponent.prototype.Editchildrecd = function (id) {
        if (this.CompChequeFlag != "1") {
            var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
            this.ID = filterData.ID;
            this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
            this.GetActName(this.AccountName);
            //this.ItemList = this.Allitemlist.filter((code: any) => code.ACCTCODE === this.AccountName.split("|")[0]);
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
            this.Departmentlist = this.AllDepartmentlist;
            // this.Departmentlist= this.AllDepartmentlist.filter((code: any) => code.CODE === (this.JobNo.substr(0, 2)  + this.JobNo.substr(2, 3)  + this.JobNo.substr(6, 1)) ) 
            this.DepartmentName = filterData.DEPARTMENT;
            this.Department = filterData.DEPTID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
            if (id != "0" && this.EntryType == "AB1") {
                this.disableEntryType = true;
            }
        }
        else {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
            return false;
        }
    };
    BankPaymentOEComponent.prototype.deletechildrecd = function (id, brdtlsid) {
        var _this = this;
        if (this.CompChequeFlag != "1") {
            if (this.ISNOTEDITABLE == "1") {
                this._toasterService.toast("warning", "warning", "You cannot delete this record!");
            }
            else {
                if (confirm('Are you sure want to delete the record ?')) {
                    this.loaderService.display(true);
                    var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_BANKDTLS_ID: brdtlsid };
                    this._dataService.getData("Accounts/ACC_BRBPCRCPCE_TMP_DEL", jsondelete)
                        .subscribe(function (data) {
                        if (data.Table1 != undefined) {
                            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                                _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUSTEXT);
                                _this.Accountlist = data.Table;
                                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                                _this.NetTotal = data.Table1[0].NETTOTAL;
                                _this.loaderService.display(false);
                            }
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
        }
        else {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
            return false;
        }
    };
    BankPaymentOEComponent.prototype.Add_Main = function () {
        if (this.IsOldEntry == "1") {
            if (this.Validate_OLD_NEW_NETAMT_IU() == false) {
                return false;
            }
        }
        if (this.CompChequeFlag != "1") {
            if (this.EntryDate == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter Entry Date !');
                return false;
            }
            if (this.ChqType == "" || this.ChqType == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select NOT OVER / PAY ORDER / DD / NEFT / RTGS ! ');
                return false;
            }
            if ((this.ChqType == 'NEFT') && (this.NetTotal >= "200000")) {
                this._toasterService.toast('warning', 'warning', 'NEFT Amount can be only between Rs.1 lakh to  1,99,999.99 , \n For Printing online Cheque !');
                return false;
            }
            if (this.ChqType != "" && this.EntryNo != ' ') {
                var tot = parseFloat(this.TotalAmount);
                var ded = parseFloat(this.TotalDeduction);
                var newtot = (tot - ded);
                // this.NewnetAmt=(newtot).toString(2);
                if (newtot > (parseFloat(this.OldNetTotal))) {
                    this._toasterService.toast('warning', 'warning', 'Original Net Total =' + this.OldNetTotal + ' \nNew Net Total =' + this.NewnetAmt + ' \nBankPayment Net total should  be Less Than  or equal to Original BankPayment Net Total\n');
                    return false;
                }
            }
            // if (this.ChqType != "PO"  ) {
            //     if (this.ChequeNo == "") {
            //         var answer = window.confirm("ChequeNo is Blank - Please Check \n Click Yes to Accept and No To Retry");
            //         if (answer==false) {
            //             return false;
            //         }else {this.confirmsave="Y";}
            //     } 
            // }                
            if (this.ChqType == "Y") {
                this.NOTOVERFLAG = this.ChqType;
            }
            else {
                this.NOTOVERFLAG = "";
            }
            if (this.OurBank == "" || this.OurBank == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Our Bank !');
                return false;
            }
            // if(this.BankRefNo=="" || this.BankRefNo==undefined){
            //     this._toasterService.toast('warning', 'warning', 'Please enter Bank Ref.No. !');
            //     return false;
            // }  
            if (parseFloat(this.TotalAmount) < parseFloat(this.TotalDeduction)) {
                this._toasterService.toast('warning', 'warning', 'Total Deduction cannot be greater than Total Amount !');
                return false;
            }
            if (parseFloat(this.TotalAmount) <= 0) {
                this._toasterService.toast('warning', 'warning', 'Please enter Account Details !');
                return false;
            }
            // if (this.ChqType != "PO"  ) {
            //     if (this.ChequeNo == "") {
            //         var answer = window.confirm("ChequeNo is Blank - Please Check \n Click Yes to Accept and No To Retry");
            //         if (answer==false) {
            //             return false;
            //         }else {this.confirmsave="Y";}
            //     } 
            // }                     
            this.SaveUpdate();
        }
        else {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
            return false;
        }
    };
    BankPaymentOEComponent.prototype.SaveUpdate = function () {
        var _this = this;
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
            CHEQUETYPE: this.ChqType,
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
                _this.AccountName = undefined;
                _this.Department = "";
                _this.EntryType = "";
                _this.showhidebtn = false;
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    BankPaymentOEComponent.prototype.ResetMain = function () {
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
        //this.OurBank = "";
        this.BankName = '';
        this.Narration = '';
        this.BankRefNo = '';
        this.lblNetSummary = '2. Net Amount will be same.';
        this.OriginalAccountlist = [];
        this.Accountwiselist = [];
        this._router.navigate(["/accounts/OldEntry/OEBankPaymnt/Add/ "]);
    };
    BankPaymentOEComponent.prototype.Resetchildrcrd = function () {
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
    BankPaymentOEComponent.prototype.Print = function (entryno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'BP' + '/' + entryno + '/', "CashBook BankPayment Print", toolbar);
    };
    BankPaymentOEComponent.prototype.showrules = function (chktype) {
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
    BankPaymentOEComponent.prototype.Validate_BRBPCRCPCE_OldEntryNo = function () {
        if (this.EntryNo.substring(11, 12) != '2') {
            alert("You have entered Entryno. is not Bank Payment No. !!");
            return false;
        }
        if (this.EntryNo.substring(2, 5) != this._loginService.getLogin()[0].CITYCODE1) {
            alert("You have entered Entryno. is not for current city !!");
            return false;
        }
    };
    BankPaymentOEComponent.prototype.fnBillNoChk = function () {
        var _this = this;
        if (this.BillNo.length != 0) {
            if (this.EntryType == "PE" || this.EntryType == "AB") {
                if (this.AccountName.split("|")[0] == "0") {
                    this._toasterService.toast("warning", "warning", 'Please select Acocunt Name.!');
                    return false;
                }
                if (this._loginService.getLogin()[0].CMPCODE == "20" && (this._loginService.getLogin()[0].CITYCODE1 == "201" || this._loginService.getLogin()[0].CITYCODE1 == "202")) {
                    if (this.BillNo.length != 10) {
                        this._toasterService.toast("warning", "warning", 'Bill No. should be 10 Digit.!');
                        return false;
                    }
                }
                else if (this.BillNo.length != 15) {
                    this._toasterService.toast("warning", "warning", 'Bill No. should be 15 Digit.!');
                    return false;
                }
                //this.disable_BillNo=true;
                this.disable_EntryType = true;
                // this.disable_cmdadd=true;
                // this.disable_cmdcancel=true;  
            }
        }
        var jsonbill = {
            BILLNO: this.BillNo,
            ACC_CODE: this.AccountName.split("|")[0],
            ENTRYTYPE: this.EntryType,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        var str = '';
        this._dataService.getData("Accounts/ACC_CASHBOOK_BILLNO_VALIDATION", jsonbill)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split("#")[0] == "104") {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUS.split("#")[1]);
                _this.BillNo = "";
                _this.Amount = "";
                _this.disable_cmdadd = false;
                return false;
            }
            else if (data.Table[0].STATUS.split("#")[0] == "100") {
                if (_this.EntryType == "PE") {
                    _this.Amount = data.Table[0].STATUS.split("#")[2];
                    _this.Deduction = data.Table[0].STATUS.split("#")[3];
                    _this.disable_BillNo = true;
                    _this.disable_EntryType = true;
                    _this.disable_cmdadd = false;
                    return false;
                }
            }
        });
    };
    BankPaymentOEComponent.prototype.listbillpopup = function (entrytypeval) {
        var _this = this;
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
                    SUPPLIER: this.AccountName.split("|")[0],
                    FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                    FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
                    CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                    CITYCODE: this._loginService.getLogin()[0].CITYCODE
                };
                this._dataService.getData("Accounts/ACC_PAYMENT_POPULATE_SUPPLIERBILL", jsoninvdtl)
                    .subscribe(function (data) {
                    if (data.Table.length > "0") {
                        _this.ListBill = data.Table;
                        console.log(_this.ListBill);
                        _this.client = data.Table1[0].SUPPLIER;
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", "No record found");
                        _this.client = data.Table1[0].SUPPLIER;
                        _this.loaderService.display(false);
                    }
                });
            }
        }
    };
    BankPaymentOEComponent.prototype.Validate_OLD_NEW_NETAMT_IU = function () {
        this.NEW_NETAMOUNT = this.TotalAmount;
        this.NEW_DEDUCTION = this.TotalDeduction;
        this.NEWNETTOTAMT = this.NEW_NETAMOUNT - this.NEW_DEDUCTION;
        this.OLDNETTOTAMT = parseFloat(this.OLDNETTOTAMT).toFixed(2);
        if ((this.NEWNETTOTAMT) != (this.OLDNETTOTAMT)) {
            alert('Failed to Submit!\n\nOriginal Net Total [' + this.OLDNETTOTAMT + '] (i.e., Total Amount [' + this.OLD_NETAMOUNT + '] less Total Deduction [' + this.OLD_DEDUCTION + ']) is not equal to Current Net Total [' + this.NEWNETTOTAMT + '] (i.e., Total Amount [' + this.NEW_NETAMOUNT + '] less total Deduction [' + this.NEW_DEDUCTION + '])\n');
            return false;
        }
    };
    BankPaymentOEComponent.prototype.Reset = function () {
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.EntryNo = " ";
            this.disableentryno = false;
            this.EntryDate = '';
            this.EntryDate = new Date();
            this.EntryDate = this._dataService.datechnge(this.EntryDate);
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
            this.fnchequeType();
            this.Accountlist = [];
            this.showhidebtn = false;
            this.lblNetSummary = '2. Net Amount will be same.';
            this.BankRefNo = '';
            this.OriginalAccountlist = [];
            this.Accountwiselist = [];
            this.EntryType = "";
            this.Department = "";
            this.AccountName = undefined;
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            // this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonreset)
            // .subscribe((data: any) => {                         
            //     this._toasterService.toast('info', 'success', "Clear all data");
            //     this.loaderService.display(false);
            this._router.navigate(['/accounts/OldEntry/BankPaymnt/Add/ ']);
            this.OurBank = this.dfltourbank;
            //  });                    
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    BankPaymentOEComponent.prototype.ValidateJobNo = function (jbno) {
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
    BankPaymentOEComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    BankPaymentOEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./bankpayment-IUOld.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], BankPaymentOEComponent);
    return BankPaymentOEComponent;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEBankPayment/bankpaymentOE.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEBankPayment/bankpaymentOE.module.ts ***!
  \*************************************************************************/
/*! exports provided: BankPaymentOEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentOEModule", function() { return BankPaymentOEModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _bankpaymentOE_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bankpaymentOE.routing */ "./src/app/accounts/OldEntry/OEBankPayment/bankpaymentOE.routing.ts");
/* harmony import */ var _bankpayment_IUOld_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bankpayment-IUOld.component */ "./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.ts");
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
var BankPaymentOEModule = /** @class */ (function () {
    function BankPaymentOEModule() {
    }
    BankPaymentOEModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_bankpaymentOE_routing__WEBPACK_IMPORTED_MODULE_6__["BankPaymentOERoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _bankpayment_IUOld_component__WEBPACK_IMPORTED_MODULE_7__["BankPaymentOEComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], BankPaymentOEModule);
    return BankPaymentOEModule;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEBankPayment/bankpaymentOE.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEBankPayment/bankpaymentOE.routing.ts ***!
  \**************************************************************************/
/*! exports provided: BankPaymentOERoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentOERoutingModule", function() { return BankPaymentOERoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bankpayment_IUOld_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bankpayment-IUOld.component */ "./src/app/accounts/OldEntry/OEBankPayment/bankpayment-IUOld.component.ts");
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
            { path: 'Add/:EntryNo', component: _bankpayment_IUOld_component__WEBPACK_IMPORTED_MODULE_2__["BankPaymentOEComponent"], data: { title: 'Add' } },
        ]
    }
];
var BankPaymentOERoutingModule = /** @class */ (function () {
    function BankPaymentOERoutingModule() {
    }
    BankPaymentOERoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BankPaymentOERoutingModule);
    return BankPaymentOERoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=OEBankPayment-bankpaymentOE-module.js.map