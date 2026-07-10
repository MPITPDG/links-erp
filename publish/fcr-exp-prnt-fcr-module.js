(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcr-exp-prnt-fcr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/fcr/exp_prt_fcr_generate.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/fcr/exp_prt_fcr_generate.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\"> \r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t\t\t<div class=\"col-md-8\">\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t<tbody style='height:30px'>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tHOUSE B/L\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td  >\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Job No</b><span class=\"col-form-span-error\">*</span></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"exJobno\" type=\"text\"  maxlength=\"15\"  class=\"form-control width150\">\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"centerlabel\" >\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\" id=\"btnSearch\" name=\"btnSearch\"    (click)=\"jobserch()\"> <i class=\"fa fa-search\"></i> Search</button>\r\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"exptdt.length>0\" class=\"btn btn-sm btn-danger   \" type=\"reset\"     (click)=\"onpreview()\"><i class=\"fa fa-print \"></i> Preview</button>\r\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"exptdt.length>0\" class=\"btn btn-sm btn-danger   \" type=\"reset\"     (click)=\"onprint()\"><i class=\"fa fa-print \"></i> Print</button>\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t<tbody *ngIf=\"exptdt.length>0\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tLIST OF CONSIGNMENTS\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Shipper</b></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\" >\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-span-label\" >{{ shippername }}</label>\t  \r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Vessel </b></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-span-label\" >{{ vesselname }}</label>\t  \r\n\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"> <b>Voyage</b></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-span-label\" >{{ vslvoyage }}</label>\t  \r\n\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Vessel Agent </b></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-span-label\" >{{ vslAgt }}</label>\t \r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>BL Type</b> </span> <span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"   [(ngModel)]=\"bltype\" [disabled]=\"switchhbl!= '0'\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listBltype\" value={{d.HBLCODE}}>{{d.HBLNAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Freight Type</b> </span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"   [(ngModel)]=\"frttype\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"CC\">CC</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"PP\">PP</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Freight Currency</b> </span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\" [(ngModel)]=\"currency\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listCurreny\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Freight Amoun</b>t </span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td  >\r\n\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"frtAmt\" type=\"text\"  class=\"form-control width150\">\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"> <b>House B/L Date</b></span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<my-date-picker name=\"dtbld\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"bldate\" required></my-date-picker>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>Delivery Apply To </b></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td >\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"   [(ngModel)]=\"deliveryTo\">\r\n\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of listSupp\" value={{d.SUP_CODE}}>{{d.SUPNAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</td> \r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\"   ><input type=\"checkbox\" [disabled]=\"bltype!= 'M' \" [(ngModel)]=\"switchhbl\" (change)=\"checkValue(switchhbl?'1':'')\"  >\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>switch HBL</b></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr class=\"title-head trbg\" *ngIf=\"ishablissue=='1'; else  otherhbl\">\r\n\t\t\t\t\t\t\t\t<!-- <tr> -->\r\n\t\t\t\t\t\t\t\t\t<td   *ngIf=\"FCRNo==''\"  class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tHOUSE B/L NO. WILL START WITH  {{pod}} \r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t <td   *ngIf=\"FCRNo!=''\"  class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tHOUSE B/L NO. \" {{FCRNo}} \"\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<ng-template #otherhbl> \r\n\t\t\t\t\t\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><b>HBL No.</b></span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td >\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t <input    type=\"text\" [(ngModel)]=\"FCRNo\" [disabled]=\"FCRNo != ''\"  class=\"form-control width120\"    />\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\tFOLLOWING EXPORT NOS. FOUND WITH ABOVE SHIPPER, VESSEL AND VESSEL AGENT\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"4\" *ngIf=\"exptdt.length>0\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\" >Select</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Jobno</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Consignee</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Pkgs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">grwt</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Pcs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- (change)=\"addhobno($event,d.EXPTNO)\" -->\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let d of exptdt\"  >\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\" [disabled]=\"FRMBL\" [(ngModel)]=\"d.SELEJOB\" > </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXPTNO}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXPT_CONSIGNEE}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXPT_NOOFPKGS}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXPT_GRWT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{d.EXPT_NOOFPCS}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <pre>{{exptdt | json}}</pre> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"card-footer rightlabel \"*ngIf=\"exptdt.length>0\">\r\n\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\" id=\"btnswtAdd\" style=\"BACKGROUND-COLOR: ORANGE;BORDER-COLOR: ORANGE;\"  *ngIf =\"viewswitch != '1'\"   (click)=\"GenSwitchBL()\" ><i class=\"fa fa-dot-circle-o\" ></i> Gen. Switch BL</button>\r\n\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\" id=\"btnAgtAdd\" name=\"btnAgtAdd\"   (click)=\"AddFCR()\" ><i class=\"fa fa-dot-circle-o\" ></i> Submit</button>\r\n\t\t\t<button class=\"btn btn-sm btn-danger\" type=\"reset\" id=\"btnAgtRest\" name=\"btnAgtrest\" (click)=\"ResetAll()\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n\t\t\t   \r\n\t\t</div>\r\n\t\t\r\n\t\t  \r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t</div>\r\n\t\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/fcr/exp_prt_fcr_printview.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/fcr/exp_prt_fcr_printview.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t\t\t<div class=\"col-md-8\">\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<app-fcr-printview   [hbltype]=\"Type\" *ngIf=\"Type=='F'\">\t</app-fcr-printview >\r\n\t\t\t\t\t\t<app-mto-printview  [hbltype]=\"Type\" *ngIf=\"Type=='M'\" >\t</app-mto-printview >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>  \r\n\t\t\t\t\t<div class=\"col-md-2\"></div>  \r\n\t\t\t\t</div>\r\n\t\t\t</div>         \r\n\t\t</div>\r\n\t\t<div class=\"card-footer rightlabel\">\r\n\t\t\t\r\n\t\t\t<!-- <button class=\"btn btn-sm btn-success\" type=\"submit\"   [disabled]=\"buttonStatus\" (click)=\"printUpdate()\"   ><i class=\"fa fa-dot-circle-o\" ></i> Update</button>\r\n\t\t\t<button class=\"btn btn-m btn-success\" type=\"submit\" [disabled]=\"buttonStatus\" (click)=\"Printdraft()\" ><i class=\"fa fa-dot-circle-o\"   ></i> Draftprint</button>\t\t\t\r\n\t\t\t<button class=\"btn btn-sm btn-danger\" type=\"reset\"   [disabled]=\"buttonStatus\" (click)=\"Print()\"><i class=\"fa fa-print \"></i> Print</button>\r\n\t\t\t&nbsp;&nbsp;<input type=\"checkbox\"  [(ngModel)]=\"expressbill\" (change)=\"checkValue($event)\"   >\r\n\t\t\t<span class=\"col-form-span-label \"><b>Express Bill </b></span> -->\r\n\t\t\t<table style=\"width:450px;\" align=\"center\" >\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"   [disabled]=\"buttonStatus\" (click)=\"printUpdate()\"   ><i class=\"fa fa-dot-circle-o\" ></i> Update</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button class=\"btn btn-m btn-success\" type=\"submit\" [disabled]=\"buttonStatus\" (click)=\"Printdraft()\" ><i class=\"fa fa-dot-circle-o\"   ></i> Draftprint</button><td>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-danger\" type=\"reset\"   [disabled]=\"buttonStatus\" (click)=\"Print()\"><i class=\"fa fa-print \"></i> Print</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"expressbill\" (change)=\"checkValue($event)\"   >\r\n\t\t\t\t\t<span class=\"col-form-span-label \"><b>Express Bill </b></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<!-- <select class=\"form-control width125\" [(ngModel)]=\"WaterMarkoption\" style=\"border-radius: 7px;\">\r\n\t\t\t\t\t\t\t<option value=\"\">--Please select--</option>\r\n\t\t\t\t\t\t\t<option value=\"1\">With Watermark</option>\r\n\t\t\t\t\t\t\t<option value=\"0\">Without Watermark</option>\r\n\t\t\t\t\t\t</select> -->\r\n\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"WaterMarkoption\" (change)=\"getwatermarkvalue($event)\"   >\r\n\t\t\t\t\t\t<span class=\"col-form-span-label \"><b>with watermark </b></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/fcr/exp_prt_print.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/fcr/exp_prt_print.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"col-md-8 mb-12\" >\t\t\t\t\r\n\t\t\t\t<app-fcr-print   [hbltype]=\"PType\" *ngIf=\"PType=='F'\">\t</app-fcr-print>\r\n\t\t\t\t<app-mto-print  [hbltype]=\"PType\" *ngIf=\"PType=='M'\" >\t</app-mto-print>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t</div>                 \r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t \r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/export/fcr/exp-prnt-fcr.module.ts":
/*!***************************************************!*\
  !*** ./src/app/export/fcr/exp-prnt-fcr.module.ts ***!
  \***************************************************/
/*! exports provided: ExportprntfcrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportprntfcrModule", function() { return ExportprntfcrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _exp_prnt_fcr_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exp-prnt-fcr.routing */ "./src/app/export/fcr/exp-prnt-fcr.routing.ts");
/* harmony import */ var _exp_prt_fcr_generate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exp_prt_fcr_generate.component */ "./src/app/export/fcr/exp_prt_fcr_generate.component.ts");
/* harmony import */ var _exp_prt_fcr_printview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exp_prt_fcr_printview.component */ "./src/app/export/fcr/exp_prt_fcr_printview.component.ts");
/* harmony import */ var _exp_prt_print_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exp_prt_print.component */ "./src/app/export/fcr/exp_prt_print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { ExptfcrpPreview } from './expt_fcrppreview.component';
var ExportprntfcrModule = /** @class */ (function () {
    function ExportprntfcrModule() {
    }
    ExportprntfcrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_exp_prnt_fcr_routing__WEBPACK_IMPORTED_MODULE_8__["ExportprntfcrRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_exp_prt_fcr_generate_component__WEBPACK_IMPORTED_MODULE_9__["ExptFCRGenerate"], _exp_prt_fcr_printview_component__WEBPACK_IMPORTED_MODULE_10__["ExptFCRPrintview"], _exp_prt_fcr_printview_component__WEBPACK_IMPORTED_MODULE_10__["ExptMTOprintview"], _exp_prt_fcr_printview_component__WEBPACK_IMPORTED_MODULE_10__["ExptPrintview"],
                _exp_prt_print_component__WEBPACK_IMPORTED_MODULE_11__["ExptFCRPrint"], _exp_prt_print_component__WEBPACK_IMPORTED_MODULE_11__["ExptMTOprint"], _exp_prt_print_component__WEBPACK_IMPORTED_MODULE_11__["ExptPrint"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportprntfcrModule);
    return ExportprntfcrModule;
}());



/***/ }),

