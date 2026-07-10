(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-quotation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/quotation/enquiry.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/quotation/enquiry.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sales-form-wrapper\">\r\n\r\n<div class=\" enquiry-page-container\"> -->\r\n    <div class=\"card shadow-sm enquiry-card\">\r\n      \r\n        <div class=\"card-body\">\r\n            \r\n                \r\n                <div class=\"row  mb-1\">\r\n                    <div class=\"col-12 col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary heading-box\" style=\"font-size: 1.05rem; line-height: 1.2; height: 25px;\" ><h6 >Enquiry Details</h6></div>\r\n                    \r\n                    <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"dispno\" class=\"form-label \">Enq Ref. No. </label>&nbsp;\r\n                        <input type=\"text\" id=\"dispno\" [(ngModel)]=\"dispno\" class=\"form-control input-25\"   placeholder=\"Auto Generated\" disabled>\r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"enqReceivedDt\" class=\"form-label\">Enq Receipt Dt</label>\r\n                         <my-date-picker name=\"enqreceiptdt\" [options]=\"myDatePickerOptions\"\r\n                         (dateChanged)=\"onenqreceiptdtChanged($event)\" [selDate]=\"enqreceiptdt\"></my-date-picker>\r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                          <label for=\"mode\" class=\"form-label\">Mode</label>\r\n                        <ng-select [items]=\"enqmodetable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqmode\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Mode--\">\r\n                        </ng-select>\r\n                        <!-- <label for=\"enquiryInputBy\" class=\"form-label\">Enquiry Input By</label>\r\n                         <ng-select [items]=\"enqinputbytable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqinputby\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Enq Input By--\">\r\n                        </ng-select> -->\r\n                        \r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                    <label for=\"enqType\" class=\"form-label\">Enq Type</label>\r\n                                        \r\n                                            <ng-select [items]=\"enqtypetable\"\r\n                                                bindLabel=\"DATATEXTVALUE\"\r\n                                                bindValue=\"DATAVALUE\"\r\n                                                [(ngModel)]=\"enqtype\"\r\n                                                class=\"enq-ng-select\"\r\n                                                placeholder=\"--Enq Type--\">\r\n                                            </ng-select>\r\n                    </div>\r\n                \r\n                     <div class=\"col-md-3  mb-1\">\r\n                        <!-- <label for=\"shipmenttype\" class=\"form-label\">Shipment</label>\r\n                        <ng-select [items]=\"enqshipmenttable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqshipment\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Shipment--\">\r\n                        </ng-select> -->\r\n                          <label for=\"exim\" class=\"form-label\">Exim</label>\r\n                            <ng-select [items]=\"enqeximtable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqexim\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Exim--\">\r\n                        </ng-select>\r\n                    </div>\r\n                   <!-- <div class=\"col-md-3 mb-3\">\r\n                        <label for=\"exim\" class=\"form-label\">Exim</label>\r\n                            <ng-select [items]=\"enqeximtable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqexim\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Exim--\">\r\n                        </ng-select>\r\n                    </div> -->\r\n                    <div class=\"col-md-3  mb-1\">\r\n                         <label for=\"salesPerson\" class=\"form-label\">Sales Person</label>\r\n                        <ng-select [items]=\"enqsalespersontable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqsalesPerson\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Sales Person--\">\r\n                        </ng-select>\r\n                       \r\n                         <!-- <label for=\"incoterms\" class=\"form-label\">Incoterms</label>\r\n                         <ng-select [items]=\"incotermtable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqincoterms\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Incoterms--\">\r\n                        </ng-select> -->\r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                         <label for=\"enqagentName\" class=\"form-label\">Agent Name</label>\r\n                          <input type=\"text\" id=\"agent\" [(ngModel)]=\"enqagentName\"  class=\"form-control input-25\"  >\r\n                          <!-- <ng-select [items]=\"enqagenttable\"\r\n                            bindLabel=\"TEXTFIELD\"\r\n                            bindValue=\"VALUEFIELD\"\r\n                            [(ngModel)]=\"enqagentName\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Agent Name--\">\r\n                        </ng-select> -->\r\n                      <!-- <label for=\"network\" class=\"form-label\">Network </label>\r\n                         <ng-select [items]=\"enqnetworktable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqnetwork\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Network--\">\r\n                        </ng-select> -->\r\n                    </div>\r\n                   <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"country\" class=\"form-label\">Country</label>\r\n                            <ng-select [items]=\"enqcountrytable\"\r\n                                bindLabel=\"DATATEXTVALUE\"\r\n                                bindValue=\"DATAVALUE\"\r\n                                [(ngModel)]=\"enqcountry\"\r\n                                class=\"enq-ng-select\"\r\n                                placeholder=\"--Country--\">\r\n                            </ng-select>\r\n                   </div>\r\n                    <!-- <div class=\"col-md-3 mb-3\">\r\n                         <label for=\"salesPerson\" class=\"form-label\">Sales Person</label>\r\n                        <ng-select [items]=\"enqsalespersontable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqsalesPerson\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Sales Person--\">\r\n                        </ng-select>\r\n                    </div> -->\r\n                     <div class=\"col-md-3  mb-1\">\r\n                          <label for=\"Branch\" class=\"form-label\">Branch</label>\r\n                          <ng-select [items]=\"enqbranchtable\"\r\n                            bindLabel=\"CITYNAME\"\r\n                            bindValue=\"CITYCODE\"\r\n                            [(ngModel)]=\"enqbranch\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Branch--\">\r\n                        </ng-select>\r\n                     </div>\r\n                      <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"network\" class=\"form-label\">Network </label>\r\n                         <ng-select [items]=\"enqnetworktable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqnetwork\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Network--\">\r\n                        </ng-select>\r\n                    </div>\r\n                   <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"pol\" class=\"form-label\">POL</label>\r\n                          <ng-select [items]=\"enqpoltable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqpol\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--POL--\">\r\n                        </ng-select>\r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"pod\" class=\"form-label\">POD</label>\r\n                          <ng-select [items]=\"enqpodtable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqpod\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--POD--\">\r\n                        </ng-select>\r\n                    </div>\r\n                     <div class=\"col-md-3  mb-1\">\r\n                         <label for=\"incoterms\" class=\"form-label\">Incoterms</label>\r\n                         <ng-select [items]=\"incotermtable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqincoterms\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Incoterms--\">\r\n                        </ng-select>\r\n                        \r\n                      \r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                    <label for=\"enqdimension\" class=\"form-label\">Dimension</label>\r\n                         <ng-select [items]=\"enqdimensiontable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqdimension\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Dimension--\">\r\n                        </ng-select>\r\n                    </div>\r\n                    <div class=\"col-md-3  mb-1\">\r\n                         <label for=\"status\" class=\"form-label\">Status</label>\r\n                        <ng-select [items]=\"enqstatustable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqstatus\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Status--\">\r\n                        </ng-select>\r\n                    </div>\r\n                     <div class=\"col-md-3  mb-1\">\r\n                        <label for=\"emailSubjectLine\" class=\"form-label\">Email Subject Line</label>\r\n                        <input type=\"text\"  [(ngModel)]=\"emailsubjectline\"  id=\"emailsubjectline\" class=\"form-control input-25\"  >\r\n                    </div>\r\n                     <div class=\"col-md-3  mb-1\">\r\n                           <label for=\"shipper\" class=\"form-label\">Shipper</label>\r\n                        <input type=\"text\" id=\"shipper\" [(ngModel)]=\"shipper\"  class=\"form-control input-25\"  >\r\n                     </div>\r\n                      <div class=\"col-md-3  mb-1\">\r\n                         <label for=\"consignee\" class=\"form-label\">Consignee</label>\r\n                        <input type=\"text\" id=\"consignee\" [(ngModel)]=\"consignee\" class=\"form-control input-25\"  >\r\n                      </div>\r\n                      <div class=\"col-md-6  mb-1\">\r\n                        <label for=\"remarks\" class=\"form-label\">Remarks</label>\r\n                        <textarea id=\"remarks\" class=\"form-control input-25\"  [(ngModel)]=\"remarks\"  rows=\"2\" ></textarea>\r\n                    </div>\r\n                    \r\n                </div>\r\n\r\n                <!-- <div class=\"row mb-4 section-group\">\r\n                     <div class=\"col-12 col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary heading-box\" style=\"font-size: 1.05rem; line-height: 1.2;height: 25px;\" ><h6 >Shipment & Mode Information</h6></div>\r\n                    <div class=\"col-12\"><h5 class=\"section-title\">Shipment & ModeInformation</h5></div>\r\n              \r\n                    \r\n                   \r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"incoterms\" class=\"form-label\">Incoterms</label>\r\n                         <ng-select [items]=\"incotermtable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqincoterms\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Incoterms--\"> \r\n                        </ng-select>\r\n                    </div>\r\n                          <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"network\" class=\"form-label\">Network </label>\r\n                         <ng-select [items]=\"enqnetworktable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqnetwork\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Network--\">\r\n                        </ng-select>\r\n                    </div>\r\n                      \r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"country\" class=\"form-label\">Country</label>\r\n                          <ng-select [items]=\"enqcountrytable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqcountry\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Country--\">\r\n                        </ng-select>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"enqagentName\" class=\"form-label\">Agent Name</label>\r\n                          <ng-select [items]=\"enqagenttable\"\r\n                            bindLabel=\"TEXTFIELD\"\r\n                            bindValue=\"VALUEFIELD\"\r\n                            [(ngModel)]=\"enqagentName\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Agent Name--\">\r\n                        </ng-select>\r\n                    </div>\r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"salesPerson\" class=\"form-label\">Sales Person</label>\r\n                        <ng-select [items]=\"enqsalespersontable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"enqsalesPerson\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Sales Person--\">\r\n                        </ng-select>\r\n                    </div>\r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"Branch\" class=\"form-label\">Branch</label>\r\n                          <ng-select [items]=\"enqbranchtable\"\r\n                            bindLabel=\"CITYNAME\"\r\n                            bindValue=\"CITYCODE\"\r\n                            [(ngModel)]=\"enqbranch\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Branch--\">\r\n                        </ng-select>\r\n                    </div> \r\n                </div> -->\r\n                 \r\n\r\n                <!-- <div class=\"row mb-4 section-group\">\r\n                   \r\n                      <div class=\"col-12 col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary heading-box\" style=\"font-size: 1.05rem; line-height: 1.2;height: 25px;\" ><h6 >Communication & Remarks</h6></div>\r\n                    <div class=\"col-md-3 mb-3\">\r\n                        <label for=\"emailSubjectLine\" class=\"form-label\">Email Subject Line</label>\r\n                        <input type=\"text\"  [(ngModel)]=\"emailsubjectline\"  id=\"emailsubjectline\" class=\"form-control\"  placeholder=\"Freeform\">\r\n                    </div>\r\n                    <div class=\"col-md-3 mb-3\">\r\n                        <label for=\"remarks\" class=\"form-label\">Remarks</label>\r\n                        <textarea id=\"remarks\" class=\"form-control\"  [(ngModel)]=\"remarks\"  rows=\"3\" placeholder=\"Freeform\"></textarea>\r\n                    </div>\r\n                    <div class=\"col-md-3 mb-3\">\r\n                        <label for=\"jobNo\" class=\"form-label\">Job No.</label>\r\n                        <input type=\"text\" id=\"jobNo\" [(ngModel)]=\"jobno\"  class=\"form-control \" >\r\n                    </div>\r\n\r\n                    \r\n                    <div class=\"col-md-3 mb-3\">\r\n                         <label for=\"enqquotedt\" class=\"form-label\">Enq Quoted Dt</label>\r\n                        <my-date-picker name=\"enqquotedt\" [options]=\"myDatePickerOptions1\"\r\n                                (dateChanged)=\"onenqquotedtChanged($event)\" [selDate]=\"enqquotedt\"></my-date-picker>\r\n                    </div>\r\n                    <div class=\"col-md-3 mb-3\">\r\n                        <label for=\"daysTaken\" class=\"form-label\">Days Taken to quote rate</label>\r\n                        <input type=\"number\" id=\"daysTaken\" [(ngModel)]=\"daystaken\"  class=\"form-control width250\" >\r\n                    </div>\r\n                     <div class=\"col-md-3 mb-3\">\r\n                          <label for=\"specialRemark\" class=\"form-label\">Special Remark</label>\r\n                        <textarea id=\"specialRemark\" class=\"form-control\"  rows=\"3\" placeholder=\"Freeform\"></textarea>\r\n                          <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\" [(ngModel)]=\"specialremark\" \r\n                            placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"specialremark\"></textarea>\r\n                     </div>\r\n                </div> -->\r\n\r\n                <!-- <div class=\"row mb-4 \">\r\n                    <div class=\"col-12\"><h5 class=\"section-title\">Quoting & Tracking</h5></div>\r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"enqQuotedDt\" class=\"form-label\">Enq Quoted Dt</label>\r\n                        <my-date-picker name=\"enqquotedt\" [options]=\"myDatePickerOptions1\"\r\n                                (dateChanged)=\"onenqquotedtChanged($event)\" [selDate]=\"enqquotedt\"></my-date-picker>\r\n                    </div>\r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"daysTaken\" class=\"form-label\">Days Taken to quote rate</label>\r\n                        <input type=\"number\" id=\"daysTaken\" class=\"form-control width250\" >\r\n                    </div>\r\n                    <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"specialRemark\" class=\"form-label\">Special Remark</label>\r\n                        \r\n                          <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\r\n                            placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"specialremark\"></textarea>\r\n                    </div>\r\n                </div> -->\r\n\r\n                <div class=\"row \" >\r\n                    <div class=\"col-12 text-center\">\r\n                        <!-- <button type=\"submit\" class=\"btn btn-primary submit-btn px-5 py-2\">SUBMIT ENQUIRY</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-secondary ms-3 px-5 py-2\">RESET</button> -->\r\n                         <button class=\"btn btn-success btn-sm rounded-pill px-4 shadow fw-semibold me-2 button-spacing\" type=\"submit\" (click)=\"AddEnquiry()\">\r\n                                <i class=\"fa fa-dot-circle-o me-2\"></i> {{btntext}}\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger btn-sm rounded-pill px-4 shadow fw-semibold\" type=\"reset\" (click)=\"ResetMainEnquiry();\">\r\n                                <i class=\"fa fa-ban me-2\"></i> Reset\r\n                            </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"height: 220px; overflow-y: auto; margin-top: 10px;\">\r\n                            <table class=\"table table-sm  align-middle mb-0 w-100 shadow-sm charges-table rounded-4 overflow-hidden \">\r\n                            <thead class=\"col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary heading-box  sticky-header\">\r\n                                <tr class=\"text-primary bg-body-secondary text-center reduced-height-row \">\r\n                                <th style=\"width: 35px;\"></th>\r\n                                <th class=\"form-label\"style=\"width: 100px;\">Enq No</th>\r\n                                <th style=\"width: 90px;\" >Enq Date</th>\r\n                                <th style=\"width: 90px;\">Enq Type</th>\r\n                                 <!-- <th style=\"width: 80px;\">Mode</th> -->\r\n                                  <th style=\"width: 90px;\">Status</th>\r\n                                 <th style=\"width: 175px;\">Shipper</th>\r\n                                 <th style=\"width: 175px;\">Consignee</th>\r\n                                <th style=\"width: 175px;\">Sales Person</th>\r\n                                <th style=\"width: 100px;\" class=\"text-end\">Branch</th>\r\n                                \r\n                                </tr>\r\n                            </thead>\r\n\r\n                            <tbody>\r\n                                <tr *ngFor=\"let obj of enquirydetails; index as i\" class=    \"border-bottom reduced-height-row\">\r\n                                <td style=\"width: 35px;\">\r\n                                    <i class=\"fa fa-pencil text-primary cursor-pointer\" (click)=\"EditEnquiry(obj)\"></i> \r\n                                    <!-- <i class=\"fa fa-trash text-primary cursor-pointer\" (click)=\"DeleteEnquiry(obj.PK_ID)\"></i></td> -->\r\n                              <td class=\"label text-start\" style=\"width: 100px;\">{{ obj.DISPNO }}</td>\r\n                                <td class=\"label text-start\" style=\"width: 90px;\">{{ obj.ENQRECPTDT}}</td>\r\n                                <td class=\"label text-start\" style=\"width: 90px;\" >{{ obj.ENQTYPE }}</td>\r\n                                <!-- <td class=\"label text-start\" style=\"width: 80px;\">{{ obj.MODE }}</td> -->\r\n                                 <td class=\"label text-start\" style=\"width: 90px;\">{{ obj.ENQSTATUS }}</td>\r\n                                <td class=\"label text-start\" style=\"width: 175px;\">{{ obj.SHIPPER }}</td>\r\n                                <td class=\"label text-start\" style=\"width: 175px;\">{{ obj.CONSIGNEE }}</td>\r\n                                <td class=\"label text-start\" style=\"width: 175px;\">{{ obj.SALESPERSONNM }}</td>\r\n                                <td class=\"label text-end\" style=\"width: 100px;\">{{ obj.CITY_NAME }}</td>\r\n                         \r\n                            </tbody>\r\n                      </table>\r\n                </div>\r\n\r\n            <!-- </form> -->\r\n        </div>\r\n    </div>\r\n<!-- </div>\r\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/quotation/enquiry.search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/quotation/enquiry.search.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header \">\r\n                    <div class=\"row no-gutters \">\r\n                  <div class=\"col-sm-4\" *ngIf=\"displayType=='SEARCH'\" >\r\n                            <strong>Enquiry Search</strong>\r\n                   </div>\r\n                   <div class=\"col-sm-4\" *ngIf=\"displayType=='LIST'\">\r\n                            <strong>Enquiry List</strong>\r\n                   </div>\r\n          \r\n                     <!-- <div class=\"col-sm-8\" *ngIf=\"displayType=='LIST'\">\r\n                            <button style=\"float: right; margin-left: 15px;\"class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"Exporttoxl()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                                Export To Excel </span></button>\r\n                                <a style=\"float: right;text-decoration: underline;color: red;\" href=\"javascript:void(0);\" \r\n                                (click)=\"displayType='SEARCH'; enquirylist=[]\"\r\n                               >\r\n                                ← Back to Search\r\n                              </a>\r\n                           \r\n                        </div> -->\r\n                       <div class=\"col-sm-8 d-flex justify-content-end align-items-center\" \r\n     *ngIf=\"displayType=='LIST'\" \r\n     style=\"gap: 15px;\">\r\n\r\n  <a style=\"text-decoration: underline; color: red;\"\r\n     href=\"javascript:void(0);\"\r\n     (click)=\"displayType='SEARCH'; enquirylist=[]\">\r\n    ← Back to Search\r\n  </a>\r\n\r\n  <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"Exporttoxl()\">\r\n    <i class=\"fa fa-file-excel-o\"></i> Export To Excel\r\n  </button>\r\n\r\n</div>\r\n \r\n       \r\n                 </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<div class=\"row justify-content-center\" *ngIf=\"displayType=='SEARCH'\">\r\n  <div class=\"col-md-6\">\r\n\r\n  <div class=\"search-card shadow rounded bg-white p-3\">\r\n\r\n<div class=\"search-row d-flex align-items-center mb-3\">\r\n  <input type=\"radio\" \r\n         name=\"filterType\" \r\n         value=\"1\" \r\n         [(ngModel)]=\"exampleRadios1\" \r\n         class=\"mr-2\">\r\n\r\n  <label class=\"fw-semibold mb-0 mr-3\">Sales Person</label>\r\n\r\n  <ng-select [items]=\"salespersontable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"salesperson\"\r\n                            class=\"custom rounded-pill  liner-select\"\r\n                            placeholder=\"--Please Select--\"\r\n                            [disabled]=\"exampleRadios1 != '1'\" >\r\n</ng-select>\r\n</div>\r\n\r\n      <!-- Radio: Origin -->\r\n   <div class=\"search-row d-flex align-items-center gap-3  mb-3\">\r\n        <input type=\"radio\" name=\"filterType\" value=\"2\" [(ngModel)]=\"exampleRadios1\" class=\"mr-2\"> \r\n        <label class=\"fw-semibold mb-0 mr-3\">Branch</label>\r\n\r\n        <ng-select\r\n        [items]=\"enqbranchtable\"\r\n        bindLabel=\"CITYNAME\"\r\n        bindValue=\"CITYCODE\"\r\n        [(ngModel)]=\"enqbranch\"\r\n        class=\"custom rounded-pill  short-select\"\r\n        placeholder=\"--Please Select--\"\r\n        [disabled]=\"exampleRadios1 != '2'\">\r\n  </ng-select>\r\n\r\n      </div>\r\n\r\n      <!-- Radio: Date -->\r\n      <div class=\"search-row d-flex align-items-center gap-3  mb-3\">\r\n        <div class=\"d-flex align-items-start mb-2\">\r\n          <input type=\"radio\" name=\"filterType\" value=\"3\" [(ngModel)]=\"exampleRadios1\" class=\"mr-2\">\r\n          <label class=\"fw-semibold\">Date Range</label>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6 p-0\">\r\n            <label class=\"form-label medium\">Start Date</label>\r\n            <my-date-picker\r\n              name=\"StartDate\"\r\n              [options]=\"myDatePickerOptions\"\r\n              [(ngModel)]=\"startdate\"\r\n              [disabled]=\"exampleRadios1 != '3'\">\r\n            </my-date-picker>\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <label class=\"form-label medium\">End Date</label>\r\n            <my-date-picker\r\n              name=\"EndDate\"\r\n              [options]=\"myDatePickerOptions\"\r\n              [(ngModel)]=\"enddate\"\r\n              [disabled]=\"exampleRadios1 != '3'\">\r\n            </my-date-picker>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Buttons -->\r\n      <div class=\"text-center mt-3\">\r\n        <button class=\"btn btn-success btn-sm mx-1\" (click)=\"searchdata()\">\r\n          <i class=\"fa fa-search\"></i> Search\r\n        </button>\r\n        <button class=\"btn btn-danger btn-sm mx-1\" (click)=\"Reset()\">\r\n          <i class=\"fa fa-ban\"></i> Reset\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row justify-content-center\" *ngIf=\"displayType=='LIST'\">\r\n\r\n  <div class=\"col-md-12\">\r\n\r\n    <div class=\"list-card shadow rounded bg-white p-3\">\r\n\r\n      <!-- Header -->\r\n     \r\n\r\n      <!-- Table -->\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table table-sm\">\r\n          <thead class=\"col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary heading-box\">\r\n            <tr>\r\n              <th>Enquiry No</th>\r\n              <th>Enquiry Dt</th>\r\n              <th>Sales Person</th>\r\n              <th>Agent Name</th>\r\n              <th>Branch</th>\r\n               <th>Status</th>\r\n                  <th>Created By</th>\r\n                     <th>Created On</th>\r\n              <!-- <th>Country</th> -->\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let obj of enquirylist | paginate: config\">\r\n              <td>\r\n                <span class=\"anchor-link text-primary fw-semibold\"\r\n                      (click)=\"ListOnclick(obj.ENQREFNO)\">\r\n                  {{obj.DISPNO}}\r\n                </span>\r\n              </td>\r\n               <td>{{obj.ENQRECPTDT}}</td>\r\n              <td>{{obj.SALESPERSON}}</td>\r\n              <td>{{obj.AGENT_NAME}}</td>\r\n              <td>{{obj.BRANCHNM}}</td>\r\n               <td>{{obj.ENQSTATUS}}</td>\r\n                <td>{{obj.CREATEDBY}}</td>\r\n                 <td>{{obj.CREATEDDATE}}</td>\r\n              <!-- <td>{{obj.CITY_COUNTRY}}</td> -->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n \r\n <!-- <div class=\"animated fadeIn\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Enquiry List</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\" *ngIf=\"enquirylist.length==0\">\r\n                <tbody>\r\n               \r\n                    <tr class=\"trbg\">\r\n                        <td class=\"width200\">\r\n                            \r\n                            <div class=\"d-flex align-items-center\" style=\"gap: 8px;\">\r\n                        <input type=\"radio\" name=\"exampleRadios\" value=\"1\" [(ngModel)]=\"exampleRadios1\">\r\n                        <label class=\"form-label mb-0 ms-1\">Sales Person</label>\r\n  </div>\r\n                        </td>\r\n                        <td class=\"col-form-span-label width240\" colspan=\"4\">\r\n                        \r\n                            <ng-select [items]=\"salespersontable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\"\r\n                            [(ngModel)]=\"salesperson\"\r\n                            class=\"custom\"\r\n                            placeholder=\"--Please Select--\"\r\n                            [disabled]=\"exampleRadios1 != '1'\" >\r\n\r\n                         </ng-select>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"trbg\">\r\n                        <td class=\" width100\">\r\n                            <div class=\"d-flex align-items-center\" style=\"gap: 8px;\">\r\n                            <input type=\"radio\" name=\"exampleRadios\" value='2' [(ngModel)]=\"exampleRadios1\"><label for=\"enqType\" class=\"form-label\">Branch</label>\r\n                       </div>\r\n                        </td>\r\n                        <td class=\"col-form-span-label width240\" colspan=\"4\">\r\n                        \r\n                            <ng-select [items]=\"enqbranchtable\"\r\n                            bindLabel=\"CITYNAME\"\r\n                            bindValue=\"CITYCODE\"\r\n                            [(ngModel)]=\"enqbranch\"\r\n                            class=\"enq-ng-select\"\r\n                            placeholder=\"--Branch--\">\r\n                        </ng-select>\r\n                        </td>\r\n                    </tr>\r\n\r\n\r\n           \r\n                    <tr class=\"trbg\">\r\n                        <td class=\" width100\">\r\n                              <div class=\"d-flex align-items-center\" style=\"gap: 8px;\">\r\n                          <input type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" [(ngModel)]=\"exampleRadios1\"\r\n                              value=\"3\"  ><label for=\"enqType\" class=\"form-label\">Date</label>\r\n                              </div>\r\n                        </td>\r\n                              <td>\r\n                                  <span class=\"col-form-span-label width150\"><b>Start Date</b> </span>\r\n                                  <span class=\"col-form-span-error\">*</span>\r\n                              </td>\r\n                              <td>\r\n                                  <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"startdate\" [disabled]=\"exampleRadios1 != '3'\">\r\n                                  </my-date-picker>\r\n                        \r\n                              </td>\r\n                              <td>\r\n                                  <span class=\"col-form-span-label width150\"><b>End Date</b> </span>\r\n                                  <span class=\"col-form-span-error\">*</span>\r\n                              </td>\r\n                              <td>\r\n                                  <my-date-picker name=\"EndDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"enddate\" [disabled]=\"exampleRadios1 != '3'\">\r\n                                  </my-date-picker>\r\n                       \r\n                              </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"5\" class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"searchdata()\"><span\r\n                     class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\r\n                     <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                    (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                       \r\n                </td>\r\n            </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n     <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-1\">\r\n        </div>\r\n         <div class=\"col-10 xyscroll\" style=\"height:550px;\" >\r\n              <table class=\"table  table-bordered table-sm-new bgwhite\">\r\n                        <thead>\r\n                               <tr class=\"title-head formheading\">\r\n                        <th colspan=\"6\">\r\n                             <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';enquirylist=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                        </th>\r\n                    </tr>\r\n                            <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n                              \r\n                                <th class=\"col-form-span-label\">Enquiry No</th>\r\n                                <th class=\"col-form-span-label\">SalesPerson</th>\r\n                                <th class=\"col-form-span-label\">Agent Name</th>\r\n                                <th class=\"col-form-span-label\">Branch</th>\r\n                               \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"bgwhite\">\r\n                            <tr *ngFor=\"let obj of enquirylist| paginate: config\">\r\n                               \r\n                                <td><span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.ENQREFNO)\">{{obj.ENQREFNO}}</span></td>\r\n                                <td><span class=\"col-form-span-label \" >{{obj.SALESPERSON}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.AGENT_NAME}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.BRANCH}}</span></td>\r\n                              \r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n         </div>\r\n         <div class=\"col-sm-1\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/quotation/quot-rate-master-entry.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/quotation/quot-rate-master-entry.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header formheading\">\r\n            <strong>{{Header| uppercase}}</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\"> </div> \r\n            <div class=\"col-sm-8\">\r\n                <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                    <tr>\r\n                        <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        Quotation Rate  \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td ><span class=\"col-form-span-label\"><b>Shipping Line</b> </span><span\r\n                                class=\"col-form-span-error\">*</span></td>\r\n                        <td colspan=\"3\">\r\n                            <!-- <select class=\"form-control  \" [(ngModel)]=\"client\">\r\n                                <option value=\"\">--Please Select Client--</option>\r\n                                <option *ngFor=\"let data of clientable\" value={{data.DATAVALUE}}>{{data.DATATEXTVALUE}}\r\n                                </option>\r\n                            </select> -->\r\n                            <ng-select [items]=\"linertable\"\r\n                                bindLabel=\"DATATEXTVALUE\"\r\n                                bindValue=\"DATAVALUE\" \r\n                                [(ngModel)]=\"liner\"\r\n                                class=\"custom\"  \r\n                                placeholder=\"--Please Select--\" >\r\n                             </ng-select>\r\n                        </td>\r\n                    </tr>\r\n                    <!-- <tr>\r\n                        <td colspan=\"4\">\r\n                            <table  class=\"table table-bordered table-sm-new bgwhite\">\r\n                                <tr>\r\n                                    <td ><span class=\"col-form-span-label\"><b>Shipment Type </b> </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <select class=\"form-control width100\" [(ngModel)]=\"shipmenttype\">\r\n                                            <option value=\"\">-- Select --</option>\r\n                                            <option *ngFor=\"let d of shipmenttypetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </td>\r\n                                    <td ><span class=\"col-form-span-label\"><b>Shipment Mode </b> </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <select class=\"form-control width100\" [(ngModel)]=\"shipmentmode\">\r\n                                            <option value=\"\">-- Select --</option>\r\n                                            <option *ngFor=\"let d of shipmentmodetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </td>\r\n                                    <td ><span class=\"col-form-span-label\"><b>Stuff Type </b> </span><span\r\n                                        class=\"col-form-span-error\">*</span>\r\n                                </td>\r\n                                <td>\r\n                                    <select class=\"form-control width120\" [(ngModel)]=\"stufftype\">\r\n                                        <option value=\"\">-- Select--</option>\r\n                                        <option *ngFor=\"let d of stufftypetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr> -->\r\n                     <tr>\r\n                        \r\n                        <td ><span class=\"col-form-span-label\"><b>Shipment Type </b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                            </td>\r\n                        <td>\r\n                            <select class=\"form-control width120\" [(ngModel)]=\"shipmenttype\">\r\n                                <option value=\"\">--Please Select --</option>\r\n                                <option *ngFor=\"let d of shipmenttypetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                                </option>\r\n                            </select>\r\n                        </td>\r\n                        <td ><span class=\"col-form-span-label\"><b>Shipment Mode </b> </span>\r\n                            <span  class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td>\r\n                            <select class=\"form-control width100\" [(ngModel)]=\"shipmentmode\">\r\n                                <option value=\"\">-- Select --</option>\r\n                                <option *ngFor=\"let d of shipmentmodetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                                </option>\r\n                            </select>\r\n                        </td>\r\n                     </tr>\r\n                        <tr>\r\n                        <td ><span class=\"col-form-span-label\"><b>Stuff Type </b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <td>\r\n                        <select class=\"form-control width120\" [(ngModel)]=\"stufftype\">\r\n                            <option value=\"\">--Please Select--</option>\r\n                            <option *ngFor=\"let d of stufftypetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}</option>\r\n                        </select>\r\n                    </td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td ><span class=\"col-form-span-label\"><b>Pol </b> </span><span\r\n                                class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td >\r\n                            <ng-select [items]=\"commoncities\"\r\n                            bindLabel=\"CITY_NAME\"\r\n                            bindValue=\"CITY_CODE\"\r\n                            placeholder=\"--Select--\" \r\n                            [(ngModel)]=\"pol\"\r\n                            (change)=\"GetTerminal(pol)\"\r\n                            class=\"form-control width150\"\r\n                            >\r\n                 </ng-select>\r\n                        </td>\r\n                        <td ><span class=\"col-form-span-label\"><b>Terminal </b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                    <td>\r\n                        <select class=\"form-control width120\" [(ngModel)]=\"loadingportterminal\">\r\n                            <option value=\"\">--Please Select --</option>\r\n                            <option *ngFor=\"let d of portterminal\" value={{d.ID}}>{{d.TERMINAL}}\r\n                            </option>\r\n                        </select>\r\n                        <!-- <ng-select [items]=\"portterminal\"\r\n                        bindLabel=\"TERMINAL\"\r\n                        bindValue=\"ID\"\r\n                        [(ngModel)]=\"loadingportterminal\"\r\n                        class=\"form-control width150\"\r\n                     \r\n                        > \r\n             </ng-select>-->\r\n                    </td>\r\n                 \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Pod </b> </span><span\r\n                                class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td >\r\n                            <ng-select [items]=\"commoncities\"\r\n                            bindLabel=\"CITY_NAME\"\r\n                            bindValue=\"CITY_CODE\"\r\n                            placeholder=\"--Select--\" \r\n                            [(ngModel)]=\"pod\"\r\n                            class=\"form-control width150\"\r\n                            >\r\n                 </ng-select>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>Item Type </b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                    <td>\r\n                        <select class=\"form-control width120\" [(ngModel)]=\"itemtype\">\r\n                            <option value=\"\">-- Select --</option>\r\n                            <option *ngFor=\"let d of itemtypetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                            </option>\r\n                        </select>\r\n                    </td>\r\n                     \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Container Type </b> </span><span\r\n                                class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td >\r\n                            <select class=\"form-control width120\" [(ngModel)]=\"conttype\">\r\n                                <option value=\"\">--Please Select--</option>\r\n                                <option *ngFor=\"let d of conttypetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>Container Size </b> </span><span\r\n                            class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td>\r\n                        <select class=\"form-control width120\" [(ngModel)]=\"contsize\">\r\n                            <option value=\"\">--Please Select --</option>\r\n                            <option *ngFor=\"let d of contsizetable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                            </option>\r\n                        </select>\r\n                        </td>\r\n                                 \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Charges </b> </span><span\r\n                                class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td colspan=\"3\">\r\n                            <!-- <select class=\"form-control\" [(ngModel)]=\"charges\">\r\n                                <option value=\"\">--Please Select--</option>\r\n                                <option *ngFor=\"let d of chargestable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}</option>\r\n                            </select> -->\r\n                            <ng-select [items]=\"chargestable\"\r\n                            bindLabel=\"DATATEXTVALUE\"\r\n                            bindValue=\"DATAVALUE\" \r\n                            [(ngModel)]=\"charges\"\r\n                            class=\"custom\"\r\n                            placeholder=\"--Please Select--\"  >\r\n                     </ng-select>\r\n                        </td>\r\n                      \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Currency</b> </span><span\r\n                                class=\"col-form-span-error\">*</span></td>\r\n                        <td >\r\n                            <select class=\"form-control width150\" [(ngModel)]=\"currency\">\r\n                                <option value=\"\">--Please Select Currency--</option>\r\n                                <option *ngFor=\"let d of currencytable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\r\n                                </option>\r\n\r\n                            </select>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Rate</b></span><span\r\n                                class=\"col-form-span-error\">*</span> </td>\r\n                        <td> <input [(ngModel)]=\"rate\" OnlyNumber=\"true\"  type=\"text\" class=\"form-control width180\" OnlyNumber=\"true\" (blur)=\"onchangefindcomma(rate)\" > </td>\r\n                     \r\n                        <td><span class=\"col-form-span-label\"><b>Ex.Rate</b></span><span\r\n                            class=\"col-form-span-error\">*</span> </td>\r\n                    <td> <input [(ngModel)]=\"exrate\" OnlyNumber=\"true\"  type=\"text\" class=\"form-control width180\" OnlyNumber=\"true\" (blur)=\"onchangefindcomma(rate)\" > </td>  \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Effective From </b> </span><span\r\n                                class=\"col-form-span-error\">*</span>\r\n                        </td>\r\n                        <td>\r\n                            <my-date-picker name=\"Effective_from0\" [options]=\"myDatePickerOptions\"\r\n                                (dateChanged)=\"onDateChanged($event)\" [selDate]=\"Effective_from0\"></my-date-picker>\r\n\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>Effective To </b> </span><span\r\n                                class=\"col-form-span-error\">*</span></td>\r\n                        <td> \r\n                            <my-date-picker name=\"Effective_to0\" [options]=\"myDatePickerOptions\"\r\n                                (dateChanged)=\"onDateChanged1($event)\" [selDate]=Effective_to0></my-date-picker>\r\n\r\n                        </td>\r\n                    </tr>\r\n              <tr>\r\n                        <td colspan=\"4\" class=\"centerlabel\">\r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addquotationrate()\"> <span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>{{txtsubmit}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                    (click)=\"ResetQuotationrate();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <div class=\"xyscroll\" style=\"width:715px;height: 150px;\">\r\n                                <table class=\"table table-responsive-sm table-bordered\">\r\n                                    <thead>\r\n                                        <tr class=\"title-head formheading\">\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label\">Shipping Line</th>\r\n                                            <th class=\"col-form-span-label\">Shipment Type</th>\r\n                                            <th class=\"col-form-span-label\">Pol</th>\r\n                                            <th class=\"col-form-span-label\">Pod</th>\r\n                                            <th class=\"col-form-span-label\">Charge name</th>\r\n                                            <th class=\"col-form-span-label\">Currency</th>\r\n                                            <th class=\"col-form-span-label\">Rate</th>\r\n                                            <th class=\"col-form-span-label\">Ex.Rate</th>\r\n                                           \r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody *ngIf=\"ratedetails.length>0\">\r\n                                        <tr *ngFor=\"let obj of ratedetails\">\r\n                                            <td class=\"centerlabel\">\r\n                                                <i class=\"fa fa-pencil\" (click)=\"EditQuotationrate(obj.PKRTID)\"></i>\r\n                                                &nbsp;\r\n                                                <i class=\"fa fa-trash\" (click)=\"DeleteQuotationrate(obj.PKRTID)\"></i>\r\n                                            </td>\r\n                                          \r\n                                            <td><span class=\"col-form-span-label\">{{obj.LINER_NAME}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.SHIPMENTYPETEXT}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.POLNAME}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.PODNAME}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.CHRG_DESC}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.CUR_SNAME}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.RATE}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.EXRATE}}</span></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                  \r\n                </table>\r\n            </div>\r\n             <div class=\"col-sm-2\"> </div> \r\n        </div>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/quotation/quotation.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/quotation/quotation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Styles moved to component SCSS: client-origin-rate-entry.component.scss (backup preserved there) -->\n<div class=\"sales-form-wrapper\">\n\n<div class=\"animated fadeIn bg-body-tertiary min-vh-100 d-flex flex-column justify-content-center align-items-center\">\n    <div class=\"card shadow-lg rounded-5 border-0  w-100\" style=\"width: 100%;\">\n        <div class=\"card-body p-1\">\n            <table class=\"table table-borderless   table-sm align-middle mb-0 w-100\">\n                    <tr>\n                        <td class=\"col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary\" style=\"font-size: 1.05rem; line-height: 1.2;\" colspan=\"4\">\n                            Master Details\n                        </td>\n                    </tr>\n                    <tr>\n                    <td style=\"width:150px;\" >\n                        <label for=\"enqrefno\" class=\"form-label\">Quot No.</label>\n                        <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Quot No.</span><span class=\"col-form-span-error\">*</span> -->\n                    </td>\n                        <td> <input type=\"text\" class=\"form-control width180\" [disabled]=true [(ngModel)]=\"quotno\"> </td>\n                        <td>\n                             <label for=\"enqrefno\" class=\"form-label\">Quot Dt.</label>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Quot Dt.</span> -->\n                        </td>\n                        <td  style=\"text-align: left;\">\n                            <!-- <app-date-picker-wrapper [(dateString)]=\"quotdate\" > </app-date-picker-wrapper> -->\n                                <my-date-picker name=\"quotdate\" [options]=\"myDatePickerOptions\"\n                                (dateChanged)=\"onquotDateChanged($event)\" [selDate]=quotdate></my-date-picker>\n\n                        </td>\n                      \n                    </tr>\n                  <tr>\n                        <td >\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Shipment Mode</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"enqrefno\" class=\"form-label\">Shipment Mode</label>\n\n                        </td>\n                        <td>\n                            <ng-select [items]=\"shpmodetable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"shipmode\"  (ngModelChange)=\"changeshipmentmode($event)\"\n                                class=\"custom rounded-pill  short-select\"\n                                placeholder=\"--Please Select Shipment Mode--\">\n                            </ng-select>\n                        </td>\n                        <td class=\"width150\">\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Shipment Type</span><span class=\"col-form-span-error\">*</span> -->\n                             <label for=\"shipmenttype\" class=\"form-label\">Shipment Type</label>\n                        </td>\n                        <td>\n                            <ng-select [items]=\"shipmentable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"shiptype\"\n                                class=\"custom rounded-pill  short-select\"\n                                placeholder=\"--Please Select Shipment Type--\">\n                            </ng-select>\n                        </td>\n                                     \n                    </tr>\n                    <tr>\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Client</span><span class=\"col-form-span-error\">*</span> -->\n                        <label for=\"client\" class=\"form-label\">Client</label>\n                        </td>\n                        <td class=\"client-td\">\n                            <ng-select [items]=\"clientable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"client\"\n                                class=\"custom rounded-pill  fixed-select client-select\"\n                                placeholder=\"--Please Select Client--\">\n                            </ng-select>\n                        </td>\n\n                        <td>\n                             <label *ngIf=\"shipmode=='SEA'\" for=\"client\" class=\"form-label\">Shipping Line</label>\n                              <span *ngIf=\"shipmode=='SEA'\" class=\"col-form-span-error\">*</span>\n                               <label *ngIf=\"shipmode=='AIR'\" for=\"client\" class=\"form-label\">Air Line</label>\n                            <!-- <span *ngIf=\"shipmode=='SEA'\" class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Shipping Line</span> -->\n                            <!-- <span *ngIf=\"shipmode=='SEA'\" class=\"col-form-span-error\">*</span> -->\n                             <!-- <span *ngIf=\"shipmode=='AIR'\" class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Air Line</span> -->\n                             <span *ngIf=\"shipmode=='AIR'\" class=\"col-form-span-error\">*</span>\n                        \n                        </td>\n                        <td class=\"liner-td\">\n                            <ng-select *ngIf=\"shipmode=='SEA'\" [items]=\"linertable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"liner\"\n                                class=\"custom rounded-pill  fixed-select liner-select\"\n                                placeholder=\"--Please Select Shipping Line--\">\n                            </ng-select>\n                             <ng-select *ngIf=\"shipmode=='AIR'\" [items]=\"airlinetable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"airline\"\n                                class=\"custom rounded-pill  fixed-select liner-select\"\n                                placeholder=\"--Please Select Airline Line--\">\n                            </ng-select>\n                        </td>\n                    </tr>\n                    <!-- <tr>\n                        <td colspan=\"4\">\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\n                                <tr>\n                                    <td><span class=\"col-form-span-label\"><b>Origin </b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td>\n                                    <select class=\"form-control width120\" [(ngModel)]=\"origin\">\n                                        <option value=\"\">--Please Select--</option>\n                                        <option *ngFor=\"let d of origintable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}</option>\n                                    <tr>\n                                        <td><span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Client</span><span class=\"col-form-span-error\">*</span></td>\n                                        <td class=\"client-td\">\n                                            <ng-select [items]=\"clientable\"\n                                                bindLabel=\"DATATEXTVALUE\"\n                                                bindValue=\"DATAVALUE\"\n                                                [(ngModel)]=\"client\"\n                                                class=\"custom rounded-pill w-100 fixed-select\"\n                                                placeholder=\"--Please Select Client--\">\n                                            </ng-select>\n                                        </td>\n\n                                        <td><span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Shipping Line</span><span class=\"col-form-span-error\">*</span></td>\n                                        <td class=\"liner-td\">\n                                            <ng-select [items]=\"linertable\"\n                                                bindLabel=\"DATATEXTVALUE\"\n                                                bindValue=\"DATAVALUE\"\n                                                [(ngModel)]=\"liner\"\n                                                class=\"rounded-pill w-100 fixed-select\"\n                                                placeholder=\"--Please Select Shipping Line--\">\n                                            </ng-select>\n                                        </td>\n                                    </tr>\n\n                                    <tr>\n                                        <td><span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Company</span><span class=\"col-form-span-error\">*</span></td>\n                                        <td colspan=\"3\" class=\"company-td\">\n                                            <ng-select [items]=\"compnytable\"\n                                                bindLabel=\"DATATEXTVALUE\"\n                                                bindValue=\"DATAVALUE\"\n                                                [(ngModel)]=\"company\"\n                                                class=\"rounded-pill w-100 fixed-select\"\n                                                placeholder=\"--Please Select Company--\">\n                                            </ng-select>\n                                        </td>\n                                    </tr>\n                                </tr>\n                            </table>\n\n                        </td>\n                    </tr> -->\n                    <tr>\n                        <td>\n                          <!--   <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Origin</span><span class=\"col-form-span-error\">*</span> -->\n                             <label for=\"origin\" class=\"form-label\">Origin</label>\n                        </td>\n                        <td>\n                            <ng-select [items]=\"origintable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"origin\"\n                                class=\"custom rounded-pill   short-select\"\n                                placeholder=\"--Please Select Origin--\" > \n                            </ng-select>\n                        </td>\n                            <td>\n                                <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Valid Upto</span><span class=\"col-form-span-error\">*</span> -->\n                                 <label for=\"validupto\" class=\"form-label\">Valid Upto</label>\n                        </td>\n                        <td>\n                            <!-- <app-date-picker-wrapper [(dateString)]=\"Quotvaliddate\" > </app-date-picker-wrapper> -->\n                            <my-date-picker name=\"Quotvaliddate\" [options]=\"myDatePickerOptions\"\n                                (dateChanged)=\"QuotValidDateChanged($event)\" [selDate]=\"Quotvaliddate\"></my-date-picker>\n                        </td>\n                    </tr>\n                 \n\n                      <tr *ngIf=\"shipmode=='AIR'\">\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Volume</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"volume\" class=\"form-label\">Volume</label>\n                        </td>\n                        <td>\n                             <input [(ngModel)]=\"volume\" type=\"text\"  class=\"form-control text-end rounded-pill width150\"  />\n                                        \n                        </td>\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Weight</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"weight\" class=\"form-label\">Weight</label>\n                             </td>\n                        <td>\n                            <input [(ngModel)]=\"weight\" type=\"text\"  class=\"form-control text-end rounded-pill width150 \"  />\n                        </td>\n                                     \n                    </tr>\n                     <tr *ngIf=\"shipmode=='AIR'\">\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Ch Weight</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"chweight\" class=\"form-label\">Ch Weight</label>\n                        </td>\n                        <td>\n                             <input [(ngModel)]=\"chweight\" type=\"text\"  class=\"form-control text-end rounded-pill width150\"  />\n                                        \n                        </td>\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Load</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"load\" class=\"form-label\">Load</label>\n                        </td>\n                        <td>\n                            <input [(ngModel)]=\"load\" type=\"text\"  class=\"form-control text-end rounded-pill width250\"  />\n                        </td>\n                                     \n                    </tr>\n\n\n                       <tr>\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Incoterm</span><span class=\"col-form-span-error\">*</span> -->\n                           <label for=\"incoterm\" class=\"form-label\">Incoterm</label>      \n                        </td>\n                        <td>\n                            <ng-select [items]=\"incotermtable\"\n                                bindLabel=\"DATATEXTFIELD\"\n                                bindValue=\"DATAVALUEFIELD\"\n                                [(ngModel)]=\"incoterm\"\n                                class=\"custom rounded-pill   short-select\"\n                                placeholder=\"--Please Select Incoterm--\">\n                            </ng-select>\n                        </td>\n                        <td *ngIf=\"shipmode=='SEA'\" >\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Load Type</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"loadtype\" class=\"form-label\">Load Type</label>\n                        </td>\n                        <td *ngIf=\"shipmode=='SEA'\">\n                            <ng-select [items]=\"containerloadtypetable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"contloadtype\"\n                                class=\"custom rounded-pill  short-select\"\n                                placeholder=\"--Please Select Load Type--\">\n                             </ng-select>\n                        </td>\n                        \n                    \n                    </tr>\n                    <!-- Shipping Line moved to Client row; duplicate row removed -->\n                    <!-- <tr>\n                        <td><span class=\"col-form-span-label\"><b>Shipping Line </b> </span><span class=\"col-form-span-error\">*</span></td>\n                        <td >\n                            <ng-select [items]=\"linertable\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"liner\"\n                                class=\"rounded-pill\"\n                                placeholder=\"--Please Select Shipping Line--\">\n                            </ng-select>\n                        </td>\n                    </tr> -->\n                    <!-- <tr>\n                \n                    <td><span class=\"col-form-span-label\"><b>Shipment Type </b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                        </td>\n                    <td>\n                        <select class=\"form-control width120\" [(ngModel)]=\"shiptype\">\n                            <option value=\"\">--Please Select --</option>\n                            <option *ngFor=\"let d of shipmentable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}\n                            </option>\n                        </select>\n                    </td>\n                    <td colspan=\"2\"></td>\n                    </tr> -->\n                    <!-- <tr>\n                        <td><span class=\"col-form-span-label\"><b>Quotation Valid Upto </b> </span><span\n                                class=\"col-form-span-error\">*</span>\n                        </td>\n                        <td>\n                            <app-date-picker-wrapper [(dateString)]=\"Quotvaliddate\" > </app-date-picker-wrapper>\n                             <my-date-picker name=\"Quotvaliddate\" [options]=\"myDatePickerOptions\"\n                                (dateChanged)=\"QuotValidDateChanged($event)\" [selDate]=\"Quotvaliddate\"></my-date-picker> \n                        </td>\n                        </tr>  -->\n                    <!-- <tr>\n                        <td colspan=\"4\" align=\"center\" class=\"col-form-span-heading\">\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"SearchLinerData()\"> <span\n                                    class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Search</span></button>\n                        \n                        </td>\n                    </tr> -->\n                    <!-- Port Details header removed per request -->\n                    <tr>\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Pol</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"pol\" class=\"form-label\">Pol</label>\n                            <!-- #region -->\n                        </td>\n                        <td>\n                            <ng-select [items]=\"commoncities\"\n                                bindLabel=\"CITY_NAME\"\n                                bindValue=\"CITY_CODE\"\n                                [(ngModel)]=\"pol\"\n                                class=\"custom rounded-pill  short-select\"\n                                placeholder=\"--Please Select POL--\">\n                            </ng-select>\n                        </td>\n                        <td>\n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Pod</span><span class=\"col-form-span-error\">*</span> -->\n                            <label for=\"pod\" class=\"form-label\">Pod</label>\n                            <!-- #region -->\n                        </td>\n                        <td>\n                            <ng-select [items]=\"commoncities\"\n                                bindLabel=\"CITY_NAME\"\n                                bindValue=\"CITY_CODE\"\n                                [(ngModel)]=\"pod\"\n                                class=\"custom rounded-pill  short-select\"\n                                placeholder=\"--Please Select POD--\">\n                            </ng-select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> \n                            <!-- <span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Narration</span> -->\n                            <label for=\"narration\" class=\"form-label \">Narration</label>\n                         </td>\n                        <td colspan=\"3\">\n                            <!-- (input)=\"Narrationarea()\" -->\n                            <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\n                            placeholder=\"text\" cols=\"50\" rows=\"4\" [innerHTML]=\"narration\"></textarea>\n                        </td>\n                    </tr>\n    <tr>\n                        <td class=\"col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary\" style=\"font-size: 1.05rem; line-height: 1.2;\" colspan=\"4\">\n                            Charges Details\n                        </td>\n                    </tr>  \n                    <tr>\n  <td colspan=\"4\">\n    <div class=\"container-fluid py-0\">\n\n      <!-- 🔹 Header Row -->\n      <div class=\"row fw-semibold  border-bottom pb-1 align-items-center\">\n        <!-- <div class=\"col-md-3 text-dark fw-semibold\" style=\"font-size: 1rem;\">Chrg Type</div> -->\n         <div class=\"col-md-3\" >\n            <label class=\"form-label\">Charge Type</label>\n        </div> \n          <div class=\"col-md-5\" >\n            <label class=\"form-label\">Account</label>\n        </div> \n         <div class=\"col-md-2\" >\n            <label class=\"form-label\">Currency</label>\n        </div> \n         <div class=\"col-md-2\" >\n            <label class=\"form-label\">&nbsp;</label>\n        </div> \n        <!-- <div class=\"col-md-5 text-dark fw-semibold\" style=\"font-size: 1rem;\">Account / Charge Name</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Currency</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">&nbsp;</div> -->\n      </div>\n\n      <!-- 🔹 First Row Inputs -->\n      <div class=\"row g-2 mt-2 align-items-center\">\n        <div class=\"col-md-3\">\n          <ng-select [items]=\"chngetypetable\"\n            bindLabel=\"DATATEXTVALUE\"\n            bindValue=\"DATAVALUE\"\n            [(ngModel)]=\"chargetype\"\n            class=\"custom rounded-pill w-100\"\n            placeholder=\"--Select--\">\n          </ng-select>\n        </div>\n        <div class=\"col-md-5\">\n          <ng-select [items]=\"accountable\"\n            bindLabel=\"DATATEXTVALUE\"\n            bindValue=\"DATAVALUE\"\n            [(ngModel)]=\"acccode\"\n            class=\"custom rounded-pill w-100\"\n            placeholder=\"--Select Account / Charge--\">\n          </ng-select>\n        </div>\n        <div class=\"col-md-3\">\n          <ng-select [items]=\"currencytable\"\n            bindLabel=\"DATATEXTVALUE\"\n            bindValue=\"DATAVALUE\"\n            [(ngModel)]=\"currency\"\n            (ngModelChange)=\"getexchangerate($event)\"\n            class=\"custom rounded-pill w-100\"\n            placeholder=\"--Currency--\">\n          </ng-select>\n        </div>\n        <div class=\"col-md-1\"></div>\n      </div>\n\n      <!-- 🔹 Second Header Row -->\n      <div class=\"row fw-semibold  border-bottom mt-3 pb-1 align-items-center\">\n        <div class=\"col-md-2\" > \n            <label class=\"form-label\">Rate</label>\n        </div> \n         <div class=\"col-md-2\" > \n            <label class=\"form-label\">Ex. Rate</label>\n        </div> \n         <div class=\"col-md-2\" > \n            <label class=\"form-label\">Min Rate</label>\n        </div> \n         <div class=\"col-md-2\" > \n            <label class=\"form-label\">Unit</label>\n        </div> \n         <div class=\"col-md-2\" > \n            <label class=\"form-label\">Unit Type</label>\n        </div> \n         <div class=\"col-md-2\" > \n            <label class=\"form-label\">Actions</label>\n        </div>\n        <!-- <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Rate</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Ex. Rate</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Min Rate</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Unit</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Unit Type</div>\n        <div class=\"col-md-2 text-dark fw-semibold\" style=\"font-size: 1rem;\">Actions</div> -->\n      </div>\n\n      <!-- 🔹 Second Row Inputs + Buttons -->\n      <div class=\"row g-2 mt-2 align-items-center\">\n         <div class=\"col-md-2\">\n          <input [(ngModel)]=\"rate\" OnlyNumber=\"true\" type=\"text\"\n            class=\"form-control text-end\" placeholder=\"Rate\" />\n        </div>\n        <div class=\"col-md-2\">\n          <input [(ngModel)]=\"exrate\" OnlyNumber=\"true\" type=\"text\" [disabled]=\"disableexrate\"\n            class=\"form-control text-end\" placeholder=\"Ex. Rate\" />\n        </div>\n       \n        <div class=\"col-md-2\">\n          <input [(ngModel)]=\"minrate\" OnlyNumber=\"true\" type=\"text\"\n            class=\"form-control text-end\" placeholder=\"Min Rate\" />\n        </div>\n         <div class=\"col-md-2\">\n          <input [(ngModel)]=\"unit\" OnlyNumber=\"true\" type=\"text\"\n            class=\"form-control text-end\" placeholder=\"Unit\" />\n        </div>\n        <div class=\"col-md-2\">\n          <ng-select [items]=\"unittabel\"\n            bindLabel=\"DATATEXTVALUE\"\n            bindValue=\"DATAVALUE\"\n            [(ngModel)]=\"unittype\"\n            class=\"custom rounded-pill w-100\"\n            placeholder=\"--Unit--\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-2 d-flex justify-content-start\">\n          <button class=\"btn btn-success btn-sm rounded-pill px-3 me-2\" (click)=\"Addchilddata()\">\n            <i class=\"fa fa-plus me-1\"></i> {{childbtntext}}\n          </button>\n          <button class=\"btn btn-warning btn-sm rounded-pill px-3\" (click)=\"Resetchildrecd()\">\n            <i class=\"fa fa-undo me-1\"></i> Reset\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </td>\n</tr>\n           \n\n    \n            \n\n  \n\n                  <!-- <tr>\n    <td colspan=\"4\">\n        \n        <table class=\"table table-borderless mb-0 w-100 charges-inputs\" style=\"table-layout: fixed;\">\n            <colgroup>\n                <col style=\"width:120px\">  \n                <col>                     \n                <col style=\"width:110px\"> \n            </colgroup>\n            <thead>\n                <tr class=\"table-light\">\n                    <th class=\"small text-muted text-center\">Chrg Type</th>\n                    <th class=\"small text-muted\">Account / Charge Name</th>\n                    <th class=\"small text-muted text-center\">Currency</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class=\"align-middle\">\n                        <ng-select [items]=\"chngetypetable\"\n                            bindLabel=\"DATATEXTVALUE\"\n                            bindValue=\"DATAVALUE\"\n                            [(ngModel)]=\"chngetype\"\n                            class=\"rounded-pill\"\n                            placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                    <td class=\"align-middle\">\n                        <ng-select [items]=\"accountable\"\n                            bindLabel=\"DATATEXTVALUE\"\n                            bindValue=\"DATAVALUE\"\n                            [(ngModel)]=\"acccode\"\n                            class=\"custom w-100 fixed-select\"\n                            placeholder=\"--Select Account / Charge--\">\n                        </ng-select>\n                    </td>\n                    <td class=\"align-middle text-center\">\n                        <ng-select [items]=\"currencytable\"\n                            bindLabel=\"DATATEXTVALUE\"\n                            bindValue=\"DATAVALUE\"\n                            [(ngModel)]=\"currency\"\n                            class=\"rounded-pill\"\n                            placeholder=\"--Currency--\">\n                        </ng-select>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n      \n        <table class=\"table table-borderless mb-0 w-100 charges-inputs\" style=\"table-layout: fixed; margin-top: -5px;\">\n            <colgroup>\n                <col style=\"width:110px\"> \n                <col style=\"width:110px\">\n                <col style=\"width:110px\"> \n                <col style=\"width:90px\"> \n            </colgroup>\n            <thead>\n                <tr class=\"table-light\">\n                    <th class=\"small text-muted text-end\">Ex. Rate</th>\n                    <th class=\"small text-muted text-end\">Rate</th>\n                    <th class=\"small text-muted text-end\">Min Rate</th>\n                    <th class=\"small text-muted text-center\">Unit</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class=\"align-middle text-end\">\n                        <input [(ngModel)]=\"exrate\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width110 text-end\" (blur)=\"onchangefindcomma(exrate)\" />\n                    </td>\n                    <td class=\"align-middle text-end\">\n                        <input [(ngModel)]=\"rate\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width110 text-end\" (blur)=\"onchangefindcomma(rate)\" />\n                    </td>\n                    <td class=\"align-middle text-end\">\n                        <input [(ngModel)]=\"minrate\" type=\"text\" class=\"form-control width110 text-end\" OnlyNumber=\"true\" (blur)=\"onchangefindcomma(minrate)\" />\n                    </td>\n                    <td class=\"align-middle text-center\">\n                        <ng-select [items]=\"unitabel\"\n                            bindLabel=\"DATATEXTVALUE\"\n                            bindValue=\"DATAVALUE\"\n                            [(ngModel)]=\"unit\"\n                            class=\"rounded-pill\"\n                            placeholder=\"--Unit--\">\n                        </ng-select>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </td>\n</tr>   -->\n\n                    <!-- <tr>\n                        <td   ><span class=\"col-form-span-label fw-semibold text-dark\" style=\"font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; font-size: 1rem;\">Unit</span><span class=\"col-form-span-error\">*</span></td>\n                        <td  >\n                            <ng-select [items]=\"unitabel\"\n                                bindLabel=\"DATATEXTVALUE\"\n                                bindValue=\"DATAVALUE\"\n                                [(ngModel)]=\"unit\"\n                                class=\"rounded-pill\"\n                                placeholder=\"--Please Select Unit--\">\n                            </ng-select>\n                        </td>\n\n                       \n                    </tr> -->\n\n\n                    <!-- <tr>\n                        <td colspan=\"4\" class=\"centerlabel py-3\">\n                            <button class=\"btn btn-success btn-sm rounded-pill px-4 shadow fw-semibold me-2\" type=\"submit\" (click)=\"Addchilddata()\">\n                                <i class=\"fa fa-dot-circle-o me-2\"></i>{{txtchild}}\n                            </button>\n                            <button class=\"btn btn-outline-danger btn-sm rounded-pill px-4 shadow fw-semibold\" type=\"reset\" (click)=\"ResetClientrate();\">\n                                <i class=\"fa fa-ban me-2\"></i> Reset\n                            </button>\n                        </td>\n                    </tr> -->\n<tr>\n  <td colspan=\"4\">\n    <table class=\"table table-sm  align-middle mb-0 w-100 shadow-sm charges-table rounded-4 overflow-hidden\">\n      <thead class=\"table-primary\">\n        <tr class=\"text-primary bg-body-secondary text-center\">\n          <th style=\"width: 50px;\">✏️</th>\n          <!-- <th *ngIf=\"visible == '1'\" style=\"width: 60px;\">Index</th> -->\n          <th style=\"width: 100px;\">Charge Type</th>\n          <th style=\"width: 250px;\" >Charge Name</th>\n          <th style=\"width: 180px;\">Unit</th>\n           <th style=\"width: 180px;\">Unit Type</th>\n          <th style=\"width: 120px;\">Currency</th>\n          <th style=\"width: 110px;\" class=\"text-end\">Rate</th>\n          <th style=\"width: 110px;\" class=\"text-end\">Min Rate</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let obj of chargesdetails; index as i\" class=    \"border-bottom\">\n          <td class=\"text-center width100\">\n            <i class=\"fa fa-pencil text-primary cursor-pointer\" (click)=\"Editchildrecd(obj)\"></i> &nbsp;\n            <i class=\"fa fa-trash text-primary cursor-pointer\" (click)=\"Deletechildrecd(obj.PKID,obj.QUOTDTLID)\"></i>\n          </td>\n\n          <!-- <td *ngIf=\"visible == '1'\" class=\"text-center\">\n            {{ i + 1 }}\n          </td> -->\n           <td \n    class=\"text-start\"   [ngClass]=\"{\n        'text-success': obj.CHARGE_TYPETEXT === 'ORIGIN',     \n        'text-info': obj.CHARGE_TYPETEXT === 'DESTINATION'\n        \n    }\">    {{ obj.CHARGE_TYPETEXT }}</td>\n          <td class=\"label text-start\">{{ obj.CHRG_DESC }}</td>\n          <td class=\"label text-start\">{{ obj.UNIT}}</td>\n          <td class=\"label text-start\">{{ obj.UNITTYPENAME }}</td>\n          <td class=\"label text-start\">{{ obj.CUR_SNAME }}</td>\n          <td class=\"label text-end\">{{ obj.RATE }}</td>\n          <td class=\"label text-end\"> {{ obj.MIN_RATE }} </td>   </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n\n                    <!-- <tr>\n                        <td colspan=\"4\">\n                            \n    <table class=\"table table-borderless table-sm align-middle mb-0 w-100 rounded-4 overflow-hidden shadow-sm charges-table\" style=\"table-layout: fixed;\">\n    <thead class=\"table-primary\">\n        <tr class=\"col-form-span-heading py-1 bg-body-secondary text-start fw-semibold text-primary\">\n            <th class=\"col-form-span-label text-center\" style=\"width: 48px;\"></th> <th *ngIf=\"visible=='1'\" class=\"col-form-span-label text-center\" style=\"width: 64px;\">Index</th>\n            <th class=\"col-form-span-label text-start\">Charge name</th>\n            <th class=\"col-form-span-label text-center\" style=\"width: 180px;\">Unit</th>\n            <th class=\"col-form-span-label text-center\" style=\"width: 100px;\">Currency</th>\n            <th class=\"col-form-span-label text-end\" style=\"width: 110px;\">Rate</th>\n            <th class=\"col-form-span-label text-end\" style=\"width: 110px;\">Min Rate</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let obj of chargesdetails;index as i\">\n            <td class=\"centerlabel text-center\">\n                <i class=\"fa fa-pencil text-primary\" (click)=\"Editchildrecd(obj)\"></i>\n            </td>\n            <td *ngIf=\"visible=='1'\" class=\"text-center\"><span class=\"col-form-span-label\">{{i}}</span></td>\n            \n            <td class=\"text-start\"><span class=\"col-form-span-label\">{{obj.chrg_desc}}</span></td> \n            <td class=\"text-center\"><span class=\"col-form-span-label\">{{obj.STR_TEXT}}</span></td>\n            <td class=\"text-center\"><span class=\"col-form-span-label\">{{obj.CUR_SNAME}}</span></td>\n            <td class=\"text-end\"><span class=\"col-form-span-label\">{{obj.RATE}}</span></td>\n            <td class=\"text-end\"><span class=\"col-form-span-label\">{{obj.MIN_RATE}}</span></td>\n        </tr>\n    </tbody>\n</table>\n                        </td>\n                    </tr> -->\n                    <tr class=\"align-middle py-1\">\n                        <td colspan=\"4\" class=\"centerlabel py-4\">\n                            <button class=\"btn btn-success btn-sm rounded-pill px-4 shadow fw-semibold me-2\" type=\"submit\" (click)=\"Add_Final()\">\n                                <i class=\"fa fa-dot-circle-o me-2\"></i> Submit\n                            </button>\n                            <button class=\"btn btn-outline-danger btn-sm rounded-pill px-4 shadow fw-semibold\" type=\"reset\" (click)=\"ResetFinal();\">\n                                <i class=\"fa fa-ban me-2\"></i> Reset\n                            </button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/quotation/quotation.search.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/quotation/quotation.search.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n <div class=\"animated fadeIn\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <strong>{{SearchTitle}}</strong>\n                </div>\n            </div>\n        </div>\n    </div>\n   <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\n        <div class=\"col-sm-3\">\n        </div>\n        <div class=\"col-sm-6\">\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\" *ngIf=\"quotationlist.length==0\">\n                <tbody>\n               \n                    <tr class=\"trbg\">\n                        <td class=\"col-form-span-label width100\">\n                            <input type=\"radio\" name=\"exampleRadios\" value='1' [(ngModel)]=\"exampleRadios1\">&nbsp; Client\n                        </td>\n                        <td class=\"col-form-span-label width240\" colspan=\"4\">\n                        \n                            <ng-select [items]=\"clientable\"\n                            bindLabel=\"DATATEXTVALUE\"\n                            bindValue=\"DATAVALUE\"\n                            [(ngModel)]=\"client\"\n                            class=\"custom\"\n                            placeholder=\"--Please Select--\"\n                            [disabled]=\"exampleRadios1 != '1'\" >\n\n                         </ng-select>\n                        </td>\n                    </tr>\n\n\n            <tr class=\"trbg\" >\n                <td class=\"col-form-span-label width100\">\n                        <input   type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\"  [(ngModel)]=\"exampleRadios1\"\n                            value=\"2\" >\n                             Origin\n                </td>\n                <td colspan=\"4\">\n                            <select class=\"form-control width240\" [(ngModel)]=\"origin\" [disabled]=\"exampleRadios1 != '2'\">\n                            <option value=\"\">--Please Select --</option>\n                            <option *ngFor=\"let d of origintable\" value={{d.DATAVALUE}}>{{d.DATATEXTVALUE}}</option>\n                        </select>\n\n                </td>\n            </tr >\n\n                    <tr class=\"trbg\">\n\n                        <td class=\"col-form-span-label width100\">\n\n\n                          <input type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" [(ngModel)]=\"exampleRadios1\"\n                              value=\"3\"  >  Date\n                        </td>\n\n                              <td>\n                                  <span class=\"col-form-span-label width150\"><b>Start Date</b> </span>\n                                  <span class=\"col-form-span-error\">*</span>\n                              </td>\n                              <td>\n                                  <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"startdate\" [disabled]=\"exampleRadios1 != '3'\">\n                                  </my-date-picker>\n                      \n                              </td>\n                              <td>\n                                  <span class=\"col-form-span-label width150\"><b>End Date</b> </span>\n                                  <span class=\"col-form-span-error\">*</span>\n                              </td>\n                              <td>\n                                  <my-date-picker name=\"EndDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"enddate\" [disabled]=\"exampleRadios1 != '3'\">\n                                  </my-date-picker>\n                                \n                              </td>\n\n              </tr>\n              <tr>\n                <td colspan=\"5\" class=\"centerlabel\">\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"searchlist()\"><span\n                     class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\n                     <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                    (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                       \n                </td>\n            </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n     <div class=\"col-sm-3\">\n        </div>\n    </div>\n <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\n        <div class=\"col-sm-1\">\n        </div>\n         <div class=\"col-10 xyscroll\" style=\"height:550px;\" >\n              <table class=\"table  table-bordered table-sm-new bgwhite\">\n                        <thead>\n                               <tr class=\"title-head formheading\">\n                        <th colspan=\"6\">\n                             <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';quotationlist=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\n                        </th>\n                    </tr>\n                            <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\n                             \n                                <th class=\"col-form-span-label\">Quotation No</th>\n                                <th class=\"col-form-span-label\">Client</th>\n                                <th class=\"col-form-span-label\">Origin</th>\n                                <th class=\"col-form-span-label\">Shipment Mode </th>\n                                <th class=\"col-form-span-label\">Shipment Type</th>\n                                <th class=\"col-form-span-label\">Shipping/AirLine</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"bgwhite\">\n                            <tr *ngFor=\"let obj of quotationlist| paginate: config\">\n                              \n                                <td><span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.PK_QUOTID,obj.QUOT_CODE,obj.SHIP_MODE)\">{{obj.QUOT_CODE}}</span></td>\n                                <td><span class=\"col-form-span-label \" >{{obj.EXP_SNAME}}</span></td>\n                                <td><span class=\"col-form-span-label\">{{obj.CLIENT_ORIGIN}}</span></td>\n                                <td><span class=\"col-form-span-label\">{{obj.SHIP_MODE}}</span></td>\n                                <td><span class=\"col-form-span-label\">{{obj.SHIP_TYPE}}</span></td>\n                                <td *ngIf=\"obj.SHIP_MODE=='SEA'\" class=\"col-form-span-label\"> {{obj.SHIPPINGLINE }} </td>\n                                <td *ngIf=\"obj.SHIP_MODE=='AIR'\" class=\"col-form-span-label\"> {{obj.AIRLINENAME }} </td>\n                            </tr>\n                        </tbody>\n                    </table>\n         </div>\n         <div class=\"col-sm-1\">\n        </div>\n    </div>\n\n\n</div> -->\n<div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header \">\n                    <strong *ngIf=\"displayType=='SEARCH'\">Quotation Search</strong>\n                    <strong *ngIf=\"displayType=='LIST'\">Quotation List</strong>\n                      <div style=\"float: right;\">\n        <a href=\"javascript:void(0);\" \n           (click)=\"displayType='SEARCH'; quotationlist=[]\"\n           class=\"text-danger fw-semibold back-link\">\n          ← Back to Search\n        </a>\n        </div>\n                </div>\n                  \n            </div>\n        </div>\n    </div>\n<div class=\"row justify-content-center\" *ngIf=\"displayType=='SEARCH'\">\n  <div class=\"col-md-6\">\n\n    <div class=\"search-card shadow rounded bg-white p-3\">\n\n      <!-- <h6 class=\"text-center text-white p-2 rounded header-title\">\n        {{SearchTitle}}\n      </h6> -->\n\n      <!-- Radio: Client -->\n<div class=\"search-row d-flex align-items-center mb-3\">\n  <input type=\"radio\" \n         name=\"filterType\" \n         value=\"1\" \n         [(ngModel)]=\"exampleRadios1\" \n         class=\"mr-2\">\n\n  <label class=\"fw-semibold mb-0 mr-3\">Client</label>\n\n  <ng-select\n    [items]=\"clientable\"\n    bindLabel=\"DATATEXTVALUE\"\n    bindValue=\"DATAVALUE\"\n    [(ngModel)]=\"client\"\n    class=\"custom rounded-pill  liner-select\"\n    placeholder=\"--Please Select--\"\n    [disabled]=\"exampleRadios1 != '1'\">\n  </ng-select>\n</div>\n      <!-- Radio: Mode -->\n   <div class=\"search-row d-flex align-items-center mb-3\">\n        <input type=\"radio\" name=\"filterType\" value=\"2\" [(ngModel)]=\"exampleRadios1\" class=\"mr-2\"> \n        <label class=\"fw-semibold mb-0 mr-3\">Mode</label>\n\n\n        <ng-select\n    [items]=\"shpmodetable\"\n    bindLabel=\"DATATEXTVALUE\"\n    bindValue=\"DATAVALUE\"\n    [(ngModel)]=\"shipmode\"\n    class=\"custom rounded-pill  short-select\"\n    placeholder=\"--Please Select--\"\n    [disabled]=\"exampleRadios1 != '2'\">\n  </ng-select>\n\n      </div>\n      <!-- Radio: Origin -->\n   <div class=\"search-row d-flex align-items-center mb-3\">\n        <input type=\"radio\" name=\"filterType\" value=\"3\" [(ngModel)]=\"exampleRadios1\" class=\"mr-2\"> \n        <label class=\"fw-semibold mb-0 mr-3\">Origin</label>\n\n\n        <ng-select\n    [items]=\"origintable\"\n    bindLabel=\"DATATEXTVALUE\"\n    bindValue=\"DATAVALUE\"\n    [(ngModel)]=\"origin\"\n    class=\"custom rounded-pill  short-select\"\n    placeholder=\"--Please Select--\"\n    [disabled]=\"exampleRadios1 != '3'\">\n  </ng-select>\n\n      </div>\n\n      <!-- Radio: Date -->\n      <div class=\"search-row d-flex align-items-center mb-3\">\n        <div class=\"d-flex align-items-start mb-2\">\n          <input type=\"radio\" name=\"filterType\" value=\"4\" [(ngModel)]=\"exampleRadios1\" class=\"mr-2\">\n          <label class=\"fw-semibold\">Date Range</label>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6 p-0\">\n            <label class=\"form-label medium\">Start Date</label>\n            <my-date-picker\n              name=\"StartDate\"\n              [options]=\"myDatePickerOptions\"\n              [(ngModel)]=\"startdate\"\n              [disabled]=\"exampleRadios1 != '4'\">\n            </my-date-picker>\n          </div>\n\n          <div class=\"col-6\">\n            <label class=\"form-label medium\">End Date</label>\n            <my-date-picker\n              name=\"EndDate\"\n              [options]=\"myDatePickerOptions\"\n              [(ngModel)]=\"enddate\"\n              [disabled]=\"exampleRadios1 != '4'\">\n            </my-date-picker>\n          </div>\n        </div>\n      </div>\n\n      <!-- Buttons -->\n      <div class=\"text-center mt-3\">\n        <button class=\"btn btn-success btn-sm me-2\" (click)=\"searchlist()\">\n          <i class=\"fa fa-search\"></i> Search\n        </button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"Reset()\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<div class=\"row justify-content-center\" *ngIf=\"displayType=='LIST'\">\n\n  <div class=\"col-md-12\">\n\n    <div class=\"list-card shadow rounded bg-white p-3\">\n\n      <!-- Table -->\n      <div class=\"table-responsive\">\n        <table class=\"table modern-table custom-table\">\n          <thead>\n            <tr>\n              <th>Quotation No</th>\n              <th>Client</th>\n              <th>Origin</th>\n              <th>Shipment Mode</th>\n              <th>Shipment Type</th>\n              <th>Shipping / Airline</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let obj of quotationlist | paginate: config\">\n              <td>\n                <span class=\"anchor-link text-primary fw-semibold\"\n                      (click)=\"ListOnclick(obj.PK_QUOTID,obj.QUOT_CODE,obj.SHIP_MODE)\">\n                  {{obj.QUOT_CODE}}\n                </span>\n              </td>\n\n              <td>{{obj.EXP_SNAME}}</td>\n              <td>{{obj.CLIENT_ORIGIN}}</td>\n              <td>{{obj.SHIP_MODE}}</td>\n              <td>{{obj.SHIP_TYPE}}</td>\n\n              <td>\n                <span *ngIf=\"obj.SHIP_MODE=='SEA'\">{{obj.SHIPPINGLINE}}</span>\n                <span *ngIf=\"obj.SHIP_MODE=='AIR'\">{{obj.AIRLINENAME}}</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/master/quotation/enquiry.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/quotation/enquiry.component.ts ***!
  \*******************************************************/
/*! exports provided: EnquiryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryPageComponent", function() { return EnquiryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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
// enquiry-page.component.ts









var EnquiryPageComponent = /** @class */ (function () {
    function EnquiryPageComponent(fb, _dataService, _toasterService, loaderService, http, _activatedRoute, _loginService, datepipe, _router) {
        this.fb = fb;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.datepipe = datepipe;
        this._router = _router;
        this.enqmodetable = [];
        this.enqtypetable = [];
        this.enqeximtable = [];
        this.enqinputbytable = [];
        this.enqshipmenttable = [];
        this.incotermtable = [];
        this.enqnetworktable = [];
        this.enqcountrytable = [];
        this.enqsalespersontable = [];
        this.enqstatustable = [];
        this.enqbranchtable = [];
        this.enqdimensiontable = [];
        this.enqpoltable = [];
        this.enqpodtable = [];
        this.enqagenttable = [];
        this.enquirydetails = [];
        this.enquiryinputby = '';
        this.emailsubjectline = '';
        this.remarks = '';
        this.jobno = '';
        this.shipper = '';
        this.consignee = '';
        this.daystaken = '';
        this.specialremark = '';
        this.enqrefno = '';
        this.btntext = "SUBMIT";
        this.PKID = '0';
        //enqmodetable: any = [] 
        // Dropdown data arrays
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '160px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            //satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
        };
        this.myDatePickerOptions1 = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '160px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            //satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: true,
            openSelectorOnInputClick: true,
        };
    }
    EnquiryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enquiryForm = this.fb.group({});
        this.enqmodetable = [
            { DATAVALUE: 'Air', DATATEXTVALUE: 'Air' },
            { DATAVALUE: 'Sea', DATATEXTVALUE: 'Sea' },
        ];
        this.enqeximtable = [
            { DATAVALUE: 'Export', DATATEXTVALUE: 'Export' },
            { DATAVALUE: 'Import', DATATEXTVALUE: 'Import' },
        ];
        this._activatedRoute.params.subscribe(function (params) {
            _this.enqrefno = params["enquiryno"];
        });
        this.enqreceiptdt = new Date();
        this.enqreceiptdt = this._dataService.datechnge(this.enqreceiptdt);
        this.pageload();
        if (this.enqrefno != ' ') {
            this._loginService.verifyRights(432, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.editpopulate();
        }
        else {
            this._loginService.verifyRights(432, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        }
        // this.containerloadtypetable = [
        //   { DATAVALUE: 'LCL/FCL', DATATEXTVALUE: 'LCL/FCL' },
        //   { DATAVALUE: 'FCL/FCL', DATATEXTVALUE: 'FCL/FCL' },
        //   { DATAVALUE: 'LCL/LCL', DATATEXTVALUE: 'LCL/LCL' },
        //   { DATAVALUE: 'FCL/LCL', DATATEXTVALUE: 'FCL/LCL' },
        //   { DATAVALUE: 'GROUPAGE', DATATEXTVALUE: 'GROUPAGE' }
        // ];
    };
    EnquiryPageComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonmaster = {
            EnqNo: this.enqrefno,
            Makerid: this._loginService.getLogin()[0].CMPID,
            VGuid: this._loginService.getLogin()[0].GUID,
        };
        this.loaderService.display(true);
        this._dataService.getData("Admin/ADMIN_SALESENQUIRY_POPULATE", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                console.log(data.Table[0]);
                _this.dispno = data.Table[0].DISPNO,
                    _this.enqrefno = data.Table[0].ENQREFNO, ///data.Table[0].ENQREFNO,
                    _this.enqreceiptdt = data.Table[0].ENQRECPTDT,
                    // this.enqinputby = data.Table[0].ENQINPUTBY,
                    _this.enqtype = data.Table[0].ENQTYPE,
                    _this.enqshipment = data.Table[0].SHIPMENT,
                    _this.enqexim = data.Table[0].EXIM,
                    _this.enqincoterms = data.Table[0].INCOTERM,
                    _this.enqnetwork = data.Table[0].NETWORK,
                    _this.enqcountry = data.Table[0].COUNTRY_CODE,
                    _this.enqagentName = data.Table[0].AGENT_NAME,
                    _this.enqsalesPerson = data.Table[0].SALESPERSON,
                    _this.enqbranch = data.Table[0].BRANCH,
                    _this.enqmode = data.Table[0].MODE,
                    // this.enqaod = data.Table[0].AOD,
                    // this.enqaoa = data.Table[0].AOA,
                    _this.enqdimension = data.Table[0].DIMENSION,
                    _this.enqpol = data.Table[0].POL,
                    _this.enqpod = data.Table[0].POD,
                    // this.jobno = data.Table[0].JOBNO,
                    _this.remarks = data.Table[0].REMARK,
                    // this.specialremark = data.Table[0].SPREMARK,
                    _this.emailsubjectline = data.Table[0].EMAIL,
                    _this.shipper = data.Table[0].SHIPPER,
                    _this.consignee = data.Table[0].CONSIGNEE,
                    // this.enqquotedt = data.Table[0].ENQ_QUOT_DATE,
                    _this.enqstatus = data.Table[0].ENQSTATUS,
                    // this.daystaken = data.Table[0].QUOTRATEDAYS,
                    _this.pkid = data.Table[0].PK_ID,
                    _this.btntext = "UPDATE";
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    EnquiryPageComponent.prototype.pageload = function () {
        var _this = this;
        var jsonmaster2 = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Admin/ADMIN_SALESENQUIRY_PAGELOAD", jsonmaster2)
            .subscribe(function (data) {
            _this.enqsalespersontable = data.Table;
            _this.enqtypetable = data.Table1;
            _this.enqshipmenttable = data.Table2;
            _this.enqnetworktable = data.Table3;
            _this.enqdimensiontable = data.Table4;
            _this.enqstatustable = data.Table5;
            _this.enqcountrytable = data.Table6;
            _this.incotermtable = data.Table7;
            _this.enqbranchtable = data.Table8;
            _this.enqpoltable = data.Table9;
            _this.enqpodtable = data.Table9;
            _this.enqagenttable = data.Table10;
            _this.enquirydetails = data.Table11;
            _this.loaderService.display(false);
            console.log(data);
        });
    };
    EnquiryPageComponent.prototype.onenqreceiptdtChanged = function (ev2) {
        this.enqreceiptdt = ev2.formatted;
    };
    EnquiryPageComponent.prototype.onenqquotedtChanged = function (ev3) {
        this.enqquotedt = ev3.formatted;
    };
    EnquiryPageComponent.prototype.AddEnquiry = function () {
        var _this = this;
        if (this.enqmode == "" || this.enqmode == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Mode !');
            return false;
        }
        if (this.enqtype == "" || this.enqtype == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Enquiry Type !');
            return false;
        }
        if (this.enqexim == "" || this.enqexim == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Exim !');
            return false;
        }
        if (this.enqsalesPerson == "" || this.enqsalesPerson == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Sales Person !');
            return false;
        }
        if (this.enqagentName == "" || this.enqagentName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Enter Agent Name !');
            return false;
        }
        if (this.enqcountry == "" || this.enqcountry == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Country !');
            return false;
        }
        if (this.enqbranch == "" || this.enqbranch == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Branch !');
            return false;
        }
        if (this.enqnetwork == "" || this.enqnetwork == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Network !');
            return false;
        }
        if (this.enqpol == "" || this.enqpol == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Port Of Loading !');
            return false;
        }
        if (this.enqpod == "" || this.enqpod == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Port Of Discharge !');
            return false;
        }
        if (this.enqincoterms == "" || this.enqincoterms == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Incoterms !');
            return false;
        }
        if (this.enqdimension == "" || this.enqdimension == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Dimension !');
            return false;
        }
        if (this.enqstatus == "" || this.enqstatus == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Status !');
            return false;
        }
        this.loaderService.display(true);
        var enquiryData = {
            PK_ID: (this.pkid == "0" || this.pkid == null) ? "" : this.pkid,
            ENQREFNO: this.enqrefno,
            ENQRECPTDT: this.enqreceiptdt,
            ENQTYPE: this.enqtype,
            EXIM: (this.enqexim == null) ? "" : this.enqexim,
            INCOTERM: (this.enqincoterms == null) ? "" : this.enqincoterms,
            NETWORK: (this.enqnetwork == null) ? "" : this.enqnetwork,
            COUNTRY_CODE: (this.enqcountry == null) ? "" : this.enqcountry,
            AGENT_NAME: (this.enqagentName == null) ? "" : this.enqagentName,
            SALESPERSON: (this.enqsalesPerson == null) ? "" : this.enqsalesPerson,
            BRANCH: (this.enqbranch == null) ? "" : this.enqbranch,
            MODE: (this.enqmode == null) ? "" : this.enqmode,
            DIMENSION: (this.enqdimension == null) ? "" : this.enqdimension,
            POL: (this.enqpol == null) ? "" : this.enqpol,
            POD: this.enqpod,
            EMAIL: this.emailsubjectline,
            REMARK: (this.remarks == '') ? "" : this.remarks,
            SHIPPER: (this.shipper == '') ? "" : this.shipper,
            CONSIGNEE: (this.consignee == '') ? "" : this.consignee,
            STATUS: (this.enqstatus == null) ? "" : this.enqstatus,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            MAKERID: this._loginService.getLogin()[0].CMPID,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP,
        };
        this._dataService.Common("Admin/Admin_SalesEnquiry_IU", enquiryData)
            .subscribe(function (data) {
            console.log(data.Table[0].STATUS);
            if (data.Table[0].STATUS == "100") {
                _this.enquirydetails = data.Table1;
                {
                    _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                }
                _this.loaderService.display(false);
                _this.ResetEnquiry();
                _this._router.navigate(['/master/quotation/enquiry/ ']);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
            }
        });
    };
    EnquiryPageComponent.prototype.TextareaValueChange = function (ev) {
        this.specialremark = ev.target.value;
    };
    EnquiryPageComponent.prototype.EditEnquiry = function (id) {
        /////  let filterData = this.chargesdetails.filter((filter) => filter.PKID == id)[0];
        var filterData = id;
        this.PKID = filterData.PK_ID;
        this.enqrefno = filterData.ENQREFNO;
        this.enqreceiptdt = filterData.ENQRECPTDT;
        this.enqtype = filterData.ENQTYPE;
        this.enqmode = filterData.MODE;
        this.enqexim = filterData.EXIM;
        this.enqsalesPerson = filterData.SALESPERSON;
        this.enqagentName = filterData.AGENT_NAME;
        this.enqcountry = filterData.COUNTRY_CODE;
        this.enqbranch = filterData.BRANCH;
        this.enqnetwork = filterData.NETWORK;
        this.enqpod = filterData.POD;
        this.enqpol = filterData.POL;
        this.enqdimension = filterData.DIMENSION;
        this.enqincoterms = filterData.INCOTERM;
        this.enqstatus = filterData.ENQSTATUS;
        this.emailsubjectline = filterData.EMAIL;
        this.remarks = filterData.REMARK;
        this.shipper = filterData.SHIPPER;
        this.consignee = filterData.CONSIGNEE;
        this.dispno = filterData.DISPNO;
        this.btntext = "Update";
    };
    EnquiryPageComponent.prototype.DeleteEnquiry = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsondelete = { ID: id,
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            };
            this._dataService.getData("Admin/ADMIN_SALESENQUIRY_DELETE", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                    _this.enquirydetails = data.Table1;
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            });
        }
    };
    EnquiryPageComponent.prototype.ResetEnquiry = function () {
        this.enquiryinputby = null;
        this.enqagentName = '';
        this.enqshipment = null;
        this.enqtype = null;
        this.enqexim = null;
        this.enqnetwork = null;
        this.enqincoterms = null;
        this.enqcountry = null;
        this.enqsalesPerson = null;
        this.enqbranch = null;
        this.enqmode = null;
        this.enqdimension = null;
        this.enqpol = null;
        this.enqpod = null;
        this.enqaoa = '';
        this.enqaod = '';
        this.emailsubjectline = '';
        this.remarks = '';
        this.jobno = '';
        this.shipper = '';
        this.consignee = '';
        this.enqstatus = '';
        this.enqquotedt = '';
        this.daystaken = '';
        this.specialremark = '';
        this.enqrefno = '';
        this.dispno = '';
        this.enqreceiptdt = new Date();
        this.enqreceiptdt = this._dataService.datechnge(this.enqreceiptdt);
        this.enqquotedt = '';
        this.btntext = "SUBMIT";
    };
    EnquiryPageComponent.prototype.ResetMainEnquiry = function () {
        if (confirm('Are you sure you want to reset enquiry data?')) {
            this.enquiryForm.reset();
            this.enqtypetable = [];
            this.enquiryinputby = null;
            this.enqagentName = '';
            this.enqshipment = null;
            this.enqnetwork = null;
            this.enqincoterms = null;
            this.enqcountry = null;
            this.enqsalesPerson = null;
            this.enqbranch = null;
            this.enqmode = null;
            this.enqdimension = null;
            this.enqpol = null;
            this.enqpod = null;
            this.enqaoa = '';
            this.enqaod = '';
            this.emailsubjectline = '';
            this.remarks = '';
            this.jobno = '';
            this.shipper = '';
            this.consignee = '';
            this.enqstatus = '';
            this.enqquotedt = '';
            this.daystaken = '';
            this.specialremark = '';
            this.enqrefno = '';
            this.dispno = '';
            this.enqreceiptdt = new Date();
            this.enqreceiptdt = this._dataService.datechnge(this.enqreceiptdt);
            this.enqquotedt = '';
            this.btntext = "SUBMIT";
            this._router.navigate(['/master/quotation/enquiry/ ']);
        }
    };
    EnquiryPageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    EnquiryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enquiry-page',
            template: __webpack_require__(/*! raw-loader!./enquiry.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/quotation/enquiry.component.html"),
            styles: [__webpack_require__(/*! ./quotation.search.component.scss */ "./src/app/master/quotation/quotation.search.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EnquiryPageComponent);
    return EnquiryPageComponent;
}());



