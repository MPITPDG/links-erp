(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printdocument-air-printdoc-air-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/Mawb_Tarifrating.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/Mawb_Tarifrating.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #MAWBModelpopup=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header formheading\">\r\n          <span class=\"modal-title pull-left\">\r\n              <strong>{{title}}</strong>\r\n          </span>\r\n        </div>\r\n        <div class=\"modal-body modal-fix-body\">\r\n                <app-MAWB_tariffRate [exptno]=\"exptno\" [type]=\"'MawbTarif'\" [hidden]=\"(type == 'MawbTarif')? false : true\" (result)=\"onSuccess($event)\" (disabledBtn)=\"onDisabled($event)\" #MawbRate></app-MAWB_tariffRate>\r\n          </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"pull-left\">\r\n            <button class='btn btn-primary' (click)=\"updateData()\" name=\"updateButton\" *ngIf=\"type != 'VIEW'\" #updateButton><app-font-changer [fontIndex]=\"'4'\"></app-font-changer> Update</button>\r\n            <button class=\"btn btn-danger\" (click)=\"hide()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Abort</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n     </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb-printupdate.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/hawb-printupdate.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Export - Master HAWB NO</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2\"> </div>\r\n    <div class=\"col-sm-8\"> \r\n        <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n            <tr>\r\n                <td colspan=\"4\"><span class=\"col-form-span-label\" style=\"margin-left: 600px;\">{{HAWBNO}} - {{HAWBDT}}</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Shipper Name and Address</span>\r\n                    <br />\r\n                    <textarea style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" OnlyCharacter=\"true\" [(ngModel)]=\"shipper\"></textarea>\r\n                    \r\n                </td>\r\n                <td rowspan=\"2\">\r\n                    <span class=\"col-form-span-label\" > <b>{{COM_NAME}}</b> <br/> <b>&nbsp;&nbsp;{{CMP_CITY}}</b></span>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Consignee Name and Address</span>\r\n                    <br />\r\n                    <!-- <input [(ngModel)]=\"consignee\" type=\"text\" multiple=\"multiple\" class=\"form-control width250 \" style=\"height:50px\"> -->\r\n                    <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\"  OnlyCharacter=\"true\" [(ngModel)]=\"consignee\"></textarea>\r\n                </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Issuing Carriers agent name and City</span>\r\n                    <br /> <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" OnlyCharacter=\"true\" [(ngModel)]=\"agentname\"></textarea>\r\n                    <!-- <input [(ngModel)]=\"agentname\" type=\"text\" multiple=\"multiple\" class=\"form-control  width250 \" style=\"height:50px\"> -->\r\n                </td>\r\n                <td rowspan=\"2\"> <span class=\"col-form-span-label\">Accounting Information </span>\r\n                  <br />       <!--  <input [(ngModel)]=\"actinfo\" type=\"text\" multiple=\"multiple\" class=\"form-control  width250 \" style=\"height:50px\"> -->\r\n                    <textarea rows=\"6\"   class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"actinfo\"></textarea>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Agent's IATA Code </span>\r\n                    <br />\r\n                    <input [(ngModel)]=\"IATACode\" type=\"text\" multiple=\"multiple\" class=\"form-control width150 \">\r\n                    <div>\r\n                        <span class=\"col-form-span-label\">Account no</span>\r\n                        <br />\r\n                        <input [(ngModel)]=\"IATAcct\" type=\"text\" multiple=\"multiple\" class=\"form-control width150 \">\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">Airport of Departure (Addr. of First Carrier) and Requested\r\n                        Routing</span>\r\n                    <br />\r\n                     <input [(ngModel)]=\"airportdep\" type=\"text\" multiple=\"multiple\" class=\"form-control  width150\"> \r\n                   \r\n                </td>\r\n                <div>\r\n                    <span class=\"col-form-span-label\">  Reference No</span>\r\n                    <span class=\"col-form-span-label\"> Optional Shipping Information</span>\r\n                </div>\r\n            </tr>\r\n\r\n        </table>\r\n        <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n            <tr>\r\n                <td> <span class=\"col-form-span-label\">  To</span> </td>\r\n                <td> <span class=\"col-form-span-label\">   By First Carrier</span></td>\r\n                <td> <span class=\"col-form-span-label\">  to</span> </td>\r\n                <td> <span class=\"col-form-span-label\">  by</span> </td>\r\n                <td> <span class=\"col-form-span-label\">   to</span> </td>\r\n                <td> <span class=\"col-form-span-label\">   by</span> </td>\r\n                <td> <span class=\"col-form-span-label\">   Currency </span> </td>\r\n                <td> <span class=\"col-form-span-label\">  CHGS Code</span> </td>\r\n                <td> <span class=\"col-form-span-label\">   PPD</span> </td>\r\n                <td> <span class=\"col-form-span-label\">  COLL</span> </td>\r\n                <td> <span class=\"col-form-span-label\">  PPD</span> </td>\r\n                <td> <span class=\"col-form-span-label\">   COLL</span> </td>\r\n                <td> <span class=\"col-form-span-label\">  Declared Value of Carriage</span> </td>\r\n                <td> <span class=\"col-form-span-label\">  Declared Value of Custom</span> </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"to1\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"bycarrier1\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"to2\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"by2\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"to3\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"by3\" type=\"text\" class=\"form-control\"></td>\r\n                <td> <input [(ngModel)]=\"currency\" type=\"text\" class=\"form-control\"></td>\r\n                <td> <input [(ngModel)]=\"chgs\" type=\"text\" class=\"form-control\"></td>\r\n                <td> <input [(ngModel)]=\"ppd1\" type=\"text\" class=\"form-control\"></td>\r\n                <td> <input [(ngModel)]=\"coll1\" type=\"text\" class=\"form-control\"></td>\r\n                <td> <input [(ngModel)]=\"ppd2\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"coll2\" type=\"text\" class=\"form-control\"> </td>\r\n                <td> <input [(ngModel)]=\"valcarriage\" type=\"text\" class=\"form-control\"></td>\r\n                <td> <input [(ngModel)]=\"valcustom\" type=\"text\" class=\"form-control\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">   Airport Of Destination</span>\r\n                    <br />\r\n                    <input [(ngModel)]=\"airprtdest\" type=\"text\" class=\"form-control width150\">\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">  Requested Flight/date </span>\r\n                    <br />\r\n                   \r\n                    <input [(ngModel)]=\"reqfltdt1\" type=\"text\" class=\"form-control width70\"   >  \r\n                   <input [(ngModel)]=\"reqfltdt2\" type=\"text\"  class=\"form-control width70\"    >\r\n                </td>\r\n                <!-- <td>     </td> -->\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">  Amount of Insurance</span>\r\n                    <br />\r\n                    <input [(ngModel)]=\"amtinsur\" type=\"text\" class=\"form-control width150\">\r\n\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">   </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"14\">\r\n                    <span class=\"col-form-span-label\">   Handling Inforamtion</span>\r\n                    <br />\r\n                    <!-- <input [(ngModel)]=\"handinfo\" multiple=\"multiple\" type=\"text\" class=\"form-control width220\"  style=\"height:30px\"> -->\r\n                    <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"60\"  OnlyCharacter=\"true\" [(ngModel)]=\"handinfo\"></textarea>\r\n\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n            <tr>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">  No.of Pcs RCP</span> </td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">   Grows Weight</span></td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">   kg lb </span> </td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">  Rate Class </span> </td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">  Commodity Item No.</span> </td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">  Chargable Weight</span> </td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">  Rate Charge </span> </td>\r\n                <td style=\"width: 50px;\"> <span class=\"col-form-span-label\">   Total</span> </td>\r\n                <td style=\"width: 250px;\"> <span class=\"col-form-span-label\">   Nature Of Quantity of Goods</span> <br />\r\n                    <span class=\"col-form-span-label\"> (Incl.Dimensions or Volume)</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n            <tr>\r\n               <td><textarea style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"pcsrcp\"></textarea>  </td> <!-- <input [(ngModel)]=\"pcsrcp\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td><textarea style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"grwt\"></textarea>  </td> <!-- <input [(ngModel)]=\"grwt\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td><textarea   style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"kglb\"></textarea> </td> <!-- <input [(ngModel)]=\"kglb\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td><textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"ratecls\"></textarea> </td> <!-- <input [(ngModel)]=\"ratecls\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td><textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"commodity\"></textarea> </td> <!-- <input [(ngModel)]=\"commodity\" type=\"text\" multiple=\"multiple\" class=\"form-control\">  -->\r\n                <td><textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"chblwt\"></textarea> </td> <!--  <input [(ngModel)]=\"chblwt\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td> <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"ratechrg\"></textarea></td> <!-- <input [(ngModel)]=\"ratechrg\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td> <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"total\"></textarea></td> <!-- <input [(ngModel)]=\"total\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                <td><textarea   style=\"FONT-SIZE: 12px;font-family: Courier New;width: 250px;\" rows=\"10\" cols=\"15\" OnlyCharacter=\"true\" [(ngModel)]=\"qtyofgoods\"></textarea></td> <!--  <input [(ngModel)]=\"qtyofgoods\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n            <tr>\r\n                <td> <span class=\"col-form-span-label\"><b>Prepaid</b>  </span> </td>\r\n                <td> <span class=\"col-form-span-label\">  <b>Collect</b> </span></td>\r\n                <td> <span class=\"col-form-span-label\">  <b>Other Charges</b> </span> </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\"><span class=\"col-form-span-label centerlabel\">  Weight Charge</span> </td>\r\n                <td rowspan=\"6\"><textarea rows=\"3\"   class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"othrchrg\"></textarea><!-- <input [(ngModel)]=\"othrchrg\" type=\"text\" multiple=\"multiple\" class=\"form-control width150\"> -->\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"ppwtchrg\" type=\"text\" class=\"form-control width150\"> </td>\r\n                <td> <input [(ngModel)]=\"ccwtchrg\" type=\"text\" class=\"form-control width150\"> </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label centerlabel\">  Valuation Charge</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"ppvalchrg\" type=\"text\" class=\"form-control width150\"> </td>\r\n                <td> <input [(ngModel)]=\"ccvalchrg\" type=\"text\" class=\"form-control width150\"> </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label \">  Tax</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"pptax\" type=\"text\" class=\"form-control width150\"> </td>\r\n                <td> <input [(ngModel)]=\"cctax\" type=\"text\" class=\"form-control width150\"> </td>\r\n               \r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label centerlabel\">  Total Other Change Due Agent</span>\r\n                </td>\r\n                <td rowspan=\"4\"><textarea rows=\"3\"   class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"AGTNAME1\"></textarea> \r\n                    <!-- <input [(ngModel)]=\"othrchrg\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                    <br />\r\n                    <span class=\"col-form-span-label \">  Signature of shipper or his Agent </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"ppothrchrg\" type=\"text\" class=\"form-control width150\"> </td>\r\n                <td> <input [(ngModel)]=\"ccothrchrg\" type=\"text\" class=\"form-control width150\"> </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label centerlabel\">  Total Other Change Due Carrier</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"ppothrchrgCar\" type=\"text\" class=\"form-control width150 \"> </td>\r\n                <td> <input [(ngModel)]=\"ccothrchrgCar\" type=\"text\" class=\"form-control width150\"> </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-label centerlabel\">  Total </span>\r\n                </td>\r\n                <td rowspan=\"4\"> <input [(ngModel)]=\"bottom\" type=\"text\" class=\"form-control\"> \r\n                    <br />\r\n                    <span class=\"col-form-span-label \">  (date) at (place) </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"pptotal\" type=\"text\" class=\"form-control width150\"> </td>\r\n                <td> <input [(ngModel)]=\"cctotal\" type=\"text\" class=\"form-control width150\"> </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <span class=\"col-form-span-label \">  Currency Coanverision Rates</span> </td>\r\n                <td> <span class=\"col-form-span-label \">  CC Charges in Dest. Currency </span> </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <input [(ngModel)]=\"ppcrate\" type=\"text\" class=\"form-control width150\"> </td>\r\n                <td> <input [(ngModel)]=\"ccdestcrate\" type=\"text\" class=\"form-control width150\"> </td>\r\n            </tr>\r\n            <tr>\r\n                    <td> <span class=\"col-form-span-label \">   </span> </td>\r\n                    <td> <span class=\"col-form-span-label \">    </span> </td>\r\n                    <td> <span class=\"col-form-span-label \">   Total Collect Charges </span> \r\n                    <br/>\r\n                    <input [(ngModel)]=\"totcollchrg\" type=\"text\" class=\"form-control\">\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"col-sm-4 right-text\">\r\n            <br />\r\n            <button type=\"button\" name=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"updateprint();\">\r\n                <span class=\"col-form-span-label\"><i class=\"fa fa-save\"></i> Submit</span>\r\n            </button>\r\n            <button type=\"button\" name=\"Print\" class=\"btn btn-sm btn-primary\" (click)=\"printData();\">\r\n                <span class=\"col-form-span-label\"><i class=\"fa fa-print\"></i> Print</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-2\"> </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/hawb.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<app-print-air-hawb-search *ngIf=\"viewType == 'Search'\" (searchoutput)=\"getSearchInputValue($event)\"></app-print-air-hawb-search>\r\n\t<app-print-air-hawb-list [searchList]=\"searchList\" [searchLength]=\"searchLength\" *ngIf=\"viewType == 'List'\" (result)=\"getDataFromList($event)\"></app-print-air-hawb-list>\r\n\t<app-print-air-hawb-update [searchList]=\"searchList\" *ngIf=\"viewType == 'Update'\" [hawbno]=\"hawbno\"  [hawbdate]=\"strHawbDate\" [exptnos]=\"exptnos\" (result)=\"getPrintData($event)\"></app-print-air-hawb-update>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/hawb.list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t   <strong>Export - Master HAWB NO</strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t\t<th colspan=\"3\">List of Export Jobs</th>\r\n\t\t\t\t\t<th colspan=\"5\" class=\"right-text\">\r\n\t\t\t\t\t\t<strong>Note: </strong>\r\n\t\t\t\t\t\t<span class=\"col-form-span-label red\">\r\n\t\t\t\t\t\t\t<u>Shipper and Importer</u> should be same !\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class=\"col-form-span-label bghighlightblue\">\r\n\t\t\t\t\t\t\t(To select another <u>shipper and importer</u> un-select previous <u>shipper and importer</u>.)\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t</table>\r\n\t\t<div class=\"row y350heightscroll\">\r\n\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t\t\t<th>Select</th>\r\n\t\t\t\t\t\t<th>EXPT NO</th>\r\n\t\t\t\t\t\t<th>SHIPPER</th>\r\n\t\t\t\t\t\t<th>CONSIGNEE/Importer</th>\r\n\t\t\t\t\t\t<th>Pkgs</th>\r\n\t\t\t\t\t\t<th>Pcs</th>\r\n\t\t\t\t\t\t<th>Grwt</th>\r\n\t\t\t\t\t\t<th>Chrg.Wt</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngIf=\"searchLength==0\"><td colspan=\"8\" class=\"centerlabel\"><img src=\"assets/img/loading.gif\" /></td></tr>\r\n\t\t\t\t\t<tr *ngIf=\"searchLength==-1\"><td colspan=\"8\" class=\"centerlabel\"><span class=\"col-form-span-label\">No Record Found!</span></td></tr>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of searchList\">\r\n\t\t\t\t\t\t<td class=\"centerlabel\">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" (checked)=\"obj.Select == true\" [disabled]=\"obj.Disabled == true\" (click)=\"validate(obj.EXPTNO, obj.SHIPPER, obj.CONSIGNEE)\" />\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.SHIPPER}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONSIGNEE}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CHBLWT}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t<br />\r\n\t\t\t\t<span class=\"col-form-span-error\">{{error}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4 right-text\"> \r\n\t\t\t\t<br />\r\n\t\t\t\t<button type=\"button\" name=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"submit();\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-save\"></i> Submit</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/hawb.search.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t   <strong>Export - Master HAWB NO</strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2\">\r\n\t</div>\r\n\t<div class=\"col-sm-8\">\r\n\t\t<table class=\"table table-sm-new bgwhite\">\r\n\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t<td colspan=\"6\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\"><strong>HAWB DETAILS </strong></span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<table class=\"table table-sm-new bgwhite\">\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">HAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"hawbno\" class=\"form-control width120\" [OnlyNumber]=\"true\" [maxlength]=\"15\" />\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 1\">Invalid Hawb Number*</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">HAWB Date.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t<my-date-picker name=\"hawbdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"hawbdate\"></my-date-picker>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 2\">Hawb date can not blank*</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td colspan=\"3\" class=\"centerlabel\">\r\n\t\t\t\t\t<button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-info\" (click)=\"searchData();\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>Search</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-warning\" (click)=\"printData();\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-print\"></i> Print</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"col-sm-2\">\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.update.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/hawb.update.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t   <strong>Export - HAWB NO</strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2\">\r\n\t</div>\r\n\t<div class=\"col-sm-8\">\r\n\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t<tr class=\"title-head trbg\" *ngIf=\"hawb_issue=='1'; else  otherhawbno\">\r\n\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">HAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td colspan=\"2\" >\r\n\t\t\t\t\t<span  class=\"col-form-span-label\">{{hawbno}}</span>\t\t\t\t\t\r\n\t\t\t\t</td>\t\t\t\t \r\n\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">HAWB Date.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t<my-date-picker name=\"mawbdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"hawbdate\" [disabled]=\"hawbno != ''\"></my-date-picker>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<ng-template #otherhawbno> \r\n\t\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">HAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td colspan=\"2\" >\t\t\t\t\t\t \r\n\t\t\t\t\t\t <input    type=\"text\" [(ngModel)]=\"hawbno\" class=\"form-control width120\" [OnlyNumber]=\"true\" [maxlength]=\"15\" />\r\n\t\t\t\t\t</td>\t\t\t\t\t \r\n\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">HAWB Date.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mawbdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"hawbdate\" [disabled]=\"hawbno != ''\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</ng-template>\r\n\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">Freight Type</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t<!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\r\n\t\t\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t   [(ngModel)]=\"FreightType\"\r\n\t\t\t\t\t\t\t   class=\"form-control width120\"\r\n\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t</ng-select> -->\r\n\r\n\t\t\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"FreightType\">\r\n\t\t\t\t\t\t<option value=\"-1\">select</option>\r\n\t\t\t\t\t\t<option value=\"CC\">CC</option>\r\n\t\t\t\t\t\t<option value=\"PP\">PP</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">Freight Currency</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t<!-- <ng-select [items]=\"currencyList\"\r\n\t\t\t\t\t\t\t   bindLabel=\"CUR_NAME\"\r\n\t\t\t\t\t\t\t   bindValue=\"CUR_CODE\"\r\n\t\t\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t\t\t   [(ngModel)]=\"Fcurrency\"\r\n\t\t\t\t\t\t\t   class=\"form-control width300\"\r\n\t\t\t\t\t\t\t   >\r\n\t\t\t\t\t</ng-select> -->\r\n\t\t\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"Fcurrency\">\r\n\t\t\t\t\t\t<option value=\"0\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of currencyList\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">Freight Amount</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td colspan=\"5\">\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"FreightAmount\" class=\"form-control width120\" [OnlyNumber]=\"true\" [maxlength]=\"11\" />\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"hawbnoList.length > 0\">\r\n\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t\t\t<th>EXPT NO</th>\r\n\t\t\t\t\t\t<th>SHIPPER</th>\r\n\t\t\t\t\t\t<th>CONSIGNEE</th>\r\n\t\t\t\t\t\t<th>Pkgs</th>\r\n\t\t\t\t\t\t<th>Pcs</th>\r\n\t\t\t\t\t\t<th>Grwt</th>\r\n\t\t\t\t\t\t<th>Chrg.Wt</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let obj of hawbnoList\">\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.SHIPPER}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONSIGNEE}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CHBLWT}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"totalGrwt\" class=\"form-control width75\" [OnlyNumber]=\"true\" [disabled]=\"true\"/></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"totalChblwt\" class=\"form-control width75\" [OnlyNumber]=\"true\" [disabled]=\"true\"/></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"hawbnoList.length < 0\">\r\n\t\t\t<tr><td colspan=\"6\" class=\"centerlabel\"><span class=\"col-form-span-error\">please wait data is loading.........</span></td></tr>\r\n\t\t</table>\r\n\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td colspan=\"6\" class=\"centerlabel\">\r\n\t\t\t\t\t<button type=\"button\" name=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"submit();\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-save\"></i> Submit</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"col-sm-2\">\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb-final-print.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/mawb-final-print.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"col-md-8 mb-12\" >\t\t\t\t\r\n\t\t\t\t\t\t<!-- <app-mbl-print></app-mbl-print>\t -->\r\n\t\t\t\t\t\t<button name=\"btnPrint\"   (click)=\"finalMawbPrint()\">Print</button> <br>\r\n      <div id=\"divmawbno\" #print>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:10px;left:40px;color:black;z-index:1;white-space: pre;\"> {{this.shipper}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:120px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.consignee}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:210px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.agentname}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:220px;left:390px;color:black;z-index:1;white-space: pre;\">{{this.actinfo}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:270px;left:110px;color:black;z-index:1;white-space: pre;\">{{this.IATACode}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:300px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.airportdep}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.to1 }}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:100px;color:black;z-index:1;white-space: pre;\">{{this.bycarrier1}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:255px;color:black;z-index:1;white-space: pre;\">{{this.to2}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:285px;color:black;z-index:1;white-space: pre;\">{{this.by2}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:315px;color:black;z-index:1;white-space: pre;\">{{this.to3 }}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:345px;color:black;z-index:1;white-space: pre;\">{{this.by3}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:370px;color:black;z-index:1;white-space: pre;\">{{this.currency}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:410px;color:black;z-index:1;white-space: pre;\">{{this.chgs}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:430px;color:black;z-index:1;white-space: pre;\">{{this.ppd1}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:448px;color:black;z-index:1;white-space: pre;\">{{this.coll1}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:465px;color:black;z-index:1;white-space: pre;\">{{this.ppd2}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:485px;color:black;z-index:1;white-space: pre;\">{{this.coll2}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:520px;color:black;z-index:1;white-space: pre;\">{{this.valcarriage}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:332px;left:630px;color:black;z-index:1;white-space: pre;\">{{this.valcustom}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:368px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.airprtdest}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:368px;left:250px;color:black;z-index:1;white-space: pre;\">{{this.reqfltdt1}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:368px;left:350px;color:black;z-index:1;white-space: pre;\">{{this.reqfltdt2}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:368px;left:380px;color:black;z-index:1;white-space: pre;\">{{this.amtinsur}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:395px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.handinfo}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.pcsrcp}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:520px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.DESC}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:80px;color:black;z-index:1;white-space: pre;\">{{this.grwt}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:150px;color:black;z-index:1;white-space: pre;\">{{this.kglb}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:160px;color:black;z-index:1;white-space: pre;\">{{this.ratecls}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:190px;color:black;z-index:1;white-space: pre;\">{{this.commodity}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:240px;color:black;z-index:1;white-space: pre;\">{{this.chblwt}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:320px;color:black;z-index:1;white-space: pre;\">{{this.ratechrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:400px;color:black;z-index:1;white-space: pre;\">{{this.total}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:490px;left:520px;color:black;z-index:1;white-space: pre;\">{{this.qtyofgoods}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:715px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.ppwtchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:715px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.ccwtchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:740px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.ppvalchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:740px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.ccvalchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:775px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.pptax}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:775px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.cctax}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:810px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.ppothrchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:810px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.ccothrchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:850px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.ppothrchrgCar}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:850px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.ccothrchrgCar}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:905px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.pptotal}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:905px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.cctotal}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:930px;left:40px;color:black;z-index:1;white-space: pre;\">{{this.ppcrate}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:930px;left:200px;color:black;z-index:1;white-space: pre;\">{{this.ccdestcrate}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:860px;left:350px;color:black;z-index:1;white-space: pre;\">{{this.AGTNAME1}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:920px;left:350px;color:black;z-index:1;white-space: pre;\">{{this.bottom}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:730px;left:320px;color:black;z-index:1;white-space: pre;\">{{this.othrchrg}}</p>\r\n<p style=\"FONT-SIZE: 11px;font-family: Verdana;position:absolute;top:960px;left:350px;color:black;z-index:1;white-space: pre;\">{{this.totcollchrg}}</p>\r\n      </div>\t\t \r\n\t\t\t\t</div>                 \r\n\t\t\t</div>\t\t\r\n\t\t\t \r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb-printupdate.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/mawb-printupdate.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>Export - Master Airway Bill NO</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2\"> </div>\r\n    <div class=\"col-sm-8\">\r\n        <table>\r\n            <tr>\r\n                <td>\r\n                    <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                        <tr>\r\n                            <td colspan=\"4\"><span class=\"col-form-span-label\" style=\"margin-left: 600px;\">{{MAWBNO}} - {{MAWBDT}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Shipper Name and Address</span>\r\n                                <br />\r\n                                <textarea style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" OnlyCharacter=\"true\" [(ngModel)]=\"shipper\"></textarea>\r\n\r\n                            </td>\r\n                            <td rowspan=\"2\">\r\n                                <!-- <span class=\"col-form-span-label\" > <b>{{COM_NAME}}</b> <br/> <b>&nbsp;&nbsp;{{CMP_CITY}}</b></span> -->\r\n                                <textarea style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" OnlyCharacter=\"true\" [(ngModel)]=\"AIRLINE_ADDRS\"></textarea>\r\n\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Consignee Name and Address</span>\r\n                                <br />\r\n                                <!-- <input [(ngModel)]=\"consignee\" type=\"text\" multiple=\"multiple\" class=\"form-control width250 \" style=\"height:50px\"> -->\r\n                                <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\"  OnlyCharacter=\"true\" [(ngModel)]=\"consignee\"></textarea>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Issuing Carriers agent name and City</span>\r\n                                <br /> <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"40\" OnlyCharacter=\"true\" [(ngModel)]=\"agentname\"></textarea>\r\n                                <!-- <input [(ngModel)]=\"agentname\" type=\"text\" multiple=\"multiple\" class=\"form-control  width250 \" style=\"height:50px\"> -->\r\n                            </td>\r\n                            <td rowspan=\"2\"> <span class=\"col-form-span-label\">Accounting Information </span>\r\n                              <br />       <!--  <input [(ngModel)]=\"actinfo\" type=\"text\" multiple=\"multiple\" class=\"form-control  width250 \" style=\"height:50px\"> -->\r\n                                <textarea rows=\"6\"   class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"actinfo\"></textarea>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Agent's IATA Code </span>   <span class=\"col-form-span-label\">Account no</span>\r\n                                <br />\r\n                                <input [(ngModel)]=\"IATACode\" type=\"text\" multiple=\"multiple\" class=\"form-control width150 \">\r\n                                 <!--<div>\r\n                                    <span class=\"col-form-span-label\">Account no</span>\r\n                                    <br />\r\n                                    <input [(ngModel)]=\"IATAcct\" type=\"text\" multiple=\"multiple\" class=\"form-control width150 \">\r\n                                </div> -->\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Airport of Departure (Addr. of First Carrier) and Requested\r\n                                    Routing</span>\r\n                                <br />\r\n                                 <input [(ngModel)]=\"airportdep\" type=\"text\" multiple=\"multiple\" class=\"form-control  width150\">\r\n\r\n                            </td>\r\n                            <div>\r\n                                <span class=\"col-form-span-label\">  Reference No</span>\r\n                                <span class=\"col-form-span-label\"> Optional Shipping Information</span>\r\n                            </div>\r\n                        </tr>\r\n\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n            <td>\r\n                <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                    <tr>\r\n                        <td> <span class=\"col-form-span-label\">  To</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">   By First Carrier</span></td>\r\n                        <td> <span class=\"col-form-span-label\">  to</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">  by</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">   to</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">   by</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">   Currency </span> </td>\r\n                        <td> <span class=\"col-form-span-label\">  CHGS Code</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">   PPD</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">  COLL</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">  PPD</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">   COLL</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">  Declared Value of Carriage</span> </td>\r\n                        <td> <span class=\"col-form-span-label\">  Declared Value of Custom</span> </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td> <input [(ngModel)]=\"to1\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"bycarrier1\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"to2\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"by2\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"to3\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"by3\" type=\"text\" class=\"form-control\"></td>\r\n                        <td> <input [(ngModel)]=\"currency\" type=\"text\" class=\"form-control\"></td>\r\n                        <td> <input [(ngModel)]=\"chgs\" type=\"text\" class=\"form-control\"></td>\r\n                        <td> <input [(ngModel)]=\"ppd1\" type=\"text\" class=\"form-control\"></td>\r\n                        <td> <input [(ngModel)]=\"coll1\" type=\"text\" class=\"form-control\"></td>\r\n                        <td> <input [(ngModel)]=\"ppd2\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"coll2\" type=\"text\" class=\"form-control\"> </td>\r\n                        <td> <input [(ngModel)]=\"valcarriage\" type=\"text\" class=\"form-control\"></td>\r\n                        <td> <input [(ngModel)]=\"valcustom\" type=\"text\" class=\"form-control\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <span class=\"col-form-span-label\">   Airport Of Destination</span>\r\n                            <br />\r\n                            <input [(ngModel)]=\"airprtdest\" type=\"text\" class=\"form-control width150\">\r\n                        </td>\r\n                        <td colspan=\"3\">\r\n                            <span class=\"col-form-span-label\">  Requested Flight/date </span>\r\n                            <br />\r\n\r\n                            <input [(ngModel)]=\"reqfltdt1\" type=\"text\" class=\"form-control width70\"   >\r\n                           <input [(ngModel)]=\"reqfltdt2\" type=\"text\"  class=\"form-control width70\"    >\r\n                        </td>\r\n                        <!-- <td>     </td> -->\r\n                        <td colspan=\"3\">\r\n                            <span class=\"col-form-span-label\">  Amount of Insurance</span>\r\n                            <br />\r\n                            <input [(ngModel)]=\"amtinsur\" type=\"text\" class=\"form-control width150\">\r\n\r\n                        </td>\r\n                        <td colspan=\"4\">\r\n                            <span class=\"col-form-span-label\">   </span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"14\">\r\n                            <span class=\"col-form-span-label\">   Handling Information</span>\r\n                            <br />\r\n                            <!-- <input [(ngModel)]=\"handinfo\" multiple=\"multiple\" type=\"text\" class=\"form-control width220\"  style=\"height:30px\"> -->\r\n                            <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New; \" rows=\"4\" cols=\"60\"  OnlyCharacter=\"true\" [(ngModel)]=\"handinfo\"></textarea>\r\n\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                        <tr>\r\n                            <td> <span class=\"col-form-span-label\">  No.of Pcs RCP</span> </td>\r\n                            <td> <span class=\"col-form-span-label\">   Gross Weight</span></td>\r\n                            <td> <span class=\"col-form-span-label\">   kg lb </span> </td>\r\n                             <td> <span class=\"col-form-span-label\">  Rate Class </span> </td>\r\n                            <td> <span class=\"col-form-span-label\">  Commodity Item No.</span> </td>\r\n                            <td> <span class=\"col-form-span-label\">  Chargable Weight</span> </td>\r\n                            <td> <span class=\"col-form-span-label\">  Rate /Charge </span> </td>\r\n                            <td> <span class=\"col-form-span-label\">   Total</span> </td>\r\n                            <td> <span class=\"col-form-span-label\">   Nature Of Quantity of Goods</span> <br />\r\n                                <span class=\"col-form-span-label\"> (Incl.Dimensions or Volume)</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <tr>\r\n                           <td><textarea style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"pcsrcp\"></textarea>  </td>\r\n                            <td><textarea style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"grwt\"  [disabled]=\"check== '1'\" ></textarea>  </td>\r\n                            <td><textarea   style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"2\" OnlyCharacter=\"true\" [(ngModel)]=\"kglb\"></textarea> </td>\r\n                            <td><textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"2\" OnlyCharacter=\"true\" [(ngModel)]=\"ratecls\"></textarea> </td>\r\n                            <td><textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"commodity\"></textarea> </td>\r\n                            <td><textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"chblwt\" [disabled]=\"check== '1'\"></textarea> </td>\r\n                            <td> <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"ratechrg\" [disabled]=\"check== '1'\"></textarea></td>\r\n                            <td> <textarea  style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"5\" cols=\"5\" OnlyCharacter=\"true\" [(ngModel)]=\"total\" [disabled]=\"check== '1'\"></textarea></td>\r\n                            <td rowspan=\"2\"><textarea   style=\"FONT-SIZE: 12px;font-family: Courier New;WIDTH: 220PX\" rows=\"15\" cols=\"15\" OnlyCharacter=\"true\" [(ngModel)]=\"qtyofgoods\"></textarea></td>\r\n\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"7\"> <textarea   style=\"FONT-SIZE: 12px;font-family: Courier New;\" rows=\"10\" cols=\"70\" OnlyCharacter=\"true\" [(ngModel)]=\"DESC\"></textarea>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                        <tr>\r\n                            <td> <span class=\"col-form-span-label\"><b>Prepaid</b>  </span> </td>\r\n                            <td> <span class=\"col-form-span-label\">  <b>Collect</b> </span></td>\r\n                            <td> <span class=\"col-form-span-label\">  <b>Other Charges</b> </span> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\"><span class=\"col-form-span-label centerlabel\">  Weight Charge</span> </td>\r\n                            <td rowspan=\"6\"><textarea rows=\"5\" [disabled]=\"check== '1'\"   class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"othrchrg\"></textarea>\r\n                                <br>\r\n                                <button type=\"button\" name=\"PrintP\" class=\"btn btn-sm btn-primary\" (click)=\"mawbrate()\" >\r\n                                    <span class=\"col-form-span-label\"><i class=\"fa fa-circle\"></i> Enter Tarif Rate</span>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"ppwtchrg\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                            <td> <input [(ngModel)]=\"ccwtchrg\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label centerlabel\">  Valuation Charge</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"ppvalchrg\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                            <td> <input [(ngModel)]=\"ccvalchrg\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label \">  Tax</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"pptax\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                            <td> <input [(ngModel)]=\"cctax\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label centerlabel\">  Total Other Change Due Agent</span>\r\n                            </td>\r\n                            <td rowspan=\"4\"><textarea rows=\"3\"   class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"AGTNAME1\"></textarea>\r\n                                <!-- <input [(ngModel)]=\"othrchrg\" type=\"text\" multiple=\"multiple\" class=\"form-control\"> -->\r\n                                <br />\r\n                                <span class=\"col-form-span-label \">  Signature of shipper or his Agent </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"ppothrchrg\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                            <td> <input [(ngModel)]=\"ccothrchrg\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label centerlabel\">  Total Other Change Due Carrier</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"ppothrchrgCar\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150 \"> </td>\r\n                            <td> <input [(ngModel)]=\"ccothrchrgCar\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label centerlabel\">  Total </span>\r\n                            </td>\r\n                            <td rowspan=\"4\"> <input [(ngModel)]=\"bottom\" type=\"text\" class=\"form-control\">\r\n                                <!-- <br />\r\n                                <span class=\"col-form-span-label \">  (date) at (place) </span> -->\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"pptotal\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                            <td> <input [(ngModel)]=\"cctotal\" [disabled]=\"check== '1'\" type=\"text\" class=\"form-control width150\"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <span class=\"col-form-span-label \">  Currency Coanverision Rates</span> </td>\r\n                            <td> <span class=\"col-form-span-label \">  CC Charges in Dest. Currency </span> </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td> <input [(ngModel)]=\"ppcrate\" type=\"text\" class=\"form-control width150\"> </td>\r\n                            <td> <input [(ngModel)]=\"ccdestcrate\" type=\"text\" class=\"form-control width150\"> </td>\r\n                        </tr>\r\n                        <tr>\r\n                                <td> <span class=\"col-form-span-label \">   </span> </td>\r\n                                <td> <span class=\"col-form-span-label \">    </span> </td>\r\n                                <td> <span class=\"col-form-span-label \">   Total Collect Charges </span>\r\n                                <br/>\r\n                                <input [(ngModel)]=\"totcollchrg\" type=\"text\" class=\"form-control\">\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-4 right-text\">\r\n            <br />\r\n            <button type=\"button\" name=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"updateprint();\">\r\n                <span class=\"col-form-span-label\"><i class=\"fa fa-save\"></i> Submit</span>\r\n            </button>\r\n            <button type=\"button\" name=\"Print\" class=\"btn btn-sm btn-primary\" (click)=\"printData();\">\r\n                <span class=\"col-form-span-label\"><i class=\"fa fa-print\"></i> Print</span>\r\n            </button>\r\n            <button type=\"button\" name=\"PrintP\" class=\"btn btn-sm btn-primary\" (click)=\"printplane();\">\r\n                <span class=\"col-form-span-label\"><i class=\"fa fa-print\"></i> Print Plane Paper</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-2\"> </div>\r\n</div>\r\n<app-MAWB_Model #MAWBModelpopup></app-MAWB_Model>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/mawb.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" *ngIf=\"viewType != 'Print'\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<app-mawb-search *ngIf=\"viewType == 'Search'\" (searchoutput)=\"getSearchInputValue($event)\"></app-mawb-search>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" *ngIf=\"viewType == 'Generate' || viewType == 'List'\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t\t   <strong>Export - Master Aerobill Generate</strong>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" *ngIf=\"viewType == 'Generate' || viewType == 'List'\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<table class=\"table table-sm-new bgwhite\">\r\n\t\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t\t<td colspan=\"6\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><strong>MAWBNO DETAILS </strong></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table class=\"table table-sm-new bgwhite\" *ngIf=\"viewType == 'Generate' || viewType == 'List'\">\r\n\t\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">AirLine</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td >\r\n\t\t\t\t\t\t<select class=\"form-control width250\"   [(ngModel)]=\"AirLine\" (change)=\"getmwawblist(AirLine);\" >\r\n\t\t\t\t\t\t\t<!-- <option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t<option value=\"S100702\">Emirate Airline</option> -->\r\n\t\t\t\t\t\t\t<option value=\"0\">Please select</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let d of AirLineList\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 1\">Please select AirLine*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">MAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td >\r\n\t\t\t\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"mawbno\">\r\n\t\t\t\t\t\t\t<option value=\"0\">Please select</option>\r\n\t\t\t\t\t\t\t<!-- <option value=\"17645678932\">17645678932</option>\r\n\t\t\t\t\t\t\t<option value=\"17636789525\">17636789525</option> -->\r\n\t\t\t\t\t\t\t <option *ngFor=\"let d of AirLineMawbNoList\" value={{d.MAWBNO}}>{{d.MAWBNO}}</option>\r\n\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 2\">Please select Mawb Number*</span>\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 3\">Invalid Mawb Number*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<!-- <tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">MAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"Airmawbno\" class=\"form-control width120\" (change)=\"fn_generateLastMawbNo(10);\" [OnlyNumber]=\"true\" [maxlength]=\"11\" />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 1\">Invalid Mawb Number*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr> -->\r\n\t\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\">MAWB Date.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t\t<my-date-picker name=\"mawbdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"mawbdate\"></my-date-picker>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error ==4\">Mawb Date can not blank*</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t<div class=\"centerlabel\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"M\" [(ngModel)]=\"MawbType\"  />&nbsp;With House</span>\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"H\" [(ngModel)]=\"MawbType\" />&nbsp;Without House(Direct Mawb)</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n                        </div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t\t<td colspan=\"3\" class=\"centerlabel\">\r\n\t\t\t\t\t\t<button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-info\" (click)=\"searchData();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-warning\" (click)=\"printData();\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>  Print</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<app-print-air-mawb-list [searchList]=\"searchList\" *ngIf=\"viewType == 'List'\" (result)=\"getData($event)\"></app-print-air-mawb-list>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<app-print-air-mawb-update [searchList]=\"searchList\" *ngIf=\"viewType == 'Update'\" (abort)=\"cancelled($event)\"  [mawbno]=\"mawbno\"  [mawbdate]=\"strMawbDate\" [exptnos]=\"exptnos\" [MawbType]=\"MawbType\" [AirLine]=\"AirLine\" (result)=\"getPrintData($event)\"></app-print-air-mawb-update>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/mawb.list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<!-- <div class=\"row y350heightscroll\" *ngIf=\"searchList.length > 0\"> commented to remove height -->\r\n\r\n\t<div  *ngIf=\"searchList.length > 0\">\r\n\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n\t\t<thead>\r\n\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t<th>Select</th>\r\n\t\t\t\t<th>EXPT NO</th>\r\n\t\t\t\t<th>SHIPPER</th>\r\n\t\t\t\t<th>CONSIGNEE</th>\r\n\t\t\t\t<th>Pkgs</th>\r\n\t\t\t\t<th>Grwt</th>\r\n\t\t\t\t<th>Chrg.Wt</th>\r\n\t\t\t\t<th>Pcs</th>\r\n\t\t\t\t<th>Shipment Mode</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let obj of searchList\">\r\n\t\t\t\t<td class=\"centerlabel\">\r\n\t\t\t\t\t<input type=\"checkbox\" (checked)=\"obj.SELECT == true\" [disabled]=\"obj.Disabled == true\"   (click)=\"validate(obj.MODEOFSHIP,obj.EXPTNO)\" />\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.SHIPPER}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONSIGNEE}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CHBLWT}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.MODEOFSHIP}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12 right-text\">\r\n\t\t<br />\r\n\t\t<button type=\"button\" name=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"submit();\" >\r\n\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-check-square-o\"></i> Submit</span>\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/mawb.search.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t   <strong>Export - Master MAWB NO</strong>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2\">\r\n\t</div>\r\n\t<div class=\"col-sm-8\">\r\n\t\t<table class=\"table table-sm-new bgwhite\">\r\n\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t<td colspan=\"6\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\"><strong>MAWB DETAILS </strong></span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<table class=\"table table-sm-new bgwhite\">\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">AirLine</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td >\r\n\t\t\t\t\t<select class=\"form-control width250\"   [(ngModel)]=\"AirLine\" >\r\n\t\t\t\t\t\t<option value=\"0\">Please select</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let d of AirLineList\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 1\">Please select AirLine*</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<!-- <tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">MAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"mawbno\">\r\n                        <option value=\"0\">Please select</option>\r\n                        <option value=\"17645678932\">17645678932</option>\r\n                        <option value=\"17636789525\">17636789525</option>\r\n                        </select>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width300\">\r\n                    <span class=\"col-form-span-error\" *ngIf=\"error == 2\">Please select Mawb Number*</span>\r\n                    <span class=\"col-form-span-error\" *ngIf=\"error == 3\">Invalid Mawb Number*</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr> -->\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">MAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"mawbno\" class=\"form-control width120\"  [OnlyNumber]=\"true\" [maxlength]=\"11\" />\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 2\">Please enter Mawb Number*</span>\r\n\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 3\">Invalid Mawb Number*</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td class=\"right-text\">\r\n\t\t\t\t\t<span class=\"col-form-span-label\">MAWB Date.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t<my-date-picker name=\"mawbdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"mawbdate\"></my-date-picker>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"width300\">\r\n\t\t\t\t\t<span class=\"col-form-span-error\" *ngIf=\"error == 4\">Mawb date can not blank*</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"title-head trbg\">\r\n\t\t\t\t<td colspan=\"3\" class=\"centerlabel\">\r\n\t\t\t\t\t<button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-info\" (click)=\"searchData();\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>Search</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-warning\" (click)=\"printData();\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-print\"></i> Print</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"col-sm-2\">\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.update.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/printdocument/air/mawb.update.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t<tr class=\"title-head trbg\">\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">MAWB No.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"2\">\r\n\t\t\t<span class=\"col-form-span-label\">{{mawbno}}</span>\r\n\t\t</td>\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">MAWB Date.</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"2\">\r\n\t\t\t<span class=\"col-form-span-label\">{{mawbdate}}</span>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"title-head trbg\">\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">Freight Type</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"2\">\r\n\t\t\t<!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\r\n\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"FreightType\"\r\n\t\t\t\t\t   class=\"form-control width120\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select> -->\r\n\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"FreightType\">\r\n\t\t\t\t<option value=\"-1\">select</option>\r\n\t\t\t\t<option value=\"CC\">CC</option>\r\n\t\t\t\t<option value=\"PP\">PP</option>\r\n\t\t\t</select>\r\n\t\t</td>\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">Freight Currency</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"2\">\r\n\t\t\t<!-- <ng-select [items]=\"currencyList\"\r\n\t\t\t\t\t   bindLabel=\"CUR_NAME\"\r\n\t\t\t\t\t   bindValue=\"CUR_CODE\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"Fcurrency\"\r\n\t\t\t\t\t   class=\"form-control width300\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select> -->\r\n\r\n\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"Fcurrency\">\r\n\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t<option *ngFor=\"let d of currencyList\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\r\n\t\t\t</select>\r\n\t\t\t \r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"title-head trbg\">\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">Freight Amount</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"5\">\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"FreightAmount\" class=\"form-control width120\" [OnlyNumber]=\"true\" [maxlength]=\"11\" />\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr class=\"title-head trbg\">\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">Shipment Type</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"2\">\r\n\t\t\t<!-- <ng-select [items]=\"[{VALUEFIELD: '0', TEXTFIELD: 'Normal'},{VALUEFIELD: '1', TEXTFIELD: 'DDX'}]\"\r\n\t\t\t\t\t   bindLabel=\"TEXTFIELD\"\r\n\t\t\t\t\t   bindValue=\"VALUEFIELD\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"ShipType\"\r\n\t\t\t\t\t   class=\"form-control width120\"\r\n\t\t\t\t\t   (change)=\"ddx_Onchange(ShipType)\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select> -->\r\n\t\t\t<select class=\"form-control width120\"   [(ngModel)]=\"ShipType\"  (change)=\"ddx_Onchange(ShipType)\">\r\n\t\t\t\t<option value=\"-1\"> select</option>\r\n\t\t\t\t<option value=\"0\">Normal</option>\r\n\t\t\t\t<option value=\"1\">DDX</option>\r\n\t\t\t</select>\r\n\t\t</td>\r\n\t\t<td class=\"width150\">\r\n\t\t\t<span class=\"col-form-span-label\">Dest.Warehouse</span><span class=\"col-form-span-error\">*</span>\r\n\t\t</td>\r\n\t\t<td colspan=\"2\">\r\n\t\t\t<!-- <ng-select [items]=\"destinationList\"\r\n\t\t\t\t\t   bindLabel=\"DDX_DESTINATION\"\r\n\t\t\t\t\t   bindValue=\"PK_ID\"\r\n\t\t\t\t\t   placeholder=\"--Select--\"\r\n\t\t\t\t\t   [(ngModel)]=\"ShipDest\"\r\n\t\t\t\t\t   class=\"form-control width300\"\r\n\t\t\t\t\t   [disabled]=\"ShipType == '0' || ShipType == null\"\r\n\t\t\t\t\t   >\r\n\t\t\t</ng-select> -->\r\n\t\t\t<select class=\"form-control width300\"   [(ngModel)]=\"ShipDest\" [disabled]=\"ShipType == '0' || ShipType == null\">\r\n\t\t\t\t<option value=\"0\">Please select</option>\r\n\t\t\t\t<option *ngFor=\"let d of destinationList\" value={{d.PK_ID}}>{{d.DDX_DESTINATION}}</option>\r\n\t\t\t\r\n\t\t\t</select>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t<thead>\r\n\t\t\t<tr class=\"title-head formheading\">\r\n\t\t\t\t<th>EXPT NO</th>\r\n\t\t\t\t<th>SHIPPER</th>\r\n\t\t\t\t<th>CONSIGNEE</th>\r\n\t\t\t\t<th>Pkgs</th>\r\n\t\t\t\t<th>Grwt</th>\r\n\t\t\t\t<th>Chrg.Wt</th>\r\n\t\t\t\t<th>Pcs</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let obj of mawbnoList\">\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.SHIPPER}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CONSIGNEE}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.CHBLWT}}</span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr class=\"trbg\">\r\n\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"totalGrwt\" class=\"form-control width75\" [OnlyNumber]=\"true\"/></td>\r\n\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"totalChblwt\" class=\"form-control width75\" [OnlyNumber]=\"true\"/></td>\r\n\t\t\t\t<td><span class=\"col-form-span-label\"></span></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n</table>\r\n<table class=\"table table-bordered table-sm-new bgwhite\">\r\n</table>\r\n<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t<tr class=\"title-head trbg\">\r\n\t\t<td colspan=\"6\" class=\"centerlabel\">\r\n\t\t\t<button type=\"button\" name=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"submit();\">\r\n\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-save\"></i> Submit</span>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" name=\"cancelButton\" class=\"btn btn-sm btn-danger\" (click)=\"cancel();\">\r\n\t\t\t\t<span class=\"col-form-span-label\"><i class=\"fa fa-remove\"></i> Cancel</span>\r\n\t\t\t</button>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n\t"

/***/ }),

