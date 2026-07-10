(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/invoice/general-invoice-search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/transaction/invoice/general-invoice-search.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"container\">\n        <div class=\"row\" *ngIf=\"Searchdata_list.length==0\">\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-6\">\n                <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\">\n                    <tbody style='height:30px'>\n                        <tr>\n                            <td class=\"col-form-span-heading\" colspan=\"5\">\n                                INVOICE SEARCH\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <input type=\"radio\" name=\"exampleRadios\" value='INVOICENO'  [(ngModel)]=\"exampleRadios1\">&nbsp;  Invoice No\n                            </td>\n                            <td class=\"col-form-span-label width240\" colspan=\"4\">\n                                <div style=\"display:flex;\">\n                                    <input type=\"text\" class=\"form-control width180\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [(ngModel)]=\"invoiceno\" [disabled]=\"exampleRadios1 != 'INVOICENO'\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"  (click)=\"InvoicePrint(invoiceno)\"><span class=\"col-form-span-label\"><i   class=\"fa fa-print\"></i>Print</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span  class=\"col-form-span-label\" (click)=\"InvoiceView(invoiceno);\"><i  class=\"fa fa-search\"></i>View</span></button>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\">\n                                <table>\n                                    <tr>\n                                        <td class=\"col-form-span-label width100\">\n                                            <input type=\"radio\" name=\"exampleRadios\" value='CLIENT'  [(ngModel)]=\"exampleRadios1\"> Client Name\n                                        </td>\n                                        <td class=\"col-form-span-label width500\" colspan=\"4\">\n                                            <ng-select [items]=\"clientable\"\n                                                      bindLabel=\"EXP_NAME_CITY\"\n                                                      bindValue=\"EXP_CODE\"\n                                                      [(ngModel)]=\"client\" class=\"custom\"\n                                                      placeholder=\"--Please Select Client --\" \n                                                     [disabled]=\"exampleRadios1 != 'CLIENT'\">\n                                             </ng-select>\n\n                                    \n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td>\n                                            <span class=\"col-form-span-label width150\"><b>Start Date</b> </span>\n                                            <span class=\"col-form-span-error\">*</span>\n                                        </td>\n                                        <td>\n                                            <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\"  [(ngModel)]=\"client_startdate\" [disabled]=\"exampleRadios1 != 'CLIENT'\">\n                                            </my-date-picker>\n                                        </td>\n                                        <td>\n                                            <span class=\"col-form-span-label width150\"><b>End Date</b> </span>\n                                            <span class=\"col-form-span-error\">*</span>\n                                        </td>\n                                        <td>\n                                            <my-date-picker name=\"EndDate\" [options]=\"myDatePickerOptions\"  [(ngModel)]=\"client_enddate\" [disabled]=\"exampleRadios1 != 'CLIENT'\">\n                                            </my-date-picker>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" value='JOBNO' [(ngModel)]=\"exampleRadios1\">&nbsp;   Job No\n                            </td>\n                            <td class=\"col-form-span-label width240\" colspan=\"4\">\n                                <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"jobno\"  [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"exampleRadios1 != 'JOBNO'\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" value='AMOUNT'  [(ngModel)]=\"exampleRadios1\">&nbsp;  Amount\n                            </td>\n                            <td class=\"col-form-span-label width240\" colspan=\"4\">\n                                <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"amount\"  [disabled]=\"exampleRadios1 != 'AMOUNT'\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\">\n                             <input type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"DATE\"  [(ngModel)]=\"exampleRadios1\"> Date Wise\n                            </td>\n                            <td>\n                                <span class=\"col-form-span-label width150\"><b>Start Date</b> </span>\n                                <span class=\"col-form-span-error\">*</span>\n                            </td>\n                            <td>\n                                <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\"   [(ngModel)]=\"datewise_startdate\" [disabled]=\"exampleRadios1 != 'DATE'\">\n                                </my-date-picker>\n                            </td>\n                            <td>\n                                <span class=\"col-form-span-label width150\"><b>End Date</b> </span>\n                                <span class=\"col-form-span-error\">*</span>\n                            </td>\n                            <td>\n                                <my-date-picker name=\"EndDate\" [options]=\"myDatePickerOptions\"   [(ngModel)]=\"datewise_enddate\" [disabled]=\"exampleRadios1 != 'DATE'\">\n                                </my-date-picker>\n                            </td>\n\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\" colspan=\"2\">\n                                <input type=\"radio\" name=\"exampleRadios\" value=\"6\" [(ngModel)]=\"exampleRadios1\"> Print  All Invoice of That Day\n                            </td>\n                            <td colspan=\"3\">\n                                <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\"\n                                    [(ngModel)]=\"printall_date\" [disabled]=\"exampleRadios1 != '6'\">\n                                </my-date-picker>\n                            </td>\n\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\" class=\"centerlabel\">\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"searchlist()\"><span\n                                        class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\n                                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                        (click)=\"reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"col-sm-3\"></div>\n        </div>\n         <div *ngIf=\"Searchdata_list.length >1\" >  \n            <!-- <button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button> -->\n            <button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"Searchdata_list=[]\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button>\n       </div>\n      \n       \n                <main *ngIf=\"Searchdata_list.length >1\"> \n                <div id=\"content\"> \n                <div class=\"table-wrapper\">\n                <table class=\"table table-bordered table-sm-new bgwhite\"> \n                    <thead class=\"title-head formheading\" >\n                        <tr > \n                            <th *ngIf=\"exampleRadios1=='6'\" class=\"centerlabel\"><input type=\"checkbox\" [(ngModel)]='checkbox'  (change)=\"checkAll($event)\" /> &nbsp; </th>\n                            <th align=\"center\">INV NO</th>\n                            <th align=\"center\"  [class.active]=\"order === 'INV_DATE'\" (click)=\"setOrder('INV_DATE')\">INV DATE  <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\n                            <th align=\"center\" [class.active]=\"order === 'EXP_NAME'\" (click)=\"setOrder('EXP_NAME')\" >CLIENT  <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\n                            <th align=\"center\"  [class.active]=\"order === 'INV_BILLTYPE'\" (click)=\"setOrder('INV_BILLTYPE')\">BILLTYPE  <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\n                           \n                            <th  *ngIf=\"exampleRadios1!='6'\"  [class.active]=\"order === 'INVOICED_ON'\" (click)=\"setOrder('INVOICED_ON')\"  align=\"center\">INVOICED ON <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\n                            <th  *ngIf=\"exampleRadios1!='6'\"  align=\"center\">AUTHORISED ON</th>\n                            <th  *ngIf=\"exampleRadios1!='6'\"  [class.active]=\"order === 'AUTHORISEDBY'\" (click)=\"setOrder('AUTHORISEDBY')\"  align=\"center\">AUTHORISED BY  <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\n                            <th  *ngIf=\"exampleRadios1=='6'\"  [class.active]=\"order === 'TOTALAMT'\" (click)=\"setOrder('TOTALAMT')\"  align=\"center\">TOTAL AMT  <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"Searchdata_list.length > 1\">                       \n                        <tr *ngFor=\"let data of Searchdata_list | orderBy: order:reverse:'case-insensitive'\">\n                            <td *ngIf=\"exampleRadios1=='6'\" class=\"centerlabel\"> <input type=\"checkbox\" [(ngModel)]=\"data.Checked\" (ngModelChange)=\"getCheckboxValues($event,data.INV_NO)\"> &nbsp; </td>\n                            <td><span class=\"col-form-span-label anchor-link\"  (click)=\"ListOnclick(data.INV_NO)\">{{data.INV_NO}}</span>  </td>\n                            <td><span class=\"col-form-span-label\">{{data.INV_DATE}}</span></td>\n                            <td><span class=\"col-form-span-label\">{{data.EXP_NAME}}</span></td>\n                            <td><span class=\"col-form-span-label\">{{data.INV_BILLTYPE}}</span></td>                           \n                            <td *ngIf=\"exampleRadios1!='6'\" ><span class=\"col-form-span-label\">{{data.INVOICED_ON}}</span></td>\n                            <td *ngIf=\"exampleRadios1!='6'\"><span class=\"col-form-span-label\">{{data.AUTHORISEDON}}</span></td>\n                            <td *ngIf=\"exampleRadios1!='6'\"><span class=\"col-form-span-label\">{{data.AUTHORISEDBY}}</span></td>\n                            <td *ngIf=\"exampleRadios1=='6'\"><span class=\"col-form-span-label\">{{data.TOTALAMT}}</span></td>\n                        </tr>\n                    </tbody>\n                    <tr>\n                        <td *ngIf=\"exampleRadios1=='6'\" colspan=\"10\" class=\"right-text pr-2\">\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"PrintInvoice()\"> <span  class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>&nbsp;Print</span></button>\n                        </td>\n                    </tr>\n                </table>\n                </div>                    \n            </div>\n        </main>     \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/invoice/general-invoice.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/transaction/invoice/general-invoice.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Invoice No.</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input type=\"text\" class=\"form-control width180\" [disabled]=true [(ngModel)]=\"invno\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Invoice dt.</b> </span></td>\r\n                    <td  style=\"text-align: left;\">\r\n                        <my-date-picker name=\"invdate\" [options]=\"myDatePickerOptionsInv\"\r\n                            (dateChanged)=\"InvoiceDateChanged($event)\" [selDate]=\"invdate\">\r\n                        </my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label \"><b>Mode</b></span> </td>\r\n                    <td > \r\n                        <select class=\"form-control width180\" [(ngModel)]=\"mode\" [disabled]=\"modecondition\">\r\n                            <option value=\"\">--Please select--</option>\r\n                            <option *ngFor=\"let d of table5_mode\" value={{d.DTATVALUE}}>{{d.DTATTEXT}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td> <span class=\"col-form-span-label \"><b>Pay By Date :</b></span> </td>\r\n                    <td  style=\"text-align: left;\">\r\n                        <my-date-picker name=\"paybydate\" (dateChanged)=\"PayByDateDateChanged($event)\" [options]=\"myDatePickerOptions\" [selDate]=\"paybydate\"\r\n                            [disabled]=\"mode=='1'||mode=='2'||mode=='5'||mode=='6'\"></my-date-picker>\r\n                    </td>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n            <div class=\"tab\" role=\"tabpanel\">\r\n                <div class=\"bor\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\"> \r\n                            <a  class=\"nav-link active\" id=\"zero-tab\" data-toggle=\"tab\" href=\"#zero\">JobDetail</a>  \r\n                            <!-- <a   [ngClass]=\"{'activetab active' : value == 1 , 'nav-link' :value == 2 }\" id=\"zero-tab\" data-toggle=\"tab\" href=\"#zero\">JobDetail</a>  -->\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link \" id=\"one-tab\" data-toggle=\"tab\" href=\"#one\"  >General</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"two-tab\" data-toggle=\"tab\" href=\"#two\"  >Charges</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"three-tab\" data-toggle=\"tab\" href=\"#three\" >Enclosure</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"four-tab\" data-toggle=\"tab\" href=\"#four\"  >Despatch</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"tab-content\" style=\"height:400px;overflow-y:auto\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane active\"  id=\"zero\"> \r\n                        <!-- <div role=\"tabpanel\" [ngClass]=\"{'tab-pane active' : value == 1 , 'tab-pane' :value == 2 }\"  id=\"zero\"> -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\"><b>Job No.</b> </span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" maxlength=\"15\"\r\n                                                minlength=\"15\" [(ngModel)]=\"jobno\" [disabled]=\"jobno_disable\" [OnlyNumber]=\"true\">\r\n                                        </td>\r\n                                        <td colspan=\"2\"></td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"show_pkg_piece\">\r\n                                        <td><span class=\"col-form-span-label\"><b>Packages</b> </span><span\r\n                                                class=\"col-form-span-error\">*</span></td>\r\n                                        <td> <input type=\"text\" class=\"form-control width180\"  [OnlyNumber]=\"true\" [(ngModel)]=\"packages\">\r\n                                        </td>\r\n                                        <td><span class=\"col-form-span-label\"><b>Prop.Wt.</b> </span></td>\r\n                                        <div style=\"display: flex;\">\r\n                                            <input type=\"text\" class=\"form-control width180\" [OnlyNumber]=\"true\" [(ngModel)]=\"propweight\">\r\n                                        </div>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <div style=\"margin: 0 auto;margin-top:3px;\">\r\n                                                <span *ngIf=\"addjob\">\r\n                                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"\r\n                                                        (click)=\"listjobpopup()\"> <span class=\"col-form-span-label\"><i\r\n                                                                class=\"fa fa-plus\"></i> Add</span></button>\r\n                                                </span>\r\n                                                <span *ngIf=\"jobupdate\">\r\n                                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"\r\n                                                        (click)=\"updatejob()\"> <span class=\"col-form-span-label\"><i\r\n                                                                class=\"fa fa-plus\"></i>\r\n                                                            Update</span></button>\r\n                                                </span>\r\n                                                <button class=\"btn btn-sm btn-danger\" type=\"submit\"\r\n                                                    (click)=\"resetjob()\"> <span class=\"col-form-span-label\"><i\r\n                                                            class=\"fa fa-plus\"></i> Reset</span></button>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr class=\"col-form-span-heading\">\r\n                                                                <th class=\"width20 centerlabel\"></th>\r\n\r\n                                                                <th class=\"width100 centerlabel\"><span  class=\"col-form-span-label\">Job No</span>\r\n                                                                </th>\r\n                                                                <th class=\"width100 centerlabel\"><span  class=\"col-form-span-label\">Packages</span></th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Prop.Wt</span></th>\r\n                                                                <th class=\"width100 centerlabel\"><span  class=\"col-form-span-label\">INV Number</span> </th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">BR/JV NO</span></th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">BR/JV CLIENT</span>  </th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">ADV. AMOUNT</span>\r\n                                                                </th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr *ngFor=\"let obj of jobdatalist\">\r\n                                                                <td align=\"center\">\r\n                                                                    <i class=\"fa fa-pencil\" (click)=\"Editjob(obj)\"></i>                                                                  \r\n                                                                    <i class=\"fa fa-trash\" (click)=\"deletejob(obj)\"></i>\r\n                                                                </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{obj.INV_JOBNO}}</span>  </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{obj.INV_PKGS}}</span>  </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{obj.INV_GRWT}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label  anchor-link\" [innerHtml]=\"obj.INV_STR\" (click)=\"viewjob($event)\"   > </span> </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{obj.BRJV_NO}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{obj.BRJV_CLIENT}}</span> </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{obj.ADV_AMOUNT}}</span> </td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div role=\"tabpanel\" class=\"tab-pane \" id=\"one\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Client</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table_client\" bindLabel=\"EXP_NAME_CITY\"\r\n                                                bindValue=\"EXP_CODE\" (ngModelChange)=\"fillAddress($event)\"\r\n                                                [(ngModel)]=\"client\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Bill To Address</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"updated_billaddress\" bindLabel=\"DATATEXTFIELD\"\r\n                                                bindValue=\"DATAVALUEFIELD\" [(ngModel)]=\"billaddress\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Document Through</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table2_document\" bindLabel=\"EXP_NAME_CITY\"\r\n                                                bindValue=\"EXP_CODE\" [(ngModel)]=\"document\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Bill Type</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"billtype\">\r\n                                                <option value=\"\">--Please select--</option>\r\n                                                <option *ngFor=\"let d of table4_billtype\" value={{d.DTATVALUE}}>\r\n                                                    {{d.DTATTEXT}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Advance Received</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\" [OnlyNumber]=\"true\" [(ngModel)]=\"Adv_rec\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Invoice Currency</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"currency\" [disabled]=\"disablegeninvcur\"\r\n                                                (ngModelChange)=\"GetCurrencyName($event)\">\r\n                                                <option value=\"\">Please select</option>\r\n                                                <option *ngFor=\"let d of table3_curreny\" value={{d.cur_code}}>\r\n                                                    {{d.curname}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>INR Rupees</b><span\r\n                                                class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td> <input class=\"form-control width120\" maxlength=\"20\" [OnlyNumber]=\"true\"\r\n                                            (input)=\"onInput($event)\"  (blur)=\"onBlur($event)\"   [(ngModel)]=\"inv_currate\" [disabled]=\"disablegencurrate\">\r\n                                        </td>\r\n                                        <td align=\"center\">\r\n                                            <span class=\"col-form-span-label\"><b>={{currencyname}}</b><span\r\n                                                class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width120\" [OnlyNumber]=\"true\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"inv_currate1\" [disabled]=\"disablegencurrate1\">\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Pkgs</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div style=\"display: flex; \">\r\n\r\n                                                <input type=\"text\" class=\"form-control width80 \" [(ngModel)]=\"no_pkgs\" [OnlyNumber]=\"true\">\r\n                                                <select class=\"form-control width120\" [(ngModel)]=\"pkgs\">\r\n                                                    <option value=\"\">--Please select--</option>\r\n                                                    <option *ngFor=\"let d of table6_pkgs\" value={{d.UNIT_CODE}}>\r\n                                                        {{d.UNIT_NAME}}</option>\r\n                                                </select>\r\n\r\n                                            </div>\r\n                                        </td>\r\n\r\n\r\n                                        <td> <span class=\"col-form-span-label \"><b>Volume</b></span></td>\r\n                                        <td> <input class=\"form-control width180\" maxlength=\"20\" [OnlyNumber]=\"true\" [(ngModel)]=\"volume\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Pieces</b></span>\r\n                                        </td>\r\n                                        <td>\r\n\r\n                                            <div style=\"display: flex;\">\r\n                                                <input type=\"text\" class=\"form-control  width80\" [OnlyNumber]=\"true\"\r\n                                                    [(ngModel)]=\"no_pieces\">\r\n                                                <select class=\"form-control width120\" [(ngModel)]=\"pieces\">\r\n                                                    <option value=\"\">--Please select--</option>\r\n                                                    <option *ngFor=\"let d of table7_pieces\" value={{d.UNIT_CODE}}>\r\n                                                        {{d.UNIT_NAME}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Weight in Kilo</b></span></td>\r\n                                        <td> <input class=\"form-control width180\" maxlength=\"20\" [OnlyNumber]=\"true\" [(ngModel)]=\"weight\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Client Reference</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"client_ref\">\r\n                                        </td>\r\n                                        <td colspan=\"2\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Carrier</b></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <input class=\"form-control width500\" maxlength=\"100\" [(ngModel)]=\"carrier\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Goods :</b></span> </td>\r\n                                        <td colspan=\"3\"> <input class=\"form-control width500\" maxlength=\"250\"\r\n                                                [(ngModel)]=\"goods\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>MASTER (A.W.B./B/L) :</b></span>\r\n                                        </td>\r\n                                        <td> <input class=\"form-control width180\" maxlength=\"20\" [(ngModel)]=\"master\">\r\n                                        </td>\r\n                                        <td> <span class=\"col-form-span-label \"><b>MASTER (A.W.B./B/L) Date :</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <my-date-picker name=\"masterdate\" [options]=\"myDatePickerOptions\"\r\n                                                (dateChanged)=\"MasterDateChanged($event)\" [selDate]=\"masterdate\">\r\n                                            </my-date-picker>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"mode==='5'|| mode==='6'; else elseBlock\">\r\n                                        <td> <span class=\"col-form-span-label \"><b>BE No:</b></span>\r\n                                        </td>\r\n                                        <td> <input class=\"form-control width180\" maxlength=\"20\" [(ngModel)]=\"ship_billno\">\r\n                                        </td>\r\n                                        <td> <span class=\"col-form-span-label \"><b>BE Date :</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <my-date-picker name=\"shipbilldate\" [options]=\"myDatePickerOptions\"\r\n                                            (dateChanged)=\"shipbilldateChanged($event)\" [selDate]=\"shipbilldate\">\r\n                                        </my-date-picker>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <ng-template #elseBlock>\r\n                                        <tr>\r\n                                            <td> <span class=\"col-form-span-label \"><b>Ship BillNo:</b></span>\r\n                                            </td>\r\n                                            <td> <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                    [(ngModel)]=\"ship_billno\">\r\n                                            </td>\r\n                                            <td> <span class=\"col-form-span-label \"><b>Ship BillNo Date :</b></span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <my-date-picker name=\"shipbilldate\" [options]=\"myDatePickerOptions\"\r\n                                                    (dateChanged)=\"shipbilldateChanged($event)\"\r\n                                                    [selDate]=\"shipbilldate\">\r\n                                                </my-date-picker>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </ng-template>\r\n\r\n                                    <!-- <tr>\r\n                                <td> <span class=\"col-form-span-label \"><b>Pay By Date :</b></span> </td>\r\n                                <td>\r\n                                    <my-date-picker name=\"paybydate\" [options]=\"myDatePickerOptions\" [selDate]=\"paybydate\" [disabled]=\"mode=='1'||mode=='2'||mode=='5'||mode=='6'\"></my-date-picker>\r\n                                </td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr> -->\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Client Cont. Executive :</b></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <input class=\"form-control width200\" [(ngModel)]=\"client_excutive\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Narration</b></span> </td>\r\n                                        <td colspan=\"3\">\r\n                                            <!-- (input)=\"Narrationarea()\" -->\r\n                                            <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\r\n                                            placeholder=\"text\" cols=\"50\" rows=\"5\" [innerHTML]=\"narration\"></textarea>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"two\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Charges Code </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table8_charge\" bindLabel=\"CHARGE_DESC\"\r\n                                                (ngModelChange)=\"GetChargeDesc($event)\" bindValue=\"CHARGE_CODE\"\r\n                                                [(ngModel)]=\"charge\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Account Name\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table9_account\" [disabled]='disableaccount' bindLabel=\"ACCTNAME\"\r\n                                                bindValue=\"ACCTCODE\" [(ngModel)]=\"account\"  (ngModelChange)=\"GetAcctname($event)\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Description </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control \" [(ngModel)]=\"desc1\">\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Description1\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control \" [(ngModel)]=\"desc2\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <table class=\"table table-bordered table-sm-new\">\r\n                                                <tr>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Tax </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Qty </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Rate/Qty </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amt In Cur </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Cur Type </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Ex. Rate </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amt(INR) </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amt Taxable(INR)</td>\r\n                                                   \r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <select class=\"form-control width80\" [(ngModel)]=\"tax\" [disabled]=\"disabletax\">\r\n                                                            <option value=\"\">Please select</option>\r\n                                                            <option value=\"N\">N</option>\r\n                                                            <option value=\"G\">G</option>\r\n                                                        </select> \r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width60\" [(ngModel)]=\"qty\" [OnlyNumber]=\"true\">\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width60\" [(ngModel)]=\"rateperqty\" [OnlyNumber]=\"true\">\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width60\" value={{Curamount}} \r\n                                                            [disabled]=true>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <select class=\"form-control width80\" [(ngModel)]=\"currencytype\"  (ngModelChange)=\"getexchangerate($event)\">\r\n                                                            <option value=\"\">Please select</option>\r\n                                                            <option *ngFor=\"let d of table13_currencytype\" value={{d.DATAVALUE}}>\r\n                                                                {{d.DATATEXTVALUE}}</option>\r\n            \r\n                                                        </select>\r\n                                                    </td>\r\n                                                    <td style=\" display: flex;\">\r\n                                                        <input type=\"text\" class=\"form-control width80\" [(ngModel)]=\"excrate\" (ngModelChange)=\"Calcamount()\" [disabled]='disableexrate' [OnlyNumber]=\"true\"  >\r\n                                                        <span class=\"col-form-span-label\" style=\"font-weight: bold;\"> = INR</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width100\" value={{amount}} \r\n                                                            [disabled]=true>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span *ngIf=\"tax==='G'; else elseBlock1\">\r\n                                                            <input type=\"text\" class=\"form-control width120\"\r\n                                                                [(ngModel)]=\"taxamount_G\" [disabled]=true>\r\n                                                        </span>\r\n                                                        <ng-template #elseBlock1>\r\n                                                            <input type=\"text\" class=\"form-control width120\"\r\n                                                                [(ngModel)]=\"taxamount_N\" [disabled]=true>\r\n                                                        </ng-template>\r\n                                                    </td>\r\n                                                  \r\n                                                </tr>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Charges Code </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table8_charge\" bindLabel=\"CHARGE_DESC\"\r\n                                                (ngModelChange)=\"GetChargeDesc($event)\" bindValue=\"CHARGE_CODE\"\r\n                                                [(ngModel)]=\"charge\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Account Name\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table9_account\" bindLabel=\"ACCTNAME\"\r\n                                                bindValue=\"ACCTCODE\" [(ngModel)]=\"account\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Description </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control \" [(ngModel)]=\"desc1\">\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Description1\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control \" [(ngModel)]=\"desc2\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Tax </td>\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"tax\">\r\n                                                <option value=\"\">Please select</option>\r\n                                                <option value=\"N\">N</option>\r\n                                                <option value=\"G\">G</option>\r\n                                            </select> </td>\r\n                                        <td colspan=\"2\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Qty </td>\r\n\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"qty\" [OnlyNumber]=\"true\">\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Rate/Qty\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"rateperqty\" [OnlyNumber]=\"true\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Currency Type </td>\r\n\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"currencytype\">\r\n                                                <option value=\"\">Please select</option>\r\n                                                <option *ngFor=\"let d of table13_currencytype\" value={{d.DATAVALUE}}>\r\n                                                    {{d.DATATEXTVALUE}}</option>\r\n\r\n                                            </select>\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Exchange Rate\r\n                                        </td>\r\n                                        <td style=\" display: flex;\">\r\n                                            <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"excrate\" [OnlyNumber]=\"true\"  >\r\n                                            <span class=\"col-form-span-label\" style=\"font-weight: bold;\"> = INR</span>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amount\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" value={{amount}} \r\n                                                [disabled]=true>\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amount Taxable\r\n                                        </td>\r\n                                        <td>\r\n                                            <span *ngIf=\"tax==='G'; else elseBlock1\">\r\n                                                <input type=\"text\" class=\"form-control width180\"\r\n                                                    [(ngModel)]=\"taxamount_G\" [disabled]=true>\r\n                                            </span>\r\n                                            <ng-template #elseBlock1>\r\n                                                <input type=\"text\" class=\"form-control width180\"\r\n                                                    [(ngModel)]=\"taxamount_N\" [disabled]=true>\r\n                                            </ng-template>\r\n                                        </td>\r\n                                    </tr> -->\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"addcharges()\">\r\n                                                <span class=\"col-form-span-label\"><i\r\n                                                        class=\"fa fa-dot-circle-o\"></i>{{chargetext}}</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span\r\n                                                    class=\"col-form-span-label\" (click)=\"resetcharges();\"><i\r\n                                                        class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                             <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span\r\n                                                    class=\"col-form-span-label\" (click)=\"resetCurcharges();\"><i\r\n                                                       class=\"fa fa-ban\"></i> Reset Cur Charges</span></button>           \r\n                                        </td>\r\n                                     \r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr class=\"col-form-span-heading\">\r\n                                                                <th  ></th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\"> Charge code</span></th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\"> Account Name</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">  Charge Description</span></th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\"> Tax</span> </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\"> Qty</span> </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\">Rate</span> </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\"> Currency</span> </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\">Ex.Rate</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Amount </span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Taxable Amount </span> </th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngIf=\"chargetable.length > 0\">\r\n                                                            <tr *ngFor=\"let data of chargetable\">\r\n                                                                <td>\r\n                                                                    <i class=\"fa fa-pencil\"\r\n                                                                        (click)=\"editcharge(data)\"></i>\r\n                                                                    &nbsp;\r\n                                                                    <i class=\"fa fa-trash\"\r\n                                                                        (click)=\"deletecharge(data)\"></i>\r\n                                                                </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_CHRGCODE}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.ACCOUNT_NAME}}</span>   </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.description1}}</span>  </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_TAXABLE}}</span>  </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_QTY}}</span>  </td>\r\n                                                                <td style=\"text-align: right;\"  ><span  class=\"col-form-span-label\">{{data.INV_RATE}}</span>   </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_CURRENCYNAME}}</span>  </td>\r\n                                                                <td style=\"text-align: right;\"><span  class=\"col-form-span-label\">{{data.INV_EXRATE}}</span>   </td>\r\n                                                                <!-- <td><span   class=\"col-form-span-label\">{{data.INV_AMOUNT}}</span>  </td>\r\n                                                                <td><span   class=\"col-form-span-label\">{{data.TAXABLEAMT}}</span>   </td> -->\r\n                                                                <td style=\"text-align: right;\"><span   class=\"col-form-span-label\">{{data.INV_INRAMT}}</span>  </td>\r\n                                                                <td style=\"text-align: right;\"><span   class=\"col-form-span-label\">{{data.TAXABLEAMTINR|number:'2.2-4'}}</span>   </td>\r\n                                                            </tr>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"three\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Enclosure code</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <select class=\"form-control\" [(ngModel)]=\"enclose_code\">\r\n                                                <option value=\"\">--Please select--</option>\r\n                                                <option *ngFor=\"let d of Table11_enclose\" value={{d.enc_code}}>\r\n                                                    {{d.enclosure}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Description </b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"enclose_desc\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>number</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"enclose_number\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\"\r\n                                                (click)=\"addenclosure()\">\r\n                                                <span class=\"col-form-span-label\"><i\r\n                                                        class=\"fa fa-dot-circle-o\"></i>{{enclosuretext}}</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span\r\n                                                    class=\"col-form-span-label\" (click)=\"resetenclosure();\"><i\r\n                                                        class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr class=\"col-form-span-heading\">\r\n                                                                <th class=\"centerlabel\"><span class=\"col-form-span-label\"></span></th>\r\n                                                                <th align=\"center\"><span  class=\"col-form-span-label\">Enclosure code</span></th>\r\n                                                                <th align=\"center\"><span  class=\"col-form-span-label\">  Description</span></th>\r\n                                                                <th align=\"center\"><span  class=\"col-form-span-label\">Number </span></th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngIf=\"enclosuretable.length > 0\">\r\n                                                            <tr *ngFor=\"let data of enclosuretable\">\r\n                                                                <td>  <i class=\"fa fa-pencil\"   (click)=\"editenclosue(data)\"></i>\r\n                                                                    &nbsp;\r\n                                                                    <i class=\"fa fa-trash\"  (click)=\"deleteenclosur(data)\"></i> </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_ENCLCODE}}</span>   </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_DESC}}</span> </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_NUMBER}}</span>  </td>\r\n                                                            </tr>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"four\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Dispatch code</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <select class=\"form-control\" [(ngModel)]=\"despachcode\">\r\n                                                <option value=\"\">--Please select--</option>\r\n                                                <option *ngFor=\"let d of Table12_despach\" value={{d.des_code}}>\r\n                                                    {{d.Despatch_desc}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Description </b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"despach_desc\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Number</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"despach_no\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"despachadd()\">\r\n                                                <span class=\"col-form-span-label\"><i\r\n                                                        class=\"fa fa-dot-circle-o\"></i>{{despatchtext}}</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span\r\n                                                    class=\"col-form-span-label\" (click)=\"despachreset();\"><i\r\n                                                        class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr class=\"title-head formheading\">\r\n                                                                <th  ></th>\r\n                                                                <th   align=\"center\">Dispatch  code</th>\r\n                                                                <th   align=\"center\">    Description</th>\r\n                                                                <th   align=\"center\">Number  </th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngIf=\"despach_table.length >0\">\r\n                                                            <tr *ngFor=\"let data of despach_table\">\r\n                                                                <td>\r\n                                                                    <i class=\"fa fa-pencil\"\r\n                                                                        (click)=\"despachedit(data)\"></i>\r\n                                                                    &nbsp;\r\n                                                                    <i class=\"fa fa-trash\"\r\n                                                                        (click)=\"despachdelete(data)\"></i>\r\n                                                                </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.INV_DESPCODE}}</span>   </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.INV_DESC}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.INV_NUMBER}}</span>   </td>\r\n\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div align=\"center\" class=\"border p-1\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"MainInvoice_submit()\"> <span\r\n                            class=\"col-form-span-label\"><i\r\n                                class=\"fa fa-dot-circle-o\"></i>{{Mainaddtext}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"submit\" (click)=\"MainReset()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i>Reset</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" [style.display]=\"showModal_ListJob ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Modal title</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\" style=\"height:400px;overflow-y: auto;\">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <tr>\r\n                                <td colspan=\"6\">\r\n                                    <input type=\"text\" [(ngModel)]=\"term\"\r\n                                        style=\"float: right;width: 200px;font-family: verdana;font-size:11px;padding: 1px;\"\r\n                                        placeholder=\"Search by Job Number\">\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <thead style=\"text-align: center;\">\r\n                                        <tr>\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label\">JOb No.</th>\r\n                                            <th class=\"col-form-span-label\">SHIIPER NAME</th>\r\n                                            <th class=\"col-form-span-label\">BR/JV NO</th>\r\n                                            <th class=\"col-form-span-label\">BR/JV CLIENT</th>\r\n                                            <th class=\"col-form-span-label\">AMOUNT</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <!-- <tr *ngFor=\"let obj of ListJob;let i = index | filterBy: userFilter\"> -->\r\n                                        <tr *ngFor=\"let obj of ListJob | filter: term ;let i = index\">\r\n                                            <td class=\"col-form-span-label\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\"\r\n                                                    (ngModelChange)=\"getCheckboxValues($event,obj.EXPTNO,obj.SHIPPER_CODE,i)\">\r\n                                                &nbsp; </td>\r\n                                            <td class=\"col-form-span-label\">{{obj.EXPTNO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.SHIIPER_NAME}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.BRJV_NO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.BRJV_CLIENT}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n                <div style=\"float: right;\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"popup_listjob()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                            (click)=\"close()\"><i class=\"fa fa-ban\"></i>\r\n                            Close</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_Remark ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content \">\r\n            <div class=\"modal-body text-center\">\r\n                <p [innerHtml]=\"REMARK1\"></p>\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"remarks_popup_select('YES')\">YES</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"remarks_popup_select('NO')\">NO</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/invoice/proforma-invoice-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/transaction/invoice/proforma-invoice-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>Proforma Invoice Print List</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n      <div class=\"col-md-1 col-lg-1 col-12\" >\r\n      </div>\r\n      <div class=\"col-md-10 col-lg-10 col-12\" >\r\n        <table>\r\n          <tr>\r\n            <td colspan=\"8\">\r\n              <div class=\"input-group input-group-rounded\"  style=\"float: right;width: 300px;font-family: verdana;font-size:11px;padding: 1px;\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"search\" [(ngModel)]=\"searchString\" autocomplete=\"off\"\r\n                    placeholder=\"Search\">\r\n            </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new \"  style=\"overflow-y: auto;height: 00px;\" >\r\n          <thead class=\"title-head formheading\" >\r\n\r\n            <tr  style=\"white-space:nowrap;\">\r\n              <!-- <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"><input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp; </th> -->\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\">Trans Type</th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980;color: white;\" [class.active]=\"order === 'INV_CRTNO'\" (click)=\"setOrder('INV_CRTNO')\">  Inv No <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'INV_CRTDT'\" (click)=\"setOrder('INV_CRTDT')\">  Inv Date <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span> </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'CREATEDBY'\" (click)=\"setOrder('CREATEDBY')\">  Prepared By <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span>  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'INV_CRT_DAT'\" (click)=\"setOrder('INV_CRT_DAT')\">  Prepared On <span [hidden]=\"reverse\">▼</span>   <span [hidden]=\"!reverse\">▲</span> </th>\r\n              <th class=\"col-form-span-label\"   style=\" background-color:#004980; color: white;\"[class.active]=\"order === 'CLIENTNAME'\" (click)=\"setOrder('CLIENTNAME')\">    Client <span [hidden]=\"reverse\">▼</span> <span [hidden]=\"!reverse\">▲</span>    </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'TOTAL_AMT'\" (click)=\"setOrder('TOTAL_AMT')\">     Amount <span [hidden]=\"reverse\">▼</span>  <span [hidden]=\"!reverse\">▲</span>  </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of invoicedata | proformainvfilterpipe: searchString |orderBy: order:reverse:'case-insensitive'|paginate: { itemsPerPage:25, currentPage: PageActual }\"\r\n              >\r\n              <!-- <td class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.INV_CRTNO)\"> &nbsp; </td> -->\r\n              <td class=\"col-form-span-label\">{{obj.TRNS_TYPE}}</td>\r\n              <td class=\"col-form-span-label\" (click)=\"invoiceviewdata(obj.INV_CRTNO,template)\">{{obj.INV_CRTNO}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.INV_CRTDT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CREATEDBY}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.INV_CRT_DAT}}</td>\r\n              <td class=\"col-form-span-label\" [innerHTML]=\"obj.CLIENTNAME\"></td>\r\n              <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.TOTAL_AMT|number:'2.2-4'}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <tr>\r\n            <td colspan=\"8\" class=\"right-text pr-2\">\r\n              <!-- <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"authorisedata()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Authorize</span></button> -->\r\n              <!-- <button class=\"btn btn-sm btn-danger\" type=\"submit\"  (click)=\"abortdata()\">\r\n                <span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i>Abort</span></button> -->\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"8\">\r\n              <div class=\"row justify-content-center no-gutters\"\r\n                style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\r\n                <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n      <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/accounts/transaction/invoice/general-invoice-search.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/accounts/transaction/invoice/general-invoice-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GeneralInvoiceSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInvoiceSearchComponent", function() { return GeneralInvoiceSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GeneralInvoiceSearchComponent = /** @class */ (function () {
    function GeneralInvoiceSearchComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _router, _loginService, orderPipe, filterPipe) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.orderPipe = orderPipe;
        this.filterPipe = filterPipe;
        this.order = 'CLIENTNAME';
        this.reverse = false;
        this.clientable = [];
        this.exampleRadios1 = 'INVOICENO';
        this.client = "";
        this.invoiceno = "";
        this.jobno = "";
        this.amount = "";
        this.Searchdata_list = [];
        this.printarray = [];
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
        this.sortedCollection = orderPipe.transform(this.Searchdata_list, this.Searchdata_list.CLIENTNAME);
    }
    GeneralInvoiceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this._loginService.getLogin())
        // this.verifyPermission('3','Add')
        this.verifyPermission('423', 'Add');
        var jsonmaster = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/ACC_INVOICE_Search_Pageloag", jsonmaster)
            .subscribe(function (data) {
            //  console.log(data)
            _this.clientable = data.Table;
        });
    };
    GeneralInvoiceSearchComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    GeneralInvoiceSearchComponent.prototype.searchlist = function () {
        var _this = this;
        if (this.exampleRadios1 == "INVOICENO") {
            if (this.invoiceno == "") {
                this._toasterService.toast('warning', 'warning', "Please enter Invoice No to serach !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "CLIENT") {
            // console.log( this.client_startdate)
            if (this.client == "" || this.client_startdate == "" || this.client_enddate == "" || this.client_startdate == undefined || this.client_enddate == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select Client and Enter Start & End Date to Search !");
                return false;
            }
            else if (this.client_startdate != "" && this.client_enddate != "") {
                var intdtfrm1 = void 0, intdtTo1 = void 0;
                intdtfrm1 = this._dataService.datechnge(this.client_startdate.formatted);
                intdtTo1 = this._dataService.datechnge(this.client_enddate.formatted);
                if (this._dataService.date2Comparison(intdtfrm1, intdtTo1) == false) {
                    this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                    return false;
                }
            }
        }
        else if (this.exampleRadios1 == "JOBNO") {
            if (this.jobno == "") {
                this._toasterService.toast('warning', 'warning', "Please enter Job No to serach !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "AMOUNT") {
            if (this.amount == "") {
                this._toasterService.toast('warning', 'warning', "Please enter Amount No to serach  !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "DATE") {
            if (this.datewise_startdate == "" || this.datewise_startdate == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select start Date !");
                return false;
            }
            if (this.datewise_enddate == "" || this.datewise_enddate == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select to Date !");
                return false;
            }
            if (this.datewise_startdate != "" && this.datewise_enddate != "") {
                var intdtfrm = void 0, intdtTo = void 0;
                intdtfrm = this._dataService.datechnge(this.datewise_startdate.formatted);
                intdtTo = this._dataService.datechnge(this.datewise_enddate.formatted);
                if (this._dataService.date2Comparison(intdtfrm, intdtTo) == false) {
                    this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                    return false;
                }
            }
        }
        else if (this.exampleRadios1 == "6") {
            if (this.printall_date == "" || this.printall_date == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select start Date !");
                return false;
            }
            else {
                this.getinvoiceofday();
                return false;
            }
        }
        this.loaderService.display(true);
        var jsonmaster = {
            InvoiceNo: this.invoiceno,
            Client: this.client,
            JobNo: this.jobno,
            Amount: this.amount,
            FromDate: this.exampleRadios1 == "CLIENT" ? this.client_startdate.formatted : this.exampleRadios1 == "DATE" ? this.datewise_startdate.formatted : "",
            ToDate: this.exampleRadios1 == "CLIENT" ? this.client_enddate.formatted : this.exampleRadios1 == "DATE" ? this.datewise_enddate.formatted : "",
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmpid: this._loginService.getLogin()[0].CMPID,
            TYPE: this.exampleRadios1
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_INVOICE_Search_List", jsonmaster)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.Table.length == "0") {
                _this._toasterService.toast("Alert", "Alert", "No record found");
            }
            else if (data.Table.length == "1") {
                _this.Searchdata_list = data.Table;
                _this.ListOnclick(data.Table[0].INV_NO);
            }
            else {
                _this.Searchdata_list = data.Table;
            }
        });
    };
    GeneralInvoiceSearchComponent.prototype.InvoiceView = function (Invoiceno) {
        if (Invoiceno == '' || Invoiceno == undefined || Invoiceno.length < 15) {
            alert("Enter 15 digit Invoice No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Invoice-View/' + Invoiceno + '/', "Invoice View", toolbar);
    };
    // InvoicePrint(Invoiceno) {
    //   if(Invoiceno ==''||Invoiceno==undefined || Invoiceno.length < 15){
    //     alert("Enter 15 digit Invoice No !")
    //     return false
    //   }
    //   let theTop = (screen.height / 2) - (483 / 2);
    //   let theLeft = (screen.width / 2) - (780 / 2);
    //   let toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
    //   window.open('./#/popup/Account-Invoice-print/' + Invoiceno + '/' , "Invoice Print", toolbar);
    // }
    GeneralInvoiceSearchComponent.prototype.InvoicePrint = function (Invoiceno) {
        if (Invoiceno == '' || Invoiceno == undefined || Invoiceno.length < 15) {
            alert("Enter 15 digit Invoice No !");
            return false;
        }
        // let theTop = (screen.height / 2) - (483 / 2);
        // let theLeft = (screen.width / 2) - (780 / 2);
        // let toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        // window.open('./#/popup/Account-Invoice-print/' + Invoiceno + '/' , "Invoice Print", toolbar);
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        var URL = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&InvoiceNo=" + Invoiceno
            + "&DisplayMode=" + "0"
            + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
        window.open(URL, "Invoice Print", toolbar);
        return false;
    };
    GeneralInvoiceSearchComponent.prototype.ListOnclick = function (INVOICENO) {
        var authby;
        var updateItem = this.Searchdata_list.find(function (item) { return item.INV_NO === INVOICENO; });
        authby = updateItem.AUTHORISEDBY.trim();
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click Ok to Print or Click Cancel to Edit ?')) {
            var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&InvoiceNo=" + INVOICENO
                + "&DisplayMode=" + "0"
                + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
            window.open(URL_1, "Invoice Print", toolbar);
            return false;
        }
        else {
            if (authby == "undefined" || authby == "0" || authby == "") {
                this._router.navigate(['/accounts/transaction/invoice/general/' + INVOICENO]);
            }
            else {
                alert("You can not update But print the Invoice No.[" + INVOICENO + "] Because Invoice is Already Authorised !!");
                this.InvoiceView(INVOICENO);
                return false;
            }
        }
    };
    GeneralInvoiceSearchComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    GeneralInvoiceSearchComponent.prototype.getinvoiceofday = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            DAY: this.printall_date.formatted
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_INVOICE_SEARCH_PERDAY", jsonmaster)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            // console.log(data)
            if (data.Table.length == "0") {
                _this._toasterService.toast("Alert", "Alert", "No record found");
            }
            else if (data.Table.length == "1") {
                _this.Searchdata_list = data.Table;
                _this.ListOnclick(data.Table[0].INV_NO);
            }
            else {
                _this.Searchdata_list = data.Table;
            }
        });
    };
    GeneralInvoiceSearchComponent.prototype.getCheckboxValues = function (event, data) {
        var index = this.printarray.findIndex(function (x) { return x.invoiceno == data; });
        if (event) {
            var obj = {
                printno: data
            };
            this.printarray.push(obj);
            //console.log(  this.printarray)
        }
        else {
            this.printarray.splice(index, 1);
            //  console.log(  this.printarray)
        }
    };
    GeneralInvoiceSearchComponent.prototype.checkAll = function (ev) {
        this.printarray = [];
        this.Searchdata_list.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.Searchdata_list.length; i++) {
                var obj = {
                    invoiceno: this.Searchdata_list[i].INV_NO
                };
                this.printarray.push(obj);
                //   console.log(  this.printarray)
            }
        }
        else {
            this.printarray = [];
        }
    };
    GeneralInvoiceSearchComponent.prototype.PrintInvoice = function () {
        if (this.printarray.length == "0") {
            this._toasterService.toast("warning", "warning", "Select at least One Invoice No to Print.");
            return false;
        }
        var output = this.printarray.map(function (item) {
            return item.invoiceno;
        });
        var datatry = output.join(",");
        var printnolist = datatry;
        // console.log(printnolist)
        var URL = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_BulkPrint.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&entryno=" + printnolist
            + "&CurLogInIP=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    GeneralInvoiceSearchComponent.prototype.back = function () {
        //this.result.emit(true);
        this._router.navigate(['/accounts/transaction/invoice/invoicesearch']);
    };
    GeneralInvoiceSearchComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    GeneralInvoiceSearchComponent.prototype.reset = function () {
        this.invoiceno = "";
        this.client_startdate = "";
        this.client_enddate = "";
        this.datewise_startdate = "";
        this.datewise_enddate = "";
        this.client = "";
        this.jobno = "";
        this.amount = "";
        this.printall_date = "";
    };
    GeneralInvoiceSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderPipe"] },
        { type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"] }
    ]; };
    GeneralInvoiceSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-invoice-search',
            template: __webpack_require__(/*! raw-loader!./general-invoice-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/invoice/general-invoice-search.component.html"),
            styles: ["main{\n    position: absolute;\n    top: 110px;\n    left: 231px;\n    right: 0;\n    bottom: 0;\n    background: #f2f5fe;\n    padding: 1rem;\n  }\n  \n  #content{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }"]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderPipe"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]])
    ], GeneralInvoiceSearchComponent);
    return GeneralInvoiceSearchComponent;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/invoice/general-invoice.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/transaction/invoice/general-invoice.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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









var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(_router, _dataService, datePipe, _auth, _activatedRoute, _toasterService, _loginService, _loaderService, filterPipe) {
        this._router = _router;
        this._dataService = _dataService;
        this.datePipe = datePipe;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.filterPipe = filterPipe;
        this.Header = "Invoice ";
        this.value = 1;
        this.billtype = "";
        this.pkgs = "";
        this.pieces = "";
        this.currency = "";
        this.rupeestext = "";
        this.Adv_rec = "";
        this.volume = "";
        this.weight = "";
        this.client_ref = "";
        this.chargetable = [];
        this.carrier = "";
        this.goods = "";
        this.master = "";
        this.BE_no = "";
        this.currencyname = "";
        this.ship_billno = "";
        this.clent_excutive = "";
        this.narration = "";
        this.no_pkgs = "";
        this.no_pieces = "";
        this.inv_currate = "";
        this.inv_currate1 = "";
        this.jobno = "";
        this.jobnolist = "";
        this.sel_id = "";
        this.Ship_code = "";
        this.newArray = [];
        this.jobdatalist = [];
        this.REMARK1 = "";
        this.client_excutive = "";
        this.showModal_ListJob = false;
        this.show_pkg_piece = false;
        this.jobno_disable = false;
        this.showModal_Remark = false;
        this.modecondition = false;
        this.addjob = true;
        this.jobupdate = false;
        this.InvoiceDate = new Date();
        this.invoiceid = "0";
        this.queryParamsUserId = "";
        this.Mainaddtext = "Submit";
        this.pk_jobid = "0";
        this.pk_job_detail_id = "0";
        this.packages = "";
        this.propweight = "";
        this.invno = "";
        this.mode = "";
        this.pk_chrgeid = "0";
        this.pk_charge_detail_id = "0";
        this.chargetext = "Add";
        this.excrate = "1.00";
        this.currencytype = "";
        this.tax = "";
        this.qty = "";
        this.rateperqty = "";
        this.desc = "";
        this.desc1 = "";
        this.desc2 = "";
        this.pk_Enclid = "0";
        this.pk_Ecl_detail_id = "0";
        this.enclosuretext = "Add";
        this.enclose_desc = "";
        this.enclose_number = "";
        this.enclosuretable = [];
        this.enclose_code = "";
        this.pk_Despid = "0";
        this.pk_Desp_detail_id = "0";
        this.despatchtext = "Add";
        this.despach_desc = "";
        this.despach_no = "";
        this.despach_table = [];
        this.despachcode = "";
        this.fromright_dt = null;
        this.toright_dt = null;
        this.tab = 1;
        this.disableexrate = true;
        this.disablegeninvcur = false;
        this.disablegencurrate = false;
        this.disablegencurrate1 = false;
        this.disableaccount = false;
        this.codelistActt = [];
        this.accountname = "";
        this.disabletax = false;
        this.errorMessage = '';
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
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
        };
        this.myDatePickerOptionsInv = {
            dateFormat: 'dd/mm/yyyy',
            inline: false,
            height: '20px',
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
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loaderService.display(true);
        this.invdate = new Date();
        this.invdate = this._dataService.datechnge(this.invdate);
        this.paybydate = new Date();
        this.paybydate = this._dataService.datechnge(this.paybydate);
        this.invstartdate = new Date();
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsUserId = params["invoiceno"];
            _this.invoiceid = (_this.queryParamsUserId == " " ? "0" : _this.queryParamsUserId);
        });
        if (this.queryParamsUserId != ' ') {
            //  this.verifyPermission('3','Modify');
            this.verifyPermission('423', 'Modify');
        }
        else {
            // this.verifyPermission('3','Add');
            this.verifyPermission('423', 'Add');
        }
        var jsoncmp = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            cmpid: this._loginService.getLogin()[0].CMPID,
            INVNO: "",
            type: "II"
        };
        this._dataService.getData("Accounts/ACC_INVOICE_PAGE_LOAD", jsoncmp)
            .subscribe(function (data) {
            //  console.log(data)
            _this.table_client = data.Table;
            _this.table1_billaddress = data.Table1;
            _this.table2_document = data.Table2;
            _this.table3_curreny = data.Table3;
            _this.table4_billtype = data.Table4;
            _this.table5_mode = data.Table5;
            _this.table6_pkgs = data.Table6;
            _this.table7_pieces = data.Table7;
            _this.table8_charge = data.Table8;
            _this.table9_account = data.Table9;
            _this.Table12_despach = data.Table12;
            _this.Table11_enclose = data.Table11;
            _this.table13_currencytype = data.Table13;
            _this.currencytype = "CR115";
            _this.excrate = "1";
            if (_this.queryParamsUserId != ' ') {
                _this.MainEdit_populate();
                _this.Mainaddtext = "Update";
            }
            _this._loaderService.display(false);
        });
        // $(document).ready(function(){
        //     $("p").click(function(){
        //         alert('alert'); 
        //     }); 
        // }); 
    };
    InvoiceComponent.prototype.onInput = function (event) {
        var input = event.target.value;
        // Regex to allow up to 4 decimal places
        var regex = /^\d*(\.\d{0,4})?$/;
        if (regex.test(input)) {
            this.inv_currate = input; // Valid input
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'Invalid input format.';
        }
    };
    // Final validation on blur
    InvoiceComponent.prototype.onBlur = function (event) {
        var input = event.target.value;
        // Remove invalid characters or correct the format
        var regex = /^\d*(\.\d{0,4})?$/;
        if (!regex.test(input)) {
            this.inv_currate = this.inv_currate.replace(/[^0-9.]/g, '').replace(/(\.\d{4})\d+/, '$1');
        }
    };
    InvoiceComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (_this._loginService.getLogin()[0].ROLETYPE != 'SA') {
                _this.fromright_dt = data.Table[0].rightsfrmdt;
                _this.toright_dt = data.Table[0].rightstodt;
                _this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            //this._loaderService.display(false);
        });
    };
    InvoiceComponent.prototype.onvalchange = function () { this.value = 2; };
    InvoiceComponent.prototype.onDisableRange = function () {
        var date = new Date(this.fromright_dt);
        var newdate = new Date(date);
        var bdate = new Date();
        bdate = newdate;
        var copy = this.getCopyOfOptions();
        bdate.setDate(bdate.getDate());
        copy.disableUntil = { year: bdate.getFullYear(), month: bdate.getMonth() + 1, day: bdate.getDate() };
        this.myDatePickerOptionsInv = copy;
        var todt = new Date(this.toright_dt);
        var newtodate = new Date(todt);
        var d = new Date();
        d = newtodate;
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() + 1 };
        this.myDatePickerOptionsInv = copy1;
    };
    // onDisableRange() {
    //     var date = new Date(this.fromright_dt);
    //     var newdate = new Date(date);
    //     let bdate = new Date();
    //     bdate=newdate 
    //     let copy = this.getCopyOfOptions();
    //     bdate.setDate(bdate.getDate());     
    //     copy.disableUntil={year: bdate.getFullYear(), month: bdate.getMonth() + 1, day: bdate.getDate()} ;
    //     this.myDatePickerOptionsInv = copy;
    // }
    InvoiceComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    // **ADD JOB FUNCTION START ***
    InvoiceComponent.prototype.listjobpopup = function () {
        var _this = this;
        if (this.jobno == "" && this.mode != "") {
            this.showModal_ListJob = true;
            this.modecondition = true;
            this._loaderService.display(true);
            var jsoncmp1 = {
                frmdt: this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE),
                todt: this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE),
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                Type: this.mode
            };
            this._dataService.getData("Accounts/ACC_INVOICE_LIST_JOB", jsoncmp1)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.ListJob = data.Table;
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                    _this._loaderService.display(false);
                }
            });
        }
        else if (this.jobno != "" && this.mode != "") {
            this.inputlist();
        }
        else if (this.jobno != "" && this.mode == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Mode!');
            return false;
        }
        else {
            this._toasterService.toast('warning', 'warning', 'Please Select Mode!');
            return false;
        }
    }; // **END OF ADDING JOB FUNCTION START ***
    InvoiceComponent.prototype.inputlist = function () {
        var _this = this;
        if (this.jobdatalist.length > "0") {
            var jobno = [];
            jobno = this.jobdatalist.filter(function (code) { return code.INV_JOBNO === _this.jobno; });
            if (jobno.length > "0") {
                this._toasterService.toast('warning', 'warning', 'Job Number already Exists!');
                return false;
            }
        }
        this.populatejob();
    };
    InvoiceComponent.prototype.popup_listjob = function () {
        if (this.newArray == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Job Number!');
            return false;
        }
        this.showModal_ListJob = false;
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        this.jobnolist = output.join(",");
        this.newArray = [];
        this.populatejob();
    };
    InvoiceComponent.prototype.getCheckboxValues = function (event, data, shipcode, id) {
        this.sel_id = id;
        if (this.jobdatalist.length > "0") {
            var data2 = [];
            data2 = this.jobdatalist.filter(function (code) { return code.INV_JOBNO == data; });
            if (data2.length > "0") {
                this._toasterService.toast('warning', 'warning', 'Job Number already Exists!');
                return false;
            }
            //  if (this.jobdatalist[0].EXPORTER != shipcode) {
            //      this.ListJob[this.sel_id]["Checked"] = false;
            //      this._toasterService.toast('warning', 'warning', 'Shipper Name should be same type!');
            //      return false;
            //  }
        }
        //  if (this.newArray.length > "0") {
        //      if (this.newArray[0].exporter != shipcode) {
        //          this.ListJob[this.sel_id]["Checked"] = false;
        //          this._toasterService.toast('warning', 'warning', 'Shipper Name should be same type!');
        //          return false;
        //      }
        //  }
        if (this.jobdatalist.length > "0") {
            var data2 = [];
            data2 = this.jobdatalist.filter(function (code) { return code.INV_JOBNO == data; });
            if (data2.length > "0") {
                this._toasterService.toast('warning', 'warning', 'Job Number already Exists!');
                return false;
            }
        }
        this.Ship_code = shipcode;
        this.sel_job = data;
        this.sel_id = id;
        var popup = [];
        popup = this.ListJob.filter(function (code) { return code.EXPTNO === data; });
        this.REMARK1 = popup[0].REMARK;
        if (this.REMARK1 != "") {
            this.showModal_Remark = true;
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.inoiceno == data; });
            if (event) {
                var obj = {
                    inoiceno: data,
                    exporter: shipcode
                };
                this.newArray.push(obj);
            }
            else {
                this.newArray.splice(index, 1);
            }
        }
    };
    InvoiceComponent.prototype.remarks_popup_select = function (type) {
        var _this = this;
        // if (this.jobdatalist.length > "0") {
        //     if (this.jobdatalist[0].EXPORTER != this.Ship_code) {
        //         this.ListJob[this.sel_id]["Checked"] = false;
        //         this._toasterService.toast('warning', 'warning', 'Shipper Name should be same type!');
        //         return false;
        //     }
        // }
        // if (this.newArray.length > "0") {
        //     if (this.newArray[0].exporter != this.Ship_code) {
        //         this.ListJob[this.sel_id]["Checked"] = false;
        //         this._toasterService.toast('warning', 'warning', 'Shipper Name should be same type!');
        //         return false;
        //     }
        // }
        this.showModal_Remark = false;
        if (type == "YES") {
            var obj = {
                inoiceno: this.sel_job,
                exporter: this.Ship_code
            };
            this.newArray.push(obj);
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.inoiceno == _this.sel_job; });
            this.newArray.splice(index, 1);
            this.ListJob[this.sel_id]["Checked"] = false;
        }
    };
    InvoiceComponent.prototype.populatejob = function () {
        var _this = this;
        this._loaderService.display(true);
        if (this.jobno.substr(7, 1) != this.mode) {
            this._toasterService.toast('warning', 'warning', 'You have entered  jobno of different mode !');
            this._loaderService.display(false);
            return false;
        }
        if (this.jobno.length > 0 && this.jobno.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            this._loaderService.display(false);
            return false;
        }
        if (this.jobno.length > 0 && this.jobno.length == 15) {
            if (this.jobno.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
                this._loaderService.display(false);
                return false;
            }
            // if (this.jobno.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1)   {
            //     this._toasterService.toast("warning","warning",'You have entered Job No of different City !');
            //     this._loaderService.display(false)
            //     return false;
            //    }
        }
        var jsoncmp2 = {
            JOBSTR: this.jobno == "" ? this.jobnolist : this.jobno,
            TYPE: this.mode,
            CMPID: this._loginService.getLogin()[0].CMPID,
            GUID: this._loginService.getLogin()[0].GUID,
            INVNO: null,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Accounts/ACC_INVOICE_JOB_POPULATE", jsoncmp2)
            .subscribe(function (data) {
            //console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this.jobdatalist = data.Table;
                _this.modecondition = true;
                _this.Adv_rec = data.Table1[0].ADV_AMT;
                _this.carrier = data.Table1[0].CARRIER;
                _this.client_ref = data.Table1[0].CLIENT_REF;
                _this.goods = data.Table1[0].GOODS;
                _this.weight = data.Table1[0].WEIGHTKILO;
                _this.no_pieces = data.Table1[0].NOOFPCS;
                _this.no_pkgs = data.Table1[0].NOOFPKG;
                _this.master = data.Table1[0].MAWBNO;
                _this.masterdate = data.Table1[0].MAWBDT;
                _this.volume = data.Table1[0].CBM.toFixed(3);
                _this.narration = data.Table1[0].CONTAINER;
                _this.ship_billno = data.Table1[0].SHIPBILLNO;
                _this.shipbilldate = data.Table1[0].SHIPBIILLDT;
                if (data.Table1[0].TYPEOFPCS != "") {
                    _this.pieces = data.Table1[0].TYPEOFPCS;
                }
                if (data.Table1[0].TYPEOFPKG != "") {
                    _this.pkgs = data.Table1[0].TYPEOFPKG;
                }
                var dataclient = [];
                if (data.Table1[0].EXPORTER != "") {
                    dataclient = _this.table_client.filter(function (code) { return code.EXP_CODE.split("|")[0] === data.Table1[0].EXPORTER; })[0];
                    _this.client = dataclient.EXP_CODE;
                    _this.fillAddress(dataclient.EXP_CODE);
                }
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.Editjob = function (ID) {
        this.addjob = false;
        this.jobupdate = true;
        this.show_pkg_piece = true;
        this.selected_data = ID;
        this.jobno_disable = true;
        this.invno = ID.INV_NO;
        this.invdate = this.datePipe.transform(this.InvoiceDate, 'dd/mm/yyyy');
        this.jobno = ID.INV_JOBNO;
        this.packages = ID.INV_PKGS;
        this.propweight = ID.INV_GRWT;
    };
    InvoiceComponent.prototype.resetjob = function () {
        this.modecondition = false;
        this.show_pkg_piece = false;
        this.addjob = true;
        this.jobupdate = false;
        this.jobno_disable = false;
        this.packages = "";
        this.propweight = "";
        this.jobno = "";
        this.invno = "";
        this.invdate = this.datePipe.transform(this.InvoiceDate, 'dd/mm/yyyy');
    };
    InvoiceComponent.prototype.updatejob = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: this.selected_data.ID,
            INV_NO: this.invno,
            INV_JOBNO: this.jobno,
            INV_PKGS: this.packages,
            INV_GRWT: this.propweight,
            VGUID: this.selected_data.VGUID,
            ACC_JOBDTLS_ID: this.selected_data.ACC_JOBDTLS_ID,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.Common("Accounts/ACC_invoice_Job_TMP", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == '100') {
                _this.jobdatalist = data.Table;
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.resetjob();
                _this._loaderService.display(false);
            }
            else {
                _this._loaderService.display(false);
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
            }
        });
    };
    InvoiceComponent.prototype.deletejob = function (deljob) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: deljob.ID,
            GUID: deljob.VGUID,
            ACC_JOBDTLS_ID: deljob.ACC_JOBDTLS_ID,
            Makerid: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_INVOICE_JOB_DELETE", jsonmaster)
            .subscribe(function (data) {
            if (data.Table2[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table2[0].STATUSTEXT);
                if (data.Table.length == "0") {
                    _this.jobdatalist = [];
                }
                else {
                    _this.jobdatalist = data.Table;
                }
                _this.Adv_rec = data.Table1[0].ADV_AMT;
                _this.carrier = data.Table1[0].CARRIER;
                _this.client_ref = data.Table1[0].CLIENT_REF;
                _this.goods = data.Table1[0].GOODS;
                _this.weight = data.Table1[0].WEIGHTKILO;
                _this.no_pieces = data.Table1[0].NOOFPCS;
                _this.no_pkgs = data.Table1[0].NOOFPKG;
                _this.master = data.Table1[0].MAWBNO;
                _this.masterdate = data.Table1[0].MAWBDT;
                _this.volume = data.Table1[0].CBM;
                if (data.Table1[0].TYPEOFPCS != "") {
                    _this.pieces = data.Table1[0].TYPEOFPCS;
                }
                if (data.Table1[0].TYPEOFPKG != "") {
                    _this.pkgs = data.Table1[0].TYPEOFPKG;
                }
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table2[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    Object.defineProperty(InvoiceComponent.prototype, "amount", {
        //Charges functions
        get: function () {
            var data = this.qty * this.rateperqty;
            this.Curamount = data;
            var exchage = 1;
            if (this.currencytype == "CR115") {
                exchage = data * 1;
            }
            else {
                exchage = data * this.excrate;
            }
            var final1 = exchage.toFixed(2);
            this.INV_Amt_INR = final1;
            if (this.currencytype == "CR115") {
                return data;
            }
            else {
                return final1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceComponent.prototype, "taxamount_G", {
        get: function () {
            var data = this.qty * this.rateperqty;
            this.Curamount = data;
            var exchage = 1;
            if (this.currencytype == "CR115") {
                exchage = data * 1;
            }
            else {
                exchage = data * this.excrate;
            }
            var final = exchage.toFixed(2);
            this.taxamount_G_Inr = final;
            return final;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceComponent.prototype, "taxamount_N", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    // get Curamount() {
    //     var data = this.qty * this.rateperqty
    //    return data;
    //      }
    InvoiceComponent.prototype.addcharges = function () {
        var _this = this;
        if (this.charge == "" || this.charge == undefined) {
            this._toasterService.toast("warning", "warning", "Select Charges Code ");
            return false;
        }
        if (this.charge.split("|")[0] == "8900") {
            if (this.account == "" || this.account == undefined) {
                this._toasterService.toast("warning", "warning", "Select Account Name");
                return false;
            }
        }
        if (this.desc1 == "" || this.desc1 == undefined) {
            this._toasterService.toast("warning", "warning", "Please Input Charge description !");
            return false;
        }
        if (this.currencytype == "" || this.currencytype == undefined) {
            this._toasterService.toast("warning", "warning", "Select  Currency Type");
            return false;
        }
        if (this.charge == "" || this.charge == undefined) {
            this._toasterService.toast("warning", "warning", "Select Charges Code ");
            return false;
        }
        if (this.account == "" || this.account == undefined) {
            this._toasterService.toast("warning", "warning", "Select Account Name");
            return false;
        }
        if (this.tax == "" || this.tax == undefined) {
            this._toasterService.toast("warning", "warning", "Select Tax Type");
            return false;
        }
        if (this.qty == "" || this.qty == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Quantity");
            return false;
        }
        if (this.rateperqty == "" || this.rateperqty == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Rate");
            return false;
        }
        this._loaderService.display(true);
        var data2 = [];
        data2 = this.table9_account.filter(function (code) { return code.ACCTCODE === _this.account; })[0];
        var jsonmaster = {
            ID: this.pk_chrgeid,
            INV_NO: this.invoiceid,
            INV_CHRGCODE: this.charge.split("|")[0],
            INV_ACCOUNT: this.account.split("|")[0],
            ACCOUNT_NAME: data2.ACCTNAME,
            INV_DESC_CHRG: "",
            INV_DESC1_CHRG1: this.desc1,
            INV_DESC2_CHRG1: this.desc2,
            INV_TAXABLE: this.tax,
            INV_AMOUNT: this.Curamount,
            INV_INRAMT: this.INV_Amt_INR,
            //INV_TAXABLE_AMOUNT: this.tax == "G" ? this.taxamount_G : this.taxamount_N,
            INV_TAXABLE_AMOUNT: this.tax == "G" ? this.Curamount : this.taxamount_N,
            INV_TAXABLE_INRAMT: this.tax == "G" ? this.taxamount_G_Inr : this.taxamount_N,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACC_CHARGDTLS_ID: this.pk_charge_detail_id,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            INV_QTY: this.qty,
            INV_RATE: this.rateperqty,
            INV_CURRENCY: this.currencytype,
            INV_EXRATE: this.excrate,
        };
        this._dataService.Common("Accounts/ACC_invoice_Charge_TMP", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.chargetable = data.Table;
                if (_this.chargetable.length == 0) {
                    _this.disablegeninvcur = false;
                    _this.disablegencurrate = false;
                    _this.disablegencurrate1 = false;
                }
                else {
                    if (_this.currency.split("|")[0] != 'CR115') {
                        _this.disablegeninvcur = true;
                        _this.disablegencurrate = true;
                        _this.disablegencurrate1 = true;
                    }
                }
                _this.resetcharges();
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.deletecharge = function (deldata) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: deldata.ID,
            GUID: deldata.VGUID,
            ACC_CHARGS_ID: deldata.ACC_CHARGDTLS_ID,
            INV_CHRGCODE: deldata.INV_CHRGCODE,
        };
        //  console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_INVOICE_CHARGES_DELETE", jsonmaster)
            .subscribe(function (data) {
            //console.log(data);
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this.chargetable = data.Table;
                if (_this.chargetable.length == 0) {
                    _this.disablegeninvcur = false;
                    _this.disablegencurrate = false;
                    _this.disablegencurrate1 = false;
                }
                else {
                    _this.disablegeninvcur = true;
                    _this.disablegencurrate = true;
                    _this.disablegencurrate1 = true;
                }
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.resetcharges = function () {
        this.chargetext = "Add";
        this.account = "",
            this.desc1 = "",
            this.desc2 = "",
            this.desc = "";
        this.tax = "",
            this.qty = "",
            this.rateperqty = "",
            this.currencytype = "CR115";
        this.excrate = "1.00",
            this.charge = "",
            this.pk_charge_detail_id = "0";
        this.pk_chrgeid = "0";
    };
    InvoiceComponent.prototype.editcharge = function (data) {
        var data2 = [], data3 = [];
        data3 = this.table8_charge.filter(function (code) { return code.CHARGE_CODE.split("|")[0] === data.INV_CHRGCODE; })[0];
        data2 = this.table9_account.filter(function (code) { return code.ACCTNAME === data.ACCOUNT_NAME; })[0];
        this.chargetext = "Update";
        this.pk_chrgeid = data.ID,
            this.pk_charge_detail_id = data.ACC_CHARGDTLS_ID;
        this.account = data2.ACCTCODE,
            this.desc = data.INV_DESC_CHRG;
        this.desc1 = data.INV_DESC1_CHRG1,
            this.desc2 = data.INV_DESC2_CHRG1,
            this.tax = data.INV_TAXABLE,
            this.qty = data.INV_QTY,
            this.rateperqty = data.INV_RATE,
            this.currencytype = data.INV_CURRENCY,
            this.excrate = data.INV_EXRATE,
            this.charge = data3.CHARGE_CODE;
    };
    // GetChargeDesc(d) {
    //     this.desc1 = d.split("|")[1]
    // }
    InvoiceComponent.prototype.GetChargeDesc = function (d) {
        this.desc1 = d.split("|")[2];
        if (d.split("|")[0] == '8900') {
            this.disableaccount = false;
        }
        else {
            var gcode = d.split("|")[4] + '|' + d.split("|")[1];
            console.log(gcode);
            this.account = gcode;
            this.disableaccount = true;
        }
    };
    InvoiceComponent.prototype.GetAccountDesc = function (event) {
        // console.log(event.value.split("|")[1])
        if (this.charge.split("|")[0] == "8900") {
            this.desc1 = event.split("|")[1];
        }
    };
    //Enclosure functions
    InvoiceComponent.prototype.addenclosure = function () {
        var _this = this;
        if (this.enclose_code == "" || this.enclose_code == undefined) {
            this._toasterService.toast("warning", "warning", "Select Enclosure Code");
            return false;
        }
        if (this.enclose_desc == "" || this.enclose_desc == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Enclosure Description");
            return false;
        }
        if (this.enclose_number == "" || this.enclose_number == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Enclosure Number");
            return false;
        }
        this._loaderService.display(true);
        var jsonmaster = {
            ID: this.pk_Enclid,
            INV_NO: this.invoiceid,
            INV_ENCLCODE: this.enclose_code,
            INV_DESC: this.enclose_desc,
            INV_NUMBER: this.enclose_number,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACC_ENCLDTLS_ID: this.pk_Ecl_detail_id,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.Common("Accounts/ACC_invoice_enclosure_TMPIU", jsonmaster)
            .subscribe(function (data) {
            //  console.log(data);
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.enclosuretable = data.Table;
                //    console.log(this.enclosuretable);
                _this.resetenclosure();
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.resetenclosure = function () {
        this.enclosuretext = "Add";
        this.enclose_code = "",
            this.enclose_desc = "",
            this.enclose_number = "",
            this.pk_Ecl_detail_id = "0",
            this.pk_Enclid = "0";
    };
    InvoiceComponent.prototype.deleteenclosur = function (data) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: data.ID,
            GUID: data.VGUID,
            ACC_ENCLDTLS_ID: data.ACC_ENCLDTLS_ID,
        };
        //  console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_INVOICE_ENCLOSURE_DELETE", jsonmaster)
            .subscribe(function (data) {
            // console.log(data);
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this.enclosuretable = data.Table;
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.editenclosue = function (data) {
        //  console.log(data)
        this.enclosuretext = "Update";
        this.pk_Enclid = data.ID,
            this.pk_Ecl_detail_id = data.ACC_ENCLDTLS_ID,
            this.enclose_code = data.INV_ENCLCODE,
            this.enclose_desc = data.INV_DESC,
            this.enclose_number = data.INV_NUMBER;
    };
    //despatch functions
    InvoiceComponent.prototype.despachadd = function () {
        var _this = this;
        if (this.despachcode == "" || this.despachcode == undefined) {
            this._toasterService.toast("warning", "warning", "Select Dispatch Code");
            return false;
        }
        if (this.despach_desc == "" || this.despach_desc == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Dispatch Description");
            return false;
        }
        if (this.despach_no == "" || this.despach_no == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Dispatch Number");
            return false;
        }
        this._loaderService.display(true);
        var jsonmaster = {
            ID: this.pk_Despid,
            INV_NO: this.invoiceid,
            INV_DESPCODE: this.despachcode,
            INV_DESC: this.despach_desc,
            INV_NUMBER: this.despach_no,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACC_DESPDTLS_ID: this.pk_Desp_detail_id,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.Common("Accounts/ACC_invoice_Dispatch_TMPIU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this.despach_table = data.Table;
                _this.despachreset();
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table1[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.despachdelete = function (data) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: data.ID,
            GUID: data.VGUID,
            ACC_DESPDTLS_ID: data.ACC_DESPDTLS_ID,
        };
        this._dataService.getData("Accounts/ACC_INVOICE_dispatch_DELETE", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this.despach_table = data.Table;
                _this._loaderService.display(false);
            }
        });
    };
    InvoiceComponent.prototype.despachreset = function () {
        this.despatchtext = "Add";
        this.despachcode = "",
            this.despach_desc = "",
            this.despach_no = "",
            this.pk_Desp_detail_id = "0",
            this.pk_Despid = "0";
    };
    InvoiceComponent.prototype.despachedit = function (data) {
        // console.log(data)
        this.despatchtext = "Update";
        this.pk_Despid = data.ID,
            this.pk_Desp_detail_id = data.ACC_DESPDTLS_ID,
            this.despachcode = data.INV_DESPCODE,
            this.despach_desc = data.INV_DESC,
            this.despach_no = data.INV_NUMBER;
    };
    //Final Submit 
    InvoiceComponent.prototype.MainInvoice_submit = function () {
        var _this = this;
        //console.log(this.invoiceid)
        if (this.invdate == "" || this.invdate == undefined || this.invdate == null) {
            this._toasterService.toast('warning', 'warning', 'Please enter Invoice Date!');
            return false;
        }
        if (this.AUTHORISEDTOPRINT == "1") {
            this._toasterService.toast("warning", "warning", "You can`t Update this invoice print already taken !");
            return false;
        }
        if (this.chargetable.length == "0") {
            this._toasterService.toast('warning', 'warning', 'Please Fill the Charge Tab Details!');
            return false;
        }
        if (this.jobdatalist.length == "0") {
            this._toasterService.toast('warning', 'warning', 'Please Fill the JobDetails Tab Details!');
            return false;
        }
        if (this.client.split("|")[0] == "") {
            this._toasterService.toast('warning', 'warning', 'Please select client!');
            return false;
        }
        if (this.billaddress.split("|")[0] == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Bill to Address !');
            return false;
        }
        if (this.document == "") {
            this._toasterService.toast('warning', 'warning', 'Please select Document through!');
            return false;
        }
        if (this.no_pkgs == "") {
            this._toasterService.toast('warning', 'warning', 'No of Packages Cannot be left Blank!');
            return false;
        }
        if (this.currency.split("|")[0] != 'CR115') {
            if (this.inv_currate == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter INR Ruppes!');
                return false;
            }
            if (this.inv_currate1 == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter INR Ruppes!');
                return false;
            }
        }
        this._loaderService.display(true);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            INV_NO: this.invno,
            INV_DATE: this.invdate,
            INV_CLIENT: this.client.split("|")[0],
            INV_CLIENT_NM: this.billaddress.split("|")[0],
            INV_SHIPPER: this.document,
            INV_BILLTYPE: this.billtype,
            INV_PKGS: this.no_pkgs,
            INV_TYPEOFPKG: this.pkgs,
            INV_NOOFPCS: this.no_pieces,
            INV_TYPEOFPCS: this.pieces,
            INV_CLIENTREF: this.client_ref,
            INV_WT: this.weight,
            INV_VOL: this.volume,
            INV_HAWBNO: this.master,
            INV_HAWBDT: this.masterdate,
            INV_CARRIER: this.carrier,
            INV_GOODS: this.goods,
            INV_CUR: this.currency.split("|")[0],
            INV_CURINR: "",
            INV_CURRATE: this.inv_currate,
            INV_CURRATE1: this.inv_currate1,
            INV_TAX: "",
            INV_ADVANCE: this.Adv_rec,
            NARRATIONDESC: this.narration,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            SHIPINGBILLNO: this.ship_billno,
            SHIPBILLDT: (this.shipbilldate == undefined) ? "" : this.shipbilldate,
            paydt: this.paybydate,
            INV_TYPE: this.mode,
            CLIENTCONT: this.client_excutive,
            INVSTARTDATE: this.invstartdate
        };
        // console.log(jsonmaster)
        if (this.invoiceid == "0") {
            this._dataService.Common("Accounts/ACC_invoice_INSERT", jsonmaster)
                .subscribe(function (data) {
                //  console.log(data)
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.MainReset();
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                    //this.MainReset();
                    _this._loaderService.display(false);
                }
            });
        }
        else {
            this._dataService.Common("Accounts/ACC_invoice_UPDATE", jsonmaster)
                .subscribe(function (data) {
                //  console.log(data);
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.MainReset();
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                    // this.MainReset();
                    _this._loaderService.display(false);
                }
            });
        }
    };
    //search populate function
    InvoiceComponent.prototype.MainEdit_populate = function () {
        var _this = this;
        var jsonmaster = {
            InvoiceNo: this.queryParamsUserId,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            makerid: this._loginService.getLogin()[0].CMPID,
            vguid: this._loginService.getLogin()[0].GUID
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_INVOICE_Edit_Populate", jsonmaster)
            .subscribe(function (data) {
            // console.log(data);
            if (data.Table[0].STATUS == "100") {
                _this.jobdatalist = data.Table;
                _this.chargetable = data.Table3;
                _this.enclosuretable = data.Table4;
                _this.despach_table = data.Table5;
                _this.goods = data.Table1[0].INV_GOODS;
                _this.masterdate = data.Table1[0].INV_HAWBDT;
                _this.master = data.Table1[0].INV_HAWBNO;
                _this.carrier = data.Table1[0].INV_CARRIER;
                _this.Adv_rec = data.Table1[0].INV_ADVANCE;
                _this.no_pieces = data.Table1[0].INV_NOOFPCS;
                _this.no_pkgs = data.Table1[0].INV_PKGS;
                _this.volume = data.Table1[0].INV_VOL;
                _this.weight = data.Table1[0].INV_WT;
                _this.narration = data.Table1[0].NARRATION;
                _this.billtype = data.Table1[0].INV_BILLTYPE;
                _this.client_ref = data.Table1[0].INV_CLIENTREF;
                _this.inv_currate = data.Table1[0].INV_CURRATE;
                _this.inv_currate1 = data.Table1[0].INV_CURRATE1;
                _this.ship_billno = data.Table1[0].SHIPBILLNO;
                _this.shipbilldate = data.Table1[0].SHIPBILLDT;
                _this.invdate = data.Table1[0].INV_DATE;
                _this.invno = data.Table1[0].INV_NO;
                _this.mode = data.Table1[0].INV_TYPE;
                _this.AUTHORISEDTOPRINT = data.Table1[0].AUTHORISEDTOPRINT;
                if (data.Table1[0].INV_TYPEOFPCS != "") {
                    _this.pieces = data.Table1[0].INV_TYPEOFPCS;
                }
                if (data.Table1[0].INV_TYPEOFPKG != "") {
                    _this.pkgs = data.Table1[0].INV_TYPEOFPKG;
                }
                var datacurrency = [], dataclient = [], datadocument = [];
                if (data.Table1[0].INV_CLIENT != "") {
                    dataclient = _this.table_client.filter(function (code) { return code.EXP_CODE.split("|")[0] === data.Table1[0].INV_CLIENT; })[0];
                    _this.client = dataclient.EXP_CODE;
                }
                _this.fillAddress(_this.client); //data.Table1[0].INV_CLIENT);
                _this.billaddress = data.Table1[0].INV_ADDID + "|" + data.Table1[0].INV_CLIENT + "|" + data.Table1[0].EXP_INVSTATE;
                if (data.Table1[0].INV_CUR != "") {
                    datacurrency = _this.table3_curreny.filter(function (code) { return code.cur_code.split("|")[0] === data.Table1[0].INV_CUR.split("|")[0]; });
                    _this.currency = datacurrency[0].cur_code;
                }
                if (data.Table1[0].INV_SHIPPER != "") {
                    datadocument = _this.table2_document.filter(function (code) { return code.EXP_CODE.split("|")[0] === data.Table1[0].INV_SHIPPER; });
                    _this.document = datadocument[0].EXP_CODE;
                }
                if (_this.currency != 'CR115') {
                    _this.disablegeninvcur = true;
                    _this.disablegencurrate = true;
                    _this.disablegencurrate1 = true;
                }
                else {
                    _this.disablegeninvcur = false;
                    _this.disablegencurrate = false;
                    _this.disablegencurrate1 = false;
                }
                _this.paybydate = (data.Table1[0].PAYBLEBYDT == "") ? "" : _this._dataService.datechnge(data.Table1[0].PAYBLEBYDT);
                _this.billaddress.split('|')[0] = data.Table1[0].INV_ADDID;
                _this._loaderService.display(false);
                if (_this.AUTHORISEDTOPRINT == "1") {
                    _this._toasterService.toast("warning", "warning", "You can`t Update this invoice print already taken !");
                }
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
            }
        });
    };
    InvoiceComponent.prototype.GetCurrencyName = function (data) {
        data = this.table3_curreny.filter(function (code) { return code.cur_code === data; })[0];
        this.currencyname = data.DATATEXTVALUE;
        if (this.currency.split("|")[0] == 'CR115') {
            this.inv_currate = "1";
            this.inv_currate1 = "1";
        }
        else {
            this.inv_currate = "";
            this.inv_currate1 = "1";
        }
    };
    InvoiceComponent.prototype.MasterDateChanged = function (ev) {
        this.masterdate = ev.formatted;
    };
    InvoiceComponent.prototype.shipbilldateChanged = function (ev) {
        this.shipbilldate = ev.formatted;
    };
    InvoiceComponent.prototype.fillAddress = function (expcode) {
        var _this = this;
        this.updated_billaddress = [];
        var datafind = [];
        var data = expcode.split("|")[0];
        datafind = this.table1_billaddress.filter(function (code) { return code.EXP_CODE === data; });
        //   console.log(datafind)
        if (datafind.length == "1") {
            this.updated_billaddress = datafind;
            this.billaddress = datafind[0].DATAVALUEFIELD;
        }
        else if (datafind.length > 1) {
            this.updated_billaddress = datafind;
            this.billaddress = datafind[0].DATAVALUEFIELD;
        }
        else {
            datafind = [];
            this.updated_billaddress = datafind;
            this.billaddress = "";
        }
        var InvMode = this.mode;
        var jobmode;
        if (InvMode == '2' || InvMode == '6') {
            jobmode = "AIR";
        }
        else if (InvMode == '1' || InvMode == '5') {
            jobmode = "SEA";
        }
        else {
            jobmode = InvMode;
        }
        var jsonmaster = {
            clientcode: expcode.split("|")[0],
            invdt: this.invdate,
            mode: jobmode,
            ISPAYBYDT_AIR: expcode.split("|")[1],
            ISPAYBYDT_SEA: expcode.split("|")[2],
            CREDITPERIOD_SEA: expcode.split("|")[3],
            CREDITPERIOD_AIR: expcode.split("|")[4],
            HAWBDT: this.masterdate == undefined ? "" : this.masterdate
        };
        this._dataService.getData("Accounts/ACC_INVOICE_PAYBYDATE_GET", jsonmaster)
            .subscribe(function (data) {
            _this.paybydate = _this._dataService.datechnge(data.Table[0].PAYBYDATE);
        });
    };
    // Narrationarea() {
    //     var textarea = document.querySelector("#autoresizing");
    //     textarea.addEventListener('input', autoResize, false);
    //     function autoResize() {
    //         this.style.height = 'auto';
    //         this.style.height = this.scrollHeight + 'px';
    //     }
    // }
    InvoiceComponent.prototype.close = function () {
        this.showModal_ListJob = false;
    };
    InvoiceComponent.prototype.close1 = function () {
        this.showModal_Remark = false;
    };
    InvoiceComponent.prototype.viewjob = function (Invoiceno) {
        // console.log(Invoiceno)
        var Inv = Invoiceno.target;
        Inv = Inv.innerText;
        // Inv=Inv.replace('</p>','')
        var inv = Inv.trim();
        console.log(inv);
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Invoice-View/' + inv + '/', "Invoice View", toolbar);
    };
    InvoiceComponent.prototype.MainReset = function () {
        this.resetcharges();
        this.resetenclosure();
        this.resetjob();
        this.despachreset();
        this.jobdatalist = [];
        this.chargetable = [];
        this.enclosuretable = [];
        this.despach_table = [];
        this.goods = "";
        this.masterdate = "";
        this.master = "";
        this.carrier = "";
        this.Adv_rec = "";
        this.no_pieces = "";
        this.no_pkgs = "";
        this.volume = "";
        this.weight = "";
        this.narration = "";
        this.billtype = "";
        this.client_ref = "";
        this.inv_currate = "";
        this.inv_currate1 = "";
        this.ship_billno = "";
        this.shipbilldate = "";
        ///  this.invdate =  ""
        this.invno = "";
        this.mode = "";
        this.client = "";
        this.billaddress = "";
        this.pieces = "";
        this.pkgs = "";
        this.updated_billaddress = [];
        this.table2_document;
        var jsonmaster = {
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._dataService.getData("Accounts/ACC_INVOICE_NG_RESET", jsonmaster)
            .subscribe(function (data) {
            //console.log(data);
            if (data.Table[0].STATUS == "100") {
            }
        });
        this._router.navigate(['/accounts/transaction/invoice/general/ ']);
    };
    InvoiceComponent.prototype.fn_calculatepaybydate = function (expcode) {
        var _this = this;
        var InvMode = this.mode;
        var jobmode;
        if (InvMode == '2' || InvMode == '6') {
            jobmode = "AIR";
        }
        else if (InvMode == '1' || InvMode == '5') {
            jobmode = "SEA";
        }
        else {
            jobmode = InvMode;
        }
        var jsonmaster = {
            clientcode: expcode.split("|")[0],
            invdt: this.invdate,
            mode: jobmode,
            ISPAYBYDT_AIR: expcode.split("|")[1],
            ISPAYBYDT_SEA: expcode.split("|")[2],
            CREDITPERIOD_SEA: expcode.split("|")[3],
            CREDITPERIOD_AIR: expcode.split("|")[4],
            HAWBDT: this.masterdate == undefined ? "" : this.masterdate
        };
        this._dataService.getData("Accounts/ACC_INVOICE_PAYBYDATE_GET", jsonmaster)
            .subscribe(function (data) {
            _this.paybydate = _this._dataService.datechnge(data.Table[0].PAYBYDATE);
        });
    };
    InvoiceComponent.prototype.InvoiceDateChanged = function (ev) {
        this.invdate = ev.formatted;
        if (this.client != '' || this.client != "") {
            this.fn_calculatepaybydate(this.client);
        }
        else {
            this.paybydate = new Date();
            this.paybydate = this._dataService.datechnge(this.paybydate);
        }
        //console.log(ev)
    };
    InvoiceComponent.prototype.fn_CalPayByDtae = function (d) {
        //console.log(d)
        var ClientValue = d.split("|");
        this.CLIENTCODE = ClientValue[0];
        this.ISPAYBYDT_AIR = ClientValue[1];
        this.ISPAYBYDT_SEA = ClientValue[2];
        this.CREDITPERIOD_SEA = ClientValue[3];
        this.CREDITPERIOD_AIR = ClientValue[4];
        var InvMode = this.mode;
        if (InvMode == '2' || InvMode == '6') {
            this.HDMODE = "AIR";
        }
        else if (InvMode == '1' || InvMode == '5') {
            this.HDMODE = "SEA";
        }
        else {
            this.HDMODE = "";
        }
        this.INVDATE = this.invdate;
        this.HAWBDATE = this.masterdate;
        if (this.HAWBDATE != '' && this.HDMODE == 'AIR') {
            var dtStr = this.HAWBDATE;
        }
        else {
            var dtStr = this.INVDATE;
        }
        var dtCh = "/";
        // var daysInMonth = DaysArray(12)
        var pos1 = dtStr.indexOf(dtCh);
        var pos2 = dtStr.indexOf(dtCh, pos1 + 1);
        var strDay = dtStr.substring(0, pos1);
        var strMonth = dtStr.substring(pos1 + 1, pos2);
        var strYear = dtStr.substring(pos2 + 1);
        var strYr = strYear;
        if (strDay.charAt(0) == "0" && strDay.length > 1)
            strDay = strDay.substring(1);
        if (strMonth.charAt(0) == "0" && strMonth.length > 1)
            strMonth = strMonth.substring(1);
        for (var i = 1; i <= 3; i++) {
            if (strYr.charAt(0) == "0" && strYr.length > 1)
                strYr = strYr.substring(1);
        }
        var month = parseInt(strMonth);
        var day = parseInt(strDay);
        var year = parseInt(strYr);
        dtStr = month + "/" + day + "/" + year;
        if (this.HDMODE == 'AIR' && this.ISPAYBYDT_AIR == '1') {
            if (this.CREDITPERIOD_AIR != '0') {
                var Mydate = new Date(dtStr);
                Mydate.setDate(Mydate.getDate() + parseInt(this.CREDITPERIOD_AIR));
                //Mydate.setDate = DateAdd(mydate, "D", parseInt(CREDITPERIOD_AIR));
                var Air_date = Mydate.getDate();
                var Air_month = Mydate.getMonth();
                Air_month++;
                var Air_year = Mydate.getFullYear();
                var Air_date1 = "", Air_month1 = "";
                if (Air_date <= 9)
                    Air_date1 = '0' + Air_date;
                if (Air_month <= 9)
                    Air_month1 = '0' + Air_month;
                if (Air_month > 12) {
                    Air_month1 = '01';
                    Air_year = year + 1;
                }
                this.paybydate = Air_date1 + "/" + Air_month1 + "/" + Air_year;
                // console.log(this.paybydate)
            }
            else {
                var month1 = "";
                if (day >= 1 && day <= 15) {
                    month = month + 1;
                    if (month <= 9) {
                        month1 = '0' + month;
                    }
                    if (month > 12) {
                        month1 = '01';
                        year = year + 1;
                    }
                    this.paybydate = '10' + "/" + month1 + "/" + year;
                    //console.log(this.paybydate)
                }
                else if (day >= 16 && day <= 31) {
                    month = month + 1;
                    if (month <= 9) {
                        month1 = '0' + month;
                    }
                    if (month > 12) {
                        month1 = '01';
                        year = year + 1;
                    }
                    this.paybydate = '25' + "/" + month1 + "/" + year;
                    //   console.log( this.paybydate)
                }
            }
            //     document.getElementById("txtPayBydt").value = PAYBYDATE;
            //    document.getElementById("txtPayBydt").readOnly = true;
            //     document.getElementById("imgPayBydt").style.visibility = "hidden";
            //     document.getElementById("txtPayBydt").style.backgroundColor = "whitesmoke";
        }
        else if (this.HDMODE == 'SEA' && this.ISPAYBYDT_SEA == '1') {
            var Mydate = new Date(dtStr);
            Mydate.setDate(Mydate.getDate() + parseInt(this.CREDITPERIOD_SEA));
            var Sea_date1 = "", Sea_month1 = "";
            var Sea_date = Mydate.getDate();
            var Sea_month = Mydate.getMonth();
            Sea_month++;
            var Sea_year = Mydate.getFullYear();
            if (Sea_date <= 9)
                Sea_date1 = '0' + Sea_date;
            if (Sea_month <= 9)
                Sea_month1 = '0' + Sea_month;
            if (Sea_month > 12) {
                Sea_month1 = '01';
                Sea_year = Sea_year + 1;
            }
            this.paybydate = Sea_date1 + "/" + Sea_month1 + "/" + Sea_year;
            // console.log( this.paybydate)
            // document.getElementById("txtPayBydt").value = PAYBYDATE;                         
            // document.getElementById("txtPayBydt").readOnly = true;
            // document.getElementById("imgPayBydt").style.visibility = "hidden";
            // document.getElementById("txtPayBydt").style.backgroundColor = "whitesmoke";
        }
        else {
            this.paybydate = this.datePipe.transform(this.InvoiceDate, 'dd/MM/yyyy');
            // console.log( this.paybydate)
            // document.getElementById("txtPayBydt").value = PAYBYDATE;                           
            // document.getElementById("txtPayBydt").readOnly = false;
            // document.getElementById("imgPayBydt").style.visibility = "visible";
            // document.getElementById("txtPayBydt").style.backgroundColor = "white";
        }
    };
    InvoiceComponent.prototype.PayByDateDateChanged = function (ev) {
        this.paybydate = ev.formatted;
        //console.log(ev)
    };
    InvoiceComponent.prototype.TextareaValueChange = function (ev) {
        this.narration = ev.target.value;
    };
    InvoiceComponent.prototype.getexchangerate = function (ev) {
        if (ev == "CR115") {
            this.excrate = "1.00";
            this.disableexrate = true;
        }
        else {
            this.excrate = "";
            this.disableexrate = false;
        }
        if (this.currency.split("|")[0] == this.currencytype) {
            this.excrate = this.inv_currate;
            this.disableexrate = true;
        }
    };
    InvoiceComponent.prototype.Calcamount = function () {
        var data = this.qty * this.rateperqty;
        var exchage = 1;
        if (this.currencytype == "CR115") {
            exchage = data * 1;
        }
        else {
            exchage = data * this.excrate;
        }
        var final1 = exchage.toFixed(3);
        this.taxamount_G_Inr = final1;
    };
    InvoiceComponent.prototype.resetCurcharges = function () {
        var _this = this;
        this._loaderService.display(true);
        if (confirm('R u sure you want to modify the ex rates?' + "\n" + 'Click  ok to delete other than INR currency entries and click cancel nothing to modify')) {
            // if(confirm('this will delete all charges for currency ' + this.currency.split("|")[1] + ' and you can modify exrate in General')){
            var jsonmaster = {
                CMPID: this._loginService.getLogin()[0].CMPID,
                VGUID: this._loginService.getLogin()[0].GUID,
                CURRENCY: this.currency.split("|")[0],
            };
            //  console.log(jsonmaster)
            this._dataService.getData("Accounts/ACC_INVOICE_RESET_CHRGCURRENCY", jsonmaster)
                .subscribe(function (data) {
                //console.log(data);
                if (data.Table1[0].STATUS.split("#")[0] == "100") {
                    _this.chargetable = data.Table;
                    _this.disablegeninvcur = false;
                    _this.disablegencurrate = false;
                    _this.disablegencurrate1 = false;
                    _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                    _this._loaderService.display(false);
                }
            });
        }
        // }
        this._loaderService.display(false);
    };
    InvoiceComponent.prototype.GetAcctname = function (event) {
        this.codelistActt = this.table9_account.filter(function (code) { return code.ACCTCODE.split("|")[0] === event.split("|")[0]; });
        //this.accountname=event.target.options[event.target.options.selectedIndex].text;
        this.accountname = this.codelistActt[0].ACCTNAME;
        //    if((this.jobno.substr(7, 1) =="5" || this.jobno.substr(7, 1) =="6")
        //    && ( this.codelistActt[0].ACCTCODE.split("|")[0]=="G101610"))
        //    {
        //        alert('As per GST Notification' + "\n" + ' Import ' + this.accountname + ' can not be taxable !');
        //        this.tax="N";
        //        this.disabletax=true;
        //        return false;
        //    }
        //    else{
        //     this.disabletax=false;
        //    }
        if (this.charge.split("|")[0] == "8900") {
            this.desc1 = event.split("|")[1];
        }
    };
    InvoiceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"] }
    ]; };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./general-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/invoice/general-invoice.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
            styles: ["\n    // .form-control {\n    //    padding:0px !important;\n    //    margin:0px !important;\n    //    //height:20px !important;\n    // }\n    a:hover,a:focus{\n        text-decoration: none;\n        outline: none;\n    }\n    .tab .nav-tabs {\n        border-bottom:0 none;\n    }\n    .tab .nav-tabs li{\n        margin-right: 10px;\n    }\n    .tab .nav-tabs li a{\n        position: relative;\n        padding: 4px;\n        color: #fff;\n        font-size: 11px;\n        z-index: 1;\n        font-family:verdana;\n        font-weight:bold\n    }\n    .tab .nav-tabs li a:hover{\n        background:transparent;\n        border:1px solid transparent;\n        color: #444;\n    }\n     .tab .nav-tabs li a:before{\n        content: \"\";\n        width:100%;\n        height:100%;\n        position:absolute;\n        bottom: 5px;\n        left:-1px;\n        font-size:11px;\n  \n        background-color: #379b50;\n        border: 1px solid #d3d3d3;\n        border-bottom: 0px none;\n        border-radius: 10px 10px 0 0;\n        transform-origin: left center 0;\n        transform: perspective(3px) rotateX(5deg);\n        z-index:-1;\n    } \n    .tab .nav-tabs li a.active:before{\n        background: #fff;\n    }\n    .tab .nav-tabs li a.active,\n    .tab .nav-tabs li a.active:focus,\n    .tab .nav-tabs li a.active:hover{\n        border:1px solid transparent;\n        background:transparent;\n        color: #212529;\n        z-index: 2;\n    }\n    // .tab-content .tab-pane {\n    //     padding-bottom: 0rem !important;\n    // }\n    #autoresizing { \n        display: block; \n        overflow: hidden; \n        resize: none; \n    } \n    \n    \n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/invoice/invoice.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/accounts/transaction/invoice/invoice.module.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _invoice_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.routing */ "./src/app/accounts/transaction/invoice/invoice.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _general_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-invoice.component */ "./src/app/accounts/transaction/invoice/general-invoice.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _general_invoice_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-invoice-search.component */ "./src/app/accounts/transaction/invoice/general-invoice-search.component.ts");
