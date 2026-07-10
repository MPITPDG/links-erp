(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consignment-job-export-job-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/consignment/job/job.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/consignment/job/job.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>EXPORT - {{Header}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite\" *ngIf=\"viewType==='MISC'\">\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"3\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>{{Header | titlecase}}</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width80\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Job No.\r\n                                <span class=\"col-form-span-error\">*</span>\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"SearchJobNo\" [maxlength]=\"15\" class=\"form-control width120\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-warning\" (click)=\"search();\" [hidden]=\"IsDisabled\" #searchButton>\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i>&nbsp;Search</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-sm-new bgwhite\" *ngIf=\"viewType==='WHS' || viewType==='Add'\">\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>{{Header | titlecase}}</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Job No.\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"JobNo\" [maxlength]=\"15\" [disabled]=\"true\" class=\"form-control width120\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Client Name\r\n                                <span class=\"col-form-span-error\">*</span>\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <ng-select [items]=\"ClientNameList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"ClientName\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>No. of PKgs\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"NoOfPackages\" [maxlength]=\"15\" [OnlyNumber]=\"true\" class=\"form-control width120\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Narration\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <textarea [(ngModel)]=\"Narration\" class=\"form-control\" rows=\"3\"></textarea>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"2\">\r\n                        <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-primary\" (click)=\"submit();\" #submitButton>\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-send-o\"></i>&nbsp;Submit</span>\r\n                        </button>\r\n                        <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-danger\" (click)=\"reset();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>&nbsp;Reset</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/export/consignment/job/export-job.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/export/consignment/job/export-job.module.ts ***!
  \*************************************************************/
/*! exports provided: ExportJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportJobModule", function() { return ExportJobModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _export_job_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./export-job.routing */ "./src/app/export/consignment/job/export-job.routing.ts");
/* harmony import */ var _job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job.component */ "./src/app/export/consignment/job/job.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ExportJobModule = /** @class */ (function () {
    function ExportJobModule() {
    }
    ExportJobModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_export_job_routing__WEBPACK_IMPORTED_MODULE_8__["ExportJobRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_job_component__WEBPACK_IMPORTED_MODULE_9__["JobComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportJobModule);
    return ExportJobModule;
}());



/***/ }),

/***/ "./src/app/export/consignment/job/export-job.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/export/consignment/job/export-job.routing.ts ***!
  \**************************************************************/
