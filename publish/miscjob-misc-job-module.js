(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["miscjob-misc-job-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/import/master/miscjob/data-entry.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/master/miscjob/data-entry.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"3\">\r\n                        <span class=\"col-form-span-label\"><b>Miscellaneous Job</b></span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width90\">\r\n                        <span class=\"col-form-span-label\">Job No.</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <input type=\"text\" [(ngModel)]=\"JobNo\" [disabled]=\"true\" class=\"form-control width120\"\r\n                            [maxlength]=\"15\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Client Name\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <select class=\"form-control\" [(ngModel)]=\"ClientName\">\r\n                            <option value=\"0\">-- Select --</option>\r\n                            <ng-template ngFor let-item [ngForOf]=\"ClientList\">\r\n                                <option value=\"{{item.DATAVALUEFIELD}}\">{{item.DATATEXTFIELD}}</option>\r\n                            </ng-template>\r\n                        </select>\r\n                    </td>\r\n                    <td class=\"width200\">\r\n                        <span class=\"col-form-span-error\" *ngIf=\"ErrorType=='1'\">Please enter client name.</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">No. of PKgs\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"NoOfPkgs\" class=\"form-control width120\" [maxlength]=\"10\"\r\n                            [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-error\" *ngIf=\"ErrorType=='2'\">Please enter no. of pkgs.</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Narration</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <textarea class=\"form-control\" [(ngModel)]=\"Narration\" rows=\"15\"></textarea>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"submit();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"{{(Id=='0')? 'fa fa-save' : 'fa fa-refresh'}}\"></i> {{ (Id=='0')? 'Save' :\r\n                                'Update'}}</span>\r\n                        </button>&nbsp;\r\n                        <button type=\"button\" name=\"cancelButton\" class=\"btn btn-sm btn-danger\" (click)=\"cancel();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-times-circle\"></i> Cancel</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/import/master/miscjob/misc-job.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/master/miscjob/misc-job.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/import/master/miscjob/search.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/master/miscjob/search.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>MISCELLANEOUS IMPORT JOBNO - SEARCH</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"3\">\r\n                        <span class=\"col-form-span-label\"><b>Miscellaneous Job</b></span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width90\">\r\n                        <span class=\"col-form-span-label\">Job No.\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td class=\"width130\">\r\n                        <input type=\"text\" [(ngModel)]=\"Input\" class=\"form-control width120\"\r\n                            [maxlength]=\"15\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-error\" *ngIf=\"Input.trim().length==1\">Please enter job no</span>\r\n                        <span class=\"col-form-span-error\" *ngIf=\"Input.trim().length>1&&Input.trim().length<=14\">Please enter valid job no</span>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-info\" (click)=\"search();\" [disabled]=\"Input.trim().length!=15\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i>&nbsp;Search</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/import/master/miscjob/data-entry.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/import/master/miscjob/data-entry.component.ts ***!
  \***************************************************************/
/*! exports provided: EntryMiscJobMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryMiscJobMasterComponent", function() { return EntryMiscJobMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntryMiscJobMasterComponent = /** @class */ (function () {
    function EntryMiscJobMasterComponent(_dataService, _loginService, _router, _route, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._router = _router;
        this._route = _route;
        this._loaderService = _loaderService;
        this.Header = "VESSEL MASTER - ADD";
        this.Id = '0';
        this.JobNo = "";
        this.ClientName = "0";
        this.NoOfPkgs = '';
        this.Narration = '';
        this.ClientList = [];
        this.ErrorType = null;
    }
    EntryMiscJobMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            if (params["param"]) {
                _this.JobNo = params["param"];
                _this.Header = 'IMPORT MISCELLANEOUS JOBNO - UPDATE';
                _this.verifyPermission(348, "Modify");
            }
            else {
                _this.Header = 'IMPORT MISCELLANEOUS JOBNO - ADD';
                _this.verifyPermission(348, "Add");
            }
        });
    };
    EntryMiscJobMasterComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (_this._loginService.checkVerify(userMode, data)) {
                _this.fillData();
                if (_this.JobNo != '') {
                    _this.populateForEdit(_this.JobNo);
                }
            }
        });
    };
    EntryMiscJobMasterComponent.prototype.fillData = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Import/GetClient", { citycode: this._loginService.getLogin()[0].CITYCODE })
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.ClientList = data.Table;
        });
    };
    EntryMiscJobMasterComponent.prototype.populateForEdit = function (jobno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            JobNo: jobno,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Import/MiscellaneousDetails", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.Id = data.Table[0]["PK_ID"];
            _this.JobNo = data.Table[0]["JOBNO"];
            _this.ClientName = data.Table[0]["CLIENT_CODE"];
            _this.NoOfPkgs = data.Table[0]["NOOFPKGS"];
            _this.Narration = data.Table[0]["NARRATION"];
        });
    };
    EntryMiscJobMasterComponent.prototype.submit = function () {
        var _this = this;
        if (this.ClientName == '0') {
            this.ErrorType = '1';
            return false;
        }
        if (this.NoOfPkgs.trim().length == 0) {
            this.ErrorType = '2';
            return false;
        }
        this.ErrorType = null;
        var _jsonData = {
            Id: this.Id,
            JobNo: this.JobNo,
            ClientName: this.ClientName,
            NoOfPkgs: this.NoOfPkgs,
            Narration: this.Narration,
            MakerIp: this._loginService.getLogin()[0].MAKERIP,
            MakerId: this._loginService.getLogin()[0].CMPID,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CityCode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._loaderService.display(true);
        this._dataService.Common("Import/Imp_Miscellaneous_IU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table[0]["STATUS"].split("#")[0] == "100") {
                alert(data.Table[0]["STATUS"].split("#")[1]);
                _this.cancel();
            }
            else if (data.Table[0]["STATUS"].split("#")[0] == "200") {
                alert('Import Jobno is already Exists.');
            }
            else {
                alert(data.Table[0]["STATUSMSG"]);
            }
        });
    };
    EntryMiscJobMasterComponent.prototype.cancel = function () {
        if (this.Id == '0') {
            this.reset();
        }
        else {
            this._router.navigate(["./import/master/misc-job/search"]);
        }
    };
    EntryMiscJobMasterComponent.prototype.reset = function () {
        this.Id = "0";
        this.JobNo = "";
        this.ClientName = "0";
        this.NoOfPkgs = "";
        this.Narration = "";
    };
    EntryMiscJobMasterComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    EntryMiscJobMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-import-master-misc-job-data-entry',
            template: __webpack_require__(/*! raw-loader!./data-entry.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/master/miscjob/data-entry.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], EntryMiscJobMasterComponent);
    return EntryMiscJobMasterComponent;
}());



/***/ }),