/***/ "./src/app/export/printdocument/air/Mawb_Tarifrating.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/export/printdocument/air/Mawb_Tarifrating.component.ts ***!
  \************************************************************************/
/*! exports provided: MAWBModelpopupcomponent, MAWBTarifratingcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAWBModelpopupcomponent", function() { return MAWBModelpopupcomponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAWBTarifratingcomponent", function() { return MAWBTarifratingcomponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/common-font-changer.directive */ "./src/app/shared/common-font-changer.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { environment } from '../../../../environments/environment';
var MAWBModelpopupcomponent = /** @class */ (function () {
    function MAWBModelpopupcomponent(_toasterService, _sharedconsig, _loaderService, _loginService) {
        this._toasterService = _toasterService;
        this._sharedconsig = _sharedconsig;
        this._loaderService = _loaderService;
        this._loginService = _loginService;
        this.title = "";
    }
    MAWBModelpopupcomponent.prototype.ngOnInit = function () {
        if (this._sharedconsig.exportEditData != undefined) {
            this.exptno = this._sharedconsig.exportEditData.EXPTNO;
        }
    };
    MAWBModelpopupcomponent.prototype.show = function (etype) {
        this.type = etype;
        var editList = this._sharedconsig.exportEditData;
        var exptno_view;
        exptno_view = editList.EXPTNO;
        if (this.type == 'MawbTarif') {
            this.title = "MAWB - Update - " + this._sharedconsig.exportEditData.MAWBNO;
            this.mawbEdit.changefunction();
        }
        this.editModal.show();
    };
    MAWBModelpopupcomponent.prototype.hide = function () {
        this.editModal.hide();
    };
    MAWBModelpopupcomponent.prototype.updateData = function () {
        if (this.type == 'MawbTarif') {
            this.mawbEdit.validate();
        }
    };
    MAWBModelpopupcomponent.prototype.onSuccess = function (result) {
        if (result.status == 100) {
            this._toasterService.toast('success', '', result.message);
            this.hide();
        }
    };
    MAWBModelpopupcomponent.prototype.onDisabled = function (event) {
        if (event == false) {
            this.disableButton.changeFontwithEnableButton(4, this.updateButton);
        }
        else if (event == true) {
            this.disableButton.changeFontwithDisableButton(11, this.updateButton);
        }
    };
    MAWBModelpopupcomponent.ctorParameters = function () { return [
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataSerice"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MAWBModelpopup', { static: false }),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], MAWBModelpopupcomponent.prototype, "editModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MAWBModelpopupcomponent.prototype, "updateButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_6__["FontChangerComponent"], { static: false }),
        __metadata("design:type", _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_6__["FontChangerComponent"])
    ], MAWBModelpopupcomponent.prototype, "disableButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MawbRate', { static: false }),
        __metadata("design:type", MAWBTarifratingcomponent)
    ], MAWBModelpopupcomponent.prototype, "mawbEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MAWBModelpopupcomponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MAWBModelpopupcomponent.prototype, "exptno", void 0);
    MAWBModelpopupcomponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-MAWB_Model',
            template: __webpack_require__(/*! raw-loader!./Mawb_Tarifrating.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/Mawb_Tarifrating.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataSerice"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MAWBModelpopupcomponent);
    return MAWBModelpopupcomponent;
}());

var MAWBTarifratingcomponent = /** @class */ (function () {
    function MAWBTarifratingcomponent(_dataService, _loginService, _toasterService, _sharedconsig, _loaderService, _activatedRoute) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._sharedconsig = _sharedconsig;
        this._loaderService = _loaderService;
        this._activatedRoute = _activatedRoute;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabledBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.quryParamsExpCode = "";
        this.netData = [];
        this.tdsData = [];
        this.serviceTax = [];
        this.pageload = false;
        this.SupplierNet = null;
        this.TariffRate = null;
        this.NetRate = null;
        this.CityCode = null;
        this.CalOneDcTar = null;
        this.CalOneDcNet = null;
        this.CalTwoDcTar = null;
        this.CalTwoDcNet = null;
        this.NetRightsAdd = false;
        this.NetRights = false;
        this.hdNetRights = false;
        this.dataMode = null;
        this.Wgt = null;
        this.UserWgt = null;
        this.GrossWeight = null;
        this.UserGrossWeight = null;
        this.isMinRate = false;
        this.FreightRate = 'PP';
        this.AgentsRate = '0.00';
        //FREIGHT (BASIC)
        this.TarFreightPayOn = 'CW';
        this.TarFreightRate = null;
        this.TarFreight = null;
        this.TarFreightFrt = 'PP';
        this.NetFreightPayOn = 'CW';
        this.NetFreightRate = null;
        this.NetFreight = null;
        this.NetFreightFrt = 'PP';
        //FSC
        this.TarFscPayOn = null;
        this.TarFscRate = null;
        this.TarFsc = null;
        this.TarFscFrt = 'PP';
        this.NetFscPayOn = null;
        this.NetFscRate = null;
        this.NetFsc = null;
        this.NetFscFrt = 'PP';
        //IRC
        this.TarIrcPayOn = null;
        this.TarIrcRate = null;
        this.TarIrc = null;
        this.TarIrcFrt = 'PP';
        this.NetIrcPayOn = null;
        this.NetIrcRate = null;
        this.NetIrc = null;
        this.NetIrcFrt = 'PP';
        //XRAY
        this.TarXrayPayOn = null;
        this.TarXrayRate = null;
        this.TarXray = null;
        this.TarXrayFrt = 'PP';
        this.NetXrayPayOn = null;
        this.NetXrayRate = null;
        this.NetXray = null;
        this.NetXrayFrt = 'PP';
        //MISCELLANEOUS CHARGES
        this.TarMcPayOn = 'CW';
        this.TarMcRate = null;
        this.TarMc = null;
        this.TarMcFrt = 'PP';
        this.NetMcPayOn = 'CW';
        this.NetMcRate = null;
        this.NetMc = null;
        this.NetMcFrt = 'PP';
        //CTG
        this.TarCtgPayOn = 'GW';
        this.TarCtgRate = null;
        this.TarCtg = null;
        this.TarCtgFrt = 'PP';
        this.NetCtgPayOn = 'GW';
        this.NetCtgRate = null;
        this.NetCtg = null;
        this.NetCtgFrt = 'PP';
        //THC
        this.TarThcPayOn = 'CW';
        this.TarThcRate = null;
        this.TarThc = null;
        this.TarThcFrt = 'PP';
        this.NetThcPayOn = 'GW';
        this.NetThcRate = null;
        this.NetThc = null;
        this.NetThcFrt = 'PP';
        //BUSINESS PROMOTION
        this.TarBPPayOn = 'CW';
        this.TarBPRate = null;
        this.TarBP = null;
        this.TarBPFrt = 'PP';
        this.NetBPPayOn = 'CW';
        this.NetBPRate = null;
        this.NetBP = null;
        this.NetBPFrt = 'PP';
        //DESTIMATION TRUCKING
        this.TarTruckPayOn = 'CW';
        this.TarTruckRate = null;
        this.TarTruck = null;
        this.TarTruckFrt = 'PP';
        this.NetTruckPayOn = 'CW';
        this.NetTruckRate = null;
        this.NetTruck = null;
        this.NetTruckFrt = 'PP';
        this.TarAms = null;
        this.TarAmsFrt = 'PP';
        this.NetAms = null;
        this.NetAmsFrt = 'PP';
        this.HawbTar = null;
        this.HawbTarFrt = 'PP';
        this.HawbNet = null;
        this.HawbNetFrt = 'PP';
        this.PcaTar = null;
        this.PcaTarFrt = 'PP';
        this.PcaNet = null;
        this.PcaNetFrt = 'PP';
        this.DurCarrierTar = null;
        this.DurCarrierTarCC = null;
        this.DurCarrierNet = null;
        this.DurCarrierNetCC = null;
        this.DueAgentTar = null;
        this.DueAgentTarCC = null;
        this.DueAgentNet = null;
        this.DueAgentNetCC = null;
        this.TotalTar = null;
        this.TotalTarCC = null;
        this.TotalNet = null;
        this.TotalNetCC = null;
        this.OtherTar = null;
        this.OtherTarFrt = 'PP';
        this.OtherNet = null;
        this.OtherNetFrt = 'PP';
        this.AirFrtCommission = null;
        this.FrtRebate = null;
        this.BusinesPromo = null;
        this.DrpTDS = null;
        this.TxtTDS = null;
        this.DrpServiceTax = null;
        this.TxtServiceTax = null;
        this.OtherChrg1 = null;
        this.OtherAmt1_Tar = null;
        this.OtherAmt1TarFrt = 'PP';
        this.OtherAmt1_Net = null;
        this.OtherAmt1NetFrt = 'PP';
        this.OtherChrg2 = null;
        this.OtherAmt2_Tar = null;
        this.OtherAmt2TarFrt = 'PP';
        this.OtherAmt2_Net = null;
        this.OtherAmt2NetFrt = 'PP';
        this.Remark = null;
        this.Ppchrg = null;
        this.Ccchrg = null;
        this.Pptotagt = null;
        this.Cctotagt = null;
        this.Pptotcarr = null;
        this.Cctotcarr = null;
        this.Pptot = null;
        this.Cctot = null;
        this.Othchrg = null;
        this.ISAUTO_FRT_INV = "";
        this.oldchblwt = null;
        this.oldgrwt = null;
        //AIRLINE CHARGES
        this.dtAirLineCharges = [];
        this.AirLineCharges = [];
        this.AllAirLineChargeslist = [];
        this.ChrgTypelist = [];
        this.ChrgTypelistold = [];
        this.EDIT_CHARGETYPE = "";
        this.EDIT_RATE_TAR = null;
        this.DEL_RATE_TAR = null;
        this.RATE_TAR = null;
        this.RATE_TAR_FRT = 'PP';
        this.RATE_NET = null;
        this.EDIT_RATE_NET = null;
        this.DEL_RATE_NET = null;
        this.RATE_NET_FRT = 'PP';
        this.childID = "0";
        this.Chargeslist = [];
        this.HAWBChargeslist = [];
        this.guid = "";
        this.txtchild = "Add";
        this.CHRGDETAILSID = "0";
        this.FK_ID = "0";
        this.PK_ID = "0";
        this.tot_rate_tar_pp_da = null;
        this.tot_rate_tar_pp_dc = null;
        this.tot_rate_tar_cc_da = null;
        this.tot_rate_tar_cc_dc = null;
        this.tot_rate_net_pp_da = null;
        this.tot_rate_net_pp_dc = null;
        this.tot_rate_net_cc_da = null;
        this.tot_rate_net_cc_dc = null;
        this.dttable6 = [];
    }
    MAWBTarifratingcomponent.prototype.changefunction = function () {
        var _this = this;
        var verifyData = null;
        this._loginService.verifyRights(236, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Modify', data); //For verify user access
            _this._loginService.verifyRights(264, '')
                .subscribe(function (returnData) {
                _this.NetRightsAdd = _this._loginService.returnRights('Add', returnData, _this._loginService.getLogin()[0].ROLETYPE);
                if (_this.NetRightsAdd == false) {
                    _this.NetRights = _this._loginService.returnRights('View', returnData, _this._loginService.getLogin()[0].ROLETYPE);
                }
                _this.hdNetRights = (_this.NetRightsAdd == true) ? true : false;
            });
            // this._loaderService.display(true);
            _this.Resetchildrcrdpageload();
            verifyData = data.Table;
            _this.setDropDownData(_this._sharedconsig.exportEditData.MAWBNO, _this._sharedconsig.exportEditData.EXPTNO);
            _this.setData(_this._sharedconsig.exportEditData.MAWBNO, _this._loginService.getLogin()[0].CMP_USERENCCODE, _this._sharedconsig.exportEditData.EXPTNO);
        });
    };
    MAWBTarifratingcomponent.prototype.tarCheck = function (num) {
        // this.TariffRate = num;
        this.TariffRate = num;
        this.NetRate = num;
        //FSC
        this.TarFscPayOn = null;
        this.TarFscRate = "";
        this.TarFsc = "";
        //IRC
        this.TarIrcPayOn = null;
        this.TarIrcRate = "";
        this.TarIrc = "";
        //XRAY
        this.TarXrayPayOn = null;
        this.TarXrayRate = "";
        this.TarXray = "";
    };
    MAWBTarifratingcomponent.prototype.netCheck = function (num) {
        this.NetRate = num;
        this.TariffRate = num;
        //FSC
        this.NetFscPayOn = null;
        this.NetFscRate = "";
        this.NetFsc = "";
        //IRC
        this.NetIrcPayOn = null;
        this.NetIrcRate = "";
        this.NetIrc = "";
        //XRAY
        this.NetXrayPayOn = null;
        this.NetXrayRate = "";
        this.NetXray = "";
    };
    MAWBTarifratingcomponent.prototype.calOneTarCheck = function (num) {
        this.CalOneDcTar = num;
    };
    MAWBTarifratingcomponent.prototype.calOneNetCheck = function (num) {
        this.CalOneDcNet = num;
    };
    MAWBTarifratingcomponent.prototype.calTwoTarCheck = function (num) {
        this.CalTwoDcTar = num;
    };
    MAWBTarifratingcomponent.prototype.calTwoNetCheck = function (num) {
        this.CalTwoDcNet = num;
    };
    MAWBTarifratingcomponent.prototype.changeFreight = function (typ) {
        this.FreightRate = typ;
    };
    MAWBTarifratingcomponent.prototype.fn_PageLoad = function () {
        var CWt = this.UserWgt;
        var GWt = this.UserGrossWeight;
        if (Math.abs(CWt) < 151) // || Math.abs(GWt) < 151)---LAST CHANGES
         {
            this.fn_Load_150_check();
        }
        else {
            this.HawbTar = "150.00";
            this.PcaTar = "250.00";
            this.fn_MC_CTG_Tar();
            this.fn_THC_Tar();
            this.fn_ChangeChareableAsTar();
            if (this.hdNetRights == true) {
                this.HawbNet = "150.00";
                this.PcaNet = "250.00";
                // this.HawbNet = true;
                // this.PcaNet = false;
                this.fn_MC_CTG_Net();
                this.fn_THC_Net();
                this.fn_ChangeChareableAsNet();
            }
        }
    };
    MAWBTarifratingcomponent.prototype.fn_Load_150_check = function () {
        // this.TarFreightRate = "";
        // this.TarFscRate = "";
        // this.TarIrcRate = "";
        // this.TarXrayRate = "";
        // this.TarMcRate = "";
        // this.TarCtgRate = "";
        // this.TarThcRate = "";
        // this.TarBPRate = "";
        this.fn_THC_Tar();
        this.fn_ChangeChareableAsTar();
        if (this.hdNetRights == true) {
            // this.NetFreightRate = "";
            // this.NetFscRate = "";
            // this.NetIrcRate = "";
            // this.NetXrayRate = "";
            // this.NetMcRate = "";
            // this.NetCtgRate = "";
            // this.NetThcRate = "";
            this.fn_THC_Net();
            this.fn_ChangeChareableAsNet();
        }
    };
    MAWBTarifratingcomponent.prototype.fn_ChangeChareableAsTar = function () {
        if (this.TariffRate == 1) {
            this.TarFscPayOn = null;
            this.TarFscRate = "";
            this.TarIrcPayOn = null;
            this.TarIrcRate = "";
            this.TarXrayPayOn = null;
            this.TarXrayRate = "";
            this.TarFsc = "";
            this.TarIrc = "";
            this.TarXray = "";
        }
        else {
            var CWt = this.UserWgt;
            var GWt = this.UserGrossWeight;
            if (Math.abs(CWt) < 151) // || Math.abs(GWt) < 151)---LAST CHANGES
             {
            }
            else {
            }
        }
        this.fnCalculate_Tar();
    };
    MAWBTarifratingcomponent.prototype.fn_ChangeChareableAsNet = function () {
        var CWt = this.UserWgt;
        var GWt = this.UserGrossWeight;
        if (this.NetRate == 1) {
            this.NetFscPayOn = null;
            this.NetFscRate = "";
            this.NetIrcPayOn = null;
            this.NetIrcRate = "";
            this.NetXrayPayOn = null;
            this.NetXrayRate = "";
            this.NetFsc = "";
            this.NetIrc = "";
            this.NetXray = "";
        }
        else {
            CWt = this.UserWgt;
            GWt = this.UserGrossWeight;
            if (Math.abs(CWt) < 151) // || Math.abs(GWt) < 151)---LAST CHANGES
             {
            }
            else {
            }
        }
        this.fnCalculate_Net();
    };
    MAWBTarifratingcomponent.prototype.setDropDownData = function (mawbno, exptno) {
        var _this = this;
        var _jsonData = {
            Type1: mawbno.substring(0, 3),
            Type2: exptno.substring(2, 5)
        };
        this._loaderService.display(true);
        this.exptno = exptno;
        this._dataService.Common("Export/ConsignmentMAWBFill_DROPDOWN", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.netData = data.Table;
            _this.tdsData = data.Table1;
            _this.serviceTax = data.Table2;
            _this.AllAirLineChargeslist = data.Table3;
            _this.ChrgTypelist = data.Table4;
        }, function (error) { _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText); }, function () { });
    };
    MAWBTarifratingcomponent.prototype.setData = function (mawbno, code, exptno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            Type1: mawbno,
            Type2: code,
            Type3: exptno.substring(2, 5),
            GUID: this._loginService.getLogin()[0].GUID,
            CmpId: this._loginService.getLogin()[0].CMPID,
            RoleType: this._loginService.getLogin()[0].ROLETYPE,
            CodeCity: this._loginService.getLogin()[0].CMPCODE + '' + this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.Common("Export/Consignment_MAWB_PP_CC_View", _jsonData)
            .subscribe(function (data) {
            _this.CityCode = data.Table1[0].CITYCODE;
            _this.Wgt = data.Table1[0].CHRGWT;
            _this.UserWgt = data.Table1[0].CHBL_WGT_USER;
            _this.oldchblwt = _this.UserWgt;
            _this.GrossWeight = data.Table1[0].GROSSWT;
            _this.oldgrwt = _this.GrossWeight;
            _this.UserGrossWeight = data.Table1[0].GROSS_WGT_USER;
            _this.isMinRate = (data.Table1[0].ISMIN == 'Y') ? true : false;
            _this.FreightRate = (data.Table1[0].FREIGHT != '') ? data.Table1[0].FREIGHT : null;
            _this.SupplierNet = (data.Table1[0].SUPPLIER_NET != '') ? data.Table1[0].SUPPLIER_NET : null;
            _this.AgentsRate = (data.Table1[0].AGENTS_RATE != '') ? data.Table1[0].AGENTS_RATE : 0.00;
            _this.TariffRate = (data.Table1[0].FRT_CHARGEABLE_AS_TAR == 'FS') ? 2 : 1;
            _this.NetRate = (data.Table1[0].FRT_CHARGEABLE_AS_NET == 'FS') ? 2 : 1;
            //FREIGHT (BASIC)
            _this.TarFreightPayOn = (data.Table1[0].FRT_PAYABLE_ON_TAR != '') ? data.Table1[0].FRT_PAYABLE_ON_TAR : 'CW';
            _this.TarFreightRate = data.Table1[0].FRT_RATE_PER_KG_TAR;
            _this.TarFreight = data.Table1[0].FRT_RATE_TAR;
            _this.NetFreightPayOn = (data.Table1[0].FRT_PAYABLE_ON_NET != '') ? data.Table1[0].FRT_PAYABLE_ON_NET : 'CW';
            _this.NetFreightRate = data.Table1[0].FRT_RATE_PER_KG_NET;
            _this.NetFreight = data.Table1[0].FRT_RATE_NET;
            //FSC
            _this.TarFscPayOn = (data.Table1[0].FSC_PAYABLE_ON_TAR != '') ? data.Table1[0].FSC_PAYABLE_ON_TAR : null;
            _this.TarFscRate = data.Table1[0].FSC_RATE_PER_KG_TAR;
            _this.TarFsc = data.Table1[0].FSC_RATE_TAR;
            _this.NetFscPayOn = (data.Table1[0].FSC_PAYABLE_ON_NET != '') ? data.Table1[0].FSC_PAYABLE_ON_NET : null;
            _this.NetFscRate = data.Table1[0].FSC_RATE_PER_KG_NET;
            _this.NetFsc = data.Table1[0].FSC_RATE_NET;
            //IRC
            _this.TarIrcPayOn = (data.Table1[0].IRC_PAYABLE_ON_TAR != '') ? data.Table1[0].IRC_PAYABLE_ON_TAR : null;
            _this.TarIrcRate = data.Table1[0].IRC_RATE_PER_KG_TAR;
            _this.TarIrc = data.Table1[0].IRC_RATE_TAR;
            _this.NetIrcPayOn = (data.Table1[0].IRC_PAYABLE_ON_NET != '') ? data.Table1[0].IRC_PAYABLE_ON_NET : null;
            _this.NetIrcRate = data.Table1[0].IRC_RATE_PER_KG_NET;
            _this.NetIrc = data.Table1[0].IRC_RATE_NET;
            //XRAY
            _this.TarXrayPayOn = (data.Table1[0].XRAY_PAYABLE_ON_TAR != '') ? data.Table1[0].XRAY_PAYABLE_ON_TAR : null;
            _this.TarXrayRate = data.Table1[0].XRAY_RATE_PER_KG_TAR;
            _this.TarXray = data.Table1[0].XRAY_RATE_TAR;
            _this.NetXrayPayOn = (data.Table1[0].XRAY_PAYABLE_ON_NET != '') ? data.Table1[0].XRAY_PAYABLE_ON_NET : null;
            _this.NetXrayRate = data.Table1[0].XRAY_RATE_PER_KG_NET;
            _this.NetXray = data.Table1[0].XRAY_RATE_NET;
            //MISCELLANEOUS CHARGES
            _this.TarMcPayOn = (data.Table1[0].MC_PAYABLE_ON_TAR != '') ? data.Table1[0].MC_PAYABLE_ON_TAR : null;
            _this.TarMcRate = data.Table1[0].MC_RATE_PER_KG_TAR;
            _this.TarMc = data.Table1[0].MC_RATE_TAR;
            _this.NetMcPayOn = (data.Table1[0].MC_PAYABLE_ON_NET != '') ? data.Table1[0].MC_PAYABLE_ON_NET : null;
            _this.NetMcRate = data.Table1[0].MC_RATE_PER_KG_NET;
            _this.NetMc = data.Table1[0].MC_RATE_NET;
            //CTG
            _this.TarCtgPayOn = (data.Table1[0].CTG_PAYABLE_ON_TAR != '') ? data.Table1[0].CTG_PAYABLE_ON_TAR : 'CW';
            _this.TarCtgRate = data.Table1[0].CTG_RATE_PER_KG_TAR;
            _this.TarCtg = data.Table1[0].CTG_RATE_TAR;
            _this.NetCtgPayOn = (data.Table1[0].CTG_PAYABLE_ON_NET != '') ? data.Table1[0].CTG_PAYABLE_ON_NET : 'CW';
            _this.NetCtgRate = data.Table1[0].CTG_RATE_PER_KG_NET;
            _this.NetCtg = data.Table1[0].CTG_RATE_NET;
            //THC
            _this.TarThcPayOn = (data.Table1[0].THC_PAYABLE_ON_TAR != '') ? data.Table1[0].THC_PAYABLE_ON_TAR : 'CW';
            _this.TarThcRate = data.Table1[0].THC_RATE_PER_KG_TAR;
            _this.TarThc = data.Table1[0].THC_RATE_TAR;
            _this.NetThcPayOn = (data.Table1[0].THC_PAYABLE_ON_NET != '') ? data.Table1[0].THC_PAYABLE_ON_NET : 'CW';
            _this.NetThcRate = data.Table1[0].THC_RATE_PER_KG_NET;
            _this.NetThc = data.Table1[0].THC_RATE_NET;
            //BUSINESS PROMOTION
            _this.TarBPPayOn = (data.Table1[0].BP_PAYABLE_ON_TAR != '') ? data.Table1[0].BP_PAYABLE_ON_TAR : null;
            _this.TarBPRate = data.Table1[0].BP_RATE_PER_KG_TAR;
            _this.TarBP = data.Table1[0].BP_RATE_TAR;
            _this.NetBPPayOn = (data.Table1[0].BP_PAYABLE_ON_NET != '') ? data.Table1[0].BP_PAYABLE_ON_NET : null;
            _this.NetBPRate = data.Table1[0].BP_RATE_PER_KG_NET;
            _this.NetBP = data.Table1[0].BP_RATE_NET;
            // if (this.UserWgt > 151) {
            //     this.tarCheck(this.TariffRate);
            //     this.tarCheck(this.NetRate);
            // }
            _this.TarAms = data.Table1[0].AMS_RATE_TAR;
            _this.TarAmsFrt = (data.Table1[0].AMS_RATE_TAR_FRT) ? data.Table1[0].AMS_RATE_TAR_FRT : null;
            _this.NetAms = data.Table1[0].AMS_RATE_NET;
            _this.NetAmsFrt = (data.Table1[0].AMS_RATE_NET_FRT) ? data.Table1[0].AMS_RATE_NET_FRT : null;
            _this.HawbTar = data.Table1[0].HAWB_TAR;
            if (data.Table1[0].HAWB_RATE_TAR_FRT != "") {
                _this.HawbTarFrt = data.Table1[0].HAWB_RATE_TAR_FRT;
            }
            _this.HawbNet = data.Table1[0].HAWB_NET;
            if (data.Table1[0].HAWB_RATE_NET_FRT != "") {
                _this.HawbNetFrt = data.Table1[0].HAWB_RATE_NET_FRT;
            }
            _this.PcaTar = data.Table1[0].PCA_TAR;
            if (data.Table1[0].PCA_RATE_TAR_FRT != "") {
                _this.PcaTarFrt = data.Table1[0].PCA_RATE_TAR_FRT;
            }
            _this.PcaNet = data.Table1[0].PCA_NET;
            if (data.Table1[0].PCA_RATE_NET_FRT != "") {
                _this.PcaNetFrt = data.Table1[0].PCA_RATE_NET_FRT;
            }
            _this.DurCarrierTar = data.Table1[0].DUE_CARRIER_TAR;
            _this.DurCarrierTarCC = data.Table1[0].DUE_CARRIER_TAR_CC;
            _this.DurCarrierNet = data.Table1[0].DUE_CARRIER_NET;
            _this.DurCarrierNetCC = data.Table1[0].DUE_CARRIER_NET_CC;
            _this.DueAgentTar = data.Table1[0].DUE_AGENT_TAR;
            _this.DueAgentTarCC = data.Table1[0].DUE_AGENT_TAR_CC;
            _this.DueAgentNet = data.Table1[0].DUE_AGENT_NET;
            _this.DueAgentNetCC = data.Table1[0].DUE_AGENT_NET_CC;
            _this.TotalTar = data.Table1[0].TOTAL_TAR;
            _this.TotalTarCC = data.Table1[0].TOTAL_TAR_CC;
            _this.TotalNet = data.Table1[0].TOTAL_NET;
            _this.TotalNetCC = data.Table1[0].TOTAL_NET_CC;
            _this.OtherTar = data.Table1[0].OTHER_CHRG_TAR;
            _this.OtherTarFrt = (data.Table1[0].OTHER_RATE_TAR_FRT != '') ? data.Table1[0].OTHER_RATE_TAR_FRT : 'PP';
            _this.OtherNet = data.Table1[0].OTHER_CHRG_NET;
            _this.OtherNetFrt = (data.Table1[0].OTHER_RATE_NET_FRT != '') ? data.Table1[0].OTHER_RATE_NET_FRT : 'PP';
            _this.AirFrtCommission = data.Table1[0].AIR_FRT_COMM_NET;
            _this.FrtRebate = data.Table1[0].FRT_REBATE_NET;
            _this.BusinesPromo = data.Table1[0].BUSINES_PROMO_NET;
            _this.DrpTDS = data.Table1[0].TDS_ACCTCODE;
            _this.TxtTDS = data.Table1[0].TDS_NET;
            _this.DrpServiceTax = data.Table1[0].SERVICETAX_ACCTCODE;
            _this.TxtServiceTax = data.Table1[0].SERVICE_TAX_NET;
            _this.OtherChrg1 = data.Table1[0].OTHER_NAME1;
            _this.OtherAmt1_Tar = data.Table1[0].OTHER_RATE1_TAR;
            _this.CalOneDcTar = (data.Table1[0].OTHER_RATE1_TAR_CAL == 'DA') ? 2 : 1;
            _this.OtherAmt1TarFrt = (data.Table1[0].OTHER_RATE1_TAR_FRT != '') ? data.Table1[0].OTHER_RATE1_TAR_FRT : 'PP';
            _this.OtherAmt1_Net = data.Table1[0].OTHER_RATE1_NET;
            _this.CalOneDcNet = (data.Table1[0].OTHER_RATE1_NET_CAL == 'DA') ? 2 : 1;
            _this.OtherAmt1NetFrt = (data.Table1[0].OTHER_RATE1_NET_FRT != '') ? data.Table1[0].OTHER_RATE1_NET_FRT : 'PP';
            _this.OtherChrg2 = data.Table1[0].OTHER_NAME2;
            _this.OtherAmt2_Tar = data.Table1[0].OTHER_RATE2_TAR;
            _this.CalTwoDcTar = (data.Table1[0].OTHER_RATE2_TAR_CAL == 'DA') ? 2 : 1;
            _this.OtherAmt2TarFrt = (data.Table1[0].OTHER_RATE2_TAR_FRT != '') ? data.Table1[0].OTHER_RATE2_TAR_FRT : 'PP';
            _this.OtherAmt2_Net = data.Table1[0].OTHER_RATE2_NET;
            _this.CalTwoDcNet = (data.Table1[0].OTHER_RATE2_NET_CAL == 'DA') ? 2 : 1;
            _this.OtherAmt2NetFrt = (data.Table1[0].OTHER_RATE2_NET_FRT != '') ? data.Table1[0].OTHER_RATE2_NET_FRT : 'PP';
            _this.Remark = data.Table1[0].REMARK;
            _this.Ppchrg = data.Table1[0].PPCHRG;
            _this.Ccchrg = data.Table1[0].CCCHRG;
            _this.Pptotagt = data.Table1[0].PPTOTAGT;
            _this.Cctotagt = data.Table1[0].CCTOTAGT;
            _this.Pptotcarr = data.Table1[0].PPTOTCARR;
            _this.Cctotcarr = data.Table1[0].CCTOTCARR;
            _this.Pptot = data.Table1[0].PPTOT;
            _this.Cctot = data.Table1[0].CCTOT;
            _this.Othchrg = data.Table1[0].OTHCHRG;
            _this.ISAUTO_FRT_INV = data.Table1[0].FRTINV_FLG;
            _this.TarTruckPayOn = (data.Table1[0].DEST_TRUCKING_PAYABLE_ON_TAR != '') ? data.Table1[0].DEST_TRUCKING_PAYABLE_ON_TAR : null;
            _this.TarTruckRate = data.Table1[0].DEST_TRUCKING_RATE_PER_KG_TAR;
            _this.TarTruck = data.Table1[0].DEST_TRUCKING_RATE_TAR;
            _this.NetTruckPayOn = (data.Table1[0].DEST_TRUCKING_PAYABLE_ON_NET != '') ? data.Table1[0].DEST_TRUCKING_PAYABLE_ON_NET : null;
            _this.NetTruckRate = data.Table1[0].DEST_TRUCKING_RATE_PER_KG_NET;
            _this.NetTruck = data.Table1[0].DEST_TRUCKING_RATE_NET;
            ///ADDED BY NALINI FOR AIRLINECHARGES
            _this.Chargeslist = data.Table2;
            _this.tot_rate_tar_pp_da = data.Table3[0].RATE_TAR_TOTAL_PP_DA;
            _this.tot_rate_net_pp_da = data.Table3[0].RATE_NET_TOTAL_PP_DA;
            _this.tot_rate_tar_cc_da = data.Table4[0].RATE_TAR_TOTAL_CC_DA;
            _this.tot_rate_net_cc_da = data.Table4[0].RATE_NET_TOTAL_CC_DA;
            _this.tot_rate_tar_pp_dc = data.Table5[0].RATE_TAR_TOTAL_PP_DC;
            _this.tot_rate_net_pp_dc = data.Table5[0].RATE_NET_TOTAL_PP_DC;
            _this.tot_rate_tar_cc_dc = data.Table6[0].RATE_TAR_TOTAL_CC_DC;
            _this.tot_rate_net_cc_dc = data.Table6[0].RATE_NET_TOTAL_CC_DC;
            _this.fn_PageLoad();
            if (_this.ISAUTO_FRT_INV == "1") {
                alert("MAWB rate can not be Modified, Because Automatic Freight Invoice already Generated For This MAWB !!");
                _this._toasterService.toast('Warning', 'Warning', "MAWB rate can not be Modified, Because Automatic Freight Invoice already Generated For This MAWB !!");
            }
            _this._loaderService.display(false);
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
            _this._loaderService.display(false);
        }, function () { });
    };
    MAWBTarifratingcomponent.prototype.changePayOnTariff = function (tarType) {
        if (tarType == 'Fsc') {
            this.TarFscRate = 0;
            this.TarFsc = 0;
        }
        else if (tarType == 'Irc') {
            this.TarIrcRate = 0;
            this.TarIrc = 0;
        }
        else if (tarType == 'Xray') {
            this.TarXrayRate = 0;
            this.TarXray = 0;
        }
        else if (tarType == 'BP') {
            this.TarBPRate = 0;
            this.TarBP = 0;
        }
        else if (tarType == 'Misc') {
            this.TarMcRate = 0;
            this.TarMc = 0;
        }
        else if (tarType == 'CTG') {
            this.TarCtgRate = 0;
            this.TarCtg = 0;
        }
        else if (tarType == 'THC') {
            this.TarThcRate = 0;
            this.TarThc = 0;
        }
        this.fnCalculate_Tar();
    };
    MAWBTarifratingcomponent.prototype.changePayOnNet = function (tarType) {
        if (tarType == 'Fsc') {
            this.NetFscRate = 0;
            this.NetFsc = 0;
        }
        else if (tarType == 'Irc') {
            this.NetIrcRate = 0;
            this.NetIrc = 0;
        }
        else if (tarType == 'Xray') {
            this.NetXrayRate = 0;
            this.NetXray = 0;
        }
        else if (tarType == 'Misc') {
            this.NetMcRate = 0;
            this.NetMc = 0;
        }
        else if (tarType == 'CTG') {
            this.NetCtgRate = 0;
            this.NetCtg = 0;
        }
        else if (tarType == 'THC') {
            this.NetThcRate = 0;
            this.NetThc = 0;
        }
        else if (tarType == 'BP') {
            this.NetBPRate = 0;
            this.NetBP = 0;
        }
        this.fnCalculate_Net();
    };
    MAWBTarifratingcomponent.prototype.selectionChange = function (value) {
        this.TarFreightRate = this.NetFreightRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TariffRateChange = function (value) {
        this.NetFscRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarFscPayOnChange = function (value) {
        this.NetFscPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarIrcChange = function (value) {
        this.NetIrcRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarIrcPayOnChange = function (value) {
        this.NetIrcPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.XrayChange = function (value) {
        this.NetXrayRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.XraypayChange = function (value) {
        this.NetXrayPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarMcPayOnChange = function (value) {
        this.NetMcPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarMcRateChange = function (value) {
        this.NetMcRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarCtgPayOnChange = function (value) {
        this.NetCtgPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarCtgRateChange = function (value) {
        this.NetCtgRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarThcPayOnChange = function (value) {
        this.NetThcPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarThcRateChange = function (value) {
        this.NetThcRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarBPPayOnChange = function (value) {
        this.NetBPPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarBPRateChange = function (value) {
        this.NetBPRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarAmsChange = function (value) {
        this.NetAms = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarAmsFrtChange = function (value) {
        this.NetAmsFrt = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarTruckPayOnChange = function (value) {
        this.NetTruckPayOn = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.TarTruckRateChange = function (value) {
        this.NetTruckRate = value.target.value;
    };
    MAWBTarifratingcomponent.prototype.changeTariffRates = function (tarType) {
        if (tarType == 'Freight') {
            if (Math.abs(this.TarFreightRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarFreightPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarFreight = 0;
            }
            this.onChangeTariffRates('Freight');
        }
        else if (tarType == 'Fsc') {
            if (Math.abs(this.TarFscRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarFscPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarFsc = 0;
            }
            this.onChangeTariffRates('Fsc');
        }
        else if (tarType == 'Irc') {
            if (Math.abs(this.TarIrcRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarIrcPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarIrc = 0;
            }
            this.onChangeTariffRates('Irc');
        }
        else if (tarType == 'Xray') {
            if (Math.abs(this.TarXrayRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarXrayPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarXray = 0;
            }
            this.onChangeTariffRates('Xray');
        }
        else if (tarType == 'Misc') {
            if (Math.abs(this.TarMcRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarMcPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarMc = 0;
            }
            this.onChangeTariffRates('Misc');
        }
        else if (tarType == 'CTG') {
            if (Math.abs(this.TarCtgRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarCtgPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarCtg = 0;
            }
            this.onChangeTariffRates('CTG');
        }
        else if (tarType == 'THC') {
            if (Math.abs(this.TarThcRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarThcPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarThc = 0;
            }
            this.onChangeTariffRates('THC');
        }
        else if (tarType == 'BP') {
            if (Math.abs(this.TarBPRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarBPPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarBP = 0;
            }
            this.onChangeTariffRates('BP');
        }
        else if (tarType == 'DT') {
            if (Math.abs(this.TarTruckRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearTariff();
                    return false;
                }
                if (this.TarTruckPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarTruck = 0;
            }
            this.onChangeTariffRates('DT');
        }
        this.fnCalculate_Tar();
    };
    MAWBTarifratingcomponent.prototype.changeNetRates = function (tarType) {
        if (tarType == 'Freight') {
            if (Math.abs(this.NetFreightRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetFreightPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetFreight = 0;
            }
            this.onChangeNetRates('Freight');
        }
        else if (tarType == 'Fsc') {
            if (Math.abs(this.NetFscRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetFscPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetFsc = 0;
            }
            this.onChangeNetRates('Fsc');
        }
        else if (tarType == 'Irc') {
            if (Math.abs(this.NetIrcRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetIrcPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetIrc = 0;
            }
            this.onChangeNetRates('Irc');
        }
        else if (tarType == 'Xray') {
            if (Math.abs(this.NetXrayRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetXrayPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetXray = 0;
            }
            this.onChangeNetRates('Xray');
        }
        else if (tarType == 'Misc') {
            if (Math.abs(this.NetMcRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetMcPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetMc = 0;
            }
            this.onChangeNetRates('Misc');
        }
        else if (tarType == 'CTG') {
            if (Math.abs(this.NetCtgRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetCtgPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetCtg = 0;
            }
            this.onChangeNetRates('CTG');
        }
        else if (tarType == 'THC') {
            if (Math.abs(this.TarThcRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.TarThcPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.TarThc = 0;
            }
            this.onChangeNetRates('THC');
        }
        else if (tarType == 'BP') {
            if (Math.abs(this.NetBPRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetBPPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetBP = 0;
            }
            this.onChangeNetRates('BP');
        }
        else if (tarType == 'DT') {
            if (Math.abs(this.NetTruckRate) != 0) {
                if (this.validateWeight() == false) {
                    this.clearNet();
                    return false;
                }
                if (this.NetTruckPayOn == null) {
                    alert('Please select Payable On.');
                    return false;
                }
            }
            else {
                this.NetTruck = 0;
            }
            this.onChangeNetRates('DT');
        }
        this.fnCalculate_Net();
    };
    MAWBTarifratingcomponent.prototype.validateWeight = function () {
        var CHBLWT = Math.abs(this.UserWgt);
        var GRWT = Math.abs(this.UserGrossWeight);
        if (CHBLWT == 0) {
            alert("Please enter Chageable Weight.");
            return false;
        }
        if (GRWT == 0) {
            alert("Please enter Gross Weight.");
            return false;
        }
        if (CHBLWT < GRWT) {
            alert("Chargable Wgt should be greaterthen or equal to Gross Weight.");
            return false;
        }
    };
    MAWBTarifratingcomponent.prototype.clearTariff = function () {
        this.TarFreightRate = "";
        this.TarFreight = "";
        this.TarFscPayOn = "0";
        this.TarFscRate = "";
        this.TarFsc = "";
        this.TarIrcPayOn = "0";
        this.TarIrcRate = "";
        this.TarIrc = "";
        this.TarXrayPayOn = "0";
        this.TarXrayRate = "";
        this.TarXray = "";
        this.TarMcRate = 1;
        var GRWT = Math.abs(this.UserGrossWeight);
        GRWT = Math.round(Math.abs(GRWT));
        GRWT = Math.abs(Number(GRWT.toFixed(2)));
        this.TarMc = GRWT;
        this.fn_MC_CTG_Tar();
        this.fn_THC_Tar();
    };
    MAWBTarifratingcomponent.prototype.clearNet = function () {
        this.NetFreightRate = null;
        this.NetFreight = null;
        this.NetFscPayOn = 0;
        this.NetFscRate = null;
        this.NetFsc = null;
        this.NetIrcPayOn = 0;
        this.NetIrcRate = null;
        this.NetIrc = null;
        this.NetXrayPayOn = 0;
        this.NetXrayRate = null;
        this.NetXray = null;
        this.NetMcRate = 1;
        this.NetMc = Math.abs(this.UserGrossWeight);
        this.fn_MC_CTG_Net();
        this.fn_THC_Net();
    };
    MAWBTarifratingcomponent.prototype.fn_MC_CTG_Tar = function () {
        var VALUE = 0;
        VALUE = Math.abs(this.UserWgt);
        VALUE = Math.round(Math.abs(VALUE));
        VALUE = (Math.abs(Number(VALUE.toFixed(2))));
        var Mawbno = this._sharedconsig.exportEditData.MAWBNO;
        var prestrg = Mawbno.substring(0, 3);
        if (prestrg != "232" && this.CityCode != 'AMD') {
            this.TarMcRate = 1;
            this.TarMc = VALUE;
        }
        if (prestrg != "232" && this.CityCode == 'AMD') {
            this.TarMcRate = 1;
            this.TarMc = VALUE;
        }
        if (this.CityCode == 'MUM') {
            this.TarCtgRate = 1;
            VALUE = Math.abs(this.UserGrossWeight);
            VALUE = Math.round(Math.abs(VALUE));
            VALUE = (Math.abs(Number(VALUE.toFixed(2))));
            this.TarCtg = VALUE;
        }
        else {
            this.TarCtgRate = 0;
            this.TarCtg = 0;
        }
    };
    MAWBTarifratingcomponent.prototype.fn_THC_Tar = function () {
        var VALUE = 0;
        VALUE = Math.abs(this.UserWgt);
        VALUE = Math.round(Math.abs(VALUE));
        VALUE = (Math.abs(Number(VALUE.toFixed(2))));
        //THC CALCULATED ON CW * 0.08 AS PER ARJUN MAIL Tue 3/10/2015 1:41 PM
        this.TarThcRate = 0.08;
        this.TarThc = VALUE;
        if (this.CityCode == 'DAC') {
            this.TarThcRate = 0.08;
            VALUE = Math.abs(VALUE);
            var TOT = ((this.TarThcRate) * Math.abs(VALUE)).toFixed(2);
            this.TarThc = Math.abs(Number(TOT));
        }
        else {
            this.TarThcRate = 0;
            this.TarThc = 0;
        }
    };
    MAWBTarifratingcomponent.prototype.fn_MC_CTG_Net = function () {
        var VALUE = 0;
        if (this.hdNetRights == true) {
            VALUE = Math.abs(this.UserWgt);
            VALUE = Math.round(Math.abs(VALUE));
            VALUE = (Math.abs(Number(VALUE.toFixed(2))));
            var Mawbno = this._sharedconsig.exportEditData.MAWBNO;
            var prestrg = Mawbno.substring(0, 3);
            if (prestrg != "232" && this.CityCode != 'AMD') {
                this.NetMcRate = 1;
                this.NetMc = VALUE;
            }
            if (prestrg != "232" && this.CityCode == 'AMD') {
                this.NetMcRate = 1;
                this.NetMc = VALUE;
            }
            if (this.CityCode == 'MUM') {
                this.NetCtgRate = 1;
                VALUE = Math.abs(this.UserGrossWeight);
                VALUE = Math.round(Math.abs(VALUE));
                VALUE = Math.abs(Number(VALUE.toFixed(2)));
                this.NetCtg = VALUE;
            }
            else {
                this.NetCtgRate = 0;
                this.NetCtg = 0;
            }
        }
    };
    MAWBTarifratingcomponent.prototype.fn_THC_Net = function () {
        var VALUE = 0;
        if (this.hdNetRights == true) {
            VALUE = Math.abs(this.UserWgt);
            VALUE = Math.round(Math.abs(VALUE));
            VALUE = (Math.abs(VALUE));
            //THC CALCULATED ON CW * 0.08 AS PER ARJUN MAIL Tue 3/10/2015 1:41 PM
            this.NetThcRate = 0.08;
            this.NetThc = VALUE;
            if (this.CityCode == "DAC") {
                this.NetThcRate = 0.08;
                VALUE = Math.abs(VALUE); // Math.abs(this.UserGrossWeight);
                var TOT = ((this.NetThcRate) * Math.abs(VALUE));
                this.NetThc = Math.abs(TOT).toFixed(2);
            }
            else {
                this.NetThcRate = 0;
                this.NetThc = 0;
            }
        }
    };
    MAWBTarifratingcomponent.prototype.onChangeTariffRates = function (tarType) {
        var MUL_VALUE = 0;
        var TOT = 0;
        if (tarType == 'Freight') {
            if (this.TarFreightPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarFreightPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarFreightRate) * Math.abs(MUL_VALUE));
            this.TarFreight = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Fsc') {
            if (this.TarFscPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarFscPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarFscRate) * Math.abs(MUL_VALUE));
            this.TarFsc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Irc') {
            if (this.TarIrcPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarIrcPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarIrcRate) * Math.abs(MUL_VALUE));
            this.TarIrc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Xray') {
            if (this.TarXrayPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarXrayPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarXrayRate) * Math.abs(MUL_VALUE));
            this.TarXray = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Misc') {
            if (this.TarMcPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarMcPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarMcRate) * Math.abs(MUL_VALUE));
            this.TarMc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'CTG') {
            if (this.TarCtgPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarCtgPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarCtgRate) * Math.abs(MUL_VALUE));
            this.TarCtg = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'THC') {
            if (this.TarThcPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarThcPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarThcRate) * Math.abs(MUL_VALUE));
            this.TarThc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'BP') {
            if (this.TarBPPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.TarBPPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.TarBPRate) * Math.abs(MUL_VALUE));
            this.TarBP = Math.round(TOT).toFixed(2);
        }
    };
    MAWBTarifratingcomponent.prototype.onChangeNetRates = function (tarType) {
        var MUL_VALUE = 0;
        var TOT = 0;
        if (tarType == 'Freight') {
            if (this.NetFreightPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetFreightPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetFreightRate) * Math.abs(MUL_VALUE));
            this.NetFreight = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Fsc') {
            if (this.NetFscPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetFscPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetFscRate) * Math.abs(MUL_VALUE));
            this.NetFsc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Irc') {
            if (this.NetIrcPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetIrcPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetIrcRate) * Math.abs(MUL_VALUE));
            this.NetIrc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Xray') {
            if (this.NetXrayPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetXrayPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetXrayRate) * Math.abs(MUL_VALUE));
            this.NetXray = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'Misc') {
            if (this.NetMcPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetMcPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetMcRate) * Math.abs(MUL_VALUE));
            this.NetMc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'CTG') {
            if (this.NetCtgPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetCtgPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetCtgRate) * Math.abs(MUL_VALUE));
            this.NetCtg = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'THC') {
            if (this.NetThcPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetThcPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetThcRate) * Math.abs(MUL_VALUE));
            this.NetThc = Math.round(TOT).toFixed(2);
        }
        else if (tarType == 'BP') {
            if (this.NetBPPayOn == "CW") {
                MUL_VALUE = Math.abs(this.UserWgt);
            }
            else if (this.NetBPPayOn == "GW") {
                MUL_VALUE = Math.abs(this.UserGrossWeight);
            }
            TOT = (Math.abs(this.NetBPRate) * Math.abs(MUL_VALUE));
            this.NetBP = Math.round(TOT).toFixed(2);
        }
    };
    MAWBTarifratingcomponent.prototype.fnCalculate_Tar = function () {
        var FSC = 0, IRC = 0, XRAY = 0, MC = 0, CTG = 0, OC1_DC = 0, OC2_DC = 0, OC1_DA = 0, OC2_DA = 0, DUE_CARRIER = 0, HAWB = 0, PCA = 0, DUE_AGENT = 0, TOTAL = 0, FREIGHT = 0, AMS = 0, THC = 0, BUSINESPROMO = 0, BP = 0, FSC_CC = 0, IRC_CC = 0, XRAY_CC = 0, MC_CC = 0, CTG_CC = 0, OC1_DC_CC = 0, OC2_DC_CC = 0, OC1_DA_CC = 0, OC2_DA_CC = 0, DUE_CARRIER_CC = 0, HAWB_CC = 0, PCA_CC = 0, DUE_AGENT_CC = 0, TOTAL_CC = 0, FREIGHT_CC = 0, AMS_CC = 0, THC_CC = 0, BP_CC = 0, Truck_CC = 0, Truck = 0;
        if (this.TarFscFrt == "PP") {
            FSC = (Math.abs(this.TarFsc));
        }
        else {
            FSC_CC = (Math.abs(this.TarFsc));
        }
        if (this.TarIrcFrt == "PP") {
            IRC = (Math.abs(this.TarIrc));
        }
        else {
            IRC_CC = (Math.abs(this.TarIrc));
        }
        if (this.TarXrayFrt == "PP") {
            XRAY = (Math.abs(this.TarXray));
        }
        else {
            XRAY_CC = (Math.abs(this.TarXray));
        }
        if (this.TarMcFrt == "PP") {
            MC = (Math.abs(this.TarMc));
        }
        else {
            MC_CC = (Math.abs(this.TarMc));
        }
        if (this.TarAmsFrt == "PP") {
            AMS = (Math.abs(this.TarAms));
        }
        else {
            AMS_CC = (Math.abs(this.TarAms));
        }
        if (this.CityCode == "MUM") {
            if (this.TarCtgFrt == "PP") {
                CTG = Math.abs(this.TarCtg);
            }
            else {
                CTG_CC = Math.abs(this.TarCtg);
            }
        }
        else {
            CTG = 0;
            CTG_CC = 0;
        }
        /* if (this.CityCode == "DAC") {
             if (this.TarThcFrt == "PP")
                 THC = Math.abs(this.TarThc);
             else
                 THC_CC = Math.abs(this.TarThc);
         }
         else {
             THC = 0;
             THC_CC = 0;
         }*/
        if (this.TarThcFrt == "PP") {
            THC = (Math.abs(this.TarThc));
        }
        else {
            THC_CC = (Math.abs(this.TarThc));
        }
        if (this.CityCode == "DAC") {
            BP = 0;
            BP_CC = 0;
        }
        else {
            if (this.TarBPFrt == "PP") {
                BP = Math.abs(this.TarBP);
            }
            else {
                BP_CC = Math.abs(this.TarBP);
            }
        }
        if (this.OtherAmt1TarFrt == "PP") {
            if (this.CalOneDcTar == 1) {
                OC1_DC = Math.abs(this.OtherAmt1_Tar);
            }
            else {
                OC1_DA = Math.abs(this.OtherAmt1_Tar);
            }
        }
        else {
            if (this.CalOneDcTar == 1) {
                OC1_DC_CC = Math.abs(this.OtherAmt1_Tar);
            }
            else {
                OC1_DA_CC = Math.abs(this.OtherAmt1_Tar);
            }
        }
        if (this.OtherAmt2TarFrt == "PP") {
            if (this.CalTwoDcTar == 1) {
                OC2_DC = Math.abs(this.OtherAmt2_Tar);
            }
            else {
                OC2_DA = Math.abs(this.OtherAmt2_Tar);
            }
        }
        else {
            if (this.CalTwoDcTar == 1) {
                OC2_DC_CC = Math.abs(this.OtherAmt2_Tar);
            }
            else {
                OC2_DA_CC = Math.abs(this.OtherAmt2_Tar);
            }
        }
        if (this.HawbTarFrt == "PP") {
            HAWB = Math.abs(this.HawbTar);
        }
        else {
            HAWB_CC = Math.abs(this.HawbTar);
        }
        if (this.PcaTarFrt == "PP") {
            PCA = Math.abs(this.PcaTar);
        }
        else {
            PCA_CC = Math.abs(this.PcaTar);
        }
        if (this.TarFreightFrt == "PP") {
            FREIGHT = Math.abs(this.TarFreight);
        }
        else {
            FREIGHT_CC = Math.abs(this.TarFreight);
        }
        if (this.TarTruckFrt == "PP") {
            Truck = Math.abs(this.TarTruck);
        }
        else {
            Truck_CC = Math.abs(this.TarTruck);
        }
        ///ADDED BY NALINI FOR ALCHARGES ON 21/04/2022
        var totrate_tar_pp_dc = Math.abs(this.tot_rate_tar_pp_dc);
        var tot_rate_tar_cc_dc = Math.abs(this.tot_rate_tar_cc_dc);
        var DUE_CARRIER1 = Math.abs(FSC) + Math.abs(IRC) + Math.abs(XRAY) + Math.abs(MC) + Math.abs(CTG) + Math.abs(AMS) + Math.abs(OC1_DC) + Math.abs(OC2_DC) + Math.abs(THC) + Math.abs(BP) + Math.abs(totrate_tar_pp_dc);
        DUE_CARRIER = Math.round(Math.abs(DUE_CARRIER1));
        DUE_CARRIER = DUE_CARRIER;
        var DUE_CARRIER1_CC = Math.abs(FSC_CC) + Math.abs(IRC_CC) + Math.abs(XRAY_CC) + Math.abs(MC_CC) + Math.abs(CTG_CC) + Math.abs(AMS_CC) + Math.abs(OC1_DC_CC) + Math.abs(OC2_DC_CC) + Math.abs(THC_CC) + Math.abs(BP_CC) + Math.abs(tot_rate_tar_cc_dc);
        DUE_CARRIER_CC = Math.round(Math.abs(DUE_CARRIER1_CC));
        DUE_CARRIER_CC = DUE_CARRIER_CC;
        ///ADDED BY NALINI FOR ALCHARGES ON 21/04/2022
        var totrate_tar_pp_da = Math.abs(this.tot_rate_tar_pp_da);
        var totrate_tar_cc_da = Math.abs(this.tot_rate_tar_cc_da);
        var DUE_AGENT1 = Math.abs(HAWB) + Math.abs(PCA) + Math.abs(OC1_DA) + Math.abs(OC2_DA) + Math.abs(totrate_tar_pp_da);
        DUE_AGENT1 = Math.round(DUE_AGENT1);
        DUE_AGENT = DUE_AGENT1;
        var DUE_AGENT1_CC = Math.abs(HAWB_CC) + Math.abs(PCA_CC) + Math.abs(OC1_DA_CC) + Math.abs(OC2_DA_CC) + Math.abs(totrate_tar_cc_da);
        DUE_AGENT1_CC = Math.round(DUE_AGENT1_CC);
        DUE_AGENT_CC = DUE_AGENT1_CC;
        var TOTAL1 = Math.abs(DUE_CARRIER) + Math.abs(DUE_AGENT) + Math.abs(FREIGHT) + Math.abs(Truck);
        TOTAL1 = Math.round(TOTAL1);
        TOTAL = Math.abs(TOTAL1);
        var TOTAL1_CC = Math.abs(DUE_CARRIER_CC) + Math.abs(DUE_AGENT_CC) + Math.abs(FREIGHT_CC) + Math.abs(Truck_CC);
        TOTAL1_CC = Math.round(TOTAL1_CC);
        TOTAL_CC = TOTAL1_CC;
        this.DurCarrierTar = DUE_CARRIER.toFixed(2);
        this.DueAgentTar = DUE_AGENT.toFixed(2);
        this.TotalTar = TOTAL.toFixed(2);
        this.DurCarrierTarCC = DUE_CARRIER_CC.toFixed(2);
        this.DueAgentTarCC = DUE_AGENT_CC.toFixed(2);
        this.TotalTarCC = TOTAL_CC.toFixed(2);
        // this.fn_CalculateAlCharges_Tar( this.dttable6);
    };
    MAWBTarifratingcomponent.prototype.fnCalculate_Net = function () {
        var FSC = 0, IRC = 0, XRAY = 0, MC = 0, CTG = 0, THC = 0, BP = 0, OC1_DC = 0, OC2_DC = 0, OC1_DA = 0, OC2_DA = 0, DUE_CARRIER = 0, HAWB = 0, PCA = 0, DUE_AGENT = 0, TOTAL = 0, FREIGHT = 0, AMS = 0, FSC_CC = 0, IRC_CC = 0, XRAY_CC = 0, MC_CC = 0, CTG_CC = 0, THC_CC = 0, BP_CC = 0, OC1_DC_CC = 0, OC2_DC_CC = 0, OC1_DA_CC = 0, OC2_DA_CC = 0, DUE_CARRIER_CC = 0, HAWB_CC = 0, PCA_CC = 0, DUE_AGENT_CC = 0, TOTAL_CC = 0, FREIGHT_CC = 0, AMS_CC = 0, Truck = 0, Truck_CC = 0;
        if (this.NetFscFrt == "PP") {
            FSC = Math.abs(this.NetFsc);
        }
        else {
            FSC_CC = Math.abs(this.NetFsc);
        }
        if (this.NetIrcFrt == "PP") {
            IRC = Math.abs(this.NetIrc);
        }
        else {
            IRC_CC = Math.abs(this.NetIrc);
        }
        if (this.NetXrayFrt == "PP") {
            XRAY = Math.abs(this.NetXray);
        }
        else {
            XRAY_CC = Math.abs(this.NetXray);
        }
        if (this.NetMcFrt == "PP") {
            MC = Math.abs(this.NetMc);
        }
        else {
            MC_CC = Math.abs(this.NetMc);
        }
        if (this.NetAmsFrt == "PP") {
            AMS = Math.abs(this.NetAms);
        }
        else {
            AMS_CC = Math.abs(this.NetAms);
        }
        if (this.CityCode == "MUM") {
            if (this.NetCtgFrt == "PP") {
                CTG = Math.abs(this.NetCtg);
            }
            else {
                CTG_CC = Math.abs(this.NetCtg);
            }
        }
        else {
            CTG = 0;
            CTG_CC = 0;
        }
        /*if (this.CityCode == "DAC") {
            if (this.NetThcFrt == "PP") { THC = Math.abs(this.NetThc); }
            else { THC_CC = Math.abs(this.NetThc); }
        }
        else {
            THC = 0;
            THC_CC = 0;
        }*/
        if (this.NetThcFrt == "PP") {
            THC = Math.abs(this.NetThc);
        }
        else {
            THC_CC = Math.abs(this.NetThc);
        }
        if (this.CityCode == "DAC") {
            BP = 0;
            BP_CC = 0;
        }
        else {
            if (this.NetBPFrt == "PP") {
                BP = Math.abs(this.NetBP);
            }
            else {
                BP_CC = Math.abs(this.NetBP);
            }
        }
        if (this.OtherAmt1NetFrt == "PP") {
            if (this.CalOneDcNet == 1) {
                OC1_DC = Math.abs(this.OtherAmt1_Net);
            }
            else {
                OC1_DA = Math.abs(this.OtherAmt1_Net);
            }
        }
        else {
            if (this.CalOneDcNet == 1) {
                OC1_DC_CC = Math.abs(this.OtherAmt1_Net);
            }
            else {
                OC1_DA_CC = Math.abs(this.OtherAmt1_Net);
            }
        }
        if (this.OtherAmt2NetFrt == "PP") {
            if (this.CalTwoDcTar == 1) {
                OC2_DC = Math.abs(this.OtherAmt2_Net);
            }
            else {
                OC2_DA = Math.abs(this.OtherAmt2_Net);
            }
        }
        else {
            if (this.CalTwoDcTar == 1) {
                OC2_DC_CC = Math.abs(this.OtherAmt2_Net);
            }
            else {
                OC2_DA_CC = Math.abs(this.OtherAmt2_Net);
            }
        }
        if (this.HawbNetFrt == "PP") {
            HAWB = Math.abs(this.HawbNet);
        }
        else {
            HAWB_CC = Math.abs(this.HawbNet);
        }
        if (this.PcaNetFrt == "PP") {
            PCA = Math.abs(this.PcaNet);
        }
        else {
            PCA_CC = Math.abs(this.PcaNet);
        }
        if (this.NetFreightFrt == "PP") {
            FREIGHT = Math.abs(this.NetFreight);
        }
        else {
            FREIGHT_CC = Math.abs(this.NetFreight);
        }
        if (this.NetTruckFrt == "PP") {
            Truck = Math.abs(this.NetTruck);
        }
        else {
            Truck_CC = Math.abs(this.NetTruck);
        }
        //ADDED BY NALINI ON 21/04/2022 FOR ALCHARGES DUE CARRIER
        var totrate_net_pp_dc = Math.abs(this.tot_rate_net_pp_dc);
        var tot_rate_net_cc_dc = Math.abs(this.tot_rate_net_cc_dc);
        var DUE_CARRIER1 = Math.abs(FSC) + Math.abs(IRC) + Math.abs(XRAY) + Math.abs(MC) + Math.abs(CTG) + Math.abs(AMS) + Math.abs(OC1_DC) + Math.abs(OC2_DC) + Math.abs(THC) + Math.abs(BP) + Math.abs(totrate_net_pp_dc);
        DUE_CARRIER1 = Math.round(Math.abs(DUE_CARRIER1));
        DUE_CARRIER = Math.abs(DUE_CARRIER1);
        var DUE_CARRIER1_CC = Math.abs(FSC_CC) + Math.abs(IRC_CC) + Math.abs(XRAY_CC) + Math.abs(MC_CC) + Math.abs(CTG_CC) + Math.abs(AMS_CC) + Math.abs(OC1_DC_CC) + Math.abs(OC2_DC_CC) + Math.abs(THC_CC) + Math.abs(BP_CC) + Math.abs(tot_rate_net_cc_dc);
        DUE_CARRIER1_CC = Math.round(Math.abs(DUE_CARRIER1_CC));
        DUE_CARRIER_CC = Math.abs(DUE_CARRIER1_CC);
        //ADDED BY NALINI ON 21/04/2022 FOR ALCHARGES DUE AGENT
        var totrate_net_pp_da = Math.abs(this.tot_rate_net_pp_da);
        var totrate_net_cc_da = Math.abs(this.tot_rate_net_cc_da);
        var DUE_AGENT1 = Math.abs(HAWB) + Math.abs(PCA) + Math.abs(OC1_DA) + Math.abs(OC2_DA) + Math.abs(totrate_net_pp_da);
        DUE_AGENT1 = Math.round(Math.abs(DUE_AGENT1));
        DUE_AGENT = Math.abs(DUE_AGENT1);
        var DUE_AGENT1_CC = Math.abs(HAWB_CC) + Math.abs(PCA_CC) + Math.abs(OC1_DA_CC) + Math.abs(OC2_DA_CC) + Math.round(totrate_net_cc_da);
        DUE_AGENT1_CC = Math.round(Math.abs(DUE_AGENT1_CC));
        DUE_AGENT_CC = Math.abs(DUE_AGENT1_CC);
        var TOTAL1 = Math.abs(DUE_CARRIER) + Math.abs(DUE_AGENT) + Math.abs(FREIGHT) + Math.abs(Truck);
        TOTAL1 = Math.round(Math.abs(TOTAL1));
        TOTAL = Math.abs(TOTAL1);
        var TOTAL1_CC = Math.abs(DUE_CARRIER_CC) + Math.abs(DUE_AGENT_CC) + Math.abs(FREIGHT_CC) + Math.abs(Truck_CC);
        TOTAL1_CC = Math.round(Math.abs(TOTAL1_CC));
        TOTAL_CC = Math.abs(TOTAL1_CC);
        this.DurCarrierNet = DUE_CARRIER.toFixed(2);
        this.DueAgentNet = DUE_AGENT.toFixed(2);
        this.TotalNet = TOTAL.toFixed(2);
        this.DurCarrierNetCC = DUE_CARRIER_CC.toFixed(2);
        this.DueAgentNetCC = DUE_AGENT_CC.toFixed(2);
        this.TotalNetCC = TOTAL_CC.toFixed(2);
    };
    MAWBTarifratingcomponent.prototype.changeUserWeight = function () {
        if (this.oldchblwt != this.UserWgt) {
            var answer = confirm("Are you sure you want to change Charable Weight from " + this.oldchblwt + " to " + this.UserWgt + "?");
            if (answer == false) {
                return false;
            }
            else {
                this.oldchblwt = this.UserWgt;
                this.fn_PageLoad();
                this.changeTariffRates('Freight');
                this.changeNetRates('Freight');
                this.changeTariffRates('Fsc');
                this.changeNetRates('Fsc');
                this.changeTariffRates('Irc');
                this.changeNetRates('Irc');
                this.changeTariffRates('Xray');
                this.changeNetRates('Xray');
                this.changeTariffRates('Misc');
                this.changeNetRates('Misc');
                this.changeTariffRates('CTG');
                this.changeNetRates('CTG');
                this.changeTariffRates('THC');
                this.changeNetRates('THC');
                this.fnCalculate_Tar();
                this.fnCalculate_Net();
            }
        }
        if (this.oldgrwt != this.UserGrossWeight) {
            var answer = confirm("Are you sure you want to change Gross Weight from " + this.oldgrwt + " to " + this.UserGrossWeight + "?");
            if (answer == false) {
                return false;
            }
        }
        else {
            this.oldgrwt = this.UserGrossWeight;
            this.fn_PageLoad();
            this.fnCalculate_Tar();
            this.fnCalculate_Net();
        }
    };
    MAWBTarifratingcomponent.prototype.onChangeAms = function (rateType) {
        if (rateType == 'TAR') {
            this.fnCalculate_Tar();
        }
        else if (rateType == 'NET') {
            this.fnCalculate_Net();
        }
    };
    MAWBTarifratingcomponent.prototype.onChangeOtherChargeName = function (cnType) {
        if (cnType == 1) {
            if (this.OtherChrg1 == "") {
                this.OtherAmt1_Tar = "";
                this.fnCalculate_Tar();
                if (this.hdNetRights == true) {
                    this.OtherAmt1_Net = "";
                    this.fnCalculate_Net();
                }
            }
        }
        else if (cnType == 2) {
            if (this.OtherChrg2 == "") {
                this.OtherAmt2_Tar = "";
                this.fnCalculate_Tar();
                if (this.hdNetRights == true) {
                    this.OtherAmt2_Net = "";
                    this.fnCalculate_Net();
                }
            }
        }
    };
    MAWBTarifratingcomponent.prototype.onChangeOther_Tar = function (oType) {
        if (oType == 1) {
            if (Math.abs(this.OtherAmt1_Tar) > 0) {
                if (this.OtherChrg1 == "" || this.OtherChrg1 == null) {
                    alert("Please enter name of Charge1.");
                    this.OtherAmt1_Tar = null;
                    return false;
                }
            }
            this.fnCalculate_Tar();
        }
        else if (oType == 2) {
            if (Math.abs(this.OtherAmt2_Tar) > 0) {
                if (this.OtherChrg2 == "" || this.OtherChrg2 == null) {
                    alert("Please enter name of Charge2.");
                    this.OtherAmt2_Tar = null;
                    return false;
                }
            }
            this.fnCalculate_Tar();
        }
    };
    MAWBTarifratingcomponent.prototype.onChangeOther_Net = function (ChargeType) {
        if (ChargeType == '1') {
            if (Math.abs(this.OtherAmt1_Net) > 0) {
                if (this.OtherChrg1 == "" || this.OtherChrg1 == null) {
                    alert("Please enter name of Charge1.");
                    this.OtherAmt1_Net = null;
                    return false;
                }
            }
            this.fnCalculate_Net();
        }
        else if (ChargeType == '2') {
            if (Math.abs(this.OtherAmt2_Net) > 0) {
                if (this.OtherChrg2 == "" || this.OtherChrg2 == null) {
                    alert("Please enter name of Charge2.");
                    this.OtherAmt2_Net = null;
                    return false;
                }
            }
            this.fnCalculate_Net();
        }
    };
    MAWBTarifratingcomponent.prototype.fnChangeFreight_PP_CC_TAR = function () {
        var Value = this.TarFreightFrt;
        this.TarFscFrt = Value;
        this.TarIrcFrt = Value;
        this.TarXrayFrt = Value;
        this.fnCalculate_Tar();
    };
    MAWBTarifratingcomponent.prototype.fnChangeFreight_PP_CC_NET = function () {
        var Value = this.NetFreightFrt;
        this.NetFscFrt = Value;
        this.NetIrcFrt = Value;
        this.NetXrayFrt = Value;
        this.fnCalculate_Net();
    };
    MAWBTarifratingcomponent.prototype.fn_MAWB_IU = function () {
        var _this = this;
        if (this.validateWeight() == false) {
            return false;
        }
        var AGENTS_RATE = this.AgentsRate;
        if (parseFloat(AGENTS_RATE) > 20.00) {
            alert("Please Enter below 20 on Agent Charges! ");
            return false;
        }
        var MAWBNO = this._sharedconsig.exportEditData.MAWBNO;
        var CITYCODE = this.CityCode;
        var CHBL_WGT = this.Wgt;
        var GROSS_WGT = this.GrossWeight;
        var CHBL_WGT_USER = Math.abs(this.UserWgt);
        var GROSS_WGT_USER = Math.abs(this.UserGrossWeight);
        var FREIGHT = (this.FreightRate != null) ? this.FreightRate : "";
        var FRT_CHARGEABLE_AS_TAR = (this.TariffRate == 1) ? "AI" : "FS";
        var FRT_PAYABLE_ON_TAR = (this.TarFreightPayOn != null) ? this.TarFreightPayOn : "";
        var FRT_RATE_PER_KG_TAR = Math.abs(this.TarFreightRate);
        var FRT_RATE_TAR = Math.abs(this.TarFreight);
        var FSC_PAYABLE_ON_TAR = (this.TarFscPayOn != null) ? this.TarFscPayOn : "";
        var FSC_RATE_PER_KG_TAR = Math.abs(this.TarFscRate);
        var FSC_RATE_TAR = Math.abs(this.TarFsc);
        var IRC_PAYABLE_ON_TAR = (this.TarIrcPayOn != null) ? this.TarIrcPayOn : "";
        var IRC_RATE_PER_KG_TAR = Math.abs(this.TarIrcRate);
        var IRC_RATE_TAR = Math.abs(this.TarIrc);
        var XRAY_PAYABLE_ON_TAR = (this.TarXrayPayOn != null) ? this.TarXrayPayOn : "";
        var XRAY_RATE_PER_KG_TAR = Math.abs(this.TarXrayRate);
        var XRAY_RATE_TAR = Math.abs(this.TarXray);
        if (FRT_CHARGEABLE_AS_TAR == 'FS') {
            // if (FSC_RATE_TAR == 0) {
            //     alert("Please enter any one TARIFF RATE - FSC");
            //     return false;
            // }
            if (FSC_RATE_TAR == 0 && IRC_RATE_TAR == 0 && XRAY_RATE_TAR == 0) {
                alert("Please enter any one TARIFF RATE :[FSC] or [IRC] or [X-RAY]");
                return false;
            }
        }
        var MC_PAYABLE_ON_TAR = (this.TarMcPayOn != null) ? this.TarMcPayOn : "";
        var MC_RATE_PER_KG_TAR = Math.abs(this.TarMcRate);
        var MC_RATE_TAR = Math.abs(this.TarMc);
        var CTG_PAYABLE_ON_TAR = (this.TarCtgPayOn != null) ? this.TarCtgPayOn : "";
        var CTG_RATE_PER_KG_TAR = Math.abs(this.TarCtgRate);
        var CTG_RATE_TAR = Math.abs(this.TarCtg);
        var THC_PAYABLE_ON_TAR = (this.TarThcPayOn != null) ? this.TarThcPayOn : "";
        var THC_RATE_PER_KG_TAR = Math.abs(this.TarThcRate);
        var THC_RATE_TAR = Math.abs(this.TarThc);
        var BP_PAYABLE_ON_TAR = (this.TarBPPayOn != null) ? this.TarBPPayOn : "";
        var BP_RATE_PER_KG_TAR = Math.abs(this.TarBPRate);
        var BP_RATE_TAR = Math.abs(this.TarBP);
        var Truck_PAYABLE_ON_TAR = (this.TarTruckPayOn != null) ? this.TarTruckPayOn : "";
        var Truck_RATE_PER_KG_TAR = Math.abs(this.TarTruckRate);
        var Truck_RATE_TAR = Math.abs(this.TarTruck);
        var DUE_CARRIER_TAR = Math.abs(this.DurCarrierTar);
        var HAWB_TAR = Math.abs(this.HawbTar);
        var PCA_TAR = Math.abs(this.PcaTar);
        var DUE_AGENT_TAR = Math.abs(this.DueAgentTar);
        var TOTAL_TAR = Math.abs(this.TotalTar);
        var OTHER_CHRG_TAR = Math.abs(this.OtherTar);
        var REMARK = this.Remark;
        var AMS_RATE_TAR = Math.abs(this.TarAms);
        var OTHER_NAME1 = this.OtherChrg1;
        var OTHER_NAME2 = this.OtherChrg2;
        var OTHER_RATE1_TAR = Math.abs(this.OtherAmt1_Tar);
        var OTHER_RATE2_TAR = Math.abs(this.OtherAmt2_Tar);
        var OTHER_RATE1_TAR_CAL = (this.CalOneDcTar == 1) ? "DC" : "DA";
        var OTHER_RATE2_TAR_CAL = this.OtherAmt2_Tar;
        OTHER_RATE2_TAR_CAL = (this.CalTwoDcTar == 1) ? "DC" : "DA"; //Line 1413 one variable with different data
        var OTHER_RATE1_NET_CAL = (this.CalOneDcNet == 1) ? "DC" : "DA";
        var OTHER_RATE2_NET_CAL = (this.CalTwoDcNet == 1) ? "DC" : "DA";
        var ISMIN = (this.isMinRate == true) ? "Y" : "N";
        var EXPTNO = this.exptno;
        var FRT_RATE_TAR_FRT = '', FSC_RATE_TAR_FRT = '', IRC_RATE_TAR_FRT = '', XRAY_RATE_TAR_FRT = '', MC_RATE_TAR_FRT = '', CTG_RATE_TAR_FRT = '', THC_RATE_TAR_FRT = '', BP_RATE_TAR_FRT = '', HAWB_RATE_TAR_FRT = '', PCA_RATE_TAR_FRT = '', OTHER_RATE_TAR_FRT = '', TRUCK_RATE_TAR_FRT = '', FRT_RATE_NET_FRT = '', FSC_RATE_NET_FRT = '', IRC_RATE_NET_FRT = '', XRAY_RATE_NET_FRT = '', MC_RATE_NET_FRT = '', CTG_RATE_NET_FRT = '', THC_RATE_NET_FRT = '', BP_RATE_NET_FRT = '', AMS_RATE_NET_FRT = '', HAWB_RATE_NET_FRT = '', PCA_RATE_NET_FRT = '', OTHER_RATE_NET_FRT = '', AMS_RATE_TAR_FRT = '', TRUCK_RATE_NET_FRT;
        var FRT_CHARGEABLE_AS_NET = '', FRT_PAYABLE_ON_NET = '', FRT_RATE_PER_KG_NET, FRT_RATE_NET, FSC_PAYABLE_ON_NET = '', FSC_RATE_PER_KG_NET, FSC_RATE_NET, IRC_PAYABLE_ON_NET = '', IRC_RATE_PER_KG_NET, IRC_RATE_NET, XRAY_PAYABLE_ON_NET = '', XRAY_RATE_PER_KG_NET, XRAY_RATE_NET, MC_PAYABLE_ON_NET = '', MC_RATE_PER_KG_NET, MC_RATE_NET, CTG_PAYABLE_ON_NET = '', CTG_RATE_PER_KG_NET, CTG_RATE_NET, DUE_CARRIER_NET, HAWB_NET, PCA_NET, DUE_AGENT_NET, TOTAL_NET, OTHER_CHRG_NET, AMS_RATE_NET, OTHER_RATE1_NET, OTHER_RATE2_NET, ISNETEDIT = '', SupplierNet = '', AIR_FRT_COMMISSION = '', FRT_REBATE, TDS, SERVICE_TAX, THC_PAYABLE_ON_NET = '', THC_RATE_PER_KG_NET, THC_RATE_NET, BUSINES_PROMO = '', BP_PAYABLE_ON_NET = '', BP_RATE_PER_KG_NET, BP_RATE_NET, TRUCK_PAYABLE_ON_NET = '', TRUCK_RATE_PER_KG_NET, TRUCK_RATE_NET;
        if (Math.abs(FRT_RATE_TAR) > 0)
            FRT_RATE_TAR_FRT = this.TarFreightFrt;
        if (Math.abs(FSC_RATE_TAR) > 0)
            FSC_RATE_TAR_FRT = this.TarFscFrt;
        if (Math.abs(IRC_RATE_TAR) > 0)
            IRC_RATE_TAR_FRT = this.TarIrcFrt;
        if (Math.abs(XRAY_RATE_TAR) > 0)
            XRAY_RATE_TAR_FRT = this.TarXrayFrt;
        if (Math.abs(MC_RATE_TAR) > 0)
            MC_RATE_TAR_FRT = this.TarMcFrt;
        if (Math.abs(CTG_RATE_TAR) > 0)
            CTG_RATE_TAR_FRT = this.TarCtgFrt;
        if (Math.abs(THC_RATE_TAR) > 0)
            THC_RATE_TAR_FRT = this.TarThcFrt;
        if (Math.abs(BP_RATE_TAR) > 0)
            BP_RATE_TAR_FRT = this.TarBPFrt;
        if (Math.abs(AMS_RATE_TAR) > 0)
            AMS_RATE_TAR_FRT = this.TarAmsFrt;
        if (Math.abs(HAWB_TAR) > 0)
            HAWB_RATE_TAR_FRT = this.HawbTarFrt;
        if (Math.abs(PCA_TAR) > 0)
            PCA_RATE_TAR_FRT = this.PcaTarFrt;
        if (Math.abs(OTHER_CHRG_TAR) > 0)
            OTHER_RATE_TAR_FRT = this.OtherTarFrt;
        var OTHER_RATE1_TAR_FRT = '', OTHER_RATE2_TAR_FRT = '', OTHER_RATE1_NET_FRT = '', OTHER_RATE2_NET_FRT = '', DUE_CARRIER_NET_CC = 0, DUE_AGENT_NET_CC = 0, TOTAL_NET_CC = 0;
        if (Math.abs(OTHER_RATE1_TAR) > 0)
            OTHER_RATE1_TAR_FRT = this.OtherAmt1TarFrt;
        if (Math.abs(OTHER_RATE2_TAR) > 0)
            OTHER_RATE2_TAR_FRT = this.OtherAmt2TarFrt;
        var DUE_CARRIER_TAR_CC = Math.abs(this.DurCarrierTarCC), DUE_AGENT_TAR_CC = Math.abs(this.DueAgentTarCC), TOTAL_TAR_CC = Math.abs(this.TotalTarCC);
        var TDS_ACCTCODE = '', SERVICETAX_ACCTCODE = '';
        if (this.hdNetRights == true) {
            ISNETEDIT = 'Y';
            TDS = Math.abs(this.TxtTDS);
            SERVICE_TAX = Math.abs(this.TxtServiceTax);
            TDS_ACCTCODE = this.DrpTDS;
            SERVICETAX_ACCTCODE = this.DrpServiceTax;
            if (Math.abs(TDS) > 0) {
                if (TDS_ACCTCODE == "0") {
                    alert("Please select TDS Account Name.");
                    return false;
                }
            }
            else {
                TDS_ACCTCODE = '';
            }
            if (Math.abs(SERVICE_TAX) > 0) {
                if (SERVICETAX_ACCTCODE == "0") {
                    alert("Please select Service Tax Account Name.");
                    return false;
                }
            }
            else {
                SERVICETAX_ACCTCODE = '';
            }
            if (this.SupplierNet == null || this.SupplierNet == "" || this.SupplierNet == undefined) {
                alert("Please select Supplier / Airline.");
                return false;
            }
            SupplierNet = this.SupplierNet;
            FRT_CHARGEABLE_AS_NET = (this.NetRate == 1) ? "AI" : "FS";
            FRT_PAYABLE_ON_NET = (this.NetFreightPayOn != null) ? this.NetFreightPayOn : "";
            FRT_RATE_PER_KG_NET = Math.abs(this.NetFreightRate);
            FRT_RATE_NET = Math.abs(this.NetFreight);
            FSC_PAYABLE_ON_NET = (this.NetFscPayOn != null) ? this.NetFscPayOn : "";
            FSC_RATE_PER_KG_NET = Math.abs(this.NetFscRate);
            FSC_RATE_NET = Math.abs(this.NetFsc);
            IRC_PAYABLE_ON_NET = (this.NetIrcPayOn != null) ? this.NetIrcPayOn : "";
            IRC_RATE_PER_KG_NET = Math.abs(this.NetIrcRate);
            IRC_RATE_NET = Math.abs(this.NetIrc);
            XRAY_PAYABLE_ON_NET = (this.NetXrayPayOn != null) ? this.NetXrayPayOn : "";
            XRAY_RATE_PER_KG_NET = Math.abs(this.NetXrayRate);
            XRAY_RATE_NET = Math.abs(this.NetXray);
            // if (FRT_CHARGEABLE_AS_NET == 'FS') {
            //     if (FSC_RATE_NET == 0) {
            //         alert("Please enter any one NET NET RATE - FSC");
            //         return false;
            //     }
            //        if (FSC_RATE_NET == 0 && IRC_RATE_NET == 0 && XRAY_RATE_NET == 0) {
            //            alert("Please enter any one NET NET RATE :[FSC] or [IRC] or [X-RAY]");
            //            return false;
            //        }
            // }
            MC_PAYABLE_ON_NET = (this.NetMcPayOn != null) ? this.NetMcPayOn : "";
            MC_RATE_PER_KG_NET = Math.abs(this.NetMcRate);
            MC_RATE_NET = Math.abs(this.NetMc);
            CTG_PAYABLE_ON_NET = (this.NetCtgPayOn != null || this.NetCtgPayOn != '') ? this.NetCtgPayOn : "";
            CTG_RATE_PER_KG_NET = (this.NetCtgRate != null || this.NetCtgRate != '') ? Math.abs(this.NetCtgRate) : "";
            CTG_RATE_NET = Math.abs(this.NetCtg);
            THC_PAYABLE_ON_NET = (this.NetThcPayOn != null) ? this.NetThcPayOn : "";
            THC_RATE_PER_KG_NET = Math.abs(this.NetThcRate);
            THC_RATE_NET = Math.abs(this.NetThc);
            BP_PAYABLE_ON_NET = (this.NetBPPayOn != null) ? this.NetBPPayOn : "";
            BP_RATE_PER_KG_NET = (this.NetBPRate != null || this.NetBPRate != '') ? Math.abs(this.NetBPRate) : "";
            BP_RATE_NET = Math.abs(this.NetBP);
            DUE_CARRIER_NET = (this.DurCarrierNet != null || this.DurCarrierNet != '') ? Math.abs(this.DurCarrierNet) : "";
            HAWB_NET = Math.abs(this.HawbNet);
            PCA_NET = Math.abs(this.PcaNet);
            DUE_AGENT_NET = (this.DueAgentNet != null || this.DueAgentNet != '') ? Math.abs(this.DueAgentNet) : "";
            TOTAL_NET = Math.abs(this.TotalNet);
            OTHER_CHRG_NET = Math.abs(this.OtherNet);
            AMS_RATE_NET = Math.abs(this.NetAms);
            OTHER_RATE1_NET = Math.abs(this.OtherAmt1_Net);
            OTHER_RATE2_NET = Math.abs(this.OtherAmt2_Net);
            AIR_FRT_COMMISSION = (this.AirFrtCommission != null) ? this.AirFrtCommission : "";
            FRT_REBATE = this.FrtRebate;
            BUSINES_PROMO = (this.BusinesPromo != null || this.BusinesPromo != '') ? this.BusinesPromo : "";
            TRUCK_PAYABLE_ON_NET = (this.NetTruckPayOn != null) ? this.NetTruckPayOn : "";
            TRUCK_RATE_PER_KG_NET = (this.NetTruckRate != null || this.NetTruckRate != '') ? Math.abs(this.NetTruckRate) : "";
            TRUCK_RATE_NET = Math.abs(this.NetTruck);
            if (Math.abs(FRT_RATE_NET) > 0)
                FRT_RATE_NET_FRT = this.NetFreightFrt;
            if (Math.abs(FSC_RATE_NET) > 0)
                FSC_RATE_NET_FRT = this.NetFscFrt;
            if (Math.abs(IRC_RATE_NET) > 0)
                IRC_RATE_NET_FRT = this.NetIrcFrt;
            if (Math.abs(XRAY_RATE_NET) > 0)
                XRAY_RATE_NET_FRT = this.NetXrayFrt;
            if (Math.abs(MC_RATE_NET) > 0)
                MC_RATE_NET_FRT = this.NetMcFrt;
            if (Math.abs(CTG_RATE_NET) > 0)
                CTG_RATE_NET_FRT = this.NetCtgFrt;
            if (Math.abs(THC_RATE_NET) > 0)
                THC_RATE_NET_FRT = this.NetThcFrt;
            if (Math.abs(BP_RATE_NET) > 0)
                BP_RATE_NET_FRT = this.NetBPFrt;
            if (Math.abs(AMS_RATE_NET) > 0)
                AMS_RATE_NET_FRT = this.NetAmsFrt;
            if (Math.abs(HAWB_NET) > 0)
                HAWB_RATE_NET_FRT = this.HawbNetFrt;
            if (Math.abs(PCA_NET) > 0)
                PCA_RATE_NET_FRT = this.PcaNetFrt;
            if (Math.abs(OTHER_CHRG_NET) > 0)
                OTHER_RATE_NET_FRT = this.OtherNetFrt;
            if (Math.abs(OTHER_RATE1_NET) > 0)
                OTHER_RATE1_NET_FRT = this.OtherAmt1NetFrt;
            if (Math.abs(OTHER_RATE2_NET) > 0)
                OTHER_RATE2_NET_FRT = this.OtherAmt2NetFrt;
            if (Math.abs(TRUCK_RATE_NET) > 0)
                TRUCK_RATE_NET_FRT = this.NetTruckFrt;
            DUE_CARRIER_NET_CC = Math.abs(this.DurCarrierNetCC);
            DUE_AGENT_NET_CC = Math.abs(this.DueAgentNetCC);
            TOTAL_NET_CC = Math.abs(this.TotalNetCC);
        }
        else {
            var ISNETEDIT_1 = 'N', SupplierNet_1 = '', FRT_CHARGEABLE_AS_NET_1 = "AI", FRT_PAYABLE_ON_NET_1 = '0', FRT_RATE_PER_KG_NET_1 = '0', FRT_RATE_NET_1 = '0', FSC_PAYABLE_ON_NET_1 = '0', FSC_RATE_PER_KG_NET_1 = '0', FSC_RATE_NET_1 = '0', IRC_PAYABLE_ON_NET_1 = '0', IRC_RATE_PER_KG_NET_1 = '0', IRC_RATE_NET_1 = '0', XRAY_PAYABLE_ON_NET_1 = '0', XRAY_RATE_PER_KG_NET_1 = '0', XRAY_RATE_NET_1 = '0', MC_PAYABLE_ON_NET_1 = '0', MC_RATE_PER_KG_NET_1 = '0', MC_RATE_NET_1 = '0', CTG_PAYABLE_ON_NET_1 = '0', CTG_RATE_PER_KG_NET_1 = '0', CTG_RATE_NET_1 = '0', THC_PAYABLE_ON_NET_1 = '0', THC_RATE_PER_KG_NET_1 = '0', THC_RATE_NET_1 = '0', BP_PAYABLE_ON_NET_1 = '0', BP_RATE_PER_KG_NET_1 = '0', BP_RATE_NET_1 = '0', Truck_PAYABLE_ON_NET = '0', Truck_RATE_PER_KG_NET = '0', Truck_RATE_NET = '0', DUE_CARRIER_NET_1 = '0', HAWB_NET_1 = '0', PCA_NET_1 = '0', DUE_AGENT_NET_1 = '0', TOTAL_NET_1 = '0', OTHER_CHRG_NET_1 = '0', AMS_RATE_NET_1 = '0', OTHER_RATE1_NET_1 = '0', OTHER_RATE2_NET_1 = '0', AIR_FRT_COMMISSION_1 = '', FRT_REBATE_1 = '', BUSINES_PROMO_1 = '', TDS_1 = '', SERVICE_TAX_1 = '';
            FRT_RATE_NET_FRT = '';
            FSC_RATE_NET_FRT = '';
            IRC_RATE_NET_FRT = '';
            XRAY_RATE_NET_FRT = '';
            MC_RATE_NET_FRT = '';
            CTG_RATE_NET_FRT = '';
            THC_RATE_NET_FRT = '';
            BP_RATE_NET_FRT = '';
            AMS_RATE_NET_FRT = '';
            HAWB_RATE_NET_FRT = '';
            PCA_RATE_NET_FRT = '';
            OTHER_RATE_NET_FRT = '';
            OTHER_RATE1_NET_FRT = '';
            OTHER_RATE2_NET_FRT = '';
            DUE_CARRIER_NET_CC = 0;
            DUE_AGENT_NET_CC = 0;
            TOTAL_NET_CC = 0;
            TDS_ACCTCODE = '';
            SERVICETAX_ACCTCODE = '';
        }
        var _jsonData = {
            EXPTNO: EXPTNO,
            MAWBNO: MAWBNO,
            CITYCODE: CITYCODE,
            CHBL_WGT: CHBL_WGT,
            GROSS_WGT: GROSS_WGT,
            CHBL_WGT_USER: CHBL_WGT_USER,
            GROSS_WGT_USER: GROSS_WGT_USER,
            FREIGHT: FREIGHT,
            FRT_CHARGEABLE_AS_TAR: FRT_CHARGEABLE_AS_TAR,
            FRT_CHARGEABLE_AS_NET: FRT_CHARGEABLE_AS_NET,
            FRT_PAYABLE_ON_TAR: FRT_PAYABLE_ON_TAR,
            FRT_RATE_PER_KG_TAR: FRT_RATE_PER_KG_TAR,
            FRT_RATE_TAR: FRT_RATE_TAR,
            FRT_PAYABLE_ON_NET: FRT_PAYABLE_ON_NET,
            FRT_RATE_PER_KG_NET: FRT_RATE_PER_KG_NET,
            FRT_RATE_NET: FRT_RATE_NET,
            FSC_PAYABLE_ON_TAR: FSC_PAYABLE_ON_TAR,
            FSC_RATE_PER_KG_TAR: FSC_RATE_PER_KG_TAR,
            FSC_RATE_TAR: FSC_RATE_TAR,
            FSC_PAYABLE_ON_NET: FSC_PAYABLE_ON_NET,
            FSC_RATE_PER_KG_NET: FSC_RATE_PER_KG_NET,
            FSC_RATE_NET: FSC_RATE_NET,
            IRC_PAYABLE_ON_TAR: IRC_PAYABLE_ON_TAR,
            IRC_RATE_PER_KG_TAR: IRC_RATE_PER_KG_TAR,
            IRC_RATE_TAR: IRC_RATE_TAR,
            IRC_PAYABLE_ON_NET: IRC_PAYABLE_ON_NET,
            IRC_RATE_PER_KG_NET: IRC_RATE_PER_KG_NET,
            IRC_RATE_NET: IRC_RATE_NET,
            XRAY_PAYABLE_ON_TAR: XRAY_PAYABLE_ON_TAR,
            XRAY_RATE_PER_KG_TAR: XRAY_RATE_PER_KG_TAR,
            XRAY_RATE_TAR: XRAY_RATE_TAR,
            XRAY_PAYABLE_ON_NET: XRAY_PAYABLE_ON_NET,
            XRAY_RATE_PER_KG_NET: XRAY_RATE_PER_KG_NET,
            XRAY_RATE_NET: XRAY_RATE_NET,
            MC_PAYABLE_ON_TAR: MC_PAYABLE_ON_TAR,
            MC_RATE_PER_KG_TAR: MC_RATE_PER_KG_TAR,
            MC_RATE_TAR: MC_RATE_TAR,
            MC_PAYABLE_ON_NET: MC_PAYABLE_ON_NET,
            MC_RATE_PER_KG_NET: MC_RATE_PER_KG_NET,
            MC_RATE_NET: MC_RATE_NET,
            CTG_PAYABLE_ON_TAR: CTG_PAYABLE_ON_TAR,
            CTG_RATE_PER_KG_TAR: CTG_RATE_PER_KG_TAR,
            CTG_RATE_TAR: CTG_RATE_TAR,
            CTG_PAYABLE_ON_NET: CTG_PAYABLE_ON_NET,
            CTG_RATE_PER_KG_NET: CTG_RATE_PER_KG_NET,
            CTG_RATE_NET: CTG_RATE_NET,
            DUE_CARRIER_TAR: DUE_CARRIER_TAR,
            DUE_CARRIER_NET: DUE_CARRIER_NET,
            HAWB_TAR: HAWB_TAR,
            HAWB_NET: HAWB_NET,
            PCA_TAR: PCA_TAR,
            PCA_NET: PCA_NET,
            DUE_AGENT_TAR: DUE_AGENT_TAR,
            DUE_AGENT_NET: DUE_AGENT_NET,
            TOTAL_TAR: TOTAL_TAR,
            TOTAL_NET: TOTAL_NET,
            OTHER_CHRG_TAR: OTHER_CHRG_TAR,
            OTHER_CHRG_NET: OTHER_CHRG_NET,
            REMARK: REMARK,
            AMS_RATE_TAR: AMS_RATE_TAR,
            AMS_RATE_NET: AMS_RATE_NET,
            OTHER_NAME1: OTHER_NAME1,
            OTHER_NAME2: OTHER_NAME2,
            OTHER_RATE1_TAR: OTHER_RATE1_TAR,
            OTHER_RATE2_TAR: OTHER_RATE2_TAR,
            OTHER_RATE1_NET: OTHER_RATE1_NET,
            OTHER_RATE2_NET: OTHER_RATE2_NET,
            OTHER_RATE1_TAR_CAL: OTHER_RATE1_TAR_CAL,
            OTHER_RATE2_TAR_CAL: OTHER_RATE2_TAR_CAL,
            OTHER_RATE1_NET_CAL: OTHER_RATE1_NET_CAL,
            OTHER_RATE2_NET_CAL: OTHER_RATE2_NET_CAL,
            ISNETEDIT: ISNETEDIT,
            ISMIN: ISMIN,
            SUPPLIER_NET: SupplierNet,
            AIR_FRT_COMM_NET: AIR_FRT_COMMISSION,
            FRT_REBATE_NET: FRT_REBATE,
            TDS_NET: TDS,
            SERVICE_TAX_NET: SERVICE_TAX,
            FRT_RATE_TAR_FRT: FRT_RATE_TAR_FRT,
            FSC_RATE_TAR_FRT: FSC_RATE_TAR_FRT,
            IRC_RATE_TAR_FRT: IRC_RATE_TAR_FRT,
            XRAY_RATE_TAR_FRT: XRAY_RATE_TAR_FRT,
            MC_RATE_TAR_FRT: MC_RATE_TAR_FRT,
            CTG_RATE_TAR_FRT: CTG_RATE_TAR_FRT,
            AMS_RATE_TAR_FRT: AMS_RATE_TAR_FRT,
            HAWB_RATE_TAR_FRT: HAWB_RATE_TAR_FRT,
            PCA_RATE_TAR_FRT: PCA_RATE_TAR_FRT,
            OTHER_RATE_TAR_FRT: OTHER_RATE_TAR_FRT,
            FRT_RATE_NET_FRT: FRT_RATE_NET_FRT,
            FSC_RATE_NET_FRT: FSC_RATE_NET_FRT,
            IRC_RATE_NET_FRT: IRC_RATE_NET_FRT,
            XRAY_RATE_NET_FRT: XRAY_RATE_NET_FRT,
            MC_RATE_NET_FRT: MC_RATE_NET_FRT,
            CTG_RATE_NET_FRT: CTG_RATE_NET_FRT,
            AMS_RATE_NET_FRT: AMS_RATE_NET_FRT,
            HAWB_RATE_NET_FRT: HAWB_RATE_NET_FRT,
            PCA_RATE_NET_FRT: PCA_RATE_NET_FRT,
            OTHER_RATE_NET_FRT: OTHER_RATE_NET_FRT,
            OTHER_RATE1_TAR_FRT: OTHER_RATE1_TAR_FRT,
            OTHER_RATE2_TAR_FRT: OTHER_RATE2_TAR_FRT,
            DUE_CARRIER_TAR_CC: DUE_CARRIER_TAR_CC,
            DUE_AGENT_TAR_CC: DUE_AGENT_TAR_CC,
            TOTAL_TAR_CC: TOTAL_TAR_CC,
            OTHER_RATE1_NET_FRT: OTHER_RATE1_NET_FRT,
            OTHER_RATE2_NET_FRT: OTHER_RATE2_NET_FRT,
            DUE_CARRIER_NET_CC: DUE_CARRIER_NET_CC,
            DUE_AGENT_NET_CC: DUE_AGENT_NET_CC,
            TOTAL_NET_CC: TOTAL_NET_CC,
            TDS_ACCTCODE: TDS_ACCTCODE,
            SERVICETAX_ACCTCODE: SERVICETAX_ACCTCODE,
            AGENTS_RATE: AGENTS_RATE,
            THC_PAYABLE_ON_TAR: THC_PAYABLE_ON_TAR,
            THC_RATE_PER_KG_TAR: THC_RATE_PER_KG_TAR,
            THC_RATE_TAR: THC_RATE_TAR,
            THC_PAYABLE_ON_NET: THC_PAYABLE_ON_NET,
            THC_RATE_PER_KG_NET: THC_RATE_PER_KG_NET,
            THC_RATE_NET: THC_RATE_NET,
            THC_RATE_TAR_FRT: THC_RATE_TAR_FRT,
            THC_RATE_NET_FRT: THC_RATE_NET_FRT,
            BUSINES_PROMO_NET: BUSINES_PROMO,
            BP_PAYABLE_ON_TAR: BP_PAYABLE_ON_TAR,
            BP_RATE_PER_KG_TAR: BP_RATE_PER_KG_TAR,
            BP_RATE_TAR: BP_RATE_TAR,
            BP_PAYABLE_ON_NET: BP_PAYABLE_ON_NET,
            BP_RATE_PER_KG_NET: BP_RATE_PER_KG_NET,
            BP_RATE_NET: BP_RATE_NET,
            BP_RATE_TAR_FRT: BP_RATE_TAR_FRT,
            BP_RATE_NET_FRT: BP_RATE_NET_FRT,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            MakerIp: this._loginService.getLogin()[0].MAKERIP,
            DEST_TRUCKING_PAYABLE_ON_TAR: Truck_PAYABLE_ON_TAR,
            DEST_TRUCKING_RATE_PER_KG_TAR: Truck_RATE_PER_KG_TAR,
            DEST_TRUCKING_RATE_TAR: Truck_RATE_TAR,
            DEST_TRUCKING_PAYABLE_ON_NET: TRUCK_PAYABLE_ON_NET,
            DEST_TRUCKING_RATE_PER_KG_NET: TRUCK_RATE_PER_KG_NET,
            DEST_TRUCKING_RATE_NET: TRUCK_RATE_NET,
            DEST_TRUCKING_RATE_TAR_FRT: TRUCK_RATE_TAR_FRT,
            DEST_TRUCKING_RATE_NET_FRT: TRUCK_RATE_NET_FRT,
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._loaderService.display(true);
        //  this.saveMAWBALChargesdetails("30521","15778704102")
        this._dataService.Common("Export/EXP_MST_EXPORT_MAWB_PP_CC_UPDATE", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split('#')[0] == '100') {
                _this._toasterService.toast('success', 'Alert', data.Table[0].STATUS.split('#')[1]);
                ///  this.saveMAWBALChargesdetails("30521","15778704102")
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'error', data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    MAWBTarifratingcomponent.prototype.validate = function () {
        if (this.ISAUTO_FRT_INV == "1") {
            alert("MAWB rate can not be Modified, Because Automatic Freight Invoice already Generated For This MAWB !!");
            return false;
        }
        else {
            this.fn_MAWB_IU();
        }
    };
    MAWBTarifratingcomponent.prototype.AddMAWBALCharges = function () {
        var _this = this;
        if (this.CHARGETYPE == '' || this.CHARGETYPE == undefined) {
            alert("Please select Charge Type.");
            return false;
        }
        if (this.CHARGENAME == '' || this.CHARGENAME == undefined) {
            alert("Please select Charge. ");
            return false;
        }
        if (this.RATE_TAR == null) {
            alert("Please enter Tariff Rate. ");
            return false;
        }
        if (this.RATE_TAR_FRT == '') {
            alert("Please enter Tariff Rate Freight. ");
            return false;
        }
        if (this.PK_ID == "0") {
            if (this.Chargeslist.length > "0") {
                var chrgnm = [];
                chrgnm = this.Chargeslist.filter(function (code) { return code.FK_CHARGEID === parseInt(_this.CHARGENAME.split("|")[0]); });
                if (chrgnm.length > "0") {
                    this._toasterService.toast('warning', 'warning', 'Same Charge already Exists!');
                    return false;
                }
            }
        }
        var jsonchild = { PK_ID: this.PK_ID,
            FKID: this.FK_ID,
            CHRGDETAILSID: this.CHRGDETAILSID,
            MAWBNO: this._sharedconsig.exportEditData.MAWBNO,
            FK_CHARGEID: this.CHARGENAME.split("|")[0],
            CHARGETYPE: this.CHARGETYPE,
            RATE_TAR: this.RATE_TAR,
            RATE_TAR_FRT: this.RATE_TAR_FRT,
            RATE_NET: this.RATE_NET,
            RATE_NET_FRT: this.RATE_NET_FRT,
            MAKERID: this._loginService.getLogin()[0].CMPID,
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._dataService.Common("Export/EXPT_MAWB_PRINT_RATE_AIRLINE_CHARGES_TMPIU", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Chargeslist = data.Table1;
                _this.dttable6 = data.Table6;
                if (_this.EDIT_CHARGETYPE != undefined) {
                    _this.fn_CalculateAlCharges_Tar(data.Table6);
                }
                else {
                    _this.fn_CalculateAlCharges_Add(data.Table6);
                }
                //this.fn_CalculateAlCharges_Net(data.Table6)
                _this.tot_rate_tar_pp_da = data.Table2[0].RATE_TAR_TOTAL_PP_DA;
                _this.tot_rate_net_pp_da = data.Table2[0].RATE_NET_TOTAL_PP_DA;
                _this.tot_rate_tar_cc_da = data.Table3[0].RATE_TAR_TOTAL_CC_DA;
                _this.tot_rate_net_cc_da = data.Table3[0].RATE_NET_TOTAL_CC_DA;
                _this.tot_rate_tar_pp_dc = data.Table4[0].RATE_TAR_TOTAL_PP_DC;
                _this.tot_rate_net_pp_dc = data.Table4[0].RATE_NET_TOTAL_PP_DC;
                _this.tot_rate_tar_cc_dc = data.Table5[0].RATE_TAR_TOTAL_CC_DC;
                _this.tot_rate_net_cc_dc = data.Table5[0].RATE_NET_TOTAL_CC_DC;
                _this.Resetchildrcrd();
                //    this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                // this.loaderService.display(false);
            }
        });
    };
    MAWBTarifratingcomponent.prototype.ResetMAWBCharges = function () {
        this.CHARGETYPE = "";
        this.CHARGENAME = "";
        this.RATE_TAR = "";
        //  this.RATE_TAR_FRT=""
        this.RATE_NET = "";
        //this.RATE_NET_FRT=""
    };
    MAWBTarifratingcomponent.prototype.fn_CalculateAlCharges_Add = function (dtbl) {
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'PP') {
            this.DueAgentNet = Math.abs(this.DueAgentNet) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
            this.DueAgentTar = Math.abs(this.DueAgentTar) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR);
        }
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'CC') {
            this.DueAgentNetCC = Math.abs(this.DueAgentNetCC) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
            this.DueAgentTarCC = Math.abs(this.DueAgentTarCC) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR);
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'PP') {
            this.DurCarrierNet = Math.abs(this.DurCarrierNet) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
            this.DurCarrierTar = Math.abs(this.DurCarrierTar) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR);
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'CC') {
            this.DurCarrierNetCC = Math.abs(this.DurCarrierNetCC) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
            this.DurCarrierTarCC = Math.abs(this.DurCarrierTarCC) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR);
        }
    };
    MAWBTarifratingcomponent.prototype.fn_CalculateAlCharges_Net = function (dtbl) {
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'PP') {
            this.DueAgentNet = (Math.abs(this.DueAgentNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
        }
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'CC') {
            this.DueAgentNetCC = (Math.abs(this.DueAgentNetCC) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'PP') {
            this.DurCarrierNet = (Math.abs(this.DurCarrierNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'CC') {
            this.DurCarrierNetCC = Math.abs(this.DurCarrierNetCC) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
        }
    };
    MAWBTarifratingcomponent.prototype.fn_CalculateAlCharges_Tar = function (dtbl) {
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'PP' && this.EDIT_CHARGETYPE == 'DA') {
            this.DueAgentTar = (Math.abs(this.DueAgentTar) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.DueAgentNet = (Math.abs(this.DueAgentNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
        }
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'CC' && this.EDIT_CHARGETYPE == 'DA') {
            this.DueAgentTarCC = (Math.abs(this.DueAgentTarCC) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.DueAgentNetCC = (Math.abs(this.DueAgentNetCC) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
        }
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'CC' && this.EDIT_CHARGETYPE == 'DC') {
            this.DurCarrierTarCC = (Math.abs(this.DurCarrierTarCC) - Math.abs(this.EDIT_RATE_TAR));
            this.DurCarrierNetCC = (Math.abs(this.DurCarrierNetCC) - Math.abs(this.EDIT_RATE_TAR));
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_NET));
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET));
            this.DueAgentNetCC = Math.abs(this.DueAgentNetCC) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
            this.DueAgentTarCC = Math.abs(this.DueAgentTarCC) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR);
        }
        if (dtbl[0].CHARGETYPE == 'DA' && dtbl[0].RATE_TAR_FRT == 'PP' && this.EDIT_CHARGETYPE == 'DC') {
            this.DueAgentTar = Math.abs(this.DueAgentTar) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR);
            this.DueAgentNet = Math.abs(this.DueAgentNet) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET);
            this.DurCarrierTarCC = (Math.abs(this.DurCarrierTarCC) - Math.abs(this.EDIT_RATE_TAR));
            this.DurCarrierNetCC = (Math.abs(this.DurCarrierNetCC) - Math.abs(this.EDIT_RATE_NET));
            this.TotalTar = (Math.abs(this.TotalTar) + Math.abs(this.EDIT_RATE_TAR));
            this.TotalNet = (Math.abs(this.TotalNet) + Math.abs(this.EDIT_RATE_NET));
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'PP' && this.EDIT_CHARGETYPE == 'DC') {
            this.DurCarrierTar = (Math.abs(this.DurCarrierTar) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.DurCarrierNet = (Math.abs(this.DurCarrierNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET)) + Math.abs(dtbl[0].RATE_NET);
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'CC' && this.EDIT_CHARGETYPE == 'DC') {
            this.DurCarrierTarCC = (Math.abs(this.DurCarrierTarCC) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.DurCarrierNetCC = (Math.abs(this.DurCarrierNetCC) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_TAR)) + Math.abs(dtbl[0].RATE_TAR);
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'CC' && this.EDIT_CHARGETYPE == 'DA') {
            this.DueAgentNetCC = (Math.abs(this.DueAgentNetCC) - Math.abs(this.EDIT_RATE_NET));
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET));
            this.DueAgentTarCC = (Math.abs(this.DueAgentTarCC) - Math.abs(this.EDIT_RATE_TAR));
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_TAR));
            this.DurCarrierTarCC = (Math.abs(this.DurCarrierTarCC) + Math.abs(dtbl[0].RATE_TAR));
            this.DurCarrierNetCC = (Math.abs(this.DurCarrierNetCC) + Math.abs(dtbl[0].RATE_NET));
            this.TotalTar = (Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR));
            this.TotalNet = (Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET));
        }
        if (dtbl[0].CHARGETYPE == 'DC' && dtbl[0].RATE_TAR_FRT == 'PP' && this.EDIT_CHARGETYPE == 'DA') {
            this.DueAgentNet = (Math.abs(this.DueAgentNet) - Math.abs(this.EDIT_RATE_NET));
            this.TotalNet = (Math.abs(this.TotalNet) - Math.abs(this.EDIT_RATE_NET));
            this.DueAgentTar = (Math.abs(this.DueAgentTar) - Math.abs(this.EDIT_RATE_TAR));
            this.TotalTar = (Math.abs(this.TotalTar) - Math.abs(this.EDIT_RATE_TAR));
            this.DurCarrierTar = (Math.abs(this.DurCarrierTar) + Math.abs(dtbl[0].RATE_TAR));
            this.DurCarrierNet = (Math.abs(this.DurCarrierNet) + Math.abs(dtbl[0].RATE_NET));
            this.TotalTar = (Math.abs(this.TotalTar) + Math.abs(dtbl[0].RATE_TAR));
            this.TotalNet = (Math.abs(this.TotalNet) + Math.abs(dtbl[0].RATE_NET));
        }
    };
    MAWBTarifratingcomponent.prototype.Resetchildrcrd = function () {
        this.CHARGETYPE = undefined;
        this.CHARGENAME = "";
        this.RATE_TAR = "";
        this.RATE_TAR_FRT = "";
        this.RATE_NET = "";
        this.RATE_NET_FRT = "";
        this.txtchild = "Add";
        this.CHRGDETAILSID = "0";
        this.PK_ID = "0";
        this.FK_ID = "0";
        this.EDIT_CHARGETYPE = undefined;
    };
    MAWBTarifratingcomponent.prototype.Resetchildrcrdpageload = function () {
        this.CHARGETYPE = undefined;
        this.CHARGENAME = "";
        this.RATE_TAR = "";
        this.RATE_NET = "";
        this.txtchild = "Add";
        this.CHRGDETAILSID = "0";
        this.PK_ID = "0";
        this.FK_ID = "0";
        this.EDIT_CHARGETYPE = undefined;
    };
    MAWBTarifratingcomponent.prototype.Editchildrecd = function (id) {
        var _this = this;
        var filterData = this.Chargeslist.filter(function (filter) { return filter.PK_ID == id; })[0];
        //this.fk=filterData.ID;
        this.PK_ID = filterData.PK_ID,
            this.FK_ID = filterData.FK_ID,
            this.CHARGETYPE = filterData.CHARGETYPE;
        this.CHRGDETAILSID = filterData.FK_CHRGDETAILSID;
        this.AirLineCharges = this.AllAirLineChargeslist.filter(function (code) { return code.DataValueField.split("|")[1] === _this.CHARGETYPE; });
        this.CHARGENAME = filterData.FK_CHARGEID + '|' + filterData.CHARGETYPE;
        this.RATE_TAR = filterData.RATE_TAR;
        this.RATE_TAR_FRT = filterData.RATE_TAR_FRT;
        this.RATE_NET = filterData.RATE_NET;
        this.RATE_NET_FRT = filterData.RATE_NET_FRT;
        this.EDIT_RATE_TAR = filterData.RATE_TAR;
        this.EDIT_RATE_NET = filterData.RATE_NET;
        this.EDIT_CHARGETYPE = filterData.CHARGETYPE;
        this.txtchild = "Update";
    };
    MAWBTarifratingcomponent.prototype.deletechildrecd = function (id, chrgdtlsid) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this._loaderService.display(true);
            var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, FK_CHRGDTLSID: chrgdtlsid };
            this._dataService.getData("Export/EXPT_MAWB_PRINT_RATE_AIRLINE_CHARGES_TMP_DEL", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.Chargeslist = data.Table;
                    _this.DELCHARGETYPE = data.Table1[0].CHARGETYPE;
                    _this.DEL_RATE_TAR = data.Table1[0].RATE_TAR;
                    _this.DEL_RATE_TAR_FRT = data.Table1[0].RATE_TAR_FRT;
                    _this.DEL_RATE_NET = data.Table1[0].RATE_NET;
                    _this.DEL_RATE_NET_FRT = data.Table1[0].RATE_NET_FRT;
                    if (_this.DELCHARGETYPE == 'DA' && _this.DEL_RATE_TAR_FRT == 'PP') {
                        _this.DueAgentTar = (Math.abs(_this.DueAgentTar) - Math.abs(_this.DEL_RATE_TAR));
                        _this.DueAgentNet = (Math.abs(_this.DueAgentNet) - Math.abs(_this.DEL_RATE_NET));
                        _this.TotalTar = (Math.abs(_this.TotalTar) - Math.abs(_this.DEL_RATE_TAR));
                        _this.TotalNet = (Math.abs(_this.TotalNet) - Math.abs(_this.DEL_RATE_NET));
                    }
                    if (_this.DELCHARGETYPE == 'DA' && _this.DEL_RATE_TAR_FRT == 'CC') {
                        _this.DueAgentTarCC = (Math.abs(_this.DueAgentTarCC) - Math.abs(_this.DEL_RATE_TAR));
                        _this.DueAgentNetCC = (Math.abs(_this.DueAgentNetCC) - Math.abs(_this.DEL_RATE_NET));
                        _this.TotalTar = (Math.abs(_this.TotalTar) - Math.abs(_this.DEL_RATE_TAR));
                        _this.TotalNet = (Math.abs(_this.TotalNet) - Math.abs(_this.DEL_RATE_NET));
                    }
                    if (_this.DELCHARGETYPE == 'DC' && _this.DEL_RATE_TAR_FRT == 'PP') {
                        _this.DurCarrierTar = (Math.abs(_this.DurCarrierTar) - Math.abs(_this.DEL_RATE_TAR));
                        _this.DurCarrierNet = (Math.abs(_this.DurCarrierNet) - Math.abs(_this.DEL_RATE_NET));
                        _this.TotalTar = (Math.abs(_this.TotalTar) - Math.abs(_this.DEL_RATE_TAR));
                        _this.TotalNet = (Math.abs(_this.TotalNet) - Math.abs(_this.DEL_RATE_NET));
                    }
                    if (_this.DELCHARGETYPE == 'DC' && _this.DEL_RATE_TAR_FRT == 'CC') {
                        _this.DurCarrierTarCC = (Math.abs(_this.DurCarrierTarCC) - Math.abs(_this.DEL_RATE_TAR));
                        _this.DurCarrierNetCC = (Math.abs(_this.DurCarrierNetCC) - Math.abs(_this.DEL_RATE_NET));
                        _this.TotalTar = (Math.abs(_this.TotalTar) - Math.abs(_this.DEL_RATE_TAR));
                        _this.TotalNet = (Math.abs(_this.TotalNet) - Math.abs(_this.DEL_RATE_NET));
                    }
                    _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this._loaderService.display(false);
                }
            });
        }
        else {
            return false;
            this._loaderService.display(false);
        }
    };
    MAWBTarifratingcomponent.prototype.GetChrges = function (chrgtype) {
        this.AirLineCharges = this.AllAirLineChargeslist.filter(function (code) { return code.DataValueField.split("|")[1] === chrgtype; });
    };
    MAWBTarifratingcomponent.prototype.changeNetRate = function (rate1) {
        this.RATE_NET = rate1;
    };
    MAWBTarifratingcomponent.prototype.changeNetFreight = function (frt1) {
        this.RATE_NET_FRT = frt1;
    };
    MAWBTarifratingcomponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataSerice"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MAWBTarifratingcomponent.prototype, "exptno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MAWBTarifratingcomponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MAWBTarifratingcomponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MAWBTarifratingcomponent.prototype, "disabledBtn", void 0);
    MAWBTarifratingcomponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-MAWB_tariffRate',
            template: "\n    <table class=\"table table-bordered table-sm-new\">\n    <tbody>\n       <tr>\n          <td class=\"width220\" colspan=\"3\"><span class=\"col-form-span-label\"></span></td>\n          <td class=\"width300\" colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>Existing</u></strong></span></td>\n          <td class=\"width300\" colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>New</u></strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>Chargable Weight</strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Wgt}}</span></td>\n          <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"UserWgt\" class=\"form-control width100\" (change)=\"changeUserWeight()\"  /></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>Gross Weight</strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{GrossWeight}}</span></td>\n          <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"UserGrossWeight\" class=\"form-control width100\" (change)=\"changeUserWeight()\"   /></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"></span></td>\n          <td colspan=\"6\"><span class=\"col-form-span-label\"><input type=\"checkbox\" [(ngModel)]=\"isMinRate\" [disabled]=\"true\" />Print as MIN Rate Charges</span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>Freight INR/Kg </strong></span></td>\n          <td colspan=\"6\">\n             <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'Prepaid'},{VALUEFIELD: 'CC', TEXTFIELD: 'Collect'}]\"\n                        bindLabel=\"TEXTFIELD\"\n                        bindValue=\"VALUEFIELD\"\n                        [(ngModel)]=\"FreightRate\"\n                        class=\"form-control width100\"\n                        (change)=\"changeFreight(FreightRate)\"\n                        [disabled]=\"true\"\n                        >\n             </ng-select> -->\n             <select class=\"form-control width100\" [(ngModel)]=\"FreightRate\"  (change)=\"changeFreight(FreightRate)\" [disabled]=\"true\">\n                 <option value=\"\">--Select--</option>\n                 <option value=\"PP\">Prepaid</option>\n                 <option value=\"CC\">Collect</option>\n         </select>\n          </td>\n       </tr>\n\n       <tr class=\"col-form-span-heading\">\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>FREIGHT </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>TARIFF RATE </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>NET NET RATE </strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>Supplier </strong></span></td>\n\n          <td colspan=\"6\">\n             <!-- <ng-select [items]=\"netData\"\n                        bindLabel=\"DataTextField\"\n                        bindValue=\"DataValueField\"\n                        [(ngModel)]=\"SupplierNet\"\n                        class=\"form-control\"\n                        >\n             </ng-select> -->\n             <select class=\"form-control \" [(ngModel)]=\"SupplierNet\">\n                 <option value=\"\">--select--</option>\n                  <option *ngFor=\"let d of netData\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n             </select>\n         </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>Freight Chargeble As </strong></span></td>\n          <td colspan=\"3\">\n             <span class=\"col-form-span-label\">\n                 <input type=\"radio\" name=\"TarFreightType\" [checked]=\"TariffRate == 1\" (click)=\"tarCheck(1)\"/>All Inclusive&nbsp;\n                 <input type=\"radio\" name=\"TarFreightType\" [checked]=\"TariffRate == 2\" (click)=\"tarCheck(2)\"/>Freight + Surcharge\n             </span>\n         </td>\n         <td colspan=\"3\">\n             <span class=\"col-form-span-label\">\n                 <input type=\"radio\"  name=\"NetFreightType\" [checked]=\"NetRate == 1\" (click)=\"netCheck(1)\"/>All Inclusive&nbsp;\n                 <input type=\"radio\"  name=\"NetFreightType\" [checked]=\"NetRate == 2\" (click)=\"netCheck(2)\"/>Freight + Surcharge\n             </span>\n         </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>DESCRIPTION</u></strong></span></td>\n          <td colspan=\"3\">\n             <span class=\"col-form-span-label\" *ngIf=\"FreightRate == 'PP' || FreightRate == null\"><strong><u>Payable On / Rate / Prepaid</u></strong></span>\n             <span class=\"col-form-span-label\" *ngIf=\"FreightRate == 'CC'\"><strong><u>Payable On / Rate / Collect</u></strong></span>\n          </td>\n          <td colspan=\"3\">\n             <span class=\"col-form-span-label\" *ngIf=\"FreightRate == 'PP' || FreightRate == null\"><strong><u>Payable On / Rate / Prepaid</u></strong></span>\n             <span class=\"col-form-span-label\" *ngIf=\"FreightRate == 'CC'\"><strong><u>Payable On / Rate / Collect</u></strong></span>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(1) FREIGHT (BASIC) </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"TarFreightPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarFreightPayOn\" [disabled]=\"true\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                         </select>\n\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarFreightRate\" class=\"form-control\" (change)=\"selectionChange($event)\" (change)=\"changeTariffRates('Freight');changeNetRates('Freight')\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarFreight\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarFreightFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnChangeFreight_PP_CC_TAR()\"\n                                     >\n                         </ng-select> -->\n\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarFreightFrt\" (change)=\"fnChangeFreight_PP_CC_TAR()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"NetFreightPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetFreightPayOn\" [disabled]=\"true\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetFreightRate\" class=\"form-control\" (change)=\"changeNetRates('Freight')\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetFreight\" class=\"form-control\"  [disabled]=\"UserWgt > 151\"/></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetFreightFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnChangeFreight_PP_CC_NET()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width80\" [(ngModel)]=\"NetFreightFrt\" (change)=\"fnChangeFreight_PP_CC_NET()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td class=\"col-form-span-heading\" colspan=\"9\"><span class=\"col-form-span-label\"><strong>FREIGHT (SURCHARGE)</strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(2) FSC </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarFscPayOn\" (change)=\"TarFscPayOnChange($event)\" (change)=\"changePayOnTariff('Fsc')\" [disabled]=\"TariffRate == 1\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarFscRate\" class=\"form-control\" [disabled]=\"TariffRate == 1\" (change)=\"TariffRateChange($event)\" (change)=\"changeTariffRates('Fsc');changeNetRates('Fsc')\"/></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarFsc\" class=\"form-control\"  [disabled]=\"TariffRate == 1\"/></td>\n                     <td class=\"width60\">\n\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarFscFrt\" (change)=\"fnCalculate_Tar()\" [disabled]=\"true\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetFscPayOn\" [disabled]=\"NetRate == 1\" (change)=\"changePayOnNet('Fsc')\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetFscRate\" [disabled]=\"NetRate == 1\" (change)=\"changeNetRates('Fsc')\" class=\"form-control\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetFsc\" class=\"form-control\"  [disabled]=\"UserWgt > 151\"/></td>\n                     <td class=\"width60\">\n\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetFscFrt\" (change)=\"fnCalculate_Net()\" \t[disabled]=\"true\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(3) IRC </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarIrcPayOn\"  [disabled]=\"TariffRate == 1\" (change)=\"TarIrcPayOnChange($event)\"  (change)=\"changePayOnTariff('Irc')\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarIrcRate\" class=\"form-control\"  [disabled]=\"TariffRate == 1\"  (change)=\"TarIrcChange($event)\" (change)=\"changeTariffRates('Irc');changeNetRates('Irc')\"/></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarIrc\" class=\"form-control\" [disabled]=\"TariffRate == 1\"/></td>\n                     <td class=\"width60\">\n\n                         <select class=\"form-control width80\" [(ngModel)]=\"TarIrcFrt\" [disabled]=\"true\" (change)=\"fnCalculate_Tar()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'},{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetIrcPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"NetRate == 1\"\n                                     (change)=\"changePayOnNet('Irc')\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetIrcPayOn\" [disabled]=\"NetRate == 1\" (change)=\"changePayOnNet('Irc')\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetIrcRate\" [disabled]=\"NetRate == 1\" (change)=\"changeNetRates('Irc')\" class=\"form-control\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetIrc\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetIrcFrt\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetIrcFrt\"  [disabled]=\"true\" (change)=\"fnCalculate_Net()\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(4) X-RAY </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'},{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarXrayPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"TariffRate == 1 \"\n                                     (change)=\"changePayOnTariff('Xray')\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarXrayPayOn\"  (change)=\"XraypayChange($event)\"\t(change)=\"changePayOnTariff('Xray')\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarXrayRate\" class=\"form-control\"   (change)=\"XrayChange($event)\"  (change)=\"changeTariffRates('Xray');changeNetRates('Xray')\"/></td>\n                     <!--  <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarXray\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>-->\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarXray\" class=\"form-control\" (change)=\"fnCalculate_Tar()\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarXrayFrt\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width80\" [(ngModel)]=\"TarXrayFrt\"  [disabled]=\"true\" \t(change)=\"fnCalculate_Tar()\">\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'},{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetXrayPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"NetRate == 1\"\n                                     (change)=\"changePayOnNet('Xray')\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetXrayPayOn\"  (change)=\"changePayOnNet('Xray')\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetXrayRate\"  (change)=\"changeNetRates('Xray')\" class=\"form-control\" /></td>\n                     <!-- <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetXray\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td> -->\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetXray\" class=\"form-control\" (change)=\"fnCalculate_Net()\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetXrayFrt\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetXrayFrt\" [disabled]=\"true\" (change)=\"fnCalculate_Net()\">\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(5) MISCELLANEOUS CHARGES </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarMcPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarMcPayOn\" (change)=\"TarMcPayOnChange($event)\" (change)=\"changePayOnTariff('Misc')\">\n                                <option value=\"null\">--</option>\n                                <option value=\"CW\">CW</option>\n                                <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <!-- <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarMcRate\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                    <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarMc\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td> -->\n                    <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarMcRate\" class=\"form-control\" (change)=\"TarMcRateChange($event)\" (change)=\"changeTariffRates('Misc');changeNetRates('Misc')\" /></td>\n\t\t\t\t\t<td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarMc\" class=\"form-control\" (change)=\"fnCalculate_Tar()\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarMcFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarMcFrt\" (change)=\"fnCalculate_Tar()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetMcPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetMcPayOn\" (change)=\"changePayOnNet('Misc')\">\n                                <option value=\"null\">--</option>\n                                <option value=\"CW\">CW</option>\n                                <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <!--  <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetMcRate\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetMc\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>-->\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetMcRate\" class=\"form-control\" (change)=\"changeNetRates('Misc')\" /></td>\n\t\t\t\t\t<td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetMc\" class=\"form-control\" (change)=\"fnCalculate_Net()\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetMcFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n\n                     <select class=\"form-control width70\" [(ngModel)]=\"NetMcFrt\" (change)=\"fnCalculate_Net()\"  >\n                         <option value=\"null\">--</option>\n                         <option value=\"PP\">PP</option>\n                         <option value=\"CC\">CC</option>\n                     </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(6) CTG </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"TarCtgPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <!-- <select class=\"form-control width70\" [(ngModel)]=\"TarCtgPayOn\" [disabled]=\"true\"> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarCtgPayOn\" (change)=\"TarCtgPayOnChange($event)\" (change)=\"changePayOnTariff('CTG')\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarCtgRate\"  class=\"form-control\" (change)=\"TarCtgRateChange($event)\" (change)=\"changeTariffRates('CTG');changeNetRates('CTG')\"/></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarCtg\" class=\"form-control\" (change)=\"fnCalculate_Tar();\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarCtgFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarCtgFrt\" (change)=\"fnCalculate_Tar()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetCtgPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <!-- <select class=\"form-control width70\" [(ngModel)]=\"NetCtgPayOn\" [disabled]=\"true\"> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetCtgPayOn\" (change)=\"changePayOnNet('CTG')\">\n                         <option value=\"null\">--</option>\n                         <option value=\"CW\">CW</option>\n                         <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <!-- <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetCtgRate\" class=\"form-control\" [disabled]=\"true\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetCtg\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td> -->\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetCtgRate\" class=\"form-control\"  (change)=\"changeNetRates('CTG')\"/></td>\n\t\t\t\t\t<td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetCtg\" class=\"form-control\"   (change)=\"fnCalculate_Net()\"/></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"NetCtgFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetCtgFrt\" (change)=\"fnCalculate_Net()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(7) THC </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarThcPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <!-- <select class=\"form-control width70\" [(ngModel)]=\"TarThcPayOn\" [disabled]=\"true\"> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarThcPayOn\" (change)=\"TarThcPayOnChange($event)\" (change)=\"changePayOnTariff('THC')\">\n                         <option value=\"null\">--</option>\n                         <option value=\"CW\">CW</option>\n                         <option value=\"GW\">GW</option>\n\n                         </select>\n                     </td>\n                     <!-- <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarThcRate\" class=\"form-control\" [disabled]=\"true\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarThc\" class=\"form-control\" [disabled]=\"true\" /></td>-->\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarThcRate\" class=\"form-control\"  (change)=\"TarThcRateChange($event)\" (change)=\"changeTariffRates('THC');changeNetRates('THC')\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarThc\" class=\"form-control\" (change)=\"fnCalculate_Tar();\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarThcFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarThcFrt\" (change)=\"fnCalculate_Tar()\">\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetThcPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     >\n                         </ng-select> -->\n                         <!-- <select class=\"form-control width70\" [(ngModel)]=\"NetThcPayOn\" [disabled]=\"true\"> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetThcPayOn\" (change)=\"changePayOnNet('THC')\">\n                         <option value=\"null\">--</option>\n                         <option value=\"CW\">CW</option>\n                         <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <!--  <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetThcRate\" class=\"form-control\" [disabled]=\"true\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetThc\" class=\"form-control\" [disabled]=\"true\" /></td> -->\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetThcRate\" class=\"form-control\"  (change)=\"changeNetRates('THC')\"/></td>\n\t\t\t\t\t<td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetThc\" class=\"form-control\" (change)=\"fnCalculate_Net()\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetThcFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetThcFrt\" \t(change)=\"fnCalculate_Net()\">\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr *ngIf=\"CityCode != 'DAC'\">\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(8) BUSINESS PROMOTION </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'},{VALUEFIELD: 'GW', TEXTFIELD: 'GW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarBPPayOn\"\n                                     class=\"form-control width70\"\n                                     (change)=\"changePayOnTariff('BP')\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarBPPayOn\" (change)=\"TarBPPayOnChange($event)\" (change)=\"changePayOnTariff('BP')\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarBPRate\" class=\"form-control\" (change)=\"TarBPRateChange($event)\" (change)=\"changeTariffRates('BP');changeNetRates('BP')\"/></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarBP\" class=\"form-control\"  [disabled]=\"UserWgt > 151\"/></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarBPFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarBPFrt\"(change)=\"fnCalculate_Tar()\">\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'CW', TEXTFIELD: 'CW'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"NetBPPayOn\"\n                                     class=\"form-control width70\"\n                                     [disabled]=\"true\"\n                                     (change)=\"changePayOnNet('BP')\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetBPPayOn\" [disabled]=\"true\" (change)=\"changePayOnNet('BP')\">\n                             <option value=\"null\">--</option>\n                             <option value=\"CW\">CW</option>\n                             <option value=\"GW\">GW</option>\n                         </select>\n                     </td>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetBPRate\" class=\"form-control\"  (change)=\"changeNetRates('BP')\" /></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetBP\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetBPFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetBPFrt\" (change)=\"fnCalculate_Net()\">\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(9) AMS </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"></td>\n                     <td class=\"width60\"></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarAms\" class=\"form-control\" (change)=\"TarAmsChange($event)\" (change)=\"onChangeAms('TAR')\"/></td>\n                     <td class=\"width70\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"TarAmsFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"TarAmsFrt\" (change)=\"TarAmsFrtChange($event)\" (change)=\"fnCalculate_Tar()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"></td>\n                     <td class=\"width60\"></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetAms\" class=\"form-control\" (change)=\"onChangeAms('NET')\" /></td>\n                     <td class=\"width70\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"NetAmsFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"NetAmsFrt\" (change)=\"fnCalculate_Net()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(10) MAWB </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"></td>\n                     <td class=\"width60\"></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"HawbTar\" (change)=\"fnCalculate_Tar()\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                     <td class=\"width70\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"HawbTarFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"HawbTarFrt\" (change)=\"fnCalculate_Tar()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"></td>\n                     <td class=\"width60\"></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"HawbNet\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                     <td class=\"width70\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"HawbNetFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"HawbNetFrt\" (change)=\"fnCalculate_Net()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(11) PCA </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"></td>\n                     <td class=\"width60\"></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"PcaTar\" (change)=\"fnCalculate_Tar()\" class=\"form-control\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"PcaTarFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Tar()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"PcaTarFrt\" (change)=\"fnCalculate_Tar()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"></td>\n                     <td class=\"width60\"></td>\n                     <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"PcaNet\" class=\"form-control\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"PcaNetFrt\"\n                                     class=\"form-control width70\"\n                                     (change)=\"fnCalculate_Net()\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"PcaNetFrt\" (change)=\"fnCalculate_Net()\"  >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n       <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(12) DEST.TRUCKING </strong></span></td>\n       <td colspan=\"3\">\n            <table class=\"table-sm-new bglightgray\">\n              <tr>\n                  <td class=\"width60\">\n\n                      <select class=\"form-control width70\" [(ngModel)]=\"TarTruckPayOn\" (change)=\"TarTruckPayOnChange($event)\" (change)=\"changePayOnTariff('DT')\" >\n                          <option value=\"null\">--</option>\n                          <option value=\"CW\">CW</option>\n                          <option value=\"GW\">GW</option>\n                      </select>\n                  </td>\n                  <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"TarTruckRate\" class=\"form-control\" (change)=\"TarTruckRateChange($event)\" (change)=\"changeTariffRates('DT');changeNetRates('DT')\"/></td>\n                  <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"TarTruck\" class=\"form-control\"  [disabled]=\"UserWgt > 151\"/></td>\n                  <td class=\"width60\">\n\n                      <select class=\"form-control width70\" [(ngModel)]=\"TarTruckFrt\"(change)=\"fnCalculate_Tar()\">\n                          <option value=\"null\">--</option>\n                          <option value=\"PP\">PP</option>\n                          <option value=\"CC\">CC</option>\n                      </select>\n                  </td>\n              </tr>\n          </table>\n       </td>\n       <td colspan=\"3\">\n            <table class=\"table-sm-new bglightgray\">\n              <tr>\n                  <td class=\"width60\">\n\n                      <select class=\"form-control width70\" [(ngModel)]=\"NetTruckPayOn\" (change)=\"changePayOnNet('DT')\">\n                          <option value=\"null\">--</option>\n                          <option value=\"CW\">CW</option>\n                          <option value=\"GW\">GW</option>\n                      </select>\n                  </td>\n                  <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"NetTruckRate\" class=\"form-control\"  (change)=\"changeNetRates('DT')\" /></td>\n                  <td class=\"width100\"><input type=\"text\" [(ngModel)]=\"NetTruck\" class=\"form-control\" [disabled]=\"UserWgt > 151\" /></td>\n                  <td class=\"width60\">\n\n                      <select class=\"form-control width70\" [(ngModel)]=\"NetTruckFrt\" (change)=\"fnCalculate_Net()\">\n                          <option value=\"null\">--</option>\n                          <option value=\"PP\">PP</option>\n                          <option value=\"CC\">CC</option>\n                      </select>\n                  </td>\n              </tr>\n          </table>\n       </td>\n    </tr>\n    <tr class=\"formheading\">\n       <td colspan=\"11\"><strong><span class=\"col-form-span-label\">(13)  AIRLINE CHARGES</span></strong></td>\n    </tr>\n    <tr>\n\n       <td colspan=\"11\">\n           <table class=\"table table-sm-new bgwhite\" width=\"100%\">\n               <tr >\n                   <td>\n                       <select class=\"form-control width80\" [(ngModel)]=\"CHARGETYPE\" (change)=\"GetChrges(CHARGETYPE)\" >\n                          <option value=\"null\">--Select--</option>\n                          <option *ngFor=\"let d of ChrgTypelist\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n                  </select>\n                   </td>\n                   <td>\n                       <select class=\"form-control  width130\" [(ngModel)]=\"CHARGENAME\" >\n                       <option value=\"null\">--</option>\n                       <option *ngFor=\"let d of AirLineCharges\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n                 </select></td>\n\n                   <td class=\"width60\"></td>\n                   <td class=\"width60\"></td>\n                   <td class=\"centerlabel\">\n                       <input type=\"text\" class=\"width100\" [(ngModel)]=\"RATE_TAR\" (change)=\"changeNetRate(RATE_TAR)\" class=\"form-control\">\n                   </td>\n                   <td>\n                       <select class=\"form-control width70\" [(ngModel)]=\"RATE_TAR_FRT\" (change)=\"changeNetFreight(RATE_TAR_FRT)\" >\n                           <option value=\"null\">--</option>\n                           <option value=\"PP\">PP</option>\n                           <option value=\"CC\">CC</option>\n                   </select>\n                   </td>\n                   <td class=\"width60\"></td>\n                   <!-- <td class=\"width60\"></td> -->\n                   <td>\n                       <input type=\"text\" class=\"width100\" [(ngModel)]=\"RATE_NET\" disabled class=\"form-control\">\n                   </td>\n                   <td>\n                       <select class=\"form-control width70\" [(ngModel)]=\"RATE_NET_FRT\" >\n                           <option value=\"null\">--</option>\n                           <option value=\"PP\">PP</option>\n                           <option value=\"CC\">CC</option>\n                   </select>\n                   </td>\n\n\n                 </tr>\n                 <tr>\n                   <td colspan=\"9\" align=\"center\" >\n                       <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"AddMAWBALCharges()\">\n                           <span class=\"col-form-span-label\">\n                               <i class=\"fa fa-plus\"></i>&nbsp;{{txtchild}}</span>\n                       </button>\n                       <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"ResetMAWBCharges()\">\n                           <span class=\"col-form-span-label\">\n                               <i class=\"fa fa-ban\"></i>Reset</span>\n                       </button>\n                   </td>\n                 </tr>\n               <!-- <tr *ngFor=\"let obj of dtAirLineCharges; let i= index\">\n                   <td>\n                       <select class=\"form-control width80\" [(ngModel)]=\"obj.CHARGETYPE\"  >\n                          <option value=\"\">--Select--</option>\n                          <option *ngFor=\"let d of ChrgTypelist[i]\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n                  </select>\n                   </td>\n                   <td>\n                       <select class=\"form-control  width130\" [(ngModel)]=\"obj.CHARGECODE\" (change)=\"GetChrgType(obj.CHARGECODE,i)\" >\n                       <option value=\"null\">--</option>\n                       <option *ngFor=\"let d of AirLineCharges\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n                 </select></td>\n\n                   <td class=\"width60\"></td>\n                   <td class=\"width60\"></td>\n                   <td class=\"centerlabel\">\n                       <input type=\"text\" class=\"width100\" [(ngModel)]=\"obj.CHRGAMT1\" (change)=\"changeAmt2(obj.CHRGAMT1,i)\" class=\"form-control\">\n                   </td>\n                   <td>\n                       <select class=\"form-control width70\" [(ngModel)]=\"obj.FREIGHT1\" (change)=\"changeFreight2(obj.FREIGHT1,i,obj.CHRGAMT1)\" >\n                           <option value=\"\">--Select--</option>\n                           <option value=\"PP\">PP</option>\n                           <option value=\"CC\">CC</option>\n                   </select>\n                   </td>\n                   <td class=\"width60\"></td>\n                   <td class=\"width60\"></td>\n                   <td>\n                       <input type=\"text\" class=\"width100\" [(ngModel)]=\"obj.CHRGAMT2\" disabled class=\"form-control\">\n                   </td>\n                   <td>\n                       <select class=\"form-control width70\" [(ngModel)]=\"obj.FREIGHT2\" >\n                           <option value=\"\">--Select--</option>\n                           <option value=\"PP\">PP</option>\n                           <option value=\"CC\">CC</option>\n                   </select>\n                   </td>\n                   <td class=\"centerlabel width20\">\n                       <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"removeRow(i)\" *ngIf=\"dtAirLineCharges.length > 1\">\n                           <span class=\"col-form-span-label\"><i class=\"fa fa-times\"></i></span>\n                       </button>\n                   </td>\n\n                 </tr> -->\n\n               <tr>\n                   <td colspan=\"11\">\n                       <table class=\"table table-bordered  table-sm-new bgwhite\" *ngIf=\"Chargeslist.length>0\" width=\"100%\" >\n                                           <thead>\n                                               <tr class=\"formheading\">\n                                                   <th></th>\n                                                   <th  class=\"col-form-span-label\">DA/DC</th>\n                                                   <th class=\"col-form-span-label\">Charge</th>\n                                                   <th  class=\"col-form-span-label\">Tariff Rate </th>\n                                                   <th  class=\"col-form-span-label\">Tariff Rate Freight</th>\n                                                   <th  class=\"col-form-span-label\">Net Rate </th>\n                                                   <th class=\"col-form-span-label\">Net Rate Freight</th>\n\n                                               </tr>\n                                           </thead>\n                                            <tbody   >\n                                               <tr *ngFor=\"let obj of Chargeslist\">\n                                                   <td class=\"centerlabel\">\n                                                       <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.PK_ID)\"  ></i>\n                                                       &nbsp;\n                                                       <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.PK_ID,obj.FK_CHRGDETAILSID)\"></i>\n                                                   </td>\n                                                      <td><span class=\"col-form-span-label\">{{obj.CHARGETYPE}}</span></td>\n                                                   <td><span class=\"col-form-span-label\">{{obj.CHRGNAME}}</span></td>\n                                                   <td><span class=\"col-form-span-label\">{{obj.RATE_TAR}}</span></td>\n                                                   <td><span class=\"col-form-span-label\">{{obj.RATE_TAR_FRT}}</span></td>\n                                                   <td><span class=\"col-form-span-label\">{{obj.RATE_NET}}</span></td>\n                                                   <td><span class=\"col-form-span-label\">{{obj.RATE_NET_FRT}}</span></td>\n                                                   <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\n                                               </tr>\n                                           </tbody>\n                                       </table>\n\n                   </td>\n               </tr>\n           </table>\n       </td>\n    </tr>\n     <tr class=\"col-form-span-heading\">\n       <td colspan=\"11\"></td>\n     </tr>\n       <tr class=\"col-form-span-heading\">\n          <td colspan=\"3\"></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new\">\n                 <tr>\n                     <td class=\"width120\"><span class=\"col-form-span-label\"><strong>PP Total</strong></span></td>\n                     <td class=\"width120\"><span class=\"col-form-span-label\"><strong>CC Total</strong></span></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new\">\n                 <tr>\n                     <td class=\"width120\"><span class=\"col-form-span-label\"><strong>PP Total</strong></span></td>\n                     <td class=\"width120\"><span class=\"col-form-span-label\"><strong>CC Total</strong></span></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(14) DUE CARRIER [2+3+4+5+6+7+8+9]</strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DurCarrierTar\" [disabled]=\"UserWgt > 151\" class=\"form-control\" [maxlength]=\"20\"/></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DurCarrierTarCC\" [disabled]=\"true\" class=\"form-control\"  [maxlength]=\"20\"/></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DurCarrierNet\" [disabled]=\"UserWgt > 151\" class=\"form-control\" [maxlength]=\"20\"/></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DurCarrierNetCC\" [disabled]=\"true\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(15) DUE AGENT [10+11]</strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DueAgentTar\" class=\"form-control\" [disabled]=\"UserWgt > 151\" [maxlength]=\"20\" /></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DueAgentTarCC\" class=\"form-control\" [disabled]=\"true\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DueAgentNet\" class=\"form-control\" [disabled]=\"UserWgt > 151\" [maxlength]=\"20\" /></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"DueAgentNetCC\" class=\"form-control\" [disabled]=\"true\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(16) TOTAL [1+12+13] </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"TotalTar\" class=\"form-control\" [disabled]=\"UserWgt > 151\" [maxlength]=\"20\" /></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"TotalTarCC\" class=\"form-control\" [disabled]=\"true\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"TotalNet\" class=\"form-control\" [disabled]=\"UserWgt > 151\" [maxlength]=\"20\" /></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"TotalNetCC\" class=\"form-control\" [disabled]=\"true\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(17) OTHER CHARGES </strong></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"OtherTar\" class=\"form-control\"  [maxlength]=\"20\"/></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"OtherTarFrt\"\n                                     class=\"form-control\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"OtherTarFrt\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"OtherNet\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"OtherNetFrt\"\n                                     class=\"form-control\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"OtherNetFrt\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(18) Air Freight Commission </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"AirFrtCommission\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(19) Freight Rebate </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"FrtRebate\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr *ngIf=\"CityCode == 'DAC'\">\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(20) Business Promotion</strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"></span></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"BusinesPromo\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(21) TDS </strong></span></td>\n          <td colspan=\"3\">\n             <!-- <ng-select [items]=\"tdsData\"\n                         bindLabel=\"TEXTFIELD\"\n                         bindValue=\"VALUEFIELD\"\n\n                         [(ngModel)]=\"DrpTDS\"\n                         class=\"form-control\"\n                         >\n             </ng-select> -->\n             <select class=\"form-control \" [(ngModel)]=\"DrpTDS\">\n                 <option value=\"\">--</option>\n                  <option *ngFor=\"let d of tdsData\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n             </select>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"TxtTDS\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>(22) Service Tax </strong></span></td>\n          <td colspan=\"3\">\n             <!-- <ng-select [items]=\"serviceTax\"\n                         bindLabel=\"TEXTFIELD\"\n                         bindValue=\"VALUEFIELD\"\n\n                         [(ngModel)]=\"DrpServiceTax\"\n                         class=\"form-control\"\n                         >\n             </ng-select> -->\n             <select class=\"form-control \" [(ngModel)]=\"DrpServiceTax\">\n                 <option value=\"\">--</option>\n                  <option *ngFor=\"let d of serviceTax\" value={{d.DataValueField}}>{{d.DataTextField}}</option>\n             </select>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width120\"></td>\n                     <td class=\"width120\"><input type=\"text\" [(ngModel)]=\"TxtServiceTax\" class=\"form-control\" [maxlength]=\"20\" /></td>\n                     <td class=\"width60\"></td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>OTHER CHARGES </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>AMOUNT / CALCULATE WITH</strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>AMOUNT / CALCULATE WITH</strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"OtherChrg1\" class=\"form-control\" [maxlength]=\"10\" (change)=\"onChangeOtherChargeName(1)\"/></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"OtherAmt1_Tar\" class=\"form-control\" (change)=\"onChangeOther_Tar(1)\"  /></td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalOneDcTar\" [checked]=\"CalOneDcTar == 1\" (click)=\"calOneTarCheck(1)\"/>DueCarrier\n                         </span>\n                     </td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalOneDcTar\" [checked]=\"CalOneDcTar == 2\" (click)=\"calOneTarCheck(2)\"/>DueAgent\n                         </span>\n                     </td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"OtherAmt1TarFrt\"\n                                     class=\"form-control\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"OtherAmt1TarFrt\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"OtherAmt1_Net\" class=\"form-control\" [maxlength]=\"10\"  (change)=\"onChangeOther_Net(1)\" /></td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalOneDcNet\" [checked]=\"CalOneDcNet == 1\" (click)=\"calOneNetCheck(1)\"/>DueCarrier\n                         </span>\n                     </td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalOneDcNet\" [checked]=\"CalOneDcNet == 2\" (click)=\"calOneNetCheck(2)\"/>DueAgent\n                         </span>\n                     </td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"OtherAmt1NetFrt\"\n                                     class=\"form-control\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"OtherAmt1NetFrt\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"OtherChrg2\" class=\"form-control\" [maxlength]=\"10\"  (change)=\"onChangeOtherChargeName(2)\"/></td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"OtherAmt2_Tar\" class=\"form-control\" (change)=\"onChangeOther_Tar(2)\"  [maxlength]=\"10\"/></td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalTwoDcTar\" [checked]=\"CalTwoDcTar == 1\" (click)=\"calTwoTarCheck(1)\"/>DueCarrier\n                         </span>\n                     </td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalTwoDcTar\" [checked]=\"CalTwoDcTar == 2\" (click)=\"calTwoTarCheck(2)\"/>DueAgent\n                         </span>\n                     </td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n                                     [(ngModel)]=\"OtherAmt2TarFrt\"\n                                     class=\"form-control\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"OtherAmt2TarFrt\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n          <td colspan=\"3\">\n               <table class=\"table-sm-new bglightgray\">\n                 <tr>\n                     <td class=\"width60\"><input type=\"text\" [(ngModel)]=\"OtherAmt2_Net\" class=\"form-control\" [maxlength]=\"10\" (change)=\"onChangeOther_Net(2)\" /></td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalTwoDcNet\" [checked]=\"CalTwoDcNet == 1\" (click)=\"calTwoNetCheck(1)\"/>DueCarrier\n                         </span>\n                     </td>\n                     <td class=\"width80\">\n                         <span class=\"col-form-span-label\">\n                             <input type=\"radio\" name=\"CalTwoDcNet\" [checked]=\"CalTwoDcNet == 2\" (click)=\"calTwoNetCheck(2)\"/>DueAgent\n                         </span>\n                     </td>\n                     <td class=\"width60\">\n                         <!-- <ng-select [items]=\"[{VALUEFIELD: 'PP', TEXTFIELD: 'PP'},{VALUEFIELD: 'CC', TEXTFIELD: 'CC'}]\"\n                                     bindLabel=\"TEXTFIELD\"\n                                     bindValue=\"VALUEFIELD\"\n\n                                     [(ngModel)]=\"OtherAmt2NetFrt\"\n                                     class=\"form-control\"\n                                     >\n                         </ng-select> -->\n                         <select class=\"form-control width70\" [(ngModel)]=\"OtherAmt2NetFrt\" >\n                             <option value=\"null\">--</option>\n                             <option value=\"PP\">PP</option>\n                             <option value=\"CC\">CC</option>\n                         </select>\n                     </td>\n                 </tr>\n             </table>\n          </td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>REMARK </strong></span></td>\n          <td colspan=\"6\"><input type=\"text\" [(ngModel)]=\"Remark\" class=\"form-control\" /></td>\n       </tr>\n       <tr class=\"col-form-span-heading\">\n          <td colspan=\"9\"><span class=\"col-form-span-label\"><strong>Freight on MAWB - Already Printed</strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>DESCRIPTION</u></strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>PREPAID</u></strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>COLLECT</u></strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>FREIGHT</strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Ppchrg}}</span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Ccchrg}}</span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>DUE AGENT  </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Pptotagt}}</span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Cctotagt}}</span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>DUE CARRIER  </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Pptotcarr}}</span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\">{{Cctotcarr}}</span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>TOTAL </u> </strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>{{Pptot}}</u></strong></span></td>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong><u>{{Cctot}}</u></strong></span></td>\n       </tr>\n       <tr>\n          <td colspan=\"3\"><span class=\"col-form-span-label\"><strong>MISCELLANEOUS CHARGES </strong></span></td>\n          <td colspan=\"6\"><span class=\"col-form-span-label\">{{Othchrg}}</span></td>\n       </tr>\n     </tbody>\n </table>\n\n    ",
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataSerice"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], MAWBTarifratingcomponent);
    return MAWBTarifratingcomponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/PrintDocumentMawbUpdateComponent.ts":
/*!******************************************************************************!*\
  !*** ./src/app/export/printdocument/air/PrintDocumentMawbUpdateComponent.ts ***!
  \******************************************************************************/
/*! exports provided: PrintDocumentMawbUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbUpdateComponent", function() { return PrintDocumentMawbUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrintDocumentMawbUpdateComponent = /** @class */ (function () {
    function PrintDocumentMawbUpdateComponent(_router, _dataService, _auth, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.abort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currencyList = [];
        this.destinationList = [];
        this.mawbnoList = [];
        this.FreightType = null;
        this.Fcurrency = null;
        this.FreightAmount = 0;
        this.ShipType = '0';
        this.ShipDest = '0';
        this.totalGrwt = 0;
        this.totalChblwt = 0;
        this.mawbno = this.mawbno;
        this.mawbdate = this.mawbdate;
        this.exptnos = this.exptnos;
    }
    PrintDocumentMawbUpdateComponent.prototype.ngOnChanges = function () {
        this.pageLoad(this.exptnos, this.mawbno);
    };
    PrintDocumentMawbUpdateComponent.prototype.pageLoad = function (exptno, mawbno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            Type1: exptno,
            Type2: mawbno,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/PrintDocumentAirMawbUpdatePageload", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.currencyList = data.Table;
            _this.destinationList = data.Table1;
            _this.mawbnoList = data.Table2;
            if (_this.mawbnoList.length > 0) {
                for (var i = 0; i < _this.mawbnoList.length; i++) {
                    _this.totalGrwt += _this.mawbnoList[i].GRWT;
                    _this.totalChblwt += _this.mawbnoList[i].CHBLWT;
                }
            }
            _this.FreightType = _this.mawbnoList[0].FRT_TYPE;
            _this.Fcurrency = _this.mawbnoList[0].FRT_CUR;
            _this.ShipType = (_this.mawbnoList[0].IsDDX == 0) ? '0' : '1';
            _this.ShipDest = _this.mawbnoList[0].DdxDestWhId;
            _this.FreightAmount = _this.mawbnoList[0].FRT_AMT;
        });
    };
    PrintDocumentMawbUpdateComponent.prototype.submit = function () {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            MAWBNO: this.mawbno,
            MAWBDT: this.mawbdate,
            EXPTNO: this.exptnos,
            GRWT: this.totalGrwt,
            CHBL_WT: this.totalChblwt,
            FRT_TYPE: (this.FreightType != null) ? this.FreightType : '0',
            FRT_CUR: (this.Fcurrency != null) ? this.Fcurrency : '0',
            FRT_AMT: (this.FreightAmount == '') ? this.FreightAmount : '0',
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            ISDDX: (this.ShipType != null) ? this.ShipType : '0',
            DDXWAREHSE: (this.ShipType != null && this.ShipType == '1') ? ((this.ShipDest != null) ? this.ShipDest : '0') : '0'
        };
        this._dataService.Common("Export/PrintDocumentAirMawbUpdateIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            alert("MAWBNO Details saved successfully !");
            // this.result.emit(true);
            //print-document/air/air-Mawbprint-update/:param
            _this._router.navigate(['/export/print-document/air/air-Mawbprint-update', _this.mawbno]);
        });
    };
    PrintDocumentMawbUpdateComponent.prototype.cancel = function () {
        this.abort.emit(true);
    };
    PrintDocumentMawbUpdateComponent.prototype.ddx_Onchange = function (ddxType) {
        this.ShipDest = null;
    };
    PrintDocumentMawbUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponent.prototype, "mawbno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponent.prototype, "mawbdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponent.prototype, "exptnos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentMawbUpdateComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentMawbUpdateComponent.prototype, "abort", void 0);
    PrintDocumentMawbUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-mawb-update1',
            template: __webpack_require__(/*! raw-loader!./mawb.update.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.update.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentMawbUpdateComponent);
    return PrintDocumentMawbUpdateComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/hawb-printupdate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/export/printdocument/air/hawb-printupdate.component.ts ***!
  \************************************************************************/
/*! exports provided: PrintDocumentHawbprintupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentHawbprintupdateComponent", function() { return PrintDocumentHawbprintupdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //'../../../environments/environment';
var PrintDocumentHawbprintupdateComponent = /** @class */ (function () {
    function PrintDocumentHawbprintupdateComponent(_dataService, _loginService, _loaderService, _router, _activatedRoute, _toasterService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.hawbnoList = [];
        this.HAWBNO = "";
        this.HAWBDT = "";
        this.shipper = "";
        this.consignee = "";
        this.agentname = "";
        this.IATACode = "";
        this.IATAAcct = "";
        this.actinfo = "";
        this.airportdep = "";
        this.to1 = "";
        this.bycarrier1 = "";
        this.to2 = "";
        this.by2 = "";
        this.to3 = "";
        this.by3 = "";
        this.currency = "";
        this.chgs = "";
        this.ppd1 = "";
        this.coll1 = "";
        this.ppd2 = "";
        this.coll2 = "";
        this.valcarriage = "";
        this.valcustom = "";
        this.airprtdest = "";
        this.reqfltdt1 = "";
        this.reqfltdt2 = "";
        this.amtinsur = "";
        this.handinfo = "";
        this.pcsrcp = "";
        this.grwt = "";
        this.kglb = "";
        this.ratecls = "";
        this.commodity = "";
        this.chblwt = "";
        this.ratechrg = "";
        this.total = "";
        this.qtyofgoods = "";
        this.othrchrg = "";
        this.ppwtchrg = "";
        this.ccwtchrg = "";
        this.ppvalchrg = "";
        this.ccvalchrg = "";
        this.pptax = "";
        this.cctax = "";
        this.ppothrchrg = "";
        this.ccothrchrg = "";
        this.ppothrchrgCar = "";
        this.ccothrchrgCar = "";
        this.bottom = "";
        this.pptotal = "";
        this.cctotal = "";
        this.ppcrate = "";
        this.ccdestcrate = "";
        this.totcollchrg = "";
        this.AGTNAME1 = "";
        this.IATAcct = "";
        this.COM_NAME = "";
        this.CMP_CITY = "";
    }
    PrintDocumentHawbprintupdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            if (params["param"]) {
                _this.HAWBNO = params["param"];
                _this.pageload(_this.HAWBNO);
            }
        });
        this.HAWBNO = (this.HAWBNO != undefined || this.HAWBNO != '') ? this.HAWBNO : '';
    };
    PrintDocumentHawbprintupdateComponent.prototype.pageload = function (_hawbno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            hawbno: _hawbno,
            cmpid: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/hawbnoprintload", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.hawbnoList = data.Table;
                _this.HAWBNO = data.Table[0].HAWBNO;
                _this.HAWBDT = data.Table[0].HAWBDT;
                _this.shipper = data.Table[0].SHPR;
                _this.consignee = data.Table[0].CNSEE;
                _this.agentname = data.Table[0].AGTNAME;
                _this.IATACode = data.Table[0].IATA;
                _this.actinfo = data.Table[0].ACINFO;
                _this.airportdep = data.Table[0].DEPARTURE;
                _this.to1 = data.Table[0].IMP_TO;
                _this.bycarrier1 = data.Table[0].FRSTCARR;
                _this.to2 = data.Table[0].TO1;
                _this.by2 = data.Table[0].IMP_BY;
                _this.to3 = data.Table[0].TO2;
                _this.by3 = data.Table[0].BY1;
                _this.currency = data.Table[0].CURR;
                _this.chgs = data.Table[0].CHG;
                _this.ppd1 = data.Table[0].PPDWT;
                _this.coll1 = data.Table[0].COLLWT;
                _this.ppd2 = data.Table[0].OTHRPPD;
                _this.coll2 = data.Table[0].OTHRCOLL;
                _this.valcarriage = data.Table[0].CARRVAL;
                _this.valcustom = data.Table[0].CUSTVAL;
                _this.airprtdest = data.Table[0].DEST;
                _this.reqfltdt1 = data.Table[0].FLT1;
                _this.reqfltdt2 = data.Table[0].FLT2;
                _this.amtinsur = data.Table[0].INSAMT;
                _this.handinfo = data.Table[0].HANDINFO;
                _this.pcsrcp = data.Table[0].PCS;
                _this.grwt = data.Table[0].GRWT;
                _this.kglb = data.Table[0].KG;
                _this.ratecls = data.Table[0].RTCL;
                _this.commodity = data.Table[0].ITMNO;
                _this.chblwt = data.Table[0].CHRGWT;
                if (data.Table[0].FRT_CHARGEABLE_AS_TAR == 'F') {
                    _this.ratechrg = data.Table[0].FRT_CHARGEABLE_AS_TAR;
                }
                else {
                    _this.ratechrg = data.Table[0].RATE;
                }
                _this.total = data.Table[0].TOT;
                _this.qtyofgoods = data.Table[0].IDESC;
                _this.othrchrg = data.Table[0].OTHCHRG; // + '' + data.Table[0].ALCHARGES    ;
                _this.ppwtchrg = data.Table[0].PPCHRG;
                _this.ccwtchrg = data.Table[0].CCCHRG;
                _this.ppvalchrg = data.Table[0].PPVAL;
                _this.ccvalchrg = data.Table[0].CCVAL;
                _this.pptax = data.Table[0].PPTAX;
                _this.cctax = data.Table[0].CCTAX;
                _this.ppothrchrg = data.Table[0].PPTOTAGT;
                _this.ccothrchrg = data.Table[0].CCTOTAGT;
                _this.ppothrchrgCar = data.Table[0].PPTOTCARR;
                _this.ccothrchrgCar = data.Table[0].CCTOTCARR;
                _this.bottom = data.Table[0].BOTTOM;
                _this.pptotal = data.Table[0].PPTOT;
                _this.cctotal = data.Table[0].CCTOT;
                _this.ppcrate = data.Table[0].PPCURRATE;
                _this.ccdestcrate = data.Table[0].CCURRATE;
                //  this.totcollchrg =	data.Table[0].TOTCOLLCHRG   ;
                _this.AGTNAME1 = data.Table[0].AGTNAME1;
                _this.totcollchrg = data.Table[0].TOTCOLLCHRG;
                _this.IATAcct = data.Table[0].AGTACNO;
                _this.COM_NAME = data.Table[0].COM_NAME;
                _this.CMP_CITY = data.Table[0].CMP_CITY;
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    PrintDocumentHawbprintupdateComponent.prototype.updateprint = function () {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            HAWBNO: this.HAWBNO, SHPR: this.shipper, CNSEE: this.consignee, AGTNAME: this.agentname, IATA: this.IATACode, AGTACNO: this.IATAcct, DEPARTURE: this.airportdep,
            IMP_TO: this.to1, FRSTCARR: this.bycarrier1, TO1: this.to2, IMP_BY: this.by2, TO2: this.to3, BY1: this.by3, CURR: this.currency,
            CHGS: this.chgs, PPDWT: this.ppd1, COLLWT: this.coll1, OTHRPPD: this.ppd2, OTHRCOLL: this.coll2, CARRVAL: this.valcarriage,
            CUSTVAL: this.valcustom, DEST: this.airprtdest, FLT1: this.reqfltdt1, FLT2: this.reqfltdt2, INSAMT: this.amtinsur, ACINFO: this.actinfo, HANDINFO: this.handinfo,
            PCS: this.pcsrcp, GRWT: this.grwt, KG: this.kglb, RTCL: this.ratecls, ITMNO: this.commodity, CHRGWT: this.chblwt, RATE: this.ratechrg,
            TOT: this.total, IDESC: this.qtyofgoods, PPCHRG: this.ppwtchrg, PPVAL: this.ppvalchrg, PPTAX: this.pptax, PPTOTAGT: this.ppothrchrg, PPTOTCARR: this.ppothrchrgCar, PPTOT: this.pptotal,
            PPCURRATE: this.ppcrate, CCCHRG: this.ccwtchrg, CCVAL: this.ccvalchrg, CCTAX: this.cctax, CCTOTAGT: this.ccothrchrg, CCTOTCARR: this.ccothrchrgCar,
            CCTOT: this.cctotal, CCURRATE: this.ccdestcrate, OTHCHRG: this.othrchrg, TOTCOLLCHRG: this.totcollchrg, BOTTOM: this.bottom, agtname1: this.AGTNAME1
        };
        this._dataService.Common("Export/hawbnoprintUpdate", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                //"HAWBNO Details updated successfully
                _this._toasterService.toast('info', 'Complete', "HAWBNO Details updated successfully");
                _this._loaderService.display(false);
            }
            else {
                _this._loaderService.display(false);
            }
        });
    };
    PrintDocumentHawbprintupdateComponent.prototype.printData = function () {
        // window.open('www.manilal.com', "_blank");
        var URL = "http://180.179.207.163/linkserp-ac/UI/Export/frm_Exp_Print_Document_HAWBNO_final_PRINT.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&HAWBNo=" + this.HAWBNO
            + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    PrintDocumentHawbprintupdateComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    PrintDocumentHawbprintupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-hawb-printupdate',
            template: __webpack_require__(/*! raw-loader!./hawb-printupdate.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb-printupdate.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], PrintDocumentHawbprintupdateComponent);
    return PrintDocumentHawbprintupdateComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/hawb.component.ts":
/*!************************************************************!*\
  !*** ./src/app/export/printdocument/air/hawb.component.ts ***!
  \************************************************************/
/*! exports provided: PrintDocumentHawbListComponent, PrintDocumentHawbSearchComponent, PrintDocumentHawbUpdateComponent, PrintDocumentHawbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentHawbListComponent", function() { return PrintDocumentHawbListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentHawbSearchComponent", function() { return PrintDocumentHawbSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentHawbUpdateComponent", function() { return PrintDocumentHawbUpdateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentHawbComponent", function() { return PrintDocumentHawbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







 //'../../../environments/environment';
var PrintDocumentHawbListComponent = /** @class */ (function () {
    function PrintDocumentHawbListComponent(_dataService, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        //this._dataService.stringdttoArry(data.Table[0].CARTEDDT); set Date
        //(this.cartingdt != null) ? this.cartingdt.formatted : ""; get Date
        this.hawbno = null;
        this.searchList = [];
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disableCheckbox = false;
        this.error = null;
        this.searchList = this.searchList;
    }
    PrintDocumentHawbListComponent.prototype.ngOnChanges = function () { };
    PrintDocumentHawbListComponent.prototype.validate = function (exptno, exporter, importer) {
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].SHIPPER === exporter && this.searchList[i].CONSIGNEE === importer) {
                this.searchList[i]["Disabled"] = false;
            }
            else {
                this.searchList[i]["Disabled"] = true;
            }
            if (this.searchList[i].SHIPPER === exporter && this.searchList[i].CONSIGNEE === importer && this.searchList[i].EXPTNO === exptno) {
                if (this.searchList[i]["Select"] === true) {
                    this.searchList[i]["Select"] = false;
                }
                else {
                    this.searchList[i]["Select"] = true;
                }
            }
        }
        var tempList = 0;
        tempList = this.searchList.filter(function (searchlist) { return searchlist.Select === false; }).length;
        if (tempList === this.searchList.length) {
            for (var i = 0; i < this.searchList.length; i++) {
                this.searchList[i]["Select"] = false;
                this.searchList[i]["Disabled"] = false;
            }
        }
    };
    PrintDocumentHawbListComponent.prototype.submit = function () {
        var count = 0;
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].Select == true) {
                count++;
            }
        }
        if (count === 0) {
            this.error = 'Select atleast one job no !!';
            return false;
        }
        this.error = null;
        this._loaderService.display(true);
        this.result.emit(this.searchList);
        this._loaderService.display(true);
    };
    PrintDocumentHawbListComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentHawbListComponent.prototype, "hawbno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentHawbListComponent.prototype, "searchList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentHawbListComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentHawbListComponent.prototype, "searchLength", void 0);
    PrintDocumentHawbListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-hawb-list',
            template: __webpack_require__(/*! raw-loader!./hawb.list.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.list.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentHawbListComponent);
    return PrintDocumentHawbListComponent;
}());

var PrintDocumentHawbSearchComponent = /** @class */ (function () {
    function PrintDocumentHawbSearchComponent(_dataService, _loginService, _router, _activatedRoute, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._loaderService = _loaderService;
        this.searchoutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.searchList = [];
        this.exptnos = '';
        this.hawbno = '';
        this.hawbdate = null;
        this.strHawbDate = '';
        this.error = null;
    }
    PrintDocumentHawbSearchComponent.prototype.disableFutureDate = function () {
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
    PrintDocumentHawbSearchComponent.prototype.ngOnChanges = function () { };
    PrintDocumentHawbSearchComponent.prototype.searchData = function () {
        if (this.hawbno.length < 6) {
            this.error = 1;
        }
        else if (!this.hawbdate) {
            this.error = 2;
        }
        else {
            this.error = null;
            this.strHawbDate = this.hawbdate.formatted;
            this.searchoutput.emit({ hawbno: this.hawbno, hawbdate: this.strHawbDate });
        }
    };
    PrintDocumentHawbSearchComponent.prototype.printData = function () {
        // window.open('www.manilal.com', "_blank");
        if (this.hawbno.length < 6) {
            this.error = 1;
        }
        else if (!this.hawbdate) {
            this.error = 2;
        }
        else {
            var URL_1 = "http://manilal.com/erp/UI/Export/frm_Exp_Print_Document_HAWBNO_final_PRINT.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&HAWBNo=" + this.hawbno
                + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
            window.open(URL_1, "_blank");
        }
    };
    PrintDocumentHawbSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentHawbSearchComponent.prototype, "searchoutput", void 0);
    PrintDocumentHawbSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-hawb-search',
            template: __webpack_require__(/*! raw-loader!./hawb.search.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentHawbSearchComponent);
    return PrintDocumentHawbSearchComponent;
}());

var PrintDocumentHawbUpdateComponent = /** @class */ (function () {
    function PrintDocumentHawbUpdateComponent(_router, _dataService, _auth, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.hawbno = '';
        this.hawbdate = null;
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
            selectorWidth: '200px',
            disableSince: this.disableFutureDate()
        };
        this.currencyList = [];
        this.hawbnoList = [];
        this.FreightType = "0";
        this.Fcurrency = "0";
        this.FreightAmount = 0;
        this.totalGrwt = 0;
        this.totalChblwt = 0;
        this.hawb_cmpcode = "";
        this.hawb_issue = "";
    }
    PrintDocumentHawbUpdateComponent.prototype.disableFutureDate = function () {
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
    PrintDocumentHawbUpdateComponent.prototype.ngOnChanges = function () {
        this.hawbno = (this.hawbno != undefined || this.hawbno != '') ? this.hawbno : '';
        this.hawbdate = (this.hawbdate == undefined || this.hawbdate == '' || this.hawbdate == null) ? null : this._dataService.stringdttoArry(this.hawbdate);
        this.exptnos = this.exptnos;
        this.hawb_cmpcode = this._loginService.getLogin()[0].CMPCODE;
        // if(this._loginService.getLogin()[0].CMPCODE == '22' || this._loginService.getLogin()[0].CMPCODE =='25')
        // {  this.hawb_china="1";  }
        // else{ this.hawb_china="0";}
        if (this._loginService.getLogin()[0].ISHAWB == '1') {
            this.hawb_issue = "1";
        }
        else {
            this.hawb_issue = "0";
        }
        this.pageLoad(this.exptnos, this.hawbno);
    };
    PrintDocumentHawbUpdateComponent.prototype.pageLoad = function (exptno, hawbno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            Type1: exptno,
            Type2: hawbno,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Export/PrintDocumentAirHawbUpdatePageload", _jsonData)
            .subscribe(function (data) {
            _this.currencyList = data.Table;
            if (data.Table1[0].STATUS == 100) {
                _this.hawbnoList = data.Table1;
                _this.exptnos = data.Table1[0].EXPTSTRING;
                if (_this.hawbnoList.length > 0) {
                    _this.hawbdate = (_this.hawbdate == undefined || _this.hawbdate == '' || _this.hawbdate == null) ? _this._dataService.stringdttoArry(_this.hawbnoList[0].HAWBDT) : _this.hawbdate;
                    for (var i = 0; i < _this.hawbnoList.length; i++) {
                        _this.totalGrwt += parseFloat(_this.hawbnoList[i].GRWT);
                        _this.totalChblwt += parseFloat(_this.hawbnoList[i].CHBLWT);
                    }
                }
                _this.FreightType = _this.hawbnoList[0].FRT_TYPE;
                _this.Fcurrency = _this.hawbnoList[0].FRT_CUR;
                _this.FreightAmount = _this.hawbnoList[0].FRT_AMT;
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    }; //STATUSTEXT
    PrintDocumentHawbUpdateComponent.prototype.submit = function () {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            HAWBNO: this.hawbno,
            HAWBDT: (this.hawbdate != null) ? this.hawbdate.formatted : "",
            EXPTNO: this.exptnos,
            GRWT: this.totalGrwt,
            CHBL_WT: this.totalChblwt,
            FRT_TYPE: (this.FreightType != null) ? this.FreightType : '0',
            FRT_CUR: (this.Fcurrency != null) ? this.Fcurrency : '0',
            FRT_AMT: (this.FreightAmount == '') ? this.FreightAmount : '0',
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CityCode1: this._loginService.getLogin()[0].CITYCODE1,
            CmpId: this._loginService.getLogin()[0].CMPID,
            CmpCode: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.Common("Export/PrintDocumentAirHawbUpdateIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSMSG);
            alert(data.Table[0].STATUSMSG);
            //   this.result.emit(true);
            // this._router.navigate(['/export/print-document/air/air-print-update', this.hawbno]);
            _this._router.navigate(['/export/print-document/air/air-print-update', data.Table[0].HAWBNO]);
        });
    };
    PrintDocumentHawbUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentHawbUpdateComponent.prototype, "hawbno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentHawbUpdateComponent.prototype, "hawbdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentHawbUpdateComponent.prototype, "exptnos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentHawbUpdateComponent.prototype, "result", void 0);
    PrintDocumentHawbUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-hawb-update',
            template: __webpack_require__(/*! raw-loader!./hawb.update.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.update.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentHawbUpdateComponent);
    return PrintDocumentHawbUpdateComponent;
}());

var PrintDocumentHawbComponent = /** @class */ (function () {
    function PrintDocumentHawbComponent(_router, _dataService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.viewType = 'Update';
        this.searchList = [];
        this.exptnos = '';
        this.hawbno = '';
        this.strHawbDate = '';
        this.searchLength = 0;
    }
    PrintDocumentHawbComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this._router.navigate(['export/print-document/air/hawb/search']);
        this._loginService.verifyRights(379, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Modify', data);
        });
        var pageType = /number/gi;
        var curUrl = this._router.url;
        if (curUrl.search(pageType) == -1) {
            this.viewType = 'Search';
        }
        else {
            this.viewType = 'List';
            this.getList("");
        }
    };
    PrintDocumentHawbComponent.prototype.getList = function (hawbno) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            Type1: hawbno,
            Type2: this._loginService.getLogin()[0].CITYCODE,
            Type3: this._loginService.getLogin()[0].CITYCODE1,
            Type4: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/PrintDocumentAirHawbList", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.searchList = data.Table;
            _this.searchLength = (_this.searchList.length > 0) ? 1 : -1;
            for (var i = 0; i < _this.searchList.length; i++) {
                _this.searchList[i]["Select"] = false;
                _this.searchList[i]["Disabled"] = false;
            }
        });
    };
    PrintDocumentHawbComponent.prototype.getSearchInputValue = function (data) {
        this.hawbno = data.hawbno;
        this.strHawbDate = data.hawbdate;
        this.exptnos = '';
        this.viewType = 'Update';
    };
    PrintDocumentHawbComponent.prototype.getDataFromList = function (data) {
        this.searchList = data;
        var strExptno = '';
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].Select == true) {
                strExptno += this.searchList[i].EXPTNO + ',';
            }
        }
        this.exptnos = strExptno;
        this.strHawbDate = '';
        this.viewType = 'Update';
    };
    PrintDocumentHawbComponent.prototype.getPrintData = function (event) {
        if (event) {
            this.viewType = 'Search';
        }
    };
    PrintDocumentHawbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    PrintDocumentHawbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./hawb.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/hawb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentHawbComponent);
    return PrintDocumentHawbComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/mawb-final-print.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/export/printdocument/air/mawb-final-print.component.ts ***!
  \************************************************************************/
/*! exports provided: PrintDocumentMawbfinalprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbfinalprint", function() { return PrintDocumentMawbfinalprint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrintDocumentMawbfinalprint = /** @class */ (function () {
    function PrintDocumentMawbfinalprint(_dataService, _loginService, _loaderService, _router, _activatedRoute, _toasterService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this.hawbnoList = [];
        this.MAWBNO = "";
        this.MAWBDT = "";
        this.shipper = "";
        this.consignee = "";
        this.agentname = "";
        this.IATACode = "";
        this.IATAAcct = "";
        this.actinfo = "";
        this.airportdep = "";
        this.to1 = "";
        this.bycarrier1 = "";
        this.to2 = "";
        this.by2 = "";
        this.to3 = "";
        this.by3 = "";
        this.currency = "";
        this.chgs = "";
        this.ppd1 = "";
        this.coll1 = "";
        this.ppd2 = "";
        this.coll2 = "";
        this.valcarriage = "";
        this.valcustom = "";
        this.airprtdest = "";
        this.reqfltdt1 = "";
        this.reqfltdt2 = "";
        this.amtinsur = "";
        this.handinfo = "";
        this.pcsrcp = "";
        this.grwt = "";
        this.chblwt = "";
        this.kglb = "";
        this.ratecls = "";
        this.commodity = "";
        this.ratechrg = "";
        this.total = "";
        this.qtyofgoods = "";
        this.othrchrg = "";
        this.ppwtchrg = "";
        this.ccwtchrg = "";
        this.ppvalchrg = "";
        this.ccvalchrg = "";
        this.pptax = "";
        this.cctax = "";
        this.ppothrchrg = "";
        this.ccothrchrg = "";
        this.ppothrchrgCar = "";
        this.ccothrchrgCar = "";
        this.bottom = "";
        this.pptotal = "";
        this.cctotal = "";
        this.ppcrate = "";
        this.ccdestcrate = "";
        this.totcollchrg = "";
        this.AGTNAME1 = "";
        this.IATAcct = "";
        this.COM_NAME = "";
        this.CMP_CITY = "";
        this.DESC = "";
        this.check = '1';
    }
    PrintDocumentMawbfinalprint.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            if (params["param"]) {
                _this.MAWBNO = params["param"];
                _this.pageload(_this.MAWBNO);
            }
        });
        this.MAWBNO = (this.MAWBNO != undefined || this.MAWBNO != '') ? this.MAWBNO : '';
    };
    PrintDocumentMawbfinalprint.prototype.pageload = function (_MAWBNO) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            mawbno: _MAWBNO,
            cmpid: this._loginService.getLogin()[0].CMPID,
            isprint: "1"
        };
        this._dataService.getData("Export/PrintDocumentAirMawbPrint", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.hawbnoList = data.Table;
                _this.MAWBNO = data.Table[0].MAWBNO;
                _this.MAWBDT = data.Table[0].MAWBDT;
                _this.shipper = data.Table[0].SHPR;
                _this.consignee = data.Table[0].CNSEE;
                _this.agentname = data.Table[0].AGTNAME;
                _this.IATACode = data.Table[0].IATA;
                _this.actinfo = data.Table[0].ACINFO;
                _this.airportdep = data.Table[0].DEPARTURE;
                _this.to1 = data.Table[0].IMP_TO;
                _this.bycarrier1 = data.Table[0].FRSTCARR;
                _this.to2 = data.Table[0].TO1;
                _this.by2 = data.Table[0].IMP_BY;
                _this.to3 = data.Table[0].TO2;
                _this.by3 = data.Table[0].BY1;
                _this.currency = data.Table[0].CURR;
                _this.chgs = data.Table[0].CHG;
                _this.ppd1 = data.Table[0].PPDWT;
                _this.coll1 = data.Table[0].COLLWT;
                _this.ppd2 = data.Table[0].OTHRPPD;
                _this.coll2 = data.Table[0].OTHRCOLL;
                _this.valcarriage = data.Table[0].CARRVAL;
                _this.valcustom = data.Table[0].CUSTVAL;
                _this.airprtdest = data.Table[0].DEST;
                _this.reqfltdt1 = data.Table[0].FLT1;
                _this.reqfltdt2 = data.Table[0].FLT2;
                _this.amtinsur = data.Table[0].INSAMT;
                _this.handinfo = data.Table[0].HANDINFO;
                _this.pcsrcp = data.Table[0].PCS;
                _this.grwt = data.Table[0].GRWT;
                _this.kglb = data.Table[0].KG;
                _this.ratecls = data.Table[0].RTCL;
                _this.commodity = data.Table[0].ITMNO;
                _this.chblwt = data.Table[0].CHRGWT;
                if (data.Table[0].FRT_CHARGEABLE_AS_TAR == 'F') {
                    _this.ratechrg = data.Table[0].FRT_CHARGEABLE_AS_TAR;
                }
                else {
                    _this.ratechrg = data.Table[0].RATE;
                }
                _this.total = data.Table[0].TOT;
                _this.qtyofgoods = data.Table[0].IDESC;
                _this.othrchrg = data.Table[0].OTHCHRG;
                _this.ppwtchrg = data.Table[0].PPCHRG;
                _this.ccwtchrg = data.Table[0].CCCHRG;
                _this.ppvalchrg = data.Table[0].PPVAL;
                _this.ccvalchrg = data.Table[0].CCVAL;
                _this.pptax = data.Table[0].PPTAX;
                _this.cctax = data.Table[0].CCTAX;
                _this.ppothrchrg = data.Table[0].PPTOTAGT;
                _this.ccothrchrg = data.Table[0].CCTOTAGT;
                _this.ppothrchrgCar = data.Table[0].PPTOTCARR;
                _this.ccothrchrgCar = data.Table[0].CCTOTCARR;
                _this.bottom = data.Table[0].BOTTOM;
                _this.pptotal = data.Table[0].PPTOT;
                _this.cctotal = data.Table[0].CCTOT;
                _this.ppcrate = data.Table[0].PPCURRATE;
                _this.ccdestcrate = data.Table[0].CCURRATE;
                _this.AGTNAME1 = data.Table[0].AGTNAME1;
                _this.totcollchrg = data.Table[0].TOTCOLLCHRG;
                _this.IATAcct = data.Table[0].AGTACNO;
                _this.COM_NAME = data.Table[0].COM_NAME;
                _this.CMP_CITY = data.Table[0].CMP_CITY;
                _this.DESC = data.Table[0].DESC;
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    PrintDocumentMawbfinalprint.prototype.finalMawbPrint = function () {
        //let PrintFCRData = this.FCR.nativeElement.InnerHTML;
        //  console.log("DivPrint ", this.MAWB.nativeElement);
        var content = this.MAWB.nativeElement.innerHTML;
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
    PrintDocumentMawbfinalprint.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("print", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrintDocumentMawbfinalprint.prototype, "MAWB", void 0);
    PrintDocumentMawbfinalprint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-Mawb-print',
            template: __webpack_require__(/*! raw-loader!./mawb-final-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb-final-print.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], PrintDocumentMawbfinalprint);
    return PrintDocumentMawbfinalprint;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/mawb-printupdate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/export/printdocument/air/mawb-printupdate.component.ts ***!
  \************************************************************************/
/*! exports provided: PrintDocumentMawbprintupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbprintupdateComponent", function() { return PrintDocumentMawbprintupdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Mawb_Tarifrating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Mawb_Tarifrating.component */ "./src/app/export/printdocument/air/Mawb_Tarifrating.component.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //'../../../environments/environment';
//import { ConsignmentEditModalComponent } from './../../consignment/consignment/consig_main_edit_modal.component';


var PrintDocumentMawbprintupdateComponent = /** @class */ (function () {
    function PrintDocumentMawbprintupdateComponent(_dataService, _loginService, _loaderService, _router, _activatedRoute, _toasterService, _sharedconsig) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._sharedconsig = _sharedconsig;
        this.hawbnoList = [];
        this.MAWBNO = "";
        this.MAWBDT = "";
        this.shipper = "";
        this.consignee = "";
        this.agentname = "";
        this.IATACode = "";
        this.IATAAcct = "";
        this.actinfo = "";
        this.airportdep = "";
        this.to1 = "";
        this.bycarrier1 = "";
        this.to2 = "";
        this.by2 = "";
        this.to3 = "";
        this.by3 = "";
        this.currency = "";
        this.chgs = "";
        this.ppd1 = "";
        this.coll1 = "";
        this.ppd2 = "";
        this.coll2 = "";
        this.valcarriage = "";
        this.valcustom = "";
        this.airprtdest = "";
        this.reqfltdt1 = "";
        this.reqfltdt2 = "";
        this.amtinsur = "";
        this.handinfo = "";
        this.pcsrcp = "";
        this.kglb = "";
        this.ratecls = "";
        this.commodity = "";
        this.ratechrg = "";
        this.total = "";
        this.qtyofgoods = "";
        this.othrchrg = "";
        this.ppwtchrg = "";
        this.ccwtchrg = "";
        this.ppvalchrg = "";
        this.ccvalchrg = "";
        this.pptax = "";
        this.cctax = "";
        this.ppothrchrg = "";
        this.ccothrchrg = "";
        this.ppothrchrgCar = "";
        this.ccothrchrgCar = "";
        this.bottom = "";
        this.pptotal = "";
        this.cctotal = "";
        this.ppcrate = "";
        this.ccdestcrate = "";
        this.totcollchrg = "";
        this.AGTNAME1 = "";
        this.IATAcct = "";
        this.COM_NAME = "";
        this.CMP_CITY = "";
        this.DESC = "";
        this.check = '1';
        this.AIRLINE_ADDRS = "";
        this.grwt = "";
        this.chblwt = "";
        this.EXPTNO = "";
    }
    PrintDocumentMawbprintupdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            if (params["param"]) {
                _this.MAWBNO = params["param"];
                _this.pageload(_this.MAWBNO);
            }
        });
        this.MAWBNO = (this.MAWBNO != undefined || this.MAWBNO != '') ? this.MAWBNO : '';
    };
    PrintDocumentMawbprintupdateComponent.prototype.pageload = function (_MAWBNO) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            mawbno: _MAWBNO,
            cmpid: this._loginService.getLogin()[0].CMPID,
            isprint: "0"
        };
        this._dataService.getData("Export/PrintDocumentAirMawbPrint", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.hawbnoList = data.Table;
                _this.MAWBNO = data.Table[0].MAWBNO;
                _this.MAWBDT = data.Table[0].MAWBDT;
                _this.shipper = data.Table[0].SHPR;
                _this.consignee = data.Table[0].CNSEE;
                _this.agentname = data.Table[0].AGTNAME;
                _this.IATACode = data.Table[0].IATA;
                _this.actinfo = data.Table[0].ACINFO;
                _this.airportdep = data.Table[0].DEPARTURE;
                _this.to1 = data.Table[0].IMP_TO;
                _this.bycarrier1 = data.Table[0].FRSTCARR;
                _this.to2 = data.Table[0].TO1;
                _this.by2 = data.Table[0].IMP_BY;
                _this.to3 = data.Table[0].TO2;
                _this.by3 = data.Table[0].BY1;
                _this.currency = data.Table[0].CURR;
                _this.chgs = data.Table[0].CHG;
                _this.ppd1 = data.Table[0].PPDWT;
                _this.coll1 = data.Table[0].COLLWT;
                _this.ppd2 = data.Table[0].OTHRPPD;
                _this.coll2 = data.Table[0].OTHRCOLL;
                _this.valcarriage = data.Table[0].CARRVAL;
                _this.valcustom = data.Table[0].CUSTVAL;
                _this.airprtdest = data.Table[0].DEST;
                _this.reqfltdt1 = data.Table[0].FLT1;
                _this.reqfltdt2 = data.Table[0].FLT2;
                _this.amtinsur = data.Table[0].INSAMT;
                _this.handinfo = data.Table[0].HANDINFO;
                _this.pcsrcp = data.Table[0].PCS;
                _this.kglb = data.Table[0].KG;
                _this.ratecls = data.Table[0].RTCL;
                _this.commodity = data.Table[0].ITMNO;
                if (data.Table[0].FRT_CHARGEABLE_AS_TAR == 'F') {
                    _this.ratechrg = data.Table[0].FRT_CHARGEABLE_AS_TAR;
                }
                else {
                    _this.ratechrg = data.Table[0].RATE;
                }
                _this.total = data.Table[0].TOT;
                _this.qtyofgoods = data.Table[0].IDESC;
                _this.othrchrg = data.Table[0].OTHCHRG;
                _this.ppwtchrg = data.Table[0].PPCHRG;
                _this.ccwtchrg = data.Table[0].CCCHRG;
                _this.ppvalchrg = data.Table[0].PPVAL;
                _this.ccvalchrg = data.Table[0].CCVAL;
                _this.pptax = data.Table[0].PPTAX;
                _this.cctax = data.Table[0].CCTAX;
                _this.ppothrchrg = data.Table[0].PPTOTAGT;
                _this.ccothrchrg = data.Table[0].CCTOTAGT;
                _this.ppothrchrgCar = data.Table[0].PPTOTCARR;
                _this.ccothrchrgCar = data.Table[0].CCTOTCARR;
                _this.bottom = data.Table[0].BOTTOM;
                _this.pptotal = data.Table[0].PPTOT;
                _this.cctotal = data.Table[0].CCTOT;
                _this.ppcrate = data.Table[0].PPCURRATE;
                _this.ccdestcrate = data.Table[0].CCURRATE;
                _this.AGTNAME1 = data.Table[0].AGTNAME1;
                _this.totcollchrg = data.Table[0].TOTCOLLCHRG;
                _this.IATAcct = data.Table[0].AGTACNO;
                _this.COM_NAME = data.Table[0].COM_NAME;
                _this.CMP_CITY = data.Table[0].CMP_CITY;
                _this.DESC = data.Table[0].DESC;
                _this.AIRLINE_ADDRS = data.Table[0].AIRLINE_ADDRS;
                _this.grwt = data.Table[0].GRWT;
                _this.chblwt = data.Table[0].CHRGWT;
                _this.AIRLINE_ADDRS = data.Table[0].AIRLINE_ADDRS;
                _this.EXPTNO = data.Table[0].EXPTNO;
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    PrintDocumentMawbprintupdateComponent.prototype.updateprint = function () {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            MAWBNO: this.MAWBNO, SHPR: this.shipper, CNSEE: this.consignee, AGTNAME: this.agentname, IATA: this.IATACode, AGTACNO: this.IATAcct, DEPARTURE: this.airportdep,
            IMP_TO: this.to1, FRSTCARR: this.bycarrier1, TO1: this.to2, IMP_BY: this.by2, TO2: this.to3, BY1: this.by3, CURR: this.currency,
            CHGS: this.chgs, PPDWT: this.ppd1, COLLWT: this.coll1, OTHRPPD: this.ppd2, OTHRCOLL: this.coll2, CARRVAL: this.valcarriage,
            CUSTVAL: this.valcustom, DEST: this.airprtdest, FLT1: this.reqfltdt1, FLT2: this.reqfltdt2, INSAMT: this.amtinsur, ACINFO: this.actinfo, HANDINFO: this.handinfo,
            PCS: this.pcsrcp, KG: this.kglb, RTCL: this.ratecls, ITMNO: this.commodity, RATE: this.ratechrg,
            TOT: this.total, IDESC: this.qtyofgoods, PPCHRG: this.ppwtchrg, PPVAL: this.ppvalchrg, PPTAX: this.pptax, PPTOTAGT: this.ppothrchrg, PPTOTCARR: this.ppothrchrgCar, PPTOT: this.pptotal,
            PPCURRATE: this.ppcrate, CCCHRG: this.ccwtchrg, CCVAL: this.ccvalchrg, CCTAX: this.cctax, CCTOTAGT: this.ccothrchrg, CCTOTCARR: this.ccothrchrgCar,
            CCTOT: this.cctotal, CCURRATE: this.ccdestcrate, OTHCHRG: this.othrchrg, TOTCOLLCHRG: this.totcollchrg, BOTTOM: this.bottom, agtname1: this.AGTNAME1, DESC: this.DESC, AIRLINE_ADDRS: this.AIRLINE_ADDRS
        };
        this._dataService.Common("Export/MawbnoprintUpdate", _jsonData)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                //"HAWBNO Details updated successfully
                _this._toasterService.toast('info', 'Complete', "MAWBNO Details updated successfully");
                _this.pageload(_this.MAWBNO);
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    PrintDocumentMawbprintupdateComponent.prototype.printData = function () {
        //print-document/air/air-Mawbprint/:param
        if (this.ratechrg != '') {
            this._router.navigate(['export/print-document/air/air-Mawbprint', this.MAWBNO]);
        }
        else {
            this._toasterService.toast('warning', 'warning', 'Please enter Tariff Rate first. \n\nNote: To add Tariff rate click on ENTER TARIFF RATE button.');
        }
    };
    PrintDocumentMawbprintupdateComponent.prototype.printplane = function () {
        // window.open('www.manilal.com', "_blank");
        if (this.ratechrg != '') {
            var URL_1 = "http://180.179.207.163/linkserp-ac/UI/Export/frm_Exp_Print_Document_MAWBNO_CRYST_PRINT.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&MAWBNo=" + this.MAWBNO
                + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].edocumentIp;
            window.open(URL_1, "_blank");
        }
        else {
            this._toasterService.toast('warning', 'warning', 'Please enter Tariff Rate first. \n\nNote: To add Tariff rate click on ENTER TARIFF RATE button.');
        }
    };
    PrintDocumentMawbprintupdateComponent.prototype.mawbrate = function () {
        var _this = this;
        //  window.open('./#/popupexport/air/air-Mawbprint/TarifRate/' + this.EXPTNO, '_blank');
        var _jsonData = {
            Type1: this.EXPTNO,
            Type2: this._loginService.getLogin()[0].CMPID
        };
        this._loaderService.display(true);
        this._dataService.Common("Export/ConsignmentEditSearchView", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this._sharedconsig.exportEditData = data.Table[0];
            _this._loaderService.display(false);
            _this.editModal.show("MawbTarif");
        });
    };
    PrintDocumentMawbprintupdateComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataSerice"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MAWBModelpopup', { static: false }),
        __metadata("design:type", _Mawb_Tarifrating_component__WEBPACK_IMPORTED_MODULE_7__["MAWBModelpopupcomponent"])
    ], PrintDocumentMawbprintupdateComponent.prototype, "editModal", void 0);
    PrintDocumentMawbprintupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-Mawb-printupdate',
            template: __webpack_require__(/*! raw-loader!./mawb-printupdate.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb-printupdate.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataSerice"]])
    ], PrintDocumentMawbprintupdateComponent);
    return PrintDocumentMawbprintupdateComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/mawb.component.ts":
/*!************************************************************!*\
  !*** ./src/app/export/printdocument/air/mawb.component.ts ***!
  \************************************************************/
/*! exports provided: PrintDocumentMawbListComponent, PrintDocumentMawbUpdateComponents, PrintDocumentMawbComponent, PrintDocumentMawbSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbListComponent", function() { return PrintDocumentMawbListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbUpdateComponents", function() { return PrintDocumentMawbUpdateComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbComponent", function() { return PrintDocumentMawbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDocumentMawbSearchComponent", function() { return PrintDocumentMawbSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrintDocumentMawbListComponent = /** @class */ (function () {
    function PrintDocumentMawbListComponent(_loaderService) {
        this._loaderService = _loaderService;
        //this._dataService.stringdttoArry(data.Table[0].CARTEDDT); set Date
        //(this.cartingdt != null) ? this.cartingdt.formatted : ""; get Date
        this.searchList = [];
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchList = this.searchList;
    }
    PrintDocumentMawbListComponent.prototype.ngOnChanges = function () { };
    PrintDocumentMawbListComponent.prototype.submit = function () {
        var count = 0;
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].SELECT == true) {
                count++;
            }
        }
        if (count === 0) {
            alert('Select atleast one export no !!');
            return false;
        }
        this._loaderService.display(true);
        this.result.emit(this.searchList);
        this._loaderService.display(false);
    };
    PrintDocumentMawbListComponent.prototype.validate = function (Mode, exptno) {
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].MODEOFSHIP === Mode) {
                this.searchList[i]["Disabled"] = false;
            }
            else {
                this.searchList[i]["Disabled"] = true;
            }
            if (this.searchList[i].MODEOFSHIP === Mode && this.searchList[i].EXPTNO === exptno) {
                if (this.searchList[i]["SELECT"] === true) {
                    this.searchList[i]["SELECT"] = false;
                }
                else {
                    this.searchList[i]["SELECT"] = true;
                    this.searchList[i]["Disabled"] = false;
                }
            }
        }
        var tempList = 0;
        tempList = this.searchList.filter(function (searchlist) { return searchlist.SELECT === false; }).length;
        if (tempList === this.searchList.length) {
            for (var i = 0; i < this.searchList.length; i++) {
                this.searchList[i]["SELECT"] = false;
                this.searchList[i]["Disabled"] = false;
            }
        }
    };
    PrintDocumentMawbListComponent.ctorParameters = function () { return [
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbListComponent.prototype, "searchList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentMawbListComponent.prototype, "result", void 0);
    PrintDocumentMawbListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-mawb-list',
            template: __webpack_require__(/*! raw-loader!./mawb.list.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.list.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentMawbListComponent);
    return PrintDocumentMawbListComponent;
}());

var PrintDocumentMawbUpdateComponents = /** @class */ (function () {
    function PrintDocumentMawbUpdateComponents(_router, _dataService, _auth, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.mawbdate = null;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.abort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currencyList = [];
        this.destinationList = [];
        this.mawbnoList = [];
        this.FreightType = null;
        this.Fcurrency = null;
        this.FreightAmount = 0;
        this.ShipType = '0';
        this.ShipDest = '0';
        this.totalGrwt = 0;
        this.totalChblwt = 0;
        // this.mawbno = this.mawbno;
        // this.mawbdate = this.mawbdate;
        // this.exptnos = this.exptnos;
        // this.MawbType=this.MawbType;
        // this.AirLine=this.AirLine;
    }
    ;
    PrintDocumentMawbUpdateComponents.prototype.ngOnChanges = function () {
        this.mawbno = (this.mawbno != undefined || this.mawbno != '') ? this.mawbno : '';
        this.mawbdate = (this.mawbdate == undefined || this.mawbdate == '' || this.mawbdate == null) ? null : this.mawbdate; //this._dataService.stringdttoArry(this.mawbdate);
        this.exptnos = this.exptnos;
        this.pageLoad(this.exptnos, this.mawbno);
        console.log(this.MawbType);
    };
    PrintDocumentMawbUpdateComponents.prototype.pageLoad = function (exptno, mawbno) {
        var _this = this;
        this._loaderService.display(true);
        alert('mawb page load');
        var _jsonData = {
            Type1: exptno,
            Type2: mawbno,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        var totalchwt = 0;
        this._dataService.getData("Export/PrintDocumentAirMawbUpdatePageload", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.currencyList = data.Table;
            _this.destinationList = data.Table1;
            _this.mawbnoList = data.Table2;
            if (_this.mawbnoList.length > 0) {
                for (var i = 0; i < _this.mawbnoList.length; i++) {
                    _this.totalGrwt += _this.mawbnoList[i].GRWT;
                    totalchwt += _this.mawbnoList[i].CHBLWT;
                }
            }
            _this.totalChblwt = Math.round(totalchwt * 100) / 100;
            _this.FreightType = _this.mawbnoList[0].FRT_TYPE;
            _this.Fcurrency = _this.mawbnoList[0].FRT_CUR;
            _this.ShipType = (_this.mawbnoList[0].IsDDX == 0) ? '0' : '1';
            _this.ShipDest = _this.mawbnoList[0].DdxDestWhId;
            _this.FreightAmount = _this.mawbnoList[0].FRT_AMT;
        });
    };
    PrintDocumentMawbUpdateComponents.prototype.submit = function () {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            MAWBNO: this.mawbno,
            MAWBDT: this.mawbdate,
            EXPTNO: this.exptnos,
            GRWT: this.totalGrwt,
            CHBL_WT: this.totalChblwt,
            FRT_TYPE: (this.FreightType != null) ? this.FreightType : '0',
            FRT_CUR: (this.Fcurrency != null) ? this.Fcurrency : '0',
            FRT_AMT: (this.FreightAmount == '') ? this.FreightAmount : '0',
            CityCode: this._loginService.getLogin()[0].CITYCODE,
            CmpId: this._loginService.getLogin()[0].CMPID,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            ISDDX: (this.ShipType != null) ? this.ShipType : '0',
            DDXWAREHSE: (this.ShipType != null && this.ShipType == '1') ? ((this.ShipDest != null) ? this.ShipDest : '0') : '0',
            MAWBTYPE: this.MawbType,
            AIRLINE: this.AirLine,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP
        };
        this._dataService.Common("Export/PrintDocumentAirMawbUpdateIU", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            alert("MAWBNO Details saved successfully !");
            // this.result.emit(true);
            //print-document/air/air-Mawbprint-update/:param
            _this._router.navigate(['/export/print-document/air/air-Mawbprint-update', _this.mawbno]);
        });
    };
    PrintDocumentMawbUpdateComponents.prototype.cancel = function () {
        this.abort.emit(true);
    };
    PrintDocumentMawbUpdateComponents.prototype.ddx_Onchange = function (ddxType) {
        this.ShipDest = null;
    };
    PrintDocumentMawbUpdateComponents.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponents.prototype, "mawbno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponents.prototype, "mawbdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponents.prototype, "exptnos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponents.prototype, "MawbType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrintDocumentMawbUpdateComponents.prototype, "AirLine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentMawbUpdateComponents.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentMawbUpdateComponents.prototype, "abort", void 0);
    PrintDocumentMawbUpdateComponents = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-air-mawb-update',
            template: __webpack_require__(/*! raw-loader!./mawb.update.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.update.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentMawbUpdateComponents);
    return PrintDocumentMawbUpdateComponents;
}());

var PrintDocumentMawbComponent = /** @class */ (function () {
    function PrintDocumentMawbComponent(_router, _activatedRoute, _dataService, _auth, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
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
        //pageType: string = '';
        this.viewType = 'Update';
        this.searchList = [];
        this.exptnos = '';
        this.mawbno = '0';
        this.mawbdate = null;
        this.strMawbDate = '';
        this.error = null;
        this.AirLine = "0";
        this.AirLineMawbNoList = [];
        this.AirLineList = [];
        this.MawbType = "M";
        this.searchLength = 0;
        this.AllMawbNoList = [];
    }
    PrintDocumentMawbComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let obj = this._activatedRoute.snapshot.queryParams;
        //if (obj.type !== undefined || obj.type !== '') {
        //    this.pageType = obj.type;
        //} else {
        //    this.pageType = 'search';
        //}
        this._loginService.verifyRights(373, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Modify', data); //For verify user access
        });
        var _jsonData = {
            CITYCODE: this._loginService.getLogin()[0].CITYCODE1,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/EXP_MAWB_STOCK_PAGELOAD", _jsonData)
            .subscribe(function (data) {
            _this.AirLineList = data.Table1;
            _this.AllMawbNoList = data.Table3;
        });
        var pageType = /number/gi;
        var curUrl = this._router.url;
        if (curUrl.search(pageType) == -1) {
            this.viewType = 'Search';
        }
        else {
            this.viewType = 'Generate';
            //this.getSearchData("");
        }
    };
    PrintDocumentMawbComponent.prototype.getmwawblist = function (alcd) {
        this.AirLineMawbNoList = this.AllMawbNoList.filter(function (code) { return code.AIRLINE_CD === alcd; });
    };
    PrintDocumentMawbComponent.prototype.fn_generateLastMawbNo = function (cnt) {
        if (this.Airmawbno.length == 11) {
            var remainder = 0;
            var chklastdigit = 0;
            var extractno = void 0;
            extractno = this.Airmawbno.substr(3, 8);
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
            this.Airmawbno = extractno;
        }
    };
    PrintDocumentMawbComponent.prototype.searchData = function () {
        if (this.AirLine == "" || this.AirLine == undefined || this.AirLine == "0") {
            this.error = 1;
            return false;
        }
        else if (this.mawbno == "0") {
            this.error = 2;
            return false;
        }
        // else if (this.mawbno.length != 11) {
        //     this.error = 3;
        //     return false;}
        else if (this.mawbdate == null) {
            this.error = 4;
            return false;
        }
        else {
            this.error = null;
            this.strMawbDate = this.mawbdate.formatted;
            this.getSearchData(this.mawbno);
        }
    };
    PrintDocumentMawbComponent.prototype.fn_validateMawbNo = function () {
        if (this.Airmawbno.length == 8) {
            var remainder = 0;
            var chklastdigit = 0;
            var extractno = 0;
            extractno = this.Airmawbno.substr(3, 7);
            remainder = (extractno % 7); //(extractno - 7 * extractno / 7)
            chklastdigit = this.Airmawbno.slice(-1); //no.substr(11,1)
            if (remainder != chklastdigit) {
                this._toasterService.toast("warning", "warning", "GIVEN MAWB NO IS NOT VALID ");
                this.Airmawbno = "";
                this.Airmawbno.focus();
                return false;
            }
        }
    };
    PrintDocumentMawbComponent.prototype.getSearchInputValue = function (data) {
        this.mawbno = data.mawbno;
        this.strMawbDate = data.mawbdate;
        this.exptnos = '';
        this.viewType = 'Update';
    };
    PrintDocumentMawbComponent.prototype.printData = function () {
        //this._router.navigate(['export/print-document/air/air-Mawbprint',this.mawbno]);
        this._router.navigate(['/export/print-document/air/air-Mawbprint-update', this.mawbno]);
    };
    PrintDocumentMawbComponent.prototype.getSearchData = function (mawbnum) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            Type1: mawbnum,
            Type2: this._loginService.getLogin()[0].CITYCODE,
            Type3: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/PrintDocumentAirMawbList", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                if (data.Table[0].STATUS == 100) {
                    _this.viewType = 'List';
                    _this.searchList = data.Table;
                    // this.searchLength = (this.searchList.length > 0) ? 1 : -1;
                    for (var i = 0; i < _this.searchList.length; i++) {
                        _this.searchList[i]["SELECT"] = false;
                        _this.searchList[i]["Disabled"] = false;
                    }
                }
                else if (data.Table[0].STATUS == 102) {
                    _this.exptnos = '';
                    _this.viewType = 'Update';
                }
                else {
                    // alert('MAWBNO already exists');
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTXT);
                }
            }
            else {
                alert('No record found');
            }
        });
    };
    PrintDocumentMawbComponent.prototype.getData = function (data) {
        this.searchList = data;
        var strExptno = '';
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].SELECT == true) {
                strExptno += this.searchList[i].EXPTNO + ',';
            }
        }
        this.exptnos = strExptno;
        this.viewType = 'Update';
    };
    PrintDocumentMawbComponent.prototype.getPrintData = function (event) {
        if (event) {
            this.viewType = 'Search';
        }
    };
    PrintDocumentMawbComponent.prototype.cancelled = function (event) {
        this.viewType = "Search";
    };
    PrintDocumentMawbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    PrintDocumentMawbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./mawb.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentMawbComponent);
    return PrintDocumentMawbComponent;
}());

