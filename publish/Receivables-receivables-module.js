(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Receivables-receivables-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>BILL OUTSTANDING - RECEIVABLE AGEWISE</b> </td>\r\n           </tr>\r\n                <tr>\r\n                    <td class=\"width130\">\r\n                        <span  class=\"col-form-span-label\"><b>Client</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                            <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"AccountList\" bindLabel=\"EXP_NAME_CITY\"\r\n                               bindValue=\"EXP_CODE\"  [(ngModel)]=\"Client\"  (ngModelChange)=\"GetAccountName($event)\"\r\n                               class=\"custom\" placeholder=\"--Please Select--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                             <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportToExcel()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Export To Excel </span></button>&nbsp;\r\n                             \r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>RECEIVABLE - ANY ONE CLIENT ALL BRANCH</b> </td>\r\n           </tr>\r\n                <tr>\r\n                    <td class=\"width130\">\r\n                        <span  class=\"col-form-span-label\"><b>Account Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                           <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"AccountList\" bindLabel=\"EXP_NAME_CITY\"\r\n                               bindValue=\"EXP_CODE\"  [(ngModel)]=\"Client\"  (ngModelChange)=\"GetAccountName($event)\"\r\n                               class=\"custom\" placeholder=\"--Please Select--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                             <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportToExcel()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Export To Excel </span></button>&nbsp;\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ImportAdvData()\" > <span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                    Import Adv</span></button>&nbsp;\r\n                                    <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"download()\" > <span\r\n                                        class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                        Download </span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>OUTSTANDING RECEIVABLE - ALL BRANCH</b> </td>\r\n           </tr>\r\n                <tr>\r\n                    <td width=\"150px\"  >\r\n                        <span  class=\"col-form-span-label\"><b>Account Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                           <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"AccountList\" bindLabel=\"EXP_NAME_CITY\"\r\n                               bindValue=\"EXP_CODE\"  [(ngModel)]=\"Client\" (ngModelChange)=\"GetAccountName($event)\"\r\n                               class=\"custom\" placeholder=\"--Please Select--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                             <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportToExcel()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-calculator\"></i>\r\n                                Calculate </span></button>&nbsp;\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"Download()\" > <span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-download\"></i>\r\n                                    Download</span></button>&nbsp;\r\n                                    <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"AdvSearch()\" > <span\r\n                                        class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>\r\n                                        Adv Search </span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/receivables.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/Receivables/receivables.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>receivables works!</p>"

/***/ }),

