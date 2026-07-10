(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accountstatement-accountstatement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\" >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                         <div class=\"col-sm-12\">\r\n                            <strong>{{searchHeaderText}}</strong>\r\n                        </div>  \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>{{PageName}}</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Client Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                       \r\n                            <td  colspan=\"3\" >\r\n                                 \r\n                                <ng-select [items]=\"ClientList\" bindLabel=\"acctname\"\r\n                                bindValue=\"acctcodename\" (ngModelChange)=\"GetClientName($event)\"\r\n                                [(ngModel)]=\"Client\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                            </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n                     \r\n                    <td><span class=\"col-form-span-label\"><b>From Date</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                    <td>              \r\n                        <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  (dateChanged)=\"FromDateChanged($event)\" [selDate]=\"FromDate\"    ></my-date-picker>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td>              \r\n                        <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  (dateChanged)=\"ToDateChanged($event)\" [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n        \r\n\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ShowOutstanding()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Search List</span></button>&nbsp;\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithcolums()\"> <span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                    Export To Excel Columnwise </span></button>&nbsp;\r\n                        <!-- <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"clear();\"><i class=\"fa fa-ban\"></i>Clear</span></button> -->\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr align=\"right\" class=\"title-head formheading\">\r\n                    <td colspan=\"8\" >\r\n                  <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';Searchdata_list=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"title-head formheading table-primary\">\r\n                    <td colspan=\"12\" class=\"centerlabel\">\r\n                        <strong>{{searchHeaderText}}</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"title-head formheading table-primary\">\r\n                    <td colspan=\"12\" class=\"centerlabel\">\r\n                        <strong> {{ClientName}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td align=\"right\">\r\n                        <table  class=\"table table-bordered table-sm-new bgwhite\" style=\"width:300px\">             \r\n                 \r\n                            <tr>\r\n                                <td class=\"col-form-span-label\" align=\"left\">Opening:   </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{OpDrBal|number:'2.2-4'}} Dr </td>\r\n                                <td class=\"col-form-span-label\" align=\"right\">{{OpCrBal|number:'2.2-4'}} </td>                               \r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-form-span-label\" align=\"right\">Current Total:</td>\r\n                              <td  class=\"col-form-span-label\" align=\"right\">{{currTotalDr|number:'2.2-4'}}  </td>\r\n                              <td  class=\"col-form-span-label\" align=\"right\">{{currTotalcr|number:'2.2-4'}} </td>                           \r\n                            </tr>\r\n                              <tr>\r\n                                 <td class=\"col-form-span-label\" align=\"right\">Closing:  </td>\r\n                                 <td  class=\"col-form-span-label\" align=\"right\">{{CLDrBal}}  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{CLCrBal}} </td>\r\n                             </tr>\r\n                             <tr>\r\n                                <td class=\"col-form-span-label anchor-link\" (click)=\"AdvanceViewData()\" align=\"right\">Advance:  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{AdvCrAmt|number:'2.2-4'}}  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{AdvDrAmt}} </td>                                      \r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\"   *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n\r\n           \r\n            <div class=\"row  xyscroll\"  style=\"height: 370px;\">\r\n                <!-- <table class=\"table table-bordered table-sm-new table-striped table-hover\" > -->\r\n                    \r\n                    <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                    <thead>\r\n                        <tr class=\"title-head formheading table-primary\">\r\n                            <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Number</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Date</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Particulars</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">\tDebit</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Credit</th>                          \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"Searchdata_list.length > 0\">\r\n                        <tr *ngFor=\"let data of Searchdata_list\">\r\n                            <td  style=\"width: 30px;\"><span  class=\"col-form-span-label\" >{{data.TRANSTYPE}}</span> </td> \r\n                             <td  style=\"width: 130px;\"><span   class=\"col-form-span-label anchor-link \" (click)=\"Openprint(data.TRANSCODE,data.TRANSTYPE)\" >{{data.TRANSCODE}}</span> </td> \r\n                             <td  style=\"width: 90px;\"><span  class=\"col-form-span-label\">{{data.TRANSDATE}}</span> </td>\r\n                             <td  style=\"width:200px; \" class=\"col-form-span-label\">\r\n                               \r\n                                <p    style=\"white-space: pre-wrap;width: 400px; \" > {{data.NARR}}{{data.EXP_SNAME}}{{data.SUP_SNAME}} {{data.ACCTNAME}}</p>\r\n                               \r\n                                     \r\n                             </td> \r\n                            <td  style=\"width: 100px;\"align=\"right\"><span class=\"col-form-span-label\" align=\"right\">{{data.DRAMT|number:'2.2-4'}}</span>  </td>                             \r\n                            <td  style=\"width: 100px;\"align=\"right\"><span class=\"col-form-span-label\" align=\"right\">{{data.CRAMT|number:'2.2-4'}}</span>  </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                <tr>\r\n                    <td colspan=\"4\" align=\"center\">\r\n                        <!-- <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Print</span></button>\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"expt_exlwithadv()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> ExportToExcel</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"close()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                          aria-hidden=\"true\"></i> Close</span></button> -->\r\n                          <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithadv()\" > <span class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>Export To Excel </span></button>&nbsp;\r\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithcolums()\"> <span  class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i> Export To Excel Columnwise </span></button>&nbsp;\r\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ShowRemark()\"> <span class=\"col-form-span-label\"  ><i class=\"fa fa-ban\"></i>Add Remark</span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n      \r\n                      \r\n    </div>  \r\n</div>       \r\n               \r\n\r\n \r\n  <div class=\"modal\" [style.display]=\"showModal_Advance ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:800px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">   </div>\r\n            <div class=\"modal-body\">\r\n                <table class=\"table table-sm-new table-responsive-sm\" >\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                        <td colspan=\"6\" class=\"centerlabel\">   <strong>{{advheader}}</strong>  </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"6\" class=\"centerlabel\"> <strong> {{ClientName}}</strong>  </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"row\">\r\n                        <div class=\"col\" >\r\n                            <table align=\"right\" class=\"table  table-sm-new bgwhite\" style=\"width:150px\">\r\n                                <tr>\r\n                                    <td align=\"right\">  <span class=\"col-form-span-label\">Advance Total:</span>        </td>\r\n                                    <td>  <span  class=\"col-form-span-label\">{{AdvTotal}}</span>   </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                <thead>\r\n                                  <tr class=\"col-form-span-heading \">                                 \r\n                                    <th class=\"col-form-span-label\"></th>\r\n                                    <th class=\"col-form-span-label\">Number</th>\r\n                                    <th class=\"col-form-span-label\">Date</th>\r\n                                    <th class=\"col-form-span-label\">Particulars</th>\r\n                                    <th class=\"col-form-span-label\">Amount</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let data of AdvanceTable\">\r\n                                    <td class=\"col-form-span-label\">{{data.transtype}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transcode}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transdate}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.exp_sname}},{{data.sup_sname}},{{data.acctname}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.cramt}}</td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                              <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Print</span></button>\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"expt_exlwithadv()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> ExportToExcel</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"close()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                              aria-hidden=\"true\"></i> Close</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                             </table>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n    <div class=\"modal\" [style.display]=\"showModal_Remark ? 'block' : 'none'\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n            <div class=\"modal-content \" style=\"height:465px; width:700px;overflow-x: auto;\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row no-gutters\">\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                    <div class=\"form-group row d-flex justify-content-center \"> <strong> Client Remark </strong>  </div></div>\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                    <div class=\"form-group row d-flex justify-content-center \"> <strong>  {{ClientName}}</strong>  </div></div>\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                </div>\r\n                    <div class=\"form-group row d-flex justify-content-center \">\r\n                    \r\n                        <!-- <div > <strong> {{ClientName}}</strong> </div> -->\r\n                            <br>\r\n                            <br>\r\n                        <div class=\"row no-gutters\"   >\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                    \r\n                        \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"width:500px ;\"> \r\n                                <tr>\r\n                                    <td colspan=\"2\"> \r\n                                        <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                                            <tr>\r\n                                                <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n                                                <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n                                                <td align=\"right\"><span class=\"col-form-span-label\">Current Total:</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{currTotalDr}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{currTotalcr}}</span></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                                                <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>\r\n                                                <td align=\"right\"><span class=\"col-form-span-label\">Advance:</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{AdvCrAmt}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{AdvDrAmt}}</span></td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span style= \"min-height: 100px;display: inline-flex;  align-items: center; \"\r\n                                         class=\"col-form-span-label\"> Remark</span>\r\n                                    </td>\r\n                                    <td  align =\"left\" >\r\n                                     \r\n                                             <textarea rows=\"5\" cols=\"50\" class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"Remark\"></textarea>\r\n                                  \r\n                                        </td>\r\n                                    \r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <div class=\"row  d-flex justify-content-center\">\r\n                            \r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disableAddbtn' (click)=\"AddRemark()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Add</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" [disabled]='disableCancelAddbtn' (click)=\"Clearctrl()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                              aria-hidden=\"true\"></i> Cancel</span></button>\r\n                                             \r\n                                        </div> \r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                   <td colspan=\"2\">\r\n                            \r\n                               <div class=\"row  xyscroll\"  style=\"height: 200px;\">\r\n                                <table class=\"table table table-responsive-sm  table-bordered \" >\r\n                                    <thead>\r\n                                        <tr class=\"title-head formheading table-primary\">\r\n                                            <th class=\"col-form-span-label\" align=\"center\">User Name</th>\r\n                                            <th class=\"col-form-span-label\" align=\"center\">Remark</th>                          \r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody >\r\n                                        <tr *ngFor=\"let data of RemarkList\">\r\n                                            <td  style=\"width: 25%;\"><span class=\"col-form-span-label\" (click)=\"DisplayRemark(data.remark)\">{{data.entrydt}}</span>  </td>                             \r\n                                            <td  style=\"width: 75%;\" class=\"col-form-span-label\">\r\n                                            <p    style=\"white-space: pre-wrap;word-break:break-all;\" > {{data.remark}}</p>  </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                               \r\n                            </div>\r\n                           \r\n                                   </td> \r\n                                </tr>\r\n                              <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <div class=\"col-md-12\"  style=\"text-align: right;\">\r\n                                            <button   class=\"btn btn-sm btn-success\" (click)=\"UploadDoc()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                                aria-hidden=\"true\"></i> Upload Document</span></button>\r\n                                            <button  class=\"btn btn-sm btn-danger\" (click)=\"closeRemark()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                                aria-hidden=\"true\"></i> Close</span></button>\r\n                                        </div>   \r\n                                    </td>\r\n                                </tr> \r\n                            </table>  \r\n                        <!-- </div> -->\r\n                         </div>\r\n                         <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                        </div>\r\n                        \r\n                    </div> \r\n                   \r\n          </div>\r\n    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n    </div>\r\n    \r\n</div>   \r\n<!-- <div class=\"modal\" [style.display]=\"showModal_Remark ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:800px;overflow-x: auto;\">\r\n         <div class=\"modal-body\">\r\n                <div > <strong> Client Remark </strong>  </div>\r\n                <div class=\"form-group row d-flex justify-content-center \">\r\n                    <div > <strong> {{ClientName}}</strong> </div>\r\n                    <br>\r\n                    <div class=\"col-md-10\"> \r\n                        <table class=\"table table-sm-new table-responsive-sm table-bordered\"> \r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n                                <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n                                <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n                                <td align=\"right\"><span class=\"col-form-span-label\">Current Total:</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{currTotalDr}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{currTotalcr}}</span></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                                <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                                <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>\r\n                                <td align=\"right\"><span class=\"col-form-span-label\">Advance:</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{AdvCrAmt}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{AdvDrAmt}}</span></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"row  d-flex justify-content-center\">                           \r\n                             <select class=\"form-control \" [(ngModel)]=\"selectedToAdd\"  (change)=\"FillRemark($event)\" multiple name=\"myselectoption1\"\r\n                            style=\"height: 250px;width:200px;margin-top:8px;\">\r\n                            <option *ngFor=\"let item of UserList\"                                \r\n                                 value={{item.remark}}>{{item.entrydt}}</option> >\r\n                        </select>                        \r\n                        </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"row  d-flex justify-content-center\">\r\n                            <span class=\"col-form-span-label\"><b> {{lblRemark}}</b></span>\r\n                             <textarea rows=\"5\" cols=\"25\" class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"Remark\"></textarea>\r\n                        </div>\r\n                        <br>\r\n                        <div>\r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disableNewbtn' (click)=\"EnableAddCancel()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> New</span></button>\r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disableAddbtn' (click)=\"AddRemark()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Add</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" [disabled]='disableCancelAddbtn' (click)=\"Clearctrl()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                              aria-hidden=\"true\"></i> Cancel</span></button>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"row  d-flex justify-content-center\">\r\n                            <span class=\"col-form-span-label\"><b> {{lblLastRemark}}</b></span>\r\n                            <textarea rows=\"5\" cols=\"25\" class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"LastRemark\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n         </div>\r\n            <div class=\"row  d-flex justify-content-center\">\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"closeRemark()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                    aria-hidden=\"true\"></i> Close</span></button>\r\n            </div>\r\n          \r\n        </div>\r\n    </div>\r\n</div> -->\r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n    <div class=\"col-sm-7\">\r\n         <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\" colspan=\"4\">\r\n                    <b> CLIENT FOLLOWUP STATUS </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"150px\"><span class=\"col-form-span-label\"><b>Client Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n\r\n                    <ng-select [items]=\"ClientNameList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                    [(ngModel)]=\"ClientName\" (change)=\"GetFollowupdtls($event.VALUEFIELD)\" class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n                <td width=\"150px\"><span  class=\"col-form-span-label\"><b>Followup Assigned To</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\" >  <input [(ngModel)]=\"AssignedTo\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n             \r\n\r\n                </tr>\r\n             <tr>\r\n                <td width=\"150px\"><span class=\"col-form-span-label\"><b>Client Status</b> </span></td>\r\n                <td colspan=\"3\">  <input [(ngModel)]=\"ClStatus\" type=\"text\"  class=\"form-control\"  > </td>\r\n             </tr>\r\n\r\n\r\n            <!-- <tr>\r\n                <td width=\"150px\"><span class=\"col-form-span-label\"><b>Assigned On</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n               <td colspan=\"3\">\r\n                   <my-date-picker name=\"AssignedDate\"   [options]=\"myDatePickerOptions\" [(ngModel)]=\"AssignedDate\"></my-date-picker> \r\n                  \r\n                </td>\r\n            \r\n            </tr> -->\r\n            <tr>\r\n                <td class=\"width150\"><span class=\"col-form-span-label\">Assigned On</span></td>\r\n                <!-- <td>\r\n                    <span class=\"col-form-span-label\">{{AssignedDate}}</span>\r\n                </td>\r\n                <td ><span class=\"col-form-span-label\">{{formData.ASSIGNDT.text}}</span></td> -->\r\n                <td>\r\n                    <div class=\"row\">\r\n                        <my-date-picker name=\"SurrenderedDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"formData.ASSIGNDT.main\"\r\n                            (ngModelChange)=\"setTime('ASSIGNDT','main')\"></my-date-picker>\r\n                        <input type=\"text\" class=\"form-control width30\" placeholder=\"hh\" [(ngModel)]=\"formData.ASSIGNDT.hour\"\r\n                            maxlength=\"2\" [OnlyNumber]=\"true\" (ngModelChange)=\"restrictHour01to24number('ASSIGNDT')\" />:\r\n                        <input type=\"text\" class=\"form-control width30\" placeholder=\"mm\" [(ngModel)]=\"formData.ASSIGNDT.minute\"\r\n                            maxlength=\"2\" [OnlyNumber]=\"true\" (ngModelChange)=\"restrictMinute00to60number('ASSIGNDT')\" />\r\n                    </div>\r\n                </td>\r\n            </tr> \r\n            <tr>\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </td>\r\n            </tr>\r\n          \r\n\r\n        <tr>\r\n             <td colspan=\"4\" >\r\n                <div class=\"row xyscroll\"    > \r\n                    <table class=\"table table-responsive-sm table-bordered\"  *ngIf=\"clntflpList.length>0\" >\r\n                        <thead>\r\n                            <tr class=\"bakgrdliteBlue\">\r\n                             \r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Client Name</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Assigned To</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Client Status</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Assigned On</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Assigned By</th>\r\n                            </tr>\r\n                        </thead>\r\n                         <tbody  >\r\n                            <tr *ngFor=\"let obj of clntflpList\">\r\n                            \r\n                               <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.EXP_NAME\"> </span></td>\r\n                               <td><span class=\"col-form-span-label\">{{obj.FOLLOW_ASSIGNTO}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.CLIENT_STATUS}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ASSIGN_ON}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ASSIGN_BY}}</span></td>\r\n                             \r\n                            </tr>\r\n                        </tbody>  \r\n                    </table>\r\n               </div> \r\n             </td>\r\n        </tr>\r\n        \r\n    </table>   \r\n    </div>\r\n\r\n\r\n    <div class=\"col-sm-2\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\" >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                         <div class=\"col-sm-12\">\r\n                            <strong>{{searchHeaderText}}</strong>\r\n                        </div>  \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>{{PageName}}</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Client Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                       \r\n                            <td  colspan=\"3\" >\r\n                                 \r\n                                <ng-select [items]=\"ClientList\" bindLabel=\"ACCTNAME\"\r\n                                bindValue=\"ACCTCODENAME\" (ngModelChange)=\"GetClientName($event)\"\r\n                                [(ngModel)]=\"Client\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                            </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n                     \r\n                    <td><span class=\"col-form-span-label\"><b>From Date</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                    <td>              \r\n                        <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"FromDateChanged($event)\"\r\n                            class=\"form-control\"  [selDate]=\"FromDate\"    ></my-date-picker>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td>              \r\n                        <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"ToDateChanged($event)\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n        \r\n\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"Showdata()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>\r\n                                Print</span></button>&nbsp;\r\n                               \r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"clear();\"><i class=\"fa fa-ban\"></i>Clear</span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr align=\"right\" class=\"title-head formheading\">\r\n                    <td colspan=\"8\" >\r\n                  <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';dataList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"12\" class=\"centerlabel\">\r\n                        <strong>{{searchHeaderText}}</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"12\" class=\"centerlabel\">\r\n                        <strong> {{ClientName}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td align=\"right\">\r\n                        <table  class=\"table table-bordered table-sm-new bgwhite\" style=\"width:300px\">             \r\n                 \r\n                            <tr>\r\n                                <td class=\"col-form-span-label\" align=\"left\">Opening:   </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{OpDrBal}} </td>\r\n                                <td class=\"col-form-span-label\" align=\"right\">{{OpCrBal}} </td>                               \r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-form-span-label\" align=\"right\">Current Total:</td>\r\n                              <td  class=\"col-form-span-label\" align=\"right\">{{currTotalDr}}  </td>\r\n                              <td  class=\"col-form-span-label\" align=\"right\">{{currTotalcr}} </td>                           \r\n                            </tr>\r\n                              <tr>\r\n                                 <td class=\"col-form-span-label\" align=\"right\">Closing:  </td>\r\n                                 <td  class=\"col-form-span-label\" align=\"right\">{{CLDrBal}}  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{CLCrBal}} </td>\r\n                             </tr>\r\n                             <tr>\r\n                                <td class=\"col-form-span-label anchor-link\" (click)=\"AdvanceViewData()\" align=\"right\">Advance:  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{AdvCrAmt}}  </td>\r\n                                <td  class=\"col-form-span-label\" align=\"right\">{{AdvDrAmt}} </td>                                      \r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\"   *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n\r\n           \r\n            <div class=\"row  xyscroll\"  style=\"height: 300px;\">\r\n                <table class=\"table table-bordered table-sm-new table-striped table-hover\" >\r\n                    <thead>\r\n                        <tr class=\"title-head formheading table-primary\">\r\n                            <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Number</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Date</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Particulars</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">\tDebit</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Credit</th>                          \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"dataList.length > 0\">\r\n                        <tr *ngFor=\"let data of dataList\" >\r\n                            <td  style=\"width: 30px;\"><span  class=\"col-form-span-label\" >{{data.TRANSTYPE}}</span> </td> \r\n                             <td  style=\"width: 130px;\"><span   class=\"col-form-span-label anchor-link \" (click)=\"Openprint(data.TRANSCODE,data.TRANSTYPE)\" >{{data.TRANSCODE}}</span> </td> \r\n                             <td  style=\"width: 90px;\"><span  class=\"col-form-span-label\">{{data.TRANSDATE}}</span> </td>\r\n                             <td  style=\"width:200px; \" class=\"col-form-span-label\">\r\n                               \r\n                                <p    style=\"white-space: pre-wrap;width: 400px; \" > {{data.NARR}}{{data.EXP_SNAME}}{{data.SUP_SNAME}} {{data.ACCTNAME}}</p>\r\n                               \r\n                                     \r\n                             </td> \r\n                            <td  style=\"width: 100px;\"><span class=\"col-form-span-label\">{{data.DRAMT|number:'2.2-4'}}</span>  </td>                             \r\n                            <td  style=\"width: 100px;\"><span class=\"col-form-span-label\">{{data.CRAMT|number:'2.2-4'}}</span>  </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n              \r\n    \r\n            </div>\r\n           <table class=\"table table-bordered table-sm-new bgwhite \">\r\n            <tr>\r\n                <td colspan=\"4\" align=\"center\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Print</span></button>\r\n                    <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"expt_exlwithadv()\" > <span class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>Export To Excel </span></button>\r\n                    <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"EmailToClient()\"> <span  class=\"col-form-span-label\"><i class=\"fa fa-envelope\"></i> Email To Client</span></button>\r\n                     <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ShowRemark()\"> <span class=\"col-form-span-label\"  ><i class=\"fa fa-plus\"></i>Add Remark</span></button>\r\n                </td>\r\n            </tr>\r\n           </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n\r\n    </div>  \r\n     \r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_Advance ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:800px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">   </div>\r\n            <div class=\"modal-body\">\r\n                <table class=\"table table-sm-new table-responsive-sm\" >\r\n                    <tr>\r\n                        <td colspan=\"6\" class=\"centerlabel\">   <strong>{{advheader}}</strong>  </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"6\" class=\"centerlabel\"> <strong> {{ClientName}}</strong>  </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"row\">\r\n                        <div class=\"col\" >\r\n                            <table align=\"right\" class=\"table  table-sm-new bgwhite\" style=\"width:150px\">\r\n                                <tr>\r\n                                    <td align=\"right\">  <span class=\"col-form-span-label\">Advance Total:</span>        </td>\r\n                                    <td>  <span  class=\"col-form-span-label\">{{AdvTotal}}</span>   </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                <thead>\r\n                                  <tr class=\"col-form-span-heading \">                                 \r\n                                    <th class=\"col-form-span-label\"></th>\r\n                                    <th class=\"col-form-span-label\">Number</th>\r\n                                    <th class=\"col-form-span-label\">Date</th>\r\n                                    <th class=\"col-form-span-label\">Particulars</th>\r\n                                    <th class=\"col-form-span-label\">Amount</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let data of AdvanceTable\">\r\n                                    <td class=\"col-form-span-label\">{{data.transtype}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transcode}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transdate}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.exp_sname}},{{data.sup_sname}},{{data.acctname}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.cramt}}</td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                              <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Print</span></button>\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"expt_exlwithadv()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> ExportToExcel</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"close()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                              aria-hidden=\"true\"></i> Close</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                             </table>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n    <div class=\"modal\" [style.display]=\"showModal_Remark ? 'block' : 'none'\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n            <div class=\"modal-content \" style=\"height:465px; width:700px;overflow-x: auto;\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row no-gutters\">\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                    <div class=\"form-group row d-flex justify-content-center \"> <strong> Client Remark </strong>  </div></div>\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                    <div class=\"form-group row d-flex justify-content-center \"> <strong>  {{ClientName}}</strong>  </div></div>\r\n                    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                    </div>\r\n                </div>\r\n                    <div class=\"form-group row d-flex justify-content-center \">\r\n                    \r\n                        <!-- <div > <strong> {{ClientName}}</strong> </div> -->\r\n                            <br>\r\n                            <br>\r\n                        <div class=\"row no-gutters\"   >\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n                    \r\n                        \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                                <tr>\r\n                                    <td colspan=\"2\"> \r\n                                        <table class=\"table table-bordered table-sm-new bgwhite\" > \r\n                                            <tr>\r\n                                                <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n                                                <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n                                                <td align=\"right\"><span class=\"col-form-span-label\">Current Total:</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{currTotalDr}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{currTotalcr}}</span></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                                                <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>\r\n                                                <td align=\"right\"><span class=\"col-form-span-label\">Advance:</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{AdvCrAmt}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{AdvDrAmt}}</span></td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span style= \"min-height: 100px;display: inline-flex;  align-items: center; \"\r\n                                         class=\"col-form-span-label\"> Remark</span>\r\n                                    </td>\r\n                                    <td  align =\"left\" >\r\n                                     \r\n                                             <textarea rows=\"5\" cols=\"50\" class=\"form-control\" OnlyCharacter=\"true\" [(ngModel)]=\"Remark\"></textarea>\r\n                                  \r\n                                        </td>\r\n                                    \r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <div class=\"row  d-flex justify-content-center\">\r\n                            \r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disableAddbtn' (click)=\"AddRemark()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Add</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" [disabled]='disableCancelAddbtn' (click)=\"Clearctrl()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                              aria-hidden=\"true\"></i> Cancel</span></button>\r\n                                             \r\n                                        </div> \r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                   <td colspan=\"2\">\r\n                            \r\n                               <div class=\"row  xyscroll\"  style=\"height: 200px;\">\r\n                                <table class=\"table table table-responsive-sm  table-bordered \" >\r\n                                    <thead>\r\n                                        <tr class=\"title-head formheading table-primary\">\r\n                                            <th class=\"col-form-span-label\" align=\"center\">User Name</th>\r\n                                            <th class=\"col-form-span-label\" align=\"center\">Remark</th>                          \r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody >\r\n                                        <tr *ngFor=\"let data of RemarkList\">\r\n                                            <td  style=\"width: 25%;\"><span class=\"col-form-span-label\" (click)=\"DisplayRemark(data.remark)\">{{data.entrydt}}</span>  </td>                             \r\n                                            <td  style=\"width: 75%;\" class=\"col-form-span-label\">\r\n                                            <p    style=\"white-space: pre-wrap;word-break:break-all;\" > {{data.remark}}</p>  </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                               \r\n                            </div>\r\n                           \r\n                                   </td> \r\n                                </tr>\r\n                              <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <div class=\"col-md-12\"  style=\"text-align: right;\">\r\n                                            <button   class=\"btn btn-sm btn-success\" (click)=\"UploadDoc()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                                aria-hidden=\"true\"></i> Upload Document</span></button>\r\n                                            <button  class=\"btn btn-sm btn-danger\" (click)=\"closeRemark()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                                aria-hidden=\"true\"></i> Close</span></button>\r\n                                        </div>   \r\n                                    </td>\r\n                                </tr> \r\n                            </table>  \r\n                        <!-- </div> -->\r\n                         </div>\r\n                         <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n                        </div>\r\n                        \r\n                    </div> \r\n                   \r\n          </div>\r\n    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n    </div>\r\n    \r\n</div>      \r\n                \r\n                       \r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/accounts/Accreport/accountstatement/accountstatement-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/accounts/Accreport/accountstatement/accountstatement-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AccountStatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStatementRoutingModule", function() { return AccountStatementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientoutstanding_allcity_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientoutstanding-allcity-search.component */ "./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.ts");
/* harmony import */ var _genact_localstmt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genact-localstmt.component */ "./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.ts");
/* harmony import */ var _clntstatus_followup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clntstatus-followup.component */ "./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.ts");
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
            title: 'accountstatement'
        },
        children: [
            { path: 'Search/:PageType', component: _clientoutstanding_allcity_search_component__WEBPACK_IMPORTED_MODULE_2__["ClientOutstandingAllCityComponent"], data: { title: 'Search' } },
            { path: 'Genactstmt', component: _genact_localstmt_component__WEBPACK_IMPORTED_MODULE_3__["GenActStatementLocal"], data: { title: 'Gen Act Stmt' } },
            { path: 'clntstatusflp', component: _clntstatus_followup_component__WEBPACK_IMPORTED_MODULE_4__["ClientStatusFollowup"], data: { title: 'Client status Followup' } },
        ]
    }
];
var AccountStatementRoutingModule = /** @class */ (function () {
    function AccountStatementRoutingModule() {
    }
    AccountStatementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountStatementRoutingModule);
    return AccountStatementRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/accountstatement/accountstatement.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/accounts/Accreport/accountstatement/accountstatement.module.ts ***!
  \********************************************************************************/
/*! exports provided: AccountStatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStatementModule", function() { return AccountStatementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accountstatement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountstatement-routing.module */ "./src/app/accounts/Accreport/accountstatement/accountstatement-routing.module.ts");
/* harmony import */ var _clientoutstanding_allcity_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientoutstanding-allcity-search.component */ "./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.ts");
/* harmony import */ var _genact_localstmt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genact-localstmt.component */ "./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.ts");
/* harmony import */ var _clntstatus_followup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clntstatus-followup.component */ "./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.ts");
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










