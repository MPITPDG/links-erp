(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consignment-branchjobtransfer-branch-job-transfer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>TRANSFER JOB BRANCH</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Genaral Details</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Old Job No.<span class=\"col-form-span-error\">*</span>\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"OldJobNo\" [maxlength]=\"15\" class=\"form-control width120\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>BRANCH\r\n                                <span class=\"col-form-span-error\">*</span>\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <ng-select [items]=\"BranchList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" placeholder=\"--Select Branch--\" [(ngModel)]=\"Branch\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>User Remarks<span class=\"col-form-span-error\">*</span>\r\n                            </b>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <textarea [(ngModel)]=\"UserRemarks\" class=\"form-control\" rows=\"3\"></textarea>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"2\">\r\n                        <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-primary\" (click)=\"submit();\" #submitButton>\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-send-o\"></i>&nbsp;Submit</span>\r\n                        </button>\r\n                        <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-danger\" (click)=\"reset();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>&nbsp;Reset</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BranchJobTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchJobTransferComponent", function() { return BranchJobTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/common-font-changer.directive */ "./src/app/shared/common-font-changer.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchJobTransferComponent = /** @class */ (function () {
    function BranchJobTransferComponent(_dataService, _toasterService, _loginService, _disable) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._disable = _disable;
        this.TransferJobList = [];
        this.OldJobNo = '';
        this.Branch = null;
        this.BranchList = [];
        this.UserRemarks = '';
        this.ErrorMessage = '';
    }
    BranchJobTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(323, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Add', data); //For verify user access
        });
        this.getBranchData();
    };
    BranchJobTransferComponent.prototype.getBranchData = function () {
        var _this = this;
        var jsonExport = {
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData('Export/GetExportConsignmentBranchFillDropdown', jsonExport)
            .subscribe(function (data) {
            _this.BranchList = data.Table;
        });
    };
    BranchJobTransferComponent.prototype.submit = function () {
        var _this = this;
        if (this.OldJobNo.length != 15) {
            this._toasterService.toast('error', 'Alert', 'Invalid JOB No. !');
        }
        else if (this.Branch == null) {
            this._toasterService.toast('error', 'Alert', 'Please Select Transfer Branch !');
        }
        else if (this.UserRemarks == '') {
            this._toasterService.toast('error', 'Alert', 'Please Enter Remark !');
        }
        else {
            var Mode = (this.OldJobNo.substring(8, 7) == '1') ? 'Sea' : 'Air';
            var BranchName = this.BranchList.filter(function (filterby) { return filterby.VALUEFIELD == _this.Branch; })[0].TEXTFIELD;
            if (confirm("Are you sure you want to Transfer " + Mode + " Job No. [" + this.OldJobNo + "] \n from [" + this._loginService.getLogin()[0].CITYNAME + "] to Selected Branch [" + BranchName + "] ?")) {
                this._disable.disableButton(this.submitButton);
                var jsonExport = {
                    OldJobNo: this.OldJobNo,
                    Branch: this.Branch,
                    UserRemarks: this.UserRemarks,
                    CmpCode: this._loginService.getLogin()[0].CMPCODE,
                    MakerId: this._loginService.getLogin()[0].CMPID,
                    MakerIp: this._loginService.getLogin()[0].CMPID,
                    CityCode: this._loginService.getLogin()[0].CITYCODE
                };
                this._dataService.Common('Export/ExportConsignmentBranchJobTransferI', jsonExport)
                    .subscribe(function (data) {
                    _this._disable.enableButton(_this.submitButton);
                    if (data.Table.length > 0) {
                        if (data.Table[0].STATUS == '100') {
                            _this.TransferJobList = data.Table1;
                            _this._toasterService.toast('success', 'Alert', data.Table[0].STATUMSG);
                        }
                        else {
                            _this._toasterService.toast('warning', 'Alert', data.Table[0].STATUMSG);
                        }
                    }
                    else {
                        _this._toasterService.toast('error', 'Alert', 'No Record Found.');
                    }
                });
            }
        }
    };
    BranchJobTransferComponent.prototype.reset = function () {
        this.OldJobNo = '';
        this.Branch = null;
        this.UserRemarks = '';
    };
    BranchJobTransferComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BranchJobTransferComponent.prototype, "submitButton", void 0);
    BranchJobTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./branch-job-transfer.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonService"]])
    ], BranchJobTransferComponent);
    return BranchJobTransferComponent;
}());



/***/ }),

/***/ "./src/app/export/consignment/branchjobtransfer/branch-job-transfer.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/export/consignment/branchjobtransfer/branch-job-transfer.module.ts ***!
  \************************************************************************************/
/*! exports provided: BranchJobTrasExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchJobTrasExportModule", function() { return BranchJobTrasExportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _branch_job_transfer_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch-job-transfer.routing */ "./src/app/export/consignment/branchjobtransfer/branch-job-transfer.routing.ts");
/* harmony import */ var _branch_job_transfer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch-job-transfer.component */ "./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BranchJobTrasExportModule = /** @class */ (function () {
    function BranchJobTrasExportModule() {
    }
    BranchJobTrasExportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_branch_job_transfer_routing__WEBPACK_IMPORTED_MODULE_8__["BranchJobTrasExportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_branch_job_transfer_component__WEBPACK_IMPORTED_MODULE_9__["BranchJobTransferComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], BranchJobTrasExportModule);
    return BranchJobTrasExportModule;
}());



/***/ }),

/***/ "./src/app/export/consignment/branchjobtransfer/branch-job-transfer.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/export/consignment/branchjobtransfer/branch-job-transfer.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: BranchJobTrasExportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchJobTrasExportRoutingModule", function() { return BranchJobTrasExportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _branch_job_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-job-transfer.component */ "./src/app/export/consignment/branchjobtransfer/branch-job-transfer.component.ts");
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
            title: 'Branchjobtransfer'
        },
        children: [
            { path: 'branch-job-transfer', component: _branch_job_transfer_component__WEBPACK_IMPORTED_MODULE_2__["BranchJobTransferComponent"], data: { title: 'Branch Job Transfer' } },
        ]
    }
];
var BranchJobTrasExportRoutingModule = /** @class */ (function () {
    function BranchJobTrasExportRoutingModule() {
    }
    BranchJobTrasExportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BranchJobTrasExportRoutingModule);
    return BranchJobTrasExportRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=consignment-branchjobtransfer-branch-job-transfer-module.js.map