/***/ }),

/***/ "./src/app/master/quotation/enquiry.search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/master/quotation/enquiry.search.component.ts ***!
  \**************************************************************/
/*! exports provided: EnquirySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquirySearchComponent", function() { return EnquirySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnquirySearchComponent = /** @class */ (function () {
    function EnquirySearchComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _loginService, _router) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._router = _router;
        this.searchValue = "1";
        this.enquirylist = [];
        this.salespersontable = [];
        this.enqbranchtable = [];
        this.exampleRadios1 = "1";
        this.displayType = 'SEARCH';
        this.SearchTitle = "Enquiry Search";
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '160px',
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
    EnquirySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jsonmaster2 = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Admin/ADMIN_SALESENQUIRY_PAGELOAD", jsonmaster2)
            .subscribe(function (data) {
            _this.salespersontable = data.Table;
            _this.enqbranchtable = data.Table8;
        });
        this.config = {
            itemsPerPage: 15,
            currentPage: 1,
            totalItems: this.enquirylist.count
        };
    };
    EnquirySearchComponent.prototype.searchdata = function () {
        var _this = this;
        var jsonmaster;
        var serchtext = "", frdt = "", todt = "";
        if (this.exampleRadios1 == "1") {
            serchtext = this.salesperson;
            if (this.salesperson == "" || this.salesperson == null || this.salesperson == undefined) {
                this._toasterService.toast('warning', 'warning', "Please Select Salesperson !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "2") {
            serchtext = this.enqbranch;
            if (this.enqbranch == "" || this.enqbranch == null || this.enqbranch == undefined) {
                this._toasterService.toast('warning', 'warning', "Please Select Branch !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "3") {
            serchtext = "";
            if (!this.startdate) {
                alert("Please Select From Date.");
                return false;
            }
            else if (!this.enddate) {
                alert("Please Select To Date.");
                return false;
            }
            else if (this.startdate != "" && this.enddate != "") {
                if (this._dataService.date2Comparison(this.startdate.formatted, this.enddate.formatted) == false) {
                    this._toasterService.toast('warning', 'warning', 'End date should be greater than Start date !');
                    return false;
                }
            }
        }
        this.loaderService.display(true);
        jsonmaster = { SEARCHVAL: this.exampleRadios1, SEARCHTXT: serchtext, STARTDT: (this.startdate == undefined ? "" : this.startdate.formatted), ENDDT: (this.enddate == undefined ? "" : this.enddate.formatted) };
        // console.log(jsonmaster)
        this._dataService.getData("Admin/ADMIN_SALESENQUIRY_SEARCHLIST", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.enquirylist = data.Table;
            if (data.Table.length == 0) {
                _this._toasterService.toast('warning', 'warning', "No records found !");
            }
            _this.displayType = 'LIST';
            _this.SearchTitle = "Enquiry List";
            _this.loaderService.display(false);
        });
    };
    EnquirySearchComponent.prototype.ListOnclick = function (enqno) {
        if (confirm('Click Ok to Print or Click Cancel to Edit ?')) {
            var theTop = (screen.height / 2) - (483 / 2);
            var theLeft = (screen.width / 2) - (780 / 2);
            var toolbar_1 = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
            window.open('./#/popup/enquiryprint/' + enqno + '/', "Enquiry Print", toolbar_1);
        }
        else {
            this._router.navigate(['/master/quotation/enquiry/' + enqno]);
        }
    };
    EnquirySearchComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    EnquirySearchComponent.prototype.back = function () {
        //this.result.emit(true);
        this._router.navigate(['/master/quotation/enquirysearch']);
    };
    EnquirySearchComponent.prototype.Reset = function () {
        this.salesperson = null;
        this.startdate = "";
        this.enddate = "";
        this.enqbranch = null;
        this.exampleRadios1 = "1";
    };
    EnquirySearchComponent.prototype.Exporttoxl = function () {
        var _this = this;
        this.loaderService.display(true);
        var serchtext = "", frdt = "", todt = "";
        if (this.exampleRadios1 == "1") {
            serchtext = this.salesperson;
        }
        else if (this.exampleRadios1 == "2") {
            serchtext = this.enqbranch;
        }
        else if (this.exampleRadios1 == "3") {
            serchtext = "";
        }
        var jsonmaster = { SEARCHVAL: this.exampleRadios1, SEARCHTXT: serchtext, STARTDT: (this.startdate == undefined ? "" : this.startdate.formatted), ENDDT: (this.enddate == undefined ? "" : this.enddate.formatted) };
        this._dataService.getDownload("Admin/ADMIN_SALESENQUIRY_LIST_XL", jsonmaster, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.common_downloadFileByUrl(data, "Enquirylist as on date " + _this.enddate.formatted + ".xls");
            _this.loaderService.display(false);
        });
    };
    EnquirySearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EnquirySearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enquiry-search',
            template: __webpack_require__(/*! raw-loader!./enquiry.search.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/quotation/enquiry.search.component.html"),
            styles: [__webpack_require__(/*! ./quotation.search.component.scss */ "./src/app/master/quotation/quotation.search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EnquirySearchComponent);
    return EnquirySearchComponent;
}());



/***/ }),

