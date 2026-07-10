(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BankPayment-bankpayment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n           \r\n            \r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <b> General Details </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n                <td><span  class=\"col-form-span-label\"><b>Entry No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"EntryNo\" type=\"text\"   disabled=\"disabled\" class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td ><span class=\"col-form-span-label\"><b>Entry Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n                <td>\r\n                    <my-date-picker name=\"EntryDate\"   [options]=\"myDatePickerOptions\" class=\"form-control\" (dateChanged)=\"EntryDateChanged($event)\" [selDate]=\"EntryDate\"></my-date-picker>\r\n                </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <!-- <td colspan=\"3\">  <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > </td> -->\r\n                <td colspan=\"3\">\r\n                    <textarea class=\"form-control\" id=\"autoresizing\" (change)=\"TextareaValueChange($event)\"\r\n                      placeholder=\"text\" cols=\"50\" rows=\"3\" [innerHTML]=\"Narration\"></textarea>\r\n                   </td>\r\n             </tr>\r\n             <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Payment Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Payment Mode</b> </span></td>\r\n                <td  style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"ChqType\" (change)=\"fnchequeType()\" >\r\n\r\n                        <option value=\"CHQ\" > CHEQUE</option>\r\n                        <option value=\"Y\">NOT OVER</option>\r\n                        <option value=\"PO\">PAY ORDER</option>\r\n                        <option value=\"NEFT\">NEFT</option>\r\n                        <option value=\"RTGS\">RTGS</option>\r\n                          </select>\r\n\r\n            </td>\r\n\r\n                <!-- <td colspan=\"2\"><span style=\"color: red;\">\r\n                    Normal Cheque Print\r\n                </span></td> -->\r\n                <td colspan=\"2\">\r\n                    <span class=\"col-form-span-error\">{{chequelabel}}</span>\r\n                </td>\r\n\r\n            </tr>\r\n             <tr>\r\n\r\n                <td><span class=\"col-form-span-label\"><b>Cheque No.</b> </span></td>\r\n                <!-- <td  >\r\n                       <input [(ngModel)]=\"ChequeNo\"  [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width50\" >\r\n                       <button align=\"left\" class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"fnChqValidate()\">  <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Status</span></button>\r\n\r\n                     </td> -->\r\n                     <td >\r\n                        <table style=\"width:200px ;\">\r\n                            <tbody  style=\"border: none;\">\r\n                            <tr>\r\n                                   <td >  <input [(ngModel)]=\"ChequeNo\"  [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width100\" maxlength=\"40\" ></td>\r\n                                    <td > <button type=\"submit\" (click)=\"fnChqValidate()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Status</span></button> </td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n\r\n                    </td>\r\n                       <td ><span class=\"col-form-span-label\"><b>Cheque Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n\r\n                     <td>\r\n                        <my-date-picker name=\"ChequeDate\"  (dateChanged)=\"ChequeDateChanged($event)\" [options]=\"myDatePickerOptions\" class=\"form-control\" [selDate]=\"ChequeDate\" ></my-date-picker>\r\n                    </td>\r\n            </tr>\r\n               <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Our Bank</b> </span></td>\r\n                <td colspan=\"3\">\r\n                <select class=\"form-control width500\"  [(ngModel)]=\"OurBank\" (change)=\"GetOurBankName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of OurBankList\"  value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\r\n\r\n                </select>\r\n            </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Bank Name</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BankName\"   type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Bank Ref. No.</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"BankRefNo\"   type=\"text\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Accounts Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n\r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >\r\n\r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                </td>\r\n                <td style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable\"   >\r\n                        <option value=\"\">--Please select--</option>\r\n                        <option value=\"Y\">Y</option>\r\n                        <option value=\"N\">N</option>\r\n                       </select>\r\n\r\n            </td>\r\n            <td  class=\"col-form-span-heading\" colspan=\"2\">\r\n\r\n                <div style=\"display: flex;float: left;\" >\r\n                    <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl}}</b> </span>\r\n                    <span class=\"col-form-span-label\"> <input type=\"checkbox\"\r\n                          [(ngModel)]=\"chkIsTDS\"  [disabled]='disablecheckbox'\r\n                            /> </span>\r\n                </div>\r\n            </td>\r\n\r\n\r\n            </tr>\r\n            <TR>\r\n                <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span></td>\r\n                <td style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable\"   >\r\n                            <option  value=\"\" >-- Please Select --</option>\r\n                            <option value=\"1\">Y</option>\r\n                            <option value=\"0\" >N</option>\r\n                            <option value=\"2\" >RCM</option>\r\n                       </select>\r\n                </td>\r\n                <!-- <td><span class=\"col-form-span-label\"><b>GST Rate</b> </span></td>\r\n                <td style=\" display: flex; \">\r\n                    \r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"gstrate\"   >\r\n                            <option value=\"0\">--Please select--</option>\r\n                            <option *ngFor=\"let d of gstratelist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                       </select>\r\n                </td> -->\r\n            </TR>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Entry Type</b> </span></td>\r\n                <td style=\" display: flex; \">\r\n                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" [disabled]='disableEntryType' (change)=\"listbillpopup($event.target.value)\"  [disabled]=\"disable_EntryType\" >\r\n                        <option value=\"0\">Please select</option>\r\n                        <option *ngFor=\"let d of EntryTypeList\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                        </select>\r\n\r\n            </td>\r\n                <td><span class=\"col-form-span-label\"><b> Department</b> </span></td>\r\n                <td>\r\n                 <select class=\"form-control width150\"  [(ngModel)]=\"Department\" (change)=\"GetDepartmentName($event)\" >\r\n                    <option value=\"0\">--Please select--</option>\r\n                    <option *ngFor=\"let d of Departmentlist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n\r\n                </select>\r\n\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Bill No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"BillNo\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]=\"disable_BillNo\" (change)=\"fnBillNoChk()\" class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Job No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <!-- <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\" (change)=\"FillDepartment()\"  class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Amount\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]='toggledebit' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Deduction\" [OnlyNumber]=\"true\" type=\"text\"  [disabled]='disable_deduction'   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ShortNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]=\"disable_cmdadd\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\" [disabled]=\"disable_cmdcancel\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disabletdsbtn'> <span class=\"col-form-span-label\"\r\n                               (click)=\"!disabletdsbtn && OpenTdsModal();\"><i class=\"fa fa-dot-circle-o\"></i> Cal TDS</span></button>\r\n                               <button class=\"btn btn-sm btn-danger\" type=\"reset\"  [disabled]='disableresetbtn'> <span class=\"col-form-span-label\"\r\n                                (click)=\"!disableresetbtn && ResetTDS()\"><i class=\"fa fa-ban\"></i> Reset TDS</span></button>\r\n                    <!-- <button class=\"btn btn-sm btn-danger\" type=\"List\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> List</span></button> -->\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Net Total</b> </span></td>\r\n                <td colspan=\"3\" >  <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"TotalDeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n\r\n       <tr>\r\n        <td colspan=\"4\">\r\n        <!-- <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr>\r\n                 <td colspan=\"4\" > style=\"width:615px;\" -->\r\n                    <div class=\"row xyscroll\"  style=\"width:800px;\" >\r\n                        <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\" >\r\n                            <thead>\r\n                                <tr class=\"bakgrdliteBlue\">\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\" ></th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">TDS</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">GST</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                    <th  class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type </th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\r\n                                    <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                </tr>\r\n                            </thead>\r\n                             <tbody   >\r\n                                <tr *ngFor=\"let obj of Accountlist\">\r\n                                    <td class=\"centerlabel\">\r\n                                        <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                        &nbsp;\r\n                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.ACC_BANKDTLS_ID,obj.CLIENT,obj.IS_NOT_EDIT_ABLE)\"></i>\r\n                                    </td>\r\n                                   <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                   <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.IS_TDS}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                    <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                   </div>\r\n                 <!-- </td>\r\n            </tr>\r\n\r\n        </table>   -->\r\n\r\n    </td>\r\n</tr>\r\n<tr>\r\n    <td colspan=\"4\"  class=\"centerlabel\">\r\n        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n        <button class=\"btn btn-sm btn-danger\" type=\"reset\" (click)=\"Reset();\" ><span class=\"col-form-span-label\" ><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n    </td>\r\n</tr>\r\n </table>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_ChqList ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-mg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:600px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">BILL DETAILS</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > -->\r\n                        <div class=\"col\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\"><b>Details For Cheque No. {{ChequeNo}}</b></span>\r\n                                </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\"><b>Bank {{OurBankName}}</b></span>\r\n                                </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <thead style=\"text-align: center;\">\r\n                                        <tr>\r\n\r\n                                            <th class=\"col-form-span-label\">Entry No.</th>\r\n                                            <th class=\"col-form-span-label\">Entry Date</th>\r\n                                            <th class=\"col-form-span-label\">Cheque No</th>\r\n                                            <th class=\"col-form-span-label\">Cheque Date</th>\r\n                                            <th class=\"col-form-span-label\">Account Name</th>\r\n                                            <th class=\"col-form-span-label\">Account Date</th>\r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody >\r\n\r\n                                        <tr *ngFor=\"let obj of ListChq \">\r\n\r\n                                            <td class=\"col-form-span-label\">{{obj.entryno}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.entrydt}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.chequeno}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.chequedt}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.acctname}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.actualamount}}</td>\r\n\r\n\r\n\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n                <div style=\"float: right;\">\r\n\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                            (click)=\"close()\"><i class=\"fa fa-ban\"></i>\r\n                            Close</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_ListBill ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-mg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:500px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">BILL DETAILS</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > -->\r\n                        <div class=\"col\" style=\"height:300px;overflow-y: auto;\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" align=\"center\">\r\n                            <tr>\r\n                                <td><span class=\"col-form-span-label\"><b> Supplier:  </b> </span>\r\n                                    <span class=\"col-form-span-label\"><b>{{client}}</b></span>\r\n                                </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <thead style=\"text-align: center;\">\r\n                                        <tr>\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label\">INVOICE NO.</th>\r\n                                            <th class=\"col-form-span-label\">JOB NO.</th>\r\n                                            <th class=\"col-form-span-label\">AMOUNT</th>\r\n                                            <!-- <th class=\"col-form-span-label\">DEDUCTION</th>\r\n                                            <th class=\"col-form-span-label\">NARRATION</th> -->\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody >\r\n\r\n                                        <tr *ngFor=\"let obj of ListBill \">\r\n                                            <td class=\"col-form-span-label\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.CHECKED\" [id]=\"i\" [value]=\"i\"\r\n                                                    (ngModelChange)=\"getCheckboxValues($event,obj.INV_NO,obj.INV_JOBNO,obj.TOTALAMT,obj.SUPPLIER)\">\r\n                                                &nbsp; </td>\r\n                                            <td class=\"col-form-span-label\">{{obj.INV_NO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.INV_JOBNO}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.TOTALAMT}}</td>\r\n                                            <!-- <td class=\"col-form-span-label\">{{obj.DEDUCTION}}</td>\r\n                                            <td class=\"col-form-span-label\"> <input [(ngModel)]=\"obj.NARRATION\"  type=\"text\" maxlenght=\"40\"  class=\"form-control width150\" ></td> -->\r\n\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div style=\"float: right;\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"popup_listbill()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                            (click)=\"closeBill()\"><i class=\"fa fa-ban\"></i>\r\n                            Close</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_TDS ? 'block' : 'none' \"  >\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"width: 700px;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"card-header formheading\">\r\n                <!-- <h5 class=\"modal-title\">TDS Details</h5> -->\r\n                <strong>TDS Details</strong>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\" style=\"height:400px;overflow-y: auto; \">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <tr>\r\n                                <td colspan=\"6\">\r\n                                    <!-- <input type=\"text\" [(ngModel)]=\"term\"\r\n                                        style=\"float: right;width: 200px;font-family: verdana;font-size:11px;padding: 1px;\"\r\n                                        placeholder=\"Search by Job Number\"> -->\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <thead style=\"text-align: center;\">\r\n                                        <tr>\r\n                                            <th class=\"col-form-span-label\"></th>\r\n                                            <th class=\"col-form-span-label\">Acct Name.</th>\r\n                                            <th class=\"col-form-span-label\">Section</th>\r\n                                            <th class=\"col-form-span-label\">LDC Limit</th>\r\n                                            <th class=\"col-form-span-label\">Utilized Amt</th>\r\n                                            <th class=\"col-form-span-label\">LDC Rate %</th>\r\n                                            <th class=\"col-form-span-label\">Base Rate %</th>\r\n                                            <th class=\"col-form-span-label\">BP Amt</th>\r\n                                            <th class=\"col-form-span-label\">TDS Amount</th>\r\n                                            <th class=\"col-form-span-label\">Remarks</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                           <tr *ngFor=\"let obj of TDSList \">\r\n                                            <td class=\"col-form-span-label\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\" [disabled]=\"obj.Disabled\"\r\n                                                     (ngModelChange)=\"getCheckedTDSData($event,obj.TDSACCTID,obj.RATE,obj.TDSAMOUNT,obj.AMOUNT,obj.ITEMCODE,obj.NARRATION,obj.RATETYPE,obj.LDCRATE,obj.ACCTID,obj.OFFLAG)\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td class=\"col-form-span-label\">{{obj.ACCTNAME}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.SECTIONNAME}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.UTIAMT}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.LDCRATE}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.RATE}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.TDSAMOUNT}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.NARRATION}}</td>\r\n\r\n\r\n                                        </tr>\r\n\r\n\r\n                        </tbody>\r\n                    </td>\r\n                </tr>\r\n                        </table>\r\n                         <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <td colspan=\"9\" align=\"center\">\r\n                                <tr >\r\n                                    <td colspan=\"5\"><span class=\"col-form-span-label\">Total BP Amount :  </span>\r\n                                        <span class=\"col-form-span-label\"><b>{{totpiamt}}</b> </span>\r\n                                    </td>\r\n                                    <td align=\"right\" colspan=\"4\"><span class=\"col-form-span-label\">Selected Amount  :  </span>\r\n                                        <span class=\"col-form-span-label\"><b>{{seltaxableamt}}</b> </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <thead style=\"text-align: center;\">\r\n                                            <tr>\r\n                                              <th class=\"col-form-span-label\">Section</th>\r\n                                              <th class=\"col-form-span-label\">Total Tds Amount</th>\r\n                                             </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let obj of TotalTDSList \">\r\n                                             <td class=\"col-form-span-label\"><b>{{obj.SECTIONNAME}}</b></td>\r\n                                             <td class=\"col-form-span-label\"><b>{{obj.TOTTDSAMOUNT}}</b></td>\r\n                                         </tr>\r\n                                         </tbody>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </td>\r\n                         </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header formheading\" style=\"height:25px\" >\r\n                    <button class=\"btn btn-sm btn-danger\" style=\"float: right;\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                        (click)=\"closeTdsModal()\"><i class=\"fa fa-ban\"></i>\r\n                        Close</span></button>\r\n                    <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"AddtdsDetails()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n                <!-- <div class=\"modal\" [style.display]=\"showModal_ChqValidate ? 'block' : 'none'\">\r\n                    <div class=\"modal-dialog modal-sg\" role=\"document\"  >\r\n                        <div class=\"modal-content \" >\r\n                            < <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">CHQ DETAILS</h5>\r\n                            </div> >\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"row\">\r\n\r\n                                        <div class=\"col\" style=\"height:200px; width:500px;overflow-x: auto;\">\r\n                                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                                            <tr>\r\n                                                <td colspan=\"4\">\r\n                                                    <span class=\"col-form-span-label\"><b>{{Msg}}</b></span>\r\n                                                </td>\r\n\r\n                                            </tr>\r\n                                         <tr>\r\n                                            <td colspan=\"4\"  class=\"centerlabel\">\r\n                                                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"winclose()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Yes</span></button>\r\n                                                <button class=\"btn btn-sm btn-danger\" type=\"reset\" (click)=\"winclose();\" ><span class=\"col-form-span-label\" ><i class=\"fa fa-ban\"></i> No</span></button>\r\n                                            </td>\r\n                                         </tr>\r\n\r\n                                        </table>\r\n\r\n                                    </div>\r\n                                </div> -->\r\n"