/* harmony import */ var _proforma_invoice_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./proforma-invoice-list.component */ "./src/app/accounts/transaction/invoice/proforma-invoice-list.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _proformainvfilterpipe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./proformainvfilterpipe.pipe */ "./src/app/accounts/transaction/invoice/proformainvfilterpipe.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { GeneralComponent } from './general/general.component';
var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_invoice_routing__WEBPACK_IMPORTED_MODULE_6__["InvoiceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_13__["OrderModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
            declarations: [
                _general_invoice_component__WEBPACK_IMPORTED_MODULE_9__["InvoiceComponent"],
                _general_invoice_search_component__WEBPACK_IMPORTED_MODULE_11__["GeneralInvoiceSearchComponent"],
                _proforma_invoice_list_component__WEBPACK_IMPORTED_MODULE_12__["ProformaInvoicePrintList"],
                _proformainvfilterpipe_pipe__WEBPACK_IMPORTED_MODULE_15__["ProformaInvfilterpipe"]
                //GeneralComponent
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/invoice/invoice.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/accounts/transaction/invoice/invoice.routing.ts ***!
  \*****************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-invoice.component */ "./src/app/accounts/transaction/invoice/general-invoice.component.ts");
/* harmony import */ var _general_invoice_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-invoice-search.component */ "./src/app/accounts/transaction/invoice/general-invoice-search.component.ts");
/* harmony import */ var _proforma_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proforma-invoice-list.component */ "./src/app/accounts/transaction/invoice/proforma-invoice-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { GeneralComponent } from './general/general.component';


