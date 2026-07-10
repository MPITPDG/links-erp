(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-master-master-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/master.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/master.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row\">\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/master/master-master.module.ts":
/*!************************************************!*\
  !*** ./src/app/master/master-master.module.ts ***!
  \************************************************/
/*! exports provided: MastermasterModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastermasterModules", function() { return MastermasterModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _master_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master.routing */ "./src/app/master/master.routing.ts");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./master.component */ "./src/app/master/master.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { Http,   } from '@angular/http';

var MastermasterModules = /** @class */ (function () {
    function MastermasterModules() {
    }
    MastermasterModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_master_routing__WEBPACK_IMPORTED_MODULE_6__["MasterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [
                _master_component__WEBPACK_IMPORTED_MODULE_7__["MasterComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], MastermasterModules);
    return MastermasterModules;
}());



/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
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

var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/master.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/master/master.routing.ts":
/*!******************************************!*\
  !*** ./src/app/master/master.routing.ts ***!
  \******************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master.component */ "./src/app/master/master.component.ts");
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
            title: 'Master'
        },
        children: [
            {
                path: '', component: _master_component__WEBPACK_IMPORTED_MODULE_2__["MasterComponent"], data: { title: 'Home' }
            },
            {
                path: 'request',
                loadChildren: './request/request.module#RequestModules',
            },
            {
                path: 'city',
                loadChildren: './Mst_city/Mst_city.module#Mst_citymodule',
            },
            {
                path: 'common',
                loadChildren: './common/commonRoute.module#CommonRoutingModules',
            },
            {
                path: 'generalaccount',
                loadChildren: './generalaccount/generalactmaster.module#GeneralactmasterModule',
            },
            {
                path: 'quotation',
                loadChildren: './quotation/quotation.module#QuotationModule',
            },
        ]
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-master-master-module.js.map