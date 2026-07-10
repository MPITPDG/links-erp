(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generalaccount-generalactmaster-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/generalaccount/generalactmaster-IU.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/generalaccount/generalactmaster-IU.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-8\">\r\n\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"border: 1px solid #fff;\">\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Under Group</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                    <td colspan=\"3\">\r\n                        <!--select class=\"form-control width150\"  [(ngModel)]=\"city\"-->\r\n                            <select class=\"form-control width150\"  [(ngModel)]=\"undergroup\"  (change)=\"getgroupcode($event.target.value)\" style=\"border-radius: 7px;\">\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of undergrouplist\" value={{d.Code}}>{{d.Name}}</option>\r\n                        </select>\r\n                    </td>\r\n                    </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                    <td colspan=\"3\"><input [(ngModel)]=\"AccountName\" type=\"text\" class=\"form-control width300\" maxlength=\"40\" style=\"border-radius: 7px;\"> </td>\r\n                    </tr>\r\n                        <!-- <tr>\r\n                            <td><span class=\"col-form-span-label\"><b>Under Group</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                            <td colspan=\"3\">\r\n                                <!--select class=\"form-control width150\"  [(ngModel)]=\"city\"-->\r\n                                    <!-- <select class=\"form-control width150\"  [(ngModel)]=\"undergroup\" style=\"border-radius: 7px;\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of undergrouplist\" value={{d.Code}}>{{d.Name}}</option>\r\n                                </select>\r\n                            </td>\r\n                            </tr> -->\r\n                        <tr>\r\n                         <td><span class=\"col-form-span-label\"><b>SACC Code</b> </span></td>\r\n                            <td colspan=\"3\">  <input [(ngModel)]=\"SacCode\" type=\"text\"    class=\"form-control width200\" maxlength=\"40\" style=\"border-radius: 7px;\"> </td>\r\n                            </tr>\r\n                        <tr>\r\n\r\n                            <td  style=\"width:20%\">\r\n                                <span class=\"col-form-span-label\" ><b>Affecting Area</b>  </span>\r\n\r\n                             </td>\r\n                             <td colspan=\"3\">\r\n\r\n\r\n                             <table class=\"table-clear\">\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"checkbox\"  [(ngModel)]=\"IsInvoiceAccount\"   />\r\n                                        <span class=\"col-form-span-label\" ><b>Inv Account</b>  </span>\r\n\r\n                                    </td>\r\n                                     <td width=\"10px\"></td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\"  [(ngModel)]=\"IsBank\"   />\r\n                                        <span class=\"col-form-span-label\" ><b>Bank</b>  </span>\r\n\r\n                                    </td>\r\n                                    <td width=\"10px\"></td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\"  [(ngModel)]=\"IsJobreport\"   />\r\n                                        <span class=\"col-form-span-label\" ><b>Job Report</b>  </span>\r\n\r\n                                    </td>\r\n                                    <td width=\"10px\"></td>\r\n                                    <td>\r\n                                        <input type=\"checkbox\"  [(ngModel)]=\"IsEmployee\"   />\r\n                                        <span class=\"col-form-span-label\" ><b>Is Employee</b>  </span>\r\n\r\n                                    </td>\r\n                                </tr>\r\n                             </table>\r\n                             <table class=\"table-clear\">\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsInvregreport\" />\r\n                                        <span class=\"col-form-span-label\" ><b>Inv Reg Report</b>  </span>\r\n\r\n                                     </td>\r\n                                     <td width=\"10px\"></td>\r\n                                     <td>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsExpenselock\" />\r\n                                        <span class=\"col-form-span-label\" ><b>ExpenseLock</b>  </span>\r\n\r\n                                     </td>\r\n                                     <td width=\"10px\"></td>\r\n                                     <td>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsPurchaseshow\" />\r\n                                        <span class=\"col-form-span-label\" ><b>PurchaseShow</b>  </span>\r\n\r\n                                     </td>\r\n                                </tr>\r\n\r\n                             </table>\r\n                             <!--td colspan=\"2\">\r\n                                 <table class=\"table-clear\">\r\n                                     <tr>\r\n                                        <span class=\"col-form-span-label\" ><b>Inv Account</b>  </span>\r\n                                        <input type=\"checkbox\"  [(ngModel)]=\"IsInvoiceAccount\"   />\r\n\r\n                                        <span class=\"col-form-span-label\" ><b>Bank</b>  </span>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsBank\" />\r\n                                        <span class=\"col-form-span-label\" ><b>Jobreport</b>  </span>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsJobreport\" />\r\n                                        <span class=\"col-form-span-label\" ><b>Is Employee</b>  </span>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsEmployee\" />\r\n                                     </tr>\r\n                                     </table>\r\n\r\n                                     <table>\r\n                                        <tr>\r\n                                            <span class=\"col-form-span-label\" ><b>Invoice Reg Report</b>  </span>\r\n                                            <input type=\"checkbox\"    [(ngModel)]=\"IsInvregreport\" />\r\n                                            <span class=\"col-form-span-label\" ><b>Is ExpenseLock</b>  </span>\r\n                                             <input type=\"checkbox\"    [(ngModel)]=\"IsExpenselock\" />\r\n                                             <span class=\"col-form-span-label\" ><b>Is PurchaseShow</b>  </span>\r\n                                             <input type=\"checkbox\"    [(ngModel)]=\"IsPurchaseshow\" />\r\n                                         </tr>\r\n                                     </table-->\r\n\r\n\r\n                                         <!--td>\r\n                                            <span class=\"col-form-span-label\" ><b>Inv Account</b>  </span>\r\n                                            <input type=\"checkbox\"  [(ngModel)]=\"IsInvoiceAccount\"   />\r\n                                         </td>\r\n                                         <td>\r\n                                            <span class=\"col-form-span-label\" ><b>Bank</b>  </span>\r\n                                            <input type=\"checkbox\"    [(ngModel)]=\"IsBank\" />\r\n                                         </td>\r\n                                         <td>\r\n                                         <span class=\"col-form-span-label\" ><b>Jobreport</b>  </span>\r\n                                        <input type=\"checkbox\"    [(ngModel)]=\"IsJobreport\" />\r\n                                         </td>\r\n                                         <td>\r\n                                            <span class=\"col-form-span-label\" ><b>Is Employee</b>  </span>\r\n                                            <input type=\"checkbox\"    [(ngModel)]=\"IsEmployee\" />\r\n                                         </td>\r\n                                     </tr>\r\n                                     <tr>\r\n                                         <td>\r\n                                            <span class=\"col-form-span-label\" ><b>Invoice Reg Report</b>  </span>\r\n                                            <input type=\"checkbox\"    [(ngModel)]=\"IsInvregreport\" />\r\n                                         </td>\r\n                                         <td>\r\n                                            <span class=\"col-form-span-label\" ><b>Is ExpenseLock</b>  </span>\r\n                                            <input type=\"checkbox\"    [(ngModel)]=\"IsExpenselock\" />\r\n                                         </td>\r\n                                         <td>\r\n                                            <span class=\"col-form-span-label\" ><b>Is PurchaseShow</b>  </span>\r\n                                            <input type=\"checkbox\"    [(ngModel)]=\"IsPurchaseshow\" />\r\n                                         </td>\r\n                                     </tr-->\r\n\r\n                             </td>\r\n                             <!--td  colspan=\"3\" >\r\n\r\n                                <span class=\"col-form-span-label\" ><b>Inv Account</b>  </span>\r\n                                  <input type=\"checkbox\"  [(ngModel)]=\"IsInvoiceAccount\"   />\r\n                                  <span class=\"col-form-span-label\" ><b>Bank</b>  </span>\r\n                                  <input type=\"checkbox\"    [(ngModel)]=\"IsBank\" />\r\n\r\n                                  <span class=\"col-form-span-label\" ><b>Jobreport</b>  </span>\r\n                                  <input type=\"checkbox\"    [(ngModel)]=\"IsJobreport\" />\r\n                                  <span class=\"col-form-span-label\" ><b>Is Employee</b>  </span>\r\n                                  <input type=\"checkbox\"    [(ngModel)]=\"IsEmployee\" />\r\n                                  <span class=\"col-form-span-label\" ><b>Invoice Reg Report</b>  </span>\r\n                                  <input type=\"checkbox\"    [(ngModel)]=\"IsInvregreport\" />\r\n                                  <span class=\"col-form-span-label\" ><b>Is ExpenseLock</b>  </span>\r\n                                  <input type=\"checkbox\"    [(ngModel)]=\"IsExpenselock\" />\r\n                                  <span class=\"col-form-span-label\" ><b>Is PurchaseShow</b>  </span>\r\n                                  <input type=\"checkbox\"    [(ngModel)]=\"IsPurchaseshow\" />\r\n                             </td-->\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\" ><b>City</b>  </span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <table class=\"table-clear\" >\r\n                                        <tr>\r\n\r\n\r\n                                            <td>\r\n                                                <input type=\"checkbox\"   disabled [(ngModel)]=\"IsMUM\" />\r\n                                                <span class=\"col-form-span-label\" ><b>MUM</b>  </span>\r\n\r\n                                            </td>\r\n                                            <td width=\"10px\"></td>\r\n                                            <!-- <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsDEL\" />\r\n                                                <span class=\"col-form-span-label\" ><b>DEL</b>  </span>\r\n\r\n                                            </td>\r\n                                            <td width=\"10px\"></td>\r\n                                            <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsMAA\" />\r\n                                                <span class=\"col-form-span-label\" ><b>MAA</b>  </span>\r\n\r\n                                            </td>\r\n                                            <td width=\"10px\"></td>\r\n\r\n                                            <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsAMD\" />\r\n                                                <span class=\"col-form-span-label\" ><b>AMD</b>  </span>\r\n\r\n                                            </td> -->\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <!-- <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsBLR\" />\r\n                                                <span class=\"col-form-span-label\" ><b>BLR</b>  </span>\r\n\r\n                                            </td> -->\r\n                                            <!-- <td width=\"10px\"></td>\r\n                                            <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsTRN\" />\r\n                                                <span class=\"col-form-span-label\" ><b>TRN</b>  </span>\r\n\r\n                                            </td>\r\n                                            <td width=\"10px\"></td>\r\n                                            <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsTRU\" />\r\n                                                <span class=\"col-form-span-label\" ><b>TRU</b>  </span>\r\n\r\n                                            </td>\r\n                                            <td width=\"10px\"></td>\r\n                                            <td>\r\n                                                <input type=\"checkbox\"    [(ngModel)]=\"IsCOC\" />\r\n                                                <span class=\"col-form-span-label\" ><b>COC</b>  </span>\r\n\r\n                                            </td> -->\r\n                                        </tr>\r\n                                    </table>\r\n                                </td>\r\n                                <!--td  style=\"width:30%\" >\r\n                                    <span class=\"col-form-span-label\" ><b>MUM</b>  </span>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsMUM\" />\r\n                                     <span class=\"col-form-span-label\" ><b>DEL</b>  </span>\r\n                                      <input type=\"checkbox\"    [(ngModel)]=\"IsDEL\" />\r\n                                      <span class=\"col-form-span-label\" ><b>MAA</b>  </span>\r\n                                      <input type=\"checkbox\"    [(ngModel)]=\"IsMAA\" />\r\n\r\n                                 </td-->\r\n\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\" ></span>\r\n                                </td>\r\n                                <!--td>\r\n                                    <span class=\"col-form-span-label\" ><b>BLR</b>  </span>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsBLR\" />\r\n                                    <span class=\"col-form-span-label\" ><b>AMD</b>  </span>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsAMD\" />\r\n                                    <span class=\"col-form-span-label\" ><b>DAC</b>  </span>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsDAC\" />\r\n                                </td--->\r\n                            </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\">\r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                    <tr>\r\n\r\n                                            <td style=\"width:20%\"><span class=\"col-form-span-label\"><b>Active Company</b> </span><span class=\"col-form-span-error\">*</span> </td>\r\n                                            <td>\r\n                                                <ng-select [items]=\"Companylist\"  class=\"form-control width350\"\r\n                                                bindLabel=\"CMPNAME\"\r\n                                                bindValue=\"CMPCODE\"\r\n                                                appendTo=\"body\"\r\n                                                multiple=\"true\"  [closeOnSelect]=\"false\"\r\n                                                [selectableGroup]=\"true\"\r\n                                                [(ngModel)]=\"Companycode\"\r\n                                                (change)=\"onchnage(Companycode)\">\r\n                                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                                                    <input  type=\"checkbox\" [(ngModel)]=\"item$.selected\"  />\r\n                                                    {{ item.CMPNAME}}\r\n                                                 </ng-template>\r\n                                                </ng-select>\r\n                                            </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <tr  *ngIf=\"grp=='M000020' || grp=='M000024'\">\r\n                            <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                                <!-- <input type=\"checkbox\"   [(ngModel)]=\"IS_TDSApp\" (change)=\"checkValue(IS_TDSApp?'TDS':'')\"  /> -->\r\n                                <input type=\"checkbox\"   [(ngModel)]=\"IS_TDSApp\" (change)=\"checkValue(IS_TDSApp?'TDS':'')\"  />\r\n                                    <span class=\"col-form-span-label\"><b>TDS DETAILS</b> </span>\r\n                                    \r\n                            </td>\r\n                        </tr>\r\n\r\n                            <tr *ngIf=\"IS_TDSApp==true\"  >\r\n                                <td><span class=\"col-form-span-label\"><b>Section</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td colspan=\"3\"><select class=\"form-control width150\"  [(ngModel)]=\"sections\" style=\"border-radius: 7px;\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of Sectionlist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                                </select>  </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"IS_TDSApp==true\" >\r\n                               <td><span class=\"col-form-span-label\"><b>From Date</b> </span></td>\r\n                                <td style=\"width: 30%;\">\r\n                                    <my-date-picker name=\"frmdt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"frmdt\" required></my-date-picker>\r\n                                </td>\r\n                                <td><span class=\"col-form-span-label\"><b>To Date</b> </span></td>\r\n                                <td>\r\n                                    <my-date-picker name=\"todt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"todt\" required></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr  *ngIf=\"IS_TDSApp==true\">\r\n                                <td><span class=\"col-form-span-label\"><b>TDS Type</b> </span></td>\r\n                                <td>    <select class=\"form-control width150\"  [(ngModel)]=\"tdstype\"  (change)=\"EnableLDSRate($event.target.value)\" style=\"border-radius: 7px;\">\r\n                                    <option value=\"\">Please Select</option>\r\n                                    <option value=\"BRC\">Base Rate</option>\r\n                                    <option value=\"LDC\">Low Deduction Certificate</option>\r\n                                    <option value=\"EDC\">Exemption</option>\r\n\r\n                                </select></td>\r\n                                <td><span class=\"col-form-span-label\"><b>Base % Rate</b> </span></td>\r\n                                <td>  <input [(ngModel)]=\"secRate\" type=\"text\" class=\"form-control width50\" OnlyNumber=\"true\" style=\"border-radius: 7px;\"> </td>\r\n\r\n                            </tr>\r\n                            <tr   *ngIf=\"IS_TDSApp==true\">\r\n                                <td><span class=\"col-form-span-label\"><b>LDC % Rate</b> </span></td>\r\n                                <td>  <input [(ngModel)]=\"ldcRate\" type=\"text\" [disabled]='disableldcrate' class=\"form-control width50\" OnlyNumber=\"true\" style=\"border-radius: 7px;\"> </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Amount Limit</b> </span></td>\r\n                                <td><input [(ngModel)]=\"tdsLimit\" type=\"text\" OnlyNumber=\"true\" class=\"form-control width100\" [disabled]='disablelimitamt' style=\"border-radius: 7px;\"> </td>\r\n\r\n                            </tr>\r\n                            <tr *ngIf=\"IS_TDSApp==true\" >\r\n                            <td><span class=\"col-form-span-label\"><b>Company</b> </span></td>\r\n                            <td>\r\n                                <select class=\"form-control width250\"  [(ngModel)]=\"Company\" [disabled]='disablecompany' style=\"border-radius: 7px;\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of TDSCompanyList\" value={{d.CMP_CODE}}>{{d.CMP_NAME}}</option>\r\n                                </select>\r\n                               </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Certificate No.</b> </span></td>\r\n                                <td>  <input [(ngModel)]=\"LdccertNo\" type=\"text\" OnlyNumber=\"true\"   class=\"form-control width100\"  [disabled]='disablecertno' style=\"border-radius: 7px;\"> </td>\r\n\r\n                            </tr>\r\n\r\n                            <tr  *ngIf=\"IS_TDSApp==true\">\r\n                                <td colspan=\"4\"  class=\"centerlabel\">\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"AddTDScildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{txtchildTDS}}</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"ResetTDScildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"IS_TDSApp==true\">\r\n                                <td colspan=\"4\">\r\n                                    <!-- <div class=\"row xyscroll\" style=\"overflow-y: auto; width:715px\" *ngIf=\"TdsList.length > 0\"> -->\r\n                                        <div class=\"row xyscroll\" style=\"overflow-y: auto; width:715px\">\r\n\r\n                                            <table class=\"table table-responsive-sm table-bordered\">\r\n                                                <thead>\r\n                                                    <tr class=\"col-form-span-heading\">\r\n                                                        <th class=\"width50 centerlabel\"><span class=\"col-form-span-label\"></span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">SECTIONS</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">RATE</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">FROM DT</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">TO DT</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">LIMIT</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">TDS TYPE</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">LDC RATE</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">LDC CERTNO</span></th>\r\n                                                        <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">COMPANY</span></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody   *ngIf=\"TdsList.length>0\">\r\n                                                    <tr *ngFor=\"let obj of TdsList\">\r\n                                                        <td class=\"width50 centerlabel\">\r\n                                                            <i class=\"fa fa-pencil\" (click)=\"EDIT_Tds(obj.PKID)\" ></i>\r\n                                                            <!-- &nbsp;\r\n                                                            <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.PKID)\"></i> -->\r\n                                                        </td>\r\n                                                        <td><span class=\"width100 col-form-span-label\" >   {{obj.SECTIONS_NME}} </span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.PER_RATE}}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.FRMDT}}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.TODT}}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.TDS_TYPE }}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.LDCRATE }}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.LDCCERTNO }}</span></td>\r\n                                                        <td><span class=\"width100 col-form-span-label\">{{obj.CMP_NAME }}</span></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\"  class=\"centerlabel\">\r\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"AddMain()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n                                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                            </td>\r\n                        </tr>\r\n\t\t\t\t\t</table>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/generalaccount/generalactmaster-search.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/generalaccount/generalactmaster-search.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\"  *ngIf=\"accountlist.length==0\">\r\n\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"width150\">\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"check\" value=\"NAME\" [(ngModel)]=\"Type\"  (change)=\"handleChangeacc(1)\"/>&nbsp;Account Name</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"width130\">\r\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"AccountName \" class=\"form-control\" [disabled]=\"Type!='NAME'\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<div class=\"centerlabel\">\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radioAccountName\" value=\"B\" [(ngModel)]=\"AccountNameType\"  [disabled]=\"Type!='NAME'\"/>&nbsp;Begin with</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radioAccountName\" value=\"A\" [(ngModel)]=\"AccountNameType\"  [disabled]=\"Type!='NAME'\"/>&nbsp;Any Where IN</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr height=\"10\">\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"check\" value=\"UnderGroupwise\" [(ngModel)]=\"Type\" (change)=\"handleChangeacc(2)\" />&nbsp;Undergroup</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<ng-select [items]=\"UndergroupList\" bindLabel=\"Name\" bindValue=\"Code\"  [(ngModel)]=\"Undergroup\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\" [disabled]=\"Type!='UnderGroupwise'\">\r\n\t\t\t\t\t\t\t</ng-select>\r\n\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr height=\"10\">\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"check\" value=\"Typewise\" [(ngModel)]=\"Type\" (change)=\"handleChangeacc(3)\" />&nbsp;Affecting Area</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<table class=\"table-clear\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"IsInvoiceAccount\"  [disabled]=\"Type!='Typewise'\"  />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>Inv Account</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t <td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"IsBank\"  [disabled]=\"Type!='Typewise'\"    />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>Bank</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"IsJobreport\"  [disabled]=\"Type!='Typewise'\"    />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>Job Report</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"IsEmployee\"  [disabled]=\"Type!='Typewise'\"     />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>Is Employee</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t </table>\r\n\t\t\t\t\t\t <table class=\"table-clear\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsInvregreport\" [disabled]=\"Type!='Typewise'\" />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>Inv Reg Report</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t\t <td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t <td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsExpenselock\"  [disabled]=\"Type!='Typewise'\"/>\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>ExpenseLock</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t\t <td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t <td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsPurchaseshow\" [disabled]=\"Type!='Typewise'\" />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>PurchaseShow</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t </table>\r\n\t\t\t\t\t\t </td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr height=\"10\">\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"check\" value=\"Citywise\" [(ngModel)]=\"Type\" (change)=\"handleChangeacc(4)\"/>&nbsp;City</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<table class=\"table-clear\" >\r\n\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsMUM\"  [disabled]=\"Type!='Citywise'\"   />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>MUM</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t<!-- <td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsDEL\" [disabled]=\"Type!='Citywise'\" />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>DEL</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsMAA\" [disabled]=\"Type!='Citywise'\" />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>MAA</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10px\"></td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsAMD\" [disabled]=\"Type!='Citywise'\" />\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>AMD</b>  </span>\r\n\r\n\t\t\t\t\t\t\t\t</td> -->\r\n\r\n\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<!-- <tr>\r\n                                <td>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsBLR\" />\r\n                                    <span class=\"col-form-span-label\" ><b>BLR</b>  </span>\r\n\r\n                                </td>\r\n                                <td width=\"10px\"></td>\r\n                                <td>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsTRN\" />\r\n                                    <span class=\"col-form-span-label\" ><b>TRN</b>  </span>\r\n\r\n                                </td>\r\n                                <td width=\"10px\"></td>\r\n                                <td>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsTRU\" />\r\n                                    <span class=\"col-form-span-label\" ><b>TRU</b>  </span>\r\n\r\n                                </td>\r\n                                <td width=\"10px\"></td>\r\n                                <td>\r\n                                    <input type=\"checkbox\"    [(ngModel)]=\"IsCOC\" />\r\n                                    <span class=\"col-form-span-label\" ><b>COC</b>  </span>\r\n\r\n                                </td>\r\n                            </tr> -->\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t<!--table class=\"table-clear\" >\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t<td>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>BLR</b>  </span>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsBLR\" [disabled]=\"Type!='Citywise'\" />\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>AMD</b>  </span>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsAMD\" [disabled]=\"Type!='Citywise'\" />\r\n\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" ><b>LIL</b>  </span>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"    [(ngModel)]=\"IsDAC\" [disabled]=\"Type!='Citywise'\"  />\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table-->\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr height=\"10\">\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"check\" value=\"Companywise\" [(ngModel)]=\"Type\" (change)=\"handleChangeacc(5)\" />&nbsp;Company</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<ng-select [items]=\"Companylist\"  class=\"form-control width350\"\r\n\t\t\t\t\t\t\t\tbindLabel=\"CMPNAME\"\r\n\t\t\t\t\t\t\t\tbindValue=\"CMPCODE\"\r\n\t\t\t\t\t\t\t\tappendTo=\"body\"\r\n\t\t\t\t\t\t\t\tmultiple=\"true\"  [closeOnSelect]=\"false\"\r\n\t\t\t\t\t\t\t\t[selectableGroup]=\"true\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"Companycode\" [disabled]=\"Type!='Companywise'\"\r\n\t\t\t\t\t\t\t\t(change)=\"onchnage(companycode)\">\r\n\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n\t\t\t\t\t\t\t\t\t<input  type=\"checkbox\" [(ngModel)]=\"item$.selected\"   />\r\n\t\t\t\t\t\t\t\t\t{{ item.CMPNAME}}\r\n\t\t\t\t\t\t\t\t </ng-template>\r\n\t\t\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"centerlabel\" >\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"   (click)=\"search()\"><span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t</td>\r\n\t\t\t</tr>\r\n            </table>\r\n\t\t</div>\r\n    </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n\t\t</div>\r\n\r\n\r\n\r\n\t<!--div class=\"row\" *ngIf=\"displayType=='LIST'\"-->\r\n\r\n\t\t<div class=\"col-sm-12 xyscroll\" *ngIf=\"accountlist.length>0\">\r\n\r\n\t\t\t<table class=\"table table-hover\" >\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"5\">\r\n\t\t\t\t\t\t<span class=\"col-form-span-label\"><b>GENERAL ACCOUNT DETAILS</b></span>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"accountlist=[]\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t<!--th class=\"col-form-span-label\">ACCOUNT CODE</th-->\r\n\t\t\t\t\t\t<th class=\"col-form-span-label\">ACCOUNT</th>\r\n\t\t\t\t\t\t<th class=\"col-form-span-label\">UNDER GROUP</th>\r\n\t\t\t\t\t\t<th class=\"col-form-span-label\">CITY</th>\r\n\t\t\t\t\t\t<th class=\"col-form-span-label\">AFFECTING AREA</th>\r\n\t\t\t\t\t\t<th class=\"col-form-span-label\">COMPANY</th>\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t </thead>\r\n\t\t\t\t<tbody class=\"bgwhite\">\r\n\t\t\t\t\t<tr *ngFor=\"let obj of accountlist | paginate: config\">\r\n\t\t\t\t\t\t<td><span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.ID)\" style=\"cursor:pointer;\" >{{obj.Account}}</span></td>\r\n\t\t\t\t\t\t<!--td class=\"col-form-span-label\">{{obj.Account}}</td-->\r\n\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.UnderGroup}}</td>\r\n\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CITY}}</td>\r\n\t\t\t\t\t\t <td class=\"col-form-span-label\">{{obj.Type}}</td>\r\n\t\t\t\t\t\t <td class=\"col-form-span-label\">{{obj.Active_comp}}</td>\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n\t\t</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/generalaccount/itemcode-IU.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/generalaccount/itemcode-IU.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">    \r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Company</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                    <td colspan=\"3\">\r\n                        <select class=\"form-control width300\"  [(ngModel)]=\"company\" (change)=\"selectionChange($event.target.value)\">\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of Companylist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                        </select>\r\n                    </td> \r\n                    \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                    <td>\r\n                        <select class=\"form-control width300\"  [(ngModel)]=\"city\" >\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of Citylist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                        </select>\r\n                    </td> \r\n                    \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                    <td colspan=\"3\">\r\n                        <select class=\"form-control width300\"  [(ngModel)]=\"accountname\" (change)=\"bindlist($event.target.value)\">\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of AccountNamelist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                        </select>\r\n                      \r\n                    </td> \r\n                    \r\n                </tr>\r\n                <tr  >\r\n                    <td colspan=\"4\" class=\"centerlabel\"><button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"showItem()\"> <i class=\"fa fa-dot-circle-o\" ></i> <span class=\"col-form-span-label\"> Show</span></button></td>\r\n                </tr>\r\n                   \r\n                    <!--div class=\"c\"ol-sm-6 xyscroll\" *ngIf=\"ItemList.length>0\"-->\r\n                       <tr>\r\n                        <td colspan=\"4\">\r\n                            <table class=\"table table-hover\" *ngIf=\"ItemList.length>0\">\r\n                                <tr>\r\n                                   \r\n                                    <td><span class=\"col-form-span-label\"><b>Item Name </b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                                    <td colspan=\"2\">  <input [(ngModel)]=\"SItemName\" type=\"text\"    class=\"form-control width300\"   > </td>    \r\n                                    <td><button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"SearchItem()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> Search</span></button></td>\r\n                                \r\n                            </tr>\r\n                            <tr>\r\n                                <!-- <div class=\"centerlabel\"> -->\r\n                                    <td colspan=\"4\" class=\"centerlabel\">\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radioAccountName\" value=\"B\" [(ngModel)]=\"ItemNameType\"  />&nbsp;BEGIN WITH</span>&nbsp;&nbsp;\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radioAccountName\" value=\"A\" [(ngModel)]=\"ItemNameType\"  />&nbsp;ANY WHERE</span>           \r\n                                    </td>\r\n                                    \r\n                                <!-- </div> -->\r\n                            </tr>\r\n                            </table>\r\n                            </td>\r\n                       </tr>\r\n                        <!-- <td colspan=\"4\">\r\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                               \r\n                                <tr>\r\n                                    <div class=\"centerlabel\">\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radioAccountName\" value=\"B\" [(ngModel)]=\"AccountNameType\"  />&nbsp;Begin with</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <input type=\"radio\" name=\"radioAccountName\" value=\"A\" [(ngModel)]=\"AccountNameType\"  />&nbsp;Any Where IN</span>\r\n                                    </div>\r\n                                </tr>\r\n                            </table>\r\n                        </td>      -->\r\n                        <tr>  \r\n                            <td colspan=\"4\" height=\"95px\">\r\n                        <table class=\"table table-hover\" *ngIf=\"ItemList.length>0\">\r\n                          \r\n                            <thead>\r\n                              \r\n                            \r\n                                <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n                                   \r\n                                    <th class=\"col-form-span-label\">ITEM NAME</th>\r\n                                    <th class=\"col-form-span-label\">EXPIRE DATE</th>\r\n                                    <th class=\"col-form-span-label\">REMARKS</th>\r\n                                   \r\n                                    \r\n                                                                          \r\n                                </tr>\r\n                             </thead>\r\n                            <tbody class=\"bgwhite\">\r\n                                <tr *ngFor=\"let obj of ItemList\">\r\n                                    \r\n                                    <!--td><span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.ITEMCODE)\" >{{obj.ITEMNAME}}</span></td-->\r\n                                    <td class=\"col-form-span-label\" (click)=\"ListOnclick(obj.ITEMCODE)\">{{obj.ITEMNAME}}</td>  \r\n                                    <td class=\"col-form-span-label\">{{obj.EXPIREDATE}}</td>  \r\n                                     <td class=\"col-form-span-label\">{{obj.REMARKS}}</td>     \r\n                                     \r\n                                    \r\n                                </tr>\r\n                              \r\n                            </tbody>\r\n                            <!-- <tr  *ngIf=\"ItemList.length>0\">\r\n                                <td colspan=\"4\" class=\"col-form-span-heading\">{{ItemList.length}} <b>records found</b>  </td>  \r\n                                \r\n                            </tr>    -->\r\n                        </table>\r\n                    </td>\r\n                   \r\n                    <!--/div-->\r\n                </tr>    \r\n                <tr   *ngIf=\"accountname!=''\" >\r\n                    <td colspan=\"4\" class=\"col-form-span-heading\">{{ItemList.length}} <b>Record(s) found</b>  </td>  \r\n                    \r\n                </tr>   \r\n                <tr >\r\n                    <td colspan=\"4\">\r\n                        <table class=\"table table-hover\"  *ngIf=\"accountname!=''\">\r\n                            <tr>\r\n                            <td><span class=\"col-form-span-label\"><b>Item Name </b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                        <td colspan=\"3\">  <input [(ngModel)]=\"ItemName\" type=\"text\"    class=\"form-control width300\"   > </td> \r\n                </tr> \r\n                      \r\n                <tr>\r\n                    <td > \r\n                        <span class=\"col-form-span-label\"><b>Expire Date</b> </span>\r\n                        <span class=\"col-form-span-error\">*</span>\r\n                    </td>         \r\n                    <td >   \r\n                        <my-date-picker name=\"ExpireDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ExpireDate\"></my-date-picker>\r\n                    </td>          \r\n                </tr>\r\n                \r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Remark </b> </span></td>         \r\n                    <td colspan=\"3\">  <input [(ngModel)]=\"Remark\" type=\"text\"    class=\"form-control width300\"   > </td>   \r\n            </tr>\r\n                        </table>\r\n                    </td>\r\n              \r\n                <tr >\r\n                    <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"AddMain()\"> <i class=\"fa fa-dot-circle-o\" ></i><span class=\"col-form-span-label\"> {{text}}</span></button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/master/generalaccount/generalactmaster-IU.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/master/generalaccount/generalactmaster-IU.component.ts ***!
  \************************************************************************/
/*! exports provided: generalactmasterIU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalactmasterIU", function() { return generalactmasterIU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var generalactmasterIU = /** @class */ (function () {
    function generalactmasterIU(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.undergrouplist = [];
        this.undergroup = "";
        this.text = "Submit";
        this.AccountName = "";
        this.SacCode = "";
        this.IsInvoiceAccount = false;
        this.IsBank = false;
        this.IsJobreport = false;
        this.IsEmployee = false;
        this.IsInvregreport = false;
        this.IsExpenselock = false;
        this.IsPurchaseshow = false;
        this.IsMUM = true;
        this.IsDEL = false;
        this.IsMAA = false;
        this.IsBLR = false;
        this.IsAMD = false;
        this.IsTRN = false;
        this.IsTRU = false;
        this.IsCOC = false;
        this.ID = "0";
        this.Activecompany = [];
        this.Activecompanycode = [];
        this.cmpArr = [];
        this.grp = "";
        this.Sectionlist = [];
        this.txtchild = "Add";
        this.TdsList = [];
        this.txtchildTDS = "Add";
        this.IS_TDSApp = false;
        this.tdstype = "";
        this.frmdt = "";
        this.todt = "";
        this.sections = "";
        this.secRate = "0";
        this.tdsLimit = "0";
        this.Pk_Tdsid = "0";
        this.isLoadingData = false;
        this.disableldcrate = true;
        this.ldcRate = "0";
        this.Company = "";
        this.disablecompany = true;
        this.disablelimitamt = true;
        this.disablecertno = true;
        this.FK_GENACT_MST_ID = "0";
        this.ACCTCODE = "0";
        this.TDSCompanyList = [];
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
        this.Header = "General Account Details";
    }
    generalactmasterIU.prototype.ngOnInit = function () {
        var _this = this;
        {
            this._activatedRoute.params.subscribe(function (params) {
                _this.ID = params["ID"];
            });
        }
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this._dataService.getData("Master/GenActMstpageload", jsonmaster)
            .subscribe(function (data) {
            _this.Sectionlist = data.Table;
            _this.loaderService.display(false);
        });
        this._dataService.getAll("Master/MST_GENERAL_ACCOUNT_FILL")
            .subscribe(function (data) {
            _this.undergrouplist = data.Table;
            _this.Companylist = data.Table1;
        });
        this._dataService.getAll("Common/FillCompany")
            .subscribe(function (data) {
            _this.TDSCompanyList = data.Table;
            _this.loaderService.display(false);
        });
        // this._dataService.getAll("Master/MST_GENERAL_ACCOUNT_FILL")
        // .subscribe((data: any) => {
        //         this.Companylist=data.Table1;
        // });
        if (this.ID != ' ') {
            this.editpopulate();
            this.text = 'Update';
        }
    };
    generalactmasterIU.prototype.onchnage = function (Companycode) {
        console.log(Companycode);
    };
    generalactmasterIU.prototype.getgroupcode = function (val) {
        this.grp = val;
    };
    generalactmasterIU.prototype.editpopulate = function () {
        var _this = this;
        var jsonedit = { ID: this.ID,
            MAKERID: this._loginService.getLogin()[0].CMPID,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP,
            VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Master/MST_GENERAL_ACCOUNT_POPULATE_NG", jsonedit)
            .subscribe(function (data) {
            _this.AccountName = data.Table[0].acctname;
            _this.FK_GENACT_MST_ID = _this.ID;
            console.log(_this.FK_GENACT_MST_ID);
            _this.undergroup = data.Table[0].undergroup;
            _this.ACCTCODE = (data.Table[0].acctcode == '') ? '' : data.Table[0].acctcode;
            _this.SacCode = data.Table[0].SACCode;
            _this.IsInvoiceAccount = (data.Table[0].INVOICE == 'Y') ? true : false;
            _this.IsBank = (data.Table[0].bank == 'Y') ? true : false;
            _this.IsJobreport = (data.Table[0].IsJobReport == 'Y') ? true : false;
            _this.IsEmployee = (data.Table[0].IsEmployee == '1') ? true : false;
            _this.IsInvregreport = (data.Table[0].invreg_isreport == 'Y') ? true : false;
            _this.IsExpenselock = (data.Table[0].IsExpenseLock == 'Y') ? true : false;
            _this.IsPurchaseshow = (data.Table[0].IsPurchase_Show == 'Y') ? true : false;
            _this.IsMUM = (data.Table[0].MUM == 'Y') ? true : false;
            _this.IsDEL = (data.Table[0].DEL == 'Y') ? true : false;
            _this.IsMAA = (data.Table[0].MAA == 'Y') ? true : false;
            _this.IsBLR = (data.Table[0].BLR == 'Y') ? true : false;
            _this.IsAMD = (data.Table[0].AMD == 'Y') ? true : false;
            _this.IsTRN = (data.Table[0].TRN == 'Y') ? true : false;
            _this.IsTRU = (data.Table[0].TRU == 'Y') ? true : false;
            _this.IsCOC = (data.Table[0].COC == 'Y') ? true : false;
            if (data.Table[0].IS_TDS_APP == "1") {
                _this.IS_TDSApp = true;
            }
            else {
                _this.IS_TDSApp = false;
            }
            _this.grp = data.Table[0].undergroup;
            _this.TdsList = data.Table1;
            if (data.Table[0].Active_comp != '') {
                data.Table[0].Active_comp.split(',').forEach(function (item, index) {
                    _this.cmpArr.push(item.trim());
                });
            }
            if (_this.cmpArr[_this.cmpArr.length - 1] == "") {
                _this.cmpArr.pop();
                _this.Companycode = _this.cmpArr;
            }
            else {
                _this.Companycode = _this.cmpArr;
            }
            _this.Companycode = _this.cmpArr;
            _this.Activecompany = data.Table[0].Active_comp;
            _this.loaderService.display(false);
        });
    };
    generalactmasterIU.prototype.AddTDScildrcrd = function () {
        var _this = this;
        if (this.IS_TDSApp == false) {
            this._toasterService.toast("warning", "warning", "Please select Tds Details first");
            return false;
        }
        var isTDSapp;
        if (this.IS_TDSApp == true) {
            if (this.sections == "") {
                this._toasterService.toast("warning", "warning", "Please select section");
                return false;
            }
            if (this.secRate == "") {
                this._toasterService.toast("warning", "warning", "Please enter Base rate");
                return false;
            }
            var fr_dt = void 0, to_dt = void 0;
            if (this.frmdt == "") {
                fr_dt = "";
            }
            else {
                fr_dt = this.frmdt.formatted;
            }
            if (this.todt == "") {
                to_dt = "";
            }
            else {
                to_dt = this.todt.formatted;
            }
            if (fr_dt == "") {
                this._toasterService.toast("warning", "warning", "Please select From date");
                return false;
                0;
            }
            if (to_dt == "") {
                this._toasterService.toast("warning", "warning", "Please select To date");
                return false;
            }
            if (this.tdstype == "") {
                this._toasterService.toast("warning", "warning", "Please select TDS Type");
                return false;
            }
            if (this.tdstype == "BRC" && this.secRate == "0") {
                this._toasterService.toast("warning", "warning", "Please enter Base % Rate");
                return false;
            }
            if (this.tdstype == "LDC" && this.secRate == "") {
                this._toasterService.toast("warning", "warning", "Please enter Base % rate");
                return false;
            }
            if (this.tdstype == "LDC" && this.ldcRate == "0") {
                this._toasterService.toast("warning", "warning", "Please select LDS % Rate");
                return false;
            }
            if (this.tdstype == "LDC" && this.tdsLimit == "0") {
                this._toasterService.toast("warning", "warning", "Please enter amount limit");
                return false;
            }
            if (this.tdstype == "LDC" && (this.Company == "0" || this.Company == "")) {
                this._toasterService.toast("warning", "warning", "Please select company");
                return false;
            }
            if (this.tdstype == "LDC" && (this.LdccertNo == "" || this.LdccertNo == undefined)) {
                this._toasterService.toast("warning", "warning", "Please enter Certificate No.");
                return false;
            }
            this.loaderService.display(true);
            var jsonmasterTDS = { PKID: this.Pk_Tdsid,
                FK_GENACT_MST_ID: this.FK_GENACT_MST_ID,
                ACCT_CODE: this.ACCTCODE,
                SECTIONID: this.sections,
                PER_RATE: this.secRate,
                FRMDT: fr_dt,
                TODT: to_dt,
                TDS_LIMIT_AMT: this.tdsLimit,
                TDS_TYPE: this.tdstype,
                MAKERID: this._loginService.getLogin()[0].CMPID,
                MAKERIP: this._loginService.getLogin()[0].MAKERIP,
                VGUID: this._loginService.getLogin()[0].GUID,
                LDCRATE: (this.ldcRate == undefined) ? "0" : this.ldcRate,
                CMPCODE: (this.Company == "") ? "0" : this.Company,
                LDCCERTNO: (this.LdccertNo == "") ? "0" : this.LdccertNo,
            };
            this._dataService.Common("Master/MST_GENERAL_ACCOUNT_TDS_IU_NG", jsonmasterTDS)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.TdsList = data.Table1;
                    _this.loaderService.display(false);
                    _this.ResetTDScildrcrd();
                    _this.txtchild = "Add";
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
                _this.txtchild = "Add";
            });
        }
    };
    generalactmasterIU.prototype.EDIT_Tds = function (id) {
        var filterData = this.TdsList.filter(function (filter) { return filter.PKID == id; })[0];
        if (filterData.PK_TDSTBL_ID == null) {
            this.Pk_Tdsid = id;
            this.sections = filterData.SECTIONID;
            this.secRate = filterData.PER_RATE;
            this.frmdt = (filterData.FRMDT != "") ? this._dataService.stringdttoArry(filterData.FRMDT) : "";
            this.todt = (filterData.TODT != "") ? this._dataService.stringdttoArry(filterData.TODT) : "";
            this.tdsLimit = filterData.TDS_LIMIT_AMT;
            this.tdstype = filterData.TDS_TYPE;
            this.ldcRate = filterData.LDCRATE;
            this.Company = filterData.CMPCODE;
            this.LdccertNo = filterData.LDCCERTNO;
            if (this.tdstype == "LDC") {
                this.disablecompany = false;
                this.disableldcrate = false;
                this.disablelimitamt = false;
                this.disablecertno = false;
            }
            else {
                this.disablecompany = true;
                this.disableldcrate = true;
                this.disablelimitamt = true;
                this.disablecertno = true;
            }
            this.txtchildTDS = "Update";
        }
        else {
            this._toasterService.toast("warning", "warning", "You cannot update this Record");
            this.loaderService.display(false);
        }
    };
    generalactmasterIU.prototype.ResetTDScildrcrd = function () {
        this.sections = "";
        this.secRate = "0";
        this.frmdt = "";
        this.todt = "";
        this.tdsLimit = "0";
        this.tdstype = "";
        this.ldcRate = "0";
        this.Company = "0";
        this.txtchildTDS = "Add";
        this.Pk_Tdsid = "0";
        this.LdccertNo = "";
    };
    generalactmasterIU.prototype.EnableLDSRate = function (val) {
        if (val == "LDC") {
            this.disableldcrate = false;
            this.disablecompany = false;
            this.disablelimitamt = false;
            this.disablecertno = false;
        }
        else {
            this.disableldcrate = true;
            this.ldcRate = "0";
            this.Company = "0";
            this.disablecompany = true;
            this.tdsLimit = "0";
            this.disablelimitamt = true;
            this.LdccertNo = '';
            this.disablecertno = true;
        }
    };
    generalactmasterIU.prototype.AddMain = function () {
        var _this = this;
        this.Activecompany = "";
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Account name could not be blank !');
            return false;
        }
        if (this.undergroup == "") {
            this._toasterService.toast('warning', 'warning', 'Please select Undergroup  !');
            return false;
        }
        //  if(this.ID==" ")
        // {
        if (this.Companycode != undefined) {
            this.Companycode.forEach(function (item, index) {
                _this.Activecompany = _this.Activecompany + item + ",";
                _this.listcnt = _this.Companylist.filter(function (cntrylist) { return cntrylist.CMPCODE == item; });
                _this.Activecompanycode = _this.Activecompanycode + _this.listcnt[0].CMPCODE + ",";
            });
        }
        //   }
        this.loaderService.display(true);
        var jsonmaster = {
            id: this.ID,
            AccName: this.AccountName.replace("'", "`"),
            UnderGroup: this.undergroup,
            SACCode: this.SacCode,
            Invoice: (this.IsInvoiceAccount == true) ? "Y" : "",
            Bank: (this.IsBank == true) ? "Y" : "",
            JobRpt: (this.IsJobreport == true) ? "Y" : "",
            invreg_isreport: (this.IsInvregreport == true) ? "Y" : "",
            IsExpenseLock: (this.IsExpenselock == true) ? "Y" : "",
            IsPurchase_Show: (this.IsPurchaseshow == true) ? "Y" : "",
            Mum: (this.IsMUM == true) ? "Y" : "",
            Del: (this.IsDEL == true) ? "Y" : "",
            Maa: (this.IsMAA == true) ? "Y" : "",
            Blr: (this.IsBLR == true) ? "Y" : "",
            Amd: (this.IsAMD == true) ? "Y" : "",
            Dac: "",
            IsEmployee: (this.IsEmployee == true) ? "1" : "",
            Company: this.Activecompany,
            MakerID: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            VGUID: this._loginService.getLogin()[0].GUID,
            IS_TDS_APP: (this.IS_TDSApp == true) ? '1' : '0'
        };
        this._dataService.Common("Master/MST_GENERAL_ACCOUNT_IU_NG", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                if (_this.ID == ' ') {
                    {
                        _this._toasterService.toast('success', 'success', 'General Account with code ' + data.Table[0].ACCTCODE + ' saved successfully!');
                    }
                    _this.loaderService.display(false);
                    _this.RestMain();
                }
                else if (_this.ID != ' ') {
                    _this._toasterService.toast('success', 'success', 'General Account with code ' + data.Table[0].ACCTCODE + ' updated successfully!');
                }
                _this.loaderService.display(false);
                _this.RestMain();
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    generalactmasterIU.prototype.checkValue = function (event) {
        console.log(event);
        if (event == "TDS") {
            this.IS_TDSApp = true;
        }
        else {
            this.IS_TDSApp = false;
        }
    };
    generalactmasterIU.prototype.RestMain = function () {
        this.ResetTDScildrcrd();
        this.AccountName = '';
        this.undergroup = '';
        this.SacCode = '';
        this.IsInvoiceAccount = false;
        this.IsBank = false;
        this.IsJobreport = false;
        this.IsMUM = false;
        this.IsMAA = false;
        this.IsDEL = false;
        this.IsAMD = false;
        this.IsBLR = false;
        this.IsTRN = false;
        this.IsTRU = false;
        this.IsCOC = false;
        this.IsInvregreport = false;
        this.IsPurchaseshow = false;
        this.IsExpenselock = false;
        this.IsEmployee = false;
        this.Companycode = [];
        this.ID == ' ';
        this.TdsList = [];
        this._router.navigate(['//master/generalaccount/GeneralAccount/ ']);
    };
    generalactmasterIU.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    generalactmasterIU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-GeneralaccountCreation',
            template: __webpack_require__(/*! raw-loader!./generalactmaster-IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/generalaccount/generalactmaster-IU.component.html"),
            styles: ["\n    table, tr, td, th{\n        border: none;\n        } "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], generalactmasterIU);
    return generalactmasterIU;
}());



/***/ }),

/***/ "./src/app/master/generalaccount/generalactmaster-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/master/generalaccount/generalactmaster-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: GeneralAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralAccountRoutingModule", function() { return GeneralAccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generalactmaster_IU_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalactmaster-IU.component */ "./src/app/master/generalaccount/generalactmaster-IU.component.ts");
/* harmony import */ var _generalactmaster_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalactmaster-search.component */ "./src/app/master/generalaccount/generalactmaster-search.component.ts");
/* harmony import */ var _itemcode_IU_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemcode-IU.component */ "./src/app/master/generalaccount/itemcode-IU.component.ts");
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
            title: 'General-Account'
        },
        children: [
            { path: 'GeneralAccount/:ID', component: _generalactmaster_IU_component__WEBPACK_IMPORTED_MODULE_2__["generalactmasterIU"], data: { title: 'General account Creation' }, pathMatch: 'ful' },
            { path: 'GeneralAccountsearch', component: _generalactmaster_search_component__WEBPACK_IMPORTED_MODULE_3__["generalactmastersearch"], data: { title: 'Search' }, pathMatch: 'ful' },
            { path: 'ItemCode', component: _itemcode_IU_component__WEBPACK_IMPORTED_MODULE_4__["itemcodeIU"], data: { title: 'Item Code Creation' }, pathMatch: 'ful' },
        ]
    }
];
var GeneralAccountRoutingModule = /** @class */ (function () {
    function GeneralAccountRoutingModule() {
    }
    GeneralAccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GeneralAccountRoutingModule);
    return GeneralAccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/master/generalaccount/generalactmaster-search.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/master/generalaccount/generalactmaster-search.component.ts ***!
  \****************************************************************************/
/*! exports provided: generalactmastersearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalactmastersearch", function() { return generalactmastersearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
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







var generalactmastersearch = /** @class */ (function () {
    function generalactmastersearch(_router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.accountlist = [];
        this.Undergroup = "";
        this.IsInvoiceAccount = false;
        this.IsBank = false;
        this.IsJobreport = false;
        this.IsEmployee = false;
        this.IsInvregreport = false;
        this.IsExpenselock = false;
        this.IsPurchaseshow = false;
        this.IsMUM = false;
        this.IsDEL = false;
        this.IsMAA = false;
        this.IsBLR = false;
        this.IsAMD = false;
        this.IsTRN = false;
        this.IsTRU = false;
        this.IsCOC = false;
        this.AccountName = "";
        this.AccountNameType = "B";
        this.UndergroupList = [];
        this.Type = 'NAME';
        this.Activecompany = [];
        this.Activecompanycode = [];
    }
    generalactmastersearch.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getAll("Master/MST_GENERAL_ACCOUNT_FILL")
            .subscribe(function (data) {
            _this.UndergroupList = data.Table;
        });
        this._dataService.getAll("Master/MST_GENERAL_ACCOUNT_FILL")
            .subscribe(function (data) {
            _this.Companylist = data.Table1;
        });
    };
    generalactmastersearch.prototype.fnValidate_Name = function () {
        if (this.AccountName.trim().length === 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter Account Name ');
            return false;
        }
        else
            return true;
    };
    generalactmastersearch.prototype.fnValidate_Undergroup = function () {
        if (!this.Undergroup) {
            this._toasterService.toast('warning', 'warning', 'Please select Undergroup ');
            return false;
        }
        return true;
    };
    generalactmastersearch.prototype.fnValidate_Type = function () {
        if ((!this.IsInvoiceAccount == true) && (!this.IsBank == true) && (!this.IsJobreport == true) &&
            (!this.IsInvregreport == true) && (!this.IsExpenselock == true) && (!this.IsPurchaseshow == true)
            && (!this.IsEmployee == true)) {
            this._toasterService.toast('warning', 'warning', 'Please select any Affecting Area ');
            return false;
        }
        else {
            return true;
        }
    };
    generalactmastersearch.prototype.fnValidate_City = function () {
        if ((!this.IsMUM == true) && (!this.IsDEL == true) && (!this.IsMAA == true) &&
            (!this.IsBLR == true) && (!this.IsAMD == true) && (!this.IsTRN == true) && (!this.IsTRU == true) && (!this.IsCOC == true)) {
            this._toasterService.toast('warning', 'warning', 'Please select City ');
            return false;
        }
        else {
            return true;
        }
    };
    generalactmastersearch.prototype.fnValidate_Company = function () {
        if (this.Companycode == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Company ');
            return false;
        }
        else {
            return true;
        }
    };
    generalactmastersearch.prototype.search = function () {
        var _this = this;
        this._loginService.verifyRights(176, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('View', data);
        });
        var SearchType = "";
        if (this.Type == 'NAME') {
            if (this.fnValidate_Name()) {
                SearchType = "AN";
                this.getData(SearchType);
            }
            ;
        }
        //if (this.Type == 'NAME') { SearchType = "AN"; this.getData(SearchType); }
        //else if (this.Type == 'UnderGroupwise') {  SearchType = "UG"; this.getData(SearchType); }
        else if (this.Type == 'UnderGroupwise') {
            if (this.fnValidate_Undergroup()) {
                SearchType = "UG";
                this.getData(SearchType);
            }
            ;
        }
        else if (this.Type == 'Typewise') {
            if (this.fnValidate_Type()) {
                SearchType = "TYPE";
                this.getData(SearchType);
            }
            ;
        }
        //else if (this.Type == 'Typewise') {  SearchType = "TYPE"; this.getData(SearchType);  }
        else if (this.Type == 'Citywise') {
            if (this.fnValidate_City()) {
                SearchType = "CITY";
                this.getData(SearchType);
            }
            ;
        }
        //  else if (this.Type == 'Citywise') {  SearchType = "CITY"; this.getData(SearchType);  }
        //else if (this.Type == 'Companywise') { SearchType = "COMPANY"; this.getData(SearchType); 
        else if (this.Type == 'Companywise') {
            if (this.fnValidate_Company()) {
                SearchType = "COMPANY";
                this.getData(SearchType);
            }
            ;
        }
    };
    generalactmastersearch.prototype.getData = function (searchtype) {
        var _this = this;
        if (searchtype == "COMPANY") {
            this.Companycode.forEach(function (item, index) {
                _this.Activecompany = _this.Activecompany + item + ",";
                _this.listcnt = _this.Companylist.filter(function (cntrylist) { return cntrylist.CMPCODE == item; });
                _this.Activecompanycode = _this.Activecompanycode + _this.listcnt[0].CMPCODE + ",";
            });
        }
        var _jsonData = {
            Mode: searchtype,
            AccName: this.AccountName.replace("'", "`"),
            AccOption: this.AccountNameType.replace("'", "`"),
            UnderGroup: (this.Undergroup) ? this.Undergroup : "",
            Invoice: (this.IsInvoiceAccount == true) ? "Y" : "",
            Bank: (this.IsBank == true) ? "Y" : "",
            JobRpt: (this.IsJobreport == true) ? "Y" : "",
            invreg_isreport: (this.IsInvregreport == true) ? "Y" : "",
            IsExpenseLock: (this.IsExpenselock == true) ? "Y" : "",
            IsPurchase_Show: (this.IsPurchaseshow == true) ? "Y" : "",
            MUM: (this.IsMUM == true) ? "Y" : "",
            DEL: (this.IsDEL == true) ? "Y" : "",
            MAA: (this.IsMAA == true) ? "Y" : "",
            BLR: (this.IsBLR == true) ? "Y" : "",
            AMD: (this.IsAMD == true) ? "Y" : "",
            TRN: (this.IsTRN == true) ? "Y" : "",
            TRU: (this.IsTRU == true) ? "Y" : "",
            COC: (this.IsCOC == true) ? "Y" : "",
            IsEmployee: (this.IsEmployee == true) ? "Y" : "",
            Company: this.Activecompany
        };
        this.loaderService.display(true);
        this._dataService.getData("Master/MST_GENERAL_ACCOUNT_SEARCH", _jsonData)
            .subscribe(function (data) {
            _this.accountlist = data.Table;
            _this.loaderService.display(false);
        });
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.accountlist.count
        };
    };
    generalactmastersearch.prototype.onchnage = function (Companycode) {
        console.log(Companycode);
    };
    /* searchlist() {
     
       
       this.loaderService.display(true);
     
        const jsoncompany = {Mode:"",AccName:"",AccOption:"",UnderGroup:"",Invoice:"",
        Bank:"",JobRpt:"",MUM:"",DEL:"",MAA:"",BLR:"",AMD:"",DAC:"",Company:""
       }
        this._dataService.getData("Master/MST_GENERAL_ACCOUNT_SEARCH",jsoncompany)
           .subscribe((data: any) => {
          this.accountlist = data.Table;
          this.loaderService.display(false);
   
  });

}*/
    generalactmastersearch.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    generalactmastersearch.prototype.ListOnclick = function (ID) {
        //// this._router.navigate(['/admin/company/companyIU/'+CODE]);
        this._router.navigate(['/master/generalaccount/GeneralAccount/' + ID]);
    };
    generalactmastersearch.prototype.back = function () {
        //this.result.emit(true);
        //this._router.navigate(['/master/generalaccount/GeneralAccountsearch']);
        this._router.navigate(['/master/generalaccount/GeneralAccountsearch']).then(function () { window.location.reload(); });
    };
    generalactmastersearch.prototype.check = function (val) {
        console.log(val);
    };
    generalactmastersearch.prototype.handleChangeacc = function (val) {
        if (val == 1) {
            this.IsInvregreport = false;
            this.IsBank = false;
            this.IsJobreport = false;
            this.IsPurchaseshow = false;
            this.IsEmployee = false;
            this.IsExpenselock = false;
            this.IsInvoiceAccount = false;
            this.IsMUM = false;
            this.IsDEL = false;
            this.IsTRN = false;
            this.IsTRU = false;
            this.IsCOC = false;
            this.IsMAA = false;
            this.IsAMD = false;
            this.IsBLR = false;
            this.Companycode = [];
            this.Undergroup = '';
        }
        if (val == 2) {
            this.IsInvregreport = false;
            this.IsBank = false;
            this.IsJobreport = false;
            this.IsPurchaseshow = false;
            this.IsEmployee = false;
            this.IsExpenselock = false;
            this.IsInvoiceAccount = false;
            this.IsMUM = false;
            this.IsDEL = false;
            this.IsTRN = false;
            this.IsTRU = false;
            this.IsCOC = false;
            this.IsMAA = false;
            this.IsAMD = false;
            this.IsBLR = false;
            this.Companycode = [];
            this.AccountName = "";
        }
        if (val == 3) {
            this.Undergroup = '';
            this.IsMUM = false;
            this.IsDEL = false;
            this.IsTRN = false;
            this.IsTRU = false;
            this.IsCOC = false;
            this.IsMAA = false;
            this.IsAMD = false;
            this.IsBLR = false;
            this.Companycode = [];
            this.AccountName = "";
        }
        if (val == 4) {
            this.Undergroup = '';
            this.IsInvregreport = false;
            this.IsBank = false;
            this.IsJobreport = false;
            this.IsPurchaseshow = false;
            this.IsEmployee = false;
            this.IsExpenselock = false;
            this.IsInvoiceAccount = false;
            this.Companycode = [];
            this.AccountName = "";
        }
        if (val == 5) {
            this.IsInvregreport = false;
            this.IsBank = false;
            this.IsJobreport = false;
            this.IsPurchaseshow = false;
            this.IsEmployee = false;
            this.IsExpenselock = false;
            this.IsInvoiceAccount = false;
            this.IsMUM = false;
            this.IsDEL = false;
            this.IsTRN = false;
            this.IsTRU = false;
            this.IsCOC = false;
            this.IsMAA = false;
            this.IsAMD = false;
            this.IsBLR = false;
            this.AccountName = "";
            this.Undergroup = '';
        }
    };
    generalactmastersearch.prototype.handleChangegrp = function (event) {
        this.IsInvregreport = false;
        this.IsBank = false;
        this.IsJobreport = false;
        this.IsPurchaseshow = false;
        this.IsEmployee = false;
        this.IsExpenselock = false;
        this.IsInvoiceAccount = false;
        this.IsMUM = false;
        this.IsDEL = false;
        this.IsTRN = false;
        this.IsTRU = false;
        this.IsCOC = false;
        this.IsMAA = false;
        this.IsAMD = false;
        this.IsBLR = false;
        this.Companycode = [];
        this.AccountName = "";
    };
    generalactmastersearch.prototype.handleChangetype = function (event) {
        this.Undergroup = '';
        this.IsMUM = false;
        this.IsDEL = false;
        this.IsTRU = false;
        this.IsTRN = false;
        this.IsCOC = false;
        this.IsMAA = false;
        this.IsAMD = false;
        this.IsBLR = false;
        this.Companycode = [];
        this.AccountName = "";
    };
    generalactmastersearch.prototype.handleChangecity = function () {
        this.Undergroup = '';
        this.IsInvregreport = false;
        this.IsBank = false;
        this.IsJobreport = false;
        this.IsPurchaseshow = false;
        this.IsEmployee = false;
        this.IsExpenselock = false;
        this.IsInvoiceAccount = false;
        this.Companycode = [];
        this.AccountName = "";
    };
    generalactmastersearch.prototype.handleChangecmp = function (event) {
        this.IsInvregreport = false;
        this.IsBank = false;
        this.IsJobreport = false;
        this.IsPurchaseshow = false;
        this.IsEmployee = false;
        this.IsExpenselock = false;
        this.IsInvoiceAccount = false;
        this.IsMUM = false;
        this.IsDEL = false;
        this.IsTRN = false;
        this.IsTRU = false;
        this.IsCOC = false;
        this.IsMAA = false;
        this.IsAMD = false;
        this.IsBLR = false;
        this.AccountName = "";
        this.Undergroup = '';
    };
    generalactmastersearch.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    generalactmastersearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-GeneralMastersearch',
            template: __webpack_require__(/*! raw-loader!./generalactmaster-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/generalaccount/generalactmaster-search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], generalactmastersearch);
    return generalactmastersearch;
}());



/***/ }),

