(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AirFreight-airfreight-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/AirFreight/invpurchase.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/AirFreight/invpurchase.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>{{subheader}}</b> </td>\r\n           </tr>\r\n                   <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>From Date</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptionsRpt \"\r\n                        class=\"form-control\"  [selDate]=\"FromDate\"    ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To Date </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptionsRpt \"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportData()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Export To Excel </span></button>&nbsp;\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/MisReport/AirFreight/airfreight-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/accounts/MisReport/AirFreight/airfreight-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AirFreightRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirFreightRoutingModule", function() { return AirFreightRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invpurchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invpurchase.component */ "./src/app/accounts/MisReport/AirFreight/invpurchase.component.ts");
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
            title: 'Air Freight '
        },
        children: [
            { path: ':Mode', component: _invpurchase_component__WEBPACK_IMPORTED_MODULE_2__["AIRFREIGHT"], data: { title: '' } },
        ],
    }
];
var AirFreightRoutingModule = /** @class */ (function () {
    function AirFreightRoutingModule() {
    }
    AirFreightRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AirFreightRoutingModule);
    return AirFreightRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/AirFreight/airfreight.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/MisReport/AirFreight/airfreight.module.ts ***!
  \********************************************************************/
/*! exports provided: AirFreightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirFreightModule", function() { return AirFreightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _airfreight_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airfreight-routing.module */ "./src/app/accounts/MisReport/AirFreight/airfreight-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _invpurchase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invpurchase.component */ "./src/app/accounts/MisReport/AirFreight/invpurchase.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AirFreightModule = /** @class */ (function () {
    function AirFreightModule() {
    }
    AirFreightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_invpurchase_component__WEBPACK_IMPORTED_MODULE_8__["AIRFREIGHT"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _airfreight_routing_module__WEBPACK_IMPORTED_MODULE_2__["AirFreightRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], AirFreightModule);
    return AirFreightModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/AirFreight/invpurchase.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/MisReport/AirFreight/invpurchase.component.ts ***!
  \************************************************************************/
/*! exports provided: AIRFREIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIRFREIGHT", function() { return AIRFREIGHT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AIRFREIGHT = /** @class */ (function () {
    function AIRFREIGHT(_dataService, _toasterService, loaderService, http, datePipe, _activatedRoute, _router, _loginService, exportser) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this.datePipe = datePipe;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.exportser = exportser;
        this.myDatePickerOptionsRpt = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '150px',
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
        this.DataList = [];
        this.DataListxl = [];
        this.dataForExcel = [];
        this.Branch = "";
        this.BranchName = "";
        this.City = "";
        this.Header = "MIS - AIR FREIGHT ";
        this.DataHeader = [];
        this.subheader = "MIS -AIR FREIGHT  ";
    }
    AIRFREIGHT.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.Mode = params["Mode"];
        });
        if (this.Mode == 'FRTP') {
            this.Header = 'FREIGHT PAYABLE';
            this.subheader = 'FREIGHT PAYABLE';
            this.verifyPermission('380', 'View');
        }
        else {
            this.Header = 'AIR FREIGHT';
            this.subheader = 'AIR FREIGHT';
            this.verifyPermission('339', 'View');
        }
        this.City = this._loginService.getLogin()[0].CITYNAME;
        // this.FromDate=this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE///this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
        // this.ToDate = new Date();
        // this.ToDate =  this._dataService.datechnge1(this.ToDate)
        this.Ondate = new Date();
        this.Ondatetime = new Date();
        this.Ondate = this._dataService.datechnge1(this.Ondate);
        this.GetCompanyName();
    };
    AIRFREIGHT.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    AIRFREIGHT.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    AIRFREIGHT.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    AIRFREIGHT.prototype.GetCompanyName = function () {
        var _this = this;
        var jsonmaster = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsonmaster).subscribe(function (data) {
            _this.cmpnyname = data.Table[0].cmp_name;
        });
    };
    AIRFREIGHT.prototype.ExportData = function () {
        if (this.Mode == 'FRTP') {
            this.ExportFrtPayable();
        }
        else {
            this.ExportInvPur();
        }
    };
    AIRFREIGHT.prototype.ExportInvPur = function () {
        var _this = this;
        if (!this.FromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.ToDate) {
            alert("Please select To Date.");
            return false;
        }
        var jsonItem = {
            FromDate: this.FromDate,
            ToDate: this.ToDate,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
        };
        this._dataService.getData("Accounts/ACC_MIS_AIRFREIGHT_STATEMENT", jsonItem)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                _this.DataList = data.Table;
                _this.DataList.forEach(function (row) {
                    _this.dataForExcel.push(Object.values(row)); // array format push 
                });
                var reportData = {
                    title: _this.cmpnyname,
                    subtitle: 'AIRFREIGHT STATEMENT REPORT',
                    subtitle1: ' Timeline:  ' + _this.FromDate + ' - ' + _this.ToDate,
                    subtitle2: ' Report Generated by : ' + _this._loginService.getLogin()[0].FULLNAME,
                    subtitle3: ' Report Generate on  : ' + _this.Ondate + ' ' + _this.datePipe.transform(_this.Ondatetime, 'hh:mm'),
                    data: _this.dataForExcel,
                    headers: Object.keys(_this.DataList[0]),
                    pagetype: "InvPurchase"
                };
                _this.exportser.exportExceltry(reportData, "AIRFREIGHT_STATEMENT_" + " - " + _this.FromDate + " - " + _this.ToDate);
                _this.dataForExcel = [];
            }
            else {
                _this._toasterService.toast("warning", "warning", "No Record Found !");
                _this.loaderService.display(false);
            }
        });
    };
    AIRFREIGHT.prototype.ExportFrtPayable = function () {
        var _this = this;
        if (!this.FromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.ToDate) {
            alert("Please select To Date.");
            return false;
        }
        var jsonItem = {
            FromDate: this.FromDate,
            ToDate: this.ToDate,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/ACC_RPT_AIRFRT_INVO_SERACH_LIST", jsonItem)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                _this.DataList = data.Table;
                _this.DataList.forEach(function (x) { delete x.PP_XRAY_PREPAID; });
                _this.DataList.forEach(function (x) { delete x.HAWB_TOT_RATE; });
                _this.DataList.forEach(function (x) { delete x.TOT_RATE; });
                for (var obj in _this.DataList) {
                    _this.DataListxl.push({
                        MAWBNO: _this.DataList[obj]["MAWBNO"],
                        MAWBDT: _this.DataList[obj]["MAWBDT"],
                        CHBL_WT: _this.DataList[obj]["CHBL_WT"],
                        MAWB_FREIGHT: _this.DataList[obj]["MAWB_FREIGHT"],
                        FRT_RATE: _this.DataList[obj]["FRT_RATE"],
                        FSC_RATE: _this.DataList[obj]["FSC_RATE"],
                        IRC_RATE: _this.DataList[obj]["IRC_RATE"],
                        XRAY_RATE: _this.DataList[obj]["XRAY_RATE"],
                        MAWB_TOT_AMT: _this.DataList[obj]["MAWB_TOT_AMT"],
                        HAWBNO: _this.DataList[obj]["HAWBNO"],
                        CON_NAME: _this.DataList[obj]["CON_NAME"],
                        HAWB_FREIGHT: _this.DataList[obj]["HAWB_FREIGHT"],
                        H_CHBL_WT: _this.DataList[obj]["H_CHBL_WT"],
                        HAWB_FRT_RATE: _this.DataList[obj]["HAWB_FRT_RATE"],
                        HAWB_FSC_RATE: _this.DataList[obj]["HAWB_FSC_RATE"],
                        HAWB_IRC_RATE: _this.DataList[obj]["HAWB_IRC_RATE"],
                        HAWB_XRAY_RATE: _this.DataList[obj]["HAWB_XRAY_RATE"],
                        CC_HAWB_TOT_AMT: _this.DataList[obj]["CC_HAWB_TOT_AMT"],
                        PP_FRTAMT: _this.DataList[obj]["PP_FRTAMT"],
                        BP_RATE: _this.DataList[obj]["BP_RATE"],
                        BP_AMT: _this.DataList[obj]["BP_AMT"]
                    });
                }
                _this.DataListxl.forEach(function (row) {
                    _this.dataForExcel.push(Object.values(row)); // array format push 
                });
                var reportData = {
                    title: 'FREIGHT PAYABLE FROM  ' + _this.FromDate + ' To ' + _this.ToDate,
                    subtitle: _this.cmpnyname,
                    data: _this.dataForExcel,
                    headers: ['Mawb No', 'Mawb Dt', 'CHBL Wt', 'Freight', 'Mawb Freight', 'Mawb Fsc', 'Mawb IRC', 'Mawb X-RAY', 'Mawb Total', 'Hawb No', 'Consignee', 'Hawb Freight', 'Hawb Chbl wt', 'Hawb Freight', 'Hawb FSC', 'Hawb IRC', 'Hawb X-RAY', 'Hawb Freight CC', 'Hawb Freight PP', 'Bus. Prom Rate', 'Bus.Prom Amt'],
                    pagetype: "FRTPAYABLE"
                };
                _this.exportser.exportExceltry(reportData, "FreightPayable");
                _this.dataForExcel = [];
            }
            else {
                _this._toasterService.toast("warning", "warning", "No Record Found !");
                _this.loaderService.display(false);
            }
        });
    };
    AIRFREIGHT.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] }
    ]; };
    AIRFREIGHT = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-InvPurchase',
            template: __webpack_require__(/*! raw-loader!./invpurchase.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/AirFreight/invpurchase.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], AIRFREIGHT);
    return AIRFREIGHT;
}());



/***/ })

}]);
//# sourceMappingURL=AirFreight-airfreight-module.js.map