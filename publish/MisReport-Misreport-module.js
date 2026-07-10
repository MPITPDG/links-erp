(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MisReport-Misreport-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/Misreport.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/Misreport.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Mis report works!</p>"

/***/ }),

/***/ "./src/app/accounts/MisReport/Misreport-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/accounts/MisReport/Misreport-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MisReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisReportRoutingModule", function() { return MisReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guard/finanacial-year-auth-guard.service */ "./src/app/shared/guard/finanacial-year-auth-guard.service.ts");
/* harmony import */ var _Misreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Misreport.component */ "./src/app/accounts/MisReport/Misreport.component.ts");
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
            title: 'MisReport'
        },
        children: [
            { path: '', component: _Misreport_component__WEBPACK_IMPORTED_MODULE_3__["MisReportComponent"], data: { title: 'Home' } },
            {
                path: 'AdminReport',
                loadChildren: './AdminReport/Adminreport.module#AccountAdminReportModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'ActFinalization',
                loadChildren: './ActFinalization/actfinalization.module#ActFinalizationModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'InvoicingDelay',
                loadChildren: './InvoicingDelay/invoicingdelay.module#InvoicingDelayModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'MawbNetFrt',
                loadChildren: './MawbNetFrt/mawbnetfrt.module#MAWBFRTModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'AirFreight',
                loadChildren: './AirFreight/airfreight.module#AirFreightModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'SundryExpense',
                loadChildren: './SundryExpenselateact/sundryexpenselateact.module#SundryExpensesModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'Clientoutstandingageing',
                loadChildren: './Clientoutstandingageing/clientoutstandingageing.module#ClientOutstandingModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'ExJobSearch',
                loadChildren: './ExJobSearch/exjobsearch.module#ExJobSearchModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            },
            {
                path: 'JobProfit',
                loadChildren: './JobProfit/jobprofit.module#JobProfitModule',
                canActivate: [src_app_shared_guard_finanacial_year_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["FinancialYearAuthGuard"]],
            }
            // {
            // path: 'Generalactallbranch',
            // loadChildren: './Generalactallbranch/generalactallbranch.module#GeneralActAllBranchModule',
            // canActivate: [FinancialYearAuthGuard],
            // }    
        ]
    }
];
var MisReportRoutingModule = /** @class */ (function () {
    function MisReportRoutingModule() {
    }
    MisReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MisReportRoutingModule);
    return MisReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/Misreport.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/accounts/MisReport/Misreport.component.ts ***!
  \***********************************************************/
/*! exports provided: MisReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisReportComponent", function() { return MisReportComponent; });
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

var MisReportComponent = /** @class */ (function () {
    function MisReportComponent() {
    }
    MisReportComponent.prototype.ngOnInit = function () {
    };
    MisReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! raw-loader!./Misreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/Misreport.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MisReportComponent);
    return MisReportComponent;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/Misreport.module.ts":
/*!********************************************************!*\
  !*** ./src/app/accounts/MisReport/Misreport.module.ts ***!
  \********************************************************/
/*! exports provided: AccountMisReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountMisReportModule", function() { return AccountMisReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Misreport_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Misreport-routing.module */ "./src/app/accounts/MisReport/Misreport-routing.module.ts");
/* harmony import */ var _Misreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Misreport.component */ "./src/app/accounts/MisReport/Misreport.component.ts");
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








var AccountMisReportModule = /** @class */ (function () {
    function AccountMisReportModule() {
    }
    AccountMisReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Misreport_component__WEBPACK_IMPORTED_MODULE_3__["MisReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _Misreport_routing_module__WEBPACK_IMPORTED_MODULE_2__["MisReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AccountMisReportModule);
    return AccountMisReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=MisReport-Misreport-module.js.map