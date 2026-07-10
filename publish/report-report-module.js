(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/air-cargo-status.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/air-cargo-status.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Air Cargo Status</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td class=\"width180\">\r\n                    <input type=\"radio\" value=\"Consignee\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\"><b>Consignee Name :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"ConsigneeList\" bindLabel=\"CON_NAME\" bindValue=\"CON_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"Consignee\" class=\"form-control\" [disabled]=\"Type=='Sourcing'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <input type=\"radio\" value=\"Sourcing\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\"><b>Sourcing Agent :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"SourcingAgentList\" bindLabel=\"EXP_NAME\" bindValue=\"EXP_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"SourcingAgent\" class=\"form-control\" [disabled]=\"Type=='Consignee'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>Shipment From (Origin) :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"CityList\" bindLabel=\"cityname\" bindValue=\"citycode\" placeholder=\"--Select--\" [(ngModel)]=\"Shipment\" class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onSearch()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-download\"></i>&nbsp; Export To Excel\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/chronology.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/chronology.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Chronology Search</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>Mode:</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"radio\" value=\"Sea\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">Sea</span>\r\n                    <input type=\"radio\" value=\"Air\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">Air</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>City :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"CityList\" bindLabel=\"cityname\" bindValue=\"citycode1\" placeholder=\"--Show All--\" [(ngModel)]=\"City\" class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <!-- <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>Shipper :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <select class=\"form-control width180\"   [(ngModel)]=\"Shipper\" >\r\n                        <option value=\"-1\">Please select</option>\r\n                        <option  *ngFor=\"let d of listShipper\" value={{d.SHIPPER_CODE}}>{{d.SHIPPER_NAME}}</option>\r\n                    </select>\r\n                </td>\r\n            </tr> -->\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>From Date:</b></span>\r\n                </td>\r\n                <td>\r\n                    <my-date-picker name=\"abcd\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\"></my-date-picker>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>To Date:</b></span>\r\n                </td>\r\n                <td>\r\n                    <my-date-picker name=\"abcd\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\"></my-date-picker>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onSearch()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-search\"></i>&nbsp; Search\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/delivery-status.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/delivery-status.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Delivery Status </strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">MODE:</span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"radio\" value=\"0.CONSIGNEE LINER CONTRACT\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">CONSIGNEE LINER CONTRACT</span>\r\n                    <br/>\r\n                    <input type=\"radio\" value=\"1.OUR LINER CONTRACT\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">OUR LINER CONTRACT</span>\r\n                    <br/>\r\n                    <input type=\"radio\" value=\"2.BOTH (All Contract)\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">BOTH (All Contract)</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">City :</span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"CityList\" bindLabel=\"cityname\" bindValue=\"citycode\" placeholder=\"--Select City--\" [(ngModel)]=\"City\" class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Consignee :</span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"ConsigneeList\" bindLabel=\"con_name\" bindValue=\"con_code\" placeholder=\"--Show All--\" [(ngModel)]=\"Consignee\"\r\n                        class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">From Date:</span>\r\n                </td>\r\n                <td>\r\n                    <my-date-picker name=\"abcd\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\"></my-date-picker>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">To Date:</span>\r\n                </td>\r\n                <td>\r\n                    <my-date-picker name=\"abcd\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\"></my-date-picker>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"col-form-span-heading centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onSearch()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-search\"></i>&nbsp; Search\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/ep-copy-coversheet-search.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/ep-copy-coversheet-search.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"col-md-6\">\r\n                        <table class=\"table table-bordered table-sm-new\">\r\n                            <tbody style='height:30px'>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading  centerlabel \" colspan=\"3\">\r\n                                        EP-Copy-Coversheet\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\" colspan=\"3\">\r\n                                        Report Type\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Search By</span>\r\n                                    </td>\r\n                                    <td>\r\n\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <!-- <input type=\"radio\" name=\"check\"  (click)=\"mainCheck('1')\" [checked]=\"checkWise == '1'\"/>Number Wise -->\r\n                                            <input type=\"radio\" name=\"radiogroup\" (click)=\"mainCheck('1')\" [checked]=\"checkWise == '1'\">&nbsp; Sea\r\n                                        </span>\r\n\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radiogroup\" (click)=\"mainCheck('2')\" [checked]=\"checkWise == '2'\" />&nbsp; Air\r\n                                        </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\" colspan=\"3\">\r\n                                        <input type=\"radio\" name=\"radiogroupS\" (click)=\"mainchkSearch('1')\" [checked]=\"checkWiseS == '1'\">&nbsp; Shipping Bill No\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Shipping Bill No</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n\r\n                                        <textarea class=\"form-control width300\" [(ngModel)]=\"shipbillno\" [disabled]=shipdisable></textarea>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\" colspan=\"3\">\r\n                                        <input type=\"radio\" name=\"radiogroupS\" (click)=\"mainchkSearch('2')\" [checked]=\"checkWiseS == '2'\">&nbsp; Export No\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Export No</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <input type=\"text\" [(ngModel)]=\"exptno\" maxlength=\"15\" [disabled]=exptnodisable class=\"form-control width150\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\" colspan=\"3\">\r\n                                        Subject And Date\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Subject</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n\r\n                                        <textarea class=\"form-control width300\" [(ngModel)]=\"subject\"></textarea>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Print Date</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <my-date-picker name=\"dtprint\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtprint\" required></my-date-picker>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Display Format</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"radio\" name=\"radiogroupF\" (click)=\"mainCheckF('1')\" [checked]=\"checkWiseF == '1'\">&nbsp;\r\n                                        <span class=\"col-form-span-label \">Table Format</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"radio\" name=\"radiogroupF\" (click)=\"mainCheckF('2')\" [checked]=\"checkWiseF == '2'\">&nbsp;\r\n                                        <span class=\"col-form-span-label \"> Statement Format</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <td colspan=\"3\" class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"Print\" (click)=\"print()\">\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <i class=\"fa fa-print\"></i> Print\r\n                                        </span>\r\n                                    </button>\r\n                                </td>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-dsr.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/exp-rpt-dsr.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\"> \r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3\"></div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n                        <table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t<tbody style='height:30px'>\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading  centerlabel \"  colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\tDSR Report\r\n\t\t\t\t\t\t\t\t\t</td>\r\n                                </tr>\r\n                               \r\n                                <tr>\r\n                                     \r\n                                    <td>                                        \r\n                                        <span class=\"col-form-span-label\">                                               \r\n                                            <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('1')\" [checked]=\"checkWise == '1'\"    >&nbsp; Consignee Name\r\n                                        </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                        <!-- <select class=\"form-control width180\"   [(ngModel)]=\"concode\" [disabled]=condisable >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listconcode\" value={{d.CON_CODE}}>{{d.CON_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> -->\r\n                                           <ng-select   [items]=\"listconcode\" bindLabel=\"CON_NAME\"  [disabled]=condisable\r\n                                                bindValue=\"CON_CODE\"  [(ngModel)]=\"concode\"  \r\n                                                class=\"custom\" placeholder=\"Please Select\"> \r\n                                         </ng-select>\r\n                                    </td>\r\n                                 \r\n                                </tr>  \r\n                                <tr>\r\n                                     \r\n                                    <td>                                        \r\n                                        <span class=\"col-form-span-label\">                                               \r\n                                            <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('2')\" [checked]=\"checkWise == '2'\"    >&nbsp; Sourcing  Agent \r\n                                        </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width180\"   [(ngModel)]=\"SAgent\"[disabled]=agtdisable >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let d of listSAgent\" value={{d.EXP_CODE}}>{{d.EXP_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                    </td>\r\n                                </tr>  \r\n                                <tr>\r\n                                    <td>                                        \r\n                                        <span class=\"col-form-span-label\">                                               \r\n                                            <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('3')\" [checked]=\"checkWise == '3'\"    >&nbsp; Shipper\r\n                                        </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width300\"   [(ngModel)]=\"Shipper\"[disabled]=shpdisable >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">ALL</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let d of listShipper\" value={{d.SHIPPER_CODE}}>{{d.SHIPPER_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                        <!-- <select class=\"form-control width180\"   [(ngModel)]=\"Shipper\"[disabled]=    >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let d of listShipper\" value={{d.SHIPPER_CODE}}>{{d.SHIPPER_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> -->\r\n                                    </td>\r\n                                </tr>  \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Shipmet From(Origin)</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width200\"   [(ngModel)]=\"city\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"All\">All</option>\r\n                                            <option value=\"Del\">Delhi</option>\r\n                                            <option value=\"MAA\">Chennai</option>\r\n                                            <option value=\"MUM\">Mumbai</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                         \r\n                                    </td>\r\n                                </tr>                                 \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Mode</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width200\"   [(ngModel)]=\"Mode\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Air</option>\r\n                                            <option value=\"0\">Sea</option>\r\n                                            <option value=\"2\">Sea/Air</option> \r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                         \r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">From Date</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\"  >\r\n                                        <my-date-picker name=\"dtfrm\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtfrmt\" required></my-date-picker>\r\n                                    </td>\r\n                                     \r\n\r\n                                </tr>\r\n                                 <tr>\r\n                                <td colspan=\"3\" class=\"centerlabel\" >\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"Print\"    (click)=\"onexcelGeneration()\"> <i class=\" fa fa-download\"></i> Export to Excel</button>\r\n                                    \r\n        \r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\t\t\t\r\n                    </div>\r\n\t\t\t\t\t\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-epcopy-search.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/exp-rpt-epcopy-search.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\"> \r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3\"></div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n                        <table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t<tbody style='height:30px'>\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading  centerlabel \"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tEP-Copy \r\n\t\t\t\t\t\t\t\t\t</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tReport Type\r\n\t\t\t\t\t\t\t\t\t</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Mode</span>\r\n                                    </td>\r\n                                    <td>                                        \r\n                                            <span class=\"col-form-span-label\">                                               \r\n                                                <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('1')\" [checked]=\"checkWise == '1'\"    >&nbsp; Sea \r\n                                            </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                       <span class=\"col-form-span-label\" >\r\n                                        <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('2')\" [checked]=\"checkWise == '2'\"  />&nbsp; Air \r\n                                    </span>\r\n                                    </td>\r\n                                </tr>                                \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Type</span>\r\n                                    </td>\r\n                                    <td colspan=\"3\">\r\n                                        <select class=\"form-control width200\"   [(ngModel)]=\"rpttype\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"NOT_RECEIVED\">Not Received</option>\r\n                                            <option value=\"RECEIVED_BUT_NOT_SENT_TO_THE_CLIENT\">Received But Not Sent to the Client</option>\r\n                                            <option value=\"RECEIVED_AND_SENT_TO_THE_CLIENT\">Received and Sent to the Client</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                         \r\n                                    </td>\r\n                                </tr>\r\n                                 \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">City</span>\r\n                                    </td>\r\n                                    <td colspan=\"3\">\r\n                                        <select class=\"form-control width180\"   [(ngModel)]=\"city\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listCity\" value={{d.citycode}}>{{d.cityname}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                    </td>\r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Exporter</span>\r\n                                    </td>\r\n                                    <td colspan=\"3\">\r\n                                        <select class=\"form-control width250\"   [(ngModel)]=\"exporter\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listExporter\" value={{d.exp_code}}>{{d.exp_name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                        \r\n                                    </td>\r\n                                </tr>\r\n                                 \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">From Date</span>\r\n                                    </td>\r\n                                    <td  >\r\n                                        <my-date-picker name=\"dtfrm\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtfrmt\" required></my-date-picker>\r\n                                    </td>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">To Date</span>\r\n                                    </td>\r\n                                    <td  >\r\n                                        <my-date-picker name=\"dtpto\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtto\" required></my-date-picker>\r\n                                    </td>\r\n\r\n                                </tr>\r\n                                 \r\n                                <td colspan=\"4\" class=\"centerlabel\" >\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"Print\"    (click)=\"onexcelGeneration()\"> <i class=\" fa fa-download\"></i> Export to Excel</button>\r\n                                    \r\n        \r\n                                </td>\r\n                            </tbody>\r\n                        </table>\t\t\t\r\n                    </div>\r\n\t\t\t\t\t\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-shipment-status.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/exp-rpt-shipment-status.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\"> \r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3\"></div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n                        <table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t<tbody style='height:30px'>\r\n\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading  centerlabel \"  colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\tShipment Status Report\r\n\t\t\t\t\t\t\t\t\t</td>\r\n                                </tr>\r\n                               \r\n                                <tr>\r\n                                     \r\n                                    <td>                                        \r\n                                        <span class=\"col-form-span-label\">                                               \r\n                                            <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('1')\" [checked]=\"checkWise == '1'\"    >&nbsp; Consignee Name\r\n                                        </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                        <!-- <select class=\"form-control width250\"   [(ngModel)]=\"concode\" [disabled]=condisable >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listconcode\" value={{d.con_code}}>{{d.con_name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> -->\r\n                                          <ng-select   [items]=\"listconcode\" bindLabel=\"con_name\"  [disabled]=condisable\r\n                                                bindValue=\"con_code\"  [(ngModel)]=\"concode\"  \r\n                                                class=\"custom\" placeholder=\"Please Select\"> \r\n                                </ng-select>\r\n                                    </td>\r\n                                 \r\n                                </tr>  \r\n                                <tr>\r\n                                     \r\n                                    <td>                                        \r\n                                        <span class=\"col-form-span-label\">                                               \r\n                                            <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('2')\" [checked]=\"checkWise == '2'\"    >&nbsp; Sourcing  Agent \r\n                                        </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width250\"   [(ngModel)]=\"SAgent\"[disabled]=agtdisable >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let d of listSAgent\" value={{d.exp_code}}>{{d.exp_name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                     \r\n                                    <td>                                        \r\n                                        <span class=\"col-form-span-label\">                                               \r\n                                            <input type=\"radio\"   name=\"radiogroup\"  (click)=\"mainCheck('3')\" [checked]=\"checkWise == '3'\"    >&nbsp; Business Associate\r\n                                        </span>                                       \r\n                                    </td>   \r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width250\"   [(ngModel)]=\"Busass\"[disabled]=Badisable >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let d of listBusAss\" value={{d.SUP_CODE}}>{{d.SUP_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Shipmet From(Origin)</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width200\"   [(ngModel)]=\"city\">\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">All</option>                                           \r\n                                            <option value=\"MUM\">Mumbai</option>\r\n                                            <option value=\"DEL\">Delhi</option>\r\n                                            <option value=\"AMD\">Ahmedabad</option>\r\n                                            <option value=\"CAL\">Calcutta</option>                                            \r\n                                            <option value=\"MAA\">Chennai</option>\r\n                                            <option value=\"BLR\">Bangalore</option>\r\n                                            <option value=\"TRU\">Tirupur</option>\r\n                                            <option value=\"COC\">Cochin</option>\r\n                                            <option value=\"TRN\">Tuticorin</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                                         \r\n                                    </td>\r\n                                </tr>\r\n                                 \r\n                                \r\n                                \r\n                                 \r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Shipment status from date</span>\r\n                                    </td>\r\n                                    <td colspan=\"2\"  >\r\n                                        <my-date-picker name=\"dtfrm\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtfrmt\" required></my-date-picker>\r\n                                    </td>\r\n                                     \r\n\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Mode of Shipment</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        \r\n                                            <span class=\"col-form-span-label\">\r\n                                                \r\n                                                <input type=\"radio\"   name=\"radiogroup1\"  (click)=\"ModeCheck('1')\" [checked]=\"checkmode == '1'\"    >&nbsp; Sea \r\n                                            </span>\r\n                                       \r\n                                    </td>   \r\n                                    <td>\r\n                                            <span class=\"col-form-span-label\">\r\n                                        <input type=\"radio\"   name=\"radiogroup1\"  (click)=\"ModeCheck('2')\" [checked]=\"checkmode == '2'\"  />&nbsp; Air \r\n                                    </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                <td colspan=\"3\" class=\"centerlabel\" >\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"Print\"    (click)=\"onexcelGeneration()\"> <i class=\" fa fa-download\"></i> Export to Excel</button>\r\n                                    \r\n        \r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\t\t\t\r\n                    </div>\r\n\t\t\t\t\t\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-tonnage-search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/exp-rpt-tonnage-search.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"col-md-6\">\r\n                        <table class=\"table table-bordered table-sm-new\">\r\n                            <tbody style='height:30px'>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading  centerlabel \" colspan=\"4\">\r\n                                        Tonnage\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Mode</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radiogroupM\" (click)=\"ModeCheck('1')\" [checked]=\"checkmode == '1'\">&nbsp; Sea\r\n                                        </span>\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radiogroupM\" (click)=\"ModeCheck('2')\" [checked]=\"checkmode == '2'\" />&nbsp; Air\r\n                                        </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                        <input type=\"radio\" name=\"radiogroupD\" (click)=\"mainchkDate('1')\" [checked]=\"checkdate == '1'\">&nbsp; Datewise\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">From Date</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <my-date-picker name=\"dtfrm\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtfrmt\" required [disabled]=fddisable></my-date-picker>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">To Date</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <my-date-picker name=\"dtpto\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtto\" required [disabled]=fddisable></my-date-picker>\r\n                                    </td>\r\n\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                        <input type=\"radio\" name=\"radiogroupD\" (click)=\"mainchkDate('2')\" [checked]=\"checkdate == '2'\">&nbsp; Weekly\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \">Date</span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <my-date-picker name=\"dtfrm\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtwkfrmt\" required [disabled]=wkdisable></my-date-picker>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\">\r\n                                                <span class=\"col-form-span-label \">Origin</span>\r\n                                            </span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            \r\n                                            <ng-select  class=\"form-control width250\"\r\n                                                #select\r\n                                                [items]=\"listorigin\"\r\n                                                [multiple]=\"true\"                                                 \r\n                                                bindLabel=\"city_code\"\r\n                                                bindValue=\"city_code\"\r\n                                                [(ngModel)]=\"origin\">\r\n                                        </ng-select>\r\n                                        \r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\">\r\n                                                <input type=\"radio\" name=\"radiogroupS\" (click)=\"mainSub('1')\" [checked]=\"checkSub == '1'\">&nbsp; Consignee\r\n                                            </span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <select class=\"form-control width250\" [(ngModel)]=\"concode\" [disabled]=condisable>\r\n                                                <option value=\"-1\">Please select</option>\r\n                                                <option *ngFor=\"let d of listconcode\" value={{d.con_code}}>{{d.con_name}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\">\r\n                                                <input type=\"radio\" [disabled]=aldisableR name=\"radiogroupS\" (click)=\"mainSub('2')\" [checked]=\"checkSub == '2'\">&nbsp; Airline\r\n                                            </span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <select class=\"form-control width250\" [(ngModel)]=\"aline\" [disabled]=aldisable>\r\n                                                <option value=\"-1\">Please select</option>\r\n                                                <option *ngFor=\"let d of listAline\" value={{d.AWB_PRIFIX}}>{{d.AIRLINE_NAME}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\">\r\n                                                <input type=\"radio\" name=\"radiogroupS\" (click)=\"mainSub('3')\" [checked]=\"checkSub == '3'\">&nbsp; Agent\r\n                                            </span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <select class=\"form-control width250\" [(ngModel)]=\"SAgent\" [disabled]=agtdisable>\r\n                                                <option value=\"-1\">Please select</option>\r\n                                                <option *ngFor=\"let d of listAgent\" value={{d.SUP_CODE}}>{{d.SUP_NAME}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\">\r\n                                                <span class=\"col-form-span-label \">Destination</span>\r\n                                            </span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">                                           \r\n                                            <ng-select  class=\"form-control width250\"\r\n                                                #select\r\n                                                [items]=\"listdetport\"\r\n                                                [multiple]=\"true\"                                                 \r\n                                                bindLabel=\"city_name\"\r\n                                                bindValue=\"city_code\"\r\n                                                [(ngModel)]=\"dest\">\r\n                                            </ng-select>                                    \r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"3\" class=\"centerlabel\" >\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"Print\"    (click)=\"onexcelGeneration()\"> <i class=\" fa fa-download\"></i> Export to Excel</button>\r\n                                            \r\n                \r\n                                        </td>\r\n                                   </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/exp_rpt_cargo_onhand.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/exp_rpt_cargo_onhand.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"col-md-6\">\r\n                        <table class=\"table table-bordered table-sm-new\">\r\n                            <tbody style='height:30px'>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label \">Mode of Shipment</span>\r\n                                    </td>\r\n                                    <td>\r\n\r\n                                        <span class=\"col-form-span-label\">\r\n\r\n                                            <input type=\"radio\" name=\"radiogroup1\" value=\"1\" [(ngModel)]=\"checkmode\">&nbsp; Sea\r\n                                        </span>\r\n\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radiogroup1\" value=\"2\" [(ngModel)]=\"checkmode\" />&nbsp; Air\r\n                                        </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"col-form-span-label centerlabel \">\r\n                                        Consignee\r\n                                    </td>\r\n                                    <td colspan=\"2\">\r\n                                        <select class=\"form-control width250\" [(ngModel)]=\"concode\" [disabled]=\"condisable\">\r\n                                            <option value=\"-1\">Please select</option>\r\n                                            <option *ngFor=\"let d of listconcode\" value={{d.CON_CODE}}>{{d.CON_NAME}}</option>\r\n                                        </select>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"3\" class=\"centerlabel\">\r\n                                        <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onexcelGeneration()\">\r\n                                            <span class=\"col-form-span-label\">\r\n                                                <i class=\"fa fa-download\"></i>&nbsp; Export To Excel\r\n                                            </span>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/shipment-progress.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/shipment-progress.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Shipment Progress Search</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>MODE:</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"radio\" value=\"Sea\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">Sea</span>\r\n                    <input type=\"radio\" value=\"Air\" name=\"rbReportType\" [(ngModel)]=\"ReportType\" />\r\n                    <span class=\"col-form-span-label\">Air</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>City :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"CityList\" bindLabel=\"cityname\" bindValue=\"citycode1\" placeholder=\"--Select City--\" [(ngModel)]=\"City\"\r\n                        class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>From Date:</b></span>\r\n                </td>\r\n                <td>\r\n                    <my-date-picker name=\"abcd\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\"></my-date-picker>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b></b>To Date:</span>\r\n                </td>\r\n                <td>\r\n                    <my-date-picker name=\"abcd\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\"></my-date-picker>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>Entered Date</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"radio\" value=\"actual\" name=\"rbDateType\" [(ngModel)]=\"DateType\" />\r\n                    <span class=\"col-form-span-label\">Actual</span>\r\n                    <input type=\"radio\" value=\"system\" name=\"rbDateType\" [(ngModel)]=\"DateType\" />\r\n                    <span class=\"col-form-span-label\">System</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>Display Type</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <table class=\"table table-sm-new bgwhite\">\r\n                        <tr>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"0\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">DocRecd On</span>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"1\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">Approval Received On</span>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"2\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">Shipping Bill Dt</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"3\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">Custom Cleared On</span>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"4\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">CargoRecd On</span>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"5\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">EpCopy Received On</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"6\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">Carting Date</span>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"7\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">EpCopy Sent On</span>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"radio\" value=\"8\" name=\"rbDisplayType\" [(ngModel)]=\"DisplayType\" />\r\n                                <span class=\"col-form-span-label\">Out of Charge Date </span>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"col-form-span-heading centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onSearch()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-search\"></i>&nbsp; Search\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/tracking-air-booking.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/tracking-air-booking.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>TRACKING AIR BOOKING</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td class=\"width180\">\r\n                    <input type=\"radio\" value=\"Consignee\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\"><b>Consignee Name :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"ConsigneeList\" bindLabel=\"CON_NAME\" bindValue=\"CON_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"Consignee\" class=\"form-control\" [disabled]=\"Type=='Sourcing'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <input type=\"radio\" value=\"Sourcing\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\"><b>Sourcing Agent :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"SourcingAgentList\" bindLabel=\"EXP_NAME\" bindValue=\"EXP_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"SourcingAgent\" class=\"form-control\" [disabled]=\"Type=='Consignee'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"><b>Shipment From (Origin) :</b></span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"CityList\" bindLabel=\"cityname\" bindValue=\"citycode\" placeholder=\"--Select--\" [(ngModel)]=\"Shipment\" class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onSearch()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-download\"></i>&nbsp; Export To Excel\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/report/tracking-air-shipment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/report/tracking-air-shipment.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>TRACKING AIR Shipment</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td class=\"width180\">\r\n                    <input type=\"radio\" value=\"ConsigneeFormat\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Consignee Format :</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"ConsigneeFormatList\" bindLabel=\"CON_NAME\" bindValue=\"CON_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"ConsigneeFormat\"\r\n                        class=\"form-control\" [disabled]=\"Type=='Consignee'||Type=='Sourcing'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width180\">\r\n                    <input type=\"radio\" value=\"Consignee\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Consignee Name :</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"ConsigneeList\" bindLabel=\"CON_NAME\" bindValue=\"CON_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"Consignee\"\r\n                        class=\"form-control\" [disabled]=\"Type=='ConsigneeFormat'||Type=='Sourcing'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <input type=\"radio\" value=\"Sourcing\" name=\"rbType\" [(ngModel)]=\"Type\" />\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Sourcing Agent :</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"SourcingAgentList\" bindLabel=\"EXP_NAME\" bindValue=\"EXP_CODE\" placeholder=\"--Select--\" [(ngModel)]=\"SourcingAgent\"\r\n                        class=\"form-control\" [disabled]=\"Type=='ConsigneeFormat'||Type=='Consignee'\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Shipment From (Origin) :</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"CityList\" bindLabel=\"cityname\" bindValue=\"citycode\" placeholder=\"--Select--\" [(ngModel)]=\"Shipment\" class=\"form-control\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"button\" (click)=\"onSearch()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-download\"></i>&nbsp; Export To Excel\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/export/report/air-cargo-status.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/export/report/air-cargo-status.component.ts ***!
  \*************************************************************/
/*! exports provided: AirCargoStatusReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirCargoStatusReportComponent", function() { return AirCargoStatusReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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





var AirCargoStatusReportComponent = /** @class */ (function () {
    function AirCargoStatusReportComponent(_router, _dataService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.ConsigneeList = [];
        this.SourcingAgentList = [];
        this.CityList = [];
        this.Type = 'Consignee';
        this.Consignee = null;
        this.SourcingAgent = null;
        this.Shipment = null;
    }
    AirCargoStatusReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CityList = [{ citycode: "All", citycode1: "All", cityname: "All" }];
        this._loginService.verifyRights('213', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        this.pageLoad();
    };
    AirCargoStatusReportComponent.prototype.pageLoad = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getCityList", {})
            .subscribe(function (data) {
            data.Table.forEach(function (key) {
                _this.CityList.push({ citycode: key.citycode, citycode1: key.citycode1, cityname: key.cityname });
            });
            _this.CityList = JSON.parse(JSON.stringify(_this.CityList));
            _this.Shipment = _this._loginService.getLogin()[0].CITYCODE;
        });
        this._dataService.getData("Export/Fill_dsr_PAGELOAD", {})
            .subscribe(function (data) {
            _this.ConsigneeList = data.Table;
            _this.SourcingAgentList = data.Table1;
            _this._loaderService.display(false);
        });
    };
    AirCargoStatusReportComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.Type === 'Consignee') {
            if (this.Consignee == null) {
                alert('Please Select the Consignee Name. ');
                return false;
            }
        }
        else if (this.Type === 'Sourcing') {
            if (this.SourcingAgent == null) {
                alert('Please Select the Sourcing Agent. ');
                return false;
            }
        }
        var _jsonGet = {
            client: (this.Consignee != null) ? this.Consignee : '',
            agent: (this.SourcingAgent != null) ? this.SourcingAgent : '',
            origin: this.Shipment,
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmpcode: this._loginService.getLogin()[0].CMPCODE
        };
        this._loaderService.display(true);
        this._dataService.getDownload("Export/Generate_Air_Cargo_Status", _jsonGet, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "RPT_CARGO_STATUS" + _this._dataService.timeFormatAMPM() + ".xls");
            _this._loaderService.display(false);
        });
    };
    AirCargoStatusReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    AirCargoStatusReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./air-cargo-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/air-cargo-status.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], AirCargoStatusReportComponent);
    return AirCargoStatusReportComponent;
}());