/***/ "./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReceivableAnyOneClientAgeing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivableAnyOneClientAgeing", function() { return ReceivableAnyOneClientAgeing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
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








var ReceivableAnyOneClientAgeing = /** @class */ (function () {
    function ReceivableAnyOneClientAgeing(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.AccountList = [];
        this.Header = "BILL OUTSTANDING - RECEIVABLE AGEWISE";
        this.dataForExcel = [];
        this.outstandList = [];
        this.UnAdjAmtList = [];
        this.advList = [];
    }
    ReceivableAnyOneClientAgeing.prototype.ngOnInit = function () {
        this._loaderService.display(true);
        this.verifyPermission('153', 'View');
        this.Ondate = new Date();
        this.Ondate = this._dataService.datechnge1(this.Ondate);
        this.FillAccount();
        // this._loginService.verifyRights(153, '')
        // .subscribe((data: any) => { this._loginService.checkVerify('View', data); });
        this._loaderService.display(false);
    };
    ReceivableAnyOneClientAgeing.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    ReceivableAnyOneClientAgeing.prototype.FillAccount = function () {
        var _this = this;
        var jsonItem = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/Acc_Fill_Export", jsonItem)
            .subscribe(function (data) {
            _this.AccountList = data.Table;
            _this._loaderService.display(false);
        });
    };
    ReceivableAnyOneClientAgeing.prototype.GetAccountName = function (icode) {
        var updateItem = this.AccountList.find(function (item) { return item.EXP_CODE === icode; });
        this.ClientName = updateItem.EXP_NAME_CITY;
    };
    ReceivableAnyOneClientAgeing.prototype.ExportToExcel = function () {
        var _this = this;
        var jsonvdata = {
            ClientCode: this.Client,
            FinStartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FinEndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/Acc_Rpt_Receivable_AgeWise_XL_35", jsonvdata)
            .subscribe(function (data) {
            _this.outstandList = data.Table1;
            _this.UnAdjAmtList = data.Table3;
            _this.advList = data.Table5;
            _this.outstandList.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
            });
            _this.ExportToExcelAdv();
        });
    };
    ReceivableAnyOneClientAgeing.prototype.ExportToExcelAdv = function () {
        var arrunadjamtdata = this.UnAdjAmtList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, TRANSCODE = _a.TRANSCODE, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, UNADJUSTEDAMT = _a.UNADJUSTEDAMT;
            return [BILLTYPE, TRANSCODE, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, UNADJUSTEDAMT];
        });
        var arradvdata = this.advList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, ADDRAMT = _a.ADDRAMT, ADCRAMT = _a.ADCRAMT;
            return [BILLTYPE, BILLNO, BILLDATE, ADDRAMT, ADCRAMT];
        });
        var reportData = {
            data: this.dataForExcel,
            UnAdjAmtdata: arrunadjamtdata,
            advdata: arradvdata,
            headers: ['BILLTYPE', 'BILL NO', 'BILL DATE', 'INVOICE AMT', 'RECEIVED AMT', 'PENDING AMT', 'Less Than 30 days',
                '31 To 60 days', '61 To 90 days', '91 To 120 days', '121 To 180 days', 'More Than 180 days'],
            unadjamtheaders: ["BillType", "Bill No", "Date", "Receipt Amt", "AdjustedAmt", "UnAdjustedAmt"],
            advheaders: ["BillType", "Bill No", "Date", "Amount"],
            pagetype: "ReceivableAnyOneClientAgeing",
            title: ' Bills Outstanding - Receivable Ageing As on' + this.Ondate,
            subtitle: this.ClientName,
        };
        this.exportser.exportExceltry(reportData, "Bills Outstanding - Receivable Ageing-" + this.ClientName + '(' + this.Client + ')');
    };
    ReceivableAnyOneClientAgeing.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    ReceivableAnyOneClientAgeing = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receivable-anyoneclient-ageing',
            template: __webpack_require__(/*! raw-loader!./rcbl-anyoneClnt-ageing.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ReceivableAnyOneClientAgeing);
    return ReceivableAnyOneClientAgeing;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReceivableAnyOneClientAllBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivableAnyOneClientAllBranch", function() { return ReceivableAnyOneClientAllBranch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
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








var ReceivableAnyOneClientAllBranch = /** @class */ (function () {
    function ReceivableAnyOneClientAllBranch(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.AccountList = [];
        this.Status = "All";
        this.Header = "RECEIVABLE - ANY ONE CLIENT ALL BRANCH";
        this.dataForExcel = [];
        this.outstandList = [];
        this.totpendList = [];
        this.recList = [];
        this.UnAdjAmtList = [];
        this.netoutstandList = [];
        this.advList = [];
        this.totadvList = [];
        this.actstmtallList = [];
        this.actstmtalltotList = [];
        this.workingList = [];
    }
    ReceivableAnyOneClientAllBranch.prototype.ngOnInit = function () {
        var _this = this;
        this._loaderService.display(true);
        this.Ondate = new Date();
        this.Ondatetime = new Date();
        this.Ondate = this._dataService.datechnge1(this.Ondate);
        this.FillAccount();
        this.getCompanyName();
        this._loginService.verifyRights(182, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        this._loaderService.display(false);
    };
    ReceivableAnyOneClientAllBranch.prototype.FillAccount = function () {
        var _this = this;
        var jsonItem = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/Acc_Fill_Export", jsonItem)
            .subscribe(function (data) {
            _this.AccountList = data.Table;
            _this._loaderService.display(false);
        });
    };
    ReceivableAnyOneClientAllBranch.prototype.ExportToExcel = function () {
        var _this = this;
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('error', 'Error', "Please Select Client !.");
            this.loaderService.display(false);
            return false;
        }
        var jsonview = {
            ClientName: this.ClientName,
            ClientCode: this.Client,
            CMP_CODE: this._loginService.getLogin()[0].CMPCODE,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/Receivable_AnyOneClient_AllBranch", jsonview)
            .subscribe(function (data) {
            var pklogid = data.Table1[0].PKID;
            _this._router.navigate(['/accounts/report/ReportDownload/' + pklogid]);
        });
    };
    ReceivableAnyOneClientAllBranch.prototype.GetAccountName = function (icode) {
        var updateItem = this.AccountList.find(function (item) { return item.EXP_CODE === icode; });
        this.ClientName = updateItem.EXP_NAME_CITY;
    };
    ReceivableAnyOneClientAllBranch.prototype.ImportAdvData = function () {
        this.ImportData();
    };
    ReceivableAnyOneClientAllBranch.prototype.ImportData = function () {
        var _this = this;
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('error', 'Error', "Please Select Client !.");
            this.loaderService.display(false);
            return false;
        }
        var jsonvdata = {
            ClientCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/Acc_Rpt_Receivable_AnyOneClient_XL_Client_Oustanding_ClientBill_35_Branch", jsonvdata)
            .subscribe(function (data) {
            _this.outstandList = data.Table;
            _this.totpendList = data.Table1;
            _this.recList = data.Table2;
            _this.UnAdjAmtList = data.Table3;
            _this.netoutstandList = data.Table4;
            _this.advList = data.Table5;
            _this.totadvList = data.Table6;
            _this.actstmtallList = data.Table8;
            _this.actstmtalltotList = data.Table9;
            _this.workingList = data.Table10;
            _this.workingList.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
            });
            if (data.Table4[0].TOTALNetOutAMT > 0) {
                _this.NetOutstanding = data.Table4[0].TOTALNetOutAMT + " Dr";
            }
            else {
                _this.NetOutstanding = data.Table4[0].TOTALNetOutAMT + " Cr";
            }
            _this.ExportToExcelAdv();
        });
    };
    ReceivableAnyOneClientAllBranch.prototype.ExportToExcelAdv = function () {
        var date = new Date(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE);
        var todate = new Date(this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE);
        var startshortYear = date.getFullYear();
        var startYear = startshortYear.toString().substr(-2);
        var toshortYear = todate.getFullYear();
        var endYear = toshortYear.toString().substr(-2);
        var arroutdata = this.outstandList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, TRANSCODE = _a.TRANSCODE, BILLDATE = _a.BILLDATE, INVOICEAMT = _a.INVOICEAMT, RECEIVEDAMT = _a.RECEIVEDAMT, PENDINGAMT = _a.PENDINGAMT;
            return [BILLTYPE, TRANSCODE, BILLDATE, INVOICEAMT, RECEIVEDAMT, PENDINGAMT];
        });
        var arrtotpenddata = this.totpendList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, INVOICEAMT = _a.INVOICEAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, TOTALPENDINGAMT = _a.TOTALPENDINGAMT;
            return [BILLTYPE, BILLNO, BILLDATE, INVOICEAMT, ADJUSTEDAMT, TOTALPENDINGAMT];
        });
        var arrrecdata = this.recList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, TRANSCODE = _a.TRANSCODE, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, UNADJUSTEDAMT = _a.UNADJUSTEDAMT;
            return [BILLTYPE, TRANSCODE, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, UNADJUSTEDAMT];
        });
        var arrunadjamtdata = this.UnAdjAmtList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, TOTALUNADJUSTEDAMT = _a.TOTALUNADJUSTEDAMT;
            return [BILLTYPE, BILLNO, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, TOTALUNADJUSTEDAMT];
        });
        var arrnetoutdata = this.netoutstandList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, TOTALNetOutAMT = _a.TOTALNetOutAMT;
            return [BILLTYPE, BILLNO, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, TOTALNetOutAMT];
        });
        var arradvdata = this.advList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, ADCRAMT = _a.ADCRAMT;
            return [BILLTYPE, BILLNO, BILLDATE, ADCRAMT];
        });
        var arrtotadvdata = this.totadvList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, ADDRAMT = _a.ADDRAMT, TOTALADVAMT = _a.TOTALADVAMT;
            return [BILLTYPE, BILLNO, ADDRAMT, TOTALADVAMT];
        });
        var arractstmtall = this.actstmtallList.map(function (_a) {
            var TRANSTYPE = _a.TRANSTYPE, TRANSCODE = _a.TRANSCODE, TRANSDATE = _a.TRANSDATE, DRAMT = _a.DRAMT, CRAMT = _a.CRAMT, BILLNO = _a.BILLNO, ENTRYTYPE = _a.ENTRYTYPE;
            return [TRANSTYPE, TRANSCODE, TRANSDATE, DRAMT, CRAMT, BILLNO, ENTRYTYPE];
        });
        var arractstmttotall = this.actstmtalltotList.map(function (_a) {
            var DRTOTAL = _a.DRTOTAL, CRTOTAL = _a.CRTOTAL, CLBAL = _a.CLBAL;
            return [DRTOTAL, CRTOTAL, CLBAL];
        });
        var reportData = {
            data: arroutdata,
            totpenddata: arrtotpenddata,
            recdata: arrrecdata,
            UnAdjAmtdata: arrunadjamtdata,
            netoutstanddata: arrnetoutdata,
            advdata: arradvdata,
            totadvdata: arrtotadvdata,
            actstmtalldata: arractstmtall,
            actstmtalltotdata: arractstmttotall,
            workingdata: this.dataForExcel,
            headers: ["BillType", "Bill No", "Date", "InvoiceAmt", "ReceivedAmt", "PendingAmt"],
            totpendheaders: ["BillType", "Bill No", "Date", "InvoiceAmt", "ReceivedAmt", "PendingAmt"],
            recdataheaders: ["BillType", "Bill No", "Date", "Receipt Amt", "AdjustedAmt", "UnAdjustedAmt"],
            unadjamtheaders: ["BillType", "Bill No", "Date", "Receipt Amt", "AdjustedAmt", "UnAdjustedAmt"],
            netoutstandheaders: ["BillType", "Bill No", "Date", "InvoiceAmt", "ReceivedAmt", "PendingAmt"],
            advheaders: ["BillType", "Bill No", "Date", "Amount"],
            totadvheaders: ["BillType", "Bill No", "Date", "Total"],
            actstmtheaders: ["Trans Type", "Trans Code", "Date", "Dr Amount", "Cr Amount", "Bill No", 'Entry Type'],
            actstmttotheaders: ["Dr Total ", "Cr Total", "Closing Balance"],
            workingheaders: Object.keys(this.workingList[0]),
            pagetype: "ReceivableAnyOneClient",
            title: this.Compname,
            subtitle: " Bill Outstanding As On " + this.Ondate,
            subtitle1: this.ClientName,
            clntname: "Total Receivable Rs. " + this.NetOutstanding,
        };
        this.exportser.exportExceltry(reportData, "Bills Outstanding-receivables-" + this.ClientName + '(' + this.Client + ')' + startYear + ' - ' + endYear);
    };
    ReceivableAnyOneClientAllBranch.prototype.getCompanyName = function () {
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
    ReceivableAnyOneClientAllBranch.prototype.download = function () { };
    ReceivableAnyOneClientAllBranch.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    ReceivableAnyOneClientAllBranch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receivable-anyoneclient-allbranch',
            template: __webpack_require__(/*! raw-loader!./rcbl-anyoneClnt-allbrnch.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ReceivableAnyOneClientAllBranch);
    return ReceivableAnyOneClientAllBranch;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.ts ***!
  \********************************************************************************/
/*! exports provided: OutstandingOverseasClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingOverseasClient", function() { return OutstandingOverseasClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
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








var OutstandingOverseasClient = /** @class */ (function () {
    function OutstandingOverseasClient(_dataService, _toasterService, _router, http, exportser, _activatedRoute, _loginService, loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.AccountList = [];
        this.Status = "All";
        this.Header = "OUTSTANDING - OVERSEAS CLIENT ";
        this.dataForExcel = [];
        this.outstandList = [];
        this.totpendList = [];
        this.recList = [];
        this.UnAdjAmtList = [];
        this.netoutstandList = [];
        this.advList = [];
        this.totadvList = [];
        this.actstmtallList = [];
        this.actstmtalltotList = [];
        this.workingList = [];
    }
    OutstandingOverseasClient.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this.Ondate = new Date();
        //this.Ondatetime=new Date();
        this.Ondate = this._dataService.datechnge1(this.Ondate);
        this.FillAccount();
        this.getCompanyName();
        this._loginService.verifyRights(182, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        this.loaderService.display(false);
    };
    OutstandingOverseasClient.prototype.FillAccount = function () {
        var _this = this;
        var jsonItem = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/ACC_FILLEXPOTERCITY_OVERSEAS_AGENT", jsonItem)
            .subscribe(function (data) {
            _this.AccountList = data.Table;
            _this.loaderService.display(false);
        });
    };
    OutstandingOverseasClient.prototype.ExportToExcel = function () {
        var _this = this;
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('error', 'Error', "Please Select Client !.");
            this.loaderService.display(false);
            return false;
        }
        var jsonview = {
            ClientName: this.ClientName,
            ClientCode: this.Client,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/OutstandingReceivableOverseasAgent", jsonview)
            .subscribe(function (data) {
            var pklogid = data.Table1[0].PKID;
            //this.loaderService.display(false);
            _this._router.navigate(['/accounts/report/ReportDownload/' + pklogid]);
        });
        // /accounts/report/register/ServiceTaxRegistersupport
    };
    OutstandingOverseasClient.prototype.AdvSearch = function () {
        var _this = this;
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('error', 'Error', "Please Select Client !.");
            this.loaderService.display(false);
            return false;
        }
        var jsonvdata = {
            ClientCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/Acc_Rpt_Receivable_AnyOneClient_XL_Client_Oustanding_ClientBill_35_Branch", jsonvdata)
            .subscribe(function (data) {
            _this.outstandList = data.Table;
            _this.totpendList = data.Table1;
            _this.recList = data.Table2;
            _this.UnAdjAmtList = data.Table3;
            _this.netoutstandList = data.Table4;
            _this.advList = data.Table5;
            _this.totadvList = data.Table6;
            _this.actstmtallList = data.Table8;
            _this.actstmtalltotList = data.Table9;
            _this.workingList = data.Table10;
            _this.workingList.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
            });
            if (data.Table4[0].TOTALNetOutAMT > 0) {
                _this.NetOutstanding = data.Table4[0].TOTALNetOutAMT + " Dr";
            }
            else {
                _this.NetOutstanding = data.Table4[0].TOTALNetOutAMT + " Cr";
            }
            _this.ExportToExcelAdv();
        });
    };
    OutstandingOverseasClient.prototype.ExportToExcelAdv = function () {
        var date = new Date(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE);
        var todate = new Date(this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE);
        var startshortYear = date.getFullYear();
        var startYear = startshortYear.toString().substr(-2);
        var toshortYear = todate.getFullYear();
        var endYear = toshortYear.toString().substr(-2);
        var arroutdata = this.outstandList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, TRANSCODE = _a.TRANSCODE, BILLDATE = _a.BILLDATE, INVOICEAMT = _a.INVOICEAMT, RECEIVEDAMT = _a.RECEIVEDAMT, PENDINGAMT = _a.PENDINGAMT;
            return [BILLTYPE, TRANSCODE, BILLDATE, INVOICEAMT, RECEIVEDAMT, PENDINGAMT];
        });
        var arrtotpenddata = this.totpendList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, INVOICEAMT = _a.INVOICEAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, TOTALPENDINGAMT = _a.TOTALPENDINGAMT;
            return [BILLTYPE, BILLNO, BILLDATE, INVOICEAMT, ADJUSTEDAMT, TOTALPENDINGAMT];
        });
        var arrrecdata = this.recList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, TRANSCODE = _a.TRANSCODE, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, UNADJUSTEDAMT = _a.UNADJUSTEDAMT;
            return [BILLTYPE, TRANSCODE, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, UNADJUSTEDAMT];
        });
        var arrunadjamtdata = this.UnAdjAmtList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, TOTALUNADJUSTEDAMT = _a.TOTALUNADJUSTEDAMT;
            return [BILLTYPE, BILLNO, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, TOTALUNADJUSTEDAMT];
        });
        var arrnetoutdata = this.netoutstandList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, RECEIPTAMT = _a.RECEIPTAMT, ADJUSTEDAMT = _a.ADJUSTEDAMT, TOTALNetOutAMT = _a.TOTALNetOutAMT;
            return [BILLTYPE, BILLNO, BILLDATE, RECEIPTAMT, ADJUSTEDAMT, TOTALNetOutAMT];
        });
        var arradvdata = this.advList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, BILLDATE = _a.BILLDATE, ADCRAMT = _a.ADCRAMT;
            return [BILLTYPE, BILLNO, BILLDATE, ADCRAMT];
        });
        var arrtotadvdata = this.totadvList.map(function (_a) {
            var BILLTYPE = _a.BILLTYPE, BILLNO = _a.BILLNO, ADDRAMT = _a.ADDRAMT, TOTALADVAMT = _a.TOTALADVAMT;
            return [BILLTYPE, BILLNO, ADDRAMT, TOTALADVAMT];
        });
        var arractstmtall = this.actstmtallList.map(function (_a) {
            var TRANSTYPE = _a.TRANSTYPE, TRANSCODE = _a.TRANSCODE, TRANSDATE = _a.TRANSDATE, DRAMT = _a.DRAMT, CRAMT = _a.CRAMT, BILLNO = _a.BILLNO, ENTRYTYPE = _a.ENTRYTYPE;
            return [TRANSTYPE, TRANSCODE, TRANSDATE, DRAMT, CRAMT, BILLNO, ENTRYTYPE];
        });
        var arractstmttotall = this.actstmtalltotList.map(function (_a) {
            var DRTOTAL = _a.DRTOTAL, CRTOTAL = _a.CRTOTAL, CLBAL = _a.CLBAL;
            return [DRTOTAL, CRTOTAL, CLBAL];
        });
        var reportData = {
            data: arroutdata,
            totpenddata: arrtotpenddata,
            recdata: arrrecdata,
            UnAdjAmtdata: arrunadjamtdata,
            netoutstanddata: arrnetoutdata,
            advdata: arradvdata,
            totadvdata: arrtotadvdata,
            actstmtalldata: arractstmtall,
            actstmtalltotdata: arractstmttotall,
            workingdata: this.dataForExcel,
            headers: ["BillType", "Bill No", "Date", "InvoiceAmt", "ReceivedAmt", "PendingAmt"],
            totpendheaders: ["BillType", "Bill No", "Date", "InvoiceAmt", "ReceivedAmt", "PendingAmt"],
            recdataheaders: ["BillType", "Bill No", "Date", "Receipt Amt", "AdjustedAmt", "UnAdjustedAmt"],
            unadjamtheaders: ["BillType", "Bill No", "Date", "Receipt Amt", "AdjustedAmt", "UnAdjustedAmt"],
            netoutstandheaders: ["BillType", "Bill No", "Date", "InvoiceAmt", "ReceivedAmt", "PendingAmt"],
            advheaders: ["BillType", "Bill No", "Date", "Amount"],
            totadvheaders: ["BillType", "Bill No", "Date", "Total"],
            actstmtheaders: ["Trans Type", "Trans Code", "Date", "Dr Amount", "Cr Amount", "Bill No", 'Entry Type'],
            actstmttotheaders: ["Dr Total ", "Cr Total", "Closing Balance"],
            workingheaders: Object.keys(this.workingList[0]),
            pagetype: "ReceivableAnyOneClient",
            title: this.Compname,
            subtitle: " Bill Outstanding As On " + this.Ondate,
            subtitle1: this.ClientName,
            clntname: "Total Receivable Rs. " + this.NetOutstanding,
        };
        this.exportser.exportExceltry(reportData, "Bills Outstanding-receivables-" + this.ClientName + '(' + this.Client + ')' + startYear + ' - ' + endYear);
    };
    OutstandingOverseasClient.prototype.GetAccountName = function (icode) {
        var updateItem = this.AccountList.find(function (item) { return item.EXP_CODE === icode; });
        this.ClientName = updateItem.EXP_NAME_CITY;
    };
    OutstandingOverseasClient.prototype.getCompanyName = function () {
        var _this = this;
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsoncmp)
            .subscribe(function (data) {
            _this.Compname = data.Table[0].cmp_name;
        });
    };
    OutstandingOverseasClient.prototype.Download = function () {
        var pklogid = '276';
        this._router.navigate(['/accounts/report/ReportDownload/' + pklogid]);
    };
    OutstandingOverseasClient.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    OutstandingOverseasClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-OutstandingOverseasClient',
            template: __webpack_require__(/*! raw-loader!./rcbl-overseasagent.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], OutstandingOverseasClient);
    return OutstandingOverseasClient;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/Receivables/receivables-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/accounts/Accreport/Receivables/receivables-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ReceivablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivablesRoutingModule", function() { return ReceivablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rcbl_anyoneClnt_allbrnch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rcbl-anyoneClnt-allbrnch.component */ "./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.ts");