var routes = [
    {
        path: '',
        data: {
            title: 'Invoice'
        },
        children: [
            { path: 'general/:invoiceno', component: _general_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"], data: { title: 'Home' } },
            { path: 'invoicesearch', component: _general_invoice_search_component__WEBPACK_IMPORTED_MODULE_3__["GeneralInvoiceSearchComponent"], data: { title: 'Search' }, pathMatch: 'ful' },
            { path: 'proformainvoice', component: _proforma_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__["ProformaInvoicePrintList"], data: { title: 'Search' }, pathMatch: 'ful' },
        ]
    }
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/invoice/proforma-invoice-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/accounts/transaction/invoice/proforma-invoice-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProformaInvoicePrintList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProformaInvoicePrintList", function() { return ProformaInvoicePrintList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProformaInvoicePrintList = /** @class */ (function () {
    function ProformaInvoicePrintList(_router, _dataService, _auth, _toasterService, _loginService, modalService, loaderService, orderPipe, filterPipe) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.orderPipe = orderPipe;
        this.filterPipe = filterPipe;
        this.invoicedata = [];
        this.newArray = [];
        this.order = 'CLIENTNAME';
        this.reverse = false;
        this.PageActual = 1;
        this.inv_jobno = "";
        this.inv_pkgs = "";
        this.inv_grwt = "";
        this.INV_NO = "";
        this.INV_DATE = "";
        this.CLIENTNAME = "";
        this.BILLTO_INVADDR = "";
        this.INV_BILLTYPE = "";
        this.CUR_NAME = "";
        this.NARRATION = "";
        this.INV_GOODS = "";
        this.INV_WT = "";
        this.INV_VOL = "";
        this.INV_TAX = "";
        this.PAYBLEBYDT = "";
        this.INV_NOOFPCS = "";
        this.INV_PKGS = "";
        this.INV_HAWBDT = "";
        this.INV_HAWBNO = "";
        this.INV_CARRIER = "";
        this.INV_ADVANCE = "";
        this.INV_CLIENTREF = "";
        this.INV_CURRATE = "";
        this.datatabl_1 = [];
        this.datatabl_2 = [];
        this.datatabl_3 = [];
        this.datatabl_4 = [];
        this.datatabl_5 = [];
        this.datatabl_6 = [];
        this.datatabl_7 = [];
        this.datatabl_8 = [];
        this.datatabl_9 = [];
        this.datatabl_10 = [];
        this.sortedCollection = orderPipe.transform(this.invoicedata, this.invoicedata.CLIENTNAME);
    }
    ProformaInvoicePrintList.prototype.ngOnInit = function () {
        // console.log(this._loginService.getLogin()[0])
        this.loaderService.display(true);
        this.verifyPermission('422', 'View');
        this.getdataforauth();
    };
    ProformaInvoicePrintList.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    ProformaInvoicePrintList.prototype.getdataforauth = function () {
        var _this = this;
        var jsonmaster = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            RoleType: (this._loginService.getLogin()[0].ROLETYPE == '') ? 'USER' : this._loginService.getLogin()[0].ROLETYPE,
            Type: "II"
        };
        this._dataService.getData("Accounts/ACC_invoice_Proforma_Print_list", jsonmaster)
            .subscribe(function (data) {
            console.log(data);
            _this.invoicedata = data.Table;
            _this.loaderService.display(false);
        });
    };
    ProformaInvoicePrintList.prototype.getCheckboxValues = function (event, data) {
        var index = this.newArray.findIndex(function (x) { return x.inoiceno == data; });
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
    ProformaInvoicePrintList.prototype.authorisedata = function () {
        var _this = this;
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One Invoice No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var adddata = {
            NOSTR: output1,
            CMPID: this._loginService.getLogin()[0].CMPID,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            CHKAuthorityFlag: "1",
        };
        console.log(adddata);
        this._dataService.Common("Accounts/ACC_invoice_Authorisation_Update", adddata)
            .subscribe(function (data) {
            if (data.Table1[0].STATUSMSG != "") {
                _this._toasterService.toast('success', 'success', data.Table1[0].STATUSMSG);
                _this.getdataforauth();
            }
        });
    };
    ProformaInvoicePrintList.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    ProformaInvoicePrintList.prototype.setOrderDate = function (value) {
        //this.invoicedata.sort((x, y) => +new Date(x.INV_CRTDT) - +new Date(y.INV_CRTDT));
        //this.invoicedata.sort((a, b) => b.INV_CRTDT - a.INV_CRTDT)
        this.invoicedata.filter = value;
        this.order = value;
    };
    ProformaInvoicePrintList.prototype.checkAll = function (ev) {
        this.newArray = [];
        this.invoicedata.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.invoicedata.length; i++) {
                var obj = {
                    inoiceno: this.invoicedata[i].INV_CRTNO
                };
                this.newArray.push(obj);
            }
        }
        else {
            this.newArray = [];
        }
    };
    ProformaInvoicePrintList.prototype.abortdata = function () {
        this.invoicedata.forEach(function (obj) {
            obj.Checked = false;
        });
        this.checkbox = false;
        this.newArray = [];
    };
    ProformaInvoicePrintList.prototype.invoiceviewdata = function (Invoiceno) {
        // if(Invoiceno ==''||Invoiceno==undefined || Invoiceno.length < 15){
        //   alert("Enter 15 digit Invoice No !")
        //   return false
        // }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-ProformaInvoice-Print/' + Invoiceno + '/', "Invoice View", toolbar);
    };
    ProformaInvoicePrintList.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"] },
        { type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"] }
    ]; };
    ProformaInvoicePrintList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./proforma-invoice-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/invoice/proforma-invoice-list.component.html"),
            styles: ["\n  .ddddd  th {\n    border: 2px solid #c2cfd6 ;\n  }\n  th {\n    background: white;\n    position: sticky;\n    top: 0; /* Don't forget this, required for the stickiness */\n    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);\n  }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]])
    ], ProformaInvoicePrintList);
    return ProformaInvoicePrintList;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/invoice/proformainvfilterpipe.pipe.ts":