/***/ "./src/app/export/fcr/exp-prnt-fcr.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/export/fcr/exp-prnt-fcr.routing.ts ***!
  \****************************************************/
/*! exports provided: ExportprntfcrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportprntfcrRoutingModule", function() { return ExportprntfcrRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exp_prt_fcr_generate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp_prt_fcr_generate.component */ "./src/app/export/fcr/exp_prt_fcr_generate.component.ts");
/* harmony import */ var _exp_prt_fcr_printview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp_prt_fcr_printview.component */ "./src/app/export/fcr/exp_prt_fcr_printview.component.ts");
/* harmony import */ var _exp_prt_print_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exp_prt_print.component */ "./src/app/export/fcr/exp_prt_print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { ExptfcrpPreview } from './expt_fcrppreview.component';
var routes = [
    {
        path: '',
        data: {
            title: 'FCR'
        },
        children: [
            { path: 'form', component: _exp_prt_fcr_generate_component__WEBPACK_IMPORTED_MODULE_2__["ExptFCRGenerate"], data: { title: 'FCR / Generation' } },
            { path: 'sea-bl-print-view', component: _exp_prt_fcr_printview_component__WEBPACK_IMPORTED_MODULE_3__["ExptPrintview"], data: { title: 'FCR / Preview' } },
            { path: 'sea-bl-print', component: _exp_prt_print_component__WEBPACK_IMPORTED_MODULE_4__["ExptPrint"], data: { title: 'FCR / Print' } },
        ]
    }
];
var ExportprntfcrRoutingModule = /** @class */ (function () {
    function ExportprntfcrRoutingModule() {
    }
    ExportprntfcrRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportprntfcrRoutingModule);
    return ExportprntfcrRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/fcr/exp_prt_fcr_generate.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/export/fcr/exp_prt_fcr_generate.component.ts ***!
  \**************************************************************/
/*! exports provided: ExptFCRGenerate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptFCRGenerate", function() { return ExptFCRGenerate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExptFCRGenerate = /** @class */ (function () {
    function ExptFCRGenerate(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrHbltypesharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this.loaderService = loaderService;
        this.baseUrl = ""; //'Export/Export_FCR_Pageload';
        this.exJobno = "";
        this.shippername = "";
        this.vesselname = "";
        this.vslvoyage = "";
        this.vslAgt = "";
        this.bltype = "";
        this.frttype = "";
        this.currency = "";
        this.bldate = null;
        this.deliveryTo = "";
        this.selJob = "";
        this.pod = "";
        this.frtAmt = "";
        this.jobnos = "";
        this.FCRNo = "";
        this.exptdt = [];
        this.listBltype = [];
        this.listCurreny = [];
        this.listSupp = [];
        this.switchhbl = false;
        this.viewswitch = '0';
        this.buttonStatus = false;
        this.buttonSearchStatus = false;
        this.FRMBL = false;
        this.ishablissue = "";
        this.DRAFTPRINT = "";
        this.ISPRINT = '0';
        this.buttonvisible = true;
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
            selectorWidth: '200px',
            disableSince: this.disableFutureDate()
        };
    }
    ExptFCRGenerate.prototype.disableFutureDate = function () {
        var d = new Date();
        var disabledDate;
        var year = new Date().getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        if (month === 12 && date === 31) { //For next year change
            disabledDate = { year: year + 1, month: 1, day: 1 };
        }
        else if (month < 12 && (date === 31 || date === 30 || date === 28 || date === 29)) { //For next month change
            disabledDate = { year: year, month: month + 1, day: 1 };
        }
        else { //For next day change
            disabledDate = { year: year, month: month, day: date + 1 };
        }
        return disabledDate;
    };
    ExptFCRGenerate.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(401, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        if (this._loginService.getLogin()[0].ISHBL == '1') {
            this.ishablissue = "1";
        }
        else {
            this.ishablissue = "0";
        }
    };
    ExptFCRGenerate.prototype.jobserch = function () {
        var _this = this;
        if (this.exJobno == "" || this.exJobno == null) {
            this._toasterService.toast('error', 'Error', "Please Enter export job no");
            return false;
        }
        this.loaderService.display(true);
        this.buttonStatus = true;
        this.buttonSearchStatus = true;
        this.baseUrl = 'Export/Export_FCR_Pageload';
        var jsonExport = { citycode: this._loginService.getLogin()[0].CITYCODE, EXPTNO: this.exJobno };
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.ISPRINT = data.Table[0].ISPRINT;
                _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                if (data.Table[0].FRMBL == "0") {
                    _this.FRMBL = false;
                }
                else {
                    _this.FRMBL = true;
                }
                _this.buttonStatus = false;
                if (data.Table1.length > 0) {
                    _this.exptdt = data.Table1;
                    _this.shippername = _this.exptdt[0].EXPT_EXPORTER;
                    _this.vesselname = _this.exptdt[0].EXPT_VESSEL;
                    _this.vslvoyage = _this.exptdt[0].vsl_voyno;
                    _this.vslAgt = _this.exptdt[0].EXPT_VSLAGENT;
                    _this.pod = _this.exptdt[0].POD;
                    _this.switchhbl = (_this.exptdt[0].isSwitcHblNo == "1") ? true : false;
                    if (_this.exptdt[0].EXPT_HBLNO.trim() == '') {
                        _this.bltype = -1;
                        _this.frttype = -1;
                        _this.currency = -1;
                        _this.FCRNo = '';
                    }
                    else {
                        _this.bltype = _this.exptdt[0].HBLTYPE;
                        _this.frttype = _this.exptdt[0].FRTYPE;
                        _this.currency = _this.exptdt[0].FRTCURR;
                        _this.FCRNo = _this.exptdt[0].EXPT_HBLNO;
                        _this.frtAmt = _this.exptdt[0].FRTAMT;
                        _this.bldate = (_this.exptdt[0].EXPT_HBLDT != "") ? _this._dataService.stringdttoArry(_this.exptdt[0].EXPT_HBLDT) : "";
                        if (_this.FCRNo != '' && _this.exptdt[0].isSwitcHblNo == "1" && _this.bltype == "M") {
                            _this.viewswitch = '1';
                        }
                        else if (_this.bltype != "M") {
                            _this.viewswitch = '1';
                        }
                        else {
                            _this.viewswitch = '0';
                        }
                    }
                }
                else {
                    _this.loaderService.display(false);
                    _this.buttonStatus = false;
                    _this._toasterService.toast('error', 'Error', "Please select vessel agent corresponding Ex-job !");
                }
                _this.listBltype = data.Table2;
                _this.listCurreny = data.Table3;
                _this.listSupp = data.Table4;
                _this.loaderService.display(false);
                _this._toasterService.toast('info', 'Complete', 'Data filled successfully');
            }
            else {
                _this.loaderService.display(false);
                _this.buttonStatus = false;
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
            }
        }, function (error) {
            _this.loaderService.display(false);
            _this.buttonStatus = false;
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
        }, function () {
        });
        if (this.ISPRINT == '1') {
            this.buttonvisible = false;
        }
        if (this.DRAFTPRINT == '3') {
            this.buttonvisible = false;
        }
        if (this.ISPRINT != '1' && this.DRAFTPRINT != '3') {
            this.buttonvisible = true;
        }
    };
    ExptFCRGenerate.prototype.GenSwitchBL = function () {
        var _this = this;
        if (this.bltype != "M") {
            this._toasterService.toast('error', 'Error', "Switch BL only for MTO !");
            return false;
        }
        if (this.switchhbl == false) {
            this._toasterService.toast('error', 'Error', "Please select Switch BL !");
        }
        if (confirm("Are you sure you are going to generate switch bl ?")) {
            this.loaderService.display(true);
            var jsonsExport = { FCRNO: this.FCRNo, CITYCODE1: this._loginService.getLogin()[0].CITYCODE1, CMPCODE: this._loginService.getLogin()[0].CMPCODE, CITYCODE: this._loginService.getLogin()[0].CITYCODE, USERNAME: this._loginService.getLogin()[0].CMP_USERNAME };
            this._dataService.Common("Export/EXPORT_SWICH_FCR_GENERATION", jsonsExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this._toasterService.toast('info', 'Complete', ' FCR NO. ' + data.Table[0].FCRNO);
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            return false;
        }
    };
    ExptFCRGenerate.prototype.AddFCR = function () {
        var _this = this;
        if (this.ISPRINT == '0' && this.DRAFTPRINT != '3') {
            this._loginService.verifyRights(401, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
            if (this.bldate == null) {
                this._toasterService.toast('error', 'Error', "Please select Hbl Date");
                this.buttonStatus = false;
                return false;
            }
            if (this.frttype == "" || this.frttype == "-1") {
                this._toasterService.toast('error', 'Error', "Please Enter Freight Type");
                this.buttonStatus = false;
                return false;
            }
            if (this.bltype == "" || this.bltype == "-1") {
                this._toasterService.toast('error', 'Error', "Please Enter Bl Type");
                this.buttonStatus = false;
                return false;
            }
            for (var _i = 0, _a = this.exptdt; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj.SELEJOB == "null" || obj.SELEJOB == true) {
                    this.jobnos = this.jobnos + obj.EXPTNO + ',';
                }
            }
            if (this.jobnos == '') {
                this.jobnos = this.exJobno + ',';
            }
            if (this.jobnos == "") {
                this._toasterService.toast('warning', 'warning', "Please select atleast one export job no");
                return false;
            }
            if (this._loginService.getLogin()[0].ISHBL == '0') {
                if (this.FCRNo == '') {
                    this._toasterService.toast('warning', 'warning', "Please Enter HBL No");
                    return false;
                }
            }
            //  this.bltype 
            this.listcnt = this.listBltype.filter(function (cntrylist) { return cntrylist.HBLCODE == _this.bltype; });
            var hblname = this.listcnt[0].HBLNAME;
            if (this.FCRNo == "") {
                if (confirm("Are you sure you are going to generate " + hblname + '?')) { //this.generateFCR();  
                    if (this.switchhbl == true) {
                        if (confirm("Are you sure you are going to generate switch bl ?")) {
                            this.generateFCR();
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        this.generateFCR();
                    }
                }
            }
            else {
                this.generateFCR();
            }
            // if (this.switchhbl==true){
            //     if( confirm("Are you sure you are going to generate switch bl ?") )  {   
            //         this.generateFCR();    }
            // } else{return false;}
        }
        else {
            this._toasterService.toast('warning', 'warning', "You cannot update Print already taken");
            return false;
        }
    };
    ExptFCRGenerate.prototype.generateFCR = function () {
        var _this = this;
        this.baseUrl = 'Export/Export_FCR_GENERATION';
        this.loaderService.display(true);
        var isswitchbl = '0';
        if (this.switchhbl == true) {
            isswitchbl = '1';
        }
        else {
            isswitchbl = '0';
        }
        var jsonExport = { citycode: this._loginService.getLogin()[0].CITYCODE, EXPTNO: this.exJobno, jobnos: this.jobnos, POD: this.pod, citycode1: this._loginService.getLogin()[0].CITYCODE1, FCRDT: this.bldate.formatted, FRTYPE: this.frttype, FRTCur: this.currency, FRTAMT: this.frtAmt, HBLType: this.bltype, DeliveryTo: this.deliveryTo, cmpcode: this._loginService.getLogin()[0].CMPCODE, username: this._loginService.getLogin()[0].CMP_USERNAME, FCRNO: this.FCRNo, switchhbl: isswitchbl };
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this._toasterService.toast('info', 'Complete', ' FCR NO. ' + data.Table1[0].FCRNO);
                _this.buttonStatus = false;
                if (_this.bltype == 'H') {
                    _this.bltype = 'F';
                }
                _this._fcrHbltypesharedvataSerice.fcrHbltypesharedData = _this.bltype;
                _this.loaderService.display(false);
                // if(data.Table1.length==1){                    
                _this._fcrsharedvataSerice.fcrsharedData = data.Table1[0].FCRNO;
                _this._router.navigate(['/export/fcr/sea-bl-print-view']);
                // }
                // else {  this.listFCR=data.Table1;  }
            }
            else {
                _this.loaderService.display(false);
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.buttonStatus = false;
            }
        });
    };
    ExptFCRGenerate.prototype.checkValue = function (event) {
        console.log(event);
    };
    ExptFCRGenerate.prototype.onprint = function () {
        var _this = this;
        if (this.FCRNo.trim() != '') {
            this._loginService.verifyRights(401, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
            if (this.bltype == "H") {
                this._fcrHbltypesharedvataSerice.fcrHbltypesharedData = "F";
            }
            else {
                this._fcrHbltypesharedvataSerice.fcrHbltypesharedData = this.bltype;
            }
            //  this._fcrHbltypesharedvataSerice.fcrHbltypesharedData = this.bltype;
            this._fcrsharedvataSerice.fcrsharedData = this.FCRNo;
            this._router.navigate(['/export/fcr/sea-bl-print-view']); //'/export/fcr/seablprintview'
        }
        else {
            this._toasterService.toast('warning', 'warning', 'Please generate House Bl');
        }
        // window.open('./#/export/fcr/sea-bl-print-view');
        //    if (this.bltype=='F'){
        //    window.open('./#/new-tab/FCRpreview/' +  this.FCRNo.trim() +'/'+ this.bltype.trim()   ,'_blank', 'height=600,width=800');
        //    }else{
        //    window.open('./#/new-tab/MTOpreview/' +  this._fcrsharedvataSerice.fcrsharedData.trim() +'/'+ this._fcrHbltypesharedvataSerice.fcrHbltypesharedData   ,'_blank', 'height=600,width=800');
        //    }
    };
    ExptFCRGenerate.prototype.onpreview = function () {
        var _this = this;
        if (this.FCRNo.trim() != '') {
            this._fcrHbltypesharedvataSerice.fcrHbltypesharedData = this.bltype;
            this._fcrsharedvataSerice.fcrsharedData = this.FCRNo;
            this._loginService.verifyRights(401, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
            if (this.bltype == 'F') {
                window.open('./#/new-tab/FCRpreview/' + this.FCRNo.trim() + '/' + this.bltype.trim(), '_blank', 'height=600,width=800');
            }
            else {
                window.open('./#/new-tab/MTOpreview/' + this._fcrsharedvataSerice.fcrsharedData.trim() + '/' + this._fcrHbltypesharedvataSerice.fcrHbltypesharedData, '_blank', 'height=600,width=800');
            }
        }
        else {
            this._toasterService.toast('warning', 'warning', 'Please generate House Bl');
        }
    };
    ExptFCRGenerate.prototype.ResetAll = function () {
        this.buttonSearchStatus = false;
        this.buttonStatus = false;
        this.exptdt = [];
    };
    ExptFCRGenerate.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    ExptFCRGenerate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fcr-iu',
            template: __webpack_require__(/*! raw-loader!./exp_prt_fcr_generate.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/fcr/exp_prt_fcr_generate.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptFCRGenerate);
    return ExptFCRGenerate;
}());



/***/ }),

/***/ "./src/app/export/fcr/exp_prt_fcr_printview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/export/fcr/exp_prt_fcr_printview.component.ts ***!
  \***************************************************************/
/*! exports provided: ExptFCRPrintview, ExptMTOprintview, ExptPrintview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptFCRPrintview", function() { return ExptFCRPrintview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptMTOprintview", function() { return ExptMTOprintview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptPrintview", function() { return ExptPrintview; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExptFCRPrintview = /** @class */ (function () {
    function ExptFCRPrintview(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrHbltypesharedvataSerice, _fcrhblprinttype, _fcrdraftvisible, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this._fcrhblprinttype = _fcrhblprinttype;
        this._fcrdraftvisible = _fcrdraftvisible;
        this.loaderService = loaderService;
        this.baseUrl = 'Export/Export_FCR_PRINTPREVIEW';
        this.HBLTYPE_ACT = "";
        this.SHIPPER = "";
        this.CONSIGNEE = "";
        this.NOTIFYPARTY = "";
        this.FCRNO = "";
        this.FCRDT = "";
        this.APPLYTO = "";
        this.CARRIER = "";
        this.RECPTPLACE = "";
        this.VESSEL = "";
        this.POL = "";
        this.POD = false;
        this.PODEL = "";
        this.APPLYTO1 = "";
        this.MARKSANDNOS = "";
        this.NOOFPKGS = "";
        this.ITCDESC = "";
        this.GRWT = "";
        this.VOL = "";
        this.MISC = "";
        this.PP = "";
        this.CC = "";
        this.TOTPP = "";
        this.TOTCC = "";
        this.PLACEDATE = "";
        this.EXPNO = false;
        this.Bltype = "";
        this.buttonStatus = false;
        this.ISPRINT = "";
        this.DRAFTPRINT = '';
        this.Rider = "";
        this.SAILING_DT = "";
        this.expressbill = false;
        this.printmsg = "";
        this.expressbillval = "";
        this.WaterMarkoption = false;
        this.watermarkval = "0";
        this.draftvisible = true;
    }
    ExptFCRPrintview.prototype.ngOnChanges = function () {
        var _this = this;
        this.loaderService.display(true);
        console.log("FCR NO. " + this._fcrsharedvataSerice.fcrsharedData);
        var jsonExport = { FCRNO: this._fcrsharedvataSerice.fcrsharedData }; //'GOA103180016'
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.FCRDET = data.Table;
                _this.SHIPPER = _this.FCRDET[0].SHIPPER;
                _this.CONSIGNEE = _this.FCRDET[0].CONSIGNEE;
                _this.NOTIFYPARTY = _this.FCRDET[0].NOTIFYPARTY;
                _this.FCRNO = _this.FCRDET[0].FCRNO;
                _this.FCRDT = _this.FCRDET[0].FCRDT;
                _this.APPLYTO = _this.FCRDET[0].APPLYTO;
                _this.CARRIER = _this.FCRDET[0].CARRIER;
                _this.RECPTPLACE = _this.FCRDET[0].RECPTPLACE;
                _this.VESSEL = _this.FCRDET[0].VESSEL;
                _this.POL = _this.FCRDET[0].POL;
                _this.POD = _this.FCRDET[0].POD;
                _this.PODEL = _this.FCRDET[0].PODEL;
                _this.APPLYTO1 = _this.FCRDET[0].APPLYTO;
                _this.MARKSANDNOS = _this.FCRDET[0].MARKSANDNOS;
                _this.NOOFPKGS = _this.FCRDET[0].NOOFPKGS;
                _this.ITCDESC = _this.FCRDET[0].ITCDESC;
                _this.GRWT = _this.FCRDET[0].GRWT;
                _this.VOL = _this.FCRDET[0].VOL;
                _this.MISC = _this.FCRDET[0].MISC;
                _this.PP = _this.FCRDET[0].PP;
                _this.CC = _this.FCRDET[0].CC;
                _this.TOTPP = _this.FCRDET[0].TOTPP;
                _this.TOTCC = _this.FCRDET[0].TOTCC;
                _this.PLACEDATE = _this.FCRDET[0].PLACEDATE;
                _this.EXPNO = _this.FCRDET[0].EXPNO;
                _this.ISPRINT = _this.FCRDET[0].ISPRINT;
                _this.HBLTYPE_ACT = _this.FCRDET[0].HBLTYPE;
                _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                _this.SAILING_DT = data.Table[0].SAILING;
                if (_this._loginService.getLogin()[0].CMPCODE == '01' || _this._loginService.getLogin()[0].CMPCODE == '02') {
                    if (_this.DRAFTPRINT == '3') {
                        _this.draftvisible = false;
                    }
                    else if (_this.ISPRINT == '1') {
                        _this.draftvisible = false;
                    }
                    else {
                        _this.draftvisible = true;
                    }
                }
                else {
                    {
                        _this.draftvisible = false;
                    }
                }
                _this._fcrdraftvisible.fcrsharedData = _this.draftvisible;
                _this._toasterService.toast('info', 'Complete', 'Data filled successfully');
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.STATUSTEXT);
            _this.loaderService.display(false);
        }, function () {
        });
    };
    ExptFCRPrintview.prototype.checkValue = function (event) {
        console.log(event);
        if (event.target.checked) {
            this.expressbill = true;
        }
        else {
            this.expressbill = false;
        }
    };
    ExptFCRPrintview.prototype.getwatermarkvalue = function (event) {
        if (event.target.checked) {
            this.WaterMarkoption = true;
            this.watermarkval = "1";
        }
        else {
            this.WaterMarkoption = false;
            this.watermarkval = "0";
        }
    };
    ExptFCRPrintview.prototype.printUpdate = function () {
        var _this = this;
        if (this.ISPRINT == "1") {
            this._toasterService.toast('warning', 'warning', "You can`t update ,Print already taken ");
        }
        else if (this.DRAFTPRINT == "10") {
            this._toasterService.toast('warning', 'warning', "You can`t update ,Draft already taken 10 times");
        }
        else {
            this.buttonStatus = true;
            this.loaderService.display(true);
            this.baseUrl = 'Export/Export_FCR_PRINTUPDATE';
            var jsonExport = { SHIPPER: this.SHIPPER, CONSIGNEE: this.CONSIGNEE, NOTIFYPARTY: this.NOTIFYPARTY, CARRIER: this.CARRIER, APPLYTO: this.APPLYTO, VESSEL: this.VESSEL, POL: this.POL, POD: this.POD, PODEL: this.PODEL, MARKSANDNOS: this.MARKSANDNOS, NOOFPKGS: this.NOOFPKGS, ITCDESC: this.ITCDESC, GRWT: this.GRWT, VOL: this.VOL, MISC: this.MISC, PLACEDATE: this.PLACEDATE, PP: this.PP, CC: this.CC, TOTPP: this.TOTPP, TOTCC: this.TOTPP, RECPTPLACE: this.RECPTPLACE, EXPNO: this.EXPNO, FCRNo: this.FCRNO, UERNAME: this._loginService.getLogin()[0].CMPID, CITYCODE: this._loginService.getLogin()[0].CITYCODE, rider: this.Rider };
            this._dataService.Common(this.baseUrl, jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.FCRDET = data.Table1;
                    _this.SHIPPER = _this.FCRDET[0].SHIPPER;
                    _this.CONSIGNEE = _this.FCRDET[0].CONSIGNEE;
                    _this.NOTIFYPARTY = _this.FCRDET[0].NOTIFYPARTY;
                    _this.FCRNO = _this.FCRDET[0].FCRNO;
                    _this.FCRDT = _this.FCRDET[0].FCRDT;
                    _this.APPLYTO = _this.FCRDET[0].APPLYTO;
                    _this.CARRIER = _this.FCRDET[0].CARRIER;
                    _this.RECPTPLACE = _this.FCRDET[0].RECPTPLACE;
                    _this.VESSEL = _this.FCRDET[0].VESSEL;
                    _this.POL = _this.FCRDET[0].POL;
                    _this.POD = _this.FCRDET[0].POD;
                    _this.PODEL = _this.FCRDET[0].PODEL;
                    _this.APPLYTO1 = _this.FCRDET[0].APPLYTO;
                    _this.MARKSANDNOS = _this.FCRDET[0].MARKSANDNOS;
                    _this.NOOFPKGS = _this.FCRDET[0].NOOFPKGS;
                    _this.ITCDESC = _this.FCRDET[0].ITCDESC;
                    _this.GRWT = _this.FCRDET[0].GRWT;
                    _this.VOL = _this.FCRDET[0].VOL;
                    _this.MISC = _this.FCRDET[0].MISC;
                    _this.PP = _this.FCRDET[0].PP;
                    _this.CC = _this.FCRDET[0].CC;
                    _this.TOTPP = _this.FCRDET[0].TOTPP;
                    _this.TOTCC = _this.FCRDET[0].TOTCC;
                    _this.PLACEDATE = _this.FCRDET[0].PLACEDATE;
                    _this.EXPNO = _this.FCRDET[0].EXPNO;
                    _this.HBLTYPE_ACT = _this.FCRDET[0].HBLTYPE;
                    _this._toasterService.toast('info', 'Complete', "Update successfully ");
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            });
            this.buttonStatus = false;
        }
    };
    ExptFCRPrintview.prototype.printDraft = function () {
        var _this = this;
        if (this.expressbill == true) {
            alert('Please uncheck the express bill as you are taking draft print');
            return false;
        }
        if (this.DRAFTPRINT == "10") {
            this._toasterService.toast('warning', 'warning', "You cannot take more than 10 draft ");
        }
        else {
            this.buttonStatus = true;
            // if (this.DRAFTPRINT=="0"){ 
            //     if (confirm(" Are you sure want to take the Draft, You have  3 draft is pending,  After No modification allowed " )) {
            //         const jsonExport = { fcr:  this.FCRNO  ,citycode: this._loginService.getLogin()[0].CITYCODE ,userid: this._loginService.getLogin()[0].CMPID,Type: 'D'};
            //         this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
            //             .subscribe((data: any) => {
            //                 this.DRAFTPRINT=data.Table[0].DRAFTPRINT;
            //                 this.ISPRINT=data.Table[0].ISPRINT;
            //                 });
            //             }
            //             else
            //             {return false}
            //     }
            // else if (this.DRAFTPRINT=="1"){ 
            //     if (confirm(" Are you sure want to take the Draft, You have  2 draft is pending,  After No modification allowed " )) {
            //         const jsonExport = { fcr:  this.FCRNO  ,citycode: this._loginService.getLogin()[0].CITYCODE ,userid: this._loginService.getLogin()[0].CMPID,Type: 'D'};
            //         this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
            //             .subscribe((data: any) => {
            //                 this.DRAFTPRINT=data.Table[0].DRAFTPRINT;
            //                 this.ISPRINT=data.Table[0].ISPRINT;
            //                 });
            //             }
            //             else
            //             {return false}
            // }
            // else 
            if (parseInt(this.DRAFTPRINT) <= 9) {
                var printfraft = void 0;
                printfraft = 10 - parseInt(this.DRAFTPRINT);
                if (confirm(" Are you sure want to take the Draft, You have  " + printfraft + " draft is pending,  After No modification allowed")) {
                    var jsonExport = { fcr: this.FCRNO, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID, Type: 'D' };
                    this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
                        .subscribe(function (data) {
                        _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                        _this.ISPRINT = data.Table[0].ISPRINT;
                    });
                }
                else {
                    return false;
                }
            }
            //let URL = "http://manilal.com/erp/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
            var URL_1 = "http://180.179.207.163/linkserp-ac/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&FCR=" + this.FCRNO
                + "&HBLType=" + this.HBLTYPE_ACT
                + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].edocumentIp
                + "&Iswatermark=" + this.watermarkval;
            window.open(URL_1, "_blank");
        }
        this.buttonStatus = false;
    };
    ExptFCRPrintview.prototype.Print = function () {
        var _this = this;
        this.buttonStatus = true;
        this._fcrHbltypesharedvataSerice = this._fcrsharedvataSerice.fcrHbltypesharedData;
        this._fcrsharedvataSerice.fcrsharedData = this._fcrsharedvataSerice.fcrsharedData;
        this._fcrhblprinttype.fcrhblprinttype = this.ISPRINT;
        // this._router.navigate(['/export/fcr/sea-bl-print']);
        // this.buttonStatus = false;
        if (this.SAILING_DT == "") {
            this._toasterService.toast('warning', 'warning', "You cannot take  final print, Vessel sailing date not entered ! ");
            return false;
        }
        if (this.ISPRINT == "") {
            if (confirm("Are you sure want to take print out ,Once take print you cannot do any modification  ")) {
                var jsonExport = { fcr: this.FCRNO, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID, Type: 'P' };
                this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
                    .subscribe(function (data) {
                    _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                    _this.ISPRINT = data.Table[0].ISPRINT;
                });
            }
            else {
                return false;
            }
        }
        //   if (this._loginService.getLogin()[0].CMPCODE=='01' || this._loginService.getLogin()[0].CMPCODE=='02') 
        //   {
        //let URL = "http://manilal.com/erp/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
        var URL = "http://180.179.207.163/linkserp-ac/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&FCR=" + this.FCRNO
            + "&HBLType=" + this.HBLTYPE_ACT
            + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].edocumentIp
            + "&Iswatermark=" + this.watermarkval;
        window.open(URL, "_blank");
        this.buttonStatus = false;
        //}
        //   else{
        //       this._router.navigate(['/export/fcr/sea-bl-print']);
        //       this.buttonStatus = false;
        //       }            
    };
    ExptFCRPrintview.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExptFCRPrintview.prototype, "hbltype", void 0);
    ExptFCRPrintview = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fcr-printview',
            // templateUrl: 'exp_prt_fcr_printview.component.html'
            template: "\n                    <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"bookingno\" style=\"FONT-SIZE: 12px;font-family: Courier New;margin-left: 620px;\" size=\"12\" maxlength=\"10\"   >\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"fcrno\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"12\" maxlength=\"15\" [(ngModel)]=\"FCRNO\"    readonly >\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"> Shipper (Name & Full Address) <br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"shipper\" style=\"FONT-SIZE: 12px;font-family: Courier New;\"  rows=\"4\" cols=\"40\" [(ngModel)]=\"SHIPPER\" > </textarea> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\"   >\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"> Consignee (Name & Full Address/Non-Negotiable)<br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"consignee\" style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" [(ngModel)]=\"CONSIGNEE\"> </textarea> \n                                </td>\n                                <td  colspan=\"2\"   >\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"> Notify Party/Intermediate Consignee (Name & Full Address/Non-Negotiable)<br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"notify\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"4\" cols=\"40\" [(ngModel)]=\"NOTIFYPARTY\" > </textarea> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\"> \n\t\t\t\t\t\t\t\t\t<textarea name=\"expno\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"2\" cols=\"20\" [(ngModel)]=\"EXPNO\" > </textarea> \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"2\"> Intial Carriage <br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"carriage\" style=\"FONT-SIZE: 12px;font-family: Courier New; width:250px\" size=\"10\" id=\"carriage\" [(ngModel)]=\"CARRIER\"  maxlength=\"50\">\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td colspan=\"1\">  Place of Receipt<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"receipt\" style=\"FONT-SIZE: 12px;font-family: Courier New; width:250px\" size=\"10\" maxlength=\"50\"  [(ngModel)]=\"RECPTPLACE\" >\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\" rowspan=\"3\">For Delivery Apply to<br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"applyto\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"40\"  [(ngModel)]=\"APPLYTO\" > </textarea> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"2\">  Export Carrier (Vessel Voyage)<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"vessel\" style=\"FONT-SIZE: 12px;font-family: Courier New;width:250px\" size=\"10\" maxlength=\"50\" [(ngModel)]=\"VESSEL\"   >\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td colspan=\"1\">  Port Of Loading<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"pol\" style=\"FONT-SIZE: 12px;font-family: Courier New;width:250px\" size=\"10\" maxlength=\"50\" [(ngModel)]=\"POL\"  >\n\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"2\">  Port Of Discharge<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"discharge\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"10\" maxlength=\"50\" [(ngModel)]=\"POD\" >\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td colspan=\"1\">  Place Of Delivery<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"delivery\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"10\" maxlength=\"50\" [(ngModel)]=\"PODEL\"  >    \n\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\">\n                                <table class=\"table table-bordered table-striped table-sm-new bgwhite\"  >\n                                <tr>\t\t\t\t\t\t\t\t\t\t\t\n                                    <td  >Marks & Numbers<br>Container No.  </td>\n                                    <td  >No.of Pkgs   </td>\n                                    <td  >Description pkgs and Goods </td>\n                                    <td  >Grows Weight Kg </td>\n                                    <td  >Measurment CMR </td>\n                                </tr>\n                                <tr>\n                                    <td  >\n                                        <textarea name=\"marks\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"16\" cols=\"14\" wrap=\"OFF\" id=\"marks\" [(ngModel)]=\"MARKSANDNOS\" > </textarea>\n                                    </td>\n                                    <td  > \n                                        <textarea name=\"pkgs\" style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"16\" cols=\"9\" wrap=\"OFF\" [(ngModel)]=\"NOOFPKGS\" > </textarea> \n                                    </td>\n                                    <td  > \n                                        <textarea name=\"desc\" style=\"FONT-SIZE: 12px;font-family: Courier New;width:400px;\" rows=\"16\" cols=\"40\" wrap=\"OFF\"[(ngModel)]=\"ITCDESC\"  > </textarea>\n                                    </td>\n                                    <td  > \n                                        <textarea name=\"grwt\" style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"16\" cols=\"9\" wrap=\"OFF\" [(ngModel)]=\"GRWT\"  >  </textarea>  \n                                    </td>\n                                    <td  > \t\t\t\t\t\t\t\t\t\t\t\t\n                                        <textarea name=\"cbm\" style=\"FONT-SIZE: 12px;font-family: Courier New \" rows=\"16\" cols=\"9\" wrap=\"OFF\" [(ngModel)]=\"VOL\"  > </textarea>  \n                                    </td>\n                                </tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\">Freight Rate Charges Weights and/orMeasurements(Subject to correction) \n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td >Prepaid\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" > Collect </td>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"freight\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"28\" wrap=\"OFF\" [(ngModel)]=\"MISC\" ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td  >\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"prepaid\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"10\" wrap=\"OFF\" [(ngModel)]=\"PP\" ></textarea> \n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"collect\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"10\" wrap=\"OFF\" [(ngModel)]=\"CC\" ></textarea> \n\t\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> Total Prepaid\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>  \n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"totpp\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"12\" maxlength=\"15\" [(ngModel)]=\"TOTPP\" >\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"3\">  \n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"placedt\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"28\" maxlength=\"50\"  [(ngModel)]=\"PLACEDATE\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\tDate & place Issued\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> Total Collect\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"totcc\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"12\" maxlength=\"15\" [(ngModel)]=\"TOTCC\"   >\n                                                        </td>\n                                                        <tr>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </table>\t\n    \n\n             \n        "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptFCRPrintview);
    return ExptFCRPrintview;
}());

