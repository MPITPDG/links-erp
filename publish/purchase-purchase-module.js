(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase-purchase-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/mawb-purchase.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/purchase/mawb-purchase.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>MAWB</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\"> </div>\r\n        <div class=\"col-sm-12 col-md-8 col-lg-8\">\r\n            <div class=\"tab\" role=\"tabpanel\">\r\n                <div >\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" id=\"data-step1\" data-toggle=\"tab\" href=\"#step1\">MAWB </a>\r\n                        </li>\r\n                        <li class=\"nav-item\" >\r\n                            <a class=\"nav-link disabled\" id=\"data-step2\"  data-toggle=\"tab\" href=\"#step2\"> PURCHASE </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"tab-content\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"step1\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                            <tr  >\r\n                                <td class=\"col-form-span-heading\"  colspan=\"4\">\r\n                                    <b> General Details</b>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                              \r\n                            </tr>\r\n                            <tr>\r\n            \r\n                                <td><span class=\"col-form-span-label\"><b>Mawb No</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td> <input [(ngModel)]=\"mawbno\" type=\"text\" class=\"form-control width150\" (change)=\"fn_Validate_MawbNo(mawbno)\" [maxlength]=\"30\" \r\n                                        > </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\r\n                                            class=\"col-form-span-error\">*</span></td>\r\n                                <td>\r\n                                        <my-date-picker name=\"purchasedate_step1\" [options]=\"myDatePickerOptionsInv\"\r\n                                            class=\"form-control width170\" (dateChanged)=\"PurchaseDate_Step1Changed($event)\"\r\n                                            [selDate]=\"purchasedate_step1\"></my-date-picker>\r\n                                        </td>\r\n                            </tr>\r\n                            <tr  >\r\n                                <td class=\"col-form-span-heading\"   colspan=\"4\">\r\n                                    <b> Supplier Details</b>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td colspan=\"3\">\r\n                                    <!-- <select class=\"form-control width350\"  [(ngModel)]=\"staff\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of Stafflist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                                    </select> -->\r\n                                    <ng-select [items]=\"supplierlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                                        [(ngModel)]=\"step1suppliername\" (ngModelChange)=\"GetStep1SupplierName($event)\" class=\"custom \"\r\n                                        placeholder=\"--Select--\">\r\n                                    </ng-select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td colspan=\"3\">\r\n                                    <select class=\"form-control\" [(ngModel)]=\"billaddress_step1\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of billaddressfilter_step1\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}\r\n                                        </option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                             \r\n                                    <div style=\"display: flex;float: center;\" >&nbsp;&nbsp;&nbsp;\r\n                                        <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl_step1}}</b> </span>\r\n                                        <span class=\"col-form-span-label\"> <input type=\"checkbox\"   \r\n                                              [(ngModel)]=\"chkIsTDS_step1\"  [disabled]='disablecheckbox'\r\n                                                /> </span>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr >\r\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                    <b>Accounts Details</b>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span\r\n                                    class=\"col-form-span-error\">*</span></td>\r\n                                <td colspan=\"3\">\r\n                                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                                        (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName_step1\" class=\"custom \"\r\n                                        placeholder=\"--Select--\">\r\n                                    </ng-select>\r\n                                   \r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span>\r\n                                </td>\r\n                                <td> <input [(ngModel)]=\"AcctAmount_step1\" OnlyNumber=\"true\" type=\"text\" [disabled]=\"disableamt\" class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n                                        <td><span class=\"col-form-span-label\"><b> Deduction</b> </span><span\r\n                                            class=\"col-form-span-error\">*</span>\r\n                                    </td>\r\n                                    <td> <input [(ngModel)]=\"Deduction_step1\" OnlyNumber=\"true\" type=\"text\"  [disabled]=\"disablededuction\" class=\"form-control width150\"\r\n                                            maxlength=\"40\"> </td>\r\n                            </tr>\r\n                           \r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span>\r\n                                </td>\r\n                                <td style=\" display: flex; \">\r\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable_step1\"   >\r\n                                        <option value=\"\">--Please select--</option>\r\n                                        <option value=\"Y\">Y</option>\r\n                                        <option value=\"N\">N</option>\r\n                                       </select>\r\n                \r\n                            </td>\r\n                                <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span><span\r\n                                    class=\"col-form-span-error\">*</span></td>\r\n                                <td style=\" display: flex; \">\r\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable_step1\"   >\r\n                                            <option  value=\"\" >-- Please Select --</option>\r\n                                            <option value=\"1\">Y</option>\r\n                                            <option value=\"0\" >N</option>\r\n                                            <option value=\"2\" >RCM</option>\r\n                                       </select>\r\n                                </td>\r\n            \r\n                            </tr>\r\n                         <tr>\r\n                                <td colspan=\"4\" class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrdstep1()\"> <span\r\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\r\n                                            {{txtchild}}</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                            (click)=\"Resetchildrcrdstep1();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                </td>\r\n                            </tr>\r\n            \r\n                            <tr>\r\n            \r\n                                <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"NetTotal_step1\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n                                <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"NetAmount_step1\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\r\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"4\">\r\n                                    <div class=\"row xyscroll\">\r\n                                        <div class=\"col-12\">\r\n                                        <table class=\"table table-responsive-sm table-bordered\">\r\n                                            <thead>\r\n                                                <tr class=\"bakgrdliteBlue\">\r\n                                                    <th class=\"col-form-span-label\"></th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Tds</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Gst</th>\r\n                                                   \r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody >\r\n                                                <tr *ngFor=\"let obj of Accountlist_step1\">\r\n                                                    <td class=\"centerlabel\">\r\n                                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecdstep1(obj.ID)\"></i>\r\n                                                        &nbsp;\r\n                                                       <i class=\"fa fa-trash\" (click)=\"deletechildrecdstep1(obj.ID)\"></i> \r\n                                                    </td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.ACCOUNT_NAME}} </span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>                                    \r\n                                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.PUR_TDS}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"4\" class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"   [disabled]=\"buttonStatus\" (click)=\"Add_Mainstep1()\"> <span\r\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                            (click)=\"RestMain_step1();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                </td>\r\n                            </tr>\r\n                      \r\n                        </table>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div role=\"tabpanel \" class=\"tab-pane\" id=\"step2\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                            <tr  >\r\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                    <b> General Details</b>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n            \r\n                                <td><span class=\"col-form-span-label\"><b>Purchase No</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td> <input [(ngModel)]=\"PurchaseNo_step2\" type=\"text\" class=\"form-control width150\" [maxlength]=\"30\" \r\n                                        [disabled]=\"true\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td style=\"text-align:left ;\">              \r\n                                    <my-date-picker name=\"purchasedate_step2\" [options]=\"myDatePickerOptionsInv\" [disabled]='disablepurchasedate_step2'\r\n                                        class=\"width170\" (dateChanged)=\"PurchaseDate_Step2Changed($event)\" [selDate]=\"purchasedate_step2\" ></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                                <!-- <td colspan=\"3\"> <input [(ngModel)]=\"Narration_step2\" type=\"text\" class=\"form-control\"\r\n                                        [maxlength]=\"4000\"> </td> -->\r\n                                        <td colspan=\"3\">\r\n                                            <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\r\n                                             placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"Narration_step2\"></textarea>\r\n                                               </td>\r\n                            </tr>\r\n                            <tr  >\r\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                    <b>Supplier Details</b>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td colspan=\"3\">                      \r\n                                    <ng-select [items]=\"supplierlist\" disabled bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\r\n                                        [(ngModel)]=\"suppliername\" (ngModelChange)=\"GetSupplierName($event)\" class=\"custom\"\r\n                                        placeholder=\"--Select--\">\r\n                                    </ng-select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td colspan=\"3\">\r\n                                    <select class=\"form-control\" disabled [(ngModel)]=\"billaddress\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of billaddressfilter\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}\r\n                                        </option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n            \r\n                                <td><span class=\"col-form-span-label\"><b>Inv No</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td> <input [(ngModel)]=\"InvNo\" type=\"text\"  class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Inv Date</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td style=\"text-align: left;\">\r\n                                    <my-date-picker name=\"InvDate\" [options]=\"myDatePickerOptions\" class=\" width170\"\r\n                                        [(ngModel)]=\"InvDate\"></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n            \r\n                                <td><span class=\"col-form-span-label\"><b>Bill Received On</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td style=\"text-align: left;\">\r\n                                    <my-date-picker name=\"BillReceive\" [options]=\"myDatePickerOptions\" class=\"width170\"\r\n                                        [(ngModel)]=\"BillReceive\"></my-date-picker>\r\n                                </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Due Date</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td style=\"text-align: left;\">\r\n                                    <my-date-picker name=\"DueDate\" [options]=\"myDatePickerOptions\" class=\"width170\"\r\n                                        [(ngModel)]=\"DueDate\"></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                             \r\n                                    <div style=\"display: flex;float: left;\" >\r\n                                        <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl_step2}}</b> </span>\r\n                                        <span class=\"col-form-span-label\"> <input type=\"checkbox\"   \r\n                                              [(ngModel)]=\"chkIsTDS_step2\"  [disabled]='disablecheckbox'\r\n                                                /> </span>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <!-- <tr  class=\"trheader\">\r\n                                <td class=\"col-form-span-label\" colspan=\"2\">\r\n                                    <b> Passing Details</b>\r\n                                </td>\r\n                                <td class=\"col-form-span-heading\" colspan=\"2\">\r\n            \r\n                                    <div style=\"display: flex;\">\r\n                                        <span class=\"col-form-span-label\"><b>Passed&nbsp;&nbsp;</b> </span>\r\n                                        <span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"IsPassed\"\r\n                                                (change)=\"changeEvent($event)\" /> </span>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Passed By</b> </span></td>\r\n                                <td>\r\n                                    <select class=\"form-control width150\" [(ngModel)]=\"passedby\" [disabled]='togglepassedby'>\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of PassedBylist\" value={{d.CMPID}}>{{d.CMP_USERNAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Passed Amount</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td> <input [(ngModel)]=\"PassedAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglepamount'\r\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Invoice Amount</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td> <input [(ngModel)]=\"InvoiceAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='toggleinvamount'\r\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Voucher No</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span></td>\r\n                                <td> <input [(ngModel)]=\"VoucherNo\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglevno'\r\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\r\n            \r\n                            </tr> -->\r\n                            <tr >\r\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                                    <b>Accounts Details</b>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span></td>\r\n                                <td colspan=\"3\">                   \r\n                                    <ng-select [items]=\"AccountNameStep2List\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                                        (ngModelChange)=\"GetActName_Step2($event)\" [(ngModel)]=\"AccountName_step2\" class=\"custom\"\r\n                                        placeholder=\"--Select--\">\r\n                                    </ng-select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Item</b> </span></td>\r\n                                <td colspan=\"3\">\r\n                                    <ng-select [items]=\"Itemslist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item_step2\"\r\n                                        class=\"custom\" placeholder=\"--Select--\">\r\n                                    </ng-select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span>\r\n                                </td>\r\n                                <td style=\" display: flex; \">\r\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable_step2\"   >\r\n                                        <option value=\"\">--Please select--</option>\r\n                                        <option value=\"Y\">Y</option>\r\n                                        <option value=\"N\">N</option>\r\n                                       </select>\r\n                \r\n                            </td>\r\n                                <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span></td>\r\n                                <td style=\" display: flex; \">\r\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable_step2\"   >\r\n                                            <option  value=\"\" >-- Please Select --</option>\r\n                                            <option value=\"1\">Y</option>\r\n                                            <option value=\"0\" >N</option>\r\n                                            <option value=\"2\" >RCM</option>\r\n                                       </select>\r\n                                </td>\r\n            \r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span>\r\n                                </td>\r\n                                <td> <input [(ngModel)]=\"Amount_step2\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"Deduction_step2\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n            \r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\r\n                                        class=\"col-form-span-error\">*</span>\r\n                                </td>\r\n                                <td> <input [(ngModel)]=\"JobNo_step2\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"actpassedamount_step2\" type=\"text\"  disabled=\"true\"\r\n                                        class=\"form-control width150\" maxlength=\"40\">\r\n                                </td>\r\n            \r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                                <td colspan=\"3\">\r\n                                    <input [(ngModel)]=\"ActNarration_step2\" type=\"text\" [maxlength]=\"800\" class=\"form-control\">\r\n                                </td>\r\n                            </tr>\r\n            \r\n                            <tr>\r\n                                <td colspan=\"4\" class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrdstep2()\" [disabled]='disablechildaddbtn'> <span\r\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\r\n                                            {{txtchild}}</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\" [disabled]='disablechildresetbtn'> <span class=\"col-form-span-label\"\r\n                                            (click)=\"Resetchildrcrdstep2();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"  [disabled]='disabletdsbtn'> <span class=\"col-form-span-label\"\r\n                                            (click)=\" !disabletdsbtn && OpenTdsModal();\"><i class=\"fa fa-dot-circle-o\"></i> Cal TDS</span></button>\r\n                                     <button class=\"btn btn-sm btn-danger\" type=\"reset\"  [disabled]='disableresetbtn'> <span class=\"col-form-span-label\"\r\n                                            (click)=\"!disableresetbtn && ResetTDS()\"><i class=\"fa fa-ban\"></i> Reset TDS</span></button>        \r\n                                </td>\r\n                            </tr>\r\n                          \r\n                            <tr>\r\n            \r\n                                <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"NetAmt_step2\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\r\n                                        maxlength=\"40\"> </td>\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n            \r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"NetAmount_step2\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\r\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                                <td> <input [(ngModel)]=\"Netdeduction_step2\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\r\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\r\n                            </tr>\r\n                             <tr>\r\n                                <td colspan=\"6\">\r\n                                    <div class=\"row xyscroll\" style=\"overflow-y: auto; width:670px\">\r\n                                        <div class=\"col-12\">\r\n                                        <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist_step2.length>0\" style=\"width:100%\">\r\n                                            <thead>\r\n                                                <tr class=\"bakgrdliteBlue\">\r\n                                                    <th class=\"col-form-span-label\"></th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">TDS</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">GST</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody *ngIf=\"Accountlist_step2.length>0\">\r\n                                                <tr *ngFor=\"let obj of Accountlist_step2\">\r\n                                                    <td class=\"centerlabel\">\r\n                                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecdstep2(obj.ID)\"></i>\r\n                                                        &nbsp;\r\n                                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecdstep2(obj.ID,obj.IS_NOT_EDIT_ABLE)\"></i>\r\n                                                    </td>\r\n                                                    <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\"> </span>\r\n                                                    </td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.PUR_TDS}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                                    <td><span *ngIf=\"obj.CLIENT=='G100741'\" class=\"col-form-span-label\" [innerHtml]=\"obj.NARRATION\"></span>\r\n                                                        <span *ngIf=\"obj.CLIENT!='G100741'\" class=\"col-form-span-label\">{{obj.NARRATION}}</span></td> \r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr> \r\n                            <tr>\r\n                                <td colspan=\"4\" class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"supplier_validation()\"> <span\r\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                            (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                </td>\r\n                            </tr>\r\n                      \r\n            \r\n                        </table>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-2 col-lg-8\"> </div>\r\n\r\n    </div>\r\n    </div>\r\n    <div class=\"modal\" [style.display]=\"showModal_TDS ? 'block' : 'none' \"  >\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"width: 700px;\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"card-header formheading\">\r\n                    <!-- <h5 class=\"modal-title\">TDS Details</h5> -->\r\n                    <strong>TDS Details</strong>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\" style=\"height:400px;overflow-y: auto; \">\r\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                              \r\n                                <tr>\r\n                                    <td>\r\n                                        <thead style=\"text-align: center;\">\r\n                                            <tr>\r\n                                                <th class=\"col-form-span-label\"></th>\r\n                                                <th class=\"col-form-span-label\">Acct Name.</th>\r\n                                                <th class=\"col-form-span-label\">Section</th>\r\n                                                <th class=\"col-form-span-label\">LDC Limit</th>\r\n                                                <th class=\"col-form-span-label\">Utilized Amt</th>\r\n                                                <th class=\"col-form-span-label\">LDC Rate %</th>\r\n                                                <th class=\"col-form-span-label\">Base Rate %\"</th>\r\n                                                <th class=\"col-form-span-label\">PI Amt</th>\r\n                                                <th class=\"col-form-span-label\">TDS Amount</th>\r\n                                                <th class=\"col-form-span-label\">Remarks</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                               <tr *ngFor=\"let obj of TDSList \">\r\n                                                <td class=\"col-form-span-label\">\r\n                                                    <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\" [disabled]=\"obj.Disabled\"\r\n                                                         (ngModelChange)=\"getCheckedTDSData($event,obj.TDSACCTID,obj.RATE,obj.TDSAMOUNT,obj.AMOUNT,obj.ITEMCODE,obj.NARRATION,obj.RATETYPE,obj.ACCTID,obj.OFFLAG)\">\r\n                                                    &nbsp; \r\n                                                </td>\r\n                                                <td class=\"col-form-span-label\">{{obj.ACCTNAME}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.SECTIONNAME}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.UTIAMT}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.LDCRATE}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.RATE}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.TDSAMOUNT}}</td>\r\n                                                <td class=\"col-form-span-label\">{{obj.NARRATION}}</td>\r\n                                            </tr>\r\n                                          \r\n                             \r\n                            </tbody>\r\n                        </td>\r\n                    </tr>\r\n                            </table>\r\n                             <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                                <td colspan=\"9\" align=\"center\" style=\"width:100%\">\r\n                                    <tr >\r\n                                        <td colspan=\"5\"><span class=\"col-form-span-label\">Total PI Amount :  </span>\r\n                                            <span class=\"col-form-span-label\"><b>{{totpiamt}}</b> </span>\r\n                                        </td>\r\n                                        <td align=\"right\" colspan=\"4\"><span class=\"col-form-span-label\">Selected PI Amount  :  </span>\r\n                                            <span class=\"col-form-span-label\"><b>{{seltaxableamt}}</b> </span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <thead style=\"text-align: center;\">\r\n                                                <tr>\r\n                                                  <th class=\"col-form-span-label\">Section</th>\r\n                                                  <th class=\"col-form-span-label\">Total Tds Amount</th>\r\n                                                 </tr>\r\n                                            </thead> \r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let obj of TotalTDSList \">\r\n                                                 <td class=\"col-form-span-label\"><b>{{obj.SECTIONNAME}}</b></td>\r\n                                                 <td class=\"col-form-span-label\"><b>{{obj.TOTTDSAMOUNT}}</b></td>\r\n                                             </tr>\r\n                                             </tbody> \r\n                                        </td>\r\n                                    </tr>\r\n                                   \r\n                                </td>\r\n                             </table>   \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-header formheading\" style=\"height:25px\" >\r\n                        <button class=\"btn btn-sm btn-danger\" style=\"float: right;\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                            (click)=\"closeTdsModal()\"><i class=\"fa fa-ban\"></i>\r\n                            Close</span></button>\r\n                        <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"AddtdsDetails()\"> <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\r\n                       \r\n                    </div>\r\n                 \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/multicontainer-purchase.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/purchase/multicontainer-purchase.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>MULTICONTAINER</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-2 col-lg-2\"> </div>\n        <div class=\"col-sm-12 col-md-8 col-lg-8\">\n            <div class=\"tab\" role=\"tabpanel\">\n                <div >\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" id=\"data-step1\" data-toggle=\"tab\" href=\"#step1\">CONTAINER </a>\n                        </li>\n                        <li class=\"nav-item\" >\n                            <a class=\"nav-link disabled\" id=\"data-step2\"  data-toggle=\"tab\" href=\"#step2\"> PURCHASE </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"tab-content\">\n                    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"step1\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n\n                            <tr  >\n                                <td class=\"col-form-span-heading\"  colspan=\"4\">\n                                    <b> General Details</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td>\n                                    <my-date-picker name=\"purchasedate_step1\" [options]=\"myDatePickerOptionsInv\"\n                                        class=\"form-control width170\" (dateChanged)=\"puchasedatestep1($event)\"\n                                        [selDate]=\"purchasedate_step1\"></my-date-picker>\n                                </td>\n                                <td colspan=\"2\"></td>\n                            </tr>\n                            <tr  >\n                                <td class=\"col-form-span-heading\"   colspan=\"4\">\n                                    <b> Supplier Details</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td colspan=\"3\">\n                                    <!-- <select class=\"form-control width350\"  [(ngModel)]=\"staff\">\n                                        <option value=\"\">Please select</option>\n                                        <option *ngFor=\"let d of Stafflist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\n                                    </select> -->\n                                    <ng-select [items]=\"supplierlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\n                                        [(ngModel)]=\"step1suppliername\" (ngModelChange)=\"GetStep1SupplierName($event)\" class=\"custom \"\n                                        placeholder=\"--Select--\">\n                                    </ng-select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td colspan=\"3\">\n                                    <select class=\"form-control\" [(ngModel)]=\"billaddress_step1\">\n                                        <option value=\"\">Please select</option>\n                                        <option *ngFor=\"let d of billaddressfilter_step1\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}\n                                        </option>\n                                    </select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\n                                             \n                                    <div style=\"display: flex;float: left;\" >\n                                        <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl_step1}}</b> </span>\n                                        <span class=\"col-form-span-label\"> <input type=\"checkbox\"   \n                                              [(ngModel)]=\"chkIsTDS_step1\"  [disabled]='disablecheckbox'\n                                                /> </span>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr >\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\n                                    <b>Accounts Details</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span></td>\n                                <td colspan=\"3\">\n                                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\n                                        (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName_step1\" class=\"custom \"\n                                        placeholder=\"--Select--\">\n                                    </ng-select>\n                                   \n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Item</b> </span></td>\n                                <td colspan=\"3\">\n                                    <ng-select [items]=\"Itemslist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item_step1\"\n                                        class=\"custom \" placeholder=\"--Select--\">\n                                    </ng-select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td style=\" display: flex; \">\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable_step1\"   >\n                                        <option value=\"\">--Please select--</option>\n                                        <option value=\"Y\">Y</option>\n                                        <option value=\"N\">N</option>\n                                       </select>\n                \n                            </td>\n                                <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span></td>\n                                <td style=\" display: flex; \">\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable_step1\"   >\n                                            <option  value=\"\" >-- Please Select --</option>\n                                            <option value=\"1\">Y</option>\n                                            <option value=\"0\" >N</option>\n                                            <option value=\"2\" >RCM</option>\n                                       </select>\n                                </td>\n            \n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Container No</b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td> <input [(ngModel)]=\"ContainerNo_step1\" type=\"text\"  (change)=\"fn_Validate_ContainerNo(ContainerNo_step1)\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td> <input [(ngModel)]=\"AcctAmount_step1\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                        \n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                                <td colspan=\"3\">\n                                    <input [(ngModel)]=\"ActNarration_step1\" type=\"text\" class=\"form-control\" maxlength=\"250\">\n                                </td>\n                            </tr>\n            \n                            <tr>\n                                <td colspan=\"4\" class=\"centerlabel\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrdstep1()\"> <span\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                            {{txtchild}}</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                            (click)=\"Resetchildrcrdstep1();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                                </td>\n                            </tr>\n            \n                            <tr>\n            \n                                <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\n                                <td> <input [(ngModel)]=\"NetTotal_step1\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                                <td colspan=\"2\"></td>\n                            </tr>\n            \n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\n                                <td> <input [(ngModel)]=\"NetAmount_step1\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\n                                <td colspan=\"2\"></td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"4\">\n                                    <div class=\"row xyscroll\">\n                                        <div class=\"col-12\">\n                                        <table class=\"table table-responsive-sm table-bordered\">\n                                            <thead>\n                                                <tr class=\"bakgrdliteBlue\">\n                                                    <th class=\"col-form-span-label\"></th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Tds</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Gst</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Container No</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody >\n                                                <tr *ngFor=\"let obj of Accountlist_step1\">\n                                                    <td class=\"centerlabel\">\n                                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecdstep1(obj.ID)\"></i>\n                                                        &nbsp;\n                                                        <!-- <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID)\"></i> -->\n                                                    </td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.ACCOUNT_NAME}} </span>\n                                                    </td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>                                    \n                                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.PUR_TDS}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"4\" class=\"centerlabel\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"   [disabled]=\"buttonStatus\" (click)=\"Add_Mainstep1()\"> <span\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                            (click)=\"RestMain_step1();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                                </td>\n                            </tr>\n                      \n                        </table>\n                        </div>\n                        </div>\n                    </div>\n                    <div role=\"tabpanel \" class=\"tab-pane\" id=\"step2\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n\n                            <tr  >\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\n                                    <b> General Details</b>\n                                </td>\n                            </tr>\n                            <tr>\n            \n                                <td><span class=\"col-form-span-label\"><b>Purchase No</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td> <input [(ngModel)]=\"PurchaseNo_step2\" type=\"text\" class=\"form-control width150\" [maxlength]=\"30\" \n                                        [disabled]=\"true\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td style=\"text-align:left ;\">              \n                                    <my-date-picker name=\"purchasedate_step2\" [options]=\"myDatePickerOptionsInv\" [disabled]='disablepurchasedate_step2'\n                                        class=\"width170\" (dateChanged)=\"puchasedatestep2($event)\" [selDate]=\"purchasedate_step2\" ></my-date-picker>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                                <td \n                                colspan=\"3\"> \n                                <!-- <input [(ngModel)]=\"Narration_step2\" type=\"text\" class=\"form-control\"\n                                        [maxlength]=\"4000\"> -->\n                                        <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\n                                        placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"Narration_step2\"></textarea>\n                                     </td>\n                            </tr>\n                            <tr  >\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\n                                    <b>Supplier Details</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td colspan=\"3\">                      \n                                    <ng-select [items]=\"supplierlist\" disabled bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\n                                        [(ngModel)]=\"suppliername\" (ngModelChange)=\"GetSupplierName($event)\" class=\"custom\"\n                                        placeholder=\"--Select--\">\n                                    </ng-select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td colspan=\"3\">\n                                    <select class=\"form-control\" disabled [(ngModel)]=\"billaddress\">\n                                        <option value=\"\">Please select</option>\n                                        <option *ngFor=\"let d of billaddressfilter\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}\n                                        </option>\n                                    </select>\n                                </td>\n                            </tr>\n                            <tr>\n            \n                                <td><span class=\"col-form-span-label\"><b>Inv No</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td> <input [(ngModel)]=\"InvNo\" type=\"text\"  class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Inv Date</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td style=\"text-align: left;\">\n                                    <my-date-picker name=\"InvDate\" [options]=\"myDatePickerOptions\" class=\" width170\"\n                                        [(ngModel)]=\"InvDate\"></my-date-picker>\n                                </td>\n                            </tr>\n                            <tr>\n            \n                                <td><span class=\"col-form-span-label\"><b>Bill Received On</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td style=\"text-align: left;\">\n                                    <my-date-picker name=\"BillReceive\" [options]=\"myDatePickerOptions\" class=\"width170\"\n                                        [(ngModel)]=\"BillReceive\"></my-date-picker>\n                                </td>\n                                <td><span class=\"col-form-span-label\"><b>Due Date</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td style=\"text-align: left;\">\n                                    <my-date-picker name=\"DueDate\" [options]=\"myDatePickerOptions\" class=\"width170\"\n                                        [(ngModel)]=\"DueDate\"></my-date-picker>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\n                                             \n                                    <div style=\"display: flex;float: left;\" >\n                                        <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl_step2}}</b> </span>\n                                        <span class=\"col-form-span-label\"> <input type=\"checkbox\"   \n                                              [(ngModel)]=\"chkIsTDS_step2\"  [disabled]='disablecheckbox'\n                                                /> </span>\n                                    </div>\n                                </td>\n                            </tr>\n                            <!-- <tr  class=\"trheader\">\n                                <td class=\"col-form-span-label\" colspan=\"2\">\n                                    <b> Passing Details</b>\n                                </td>\n                                <td class=\"col-form-span-heading\" colspan=\"2\">\n            \n                                    <div style=\"display: flex;\">\n                                        <span class=\"col-form-span-label\"><b>Passed&nbsp;&nbsp;</b> </span>\n                                        <span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"IsPassed\"\n                                                (change)=\"changeEvent($event)\" /> </span>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Passed By</b> </span></td>\n                                <td>\n                                    <select class=\"form-control width150\" [(ngModel)]=\"passedby\" [disabled]='togglepassedby'>\n                                        <option value=\"\">Please select</option>\n                                        <option *ngFor=\"let d of PassedBylist\" value={{d.CMPID}}>{{d.CMP_USERNAME}}</option>\n                                    </select>\n                                </td>\n                                <td><span class=\"col-form-span-label\"><b>Passed Amount</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td> <input [(ngModel)]=\"PassedAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglepamount'\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Invoice Amount</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td> <input [(ngModel)]=\"InvoiceAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='toggleinvamount'\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Voucher No</b> </span><span\n                                        class=\"col-form-span-error\">*</span></td>\n                                <td> <input [(ngModel)]=\"VoucherNo\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglevno'\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\n            \n                            </tr> -->\n                            <tr >\n                                <td class=\"col-form-span-heading\" colspan=\"4\">\n                                    <b>Accounts Details</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span></td>\n                                <td colspan=\"3\">                   \n                                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\n                                        (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName_step2\" class=\"custom\"\n                                        placeholder=\"--Select--\">\n                                    </ng-select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Item</b> </span></td>\n                                <td colspan=\"3\">\n                                    <ng-select [items]=\"Itemslist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item_step2\"\n                                        class=\"custom\" placeholder=\"--Select--\">\n                                    </ng-select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td style=\" display: flex; \">\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable_step2\"   >\n                                        <option value=\"\">--Please select--</option>\n                                        <option value=\"Y\">Y</option>\n                                        <option value=\"N\">N</option>\n                                       </select>\n                \n                            </td>\n                                <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span></td>\n                                <td style=\" display: flex; \">\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                                        <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable_step2\"   >\n                                            <option  value=\"\" >-- Please Select --</option>\n                                            <option value=\"1\">Y</option>\n                                            <option value=\"0\" >N</option>\n                                            <option value=\"2\" >RCM</option>\n                                       </select>\n                                </td>\n            \n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td> <input [(ngModel)]=\"Amount_step2\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\n                                <td> <input [(ngModel)]=\"Deduction_step2\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n            \n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\n                                        class=\"col-form-span-error\">*</span>\n                                </td>\n                                <td> <input [(ngModel)]=\"JobNo_step2\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\n                                <td> <input [(ngModel)]=\"actpassedamount_step2\" type=\"text\"  disabled=\"true\"\n                                        class=\"form-control width150\" maxlength=\"40\">\n                                </td>\n            \n                            </tr>\n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                                <td colspan=\"3\">\n                                    <input [(ngModel)]=\"ActNarration_step2\" type=\"text\" [maxlength]=\"800\" class=\"form-control\">\n                                </td>\n                            </tr>\n            \n                            <tr>\n                                <td colspan=\"4\" class=\"centerlabel\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrdstep2()\" [disabled]='disablechildaddbtn'> <span\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                            {{txtchild}}</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\" [disabled]='disablechildresetbtn'> <span class=\"col-form-span-label\"\n                                            (click)=\"Resetchildrcrdstep2();\"  ><i class=\"fa fa-ban\"></i> Reset</span></button>\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\"  [disabled]='disabletdsbtn'> <span class=\"col-form-span-label\"\n                                            (click)=\" !disabletdsbtn && OpenTdsModal();\"><i class=\"fa fa-dot-circle-o\"></i> Cal TDS</span></button>\n                                     <button class=\"btn btn-sm btn-danger\" type=\"reset\"  [disabled]='disableresetbtn'> <span class=\"col-form-span-label\"\n                                            (click)=\"!disableresetbtn && ResetTDS()\"><i class=\"fa fa-ban\"></i> Reset TDS</span></button>        \n                                </td>\n                            </tr>\n                          \n                            <tr>\n            \n                                <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\n                                <td> <input [(ngModel)]=\"NetAmt_step2\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\n                                        maxlength=\"40\"> </td>\n                                <td colspan=\"2\"></td>\n                            </tr>\n            \n                            <tr>\n                                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\n                                <td> <input [(ngModel)]=\"NetAmount_step2\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\n                                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\n                                <td> <input [(ngModel)]=\"Netdeduction_step2\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\n                                        class=\"form-control width150\" maxlength=\"40\"> </td>\n                            </tr>\n                             <tr>\n                                <td colspan=\"6\">\n                                    <div class=\"row xyscroll\" style=\"overflow-y: auto; width:670px\">\n                                        <div class=\"col-12\">\n                                        <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist_step2.length>0\" style=\"width:100%\">\n                                            <thead>\n                                                <tr class=\"bakgrdliteBlue\">\n                                                    <th class=\"col-form-span-label\"></th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">TDS</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">GST</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\n                                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody *ngIf=\"Accountlist_step2.length>0\">\n                                                <tr *ngFor=\"let obj of Accountlist_step2\">\n                                                    <td class=\"centerlabel\">\n                                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecdstep2(obj.ID)\"></i>\n                                                        &nbsp;\n                                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecdstep2(obj.ID,obj.IS_NOT_EDIT_ABLE)\"></i>\n                                                    </td>\n                                                    <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\"> </span>\n                                                    </td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.PUR_TDS}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\n                                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\n                                                    <td><span *ngIf=\"obj.CLIENT=='G100741'\" class=\"col-form-span-label\" [innerHtml]=\"obj.NARRATION\"></span>\n                                                        <span *ngIf=\"obj.CLIENT!='G100741'\" class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>      \n                                                    <!-- <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td> -->\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    </div>\n                                </td>\n                            </tr> \n                            <tr>\n                                <td colspan=\"4\" class=\"centerlabel\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"supplier_validation()\"> <span\n                                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                            (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                                </td>\n                            </tr>\n                      \n            \n                        </table>\n                        </div>\n                        </div>\n                    </div>\n                    </div>\n            </div>\n        </div>\n        <div class=\"col-sm-12 col-md-2 col-lg-8\"> </div>\n\n    </div>\n    </div>\n    <div class=\"modal\" [style.display]=\"showModal_TDS ? 'block' : 'none' \"  >\n        <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"width: 700px;\">\n            <div class=\"modal-content\">\n                <div class=\"card-header formheading\">\n                    <!-- <h5 class=\"modal-title\">TDS Details</h5> -->\n                    <strong>TDS Details</strong>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\" style=\"height:400px;overflow-y: auto; \">\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\n                                <tr>\n                                    <td colspan=\"6\">\n                                        <!-- <input type=\"text\" [(ngModel)]=\"term\"\n                                            style=\"float: right;width: 200px;font-family: verdana;font-size:11px;padding: 1px;\"\n                                            placeholder=\"Search by Job Number\"> -->\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <thead style=\"text-align: center;\">\n                                            <tr>\n                                                <th class=\"col-form-span-label\"></th>\n                                                <th class=\"col-form-span-label\">Acct Name.</th>\n                                                <th class=\"col-form-span-label\">Section</th>\n                                                <th class=\"col-form-span-label\">LDC Limit</th>\n                                                <th class=\"col-form-span-label\">Utilized Amt</th>\n                                                <th class=\"col-form-span-label\">LDC Rate %</th>\n                                                <th class=\"col-form-span-label\">Base Rate %\"</th>\n                                                <th class=\"col-form-span-label\">PI Amt</th>\n                                                <th class=\"col-form-span-label\">TDS Amount</th>\n                                                <th class=\"col-form-span-label\">Remarks</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                               <tr *ngFor=\"let obj of TDSList \">\n                                                <td class=\"col-form-span-label\">\n                                                    <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\" [disabled]=\"obj.Disabled\"\n                                                         (ngModelChange)=\"getCheckedTDSData($event,obj.TDSACCTID,obj.RATE,obj.TDSAMOUNT,obj.AMOUNT,obj.ITEMCODE,obj.NARRATION,obj.RATETYPE,obj.ACCTID,obj.OFFLAG)\">\n                                                    &nbsp; \n                                                </td>\n                                                <td class=\"col-form-span-label\">{{obj.ACCTNAME}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.SECTIONNAME}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.UTIAMT}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.LDCRATE}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.RATE}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.TDSAMOUNT}}</td>\n                                                <td class=\"col-form-span-label\">{{obj.NARRATION}}</td>\n                                            </tr>\n                                          \n                             \n                            </tbody>\n                        </td>\n                    </tr>\n                            </table>\n                             <table class=\"table table-bordered table-sm-new bgwhite\">\n                                <td colspan=\"9\" align=\"center\">\n                                    <tr >\n                                        <td colspan=\"5\"><span class=\"col-form-span-label\">Tot TDS Amount :  </span>\n                                            <span class=\"col-form-span-label\"><b>{{tottdsamt}}</b> </span>\n                                        </td>\n                                        <td align=\"right\" colspan=\"4\"><span class=\"col-form-span-label\">Selected Amount  :  </span>\n                                            <span class=\"col-form-span-label\"><b>{{seltdsamt}}</b> </span>\n                                        </td>\n                                        <td>\n                                            <thead style=\"text-align: center;\">\n                                                <tr>\n                                                  <th class=\"col-form-span-label\">Section</th>\n                                                  <th class=\"col-form-span-label\">Total Tds Amount</th>\n                                                 </tr>\n                                            </thead> \n                                            <tbody>\n                                                <tr *ngFor=\"let obj of TotalTDSList \">\n                                                 <td class=\"col-form-span-label\"><b>{{obj.SECTIONNAME}}</b></td>\n                                                 <td class=\"col-form-span-label\"><b>{{obj.TOTTDSAMOUNT}}</b></td>\n                                             </tr>\n                                             </tbody> \n                                        </td>\n                                    </tr>\n                                   \n                                </td>\n                             </table>   \n                        </div>\n                    </div>\n                    <div class=\"card-header formheading\" style=\"height:25px\" >\n                        <button class=\"btn btn-sm btn-danger\" style=\"float: right;\" type=\"reset\"> <span class=\"col-form-span-label\"\n                            (click)=\"closeTdsModal()\"><i class=\"fa fa-ban\"></i>\n                            Close</span></button>\n                        <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"AddtdsDetails()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\n                      \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/purchase-general.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/purchase/purchase-general.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>PURCHASE</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\" >\n        <div class=\"col-sm-12 col-md-2 col-lg-2\"  >\n        </div>\n        <div class=\"col-sm-12 col-md-8 col-lg-8 \"style=\"overflow-y: auto; height:500px; \" >\n            <table class=\"table table-bordered table-sm-new bgwhite\"   >\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b> General Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Purchase No</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"PurchaseNo\" type=\"text\" class=\"form-control width150\" maxlength=\"40\"\n                            [disabled]=\"true\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td style=\"text-align: left;\">\n                        <my-date-picker name=\"PurchaseDate\" [options]=\"myDatePickerOptionsInv\" [disabled]='disablepurchasedate'\n                            class=\"width170\" (dateChanged)=\"PurchaseDateChanged($event)\" [selDate]=\"PurchaseDate\" ></my-date-picker>\n                    </td>\n                </tr>\n                <!-- <tr>\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td colspan=\"3\"> <input [(ngModel)]=\"Narration\" type=\"text\" aria-multiline=\"true\" class=\"form-control width250\"\n                        [maxlength]=\"4000\" > </td>\n                </tr> -->\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td colspan=\"3\">\n                         <!-- <input [(ngModel)]=\"Narration\" type=\"text\" aria-multiline=\"true\" class=\"form-control width500\"\n                        [maxlength]=\"4000\" > -->\n\n                        <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\n                        placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"Narration\"></textarea>\n                    </td>\n\n\n\n                </tr>\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b>Supplier Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td colspan=\"3\">\n                        <!-- <select class=\"form-control width350\"  [(ngModel)]=\"staff\">\n                            <option value=\"\">Please select</option>\n                            <option *ngFor=\"let d of Stafflist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\n                        </select> -->\n                        <ng-select [items]=\"supplierlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [disabled]='disablesupplier'\n                            [(ngModel)]=\"suppliername\" (ngModelChange)=\"GetSupplierName($event)\" class=\"custom \"\n                            placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td colspan=\"3\">\n                        <select class=\"form-control\" [(ngModel)]=\"billaddress\" [disabled]='disablesupplieraddr'>\n                            <option value=\"\">Please select</option>\n                            <option *ngFor=\"let d of billaddressfilter\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}\n                            </option>\n                        </select>\n                    </td>\n                </tr>\n                <tr>\n\n                    <td><span class=\"col-form-span-label\"><b>Inv No</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"InvNo\" type=\"text\"  class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Inv Date</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td style=\"text-align: left;\">\n                        <my-date-picker name=\"InvDate\" [options]=\"myDatePickerOptions\" class=\"width170\"\n                            [(ngModel)]=\"InvDate\"></my-date-picker>\n                    </td>\n                </tr>\n                <tr>\n\n                    <td><span class=\"col-form-span-label\"><b>Bill Received On</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td style=\"text-align: left;\">\n                        <my-date-picker name=\"BillReceive\" [options]=\"myDatePickerOptions\" class=\"width170\"\n                            [(ngModel)]=\"BillReceive\"></my-date-picker>\n                    </td>\n                    <td><span class=\"col-form-span-label\"><b>Due Date</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td style=\"text-align: left;\">\n                        <my-date-picker name=\"DueDate\" [options]=\"myDatePickerOptions\" class=\"form-control width170\"\n                            [(ngModel)]=\"DueDate\"></my-date-picker>\n                    </td>\n                </tr>\n                <!-- <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"2\">\n                        <b> Passing Details</b>\n                    </td>\n                    <td class=\"col-form-span-heading\" colspan=\"2\">\n\n                        <div style=\"display: flex;\">\n                            <span class=\"col-form-span-label\"><b>Passed&nbsp;&nbsp;</b> </span>\n                            <span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"IsPassed\"\n                                    (change)=\"changeEvent($event)\" /> </span>\n                        </div>\n                    </td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Passed By</b> </span></td>\n                    <td>\n                        <select class=\"form-control width150\" [(ngModel)]=\"passedby\" [disabled]='togglepassedby'>\n                            <option value=\"\">Please select</option>\n                            <option *ngFor=\"let d of PassedBylist\" value={{d.CMPID}}>{{d.CMP_USERNAME}}</option>\n                        </select>\n                    </td>\n                    <td><span class=\"col-form-span-label\"><b>Passed Amount</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"PassedAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglepamount'\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Invoice Amount</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"InvoiceAmount\" OnlyNumber=\"true\" type=\"text\" [disabled]='toggleinvamount'\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Voucher No</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"VoucherNo\" OnlyNumber=\"true\" type=\"text\" [disabled]='togglevno'\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n\n                </tr> -->\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"2\">\n                        <b>Accounts Details</b>\n                    </td>\n                    <td  class=\"col-form-span-heading\" colspan=\"2\">\n\n                        <div style=\"display: flex;float: left;\" >\n                            <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl}}</b> </span>\n                            <span class=\"col-form-span-label\"> <input type=\"checkbox\"\n                                  [(ngModel)]=\"chkIsTDS\"  [disabled]='disablecheckbox'\n                                    /> </span>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span\n                        class=\"col-form-span-error\">*</span></td>\n                    <td colspan=\"3\">\n                        <!-- <select class=\"form-control width500\"  [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.target.value)\">\n                            <option value=\"\">Please select</option>\n                            <option *ngFor=\"let d of AccountNameList\" value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\n                        </select> -->\n                        <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\n                            (ngModelChange)=\"GetActName($event)\" [(ngModel)]=\"AccountName\" class=\"custom \"\n                            placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Item</b> </span><span\n                        class=\"col-form-span-error\">*</span></td>\n                    <td colspan=\"3\">\n                        <!-- <select class=\"form-control width500\"  [(ngModel)]=\"Item\">\n                            <option value=\"\">Please select</option>\n                            <option *ngFor=\"let d of ItemList\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\n                        </select> -->\n                        <ng-select [items]=\"Itemslist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\n                            class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td style=\" display: flex; \">\n                        <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                            <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable\"   >\n                            <option value=\"\">--Please select--</option>\n                            <option value=\"Y\">Y</option>\n                            <option value=\"N\">N</option>\n                           </select>\n\n                </td>\n                    <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span></td>\n                    <td style=\" display: flex; \">\n                        <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                            <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable\"   >\n                                <option  value=\"\" >-- Please Select --</option>\n                                <option value=\"1\">Y</option>\n                                <option value=\"0\" >N</option>\n                                <option value=\"2\" >RCM</option>\n                           </select>\n                    </td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td> <input [(ngModel)]=\"Amount\" OnlyNumber=\"true\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\n                    <td> <input [(ngModel)]=\"Deduction\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td> <input [(ngModel)]=\"JobNo\" type=\"text\" (change)=\"fn_JobValidation()\" OnlyNumber=\"true\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\n                    <td> <input [(ngModel)]=\"actpassedamount\" type=\"text\" OnlyNumber=\"true\"\n                            class=\"form-control width150\" maxlength=\"40\">\n                    </td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td colspan=\"3\">\n                        <input [(ngModel)]=\"ActNarration\" type=\"text\" class=\"form-control width500\" [maxlength]=\"30\" >\n                    </td>\n                </tr>\n\n                <tr>\n                    <td colspan=\"4\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\" [disabled]='disablechildaddbtn'> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                {{txtchild}}</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\" [disabled]='disablechildresetbtn'> <span class=\"col-form-span-label\"\n                                (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disabletdsbtn'> <span class=\"col-form-span-label\"\n                                       (click)=\"!disabletdsbtn && OpenTdsModal();\"><i class=\"fa fa-dot-circle-o\"></i> Cal TDS</span></button>\n                                       <button class=\"btn btn-sm btn-danger\" type=\"reset\"  [disabled]='disableresetbtn'> <span class=\"col-form-span-label\"\n                                        (click)=\"!disableresetbtn && ResetTDS()\"><i class=\"fa fa-ban\"></i> Reset TDS</span></button>\n                    </td>\n                </tr>\n                 <tr>\n\n                    <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\n                    <td> <input [(ngModel)]=\"NetAmt\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n                    <td colspan=\"2\"></td>\n                </tr>\n\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\n                    <td> <input [(ngModel)]=\"NetAmount\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\n                    <td> <input [(ngModel)]=\"Netdeduction\" OnlyNumber=\"true\" disabled=\"disabled\" type=\"text\"\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n                </tr>\n                <tr style=\"height: 150px;\">\n                    <td colspan=\"4\">\n                        <div class=\"row xyscroll\" style=\"overflow-y: auto; width:720px\">\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\">\n                                <thead>\n                                    <tr class=\"bakgrdliteBlue\">\n                                        <th class=\"col-form-span-label\"></th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">TDS</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">GST</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Pass Amt</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"Accountlist.length>0\">\n                                    <tr *ngFor=\"let obj of Accountlist\">\n                                        <td class=\"centerlabel\">\n                                            <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\"></i>\n                                            &nbsp;\n                                            <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.IS_NOT_EDIT_ABLE)\"></i>\n                                        </td>\n                                        <!-- <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\"> </span>\n                                        </td> -->\n                                        <td style=\"width:200px; \" class=\"col-form-span-label\">\n                                            <p    style=\"white-space: pre-wrap;width: 200px; \" > {{obj.ACCOUNT_NAME}}</p>\n                                        </td>\n                                        <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.PUR_TDS}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.SRPIPASSAMOUNT}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\n                                        <td><span *ngIf=\"obj.CLIENT=='G100741'\" class=\"col-form-span-label\" [innerHtml]=\"obj.NARRATION\"></span>\n                                            <span *ngIf=\"obj.CLIENT!='G100741'\" class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\n\n                                      <!--   <td style=\"width:200px; \" class=\"col-form-span-label\">\n                                            <p    style=\"white-space: pre-wrap;width: 200px; \" > {{obj.NARRATION}}</p>\n                                        </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"supplier_validation()\" > <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\" > <span class=\"col-form-span-label\"\n                                (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                    </td>\n                </tr>\n\n\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\n        </div>\n    </div>\n\n</div>\n<div class=\"modal\" [style.display]=\"showModal_MAWB ? 'block' : 'none'\" style=\"margin: 0 auto;\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header formheading\">\n                <span style=\"font-family: Verdana;font-weight: bold;\">MAWB Purchase</span>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <table>\n                            <tr>\n                                <th>\n                                    <span class=\"col-form-span-label\">\n                                        <input type=\"radio\" name=\"check\" value=\"1\" [(ngModel)]=\"SerchTypeMawb\" />&nbsp;List</span>\n                                </th>\n                            </tr>\n                        </table>\n                        <br>\n                        <div class=\"row xyscroll\" style=\"height:350px;\">\n                            <table class=\"table table-bordered table-sm-new bgwhite \">\n                        <!-- <main  >\n                            <div id=\"content\">\n                                <div class=\"table-wrapper\">\n                                    <table>  -->\n                                        <thead style=\"text-align: center;\">\n                                            <tr>\n                                                <th style=\"position: sticky;top: 0;\" ><span class=\"col-form-span-label\"></span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">MAWB No.</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Grwt</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Chblwt</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Netwt</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Volumn</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Freight Amt</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Air Freight Commission</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\"> Freight Rebate</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Surcharges</span></th>\n                                                <th style=\"position: sticky;top: 0;\" ><span class=\"col-form-span-label\">Documentation Charge</span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">AMS / ENS Charge </span></th>\n                                                <th style=\"position: sticky;top: 0;\"><span class=\"col-form-span-label\">Misc. Charges</span></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of MAWABlist,let i = index\">\n                                                <td class=\"centerlabel\">\n                                                    <input type=\"checkbox\" (checked)=\"obj.Select == true\" [disabled]=\"obj.Disabled == true\"\n                                                    (click)=\"validate(obj.AEROBILLNO)\" />\n                                                    <!-- <input type=\"checkbox\" class=\"productlist\"\n                                                    [id]=\"i\" [value]=\"i\"\n                                                                (click)=\"getCheckboxValues($event,i)\"> -->\n                                                </td>\n                                                <td><span class=\"col-form-span-label\">{{obj.AEROBILLNO}} </span>  </td>\n                                                <td><span class=\"col-form-span-label\">{{obj.EXPT_GRWT |number:'2.3-5'}}</span></td>\n                                                <td><span class=\"col-form-span-label\">{{obj.EXPT_CHBLWT |number:'2.3-5'}}</span></td>\n                                                <td><span class=\"col-form-span-label\">{{obj.EXPT_NETWT |number:'2.3-5'}}</span></td>\n                                                <td><span class=\"col-form-span-label\">{{obj.EXPT_VOLUME |number:'2.3-5'}}</span></td>\n\n                                                <td> <input [(ngModel)]=\"obj.FRIEGHTAMT\"  type=\"text\" class=\"form-control\"\n                                                    [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                            <td> <input [(ngModel)]=\"obj.AIRFRIGHTCOMM\" type=\"text\" class=\"form-control\"\n                                                [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                                    <td> <input [(ngModel)]=\"obj.FRIGHTREBATE\" type=\"text\" class=\"form-control\"\n                                                        [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                            <td> <input [(ngModel)]=\"obj.SURCHARGE\" type=\"text\" class=\"form-control\"\n                                                [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                                <td> <input [(ngModel)]=\"obj.DOCUMENTCHARGE\" type=\"text\" class=\"form-control\"\n                                                    [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                            <td> <input [(ngModel)]=\"obj.AMS_ENSCHARGE\" type=\"text\" class=\"form-control\"\n                                                [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                            <td> <input [(ngModel)]=\"obj.MISCHARGE\" type=\"text\" class=\"form-control\"\n                                                [disabled]=\"obj.Disabled == true\" OnlyNumber=\"true\"> </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n\n                        <table>\n                            <tr>\n                                <th>\n                                    <span class=\"col-form-span-label\">\n                                        <input type=\"radio\" name=\"check\" value=\"2\"\n                                            [(ngModel)]=\"SerchTypeMawb\"/>&nbsp;Search</span>\n                                </th>\n                            </tr>\n                        </table>\n                        <br>\n\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <thead>\n                                <tr>\n                                    <th><span class=\"col-form-span-label\">MAWB No.</span></th>\n                                    <th><span class=\"col-form-span-label\">Freight Amt</span></th>\n                                    <th><span class=\"col-form-span-label\">Air Freight Commission</span></th>\n                                    <th><span class=\"col-form-span-label\"> Freight Rebate</span></th>\n\n                                    <th><span class=\"col-form-span-label\">Surcharges</span></th>\n                                    <th><span class=\"col-form-span-label\">Documentation Charge</span></th>\n                                    <th><span class=\"col-form-span-label\">AMS / ENS Charge </span></th>\n                                    <th><span class=\"col-form-span-label\">Misc. Charges</span></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td> <input [(ngModel)]=\"mawbno\" type=\"text\" class=\"form-control\" maxlength=\"20\"\n                                            [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                    <td> <input [(ngModel)]=\"frieghtamt\" type=\"text\" class=\"form-control\"\n                                        [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                    <td> <input [(ngModel)]=\"airfrightcomm\" type=\"text\" class=\"form-control\"\n                                        [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                            <td> <input [(ngModel)]=\"frightrebate\" type=\"text\" class=\"form-control\"\n                                                [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                    <td> <input [(ngModel)]=\"surcharge\" type=\"text\" class=\"form-control\"\n                                        [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                        <td> <input [(ngModel)]=\"documentcharge\" type=\"text\" class=\"form-control\"\n                                            [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                    <td> <input [(ngModel)]=\"ams_enscharge\" type=\"text\" class=\"form-control\"\n                                        [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                    <td> <input [(ngModel)]=\"mischarge\" type=\"text\" class=\"form-control\"\n                                        [disabled]=\"SerchTypeMawb=='1'\" OnlyNumber=\"true\"> </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n                <br>\n                <div align=\"center\">\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"mawb_submit()\"> <span\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Submit</span></button>\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                            (click)=\"close()\"><i class=\"fa fa-ban\"></i>\n                            Close</span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" [style.display]=\"showModal_TDS ? 'block' : 'none' \"  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"width: 700px;\">\n        <div class=\"modal-content\">\n            <div class=\"card-header formheading\">\n                <!-- <h5 class=\"modal-title\">TDS Details</h5> -->\n                <strong>TDS Details</strong>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col\" style=\"height:400px;overflow-y: auto; \">\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <tr>\n                                <td colspan=\"6\">\n                                    <!-- <input type=\"text\" [(ngModel)]=\"term\"\n                                        style=\"float: right;width: 200px;font-family: verdana;font-size:11px;padding: 1px;\"\n                                        placeholder=\"Search by Job Number\"> -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <thead style=\"text-align: center;\">\n                                        <tr>\n                                            <th class=\"col-form-span-label\"></th>\n                                            <th class=\"col-form-span-label\">Acct Name.</th>\n                                            <th class=\"col-form-span-label\">Section</th>\n                                            <th class=\"col-form-span-label\">LDC Limit</th>\n                                            <th class=\"col-form-span-label\">Utilized Amt</th>\n                                            <th class=\"col-form-span-label\">LDC Rate %</th>\n                                            <th class=\"col-form-span-label\">Base Rate %</th>\n                                            <th class=\"col-form-span-label\">PI Amt</th>\n                                            <th class=\"col-form-span-label\">TDS Amount</th>\n                                            <th class=\"col-form-span-label\">Remarks</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                           <tr *ngFor=\"let obj of TDSList \">\n                                            <td class=\"col-form-span-label\">\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\" [disabled]=\"obj.Disabled\"\n                                                     (ngModelChange)=\"getCheckedTDSData($event,obj.TDSACCTID,obj.RATE,obj.TDSAMOUNT,obj.AMOUNT,obj.ITEMCODE,obj.NARRATION,obj.RATETYPE,obj.LDCRATE,obj.ACCTID,obj.OFFLAG)\">\n                                                &nbsp;\n                                            </td>\n                                            <td class=\"col-form-span-label\">{{obj.ACCTNAME}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.SECTIONNAME}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.UTIAMT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.LDCRATE}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.RATE}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.TDSAMOUNT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.NARRATION}}</td>\n\n\n                                        </tr>\n\n\n                        </tbody>\n                    </td>\n                </tr>\n                        </table>\n                         <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <td colspan=\"9\" align=\"center\">\n                                <tr >\n                                    <td colspan=\"5\"><span class=\"col-form-span-label\">Total PI Amount :  </span>\n                                        <span class=\"col-form-span-label\"><b>{{totpiamt}}</b> </span>\n                                    </td>\n                                    <td align=\"right\" colspan=\"4\"><span class=\"col-form-span-label\">Selected Amount  :  </span>\n                                        <span class=\"col-form-span-label\"><b>{{seltaxableamt}}</b> </span>\n                                    </td>\n                                    <td>\n                                        <thead style=\"text-align: center;\">\n                                            <tr>\n                                              <th class=\"col-form-span-label\">Section</th>\n                                              <th class=\"col-form-span-label\">Total Tds Amount</th>\n                                             </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of TotalTDSList \">\n                                             <td class=\"col-form-span-label\"><b>{{obj.SECTIONNAME}}</b></td>\n                                             <td class=\"col-form-span-label\"><b>{{obj.TOTTDSAMOUNT}}</b></td>\n                                         </tr>\n                                         </tbody>\n                                    </td>\n                                </tr>\n\n                            </td>\n                         </table>\n                    </div>\n                </div>\n                <div class=\"card-header formheading\" style=\"height:25px\" >\n                    <button class=\"btn btn-sm btn-danger\" style=\"float: right;\" type=\"reset\"> <span class=\"col-form-span-label\"\n                        (click)=\"closeTdsModal()\"><i class=\"fa fa-ban\"></i>\n                        Close</span></button>\n                    <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"AddtdsDetails()\"> <span\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/purchase-search.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/purchase/purchase-search.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <strong>PURCHASE SEARCH</strong>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\n        <div class=\"col-sm-3\"> </div>\n        <div class=\"col-sm-6\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td class=\"col-form-span-label width100\"> \n                            <input type=\"radio\" name=\"check\" value=\"purno\" [(ngModel)]=\"Type\" checked=true />&nbsp;Purchase No\n                    </td>\n                    <td class=\"width130\">\n                        <input type=\"text\" [(ngModel)]=\"PurchaseNo\" class=\"form-control\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='purno'\" />\n                    </td>\n                    <td>\n                        <button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-primary\" (click)=\"SupplierSinglePrint(PurchaseNo);\" [disabled]=\"Type!='purno'\">\n                            <span class=\"col-form-span-label\">  <i class=\"fa fa-print\"></i> Print</span>  </button>\n                    </td>\n                </tr>\n                <tr >\n                    <td class=\"col-form-span-label\">\n                         <input type=\"radio\" name=\"check\" value=\"Supplier\" [(ngModel)]=\"Type\" />&nbsp;Supplier \n                    </td>\n                    <td colspan=\"2\">\n                        <tr>\n                            <td class=\"col-form-span-label\">      Supplier   </td>\n                            <td>\n                                <ng-select [items]=\"SupplierList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"  placeholder=\"--Select--\" [(ngModel)]=\"Supplier\"      class=\"form-control width350\" [disabled]=\"Type!='Supplier'\">\n                                 </ng-select>     \n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label\">  <span class=\"col-form-span-label\">  Supp Inv No</span>  </td>\n                            <td>                               \n                               <input type=\"text\" [(ngModel)]=\"SuppInvNo\" class=\"width130\" class=\"form-control\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='Supplier'\"/>\n                             </td>\n                        </tr>\n                        <tr>\n                            <td  class=\"col-form-span-label\" colspan=\"2\">  From \n                                <my-date-picker name=\"SuppFromDt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"SuppFromDate\" [disabled]=\"Type!='Supplier'\"></my-date-picker>\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                <span class=\"col-form-span-label\">To</span>\n                                <my-date-picker name=\"SupptoDt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"SuppToDate\" [disabled]=\"Type!='Supplier'\"></my-date-picker>\n                            </td>\n                        </tr>\n                       \n                    </td>\n                </tr>\n                <tr  >\n                    <td  class=\"col-form-span-label\" >   <input type=\"radio\" name=\"check\" value=\"JobNo\" [(ngModel)]=\"Type\" />&nbsp;Job No    </td>\n                    <td>\n                        <input type=\"text\" [(ngModel)]=\"JobNo\"   class=\"form-control\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='JobNo'\" />\n                    </td>\n                   <td colspan=\"2\"></td>\n                </tr>\n                <tr >\n                    <td  class=\"col-form-span-label\"> <input type=\"radio\" name=\"check\" value=\"Amount\" [(ngModel)]=\"Type\" />&nbsp;Amount  </td>\n                    <td>\n                        <input type=\"text\" [(ngModel)]=\"Amount\" class=\"form-control\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='Amount'\"  />\n                    </td>\n                    <td colspan=\"2\"></td>\n                </tr>\n                <tr >\n                    <td  class=\"col-form-span-label width150\">\n                         <input type=\"radio\" name=\"check\" value=\"Date\" [(ngModel)]=\"Type\" />&nbsp; Date Wise \n                    </td>\n                    <td colspan=\"2\">\n                        <span class=\"col-form-span-label\">From</span>\n                        <my-date-picker name=\"PurchaseFromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PurchaseFromDate\" [disabled]=\"Type!='Date'\"></my-date-picker>\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <span class=\"col-form-span-label\">To</span>\n                        <my-date-picker name=\"PurchaseToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PurchaseToDate\" [disabled]=\"Type!='Date'\"></my-date-picker>\n                    </td>\n                </tr>\n                \n                <tr>\n                    <td  class=\"col-form-span-label width150\" colspan=\"2\"> <input type=\"radio\" name=\"check\" value=\"PRINTAV\" [(ngModel)]=\"Type\" />&nbsp; Print All Vouchers of a day\n                    </td>\n                    <td colspan=\"2\">\n                            <span class=\"col-form-span-label\">Date</span>\n                            <my-date-picker name=\"PurchaseofDay\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PurchaseofDay\" [disabled]=\"Type!='PRINTAV'\"></my-date-picker>\n                    </td>\n                </tr>\n                <tr>\n                    <td  class=\"col-form-span-label width150\"> &nbsp;Display  </td>\n                    <td colspan=\"2\"> \n                        <div class=\"centerlabel\">\n                            <span class=\"col-form-span-label\">\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;List</span>&nbsp;&nbsp;&nbsp;&nbsp;\n                            <span class=\"col-form-span-label\">\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"2\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;Details</span>\n                        </div>\n                    </td>\n                </tr>\n             \n                <tr >\n                    <td colspan=\"3\" align=\"center\">\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\n                            <span class=\"col-form-span-label\">\n                                <i class=\"fa fa-search\"></i> Search</span>\n                        </button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\">\n                            <span class=\"col-form-span-label\" (click)=\"ResetAll();\"><i class=\"fa fa-ban\"></i> Reset</span></button> \n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-sm-3\">\n        </div>\n    </div>\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='LIST'\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-8\" style=\"height:500px;overflow-y:scroll;\">\n            <table class=\"table table-sm-new table-bordered bgwhite\">\n                <thead>\n                    <tr class=\"title-head formheading\">\n                        <th colspan=\"8\">\n                            <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';searchList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\n                        </th>\n                    </tr>\n                    <tr class=\"title-head formheading\">\n                        <th class=\"centerlabel\"><input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp; </th>\n                        <th>Purchase Code</th>\n                        <th>Purchase Date</th>\n                        <th *ngIf=\"STATUS=='RPI' || STATUS=='PI'\">Supplier</th>\n                        <th *ngIf=\"STATUS=='SRPI'\">Staff</th>\n                        <th>Supp Inv No</th>\n                        <th>Amount</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let obj of searchList\">\n                        <td class=\"centerlabel\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\n                            (ngModelChange)=\"getCheckboxValues($event,obj.pur_code)\"> &nbsp; </td>\n                        <td>\n                            <span *ngIf=\"STATUS=='PI'\"class=\"col-form-span-label anchor-link\" (click)=\"redirectToEdit(obj.pur_code)\" style=\"cursor:pointer;\">{{obj.pur_code}}</span>          \n                            <span *ngIf=\"STATUS=='RPI' || STATUS=='SRPI'\" class=\"col-form-span-label anchor-link\" (click)=\"redirectToEdit(obj.PUR_CODE)\" style=\"cursor:pointer;\">{{obj.PUR_CODE}}</span>                                \n                        </td>\n                        <td>\n                            <span *ngIf=\"STATUS=='RPI' || STATUS=='SRPI'\"class=\"col-form-span-label\">{{obj.PUR_DATE}}</span>\n                            <span *ngIf=\"STATUS=='PI'\"class=\"col-form-span-label\">{{obj.pur_date}}</span>\n                        </td>\n                        <td>\n                            <span *ngIf=\"STATUS=='RPI' || Status=='SRPI'\"class=\"col-form-span-label\">{{obj.SUPPLIER}}</span>\n                            <span *ngIf=\"STATUS=='PI'\" class=\"col-form-span-label\">{{obj.supplier}}</span>\n                        </td>\n                        <td>\n                            <span *ngIf=\"STATUS=='RPI' || Status=='SRPI'\"class=\"col-form-span-label\">{{obj.PUR_INVNO}}</span>\n                            <span *ngIf=\"STATUS=='PI'\" class=\"col-form-span-label\">{{obj.pur_invno}}</span>\n                        </td>\n                        <td>\n                            <span *ngIf=\"STATUS=='RPI' || Status=='SRPI'\"class=\"col-form-span-label\">{{obj.TOTALAMT}}</span>\n                            <span *ngIf=\"STATUS=='PI'\" class=\"col-form-span-label\">{{obj.totalamt}}</span>\n                        </td>\n                      \n                    </tr>\n                </tbody>\n                <tr>\n                    <td colspan=\"8\" class=\"right-text pr-2\">\n                      <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"PrintSupplier()\"> <span\n                          class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>&nbsp;Print</span></button>                 \n                    </td>\n                  </tr>\n            </table>\n         </div>\n        <div class=\"col-sm-2\"></div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/accounts/purchase/mawb-purchase.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/accounts/purchase/mawb-purchase.component.ts ***!
  \**************************************************************/
/*! exports provided: MAWBPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAWBPurchaseComponent", function() { return MAWBPurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MAWBPurchaseComponent = /** @class */ (function () {
    function MAWBPurchaseComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.purchasedate_step1 = null;
        this.purchasedate_step2 = null;
        this.disablepurchasedate_step2 = false;
        this.ID = "0";
        this.ID_Step2 = "0";
        this.ENTRYNO = "0";
        this.ISNOTEDITABLE = "0";
        this.ACCTNAME = "";
        this.PURCHASEDTLS_ID = "0";
        this.MultiContNo = "";
        this.STATUS = "";
        this.Type = "";
        this.fromright_dt = null;
        this.toright_dt = null;
        this.text = "Submit";
        this.txtchild = "Add";
        this.AccountNameList = [];
        this.Allitemlist = [];
        this.Itemslist = [];
        this.AccountNameStep2List = [];
        this.Tbl3 = [];
        this.AcctAmount_step1 = "";
        this.ActNarration_step1 = "";
        this.NetAmount_step1 = "";
        this.NetTotal_step1 = "";
        this.ContainerNo_step1 = "";
        this.Accountlist_step1 = [];
        this.Deduction_step1 = "";
        this.seltaxableamt = 0;
        this.Deduction_step2 = "";
        this.Accountlist_step2 = [];
        this.AcctAmount_step2 = "";
        this.ActNarration_step2 = "";
        this.NetAmount_step2 = "";
        this.NetTotal_step2 = "";
        this.ContainerNo_step2 = "";
        this.PurchaseNo_step2 = "";
        this.Narration_step2 = "";
        this.PassedAmount = "";
        this.InvoiceAmount = "";
        this.VoucherNo = "";
        this.supplierlist = [];
        this.PassedBylist = [];
        this.billaddress = "";
        this.billaddress_step1 = "";
        this.InvNo = "";
        this.InvDate = "";
        this.BillReceive = "";
        this.DueDate = "";
        this.passedby = "";
        this.IsPassed = false;
        this.JobNo_step2 = "";
        this.Amount_step2 = "";
        this.actpassedamount_step2 = "0";
        this.ACCBANKDTLSID = "0";
        this.Netdeduction_step2 = "";
        this.NetAmt_step2 = "";
        this.togglevno = true;
        this.togglepassedby = true;
        this.togglepamount = true;
        this.toggleinvamount = true;
        this.billaddressList = [];
        this.billaddressList_step1 = [];
        this.billaddressfilter = [];
        this.billaddressfilter_step1 = [];
        this.buttonStatus = false;
        this.yes = true;
        this.chktdslbl_step1 = "Is Tds Applicable";
        this.chkIsTDS_step1 = false;
        this.chktdslbl_step2 = "Is Tds Applicable";
        this.chkIsTDS_step2 = false;
        this.SuppliertdsList = [];
        this.TDSTYPE = "";
        this.TDSTYPE1 = "";
        this.sectioncnt = "0";
        this.GSTApplicable_step1 = "";
        this.TDSApplicable_step1 = "";
        this.GSTApplicable_step2 = "";
        this.TDSApplicable_step2 = "";
        this.disabletdsbtn = true;
        this.disableresetbtn = true;
        this.showModal_TDS = false;
        this.str = "";
        this.TDSList = [];
        this.seltdsamt = 0;
        this.selpiamt = 0;
        this.newArray = [];
        this.tdsaddflag = "0";
        this.mawbno = "";
        this.STRTXT = "";
        this.TotalTDSList = [];
        this.disablecheckbox = true;
        this.disableamt = false;
        this.disablededuction = false;
        this.disablechildaddbtn = false;
        this.disablechildresetbtn = false;
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
    MAWBPurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this._loginService.getLogin())
        var todaydate = new Date();
        this.purchasedate_step1 = this._dataService.datechnge(todaydate);
        this.purchasedate_step2 = this._dataService.datechnge(todaydate);
        this._activatedRoute.params.subscribe(function (params) {
            //console.log(params)
            _this.PurchaseNo_step2 = params["PurchaseNo"];
            _this.STATUS = params["Status"];
            _this.Type = params["Type"];
        });
        this.Clearall_MAWBTMP();
        if (this.PurchaseNo_step2 == " ") {
            //  this.verifyPermission('99','Add')
            this.verifyPermission('426', 'Add');
        }
        else {
            //this.verifyPermission('99','Modify')      
            this.verifyPermission('426', 'Modify');
            this.text = 'Update';
        }
        var jsonparam = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD_MAWB", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.supplierlist = data.Table1;
            _this.PassedBylist = data.Table2;
            _this.billaddressList = data.Table4;
            _this.billaddressList_step1 = data.Table4;
            _this.SuppliertdsList = data.Table5;
        });
        var jsonparam1 = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", jsonparam1)
            .subscribe(function (data) {
            _this.AccountNameStep2List = data.Table;
        });
    };
    MAWBPurchaseComponent.prototype.Clearall_MAWBTMP = function () {
        var jsonmaster = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_PURCHASE_RESETMAWB_NG", jsonmaster)
            .subscribe(function (data) {
        });
    };
    MAWBPurchaseComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (data.Table.length > "0" && (_this._loginService.getLogin().ROLETYPE) != "SA") {
                _this.fromright_dt = data.Table[0].blockuntildt;
                _this.toright_dt = data.Table[0].rightstodt;
                _this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    MAWBPurchaseComponent.prototype.onDisableRange = function () {
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
    MAWBPurchaseComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    MAWBPurchaseComponent.prototype.PurchaseDate_Step2Changed = function (ev) {
        this.purchasedate_step2 = ev.formatted;
        console.log(ev);
    };
    MAWBPurchaseComponent.prototype.PurchaseDate_Step1Changed = function (ev) {
        this.purchasedate_step1 = ev.formatted;
        console.log(ev);
    };
    MAWBPurchaseComponent.prototype.GetActName = function (Acctcode) {
        this.Item_step1 = undefined;
        this.ACCTNAME = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; })[0].ACCTNAME;
        this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
        this.EnableDisableamtdeduction(Acctcode);
    };
    MAWBPurchaseComponent.prototype.GetActName_Step2 = function (Acctcode) {
        this.Item_step2 = undefined;
        this.ACCTNAME = this.AccountNameStep2List.filter(function (code) { return code.ACCTCODENAME === Acctcode; })[0].ACCTNAME;
        this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
        //this.EnableDisableamtdeduction(Acctcode);
    };
    MAWBPurchaseComponent.prototype.EnableDisableamtdeduction = function (Acctcode) {
        if (Acctcode.split("|")[0] == "G100186" || Acctcode.split("|")[0] == "G100153") {
            this.disablededuction = false;
            this.AcctAmount_step1 = "0";
            this.disableamt = true;
        }
        else {
            this.Deduction_step1 = "0";
            this.disablededuction = true;
            this.disableamt = false;
        }
    };
    MAWBPurchaseComponent.prototype.GetSupplierName = function (Suppcode) {
        var _this = this;
        this.billaddressfilter = this.billaddressList.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter.length == "1") {
            this.billaddress = this.billaddressfilter[0].DATAVALUEFIELD;
        }
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        // this.GetTDSType();
        this.EnableDisableDtn(supptds);
    };
    MAWBPurchaseComponent.prototype.GetStep1SupplierName = function (Suppcode) {
        var _this = this;
        this.billaddress_step1 = "";
        this.billaddressfilter_step1 = this.billaddressList_step1.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter_step1.length == "1") {
            this.billaddress_step1 = this.billaddressfilter_step1[0].DATAVALUEFIELD;
        }
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.step1suppliername; })[0].TEXTFIELD;
        //  this.GetTDSType();
        this.EnableDisableDtn(supptds);
    };
    MAWBPurchaseComponent.prototype.EnableDisableDtn = function (tds) {
        if (tds == "1") {
            this.chktdslbl_step1 = "TDS Applicable for Selected Supplier";
            if (this.PurchaseNo_step2 != ' ') {
                this.disabletdsbtn = true;
            }
            else {
                this.disabletdsbtn = false;
            }
            this.chkIsTDS_step1 = true;
            this.disableresetbtn = true;
            // this.disablechktds=true;
        }
        if (tds == "0") {
            this.chktdslbl_step1 = "Is Tds Applicable";
            this.disabletdsbtn = true;
            this.chkIsTDS_step1 = false;
            this.disableresetbtn = true;
        }
    };
    MAWBPurchaseComponent.prototype.GetTDSType = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsondata = {
            SUPPCODE: this.step1suppliername,
            PURCHASEDT: this.purchasedate_step1,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_GETTDSTYPE", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSTYPE = data.Table[0].TDS_TYPE.split(",")[0];
                _this.TDSTYPE1 = data.Table[0].TDS_TYPE.split(",")[1];
                _this.sectioncnt = data.Table[0].CNT;
                // if(this.TDSTYPE=="EDC"){
                //     this.disabletdsbtn=true;
                // }
                // else if(this.TDSTYPE=="LDC" || this.TDSTYPE=="BRC"){
                //   this.disabletdsbtn=false;
                // }
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "102") {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.step1suppliername = undefined;
                _this.billaddress_step1 = undefined;
                _this.chktdslbl_step1 = "";
                _this.chkIsTDS_step1 = false;
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                // this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MAWBPurchaseComponent.prototype.Addchildrcrdstep1 = function () {
        var _this = this;
        if (this.mawbno == "" || this.mawbno == undefined) {
            this._toasterService.toast('warning', 'warning', 'Mawb no cannot be blank  !');
            return false;
        }
        if (this.mawbno.length != 11) {
            this._toasterService.toast('warning', 'warning', 'Invalid Mawb no   !');
            return false;
        }
        if (this.step1suppliername == "" || this.step1suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        if (this.AccountName_step1 == "" || this.AccountName_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.ID == "" || this.ID == undefined || this.ID == "0") {
            var filterchldactcode = this.Accountlist_step1.filter(function (filter) { return filter.CLIENT == _this.AccountName_step1.split("|")[0]; });
            if (filterchldactcode.length > 0) {
                if (filterchldactcode[0].CLIENT == this.AccountName_step1.split("|")[0]) {
                    this._toasterService.toast('warning', 'warning', this.ACCTNAME + ' is already exist !');
                    return false;
                }
            }
        }
        if (this.AccountName_step1.split("|")[0] == 'G100179' || this.AccountName_step1.split("|")[0] == 'G102024'
            || this.AccountName_step1.split("|")[0] == 'G102025' || this.AccountName_step1.split("|")[0] == 'G100235'
            || this.AccountName_step1.split("|")[0] == 'G101468') {
            if (this.AcctAmount_step1 == '' || this.AcctAmount_step1 == undefined) {
                this._toasterService.toast('warning', 'warning', 'Amount could not be blank!');
                return false;
            }
        }
        if (this.AccountName_step1.split("|")[0] == 'G100235') {
            if (parseFloat(this.AcctAmount_step1) <= 50) {
                this._toasterService.toast('warning', 'warning', 'Feed Correct Value  !');
                return false;
            }
        }
        if (this.AccountName_step1.split("|")[0] == 'G100153' || this.AccountName_step1.split("|")[0] == 'G100186') {
            if (this.Deduction_step1 == '' || this.Deduction_step1 == undefined) {
                this._toasterService.toast('warning', 'warning', 'Deduction could not be blank!');
                return false;
            }
        }
        // if (this.AcctAmount_step1 == "" || this.AcctAmount_step1 == undefined  ) {
        //   this._toasterService.toast('warning', 'warning', 'Amount could not be blank !');
        //   return false;
        // }
        // else  if (parseFloat(this.AcctAmount_step1) < 0) {
        //   this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
        //   return false;
        // } 
        // if (parseFloat(this.AcctAmount_step1) >0 && parseFloat(this.Deduction_step1 )>0) {
        //   this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
        //   return false;
        // }
        // if (parseFloat(this.AcctAmount_step1) < 0 && parseFloat(this.Deduction_step1 )>0) {
        //   this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
        //   return false;
        // }
        // if (parseFloat(this.Deduction_step1) < 0) {
        //   this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
        //   return false;}
        if (this.TDSApplicable_step1 == "" || this.TDSApplicable_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select TDS applicable or not.!');
            return false;
        }
        if (this.GSTApplicable_step1 == "" || this.GSTApplicable_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select GST applicable or not.!');
            return false;
        }
        this.loaderService.display(true);
        //console.log(this.Item_step1)
        var jsonparam = {
            ID: this.ID,
            ENTRYNO: this.ENTRYNO,
            VGUID: this._loginService.getLogin()[0].GUID,
            CLIENT: this.AccountName_step1.split("|")[0],
            ACCOUNT_NAME: this.ACCTNAME,
            AMOUNT: this.AcctAmount_step1,
            DEDUCTION: this.Deduction_step1,
            MAWBNO: this.mawbno,
            ACC_PURCHASEDTLS_ID: this.PURCHASEDTLS_ID,
            IsJobReport: this.AccountName_step1.split("|")[1],
            CMPID: this._loginService.getLogin()[0].CMPID,
            PUR_TAXABLE: (this.GSTApplicable_step1 == "") ? "" : this.GSTApplicable_step1,
            ISTDSAPP: (this.chkIsTDS_step1 == true) ? "0" : "0",
            PUR_TDS: (this.TDSApplicable_step1 == "") ? "0" : this.TDSApplicable_step1,
        };
        //  console.log(jsonparam)  ITS NEW SO NOT CHANGED TO NG 
        this._dataService.Common("Accounts/ACC_PURCHASE_MAWB_TMP_IU_NG", jsonparam)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Accountlist_step1 = data.Table;
                _this.NetAmount_step1 = data.Table1[0].TOTAMOUNT;
                _this.NetTotal_step1 = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrdstep1();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MAWBPurchaseComponent.prototype.Resetchildrcrdstep1 = function () {
        this.ID = "0";
        this.AccountName_step1 = undefined;
        this.AcctAmount_step1 = "";
        this.Deduction_step1 = "";
        this.txtchild = "Add";
        this.ENTRYNO = "0";
        this.PURCHASEDTLS_ID = "0";
        this.TDSApplicable_step1 = "";
        this.GSTApplicable_step1 = "";
        this.disableamt = false;
        this.disablededuction = false;
    };
    MAWBPurchaseComponent.prototype.Editchildrecdstep1 = function (id) {
        var filterData = this.Accountlist_step1.filter(function (filter) { return filter.ID == id; })[0];
        if (filterData.IS_NOT_EDIT_ABLE == "1") {
            alert("You cannot delete this reocrd!");
            return false;
        }
        else {
            this.ID = filterData.ID;
            this.AccountName_step1 = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
            this.AcctAmount_step1 = filterData.AMOUNT;
            this.Deduction_step1 = filterData.DEDUCTION;
            this.txtchild = "Update";
            this.PURCHASEDTLS_ID = filterData.ACC_PUR_MAWB_ID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
            this.TDSApplicable_step1 = filterData.PUR_TDS;
            this.GSTApplicable_step1 = filterData.PUR_TAXABLE;
            this.GetActName(this.AccountName_step1);
        }
        this.EnableDisableamtdeduction(this.AccountName_step1);
    };
    MAWBPurchaseComponent.prototype.deletechildrecdstep1 = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASEE_MAWB_TMP_DEL_NG", jsondelete)
                .subscribe(function (data) {
                if (data.Table1[0].STATUS.split("#")[0] == "100") {
                    _this.Accountlist_step1 = data.Table;
                    _this.NetAmount_step1 = data.Table1[0].TOTAMOUNT;
                    _this.NetTotal_step1 = data.Table1[0].NETTOTAL;
                    _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUS.split("#")[1]);
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("warning", "warning", "Error in Deleting");
                    _this.loaderService.display(false);
                }
            });
        }
    };
    MAWBPurchaseComponent.prototype.Add_Mainstep1 = function () {
        var _this = this;
        if (this.step1suppliername == "" || this.step1suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        if (this.billaddress_step1 == "" || this.billaddress_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier address  !');
            return false;
        }
        if (this.mawbno == "" || this.mawbno == undefined) {
            this._toasterService.toast('warning', 'warning', 'Mawb no cannot be blank  !');
            return false;
        }
        if (this.mawbno.length != 11) {
            this._toasterService.toast('warning', 'warning', 'Invalid Mawb no   !');
            return false;
        }
        if (this.Accountlist_step1.length == 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter Account Details  !');
            return false;
        }
        var filteractcode = this.Accountlist_step1.filter(function (filter) { return filter.CLIENT == "G100235"; });
        console.log(filteractcode);
        if (filteractcode.length == 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter the freight Amount  !');
            return false;
        }
        //Airfrightcommission---G100153         freightrebate------G100186
        var frtrebateactcode = this.Accountlist_step1.filter(function (filter) { return filter.CLIENT == "G100186"; });
        var afcommactcode = this.Accountlist_step1.filter(function (filter) { return filter.CLIENT == "G100153"; });
        if (afcommactcode.length == 0 && frtrebateactcode.length == 0) {
            if (confirm('Please confirm... Freight Rebate is 0  and Air Freight Commission is 0 , \n Click on button Ok to continue and Cancel to Retry !?')) {
            }
            else {
                return false;
            }
        }
        else if (afcommactcode.length == 0 && frtrebateactcode.length != 0) {
            if (confirm('Please confirm... Air Freight Commission is 0 , \n Click on button Ok to continue and Cancel to Retry  !?')) {
            }
            else {
                return false;
            }
        }
        else if (afcommactcode.length != 0 && frtrebateactcode.length == 0) {
            if (confirm('Please confirm... Freight Rebate is 0 , Click on button Ok to continue and Cancel to Retry !?')) {
            }
            else {
                return false;
            }
        }
        // var str = '';
        // for (var i = 0, len = this.Accountlist_step1.length; i < len; i++) {
        //   this.Accountlist_step1[i].AMOUNT=(this.Accountlist_step1[i].AMOUNT=="")?"0":this.Accountlist_step1[i].AMOUNT;
        //   this.Accountlist_step1[i].DEDUCTION=(this.Accountlist_step1[i].DEDUCTION=="")?"0":this.Accountlist_step1[i].DEDUCTION;
        //   this.STRTXT += this.mawbno + ',' + this.Accountlist_step1[i].CLIENT + ',' + this.Accountlist_step1[i].AMOUNT + ','+ this.Accountlist_step1[i].DEDUCTION + ',' + this.Accountlist_step1[i].PUR_TDS + ',' + this.Accountlist_step1[i].PUR_TAXABLE + ";" ;
        // } 
        // alert('go');
        // console.log(this.STRTXT);
        this.loaderService.display(true);
        var jsonparam = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            MAWBNO: this.mawbno,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: "PI"
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_MAWBNO_PAGELOAD_NG", jsonparam)
            .subscribe(function (data) {
            if (data.Table.length == 0) {
                _this._toasterService.toast('warning', 'warning', data.Table1[0].STATUS.split("#")[1]);
                _this.loaderService.display(false);
                return false;
            }
            else {
                _this.Accountlist_step1 = data.Table;
                _this.Accountlist_step2 = data.Table;
                _this.Tbl3 = data.Table2;
                _this.suppliername = _this.step1suppliername;
                _this.GetSupplierName(_this.suppliername);
                _this.billaddress = _this.billaddress_step1;
                _this.chkIsTDS_step2 = _this.chkIsTDS_step1;
                _this.chktdslbl_step2 = _this.chktdslbl_step1;
                _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                _this.Tottaxableamt = data.Table1[0].TOTTAXAMT;
                _this.buttonStatus = true;
                if (_this.chkIsTDS_step2 == true) {
                    _this.disabletdsbtn = false;
                }
                else {
                    _this.disabletdsbtn = true;
                    _this.disableresetbtn = true;
                }
                _this.disableresetbtn = true;
                _this._toasterService.toast('success', 'success', data.Table1[0].STATUS.split("#")[1]);
                $("#data-step2").removeClass("disabled");
                $('.nav a').filter('a[href="#step2"]').tab('show');
                $("#data-step1").addClass("disabled");
                _this.loaderService.display(false);
            }
        });
    };
    MAWBPurchaseComponent.prototype.Reset = function () {
        var _this = this;
        this.loaderService.display(true);
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrdstep2();
            this.InvNo = "";
            this.InvDate = "";
            this.DueDate = "";
            this.BillReceive = "";
            this.PurchaseNo_step2 = ' ';
            //this.purchasedate_step2 = '';
            this.passedby = '';
            this.PassedAmount = '';
            this.InvoiceAmount = '';
            this.suppliername = undefined;
            this.VoucherNo = '';
            this.IsPassed = false;
            this.Narration_step2 = '';
            this.NetAmount_step2 = '';
            this.Netdeduction_step2 = '';
            this.NetAmt_step2 = '';
            this.NetAmount_step1 = '';
            this.NetTotal_step1 = '';
            this.text = "Submit";
            this.Accountlist_step1 = [];
            this.Accountlist_step2 = [];
            this.buttonStatus = false;
            this.chktdslbl_step2 = "Is Tds Applicable";
            this.chkIsTDS_step2 = false;
            this.chktdslbl_step1 = "Is Tds Applicable";
            this.chkIsTDS_step1 = false;
            this.step1suppliername = undefined;
            this.billaddress_step1 = undefined;
            this.billaddress = undefined;
            this.mawbno = '';
            $("#data-step2").addClass("disabled");
            $("#data-step1").removeClass("disabled");
            $('.nav a').filter('a[href="#step1"]').tab('show');
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_MAWB_NG_RESET", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
            });
            this._router.navigate(["/accounts/purchase/mawb/PI/2/ "]);
            this.loaderService.display(false);
        }
        else {
            this.loaderService.display(false);
            return false;
        }
        this.loaderService.display(false);
    };
    MAWBPurchaseComponent.prototype.Addchildrcrdstep2 = function () {
        var _this = this;
        if (this.AccountName_step2 == "" || this.AccountName_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            this.loaderService.display(false);
            return false;
        }
        if (this.Itemslist.length > 0) {
            if (this.Item_step2 == "" || this.Item_step2 == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.suppliername == this.AccountName_step2.split('|')[0]) {
            this._toasterService.toast('warning', 'warning', 'Supplier and Account Name Should be different .!');
            return false;
        }
        if (this.TDSApplicable_step2 == "" || this.TDSApplicable_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select TDS applicable or not.!');
            return false;
        }
        if (this.GSTApplicable_step2 == "" || this.GSTApplicable_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select GST applicable or not.!');
            return false;
        }
        if ((this.Amount_step2 == "" || this.Amount_step2 == undefined || this.Amount_step2 == '0') && (this.Deduction_step2 == "" || this.Deduction_step2 == undefined || this.Deduction_step2 == '0')) {
            this._toasterService.toast('warning', 'warning', 'Please enter Amount or Deduction.!');
            return false;
        }
        if (parseFloat(this.Amount_step2) > 0 && parseFloat(this.Deduction_step2) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Amount_step2) < 0 && parseFloat(this.Deduction_step2) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Deduction_step2) < 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        // console.log(this.AccountName_step2)
        //  console.log(this.Item_step2)
        this.loaderService.display(true);
        var ITEMCODEvl;
        var ITEMvl;
        var ITEMDT;
        ITEMCODEvl = (this.Item_step2 == null) ? "" : this.Item_step2.split("|")[0];
        ITEMvl = (this.Item_step2 == null) ? "" : this.Item_step2.split("|")[2];
        ITEMDT = (this.Item_step2 == null) ? "" : this.Item_step2;
        if (ITEMCODEvl == null) {
            ITEMCODEvl = "";
        }
        if (ITEMvl == null) {
            ITEMvl = "";
        }
        if (ITEMDT == null) {
            ITEMDT = "";
        }
        var jsonchild = {
            ID: this.ID_Step2,
            ENTRYNO: this.ENTRYNO,
            CLIENT: this.AccountName_step2.split("|")[0],
            JOBNO: this.JobNo_step2,
            DEDUCTION: this.Deduction_step2,
            AMOUNT: this.Amount_step2,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            NARRATION: this.ActNarration_step2,
            IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: ITEMCODEvl,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: ITEMvl,
            ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID,
            STATUS: this.STATUS,
            IsJobReport: this.AccountName_step2.split("|")[1],
            ITEM_DATAVALUE: ITEMDT,
            SRPIPASSAMOUNT: this.actpassedamount_step2,
            CMPID: this._loginService.getLogin()[0].CMPID,
            PUR_TAXABLE: (this.GSTApplicable_step2 == "") ? "" : this.GSTApplicable_step2,
            ISTDSAPP: (this.chkIsTDS_step2 == true) ? "0" : "0",
            PUR_TDS: (this.TDSApplicable_step2 == "") ? "0" : this.TDSApplicable_step2,
            MAWBFLAG: "1"
        };
        //  console.log(jsonchild)
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_IU_NG", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Accountlist_step2 = data.Table;
                _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                _this.Tottaxableamt = data.Table1[0].TOTTAXAMT;
                _this.Resetchildrcrdstep2();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MAWBPurchaseComponent.prototype.Resetchildrcrdstep2 = function () {
        this.ID_Step2 = "0";
        this.AccountName_step2 = undefined;
        this.JobNo_step2 = "";
        this.Deduction_step2 = "";
        this.Amount_step2 = "";
        this.ActNarration_step2 = "";
        this.Item_step2 = undefined;
        this.actpassedamount_step2 = "0";
        this.txtchild = "Add";
        this.TDSApplicable_step2 = "";
        this.GSTApplicable_step2 = "";
        this.ACCBANKDTLSID = "0";
    };
    MAWBPurchaseComponent.prototype.Editchildrecdstep2 = function (id) {
        var filterData = this.Accountlist_step2.filter(function (filter) { return filter.ID == id; })[0];
        if (filterData.IS_NOT_EDIT_ABLE == "1") {
            alert("You cannot edit this record!");
            return false;
        }
        else {
            this.ID_Step2 = filterData.ID;
            this.AccountName_step2 = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
            this.Amount_step2 = filterData.AMOUNT;
            this.Deduction_step2 = filterData.DEDUCTION;
            this.actpassedamount_step2 = filterData.SRPIPASSAMOUNT;
            this.Item_step2 = filterData.ITEM_DATAVALUE;
            this.JobNo_step2 = filterData.JOBNO;
            this.ActNarration_step2 = filterData.NARRATION;
            this.txtchild = "Update";
            this.ACCBANKDTLSID = filterData.ACC_PURCHASEDTLS_ID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
            this.TDSApplicable_step2 = filterData.PUR_TDS;
            this.GSTApplicable_step2 = filterData.PUR_TAXABLE;
        }
    };
    MAWBPurchaseComponent.prototype.deletechildrecdstep2 = function (id, editflag) {
        var _this = this;
        if (editflag == "1") {
            alert("You cannot delete this reocrd!");
            return false;
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID };
                this._dataService.getData("Accounts/ACC_PURCHASE_TMP_DEL_NG", jsondelete)
                    .subscribe(function (data) {
                    if (data.Table1[0].STATUS.split("#")[0] == "100") {
                        _this.Accountlist_step2 = data.Table;
                        _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUS.split("#")[1]);
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", "Error in Deleting");
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
    MAWBPurchaseComponent.prototype.supplier_validation = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        this.loaderService.display(true);
        var jsonview = {
            SUPCODE: this.suppliername,
            SUPINVNO: this.InvNo,
            ENTRYNO: this.PurchaseNo_step2
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_SUPINVNO_VALIDATE", jsonview)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split('#')[0] == '100') {
                _this.Add_Main();
            }
            else {
                var answer = confirm("Record with same supplier and invoice number already exists.\n Click Ok to Add & Cancel to Retry!");
                if (answer == false) {
                    return false;
                }
                else {
                    _this.Add_Main();
                }
            }
        });
        this.loaderService.display(false);
    };
    MAWBPurchaseComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.purchasedate_step2 == "" || this.purchasedate_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Purchase Date cannot be left blank!');
            return false;
        }
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        if (this.InvDate == "" || this.InvDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice Date cannot be left blank!');
            return false;
        }
        if (this._dataService.date2Comparison(this.DueDate.formatted, this.purchasedate_step2.formatted) == false) {
            this._toasterService.toast('warning', 'warning', 'Due date Cannot be Less than Purchase Entry date');
            return false;
        }
        if (this.tdsaddflag == "0" && this.chkIsTDS_step2 == true) {
            this._toasterService.toast('warning', 'warning', 'Please enter tds details first !');
            return false;
        }
        this.loaderService.display(true);
        var data;
        data = this.supplierlist.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            ENTRYNO: (this.PurchaseNo_step2 == undefined) ? "" : this.PurchaseNo_step2,
            ENTRYDT: this.purchasedate_step2,
            STATUS: this.STATUS,
            SUP_CODE: this.suppliername,
            SUP_NAME: data,
            SUP_INVNO: (this.InvNo == "") ? "" : this.InvNo,
            SUP_INVDT: (this.InvDate) ? this.InvDate.formatted : "",
            SUP_BILLRECEIVEDDT: (this.BillReceive) ? this.BillReceive.formatted : "",
            SUP_DUEDT: (this.DueDate) ? this.DueDate.formatted : "",
            PASSFLAG: (this.IsPassed == true) ? "Y" : "",
            PASSEDBY: (this.passedby == "") ? "0" : this.passedby,
            PASSEDAMT: (this.PassedAmount == "") ? "0" : this.PassedAmount,
            INVAMT: (this.InvoiceAmount == "") ? "0" : this.InvoiceAmount,
            VOUCHERNO: (this.VoucherNo == "") ? "0" : this.VoucherNo,
            MAWBN0: this.mawbno,
            FREIGHTG100235: (this.Tbl3[0].FREIGHT_G100235 == 0.00) ? "0.00" : this.Tbl3[0].FREIGHT_G100235,
            SURCHARGEG101468: (this.Tbl3[0].SURCHARGE_G101468 == 0.00) ? "0.00" : this.Tbl3[0].SURCHARGE_G101468,
            AIRFRTCOMMG100153: (this.Tbl3[0].AIRFRTCOMM_G100153 == 0.00) ? "0.00" : this.Tbl3[0].AIRFRTCOMM_G100153,
            FRTREBATEG100186: (this.Tbl3[0].FRTREBATE_G100186 == 0.00) ? "0.00" : this.Tbl3[0].FRTREBATE_G100186,
            NARRATION: this.Narration_step2,
            ACTUALAMOUNT: this.NetAmt_step2,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.PurchaseNo_step2 == ' ' || this.PurchaseNo_step2 == undefined) ? "INSERT" : "UPDATE",
            DOCUMENTG100179: (this.Tbl3[0].DOCUMENTCHRG_G100179 == 0.00) ? "0.00" : this.Tbl3[0].DOCUMENTCHRG_G100179,
            FK_SUP_ADDR_ID: this.billaddress.split("|")[0],
            AMSENSEXP_G102024: (this.Tbl3[0].AMSENSEXP_G102024 == 0.00) ? "0.00" : this.Tbl3[0].AMSENSEXP_G102024,
            MISCEXP_G102025: (this.Tbl3[0].MISCEXP_G102025 == 0.00) ? "0.00" : this.Tbl3[0].MISCEXP_G102025
        };
        var url = "";
        if (this.PurchaseNo_step2 == ' ' || this.PurchaseNo_step2 == undefined) {
            url = "Accounts/ACC_PURCHASE_INSERT_NG";
        }
        else {
            url = "Accounts/ACC_PURCHASE_UPDATE_NG";
        }
        this._dataService.Common(url, jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'success', data.Table[0].STATUSTEXT);
                _this.print(data.Table1[0].ENTRYNO);
                _this.RestMain();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.RestMain();
                _this.loaderService.display(false);
            }
        });
    };
    MAWBPurchaseComponent.prototype.RestMain = function () {
        this.Resetchildrcrdstep2();
        this.InvNo = "";
        this.InvDate = "";
        this.DueDate = "";
        this.BillReceive = "";
        this.PurchaseNo_step2 = ' ';
        // this.purchasedate_step2 = '';
        this.passedby = '';
        this.PassedAmount = '';
        this.InvoiceAmount = '';
        this.suppliername = undefined;
        this.VoucherNo = '';
        this.IsPassed = false;
        this.Narration_step2 = '';
        this.NetAmount_step2 = '';
        this.Netdeduction_step2 = '';
        this.NetAmt_step2 = '';
        this.billaddress = '';
        this.text = "Submit";
        this.Accountlist_step2 = [];
        this.Accountlist_step1 = [];
        $("#data-step2").addClass("disabled");
        $("#data-step1").removeClass("disabled");
        $('.nav a').filter('a[href="#step1"]').tab('show');
        this._router.navigate(["/accounts/purchase/mawb/PI/2/ "]);
        this.mawbno = "";
        this.NetAmount_step1 = "";
        this.NetTotal_step1 = "";
        this.step1suppliername = undefined;
        this.buttonStatus = false;
        this.chktdslbl_step1 = "Is Tds Applicable";
        this.chkIsTDS_step1 = false;
        this.step1suppliername = undefined;
        this.billaddress_step1 = undefined;
        this.disablechildaddbtn = false;
        this.disablechildresetbtn = false;
    };
    MAWBPurchaseComponent.prototype.RestMain_step1 = function () {
        var _this = this;
        this.loaderService.display(true);
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrdstep1();
            this.Accountlist_step1 = [];
            this.NetAmount_step1 = "";
            this.NetTotal_step1 = "";
            this.Deduction_step1 = "";
            this.step1suppliername = undefined;
            this.text = "Submit";
            this.Accountlist_step1 = [];
            this.buttonStatus = false;
            this.chktdslbl_step1 = "Is Tds Applicable";
            this.chkIsTDS_step1 = false;
            this.step1suppliername = undefined;
            this.billaddress_step1 = "";
            this.mawbno = "";
            $("#data-step2").addClass("disabled");
            $('.nav a').filter('a[href="#step1"]').tab('show');
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_MAWB_RESET_STEP1", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this._router.navigate(["/accounts/purchase/mawb/PI/2/ "]);
            });
            this.loaderService.display(false);
        }
        else {
            this.loaderService.display(false);
            return false;
        }
        this.loaderService.display(false);
    };
    MAWBPurchaseComponent.prototype.OpenTdsModal = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        this.showModal_TDS = true;
        this.str = "";
        this.loaderService.display(true);
        var jsondata = {
            SUPPCODE: this.suppliername,
            PURCHASEDT: this.purchasedate_step2,
            VGUID: this._loginService.getLogin()[0].GUID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_PIBP_GET_TDSDATA_NG", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSList = data.Table;
                // this.tottdsamt=data.Table2[0].TOTTDSAMT;
                _this.totpiamt = data.Table2[0].TOTPIAMT;
                _this.TotalTDSList = data.Table3;
                _this.sectioncnt = data.Table4[0].CNT;
                _this.seltdsamt = "0";
                _this.seltaxableamt = "0";
                if (_this.sectioncnt == "1") {
                    for (var i = 0; i < _this.TDSList.length; i++) {
                        _this.TDSList[i].Disabled = true;
                        _this.TDSList[i].Checked = true;
                        _this.str += _this.TDSList[i].TDSACCTID + ' |' + _this.TDSList[i].RATE + '|' + _this.TDSList[i].TDSAMOUNT + '|' + _this.TDSList[i].AMOUNT
                            + '|' + _this.TDSList[i].ITEMCODE + '|' + _this.TDSList[i].NARRATION + '|' + _this.TDSList[i].RATETYPE + '|' + _this.TDSList[i].ACCTID +
                            '|' + _this.TDSList[i].OFFLAG + ";";
                    }
                    _this.totpiamt = _this.totpiamt;
                    _this.seltaxableamt = data.Table2[0].TOTPIAMT;
                }
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                _this.TDSList = [];
                _this.tottdsamt = "";
                _this.seltdsamt = "";
                _this.seltaxableamt = "";
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MAWBPurchaseComponent.prototype.closeTdsModal = function () {
        this.str = "";
        this.newArray = [];
        this.showModal_TDS = false;
    };
    MAWBPurchaseComponent.prototype.getCheckedTDSData = function (event, tdsaccid, rate, TDSAmount, puramt, icode, narr, ratetype, accid, offlag) {
        // let data1: any = []
        // let data2
        // data1 = this.TDSList.filter((code: any) => code.ACCTID == accid) 
        // if(data1.length>"1"){
        //   data2 = this.TDSList.filter((code: any) => code.ITEMCODE == acccode) 
        //   }
        //this.newArray=[];
        var _this = this;
        var Tdsamt;
        this.sel_accid = accid;
        if (event) {
            var selamt = parseFloat(this.selpiamt);
            var piamt = parseFloat(puramt);
            var newtot = (selamt + piamt);
            console.log(newtot.toFixed(2));
            this.selpiamt = newtot.toFixed(2);
            this.seltaxableamt = parseFloat(this.seltaxableamt) + parseFloat(puramt);
            var obj = {
                TDSACCTID: tdsaccid,
                RATE: rate,
                TDSAMOUNT: TDSAmount,
                PURAMT: puramt,
                ITEMCODE: icode,
                NARR: narr,
                RATETYPE: ratetype,
                ACCTID: accid,
                OFFLAG: offlag
            };
            this.newArray.push(obj);
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.TDSACCTID == _this.sel_accid; });
            this.newArray.splice(index, 1);
            var selamt = parseFloat(this.seltaxableamt);
            var piamt = parseFloat(puramt);
            var newtot = (selamt - piamt);
            this.seltaxableamt = newtot.toFixed(2);
        }
        if (event) {
            for (var i = 0; i < this.TDSList.length; i++) {
                if (this.TDSList[i]["ACCTID"] == accid) {
                    if (this.TDSList[i]["ITEMCODE"] != icode) {
                        this.TDSList[i].Disabled = true;
                    }
                    else if (this.TDSList[i]["ITEMCODE"] == icode) {
                        this.TDSList[i].Disabled = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.TDSList.length; i++) {
                if (this.TDSList[i]["ACCTID"] == accid) {
                    if (this.TDSList[i]["ITEMCODE"] != icode) {
                        this.TDSList[i].Disabled = false;
                    }
                    else if (this.TDSList[i]["ITEMCODE"] == icode) {
                        this.TDSList[i].Disabled = false;
                    }
                }
            }
        }
    };
    MAWBPurchaseComponent.prototype.AddtdsDetails = function () {
        var _this = this;
        // var str = '';
        if (this.sectioncnt > 1) {
            if (this.newArray == "" || this.newArray == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select at least one record!');
                return false;
            }
            if (this.Tottaxableamt != this.seltaxableamt) {
                this._toasterService.toast('warning', 'warning', 'The selected taxable amount doesnt match with Total taxable Amount !');
                return false;
            }
            for (var i = 0, len = this.newArray.length; i < len; i++) {
                this.str += this.newArray[i].TDSACCTID + ' |' + this.newArray[i].RATE + '|' + this.newArray[i].TDSAMOUNT + '|' + this.newArray[i].PURAMT
                    + '|' + this.newArray[i].ITEMCODE + '|' + this.newArray[i].NARR + '|' + this.newArray[i].RATETYPE + '|' + this.newArray[i].ACCTID +
                    '|' + this.newArray[i].OFFLAG + ";";
            }
        }
        console.log(this.str);
        var jsontdsdtl = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            STATUS: this.STATUS,
            VGUID: this._loginService.getLogin()[0].GUID,
            SUPCODE: this.suppliername.split("|")[0],
            STR: this.str
        };
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_TDSMULTI_IU_NG", jsontdsdtl)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Accountlist_step2 = data.Table;
                _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                _this.loaderService.display(false);
                _this.str = "";
                _this.showModal_TDS = false;
                _this.disabletdsbtn = true;
                _this.disableresetbtn = false;
                _this.tdsaddflag = "1";
                _this.disablepurchasedate_step2 = true;
                _this.disablechildaddbtn = true;
                _this.disablechildresetbtn = true;
            }
        });
    };
    MAWBPurchaseComponent.prototype.ResetTDS = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset TDS data?')) {
            var jsonmaster = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_TDS_RESET_NG", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.Accountlist_step2 = data.Table;
                    _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                    _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                    _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                    _this.Resetchildrcrdstep2();
                    _this.str = "";
                    _this.newArray = [];
                    _this.disabletdsbtn = false;
                    _this.tdsaddflag = "0";
                    _this.disablechildaddbtn = false;
                    _this.disablechildresetbtn = false;
                    _this.disablepurchasedate_step2 = false;
                }
            });
        }
    };
    MAWBPurchaseComponent.prototype.print = function (pono) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Purchase-print/' + pono + '/' + this.STATUS + '/', "Purchase Print", toolbar);
    };
    MAWBPurchaseComponent.prototype.fn_Validate_MawbNo = function (MawbNo) {
        var _this = this;
        this.loaderService.display(true);
        var jsonmawb = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            MAWBNO: MawbNo,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_MAWB_VALIDATE", jsonmawb)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split("#")[0] == "103") {
                var Msg = data.Table[0].STATUS.split("#")[1];
                alert(Msg);
                _this.mawbno = "";
                return false;
            }
            else if (data.Table[0].STATUS.split("#")[0] == "100") {
                return false;
            }
        });
        this.loaderService.display(false);
    };
    MAWBPurchaseComponent.prototype.TextareaValueChange = function (ev) {
        this.Narration_step2 = ev.target.value;
    };
    MAWBPurchaseComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    MAWBPurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mawb-purchase',
            template: __webpack_require__(/*! raw-loader!./mawb-purchase.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/mawb-purchase.component.html"),
            styles: ["\n    a:hover,a:focus{\n        text-decoration: none;\n        outline: none;\n    }\n    .tab .nav-tabs {\n        border-bottom:0 none;\n    }\n    .tab .nav-tabs li{\n        margin-right: 10px;\n    }\n    .tab .nav-tabs li a{\n        position: relative;\n        padding: 4px;\n        color: #fff;\n        font-size: 11px;\n        z-index: 1;\n        font-family:verdana;\n        font-weight:bold\n    }\n    .tab .nav-tabs li a:hover{\n        background:transparent;\n        border:1px solid transparent;\n        color: #444;\n    }\n     .tab .nav-tabs li a:before{\n        content: \"\";\n        width:100%;\n        height:100%;\n        position:absolute;\n        bottom: 3px;\n        left:0px;\n        font-size:11px;\n        background-color: #379b50;\n        border: 1px solid #d3d3d3;\n        border-bottom: 0px none;\n        border-radius: 10px 10px 0 0;\n        transform-origin: left center 0;\n        transform: perspective(6px) rotateX(6deg);\n        z-index:-1;\n    } \n    .tab .nav-tabs li a.active:before{\n        background: #fff;\n    }\n    .tab .nav-tabs li a.active,\n    .tab .nav-tabs li a.active:focus,\n    .tab .nav-tabs li a.active:hover{\n        border:1px solid transparent;\n        background:transparent;\n        color: #212529;\n        z-index: 2;\n    }\n    "]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mawb-purchase',
            template: __webpack_require__(/*! raw-loader!./mawb-purchase.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/mawb-purchase.component.html"),
            styles: ["\n    a:hover,a:focus{\n        text-decoration: none;\n        outline: none;\n    }\n    .tab .nav-tabs {\n        border-bottom:0 none;\n    }\n    .tab .nav-tabs li{\n        margin-right: 10px;\n    }\n    .tab .nav-tabs li a{\n        position: relative;\n        padding: 4px;\n        color: #fff;\n        font-size: 11px;\n        z-index: 1;\n        font-family:verdana;\n        font-weight:bold\n    }\n    .tab .nav-tabs li a:hover{\n        background:transparent;\n        border:1px solid transparent;\n        color: #444;\n    }\n     .tab .nav-tabs li a:before{\n        content: \"\";\n        width:100%;\n        height:100%;\n        position:absolute;\n        bottom: 3px;\n        left:0px;\n        font-size:11px;\n        background-color: #379b50;\n        border: 1px solid #d3d3d3;\n        border-bottom: 0px none;\n        border-radius: 10px 10px 0 0;\n        transform-origin: left center 0;\n        transform: perspective(6px) rotateX(6deg);\n        z-index:-1;\n    } \n    .tab .nav-tabs li a.active:before{\n        background: #fff;\n    }\n    .tab .nav-tabs li a.active,\n    .tab .nav-tabs li a.active:focus,\n    .tab .nav-tabs li a.active:hover{\n        border:1px solid transparent;\n        background:transparent;\n        color: #212529;\n        z-index: 2;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], MAWBPurchaseComponent);
    return MAWBPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/accounts/purchase/multicontainer-purchase.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/purchase/multicontainer-purchase.component.ts ***!
  \************************************************************************/
/*! exports provided: MulticontainerPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulticontainerPurchaseComponent", function() { return MulticontainerPurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MulticontainerPurchaseComponent = /** @class */ (function () {
    function MulticontainerPurchaseComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.purchasedate_step1 = null;
        this.purchasedate_step2 = null;
        this.disablepurchasedate_step2 = false;
        this.ID = "0";
        this.ENTRYNO = "0";
        this.ISNOTEDITABLE = "0";
        this.ACCTNAME = "";
        this.PURCHASEDTLS_ID = "0";
        this.seltaxableamt = 0;
        this.MultiContNo = "";
        this.STATUS = "";
        this.Type = "";
        this.fromright_dt = null;
        this.toright_dt = null;
        this.text = "Submit";
        this.txtchild = "Add";
        this.AccountNameList = [];
        this.Allitemlist = [];
        this.Itemslist = [];
        this.AcctAmount_step1 = "";
        this.ActNarration_step1 = "";
        this.NetAmount_step1 = "";
        this.NetTotal_step1 = "";
        this.ContainerNo_step1 = "";
        this.Accountlist_step1 = [];
        this.Deduction_step2 = "";
        this.Accountlist_step2 = [];
        this.AcctAmount_step2 = "";
        this.ActNarration_step2 = "";
        this.NetAmount_step2 = "";
        this.NetTotal_step2 = "";
        this.ContainerNo_step2 = "";
        this.PurchaseNo_step2 = "";
        this.Narration_step2 = "";
        this.PassedAmount = "";
        this.InvoiceAmount = "";
        this.VoucherNo = "";
        this.supplierlist = [];
        this.PassedBylist = [];
        this.billaddress = "";
        this.billaddress_step1 = "";
        this.InvNo = "";
        this.InvDate = "";
        this.BillReceive = "";
        this.DueDate = "";
        this.passedby = "";
        this.IsPassed = false;
        this.JobNo_step2 = "";
        this.Amount_step2 = "";
        this.actpassedamount_step2 = "0";
        this.ACCBANKDTLSID = "0";
        this.Netdeduction_step2 = "";
        this.NetAmt_step2 = "";
        this.togglevno = true;
        this.togglepassedby = true;
        this.togglepamount = true;
        this.toggleinvamount = true;
        this.billaddressList = [];
        this.billaddressList_step1 = [];
        this.billaddressfilter = [];
        this.billaddressfilter_step1 = [];
        this.buttonStatus = false;
        this.yes = true;
        this.chktdslbl_step1 = "Is Tds Applicable";
        this.chkIsTDS_step1 = false;
        this.chktdslbl_step2 = "Is Tds Applicable";
        this.chkIsTDS_step2 = false;
        this.SuppliertdsList = [];
        this.TDSTYPE = "";
        this.TDSTYPE1 = "";
        this.sectioncnt = "0";
        this.GSTApplicable_step1 = "";
        this.TDSApplicable_step1 = "";
        this.GSTApplicable_step2 = "";
        this.TDSApplicable_step2 = "";
        this.disabletdsbtn = true;
        this.disableresetbtn = true;
        this.showModal_TDS = false;
        this.str = "";
        this.TDSList = [];
        this.seltdsamt = 0;
        this.newArray = [];
        this.tdsaddflag = "0";
        this.disablecheckbox = true;
        //---validation 
        this.hdPass = "0";
        this.HDISCOMPBP_DONE = "0";
        this.HDIsNotOver = "0";
        this.HDISPURGENERATE = "0";
        this.HDPURINVNO = "0";
        this.selpiamt = 0;
        this.TotalTDSList = [];
        this.disablechildaddbtn = false;
        this.disablechildresetbtn = false;
        this.multicontainestep1 = true;
        this.multicontainestep2 = false;
        this.multicontainstep = "STEP 1";
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
    MulticontainerPurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this._loginService.getLogin())
        var todaydate = new Date();
        this.purchasedate_step1 = this._dataService.datechnge(todaydate);
        this.purchasedate_step2 = this._dataService.datechnge(todaydate);
        this._activatedRoute.params.subscribe(function (params) {
            //console.log(params)
            _this.PurchaseNo_step2 = params["PurchaseNo"];
            _this.STATUS = params["Status"];
            _this.Type = params["Type"];
        });
        this.ClearMulticontainerTemp();
        if (this.PurchaseNo_step2 == ' ') {
            //this.verifyPermission('102','Add')
            this.verifyPermission('427', 'Add');
        }
        else {
            //this.verifyPermission('102','Modify')    
            this.verifyPermission('427', 'Modify');
            this.text = 'Update';
        }
        var jsonparam = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.Allitemlist = data.Table3;
            _this.supplierlist = data.Table1;
            _this.PassedBylist = data.Table2;
            _this.billaddressList = data.Table4;
            _this.billaddressList_step1 = data.Table4;
            _this.SuppliertdsList = data.Table5;
        });
    };
    MulticontainerPurchaseComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (data.Table.length > "0" && (_this._loginService.getLogin().ROLETYPE) != "SA") {
                _this.fromright_dt = data.Table[0].rightsfrmdt;
                _this.toright_dt = data.Table[0].rightstodt;
                _this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    MulticontainerPurchaseComponent.prototype.onDisableRange = function () {
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
    //   var date = new Date(this.fromright_dt);
    //   var newdate = new Date(date);
    //   let bdate = new Date();
    //   bdate = newdate
    //   let copy = this.getCopyOfOptions();
    //   bdate.setDate(bdate.getDate());
    //   copy.disableUntil = { year: bdate.getFullYear(), month: bdate.getMonth() + 1, day: bdate.getDate() };
    //   this.myDatePickerOptionsInv = copy;
    //   let d = new Date();
    //   d.setDate(d.getDate() + 1);
    //   let copy1 = this.getCopyOfOptions();
    //   copy1.disableSince = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
    //   this.myDatePickerOptionsInv = copy1;
    // }
    MulticontainerPurchaseComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    MulticontainerPurchaseComponent.prototype.puchasedatestep1 = function (ev) {
        this.purchasedate_step1 = ev.formatted;
        //console.log(ev)
    };
    MulticontainerPurchaseComponent.prototype.puchasedatestep2 = function (ev) {
        this.purchasedate_step2 = ev.formatted;
    };
    MulticontainerPurchaseComponent.prototype.GetActName = function (Acctcode) {
        this.Item_step1 = undefined;
        this.ACCTNAME = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; })[0].ACCTNAME;
        this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    MulticontainerPurchaseComponent.prototype.GetSupplierName = function (Suppcode) {
        var _this = this;
        this.billaddressfilter = this.billaddressList.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter.length == "1") {
            this.billaddress = this.billaddressfilter[0].DATAVALUEFIELD;
        }
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        // this.GetTDSType();
        this.EnableDisableDtn(supptds);
    };
    MulticontainerPurchaseComponent.prototype.GetStep1SupplierName = function (Suppcode) {
        var _this = this;
        this.billaddress_step1 = "";
        this.billaddressfilter_step1 = this.billaddressList_step1.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter_step1.length == "1") {
            this.billaddress_step1 = this.billaddressfilter_step1[0].DATAVALUEFIELD;
        }
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.step1suppliername; })[0].TEXTFIELD;
        //this.GetTDSType();
        this.EnableDisableDtn(supptds);
    };
    MulticontainerPurchaseComponent.prototype.GetTDSType = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsondata = {
            SUPPCODE: this.step1suppliername,
            PURCHASEDT: this.purchasedate_step1,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_GETTDSTYPE", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSTYPE = data.Table[0].TDS_TYPE.split(",")[0];
                _this.TDSTYPE1 = data.Table[0].TDS_TYPE.split(",")[1];
                _this.sectioncnt = data.Table[0].CNT;
                // if(this.TDSTYPE=="EDC"){
                //     this.disabletdsbtn=true;
                // }
                // else if(this.TDSTYPE=="LDC" || this.TDSTYPE=="BRC"){
                //   this.disabletdsbtn=false;
                // }
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "102") {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.step1suppliername = undefined;
                _this.billaddress_step1 = undefined;
                _this.chktdslbl_step1 = "";
                _this.chkIsTDS_step1 = false;
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                // this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MulticontainerPurchaseComponent.prototype.EnableDisableDtn = function (tds) {
        if (tds == "1") {
            this.chktdslbl_step1 = "TDS Applicable for Selected Supplier";
            this.disabletdsbtn = false;
            this.chkIsTDS_step1 = true;
            this.disableresetbtn = true;
        }
        if (tds == "0") {
            this.chktdslbl_step1 = "Is Tds Applicable";
            this.disabletdsbtn = true;
            this.chkIsTDS_step1 = false;
            this.disableresetbtn = true;
        }
    };
    MulticontainerPurchaseComponent.prototype.Addchildrcrdstep1 = function () {
        var _this = this;
        if (this.step1suppliername == "" || this.step1suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        if (this.AccountName_step1 == "" || this.AccountName_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.TDSApplicable_step1 == "" || this.TDSApplicable_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select TDS applicable or not.!');
            return false;
        }
        if (this.GSTApplicable_step1 == "" || this.GSTApplicable_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select GST applicable or not.!');
            return false;
        }
        if (this.ContainerNo_step1 == "" || this.ContainerNo_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Container No. could not be blank !');
            return false;
        }
        else if (this.ContainerNo_step1.length < 11) {
            this._toasterService.toast('warning', 'warning', 'Please enter 11 digit Container No ! ');
            return false;
        }
        if (this.AcctAmount_step1 == "" || this.AcctAmount_step1 == undefined || this.AcctAmount_step1 == "0") {
            this._toasterService.toast('warning', 'warning', 'Amount could not be blank !');
            return false;
        }
        else if (parseFloat(this.AcctAmount_step1) < 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (this.Itemslist.length > 0) {
            if (this.Item_step1 == "" || this.Item_step1 == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        this.loaderService.display(true);
        //console.log(this.Item_step1)
        var jsonparam = {
            ID: this.ID,
            ENTRYNO: this.ENTRYNO,
            VGUID: this._loginService.getLogin()[0].GUID,
            CLIENT: this.AccountName_step1.split("|")[0],
            ACCOUNT_NAME: this.ACCTNAME,
            JOBNO: this.ContainerNo_step1,
            AMOUNT: this.AcctAmount_step1,
            DEDUCTION: "0",
            NARRATION: this.ActNarration_step1,
            ITEMCODE: (this.Item_step1 == undefined) ? "" : this.Item_step1.split("|")[0],
            ITEM_DATAVALUE: (this.Item_step1 == undefined) ? "" : this.Item_step1,
            ACC_PURCHASEDTLS_ID: this.PURCHASEDTLS_ID,
            IsJobReport: this.AccountName_step1.split("|")[1],
            CMPID: this._loginService.getLogin()[0].CMPID,
            PUR_TAXABLE: (this.GSTApplicable_step1 == "") ? "" : this.GSTApplicable_step1,
            ISTDSAPP: (this.chkIsTDS_step1 == true) ? "0" : "0",
            PUR_TDS: (this.TDSApplicable_step1 == "") ? "0" : this.TDSApplicable_step1,
        };
        //  console.log(jsonparam)
        this._dataService.Common("Accounts/ACC_PURCHASE_MULTICONTAINER_TMP_IU_NG", jsonparam)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Accountlist_step1 = data.Table;
                _this.NetAmount_step1 = data.Table1[0].TOTAMOUNT;
                _this.NetTotal_step1 = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrdstep1();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MulticontainerPurchaseComponent.prototype.Resetchildrcrdstep1 = function () {
        this.ID = "0";
        this.AccountName_step1 = undefined;
        this.ContainerNo_step1 = "";
        this.AcctAmount_step1 = "";
        this.ActNarration_step1 = "";
        this.Item_step1 = undefined;
        this.txtchild = "Add";
        this.ENTRYNO = "0";
        this.PURCHASEDTLS_ID = "0";
        this.TDSApplicable_step1 = "";
        this.GSTApplicable_step1 = "";
    };
    MulticontainerPurchaseComponent.prototype.Editchildrecdstep1 = function (id) {
        var filterData = this.Accountlist_step1.filter(function (filter) { return filter.ID == id; })[0];
        //console.log(filterData)
        this.ID = filterData.ID;
        this.AccountName_step1 = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.AcctAmount_step1 = filterData.AMOUNT;
        this.Item_step1 = filterData.ITEM_DATAVALUE;
        this.ContainerNo_step1 = filterData.JOBNO;
        this.ActNarration_step1 = filterData.NARRATION;
        this.txtchild = "Update";
        this.PURCHASEDTLS_ID = filterData.ACC_PUR_MCONT_ID;
        this.TDSApplicable_step1 = filterData.PUR_TDS;
        this.GSTApplicable_step1 = filterData.PUR_TAXABLE;
    };
    MulticontainerPurchaseComponent.prototype.Add_Mainstep1 = function () {
        var _this = this;
        if (this.step1suppliername == "" || this.step1suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        if (this.billaddress_step1 == "" || this.billaddress_step1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier address  !');
            return false;
        }
        if (this.Accountlist_step1.length == 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter Container Details  !');
            return false;
        }
        this.loaderService.display(true);
        var jsonparam = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            VGUID: this._loginService.getLogin()[0].GUID,
            Type: "PI",
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_MULTICONTAINER_IU_NG", jsonparam)
            .subscribe(function (data) {
            //  console.log(data)
            //  this.Accountlist_step1 = data.Table;
            _this.Accountlist_step2 = data.Table;
            _this.suppliername = _this.step1suppliername;
            _this.GetSupplierName(_this.suppliername);
            _this.billaddress = _this.billaddress_step1;
            _this.chkIsTDS_step2 = _this.chkIsTDS_step1;
            _this.chktdslbl_step2 = _this.chktdslbl_step1;
            _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
            _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
            _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
            _this.buttonStatus = true;
            $("#data-step2").removeClass("disabled");
            $('.nav a').filter('a[href="#step2"]').tab('show');
            _this.loaderService.display(false);
        });
    };
    MulticontainerPurchaseComponent.prototype.ClearMulticontainerTemp = function () {
        var jsonmaster = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_PURCHASE_RESETMULTICONTAINER_NG", jsonmaster)
            .subscribe(function (data) {
        });
    };
    MulticontainerPurchaseComponent.prototype.RestMain_step1 = function () {
        var _this = this;
        this.loaderService.display(true);
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrdstep1();
            this.Accountlist_step1 = [];
            this.NetAmount_step1 = "";
            this.NetTotal_step1 = "";
            this.chktdslbl_step1 = "Is Tds Applicable";
            this.chkIsTDS_step1 = false;
            this.step1suppliername = undefined;
            this.billaddress_step1 = "";
            $("#data-step2").addClass("disabled");
            $('.nav a').filter('a[href="#step1"]').tab('show');
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_MULTICONTAINER_RESET_STEP1", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this._router.navigate(["/accounts/purchase/multicontainer/PI/3/ "]);
            });
            this.loaderService.display(false);
        }
        else {
            this.loaderService.display(false);
            return false;
        }
    };
    MulticontainerPurchaseComponent.prototype.Voucher_validation = function () {
        var _this = this;
        if (this.VoucherNo != '') {
            if (this.VoucherNo.length != 15) {
                alert('Invalid Voucher No. - Please Check');
                return false;
            }
            if (this.VoucherNo.substring(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                this._toasterService.toast('warning', 'warning', 'You have entered Purchase No of different Company !');
                alert('You have entered Purchase No of different Company !');
                this.VoucherNo = "";
                return false;
            }
            if (this.VoucherNo.substring(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                this._toasterService.toast('warning', 'warning', 'You have entered Purchase No of different City !');
                alert('You have entered Purchase No of different City !');
                this.VoucherNo = "";
                return false;
            }
            if (this.VoucherNo.substring(11, 1) != '9') {
                this._toasterService.toast('warning', 'warning', 'The No. You have Entered Is not a Purchase No. !');
                alert('The No. You have Entered Is not a Purchase No. !');
                this.VoucherNo = "";
                return false;
            }
            if (this.VoucherNo.substring(11, 1) != '6') {
                this._toasterService.toast('warning', 'warning', 'The No. You have Entered Is not a Journal Voucher No. !');
                alert('The No. You have Entered Is not a Journal Voucher No. !');
                this.VoucherNo = "";
                return false;
            }
            var jsonview = {
                VoucherNo: this.VoucherNo
            };
            this._dataService.getData("Accounts/Acc_Purchase_Check_Input_VoucherNo", jsonview)
                .subscribe(function (data) {
                if (data.Table[0].STATUS.split('#')[0] == "104") {
                    _this._toasterService.toast('warning', 'warning', data.Table[0].STATUS.split('#')[1]);
                    alert(data.Table[0].STATUS.split('#')[1]);
                    _this.loaderService.display(false);
                }
            });
        }
    };
    MulticontainerPurchaseComponent.prototype.job_validation = function () {
        if (this.JobNo_step2.substring(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
            alert("Entered Job No. is different company !");
            this._toasterService.toast('warning', 'warning', 'Entered Job No. is different company !');
            this.JobNo_step2 = "";
            return false;
        }
    };
    MulticontainerPurchaseComponent.prototype.Addchildrcrdstep2 = function () {
        var _this = this;
        if (this.AccountName_step2 == "" || this.AccountName_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            this.loaderService.display(false);
            return false;
        }
        if (this.Itemslist.length > 0) {
            if (this.Item_step2 == "" || this.Item_step2 == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.suppliername == this.AccountName_step2.split('|')[0]) {
            this._toasterService.toast('warning', 'warning', 'Supplier and Account Name Should be different .!');
            return false;
        }
        if (this.TDSApplicable_step2 == "" || this.TDSApplicable_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select TDS applicable or not.!');
            return false;
        }
        if (this.GSTApplicable_step2 == "" || this.GSTApplicable_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select GST applicable or not.!');
            return false;
        }
        if ((this.Amount_step2 == "" || this.Amount_step2 == undefined || this.Amount_step2 == '0') && (this.Deduction_step2 == "" || this.Deduction_step2 == undefined || this.Deduction_step2 == '0')) {
            this._toasterService.toast('warning', 'warning', 'Please enter Amount or Deduction.!');
            return false;
        }
        if (parseFloat(this.Amount_step2) > 0 && parseFloat(this.Deduction_step2) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Amount_step2) < 0 && parseFloat(this.Deduction_step2) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Deduction_step2) < 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        // console.log(this.AccountName_step2)
        //  console.log(this.Item_step2)
        this.loaderService.display(true);
        var ITEMCODEvl;
        var ITEMvl;
        var ITEMDT;
        ITEMCODEvl = (this.Item_step2 == null) ? "" : this.Item_step2.split("|")[0];
        ITEMvl = (this.Item_step2 == null) ? "" : this.Item_step2.split("|")[2];
        ITEMDT = (this.Item_step2 == null) ? "" : this.Item_step2;
        if (ITEMCODEvl == null) {
            ITEMCODEvl = "";
        }
        if (ITEMvl == null) {
            ITEMvl = "";
        }
        if (ITEMDT == null) {
            ITEMDT = "";
        }
        var jsonchild = {
            ID: this.ID,
            ENTRYNO: this.ENTRYNO,
            CLIENT: this.AccountName_step2.split("|")[0],
            JOBNO: this.JobNo_step2,
            DEDUCTION: this.Deduction_step2,
            AMOUNT: this.Amount_step2,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            NARRATION: this.ActNarration_step2,
            IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: ITEMCODEvl,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: ITEMvl,
            ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID,
            STATUS: this.STATUS,
            IsJobReport: this.AccountName_step2.split("|")[1],
            ITEM_DATAVALUE: ITEMDT,
            SRPIPASSAMOUNT: this.actpassedamount_step2,
            CMPID: this._loginService.getLogin()[0].CMPID,
            PUR_TAXABLE: (this.GSTApplicable_step2 == "") ? "" : this.GSTApplicable_step2,
            ISTDSAPP: (this.chkIsTDS_step2 == true) ? "0" : "0",
            PUR_TDS: (this.TDSApplicable_step2 == "") ? "0" : this.TDSApplicable_step2,
            MAWBFLAG: "1"
        };
        //  console.log(jsonchild)
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_IU_NG", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Accountlist_step2 = data.Table;
                _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrdstep2();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MulticontainerPurchaseComponent.prototype.Resetchildrcrdstep2 = function () {
        this.ID = "0";
        this.AccountName_step2 = undefined;
        this.JobNo_step2 = "";
        this.Deduction_step2 = "";
        this.Amount_step2 = "";
        this.ActNarration_step2 = "";
        this.Item_step2 = undefined;
        this.actpassedamount_step2 = "0";
        this.txtchild = "Add";
        this.TDSApplicable_step2 = "";
        this.GSTApplicable_step2 = "";
        this.ACCBANKDTLSID = "0";
    };
    MulticontainerPurchaseComponent.prototype.Editchildrecdstep2 = function (id) {
        var filterData = this.Accountlist_step2.filter(function (filter) { return filter.ID == id; })[0];
        if (filterData.IS_NOT_EDIT_ABLE == "1") {
            alert("You cannot edit this record!");
            return false;
        }
        else {
            this.ID = filterData.ID;
            this.AccountName_step2 = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
            this.Amount_step2 = filterData.AMOUNT;
            this.Deduction_step2 = filterData.DEDUCTION;
            this.actpassedamount_step2 = filterData.SRPIPASSAMOUNT;
            this.Item_step2 = filterData.ITEM_DATAVALUE;
            this.JobNo_step2 = filterData.JOBNO;
            this.ActNarration_step2 = filterData.NARRATION;
            this.txtchild = "Update";
            this.ACCBANKDTLSID = filterData.ACC_PURCHASEDTLS_ID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
            this.TDSApplicable_step2 = filterData.PUR_TDS;
            this.GSTApplicable_step2 = filterData.PUR_TAXABLE;
        }
    };
    MulticontainerPurchaseComponent.prototype.deletechildrecdstep2 = function (id, editflag) {
        var _this = this;
        if (editflag == "1") {
            alert("You cannot delete this record!");
            return false;
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID };
                this._dataService.getData("Accounts/ACC_PURCHASE_TMP_DEL_NG", jsondelete)
                    .subscribe(function (data) {
                    if (data.Table1[0].STATUS.split("#")[0] == "100") {
                        _this.Accountlist_step2 = data.Table;
                        _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUS.split("#")[1]);
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", "Error in Deleting");
                        _this.loaderService.display(false);
                    }
                });
            }
            else {
                return false;
            }
        }
        this.loaderService.display(false);
    };
    MulticontainerPurchaseComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            this.togglevno = false;
            this.togglepassedby = false;
            this.togglepamount = false;
            this.toggleinvamount = false;
        }
        else {
            this.togglevno = true;
            this.togglepassedby = true;
            this.togglepamount = true;
            this.toggleinvamount = true;
        }
    };
    /*
    valid():boolean {
      if (this.STATUS == 'PI')  {
        if (this.HDISPURGENERATE !='1'){
        if (this.HDISCOMPBP_DONE== '1' && this.HDIsNotOver!= '1' && this.HDPURINVNO != 'WILL') {
          alert("You can not update this purchase bill because it is already paid through computerised cheque print !!");
          return false;
        }
        else if ((this.HDISCOMPBP_DONE == '1') && (this.HDIsNotOver == '1') && (this.HDPURINVNO == 'WILL')) {
          alert("You can edit only the amount..not accounts and supplier invoice number and net total should be less than or equal to Purchase Amount=" +  this.NetAmt + " !!");
          return false;
      }
      else if ((this.HDISCOMPBP_DONE == '1') && (this.HDIsNotOver  != '1') && (this.HDPURINVNO == 'WILL')) {
          alert("Computerised Cheuqe is generated for this Purchase Invoice. You can update only Supplier INV No.!!");
          return false;
        }
        else {return true;}
        }
        else {return true;}
    }
    else
    {
       if (this.HDISPURGENERATE == '1') {
        alert("You can not Update this Purchase Request because Purchase is already Generated for this Request !!");
        return false;
       } else {
           return false;
       }
    }
  } */
    //let supin_valid :boolean
    MulticontainerPurchaseComponent.prototype.supplier_validation = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        this.loaderService.display(true);
        var jsonview = {
            SUPCODE: this.suppliername,
            SUPINVNO: this.InvNo,
            ENTRYNO: this.PurchaseNo_step2
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_SUPINVNO_VALIDATE", jsonview)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split('#')[0] == '100') {
                _this.Add_Main();
            }
            else {
                var answer = confirm("Record with same supplier and invoice number already exists.\n Click Ok to Add & Cancel to Retry!");
                if (answer == false) {
                    return false;
                }
                else {
                    _this.Add_Main();
                }
            }
        });
        this.loaderService.display(false);
    };
    MulticontainerPurchaseComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.purchasedate_step2 == "" || this.purchasedate_step2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Purchase Date cannot be left blank!');
            return false;
        }
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        if (this.InvDate == "" || this.InvDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice Date cannot be left blank!');
            return false;
        }
        if (this._dataService.date2Comparison(this.DueDate.formatted, this.purchasedate_step2.formatted) == false) {
            this._toasterService.toast('warning', 'warning', 'Due date Cannot be Less than Purchase Entry date');
            return false;
        }
        // if(this.tdsaddflag=="0" && this.chkIsTDS_step2==true){
        //   this._toasterService.toast('warning', 'warning', 'Please enter tds details first !');
        //   return false;
        // }
        this.loaderService.display(true);
        var data;
        data = this.supplierlist.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            ENTRYNO: (this.PurchaseNo_step2 == undefined) ? "" : this.PurchaseNo_step2,
            ENTRYDT: this.purchasedate_step2,
            STATUS: this.STATUS,
            SUP_CODE: this.suppliername,
            SUP_NAME: data,
            SUP_INVNO: (this.InvNo == "") ? "" : this.InvNo,
            SUP_INVDT: (this.InvDate) ? this.InvDate.formatted : "",
            SUP_BILLRECEIVEDDT: (this.BillReceive) ? this.BillReceive.formatted : "",
            SUP_DUEDT: (this.DueDate) ? this.DueDate.formatted : "",
            PASSFLAG: (this.IsPassed == true) ? "Y" : "",
            PASSEDBY: (this.passedby == "") ? "0" : this.passedby,
            PASSEDAMT: (this.PassedAmount == "") ? "0" : this.PassedAmount,
            INVAMT: (this.InvoiceAmount == "") ? "0" : this.InvoiceAmount,
            VOUCHERNO: (this.VoucherNo == "") ? "0" : this.VoucherNo,
            MAWBN0: "",
            FREIGHTG100235: "0",
            SURCHARGEG101468: "0",
            AIRFRTCOMMG100153: "0",
            FRTREBATEG100186: "0",
            NARRATION: this.Narration_step2,
            ACTUALAMOUNT: this.NetAmt_step2,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.PurchaseNo_step2 == "" || this.PurchaseNo_step2 == ' ' || this.PurchaseNo_step2 == undefined) ? "INSERT" : "UPDATE",
            DOCUMENTG100179: "0",
            FK_SUP_ADDR_ID: this.billaddress.split("|")[0],
            AMSENSEXP_G102024: "0",
            MISCEXP_G102025: "0"
        };
        var url = "";
        if (this.PurchaseNo_step2 == ' ' || this.PurchaseNo_step2 == undefined) {
            url = "Accounts/ACC_PURCHASE_INSERT_NG";
        }
        else {
            url = "Accounts/ACC_PURCHASE_UPDATE_NG";
        }
        this._dataService.Common(url, jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                _this.print(data.Table1[0].ENTRYNO);
                _this.RestMain();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.RestMain();
                _this.loaderService.display(false);
            }
        });
    };
    MulticontainerPurchaseComponent.prototype.RestMain = function () {
        this.Resetchildrcrdstep2();
        this.InvNo = "";
        this.InvDate = "";
        this.DueDate = "";
        this.BillReceive = "";
        this.PurchaseNo_step2 = ' ';
        //this.purchasedate_step2 = '';
        this.passedby = '';
        this.PassedAmount = '';
        this.InvoiceAmount = '';
        this.suppliername = undefined;
        this.VoucherNo = '';
        this.IsPassed = false;
        this.Narration_step2 = '';
        this.NetAmount_step2 = '';
        this.Netdeduction_step2 = '';
        this.NetAmt_step2 = '';
        this.text = "Submit";
        this.billaddress = '';
        this.Accountlist_step1 = [];
        this.Accountlist_step2 = [];
        $("#data-step2").addClass("disabled");
        $('.nav a').filter('a[href="#step1"]').tab('show');
        this._router.navigate(["/accounts/purchase/multicontainer/PI/3/ "]);
        this.Accountlist_step1 = [];
        this.NetAmount_step1 = "";
        this.NetTotal_step1 = "";
        this.step1suppliername = undefined;
        this.buttonStatus = false;
        this.chktdslbl_step1 = "Is Tds Applicable";
        this.chkIsTDS_step1 = false;
        this.step1suppliername = undefined;
        this.billaddress_step1 = undefined;
    };
    MulticontainerPurchaseComponent.prototype.fn_Validate_ContainerNo = function (ContNo) {
        var _this = this;
        this.loaderService.display(true);
        var jsoncontainer = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE1,
            CONTAINERNO: ContNo,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_MContainer_Validate", jsoncontainer)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split("#")[0] == "103") {
                var Msg = data.Table[0].STATUS.split("#")[1];
                alert(Msg);
                // this.ContainerNo_step1.ena = false;
                _this.ContainerNo_step1 = "";
                return false;
            }
        });
        this.loaderService.display(false);
    };
    MulticontainerPurchaseComponent.prototype.Reset = function () {
        var _this = this;
        this.loaderService.display(true);
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrdstep2();
            this.InvNo = "";
            this.InvDate = "";
            this.DueDate = "";
            this.BillReceive = "";
            this.PurchaseNo_step2 = ' ';
            // this.purchasedate_step2 = '';
            this.passedby = '';
            this.PassedAmount = '';
            this.InvoiceAmount = '';
            this.suppliername = undefined;
            this.VoucherNo = '';
            this.IsPassed = false;
            this.Narration_step2 = '';
            this.NetAmount_step2 = '';
            this.Netdeduction_step2 = '';
            this.NetAmt_step2 = '';
            this.NetAmount_step1 = '';
            this.NetTotal_step1 = '';
            this.text = "Submit";
            this.Accountlist_step1 = [];
            this.Accountlist_step2 = [];
            this.buttonStatus = false;
            this.chktdslbl_step2 = "Is Tds Applicable";
            this.chkIsTDS_step2 = false;
            this.chktdslbl_step1 = "Is Tds Applicable";
            this.chkIsTDS_step1 = false;
            this.step1suppliername = undefined;
            this.billaddress_step1 = undefined;
            this.billaddress = undefined;
            this.disablechildaddbtn = false;
            this.disablechildresetbtn = false;
            $("#data-step2").addClass("disabled");
            $('.nav a').filter('a[href="#step1"]').tab('show');
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_MULTICONTAINER_NG_RESET", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this._router.navigate(["/accounts/purchase/multicontainer/PI/3/ "]);
            });
            this.loaderService.display(false);
        }
        else {
            return false;
        }
        this.loaderService.display(false);
    };
    MulticontainerPurchaseComponent.prototype.OpenTdsModal = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        this.showModal_TDS = true;
        this.str = "";
        this.loaderService.display(true);
        var jsondata = {
            SUPPCODE: this.suppliername,
            PURCHASEDT: this.purchasedate_step2,
            VGUID: this._loginService.getLogin()[0].GUID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/ACC_PIBP_GET_TDSDATA_NG", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSList = data.Table;
                // this.tottdsamt=data.Table2[0].TOTTDSAMT;
                _this.totpiamt = data.Table2[0].TOTPIAMT;
                _this.TotalTDSList = data.Table3;
                _this.sectioncnt = data.Table4[0].CNT;
                _this.seltdsamt = "0";
                _this.seltaxableamt = "0";
                if (_this.sectioncnt == "1") {
                    for (var i = 0; i < _this.TDSList.length; i++) {
                        _this.TDSList[i].Disabled = true;
                        _this.TDSList[i].Checked = true;
                        _this.str += _this.TDSList[i].TDSACCTID + ' |' + _this.TDSList[i].RATE + '|' + _this.TDSList[i].TDSAMOUNT + '|' + _this.TDSList[i].AMOUNT
                            + '|' + _this.TDSList[i].ITEMCODE + '|' + _this.TDSList[i].NARRATION + '|' + _this.TDSList[i].RATETYPE + '|' + _this.TDSList[i].ACCTID +
                            '|' + _this.TDSList[i].OFFLAG + ";";
                    }
                    _this.totpiamt = _this.totpiamt;
                    _this.seltaxableamt = data.Table2[0].TOTPIAMT;
                }
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                _this.TDSList = [];
                _this.tottdsamt = "";
                _this.seltdsamt = "";
                _this.seltaxableamt = "";
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    MulticontainerPurchaseComponent.prototype.closeTdsModal = function () {
        this.str = "";
        this.newArray = [];
        this.showModal_TDS = false;
    };
    MulticontainerPurchaseComponent.prototype.getCheckedTDSData = function (event, tdsaccid, rate, TDSAmount, puramt, icode, narr, ratetype, accid, offlag) {
        // let data1: any = []
        // let data2
        // data1 = this.TDSList.filter((code: any) => code.ACCTID == accid) 
        // if(data1.length>"1"){
        //   data2 = this.TDSList.filter((code: any) => code.ITEMCODE == acccode) 
        //   }
        //this.newArray=[];
        var _this = this;
        var Tdsamt;
        this.sel_accid = accid;
        if (event) {
            var selamt = parseFloat(this.selpiamt);
            var piamt = parseFloat(puramt);
            var newtot = (selamt + piamt);
            console.log(newtot.toFixed(2));
            this.selpiamt = newtot.toFixed(2);
            this.seltaxableamt = parseFloat(this.seltaxableamt) + parseFloat(puramt);
            var obj = {
                TDSACCTID: tdsaccid,
                RATE: rate,
                TDSAMOUNT: TDSAmount,
                PURAMT: puramt,
                ITEMCODE: icode,
                NARR: narr,
                RATETYPE: ratetype,
                ACCTID: accid,
                OFFLAG: offlag
            };
            this.newArray.push(obj);
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.TDSACCTID == _this.sel_accid; });
            this.newArray.splice(index, 1);
            var selamt = parseFloat(this.seltaxableamt);
            var piamt = parseFloat(puramt);
            var newtot = (selamt - piamt);
            this.seltaxableamt = newtot.toFixed(2);
        }
        if (event) {
            for (var i = 0; i < this.TDSList.length; i++) {
                if (this.TDSList[i]["ACCTID"] == accid) {
                    if (this.TDSList[i]["ITEMCODE"] != icode) {
                        this.TDSList[i].Disabled = true;
                    }
                    else if (this.TDSList[i]["ITEMCODE"] == icode) {
                        this.TDSList[i].Disabled = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.TDSList.length; i++) {
                if (this.TDSList[i]["ACCTID"] == accid) {
                    if (this.TDSList[i]["ITEMCODE"] != icode) {
                        this.TDSList[i].Disabled = false;
                    }
                    else if (this.TDSList[i]["ITEMCODE"] == icode) {
                        this.TDSList[i].Disabled = false;
                    }
                }
            }
        }
    };
    MulticontainerPurchaseComponent.prototype.AddtdsDetails = function () {
        var _this = this;
        // var str = '';
        if (this.sectioncnt > 1) {
            if (this.newArray == "" || this.newArray == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select at least one record!');
                return false;
            }
            for (var i = 0, len = this.newArray.length; i < len; i++) {
                this.str += this.newArray[i].TDSACCTID + ' |' + this.newArray[i].RATE + '|' + this.newArray[i].TDSAMOUNT + '|' + this.newArray[i].PURAMT
                    + '|' + this.newArray[i].ITEMCODE + '|' + this.newArray[i].NARR + '|' + this.newArray[i].RATETYPE + '|' + this.newArray[i].ACCTID
                    + '|' + this.newArray[i].OFFLAG + ";";
            }
        }
        console.log(this.str);
        var jsontdsdtl = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            STATUS: this.STATUS,
            VGUID: this._loginService.getLogin()[0].GUID,
            SUPCODE: this.suppliername.split("|")[0],
            STR: this.str
        };
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_TDSMULTI_IU_NG", jsontdsdtl)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Accountlist_step2 = data.Table;
                _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                _this.loaderService.display(false);
                _this.str = "";
                _this.showModal_TDS = false;
                _this.disabletdsbtn = true;
                _this.disableresetbtn = false;
                _this.disablepurchasedate_step2 = true;
                _this.tdsaddflag = "1";
                _this.disablepurchasedate_step2 = true;
                _this.disablechildaddbtn = true;
                _this.disablechildresetbtn = true;
            }
        });
    };
    MulticontainerPurchaseComponent.prototype.ResetTDS = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset TDS data?')) {
            var jsonmaster = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_TDS_RESET_NG", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.Accountlist_step2 = data.Table;
                    _this.NetAmount_step2 = data.Table1[0].TOTAMOUNT;
                    _this.Netdeduction_step2 = data.Table1[0].TOTDEDUCTION;
                    _this.NetAmt_step2 = data.Table1[0].NETTOTAL;
                    _this.Resetchildrcrdstep2();
                    _this.str = "";
                    _this.newArray = [];
                    _this.disabletdsbtn = false;
                    _this.tdsaddflag = "0";
                    _this.disablechildaddbtn = false;
                    _this.disablechildresetbtn = false;
                    _this.disablepurchasedate_step2 = false;
                }
            });
        }
    };
    MulticontainerPurchaseComponent.prototype.print = function (pono) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Purchase-print/' + pono + '/' + this.STATUS + '/', "Purchase Print", toolbar);
    };
    MulticontainerPurchaseComponent.prototype.TextareaValueChange = function (ev) {
        this.Narration_step2 = ev.target.value;
    };
    MulticontainerPurchaseComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    MulticontainerPurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multicontainer-purchase',
            template: __webpack_require__(/*! raw-loader!./multicontainer-purchase.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/multicontainer-purchase.component.html"),
            styles: ["\n  a:hover,a:focus{\n      text-decoration: none;\n      outline: none;\n  }\n  .tab .nav-tabs {\n      border-bottom:0 none;\n  }\n  .tab .nav-tabs li{\n      margin-right: 10px;\n  }\n  .tab .nav-tabs li a{\n      position: relative;\n      padding: 4px;\n      color: #fff;\n      font-size: 11px;\n      z-index: 1;\n      font-family:verdana;\n      font-weight:bold\n  }\n  .tab .nav-tabs li a:hover{\n      background:transparent;\n      border:1px solid transparent;\n      color: #444;\n  }\n   .tab .nav-tabs li a:before{\n      content: \"\";\n      width:100%;\n      height:100%;\n      position:absolute;\n      bottom: 3px;\n      left:0px;\n      font-size:11px;\n      background-color: #379b50;\n      border: 1px solid #d3d3d3;\n      border-bottom: 0px none;\n      border-radius: 10px 10px 0 0;\n      transform-origin: left center 0;\n      transform: perspective(6px) rotateX(6deg);\n      z-index:-1;\n  } \n  .tab .nav-tabs li a.active:before{\n      background: #fff;\n  }\n  .tab .nav-tabs li a.active,\n  .tab .nav-tabs li a.active:focus,\n  .tab .nav-tabs li a.active:hover{\n      border:1px solid transparent;\n      background:transparent;\n      color: #212529;\n      z-index: 2;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], MulticontainerPurchaseComponent);
    return MulticontainerPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/accounts/purchase/purchase-general.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/accounts/purchase/purchase-general.component.ts ***!
  \*****************************************************************/
/*! exports provided: PurchaseGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseGeneralComponent", function() { return PurchaseGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PurchaseGeneralComponent = /** @class */ (function () {
    function PurchaseGeneralComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.Allitemlist = [];
        this.supplierlist = [];
        this.codelistActt = [];
        this.PassedBylist = [];
        this.billaddress = "";
        this.InvNo = "";
        this.InvDate = "";
        this.BillReceive = "";
        this.DueDate = "";
        this.passedby = "";
        this.IsPassed = false;
        this.PurchaseNo = "";
        this.PurchaseDate = "";
        this.Narration = "";
        this.PassedAmount = "";
        this.InvoiceAmount = "";
        this.VoucherNo = "";
        this.AccountNameList = [];
        this.ItemList = [];
        this.Amount = "";
        this.Deduction = "";
        this.JobNo = "";
        this.actpassedamount = "";
        this.ActNarration = "";
        this.NetAmount = "0";
        this.Netdeduction = "0";
        this.text = "Submit";
        this.txtchild = "Add";
        this.ID = "0";
        this.ENTRYNO = "0";
        this.CLIENT = "";
        this.ISNOTEDITABLE = "0";
        this.ACCTNAME = "";
        this.ACCBANKDTLSID = "0";
        this.STATUS = "";
        this.Accountlist = [];
        this.billaddressList = [];
        this.billaddressfilter = [];
        this.Itemslist = [];
        this.NetAmt = "0";
        this.Type = "";
        this.mawbno = "";
        this.SerchTypeMawb = "1";
        this.MAWABlist = [];
        this.frieghtamt = "";
        this.surcharge = "";
        this.airfrightcomm = "";
        this.frightrebate = "";
        this.ams_enscharge = "";
        this.mischarge = "";
        this.documentcharge = "";
        this.formid = "";
        this.fromright_dt = null;
        this.togglevno = true;
        this.togglepassedby = true;
        this.togglepamount = true;
        this.toggleinvamount = true;
        this.showModal_MAWB = false;
        this.showModal_TDS = false;
        this.newArray = [];
        this.hdtdsArray = [];
        this.TDSList = [];
        this.TDSTYPE = "";
        this.TDSTYPE1 = "";
        this.checkedList = [];
        this.unCheckedList = [];
        this.shouldCheckboxesBeDisabled = false;
        this.disablecheckbox = true;
        this.disabletdsbtn = true;
        // @Input() disabletdsbtn: boolean = true;
        // @Output() btnClick = new EventEmitter();
        this.disableresetbtn = true;
        this.chktdslbl = "Is Tds Applicable";
        this.chkIsTDS = false;
        this.seltdsamt = 0;
        this.sectioncnt = "0";
        this.str = "";
        this.GSTApplicable = "";
        this.TDSApplicable = "";
        this.ISTDSAPP = "";
        this.SuppliertdsList = [];
        this.tdsaddflag = "0";
        this.disablesupplier = false;
        this.disablesupplieraddr = false;
        this.disablechildaddbtn = false;
        this.disablechildresetbtn = false;
        this.disablepurchasedate = false;
        this.selpiamt = 0;
        this.seltaxableamt = 0;
        this.TotalTDSList = [];
        //public disablechktds:boolean=false;
        //---validation
        this.hdPass = "0";
        this.HDISCOMPBP_DONE = "0";
        this.HDIsNotOver = "0";
        this.HDISPURGENERATE = "0";
        this.HDPURINVNO = "0";
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
    ;
    PurchaseGeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PurchaseDate = new Date();
        this.PurchaseDate = this._dataService.datechnge(this.PurchaseDate);
        this._activatedRoute.params.subscribe(function (params) {
            _this.PurchaseNo = params["PurchaseNo"];
            _this.STATUS = params["Status"];
            _this.Type = params["Type"];
        });
        // if (this.STATUS=="PI"){this.formid='12' }else if(this.STATUS=="RPI") {this.formid='202'}
        if (this.STATUS == "PI") {
            this.formid = '425';
        }
        else if (this.STATUS == "RPI") {
            this.formid = '202';
        }
        if (this.PurchaseNo != ' ') {
            this.verifyPermission(this.formid, 'Modify');
            this.text = 'Update';
        }
        else {
            this.verifyPermission(this.formid, 'Add');
        }
        this.Clearall();
        var jsonparam = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this.loaderService.display(true);
        // this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD_TDS", jsonparam)
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.supplierlist = data.Table1;
            _this.PassedBylist = data.Table2;
            _this.Allitemlist = data.Table3;
            _this.billaddressList = data.Table4;
            _this.SuppliertdsList = data.Table5;
            if (_this.PurchaseNo != ' ') {
                _this.editpopulate();
                //this.GetSupplierName(this.suppliername)
                // if(this.disabletdsbtn==false){
                //   this.disabletdsbtn=true;
                // }
                _this.text = 'Update';
            }
            if (_this.PurchaseNo != ' ') {
                _this.disabletdsbtn = true;
            }
        });
        if (this.Type == "2") {
            this.showModal_MAWB = true;
            this.pageloadmawbdata();
        }
    };
    PurchaseGeneralComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (_this._loginService.getLogin()[0].ROLETYPE != 'SA') {
                _this.fromright_dt = data.Table[0].rightsfrmdt;
                _this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    PurchaseGeneralComponent.prototype.onDisableRange = function () {
        var date = new Date(this.fromright_dt);
        var newdate = new Date(date);
        var bdate = new Date();
        bdate = newdate;
        var copy = this.getCopyOfOptions();
        bdate.setDate(bdate.getDate());
        copy.disableUntil = { year: bdate.getFullYear(), month: bdate.getMonth() + 1, day: bdate.getDate() };
        this.myDatePickerOptionsInv = copy;
        var d = new Date();
        d.setDate(d.getDate() + 1);
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.myDatePickerOptionsInv = copy1;
    };
    PurchaseGeneralComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    PurchaseGeneralComponent.prototype.PurchaseDateChanged = function (ev) {
        this.PurchaseDate = ev.formatted;
        console.log(ev);
    };
    PurchaseGeneralComponent.prototype.pageloadmawbdata = function () {
        var _this = this;
        var jsonparam = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CMPID: this._loginService.getLogin()[0].CMPID,
            TYPE: this.SerchTypeMawb,
            MAWBNO: this.mawbno
        };
        //console.log(jsonparam)
        this.loaderService.display(true);
        this._dataService.getData("Accounts/ACC_PURCHASE_MAWBNO_LIST", jsonparam)
            .subscribe(function (data) {
            // console.log(data)
            _this.loaderService.display(false);
            _this.MAWABlist = data.Table;
        });
    };
    PurchaseGeneralComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.Itemslist.length > 0) {
            if (this.Item == "" || this.Item == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select Item  !');
                return false;
            }
        }
        if (this.suppliername == this.AccountName.split('|')[0]) {
            this._toasterService.toast('warning', 'warning', 'Supplier and Account Name Should be different .!');
            return false;
        }
        if (this.TDSApplicable == "" || this.TDSApplicable == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select TDS applicable or not.!');
            return false;
        }
        if (this.GSTApplicable == "" || this.GSTApplicable == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select GST applicable or not.!');
            return false;
        }
        if ((this.Amount == "" || this.Amount == undefined || this.Amount == '0') && (this.Deduction == "" || this.Deduction == undefined || this.Deduction == '0')) {
            this._toasterService.toast('warning', 'warning', 'Please enter Amount or Deduction.!');
            return false;
        }
        if (parseFloat(this.Amount) > 0 && parseFloat(this.Deduction) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Amount) < 0 && parseFloat(this.Deduction) > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        if (parseFloat(this.Deduction) < 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid Amount - Please Check !');
            return false;
        }
        var clientcodeval = this.AccountName.split("|")[1];
        if (clientcodeval == 'Y') {
            if (this.JobNo.length == 0) {
                this._toasterService.toast('warning', 'warning', 'Please Enter JobNo !');
                return false;
            }
        }
        var ITEMCODEvl;
        var ITEMvl;
        var ITEMDT;
        ITEMCODEvl = (this.Item == null) ? "" : this.Item.split("|")[0];
        ITEMvl = (this.Item == null) ? "" : this.Item.split("|")[2];
        ITEMDT = (this.Item == null) ? "" : this.Item;
        var obj = {
            tdsapp: this.TDSApplicable
        };
        this.hdtdsArray.push(obj);
        //   this.hdtdsArray.push(this.TDSApplicable);
        //  //this.hdpurtds=(this.hdtdsArray.filter(x=> x.tdsapp == 'Y'))
        //  console.log(this.hdpurtds);
        var jsonchild = {
            ID: this.ID,
            ENTRYNO: this.ENTRYNO,
            CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo,
            DEDUCTION: (this.Deduction == "") ? "0" : this.Deduction,
            AMOUNT: (this.Amount == "") ? "0" : this.Amount,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            NARRATION: this.ActNarration,
            IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: ITEMCODEvl,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: ITEMvl,
            ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID,
            STATUS: this.STATUS,
            IsJobReport: this.AccountName.split("|")[1],
            ITEM_DATAVALUE: ITEMDT,
            SRPIPASSAMOUNT: (this.actpassedamount == "") ? "0" : this.actpassedamount,
            cmpid: this._loginService.getLogin()[0].CMPID,
            PUR_TAXABLE: (this.GSTApplicable == "") ? "" : this.GSTApplicable,
            ISTDSAPP: (this.chkIsTDS == true) ? "0" : "0",
            PUR_TDS: (this.TDSApplicable == "") ? "0" : this.TDSApplicable,
            MAWBFLAG: "0"
        };
        // console.log(jsonchild)
        this.loaderService.display(true);
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_IU_NG", jsonchild)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table.length > 0) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.Accountlist = data.Table;
                    _this.NetAmount = data.Table1[0].TOTAMOUNT;
                    _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                    _this.NetAmt = data.Table1[0].NETTOTAL;
                    _this.Resetchildrcrd();
                    _this.loaderService.display(false);
                }
                else if (data.Table[0].STATUS == "103") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.Accountlist = data.Table;
                    _this.NetAmount = data.Table1[0].TOTAMOUNT;
                    _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                    _this.NetAmt = data.Table1[0].NETTOTAL;
                    _this.Resetchildrcrd();
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            }
            else if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "warning", data.Table1[0].STATUS.split("#")[1]);
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    PurchaseGeneralComponent.prototype.getCheckboxValues = function (event, id) {
        var data = confirm('Are you sure want to Change the record ?');
        if (data == true) {
            $('.productlist').on('change', function () {
                $('#' + id).not(this).prop('checked', false);
                $('#' + 'frieghtamt' + id).not(this).prop('disabled', false);
                $('#' + 'airfrightcomm' + id).not(this).prop('disabled', false);
                $('#' + 'frightrebate' + id).not(this).prop('disabled', false);
                $('#' + 'surcharge' + id).not(this).prop('disabled', false);
                $('#' + 'ams_enscharge' + id).not(this).prop('disabled', false);
                $('#' + 'mischarge' + id).not(this).prop('disabled', false);
            });
        }
        else {
            return false;
        }
    };
    PurchaseGeneralComponent.prototype.Voucher_validation = function () {
        var _this = this;
        if (this.VoucherNo != '') {
            if (this.VoucherNo.length != 15) {
                alert('Invalid Voucher No. - Please Check');
                return false;
            }
            if (this.VoucherNo.substring(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
                this._toasterService.toast('warning', 'warning', 'You have entered Purchase No of different Company !');
                alert('You have entered Purchase No of different Company !');
                this.VoucherNo = "";
                return false;
            }
            if (this.VoucherNo.substring(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                this._toasterService.toast('warning', 'warning', 'You have entered Purchase No of different City !');
                alert('You have entered Purchase No of different City !');
                this.VoucherNo = "";
                return false;
            }
            if (this.VoucherNo.substring(11, 1) != '9') {
                this._toasterService.toast('warning', 'warning', 'The No. You have Entered Is not a Purchase No. !');
                alert('The No. You have Entered Is not a Purchase No. !');
                this.VoucherNo = "";
                return false;
            }
            if (this.VoucherNo.substring(11, 1) != '6') {
                this._toasterService.toast('warning', 'warning', 'The No. You have Entered Is not a Journal Voucher No. !');
                alert('The No. You have Entered Is not a Journal Voucher No. !');
                this.VoucherNo = "";
                return false;
            }
            var jsonview = {
                VoucherNo: this.VoucherNo
            };
            this._dataService.getData("Accounts/Acc_Purchase_Check_Input_VoucherNo", jsonview)
                .subscribe(function (data) {
                if (data.Table[0].STATUS.split('#')[0] == "104") {
                    _this._toasterService.toast('warning', 'warning', data.Table[0].STATUS.split('#')[1]);
                    alert(data.Table[0].STATUS.split('#')[1]);
                    _this.loaderService.display(false);
                }
            });
        }
    };
    PurchaseGeneralComponent.prototype.job_validation = function () {
        if (this.JobNo.substring(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
            alert("Entered Job No. is different company !");
            this._toasterService.toast('warning', 'warning', 'Entered Job No. is different company !');
            this.JobNo = ""; //01 101
            /*
         01 101 20 2
        
         this.JobNo.substring(0, 2)='01'//this always 01 +
          this.JobNo.substring(3, 3)='101' +
           this.JobNo.substring(6, 1)='01' = code
           */
            return false;
        }
    };
    PurchaseGeneralComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        this.AccountName = undefined;
        this.JobNo = "";
        this.Deduction = "";
        this.Amount = "";
        this.ActNarration = "";
        this.Item = undefined;
        this.actpassedamount = "";
        this.GSTApplicable = "",
            this.TDSApplicable = "",
            this.txtchild = "Add";
        //this.ACCBANKDTLSID="0";
    };
    PurchaseGeneralComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        if (filterData.IS_NOT_EDIT_ABLE == "1") {
            alert("You cannot edit this record !");
            return false;
        }
        if (this.tdsaddflag == "1") {
            alert("You cannot edit this record please reset the Tds Data !");
            return false;
        }
        if (filterData.ISTDSAPP == "1") {
            alert("You cannot edit this record please reset the Tds Data!");
            return false;
        }
        else {
            this.ID = filterData.ID;
            this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
            this.ACCTNAME = filterData.ACCOUNT_NAME;
            this.Amount = filterData.AMOUNT;
            this.Deduction = filterData.DEDUCTION;
            this.actpassedamount = filterData.SRPIPASSAMOUNT;
            this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === filterData.CLIENT; });
            this.Item = (filterData.ITEM_DATAVALUE == "") ? null : filterData.ITEM_DATAVALUE;
            this.JobNo = filterData.JOBNO;
            this.ActNarration = filterData.NARRATION;
            this.txtchild = "Update";
            this.ACCBANKDTLSID = filterData.ACC_PURCHASEDTLS_ID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
            this.TDSApplicable = filterData.PUR_TDS;
            this.GSTApplicable = filterData.PUR_TAXABLE;
        }
    };
    PurchaseGeneralComponent.prototype.deletechildrecd = function (id, editflag) {
        var _this = this;
        if (editflag == "1") {
            alert("You cannot delete this record !");
            return false;
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID };
                this._dataService.getData("Accounts/ACC_PURCHASE_TMP_DEL_NG", jsondelete)
                    .subscribe(function (data) {
                    // console.log(data)
                    if (data.Table.length > 0) {
                        if (data.Table[0].STATUS == "100") {
                            _this.Accountlist = data.Table;
                            _this.NetAmount = data.Table1[0].TOTAMOUNT;
                            _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                            _this.NetAmt = data.Table1[0].NETTOTAL;
                            _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                            _this.loaderService.display(false);
                        }
                        else {
                            _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                            _this._toasterService.toast("warning", "warning", "Error in Deleting");
                            _this.loaderService.display(false);
                        }
                    }
                    else if (data.Table.length == 0) {
                        _this.Accountlist = data.Table;
                        _this.NetAmount = data.Table1[0].TOTAMOUNT;
                        _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                        _this.NetAmt = data.Table1[0].NETTOTAL;
                        _this._toasterService.toast("warning", "warning", data.Table1[0].STATUS.split("#")[1]);
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
    //let supin_valid :boolean
    PurchaseGeneralComponent.prototype.supplier_validation = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        this.loaderService.display(true);
        var jsonview = {
            SUPCODE: this.suppliername.split("|")[0],
            SUPINVNO: this.InvNo,
            ENTRYNO: this.PurchaseNo
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_SUPINVNO_VALIDATE", jsonview)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split('#')[0] == '100') {
                _this.Add_Main();
                _this.loaderService.display(false);
            }
            else {
                var answer = confirm("Record with same supplier and invoice number already exists.\n Click Ok to Add & Cancel to Retry!");
                if (answer == false) {
                    return false;
                }
                else {
                    _this.Add_Main();
                }
                _this.loaderService.display(false);
            }
        });
    };
    PurchaseGeneralComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.STATUS == 'RPI') {
            if (this.HDISPURGENERATE == '1') {
                alert('You can not Update this Purchase Request because Purchase is already Generated for this Request ');
                return false;
            }
        }
        //   if(this.HDISPURGENERATE!='1'){
        //     if(this.HDISCOMPBP_DONE=='1' && this.HDIsNotOver!='1'&& this.HDPURINVNO != 'WILL'){
        //       alert("You can not update this purchase bill because it is already paid through computerised cheque print !!");
        //       return false;
        //     }
        //     else if ((this.HDISCOMPBP_DONE == '1') && (this.HDIsNotOver == '1') && (this.HDPURINVNO == 'WILL')) {
        //       alert("You can edit only the amount..not accounts and supplier invoice number and net total should be less than or equal to Purchase Amount=" + this.NetAmt + " !!");
        //       return false;
        //   }
        //   else if ((this.HDISCOMPBP_DONE == '1') && (this.HDIsNotOver  != '1') && (this.HDPURINVNO == 'WILL')) {
        //     alert("Computerised Cheuqe is generated for this Purchase Invoice. You can update only Supplier INV No.!!");
        //     return false;
        // }
        //   }
        if (this.PurchaseDate == "" || this.PurchaseDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Purchase Date cannot be left blank!');
            return false;
        }
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier !');
            return false;
        }
        if (this.billaddress == "" || this.billaddress == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier address  !');
            return false;
        }
        if (this.InvNo == "" || this.InvNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice No cannot be left blank!');
            return false;
        }
        if (this.InvDate.formatted == "" || this.InvDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Supplier Invoice Date cannot be left blank!');
            return false;
        }
        if (this._dataService.date2Comparison(this.DueDate.formatted, this.PurchaseDate.formatted) == false) {
            this._toasterService.toast('warning', 'warning', 'Due date Cannot be Less than Purchase Entry date');
            return false;
        }
        var tot_amount = this.NetAmount;
        var tot_deduction = this.Netdeduction;
        if ((parseFloat(tot_amount) + parseFloat(tot_deduction)) < 0.01) {
            this._toasterService.toast('warning', 'warning', 'Sum of Total Amount and Deduction cannot be Less Than 0.01');
            return false;
        }
        // if(this.tdsaddflag=="0"  && this.PurchaseNo == ' ' ){
        //   this._toasterService.toast('warning', 'warning', 'Please enter tds details first !');
        //   this.loaderService.display(false);
        //   return false;
        // }
        var dataclient = [];
        dataclient = this.hdtdsArray.filter(function (code) { return code.tdsapp === 'Y'; });
        if (dataclient.length > 0) {
            this.hdpurtds = dataclient[0].tdsapp;
        }
        else {
            this.hdpurtds = 0;
        }
        if (this.chkIsTDS == true && this.hdpurtds == 'Y' && this.tdsaddflag == "0") {
            this._toasterService.toast('warning', 'warning', 'Please enter tds details first !');
            this.loaderService.display(false);
            return false;
        }
        this.loaderService.display(true);
        var data;
        data = this.supplierlist.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        //data = this.supplierlist.filter((code: any) => code.VALUEFIELD === this.suppliername);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMPID,
            ENTRYNO: (this.PurchaseNo == undefined) ? "" : this.PurchaseNo,
            ENTRYDT: this.PurchaseDate,
            STATUS: this.STATUS,
            SUP_CODE: this.suppliername.split("|")[0],
            SUP_NAME: data,
            SUP_INVNO: this.InvNo,
            SUP_INVDT: (this.InvDate) ? this.InvDate.formatted : "",
            SUP_BILLRECEIVEDDT: (this.BillReceive) ? this.BillReceive.formatted : "",
            SUP_DUEDT: (this.DueDate) ? this.DueDate.formatted : "",
            PASSFLAG: (this.IsPassed == true) ? "Y" : "",
            PASSEDBY: (this.passedby == "") ? "0" : this.passedby,
            PASSEDAMT: (this.PassedAmount == "") ? "0" : this.PassedAmount,
            INVAMT: (this.InvoiceAmount == "") ? "0" : this.InvoiceAmount,
            VOUCHERNO: (this.VoucherNo == "") ? "0" : this.VoucherNo,
            MAWBN0: "",
            FREIGHTG100235: "0",
            SURCHARGEG101468: "0",
            AIRFRTCOMMG100153: "0",
            FRTREBATEG100186: "0",
            NARRATION: this.Narration,
            ACTUALAMOUNT: this.NetAmt,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.PurchaseNo == ' ' || this.PurchaseNo == undefined) ? "INSERT" : "UPDATE",
            DOCUMENTG100179: "0",
            FK_SUP_ADDR_ID: this.billaddress.split("|")[0],
            AMSENSEXP_G102024: "0",
            MISCEXP_G102025: "0"
        };
        var url = "";
        if (this.PurchaseNo == ' ' || this.PurchaseNo == undefined) {
            url = "Accounts/ACC_PURCHASE_INSERT_NG";
        }
        else {
            url = "Accounts/ACC_PURCHASE_UPDATE_NG";
        }
        this._dataService.Common(url, jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                _this.print(data.Table1[0].ENTRYNO);
                _this.RestMain();
                _this.loaderService.display(false);
            }
            else if (data.Table1 != undefined) {
                if (data.Table1[0].STATUS.split("#")[0] == "100") {
                    _this._toasterService.toast('success', 'success', data.Table1[0].STATUSTEXT);
                    _this.print(data.Table1[0].ENTRYNO);
                    _this.RestMain();
                    _this.loaderService.display(false);
                }
            }
            else {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
        this.loaderService.display(false);
    };
    PurchaseGeneralComponent.prototype.GetActName = function (Acctcode) {
        this.Item = undefined;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        //console.log(this.codelistActt)
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        //console.log(Acctcode.split("|")[0])
        this.Itemslist = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    PurchaseGeneralComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            this.togglevno = false;
            this.togglepassedby = false;
            this.togglepamount = false;
            this.toggleinvamount = false;
        }
        else {
            this.togglevno = true;
            this.togglepassedby = true;
            this.togglepamount = true;
            this.toggleinvamount = true;
        }
    };
    PurchaseGeneralComponent.prototype.editpopulate = function () {
        var _this = this;
        // this.loaderService.display(true);
        //console.log("******")
        var jsonview = {
            EntryNo: this.PurchaseNo,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_VIEW_NG", jsonview)
            .subscribe(function (data) {
            // console.log(data)
            _this.DueDate = (data.Table[0].PUR_DUEDT != "") ? _this._dataService.stringdttoArry(data.Table[0].PUR_DUEDT) : "";
            _this.BillReceive = (data.Table[0].PUR_SUPBILLDATE != "") ? _this._dataService.stringdttoArry(data.Table[0].PUR_SUPBILLDATE) : "";
            // this.DueDate = (data.Table[0].PUR_DUEDT != "") ? data.Table[0].PUR_DUEDT : "";
            // this.BillReceive = (data.Table[0].PUR_SUPBILLDATE != "") ? data.Table[0].PUR_SUPBILLDATE : "";
            _this.InvDate = (data.Table[0].PUR_SUPINVDATE != "") ? _this._dataService.stringdttoArry(data.Table[0].PUR_SUPINVDATE) : "";
            _this.InvNo = data.Table[0].PUR_INVNO;
            _this.PurchaseNo = data.Table[0].PUR_CODE;
            //    this.PurchaseDate = (data.Table[0].PUR_DATE != "") ? this._dataService.stringdttoArry(data.Table[0].PUR_DATE) : "";
            _this.PurchaseDate = (data.Table[0].PUR_DATE != "") ? data.Table[0].PUR_DATE : "";
            _this.suppliername = data.Table[0].PUR_SUPPLIER;
            _this.Narration = data.Table[0].REMARKS;
            _this.passedby = data.Table[0].PASSEDBY;
            _this.VoucherNo = data.Table[0].VOUCHERNO;
            _this.PassedAmount = data.Table[0].PASSEDAMOUNT;
            _this.InvoiceAmount = data.Table[0].SUPINVAMT;
            _this.IsPassed = (data.Table[0].PASS == 'Y') ? true : false;
            _this.Accountlist = data.Table1;
            _this.NetAmount = data.Table2[0].TOTAMOUNT;
            _this.Netdeduction = data.Table2[0].TOTDEDUCTION;
            _this.NetAmt = data.Table2[0].NETTOTAL;
            _this.hdPass = (data.Table2[0].PASS != "") ? data.Table2[0].PASS : '0';
            _this.HDISCOMPBP_DONE = (data.Table2[0].ISCOMPBP_DONE != "0") ? data.Table2[0].ISCOMPBP_DONE : '0';
            _this.HDIsNotOver = (data.Table2[0].ISNotOverBill != "0") ? data.Table2[0].ISNotOverBill : '0';
            _this.HDISPURGENERATE = (data.Table[0].ISPURGENERATE != "0") ? data.Table[0].ISPURGENERATE : '0';
            _this.HDPURINVNO = (data.Table2[0].ISPURGENERATE != "0") ? data.Table2[0].ISPURGENERATE : '0';
            // this.disablesupplier=true;
            // this.disablesupplieraddr=true;
            if (data.Table[0].FK_SUP_ADDR_ID != "") {
                var suppcode = data.Table[0].FK_SUP_ADDR_ID.split("|")[1];
                // console.log(suppcode)
                _this.GetSupplierName(suppcode);
            }
            _this.billaddress = data.Table[0].FK_SUP_ADDR_ID;
            for (var i = 0; i < _this.Accountlist.length; i++) {
                var obj = {
                    tdsapp: _this.Accountlist[i].PUR_TDS
                };
                _this.hdtdsArray.push(obj);
            }
            // let obj = {
            //   tdsapp:this.TDSApplicable
            // }
            // this.disabletdsbtn=true;
            //  if(this.PurchaseNo != ' '){
            //    if(this.disabletdsbtn==false){
            //     this.disabletdsbtn=true;
            //    }
            //  }
            if (_this.STATUS == 'RPI') {
                if (_this.HDISPURGENERATE == '1') {
                    _this._toasterService.toast('warning', 'warning', 'You can not Update this Purchase Request because Purchase is already Generated for this Request ');
                }
            }
            // this.disabletdsbtn=true;
        });
        // this.disabletdsbtn=true;
        this.loaderService.display(false);
    };
    PurchaseGeneralComponent.prototype.RestMain = function () {
        this.Resetchildrcrd();
        this.InvNo = "";
        this.InvDate = "";
        this.DueDate = "";
        this.BillReceive = "";
        this.PurchaseNo = ' ';
        // this.PurchaseDate = '';
        this.passedby = '';
        this.PassedAmount = '';
        this.InvoiceAmount = '';
        this.suppliername = undefined;
        this.VoucherNo = '';
        this.IsPassed = false;
        this.Narration = '';
        this.NetAmount = '';
        this.Netdeduction = '';
        this.NetAmt = '';
        this.text = "Submit";
        this.Accountlist = [];
        this.billaddressfilter = [];
        this.chktdslbl = "Is Tds Applicable";
        this.chkIsTDS = false;
        this.disablesupplier = false;
        this.disablesupplieraddr = false;
        this.disablechildaddbtn = false;
        this.disablechildresetbtn = false;
        this.Clearall();
        if (this.STATUS == 'PI') {
            this._router.navigate(['/accounts/purchase/Purchase/PI/1/ ']);
        }
        else if (this.STATUS == 'RPI') {
            this._router.navigate(['/accounts/purchase/Purchase/RPI/1/ ']);
        }
    };
    PurchaseGeneralComponent.prototype.Clearall = function () {
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Accounts/ACC_PURCHASE_RESTALL", jsonmaster)
            .subscribe(function (data) {
        });
    };
    PurchaseGeneralComponent.prototype.GetSupplierName = function (Suppcode) {
        var _this = this;
        this.billaddressfilter = this.billaddressList.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter.length == "1") {
            this.billaddress = this.billaddressfilter[0].DATAVALUEFIELD;
        }
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.suppliername; })[0].TEXTFIELD;
        // this.GetTDSType();
        this.EnableDisableDtn(supptds);
        // data = this.supplierlist.filter((code: any) => code.VALUEFIELD === this.suppliername)[0].TEXTFIELD;
        //onsole.log(supptds);
    };
    PurchaseGeneralComponent.prototype.close = function () {
        this.showModal_MAWB = false;
    };
    PurchaseGeneralComponent.prototype.validate = function (mawbno) {
        if (this.SerchTypeMawb == "2") {
            return false;
        }
        else {
            for (var i = 0; i < this.MAWABlist.length; i++) {
                if (this.MAWABlist[i].AEROBILLNO === mawbno) {
                    this.MAWABlist[i]["Disabled"] = false;
                }
                else {
                    this.MAWABlist[i]["Disabled"] = true;
                }
                if (this.MAWABlist[i]["Select"] === true) {
                    this.MAWABlist[i]["Select"] = false;
                    this.MAWABlist[i]["FRIEGHTAMT"] = "";
                    this.MAWABlist[i]["AIRFRIGHTCOMM"] = "";
                    this.MAWABlist[i]["FRIGHTREBATE"] = "";
                    this.MAWABlist[i]["SURCHARGE"] = "";
                    this.MAWABlist[i]["AMS_ENSCHARGE"] = "";
                    this.MAWABlist[i]["MISCHARGE"] = "";
                    this.MAWABlist[i]["DOCUMENTCHARGE"] = "";
                }
                else {
                    this.MAWABlist[i]["Select"] = true;
                }
                var tempList = 0;
                tempList = this.MAWABlist.filter(function (searchlist) { return searchlist.Select === false; }).length;
                if (tempList === this.MAWABlist.length) {
                    for (var i_1 = 0; i_1 < this.MAWABlist.length; i_1++) {
                        this.MAWABlist[i_1]["Select"] = false;
                        this.MAWABlist[i_1]["Disabled"] = false;
                    }
                }
            }
        }
    };
    PurchaseGeneralComponent.prototype.mawb_submit = function () {
        var _this = this;
        var data;
        if (this.SerchTypeMawb == "1") {
            for (var i = 0; i < this.MAWABlist.length; i++) {
                //  console.log(this.MAWABlist[i]["Select"] )
                if (this.MAWABlist[i]["Disabled"] == false) {
                    //console.log(this.MAWABlist[i])
                    data = this.MAWABlist[i];
                }
            }
            if (data.AIRFRIGHTCOMM == "0" && data.FRIGHTREBATE == "0") {
                this.air_freboth0();
            }
            else if (data.AIRFRIGHTCOMM == "0" && data.FRIGHTREBATE != "0") {
                this.air0();
            }
            else if (data.AIRFRIGHTCOMM != "0" && data.FRIGHTREBATE == "0") {
                this.fri0();
            }
        }
        else if (this.SerchTypeMawb == "2") {
            if (this.airfrightcomm == "0" && this.frightrebate == "0") {
                this.air_freboth0();
            }
            else if (this.airfrightcomm == "0" && this.frightrebate != "0") {
                this.air0();
            }
            else if (this.airfrightcomm != "0" && this.frightrebate == "0") {
                this.fri0();
            }
        }
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            MAWBNO: (this.SerchTypeMawb == "1") ? data.AEROBILLNO : this.mawbno,
            FREIGHT: (this.SerchTypeMawb == "1") ? data.FRIEGHTAMT : this.frieghtamt,
            SURCHARGE: (this.SerchTypeMawb == "1") ? data.SURCHARGE : this.surcharge,
            AIRFRTCOMM_G100153: (this.SerchTypeMawb == "1") ? data.AIRFRIGHTCOMM : this.airfrightcomm,
            FRTREBATE_G100186: (this.SerchTypeMawb == "1") ? data.FRIGHTREBATE : this.frightrebate,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS,
            DOCUMENT_G100179: (this.SerchTypeMawb == "1") ? data.DOCUMENTCHARGE : this.documentcharge,
            AMSENSEXP_G102024: (this.SerchTypeMawb == "1") ? data.AMS_ENSCHARGE : this.ams_enscharge,
            MISCEXP_G102025: (this.SerchTypeMawb == "1") ? data.MISCHARGE : this.mischarge
        };
        //console.log(jsonmaster)
        this.loaderService.display(true);
        this._dataService.getData("Accounts/ACC_PURCHASE_MAWBNO_PAGELOAD", jsonmaster)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                if (data.Table[0].STATUS.split("#")[0] == "100") {
                    _this.showModal_MAWB = false;
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.PurchaseDate = (data.Table1[0].PUR_DATE != "") ? _this._dataService.stringdttoArry(data.Table1[0].PUR_DATE) : "";
                    _this.InvNo = data.Table1[0].SUPLLIERINVNO;
                    _this.PurchaseNo = data.Table[0].ENTRYNO;
                    _this.DueDate = (data.Table1[0].DUE_DATE != "") ? _this._dataService.stringdttoArry(data.Table1[0].DUE_DATE) : "";
                    _this.NetAmt = data.Table1[0].NETTOTAL;
                    _this.NetAmount = data.Table1[0].TOTAMOUNT;
                    _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                    _this.JobNo = data.Table[0].JOBNO;
                    _this.Accountlist = data.Table;
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("error", "error", data.Table1[0].STATUS.split("#")[1]);
                    _this.loaderService.display(false);
                }
            }
            else {
                _this._toasterService.toast("error", "error", data.Table1[0].STATUS.split("#")[1]);
                _this.loaderService.display(false);
            }
        });
    };
    PurchaseGeneralComponent.prototype.air_freboth0 = function () {
        var answer = confirm("Please confrim... Freight Rebate is 0  and Air Freight Commission is 0 , \n Click on button Ok to continue and Cancel to Retry !");
        if (answer == false) {
            return false;
        }
    };
    PurchaseGeneralComponent.prototype.air0 = function () {
        var answer = confirm("Please confrim... Air Freight Commission is 0 , \n Click on button Ok to continue and Cancel to Retry !");
        if (answer == false) {
            return false;
        }
    };
    PurchaseGeneralComponent.prototype.fri0 = function () {
        var answer = confirm("Please confrim... Freight Rebate is 0 , Click on button Ok to continue and Cancel to Retry");
        if (answer == false) {
            return false;
        }
    };
    PurchaseGeneralComponent.prototype.Reset = function () {
        if (confirm('Are you sure you want to reset all data?')) {
            this.Narration = "";
            this.Resetchildrcrd();
            this.InvNo = "";
            this.InvDate = "";
            this.DueDate = "";
            this.BillReceive = "";
            this.PurchaseNo = ' ';
            // this.PurchaseDate = '';
            this.passedby = '';
            this.PassedAmount = '';
            this.InvoiceAmount = '';
            this.suppliername = undefined;
            this.VoucherNo = '';
            this.IsPassed = false;
            //this.Narration.nativeElement.value = "";
            // document.getElementById("autoresizing").VA = "";
            this.NetAmount = '';
            this.Netdeduction = '';
            this.NetAmt = '';
            this.text = "Submit";
            this.chktdslbl = "";
            this.billaddress = "";
            this.disablesupplier = false;
            this.disablesupplieraddr = false;
            this.chkIsTDS = false;
            this.Accountlist = [];
            this.Clearall();
            this.disablechildaddbtn = false;
            this.disablechildresetbtn = false;
            if (this.STATUS == 'PI') {
                this._router.navigate(['/accounts/purchase/Purchase/PI/1/ ']);
            }
            else if (this.STATUS == 'RPI') {
                this._router.navigate(['/accounts/purchase/Purchase/RPI/1/ ']);
            }
        }
    };
    PurchaseGeneralComponent.prototype.print = function (pono) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Purchase-print/' + pono + '/' + this.STATUS + '/', "Purchase Print", toolbar);
    };
    PurchaseGeneralComponent.prototype.OpenTdsModal = function () {
        var _this = this;
        if (this.suppliername == "" || this.suppliername == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Supplier  !');
            return false;
        }
        if (this.Accountlist == "" || this.Accountlist == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Add Account Details !');
            return false;
        }
        this.showModal_TDS = true;
        this.str = "";
        this.loaderService.display(true);
        var jsondata = {
            SUPPCODE: this.suppliername,
            PURCHASEDT: this.PurchaseDate,
            VGUID: this._loginService.getLogin()[0].GUID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Accounts/ACC_PIBP_GET_TDSDATA_NG", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSList = data.Table;
                // this.tottdsamt=data.Table2[0].TOTTDSAMT;
                _this.totpiamt = data.Table2[0].TOTPIAMT;
                _this.TotalTDSList = data.Table3;
                _this.sectioncnt = data.Table4[0].CNT;
                _this.seltdsamt = "0";
                _this.seltaxableamt = "0";
                if (_this.sectioncnt == "1") {
                    for (var i = 0; i < _this.TDSList.length; i++) {
                        _this.TDSList[i].Disabled = true;
                        _this.TDSList[i].Checked = true;
                        _this.str += _this.TDSList[i].TDSACCTID + ' |' + _this.TDSList[i].RATE + '|' + _this.TDSList[i].TDSAMOUNT + '|' + _this.TDSList[i].AMOUNT
                            + '|' + _this.TDSList[i].ITEMCODE + '|' + _this.TDSList[i].NARRATION + '|' + _this.TDSList[i].RATETYPE + '|' + _this.TDSList[i].LDCRATE + '|' + _this.TDSList[i].ACCTID +
                            '|' + _this.TDSList[i].OFFLAG + ";";
                    }
                    _this.totpiamt = _this.totpiamt;
                    _this.seltaxableamt = data.Table2[0].TOTPIAMT;
                }
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                _this.TDSList = [];
                _this.tottdsamt = "";
                _this.seltdsamt = "";
                _this.seltaxableamt = "";
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    PurchaseGeneralComponent.prototype.closeTdsModal = function () {
        this.str = "";
        this.newArray = [];
        this.showModal_TDS = false;
    };
    PurchaseGeneralComponent.prototype.GetTDSType = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsondata = {
            SUPPCODE: this.suppliername,
            PURCHASEDT: this.PurchaseDate,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_GETTDSTYPE", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSTYPE = data.Table[0].TDS_TYPE.split(",")[0];
                _this.TDSTYPE1 = data.Table[0].TDS_TYPE.split(",")[1];
                //this.sectioncnt=data.Table[0].CNT
                if (_this.TDSTYPE == "EDC") {
                    _this.disabletdsbtn = true;
                }
                else if (_this.TDSTYPE == "LDC" || _this.TDSTYPE == "BRC") {
                    _this.disabletdsbtn = false;
                }
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "102") {
                _this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.suppliername = undefined;
                _this.chktdslbl = "";
                _this.chkIsTDS = false;
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                // this._toasterService.toast('warning', 'warning', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    //     getCheckedTDSData(e, accid,itemcode,id){
    //       if(e.target.checked) {
    //          this.checkedList.push(accid);
    //     } else {
    //         let index = this.checkedList.findIndex(obj => accid.value === obj.value);
    //         if(index > -1) {
    //             this.checkedList.splice(index,1);
    //         }
    //     }
    //     if(this.checkedList.length > 4) {  // *change available slots*
    //         let unCheckedList = this.TDSList.filter((obj) => {
    //            let isCheck = this.checkedList.find((item) => {
    //                 return item.value === obj.value
    //             });
    //             obj.Checked = !isCheck ? true : false;
    //             return !isCheck;
    //         });
    //     } else {
    //        this.TDSList.map((obj)=>{
    //            obj.Checked = false;
    //        });
    //     }
    // }
    //     }
    PurchaseGeneralComponent.prototype.getCheckedTDSData = function (event, tdsaccid, rate, TDSAmount, puramt, icode, narr, ratetype, ldcrate, accid, offlag) {
        // let data1: any = []
        // let data2
        // data1 = this.TDSList.filter((code: any) => code.ACCTID == accid)
        // if(data1.length>"1"){
        //   data2 = this.TDSList.filter((code: any) => code.ITEMCODE == acccode)
        //   }
        //this.newArray=[];
        var _this = this;
        var Tdsamt;
        this.sel_accid = accid;
        if (event) {
            var selamt = parseFloat(this.selpiamt);
            var piamt = parseFloat(puramt);
            var newtot = (selamt + piamt);
            console.log(newtot.toFixed(2));
            this.selpiamt = newtot.toFixed(2);
            this.seltaxableamt = parseFloat(this.seltaxableamt) + parseFloat(puramt);
            var obj = {
                TDSACCTID: tdsaccid,
                RATE: rate,
                TDSAMOUNT: TDSAmount,
                PURAMT: puramt,
                ITEMCODE: icode,
                NARR: narr,
                RATETYPE: ratetype,
                LDCRATE: ldcrate,
                ACCTID: accid,
                OFFLAG: offlag
            };
            this.newArray.push(obj);
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.TDSACCTID == _this.sel_accid; });
            this.newArray.splice(index, 1);
            var selamt = parseFloat(this.seltaxableamt);
            var piamt = parseFloat(puramt);
            var newtot = (selamt - piamt);
            this.seltaxableamt = newtot.toFixed(2);
        }
        if (event) {
            for (var i = 0; i < this.TDSList.length; i++) {
                if (this.TDSList[i]["ACCTID"] == accid) {
                    if (this.TDSList[i]["ITEMCODE"] != icode) {
                        this.TDSList[i].Disabled = true;
                    }
                    else if (this.TDSList[i]["ITEMCODE"] == icode) {
                        this.TDSList[i].Disabled = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.TDSList.length; i++) {
                if (this.TDSList[i]["ACCTID"] == accid) {
                    if (this.TDSList[i]["ITEMCODE"] != icode) {
                        this.TDSList[i].Disabled = false;
                    }
                    else if (this.TDSList[i]["ITEMCODE"] == icode) {
                        this.TDSList[i].Disabled = false;
                    }
                }
            }
        }
    };
    PurchaseGeneralComponent.prototype.AddtdsDetails = function () {
        var _this = this;
        // var str = '';
        if (this.sectioncnt > 1) {
            if (this.newArray == "" || this.newArray == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please select at least one record!');
                return false;
            }
            for (var i = 0, len = this.newArray.length; i < len; i++) {
                this.str += this.newArray[i].TDSACCTID + ' |' + this.newArray[i].RATE + '|' + this.newArray[i].TDSAMOUNT + '|' + this.newArray[i].PURAMT
                    + '|' + this.newArray[i].ITEMCODE + '|' + this.newArray[i].NARR + '|' + this.newArray[i].RATETYPE + '|' + this.newArray[i].LDCRATE + '|' + this.newArray[i].ACCTID +
                    '|' + this.newArray[i].OFFLAG + ";";
            }
        }
        console.log(this.str);
        var jsontdsdtl = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            STATUS: this.STATUS,
            VGUID: this._loginService.getLogin()[0].GUID,
            SUPCODE: this.suppliername.split("|")[0],
            STR: this.str
        };
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_TDSMULTI_IU_NG", jsontdsdtl)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Accountlist = data.Table;
                _this.NetAmount = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt = data.Table1[0].NETTOTAL;
                _this.loaderService.display(false);
                _this.str = "";
                _this.showModal_TDS = false;
                _this.disabletdsbtn = true;
                _this.disableresetbtn = false;
                _this.disablesupplier = true;
                _this.disablesupplieraddr = true;
                _this.tdsaddflag = "1";
                _this.disablechildaddbtn = true;
                _this.disablechildresetbtn = true;
            }
        });
    };
    PurchaseGeneralComponent.prototype.ResetTDS = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset TDS data?')) {
            var jsonmaster = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_PURCHASE_TDS_RESET_NG", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.Accountlist = data.Table;
                    _this.NetAmount = data.Table1[0].TOTAMOUNT;
                    _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                    _this.NetAmt = data.Table1[0].NETTOTAL;
                    _this.Resetchildrcrd();
                    _this.str = "";
                    _this.newArray = [];
                    _this.disabletdsbtn = false;
                    _this.disablesupplier = false;
                    _this.disablesupplieraddr = false;
                    _this.disablechildaddbtn = false;
                    _this.disablechildresetbtn = false;
                    _this.tdsaddflag = "0";
                }
            });
        }
    };
    PurchaseGeneralComponent.prototype.EnableDisableDtn = function (tds) {
        if (tds == "1" && this.PurchaseNo == ' ') {
            this.chktdslbl = "TDS Applicable for Selected Supplier";
            this.chkIsTDS = true;
            this.disableresetbtn = false;
            this.disabletdsbtn = false;
            this.disablechildaddbtn = false;
            this.disablechildresetbtn = false;
            // this.disablechktds=true;
        }
        else if (tds == "1" && this.PurchaseNo != ' ') {
            this.chktdslbl = "TDS Applicable for Selected Supplier";
            this.chkIsTDS = true;
            this.disableresetbtn = false;
            this.disabletdsbtn = true;
            this.disablechildaddbtn = true;
            this.disablechildresetbtn = true;
            this.tdsaddflag = "1";
            this.disablepurchasedate = true;
            // this.disablechktds=true;
        }
        if (tds == "0") {
            this.chktdslbl = "Is Tds Applicable";
            this.disabletdsbtn = true;
            this.chkIsTDS = false;
            this.disableresetbtn = true;
            this.disablepurchasedate = false;
        }
    };
    PurchaseGeneralComponent.prototype.fn_JobValidation = function () {
        var jobcmpcode = this.JobNo.substring(0, 2);
        var cmpcode = this._loginService.getLogin()[0].CMPCODE;
        if (jobcmpcode != cmpcode) {
            alert("Entered Job No. is of different company !");
            this.JobNo = "";
            return false;
        }
    };
    PurchaseGeneralComponent.prototype.TextareaValueChange = function (ev) {
        this.Narration = ev.target.value;
    };
    PurchaseGeneralComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    PurchaseGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-general',
            template: __webpack_require__(/*! raw-loader!./purchase-general.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/purchase-general.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], PurchaseGeneralComponent);
    return PurchaseGeneralComponent;
}());



/***/ }),

