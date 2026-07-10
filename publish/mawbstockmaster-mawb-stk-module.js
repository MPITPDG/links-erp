(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mawbstockmaster-mawb-stk-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/mawbstockmaster/stockmaster.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/mawbstockmaster/stockmaster.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>MAWB Stock Master</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6\">\r\n\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <!-- <tr class=\"centerlabel\">\r\n                    <td colspan=\"4\">\r\n                        <input type=\"radio\" name=\"RADIO\" value=\"0\"  [(ngModel)]=\"stocktype\"><span class=\"col-form-span-label\"><b> Our Stock</b></span>\r\n                        &nbsp;\r\n                        <input type=\"radio\" name=\"RADIO\" value=\"1\" [(ngModel)]=\"stocktype\"><span class=\"col-form-span-label\"><b> Agent Stock</b></span>\r\n                    </td>\r\n                </tr> -->\r\n                    <!-- <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>IATA</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td colspan=\"4\"><input type=\"text\" class=\"form-control width100\" disabled=\"disabled\" [(ngModel)]=\"IATA\" ></td>\r\n                    </tr> -->\r\n                    <tr>\r\n\r\n                        <td colspan=\"4\"  >\r\n                            <div style=\"float: right;\">\r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\"  (click)=\"AddNew()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i>Add New</span></button>\r\n                        </div>\r\n                        </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Doc No.</b> </span></td>\r\n                        <td><input type=\"text\" class=\"form-control width150\" disabled=\"disabled\"  [(ngModel)]=\"DocNo\">\r\n                        <td><span class=col-form-span-label><b>Doc Date</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td >\r\n                        <my-date-picker name=\"DocDate\"  [selDate]=\"DocDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"DocDateChanged($event)\" ></my-date-picker>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>IATA Agent</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                      <td colspan=\"4\">\r\n                        <select class=\"form-control width400\"  [(ngModel)]=\"iataagent\" [disabled]='disable_iataagent' >\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let i of iataagentlist\" value={{i.DATAVALUEFIELD}}>{{i.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                    </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Airline</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td colspan=\"4\">\r\n                            <select class=\"form-control width400\"  [(ngModel)]=\"airline\"  [disabled]='disable_airline'  (change)=\"getAirlinecodee(airline);\" >\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let a of airlinelist\" value={{a.DATAVALUEFIELD}}>{{a.DATATEXTFIELD}}</option>\r\n                            </select>\r\n                             </td>\r\n                        </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>MAWB From No</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td><input type=\"text\" class=\"form-control width50\" disabled=\"disabled\" maxlength=\"3\" [(ngModel)]=\"airlinecode\">\r\n                         <input type=\"text\" [OnlyNumber]=\"true\" class=\"form-control width100\" [(ngModel)]=\"FrommawbNo\" (change)=\"fn_validateMawbNo(airlinecode + FrommawbNo);\" style=\"margin-left: 70px;margin-top: -18px;\" maxlength=\"8\" ></td>\r\n                        <td><span class=\"col-form-span-label\"><b>No of Stock </b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td><input type=\"text\" class=\"form-control width30\" [OnlyNumber]=\"true\"  maxlength=\"3\" [(ngModel)]=\"noofstock\" ></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>MAWB To No</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td colspan=\"3\"><input type=\"text\" class=\"form-control width50\" disabled=\"disabled\" maxlength=\"3\" [(ngModel)]=\"airlinecode\">\r\n                         <input type=\"text\" [OnlyNumber]=\"true\" class=\"form-control width100\" [(ngModel)]=\"TomawbNo\" disabled=\"disabled\"  style=\"margin-left: 70px;margin-top: -18px;\" maxlength=\"8\" ></td>\r\n                    </tr>\r\n                    <!-- <tr>\r\n                        <td><span class=col-form-span-label><b>Date</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td >\r\n                               <my-date-picker name=\"DocDate\"  [selDate]=\"DocDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"DocDateChanged($event)\" ></my-date-picker>\r\n                        </td>\r\n                     </tr> -->\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Type</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                        <td >\r\n                            <select class=\"form-control width120\" [(ngModel)]=\"Type\">\r\n                                <option  value=\"\">Please select</option>\r\n                                <option *ngFor=\"let c of typelist\" value={{c.CODE}}>{{c.SNAME}}</option>\r\n                            </select>\r\n                        </td>\r\n                    </tr>\r\n                             <tr>\r\n                                <td colspan=\"4\"  class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disable_submitbtn'  (click)=\"AddMain()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i>Submit</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                </td>\r\n                            </tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/export/mawbstockmaster/mawb-stk-module.ts":
/*!***********************************************************!*\
  !*** ./src/app/export/mawbstockmaster/mawb-stk-module.ts ***!
  \***********************************************************/
/*! exports provided: MawbStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MawbStockModule", function() { return MawbStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _mawb_stk_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mawb-stk-routing */ "./src/app/export/mawbstockmaster/mawb-stk-routing.ts");
/* harmony import */ var _stockmaster_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stockmaster.component */ "./src/app/export/mawbstockmaster/stockmaster.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MawbStockModule = /** @class */ (function () {
    function MawbStockModule() {
    }
    MawbStockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_mawb_stk_routing__WEBPACK_IMPORTED_MODULE_8__["MawbStockRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_stockmaster_component__WEBPACK_IMPORTED_MODULE_9__["MawbStockMasterComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], MawbStockModule);
    return MawbStockModule;
}());



