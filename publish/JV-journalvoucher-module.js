(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["JV-journalvoucher-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n         <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\" colspan=\"4\">\r\n                    <b> General Details </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span  class=\"col-form-span-label\"><b>Voucher No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"VoucherNo\" type=\"text\"   disabled=\"disabled\" class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td ><span class=\"col-form-span-label\"><b>Voucher Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n                <!-- <td><my-date-picker name=\"VoucherDate\" [disabled]='togglevdate' class=\"form-control\" [options]=\"myDatePickerOptions\" [selDate]=\"VoucherDate\"  ></my-date-picker></td> -->\r\n                <td><my-date-picker name=\"VoucherDate\" [disabled]='togglevdate' class=\"form-control\" (dateChanged)=\"VoucherDateChanged($event)\" [options]=\"myDatePickerOptions\" [selDate]=\"VoucherDate\"  ></my-date-picker></td>\r\n                </tr>\r\n             <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                      <!-- <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > -->\r\n                      <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\r\n                      placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"Narration\"></textarea>\r\n                     </td>\r\n             </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Accounts Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Entry Type</b> </span></td>\r\n                <td style=\" display: flex; \"> \r\n                    <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"GetEntryType($event.target.value)\" >\r\n                        <option value=\"0\">-- Select Type --</option>\t\r\n                        <option value=\"GR\">General</option>\t\r\n                        <option value=\"AD\">Advance</option>\r\n                        <option value=\"AB\">Against Bill</option>\r\n                        <option value=\"JB\">JobNo</option>\t\r\n                        <option value=\"AO\">Opening Balance</option>\t\r\n                        </select> \r\n                    </td>\r\n                <td><span class=\"col-form-span-label\"><b> Department</b> </span></td>\r\n                <td>\r\n                 <select class=\"form-control width150\"  [(ngModel)]=\"Department\" (change)=\"GetDepartmentName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of Departmentlist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                 </select>\r\n                <!-- <ng-select class=\"form-control width150\" [items]=\"Departmentlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Department\"\r\n                (change)=\"GetDepartmentName($event)\" class=\"custom \" placeholder=\"--Select--\">\r\n            </ng-select> -->\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Bill No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"BillNo\" type=\"text\"  [OnlyNumber]=\"true\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Job No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Debit</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Debit\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]='toggledebit' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Credit</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Credit\" [OnlyNumber]=\"true\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ShortNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" [disabled]='toggleupdatechldbtn' type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n            </tr>\r\n        <tr>\r\n            <td><span class=\"col-form-span-label\"><b> Total Debit</b> </span></td>\r\n            <td >  <input [(ngModel)]=\"TotalDebit\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            <td><span class=\"col-form-span-label\"><b>Total Credit</b> </span></td>\r\n            <td >  <input [(ngModel)]=\"TotalCredit\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n        </tr>\r\n    <!-- </table> \r\n      <table class=\"table table-bordered table-sm-new bgwhite\"> -->\r\n        <tr>\r\n             <td colspan=\"4\" >\r\n                <div class=\"row xyscroll\" style=\"width:715px;\"   > \r\n                    <table class=\"table table-responsive-sm table-bordered\"  *ngIf=\"Accountlist.length>0\" >\r\n                        <thead>\r\n                            <tr class=\"bakgrdliteBlue\">\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\" ></th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Account Name</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Debit</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Credit</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Item</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Entry Type </th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Job No</th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Bill No</th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Department</th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Narration</th>\r\n                            </tr>\r\n                        </thead>\r\n                         <tbody  >\r\n                            <tr *ngFor=\"let obj of Accountlist\">\r\n                                <td class=\"centerlabel\">\r\n                                    <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                    &nbsp;\r\n                                    <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.JV_dtls_ID)\"></i>\r\n                                </td>\r\n                               <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                               <td><span class=\"col-form-span-label\">{{obj.DEBIT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.CREDIT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                            </tr>\r\n                        </tbody>  \r\n                    </table>\r\n               </div> \r\n             </td>\r\n        </tr>\r\n        <tr>\r\n            <td colspan=\"4\"  class=\"centerlabel\">\r\n                <button class=\"btn btn-sm btn-success\" [disabled]='toggleupdatebtn' type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n            </td>\r\n        </tr>\r\n    </table>   \r\n</div>\r\n<div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/JV/journalvoucher_search.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/JV/journalvoucher_search.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Search</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CODE\" [(ngModel)]=\"Type\" />&nbsp;Voucher No</span>\r\n                    </td>\r\n                    <td class=\"width150\">\r\n                        <input type=\"text\" [(ngModel)]=\"VoucherNo\" class=\"form-control width150\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CODE'\"\r\n                        />\r\n                    </td>\r\n                    <td>\r\n                        <button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-primary\" (click)=\"Print();\" [disabled]=\"Type!='CODE'\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-print\"></i> Print</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"JOBNO\" [(ngModel)]=\"Type\" />&nbsp;Job No</span>\r\n                    </td>\r\n                    <td colspan=\"3\" >\r\n                        <input type=\"text\" [(ngModel)]=\"JobNo\"   class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [OnlyNumber]=\"true\" [disabled]=\"Type!='JOBNO'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"INVOICENO\" [(ngModel)]=\"Type\" />&nbsp;Invoice No</span>\r\n                    </td>\r\n                    <td colspan=\"3\"  >\r\n                        <input type=\"text\" [(ngModel)]=\"InvoiceNo\" [OnlyNumber]=\"true\" class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [disabled]=\"Type!='INVOICENO'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CLIENT\" [(ngModel)]=\"Type\" />&nbsp;Client</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                       \r\n                                 <!-- <select class=\"form-control width200\"  [(ngModel)]=\"Account\" [disabled]=\"Type!='CLIENT'\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of AccountList\" value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option> \r\n                                </select> -->\r\n                                <ng-select   [items]=\"AccountList\" bindLabel=\"ACCTNAME\" \r\n                                bindValue=\"ACCTCODENAME\"  [(ngModel)]=\"Account\"  (ngModelChange)=\"GetAccountName($event)\"\r\n                                class=\"custom\" placeholder=\"--Please Select--\">\r\n                                 </ng-select>\r\n                       \r\n                    </td>\r\n                </tr>\r\n              \r\n                <tr class=\"trbg\">\r\n                    <td class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"AMOUNT\" [(ngModel)]=\"Type\" />&nbsp;Amount</span>\r\n                    </td>\r\n                    <td colspan=\"3\"  >\r\n                        <input type=\"text\" [(ngModel)]=\"Amount\" [OnlyNumber]=\"true\"  [maxlength]=\"15\" class=\"form-control width150\" [disabled]=\"Type!='AMOUNT'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DATE\" [(ngModel)]=\"Type\" />&nbsp; Date Wise</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <span class=\"col-form-span-label\">From</span>\r\n                        <my-date-picker name=\"FromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"FromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <span class=\"col-form-span-label\">To</span>\r\n                        <my-date-picker name=\"ToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                    </td>\r\n                \r\n                </tr>\r\n                \r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"PRINTAV\" [(ngModel)]=\"Type\" />&nbsp; Print Vouchers of a day</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                      \r\n                            <span class=\"col-form-span-label\">Date</span>\r\n                            <my-date-picker name=\"Day\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"VoucherDay\" [disabled]=\"Type!='PRINTAV'\"></my-date-picker>\r\n                       \r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DISPLAY\" [(ngModel)]=\"Type\" />&nbsp;Display</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                      \r\n                        <div class=\"leftlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"0\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;List</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;Details</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n             \r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i> Search</span>\r\n                                      \r\n                        </button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\">\r\n                            <span class=\"col-form-span-label\" (click)=\"ResetAll();\"><i class=\"fa fa-ban\"></i> Reset</span></button> \r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n   \r\n    <div class=\"row\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 xyscroll\" style=\"height:300px;\" >\r\n            <table class=\"table table-sm-new table-bordered bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th colspan=\"8\">\r\n                            {{searchHeaderText}}\r\n                            <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';searchList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                        </th>\r\n                    </tr>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th>Voucher No</th>\r\n                        <th>Voucher Date</th>\r\n                        <th>Amount</th>\r\n                     \r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of searchList\">\r\n                        <td>\r\n                            <span class=\"col-form-span-label anchor-link\" (click)=\"redirectToEdit(obj.JVCODE,obj.STATUS)\" style=\"cursor:pointer;\">{{obj.JVCODE}}</span>\r\n                            <!-- <span class=\"col-form-span-label\">\r\n                                 <a href=\"javascript:void(0);\" (click)=\"redirectToEdit(obj.pur_code)\">{{obj.PUR_CODE}}</a> \r\n                            </span> -->\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.JV_DATE}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.AMOUNT}}</span>\r\n                        </td>\r\n                      \r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n   \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/JV/jv-auth.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/JV/jv-auth.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>Authorise Journal Voucher Request List</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n      <div class=\"col-md-1\">\r\n        \r\n      </div>\r\n      <div   class=\"col-md-10\" style=\"overflow-y: auto;height: 500px;\">\r\n        <table  class=\"table table-bordered table-sm-new bgwhite table-hover\" >\r\n          <thead>\r\n           \r\n            <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n              <th *ngIf=\" FLAG != 'VIEW'\" class=\"col-form-span-label\"><input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp; </th>\r\n          \r\n              <th class=\"col-form-span-label\">\r\n                REQ CODE\r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                REQUESTED ON \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                REQUESTED BY \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                DEBIT \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                CREDIT \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AUTHORISED BY \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AUTHORISED ON \r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of Unauthlist \"  \r\n              >\r\n              <td *ngIf=\" FLAG != 'VIEW'\" class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.REQCODE)\"> &nbsp; </td>\r\n        \r\n               <td class=\"col-form-span-label link-label\"  (click)=\"ViewJVData(obj.REQCODE)\"><u> {{obj.REQCODE}}</u> </td> \r\n              <!-- <td class=\"col-form-span-label link-label\" (click)=\"srpinvoiceviewdata(obj.REQCODE,FLAG,authstatus)\">{{obj.REQCODE}}</td> -->\r\n              <td class=\"col-form-span-label\">{{obj.REQUESTEDON}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.REQUESTEDBY}}</td>\r\n              <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.DEBIT|number:'2.2-4'}}</td>\r\n              <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.CREDIT|number:'2.2-4'}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISEDBY}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISATIONDATE}}</td>\r\n            </tr>\r\n          </tbody>\r\n        \r\n          <tr >\r\n               <td *ngIf=\"(hidebtnrow =='U' || hidebtnrow == 'M')\"  colspan=\"8\" class=\"right-text pr-2\">\r\n                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Verify()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Verified</span></button>\r\n                  <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"rejectdata()\"> <span\r\n                    class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Reject</span></button>\r\n                       <!-- <button class=\"btn btn-sm btn-success\" *ngIf=\" hidebtnrow =='U' \" type=\"submit\" (click)=\"Passdatatomanagement()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Management</span></button> -->\r\n                 \r\n            </td>\r\n          </tr>\r\n        \r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite table-hover\">\r\n          <tr>\r\n            <td colspan=\"10\" class=\"right-text pr-2\">\r\n         \r\n           <span class=\"col-form-span-label link-label\" (click)=\"VerifiedDataList('V')\" ><b><u>Verified</u></b></span>&nbsp;&nbsp;\r\n           <span class=\"col-form-span-label link-label\" (click)=\"getdataforauth()\" ><b><u>UnVerified</u></b></span>&nbsp;&nbsp;\r\n           <span class=\"col-form-span-label link-label\" (click)=\"VerifiedDataList('R')\" ><b><u>Rejected</u></b></span>&nbsp;&nbsp;\r\n           <!-- <span class=\"col-form-span-label link-label\" (click)=\"VerifiedDataList('M')\" ><b><u>Management</u></b></span>&nbsp;&nbsp; -->\r\n          \r\n         </td>\r\n       </tr>\r\n        </table> \r\n        \r\n     \r\n      </div>\r\n      <div class=\"col-md-1\">\r\n      </div>\r\n      <!-- <div class=\"col-md-1\">\r\n       </div>\r\n       <div class=\"col-md-10\" >\r\n        <strong>Total Records :  {{rowcount}}</strong>\r\n       </div>\r\n       <div class=\"col-md-1\">\r\n      </div> -->\r\n    </div>           \r\n  </div>  \r\n   \r\n  \r\n "

/***/ }),