/***/ "./src/app/master/quotation/quot-rate-master-entry.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/master/quotation/quot-rate-master-entry.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuotRateEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotRateEntryComponent", function() { return QuotRateEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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








var QuotRateEntryComponent = /** @class */ (function () {
    function QuotRateEntryComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _loginService, datepipe) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.datepipe = datepipe;
        this.Header = 'QUOTATION RATE MASTER ENTRY ';
        this.linertable = [];
        this.shipmenttypetable = [];
        this.stufftypetable = [];
        this.shipmentmodetable = [];
        this.commoncities = [];
        this.terminaltable = [];
        this.contsizetable = [];
        this.conttypetable = [];
        this.itemtypetable = [];
        this.chargestable = [];
        this.currencytable = [];
        this.ratedetails = [];
        this.portterminal = [];
        this.Allportterminallist = [];
        this.loadingportterminal = [];
        this.shipmenttype = "";
        this.shipmentmode = "";
        this.stufftype = "";
        this.pol = "";
        this.pod = "";
        this.terminal = "";
        this.contsize = "";
        this.conttype = "";
        this.itemtype = "";
        this.currency = "";
        this.rate = "";
        this.exrate = "";
        this.charges = "";
        this.PKQUTID = "0";
        this.FK_QUTDETID = "0";
        this.FK_QUTID = "0";
        this.queryParamsUserId = "";
        this.validnumber = true;
        this.PKID = "0";
        this.txtsubmit = "Add";
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '160px',
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
    QuotRateEntryComponent.prototype.ngOnInit = function () {
        // if (this.queryParamsUserId != ' ') {
        //   this._loginService.verifyRights(414, '')
        //   .subscribe((data: any) => { this._loginService.checkVerify('Modify', data); });
        //   this.editpopulate()
        // }
        // else
        // {
        //   this._loginService.verifyRights(414, '')
        //   .subscribe((data: any) => { this._loginService.checkVerify('Add', data); });
        var _this = this;
        // }
        this.loaderService.display(true);
        this._dataService.getAll("Admin/MST_QUOT_RATE_PAGELOAD")
            .subscribe(function (data) {
            _this.linertable = data.Table;
            _this.shipmenttypetable = data.Table1;
            _this.shipmentmodetable = data.Table2;
            _this.stufftypetable = data.Table3;
            _this.commoncities = data.Table4;
            // this.terminaltable = data.Table4
            _this.Allportterminallist = data.Table5;
            _this.itemtypetable = data.Table6;
            _this.conttypetable = data.Table7;
            _this.contsizetable = data.Table8;
            _this.chargestable = data.Table9;
            _this.currencytable = data.Table10;
            _this.ratedetails = data.Table11;
            _this.loaderService.display(false);
            console.log(data);
        });
        this.loaderService.display(false);
    };
    QuotRateEntryComponent.prototype.Addquotationrate = function () {
        var _this = this;
        if (this.liner == "" || this.liner == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Shipping Line  !');
            return false;
        }
        if (this.shipmenttype == "" || this.shipmenttype == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Shipment Type  !');
            return false;
        }
        if (this.stufftype == "" || this.stufftype == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Stuff Type !');
            return false;
        }
        if (this.pol == "" || this.pol == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Port Of Loading !');
            return false;
        }
        if (this.pod == "" || this.pod == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Port Of Discharge !');
            return false;
        }
        if (this.itemtype == "" || this.itemtype == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Item Type !');
            return false;
        }
        if (this.conttype == "" || this.conttype == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Container Type !');
            return false;
        }
        if (this.contsize == "" || this.contsize == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Container Size !');
            return false;
        }
        if (this.charges == "" || this.charges == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Charges  !');
            return false;
        }
        if (this.currency == "" || this.currency == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Currency !');
            return false;
        }
        if (this.rate == "" || this.rate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Charges rate could not be blank !');
            return false;
        }
        if (this.exrate == "" || this.exrate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Exchange Rate could not be blank !');
            return false;
        }
        if (this.validnumber == false) {
            this._toasterService.toast('warning', 'warning', "These fields Rate,Exchange Rate are number  remove comma(,) seperator !");
            return false;
        }
        if (this.Effective_from0 == "" || this.Effective_from0 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Effective From Date!');
            return false;
        }
        if (this._dataService.date2Comparison(this.Effective_from0, this.Effective_to0) == false) {
            this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
            return false;
        }
        if (this.Effective_to0 == "" || this.Effective_to0 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Effective To Date !');
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            PKRTID: this.PKID,
            SHIPPINGLINE: this.liner,
            SHIP_TYPE: this.shipmenttype,
            SHIP_MODE: this.shipmentmode,
            STUFF_TYPE: this.stufftype,
            POL: this.pol,
            TERMINAL: (this.loadingportterminal.split("|")[0] == undefined || this.loadingportterminal.split("|")[0] == "") ? "" : this.loadingportterminal.split("|")[0],
            POD: this.pod,
            CONT_SIZE: this.contsize,
            CONT_TYPE: this.conttype,
            ITEM_TYPE: this.itemtype,
            CHARGE_CODE: this.charges,
            RATE: this.rate,
            CURRCODE: this.currency,
            EXRATE: this.exrate,
            EFRMDT: this.Effective_from0,
            ETODT: this.Effective_to0,
            MAKERID: this._loginService.getLogin()[0].CMPID,
            MAKERDT: "",
            MAKERIP: this._loginService.getLogin()[0].MAKERIP,
        };
        //console.log(jsonmasterchild)
        this._dataService.Common("Admin/MST_QUOTATION_RATE_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.ratedetails = data.Table1;
                _this.ResetQuotationrate();
                _this.txtsubmit = "Add";
                _this._toasterService.toast("success", "sucess", data.Table[0].STATUSTEXT);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
            }
            _this.loaderService.display(false);
        });
    };
    QuotRateEntryComponent.prototype.ResetQuotationrate = function () {
        this.PKID = "0";
        this.acccode = "";
        this.currency = "";
        this.rate = "";
        this.exrate = "";
        this.Effective_from0 = "";
        this.Effective_to0 = "";
        this.contsize = "";
        this.conttype = "";
        this.itemtype = "";
        this.shipmenttype = "";
        this.shipmentmode = "";
        this.stufftype = "";
        this.liner = "";
        this.pod = "";
        this.pol = "";
        this.loadingportterminal = "";
        this.charges = "";
        this.txtsubmit = "Add";
    };
    QuotRateEntryComponent.prototype.EditQuotationrate = function (id) {
        var filterData = this.ratedetails.filter(function (filter) { return filter.PKRTID == id; })[0];
        this.PKID = filterData.PKRTID;
        this.charges = filterData.CHARGE_CODE;
        this.currency = filterData.CURRCODE;
        this.rate = filterData.RATE;
        this.exrate = filterData.EXRATE;
        this.itemtype = filterData.ITEM_TYPE;
        this.liner = filterData.SHIPPINGLINE;
        this.pol = filterData.POL;
        this.GetTerminal(this.pol);
        this.loadingportterminal = filterData.TERMINAL + "|" + this.pol;
        this.pod = filterData.POD;
        this.Effective_from0 = this.datepipe.transform(filterData.EFRMDT, 'dd/MM/yyyy');
        this.Effective_to0 = this.datepipe.transform(filterData.ETODT, 'dd/MM/yyyy');
        this.stufftype = filterData.STUFF_TYPE;
        this.shipmenttype = filterData.SHIP_TYPE;
        this.shipmentmode = filterData.SHIP_MODE;
        this.contsize = filterData.CONT_SIZE;
        this.conttype = filterData.CONT_TYPE;
        this.txtsubmit = "Update";
    };
    QuotRateEntryComponent.prototype.DeleteQuotationrate = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsondelete = { PKRTID: id };
            this._dataService.getData("Admin/MST_QUOTATION_RATE_DELETE", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                    _this.ratedetails = data.Table1;
                    _this.loaderService.display(false);
                }
            });
        }
    };
    QuotRateEntryComponent.prototype.onDateChanged = function (ev) {
        //console.log(ev)
        this.Effective_from0 = ev.formatted;
    };
    QuotRateEntryComponent.prototype.onDateChanged1 = function (ev2) {
        this.Effective_to0 = ev2.formatted;
    };
    QuotRateEntryComponent.prototype.onchangefindcomma = function (innumber) {
        if (innumber.match(/,/g) != null) {
            alert('comma not allowed');
            this.validnumber = false;
            return false;
        }
        else {
            this.validnumber = true;
        }
    };
    QuotRateEntryComponent.prototype.GetTerminal = function (portcode) {
        this.portterminal = [];
        this.loadingportterminal = "";
        this.portterminal = this.Allportterminallist.filter(function (code) { return code.ID.split("|")[1] === portcode; });
    };
    QuotRateEntryComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    QuotRateEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quot-rate-master-entry',
            template: __webpack_require__(/*! raw-loader!./quot-rate-master-entry.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/quotation/quot-rate-master-entry.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], QuotRateEntryComponent);
    return QuotRateEntryComponent;
}());



/***/ }),