/***/ }),

/***/ "./src/app/export/report/chronology.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/export/report/chronology.component.ts ***!
  \*******************************************************/
/*! exports provided: ChrnologyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChrnologyReportComponent", function() { return ChrnologyReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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





var ChrnologyReportComponent = /** @class */ (function () {
    function ChrnologyReportComponent(_router, _dataService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.CityList = [];
        this.ReportType = 'Sea';
        this.City = '';
        this.FromDate = null;
        this.ToDate = null;
        this.listShipper = [];
        this.Shipper = "-1";
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
    }
    ChrnologyReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights('20', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        this.pageLoad();
    };
    ChrnologyReportComponent.prototype.pageLoad = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getCityList", {})
            .subscribe(function (data) {
            _this.CityList = data.Table;
            _this.City = _this._loginService.getLogin()[0].CITYCODE1;
            //console.log("City ", data);
            _this._loaderService.display(false);
        });
        // this._dataService.getAll("Export/Fill_dsr_PAGELOAD")
        // .subscribe((data: any) => {
        //         this.listShipper=data.Table3
        // });
    };
    ChrnologyReportComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.City == null) {
            alert("Please select City");
            return false;
        }
        if (this.FromDate == null) {
            alert("Please select From date");
            return false;
        }
        if (this.ToDate == null) {
            alert("Please select To date");
            return false;
        }
        if (this._dataService.dateTWoComparison(this.FromDate.formatted, this.ToDate.formatted)) {
            alert("To date must be greater than from date");
            return false;
        }
        var _jsonGet = {
            mode: this.ReportType,
            citycode1: this.City,
            fromdate: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate.formatted),
            todate: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate.formatted),
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
        };
        this._loaderService.display(true);
        this._dataService.getDownload("Export/Generate_Chronology", _jsonGet, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "Chronology" + _this._dataService.timeFormatAMPM() + ".xls");
            _this._loaderService.display(false);
        });
    };
    ChrnologyReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    ChrnologyReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./chronology.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/chronology.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ChrnologyReportComponent);
    return ChrnologyReportComponent;
}());



