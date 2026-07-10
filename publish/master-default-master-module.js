(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-default-master-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/import/master/default-master.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/master/default-master.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/import/master/default-master.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/import/master/default-master.component.ts ***!
  \***********************************************************/
/*! exports provided: MasterImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterImportComponent", function() { return MasterImportComponent; });
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

var MasterImportComponent = /** @class */ (function () {
    function MasterImportComponent() {
    }
    MasterImportComponent.prototype.ngOnInit = function () {
    };
    MasterImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./default-master.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/master/default-master.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MasterImportComponent);
    return MasterImportComponent;
}());



/***/ }),

/***/ "./src/app/import/master/default-master.module.ts":
/*!********************************************************!*\
  !*** ./src/app/import/master/default-master.module.ts ***!
  \********************************************************/
/*! exports provided: DefaultMasterImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMasterImportModule", function() { return DefaultMasterImportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _default_master_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-master.routing */ "./src/app/import/master/default-master.routing.ts");
/* harmony import */ var _default_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-master.component */ "./src/app/import/master/default-master.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DefaultMasterImportModule = /** @class */ (function () {
    function DefaultMasterImportModule() {
    }
    DefaultMasterImportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_default_master_routing__WEBPACK_IMPORTED_MODULE_1__["DefaultMasterImportRoutingModule"]],
            declarations: [
                _default_master_component__WEBPACK_IMPORTED_MODULE_2__["MasterImportComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], DefaultMasterImportModule);
    return DefaultMasterImportModule;
}());



/***/ }),

/***/ "./src/app/import/master/default-master.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/import/master/default-master.routing.ts ***!
  \*********************************************************/
/*! exports provided: DefaultMasterImportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMasterImportRoutingModule", function() { return DefaultMasterImportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _default_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-master.component */ "./src/app/import/master/default-master.component.ts");
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
            { path: '', component: _default_master_component__WEBPACK_IMPORTED_MODULE_2__["MasterImportComponent"], data: { title: 'Home' } },
            {
                path: 'vessel',
                loadChildren: './vessel/vessel.module#VesselMasterImportModule',
            },
            {
                path: 'exchange-rate',
                loadChildren: './exchangerate/exchange-rate.module#ExchangeRateMasterImportModule',
            },
            {
                path: 'airline',
                loadChildren: './airline/airline.module#AirlineMasterImportModule',
            },
            {
                path: 'misc-job',
                loadChildren: './miscjob/misc-job.module#MiscJobMasterImportModule',
            }
        ]
    }
];
var DefaultMasterImportRoutingModule = /** @class */ (function () {
    function DefaultMasterImportRoutingModule() {
    }
    DefaultMasterImportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DefaultMasterImportRoutingModule);
    return DefaultMasterImportRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-default-master-module.js.map