var ExptMTOprintview = /** @class */ (function () {
    function ExptMTOprintview(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrHbltypesharedvataSerice, _fcrhblprinttype, _fcrdraftvisible, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this._fcrhblprinttype = _fcrhblprinttype;
        this._fcrdraftvisible = _fcrdraftvisible;
        this.loaderService = loaderService;
        this.HBLTYPE_ACT = "";
        this.SHIPPER = "";
        this.CONSIGNEE = "";
        this.NOTIFYPARTY = "";
        this.FCRNO = "";
        this.FCRDT = "";
        this.APPLYTO = "";
        this.CARRIER = "";
        this.RECPTPLACE = "";
        this.VESSEL = "";
        this.POL = "";
        this.POD = "";
        this.PODEL = "";
        this.APPLYTO1 = "";
        this.MARKSANDNOS = "";
        this.NOOFPKGS = "";
        this.ITCDESC = "";
        this.GRWT = "";
        this.VOL = "";
        this.MISC = "";
        this.PP = "";
        this.CC = "";
        this.TOTPP = "";
        this.TOTCC = "";
        this.PLACEDATE = "";
        this.EXPNO = "";
        this.Bltype = "";
        this.buttonStatus = false;
        this.ISPRINT = "";
        this.DRAFTPRINT = "";
        this.Rider = "";
        this.SwitchFCR = "";
        this.draftvisible = false;
        this.IsSwitch = "";
        this.IsSwitchtext = "";
        this.SAILING_DT = "";
        this.expressbill = false;
        this.printmsg = "";
        this.expressbillval = "";
        this.WaterMarkoption = false;
        this.watermarkval = "0";
    }
    ExptMTOprintview.prototype.fcrrout = function (FCRNo) {
        if (confirm("Are you sure you want move to " + this.IsSwitchtext + " ?")) {
            this._fcrsharedvataSerice.fcrsharedData = FCRNo;
            this.ngOnChanges();
        }
        else {
            return false;
        }
        //  this._router.navigate(['/export/fcr/sea-bl-print-view']);  
    };
    ExptMTOprintview.prototype.checkValue = function (event) {
        console.log(event);
        if (event.target.checked) {
            this.expressbill = true;
        }
        else {
            this.expressbill = false;
        }
    };
    ExptMTOprintview.prototype.getwatermarkvalue = function (event) {
        if (event.target.checked) {
            this.WaterMarkoption = true;
            this.watermarkval = "1";
        }
        else {
            this.WaterMarkoption = false;
            this.watermarkval = "0";
        }
    };
    ExptMTOprintview.prototype.ngOnChanges = function () {
        var _this = this;
        this.loaderService.display(true);
        //   console.log("MTO NO. "+this._fcrsharedvataSerice.fcrsharedData); 
        var jsonExport = { FCRNO: this._fcrsharedvataSerice.fcrsharedData }; //'GOA106180004'
        this._dataService.Common("Export/Export_FCR_PRINTPREVIEW", jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.FCRDET = data.Table;
                _this.SHIPPER = _this.FCRDET[0].SHIPPER;
                _this.CONSIGNEE = _this.FCRDET[0].CONSIGNEE;
                _this.NOTIFYPARTY = _this.FCRDET[0].NOTIFYPARTY;
                _this.FCRNO = _this.FCRDET[0].FCRNO;
                _this.FCRDT = _this.FCRDET[0].FCRDT;
                _this.APPLYTO = _this.FCRDET[0].APPLYTO;
                _this.CARRIER = _this.FCRDET[0].CARRIER;
                _this.RECPTPLACE = _this.FCRDET[0].RECPTPLACE;
                _this.VESSEL = _this.FCRDET[0].VESSEL;
                _this.POL = _this.FCRDET[0].POL;
                _this.POD = _this.FCRDET[0].POD;
                _this.PODEL = _this.FCRDET[0].PODEL;
                _this.APPLYTO1 = _this.FCRDET[0].APPLYTO;
                _this.MARKSANDNOS = _this.FCRDET[0].MARKSANDNOS;
                _this.NOOFPKGS = _this.FCRDET[0].NOOFPKGS;
                _this.ITCDESC = _this.FCRDET[0].ITCDESC;
                _this.GRWT = _this.FCRDET[0].GRWT;
                _this.VOL = _this.FCRDET[0].VOL;
                _this.MISC = _this.FCRDET[0].MISC;
                _this.PP = _this.FCRDET[0].PP;
                _this.CC = _this.FCRDET[0].CC;
                _this.TOTPP = _this.FCRDET[0].TOTPP;
                _this.TOTCC = _this.FCRDET[0].TOTCC;
                _this.PLACEDATE = _this.FCRDET[0].PLACEDATE;
                _this.EXPNO = _this.FCRDET[0].EXPNO;
                _this.ISPRINT = _this.FCRDET[0].ISPRINT;
                _this.HBLTYPE_ACT = _this.FCRDET[0].HBLTYPE;
                _this.DRAFTPRINT = _this.FCRDET[0].DRAFTPRINT;
                _this.Rider = _this.FCRDET[0].Rider;
                _this.SwitchFCR = _this.FCRDET[0].SWITCHBL;
                _this.IsSwitch = _this.FCRDET[0].ISSWITCHBL;
                _this.SAILING_DT = _this.FCRDET[0].SAILING;
                if (_this.IsSwitch == '1') {
                    _this.IsSwitchtext = "Switch BL MTO NO.: ";
                }
                else {
                    _this.IsSwitchtext = "Original MTO No.: ";
                }
                _this._toasterService.toast('info', 'Complete', 'Data filled successfully');
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ExptMTOprintview.prototype.printUpdate = function () {
        var _this = this;
        this.buttonStatus = true;
        if (this.ISPRINT == "1") {
            this._toasterService.toast('warning', 'warning', "You can`t update ,Print already taken ");
        }
        else if (this.DRAFTPRINT == "10") {
            this._toasterService.toast('warning', 'warning', "You can`t update ,Draft already taken 10 times");
        }
        else {
            this.loaderService.display(true);
            var jsonExportUP = { SHIPPER: this.SHIPPER, CONSIGNEE: this.CONSIGNEE, NOTIFYPARTY: this.NOTIFYPARTY, CARRIER: this.CARRIER, APPLYTO: this.APPLYTO, VESSEL: this.VESSEL, POL: this.POL, POD: this.POD, PODEL: this.PODEL, MARKSANDNOS: this.MARKSANDNOS, NOOFPKGS: this.NOOFPKGS, ITCDESC: this.ITCDESC, GRWT: this.GRWT, VOL: this.VOL, MISC: this.MISC, PLACEDATE: this.PLACEDATE, PP: this.PP, CC: this.CC, TOTPP: this.TOTPP, TOTCC: this.TOTPP, RECPTPLACE: this.RECPTPLACE, EXPNO: this.EXPNO, FCRNo: this.FCRNO, UERNAME: this._loginService.getLogin()[0].CMPID, CITYCODE: this._loginService.getLogin()[0].CITYCODE, rider: this.Rider };
            this._dataService.Common("Export/Export_FCR_PRINTUPDATE", jsonExportUP)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.FCRDET = data.Table1;
                    _this.SHIPPER = _this.FCRDET[0].SHIPPER;
                    _this.CONSIGNEE = _this.FCRDET[0].CONSIGNEE;
                    _this.NOTIFYPARTY = _this.FCRDET[0].NOTIFYPARTY;
                    _this.FCRNO = _this.FCRDET[0].FCRNO;
                    _this.FCRDT = _this.FCRDET[0].FCRDT;
                    _this.APPLYTO = _this.FCRDET[0].APPLYTO;
                    _this.CARRIER = _this.FCRDET[0].CARRIER;
                    _this.RECPTPLACE = _this.FCRDET[0].RECPTPLACE;
                    _this.VESSEL = _this.FCRDET[0].VESSEL;
                    _this.POL = _this.FCRDET[0].POL;
                    _this.POD = _this.FCRDET[0].POD;
                    _this.PODEL = _this.FCRDET[0].PODEL;
                    _this.APPLYTO1 = _this.FCRDET[0].APPLYTO;
                    _this.MARKSANDNOS = _this.FCRDET[0].MARKSANDNOS;
                    _this.NOOFPKGS = _this.FCRDET[0].NOOFPKGS;
                    _this.ITCDESC = _this.FCRDET[0].ITCDESC;
                    _this.GRWT = _this.FCRDET[0].GRWT;
                    _this.VOL = _this.FCRDET[0].VOL;
                    _this.MISC = _this.FCRDET[0].MISC;
                    _this.PP = _this.FCRDET[0].PP;
                    _this.CC = _this.FCRDET[0].CC;
                    _this.TOTPP = _this.FCRDET[0].TOTPP;
                    _this.TOTCC = _this.FCRDET[0].TOTCC;
                    _this.PLACEDATE = _this.FCRDET[0].PLACEDATE;
                    _this.EXPNO = _this.FCRDET[0].EXPNO;
                    _this.HBLTYPE_ACT = _this.FCRDET[0].HBLTYPE;
                    _this._toasterService.toast('info', 'Complete', "Update successfully ");
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            }, function (error) {
                _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
                _this.loaderService.display(false);
            }, function () {
            });
            this.buttonStatus = false;
        }
    };
    ExptMTOprintview.prototype.printDraft = function () {
        var _this = this;
        if (this.expressbill == true) {
            alert('Please uncheck the express bill as you are taking draft print');
            return false;
        }
        if (this.DRAFTPRINT == "10") {
            this._toasterService.toast('warning', 'warning', "You cannot take more than 10 draft ");
        }
        else {
            this.buttonStatus = true;
            if (this.DRAFTPRINT == "0") {
                if (confirm(" Are you sure want to take the Draft, You have  10 draft is pending,  After No modification allowed ")) {
                    var jsonExport = { fcr: this.FCRNO, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID, Type: 'D' };
                    this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
                        .subscribe(function (data) {
                        _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                        _this.ISPRINT = data.Table[0].ISPRINT;
                    });
                }
                else {
                    return false;
                }
            }
            // else if (this.DRAFTPRINT=="1"){ 
            // if (confirm(" Are you sure want to take the Draft, You have  2 draft is pending,  After No modification allowed" )) {
            //     const jsonExport = { fcr:  this.FCRNO  ,citycode: this._loginService.getLogin()[0].CITYCODE ,userid: this._loginService.getLogin()[0].CMPID,Type: 'D'};
            //     this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
            //         .subscribe((data: any) => {
            //             this.DRAFTPRINT=data.Table[0].DRAFTPRINT;
            //             this.ISPRINT=data.Table[0].ISPRINT;
            //             });
            //         }
            //         else
            //         {return false}
            // }
            // else  
            if (parseInt(this.DRAFTPRINT) <= 9) {
                var printfraft = void 0;
                printfraft = 10 - parseInt(this.DRAFTPRINT);
                if (confirm("Are you sure want to take Draft  ,You have " + printfraft + " draft is pending , modification allowed ")) {
                    var jsonExport = { fcr: this.FCRNO, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID, Type: 'D' };
                    this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
                        .subscribe(function (data) {
                        _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                        _this.ISPRINT = data.Table[0].ISPRINT;
                    });
                }
                else {
                    return false;
                }
            }
            // let URL = "http://manilal.com/erp/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
            var URL_2 = "http://180.179.207.163/linkserp-ac/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&FCR=" + this.FCRNO
                + "&HBLType=" + this.HBLTYPE_ACT
                + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].edocumentIp
                + "&Iswatermark=" + this.watermarkval;
            window.open(URL_2, "_blank");
        }
        this.buttonStatus = false;
    };
    ExptMTOprintview.prototype.Print = function () {
        var _this = this;
        this.buttonStatus = true;
        this._fcrHbltypesharedvataSerice = this._fcrsharedvataSerice.fcrHbltypesharedData;
        this._fcrsharedvataSerice.fcrsharedData = this._fcrsharedvataSerice.fcrsharedData;
        this._fcrhblprinttype.fcrhblprinttype = this.ISPRINT;
        // this._router.navigate(['/export/fcr/sea-bl-print']);
        // this.buttonStatus = false;
        if (this.SAILING_DT == "") {
            this._toasterService.toast('warning', 'warning', "You cannot take  final print, Vessel sailing date not entered ! ");
            return false;
        }
        if (this.ISPRINT == "" || this.ISPRINT == "1" || this.ISPRINT == "2") {
            //if (confirm("Are you sure want to take print out ,Once take print you cannot do any modification  " )) {
            if (this.expressbill == false) {
                this.printmsg = "Are u sure want to take the original print,Once take print you cannot do any modification ";
            }
            if (this.expressbill == true) {
                this.printmsg = "Are u sure want to take the nonnegotiable print,Once take print you cannot do any modification ";
            }
            if (confirm(this.printmsg)) {
                var jsonExport = { fcr: this.FCRNO, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID,
                    Type: (this.expressbill == false ? 'P' : 'N') };
                this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
                    .subscribe(function (data) {
                    _this.DRAFTPRINT = data.Table[0].DRAFTPRINT;
                    _this.ISPRINT = data.Table[0].ISPRINT;
                });
            }
            else {
                return false;
            }
        }
        // else
        // {return false}
        //             }
        var URL = "http://180.179.207.163//linkserp-ac/UI/Export/frm_Exp_Print_Document_Sea_FCR_PRINT.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&FCR=" + this.FCRNO
            + "&HBLType=" + this.HBLTYPE_ACT
            + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].edocumentIp
            + "&Iswatermark=" + this.watermarkval;
        window.open(URL, "_blank");
        this.buttonStatus = false;
    };
    ExptMTOprintview.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExptMTOprintview.prototype, "hbltype", void 0);
    ExptMTOprintview = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mto-printview',
            // templateUrl: 'exp_prt_fcr_printview.component.html'
            template: "\n\n    <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\n    <tr>\n    </tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\"> </td>\n                            </tr>\n                            \n                                <tr >\n                             \n                              \n                                <td  colspan=\"3\" class=\"centerlabel\"><span class=\"col-form-span-label\" >{{IsSwitchtext}}\n                                    <a href=\"javascript:void(0);\"   (click)=\"fcrrout(SwitchFCR);\" ><b>{{SwitchFCR}}</b> </a>\n                                    </span>\n                                </td>\n                                <td colspan=\"2\" ></td>                              \n                                \n                                </tr>\n                          \n                           \n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"> Shipper   <br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"shipper\" style=\"FONT-SIZE: 12px;font-family: Courier New;\"  rows=\"4\" cols=\"40\" [(ngModel)]=\"SHIPPER\" > </textarea> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" >BL/MTD \n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"bookingno\" style=\"FONT-SIZE: 12px;font-family: Courier New; margin-left: 54px;\" size=\"12\" maxlength=\"10\"   >\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"fcrno\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" size=\"12\" maxlength=\"15\" [(ngModel)]=\"FCRNO\"    readonly >\n\t\t\t\t\t\t\t\t\t<br>Shipment Ref No\n\t\t\t\t\t\t\t\t\t<textarea name=\"sexptno\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"2\" cols=\"20\" [(ngModel)]=\"EXPNO\" > </textarea> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>  \n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"> Consignee <br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"consignee\" style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" [(ngModel)]=\"CONSIGNEE\"> </textarea> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td  colspan=\"2\"  >\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"> Notify Address<br>\n\t\t\t\t\t\t\t\t\t<textarea name=\"notify\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"4\" cols=\"40\" [(ngModel)]=\"NOTIFYPARTY\" > </textarea> \n                                </td>\t\n                                <td  colspan=\"2\"  >\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"2\"> Place of receipt  <br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"carriage\" style=\"FONT-SIZE: 12px;font-family: Courier New; width: 250px;\" size=\"10\" id=\"carriage\" [(ngModel)]=\"CARRIER\"  maxlength=\"50\">\n                                </td>\n                                <td colspan=\"2\"> Place of loading <br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"receipt\" style=\"FONT-SIZE: 12px;font-family: Courier New;  width: 250px;\" size=\"10\" id=\"receipt\" [(ngModel)]=\"RECPTPLACE\"  maxlength=\"50\">\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" >Port of Delivery<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"discharge\" style=\"FONT-SIZE: 12px;font-family: Courier New; width: 250px;\" size=\"10\" id=\"discharge\" maxlength=\"50\" [(ngModel)]=\"POD\" >\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>Place of Delivery<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"delivery\" style=\"FONT-SIZE: 12px;font-family: Courier New;width:250px\" size=\"10\" maxlength=\"50\" [(ngModel)]=\"PODEL\"  >    \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>  Mode of Transport<br>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"vessel\" style=\"FONT-SIZE: 12px;font-family: Courier New; width: 250px;\" size=\"10\" maxlength=\"50\" [(ngModel)]=\"VESSEL\"   >\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>  </td>\n\t\t\t\t\t\t\t</tr>  \n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\">\n                                <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\n\t\t\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<td>Container No. \n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>Marks & Numbers\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>No of pkgs Kind of pkgs <br> general description of goods\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>Grows Weight\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>Measurement\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"marks\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"16\" cols=\"14\" wrap=\"OFF\" id=\"marks\" [(ngModel)]=\"MARKSANDNOS\"> </textarea>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td> \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"pkgs\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"16\" cols=\"9\" wrap=\"OFF\" [(ngModel)]=\"NOOFPKGS\"> </textarea> \n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td> \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"desc\" style=\"FONT-SIZE: 12px;font-family: Courier New;width:400px\" rows=\"16\" cols=\"40\" wrap=\"OFF\"[(ngModel)]=\"ITCDESC\"> </textarea>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td> \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"grwt\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"16\" cols=\"9\"   id=\"grwt\" [(ngModel)]=\"GRWT\">  </textarea>  \n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td> \t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"cbm\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"16\" cols=\"9\"   id=\"cbm\" [(ngModel)]=\"VOL\"> </textarea>  \n\t\t\t\t\t\t\t\t\t\t\t</td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan=\"2\"> Goods Description (Rider)\n                                            </td>\n                                            <td colspan=\"3\">\n                                                <textarea name=\"rider\" style=\"FONT-SIZE: 12px;font-family: Courier New;width:650px;\" rows=\"4\" cols=\"40\" [(ngModel)]=\"Rider\"  ></textarea>\n                                            </td>\n                                        </tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td  colspan=\"2\" >Freight Amount </td>\n\t\t\t\t\t\t\t\t\t\t\t<td >Freight Payable at </td>\n\t\t\t\t\t\t\t\t\t\t\t<td>No of Original BL/MTD(s) </td>\t\n\t\t\t\t\t\t\t\t\t\t\t<td>Place and date of Issue </td>\t\n\t\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"freight\" style=\"FONT-SIZE: 12px;font-family: Courier New;height: 50px;\" rows=\"10\" cols=\"28\" wrap=\"OFF\" [(ngModel)]=\"MISC\" ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td  >\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"prepaid\" style=\"FONT-SIZE: 12px;font-family: Courier New;height: 50px;width: 230px;\" rows=\"10\" cols=\"10\" wrap=\"OFF\" [(ngModel)]=\"PP\" ></textarea> \n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td  > \n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"collect\" style=\"FONT-SIZE: 12px;font-family: Courier New;height: 30px;\" rows=\"10\" cols=\"10\"  id=\"collect\"  [(ngModel)]=\"CC\" ></textarea> \n\t\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t\t\t<td  > \n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"placedt\" style=\"FONT-SIZE: 12px;font-family: Courier New;height: 30px;\" size=\"28\" maxlength=\"50\" [(ngModel)]=\"PLACEDATE\" >\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\"> Other Picture(if any)<br>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"others\" style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"4\" cols=\"40\" [(ngModel)]=\"APPLYTO\"  ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"> </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</table> \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n                            </tr> \n                            <tr>\n                         \n\t\t\t\t\t\t</table>  \n            \n        "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptMTOprintview);
    return ExptMTOprintview;
}());

