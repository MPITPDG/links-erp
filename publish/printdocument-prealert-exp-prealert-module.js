(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printdocument-prealert-exp-prealert-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.auto.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/prealert/prealert.auto.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading centerlabel\">\r\n\t\t\t   <strong><u>CONSOLE PENDING LIST (AIR)</u></strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"searchListLength == 0\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<img src=\"assets/img/loading.gif\" />\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"searchListLength == -1\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<span class=\"col-form-span-label\">No Record Found!</span>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"row y350heightscroll\" *ngIf=\"searchList.length > 0\">\r\n\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t\t\t<th>View</th>\r\n\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t<th>MAWB No</th>\r\n\t\t\t\t\t\t<th>MAWB DT.</th>\r\n\t\t\t\t\t\t<th>ETD</th>\r\n\t\t\t\t\t\t<th>ETA</th>\r\n\t\t\t\t\t\t<th>HAWB No.</th>\r\n\t\t\t\t\t\t<th>HAWB DT.</th>\r\n\t\t\t\t\t\t<th>Ex-Jobno.</th>\r\n\t\t\t\t\t\t<th>No of Pkgs</th>\r\n\t\t\t\t\t\t<th>GRWT</th>\r\n\t\t\t\t\t\t<th>CBM</th>\r\n\t\t\t\t\t\t<th>Consignee</th>\r\n\t\t\t\t\t\t<th>Flight Details</th>\r\n\t\t\t\t\t\t<th>MAWB FRT</th>\r\n\t\t\t\t\t\t<th>Invoice Type</th>\r\n\t\t\t\t\t\t<th>MAWBDEST</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of searchList\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button (click)=\"autoClick(obj.MAWBNO,obj.CITY)\" class=\"btn btn-sm btn-success\" *ngIf=\"obj.MAWBNO != ''\">\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-window-maximize\"></i>&nbsp;Generate</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<!-- <button class=\"btn btn-sm btn-warning\" *ngIf=\"obj.ISDISABLED == true\" [disabled]=\"obj.ISDISABLED\">\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-download\"></i>Processing..</span>\r\n\t\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!-- <ng-select [items]=\"[{VALUEFIELD: 'LIL', TEXTFIELD: 'LIL'},{VALUEFIELD: 'LIL', TEXTFIELD: 'PAR'}]\"\r\n\t\t\t\t\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"obj.CITY\"\r\n\t\t\t\t\t\t\t\t\t   class=\"form-control width120\"\r\n\t\t\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t\t\t</ng-select> -->\r\n\t\t\t\t\t\t\t<select class=\"form-control width120\"  [(ngModel)]=\"obj.CITY\" >\r\n\t\t\t\t\t\t\t\t\t<option value=\"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"LIL\">LIL</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"PAR\">PAR</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MAWBNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.AEROBILLDT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETD}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETA}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.HOUSEBILLNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.HOUSEBILLDT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_NOOFPGS}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_GRWT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_VOLUME}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONS_NAME}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.FLIGHTDET}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MAWBFRT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_INVTYPE}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MAWBDEST}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/prealert/prealert.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<app-export-prealert-prepare [searchList]=\"searchList\" [searchListLength]=\"searchListLength\" *ngIf=\"viewType == 'Prepare'\" (result)=\"PrealertPrepare($event)\"></app-export-prealert-prepare>\r\n\t<app-export-prealert-auto [searchList]=\"searchList\" [searchListLength]=\"searchListLength\" *ngIf=\"viewType == 'Auto'\" (result)=\"AutoPrealert($event)\"></app-export-prealert-auto>\r\n\t<app-export-prealert-sending-through *ngIf=\"viewType == 'Sending'\" (result)=\"ExitPrealert($event)\" ></app-export-prealert-sending-through>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.prepare.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/prealert/prealert.prepare.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading centerlabel\">\r\n\t\t\t   <strong><u>Prepare Pre-Alert</u></strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- <div class=\"row\" *ngIf=\"searchListLength == 0\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<img src=\"assets/img/loading.gif\" />\r\n\t</div>\r\n</div> -->\r\n<!-- <div class=\"row\" *ngIf=\"searchListLength == -1\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<span class=\"col-form-span-label\">No Record Found!</span>\r\n\t</div>\r\n</div> -->\r\n<div class=\"row\">\r\n\t\t<div class=\"col-sm-3\"></div>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<div class=\"row\"  >\r\n\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td><span class=\"col-form-span-label\"><b>MAWBNO</b></span></td>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<td> <input [(ngModel)]=\"MAWBNO\" type=\"text\"  maxlength=\"15\" class=\"form-control width150\"></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\"><b>REMARK</b></span></td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td> <input [(ngModel)]=\"REMARK\" type=\"text\"  maxlength=\"50\" class=\"form-control width250\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\" class=\"centerlabel\" >\r\n\t\t\t\t\t\t\t\t<button (click)=\"previewClick()\" class=\"btn btn-sm btn-info\"  >\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>&nbsp;Preview</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t </td>\r\n\t\t\t\t\t\r\n\t\t\t\t</tr>\r\n\t\t\t\t<!-- <thead>\r\n\t\t\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t\t\t<th class=\"width150\">View</th>\r\n\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t<th>MAWB No</th>\r\n\t\t\t\t\t\t<th>MAWB DT.</th>\r\n\t\t\t\t\t\t<th>ETD</th>\r\n\t\t\t\t\t\t<th>ETA</th>\r\n\t\t\t\t\t\t<th>HAWB No.</th>\r\n\t\t\t\t\t\t<th>HAWB DT.</th>\r\n\t\t\t\t\t\t<th>Ex-Jobno.</th>\r\n\t\t\t\t\t\t<th>No of Pkgs</th>\r\n\t\t\t\t\t\t<th>GRWT</th>\r\n\t\t\t\t\t\t<th>CBM</th>\r\n\t\t\t\t\t\t<th>Consignee</th>\r\n\t\t\t\t\t\t<th>Flight Details</th>\r\n\t\t\t\t\t\t<th>MAWB FRT</th>\r\n\t\t\t\t\t\t<th>Invoice Type</th>\r\n\t\t\t\t\t\t<th>MAWBDEST</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of searchList\">\r\n\t\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t\t<button (click)=\"previewClick(obj.MAWBNO, obj.REMARK)\" class=\"btn btn-sm btn-info\" *ngIf=\"obj.MAWBNO !='' \">\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>&nbsp;Preview</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><textarea rows=\"2\" class=\"form-control width150\"  maxlength=\"240\" [(ngModel)]=\"obj.REMARK\"></textarea></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MAWBNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.AEROBILLDT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETD}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.ETA}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.HOUSEBILLNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.HOUSEBILLDT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_NOOFPGS}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_GRWT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_VOLUME}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONS_NAME}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.FLIGHTDET}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MAWBFRT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPT_INVTYPE}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MAWBDEST}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody> -->\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-sm-3\"></div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.sending.through.expt.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/prealert/prealert.sending.through.expt.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading centerlabel\">\r\n\t\t\t   <strong><u>CONSOLE AUTO PREALERT</u></strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"setLoader==0\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<img src=\"assets/img/loading.gif\" /><br />\r\n\t\t<span class=\"col-form-span-label\">Please wait until Pre-Alert send !</span>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"setLoader==1\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<img src=\"assets/img/loading.gif\" /><br />\r\n\t\t<span class=\"col-form-span-label\">Pre-Alert Send Successfully. Please wait for Details.........</span>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"setLoader==2\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<span class=\"col-form-span-label\">Timeout Error.........</span>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"row y350heightscroll\" *ngIf=\"consoleList.length > 0\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"title-head table-darkgreen-main\">\r\n\t\t\t\t\t\t<!-- <th>Sr no</th> -->\r\n\t\t\t\t\t\t<th>ConsoleNo</th>\r\n\t\t\t\t\t\t<th>ConsoleDate</th>\r\n\t\t\t\t\t\t<th>SentFrom</th>\r\n\t\t\t\t\t\t<th>Pkgs</th>\r\n\t\t\t\t\t\t<th>Weight</th>\r\n\t\t\t\t\t\t<th>Volume</th>\r\n\t\t\t\t\t\t<th>CHBLWT</th>\r\n\t\t\t\t\t\t<th>Agent_Name</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<ng-container *ngFor=\"let objCon of consoleList; let i=index\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<!-- <td><span class=\"col-form-span-label\"><strong>{{i + 1}})</strong></span></td> -->\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\"><b>{{objCon.CONSOLENO}}</b></span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.CONSOLEDT}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.SENTFROM}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.NOOFPKGS}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.WEIGHT}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.VOLUME}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.CHBLWT}}</span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objCon.SUP_NAME}}</span></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>&nbsp;</td>\r\n\t\t\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr class=\"title-head table-darkgreen-main\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th>JobNo.</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Hawbno</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Hawbdt</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Pkgs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Weight</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Volume</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Impoter</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Expoter</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Export_JobNo</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let objJob of jobList\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"objJob.JOB_CONSOLENO == objCon.CONSOLENO\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\"><b>{{objJob.JOBNO}}</b></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.HAWBNO}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.HAWBDT}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.NOOFPKGS}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.WEIGHT}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.VOLUME}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.IMPOTER}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.EXPOTER}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objJob.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"title-head table-darkgreen-main\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>OrderNo</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pcs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let objOrder of orderList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"objJob.JOB_CONSOLENO == objOrder.ORDER_CONSOLENO\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objOrder.ORDERNO}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{objOrder.NOOFPCS}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"consoleList.length > 0\">\r\n\t<div class=\"col-sm-12 centerlabel\">\r\n\t\t<button (click)=\"exitClick()\" class=\"btn btn-sm btn-danger\">\r\n\t\t\tExit&nbsp;<i class=\"fa fa-share-square\"></i>\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/export/printdocument/prealert/exp-prealert.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/export/printdocument/prealert/exp-prealert.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExportPrealertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPrealertModule", function() { return ExportPrealertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _exp_prealert_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exp-prealert.routing */ "./src/app/export/printdocument/prealert/exp-prealert.routing.ts");
/* harmony import */ var _prealert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prealert.component */ "./src/app/export/printdocument/prealert/prealert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ExportPrealertModule = /** @class */ (function () {
    function ExportPrealertModule() {
    }
    ExportPrealertModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_exp_prealert_routing__WEBPACK_IMPORTED_MODULE_8__["ExportPrealertRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_prealert_component__WEBPACK_IMPORTED_MODULE_9__["PreAlertComponent"], _prealert_component__WEBPACK_IMPORTED_MODULE_9__["PreAlertPrepareComponent"], _prealert_component__WEBPACK_IMPORTED_MODULE_9__["PreAlertAutoComponent"], _prealert_component__WEBPACK_IMPORTED_MODULE_9__["PreAlertPrepareSendingThroughComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportPrealertModule);
    return ExportPrealertModule;
}());



