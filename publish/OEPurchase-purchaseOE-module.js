(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OEPurchase-purchaseOE-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>PURCHASE UPDATE OLD ENTRY</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                        <i [ngClass]=\"(chkrules=='N') ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('R')\"></i>  \r\n                        <b> Rules for Old Entry </b>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"chkrules=='Y'\">\r\n                    <td colspan=\"4\">\r\n                        <table>\r\n                            <td>\r\n                                <tr>\r\n                                    <span  class=\"col-form-span-label\">1. Main General Details and Cheque Details is non-editable.</span>\r\n                                </tr>\r\n                                <tr>\r\n                                    <span  class=\"col-form-span-label\"  style=\"font-weight:lighter ;color: red;\" >{{lblNetSummary}}</span>\r\n                                </tr>\r\n                                <tr>\r\n                                    <span  class=\"col-form-span-label\">3. Accounts and Account's Net Total (Amount-Deduction) should be same. </span>\r\n                                </tr>\r\n                                <tr>\r\n                                    <span  class=\"col-form-span-label\">4. Entry wise: Item, Entry Type, Department, Bill No., Job No., Amount, Deduction, Narration are editable.</span>\r\n                                </tr>\r\n                            </td>\r\n                        </table>\r\n                     </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b> General Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Purchase No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <!-- <td> <input [(ngModel)]=\"PurchaseNo\" type=\"text\" class=\"form-control width150\" maxlength=\"40\" \r\n                            [disabled]=\"true\"> </td> -->\r\n                            <td >\r\n                                <table >\r\n                                    <tbody  style=\"border: none;\">\r\n                                    <tr>\r\n                                           <td >  <input [(ngModel)]=\"PurchaseNo\" type=\"text\"  [disabled]='disablePurchaseno' class=\"form-control width150\" maxlength=\"40\" ></td>\r\n                                           <td *ngIf=\"showhidebtn==false\"> <button type=\"submit\" (click)=\"ShowoldData(PurchaseNo)\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Search</span></button> </td> \r\n                                    </tr>\r\n                                </tbody>\r\n                                </table>\r\n                       \r\n                            </td>        \r\n                    <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                \r\n                    <td>\r\n                        <input [(ngModel)]=\"PurchaseDate\" disabled=\"disabled\" [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                    <td colspan=\"3\"> <input [(ngModel)]=\"Narration\" type=\"text\" aria-multiline=\"true\" class=\"form-control width500\"\r\n                        [maxlength]=\"4000\" > </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>Supplier Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td colspan=\"3\">\r\n                      \r\n                        <ng-select [items]=\"supplierlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                            [(ngModel)]=\"suppliername\" (ngModelChange)=\"GetSupplierName($event)\" class=\"custom \"\r\n                            placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td colspan=\"3\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"billaddress\">\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of billaddressfilter\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}\r\n                            </option>\r\n                        </select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>Inv No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input [(ngModel)]=\"InvNo\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Inv Date</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td style=\"text-align: left;\">\r\n                        <my-date-picker name=\"InvDate\" [options]=\"myDatePickerOptions\" class=\"width170\"\r\n                            [(ngModel)]=\"InvDate\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>Bill Received On</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td style=\"text-align: left;\"> \r\n                        <my-date-picker name=\"BillReceive\" [options]=\"myDatePickerOptions\" class=\"width170\"\r\n                            [(ngModel)]=\"BillReceive\"></my-date-picker>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Due Date</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td style=\"text-align: left;\">\r\n                        <my-date-picker name=\"DueDate\" [options]=\"myDatePickerOptions\" class=\"form-control width170\"\r\n                            [(ngModel)]=\"DueDate\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"2\">\r\n                        <b> Passing Details</b>\r\n                    </td>\r\n                    <td class=\"col-form-span-heading\" colspan=\"2\">\r\n\r\n                        <div style=\"display: flex;\">\r\n                            <span class=\"col-form-span-label\"><b>Passed&nbsp;&nbsp;</b> </span>\r\n                            <span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"IsPassed\"\r\n                                    (change)=\"changeEvent($event)\" /> </span>\r\n                        </div>\r\n                    </td>\r\n                    <!-- <td >\r\n                        <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"IsPassed\"   class=\"form-control width20\" /> </span>\r\n                     </td>  -->\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Passed By</b> </span></td>\r\n                    <td>\r\n                        <select class=\"form-control width150\" [(ngModel)]=\"passedby\" [disabled]='togglepassedby'>\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of PassedBylist\" value={{d.CMPID}}>{{d.CMP_USERNAME}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Passed Amount</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input [(ngModel)]=\"PassedAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglepamount'\r\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Invoice Amount</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input [(ngModel)]=\"InvoiceAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='toggleinvamount'\r\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Voucher No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input [(ngModel)]=\"VoucherNo\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglevno'\r\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                </tr>\r\n                <tr class=\"trheader\">\r\n                    <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                        <i [ngClass]=\"(chkoriginactdtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('OA')\"></i>  \r\n                        <b> Original Accounts Detail </b>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"chkoriginactdtl==true\">\r\n                    <td colspan=\"4\" class=\"table table-bordered table-sm-new bgblue\">\r\n                        <table>\r\n                            <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                                <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"OriginalAccountlist.length>0\" >\r\n                                    <thead>\r\n                                        <tr class=\"bakgrdliteBlue\">\r\n                                        \r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                     <tbody   >\r\n                                        <tr *ngFor=\"let obj of OriginalAccountlist\">\r\n                                         \r\n                                           <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                           <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                           </div>\r\n                        </table>\r\n    \r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trheader\">\r\n                    <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                        <i [ngClass]=\"(chkactwisedtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('A')\"></i>  \r\n                        <b> Accounts Wise Detail </b>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"chkactwisedtl==true\">\r\n                    <td colspan=\"4\">\r\n                        <table class=\"table table-bordered table-sm-new bgblue\">\r\n                            <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                                <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountwiselist.length>0\" >\r\n                                    <thead>\r\n                                        <tr class=\"bakgrdliteBlue\">\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount Total</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction Total</th>\r\n                                            <th  class=\"col-form-span-label font-weight-bold headerwhite\">Net Total</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                     <tbody   >\r\n                                        <tr *ngFor=\"let obj of Accountwiselist\">\r\n                                           <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                           <td><span class=\"col-form-span-label\">{{obj.TOT_AMOUNT}}</span></td>\r\n                                           <td><span class=\"col-form-span-label\">{{obj.TOT_DEDUCTION}}</span></td>\r\n                                           <td><span class=\"col-form-span-label\">{{obj.NET_AMOUNT}}</span></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                           </div>\r\n                        </table>\r\n    \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>Accounts Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                    <td colspan=\"3\">\r\n                            <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                            (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName\" class=\"custom \"\r\n                            placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Item</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                    <td colspan=\"3\">\r\n                        <ng-select [items]=\"Itemslist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                            class=\"custom \" placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <td> <input [(ngModel)]=\"Amount\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"Deduction\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <td> <input [(ngModel)]=\"JobNo\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"actpassedamount\" type=\"text\" OnlyNumber=\"true\"\r\n                            class=\"form-control width150\" maxlength=\"40\">\r\n                    </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                    <td colspan=\"3\">\r\n                        <input [(ngModel)]=\"ActNarration\" type=\"text\" class=\"form-control width500\" [maxlength]=\"30\" >\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr  *ngIf=\"showhidebtn==true\">\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\r\n                                {{txtchild}}</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n              \r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"NetAmt\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td colspan=\"2\"></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"NetAmount\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\r\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"Netdeduction\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\r\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"4\">\r\n                        <div class=\"row xyscroll\">\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\">\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                        <th class=\"col-form-span-label\"></th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Pass Amt</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"Accountlist.length>0\">\r\n                                    <tr *ngFor=\"let obj of Accountlist\">\r\n                                        <td class=\"centerlabel\">\r\n                                            <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\"></i>\r\n                                            &nbsp;\r\n                                            <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID)\"></i>\r\n                                        </td>\r\n                                        <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\"> </span>\r\n                                        </td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.SRPIPASSAMOUNT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"showhidebtn==true\">\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"supplier_validation()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.ts ***!
  \**************************************************************************/
/*! exports provided: PurchaseOEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOEComponent", function() { return PurchaseOEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PurchaseOEComponent = /** @class */ (function () {
    function PurchaseOEComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.chkrules = "N";
        this.chkoriginactdtl = false;
        this.chkactwisedtl = false;
        this.showhidebtn = false;
        this.disablePurchaseno = false;
        this.Accountwiselist = [];
        this.OriginalAccountlist = [];
        this.Allitemlist = [];
        this.supplierlist = [];
        this.codelistActt = [];
        this.PassedBylist = [];
        this.billaddress = "";
        this.InvNo = "";
        this.InvDate = "";
        this.BillReceive = "";
        this.DueDate = "";
        this.passedby = "";
        this.IsPassed = false;
        this.PurchaseNo = "";
        this.PurchaseDate = "";
        this.Narration = "";
        this.PassedAmount = "";
        this.InvoiceAmount = "";
        this.VoucherNo = "";
        this.AccountNameList = [];
        this.ItemList = [];
        this.Amount = "";
        this.Deduction = "";
        this.JobNo = "";
        this.actpassedamount = "";
        this.ActNarration = "";
        this.NetAmount = "0";
        this.Netdeduction = "0";
        this.text = "Submit";
        this.txtchild = "Add";
        this.ID = "0";
        this.ENTRYNO = "0";
        this.CLIENT = "";
        this.ISNOTEDITABLE = "0";
        this.ACCTNAME = "";
        this.ACCBANKDTLSID = "0";
        this.STATUS = "PI";
        this.Accountlist = [];
        this.billaddressList = [];
        this.billaddressfilter = [];
        this.Itemslist = [];
        this.NetAmt = "0";
        this.Type = "";
        this.lblNetSummary = "2.Net Amount will be same.";
        this.togglevno = true;
        this.togglepassedby = true;
        this.togglepamount = true;
        this.toggleinvamount = true;
        this.showModal_MAWB = false;
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
    PurchaseOEComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jsonparam = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this.loaderService.display(true);
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.supplierlist = data.Table1;
            _this.PassedBylist = data.Table2;
            _this.Allitemlist = data.Table3;
            _this.billaddressList = data.Table4;
        });
        this.loaderService.display(false);
    };
    PurchaseOEComponent.prototype.showrules = function (chktype) {
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
    PurchaseOEComponent.prototype.ShowoldData = function () {
        var _this = this;
        if (this.Validate_PURCHASE_OldEntryNo() == false) {
            return false;
        }
        else {
            var jsonview = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.PurchaseNo,
                VGUID: this._loginService.getLogin()[0].GUID,
                STATUS: "PI",
                CMPID: this._loginService.getLogin()[0].CMPID,
            };
            this._dataService.getData("Accounts/ACC_PURCHASE_VIEW_OLD", jsonview)
                .subscribe(function (data) {
                _this.PurchaseNo = data.Table2[0].PUR_CODE;
                _this.PurchaseDate = data.Table2[0].PUR_DATE;
                _this.suppliername = data.Table2[0].PUR_SUPPLIER;
                _this.GetSupplierName(_this.suppliername);
                _this.InvNo = data.Table2[0].PUR_INVNO;
                _this.InvDate = (data.Table2[0].PUR_SUPINVDATE != "") ? _this._dataService.stringdttoArry(data.Table2[0].PUR_SUPINVDATE) : "";
                _this.BillReceive = (data.Table2[0].PUR_SUPBILLDATE != "") ? _this._dataService.stringdttoArry(data.Table2[0].PUR_SUPBILLDATE) : "";
                _this.DueDate = (data.Table2[0].PUR_DUEDT != "") ? _this._dataService.stringdttoArry(data.Table2[0].PUR_DUEDT) : "";
                _this.IsPassed = (data.Table2[0].PASS == 'Y') ? true : false;
                _this.passedby = data.Table2[0].PASSEDBY;
                _this.VoucherNo = data.Table2[0].VOUCHERNO;
                _this.PassedAmount = data.Table2[0].PASSEDAMOUNT;
                _this.InvoiceAmount = data.Table2[0].SUPINVAMT;
                _this.Narration = data.Table2[0].REMARKS;
                _this.Accountlist = data.Table;
                _this.OriginalAccountlist = data.Table;
                _this.Accountwiselist = data.Table1;
                _this.NetAmount = data.Table3[0].TOTAMOUNT;
                _this.Netdeduction = data.Table3[0].TOTDEDUCTION;
                _this.NetAmt = data.Table3[0].NETTOTAL;
                _this.OLD_NETAMOUNT = data.Table3[0].TOTAMOUNT;
                _this.OLD_DEDUCTION = data.Table3[0].TOTDEDUCTION;
                _this.OLDNETTOTAMT = data.Table3[0].NETTOTAL;
                // this.OldNetTotal=data.Table[0].ACTUALAMOUNT;
                _this.lblNetSummary = data.Table3[0].MSG_LINE2;
                _this.chkrules = 'Y';
                _this.showhidebtn = true;
                _this.disablePurchaseno = true;
            });
        }
    };
    PurchaseOEComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.Itemslist.length > 0) {
            if (this.Item == "" || this.Item == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.suppliername == this.AccountName.split('|')[0]) {
            this._toasterService.toast('warning', 'warning', 'Supplier and Account Name Should be different .!');
            return false;
        }
        if ((this.Amount == "" || this.Amount == undefined || this.Amount == '0') && (this.Deduction == "" || this.Deduction == undefined || this.Deduction == '0')) {
            this._toasterService.toast('warning', 'warning', 'Please enter Amount or Deduction.!');
            return false;
        }
        if (parseFloat(this.Amount) > 0 && parseFloat(this.Deduction) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Amount) < 0 && parseFloat(this.Deduction) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Deduction) < 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        var clientcodeval = this.AccountName.split("|")[1];
        if (clientcodeval == 'Y') {
            if (this.JobNo.length == 0) {
                this._toasterService.toast('warning', 'warning', 'Please Enter JobNo !');
                return false;
            }
        }
        var ITEMCODEvl;
        var ITEMvl;
        var ITEMDT;
        ITEMCODEvl = (this.Item == null) ? "" : this.Item.split("|")[0];
        ITEMvl = (this.Item == null) ? "" : this.Item.split("|")[2];
        ITEMDT = (this.Item == null) ? "" : this.Item;
        var jsonchild = {
            ID: this.ID,
            ENTRYNO: this.ENTRYNO,
            CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo,
            DEDUCTION: (this.Deduction == "") ? "0" : this.Deduction,
            AMOUNT: (this.Amount == "") ? "0" : this.Amount,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            NARRATION: this.ActNarration,
            IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: ITEMCODEvl,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: ITEMvl,
            ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID,
            STATUS: this.STATUS,
            IsJobReport: this.AccountName.split("|")[1],
            ITEM_DATAVALUE: ITEMDT,
            SRPIPASSAMOUNT: (this.actpassedamount == "" || this.actpassedamount == null) ? "0" : this.actpassedamount,
            cmpid: this._loginService.getLogin()[0].CMPID
        };
        // console.log(jsonchild)
        this.loaderService.display(true);
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_IU", jsonchild)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Accountlist = data.Table;
                _this.NetAmount = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    PurchaseOEComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            this.togglevno = false;
            this.togglepassedby = false;
            this.togglepamount = false;
            this.toggleinvamount = false;
        }
        else {
            this.togglevno = true;
            this.togglepassedby = true;
            this.togglepamount = true;
            this.toggleinvamount = true;
        }
    };
    PurchaseOEComponent.prototype.GetActName = function (Acctcode) {
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        //console.log(this.codelistActt)
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        //console.log(Acctcode.split("|")[0])
        this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    PurchaseOEComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        if (filterData.IS_NOT_EDIT_ABLE == "1") {
            alert("You cannot edit this reocrd!");
            return false;
        }
        else {
            this.ID = filterData.ID;
            this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
            this.ACCTNAME = filterData.ACCOUNT_NAME;
            this.Amount = filterData.AMOUNT;
            this.Deduction = filterData.DEDUCTION;
            this.actpassedamount = filterData.SRPIPASSAMOUNT;
            this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === filterData.CLIENT; });
            this.Item = (filterData.ITEM_DATAVALUE == "") ? null : filterData.ITEM_DATAVALUE;
            this.JobNo = filterData.JOBNO;
            this.ActNarration = filterData.NARRATION;
            this.txtchild = "Update";
            this.ACCBANKDTLSID = filterData.ACC_PURCHASEDTLS_ID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
        }
    };
    PurchaseOEComponent.prototype.deletechildrecd = function (id) {
        var _this = this;
        if (this.ISNOTEDITABLE == "1") {
            alert("You cannot delete this record!");
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID };
                this._dataService.getData("Accounts/ACC_PURCHASE_TMP_DEL", jsondelete)
                    .subscribe(function (data) {
                    // console.log(data)
                    if (data.Table[0].STATUS == "100") {
                        _this.Accountlist = data.Table;
                        _this.NetAmount = data.Table1[0].TOTAMOUNT;
                        _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                        _this.NetAmt = data.Table1[0].NETTOTAL;
                        _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                        _this._toasterService.toast("warning", "warning", "Error in Deleting");
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
    PurchaseOEComponent.prototype.Validate_PURCHASE_OldEntryNo = function () {
        if (this.PurchaseNo.substring(11, 12) != '9' && this.PurchaseNo.length != 15) {
            alert("You have entered Entryno. is not of Purchase No. !!");
            return false;
        }
    };
    PurchaseOEComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.ISOLDENTRY == "1") {
            if (this.Validate_OLD_NEW_NETAMT_IU() == false) {
                return false;
            }
        }
        if (this.PurchaseDate == "" || this.PurchaseDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Purchase Date cannot be left blank!');
            return false;
        }
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        if (this.InvDate.formatted == "" || this.InvDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice Date cannot be left blank!');
            return false;
        }
        if (this._dataService.date2Comparison(this.DueDate.formatted, this.PurchaseDate.formatted) == false) {
            this._toasterService.toast('warning', 'warning', 'Due date Cannot be Less than Purchase Entry date');
            return false;
        }
        var tot_amount = this.NetAmount;
        var tot_deduction = this.Netdeduction;
        if ((parseFloat(tot_amount) + parseFloat(tot_deduction)) < 0.01) {
            this._toasterService.toast('warning', 'warning', 'Sum of Total Amount and Deduction cannot be Less Than 0.01');
            return false;
        }
        this.loaderService.display(true);
        var data;
        data = this.supplierlist.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: (this.PurchaseNo == undefined) ? "" : this.PurchaseNo,
            ENTRYDT: this.PurchaseDate,
            STATUS: this.STATUS,
            SUP_CODE: this.suppliername,
            SUP_NAME: data,
            SUP_INVNO: this.InvNo,
            SUP_INVDT: (this.InvDate) ? this.InvDate.formatted : "",
            SUP_BILLRECEIVEDDT: (this.BillReceive) ? this.BillReceive.formatted : "",
            SUP_DUEDT: (this.DueDate) ? this.DueDate.formatted : "",
            PASSFLAG: (this.IsPassed == true) ? "Y" : "",
            PASSEDBY: (this.passedby == "") ? "0" : this.passedby,
            PASSEDAMT: (this.PassedAmount == "") ? "0" : this.PassedAmount,
            INVAMT: (this.InvoiceAmount == "") ? "0" : this.InvoiceAmount,
            VOUCHERNO: (this.VoucherNo == "") ? "0" : this.VoucherNo,
            MAWBN0: "",
            FREIGHTG100235: "0",
            SURCHARGEG101468: "0",
            AIRFRTCOMMG100153: "0",
            FRTREBATEG100186: "0",
            NARRATION: this.Narration,
            ACTUALAMOUNT: this.NetAmt,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.PurchaseNo == '' || this.PurchaseNo == undefined) ? "INSERT" : "UPDATE",
            DOCUMENTG100179: "0",
            FK_SUP_ADDR_ID: (this.billaddress.split("|")[0] == "") ? "0" : this.billaddress.split("|")[0],
            AMSENSEXP_G102024: "0",
            MISCEXP_G102025: "0"
        };
        var url = "";
        if (this.PurchaseNo == ' ' || this.PurchaseNo == undefined) {
            url = "Accounts/ACC_PURCHASE_INSERT";
        }
        else {
            url = "Accounts/ACC_PURCHASE_UPDATE";
        }
        this._dataService.Common(url, jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
                _this.RestMain();
                _this.showhidebtn = false;
                _this.disablePurchaseno = false;
            }
            else {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
                _this.RestMain();
                _this.showhidebtn = false;
                _this.disablePurchaseno = false;
            }
        });
    };
    PurchaseOEComponent.prototype.Validate_OLD_NEW_NETAMT_IU = function () {
        this.NEWNETTOTAMT = this.NetAmount - this.Netdeduction;
        if ((this.NEWNETTOTAMT) != (this.OLDNETTOTAMT)) {
            alert('Failed to Submit!\n\nOriginal Net Total [' + this.OLDNETTOTAMT + '] (i.e., Total Amount [' + this.OLD_NETAMOUNT + '] less Total Deduction [' + this.OLD_DEDUCTION + ']) is not equal to Current Net Total [' + this.NEWNETTOTAMT + '] (i.e., Total Amount [' + this.NetAmount + '] less total Deduction [' + this.Netdeduction + '])\n');
            return false;
        }
    };
    PurchaseOEComponent.prototype.RestMain = function () {
        this.Resetchildrcrd();
        this.InvNo = "";
        this.InvDate = "";
        this.DueDate = "";
        this.BillReceive = "";
        this.PurchaseNo = '';
        this.PurchaseDate = '';
        this.passedby = '';
        this.PassedAmount = '';
        this.InvoiceAmount = '';
        this.suppliername = undefined;
        this.VoucherNo = '';
        this.IsPassed = false;
        this.Narration = '';
        this.NetAmount = '';
        this.Netdeduction = '';
        this.NetAmt = '';
        this.text = "Submit";
        this.lblNetSummary = '2. Net Amount will be same.';
        this.Accountlist = [];
        this.OriginalAccountlist = [];
        this.Accountwiselist = [];
        this.billaddressfilter = [];
        this.Clearall();
        this._router.navigate(['/accounts/OldEntry/OEPurchase/Add/ ']);
    };
    PurchaseOEComponent.prototype.Reset = function () {
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.InvNo = "";
            this.InvDate = "";
            this.DueDate = "";
            this.BillReceive = "";
            this.PurchaseNo = '';
            this.PurchaseDate = '';
            this.passedby = '';
            this.PassedAmount = '';
            this.InvoiceAmount = '';
            this.suppliername = undefined;
            this.VoucherNo = '';
            this.IsPassed = false;
            this.Narration = '';
            this.NetAmount = '';
            this.Netdeduction = '';
            this.NetAmt = '';
            this.text = "Submit";
            this.lblNetSummary = '2. Net Amount will be same.';
            this.Accountlist = [];
            this.OriginalAccountlist = [];
            this.Accountwiselist = [];
            this.billaddressfilter = [];
            this.Clearall();
            this.showhidebtn = false;
            this.disablePurchaseno = false;
            this._router.navigate(['/accounts/OldEntry/OEPurchase/Add/ ']);
        }
    };
    PurchaseOEComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        this.AccountName = undefined;
        this.JobNo = "";
        this.Deduction = "";
        this.Amount = "";
        this.ActNarration = "";
        this.Item = undefined;
        this.actpassedamount = "";
        this.txtchild = "Add";
    };
    PurchaseOEComponent.prototype.Clearall = function () {
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Accounts/ACC_PURCHASE_RESTALL", jsonmaster)
            .subscribe(function (data) {
        });
    };
    PurchaseOEComponent.prototype.supplier_validation = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        var jsonview = {
            SUPCODE: this.suppliername,
            SUPINVNO: this.InvNo,
            ENTRYNO: this.PurchaseNo
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_SUPINVNO_VALIDATE", jsonview)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split('#')[0] == '100') {
                _this.Add_Main();
            }
            else {
                var answer = confirm("Record with same supplier and invoice number already exists.\n Click Ok to Add & Cancel to Retry!");
                if (answer == false) {
                    return false;
                }
                else {
                    _this.Add_Main();
                }
            }
        });
    };
    PurchaseOEComponent.prototype.GetSupplierName = function (Suppcode) {
        this.billaddressfilter = this.billaddressList.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter.length == "1") {
            this.billaddress = this.billaddressfilter[0].DATAVALUEFIELD;
        }
    };
    PurchaseOEComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    PurchaseOEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./purchase-IUOld.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], PurchaseOEComponent);
    return PurchaseOEComponent;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEPurchase/purchaseOE.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEPurchase/purchaseOE.module.ts ***!
  \*******************************************************************/