var AccountStatementModule = /** @class */ (function () {
    function AccountStatementModule() {
    }
    AccountStatementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_clientoutstanding_allcity_search_component__WEBPACK_IMPORTED_MODULE_3__["ClientOutstandingAllCityComponent"], _genact_localstmt_component__WEBPACK_IMPORTED_MODULE_4__["GenActStatementLocal"], _clntstatus_followup_component__WEBPACK_IMPORTED_MODULE_5__["ClientStatusFollowup"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _accountstatement_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountStatementRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_9__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], AccountStatementModule);
    return AccountStatementModule;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ClientOutstandingAllCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientOutstandingAllCityComponent", function() { return ClientOutstandingAllCityComponent; });
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ClientOutstandingAllCityComponent = /** @class */ (function () {
    function ClientOutstandingAllCityComponent(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, modalService, _loaderService) {
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
        //@ViewChild("column", {static: false}) public expcolumn: ElementRef;
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
        this.ClientList = [];
        this.displayType = 'SEARCH';
        this.Searchdata_list = [];
        this.exceldata_list = [];
        this.advdata_list = [];
        this.searchHeaderText = "Account Statement all for all City";
        this.dataForExcel = [];
        this.RemarkList = [];
        this.advdataForExcel = [];
        this.AdvanceTable = [];
        this.Status = "All";
        this.LastRemark = "";
        this.lblLastRemark = "Last Remark";
        this.UserList = [];
        this.advheaderlist = [];
        this.showModal_Advance = false;
        this.showModal_Remark = false;
        this.disableAddbtn = false;
        this.disableCancelbtn = false;
        this.disableCancelAddbtn = false;
        this.dataForExcelHead = [];
        this.advheaders = [];
        this.headers2 = [];
        this.strdtlist = [];
        this.disableNewbtn = false;
    }
    ClientOutstandingAllCityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FromDate = new Date();
        this.FromDate = this._dataService.datechnge1(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE);
        this.ToDate = new Date();
        this.ToDate = this._dataService.datechnge1(this.ToDate);
        this.verifyPermission('167', 'View');
        var jsonmaster = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Accounts/ACC_CMP_FillClient", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.ClientList = data.Table;
            _this._loaderService.display(false);
        });
    };
    ClientOutstandingAllCityComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    ClientOutstandingAllCityComponent.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    ClientOutstandingAllCityComponent.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    ClientOutstandingAllCityComponent.prototype.ShowOutstanding = function () {
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
                _this.exceldata_list = data.Table4;
                // this.exceldata_list.forEach((row: any) => {
                //   this.dataForExcel.push(Object.values(row))
                //   });
                _this.searchHeaderText = "Account Statement From " + _this.FromDate + " To " + _this.ToDate;
                if (data.Table1[0].OPBAL > 0) {
                    _this.OpDrBal = parseFloat(data.Table1[0].OPBAL).toFixed(2); //+ " Dr";
                    _this.rptopbal = parseFloat(data.Table1[0].OPBAL).toFixed(2) + " Dr";
                }
                else {
                    _this.OpCrBal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : parseFloat(data.Table1[0].OPBAL).toFixed(2); // + " Cr";
                    _this.rptopbal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : (data.Table1[0].OPBAL) + " Cr";
                }
                if (data.Table1[0].CLBAL > 0) {
                    _this.CLDrBal = parseFloat(data.Table1[0].CLBAL).toFixed(2) + " Dr";
                    _this.rptclbal = parseFloat(data.Table1[0].CLBAL).toFixed(2) + " Dr";
                }
                else {
                    _this.CLCrBal = (data.Table1[0].CLBAL == "0.00") ? "" : (data.Table1[0].CLBAL) + " Cr";
                    _this.rptclbal = (data.Table1[0].CLBAL == "0.00") ? "" : (data.Table1[0].CLBAL) + " Cr";
                }
                if (data.Table1[0].TLDR > 0) {
                    _this.currTotalDr = parseFloat(data.Table1[0].TLDR).toFixed(2);
                    _this.rptcrtotdr = data.Table1[0].TLDR + " Dr";
                }
                else {
                    _this.currTotalDr = (data.Table1[0].TLDR == "0.00") ? "" : parseFloat(data.Table1[0].TLDR).toFixed(2);
                    _this.rptcrtotdr = (data.Table1[0].TLDR == "0.00") ? "" : (data.Table1[0].TLDR) + "Dr";
                }
                if (data.Table1[0].TLCR > 0) {
                    _this.currTotalcr = parseFloat(data.Table1[0].TLCR).toFixed(2);
                    _this.rptcrtotcr = parseFloat(data.Table1[0].TLCR).toFixed(2) + " Cr";
                }
                else {
                    _this.currTotalcr = (data.Table1[0].TLCR == "0.00") ? "" : (data.Table1[0].TLCR);
                    _this.rptcrtotcr = (data.Table1[0].TLCR == "0.00") ? "" : (data.Table1[0].TLCR);
                }
                if (data.Table2[0].ADVTOTALDR > 0) {
                    _this.AdvDrAmt = parseFloat(data.Table2[0].ADVTOTALDR).toFixed(2);
                    _this.rptadvtotdr = parseFloat(data.Table2[0].ADVTOTALDR).toFixed(2);
                }
                else {
                    _this.AdvDrAmt = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : parseFloat(data.Table2[0].ADVTOTALDR).toFixed(2);
                    _this.rptadvtotdr = data.Table2[0].ADVTOTALDR;
                }
                if (data.Table2[0].ADVTOTALCR > 0) {
                    _this.AdvCrAmt = parseFloat(data.Table2[0].ADVTOTALCR).toFixed(2);
                    _this.rptadvtotcr = parseFloat(data.Table2[0].ADVTOTALCR).toFixed(2);
                }
                else {
                    _this.AdvCrAmt = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : (data.Table2[0].ADVTOTALCR);
                    _this.rptadvtotcr = data.Table2[0].ADVTOTALCR;
                }
                _this.getCompanyName();
                // this.getadvancedata();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('info', 'info', 'No Data Found !');
                return false;
            }
        });
        this.loaderService.display(false);
    };
    ClientOutstandingAllCityComponent.prototype.GetClientName = function (clientcode) {
        var updateItem = this.ClientList.find(function (item) { return item.acctcodename === clientcode; });
        this.ClientName = updateItem.acctname;
        //  this.ClientName=event.target.options[event.target.options.selectedIndex].text///.split("|")[1];
    };
    ClientOutstandingAllCityComponent.prototype.expt_exlwithadv = function () {
        var _this = this;
        if (confirm('Click OK For With Advance Excel,\n CANCEL For Without Advance Excel')) {
            this.exceldata_list.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
            });
            var reportData = {
                data: this.dataForExcel,
                advdata: this.advdataForExcel,
                headers: Object.keys(this.exceldata_list[0]),
                advheaders: ["Type", "Number", "Particulars", "Amount"],
                pagetype: "AccountStatement",
                title: this.Compname,
                subtitle: "Account Statement All with All Branch From " + this.FromDate + " To " + this.ToDate,
                clntname: this.ClientName,
                opbal: "Opening: " + this.rptopbal,
                currenttot: "Current Total : " + this.rptcrtotdr + " " + this.rptcrtotcr,
                closing: "Closing : " + this.rptclbal,
                advance: "Advance : " + this.rptadvtotdr + this.rptadvtotcr
            };
            this.exportser.exportExceltry(reportData, "Account_StatementAll_With_AllBranch_With_Adv_");
            this.dataForExcel = [];
        }
        else {
            return false;
        }
    };
    ClientOutstandingAllCityComponent.prototype.getCompanyName = function () {
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
    ClientOutstandingAllCityComponent.prototype.getadvancedata = function () {
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
                _this.advdata_list = data.Table2;
                if (data.Table2.length > 0) {
                    _this.advdata_list.forEach(function (row) {
                        _this.advdataForExcel.push(Object.values(row));
                    });
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                .subscribe(function (data) {
                _this.advdata_list = data.Table;
                _this.advdata_list.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                _this.loaderService.display(false);
            });
        }
    };
    // getadvancedata()
    // {
    //     this.loaderService.display(true)
    //     var jsonadv = {
    //       ClCode:this.Client,
    //       FINSTARTDATE:this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
    //       FINENDDATE:this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
    //       cmp_code:this._loginService.getLogin()[0].CMPCODE,
    //       citycode1:this._loginService.getLogin()[0].CITYCODE1,
    //       STARTDATE:this.FromDate,
    //       ENDDATE:this.ToDate        
    //     }
    //     var jsonadvall = {
    //       ClCode:this.Client,
    //       cmp_code:this._loginService.getLogin()[0].CMPCODE,
    //       citycode1:this._loginService.getLogin()[0].CITYCODE1,
    //       STARTDATE:this.FromDate,
    //       ENDDATE:this.ToDate        
    //     }
    //     if(this.Status=="All")  {
    //       this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_GetAll", jsonadvall)
    //       .subscribe((data: any) => {
    //       this.advdata_list=data.Table2;
    //       this.advdata_list.forEach((row: any) => {
    //         this.advdataForExcel.push(Object.values(row))
    //         });
    //         this.loaderService.display(false)
    //        })
    //     }
    //      else   {
    //       this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
    //       .subscribe((data: any) => {
    //         this.advdata_list=data.Table;
    //         this.advdata_list.forEach((row: any) => {
    //           this.advdataForExcel.push(Object.values(row))
    //           });
    //           this.loaderService.display(false)
    //        })
    //     }        
    // }
    ClientOutstandingAllCityComponent.prototype.AdvanceViewData = function () {
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
                for (var i = 0; i < _this.AdvanceTable.length; i++) {
                    var obj = {
                        Type: _this.AdvanceTable[i].transtype,
                        Number: _this.AdvanceTable[i].Transcode,
                        Particulars: _this.AdvanceTable[i].exp_sname + "," + _this.AdvanceTable[i].sup_sname + "," + _this.AdvanceTable[i].acctname,
                        Amount: _this.AdvanceTable[i].cramt
                    };
                    _this.advheaderlist.push(obj);
                }
                _this.advheaderlist.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                if (data.Table1.length > 0) {
                    _this.AdvTotal = data.Table1[0].totcramt;
                }
                _this.loaderService.display(false);
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                .subscribe(function (data) {
                _this.AdvanceTable = data.Table;
                for (var i = 0; i < _this.AdvanceTable.length; i++) {
                    var obj = {
                        Type: _this.AdvanceTable[i].transtype,
                        Number: _this.AdvanceTable[i].Transcode,
                        Particulars: _this.AdvanceTable[i].exp_sname + "," + _this.AdvanceTable[i].sup_sname + "," + _this.AdvanceTable[i].acctname,
                        Amount: _this.AdvanceTable[i].cramt
                    };
                    _this.advheaderlist.push(obj);
                }
                _this.advheaderlist.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                if (data.Table1.length > 0) {
                    _this.AdvTotal = data.Table1[0].totcramt;
                }
                _this.loaderService.display(false);
            });
        }
    };
    ClientOutstandingAllCityComponent.prototype.close = function () { this.showModal_Advance = false; };
    ClientOutstandingAllCityComponent.prototype.Print = function () {
        var frdt = this.FromDate.replace('/', '-');
        var todt = this.ToDate.replace('/', '-');
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('././#/popup/Account-actstatement-AdvancePrint/' + this.Client + '/' + this.ClientName + '/' + frdt.replace('/', '-') + '/' + todt.replace('/', '-') + '/' + this.Status + '/', "Print View", toolbar);
    };
    ClientOutstandingAllCityComponent.prototype.ShowRemark = function () {
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
            if (data.Table1.length > 0) {
                _this.LastRemark = data.Table1[0].LastRemark;
                _this.lblLastRemark = data.Table1[0].entrydt;
            }
        });
        this.loaderService.display(false);
    };
    ClientOutstandingAllCityComponent.prototype.FillRemark = function (event) {
        this.lblRemark = event.target.options[event.target.options.selectedIndex].text;
        this.Remark = event.target.value;
        this.disableAddbtn = true;
        this.disableCancelbtn = true;
    };
    ClientOutstandingAllCityComponent.prototype.closeRemark = function () { this.showModal_Remark = false; };
    ClientOutstandingAllCityComponent.prototype.AddRemark = function () {
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
        });
        this.loaderService.display(false);
    };
    ClientOutstandingAllCityComponent.prototype.EnableAddCancel = function () {
        this.lblRemark = "";
        this.Remark = "";
        this.disableAddbtn = false;
        this.disableCancelbtn = false;
        this.disableNewbtn = true;
    };
    ClientOutstandingAllCityComponent.prototype.Clearctrl = function () {
        this.lblRemark = "";
        this.Remark = "";
        this.disableAddbtn = true;
        this.disableCancelbtn = true;
        this.disableNewbtn = false;
    };
    ClientOutstandingAllCityComponent.prototype.expt_exlwithcolums = function () {
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
    ClientOutstandingAllCityComponent.prototype.Openprint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print ')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-print/' + No + '/' + "PI" + '/', "Purchase Print", toolbar);
            }
            else if (Type == "JV") {
                window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
            }
            else if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-print/' + No + '/', "CN Print", toolbar);
            }
            else if (Type == "II") {
                //window.open('./#/popup/Account-Invoice-print/' + No + '/', "INV Print", toolbar);
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
        // else {
        //   if (Type == "JV") { this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]); }
        //   else if (Type == "BR") { this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]); }
        //   else if (Type == "BP") { this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]); }
        //   else if (Type == "SI") { return false; }
        //   else if (Type == "II") { return false; }
        //   else if (Type == "PI") { this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]); }
        //   return false;
        // }
    };
    ClientOutstandingAllCityComponent.prototype.UploadDoc = function () {
        var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].edocumentIp + "edocument/UI/Accounts/frm_Acc_Search_Client_Outstanding.aspx?huhpnk=" + this._loginService.getLogin()[0].CMP_USERENCCODE + "&JOBNO=" + this.Client + "&cmpcode=" + this._loginService.getLogin()[0].CMPCODE + "&citycode=" + this._loginService.getLogin()[0].CITYCODE + "&CurLogInIP=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].edocumentIp;
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open(URL + this._loginService.getLogin()[0].CMP_USERENCCODE + '/' + this.Client + '/' + this.ClientName + '/', "Print View", toolbar);
    };
    ClientOutstandingAllCityComponent.ctorParameters = function () { return [
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
    ], ClientOutstandingAllCityComponent.prototype, "Advancemodel", void 0);
    ClientOutstandingAllCityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientoutstanding-search',
            template: __webpack_require__(/*! raw-loader!./clientoutstanding-allcity-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/accountstatement/clientoutstanding-allcity-search.component.html")
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
    ], ClientOutstandingAllCityComponent);
    return ClientOutstandingAllCityComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientStatusFollowup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientStatusFollowup", function() { return ClientStatusFollowup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientStatusFollowup = /** @class */ (function () {
    function ClientStatusFollowup(_dataService, _toasterService, loaderService, _router, datePipe, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.datePipe = datePipe;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.AssignedDate = '';
        this.clntflpList = [];
        this.codelistActt = [];
        this.Narration = "";
        this.ClientNameList = [];
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.Header = "CLIENT STATUS FOLLOWUP";
        this.formData = {
            ASSIGNDT: { main: null, hour: '', minute: '', text: '', newdata: '' }
        };
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '16px',
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
            selectorWidth: '200px'
        };
    }
    ClientStatusFollowup.prototype.ngOnInit = function () {
        // this.AssignDate=new Date();
        // this.AssignDate=this._dataService.datechnge(this.AssignDate)
        // this.formData["ASSIGNDT"].main = this.AssignDate
        this.FillClient();
        /// this.AssignedDate=this.datePipe.transform(this.AssignedDate, 'dd/mm/yyyy') ////+ this.datePipe.transform(this.AssignedDate, 'hh:mm:ss')
    };
    ClientStatusFollowup.prototype.FillClient = function () {
        var _this = this;
        var jsonparam = {
            citycode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/ACC_EXP_MST_EXPORT_MISC_JOB_FILL_CLIENT", jsonparam)
            .subscribe(function (data) {
            _this.ClientNameList = data.Table;
        });
    };
    ClientStatusFollowup.prototype.Addrcrd = function () {
        var _this = this;
        if (this.ClientName == "" || this.ClientName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Client  !');
            return false;
        }
        if (this.AssignedTo == "" || this.AssignedTo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Enter Assigned To  !');
            return false;
        }
        if (this.ClStatus == "" || this.ClStatus == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Enter Client Status  !');
            return false;
        }
        for (var key in this.formData) {
            var main = this.formData[key]["main"];
            var hour = this.formData[key]["hour"];
            var minute = this.formData[key]["minute"];
            var text = this.formData[key]["text"];
            if (main == null || main == undefined) {
                alert("Please select Date");
                return false;
            }
            if (hour == '' || minute == '') {
                alert("Please enter " + this.formData[key]["text"] + " hours[00 to 24] and minutes[00 to 60].");
                return false;
            }
            else {
                this.formData[key]["newdata"] = String(main.formatted) + ' ' + hour + ':' + minute + ':' + '00';
            }
        }
        var jsondata = { CmpId: this._loginService.getLogin()[0].CMPID,
            Exp_Code: this.ClientName,
            AssignTo: this.AssignedTo,
            Client_Status: this.ClStatus,
            AssignOn: this.formData["ASSIGNDT"]["newdata"],
        };
        this._dataService.getData("Accounts/ACC_TRA_CLIENT_STATUS_FOLLOWUP_IU", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.GetFollowupdtls(_this.ClientName);
                _this.Resetrcrd();
            }
            else {
                _this._toasterService.toast("warning", "warning", "");
                _this.loaderService.display(false);
            }
        });
    };
    ClientStatusFollowup.prototype.GetFollowupdtls = function (code) {
        var _this = this;
        var jsondata = {
            EXP_CODE: code,
        };
        this._dataService.getData("Accounts/ACC_TRA_CLIENT_STATUS_FOLLOWUP_GETDTLS", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.clntflpList = data.Table1;
            }
            else {
                _this._toasterService.toast("warning", "warning", "");
                _this.loaderService.display(false);
            }
        });
    };
    ClientStatusFollowup.prototype.Resetrcrd = function () {
        this.ClientName = undefined;
        this.AssignedTo = "";
        this.ClStatus = "";
        this.clntflpList = [];
        this.formData["ASSIGNDT"].main = "";
        this.formData["ASSIGNDT"].hour = "";
        this.formData["ASSIGNDT"].minute = "";
    };
    ClientStatusFollowup.prototype.setTime = function (type, key) {
        // console.log(this.formData[type][key]);
        if (this.formData[type][key]) {
            this.setNumber(type, 'hh');
            this.setNumber(type, 'mm');
        }
        else {
            this.formData[type]["hour"] = '';
            this.formData[type]["minute"] = '';
        }
    };
    ClientStatusFollowup.prototype.setNumber = function (type, typeone) {
        var date = new Date();
        if (typeone == 'hh') {
            this.formData[type]["hour"] = (date.getHours() < 10 ? '0' : '') + date.getHours();
        }
        else if (typeone == 'mm') {
            this.formData[type]["minute"] = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        }
    };
    ClientStatusFollowup.prototype.restrictMinute00to60number = function (type) {
        if (this.formData[type]["minute"]) {
            if (Number(this.formData[type]["hour"]) > 60) {
                this.formData[type]["hour"] = '';
            }
            else {
                this.setNumber(type, 'mm');
            }
        }
    };
    ClientStatusFollowup.prototype.restrictHour01to24number = function (type) {
        if (this.formData[type]["hour"]) {
            if (Number(this.formData[type]["hour"]) > 24) {
                this.formData[type]["hour"] = '';
            }
            else {
                this.setNumber(type, 'hh');
            }
        }
    };
    ClientStatusFollowup.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientStatusFollowup.prototype, "AssignedDate", void 0);
    ClientStatusFollowup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./clntstatus-followup.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/accountstatement/clntstatus-followup.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], ClientStatusFollowup);
    return ClientStatusFollowup;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GenActStatementLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenActStatementLocal", function() { return GenActStatementLocal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GenActStatementLocal = /** @class */ (function () {
    function GenActStatementLocal(_dataService, _toasterService, _router, http, exportser, _activatedRoute, _loginService, modalService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
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
        this.showModal_Advance = false;
        this.showModal_Remark = false;
        this.ClientList = [];
        this.displayType = 'SEARCH';
        this.searchHeaderText = "General Account Statement Local";
        this.dataList = [];
        this.dataForExcel = [];
        this.advdataForExcel = [];
        this.AdvanceTable = [];
        this.exceldata_list = [];
        this.Status = "All";
        this.LastRemark = "";
        this.lblLastRemark = "Last Remark";
        this.UserList = [];
        this.advheaderlist = [];
        this.disableAddbtn = false;
        this.disableCancelbtn = false;
        this.disableCancelAddbtn = false;
        this.disableNewbtn = false;
        this.RemarkList = [];
    }
    GenActStatementLocal.prototype.ngOnInit = function () {
        this.FromDate = new Date();
        this.FromDate = this._dataService.datechnge1(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE);
        this.ToDate = new Date();
        this.ToDate = this._dataService.datechnge1(this.ToDate);
        this.verifyPermission('167', 'View');
        this.FillAccount();
        this.getCompanyName();
    };
    GenActStatementLocal.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    GenActStatementLocal.prototype.FillAccount = function () {
        var _this = this;
        var jsonmaster = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            cmpid: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_CMP_FILL_GACCOUNT_PAGELOAD", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.ClientList = data.Table;
            _this._loaderService.display(false);
        });
    };
    GenActStatementLocal.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    GenActStatementLocal.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    GenActStatementLocal.prototype.Showdata = function () {
        var _this = this;
        this.dataForExcel = [];
        this._loaderService.display(true);
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('warning', 'warning', "Please select Account !");
            this._loaderService.display(false);
            return false;
        }
        if (this.FromDate == "" || this.FromDate == undefined) {
            this._toasterService.toast('warning', 'warning', "From Date cannot be blank !");
            this._loaderService.display(false);
            return false;
        }
        if (this.ToDate == "" || this.ToDate == undefined) {
            this._toasterService.toast('warning', 'warning', "To Date cannot be blank!");
            this._loaderService.display(false);
            return false;
        }
        var jsonData = {
            ClCode: (this.Client == undefined) ? "" : this.Client,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.FromDate,
            ENDDATE: this.ToDate,
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/Acc_Rpt_ClientOutstandingList_GetAll", jsonData)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                _this.displayType = "LIST";
                _this.dataList = data.Table;
                for (var i = 0; i < _this.dataList.length; i++) {
                    var obj = {
                        Type: _this.dataList[i].TRANSTYPE,
                        Number: _this.dataList[i].TRANSCODE,
                        Date: _this.dataList[i].TRANSDATE,
                        Particulars: _this.dataList[i].NARR + "," + _this.dataList[i].EXP_SNAME + "," + _this.dataList[i].SUP_SNAME + "," + _this.dataList[i].ACCTNAME,
                        Debit: _this.dataList[i].DRAMT,
                        Credit: _this.dataList[i].CRAMT
                    };
                    _this.exceldata_list.push(obj);
                }
                _this.exceldata_list.forEach(function (row) {
                    _this.dataForExcel.push(Object.values(row));
                });
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
                    ;
                    _this.rptclbal = data.Table1[0].CLBAL + " Dr";
                }
                else {
                    _this.CLCrBal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                    _this.rptclbal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                }
                if (data.Table1[0].TLDR > 0) {
                    _this.currTotalDr = data.Table1[0].TLDR;
                    _this.rptcrtotdr = data.Table1[0].TLDR;
                }
                else {
                    _this.currTotalDr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR);
                    _this.rptcrtotdr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR) + "Dr";
                }
                if (data.Table1[0].TLCR > 0) {
                    _this.currTotalcr = data.Table1[0].TLCR;
                    _this.rptcrtotcr = data.Table1[0].TLCR;
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
                    _this.rptadvtotdr = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALDR);
                }
                if (data.Table2[0].ADVTOTALCR > 0) {
                    _this.AdvCrAmt = data.Table2[0].ADVTOTALCR;
                    _this.rptadvtotcr = data.Table2[0].ADVTOTALCR;
                }
                else {
                    _this.AdvCrAmt = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
                    _this.rptadvtotcr = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
                }
                _this.searchHeaderText = "Account Statement From " + _this.FromDate + " To " + _this.ToDate;
                _this.Getadvancedata();
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast('info', 'info', 'No Data Found !');
                _this._loaderService.display(false);
                return false;
            }
        });
    };
    GenActStatementLocal.prototype.GetClientName = function (clientcode) {
        var updateItem = this.ClientList.find(function (item) { return item.ACCTCODENAME === clientcode; });
        this.ClientName = updateItem.ACCTNAME;
        //  this.ClientName=event.target.options[event.target.options.selectedIndex].text///.split("|")[1];
    };
    GenActStatementLocal.prototype.Openprint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print and Cancel to Edit')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-print/' + No + '/' + 'PI' + '/', "PI Print", toolbar);
            }
            else if (Type == "JV") {
                window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
            }
            else if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-print/' + No + '/', "CN Print", toolbar);
            }
            else if (Type == "II") 
            //{ window.open('./#/popup/Account-Invoice-print/' + No + '/' , "INV Print", toolbar);   }
            {
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
            else if (Type == "BR") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]);
            }
            else if (Type == "BP") {
                this._router.navigate(['/accounts/Voucher/BankPaymnt/Add/' + No]);
            }
            else if (Type == "SI") {
                return false;
            }
            else if (Type == "II") {
                this._router.navigate(['/accounts/transaction/invoice/general/' + No]);
                return false;
            }
            else if (Type == "PI") {
                this._router.navigate(['/accounts/purchase/Purchase/PI/1/' + No]);
                return false;
            }
        }
    };
    GenActStatementLocal.prototype.Print = function () {
        var frdt = this.FromDate.replace('/', '-');
        var todt = this.ToDate.replace('/', '-');
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-actstatement-AdvancePrint/' + this.Client + '/' + this.ClientName + '/' + frdt.replace('/', '-') + '/' + todt.replace('/', '-') + '/' + this.Status + '/', "Print View", toolbar);
    };
    GenActStatementLocal.prototype.Getadvancedata = function () {
        var _this = this;
        this.advdataForExcel = [];
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
                for (var i = 0; i < _this.AdvanceTable.length; i++) {
                    var obj = {
                        Type: _this.AdvanceTable[i].transtype,
                        Number: _this.AdvanceTable[i].Transcode,
                        Particulars: _this.AdvanceTable[i].exp_sname + "," + _this.AdvanceTable[i].sup_sname + "," + _this.AdvanceTable[i].acctname,
                        Amount: _this.AdvanceTable[i].cramt
                    };
                    _this.advheaderlist.push(obj);
                }
                _this.advheaderlist.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                if (data.Table1.length > 0) {
                    _this.AdvTotal = data.Table1[0].totcramt;
                }
                _this._loaderService.display(false);
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                .subscribe(function (data) {
                _this.AdvanceTable = data.Table;
                for (var i = 0; i < _this.AdvanceTable.length; i++) {
                    var obj = {
                        Type: _this.AdvanceTable[i].transtype,
                        Number: _this.AdvanceTable[i].Transcode,
                        Particulars: _this.AdvanceTable[i].exp_sname + "," + _this.AdvanceTable[i].sup_sname + "," + _this.AdvanceTable[i].acctname,
                        Amount: _this.AdvanceTable[i].cramt
                    };
                    _this.advheaderlist.push(obj);
                }
                _this.advheaderlist.forEach(function (row) {
                    _this.advdataForExcel.push(Object.values(row));
                });
                if (data.Table1.length > 0) {
                    _this.AdvTotal = data.Table1[0].totcramt;
                }
                _this._loaderService.display(false);
            });
        }
    };
    GenActStatementLocal.prototype.getCompanyName = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsoncmp)
            .subscribe(function (data) {
            _this.Compname = data.Table[0].cmp_name;
            _this._loaderService.display(false);
        });
    };
    GenActStatementLocal.prototype.AdvanceViewData = function () {
        this.showModal_Advance = true;
        this.advheader = "Account Statement for Advance From " + this.FromDate + " To " + this.ToDate;
        // this.loaderService.display(true)
    };
    GenActStatementLocal.prototype.close = function () { this.showModal_Advance = false; };
    GenActStatementLocal.prototype.expt_exlwithadv = function () {
        if (confirm('Click OK For With Advance Excel,\n CANCEL For Without Advance Excel')) {
            //  this.AdvanceTable.forEach((row: any) => {
            //  this.advdataForExcel.push(Object.values(row))
            //         });
            var reportData = {
                data: this.dataForExcel,
                advdata: this.advdataForExcel,
                headers: ["Type", "Number", "Date", "Particulars", "Debit", "Credit"],
                advheaders: ["Type", "Number", "Particulars", "Amount"],
                pagetype: "AccountStatement",
                title: this.Compname,
                subtitle: "Account Statement From " + this.FromDate + " To " + this.ToDate,
                clntname: this.ClientName,
                opbal: "Opening: " + this.rptopbal,
                currenttot: "Current Total : " + this.rptcrtotdr + " " + this.rptcrtotcr,
                closing: "Closing : " + this.rptclbal,
                advance: "Advance : " + this.rptadvtotdr + this.rptadvtotcr
            };
            this.exportser.exportExceltry(reportData, "Account_Statementl_With_Adv_" + this.Client);
            //this.dataForExcel=[];
        }
        else {
            return false;
        }
    };
    GenActStatementLocal.prototype.ShowRemark = function () {
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
            if (data.Table1.length > 0) {
                _this.LastRemark = data.Table1[0].LastRemark;
                _this.lblLastRemark = data.Table1[0].entrydt;
            }
        });
        this._loaderService.display(false);
    };
    GenActStatementLocal.prototype.DisplayRemark = function (rem) {
        this.Remark = rem;
    };
    GenActStatementLocal.prototype.closeRemark = function () { this.showModal_Remark = false; };
    GenActStatementLocal.prototype.AddRemark = function () {
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
        });
        this._loaderService.display(false);
    };
    GenActStatementLocal.prototype.EnableAddCancel = function () {
        this.lblRemark = "";
        this.Remark = "";
        this.disableAddbtn = false;
        this.disableCancelbtn = false;
        this.disableNewbtn = true;
    };
    GenActStatementLocal.prototype.Clearctrl = function () {
        this.lblRemark = "";
        this.Remark = "";
        this.disableAddbtn = true;
        this.disableCancelbtn = true;
        this.disableNewbtn = false;
    };
    GenActStatementLocal.prototype.UploadDoc = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('http://109.15.43.138/EDocument/UI/Accounts/frm_Acc_Search_Client_Outstanding.aspx?huhpnk=' + this._loginService.getLogin()[0].CMP_USERENCCODE + '/' + this.Client + '/' + this.ClientName + '/', "Print View", toolbar);
    };
    GenActStatementLocal.prototype.clear = function () {
        this.Client = "";
        this.FromDate = "";
        this.ToDate = "";
    };
    GenActStatementLocal.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    GenActStatementLocal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-General-AccountStmt-Local',
            template: __webpack_require__(/*! raw-loader!./genact-localstmt.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/accountstatement/genact-localstmt.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], GenActStatementLocal);
    return GenActStatementLocal;
}());



/***/ })

}]);
//# sourceMappingURL=accountstatement-accountstatement-module.js.map