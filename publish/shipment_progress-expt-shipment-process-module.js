(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipment_progress-expt-shipment-process-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/List-carting-sea.sp.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/List-carting-sea.sp.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\t\r\n\t<div class=\"col-sm-1\">\r\n\t</div>\r\n\t<div class=\"col-sm-10\">\t \r\n\t\t<table class=\"table table-bordered table-sm-new\">\t\r\n\t\t<thead class=\"\">\r\n\t\t\t<tr *ngFor=\"let d of SearchHead\"  class=\"col-form-span-heading\">\r\n\t\t\t\t<th colspan=\"12\" class=\"col-form-span-label\"> \r\n\t\t\t\t\t<span class=\"col-form-span-label\" >{{d.vsl}}</span>\r\n\t\t\t\t</th>\r\n\t\t\t</tr> \r\n\t\t</thead>\r\n\t\t<thead>\r\n\t\t <tr class=\"col-form-span-heading\">\t\t \t \r\n\t\t\t\t<th class=\"col-form-span-label\" >Select</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">M.P Ref. No</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Shipper</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Consignee</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Tot. Pkgs</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Tot. Pieces</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Tot. Pkgs Recvd</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Order No.</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Carton</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Pkgs</th>\r\n\t\t\t\t<th class=\"col-form-span-label\">Remark</th>\r\n\t\t\t\t<th class=\"col-form-span-label\"></th>\r\n\t\t\t\t\r\n\t\t </tr>\r\n\t\t </thead>\r\n\t\t\t<tbody class=\"bgwhite\">\r\n\t\t\t\t<tr *ngFor=\"let d of CartingList\"  [ngStyle]=\"{'background-color':d.SELEJOB!=true ? '' : 'white' }\" >\t\r\n\t\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"d.SELEJOB\" > </td>\r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXPTNO}}</td>\r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.SHIPPER}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.CONSIGNEE}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXP_NOPKGS}}</td>\r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXP_NOPCS}}</td>\r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.RCVDPKGS}}</td>\r\n\t\t\t\t\t<td class=\"col-form-span-label\">{{d.ORDERNO}}</td>\t\t\t\t\t\r\n\t\t\t\t\t<td> \r\n\t\t\t\t\t\t<my-date-picker name=\"dtbld\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"d.CARTEDON\" [disabled]=\"d.SELEJOB!=true\" ></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><input type=\"Textbox\"  class=\"form-control width150\" [(ngModel)]=\"d.NOOFPKG\" [disabled]=\"d.SELEJOB!=true\" (keyup)=\"vslidaionPkgs(d.RCVDPKGS,d.NOOFPKG)\" > </td>\r\n\t\t\t\t\t<td><input type=\"Textbox\" class=\"form-control width150\" [(ngModel)]=\"d.REMARK\" [disabled]=\"d.SELEJOB!=true\"  > </td>\r\n\t\t\t\t\t<td><button class=\"btn btn-sm btn-danger\" type=\"submit\"   name=\"btndelete\" [disabled]=\"d.CARTID==0\"   (click)=\"OnDelete(d.containerno,d.CARTID)\"><span class=\"col-form-span-label \"> <i class=\"fa fa-trash\"></i>  </span> </button>\t\t\t\t </td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<div style=\"float:right\">\r\n\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"   name=\"btnAdd\" [disabled]=\"buttondis\"  (click)=\"OnCartSave()\"><span class=\"col-form-span-label \"> <i class=\"fa fa-search\"></i> Submit</span> </button>\t\t\t\t \r\n\t\t</div> \r\n\t</div>\r\n\t\t<div class=\"col-sm-1\">\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/approval-received.sp.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/approval-received.sp.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>Approval Received Detail </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Approval Date </span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ApprovalDate\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">By Whom </span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"ByWhom\" class=\"form-control width150\" [maxlength]=\"20\" />\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Remark </span></td>\r\n\t\t\t\t\t<td colspan=\"7\"><textarea rows=\"2\" class=\"form-control\" [(ngModel)]=\"Remark\"></textarea></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/bl-details.sp.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/bl-details.sp.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>BL Detail </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"BLType\" [checked]=\"BlType == 'M'\" (change)=\"BlType='M'\"/>Master B/L \r\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"BLType\" [checked]=\"BlType == 'S'\" (change)=\"BlType='S'\"/>Seaway B/L \r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">B/L No. </span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"BLNo\" class=\"form-control\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">B/L Date  </span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"BLDate\"></my-date-picker>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">B/L Freight  </span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"BLFreight\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width75\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select> -->\r\n\t\t\t\t\t\t<select class=\"form-control width75\"   [(ngModel)]=\"BLFreight\">\r\n\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t<option value=\"CC\">CC</option>\r\n\t\t\t\t\t\t\t<option value=\"PP\">PP</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">HBL No.  </span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"HBLNo\" class=\"form-control\" />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">HBL Date  </span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"HBLDate\"></my-date-picker>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/carting-air.sp.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/carting-air.sp.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>Carting(Air) Detail </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Carted Date</span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"CartingDate\"  ></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/carting-sea.sp.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/carting-sea.sp.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"animated fadeIn\">\r\n     \r\n    <app-search-carting-sea   *ngIf=\"_viewType=='Search'\" (search)=\"SearchData($event)\"></app-search-carting-sea>\r\n    <app-list-carting-sea   *ngIf=\"_viewType=='List'\" [CartingList] =\"searchList\" [SearchHead]=\"header\"  (searlist)=\"onlist($event)\"></app-list-carting-sea>\t\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"animated fadeIn\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t\t\t   <strong><u>{{headerType}}</u></strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<div class=\"row\">\t\r\n\t<div class=\"col-sm-3\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\t \r\n\t\t<table class=\"table table-bordered table-sm-new\">\t\t\t\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Name</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t<select class=\"form-control width300\"  [(ngModel)]=\"VslName\" (change)=\"onAgentSelect($event.target.value)\">\r\n\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of vslnameList\" value={{d.RTNOPRT}}>{{d.VSL_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Agent</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t<select class=\"form-control width200\"  [(ngModel)]=\"VslAgent\"  >\r\n\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of Agentlist\" value={{d.agt_code}}>{{d.agt_name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Exptno</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t <input type=\"Textbox\" class=\"form-control width150\" [(ngModel)]=\"Exptno\" maxlength=\"15\"    >\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\t\t\t\t\r\n\t\t\t\t<td colspan=\"2\" class=\"centerlabel\" >\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"  name=\"btnAgtAdd\"  (click)=\"onTransfervsl()\"> <span class=\"col-form-span-label \"><i class=\"fa fa-search\"></i> Transfer </span></button>\r\n\t\t\t\t</td>\r\n\t\t\t\t\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t\t<div class=\"col-sm-3\">            \r\n\t\t</div>\r\n\t</div>\t\r\n</div>\t\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/common.search.sp.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/common.search.sp.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t\t   <strong><u>{{headerType}}</u></strong>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-4\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-4\">\r\n\t\t\t<table class=\"table table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td class=\"width90\"><span class=\"col-form-span-label\"><b>Type</b></span></td>\r\n\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><input type=\"radio\" name=\"check\"  (click)=\"changeType('EXPORT_NO')\" [checked]=\"checkType == 'EXPORT_NO'\"/>Export No.</span>&nbsp;&nbsp;\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><input type=\"radio\" name=\"check\"  (click)=\"changeType('ORDER_NO')\" [checked]=\"checkType == 'ORDER_NO'\"/>Order No.</span>&nbsp;&nbsp;\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><input type=\"radio\" name=\"check\"  (click)=\"changeType('REF_NO')\" [checked]=\"checkType == 'REF_NO'\"/>Ref No.</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td class=\"width90\"><span class=\"col-form-span-label\"><b>Values</b></span></td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"SearchValue\" class=\"form-control width120\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><span class=\"col-form-span-error\">{{ErrorMessage}}</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"searchButton\" class=\"btn btn-l btn-primary\" (click)=\"search();\" #searchButton >\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'0'\"></app-font-changer> Search</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-4\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" *ngIf=\"searchList.length > 0\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<br />\r\n\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"title-head formheading\" style=\"white-space: nowrap;\">\r\n\t\t\t\t\t\t<th>M.P.REFERENCE</th>\r\n\t\t\t\t\t\t<th>SHIPPER NAME</th>\r\n\t\t\t\t\t\t<th>CONSIGNEE NAME</th>\r\n\t\t\t\t\t\t<th>TOTAL NO. OF PACKAGES</th>\r\n\t\t\t\t\t\t<th>TOTAL NO. OF PIECES</th>\r\n\t\t\t\t\t\t<th>ORDER NO./REF DETAILS</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of searchList\" (click)=\"rowClick(obj['M.P.REFERENCE'])\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[\"exptno_view\"]}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[\"SHIPPER NAME\"]}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[\"CONSIGNEE NAME\"]}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[\"TOTAL NO. OF PACKAGES\"]}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[\"TOTAL NO. OF PIECES\"]}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[\"ORDER NO./REF DETAILS\"]}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" *ngIf=\"searchListLength == 1\">\r\n\t\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t\t<br /><br />\r\n\t\t\t<span class=\"col-form-span-label\">No Record Found!</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/common.view.sp.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/common.view.sp.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new\">\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"4\"><span class=\"col-form-span-label\"><b>General Details</b></span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Export No.</span></td>\r\n\t\t<td><span class=\"col-form-span-value\"><b>{{viewDataTable?.exptno_view}}</b></span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Doc recd date</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.DOC_RECD_DATE}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Shipper Name</span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-value\">{{viewDataTable?.SHIPPER_NAME}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Consignee</span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-value\">{{viewDataTable?.CONSIGNEE}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Invoice No.</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.INV_NO}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Invoice date</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.INV_DATE}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">GRI No.</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.GRI_NO}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">GRI date</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.GRI_DATE}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Total No. of Packages</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.TOTAL_NO_OF_PACKAGES}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Total No. of Pieces</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.TOTAL_NO_OF_PIECES}}</span></td>\r\n\t</tr>\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"4\"><span class=\"col-form-span-label\"><b>Vessel Details</b></span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Vessel Name</span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-value\">{{viewDataTable1?.VESSEL_NAME}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">ETD</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable1?.ETD}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Actual Departure</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable1?.ACTUAL_DEPARTURE}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Order No.</span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-value\">{{viewDataTable?.ORDERNO}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">GR. WT.</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.GR_WT}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">NET WT.</span></td>\r\n\t\t<td><span class=\"col-form-span-value\">{{viewDataTable?.NET_WT}}</span></td>\r\n\t</tr>\r\n\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Volume</span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-value\">{{viewDataTable?.VOLUME}}</span></td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/container-loading-confirmation.sp.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/container-loading-confirmation.sp.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>CONTAINER LOADING CONFIRMATION </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"this.viewType == 'Search'\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width100\"><span class=\"col-form-span-label\">Vessel Name<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"VesselName\" class=\"form-control\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width100\"><span class=\"col-form-span-label\">Voyage No<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"VoyageNo\" class=\"form-control\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"centerlabel\" colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" name=\"searchButton\" (click)=\"Search()\" #searchButton><span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>&nbsp;Search</span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<div class=\"row yscroll\" style=\"height:300px\" *ngIf=\"this.viewType=='Search'&&searchList.length > 0\">\r\n\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Vessel Name</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Voyage No</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">ETD</span></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody class=\"bgwhite\">\r\n\t\t\t\t\t\t<tr *ngFor=\"let obj of searchList\" (click)=\"rowSearchSendClick(obj.VSL_RTNO, obj.VSL_NAME, obj.VSL_VOYNO, obj.ETD);\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.VSL_NAME}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.VSL_VOYNO}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETD}}</span></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"this.viewType=='Search'&&searchList.length > 0\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"error-text\">{{searchList.length + ' Rows Found.'}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<app-shipment-progress-container-loading-view [DataSet]=\"ContainerDataSet\" *ngIf=\"this.viewType=='View'\" (backtosearch)=\"back($event)\" (editdata)=\"editdata($event)\"></app-shipment-progress-container-loading-view>\r\n\t\t\t<app-shipment-progress-container-loading-update [DataSet]=\"UpdateDataSet\" [EditData]=\"EditData\" *ngIf=\"this.viewType=='Update'\" (updatedata)=\"reportdata($event)\" (backtosearch)=\"back($event)\"></app-shipment-progress-container-loading-update>\r\n\t\t\t<app-shipment-progress-container-loading-report [DataSet]=\"ReportDataSet\" *ngIf=\"this.viewType=='Report'\" (backtosearch)=\"back($event)\"></app-shipment-progress-container-loading-report>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage !== ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"error-text\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/destination-document-on.sp.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/destination-document-on.sp.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>DESTINATION DOCUMENTS DETAILS</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"docRecdList.length>0\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>DOCUMENTS RECEIVED</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"docRecdList.length>0\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t\t<th class=\"width100\"><span class=\"col-form-span-label\"></span></th>\r\n\t\t\t\t\t\t<th><span class=\"col-form-span-label\">DOCUMENT NAME</span></th>\r\n\t\t\t\t\t\t<th><span class=\"col-form-span-label\">RECD DATE</span></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of docRecdList\">\r\n\t\t\t\t\t\t<td class=\"width100\"><span class=\"col-form-span-label\">{{obj.DOCCODE}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.DOCUMENT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDDT}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>OTHER DOCUMENTS</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"mainList.length>0\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t\t<th class=\"width100\"><span class=\"col-form-span-label\"></span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\" colspan=\"3\"><span class=\"col-form-span-label\">DOCUMENT NAME</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel width100\" colspan=\"2\"><span class=\"col-form-span-label\">RECD</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel width80\"><span class=\"col-form-span-label\">CALL FOR</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel width80\"><span class=\"col-form-span-label\">NA</span></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of mainList\">\r\n\t\t\t\t\t\t<td class=\"width100\"><span class=\"col-form-span-label\">{{obj.DOCCODE}}</span></td>\r\n\t\t\t\t\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{obj.DOCUMENT}}</span></td>\r\n\t\t\t\t\t\t<td class=\"centerlabel\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"{{obj.DOCCODE}}\" value=\"{{'R'+obj.DOCCODE}}\" [(ngModel)]=\"obj.RECD\" (change)=\"obj.CALL=null;obj.NA=null;obj.RECDDT=null\" />\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td [ngClass]=\"(obj.RECD !== null && obj.RECDDT === null)? 'width100 bgred' : 'width100'\">\r\n\t\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"obj.RECDDT\" [disabled]=\"obj.RECD == null\"></my-date-picker>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"centerlabel\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"{{obj.DOCCODE}}\" value=\"{{'C'+obj.DOCCODE}}\" [(ngModel)]=\"obj.CALL\" (change)=\"obj.RECD=null;obj.NA=null;obj.RECDDT=null\" />\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"centerlabel\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"{{obj.DOCCODE}}\" value=\"{{'N'+obj.DOCCODE}}\" [(ngModel)]=\"obj.NA\" (change)=\"obj.RECD=null;obj.CALL=null;obj.RECDDT=null\" />\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"IsDocumentSent\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>DOCUMENT SENT TO CONSIGNEE</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"IsDocumentSent\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Date</span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"Date\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Courier No.</span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"CourierNo\" class=\"form-control\" [maxlength]=\"40\" />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Remark</span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<textarea rows=\"2\" class=\"form-control\" [(ngModel)]=\"Remark\" [maxlength]=\"400\"></textarea>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/dimension.sp.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/dimension.sp.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/manage-carting-sea.sp.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/manage-carting-sea.sp.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\t\r\n\t<div class=\"col-sm-3\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\t \r\n\t\t<table class=\"table table-bordered table-sm-new\">\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td  colspan=\"2\"  class=\"centerlabel\" >\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\" id=\"btndelete\" name=\"btnSearch\"     (click)=\"deletecarting()\"> <span class=\"col-form-span-label \"><i class=\"fa fa-search\"></i> Delete</span></button>\r\n\t\t\t\t\t<button   class=\"btn btn-sm btn-danger   \" type=\"reset\"     (click)=\"trfVessel()\"><span class=\"col-form-span-label \"><i class=\"fa fa-print \"></i> Tranfer Veseel</span></button>\r\n\t\t\t\t</td> \r\n\t\t\t</tr>\r\n\t\t\t<tr>\t\t\t\t \r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Name</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t<select class=\"form-control width300\"  [(ngModel)]=\"VslName\" (change)=\"onAgentSelect($event.target.value)\">\r\n\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of vslnameList\" value={{d.VSL_RTNO}}>{{d.VSL_NAME}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Agent</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t<select class=\"form-control width200\"  [(ngModel)]=\"VslAgent\"  >\r\n\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of Agentlist\" value={{d.agt_code}}>{{d.agt_name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\t\t\t\t\r\n\t\t\t\t<td colspan=\"2\" class=\"centerlabel\" >\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"  name=\"btnAgtAdd\"  (click)=\"onsearch()\"> <span class=\"col-form-span-label \"><i class=\"fa fa-search\"></i> Submit </span></button>\r\n\t\t\t\t</td>\r\n\t\t\t\t\r\n\t\t\t</tr>\r\n\t\t\t \r\n\t\t\t\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"col-sm-3\">            \r\n\t</div>\r\n</div>\r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/measurement.sp.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/measurement.sp.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>Measurement Detail </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">CBM</span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"Cbm\" class=\"form-control width150\" [maxlength]=\"20\" />\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/out-of-charge.sp.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/out-of-charge.sp.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>Out Of Charge Detail </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Date </span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"Date\"></my-date-picker>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/pending-shipment-report.sp.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/pending-shipment-report.sp.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new\">\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><strong>{{Header}}</strong></span>\r\n\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back</u></span></button>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><strong>Old Vessel Details </strong></span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><strong>{{OldVessel}}</strong></span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><strong>New Vessel Details</strong></span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><strong>{{NewVessel}}</strong></span>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n<div class=\"row yscroll\" style=\"height:300px\" *ngIf=\"ExportList.length > 0\">\r\n\t<table class=\"table table-bordered table-sm-new\" style=\"white-space:nowrap;\">\r\n\t   <thead>\r\n\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t<th><span class=\"col-form-span-label\">EXPORT NO</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">SHIPPER</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">CONSIGNEE</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">AGENT</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">PKGS</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">PCS</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">ORDER NO</span></th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let obj of ExportList\">\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXP_NAME}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CON_NAME}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.AGT_SNAME}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_NOOFPKGS}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_NOOFPCS}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ORDERNO}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n<div class=\"row yscroll\" style=\"height:300px\" *ngIf=\"ContainerList.length > 0\">\r\n\t<table class=\"table table-bordered table-sm-new\" style=\"white-space:nowrap;\">\r\n\t   <thead>\r\n\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t<th><span class=\"col-form-span-label\">Container No</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">Export No</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">Total No Of Pkgs</span></th>\r\n\t\t\t\t<th><span class=\"col-form-span-label\">Total CBM</span></th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<ng-container *ngFor=\"let obj of ContainerList\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td *ngIf=\"obj.CONTAINERNO !== ''\" [attr.rowspan]=\"obj.TOTAL_COUNT\" style=\"vertical-align: middle;\"><span class=\"col-form-span-label\">{{obj.CONTAINERNO}}</span></td>\r\n\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span></td>\r\n\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</ng-container>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/pending-shipment.sp.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/pending-shipment.sp.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>PENDING SHIPMENTS OF THE PURTICULAR VESSEL</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"this.viewType == 'Search'\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width100\"><span class=\"col-form-span-label\">Vessel Name<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"VesselName\" class=\"form-control\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width100\"><span class=\"col-form-span-label\">Voyage No<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"VoyageNo\" class=\"form-control\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"centerlabel\" colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" name=\"searchButton\" (click)=\"Search()\" #searchButton><span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>&nbsp;Search</span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<div class=\"row yscroll\" style=\"height:300px\" *ngIf=\"this.viewType == 'Search'&&searchList.length > 0\">\r\n\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Vessel Name</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Voyage No</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">ETD</span></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let obj of searchList\" (click)=\"rowSearchSendClick(obj.VSL_RTNO, obj.VSL_NAME, obj.VSL_VOYNO, obj.ETD);\" style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.VSL_NAME}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.VSL_VOYNO}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETD}}</span></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"this.viewType == 'Search'&&searchList.length > 0\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"error-text\">{{searchList.length + ' Rows Found.'}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"this.viewType == 'View'\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>{{VesselLabel}}</strong></span>\r\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"viewType='Search';NewVessel=null;NewAgent=null\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to Search</u></span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<tabset>\r\n\t\t\t\t\t\t\t<tab style=\"padding: 0;\">\r\n\t\t\t\t\t\t\t\t<ng-template tabHeading><span class=\"title-head\"><u>#Export No</u></span></ng-template>\r\n\t\t\t\t\t\t\t\t<div class=\"row yscroll\" style=\"height:300px\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><input type=\"checkbox\" name=\"all\" [checked]=\"SelectAll\" (click)=\"checkSelectAll()\"/></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">EXPORT NO</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">SHIPPER</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">CONSIGNEE</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">AGENT</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">PKGS</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">PCS</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">ORDER NO</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of ExportNoList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\" name=\"all\" style=\"cursor: pointer;\" [checked]=\"obj.Check==true\" [(ngModel)]=\"obj.Check\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXP_NAME}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CON_NAME}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.AGT_SNAME}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_NOOFPKGS}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_NOOFPCS}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ORDERNO}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t\t   <tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>New Vessel</strong><span class=\"col-form-span-error\"> *</span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [items]=\"NewVesselList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"NewVessel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   (change)=\"changeNewVessel(NewVessel)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>Agent Name</strong><span class=\"col-form-span-error\"> *</span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [items]=\"NewAgentList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   bindLabel=\"AGT_NAME\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   bindValue=\"VSL_AGENT\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"NewAgent\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-success\" (click)=\"submit();\" [disabled]=\"ExportNoList.length==0\" #submitButton>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-check-square-o\"></i>&nbsp;Transfer the selected shipments to another vessel</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error-text\" *ngIf=\"ExportNoList.length==0\">THERE ARE NO PENDING SHIPMENTS IN THIS VESSEL</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error-text\" *ngIf=\"ExportNoList.length>0\">{{ExportNoList.length + ' PENDING SHIPMENTS IN THIS VESSEL'}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</tab>\r\n\t\t\t\t\t\t\t<tab style=\"padding: 0;\"  *ngIf=\"ContainerNoList.length>0\">\r\n\t\t\t\t\t\t\t\t<ng-template tabHeading><span class=\"title-head\"><u>#Container No</u></span></ng-template>\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t  <td class=\"col-form-span-heading\" colspan=\"8\">\r\n\t\t\t\t\t\t\t\t\t\t CONTAINER LOADING CONFIRMATION IS NOT DONE FOR THE FOLLOWING CONTAINERS\r\n\t\t\t\t\t\t\t\t\t  </td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"row yscroll\" style=\"height:300px\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">CONTAINER NO</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">SIZE</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">STATUS</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">AGENT</span></th>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of ContainerNoList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\" style=\"cursor: pointer;color: #0000ff;\" (click)=\"rowContainerSendClick(obj.EXPT_VESSEL,obj.CONTAINERNO,obj.AGT_NAME,obj.CONTAINERSTATUS)\"><u>{{obj.CONTAINERNO}}</u></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.SIZE}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONTAINERSTATUS}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.AGT_NAME}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"ContainerNoList.length>0\">\r\n\t\t\t\t\t\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"error-text\">CLICK ON CONTAINER NO. TO TRANSFER THE PARTICULAR CONTAINER TO ANOTHER VESSEL</span>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</tab>\r\n\t\t\t\t\t\t</tabset>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage !== ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"error-text\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='ContainerDetail'\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><b>TRANSFER CONTAINER TO ANOTHER VESSEL </b></span>\r\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"viewType='View'\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to Container List</u></span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b style=\"font-size: 10px;\">{{ContainerHeader}}</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>Consignment Details</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<div class=\"row yscroll\" style=\"height:200px;background: #fff;\" *ngIf=\"viewType=='ContainerDetail'\">\r\n\t\t\t\t<table class=\"table table-bordered table-sm-new\" style=\"white-space:nowrap;\">\r\n\t\t\t\t   <thead>\r\n\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">Container No</span></th>\r\n\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">Export No</span></th>\r\n\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">Total No Of Pkgs</span></th>\r\n\t\t\t\t\t\t\t<th><span class=\"col-form-span-label\">Total CBM</span></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let obj of ContainerDetailsList\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"obj.CONTAINERNO !== ''\" [attr.rowspan]=\"obj.TOTAL_COUNT\" style=\"vertical-align: middle;\"><span class=\"col-form-span-label\">{{obj.CONTAINERNO}}</span></td>\r\n\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span></td>\r\n\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='ContainerDetail'\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>New Vessel Name</strong><span class=\"col-form-span-error\"> *</span></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<ng-select [items]=\"ContainerVesselList\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"ContainerVessel\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t   (change)=\"changeContainerNewVessel(ContainerVessel)\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>Vessel Agent</strong><span class=\"col-form-span-error\"> *</span></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<ng-select [items]=\"ContainerAgentList\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"AGT_NAME\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VSL_AGENT\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"ContainerAgent\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>SHPG Line</strong></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<ng-select [items]=\"ContainerLinerList\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"LINER_NAME\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"LINER_CODE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"ContainerLiner\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitContainerButton\" class=\"btn btn-sm btn-success\" (click)=\"submitContainer();\" #submitContainerButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-check-square-o\"></i>&nbsp;Click here to transfer all containers</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<app-shipment-progress-pending-shipment-report [DataSet]=\"DataSet\" [ReportType]=\"ReportType\" [OldVessel]=\"VesselLabel\" (result)=\"back($event)\" *ngIf=\"this.viewType == 'Report'\"></app-shipment-progress-pending-shipment-report>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/pre-frt-approved-shipper.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/pre-frt-approved-shipper.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t \r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Prepaid freight approved by shipper date</span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"frtApprdt\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/prealert-sent-on.sp.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/prealert-sent-on.sp.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>Prealert Detail </b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Prealert Sent On </span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"SentOnDate\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-sm btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/receipt-cargo-provision.sp.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/receipt-cargo-provision.sp.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"6\"><span class=\"col-form-span-label\"><b>RECEIPT OF CARGO (WITHOUT JOBNO) DETAILS</b></span></td>\r\n\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\" *ngIf=\"viewType=='Add'\">\r\n\t\t\t\t\t\t\t<u><a href=\"javascript:void(0);\" (click)=\"viewType='Search'\"><i class=\"fa fa-arrow-left\"></i> Back To Search</a></u>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='Search'\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Shipper<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<ng-select [items]=\"ShipperList\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"-- Select --\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"Shipper\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Consignee<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<ng-select [items]=\"ConsigneeList\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"CON_NAME\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"CON_CODE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"-- Select --\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"Consignee\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" name=\"searchButton\" (click)=\"Search()\"  #searchButton><span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>&nbsp;Search</span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='Add'\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Shipper</span></td>\r\n\t\t\t\t\t<td colspan=\"7\"></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Consignee</span></td>\r\n\t\t\t\t\t<td colspan=\"7\"></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Order No </span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"OrderNo\" class=\"form-control width100\"/></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Style No </span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"StyleNo\" class=\"form-control width100\"/></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Gross Weight </span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"GrossWgt\" class=\"form-control width100\" OnlyNumber=\"true\"/></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Volume </span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"Volume\" class=\"form-control width100\" OnlyNumber=\"true\"/></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><strong>PACKAGE DETAILS</strong></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">No Of Pkgs</span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">Recd Date</span></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Recd Where</span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">Recd Locally</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><input type=\"text\" [(ngModel)]=\"NoOfPkgs\" class=\"form-control width80\" [maxlength]=\"20\" /></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"RecdDate\"></my-date-picker></td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '01'},{VALUE: '02'},{VALUE: '03'},{VALUE: '04'},{VALUE: '05'},{VALUE: '06'},{VALUE: '07'},{VALUE: '08'},{VALUE: '09'},{VALUE: '10'},{VALUE: '11'},{VALUE: '12'},{VALUE: '13'},{VALUE: '14'},{VALUE: '15'},{VALUE: '16'},{VALUE: '17'},{VALUE: '18'},{VALUE: '19'},{VALUE: '20'},{VALUE: '21'},{VALUE: '22'},{VALUE: '23'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdTime\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '15'},{VALUE: '30'},{VALUE: '45'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdMin\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"RecdWhere\" class=\"form-control width150\" [maxlength]=\"20\" /></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"RecdLocal\"></my-date-picker></td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '01'},{VALUE: '02'},{VALUE: '03'},{VALUE: '04'},{VALUE: '05'},{VALUE: '06'},{VALUE: '07'},{VALUE: '08'},{VALUE: '09'},{VALUE: '10'},{VALUE: '11'},{VALUE: '12'},{VALUE: '13'},{VALUE: '14'},{VALUE: '15'},{VALUE: '16'},{VALUE: '17'},{VALUE: '18'},{VALUE: '19'},{VALUE: '20'},{VALUE: '21'},{VALUE: '22'},{VALUE: '23'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdLocalTime\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '15'},{VALUE: '30'},{VALUE: '45'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdLocalMin\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-success\" name=\"addButton\" (click)=\"addUpdate()\" *ngIf=\"Type == 'A'\"  #addButton><span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i>&nbsp;Add</span></button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" name=\"updateButton\" (click)=\"addUpdate()\" *ngIf=\"Type == 'E'\"  #updateButton><span class=\"col-form-span-label\"><i class=\"fa fa-refresh\"></i>&nbsp;Update</span></button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"reset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-undo\"></i>&nbsp;Reset</span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<div class=\"row yscroll\" style=\"height:150px\">\r\n\t\t\t\t<table class=\"table table-bordered table-striped table-sm-new\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t\t\t\t<th class=\"width75\"></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">No Of Pkgs</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Recd Date</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Recd Where</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Recd Locally</span></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let obj of cargoList\">\r\n\t\t\t\t\t\t\t<td class=\"width75\">\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil fa-1x\" (click)=\"populate('E',obj.TBL_INDEXID,obj.CARGOID, obj.GUID, obj.EXPTNO, obj.NOOFPKGS, obj.RECDDATE, obj.RECDTIME, obj.RECDWHERE, obj.RECDLOCAL, obj.RECDLOCALTIME)\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash fa-1x red\" (click)=\"delete()\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDDATE + ' ' + obj.RECDTIME}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDWHERE}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDLOCAL + ' ' + obj.RECDLOCALTIME}}</span></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg right-text\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-sm btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/receipt-cargo.sp.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/receipt-cargo.sp.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>RECEIPT OF CARGO DETAILS</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-error\" style=\"background-color: yellow;\"><b>Note: Locally Recd Date is Mandetory for Carting</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">No Of Pkgs</span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">Recd Date</span></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Recd Where</span></td>\r\n\t\t\t\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">Recd Locally</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NoOfPkgs\" class=\"form-control\" [maxlength]=\"20\" /></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"RecdDate\"></my-date-picker></td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '01'},{VALUE: '02'},{VALUE: '03'},{VALUE: '04'},{VALUE: '05'},{VALUE: '06'},{VALUE: '07'},{VALUE: '08'},{VALUE: '09'},{VALUE: '10'},{VALUE: '11'},{VALUE: '12'},{VALUE: '13'},{VALUE: '14'},{VALUE: '15'},{VALUE: '16'},{VALUE: '17'},{VALUE: '18'},{VALUE: '19'},{VALUE: '20'},{VALUE: '21'},{VALUE: '22'},{VALUE: '23'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdTime\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '15'},{VALUE: '30'},{VALUE: '45'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdMin\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"RecdWhere\" class=\"form-control width150\" [maxlength]=\"20\" /></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"RecdLocal\"></my-date-picker></td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '01'},{VALUE: '02'},{VALUE: '03'},{VALUE: '04'},{VALUE: '05'},{VALUE: '06'},{VALUE: '07'},{VALUE: '08'},{VALUE: '09'},{VALUE: '10'},{VALUE: '11'},{VALUE: '12'},{VALUE: '13'},{VALUE: '14'},{VALUE: '15'},{VALUE: '16'},{VALUE: '17'},{VALUE: '18'},{VALUE: '19'},{VALUE: '20'},{VALUE: '21'},{VALUE: '22'},{VALUE: '23'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdLocalTime\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<ng-select [items]=\"[{VALUE: '00'},{VALUE: '15'},{VALUE: '30'},{VALUE: '45'}]\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"VALUE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"--\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"RecdLocalMin\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control width70\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-success\" name=\"addButton\" (click)=\"addUpdate()\" *ngIf=\"Type == 'A'\"  #addButton><span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i>&nbsp;Add</span></button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" name=\"updateButton\" (click)=\"addUpdate()\" *ngIf=\"Type == 'E'\"  #updateButton><span class=\"col-form-span-label\"><i class=\"fa fa-refresh\"></i>&nbsp;Update</span></button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"reset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-undo\"></i>&nbsp;Reset</span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<div class=\"row yscroll\" style=\"height:100px\">\r\n\t\t\t\t<table class=\"table table-bordered table-striped table-sm-new\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\r\n\t\t\t\t\t\t\t<th class=\"width75\"></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">No Of Pkgs</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Recd Date</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Recd Where</span></th>\r\n\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Recd Locally</span></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let obj of cargoList\">\r\n\t\t\t\t\t\t\t<td class=\"width75\">\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil fa-1x\" (click)=\"populate('E',obj.TBL_INDEXID,obj.CARGOID, obj.GUID, obj.EXPTNO, obj.NOOFPKGS, obj.RECDDATE, obj.RECDTIME, obj.RECDWHERE, obj.RECDLOCAL, obj.RECDLOCALTIME)\"></i>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash fa-1x red\" (click)=\"delete()\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDDATE + ' ' + obj.RECDTIME}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDWHERE}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.RECDLOCAL + ' ' + obj.RECDLOCALTIME}}</span></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg right-text\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/report-container-loading-confirmation.sp.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/report-container-loading-confirmation.sp.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new tablebg\">\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><b>Updated Details</b></span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr *ngIf=\"UpdatedList.length==0\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\">There is No changes in Transhipment vessel and ETA.Other Details updated successfully!</span>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n<table class=\"table table-bordered table-sm-new\" *ngIf=\"UpdatedList.length>0\">\r\n\t<thead>\r\n\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t<th class=\"centerlabel\"  *ngFor=\" let key of keys; let i = index;\"><span class=\"col-form-span-label\">{{key}}</span></th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody class=\"bgwhite\">\r\n\t\t<tr *ngFor=\"let obj of UpdatedList\"> \r\n\t\t\t<ng-container *ngFor=\" let key of keys; let i = index;\">\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj[key]}}</span></td>\r\n\t\t\t</ng-container>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<table class=\"table table-bordered table-sm-new\">\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\" class=\"right-text\">\r\n\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back</u></span></button>\r\n\t\t</td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/scan-docs-sent.sp.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/scan-docs-sent.sp.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>SCAN DOCS SENT DATE</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='Search'\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Container No<span class=\"col-form-span-error\"> *</span></span></td>\r\n\t\t\t\t\t<td class=\"width100\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"ContainerNo\" class=\"form-control width100\" [maxlength]=\"11\"/>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td colspan=\"6\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" name=\"searchButton\" (click)=\"Search()\"><span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>&nbsp;Search</span></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='List'\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Container No</strong></span></td>\r\n\t\t\t\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{ContainerNo}}</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\" *ngIf=\"viewType=='List'\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Sent</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Origin City</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Rotation No.</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Vessel Name</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Voyage No</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">ETD</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">Agent Name</span></th>\r\n\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">SHPG Line</span></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of searchList\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"obj.Sent\" *ngIf=\"obj.SCANDOCS === 'NO'\"/>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\" *ngIf=\"obj.SCANDOCS !== 'NO'\">{{obj.SCANDOCS}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CITYCODE}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_VESSEL}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.VSL_NAME}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.VSL_VOYNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETD}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.AGT_NAME}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.LINER}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"error-text\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" *ngIf=\"getCount() > 0\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"searchList=[];ContainerNo='';viewType='Search';ErrorMessage=''\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'6'\"></app-font-changer> Reset</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/search-carting-sea.sp.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/search-carting-sea.sp.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\t\r\n\t<div class=\"col-sm-3\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\t \r\n\t\t<table class=\"table table-bordered table-sm-new\">\t\t\t\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Name</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t<select class=\"form-control width300\"  [(ngModel)]=\"VslName\" (change)=\"onAgentSelect($event.target.value)\">\r\n\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n                        <option *ngFor=\"let d of vslnameList\" value={{d.RTNOPRT}}>\r\n                            {{d.VSL_NAME}}\r\n                        </option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Agent</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td  >\r\n\t\t\t\t\t<select class=\"form-control width200\"  [(ngModel)]=\"VslAgent\"  >\r\n\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of Agentlist\" value={{d.agt_code}}>{{d.agt_name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\t\t\t\t\r\n\t\t\t\t<td colspan=\"2\" class=\"centerlabel\" >\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"  name=\"btnAgtAdd\" (click)=\"onsearch()\" #searchButton> \r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search\" *ngIf=\"!loading\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\r\n\t\t\t\t\t\t\tSearch \r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</td>\r\n\t\t\t\t\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t\t<div class=\"col-sm-3\">            \r\n\t\t</div>\r\n\t</div>\t\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/shipping-bill.sp.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/shipping-bill.sp.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-shipment-progress-common-view [ExptNo]=\"ExptNo\"></app-shipment-progress-common-view>\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"4\"><span class=\"col-form-span-label\"><b>Shipping Bill Details</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Custom date</span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"CustomDate\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Shipping Bill No.</span></td>\r\n\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"ShipBillNo\" class=\"form-control width150\" [maxlength]=\"20\" /></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Shipping Bill date</span></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ShipBillDate\"></my-date-picker></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"4\"><span class=\"col-form-span-label\"><b>Custom Details</b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Custom Examined on.</span></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ExaminDate\"></my-date-picker></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Objection</span></td>\r\n\t\t\t\t\t<td><input type=\"checkbox\" name=\"Objection\" (checked)=\"Objection == 'Y'\" (change)=\"changeObjection()\" /></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Remark</span></td>\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<textarea rows=\"2\" class=\"form-control\"  maxlength=\"240\" [(ngModel)]=\"Remark\" [disabled]=\"Objection != 'Y'\"></textarea>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"CustomClearanceMsg != ''\">\r\n\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{CustomClearanceMsg}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr style=\"background-color: #f1f1f1c7;\">\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">CC No.</span></td>\r\n\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"CCNo\" class=\"form-control width150\" [maxlength]=\"20\" [disabled]=\"IsCargoRecd == 'NO'\"/></td>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Custom Cleared On.</span></td>\r\n\t\t\t\t\t<td><my-date-picker name=\"mydatepicker\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"CCDate\"  [disabled]=\"IsCargoRecd == 'NO'\"></my-date-picker></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"search();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/sp.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/sp.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/transfer-sea-to-air.sp.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/transfer-sea-to-air.sp.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t<td colspan=\"8\"><span class=\"col-form-span-label\"><b>TRANSFER FROM SEA TO AIR - <u>{{ExptNo}}</u></b></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"width150\"><span class=\"col-form-span-label\">Company Name </span></td>\r\n\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t<ng-select [items]=\"CompanyList\"\r\n\t\t\t\t\t\t\t\t   bindLabel=\"CMP_NAME\"\r\n\t\t\t\t\t\t\t\t   bindValue=\"CMP_CODE\"\r\n\t\t\t\t\t\t\t\t   placeholder=\"-- Select --\"\r\n\t\t\t\t\t\t\t\t   [(ngModel)]=\"Company\"\r\n\t\t\t\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\" *ngIf=\"ErrorMessage != ''\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\">{{ErrorMessage}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"trbg centerlabel\">\r\n\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"submitButton\" class=\"btn btn-l btn-success\" (click)=\"submit();\" [disabled]=\"ErrorMessage != ''\" #submitButton>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'14'\"></app-font-changer> Submit</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"abortButton\" class=\"btn btn-l btn-danger\" (click)=\"abort();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><app-font-changer [fontIndex]=\"'7'\"></app-font-changer> Abort</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/update-container-loading-confirmation.sp.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/update-container-loading-confirmation.sp.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new tablebg\">\r\n\t<tr class=\"trbg\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><b>CONTAINER DETAILS</b></span>\r\n\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Rotation No.</strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-labe l\">{{RotationNo}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Voyage No. </strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{VoyageNo}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Vessel Name </strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselName}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Last Carting Date </strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{LastCartingDate}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETD</strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{ETD}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Act. Sailing Date</strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{ActSailingDate}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Container No. </strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{ContainerNo}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Tot. No. of Pkgs</strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{NoOfPackage}}</span></td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Tot. Volume </strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{TotalVolume}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Agent Name</strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{AgentName}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Destination</strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{Destination}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td  class=\"width150\"rowspan=\"4\" ><span class=\"col-form-span-label\"><strong>Pre-Carriage</strong></span></td>\r\n\t\t<td><select class=\"form-control width100\"  [(ngModel)]=\"precarby\" [disabled]=\"pracarrieagedisable==true\" >\r\n\t\t\t\t<option value=\"TRAIN\">TRAIN</option>\r\n\t\t\t\t<option value=\"TRUCK\">TRUCK</option>\r\n\t\t\t</select></td> \r\n\t\t\t<td  class=\"width150\"  ><span class=\"col-form-span-label\"><strong>Place of Receipt :</strong></span></td>\r\n\t\t\t<td  colspan=\"4\"> \r\n\t\t\t\t\t<ng-select [items]=\"PlcaRecptlist\"\r\n\t\t\t\t\t\t   bindLabel=\"ICD_NAME\"\r\n\t\t\t\t\t\t   bindValue=\"PK_ID\"\r\n\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t   [(ngModel)]=\"PlcRecpt\"\r\n\t\t\t\t\t\t   class=\"form-control width150\"\t\t\t\t\t   \r\n\t\t\t\t\t\t   [disabled]=\"pracarrieagedisable==true\"\r\n\t\t\t\t\t\t   >\r\n\t\t\t\t</ng-select>\r\n\t\t\t</td>\t\r\n\t\t</tr>\t \r\n\t\t<tr>\r\n\t\t\t<td><span class=\"col-form-span-label\"><strong>ETD @ POR :</strong> </span> </td>\r\n\t\t\t<td  colspan=\"5\" >\t\t\t\t \r\n\t\t\t<div class=\"custom-control  custom-control-inline\">\r\n\t\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"EtdPor\" [disabled]=\"pracarrieagedisable==true\"  ></my-date-picker>\r\n\t\t\t\t<span class=\"col-form-span-label\" >dd/mm/yyyy</span>\r\n\t\t\t\t<select class=\"form-control width30\"  [(ngModel)]=\"EtdporHr\"  [disabled]=\"pracarrieagedisable==true\">\r\n\t\t\t\t\t\t<option value=\"TRAIN\">00</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">01</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">02</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">03</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">04</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">05</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">06</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">07</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">08</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">09</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">10</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">11</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">12</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">13</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">14</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">15</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">16</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">17</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">18</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">19</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">20</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">21</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">22</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">23</option>\t\t\t\t\t\t \r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<span class=\"col-form-span-label\" >Hr</span>\r\n\t\t\t\t\t<select class=\"form-control width30\"  [(ngModel)]=\"EtdporMin\" [disabled]=\"pracarrieagedisable==true\" >\r\n\t\t\t\t\t\t<option value=\"TRAIN\">00</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">15</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">30</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">45</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\" >Min</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t\t<td><span class=\"col-form-span-label\"><strong>ETA @ POL :</strong> </span> </td>\r\n\t\t\t\t<td  colspan=\"5\"> \r\n\t\t\t\t<div class=\"custom-control  custom-control-inline\">\r\n\t\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"EtaPol\" [disabled]=\"pracarrieagedisable==true\"  ></my-date-picker>\r\n\t\t\t\t<span class=\"col-form-span-label\" >dd/mm/yyyy</span>\r\n\t\t\t\t<select class=\"form-control width30\"  [(ngModel)]=\"EtaPolHr\" [disabled]=\"pracarrieagedisable==true\" >\r\n\t\t\t\t\t\t<option value=\"TRAIN\">00</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">01</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">02</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">03</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">04</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">05</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">06</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">07</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">08</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">09</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">10</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">11</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">12</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">13</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">14</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">15</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">16</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">17</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">18</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">19</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">20</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">21</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">22</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">23</option>\t\t\t\t\t\t \r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<span class=\"col-form-span-label\" >Hr</span>\r\n\t\t\t\t\t<select class=\"form-control width30\"  [(ngModel)]=\"EtaPolMin\" [disabled]=\"pracarrieagedisable==true\" >\r\n\t\t\t\t\t\t<option value=\"TRAIN\">00</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">15</option>\r\n\t\t\t\t\t\t<option value=\"TRAIN\">30</option>\r\n\t\t\t\t\t\t<option value=\"TRUCK\">45</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\" >Min</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t</td>\r\n\t</tr>\r\n\r\n\t<tr *ngIf=\"MessageLoadNotDone !== ''\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{MessageLoadNotDone}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"5\" style=\"white-space:nowrap;\"><span class=\"col-form-span-label\"><strong>CONTAINER LOADING AT ORIGIN CONFIRMATION DATE</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<span class=\"col-form-span-label\" *ngIf=\"LabelLoadOriginDt !== ''\">{{LabelLoadOriginDt}}</span>\r\n\t\t\t<input type=\"checkbox\" [checked]=\"CheckLoadOriginDt==true\" [(ngModel)]=\"CheckLoadOriginDt\" *ngIf=\"LabelLoadOriginDt==''&&MessageLoadOriginDtMsg==''\">\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr *ngIf=\"MessageLoadOriginDtMsg !== ''\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{MessageLoadOriginDtMsg}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"centerlabel\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><input type=\"radio\" name=\"TransType\" [checked]=\"TransType=='Direct'\" (change)=\"TransType='Direct'\" /> Direct</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\t\t\t<span class=\"col-form-span-label\"><input type=\"radio\" name=\"TransType\" [checked]=\"TransType=='Transhipment'\" (change)=\"TransType='Transhipment'\" /> Transhipment</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Trans. Port 1</strong></span></td>\r\n\t\t<td colspan=\"7\">\r\n\t\t\t<ng-select [items]=\"CityList\"\r\n\t\t\t\t\t   bindLabel=\"CITY_NAME\"\r\n\t\t\t\t\t   bindValue=\"CITY_CODE\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"TransPortOne\"\r\n\t\t\t\t\t   class=\"form-control width200\"\r\n\t\t\t\t\t   (change)=\"changePort(TransPortOne)\"\r\n\t\t\t\t\t   [disabled]=\"TransType=='Direct'\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Connecting Vessel 1</strong></span></td>\r\n\t\t<td colspan=\"7\">\r\n\t\t\t<ng-select [items]=\"ConnVesselListOne\"\r\n\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"ConnVesselOne\"\r\n\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t   (change)=\"callPortEtd(ConnVesselOne)\"\r\n\t\t\t\t\t   [disabled]=\"TransType=='Direct'\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETD (at trans. port 1)</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"EtdPort\" [disabled]=\"disableEtdPort==true\"></my-date-picker>\r\n\t\t</td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETA</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ETA\"></my-date-picker>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"5\" class=\"width150\" style=\"background: #94cae0;\"><span class=\"col-form-span-label\"><strong>ATA (Actual Time of Arrival at trans. port 1)</strong></span></td>\r\n\t\t<td colspan=\"2\" style=\"background: #94cae0;\">\r\n\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ATAPort\"></my-date-picker>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr *ngIf=\"MessageConnLoadNotDone !== ''\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{MessageConnLoadNotDone}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"5\" style=\"white-space:nowrap;\"><span class=\"col-form-span-label\"><strong>CONTAINER LOADING AT TRANSHIPMENT PORT1 CONFIRMATION DATE</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<span class=\"col-form-span-label\" *ngIf=\"LabelLoadOrigin2Dt !==''\">{{LabelLoadOrigin2Dt}}</span>\r\n\t\t\t<input type=\"checkbox\" [checked]=\"LoadOrigin2Dt==true\" [(ngModel)]=\"LoadOrigin2Dt\" *ngIf=\"LabelLoadOrigin2Dt==''&&MessageLoadOrigin2Dt==''\" />\r\n\t\t\t<!-- <input type=\"checkbox\" [checked]=\"CheckLoadOriginDt==true\" [(ngModel)]=\"CheckLoadOriginDt\" *ngIf=\"LabelLoadOriginDt==''&&MessageLoadOriginDtMsg==''\"> -->\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr *ngIf=\"MessageLoadOrigin2Dt !== ''\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{MessageLoadOrigin2Dt}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Trans. Port2</strong></span></td>\r\n\t\t<td colspan=\"7\">\r\n\t\t\t<ng-select [items]=\"CityList\"\r\n\t\t\t\t\t   bindLabel=\"CITY_NAME\"\r\n\t\t\t\t\t   bindValue=\"CITY_CODE\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"TransPortTwo\"\r\n\t\t\t\t\t   class=\"form-control width200\"\r\n\t\t\t\t\t   (change)=\"changePortTwo(TransPortTwo)\"\r\n\t\t\t\t\t   [disabled]=\"(TransType=='Direct'||ConnVesselOne==null)\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Connecting Vessel2</strong></span></td>\r\n\t\t<td colspan=\"7\">\r\n\t\t\t<ng-select [items]=\"ConnVesselListTwo\"\r\n\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"ConnVesselTwo\"\r\n\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t   (change)=\"changePortEtdTwo(ConnVesselTwo)\"\r\n\t\t\t\t\t   [disabled]=\"(TransType=='Direct'||ConnVesselOne==null)\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETD (at trans. port2)</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"EtdPortTwo\" [disabled]=\"disableEtdPortTwo\"></my-date-picker>\r\n\t\t</td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETA</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ETATwo\" [disabled]=\"(TransType=='Direct'||ConnVesselOne==null)\"></my-date-picker>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr *ngIf=\"MessageConnLoadNotDone1 !== ''\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{MessageConnLoadNotDone1}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"5\" style=\"white-space:nowrap;\"><span class=\"col-form-span-label\"><strong>CONTAINER LOADING AT TRANSHIPMENT PORT2 CONFIRMATION DATE</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<span class=\"col-form-span-label\" *ngIf=\"LabelLoadOrigin3Dt!=''\">{{LabelLoadOrigin3Dt}}</span>\r\n\t\t\t<input type=\"checkbox\" [checked]=\"LoadOrigin3Dt==true\" [(ngModel)]=\"LoadOrigin3Dt\"  >\r\n\t\t \r\n\t\t</td>\r\n\t</tr>\r\n\t<tr *ngIf=\"MessageLoadOrigin3Dt !== ''\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{MessageLoadOrigin3Dt}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"4\" rowspan=\"4\" style=\"padding: 20px;\">\r\n\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t<input type=\"checkbox\" [checked]=\"OnwardTrans==true\" [(ngModel)]=\"OnwardTrans\">&nbsp;OWNWARD TRANSPORTATION\r\n\t\t\t</span>\r\n\t\t</td>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>By</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<ng-select [items]=\"[{VALUEFIELD: 'BARGE', TEXTFIELD: 'BARGE'},{VALUEFIELD: 'TRUCK', TEXTFIELD: 'TRUCK'},{VALUEFIELD: 'TRAIN', TEXTFIELD: 'TRAIN'}]\"\r\n\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t   [selectOnTab]=\"true\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"OnwardTransBy\"\r\n\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t   [disabled]=\"OnwardTrans==false\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>From</strong></span></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<ng-select [items]=\"CityList\"\r\n\t\t\t\t\t   bindLabel=\"CITY_NAME\"\r\n\t\t\t\t\t   bindValue=\"CITY_CODE\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"From\"\r\n\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t   [disabled]=\"OnwardTrans==false\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>To</strong></span></td>\r\n\t\t<td colspan=\"3\"><span class=\"col-form-span-label\">{{LabelTo}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><!--<span class=\"col-form-span-label\"><strong>Cost</strong></span>--></td>\r\n\t\t<td colspan=\"3\">\r\n\t\t\t<!--<ng-select [items]=\"[{VALUEFIELD: 'LINER', TEXTFIELD: 'BORNE BY SHPG LINE'},{VALUEFIELD: 'US', TEXTFIELD: 'BORNE BY US'}]\"\r\n\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"Cost\"\r\n\t\t\t\t\t   class=\"form-control\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select>-->\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETA</strong></span></td>\r\n\t\t<td colspan=\"7\">\r\n\t\t\t<my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ETAThree\" [disabled]=\"OnwardTrans==false\"></my-date-picker>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"8\" class=\"centerlabel\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-success\" name=\"updateButton\" (click)=\"Update()\" #updateButton><span class=\"col-form-span-label\"><i class=\"fa fa-refresh\"></i>&nbsp;Update</span></button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-danger\" name=\"abortButton\" (click)=\"Abort()\" #abortButton><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i>&nbsp;Abort</span></button>\r\n\t\t</td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/view-container-loading-confirmation.sp.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/shipment_progress/view-container-loading-confirmation.sp.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new\">\r\n\t<tr class=\"trbg centerlabel\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"col-form-span-label\"><b>VESSEL DETAILS</b></span>\r\n\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n<table class=\"table table-bordered table-sm-new\">\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Rotation No.</strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselDetail?.VSL_RTNO}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Vessel Name </strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselDetail?.VSL_NAME}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Voyage No. </strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselDetail?.VSL_VOYNO}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Last Carting Date </strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselDetail?.CARTING}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETD </strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselDetail?.ETD}}</span></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width150\"><span class=\"col-form-span-label\"><strong>Actual Departure </strong></span></td>\r\n\t\t<td colspan=\"7\"><span class=\"col-form-span-label\">{{VesselDetail?.SAILING}}</span></td>\r\n\t</tr>\r\n</table>\r\n<div class=\"xyscroll\" style=\"height:300px\" *ngIf=\"ContainerList.length > 0\">\r\n\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t<thead>\r\n\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t<th class=\"centerlabel width20\"></th>\r\n\t\t\t\t<ng-container *ngFor=\" let key of keys; let i = index;\">\r\n\t\t\t\t\t<th class=\"centerlabel\" *ngIf=\"i!=0&&i!=1&&i!=2\"><span class=\"col-form-span-label\">{{key}}</span></th>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody class=\"bgwhite\">\r\n\t\t\t<tr *ngFor=\"let obj of ContainerList\">\r\n\t\t\t\t<td class=\"centerlabel width20\"><i class=\"fa fa-edit\" style=\"cursor: pointer;\" (click)=\"edit(obj[keys[0]],obj[keys[1]],obj[keys[2]],obj[keys[3]])\"></i></td>\r\n\t\t\t\t<ng-container *ngFor=\" let key of keys; let i = index;\">\r\n\t\t\t\t\t<td *ngIf=\"i!=0&&i!=1&&i!=2\"><span class=\"col-form-span-label\">{{obj[key]}}</span></td>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n<table class=\"table table-bordered table-sm-new\" *ngIf=\"ErrorMessage !== ''\">\r\n\t<tr class=\"trbg centerlabel\">\r\n\t\t<td colspan=\"8\">\r\n\t\t\t<span class=\"error-text\">{{ErrorMessage}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./src/app/export/shipment_progress/carting-sea.sp.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/export/shipment_progress/carting-sea.sp.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchCartingSea, ListCartingSea, manageCartingSea, CartingSea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCartingSea", function() { return SearchCartingSea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCartingSea", function() { return ListCartingSea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageCartingSea", function() { return manageCartingSea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartingSea", function() { return CartingSea; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
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







var SearchCartingSea = /** @class */ (function () {
    function SearchCartingSea(_router, _dataService, _toasterService, _loginService, _cartingVslAgnt, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._cartingVslAgnt = _cartingVslAgnt;
        this.loaderService = loaderService;
        this.baseUrl = 'Export/Carting_vsl_agent_populate';
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vslnameList = [];
        this.vslAgentlist = [];
        this.Agentlist = [];
        this.VslPortlist = [];
        this.Vslrotation = [];
        this.VslName = "";
        this.VslAgent = "";
        this.VslPort = [];
        this.CartingList = [];
        this.Agtcode = "";
        this.headerType = 'SHIPMENT PROGRESS - CARTING SEA SEARCH';
    }
    SearchCartingSea.prototype.ngOnChanges = function () {
    };
    SearchCartingSea.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        //userrights add mode
        this._loginService.verifyRights(277, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var jsonExport = { CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.getData(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vslnameList = data.Table;
                _this.vslAgentlist = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    SearchCartingSea.prototype.onAgentSelect = function (RtNo) {
        var _this = this;
        var port = [];
        this.VslPortlist = this.vslnameList.filter(function (linerlist) { return linerlist.RTNOPRT == RtNo; }); // this.vslnameList[0].VSL_PORT;  
        port = this.VslPortlist[0].RTNOPRT;
        this.VslPort = port.split("|")[1];
        this.Vslrotation = port.split("|")[0];
        this.Agentlist = [];
        this.Agentlist = this.vslAgentlist.filter(function (linerlist) { return linerlist.vsl_rtno == _this.Vslrotation; });
    };
    SearchCartingSea.prototype.onsearch = function () {
        var _this = this;
        this.loading = true;
        if (this.Vslrotation == "") {
            this._toasterService.toast('warning', 'warning', "Please select vessel first");
            return false;
        }
        var jsonExport = {
            vsl_rtno: this.Vslrotation,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            port: this.VslPort
        };
        this._dataService.getData('Export/Carting_SearchList_populate', jsonExport)
            .subscribe(function (data) {
            _this.loading = false;
            if (data.Table[0].STATUS == 100) {
                if (data.Table1.length > 0) {
                    _this._cartingVslAgnt.VslAgntsharedData = _this.VslAgent;
                    _this.search.emit(data);
                    _this.CartingList = data;
                }
                else {
                    _this._toasterService.toast('error', 'Alert', 'No Record Found!');
                }
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].statusText);
            }
        });
    };
    SearchCartingSea.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["cartingVslAgnt"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchCartingSea.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchCartingSea.prototype, "searchtype", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchCartingSea.prototype, "search", void 0);
    SearchCartingSea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-carting-sea',
            template: __webpack_require__(/*! raw-loader!./search-carting-sea.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/search-carting-sea.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["cartingVslAgnt"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], SearchCartingSea);
    return SearchCartingSea;
}());

var ListCartingSea = /** @class */ (function () {
    function ListCartingSea(_router, _dataService, _toasterService, _loginService, _cartingVslAgnt) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._cartingVslAgnt = _cartingVslAgnt;
        this.CartingList = [];
        this.SearchHead = [];
        this.MangeList = [];
        this.searlist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttondis = false;
        this.headerType = 'SHIPMENT PROGRESS - LIST JOB FOR CARTING';
        this.cartingjob = "";
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
    ListCartingSea.prototype.ngOnChanges = function () {
        for (var _i = 0, _a = this.CartingList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj["CARTEDON"] = (obj["CARTEDON"] != "") ? this._dataService.stringdttoArry(obj["CARTEDON"]) : null;
        }
    };
    ListCartingSea.prototype.ngOnInit = function () {
    };
    ListCartingSea.prototype.OnCartSave = function () {
        var _this = this;
        this.cartingjob = [];
        for (var _i = 0, _a = this.CartingList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.SELEJOB == 1 || obj.SELEJOB == true) {
                if (obj.NOOFPKG > obj.RCVDPKGS) {
                    this._toasterService.toast('error', 'Error', "Total No.of packages are more than the no.of packages received.");
                    return false;
                }
                this.cartingjob = this.cartingjob + obj.EXPTNO + ',' + obj.CARTEDON.formatted + ',' + obj.NOOFPKG + ',' + obj.REMARK + ',' + obj.CARTID + ';';
            }
        }
        if (this.cartingjob == "") {
            this._toasterService.toast('error', 'Error', "Please select atleast one job for carting");
            return false;
        }
        var jsonExport = {
            exptstr: this.cartingjob,
            vsl_rtno: this.SearchHead[0].vsl_rtno,
            vslagent: this._cartingVslAgnt.VslAgntsharedData,
            port: this.SearchHead[0].port,
            cmpid: this._loginService.getLogin()[0].CMPID,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmpcode: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.Common('Export/Carting_Sea_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this._toasterService.toast('info', 'Complete', "Carting Saved Successfully");
                _this.searlist.emit("Search");
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].statusText);
            }
        });
    };
    ListCartingSea.prototype.vslidaionPkgs = function (RCVDPKGS, noofpkgs) {
        if (noofpkgs > RCVDPKGS) {
            this._toasterService.toast('error', 'Error', "Total No.of packages are more than the no.of packages received.");
            this.buttondis = true;
        }
        else {
            this.buttondis = false;
        }
    };
    ListCartingSea.prototype.OnDelete = function (containerno, cartid) {
        var _this = this;
        var listcart = [];
        if (containerno == null) {
            listcart = this.CartingList.filter(function (linerlist) { return linerlist.CARTID == cartid; });
            var jsonExport = {
                cartid: cartid,
                exptno: listcart[0].EXPTNO,
                cmpid: this._loginService.getLogin()[0].CMPID,
                citycode: this._loginService.getLogin()[0].CITYCODE,
                cmpcode: this._loginService.getLogin()[0].CMPCODE
            };
            this._dataService.Common('Export/Carting_Sea_DELETE', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this._toasterService.toast('info', 'Complete', "Carting delete Successfully");
                    listcart[0].CARTEDON = "";
                    listcart[0].NOOFPKG = "";
                    listcart[0].REMARK = "";
                }
                else {
                    _this._toasterService.toast('error', 'Error', data.Table[0].statusText);
                }
            });
        }
        else {
            this._toasterService.toast('error', 'Error', "Can not delete the cargo as it is already containerised ");
            return false;
        }
    };
    ListCartingSea.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["cartingVslAgnt"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListCartingSea.prototype, "CartingList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListCartingSea.prototype, "SearchHead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListCartingSea.prototype, "MangeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListCartingSea.prototype, "searlist", void 0);
    ListCartingSea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-carting-sea',
            template: __webpack_require__(/*! raw-loader!./List-carting-sea.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/List-carting-sea.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["cartingVslAgnt"]])
    ], ListCartingSea);
    return ListCartingSea;
}());

var manageCartingSea = /** @class */ (function () {
    function manageCartingSea(_router, _dataService, _toasterService, _loginService, _cartingVslAgnt) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._cartingVslAgnt = _cartingVslAgnt;
        this.manageList = [];
        this.vslnameList = [];
        this.Agentlist = [];
        this.VslName = '';
        this.VslAgent = '';
    }
    manageCartingSea.prototype.ngOnChanges = function () {
    };
    manageCartingSea.prototype.ngOnInit = function () {
    };
    manageCartingSea.prototype.deletecarting = function () { };
    manageCartingSea.prototype.trfVessel = function () { };
    manageCartingSea.prototype.onAgentSelect = function (event) {
    };
    manageCartingSea.prototype.onsearch = function () { };
    manageCartingSea.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["cartingVslAgnt"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], manageCartingSea.prototype, "manageList", void 0);
    manageCartingSea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-carting-sea',
            template: __webpack_require__(/*! raw-loader!./manage-carting-sea.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/manage-carting-sea.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["cartingVslAgnt"]])
    ], manageCartingSea);
    return manageCartingSea;
}());

var CartingSea = /** @class */ (function () {
    function CartingSea(_router, _dataService, _toasterService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._viewType = "Search"; // "Search";
        this.searchList = [];
        this.header = [];
        this.managecartid = [];
    }
    CartingSea.prototype.ngOnChanges = function () {
    };
    CartingSea.prototype.ngOnInit = function () {
    };
    CartingSea.prototype.SearchData = function (data) {
        this.header = data.Table;
        this.searchList = data.Table1;
        this._viewType = "List";
    };
    CartingSea.prototype.onlist = function (data) {
        this._viewType = "data";
    };
    CartingSea.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    CartingSea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./carting-sea.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/carting-sea.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], CartingSea);
    return CartingSea;
}());



/***/ }),

/***/ "./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TransfervslCartingSea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfervslCartingSea", function() { return TransfervslCartingSea; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransfervslCartingSea = /** @class */ (function () {
    function TransfervslCartingSea(_router, _dataService, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.baseUrl = 'Export/Carting_vsl_agent_populate';
        this.vslnameList = [];
        this.vslAgentlist = [];
        this.Agentlist = [];
        this.VslPortlist = [];
        this.VslName = "";
        this.VslAgent = "";
        this.VslPort = [];
        this.Vslrotation = [];
        this.Exptno = [];
        this.Agtcode = "";
        this.headerType = 'SHIPMENT PROGRESS - JOB VESSEL TRANSFER';
    }
    TransfervslCartingSea.prototype.ngOnChanges = function () {
    };
    TransfervslCartingSea.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        //userrights add mode
        this._loginService.verifyRights(277, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var jsonExport = { CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.getData(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vslnameList = data.Table;
                _this.vslAgentlist = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].statusText);
                _this.loaderService.display(false);
            }
        });
    };
    TransfervslCartingSea.prototype.onAgentSelect = function (RtNo) {
        var _this = this;
        var port = [];
        this.VslPortlist = this.vslnameList.filter(function (linerlist) { return linerlist.RTNOPRT == RtNo; }); // this.vslnameList[0].VSL_PORT;
        port = this.VslPortlist[0].RTNOPRT;
        this.VslPort = port.split("|")[1];
        this.Vslrotation = port.split("|")[0];
        this.Agentlist = this.vslAgentlist.filter(function (linerlistnew) { return linerlistnew.vsl_rtno == _this.Vslrotation; });
    };
    TransfervslCartingSea.prototype.onTransfervsl = function () {
        var _this = this;
        //VSL_PORT
        if (this.VslName == "") {
            this._toasterService.toast('warning', 'warning', "Please select vessel first");
            return false;
        }
        if (this.Exptno == "") {
            this._toasterService.toast('warning', 'warning', "Please enter ex-Jobno");
            return false;
        }
        var listcart = [];
        listcart = this.vslnameList.filter(function (linerlist) { return linerlist.RTNOPRT == _this.VslName; });
        this.VslPort = this.VslPortlist[0].RTNOPRT;
        this.VslPort = this.VslPort.split("|");
        this.VslPort[0];
        var jsonExport = { vsl_rtno: this.VslPort[0], vslagent: this.VslAgent, port: this.VslPort[1], exptno: this.Exptno, citycode: this._loginService.getLogin()[0].CITYCODE, cmpcode: this._loginService.getLogin()[0].CMPCODE, cmpid: this._loginService.getLogin()[0].CMPID };
        this._dataService.Common('Export/Carting_Sea_VslTransfer', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
            }
        });
    };
    TransfervslCartingSea.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    TransfervslCartingSea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-carting-sea',
            template: __webpack_require__(/*! raw-loader!./carting-transfer-vessel.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], TransfervslCartingSea);
    return TransfervslCartingSea;
}());



/***/ }),

