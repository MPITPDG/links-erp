(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["import-import-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/import/import.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/import.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row\">\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/import/import.component.ts":
/*!********************************************!*\
  !*** ./src/app/import/import.component.ts ***!
  \********************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
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

var ImportComponent = /** @class */ (function () {
    function ImportComponent() {
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./import.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/import.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/import/import.module.ts":
/*!*****************************************!*\
  !*** ./src/app/import/import.module.ts ***!
  \*****************************************/
/*! exports provided: ImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportModule", function() { return ImportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _import_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import.routing */ "./src/app/import/import.routing.ts");
/* harmony import */ var _import_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import.component */ "./src/app/import/import.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImportModule = /** @class */ (function () {
    function ImportModule() {
    }
    ImportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_import_routing__WEBPACK_IMPORTED_MODULE_1__["ImportRoutingModule"]],
            declarations: [
                _import_component__WEBPACK_IMPORTED_MODULE_2__["ImportComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ImportModule);
    return ImportModule;
}());



/***/ }),

/***/ "./src/app/import/import.routing.ts":
/*!******************************************!*\
  !*** ./src/app/import/import.routing.ts ***!
  \******************************************/
/*! exports provided: ImportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportRoutingModule", function() { return ImportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _import_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import.component */ "./src/app/import/import.component.ts");
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
            { path: '', component: _import_component__WEBPACK_IMPORTED_MODULE_2__["ImportComponent"], data: { title: 'Home' } },
            {
                path: 'sea',
                loadChildren: './sea/sea.module#SeaImportModule',
            },
            {
                path: 'air',
                loadChildren: './air/air.module#AirImportModule',
            },
            {
                path: 'master',
                loadChildren: './master/default-master.module#DefaultMasterImportModule',
            }
        ]
    }
];
var ImportRoutingModule = /** @class */ (function () {
    function ImportRoutingModule() {
    }
    ImportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ImportRoutingModule);
    return ImportRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=import-import-module.js.map