/***/ }),

/***/ "./src/app/export/report/delivery-status.component.ts":
/*!************************************************************!*\
  !*** ./src/app/export/report/delivery-status.component.ts ***!
  \************************************************************/
/*! exports provided: DeliveryStatusReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryStatusReportComponent", function() { return DeliveryStatusReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeliveryStatusReportComponent = /** @class */ (function () {
    function DeliveryStatusReportComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.CityList = [];
        this.ConsigneeList = [];
        this.ReportType = '0.CONSIGNEE LINER CONTRACT';
        this.City = '';
        this.Consignee = '0';
        this.FromDate = null;
        this.ToDate = null;
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
    }
    DeliveryStatusReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights('21', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        this.pageLoad();
    };
    DeliveryStatusReportComponent.prototype.pageLoad = function () {
        this.getCityData();
        this.getConsigneeData();
    };
    DeliveryStatusReportComponent.prototype.getCityData = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getCityList", {})
            .subscribe(function (data) {
            _this.CityList = data.Table;
            _this.City = _this._loginService.getLogin()[0].CITYCODE;
            _this._loaderService.display(false);
        });
    };
    DeliveryStatusReportComponent.prototype.getConsigneeData = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getConsigneeList", {})
            .subscribe(function (data) {
            _this.ConsigneeList = data.Table;
            _this._loaderService.display(false);
        });
    };
    DeliveryStatusReportComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.City == null) {
            alert("Please select City");
            return false;
        }
        if (this.FromDate == null) {
            alert("Please select From date");
            return false;
        }
        if (this.ToDate == null) {
            alert("Please select To date");
            return false;
        }
        if (this._dataService.dateTWoComparison(this.FromDate.formatted, this.ToDate.formatted)) {
            alert("To date must be greater than from date");
            return false;
        }
        this._loaderService.display(true);
        var _jsonGet = {
            mode: this.ReportType,
            citycode: this.City,
            supplier: (this.Consignee != null) ? this.Consignee : '0',
            fromdate: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.FromDate.formatted),
            todate: this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ToDate.formatted)
        };
        this._dataService.getDownload("Export/Generate_Delivery_Status", _jsonGet, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "Delivery_Status" + _this._dataService.timeFormatAMPM() + ".xls");
            _this._loaderService.display(false);
        });
    };
    DeliveryStatusReportComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    DeliveryStatusReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./delivery-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/delivery-status.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], DeliveryStatusReportComponent);
    return DeliveryStatusReportComponent;
}());