/***/ "./src/app/master/quotation/quotation.component.css":
/*!**********************************************************!*\
  !*** ./src/app/master/quotation/quotation.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ========================================= */\r\n/* Main Table Container Styling              */\r\n/* ========================================= */\r\n.charges-table {\r\n    /* Use a simple, modern font stack */\r\n    font-family: 'Roboto', 'Segoe UI', Tahoma, sans-serif;\r\n    font-size: 0.85rem;\r\n    color: #333;\r\n    /* Clean up the border and rounding */\r\n    border: 1px solid #ddd; \r\n    border-radius: 8px; /* Apply the rounded-4 look */\r\n}\r\n/* Ensure the shadow class is defined, if not provided by Bootstrap */\r\n.shadow-sm {\r\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n}\r\n.charges-table {\r\n  border-radius: 0.75rem;\r\n  overflow: hidden;\r\n\r\n  th {\r\n    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;\r\n    /* font-size: 0.95rem; */\r\n    vertical-align: middle;\r\n    background-color: #e8f1ff !important;\r\n  }\r\n\r\n  td {\r\n    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;\r\n    font-size: 0.9rem;\r\n    color: #212529;\r\n    padding: 0.45rem 0.6rem !important;\r\n  }\r\n\r\n  /* tbody tr:hover {\r\n    background-color: #f8f9fa;\r\n    transition: background-color 0.2s ease-in-out;\r\n  } */\r\n\r\n  .fa-pencil {\r\n    cursor: pointer;\r\n    transition: color 0.2s ease-in-out;\r\n  }\r\n\r\n  .fa-pencil:hover {\r\n    color: #0d6efd;\r\n  }\r\n}\r\n.form-control.rounded-pill,\r\ninput.form-control.text-end {\r\n  height: 25px !important;           /* same as your ng-select height */\r\n  min-height: 25px !important;\r\n  padding: 2px 10px !important;      /* match vertical alignment */\r\n  border-radius: 2px !important;   /* rounded-pill style */\r\n  font-size: 0.9rem;                 /* consistent text size */\r\n  line-height: 1.2 !important;\r\n  box-shadow: none !important;       /* remove inner shadows */\r\n}\r\n/* Optional: hover/focus consistency */\r\n.form-control:focus {\r\n  border-color: #0d6efd !important;\r\n  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.15) !important;\r\n}\r\n/* Ensure ng-select aligns perfectly too */\r\n.ng-select.rounded-pill .ng-select-container {\r\n  height: 25px !important;\r\n  min-height: 25px !important;\r\n  border-radius: 2px !important;\r\n  padding: 2px 8px !important;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n/* .charges-table td i.fa-pencil:hover {\r\n    color: #0056b3 !important;\r\n} */\r\n/* Highlighted (Red/Orange) text for errors or focus (like the \"CARTA...\" row) */\r\n/* You will need to add a class to the <tr> or <td> based on your logic */\r\n/* .charges-table .highlight-error {\r\n    color: #dc3545; \r\n    font-weight: 600;\r\n} */\r\n.client-td,\r\n.liner-td {\r\n  width: 35%; /* adjust as needed */\r\n}\r\n.fixed-select {\r\n  width: 100% !important; /* stay within the cell */\r\n  max-width: 100%;\r\n  min-width: 150px;\r\n}\r\n.ng-select .ng-select-container {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; /* show ... for long text */\r\n}\r\n.ng-select .ng-value-label {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n.text-brown {\r\n    color: #8b4513 !important; /* Saddle Brown */\r\n}\r\n/* Or a less harsh, more modern brown-grey */\r\n.text-muted-brown {\r\n    color: #a09787 !important; \r\n}\r\n.label {\r\n  font-family: 'Segoe UI', sans-serif;\r\n  font-weight: 400;\r\n  color: #555;\r\n  margin-right: 4px;\r\n  \r\n}\r\n.form-label {\r\n  display: inline-block !important;\r\n  margin-bottom: 2px;\r\n}\r\n.small .form-label {\r\n    font-size: inherit !important;\r\n    font-weight: inherit;\r\n}\r\n.sales-form-wrapper {\r\n  max-width: 1150px;\r\n  margin: 0 auto;\r\n  padding: 8px 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3F1b3RhdGlvbi9xdW90YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QztJQUNJLG9DQUFvQztJQUNwQyxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFFLDZCQUE2QjtBQUNyRDtBQUVBLHFFQUFxRTtBQUNyRTtJQUNJLDhEQUE4RDtBQUNsRTtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjs7RUFFaEI7SUFDRSxzREFBc0Q7SUFDdEQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQ0FBa0M7RUFDcEM7O0VBRUE7OztLQUdHOztFQUVIO0lBQ0UsZUFBZTtJQUNmLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBOztFQUVFLHVCQUF1QixZQUFZLGtDQUFrQztFQUNyRSwyQkFBMkI7RUFDM0IsNEJBQTRCLE9BQU8sNkJBQTZCO0VBQ2hFLDZCQUE2QixJQUFJLHVCQUF1QjtFQUN4RCxpQkFBaUIsa0JBQWtCLHlCQUF5QjtFQUM1RCwyQkFBMkI7RUFDM0IsMkJBQTJCLFFBQVEseUJBQXlCO0FBQzlEO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZEQUE2RDtBQUMvRDtBQUVBLDBDQUEwQztBQUMxQztFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7O0dBRUc7QUFFSCxnRkFBZ0Y7QUFDaEYseUVBQXlFO0FBQ3pFOzs7R0FHRztBQUVIOztFQUVFLFVBQVUsRUFBRSxxQkFBcUI7QUFDbkM7QUFDQTtFQUNFLHNCQUFzQixFQUFFLHlCQUF5QjtFQUNqRCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFFLDJCQUEyQjtBQUN0RDtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QixFQUFFLGlCQUFpQjtBQUNoRDtBQUNBLDRDQUE0QztBQUM1QztJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCOztBQUVuQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvcXVvdGF0aW9uL3F1b3RhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogTWFpbiBUYWJsZSBDb250YWluZXIgU3R5bGluZyAgICAgICAgICAgICAgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmNoYXJnZXMtdGFibGUge1xyXG4gICAgLyogVXNlIGEgc2ltcGxlLCBtb2Rlcm4gZm9udCBzdGFjayAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIC8qIENsZWFuIHVwIHRoZSBib3JkZXIgYW5kIHJvdW5kaW5nICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLyogQXBwbHkgdGhlIHJvdW5kZWQtNCBsb29rICovXHJcbn1cclxuXHJcbi8qIEVuc3VyZSB0aGUgc2hhZG93IGNsYXNzIGlzIGRlZmluZWQsIGlmIG5vdCBwcm92aWRlZCBieSBCb290c3RyYXAgKi9cclxuLnNoYWRvdy1zbSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXJnZXMtdGFibGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsICdSb2JvdG8nLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogZm9udC1zaXplOiAwLjk1cmVtOyAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICB9ICovXHJcblxyXG4gIC5mYS1wZW5jaWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5mYS1wZW5jaWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDZlZmQ7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWNvbnRyb2wucm91bmRlZC1waWxsLFxyXG5pbnB1dC5mb3JtLWNvbnRyb2wudGV4dC1lbmQge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50OyAgICAgICAgICAgLyogc2FtZSBhcyB5b3VyIG5nLXNlbGVjdCBoZWlnaHQgKi9cclxuICBtaW4taGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDsgICAgICAvKiBtYXRjaCB2ZXJ0aWNhbCBhbGlnbm1lbnQgKi9cclxuICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDsgICAvKiByb3VuZGVkLXBpbGwgc3R5bGUgKi9cclxuICBmb250LXNpemU6IDAuOXJlbTsgICAgICAgICAgICAgICAgIC8qIGNvbnNpc3RlbnQgdGV4dCBzaXplICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuMiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgICAgICAgLyogcmVtb3ZlIGlubmVyIHNoYWRvd3MgKi9cclxufVxyXG5cclxuLyogT3B0aW9uYWw6IGhvdmVyL2ZvY3VzIGNvbnNpc3RlbmN5ICovXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzBkNmVmZCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEVuc3VyZSBuZy1zZWxlY3QgYWxpZ25zIHBlcmZlY3RseSB0b28gKi9cclxuLm5nLXNlbGVjdC5yb3VuZGVkLXBpbGwgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAycHggOHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiAuY2hhcmdlcy10YWJsZSB0ZCBpLmZhLXBlbmNpbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNTZiMyAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4vKiBIaWdobGlnaHRlZCAoUmVkL09yYW5nZSkgdGV4dCBmb3IgZXJyb3JzIG9yIGZvY3VzIChsaWtlIHRoZSBcIkNBUlRBLi4uXCIgcm93KSAqL1xyXG4vKiBZb3Ugd2lsbCBuZWVkIHRvIGFkZCBhIGNsYXNzIHRvIHRoZSA8dHI+IG9yIDx0ZD4gYmFzZWQgb24geW91ciBsb2dpYyAqL1xyXG4vKiAuY2hhcmdlcy10YWJsZSAuaGlnaGxpZ2h0LWVycm9yIHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1OyBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0gKi9cclxuXHJcbi5jbGllbnQtdGQsXHJcbi5saW5lci10ZCB7XHJcbiAgd2lkdGg6IDM1JTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xyXG59XHJcbi5maXhlZC1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IC8qIHN0YXkgd2l0aGluIHRoZSBjZWxsICovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogc2hvdyAuLi4gZm9yIGxvbmcgdGV4dCAqL1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy12YWx1ZS1sYWJlbCB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50ZXh0LWJyb3duIHtcclxuICAgIGNvbG9yOiAjOGI0NTEzICFpbXBvcnRhbnQ7IC8qIFNhZGRsZSBCcm93biAqL1xyXG59XHJcbi8qIE9yIGEgbGVzcyBoYXJzaCwgbW9yZSBtb2Rlcm4gYnJvd24tZ3JleSAqL1xyXG4udGV4dC1tdXRlZC1icm93biB7XHJcbiAgICBjb2xvcjogI2EwOTc4NyAhaW1wb3J0YW50OyBcclxufVxyXG4ubGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgXHJcbn1cclxuLmZvcm0tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4uc21hbGwgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxufVxyXG4uc2FsZXMtZm9ybS13cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDExNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/master/quotation/quotation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/master/quotation/quotation.component.ts ***!
  \*********************************************************/
/*! exports provided: QuotationEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationEntryComponent", function() { return QuotationEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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








var QuotationEntryComponent = /** @class */ (function () {
    function QuotationEntryComponent(_dataService, _ToastrService, loaderService, http, _activatedRoute, _loginService, datepipe, _router) {
        this._dataService = _dataService;
        this._ToastrService = _ToastrService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.datepipe = datepipe;
        this._router = _router;
        this.Header = 'QUOTATION ENTRY';
        this.narration = "";
        this.chngetypetable = [];
        this.shpmodetable = [];
        this.unittabel = [];
        this.currencytable = [];
        this.origintable = [];
        this.clientable = [];
        this.accountable = [];
        this.chargesdetails = [];
        this.shipmentable = [];
        this.compnytable = [];
        this.linertable = [];
        this.airlinetable = [];
        this.company = "";
        this.shipmode = "SEA";
        this.rate = "";
        this.exrate = "";
        this.minrate = "";
        this.PKQUTID = "0";
        this.FK_QUTDETID = "0";
        this.FK_QUTID = "0";
        this.queryParamsUserId = "";
        this.validnumber = true;
        this.PKID = "0";
        this.visible = "0";
        this.quotno = "";
        this.commoncities = [];
        this.QUOTNO = "";
        this.poltable = [];
        this.podtable = [];
        this.incotermtable = [];
        this.containerloadtypetable = [];
        this.disableexrate = true;
        this.childbtntext = "Add";
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '160px',
            componentDisabled: false,
            selectionTxtFontSize: '12px',
            editableDateField: false,
            sunHighlight: true,
            //satHighlight: true,
            firstDayOfWeek: 'su',
            openSelectorTopOfInput: false,
            openSelectorOnInputClick: true,
        };
    }
    QuotationEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this._loginService.getLogin()[0])
        this.quotdate = new Date();
        this.quotdate = this._dataService.datechnge(this.quotdate);
        console.log(this.quotdate);
        var vqdate = new Date();
        this.Quotvaliddate = this._dataService.addDays(vqdate, 30);
        console.log(this.Quotvaliddate);
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsUserId = params["pkqutid"];
            //this.PKQUTID=(this.queryParamsUserId == " " ? "0" : this.queryParamsUserId);
            _this.quotno = params["quotationno"];
            _this.containerloadtypetable = [
                { DATAVALUE: 'LCL/FCL', DATATEXTVALUE: 'LCL/FCL' },
                { DATAVALUE: 'FCL/FCL', DATATEXTVALUE: 'FCL/FCL' },
                { DATAVALUE: 'LCL/LCL', DATATEXTVALUE: 'LCL/LCL' },
                { DATAVALUE: 'FCL/LCL', DATATEXTVALUE: 'FCL/LCL' },
                { DATAVALUE: 'GROUPAGE', DATATEXTVALUE: 'GROUPAGE' }
            ];
            // this.incoterm="EXW"
            // this.containerloadtype="LCL/FCL"
            // this.shiptype="EXPORT"
            // console.log(this.PKQUTID)
            var jsonreset = { VGUID: _this._loginService.getLogin()[0].GUID };
            _this._dataService.getData("Admin/ADMIN_QUOTATION_RESET", jsonreset)
                .subscribe(function (data) {
            });
        });
        if (this.quotno != ' ') {
            this._loginService.verifyRights(431, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.editpopulate();
        }
        else {
            this._loginService.verifyRights(431, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        }
        this.loaderService.display(true);
        var jsonmaster2 = {
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Admin/ADMIN_QUOTATION_PAGELOAD", jsonmaster2)
            .subscribe(function (data) {
            _this.shipmentable = data.Table8;
            _this.compnytable = data.Table7;
            _this.chngetypetable = data.Table6;
            _this.shpmodetable = data.Table5;
            _this.unittabel = data.Table4;
            _this.currencytable = data.Table3;
            _this.accountable = data.Table2;
            _this.origintable = data.Table1;
            _this.clientable = data.Table;
            _this.linertable = data.Table9;
            _this.commoncities = data.Table10;
            _this.incotermtable = data.Table11;
            _this.airlinetable = data.Table12;
            _this.loaderService.display(false);
            console.log(data);
        });
    };
    QuotationEntryComponent.prototype.onquotDateChanged = function (ev2) {
        this.quotdate = ev2.formatted;
    };
    QuotationEntryComponent.prototype.QuotValidDateChanged = function (ev2) {
        this.Quotvaliddate = ev2.formatted;
    };
    QuotationEntryComponent.prototype.TextareaValueChange = function (ev) {
        this.narration = ev.target.value;
    };
    QuotationEntryComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonmaster = {
            pkid: (this.queryParamsUserId == undefined ? "0" : this.queryParamsUserId),
            Makerid: this._loginService.getLogin()[0].CMPID,
            VGuid: this._loginService.getLogin()[0].GUID,
            QuotNo: this.quotno
        };
        this.loaderService.display(true);
        this._dataService.getData("Admin/ADMIN_QUOTATION_POPULATE", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                console.log(data.Table[0]);
                _this.company = data.Table[0].COMPANY_CODE,
                    _this.PKQUTID = data.Table[0].PK_QUOTID,
                    _this.QUOTNO = data.Table[0].QUOT_CODE,
                    _this.quotno = data.Table[0].QUOT_CODE,
                    _this.shiptype = data.Table[0].SHIP_TYPE,
                    _this.client = data.Table[0].CLIENT_CODE,
                    _this.origin = data.Table[0].CLIENT_ORIGIN,
                    _this.shipmode = data.Table[0].SHIP_MODE,
                    _this.liner = data.Table[0].SHIPPINGLINE,
                    _this.quotdate = data.Table[0].QUOT_DATE,
                    _this.Quotvaliddate = data.Table[0].VALIDUPTO,
                    _this.pol = data.Table[0].POL,
                    _this.pod = data.Table[0].POD,
                    _this.narration = data.Table[0].NARRATION,
                    _this.weight = data.Table[0].WEIGHT,
                    _this.chweight = data.Table[0].CHWEIGHT,
                    _this.volume = data.Table[0].VOLUME,
                    _this.load = data.Table[0].LOAD,
                    _this.incoterm = data.Table[0].INCOTERM,
                    _this.contloadtype = data.Table[0].CONTLOADTYPE,
                    _this.airline = data.Table[0].AIRLINECODE,
                    // this.Effective_from0 = this.datepipe.transform(data.Table[0].EFFECT_FRMDT, 'dd/MM/yyyy'),
                    // this.Effective_to0 = this.datepipe.transform(data.Table[0].EFFECT_TODT, 'dd/MM/yyyy')
                    _this.chargesdetails = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._ToastrService.toast('error', 'error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    QuotationEntryComponent.prototype.Addchilddata = function () {
        var _this = this;
        // if(this.PKQUTID!="0")
        // {
        //   this._ToastrService.toast('warning', 'warning', 'You can`t Add/Update this record !');
        //   return false;
        // }
        if (this.chargetype == "" || this.chargetype == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Charge Type  !');
            return false;
        }
        if (this.acccode == "" || this.acccode == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Account Code  !');
            return false;
        }
        if (this.currency == "" || this.currency == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Currency !');
            return false;
        }
        if (this)
            if (this.rate == "" || this.rate == undefined) {
                this._ToastrService.toast('warning', 'warning', 'Charges rate could not be blank !');
                return false;
            }
        // if (this.minrate == "" || this.minrate == undefined) {
        //   this._ToastrService.toast('warning', 'warning', 'Charges min.rate could not be blank !');
        //   return false;
        // }
        if (this.unit == "" || this.unit == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Unit!');
            return false;
        }
        if (this.validnumber == false) {
            this._ToastrService.toast('warning', 'warning', "These fields Rate,Min.Rate are number  remove comma(,) seperator !");
            return false;
        }
        this.loaderService.display(true);
        var jsonchild = {
            PKID: (this.PKID == null ? "" : this.PKID),
            FK_QUOTID: this.PKQUTID,
            QUOT_CODE: this.quotno,
            CHRG_CODE: this.acccode,
            CHRG_TYPE: this.chargetype,
            CURCODE: this.currency,
            RATE: this.rate,
            EX_RATE: (this.exrate == "" ? 0 : this.exrate),
            MIN_RATE: (this.minrate == "" ? 0 : this.minrate),
            UNIT: this.unit,
            UNITTYPE: this.unittype,
            QUOTDTLID: this.FK_QUTDETID,
            MakerID: this._loginService.getLogin()[0].CMPID,
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        //console.log(jsonchild)
        this._dataService.Common("Admin/ADMIN_QUOTATION_CHILD_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.chargesdetails = data.Table1;
            }
            _this.Resetchildrecd();
            _this.loaderService.display(false);
        });
    };
    QuotationEntryComponent.prototype.Editchildrecd = function (id) {
        /////  let filterData = this.chargesdetails.filter((filter) => filter.PKID == id)[0];
        var filterData = id;
        this.PKID = filterData.PKID;
        this.acccode = filterData.CHRG_CODE;
        this.currency = filterData.CURCODE;
        if (this.currency == "CR115") {
            this.disableexrate = true;
        }
        else {
            this.disableexrate = false;
        }
        this.chargetype = filterData.CHRG_TYPE;
        this.rate = filterData.RATE;
        this.exrate = filterData.EXRATE;
        this.minrate = filterData.MIN_RATE;
        this.unit = filterData.UNIT;
        this.unittype = filterData.UNITTYPE;
        this.FK_QUTDETID = filterData.QUOTDTLID;
        this.childbtntext = "Update";
    };
    QuotationEntryComponent.prototype.Deletechildrecd = function (id, quotdtlid) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, QUOTDTLID: quotdtlid };
            this._dataService.getData("Admin/ADMIN_QUOTATION_TMP_DEL", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._ToastrService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                    _this.chargesdetails = data.Table;
                    _this.loaderService.display(false);
                }
                else {
                    _this._ToastrService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            });
        }
    };
    QuotationEntryComponent.prototype.Resetchildrecd = function () {
        this.PKID = "0";
        this.FK_QUTDETID = "0";
        this.chargetype = "";
        this.acccode = undefined;
        this.currency = "";
        this.rate = "";
        this.minrate = "";
        this.unit = "";
        this.exrate = "";
        this.unittype = '';
        this.childbtntext = "Add";
    };
    QuotationEntryComponent.prototype.Add_Final = function () {
        var _this = this;
        if (this.chargesdetails.length < 1) {
            this._ToastrService.toast('warning', 'warning', 'Please enter charges !');
            return false;
        }
        // if (this.company == "" || this.company == undefined) {
        //   this._ToastrService.toast('warning', 'warning', 'Please select Company!');
        //   return false;
        // }
        if (this.shiptype == "" || this.shiptype == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Shipment Type  !');
            return false;
        }
        if (this.client == "" || this.client == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Client !');
            return false;
        }
        if (this.origin == "" || this.origin == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Origin!');
            return false;
        }
        if (this.shipmode == "" || this.shipmode == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Shipment Mode !');
            return false;
        }
        if (this.shipmode == "SEA") {
            if (this.liner == "" || this.liner == undefined) {
                this._ToastrService.toast('warning', 'warning', 'Please select Shipping Line!');
                return false;
            }
        }
        if (this.shipmode == "AIR") {
            if (this.airline == "" || this.airline == undefined) {
                this._ToastrService.toast('warning', 'warning', 'Please select Airline !');
                return false;
            }
        }
        if (this._dataService.date2Comparison(this.quotdate, this.Quotvaliddate) == false) {
            this._ToastrService.toast('warning', 'warning', 'Qoatation  Valid date should be greater than Quotation date !');
            return false;
        }
        if (this.Quotvaliddate == "" || this.Quotvaliddate == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select Quoatation  Valid Date !');
            return false;
        }
        if (this.pol == "" || this.pol == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select POL!');
            return false;
        }
        if (this.pod == "" || this.pod == undefined) {
            this._ToastrService.toast('warning', 'warning', 'Please select POD!');
            return false;
        }
        if (this.quotno == undefined || this.quotno.trim() == "" || this.quotno == "0")
            this.url = "Admin/ADMIN_QUOTATION_MST_INSERT";
        else {
            this.url = "Admin/ADMIN_QUOTATION_MST_UPDATE";
        }
        this.loaderService.display(true);
        var jsonmaster = {
            PK_QUOTID: (this.PKQUTID == null ? "" : this.PKQUTID),
            QUOT_CODE: (this.quotno == null ? "" : this.quotno),
            QUOT_DATE: this.quotdate,
            VALIDUPTO: this.Quotvaliddate,
            CLIENT_CODE: this.client,
            CLIENT_ORIGIN: this.origin,
            SHIP_MODE: this.shipmode,
            SHIP_TYPE: this.shiptype,
            COMPANY_CODE: this.company,
            SHIPPINGLINE: (this.liner == null ? "" : this.liner),
            POL: this.pol,
            POD: this.pod,
            WEIGHT: (this.weight == null ? 0 : this.weight),
            CHWEIGHT: (this.chweight == null ? 0 : this.chweight),
            VOLUME: (this.volume == null ? 0 : this.volume),
            LOAD: (this.load == null ? "" : this.load),
            INCOTERM: this.incoterm,
            CONTLOADTYPE: (this.contloadtype == null ? "" : this.contloadtype),
            NARRATION: this.narration,
            AIRLINE: (this.airline == null ? "" : this.airline),
            MakerID: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            VGUID: this._loginService.getLogin()[0].GUID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
        };
        //console.log(jsonmasterchild)
        this._dataService.Common(this.url, jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.loaderService.display(false);
            if (_this.quotno == undefined || _this.quotno.trim() == "" || _this.quotno == "0") {
                if (data.Table[0].STATUS == "100") {
                    _this._ToastrService.toast('success', 'success', data.Table[0].STATUSTEXT);
                    _this.quotno = data.Table[0].QUOTNO;
                    // this.PrintWisorQuotation()
                    _this.PrintQuotation();
                    _this.ResetFinal();
                    _this.loaderService.display(false);
                }
                else {
                    _this._ToastrService.toast('error', 'error', data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            }
            else if (_this.quotno != undefined || _this.quotno.trim() != "" || _this.quotno != "0") {
                if (data.Table[0].STATUS == "100") {
                    _this._ToastrService.toast('success', 'success', data.Table[0].STATUSTEXT);
                    _this.QUOTNO = data.Table[0].QUOTNO;
                    _this.PrintQuotation();
                    //this.PrintWisorQuotation();
                    _this.ResetFinal();
                    _this.loaderService.display(false);
                }
                else {
                    _this._ToastrService.toast('error', 'error', data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
                _this.loaderService.display(false);
            }
        });
    };
    QuotationEntryComponent.prototype.ResetFinal = function () {
        this.quotno = '';
        this.client = undefined,
            this.origin = undefined;
        this.shipmode = undefined;
        this.Effective_from0 = "";
        this.quotdate = "";
        this.Quotvaliddate = "";
        this.Effective_to0 = "";
        this.chargetype = "";
        this.acccode = "";
        this.currency = "";
        this.rate = "";
        this.exrate = "";
        this.minrate = "";
        this.unit = "";
        this.PKQUTID = "0";
        this.chargesdetails = [];
        this.company = "";
        this.shiptype = undefined;
        this.childbtntext = "Add";
        this.liner = undefined;
        this.pol = undefined;
        this.pod = undefined;
        this.narration = "";
        this.weight = "";
        this.chweight = "";
        this.volume = "";
        this.load = "";
        this.incoterm = undefined;
        this.contloadtype = undefined;
        this.airline = undefined;
        this._router.navigate(['/master/quotation/Quotation/ ']);
    };
    QuotationEntryComponent.prototype.onchangefindcomma = function (innumber) {
        if (innumber != undefined) {
            if (innumber.match(/,/g) != null) {
                alert('comma not allowed');
                this.validnumber = false;
                return false;
            }
            else {
                this.validnumber = true;
            }
        }
    };
    QuotationEntryComponent.prototype.PrintQuotation = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (this.shipmode == "AIR") {
            window.open('./#/popup/Air-Quotationprint/' + this.quotno + '/', "Air Quotation Print", toolbar);
        }
        else if (this.shipmode == "SEA") {
            window.open('./#/popup/Sea-Quotationprint/' + this.quotno + '/', "Sea Quotation Print", toolbar);
        }
    };
    QuotationEntryComponent.prototype.PrintWisorQuotation = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Wisor-Quotationprint/' + this.quotno + '/', "Quotation Print", toolbar);
    };
    QuotationEntryComponent.prototype.getexchangerate = function (ev) {
        if (ev == "CR115") {
            this.disableexrate = true;
            this.exrate = "1.00";
        }
        else {
            this.disableexrate = false;
            this.exrate = "";
        }
    };
    QuotationEntryComponent.prototype.changeshipmentmode = function (ev) {
        if (ev == "AIR") {
            this.shipmode = "AIR";
        }
        else if (ev == "SEA") {
            this.shipmode = "SEA";
        }
    };
    QuotationEntryComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    QuotationEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-entry',
            template: __webpack_require__(/*! raw-loader!./quotation.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/quotation/quotation.component.html"),
            styles: [__webpack_require__(/*! ./quotation.component.css */ "./src/app/master/quotation/quotation.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], QuotationEntryComponent);
    return QuotationEntryComponent;
}());