var PrintDocumentMawbSearchComponent = /** @class */ (function () {
    function PrintDocumentMawbSearchComponent(_router, _activatedRoute, _dataService, _auth, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.searchoutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        //pageType: string = '';
        this.viewType = 'Search';
        this.searchList = [];
        this.exptnos = '';
        this.mawbno = '0';
        this.mawbdate = null;
        this.strMawbDate = '';
        this.error = null;
        this.AirLineList = [];
        this.AirLine = "";
    }
    PrintDocumentMawbSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let obj = this._activatedRoute.snapshot.queryParams;
        //if (obj.type !== undefined || obj.type !== '') {
        //    this.pageType = obj.type;
        //} else {
        //    this.pageType = 'search';
        //}
        this._loginService.verifyRights(373, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Modify', data); //For verify user access
        });
        var _jsonData = {
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/EXP_MAWB_STOCK_PAGELOAD", _jsonData)
            .subscribe(function (data) {
            _this.AirLineList = data.Table1;
        });
    };
    PrintDocumentMawbSearchComponent.prototype.ngOnChanges = function () { };
    PrintDocumentMawbSearchComponent.prototype.searchData = function () {
        if (this.AirLine == "") {
            this.error = 1;
            return false;
        }
        else if (this.mawbno == "0") {
            this.error = 2;
            return false;
        }
        else if (this.mawbno.length != 11) {
            this.error = 3;
            return false;
            // } else if  (!this.mawbdate) {//(this.mawbdate == null) {
            //     this.error = 4;
            //     return false;
        }
        else {
            this.error = null;
            this.strMawbDate = this.mawbdate.formatted;
            this.searchoutput.emit({ mawbno: this.mawbno, mawbdate: this.strMawbDate });
            //this.getSearchData(this.mawbno);
        }
    };
    PrintDocumentMawbSearchComponent.prototype.fn_validateMawbNo = function () {
        if (this.Airmawbno.length == 11) {
            var remainder = 0;
            var chklastdigit = 0;
            var extractno = 0;
            extractno = this.Airmawbno.substr(3, 7);
            remainder = (extractno % 7); //(extractno - 7 * extractno / 7)
            chklastdigit = this.Airmawbno.slice(-1); //no.substr(11,1)
            if (remainder != chklastdigit) {
                this._toasterService.toast("warning", "warning", "GIVEN MAWB NO IS NOT VALID ");
                this.Airmawbno = "";
                return false;
            }
        }
    };
    PrintDocumentMawbSearchComponent.prototype.fn_generateLastMawbNo = function (cnt) {
        if (this.Airmawbno.length == 11) {
            var remainder = 0;
            var chklastdigit = 0;
            var extractno = void 0;
            extractno = this.Airmawbno.substr(3, 8);
            chklastdigit = extractno.slice(-1);
            for (var i = 0; i < cnt; i++) {
                if (chklastdigit == 4) {
                    extractno = extractno + 6;
                }
                else {
                    extractno = extractno + 11;
                }
                console.log(extractno);
            }
        }
    };
    PrintDocumentMawbSearchComponent.prototype.printData = function () {
        //this._router.navigate(['export/print-document/air/air-Mawbprint',this.mawbno]);
        this._router.navigate(['/export/print-document/air/air-Mawbprint-update', this.mawbno]);
    };
    PrintDocumentMawbSearchComponent.prototype.getSearchData = function (mawbnum) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            Type1: mawbnum,
            Type2: this._loginService.getLogin()[0].CITYCODE,
            Type3: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Export/PrintDocumentAirMawbList", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                if (data.Table[0].STATUS == 100) {
                    _this.viewType = 'List';
                    _this.searchList = data.Table;
                    // this.searchLength = (this.searchList.length > 0) ? 1 : -1;
                    for (var i = 0; i < _this.searchList.length; i++) {
                        _this.searchList[i]["SELECT"] = false;
                        _this.searchList[i]["Disabled"] = false;
                    }
                }
                else if (data.Table[0].STATUS == 102) {
                    _this.exptnos = '';
                    _this.viewType = 'Update';
                }
                else {
                    // alert('MAWBNO already exists');
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTXT);
                }
            }
            else {
                alert('No record found');
            }
        });
    };
    PrintDocumentMawbSearchComponent.prototype.getData = function (data) {
        this.searchList = data;
        var strExptno = '';
        for (var i = 0; i < this.searchList.length; i++) {
            if (this.searchList[i].SELECT == true) {
                strExptno += this.searchList[i].EXPTNO + ',';
            }
        }
        this.exptnos = strExptno;
        this.viewType = 'Update';
    };
    PrintDocumentMawbSearchComponent.prototype.getPrintData = function (event) {
        if (event) {
            this.viewType = 'Search';
        }
    };
    PrintDocumentMawbSearchComponent.prototype.cancelled = function (event) {
        this.viewType = "Search";
    };
    PrintDocumentMawbSearchComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PrintDocumentMawbSearchComponent.prototype, "searchoutput", void 0);
    PrintDocumentMawbSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mawb-search',
            template: __webpack_require__(/*! raw-loader!./mawb.search.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/printdocument/air/mawb.search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], PrintDocumentMawbSearchComponent);
    return PrintDocumentMawbSearchComponent;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/printdoc-air.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/export/printdocument/air/printdoc-air.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExportPrintdocaircontModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPrintdocaircontModule", function() { return ExportPrintdocaircontModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _printdoc_air_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./printdoc-air.routing */ "./src/app/export/printdocument/air/printdoc-air.routing.ts");