var ExptPrintview = /** @class */ (function () {
    function ExptPrintview(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrhblprinttype, _fcrHbltypesharedvataSerice) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrhblprinttype = _fcrhblprinttype;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this.Type = "";
        this.buttonStatus = false;
        this.ISPRINT = "";
        this.WaterMarkoption = false;
        this.watermarkval = "0";
    }
    ExptPrintview.prototype.ngOnInit = function () {
        this.Type = this._fcrsharedvataSerice.fcrHbltypesharedData; //'M';
        this.ISPRINT = this._fcrhblprinttype.fcrhblprinttype;
    };
    ExptPrintview.prototype.checkValue = function (event) {
        if (this.Type == "F") {
            this.viewFCR.checkValue(event);
        }
        else if (this.Type == "H") {
            this.viewFCR.checkValue(event);
        }
        else {
            this.viewMTO.checkValue(event);
        }
    };
    ExptPrintview.prototype.printUpdate = function () {
        if (this.Type == "F") {
            this.viewFCR.printUpdate();
        }
        else if (this.Type == "H") {
            this.viewFCR.printUpdate();
        }
        else {
            this.viewMTO.printUpdate();
        }
    };
    ExptPrintview.prototype.getwatermarkvalue = function (event) {
        if (this.Type == "F") {
            this.viewFCR.getwatermarkvalue(event);
        }
        else if (this.Type == "H") {
            this.viewFCR.getwatermarkvalue(event);
        }
        else {
            this.viewMTO.getwatermarkvalue(event);
        } // console.log(event);
    };
    ExptPrintview.prototype.Print = function () {
        if (this.Type == "F") {
            // this.viewFCR.WaterMarkoption=this.WaterMarkoption
            this.viewFCR.Print();
        }
        else if (this.Type == "H") {
            //this.viewFCR.WaterMarkoption=this.WaterMarkoption
            this.viewFCR.Print();
        }
        else {
            // this.viewMTO.WaterMarkoption=this.WaterMarkoption
            this.viewMTO.Print();
        }
    };
    ExptPrintview.prototype.Printdraft = function () {
        if (this.Type == "F") {
            this.viewFCR.printDraft();
        }
        else if (this.Type == "H") {
            this.viewFCR.printDraft();
        }
        else {
            this.viewMTO.printDraft();
        }
    };
    ExptPrintview.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ExptFCRPrintview, { static: false }),
        __metadata("design:type", ExptFCRPrintview)
    ], ExptPrintview.prototype, "viewFCR", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ExptMTOprintview, { static: false }),
        __metadata("design:type", ExptMTOprintview)
    ], ExptPrintview.prototype, "viewMTO", void 0);
    ExptPrintview = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-printview',
            template: __webpack_require__(/*! raw-loader!./exp_prt_fcr_printview.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/fcr/exp_prt_fcr_printview.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"]])
    ], ExptPrintview);
    return ExptPrintview;
}());



/***/ }),