/***/ }),

/***/ "./src/app/master/quotation/quotation.module.ts":
/*!******************************************************!*\
  !*** ./src/app/master/quotation/quotation.module.ts ***!
  \******************************************************/
/*! exports provided: QuotationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModule", function() { return QuotationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _quotation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotation.component */ "./src/app/master/quotation/quotation.component.ts");
/* harmony import */ var _quotation_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotation.search.component */ "./src/app/master/quotation/quotation.search.component.ts");
/* harmony import */ var _quot_rate_master_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quot-rate-master-entry.component */ "./src/app/master/quotation/quot-rate-master-entry.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _quotation_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quotation.routing */ "./src/app/master/quotation/quotation.routing.ts");
/* harmony import */ var _enquiry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enquiry.component */ "./src/app/master/quotation/enquiry.component.ts");
/* harmony import */ var _enquiry_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enquiry.search.component */ "./src/app/master/quotation/enquiry.search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';












// import {QuotationDesignComponent} from './quotation.design.component';
var QuotationModule = /** @class */ (function () {
    function QuotationModule() {
    }
    QuotationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_enquiry_search_component__WEBPACK_IMPORTED_MODULE_13__["EnquirySearchComponent"], _quotation_component__WEBPACK_IMPORTED_MODULE_6__["QuotationEntryComponent"], _quotation_search_component__WEBPACK_IMPORTED_MODULE_7__["QuotationSearchComponent"], _quot_rate_master_entry_component__WEBPACK_IMPORTED_MODULE_8__["QuotRateEntryComponent"], _enquiry_component__WEBPACK_IMPORTED_MODULE_12__["EnquiryPageComponent"]],
            imports: [_quotation_routing__WEBPACK_IMPORTED_MODULE_11__["QuotationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ], providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], QuotationModule);
    return QuotationModule;
}());



/***/ }),