/***/ "./src/app/master/generalaccount/generalactmaster.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/master/generalaccount/generalactmaster.module.ts ***!
  \******************************************************************/
/*! exports provided: GeneralactmasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralactmasterModule", function() { return GeneralactmasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _generalactmaster_IU_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generalactmaster-IU.component */ "./src/app/master/generalaccount/generalactmaster-IU.component.ts");
/* harmony import */ var _generalactmaster_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generalactmaster-search.component */ "./src/app/master/generalaccount/generalactmaster-search.component.ts");
/* harmony import */ var _itemcode_IU_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./itemcode-IU.component */ "./src/app/master/generalaccount/itemcode-IU.component.ts");
/* harmony import */ var _generalactmaster_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generalactmaster-routing.module */ "./src/app/master/generalaccount/generalactmaster-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GeneralactmasterModule = /** @class */ (function () {
    function GeneralactmasterModule() {
    }
    GeneralactmasterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_generalactmaster_IU_component__WEBPACK_IMPORTED_MODULE_6__["generalactmasterIU"], _generalactmaster_search_component__WEBPACK_IMPORTED_MODULE_7__["generalactmastersearch"], _itemcode_IU_component__WEBPACK_IMPORTED_MODULE_8__["itemcodeIU"]],
            imports: [_generalactmaster_routing_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAccountRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]
            ], providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], GeneralactmasterModule);
    return GeneralactmasterModule;
}());