/* harmony import */ var _mawb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mawb.component */ "./src/app/export/printdocument/air/mawb.component.ts");
/* harmony import */ var _PrintDocumentMawbUpdateComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrintDocumentMawbUpdateComponent */ "./src/app/export/printdocument/air/PrintDocumentMawbUpdateComponent.ts");
/* harmony import */ var _hawb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hawb.component */ "./src/app/export/printdocument/air/hawb.component.ts");
/* harmony import */ var _hawb_printupdate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hawb-printupdate.component */ "./src/app/export/printdocument/air/hawb-printupdate.component.ts");
/* harmony import */ var _mawb_printupdate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mawb-printupdate.component */ "./src/app/export/printdocument/air/mawb-printupdate.component.ts");
/* harmony import */ var _mawb_final_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mawb-final-print.component */ "./src/app/export/printdocument/air/mawb-final-print.component.ts");
/* harmony import */ var _Mawb_Tarifrating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Mawb_Tarifrating.component */ "./src/app/export/printdocument/air/Mawb_Tarifrating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ExportPrintdocaircontModule = /** @class */ (function () {
    function ExportPrintdocaircontModule() {
    }
    ExportPrintdocaircontModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_printdoc_air_routing__WEBPACK_IMPORTED_MODULE_8__["ExportprintodcairRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_mawb_component__WEBPACK_IMPORTED_MODULE_9__["PrintDocumentMawbComponent"], _mawb_component__WEBPACK_IMPORTED_MODULE_9__["PrintDocumentMawbListComponent"], _PrintDocumentMawbUpdateComponent__WEBPACK_IMPORTED_MODULE_10__["PrintDocumentMawbUpdateComponent"],
                _hawb_component__WEBPACK_IMPORTED_MODULE_11__["PrintDocumentHawbComponent"], _hawb_component__WEBPACK_IMPORTED_MODULE_11__["PrintDocumentHawbUpdateComponent"], _hawb_component__WEBPACK_IMPORTED_MODULE_11__["PrintDocumentHawbSearchComponent"], _hawb_component__WEBPACK_IMPORTED_MODULE_11__["PrintDocumentHawbListComponent"],
                _hawb_printupdate_component__WEBPACK_IMPORTED_MODULE_12__["PrintDocumentHawbprintupdateComponent"], _mawb_printupdate_component__WEBPACK_IMPORTED_MODULE_13__["PrintDocumentMawbprintupdateComponent"], _mawb_final_print_component__WEBPACK_IMPORTED_MODULE_14__["PrintDocumentMawbfinalprint"], _mawb_component__WEBPACK_IMPORTED_MODULE_9__["PrintDocumentMawbUpdateComponents"],
                _Mawb_Tarifrating_component__WEBPACK_IMPORTED_MODULE_15__["MAWBModelpopupcomponent"], _Mawb_Tarifrating_component__WEBPACK_IMPORTED_MODULE_15__["MAWBTarifratingcomponent"], _mawb_component__WEBPACK_IMPORTED_MODULE_9__["PrintDocumentMawbSearchComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportPrintdocaircontModule);
    return ExportPrintdocaircontModule;
}());



