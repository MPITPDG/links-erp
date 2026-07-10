(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OldEntry-oldentry-module"],{

/***/ "./src/app/accounts/OldEntry/oldentry.module.ts":
/*!******************************************************!*\
  !*** ./src/app/accounts/OldEntry/oldentry.module.ts ***!
  \******************************************************/
/*! exports provided: OldEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldEntryModule", function() { return OldEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _oldentry_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oldentry.routing */ "./src/app/accounts/OldEntry/oldentry.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OldEntryModule = /** @class */ (function () {
    function OldEntryModule() {
    }
    OldEntryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_oldentry_routing__WEBPACK_IMPORTED_MODULE_6__["OldEntryRoutingModule"],
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
    ], OldEntryModule);
    return OldEntryModule;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/oldentry.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/accounts/OldEntry/oldentry.routing.ts ***!
  \*******************************************************/
/*! exports provided: OldEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldEntryRoutingModule", function() { return OldEntryRoutingModule; });
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
            title: ' OldEntry'
        },
        children: [
            {
                path: 'OEBankPaymnt',
                loadChildren: './OEBankPayment/bankpaymentOE.module#BankPaymentOEModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'OEBankRecpt',
                loadChildren: './OEBankReceipt/bankreceiptOE.module#BankReceiptOEModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'OEJV',
                loadChildren: './OEJV/journalvoucherOE.module#JVOEModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'OEPurchase',
                loadChildren: './OEPurchase/purchaseOE.module#PurchaseOEModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
        ]
    }
];
var OldEntryRoutingModule = /** @class */ (function () {
    function OldEntryRoutingModule() {
    }
    OldEntryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OldEntryRoutingModule);
    return OldEntryRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=OldEntry-oldentry-module.js.map