/***/ "./src/app/accounts/purchase/purchase-search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/accounts/purchase/purchase-search.component.ts ***!
  \****************************************************************/
/*! exports provided: PurchaseSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseSearchComponent", function() { return PurchaseSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
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









var PurchaseSearchComponent = /** @class */ (function () {
    function PurchaseSearchComponent(_dataService, _toasterService, _loaderService, _router, datePipe, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.datePipe = datePipe;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
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
            selectorHeight: '180px',
            selectorWidth: '200px'
        };
        this.SupplierList = [];
        this.searchList = [];
        this.printarray = [];
        this.displayType = 'SEARCH';
        this.searchHeaderText = 'List of Purchase';
        this.Display = "1";
        this.Type = 'purno';
        this.PurchaseNo = '';
        this.PurchaseFromDate = null;
        this.PurchaseToDate = null;
        this.SuppFromDt = null;
        this.SupptoDt = null;
        this.PurchaseofDay = null;
        this.JobNo = '';
        this.Amount = '';
        this.Day = null;
        this.Supplier = null;
    }
    PurchaseSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this._loginService.getLogin())
        this._loaderService.display(true);
        this._activatedRoute.params.subscribe(function (params) {
            // console.log(params)
            // this.PurchaseNo = params["EntryNo"];
            _this.STATUS = params["Status"];
            // this.Type = params["Type"]
        });
        // this.verifyPermission('12','Modify')
        this.verifyPermission('425', 'Modify');
        var jsonparam = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.SupplierList = data.Table1;
            _this._loaderService.display(false);
        });
    };
    PurchaseSearchComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
        });
    };
    PurchaseSearchComponent.prototype.fnValidate_Code = function () {
        if (this.PurchaseNo.trim().length === 0) {
            alert("Please Enter Purchase No.");
            return false;
        }
        else if (this.PurchaseNo.trim().length != 15) {
            alert("Invalid Purchase No.");
            return false;
        }
        return true;
    };
    PurchaseSearchComponent.prototype.fnValidate_JobNo = function () {
        if (this.JobNo.trim().length === 0) {
            alert("Please Enter Job No.");
            return false;
        }
        else if (this.JobNo.trim().length != 15) {
            alert("Invalid Job No.");
            return false;
        }
        return true;
    };
    PurchaseSearchComponent.prototype.fnValidate_Amount = function () {
        if (this.JobNo.trim().length === 0) {
            alert("Please Enter Amount.");
            return false;
        }
        return true;
    };
    PurchaseSearchComponent.prototype.fnValidate_Date = function () {
        if (!this.PurchaseFromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.PurchaseToDate) {
            alert("Please select To Date.");
            return false;
        }
        else if (this.PurchaseFromDate != "" && this.PurchaseToDate != "") {
            var intdtfrm = void 0, intdtTo = void 0;
            intdtfrm = this._dataService.datechnge(this.PurchaseFromDate.formatted);
            intdtTo = this._dataService.datechnge(this.PurchaseToDate.formatted);
            if (this._dataService.date2Comparison(intdtfrm, intdtTo) == false) {
                this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                return false;
            }
        }
        return true;
    };
    PurchaseSearchComponent.prototype.fnValidate_Supplier = function () {
        if (!this.Supplier) {
            alert("Please select Supplier.");
            return false;
        }
        return true;
    };
    PurchaseSearchComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    PurchaseSearchComponent.prototype.search = function () {
        var SearchType = "";
        if (this.STATUS == 'PI') {
            if (this.Type == 'purno') {
                if (this.fnValidate_Code()) {
                    SearchType = "purno";
                    this.getData(SearchType);
                }
                ;
            }
            else if (this.Type == 'Date') {
                if (this.fnValidate_Date()) {
                    SearchType = "Date";
                    this.getData(SearchType);
                }
            }
            else if (this.Type == 'Supplier') {
                if (this.fnValidate_Supplier()) {
                    SearchType = "Supplier";
                    this.getData(SearchType);
                }
            }
            else if (this.Type == 'JobNo') {
                if (this.fnValidate_JobNo()) {
                    SearchType = "JobNo";
                    this.getData(SearchType);
                }
            }
            else if (this.Type == 'Amount') {
                if (this.fnValidate_Amount()) {
                    SearchType = "Amount";
                    this.getData(SearchType);
                }
            }
            else if (this.Type == 'PRINTAV') {
                SearchType = "PRINTAV";
                this.getAllVoucherofday(SearchType);
            }
        }
        else if (this.STATUS == 'RPI') {
            if (this.Type == 'purno') {
                if (this.fnValidate_Code()) {
                    SearchType = "purno";
                    this.getRPIData(SearchType);
                }
                ;
            }
            else if (this.Type == 'Date') {
                if (this.fnValidate_Date()) {
                    SearchType = "Date";
                    this.getRPIData(SearchType);
                }
            }
            else if (this.Type == 'Supplier') {
                if (this.fnValidate_Supplier()) {
                    SearchType = "Supplier";
                    this.getRPIData(SearchType);
                }
            }
            else if (this.Type == 'JobNo') {
                if (this.fnValidate_JobNo()) {
                    SearchType = "JobNo";
                    this.getRPIData(SearchType);
                }
            }
            else if (this.Type == 'Amount') {
                if (this.fnValidate_Amount()) {
                    SearchType = "Amount";
                    this.getRPIData(SearchType);
                }
            }
            else if (this.Type == 'PRINTAV') {
                SearchType = "PRINTAV";
                this.getAllVoucherofday(SearchType);
            }
        }
    };
    PurchaseSearchComponent.prototype.getAllVoucherofday = function (searchtype) {
        var _this = this;
        var jsonofday = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            TYPE: searchtype,
            FIN_STARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FIN_ENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            DAY: (this.PurchaseofDay) ? this.SqlDate(this.PurchaseofDay.formatted) : ""
        };
        //console.log(jsonofday)
        this._dataService.getData("Accounts/ACC_PURCHASE_SEARCH_PERDAY", jsonofday)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            console.log(data);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                _this._router.navigate(["/accounts/purchase/Purchase/PI/1/", data.Table[0].pur_code]);
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
                // console.log(this.searchList)
            }
        });
    };
    PurchaseSearchComponent.prototype.getRPIData = function (searchtype) {
        var _this = this;
        this._loaderService.display(true);
        // let frmdt :any =this.datePipe.transform(this.PurchaseFromDate, 'dd/MMM/yyyy ')
        // let todt:any =this.datePipe.transform(this.PurchaseToDate, 'dd/MMM/yyyy ')
        var _jsonData = {
            PUR_CODE: (this.PurchaseNo) ? this.PurchaseNo : "",
            PUR_SUPPLIER: (this.Supplier) ? this.Supplier : "0",
            PUR_INVNO: "",
            PUR_JOBNO: (this.JobNo) ? this.JobNo : "",
            AMOUNT: (this.Amount) ? this.Amount : "",
            FROMDATE: (this.PurchaseFromDate) ? this.PurchaseFromDate.formatted : "",
            TODATE: (this.PurchaseToDate) ? this.PurchaseToDate.formatted : "",
            // STATUS: "PI",
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            TYPE: searchtype,
            DISPLAYTYPE: this.Display,
            YEAR_ID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
            FIN_STARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FIN_ENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            USERID: this._loginService.getLogin()[0].CMPID,
            STATUS: this.STATUS,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_SEARCH_RPI", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                _this._router.navigate(["/accounts/purchase/Purchase/RPI/1/", data.Table[0].PUR_CODE]);
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    PurchaseSearchComponent.prototype.getData = function (searchtype) {
        var _this = this;
        this._loaderService.display(true);
        var _jsonData = {
            PUR_CODE: (this.PurchaseNo) ? this.PurchaseNo : "",
            PUR_SUPPLIER: (this.Supplier) ? this.Supplier : "0",
            PUR_INVNO: "",
            PUR_JOBNO: (this.JobNo) ? this.JobNo : "",
            AMOUNT: (this.Amount) ? this.Amount : "",
            FROMDATE: (this.PurchaseFromDate) ? this.PurchaseFromDate.formatted : "",
            TODATE: (this.PurchaseToDate) ? this.PurchaseToDate.formatted : "",
            // STATUS: "PI",
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            TYPE: searchtype,
            DISPLAYTYPE: this.Display,
            YEAR_ID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
            FIN_STARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FIN_ENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_SEARCH_PI", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                _this._router.navigate(["/accounts/purchase/Purchase/PI/1/", data.Table[0].pur_code]);
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    PurchaseSearchComponent.prototype.redirectToEdit = function (EntryNo) {
        if (confirm('Click Ok to Print or Click Cancel to Edit ?')) {
            var theTop = (screen.height / 2) - (483 / 2);
            var theLeft = (screen.width / 2) - (780 / 2);
            var toolbar_1 = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
            window.open('./#/popup/Account-Purchase-print/' + EntryNo + '/' + this.STATUS + '/', "Purchase Print", toolbar_1);
        }
        else {
            if (this.STATUS == 'PI') {
                this._router.navigate(['/accounts/purchase/Purchase/PI/1/' + EntryNo]);
            }
            else if (this.STATUS == 'RPI') {
                this._router.navigate(['/accounts/purchase/Purchase/RPI/1/' + EntryNo]);
            }
        }
    };
    PurchaseSearchComponent.prototype.getCheckboxValues = function (event, data) {
        var index = this.printarray.findIndex(function (x) { return x.printno == data; });
        if (event) {
            var obj = {
                printno: data
            };
            this.printarray.push(obj);
        }
        else {
            this.printarray.splice(index, 1);
        }
    };
    PurchaseSearchComponent.prototype.checkAll = function (ev) {
        this.printarray = [];
        this.searchList.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.searchList.length; i++) {
                var obj = {
                    printno: this.searchList[i].pur_code
                };
                this.printarray.push(obj);
            }
        }
        else {
            this.printarray = [];
        }
    };
    PurchaseSearchComponent.prototype.PrintSupplier = function () {
        if (this.printarray.length == "0") {
            this._toasterService.toast("warning", "warning", "Select at least One Purchase No to Print.");
            return false;
        }
        var output = this.printarray.map(function (item) {
            return item.printno;
        });
        var datatry = output.join(",");
        var printnolist = datatry;
        var URL = "http://manilal.com/erp/UI/Accounts/frm_Acc_Tran_Purchase_BulkPrint.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&entryno=" + printnolist
            + "&CurLogInIP=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    PurchaseSearchComponent.prototype.SupplierSinglePrint = function (suppno) {
        if (suppno == "" || suppno == undefined || suppno.length < 15) {
            this._toasterService.toast("warning", "warning", "Enter Supplier No to Print.");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Purchase-print/' + suppno + '/' + this.STATUS + '/', "Purchase Print", toolbar);
    };
    PurchaseSearchComponent.prototype.ResetAll = function () {
        this.PurchaseNo = "",
            this.JobNo = "",
            this.Amount = "",
            this.Supplier = "",
            this.PurchaseFromDate = "",
            this.PurchaseToDate = "",
            this.Day = "",
            this.PurchaseofDay = "";
    };
    PurchaseSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    PurchaseSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-search',
            template: __webpack_require__(/*! raw-loader!./purchase-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/purchase/purchase-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], PurchaseSearchComponent);
    return PurchaseSearchComponent;
}());



/***/ }),

/***/ "./src/app/accounts/purchase/purchase.module.ts":
/*!******************************************************!*\
  !*** ./src/app/accounts/purchase/purchase.module.ts ***!
  \******************************************************/
/*! exports provided: PurchaseInvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseInvModule", function() { return PurchaseInvModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _purchase_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase.routing */ "./src/app/accounts/purchase/purchase.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _purchase_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./purchase-general.component */ "./src/app/accounts/purchase/purchase-general.component.ts");
/* harmony import */ var _purchase_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchase-search.component */ "./src/app/accounts/purchase/purchase-search.component.ts");
/* harmony import */ var _multicontainer_purchase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./multicontainer-purchase.component */ "./src/app/accounts/purchase/multicontainer-purchase.component.ts");
/* harmony import */ var _mawb_purchase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mawb-purchase.component */ "./src/app/accounts/purchase/mawb-purchase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PurchaseInvModule = /** @class */ (function () {
    function PurchaseInvModule() {
    }
    PurchaseInvModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_purchase_routing__WEBPACK_IMPORTED_MODULE_6__["PurchaseRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [
                _mawb_purchase_component__WEBPACK_IMPORTED_MODULE_11__["MAWBPurchaseComponent"],
                _multicontainer_purchase_component__WEBPACK_IMPORTED_MODULE_10__["MulticontainerPurchaseComponent"],
                _purchase_general_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseGeneralComponent"],
                _purchase_search_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseSearchComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], PurchaseInvModule);
    return PurchaseInvModule;
}());



