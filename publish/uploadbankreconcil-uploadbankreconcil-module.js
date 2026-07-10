(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploadbankreconcil-uploadbankreconcil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >\r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\"  *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td >\r\n                        <span  class=\"col-form-span-label\"><b>Bank</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n\r\n                            <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"BankList\" bindLabel=\"acctname\"\r\n                               bindValue=\"acctcodename\"  [(ngModel)]=\"ourbank\"\r\n                               class=\"custom\" placeholder=\"--Select OurBank--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>From</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                     class=\"form-control\"  [selDate]=\"FromDate\"  ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td></td>\r\n                    <td colspan=\"3\"  style=\"text-align: center;\">\r\n                            <button align=\"center\" class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"search()\"><span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Search</span></button>\r\n                            <button class=\"btn btn-sm btn-warning\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                (click)=\"reset();\"><i class=\"fa fa-undo\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\" style=\"overflow-y: auto; height:532px; \">\r\n\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr align=\"right\" class=\"title-head formheading\">\r\n                    <td colspan=\"13\" >\r\n                  <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';reconcildataList=[];unreconcildataList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td colspan=\"13\" class=\"centerlabel\">\r\n                        <strong> Reconcilled List </strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new \" >\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <strong>Bank Statement Data</strong>\r\n                    </td>\r\n                    <td colspan=\"7\" class=\"centerlabel\">\r\n                        <strong>Ledger Data</strong>\r\n                    </td>\r\n                </tr>\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tClearance Dt</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Clearance Dt</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"reconcildataList.length > 0\">\r\n                    <tr *ngFor=\"let data of reconcildataList\" >\r\n                        <td  ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                         <td  ><span   class=\"col-form-span-label\">{{data.DEPOSIT}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                         <td style=\"width:20px;\" ></td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                         <td><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                         <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                        <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table>\r\n                <tr>\r\n                    <td colspan=\"13\" class=\"centerlabel\">\r\n                        <strong> UnReconcilled List </strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new table-striped table-hover\" >\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <strong>Bank Statement Data</strong>\r\n                    </td>\r\n                    <td colspan=\"7\" class=\"centerlabel\">\r\n                        <strong>Ledger Data</strong>\r\n                    </td>\r\n                </tr>\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tClearance Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Clearance Date </th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"unreconcildataList.length > 0\">\r\n                    <tr *ngFor=\"let data of unreconcildataList\" >\r\n                        <td ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                         <td ><span   class=\"col-form-span-label \">{{data.DEPOSIT}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                         <td style=\"width:20px;\"></td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                         <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                        <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n    </div> -->\r\n    <main *ngIf=\"reconcildataList.length >= 1\">\r\n        <div class=\"row no-gutters\">\r\n\r\n            <!-- <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div> -->\r\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                <div class=\"tab\" role=\"tabpanel\">\r\n                     <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"Exporttoxl();\" ><span\r\n                        class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i> ExportToExcel</span></button>\r\n                    <button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"displayType='SEARCH';reconcildataList=[];unreconcildataList=[]\"><span\r\n                            class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to\r\n                                search</u></span></button>\r\n                                <!-- <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';reconcildataList=[];unreconcildataList=[]\"\r\n                                style=\"float: right;text-decoration: underline;color: red;\">back to search</a>  -->\r\n\r\n                    <div class=\"bor\">\r\n                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" id=\"zero-tab\" data-toggle=\"tab\" href=\"#zero\">Reconcil</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" id=\"one-tab\" data-toggle=\"tab\" href=\"#one\">UnReconcil</a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"tab-content\" style=\"height:450px; width: 100%;  ;overflow-y:auto\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"zero\" style=\"width:100%\">\r\n                             <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <table>\r\n                                        <tr>\r\n                                            <td colspan=\"13\" class=\"centerlabel\" >\r\n                                                <strong> Reconcilled Records: <span style=\"color: red;\"> {{reconcilrecord}} </span>  </strong>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                    <table class=\"table table-bordered table-sm-new \" >\r\n                                        <tr>\r\n                                            <td colspan=\"5\" class=\"centerlabel\"  style=\"background-color: #26a6d4;color: white;\">\r\n                                                <strong>Bank Statement Data</strong>\r\n                                            </td>\r\n                                            <td colspan=\"7\" class=\"centerlabel\"  style=\"background-color: #26a6d4;color: white;\">\r\n                                                <strong >Ledger Data</strong>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <thead>\r\n                                            <tr class=\"title-head formheading table-primary\">\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">\tClearance Dt</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Clearance Dt</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"reconcildataList.length > 0\">\r\n                                            <tr *ngFor=\"let data of reconcildataList\" >\r\n                                                <td  ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                                                 <td  ><span   class=\"col-form-span-label\">{{data.DEPOSIT}}</span> </td>\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                                                 <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                                                 <td style=\"width:20px;\" ></td>\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                                                 <td ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                                                 <td><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                                                 <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                                                <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                     </div>\r\n                  </div>\r\n                   </div>\r\n                   <div role=\"tabpanel\" class=\"tab-pane\" id=\"one\" style=\"width:100%\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td colspan=\"13\" class=\"centerlabel\" >\r\n                                        <strong> UnReconcilled Records: <span style=\"color: red;\"> {{unreconcilrecord}} </span>  </strong>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table class=\"table table-bordered table-sm-new table-striped table-hover\" >\r\n                                <tr>\r\n                                    <td colspan=\"5\" class=\"centerlabel\"  style=\"background-color: #26a6d4;\">\r\n                                        <strong>Bank Statement Data</strong>\r\n                                    </td>\r\n                                    <td colspan=\"7\" class=\"centerlabel\"  style=\"background-color: #26a6d4;\">\r\n                                        <strong>Ledger Data</strong>\r\n                                    </td>\r\n                                </tr>\r\n                                <thead>\r\n                                    <tr class=\"title-head formheading table-primary\">\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">\tClearance Date</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Clearance Date </th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"unreconcildataList.length > 0\">\r\n                                    <tr *ngFor=\"let data of unreconcildataList\" >\r\n                                        <td ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                                         <td ><span   class=\"col-form-span-label \">{{data.DEPOSIT}}</span> </td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                                         <td style=\"width:20px;\"></td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n                                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                                         <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                                        <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div> -->\r\n            </div>\r\n           <!-- <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div> -->\r\n        </div>\r\n\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >\r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\"  *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>UPLOAD DETAILS</b> </td>\r\n                </tr>\r\n                <tr>\r\n                    <td >\r\n                        <span  class=\"col-form-span-label\"><b>Bank</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n\r\n                            <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"BankList\" bindLabel=\"acctname\"\r\n                               bindValue=\"acctcodename\"  [(ngModel)]=\"ourbank\"\r\n                               class=\"custom\" placeholder=\"--Select OurBank--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n              <tr>\r\n                <td><span class=\"col-form-span-label\"><b>As On Date</b> </span><span\r\n                    class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                     class=\"form-control\"  [selDate]=\"ToDate\"  ></my-date-picker>\r\n                </td>\r\n              </tr>\r\n                <!-- <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>From</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                     class=\"form-control\"  [selDate]=\"FromDate\"  ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr> -->\r\n                 <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\"><b>Select File</b> </span>\r\n                        <span class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                <td colspan=\"2\">\r\n                    <input  type=\"file\" #inputFile  accept=\".csv,.xls,.xlsx,.doc,.docx,.ppt,.pptx,.txt,.pdf,.png\" (change)=\"onFileChange($event)\" class=\"form-control width180\">\r\n                     <!-- <input #fileUpload type=\"file\" class=\"col-form-span-label\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple accept=\".pdf\" /> -->\r\n                   </td>\r\n                <td>\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"upload()\"><span\r\n                        class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Upload</span></button>\r\n                </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td></td>\r\n                    <td colspan=\"3\" style=\"text-align: center;\">\r\n\r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"upload()\"><span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Upload</span></button>\r\n                    </td>\r\n                </tr> -->\r\n\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n    <main *ngIf=\"reconcildataList.length >= 1\">\r\n        <div class=\"row no-gutters\">\r\n\r\n            <!-- <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div> -->\r\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                <div class=\"tab\" role=\"tabpanel\">\r\n                     <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"Exporttoxl();\" ><span\r\n                        class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i> ExportToExcel</span></button>\r\n                        <button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span\r\n                            class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to\r\n                                search</u></span></button>\r\n\r\n                                <!-- <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';reconcildataList=[];unreconcildataList=[]\"\r\n                                style=\"float: right;text-decoration: underline;color: red;\">back to search</a>  -->\r\n\r\n                    <div class=\"bor\">\r\n                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" id=\"zero-tab\" data-toggle=\"tab\" href=\"#zero\">Reconcil</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" id=\"one-tab\" data-toggle=\"tab\" href=\"#one\">UnReconcil</a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"tab-content\" style=\"height:450px; width: 100%;  ;overflow-y:auto\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"zero\" style=\"width:100%\">\r\n                             <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <table>\r\n                                        <tr>\r\n                                            <td colspan=\"13\" class=\"centerlabel\" >\r\n                                                <strong> Reconcilled Records: <span style=\"color: red;\"> {{reconcilrecord}} </span>  </strong>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                    <table class=\"table table-bordered table-sm-new \" >\r\n                                        <tr>\r\n                                            <td colspan=\"5\" class=\"centerlabel\"  style=\"background-color: #26a6d4;\">\r\n                                                <strong>Bank Statement Data</strong>\r\n                                            </td>\r\n                                            <td colspan=\"7\" class=\"centerlabel\"  style=\"background-color: #26a6d4;\">\r\n                                                <strong>Ledger Data</strong>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <thead>\r\n                                            <tr class=\"title-head formheading table-primary\">\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">\tClearance Dt</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                                                <th class=\"col-form-span-label\" align=\"center\">Clearance Dt</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody *ngIf=\"reconcildataList.length > 0\">\r\n                                            <tr *ngFor=\"let data of reconcildataList\" >\r\n                                                <td  ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                                                 <td  ><span   class=\"col-form-span-label\">{{data.DEPOSIT}}</span> </td>\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                                                 <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                                                 <td style=\"width:20px;\" ></td>\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                                                 <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                                                 <td ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                                                 <td><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                                                 <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                                                <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                     </div>\r\n                  </div>\r\n                   </div>\r\n                   <div role=\"tabpanel\" class=\"tab-pane\" id=\"one\" style=\"width:100%\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td colspan=\"13\" class=\"centerlabel\" >\r\n                                        <strong> UnReconcilled Records: <span style=\"color: red;\"> {{unreconcilrecord}} </span>  </strong>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <table class=\"table table-bordered table-sm-new table-striped table-hover\" >\r\n                                <tr>\r\n                                    <td colspan=\"5\" class=\"centerlabel\"  style=\"background-color: #26a6d4;\">\r\n                                        <strong>Bank Statement Data</strong>\r\n                                    </td>\r\n                                    <td colspan=\"7\" class=\"centerlabel\"  style=\"background-color: #26a6d4;\">\r\n                                        <strong>Ledger Data</strong>\r\n                                    </td>\r\n                                </tr>\r\n                                <thead>\r\n                                    <tr class=\"title-head formheading table-primary\">\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">\tClearance Date</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                                        <th class=\"col-form-span-label\" align=\"center\">Clearance Date </th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"unreconcildataList.length > 0\">\r\n                                    <tr *ngFor=\"let data of unreconcildataList\" >\r\n                                        <td ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                                         <td ><span   class=\"col-form-span-label \">{{data.DEPOSIT}}</span> </td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                                         <td style=\"width:20px;\"></td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n                                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                                         <td ><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                                         <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                                        <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div> -->\r\n            </div>\r\n           <!-- <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div> -->\r\n        </div>\r\n\r\n    </main>\r\n    <!-- <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\" style=\"overflow-y: auto; height:532px; \">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr align=\"right\" class=\"title-head formheading\">\r\n                    <td colspan=\"13\" >\r\n                  <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';reconcildataList=[];unreconcildataList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td colspan=\"13\" class=\"centerlabel\">\r\n                        <strong> Reconcilled List </strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new \" >\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <strong>Bank Statement Data</strong>\r\n                    </td>\r\n                    <td colspan=\"7\" class=\"centerlabel\">\r\n                        <strong>Ledger Data</strong>\r\n                    </td>\r\n                </tr>\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tClearance Dt</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Clearance Dt</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"reconcildataList.length > 0\">\r\n                    <tr *ngFor=\"let data of reconcildataList\" >\r\n                        <td  ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                         <td  ><span   class=\"col-form-span-label\">{{data.DEPOSIT}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                         <td style=\"width:20px;\" ></td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                         <td><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                         <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                        <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table>\r\n                <tr>\r\n                    <td colspan=\"13\" class=\"centerlabel\">\r\n                        <strong> UnReconcilled List </strong>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new table-striped table-hover\" >\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <strong>Bank Statement Data</strong>\r\n                    </td>\r\n                    <td colspan=\"7\" class=\"centerlabel\">\r\n                        <strong>Ledger Data</strong>\r\n                    </td>\r\n                </tr>\r\n                <thead>\r\n                    <tr class=\"title-head formheading table-primary\">\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deposit </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Withdrawal</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tClearance Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Bank Ref No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry Type</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Amount </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Deduction </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Clearance Date </th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"unreconcildataList.length > 0\">\r\n                    <tr *ngFor=\"let data of unreconcildataList\" >\r\n                        <td ><span  class=\"col-form-span-label\" >{{data.BANKREFNO}}</span> </td>\r\n                         <td ><span   class=\"col-form-span-label \">{{data.DEPOSIT}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.WITHDRAWAL}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span> </td>\r\n                         <td style=\"width:20px;\"></td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.USERBANKREFNO}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYNO}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYDT}}</span> </td>\r\n                         <td  ><span  class=\"col-form-span-label\">{{data.ENTRYTYPE}}</span> </td>\r\n                         <td ><span  class=\"col-form-span-label\">{{data.AMOUNT}}</span> </td>\r\n                         <td  ><span class=\"col-form-span-label\">{{data.DEDUCTION|number:'2.2-4'}}</span>  </td>\r\n                        <td ><span class=\"col-form-span-label\">{{data.CLEARANCEDT}}</span>  </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UploadBankReconcilSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadBankReconcilSearch", function() { return UploadBankReconcilSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;






var UploadBankReconcilSearch = /** @class */ (function () {
    function UploadBankReconcilSearch(_dataService, http, _loginService, _config, _loaderService, exportser) {
        this._dataService = _dataService;
        this.http = http;
        this._loginService = _loginService;
        this._config = _config;
        this._loaderService = _loaderService;
        this.exportser = exportser;
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
        //form: FormGroup;
        this.displayType = 'SEARCH';
        this.BankList = [];
        this.reconcildataList = [];
        this.unreconcildataList = [];
        this.Header = "Upload Statement Search";
        this.reconcildataForExcel = [];
        this.unreconcildataForExcel = [];
        this.AdvanceTable = [];
        this.reconcilexceldata_list = [];
        this.unreconcilexceldata_list = [];
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.onUploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadBankReconcilSearch.prototype.ngOnInit = function () {
        this.FillAccount();
    };
    UploadBankReconcilSearch.prototype.FillAccount = function () {
        var _this = this;
        var jsonBank = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/Acc_CashBook_FillOurbank", jsonBank)
            .subscribe(function (data) {
            _this.BankList = data.Table;
            _this._loaderService.display(false);
        });
    };
    UploadBankReconcilSearch.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    UploadBankReconcilSearch.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    UploadBankReconcilSearch.prototype.search = function () {
        var _this = this;
        if (this.ourbank == undefined || this.ourbank == "") {
            alert('Please select our bank');
            return false;
        }
        if (this.FromDate == undefined || this.FromDate == "") {
            alert('Please select from date');
            return false;
        }
        if (this.ToDate == undefined || this.ToDate == "") {
            alert('Please select to date');
            return false;
        }
        var jsonData = {
            OURBANK: this.ourbank,
            FROMDATE: this.FromDate,
            TODATE: this.ToDate
        };
        this._dataService.getData("Accounts/ACC_BANKRECONCILLATION_UPLOAD_GETDATA", jsonData)
            .subscribe(function (data) {
            if (data.Table1.length == 0) {
                alert('No Data found');
                return false;
            }
            else {
                _this.displayType = "LIST";
                _this.reconcildataList = data.Table1;
                _this.unreconcildataList = data.Table2;
                _this.reconcilrecord = _this.reconcildataList.length;
                _this.unreconcilrecord = _this.unreconcildataList.length;
                //  this.reconcilexceldata_list=data.Table1;
                //  this.unreconcilexceldata_list=data.Table2;
            }
        });
    };
    UploadBankReconcilSearch.prototype.reset = function () {
        this.ourbank = undefined;
        this.FromDate = "";
        this.ToDate = "";
    };
    UploadBankReconcilSearch.prototype.Exporttoxl = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsonaccount = { OURBANK: this.ourbank, FROMDATE: this.FromDate, TODATE: this.ToDate };
        this._dataService.getDownload("Accounts/acc_bankreconcillation_exporttoxl", jsonaccount, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, "bankreconcillationlist" + _this.FromDate + "-" + _this.ToDate + ".xls");
            _this._loaderService.display(false);
        });
    };
    UploadBankReconcilSearch.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_5__["Configuration"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UploadBankReconcilSearch.prototype, "myInputVariable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadBankReconcilSearch.prototype, "onUploadFinished", void 0);
    UploadBankReconcilSearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bankreconcil-uploadsearch',
            template: __webpack_require__(/*! raw-loader!./bank-reconcil-uploadsearch.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.html"),
            styles: ["\n    // .form-control {\n    //    padding:0px !important;\n    //    margin:0px !important;\n    //    //height:20px !important;\n    // }\n    a:hover,a:focus{\n        text-decoration: none;\n        outline: none;\n    }\n    .tab .nav-tabs {\n        border-bottom:0 none;\n    }\n    .tab .nav-tabs li{\n        margin-right: 10px;\n    }\n    .tab .nav-tabs li a{\n        position: relative;\n        padding: 4px;\n        color: #fff;\n        font-size: 11px;\n        z-index: 1;\n        font-family:verdana;\n        font-weight:bold\n    }\n    .tab .nav-tabs li a:hover{\n        background:transparent;\n        border:1px solid transparent;\n        color: #444;\n    }\n     .tab .nav-tabs li a:before{\n        content: \"\";\n        width:100%;\n        height:100%;\n        position:absolute;\n        bottom: 5px;\n        left:-1px;\n        font-size:11px;\n\n        background-color: #26a6d4;\n        border: 1px solid #d3d3d3;\n        border-bottom: 0px none;\n        border-radius: 10px 10px 0 0;\n        transform-origin: left center 0;\n        transform: perspective(3px) rotateX(5deg);\n        z-index:-1;\n    }\n    .tab .nav-tabs li a.active:before{\n        background: #fff;\n    }\n    .tab .nav-tabs li a.active,\n    .tab .nav-tabs li a.active:focus,\n    .tab .nav-tabs li a.active:hover{\n        border:1px solid transparent;\n        background:transparent;\n        color: #212529;\n        z-index: 2;\n    }\n    // .tab-content .tab-pane {\n    //     padding-bottom: 0rem !important;\n    // }\n    #autoresizing {\n        display: block;\n        overflow: hidden;\n        resize: none;\n    }\n\n\n    "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_5__["Configuration"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], UploadBankReconcilSearch);
    return UploadBankReconcilSearch;
}());



/***/ }),

/***/ "./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UploadBankReconcil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadBankReconcil", function() { return UploadBankReconcil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;






var UploadBankReconcil = /** @class */ (function () {
    function UploadBankReconcil(_dataService, http, _loginService, _config, _loaderService, _router) {
        this._dataService = _dataService;
        this.http = http;
        this._loginService = _loginService;
        this._config = _config;
        this._loaderService = _loaderService;
        this._router = _router;
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
        //form: FormGroup;
        this.displayType = 'SEARCH';
        this.Header = "UPLOAD BANK RECONCILLATION STATEMENT";
        this.selectedFileNames = [];
        this.selectedFile = null;
        this.fileToUpload = null;
        this.selfilename = "";
        this.uploadurl = "";
        this.url = "";
        this.selectedfile = null;
        this.BankList = [];
        this.reconcildataList = [];
        this.unreconcildataList = [];
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.onUploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadBankReconcil.prototype.ngOnInit = function () {
        this.uploadurl = this._config.ServerWithApiUrl;
        this.url = this.uploadurl + "Accounts/UploadBnkReconcilFile";
        this.FillAccount();
        console.log(this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE));
    };
    UploadBankReconcil.prototype.onFileChange = function (event) {
        this.selectedFile = event.target.files[0];
        this.selfilename = this.selectedFile.name;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.myForm.patchValue({
                fileSource: file
            });
        }
    };
    UploadBankReconcil.prototype.FillAccount = function () {
        var _this = this;
        var jsonBank = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/Acc_CashBook_FillOurbank", jsonBank)
            .subscribe(function (data) {
            _this.BankList = data.Table;
            _this._loaderService.display(false);
        });
    };
    UploadBankReconcil.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    UploadBankReconcil.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    UploadBankReconcil.prototype.upload = function () {
        var _this = this;
        if (this.ourbank == "" || this.ourbank == "") {
            alert('Please Select our bank');
            return false;
        }
        // if(this.FromDate== "" || this.FromDate ==""){
        //   alert('Please select From Date');
        //   return false;
        // }
        if (this.ToDate == "" || this.ToDate == "") {
            alert('Please select As On Date');
            return false;
        }
        if (this.selectedFile == undefined) {
            alert('Please select file to upload');
            return false;
        }
        var filedata = new FormData();
        filedata.append("file", this.selectedFile, this.selectedFile.name);
        filedata.append("cmpid", this._loginService.getLogin()[0].CMPID);
        filedata.append("vguid", this._loginService.getLogin()[0].GUID);
        filedata.append("makerip", this._loginService.getLogin()[0].MAKERIP);
        filedata.append("cmpcode", this._loginService.getLogin()[0].CMPCODE);
        filedata.append("citycode", this._loginService.getLogin()[0].CITYCODE);
        filedata.append("citycode1", this._loginService.getLogin()[0].CITYCODE1);
        filedata.append("ourbank", this.ourbank);
        filedata.append("fromdt", this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE));
        filedata.append("todt", this.ToDate);
        // filedata.append("todt",this.ToDate)
        // this.http.post(this.url,filedata)
        this._loaderService.display(true);
        this.http.post(this.url, filedata)
            //this.http.post("http://localhost:58899/api/Accounts/UploadBnkReconcilFile",filedata)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS == "104") {
                _this._loaderService.display(false);
                alert(data.Table1[0].MSG);
            }
            else if (data.Table2[0].STATUS == "100") {
                _this.displayType = "LIST";
                _this.reconcildataList = data.Table;
                if (data.Table[0].STATUS == "105") {
                    _this.reconcilrecord = 0;
                }
                else {
                    _this.reconcilrecord = _this.reconcildataList.length;
                }
                _this.unreconcildataList = data.Table1;
                _this.reconcilrecord = _this.reconcildataList.length;
                _this.unreconcilrecord = _this.unreconcildataList.length;
                _this._loaderService.display(false);
                alert(data.Table2[0].MSG);
            }
            else {
                alert(data.Table2[0].MSG);
            }
            _this.selectedFile = null;
            _this._loaderService.display(false);
        });
        this.myInputVariable.nativeElement.value = "";
        //this._loaderService.display(false);
    };
    UploadBankReconcil.prototype.back = function () {
        this.reconcildataList = [];
        this.unreconcildataList = [];
        this._router.navigate(['/accounts/uploadbankreconcil/uploadStatementsearch']);
    };
    UploadBankReconcil.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_5__["Configuration"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UploadBankReconcil.prototype, "myInputVariable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadBankReconcil.prototype, "onUploadFinished", void 0);
    UploadBankReconcil = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bankreconcil-uploadstatement',
            template: __webpack_require__(/*! raw-loader!./bank-reconcil-uploadstatement.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_5__["Configuration"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UploadBankReconcil);
    return UploadBankReconcil;
}());



/***/ }),