/***/ "./src/app/accounts/Vouchers/JV/journalvoucher.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/accounts/Vouchers/JV/journalvoucher.module.ts ***!
  \***************************************************************/
/*! exports provided: JvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JvModule", function() { return JvModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _journalvoucher_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journalvoucher.routing */ "./src/app/accounts/Vouchers/JV/journalvoucher.routing.ts");
/* harmony import */ var _journalvoucher_IU_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./journalvoucher_IU.component */ "./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.ts");
/* harmony import */ var _journalvoucher_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./journalvoucher_search.component */ "./src/app/accounts/Vouchers/JV/journalvoucher_search.component.ts");
/* harmony import */ var _jv_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jv-auth.component */ "./src/app/accounts/Vouchers/JV/jv-auth.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var JvModule = /** @class */ (function () {
    function JvModule() {
    }
    JvModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_journalvoucher_routing__WEBPACK_IMPORTED_MODULE_6__["JvRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ],
            declarations: [
                _journalvoucher_IU_component__WEBPACK_IMPORTED_MODULE_7__["JournalVoucherComponent"],
                _journalvoucher_search_component__WEBPACK_IMPORTED_MODULE_8__["JournalVoucherSearchComponent"],
                _jv_auth_component__WEBPACK_IMPORTED_MODULE_9__["journalvoucherAuth"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], JvModule);
    return JvModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/JV/journalvoucher.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/accounts/Vouchers/JV/journalvoucher.routing.ts ***!
  \****************************************************************/
/*! exports provided: JvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JvRoutingModule", function() { return JvRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _journalvoucher_IU_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journalvoucher_IU.component */ "./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.ts");
/* harmony import */ var _journalvoucher_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journalvoucher_search.component */ "./src/app/accounts/Vouchers/JV/journalvoucher_search.component.ts");
/* harmony import */ var _jv_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jv-auth.component */ "./src/app/accounts/Vouchers/JV/jv-auth.component.ts");
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
            title: ' Journal Voucher'
        },
        children: [
            { path: 'Add/:Status/:EntryNo', component: _journalvoucher_IU_component__WEBPACK_IMPORTED_MODULE_2__["JournalVoucherComponent"], data: { title: 'Add' } },
            { path: 'Search/:Status', component: _journalvoucher_search_component__WEBPACK_IMPORTED_MODULE_3__["JournalVoucherSearchComponent"], data: { title: 'Search' } },
            { path: 'Auth/:Status', component: _jv_auth_component__WEBPACK_IMPORTED_MODULE_4__["journalvoucherAuth"], data: { title: 'Search' } }
        ]
    }
];
var JvRoutingModule = /** @class */ (function () {
    function JvRoutingModule() {
    }
    JvRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JvRoutingModule);
    return JvRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.ts ***!
  \*********************************************************************/
/*! exports provided: JournalVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherComponent", function() { return JournalVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

///import{DataService} from '../../..authServiceshared/service/dataService';






var JournalVoucherComponent = /** @class */ (function () {
    function JournalVoucherComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.Allitemlist = [];
        this.codelistActt = [];
        this.VoucherNo = "";
        this.Narration = "";
        this.AccountNameList = [];
        this.ItemList = [];
        this.EntryTypeList = [];
        this.Departmentlist = [];
        this.BillNo = "";
        this.JobNo = "";
        this.Debit = "";
        this.Credit = "";
        this.ShortNarration = "";
        this.TotalCredit = "0";
        this.TotalDebit = "0";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.ID = "0";
        this.ENTRYNO = "";
        this.CLIENT = "";
        this.ACCTNAME = "";
        this.JV_DTLS_ID = "0";
        this.STATUS = "JV";
        this.Accountlist = [];
        this.jv_trn = "";
        this.ISNOTEDITABLE = "0";
        this.ISJVGENERATE = "0";
        this.toggledebit = false;
        this.togglevdate = false;
        this.toggleupdatebtn = false;
        this.toggleupdatechldbtn = false;
        this.Header = "JOURNAL VOUCHER";
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
    JournalVoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.VoucherNo = params["EntryNo"];
            _this.STATUS = params["Status"];
        });
        this.VoucherDate = new Date();
        this.VoucherDate = this._dataService.datechnge(this.VoucherDate);
        var jsonparam = { cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS };
        this._dataService.getData("Accounts/ACC_JV_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.Departmentlist = data.Table1;
            _this.Allitemlist = data.Table2;
        });
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_JV_RESET", jsonreset)
            .subscribe(function (data) {
        });
        if (this.VoucherNo != ' ' && this.STATUS == "JV") {
            this.verifyPermission('9', 'Modify');
            this.Header = 'JOURNAL VOUCHER - UPDATE ';
            this.editpopulate();
        }
        if (this.VoucherNo != ' ' && this.STATUS == "JVREQ") {
            this.verifyPermission('192', 'Modify');
            this.Header = 'REQUEST JOURNAL VOUCHER - UPDATE ';
            this.editpopulate();
        }
        if (this.VoucherNo == ' ' && this.STATUS == "JV") {
            this.verifyPermission('9', 'Add');
            this.Header = 'JOURNAL VOUCHER  - ADD';
        }
        if (this.VoucherNo == ' ' && this.STATUS == "JVREQ") {
            this.verifyPermission('192', 'Add');
            this.Header = 'REQUEST JOURNAL VOUCHER  - ADD';
        }
        if (this.VoucherNo != ' ') {
            // this.editpopulate()
            this.text = 'Update';
        }
    };
    JournalVoucherComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    JournalVoucherComponent.prototype.GetActName = function (Acctcode) {
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    JournalVoucherComponent.prototype.VoucherDateChanged = function (ev) {
        this.VoucherDate = ev.formatted;
    };
    JournalVoucherComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text; ///.split("|")[1];
    };
    JournalVoucherComponent.prototype.GetEntryType = function (entrytypeval) {
        if (entrytypeval == "AD") {
            this.toggledebit = true;
            this.Debit = "";
        }
        else {
            this.toggledebit = false;
            this.Debit = "";
        }
    };
    JournalVoucherComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.ItemList.length > 1) {
            if (this.Item == "" || this.Item == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.EntryType == "AO" || this.EntryType == "AB") {
            if (this.BillNo == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter BillNo. !');
                return false;
            }
            if (this.BillNo.length < 15) {
                this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                return false;
            }
        }
        if (this.EntryType == "AD") {
            if (this.JobNo == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter Job No. !');
                return false;
            }
        }
        if (this.JobNo.length > 0 && this.JobNo.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            return false;
        }
        if (this.JobNo.length > 0 && this.JobNo.length == 15) {
            if (this.JobNo.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
                return false;
            }
            // if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1)   {
            //     this._toasterService.toast("warning","warning",'You have entered Job No of different City !');
            //     return false;
            // }
        }
        if (this.JobNo == "" && this.BillNo == "") {
            if (this.Department == "" || this.Department == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        if ((this.Debit == "" || this.Debit == "0") && (this.Credit == "" || this.Credit == "0")) {
            this._toasterService.toast('warning', 'warning', 'Both Debit & Credit Amount cannot be Left Blank !');
            return false;
        }
        if (parseFloat(this.Debit) > 0 && parseFloat(this.Credit) > 0) {
            this._toasterService.toast('warning', 'warning', 'Either Debit or Credit Amount Should Be Entered !');
            return false;
        }
        if (this.Debit.length > 0 && parseFloat(this.Debit) > 0) {
            if (this.Debit.slice(0, 1) == ".") {
                this._toasterService.toast('warning', 'warning', 'Debit Amount Entered not Valid !');
                return false;
            }
            if (parseFloat(this.Debit) < 0) {
                this._toasterService.toast('warning', 'warning', 'Debit Amount Entered not Valid !');
                return false;
            }
        }
        if (this.Credit.length > 0 && parseFloat(this.Credit) > 0) {
            if (this.Credit.slice(0, 1) == ".") {
                this._toasterService.toast('warning', 'warning', 'Credit Amount Entered not Valid !');
                return false;
            }
            if (parseFloat(this.Credit) < 0) {
                this._toasterService.toast('warning', 'warning', 'Credit Amount Entered not Valid !');
                return false;
            }
        }
        var clientcodeval = this.AccountName.split("|")[1];
        if (clientcodeval == 'Y') {
            if (this.JobNo.length == 0) {
                this._toasterService.toast('warning', 'warning', 'Please Enter JobNo !');
                return false;
            }
        }
        if (this.Debit > this.Credit) {
            this.jv_trn = "D";
            this.Credit = "";
        }
        else {
            this.jv_trn = "C";
            this.Debit = "";
        }
        var jsonchild = { ID: this.ID, ENTRYNO: this.VoucherNo,
            CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo, BILLNO: this.BillNo,
            JV_TRN: this.jv_trn, DEBIT: this.Debit, CREDIT: this.Credit,
            ENTRYTYPE: (this.EntryType == undefined) ? "" : this.EntryType,
            NARRATION: this.ShortNarration, ITEMCODE: (this.Item == undefined) ? "" : this.Item.split("|")[0],
            DEPTID: this.Department, VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: (this.Item == undefined || this.Item == "") ? "" : this.Item.split("|")[2],
            DEPARTMENT: (this.DepartmentName == undefined) ? "" : this.DepartmentName,
            JV_DTLS_ID: this.JV_DTLS_ID,
            STATUS: this.STATUS,
            ISJOBREPORT: this.AccountName.split("|")[1],
            ITEM_DATAVALUE: (this.Item == undefined) ? "" : this.Item,
            ISOLDENTRY: "0"
        };
        this._dataService.Common("Accounts/ACC_JV_TMP_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this.Accountlist = data.Table;
                _this.TotalDebit = data.Table1[0].TOTDEBIT;
                _this.TotalCredit = data.Table1[0].TOTCREDIT;
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else if (data.Table1[0].STATUS.split("#")[0] == "103") {
                _this._toasterService.toast("warning", "warning", data.Table1[0].STATUS.split("#")[1]);
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table1[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    JournalVoucherComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        // this.AccountName=undefined;
        this.JobNo = "";
        this.Debit = "";
        this.Credit = "";
        this.ShortNarration = "";
        this.Item = undefined;
        //  this.Department="";
        //  this.EntryType="";
        this.txtchild = "Add";
        this.BillNo = "";
        this.toggledebit = false;
        this.JV_DTLS_ID = "0";
        // this.ItemList=[];
        // this.AccountNameList=[];
    };
    JournalVoucherComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.ID = filterData.ID;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.GetActName(filterData.CLIENT + '|' + filterData.ISJOBREPORT);
        this.Item = filterData.ITEM_DATAVALUE;
        this.Debit = filterData.DEBIT;
        this.Credit = filterData.CREDIT;
        this.EntryType = filterData.ENTRYTYPE;
        this.BillNo = filterData.BILLNO;
        this.JobNo = filterData.JOBNO;
        this.ShortNarration = filterData.NARRATION;
        this.txtchild = "Update";
        this.JV_DTLS_ID = filterData.JV_dtls_ID;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
        this.DepartmentName = filterData.DEPARTMENT;
        this.Department = filterData.DEPTID;
        this.jv_trn = filterData.JV_TRANS;
    };
    JournalVoucherComponent.prototype.deletechildrecd = function (id, jvdtlsid) {
        var _this = this;
        if (this.ISNOTEDITABLE == "1") {
            this._toasterService.toast("warning", "warning", "You cannot delete this reocrd!");
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, JV_DTLS_ID: jvdtlsid };
                this._dataService.getData("Accounts/ACC_JV_TMP_DEL", jsondelete)
                    .subscribe(function (data) {
                    if (data.Table1[0].STATUS.split("#")[0] == "100") {
                        _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUSTEXT);
                        _this.Accountlist = data.Table;
                        _this.TotalDebit = data.Table1[0].TOTDEBIT;
                        _this.TotalCredit = data.Table1[0].TOTCREDIT;
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", data.Table1[0].STATUSTEXT);
                        _this.loaderService.display(false);
                    }
                });
            }
            else {
                return false;
                this.loaderService.display(false);
            }
        }
    };
    JournalVoucherComponent.prototype.fnIU_JV = function () {
        var _this = this;
        if (this.VoucherDate == "") {
            this._toasterService.toast('warning', 'warning', 'Please Enter Voucher Date !');
            return false;
        }
        if (parseFloat(this.TotalDebit) != parseFloat(this.TotalCredit)) {
            this._toasterService.toast('warning', 'warning', 'The Debit And Credit Total Not Matching Please Check !');
            return false;
        }
        if (parseFloat(this.TotalDebit) == 0 || parseFloat(this.TotalCredit) == 0) {
            this._toasterService.toast('warning', 'warning', 'The Debit or Credit Total Cannot Be Zero !');
            return false;
        }
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.VoucherNo,
            ENTRYDT: this.VoucherDate,
            STATUS: this.STATUS,
            NARRATION: this.Narration,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.VoucherNo == " ") ? "INSERT" : "UPDATE",
        };
        this._dataService.Common("Accounts/ACC_JV_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUS.split("#")[1]);
                _this.Print(data.Table1[0].ENTRYNO);
                _this.loaderService.display(false);
                _this.ResetMain();
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    //  Add_Main()  {
    //     if(this.ISJVGENERATE=='1') {
    //        alert("You can not Update this JV Request because JV is already Generated for this Request !" );
    //        return false;
    //     }  
    //      if(this.VoucherDate=="") {
    //          this._toasterService.toast('warning', 'warning', 'Please Enter Voucher Date !');
    //          return false;
    //         }  
    //     if(parseFloat(this.TotalDebit) != parseFloat(this.TotalCredit) ){
    //         this._toasterService.toast('warning', 'warning', 'The Debit And Credit Total Not Matching Please Check !');
    //         return false;
    //         }  
    //     if(parseFloat(this.TotalDebit) == 0  || parseFloat(this.TotalCredit) ==0 ) {
    //        this._toasterService.toast('warning', 'warning', 'The Debit or Credit Total Cannot Be Zero !');
    //        return false;
    //         }  
    //       const jsonmaster = {
    //             CMPID: this._loginService.getLogin()[0].CMPID,
    //             CMPCODE:this._loginService.getLogin()[0].CMPCODE,
    //             CITYCODE1:this._loginService.getLogin()[0].CITYCODE1,  
    //             CITYCODE:this._loginService.getLogin()[0].CITYCODE,
    //             USERNAME:this._loginService.getLogin()[0].CMP_USERNAME,
    //             ENTRYNO:this.VoucherNo,
    //             ENTRYDT:this.VoucherDate,
    //             STATUS:this.STATUS,
    //             NARRATION:this.Narration,
    //             VGUID:this._loginService.getLogin()[0].GUID,
    //             MAKER_ID:this._loginService.getLogin()[0].CMPID,
    //             MAKER_IP:this._loginService.getLogin()[0].MAKERIP,
    //             ACTION:(this.VoucherNo==" ")?"INSERT" :"UPDATE",
    //         }
    //          this._dataService.Common("Accounts/ACC_JV_IU", jsonmaster)
    //             .subscribe((data: any) => {
    //                 if (data.Table1[0].STATUS.split("#")[0] == "100") {
    //                 this._toasterService.toast('info', 'Complete', data.Table1[0].STATUS.split("#")[1] );
    //                 this.Print(data.Table1[0].ENTRYNO);
    //                 this.loaderService.display(false);
    //                 this.ResetMain();
    //                 }              
    //                 else{ 
    //                     this._toasterService.toast("warning","warning" ,data.Table[0].STATUSTEXT  );
    //                     this.loaderService.display(false);
    //                 }
    //             });
    //    }
    JournalVoucherComponent.prototype.Add_Main = function () {
        if (this.STATUS == 'JV') { //JVREQ
            //cal JV IU
            this.fnIU_JV();
            return false;
        }
        else {
            if (this.ISJVGENERATE == '1') {
                alert("You can not Update this JV Request because JV is already Generated for this Request !");
                return false;
            }
            else {
                //cal JV IU
                this.fnIU_JV();
                return false;
            }
        }
    };
    JournalVoucherComponent.prototype.Print = function (jvno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-JV-Print/' + jvno + '/' + this.STATUS + '/', "Journal Voucher Print", toolbar);
    };
    JournalVoucherComponent.prototype.ResetMain = function () {
        this.Resetchildrcrd();
        this.VoucherNo = " ";
        this.VoucherDate = '';
        this.TotalCredit = '';
        this.TotalDebit = '';
        this.text = "Submit";
        this.Accountlist = "";
        this.Narration = '';
        if (this.STATUS == "JVREQ") {
            this._router.navigate(["/accounts/Voucher/JV/Add/JVREQ/ "]);
        }
        else {
            this._router.navigate(["/accounts/Voucher/JV/Add/JV/ "]);
        }
    };
    JournalVoucherComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonview = { EntryNo: this.VoucherNo,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_JV_View", jsonview)
            .subscribe(function (data) {
            // if (data.Table[0].STATUS == "100") {
            _this.VoucherNo = data.Table[0].JVCODE;
            _this.VoucherDate = (data.Table[0].JV_DATE != "") ? (data.Table[0].JV_DATE) : "";
            _this.Narration = data.Table[0].NARRATION;
            _this.ISJVGENERATE = data.Table[0].ISJVGENERATE;
            _this.Accountlist = data.Table1;
            _this.TotalCredit = data.Table2[0].TOTCREDIT;
            _this.TotalDebit = data.Table2[0].TOTDEBIT;
            if (_this.STATUS == "JV") {
                if (_this.ISJVGENERATE == "1") {
                    _this.togglevdate = true;
                }
                else {
                    _this.togglevdate = false;
                }
            }
            if (_this.STATUS == "JVREQ") {
                if (_this.ISJVGENERATE == '1') {
                    _this._toasterService.toast("warning", "warning", "You can not Update this JV Request because JV is already Generated for this Request !");
                    //this.toggleupdatebtn=true;
                    _this.toggleupdatechldbtn = true;
                    _this.togglevdate = true;
                    _this.loaderService.display(false);
                }
            }
            _this.loaderService.display(false);
        });
    };
    JournalVoucherComponent.prototype.Reset = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.VoucherNo = " ";
            //this.VoucherDate ='';
            this.Narration = '';
            this.TotalCredit = '';
            this.TotalDebit = '';
            this.text = "Submit";
            this.Accountlist = [];
            this.EntryType = '';
            this.AccountName = undefined;
            this.Department = '';
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_JV_RESET", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this.loaderService.display(false);
                if (_this.STATUS == "JVREQ") {
                    _this._router.navigate(["/accounts/Voucher/JV/Add/JVREQ/ "]);
                }
                else {
                    _this._router.navigate(["/accounts/Voucher/JV/Add/JV/ "]);
                }
            });
        }
        else {
            this.loaderService.display(false);
            return false;
        }
    };
    JournalVoucherComponent.prototype.ValidateJobNo = function (jbno) {
        var _this = this;
        if (this.EntryType == "JB" && this.JobNo.length > 0) {
            if (this.JobNo.length > 0 && this.JobNo.length < 15) {
                this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
                return false;
            }
            if (this.JobNo.length > 0 && this.JobNo.length == 15) {
                if (this.JobNo.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                    this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
                    return false;
                }
                if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                    this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
                    return false;
                }
            }
            var jsonvalidate = { JVJOBNO: jbno, JVACCOUNT: this.AccountName.split("|")[0] };
            this._dataService.getData("Accounts/ACC_JV_JOBNO_VALIDATE", jsonvalidate)
                .subscribe(function (data) {
                if (data.Table[0].STATUS.split("#")[0] == "100") {
                }
                else if (data.Table[0].STATUS.split("#")[0] == "103") {
                    if (confirm(data.Table[0].STATUSTEXT + 'Are you sure you want to add this JOBNO ?')) {
                        return true;
                    }
                    else {
                        _this.JobNo = "";
                        return false;
                    }
                }
                _this.loaderService.display(false);
            });
        }
        else {
            return false;
        }
    };
    JournalVoucherComponent.prototype.TextareaValueChange = function (ev) {
        this.Narration = ev.target.value;
    };
    JournalVoucherComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    JournalVoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./journalvoucher_IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/JV/journalvoucher_IU.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], JournalVoucherComponent);
    return JournalVoucherComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/JV/journalvoucher_search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/JV/journalvoucher_search.component.ts ***!
  \*************************************************************************/