/***/ "./src/app/master/quotation/quotation.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/quotation/quotation.routing.ts ***!
  \*******************************************************/
/*! exports provided: QuotationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationRoutingModule", function() { return QuotationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quotation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation.component */ "./src/app/master/quotation/quotation.component.ts");
/* harmony import */ var _quotation_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotation.search.component */ "./src/app/master/quotation/quotation.search.component.ts");
/* harmony import */ var _quot_rate_master_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quot-rate-master-entry.component */ "./src/app/master/quotation/quot-rate-master-entry.component.ts");
/* harmony import */ var _enquiry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enquiry.component */ "./src/app/master/quotation/enquiry.component.ts");
/* harmony import */ var _enquiry_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enquiry.search.component */ "./src/app/master/quotation/enquiry.search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import {QuotationDesignComponent} from './quotation.design.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Master-Quotation'
        },
        children: [
            { path: 'QuotRate', component: _quot_rate_master_entry_component__WEBPACK_IMPORTED_MODULE_4__["QuotRateEntryComponent"], data: { title: 'Quot Rate Master Entry' }, pathMatch: 'ful' },
            { path: 'Quotation/:quotationno', component: _quotation_component__WEBPACK_IMPORTED_MODULE_2__["QuotationEntryComponent"], data: { title: 'Quotation' }, pathMatch: 'ful' },
            { path: 'QuotationSearch', component: _quotation_search_component__WEBPACK_IMPORTED_MODULE_3__["QuotationSearchComponent"], data: { title: 'Quotation Search' }, pathMatch: 'ful' },
            { path: 'enquiry/:enquiryno', component: _enquiry_component__WEBPACK_IMPORTED_MODULE_5__["EnquiryPageComponent"], data: { title: 'Enquiry Page' }, pathMatch: 'ful' },
            { path: 'enquirysearch', component: _enquiry_search_component__WEBPACK_IMPORTED_MODULE_6__["EnquirySearchComponent"], data: { title: 'Enquiry Search Page' }, pathMatch: 'ful' },
        ]
    }
];
var QuotationRoutingModule = /** @class */ (function () {
    function QuotationRoutingModule() {
    }
    QuotationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuotationRoutingModule);
    return QuotationRoutingModule;
}());