/***/ "./src/app/import/master/miscjob/misc-job.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/import/master/miscjob/misc-job.component.ts ***!
  \*************************************************************/
/*! exports provided: MiscJobMasterImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscJobMasterImportComponent", function() { return MiscJobMasterImportComponent; });
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

var MiscJobMasterImportComponent = /** @class */ (function () {
    function MiscJobMasterImportComponent() {
    }
    MiscJobMasterImportComponent.prototype.ngOnInit = function () {
    };
    MiscJobMasterImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./misc-job.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/master/miscjob/misc-job.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MiscJobMasterImportComponent);
    return MiscJobMasterImportComponent;
}());



/***/ }),

/***/ "./src/app/import/master/miscjob/misc-job.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/import/master/miscjob/misc-job.module.ts ***!
  \**********************************************************/
/*! exports provided: MiscJobMasterImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscJobMasterImportModule", function() { return MiscJobMasterImportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _misc_job_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc-job.routing */ "./src/app/import/master/miscjob/misc-job.routing.ts");
/* harmony import */ var _misc_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc-job.component */ "./src/app/import/master/miscjob/misc-job.component.ts");
/* harmony import */ var _data_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-entry.component */ "./src/app/import/master/miscjob/data-entry.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.component */ "./src/app/import/master/miscjob/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MiscJobMasterImportModule = /** @class */ (function () {
    function MiscJobMasterImportModule() {
    }
    MiscJobMasterImportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_misc_job_routing__WEBPACK_IMPORTED_MODULE_4__["MiscJobImportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [
                _misc_job_component__WEBPACK_IMPORTED_MODULE_5__["MiscJobMasterImportComponent"],
                _data_entry_component__WEBPACK_IMPORTED_MODULE_6__["EntryMiscJobMasterComponent"],
                _search_component__WEBPACK_IMPORTED_MODULE_7__["SearchMiscJobMasterComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], MiscJobMasterImportModule);
    return MiscJobMasterImportModule;
}());



/***/ }),

/***/ "./src/app/import/master/miscjob/misc-job.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/import/master/miscjob/misc-job.routing.ts ***!
  \***********************************************************/
/*! exports provided: MiscJobImportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscJobImportRoutingModule", function() { return MiscJobImportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _misc_job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc-job.component */ "./src/app/import/master/miscjob/misc-job.component.ts");
/* harmony import */ var _data_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-entry.component */ "./src/app/import/master/miscjob/data-entry.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/import/master/miscjob/search.component.ts");
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
            title: 'Vessel'
        },
        children: [
            { path: '', component: _misc_job_component__WEBPACK_IMPORTED_MODULE_2__["MiscJobMasterImportComponent"], data: { title: 'Home' } },
            { path: 'data-entry', component: _data_entry_component__WEBPACK_IMPORTED_MODULE_3__["EntryMiscJobMasterComponent"], data: { title: 'Data Entry' } },
            { path: 'update-entry/:param', component: _data_entry_component__WEBPACK_IMPORTED_MODULE_3__["EntryMiscJobMasterComponent"], data: { title: 'Update Entry' } },
            { path: 'search', component: _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchMiscJobMasterComponent"], data: { title: 'Search' } },
        ]
    }
];
var MiscJobImportRoutingModule = /** @class */ (function () {
    function MiscJobImportRoutingModule() {
    }
    MiscJobImportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MiscJobImportRoutingModule);
    return MiscJobImportRoutingModule;
}());



/***/ }),

/***/ "./src/app/import/master/miscjob/search.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/import/master/miscjob/search.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchMiscJobMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMiscJobMasterComponent", function() { return SearchMiscJobMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchMiscJobMasterComponent = /** @class */ (function () {
    function SearchMiscJobMasterComponent(_dataService, _loginService, _router, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._router = _router;
        this._loaderService = _loaderService;
        this.Input = '';
    }
    SearchMiscJobMasterComponent.prototype.ngOnInit = function () {
        this.verifyPermission(348, "View");
    };
    SearchMiscJobMasterComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this._loginService.checkVerify(userMode, data);
        });
    };
    SearchMiscJobMasterComponent.prototype.search = function () {
        this.populateForEdit(this.Input);
    };
    SearchMiscJobMasterComponent.prototype.populateForEdit = function (jobno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            JobNo: jobno,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Import/MiscellaneousDetails", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                _this._router.navigate(["./import/master/misc-job/update-entry", jobno]);
            }
            else {
                alert("No job found!!!!!");
            }
        });
    };
    SearchMiscJobMasterComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    SearchMiscJobMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-import-master-misc-job-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/master/miscjob/search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], SearchMiscJobMasterComponent);
    return SearchMiscJobMasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=miscjob-misc-job-module.js.map