/***/ }),

/***/ "./src/app/export/printdocument/air/printdoc-air.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/export/printdocument/air/printdoc-air.routing.ts ***!
  \******************************************************************/
/*! exports provided: ExportprintodcairRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportprintodcairRoutingModule", function() { return ExportprintodcairRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mawb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mawb.component */ "./src/app/export/printdocument/air/mawb.component.ts");
/* harmony import */ var _hawb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hawb.component */ "./src/app/export/printdocument/air/hawb.component.ts");
/* harmony import */ var _hawb_printupdate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hawb-printupdate.component */ "./src/app/export/printdocument/air/hawb-printupdate.component.ts");
/* harmony import */ var _mawb_printupdate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mawb-printupdate.component */ "./src/app/export/printdocument/air/mawb-printupdate.component.ts");
/* harmony import */ var _mawb_final_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mawb-final-print.component */ "./src/app/export/printdocument/air/mawb-final-print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import {MAWBTarifratingcomponent} from './Mawb_Tarifrating.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Print-doc-air'
        },
        children: [
            { path: 'air/mawb', component: _mawb_component__WEBPACK_IMPORTED_MODULE_2__["PrintDocumentMawbComponent"], data: { title: 'Print-Document / air / mawb' } },
            { path: 'air/hawb/number', component: _hawb_component__WEBPACK_IMPORTED_MODULE_3__["PrintDocumentHawbComponent"], data: { title: 'Print-Document / air / hawb / list' } },
            { path: 'air/hawb/search', component: _hawb_component__WEBPACK_IMPORTED_MODULE_3__["PrintDocumentHawbComponent"], data: { title: 'Print-Document / air / hawb / search or print' } },
            { path: 'air/air-print-update/:param', component: _hawb_printupdate_component__WEBPACK_IMPORTED_MODULE_4__["PrintDocumentHawbprintupdateComponent"], data: { title: 'print-document /air /hawb / printupdate ' } },
            { path: 'air/air-Mawbprint-update/:param', component: _mawb_printupdate_component__WEBPACK_IMPORTED_MODULE_5__["PrintDocumentMawbprintupdateComponent"], data: { title: 'print-document /air /mawb / printupdate ' } },
            { path: 'air/air-Mawbprint/:param', component: _mawb_final_print_component__WEBPACK_IMPORTED_MODULE_6__["PrintDocumentMawbfinalprint"], data: { title: 'print-document /air /mawb / print ' } },
            { path: 'air/mawb/search', component: _mawb_component__WEBPACK_IMPORTED_MODULE_2__["PrintDocumentMawbComponent"], data: { title: 'Print-Document / air / mawb / search or print' } },
            { path: 'air/mawb/number', component: _mawb_component__WEBPACK_IMPORTED_MODULE_2__["PrintDocumentMawbComponent"], data: { title: 'Print-Document / air / mawb / Generate' } },
        ]
    }
];
var ExportprintodcairRoutingModule = /** @class */ (function () {
    function ExportprintodcairRoutingModule() {
    }
    ExportprintodcairRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportprintodcairRoutingModule);
    return ExportprintodcairRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=printdocument-air-printdoc-air-module.js.map