/***/ }),

/***/ "./src/app/master/quotation/quotation.search.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/master/quotation/quotation.search.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-card {\n  font-size: 13px; }\n\n.header-title {\n  background: #0d6efd;\n  font-size: 14px; }\n\n.search-row input[type=\"radio\"] {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\nmy-date-picker {\n  display: block;\n  position: relative; }\n\n.mydp .selector {\n  position: absolute !important;\n  z-index: 9999 !important;\n  top: 38px !important; }\n\n.list-card {\n  font-size: 13px; }\n\n.list-header {\n  border-bottom: 2px solid #e7e7e7;\n  padding-bottom: 6px; }\n\n.back-link {\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.2s; }\n\n.back-link:hover {\n  text-decoration: underline; }\n\n.modern-table thead tr {\n  background: #26a6d4;\n  color: #fff;\n  font-size: 13px; }\n\n.modern-table th,\n.modern-table td {\n  vertical-align: middle;\n  padding: 8px 10px;\n  white-space: nowrap; }\n\n.modern-table tbody tr:hover {\n  background: #f1f6ff; }\n\n.anchor-link {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.custom-table tr {\n  height: 22px !important;\n  /* reduce row height */ }\n\n.custom-table td,\n.custom-table th {\n  padding: 2px 6px !important;\n  /* reduce inner spacing */\n  line-height: 1 !important; }\n\n:host ::ng-deep .ng-select .ng-select-container {\n  height: 25px !important;\n  min-height: 25px !important;\n  padding: 0.375rem 0.75rem !important;\n  /* matches default form-control padding */\n  display: flex !important;\n  align-items: center !important;\n  box-sizing: border-box !important; }\n\n.search-row label {\n  width: 120px;\n  /* adjust as needed */\n  margin-right: 10px; }\n\n/* Prevent long text from expanding the control */\n\n:host ::ng-deep .ng-select .ng-value,\n:host ::ng-deep .ng-select .ng-placeholder,\n:host ::ng-deep .ng-select .ng-value-label {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  line-height: 1 !important; }\n\n/* Ensure ng-input does not force width growth inside table cells */\n\n:host ::ng-deep .ng-select .ng-input {\n  min-width: 0 !important; }\n\n/* Fixed-width helper classes used in the template */\n\n:host ::ng-deep table .fixed-select {\n  width: 350px !important;\n  max-width: 350px !important;\n  display: inline-block !important; }\n\n:host ::ng-deep .client-select {\n  width: 350px !important; }\n\n:host ::ng-deep .liner-select {\n  width: 350px !important; }\n\n:host ::ng-deep .short-select {\n  width: 200px !important; }\n\n.ng-select.rounded-pill .ng-select-container {\n  height: 25px !important;\n  min-height: 25px !important;\n  border-radius: 2px !important;\n  padding: 2px 8px !important;\n  display: flex;\n  align-items: center; }\n\n.input-25 {\n  height: 25px !important;\n  padding: 2px 6px !important;\n  font-size: 0.85rem !important; }\n\n.button-spacing {\n  margin-right: 10px;\n  /* Adds 10px space to the right of each button */ }\n\n.label {\n  font-family: 'Segoe UI', sans-serif;\n  font-weight: 400;\n  color: #555;\n  margin-right: 4px; }\n\n.reduced-height-row {\n  height: 20px;\n  /* Adjust the desired height */ }\n\n.sticky-header th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: #f8f9fa !important;\n  /* matches bg-body-secondary */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3F1b3RhdGlvbi9EOlxcUHJvamVjdFxcQXBwbGljYXRpb25cXExpbmtzX1Byb2plY3RzXFxMaW5rc19WOE5HX0NsaW5ldC9zcmNcXGFwcFxcbWFzdGVyXFxxdW90YXRpb25cXHF1b3RhdGlvbi5zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjs7RUFFRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDSSx1QkFBdUI7RUFBSSxzQkFBQSxFQUF1Qjs7QUFHdEQ7O0VBRUksMkJBQTJCO0VBQUUseUJBQUE7RUFDN0IseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0MsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFBRSx5Q0FBQTtFQUN0Qyx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLGlDQUFpQyxFQUFBOztBQUdsQztFQUNFLFlBQVk7RUFBSSxxQkFBQTtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEIsaURBQUE7O0FBQ0E7OztFQUdDLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLHlCQUF5QixFQUFBOztBQUcxQixtRUFBQTs7QUFDQTtFQUNDLHVCQUF1QixFQUFBOztBQUd4QixvREFBQTs7QUFDQTtFQUNDLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0NBQWdDLEVBQUE7O0FBR2pDO0VBQWlDLHVCQUF1QixFQUFBOztBQUN4RDtFQUFnQyx1QkFBdUIsRUFBQTs7QUFDdkQ7RUFBZ0MsdUJBQXVCLEVBQUE7O0FBR3ZEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUVoQztFQUNPLGtCQUFrQjtFQUFFLGdEQUFBLEVBQWlEOztBQUd2RTtFQUNKLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFBRSw4QkFBQSxFQUErQjs7QUFVL0M7RUFDSSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0VBQ1YsOEJBQThCO0VBQUUsOEJBQUEsRUFBK0IiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvcXVvdGF0aW9uL3F1b3RhdGlvbi5zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNhcmQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgYmFja2dyb3VuZDogIzBkNmVmZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcm93IGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG5teS1kYXRlLXBpY2tlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXlkcCAuc2VsZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICB0b3A6IDM4cHggIWltcG9ydGFudDtcclxufVxyXG4ubGlzdC1jYXJkIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxufVxyXG5cclxuLmJhY2stbGluayB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4uYmFjay1saW5rOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm1vZGVybi10YWJsZSB0aGVhZCB0ciB7XHJcbiAgYmFja2dyb3VuZDogIzI2YTZkNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5tb2Rlcm4tdGFibGUgdGgsXHJcbi5tb2Rlcm4tdGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm1vZGVybi10YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjZmZjtcclxufVxyXG5cclxuLmFuY2hvci1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmN1c3RvbS10YWJsZSB0ciB7XHJcbiAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDsgICAvKiByZWR1Y2Ugcm93IGhlaWdodCAqL1xyXG59XHJcblxyXG4uY3VzdG9tLXRhYmxlIHRkLFxyXG4uY3VzdG9tLXRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDJweCA2cHggIWltcG9ydGFudDsgLyogcmVkdWNlIGlubmVyIHNwYWNpbmcgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG5cdGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cdG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtICFpbXBvcnRhbnQ7IC8qIG1hdGNoZXMgZGVmYXVsdCBmb3JtLWNvbnRyb2wgcGFkZGluZyAqL1xyXG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLXJvdyBsYWJlbCB7XHJcbiAgd2lkdGg6IDEyMHB4OyAgIC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFByZXZlbnQgbG9uZyB0ZXh0IGZyb20gZXhwYW5kaW5nIHRoZSBjb250cm9sICovXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IC5uZy12YWx1ZSxcclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXBsYWNlaG9sZGVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctdmFsdWUtbGFiZWwge1xyXG5cdG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuXHRsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBFbnN1cmUgbmctaW5wdXQgZG9lcyBub3QgZm9yY2Ugd2lkdGggZ3Jvd3RoIGluc2lkZSB0YWJsZSBjZWxscyAqL1xyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctaW5wdXQge1xyXG5cdG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBGaXhlZC13aWR0aCBoZWxwZXIgY2xhc3NlcyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAqL1xyXG46aG9zdCA6Om5nLWRlZXAgdGFibGUgLmZpeGVkLXNlbGVjdCB7XHJcblx0d2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcblx0bWF4LXdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNsaWVudC1zZWxlY3QgeyB3aWR0aDogMzUwcHggIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVyLXNlbGVjdCB7IHdpZHRoOiAzNTBweCAhaW1wb3J0YW50OyB9XHJcbjpob3N0IDo6bmctZGVlcCAuc2hvcnQtc2VsZWN0IHsgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IH1cclxuXHJcblxyXG4ubmctc2VsZWN0LnJvdW5kZWQtcGlsbCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDJweCA4cHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0LTI1IHtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5idXR0b24tc3BhY2luZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGRzIDEwcHggc3BhY2UgdG8gdGhlIHJpZ2h0IG9mIGVhY2ggYnV0dG9uICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzU1NTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBcclxufVxyXG4ucmVkdWNlZC1oZWlnaHQtcm93IHtcclxuICBoZWlnaHQ6IDIwcHg7IC8qIEFkanVzdCB0aGUgZGVzaXJlZCBoZWlnaHQgKi9cclxufVxyXG5cclxuLy8gLnRhYmxlLXdyYXBwZXIge1xyXG4vLyAgICAgaGVpZ2h0OiAyMjBweDsgICAgICAgICAvKiB5b3VyIHJlcXVpcmVkIGhlaWdodCAqL1xyXG4vLyAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG4uc3RpY2t5LWhlYWRlciB0aCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50OyAvKiBtYXRjaGVzIGJnLWJvZHktc2Vjb25kYXJ5ICovXHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovLzE4MC4xNzkuMjA3LjE2My9lcnAvaW5jbHVkZS9pbWcvZm9ybWJnMi5qcGcpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/quotation/quotation.search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/master/quotation/quotation.search.component.ts ***!
  \****************************************************************/