/*! exports provided: ExportJobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportJobRoutingModule", function() { return ExportJobRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job.component */ "./src/app/export/consignment/job/job.component.ts");
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
            title: 'Job'
        },
        children: [
            { path: 'job/:job-type', component: _job_component__WEBPACK_IMPORTED_MODULE_2__["JobComponent"], data: { title: 'Job' } },
        ]
    }
];
var ExportJobRoutingModule = /** @class */ (function () {
    function ExportJobRoutingModule() {
    }
    ExportJobRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportJobRoutingModule);
    return ExportJobRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/consignment/job/job.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/export/consignment/job/job.component.ts ***!
  \*********************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/common-font-changer.directive */ "./src/app/shared/common-font-changer.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobComponent = /** @class */ (function () {
    function JobComponent(_dataService, _toasterService, _loginService, _disable, _route) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._disable = _disable;
        this._route = _route;
        this.Header = '';
        this.SearchJobNo = '';
        this.Id = '0';
        this.JobNo = '';
        this.ClientName = null;
        this.ClientNameList = [];
        this.NoOfPackages = '';
        this.Narration = '';
        this.JobType = '';
        this.ErrorMessage = '';
        this.viewType = 'Search';
        this.paramType = '';
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.reset();
        this._route.params.subscribe(function (params) {
            _this.paramType = params["job-type"];
            if (_this.paramType == 'misc') {
                _this.Header = 'MISCELLANEOUS JOBNO';
                _this.viewType = 'MISC';
                _this._loginService.verifyRights(311, '')
                    .subscribe(function (data) {
                    _this._loginService.checkVerify('View', data); //For verify user access
                });
            }
            else if (_this.paramType == 'Add') {
                _this.Header = 'MISCELLANEOUS JOBNO';
                _this.viewType = 'Add';
                _this._loginService.verifyRights(311, '')
                    .subscribe(function (data) {
                    _this._loginService.checkVerify('Add', data); //For verify user access
                });
            }
            else if (_this.paramType == 'whs') {
                _this.Header = 'WAREHOUSE JOBNO';
                _this.viewType = 'WHS';
                _this._loginService.verifyRights(311, '')
                    .subscribe(function (data) {
                    _this._loginService.checkVerify('Add', data); //For verify user access
                });
            }
            else {
                _this.viewType = '';
            }
            _this.JobType = (_this.viewType == "Add") ? "MISC" : _this.viewType;
            _this.getClientData();
        });
    };
    JobComponent.prototype.getClientData = function () {
        var _this = this;
        var jsonExport = {
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData('Export/GetExportConsignmentJobClientData', jsonExport)
            .subscribe(function (data) {
            _this.ClientNameList = data.Table;
        });
    };
    JobComponent.prototype.search = function () {
        var _this = this;
        //  console.log(this.ClientNameList.filter((filterby) => filterby.VALUEFIELD == 'E105055'));
        if (this.SearchJobNo.length != 15) {
            this.ErrorMessage = "Invalid JobNo -- Please Check";
        }
        else {
            this.ErrorMessage = "";
            this._disable.disableButton(this.searchButton);
            var jsonExport = {
                jobno: this.SearchJobNo,
                cmpcode: this._loginService.getLogin()[0].CMPCODE,
                citycode: this._loginService.getLogin()[0].CITYCODE
            };
            this._dataService.getData('Export/ExportConsignmentJobSearch', jsonExport)
                .subscribe(function (data) {
                _this.viewType = 'WHS';
                _this._disable.enableButton(_this.searchButton);
                if (data.Table.length > 0) {
                    _this.SearchJobNo = '';
                    _this.Id = data.Table[0].PK_ID;
                    _this.JobNo = data.Table[0].JOBNO;
                    _this.ClientName = data.Table[0].CLIENT_CODE;
                    _this.NoOfPackages = data.Table[0].NOOFPKGS;
                    _this.Narration = data.Table[0].NARRATION;
                }
                else {
                    _this._toasterService.toast('info', 'Alert', "Data Not Found!!!!");
                }
            });
        }
    };
    JobComponent.prototype.submit = function () {
        var _this = this;
        if (this.ClientName == null) {
            this._toasterService.toast('error', 'Alert', 'Please select client name!');
        }
        else {
            this._disable.disableButton(this.submitButton);
            var jsonExport = {
                Id: this.Id,
                JobNo: this.JobNo,
                ClientName: this.ClientName,
                NoOfPackages: this.NoOfPackages,
                Narration: this.Narration,
                JobType: this.JobType,
                MakerId: this._loginService.getLogin()[0].CMPID,
                MakerIp: this._loginService.getLogin()[0].CMPID,
                CmpCode: this._loginService.getLogin()[0].CMPCODE,
                CityCode: this._loginService.getLogin()[0].CITYCODE,
                CityCode1: this._loginService.getLogin()[0].CITYCODE1
            };
            this._dataService.Common('Export/ExportConsignmentJobIU', jsonExport)
                .subscribe(function (data) {
                _this._disable.enableButton(_this.submitButton);
                //  console.log(data);
                if (data.Table[0].STATUS.split('#')[0] == 100) {
                    alert(data.Table[0].STATUS.split('#')[1]);
                    _this._toasterService.toast('success', 'Alert', data.Table[0].STATUS.split('#')[1]);
                }
                else if (data.Table[0].STATUS.split('#')[0] == 200) {
                    _this._toasterService.toast('info', 'Alert', 'Jobno is already Exists.');
                }
            });
        }
    };
    JobComponent.prototype.reset = function () {
        this.SearchJobNo = '';
        this.JobNo = "";
        this.ClientName = null;
        this.NoOfPackages = "";
        this.Narration = "";
    };
    JobComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JobComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JobComponent.prototype, "submitButton", void 0);
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/consignment/job/job.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], JobComponent);
    return JobComponent;
}());



/***/ })

}]);
//# sourceMappingURL=consignment-job-export-job-module.js.map