/***/ }),

/***/ "./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.ts ***!
  \***************************************************************************/
/*! exports provided: BankPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentComponent", function() { return BankPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
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







var BankPaymentComponent = /** @class */ (function () {
    function BankPaymentComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.EntryNo = "";
        this.EntryDate = "";
        this.Narration = "";
        this.client = "";
        this.Allitemlist = [];
        this.AllDepartmentlist = [];
        this.codelistActt = [];
        this.AccountNameList = [];
        this.Departmentlist = [];
        this.Department = "0";
        this.codelistDept = [];
        this.OurBankList = [];
        this.AllOurBankList = [];
        this.ChqType = "CHQ";
        this.ChkTypeList = [];
        this.ItemList = [];
        this.EntryType = "0";
        this.EntryTypeList = [];
        this.BillNo = "";
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.TotalAmount = "0";
        this.TotalDeduction = "0";
        this.NetTotal = "0";
        this.OldNetTotal = "0";
        this.NewnetAmt = "0";
        this.ID = "0";
        this.ISNOTEDITABLE = "0";
        this.ACC_BANKDTLS_ID = "0";
        this.Header = "BANK PAYMENT";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.Accountlist = [];
        this.ACCTNAME = "";
        this.STATUS = "BP";
        this.NOTOVERFLAG = "";
        this.PAYEENAME = "";
        this.CRPARENTENTRYNO = "0";
        this.ChequeNo = "";
        this.ChequeDate = '';
        this.CompChequeFlag = "0";
        this.dfltourbank = "";
        this.showModal_ChqList = false;
        this.showModal_ChqValidate = false;
        this.ListChq = [];
        this.Conf = "";
        this.strmsg = "";
        this.disable_BillNo = false;
        this.disable_EntryType = false;
        this.disable_cmdadd = false;
        this.disable_cmdcancel = false;
        this.disable_chequetype = false;
        this.disable_chequeno = false;
        this.disable_deduction = false;
        this.toggledebit = false;
        this.showModal_ListBill = false;
        this.disableEntryType = false;
        this.ListBill = [];
        this.newArray = [];
        this.BillNoList = "";
        this.STRTXT = [];
        this.chequelabel = "Normal cheque print";
        this.confirmsave = "";
        this.BankRefNo = "";
        this.chkIsTDS = false;
        this.seltdsamt = 0;
        this.sectioncnt = "0";
        this.retsupcode = "";
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
        this.disableresetbtn = true;
        this.chktdslbl = "Is Tds Applicable";
        this.showModal_TDS = false;
        this.selpiamt = 0;
        this.seltaxableamt = 0;
        this.TotalTDSList = [];
        this.TDSList = [];
        this.disabletdsbtn = true;
        this.disablecheckbox = true;
        this.tdsledgercnt = "";
        this.gstratelist = [];
        this.gstrate = "0";
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
    BankPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ChequeDate = this._dataService.getCurrentdate();
        this._activatedRoute.params.subscribe(function (params) {
            _this.EntryNo = params["EntryNo"];
        });
        this.EntryDate = new Date();
        this.EntryDate = this._dataService.datechnge(this.EntryDate);
        this.ChequeDate = new Date();
        this.ChequeDate = this._dataService.datechnge(this.ChequeDate);
        var jsonparam = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "BP" };
        this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            ///this.Departmentlist=data.Table1;
            _this.OurBankList = data.Table2;
            _this.Allitemlist = data.Table5;
            _this.EntryTypeList = data.Table6;
            _this.AllDepartmentlist = data.Table1;
            _this.Departmentlist = data.Table1;
            var defCode = data.Table3[0].ACCTCODE;
            _this.OurBank = defCode;
            _this.dfltourbank = data.Table3[0].ACCTCODE;
            _this.SuppliertdsList = data.Table7;
            _this.gstratelist = data.Table8;
        });
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET", jsonreset)
            .subscribe(function (data) {
        });
        if (this.EntryNo != ' ') {
            this.verifyPermission('6', 'Modify');
            this.Header = 'BANK PAYMENT - UPDATE ';
            this.editpopulate();
        }
        if (this.EntryNo == ' ') {
            this.verifyPermission('6', 'Add');
            this.Header = 'BANK PAYMENT  - ADD';
        }
    };
    BankPaymentComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    BankPaymentComponent.prototype.EntryDateChanged = function (ev) {
        this.EntryDate = ev.formatted;
    };
    BankPaymentComponent.prototype.ChequeDateChanged = function (ev) {
        this.ChequeDate = ev.formatted;
    };
    BankPaymentComponent.prototype.GetActName = function (Acctcode) {
        var _this = this;
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.AccountName.split("|")[0]; })[0].TEXTFIELD;
        // this.GetTDSType();
        this.EnableDisableDtn(supptds);
    };
    BankPaymentComponent.prototype.FillDepartment = function () {
        var _this = this;
        this.codelistDept = this.AllDepartmentlist.filter(function (code) { return code.CODE === (_this.JobNo.substr(0, 2) + _this.JobNo.substr(2, 3) + _this.JobNo.substr(6, 1)); });
        this.Departmentlist = this.AllDepartmentlist.filter(function (code) { return code.CODE === (_this.JobNo.substr(0, 2) + _this.JobNo.substr(2, 3) + _this.JobNo.substr(6, 1)); });
        this.Department = this.codelistDept[0].VALUEFIELD;
        this.DepartmentName = this.codelistDept[0].TEXTFIELD;
    };
    BankPaymentComponent.prototype.GetBankName = function () {
        var _this = this;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.AllOurBankList = this.OurBankList.filter(function (code) { return code.ACCTCODENAME === _this.OurBank; });
        this.OurBankName = this.AllOurBankList[0].ACCTNAME;
    };
    BankPaymentComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text; //.split("|")[1];
    };
    BankPaymentComponent.prototype.GetOurBankName = function (event) {
        this.OurBankName = event.target.options[event.target.options.selectedIndex].text;
    };
    BankPaymentComponent.prototype.Addchildrcrd = function () {
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
        if (this.EntryType == "0" || this.EntryType == undefined || this.EntryType == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select EntryType First !');
            return false;
        }
        if (this.EntryType == "AB" || this.EntryType == "AO" || this.EntryType == "PE") {
            if (this.BillNo == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter BillNo. !');
                return false;
            }
            if (this._loginService.getLogin()[0].CMPCODE == "20") {
                if (this.BillNo.length != 10) {
                    this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                    return false;
                }
            }
            else {
                if (this.BillNo.length < 15) {
                    this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                    return false;
                }
            }
        }
        if (this.EntryType == "AD" || this.EntryType == "JB") {
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
            // if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
            //     this._toasterService.toast("warning","warning",'You have entered Job No of different City !');
            //     return false;
            //     }
        }
        if (this.JobNo == "" && this.BillNo == "") {
            if (this.Department == "" || this.Department == undefined || this.Department == "0") {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        if (this.JobNo.length != 15 && this.JobNo.length > 0) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            return false;
        }
        if ((this.Amount == "" || this.Amount == "0") && (this.Deduction == "" || this.Deduction == "0")) {
            this._toasterService.toast('warning', 'warning', 'Both Deduction & Amount cannot be Left Blank !');
            return false;
        }
        if (parseFloat(this.Amount) > 0 && parseFloat(this.Deduction) > 0) {
            this._toasterService.toast('warning', 'warning', 'Either Deduction or Amount can be Entered !');
            return false;
        }
        if (this.Deduction.length > 0) {
            var tmpdeduction = this.Deduction;
            if (isNaN((Math.round(parseFloat(tmpdeduction) * 100) / 100))) {
                this._toasterService.toast('warning', 'warning', 'Deduction Entered not Valid !');
                return false;
            }
            if (parseFloat(tmpdeduction) <= 0) {
                this._toasterService.toast('warning', 'warning', 'Deduction Entered not Valid !');
                return false;
            }
        }
        if (this.Amount.length > 0) {
            var tmpamount = this.Amount;
            if (isNaN((Math.round(parseFloat(tmpamount) * 100) / 100))) {
                this._toasterService.toast('warning', 'warning', 'Amount Entered not Valid !');
                return false;
            }
            if (parseFloat(tmpamount) <= 0) {
                this._toasterService.toast('warning', 'warning', 'Amount Entered not Valid !');
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
        var jsonchild = { ID: this.ID, ENTRYNO: this.EntryNo, CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo, BILLNO: this.BillNo,
            DEDUCTION: this.Deduction, AMOUNT: this.Amount,
            ENTRYTYPE: (this.EntryType == undefined) ? "" : this.EntryType,
            EMP_CODE: "", USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            CRPARENTENTRYNO: this.CRPARENTENTRYNO,
            NARRATION: this.ShortNarration, IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: (this.Item == undefined) ? "" : this.Item.split("|")[0], DEPTID: this.Department,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: (this.Item == undefined || this.Item == "") ? "" : this.Item.split("|")[2],
            DEPARTMENT: (this.DepartmentName == undefined) ? "" : this.DepartmentName,
            ACC_BANKDTLS_ID: this.ACC_BANKDTLS_ID,
            STATUS: this.STATUS,
            ISJOBREPORT: this.AccountName.split("|")[1],
            EMP_CODE_VALUE: "", EMP_CODE_TEXT: "",
            ITEM_DATAVALUE: (this.Item == undefined) ? "" : this.Item,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            ISOLDENTRY: "0",
            CMPID: this._loginService.getLogin()[0].CMPID,
            IS_GST: (this.GSTApplicable == "") ? "0" : this.GSTApplicable,
            ISTDSCALC: (this.chkIsTDS == true) ? "0" : "0",
            IS_TDS: (this.TDSApplicable == "") ? "N" : this.TDSApplicable,
            GSTRATE: (this.gstrate == "") ? "0" : this.gstrate,
        };
        this.loaderService.display(true);
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_TMP_IU_NG", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Accountlist = data.Table;
                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetTotal = data.Table1[0].NETTOTAL;
                _this.tdsledgercnt = data.Table2[0].TDSAPPLICABLE;
                _this.Resetchildrcrd();
                if (_this.tdsledgercnt >= "1") {
                    _this.disableresetbtn = false;
                    _this.disabletdsbtn = false;
                }
                else {
                    _this.disableresetbtn = true;
                    _this.disabletdsbtn = true;
                }
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    BankPaymentComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        //this.AccountName=undefined;
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.Item = undefined;
        ///this.Department="";
        //this.EntryType="";
        this.txtchild = "Add";
        this.BillNo = "";
        this.ACC_BANKDTLS_ID = "0";
        this.disable_BillNo = false;
        this.disable_EntryType = false;
        this.disable_cmdadd = false;
        this.GSTApplicable = "";
        this.TDSApplicable = "";
        this.gstrate = "0";
    };
    BankPaymentComponent.prototype.Editchildrecd = function (id) {
        if (this.CompChequeFlag != "1") {
            var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
            if (filterData.IS_NOT_EDIT_ABLE == "1") {
                alert("You cannot edit this record!");
                return false;
            }
            if (filterData.ISTDSCALC == "1") {
                alert("You cannot edit this record!");
                return false;
            }
            else {
                this.ID = filterData.ID;
                this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
                // this.ItemList = this.Allitemlist.filter((code: any) => code.ACCTCODE === this.AccountName.split("|")[0]);
                this.GetActName(this.AccountName);
                this.Item = filterData.ITEM_DATAVALUE;
                this.Amount = filterData.AMOUNT;
                this.Deduction = (filterData.DEDUCTION == null) ? "" : filterData.DEDUCTION;
                this.EntryType = filterData.ENTRYTYPE;
                this.BillNo = filterData.BILLNO;
                this.JobNo = filterData.JOBNO;
                this.ShortNarration = filterData.NARRATION;
                this.txtchild = "Update";
                this.ACC_BANKDTLS_ID = filterData.ACC_BANKDTLS_ID;
                this.ACCTNAME = filterData.ACCOUNT_NAME;
                this.Departmentlist = this.AllDepartmentlist;
                // this.Departmentlist= this.AllDepartmentlist.filter((code: any) => code.CODE === (this.JobNo.substr(0, 2)  + this.JobNo.substr(2, 3)  + this.JobNo.substr(6, 1)) )
                this.DepartmentName = filterData.DEPARTMENT;
                this.Department = filterData.DEPTID;
                this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
                this.TDSApplicable = filterData.IS_TDS;
                this.GSTApplicable = filterData.IS_GST;
                this.gstrate = filterData.GSTRATE;
            }
            if (id != "0" && this.EntryType == "AB1") {
                this.disableEntryType = true;
            }
        }
        else {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
            return false;
        }
    };
    BankPaymentComponent.prototype.deletechildrecd = function (id, brdtlsid, clnt, edtflag) {
        var _this = this;
        if (this.CompChequeFlag != "1") {
            if (edtflag == "1") {
                this._toasterService.toast("warning", "warning", "You cannot delete this record!");
            }
            else {
                if (confirm('Are you sure want to delete the record ?')) {
                    this.loaderService.display(true);
                    var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_BANKDTLS_ID: brdtlsid };
                    this._dataService.getData("Accounts/ACC_BRBPCRCPCE_TMP_DEL_NG", jsondelete)
                        .subscribe(function (data) {
                        if (data.Table1 != undefined) {
                            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                                _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUSTEXT);
                                _this.Accountlist = data.Table;
                                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                                _this.NetTotal = data.Table1[0].NETTOTAL;
                                _this.tdsledgercnt = data.Table2[0].TDSAPPLICABLE;
                                _this.loaderService.display(false);
                            }
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
        }
        else {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
            return false;
        }
    };
    BankPaymentComponent.prototype.Add_Main = function () {
        // if (this.CompChequeFlag!="1"){
        if (this.EntryDate == "") {
            this._toasterService.toast('warning', 'warning', 'Please Enter Entry Date !');
            return false;
        }
        if (this.ChqType == "" || this.ChqType == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select NOT OVER / PAY ORDER / DD / NEFT / RTGS ! ');
            return false;
        }
        if ((this.ChqType == 'NEFT') && (this.NetTotal >= "200000")) {
            this._toasterService.toast('warning', 'warning', 'NEFT Amount can be only between Rs.1 lakh to  1,99,999.99 , \n For Printing online Cheque !');
            return false;
        }
        /* commented on 21/09/2023 for not allowing update direct bank payment  */
        // if(this.ChqType!="" && this.EntryNo !=' '){
        //     var tot:number = parseFloat(this.TotalAmount);
        //     var ded:number = parseFloat(this.TotalDeduction);
        //     var newtot:number=(tot-ded);
        //     // this.NewnetAmt=(newtot).toString(2);
        //     if (newtot > (parseFloat(this.OldNetTotal)))   {
        //         this._toasterService.toast('warning','warning','Original Net Total =' + this.OldNetTotal + ' \nNew Net Total =' + this.NewnetAmt + ' \nBankPayment Net total should  be Less Than  or equal to Original BankPayment Net Total\n');
        //         return false;
        //     }
        // }
        // if (this.ChqType != "PO"  ) {
        //     if (this.ChequeNo == "") {
        //         var answer = window.confirm("ChequeNo is Blank - Please Check \n Click Yes to Accept and No To Retry");
        //         if (answer==false) {
        //             return false;
        //         }else {this.confirmsave="Y";}
        //     }
        // }
        if (this.ChqType == "Y") {
            this.NOTOVERFLAG = this.ChqType;
        }
        else {
            this.NOTOVERFLAG = "";
        }
        if (this.OurBank == "" || this.OurBank == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Our Bank !');
            return false;
        }
        if (this.BankRefNo == "" || this.BankRefNo == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please enter Bank Ref.No. !');
            return false;
        }
        if (parseFloat(this.TotalAmount) < parseFloat(this.TotalDeduction)) {
            this._toasterService.toast('warning', 'warning', 'Total Deduction cannot be greater than Total Amount !');
            return false;
        }
        if (parseFloat(this.TotalAmount) <= 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter Account Details !');
            return false;
        }
        if (this.ChqType != "PO") {
            if (this.ChequeNo == "") {
                var answer = window.confirm("ChequeNo is Blank - Please Check \n Click Yes to Accept and No To Retry");
                if (answer == false) {
                    return false;
                }
                else {
                    this.confirmsave = "Y";
                }
            }
        }
        if (this.EntryNo != " ") {
            this.validateEdit();
        }
        this.chequevalidate();
        //      }
        //  else{
        //      this._toasterService.toast("warning","warning" ,"You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !" );
        //      this.loaderService.display(false);
        //      return false;
        //  }
    };
    BankPaymentComponent.prototype.SaveUpdate = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.EntryNo,
            ENTRYDT: this.EntryDate,
            STATUS: this.STATUS,
            OURBANK: this.OurBank,
            OURBANKNM: "",
            CHEQUETYPE: this.ChqType,
            CHEQUENO: this.ChequeNo,
            CHEQUEDT: this.ChequeDate.formatted,
            BANK: this.BankName,
            NARRATION: this.Narration,
            ACTUALAMOUNT: this.NetTotal,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            NOTOVERFLAG: this.NOTOVERFLAG,
            ACTION: (this.EntryNo == " ") ? "INSERT" : "UPDATE",
            PAYEENAME: this.PAYEENAME,
            BANKREFNO: this.BankRefNo
        };
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_IU_NG", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
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
    BankPaymentComponent.prototype.Print = function (entryno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'BP' + '/' + entryno + '/', "CashBook BankPayment Print", toolbar);
    };
    BankPaymentComponent.prototype.ResetMain = function () {
        this.Resetchildrcrd();
        this.EntryNo = " ";
        this.EntryDate = '';
        this.TotalAmount = '';
        this.TotalDeduction = '';
        this.NetTotal = '';
        this.text = "Submit";
        this.Accountlist = "";
        this.ChequeNo = '';
        this.ChequeDate = '';
        //this.OurBank = "";
        this.BankName = '';
        this.Narration = '';
        this.BankRefNo = '';
        this.TDSApplicable = "";
        this.GSTApplicable = "";
        this.chktdslbl = "";
        this.chkIsTDS = false;
        this._router.navigate(["/accounts/Voucher/BankPaymnt/Add/ "]);
    };
    BankPaymentComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonview = { EntryNo: this.EntryNo,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this.loaderService.display(true);
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_View_NG", jsonview)
            .subscribe(function (data) {
            _this.EntryNo = data.Table[0].ENTRYNO;
            _this.EntryDate = (data.Table[0].ENTRYDT != "") ? (data.Table[0].ENTRYDT) : "";
            _this.Narration = data.Table[0].NARRATION;
            _this.ChqType = data.Table[0].CHEQUETYPE;
            _this.ChequeNo = data.Table[0].CHEQUENO;
            _this.ChequeDate = (data.Table[0].CHEQUEDT != "") ? (data.Table[0].CHEQUEDT) : "";
            _this.OurBank = data.Table[0].OURBANK;
            _this.OurBankName = "";
            _this.BankName = data.Table[0].BANK;
            _this.NOTOVERFLAG = data.Table[0].NOTOVERFLAG;
            _this.CompChequeFlag = data.Table[0].COMPCHEQUE;
            _this.Accountlist = data.Table1;
            _this.TotalAmount = data.Table2[0].TOTAMOUNT;
            _this.TotalDeduction = data.Table2[0].TOTDEDUCTION;
            _this.NetTotal = data.Table[0].ACTUALAMOUNT;
            _this.OldNetTotal = data.Table[0].ACTUALAMOUNT;
            _this.CompChequeFlag = data.Table[0].COMPCHEQUE;
            _this.BankRefNo = data.Table[0].BANKREFNO;
            _this.tdsledgercnt = data.Table3[0].TDSAPPLICABLE;
            if (_this.tdsledgercnt >= "1") {
                _this.disableresetbtn = false;
                // this.disabletdsbtn=false;
            }
            else {
                _this.disableresetbtn = true;
                _this.disabletdsbtn = true;
            }
            if (_this.CompChequeFlag == "1") {
                _this.ChequeNo = data.Table[0].CHEQUENO;
                if (_this.ChqType == "Y") {
                    _this.disable_chequetype = false;
                }
                else {
                    _this.disable_chequetype = false;
                }
                _this.disable_chequeno = true;
                _this._toasterService.toast("warning", "warning", "You cant update this entry no.Because it is Computerised Cheque! !");
                _this.fnchequeType();
                _this.loaderService.display(false);
            }
            else {
                _this.ChequeNo = data.Table[0].CHEQUENO;
            }
            _this.loaderService.display(false);
            if (_this.CompChequeFlag == "1" && _this.NOTOVERFLAG != "Y") {
                _this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
                _this.loaderService.display(false);
            }
            else if (_this.CompChequeFlag == "1" && _this.NOTOVERFLAG == "Y") {
                _this._toasterService.toast("warning", "warning", "You can edit but net total should be less than or equal to BankPayment Amount=" + _this.NetTotal);
                _this.loaderService.display(false);
            }
        });
    };
    BankPaymentComponent.prototype.Reset = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.EntryNo = " ";
            //this.EntryDate ='';
            this.Narration = '';
            this.ChequeNo = '';
            this.ChequeDate = '';
            this.BankName = '';
            // this.OurBank='';
            this.TotalAmount = '';
            this.TotalDeduction = '';
            this.NetTotal = '';
            this.text = "Submit";
            this.ChqType = "CHQ";
            this.BankRefNo = '';
            this.Accountlist = [];
            this.Department = '0';
            this.AccountName = undefined;
            this.EntryType = '0';
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET_NG", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this.loaderService.display(false);
                _this._router.navigate(['/accounts/Voucher/BankPaymnt/Add/ ']);
                _this.OurBank = _this.dfltourbank;
            });
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    BankPaymentComponent.prototype.ValidateJobNo = function (jbno) {
        if (this.JobNo.length > 0) {
            if (this._loginService.getLogin()[0].CMPCODE == "20") {
                if (this.JobNo.length > 0 && this.JobNo.length != 10) {
                    this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
                    return false;
                }
            }
            else {
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
            }
        }
    };
    BankPaymentComponent.prototype.fnChqValidate = function () {
        var _this = this;
        if (this.ChequeNo.length < 6) {
            alert("Enter Valid Cheque No. ");
            return false;
        }
        else if (this.OurBank == "0" || this.OurBank == "") {
            alert("Please Select Ourbank. ");
            return false;
        }
        else {
            this.showModal_ChqList = true;
            this.loaderService.display(true);
            this.GetBankName();
            var jsonchqdtl = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                CHQNO: this.ChequeNo,
                STATUS: this.STATUS,
                OURBANK: this.OurBank,
                ENTRYNO: this.EntryNo
            };
            this._dataService.getData("Accounts/ACC_CASHBOOK_VALIDATECHQ", jsonchqdtl)
                .subscribe(function (data) {
                _this.ListChq = data.Table;
                _this.loaderService.display(false);
            });
        }
    };
    BankPaymentComponent.prototype.chequevalidate = function () {
        var _this = this;
        this.Msg = "";
        var jsonchqdtl1 = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CHQNO: this.ChequeNo,
            STATUS: this.STATUS,
            OURBANK: this.OurBank,
            ENTRYNO: this.EntryNo
        };
        this._dataService.getData("Accounts/ACC_CASHBOOK_VALIDATECHQ", jsonchqdtl1)
            .subscribe(function (data) {
            if (data.Table1[0].ALLENTRY == "") {
                var answer1 = window.confirm("Click  Ok to enter with Cheque No." + _this.ChequeNo);
            }
            else {
                var answer1 = window.confirm("Cheque No." + _this.ChequeNo + " Already Entered For Entry No." + data.Table1[0].ALLENTRY + "Are you sure, Want to add same Cheque No.");
            }
            if (answer1 == false) {
                _this.Conf = "N";
            }
            else {
                _this.Conf = "Y";
                _this.SaveUpdate();
            }
        });
    };
    //     if (confirm("Cheque No." + this.ChequeNo + " Already Entered For Entry No." +  data.Table1[0].ALLENTRY + "Are you sure, Want to add same Cheque No."))
    //     {
    //     this.Conf="Y" ;
    //     return false;
    //    }
    //    else
    //    {
    //       this.Conf="N" ;
    //       return false;
    //       }
    //this.Msg= "Cheque No." + this.ChequeNo + " Already Entered For Entry No." + this.strmsg  + "Are you sure, Want to add same Cheque No."
    //  for (var i = 0, len = data.Table.length; i < len; i++) {
    //      this.strmsg +=  data.Table[i].entryno + "," ;
    //  }
    //  this.Msg= "Cheque No." + this.ChequeNo + " Already Entered For Entry No." + this.strmsg  + "Are you sure, Want to add same Cheque No."
    //   if (confirm(this.Msg))
    //   {
    //     this.Conf="Y" ;
    //     return false;
    //  }
    //  else
    //  {
    //      this.Conf="N" ;
    //      return false;
    //  }
    BankPaymentComponent.prototype.close = function () {
        this.showModal_ChqList = false;
    };
    BankPaymentComponent.prototype.closeBill = function () {
        this.showModal_ListBill = false;
    };
    BankPaymentComponent.prototype.fnBillNoChk = function () {
        var _this = this;
        if (this.BillNo.length != 0) {
            if (this.EntryType == "PE" || this.EntryType == "AB") {
                if (this.AccountName.split("|")[0] == "0") {
                    this._toasterService.toast("warning", "warning", 'Please select Acocunt Name.!');
                    return false;
                }
                if (this._loginService.getLogin()[0].CMPCODE == "20" && (this._loginService.getLogin()[0].CITYCODE1 == "201" || this._loginService.getLogin()[0].CITYCODE1 == "202")) {
                    if (this.BillNo.length != 10) {
                        this._toasterService.toast("warning", "warning", 'Bill No. should be 10 Digit.!');
                        return false;
                    }
                }
                else if (this.BillNo.length != 15) {
                    this._toasterService.toast("warning", "warning", 'Bill No. should be 15 Digit.!');
                    return false;
                }
                //this.disable_BillNo=true;
                this.disable_EntryType = true;
                // this.disable_cmdadd=true;
                // this.disable_cmdcancel=true;
            }
        }
        var jsonbill = {
            BILLNO: this.BillNo,
            ACC_CODE: this.AccountName.split("|")[0],
            ENTRYTYPE: this.EntryType,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        var str = '';
        this._dataService.getData("Accounts/ACC_CASHBOOK_BILLNO_VALIDATION", jsonbill)
            .subscribe(function (data) {
            if (data.Table[0].STATUS.split("#")[0] == "104") {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUS.split("#")[1]);
                _this.BillNo = "";
                _this.Amount = "";
                _this.disable_cmdadd = false;
                return false;
            }
            else if (data.Table[0].STATUS.split("#")[0] == "100") {
                if (_this.EntryType == "PE") {
                    _this.Amount = data.Table[0].STATUS.split("#")[2];
                    _this.Deduction = data.Table[0].STATUS.split("#")[3];
                    _this.disable_BillNo = true;
                    _this.disable_EntryType = true;
                    _this.disable_cmdadd = false;
                    return false;
                }
            }
        });
    };
    BankPaymentComponent.prototype.fnchequeType = function () {
        if (this.ChqType == "CHQ") {
            this.chequelabel = "Normal cheque print";
        }
        if (this.ChqType == "Y") {
            this.chequelabel = "Cheque will print but amt is Not Over !";
        }
        if (this.ChqType == "PO") {
            this.chequelabel = "Cheque print with Payee Name : Yourself - PO - PayeeName!";
        }
        if (this.ChqType == "DD") {
            this.chequelabel = "Cheque print with Payee Name : Yourself - DD - PayeeName!";
        }
        if (this.ChqType == "NEFT") {
            this.chequelabel = "Cheque Print Only when amt in between 1 Lakh and 1,99,999.99!";
        }
        if (this.ChqType == "RTGS") {
            this.chequelabel = "Cheque Print Only when amt is Greater or Equal to 2 Lakh !";
        }
    };
    BankPaymentComponent.prototype.validateEdit = function () {
        if (this.CompChequeFlag != '1' && this.NOTOVERFLAG != "Y" && this.ChqType == "PO" && this.EntryNo != " ") {
            alert("You can not Update this Bank Payment because this is Pay Order. !!");
            return false;
        }
        else if (this.CompChequeFlag == '1' && this.NOTOVERFLAG != "Y" && this.ChqType == "PO") {
            alert("You can not Update this Bank Payment \n Because this is computerised Pay Order. !!");
            return false;
        }
        else if (this.CompChequeFlag == '1' && this.NOTOVERFLAG != "Y" && this.ChqType != "PO") {
            alert("You can not Update this Bank Payment \n Because this is generated through Computerised Cheque Print !!");
            return false;
        }
        else if (this.CompChequeFlag == '1' && this.NOTOVERFLAG == "Y" && this.ChqType != "PO") {
            return true;
        }
    };
    BankPaymentComponent.prototype.EntryTypeChg = function (entrytypeval) {
        if (entrytypeval == "AD") {
            this.Deduction = "";
            this.disable_deduction = true;
        }
        else {
            this.disable_deduction = false;
        }
        if (entrytypeval == "PE") {
            this.BillNo = "";
            this.Amount = "";
        }
        if (entrytypeval == "AB") {
            this.BillNo = "";
        }
    };
    BankPaymentComponent.prototype.listbillpopup = function (entrytypeval) {
        var _this = this;
        if (entrytypeval == "AD") {
            this.Deduction = "";
            this.disable_deduction = true;
        }
        else {
            this.disable_deduction = false;
        }
        if (entrytypeval == "PE") {
            this.BillNo = "";
            this.Amount = "";
        }
        if (entrytypeval == "AB") {
            this.BillNo = "";
        }
        if (this.EntryType == "AB1") {
            if (this.AccountName == "" || this.AccountName == undefined) {
                this._toasterService.toast("warning", "warning", "Select Account Name first");
                this.EntryType = "0";
                return false;
            }
            else {
                this.showModal_ListBill = true;
                this.loaderService.display(true);
                var jsoninvdtl = {
                    SUPPLIER: this.AccountName.split("|")[0],
                    FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                    FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
                    CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                    CITYCODE: this._loginService.getLogin()[0].CITYCODE
                };
                this._dataService.getData("Accounts/ACC_PAYMENT_POPULATE_SUPPLIERBILL", jsoninvdtl)
                    .subscribe(function (data) {
                    if (data.Table.length > "0") {
                        _this.ListBill = data.Table;
                        console.log(_this.ListBill);
                        _this.client = data.Table1[0].SUPPLIER;
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", "No record found");
                        _this.client = data.Table1[0].SUPPLIER;
                        _this.loaderService.display(false);
                    }
                });
            }
            this.loaderService.display(false);
        }
    };
    BankPaymentComponent.prototype.getCheckboxValues = function (event, invno, jobno, amt, acctname) {
        var _this = this;
        for (var i = 0; i < this.ListBill.length; i++) {
            if (this.ListBill[i].INV_NO === invno && this.ListBill[i].INV_JOBNO === jobno) {
                if (event == false) {
                    this.ListBill[i]["NARRATION"] = "";
                }
                this.ListBill[i]["Disabled"] = false;
            }
        }
        this.sel_jobno = jobno;
        this.sel_inv_no = invno;
        var index = this.newArray.findIndex(function (x) { return x.BILLNO == invno; });
        if (event) {
            var obj = {
                BILLNO: invno,
                JOBNO: jobno,
                AMOUNT: amt,
                ///ENTRYTYPE:"AB1",
                ACCOUNT_NAME: acctname,
                ISJOBREPORT: this.AccountName.split("|")[1]
            };
            //this.STRTXT=this.STRTXT + invno +  "|" + jobno +  "|" +  amt +  "|" + ded +  "|" + narration  +  "|" + acctname + "|" + this.AccountName.split("|")[1] +";"
            this.newArray.push(obj);
        }
        else {
            var index = this.newArray.findIndex(function (x) { return x.BILLNO == _this.sel_inv_no; });
            this.newArray.splice(index, 1);
        }
    };
    BankPaymentComponent.prototype.popup_listbill = function () {
        var _this = this;
        if (this.newArray == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Bill!');
            return false;
        }
        var str = '';
        for (var i = 0, len = this.newArray.length; i < len; i++) {
            str += this.newArray[i].BILLNO + ' |' + this.newArray[i].JOBNO + '|' + this.newArray[i].AMOUNT + '|' + this.newArray[i].ACCOUNT_NAME + '|' + this.newArray[i].ISJOBREPORT + ";";
        }
        this.showModal_ListBill = false;
        var jsonbilldtl = {
            CLIENT: this.AccountName.split("|")[0],
            ITEMCODE: (this.Item == undefined) ? "" : this.Item.split("|")[0],
            STATUS: this.STATUS,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            VGUID: this._loginService.getLogin()[0].GUID,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            STRINGTEXT: str
        };
        this._dataService.Common("Accounts/ACC_BR_BLHELP_TMP_IU", jsonbilldtl)
            .subscribe(function (data) {
            _this.Accountlist = data.Table;
            _this.TotalAmount = data.Table1[0].TOTAMOUNT;
            _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
            _this.NetTotal = data.Table1[0].NETTOTAL;
            _this.loaderService.display(false);
        });
        this.newArray = [];
        this.close();
    };
    BankPaymentComponent.prototype.TextareaValueChange = function (ev) {
        this.Narration = ev.target.value;
    };
    BankPaymentComponent.prototype.OpenTdsModal = function () {
        var _this = this;
        if (this.Accountlist == "" || this.Accountlist == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Add Account Details !');
            return false;
        }
        var filteractcode = this.Accountlist.filter(function (filter) { return filter.PUR_TDS == "Y"; });
        console.log(filteractcode);
        this.showModal_TDS = true;
        this.str = "";
        this.loaderService.display(true);
        var jsondata = {
            // SUPPCODE: filteractcode[0].CLIENT,
            ENTRYDT: this.EntryDate,
            VGUID: this._loginService.getLogin()[0].GUID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            STATUS: "BP"
        };
        this._dataService.getData("Accounts/ACC_BP_TDSCAL", jsondata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.TDSList = data.Table;
                // this.tottdsamt=data.Table2[0].TOTTDSAMT;
                _this.totpiamt = data.Table1[0].TOTPIAMT;
                _this.TotalTDSList = data.Table2;
                _this.sectioncnt = data.Table3[0].CNT;
                _this.retsupcode = 'S00001'; //data.Table5[0].SUP_CODE;
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
                    _this.seltaxableamt = data.Table1[0].TOTPIAMT;
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
    BankPaymentComponent.prototype.closeTdsModal = function () {
        this.str = "";
        this.newArray = [];
        this.showModal_TDS = false;
    };
    BankPaymentComponent.prototype.getCheckedTDSData = function (event, tdsaccid, rate, TDSAmount, puramt, icode, narr, ratetype, ldcrate, accid, offlag) {
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
    BankPaymentComponent.prototype.AddtdsDetails = function () {
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
        // console.log(this.str);
        var jsontdsdtl = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            STATUS: this.STATUS,
            VGUID: this._loginService.getLogin()[0].GUID,
            // SUPCODE:this.retsupcode,//this.suppliername.split("|")[0],
            STR: this.str
        };
        this._dataService.Common("Accounts/ACC_BPDIIDE_TDS_TMP_IU_NG", jsontdsdtl)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.Accountlist = data.Table;
                _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetTotal = data.Table1[0].NETTOTAL;
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
    BankPaymentComponent.prototype.ResetTDS = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset TDS data?')) {
            var jsonmaster = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_BPDIIDE_TDS_RESET_NG", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.Accountlist = data.Table;
                    _this.TotalAmount = data.Table1[0].TOTAMOUNT;
                    _this.TotalDeduction = data.Table1[0].TOTDEDUCTION;
                    _this.NetTotal = data.Table1[0].NETTOTAL;
                    _this.Resetchildrcrd();
                    _this.str = "";
                    _this.newArray = [];
                    _this.disabletdsbtn = false;
                    _this.disablesupplier = false;
                    _this.disablesupplieraddr = false;
                    _this.disablechildaddbtn = false;
                    _this.disablechildresetbtn = false;
                }
            });
        }
    };
    BankPaymentComponent.prototype.EnableDisableDtn = function (tds) {
        if (tds == "1" && this.EntryNo == ' ') {
            this.chktdslbl = "TDS Applicable";
            this.chkIsTDS = true;
            //   this.disableresetbtn=false;
            //   this.disabletdsbtn=false;
            // this.disablechktds=true;
        }
        else if (tds == "1" && this.EntryNo != ' ') {
            this.chktdslbl = "TDS Applicable";
            this.chkIsTDS = true;
            //   this.disableresetbtn=false;
            //   this.disabletdsbtn=true;
            // this.disablechktds=true;
        }
        if (tds == "0") {
            this.chktdslbl = "Is Tds Applicable";
            this.disabletdsbtn = true;
            this.chkIsTDS = false;
            this.disableresetbtn = true;
        }
    };
    BankPaymentComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    BankPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./bankpayment-IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.html")
            // ,
            // styles:[` table, tr, td, th{
            //           border: none;
            //        }`]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], BankPaymentComponent);
    return BankPaymentComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/BankPayment/bankpayment.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankPayment/bankpayment.module.ts ***!
  \*********************************************************************/
