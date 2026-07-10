(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-module-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/module/module.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/module.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <!--<div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>-->\r\n\t\t<div class=\"selectormodule open\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor=\"let obj of moduleData\" [ngStyle]=\"obj.listyle\">\r\n\t\t\t\t\t<label for=\"{{ 'c'+ obj.id}}\"  [ngStyle]=\"obj.labelstyle\" (click)=\"modules(obj.moduleid, obj.url)\">\r\n\t\t\t\t\t\t<i class=\"{{obj.icon}}\"></i><br />\r\n\t\t\t\t\t\t<b><u>{{obj.name}}</u></b>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<button>MODULES</button>\r\n\t\t</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/module/module-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/module/module-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ModulesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesRoutingModule", function() { return ModulesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module.component */ "./src/app/module/module.component.ts");
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
            title: ''
        },
        children: [
            {
                path: '',
                component: _module_component__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"],
                data: {
                    title: 'Module'
                }
            }
        ]
    }
];
var ModulesRoutingModule = /** @class */ (function () {
    function ModulesRoutingModule() {
    }
    ModulesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModulesRoutingModule);
    return ModulesRoutingModule;
}());



/***/ }),

/***/ "./src/app/module/module.component.css":
/*!*********************************************!*\
  !*** ./src/app/module/module.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selectormodule {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  width: 140px;\r\n  height: 140px;\r\n  margin-top: -70px;\r\n  margin-left: -70px;\r\n}\r\n\r\n.selectormodule button {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px;\r\n  background: #428bca;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  color: white;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\r\n  transition: all .1s;\r\n}\r\n\r\n.selectormodule button:hover { background: #3071a9; }\r\n\r\n.selectormodule button:focus { outline: none; }\r\n\r\n.selectormodule ul {\r\n  position: absolute;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  top: -50px;\r\n  right: -50px;\r\n  bottom: -50px;\r\n  left: -50px;\r\n}\r\n\r\n.selectormodule li {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 100%;\r\n  margin: 0 50%;\r\n  -webkit-transform: rotate(-360deg);\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.selectormodule li label {\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 100%;\r\n  width: 0;\r\n  height: 0;\r\n  line-height: 1px;\r\n  margin-left: 0;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-size: 1px;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  box-shadow: none;\r\n  transition: all 0.8s ease-in-out, color 0.1s, background 0.1s;\r\n}\r\n\r\n.selectormodule li label:hover { background: #373682;color:#ffffff; }\r\n\r\n.selectormodule.open li label {\r\n  width: 80px;\r\n  height: 80px;\r\n  line-height: 30px;\r\n  margin-left: -40px;\r\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\r\n  font-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlL21vZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxtQkFBbUI7QUFDckI7O0FBRUEsK0JBQStCLG1CQUFtQixFQUFFOztBQUVwRCwrQkFBK0IsYUFBYSxFQUFFOztBQUU5QztFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkRBQTZEO0FBQy9EOztBQUVBLGlDQUFpQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUU7O0FBRXBFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlL21vZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdG9ybW9kdWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzBweDtcclxufVxyXG5cclxuLnNlbGVjdG9ybW9kdWxlIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MjhiY2E7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXM7XHJcbn1cclxuXHJcbi5zZWxlY3Rvcm1vZHVsZSBidXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMzA3MWE5OyB9XHJcblxyXG4uc2VsZWN0b3Jtb2R1bGUgYnV0dG9uOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxyXG5cclxuLnNlbGVjdG9ybW9kdWxlIHVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0b3A6IC01MHB4O1xyXG4gIHJpZ2h0OiAtNTBweDtcclxuICBib3R0b206IC01MHB4O1xyXG4gIGxlZnQ6IC01MHB4O1xyXG59XHJcblxyXG4uc2VsZWN0b3Jtb2R1bGUgbGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2VsZWN0b3Jtb2R1bGUgbGkgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjFzLCBiYWNrZ3JvdW5kIDAuMXM7XHJcbn1cclxuXHJcbi5zZWxlY3Rvcm1vZHVsZSBsaSBsYWJlbDpob3ZlciB7IGJhY2tncm91bmQ6ICMzNzM2ODI7Y29sb3I6I2ZmZmZmZjsgfVxyXG5cclxuLnNlbGVjdG9ybW9kdWxlLm9wZW4gbGkgbGFiZWwge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module/module.component.ts":
/*!********************************************!*\
  !*** ./src/app/module/module.component.ts ***!
  \********************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModuleComponent = /** @class */ (function () {
    function ModuleComponent(_router, _dataService, _auth, _toasterService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.moduleData = [];
    }
    ModuleComponent.prototype.ngOnInit = function () {
        // if (this._loginService.getLogin()[0].CITYCODE != 'LIL' || this._loginService.getLogin()[0].CITYCODE != 'PAR' ||this._loginService.getLogin()[0].COUNTRY != 'INDIA') 
        // {   
        //     this.modules('3','/export')
        // }
        this.moduleData = this.getModuleDataList();
        var deg = 360 / this.moduleData.length;
        for (var i = 0; i < this.moduleData.length; i++) {
            var d = i * deg;
            this.moduleData[i]["listyle"] = { 'transform': 'rotate(' + d + 'deg)' };
            this.moduleData[i]["labelstyle"] = { 'transform': 'rotate(-' + d + 'deg)' };
        }
    };
    ModuleComponent.prototype.modules = function (moduleid, url) {
        if (url != null) {
            // if  (moduleid != 1) {                 
            //     this._loginService.getLogin()[0].FINANCIAL_YEAR[0]= null;   }
            if (moduleid == 7) {
                this.externalUrl(7);
            }
            else if (moduleid == 2) {
                if (this._loginService.getLogin()[0].CMPID == "1") {
                    this._loginService.setModuleModify(moduleid);
                    this._router.navigate([url]);
                }
                else {
                    this._toasterService.toast("warning", "Alert", "No Access");
                }
            }
            else {
                this._loginService.setModuleModify(moduleid);
                this._router.navigate([url]);
            }
        }
        else {
            this._toasterService.toast("warning", "Alert", "Working Under Process");
        }
    };
    ModuleComponent.prototype.externalUrl = function (moduleid) {
        if (moduleid == 7) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].edocumentIp
                + "eDocument-Links/View.html#/AutoLogin?huhpnk=" + this._loginService.getLogin()[0].CMP_USERENCCODE
                + "&cityname=" + this._loginService.getLogin()[0].CITYNAME
                + "&cmpcode=" + this._loginService.getLogin()[0].CMPCODE
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE
                + "&RoleType=" + this._loginService.getLogin()[0].ROLETYPE
                + "&citycode1=" + this._loginService.getLogin()[0].CITYCODE1
                + "&level=" + this._loginService.getLogin()[0].RIGHTS_CODE
                + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].edocumentIp + "edocument";
            window.open(url, "_blank");
        }
    };
    ModuleComponent.prototype.getModuleDataList = function () {
        var tmpArray = [];
        // if (this._loginService.getLogin()[0].CITYCODE === 'LIL' || this._loginService.getLogin()[0].CITYCODE === 'PAR') {
        //     tmpArray = [
        //         { id: 1, moduleid: 1, name: 'Finance', listyle: null, labelstyle: null, icon: 'fa fa-inr fa-2x', url: '/accounts-fra' },
        //         { id: 2, moduleid: 8, name: 'Master', listyle: null, labelstyle: null, icon: 'fa fa-plus-square fa-2x', url: '/master' },
        //         { id: 3, moduleid: 3, name: 'Export', listyle: null, labelstyle: null, icon: 'fa fa-exchange fa-2x', url: '/export' },
        //         { id: 4, moduleid: 10, name: 'Order', listyle: null, labelstyle: null, icon: 'fa fa-shopping-cart fa-2x', url: null },
        //         //{ id: 5, moduleid: 12, name: 'ICS', listyle: null, labelstyle: null, icon: 'fa fa-sitemap fa-2x', url: null },
        //         //{ id: 6, moduleid: 6, name: 'BHEL', listyle: null, labelstyle: null, icon: 'fa fa-tachometer fa-2x', url: null },
        //         { id: 7, moduleid: 11, name: 'Raise Ticket', listyle: null, labelstyle: null, icon: 'fa fa-ticket fa-2x', url: null },
        //         //{ id: 8, moduleid: 12, name: 'Profile', listyle: null, labelstyle: null, icon: 'fa fa-user-circle-o fa-2x', url: null },
        //         { id: 9, moduleid: 5, name: 'EDI/XML', listyle: null, labelstyle: null, icon: 'fa fa-comments-o fa-2x', url: null },
        //         { id: 10, moduleid: 7, name: 'E-Doc', listyle: null, labelstyle: null, icon: 'fa fa-folder-open fa-2x', url: '7' },
        //         { id: 11, moduleid: 9, name: 'Import', listyle: null, labelstyle: null, icon: 'fa fa-cubes fa-2x', url: '/importfra' },
        //         { id: 12, moduleid: 2, name: 'Admin', listyle: null, labelstyle: null, icon: 'fa fa-cogs fa-2x', url: null }
        //     ];
        // } else 
        if (this._loginService.getLogin()[0].COUNTRY === 'INDIA') {
            tmpArray = [
                { id: 1, moduleid: 1, name: 'Finance', listyle: null, labelstyle: null, icon: 'fa fa-inr fa-2x', url: '/accounts' },
                { id: 2, moduleid: 8, name: 'Master', listyle: null, labelstyle: null, icon: 'fa fa-plus-square fa-2x', url: '/master' },
                { id: 3, moduleid: 3, name: 'Export', listyle: null, labelstyle: null, icon: 'fa fa-exchange fa-2x', url: '/export' },
                // { id: 4, moduleid: 10, name: 'Order', listyle: null, labelstyle: null, icon: 'fa fa-shopping-cart fa-2x', url: null },
                //{ id: 5, moduleid: 12, name: 'ICS', listyle: null, labelstyle: null, icon: 'fa fa-sitemap fa-2x', url: null },
                //{ id: 6, moduleid: 6, name: 'BHEL', listyle: null, labelstyle: null, icon: 'fa fa-tachometer fa-2x', url: null },
                // { id: 7, moduleid: 11, name: 'Raise Ticket', listyle: null, labelstyle: null, icon: 'fa fa-ticket fa-2x', url: null },
                //{ id: 8, moduleid: 12, name: 'Profile', listyle: null, labelstyle: null, icon: 'fa fa-user-circle-o fa-2x', url: null },
                //{ id: 9, moduleid: 5, name: 'EDI/XML', listyle: null, labelstyle: null, icon: 'fa fa-comments-o fa-2x', url: null },
                { id: 10, moduleid: 7, name: 'E-Doc', listyle: null, labelstyle: null, icon: 'fa fa-folder-open fa-2x', url: '7' },
                { id: 11, moduleid: 4, name: 'Import', listyle: null, labelstyle: null, icon: 'fa fa-cubes fa-2x', url: '/import' },
                { id: 12, moduleid: 12, name: 'Admin', listyle: null, labelstyle: null, icon: 'fa fa-cogs fa-2x', url: '/admin' }
            ];
        }
        //  else {
        //     tmpArray = [
        //         { id: 2, moduleid: 8, name: 'Master', listyle: null, labelstyle: null, icon: 'fa fa-plus-square fa-2x', url: '/master' },
        //         { id: 3, moduleid: 3, name: 'Export', listyle: null, labelstyle: null, icon: 'fa fa-exchange fa-2x', url: '/export' },
        //         //{ id: 5, moduleid: 12, name: 'ICS', listyle: null, labelstyle: null, icon: 'fa fa-sitemap fa-2x', url: null },
        //         //{ id: 6, moduleid: 6, name: 'BHEL', listyle: null, labelstyle: null, icon: 'fa fa-tachometer fa-2x', url: null },
        //         { id: 7, moduleid: 11, name: 'Raise Ticket', listyle: null, labelstyle: null, icon: 'fa fa-ticket fa-2x', url: null },
        //         { id: 8, moduleid: 12, name: 'Profile', listyle: null, labelstyle: null, icon: 'fa fa-user-circle-o fa-2x', url: null },
        //         { id: 10, moduleid: 7, name: 'E-Doc', listyle: null, labelstyle: null, icon: 'fa fa-folder-open fa-2x', url: '7' }
        //     ];
        // }
        return tmpArray;
    };
    ModuleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selector', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModuleComponent.prototype, "selector", void 0);
    ModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./module.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/module.component.html"),
            styles: [__webpack_require__(/*! ./module.component.css */ "./src/app/module/module.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "./src/app/module/module.module.ts":
/*!*****************************************!*\
  !*** ./src/app/module/module.module.ts ***!
  \*****************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module.component */ "./src/app/module/module.component.ts");
/* harmony import */ var _module_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-routing.module */ "./src/app/module/module-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_module_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModulesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _module_component__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"]
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());



/***/ })

}]);
//# sourceMappingURL=module-module-module.js.map