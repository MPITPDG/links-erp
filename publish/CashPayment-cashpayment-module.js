(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CashPayment-cashpayment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{HeaderText}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b> General Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Entry No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input [(ngModel)]=\"EntryNo\" type=\"text\" class=\"form-control width150\" maxlength=\"15\"\r\n                            [disabled]=\"true\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Entry Date</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <!-- <td>\r\n                        <my-date-picker name=\"EntryDate\" [options]=\"myDatePickerOptionsInv\"\r\n                            class=\"form-control width170\" [(ngModel)]=\"EntryDate\"></my-date-picker>\r\n                    </td> -->\r\n                    <td>\r\n                        <my-date-picker name=\"EntryDate\"  (dateChanged)=\"EntryDateChanged($event)\" [options]=\"myDatePickerOptionsInv\" class=\"form-control\" [selDate]=\"EntryDate\" ></my-date-picker>\r\n                    </td>\r\n    \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                    <td colspan=\"3\"> <input [(ngModel)]=\"Narration\" type=\"text\" aria-multiline=\"true\" class=\"form-control width500\"\r\n                            [maxlength]=\"240\"> </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>Accounts Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span></td>\r\n                    <td colspan=\"3\">\r\n                        <ng-select [items]=\"AccountNameTable\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                            (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName\" class=\"custom \"\r\n                            placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Item</b> </span></td>\r\n                    <td colspan=\"3\">\r\n                        <ng-select [items]=\"filteitemtable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                            [(ngModel)]=\"ItemName\" class=\"custom \" placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span *ngIf=\" Type == 'CP'\" class=\"col-form-span-label\"><b>Entry Type</b> </span></td>\r\n                    <td>\r\n                       <ng-select *ngIf=\" Type == 'CP'\"[items]=\"entrytypetable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                         [(ngModel)]=\"entrytype\" (ngModelChange)=\"EntryTypeChg($event.target.value)\" class=\"custom \" placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                      \r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Department</b> </span></td>\r\n                    <td>\r\n                        <ng-select [items]=\"departmenttable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                            [(ngModel)]=\"department\" class=\"custom \" placeholder=\"--Select--\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Bill No</b> </span>\r\n                </td>\r\n                <!-- (blur)=\"job_validation(jobno)\" -->\r\n                <td> <input [(ngModel)]=\"billno\" type=\"text\"\r\n                        OnlyNumber=\"true\" class=\"form-control width150\" [maxlength]=\"15\"> </td>\r\n              \r\n                    <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <!-- (blur)=\"job_validation(jobno)\" -->\r\n                    <td> <input [(ngModel)]=\"jobno\" type=\"text\"\r\n                            OnlyNumber=\"true\" class=\"form-control width150\" [maxlength]=\"15\"> </td>\r\n                 \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <td> <input [(ngModel)]=\"Amount\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b> Deduction</b> </span>\r\n                        </td>\r\n                        <td> <input [(ngModel)]=\"Deduction\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\r\n                                maxlength=\"40\"> </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                    <td colspan=\"3\">\r\n                        <input [(ngModel)]=\"ActNarration\" type=\"text\" class=\"form-control\" [maxlength]=\"20\">\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\r\n                                {{txtchild}}</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"Resetchild();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td colspan=\"2\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                    <td >  <input [(ngModel)]=\"TotalAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                    <td >  <input [(ngModel)]=\"TotalDeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"4\">\r\n                        <div class=\"row xyscroll\">\r\n                            <div class=\"col-12\">\r\n                                <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\">\r\n                                    <thead>\r\n                                        <tr class=\"bakgrdliteBlue\">\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name\r\n                                            </th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                            <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody *ngIf=\"Accountlist.length>0\">\r\n                                        <tr *ngFor=\"let obj of Accountlist\">\r\n                                            <td class=\"centerlabel\">\r\n                                                <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\"></i>\r\n                                                &nbsp;\r\n                                                <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID)\"></i>\r\n                                            </td>\r\n                                            <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\">\r\n                                                </span>\r\n                                            </td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"resetpage();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n\r\n\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.ts ***!
  \***************************************************************************/
/*! exports provided: CashPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentComponent", function() { return CashPaymentComponent; });
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






var CashPaymentComponent = /** @class */ (function () {
    function CashPaymentComponent(_dataService, _activatedRoute, _toasterService, _router, _loginService, loaderService) {
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
        this.EntryTypeName = "";
        this.Accountlist = [];
        this.AccountNameTable = [];
        this.text = "Submit";
        this.txtchild = "Add";
        this.Type = "";
        this.HeaderText = "";
        this.TotalAmount = "0";
        this.TotalDeduction = "0";
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
        this.entrytypetable = [];
        this.Allitemtable = [];
        this.PKID_CR = "0";
        this.BankDetailId = "0";
        this.CR_iseditable = "0";
        this.fromright_dt = "";
        this.disable_deduction = false;
    }
    CashPaymentComponent.prototype.ngOnInit = function () {
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
            _this.entrytypetable = data.Table6;
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
    CashPaymentComponent.prototype.verifyPermission = function (formId, userMode) {
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
    CashPaymentComponent.prototype.EntryDateChanged = function (ev) {
        this.EntryDate = ev.formatted;
    };
    CashPaymentComponent.prototype.onDisableRange = function () {
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
    CashPaymentComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    CashPaymentComponent.prototype.GetActName = function (act_id) {
        this.ACCTNAME = this.AccountNameTable.filter(function (code) { return code.ACCTCODENAME === act_id; })[0].ACCTNAME;
        this.filteitemtable = this.Allitemtable.filter(function (x) { return x.ACCTCODE === act_id.split("|")[0]; });
        if (this.filteitemtable.length == "1") {
            this.ItemName = this.filteitemtable[0].VALUEFIELD;
        }
    };
    CashPaymentComponent.prototype.job_validation = function () {
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
    CashPaymentComponent.prototype.Addchildrcrd = function () {
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
        if (this.entrytype == "" || this.entrytype == undefined) {
            this._toasterService.toast("warning", "warning", "Please Select EntryType.");
            return false;
        }
        if (this.entrytype == "AB" || this.entrytype == "AO" || this.entrytype == "PE") {
            if (this.billno == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter BillNo. !');
                return false;
            }
            if (this._loginService.getLogin()[0].CMPCODE == "20") {
                if (this.billno.length != 10) {
                    this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                    return false;
                }
            }
            else {
                if (this.billno.length < 15) {
                    this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                    return false;
                }
            }
        }
        if (this.entrytype == "AD" || this.entrytype == "JB") {
            if (this.jobno == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter Job No. !');
                return false;
            }
        }
        if (this.jobno.length > 0 && this.jobno.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            return false;
        }
        if (this.jobno.length > 0 && this.jobno.length == 15) {
            if (this.jobno.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
                return false;
            }
            if (this.jobno.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
                return false;
            }
        }
        if (this.jobno == "" && this.billno == "") {
            if (this.department == "" || this.department == undefined || this.department == "0") {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        if (this._loginService.getLogin()[0].CMPCODE == "20") {
            if (this.jobno.length > 0 && this.jobno.length != 10) {
                this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
                return false;
            }
        }
        else {
            if (this.jobno.length != 15 && this.jobno.length > 0) {
                this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
                return false;
            }
        }
        if (this.jobno == "" || this.jobno == undefined) {
            if (this.department == "" || this.department == undefined) {
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
            if (this.jobno.length == 0) {
                this._toasterService.toast('warning', 'warning', 'Please Enter JobNo !');
                return false;
            }
        }
        this.loaderService.display(true);
        this.EntryTypeName = this.entrytypetable.filter(function (code) { return code.VALUEFIELD == _this.entrytype; })[0].TEXTFIELD;
        var jsonmaster = {
            ID: this.PKID_CR,
            ENTRYNO: this.EntryNo,
            CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.jobno,
            BILLNO: this.billno,
            DEDUCTION: this.Deduction,
            AMOUNT: this.Amount,
            ENTRYTYPE: (this.entrytype == undefined) ? "" : this.entrytype,
            EMP_CODE: "",
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
            EMP_CODE_VALUE: "",
            EMP_CODE_TEXT: "",
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
                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
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
    CashPaymentComponent.prototype.Resetchildrcrd = function () {
        //this.AccountName = ""
        /// this.entrytype = ""
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
    CashPaymentComponent.prototype.Resetchild = function () {
        this.AccountName = "";
        this.entrytype = "";
        this.Amount = "";
        this.Deduction = "";
        this.department = "";
        this.ItemName = "";
        this.jobno = "";
        this.billno = "";
        this.ActNarration = "";
    };
    CashPaymentComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.PKID_CR = filterData.ID;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.entrytype = filterData.ENTRYTYPE;
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
    CashPaymentComponent.prototype.Add_Main = function () {
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
                _this.Print(data.Table1[0].ENTRYNO);
                _this.RestMain();
            }
            else if (data.Table[0].STATUS == "103") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
            }
        });
    };
    CashPaymentComponent.prototype.Print = function (no) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "CP" + '/' + no + '/', "CashBook BankReceipt Print", toolbar);
    };
    CashPaymentComponent.prototype.RestMain = function () {
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
        this.TotalAmount = "";
        this._router.navigate(['/accounts/Voucher/CashPayment/Add/CP/ ']);
    };
    CashPaymentComponent.prototype.deletechildrecd = function (id) {
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
                    _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                    _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                    _this.NetTotal = data.Table1[0].NETTOTAL;
                    _this._toasterService.toast('success', 'success', data.Table1[0].STATUSTEXT);
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
    CashPaymentComponent.prototype.resetpage = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset all data?')) {
            this.Accountlist = [];
            this.NetAmount = "";
            this.NetTotal = "";
            this.Netdeduction = "";
            this.TotalAmount = "";
            this.TotalDeduction = "";
            var jsonmaster = {
                VGUID: this._loginService.getLogin()[0].GUID,
            };
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonmaster)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this.loaderService.display(false);
                _this._router.navigate(['accounts/Voucher/CashPayment/Add/CP/ ']);
            });
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    CashPaymentComponent.prototype.resetdatapageload = function () {
        var jsonmaster = {
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonmaster)
            .subscribe(function (data) {
        });
    };
    CashPaymentComponent.prototype.editpopulate = function () {
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
            _this.TotalAmount = data.Table2[0].TOTAMOUNT;
            _this.TotalDeduction = data.Table2[0].TOTDEDUCTION;
        });
    };
    CashPaymentComponent.prototype.EntryTypeChg = function (entrytypeval) {
        if (entrytypeval == "AD") {
            this.Deduction = "";
            this.disable_deduction = true;
        }
        else {
            this.disable_deduction = false;
        }
        if (entrytypeval == "PE") {
            this.billno = "";
            this.Amount = "";
        }
        if (entrytypeval == "AB") {
            this.billno = "";
        }
    };
    CashPaymentComponent.prototype.FillAmount = function (event) {
        if (event.split("|")[1] == undefined) {
            this.Amount = "";
        }
        else {
            this.Amount = event.split("|")[1];
        }
    };
    CashPaymentComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    CashPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashpayment',
            template: __webpack_require__(/*! raw-loader!./cashpayment-IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"], src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], CashPaymentComponent);
    return CashPaymentComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/CashPayment/cashpayment.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashPayment/cashpayment.module.ts ***!
  \*********************************************************************/
/*! exports provided: CashPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentModule", function() { return CashPaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cashpayment_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashpayment.routing */ "./src/app/accounts/Vouchers/CashPayment/cashpayment.routing.ts");
/* harmony import */ var _cashpayment_IU_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashpayment-IU.component */ "./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CashPaymentModule = /** @class */ (function () {
    function CashPaymentModule() {
    }
    CashPaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cashpayment_IU_component__WEBPACK_IMPORTED_MODULE_3__["CashPaymentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cashpayment_routing__WEBPACK_IMPORTED_MODULE_2__["CashPaymentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], CashPaymentModule);
    return CashPaymentModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/CashPayment/cashpayment.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/CashPayment/cashpayment.routing.ts ***!
  \**********************************************************************/
/*! exports provided: CashPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentRoutingModule", function() { return CashPaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cashpayment_IU_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashpayment-IU.component */ "./src/app/accounts/Vouchers/CashPayment/cashpayment-IU.component.ts");
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
            title: ' CP'
        },
        children: [
            { path: 'Add/:Type/:EntryNo', component: _cashpayment_IU_component__WEBPACK_IMPORTED_MODULE_2__["CashPaymentComponent"], data: { title: 'Add' } },
        ]
    }
];
var CashPaymentRoutingModule = /** @class */ (function () {
    function CashPaymentRoutingModule() {
    }
    CashPaymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CashPaymentRoutingModule);
    return CashPaymentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=CashPayment-cashpayment-module.js.map