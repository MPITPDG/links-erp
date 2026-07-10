(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notoverreport-notover-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n\r\n           \r\n            <div class=\"row  xyscroll\"  style=\"height: 550px;\">\r\n                <table class=\"table table-bordered table-sm-new table-striped  \" >\r\n                    <thead>\r\n                        <tr class=\"title-head formheading table-primary\">\r\n                        \r\n                            <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">\tEntry Date</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Cheque No</th>      \r\n                            <th class=\"col-form-span-label\" align=\"center\">Cheque Date</th>     \r\n                            <th class=\"col-form-span-label\" align=\"center\">Bank</th>     \r\n                            <th class=\"col-form-span-label\" align=\"center\">Account Name</th>      \r\n                            <th class=\"col-form-span-label\" align=\"center\">Amount </th>                        \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"NotOverList.length > 0\">\r\n                        <tr *ngFor=\"let data of NotOverList\">\r\n                            <td ><span  class=\"col-form-span-label anchor-link\" (click)=\"OpenPrint(data.entryno,data.status)\" >{{data.entryno}}</span> </td> \r\n                            <td  ><span class=\"col-form-span-label\">{{data.entrydt}}</span>  </td>                             \r\n                            <td  ><span class=\"col-form-span-label\">{{data.chequeno}}</span>  </td>\r\n                            <td  ><span class=\"col-form-span-label\">{{data.chequedt}}</span>  </td>\r\n                            <td  ><span class=\"col-form-span-label\">{{data.bank}}</span>  </td>\r\n                            <td  ><span class=\"col-form-span-label\">{{data.acctname}}</span>  </td>\r\n                            <td  ><span class=\"col-form-span-label\">{{data.actualamount}}</span>  </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <!-- <tr> <td colspan=\"7\" class=\"centerlabel\">\r\n                       &nbsp;\r\n                    </td>\r\n            </tr> -->\r\n                </table>\r\n            </div>\r\n            <div align=\"right\">\r\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportNotOver()\" > <span\r\n                    class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                    Export To Excel </span></button>\r\n            </div>\r\n             \r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        \r\n                      \r\n    </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotOverReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotOverReport", function() { return NotOverReport; });
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








var NotOverReport = /** @class */ (function () {
    function NotOverReport(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.NotOverList = [];
        this.exceldata_list = [];
        this.dataForExcel = [];
        this.exceltotdata_list = [];
        this.dataForTotExcel = [];
    }
    NotOverReport.prototype.ngOnInit = function () {
        var _this = this;
        this._loaderService.display(true);
        this.verifyPermission('161', 'View');
        this.getCompanyName();
        var jsonList = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/Acc_Rpt_NotOver_List", jsonList)
            .subscribe(function (data) {
            _this.NotOverList = data.Table;
            _this.exceldata_list = data.Table1;
            _this.TotLable = data.Table2[0].TOTALAMOUNT;
            _this.total = data.Table2[0].Totactualamount;
            //this.exceltotdata_list=data.Table2;
            _this.exceldata_list.forEach(function (x) { delete x.status; });
            _this.exceldata_list.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
                _this._loaderService.display(false);
            });
            //     this.exceltotdata_list.forEach((row: any) => {
            //         this.dataForTotExcel.push(Object.values(row))
            //       this._loaderService.display(false)
            //    })
        });
    };
    NotOverReport.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    NotOverReport.prototype.ExportNotOver = function () {
        var reportData = {
            data: this.dataForExcel,
            headers: Object.keys(this.exceldata_list[0]),
            novertotal: ['', '', '', '', '', 'TOTAL AMOUNT', this.total],
            pagetype: "NotOverReport",
            title: this.Compname
        };
        this.exportser.exportExceltry(reportData, "NotOverReport");
        //this.dataForExcel=[];
    };
    NotOverReport.prototype.getCompanyName = function () {
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
    NotOverReport.prototype.OpenPrint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print ')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-Print/' + No + '/', "PI Print", toolbar);
            }
            if (Type == "JV") {
                window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
            }
            if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-Print/' + No + '/', "CN Print", toolbar);
            }
            if (Type == "II") {
                // window.open('./#/popup/Account-Invoice-Print/' + No + '/' , "INV Print", toolbar);   
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
            if (Type == "SI") {
                return false;
            }
            if (Type == "BI") {
                return false;
            }
            else
                //{  window.open('./#/popup/Account-BP-Print/' + No + '/' + Type + '/', "BR Print", toolbar);  }
                window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/', "CASH BOOK - Bank Payment", toolbar);
        }
        else {
            return false;
        }
    };
    NotOverReport.ctorParameters = function () { return [
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
    NotOverReport = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-CashBookNotOver-search',
            template: __webpack_require__(/*! raw-loader!./cashbooknotover-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], NotOverReport);
    return NotOverReport;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/notoverreport/notover-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/accounts/Accreport/notoverreport/notover-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: NotOverRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotOverRoutingModules", function() { return NotOverRoutingModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cashbooknotover_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashbooknotover-list.component */ "./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.ts");
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
            title: 'NotOverReport'
        },
        children: [
            { path: '', component: _cashbooknotover_list_component__WEBPACK_IMPORTED_MODULE_2__["NotOverReport"], data: { title: '' } },
        ]
    }
];
var NotOverRoutingModules = /** @class */ (function () {
    function NotOverRoutingModules() {
    }
    NotOverRoutingModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotOverRoutingModules);
    return NotOverRoutingModules;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/notoverreport/notover.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/Accreport/notoverreport/notover.module.ts ***!
  \********************************************************************/
/*! exports provided: NotOverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotOverModule", function() { return NotOverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notover_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notover-routing.module */ "./src/app/accounts/Accreport/notoverreport/notover-routing.module.ts");
/* harmony import */ var _cashbooknotover_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashbooknotover-list.component */ "./src/app/accounts/Accreport/notoverreport/cashbooknotover-list.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NotOverModule = /** @class */ (function () {
    function NotOverModule() {
    }
    NotOverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cashbooknotover_list_component__WEBPACK_IMPORTED_MODULE_3__["NotOverReport"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notover_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotOverRoutingModules"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], NotOverModule);
    return NotOverModule;
}());



/***/ })

}]);
//# sourceMappingURL=notoverreport-notover-module.js.map