/***/ }),

/***/ "./src/app/export/mawbstockmaster/mawb-stk-routing.ts":
/*!************************************************************!*\
  !*** ./src/app/export/mawbstockmaster/mawb-stk-routing.ts ***!
  \************************************************************/
/*! exports provided: MawbStockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MawbStockRoutingModule", function() { return MawbStockRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stockmaster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stockmaster.component */ "./src/app/export/mawbstockmaster/stockmaster.component.ts");
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
            title: 'Mawb Stock'
        },
        children: [
            { path: 'Add', component: _stockmaster_component__WEBPACK_IMPORTED_MODULE_2__["MawbStockMasterComponent"], data: { title: 'Add' } },
        ]
    }
];
var MawbStockRoutingModule = /** @class */ (function () {
    function MawbStockRoutingModule() {
    }
    MawbStockRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MawbStockRoutingModule);
    return MawbStockRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/mawbstockmaster/stockmaster.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/export/mawbstockmaster/stockmaster.component.ts ***!
  \*****************************************************************/
/*! exports provided: MawbStockMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MawbStockMasterComponent", function() { return MawbStockMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MawbStockMasterComponent = /** @class */ (function () {
    function MawbStockMasterComponent(_dataService, _toasterService, loaderService, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._loginService = _loginService;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '16px',
            width: '120px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px'
        };
        this.airlinelist = [];
        this.typelist = [];
        this.companyname = '';
        this.iataagentlist = [];
        this.iataagent = '';
        this.airline = '';
        this.FrommawbNo = '';
        this.noofstock = '';
        this.TomawbNo = '';
        this.DocNo = '';
        this.Type = '';
        this.airlinecode = "";
        this.baseUrl = "";
        this.disable_submitbtn = false;
        this.disable_iataagent = false;
        this.disable_airline = false;
    }
    MawbStockMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DocDate = new Date();
        this.DocDate = this._dataService.datechnge(this.DocDate);
        this._loginService.verifyRights(428, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var _jsonGet = {
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/EXP_MAWB_STOCK_PAGELOAD", _jsonGet)
            .subscribe(function (data) {
            _this.iataagentlist = data.Table;
            _this.airlinelist = data.Table1;
            _this.typelist = data.Table2;
        });
    };
    MawbStockMasterComponent.prototype.getAirlinecodee = function (value) {
        this.airlinecode = value;
    };
    MawbStockMasterComponent.prototype.DocDateChanged = function (ev) {
        this.DocDate = ev.formatted;
    };
    MawbStockMasterComponent.prototype.AddNew = function () {
        this.airline = '';
        this.FrommawbNo = '';
        this.DocNo = '';
        this.DocDate = new Date();
        this.DocDate = this._dataService.datechnge(this.DocDate);
        this.noofstock = '';
        this.Type = '';
        this.iataagent = '';
        this.airline = '';
        this.airlinecode = '';
        this.TomawbNo = '';
        this.disable_submitbtn = false;
        this.disable_airline = false;
        this.disable_iataagent = false;
    };
    MawbStockMasterComponent.prototype.AddMain = function () {
        var _this = this;
        if (this.DocDate == "" || this.DocDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Doc Date could not be blank !');
            return false;
        }
        if (this.iataagent == "") {
            this._toasterService.toast('warning', 'warning', 'Iata Agent  could not be blank !');
            return false;
        }
        if (this.airline == "") {
            this._toasterService.toast('warning', 'warning', 'Airline Name could not be blank !');
            return false;
        }
        if (this.FrommawbNo == "") {
            this._toasterService.toast('warning', 'warning', 'From MAWB No could not be blank !');
            return false;
        }
        if (this.noofstock == "") {
            this._toasterService.toast('warning', 'warning', 'No of Stock could not be blank !');
            return false;
        }
        if (this.Type == "") {
            this._toasterService.toast('warning', 'warning', 'Type could not be blank !');
            return false;
        }
        var jsonmaster = {
            DOC_NO: this.DocNo,
            DOC_DATE: this.DocDate,
            IATAAGENT: this.iataagent,
            AIRLINECD: this.airline,
            NOOF_STOCK: this.noofstock,
            MAWBNO_FROM: this.airlinecode + this.FrommawbNo,
            MAWBNO_TO: this.TomawbNo,
            SRVC_TYPE: this.Type,
            CMP_CODE: this._loginService.getLogin()[0].CMPCODE,
            CITY_CODE1: this._loginService.getLogin()[0].CITYCODE1,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
        };
        this._dataService.Common("Export/STOCK_MASTER_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TomawbNo = data.Table1[0].MAWBNO_TO;
                _this.DocNo = data.Table1[0].DOC_NO;
                _this.DocDate = data.Table1[0].DOC_DATE;
                _this.disable_submitbtn = true;
                _this.disable_iataagent = true;
                _this.disable_airline = true;
                _this._toasterService.toast('success', '', data.Table[0].STATUSMSG);
                _this.loaderService.display(false);
                // this.RestMain();
            }
            else if (data.Table[0].STATUS == "103") {
                _this._toasterService.toast('warning', '', data.Table[0].STATUSMSG);
                _this.loaderService.display(false);
                _this.RestMain();
            }
        });
    };
    MawbStockMasterComponent.prototype.RestMain = function () {
        this.airline = '';
        this.FrommawbNo = '';
        this.DocDate = '';
        this.noofstock = '';
        this.Type = '';
        this.iataagent = '';
        this.airline = '';
        this.airlinecode = '';
        this.TomawbNo = '';
        this.disable_submitbtn = false;
        this.disable_airline = false;
        this.disable_iataagent = false;
    };
    MawbStockMasterComponent.prototype.fn_validateMawbNo = function (Airmawbno) {
        if (Airmawbno.length == 11) {
            var remainder = 0;
            var chklastdigit = 0;
            var extractno = 0;
            extractno = Airmawbno.substr(3, 7);
            remainder = (extractno % 7); //(extractno - 7 * extractno / 7)
            chklastdigit = Airmawbno.slice(-1); //no.substr(11,1)
            if (remainder != chklastdigit) {
                this._toasterService.toast("warning", "warning", "GIVEN MAWB NO IS NOT VALID ");
                this.FrommawbNo = "";
                return false;
            }
        }
    };
    MawbStockMasterComponent.prototype.fn_generateLastMawbNo = function (Airmawbno, cnt) {
        if (Airmawbno.length == 11) {
            var remainder = 0;
            var chklastdigit = 0;
            var extractno = void 0;
            extractno = Airmawbno.substr(3, 8);
            for (var i = 0; i < cnt; i++) {
                chklastdigit = extractno.toString().slice(-1);
                if (chklastdigit == 6) {
                    extractno = parseInt(extractno) + 4;
                }
                else {
                    extractno = parseInt(extractno) + 11;
                }
                console.log(extractno);
            }
            this.TomawbNo = extractno;
        }
    };
    MawbStockMasterComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    MawbStockMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mawbstockmaster',
            template: __webpack_require__(/*! raw-loader!./stockmaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/mawbstockmaster/stockmaster.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MawbStockMasterComponent);
    return MawbStockMasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=mawbstockmaster-mawb-stk-module.js.map