/***/ "./src/app/accounts/uploadbankreconcil/uploadbankreconcil.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/uploadbankreconcil/uploadbankreconcil.module.ts ***!
  \**************************************************************************/
/*! exports provided: uploadbankreconcilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadbankreconcilModule", function() { return uploadbankreconcilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _uploadbankreconcil_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploadbankreconcil.routing */ "./src/app/accounts/uploadbankreconcil/uploadbankreconcil.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bank_reconcil_uploadstatement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bank-reconcil-uploadstatement.component */ "./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.ts");
/* harmony import */ var _bank_reconcil_uploadsearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bank-reconcil-uploadsearch.component */ "./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var uploadbankreconcilModule = /** @class */ (function () {
    function uploadbankreconcilModule() {
    }
    uploadbankreconcilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_uploadbankreconcil_routing__WEBPACK_IMPORTED_MODULE_6__["uploadbankreconcilRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                //SharedModule
            ],
            declarations: [_bank_reconcil_uploadstatement_component__WEBPACK_IMPORTED_MODULE_8__["UploadBankReconcil"], _bank_reconcil_uploadsearch_component__WEBPACK_IMPORTED_MODULE_9__["UploadBankReconcilSearch"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], uploadbankreconcilModule);
    return uploadbankreconcilModule;
}());



