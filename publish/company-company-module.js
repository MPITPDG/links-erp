(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6 centerlabel\">\r\n\t\t\t<img src=\"assets/img/loading.gif\" *ngIf=\"loader\" />\r\n\t\t\t<span *ngIf=\"errorMessage!=''\">{{errorMessage}}</span>\r\n\t\t\t<div class=\"card\" *ngIf=\"companylist.length>0\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<table class=\"table table-responsive-sm table-borderless table-hover\">\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let d of companylist\" (click)=\"setCompany(d.CMP_CODE,d.CMP_NAME,d.IS_HBLISSUE,d.IS_HAWISSUE);\">\r\n\t\t\t\t\t\t\t\t<td [ngStyle]=\"{'cursor': 'pointer'}\">\r\n\t\t\t\t\t\t\t\t\t<div [ngStyle]=\"{'text-decoration': 'underline', 'text-align': 'left', 'color': '#0000ff', 'font-weight':'bold','font-size': '12px'}\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-double-right\"></i>&nbsp;{{ d.CMP_NAME }}\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/company/company-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/company/company-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.component */ "./src/app/company/company.component.ts");
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
                component: _company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"],
                data: {
                    title: 'Company'
                }
            }
        ]
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(_router, _dataService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this.companylist = [];
        this.loader = true;
        this.errorMessage = '';
        this.disabled = false;
        this.status = { isopen: false };
    }
    CompanyComponent.prototype.toggled = function (open) {
        //console.log('Dropdown is now: ', open);
    };
    CompanyComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jsoncompany = {
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmpcode: "",
            comptype: "",
            cmpid: this._loginService.getLogin()[0].CMPID,
            logintype: (this._loginService.getBasePath() == "FRT") ? 'FRT' : ""
        };
        this._dataService.Common('Branch/GetCompany', jsoncompany)
            .subscribe(function (data) {
            _this.loader = false;
            if (data.Table.length === 1) {
                _this.errorMessage = "";
                _this.setCompany(data.Table[0].CMP_CODE, data.Table[0].CMP_NAME, data.Table[0].IS_HBLISSUE, data.Table[0].IS_HAWISSUE);
            }
            else if (data.Table.length === 0) {
                _this.errorMessage = "Please Contact to administrator";
            }
            else {
                _this.companylist = data.Table;
                _this.errorMessage = "";
            }
        });
    };
    CompanyComponent.prototype.setCompany = function (companycode, companyname, hblissue, hawbissue) {
        this._loginService.setCompanyCodeModify(companycode, companyname, null, hblissue, hawbissue);
        this._router.navigate(['/module']);
    };
    CompanyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/company.module.ts":
/*!*******************************************!*\
  !*** ./src/app/company/company.module.ts ***!
  \*******************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/company/company-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"]
            ],
            declarations: [
                _company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"]
            ]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map