/*! exports provided: QuotationSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationSearchComponent", function() { return QuotationSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationSearchComponent = /** @class */ (function () {
    function QuotationSearchComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _loginService, _router) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._router = _router;
        this.searchValue = "";
        this.quotationlist = [];
        this.origin = '';
        this.origintable = [];
        this.clientable = [];
        this.exampleRadios1 = '1';
        this.displayType = 'SEARCH';
        this.SearchTitle = "Quotation Search";
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
            width: '160px',
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
    QuotationSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jsonmaster2 = {
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Admin/ADMIN_QUOTATION_PAGELOAD", jsonmaster2)
            .subscribe(function (data) {
            _this.origintable = data.Table1;
            _this.clientable = data.Table;
            _this.shpmodetable = data.Table5;
        });
        this.config = {
            itemsPerPage: 15,
            currentPage: 1,
            totalItems: this.quotationlist.count
        };
    };
    QuotationSearchComponent.prototype.searchlist = function () {
        var _this = this;
        this._loginService.verifyRights(431, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data);
        });
        var jsonmaster;
        var serchtext = "", frdt = "", todt = "";
        if (this.exampleRadios1 == "1") {
            serchtext = this.client;
            if (this.client == "" || this.client == null || this.client == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select client !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "2") {
            serchtext = this.shipmode;
            if (this.shipmode == "" || this.shipmode == null || this.shipmode == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select shipment mode !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "3") {
            serchtext = this.origin;
            if (this.origin == "") {
                this._toasterService.toast('warning', 'warning', "Please select origin !");
                return false;
            }
        }
        else {
            serchtext = "";
            if (!this.startdate) {
                this._toasterService.toast('warning', 'warning', "Please select start date !");
                return false;
            }
            else if (!this.enddate) {
                this._toasterService.toast('warning', 'warning', "Please select end date !");
                return false;
            }
            else if (this.startdate != "" && this.enddate != "") {
                if (this._dataService.date2Comparison(this.startdate.formatted, this.enddate.formatted) == false) {
                    this._toasterService.toast('warning', 'warning', 'End date should be greater than Start date !');
                    return false;
                }
            }
        }
        this.loaderService.display(true);
        jsonmaster = { SearchVal: this.exampleRadios1, SearchText: serchtext, efftfrdt: (this.startdate == undefined ? "" : this.startdate.formatted), effttodt: (this.enddate == undefined ? "" : this.enddate.formatted) };
        // console.log(jsonmaster)
        this._dataService.getData("Admin/ADMIN_QUOTATION_SEARCHLIST", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.quotationlist = data.Table;
            if (data.Table.length == 0) {
                _this._toasterService.toast('warning', 'warning', "No records found !");
            }
            _this.displayType = 'LIST';
            _this.SearchTitle = "Quotation List";
            _this.loaderService.display(false);
        });
    };
    QuotationSearchComponent.prototype.ListOnclick = function (ID, quotno, shipmode) {
        if (confirm('Click Ok to Print or Click Cancel to Edit ?')) {
            var theTop = (screen.height / 2) - (483 / 2);
            var theLeft = (screen.width / 2) - (780 / 2);
            var toolbar_1 = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
            if (shipmode == "AIR") {
                window.open('./#/popup/Air-Quotationprint/' + quotno + '/', "Air Quotation Print", toolbar_1);
            }
            else if (shipmode == "SEA") {
                window.open('./#/popup/Sea-Quotationprint/' + quotno + '/', "Sea Quotation Print", toolbar_1);
            }
        }
        else {
            this._router.navigate(['/master/quotation/Quotation/' + quotno]);
        }
    };
    QuotationSearchComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    QuotationSearchComponent.prototype.back = function () {
        //this.result.emit(true);
        this._router.navigate(['/master/quotation/QuotationSearch']);
    };
    QuotationSearchComponent.prototype.Reset = function () {
        this.client = null;
        this.origin = null;
        this.startdate = "";
        this.enddate = "";
        this.searchValue = "1";
    };
    QuotationSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    QuotationSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-search',
            template: __webpack_require__(/*! raw-loader!./quotation.search.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/quotation/quotation.search.component.html"),
            styles: [__webpack_require__(/*! ./quotation.search.component.scss */ "./src/app/master/quotation/quotation.search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], QuotationSearchComponent);
    return QuotationSearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=quotation-quotation-module.js.map