/***/ "./src/app/export/fcr/exp_prt_print.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/export/fcr/exp_prt_print.component.ts ***!
  \*******************************************************/
/*! exports provided: ExptFCRPrint, ExptMTOprint, ExptPrint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptFCRPrint", function() { return ExptFCRPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptMTOprint", function() { return ExptMTOprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptPrint", function() { return ExptPrint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExptFCRPrint = /** @class */ (function () {
    function ExptFCRPrint(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrHbltypesharedvataSerice) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this.baseUrl = 'Export/Export_FCR_PRINTPREVIEW';
        this.SHIPPER = "";
        this.BOOKINGNO = "";
        this.CONSIGNEE = "";
        this.NOTIFYPARTY = "";
        this.FCRNO = "";
        this.FCRDT = "";
        this.APPLYTO = "";
        this.CARRIER = "";
        this.RECPTPLACE = "";
        this.VESSEL = "";
        this.POL = "";
        this.POD = "";
        this.PODEL = "";
        this.APPLYTO1 = "";
        this.MARKSANDNOS = "";
        this.NOOFPKGS = "";
        this.ITCDESC = "";
        this.GRWT = "";
        this.VOL = "";
        this.MISC = "";
        this.PP = "";
        this.CC = "";
        this.TOTPP = "";
        this.TOTCC = "";
        this.PLACEDATE = "";
        this.EXPNO = "";
        this.Bltype = "";
        this.buttonStatus = false;
    }
    ExptFCRPrint.prototype.ngOnChanges = function () {
        var _this = this;
        this.hbltype = this._fcrsharedvataSerice.fcrHbltypesharedData;
        //  this.hbltype = 'F';
        var jsonExport = { FCRNO: this._fcrsharedvataSerice.fcrsharedData };
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.FCRDET = data.Table;
                _this.SHIPPER = _this.FCRDET[0].SHIPPER;
                _this.CONSIGNEE = _this.FCRDET[0].CONSIGNEE;
                _this.NOTIFYPARTY = _this.FCRDET[0].NOTIFYPARTY;
                _this.FCRNO = _this.FCRDET[0].FCRNO;
                _this.FCRDT = _this.FCRDET[0].FCRDT;
                _this.APPLYTO = _this.FCRDET[0].APPLYTO;
                _this.CARRIER = _this.FCRDET[0].CARRIER;
                _this.RECPTPLACE = _this.FCRDET[0].RECPTPLACE;
                _this.VESSEL = _this.FCRDET[0].VESSEL;
                _this.POL = _this.FCRDET[0].POL;
                _this.POD = _this.FCRDET[0].POD;
                _this.PODEL = _this.FCRDET[0].PODEL;
                _this.APPLYTO1 = _this.FCRDET[0].APPLYTO;
                _this.MARKSANDNOS = _this.FCRDET[0].MARKSANDNOS;
                _this.NOOFPKGS = _this.FCRDET[0].NOOFPKGS;
                _this.ITCDESC = _this.FCRDET[0].ITCDESC;
                _this.GRWT = _this.FCRDET[0].GRWT;
                _this.VOL = _this.FCRDET[0].VOL;
                _this.MISC = _this.FCRDET[0].MISC;
                _this.PP = _this.FCRDET[0].PP;
                _this.CC = _this.FCRDET[0].CC;
                _this.TOTPP = _this.FCRDET[0].TOTPP;
                _this.TOTCC = _this.FCRDET[0].TOTCC;
                _this.PLACEDATE = _this.FCRDET[0].PLACEDATE;
                _this.EXPNO = _this.FCRDET[0].EXPNO;
                _this._toasterService.toast('info', 'Complete', 'Data filled successfully');
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].statusText);
            }
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
        }, function () {
        });
    };
    ExptFCRPrint.prototype.ngOnInit = function () {
    };
    ExptFCRPrint.prototype.finalFCRPrint = function () {
        //let PrintFCRData = this.FCR.nativeElement.InnerHTML;
        var jsonExport = { fcr: this._fcrsharedvataSerice.fcrsharedData, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
            .subscribe(function (data) {
        });
        var content = this.FCR.nativeElement.innerHTML;
        var mywindow = window.open('', 'Print', 'height=600,width=800');
        mywindow.document.write('<html><head><title>Print</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(content);
        mywindow.document.write('</body></html>');
        mywindow.document.close();
        mywindow.focus();
        mywindow.print();
        mywindow.close();
    };
    ExptFCRPrint.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExptFCRPrint.prototype, "hbltype", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("print", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExptFCRPrint.prototype, "FCR", void 0);
    ExptFCRPrint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fcr-print',
            // templateUrl: 'exp_prt_fcr_printview.component.html'  style="white-space: pre;"
            template: "      <button name=\"btnPrint\"   (click)=\"finalFCRPrint()\">Print</button>\n                    <div id=\"divFcr\" #print>\n                    <p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 20px;left: 20px;color:black;z-index:1;white-space: pre;\">{{SHIPPER}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 30px;left: 430px;color:black;z-index:1;white-space: pre;\">{{BOOKINGNO}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: -9px;left: 872px;color:black;z-index:1;white-space: pre;\">{{FCRNO}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 445px;left: 633px;color:black;z-index:1;white-space: pre;\">{{APPLYTO}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 158px;left: 20px;color:black;z-index:0;white-space: pre;\">{{CONSIGNEE}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 157px;left: 610px;color:black;z-index:0;white-space: pre;\">{{EXPNO}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 321px;left: 20px;color:black;z-index:0;white-space: pre;\">{{NOTIFYPARTY}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 445px;left: 30px;color:black;z-index:0;white-space: pre;\">{{CARRIER}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 445px;left: 331px;color:black;z-index:0;white-space: pre;\">{{RECPTPLACE}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 495px;left: 30px;color:black;z-index:0;white-space: pre;\">{{VESSEL}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 495px;left: 331px;color:black;z-index:0;white-space: pre;\">{{POL}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 541px;left: 30px;color:black;z-index:0;white-space: pre;\">{{POD}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 541px;left: 331px;color:black;z-index:0;white-space: pre;\">{{PODEL}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 650px;left: 30px;color:black;z-index:0;white-space: pre;\">{{MARKSANDNOS}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 650px;left: 192px;color:black;z-index:0;white-space: pre;\">{{NOOFPKGS}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 650px;left: 339px;color:black;z-index:0;white-space: pre;\">{{ITCDESC}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 650px;left: 854px;color:black;z-index:0;white-space: pre;\">{{GRWT}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 650px;left: 989px;color:black;z-index:0;white-space: pre;\">{{VOL}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 700px;left: 30px;color:black;z-index:0;white-space: pre;\">{{MISC}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left: 300px;color:black;z-index:0;white-space: pre;\">{{PP}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left: 380px;color:black;z-index:0;white-space: pre;\">{{CC}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left: 300px;color:black;z-index:0;white-space: pre;\">{{TOTPP}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left: 380px;color:black;z-index:0;white-space: pre;\">{{TOTCC}}</p>\n\t\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1307px;left: 837px;color:black;z-index:0;white-space: pre;\">{{PLACEDATE}}</p> \n                     </div>\n        "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"]])
    ], ExptFCRPrint);
    return ExptFCRPrint;
}());