/***/ }),

/***/ "./src/app/export/report/ep-copy-coversheet-search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/export/report/ep-copy-coversheet-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExptRptEpCopySheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptRptEpCopySheet", function() { return ExptRptEpCopySheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExptRptEpCopySheet = /** @class */ (function () {
    function ExptRptEpCopySheet(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.checkWise = "1";
        this.checkWiseS = "1";
        this.checkWiseF = "1";
        this.shipbillno = "";
        this.exptno = "";
        this.subject = "Shipped on :";
        this.dtprint = "";
        this.shipdisable = false;
        this.exptnodisable = true;
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
    }
    ExptRptEpCopySheet.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(19, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
    };
    /*  print() {
          let mode; let searchcrt; let searchval; let rptfrmt,dt ;
          if (this.dtprint == "") { dt = "" } else { dt = this.dtprint.formatted; }
          if (this.checkWise == '1') { mode = 'Sea'; }
          else { mode = "Air"; }
  
          if (this.checkWiseS == '1') {
              searchcrt = "SHPBILNO";
              searchval = this.shipbillno;
          }
          else {
              searchcrt = "EXPTNO";
              searchval = this.exptno;
          }
  
          if (this.checkWiseF == '1') { rptfrmt = "tbl"; }
          else { rptfrmt = "smt"; }
          this._toasterService.toast('info', 'Complete', "Generate Ep copy coversheet");
          this.loaderService.display(true);
  
  
          const jsonExport = { SECHMODE: searchcrt, RPTFRMT: rptfrmt, VALUE: searchval, EXPT_MODE: mode };
  
          this._dataService.getDownload("Export/Generate_EpCopy", jsonExport, { responseType: 'arraybuffer' })
              .subscribe((data: any) => {
                  this._dataService.html_downloadFileByUrl(data, "EP_Copy_Coversheet.html");
                  this.loaderService.display(false);
  
              });
      }*/
    ExptRptEpCopySheet.prototype.print = function () {
        // window.open('www.manilal.com', "_blank");
        var mode, searchcrt, searchval, rptfrmt, dt;
        if (this.dtprint == "") {
            dt = "";
        }
        else {
            dt = this.dtprint.formatted;
        }
        if (this.checkWise == '1') {
            mode = 'sea';
        }
        else {
            mode = "air";
        }
        if (this.checkWiseS == '1') {
            searchcrt = "SHPBILNO";
            searchval = this.shipbillno;
        }
        else {
            searchcrt = "EXPTNO";
            searchval = this.exptno;
        }
        if (this.checkWiseF == '1') {
            rptfrmt = "TABLE";
        }
        else {
            rptfrmt = "STATEMENT";
        }
        var URL = "http://manilal.com/erp/UI/Export/frm_Exp_Rpt_EpCopyCoverSheet_Print.aspx?" +
            // let URL = "http://localhost:52299/erp/UI/Export/frm_Exp_Rpt_EpCopyCoverSheet_Print.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&SearchType=" + rptfrmt
            + "&Exptno=" + this.shipbillno
            + "&PrintDt=" + dt
            + "&EPSubject=" + this.subject
            + "&Mode=" + mode
            + "&Exportno=" + this.exptno
            + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    ExptRptEpCopySheet.prototype.mainCheck = function (ctype) {
        this.checkWise = ctype;
        if (this.checkWise == '2') {
            this.subject = "";
        }
    };
    ExptRptEpCopySheet.prototype.mainCheckF = function (ctype) {
        this.checkWiseF = ctype;
    };
    ExptRptEpCopySheet.prototype.mainchkSearch = function (ctype) {
        this.checkWiseS = ctype;
        if (this.checkWiseS == "1") {
            this.shipdisable = false;
            this.exptnodisable = true;
            this.shipbillno = "";
        }
        else {
            this.shipdisable = true;
            this.exptnodisable = false;
            this.exptno = "";
        }
    };
    ExptRptEpCopySheet.prototype.mainchkFormat = function (ctype) {
        this.checkWiseF = ctype;
    };
    ExptRptEpCopySheet.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    ExptRptEpCopySheet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-epcopy-rpt',
            template: __webpack_require__(/*! raw-loader!./ep-copy-coversheet-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/ep-copy-coversheet-search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ExptRptEpCopySheet);
    return ExptRptEpCopySheet;
}());



/***/ }),

/***/ "./src/app/export/report/exp-rpt.component.ts":
/*!****************************************************!*\
  !*** ./src/app/export/report/exp-rpt.component.ts ***!
  \****************************************************/
/*! exports provided: ExptRptEpCopyExl, ExptDSRExl, ExptTonnage, Exptshipmentstatus, ExptRptCargoOnHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptRptEpCopyExl", function() { return ExptRptEpCopyExl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptDSRExl", function() { return ExptDSRExl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptTonnage", function() { return ExptTonnage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exptshipmentstatus", function() { return Exptshipmentstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptRptCargoOnHand", function() { return ExptRptCargoOnHand; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExptRptEpCopyExl = /** @class */ (function () {
    function ExptRptEpCopyExl(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.checkWise = "1";
        this.rpttype = "-1";
        this.city = "-1";
        this.exporter = "-1";
        this.dtfrmt = "";
        this.dtto = "";
        this.listExporter = [];
        this.listCity = [];
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
    }
    ExptRptEpCopyExl.prototype.onexcelGeneration = function () {
        var _this = this;
        this._toasterService.toast('info', 'inprocess', "Start generating Ep-Copy Excel");
        this.loaderService.display(true);
        var dtfrom, todt, mode;
        if (this.checkWise == "1") {
            mode = "SEA";
        }
        else {
            mode = "AIR";
        }
        dtfrom = this.dtfrmt.formatted;
        todt = this.dtto.formatted;
        var login_name = this._loginService.getLogin()[0].CMPID;
        //   console.log(this._loginService.getLogin()[0]);
        var jsonExport = { Mode: mode, Type: this.rpttype, Exporter: this.exporter, DateType: "DOCUMENT_RECEIVED", FromDate: dtfrom, ToDate: todt, City: this.city, cmp_code: this._loginService.getLogin()[0].CMPCODE, CityCode: this._loginService.getLogin()[0].CITYCODE, Username: this._loginService.getLogin()[0].CMPID };
        this._dataService.getDownload("Export/exp_Rpt_EpCopy", jsonExport, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, "Ep_copy_" + login_name + ".xls");
            _this.loaderService.display(false);
        });
    };
    ExptRptEpCopyExl.prototype.mainCheck = function (ctype) {
        this.checkWise = ctype;
    };
    ExptRptEpCopyExl.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(19, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        var jsonExport = { Cmpid: this._loginService.getLogin()[0].CMPID, Citycode: this._loginService.getLogin()[0].CITYCODE, Citycode1: this._loginService.getLogin()[0].CITYCODE1 };
        this._dataService.getData("Export/Fill_Exporter", jsonExport)
            .subscribe(function (data) {
            _this.listExporter = data.Table;
        });
        this._dataService.getAll("Export/Fill_City")
            .subscribe(function (data) {
            _this.listCity = data.Table;
        });
    };
    ExptRptEpCopyExl.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    ExptRptEpCopyExl = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-epcopy-exl-rpt',
            template: __webpack_require__(/*! raw-loader!./exp-rpt-epcopy-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-epcopy-search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ExptRptEpCopyExl);
    return ExptRptEpCopyExl;
}());

var ExptDSRExl = /** @class */ (function () {
    function ExptDSRExl(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.checkWise = "1";
        this.city = "-1";
        this.concode = null; //string = "-1";
        this.SAgent = "-1";
        this.Shipper = "-1";
        this.Mode = "-1";
        this.dtfrmt = "";
        this.condisable = false;
        this.agtdisable = true;
        this.shpdisable = true;
        this.listconcode = [];
        this.listSAgent = [];
        this.listShipper = [];
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
    }
    ExptDSRExl.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(93, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        this._dataService.getAll("Export/Fill_dsr_PAGELOAD")
            .subscribe(function (data) {
            _this.listconcode = data.Table;
            _this.listSAgent = data.Table1;
            _this.listShipper = data.Table3;
        });
    };
    ExptDSRExl.prototype.mainCheck = function (ctype) {
        this.checkWise = ctype;
        if (ctype == "1") {
            this.condisable = false;
            this.agtdisable = true;
            this.shpdisable = true;
            this.SAgent = "-1";
            this.Shipper = "-1";
        }
        else if (ctype == "2") {
            this.condisable = true;
            this.agtdisable = false;
            this.shpdisable = true;
            this.concode = "-1";
            this.Shipper = "-1";
        }
        else {
            this.condisable = true;
            this.agtdisable = true;
            this.shpdisable = false;
            this.concode = "-1";
            this.SAgent = "-1";
        }
    };
    ExptDSRExl.prototype.onexcelGeneration = function () {
        var _this = this;
        this._toasterService.toast('info', 'inprocess', "Start generating DSR Excel");
        this.loaderService.display(true);
        var dtfrom, todt, mode, consignee, SourcAgent, shipper;
        if (this.checkWise == "1") {
            if (this.concode == "-1" || this.concode == null) {
                this._toasterService.toast('error', 'Error', "Please select consignee");
                this.loaderService.display(false);
                return false;
            }
        }
        else if (this.checkWise == "2") {
            if (this.SAgent == "-1") {
                this._toasterService.toast('error', 'Error', "Please select Sourcing Agent");
                this.loaderService.display(false);
                return false;
            }
        }
        else {
            if (this.Shipper == "-1") {
                this._toasterService.toast('error', 'Error', "Please select Shipper");
                this.loaderService.display(false);
                return false;
            }
        }
        if (this.Mode == "-1") {
            this._toasterService.toast('error', 'Error', "Please select Shipment Mode");
            this.loaderService.display(false);
            return false;
        }
        dtfrom = this.dtfrmt.formatted;
        if (this.concode == "-1" || this.concode == null) {
            consignee = "0";
        }
        else {
            consignee = this.concode;
        }
        if (this.SAgent == "-1") {
            SourcAgent = "0";
        }
        else {
            SourcAgent = this.SAgent;
        }
        if (this.Shipper == "-1") {
            shipper = "0";
        }
        else {
            shipper = this.Shipper;
        }
        if (this.checkWise == "1") {
            consignee = this.concode;
        }
        else if (this.checkWise == "2") {
            SourcAgent = this.SAgent;
            consignee = "AGT";
        }
        else if (this.checkWise == "3") {
            SourcAgent = this.Shipper;
            consignee = "SHP";
        }
        var jsonExport = { concode: consignee, expcode: SourcAgent, FromDate: dtfrom, origin: this.city, cmp_id: this._loginService.getLogin()[0].CMPID, cmpcode: this._loginService.getLogin()[0].CMPCODE, Mode: this.Mode };
        this._dataService.getDownload("Export/exp_Rpt_DSR", jsonExport, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, "DSR_Report.xls");
            _this.loaderService.display(false);
        });
    };
    ExptDSRExl.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    ExptDSRExl = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dsr-exl-rpt',
            template: __webpack_require__(/*! raw-loader!./exp-rpt-dsr.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-dsr.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ExptDSRExl);
    return ExptDSRExl;
}());

var ExptTonnage = /** @class */ (function () {
    function ExptTonnage(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.checkmode = "1";
        this.checkdate = "1";
        this.checkSub = "1";
        this.fddisable = false;
        this.wkdisable = true;
        this.condisable = false;
        this.aldisable = true;
        this.agtdisable = true;
        this.destdisable = true;
        this.aldisableR = false;
        this.dtfrmt = "";
        this.dtto = "";
        this.dtwkfrmt = "";
        this.concode = "-1";
        this.aline = "-1";
        this.SAgent = "-1";
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
    }
    ExptTonnage.prototype.ModeCheck = function (ctype) {
        if (ctype == "1") {
            this.aldisableR = true;
            this.destdisable = false;
        }
        else {
            this.aldisableR = false;
        }
    };
    ExptTonnage.prototype.mainchkDate = function (ctype) {
        if (ctype == "1") {
            this.fddisable = false;
            this.wkdisable = true;
        }
        else {
            this.fddisable = true;
            this.wkdisable = false;
        }
    };
    ExptTonnage.prototype.mainSub = function (ctype) {
        if (ctype == "1") {
            this.condisable = false;
            this.agtdisable = true;
            this.aldisable = true;
        }
        else if (ctype == "2") {
            this.condisable = true;
            this.agtdisable = false;
            this.aldisable = true;
        }
        else if (ctype == "3") {
            this.condisable = true;
            this.agtdisable = false;
            this.aldisable = true;
        }
    };
    ExptTonnage.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(62, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        this._dataService.getAll("Export/Fill_Tonnage_PAGELOAD")
            .subscribe(function (data) {
            _this.listconcode = data.Table;
            _this.listAline = data.Table1;
            _this.listAgent = data.Table2;
        });
        this._dataService.getAll("Export/Fill_Tonnage_PAGELOAD_origin_India_Air")
            .subscribe(function (data) {
            _this.listorigin = data.Table;
        });
        this._dataService.getAll("Export/Fill_Tonnage_PAGELOAD_Dest_India_SeaAir")
            .subscribe(function (data) {
            _this.listdetport = data.Table;
        });
    };
    ExptTonnage.prototype.onexcelGeneration = function () {
        var _this = this;
        this._toasterService.toast('info', 'inprocess', "Start generating Cargo on Hand Excel");
        this.loaderService.display(true);
        var filname, mode, dtfrom, TOdt, wkdt, RType, SearchVal;
        if (this.checkdate == "1") {
            RType = 'Date';
            dtfrom = this.dtfrmt.formatted;
            TOdt = this.dtto.formatted;
            if (dtfrom == "") {
                this._toasterService.toast('warning', 'warning', "Please select From date");
                this.loaderService.display(false);
                return false;
            }
            if (TOdt == "") {
                this._toasterService.toast('warning', 'warning', "Please select Todate");
                this.loaderService.display(false);
                return false;
            }
        }
        if (this.checkdate == "2") {
            RType = 'Day';
            wkdt = this.dtwkfrmt.formatted;
            if (wkdt == "") {
                this._toasterService.toast('warning', 'warning', "Please select Week date");
                this.loaderService.display(false);
                return false;
            }
        }
        if (this.checkSub == "1") {
            RType = 'DATECON';
            if (this.concode == "-1") {
                this._toasterService.toast('warning', 'warning', "Please select consignee");
                this.loaderService.display(false);
                return false;
            }
            else {
                SearchVal = this.concode;
            }
            if (this.checkSub == "1" && this.checkdate == "2") {
                RType = 'DATECON';
            }
            else {
                RType = 'DATECON';
            }
        }
        else if (this.checkSub == "2") {
            if (this.aline == "-1") {
                this._toasterService.toast('warning', 'warning', "Please select AirLine");
                this.loaderService.display(false);
                return false;
            }
            else {
                SearchVal = this.aline;
            }
            if (this.checkSub == "2" && this.checkdate == "2") {
                RType = 'DATESUP';
            }
            else {
                RType = 'DAYSUP';
            }
        }
        else if (this.checkSub == "3") {
            if (this.SAgent == "-1") {
                this._toasterService.toast('warning', 'warning', "Please select Agent");
                this.loaderService.display(false);
                return false;
            }
            else {
                SearchVal = this.SAgent;
            }
            if (this.checkSub == "3" && this.checkdate == "2") {
                RType = 'DATEAGT';
            }
            else {
                RType = 'DAYAGT';
            }
        }
        if (this.checkmode == "1") {
            mode = "SEA";
            filname = "SEA_TONNAGE.XLS";
        }
        else {
            mode = "AIR";
            filname = "AIR_TONNAGE.XLS";
        }
        var jsonShip = { FromDate: dtfrom, ToDate: TOdt, Mode: mode, Origin: this.origin.toString(), Consignee: SearchVal, Type: RType, WeekDay: wkdt, cmpid: this._loginService.getLogin()[0].CMPID, cmpcode: this._loginService.getLogin()[0].CMPCODE, destination: this.dest.toString(), };
        this._dataService.getDownload("Export/exp_Rpt_AirTonnage", jsonShip, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, filname);
            _this.loaderService.display(false);
        });
    };
    ExptTonnage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    ExptTonnage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tonnage-exl-rpt',
            template: __webpack_require__(/*! raw-loader!./exp-rpt-tonnage-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-tonnage-search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ExptTonnage);
    return ExptTonnage;
}());

var Exptshipmentstatus = /** @class */ (function () {
    function Exptshipmentstatus(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.concode = null; //= "-1";
        this.SAgent = "-1";
        this.Busass = "-1";
        this.city = "All";
        this.dtfrmt = "";
        this.checkWise = "1";
        this.checkmode = "1";
        this.condisable = false;
        this.agtdisable = true;
        this.Badisable = true;
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
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
    }
    Exptshipmentstatus.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(76, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        this._dataService.getAll("Export/Fill_Tonnage_PAGELOAD")
            .subscribe(function (data) {
            _this.listconcode = data.Table;
        });
        this._dataService.getAll("Export/Fill_ship_status_source_agent")
            .subscribe(function (data) {
            _this.listSAgent = data.Table;
        });
        this._dataService.getAll("Export/Fill_ship_status_business_associate")
            .subscribe(function (data) {
            _this.listBusAss = data.Table;
        });
    };
    Exptshipmentstatus.prototype.mainCheck = function (ctype) {
        this.checkWise = ctype;
        if (ctype == "1") {
            this.condisable = false;
            this.agtdisable = true;
            this.Badisable = true;
        }
        if (ctype == "2") {
            this.condisable = true;
            this.agtdisable = false;
            this.Badisable = true;
        }
        if (ctype == "3") {
            this.condisable = true;
            this.agtdisable = true;
            this.Badisable = false;
        }
    };
    Exptshipmentstatus.prototype.ModeCheck = function (ctype) {
        this.checkmode = ctype;
    };
    Exptshipmentstatus.prototype.onexcelGeneration = function () {
        var _this = this;
        this._toasterService.toast('info', 'inprocess', "Start generating shipment Status Excel");
        this.loaderService.display(true);
        var dtfrom, mode, client, ReportType, clientname, type;
        type = "0";
        dtfrom = this.dtfrmt.formatted;
        if (this.checkWise == "1") {
            ReportType = "Consignee";
            if (this.concode == "-1" || this.concode == null) {
                this._toasterService.toast('warning', 'warning', "Please select consignee");
                this.loaderService.display(false);
                return false;
            }
            else {
                client = this.concode;
                this.Namelist = this.listconcode.filter(function (linerlist) { return linerlist.con_code == _this.concode; });
                clientname = this.Namelist[0].con_name;
            }
        }
        if (this.checkWise == "2") {
            ReportType = "SourcingAgent";
            if (this.SAgent == "-1") {
                this._toasterService.toast('warning', 'warning', "Please select Sourcing Agent");
                this.loaderService.display(false);
                return false;
            }
            else {
                client = this.SAgent;
                this.Namelist = this.listSAgent.filter(function (linerlist) { return linerlist.exp_code == _this.SAgent; });
                clientname = this.Namelist[0].con_name;
            }
        }
        if (this.checkWise == "3") {
            ReportType = "BusinessAssociate";
            if (this.Busass == "-1") {
                this._toasterService.toast('warning', 'warning', "Please select Bussiness Associate");
                this.loaderService.display(false);
                return false;
            }
            else {
                client = this.Busass;
                this.Namelist = this.listBusAss.filter(function (linerlist) { return linerlist.SUP_CODE == _this.Busass; });
                clientname = this.Namelist[0].SUP_NAME;
            }
        }
        if (dtfrom == "") {
            this._toasterService.toast('warning', 'warning', "Please select date");
            this.loaderService.display(false);
            return false;
        }
        if (this.checkmode == "1") {
            mode = "SEA";
        }
        else {
            mode = "AIR";
        }
        var jsonShip = { ClientType: ReportType, Client: client, Origin: this.city, Mode: mode, FromDate: dtfrom, cmpcode: this._loginService.getLogin()[0].CMPCODE, Nameclient: clientname };
        this._dataService.getDownload("Export/exp_Rpt_shipment_Status", jsonShip, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, "Shipment_status.xls");
            _this.loaderService.display(false);
        });
    };
    Exptshipmentstatus.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    Exptshipmentstatus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-status',
            template: __webpack_require__(/*! raw-loader!./exp-rpt-shipment-status.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/exp-rpt-shipment-status.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], Exptshipmentstatus);
    return Exptshipmentstatus;
}());

var ExptRptCargoOnHand = /** @class */ (function () {
    function ExptRptCargoOnHand(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.concode = "-1";
        this.checkmode = "1";
        this.condisable = false;
    }
    ExptRptCargoOnHand.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(216, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        //console.log(this._loginService.getLogin()[0]);
        this._dataService.getAll("Export/Fill_consignee_cargo_onhand")
            .subscribe(function (data) {
            _this.listconcode = data.Table;
        });
    };
    ExptRptCargoOnHand.prototype.onexcelGeneration = function () {
        var _this = this;
        this._toasterService.toast('info', 'inprocess', "Start generating Cargo on Hand Excel");
        this.loaderService.display(true);
        var filname, mode;
        if (this.concode == "-1") {
            this._toasterService.toast('warning', 'warning', "Please select consignee");
            this.loaderService.display(false);
            return false;
        }
        if (this.checkmode == "1") {
            mode = "SEA";
            filname = "SEA_CARGOONHAND.XLS";
        }
        else {
            mode = "AIR";
            filname = "AIR_CARGOONHAND.XLS";
        }
        var jsonShip = { CONCODE: this.concode, citycode: this._loginService.getLogin()[0].CITYCODE, cmp_code: this._loginService.getLogin()[0].CMPCODE, Mode: mode };
        this._dataService.getDownload("Export/exp_Rpt_Cargo_onhand", jsonShip, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, filname);
            _this.loaderService.display(false);
        });
    };
    ExptRptCargoOnHand.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    ExptRptCargoOnHand = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cargo-onhand',
            template: __webpack_require__(/*! raw-loader!./exp_rpt_cargo_onhand.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/exp_rpt_cargo_onhand.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ExptRptCargoOnHand);
    return ExptRptCargoOnHand;
}());



/***/ }),

/***/ "./src/app/export/report/report.module.ts":
/*!************************************************!*\
  !*** ./src/app/export/report/report.module.ts ***!
  \************************************************/
/*! exports provided: ReportExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportExportModule", function() { return ReportExportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.routing */ "./src/app/export/report/report.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ep_copy_coversheet_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ep-copy-coversheet-search.component */ "./src/app/export/report/ep-copy-coversheet-search.component.ts");
/* harmony import */ var _exp_rpt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exp-rpt.component */ "./src/app/export/report/exp-rpt.component.ts");
/* harmony import */ var _chronology_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chronology.component */ "./src/app/export/report/chronology.component.ts");
/* harmony import */ var _delivery_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery-status.component */ "./src/app/export/report/delivery-status.component.ts");
/* harmony import */ var _shipment_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shipment-progress.component */ "./src/app/export/report/shipment-progress.component.ts");
/* harmony import */ var _air_cargo_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./air-cargo-status.component */ "./src/app/export/report/air-cargo-status.component.ts");
/* harmony import */ var _tracking_air_booking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tracking-air-booking.component */ "./src/app/export/report/tracking-air-booking.component.ts");
/* harmony import */ var _tracking_air_shipment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tracking-air-shipment.component */ "./src/app/export/report/tracking-air-shipment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ReportExportModule = /** @class */ (function () {
    function ReportExportModule() {
    }
    ReportExportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_report_routing__WEBPACK_IMPORTED_MODULE_2__["ReportExportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
            declarations: [
                _ep_copy_coversheet_search_component__WEBPACK_IMPORTED_MODULE_9__["ExptRptEpCopySheet"], _exp_rpt_component__WEBPACK_IMPORTED_MODULE_10__["ExptRptEpCopyExl"], _exp_rpt_component__WEBPACK_IMPORTED_MODULE_10__["ExptDSRExl"],
                _exp_rpt_component__WEBPACK_IMPORTED_MODULE_10__["ExptTonnage"], _exp_rpt_component__WEBPACK_IMPORTED_MODULE_10__["Exptshipmentstatus"], _exp_rpt_component__WEBPACK_IMPORTED_MODULE_10__["ExptRptCargoOnHand"],
                _chronology_component__WEBPACK_IMPORTED_MODULE_11__["ChrnologyReportComponent"],
                _delivery_status_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryStatusReportComponent"],
                _shipment_progress_component__WEBPACK_IMPORTED_MODULE_13__["ShipmentProgressReportComponent"],
                _air_cargo_status_component__WEBPACK_IMPORTED_MODULE_14__["AirCargoStatusReportComponent"],
                _tracking_air_booking_component__WEBPACK_IMPORTED_MODULE_15__["TrackingAirBookingReportComponent"],
                _tracking_air_shipment_component__WEBPACK_IMPORTED_MODULE_16__["TrackingAirShipmentReportComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ReportExportModule);
    return ReportExportModule;
}());



/***/ }),