/***/ }),

/***/ "./src/app/export/printdocument/prealert/exp-prealert.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/export/printdocument/prealert/exp-prealert.routing.ts ***!
  \***********************************************************************/
/*! exports provided: ExportPrealertRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPrealertRoutingModule", function() { return ExportPrealertRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prealert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prealert.component */ "./src/app/export/printdocument/prealert/prealert.component.ts");
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
            title: 'Prealert'
        },
        children: [
            { path: 'prealert/prepare', component: _prealert_component__WEBPACK_IMPORTED_MODULE_2__["PreAlertComponent"], data: { title: 'Print-Document / Prealert / Prepare' } },
            { path: 'prealert/auto', component: _prealert_component__WEBPACK_IMPORTED_MODULE_2__["PreAlertComponent"], data: { title: 'Print-Document / Prealert / Auto' } },
        ]
    }
];
var ExportPrealertRoutingModule = /** @class */ (function () {
    function ExportPrealertRoutingModule() {
    }
    ExportPrealertRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportPrealertRoutingModule);
    return ExportPrealertRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/printdocument/prealert/prealert.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/export/printdocument/prealert/prealert.component.ts ***!
  \*********************************************************************/
/*! exports provided: PreAlertPrepareComponent, PreAlertAutoComponent, PreAlertPrepareSendingThroughComponent, PreAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreAlertPrepareComponent", function() { return PreAlertPrepareComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreAlertAutoComponent", function() { return PreAlertAutoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreAlertPrepareSendingThroughComponent", function() { return PreAlertPrepareSendingThroughComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreAlertComponent", function() { return PreAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreAlertPrepareComponent = /** @class */ (function () {
    function PreAlertPrepareComponent() {
        this.searchList = [];
        this.searchListLength = 0;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.MAWBNO = "";
        this.REMARK = "NOTE:- ORIGINAL GSP IS ATTACHED IN DESTINATION POUCH WITH MAWB";
    }
    PreAlertPrepareComponent.prototype.ngOnChanges = function () {
        for (var i = 0; i < this.searchList.length; i++) {
            this.searchList[i]["REMARK"] = "NOTE:- ORIGINAL GSP IS ATTACHED IN DESTINATION POUCH WITH MAWB";
            this.searchList[i]["ISDISABLED"] = false;
        }
    };
    PreAlertPrepareComponent.prototype.previewClick = function () {
        var data = { MAWBNO: this.MAWBNO, REMARK: this.REMARK };
        this.result.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreAlertPrepareComponent.prototype, "searchList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PreAlertPrepareComponent.prototype, "searchListLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreAlertPrepareComponent.prototype, "result", void 0);
    PreAlertPrepareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-prealert-prepare',
            template: __webpack_require__(/*! raw-loader!./prealert.prepare.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.prepare.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PreAlertPrepareComponent);
    return PreAlertPrepareComponent;
}());

var PreAlertAutoComponent = /** @class */ (function () {
    function PreAlertAutoComponent(_toasterService, _mawbnoshrd) {
        this._toasterService = _toasterService;
        this._mawbnoshrd = _mawbnoshrd;
        this.searchList = [];
        this.searchListLength = 0;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PreAlertAutoComponent.prototype.ngOnChanges = function () {
        for (var i = 0; i < this.searchList.length; i++) {
            this.searchList[i]["CITY"] = null;
            this.searchList[i]["ISDISABLED"] = false;
        }
    };
    PreAlertAutoComponent.prototype.autoClick = function (mawbno, city) {
        if (city == null) {
            this._toasterService.toast('error', 'Error', "PLEASE SELECT THE CITY WHERE YOU WANT TO SEND THE PREALERT !");
        }
        else {
            var answer = confirm("Are you sure you want to generate Prealert?");
            if (answer) {
                var data = { MAWBNO: mawbno, CITYCODE: city };
                this.result.emit(data);
            }
        }
    };
    PreAlertAutoComponent.ctorParameters = function () { return [
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["prealertshareservice"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreAlertAutoComponent.prototype, "searchList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PreAlertAutoComponent.prototype, "searchListLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreAlertAutoComponent.prototype, "result", void 0);
    PreAlertAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-prealert-auto',
            template: __webpack_require__(/*! raw-loader!./prealert.auto.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.auto.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["prealertshareservice"]])
    ], PreAlertAutoComponent);
    return PreAlertAutoComponent;
}());

var PreAlertPrepareSendingThroughComponent = /** @class */ (function () {
    // @Output() results: EventEmitter<any> = new EventEmitter<any>();
    function PreAlertPrepareSendingThroughComponent(_dataService, _toasterService, _loginService, _mawbnoshrd) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._mawbnoshrd = _mawbnoshrd;
        this.Mawbno = null;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setLoader = 0;
        this.consoleList = [];
        this.jobList = [];
        this.orderList = [];
    }
    PreAlertPrepareSendingThroughComponent.prototype.ngOnInit = function () {
        this.setSendingData();
        //this.getSendingViewData();
    };
    PreAlertPrepareSendingThroughComponent.prototype.ngOnChanges = function () { };
    PreAlertPrepareSendingThroughComponent.prototype.getSendingViewData = function () {
        var _this = this;
        //  console.log(this.result.Mawbno)
        var _jsonData = {
            Type1: this._mawbnoshrd.mawbnoshrd,
        };
        this._dataService.getData("Export/PrintDocumentPrealertSendingView", _jsonData)
            .subscribe(function (data) {
            _this.setLoader = 3;
            _this.consoleList = data.Table1;
            _this.jobList = data.Table2;
            _this.orderList = data.Table3;
        });
    };
    PreAlertPrepareSendingThroughComponent.prototype.setSendingData = function () {
        var _this = this;
        var _jsonData = {
            Type1: this._mawbnoshrd.mawbnoshrd,
            Type2: this._loginService.getLogin()[0].CITYCODE,
            Type3: this._loginService.getLogin()[0].CMP_USERNAME,
            Type4: this._loginService.getLogin()[0].CMP_USERNAME //Change later by Router Ip
        };
        this._dataService.Common("Export/PrintDocumentPrealertSending", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].status == 100) {
                _this.setLoader = 1;
                _this.getSendingViewData();
            }
            else {
                _this.setLoader = 2;
            }
        });
    };
    PreAlertPrepareSendingThroughComponent.prototype.exitClick = function () {
        this.result.emit(true);
    };
    PreAlertPrepareSendingThroughComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["prealertshareservice"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreAlertPrepareSendingThroughComponent.prototype, "Mawbno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreAlertPrepareSendingThroughComponent.prototype, "result", void 0);
    PreAlertPrepareSendingThroughComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-prealert-sending-through',
            template: __webpack_require__(/*! raw-loader!./prealert.sending.through.expt.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.sending.through.expt.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["prealertshareservice"]])
    ], PreAlertPrepareSendingThroughComponent);
    return PreAlertPrepareSendingThroughComponent;
}());

var PreAlertComponent = /** @class */ (function () {
    function PreAlertComponent(_router, _dataService, _auth, _toasterService, _loginService, _mawbnoshrd, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._mawbnoshrd = _mawbnoshrd;
        this._loaderService = _loaderService;
        this.viewType = '';
        this.rights = null;
        this.searchList = [];
        this.searchListLength = 0;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PreAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        var pageType = /prepare/gi;
        var curUrl = this._router.url;
        if (curUrl.search(pageType) != -1) {
            this.viewType = 'Prepare';
            this.rights = 349;
        }
        else {
            this.viewType = 'Auto';
            this.rights = 350;
            this._loginService.verifyRights(this.rights, '')
                .subscribe(function (data) {
                _this._loginService.checkVerify('View', data); //For verify user access
                _this.getData('air');
            });
        }
        //this.viewType = 'Sending';
    };
    PreAlertComponent.prototype.getData = function (mode) {
        var _this = this;
        var _jsonData = {
            Type1: this._loginService.getLogin()[0].CITYCODE,
            Type2: mode,
            Type3: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/PrintDocumentPrealertPageload", _jsonData)
            .subscribe(function (data) {
            _this.searchListLength = (data.Table.length == 0) ? -1 : -2;
            _this.searchList = data.Table;
        });
    };
    PreAlertComponent.prototype.EnableDisablePrealertButton = function (mawbno, isdisabled) {
        var updateItem = this.searchList.find(function (item) { return item.MAWBNO === mawbno; });
        var index = this.searchList.indexOf(updateItem);
        this.searchList[index]["ISDISABLED"] = isdisabled;
    };
    PreAlertComponent.prototype.PrealertPrepare = function (prepareData) {
        var _this = this;
        this._loaderService.display(true);
        // this.EnableDisablePrealertButton(prepareData.MAWBNO, true);
        var _jsonData = {
            Type1: prepareData.MAWBNO,
            Type2: prepareData.REMARK
        };
        var filename = "PREALERT_" + prepareData.MAWBNO + ".doc";
        this._dataService.getDownload("Export/PrintDocumentPrealertPrepare_word", _jsonData, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadDocFileByUrl(data, filename);
            _this._loaderService.display(false);
        });
        // this._dataService.Common("Export/PrintDocumentPrealertPrepare", _jsonData)
        //     .subscribe((data: any) => {
        //         this.EnableDisablePrealertButton(prepareData.MAWBNO, false);
        //         let items = '';
        //         let msg = '';
        //         items = data.Table[0].STATUS.split("#")[0];
        //         msg = data.Table[0].STATUS.split("#")[1];
        //         if (items == "101") {
        //             alert("Session Time Out! Please Re-Login.");
        //         }
        //         else if (items == "102") {
        //             alert('Error! Please contact System Administrator.');
        //         }
        //         else if (items == "100") {
        //             var openWin = window.open("about:blank", "_blank");
        //             if (!openWin) {
        //                 alert("A popup blocker was detected. Please Remove popupblocker for this site");
        //             } else {
        //                 openWin.close();
        //                 window.open(msg, "_blank");
        //             }
        //         }
        //     });
    };
    PreAlertComponent.prototype.EnableDisableAutoButton = function (mawbno, isdisabled) {
        var updateItem = this.searchList.find(function (item) { return item.MAWBNO === mawbno; });
        var index = this.searchList.indexOf(updateItem);
        this.searchList[index]["ISDISABLED"] = isdisabled;
    };
    PreAlertComponent.prototype.AutoPrealert = function (autoData) {
        var _this = this;
        this._loaderService.display(true);
        this.EnableDisableAutoButton(autoData.MAWBNO, true);
        var _jsonData = {
            Type1: autoData.MAWBNO,
            Type2: autoData.CITYCODE,
            Type3: this._loginService.getLogin()[0].CMP_USERNAME,
            Type4: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.Common("Export/PrintDocumentPrealertAuto", _jsonData)
            .subscribe(function (data) {
            _this.EnableDisableAutoButton(autoData.MAWBNO, false);
            var items = '';
            var msg = '';
            items = data.Table[0].STATUS;
            msg = data.Table[0].STATUS;
            if (items == "101") {
                _this._toasterService.toast('error', 'Error', "HAWB No. is not Entered.");
                _this._loaderService.display(false);
            }
            else if (items == "102") {
                var concode = data.Table[0].CON_NAME;
                _this._toasterService.toast('error', 'Error', concode + 'These clients have not been added in client master \n Pleast contact administrator.');
                _this._loaderService.display(false);
            }
            else if (items == '103') {
                _this._toasterService.toast('error', 'Error', 'CONSOLIDATION IS ALREADY DONE FOR MAWB ' + data.MAWBNO);
                _this._loaderService.display(false);
            }
            else if (items == '104') {
                _this._toasterService.toast('error', 'Error', 'CHARGABLE WT IS NOT ENTERD FOR THIS MAWBNO  ' + data.MAWBNO);
                _this._loaderService.display(false);
            }
            else if (items == '105') {
                _this._toasterService.toast('error', 'Error', 'NET RATE IS NOT ENTERD FOR THIS MAWBNO ' + data.MAWBNO);
                _this._loaderService.display(false);
            }
            else if (items == '109') {
                var EXPTNO_CUS = data.Table[0].EXPTNO_CUS;
                _this._toasterService.toast('error', 'Error', 'CUSTOM DATE IS NOT ENTERED ' + EXPTNO_CUS);
                _this._loaderService.display(false);
            }
            else if (items == '110') {
                var EXPTNO_CUS = data.Table[0].EXPTNO;
                _this._toasterService.toast('error', 'Error', 'APPROVAL DATE MISSING  ' + EXPTNO_CUS);
                _this._loaderService.display(false);
            }
            else if (items == '111') {
                var EXPTNO_CUS = data.Table[0].EXPTNO;
                _this._toasterService.toast('error', 'Error', "ETA SHOULD BE GRATER THAN ETD");
                _this._loaderService.display(false);
            }
            else if (items == "100") {
                _this._toasterService.toast('success', 'Message', "Console is generated Successfully ,Console No." + data.Table[0].CONSOLENO.substring(4, 14));
                _this._loaderService.display(false);
                _this.viewType = 'Sending';
                _this._mawbnoshrd.mawbnoshrd = autoData.MAWBNO;
                // let mawb ={ MAWBNO : autoData.MAWBNO}
                // this.result.emit(mawb);
            }
            else {
                _this._toasterService.toast('error', 'Error', "Please contact System Administrator");
                _this._loaderService.display(false);
            }
        });
    };
    PreAlertComponent.prototype.ExitPrealert = function (event) {
        this.viewType = 'Auto';
        this.searchList = [];
        this.searchListLength = 0;
        this.getData('air');
    };
    PreAlertComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["prealertshareservice"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreAlertComponent.prototype, "result", void 0);
    PreAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./prealert.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/prealert/prealert.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["prealertshareservice"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], PreAlertComponent);
    return PreAlertComponent;
}());



/***/ })

}]);
//# sourceMappingURL=printdocument-prealert-exp-prealert-module.js.map