/***/ }),

/***/ "./src/app/accounts/purchase/purchase.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/accounts/purchase/purchase.routing.ts ***!
  \*******************************************************/
/*! exports provided: PurchaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRoutingModule", function() { return PurchaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _purchase_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-general.component */ "./src/app/accounts/purchase/purchase-general.component.ts");
/* harmony import */ var _purchase_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-search.component */ "./src/app/accounts/purchase/purchase-search.component.ts");
/* harmony import */ var _multicontainer_purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multicontainer-purchase.component */ "./src/app/accounts/purchase/multicontainer-purchase.component.ts");
/* harmony import */ var _mawb_purchase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mawb-purchase.component */ "./src/app/accounts/purchase/mawb-purchase.component.ts");
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
            title: 'Purchase'
        },
        children: [
            { path: 'Purchase/:Status/:Type/:PurchaseNo', component: _purchase_general_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseGeneralComponent"], data: { title: 'Add' } },
            { path: 'PurchaseSearch/:Status', component: _purchase_search_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseSearchComponent"], data: { title: 'Search' } },
            { path: 'multicontainer/:Status/:Type/:PurchaseNo', component: _multicontainer_purchase_component__WEBPACK_IMPORTED_MODULE_4__["MulticontainerPurchaseComponent"], data: { title: 'Add' } },
            { path: 'mawb/:Status/:Type/:PurchaseNo', component: _mawb_purchase_component__WEBPACK_IMPORTED_MODULE_5__["MAWBPurchaseComponent"], data: { title: 'Add' } },
        ]
    }
];
var PurchaseRoutingModule = /** @class */ (function () {
    function PurchaseRoutingModule() {
    }
    PurchaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PurchaseRoutingModule);
    return PurchaseRoutingModule;
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
//# sourceMappingURL=purchase-purchase-module.js.map