/*! exports provided: PurchaseOEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOEModule", function() { return PurchaseOEModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _purchaseOE_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchaseOE.routing */ "./src/app/accounts/OldEntry/OEPurchase/purchaseOE.routing.ts");
/* harmony import */ var _purchase_IUOld_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-IUOld.component */ "./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.ts");
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
var PurchaseOEModule = /** @class */ (function () {
    function PurchaseOEModule() {
    }
    PurchaseOEModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_purchaseOE_routing__WEBPACK_IMPORTED_MODULE_6__["PurchaseOERoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _purchase_IUOld_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseOEComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], PurchaseOEModule);
    return PurchaseOEModule;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEPurchase/purchaseOE.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEPurchase/purchaseOE.routing.ts ***!
  \********************************************************************/
/*! exports provided: PurchaseOERoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOERoutingModule", function() { return PurchaseOERoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _purchase_IUOld_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-IUOld.component */ "./src/app/accounts/OldEntry/OEPurchase/purchase-IUOld.component.ts");
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
            title: ' Old Purchase'
        },
        children: [
            { path: 'Add/:EntryNo', component: _purchase_IUOld_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseOEComponent"], data: { title: 'Add' } },
        ]
    }
];
var PurchaseOERoutingModule = /** @class */ (function () {
    function PurchaseOERoutingModule() {
    }
    PurchaseOERoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PurchaseOERoutingModule);
    return PurchaseOERoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=OEPurchase-purchaseOE-module.js.map