/***/ "./src/app/export/report/report.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/export/report/report.routing.ts ***!
  \*************************************************/
/*! exports provided: ReportExportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportExportRoutingModule", function() { return ReportExportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ep_copy_coversheet_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ep-copy-coversheet-search.component */ "./src/app/export/report/ep-copy-coversheet-search.component.ts");
/* harmony import */ var _exp_rpt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp-rpt.component */ "./src/app/export/report/exp-rpt.component.ts");
/* harmony import */ var _chronology_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chronology.component */ "./src/app/export/report/chronology.component.ts");
/* harmony import */ var _delivery_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-status.component */ "./src/app/export/report/delivery-status.component.ts");
/* harmony import */ var _shipment_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipment-progress.component */ "./src/app/export/report/shipment-progress.component.ts");
/* harmony import */ var _air_cargo_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./air-cargo-status.component */ "./src/app/export/report/air-cargo-status.component.ts");
/* harmony import */ var _tracking_air_booking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tracking-air-booking.component */ "./src/app/export/report/tracking-air-booking.component.ts");
/* harmony import */ var _tracking_air_shipment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tracking-air-shipment.component */ "./src/app/export/report/tracking-air-shipment.component.ts");
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
            title: 'Report'
        },
        children: [
            { path: 'epcopyprint', component: _ep_copy_coversheet_search_component__WEBPACK_IMPORTED_MODULE_2__["ExptRptEpCopySheet"], data: { title: 'epcopyprint' } },
            { path: 'ep-copy-excel', component: _exp_rpt_component__WEBPACK_IMPORTED_MODULE_3__["ExptRptEpCopyExl"], data: { title: 'Ep-Copy Excel' } },
            { path: 'dsr', component: _exp_rpt_component__WEBPACK_IMPORTED_MODULE_3__["ExptDSRExl"], data: { title: ' Dsr' } },
            { path: 'Tonnage', component: _exp_rpt_component__WEBPACK_IMPORTED_MODULE_3__["ExptTonnage"], data: { title: ' Tonnage' } },
            { path: 'shipment-status', component: _exp_rpt_component__WEBPACK_IMPORTED_MODULE_3__["Exptshipmentstatus"], data: { title: ' Shipment-Status' } },
            { path: 'chronology', component: _chronology_component__WEBPACK_IMPORTED_MODULE_4__["ChrnologyReportComponent"], data: { title: ' Chronology' } },
            { path: 'cargo-on-hand', component: _exp_rpt_component__WEBPACK_IMPORTED_MODULE_3__["ExptRptCargoOnHand"], data: { title: ' Cargo-OnHand' } },
            { path: 'delivery-status', component: _delivery_status_component__WEBPACK_IMPORTED_MODULE_5__["DeliveryStatusReportComponent"], data: { title: ' Delivery - Status' } },
            { path: 'shipment-progress', component: _shipment_progress_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentProgressReportComponent"], data: { title: 'Shipment Progress' } },
            { path: 'air-cargo-status', component: _air_cargo_status_component__WEBPACK_IMPORTED_MODULE_7__["AirCargoStatusReportComponent"], data: { title: 'Air Cargo Status' } },
            { path: 'tracking-air-booking', component: _tracking_air_booking_component__WEBPACK_IMPORTED_MODULE_8__["TrackingAirBookingReportComponent"], data: { title: 'Tracking Air Booking' } },
            { path: 'tracking-air-shipment', component: _tracking_air_shipment_component__WEBPACK_IMPORTED_MODULE_9__["TrackingAirShipmentReportComponent"], data: { title: 'Tracking Air Shipment' } },
        ]
    }
];
var ReportExportRoutingModule = /** @class */ (function () {
    function ReportExportRoutingModule() {
    }
    ReportExportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportExportRoutingModule);
    return ReportExportRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/report/shipment-progress.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/export/report/shipment-progress.component.ts ***!
  \**************************************************************/
/*! exports provided: ShipmentProgressReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentProgressReportComponent", function() { return ShipmentProgressReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipmentProgressReportComponent = /** @class */ (function () {
    function ShipmentProgressReportComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.CityList = [];
        this.ReportType = 'Sea';
        this.City = '';
        this.FromDate = null;
        this.ToDate = null;
        this.DateType = 'actual';
        this.DisplayType = '0';
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
    }
    ShipmentProgressReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights('23', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        this.pageLoad();
    };
    ShipmentProgressReportComponent.prototype.pageLoad = function () {
        this.getCityData();
    };
    ShipmentProgressReportComponent.prototype.getCityData = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getCityList", {})
            .subscribe(function (data) {
            _this.CityList = data.Table;
            _this.City = _this._loginService.getLogin()[0].CITYCODE1;
            _this._loaderService.display(false);
        });
    };
    ShipmentProgressReportComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.City == null) {
            alert("Please select City");
            return false;
        }
        if (this.FromDate == null) {
            alert("Please select From date");
            return false;
        }
        if (this.ToDate == null) {
            alert("Please select To date");
            return false;
        }
        if (this._dataService.dateTWoComparison(this.FromDate.formatted, this.ToDate.formatted)) {
            alert("To date must be greater than from date");
            return false;
        }
        this._loaderService.display(true);
        var _jsonGet = {
            mode: this.ReportType,
            citycode1: this.City,
            fromdate: this.FromDate.formatted,
            todate: this.ToDate.formatted,
            datetype: this.DateType,
            displaytype: this.DisplayType,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getDownload("Export/Generate_Shipment_Progress", _jsonGet, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "DataEntry_Progress" + _this._dataService.timeFormatAMPM() + ".xls");
            _this._loaderService.display(false);
        });
    };
    ShipmentProgressReportComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    ShipmentProgressReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./shipment-progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/shipment-progress.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], ShipmentProgressReportComponent);
    return ShipmentProgressReportComponent;
}());