/*! exports provided: BankPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentModule", function() { return BankPaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _bankpayment_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bankpayment.routing */ "./src/app/accounts/Vouchers/BankPayment/bankpayment.routing.ts");
/* harmony import */ var _bankpayment_IU_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bankpayment-IU.component */ "./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _BankRecpt_bankrecpt_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BankRecpt/bankrecpt.module */ "./src/app/accounts/Vouchers/BankRecpt/bankrecpt.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SharedModule } from '../../../shared/shared.module';


;

var BankPaymentModule = /** @class */ (function () {
    function BankPaymentModule() {
    }
    BankPaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_bankpayment_routing__WEBPACK_IMPORTED_MODULE_6__["BankPaymentRoutingModule"], _BankRecpt_bankrecpt_module__WEBPACK_IMPORTED_MODULE_9__["BankReceiptModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _bankpayment_IU_component__WEBPACK_IMPORTED_MODULE_7__["BankPaymentComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], BankPaymentModule);
    return BankPaymentModule;
}());



/***/ }),

/***/ "./src/app/accounts/Vouchers/BankPayment/bankpayment.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Vouchers/BankPayment/bankpayment.routing.ts ***!
  \**********************************************************************/
/*! exports provided: BankPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentRoutingModule", function() { return BankPaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bankpayment_IU_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bankpayment-IU.component */ "./src/app/accounts/Vouchers/BankPayment/bankpayment-IU.component.ts");
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
            title: ' BP'
        },
        children: [
            { path: 'Add/:EntryNo', component: _bankpayment_IU_component__WEBPACK_IMPORTED_MODULE_2__["BankPaymentComponent"], data: { title: 'Add' } },
        ]
    }
];
var BankPaymentRoutingModule = /** @class */ (function () {
    function BankPaymentRoutingModule() {
    }
    BankPaymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BankPaymentRoutingModule);
    return BankPaymentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=BankPayment-bankpayment-module.js.map