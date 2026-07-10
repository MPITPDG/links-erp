(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/error/404.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/404.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">{{errData.ErrorMessage}}</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error-rights.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error-rights.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br /><br /><br /><br /><br /><br /><br /><br /><br />\r\n<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"clearfix\">\r\n                <h1 class=\"float-left display-3 mr-4 red\">@</h1>\r\n                <h4 class=\"pt-3 red\"><strong>Access Denied</strong></h4>\r\n                <p class=\"text-muted red\">{{errData.ErrorMessage}}</p>\r\n            </div>\r\n            <div class=\"input-prepend centerlabel\">\r\n                <!-- <button class=\"btn btn-default\" type=\"button\" (click)=\"back()\"><i class=\"fa fa-arrow-left\"></i> Go Back</button> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/error/404.component.ts":
/*!****************************************!*\
  !*** ./src/app/error/404.component.ts ***!
  \****************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_share_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-share-data.service */ "./src/app/error/error-share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var P404Component = /** @class */ (function () {
    function P404Component(_router, _sharedError) {
        this._router = _router;
        this._sharedError = _sharedError;
    }
    P404Component.prototype.ngOnInit = function () {
        // console.log("404", this._sharedError.verifyData);
        if (this._sharedError.verifyData != undefined) {
            this.errData = this._sharedError.verifyData;
        }
    };
    P404Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _error_share_data_service__WEBPACK_IMPORTED_MODULE_1__["ErrorDataSerice"] }
    ]; };
    P404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./404.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/404.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _error_share_data_service__WEBPACK_IMPORTED_MODULE_1__["ErrorDataSerice"]])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/error/error-rights.component.ts":
/*!*************************************************!*\
  !*** ./src/app/error/error-rights.component.ts ***!
  \*************************************************/
/*! exports provided: UserRightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRightsComponent", function() { return UserRightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_share_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-share-data.service */ "./src/app/error/error-share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRightsComponent = /** @class */ (function () {
    function UserRightsComponent(_router, _sharedError, _location) {
        this._router = _router;
        this._sharedError = _sharedError;
        this._location = _location;
    }
    UserRightsComponent.prototype.ngOnInit = function () {
        if (this._sharedError.verifyData != undefined) {
            this.errData = this._sharedError.verifyData;
        }
    };
    UserRightsComponent.prototype.back = function () {
        //this._location.back();
        this._router.navigate(['./module']);
    };
    UserRightsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _error_share_data_service__WEBPACK_IMPORTED_MODULE_1__["ErrorDataSerice"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    UserRightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./error-rights.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error-rights.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _error_share_data_service__WEBPACK_IMPORTED_MODULE_1__["ErrorDataSerice"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserRightsComponent);
    return UserRightsComponent;
}());



/***/ }),

/***/ "./src/app/error/error-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/error/error-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _error_rights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-rights.component */ "./src/app/error/error-rights.component.ts");
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
            title: 'Errors'
        },
        children: [
            {
                path: '404',
                component: _404_component__WEBPACK_IMPORTED_MODULE_2__["P404Component"],
                data: {
                    title: '404'
                }
            },
            {
                path: 'access-denied',
                component: _error_rights_component__WEBPACK_IMPORTED_MODULE_3__["UserRightsComponent"],
                data: {
                    title: 'Access-Denied'
                }
            }
        ]
    }
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/error/error.module.ts":
/*!***************************************!*\
  !*** ./src/app/error/error.module.ts ***!
  \***************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/error/error-routing.module.ts");
/* harmony import */ var _error_rights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-rights.component */ "./src/app/error/error-rights.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorRoutingModule"]],
            declarations: [
                _404_component__WEBPACK_IMPORTED_MODULE_1__["P404Component"],
                _error_rights_component__WEBPACK_IMPORTED_MODULE_3__["UserRightsComponent"]
            ]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ })

}]);
//# sourceMappingURL=error-error-module.js.map