/*! exports provided: JournalVoucherSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherSearchComponent", function() { return JournalVoucherSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
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







var JournalVoucherSearchComponent = /** @class */ (function () {
    function JournalVoucherSearchComponent(_dataService, _loginService, _toasterService, _router, _activatedRoute, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._loaderService = _loaderService;
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
            selectorHeight: '198px',
            selectorWidth: '200px'
        };
        this.searchList = [];
        this.displayType = 'SEARCH';
        this.searchHeaderText = 'List of Vouchers';
        this.Display = "0";
        this.Type = 'CODE';
        this.VoucherNo = '';
        this.FromDate = null;
        this.ToDate = null;
        this.VoucherDay = null;
        this.JobNo = '';
        this.Amount = '';
        this.InvoiceNo = '';
        this.Day = null;
        this.AccountList = [];
        this.Account = null;
        this.STATUS = "";
    }
    JournalVoucherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.STATUS = params["Status"];
        });
        var _jsonData = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_JV_PAGELOAD", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.AccountList = data.Table;
        });
        if (this.STATUS == "JVREQ") {
            this._loginService.verifyRights(192, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
        else if (this.STATUS == "JV") {
            this._loginService.verifyRights(9, '')
                .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        }
    };
    JournalVoucherSearchComponent.prototype.fnValidate_Code = function () {
        if (this.VoucherNo.trim().length === 0) {
            alert("Please Enter Voucher No.");
            return false;
        }
        else if (this.VoucherNo.trim().length != 15) {
            alert("Invalid Voucher No.");
            this.VoucherNo = "";
            return false;
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.fnValidate_JobNo = function () {
        if (this.JobNo.trim().length === 0) {
            alert("Please Enter Job No.");
            return false;
        }
        else if (this.JobNo.trim().length != 15) {
            alert("Invalid Job No.");
            this.JobNo = "";
            return false;
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.fnValidate_InvoiceNo = function () {
        if (this.InvoiceNo.trim().length === 0) {
            alert("Please Enter Invoice No.");
            return false;
        }
        else if (this.InvoiceNo.trim().length != 15) {
            alert("Invalid Invoice No.");
            this.InvoiceNo = "";
            return false;
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.fnValidate_Client = function () {
        if (!this.Account) {
            alert("Please select Client.");
            return false;
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.fnValidate_Amount = function () {
        if (this.Amount.trim().length === 0) {
            alert("Please Enter Amount.");
            return false;
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.fnValidate_Date = function () {
        if (!this.FromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.ToDate) {
            alert("Please select To Date.");
            return false;
        }
        else if (this.FromDate != "" && this.ToDate != "") {
            var intdtfrm = void 0, intdtTo = void 0;
            intdtfrm = this._dataService.datechnge(this.FromDate.formatted);
            intdtTo = this._dataService.datechnge(this.ToDate.formatted);
            if (this._dataService.date2Comparison(intdtfrm, intdtTo) == false) {
                this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                return false;
            }
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.fnValidate_Day = function () {
        if (!this.VoucherDay) {
            alert("Please select Date");
            return false;
        }
        return true;
    };
    JournalVoucherSearchComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    JournalVoucherSearchComponent.prototype.search = function () {
        // this._loginService.verifyRights(9, '')
        // .subscribe((data: any) => { 
        //     this._loginService.checkVerify('View', data); 
        // });
        var SearchType = "";
        var Typevalue = "";
        if (this.Type == 'CODE') {
            if (this.fnValidate_Code()) {
                SearchType = "CODE";
                Typevalue = this.VoucherNo;
                this.getData(SearchType, Typevalue);
            }
            ;
        }
        else if (this.Type == 'JOBNO') {
            if (this.fnValidate_JobNo()) {
                SearchType = "JOBNO";
                Typevalue = this.JobNo;
                this.getData(SearchType, Typevalue);
            }
        }
        else if (this.Type == 'INVOICENO') {
            if (this.fnValidate_InvoiceNo()) {
                SearchType = "INVNO";
                Typevalue = this.InvoiceNo;
                this.getData(SearchType, Typevalue);
            }
        }
        else if (this.Type == 'CLIENT') {
            if (this.fnValidate_Client()) {
                SearchType = "CLIENT";
                Typevalue = this.Account.split("|")[0];
                this.getData(SearchType, Typevalue);
            }
        }
        else if (this.Type == 'AMOUNT') {
            if (this.fnValidate_Amount()) {
                SearchType = "AMOUNT";
                Typevalue = this.Amount;
                this.getData(SearchType, Typevalue);
            }
        }
        else if (this.Type == 'DATE') {
            if (this.fnValidate_Date()) {
                SearchType = "DATE";
                Typevalue = "";
                this.getData(SearchType, Typevalue);
            }
        }
        else if (this.Type == 'PRINTAV') {
            if (this.fnValidate_Day()) {
                SearchType = "DAY";
                Typevalue = this.VoucherDay;
                "";
            }
        }
    };
    JournalVoucherSearchComponent.prototype.getData = function (searchtype, Typevalue) {
        var _this = this;
        var _jsonData = {
            CODE: searchtype,
            FROMDATE: (this.FromDate) ? (this.FromDate.formatted) : "",
            TODATE: (this.ToDate) ? (this.ToDate.formatted) : "",
            TYPEVALUE: Typevalue,
            TYPE: this.STATUS,
            Details_flag: "FALSE",
            DISPLAYTYPE: this.Display,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CMP_CODE: this._loginService.getLogin()[0].CMPCODE,
            YEAR_ID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
            FIN_STARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FIN_ENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            USERID: this._loginService.getLogin()[0].CMPID
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_JV_SEARCH", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            // console.log(data);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
                return false;
            }
            else if (data.Table.length == 1) {
                if (_this.STATUS == 'JVREQ') {
                    _this._router.navigate(["/accounts/Voucher/JV/Add/JVREQ/", data.Table[0].JVCODE]);
                }
                else {
                    _this._router.navigate(["/accounts/Voucher/JV/Add/JV/", data.Table[0].JVCODE]);
                }
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    JournalVoucherSearchComponent.prototype.redirectToEdit = function (EntryNo) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        var c = confirm("Click OK to Print and cancel to Edit?");
        if (c == true) {
            if (this.STATUS == 'JV') {
                window.open('./#/popup/Account-JV-Print/' + EntryNo + '/' + "JV" + '/', "Journal Voucher Print", toolbar);
            }
            else if (this.STATUS == 'JVREQ') {
                window.open('./#/popup/Account-JV-Print/' + EntryNo + '/' + "JVREQ" + '/', "Journal Voucher Request Print", toolbar);
            }
        }
        else {
            if (this.STATUS == "JVREQ") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JVREQ/' + EntryNo]);
            }
            else if (this.STATUS == "JV") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + EntryNo]);
            }
        }
    };
    JournalVoucherSearchComponent.prototype.ResetAll = function () {
        this.VoucherNo = "",
            this.JobNo = "",
            this.Amount = "",
            this.Account = "",
            this.FromDate = "",
            this.ToDate = "",
            this.VoucherDay = "",
            this.Day = "",
            this.InvoiceNo = "";
    };
    JournalVoucherSearchComponent.prototype.Print = function () {
        if (this.VoucherNo == '' || this.VoucherNo == undefined || this.VoucherNo.length < 15) {
            alert("Enter 15 digit No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (this.STATUS == 'JV') {
            window.open('./#/popup/Account-JV-Print/' + this.VoucherNo + '/' + "JV" + '/', "Journal Voucher Print", toolbar);
        }
        else if (this.STATUS == 'JVREQ') {
            window.open('./#/popup/Account-JV-Print/' + this.VoucherNo + '/' + "JVREQ" + '/', "Journal Voucher Request Print", toolbar);
        }
    };
    JournalVoucherSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    JournalVoucherSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts-vouchers-jv-journalvoucher-search',
            template: __webpack_require__(/*! raw-loader!./journalvoucher_search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/JV/journalvoucher_search.component.html"),
            // styleUrls: ['../../../../node_modules/@ng-select/ng-select/themes/default.theme.css'], 
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], JournalVoucherSearchComponent);
    return JournalVoucherSearchComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/JV/jv-auth.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/accounts/Vouchers/JV/jv-auth.component.ts ***!
  \***********************************************************/
/*! exports provided: journalvoucherAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "journalvoucherAuth", function() { return journalvoucherAuth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
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








var journalvoucherAuth = /** @class */ (function () {
    function journalvoucherAuth(_router, _dataService, _auth, _toasterService, _loginService, modalService, loaderService, ///,
    _activatedRoute
    // private orderPipe: OrderPipe, private filterPipe: FilterPipe
    ) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this._activatedRoute = _activatedRoute;
        this.authstatus = "";
        this.authstat = "";
        this.Unauthlist = [];
        this.dataTable = [];
        this.STATUS = "";
        this.FLAG = "EDIT";
        this.hidebtnrow = "U";
        this.newArray = [];
        this.order = 'REQCODE';
        this.reverse = false;
    }
    journalvoucherAuth.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.STATUS = params["Status"];
        });
        this.loaderService.display(true);
        this.getdataforauth();
    };
    journalvoucherAuth.prototype.getdataforauth = function () {
        var _this = this;
        this.FLAG = "EDIT";
        this.authstatus = "U";
        this.hidebtnrow = "U";
        // this.authstat="U"
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            STATUS: this.STATUS,
            AUTHORISATIONSTATUS: this.authstatus
        };
        this._dataService.getData("Accounts/ACC_CPJVPI_REQUEST_AUTHORISATION_PAGELOAD", jsonmaster)
            .subscribe(function (data) {
            _this.Unauthlist = data.Table;
            _this.dataTable = data.Table;
            _this.loaderService.display(false);
        });
    };
    journalvoucherAuth.prototype.rejectdata = function () {
        var _this = this;
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One JV Request No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var answer = confirm("Are you sure you want to reject the JV Request no. " + output1 + " ?"); //, "Modified title")
        if (answer == false) {
            return false;
        }
        else {
            var adddata = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                STATUS: this.STATUS,
                JVREQNO: output1,
                AUTHORISATIONDT: "",
                CMPID: this._loginService.getLogin()[0].CMPID,
                AUTHORISATIONSTATUS: "U"
            };
            this._dataService.getData("Accounts/Acc_CPJVPI_REQUEST_Authorisation_REJECT", adddata)
                .subscribe(function (data) {
                if (data.Table2[0].STATUSMSG != "") {
                    _this.Unauthlist = data.Table;
                    _this.newArray = [];
                    _this._toasterService.toast('success', 'success', data.Table2[0].STATUSMSG);
                }
            });
        }
    };
    journalvoucherAuth.prototype.Passdatatomanagement = function () {
        var _this = this;
        this.authstatus = "M";
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One JV Request No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var answer = confirm("Are you sure you want to refer this JV request  no. " + output1 + " to Management ?");
        if (answer == false) {
            return false;
        }
        else {
            var adddata = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                STATUS: this.STATUS,
                JVREQNO: output1,
                AUTHORISATIONDT: "",
                CMPID: this._loginService.getLogin()[0].CMPID,
                AUTHORISATIONSTATUS: "U"
            };
            this._dataService.getData("Accounts/Acc_CPJVPI_REQUEST_Management_UPDATE", adddata)
                .subscribe(function (data) {
                if (data.Table2[0].STATUSMSG != "") {
                    _this.Unauthlist = data.Table;
                    _this.newArray = [];
                    _this._toasterService.toast('success', 'success', data.Table2[0].STATUSMSG);
                }
            });
        }
    };
    journalvoucherAuth.prototype.VerifiedDataList = function (authstatusedit) {
        var _this = this;
        // this.srpidata= [];
        this.authstat = authstatusedit;
        if (authstatusedit == "M") {
            this.FLAG = "EDIT";
            this.authstatus = "M";
        }
        else {
            this.FLAG = "VIEW";
            this.authstatus = "U";
        }
        this.hidebtnrow = authstatusedit;
        var adddata = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            STATUS: this.STATUS,
            AUTHORISATIONSTATUS: authstatusedit
        };
        this._dataService.getData("Accounts/ACC_CPJVPI_REQUEST_AUTHORISATION", adddata)
            .subscribe(function (data) {
            _this.Unauthlist = data.Table;
            ///this.rowcount=data.Table.rows.length;
        });
    };
    journalvoucherAuth.prototype.ViewJVData = function (JVNo) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-JV-View/' + JVNo + '/', "Journal Voucher View", toolbar);
    };
    journalvoucherAuth.prototype.Verify = function () {
        var _this = this;
        this.authstatus = "U";
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One JV Request No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var answer = confirm("Are you sure you want to verify this JV request  no. " + output1);
        if (answer == false) {
            return false;
        }
        else {
            var adddata = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                STATUS: this.STATUS,
                JVREQNO: output1,
                AUTHORISATIONDT: "",
                CMPID: this._loginService.getLogin()[0].CMPID,
                AUTHORISATIONSTATUS: "U"
            };
            this._dataService.getData("Accounts/Acc_CPJVPI_REQUEST_AUTHORISATION_UPDATEMULTI", adddata)
                .subscribe(function (data) {
                if (data.Table2[0].STATUS.split("#")[0] == "100") {
                    _this._toasterService.toast('info', 'Complete', data.Table2[0].STATUS.split("#")[1]);
                    _this.getdataforauth();
                    _this.newArray = [];
                    output1 = "";
                }
                else if (data.Table2[0].STATUS.split("#")[0] == "105") {
                    _this._toasterService.toast('warning', 'warning', data.Table2[0].STATUS.split("#")[1]);
                }
                _this.loaderService.display(false);
            });
        }
    };
    journalvoucherAuth.prototype.checkAll = function (ev) {
        this.newArray = [];
        this.Unauthlist.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.Unauthlist.length; i++) {
                var obj = {
                    inoiceno: this.Unauthlist[i].REQCODE
                };
                this.newArray.push(obj);
            }
        }
        else {
            this.newArray = [];
        }
    };
    journalvoucherAuth.prototype.getCheckboxValues = function (event, data) {
        var index = this.newArray.findIndex(function (x) { return x.REQCODE == data; });
        if (event) {
            var obj = {
                inoiceno: data
            };
            this.newArray.push(obj);
        }
        else {
            this.newArray.splice(index, 1);
        }
    };
    journalvoucherAuth.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    journalvoucherAuth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./jv-auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/JV/jv-auth.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
            // private orderPipe: OrderPipe, private filterPipe: FilterPipe
        ])
    ], journalvoucherAuth);
    return journalvoucherAuth;
}());



/***/ })

}]);
//# sourceMappingURL=JV-journalvoucher-module.js.map