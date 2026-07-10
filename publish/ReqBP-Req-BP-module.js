(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReqBP-Req-BP-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-sm-12\">\n                            <strong>{{Header| uppercase}}</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\n        </div>\n        <div class=\"col-sm-12 col-md-8 col-lg-8 \">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b> General Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Entry No</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td> <input [(ngModel)]=\"EntryNo\" type=\"text\" disabled=\"disabled\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n\n                    <td><span class=\"col-form-span-label\"><b>Entry Date</b> </span><span\n                            class=\"col-form-span-error\">*</span></td>\n                    <td>\n                        <my-date-picker name=\"EntryDate\"  (dateChanged)=getentrydate($event) [options]=\"myDatePickerOptionsInv\"\n                            [selDate]=\"EntryDate\"></my-date-picker>\n                    </td>\n                </tr>\n                <tr>\n\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td colspan=\"3\"> <input [(ngModel)]=\"Narration\" type=\"text\" class=\"form-control width700\"\n                            [maxlength]=\"250\"> </td>\n                </tr>\n\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b>Cheque Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Cheque Type</b> </span></td>\n                    <td>\n                        <select class=\"form-control width200\" [(ngModel)]=\"ChequeType\" (change)=\"chequeEvent($event.target.value)\">\n                            <option value=\"0\">Please select</option>\n                            <option selected=\"selected\" value=\"CHQ\">CHEQUE</option>\n                            <option value=\"Y\">NOT OVER</option>\n                            <option value=\"PO\">PAY ORDER</option>\n                            <option value=\"DD\">DEMAND DRAFT</option>\n                            <option value=\"NEFT\">NEFT</option>\n                            <option value=\"RTGS\">RTGS</option>\n                        </select>\n                    </td>\n                    <td colspan=\"2\">\n                        <span class=\"col-form-span-label\" style=\"color: #d32e28;\"><b>{{labelbind}}</b></span>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Cheque No.</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td>\n                        <input [(ngModel)]=\"ChequeNo\" [OnlyNumber]=\"true\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"7\">\n                    </td>\n                    <td><span class=\"col-form-span-label\"><b>CHQ Pay By dt</b> </span></td>\n                    <td>\n                        <my-date-picker name=\"ChequeDate\" [options]=\"myDatePickerOptionsInv\" [selDate]=\"ChequeDate\" (dateChanged)=getchqdate($event)>\n                        </my-date-picker>\n                    </td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Our bank</b> </span></td>\n                    <td>\n                        <select class=\"form-control width250\" [(ngModel)]=\"OurBank\" (change)=\"GetOurBankName($event)\">\n                            <option value=\"0\">Please select</option>\n                            <option *ngFor=\"let d of OurBankList\" value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\n\n                        </select>\n                    </td>\n\n                    <td><span class=\"col-form-span-label\"><b>Bank Name</b> </span></td>\n                    <td> <input [(ngModel)]=\"BankName\" type=\"text\" class=\"form-control width150\" maxlength=\"40\"> </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Payee Name</b> </span></td>\n                    <td colspan=\"3\"> <input [(ngModel)]=\"PayeeName\" type=\"text\" class=\"form-control width700\"\n                            maxlength=\"150\"> </td>\n\n                </tr>\n                <tr>\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\n                        <b>Accounts Details</b>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\n                    <td colspan=\"3\">\n                        <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\n                            [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \"\n                            placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\n                    <td colspan=\"3\">\n                        <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\n                            class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> TDS Applicable</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td style=\" display: flex; \">\n                        <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                            <select class=\"form-control width150\"  [(ngModel)]=\"TDSApplicable\"   >\n                            <option value=\"\">--Please select--</option>\n                            <option value=\"Y\">Y</option>\n                            <option value=\"N\">N</option>\n                           </select>\n\n                </td>\n                <td  class=\"col-form-span-heading\" colspan=\"2\">\n\n                    <div style=\"display: flex;float: left;\" >\n                        <span class=\"col-form-span-label\" style=\"color: crimson;\"><b>{{chktdslbl}}</b> </span>\n                        <span class=\"col-form-span-label\"> <input type=\"checkbox\"\n                              [(ngModel)]=\"chkIsTDS\"  [disabled]='disablecheckbox'\n                                /> </span>\n                    </div>\n                </td>\n\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>GST Applicable</b> </span></td>\n                    <td style=\" display: flex; \">\n                        <!-- <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"listbillpopup()\" (change)=\"EntryTypeChg($event.target.value)\" > -->\n                            <select class=\"form-control width150\"  [(ngModel)]=\"GSTApplicable\"   >\n                                <option  value=\"\" >-- Please Select --</option>\n                                <option value=\"1\">Y</option>\n                                <option value=\"0\" >N</option>\n                                <option value=\"2\" >RCM</option>\n                           </select>\n                    </td>\n                    <!-- <td><span class=\"col-form-span-label\"><b>GST Rate</b> </span></td>\n                    <td style=\" display: flex; \">\n                        \n                            <select class=\"form-control width150\"  [(ngModel)]=\"gstrate\"   >\n                                <option value=\"0\">--Please select--</option>\n                                <option *ngFor=\"let d of gstratelist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\n                           </select>\n                    </td> -->\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Entry Type</b> </span><span class=\"col-form-span-error\">*</span></td>\n                    <td>\n                        <ng-select [items]=\"entrytable\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\"\n                            [(ngModel)]=\"EntryType\" class=\"custom \" placeholder=\"--Select--\">\n                        </ng-select>\n                    </td>\n                    <td><span class=\"col-form-span-label\"><b>Department</b> </span></td>\n                    <td>\n                        <select class=\"form-control width150\" [(ngModel)]=\"Department\"\n                            (change)=\"GetDepartmentName($event)\">\n                            <option value=\"0\">Please select</option>\n                            <option *ngFor=\"let d of Departmentlist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\n\n                        </select>\n                    </td>\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Bill No</b> </span></td>\n                    <td> <input [(ngModel)]=\"BillNo\" type=\"text\" [OnlyNumber]=\"true\" (change)=\"fnBillNoChk()\" class=\"form-control width150\"\n                            maxlength=\"15\"> </td>\n\n                    <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td> <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\"\n                            (blur)=\"ValidateJobNo()\" class=\"form-control width150\" maxlength=\"15\">\n                    </td>\n\n\n\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span\n                            class=\"col-form-span-error\">*</span>\n                    </td>\n                    <td> <input [(ngModel)]=\"Amount\" type=\"text\" [OnlyNumber]=\"true\"\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\n                    <td> <input [(ngModel)]=\"Deduction\" [OnlyNumber]=\"true\" type=\"text\"\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n\n                </tr>\n\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\n                    <td colspan=\"3\">\n                        <input [(ngModel)]=\"ShortNarration\" type=\"text\" class=\"form-control width500\" maxlength=\"200\">\n                    </td>\n                </tr>\n\n                <tr>\n                    <td colspan=\"4\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>\n                                {{txtchild}}</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]='disabletdsbtn'> <span class=\"col-form-span-label\"\n                                    (click)=\"!disabletdsbtn && OpenTdsModal();\"><i class=\"fa fa-dot-circle-o\"></i> Cal TDS</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"  [disabled]='disableresetbtn'> <span class=\"col-form-span-label\"\n                                     (click)=\"!disableresetbtn && ResetTDS()\"><i class=\"fa fa-ban\"></i> Reset TDS</span></button>\n                    </td>\n                </tr>\n\n                <tr>\n\n                    <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\n                    <td> <input [(ngModel)]=\"NetTotal\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n\n                    <td colspan=\"2\"></td>\n                </tr>\n\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\n                    <td> <input [(ngModel)]=\"TotalAmount\" disabled=\"disabled\" type=\"text\" class=\"form-control width150\"\n                            maxlength=\"40\"> </td>\n\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\n                    <td> <input [(ngModel)]=\"TotalDeduction\" disabled=\"disabled\" type=\"text\"\n                            class=\"form-control width150\" maxlength=\"40\"> </td>\n\n                </tr>\n                <tr>\n                    <td colspan=\"4\">\n                        <div class=\"row xyscroll\" style=\"width:800px;\">\n                            <div class=\"col-12\">\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\">\n                                <thead>\n                                    <tr class=\"bakgrdliteBlue\">\n                                        <th class=\"col-form-span-label\"></th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Entry Type</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">TDS</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">GST</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Department</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Bill No</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"Accountlist.length>0\">\n                                    <tr *ngFor=\"let obj of Accountlist\">\n                                        <td class=\"centerlabel\">\n                                            <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\"></i>\n                                            &nbsp;\n                                            <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.ACC_BANKDTLS_ID)\"></i>\n                                        </td>\n                                        <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\"> </span>\n                                        </td>\n                                        <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.ET}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.IS_TDS}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.GST}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\n                                        <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\" class=\"centerlabel\">\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> {{text}}</span></button>\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                                (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                    </td>\n                </tr>\n\n\n            </table>\n        </div>\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\n        </div>\n    </div>\n\n</div>\n<div class=\"modal\" [style.display]=\"showModal_TDS ? 'block' : 'none' \"  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\" style=\"width: 700px;\">\n        <div class=\"modal-content\">\n            <div class=\"card-header formheading\">\n                <!-- <h5 class=\"modal-title\">TDS Details</h5> -->\n                <strong>TDS Details</strong>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col\" style=\"height:400px;overflow-y: auto; \">\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <tr>\n                                <td colspan=\"6\">\n                                    <!-- <input type=\"text\" [(ngModel)]=\"term\"\n                                        style=\"float: right;width: 200px;font-family: verdana;font-size:11px;padding: 1px;\"\n                                        placeholder=\"Search by Job Number\"> -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <thead style=\"text-align: center;\">\n                                        <tr>\n                                            <th class=\"col-form-span-label\"></th>\n                                            <th class=\"col-form-span-label\">Acct Name.</th>\n                                            <th class=\"col-form-span-label\">Section</th>\n                                            <th class=\"col-form-span-label\">LDC Limit</th>\n                                            <th class=\"col-form-span-label\">Utilized Amt</th>\n                                            <th class=\"col-form-span-label\">LDC Rate %</th>\n                                            <th class=\"col-form-span-label\">Base Rate %</th>\n                                            <th class=\"col-form-span-label\">BP Amt</th>\n                                            <th class=\"col-form-span-label\">TDS Amount</th>\n                                            <th class=\"col-form-span-label\">Remarks</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                           <tr *ngFor=\"let obj of TDSList \">\n                                            <td class=\"col-form-span-label\">\n                                                <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\" [disabled]=\"obj.Disabled\"\n                                                     (ngModelChange)=\"getCheckedTDSData($event,obj.TDSACCTID,obj.RATE,obj.TDSAMOUNT,obj.AMOUNT,obj.ITEMCODE,obj.NARRATION,obj.RATETYPE,obj.LDCRATE,obj.ACCTID,obj.OFFLAG)\">\n                                                &nbsp;\n                                            </td>\n                                            <td class=\"col-form-span-label\">{{obj.ACCTNAME}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.SECTIONNAME}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.UTIAMT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.LDCRATE}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.RATE}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.TDSAMOUNT}}</td>\n                                            <td class=\"col-form-span-label\">{{obj.NARRATION}}</td>\n\n\n                                        </tr>\n\n\n                        </tbody>\n                    </td>\n                </tr>\n                        </table>\n                         <table class=\"table table-bordered table-sm-new bgwhite\">\n                            <td colspan=\"9\" align=\"center\">\n                                <tr >\n                                    <td colspan=\"5\"><span class=\"col-form-span-label\">Total BP Amount :  </span>\n                                        <span class=\"col-form-span-label\"><b>{{totpiamt}}</b> </span>\n                                    </td>\n                                    <td align=\"right\" colspan=\"4\"><span class=\"col-form-span-label\">Selected Amount  :  </span>\n                                        <span class=\"col-form-span-label\"><b>{{seltaxableamt}}</b> </span>\n                                    </td>\n                                    <td>\n                                        <thead style=\"text-align: center;\">\n                                            <tr>\n                                              <th class=\"col-form-span-label\">Section</th>\n                                              <th class=\"col-form-span-label\">Total Tds Amount</th>\n                                             </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of TotalTDSList \">\n                                             <td class=\"col-form-span-label\"><b>{{obj.SECTIONNAME}}</b></td>\n                                             <td class=\"col-form-span-label\"><b>{{obj.TOTTDSAMOUNT}}</b></td>\n                                         </tr>\n                                         </tbody>\n                                    </td>\n                                </tr>\n\n                            </td>\n                         </table>\n                    </div>\n                </div>\n                <div class=\"card-header formheading\" style=\"height:25px\" >\n                    <button class=\"btn btn-sm btn-danger\" style=\"float: right;\" type=\"reset\"> <span class=\"col-form-span-label\"\n                        (click)=\"closeTdsModal()\"><i class=\"fa fa-ban\"></i>\n                        Close</span></button>\n                    <button class=\"btn btn-sm btn-success\" style=\"float: right;\" type=\"submit\" (click)=\"AddtdsDetails()\"> <span\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Add</span></button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <strong>COMPUTERISED CHEQUE PRINTING AUTHORIZATION</strong>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n        <div class=\"col-12 col-md-10 col-lg-10\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">        \n                <thead>           \n                    <tr>\n                        <td colspan=\"10\">\n                            <div class=\"input-group input-group-rounded\"  style=\"float: right;width: 200px;font-family: verdana;font-size:11px;padding: 1px;\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" style=\"padding: 0px;\"><i class=\"fa fa-search\"></i></span>\n                                </div>\n                                <input class=\"form-control\" type=\"search\" [(ngModel)]=\"searchString\" autocomplete=\"off\"\n                                    placeholder=\"Search\">\n                            </div>\n                        </td>\n                    </tr>\n                    <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\n                        <th class=\"col-form-span-label\">  <input type=\"checkbox\" [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp;  </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'ENTRYNO'\"\n                            (click)=\"setOrder('ENTRYNO')\">\n                            EntryNo <span [hidden]=\"reverse\">▼</span>\n                            <span [hidden]=\"!reverse\">▲</span>\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'CREATEDBY'\"\n                            (click)=\"setOrder('CREATEDBY')\">\n                            CreatedBy <span [hidden]=\"reverse\">▼</span>\n                            <span [hidden]=\"!reverse\">▲</span>\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'ENTRYDT1'\"\n                            (click)=\"setOrder('ENTRYDT1')\">\n                            Entry Date <span [hidden]=\"reverse\">▼</span>\n                            <span [hidden]=\"!reverse\">▲</span>\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'CHEQUEDT1'\"\n                            (click)=\"setOrder('CHEQUEDT1')\">\n                            PayBY Date<span [hidden]=\"reverse\">▼</span>\n                            <span [hidden]=\"!reverse\">▲</span>\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'PAYEENAME'\"\n                            (click)=\"setOrder('PAYEENAME')\">\n                            Payee Name <span [hidden]=\"reverse\">▼</span>\n                            <span [hidden]=\"!reverse\">▲</span>\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\" [class.active]=\"order === 'AMOUNT'\"\n                            (click)=\"setOrder('AMOUNT')\">\n                            Amount <span [hidden]=\"reverse\">▼</span>\n                            <span [hidden]=\"!reverse\">▲</span>\n                        </th>               \n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\">\n                            AuthorisedBy\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\">\n                            AuthorisationDate\n                        </th>\n                        <th class=\"col-form-span-label\" style=\"  background-color: #004980; color: white;\">\n                            TYPE\n                        </th>\n                    </tr>\n                </thead>\n                <tbody class=\"bgwhite\">\n                    <tr\n                        *ngFor=\"let obj of DataList | ReqBPFilter: searchString| orderBy: order:reverse:'case-insensitive'\" >\n                        <td class=\"col-form-span-label\"><input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"   [disabled]=\"obj.CHKPRINTAUTHORITY=='1'\" \n                            (ngModelChange)=\"getCheckboxValues($event,obj.ENTRYNO,obj.CHKPRINTAUTHORITY,obj.AUTHORISATIONDATE)\"> &nbsp;</td>\n                        <td class=\"col-form-span-label anchor-link\"  (click)=reqviewdata(obj.ENTRYNO)>{{obj.ENTRYNO}}</td>\n                        <td class=\"col-form-span-label\">{{obj.CREATEDBY}}</td>\n                        <td class=\"col-form-span-label\">{{obj.ENTRYDT}}</td>\n                        <td class=\"col-form-span-label\">{{obj.CHEQUEDT}}</td>\n                        <td class=\"col-form-span-label\">{{obj.PAYEENAME}}</td>\n                        <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.AMOUNT|number:'2.2-4'}}</td>                      \n                        <td class=\"col-form-span-label\">{{obj.USERNAME}}</td>\n                        <td class=\"col-form-span-label\">{{obj.AUTHORISATIONDATE}}</td>\n                        <td class=\"col-form-span-label\">{{obj.TYPE}}</td>\n\n                    </tr>\n                </tbody>\n                <!-- <tr>\n                    <td colspan=\"10\">\n                      <div class=\"row justify-content-center no-gutters\"\n                        style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\n                        <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\n                      </div>\n                    </td>\n                  </tr> -->\n                <tr>\n                    <td colspan=\"10\" class=\"right-text pr-2\">\n                        <span class=\"col-form-span-label  anchor-link\" (click)=\"viewrjectlist()\">ViewRejectedList</span>&nbsp;\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"rejectdata()\"> <span\n                                class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i>Reject\n                                Request</span></button>&nbsp;\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"assignauthdata()\">\n                            <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Assign\n                                Authorization</span></button>&nbsp;\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"exp_exl()\">\n                            <span class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\n                                Export to Excel</span></button>\n                    </td>\n                </tr>\n            </table>\n\n        </div>\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n    </div>\n</div>\n\n<div class=\"modal\" [style.display]=\"showModal_ListReject ? 'block' : 'none'\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\n        <div class=\"modal-content \" >\n            <div class=\"modal-header formheading\"> <strong>CHEQUE PRINTING REJECTED LIST</strong>  </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <!-- <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > -->\n                        <div class=\"col-12\" style=\"height:400px;overflow-y: auto;\" >\n                        <table class=\"table table-bordered table-sm-new bgwhite\">                         \n                            <thead style=\"text-align: center;\">\n                                <tr>\n                                    <th class=\"col-form-span-label\">ENTRYNO</th>\n                                    <th class=\"col-form-span-label\">ENTRYDT</th>\n                                    <th class=\"col-form-span-label\">CREATEDBY</th>\n                                    <th class=\"col-form-span-label\">AMOUNT</th>\n                                    <th class=\"col-form-span-label\">PAYBYDATE</th>\n                                    <th class=\"col-form-span-label\">PAYEENAME</th>\n                                    <th class=\"col-form-span-label\">REJECTEDBY</th>\n                                    <th class=\"col-form-span-label\">REJECTIONDATE</th>\n                                </tr>\n                            </thead>\n                            <tbody>                                      \n                                <tr *ngFor=\"let obj of rejectlist\" (click)=reqviewdata(obj.ENTRYNO)>\n                                    <td class=\"col-form-span-label anchor-link\">{{obj.ENTRYNO}}</td>              \n                                    <td class=\"col-form-span-label\">{{obj.ENTRYDT}}</td>\n                                    <td class=\"col-form-span-label\">{{obj.CREATEDBY}}</td>\n                                    <td class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\n                                    <td class=\"col-form-span-label\">{{obj.PAYBYDATE}}</td>\n                                    <td class=\"col-form-span-label\">{{obj.PAYEENAME}}</td>\n                                    <td class=\"col-form-span-label\">{{obj.REJECTEDBY}}</td>\n                                    <td class=\"col-form-span-label\">{{obj.REJECTIONDATE}}</td>\n                                </tr>\n                            </tbody>                           \n                        </table>\n                    </div>\n                </div>             \n            </div>\n            <div class=\"modal-footer\" style=\"border:none\">\n                <div style=\"float: right;\">                   \n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                            (click)=\"close()\"><i class=\"fa fa-window-close\"></i>\n                            Close</span></button>\n                </div>\n              </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/accounts/CompCheque/ReqBP/Req-BP-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/CompCheque/ReqBP/Req-BP-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ReqBpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqBpRoutingModule", function() { return ReqBpRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _req_bp_auth_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./req-bp-auth-list.component */ "./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.ts");
/* harmony import */ var _req_bankpayment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./req-bankpayment.component */ "./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.ts");
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
            title: 'Request BP'
        },
        children: [
            { path: 'Add_reqBP/:bankpayno', component: _req_bankpayment_component__WEBPACK_IMPORTED_MODULE_3__["ReqBankpaymentComponent"], data: { title: 'Add' } },
            { path: 'AuthList', component: _req_bp_auth_list_component__WEBPACK_IMPORTED_MODULE_2__["ReqBPAuthListComponent"], data: { title: 'AuthList' } },
        ]
    }
];
var ReqBpRoutingModule = /** @class */ (function () {
    function ReqBpRoutingModule() {
    }
    ReqBpRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReqBpRoutingModule);
    return ReqBpRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/ReqBP/Req-BP.module.ts":
/*!************************************************************!*\
  !*** ./src/app/accounts/CompCheque/ReqBP/Req-BP.module.ts ***!
  \************************************************************/
/*! exports provided: ReqBpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqBpModule", function() { return ReqBpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Req_BP_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Req-BP-routing.module */ "./src/app/accounts/CompCheque/ReqBP/Req-BP-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _Cheque_chqstock_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Cheque/chqstock-filter.pipe */ "./src/app/accounts/CompCheque/Cheque/chqstock-filter.pipe.ts");
/* harmony import */ var _req_bp_auth_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./req-bp-auth-list.component */ "./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _req_bankpayment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./req-bankpayment.component */ "./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ReqBpModule = /** @class */ (function () {
    function ReqBpModule() {
    }
    ReqBpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_req_bp_auth_list_component__WEBPACK_IMPORTED_MODULE_10__["ReqBPAuthListComponent"], _Cheque_chqstock_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ReqBPFilterPipe"], _req_bankpayment_component__WEBPACK_IMPORTED_MODULE_13__["ReqBankpaymentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipeModule"],
                _Req_BP_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReqBpRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], ReqBpModule);
    return ReqBpModule;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.ts ***!
  \************************************************************************/
/*! exports provided: ReqBankpaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqBankpaymentComponent", function() { return ReqBankpaymentComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReqBankpaymentComponent = /** @class */ (function () {
    function ReqBankpaymentComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.EntryNo = " ";
        this.EntryDate = "";
        this.Narration = "";
        this.Allitemlist = [];
        this.codelistActt = [];
        this.AccountNameList = [];
        this.Departmentlist = [];
        this.Department = "0";
        this.OurBankList = [];
        this.ChequeType = "CHQ";
        this.ItemList = [];
        this.BillNo = "";
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.TotalAmount = "0";
        this.TotalDeduction = "0";
        this.NetTotal = "0";
        this.ID = "0";
        this.ISNOTEDITABLE = "0";
        this.ACC_BANKDTLS_ID = "0";
        this.Header = "Request - BANK PAYMENt";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.Accountlist = [];
        this.ACCTNAME = "";
        this.STATUS = "CC";
        this.entrytable = [];
        this.NOTOVERFLAG = "";
        this.PAYEENAME = "";
        this.CRPARENTENTRYNO = "0";
        this.ChequeNo = "";
        this.ChequeDate = '';
        this.CompChequeFlag = "0";
        this.dfltourbank = "";
        this.HDPayeeName = "";
        this.HDlblname = "";
        /* added for tds part */
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
        this.newArray = [];
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
        };
        this.labelbind = "Normal Cheque Print.";
    }
    ReqBankpaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ChequeDate = this._dataService.getCurrentdate();
        this._activatedRoute.params.subscribe(function (params) {
            _this.EntryNo = params["bankpayno"];
        });
        var today = new Date();
        // this.EntryDate = this.ChequeDate = this._dataService.datechnge(today)
        this.EntryDate = this._dataService.datechnge(today);
        this.ChequeDate = this._dataService.datechnge(today);
        // this.cleardata()
        var jsonparam = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "CC"
        };
        this._dataService.getData("Accounts/ACC_CASHBOOK_BRBPCRCPCE_PAGELOAD_RBP", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.Departmentlist = data.Table1;
            _this.OurBankList = data.Table2;
            _this.Allitemlist = data.Table5;
            _this.entrytable = data.Table6;
            var defCode = data.Table3[0].ACCTCODE;
            //  this.OurBank = defCode;
            _this.dfltourbank = data.Table3[0].ACCTCODE;
            //  this.PayeeName = data.Table4[0].PAYORDER_PYEENAME
            _this.HDPayeeName = data.Table4[0].PAYORDER_PYEENAME;
            _this.SuppliertdsList = data.Table7;
            _this.gstratelist = data.Table8;
        });
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET_NG", jsonreset)
            .subscribe(function (data) {
        });
        if (this.EntryNo != ' ') {
            this.text = "Update";
            this.Header = 'Request - BANK PAYMENt - UPDATE ';
            this.verifyPermission(91, 'Modify');
            this.editpopulate();
        }
        else {
            this.Header = 'Request - BANK PAYMENt - add';
            this.verifyPermission(91, 'Add');
        }
    };
    ReqBankpaymentComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            // console.log(data)
            if (data.Table.length > "0") {
                _this.fromright_dt = data.Table[0].rightsfrmdt;
                // this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    ReqBankpaymentComponent.prototype.onDisableRange = function () {
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
    ReqBankpaymentComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    ReqBankpaymentComponent.prototype.GetActName = function (Acctcode) {
        var _this = this;
        var splittedacctcode;
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
        this.PayeeName = this.ACCTNAME.split(",")[0];
        this.PAYEENAME = this.ACCTNAME;
        splittedacctcode = Acctcode.split("|")[0];
        if (((splittedacctcode.substring(0, 1) == "S") || (splittedacctcode.substring(0, 1) == "E")) && ((this.ChequeType != 'PO') && (this.ChequeType != 'DD') && (this.ChequeType != 'NEFT') && (this.ChequeType != 'RTGS'))) {
            this.PayeeName = this.ACCTNAME.split(",")[0];
            this.PAYEENAME = "";
            this.HDlblname = "";
        }
        else if (((splittedacctcode.substring(0, 1) == "S") || (splittedacctcode.substring(0, 1) == "E")) && ((this.ChequeType == 'PO') || (this.ChequeType == 'DD') || (this.ChequeType == 'NEFT') || (this.ChequeType == 'RTGS'))) {
            // document.getElementById("HDLBLCHQTYPE").value = document.getElementById("HDPOPAYEENAME").value + "-" + CHEQUETYPE + "-";
            this.PayeeName = this.ACCTNAME.split(",")[0];
            this.HDlblname = this.HDPayeeName + "-" + this.ChequeType + "-";
            // this.PAYEENAME=  this.PayeeName;
        }
        else if (((splittedacctcode.substring(0, 1) == "G")) && ((this.ChequeType == 'PO') || (this.ChequeType == 'DD') || (this.ChequeType == 'NEFT') || (this.ChequeType == 'RTGS'))) {
            if ((splittedacctcode == 'G101436') || (splittedacctcode == 'G101438') || (splittedacctcode == 'G101437') || (splittedacctcode == 'G101439')) {
                // document.getElementById("HDLBLCHQTYPE").value = document.getElementById("HDPOPAYEENAME").value + "-" + CHEQUETYPE + "-";
                this.HDlblname = this.HDPayeeName + "-" + this.ChequeType + "-";
                this.PayeeName = "MANILAL PATEL CLEARING FORWARDING PVT.LTD.";
                //this.PAYEENAME= this.HDPayeeName + "-" + this.ChequeType  + "-" + this.PayeeName;
            }
            else {
                this.HDlblname = this.HDPayeeName + "-" + this.ChequeType + "-";
                this.PayeeName = "";
            }
        }
        else {
            this.HDlblname = "";
            this.PAYEENAME = "";
        }
        if (Acctcode.split("|")[0] == 'G100275') {
            this.PayeeName = "SELF";
        }
        var supptds;
        supptds = this.SuppliertdsList.filter(function (code) { return code.VALUEFIELD === _this.AccountName.split("|")[0]; })[0].TEXTFIELD;
        this.EnableDisableDtn(supptds);
    };
    ReqBankpaymentComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text.split("|")[1];
    };
    ReqBankpaymentComponent.prototype.GetOurBankName = function (event) {
        this.OurBankName = event.target.options[event.target.options.selectedIndex].text;
    };
    ReqBankpaymentComponent.prototype.EnableDisableDtn = function (tds) {
        if (tds == "1" && this.EntryNo == ' ') {
            this.chktdslbl = "TDS Applicable";
            this.chkIsTDS = true;
        }
        else if (tds == "1" && this.EntryNo != ' ') {
            this.chktdslbl = "TDS Applicable";
            this.chkIsTDS = true;
        }
        if (tds == "0") {
            this.chktdslbl = "Is Tds Applicable";
            this.disabletdsbtn = true;
            this.chkIsTDS = false;
            this.disableresetbtn = true;
        }
    };
    ReqBankpaymentComponent.prototype.Addchildrcrd = function () {
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
        if (this.EntryType == "" || this.EntryType == undefined) {
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
            //   this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
            //   return false;
            // }
        }
        if (this.JobNo == "" && this.BillNo == "") {
            if (this.Department == "" || this.Department == undefined || this.Department == "0") {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        // if (this._loginService.getLogin()[0].CMPCODE == "20") {
        //   if (this.JobNo.length > 0 && this.JobNo.length != 10) {
        //     this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
        //     return false;
        //   }
        // }
        if ((this.Amount == "" || this.Amount == "0") && (this.Deduction == "" || this.Deduction == "0")) {
            this._toasterService.toast('warning', 'warning', 'Both Deduction & Amount cannot be Left Blank !');
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
        this.loaderService.display(true);
        var jsonchild = {
            ID: this.ID, ENTRYNO: this.EntryNo, CLIENT: this.AccountName.split("|")[0],
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
        console.log(jsonchild);
        //this._dataService.Common("Accounts/ACC_BRBPCRCPCE_TMP_IU", jsonchild)
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_TMP_IU_NG", jsonchild)
            .subscribe(function (data) {
            console.log(data);
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
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ReqBankpaymentComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        this.AccountName = undefined;
        this.JobNo = "";
        this.Amount = "";
        this.Deduction = "";
        this.ShortNarration = "";
        this.Item = undefined;
        this.Department = "0";
        this.EntryType = "";
        this.txtchild = "Add";
        this.BillNo = "";
        this.ACC_BANKDTLS_ID = "0";
        this.GSTApplicable = "";
        this.TDSApplicable = "";
        this.gstrate = "0";
    };
    ReqBankpaymentComponent.prototype.Editchildrecd = function (id) {
        var _this = this;
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
            this.GetActName(this.AccountName);
            this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === _this.AccountName.split("|")[0]; });
            this.Item = filterData.ITEM_DATAVALUE;
            this.Amount = filterData.AMOUNT;
            this.Deduction = filterData.DEDUCTION;
            this.EntryType = filterData.ENTRYTYPE;
            this.BillNo = filterData.BILLNO;
            this.JobNo = filterData.JOBNO;
            this.ShortNarration = filterData.NARRATION;
            this.txtchild = "Update";
            this.ACC_BANKDTLS_ID = filterData.ACC_BANKDTLS_ID;
            this.ACCTNAME = filterData.ACCOUNT_NAME;
            this.DepartmentName = filterData.DEPARTMENT;
            this.Department = filterData.DEPTID;
            this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
            this.TDSApplicable = filterData.IS_TDS;
            this.GSTApplicable = filterData.IS_GST;
            this.gstrate = filterData.GSTRATE;
        }
    };
    ReqBankpaymentComponent.prototype.deletechildrecd = function (id, brdtlsid) {
        var _this = this;
        if (this.ISNOTEDITABLE == "1") {
            this._toasterService.toast("warning", "warning", "You cannot delete this reocrd!");
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_BANKDTLS_ID: brdtlsid };
                this._dataService.getData("Accounts/ACC_BRBPCRCPCE_TMP_DEL_NG", jsondelete)
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.Table1 != undefined) {
                        if (data.Table1[0].STATUS == "100") {
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
                        _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
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
    ReqBankpaymentComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.ChequeType == "" || this.ChequeType == "0") {
            alert('Please select NOT OVER / PAY ORDER / DD / NEFT / RTGS ! \n');
            return false;
        }
        if ((this.ChequeType == 'NEFT') && (this.TotalAmount >= "200000")) {
            alert('NEFT Amount can be only between Rs.1 lakh to  1,99,999.99 , \n For Printing online Cheque !!');
            return false;
        }
        if (parseFloat(this.TotalAmount) < parseFloat(this.TotalDeduction)) {
            this._toasterService.toast('warning', 'warning', 'Total Deduction cannot be greater than Total Amount!');
            return false;
        }
        if (parseFloat(this.TotalAmount) <= 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter amount greater then 0 !');
            return false;
        }
        if (this.EntryDate == "" || this.EntryDate == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Enter Entry Date !');
            return false;
        }
        if (this.OurBank == "" || this.OurBank == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Our Bank !');
            return false;
        }
        if (this.PayeeName == "" || this.PayeeName == undefined) {
            this._toasterService.toast('warning', 'warning', ' Please Enter Payee Name! !');
            return false;
        }
        this.PAYEENAME = this.HDlblname + "" + this.PayeeName;
        if (this.ChequeType == 'Y') {
            this.NOTOVERFLAG = 'Y';
        }
        else {
            this.NOTOVERFLAG = '';
        }
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
            CHEQUETYPE: this.ChequeType,
            CHEQUENO: this.ChequeNo,
            CHEQUEDT: this.ChequeDate,
            BANK: this.BankName,
            NARRATION: this.Narration,
            ACTUALAMOUNT: this.NetTotal,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            NOTOVERFLAG: this.NOTOVERFLAG,
            ACTION: (this.EntryNo == " ") ? "INSERT" : "UPDATE",
            PAYEENAME: this.PAYEENAME,
            BANKREFNO: ""
        };
        this._dataService.Common("Accounts/ACC_BRBPCRCPCE_IU_NG", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1 != undefined) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                    _this.print(data.Table1[0].ENTRYNO);
                    _this.loaderService.display(false);
                    _this.ResetMain();
                }
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ReqBankpaymentComponent.prototype.ResetMain = function () {
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
        this.OurBank = "";
        this.BankName = '';
        this.Narration = '';
        this.PayeeName = '';
        this.ChequeType = 'CHQ';
        this.labelbind = "Normal Cheque Print";
        //this._router.navigate(['/accounts/voucher/ReqBP/Add/ ']);
        this._router.navigate(['/accounts/CompCheque/ReqBP/Add_reqBP/ ']);
    };
    ReqBankpaymentComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonview = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            EntryNo: this.EntryNo,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_View_NG", jsonview)
            .subscribe(function (data) {
            //   console.log(data);
            // if (data.Table[0].STATUS == "100") {
            _this.EntryNo = data.Table[0].ENTRYNO;
            _this.EntryDate = (data.Table[0].ENTRYDT != "") ? data.Table[0].ENTRYDT : "";
            _this.Narration = data.Table[0].NARRATION;
            _this.ChequeNo = data.Table[0].CHEQUENO;
            _this.ChequeDate = (data.Table[0].CHEQUEDT != "") ? data.Table[0].CHEQUEDT : "";
            _this.OurBank = data.Table[0].OURBANK;
            _this.OurBankName = "";
            _this.BankName = data.Table[0].BANK;
            _this.NOTOVERFLAG = data.Table[0].NOTOVERFLAG;
            _this.CompChequeFlag = data.Table[0].COMPCHEQUE;
            _this.Accountlist = data.Table1;
            _this.TotalAmount = data.Table2[0].TOTAMOUNT;
            _this.TotalDeduction = data.Table2[0].TOTDEDUCTION;
            _this.NetTotal = data.Table[0].ACTUALAMOUNT;
            _this.ChequeType = data.Table[0].CHEQUETYPE;
            _this.PayeeName = data.Table[0].PAYEENAME;
            _this.tdsledgercnt = data.Table3[0].TDSAPPLICABLE;
            if (_this.tdsledgercnt >= "1") {
                _this.disableresetbtn = false;
                // this.disabletdsbtn=false;
            }
            else {
                _this.disableresetbtn = true;
                _this.disabletdsbtn = true;
            }
            _this.chequeEvent(_this.ChequeType);
            _this.loaderService.display(false);
        });
        if (this.CompChequeFlag == "1" && this.NOTOVERFLAG != "Y") {
            this._toasterService.toast("warning", "warning", "You can not Update this Bank Payment because this is generated through Computerisd Cheque Print !");
            this.loaderService.display(false);
        }
        else if (this.CompChequeFlag == "1" && this.NOTOVERFLAG == "Y") {
            this._toasterService.toast("warning", "warning", "You can edit but net total should be less than or equal to BankPayment Amount=" + this.NetTotal);
            this.loaderService.display(false);
        }
    };
    ReqBankpaymentComponent.prototype.Reset = function () {
        var _this = this;
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.EntryNo = " ";
            //   this.EntryDate = '';
            this.Narration = '';
            this.ChequeNo = '';
            // this.ChequeDate = '';
            this.BankName = '';
            this.OurBank = '';
            this.TotalAmount = '';
            this.TotalDeduction = '';
            this.NetTotal = '';
            this.text = "Submit";
            this.PayeeName = '';
            this.Accountlist = [];
            var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET_NG", jsonreset)
                .subscribe(function (data) {
                _this._toasterService.toast('info', 'success', "Clear all data");
                _this.loaderService.display(false);
                _this._router.navigate(['/accounts/CompCheque/ReqBP/Add_reqBP/ ']);
                _this.OurBank = _this.dfltourbank;
            });
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    ReqBankpaymentComponent.prototype.ValidateJobNo = function () {
        //let deptcode= this.JobNo.substr(2, 3) +  this.JobNo.substr(5, 1);
        var deptcode = this.JobNo.substr(2, 2);
        this.Department = this.Departmentlist.filter(function (code) { return code.VALUEFIELD == deptcode; })[0].VALUEFIELD;
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
    ReqBankpaymentComponent.prototype.chequeEvent = function (ChqType) {
        if (ChqType == "CHQ") {
            this.HDlblname = "";
            this.labelbind = "Normal Cheque Print.";
        }
        else if (ChqType == "Y") {
            this.labelbind = "Cheque will Print but amount is not over.";
            this.HDlblname = "";
        }
        else if (ChqType == "PO") {
            this.HDlblname = "YOURSELF-" + ChqType + "-";
            this.labelbind = "Cheque print with Payee Name : Yourself - PO - PayeeName!";
        }
        else if (ChqType == "DD") {
            this.HDlblname = "YOURSELF-" + ChqType + "-";
            this.labelbind = "Cheque print with Payee Name : Yourself - PO - PayeeName!";
        }
        else if (ChqType == "NEFT") {
            this.HDlblname = "YOURSELF-" + ChqType + "-";
            this.labelbind = "Cheque Print Only when amt in between 1 Lakh and 1,99,999.99 !";
        }
        else if (ChqType == "RTGS") {
            this.HDlblname = "YOURSELF-" + ChqType + "-";
            this.labelbind = "Cheque Print Only when amt is Greater or Equal to 2 Lakh !";
        }
    };
    ReqBankpaymentComponent.prototype.getchqdate = function (date) {
        console.log(date);
        this.ChequeDate = date.formatted;
    };
    ReqBankpaymentComponent.prototype.getentrydate = function (date) {
        this.EntryDate = date.formatted;
    };
    ReqBankpaymentComponent.prototype.cleardata = function () {
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_BRBPCRCPCE_RESET_NG", jsonreset)
            .subscribe(function (data) {
        });
    };
    ReqBankpaymentComponent.prototype.fnBillNoChk = function () {
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
                //this.disable_EntryType=true;
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
                // this.disable_cmdadd=false;
                return false;
            }
            else if (data.Table[0].STATUS.split("#")[0] == "100") {
                if (_this.EntryType == "PE") {
                    _this.Amount = data.Table[0].STATUS.split("#")[2];
                    _this.Deduction = data.Table[0].STATUS.split("#")[3];
                    // this.disable_BillNo=true;
                    // this.disable_EntryType=true;
                    // this.disable_cmdadd=false;
                    return false;
                }
            }
        });
    };
    ReqBankpaymentComponent.prototype.print = function (bprno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'CC' + '/' + bprno + '/', "Request Bank Payment Print", toolbar);
    };
    ReqBankpaymentComponent.prototype.OpenTdsModal = function () {
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
            STATUS: "CC"
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
    ReqBankpaymentComponent.prototype.closeTdsModal = function () {
        this.str = "";
        this.newArray = [];
        this.showModal_TDS = false;
    };
    ReqBankpaymentComponent.prototype.getCheckedTDSData = function (event, tdsaccid, rate, TDSAmount, puramt, icode, narr, ratetype, ldcrate, accid, offlag) {
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
    ReqBankpaymentComponent.prototype.AddtdsDetails = function () {
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
    ReqBankpaymentComponent.prototype.ResetTDS = function () {
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
    ReqBankpaymentComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_7__["ToastCommonService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Configuration"] }
    ]; };
    ReqBankpaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-req-bankpayment',
            template: __webpack_require__(/*! raw-loader!./req-bankpayment.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/ReqBP/req-bankpayment.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_7__["ToastCommonService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], ReqBankpaymentComponent);
    return ReqBankpaymentComponent;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReqBPAuthListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqBPAuthListComponent", function() { return ReqBPAuthListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReqBPAuthListComponent = /** @class */ (function () {
    function ReqBPAuthListComponent(_router, _dataService, _auth, _activatedRoute, _toasterService, _loginService, datePipe, exportser, _loaderService, orderPipe, filterPipe) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.datePipe = datePipe;
        this.exportser = exportser;
        this._loaderService = _loaderService;
        this.orderPipe = orderPipe;
        this.filterPipe = filterPipe;
        this.showModal_ListReject = false;
        this.rejectlist = [];
        this.details = [];
        this.DataList = [];
        this.order = 'ENTRYDT1';
        this.reverse = true;
        this.PageActual = 1;
        this.newarray = [];
        this.entry_nos = '';
        this.chk_authflg = '';
        this.auth_date = '';
        this.todayDate = new Date();
    }
    ReqBPAuthListComponent.prototype.ngOnInit = function () {
        this.verifyPermission('98', 'View');
        this._loaderService.display(true);
        this.getdata();
    };
    ReqBPAuthListComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    ReqBPAuthListComponent.prototype.getdata = function () {
        var _this = this;
        var jsoncmp = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            status: "",
        };
        //console.log(jsoncmp)
        this._dataService.getData("Accounts/ACC_CMPBP_Fill_Vouchers_Authorisation", jsoncmp)
            .subscribe(function (data) {
            // console.log(data)
            _this.DataList = data.Table;
            _this._loaderService.display(false);
        });
    };
    ReqBPAuthListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    ReqBPAuthListComponent.prototype.rejectdata = function () {
        var _this = this;
        //console.log(this.newarray);
        var output = this.newarray.map(function (item) {
            return item.EntryNo;
        });
        this.entry_nos = output.join(",");
        if (this.entry_nos == "") {
            alert("Please  Select at Least One Entry No.");
            return false;
        }
        var jsoncmp = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            status: "BP",
            EntryNo: this.entry_nos,
            CHKAuthorityFlag: "2",
            AuthorisationDt: this.datePipe.transform(this.todayDate, 'dd-MMM-yyyy')
        };
        // console.log(jsoncmp)
        this._loaderService.display(true);
        this._dataService.getData("Accounts/Acc_CMPBP_REJECT_BPREQUEST", jsoncmp)
            .subscribe(function (data) {
            //   console.log(data)
            _this._loaderService.display(false);
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.getdata();
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
            }
        });
    };
    ReqBPAuthListComponent.prototype.assignauthdata = function () {
        var _this = this;
        // console.log(this.newarray);
        var output = this.newarray.map(function (item) {
            return item.EntryNo;
        });
        this.entry_nos = output.join(",");
        if (this.entry_nos == "") {
            alert("Please  Select at Least One Entry No.");
            return false;
        }
        if (confirm('Are you sure you want to Authorise selected BP Request No. \n[' + this.entry_nos + ']?')) {
            var jsoncmp = {
                cmpid: this._loginService.getLogin()[0].CMPID,
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                citycode: this._loginService.getLogin()[0].CITYCODE,
                status: "BP",
                EntryNo: this.entry_nos,
                CHKAuthorityFlag: "1",
                AuthorisationDt: this.datePipe.transform(this.todayDate, 'dd-MMM-yyyy')
            };
            //console.log(jsoncmp)
            this._loaderService.display(true);
            this._dataService.getData("Accounts/Acc_CMPBP_Assign_Authorisation_ChqPrint", jsoncmp)
                .subscribe(function (data) {
                //   console.log(data)
                _this._loaderService.display(false);
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.getdata();
                }
                else {
                    _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                }
            });
        }
        else {
            return false;
        }
    };
    ReqBPAuthListComponent.prototype.viewrjectlist = function () {
        var _this = this;
        this.showModal_ListReject = true;
        var jsoncmp = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            status: "BP",
        };
        //  console.log(jsoncmp)
        this._loaderService.display(true);
        this._dataService.getData("Accounts/Acc_CMPBP_REJECT_BPView", jsoncmp)
            .subscribe(function (data) {
            //  console.log(data)
            _this.rejectlist = data.Table;
            _this._loaderService.display(false);
        });
    };
    ReqBPAuthListComponent.prototype.close = function () {
        this.showModal_ListReject = false;
    };
    ReqBPAuthListComponent.prototype.getCheckboxValues = function (event, entryno, chkflag, authdate) {
        var index = this.newarray.findIndex(function (x) { return x.ENTRYNO == entryno; });
        if (event) {
            var obj = {
                EntryNo: entryno,
            };
            this.newarray.push(obj);
        }
        else {
            this.newarray.splice(index, 1);
        }
    };
    ReqBPAuthListComponent.prototype.checkAll = function (ev) {
        this.newarray = [];
        this.DataList.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.DataList.length; i++) {
                if (this.DataList[i].CHKPRINTAUTHORITY != "1") {
                    var obj = {
                        EntryNo: this.DataList[i].ENTRYNO,
                    };
                    this.newarray.push(obj);
                }
            }
        }
        else {
            this.newarray = [];
        }
        //  console.log(this.newarray);
    };
    // exp_exl(){
    //   for (let i = 0; i < this.DataList.length; i++) {
    //     this.details.push({'Entry No' : this.DataList[i].ENTRYNO, 'Created By': this.DataList[i].CREATEDBY,
    //     "Enttry Date": this.DataList[i].ENTRYDT, "PayBy Date": this.DataList[i].CHEQUEDT, "Payee Name": this.DataList[i].PAYEENAME,"Amount":this.DataList[i].AMOUNT,
    //       "Authorised By": this.DataList[i].USERNAME, "Authorisation Date": this.DataList[i].AUTHORISATIONDATE,"Job No.":this.DataList[i].JOB, "Bill No.":this.DataList[i].BILLNO,
    //       "Type" :this.DataList[i].TYPE});
    //   }
    //   this.exportser.exportExcel(this.details, 'ChequePrint');
    // }
    ReqBPAuthListComponent.prototype.exp_exl = function () {
        var _this = this;
        this.DataList.forEach(function (row) {
            _this.details.push(Object.values(row));
        });
        var reportData = {
            title: 'Request Bank Payment authorization list',
            data: this.details,
            headers: Object.keys(this.DataList[0])
        };
        this.exportser.exportExceltry(reportData, "Request-BankPayment");
        // for (let i = 0; i < this.DataList.length; i++) {
        //   this.details.push({'Entry No' : this.DataList[i].ENTRYNO, 'Created By': this.DataList[i].CREATEDBY,
        //   "Enttry Date": this.DataList[i].ENTRYDT, "PayBy Date": this.DataList[i].CHEQUEDT, "Payee Name": this.DataList[i].PAYEENAME,"Amount":this.DataList[i].AMOUNT,
        //     "Authorised By": this.DataList[i].USERNAME, "Authorisation Date": this.DataList[i].AUTHORISATIONDATE,"Job No.":this.DataList[i].JOB, "Bill No.":this.DataList[i].BILLNO,
        //     "Type" :this.DataList[i].TYPE});
        // }
        // this.exportser.exportExcel(this.details, 'ChequePrint');
    };
    ReqBPAuthListComponent.prototype.reqviewdata = function (entryno) {
        if (entryno == '' || entryno == undefined || entryno.length < 15) {
            alert("Enter 15 digit EntryNo No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Request-Bank-Payment-print/' + entryno + '/', "BPRequest View", toolbar);
    };
    ReqBPAuthListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"] },
        { type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"] }
    ]; };
    ReqBPAuthListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-req-bp-auth-list',
            template: __webpack_require__(/*! raw-loader!./req-bp-auth-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/ReqBP/req-bp-auth-list.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]])
    ], ReqBPAuthListComponent);
    return ReqBPAuthListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ReqBP-Req-BP-module.js.map