var ExptMTOprint = /** @class */ (function () {
    function ExptMTOprint(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrHbltypesharedvataSerice) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this.baseUrl = 'Export/Export_FCR_PRINTPREVIEW';
        this.SHIPPER = "";
        this.BOOKINGNO = "";
        this.CONSIGNEE = "";
        this.NOTIFYPARTY = "";
        this.FCRNO = "";
        this.FCRDT = "";
        this.APPLYTO = "";
        this.CARRIER = "";
        this.RECPTPLACE = "";
        this.VESSEL = "";
        this.POL = "";
        this.POD = "";
        this.PODEL = "";
        this.APPLYTO1 = "";
        this.MARKSANDNOS = "";
        this.NOOFPKGS = "";
        this.ITCDESC = "";
        this.GRWT = "";
        this.VOL = "";
        this.MISC = "";
        this.PP = "";
        this.CC = "";
        this.TOTPP = "";
        this.TOTCC = "";
        this.PLACEDATE = "";
        this.EXPNO = "";
        this.Bltype = "";
        this.buttonStatus = false;
    }
    ExptMTOprint.prototype.ngOnChanges = function () {
        var _this = this;
        this.hbltype = this._fcrsharedvataSerice.fcrHbltypesharedData;
        //
        var jsonExport = { FCRNO: this._fcrsharedvataSerice.fcrsharedData };
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.FCRDET = data.Table;
                _this.SHIPPER = _this.FCRDET[0].SHIPPER;
                _this.CONSIGNEE = _this.FCRDET[0].CONSIGNEE;
                _this.NOTIFYPARTY = _this.FCRDET[0].NOTIFYPARTY;
                _this.FCRNO = _this.FCRDET[0].FCRNO;
                _this.FCRDT = _this.FCRDET[0].FCRDT;
                _this.APPLYTO = _this.FCRDET[0].APPLYTO;
                _this.CARRIER = _this.FCRDET[0].CARRIER;
                _this.RECPTPLACE = _this.FCRDET[0].RECPTPLACE;
                _this.VESSEL = _this.FCRDET[0].VESSEL;
                _this.POL = _this.FCRDET[0].POL;
                _this.POD = _this.FCRDET[0].POD;
                _this.PODEL = _this.FCRDET[0].PODEL;
                _this.APPLYTO1 = _this.FCRDET[0].APPLYTO;
                _this.MARKSANDNOS = _this.FCRDET[0].MARKSANDNOS;
                _this.NOOFPKGS = _this.FCRDET[0].NOOFPKGS;
                _this.ITCDESC = _this.FCRDET[0].ITCDESC;
                _this.GRWT = _this.FCRDET[0].GRWT;
                _this.VOL = _this.FCRDET[0].VOL;
                _this.MISC = _this.FCRDET[0].MISC;
                _this.PP = _this.FCRDET[0].PP;
                _this.CC = _this.FCRDET[0].CC;
                _this.TOTPP = _this.FCRDET[0].TOTPP;
                _this.TOTCC = _this.FCRDET[0].TOTCC;
                _this.PLACEDATE = _this.FCRDET[0].PLACEDATE;
                _this.EXPNO = _this.FCRDET[0].EXPNO;
                _this._toasterService.toast('info', 'Complete', 'Data filled successfully');
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].statusText);
            }
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
        }, function () {
        });
    };
    ExptMTOprint.prototype.finalMTOPrint = function () {
        //let PrintFCRData = this.FCR.nativeElement.InnerHTML;
        var jsonExport = { fcr: this._fcrsharedvataSerice.fcrsharedData, citycode: this._loginService.getLogin()[0].CITYCODE, userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/FCR_printflagUpdate", jsonExport)
            .subscribe(function (data) {
        });
        var content = this.MTO.nativeElement.innerHTML;
        var mywindow = window.open('', 'Print', 'height=600,width=800');
        mywindow.document.write('<html><head><title>Print</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(content);
        mywindow.document.write('</body></html>');
        mywindow.document.close();
        mywindow.focus();
        mywindow.print();
        mywindow.close();
    };
    ExptMTOprint.prototype.ngOnInit = function () {
    };
    ExptMTOprint.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExptMTOprint.prototype, "hbltype", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("print", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExptMTOprint.prototype, "MTO", void 0);
    ExptMTOprint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mto-print',
            // templateUrl: 'exp_prt_fcr_printview.component.html'
            template: "\n                <button name=\"btnMtoPrint\"   (click)=\"finalMTOPrint()\">Print</button>\n                    <div id=\"divMTO\" #print>\n                <p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top:20px;left:20px;color:black;z-index:1;white-space: pre;\">{{SHIPPER}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top:30px;left:430px;color:black;z-index:1;white-space: pre;\">{{BOOKINGNO}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top:-9px;left:790px;color:black;z-index:1;white-space: pre;\">{{FCRNO}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top:31px;left:790px;color:black;z-index:1;white-space: pre;\">{{EXPNO}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1314px;left:20px;color:black;z-index:1;white-space: pre;\">{{APPLYTO}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 162px;left:20px;color:black;z-index:0;white-space: pre;\">{{CONSIGNEE}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 337px;left:20px;color:black;z-index:0;white-space: pre;\">{{NOTIFYPARTY}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 498px;left:30px;color:black;z-index:0;white-space: pre;\">{{CARRIER}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 335px;left:260px;color:black;z-index:0;white-space: pre;\">{{RECPTPLACE}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 580px;left:555px;color:black;z-index:0;white-space: pre;\">{{VESSEL}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 580px;left:885px;color:black;z-index:0;white-space: pre;\">{{POL}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 610px;left:30px;color:black;z-index:0;white-space: pre;\">{{POD}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 610px;left:341px;color:black;z-index:0;white-space: pre;\"></p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 670px;left:30px;color:black;z-index:0;white-space: pre;\">{{MARKSANDNOS}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 670px;left:180px;color:black;z-index:0;white-space: pre;\">{{NOOFPKGS}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 670px;left:365px;color:black;z-index:0;white-space: pre;\">{{ITCDESC}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 670px;left:793px;color:black;z-index:0;white-space: pre;\">{{GRWT}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 670px;left:935px;color:black;z-index:0;white-space: pre;\">{{VOL}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 845px;left:30px;color:black;z-index:0;white-space: pre;\">{{MISC}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left:367px;color:black;z-index:0;white-space: pre;\">{{PP}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left:542px;color:black;z-index:0;white-space: pre;\">{{CC}}</p>\n\t\t\t\t<p style=\"FONT-SIZE: 14px;font-family: Verdana;position:absolute;top: 1227px;left:810px;color:black;z-index:0;white-space: pre;\">{{PLACEDATE}}</p>\n                </div>\n        "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"]])
    ], ExptMTOprint);
    return ExptMTOprint;
}());

var ExptPrint = /** @class */ (function () {
    function ExptPrint(_router, _dataService, _auth, _toasterService, _loginService, _fcrsharedvataSerice, _fcrHbltypesharedvataSerice) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._fcrsharedvataSerice = _fcrsharedvataSerice;
        this._fcrHbltypesharedvataSerice = _fcrHbltypesharedvataSerice;
        this.PType = "";
    }
    ExptPrint.prototype.ngOnInit = function () {
        this.PType = this._fcrsharedvataSerice.fcrHbltypesharedData;
    };
    ExptPrint.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"] }
    ]; };
    ExptPrint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seablprint',
            template: __webpack_require__(/*! raw-loader!./exp_prt_print.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/fcr/exp_prt_print.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["FcrSharedDataService"]])
    ], ExptPrint);
    return ExptPrint;
}());



/***/ })

}]);
//# sourceMappingURL=fcr-exp-prnt-fcr-module.js.map