(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["import-import-i-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/information/import/import-i.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/import/import-i.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row\">\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/information/import/import-i.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/information/import/import-i.component.ts ***!
  \**********************************************************/
/*! exports provided: ImportInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportInfoComponent", function() { return ImportInfoComponent; });
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

var ImportInfoComponent = /** @class */ (function () {
    function ImportInfoComponent() {
    }
    ImportInfoComponent.prototype.ngOnInit = function () {
    };
    ImportInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./import-i.component.html */ "./node_modules/raw-loader/index.js!./src/app/information/import/import-i.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ImportInfoComponent);
    return ImportInfoComponent;
}());



/***/ }),

/***/ "./src/app/information/import/import-i.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/information/import/import-i.module.ts ***!
  \*******************************************************/
/*! exports provided: ImportInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportInfoModule", function() { return ImportInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _import_i_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-i.routing */ "./src/app/information/import/import-i.routing.ts");
/* harmony import */ var _import_i_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-i.component */ "./src/app/information/import/import-i.component.ts");
/* harmony import */ var _incoterm_i_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incoterm-i.component */ "./src/app/information/import/incoterm-i.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImportInfoModule = /** @class */ (function () {
    function ImportInfoModule() {
    }
    ImportInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_import_i_routing__WEBPACK_IMPORTED_MODULE_1__["ImportInfoRoutingModule"]],
            declarations: [
                _import_i_component__WEBPACK_IMPORTED_MODULE_2__["ImportInfoComponent"],
                _incoterm_i_component__WEBPACK_IMPORTED_MODULE_3__["IncotermImportComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ImportInfoModule);
    return ImportInfoModule;
}());



/***/ }),

/***/ "./src/app/information/import/import-i.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/information/import/import-i.routing.ts ***!
  \********************************************************/
/*! exports provided: ImportInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportInfoRoutingModule", function() { return ImportInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _import_i_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-i.component */ "./src/app/information/import/import-i.component.ts");
/* harmony import */ var _incoterm_i_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incoterm-i.component */ "./src/app/information/import/incoterm-i.component.ts");
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
            title: 'Import'
        },
        children: [
            { path: '', component: _import_i_component__WEBPACK_IMPORTED_MODULE_2__["ImportInfoComponent"], data: { title: 'Home' } },
            { path: 'incoterm-information', component: _incoterm_i_component__WEBPACK_IMPORTED_MODULE_3__["IncotermImportComponent"], data: { title: 'Home' } },
        ]
    }
];
var ImportInfoRoutingModule = /** @class */ (function () {
    function ImportInfoRoutingModule() {
    }
    ImportInfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ImportInfoRoutingModule);
    return ImportInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/information/import/incoterm-i.component.ts":
/*!************************************************************!*\
  !*** ./src/app/information/import/incoterm-i.component.ts ***!
  \************************************************************/
/*! exports provided: IncotermImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncotermImportComponent", function() { return IncotermImportComponent; });
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

var IncotermImportComponent = /** @class */ (function () {
    function IncotermImportComponent() {
    }
    IncotermImportComponent.prototype.ngOnInit = function () {
    };
    IncotermImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<img src="assets/img/Incoterm.jpg" />'
        }),
        __metadata("design:paramtypes", [])
    ], IncotermImportComponent);
    return IncotermImportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=import-import-i-module.js.map