/***/ }),

/***/ "./src/app/export/report/tracking-air-booking.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/export/report/tracking-air-booking.component.ts ***!
  \*****************************************************************/
/*! exports provided: TrackingAirBookingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingAirBookingReportComponent", function() { return TrackingAirBookingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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





var TrackingAirBookingReportComponent = /** @class */ (function () {
    function TrackingAirBookingReportComponent(_router, _dataService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.ConsigneeList = [];
        this.SourcingAgentList = [];
        this.CityList = [];
        this.Type = 'Consignee';
        this.Consignee = null;
        this.SourcingAgent = null;
        this.Shipment = null;
    }
    TrackingAirBookingReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CityList = [{ citycode: "All", citycode1: "All", cityname: "All" }];
        this._loginService.verifyRights('242', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        this.pageLoad();
    };
    TrackingAirBookingReportComponent.prototype.pageLoad = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getCityList", {})
            .subscribe(function (data) {
            data.Table.forEach(function (key) {
                _this.CityList.push({ citycode: key.citycode, citycode1: key.citycode1, cityname: key.cityname });
            });
            _this.CityList = JSON.parse(JSON.stringify(_this.CityList));
            _this.Shipment = _this._loginService.getLogin()[0].CITYCODE;
        });
        this._dataService.getData("Export/Fill_dsr_PAGELOAD", {})
            .subscribe(function (data) {
            _this.ConsigneeList = data.Table;
            _this.SourcingAgentList = data.Table1;
            _this._loaderService.display(false);
        });
    };
    TrackingAirBookingReportComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.Type === 'Consignee') {
            if (this.Consignee == null) {
                alert('Please Select the Consignee Name. ');
                return false;
            }
        }
        else if (this.Type === 'Sourcing') {
            if (this.SourcingAgent == null) {
                alert('Please Select the Sourcing Agent. ');
                return false;
            }
        }
        var _jsonGet = {
            client: (this.Consignee != null) ? this.Consignee : '',
            agent: (this.SourcingAgent != null) ? this.SourcingAgent : '',
            origin: this.Shipment,
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmpcode: this._loginService.getLogin()[0].CMPCODE
        };
        this._loaderService.display(true);
        this._dataService.getDownload("Export/Generate_Tracking_Air_Booking_Report", _jsonGet, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "RPT_TRACKING_AIR_BOOKING_REPORT_" + _this._dataService.timeFormatAMPM() + ".xls");
            _this._loaderService.display(false);
        });
    };
    TrackingAirBookingReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    TrackingAirBookingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./tracking-air-booking.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/tracking-air-booking.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], TrackingAirBookingReportComponent);
    return TrackingAirBookingReportComponent;
}());



