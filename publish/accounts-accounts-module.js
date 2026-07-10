(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/accounts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/accounts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row\">\r\n    Accounts home page\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/accounts.component.ts":
/*!************************************************!*\
  !*** ./src/app/accounts/accounts.component.ts ***!
  \************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
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

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./accounts.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/accounts.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/accounts/accounts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/accounts/accounts.module.ts ***!
  \*********************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _accounts_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts.routing */ "./src/app/accounts/accounts.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/guard/finanacial-year-auth-guard.service */ "./src/app/shared/guard/finanacial-year-auth-guard.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_accounts_routing__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
            declarations: [
                _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]
            ],
            providers: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["FinancialYearAuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/accounts/accounts.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/accounts/accounts.routing.ts ***!
  \**********************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guard/finanacial-year-auth-guard.service */ "./src/app/shared/guard/finanacial-year-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', data: { title: 'Account' },
        canDeactivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]],
        children: [
            { path: '', component: _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"], data: { title: 'Home' } },
            {
                path: 'Master',
                loadChildren: './Master/actmaster.module#ActMasterModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'uploadbankreconcil',
                loadChildren: './uploadbankreconcil/uploadbankreconcil.module#uploadbankreconcilModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]],
            },
            {
                path: 'transaction',
                loadChildren: './transaction/transaction.module#TransactionModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'purchase',
                loadChildren: './purchase/purchase.module#PurchaseInvModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'Request',
                loadChildren: './Request/staffrequest.module#RequestModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'Voucher',
                loadChildren: './Vouchers/vouchers.module#VouchersModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'Authorisation',
                loadChildren: './Authorisation/Authorisation.module#AuthorisationModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'UnAuthorisation',
                loadChildren: './UnAuthorisation/UnAuthorisation.module#UnAuthorisationModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'CompCheque',
                loadChildren: './CompCheque/CompCheque.module#CompChequeModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'report',
                loadChildren: './Accreport/report.module#AccountReportModules',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'MisReport',
                loadChildren: './MisReport/Misreport.module#AccountMisReportModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'OldEntry',
                loadChildren: './OldEntry/oldentry.module#OldEntryModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'EInvoice',
                loadChildren: './EInvoice/einvoice.module#einvoicemodule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
            {
                path: 'ClientEdi',
                loadChildren: './ClientEdi/clientedi.module#ClientEdiModule',
                canActivate: [_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["FinancialYearAuthGuard"]]
            },
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=accounts-accounts-module.js.map