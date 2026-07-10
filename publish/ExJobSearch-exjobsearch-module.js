(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ExJobSearch-exjobsearch-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ExJobSearch/exportJob.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/ExJobSearch/exportJob.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div  class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n               <tr>\r\n                <td class=\"col-form-span-heading\" colspan=\"6\"> <b>{{PageType}}</b> </td>\r\n                </tr>\r\n           <tr class=\"trbg\">\r\n             <td rowspan=\"3\">\r\n                <span class=\"col-form-span-label\"><b>Title</b> </span>\r\n             </td>  \r\n            <td colspan=\"2\">\r\n            <div class=\"leftlabel\">\r\n                <span class=\"col-form-span-label\">\r\n                <input type=\"radio\" name=\"radioDisplay\" value=\"EXPORTNO\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\" />&nbsp;Export No </span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n           </div>\r\n            </td>\r\n            <td colspan=\"2\">\r\n                <div class=\"leftlabel\">\r\n                <span class=\"col-form-span-label\">\r\n                <input type=\"radio\" name=\"radioDisplay\" value=\"FCR_NO\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\" />&nbsp;FCR No</span>\r\n                 </div>\r\n            </td>\r\n         </tr>\r\n          <tr class=\"trbg\">\r\n            <td colspan=\"2\" >\r\n                <div class=\"leftlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                     <input type=\"radio\" name=\"radioDisplay\" value=\"HAWB_NO\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\" />&nbsp;HAWB No</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  </div>\r\n                      </td>\r\n                      <td colspan=\"2\" >\r\n                        <div class=\"leftlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                   <input type=\"radio\" name=\"radioDisplay\" value=\"MAWB_NO\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\"  />&nbsp;MAWB No</span>\r\n                         </div>\r\n                  </td>         \r\n          </tr> \r\n          <tr class=\"trbg\">\r\n            <td colspan=\"4\" >\r\n                <div class=\"leftlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                     <input type=\"radio\" name=\"radioDisplay\" value=\"containerno\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\" />&nbsp;CONTAINER No</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  </div>\r\n                      </td>\r\n                 \r\n          </tr>\r\n          <tr class=\"trbg\">\r\n              <td>\r\n                <span class=\"col-form-span-label\"><b>{{lblexportNo}}</b> </span>\r\n              </td>\r\n            <td colspan=\"4\" >\r\n                <div class=\"leftlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                         <input [(ngModel)]=\"ExportNo\"  type=\"text\"  class=\"form-control width150\" maxlength=\"40\" > \r\n                    </span>\r\n                </div>\r\n            </td>\r\n            </tr>\r\n                    <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"SearchData()\" > <span\r\n                             class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i>\r\n                              Search </span></button>&nbsp;\r\n                             <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n         </div>\r\n         <br>\r\n         <br>\r\n         <div  class=\"row no-gutters\" *ngIf=\"rdbtype=='containerno' && ContainerDataList.length>0\">\r\n            <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n            </div>\r\n           \r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \" >\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                           <th class=\"col-form-span-label\" align=\"center\">Container No</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Vessel Det</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Verified</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Load Confirmation</th>\r\n                                        \r\n                       </tr>\r\n                   </thead>\r\n                   <tbody>\r\n                    <tr *ngFor=\"let data of ContainerDataList\">\r\n                      <td class=\"col-form-span-label\">{{data.CONTAINERNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.expt_vessel}}</td>\r\n                      <td class=\"col-form-span-label\" style=\"color: red;\">{{data.verified}}</td>\r\n                      <td class=\"col-form-span-label\" style=\"color: red;\">{{data.loaddt}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n    <div  class=\"row no-gutters\" *ngIf=\"rdbtype!='containerno' && OtherDataList.length>0\">\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n       \r\n    <div class=\"col-sm-12 col-md-8 col-lg-8\" >\r\n\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <thead>\r\n                <tr class=\"title-head formheading table-primary\">\r\n                       <th class=\"col-form-span-label\" align=\"center\">Mawb No</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">Destination</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">Pkgs</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">Grwt</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">Chbl Wt</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">Planned Flight Det</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">Actual Flight Det</th>\r\n                       <th class=\"col-form-span-label\" align=\"center\">ETA</th>\r\n                   </tr>\r\n               </thead>\r\n               <tbody>\r\n                <tr *ngFor=\"let data of OtherDataList\">\r\n                  <td class=\"col-form-span-label\">{{data.MAWBNO}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.MAWBDEST}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.P_PKGS}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.P_GRWT}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.P_CHBLWT}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.FLIGHTDTLS}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.ACTFLIGHTDTLS}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.ETAPORT1}}</td>\r\n                </tr>\r\n              </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\" *ngIf=\"rdbtype=='containerno' && ContainerData.length>1\">\r\n         <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \"  >\r\n            <div class=\"row xyscroll\"  style=\"height: 250px;\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                           <th class=\"col-form-span-label\" align=\"center\">Expt No</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Invoice no</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Shipper</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Consignee</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Gr Wt</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Net Wt</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">CBM</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">PCS</th> \r\n                           <th class=\"col-form-span-label\" align=\"center\">PKGs</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">FCR No</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">FCR Dt</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">Order No</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">CLPSEQUENCE</th>               \r\n                       </tr>\r\n                   </thead>\r\n                   <tbody>\r\n                    <tr *ngFor=\"let data of ContainerData\">\r\n                      <td class=\"col-form-span-label anchor-link\"  (click)=\"ViewConsignment(data.EXPTNO)\">{{data.EXPTNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.INVNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.SHIPPER}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.CONSIGNEE}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.GRWT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.NETWT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.CBM}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.PCS}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.NOOFPKGS}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.FCR_NO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.FCR_DATE}}</td>\r\n                      <td class=\"col-form-span-label\">\r\n                        <p    style=\"white-space: pre-wrap;width: 200px; \" >{{data.ORDERNO}}</p>  </td>\r\n                      <td class=\"col-form-span-label\">{{data.CLPSEQUENCE}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n            </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" *ngIf=\"rdbtype!='containerno' && ContainerData.length>1\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \"  >\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                           <th class=\"col-form-span-label\" align=\"center\">expt No</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Invoice no</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Shipper</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Consignee</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Gr Wt</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Volume</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Vol. wt</th>\r\n                           <th class=\"col-form-span-label\" align=\"center\">Chbl Wt</th> \r\n                           <th class=\"col-form-span-label\" align=\"center\">Pkgs</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">Hawb No</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">Hawb Dt</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">Order No.</th>      \r\n                           <th class=\"col-form-span-label\" align=\"center\">Freight</th>               \r\n                       </tr>\r\n                   </thead>\r\n                   <tbody>\r\n                    <tr *ngFor=\"let data of ContainerData\">\r\n                      <td class=\"col-form-span-label anchor-link\"  (click)=\"ViewConsignment(data.EXPTNO)\">{{data.EXPTNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.INVNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.SHIPPER}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.CONSIGNEE}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.GRWT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.VOLUME}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.VOLWT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.CHBLWT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.PKGS}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.HAWBNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.HAWBDT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.ORDER_NO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.FREIGHT}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/MisReport/ExJobSearch/exjobsearch-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/accounts/MisReport/ExJobSearch/exjobsearch-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ExportJobSearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportJobSearchRoutingModule", function() { return ExportJobSearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exportjob_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exportjob.component */ "./src/app/accounts/MisReport/ExJobSearch/exportjob.component.ts");
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
            title: 'Export Job Search'
        },
        children: [
            { path: 'ExJob', component: _exportjob_component__WEBPACK_IMPORTED_MODULE_2__["ExportJobSearch"], data: { title: 'Export Job Search' } },
        ],
    }
];
var ExportJobSearchRoutingModule = /** @class */ (function () {
    function ExportJobSearchRoutingModule() {
    }
    ExportJobSearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportJobSearchRoutingModule);
    return ExportJobSearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/ExJobSearch/exjobsearch.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/MisReport/ExJobSearch/exjobsearch.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExJobSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExJobSearchModule", function() { return ExJobSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _exjobsearch_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exjobsearch-routing.module */ "./src/app/accounts/MisReport/ExJobSearch/exjobsearch-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _exportjob_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exportjob.component */ "./src/app/accounts/MisReport/ExJobSearch/exportjob.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ExJobSearchModule = /** @class */ (function () {
    function ExJobSearchModule() {
    }
    ExJobSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_exportjob_component__WEBPACK_IMPORTED_MODULE_9__["ExportJobSearch"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _exjobsearch_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExportJobSearchRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], ExJobSearchModule);
    return ExJobSearchModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/ExJobSearch/exportjob.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/accounts/MisReport/ExJobSearch/exportjob.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExportJobSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportJobSearch", function() { return ExportJobSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExportJobSearch = /** @class */ (function () {
    function ExportJobSearch(_dataService, _toasterService, loaderService, http, datePipe, _activatedRoute, _router, _loginService, exportser) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this.datePipe = datePipe;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.exportser = exportser;
        this.ContainerData = [];
        this.ContainerDataList = [];
        this.OtherDataList = [];
        this.Header = "MIS - Export Job Search";
        this.DataHeader = [];
        this.lblexportNo = "Export No";
        this.todtlbl = "Sailing Date To";
        this.rdbtype = "EXPORTNO";
        this.PageType = "MIS - Export Job Search";
    }
    ExportJobSearch.prototype.ngOnInit = function () {
    };
    ExportJobSearch.prototype.SearchData = function () {
        var _this = this;
        if (this.rdbtype == "EXPORTNO") {
            if (this.ExportNo.length < 15) {
                this._toasterService.toast("warning", "warning", "Ex-Job no should be 15 digit!");
                return false;
            }
        }
        if (this.rdbtype == "FCR_NO") {
            if (this.ExportNo == "" || this.ExportNo == undefined) {
                this._toasterService.toast("warning", "warning", "Please Enter FCR No. ");
                return false;
            }
        }
        if (this.rdbtype == "HAWB_NO") {
            if (this.ExportNo == "" || this.ExportNo == undefined) {
                this._toasterService.toast("warning", "warning", "Please Enter HAWB No. ");
                return false;
            }
        }
        if (this.rdbtype == "MAWB_NO") {
            if (this.ExportNo == "" || this.ExportNo == undefined) {
                this._toasterService.toast("warning", "warning", "Please Enter MAWB No. ");
                return false;
            }
        }
        if (this.rdbtype == "containerno") {
            if (this.ExportNo == "" || this.ExportNo == undefined) {
                this._toasterService.toast("warning", "warning", "Please Enter Container No. ");
                return false;
            }
        }
        var jsonData = {
            searchtype: this.rdbtype,
            searchval: this.ExportNo,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/Export_Search_List_acct", jsonData)
            .subscribe(function (data) {
            if (data.Table.length > 1) {
                _this.ContainerData = data.Table;
                if (_this.rdbtype == 'containerno') {
                    _this.FillContainer();
                }
                else {
                    _this.FillOtherdtls();
                }
            }
            else {
                var exptno = void 0;
                exptno = data.Table[0].EXPTNO;
                var theTop = (screen.height / 2) - (483 / 2);
                var theLeft = (screen.width / 2) - (780 / 2);
                var toolbar_1 = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
                window.open('./#/popup/Export-Consignment-view/' + exptno + '/', "CONSIGNMENT VIEW", toolbar_1);
            }
        });
        this.ContainerDataList = [];
        this.OtherDataList = [];
        this.ContainerData = [];
        // let first2 = this.ContainerData[0];
    };
    ExportJobSearch.prototype.FillContainer = function () {
        for (var i = 1; i <= 1; i++) {
            var obj = {
                CONTAINERNO: this.ContainerData[i].CONTAINERNO,
                expt_vessel: this.ContainerData[i].expt_vessel,
                verified: this.ContainerData[i].verified,
                loaddt: this.ContainerData[i].loaddt
            };
            this.ContainerDataList.push(obj);
        }
    };
    ExportJobSearch.prototype.FillOtherdtls = function () {
        for (var i = 1; i <= 1; i++) {
            var obj = {
                MAWBNO: this.ContainerData[i].MAWBNO,
                MAWBDEST: this.ContainerData[i].MAWBDEST,
                P_PKGS: this.ContainerData[i].P_PKGS,
                P_GRWT: this.ContainerData[i].P_GRWT,
                P_CHBLWT: this.ContainerData[i].P_CHBLWT,
                FLIGHTDTLS: this.ContainerData[i].FLIGHTDTLS,
                ACTFLIGHTDTLS: this.ContainerData[i].ACTFLIGHTDTLS,
                ETAPORT1: this.ContainerData[i].ETAPORT1
            };
            this.OtherDataList.push(obj);
        }
    };
    ExportJobSearch.prototype.lblchange = function (val) {
        this.ContainerDataList = [];
        this.OtherDataList = [];
        this.ContainerData = [];
        if (val.target.value == "EXPORTNO") {
            this.lblexportNo = "Export Code";
        }
        else if (val.target.value == "FCR_NO") {
            this.lblexportNo = "FCR No";
        }
        else if (val.target.value == "HAWB_NO") {
            this.lblexportNo = "HAWB No.";
        }
        else if (val.target.value == "MAWB_NO") {
            this.lblexportNo = "MAWB No";
        }
        else if (val.target.value == "containerno") {
            this.lblexportNo = "Container No";
        }
        this.ExportNo = "";
    };
    ExportJobSearch.prototype.ViewConsignment = function (ExportNo) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Export-Consignment-view/' + ExportNo + '/', "CONSIGNMENT VIEW", toolbar);
    };
    ExportJobSearch.prototype.Reset = function () {
        this.rdbtype = "EXPORTNO";
        this.ExportNo = "";
        this.lblexportNo = "Export Code";
    };
    ExportJobSearch.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] }
    ]; };
    ExportJobSearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ExJobSearch',
            template: __webpack_require__(/*! raw-loader!./exportJob.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ExJobSearch/exportJob.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], ExportJobSearch);
    return ExportJobSearch;
}());



/***/ })

}]);
//# sourceMappingURL=ExJobSearch-exjobsearch-module.js.map