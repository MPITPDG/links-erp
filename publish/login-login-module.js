(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-header navbar\">\n  <div style=\"display: inline-flex;\">\n      <!-- <a style=\"background-image: url(Untitled-1.png);\" class=\"navbar-brand\" href=\"javascript:void(0);\"></a> -->\n  <a class=\"navbar-brand\" href=\"javascript:void(0);\">\n    <!--<img src=\"\" style=\"width: 155px;height: 55px;\">-->\n  </a>\n  <span style='font-size: 24px; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: #ffffff; text-shadow: 1px 1px 2px #0300bd, 0 0 25px #0300bd, 0 0 5px #0300bd;'>\n    {{companyName | titlecase}}&nbsp;\n  </span>\n  </div>\n\n</nav>\n<main style=\"border-radius: 20px;\">\n  <div class=\"card p-4\" [ngStyle]=\"{'border-radius': '20px'}\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 centerlabel\">\n          <h1>Login</h1>\n          <p class=\"text-muted\">Sign In to your account</p>\n        </div>\n      </div>\n      <div class=\"input-group mb-3\">\n        <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\n      </div>\n      <div class=\"input-group mb-4\">\n        <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n      </div>\n      <div class=\"input-group mb-4\">\n        <button type=\"button\" [ngStyle]=\"{'width': '100%'}\" (click)=\"btnLogin()\" [disabled]=\"disabledbutton\" class=\"btn btn-sm btn-primary\">Login&nbsp;<i\n            class=\"fa fa-sign-in\"></i></button>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n  Angular version6.0.3@2018 Manilal Patel Group. All Rights Reserved.\n</footer>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
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
            title: 'Pages'
        },
        children: [
            {
                path: '',
                component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                data: {
                    title: 'Login'
                }
            }
        ]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _dataService, _auth, _toasterService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.username = '';
        this.password = '';
        this.companyName = "";
        this.disabledbutton = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if (this._loginService.getBasePath() == "FRT") {
        //     this.companyName = 'Manilal Patel Freight Service Pvt Ltd';
        // } else {
        //     this.companyName = 'Manilal Patel Group';
        // }
        this.companyName = 'LINKS GROUP';
    };
    LoginComponent.prototype.btnLogin = function () {
        var _this = this;
        if (this.username == '' && this.password == '') {
            this._toasterService.toast('error', 'Alert', 'Username and Password Required.');
        }
        else if (this.username == '') {
            this._toasterService.toast('error', 'Alert', 'Username Required.');
        }
        else if (this.password == '') {
            this._toasterService.toast('error', 'Alert', 'Password Required.');
        }
        else {
            this.disabledbutton = true;
            this._auth
                .login(this.username, this.password)
                .subscribe(function (data) {
                _this.disabledbutton = false;
                if (data.Table[0].STATUS == "100") {
                    var loginData = data.Table;
                    loginData[0]["CMPCODE"] = '30';
                    loginData[0]["CMPNAME"] = 'LINKS GROUP';
                    loginData[0]["CMPTYPE"] = null;
                    // if (this._loginService.getBasePath() == "FRT") {
                    //     loginData[0]["CMPCODE"] = '02';
                    //     loginData[0]["CMPNAME"] = 'MANILAL PATEL FREIGHT SERVICES PVT. LTD.';
                    //     loginData[0]["CMPTYPE"] = 'FRT';
                    // }
                    // else {
                    //     loginData[0]["CMPCODE"] = '01';
                    //     loginData[0]["CMPNAME"] = 'MANILAL PATEL GROUP';
                    //     loginData[0]["CMPTYPE"] = null;
                    // }
                    loginData[0]["FINANCIAL_YEAR"] = null;
                    _this._loginService.setLogin(loginData);
                    _this._toasterService.toast('success', 'Login Successfully', '');
                    // this._router.navigate(['/branch']);
                    if (loginData[0].IS_PASS_EXPIRES == "1") {
                        _this._router.navigate(['/Profile/ChangePassword']);
                    }
                    else {
                        _this._router.navigate(['/branch']);
                    }
                }
                else {
                    _this._toasterService.toast('error', 'Login Failed', data.Table[0].STATUSMSG);
                }
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: ["\n    nav {\n        background-color: #26a6d4;\n        height: 60px;\n      }\n      main {\n        height: 100px;\n        margin: calc(30vh - 50px - 20px) calc(50vw - 150px);\n        text-align: center;\n        width: 300px;\n      }\n      footer {\n        background-color: #26a6d4;\n        bottom: 0;\n        height: 20px;\n        position: absolute;\n        width: 100%;\n        font-weight: bold;\n        font-size: 8pt;\n        color: #ffffff;\n        font-family: Verdana, Arial;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map