/*!****************************************************************************!*\
  !*** ./src/app/accounts/transaction/invoice/proformainvfilterpipe.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: ProformaInvfilterpipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProformaInvfilterpipe", function() { return ProformaInvfilterpipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProformaInvfilterpipe = /** @class */ (function () {
    function ProformaInvfilterpipe() {
    }
    ProformaInvfilterpipe.prototype.transform = function (value, searchString) {
        if (!searchString) {
            return value;
        }
        return value.filter(function (it) {
            var TRNS_TYPE = it.TRNS_TYPE.toLowerCase().includes(searchString.toLowerCase());
            var INV_CRTNO = it.INV_CRTNO.toString().includes(searchString.toLowerCase());
            var INV_CRTDT = it.INV_CRTDT.toLowerCase().includes(searchString.toLowerCase());
            var CREATEDBY = it.CREATEDBY.toLowerCase().includes(searchString.toLowerCase());
            var INV_CRT_DAT = it.INV_CRT_DAT.toLowerCase().includes(searchString.toLowerCase());
            var CLIENTNAME = it.CLIENTNAME.toLowerCase().includes(searchString.toLowerCase());
            var TOTAL_AMT = it.TOTAL_AMT.toString().includes(searchString);
            return (TRNS_TYPE + INV_CRTNO + INV_CRTDT + CREATEDBY + INV_CRT_DAT + CLIENTNAME + TOTAL_AMT);
        });
    };
    ProformaInvfilterpipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'proformainvfilterpipe'
        })
    ], ProformaInvfilterpipe);
    return ProformaInvfilterpipe;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    //edocumentIp: 'http://109.15.43.138/'
    edocumentIp: 'http://81.250.195.254/'
};


/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module.js.map