/***/ }),

/***/ "./src/app/export/report/tracking-air-shipment.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/export/report/tracking-air-shipment.component.ts ***!
  \******************************************************************/
/*! exports provided: TrackingAirShipmentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingAirShipmentReportComponent", function() { return TrackingAirShipmentReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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





var TrackingAirShipmentReportComponent = /** @class */ (function () {
    function TrackingAirShipmentReportComponent(_router, _dataService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.ConsigneeFormatList = [];
        this.ConsigneeList = [];
        this.SourcingAgentList = [];
        this.CityList = [];
        this.Type = 'ConsigneeFormat';
        this.ConsigneeFormat = null;
        this.Consignee = null;
        this.SourcingAgent = null;
        this.Shipment = null;
    }
    TrackingAirShipmentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CityList = [{ citycode: "All", citycode1: "All", cityname: "All" }];
        this._loginService.verifyRights('242', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        this.pageLoad();
    };
    TrackingAirShipmentReportComponent.prototype.pageLoad = function () {
        var _this = this;
        this._loaderService.display(true);
        this._dataService.getData("Common/getCityList", {})
            .subscribe(function (data) {
            data.Table.forEach(function (key) {
                _this.CityList.push({ citycode: key.citycode, citycode1: key.citycode1, cityname: key.cityname });
            });
            _this.CityList = JSON.parse(JSON.stringify(_this.CityList));
            _this.Shipment = _this._loginService.getLogin()[0].CITYCODE;
        });
        this._dataService.getData("Export/Fill_dsr_PAGELOAD", {})
            .subscribe(function (data) {
            _this.ConsigneeList = data.Table;
            _this.SourcingAgentList = data.Table1;
            _this.ConsigneeFormatList = data.Table2;
            _this._loaderService.display(false);
        });
    };
    TrackingAirShipmentReportComponent.prototype.onSearch = function () {
        var _this = this;
        var strConsignee = '';
        if (this.Type === 'ConsigneeFormat') {
            if (this.ConsigneeFormat == null) {
                alert('Please Select the Consignee Name.');
                return false;
            }
            else {
                strConsignee = (this.ConsigneeFormat != null) ? this.ConsigneeFormat : '';
            }
        }
        else if (this.Type === 'Consignee') {
            if (this.Consignee == null) {
                alert('Please Select the Consignee Name.');
                return false;
            }
            else {
                strConsignee = (this.Consignee != null) ? this.Consignee : '';
            }
        }
        else if (this.Type === 'Sourcing') {
            if (this.SourcingAgent == null) {
                alert('Please Select the Sourcing Agent.');
                return false;
            }
        }
        var _jsonGet = {
            client: strConsignee,
            agent: (this.SourcingAgent != null) ? this.SourcingAgent : '',
            origin: this.Shipment,
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmpcode: this._loginService.getLogin()[0].CMPCODE
        };
        this._loaderService.display(true);
        this._dataService.getDownload("Export/Generate_Tracking_Air_Shipment_Report", _jsonGet, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "RPT_TRACKING_AIR_SHIPMENTS_REPORT_" + _this._dataService.timeFormatAMPM() + ".xls");
            _this._loaderService.display(false);
        });
    };
    TrackingAirShipmentReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    TrackingAirShipmentReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./tracking-air-shipment.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/report/tracking-air-shipment.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], TrackingAirShipmentReportComponent);
    return TrackingAirShipmentReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=report-report-module.js.map