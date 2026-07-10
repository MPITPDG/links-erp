(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-branch-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branch/branch.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branch/branch.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-5\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t\t<img src=\"assets/img/loading.gif\" *ngIf=\"countries.length==0\"/>\r\n\t\t\t<div class=\"card\" *ngIf=\"countries.length > 0\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-block\" [ngStyle]=\"{'margin-top':'0rem'}\" *ngFor=\"let obj of countries\" (click)=\"setCity(obj.CITYCODE);\">\r\n\t\t\t\t\t\t<u>{{ obj.CITYNAME | titlecase }}</u>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-5\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/branch/branch-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/branch/branch-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BranchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchRoutingModule", function() { return BranchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch.component */ "./src/app/branch/branch.component.ts");
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
            title: 'Branch'
        },
        children: [
            {
                path: '',
                component: _branch_component__WEBPACK_IMPORTED_MODULE_2__["BranchComponent"],
                data: {
                    title: 'Branch'
                }
            }
        ]
    }
];
var BranchRoutingModule = /** @class */ (function () {
    function BranchRoutingModule() {
    }
    BranchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BranchRoutingModule);
    return BranchRoutingModule;
}());



/***/ }),

/***/ "./src/app/branch/branch.component.ts":
/*!********************************************!*\
  !*** ./src/app/branch/branch.component.ts ***!
  \********************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BranchComponent = /** @class */ (function () {
    function BranchComponent(_router, _dataService, _auth, _toasterService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.countries = [];
        this.baseUrl = 'Branch/GetBranch';
    }
    BranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var type = (this._loginService.getLogin()[0].CMPTYPE) ? this._loginService.getLogin()[0].CMPTYPE : "";
        var jsonBranch = { cmpid: this._loginService.getLogin()[0].CMPID, comptype: type };
        this._dataService.Common(this.baseUrl, jsonBranch)
            .subscribe(function (data) {
            if (data.Table.length == 1) {
                _this.countries = data.Table;
                _this.setCity(data.Table[0].CITYCODE);
            }
            else {
                _this.countries = data.Table;
            }
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
        }, function () {
        });
    };
    BranchComponent.prototype.setCity = function (citycode) {
        this.cities = this.countries.filter(function (countrylist) { return countrylist.CITYCODE === citycode; });
        this._loginService.setCityModify(this.cities);
        //this._router.navigate(['/module']);
        if (this._loginService.getLogin()[0].CMPTYPE == null) {
            this._router.navigate(['/company']);
        }
        else {
            this._router.navigate(['/module']);
        }
    };
    BranchComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    BranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! raw-loader!./branch.component.html */ "./node_modules/raw-loader/index.js!./src/app/branch/branch.component.html"),
            styles: ["\n        :host >>> .popover {\n          background-color: #009688;\n            border-radius: 10px;\n            padding:5px;\n        }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/branch/branch.module.ts":
/*!*****************************************!*\
  !*** ./src/app/branch/branch.module.ts ***!
  \*****************************************/
/*! exports provided: BranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchModule", function() { return BranchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-routing.module */ "./src/app/branch/branch-routing.module.ts");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Popover Component

var BranchModule = /** @class */ (function () {
    function BranchModule() {
    }
    BranchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"].forRoot()],
            declarations: [
                _branch_component__WEBPACK_IMPORTED_MODULE_2__["BranchComponent"]
            ]
        })
    ], BranchModule);
    return BranchModule;
}());



/***/ })

}]);
//# sourceMappingURL=branch-branch-module.js.map