/***/ "./src/app/export/shipment_progress/expt-shipment-process.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/export/shipment_progress/expt-shipment-process.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExportshipmentprocessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportshipmentprocessModule", function() { return ExportshipmentprocessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _expt_shipment_process_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expt-shipment-process.routing */ "./src/app/export/shipment_progress/expt-shipment-process.routing.ts");
/* harmony import */ var _sp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sp.component */ "./src/app/export/shipment_progress/sp.component.ts");
/* harmony import */ var _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carting-sea.sp.component */ "./src/app/export/shipment_progress/carting-sea.sp.component.ts");
/* harmony import */ var _carting_transfer_vessel_sp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carting-transfer-vessel.sp.component */ "./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.ts");
/* harmony import */ var _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../shared/common-font-changer.directive */ "./src/app/shared/common-font-changer.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ExportshipmentprocessModule = /** @class */ (function () {
    function ExportshipmentprocessModule() {
    }
    ExportshipmentprocessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_expt_shipment_process_routing__WEBPACK_IMPORTED_MODULE_8__["ExportshipmentprocessRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_sp_component__WEBPACK_IMPORTED_MODULE_9__["ShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["CommonSearchShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["ShippingBillShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptCargoShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["ApprovalReceivedShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["MeasurementShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["OutOfChargeShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["BlDetailsShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["CartingAirShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["PrealertSentOnShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["DestinationDocumentShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["SeaToAirShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptCargoProvisionShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["ScanDocSentShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["PendingShipmentShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["ContainerLoadingShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["PrepaidfrtApprovShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["dimensionShipmentProgressComponent"],
                _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_10__["SearchCartingSea"], _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_10__["CartingSea"], _carting_transfer_vessel_sp_component__WEBPACK_IMPORTED_MODULE_11__["TransfervslCartingSea"], _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_10__["ListCartingSea"], _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_10__["manageCartingSea"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["PendingShipReportShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["UpdateContainerLoadingShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["ReportContainerLoadingShipmentProgressComponent"],
                _sp_component__WEBPACK_IMPORTED_MODULE_9__["CommonViewShipmentProgressComponent"], _sp_component__WEBPACK_IMPORTED_MODULE_9__["ViewContainerLoadingShipmentProgressComponent"], _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_12__["FontChangerComponent"]],
            providers: [_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_12__["ButtonService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportshipmentprocessModule);
    return ExportshipmentprocessModule;
}());



/***/ }),

/***/ "./src/app/export/shipment_progress/expt-shipment-process.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/export/shipment_progress/expt-shipment-process.routing.ts ***!
  \***************************************************************************/
/*! exports provided: ExportshipmentprocessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportshipmentprocessRoutingModule", function() { return ExportshipmentprocessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sp.component */ "./src/app/export/shipment_progress/sp.component.ts");
/* harmony import */ var _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carting-sea.sp.component */ "./src/app/export/shipment_progress/carting-sea.sp.component.ts");
/* harmony import */ var _carting_transfer_vessel_sp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carting-transfer-vessel.sp.component */ "./src/app/export/shipment_progress/carting-transfer-vessel.sp.component.ts");
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
            title: 'shipment-process'
        },
        children: [
            { path: 'ship-bill-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'receipt-cargo-with-job-no-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'dimension-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'approval-received-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'carting-sea-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'carting-air-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'destination-document-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'measurement-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'out-of-charge-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'prealert-sent-on-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'bl-details-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'bhel-details-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'transfer-sea-to-air-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'ship-bill/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["ShippingBillShipmentProgressComponent"], data: { title: 'Shipment-Progress / Shipping Bill Update' } },
            { path: 'reciept-of-cargo/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptCargoShipmentProgressComponent"], data: { title: 'Shipment-Progress / Receipt Cargo Update' } },
            { path: 'approval-received/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["ApprovalReceivedShipmentProgressComponent"], data: { title: 'Shipment-Progress / Approval Received Update' } },
            { path: 'measurement/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["MeasurementShipmentProgressComponent"], data: { title: 'Shipment-Progress / Approval Received Update' } },
            { path: 'out-of-charge/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["OutOfChargeShipmentProgressComponent"], data: { title: 'Shipment-Progress / Out of Charge Update' } },
            { path: 'bl-details/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["BlDetailsShipmentProgressComponent"], data: { title: 'Shipment-Progress / BL Details Update' } },
            { path: 'carting-air/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CartingAirShipmentProgressComponent"], data: { title: 'Shipment-Progress / Carting Air Update' } },
            { path: 'prealert-sent-on/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["PrealertSentOnShipmentProgressComponent"], data: { title: 'Shipment-Progress / Prealert Sent On Update' } },
            { path: 'destination-document/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["DestinationDocumentShipmentProgressComponent"], data: { title: 'Shipment-Progress / Destination Document' } },
            { path: 'transfer-sea-to-air/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["SeaToAirShipmentProgressComponent"], data: { title: 'Shipment-Progress / Transfer Sea To Air' } },
            { path: 'reciept-cargo-provision', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptCargoProvisionShipmentProgressComponent"], data: { title: 'Shipment-Progress / Receipt Cargo' } },
            { path: 'scan-doc-sent', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["ScanDocSentShipmentProgressComponent"], data: { title: 'Shipment-Progress / Scan Docs Sent Date' } },
            { path: 'pending-shipment', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["PendingShipmentShipmentProgressComponent"], data: { title: 'Shipment-Progress / Pending Shipment' } },
            { path: 'container-loading-confirmation', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["ContainerLoadingShipmentProgressComponent"], data: { title: 'Shipment-Progress / Container Loading Confirmation' } },
            { path: 'carting-sea', component: _carting_sea_sp_component__WEBPACK_IMPORTED_MODULE_3__["CartingSea"], data: { title: 'shipment-progress/carting-sea' } },
            { path: 'vesselTransfer', component: _carting_transfer_vessel_sp_component__WEBPACK_IMPORTED_MODULE_4__["TransfervslCartingSea"], data: { title: 'shipment-progress/vesselTransfer' } },
            { path: 'Prepaid-freight-apprvd-search', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["CommonSearchShipmentProgressComponent"], data: { title: 'Shipment-Progress / Search' } },
            { path: 'Prepaid-freight-apprvd/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["PrepaidfrtApprovShipmentProgressComponent"], data: { title: 'Shipment-Progress / Prepaid Approved by Shipper' } },
            { path: 'Dimension/:exptno', component: _sp_component__WEBPACK_IMPORTED_MODULE_2__["dimensionShipmentProgressComponent"], data: { title: 'Shipment-Progress / Calculate CBM' } },
        ]
    }
];
var ExportshipmentprocessRoutingModule = /** @class */ (function () {
    function ExportshipmentprocessRoutingModule() {
    }
    ExportshipmentprocessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportshipmentprocessRoutingModule);
    return ExportshipmentprocessRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/shipment_progress/sp.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/export/shipment_progress/sp.component.ts ***!
  \**********************************************************/
/*! exports provided: CommonSearchShipmentProgressComponent, CommonViewShipmentProgressComponent, ShipmentProgressComponent, ShippingBillShipmentProgressComponent, ReceiptCargoShipmentProgressComponent, ApprovalReceivedShipmentProgressComponent, MeasurementShipmentProgressComponent, OutOfChargeShipmentProgressComponent, BlDetailsShipmentProgressComponent, CartingAirShipmentProgressComponent, PrealertSentOnShipmentProgressComponent, DestinationDocumentShipmentProgressComponent, SeaToAirShipmentProgressComponent, ReceiptCargoProvisionShipmentProgressComponent, ScanDocSentShipmentProgressComponent, PendingShipmentShipmentProgressComponent, PendingShipReportShipmentProgressComponent, ContainerLoadingShipmentProgressComponent, ViewContainerLoadingShipmentProgressComponent, UpdateContainerLoadingShipmentProgressComponent, ReportContainerLoadingShipmentProgressComponent, PrepaidfrtApprovShipmentProgressComponent, dimensionShipmentProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSearchShipmentProgressComponent", function() { return CommonSearchShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonViewShipmentProgressComponent", function() { return CommonViewShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentProgressComponent", function() { return ShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingBillShipmentProgressComponent", function() { return ShippingBillShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptCargoShipmentProgressComponent", function() { return ReceiptCargoShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalReceivedShipmentProgressComponent", function() { return ApprovalReceivedShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementShipmentProgressComponent", function() { return MeasurementShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOfChargeShipmentProgressComponent", function() { return OutOfChargeShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlDetailsShipmentProgressComponent", function() { return BlDetailsShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartingAirShipmentProgressComponent", function() { return CartingAirShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrealertSentOnShipmentProgressComponent", function() { return PrealertSentOnShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationDocumentShipmentProgressComponent", function() { return DestinationDocumentShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaToAirShipmentProgressComponent", function() { return SeaToAirShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptCargoProvisionShipmentProgressComponent", function() { return ReceiptCargoProvisionShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanDocSentShipmentProgressComponent", function() { return ScanDocSentShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingShipmentShipmentProgressComponent", function() { return PendingShipmentShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingShipReportShipmentProgressComponent", function() { return PendingShipReportShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerLoadingShipmentProgressComponent", function() { return ContainerLoadingShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContainerLoadingShipmentProgressComponent", function() { return ViewContainerLoadingShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContainerLoadingShipmentProgressComponent", function() { return UpdateContainerLoadingShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportContainerLoadingShipmentProgressComponent", function() { return ReportContainerLoadingShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepaidfrtApprovShipmentProgressComponent", function() { return PrepaidfrtApprovShipmentProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionShipmentProgressComponent", function() { return dimensionShipmentProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common-font-changer.directive */ "./src/app/shared/common-font-changer.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonSearchShipmentProgressComponent = /** @class */ (function () {
    function CommonSearchShipmentProgressComponent(_router, _dataService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this.headerType = '';
        this.viewHeaderTypeList = [
            { id: 1, headertype: 'SHIPMENT PROGRESS - SHIPPING BILL DETAILS SEARCH', valuetype: 'SHIPPING_BILL_DETAILS' },
            { id: 2, headertype: 'SHIPMENT PROGRESS - RECEIPT OF CARGO SEARCH', valuetype: 'RECEIPT_OF_CARGO' },
            { id: 3, headertype: 'SHIPMENT PROGRESS - DIMENSION SEARCH', valuetype: 'DIMENSSION' },
            { id: 4, headertype: 'SHIPMENT PROGRESS - APPROVAL RECEIVED SEARCH', valuetype: 'APPROVAL_RECEIVED' },
            { id: 5, headertype: 'SHIPMENT PROGRESS - CARTING SEA SEARCH', valuetype: 'CARTING_SEA' },
            { id: 6, headertype: 'SHIPMENT PROGRESS - CARTING AIR SEARCH', valuetype: 'CARTING_AIR' },
            { id: 7, headertype: 'SHIPMENT PROGRESS - DESTINATION DOCUMENTS SEARCH', valuetype: 'DESTINATION_DOCUMENTS' },
            { id: 8, headertype: 'SHIPMENT PROGRESS - MEASUREMENT SEARCH', valuetype: 'MEASUREMENT' },
            { id: 9, headertype: 'SHIPMENT PROGRESS - OUT OF CHARGE SEARCH', valuetype: 'OUT_OF_CHARGE' },
            { id: 10, headertype: 'SHIPMENT PROGRESS - PREALERT SENT ON SEARCH', valuetype: 'PREALERT_SENT_ON' },
            { id: 11, headertype: 'SHIPMENT PROGRESS - BL DETAILS SEARCH', valuetype: 'BL_DETAILS' },
            { id: 12, headertype: 'SHIPMENT PROGRESS - BHEL DETAILS SEARCH', valuetype: 'BHEL_DETAILS' },
            { id: 13, headertype: 'SHIPMENT PROGRESS - TRANSFER SEA TO AIR SEARCH', valuetype: 'SEA_TO_AIR' },
            { id: 14, headertype: 'SHIPMENT PROGRESS - PREPAID FREIGHT APPROVED BY SHIPPER', valuetype: 'PRPFRT_APPROV' },
        ];
        this.viewIdType = '';
        this.rights = null;
        this.searchList = [];
        this.searchListLength = 0;
        this.checkType = 'EXPORT_NO';
        this.SearchValue = '';
        this.ErrorMessage = '';
    }
    CommonSearchShipmentProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.disableButton.changeFontwithDisableButton(1, this.searchButton);
        var curUrl = this._router.url;
        if (curUrl.match('ship-bill-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 1; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 1; }).headertype;
            this.rights = 220;
        }
        else if (curUrl.match('receipt-cargo-with-job-no') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 2; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 2; }).headertype;
            this.rights = 217;
        }
        else if (curUrl.match('dimension-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 3; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 3; }).headertype;
            this.rights = 265;
        }
        else if (curUrl.match('approval-received-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 4; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 4; }).headertype;
            this.rights = 221;
        }
        else if (curUrl.match('carting-air-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 6; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 6; }).headertype;
            this.rights = 225;
        }
        else if (curUrl.match('destination-document-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 7; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 7; }).headertype;
            this.rights = 227;
        }
        else if (curUrl.match('measurement-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 8; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 8; }).headertype;
            this.rights = 222;
        }
        else if (curUrl.match('out-of-charge-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 9; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 9; }).headertype;
            this.rights = 223;
        }
        else if (curUrl.match('prealert-sent-on-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 10; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 10; }).headertype;
            this.rights = 226;
        }
        else if (curUrl.match('bl-details-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 11; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 11; }).headertype;
            this.rights = 224;
        }
        else if (curUrl.match('transfer-sea-to-air-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 13; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 13; }).headertype;
            this.rights = 229;
        }
        else if (curUrl.match('Prepaid-freight-apprvd-search') != null) {
            this.viewIdType = this.viewHeaderTypeList.find(function (item) { return item.id === 14; }).id;
            this.headerType = this.viewHeaderTypeList.find(function (item) { return item.id === 14; }).headertype;
            this.rights = 406;
        }
        this._loginService.verifyRights(this.rights, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data); //For verify user access
        });
    };
    CommonSearchShipmentProgressComponent.prototype.changeType = function (event) {
        this.checkType = event;
    };
    CommonSearchShipmentProgressComponent.prototype.search = function () {
        var _this = this;
        if (this.SearchValue == '') {
            if (this.checkType == 'EXPORT_NO') {
                this.ErrorMessage = "Please enter Export No";
                return false;
            }
            else if (this.checkType == 'ORDER_NO') {
                this.ErrorMessage = "Please enter Order No";
                return false;
            }
            else if (this.checkType == 'REF_NO') {
                this.ErrorMessage = "Please enter Ref. No";
                return false;
            }
        }
        else {
            this.ErrorMessage = "";
        }
        this.getSearchData(this.viewHeaderTypeList.find(function (item) { return item.id === _this.viewIdType; }).valuetype, this.checkType, this.SearchValue);
    };
    // ngAfterViewInit() {
    //   this.disableButton.changeFontwithDisableButton(1, this.searchButton);//this.searchButton            
    //   }
    CommonSearchShipmentProgressComponent.prototype.getSearchData = function (formType, searchType, valueType) {
        var _this = this;
        this.disableButton.changeFontwithDisableButton(1, this.searchButton);
        var _jsonData = {
            Type1: formType,
            Type2: searchType,
            Type3: valueType,
            Type4: this._loginService.getLogin()[0].CITYCODE,
            Type5: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/ShipmentCommonSearch", _jsonData)
            .subscribe(function (data) {
            _this.searchList = data.Table;
            _this.searchListLength = (data.Table.length == 0) ? 1 : -1;
            _this.disableButton.changeFontwithEnableButton(0, _this.searchButton);
        });
    };
    CommonSearchShipmentProgressComponent.prototype.rowClick = function (exptno) {
        var curUrl = this._router.url;
        if (curUrl.match('ship-bill-search') != null) {
            this._router.navigate(['export/shipment-progress/ship-bill/' + exptno]);
        }
        else if (curUrl.match('receipt-cargo-with-job-no') != null) {
            this._router.navigate(['export/shipment-progress/reciept-of-cargo/' + exptno]);
        }
        else if (curUrl.match('dimension-search') != null) {
            this._router.navigate(['export/shipment-progress/Dimension/' + exptno]);
        }
        else if (curUrl.match('approval-received-search') != null) {
            this._router.navigate(['export/shipment-progress/approval-received/' + exptno]);
        }
        else if (curUrl.match('carting-air-search') != null) {
            this._router.navigate(['export/shipment-progress/carting-air/' + exptno]);
        }
        else if (curUrl.match('destination-document-search') != null) {
            this._router.navigate(['export/shipment-progress/destination-document/' + exptno]);
        }
        else if (curUrl.match('measurement-search') != null) {
            this._router.navigate(['export/shipment-progress/measurement/' + exptno]);
        }
        else if (curUrl.match('out-of-charge-search') != null) {
            this._router.navigate(['export/shipment-progress/out-of-charge/' + exptno]);
        }
        else if (curUrl.match('prealert-sent-on-search') != null) {
            this._router.navigate(['export/shipment-progress/prealert-sent-on/' + exptno]);
        }
        else if (curUrl.match('bl-details-search') != null) {
            this._router.navigate(['export/shipment-progress/bl-details/' + exptno]);
        }
        else if (curUrl.match('transfer-sea-to-air-search') != null) {
            this._router.navigate(['export/shipment-progress/transfer-sea-to-air/' + exptno]);
        }
        else if (curUrl.match('Prepaid-freight-apprvd-search') != null) {
            this._router.navigate(['export/shipment-progress/Prepaid-freight-apprvd/' + exptno]);
        }
    };
    CommonSearchShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CommonSearchShipmentProgressComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], CommonSearchShipmentProgressComponent.prototype, "disableButton", void 0);
    CommonSearchShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./common.search.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/common.search.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], CommonSearchShipmentProgressComponent);
    return CommonSearchShipmentProgressComponent;
}());

var CommonViewShipmentProgressComponent = /** @class */ (function () {
    function CommonViewShipmentProgressComponent(_router, _dataService, _loginService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this.viewDataTable = [];
        this.viewDataTable1 = [];
        this.ExptNo = this.ExptNo;
    }
    CommonViewShipmentProgressComponent.prototype.ngOnInit = function () { };
    CommonViewShipmentProgressComponent.prototype.ngOnChanges = function () { this.getData(this.ExptNo); };
    CommonViewShipmentProgressComponent.prototype.getData = function (exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: exptNo
        };
        this._dataService.getData("Export/ShipmentCommonView", _jsonData)
            .subscribe(function (data) {
            _this.viewDataTable = data.Table[0];
            _this.viewDataTable1 = data.Table1[0];
        });
    };
    CommonViewShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonViewShipmentProgressComponent.prototype, "ExptNo", void 0);
    CommonViewShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-common-view',
            template: __webpack_require__(/*! raw-loader!./common.view.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/common.view.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], CommonViewShipmentProgressComponent);
    return CommonViewShipmentProgressComponent;
}());

var ShipmentProgressComponent = /** @class */ (function () {
    function ShipmentProgressComponent() {
    }
    ShipmentProgressComponent.prototype.ngOnInit = function () { };
    ShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/sp.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ShipmentProgressComponent);
    return ShipmentProgressComponent;
}());

var ShippingBillShipmentProgressComponent = /** @class */ (function () {
    function ShippingBillShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.IsCargoRecd = '';
        this.CustomDate = null;
        this.ShipBillNo = '';
        this.ShipBillDate = null;
        this.ExaminDate = null;
        this.Objection = '';
        this.Remark = '';
        this.CustomClearanceMsg = '';
        this.CCNo = '';
        this.CCDate = null;
        this.popData = [];
        this.PkId = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    ShippingBillShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('SHIPPING_BILL_DETAILS', this.ExptNo);
    };
    ShippingBillShipmentProgressComponent.prototype.ngOnChanges = function () { };
    ShippingBillShipmentProgressComponent.prototype.changeObjection = function () {
        this.Objection = (this.Objection == 'Y') ? '' : 'Y';
        this.Remark = '';
    };
    ShippingBillShipmentProgressComponent.prototype.search = function () { };
    ShippingBillShipmentProgressComponent.prototype.submit = function () {
        if (this.validation() == false) {
            return false;
        }
        this.saveData(this.PkId, this.ExptNo, (this.CustomDate != null) ? this.CustomDate.formatted : '', this.ShipBillNo, (this.ShipBillDate != null) ? this.ShipBillDate.formatted : '', (this.ExaminDate != null) ? this.ExaminDate.formatted : '', (this.Objection == 'Y') ? this.Objection : '', (this.Objection == 'Y') ? this.Remark : '', this.CCNo, (this.CCDate != null) ? this.CCDate.formatted : '');
    };
    ShippingBillShipmentProgressComponent.prototype.validation = function () {
        var CustomDate = (this.CustomDate != null) ? this.CustomDate.formatted : null;
        var ShipBillDate = (this.ShipBillDate != null) ? this.ShipBillDate.formatted : null;
        var ExaminDate = (this.ExaminDate != null) ? this.ExaminDate.formatted : null;
        var CCDate = (this.CCDate != null) ? this.CCDate.formatted : null;
        if (CustomDate != null && ShipBillDate != null) {
            if (this._dataService.date2Comparison(CustomDate, ShipBillDate) == false) {
                this._toasterService.toast('error', 'Error', 'Shippling bill date cant be less than shipping bill present date to custom');
                return false;
            }
        }
        if (CustomDate != null && ExaminDate != null) {
            if (this._dataService.date2Comparison(CustomDate, ExaminDate) == false) {
                this._toasterService.toast('error', 'Error', 'Custom Examined date cant be less than shipping bill present date to custom');
                return false;
            }
        }
        if (ShipBillDate != null && ExaminDate != null) {
            if (this._dataService.date2Comparison(ShipBillDate, ExaminDate) == false) {
                this._toasterService.toast('error', 'Error', 'Custom Examined date cant be less than Shipping Bill date');
                return false;
            }
        }
        if (ExaminDate != null && CCDate != null) {
            if (this._dataService.date2Comparison(CustomDate, CCDate) == false) {
                this._toasterService.toast('error', 'Error', 'Custom Cleared date cant be less than Custom Examined date');
                return false;
            }
        }
        if (ShipBillDate != null && CCDate != null) {
            if (this._dataService.date2Comparison(CustomDate, CCDate) == false) {
                this._toasterService.toast('error', 'Error', 'Custom Cleared date cant be less than Shipping Bill date');
                return false;
            }
        }
        if (CustomDate != null && CCDate != null) {
            if (this._dataService.date2Comparison(CustomDate, CCDate) == false) {
                this._toasterService.toast('error', 'Error', 'Custom Cleared date cant be less than Custom Date');
            }
        }
        return true;
    };
    ShippingBillShipmentProgressComponent.prototype.saveData = function (PkId, ExptNo, CustomDate, ShipBillNo, ShipBillDate, ExaminDate, Objection, Remark, CCNo, CCDate) {
        var _this = this;
        var _jsonData = {
            PkId: PkId,
            ExptNo: ExptNo,
            CustomDate: CustomDate,
            ShipBillNo: ShipBillNo,
            ShipBillDate: ShipBillDate,
            ExaminDate: ExaminDate,
            Objection: Objection,
            Remark: Remark,
            CCNo: CCNo,
            CCDate: CCDate,
            CmpId: this._loginService.getLogin()[0].CMPID,
            MakerIp: this._loginService.getLogin()[0].MAKERIP //change by ip
        };
        this._dataService.Common("Export/ShippingBillShipmentProgressUpdate", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS != undefined) {
                alert("Shipping Bill Details updated successfully!");
                _this._router.navigate(['export/shipment-progress/ship-bill-search']);
            }
        });
    };
    ShippingBillShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: "",
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            if (data.Table != undefined) {
                _this.popData = data.Table;
                _this.PkId = _this.popData[0].ID;
                _this.CustomDate = (_this.popData[0].EXPT_SHIPBILLDT1 != "") ? _this._dataService.stringdttoArry(_this.popData[0].EXPT_SHIPBILLDT1) : null;
                _this.ShipBillNo = _this.popData[0].EXPT_SHIPBILLNO;
                _this.ShipBillDate = (_this.popData[0].EXPT_SHIPBILLDT != "") ? _this._dataService.stringdttoArry(_this.popData[0].EXPT_SHIPBILLDT) : null;
                _this.ExaminDate = (_this.popData[0].EXPT_SHIPCUSTOM1 != "") ? _this._dataService.stringdttoArry(_this.popData[0].EXPT_SHIPCUSTOM1) : null;
                _this.Objection = (_this.popData[0].OBJECTION == "Y") ? 'Y' : '';
                _this.Remark = (_this.popData[0].OBJECTION == "Y") ? _this.popData[0].CUSTOMREMARK : '';
                _this.CCNo = _this.popData[0].EXPT_SHIPCCNO;
                _this.CCDate = (_this.popData[0].EXPT_SHIPCUSTOM != "") ? _this._dataService.stringdttoArry(_this.popData[0].EXPT_SHIPCUSTOM) : null;
                _this.IsCargoRecd = _this.popData[0].ISCARGORECD;
                if (_this.IsCargoRecd == 'NO') {
                    _this.CustomClearanceMsg = "CARGO IS NOT YET RECEIVED, HENCE CUSTOM CLEARANCE DATE CAN NOT BE ENTERED";
                    _this.CCNo = '';
                    _this.CCDate = null;
                }
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ShippingBillShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    ShippingBillShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-shipping-bill',
            template: __webpack_require__(/*! raw-loader!./shipping-bill.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/shipping-bill.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], ShippingBillShipmentProgressComponent);
    return ShippingBillShipmentProgressComponent;
}());

var ReceiptCargoShipmentProgressComponent = /** @class */ (function () {
    function ReceiptCargoShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.TOTPKGS = '';
        this.TOT_DTLS_PKGS = '0';
        this.ErrorMessage = '';
        this.cargoList = [];
        this.GuId = '';
        this.Type = 'A';
        this.TblIndexId = '0';
        this.cargoId = '0';
        this.NoOfPkgs = '';
        this.EditValue = '';
        this.RecdDate = null;
        this.RecdTime = '00';
        this.RecdMin = '00';
        this.RecdWhere = '';
        this.RecdLocal = null;
        this.RecdLocalTime = '00';
        this.RecdLocalMin = '00';
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    ReceiptCargoShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this._loginService.getLogin()[0].CITYCODE == 'LIL' || this._loginService.getLogin()[0].CITYCODE == 'PAR') {
            if (this.ExptNo.length != 14) {
                this.ErrorMessage = 'Invalid Export No. or Job No';
            }
        }
        else {
            if (this.ExptNo.length != 15) {
                this.ErrorMessage = 'Invalid Export No. or Job No';
            }
        }
        this.GuId = this._loginService.getLogin()[0].GUID;
        this.getData('RECEIPT_OF_CARGO', this.ExptNo);
    };
    ReceiptCargoShipmentProgressComponent.prototype.ngOnChanges = function () { };
    ReceiptCargoShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.addButton);
        this.disable.disableButton(this.submitButton);
    };
    ReceiptCargoShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.addButton);
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.TOTPKGS = data.Table[0].EXPT_NOOFPKGS;
                _this.cargoList = data.Table1;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ReceiptCargoShipmentProgressComponent.prototype.populate = function (TYPE, TBL_INDEXID, CARGOID, GUID, EXPTNO, NOOFPKGS, RECDDATE, RECDTIME, RECDWHERE, RECDLOCAL, RECDLOCALTIME) {
        this.TblIndexId = TBL_INDEXID;
        this.cargoId = CARGOID;
        this.NoOfPkgs = NOOFPKGS;
        this.EditValue = NOOFPKGS;
        this.RecdDate = (RECDDATE != "") ? this._dataService.stringdttoArry(RECDDATE) : null;
        if (RECDTIME != "") {
            this.RecdTime = RECDTIME.split(":")[0];
            this.RecdMin = RECDTIME.split(":")[1];
        }
        else {
            this.RecdTime = "00";
            this.RecdMin = "00";
        }
        this.RecdWhere = RECDWHERE;
        this.RecdLocal = (RECDLOCAL != "") ? this._dataService.stringdttoArry(RECDLOCAL) : null;
        if (RECDLOCALTIME != "") {
            this.RecdLocalTime = RECDLOCALTIME.split(":")[0];
            this.RecdLocalMin = RECDLOCALTIME.split(":")[1];
        }
        else {
            this.RecdLocalTime = "00";
            this.RecdLocalMin = "00";
        }
        this.Type = TYPE;
    };
    ReceiptCargoShipmentProgressComponent.prototype.addUpdate = function () {
        var _this = this;
        if (this.validation() == false) {
            return false;
        }
        var NOOFPKGS = this.NoOfPkgs;
        var EditValue = this.EditValue;
        if (EditValue == '') {
            EditValue = '0';
        }
        var TotalValue = Math.abs(this.TOTPKGS);
        var TotalDtlsValue = this.TOT_DTLS_PKGS;
        TotalDtlsValue = (Math.abs(TotalDtlsValue) - Math.abs(EditValue)) + Math.abs(NOOFPKGS);
        if (TotalValue >= Math.abs(NOOFPKGS)) {
            if (TotalValue < TotalDtlsValue) {
                alert("Total No.Of Pkgs should be less then or equal to " + String(TotalValue));
                return false;
            }
        }
        else {
            alert("Can not add more than Total No.Of Pkgs " + String(TotalValue));
            return false;
        }
        var RECDDATE = (this.RecdDate != null) ? this.RecdDate.formatted : "";
        var RecdTimeHour = (this.RecdTime != null) ? this.RecdTime : "";
        var RecdTimeMin = (this.RecdMin != null) ? this.RecdMin : "";
        var RECDTIME = String(RecdTimeHour) + ':' + String(RecdTimeMin);
        var RECDWHERE = this.RecdWhere;
        var RECDLOCAL = (this.RecdLocal != null) ? this.RecdLocal.formatted : "";
        var RecdLocalTimeHour = (this.RecdLocalTime != null) ? this.RecdLocalTime : "";
        var RecdLocalTimeMin = (this.RecdLocalMin != null) ? this.RecdLocalMin : "";
        var RECDLOCALTIME = String(RecdLocalTimeHour) + ':' + String(RecdLocalTimeMin);
        if (RECDLOCAL == "") {
            var RecdLocalTime = "00:00";
        }
        var CARGOID = this.cargoId;
        var EXPTNO = this.ExptNo;
        var GUID = this.GuId;
        var TBL_INDEXID = this.TblIndexId;
        var TYPE = this.Type;
        //if (TYPE != 'E') {
        //    TYPE = 'A'
        //}
        //return false;
        if (this.Type == 'A') {
            this.disable.disableButton(this.addButton);
        }
        else {
            this.disable.disableButton(this.updateButton);
        }
        var _jsonData = {
            Tbl_IndexId: TBL_INDEXID,
            CargoId: CARGOID,
            ExptNo: EXPTNO,
            NoOfPkgs: NOOFPKGS,
            RecdDate: RECDDATE,
            RecdWhere: RECDWHERE,
            RecdLocal: RECDLOCAL,
            RecdTime: RECDTIME,
            RecdLocalTime: RECDLOCALTIME,
            Guid: GUID,
            CmpId: this._loginService.getLogin()[0].CMPID,
            Type: TYPE
        };
        this._dataService.Common("Export/ReceiptCargoUpdateDtlsShipmentProgress", _jsonData)
            .subscribe(function (data) {
            if (_this.Type == 'A') {
                _this.disable.enableButton(_this.addButton);
            }
            else {
                _this.disable.enableButton(_this.updateButton);
            }
            if (data.Table != undefined) {
                _this.cargoList = data.Table;
                _this.TOT_DTLS_PKGS = data.Table[0].TOTPKGS;
                _this.populate('A', "0", "0", "", "", "", "", "00:00", "", "", "00:00");
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ReceiptCargoShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/ReceiptCargoUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Receipt of Cargo details updated successfully!");
                    _this._router.navigate(['export/shipment-progress/receipt-cargo-with-job-no-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    ReceiptCargoShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/receipt-cargo-with-job-no-search']);
    };
    ReceiptCargoShipmentProgressComponent.prototype.validation = function () {
        if (this.NoOfPkgs == "") {
            alert("Please enter No Of Pkgs.");
            return false;
        }
        else if (this.RecdDate == "") {
            alert("Please select Received Date.");
            return false;
        }
        if (this.RecdWhere != "") {
            if (this.RecdLocal == "") {
                alert("Please enter Locally Recd Time.");
                return false;
            }
        }
        if (this.RecdLocal != "") {
            if (this.RecdWhere == "") {
                alert("Please enter Received Where.");
                return false;
            }
        }
        return true;
    };
    ReceiptCargoShipmentProgressComponent.prototype.reset = function () {
        this.populate('A', "0", "0", "", "", "", "", "00:00", "", "", "00:00");
    };
    ReceiptCargoShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoShipmentProgressComponent.prototype, "addButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoShipmentProgressComponent.prototype, "updateButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], ReceiptCargoShipmentProgressComponent.prototype, "disable", void 0);
    ReceiptCargoShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-receipt-cargo',
            template: __webpack_require__(/*! raw-loader!./receipt-cargo.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/receipt-cargo.sp.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], ReceiptCargoShipmentProgressComponent);
    return ReceiptCargoShipmentProgressComponent;
}());

var ApprovalReceivedShipmentProgressComponent = /** @class */ (function () {
    function ApprovalReceivedShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.ApprovalDate = null;
        this.ByWhom = '';
        this.Remark = '';
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    ApprovalReceivedShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('APPROVAL_RECEIVED', this.ExptNo);
    };
    ApprovalReceivedShipmentProgressComponent.prototype.ngOnChanges = function () { };
    ApprovalReceivedShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    ApprovalReceivedShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.ApprovalDate = (data.Table[0].EXPTAPPDT != "") ? _this._dataService.stringdttoArry(data.Table[0].EXPTAPPDT) : null;
                _this.ByWhom = data.Table[0].EXPTAPPWM;
                _this.Remark = data.Table[0].CONREMARK;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ApprovalReceivedShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: (this.ApprovalDate != null) ? this.ApprovalDate.formatted : "",
            Type4: this.ByWhom,
            Type5: this.Remark,
            Type6: this._loginService.getLogin()[0].CMPID,
            Type7: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/ApprovalReceivedUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Approval Received details updated successfully!");
                    _this._router.navigate(['export/shipment-progress/approval-received-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    ApprovalReceivedShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/approval-received-search']);
    };
    ApprovalReceivedShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ApprovalReceivedShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], ApprovalReceivedShipmentProgressComponent.prototype, "disable", void 0);
    ApprovalReceivedShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-approval-received',
            template: __webpack_require__(/*! raw-loader!./approval-received.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/approval-received.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], ApprovalReceivedShipmentProgressComponent);
    return ApprovalReceivedShipmentProgressComponent;
}());

var MeasurementShipmentProgressComponent = /** @class */ (function () {
    function MeasurementShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.Cbm = '';
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    MeasurementShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('MEASUREMENT', this.ExptNo);
    };
    MeasurementShipmentProgressComponent.prototype.ngOnChanges = function () { };
    MeasurementShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    MeasurementShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.Cbm = data.Table[0].EXPT_VOLUME;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    MeasurementShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: this.Cbm,
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/MeasurementUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Measurement(CBM) details updated successfully!");
                    _this._router.navigate(['export/shipment-progress/measurement-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    MeasurementShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/measurement-search']);
    };
    MeasurementShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MeasurementShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], MeasurementShipmentProgressComponent.prototype, "disable", void 0);
    MeasurementShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-measurement',
            template: __webpack_require__(/*! raw-loader!./measurement.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/measurement.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], MeasurementShipmentProgressComponent);
    return MeasurementShipmentProgressComponent;
}());

var OutOfChargeShipmentProgressComponent = /** @class */ (function () {
    function OutOfChargeShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.Date = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    OutOfChargeShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('OUT_OF_CHARGE', this.ExptNo);
    };
    OutOfChargeShipmentProgressComponent.prototype.ngOnChanges = function () { };
    OutOfChargeShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    OutOfChargeShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.Date = (data.Table[0].OUTCHARGEDT != "") ? _this._dataService.stringdttoArry(data.Table[0].OUTCHARGEDT) : null;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    OutOfChargeShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: (this.Date != null) ? this.Date.formatted : "",
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/OutOfChargeUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Out of Charge details updated successfully!");
                    _this._router.navigate(['export/shipment-progress/out-of-charge-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    OutOfChargeShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/out-of-charge-search']);
    };
    OutOfChargeShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OutOfChargeShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], OutOfChargeShipmentProgressComponent.prototype, "disable", void 0);
    OutOfChargeShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-out-of-charge',
            template: __webpack_require__(/*! raw-loader!./out-of-charge.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/out-of-charge.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], OutOfChargeShipmentProgressComponent);
    return OutOfChargeShipmentProgressComponent;
}());

var BlDetailsShipmentProgressComponent = /** @class */ (function () {
    function BlDetailsShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.BlType = 'M';
        this.BLNo = '';
        this.BLDate = null;
        this.BLFreight = '-1';
        this.HBLNo = '';
        this.HBLDate = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    BlDetailsShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('BL_DETAILS', this.ExptNo);
    };
    BlDetailsShipmentProgressComponent.prototype.ngOnChanges = function () { };
    BlDetailsShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    BlDetailsShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.BlType = (data.Table[0].EXPT_BLTYPE == "S") ? 'S' : 'M';
                _this.BLNo = data.Table[0].EXPT_BLNO;
                _this.BLDate = (data.Table[0].EXPT_BLDT != "") ? _this._dataService.stringdttoArry(data.Table[0].EXPT_BLDT) : null;
                _this.BLFreight = data.Table[0].EXPT_MBLFRT;
                _this.HBLNo = data.Table[0].EXPT_HBLNO;
                _this.HBLDate = (data.Table[0].EXPT_HBLDT != "") ? _this._dataService.stringdttoArry(data.Table[0].EXPT_HBLDT) : null;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    BlDetailsShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: this.BLNo,
            Type4: (this.BLDate != null) ? this.BLDate.formatted : "",
            Type5: this.HBLNo,
            Type6: (this.HBLDate != null) ? this.HBLDate.formatted : "",
            Type7: this.BlType,
            Type8: (this.BLFreight != null) ? this.BLFreight : "",
            Type9: this._loginService.getLogin()[0].CMPID,
            Type10: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/BlDetailsUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("BL Details details updated successfully!");
                    _this._router.navigate(['export/shipment-progress/bl-details-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    BlDetailsShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/bl-details-search']);
    };
    BlDetailsShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BlDetailsShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], BlDetailsShipmentProgressComponent.prototype, "disable", void 0);
    BlDetailsShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-bl-details',
            template: __webpack_require__(/*! raw-loader!./bl-details.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/bl-details.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], BlDetailsShipmentProgressComponent);
    return BlDetailsShipmentProgressComponent;
}());

var CartingAirShipmentProgressComponent = /** @class */ (function () {
    function CartingAirShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.CartingDate = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    CartingAirShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('CARTING_AIR', this.ExptNo);
    };
    CartingAirShipmentProgressComponent.prototype.ngOnChanges = function () { };
    CartingAirShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    CartingAirShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.CartingDate = (data.Table[0].CARTEDDT != "") ? _this._dataService.stringdttoArry(data.Table[0].CARTEDDT) : null;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    CartingAirShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: (this.CartingDate != null) ? this.CartingDate.formatted : "",
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/CartingAirUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Carting Air Date updated successfully!");
                    _this._router.navigate(['export/shipment-progress/carting-air-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    CartingAirShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/carting-air-search']);
    };
    CartingAirShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CartingAirShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], CartingAirShipmentProgressComponent.prototype, "disable", void 0);
    CartingAirShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-carting-air',
            template: __webpack_require__(/*! raw-loader!./carting-air.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/carting-air.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], CartingAirShipmentProgressComponent);
    return CartingAirShipmentProgressComponent;
}());

var PrealertSentOnShipmentProgressComponent = /** @class */ (function () {
    function PrealertSentOnShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.SentOnDate = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    PrealertSentOnShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('PREALERT_SENT_ON', this.ExptNo);
    };
    PrealertSentOnShipmentProgressComponent.prototype.ngOnChanges = function () { };
    PrealertSentOnShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    PrealertSentOnShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.SentOnDate = (data.Table[0].PREALERTDT != "") ? _this._dataService.stringdttoArry(data.Table[0].PREALERTDT) : null;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    PrealertSentOnShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: (this.SentOnDate != null) ? this.SentOnDate.formatted : "",
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/PrealertSentOnUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Prealert Date updated successfully!");
                    _this._router.navigate(['export/shipment-progress/prealert-sent-on-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    PrealertSentOnShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/prealert-sent-on-search']);
    };
    PrealertSentOnShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrealertSentOnShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], PrealertSentOnShipmentProgressComponent.prototype, "disable", void 0);
    PrealertSentOnShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-prealert-sent-on',
            template: __webpack_require__(/*! raw-loader!./prealert-sent-on.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/prealert-sent-on.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], PrealertSentOnShipmentProgressComponent);
    return PrealertSentOnShipmentProgressComponent;
}());

var DestinationDocumentShipmentProgressComponent = /** @class */ (function () {
    function DestinationDocumentShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.docRecdList = [];
        this.mainList = [];
        this.Date = null;
        this.CourierNo = '';
        this.Remark = '';
        this.IsAllRecd = '';
        this.IsDocRequired = '';
        this.IsDocumentSent = false;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    DestinationDocumentShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('DESTINATION_DOCUMENTS', this.ExptNo);
    };
    DestinationDocumentShipmentProgressComponent.prototype.ngOnChanges = function () { };
    DestinationDocumentShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    DestinationDocumentShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    _this.docRecdList = data.Table1;
                    if (data.Table2.length > 0) {
                        _this.mainList = data.Table2;
                        for (var i = 0; i < _this.mainList.length; i++) {
                            _this.mainList[i]["RECD"] = null;
                            _this.mainList[i]["RECDDT"] = null;
                            _this.mainList[i]["CALL"] = 'C' + _this.mainList[i]["DOCCODE"];
                            _this.mainList[i]["NA"] = null;
                        }
                        _this.IsAllRecd = 'NO';
                        _this.IsDocumentSent = false;
                    }
                    else {
                        _this.IsAllRecd = 'YES';
                        _this.IsDocumentSent = true;
                    }
                    if (data.Table3.length > 0) {
                        _this.Id = data.Table3[0].ID;
                        _this.Date = (data.Table3[0].DOCSENTDT != "") ? _this._dataService.stringdttoArry(data.Table3[0].DOCSENTDT) : null;
                        _this.CourierNo = data.Table3[0].COURIERNO;
                        _this.Remark = data.Table3[0].DESTDOCRMK;
                    }
                    _this.IsDocRequired = 'YES';
                    _this.ErrorMessage = "";
                }
                else {
                    _this.IsDocRequired = 'NO';
                    _this.ErrorMessage = "DESTINATION DOCUMENTS ARE NOT REQUIRED FOR THIS CONSIGNEE";
                }
            }
            else {
                alert('Not Found!');
            }
        });
    };
    DestinationDocumentShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        var DocStr = "";
        var cmpname = "";
        for (var i = 0; i < this.mainList.length; i++) {
            cmpname = "";
            if (this.mainList[i].RECD != null) {
                if (this.mainList[i].RECDDT != null) {
                    cmpname = this.mainList[i].DOCCODE + ';' + this.mainList[i].RECDDT.formatted;
                }
                else {
                    this._toasterService.toast('error', 'Error', "Please enter Recd Date for " + this.mainList[i].DOCUMENT);
                    return false;
                }
            }
            else if (this.mainList[i].CALL != null) {
                cmpname = this.mainList[i].DOCCODE + ';CALLED';
            }
            else if (this.mainList[i].NA != null) {
                cmpname = this.mainList[i].DOCCODE + ';NA';
            }
            DocStr = DocStr + cmpname + ",";
        }
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: (this.IsAllRecd == 'YES') ? '' : DocStr,
            Type4: (this.IsAllRecd == 'YES') ? (this.Date != null) ? this.Date.formatted : "" : "",
            Type5: (this.IsAllRecd == 'YES') ? this.CourierNo : "",
            Type6: (this.IsAllRecd == 'YES') ? this.Remark : "",
            Type7: this._loginService.getLogin()[0].CITYCODE,
            Type8: this._loginService.getLogin()[0].CMPID,
            Type9: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/DestinationDocumentUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Destination Document updated successfully!");
                    _this._router.navigate(['export/shipment-progress/destination-document-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    DestinationDocumentShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/destination-document-search']);
    };
    DestinationDocumentShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DestinationDocumentShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], DestinationDocumentShipmentProgressComponent.prototype, "disable", void 0);
    DestinationDocumentShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-destination-document',
            template: __webpack_require__(/*! raw-loader!./destination-document-on.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/destination-document-on.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], DestinationDocumentShipmentProgressComponent);
    return DestinationDocumentShipmentProgressComponent;
}());

var SeaToAirShipmentProgressComponent = /** @class */ (function () {
    function SeaToAirShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.CompanyList = [];
        this.Company = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    SeaToAirShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData();
    };
    SeaToAirShipmentProgressComponent.prototype.ngOnChanges = function () { };
    SeaToAirShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    SeaToAirShipmentProgressComponent.prototype.getData = function () {
        var _this = this;
        var _jsonData = {
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/TransferSeaToAirShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.CompanyList = data.Table;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    SeaToAirShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        if (this.Company == null) {
            alert("Please select Company Name.");
            return false;
        }
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.ExptNo,
            Type2: this.Company,
            Type3: this._loginService.getLogin()[0].CITYCODE,
            Type4: this._loginService.getLogin()[0].CITYCODE1,
            Type5: this._loginService.getLogin()[0].CMPID,
            Type6: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/TransferSeaToAirUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Export details Transfered successfully!. Air Export No is : " + String(data.Table[0].EXPTNO));
                    _this._router.navigate(['export/shipment-progress/transfer-sea-to-air-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    SeaToAirShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/transfer-sea-to-air-search']);
    };
    SeaToAirShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SeaToAirShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], SeaToAirShipmentProgressComponent.prototype, "disable", void 0);
    SeaToAirShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-sea-to-air',
            template: __webpack_require__(/*! raw-loader!./transfer-sea-to-air.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/transfer-sea-to-air.sp.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], SeaToAirShipmentProgressComponent);
    return SeaToAirShipmentProgressComponent;
}());

var ReceiptCargoProvisionShipmentProgressComponent = /** @class */ (function () {
    function ReceiptCargoProvisionShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.viewType = 'Search';
        this.RightsList = [];
        this.ShipperList = [];
        this.ConsigneeList = [];
        this.Shipper = null;
        this.Consignee = null;
        this.Id = '';
        this.ExptNo = null;
        this.TOTPKGS = '';
        this.TOT_DTLS_PKGS = '0';
        this.ErrorMessage = '';
        this.cargoList = [];
        this.GuId = '';
        this.Type = 'A';
        this.TblIndexId = '0';
        this.cargoId = '0';
        this.NoOfPkgs = '';
        this.EditValue = '';
        this.RecdDate = null;
        this.RecdTime = '00';
        this.RecdMin = '00';
        this.RecdWhere = '';
        this.RecdLocal = null;
        this.RecdLocalTime = '00';
        this.RecdLocalMin = '00';
    }
    ReceiptCargoProvisionShipmentProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(218, '')
            .subscribe(function (data) {
            _this.RightsList = data;
            _this._loginService.checkVerify('View', _this.RightsList); //For verify user access
            _this.GuId = _this._loginService.getLogin()[0].GUID;
            _this.fillDropdown();
        });
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.ngOnChanges = function () { };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.searchButton);
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.fillDropdown = function () {
        var _this = this;
        var _jsonData = {
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/ROCProvisionShipmentProgressFill", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.searchButton);
            if (data.Table != undefined) {
                _this.ShipperList = data.Table;
                _this.ConsigneeList = data.Table1;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.Search = function () {
        if (this.Shipper == null) {
            this._toasterService.toast('error', 'Error', 'Select Shipper');
            return false;
        }
        else if (this.Consignee == null) {
            this._toasterService.toast('error', 'Error', 'Select Consignee');
            return false;
        }
        var check = this._loginService.checkVerifyWithMessage('Add', this.RightsList);
        if (check.Status === false) {
            this._toasterService.toast('error', 'Form: ' + check.FormName, check.ErrorMessage);
            return false;
        }
        this.viewType = 'Add';
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.populate = function (TYPE, TBL_INDEXID, CARGOID, GUID, EXPTNO, NOOFPKGS, RECDDATE, RECDTIME, RECDWHERE, RECDLOCAL, RECDLOCALTIME) {
        this.TblIndexId = TBL_INDEXID;
        this.cargoId = CARGOID;
        this.NoOfPkgs = NOOFPKGS;
        this.EditValue = NOOFPKGS;
        this.RecdDate = (RECDDATE != "") ? this._dataService.stringdttoArry(RECDDATE) : null;
        if (RECDTIME != "") {
            this.RecdTime = RECDTIME.split(":")[0];
            this.RecdMin = RECDTIME.split(":")[1];
        }
        else {
            this.RecdTime = "00";
            this.RecdMin = "00";
        }
        this.RecdWhere = RECDWHERE;
        this.RecdLocal = (RECDLOCAL != "") ? this._dataService.stringdttoArry(RECDLOCAL) : null;
        if (RECDLOCALTIME != "") {
            this.RecdLocalTime = RECDLOCALTIME.split(":")[0];
            this.RecdLocalMin = RECDLOCALTIME.split(":")[1];
        }
        else {
            this.RecdLocalTime = "00";
            this.RecdLocalMin = "00";
        }
        this.Type = TYPE;
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.addUpdate = function () {
        var _this = this;
        if (this.validation() == false) {
            return false;
        }
        var NOOFPKGS = this.NoOfPkgs;
        var EditValue = this.EditValue;
        if (EditValue == '') {
            EditValue = '0';
        }
        var TotalValue = Math.abs(this.TOTPKGS);
        var TotalDtlsValue = this.TOT_DTLS_PKGS;
        TotalDtlsValue = (Math.abs(TotalDtlsValue) - Math.abs(EditValue)) + Math.abs(NOOFPKGS);
        if (TotalValue >= Math.abs(NOOFPKGS)) {
            if (TotalValue < TotalDtlsValue) {
                alert("Total No.Of Pkgs should be less then or equal to " + String(TotalValue));
                return false;
            }
        }
        else {
            alert("Can not add more than Total No.Of Pkgs " + String(TotalValue));
            return false;
        }
        var RECDDATE = (this.RecdDate != null) ? this.RecdDate.formatted : "";
        var RecdTimeHour = (this.RecdTime != null) ? this.RecdTime : "";
        var RecdTimeMin = (this.RecdMin != null) ? this.RecdMin : "";
        var RECDTIME = String(RecdTimeHour) + ':' + String(RecdTimeMin);
        var RECDWHERE = this.RecdWhere;
        var RECDLOCAL = (this.RecdLocal != null) ? this.RecdLocal.formatted : "";
        var RecdLocalTimeHour = (this.RecdLocalTime != null) ? this.RecdLocalTime : "";
        var RecdLocalTimeMin = (this.RecdLocalMin != null) ? this.RecdLocalMin : "";
        var RECDLOCALTIME = String(RecdLocalTimeHour) + ':' + String(RecdLocalTimeMin);
        if (RECDLOCAL == "") {
            var RecdLocalTime = "00:00";
        }
        var CARGOID = this.cargoId;
        var EXPTNO = this.ExptNo;
        var GUID = this.GuId;
        var TBL_INDEXID = this.TblIndexId;
        var TYPE = this.Type;
        //if (TYPE != 'E') {
        //    TYPE = 'A'
        //}
        //return false;
        if (this.Type == 'A') {
            this.disable.disableButton(this.addButton);
        }
        else {
            this.disable.disableButton(this.updateButton);
        }
        var _jsonData = {
            Tbl_IndexId: TBL_INDEXID,
            CargoId: CARGOID,
            ExptNo: EXPTNO,
            NoOfPkgs: NOOFPKGS,
            RecdDate: RECDDATE,
            RecdWhere: RECDWHERE,
            RecdLocal: RECDLOCAL,
            RecdTime: RECDTIME,
            RecdLocalTime: RECDLOCALTIME,
            Guid: GUID,
            CmpId: this._loginService.getLogin()[0].CMPID,
            Type: TYPE
        };
        this._dataService.Common("Export/ReceiptCargoUpdateDtlsShipmentProgress", _jsonData)
            .subscribe(function (data) {
            if (_this.Type == 'A') {
                _this.disable.enableButton(_this.addButton);
            }
            else {
                _this.disable.enableButton(_this.updateButton);
            }
            if (data.Table != undefined) {
                _this.cargoList = data.Table;
                _this.TOT_DTLS_PKGS = data.Table[0].TOTPKGS;
                _this.populate('A', "0", "0", "", "", "", "", "00:00", "", "", "00:00");
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/ReceiptCargoUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Receipt of Cargo details updated successfully!");
                    _this._router.navigate(['export/shipment-progress/receipt-cargo-with-job-no-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/receipt-cargo-with-job-no-search']);
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.validation = function () {
        if (this.NoOfPkgs == "") {
            alert("Please enter No Of Pkgs.");
            return false;
        }
        else if (this.RecdDate == "") {
            alert("Please select Received Date.");
            return false;
        }
        if (this.RecdWhere != "") {
            if (this.RecdLocal == "") {
                alert("Please enter Locally Recd Time.");
                return false;
            }
        }
        if (this.RecdLocal != "") {
            if (this.RecdWhere == "") {
                alert("Please enter Received Where.");
                return false;
            }
        }
        return true;
    };
    ReceiptCargoProvisionShipmentProgressComponent.prototype.reset = function () {
        this.populate('A', "0", "0", "", "", "", "", "00:00", "", "", "00:00");
    };
    ReceiptCargoProvisionShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoProvisionShipmentProgressComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoProvisionShipmentProgressComponent.prototype, "addButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoProvisionShipmentProgressComponent.prototype, "updateButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReceiptCargoProvisionShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], ReceiptCargoProvisionShipmentProgressComponent.prototype, "disable", void 0);
    ReceiptCargoProvisionShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-receipt-cargo-provision',
            template: __webpack_require__(/*! raw-loader!./receipt-cargo-provision.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/receipt-cargo-provision.sp.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], ReceiptCargoProvisionShipmentProgressComponent);
    return ReceiptCargoProvisionShipmentProgressComponent;
}());

var ScanDocSentShipmentProgressComponent = /** @class */ (function () {
    function ScanDocSentShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.RightsList = [];
        this.viewType = 'Search';
        this.ContainerNo = '';
        this.searchList = [];
        this.ErrorMessage = '';
    }
    ScanDocSentShipmentProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(228, '')
            .subscribe(function (data) {
            _this.RightsList = data;
            _this._loginService.checkVerify('Modify', _this.RightsList); //For verify user access
        });
    };
    ScanDocSentShipmentProgressComponent.prototype.ngOnChanges = function () { };
    ScanDocSentShipmentProgressComponent.prototype.ngAfterViewInit = function () {
    };
    ScanDocSentShipmentProgressComponent.prototype.Search = function () {
        if (this.ContainerNo == '') {
            this._toasterService.toast('error', 'Error', 'Please enter ContainerNo.');
            return false;
        }
        else if (this.ContainerNo.length != 11) {
            this._toasterService.toast('error', 'Error', 'Container No length should be 11.');
            return false;
        }
        this.getSearchData(this.ContainerNo);
    };
    ScanDocSentShipmentProgressComponent.prototype.getSearchData = function (ContainerNo) {
        var _this = this;
        var _jsonData = {
            ContainerNo: this.ContainerNo
        };
        this._dataService.getData("Export/ScanDocSentShipmentProgressFill", _jsonData)
            .subscribe(function (data) {
            if (data.Table != undefined) {
                _this.searchList = data.Table;
                if (_this.searchList.length > 0) {
                    _this.viewType = 'List';
                    for (var i = 0; i < _this.searchList.length; i++) {
                        _this.searchList[i]["Sent"] = false;
                    }
                    _this.ErrorMessage = '';
                }
                else {
                    _this.ErrorMessage = 'There is no record for this Container No [' + _this.ContainerNo + ']';
                }
            }
            else {
                alert('Not Found!');
            }
        });
    };
    ScanDocSentShipmentProgressComponent.prototype.getCount = function () {
        return this.searchList.filter(function (search) { return search.SCANDOCS === 'NO'; }).length;
    };
    ScanDocSentShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        var tmpVessel = '';
        var tmpCount = this.searchList.filter(function (search) { return search.SCANDOCS === 'NO' && search.Sent === true; });
        if (tmpCount.length === 0) {
            this.ErrorMessage = 'Please select atleast one.';
            return false;
        }
        else {
            this.ErrorMessage = '';
        }
        var tmpString = '';
        for (var i = 0; i < tmpCount.length; i++) {
            tmpString = tmpString + tmpCount[i].CONTAINERID + ',' + this.ContainerNo + ',' + tmpCount[i].EXPT_VESSEL + '|';
            tmpVessel = tmpVessel + tmpCount[i].EXPT_VESSEL + ',';
        }
        tmpString = tmpString.substring(0, tmpString.length - 1);
        tmpVessel = tmpVessel.substring(0, tmpVessel.length - 1);
        this._disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: tmpString,
            Type2: this._loginService.getLogin()[0].CMPID,
            Type3: this._loginService.getLogin()[0].MAKERIP //change later by ip,
        };
        this._dataService.Common("Export/ScanDocSentUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this._disable.enableButton(_this.submitButton);
            _this._toasterService.toast('success', 'Success', 'Doc Sent Date updated for ' + tmpVessel + ' Rotation No(s).');
            _this.getSearchData(_this.ContainerNo);
        });
    };
    ScanDocSentShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], ScanDocSentShipmentProgressComponent.prototype, "_disable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ScanDocSentShipmentProgressComponent.prototype, "submitButton", void 0);
    ScanDocSentShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-scan-docs-sent',
            template: __webpack_require__(/*! raw-loader!./scan-docs-sent.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/scan-docs-sent.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], ScanDocSentShipmentProgressComponent);
    return ScanDocSentShipmentProgressComponent;
}());

var PendingShipmentShipmentProgressComponent = /** @class */ (function () {
    function PendingShipmentShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService, _disabled) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._disabled = _disabled;
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
        this.viewType = 'Search';
        this.RightsList = [];
        this.VesselName = '';
        this.VoyageNo = '';
        this.searchList = [];
        this.ErrorMessage = '';
        this.ReportType = '';
        //Export No
        this.VesselLabel = '';
        this.ExportNoList = [];
        this.SelectAll = false;
        this.NewVessel = null;
        this.NewVesselList = [];
        this.NewAgent = null;
        this.NewAgentList = [];
        this.ExportErrorMessage = '';
        this.DataSet = [];
        //Container No
        this.ContainerNoList = [];
        this.ContainerErrorMessage = '';
        //TRANSFER CONTAINER DETAILS 
        this.ContainerExptVessel = '';
        this.ContainerHeader = '';
        this.ContainerDetailsList = [];
        this.ContainerVessel = null;
        this.ContainerVesselList = [];
        this.ContainerAgent = null;
        this.ContainerAgentList = [];
        this.ContainerLiner = null;
        this.ContainerLinerList = [];
    }
    PendingShipmentShipmentProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(230, '')
            .subscribe(function (data) {
            _this.RightsList = data;
            _this._loginService.checkVerify('Modify', _this.RightsList); //For verify user access
            //this.fillDropdown();
        });
    };
    PendingShipmentShipmentProgressComponent.prototype.ngOnChanges = function () { };
    PendingShipmentShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        //this.disable.disableButton(this.searchButton);
    };
    PendingShipmentShipmentProgressComponent.prototype.fillDropdown = function () {
        var _this = this;
        var _jsonData = {
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/ROCProvisionShipmentProgressFill", _jsonData)
            .subscribe(function (data) {
            _this._disabled.enableButton(_this.searchButton);
            if (data.Table != undefined) {
            }
            else {
                alert('Not Found!');
            }
        });
    };
    PendingShipmentShipmentProgressComponent.prototype.Search = function () {
        var _this = this;
        if (this.VesselName == '' && this.VoyageNo == '') {
            this._toasterService.toast('error', 'Alert', 'Please enter atleast any of Vessel Name & Voyage No');
            return false;
        }
        var _jsonData = {
            Type1: this.VesselName,
            Type2: this.VoyageNo,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        this._disabled.disableButton(this.searchButton);
        this._dataService.Common("Export/PendingShipment_ShipmentProgressFill", _jsonData)
            .subscribe(function (data) {
            _this._disabled.enableButton(_this.searchButton);
            if (data.Table != undefined) {
                if (data.Table.length > 0) {
                    _this.searchList = data.Table;
                }
                else {
                    _this.searchList = [];
                    _this._toasterService.toast('info', 'Data', 'No Record Found.');
                }
            }
        });
    };
    PendingShipmentShipmentProgressComponent.prototype.rowSearchSendClick = function (RtNo, VslName, VoyageNo, ETD) {
        this.ErrorMessage = "Please Wait Preparing Data....";
        this.VesselLabel = "VESSEL : " + RtNo + " - " + VslName + " - " + VoyageNo + " - " + ETD;
        this.VesselName = VslName;
        this.getExportNoData(RtNo);
    };
    PendingShipmentShipmentProgressComponent.prototype.getExportNoData = function (rnno) {
        var _this = this;
        this.SelectAll = false;
        this.ExportNoList = [];
        var _jsonData = {
            VesselRtNo: rnno,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/PendingShipment_ShipmentProgressView", _jsonData)
            .subscribe(function (data) {
            _this.ErrorMessage = "";
            _this.viewType = 'View';
            if (data.Table != undefined) {
                if (data.Table.length > 0) {
                    _this.ExportNoList = data.Table;
                    for (var i = 0; i < _this.ExportNoList.length; i++) {
                        _this.ExportNoList[i]["Check"] = false;
                    }
                    _this.NewVesselList = data.Table2;
                }
                else {
                    _this.ExportNoList = [];
                    _this._toasterService.toast('info', 'Data', 'No Export Record Found.');
                }
            }
            if (data.Table1 != undefined) {
                if (data.Table1.length > 0) {
                    _this.ContainerNoList = data.Table1;
                }
                else {
                    _this.ContainerNoList = [];
                    _this._toasterService.toast('info', 'Data', 'No Container Record Found.');
                }
            }
        });
    };
    PendingShipmentShipmentProgressComponent.prototype.changeNewVessel = function (new_vessel) {
        var _this = this;
        if (new_vessel != null) {
            var _jsonData = {
                VesselRtNo: new_vessel.split("|")[0],
                VesselPort: new_vessel.split("|")[1]
            };
            this._dataService.getData("Export/PendingShipment_ShipmentProgressView_Agent", _jsonData)
                .subscribe(function (data) {
                if (data.Table != undefined) {
                    if (data.Table.length > 0) {
                        _this.NewAgentList = data.Table;
                    }
                    else {
                        _this.NewAgentList = [];
                        _this._toasterService.toast('info', 'Data', 'No Record Found.');
                    }
                }
            });
        }
    };
    PendingShipmentShipmentProgressComponent.prototype.checkSelectAll = function () {
        this.SelectAll = (this.SelectAll) ? false : true;
        for (var i = 0; i < this.ExportNoList.length; i++) {
            this.ExportNoList[i]["Check"] = this.SelectAll;
        }
    };
    PendingShipmentShipmentProgressComponent.prototype.rowContainerSendClick = function (expt_vessel, containerno, agentname, containerstatus) {
        this.ContainerHeader = 'To transfer the container (' + containerno + ') from Vessel (' + this.VesselName + ') Agent (' + agentname + ') You have to transfer all the following containers';
        this.ContainerExptVessel = expt_vessel;
        this.getContainerNoDetails(expt_vessel, containerno);
    };
    PendingShipmentShipmentProgressComponent.prototype.getContainerNoDetails = function (expt_vessel, containerno) {
        var _this = this;
        var _jsonData = {
            ExptVessel: expt_vessel,
            ContainerNo: containerno,
            CmpId: this._loginService.getLogin()[0].CMPID,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/PendingShipment_ShipmentProgress_ContainerNo_Populate", _jsonData)
            .subscribe(function (data) {
            _this.viewType = 'ContainerDetail';
            if (data.Table != undefined) {
                _this.ContainerDetailsList = data.Table;
                _this.ContainerVesselList = data.Table1;
            }
        });
    };
    PendingShipmentShipmentProgressComponent.prototype.changeContainerNewVessel = function (new_vessel) {
        var _this = this;
        if (new_vessel != null) {
            var _jsonData = {
                VesselRtNo: new_vessel.split("|")[0],
                VesselPort: new_vessel.split("|")[1]
            };
            this._dataService.getData("Export/PendingShipment_ShipmentProgressView_Agent", _jsonData)
                .subscribe(function (data) {
                if (data.Table != undefined) {
                    if (data.Table.length > 0) {
                        _this.ContainerAgentList = data.Table;
                        _this.ContainerLinerList = data.Table1;
                    }
                    else {
                        _this.ContainerAgentList = [];
                        _this._toasterService.toast('info', 'Data', 'No Record Found.');
                    }
                }
            });
        }
    };
    PendingShipmentShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        var exportnos = this.ExportNoList.filter(function (search) { return search.Check === true; });
        if (exportnos.length === 0) {
            this._toasterService.toast('error', 'Alert', 'Please Select Atleast one Export No.');
        }
        else if (this.NewVessel == null) {
            this._toasterService.toast('error', 'Alert', 'Please select New Vessel Name.');
        }
        else if (this.NewAgent == null) {
            this._toasterService.toast('error', 'Alert', 'Please select Agent Name for this current Vessel.');
        }
        else {
            var strExportNos = '';
            for (var i = 0; i < this.ExportNoList.length; i++) {
                if (this.ExportNoList[i].Check === true) {
                    strExportNos = strExportNos + this.ExportNoList[i].EXPTNO + ',';
                }
            }
            var answer = confirm("Are you sure you want to Transfer selected shipments to another vessel?");
            if (answer == true) {
                var NewVesselName_1 = this.NewVesselList.filter(function (search) { return search.VALUEFIELD === _this.NewVessel; })[0].TEXTFIELD;
                this._disabled.disableButton(this.submitButton);
                var _jsonData = {
                    ExptNos: strExportNos,
                    VesselRtNo: this.NewVessel.split("|")[0],
                    VesselPort: this.NewVessel.split("|")[1],
                    ExptAgent: this.NewAgent,
                    CmpId: this._loginService.getLogin()[0].CMPID,
                    MakerIp: this._loginService.getLogin()[0].MAKERIP //change later by ip
                };
                this._dataService.Common("Export/PendingShipment_ShipmentProgress_ExportNo", _jsonData)
                    .subscribe(function (data) {
                    _this._disabled.enableButton(_this.submitButton);
                    _this._toasterService.toast('success', 'Success', 'Selected Pending Shipments Transfer to Vessel (' + NewVesselName_1 + ') Successfully!');
                    _this.DataSet = data;
                    _this.ReportType = 'EXPORTNO';
                    _this.viewType = 'Report';
                });
            }
        }
    };
    PendingShipmentShipmentProgressComponent.prototype.submitContainer = function () {
        var _this = this;
        if (this.ContainerVessel == null) {
            this._toasterService.toast('error', 'Alert', 'Please select New Vessel Name.');
        }
        else if (this.ContainerAgent == null) {
            this._toasterService.toast('error', 'Alert', 'Please select Agent Name for this current Vessel.');
        }
        else {
            var NewVesselName_2 = this.ContainerVesselList.filter(function (search) { return search.VALUEFIELD === _this.ContainerVessel; })[0].TEXTFIELD;
            this._disabled.disableButton(this.submitContainerButton);
            var _jsonData = {
                ExptVessel: this.ContainerExptVessel,
                VesselRtNo: this.ContainerVessel.split("|")[0],
                VesselPort: this.ContainerVessel.split("|")[1],
                ExptAgent: this.ContainerAgent,
                ShipLiner: "",
                GuId: this._loginService.getLogin()[0].CMPID,
                CmpId: this._loginService.getLogin()[0].CMPID,
                MakerIp: this._loginService.getLogin()[0].MAKERIP //change later by Ip
            };
            this._dataService.Common("Export/PendingShipment_ShipmentProgress_ContainerNo", _jsonData)
                .subscribe(function (data) {
                _this._disabled.enableButton(_this.submitContainerButton);
                _this._toasterService.toast('success', 'Success', 'Selected Pending Shipments Transfer to Vessel (' + NewVesselName_2 + ') Successfully!');
                _this.clear();
            });
        }
    };
    PendingShipmentShipmentProgressComponent.prototype.back = function (event) {
        if (event) {
            this.clear();
        }
    };
    PendingShipmentShipmentProgressComponent.prototype.clear = function () {
        this.ContainerExptVessel = '';
        this.ContainerDetailsList = [];
        this.ContainerVesselList = [];
        this.ContainerVessel = null;
        this.ExportNoList = [];
        this.NewVesselList = [];
        this.NewVessel = null;
        this.NewAgentList = [];
        this.NewAgent = null;
        this.ContainerNoList = [];
        this.viewType = 'Search';
        this.VesselName = '';
        this.VoyageNo = '';
        this.searchList = [];
    };
    PendingShipmentShipmentProgressComponent.prototype.abort = function () {
    };
    PendingShipmentShipmentProgressComponent.prototype.reset = function () {
    };
    PendingShipmentShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PendingShipmentShipmentProgressComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PendingShipmentShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitContainerButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PendingShipmentShipmentProgressComponent.prototype, "submitContainerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], PendingShipmentShipmentProgressComponent.prototype, "fontDisabled", void 0);
    PendingShipmentShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-pending-shipment',
            template: __webpack_require__(/*! raw-loader!./pending-shipment.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/pending-shipment.sp.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"]])
    ], PendingShipmentShipmentProgressComponent);
    return PendingShipmentShipmentProgressComponent;
}());

var PendingShipReportShipmentProgressComponent = /** @class */ (function () {
    function PendingShipReportShipmentProgressComponent(_router) {
        this._router = _router;
        this.DataSet = [];
        this.ReportType = '';
        this.OldVessel = '';
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ExportList = [];
        this.ContainerList = [];
        this.Header = '';
        this.NewVessel = '';
    }
    PendingShipReportShipmentProgressComponent.prototype.ngOnInit = function () { };
    PendingShipReportShipmentProgressComponent.prototype.ngOnChanges = function () {
        if (this.ReportType != '') {
            if (this.ReportType === 'EXPORTNO') {
                this.Header = 'Following Export No(s) successfully transfred to New Vessel.';
                this.fillExportNo();
            }
            else {
                this.Header = 'Following Container(s) and Export No(s) successfully transfred to New Vessel.';
                this.fillContainerNo();
            }
            if (this.DataSet.Table1.length > 0) {
                this.NewVessel = "VESSEL : " + this.DataSet.Table1[0].VESSEL_NAME
                    + " AGENT : " + this.DataSet.Table1[0].AGENT_NAME
                    + " PORT : " + this.DataSet.Table1[0].PORT_NAME;
            }
        }
    };
    PendingShipReportShipmentProgressComponent.prototype.fillExportNo = function () {
        this.ExportList = this.DataSet.Table;
    };
    PendingShipReportShipmentProgressComponent.prototype.fillContainerNo = function () {
        this.ContainerList = this.DataSet.Table;
    };
    PendingShipReportShipmentProgressComponent.prototype.back = function () {
        this.result.emit(true);
    };
    PendingShipReportShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PendingShipReportShipmentProgressComponent.prototype, "DataSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PendingShipReportShipmentProgressComponent.prototype, "ReportType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PendingShipReportShipmentProgressComponent.prototype, "OldVessel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PendingShipReportShipmentProgressComponent.prototype, "result", void 0);
    PendingShipReportShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-pending-shipment-report',
            template: __webpack_require__(/*! raw-loader!./pending-shipment-report.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/pending-shipment-report.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PendingShipReportShipmentProgressComponent);
    return PendingShipReportShipmentProgressComponent;
}());

var ContainerLoadingShipmentProgressComponent = /** @class */ (function () {
    function ContainerLoadingShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService, _disabled) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._disabled = _disabled;
        this.viewType = 'Search';
        this.RightsList = [];
        this.VesselName = '';
        this.VoyageNo = '';
        this.searchList = [];
        this.ErrorMessage = '';
        this.ContainerDataSet = [];
        this.UpdateDataSet = [];
        this.ReportDataSet = [];
        this.EditData = {};
    }
    ContainerLoadingShipmentProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights('231', '')
            .subscribe(function (data) {
            _this.RightsList = data;
            _this._loginService.checkVerify('Add', _this.RightsList); //For verify user access
        });
    };
    ContainerLoadingShipmentProgressComponent.prototype.ngOnChanges = function () { };
    ContainerLoadingShipmentProgressComponent.prototype.Search = function () {
        var _this = this;
        if (this.VesselName == '' && this.VoyageNo == '') {
            this._toasterService.toast('error', 'Alert', 'Please enter atleast any of Vessel Name & Voyage No');
            return false;
        }
        var _jsonData = {
            Type1: this.VesselName,
            Type2: this.VoyageNo,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        this._disabled.disableButton(this.searchButton);
        this._dataService.Common("Export/PendingShipment_ShipmentProgressFill", _jsonData)
            .subscribe(function (data) {
            _this._disabled.enableButton(_this.searchButton);
            if (data.Table != undefined) {
                if (data.Table.length > 0) {
                    _this.searchList = data.Table;
                }
                else {
                    _this.searchList = [];
                    _this._toasterService.toast('info', 'Data', 'No Record Found.');
                }
            }
        });
    };
    ContainerLoadingShipmentProgressComponent.prototype.rowSearchSendClick = function (RtNo, VslName, VoyageNo, ETD) {
        this.ErrorMessage = "Please Wait Preparing Data....";
        this.VesselName = VslName;
        this.getContainerData(RtNo);
    };
    ContainerLoadingShipmentProgressComponent.prototype.getContainerData = function (rnno) {
        var _this = this;
        this.ContainerDataSet = [];
        var _jsonData = {
            ExptVessel: rnno,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/ContainerLoadingConf_ShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.ErrorMessage = '';
            _this.viewType = 'View';
            _this.ContainerDataSet = data;
        });
    };
    ContainerLoadingShipmentProgressComponent.prototype.editdata = function (event) {
        var _this = this;
        this.ErrorMessage = 'Please Wait Fetching Data....';
        this.EditData = event;
        var _jsonData = {
            ExptVessel: event.EXPT_RTNO,
            ContainerNo: event.CONTAINERNO,
            MultiDest: event.MULTIDEST,
            Dest: event.DEST,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/ContainerLoadingConf_ShipmentProgress_Populate", _jsonData)
            .subscribe(function (data) {
            _this.ErrorMessage = '';
            _this.viewType = 'Update';
            _this.UpdateDataSet = data;
        });
    };
    ContainerLoadingShipmentProgressComponent.prototype.reportdata = function (event) {
        this.ReportDataSet = event;
        this.viewType = 'Report';
    };
    ContainerLoadingShipmentProgressComponent.prototype.back = function (event) {
        if (event) {
            this.viewType = 'Search';
            this.VesselName = '';
            this.VoyageNo = '';
            this.searchList = [];
        }
    };
    ContainerLoadingShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerLoadingShipmentProgressComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerLoadingShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitContainerButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerLoadingShipmentProgressComponent.prototype, "submitContainerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], ContainerLoadingShipmentProgressComponent.prototype, "fontDisabled", void 0);
    ContainerLoadingShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./container-loading-confirmation.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/container-loading-confirmation.sp.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"]])
    ], ContainerLoadingShipmentProgressComponent);
    return ContainerLoadingShipmentProgressComponent;
}());

var ViewContainerLoadingShipmentProgressComponent = /** @class */ (function () {
    function ViewContainerLoadingShipmentProgressComponent() {
        this.DataSet = [];
        this.editdata = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backtosearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.VesselDetail = {};
        this.ContainerList = [];
        this.Header = '';
        this.NewVessel = '';
        this.ErrorMessage = '';
        this.keys = [];
    }
    ViewContainerLoadingShipmentProgressComponent.prototype.ngOnInit = function () { };
    ViewContainerLoadingShipmentProgressComponent.prototype.ngOnChanges = function () {
        this.VesselDetail = this.DataSet.Table[0];
        this.ContainerList = this.DataSet.Table1;
        if (this.ContainerList.length > 0) {
            this.ContainerList = this.DataSet.Table1;
            this.keys = Object.keys(this.ContainerList[0]);
        }
    };
    ViewContainerLoadingShipmentProgressComponent.prototype.edit = function (expt_rtno, multidest, dest, containerno) {
        this.editdata.emit({ EXPT_RTNO: expt_rtno, MULTIDEST: multidest, DEST: dest, CONTAINERNO: containerno });
    };
    ViewContainerLoadingShipmentProgressComponent.prototype.back = function () {
        this.backtosearch.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewContainerLoadingShipmentProgressComponent.prototype, "DataSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewContainerLoadingShipmentProgressComponent.prototype, "editdata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewContainerLoadingShipmentProgressComponent.prototype, "backtosearch", void 0);
    ViewContainerLoadingShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-container-loading-view',
            template: __webpack_require__(/*! raw-loader!./view-container-loading-confirmation.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/view-container-loading-confirmation.sp.component.html"),
            styles: [".scroll::-webkit-scrollbar{width:10px}.scroll::-webkit-scrollbar-track{background:#f1f1f1}.scroll::-webkit-scrollbar-thumb{background:#888}.scroll::-webkit-scrollbar-thumb:hover{background:#555}"]
        }),
        __metadata("design:paramtypes", [])
    ], ViewContainerLoadingShipmentProgressComponent);
    return ViewContainerLoadingShipmentProgressComponent;
}());

var UpdateContainerLoadingShipmentProgressComponent = /** @class */ (function () {
    function UpdateContainerLoadingShipmentProgressComponent(_dataService, _disabled, _loginService, _toasterService) {
        this._dataService = _dataService;
        this._disabled = _disabled;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this.DataSet = [];
        this.backtosearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updatedata = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.RotationNo = '';
        this.VoyageNo = '';
        this.VesselName = '';
        this.LastCartingDate = '';
        this.ETD = '';
        this.ActSailingDate = '';
        this.ContainerNo = '';
        this.NoOfPackage = '';
        this.TotalVolume = '';
        this.AgentName = '';
        this.Destination = '';
        this.MessageLoadNotDone = '';
        this.LabelLoadOriginDt = '';
        this.hiddenLoadDate = '';
        this.hiddenLoadDateOne = '';
        this.hiddenLoadDateTwo = '';
        this.CheckLoadOriginDt = false;
        this.MessageLoadOriginDtMsg = '';
        this.TransType = 'Direct';
        this.CityList = [];
        this.TransPortOne = null;
        this.ConnVesselList = [];
        this.ConnVesselListOne = [];
        this.ConnVesselOne = null;
        this.disableEtdPort = true;
        this.EtdPort = null;
        this.ATAPort = null; // Actual arrival at transhipment port incase of SEA - AIR
        this.ETA = null;
        this.MessageConnLoadNotDone = '';
        this.LabelLoadOrigin2Dt = '';
        this.LoadOrigin2Dt = false;
        this.MessageLoadOrigin2Dt = '';
        this.TransPortTwo = null;
        this.ConnVesselTwo = null;
        this.ConnVesselListTwo = [];
        this.EtdPortTwo = null;
        this.disableEtdPortTwo = true;
        this.ETATwo = null;
        this.MessageConnLoadNotDone1 = '';
        this.LabelLoadOrigin3Dt = '';
        this.LoadOrigin3Dt = false;
        this.MessageLoadOrigin3Dt = '';
        this.OnwardTrans = false;
        this.OnwardTransBy = null;
        this.From = null;
        this.LabelTo = '';
        this.Cost = '';
        this.ETAThree = null;
        this.CurrentDate = "";
        this.PlcaRecptlist = [];
        this.PlcRecpt = null;
        this.precarby = null;
        this.EtdPor = null;
        this.EtdporHr = null;
        this.EtdporMin = null;
        this.EtaPol = null;
        this.EtaPolHr = null;
        this.EtaPolMin = null;
        this.pracarrieagedisable = true;
    }
    UpdateContainerLoadingShipmentProgressComponent.prototype.ngOnInit = function () {
        this.CurrentDate = new Date();
        var dd = this.CurrentDate.getDate();
        var mm = this.CurrentDate.getMonth() + 1;
        var yyyy = this.CurrentDate.getFullYear();
        dd = (dd < 10) ? '0' + dd : dd;
        mm = (mm < 10) ? '0' + mm : mm;
        this.CurrentDate = dd + '/' + mm + '/' + yyyy;
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.ngOnChanges = function () {
        if (this.DataSet.Table != undefined) {
            this.CityList = this.DataSet.Table1;
            this.ConnVesselList = this.DataSet.Table4;
            this.PlcaRecptlist == this.DataSet.Table5;
            if (this.DataSet.Table5.length > 0) {
                this.pracarrieagedisable == false;
            }
            else {
                this.pracarrieagedisable = true;
            }
            this.fillData(this.DataSet.Table[0]);
        }
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.fillData = function (data) {
        this.RotationNo = data.VSL_RTNO;
        this.VoyageNo = data.VSL_VOYNO;
        this.VesselName = data.VSL_NAME;
        this.LastCartingDate = data.CARTING;
        this.ETD = data.ETD;
        this.ActSailingDate = data.SAILING;
        this.ContainerNo = data.CONTAINERNO + ' - ' + data.SIZE + ' - ' + data.CONTAINERSTATUS;
        this.NoOfPackage = data.NOOFPKGS;
        this.TotalVolume = data.VOLUME;
        this.AgentName = data.AGT_NAME;
        this.Destination = data.DESTINATION;
        this.MessageLoadNotDone = (data.MSG != "") ? data.MSG : '';
        if (data.VERIFIED == 'Y') {
            if (data.LOADDT != '') {
                this.LabelLoadOriginDt = data.LOADDT;
                this.CheckLoadOriginDt = true;
                this.hiddenLoadDate = data.LOADDT;
            }
            else {
                this.LabelLoadOriginDt = '';
                this.hiddenLoadDate = 'CHECK';
            }
            this.MessageLoadOriginDtMsg = '';
        }
        else {
            this.hiddenLoadDate = '';
            this.MessageLoadOriginDtMsg = 'CONTAINER IS NOT VERIFIED..SO YOU CANT PUT THE LOADING CONFIRMATION DATE';
        }
        //hdLoaddt.Value = .Item("LOADDT").ToString.Trim
        this.TransType = (data.DIRECTVSL == "NO") ? 'Transhipment' : 'Direct';
        this.TransPortOne = (data.TRANSPORT1 != "") ? data.TRANSPORT1 : null;
        this.changePort(this.TransPortOne);
        this.ConnVesselOne = (data.CONVESSEL1 != "") ? data.CONVESSEL1 : null;
        this.EtdPort = (data.ETDPORT1 != "") ? this._dataService.stringdttoArry(data.ETDPORT1) : null;
        this.ETA = (data.ETA1 != "") ? this._dataService.stringdttoArry(data.ETA1) : null;
        this.MessageConnLoadNotDone = (data.MSG1 != "") ? data.MSG1 : '';
        if (data.LOADDT != '') {
            if (data.PORT1LOADDT != '') {
                this.LabelLoadOrigin2Dt = data.PORT1LOADDT;
                this.LoadOrigin2Dt = true;
                this.hiddenLoadDateOne = data.PORT1LOADDT;
            }
            else {
                this.LabelLoadOrigin2Dt = '';
                this.hiddenLoadDateOne = 'CHECK';
            }
        }
        else {
            this.hiddenLoadDateOne = '';
            this.MessageLoadOrigin2Dt = 'Please enter & save the CONTAINER LOADING AT ORIGIN CONFIRMATION DATE';
        }
        this.TransPortTwo = (data.TRANSPORT2 != "") ? data.TRANSPORT2 : null;
        this.ConnVesselTwo = (data.CONVESSEL2 != "") ? data.CONVESSEL2 : null;
        this.EtdPortTwo = (data.ETDPORT2 != "") ? this._dataService.stringdttoArry(data.ETDPORT2) : null;
        this.ETATwo = (data.ETA2 != "") ? this._dataService.stringdttoArry(data.ETA2) : null;
        this.MessageConnLoadNotDone1 = (data.MSG2 != "") ? data.MSG2 : '';
        if (data.PORT1LOADDT != '') {
            if (data.PORT2LOADDT != '') {
                this.LabelLoadOrigin3Dt = data.PORT2LOADDT;
                this.LoadOrigin3Dt = false;
                this.hiddenLoadDateTwo = data.PORT2LOADDT;
            }
            else {
                this.LabelLoadOrigin3Dt = '';
                this.LoadOrigin3Dt = false;
                this.hiddenLoadDateTwo = 'CHECK';
            }
        }
        else {
            this.hiddenLoadDateTwo = '';
            this.MessageLoadOrigin3Dt = 'Please enter & save the CONTAINER LOADING AT TRANSHIPMENT PORT 1 CONFIRMATION DATE';
        }
        if (data.ONWARDTRANS == 'Y') {
            this.OnwardTrans = true;
            this.OnwardTransBy = (data.ONWARDTRANSBY != "") ? data.ONWARDTRANSBY : null;
            this.From = (data.ONWARDTRANSPORT != "") ? data.ONWARDTRANSPORT : null;
            this.LabelTo = data.DESTINATION;
            this.Cost = (data.ONWARDTRANSCOST != "") ? data.ONWARDTRANSCOST : null;
        }
        this.precarby = (data.PRECRGFRM != "") ? data.PRECRGFRM : null;
        this.PlcRecpt = (data.PREPOR != "") ? data.PREPOR : null;
        this.EtdPor = (data.PREETDPOR != "") ? data.PREETDPOR : null;
        this.EtdporHr = (data.PREETDPORHRS != "") ? data.PREETDPORHRS : null;
        this.EtdporMin = (data.PreETDPorMin != "") ? data.PreETDPorMin : null;
        this.EtaPol = (data.PREETAPOL != "") ? data.PREETAPOL : null;
        this.EtaPolHr = (data.PREETAPOLHRS != "") ? data.PREETAPOLHRS : null;
        this.EtaPolMin = (data.PreETAPolMin != "") ? data.PreETAPolMin : null;
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.changePort = function (port_code) {
        if (port_code != null) {
            this.ConnVesselListOne = this.ConnVesselList.filter(function (search) { return search.PORT_CODE === port_code; });
        }
        else {
            this.ConnVesselListOne = [];
        }
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.changePortTwo = function (port_code) {
        if (port_code != null) {
            this.ConnVesselListTwo = this.ConnVesselList.filter(function (search) { return search.PORT_CODE === port_code; });
        }
        else {
            this.ConnVesselListTwo = [];
        }
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.callPortEtd = function (connvesselone) {
        if (connvesselone != null) {
            var filterData = this.ConnVesselListOne.filter(function (search) { return search.VALUEFIELD === connvesselone; });
            if (filterData.length > 0) {
                this.disableEtdPort = (filterData[0].TEXTFIELD.substring(0, 3) === 'TBA') ? false : true;
            }
        }
        else {
            this.disableEtdPort = true;
        }
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.changePortEtdTwo = function (connvesseltwo) {
        if (connvesseltwo != null) {
            var filterData = this.ConnVesselListTwo.filter(function (search) { return search.VALUEFIELD === connvesseltwo; });
            if (filterData.length > 0) {
                this.disableEtdPortTwo = (filterData[0].TEXTFIELD.substring(0, 3) === 'TBA') ? false : true;
            }
        }
        else {
            this.disableEtdPortTwo = true;
        }
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.validate = function () {
        if (this.TransType == 'Direct') {
            if (this.LabelLoadOriginDt != "") {
                if (this.ETA == null) {
                    this._toasterService.toast('error', 'Alert', 'ETA can not be blank');
                    return false;
                }
                if (this.ConnVesselOne != null) {
                    if (this.ConnVesselOne.substring(0, 3) == "MUM") {
                        if (this.EtdPort == null) {
                            this._toasterService.toast('error', 'Alert', 'ETD at transshipment port1 can not be blank');
                            return false;
                        }
                    }
                }
                if (this.CheckLoadOriginDt == true && this.TransType != 'Direct') {
                    if (this.TransPortOne == this.TransPortTwo) {
                        this._toasterService.toast('error', 'Alert', 'Transhipment port1 and Transhipment port2 can not be same');
                        return false;
                    }
                    if (this.RotationNo == this.ConnVesselTwo) {
                        this._toasterService.toast('error', 'Alert', 'Main Vessel and Connecting Vessel2 can not be same');
                        return false;
                    }
                    if (this.ConnVesselOne == this.ConnVesselTwo) {
                        this._toasterService.toast('error', 'Alert', 'Connecting Vessel1 and Connecting Vessel2 can not be same');
                        return false;
                    }
                    if (this.ConnVesselTwo != null) {
                        if (this.ConnVesselTwo.substring(0, 3) == "MUM") {
                            if (this.EtdPortTwo == null) {
                                this._toasterService.toast('error', 'Alert', 'ETD at transshipment port2 can not be blank');
                                return false;
                            }
                        }
                    }
                }
            }
        }
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.Update = function () {
        var _this = this;
        if (this.validate() == false) {
            return false;
        }
        var EXPT_VESSEL = this.EditData.EXPT_RTNO;
        var CONTAINERNO = this.EditData.CONTAINERNO;
        var DESTPORT = this.EditData.DEST;
        var EXPT_AGENT = this.DataSet.Table[0].EXPT_AGENT;
        var LOADDT = this.hiddenLoadDate;
        var PORT1LOADDT;
        var PORT2LOADDT;
        if (this.LoadOrigin2Dt == true) {
            PORT1LOADDT = this.CurrentDate;
        }
        else {
            PORT1LOADDT = "";
        }
        if (this.LoadOrigin3Dt == true) {
            PORT2LOADDT = this.CurrentDate;
        }
        else {
            PORT2LOADDT = "";
        }
        //let PORT1LOADDT = this.hiddenLoadDateOne;
        //let PORT2LOADDT = this.hiddenLoadDateTwo;
        if (LOADDT == "CHECK") {
            LOADDT = this.CurrentDate;
        }
        var TRANSPORT1 = (this.TransPortOne != null) ? this.TransPortOne : "";
        var CONVESSEL1 = (this.ConnVesselOne != null) ? this.ConnVesselOne : "";
        var ETA1 = (this.ETA != null) ? this.ETA.formatted : "";
        var TRANSPORT2 = (this.TransPortTwo != null) ? this.TransPortTwo : "";
        var CONVESSEL2 = (this.ConnVesselTwo != null) ? this.ConnVesselTwo : "";
        var ETA2 = (this.ETATwo != null) ? this.ETATwo.formatted : "";
        var ata = (this.ATAPort != null) ? this.ATAPort.formatted : "";
        var etdpordt = (this.EtdPor != null) ? this.EtdPor.formatted : "";
        var etapoldt = (this.EtaPol != null) ? this.EtaPol.formatted : "";
        var DIRECTVSL;
        if (this.TransType == "Direct") {
            DIRECTVSL = "YES";
        }
        else {
            DIRECTVSL = "NO";
        }
        var ONWARDTRANS = "", ONWARDTRANSBY = "", ONWARDTRANSPORT = "", ONWARDTRANSCOST = "", ETA3 = "";
        if (this.OnwardTrans == true) {
            ONWARDTRANS = "Y";
            ONWARDTRANSBY = (this.OnwardTransBy != null) ? this.OnwardTransBy : "";
            ONWARDTRANSPORT = (this.From != null) ? this.From : "";
            ONWARDTRANSCOST = "";
            ETA3 = (this.ETAThree != null) ? this.ETAThree.formatted : "";
        }
        var ETDPORT1 = (this.EtdPort != null) ? this.EtdPort.formatted : "";
        var ETDPORT2 = (this.EtdPortTwo != null) ? this.EtdPortTwo.formatted : "";
        var MULTI_DEST = this.EditData.MULTIDEST;
        var _jsonData = {
            Expt_Vessel: EXPT_VESSEL,
            ContainerNo: CONTAINERNO,
            DestPort: DESTPORT,
            Expt_Agent: EXPT_AGENT,
            LoadDt: LOADDT,
            Port1loaddt: PORT1LOADDT,
            port2loaddt: PORT2LOADDT,
            TransPortOne: TRANSPORT1,
            ConVesselOne: CONVESSEL1,
            EtaOne: ETA1,
            TransportOne: TRANSPORT2,
            ConVsselTwo: CONVESSEL2,
            Eta2: ETA2,
            DirectVsl: DIRECTVSL,
            OnwardTrans: ONWARDTRANS,
            OnwardTransBy: ONWARDTRANSBY,
            OnwardTransPort: ONWARDTRANSPORT,
            OnwardTransCost: ONWARDTRANSCOST,
            Eta3: ETA3,
            EtdPort1: ETDPORT1,
            EtdPort2: ETDPORT2,
            Multi_Dest: MULTI_DEST,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            MakerIp: this._loginService.getLogin()[0].MAKERIP,
            ATAPort: ata,
            precarby: this.precarby,
            PlcRecpt: this.PlcRecpt,
            EtdPor: etdpordt,
            EtdporHr: this.EtdporHr,
            EtdporMin: this.EtdporMin,
            EtaPol: etapoldt,
            EtaPolHr: this.EtaPolHr,
            EtaPolMin: this.EtaPolMin
        };
        this._disabled.disableButton(this.updateButton);
        this._dataService.Common("Export/ContainerLoadingConf_ShipmentProgress_Update", _jsonData)
            .subscribe(function (data) {
            _this._disabled.disableButton(_this.updateButton);
            _this.updatedata.emit(data);
        });
    };
    UpdateContainerLoadingShipmentProgressComponent.prototype.Abort = function () { };
    UpdateContainerLoadingShipmentProgressComponent.prototype.back = function () {
        this.backtosearch.emit(true);
    };
    UpdateContainerLoadingShipmentProgressComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateContainerLoadingShipmentProgressComponent.prototype, "DataSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateContainerLoadingShipmentProgressComponent.prototype, "EditData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateContainerLoadingShipmentProgressComponent.prototype, "backtosearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateContainerLoadingShipmentProgressComponent.prototype, "updatedata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateContainerLoadingShipmentProgressComponent.prototype, "updateButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('abortButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateContainerLoadingShipmentProgressComponent.prototype, "abortButton", void 0);
    UpdateContainerLoadingShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-container-loading-update',
            template: __webpack_require__(/*! raw-loader!./update-container-loading-confirmation.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/update-container-loading-confirmation.sp.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], UpdateContainerLoadingShipmentProgressComponent);
    return UpdateContainerLoadingShipmentProgressComponent;
}());

var ReportContainerLoadingShipmentProgressComponent = /** @class */ (function () {
    function ReportContainerLoadingShipmentProgressComponent(_dataService, _loginService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this.DataSet = [];
        this.backtosearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.UpdatedList = [];
        this.keys = [];
    }
    ReportContainerLoadingShipmentProgressComponent.prototype.ngOnInit = function () { };
    ReportContainerLoadingShipmentProgressComponent.prototype.ngOnChanges = function () {
        if (this.DataSet.Table1 != undefined) {
            var StrBody = "";
            this.UpdatedList = this.DataSet.Table1;
            this.keys = Object.keys(this.UpdatedList[0]);
            if (this.DataSet.Table1.length > 0) {
                if (this.DataSet.Table.length > 0) {
                    if (this.DataSet.Table1[0].STATUSTEXT.trim() != "") {
                        StrBody = "" + this.DataSet.Table1[0].VSLDET;
                        StrBody = StrBody + "<br>" + this.DataSet.Table1[0].CONTAINERNO;
                        //StrBody = StrBody + "<br>" + this.DataSet.Table[0].MAIN_VESSEL;
                        StrBody = StrBody + "<br>" + this.DataSet.Table1[0].CNEE_NAME;
                        StrBody = StrBody + "<br>" + this.DataSet.Table1[0].DEST;
                        StrBody = StrBody + "<BR><BR>";
                        StrBody = StrBody + "<br>" + this.DataSet.Table1[0].ETA;
                        // StrBody = StrBody + "<br>" + "BY " + this._loginService.getLogin()[0].CMP_USERNAME;
                        // this.sendMail(StrBody);
                        var _jsonData = {
                            mail_body: StrBody,
                            ipadd: this.DataSet.Table1[0].IPADDS,
                            Frmmail: this.DataSet.Table1[0].FROMMAIL,
                            Tomail: this.DataSet.Table1[0].TO,
                            cc: "",
                            bcc: this.DataSet.Table1[0].BCC,
                            pwd: this.DataSet.Table1[0].PWD,
                            subject: "ETA HAS BEEN MODIFIED " + this.DataSet.Table1[0].CONTAINERNO
                        };
                        this._dataService.getData("Export/ContainerLoadingConf_ShipmentProgress_SendMail", _jsonData)
                            .subscribe(function (data) {
                            alert(data);
                        });
                    }
                }
            }
        }
    };
    ReportContainerLoadingShipmentProgressComponent.prototype.back = function () {
        this.backtosearch.emit(true);
    };
    ReportContainerLoadingShipmentProgressComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportContainerLoadingShipmentProgressComponent.prototype, "DataSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReportContainerLoadingShipmentProgressComponent.prototype, "backtosearch", void 0);
    ReportContainerLoadingShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-container-loading-report',
            template: __webpack_require__(/*! raw-loader!./report-container-loading-confirmation.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/report-container-loading-confirmation.sp.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], ReportContainerLoadingShipmentProgressComponent);
    return ReportContainerLoadingShipmentProgressComponent;
}());

var PrepaidfrtApprovShipmentProgressComponent = /** @class */ (function () {
    function PrepaidfrtApprovShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
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
        this.Id = '';
        this.ExptNo = null;
        this.ErrorMessage = '';
        this.frtApprdt = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    PrepaidfrtApprovShipmentProgressComponent.prototype.ngOnInit = function () {
        if (this.ExptNo.length != 15) {
            this.ErrorMessage = 'Invalid Export No. or Job No';
        }
        this.getData('PRPFRT_APPROV', this.ExptNo);
    };
    PrepaidfrtApprovShipmentProgressComponent.prototype.ngOnChanges = function () { };
    PrepaidfrtApprovShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        this.disable.disableButton(this.submitButton);
    };
    PrepaidfrtApprovShipmentProgressComponent.prototype.getData = function (formType, exptNo) {
        var _this = this;
        var _jsonData = {
            Type1: formType,
            Type2: exptNo,
            Type3: this._loginService.getLogin()[0].GUID,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/ShipmentProgressPopulate", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                _this.Id = data.Table[0].ID;
                _this.frtApprdt = (data.Table[0].EXPT_PPFRTAPPDT != "") ? _this._dataService.stringdttoArry(data.Table[0].EXPT_PPFRTAPPDT) : null;
            }
            else {
                alert('Not Found!');
            }
        });
    };
    PrepaidfrtApprovShipmentProgressComponent.prototype.submit = function () {
        var _this = this;
        var aprvdt;
        aprvdt = (this.frtApprdt != null) ? this.frtApprdt.formatted : "";
        if (aprvdt == "") {
            alert("Prepaid approved by shipper Date can`t blank!");
            return false;
        }
        this.disable.disableButton(this.submitButton);
        var _jsonData = {
            Type1: this.Id,
            Type2: this.ExptNo,
            Type3: (this.frtApprdt != null) ? this.frtApprdt.formatted : "",
            Type4: this._loginService.getLogin()[0].CMPID,
            Type5: this._loginService.getLogin()[0].MAKERIP //change later by ip
        };
        this._dataService.Common("Export/PrepaidfrtdtUpdateShipmentProgress", _jsonData)
            .subscribe(function (data) {
            _this.disable.enableButton(_this.submitButton);
            if (data.Table != undefined) {
                if (data.Table[0].STATUS == 100) {
                    alert("Prepaid approved by shipper Date updated successfully!");
                    _this._router.navigate(['export/shipment-progress/Prepaid-freight-apprvd-search']);
                }
                else if (data.Table[0].STATUS == 102) {
                    alert('Error! Please contact System Administrator.');
                }
            }
        });
    };
    PrepaidfrtApprovShipmentProgressComponent.prototype.abort = function () {
        this._router.navigate(['export/shipment-progress/Prepaid-freight-apprvd-search']);
    };
    PrepaidfrtApprovShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrepaidfrtApprovShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], PrepaidfrtApprovShipmentProgressComponent.prototype, "disable", void 0);
    PrepaidfrtApprovShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-prepaid-frt',
            template: __webpack_require__(/*! raw-loader!./pre-frt-approved-shipper.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/pre-frt-approved-shipper.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], PrepaidfrtApprovShipmentProgressComponent);
    return PrepaidfrtApprovShipmentProgressComponent;
}());

var dimensionShipmentProgressComponent = /** @class */ (function () {
    function dimensionShipmentProgressComponent(_router, _dataService, _loginService, _activatedRoute, _toasterService) {
        var _this = this;
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.ExptNo = null;
        this._activatedRoute.params.subscribe(function (params) { _this.ExptNo = params.exptno; });
    }
    dimensionShipmentProgressComponent.prototype.ngOnInit = function () {
    };
    dimensionShipmentProgressComponent.prototype.ngOnChanges = function () { };
    dimensionShipmentProgressComponent.prototype.ngAfterViewInit = function () {
        //this.disable.disableButton(this.submitButton);
    };
    dimensionShipmentProgressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], dimensionShipmentProgressComponent.prototype, "submitButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_5__["FontChangerComponent"])
    ], dimensionShipmentProgressComponent.prototype, "disable", void 0);
    dimensionShipmentProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-progress-dimension',
            template: __webpack_require__(/*! raw-loader!./dimension.sp.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/shipment_progress/dimension.sp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], dimensionShipmentProgressComponent);
    return dimensionShipmentProgressComponent;
}());



/***/ })

}]);
//# sourceMappingURL=shipment_progress-expt-shipment-process-module.js.map