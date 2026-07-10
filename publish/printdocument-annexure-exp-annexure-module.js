(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printdocument-annexure-exp-annexure-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/annexure.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/annexure.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-print-document-annexure-search (result)=\"getSearchType($event)\" *ngIf=\"viewType===999\"></app-print-document-annexure-search>\r\n<app-print-document-annexure-edit-menu [exptno]=\"exptno\" (result)=\"getSearchType($event)\" *ngIf=\"viewType===998\"></app-print-document-annexure-edit-menu>\r\n<app-print-document-annexure-edit [exptno]=\"exptno\" (result)=\"getEditType($event)\" *ngIf=\"viewType===1\"></app-print-document-annexure-edit>\r\n<app-print-document-annexure-item-detail [exptno]=\"exptno\" (result)=\"getEditType($event)\" *ngIf=\"viewType===2\"></app-print-document-annexure-item-detail>\r\n<app-print-document-annexure-drawback [exptno]=\"exptno\" (result)=\"getEditType($event)\" *ngIf=\"viewType===3\"></app-print-document-annexure-drawback>\r\n<app-print-document-annexure-deec-epcg [exptno]=\"exptno\" (result)=\"getEditType($event)\" *ngIf=\"viewType===4\"></app-print-document-annexure-deec-epcg>\r\n<app-print-document-annexure-dfrc [exptno]=\"exptno\" (result)=\"getEditType($event)\" *ngIf=\"viewType===5\"></app-print-document-annexure-dfrc>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/deec-epcg-annexure.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/deec-epcg-annexure.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>30.\t DEEC/EPCG Licenses Particulars</strong>\r\n                <button type=\"button\" name=\"searchButton\" [ngStyle]=\"{'float': 'right', 'margin-top': '0px'}\" class=\"btn btn-sm btn-danger\"\r\n                    (click)=\"backToEdit();\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back To Edit/Print Menu</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td rowspan=\"2\" width=\"7%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Invoice Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td rowspan=\"2\" width=\"10%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Item Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"6\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>DEEC/EPCG Licenses Particulars</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td width=\"17%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Registration Number</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Serial Number in Part<br />(E)</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Serial Number in Part<br />(C)</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Quantity</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Accouting Unit</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Whether<br />Indigenous/Imported</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>1</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>2</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>3</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>4</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>5</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>6</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>7</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>8</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let obj of dtDeecEpcg; let i= index\">\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.ITEMNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.REGNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNOE\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNOC\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.QTY\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.UNIT\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.INDI\" class=\"form-control\">\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"right-text\" colspan=\"8\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"addRow()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Add More Row</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\" colspan=\"8\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"saveDrawbackDetails()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Save Item Details</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/dfrc-annexure.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/dfrc-annexure.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>31.\t DFRC Licenses Particulars</strong>\r\n                <button type=\"button\" name=\"searchButton\" [ngStyle]=\"{'float': 'right', 'margin-top': '0px'}\" class=\"btn btn-sm btn-danger\"\r\n                    (click)=\"backToEdit();\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back To Edit/Print Menu</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td rowspan=\"2\" width=\"7%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Invoice Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td rowspan=\"2\" width=\"10%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Item Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"7\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>DEEC/EPCG Licenses Particulars</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td width=\"17%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Registration Number</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"9%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Standard IO Group<br />Code</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Standard IO Serial <br />Number</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Standard IO Norm Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Qty</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Accouting Unit</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Whether<br />Indigenous/Imported</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>1</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>2</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>3</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>4</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>5</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>6</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>7</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>8</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>9</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let obj of dtDfrc; let i= index\">\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.ITEMNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.REGNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNOE\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNOC\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.QTY\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.UNIT\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.INDI\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNON\" class=\"form-control\">\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"right-text\" colspan=\"9\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"addRow()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Add More Row</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\" colspan=\"9\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"saveDrawbackDetails()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Save Item Details</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/drawback-annexure.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/drawback-annexure.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>29. Drawback Particulars</strong>\r\n                <button type=\"button\" name=\"searchButton\" [ngStyle]=\"{'float': 'right', 'margin-top': '0px'}\" class=\"btn btn-sm btn-danger\"\r\n                    (click)=\"backToEdit();\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back To Edit/Print Menu</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td rowspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Invoice Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td rowspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Item Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Duty Drawback Details</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td width=\"14%\" rowspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>DBK Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"9%\" rowspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Quantity</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Raw Material Details</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Raw Material Serial Number</b>\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Raw Material Quantity</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>1</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>2</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>3</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>4</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>5</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>6</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let obj of dtDrawback; let i= index\">\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.INVSRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.ITEMSRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.DBKSRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.QTY\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.RMSRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.RSQTY\" class=\"form-control\">\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"right-text\" colspan=\"6\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"addRow()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Add More Row</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\" colspan=\"6\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"saveDrawbackDetails()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Save Item Details</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/edit-annexure.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/edit-annexure.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Annexure</strong>\r\n                <button type=\"button\" name=\"searchButton\" [ngStyle]=\"{'float': 'right', 'margin-top': '0px'}\" class=\"btn btn-sm btn-danger\"\r\n                    (click)=\"backToEdit();\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back To Edit/Print Menu</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n    <div class=\"col-sm-10\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td class=\"centerlabel\" colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>ANNEXURE - A</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>DECLARATION FORM FOR EXPORT OF GOODS</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>TO BE FILLED IN BY THE SERVICE CENTRE</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">Date of Presentation</span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n                <td width=\"30%\">\r\n                    <span class=\"col-form-span-label\">Job Number/Date</span>\r\n                </td>\r\n                <td width=\"20%\">\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Shipping Bill No.</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Date</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Signature</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\"></span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td class=\"centerlabel\" colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>TO BE FILLED IN BY THE EXPORTER/CHA</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        &nbsp;\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>MASTER DETAILS</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        1\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        CHA License Number\r\n                    </span>\r\n                </td>\r\n                <td width=\"29%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable2[0]?.CMP_CUSTLICNO}}</strong>\r\n                    </span>\r\n                </td>\r\n                <td width=\"7%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Name\r\n                    </span>\r\n                </td>\r\n                <td width=\"38%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable2[0]?.CMP_NAME}}</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        2\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        IEC Code Number\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.EXP_IECCODE}}</strong>\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Name\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.EXP_NAME}}</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        3\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Exporter Address\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <textarea rows=\"4\" cols=\"30\" [(ngModel)]=\"ExporterAddress\" class=\"form-control width220\"></textarea>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        4\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Exporter Type\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        [P]-Private [\r\n                        <input type=\"radio\" name=\"exportertype\" value=\"(P)\" [(ngModel)]=\"ExporterType\" />]\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        [G]-Government [\r\n                        <input type=\"radio\" name=\"exportertype\" value=\"(G)\" [(ngModel)]=\"ExporterType\" />]\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        5\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Merchant/Manufacturer\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        [R]-Merchant [\r\n                        <input type=\"radio\" name=\"exportertypea\" value=\"(R)\" [(ngModel)]=\"ExporterTypeA\" />]\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        [F]-Manufacturer [\r\n                        <input type=\"radio\" name=\"exportertypea\" value=\"(F)\" [(ngModel)]=\"ExporterTypeA\" />]\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        6\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Consignee Name\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.CON_NAME}}</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        7\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Consignee Address\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <textarea rows=\"4\" cols=\"30\" [(ngModel)]=\"ConsigneeAddress\" class=\"form-control width220\"></textarea>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        8\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Consignee Country\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"text\" [(ngModel)]=\"ConsigneeCountry\" class=\"form-control width220\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        9\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Port of Destination\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"text\" [(ngModel)]=\"PortOfDestination\" class=\"form-control width220\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        10\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Country of Final Destination\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"text\" [(ngModel)]=\"FinalDestination\" class=\"form-control width220\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        11\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        State of Origin of Exported Goods\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.EXP_STATE}}</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        12\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        EPZ/ICD Code\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong></strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        13\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Authorized Dealer(AD) Code\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.EXP_DELARCODE}}</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        14\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        RBI Waiver Number\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.EXP_RBIWAIVERNO}}</strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        15\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        RBI Waiver Date\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong></strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        16\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Annexure C Parameters\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        YES [\r\n                        <input type=\"radio\" name=\"parameter\" value=\"yes\" [(ngModel)]=\"Parameter\" />]\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        No [\r\n                        <input type=\"radio\" name=\"parameter\" value=\"no\" [(ngModel)]=\"Parameter\" />]\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-sm-new bgwhite\" *ngIf=\"exptno.substr(7,1)=='1'\">\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        17\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\" colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>ANNEXURE C PARTICULARS (ONLY TO BE FILLED FOR ICD/CFS & SEA SITES) </b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        a.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        FACTORY STUFFED(Y/N)\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <select [(ngModel)]=\"FactoryStuffed\" class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option value=\"Yes\">Yes</option>\r\n                        <option value=\"No\">No</option>\r\n                    </select>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\">\r\n                    b.\r\n                </td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">Sample Accompanied (Y/N)</span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <select [(ngModel)]=\"SampleAccompanied\" class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option value=\"Yes\">Yes</option>\r\n                        <option value=\"No\">No</option>\r\n                    </select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        c.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Nature of Cargo\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <input type=\"text\" maxlength=\"20\" [(ngModel)]=\"NatureOfCargo\" class=\"form-control\">\r\n                </td>\r\n                <td width=\"4%\"></td>\r\n                <td width=\"24%\"></td>\r\n                <td width=\"25%\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        d.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Marks & Numbers\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <textarea rows=\"4\" cols=\"30\" [(ngModel)]=\"MarksAndNumber\" class=\"form-control width220\"></textarea>\r\n                </td>\r\n                <td width=\"4%\"></td>\r\n                <td width=\"24%\"></td>\r\n                <td width=\"25%\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        e.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Total No. of Packages\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>{{datasetTable1[0]?.EXPT_NOOFPKGS + ' '+ datasetTable1[0]?.EXPT_TYPEOFPKGS}}</strong>\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\">\r\n                    f.\r\n                </td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        No. of Loose Packets\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <input type=\"text\" [(ngModel)]=\"NoOfLoosePacket\" class=\"form-control width120\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        g.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        No. of Containers\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <input type=\"text\" [(ngModel)]=\"NoOfContainers\" class=\"form-control width120\">\r\n                </td>\r\n                <td width=\"4%\"></td>\r\n                <td width=\"24%\"></td>\r\n                <td width=\"25%\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        h.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Gross Weight\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>{{datasetTable1[0]?.EXPT_GRWT}}</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\">\r\n                    i.\r\n                </td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Net Weight\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>{{datasetTable1[0]?.EXPT_NETWT}}</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        j.\r\n                    </span>\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Unit of Measurement\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <input type=\"text\" [(ngModel)]=\"UnitOfMeasurement\" class=\"form-control width120\">\r\n                </td>\r\n                <td width=\"4%\"></td>\r\n                <td width=\"24%\"></td>\r\n                <td width=\"25%\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">&nbsp;</td>\r\n                <td width=\"21%\">&nbsp;</td>\r\n                <td width=\"22%\">&nbsp;</td>\r\n                <td width=\"4%\">&nbsp;</td>\r\n                <td width=\"24%\">&nbsp;</td>\r\n                <td width=\"25%\">&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>k.</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>CONTAINER DETAILS (VALID, IF FACTORY STUFFED)</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\"></td>\r\n                <td colspan=\"5\" valign=\"top\">\r\n                    <table width=\"80%\" class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n                        <tr class=\"formheading\">\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Container Number</b>\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Size</b>\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Excise Seal Number</b>\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Seal Date</b>\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Number of Packets Stuffed</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"formheading\">\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>1</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>2</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>3</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>4</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>5</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let obj of datatableContainer; let i= index\">\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"text\" [(ngModel)]=\"obj.CONTAINERNO\" class=\"form-control width120\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"text\" [(ngModel)]=\"obj.SIZE\" class=\"form-control width120\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"text\" [(ngModel)]=\"obj.SEALNO\" class=\"form-control width120\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <my-date-picker name=\"sealdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"obj.SEALDATE\"></my-date-picker>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"text\" [(ngModel)]=\"obj.PSTUFFED\" class=\"form-control width120\">\r\n                            </td>\r\n                            <td class=\"centerlabel width20\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"removeRow('CONTAINER',i)\" *ngIf=\"datatableContainer.length > 1\">\r\n                                    <span class=\"col-form-span-label\"><i class=\"fa fa-times\"></i></span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"formheading\">\r\n                            <td class=\"centerlabel\" colspan=\"6\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addRow('CONTAINER')\">\r\n                                    <span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i>&nbsp;Add More Row</span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>l.</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>PACKING DETAILS</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\"></td>\r\n                <td colspan=\"5\" valign=\"top\">\r\n                    <table width=\"80%\" class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n                        <tr>\r\n                            <td rowspan=\"2\" class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Sr.No.</b>\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Packet Number</b>\r\n                                </span>\r\n                            </td>\r\n                            <td rowspan=\"2\" class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Type of Packets</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>FROM</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>TO</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let obj of datasetTable3;let i=index;\">\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{i+1}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{obj.PKGNOFROM}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{obj.PKGNOTO}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{obj.PKGNOALPHA}}</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        m.\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Rotation Number\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\"><span class=\"col-form-span-label\"><b>{{datasetTable1[0]?.EXPT_VESSEL?.substring(5)}}</b></span></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        n.\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">\r\n                        Rotation Date\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <my-date-picker name=\"hawbdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"RotationDate\"></my-date-picker>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"6\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Note : Columns 'm' & 'n' are valid only for Sea Customs Locations.\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"6\">\r\n                    <span class=\"col-form-span-label\">\r\n                        &nbsp;\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-sm-new bgwhite\" *ngIf=\"exptno.substr(7,1)=='2'\">\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        17\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\" colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>ANNEXURE C PARTICULARS (ONLY TO BE FILLED FOR AIR SITES)</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Master Airway Bill Number\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.MAWBNO_STRING}}\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">AirLine Number</span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.AIRLINENAME}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Total No. of Packets in MAWB\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{NoOfLoosePacket}}\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">HAWB Number</span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.HAWBNO_STRING}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Factory Stuffed (Y/N)\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <select [(ngModel)]=\"FactoryStuffedAir\" class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option value=\"Yes\">Yes</option>\r\n                        <option value=\"No\">No</option>\r\n                    </select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Seal Number\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable[0]?.SEALNO1}}\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Agency\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <textarea rows=\"2\" cols=\"15\" [(ngModel)]=\"Agency\" class=\"form-control width220\"></textarea>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Marks & Numbers\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <textarea rows=\"4\" cols=\"30\" [(ngModel)]=\"MarksAndNumberAir\" class=\"form-control width220\"></textarea>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Sample Accompanied (Y/N)\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <select [(ngModel)]=\"SampleAccompaniedAir\" class=\"form-control\">\r\n                        <option value=\"0\">--Select--</option>\r\n                        <option value=\"Yes\">Yes</option>\r\n                        <option value=\"No\">No</option>\r\n                    </select>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\"></td>\r\n                <td width=\"25%\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Total No. of Packages\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPT_NOOFPKGS + ' ' + datasetTable1[0]?.EXPT_TYPEOFPKGS}}\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">No. of Loose Packets</span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <input type=\"textbox\" class=\"form-control width120\" [(ngModel)]=\"NoOfLoosePacketAir\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Gross Weight\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPT_GRWT}}\r\n                    </span>\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Net Weight\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPT_NETWT}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                </td>\r\n                <td width=\"21%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Unit of Measurement\r\n                    </span>\r\n                </td>\r\n                <td width=\"22%\">\r\n                    <input type=\"textbox\" class=\"form-control width120\" [(ngModel)]=\"UnitOfMeasurementAir\">\r\n                </td>\r\n                <td width=\"4%\" class=\"right-text\"></td>\r\n                <td width=\"24%\"></td>\r\n                <td width=\"25%\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"6\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>l.</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>PACKING DETAILS</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"right-text\" width=\"4%\"></td>\r\n                <td colspan=\"5\" valign=\"top\">\r\n                    <table width=\"80%\" class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n                        <tr>\r\n                            <td rowspan=\"2\" class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Sr.No.</b>\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Packet Number</b>\r\n                                </span>\r\n                            </td>\r\n                            <td rowspan=\"2\" class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Type of Packets</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>FROM</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>TO</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let obj of datasetTable3;let i=index;\">\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{i+1}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{obj?.PKGNOFROM}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{obj?.PKGNOTO}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{obj?.PKGNOALPHA}}</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td colspan=\"5\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>INVOICE DETAILS</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        18\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Invoice Number\r\n                    </span>\r\n                </td>\r\n                <td width=\"33%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPT_INVNO}}\r\n                    </span>\r\n                </td>\r\n                <td width=\"18%\">\r\n                    <span class=\"col-form-span-label\">Date</span>\r\n                </td>\r\n                <td width=\"19%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPT_INVDATE}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        19\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Nature of Payment\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <table class=\"table table-sm-new bgwhite\" width=\"90%\">\r\n                        <tr>\r\n                            <td width=\"48%\" style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    [LC] Letter of Credit\r\n                                    <b>{{(datasetTable1[0]?.NATUREOFPAYMENT.substr(0,4)=='(LC)')? '[ X ]': '[ ]'}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    [DP] Direct Payment\r\n                                    <b>{{(datasetTable1[0]?.NATUREOFPAYMENT.substr(0,4)=='(DP)')? '[ X ]': '[ ]'}}</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td width=\"48%\" style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    [DA] Delivery against\r\n                                    <b>{{(datasetTable1[0]?.NATUREOFPAYMENT.substr(0,4)=='(DA)')? '[ X ]': '[ ]'}}</b> Acceptance\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    [AP] Advance Payment\r\n                                    <b>{{(datasetTable1[0]?.NATUREOFPAYMENT.substr(0,4)=='(AP)')? '[ X ]': '[ ]'}}</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td width=\"48%\" style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    [NA] Not Applicable\r\n                                    <b>{{(datasetTable1[0]?.NATUREOFPAYMENT.substr(0,4)=='(NA)')? '[ X ]': '[ ]'}}</b>\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        20\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Period of Payment as per contract(in days)\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <input type=\"textbox\" class=\"form-control width120\" [(ngModel)]=\"PeriodPaymentContract\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        21\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Contract Number\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPTCONTRACTNO}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        22\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Whether Consignee and Buyer Same\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\" class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Yes\r\n                        <b>{{(datasetTable1[0]?.NOTIFYBUYER=='yes')? '[ X ]': '[ ]'}}</b>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No\r\n                        <b>{{(datasetTable1[0]?.NOTIFYBUYER=='no')? '[ X ]': '[ ]'}}</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        23\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        If No. Name & Address of Buyer\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\" class=\"centerlabel\">\r\n                    <textarea rows=\"4\" cols=\"30\" [(ngModel)]=\"NameAddressOfBuyer\" class=\"form-control width220\"></textarea>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        24\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Invoice Currency\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        {{datasetTable1[0]?.EXPT_CURNAME}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        25\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Nature of Contract\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">\r\n                        [1]-FOB\r\n                        <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='FOB')? '[ X ]': '[ ]'}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [2]-CIF\r\n                        <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='CIF')? '[ X ]': '[ ]'}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [3]-CF\r\n                        <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='C&F')? '[ X ]': '[ ]'}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [4]-CI\r\n                        <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='C&I')? '[ X ]': '[ ]'}}</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        26\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b> Charges</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <table class=\"table table-sm-new bgwhite\" width=\"90%\">\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Rate</b>\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Currency</b>\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>Amount</b>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Commission</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{datasetTable1[0]?.EXPT_CURNAME}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <input type=\"textbox\" [(ngModel)]=\"Commission\" class=\"form-control width120\">\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Discount on FOB Rate</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{datasetTable1[0]?.EXPT_CURNAME}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <input type=\"textbox\" [(ngModel)]=\"DiscountFobRate\" class=\"form-control width120\">\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Packing & Misc. Charges</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{datasetTable1[0]?.EXPT_CURNAME}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <input type=\"textbox\" [(ngModel)]=\"PackingMiscCharges\" class=\"form-control width120\">\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Other Deductions</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{datasetTable1[0]?.EXPT_CURNAME}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <input type=\"textbox\" [(ngModel)]=\"OtherDeduction\" class=\"form-control width120\">\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Freight</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{datasetTable1[0]?.EXPT_CURNAME}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <input type=\"textbox\" [(ngModel)]=\"Freight\" class=\"form-control width120\">\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Insurance</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{datasetTable1[0]?.EXPT_CURNAME}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    <input type=\"textbox\" [(ngModel)]=\"Insurance\" class=\"form-control width120\">\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        27\r\n                    </span>\r\n                </td>\r\n                <td width=\"25%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Whether the Unit Price Includes\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <table class=\"table table-sm-new bgwhite\" width=\"90%\">\r\n                        <tr>\r\n                            <td style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='C&F')? 'X': ''}}</b> [F] - Freight\r\n                                </span>\r\n                            </td>\r\n                            <td style=\"border: 1px solid #ffffff;\"></td>\r\n                            <td style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='C&I')? 'X': ''}}</b> [I] - Insurance\r\n                                </span>\r\n                            </td>\r\n                            <td style=\"border: 1px solid #ffffff;\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='CIF')? 'X': ''}}</b> [B] - Freight & Insurance\r\n                                </span>\r\n                            </td>\r\n                            <td style=\"border: 1px solid #ffffff;\"></td>\r\n                            <td style=\"border: 1px solid #ffffff;\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <b>{{(datasetTable1[0]?.EXPT_INVTYPE=='FOB')? 'X': ''}}</b> [N] - None\r\n                                </span>\r\n                            </td>\r\n                            <td style=\"border: 1px solid #ffffff;\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        28.\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b> Exchane Rate Details for non-standard Currency</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"centerlabel\" width=\"5%\"></td>\r\n                <td colspan=\"4\">\r\n                    <table class=\"table table-sm-new bgwhite\" width=\"90%\">\r\n                        <tr class=\"title-head formheading\">\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    Currency Code/Name\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    Unit in Rupees\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    Exchange Rate\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    Effective Date\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    Bank Name\r\n                                </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">\r\n                                    Certificate Number\r\n                                </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    Certificate Date\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"formheading\">\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">1</span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">2</span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">3</span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">4</span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">5</span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">6</span>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <span class=\"col-form-span-label\">7</span>\r\n                            </td>\r\n                            <td class=\"width20\">\r\n                                <span class=\"col-form-span-label\"></span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let obj of datatableExchangeRate; let i= index;\">\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"textbox\" [(ngModel)]=\"obj.CODE\" class=\"form-control width80\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"textbox\" [(ngModel)]=\"obj.UNIT\" class=\"form-control width80\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"textbox\" [(ngModel)]=\"obj.EXCHANGE_RATE\" class=\"form-control width80\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <my-date-picker name=\"EDate1\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"obj.EFFECTIVE_DATE\"></my-date-picker>\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"textbox\" [(ngModel)]=\"obj.BANK_NAME\" class=\"form-control width120\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <input type=\"textbox\" [(ngModel)]=\"obj.CERTIFICATE_NO\" class=\"form-control width120\">\r\n                            </td>\r\n                            <td class=\"centerlabel\">\r\n                                <my-date-picker name=\"CDate1\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"obj.CERTIFICATE_DATE\"></my-date-picker>\r\n                            </td>\r\n                            <td class=\"centerlabel width20\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"removeRow('EXCHANGERATE',i)\" *ngIf=\"datatableExchangeRate.length > 1\">\r\n                                    <span class=\"col-form-span-label\"><i class=\"fa fa-times\"></i></span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"formheading\">\r\n                            <td class=\"centerlabel\" colspan=\"8\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addRow('EXCHANGERATE')\">\r\n                                    <span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i>&nbsp;Add More Row</span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>DECLARATION</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        I/We declare that the particular given herein above are true and correct.\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        I/We enclose herewith the copies of the following documents.\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        (To be submitted with the export goods in the warehouse)\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        &nbsp;\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        1\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        GR Declaration\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        2\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        DEEC Declaration\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        3\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Invoice\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        4\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Quota/Inspection etc. certificates.\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        5\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Other(Specify)\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                <td width=\"12%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Name of the Exporter\r\n                    </span>\r\n                </td>\r\n                <td width=\"32%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>{{datasetTable1[0]?.EXP_NAME}}</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"17%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Name of CHA\r\n                    </span>\r\n                </td>\r\n                <td width=\"39%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>{{datasetTable2[0]?.CMP_NAME}}</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"12%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Designation\r\n                    </span>\r\n                </td>\r\n                <td width=\"32%\">\r\n                    <input type=\"textbox\" [(ngModel)]=\"ExporterDesignation\" class=\"form-control width120\">\r\n                </td>\r\n                <td width=\"17%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Designation\r\n                    </span>\r\n                </td>\r\n                <td width=\"39%\">\r\n                    <input type=\"textbox\" [(ngModel)]=\"CHADesignation\" class=\"form-control width120\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"12%\">\r\n                    <span class=\"col-form-span-label\">\r\n\r\n                    </span>\r\n                </td>\r\n                <td width=\"32%\">\r\n                    <span class=\"col-form-span-label\">\r\n\r\n                    </span>\r\n                </td>\r\n                <td width=\"17%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        ID Card Number\r\n                    </span>\r\n                </td>\r\n                <td width=\"39%\">\r\n                    <input type=\"textbox\" [(ngModel)]=\"IdCardNo\" class=\"form-control width120\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"12%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Dated:\r\n                    </span>\r\n                </td>\r\n                <td width=\"32%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <my-date-picker name=\"DDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"DDate\"></my-date-picker>\r\n                    </span>\r\n                </td>\r\n                <td width=\"17%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Signature\r\n                    </span>\r\n                </td>\r\n                <td width=\"39%\" style=\"border: 1px solid #ffffff;\">\r\n                    _________________________________\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>INSTRUCTIONS</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-sm-new bgwhite\">\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        1.\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        All entries should be made in CAPITAL LETTERS\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"8%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        2.\r\n                    </span>\r\n                </td>\r\n                <td width=\"92%\" style=\"border: 1px solid #ffffff;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        Photocopies of the invoice has to be attached separately with declaration form for data entry\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-sm-new bgwhite\">\r\n            <tr class=\"title-head trbg\">\r\n                <td colspan=\"2\" class=\"centerlabel\">\r\n                    <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-success\" (click)=\"nextSubmit();\" #nextButton>\r\n                        <span class=\"col-form-span-label\">\r\n                            Next&nbsp;\r\n                            <i class=\"fa fa-arrow-right\"></i>\r\n                        </span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/edit-menu-annexure.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/edit-menu-annexure.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Annexure</strong>\r\n                    <button type=\"button\" name=\"searchButton\" [ngStyle]=\"{'float': 'right', 'margin-top': '0px'}\" class=\"btn btn-sm btn-danger\"\r\n                        (click)=\"backButton();\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back To Search</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-bordered table-sm-new\">\r\n                <tbody class=\"bgwhite\">\r\n                    <tr class=\"title-head formheading\">\r\n                        <td colspan=\"2\" [ngStyle]=\"{'text-align': 'right'}\">\r\n                            &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let obj of EditMenuList; let i = index;\">\r\n                        <td>\r\n                            <span class=\"col-form-span-label\" *ngIf=\"obj.id==1||obj.id==8\">\r\n                                <b>{{obj.type}}</b>\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\" [ngStyle]=\"{'text-decoration': 'underline','color': 'blue','cursor': 'pointer'}\" (click)=\"redirectTo(obj.id, obj.type)\">\r\n                                {{obj.name}}\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/item-detail-annexure.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/item-detail-annexure.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>28. Item Wise Details (To be provided for each invoice separately</strong>\r\n                <button type=\"button\" name=\"searchButton\" [ngStyle]=\"{'float': 'right', 'margin-top': '0px'}\" class=\"btn btn-sm btn-danger\"\r\n                    (click)=\"backToEdit();\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back To Edit/Print Menu</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n            <tr style=\"background-color:#dceaf7;text-align: center;\">\r\n                <td width=\"5%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Item Sr.No.</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"6%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>RITC Code</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"15%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Description\r\n                            <br/>of Goods</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"9%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Accessories\r\n                            <br/>if any</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"6%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Quantity</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"8%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Accounting\r\n                            <br/>Unit</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"6%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Item Rate</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"6%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>No.of\r\n                            <br/>Units</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"9%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Accounting\r\n                            <br/>Unit\r\n                            <br/>For Rate</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"6%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Present Market Value</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"6%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Scheme Code</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"7%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Category if\r\n                            <br/>NFEI Exports</b>\r\n                    </span>\r\n                </td>\r\n                <td width=\"17%\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Whether\r\n                            <br/>Third\r\n                            <br/>Party\r\n                            <br/>Export (Y/N)</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>1</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>2</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>3</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>4</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>5</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>6</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>7</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>8</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>9</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>10</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>11</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>12</b>\r\n                    </span>\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>13</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let obj of dtItemDetail; let i= index\">\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SRNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.RITCNO\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.IDESC\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.ACCRY\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.QTY\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.ACUNIT\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.ITEM\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.NOOFUNIT\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.UNITRATE\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.MKTVALUE\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.SCHEME\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.NFEI\" class=\"form-control\">\r\n                </td>\r\n                <td class=\"centerlabel\">\r\n                    <input type=\"text\" [(ngModel)]=\"obj.THIRDPARTY\" class=\"form-control\">\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"right-text\" colspan=\"13\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"addRow()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Add More Row</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\">\r\n                <td class=\"centerlabel\" colspan=\"13\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"saveItemDetails()\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-plus\"></i>&nbsp;Save Item Details</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <br/>\r\n        <br/>\r\n        <br/>\r\n        <span class=\"col-form-span-label\">\r\n            Note:\r\n        </span><br/>\r\n        <span class=\"col-form-span-label\">\r\n            Whether third part export : Need to be provided for Scheme Codes involving DBK and DEPB only. For the scheme\r\n        </span><br/>\r\n        <span class=\"col-form-span-label\">\r\n            code involving DEEC, EPCG etc system would determine the third party export automatically.\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/search-annexure.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/annexure/search-annexure.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Annexure</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <table class=\"table table-sm-new bgwhite\">\r\n            <tr class=\"title-head formheading\">\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <strong>Search Details </strong>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-sm-new bgwhite\">\r\n            <tr class=\"title-head trbg\">\r\n                <td class=\"right-text\">\r\n                    <span class=\"col-form-span-label\">Export No</span>\r\n                    <span class=\"col-form-span-error\">*</span>\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" [(ngModel)]=\"ExptNo\" class=\"form-control width120\" [OnlyNumber]=\"true\" [maxlength]=\"15\" />\r\n                </td>\r\n            </tr>\r\n            <tr class=\"title-head trbg\">\r\n                <td colspan=\"2\" class=\"centerlabel\">\r\n                    <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-info\" (click)=\"searchData();\" #searchButton>\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-search\"></i>&nbsp;Search</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/export/printdocument/annexure/annexure.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/annexure.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnexureComponent", function() { return AnnexureComponent; });
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

