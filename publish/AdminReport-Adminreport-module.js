(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminReport-Adminreport-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/AdminReport/Adminreport.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/AdminReport/Adminreport.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accounts/MisReport/AdminReport/Adminreport-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/accounts/MisReport/AdminReport/Adminreport-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AdminReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportRoutingModule", function() { return AdminReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guard/finanacial-year-auth-guard.service */ "./src/app/shared/guard/finanacial-year-auth-guard.service.ts");
/* harmony import */ var _Adminreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Adminreport.component */ "./src/app/accounts/MisReport/AdminReport/Adminreport.component.ts");
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
            title: 'AdminReport'
        },
        children: [
            { path: '', component: _Adminreport_component__WEBPACK_IMPORTED_MODULE_3__["AdminReportComponent"], data: { title: 'Home' } },
            {
                path: 'ClientRegister',
                loadChildren: './ClientRegister/clientregister.module#ClientRegisterModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
        ]
    }
];
var AdminReportRoutingModule = /** @class */ (function () {
    function AdminReportRoutingModule() {
    }
    AdminReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminReportRoutingModule);
    return AdminReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/AdminReport/Adminreport.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/MisReport/AdminReport/Adminreport.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReportComponent", function() { return AdminReportComponent; });
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

var AdminReportComponent = /** @class */ (function () {
    function AdminReportComponent() {
    }
    AdminReportComponent.prototype.ngOnInit = function () {
    };
    AdminReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Adminreport',
            template: __webpack_require__(/*! raw-loader!./Adminreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/AdminReport/Adminreport.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AdminReportComponent);
    return AdminReportComponent;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/AdminReport/Adminreport.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/MisReport/AdminReport/Adminreport.module.ts ***!
  \**********************************************************************/
/*! exports provided: AccountAdminReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAdminReportModule", function() { return AccountAdminReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Adminreport_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Adminreport-routing.module */ "./src/app/accounts/MisReport/AdminReport/Adminreport-routing.module.ts");
/* harmony import */ var _Adminreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Adminreport.component */ "./src/app/accounts/MisReport/AdminReport/Adminreport.component.ts");
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








var AccountAdminReportModule = /** @class */ (function () {
    function AccountAdminReportModule() {
    }
    AccountAdminReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Adminreport_component__WEBPACK_IMPORTED_MODULE_3__["AdminReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _Adminreport_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AccountAdminReportModule);
    return AccountAdminReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=AdminReport-Adminreport-module.js.map