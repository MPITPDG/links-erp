(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Request-staffrequest-module"],{

/***/ "./src/app/accounts/Request/staffrequest.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/accounts/Request/staffrequest.module.ts ***!
  \*********************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _staffrequest_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staffrequest.routing */ "./src/app/accounts/Request/staffrequest.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_staffrequest_routing__WEBPACK_IMPORTED_MODULE_6__["RequestRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            ],
            declarations: [],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], RequestModule);
    return RequestModule;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staffrequest.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/accounts/Request/staffrequest.routing.ts ***!
  \**********************************************************/
/*! exports provided: RequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRoutingModule", function() { return RequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guard/finanacial-year-auth-guard.service */ "./src/app/shared/guard/finanacial-year-auth-guard.service.ts");
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
            title: ' Request'
        },
        children: [
            {
                path: 'staff',
                loadChildren: './staff/staff-purchase.module#staffPurchaseModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
        ]
    }
];
var RequestRoutingModule = /** @class */ (function () {
    function RequestRoutingModule() {
    }
    RequestRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RequestRoutingModule);
    return RequestRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Request-staffrequest-module.js.map