var AnnexureComponent = /** @class */ (function () {
    function AnnexureComponent() {
        this.exptno = '';
        this.viewType = 999;
    }
    AnnexureComponent.prototype.getSearchType = function (event) {
        this.viewType = event.view;
        this.exptno = event.exptno;
    };
    AnnexureComponent.prototype.getEditType = function (event) {
        this.viewType = event.view;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AnnexureComponent.prototype, "submitButton", void 0);
    AnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/annexure.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnnexureComponent);
    return AnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/deec-epcg-annexure.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/deec-epcg-annexure.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeecEpcgAnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeecEpcgAnnexureComponent", function() { return DeecEpcgAnnexureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeecEpcgAnnexureComponent = /** @class */ (function () {
    function DeecEpcgAnnexureComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtDeecEpcg = [];
    }
    DeecEpcgAnnexureComponent.prototype.ngOnInit = function () {
        this.pageLoad(this.exptno);
    };
    DeecEpcgAnnexureComponent.prototype.pageLoad = function (exptno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            ExptNo: exptno,
            GuId: this._loginService.getLogin()[0].GUID,
            Status: ""
        };
        this._dataService.Common("Export/AnnexureDeecEpcgPopulateData", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                _this.dtDeecEpcg = data.Table;
            }
            else {
                _this.addRow();
            }
        });
    };
    DeecEpcgAnnexureComponent.prototype.addRow = function () {
        this.dtDeecEpcg.push({
            ID: 0,
            JOBNO: this.exptno,
            SRNO: '',
            ITEMNO: '',
            REGNO: '',
            SRNOE: '',
            SRNOC: '',
            QTY: '',
            UNIT: '',
            INDI: ''
        });
    };
    DeecEpcgAnnexureComponent.prototype.removeRow = function (index) {
        this.dtDeecEpcg.splice(index, 1);
    };
    DeecEpcgAnnexureComponent.prototype.saveDrawbackDetails = function () {
        var _this = this;
        var strData = '';
        this.dtDeecEpcg.forEach(function (key) {
            if (key["SRNO"] != '') {
                strData += _this.exptno
                    + '@' + key["SRNO"]
                    + '@' + key["ITEMNO"]
                    + '@' + key["REGNO"]
                    + '@' + key["SRNOE"]
                    + '@' + key["SRNOC"]
                    + '@' + key["QTY"]
                    + '@' + key["UNIT"]
                    + '@' + key["INDI"]
                    + '|';
            }
        });
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            ExptNo: this.exptno,
            StrData: strData
        };
        this._dataService.Common("Export/AnnexureDeecEpcgIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            alert("Data Updated Successfully");
            _this.result.emit({ exptno: _this.exptno, view: 998 });
        });
    };
    DeecEpcgAnnexureComponent.prototype.backToEdit = function () {
        this.result.emit({ exptno: this.exptno, view: 998 });
    };
    DeecEpcgAnnexureComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeecEpcgAnnexureComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeecEpcgAnnexureComponent.prototype, "exptno", void 0);
    DeecEpcgAnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-deec-epcg',
            template: __webpack_require__(/*! raw-loader!./deec-epcg-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/deec-epcg-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], DeecEpcgAnnexureComponent);
    return DeecEpcgAnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/dfrc-annexure.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/dfrc-annexure.component.ts ***!
  \**************************************************************************/
/*! exports provided: DfrcAnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfrcAnnexureComponent", function() { return DfrcAnnexureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DfrcAnnexureComponent = /** @class */ (function () {
    function DfrcAnnexureComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtDfrc = [];
    }
    DfrcAnnexureComponent.prototype.ngOnInit = function () {
        this.pageLoad(this.exptno);
    };
    DfrcAnnexureComponent.prototype.pageLoad = function (exptno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            ExptNo: exptno,
            GuId: this._loginService.getLogin()[0].GUID,
            Status: ""
        };
        this._dataService.Common("Export/AnnexureDfrcPopulateData", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                _this.dtDfrc = data.Table;
            }
            else {
                _this.addRow();
            }
        });
    };
    DfrcAnnexureComponent.prototype.addRow = function () {
        this.dtDfrc.push({
            ID: 0,
            JOBNO: this.exptno,
            SRNO: '',
            ITEMNO: '',
            REGNO: '',
            SRNOE: '',
            SRNOC: '',
            QTY: '',
            UNIT: '',
            INDI: '',
            SRNON: ''
        });
    };
    DfrcAnnexureComponent.prototype.removeRow = function (index) {
        this.dtDfrc.splice(index, 1);
    };
    DfrcAnnexureComponent.prototype.saveDrawbackDetails = function () {
        var _this = this;
        var strData = '';
        this.dtDfrc.forEach(function (key) {
            if (key["SRNO"] != '') {
                strData += _this.exptno
                    + '@' + key["SRNO"]
                    + '@' + key["ITEMNO"]
                    + '@' + key["REGNO"]
                    + '@' + key["SRNOE"]
                    + '@' + key["SRNOC"]
                    + '@' + key["QTY"]
                    + '@' + key["UNIT"]
                    + '@' + key["INDI"]
                    + '@' + key["SRNON"]
                    + '|';
            }
        });
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            ExptNo: this.exptno,
            StrData: strData
        };
        this._dataService.Common("Export/AnnexureDfrcIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            alert("Data Updated Successfully");
            _this.result.emit({ exptno: _this.exptno, view: 998 });
        });
    };
    DfrcAnnexureComponent.prototype.backToEdit = function () {
        this.result.emit({ exptno: this.exptno, view: 998 });
    };
    DfrcAnnexureComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DfrcAnnexureComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DfrcAnnexureComponent.prototype, "exptno", void 0);
    DfrcAnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-dfrc',
            template: __webpack_require__(/*! raw-loader!./dfrc-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/dfrc-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], DfrcAnnexureComponent);
    return DfrcAnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/drawback-annexure.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/drawback-annexure.component.ts ***!
  \******************************************************************************/
/*! exports provided: DrawbackAnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawbackAnnexureComponent", function() { return DrawbackAnnexureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawbackAnnexureComponent = /** @class */ (function () {
    function DrawbackAnnexureComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtDrawback = [];
    }
    DrawbackAnnexureComponent.prototype.ngOnInit = function () {
        this.pageLoad(this.exptno);
    };
    DrawbackAnnexureComponent.prototype.pageLoad = function (exptno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            ExptNo: exptno,
            GuId: this._loginService.getLogin()[0].GUID,
            Status: ""
        };
        this._dataService.Common("Export/AnnexureDrawbackPopulateData", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                _this.dtDrawback = data.Table;
            }
            else {
                _this.addRow();
            }
        });
    };
    DrawbackAnnexureComponent.prototype.addRow = function () {
        this.dtDrawback.push({
            ID: 0,
            JOBNO: this.exptno,
            INVSRNO: '',
            ITEMSRNO: '',
            DBKSRNO: '',
            QTY: '',
            RMSRNO: '',
            RSQTY: ''
        });
    };
    DrawbackAnnexureComponent.prototype.removeRow = function (index) {
        this.dtDrawback.splice(index, 1);
    };
    DrawbackAnnexureComponent.prototype.saveDrawbackDetails = function () {
        var _this = this;
        var strData = '';
        this.dtDrawback.forEach(function (key) {
            if (key["INVSRNO"] != '') {
                strData += _this.exptno
                    + '@' + key["INVSRNO"]
                    + '@' + key["ITEMSRNO"]
                    + '@' + key["DBKSRNO"]
                    + '@' + key["QTY"]
                    + '@' + key["RMSRNO"]
                    + '@' + key["RSQTY"]
                    + '|';
            }
        });
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            ExptNo: this.exptno,
            StrData: strData
        };
        this._dataService.Common("Export/AnnexureDrawbackIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            alert("Data Updated Successfully");
            _this.result.emit({ exptno: _this.exptno, view: 998 });
        });
    };
    DrawbackAnnexureComponent.prototype.backToEdit = function () {
        this.result.emit({ exptno: this.exptno, view: 998 });
    };
    DrawbackAnnexureComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DrawbackAnnexureComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DrawbackAnnexureComponent.prototype, "exptno", void 0);
    DrawbackAnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-drawback',
            template: __webpack_require__(/*! raw-loader!./drawback-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/drawback-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], DrawbackAnnexureComponent);
    return DrawbackAnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/edit-annexure.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/edit-annexure.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditAnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAnnexureComponent", function() { return EditAnnexureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAnnexureComponent = /** @class */ (function () {
    function EditAnnexureComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.datasetTable = [];
        this.datasetTable1 = [];
        this.datasetTable2 = [];
        this.datasetTable3 = [];
        this.datatableContainer = [];
        this.datasetTable5 = [];
        this.datatableExchangeRate = [];
        this.ExporterAddress = '';
        this.ExporterType = '';
        this.ExporterTypeA = '';
        this.ConsigneeAddress = '';
        this.ConsigneeCountry = '';
        this.PortOfDestination = '';
        this.FinalDestination = '';
        this.Parameter = 'yes';
        this.FactoryStuffed = '';
        this.SampleAccompanied = '';
        this.NatureOfCargo = '';
        this.MarksAndNumber = '';
        this.NoOfLoosePacket = '';
        this.NoOfContainers = '';
        this.NetWeight = '';
        this.UnitOfMeasurement = '';
        this.RotationDate = null;
        this.FactoryStuffedAir = '';
        this.Agency = '';
        this.MarksAndNumberAir = '';
        this.SampleAccompaniedAir = '0';
        this.NoOfLoosePacketAir = '';
        this.UnitOfMeasurementAir = '';
        this.PeriodPaymentContract = '';
        this.NameAddressOfBuyer = '';
        this.ExporterDesignation = '';
        this.CHADesignation = '';
        this.IdCardNo = '';
        this.DDate = null;
        this.Commission = 0;
        this.DiscountFobRate = 0;
        this.PackingMiscCharges = 0;
        this.OtherDeduction = 0;
        this.Freight = 0;
        this.Insurance = 0;
    }
    EditAnnexureComponent.prototype.ngOnInit = function () {
        this.pageLoad(this.exptno);
    };
    EditAnnexureComponent.prototype.pageLoad = function (exptno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            exptno: exptno,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/AnnexureEditPopulateData", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.datasetTable = data.Table;
            _this.datasetTable1 = data.Table1;
            _this.datasetTable2 = data.Table2;
            _this.datasetTable3 = data.Table3;
            if (data.Table4.length > 0) {
                _this.datatableContainer = data.Table4;
            }
            else {
                _this.datatableContainer = [{ ID: 0, CONTAINERNO: '', SIZE: '', SEALNO: '', SEALDATE: '', PSTUFFED: '' }];
            }
            _this.datasetTable5 = data.Table5;
            if (data.Table6.length > 0) {
                _this.datatableExchangeRate = data.Table6;
            }
            else {
                _this.datatableExchangeRate = [{ ID: 0, CODE: '', UNIT: '', EXCHANGE_RATE: '', EFFECTIVE_DATE: null, BANK_NAME: '', CERTIFICATE_NO: '', CERTIFICATE_DATE: null }];
            }
            _this.ExporterAddress = (_this.datasetTable.length > 0) ? _this.datasetTable[0].SHIPPER : "";
            if (_this.ExporterAddress == "") {
                _this.ExporterAddress = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXP_ADD1
                    + "\n" + _this.datasetTable1[0].EXP_ADD2
                    + "\n" + _this.datasetTable1[0].EXP_ADD3
                    + "\n" + _this.datasetTable1[0].EXP_CITYNAME
                    + " " + _this.datasetTable1[0].EXP_PINCODE
                    + " " + _this.datasetTable1[0].EXP_COUNTRYNAME : "";
            }
            _this.ExporterType = (_this.datasetTable.length > 0) ? _this.datasetTable[0].EXPTYPEB.substring(0, 3) : "";
            if (_this.ExporterType == "") {
                _this.ExporterType = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXPTYPEB : "";
            }
            _this.ExporterTypeA = (_this.datasetTable.length > 0) ? _this.datasetTable[0].EXPTYPEA.substring(0, 3) : "";
            if (_this.ExporterTypeA == "") {
                _this.ExporterTypeA = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXPTYPEA : "";
            }
            _this.ConsigneeAddress = (_this.datasetTable.length > 0) ? _this.datasetTable[0].CONSIGNEE : "";
            if (_this.ConsigneeAddress == "") {
                _this.ConsigneeAddress = (_this.datasetTable1.length > 0) ? (_this.datasetTable1[0].CON_ADD1
                    + "\n" + _this.datasetTable1[0].CON_ADD2
                    + "\n" + _this.datasetTable1[0].CON_ADD3
                    + "\n" + _this.datasetTable1[0].CON_CITYNAME
                    + " " + _this.datasetTable1[0].CON_PINCODE
                    + " " + _this.datasetTable1[0].CON_COUNTRYNAME).trim() : "";
            }
            _this.ConsigneeCountry = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].CON_COUNTRYNAME : "";
            _this.PortOfDestination = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].POD_CITYNAME : "";
            _this.FinalDestination = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].DESTINATION_COUNTRYNAME : "";
            _this.FactoryStuffed = (_this.datasetTable.length > 0) ? _this.datasetTable[0].STUFFING : "";
            _this.SampleAccompanied = (_this.datasetTable.length > 0) ? _this.datasetTable[0].SAMPLE : "";
            _this.NatureOfCargo = (_this.datasetTable.length > 0) ? _this.datasetTable[0].CARGOSTAT : "";
            _this.MarksAndNumber = (_this.datasetTable1.length > 0) ? (_this.datasetTable1[0].EXPT_MARKS).trim() : "";
            _this.NoOfLoosePacket = (_this.datasetTable.length > 0) ? _this.datasetTable[0].NOOFPKT : "";
            if (_this.NoOfLoosePacket == "") {
                _this.NoOfLoosePacket = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXPT_NOOFPCS + " " + _this.datasetTable1[0].EXPT_TYPEOFPCS : "";
            }
            _this.UnitOfMeasurement = (_this.datasetTable.length > 0) ? _this.datasetTable[0].UNIT : "";
            _this.FactoryStuffedAir = (_this.datasetTable.length > 0) ? _this.datasetTable[0].STUFFING : "";
            _this.Agency = (_this.datasetTable.length > 0) ? _this.datasetTable[0].AGENCY : "";
            _this.MarksAndNumberAir = (_this.datasetTable1.length > 0) ? (_this.datasetTable1[0].EXPT_MARKS).trim() : "";
            _this.SampleAccompaniedAir = (_this.datasetTable.length > 0) ? _this.datasetTable[0].SAMPLE : "";
            _this.NoOfLoosePacketAir = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXPT_NOOFPCS + " " + _this.datasetTable1[0].EXPT_TYPEOFPCS : "";
            _this.UnitOfMeasurementAir = (_this.datasetTable.length > 0) ? _this.datasetTable[0].UNIT : "";
            _this.RotationDate = (_this.datasetTable1.length > 0) ? (_this.datasetTable1[0].VSL_RTDATE != '') ? _this.datasetTable1[0].VSL_RTDATE : null : null;
            _this.PeriodPaymentContract = (_this.datasetTable.length > 0) ? _this.datasetTable[0].PERIOD : "";
            if (_this.PeriodPaymentContract == "") {
                _this.PeriodPaymentContract = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].PERIODOFPAYMENT : "";
            }
            _this.NameAddressOfBuyer = (_this.datasetTable1.length > 0) ? (_this.datasetTable1[0].CON_ADD1
                + "\n" + _this.datasetTable1[0].CON_ADD2
                + "\n" + _this.datasetTable1[0].CON_ADD3
                + "\n" + _this.datasetTable1[0].CON_CITYNAME
                + " " + _this.datasetTable1[0].CON_PINCODE
                + " " + _this.datasetTable1[0].CON_COUNTRYNAME).trim() : "";
            _this.Commission = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].INVCOMMISSION : "";
            _this.DiscountFobRate = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].INVDISCOUNT : "";
            _this.PackingMiscCharges = (_this.datasetTable.length > 0) ? _this.datasetTable[0].MISC : '';
            _this.OtherDeduction = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].INVDEDUCTAMT : "";
            _this.Freight = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXPT_FREIGHT : "";
            _this.Insurance = (_this.datasetTable1.length > 0) ? _this.datasetTable1[0].EXPT_INSAMT : "";
            _this.ExporterDesignation = (_this.datasetTable.length > 0) ? _this.datasetTable[0].SDES : '';
            _this.CHADesignation = (_this.datasetTable.length > 0) ? _this.datasetTable[0].CDES : '';
            _this.IdCardNo = (_this.datasetTable.length > 0) ? _this.datasetTable[0].IDNO : '';
            _this.DDate = (_this.datasetTable.length > 0) ?
                (_this.datasetTable[0].DDATE != '') ? _this._dataService.stringdttoArry(_this.datasetTable[0].DDATE) : _this._dataService.stringdttoArry(_this._dataService.getCurrentdate())
                : _this._dataService.stringdttoArry(_this._dataService.getCurrentdate());
        });
    };
    EditAnnexureComponent.prototype.addRow = function (type) {
        if (type == 'CONTAINER') {
            this.datatableContainer.push({ ID: 0, CONTAINERNO: '', SIZE: '', SEALNO: '', SEALDATE: '', PSTUFFED: '' });
        }
        else if (type == 'EXCHANGERATE') {
            this.datatableExchangeRate.push({ ID: 0, CODE: '', UNIT: '', EXCHANGE_RATE: '', EFFECTIVE_DATE: null, BANK_NAME: '', CERTIFICATE_NO: '', CERTIFICATE_DATE: null });
        }
    };
    EditAnnexureComponent.prototype.removeRow = function (type, index) {
        if (type == 'CONTAINER') {
            this.datatableContainer.splice(index, 1);
        }
        else if (type == 'EXCHANGERATE') {
            this.datatableExchangeRate.splice(index, 1);
        }
    };
    EditAnnexureComponent.prototype.backToEdit = function () {
        this.result.emit({ exptno: this.exptno, view: 998 });
    };
    EditAnnexureComponent.prototype.nextSubmit = function () {
        var _this = this;
        if (this.ExporterAddress == '') {
            alert("Please enter exporter address");
            return false;
        }
        else if (this.ConsigneeAddress == '') {
            alert("Please enter consignee address");
            return false;
        }
        else if (this.FactoryStuffed == '') {
            alert("Please select [ Y ] for Factory Stuffing and [ N ] for Dock Stuffing");
            return false;
        }
        var strContainerData = '', strExchangeRateData = '';
        this.datatableContainer.forEach(function (key) {
            if (key.CONTAINERNO != '') {
                var sealDate = (key.SEALDATE != null) ? key.SEALDATE.formatted : '';
                strContainerData += key.ID
                    + '@' + _this.exptno
                    + '@' + key.CONTAINERNO
                    + '@' + key.SIZE
                    + '@' + key.SEALNO
                    + '@' + String(sealDate)
                    + '@' + key.PSTUFFED + '|';
            }
        });
        this.datatableExchangeRate.forEach(function (key) {
            if (key.CODE != '') {
                var effectiveDate = (key.EFFECTIVE_DATE != null) ? key.EFFECTIVE_DATE.formatted : '';
                var certificateDate = (key.CERTIFICATE_DATE != null) ? key.CERTIFICATE_DATE.formatted : '';
                strExchangeRateData += key.ID
                    + '@' + _this.exptno
                    + '@' + key.CODE
                    + '@' + key.UNIT
                    + '@' + key.EXCHANGE_RATE
                    + '@' + String(effectiveDate)
                    + '@' + key.BANK_NAME
                    + '@' + key.CERTIFICATE_NO
                    + '@' + String(certificateDate) + '|';
            }
        });
        var _jsonData = {
            ExptNo: this.exptno,
            Parameter: this.Parameter,
            Sample: this.SampleAccompanied,
            CargoStatus: this.NatureOfCargo,
            NoOfPcs: this.NoOfLoosePacket,
            NoOfContainer: this.NoOfContainers,
            Unit: this.UnitOfMeasurement,
            RotationDate: (this.RotationDate != null) ? this.RotationDate.formatted : '',
            PeriodPaymentContract: this.PeriodPaymentContract,
            ExporterDesignation: this.ExporterDesignation,
            DDate: (this.DDate != null) ? this.DDate.formatted : '',
            CHADesignation: this.CHADesignation,
            IdCardNo: this.IdCardNo,
            EXPTYPEA: (this.ExporterTypeA != null) ? this.ExporterTypeA : '',
            EXPTYPEB: (this.ExporterType != null) ? this.ExporterType : '',
            MarksAndNumber: this.MarksAndNumber,
            Commission: this.Commission,
            Discount: this.DiscountFobRate,
            Misc: this.PackingMiscCharges,
            Deduction: this.OtherDeduction,
            Freight: this.Freight,
            Insurance: this.Insurance,
            Stuffing: this.FactoryStuffed,
            Shipper: this.ExporterAddress,
            Consignee: this.ConsigneeAddress,
            Agency: this.Agency,
            ConsigneeCountry: this.ConsigneeCountry,
            Pod: this.PortOfDestination,
            FinalDestination: this.FinalDestination,
            NameAddressOfBuyer: this.NameAddressOfBuyer,
            StrContainer: strContainerData,
            StrExchangeRate: strExchangeRateData,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            MakerId: this._loginService.getLogin()[0].CMPID
        };
        this._loaderService.display(true);
        this._dataService.Common("Export/AnnexureEditIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table[0]["STATUS"] === 100) {
                alert("Annexure updated successfully");
                _this.result.emit({ exptno: _this.exptno, view: 998 });
            }
            else {
                alert("Something went wrong");
            }
        });
    };
    EditAnnexureComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditAnnexureComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditAnnexureComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditAnnexureComponent.prototype, "exptno", void 0);
    EditAnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-edit',
            template: __webpack_require__(/*! raw-loader!./edit-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/edit-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], EditAnnexureComponent);
    return EditAnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/edit-menu-annexure.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/edit-menu-annexure.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditMenuAnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMenuAnnexureComponent", function() { return EditMenuAnnexureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMenuAnnexureComponent = /** @class */ (function () {
    function EditMenuAnnexureComponent(_dataService, _loginService, _loaderService, _route) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._route = _route;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.EditMenuList = [];
    }
    EditMenuAnnexureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            exptno: this.exptno,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/AnnexureSearchList", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.EditMenuList = _this.displayMenu(data.Table1.length, 'EDIT');
        });
    };
    EditMenuAnnexureComponent.prototype.displayMenu = function (length, vtype) {
        var array = [
            { id: 1, type: 'EDIT', name: 'EDIT ANNEXURE' },
            { id: 2, type: 'EDIT', name: 'EDIT (28. COL) ITEM WISE DETAILS' },
            { id: 3, type: 'EDIT', name: 'EDIT (29. COL) DRAWBACK PARTICULARS' },
            { id: 4, type: 'EDIT', name: 'EDIT (30. COL) DEEC/EPCG LICENSES PARTICULAR' },
            { id: 5, type: 'EDIT', name: 'EDIT (31. COL) DFRC LICENSES PARTICULAR' },
            { id: 8, type: 'PRINT', name: 'ANNEXURE Page 1' },
            { id: 9, type: 'PRINT', name: '	ANNEXURE Page 2' },
            { id: 10, type: 'PRINT', name: 'ANNEXURE Page 3' },
            { id: 11, type: 'PRINT', name: 'ANNEXURE Page 4 (Declaration)' },
            { id: 13, type: 'PRINT', name: 'Col 28. ITEM WISE DETAILS/DBK/DEEC/EPCG' },
            { id: 14, type: 'PRINT', name: 'Col 29. DRAWBACK PARTICULARS' },
            { id: 15, type: 'PRINT', name: 'Col 30. DEEC/EPCG Licenses Particulars' },
            { id: 16, type: 'PRINT', name: 'Col 31. DFRC Licenses Particulars' }
        ];
        if (length == 0) {
            array = array.filter(function (filterby) { return filterby.type === vtype; });
        }
        return array;
    };
    EditMenuAnnexureComponent.prototype.backButton = function () {
        this.result.emit({ exptno: this.exptno, view: 999 });
    };
    EditMenuAnnexureComponent.prototype.redirectTo = function (id, type) {
        if (type == 'EDIT') {
            this.result.emit({ exptno: this.exptno, view: id });
        }
        else if (type == 'PRINT') {
            if (id == 8) {
                window.open("./#/new-tab/annexure-page-one-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 9) {
                window.open("./#/new-tab/annexure-page-two-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 10) {
                window.open("./#/new-tab/annexure-page-three-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 11) {
                window.open("./#/new-tab/annexure-page-four-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 13) {
                window.open("./#/new-tab/annexure-item-wise-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 14) {
                window.open("./#/new-tab/annexure-drawback-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 15) {
                window.open("./#/new-tab/annexure-deec-epcg-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
            else if (id == 16) {
                window.open("./#/new-tab/annexure-dfrc-print/" + this.exptno + "/" + this._loginService.getLogin()[0].CITYCODE, "_blank");
            }
        }
    };
    EditMenuAnnexureComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditMenuAnnexureComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditMenuAnnexureComponent.prototype, "exptno", void 0);
    EditMenuAnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-edit-menu',
            template: __webpack_require__(/*! raw-loader!./edit-menu-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/edit-menu-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditMenuAnnexureComponent);
    return EditMenuAnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/exp-annexure.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/exp-annexure.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExportAnnexureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAnnexureModule", function() { return ExportAnnexureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _exp_annexure_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exp-annexure.routing */ "./src/app/export/printdocument/annexure/exp-annexure.routing.ts");
/* harmony import */ var _annexure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annexure.component */ "./src/app/export/printdocument/annexure/annexure.component.ts");
/* harmony import */ var _search_annexure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-annexure.component */ "./src/app/export/printdocument/annexure/search-annexure.component.ts");
/* harmony import */ var _edit_menu_annexure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-menu-annexure.component */ "./src/app/export/printdocument/annexure/edit-menu-annexure.component.ts");
/* harmony import */ var _edit_annexure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-annexure.component */ "./src/app/export/printdocument/annexure/edit-annexure.component.ts");
/* harmony import */ var _item_detail_annexure_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-detail-annexure.component */ "./src/app/export/printdocument/annexure/item-detail-annexure.component.ts");
/* harmony import */ var _drawback_annexure_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drawback-annexure.component */ "./src/app/export/printdocument/annexure/drawback-annexure.component.ts");
/* harmony import */ var _deec_epcg_annexure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./deec-epcg-annexure.component */ "./src/app/export/printdocument/annexure/deec-epcg-annexure.component.ts");
/* harmony import */ var _dfrc_annexure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dfrc-annexure.component */ "./src/app/export/printdocument/annexure/dfrc-annexure.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ExportAnnexureModule = /** @class */ (function () {
    function ExportAnnexureModule() {
    }
    ExportAnnexureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_exp_annexure_routing__WEBPACK_IMPORTED_MODULE_8__["ExportAnnexureRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_annexure_component__WEBPACK_IMPORTED_MODULE_9__["AnnexureComponent"], _search_annexure_component__WEBPACK_IMPORTED_MODULE_10__["AnnexureSearchComponent"], _edit_menu_annexure_component__WEBPACK_IMPORTED_MODULE_11__["EditMenuAnnexureComponent"], _edit_annexure_component__WEBPACK_IMPORTED_MODULE_12__["EditAnnexureComponent"],
                _item_detail_annexure_component__WEBPACK_IMPORTED_MODULE_13__["ItemDetailAnnexureComponent"], _drawback_annexure_component__WEBPACK_IMPORTED_MODULE_14__["DrawbackAnnexureComponent"], _deec_epcg_annexure_component__WEBPACK_IMPORTED_MODULE_15__["DeecEpcgAnnexureComponent"], _dfrc_annexure_component__WEBPACK_IMPORTED_MODULE_16__["DfrcAnnexureComponent"],],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportAnnexureModule);
    return ExportAnnexureModule;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/exp-annexure.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/exp-annexure.routing.ts ***!
  \***********************************************************************/