/***/ }),

/***/ "./src/app/accounts/uploadbankreconcil/uploadbankreconcil.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/uploadbankreconcil/uploadbankreconcil.routing.ts ***!
  \***************************************************************************/
/*! exports provided: uploadbankreconcilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadbankreconcilRoutingModule", function() { return uploadbankreconcilRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bank_reconcil_uploadstatement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-reconcil-uploadstatement.component */ "./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadstatement.component.ts");
/* harmony import */ var _bank_reconcil_uploadsearch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-reconcil-uploadsearch.component */ "./src/app/accounts/uploadbankreconcil/bank-reconcil-uploadsearch.component.ts");
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
            title: ' Bank Reconcil'
        },
        children: [
            { path: 'uploadStatement', component: _bank_reconcil_uploadstatement_component__WEBPACK_IMPORTED_MODULE_2__["UploadBankReconcil"], data: { title: 'Upload Statement' } },
            { path: 'uploadStatementsearch', component: _bank_reconcil_uploadsearch_component__WEBPACK_IMPORTED_MODULE_3__["UploadBankReconcilSearch"], data: { title: 'Upload Statement Search' } },
        ]
    }
];
var uploadbankreconcilRoutingModule = /** @class */ (function () {
    function uploadbankreconcilRoutingModule() {
    }
    uploadbankreconcilRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], uploadbankreconcilRoutingModule);
    return uploadbankreconcilRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=uploadbankreconcil-uploadbankreconcil-module.js.map