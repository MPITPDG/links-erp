(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/information/information.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/information.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row\">\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/information/import/incoterm-details-i.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/information/import/incoterm-details-i.component.ts ***!
  \********************************************************************/
/*! exports provided: IncotermDetailsImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncotermDetailsImportComponent", function() { return IncotermDetailsImportComponent; });
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

var IncotermDetailsImportComponent = /** @class */ (function () {
    function IncotermDetailsImportComponent() {
    }
    IncotermDetailsImportComponent.prototype.ngOnInit = function () {
    };
    IncotermDetailsImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<img src="assets/img/Incoterm.jpg" />'
        }),
        __metadata("design:paramtypes", [])
    ], IncotermDetailsImportComponent);
    return IncotermDetailsImportComponent;
}());



/***/ }),

/***/ "./src/app/information/information.component.ts":
/*!******************************************************!*\
  !*** ./src/app/information/information.component.ts ***!
  \******************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
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

var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/index.js!./src/app/information/information.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/information/information.module.ts":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModule", function() { return InformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _information_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.routing */ "./src/app/information/information.routing.ts");
/* harmony import */ var _information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information.component */ "./src/app/information/information.component.ts");
/* harmony import */ var _import_incoterm_details_i_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/incoterm-details-i.component */ "./src/app/information/import/incoterm-details-i.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InformationModule = /** @class */ (function () {
    function InformationModule() {
    }
    InformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_information_routing__WEBPACK_IMPORTED_MODULE_1__["InformationRoutingModule"]],
            declarations: [
                _information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"],
                _import_incoterm_details_i_component__WEBPACK_IMPORTED_MODULE_3__["IncotermDetailsImportComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], InformationModule);
    return InformationModule;
}());



/***/ }),

/***/ "./src/app/information/information.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/information/information.routing.ts ***!
  \****************************************************/
/*! exports provided: InformationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationRoutingModule", function() { return InformationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information.component */ "./src/app/information/information.component.ts");
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
            title: 'Information'
        },
        children: [
            { path: '', component: _information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"], data: { title: 'Home' } },
            {
                path: 'import',
                loadChildren: './import/import-i.module#ImportInfoModule',
            }
        ]
    }
];
var InformationRoutingModule = /** @class */ (function () {
    function InformationRoutingModule() {
    }
    InformationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InformationRoutingModule);
    return InformationRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=information-information-module.js.map