/* harmony import */ var _rcbl_anyoneClnt_ageing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rcbl-anyoneClnt-ageing.component */ "./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.ts");
/* harmony import */ var _rcbl_overseasagent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rcbl-overseasagent.component */ "./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.ts");
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
            title: 'Receivables'
        },
        children: [
            { path: 'rec', component: _rcbl_anyoneClnt_allbrnch_component__WEBPACK_IMPORTED_MODULE_2__["ReceivableAnyOneClientAllBranch"], data: { title: '' } },
            { path: 'age', component: _rcbl_anyoneClnt_ageing_component__WEBPACK_IMPORTED_MODULE_3__["ReceivableAnyOneClientAgeing"], data: { title: '' } },
            { path: 'overseas', component: _rcbl_overseasagent_component__WEBPACK_IMPORTED_MODULE_4__["OutstandingOverseasClient"], data: { title: '' } },
        ]
    }
];
var ReceivablesRoutingModule = /** @class */ (function () {
    function ReceivablesRoutingModule() {
    }
    ReceivablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReceivablesRoutingModule);
    return ReceivablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/Receivables/receivables.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/Accreport/Receivables/receivables.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReceivablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivablesComponent", function() { return ReceivablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReceivablesComponent = /** @class */ (function () {
    function ReceivablesComponent() {
    }
    ReceivablesComponent.prototype.ngOnInit = function () {
    };
    ReceivablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receivables',
            template: __webpack_require__(/*! raw-loader!./receivables.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/Receivables/receivables.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReceivablesComponent);
    return ReceivablesComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/Receivables/receivables.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Accreport/Receivables/receivables.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReceivablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivablesModule", function() { return ReceivablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _receivables_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receivables-routing.module */ "./src/app/accounts/Accreport/Receivables/receivables-routing.module.ts");
/* harmony import */ var _rcbl_anyoneClnt_allbrnch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rcbl-anyoneClnt-allbrnch.component */ "./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-allbrnch.component.ts");
/* harmony import */ var _rcbl_anyoneClnt_ageing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rcbl-anyoneClnt-ageing.component */ "./src/app/accounts/Accreport/Receivables/rcbl-anyoneClnt-ageing.component.ts");
/* harmony import */ var _rcbl_overseasagent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rcbl-overseasagent.component */ "./src/app/accounts/Accreport/Receivables/rcbl-overseasagent.component.ts");
/* harmony import */ var _receivables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receivables.component */ "./src/app/accounts/Accreport/Receivables/receivables.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ReceivablesModule = /** @class */ (function () {
    function ReceivablesModule() {
    }
    ReceivablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_rcbl_anyoneClnt_allbrnch_component__WEBPACK_IMPORTED_MODULE_3__["ReceivableAnyOneClientAllBranch"], _rcbl_anyoneClnt_ageing_component__WEBPACK_IMPORTED_MODULE_4__["ReceivableAnyOneClientAgeing"], _receivables_component__WEBPACK_IMPORTED_MODULE_6__["ReceivablesComponent"], _rcbl_overseasagent_component__WEBPACK_IMPORTED_MODULE_5__["OutstandingOverseasClient"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _receivables_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReceivablesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_10__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ]
        })
    ], ReceivablesModule);
    return ReceivablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=Receivables-receivables-module.js.map