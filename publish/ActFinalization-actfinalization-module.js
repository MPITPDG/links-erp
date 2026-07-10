(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ActFinalization-actfinalization-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>Client Supplier Account Wise List</b> </td>\r\n           </tr>\r\n                           <tr>\r\n                    <td >\r\n                        <span  class=\"col-form-span-label\"><b>Client </b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n\r\n                            <td colspan=\"4\" >\r\n                               <ng-select   [items]=\"ClientList\" bindLabel=\"acctname\"\r\n                               bindValue=\"acctcodename\"  [(ngModel)]=\"Client\" (ngModelChange)=\"GetAccountName($event)\"\r\n                               class=\"custom\" placeholder=\"--Please Select--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>From</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                        class=\"form-control\"  [selDate]=\"FromDate\"    ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportData()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Export To Excel </span></button>&nbsp;\r\n                    </td>\r\n                </tr>\r\n              \r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\" >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>{{PageType}}</b> </td>\r\n           </tr>\r\n           <tr class=\"trbg\">\r\n            <td  class=\"width150\">\r\n                <span  class=\"col-form-span-label\"><b>City</b> </span><span\r\n                class=\"col-form-span-error\">*</span>\r\n            </td>\r\n            <td colspan=\"3\">\r\n              \r\n                <div class=\"leftlabel\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <input type=\"radio\" name=\"radioDisplay\" value=\"ALL\" [(ngModel)]=\"CITYCODE\" />&nbsp;All </span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <span class=\"col-form-span-label\">\r\n                        <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"CITYCODE\"  />&nbsp;Only {{CITYNAME}}</span>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n                <tr>\r\n                    <td >\r\n                        <span  class=\"col-form-span-label\"><b>Account </b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n\r\n                            <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"AccountList\" bindLabel=\"ACCTNAME\"\r\n                               bindValue=\"ACCTCODE\"  [(ngModel)]=\"Account\" (ngModelChange)=\"GetAccountName($event)\"\r\n                               class=\"custom\" placeholder=\"--Please Select--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>From</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                        class=\"form-control\"  [selDate]=\"FromDate\"    ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportData()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Export To Excel </span></button>&nbsp;\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ActFinalization/genactstmt.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/MisReport/ActFinalization/genactstmt.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\" >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                         <div class=\"col-sm-12\">\r\n                            <strong>{{searchHeaderText}}</strong>\r\n                        </div>  \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>GENERAL ACCOUNT STATEMENT </b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Client Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                       \r\n                            <td  colspan=\"3\" >\r\n                                 \r\n                                <ng-select [items]=\"ClientList\" bindLabel=\"acctname\"\r\n                                bindValue=\"acctcodename\" (ngModelChange)=\"GetClientName($event)\"\r\n                                [(ngModel)]=\"Client\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                            </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n                     \r\n                    <td><span class=\"col-form-span-label\"><b>From Date</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                    <td>              \r\n                        <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\" [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"FromDate\"    ></my-date-picker>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td>              \r\n                        <my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\" [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n        \r\n\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ShowOutstanding()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Search List</span></button>&nbsp;\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithcolums()\"> <span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                    Export To Excel Columnwise </span></button>&nbsp;\r\n                        <!-- <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"clear();\"><i class=\"fa fa-ban\"></i>Clear</span></button> -->\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr align=\"right\" class=\"title-head formheading\">\r\n                    <td colspan=\"8\" >\r\n                  <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';Searchdata_list=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"12\" class=\"centerlabel\">\r\n                        <strong>{{searchHeaderText}}</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"12\" class=\"centerlabel\">\r\n                        <strong> {{ClientName}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td align=\"right\">\r\n                        <table  class=\"table table-bordered table-sm-new bgwhite\" style=\"width:300px\">             \r\n                 \r\n                            <tr>\r\n                                <td class=\"col-form-span-label\" align=\"left\">Opening:   </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{OpDrBal}} </td>\r\n                                <td class=\"col-form-span-label\" align=\"right\">{{OpCrBal}} </td>                               \r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-form-span-label\" align=\"right\">Current Total:</td>\r\n                              <td  class=\"col-form-span-label\" align=\"right\">{{currTotalDr}}  </td>\r\n                              <td  class=\"col-form-span-label\" align=\"right\">{{currTotalcr}} </td>                           \r\n                            </tr>\r\n                              <tr>\r\n                                 <td class=\"col-form-span-label\" align=\"right\">Closing:  </td>\r\n                                 <td  class=\"col-form-span-label\" align=\"right\">{{CLDrBal}}  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{CLCrBal}} </td>\r\n                             </tr>\r\n                             <tr>\r\n                                <td class=\"col-form-span-label anchor-link\" (click)=\"AdvanceViewData()\" align=\"right\">Advance:  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{AdvCrAmt}}  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{AdvDrAmt}} </td>                                      \r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\"   *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n\r\n           \r\n            <div class=\"row  xyscroll\"  style=\"height: 480px;\">\r\n                <table class=\"table table-bordered table-sm-new table-striped table-hover\" >\r\n                    <thead>\r\n                        <tr class=\"title-head formheading table-primary\">\r\n                            <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Number</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Date</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Particulars</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">\tDebit</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Credit</th>                          \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"Searchdata_list.length > 0\">\r\n                        <tr *ngFor=\"let data of Searchdata_list\">\r\n                            <td  style=\"width: 30px;\"><span  class=\"col-form-span-label\" >{{data.TRANSTYPE}}</span> </td> \r\n                             <td  style=\"width: 60px;\"><span   class=\"col-form-span-label anchor-link \" (click)=\"Openprint(data.TRANSCODE,data.TRANSTYPE)\" >{{data.TRANSCODE}}</span> </td> \r\n                             <td  style=\"width: 60px;\"><span  class=\"col-form-span-label\">{{data.TRANSDATE}}</span> </td>\r\n                             <td  style=\"width:400px; \" class=\"col-form-span-label\">\r\n                               \r\n                                <p    style=\"white-space: pre-wrap;width: 400px; \" > {{data.NARR}}{{data.EXP_SNAME}}{{data.SUP_SNAME}} {{data.ACCTNAME}}</p>\r\n                               \r\n                                     \r\n                             </td> \r\n                            <td  style=\"width: 80px;\"><span class=\"col-form-span-label\">{{data.DRAMT}}</span>  </td>                             \r\n                            <td  style=\"width: 80px;\"><span class=\"col-form-span-label\">{{data.CRAMT}}</span>  </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                    <tr>\r\n                        <td colspan=\"4\" align=\"center\">\r\n                         \r\n                              <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithadv()\" > <span class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>Export To Excel </span></button>&nbsp;\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithcolums()\"> <span  class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i> Export To Excel Columnwise </span></button>&nbsp;\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ShowRemark()\"> <span class=\"col-form-span-label\"  ><i class=\"fa fa-ban\"></i>Add Remark</span></button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n    \r\n            </div>\r\n           \r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n      \r\n                      \r\n    </div>  \r\n</div>\r\n        \r\n                \r\n                       \r\n \r\n  <div class=\"modal\" [style.display]=\"showModal_Advance ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:800px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">   </div>\r\n            <div class=\"modal-body\">\r\n                <table class=\"table table-sm-new table-responsive-sm\" >\r\n                    <tr>\r\n                        <td colspan=\"6\" class=\"centerlabel\">   <strong>{{advheader}}</strong>  </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"6\" class=\"centerlabel\"> <strong> {{ClientName}}</strong>  </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"row\">\r\n                        <div class=\"col\" >\r\n                            <table align=\"right\" class=\"table  table-sm-new bgwhite\" style=\"width:150px\">\r\n                                <tr>\r\n                                    <td align=\"right\">  <span class=\"col-form-span-label\">Advance Total:</span>        </td>\r\n                                    <td>  <span  class=\"col-form-span-label\">{{AdvTotal}}</span>   </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                <thead>\r\n                                  <tr class=\"col-form-span-heading \">                                 \r\n                                    <th class=\"col-form-span-label\"></th>\r\n                                    <th class=\"col-form-span-label\">Number</th>\r\n                                    <th class=\"col-form-span-label\">Date</th>\r\n                                    <th class=\"col-form-span-label\">Particulars</th>\r\n                                    <th class=\"col-form-span-label\">Amount</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let data of AdvanceTable\">\r\n                                    <td class=\"col-form-span-label\">{{data.transtype}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transcode}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transdate}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.exp_sname}},{{data.sup_sname}},{{data.acctname}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.cramt}}</td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                              <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Print</span></button>\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"expt_exlwithadv()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> ExportToExcel</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"close()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                              aria-hidden=\"true\"></i> Close</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                             </table>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"modal\" [style.display]=\"showModal_Remark ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:465px; width:700px;overflow-x: auto;\">\r\n            <div class=\"modal-body\">\r\n                <div > <strong> Client Remark </strong>  </div>\r\n                <div class=\"form-group row d-flex justify-content-center \">\r\n                    <div > <strong> {{ClientName}}</strong> </div>\r\n                    <br>\r\n                    <div class=\"col-md-10\"> \r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n                                <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n                                <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n                                <td align=\"right\"><span class=\"col-form-span-label\">Current Total:</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{currTotalDr}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{currTotalcr}}</span></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                                <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                                <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>\r\n                                <td align=\"right\"><span class=\"col-form-span-label\">Advance:</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{AdvCrAmt}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{AdvDrAmt}}</span></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"row  d-flex justify-content-center\">  \r\n                            <select class=\"form-control\" [(ngModel)]=\"selectedToAdd\" (change)=\"FillRemark($event.target.value,$event)\"  multiple name=\"myselectoption2\"\r\n                            style=\"height: 200px;width:200px;margin-top:8px;\">\r\n                            <option [value]=\"item.remark\" *ngFor=\"let item of UserList\">{{item.entrydt}}</option>\r\n                            </select>                         \r\n                         </div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"row  d-flex justify-content-center\">\r\n                            <span class=\"col-form-span-label\"><b> {{lblRemark}}</b></span>\r\n                             <textarea rows=\"10\" cols=\"25\" class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"Remark\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                   <br>\r\n                   <div class=\"col-md-10\"> \r\n                    <div class=\"row  d-flex justify-content-center\">\r\n                       \r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disableAddbtn' (click)=\"AddRemark()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Add</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" [disabled]='disableCancelAddbtn' (click)=\"Clearctrl()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                          aria-hidden=\"true\"></i> Cancel</span></button>\r\n                         \r\n                    </div>\r\n                   </div>\r\n                 \r\n                    <div class=\"col-md-5\">\r\n                      \r\n                        <div class=\"row  d-flex justify-content-center\">  \r\n                            <span class=\"col-form-span-label\"><b> {{lblLastRemark}}</b></span>\r\n                            <select class=\"form-control\" [(ngModel)]=\"LastRemark\"  multiple name=\"myselectoption2\"\r\n                            style=\"height: 100px;width:400px;margin-top:8px;\">\r\n                            <option >{{LastRemark}}</option>\r\n                        </select>                         \r\n                   </div>\r\n                 </div>\r\n                </div>\r\n                <div class=\"col-md-12\"  style=\"text-align: right;\">\r\n                    <button   class=\"btn btn-sm btn-success\" (click)=\"UploadDoc()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                        aria-hidden=\"true\"></i> Upload Document</span></button>\r\n                    <button  class=\"btn btn-sm btn-danger\" (click)=\"closeRemark()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                        aria-hidden=\"true\"></i> Close</span></button>\r\n                </div>        \r\n         </div>\r\n           \r\n          \r\n        </div>\r\n    </div>\r\n</div> -->\r\n<div class=\"modal\" [style.display]=\"showModal_Remark ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:465px; width:700px;overflow-x: auto;\">\r\n            <div class=\"modal-body\">\r\n                <div > <strong> Client Remark </strong>  </div>\r\n                <div class=\"form-group row d-flex justify-content-center \">\r\n                  \r\n                    <div > <strong> {{ClientName}}</strong> </div>\r\n                 \r\n                    <br>\r\n                    <!-- <div class=\"col-md-12\">  -->\r\n                        <!-- <div class=\"row no-gutters\"   >\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n                                <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n                                <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n                                <td align=\"right\"><span class=\"col-form-span-label\">Current Total:</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{currTotalDr}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{currTotalcr}}</span></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                                <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                                <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>\r\n                                <td align=\"right\"><span class=\"col-form-span-label\">Advance:</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{AdvCrAmt}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{AdvDrAmt}}</span></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                        </div> -->\r\n                    <br>\r\n                    <div class=\"row no-gutters\"   >\r\n                        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                \r\n                    <!-- <div class=\"col-md-12\"> -->\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                            <tr>\r\n                                <td colspan=\"2\"> \r\n                                    <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                                        <tr>\r\n                                            <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n                                            <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n                                            <td align=\"right\"><span class=\"col-form-span-label\">Current Total:</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{currTotalDr}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{currTotalcr}}</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                                            <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>\r\n                                            <td align=\"right\"><span class=\"col-form-span-label\">Advance:</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{AdvCrAmt}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{AdvDrAmt}}</span></td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span style= \"min-height: 100px;display: inline-flex;  align-items: center; \"\r\n                                     class=\"col-form-span-label\"> Remark</span>\r\n                                </td>\r\n                                <td  align =\"left\" >\r\n                                 \r\n                                         <textarea rows=\"5\" cols=\"50\" class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"Remark\"></textarea>\r\n                              \r\n                                    </td>\r\n                                \r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"2\">\r\n                                    <div class=\"row  d-flex justify-content-center\">\r\n                        \r\n                                        <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disableAddbtn' (click)=\"AddRemark()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Add</span></button>\r\n                                        <button class=\"btn btn-sm btn-danger\" [disabled]='disableCancelAddbtn' (click)=\"Clearctrl()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                          aria-hidden=\"true\"></i> Cancel</span></button>\r\n                                         \r\n                                    </div> \r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                               <td colspan=\"2\">\r\n                        \r\n                           <div class=\"row  xyscroll\"  style=\"height: 200px;\">\r\n                            <table class=\"table table table-responsive-sm  table-bordered \" >\r\n                                <thead>\r\n                                    <tr class=\"title-head formheading table-primary\">\r\n                                        <th class=\"col-form-span-label\" align=\"center\">User Name</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Remark</th>                          \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"RemarkList.length > 0\">\r\n                                    <tr *ngFor=\"let data of RemarkList\">\r\n                                       \r\n                                        <td  style=\"width: 25%;\"><span class=\"col-form-span-label\" (click)=\"DisplayRemark(data.remark)\">{{data.entrydt}}</span>  </td>                             \r\n                                        <td  style=\"width: 75%;\" class=\"col-form-span-label\">\r\n                                        <p    style=\"white-space: pre-wrap;word-break:break-all;\" > {{data.remark}}</p>  </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                           \r\n                        </div>\r\n                       \r\n                               </td> \r\n                            </tr>\r\n                          <tr>\r\n                                <td colspan=\"2\">\r\n                                    <div class=\"col-md-12\"  style=\"text-align: right;\">\r\n                                        <button   class=\"btn btn-sm btn-success\" (click)=\"UploadDoc()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                            aria-hidden=\"true\"></i> Upload Document</span></button>\r\n                                        <button  class=\"btn btn-sm btn-danger\" (click)=\"closeRemark()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                            aria-hidden=\"true\"></i> Close</span></button>\r\n                                    </div>   \r\n                                </td>\r\n                            </tr> \r\n                        </table>  \r\n                    <!-- </div> -->\r\n                     </div>\r\n                     <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                    \r\n                </div> \r\n               \r\n      </div>\r\n</div>\r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/accounts/MisReport/ActFinalization/actfinalization-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/accounts/MisReport/ActFinalization/actfinalization-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ActFinalizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActFinalizationRoutingModule", function() { return ActFinalizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientwiseincome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientwiseincome.component */ "./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.ts");
/* harmony import */ var _clientsuppactwiseList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientsuppactwiseList.component */ "./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.ts");
/* harmony import */ var _genactstmt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genactstmt.component */ "./src/app/accounts/MisReport/ActFinalization/genactstmt.component.ts");
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
            title: 'Account Finalization'
        },
        children: [
            { path: ':Mode', component: _clientwiseincome_component__WEBPACK_IMPORTED_MODULE_2__["ClientwiseIncomeComponent"], data: { title: '' } },
            { path: 'act/CSList', component: _clientsuppactwiseList_component__WEBPACK_IMPORTED_MODULE_3__["ClientSupplierActWiseList"], data: { title: 'ActwiseList' } },
            { path: 'act/GenActAllBrach', component: _genactstmt_component__WEBPACK_IMPORTED_MODULE_4__["GenActStatementAllBranch"], data: { title: 'General ActStatement' } }
        ],
    }
];
var ActFinalizationRoutingModule = /** @class */ (function () {
    function ActFinalizationRoutingModule() {
    }
    ActFinalizationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ActFinalizationRoutingModule);
    return ActFinalizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/ActFinalization/actfinalization.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/accounts/MisReport/ActFinalization/actfinalization.module.ts ***!
  \******************************************************************************/
/*! exports provided: ActFinalizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActFinalizationModule", function() { return ActFinalizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _actfinalization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actfinalization-routing.module */ "./src/app/accounts/MisReport/ActFinalization/actfinalization-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _clientwiseincome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clientwiseincome.component */ "./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.ts");
/* harmony import */ var _clientsuppactwiseList_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clientsuppactwiseList.component */ "./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _genactstmt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./genactstmt.component */ "./src/app/accounts/MisReport/ActFinalization/genactstmt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ActFinalizationModule = /** @class */ (function () {
    function ActFinalizationModule() {
    }
    ActFinalizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_clientwiseincome_component__WEBPACK_IMPORTED_MODULE_8__["ClientwiseIncomeComponent"], _clientsuppactwiseList_component__WEBPACK_IMPORTED_MODULE_9__["ClientSupplierActWiseList"], _genactstmt_component__WEBPACK_IMPORTED_MODULE_11__["GenActStatementAllBranch"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _actfinalization_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActFinalizationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], ActFinalizationModule);
    return ActFinalizationModule;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ClientSupplierActWiseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSupplierActWiseList", function() { return ClientSupplierActWiseList; });
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









var ClientSupplierActWiseList = /** @class */ (function () {
    function ClientSupplierActWiseList(_dataService, _toasterService, loaderService, http, datePipe, _activatedRoute, _router, _loginService, exportser) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this.datePipe = datePipe;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.exportser = exportser;
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '20px',
            width: '130px',
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
        this.ClientList = [];
        this.DataList = [];
        this.dataForExcel = [];
    }
    ClientSupplierActWiseList.prototype.ngOnInit = function () {
        var _this = this;
        this.FillAccount();
        this.Header = "Client Supplier Account Wise List";
        this.FromDate = this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE; ///this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
        this.ToDate = new Date();
        this.ToDate = this._dataService.datechnge1(this.ToDate);
        var jsonmaster = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsonmaster).subscribe(function (data) {
            _this.cmpnyname = data.Table[0].cmp_name;
        });
        this._loginService.verifyRights(376, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
    };
    ClientSupplierActWiseList.prototype.FillAccount = function () {
        var _this = this;
        var jsonAccount = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/CMP_FillClient", jsonAccount)
            .subscribe(function (data) {
            _this.ClientList = data.Table;
        });
    };
    ClientSupplierActWiseList.prototype.GetAccountName = function (icode) {
        var updateItem = this.ClientList.find(function (item) { return item.acctcodename === icode; });
        this.ClientName = updateItem.acctname;
    };
    ClientSupplierActWiseList.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    ClientSupplierActWiseList.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    ClientSupplierActWiseList.prototype.ExportData = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonItem = {
            ClientCode: this.Client,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            FromDate: this.FromDate,
            ToDate: this.ToDate,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
        };
        this._dataService.getData("Accounts/ACC_RPT_CLIENT_OUTSTANDING_ALLCITY_ACCOUNT_WISE", jsonItem)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                _this.DataList = data.Table;
                _this.DataList.forEach(function (row) {
                    _this.dataForExcel.push(Object.values(row)); // array format push 
                });
                if (data.Table1[0].OPBAL > 0) {
                    _this.rptopbal = data.Table1[0].OPBAL + " Dr";
                }
                else {
                    _this.rptopbal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : Math.abs(data.Table1[0].OPBAL) + " Cr";
                }
                if (data.Table1[0].CLBAL > 0) {
                    _this.rptclbal = data.Table1[0].CLBAL + " Dr";
                }
                else {
                    _this.rptclbal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                }
                if (data.Table1[0].TLDR > 0) {
                    _this.rptcrtotdr = data.Table1[0].TLDR + " Dr";
                }
                else {
                    _this.rptcrtotdr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR) + "Dr";
                }
                if (data.Table1[0].TLCR > 0) {
                    _this.rptcrtotcr = data.Table1[0].TLCR + " Cr";
                }
                else {
                    _this.rptcrtotcr = (data.Table1[0].TLCR == "0.00") ? "" : Math.abs(data.Table1[0].TLCR);
                }
                if (data.Table2[0].ADVTOTALDR > 0) {
                    _this.rptadvtotdr = data.Table2[0].ADVTOTALDR;
                }
                else {
                    _this.rptadvtotdr = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALDR);
                }
                if (data.Table2[0].ADVTOTALCR > 0) {
                    _this.rptadvtotcr = data.Table2[0].ADVTOTALCR;
                }
                else {
                    _this.rptadvtotcr = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
                }
                var reportData = {
                    title: 'CLIENT OUTSTANDING ACCOUNTWISE LIST',
                    subtitle: ' ACCOUNT:- ' + _this.ClientName,
                    clntname: ' Period From:  ' + _this.FromDate + ' To ' + _this.ToDate,
                    data: _this.dataForExcel,
                    headers: Object.keys(_this.DataList[0]),
                    opbal: "Opening: " + _this.rptopbal,
                    currenttot: "Current Total : " + _this.rptcrtotdr + " " + _this.rptcrtotcr,
                    closing: "Closing : " + _this.rptclbal,
                    advance: "Advance : " + _this.rptadvtotdr + _this.rptadvtotcr,
                    pagetype: "ClSuppAcList"
                };
                _this.exportser.exportExceltry(reportData, 'CLIENTOUTSTANDING_ACCOUNTWISE');
                _this.dataForExcel = [];
            }
            else {
                _this._toasterService.toast("warning", "warning", "No Record Found !");
                _this.loaderService.display(false);
            }
        });
    };
    ClientSupplierActWiseList.ctorParameters = function () { return [
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
    ClientSupplierActWiseList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ClientSupplierActWiseList',
            template: __webpack_require__(/*! raw-loader!./clientsuppactwiseList.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ActFinalization/clientsuppactwiseList.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], ClientSupplierActWiseList);
    return ClientSupplierActWiseList;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClientwiseIncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientwiseIncomeComponent", function() { return ClientwiseIncomeComponent; });
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









var ClientwiseIncomeComponent = /** @class */ (function () {
    function ClientwiseIncomeComponent(_dataService, _toasterService, loaderService, http, datePipe, _activatedRoute, _router, _loginService, exportser) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this.datePipe = datePipe;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.exportser = exportser;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '130px',
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
        this.AccountList = [];
        this.IncomeTaxList = [];
        this.dataForExcel = [];
        this.displayType = 'SEARCH';
        this.Type = 'CODE';
        this.CITYCODE = "ALL";
    }
    ClientwiseIncomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.Mode = params["Mode"];
        });
        //   console.log(this._loginService.getLogin())
        this.CITYNAME = this._loginService.getLogin()[0].CITYNAME;
        if (this.Mode == "INCOME") {
            this.Header = "Clientwise Income Tax";
            this.PageType = "Clientwise Income Tax";
            this.verifyPermission('281', 'View');
        }
        else {
            this.Header = "Supplierwise Expense";
            this.PageType = "Supplierwise Expense";
            this.verifyPermission('380', 'View');
        }
        this.FillAccount();
        this.FromDate = this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE);
        this.ToDate = this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE);
        this.Ondate = new Date();
        this.Ondatetime = new Date();
        this.Ondate = this._dataService.datechnge1(this.Ondate);
        var jsonmaster = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsonmaster).subscribe(function (data) {
            _this.cmpnyname = data.Table[0].cmp_name;
        });
    };
    ClientwiseIncomeComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    ClientwiseIncomeComponent.prototype.FillAccount = function () {
        var _this = this;
        var jsonAccount = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/ACC_FILL_UNDERGROUP_ACCOUNTS", jsonAccount)
            .subscribe(function (data) {
            _this.AccountList = data.Table;
        });
    };
    ClientwiseIncomeComponent.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    ClientwiseIncomeComponent.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    ClientwiseIncomeComponent.prototype.ExportData = function () {
        var _this = this;
        if (this.CITYCODE == "ALL") {
            this.CITYCODE = "ALL";
        }
        else {
            this.CITYCODE = this._loginService.getLogin()[0].CITYCODE1;
        }
        if (this.Mode == "INCOME") {
            this.subtitletype = this.AccountName + ' Income from Client ';
            this.rptname = "Income from Client";
        }
        else {
            this.subtitletype = this.AccountName + ' Paid To Supplier ';
            this.rptname = 'Expenses Paid To Supplier ';
        }
        var jsonItem = {
            AccountCode: this.Account,
            FromDate: this.FromDate,
            ToDate: this.ToDate,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this.CITYCODE,
            mode: this.Mode
        };
        this._dataService.getData("Accounts/ACC_MIS_INCOME_TAX", jsonItem)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                _this.IncomeTaxList = data.Table;
                _this.IncomeTaxList.forEach(function (x) { delete x.CLIENTCODE; });
                _this.IncomeTaxList.forEach(function (x) { delete x.DR_AMOUNT; });
                _this.IncomeTaxList.forEach(function (x) { delete x.CR_AMOUNT; });
                _this.IncomeTaxList.forEach(function (row) {
                    _this.dataForExcel.push(Object.values(row)); // array format push 
                });
                var reportData = {
                    title: _this.cmpnyname,
                    subtitle: _this.subtitletype,
                    subtitle1: ' Account Name ' + _this.AccountName,
                    subtitle2: ' Timeline:  ' + _this.FromDate + ' - ' + _this.ToDate,
                    subtitle3: ' Report Generated by : ' + _this._loginService.getLogin()[0].FULLNAME,
                    subtitle4: ' Report Generate on  : ' + _this.Ondate + ' ' + _this.datePipe.transform(_this.Ondatetime, 'hh:mm'),
                    data: _this.dataForExcel,
                    headers: ['NAME', 'AMOUNT', 'CITY', 'ADDRESS', 'PANNO'],
                    pagetype: "ClientIncomeTax"
                };
                _this.exportser.exportExceltry(reportData, _this.rptname + "-" + _this.AccountName + "(" + _this.Account + ")");
                _this.dataForExcel = [];
            }
            else {
                _this._toasterService.toast("warning", "warning", "No Record Found !");
                _this.loaderService.display(false);
            }
        });
    };
    ClientwiseIncomeComponent.prototype.GetAccountName = function (icode) {
        var updateItem = this.AccountList.find(function (item) { return item.ACCTCODE === icode; });
        this.AccountName = updateItem.ACCTNAME;
    };
    ClientwiseIncomeComponent.ctorParameters = function () { return [
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
    ClientwiseIncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ClientwiseIncome',
            template: __webpack_require__(/*! raw-loader!./clientwiseincome.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ActFinalization/clientwiseincome.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], ClientwiseIncomeComponent);
    return ClientwiseIncomeComponent;
}());



/***/ }),

/***/ "./src/app/accounts/MisReport/ActFinalization/genactstmt.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/accounts/MisReport/ActFinalization/genactstmt.component.ts ***!
  \****************************************************************************/
/*! exports provided: GenActStatementAllBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenActStatementAllBranch", function() { return GenActStatementAllBranch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GenActStatementAllBranch = /** @class */ (function () {
    function GenActStatementAllBranch(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, modalService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.modalService = modalService;
        this._loaderService = _loaderService;
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '18px',
            width: '180px',
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
        this.RemarkList = [];
        this.ClientList = [];
        this.displayType = 'SEARCH';
        this.Searchdata_list = [];
        this.exceldata_list = [];
        this.advdata_list = [];
        this.searchHeaderText = "GENERAL ACCOUNT STATEMENT  FOR ALL CITY";
        this.dataForExcel = [];
        this.HeaderText = "GENERAL ACCOUNT STATEMENT  FOR ALL CITY";
        this.advdataForExcel = [];
        this.AdvanceTable = [];
        this.Status = "All";
        this.LastRemark = "";
        this.lblLastRemark = "Last Remark";
        this.UserList = [];
        this.showModal_Advance = false;
        this.showModal_Remark = false;
        this.disableAddbtn = false;
        this.disableCancelbtn = false;
        this.disableCancelAddbtn = false;
        this.advheaderlist = [];
        this.dataForExcelHead = [];
        this.advheaders = [];
        this.headers2 = [];
        this.strdtlist = [];
        this.disableNewbtn = false;
    }
    ;
    GenActStatementAllBranch.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.PageType = params["PageType"];
        });
        this.FromDate = new Date();
        this.FromDate = this._dataService.datechnge1(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE);
        this.ToDate = new Date();
        this.ToDate = this._dataService.datechnge1(this.ToDate);
        this.FillClient();
    };
    GenActStatementAllBranch.prototype.FillClient = function () {
        var _this = this;
        var jsonmaster = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/CMP_FillGenralAccount", jsonmaster)
            .subscribe(function (data) {
            _this.ClientList = data.Table;
            _this._loaderService.display(false);
        });
    };
    GenActStatementAllBranch.prototype.ShowOutstanding = function () {
        var _this = this;
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('error', 'Error', "Please select client from list !");
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            ClientCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            User_StartDate: this.FromDate,
            User_EndDate: this.ToDate,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        this._dataService.getData("Accounts/Acc_Rpt_ClientOutstandingALL_AllCITY_LIST", jsonmaster)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                _this.displayType = 'LIST';
                _this.Searchdata_list = data.Table;
                //this.exceldata_list = data.Table4;
                for (var i = 0; i < _this.Searchdata_list.length; i++) {
                    var obj = {
                        Type: _this.Searchdata_list[i].TRANSTYPE,
                        Number: _this.Searchdata_list[i].TRANSCODE,
                        Date: _this.Searchdata_list[i].TRANSDATE,
                        Particulars: _this.Searchdata_list[i].NARR + "," + _this.Searchdata_list[i].EXP_SNAME + "," + _this.Searchdata_list[i].SUP_SNAME + "," + _this.Searchdata_list[i].ACCTNAME,
                        Debit: _this.Searchdata_list[i].DRAMT,
                        Credit: _this.Searchdata_list[i].CRAMT
                    };
                    _this.exceldata_list.push(obj);
                }
                // this.Searchdata_list.forEach((row: any) => {
                //   this.dataForExcel.push(Object.values(row))
                //   });
                _this.exceldata_list.forEach(function (row) {
                    _this.dataForExcel.push(Object.values(row));
                });
                _this.searchHeaderText = "Account Statement From " + _this.FromDate + " To " + _this.ToDate;
                if (data.Table1[0].OPBAL > 0) {
                    _this.OpDrBal = data.Table1[0].OPBAL + " Dr";
                    _this.rptopbal = data.Table1[0].OPBAL + " Dr";
                }
                else {
                    _this.OpCrBal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : Math.abs(data.Table1[0].OPBAL) + " Cr";
                    _this.rptopbal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : Math.abs(data.Table1[0].OPBAL) + " Cr";
                }
                if (data.Table1[0].CLBAL > 0) {
                    _this.CLDrBal = data.Table1[0].CLBAL + " Dr";
                    _this.rptclbal = data.Table1[0].CLBAL + " Dr";
                }
                else {
                    _this.CLCrBal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                    _this.rptclbal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                }
                if (data.Table1[0].TLDR > 0) {
                    _this.currTotalDr = data.Table1[0].TLDR;
                    _this.rptcrtotdr = data.Table1[0].TLDR + " Dr";
                }
                else {
                    _this.currTotalDr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR);
                    _this.rptcrtotdr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR) + "Dr";
                }
                if (data.Table1[0].TLCR > 0) {
                    _this.currTotalcr = data.Table1[0].TLCR;
                    _this.rptcrtotcr = data.Table1[0].TLCR + " Cr";
                }
                else {
                    _this.currTotalcr = (data.Table1[0].TLCR == "0.00") ? "" : Math.abs(data.Table1[0].TLCR);
                    _this.rptcrtotcr = (data.Table1[0].TLCR == "0.00") ? "" : Math.abs(data.Table1[0].TLCR);
                }
                if (data.Table2[0].ADVTOTALDR > 0) {
                    _this.AdvDrAmt = data.Table2[0].ADVTOTALDR;
                    _this.rptadvtotdr = data.Table2[0].ADVTOTALDR;
                }
                else {
                    _this.AdvDrAmt = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALDR);
                    _this.rptadvtotdr = data.Table2[0].ADVTOTALDR;
                }
                if (data.Table2[0].ADVTOTALCR > 0) {
                    _this.AdvCrAmt = data.Table2[0].ADVTOTALCR;
                    _this.rptadvtotcr = data.Table2[0].ADVTOTALCR;
                }
                else {
                    _this.AdvCrAmt = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
                    _this.rptadvtotcr = data.Table2[0].ADVTOTALCR;
                }
                _this.getCompanyName();
                _this.getadvancedata();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('info', 'info', "No Data Found!");
                _this._loaderService.display(false);
            }
        });
    };
    GenActStatementAllBranch.prototype.GetClientName = function (clientcode) {
        var updateItem = this.ClientList.find(function (item) { return item.acctcodename === clientcode; });
        this.ClientName = updateItem.acctname;
        //  this.ClientName=event.target.options[event.target.options.selectedIndex].text///.split("|")[1];
    };
    GenActStatementAllBranch.prototype.expt_exlwithadv = function () {
        if (confirm('Click OK For With Advance Excel,\n CANCEL For Without Advance Excel')) {
            var reportData = {
                data: this.dataForExcel,
                advdata: this.advdataForExcel,
                headers: ["Type", "Number", 'Date', 'Particulars', "Debit", 'Credit'],
                advheaders: ["Type", "Number", "Particulars", "Amount"],
                pagetype: "AccountStatement",
                title: this.Compname,
                subtitle: "Account Statement All with All Branch From  " + this.FromDate + "  To " + this.ToDate,
                clntname: this.ClientName,
                opbal: "Opening: " + this.rptopbal,
                currenttot: "Current Total : " + this.rptcrtotdr + " " + this.rptcrtotcr,
                closing: "Closing : " + this.rptclbal,
                advance: "Advance : " + this.rptadvtotdr + this.rptadvtotcr
            };
            this.exportser.exportExceltry(reportData, "Account_StatementAll_With_AllBranch_With_Adv_");
            //this.dataForExcel=[];
        }
        else {
            return false;
        }
    };
    GenActStatementAllBranch.prototype.getCompanyName = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsoncmp)
            .subscribe(function (data) {
            _this.Compname = data.Table[0].cmp_name;
            _this.loaderService.display(false);
        });
    };
    GenActStatementAllBranch.prototype.getadvancedata = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonadv = {
            ClCode: this.Client,
            FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.FromDate,
            ENDDATE: this.ToDate
        };
        var jsonadvall = {
            ClCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.FromDate,
            ENDDATE: this.ToDate
        };
        if (this.Status == "All") {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_GetAll", jsonadvall)
                .subscribe(function (data) {
                _this.advdata_list = data.Table;
                for (var i = 0; i < _this.advdata_list.length; i++) {
                    var obj = {
                        Type: _this.advdata_list[i].transtype,
                        Number: _this.advdata_list[i].Transcode,
                        Particulars: _this.advdata_list[i].exp_sname + "," + _this.advdata_list[i].sup_sname + "," + _this.advdata_list[i].acctname,
                        Amount: _this.advdata_list[i].cramt
                    };
                    _this.advheaderlist.push(obj);
                }
                _this.advheaderlist.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                //   this.advdata_list.forEach((row: any) => {
                //   this.advdataForExcel.push(Object.values(row))
                //     });
                _this.loaderService.display(false);
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                .subscribe(function (data) {
                _this.advdata_list = data.Table;
                // this.advdata_list.forEach((row: any) => {
                //   this.advdataForExcel.push(Object.values(row))
                //   });
                for (var i = 0; i < _this.advdata_list.length; i++) {
                    var obj = {
                        Type: _this.advdata_list[i].transtype,
                        Number: _this.advdata_list[i].Transcode,
                        Particulars: _this.advdata_list[i].exp_sname + "," + _this.advdata_list[i].sup_sname + "," + _this.advdata_list[i].acctname,
                        Amount: _this.advdata_list[i].cramt
                    };
                    _this.advheaderlist.push(obj);
                }
                _this.advheaderlist.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                _this.loaderService.display(false);
            });
        }
    };
    GenActStatementAllBranch.prototype.AdvanceViewData = function () {
        var _this = this;
        this.showModal_Advance = true;
        this.advheader = "Account Statement for Advance From " + this.FromDate + " To " + this.ToDate,
            this.loaderService.display(true);
        var jsonadv = {
            ClCode: this.Client,
            FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.FromDate,
            ENDDATE: this.ToDate
        };
        var jsonadvall = {
            ClCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.FromDate,
            ENDDATE: this.ToDate
        };
        if (this.Status == "All") {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_GetAll", jsonadvall)
                .subscribe(function (data) {
                _this.AdvanceTable = data.Table;
                // for (var i = 0; i < this.AdvanceTable.length; i++) {
                //   let obj = {
                //     Type: this.AdvanceTable[i].transtype,
                //     Number:this.AdvanceTable[i].Transcode,
                //     Particulars:this.AdvanceTable[i].exp_sname + "," + this.AdvanceTable[i].sup_sname + "," + this.AdvanceTable[i].acctname,
                //     Amount:this.AdvanceTable[i].cramt
                // }
                //   this.advheaderlist.push(obj);
                // }
                // this.advheaderlist.forEach((row: any) => {
                //   this.advdataForExcel.push(Object.values(row))
                //   });
                _this.AdvTotal = data.Table1[0].totcramt;
                _this.loaderService.display(false);
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                .subscribe(function (data) {
                _this.AdvanceTable = data.Table;
                //   for (var i = 0; i < this.AdvanceTable.length; i++) {
                //     let obj = {
                //       Type: this.AdvanceTable[i].transtype,
                //       Number:this.AdvanceTable[i].Transcode,
                //       Particulars:this.AdvanceTable[i].exp_sname + "," + this.AdvanceTable[i].sup_sname + "," + this.AdvanceTable[i].acctname,
                //       Amount:this.AdvanceTable[i].cramt
                //   }
                //     this.advheaderlist.push(obj);
                //   }
                //   this.advheaderlist.forEach((row: any) => {
                //     this.advdataForExcel.push(Object.values(row))
                //     });
                _this.AdvTotal = data.Table1[0].totcramt;
                _this.loaderService.display(false);
            });
        }
    };
    GenActStatementAllBranch.prototype.close = function () { this.showModal_Advance = false; };
    GenActStatementAllBranch.prototype.Print = function () {
        var frdt = this.FromDate.replace('/', '-');
        var todt = this.ToDate.replace('/', '-');
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('././#/popup/Account-actstatement-AdvancePrint/' + this.Client + '/' + this.ClientName + '/' + frdt.replace('/', '-') + '/' + todt.replace('/', '-') + '/' + this.Status + '/', "Print View", toolbar);
    };
    GenActStatementAllBranch.prototype.ShowRemark = function () {
        var _this = this;
        this.showModal_Remark = true;
        this.Remark == "";
        var jsonremark = {
            ClCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_ClientOutstandingList_Remark_Get", jsonremark)
            .subscribe(function (data) {
            _this.UserList = data.Table;
            _this.RemarkList = data.Table;
            _this.LastRemark = data.Table1[0].LastRemark;
            _this.lblLastRemark = data.Table1[0].entrydt;
        });
        this.loaderService.display(false);
    };
    GenActStatementAllBranch.prototype.DisplayRemark = function (rem) {
        this.Remark = rem;
    };
    GenActStatementAllBranch.prototype.FillRemark = function (id, event) {
        this.lblRemark = event.target.options[event.target.options.selectedIndex].text;
        this.Remark = this.selectedToAdd;
        this.disableAddbtn = true;
        this.disableCancelbtn = true;
    };
    GenActStatementAllBranch.prototype.closeRemark = function () { this.showModal_Remark = false; };
    GenActStatementAllBranch.prototype.AddRemark = function () {
        var _this = this;
        this.showModal_Remark = true;
        if (this.Remark == "") {
            this._toasterService.toast('info', 'info', 'Please Enter the Remark !');
            return false;
        }
        var jsonadd = {
            Remark: this.Remark,
            ClCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            UserName: this._loginService.getLogin()[0].CMP_USERNAME
        };
        this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_ClientOutstandingList_Remark_Add", jsonadd)
            .subscribe(function (data) {
            _this._toasterService.toast('success', 'success', "Remark Added Successfully");
            _this.ShowRemark();
            _this.RemarkList = data.Table;
        });
        this.loaderService.display(false);
    };
    GenActStatementAllBranch.prototype.EnableAddCancel = function () {
        this.lblRemark = "";
        this.Remark = "";
        this.disableAddbtn = false;
        this.disableCancelbtn = false;
        this.disableNewbtn = true;
    };
    GenActStatementAllBranch.prototype.Clearctrl = function () {
        this.lblRemark = "";
        this.Remark = "";
        this.disableAddbtn = false;
        this.disableCancelbtn = true;
        //this.disableNewbtn=false;
    };
    GenActStatementAllBranch.prototype.expt_exlwithcolums = function () {
        var _this = this;
        //  this.ShowExcelData();
        this.loaderService.display(true);
        var jsonmaster = {
            ClientCode: this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            User_StartDate: this.FromDate,
            User_EndDate: this.ToDate,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmpname: this._loginService.getLogin()[0].CMPNAME,
            subhead1: this.ClientName,
        };
        // console.log(jsonmaster)
        this._dataService.getDownload("Accounts/Acc_Rpt_ClientOutstandingList_Get_AllCITY", jsonmaster, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.commonDownloadExcelFile(data, "Accounts StatementAll With AllCity_" + _this.Client + ".xls");
            _this._loaderService.display(false);
        });
    };
    GenActStatementAllBranch.prototype.Openprint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print and Cancel to Edit')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-print/' + No + '/' + Type + '/', "PI Print", toolbar);
            }
            else if (Type == "JV") {
                return false;
            }
            else if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-Print/' + No + '/', "CN Print", toolbar);
            }
            else if (Type == "II") {
                //  window.open('./#/popup/Account-Invoice-print/' + No + '/' , "INV Print", toolbar);   
                var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                    "huhpnk=" + this._loginService.getLogin()[0].GUID
                    + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                    + "&Userid=" + this._loginService.getLogin()[0].CMPID
                    + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                    + "&InvoiceNo=" + No
                    + "&DisplayMode=" + "0"
                    + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
                window.open(URL_1, "Invoice Print", toolbar);
                return false;
            }
            else if (Type == "SI") {
                return false;
            }
            else if (Type == "BI") {
                return false;
            }
            else {
                window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/', "BR Print", toolbar);
            }
        }
        else {
            if (Type == "JV") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]);
            }
            if (Type == "BR") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]);
            }
            if (Type == "BP") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]);
            }
            if (Type == "SI") {
                return false;
            }
            if (Type == "II") {
                return false;
            }
            if (Type == "PI") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]);
            }
            return false;
        }
    };
    GenActStatementAllBranch.prototype.UploadDoc = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('http://109.15.43.138/EDocument/UI/Accounts/frm_Acc_Search_Client_Outstanding.aspx?huhpnk=' + this._loginService.getLogin()[0].CMP_USERENCCODE + '/' + this.Client + '/' + this.ClientName + '/', "Print View", toolbar);
    };
    GenActStatementAllBranch.prototype.Clear = function () {
        this.FromDate = "";
        this.ToDate = "";
    };
    GenActStatementAllBranch.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    GenActStatementAllBranch.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    GenActStatementAllBranch.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Advance', { static: false }),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"])
    ], GenActStatementAllBranch.prototype, "Advancemodel", void 0);
    GenActStatementAllBranch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genactstatement',
            template: __webpack_require__(/*! raw-loader!./genactstmt.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/MisReport/ActFinalization/genactstmt.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], GenActStatementAllBranch);
    return GenActStatementAllBranch;
}());



/***/ })

}]);
//# sourceMappingURL=ActFinalization-actfinalization-module.js.map