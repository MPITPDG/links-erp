(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CashExpense-cash-expense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>{{Header| uppercase}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td colspan=\"5\">\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Entry No</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td> <input [(ngModel)]=\"EntryNo\" type=\"text\" class=\"form-control width150\"\n                                        maxlength=\"40\" [disabled]=\"true\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Select Date</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td>\n                                    <my-date-picker name=\"SelectDate\" [options]=\"myDatePickerOptionsInv\"\n                                        (dateChanged)=\"getdate($event)\" class=\"form-control width170\"\n                                        [selDate]=\"SelectDate\"></my-date-picker>\n                                </td>\n                                <td class=\"centerlabel\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"populatedata()\"> <span\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                            SHOW</span></button>\n                                </td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"5\" height=\"10\" style=\"border-top: 4px solid gray;\">\n                        <span class=\"col-form-span-label\" style=\"font-size: 9pt;\"> <b>Details:</b></span>\n                        <br>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"5\">\n                        <table class=\"table table-responsive-sm table-sm-new bgwhite table-bordered\">\n                            <thead class=\"formheading\">\n                                <tr>\n                                    <th class=\"col-form-span-label \">Sr No.</th>\n                                    <th class=\"col-form-span-label\">Employee Name\n                                    </th>\n                                    <th class=\"col-form-span-label\">Amount</th>\n                                    <th class=\"col-form-span-label \">Status</th>\n                                </tr>\n                            </thead>\n                            <tbody *ngIf=\"details.length>0\">\n                                <tr *ngFor=\"let obj of details; index as i\">\n                                    <td><span class=\"col-form-span-label\">{{i+1}}\n                                        </span>\n                                    </td>\n                                    <td><span class=\"col-form-span-label\">{{obj.acctname}}</span></td>\n                                    <td><span class=\"col-form-span-label\">{{obj.amount}}</span></td>\n                                    <td><span class=\"col-form-span-label\">{{obj.CRParentEntryNo}}</span></td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n                    </td>\n                </tr>\n\n                <tr>\n                    <td> <span class=\"col-form-span-label \"><b>Narration</b></span> </td>\n                    <td colspan=\"4\">\n                        <textarea type=\"textarea\" rows=\"2\" cols=\"50\" [(ngModel)]=\"narration\"></textarea>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Total Amount </td>\n                    <td>\n                        <input type=\"text\" class=\"form-control width150\" [(ngModel)]=\"totalamount\" [disabled]=\"true\">\n                    </td>\n                </tr>\n                <tr>\n                    <td align=\"center\" colspan=\"5\">\n                        <button [disabled]='disable_generatebtn'  class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"generate_CR()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                {{txtsave}}\n                            </span></button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashExpense/cashexpense.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/CashExpense/cashexpense.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>{{HeaderText}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\n        </div>\n        <div class=\"col-sm-12 col-md-8 col-lg-8 \">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b> General Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Entry No</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"EntryNo\" type=\"text\" class=\"form-control width150\" maxlength=\"15\"\n                            [disabled]=\"true\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Entry Date</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <!-- <td>\n                        <my-date-picker name=\"EntryDate\" [options]=\"myDatePickerOptionsInv\"\n                            class=\"form-control width170\" [(ngModel)]=\"EntryDate\"></my-date-picker>\n                    </td> -->\n                    <td>\n                        <my-date-picker name=\"EntryDate\"  (dateChanged)=\"EntryDateChanged($event)\" [options]=\"myDatePickerOptionsInv\" class=\"form-control\" [selDate]=\"EntryDate\" ></my-date-picker>\n                    </td>\n    \n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td colspan=\"3\"> <input [(ngModel)]=\"Narration\" type=\"text\" aria-multiline=\"true\" class=\"form-control width500\"\n                            [maxlength]=\"240\"> </td>\n                </tr>\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b>Accounts Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span></td>\n                    <td colspan=\"3\">\n                        <ng-select [items]=\"AccountNameTable\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\n                            (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName\" class=\"custom \"\n                            placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Item</b> </span></td>\n                    <td colspan=\"3\">\n                        <ng-select [items]=\"filteitemtable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\n                            [(ngModel)]=\"ItemName\" class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span *ngIf=\" Type == 'CE'\" class=\"col-form-span-label\"><b>Employee</b> </span>\n                        <span *ngIf=\" Type == 'CP'\" class=\"col-form-span-label\"><b>Entry Type</b> </span></td>\n                    <td>\n                        <ng-select *ngIf=\" Type == 'CE'\" [items]=\"employyetable\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODE\"\n                        (ngModelChange)=\"FillAmount($event)\" [(ngModel)]=\"employee\" class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                        <ng-select *ngIf=\" Type == 'CP'\"[items]=\"employyetable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\n                         [(ngModel)]=\"employee\" class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                      \n                    </td>\n                    <td><span class=\"col-form-span-label\"><b>Department</b> </span></td>\n                    <td>\n                        <ng-select [items]=\"departmenttable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\n                            [(ngModel)]=\"department\" class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n\n                    <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <!-- (blur)=\"job_validation(jobno)\" -->\n                    <td> <input [(ngModel)]=\"jobno\" type=\"text\"\n                            OnlyNumber=\"true\" class=\"form-control width150\" [maxlength]=\"15\"> </td>\n                    <td colspan=\"2\"></td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td> <input [(ngModel)]=\"Amount\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td>\n                        <input [(ngModel)]=\"ActNarration\" type=\"text\" class=\"form-control\" [maxlength]=\"20\">\n                    </td>\n\n                </tr>\n\n                <tr>\n                    <td colspan=\"4\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                {{txtchild}}</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                (click)=\"Resetchild();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                    </td>\n                </tr>\n\n                <tr>\n\n                    <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\n                    <td> <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td colspan=\"2\"></td>\n                </tr>\n\n                <tr>\n                    <td colspan=\"4\">\n                        <div class=\"row xyscroll\" style=\"width:715px;\">\n                            <div class=\"col-12\">\n                                <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\">\n                                    <thead>\n                                        <tr class=\"bakgrdliteBlue\">\n                                            <th class=\"col-form-span-label\"></th>\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name\n                                            </th>\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Employee</th>\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"Accountlist.length>0\">\n                                        <tr *ngFor=\"let obj of Accountlist\">\n                                            <td class=\"centerlabel\">\n                                                <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\"></i>\n                                                &nbsp;\n                                                <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID)\"></i>\n                                            </td>\n                                            <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\">\n                                                </span>\n                                            </td>\n                                            <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\n                                            <td><span class=\"col-form-span-label\">{{obj.EMP_CODE_TEXT}}</span></td>\n                                            <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\n                                            <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\n                                            <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                (click)=\"resetpage();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                    </td>\n                </tr>\n\n\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashExpense/statement.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/CashExpense/statement.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>{{Header| uppercase}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\n            <table class=\"table table-sm-new bgwhite table-bordered\">\n                <tr class=\"trbg\">\n                    <td class=\"width150\">\n                        <span class=\"col-form-span-label\">\n                         &nbsp;Employee Name</span>\n                    </td>\n                    <td colspan=\"4\">                       \n                        <select class=\"form-control width300\"  [(ngModel)]=\"Employee\">\n                           <option value=\"\">Please select</option>\n                           <option *ngFor=\"let d of Employyetable\" value={{d.acctcode}}>{{d.acctname}}</option> \n                       </select>           \n           </td>\n                </tr>\n                <tr class=\"trbg\" >\n                    <td class=\"width150\">\n                        <span class=\"col-form-span-label\">\n                         &nbsp;Date</span>\n                    </td>\n                        <td colspan=\"4\">\n                        <span class=\"col-form-span-label\">From</span>\n                        <my-date-picker name=\"user_startdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"user_startdate\" ></my-date-picker>\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <span class=\"col-form-span-label\">To</span>\n                        <my-date-picker name=\"user_enddate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"user_enddate\" ></my-date-picker>\n                    </td>\n\n                </tr>\n                <tr class=\"trbg\" >\n                    <td class=\"width150\">\n                        <span class=\"col-form-span-label\">\n                         &nbsp;Job Details</span>\n                    </td>\n                    <td colspan=\"4\">\n                      \n                        <div class=\"leftlabel\">\n                            <span class=\"col-form-span-label\">\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"0\" [(ngModel)]=\"Display\"  />&nbsp;With</span>&nbsp;&nbsp;&nbsp;&nbsp;\n                            <span class=\"col-form-span-label\">\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"Display\" />&nbsp;Without</span>\n                        </div>\n                    </td>\n\n                </tr>\n                <tr class=\"trbg centerlabel\">\n                    <td colspan=\"5\">\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\n                            <span class=\"col-form-span-label\">\n                                <i class=\"fa fa-search\"></i> Search</span>\n                                      \n                        </button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\">\n                            <span class=\"col-form-span-label\" (click)=\"ResetAll();\"><i class=\"fa fa-ban\"></i> Reset</span></button> \n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GenCashReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenCashReceiptComponent", function() { return GenCashReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenCashReceiptComponent = /** @class */ (function () {
    function GenCashReceiptComponent(datepipe, _dataService, _activatedRoute, _toasterService, _loginService, loaderService) {
        this.datepipe = datepipe;
        this._dataService = _dataService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.Header = " Generate Cash Receipt from Cash Expenses";
        this.EntryNo = "";
        this.SelectDate = "";
        this.details = [];
        this.txtsave = "Generate Cash Receipt";
        this.disable_generatebtn = false;
        this.myDatePickerOptionsInv = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '18px',
            width: '180px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px',
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 }
        };
    }
    GenCashReceiptComponent.prototype.ngOnInit = function () {
        //console.log(this._loginService.getLogin());
        this.SelectDate = new Date();
        this.SelectDate = this._dataService.datechnge1(this.SelectDate);
        this.verifyPermission('29', 'Add');
        this.populatedata();
    };
    GenCashReceiptComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    GenCashReceiptComponent.prototype.populatedata = function () {
        var _this = this;
        if (this.SelectDate == "" || this.SelectDate == undefined) {
            alert("Select date First.");
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            FRDT: this.SelectDate
        };
        //  console.log(jsonmaster);
        this._dataService.getData("Accounts/CASHBOOK_AUTOGENERATE_BIND", jsonmaster).subscribe(function (data) {
            //console.log(data)
            _this.loaderService.display(false);
            if (data.Table.length == "0") {
                _this.details = "";
                _this.totalamount = "";
                _this.EntryNo = "";
                _this.narration = "";
                _this.txtsave = "Generate Cash Receipt";
                _this.disable_generatebtn = true;
                _this._toasterService.toast('success', 'success', "No Records Found.");
            }
            else {
                _this.details = data.Table;
                _this.totalamount = data.Table1[0].amount;
                if (data.Table2.length > "0") {
                    _this.EntryNo = data.Table2[0].entryno;
                    _this.narration = data.Table2[0].narration;
                    _this.txtsave = "Update Cash Receipt";
                }
                else {
                    _this.EntryNo = "";
                    _this.narration = "";
                    _this.txtsave = "Generate Cash Receipt";
                }
                _this.disable_generatebtn = false;
            }
        });
    };
    GenCashReceiptComponent.prototype.generate_CR = function () {
        var _this = this;
        if (this.SelectDate == "" || this.SelectDate == undefined) {
            alert("Select date First.");
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.EntryNo,
            ENTRYDT: this.SelectDate.formatted,
            STATUS: "CR",
            NARRATION: this.narration,
            MAKER_IP: this._loginService.getLogin()[0].CMPCODE,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP
        };
        //console.log(jsonmaster);
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_CE_AutoGenerateCR", jsonmaster).subscribe(function (data) {
            //console.log(data)
            _this.loaderService.display(false);
            if (_this.EntryNo == "") {
                _this._toasterService.toast('success', 'success', "Cash Receipt No: '" + data.Table[0].RESULT + "' Generated Successfully.");
            }
            else {
                _this._toasterService.toast('error', 'error', "Cash Receipt No: '" + data.Table[0].RESULT + "' updated Successfully.");
            }
            _this.populatedata();
            var theTop = (screen.height / 2) - (483 / 2);
            var theLeft = (screen.width / 2) - (780 / 2);
            var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "CR" + '/' + data.Table[0].RESULT + '/', "CashBook BankReceipt Print", toolbar);
        });
    };
    GenCashReceiptComponent.prototype.getdate = function (date) {
        this.SelectDate = date.formatted;
    };
    GenCashReceiptComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    GenCashReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gen-cash-receipt',
            template: __webpack_require__(/*! raw-loader!./Gen-Cash-Receipt.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"], src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], GenCashReceiptComponent);
    return GenCashReceiptComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/CashExpense/cash-expense-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashExpense/cash-expense-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CashExpenseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashExpenseRoutingModule", function() { return CashExpenseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cashexpense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashexpense.component */ "./src/app/accounts/Vouchers/CashExpense/cashexpense.component.ts");
/* harmony import */ var _Gen_Cash_Receipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gen-Cash-Receipt.component */ "./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.ts");
/* harmony import */ var _statement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statement.component */ "./src/app/accounts/Vouchers/CashExpense/statement.component.ts");
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
            title: ' CE'
        },
        children: [
            { path: 'Add/:Type/:EntryNo', component: _cashexpense_component__WEBPACK_IMPORTED_MODULE_2__["CashexpenseComponent"], data: { title: 'Add' } },
            { path: 'GencashRecpt', component: _Gen_Cash_Receipt_component__WEBPACK_IMPORTED_MODULE_3__["GenCashReceiptComponent"], data: { title: 'Add' } },
            { path: 'Statement', component: _statement_component__WEBPACK_IMPORTED_MODULE_4__["StatementComponent"], data: { title: 'List' } },
        ]
    }
];
var CashExpenseRoutingModule = /** @class */ (function () {
    function CashExpenseRoutingModule() {
    }
    CashExpenseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CashExpenseRoutingModule);
    return CashExpenseRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/CashExpense/cash-expense.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashExpense/cash-expense.module.ts ***!
  \**********************************************************************/
/*! exports provided: CashExpenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashExpenseModule", function() { return CashExpenseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cash_expense_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash-expense-routing.module */ "./src/app/accounts/Vouchers/CashExpense/cash-expense-routing.module.ts");
/* harmony import */ var _cashexpense_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashexpense.component */ "./src/app/accounts/Vouchers/CashExpense/cashexpense.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _Gen_Cash_Receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Gen-Cash-Receipt.component */ "./src/app/accounts/Vouchers/CashExpense/Gen-Cash-Receipt.component.ts");
/* harmony import */ var _statement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statement.component */ "./src/app/accounts/Vouchers/CashExpense/statement.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CashExpenseModule = /** @class */ (function () {
    function CashExpenseModule() {
    }
    CashExpenseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cashexpense_component__WEBPACK_IMPORTED_MODULE_3__["CashexpenseComponent"], _Gen_Cash_Receipt_component__WEBPACK_IMPORTED_MODULE_8__["GenCashReceiptComponent"], _statement_component__WEBPACK_IMPORTED_MODULE_9__["StatementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cash_expense_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashExpenseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], CashExpenseModule);
    return CashExpenseModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/CashExpense/cashexpense.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashExpense/cashexpense.component.ts ***!
  \************************************************************************/
/*! exports provided: CashexpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashexpenseComponent", function() { return CashexpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CashexpenseComponent = /** @class */ (function () {
    function CashexpenseComponent(_dataService, _activatedRoute, _toasterService, _router, _loginService, loaderService) {
        this._dataService = _dataService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._router = _router;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.EntryNo = " ";
        this.EntryDate = null;
        this.Narration = "";
        this.AccountNameList = [];
        this.Allitemlist = [];
        this.billno = "";
        this.jobno = "";
        this.Amount = "";
        this.Deduction = "";
        this.ActNarration = "";
        this.NetTotal = "";
        this.NetAmount = "";
        this.Netdeduction = "";
        this.EmployeeName = "";
        this.Accountlist = [];
        this.AccountNameTable = [];
        this.text = "Submit";
        this.txtchild = "Add";
        this.Type = "";
        this.HeaderText = "";
        this.myDatePickerOptionsInv = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '180px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px',
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 }
        };
        this.departmenttable = [];
        this.employyetable = [];
        this.Allitemtable = [];
        this.PKID_CR = "0";
        this.BankDetailId = "0";
        this.CR_iseditable = "0";
        this.fromright_dt = "";
    }
    CashexpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            // console.log(params)
            _this.queryParamsUserId = params["EntryNo"];
            _this.Type = params["Type"];
            if (_this.Type == "CE") {
                _this.HeaderText = "CASH EXPENCE";
            }
            else {
                _this.HeaderText = "CASH PAYMENT";
            }
        });
        this.EntryDate = new Date();
        this.EntryDate = this._dataService.datechnge(this.EntryDate);
        this.resetdatapageload();
        this.loaderService.display(true);
        var jsonmaster = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.Type
        };
        //  console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD", jsonmaster)
            .subscribe(function (data) {
            _this.AccountNameTable = data.Table;
            _this.departmenttable = data.Table1;
            _this.Allitemtable = data.Table5;
            _this.employyetable = data.Table4;
            _this.loaderService.display(false);
        });
        if (this.queryParamsUserId != ' ') {
            this.text = "Update";
            this.verifyPermission('29', 'Modify');
            this.editpopulate();
        }
        else {
            this.verifyPermission('29', 'Add');
        }
    };
    CashexpenseComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            // console.log(data)
            if (data.Table.length > "0") {
                _this.fromright_dt = data.Table[0].rightsfrmdt;
                _this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    CashexpenseComponent.prototype.EntryDateChanged = function (ev) {
        this.EntryDate = ev.formatted;
    };
    CashexpenseComponent.prototype.onDisableRange = function () {
        var date = new Date(this.fromright_dt);
        var newdate = new Date(date);
        var bdate = new Date();
        bdate = newdate;
        var copy = this.getCopyOfOptions();
        bdate.setDate(bdate.getDate());
        copy.disableUntil = { year: bdate.getFullYear(), month: bdate.getMonth() + 1, day: bdate.getDate() };
        this.myDatePickerOptionsInv = copy;
        var d = new Date();
        d.setDate(d.getDate() + 1);
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.myDatePickerOptionsInv = copy1;
    };
    CashexpenseComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    CashexpenseComponent.prototype.GetActName = function (act_id) {
        this.ACCTNAME = this.AccountNameTable.filter(function (code) { return code.ACCTCODENAME === act_id; })[0].ACCTNAME;
        this.filteitemtable = this.Allitemtable.filter(function (x) { return x.ACCTCODE === act_id.split("|")[0]; });
        if (this.filteitemtable.length == "1") {
            this.ItemName = this.filteitemtable[0].VALUEFIELD;
        }
    };
    CashexpenseComponent.prototype.job_validation = function () {
        if (this.jobno.length != 15) {
            alert("Please Enter 15 digit Jobno.");
            return false;
        }
        else if (this.jobno.substring(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
            alert("Entered Job No. is different company !");
            this._toasterService.toast('warning', 'warning', 'Entered Job No. is different company !');
            this.jobno = "";
            return false;
        }
        else {
            var deptcode_1 = this.jobno.substr(2, 3) + this.jobno.substr(5, 1);
            //01 110 1/2
            this.department = this.departmenttable.filter(function (code) { return code.CODE === deptcode_1; })[0].VALUEFIELD;
        }
    };
    CashexpenseComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        //  console.log(this.AccountName)
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.filteitemtable.length > 1) {
            if (this.ItemName == "" || this.ItemName == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.employee == "" || this.employee == undefined) {
            this._toasterService.toast("warning", "warning", "Please Select Employee.");
            return false;
        }
        if (this.Amount == "" || this.Amount == undefined) {
            this._toasterService.toast("warning", "warning", "Please Enter Amount.");
            return false;
        }
        else if (this.Amount <= "0") {
            this._toasterService.toast("warning", "warning", "Amount should be greater then zero");
            return false;
        }
        // if(this.jobno=="" || this.jobno==undefined)  {
        //     this._toasterService.toast('warning', 'warning', 'Please Enter Jobno !');
        //     return false;
        // }
        if (this.jobno.length > 0 && this.jobno.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            return false;
        }
        if (this.jobno == "" || this.jobno == undefined) {
            if (this.department == "" || this.department == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
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
        this.loaderService.display(true);
        this.EmployeeName = this.employyetable.filter(function (code) { return code.ACCTCODE == _this.employee; })[0].ACCTNAME;
        var jsonmaster = {
            ID: this.PKID_CR,
            ENTRYNO: this.EntryNo,
            CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.jobno,
            BILLNO: this.billno,
            DEDUCTION: this.Deduction,
            AMOUNT: this.Amount,
            ENTRYTYPE: "",
            EMP_CODE: this.employee.split("|")[0],
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            CRPARENTENTRYNO: "0",
            NARRATION: this.ActNarration,
            IS_NOT_EDIT_ABLE: this.CR_iseditable,
            ITEMCODE: (this.ItemName == "" || this.ItemName == undefined) ? "" : this.ItemName.split("|")[0],
            DEPTID: this.department,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: (this.ItemName == undefined || this.ItemName == "") ? "" : this.ItemName.split("|")[2],
            DEPARTMENT: this.department,
            ACC_BANKDTLS_ID: this.BankDetailId,
            STATUS: this.Type,
            ISJOBREPORT: this.AccountName.split("|")[1],
            EMP_CODE_VALUE: this.employee,
            EMP_CODE_TEXT: this.EmployeeName,
            ITEM_DATAVALUE: (this.ItemName == undefined || this.ItemName == "") ? "" : this.ItemName,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_TMP_IU", jsonmaster)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetAmount = data.Table1[0].TOTAMOUNT;
                _this.NetTotal = data.Table1[0].NETTOTAL;
                _this.Accountlist = data.Table;
                _this.Resetchildrcrd();
                _this.txtchild = "Add";
            }
            else {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUSTEXT);
                return false;
            }
        });
    };
    CashexpenseComponent.prototype.Resetchild = function () {
        this.AccountName = "";
        this.employee = "";
        this.Amount = "";
        this.Deduction = "";
        this.department = "";
        this.ItemName = "";
        this.jobno = "";
        this.billno = "";
        this.ActNarration = "";
    };
    CashexpenseComponent.prototype.Resetchildrcrd = function () {
        //this.AccountName = ""
        // this.employee = ""
        this.Amount = "";
        this.Deduction = "";
        //this.department = ""
        this.ItemName = "";
        this.jobno = "";
        this.billno = "";
        this.ActNarration = "";
        this.PKID_CR = "0";
        this.CR_iseditable = "0";
        this.BankDetailId = "0";
    };
    CashexpenseComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.PKID_CR = filterData.ID;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.employee = filterData.EMP_CODE_VALUE;
        this.Amount = filterData.AMOUNT;
        this.Deduction = filterData.DEDUCTION;
        this.ItemName = filterData.ITEM_DATAVALUE;
        this.jobno = filterData.JOBNO;
        this.billno = filterData.BILLNO;
        this.ActNarration = filterData.NARRATION;
        this.txtchild = "Update";
        this.BankDetailId = filterData.ACC_BANKDTLS_ID;
        this.CR_iseditable = filterData.IS_NOT_EDIT_ABLE;
        this.department = filterData.DEPTID;
        this.GetActName(this.AccountName);
    };
    CashexpenseComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.Accountlist.length == []) {
            this._toasterService.toast("error", "error", "Please Fill Account Details First.");
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.EntryNo,
            ENTRYDT: (this.EntryDate == "" || this.EntryDate == undefined) ? "" : this.EntryDate,
            STATUS: this.Type,
            OURBANK: "",
            OURBANKNM: "",
            CHEQUETYPE: "",
            CHEQUENO: "",
            CHEQUEDT: "",
            BANK: "",
            NARRATION: this.Narration,
            ACTUALAMOUNT: this.NetTotal,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].GUID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            NOTOVERFLAG: "",
            ACTION: (this.EntryNo == " " || this.EntryNo == undefined) ? "INSERT" : "UPDATE",
            PAYEENAME: ""
        };
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_IU", jsonmaster)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                var theTop = (screen.height / 2) - (483 / 2);
                var theLeft = (screen.width / 2) - (780 / 2);
                var toolbar_1 = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
                window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "CE" + '/' + data.Table[0].ENTRYNO + '/', "CashBook BankReceipt Print", toolbar_1);
                _this.RestMain();
            }
            else if (data.Table[0].STATUS == "103") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
            }
        });
    };
    CashexpenseComponent.prototype.RestMain = function () {
        // this.resetpage();
        this.NetAmount = "";
        this.NetTotal = "";
        this.Netdeduction = "";
        this.EntryNo = "";
        this.EntryDate = "";
        this.Resetchildrcrd();
        this.text = "Add";
        this.Accountlist = [];
        this.Narration = "";
        this._router.navigate(['/accounts/Voucher/CashExpence/Add/CE/ ']);
    };
    CashexpenseComponent.prototype.deletechildrecd = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsondelete = {
                ID: id,
                VGUID: this._loginService.getLogin()[0].GUID,
                ACC_BANKDTLS_ID: this.BankDetailId
            };
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_TMP_DEL", jsondelete)
                .subscribe(function (data) {
                _this.loaderService.display(false);
                if (data.Table1[0].STATUS.split("#")[0] == "100") {
                    _this.Accountlist = data.Table;
                    _this.NetTotal = data.Table1[0].NETTOTAL;
                    _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                }
                else {
                    _this._toasterService.toast("warning", "warning", "Error in Deleting");
                }
            });
        }
        else {
            this.loaderService.display(false);
            return false;
        }
    };
    CashexpenseComponent.prototype.resetpage = function () {
        if (confirm('Are you sure you want to reset all data?')) {
            // const jsonmaster = {
            //   VGUID: this._loginService.getLogin()[0].GUID,
            // }
            // this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonmaster)
            //   .subscribe((data: any) => { 
            this.Accountlist = [];
            this.NetAmount = "";
            this.NetTotal = "";
            this.Netdeduction = "";
            this._router.navigate(['/accounts/Voucher/CashExpence/Add/CE/ ']);
            // })
        }
    };
    CashexpenseComponent.prototype.resetdatapageload = function () {
        var jsonmaster = {
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonmaster)
            .subscribe(function (data) {
        });
    };
    CashexpenseComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonview = {
            EntryNo: this.queryParamsUserId,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.Type
        };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_View", jsonview)
            .subscribe(function (data) {
            _this.EntryNo = data.Table[0].ENTRYNO;
            _this.EntryDate = (data.Table[0].ENTRYDT != "") ? data.Table[0].ENTRYDT : "";
            _this.Narration = data.Table[0].NARRATION;
            _this.Accountlist = data.Table1;
            _this.NetAmount = data.Table2[0].TOTAMOUNT;
            _this.Netdeduction = data.Table2[0].TOTDEDUCTION;
            _this.NetTotal = data.Table2[0].NETTOTAL;
        });
    };
    CashexpenseComponent.prototype.FillAmount = function (event) {
        if (event.split("|")[1] == undefined) {
            this.Amount = "";
        }
        else {
            this.Amount = event.split("|")[1];
        }
    };
    CashexpenseComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    CashexpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashexpense',
            template: __webpack_require__(/*! raw-loader!./cashexpense.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashExpense/cashexpense.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"], src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], CashexpenseComponent);
    return CashexpenseComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/CashExpense/statement.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashExpense/statement.component.ts ***!
  \**********************************************************************/
/*! exports provided: StatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementComponent", function() { return StatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatementComponent = /** @class */ (function () {
    function StatementComponent(_dataService, _activatedRoute, _toasterService, _loginService, loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.Header = "Cash expenses";
        this.Display = "1";
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '18px',
            width: '180px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px',
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 }
        };
    }
    StatementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifyPermission('29', 'View');
        var jsonmaster = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/FillCE_Employees", jsonmaster).subscribe(function (data) {
            // console.log(data)
            _this.Employyetable = data.Table;
        });
    };
    StatementComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    StatementComponent.prototype.search = function () {
        if (this.user_startdate == "" || this.user_startdate == undefined) {
            alert("Please select start date.");
            return false;
        }
        if (this.user_enddate == "" || this.user_enddate == undefined) {
            alert("Please select End date.");
            return false;
        }
        if (this.Employee == "" || this.Employee == undefined) {
            alert("Please select Employee Name.");
            return false;
        }
        if (this.user_startdate != "" || this.user_enddate != "") {
            if (!this._dataService.DateFromAndToComparision(this.user_startdate.formatted, this.user_enddate.formatted)) {
                alert("To Date should be greater than From Date");
                return false;
            }
        }
        var jsonmaster = {
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            usr_StartDate: this.user_startdate.formatted,
            usr_EndDate: this.user_enddate.formatted,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE1,
            ACCTCODE: this.Employee
        };
        console.log(jsonmaster);
        this._dataService.getData("Accounts/CE_STAEMENT", jsonmaster).subscribe(function (data) {
            console.log(data);
        });
    };
    StatementComponent.prototype.ResetAll = function () {
    };
    StatementComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    StatementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statement',
            template: __webpack_require__(/*! raw-loader!./statement.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashExpense/statement.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], StatementComponent);
    return StatementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=CashExpense-cash-expense-module.js.map