/***/ }),

/***/ "./src/app/master/generalaccount/itemcode-IU.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/master/generalaccount/itemcode-IU.component.ts ***!
  \****************************************************************/
/*! exports provided: itemcodeIU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemcodeIU", function() { return itemcodeIU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var itemcodeIU = /** @class */ (function () {
    function itemcodeIU(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.Companylist = [];
        this.Citylist = [];
        this.AccountNamelist = [];
        this.ExpireDate = "";
        this.selItems = [];
        this.items = [];
        this.city = "";
        this.company = "";
        this.usertext = "";
        this.ItemName = "";
        this.Searchtype = "A";
        this.ItemList = [];
        this.Remark = "";
        this.accountname = "";
        this.ItemNameType = "A";
        this.SItemName = "";
        this.text = "Submit";
        this.Itemcode = "";
        this.lbl = "";
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
        this.Header = "Item Code Details";
    }
    itemcodeIU.prototype.ngOnInit = function () {
        var _this = this;
        if (this.Itemcode == ' ') {
            this._loginService.verifyRights(187, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
            this.Header = 'ITEM CODE  DETAILS  - ADD';
        }
        this._dataService.getAll("Master/MST__ACCOUNTS_ITEMCODE_FILL_DROPDOWN")
            .subscribe(function (data) {
            _this.Companylist = data.Table;
            _this.AccountNamelist = data.Table2;
        });
    };
    itemcodeIU.prototype.selectionChange = function (cmpcode) {
        //this.companyvalue = event.target.value; 
        var _this = this;
        var jsonlist = { CMPCODE: cmpcode,
        };
        this._dataService.getData("Master/MST_ACCOUNTS_ITEMCODE_FILL_DROPDOWN_CITY", jsonlist)
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
    };
    itemcodeIU.prototype.bindlist = function (accode) {
        var _this = this;
        var jsonitem = { CmpCode: this.company,
            CityCode: this.city,
            AccCode: accode,
            ItemName: this.ItemName,
            SearchType: this.Searchtype
        };
        this._dataService.getData("Master/MST_ACCOUNTS_ITEMCODE_FILL_GRID", jsonitem)
            .subscribe(function (data) {
            _this.ItemList = data.Table;
        });
    };
    itemcodeIU.prototype.SearchItem = function () {
        var _this = this;
        var jsonitem = { CmpCode: this.company,
            CityCode: this.city,
            AccCode: this.accountname,
            ItemName: this.SItemName,
            SearchType: this.ItemNameType
        };
        this._dataService.getData("Master/MST_ACCOUNTS_ITEMCODE_FILL_GRID", jsonitem)
            .subscribe(function (data) {
            _this.ItemList = data.Table;
        });
    };
    itemcodeIU.prototype.ListOnclick = function (Itemcode) {
        var filterData = this.ItemList.filter(function (filter) { return filter.ITEMCODE == Itemcode; })[0];
        this.ItemName = filterData.ITEMNAME;
        // this.ExpireDate=(filterData.EXPIREDATE != "") ? this._dataService.stringdttoArry(filterData.EXPIREDATE) : "";filterData.EXPIREDATE;
        this.ExpireDate = (filterData.EXPIREDATE != "") ? this._dataService.stringdttoArry(filterData.EXPIREDATE) : "";
        this.Remark = filterData.REMARKS;
        this.Itemcode = filterData.ITEMCODE;
        this.text = "Update";
    };
    itemcodeIU.prototype.AddMain = function () {
        var _this = this;
        this.loaderService.display(true);
        if (this.ItemName == "" || this.ItemName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Enter Item !');
            return false;
        }
        if (this.ExpireDate == "" || this.ExpireDate == undefined || this.ExpireDate == null) {
            this._toasterService.toast('warning', 'warning', 'Expire Date should not be blank !');
            return false;
        }
        if (this.Itemcode == "") {
            var jsonmaster = {
                CmpCode: this.company,
                CityCode: this.city,
                AccCode: this.accountname,
                ItemName: this.ItemName,
                ExpireDate: this.ExpireDate.formatted,
                Remarks: this.Remark,
                MakerID: this._loginService.getLogin()[0].CMPID,
                MakerIP: this._loginService.getLogin()[0].MAKERIP
            };
            this._dataService.Common("Master/MST_ACCOUNTS_ITEMCODE_IU", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    {
                        _this._toasterService.toast('success', 'success', 'Item saved successfully!');
                    }
                    _this.loaderService.display(false);
                    _this.RestMain();
                }
                else if (data.Table[0].STATUS == "101") {
                    {
                        _this._toasterService.toast('success', 'success', 'Item ' + _this.ItemName + ' already exists!');
                    }
                    _this.loaderService.display(false);
                    _this.RestMain();
                }
            });
            this.showItem();
        }
        else {
            var jsonmasteredit = {
                CmpCode: this.company,
                CityCode: this.city,
                ITEMCODE: this.Itemcode,
                AccCode: this.accountname,
                ItemName: this.ItemName,
                ExpireDate: this.ExpireDate.formatted,
                Remarks: this.Remark,
                MakerID: this._loginService.getLogin()[0].CMPID,
                MakerIP: this._loginService.getLogin()[0].MAKERIP
            };
            this._dataService.Common("Master/MST_ACCOUNTS_ITEMCODE_UPDATE", jsonmasteredit)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    {
                        _this._toasterService.toast('success', 'success', 'Item Code updated successfully!');
                    }
                    _this.loaderService.display(false);
                    _this.RestMain();
                }
            });
        }
    };
    itemcodeIU.prototype.RestMain = function () {
        // this.city="";
        // this.company="";
        this.ExpireDate = "";
        this.ItemName = "";
        this.Remark = "";
        // this.accountname="";   
        this.text = "Submit";
    };
    itemcodeIU.prototype.showItem = function () {
        var _this = this;
        if (this.company == "" || this.company == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Company !');
            return false;
        }
        if (this.city == "") {
            this._toasterService.toast('warning', 'warning', 'Please select City  !');
            return false;
        }
        if (this.accountname == "") {
            this._toasterService.toast('warning', 'warning', 'Please select AccountName  !');
            return false;
        }
        var jsonitem = { CmpCode: this.company,
            CityCode: this.city,
            AccCode: this.accountname,
            ItemName: this.ItemName,
            SearchType: this.ItemNameType
        };
        this._dataService.getData("Master/MST_ACCOUNTS_ITEMCODE_FILL_GRID", jsonitem)
            .subscribe(function (data) {
            _this.ItemList = data.Table;
        });
    };
    itemcodeIU.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    itemcodeIU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ItemCodeCreation',
            template: __webpack_require__(/*! raw-loader!./itemcode-IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/generalaccount/itemcode-IU.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], itemcodeIU);
    return itemcodeIU;
}());



/***/ })

}]);
//# sourceMappingURL=generalaccount-generalactmaster-module.js.map