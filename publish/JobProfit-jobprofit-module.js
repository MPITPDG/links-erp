(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobprofit-jobprofit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/jobprofit/jobprofit.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/jobprofit/jobprofit.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>jobprofit works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>{{PageName|uppercase}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr >\n                    <td colspan=\"2\" style=\"text-align: left;\"><input type=\"radio\"  name=\"searchtype\" value='singlejob'\n                        [(ngModel)]=\"searchtype\">&nbsp;<span class=\"col-form-span-label\"><b>Single Job No.</b> </span></td>\n                    <td colspan=\"4\">\n                        <!-- <div style=\"display: inline-flex;\"><span class=\"col-form-span-label\">Job Number &nbsp;</span> </div> -->\n\n                            <input [(ngModel)]=\"single_jobno\"   [disabled]=\"searchtype != 'singlejob' \" type=\"text\" class=\"form-control width150\" maxlength=\"40\">\n                        \n                    </td>\n                </tr>\n                <tr >\n                    <td colspan=\"2\" style=\"text-align: left;\"><input type=\"radio\"  name=\"searchtype\" value='MJOB'\n                        [(ngModel)]=\"searchtype\">&nbsp;<span class=\"col-form-span-label\"><b>Multiple Jobs.</b> </span></td>\n                    <td colspan=\"4\" style=\"text-align: left;\">\n                        <div style=\"display: inline-flex;\">\n                            <span class=\"col-form-span-label\">From &nbsp;</span>\n\n                            <input [(ngModel)]=\"multi_fromjobno\" type=\"text\" class=\"form-control width150\"   [disabled]=\"searchtype != 'MJOB' \"\n                                maxlength=\"40\">\n                                &nbsp;\n                            <span class=\"col-form-span-label\">To  &nbsp;</span>\n\n                            <input [(ngModel)]=\"multi_tojobno\" type=\"text\" class=\"form-control width150\"   [disabled]=\"searchtype != 'MJOB' \" maxlength=\"40\">\n                        </div>\n                    </td>\n\n                </tr>\n                <tr >\n                    <td colspan=\"2\" style=\"text-align: left;\" ><input type=\"radio\"  name=\"searchtype\" value='DATE'\n                        [(ngModel)]=\"searchtype\">&nbsp;<span class=\"col-form-span-label\"><b>Date Wise</b> </span></td>\n                    <td colspan=\"4 \" style=\"text-align: left;\">\n                        <div style=\"display: inline-flex;\" class=\"col-form-span-label\">\n                            <input type=\"radio\"  name=\"modetype_radio\" value='SEA_exp'\n                                [(ngModel)]=\"modetype\" [disabled]=\"searchtype != 'DATE'\" (click)=\"clearDateControls()\" >&nbsp;<b>Sea Export </b>\n                                &nbsp;<input type=\"radio\"name=\"modetype_radio\" value='AIR_exp'\n                                [(ngModel)]=\"modetype\" [disabled]=\"searchtype != 'DATE'\" (click)=\"clearDateControls()\">&nbsp;<b>Air  Export</b>\n                                &nbsp;<input type=\"radio\"name=\"modetype_radio\" value='SEA_imp'\n                                [(ngModel)]=\"modetype\" [disabled]=\"searchtype != 'DATE'\" (click)=\"clearDateControls()\" >&nbsp;<b>Sea Import </b>\n                                &nbsp;<input type=\"radio\"name=\"modetype_radio\" value='AIR_imp'\n                                [(ngModel)]=\"modetype\" [disabled]=\"searchtype != 'DATE'\" (click)=\"clearDateControls()\" >&nbsp;<b>Air Import </b>\n                                &nbsp;<input type=\"radio\"  name=\"modetype_radio\" value='ALL'\n                                [(ngModel)]=\"modetype\" [disabled]=\"searchtype != 'DATE'\" (click)=\"clearDateControls()\" >&nbsp;<b>All</b>\n                        </div><br>\n                        <div class=\"col-form-span-label\" style=\"padding-left: 15px;\">\n                            <span  *ngIf=\"modetype=='SEA_exp'\"> <input type=\"radio\"  name=\"mode_subtyperadio\" value='DOC'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>DocRecDate </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='SALING'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Sailing Date </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='INV'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Invoice Date</b>\n                            </span>\n                            <span  *ngIf=\"modetype=='AIR_exp'\"> <input type=\"radio\"  name=\"mode_subtyperadio\" value='DOC'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>DocRecDate </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='FLIGHT'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Flight Date </b>  <br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='INV'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Invoice Date</b>                           \n                            </span>\n                            <span  *ngIf=\"modetype=='SEA_imp'\"> <input type=\"radio\"  name=\"mode_subtyperadio\" value='DOCI'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>DocRecDate </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='BL'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>BL  Date </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='INV'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Invoice Date</b>\n                            </span>\n                            <span  *ngIf=\"modetype=='AIR_imp'\"> <input type=\"radio\"  name=\"mode_subtyperadio\" value='DOCI'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>DocRecDate </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='BL'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>BL  Date </b><br>\n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='INV'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Invoice Date</b>\n                            </span>\n                            <span  *ngIf=\"modetype=='ALL'\"> \n                                <input type=\"radio\"  name=\"mode_subtyperadio\" value='INV'\n                                [(ngModel)]=\"mode_subtype\" [disabled]=\"searchtype != 'DATE'\">&nbsp;<b>Invoice Date</b>\n                            </span>\n                        </div>\n                        <div style=\"display: inline-flex;\">\n                            <span class=\"col-form-span-label\">From &nbsp;</span>\n                            <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" \n                                [(ngModel)]=\"from_datewise\" [disabled]=\"searchtype != 'DATE'\"></my-date-picker> &nbsp;\n                            <span class=\"col-form-span-label\">To &nbsp;</span>\n\n                            <my-date-picker name=\"to_datewise\" [options]=\"myDatePickerOptions\"\n                                [(ngModel)]=\"to_datewise\" [disabled]=\"searchtype != 'DATE'\"></my-date-picker>\n                        </div>\n                  \n                    </td>\n                </tr>\n                <tr  >\n                    <td colspan=\"2\" style=\"text-align: left;\" ><input type=\"radio\"  name=\"searchtype\" value='acctwise'\n                        [(ngModel)]=\"searchtype\">&nbsp;<span class=\"col-form-span-label\"><b>Account Wise</b> </span></td>\n                    <td colspan=\"4\" style=\"text-align: left;\">\n                        <div style=\"display: inline-flex;\"  class=\"col-form-span-label width500\">\n                             <span>Account:</span>&nbsp;\n                             <ng-select [items]=\"AccountTableList \" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\" [(ngModel)]=\"accountcode\" class=\"custom \" \n                                    placeholder=\"--Please Select Client--\" [disabled]=\"searchtype != 'acctwise'\" style=\"width: 400px;\">\n                             </ng-select>\n\n                             <!-- <select class=\"form-control width300\" [(ngModel)]=\"accountcode\" [disabled]=\"searchtype != 'acctwise'\">\n                             <option value=\"\">--Please Select Client--</option>\n                             <option *ngFor=\"let data of AccountTableList\" value={{data.ACCTCODENAME}}> {{data.ACCTNAME}} </option>\n                         </select> -->\n                        </div>\n                        <br>\n         \n                        <div style=\"display: inline-flex;\" class=\"col-form-span-label\">\n                            <span >Branch:</span>&nbsp;\n                            <input type=\"radio\" name=\"branchradio\" value='ALL'\n                                [(ngModel)]=\"branch\" [disabled]=\"searchtype != 'acctwise'\">&nbsp;<b>All Branch </b>\n                                &nbsp;<input type=\"radio\" value='MUM'  name=\"branchradio\"\n                                [(ngModel)]=\"branch\" [disabled]=\"searchtype != 'acctwise'\">&nbsp;<b>{{cityname}}</b>\n                        </div><br>\n                        <div style=\"display: inline-flex;\"  class=\"col-form-span-label\">\n                            <span >Payment Date:</span>&nbsp;\n                            <input type=\"radio\"  value='INVOICE'  name=\"paydateradio\"\n                                [(ngModel)]=\"paydate\" [disabled]=\"searchtype != 'acctwise'\">&nbsp;<b>Invoice Date</b>\n                                &nbsp; <input type=\"radio\"  value='PAYMENT'  name=\"paydateradio\"\n                                [(ngModel)]=\"paydate\" [disabled]=\"searchtype != 'acctwise'\">&nbsp;<b>Payment Date</b>\n                        </div>  <br>\n                        <div style=\"display: inline-flex;\">\n                            <span class=\"col-form-span-label\">From &nbsp;</span>\n                            <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\"\n                                [(ngModel)]=\"fromdt_acct\" [disabled]=\"searchtype != 'acctwise'\"></my-date-picker>&nbsp;\n                            <span class=\"col-form-span-label\">To &nbsp;</span> \n\n                            <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" \n                                [(ngModel)]=\"todt_acct\" [disabled]=\"searchtype != 'acctwise'\"></my-date-picker>\n                        </div>\n                      \n                    </td>\n                </tr>\n                <tr  >\n                    <td colspan=\"6\" class=\"centerlabel\">\n                        <span *ngIf=\"searchtype=='singlejob'; else elseBlock1\">\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"print()\">\n                                <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Print</span>\n                               </button> \n                        </span>\n                        <ng-template #elseBlock1>\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_excl()\">\n                                <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Export To Excel</span>\n       \n                               </button> \n                        </ng-template>                    \n                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                        (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                    </td>\n                    </tr>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>{{PageName|uppercase}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>{{inputname}}</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input id=\"searchno\" [(ngModel)]=\"searchno\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td colspan=\"2\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Search()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                Search</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\n        </div>\n    </div>\n    <div class=\"row no-gutters\" *ngIf=\"detailsdata_serch\">\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\n        </div>\n        <div class=\"col-sm-12 col-md-10 col-lg-10 xyscroll\" style=\"height: 470px;\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td>\n\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <thead>\n                                <tr class=\"title-head\" style=\"background-color: #3aa2d3\">\n                                    <th></th>\n                                    <th class=\"col-form-span-label\">Container No.</th>\n                                    <th class=\"col-form-span-label\"></th>\n                                    <th class=\"col-form-span-label\">Expense</th>\n                                    <th class=\"col-form-span-label\">Recovery </th>\n                                    <th class=\"col-form-span-label\">Difference </th>\n                                    <th class=\"col-form-span-label\">Remarks</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n\n                                <tr *ngFor=\"let data of cont_table1\" style=\"font-weight: bold;\">\n                                    <td data-toggle=\"collapse\" data-target=\"#accordion_containerdetail\"\n                                        (click)=\"setOrder_CONT()\" class=\"clickable\" style=\"width: 15px;\"><span\n                                            [hidden]=\"reverse_CONT\" id=\"icon_show\">+</span>\n                                        <span [hidden]=\"!reverse_CONT\" id=\"icon_show\">-</span>\n                                    </td>\n\n                                    <td><span class=\"col-form-span-label\">{{data.CTR_MAWBNO}}</span></td>\n                                    <td><span class=\"col-form-span-label\">{{data.JOBNO}}</span></td>\n                                    <td><span class=\"col-form-span-label\">{{data.DRAMT}}</span> </td>\n                                    <td><span class=\"col-form-span-label\">{{data.CRAMT}}</span> </td>\n                                    <td><span class=\"col-form-span-label\">{{data.GRANDVALUE_TOTAL}}</span></td>\n                                    <td><span class=\"col-form-span-label\">{{data.GRANDVALUE}}</span> </td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n                        <div style=\"padding-left: 15px;\" id=\"accordion_containerdetail\" class=\"collapse\">\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\n                                <tr class=\"title-head\">\n                                    <td style=\"width: 15px;\" (click)=\"setOrder_Voucher()\" data-toggle=\"collapse\"\n                                        data-target=\"#accordion_summarydetail\" class=\"clickable\">\n                                        <span [hidden]=\"reverse_VOCHR\" id=\"icon_show\">+</span>\n                                        <span [hidden]=\"!reverse_VOCHR\" id=\"icon_show\">-</span>\n                                    </td>\n                                    <td class=\"col-form-span-label\"> SUMMARY PROFIT {{'['+ searchno +']'}}</td>\n                                    <td></td>\n                                </tr>\n                            </table>\n\n                            <div style=\"padding-left: 15px;\" id=\"accordion_summarydetail\" class=\"collapse\">\n                                <table class=\"table table-bordered table-sm-new bgwhite\">\n                                    <thead>\n                                        <tr class=\"title-head\" style=\"background-color: #89CFF0\">\n                                            <th style=\"width: 15px;\"></th>\n                                            <th class=\"col-form-span-label\" colspan=\"2\">Voucher No.</th>\n                                            <th class=\"col-form-span-label\">Date</th>\n                                            <th class=\"col-form-span-label\">Expense</th>\n                                            <th class=\"col-form-span-label\">Recovery </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let data of vouchr_table3\">\n                                            <td></td>\n                                            <td colspan=\"2\"><span class=\"col-form-span-label\"\n                                                     (click)=\"voucherprint(data.VOUCHER_NO,data.VOUCHERNO)\" \n                                                    [innerHtml]=\"data.VOUCHER_NO\"></span>\n                                            </td>\n                                            <td><span class=\"col-form-span-label\">{{data.TRAN_DATE}}</span> </td>\n                                            <td><span class=\"col-form-span-label\">{{data.PAYMENT_EURO}}</span> </td>\n                                            <td><span class=\"col-form-span-label\">{{data.RECOVERY_EURO}}</span></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\n                                <thead>\n                                    <tr class=\"title-head\" style=\"background-color: #89CFF0\">\n                                        <th></th>\n                                        <th class=\"col-form-span-label\">Job No.</th>\n                                        <th class=\"col-form-span-label\">Client</th>\n                                        <th class=\"col-form-span-label\">Expense</th>\n                                        <th class=\"col-form-span-label\">Recovery </th>\n                                        <th class=\"col-form-span-label\">Difference </th>\n                                        <th class=\"col-form-span-label\">Remarks</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container *ngFor=\"let data of job_table2\">\n                                        <tr>\n                                            <td style=\"width: 15px;\" (click)=\"setOrder_JOB(data.JOBNO)\"\n                                                class=\"clickable\">\n                                                <span [hidden]=\"reverse_JOB\" id=\"icon_show\">+</span>\n                                                <span [hidden]=\"!reverse_JOB\" id=\"icon_show\">-</span>\n                                            </td>\n                                            <td><span class=\"col-form-span-label anchor-link\"\n                                                    (click)=\"jobprofitreport(data.JOBNO)\">{{data.JOBNO}}</span></td>\n                                            <td><span class=\"col-form-span-label\">{{data.CLIENT_NAME}}</span> </td>\n                                            <td><span class=\"col-form-span-label\">{{data.DRAMT}}</span> </td>\n                                            <td><span class=\"col-form-span-label\">{{data.CRAMT}}</span></td>\n                                            <td><span class=\"col-form-span-label\">{{data.GRANDVALUE_TOTAL}}</span> </td>\n                                            <td><span class=\"col-form-span-label\">{{data.GRANDVALUE}}</span> </td>\n                                        </tr>\n                                        <tr class=\"{{data?.isvisible ? 'd-none' : ''}}\">\n                                            <td><span class=\"col-form-span-label\"></span>\n\n                                            </td>\n                                            <td colspan=\"6\">\n                                                <!-- <span class=\"col-form-span-label\"> -->\n                                                    <table class=\"table table-bordered table-sm-new bgwhite\">\n                                                        <thead>\n                                                            <tr class=\"title-head\" style=\"background-color: #89CFF0\">\n                                                                <th style=\"width: 15px;\"></th>\n                                                                <th class=\"col-form-span-label\" colspan=\"2\">Voucher No.</th>\n                                                                <th class=\"col-form-span-label\">Date</th>\n                                                                <th class=\"col-form-span-label\">Expense</th>\n                                                                <th class=\"col-form-span-label\">Recovery </th>\n                                                            </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                            <tr *ngFor=\"let childdata of data.childdetail\">\n                                                                <td></td>\n                                                                <td colspan=\"2\">\n                                                                    <span class=\"col-form-span-label\"\n                                                                        (click)=\"voucherprint(childdata.VOUCHER_NO,childdata.VOUCHERNO)\"\n                                                                        [innerHtml]=\"childdata.VOUCHER_NO\">\n                                                                    </span>\n                                                                </td>\n                                                                <td>\n                                                                    <span class=\"col-form-span-label\"\n                                                                        (click)=\"voucherprint(childdata.VOUCHER_NO)\">{{childdata.TRAN_DATE}}\n                                                                    </span>\n                                                                </td>\n                                                                <td><span class=\"col-form-span-label\">{{childdata.PAYMENT_EURO}}</span>\n                                                                </td>\n                                                                <td><span class=\"col-form-span-label\">{{childdata.RECOVERY_EURO}}</span>\n                                                                </td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                <!-- </span> -->\n                                            </td>\n                                        </tr>\n\n                                    </ng-container>\n                                </tbody>\n                            </table>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/accounts/Accreport/jobprofit/jobprofit-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/Accreport/jobprofit/jobprofit-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: JobprofitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobprofitRoutingModule", function() { return JobprofitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobprofitreport_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobprofitreport.component */ "./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.ts");
/* harmony import */ var _mawb_cont_jobprofit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mawb-cont-jobprofit.component */ "./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.ts");
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
            title: 'Job Profit'
        },
        children: [
            { path: 'JobProfitReport', component: _jobprofitreport_component__WEBPACK_IMPORTED_MODULE_2__["JobprofitreportComponent"], data: { title: 'JobProfitReport' } },
            { path: 'MawbJobProfit/:Type', component: _mawb_cont_jobprofit_component__WEBPACK_IMPORTED_MODULE_3__["MawbContJobprofitComponent"], data: { title: 'MawbJobProfit' } },
        ]
    }
];
var JobprofitRoutingModule = /** @class */ (function () {
    function JobprofitRoutingModule() {
    }
    JobprofitRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JobprofitRoutingModule);
    return JobprofitRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/jobprofit/jobprofit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/Accreport/jobprofit/jobprofit.component.ts ***!
  \*********************************************************************/
/*! exports provided: JobprofitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobprofitComponent", function() { return JobprofitComponent; });
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

var JobprofitComponent = /** @class */ (function () {
    function JobprofitComponent() {
    }
    JobprofitComponent.prototype.ngOnInit = function () {
    };
    JobprofitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobprofit',
            template: __webpack_require__(/*! raw-loader!./jobprofit.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/jobprofit/jobprofit.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], JobprofitComponent);
    return JobprofitComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/jobprofit/jobprofit.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/accounts/Accreport/jobprofit/jobprofit.module.ts ***!
  \******************************************************************/
/*! exports provided: JobprofitModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobprofitModules", function() { return JobprofitModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _jobprofit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobprofit-routing.module */ "./src/app/accounts/Accreport/jobprofit/jobprofit-routing.module.ts");
/* harmony import */ var _jobprofit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobprofit.component */ "./src/app/accounts/Accreport/jobprofit/jobprofit.component.ts");
/* harmony import */ var _jobprofitreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobprofitreport.component */ "./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.ts");
/* harmony import */ var _mawb_cont_jobprofit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mawb-cont-jobprofit.component */ "./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var JobprofitModules = /** @class */ (function () {
    function JobprofitModules() {
    }
    JobprofitModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_jobprofit_component__WEBPACK_IMPORTED_MODULE_3__["JobprofitComponent"], _jobprofitreport_component__WEBPACK_IMPORTED_MODULE_4__["JobprofitreportComponent"], _mawb_cont_jobprofit_component__WEBPACK_IMPORTED_MODULE_5__["MawbContJobprofitComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _jobprofit_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobprofitRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_9__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], JobprofitModules);
    return JobprofitModules;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.ts ***!
  \***************************************************************************/
/*! exports provided: JobprofitreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobprofitreportComponent", function() { return JobprofitreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_jobprofitservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/jobprofitservice.service */ "./src/app/shared/service/jobprofitservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JobprofitreportComponent = /** @class */ (function () {
    function JobprofitreportComponent(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '18px',
            width: '150px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
            selectorHeight: '180px',
            selectorWidth: '200px',
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 }
        };
        this.PageName = "job profit report";
        this.singlejob1 = "";
        this.AccountTableList = [];
        this.accountcode = "";
        this.fromdt_acct = "";
        this.todt_acct = "";
        this.report_table1 = [];
        this.report_table2 = [];
        this.dataFortable1 = [];
        this.dataFortable2 = [];
        this.searchtype = "singlejob";
        this.mode_subtype = "";
        this.modetype = "";
        this.modetypeFinal = "";
        this.multi_tojobno = "";
        this.multi_fromjobno = "";
        this.to_datewise = "";
        this.from_datewise = "";
        this.single_jobno = "";
        this.cityname = "";
    }
    JobprofitreportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityname = this._loginService.getLogin()[0].CITYNAME;
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CityCode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        //   console.log(jsoncmp)
        this._dataService.getData("Accounts/ACC_ACCOUNT_FILL_JOBPROFIT_Fill", jsoncmp)
            .subscribe(function (data) {
            //  console.log(data)
            _this.AccountTableList = data.Table;
        });
    };
    JobprofitreportComponent.prototype.print = function () {
        if (this.single_jobno == '' || this.single_jobno == undefined || this.single_jobno.length < 15) {
            alert("Enter 15 digit CreditNote No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + this.single_jobno + '/', "Job Profit Report", toolbar);
        this.Reset();
    };
    JobprofitreportComponent.prototype.expt_excl = function () {
        if (this.searchtype == "acctwise") {
            this.acctwisesearch();
        }
        else if (this.searchtype == "DATE" || this.searchtype == "MJOB") {
            this.date_mjobtypeserch();
        }
    };
    JobprofitreportComponent.prototype.acctwisesearch = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsoncmp = {
            ACCTCODE: this.accountcode,
            BRANCH_CODE: this.branch,
            DATE_TYPE: this.paydate,
            FRDATE_U: this.fromdt_acct.formatted,
            TODATE_U: this.todt_acct.formatted,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            cmpid: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Accounts/ACCT_RPT_JOBWISE_ACCOUNT_JOBNO", jsoncmp)
            .subscribe(function (data) {
            // console.log(data)
            // console.log(data.Table.length, data.Table1.length);
            if (data.Table.length > "0") {
                _this.report_table1 = data.Table;
                _this.report_table1.forEach(function (row) {
                    _this.dataFortable1.push(Object.values(row));
                });
            }
            if (data.Table1.length > "0") {
                _this.report_table2 = data.Table1;
                _this.report_table2.forEach(function (row) {
                    _this.dataFortable2.push(Object.values(row));
                });
            }
            //   console.log(this.report_table2);
            var reportData = {
                data1: _this.dataFortable1,
                headers2: _this.report_table2 != "" ? Object.keys(_this.report_table2[0]) : "",
                data2: _this.dataFortable2 != "" ? _this.dataFortable2 : "",
                pagetype: "acctwise"
            };
            // console.log(reportData);
            _this.exportser.exportExceltry(reportData, "AccountsWise Job Report");
            _this.loaderService.display(false);
            _this.Reset();
        });
    };
    JobprofitreportComponent.prototype.clearDateControls = function () {
        this.from_datewise = null;
        this.to_datewise = null;
    };
    JobprofitreportComponent.prototype.date_mjobtypeserch = function () {
        var _this = this;
        this.loaderService.display(true);
        if (this.searchtype == "DATE") {
            if (this.modetype == "AIR_exp" || this.modetype == "AIR_imp") {
                this.modetypeFinal = "AIR";
            }
            else if (this.modetype == "SEA_exp" || this.modetype == "SEA_imp") {
                this.modetypeFinal = "SEA";
            }
            else if (this.modetype == "ALL" || this.modetype == "ALL") {
                this.modetypeFinal = "ALL";
            }
        }
        var jsoncmp1 = {
            FromDate: this.from_datewise != "" ? this.from_datewise.formatted : "",
            ToDate: this.to_datewise != "" ? this.to_datewise.formatted : "",
            JobNoFrom: this.multi_fromjobno != "" ? this.multi_fromjobno : "",
            JobNoTo: this.multi_tojobno != "" ? this.multi_tojobno : "",
            SearchType: this.searchtype,
            DateType: this.mode_subtype != "" ? this.mode_subtype : "",
            Mode: this.modetypeFinal != "" ? this.modetypeFinal : "",
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            con_code: ""
        };
        // console.log(jsoncmp1);
        this._dataService.getData("Accounts/ACC_RPT_JOBPROFITS_NEW", jsoncmp1)
            .subscribe(function (data) {
            // console.log(data)
            var headrarray = ["[G100236] CUSTOM DUTY ", "", "TOTAL"];
            if (data.Table5.length > "0") {
                _this.report_table1 = data.Table5;
                _this.report_table1.forEach(function (row) {
                    _this.dataFortable1.push(Object.values(row));
                });
                for (var i = 0; i < _this.report_table1.length; i++) {
                    headrarray.push(_this.report_table1[i].ACCTCODENAME);
                }
            }
            if (data.Table2.length > "0") {
                _this.report_table2 = data.Table2;
                _this.report_table2.forEach(function (row) {
                    _this.dataFortable2.push(Object.values(row));
                });
            }
            var reportData = {
                detail: (_this.searchtype == "DATE") ? ("Timeline: " + _this.from_datewise.formatted + " - " + _this.from_datewise.formatted + " TYPE: " + _this.modetype) : ("JOB No" + _this.multi_fromjobno + "-" + _this.multi_tojobno),
                data1: _this.dataFortable1,
                headers2: _this.report_table2 != "" ? Object.keys(_this.report_table2[0]) : "",
                headers1: _this.report_table1 != "" ? headrarray : "",
                data2: _this.dataFortable2 != "" ? _this.dataFortable2 : "",
                pagetype: "date_multijob"
            };
            // console.log(reportData);
            _this.exportser.exportExceltry(reportData, "JOb Profit Report");
            _this.loaderService.display(false);
            _this.Reset();
        });
    };
    JobprofitreportComponent.prototype.Reset = function () {
        this.single_jobno = "";
        this.multi_tojobno = "";
        this.multi_fromjobno = "";
        this.fromdt_acct = "";
        this.to_datewise = "";
        this.todt_acct = "";
        this.from_datewise = "";
        this.modetype = "";
        this.mode_subtype = "";
        this.accountcode = "";
        this.branch = "";
        this.paydate = "";
        this.searchtype = "singlejob";
    };
    JobprofitreportComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_jobprofitservice_service__WEBPACK_IMPORTED_MODULE_7__["JobprofitserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    JobprofitreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobprofitreport',
            template: __webpack_require__(/*! raw-loader!./jobprofitreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/jobprofit/jobprofitreport.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_jobprofitservice_service__WEBPACK_IMPORTED_MODULE_7__["JobprofitserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], JobprofitreportComponent);
    return JobprofitreportComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MawbContJobprofitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MawbContJobprofitComponent", function() { return MawbContJobprofitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MawbContJobprofitComponent = /** @class */ (function () {
    function MawbContJobprofitComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.PageName = "MAWB-job profit report";
        this.inputname = "MAWB No.";
        this.detailsdata_serch = false;
        this.reverse_CONT = false;
        this.reverse_VOCHR = false;
        this.reverse_JOB = false;
        this.searchno = "";
        this.cont_table1 = [];
        this.job_table2 = [];
        this.vouchr_table1 = [];
        this.jobdetail_table4 = [];
        this.childdetail_table4 = [];
        this.vouchr_table3 = [];
    }
    MawbContJobprofitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.PageType = params["Type"];
        });
        if (this.PageType == "MAWB") {
            this.PageName = "MAWB-job profit report";
            this.inputname = "MAWB No.";
        }
        else if (this.PageType == "CNTR") {
            this.PageName = "Container-job profit report";
            this.inputname = "Container No.";
        }
    };
    MawbContJobprofitComponent.prototype.Search = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            SearchType: this.PageType,
            searchno: this.searchno,
            strVessel: ""
        };
        this._dataService.getData("Accounts/ACC_RPT_MAWBPROFITS_JOBWISE", jsonmaster)
            .subscribe(function (data) {
            //console.log(data);
            _this.loaderService.display(false);
            if (data.Table[0].STATUS == "100") {
                _this.detailsdata_serch = true;
                _this.cont_table1 = data.Table1;
                _this.job_table2 = data.Table2;
                if (_this.job_table2.length > 0) {
                    _this.job_table2.forEach(function (job) {
                        job["childdetail"] = data.Table4.filter(function (x) { return x.JOBNO_JS === job.JOBNO; });
                        job["isvisible"] = true;
                    });
                    console.log(_this.job_table2);
                }
                _this.jobdetail_table4 = data.Table4;
                _this.vouchr_table3 = data.Table3;
                //console.log(this.jobdetail_table4);
            }
            else {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUS);
            }
        });
    };
    // findDetails(jobno) {
    //   this.Searchdata=this.job_table2;
    //   let updateItem = this.Searchdata.find(item => item.JOBNO === jobno);// && item.MAWB_CONTINAER_JS == port);
    //   let index1 = this.Searchdata.indexOf(updateItem);
    //   if (this.Searchdata[index1]["CHECK"] == true) {
    //     this.Searchdata[index1]["CHECK"] = null;
    //   }
    //   else {
    //     for (let obj = 0; obj < this.Searchdata.length; obj++) {
    //       this.Searchdata[obj]["CHECK"] = null;
    //     }
    //     let index = this.Searchdata.indexOf(updateItem);
    //     this.Searchdata[index]["CHECK"] = true;
    //   }
    //   this.childdetail_table4 = this.jobdetail_table4.filter((joblist: any) => joblist.JOBNO_JS === jobno);// && joblist.EXPT_VESSEL);
    //   if (this.childdetail_table4.length == 0) {
    //     alert("Ex-Job Not yet Opened !");
    //     this.Searchdata[index1]["CHECK"] = null;
    //     return false;
    //   }
    // }
    MawbContJobprofitComponent.prototype.findDetails = function (jobno) {
        this.childdetail_table4 = this.jobdetail_table4.filter(function (x) { return x.JOBNO_JS === jobno; });
    };
    MawbContJobprofitComponent.prototype.voucherprint = function (vouchername, voucherno) {
        var printname = vouchername.split("-")[1];
        printname = printname.trim();
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (printname == "Invoice") {
            // window.open('./#/popup/Account-Invoice-print/' + voucherno + '/', "Invoice Print", toolbar);
            var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&InvoiceNo=" + voucherno
                + "&DisplayMode=" + "0"
                + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
            window.open(URL_1, "Invoice Print", toolbar);
            return false;
        }
        else if (printname == "Credit Note") {
            window.open('./#/popup/Account-CreditNote-print/' + voucherno + '/', "CreditNote Print", toolbar);
        }
        else if (printname == "Purchase") {
            window.open('./#/popup/Account-Purchase-print/' + voucherno + '/' + "PI" + '/', "Purchase Print", toolbar);
        }
        else if (printname == "Journal") {
            window.open('./#/popup/Account-JV-Print/' + voucherno + '/' + "JV" + '/', "Journal Voucher Print", toolbar);
        }
        else if (printname == "Bank Payment") {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "BP" + '/' + voucherno + '/', "CashBook BankPayment Print", toolbar);
        }
        else if (printname == "Bank Receipt") {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "BR" + '/' + voucherno + '/', "CashBook BankReceipt Print", toolbar);
        }
        else if (printname == "Bank Receipt") {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "BR" + '/' + voucherno + '/', "CashBook BankReceipt Print", toolbar);
        }
        else if (printname == "Cash Payment") {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "CP" + '/' + voucherno + '/', "CashBook CashPayment  Print", toolbar);
        }
        else if (printname == "Cash Recipt") {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "CR" + '/' + voucherno + '/', "CashBook CashReceipt  Print", toolbar);
        }
        else if (printname == "Cash Expenses") {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + "CE" + '/' + voucherno + '/', "CashBook CashExpenses  Print", toolbar);
        }
    };
    MawbContJobprofitComponent.prototype.jobprofitreport = function (jobno) {
        if (jobno == '' || jobno == undefined || jobno.length < 15) {
            alert("Enter 15 digit Job No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + jobno + '/', "Job Profit Report", toolbar);
        this.Reset();
    };
    MawbContJobprofitComponent.prototype.setOrder_CONT = function () {
        this.reverse_CONT = !this.reverse_CONT;
    };
    MawbContJobprofitComponent.prototype.setOrder_Voucher = function () {
        this.reverse_VOCHR = !this.reverse_VOCHR;
    };
    MawbContJobprofitComponent.prototype.setOrder_JOB = function (jbno) {
        this.reverse_JOB = !this.reverse_JOB;
        // this.findDetails(jbno);
        this.job_table2.forEach(function (item) {
            if (item.JOBNO === jbno) {
                item["isvisible"] = !item["isvisible"];
            }
        });
    };
    MawbContJobprofitComponent.prototype.Reset = function () {
        this.searchno = "";
    };
    MawbContJobprofitComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    MawbContJobprofitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mawb-cont-jobprofit',
            template: __webpack_require__(/*! raw-loader!./mawb-cont-jobprofit.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/jobprofit/mawb-cont-jobprofit.component.html"),
            styles: ["\n  table{\n    margin-bottom:0rem !important\n  }\n  #icon_show{\n    font-size:18px;\n    font-weight:bold\n  }\n  "]
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MawbContJobprofitComponent);
    return MawbContJobprofitComponent;
}());



/***/ })

}]);
//# sourceMappingURL=jobprofit-jobprofit-module.js.map