/*! exports provided: ExportAnnexureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAnnexureRoutingModule", function() { return ExportAnnexureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _annexure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annexure.component */ "./src/app/export/printdocument/annexure/annexure.component.ts");
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
            title: 'annexure'
        },
        children: [
            { path: 'annexure', component: _annexure_component__WEBPACK_IMPORTED_MODULE_2__["AnnexureComponent"], data: { title: 'Print-Document / Annexure' } },
        ]
    }
];
var ExportAnnexureRoutingModule = /** @class */ (function () {
    function ExportAnnexureRoutingModule() {
    }
    ExportAnnexureRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportAnnexureRoutingModule);
    return ExportAnnexureRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/item-detail-annexure.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/item-detail-annexure.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemDetailAnnexureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailAnnexureComponent", function() { return ItemDetailAnnexureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailAnnexureComponent = /** @class */ (function () {
    function ItemDetailAnnexureComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtItemDetail = [];
    }
    ItemDetailAnnexureComponent.prototype.ngOnInit = function () {
        this.pageLoad(this.exptno);
    };
    ItemDetailAnnexureComponent.prototype.pageLoad = function (exptno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            ExptNo: exptno,
            GuId: this._loginService.getLogin()[0].GUID,
            Status: ""
        };
        this._dataService.Common("Export/AnnexureItemDetailPopulateData", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                _this.dtItemDetail = data.Table;
            }
            else {
                _this.addRow();
            }
        });
    };
    ItemDetailAnnexureComponent.prototype.addRow = function () {
        this.dtItemDetail.push({
            ID: 0,
            JOBNO: this.exptno,
            SRNO: '',
            RITCNO: '',
            IDESC: '',
            ACCRY: '',
            QTY: '',
            ACUNIT: '',
            ITEM: '',
            NOOFUNIT: '',
            UNITRATE: '',
            MKTVALUE: '',
            SCHEME: '',
            NFEI: '',
            THIRDPARTY: '',
            ENTRYDATE: ''
        });
    };
    ItemDetailAnnexureComponent.prototype.removeRow = function (index) {
        this.dtItemDetail.splice(index, 1);
    };
    ItemDetailAnnexureComponent.prototype.saveItemDetails = function () {
        var _this = this;
        var strData = '';
        this.dtItemDetail.forEach(function (key) {
            if (key["SRNO"] != '') {
                strData += _this.exptno
                    + '@' + key["SRNO"]
                    + '@' + key["RITCNO"]
                    + '@' + key["IDESC"]
                    + '@' + key["ACCRY"]
                    + '@' + key["QTY"]
                    + '@' + key["ACUNIT"]
                    + '@' + key["ITEM"]
                    + '@' + key["NOOFUNIT"]
                    + '@' + key["UNITRATE"]
                    + '@' + key["MKTVALUE"]
                    + '@' + key["SCHEME"]
                    + '@' + key["NFEI"]
                    + '@' + key["THIRDPARTY"]
                    + '@' + _this._dataService.getCurrentdate()
                    + '|';
            }
        });
        this._loaderService.display(true);
        var _jsonData = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            ExptNo: this.exptno,
            StrData: strData
        };
        this._dataService.Common("Export/AnnexureItemDetailIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            alert("Data Updated Successfully");
            _this.result.emit({ exptno: _this.exptno, view: 998 });
        });
    };
    ItemDetailAnnexureComponent.prototype.backToEdit = function () {
        this.result.emit({ exptno: this.exptno, view: 998 });
    };
    ItemDetailAnnexureComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemDetailAnnexureComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemDetailAnnexureComponent.prototype, "exptno", void 0);
    ItemDetailAnnexureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-item-detail',
            template: __webpack_require__(/*! raw-loader!./item-detail-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/item-detail-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], ItemDetailAnnexureComponent);
    return ItemDetailAnnexureComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/annexure/search-annexure.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/export/printdocument/annexure/search-annexure.component.ts ***!
  \****************************************************************************/
/*! exports provided: AnnexureSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnexureSearchComponent", function() { return AnnexureSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnnexureSearchComponent = /** @class */ (function () {
    function AnnexureSearchComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ExptNo = ''; //011010310001256
    }
    AnnexureSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights('191', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
        // const _jsonData = {};
        // this._dataService.getData("Export/Generate_EpCopy_New", _jsonData)
        //     .subscribe((data: any) => {
        //         this._dataService.html_downloadFileByUrl(data,"EP_Copy_Coversheet.html");
        //     });
    };
    AnnexureSearchComponent.prototype.searchData = function () {
        var _this = this;
        if (this.ExptNo == '') {
            alert('Please Enter Export NO.');
        }
        else if (this.ExptNo.length != 15) {
            alert('Invalid Export NO.');
        }
        else {
            this._loaderService.display(true);
            // this.result.emit({exptno: this.ExptNo, view: 998});
            // this._loaderService.display(false);
            var _jsonData = {
                citycode: this._loginService.getLogin()[0].CITYCODE,
                exptno: this.ExptNo
            };
            this._dataService.getData("Export/AnnexureSearchList", _jsonData)
                .subscribe(function (data) {
                _this._loaderService.display(false);
                _this.result.emit({ exptno: _this.ExptNo, view: 998 });
            });
        }
    };
    AnnexureSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AnnexureSearchComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnnexureSearchComponent.prototype, "result", void 0);
    AnnexureSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-document-annexure-search',
            template: __webpack_require__(/*! raw-loader!./search-annexure.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/annexure/search-annexure.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], AnnexureSearchComponent);
    return AnnexureSearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=printdocument-annexure-exp-annexure-module.js.map