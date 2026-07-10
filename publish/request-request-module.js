(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/client.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/client.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                <tr >\r\n                    <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                        Exporter Details\r\n                    </td>\r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Short Name</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td>  <input [(ngModel)]=\"ShrtName\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                    <td><span class=\"col-form-span-label\"><b>PAN No.</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"panno\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" > </td>         \r\n                </tr>\r\n                \r\n                <!-- <tr >\r\n                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                    <td colspan=\"3\" style=\" display: flex; \"  >                        \r\n                        <select class=\"form-control width70\"  [(ngModel)]=\"title\"  >\r\n                        <option value=\"Messrs\">Messrs</option>\r\n                        <option value=\"Mr\">Mr.</option>\t\r\n                        <option value=\"Ms\">Ms.</option>\t\r\n                        <option value=\"Mrs\">Mrs.</option>\r\n                        <option value=\"Miss\">Miss.</option>\r\n                        <option value=\"Dr\">Dr.</option>\t\t\r\n                        </select> \r\n                        <input [(ngModel)]=\"Name\" type=\"text\"    class=\"form-control width300\"  >                      \r\n                    </td>        \r\n                </tr> -->\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Name</b> </span><span class=\"col-form-span-error\">*</span></td> \r\n                    <td  colspan=\"3\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                            <tr >\r\n                                <td   style=\" display: flex; \"  >                        \r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"title\"  >\r\n                                   \r\n                                    <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms\">Ms</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss\">Miss</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\t\r\n                                    <option value=\"Messrs\">Messrs</option>\t\r\n                                    </select> \r\n                                    <input [(ngModel)]=\"Name\" type=\"text\"    class=\"form-control \"    >                      \r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </td> \r\n                </tr >   \r\n                 <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>EORI #</b> </span></td>         \r\n                    <td> <input [(ngModel)]=\"EORIno\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                    <td> </td>         \r\n                    <td> <span class=\"col-form-span-label\"><input type=\"checkbox\"   [(ngModel)]=\"ISSEZCLIENT\" (change)=\"checkValue(ISSEZCLIENT?'1':'')\"     /><b>Is SEZ Client</b> </span> </td>             \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Credit Period Sea</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"crperiodsea\" type=\"text\"    class=\"form-control width180\"   > </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Credit Period Air</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"crperiodair\" type=\"text\"    class=\"form-control width180\"   > </td>\r\n                </tr>\r\n                <tr>\r\n                    <td></td>\r\n                    <td   >\r\n                        <span class=\"col-form-span-label\"><input type=\"checkbox\"    [(ngModel)]=\"overseasagent\" (change)=\"checkValueoverseas(overseasagent?'Y':'0')\"  /><b>Is Overseas Agent</b> </span>\r\n                </td>\r\n                </tr>\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\"><span class=\"col-form-span-label\"><b> DOCUMENTATION</b> </span></td>  \r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Address 1</b> </span></td>         \r\n                    <td colspan=\"3\">  <input [(ngModel)]=\"addrs1\" type=\"text\"    class=\"form-control width300\" maxlength=\"40\"   >   </td> \r\n                       \r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Address 2</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"addrs2\" type=\"text\"    class=\"form-control  width250 \"  maxlength=\"40\"    >   </td> \r\n                    <td><span class=\"col-form-span-label\"><b>Address 3</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"addrs3\" type=\"text\"    class=\"form-control width180\"  maxlength=\"40\"   > </td>         \r\n                </tr>\r\n                <tr>\r\n                   <td><span class=\"col-form-span-label\"><b>Pincode Position</b> </span></td>        \r\n                    <td>\r\n                        <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position=='After'\" (change)=\"position='After'\" /><b>After</b> </span> \r\n                        <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position=='Before'\" (change)=\"position='Before'\" /><b>Before</b> </span>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Pincode</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"Pincode\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                    <td>\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"city\" (change)=\"Countryfilter($event.target.value,'DOC')\">\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Country</b> </span></td>         \r\n                    <td>  <input disabled [(ngModel)]=\"country\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                </tr>\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\"><span class=\"col-form-span-label\"><b>CORRESPONDENCE/INVOICING</b> </span> </td>\r\n                </tr>\r\n                <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 1</b> </span></td>         \r\n                        <td colspan=\"3\">  <input [(ngModel)]=\"addrs21\" type=\"text\"    class=\"form-control width300\"  maxlength=\"40\"  >   </td> \r\n                               \r\n                    </tr>\r\n                    <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 2</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs22\" type=\"text\"    class=\"form-control width250\"   maxlength=\"40\"  >   </td> \r\n                        <td><span class=\"col-form-span-label\"><b>Address 3</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs23\" type=\"text\"    class=\"form-control width180\"   maxlength=\"40\" > </td>         \r\n                    </tr>\r\n                    <tr>\r\n                       <td><span class=\"col-form-span-label\"><b>Pincode Position</b> </span></td>        \r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='After'\" (change)=\"position2='After'\" /><b>After</b> </span> \r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='Before'\" (change)=\"position2='Before'\" /><b>Before</b> </span>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>Pincode</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"Pincode2\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width150\"  [(ngModel)]=\"city2\" (change)=\"Countryfilter($event.target.value,'INV')\">\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>State</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"state\" type=\"text\"    class=\"form-control width180\"   > </td>     \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Country</b> <span class=\"col-form-span-error\">*</span></span></td>         \r\n                        <td>  <input disabled [(ngModel)]=\"country2\" type=\"text\"    class=\"form-control width180\"   > </td>     \r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                                <span class=\"col-form-span-label\"><input type=\"checkbox\"    [(ngModel)]=\"GST\" (change)=\"checkValue(GST?'gst':'')\"  /><b>GST DETAILS</b> </span>    \r\n                        </td>\r\n                    </tr>\r\n                    \r\n                        <tr>   \r\n                            <td><span class=\"col-form-span-label\"><b>GST No.</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                            <td>  <input [(ngModel)]=\"GstNo\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                            <td><span class=\"col-form-span-label\"><b>ARN No</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"ARNNo\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                        </tr>\r\n                        <tr>\r\n                           <td><span class=\"col-form-span-label\"><b>Contact Person</b> </span></td>        \r\n                            <td  style=\" display: flex; \" >\r\n                                <select class=\"form-control width50\"  [(ngModel)]=\"title1\"  >\r\n                                    <option value=\"Mr\">Mr.</option>\t\r\n                                    <option value=\"Ms\">Ms.</option>\t\r\n                                    <option value=\"Mrs\">Mrs.</option>\r\n                                    <option value=\"Miss\">Miss.</option>\r\n                                    <option value=\"Dr\">Dr.</option>\r\n                                </select>\r\n                                <input [(ngModel)]=\"person\" type=\"text\"    class=\"form-control width180\"   > \r\n                            </td>\r\n                            <td><span class=\"col-form-span-label\"><b>Telephone No.</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"telephone\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                        </tr>\r\n                        <tr>                             \r\n                            <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"mobile\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                            <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                            <td>  <input   type=\"email\"    class=\"form-control width180\"   placeholder=\"Email\"  [(ngModel)]=\"email\" (change)=\"onChange(email)\" > \r\n                            </td>   \r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addcildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetcildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\">\r\n                                <div class=\"row xyscroll\" *ngIf=\"gstlist.length > 0\">\r\n                                    <table class=\"table table-responsive-sm table-bordered\"> \r\n                                        <thead>\r\n                                            <tr class=\"col-form-span-heading\">\r\n                                                <th class=\"width50 centerlabel\"><span class=\"col-form-span-label\"></span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Invoicing Address</span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">GST No.</span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">GST ARN No.</span></th>                                                     \r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody   *ngIf=\"gstlist.length>0\">\r\n                                            <tr *ngFor=\"let obj of gstlist\">\r\n                                                <td class=\"centerlabel\">\r\n                                                    <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                                    &nbsp;\r\n                                                    <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID)\"></i>\r\n                                                </td>\r\n                                                <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.INVADDRESS\"> </span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.GST_NO}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.GST_ARNNO}}</span></td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </td>\r\n                        </tr> \r\n                        <tr>                    \r\n                            <td colspan=\"4\"  (click)=\"getcollapse(CHECK,'other')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">OTHER DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr *ngIf =\"CHECK==true\">\r\n                            <td  colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                     \r\n                                        <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>State of origin of Export </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"SOexport\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b>Telephone No.(General) </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"telphone1\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                                            </tr>  \r\n                                            <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>Fax No. (General) </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"faxno1\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b>Email (General) </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"email1\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(email1)\"  > </td>   \r\n                                            </tr>  \r\n                    \r\n                                            <tr>                             \r\n                                                    <td><span class=\"col-form-span-label\"><b> RBI Code </b> </span></td>         \r\n                                                    <td>  <input [(ngModel)]=\"rbicode\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                                                    <td><span class=\"col-form-span-label\"><b> IM No.</b> </span></td>         \r\n                                                    <td>  <input [(ngModel)]=\"imno\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                                            </tr>  \r\n                                            <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>IT No. </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"itno\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b> Banker Name</b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"bankername\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                                            </tr>  \r\n                                            <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>Custom P. No. </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"custpono\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b> IEC Code</b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"ieccode\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                                            </tr>  \r\n                                            <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>Exporthouse Cert. No. </b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"exphouseno\" type=\"text\"    class=\"form-control width180\"   > \r\n                                                </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b> Exporthouse Cert. Dt. </b> </span></td>         \r\n                                                <td> <my-date-picker name=\"exphousedt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"exphousedt\"  ></my-date-picker> \r\n                                                 </td>   \r\n                                            </tr>  \r\n                                            <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>Exporthouse Cert. Validty upto</b> </span></td>         \r\n                                                <td><my-date-picker name=\"exphouse\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"exphouse\"  ></my-date-picker> \r\n                                                </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b> ITC Group Code</b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"itcgrpcode\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                            </tr>\r\n                                            <tr>                             \r\n                                                <td><span class=\"col-form-span-label\"><b>Type of Exporter</b> </span></td>         \r\n                                                <td> <select class=\"form-control width150\"  [(ngModel)]=\"typeexpo\">\r\n                                                        <option value=\"(R) Merchant\">(R)Merchant</option>\r\n                                                        <option value=\"(F) Manufacturer\"> (F)Manufacturer</option>\r\n                                                    </select>   </td>  \r\n                                                <td><span class=\"col-form-span-label\"><b> Type of Export House</b> </span></td>         \r\n                                                <td>\r\n                                                        <select class=\"form-control width150\"  [(ngModel)]=\"typeexpohouse\">\r\n                                                            <option  value=\"(EH) Export House\">(EH)Export House</option>\r\n                                                            <option value=\"(SH) Star Trading House\">(SH)Star Trading House</option>\r\n                                                            <option value=\"(SS) Super Star Trading House\">(SS)Super Star Trading House</option>\r\n                                                            <option value=\"(SS) Super Star Trading House\">(TH)Trading House</option>\r\n                                                            <option value=\"(NA) Not Applicable\">(NA)Not Applicable</option>\r\n                                                        </select>\r\n                                                </td>   \r\n                                            </tr>\r\n                                        <tr>                             \r\n                                            <td><span class=\"col-form-span-label\"><b>  </b> </span></td>         \r\n                                            <td> <select class=\"form-control width150\"  [(ngModel)]=\"exp_typeb\">\r\n                                                    <option value=\"(P) Private\"> (P)Private</option>\r\n                                                    <option value=\"(G) Government\"> (G)Government</option>\r\n                                                </select> </td>  \r\n                                            <td><span class=\"col-form-span-label\"><b> SERVICE TAX No.</b> </span></td>         \r\n                                            <td>  <input [(ngModel)]=\"servtaxno\" type=\"text\"    class=\"form-control width180\"   >   </td>   \r\n                                        </tr>\r\n                                        <tr>\r\n                                                <td><span class=\"col-form-span-label\"><b>TAN No.</b> </span></td>         \r\n                                                <td>  <input [(ngModel)]=\"tanno\" type=\"text\"    class=\"form-control width180\" (change)=\"Tanchange()\"  >   </td>  \r\n                                                <td>  </td>\r\n                                                <td></td>\r\n                                        </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr> \r\n                        <tr>                    \r\n                            <td colspan=\"4\"  (click)=\"getcollapse(CHECKB,'bank')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">BANK DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr *ngIf =\"CHECKB==true\">                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                    <tr>                             \r\n                                        <td><span class=\"col-form-span-label\"><b>Bank Address 1</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkaddss1\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Bank Address 2</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkaddss2\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                                    </tr>  \r\n                                    <tr>                             \r\n                                        <td><span class=\"col-form-span-label\"><b>Accocunt No</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkAcctno\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>Authorised Dealer Code</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkauthdealercode\" type=\"text\"    class=\"form-control width180\"   > </td>                         \r\n                                    </tr>  \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>RBI Waiver No.</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"RBIwaiverno\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>Commissionrate</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkCommissionrate\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                \r\n                                    </tr>  \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Division</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkDivision\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>Range</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bnkRange\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr>  \r\n                                    <tr>                             \r\n                                        <td><span class=\"col-form-span-label\"><b>Account No.(in SBI)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"bkacctnoSBI\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                                        <td> </td>         \r\n                                        <td>   </td>   \r\n                                    </tr>  \r\n                                </table>\r\n                            </td>\r\n                        </tr>  \r\n                        <tr>                    \r\n                            <td colspan=\"4\"  (click)=\"getcollapse(CHECKC1,'contact1')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 1 DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr *ngIf =\"CHECKC1==true\">                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle1\"  >\r\n                                            <option value=\"Mr\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname1\" type=\"text\" class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail1\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail1)\"  > </td>    \r\n                                </tr> \r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                         <!-- <tr class=\"trheader\">\r\n                        <td colspan=\"4\"> <span class=\"col-form-span-label\"><b>  CONTACT 1 DETAILS</b> </span>  </td>\r\n                         </tr> -->\r\n                        <tr>                    \r\n                            <td colspan=\"4\"  (click)=\"getcollapse(CHECKC2,'contact2')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 2 DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr *ngIf =\"CHECKC2==true\">                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                        <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle2\"  >\r\n                                                <option value=\"Mr\">Mr.</option>\t\r\n                                                <option value=\"Ms\">Ms.</option>\t\r\n                                                <option value=\"Mrs\">Mrs.</option>\r\n                                                <option value=\"Miss\">Miss.</option>\r\n                                                <option value=\"Dr\">Dr.</option>\r\n                                            </select>  \r\n                                            <input [(ngModel)]=\"Cname2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"CDesignation2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr>  \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Ctelphone2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cfaxno2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr> \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cmobileno2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cemail2\" type=\"text\"    class=\"form-control width180\"   (change)=\"onChange(Cemail2)\"  > </td>    \r\n                                    </tr>     \r\n                                </table>\r\n                            </td>\r\n                        </tr> \r\n                    <tr>                    \r\n                        <td colspan=\"4\"  (click)=\"getcollapse(CHECKC3,'contact3')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 3 DETAILS</b></span></td>\r\n                    </tr>\r\n                    <tr *ngIf =\"CHECKC3==true\">                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle3\"  >\r\n                                            <option value=\"Mr\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail3\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail3)\"  > </td>    \r\n                                </tr> \r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n            \r\n                      \r\n                    <tr>                    \r\n                        <td colspan=\"4\"  (click)=\"getcollapse(CHECKC4,'contact4')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 4 DETAILS</b></span></td>\r\n                    </tr>\r\n                    <tr *ngIf =\"CHECKC4==true\">                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle4\"  >\r\n                                            <option value=\"Mr\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail4\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail4)\"   > </td>    \r\n                                </tr> \r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                    <!-- <tr>                    \r\n                        <td colspan=\"4\"  (click)=\"getcollapse(CHECKC5,'doc')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">DOCUMNET UPLOAD</b></span></td>\r\n                    </tr>\r\n                    <tr *ngIf =\"CHECKC5==true\">                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Document Type</b> </span></td>         \r\n                                        <td colspan=\"3\"> <select class=\"form-control width150\"  [(ngModel)]=\"doctype\"  >\r\n                                                <option value=\"PANC\">PAN Copy</option>\t\r\n                                                <option value=\"KYCC\">KYC Copy</option>\t\r\n                                                <option value=\"GSTC\">GST Copy</option>                                                \r\n                                            </select> \r\n                                        </td> \r\n                                    </tr>\r\n                                <tr>\r\n                                    <td colspan=\"3\">\r\n                                     \r\n                                        <input #fileUpload type=\"file\" class=\"col-form-span-label\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple accept=\".pdf\" />\r\n                                    </td>                                     \r\n                                    <td>   <button class=\"btn btn-sm btn-success\" type=\"upload\" (click)=\"upload()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-upload\" ></i> Upload</span></button></td>\r\n                                </tr>\r\n                                <tr >\r\n                                    <td colspan=\"4\">\r\n                                        <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                            <tr>  \r\n                                                <td><span class=\"col-form-span-label\"><b>DOC TYPE</b> </span></td> \r\n                                                <td><span class=\"col-form-span-label\"><b>File Name</b> </span></td> \r\n                                                <td><span class=\"col-form-span-label\"><b>Actual File Name</b> </span></td>\r\n                                            </tr>\r\n                                            <tbody *ngIf=\"uploadResult.length>0\">\r\n                                                 <tr *ngFor=\"let obj of uploadResult\">\r\n                                                <td class=\"centerlabel\">\r\n                                                     \r\n                                                    <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.PKID,obj.ACT_FILENAME)\"></i>\r\n                                                </td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.DOCTYPE}} </span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.UPLOAD_FILENAME}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.ACT_FILENAME}}</span></td>\r\n                                            </tr>\r\n                                            </tbody>\r\n                                           \r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr> -->\r\n                    <tr class=\"trheader\">\r\n                        <td  colspan=\"4\"><span class=\"col-form-span-label\"><b>BRANCH LIST</b> </span> </td>\r\n                    </tr>                          \r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <div class=\"row xyscroll\" >\r\n                                    <table class=\"table table-responsive-sm table-bordered\"> \r\n                                        <thead>\r\n                                            <tr class=\"col-form-span-heading\">\r\n                                                \r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">City</span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Exporter</span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Importer</span></th> \r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Sourcing Agent</span></th>                                                        \r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                                <tr *ngFor=\"let obj of citybranchlict; let i = index\">                                                        \r\n                                                    <td><span class=\"col-form-span-label\">{{obj.CITYNAME}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.CLIENTLOC\" (change)=\"chkonchange(obj.CITYCODE,obj.CLIENTLOC,'E')\"/> </span></td>\r\n                                                    <td><span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.CLIENTLOC1\" (change)=\"chkonchange(obj.CITYCODE,obj.CLIENTLOC1,'I')\"/></span></td>\r\n                                                    <td><span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.CLIENTLOC2\" (change)=\"chkonchange(obj.CITYCODE,obj.CLIENTLOC2,'S')\"/></span></td>\r\n                                                </tr>\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                            </div>\r\n                        </td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{text}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/consignee.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/consignee.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                <tr >\r\n                    <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                        Consignee Details\r\n                    </td>\r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Short Name</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td>  <input [(ngModel)]=\"ShrtName\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                    <td><span class=\"col-form-span-label\"><b>EORI #</b> </span></td>         \r\n                    <td> <input [(ngModel)]=\"EORIno\" type=\"text\"    class=\"form-control width180\"   > </td>      \r\n                </tr>\r\n                <tr>\r\n                <td ><span class=\"col-form-span-label\"><b>Name</b> </span><span class=\"col-form-span-error\">*</span></td> \r\n                <td colspan=\"3\" > \r\n                <table class=\"table   table-sm-new bgwhite\">\r\n                    <tr>                                   \r\n                        <td class=\"display-inline\"   >                        \r\n                            <select class=\"form-control width70\"  [(ngModel)]=\"title\"  >\r\n                            <option value=\"Messrs\">Messrs.</option>\t\r\n                            <option value=\"Mr.\">Mr.</option>\t\r\n                            <option value=\"Ms.\">Ms.</option>\t\r\n                            <option value=\"Mrs.\">Mrs.</option>\r\n                            <option value=\"Miss.\">Miss.</option>\r\n                            <option value=\"Dr.\">Dr.</option>\t\r\n                            </select> \r\n                            <input [(ngModel)]=\"Name\" type=\"text\"    class=\"form-control width450\"  >             \r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                </td>\r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Address 1</b> </span></td>         \r\n                    <td><input [(ngModel)]=\"addrs1\" type=\"text\"    class=\"form-control width300\" maxlength=\"40\"   >   </td> \r\n                      <td><span class=\"col-form-span-label\"><b>Address 2</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"addrs2\" type=\"text\"    class=\"form-control  width250 \"  maxlength=\"40\"    >   </td>   \r\n                </tr>\r\n                <tr>                      \r\n                    <td><span class=\"col-form-span-label\"><b>Address 3</b> </span></td>         \r\n                    <td> <input [(ngModel)]=\"addrs3\" type=\"text\"    class=\"form-control width180\"  maxlength=\"40\"   > </td>     \r\n                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                    <td>  <input   type=\"email\"    class=\"form-control width180\"   placeholder=\"Email\"  [(ngModel)]=\"email\" (change)=\"onChange(email)\" > \r\n                    </td>       \r\n                </tr>\r\n                <tr>\r\n                   <td><span class=\"col-form-span-label\"><b>PincodePosition</b> </span></td>        \r\n                    <td>\r\n                        <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position=='After'\" (change)=\"position='After'\" /><b>After</b> </span> \r\n                        <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position=='Before'\" (change)=\"position='Before'\" /><b>Before</b> </span>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Pincode</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"Pincode\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                    <td>\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"city\" (change)=\"Countryfilter($event.target.value)\">\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Country</b> </span></td>         \r\n                    <td>  <input disabled [(ngModel)]=\"country\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Telephone No.</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"telephone\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                    <td><span class=\"col-form-span-label\"><b>Fax No.(General) </b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"faxno1\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                </tr>\r\n                <!-- <tr>\r\n                    <td colspan=\"2\"><span class=\"col-form-span-label\"><b>Isunder SYTIA Group</b> </span></td>  \r\n                    <td colspan=\"2\"><span class=\"col-form-span-label\"><input type=\"radio\" [checked]=\"isSYTIA=='Y'\" (change)=\"isSYTIA='Y'\" >Yes </span>\r\n                        <span class=\"col-form-span-label\"><input type=\"radio\"  [checked]=\"isSYTIA=='N'\" (change)=\"isSYTIA='N'\" >No </span>\r\n                    </td>  \r\n                </tr> -->\r\n                <tr>                    \r\n                     <td colspan=\"4\"  (click)=\"getcollapse(CHECKC1,'contact1')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 1 DETAILS</b></span></td>\r\n                </tr>\r\n                <tr *ngIf =\"CHECKC1==true\">                        \r\n                    <td   colspan=\"4\">                                \r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                        <tr>  \r\n                            <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                            <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle1\"  >\r\n                                    <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms.\">Ms.</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss.\">Miss.</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\r\n                                </select>  \r\n                                <input [(ngModel)]=\"Cname1\" type=\"text\" class=\"form-control width180\"   > </td> \r\n                            <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"CDesignation1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                        </tr>  \r\n                        <tr>  \r\n                            <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"Ctelphone1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                            <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"Cfaxno1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                        </tr> \r\n                        <tr>  \r\n                            <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"Cmobileno1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                            <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"Cemail1\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail1)\"  > </td>    \r\n                        </tr> \r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                       \r\n                <tr>                    \r\n                    <td colspan=\"4\"  (click)=\"getcollapse(CHECKC2,'contact2')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 2 DETAILS</b></span></td>\r\n                </tr>\r\n                <tr *ngIf =\"CHECKC2==true\">                        \r\n                    <td   colspan=\"4\">                                \r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                            <tr>  \r\n                                <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle2\"  >\r\n                                        <option value=\"Mr.\">Mr.</option>\t\r\n                                        <option value=\"Ms.\">Ms.</option>\t\r\n                                        <option value=\"Mrs.\">Mrs.</option>\r\n                                        <option value=\"Miss.\">Miss.</option>\r\n                                        <option value=\"Dr.\">Dr.</option>\r\n                                    </select>  \r\n                                    <input [(ngModel)]=\"Cname2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"CDesignation2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                            </tr>  \r\n                            <tr>  \r\n                                <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"Ctelphone2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"Cfaxno2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                            </tr> \r\n                            <tr>  \r\n                                <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"Cmobileno2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"Cemail2\" type=\"text\"    class=\"form-control width180\"   (change)=\"onChange(Cemail2)\"  > </td>    \r\n                            </tr>     \r\n                        </table>\r\n                    </td>\r\n                </tr> \r\n            <tr>                    \r\n                <td colspan=\"4\"  (click)=\"getcollapse(CHECKC3,'contact3')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 3 DETAILS</b></span></td>\r\n            </tr>\r\n            <tr *ngIf =\"CHECKC3==true\">                        \r\n            <td   colspan=\"4\">                                \r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr>  \r\n                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle3\"  >\r\n                            <option value=\"Mr.\">Mr.</option>\t\r\n                            <option value=\"Ms.\">Ms.</option>\t\r\n                            <option value=\"Mrs.\">Mrs.</option>\r\n                            <option value=\"Miss.\">Miss.</option>\r\n                            <option value=\"Dr.\">Dr.</option>\r\n                        </select>  \r\n                        <input [(ngModel)]=\"Cname3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"CDesignation3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                </tr>  \r\n                <tr>  \r\n                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"Ctelphone3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"Cfaxno3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                </tr> \r\n                <tr>  \r\n                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"Cmobileno3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"Cemail3\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail3)\"  > </td>    \r\n                </tr> \r\n            </table>\r\n            </td>\r\n            </tr>\r\n            \r\n                      \r\n            <tr>                    \r\n                <td colspan=\"4\"  (click)=\"getcollapse(CHECKC4,'contact4')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 4 DETAILS</b></span></td>\r\n            </tr>\r\n            <tr *ngIf =\"CHECKC4==true\">                        \r\n                <td   colspan=\"4\">                                \r\n                    <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                        <tr>  \r\n                            <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                            <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle4\"  >\r\n                                    <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms.\">Ms.</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss.\">Miss.</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\r\n                                </select>  \r\n                                <input [(ngModel)]=\"Cname4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                            <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"CDesignation4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                        </tr>  \r\n                        <tr>  \r\n                            <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"Ctelphone4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                            <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"Cfaxno4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                        </tr> \r\n                        <tr>  \r\n                            <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                            <td><input [(ngModel)]=\"Cmobileno4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                            <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                            <td><input [(ngModel)]=\"Cemail4\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail4)\"   > </td>    \r\n                        </tr> \r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td colspan=\"4\"><span class=\"col-form-span-label\"><b>OTHER LIST</b></span></td>\r\n            </tr> \r\n            <tr>\r\n                <td colspan=\"2\"><span class=\"col-form-span-label\"><b>Approval Required </b> </span></td>  \r\n                <td colspan=\"2\"><span class=\"col-form-span-label\"><input type=\"radio\"    [checked]=\"isappr=='Y'\" (change)=\"isappr='Y'\"   >Yes </span>\r\n                    <span class=\"col-form-span-label\"><input type=\"radio\"    [checked]=\"isappr=='N'\" (change)=\"isappr='N'\" >No </span>\r\n                </td>  \r\n            </tr>\r\n            <tr  class=\"trheader\">\r\n                <td colspan=\"4\" class=\"centerlabel\"><span class=\"col-form-span-label \"><b>List Of Documents  </b> </span></td>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let obj of documentlist; let i = index\">                                                        \r\n               \r\n                <td><span class=\"col-form-span-label\"> <input type=\"checkbox\" value=\"{{obj.doccode}}\" [(ngModel)]=\"obj.CHECK\"   (change)=\"chkonchange(obj.doccode,obj.CHECK)\"/> </span></td>                   \r\n                <td colspan=\"3\"><span class=\"col-form-span-label\">{{obj.document}}</span></td>\r\n            </tr>\r\n            <!--tr *ngIf=\"queryParamsConcode !=' '\" class=\"trheader\"-->\r\n                <tr  class=\"trheader\">  \r\n                <td colspan=\"4\"></td>\r\n            </tr>\r\n            <!--tr *ngIf=\"queryParamsConcode !=' '\"-->\r\n            <tr >\r\n                <td colspan=\"4\">\r\n                <!--span class=\"col-form-span-label\"><input type=\"checkbox\" [(ngModel)]=\"CNFrance\" (change)=\"CNFonchange(CNFrance,'1')\" ><b>Consignee for MP-Cargo</b><br-->\r\n                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [(ngModel)]=\"CNFothers\"  [checked]=\"CNFothers=='Y'\"\r\n                     (change)=\"CNFonchange(CNFothers,'2')\" ><b>Consignee for OTHERS</b><br>\r\n                    <input type=\"checkbox\"  [(ngModel)]=\"CNFsourceagt\"(change)=\"CNFonchange(CNFsourceagt,'3')\" ><b>Sourcing Agent</b><br>\r\n                    </span>\r\n\r\n                </td>\r\n            </tr>  \r\n            \r\n            <tr>\r\n                <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain()\"   ><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </td>\r\n            </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/liner.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/liner.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                <tr >\r\n                    <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                        SHIPPING LINER MASTER DETAILS\r\n                    </td>\r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Short Name</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td colspan=\"3\">  <input [(ngModel)]=\"ShrtName\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                    \r\n                   \r\n                </tr>                \r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Name</b> </span><span class=\"col-form-span-error\">*</span></td> \r\n                    <td  colspan=\"3\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                            <tr >\r\n                                <td   style=\" display: flex; \"  >                        \r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"title\"  >\r\n                                   \r\n                                    <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms\">Ms</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss\">Miss</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\t\r\n                                    <option value=\"Messrs\">Messrs</option>\t\r\n                                    </select> \r\n                                    <input [(ngModel)]=\"Name\" type=\"text\"    class=\"form-control \"    >                      \r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </td> \r\n                </tr>                \r\n                <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 1</b> </span></td>         \r\n                        <td colspan=\"3\">  <input [(ngModel)]=\"addrs21\" type=\"text\"    class=\"form-control \"  maxlength=\"40\"  >   </td> \r\n                               \r\n                    </tr>\r\n                    <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 2</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs22\" type=\"text\"    class=\"form-control width250\"   maxlength=\"40\"  >   </td> \r\n                        <td><span class=\"col-form-span-label\"><b>Address 3</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs23\" type=\"text\"    class=\"form-control width180\"   maxlength=\"40\" > </td>         \r\n                    </tr>\r\n                    <tr>\r\n                       \r\n                        <td><span class=\"col-form-span-label\"><b>Pincode</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"Pincode2\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                        <td><span class=\"col-form-span-label\"><b>Pincode Position</b> </span></td>        \r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='After'\" (change)=\"position2='After'\" /><b>After</b> </span> \r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='Before'\" (change)=\"position2='Before'\" /><b>Before</b> </span>\r\n                        </td>       \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width200\"  [(ngModel)]=\"city2\" (change)=\"Countryfilter($event.target.value)\">\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                            </select>\r\n                        </td>\r\n                           <td><span class=\"col-form-span-label\"><b>Country</b> </span></td>         \r\n                        <td>  <input disabled [(ngModel)]=\"country2\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                    </tr>\r\n                    <tr>                         \r\n                        <td><span class=\"col-form-span-label\"><b>Telephone No.</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"teleno\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                        <td><span class=\"col-form-span-label\"><b>Fax No</b> </span></td>         \r\n                        <td><input [(ngModel)]=\"nofax\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                    </tr>\r\n                     \r\n                    <tr>\r\n                        <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{text}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/request-search.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/request-search.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-1\">  </div>\r\n    <div class=\"col-sm-10\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n            <tr >\r\n                <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                    Exporter Details\r\n                </td>\r\n            </tr>\r\n            <tr>   \r\n                <td><span class=\"col-form-span-label\" ><b>Search for Text:</b> </span></td>         \r\n                <td colspan=\"3\"  style=\"display: flex;\">   <span class=\"col-form-span-label\"> <input [(ngModel)]=\"Srchname\" type=\"text\"    class=\"form-control width300\"   >  </span>\r\n                    <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"searchwith=='begin'\" (change)=\"searchwith='After'\" /><b>Begin with</b> </span> \r\n                    <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"searchwith=='anywhere'\" (change)=\"searchwith='anywhere'\" /><b>Anywhere in  </b> </span>\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Search()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-search\" ></i> Search</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Cancel();\"><i class=\"fa fa-ban\"></i> Cancel</span></button>\r\n                </td> \r\n                  \r\n            </tr>\r\n            <tr *ngIf=\"Reqlist.length > 0\">\r\n                <td colspan=\"4\">\r\n                    <table class=\"table table-sm-new bgwhite\">\r\n                        <thead>\r\n                            <tr class=\"title-head formheading\">\r\n                                <th></th>\r\n                                <th>CODE</th>\r\n                                <th>EORI #</th>\r\n                                <th>PAN NO.</th>\r\n                                <th>GST NO.</th>\r\n                                <th>NAME</th>\r\n                                <th>CITY</th>\r\n                                <th>COUNTRY</th>\r\n                                <th>USER</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let obj of Reqlist  | paginate: config\">\r\n\r\n                                <td class=\"centerlabel\">\r\n                                    <span class=\"col-form-span-label\"> \r\n                                        <input type=\"checkbox\" [(ngModel)]=\"obj.CHK\" (change)=\"chkonchange(obj.CHK,obj.CODE)\"/>\r\n                                    </span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.CODE)\" style=\"cursor:pointer;\">{{obj.CODE}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.EORI}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.PANNO}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.GSTNO}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.NAME}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.CITY}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.COUNTRY}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">{{obj.USER}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls> \r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"Reqlist.length > 0\">\r\n                <td colspan=\"4\"><button class=\"btn btn-sm btn-danger\" type=\"delete\"> <span class=\"col-form-span-label\" (click)=\"delete();\"><i class=\"fa fa-trash\"></i> Delete</span></button></td>\r\n            </tr>\r\n            </table>\r\n    </div>\r\n    <div class=\"col-sm-1\">  </div>\r\n</div>\r\n        \r\n        \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/request.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/request.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/supplier.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/supplier.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                <tr >\r\n                    <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                        Supplier Details\r\n                    </td>\r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Short Name</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td>  <input [(ngModel)]=\"ShrtName\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                    <td><span class=\"col-form-span-label\"><b>EORI #</b> </span></td>         \r\n                    <td> <input [(ngModel)]=\"EORIno\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n\r\n                       \r\n                </tr>\r\n                 \r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Name</b> </span><span class=\"col-form-span-error\">*</span></td> \r\n                    <td  colspan=\"3\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                            <tr >\r\n                                <td   style=\" display: flex; \"  >                        \r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"title\"  >\r\n                                     <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms\">Ms</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss\">Miss</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\t\r\n                                    <option value=\"Messrs\">Messrs</option>\t\r\n                                    </select> \r\n                                    <input [(ngModel)]=\"Name\" type=\"text\"    class=\"form-control \"    >                      \r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </td> \r\n                </tr >   \r\n                 <tr>\r\n                   \r\n                    <td><span class=\"col-form-span-label\"><b>PAN No.</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"panno\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" > </td>    \r\n                    <td><span class=\"col-form-span-label\"><b> SERVICE TAX No.</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"servtaxno\" type=\"text\"    class=\"form-control width180\"   >   </td>   \r\n                </tr>\r\n                <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>TAN No.</b> </span></td>         \r\n                        <td colspan=\"3\">  <input [(ngModel)]=\"tanno\" type=\"text\"    class=\"form-control width180\" (change)=\"Tanchange()\"  >   </td>           \r\n                </tr>\r\n                \r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\"><span class=\"col-form-span-label\"><b>CORRESPONDENCE ADDRESS</b> </span> </td>\r\n                </tr>\r\n                <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 1</b> </span></td>         \r\n                        <td colspan=\"3\">  <input [(ngModel)]=\"addrs21\" type=\"text\"    class=\"form-control width300\"  maxlength=\"40\"  >   </td> \r\n                               \r\n                    </tr>\r\n                    <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 2</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs22\" type=\"text\"    class=\"form-control width250\"   maxlength=\"40\"  >   </td> \r\n                        <td><span class=\"col-form-span-label\"><b>Address 3</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs23\" type=\"text\"    class=\"form-control width180\"   maxlength=\"40\" > </td>         \r\n                    </tr>\r\n                    <tr>\r\n                       <td><span class=\"col-form-span-label\"><b>Pincode Position</b> </span></td>        \r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='After'\" (change)=\"position2='After'\" /><b>After</b> </span> \r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='Before'\" (change)=\"position2='Before'\" /><b>Before</b> </span>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>Pincode</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"Pincode2\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width150\"  [(ngModel)]=\"city2\" (change)=\"Countryfilter($event.target.value,'INV')\">\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>State</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"state\" type=\"text\"    class=\"form-control width180\"   > </td>     \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Country</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                        <td>  <input [(ngModel)]=\"country2\" type=\"text\"    class=\"form-control width180\"   > </td>     \r\n                        <td><span class=\"col-form-span-label\"><b>Telephone No.</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"teleno\" type=\"text\"    class=\"form-control width180\"   > </td>       \r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Fax No</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"nofax\" type=\"text\"    class=\"form-control width180\"   > </td>     \r\n                        <td> </td>         \r\n                        <td>   </td>       \r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                                <span class=\"col-form-span-label\"><input type=\"checkbox\"   [(ngModel)]=\"IS_gst_reg\" (change)=\"checkValue(IS_gst_reg?'gst':'')\"  /><b>GST DETAILS</b> </span>    \r\n                        </td>\r\n                    </tr>\r\n                    \r\n                        <tr>   \r\n                            <td><span class=\"col-form-span-label\"><b>GST No.</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                            <td>  <input [(ngModel)]=\"GstNo\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                            <td><span class=\"col-form-span-label\"><b>ARN No</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"ARNNo\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                        </tr>\r\n                        <tr>\r\n                           <td><span class=\"col-form-span-label\"><b>Contact Person</b> </span></td>        \r\n                            <td  style=\" display: flex; \" >\r\n                                <select class=\"form-control width50\"  [(ngModel)]=\"title1\"  >\r\n                                    <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms\">Ms.</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss\">Miss.</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\r\n                                </select>\r\n                                <input [(ngModel)]=\"person\" type=\"text\"    class=\"form-control width180\"   > \r\n                            </td>\r\n                            <td><span class=\"col-form-span-label\"><b>Telephone No.</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"telephone\" type=\"text\"    class=\"form-control width180\"   > </td>         \r\n                        </tr>\r\n                        <tr>                             \r\n                            <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                            <td>  <input [(ngModel)]=\"mobile\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                            <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                            <td>  <input   type=\"email\"    class=\"form-control width180\"   placeholder=\"Email\"  [(ngModel)]=\"email\" (change)=\"onChange(email)\" > \r\n                            </td>   \r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addcildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{txtchild}}</span></button>\r\n                                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetcildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\">\r\n                                <div class=\"row xyscroll\" *ngIf=\"gstlist.length > 0\">\r\n                                    <table class=\"table table-responsive-sm table-bordered\"> \r\n                                        <thead>\r\n                                            <tr class=\"col-form-span-heading\">\r\n                                                <th class=\"width50 centerlabel\"><span class=\"col-form-span-label\"></span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Invoicing Address</span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">GST No.</span></th>\r\n                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">GST ARN No.</span></th>                                                     \r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody   *ngIf=\"gstlist.length>0\">\r\n                                            <tr *ngFor=\"let obj of gstlist\">\r\n                                                <td class=\"centerlabel\">\r\n                                                    <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                                    &nbsp;\r\n                                                    <i class=\"fa fa-trash\" (click)=\"deletedtlrecd(obj.ID,obj.ISPI)\"></i>\r\n                                                </td>\r\n                                                <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.PURADDRESS1\"> </span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.GST_NO}}</span></td>\r\n                                                <td><span class=\"col-form-span-label\">{{obj.GST_ARNNO}}</span></td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </td>\r\n                        </tr> \r\n                        <!-- TDS  -->\r\n                        <tr>\r\n                            <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                                    <span class=\"col-form-span-label\"><input type=\"checkbox\"   [(ngModel)]=\"IS_TDSApp\" (change)=\"checkValue(IS_TDSApp?'TDS':'')\"  /><b>TDS DETAILS</b> </span>    \r\n                            </td>\r\n                        </tr>\r\n                        \r\n                            <tr *ngIf=\"(queryParamsReqType=='TEMP' && quryParamsSupCode!= ' ') || (queryParamsReqType==' ' && quryParamsSupCode== ' ') \r\n                            || (queryParamsReqType==' ' && quryParamsSupCode!= ' ')\">   \r\n                                <td><span class=\"col-form-span-label\"><b>Section</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                                <td>  <select class=\"form-control width150\"  [(ngModel)]=\"sections\" >\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of Sectionlist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                                </select>  </td> \r\n                                <!-- <td><span class=\"col-form-span-label\"><b>Base % Rate</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"secRate\" type=\"text\"    class=\"form-control width50\" OnlyNumber=\"true\"  > </td>          -->\r\n                            </tr>\r\n                            <tr *ngIf=\"(queryParamsReqType=='TEMP' && quryParamsSupCode!= ' ') || (queryParamsReqType==' ' && quryParamsSupCode== ' ')\r\n                            || (queryParamsReqType==' ' && quryParamsSupCode!= ' ')\">\r\n                               <td><span class=\"col-form-span-label\"><b>From Date</b> </span></td>        \r\n                                <td> \r\n                                    <my-date-picker name=\"frmdt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"frmdt\" required></my-date-picker>\r\n                                </td>\r\n                                <td><span class=\"col-form-span-label\"><b>To Date</b> </span></td>         \r\n                                <td>   \r\n                                    <my-date-picker name=\"todt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"todt\" required></my-date-picker>\r\n                                </td>         \r\n                            </tr>\r\n                            <tr *ngIf=\"(queryParamsReqType=='TEMP' && quryParamsSupCode!= ' ') || (queryParamsReqType==' ' && quryParamsSupCode== ' ')\r\n                            || (queryParamsReqType==' ' && quryParamsSupCode!= ' ') \">   \r\n                                <td><span class=\"col-form-span-label\"><b>TDS Type</b> </span></td>         \r\n                                <td>    <select class=\"form-control width150\"  [(ngModel)]=\"tdstype\"  (change)=\"EnableLDSRate($event.target.value)\"   >\r\n                                    <option value=\"\">Please Select</option>\t\r\n                                    <option value=\"BRC\">Base Rate</option>\t\r\n                                    <option value=\"LDC\">Low Deduction Certificate</option>\t\r\n                                    <option value=\"EDC\">Exemption</option>\r\n                                    \r\n                                </select></td> \r\n                                <td><span class=\"col-form-span-label\"><b>Base % Rate</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"secRate\" type=\"text\"    class=\"form-control width50\" OnlyNumber=\"true\"  > </td>                           \r\n                             \r\n                            </tr>\r\n                            <tr *ngIf=\"(queryParamsReqType=='TEMP' && quryParamsSupCode!= ' ') || (queryParamsReqType==' ' && quryParamsSupCode== ' ')\r\n                            || (queryParamsReqType==' ' && quryParamsSupCode!= ' ')\"> \r\n                                <td><span class=\"col-form-span-label\"><b>LDC % Rate</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"ldcRate\" type=\"text\" [disabled]='disableldcrate'   class=\"form-control width50\" OnlyNumber=\"true\"  > </td>         \r\n                                <td><span class=\"col-form-span-label\"><b>Amount Limit</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"tdsLimit\" type=\"text\" OnlyNumber=\"true\"   class=\"form-control width100\"  [disabled]='disablelimitamt' > </td>  \r\n                               \r\n                            </tr>\r\n                            <tr *ngIf=\"(queryParamsReqType=='TEMP' && quryParamsSupCode!= ' ') || (queryParamsReqType==' ' && quryParamsSupCode== ' ')\r\n                            || (queryParamsReqType==' ' && quryParamsSupCode!= ' ')\"> \r\n                            <td><span class=\"col-form-span-label\"><b>Company</b> </span></td>    \r\n                            <td>\r\n                                <select class=\"form-control width250\"  [(ngModel)]=\"Company\"  [disabled]='disablecompany' >\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of CompanyList\" value={{d.CMP_CODE}}>{{d.CMP_NAME}}</option>\r\n                                </select> \r\n                               </td>\r\n                                <td><span class=\"col-form-span-label\"><b>Certificate No.</b> </span></td>         \r\n                                <td>  <input [(ngModel)]=\"LdccertNo\" type=\"text\" OnlyNumber=\"true\"   class=\"form-control width100\"  [disabled]='disablecertno' > </td>  \r\n                               \r\n                            </tr>\r\n                                                        <!-- <tr>                             \r\n                                <td><span class=\"col-form-span-label\"><b>TDS Type</b> </span></td>         \r\n                                <td>    <select class=\"form-control width150\"  [(ngModel)]=\"tdstype\"  >\r\n                                    <option value=\"\">Please Select</option>\t\r\n                                    <option value=\"BRC\">Base Rate</option>\t\r\n                                    <option value=\"LDC\">Low Deduction Certificate</option>\t\r\n                                    <option value=\"EDC\">Exemption</option>\r\n                                    \r\n                                </select></td>  \r\n                            </tr> -->\r\n                            <tr *ngIf=\"(queryParamsReqType=='TEMP' && quryParamsSupCode!= ' ') || (queryParamsReqType==' ' && quryParamsSupCode== ' ')\r\n                            || (queryParamsReqType==' ' && quryParamsSupCode!= ' ')\">\r\n                                <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"AddTDScildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{txtchildTDS}}</span></button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"ResetTDScildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"4\">\r\n                                    <div class=\"row xyscroll\" style=\"overflow-y: auto; width:715px\" *ngIf=\"TdsList.length > 0\">\r\n\r\n                                        \r\n                                        <table class=\"table table-responsive-sm table-bordered\"> \r\n                                            <thead>\r\n                                                <tr class=\"col-form-span-heading\">\r\n                                                    <th class=\"width50 centerlabel\"><span class=\"col-form-span-label\"></span></th>\r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">SECTIONS</span></th>\r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">RATE</span></th>\r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">FROM DT</span></th>   \r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">TO DT</span></th>     \r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">LIMIT</span></th>        \r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">TDS TYPE</span></th>   \r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">LDC RATE</span></th>   \r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">LDC CERTNO</span></th>  \r\n                                                    <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">COMPANY</span></th>                                                                                                        \r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody   *ngIf=\"TdsList.length>0\">\r\n                                                <tr *ngFor=\"let obj of TdsList\">\r\n                                                    <td class=\"centerlabel\">\r\n                                                        <i class=\"fa fa-pencil\" (click)=\"EDIT_Tds(obj.PKID)\" ></i>\r\n                                                        <!-- &nbsp;\r\n                                                        <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.PKID)\"></i> -->\r\n                                                    </td>\r\n                                                    <td><span class=\"col-form-span-label\" >   {{obj.SECTIONS_NME}} </span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.PER_RATE}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.FRMDT}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.TODT}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.TDS_LIMIT_AMT}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.TDS_TYPE }}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.LDCRATE }}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.LDCCERTNO }}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\">{{obj.CMP_NAME }}</span></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </td>\r\n                            </tr> \r\n\r\n                        <!-- END TDS  -->\r\n                        <tr>                    \r\n                            <td colspan=\"4\"  (click)=\"getcollapse(CHECKC1,'contact1')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 1 DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr *ngIf =\"CHECKC1==true\">                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle1\"  >\r\n                                            <option value=\"Mr.\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs.\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr.\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname1\" type=\"text\" class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail1\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail1)\"  > </td>    \r\n                                </tr> \r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                       \r\n                        <tr>                    \r\n                            <td colspan=\"4\"  (click)=\"getcollapse(CHECKC2,'contact2')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 2 DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr *ngIf =\"CHECKC2==true\">                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                        <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle2\"  >\r\n                                            <option value=\"Mr.\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs.\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr.\">Dr.</option>\r\n                                            </select>  \r\n                                            <input [(ngModel)]=\"Cname2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"CDesignation2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr>  \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Ctelphone2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cfaxno2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr> \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cmobileno2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cemail2\" type=\"text\"    class=\"form-control width180\"   (change)=\"onChange(Cemail2)\"  > </td>    \r\n                                    </tr>     \r\n                                </table>\r\n                            </td>\r\n                        </tr> \r\n                    <tr>                    \r\n                        <td colspan=\"4\"  (click)=\"getcollapse(CHECKC3,'contact3')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 3 DETAILS</b></span></td>\r\n                    </tr>\r\n                    <tr *ngIf =\"CHECKC3==true\">                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle3\"  >\r\n                                        <option value=\"Mr.\">Mr.</option>\t\r\n                                        <option value=\"Ms\">Ms.</option>\t\r\n                                        <option value=\"Mrs.\">Mrs.</option>\r\n                                        <option value=\"Miss\">Miss.</option>\r\n                                        <option value=\"Dr.\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail3\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail3)\"  > </td>    \r\n                                </tr> \r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n            \r\n                      \r\n                    <tr>                    \r\n                        <td colspan=\"4\"  (click)=\"getcollapse(CHECKC4,'contact4')\" style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 4 DETAILS</b></span></td>\r\n                    </tr>\r\n                    <tr *ngIf =\"CHECKC4==true\">                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle4\"  >\r\n                                        <option value=\"Mr.\">Mr.</option>\t\r\n                                        <option value=\"Ms\">Ms.</option>\t\r\n                                        <option value=\"Mrs.\">Mrs.</option>\r\n                                        <option value=\"Miss\">Miss.</option>\r\n                                        <option value=\"Dr.\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail4\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail4)\"   > </td>    \r\n                                </tr> \r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"trheader\">\r\n                        <td  colspan=\"4\"><span class=\"col-form-span-label\"><b>SHIPMENT DETAILS</b> </span> </td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <div>\r\n                                <span class=\"col-form-span-label\">  <input type=\"checkbox\" \r\n                                (change)=\"Airline = $event.target.checked ? 'Y': ''\"  name=\"Airline\"\r\n                                  [(ngModel)]=\"Airline\">&nbsp;Air Line &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>\r\n                                <!-- <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"Airline=='Y'\"  (change)= \"Airline='Y'\" />&nbsp;Air Line &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> -->\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"AirlineAgent=='Y'\" (change)=\"AirlineAgent='Y'\"/>&nbsp;Air Line Agent &nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"shipAgent=='Y'\"(change)=\"shipAgent='Y'\" />&nbsp;shipping Line / Agent &nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"warehousse=='Y'\"(change)=\"warehousse='Y'\" />&nbsp;Warehouse Provider &nbsp;&nbsp;&nbsp;&nbsp;</span><br> <br>\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"Tranporter=='Y'\" (change)=\"Tranporter='Y'\"/>&nbsp;Transporter &nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"BusAssociate=='Y'\" (change)=\"BusAssociate='Y'\" />&nbsp;Business Associates\t&nbsp;&nbsp;&nbsp;&nbsp; </span>\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"Franwarehouse=='Y'\"(change)=\"Franwarehouse='Y'\" />&nbsp;France Warehouse &nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                                <span class=\"col-form-span-label\"> <input type=\"checkbox\"  [checked]=\"other=='Y'\" (change)=\"other='Y'\" />&nbsp;Others  &nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Air Line Code</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Airlinecode\" type=\"text\"  maxlength=\"3\"   class=\"form-control width180\"> </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>City Code forBA</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CitycodeA\" type=\"text\"    class=\"form-control width180\"> </td>    \r\n                    </tr>\r\n                    <tr class=\"trheader\">\r\n                        <td  colspan=\"4\"><span class=\"col-form-span-label\"><b>BRANCH LIST</b> </span> </td>\r\n                    </tr>\r\n                               \r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <div class=\"row xyscroll\" >\r\n                                    <table class=\"table table-responsive-sm table-bordered\"> \r\n                                        <thead>\r\n                                            <tr class=\"col-form-span-heading\">\r\n                                                \r\n                                                <th class=\"width100 centerlabel\" colspan=\"3\"><span class=\"col-form-span-label\">City</span></th>\r\n                                                <th class=\"width100 centerlabel\"></th>                                                       \r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                                <tr *ngFor=\"let obj of citybranchlict; let i = index\">                                                        \r\n                                                    <td colspan=\"3\"><span class=\"col-form-span-label\">{{obj.CITYNAME}}</span></td>\r\n                                                    <td><span class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.CLIENTLOC\" (change)=\"chkonchange(obj.CITYCODE,obj.CLIENTLOC)\"/> </span></td>\r\n                                                    \r\n                                                </tr>\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                            </div>\r\n                        </td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{text}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/request/vessel_Agent.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/request/vessel_Agent.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                <tr >\r\n                    <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                        Supplier Details\r\n                    </td>\r\n                </tr>\r\n                <tr>   \r\n                    <td><span class=\"col-form-span-label\"><b>Short Name</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td>  <input [(ngModel)]=\"ShrtName\" type=\"text\"    class=\"form-control width180\"   >   </td> \r\n                    \r\n                    <td><span class=\"col-form-span-label\"><b>PAN No.</b> </span></td>         \r\n                    <td>  <input [(ngModel)]=\"panno\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" > </td>  \r\n                </tr>                \r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Name</b> </span><span class=\"col-form-span-error\">*</span></td> \r\n                    <td  colspan=\"3\" >\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                            <tr >\r\n                                <td   style=\" display: flex; \"  >                        \r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"title\"  >\r\n                                   \r\n                                    <option value=\"Mr.\">Mr.</option>\t\r\n                                    <option value=\"Ms\">Ms</option>\t\r\n                                    <option value=\"Mrs.\">Mrs.</option>\r\n                                    <option value=\"Miss\">Miss</option>\r\n                                    <option value=\"Dr.\">Dr.</option>\t\r\n                                    <option value=\"Messrs\">Messrs</option>\t\r\n                                    </select> \r\n                                    <input [(ngModel)]=\"Name\" type=\"text\"    class=\"form-control \"    >                      \r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </td> \r\n                </tr>                \r\n                <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 1</b> </span></td>         \r\n                        <td colspan=\"3\">  <input [(ngModel)]=\"addrs21\" type=\"text\"    class=\"form-control \"  maxlength=\"40\"  >   </td> \r\n                               \r\n                    </tr>\r\n                    <tr>   \r\n                        <td><span class=\"col-form-span-label\"><b>Address 2</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs22\" type=\"text\"    class=\"form-control width250\"   maxlength=\"40\"  >   </td> \r\n                        <td><span class=\"col-form-span-label\"><b>Address 3</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"addrs23\" type=\"text\"    class=\"form-control width180\"   maxlength=\"40\" > </td>         \r\n                    </tr>\r\n                    <tr>\r\n                       \r\n                        <td><span class=\"col-form-span-label\"><b>Pincode</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"Pincode2\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                        <td><span class=\"col-form-span-label\"><b>Pincode Position</b> </span></td>        \r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='After'\" (change)=\"position2='After'\" /><b>After</b> </span> \r\n                            <span class=\"col-form-span-label\"><input type=\"radio\"   [checked]=\"position2=='Before'\" (change)=\"position2='Before'\" /><b>Before</b> </span>\r\n                        </td>       \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width150\"  [(ngModel)]=\"city2\" (change)=\"Countryfilter($event.target.value)\">\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                            </select>\r\n                        </td>\r\n                           <td><span class=\"col-form-span-label\"><b>Country</b> </span></td>         \r\n                        <td>  <input disabled [(ngModel)]=\"country2\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                    </tr>\r\n                    <tr>                         \r\n                        <td><span class=\"col-form-span-label\"><b>Telephone No.</b> </span></td>         \r\n                        <td>  <input [(ngModel)]=\"teleno\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                        <td><span class=\"col-form-span-label\"><b>Fax No</b> </span></td>         \r\n                        <td><input [(ngModel)]=\"nofax\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                    </tr>\r\n                    \r\n                     <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>SHPG Line 1</b> </span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width280\"  [(ngModel)]=\"SHPGLine1\"  >\r\n                                <option value=\"SELF\">--Self--</option>\r\n                                <option *ngFor=\"let d of this.Shipgline \" value={{d.liner_code}}>{{d.liner_name}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>SHPG Line 2</b> </span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width280\"  [(ngModel)]=\"SHPGLine2\" >\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of this.Shipgline\" value={{d.liner_code}}>{{d.liner_name}}</option>\r\n                            </select>\r\n                        </td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>SHPG Line 3</b> </span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width280\"  [(ngModel)]=\"SHPGLine3\"  >\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of this.Shipgline\" value={{d.liner_code}}>{{d.liner_name}}</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><span class=\"col-form-span-label\"><b>SHPG Line 4</b> </span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width280\"  [(ngModel)]=\"SHPGLine4\"  >\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of this.Shipgline\" value={{d.liner_code}}>{{d.liner_name}}</option>\r\n                            </select>\r\n                        </td>\r\n                     </tr>\r\n                        \r\n                        <tr>                    \r\n                            <td colspan=\"4\"    style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 1 DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr  >                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle1\"  >\r\n                                            <option value=\"Mr.\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs.\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr.\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname1\" type=\"text\" class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno1\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno1\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail1\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail1)\"  > </td>    \r\n                                </tr> \r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                       \r\n                        <tr>                    \r\n                            <td colspan=\"4\"   style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 2 DETAILS</b></span></td>\r\n                        </tr>\r\n                        <tr  >                        \r\n                            <td   colspan=\"4\">                                \r\n                                <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                        <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle2\"  >\r\n                                            <option value=\"Mr.\">Mr.</option>\t\r\n                                            <option value=\"Ms\">Ms.</option>\t\r\n                                            <option value=\"Mrs.\">Mrs.</option>\r\n                                            <option value=\"Miss\">Miss.</option>\r\n                                            <option value=\"Dr.\">Dr.</option>\r\n                                            </select>  \r\n                                            <input [(ngModel)]=\"Cname2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"CDesignation2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr>  \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Ctelphone2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cfaxno2\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                    </tr> \r\n                                    <tr>  \r\n                                        <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cmobileno2\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                        <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                        <td>  <input [(ngModel)]=\"Cemail2\" type=\"text\"    class=\"form-control width180\"   (change)=\"onChange(Cemail2)\"  > </td>    \r\n                                    </tr>     \r\n                                </table>\r\n                            </td>\r\n                        </tr> \r\n                    <tr>                    \r\n                        <td colspan=\"4\"   style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 3 DETAILS</b></span></td>\r\n                    </tr>\r\n                    <tr  >                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle3\"  >\r\n                                        <option value=\"Mr.\">Mr.</option>\t\r\n                                        <option value=\"Ms\">Ms.</option>\t\r\n                                        <option value=\"Mrs.\">Mrs.</option>\r\n                                        <option value=\"Miss\">Miss.</option>\r\n                                        <option value=\"Dr.\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno3\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno3\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail3\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail3)\"  > </td>    \r\n                                </tr> \r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n            \r\n                      \r\n                    <tr>                    \r\n                        <td colspan=\"4\"    style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">CONTACT 4 DETAILS</b></span></td>\r\n                    </tr>\r\n                    <tr  >                        \r\n                        <td   colspan=\"4\">                                \r\n                            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Name</b> </span></td>         \r\n                                    <td  style=\" display: flex; \" > <select class=\"form-control width50\"  [(ngModel)]=\"Ctitle4\"  >\r\n                                        <option value=\"Mr.\">Mr.</option>\t\r\n                                        <option value=\"Ms\">Ms.</option>\t\r\n                                        <option value=\"Mrs.\">Mrs.</option>\r\n                                        <option value=\"Miss\">Miss.</option>\r\n                                        <option value=\"Dr.\">Dr.</option>\r\n                                        </select>  \r\n                                        <input [(ngModel)]=\"Cname4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>Designation</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"CDesignation4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr>  \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Telephone No. (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Ctelphone4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>FAX (Direct)</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cfaxno4\" type=\"text\"    class=\"form-control width180\"   > </td>    \r\n                                </tr> \r\n                                <tr>  \r\n                                    <td><span class=\"col-form-span-label\"><b>Mobile No.</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cmobileno4\" type=\"text\"    class=\"form-control width180\"   > </td> \r\n                                    <td><span class=\"col-form-span-label\"><b>E-Mail</b> </span></td>         \r\n                                    <td>  <input [(ngModel)]=\"Cemail4\" type=\"text\"    class=\"form-control width180\"  (change)=\"onChange(Cemail4)\"   > </td>    \r\n                                </tr> \r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                   \r\n                 \r\n                               \r\n                   \r\n                    <tr>\r\n                        <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{text}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/request/client.component.ts":
/*!****************************************************!*\
  !*** ./src/app/master/request/client.component.ts ***!
  \****************************************************/
/*! exports provided: clientmaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientmaster", function() { return clientmaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var clientmaster = /** @class */ (function () {
    function clientmaster(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService, http, _configuration
    //private http1: Http   
    ) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.http = http;
        this._configuration = _configuration;
        this.CHECK = null;
        this.CHECKB = null;
        this.CHECKC1 = null;
        this.CHECKC2 = null;
        this.CHECKC3 = null;
        this.CHECKC4 = null;
        this.CHECKC5 = null;
        this.Header = "Exporter Details";
        this.ShrtName = "";
        this.panno = "";
        this.title = "Messrs";
        this.Name = "";
        this.EORIno = "";
        this.addrs1 = "";
        this.addrs2 = "";
        this.addrs3 = "";
        this.position = "After";
        this.Pincode = "";
        this.city = "";
        this.country = "";
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.position2 = "After";
        this.Pincode2 = "";
        this.city2 = "";
        this.state = "";
        this.country2 = "";
        this.GST = true;
        this.GstNo = "";
        this.ARNNo = "";
        this.title1 = "Mr";
        this.person = "";
        this.telephone = "";
        this.mobile = "";
        this.email = "";
        this.SOexport = "";
        this.telphone1 = "";
        this.faxno1 = "";
        this.email1 = "";
        this.rbicode = "";
        this.imno = "";
        this.itno = "";
        this.bankername = "";
        this.custpono = "";
        this.ieccode = "";
        this.typeexpo = "(R) Merchant";
        this.typeexpohouse = "(EH) Export House";
        this.exp_typeb = "(P) Private";
        this.servtaxno = "";
        this.tanno = "";
        this.bnkaddss1 = "";
        this.bnkaddss2 = "";
        this.bnkAcctno = "";
        this.bnkauthdealercode = "";
        this.RBIwaiverno = "";
        this.bnkCommissionrate = "";
        this.bnkRange = "";
        this.bkacctnoSBI = "";
        this.Ctitle1 = "Mr";
        this.Cname1 = "";
        this.CDesignation1 = "";
        this.Ctelphone1 = "";
        this.Cfaxno1 = "";
        this.Cmobileno1 = "";
        this.Cemail1 = "";
        this.Ctitle2 = "Mr";
        this.Cname2 = "";
        this.CDesignation2 = "";
        this.Ctelphone2 = "";
        this.Cfaxno2 = "";
        this.Cmobileno2 = "";
        this.Cemail2 = "";
        this.Ctitle3 = "Mr";
        this.Cname3 = "";
        this.CDesignation3 = "";
        this.Ctelphone3 = "";
        this.Cfaxno3 = "";
        this.Cmobileno3 = "";
        this.Cemail3 = "";
        this.Ctitle4 = "Mr";
        this.Cname4 = "";
        this.CDesignation4 = "";
        this.Ctelphone4 = "";
        this.Cfaxno4 = "";
        this.Cmobileno4 = "";
        this.Cemail4 = "";
        this.itcgrpcode = "";
        this.exphouseno = "";
        this.statetinno = "";
        this.Citylist = [];
        this.gstlist = [];
        this.TmpcitybranchObject = {};
        this.childrecdid = "";
        this.exp_id = "0";
        this.queryParamsReqType = "";
        this.quryParamsExpCode = "";
        this.validEmail = false;
        this.exphousedt = "";
        this.exphouse = "";
        this.bnkDivision = "";
        this.exp_city = [];
        this.imp_city = [];
        this.sorc_city = [];
        this.fileData = null;
        this.uploadedFilePath = null;
        this.doctype = "PANC";
        this.text = "Submit";
        this.txtchild = "Add";
        this.Concode = "";
        this.selectedFileNames = [];
        this.isLoadingData = false;
        this.isoverseasagent = "0";
        this.overseasagent = false;
        this.uploadResult = [];
        this.ISSEZCLIENT = false;
        this.disablechkIsSez = false;
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
        this.actionUrl = _configuration.ServerWithApiUrl;
    }
    clientmaster.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsReqType = params["ReqType"];
            _this.quryParamsExpCode = params["ExpCode"];
        });
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this._dataService.getData("Master/masterpageload", jsonmaster)
            .subscribe(function (data) {
            // this.Citylist=data.Table;
        });
        this.loaderService.display(true);
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
        this._dataService.getAll("Master/Fill_BranchCity")
            .subscribe(function (data) {
            _this.citybranchlict = data.Table;
            _this.loaderService.display(false);
        });
        // console.log(this._loginService.getLogin()[0]);
        if (this.queryParamsReqType == 'isExporter') {
            this._loginService.verifyRights(123, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
            this.populate_AddExpoter();
        }
        else if (this.queryParamsReqType == 'TEMP' && this.quryParamsExpCode != ' ') {
            this._loginService.verifyRights(104, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'EXPORTER DETAILS - UPDATE REQUEST';
            this.editpopulate();
        }
        else if (this.queryParamsReqType == ' ' && this.quryParamsExpCode != ' ') {
            this._loginService.verifyRights(104, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'EXPORTER DETAILS - UPDATE';
            this.editpopulate();
            this.text = 'Update';
        }
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsExpCode == ' ') { //no rights to request
            this.Header = 'EXPORTER DETAILS - REQUEST TO ADD';
        }
        if (this.queryParamsReqType == ' ' && this.quryParamsExpCode == ' ') {
            this._loginService.verifyRights(104, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
            this.Header = 'EXPORTER DETAILS - ADD';
            //    this.editpopulate();
        }
        //populate_AddExpoter
    };
    clientmaster.prototype.getcollapse = function (chk, section) {
        if (section == 'other') {
            if (chk == 'null') {
                this.CHECK = true;
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
                this.CHECKC5 = 'null';
            }
            else {
                this.CHECK = 'null';
            }
        }
        if (section == 'bank') {
            if (chk == 'null') {
                this.CHECKB = true;
                this.CHECK = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
                //this.CHECKC5='null';                
            }
            else {
                this.CHECKB = 'null';
            }
        }
        if (section == 'contact1') {
            if (chk == 'null') {
                this.CHECKC1 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
                // this.CHECKC5='null'; 
            }
            else {
                this.CHECKC1 = 'null';
            }
        }
        if (section == 'contact2') {
            if (chk == 'null') {
                this.CHECKC2 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
                //this.CHECKC5='null';   
            }
            else {
                this.CHECKC2 = 'null';
            }
        }
        if (section == 'contact3') {
            if (chk == 'null') {
                this.CHECKC3 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC4 = 'null';
                //this.CHECKC5='null';  
            }
            else {
                this.CHECKC3 = 'null';
            }
        }
        if (section == 'contact4') {
            if (chk == 'null') {
                this.CHECKC4 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                // this.CHECKC5='null'; 
            }
            else {
                this.CHECKC4 = 'null';
            }
        }
        // if (section=='doc')
        // {
        //     if (chk=='null')
        //     {   this.CHECKC5=true;
        //         this.CHECK='null';
        //         this.CHECKB='null';
        //         this.CHECKC1='null';
        //         this.CHECKC2='null';
        //         this.CHECKC3='null'
        //         this.CHECKC4='null';   }
        //     else
        //     {this.CHECKC5='null';}
        // }         
    };
    clientmaster.prototype.Countryfilter = function (citycode, type) {
        this.listcnt = this.Citylist.filter(function (cntrylist) { return cntrylist.DATAVALUEFIELD == citycode; });
        if (type == 'DOC') {
            this.country = this.listcnt[0].CITY_COUNTRY;
            this.expcountrycode = this.listcnt[0].ISO_COUNTRY_CODE;
        }
        if (type == 'INV') {
            this.state = this.listcnt[0].STATE_NAME;
            this.country2 = this.listcnt[0].CITY_COUNTRY;
            this.statetinno = this.listcnt[0].STATE_NO;
            this.countrycode = this.listcnt[0].ISO_COUNTRY_CODE;
        }
    };
    clientmaster.prototype.Addcildrcrd = function () {
        var _this = this;
        if (this.country2 == 'INDIA') {
            var isgstreg = void 0;
            //  if (this.GST=='gst')
            if (this.GST == true) {
                if (this.GstNo != '') {
                    if (this.GstNo.length != 15) {
                        this._toasterService.toast('warning', 'warning', 'GST No Should be 15 characters !');
                        return false;
                    }
                    else if (this.GstNo.length == 15) {
                        isgstreg = this.GstNo.substring(0, 2);
                        this.Countryfilter(this.city2, 'INV');
                        if (this.statetinno != isgstreg) {
                            this._toasterService.toast('warning', 'warning', 'Invalid GST No. for ' + this.state + " . Please enter the GST No. Starting Two digit match with state code is " + this.state);
                            return false;
                        }
                    }
                }
                else {
                    this._toasterService.toast('warning', 'warning', 'GST No Should not be blank !');
                    return false;
                }
            }
            else {
                if (confirm('Are you sure want add without GST!')) { }
                else {
                    return false;
                }
            }
        }
        else if (this.country2 == '') {
            this._toasterService.toast('warning', 'warning', 'Please Select City to add invoice address.');
            return false;
        }
        this.loaderService.display(true);
        var jsonmasterchild = { childrecdId: this.childrecdid, exp_invadd1: this.addrs21.replace("'", "`"), exp_invadd2: this.addrs22.replace("'", "`"),
            exp_invadd3: this.addrs23.replace("'", "`"), exp_invpincode: this.Pincode2, exp_invpinposition: this.position2,
            exp_invcity: this.city2, vguid: this._loginService.getLogin()[0].GUID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            MakerID: this._loginService.getLogin()[0].CMPID,
            EXP_GSTNO: this.GstNo, EXP_GSTARNNO: this.ARNNo,
            EXP_GSTtitle: this.title1, Exp_GSTcontP: this.person,
            Exp_GSTtelno: this.telephone, EXP_GSTMobno: this.mobile,
            EXP_GSTcontemail: this.email,
            expid: this.exp_id,
            reqmode: this.queryParamsReqType
        };
        this._dataService.Common("Master/exporter_child_IU", jsonmasterchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.gstlist = data.Table1;
                _this.loaderService.display(false);
                _this.Resetcildrcrd();
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
        this.txtchild = "Add";
    };
    clientmaster.prototype.Resetcildrcrd = function () {
        this.childrecdid = "";
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.Pincode2 = "";
        this.position2 = "";
        this.city2 = "";
        this.GstNo = "";
        this.ARNNo = "";
        this.title1 = "";
        this.person = "";
        this.telephone = "";
        this.mobile = "";
        this.email = "";
        this.txtchild = "Add";
    };
    clientmaster.prototype.Editchildrecd = function (id) {
        var filterData = this.gstlist.filter(function (filter) { return filter.ID == id; })[0];
        this.childrecdid = filterData.ID;
        this.addrs21 = filterData.INVADD1;
        this.addrs22 = filterData.INVADD2;
        this.addrs23 = filterData.INVADD3;
        this.Pincode2 = filterData.INPINCODE;
        this.position2 = filterData.INVPINPOS;
        this.city2 = filterData.INVCITY;
        this.state = filterData.INVSTATE;
        this.country2 = filterData.INVCOUNTRY;
        this.GstNo = filterData.GST_NO;
        this.ARNNo = filterData.GST_ARNNO;
        this.title1 = filterData.GSTTITLE;
        this.person = filterData.GSTCONTP;
        this.telephone = filterData.GSTTELNO;
        this.mobile = filterData.GSTMOBNO;
        this.email = filterData.GSTCONTEMAIL;
        this.statetinno = filterData.INVSTATETIN;
        this.txtchild = "Update";
        if (filterData.GST_NO != '') {
            this.GST = true;
            this.checkValue('gst');
        }
        else {
            this.GST = false;
            this.checkValue('');
        }
    };
    clientmaster.prototype.deletechildrecd = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsonmaster = { id: id, guid: this._loginService.getLogin()[0].GUID, makerid: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData("Master/exporter_child_delete", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.gstlist = data.Table1;
                    _this.loaderService.display(false);
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
    };
    //  onChange(newValue) {          
    //     const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (validEmailRegEx.test(newValue)) {
    //         this.validEmail = true;
    //         this._toasterService.toast('warning', 'warning', 'Enter valid E-mail !');            
    //     }else {
    //       this.validEmail = false;
    //       this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
    //     }
    //   }
    clientmaster.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
        }
    };
    clientmaster.prototype.Tanchange = function () {
        if (this.tanno != '') {
            var Tan_3 = void 0, Tan_5 = void 0, Tan_9 = void 0;
            Tan_3 = this.tanno.substring(0, 4);
            Tan_5 = this.tanno.substring(4, 9);
            Tan_9 = this.tanno.substring(9, 10);
            if (this.tanno.length < 10) {
                this._toasterService.toast('warning', 'warning', 'TAN No Should be 10 characters !');
                return false;
            }
            var validTanAlphaRegEx = /^[A-Za-z]+$/;
            if (validTanAlphaRegEx.test(Tan_3)) {
            }
            else {
                this._toasterService.toast('warning', 'warning', 'TAN No first 4 characters should be an Alphabet');
                return false;
            }
            var validTanNumRegEx = /^[0-9]*$/;
            if (validTanNumRegEx.test(Tan_5)) {
            }
            else {
                this._toasterService.toast('warning', 'warning', 'TAN No 4-9 characters should be Numeric');
                return false;
            }
            if (validTanAlphaRegEx.test(Tan_9)) {
            }
            else {
                this._toasterService.toast('warning', 'warning', 'TAN No last characters should be an Alphabet');
                return false;
            }
        }
    };
    clientmaster.prototype.chkonchange = function (citycode, chk, type) {
        if (type == 'E') {
            if (chk == true) {
                this.exp_city = this.exp_city + ',' + citycode;
                this.exp_city = this.exp_city.replace(',,', ',');
            }
            else {
                this.exp_city = this.exp_city.replace(citycode, '');
                this.exp_city = this.exp_city.replace(',,', ',');
            }
        }
        if (type == 'I') {
            if (chk == true) {
                this.imp_city = this.imp_city + ',' + citycode;
                this.imp_city = this.imp_city.replace(',,', '');
            }
            else {
                this.imp_city = this.imp_city.replace(citycode, '');
                this.imp_city = this.imp_city.replace(',,', '');
            }
        }
        if (type == 'S') {
            if (chk == true) {
                this.sorc_city = this.sorc_city + ',' + citycode;
                this.imp_city = this.imp_city.replace(',,', '');
            }
            else {
                this.sorc_city = this.sorc_city.replace(citycode, '');
                this.sorc_city = this.sorc_city.replace(',,', '');
            }
        }
    };
    /*
   
   fileChangeEvent(fileInput: any)
       {
           //Clear Uploaded Files result message
           this.uploadResult = "";
           this.filesToUpload = <Array<File>>fileInput.target.files;
    
           for (let i = 0; i < this.filesToUpload.length; i++)
           {
               this.selectedFileNames.push(this.filesToUpload[i].name);
           }
           return false;
       }
       upload()
       {
           if (this.filesToUpload.length == 0)
           {
               alert('Please select at least 1  files to upload!');
           }
           else
           {  this.uploadFiles(); }
       }
   
       validatePDFSelectedOnly(filesSelected: string[])
       {
           for (var i = 0; i < filesSelected.length; i++)
           {
               if (filesSelected[i].slice(-3).toUpperCase() != "PDF")
               {
                   alert('Please selecte PDF files only!');
                   return false;
               }
               else {
                   return true;
               }
           }
       }
    
       uploadFiles()
       {
           this.uploadResult = "";
    
           if (this.filesToUpload.length > 0)
           {
               this.filesToUpload[0].size;
               this.isLoadingData = true;
               let formData: FormData = new FormData();
               formData.append('uploadedFiles', this.filesToUpload[0], this.filesToUpload[0].name);
               formData.append('cmpid', this._loginService.getLogin()[0].CMPID);
               formData.append('DOCTYPE',this.doctype)
               formData.append('guid', this._loginService.getLogin()[0].GUID)
               formData.append('filesize', this.filesToUpload[0].size.toString());
               formData.append('Makerip', this._loginService.getLogin()[0].MAKERIP);
   
               let apiUrl =this.actionUrl+ "Master/UploadFiles";
               this.http.post(apiUrl, formData )
                 .subscribe((data: any) => {
                           this.uploadResult = data.Table;
                       },
                       err => {
                           this.isLoadingData = false;
                           alert("File Upload successfully !");
                       },
                       () => {
                           this.isLoadingData = false,
                           this.fileUploadVar.nativeElement.value = "";
                           this.selectedFileNames = [];
                           this.filesToUpload = [];
                       } );
                   }
           }
      
           deletefiles(id,ACT_FILENAME)
           {
            if(confirm('Are you sure want to delete the file ?'))
            {   this.loaderService.display(true);
               const jsonmaster = { PKID  : id,FILENAME: ACT_FILENAME ,CMPID :this._loginService.getLogin()[0].CMPID,GUID :this._loginService.getLogin()[0].GUID}
               this._dataService.getData("Master/RemoveUploadFiles", jsonmaster)
               .subscribe((data: any) => {
                   if (data.Table[0].STATUS == "100") {
                       this.uploadResult=data.Table;
                       this.loaderService.display(false);
                   }
               });
           }
           else{return false;  this.loaderService.display(false);}
           }
     */
    clientmaster.prototype.Add_Main = function () {
        var _this = this;
        if (this.ShrtName.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Short name could not be blank !');
            return false;
        }
        if (this.Name.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Name could not be blank !');
            return false;
        }
        if (this.city.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Please select City !');
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            id: this.exp_id,
            exp_sname: this.ShrtName.replace("'", "`"),
            exp_title: this.title,
            exp_name: this.Name.replace("'", "`"),
            exp_panno: this.panno,
            exp_EORINUMBER: this.EORIno,
            exp_add1: this.addrs1.replace("'", "`"),
            exp_add2: this.addrs2.replace("'", "`"),
            exp_add3: this.addrs3.replace("'", "`"),
            exp_pincode: this.Pincode,
            exp_pinposition: this.position,
            exp_city: this.city,
            exp_country: this.expcountrycode,
            exp_invadd1: this.addrs21.replace("'", "`"),
            exp_invadd2: this.addrs22.replace("'", "`"),
            exp_invadd3: this.addrs23.replace("'", "`"),
            exp_invpincode: this.Pincode2,
            exp_invpinposition: this.position2,
            exp_invcity: this.city2,
            exp_invcountry: this.countrycode,
            exp_state: this.SOexport,
            exp_telno: this.telphone1,
            exp_faxno: this.faxno1,
            exp_telex: '',
            exp_email: this.email1,
            exp_rbicode: this.rbicode,
            exp_imno: this.imno,
            exp_itno: this.itno,
            exp_bank: this.bankername,
            exp_custpno: this.custpono,
            exp_ieccode: this.ieccode,
            exp_hscertno: this.exphouse,
            exp_hscertdt: this.exphousedt === null ? this.exphousedt.formatted : '',
            exp_certvaliddt: this.exphouse === null ? this.exphouse.formatted : '',
            exp_ItcGroupcode: this.itcgrpcode,
            exp_typea: this.typeexpo,
            exp_typeb: this.exp_typeb,
            exp_expthouse: this.typeexpohouse,
            exp_servicetax: this.servtaxno,
            TANNO: this.tanno,
            exp_bankaddr1: this.bnkaddss1,
            exp_bankaddr2: this.bnkaddss2,
            exp_acctno1: this.bnkAcctno,
            exp_delarcode: this.bnkauthdealercode,
            exp_rbiwaiverno: this.RBIwaiverno,
            exp_commrate: this.bnkCommissionrate,
            exp_division: this.bnkDivision,
            exp_range: this.bnkRange,
            exp_acctno: this.bkacctnoSBI,
            exp_title1: this.Ctitle1,
            exp_contact1: this.Cname1.replace("'", "`"),
            exp_cont1email: this.Cemail1,
            exp_telno1: this.Ctelphone1,
            exp_faxno1: this.Cfaxno1,
            exp_designation1: this.CDesignation1,
            exp_mobile1: this.Cmobileno1,
            exp_title2: this.Ctitle2,
            exp_contact2: this.Cname2.replace("'", "`"),
            exp_cont2email: this.Cemail2,
            exp_telno2: this.Ctelphone2,
            exp_faxno2: this.Cfaxno2,
            exp_designation2: this.CDesignation2,
            exp_mobile2: this.Cmobileno2,
            exp_title3: this.Ctitle3,
            exp_contact3: this.Cname3.replace("'", "`"),
            exp_cont3email: this.Cemail3,
            exp_telno3: this.Ctelphone3,
            exp_faxno3: this.Cfaxno3,
            exp_designation3: this.CDesignation3,
            exp_mobile3: this.Cmobileno3,
            exp_title4: this.Ctitle4,
            exp_contact4: this.Cname4.replace("'", "`"),
            exp_cont4email: this.Cemail4,
            exp_telno4: this.Ctelphone4,
            exp_faxno4: this.Cfaxno4,
            exp_designation4: this.CDesignation4,
            exp_mobile4: this.Cmobileno4,
            con_code: (this.queryParamsReqType == 'isExporter') ? this.Concode : '',
            exporterin: '',
            importerin: '',
            exporterfr: '',
            importerfr: '',
            exporter: this.exp_city,
            importer: this.imp_city,
            srcagent: this.sorc_city,
            consignee: '',
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            RequestMode: this.queryParamsReqType,
            EXP_GSTNO: '',
            EXP_GSTARNNO: '',
            Exp_GSTcontP: '',
            Exp_GSTtelno: '',
            EXP_GSTMobno: '',
            EXP_GSTcontemail: '',
            VGUID: this._loginService.getLogin()[0].GUID,
            // ISSEZCLIENT: (this.ISSEZCLIENT==true) ?'1':'0',
            // SIRENNO:this.sirenno,
            ISSEZCLIENT: (this.ISSEZCLIENT == true) ? '1' : '0',
            CREDITPERIOD_SEA: this.crperiodsea,
            CREDITPERIOD_AIR: this.crperiodair,
            ISOVERSEASAGENT: this.isoverseasagent,
        };
        this._dataService.Common("Master/exporter_Main_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsExpCode == ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Expoter/Impoter saved successfully !');
                }
                else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsExpCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Expoter/Impoter Authorised successfully !');
                }
                else if (_this.queryParamsReqType == ' ' && _this.quryParamsExpCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Expoter/Impoter update successfully !');
                }
                else if (_this.queryParamsReqType == ' ' && _this.quryParamsExpCode == ' ') {
                    _this._toasterService.toast('success', 'success', 'Expoter/Impoter saved successfully !');
                }
                _this.loaderService.display(false);
                _this.RestMain();
            }
            else if (data.Table[0].STATUS == "105") {
                if (confirm(data.Table[0].STATUSTEXT)) {
                    _this._dataService.Common("Master/exporter_Main_IU", jsonmaster)
                        .subscribe(function (data) {
                        if (data.Table[0].STATUS == "100") {
                            if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsExpCode == ' ') {
                                _this._toasterService.toast('success', 'success', 'Requst Expoter/Impoter saved successfully !');
                            }
                            else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsExpCode != ' ') {
                                _this._toasterService.toast('success', 'success', 'Requst Expoter/Impoter Authorised successfully !');
                            }
                            else if (_this.queryParamsReqType == ' ' && _this.quryParamsExpCode != ' ') {
                                _this._toasterService.toast('success', 'success', 'Expoter/Impoter update successfully !');
                            }
                            else if (_this.queryParamsReqType == ' ' && _this.quryParamsExpCode == ' ') {
                                _this._toasterService.toast('success', 'success', 'Expoter/Impoter saved successfully !');
                            }
                            _this.loaderService.display(false);
                            _this.RestMain();
                        }
                        else if (data.Table[0].STATUS == "105") {
                            _this._toasterService.toast("warning", "warning", 'Add Exporter with different City & address ');
                            _this.loaderService.display(false);
                        }
                    });
                }
                else {
                    _this.loaderService.display(false);
                    return false;
                }
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    clientmaster.prototype.RestMain = function () {
        this.Resetcildrcrd();
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this._dataService.getData("Master/masterpageload", jsonmaster)
            .subscribe(function (data) {
            // this.Citylist=data.Table;
        });
        this.ShrtName = '';
        this.Name = '';
        this.panno = '';
        this.EORIno = '';
        this.addrs1 = '';
        this.addrs2 = '';
        this.addrs3 = '';
        this.Pincode = '';
        this.city = '';
        this.country = '';
        this.addrs21 = '';
        this.addrs22 = '';
        this.addrs23 = '';
        this.Pincode2 = '';
        this.position2 = '';
        this.city2 = '';
        this.country2 = '';
        this.SOexport = '';
        this.telphone1 = '';
        this.faxno1 = '';
        this.email1 = '';
        this.imno = '';
        this.itno = '';
        this.bankername = '';
        this.custpono = '';
        this.ieccode = '';
        this.exphouse = '';
        this.exphousedt;
        this.exphouse;
        this.itcgrpcode = '';
        this.typeexpo = '(R)Merchant';
        this.exp_typeb = '(P)Private';
        this.typeexpohouse = '(EH)Export House';
        this.servtaxno = '';
        this.tanno = '';
        this.bnkaddss1 = '';
        this.bnkaddss2 = '';
        this.bnkAcctno = '';
        this.bnkauthdealercode = '';
        this.RBIwaiverno = '';
        this.bnkCommissionrate = '';
        this.bnkDivision = '';
        this.bnkRange = '';
        this.bkacctnoSBI = '';
        this.Ctitle1 = 'Mr.';
        this.Cname1 = '';
        this.Cemail1 = '';
        this.Ctelphone1 = '';
        this.Cfaxno1 = '';
        this.CDesignation1 = '';
        this.Cmobileno1 = '';
        this.Ctitle2 = 'Mr';
        this.Cname2 = '';
        this.Cemail2 = '';
        this.Ctelphone2 = '';
        this.Cfaxno2 = '';
        this.CDesignation2 = '';
        this.Cmobileno2 = '';
        this.Ctitle3 = 'Mr';
        this.Cname3 = '';
        this.Cemail3 = '';
        this.Ctelphone3 = '';
        this.Cfaxno3 = '';
        this.CDesignation3 = '';
        this.Cmobileno3 = '';
        this.Ctitle4 = 'Mr';
        this.Cname4 = '';
        this.Cemail4 = '';
        this.Ctelphone4 = '';
        this.Cfaxno4 = '';
        this.CDesignation4 = '';
        this.Cmobileno4 = '';
        this.exp_city = '';
        this.imp_city = '';
        this.sorc_city = '';
        this.uploadResult = [];
        this.gstlist = [];
        this.exp_city = [];
        this.imp_city = [];
        this.sorc_city = [];
        if (this.queryParamsReqType == 'isExporter') {
            this._router.navigate(['/master/request/client/ / ']);
        }
        else {
            this._router.navigate(['/master/request/client/' + this.queryParamsReqType + ' / ']);
        }
        this.loaderService.display(false);
    };
    //http://109.15.43.138/edocument/api/API_Master/UploadEdocSingleFile
    clientmaster.prototype.editpopulate = function () {
        var _this = this;
        var jsonmaster = { _ExpCode: this.quryParamsExpCode, RequestMode: this.queryParamsReqType };
        this._dataService.getData("Master/Fill_Exp_Details", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.exp_id = data.Table[0].ID;
                _this.ShrtName = data.Table[0].EXP_SNAME;
                _this.title = data.Table[0].EXP_TITLE;
                _this.Name = data.Table[0].EXP_NAME;
                _this.panno = data.Table[0].EXP_PANNO;
                //  this.EORIno   =    data.Table[0].    ;  
                _this.addrs1 = data.Table[0].EXP_ADD1;
                _this.addrs2 = data.Table[0].EXP_ADD2;
                _this.addrs3 = data.Table[0].EXP_ADD3;
                _this.Pincode = data.Table[0].EXP_PINCODE;
                _this.position = data.Table[0].EXP_PINPOSITION;
                _this.city = data.Table[0].EXP_CITYCODE;
                _this.expcountrycode = data.Table[0].EXP_COUNTRY;
                _this.country = data.Table[0].EXP_CITY_COUNTRY;
                _this.addrs21 = data.Table[0].EXP_INVADD1;
                _this.addrs22 = data.Table[0].EXP_INVADD2;
                _this.addrs23 = data.Table[0].EXP_INVADD3;
                _this.Pincode2 = data.Table[0].EXP_INVPINCODE;
                _this.position2 = data.Table[0].EXP_INVPINPOSITION;
                _this.city2 = data.Table[0].EXP_INVCITYCODE;
                _this.countrycode = data.Table[0].EXP_INVCOUNTRY;
                _this.SOexport = data.Table[0].EXP_STATE;
                _this.telphone1 = data.Table[0].EXP_TELNO1;
                _this.faxno1 = data.Table[0].EXP_FAXNO1;
                _this.email1 = data.Table[0].EXP_EMAIL;
                _this.rbicode = data.Table[0].EXP_RBICODE;
                _this.imno = data.Table[0].EXP_IMNO;
                _this.itno = data.Table[0].EXP_ITNO;
                _this.bankername = data.Table[0].EXP_BANK;
                _this.custpono = data.Table[0].EXP_CUSTPNO;
                _this.ieccode = data.Table[0].EXP_IECCODE;
                _this.exphouse = data.Table[0].EXP_HSCERTNO;
                _this.exphousedt = data.Table[0].EXP_HSCERTDT;
                _this.itcgrpcode = data.Table[0].EXP_ITCGROUPCODE;
                _this.typeexpo = data.Table[0].EXP_TYPEA;
                _this.exp_typeb = data.Table[0].EXP_TYPEB;
                _this.typeexpohouse = data.Table[0].EXP_EXPTHOUSE;
                _this.servtaxno = data.Table[0].EXP_SERVICETAX;
                _this.tanno = data.Table[0].EXP_TANNO;
                _this.bnkaddss1 = data.Table[0].EXP_BANKADDR1;
                _this.bnkaddss2 = data.Table[0].EXP_BANKADDR2;
                _this.bnkAcctno = data.Table[0].EXP_ACCTNO1;
                _this.bnkauthdealercode = data.Table[0].EXP_DELARCODE;
                _this.RBIwaiverno = data.Table[0].EXP_RBIWAIVERNO;
                _this.bnkCommissionrate = data.Table[0].EXP_COMMRATE;
                _this.bnkDivision = data.Table[0].EXP_DIVISION;
                _this.bnkRange = data.Table[0].EXP_RANGE;
                _this.bkacctnoSBI = data.Table[0].EXP_ACCTNO;
                _this.Ctitle1 = data.Table[0].EXP_TITLE1;
                _this.Cname1 = data.Table[0].EXP_CONTACT1;
                _this.Cemail1 = data.Table[0].EXP_CONT1EMAIL;
                _this.Ctelphone1 = data.Table[0].EXP_TELNO1;
                _this.Cfaxno1 = data.Table[0].EXP_FAXNO1;
                _this.CDesignation1 = data.Table[0].EXP_DESIGNATION1;
                _this.Cmobileno1 = data.Table[0].EXP_MOBILE1;
                _this.Ctitle2 = data.Table[0].EXP_TITLE2;
                _this.Cname2 = data.Table[0].EXP_CONTACT2;
                _this.Cemail2 = data.Table[0].EXP_CONT2EMAIL;
                _this.Ctelphone2 = data.Table[0].EXP_TELNO2;
                _this.Cfaxno2 = data.Table[0].EXP_FAXNO2;
                _this.CDesignation2 = data.Table[0].EXP_DESIGNATION2;
                _this.Cmobileno2 = data.Table[0].EXP_MOBILE2;
                _this.Ctitle3 = data.Table[0].EXP_TITLE3;
                _this.Cname3 = data.Table[0].EXP_CONTACT3;
                _this.Cemail3 = data.Table[0].EXP_CONT3EMAIL;
                _this.Ctelphone3 = data.Table[0].EXP_TELNO3;
                _this.Cfaxno3 = data.Table[0].EXP_FAXNO3;
                _this.CDesignation3 = data.Table[0].EXP_DESIGNATION3;
                _this.Cmobileno3 = data.Table[0].EXP_MOBILE3;
                _this.Ctitle4 = data.Table[0].EXP_TITLE4;
                _this.Cname4 = data.Table[0].EXP_CONTACT4;
                _this.Cemail4 = data.Table[0].EXP_CONT4EMAIL;
                _this.Ctelphone4 = data.Table[0].EXP_TELNO4;
                _this.Cfaxno4 = data.Table[0].EXP_FAXNO4;
                _this.CDesignation4 = data.Table[0].EXP_DESIGNATION4;
                _this.Cmobileno4 = data.Table[0].EXP_MOBILE4;
                _this.exp_city = data.Table[0].EXPORTER;
                _this.imp_city = data.Table[0].IMPORTER;
                _this.sorc_city = data.Table[0].SRCAGENT;
                _this.gstlist = data.Table1;
                _this.citybranchlict = data.Table2;
                // this.ISSEZCLIENT=(data.Table[0].ISSEZCLIENT=='1')?true:false;
                // if(this.ISSEZCLIENT==true){
                // this.disablechkIsSez=true
                // }else
                // {
                // this.disablechkIsSez=false
                // }
                // this.sirenno=data.Table[0].SIRENNO;
                _this.crperiodsea = data.Table[0].CREDITPERIOD_SEA;
                _this.crperiodair = data.Table[0].CREDITPERIOD_AIR;
                _this.overseasagent = (data.Table[0].ISOVERSEASAGENT == 'Y') ? true : false;
                _this.ISSEZCLIENT = (data.Table[0].ISSEZCLIENT == '1') ? true : false;
                if (_this.ISSEZCLIENT == true) {
                    _this.disablechkIsSez = true;
                }
                else {
                    _this.disablechkIsSez = false;
                }
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    clientmaster.prototype.populate_AddExpoter = function () {
        var _this = this;
        var jsonmaster = { concode: this.quryParamsExpCode };
        this._dataService.getData("Master/Fill_Consg_Details_AddAs_Expoter", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.ShrtName = data.Table[0].con_sname;
                _this.title = data.Table[0].con_title;
                _this.Name = data.Table[0].con_name;
                //this.panno 	=	data.Table[0].      ;
                _this.addrs1 = data.Table[0].con_add1;
                _this.addrs2 = data.Table[0].con_add2;
                _this.addrs3 = data.Table[0].con_add3;
                _this.Pincode = data.Table[0].con_pincode;
                _this.position = data.Table[0].con_pinposition;
                _this.city = data.Table[0].con_city;
                _this.expcountrycode = data.Table[0].con_country;
                _this.addrs21 = data.Table[0].con_add1;
                _this.addrs22 = data.Table[0].con_add2;
                _this.addrs23 = data.Table[0].con_add3;
                _this.Pincode2 = data.Table[0].con_pincode;
                _this.position2 = data.Table[0].con_pinposition;
                _this.city2 = data.Table[0].con_city;
                _this.countrycode = data.Table[0].con_country;
                //  this.SOexport  	=	data.Table[0].      ;
                _this.telphone1 = data.Table[0].con_telno;
                _this.faxno1 = data.Table[0].con_faxno;
                _this.email1 = data.Table[0].con_email;
                // this.rbicode  	=	data.Table[0].      ;
                // this.imno 	=	data.Table[0].      ;
                // this.itno 	=	data.Table[0].      ;
                // this.bankername 	=	data.Table[0].      ;
                // this.custpono  	=	data.Table[0].      ;
                // this.ieccode	=	data.Table[0].      ;
                // this.exphouse 	=	data.Table[0].      ;
                // this.exphousedt	=	data.Table[0].      ;
                // this.itcgrpcode  	=	data.Table[0].      ;
                // this.typeexpo  	=	data.Table[0].      ;
                // this.exp_typeb 	=	data.Table[0].      ;
                // this.typeexpohouse 	=	data.Table[0].      ;
                // this.servtaxno 	=	data.Table[0].      ;
                // this.tanno	=	data.Table[0].      ;
                // this.bnkaddss1 	=	data.Table[0].      ;
                // this.bnkaddss2 	=	data.Table[0].      ;
                // this.bnkAcctno 	=	data.Table[0].      ;
                // this.bnkauthdealercode 	=	data.Table[0].      ;
                // this.RBIwaiverno  	=	data.Table[0].      ;
                // this.bnkCommissionrate  	=	data.Table[0].      ;
                // this.bnkDivision 	=	data.Table[0].      ;
                // this.bnkRange 	=	data.Table[0].      ;
                // this.bkacctnoSBI 	=	data.Table[0].      ;
                // this.Ctitle1 	=	data.Table[0].      ;
                _this.Cname1 = data.Table[0].con_contact1;
                _this.Cemail1 = data.Table[0].con_cont1email;
                _this.Ctelphone1 = data.Table[0].con_telno1;
                _this.Cfaxno1 = data.Table[0].con_faxno1;
                _this.CDesignation1 = data.Table[0].con_designation1;
                _this.Cmobileno1 = data.Table[0].con_mobile1;
                _this.Ctitle2 = data.Table[0].con_title2;
                _this.Cname2 = data.Table[0].con_contact2;
                _this.Cemail2 = data.Table[0].con_cont2email;
                _this.Ctelphone2 = data.Table[0].con_telno2;
                _this.Cfaxno2 = data.Table[0].con_faxno2;
                _this.CDesignation2 = data.Table[0].con_designation2;
                _this.Cmobileno2 = data.Table[0].con_mobile2;
                _this.Ctitle3 = data.Table[0].con_title3;
                _this.Cname3 = data.Table[0].con_contact3;
                _this.Cemail3 = data.Table[0].con_cont3email;
                _this.Ctelphone3 = data.Table[0].con_telno3;
                _this.Cfaxno3 = data.Table[0].con_faxno3;
                _this.CDesignation3 = data.Table[0].con_designation3;
                _this.Cmobileno3 = data.Table[0].con_mobile3;
                _this.Ctitle4 = data.Table[0].con_title4;
                _this.Cname4 = data.Table[0].con_contact4;
                _this.Cemail4 = data.Table[0].con_cont4email;
                _this.Ctelphone4 = data.Table[0].con_telno4;
                _this.Cfaxno4 = data.Table[0].con_faxno4;
                _this.CDesignation4 = data.Table[0].con_designation4;
                _this.Cmobileno4 = data.Table[0].con_mobile4;
                _this.Concode = data.Table[0].con_code;
                // this.ISSEZCLIENT=(data.Table[0].ISSEZCLIENT=='1')?true:false;
                // if(this.ISSEZCLIENT==true){
                // this.disablechkIsSez=true
                // }else
                // {
                // this.disablechkIsSez=false
                // }
                // this.sirenno=data.Table[0].SIRENNO;
                _this.crperiodsea = data.Table[0].CREDITPERIOD_SEA;
                _this.crperiodair = data.Table[0].CREDITPERIOD_AIR;
                _this.overseasagent = (data.Table[0].ISOVERSEASAGENT == 'Y') ? true : false;
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    clientmaster.prototype.checkValue = function (event) {
        console.log(event);
    };
    clientmaster.prototype.checkValueoverseas = function (event) {
        console.log(event);
        this.isoverseasagent = event;
        console.log(this.isoverseasagent);
    };
    clientmaster.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUpload', { static: false }),
        __metadata("design:type", Object)
    ], clientmaster.prototype, "fileUploadVar", void 0);
    clientmaster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masterclient',
            template: __webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/client.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"]
            //private http1: Http   
        ])
    ], clientmaster);
    return clientmaster;
}());



/***/ }),

/***/ "./src/app/master/request/consignee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/request/consignee.component.ts ***!
  \*******************************************************/
/*! exports provided: consigneemaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consigneemaster", function() { return consigneemaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var consigneemaster = /** @class */ (function () {
    function consigneemaster(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService, http, _configuration) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.http = http;
        this._configuration = _configuration;
        this.document_Array = [];
        this.CHECK = null;
        this.CHECKB = null;
        this.CHECKC1 = null;
        this.CHECKC2 = null;
        this.CHECKC3 = null;
        this.CHECKC4 = null;
        this.Header = "Consignee Details";
        this.cons_id = "0";
        this.ShrtName = "";
        this.panno = "";
        this.title = "Messrs";
        this.Name = "";
        this.EORIno = "";
        this.addrs1 = "";
        this.addrs2 = "";
        this.addrs3 = "";
        this.position = "After";
        this.Pincode = "";
        this.city = "";
        this.country = "";
        this.email = "";
        this.telephone = "";
        this.faxno1 = "";
        this.Ctitle1 = "Mr.";
        this.Cname1 = "";
        this.CDesignation1 = "";
        this.Ctelphone1 = "";
        this.Cfaxno1 = "";
        this.Cmobileno1 = "";
        this.Cemail1 = "";
        this.Ctitle2 = "Mr.";
        this.Cname2 = "";
        this.CDesignation2 = "";
        this.Ctelphone2 = "";
        this.Cfaxno2 = "";
        this.Cmobileno2 = "";
        this.Cemail2 = "";
        this.Ctitle3 = "Mr.";
        this.Cname3 = "";
        this.CDesignation3 = "";
        this.Ctelphone3 = "";
        this.Cfaxno3 = "";
        this.Cmobileno3 = "";
        this.Cemail3 = "";
        this.Ctitle4 = "Mr.";
        this.Cname4 = "";
        this.CDesignation4 = "";
        this.Ctelphone4 = "";
        this.Cfaxno4 = "";
        this.Cmobileno4 = "";
        this.Cemail4 = "";
        this.isappr = "Y";
        this.list = "";
        this.documentlist = [];
        this.Citylist = [];
        this.queryParamsReqType = "";
        this.exp_doc = [];
        this.CNFsourceagt = "";
        this.CNFrance = "";
        this.CNFothers = "Y";
        this.queryParamsConcode = "";
        this.text = "Submit";
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
    consigneemaster.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsReqType = params["ReqType"];
            _this.queryParamsConcode = params["ConCode"];
        });
        if (this.queryParamsReqType == 'TEMP' && this.queryParamsConcode != ' ') {
            this._loginService.verifyRights(106, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            // console.log(this._loginService.getLogin()[0].USERNAME);
            this.Header = 'CONSIGNEE DETAILS - UPDATE REQUEST';
            this.populateEdit();
        }
        else if (this.queryParamsReqType == ' ' && this.queryParamsConcode != ' ') {
            this._loginService.verifyRights(106, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'CONSIGNEE DETAILS - UPDATE';
            this.populateEdit();
        }
        else if (this.queryParamsReqType == ' ' && this.queryParamsConcode == ' ') {
            this._loginService.verifyRights(106, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
            this.Header = 'CONSIGNEE DETAILS - ADD';
            //this.populateEdit();
        }
        else if (this.queryParamsReqType == 'TEMP' && this.queryParamsConcode == ' ') {
            this.Header = 'CONSIGNEE DETAILS - REQUEST TO ADD';
            //   this.populateEdit();
        }
        this.loaderService.display(true);
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
        this._dataService.getAll("Master/con_documentList_load")
            .subscribe(function (data) {
            _this.documentlist = data.Table;
        });
        this.loaderService.display(false);
    };
    consigneemaster.prototype.populateEdit = function () {
        var _this = this;
        this.text = 'Update';
        var jsonmaster = { concode: this.queryParamsConcode, RequestMode: this.queryParamsReqType };
        this._dataService.getData("Master/consignee_populate", jsonmaster)
            .subscribe(function (data) {
            _this.cons_id = data.Table[0].id;
            _this.con_code = data.Table[0].con_code;
            _this.ShrtName = data.Table[0].con_sname;
            _this.Name = data.Table[0].con_name;
            _this.title = data.Table[0].con_title;
            _this.addrs1 = data.Table[0].con_add1;
            _this.addrs2 = data.Table[0].con_add2;
            _this.addrs3 = data.Table[0].con_add3;
            _this.email = data.Table[0].con_email;
            _this.Pincode = data.Table[0].con_pincode;
            _this.position = data.Table[0].con_pinposition;
            _this.city = data.Table[0].con_city;
            _this.countrycode = data.Table[0].con_country;
            _this.country = data.Table[0].city_country;
            _this.telephone = data.Table[0].con_telno;
            _this.faxno1 = data.Table[0].con_faxno;
            _this.Ctitle1 = data.Table[0].con_title1;
            _this.Cname1 = data.Table[0].con_contact1;
            _this.CDesignation1 = data.Table[0].con_designation1;
            _this.Ctelphone1 = data.Table[0].con_telno1;
            _this.Cfaxno1 = data.Table[0].con_faxno1;
            _this.Cmobileno1 = data.Table[0].con_mobile1;
            _this.Cemail1 = data.Table[0].con_cont1email;
            _this.Ctitle2 = data.Table[0].con_title2;
            _this.Cname2 = data.Table[0].con_contact2;
            _this.CDesignation2 = data.Table[0].con_designation2;
            _this.Ctelphone2 = data.Table[0].con_telno2;
            _this.Cfaxno2 = data.Table[0].con_faxno2;
            _this.Cmobileno2 = data.Table[0].con_mobile2;
            _this.Cname3 = data.Table[0].con_contact3;
            _this.Ctitle3 = data.Table[0].con_title3;
            _this.Cname3 = data.Table[0].con_contact3;
            _this.CDesignation3 = data.Table[0].con_designation3;
            _this.Ctelphone3 = data.Table[0].con_telno3;
            _this.Cfaxno3 = data.Table[0].con_faxno3;
            _this.Cmobileno3 = data.Table[0].con_mobile3;
            _this.Cname4 = data.Table[0].con_contact4;
            _this.Ctitle4 = data.Table[0].con_title4;
            _this.Cname4 = data.Table[0].con_contact4;
            _this.CDesignation4 = data.Table[0].con_designation4;
            _this.Ctelphone4 = data.Table[0].con_telno4;
            _this.Cfaxno4 = data.Table[0].con_faxno4;
            _this.Cmobileno4 = data.Table[0].con_mobile4;
            _this.Cemail4 = data.Table[0].con_cont4email;
            _this.isappr = data.Table[0].approval;
            _this.CNFsourceagt = (data.Table[0].srcagt == 'N') ? null : data.Table[0].srcagt;
            _this.exp_doc = data.Table[0].doccode;
            _this.CNFrance = (data.Table[0].cneefrance == 'N') ? null : data.Table[0].cneefrance;
            _this.CNFothers = (data.Table[0].cneeothers == 'N') ? null : data.Table[0].cneeothers;
            _this.documentlist = data.Table1;
        });
    };
    consigneemaster.prototype.getcollapse = function (chk, section) {
        if (section == 'bank') {
            if (chk == 'null') {
                this.CHECKB = true;
                this.CHECK = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKB = 'null';
            }
        }
        if (section == 'contact1') {
            if (chk == 'null') {
                this.CHECKC1 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKC1 = 'null';
            }
        }
        if (section == 'contact2') {
            if (chk == 'null') {
                this.CHECKC2 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKC2 = 'null';
            }
        }
        if (section == 'contact3') {
            if (chk == 'null') {
                this.CHECKC3 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKC3 = 'null';
            }
        }
        if (section == 'contact4') {
            if (chk == 'null') {
                this.CHECKC4 = true;
                this.CHECK = 'null';
                this.CHECKB = 'null';
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
            }
            else {
                this.CHECKC4 = 'null';
            }
        }
    };
    consigneemaster.prototype.Countryfilter = function (citycode) {
        this.listcnt = this.Citylist.filter(function (cntrylist) { return cntrylist.DATAVALUEFIELD == citycode; });
        this.country = this.listcnt[0].CITY_COUNTRY;
        this.countrycode = this.listcnt[0].ISO_COUNTRY_CODE;
    };
    consigneemaster.prototype.chkonchange = function (citycode, chk) {
        if (chk == true) {
            this.exp_doc = this.exp_doc + citycode + ',';
            this.exp_doc = this.exp_doc.replace(',,', ',');
        }
        else {
            this.exp_doc = this.exp_doc.replace(citycode, '');
            this.exp_doc = this.exp_doc.replace(',,', ',');
        }
    };
    consigneemaster.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
        }
    };
    consigneemaster.prototype.CNFonchange = function (list, type) {
        if (type == '1') {
            if (list == true) {
                this.CNFrance = 'Y';
            }
            //else { this.CNFrance= 'N'}
        }
        if (type == '2') {
            if (list == true) {
                this.CNFothers = 'Y';
            }
            // else { this.CNFothers= 'N'}
        }
        if (type == '3') {
            if (list == true) {
                this.CNFsourceagt = 'Y';
            }
            //   else { this.CNFsourceagt= 'N'}
        }
    };
    consigneemaster.prototype.Add_Main = function () {
        var _this = this;
        if (this.ShrtName.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Short name could not be blank !');
            return false;
        }
        if (this.Name.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Name could not be blank !');
            return false;
        }
        if (this.city.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Please select City !');
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            id: this.cons_id,
            con_sname: this.ShrtName.replace("'", "`"),
            con_name: this.Name.replace("'", "`"),
            con_title: this.title,
            con_add1: this.addrs1.replace("'", "`"),
            con_add2: this.addrs2.replace("'", "`"),
            con_add3: this.addrs3.replace("'", "`"),
            con_email: this.email,
            con_pincode: this.Pincode,
            con_pinposition: this.position,
            con_city: this.city,
            con_country: this.countrycode,
            con_telno: this.telephone,
            con_faxno: this.faxno1,
            con_title1: this.Ctitle1,
            con_contact1: this.Cname1.replace("'", "`"),
            con_designation1: this.CDesignation1,
            con_telno1: this.Ctelphone1,
            con_faxno1: this.Cfaxno1,
            con_mobile1: this.Cmobileno1,
            con_cont1email: this.Cemail1,
            con_title2: this.Ctitle2,
            con_contact2: this.Cname2.replace("'", "`"),
            con_designation2: this.CDesignation2,
            con_telno2: this.Ctelphone2,
            con_faxno2: this.Cfaxno2,
            con_mobile2: this.Cmobileno2,
            con_cont2email: this.Cname3,
            con_title3: this.Ctitle3,
            con_contact3: this.Cname3.replace("'", "`"),
            con_designation3: this.CDesignation3,
            con_telno3: this.Ctelphone3,
            con_faxno3: this.Cfaxno3,
            con_mobile3: this.Cmobileno3,
            con_cont3email: this.Cname4,
            con_title4: this.Ctitle4,
            con_contact4: this.Cname4.replace("'", "`"),
            con_designation4: this.CDesignation4,
            con_telno4: this.Ctelphone4,
            con_faxno4: this.Cfaxno4,
            con_mobile4: this.Cmobileno4,
            con_cont4email: this.Cemail4,
            con_approval: this.isappr,
            con_sourceagt: (this.CNFsourceagt == '') ? 'N' : this.CNFsourceagt,
            con_doccode: this.exp_doc,
            con_cneefrance: (this.CNFrance == '') ? 'N' : this.CNFrance,
            con_cneeothers: (this.CNFothers == '') ? 'N' : this.CNFothers,
            MakerID: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            RequestMode: this.queryParamsReqType,
            con_EORINUMBER: this.EORIno,
        };
        this._dataService.Common("Master/Consignee_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('success', 'success', 'Consignee saved successfully !');
                _this.loaderService.display(false);
                _this.RestMain();
            }
            else if (data.Table[0].STATUS == "105") {
                if (confirm(data.Table[0].STATUSTEXT)) {
                    _this._dataService.Common("Master/Consignee_IU", jsonmaster)
                        .subscribe(function (data) {
                        if (data.Table[0].STATUS == "100") {
                            _this._toasterService.toast('success', 'success', 'Consignee saved successfully !');
                            _this.loaderService.display(false);
                            _this.RestMain();
                        }
                        else if (data.Table[0].STATUS == "105") {
                            _this._toasterService.toast("warning", "warning", 'Add Consignee with different City & address ');
                            _this.loaderService.display(false);
                        }
                    });
                }
                else {
                    _this.loaderService.display(false);
                    return false;
                }
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    consigneemaster.prototype.RestMain = function () {
        this.ShrtName = '';
        this.Name = '';
        this.title = 'Messrs';
        this.addrs1 = '';
        this.addrs2 = '';
        this.addrs3 = '';
        this.email = '';
        this.Pincode = '';
        this.position = '';
        this.city = '';
        this.countrycode = '';
        this.telephone = '';
        this.faxno1 = '';
        this.Ctitle1 = 'Mr';
        this.Cname1 = '';
        this.CDesignation1 = '';
        this.Ctelphone1 = '';
        this.Cfaxno1 = '';
        this.Cmobileno1 = '';
        this.Cemail1 = '';
        this.Ctitle2 = 'Mr';
        this.Cname2 = '';
        this.CDesignation2 = '';
        this.Ctelphone2 = '';
        this.Cfaxno2 = '';
        this.Cmobileno2 = '';
        this.Cname3 = '';
        this.Ctitle3 = 'Mr';
        this.Cname3 = '';
        this.CDesignation3 = '';
        this.Ctelphone3 = '';
        this.Cfaxno3 = '';
        this.Cmobileno3 = '';
        this.Cname4 = '';
        this.Ctitle4 = 'Mr';
        this.Cname4 = '';
        this.CDesignation4 = '';
        this.Ctelphone4 = '';
        this.Cfaxno4 = '';
        this.Cmobileno4 = '';
        this.Cemail4 = '';
        this.isappr = '';
        this.CNFsourceagt = 'N';
        this.exp_doc = [];
        this.CNFrance = 'N';
        this.CNFothers = 'N';
        this.documentlist = [];
        this.CNFrance = null;
        this.CNFothers = null;
        this.CNFsourceagt = null;
        // if(this.queryParamsReqType=="Exporter"){
        this._router.navigate(['/master/request/consignee/' + this.queryParamsReqType + ' / ']);
        /// }
    };
    consigneemaster.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"] }
    ]; };
    consigneemaster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masterconsignee',
            template: __webpack_require__(/*! raw-loader!./consignee.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/consignee.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"]])
    ], consigneemaster);
    return consigneemaster;
}());



/***/ }),

/***/ "./src/app/master/request/liner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/master/request/liner.component.ts ***!
  \***************************************************/
/*! exports provided: Linermaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linermaster", function() { return Linermaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Linermaster = /** @class */ (function () {
    function Linermaster(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService, http, _configuration
    //private http1: Http   
    ) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.http = http;
        this._configuration = _configuration;
        this.Header = "SHIPPING LINER MASTER";
        this.teleno = "";
        this.nofax = "";
        this.ShrtName = "";
        this.panno = "";
        this.title = "Mr.";
        this.Name = "";
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.position2 = "After";
        this.Pincode2 = "";
        this.city2 = "";
        this.country2 = "";
        this.telephone = "";
        this.mobile = "";
        this.email = "";
        this.LinerId = "0";
        this.queryParamsReqType = "";
        this.quryParamsLinerCode = "";
        this.validEmail = false;
        this.text = "Submit";
        this.LinerCode = "";
        this.isLoadingData = false;
    }
    Linermaster.prototype.Countryfilter = function (citycode) {
        this.listcnt = this.Citylist.filter(function (cntrylist) { return cntrylist.DATAVALUEFIELD == citycode; });
        this.country2 = this.listcnt[0].CITY_COUNTRY;
        this.countrycode = this.listcnt[0].ISO_COUNTRY_CODE;
    };
    Linermaster.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsReqType = params["ReqType"];
            _this.quryParamsLinerCode = params["linerC"];
        });
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsLinerCode != ' ') {
            this._loginService.verifyRights(108, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'SHIPPING LINER MASTER - - UPDATE REQUEST';
            this.populateEdit();
        }
        else if (this.queryParamsReqType == ' ' && this.quryParamsLinerCode != ' ') {
            this._loginService.verifyRights(108, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'SHIPPING LINER MASTER -- UPDATE';
            this.populateEdit();
            this.text = 'Update';
        }
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsLinerCode == ' ') {
            this.Header = 'SHIPPING LINER MASTER - REQUEST TO ADD ';
        }
        if (this.queryParamsReqType == ' ' && this.quryParamsLinerCode == ' ') {
            this.Header = 'SHIPPING LINER MASTER - - ADD';
            this._loginService.verifyRights(108, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        }
        this.loaderService.display(false);
    };
    Linermaster.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
        }
    };
    Linermaster.prototype.populateEdit = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = { fkliner_code: this.quryParamsLinerCode, RequestMode: this.queryParamsReqType };
        this._dataService.getData("Master/Master_Liner_Populate", jsonmaster)
            .subscribe(function (data) {
            _this.LinerId = data.Table[0].ID;
            _this.LinerCode = data.Table[0].liner_code;
            _this.ShrtName = data.Table[0].liner_sname;
            _this.Name = data.Table[0].liner_name;
            // this.title   = 	data.Table[0].agt_title  ;
            _this.addrs21 = data.Table[0].liner_add1;
            _this.addrs22 = data.Table[0].liner_add2;
            _this.addrs23 = data.Table[0].liner_add3;
            _this.email = data.Table[0].liner_email;
            _this.Pincode2 = data.Table[0].liner_pincode;
            _this.position2 = data.Table[0].liner_pinposition;
            _this.city2 = data.Table[0].liner_city_code;
            _this.country2 = data.Table[0].liner_country;
            _this.countrycode = data.Table[0].city_country;
            _this.teleno = data.Table[0].liner_telno;
            _this.nofax = data.Table[0].liner_faxno;
        });
        this.loaderService.display(false);
    };
    Linermaster.prototype.Add_Main = function () {
        var _this = this;
        if (this.ShrtName.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Short name could not be blank !');
            return false;
        }
        if (this.Name.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Name could not be blank !');
            return false;
        }
        if (this.city2.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Please select City !');
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            id: this.LinerId,
            liner_sname: this.ShrtName.replace("'", "`"),
            liner_name: this.Name.replace("'", "`"),
            // agt_title: this.title   ,
            liner_add1: this.addrs21.replace("'", "`"),
            liner_add2: this.addrs22.replace("'", "`"),
            liner_add3: this.addrs23.replace("'", "`"),
            liner_email: this.email,
            liner_pincode: this.Pincode2,
            liner_pinposition: this.position2,
            liner_city: this.city2,
            liner_country: this.country2,
            liner_telno: this.teleno,
            liner_faxno: this.nofax,
            MakerID: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            RequestMode: this.queryParamsReqType
        };
        this._dataService.Common("Master/Shiping_liner_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsLinerCode == ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Liner saved successfully !');
                }
                else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsLinerCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Liner Authorised successfully !');
                }
                else if (_this.queryParamsReqType == " " && _this.quryParamsLinerCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Liner update successfully !');
                }
                else if (_this.queryParamsReqType == " " && _this.quryParamsLinerCode == " ") {
                    _this._toasterService.toast('success', 'success', 'Liner saved successfully !');
                }
                _this.loaderService.display(false);
                _this.RestMain();
            }
            else if (data.Table[0].STATUS == "105") {
                if (confirm(data.Table[0].STATUSTEXT)) {
                    _this._dataService.Common("Master/Shiping_liner_IU", jsonmaster)
                        .subscribe(function (data) {
                        if (data.Table[0].STATUS == "100") {
                            if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsLinerCode == ' ') {
                                _this._toasterService.toast('success', 'success', 'Request Liner saved successfully !');
                            }
                            else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsLinerCode != ' ') {
                                _this._toasterService.toast('success', 'success', 'Request Liner Authorised successfully !');
                            }
                            else if (_this.queryParamsReqType == " " && _this.quryParamsLinerCode != ' ') {
                                _this._toasterService.toast('success', 'success', 'Liner update successfully !');
                            }
                            else if (_this.queryParamsReqType == " " && _this.quryParamsLinerCode == " ") {
                                _this._toasterService.toast('success', 'success', 'Liner saved successfully !');
                            }
                            _this.loaderService.display(false);
                            _this.RestMain();
                        }
                        else if (data.Table[0].STATUS == "105") {
                            _this._toasterService.toast("warning", "warning", 'Add Liner with different City & address ');
                            _this.loaderService.display(false);
                        }
                    });
                }
                else {
                    _this.loaderService.display(false);
                    return false;
                }
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    Linermaster.prototype.RestMain = function () {
        this.LinerId = "";
        this.ShrtName = "";
        this.Name = "";
        // agt_title: this.title   ,
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.email = "";
        this.Pincode2 = "";
        this.position2 = "";
        this.city2 = "";
        this.country2 = "";
        this.teleno = "";
        this.nofax = "";
    };
    Linermaster.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"] }
    ]; };
    Linermaster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masterLiner',
            template: __webpack_require__(/*! raw-loader!./liner.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/liner.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"]
            //private http1: Http   
        ])
    ], Linermaster);
    return Linermaster;
}());



/***/ }),

/***/ "./src/app/master/request/request-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/master/request/request-search.component.ts ***!
  \************************************************************/
/*! exports provided: ReqMastersearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqMastersearch", function() { return ReqMastersearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReqMastersearch = /** @class */ (function () {
    function ReqMastersearch(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.searchwith = "begin";
        this.Reqlist = [];
        this.queryParamsReqType = "";
        this.Srchname = "";
        this.Reqexp_code = [];
        this.Header = "";
        this.Request = "";
    }
    ReqMastersearch.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsReqType = params["ReqType"];
        });
        if (this.queryParamsReqType == "Exporter") {
            this.Header = 'EXPORTER SEARCH';
            this._loginService.verifyRights(104, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
        else if (this.queryParamsReqType == "RequestExporter") {
            this.Header = 'EXPORTER REQUEST SEARCH';
            this.onload();
            this.Request = 'Request';
        }
        else if (this.queryParamsReqType == "Supplier") {
            this.Header = 'SUPPLIER SEARCH';
            this._loginService.verifyRights(105, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
        else if (this.queryParamsReqType == "RequestSupplier") {
            this.Header = 'SUPPLIER REQUEST SEARCH';
            this.onload();
            // this.Request='Request';
        }
        else if (this.queryParamsReqType == "consignee") {
            this.Header = 'CONSIGNEE SEARCH';
            this._loginService.verifyRights(106, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
        else if (this.queryParamsReqType == "RequestConsignee") {
            this.Header = 'CONSIGNEE REQUEST SEARCH';
            this.onload();
            //this.Request='Request';
        }
        else if (this.queryParamsReqType == "isExporter") {
            this.Header = 'CONSIGNEE ADD AS AN EXPORTER';
            this._loginService.verifyRights(123, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
        else if (this.queryParamsReqType == "AgentVessel") {
            this.Header = 'AGENT VESSEL SEARCH';
            this._loginService.verifyRights(107, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
        else if (this.queryParamsReqType == "RequestAgentVessel") {
            this.Header = 'AGENT VESSEL REQUEST SEARCH';
            this.onload();
            // this.Request='Request';
        }
        else if (this.queryParamsReqType == "Liner") {
            this.Header = 'SHIPPING LINER SEARCH';
            this._loginService.verifyRights(108, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
        else if (this.queryParamsReqType == "RequestLiner") {
            this.Header = 'SHIPPING LINER REQUEST SEARCH';
            this.onload();
            // this.Request='Request';
        }
        else if (this.queryParamsReqType == "ConsigneeBank") {
            this.Header = 'CONSIGNEE BANK SEARCH';
            this._loginService.verifyRights(109, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
        }
    };
    ReqMastersearch.prototype.onload = function () {
        var _this = this;
        var strSearchTxt;
        if (this.searchwith == 'anywhere') {
            strSearchTxt = '%' + this.Srchname.replace(' ', '%') + '%';
        }
        else {
            strSearchTxt = this.Srchname.replace(' ', '%') + '%';
        }
        var jsonmaster = { rqPage: this.queryParamsReqType, strSearchTxt: strSearchTxt };
        this.loaderService.display(true);
        this._dataService.getData("Master/Master_Search_common", jsonmaster)
            .subscribe(function (data) {
            _this.Reqlist = data.Table;
            _this.loaderService.display(false);
        });
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
            totalItems: this.Reqlist.count
        };
    };
    ReqMastersearch.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ReqMastersearch.prototype.chkonchange = function (chk, code) {
        if (chk == true) {
            this.Reqexp_code = this.Reqexp_code + ',' + code + ',';
            this.Reqexp_code = this.Reqexp_code.replace(',,', ',');
        }
        else {
            this.Reqexp_code = this.Reqexp_code.replace(code, '');
            this.Reqexp_code = this.Reqexp_code.replace(',,', ',');
        }
    };
    ReqMastersearch.prototype.delete = function () {
        var _this = this;
        var jsonmaster = { strSearchTxt: this.Reqexp_code, makerid: this._loginService.getLogin()[0].CMPID, makerip: this._loginService.getLogin()[0].MAKERIP };
        this.loaderService.display(true);
        var url;
        if (this.queryParamsReqType == "RequestExporter") {
            url = "Master/Master_REQLIST_DELETE";
        }
        else if (this.queryParamsReqType == "RequestConsignee") {
            url = "Master/Master_REQLIST_DELETE_consignee";
        }
        if (this.queryParamsReqType == "RequestAgentVessel") {
            url = "Master/Master_REQLIST_DELETE_Supplier";
        }
        if (this.queryParamsReqType == "AgentVessel") {
            url = "Master/Master_REQLIST_DELETE_Agent";
        }
        if (this.queryParamsReqType == "RequestLiner") {
            url = "Master/Master_REQLIST_DELETE_Liner";
        }
        this._dataService.getData(url, jsonmaster)
            .subscribe(function (data) {
            //  this.Reqlist=data.Table;
            // this.loaderService.display(false);
            _this._toasterService.toast('success', 'success', 'Requset delete successfully !');
        });
        this.onload();
        this.loaderService.display(false);
    };
    ReqMastersearch.prototype.Search = function () {
        this.onload();
    };
    ReqMastersearch.prototype.Cancel = function () {
        this.Reqlist = [];
        this.Srchname = "";
    };
    ReqMastersearch.prototype.ListOnclick = function (code) {
        if (this.queryParamsReqType == "Exporter") {
            this._router.navigate(['/master/request/client/ /' + code]);
        }
        else if (this.queryParamsReqType == "RequestExporter") {
            this._router.navigate(['/master/request/client/TEMP/' + code]);
        }
        else if (this.queryParamsReqType == "consignee") {
            this._router.navigate(['/master/request/consignee/ /' + code]);
        }
        else if (this.queryParamsReqType == "RequestConsignee") {
            this._router.navigate(['/master/request/consignee/TEMP/' + code]);
        }
        // add as exporter
        else if (this.queryParamsReqType == "isExporter") {
            this._router.navigate(['/master/request/client/isExporter/' + code]);
        }
        else if (this.queryParamsReqType == "supplier") {
            this._router.navigate(['/master/request/supplier/ /' + code]);
        }
        else if (this.queryParamsReqType == "RequestSupplier") {
            this._router.navigate(['/master/request/supplier/TEMP/' + code]);
        }
        else if (this.queryParamsReqType == "RequestAgentVessel") {
            this._router.navigate(['/master/request/AgentVessel/TEMP/' + code]);
        }
        else if (this.queryParamsReqType == "AgentVessel") {
            this._router.navigate(['/master/request/AgentVessel/ /' + code]);
        }
        else if (this.queryParamsReqType == "RequestLiner") {
            this._router.navigate(['/master/request/Liner/TEMP/' + code]);
        }
        else if (this.queryParamsReqType == "Liner") {
            this._router.navigate(['/master/request/Liner/ /' + code]);
        }
        else if (this.queryParamsReqType == "ConsigneeBank") {
            this._router.navigate(['/master/common/ConsigneeBank/' + code]);
        }
    };
    ReqMastersearch.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    ReqMastersearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mastersearch',
            template: __webpack_require__(/*! raw-loader!./request-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/request-search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], ReqMastersearch);
    return ReqMastersearch;
}());



/***/ }),

/***/ "./src/app/master/request/request.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/master/request/request.component.ts ***!
  \*****************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestComponent = /** @class */ (function () {
    function RequestComponent() {
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./request.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/request.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/master/request/request.module.ts":
/*!**************************************************!*\
  !*** ./src/app/master/request/request.module.ts ***!
  \**************************************************/
/*! exports provided: RequestModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModules", function() { return RequestModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _request_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.routing */ "./src/app/master/request/request.routing.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client.component */ "./src/app/master/request/client.component.ts");
/* harmony import */ var _request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request.component */ "./src/app/master/request/request.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _consignee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consignee.component */ "./src/app/master/request/consignee.component.ts");
/* harmony import */ var _request_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request-search.component */ "./src/app/master/request/request-search.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _supplier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./supplier.component */ "./src/app/master/request/supplier.component.ts");
/* harmony import */ var _vessel_Agent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vessel_Agent.component */ "./src/app/master/request/vessel_Agent.component.ts");
/* harmony import */ var _liner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./liner.component */ "./src/app/master/request/liner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { Http,   } from '@angular/http';




var RequestModules = /** @class */ (function () {
    function RequestModules() {
    }
    RequestModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_request_routing__WEBPACK_IMPORTED_MODULE_6__["RequestRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]],
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_7__["clientmaster"], _request_component__WEBPACK_IMPORTED_MODULE_8__["RequestComponent"],
                _consignee_component__WEBPACK_IMPORTED_MODULE_10__["consigneemaster"], _request_search_component__WEBPACK_IMPORTED_MODULE_11__["ReqMastersearch"], _supplier_component__WEBPACK_IMPORTED_MODULE_13__["suppliermaster"], _vessel_Agent_component__WEBPACK_IMPORTED_MODULE_14__["vesselAgentmaster"], _liner_component__WEBPACK_IMPORTED_MODULE_15__["Linermaster"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], RequestModules);
    return RequestModules;
}());



/***/ }),

/***/ "./src/app/master/request/request.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/master/request/request.routing.ts ***!
  \***************************************************/
/*! exports provided: RequestRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRouting", function() { return RequestRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "./src/app/master/request/client.component.ts");
/* harmony import */ var _request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.component */ "./src/app/master/request/request.component.ts");
/* harmony import */ var _consignee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consignee.component */ "./src/app/master/request/consignee.component.ts");
/* harmony import */ var _request_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-search.component */ "./src/app/master/request/request-search.component.ts");
/* harmony import */ var _supplier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supplier.component */ "./src/app/master/request/supplier.component.ts");
/* harmony import */ var _vessel_Agent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vessel_Agent.component */ "./src/app/master/request/vessel_Agent.component.ts");
/* harmony import */ var _liner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liner.component */ "./src/app/master/request/liner.component.ts");
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
            title: 'Master/Request'
        },
        children: [
            { path: '', component: _request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"], data: { title: 'Home' } },
            { path: 'client/:ReqType/:ExpCode', component: _client_component__WEBPACK_IMPORTED_MODULE_2__["clientmaster"], data: { title: 'Client' }, pathMatch: 'ful' },
            { path: 'consignee/:ReqType/:ConCode', component: _consignee_component__WEBPACK_IMPORTED_MODULE_4__["consigneemaster"], data: { title: 'Consignee' }, pathMatch: 'ful' },
            { path: 'search/:ReqType', component: _request_search_component__WEBPACK_IMPORTED_MODULE_5__["ReqMastersearch"], data: { title: 'Search' }, pathMatch: 'ful' },
            { path: 'supplier/:ReqType/:SupCode', component: _supplier_component__WEBPACK_IMPORTED_MODULE_6__["suppliermaster"], data: { title: 'Supplier' }, pathMatch: 'ful' },
            { path: 'AgentVessel/:ReqType/:VslAgtC', component: _vessel_Agent_component__WEBPACK_IMPORTED_MODULE_7__["vesselAgentmaster"], data: { title: 'AGENT(VESSEL)' }, pathMatch: 'ful' },
            { path: 'Liner/:ReqType/:linerC', component: _liner_component__WEBPACK_IMPORTED_MODULE_8__["Linermaster"], data: { title: 'Liner' }, pathMatch: 'ful' },
        ]
    }
];
var RequestRouting = /** @class */ (function () {
    function RequestRouting() {
    }
    RequestRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RequestRouting);
    return RequestRouting;
}());



/***/ }),

/***/ "./src/app/master/request/supplier.component.ts":
/*!******************************************************!*\
  !*** ./src/app/master/request/supplier.component.ts ***!
  \******************************************************/
/*! exports provided: suppliermaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suppliermaster", function() { return suppliermaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var suppliermaster = /** @class */ (function () {
    function suppliermaster(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService, http, _configuration
    //private http1: Http   
    ) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.http = http;
        this._configuration = _configuration;
        this.CHECKC1 = null;
        this.CHECKC2 = null;
        this.CHECKC3 = null;
        this.CHECKC4 = null;
        this.CHECKC5 = null;
        this.Header = "Supplier Details";
        this.teleno = "";
        this.nofax = "";
        this.ShrtName = "";
        this.panno = "";
        this.title = "Messrs";
        this.Name = "";
        this.EORIno = "";
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.position2 = "After";
        this.Pincode2 = "";
        this.city2 = "";
        this.state = "";
        this.country2 = "";
        this.GST = "gst";
        this.GstNo = "";
        this.ARNNo = "";
        this.title1 = "Mr.";
        this.person = "";
        this.telephone = "";
        this.mobile = "";
        this.email = "";
        this.servtaxno = "";
        this.tanno = "";
        this.Ctitle1 = "Mr.";
        this.Cname1 = "";
        this.CDesignation1 = "";
        this.Ctelphone1 = "";
        this.Cfaxno1 = "";
        this.Cmobileno1 = "";
        this.Cemail1 = "";
        this.Ctitle2 = "Mr.";
        this.Cname2 = "";
        this.CDesignation2 = "";
        this.Ctelphone2 = "";
        this.Cfaxno2 = "";
        this.Cmobileno2 = "";
        this.Cemail2 = "";
        this.Ctitle3 = "Mr.";
        this.Cname3 = "";
        this.CDesignation3 = "";
        this.Ctelphone3 = "";
        this.Cfaxno3 = "";
        this.Cmobileno3 = "";
        this.Cemail3 = "";
        this.Ctitle4 = "Mr.";
        this.Cname4 = "";
        this.CDesignation4 = "";
        this.Ctelphone4 = "";
        this.Cfaxno4 = "";
        this.Cmobileno4 = "";
        this.Cemail4 = "";
        this.itcgrpcode = "";
        this.exphouseno = "";
        this.statetinno = "";
        this.CitycodeA = "";
        this.Airlinecode = "";
        this.Citylist = [];
        this.gstlist = [];
        this.TmpcitybranchObject = {};
        this.childrecdid = "0";
        this.sup_id = "0";
        this.queryParamsReqType = "";
        this.quryParamsSupCode = "";
        this.validEmail = false;
        this.exphousedt = "";
        this.exphouse = "";
        this.bnkDivision = "";
        this.sup_city = [];
        this.fileData = null;
        this.uploadedFilePath = null;
        this.text = "Submit";
        this.Concode = "";
        this.Airline = "";
        this.AirlineAgent = "";
        this.shipAgent = "";
        this.warehousse = "";
        this.Tranporter = "";
        this.BusAssociate = "";
        this.Franwarehouse = "";
        this.other = "";
        this.IS_gst_reg = true;
        this.fksup_code = "";
        this.txtchild = "Add";
        this.TdsList = [];
        this.txtchildTDS = "Add";
        this.IS_TDSApp = true;
        this.tdstype = "";
        this.frmdt = "";
        this.todt = "";
        this.sections = "";
        this.secRate = "0";
        this.tdsLimit = "0";
        this.Pk_Tdsid = "0";
        this.Sectionlist = [];
        this.isLoadingData = false;
        this.disableldcrate = true;
        this.ldcRate = "0";
        this.Company = "";
        this.disablecompany = true;
        this.disablelimitamt = true;
        this.disablecertno = true;
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
    suppliermaster.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsReqType = params["ReqType"];
            _this.quryParamsSupCode = params["SupCode"];
        });
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this._dataService.getData("Master/Supplierpageload", jsonmaster)
            .subscribe(function (data) {
            _this.Sectionlist = data.Table;
        });
        this.loaderService.display(true);
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
        this._dataService.getAll("Master/Fill_BranchCity")
            .subscribe(function (data) {
            _this.citybranchlict = data.Table;
            _this.loaderService.display(false);
        });
        this._dataService.getAll("Common/FillCompany")
            .subscribe(function (data) {
            _this.CompanyList = data.Table;
            _this.loaderService.display(false);
        });
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsSupCode != ' ') {
            this._loginService.verifyRights(105, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'SUPPLIER DETAILS - UPDATE REQUEST';
            this.editpopulate();
        }
        else if (this.queryParamsReqType == ' ' && this.quryParamsSupCode != ' ') {
            this._loginService.verifyRights(105, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'SUPPLIER DETAILS - UPDATE';
            this.editpopulate();
        }
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsSupCode == ' ') {
            // this._loginService.verifyRights(105, '')
            // .subscribe((data: any) => { this._loginService.checkVerify('Add', data); });
            this.Header = 'SUPPLIER DETAILS - REQUEST TO ADD';
        }
        if (this.queryParamsReqType == ' ' && this.quryParamsSupCode == ' ') {
            this._loginService.verifyRights(105, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
            this.Header = 'SUPPLIER DETAILS - ADD';
        }
    };
    suppliermaster.prototype.checkValue = function (event) {
        console.log(event);
    };
    suppliermaster.prototype.getcollapse = function (chk, section) {
        if (section == 'contact1') {
            if (chk == 'null') {
                this.CHECKC1 = true;
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKC1 = 'null';
            }
        }
        if (section == 'contact2') {
            if (chk == 'null') {
                this.CHECKC2 = true;
                this.CHECKC1 = 'null';
                this.CHECKC3 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKC2 = 'null';
            }
        }
        if (section == 'contact3') {
            if (chk == 'null') {
                this.CHECKC3 = true;
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC4 = 'null';
            }
            else {
                this.CHECKC3 = 'null';
            }
        }
        if (section == 'contact4') {
            if (chk == 'null') {
                this.CHECKC4 = true;
                this.CHECKC1 = 'null';
                this.CHECKC2 = 'null';
                this.CHECKC3 = 'null';
            }
            else {
                this.CHECKC4 = 'null';
            }
        }
    };
    suppliermaster.prototype.Countryfilter = function (citycode, type) {
        this.listcnt = this.Citylist.filter(function (cntrylist) { return cntrylist.DATAVALUEFIELD == citycode; });
        if (type == 'INV') {
            this.state = this.listcnt[0].STATE_NAME;
            this.country2 = this.listcnt[0].CITY_COUNTRY;
            this.statetinno = this.listcnt[0].STATE_NO;
            this.countrycode = this.listcnt[0].ISO_COUNTRY_CODE;
        }
    };
    suppliermaster.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
        }
    };
    suppliermaster.prototype.Tanchange = function () {
        if (this.tanno != '') {
            var Tan_3 = void 0, Tan_5 = void 0, Tan_9 = void 0;
            Tan_3 = this.tanno.substring(0, 4);
            Tan_5 = this.tanno.substring(4, 9);
            Tan_9 = this.tanno.substring(9, 10);
            if (this.tanno.length < 10) {
                this._toasterService.toast('warning', 'warning', 'TAN No Should be 10 characters !');
                return false;
            }
            var validTanAlphaRegEx = /^[A-Za-z]+$/;
            if (validTanAlphaRegEx.test(Tan_3)) {
            }
            else {
                this._toasterService.toast('warning', 'warning', 'TAN No first 4 characters should be an Alphabet');
                return false;
            }
            var validTanNumRegEx = /^[0-9]*$/;
            if (validTanNumRegEx.test(Tan_5)) {
            }
            else {
                this._toasterService.toast('warning', 'warning', 'TAN No 4-9 characters should be Numeric');
                return false;
            }
            if (validTanAlphaRegEx.test(Tan_9)) {
            }
            else {
                this._toasterService.toast('warning', 'warning', 'TAN No last characters should be an Alphabet');
                return false;
            }
        }
    };
    suppliermaster.prototype.chkonchange = function (citycode, chk) {
        if (chk == true) {
            this.sup_city = this.sup_city + ',' + citycode;
            this.sup_city = this.sup_city.replace(',,', ',');
        }
        else {
            this.sup_city = this.sup_city.replace(citycode, '');
            this.sup_city = this.sup_city.replace(',,', ',');
        }
    };
    suppliermaster.prototype.Addcildrcrd = function () {
        var _this = this;
        if (this.country2 == 'INDIA') {
            var isgstreg = void 0;
            if (this.IS_gst_reg == true) {
                if (this.GstNo != '') {
                    if (this.GstNo.length != 15) {
                        this._toasterService.toast('warning', 'warning', 'GST No Should be 15 characters !');
                        return false;
                    }
                    else if (this.GstNo.length == 15) {
                        isgstreg = this.GstNo.substring(0, 2);
                        this.Countryfilter(this.city2, "INV");
                        if (this.statetinno != isgstreg) {
                            this._toasterService.toast('warning', 'warning', 'Invalid GST No. for ' + this.state + " . Please enter the GST No. Starting Two digit match with state code is " + this.state);
                            return false;
                        }
                    }
                }
                else {
                    this._toasterService.toast('warning', 'warning', 'GST No Should not be blank !');
                    return false;
                }
            }
            else {
                if (confirm('Are you sure want add without GST!')) { }
                else {
                    return false;
                }
            }
        }
        else if (this.country2 == '') {
            this._toasterService.toast('warning', 'warning', 'Please Select City to add invoice address.');
            return false;
        }
        this.loaderService.display(true);
        var jsonmasterchild = { Pk_SupAdd_Id: this.childrecdid, fksup_code: this.fksup_code, sup_add1: this.addrs21.replace("'", "`"), sup_add2: this.addrs22.replace("'", "`"),
            sup_add3: this.addrs23.replace("'", "`"), sup_pincode: this.Pincode2, sup_position: this.position2, sup_city: this.city2,
            TelNo: this.teleno, FaxNo: this.nofax, sup_GSTNO: this.GstNo, sup_GSTARNNO: this.ARNNo, sup_GSTcontP: this.person,
            sup_GSTtelno: this.telephone, sup_GSTMobno: this.mobile, sup_GSTcontemail: this.email, sup_GSTtitle: this.title1,
            vguid: this._loginService.getLogin()[0].GUID, MakerID: this._loginService.getLogin()[0].CMPID, MakerIP: this._loginService.getLogin()[0].MAKERIP,
            maineSupid: this.sup_id, reqmode: this.queryParamsReqType,
            IS_Gst_Reg: (this.IS_gst_reg == true) ? '1' : '0'
        };
        this._dataService.Common("Master/SUPPLIER_CHILD_IU", jsonmasterchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.gstlist = data.Table1;
                _this.loaderService.display(false);
                _this.Resetcildrcrd();
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
            _this.txtchild = "Add";
        });
    };
    suppliermaster.prototype.Resetcildrcrd = function () {
        this.childrecdid = "0";
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.Pincode2 = "";
        this.position2 = "";
        this.city2 = "";
        this.GstNo = "";
        this.ARNNo = "";
        this.title1 = "Mr.";
        this.person = "";
        this.telephone = "";
        this.mobile = "";
        this.email = "";
        this.teleno = "";
        this.nofax = "";
        this.country2 = "";
        this.state = "";
        this.txtchild = "Add";
    };
    suppliermaster.prototype.Editchildrecd = function (id) {
        var filterData = this.gstlist.filter(function (filter) { return filter.ID == id; })[0];
        this.childrecdid = id;
        this.fksup_code = filterData.SUP_CODE;
        this.addrs21 = filterData.PURDD1;
        this.addrs22 = filterData.PURADD2;
        this.addrs23 = filterData.PURADD3;
        this.Pincode2 = filterData.PURINCODE;
        this.position2 = filterData.PURPINPOS;
        this.city2 = filterData.INVCITY;
        this.state = filterData.PURSTATE;
        this.country2 = filterData.PURCOUNTRY;
        this.statetinno = filterData.PURSTATETIN;
        this.teleno = filterData.TelePhone_No;
        this.nofax = filterData.Fax_No;
        this.GstNo = filterData.GST_NO;
        this.ARNNo = filterData.GST_ARNNO;
        this.title1 = filterData.GSTTITLE;
        this.person = filterData.GSTCONTP;
        this.telephone = filterData.GSTTELNO;
        this.mobile = filterData.GSTMOBNO;
        this.email = filterData.GSTCONTEMAIL;
        this.statetinno = filterData.PURSTATETIN;
        this.IS_gst_reg = (filterData.IS_GST_Registered == '1') ? true : false;
        this.txtchild = "Update";
    };
    suppliermaster.prototype.deletetmpchildrecd = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsonmaster = { id: id, guid: this._loginService.getLogin()[0].GUID,
                makerid: this._loginService.getLogin()[0].CMPID,
                Mode: this.queryParamsReqType, SUP_CODE: this.quryParamsSupCode };
            this._dataService.getData("Master/supplier_TempAddress_delete", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.gstlist = data.Table1;
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            return false;
        }
        this.loaderService.display(false);
    };
    suppliermaster.prototype.deletedtlrecd = function (id, ISPI) {
        if (this.queryParamsReqType == 'TEMP' && (this.quryParamsSupCode == ' ' || this.quryParamsSupCode != ' ')) {
            this.deletetmpchildrecd(id);
        }
        if (this.queryParamsReqType == ' ' && (this.quryParamsSupCode == ' ' || this.quryParamsSupCode != ' ')) {
            this.deletechildrecd(id, ISPI);
        }
    };
    suppliermaster.prototype.deletechildrecd = function (id, ISPI) {
        var _this = this;
        if (ISPI == "1") {
            this._toasterService.toast("warning", "warning", "Already used in Purchase!");
            return false;
        }
        else if (ISPI == "0") {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsonmaster = { id: id, guid: this._loginService.getLogin()[0].GUID,
                    makerid: this._loginService.getLogin()[0].CMPID, Mode: '',
                    SUP_CODE: this.quryParamsSupCode };
                this._dataService.getData("Master/supplier_Address_delete", jsonmaster)
                    .subscribe(function (data) {
                    if (data.Table[0].STATUS == "100") {
                        _this.gstlist = data.Table1;
                        _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                        _this.loaderService.display(false);
                    }
                    else {
                        _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                        _this.loaderService.display(false);
                    }
                });
            }
        }
        else {
            return false;
        }
        this.loaderService.display(false);
    };
    suppliermaster.prototype.Add_Main = function () {
        var _this = this;
        if (this.ShrtName.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Short name could not be blank !');
            return false;
        }
        if (this.Name.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Name could not be blank !');
            return false;
        }
        if (this.Airline == 'Y') {
            if (this.Airlinecode == '') {
                this._toasterService.toast('warning', 'warning', 'Please enter Airline code !');
                return false;
            }
        }
        if (this.IS_TDSApp == true) {
            if (this.panno == '') {
                this._toasterService.toast('warning', 'warning', 'Pan cardno is compulsory for TDS Applicable !');
                return false;
            }
        }
        this.loaderService.display(true);
        var jsonmaster = {
            id: this.sup_id,
            sup_sname: this.ShrtName.replace("'", "`"),
            sup_name: this.Name.replace("'", "`"),
            sup_title: this.title, sup_add1: this.addrs21, sup_add2: this.addrs22, sup_add3: this.addrs23, sup_email: this.email,
            sup_pincode: this.Pincode2, sup_pinposition: this.position2, sup_city: this.city2, sup_country: this.country2,
            sup_telno: this.teleno, sup_faxno: this.nofax,
            sup_title1: this.Ctitle1,
            sup_contact1: this.Cname1.replace("'", "`"),
            sup_designation1: this.CDesignation1,
            sup_telno1: this.Ctelphone1,
            sup_faxno1: this.Cfaxno1,
            sup_mobile1: this.Cmobileno1,
            sup_cont1email: this.Cemail1,
            sup_title2: this.Ctitle2,
            sup_contact2: this.Cname2,
            sup_designation2: this.CDesignation2,
            sup_telno2: this.Ctelphone2,
            sup_faxno2: this.Cfaxno2,
            sup_mobile2: this.Cmobileno2,
            sup_cont2email: this.Cemail2,
            sup_title3: this.Ctitle3,
            sup_contact3: this.Cname3.replace("'", "`"),
            sup_designation3: this.CDesignation3,
            sup_telno3: this.Ctelphone3,
            sup_faxno3: this.Cfaxno3,
            sup_mobile3: this.Cmobileno3,
            sup_cont3email: this.Cemail3,
            sup_title4: this.Ctitle4,
            sup_contact4: this.Cname4.replace("'", "`"),
            sup_designation4: this.CDesignation4,
            sup_telno4: this.Ctelphone4,
            sup_faxno4: this.Cfaxno4,
            sup_mobile4: this.Cmobileno4,
            sup_cont4email: this.Cemail4,
            airline: this.Airline,
            airlineagent: this.AirlineAgent,
            shippingline: this.shipAgent,
            warehouse: this.warehousse,
            transporter: this.Tranporter,
            agent: this.BusAssociate,
            fwarehouse: this.Franwarehouse,
            others: this.other,
            sup_airlinecode: this.Airlinecode,
            agentcity: this.CitycodeA,
            city: this.sup_city,
            sup_panno: this.panno,
            sup_servicetax: this.servtaxno,
            cmpid: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            RequestMode: this.queryParamsReqType,
            sup_EORINUMBER: this.EORIno,
            Sup_TANNO: this.tanno, sup_GSTNO: '', sup_GSTARNNO: '', sup_GSTtitle: '', sup_GSTcontP: '', sup_GSTtelno: '', sup_GSTMobno: '', sup_GSTcontemail: '',
            vguid: this._loginService.getLogin()[0].GUID,
            IS_TDS: (this.IS_TDSApp == true) ? '1' : '0'
        };
        this._dataService.Common("Master/SUPPLIER_MASTER_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsSupCode == ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Supplier added successfully !');
                }
                else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsSupCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Supplier Authorised successfully !');
                }
                else if (_this.queryParamsReqType == ' ' && _this.quryParamsSupCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Supplier update successfully !');
                }
                else if (_this.queryParamsReqType == ' ' && _this.quryParamsSupCode == ' ') {
                    _this._toasterService.toast('success', 'success', 'Supplier added successfully !');
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
    suppliermaster.prototype.RestMain = function () {
        this.Resetcildrcrd();
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this._dataService.getData("Master/Supplierpageload", jsonmaster)
            .subscribe(function (data) {
            // this.Citylist=data.Table;
        });
        this.ShrtName = '';
        this.Name = '';
        this.panno = '';
        this.EORIno = '';
        this.addrs21 = '';
        this.addrs22 = '';
        this.addrs23 = '';
        this.Pincode2 = '';
        this.position2 = '';
        this.city2 = '';
        this.country2 = '';
        this.teleno = '';
        this.nofax = '';
        this.exphouse = '';
        this.exphousedt;
        this.exphouse;
        this.itcgrpcode = '';
        this.servtaxno = '';
        this.tanno = '';
        this.Ctitle1 = 'Mr.';
        this.Cname1 = '';
        this.Cemail1 = '';
        this.Ctelphone1 = '';
        this.Cfaxno1 = '';
        this.CDesignation1 = '';
        this.Cmobileno1 = '';
        this.Ctitle2 = 'Mr.';
        this.Cname2 = '';
        this.Cemail2 = '';
        this.Ctelphone2 = '';
        this.Cfaxno2 = '';
        this.CDesignation2 = '';
        this.Cmobileno2 = '';
        this.Ctitle3 = 'Mr.';
        this.Cname3 = '';
        this.Cemail3 = '';
        this.Ctelphone3 = '';
        this.Cfaxno3 = '';
        this.CDesignation3 = '';
        this.Cmobileno3 = '';
        this.Ctitle4 = 'Mr.';
        this.Cname4 = '';
        this.Cemail4 = '';
        this.Ctelphone4 = '';
        this.Cfaxno4 = '';
        this.CDesignation4 = '';
        this.Cmobileno4 = '';
        this.sup_city = '';
        this.gstlist = [];
        this._router.navigate(['/master/request/supplier/' + this.queryParamsReqType + '/ ']);
        this.loaderService.display(false);
        this.text = 'Submit';
        this.TdsList = [];
    };
    suppliermaster.prototype.editpopulate = function () {
        var _this = this;
        this.text = 'Update';
        var jsonmaster = { fkSup_code: this.quryParamsSupCode, RequestMode: this.queryParamsReqType, makerid: this._loginService.getLogin()[0].CMPID, vguid: this._loginService.getLogin()[0].VGUID };
        this._dataService.getData("Master/Master_supplier_Populate", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.sup_id = data.Table[0].ID;
                _this.fksup_code = data.Table[0].SUP_CODE;
                _this.ShrtName = data.Table[0].SUP_SNAME;
                _this.title = data.Table[0].SUP_TITLE;
                _this.Name = data.Table[0].SUP_NAME;
                _this.panno = data.Table[0].SUP_PANNO;
                _this.EORIno = data.Table[0].EORI_NUMBER;
                _this.addrs21 = data.Table[0].SUP_ADD1;
                _this.addrs22 = data.Table[0].SUP_ADD2;
                _this.addrs23 = data.Table[0].SUP_ADD3;
                _this.Pincode2 = data.Table[0].SUP_PINCODE;
                _this.position2 = data.Table[0].SUP_PINPOSITION;
                _this.city2 = data.Table[0].SUP_CITY;
                _this.countrycode = data.Table[0].SUP_COUNTRY;
                _this.country2 = data.Table[0].CITY_COUNTRY;
                _this.teleno = data.Table[0].SUP_TELNO;
                _this.nofax = data.Table[0].SUP_FAXNO;
                // this.email= data.Table[0].SUP_EMAIL;     
                _this.GstNo = data.Table[0].SUP_GSTNO;
                _this.ARNNo = data.Table[0].SUP_GSTARNNO;
                _this.title1 = data.Table[0].SUP_GSTTITLE;
                _this.person = data.Table[0].SUP_GSTCONTP;
                _this.telephone = data.Table[0].SUP_GSTTELNO;
                _this.mobile = data.Table[0].SUP_GSTMOBNO;
                _this.email = data.Table[0].SUP_GSTCONTEMAIL;
                _this.servtaxno = data.Table[0].SUP_SERVICETAX;
                _this.tanno = data.Table[0].SUP_TANNO;
                _this.Ctitle1 = data.Table[0].SUP_TITLE1;
                _this.Cname1 = data.Table[0].SUP_CONTACT1;
                _this.Cemail1 = data.Table[0].SUP_CONT1EMAIL;
                _this.Ctelphone1 = data.Table[0].SUP_TELNO1;
                _this.Cfaxno1 = data.Table[0].SUP_FAXNO1;
                _this.CDesignation1 = data.Table[0].SUP_DESIGNATION1;
                _this.Cmobileno1 = data.Table[0].SUP_MOBILE1;
                _this.Ctitle2 = data.Table[0].SUP_TITLE2;
                _this.Cname2 = data.Table[0].SUP_CONTACT2;
                _this.Cemail2 = data.Table[0].SUP_CONT2EMAIL;
                _this.Ctelphone2 = data.Table[0].SUP_TELNO2;
                _this.Cfaxno2 = data.Table[0].SUP_FAXNO2;
                _this.CDesignation2 = data.Table[0].SUP_DESIGNATION2;
                _this.Cmobileno2 = data.Table[0].SUP_MOBILE2;
                _this.Ctitle3 = data.Table[0].SUP_TITLE3;
                _this.Cname3 = data.Table[0].SUP_CONTACT3;
                _this.Cemail3 = data.Table[0].SUP_CONT3EMAIL;
                _this.Ctelphone3 = data.Table[0].SUP_TELNO3;
                _this.Cfaxno3 = data.Table[0].SUP_FAXNO3;
                _this.CDesignation3 = data.Table[0].SUP_DESIGNATION3;
                _this.Cmobileno3 = data.Table[0].SUP_MOBILE3;
                _this.Ctitle4 = data.Table[0].SUP_TITLE4;
                _this.Cname4 = data.Table[0].SUP_CONTACT4;
                _this.Cemail4 = data.Table[0].SUP_CONT4EMAIL;
                _this.Ctelphone4 = data.Table[0].SUP_TELNO4;
                _this.Cfaxno4 = data.Table[0].SUP_FAXNO4;
                _this.CDesignation4 = data.Table[0].SUP_DESIGNATION4;
                _this.Cmobileno4 = data.Table[0].SUP_MOBILE4;
                _this.sup_city = data.Table[0].CITY;
                _this.Airlinecode = data.Table[0].AIRLINECODE;
                _this.CitycodeA = data.Table[0].AGENTCITY;
                _this.Airline = data.Table[0].AIRLINE;
                _this.AirlineAgent = data.Table[0].AIRLINEAGT;
                _this.shipAgent = data.Table[0].SHIPPINGLINE;
                _this.warehousse = data.Table[0].WAREHOUSE;
                _this.Tranporter = data.Table[0].TRANSPORTER;
                _this.BusAssociate = data.Table[0].AGENT;
                _this.Franwarehouse = data.Table[0].FWAREHOUSE;
                _this.other = data.Table[0].OTHERS;
                _this.statetinno = data.Table[0].PURSTATETIN;
                _this.state = data.Table[0].STATE_NAME;
                _this.IS_TDSApp = (data.Table[0].IS_TDS_APP == '1') ? true : false;
                _this.gstlist = data.Table1;
                _this.TdsList = data.Table2;
                _this.citybranchlict = data.Table3;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    suppliermaster.prototype.AddTDScildrcrd = function () {
        var _this = this;
        if (this.countrycode == 'INDIA' || this.countrycode == 'IN') {
            if (this.IS_TDSApp == false) {
                this._toasterService.toast("warning", "warning", "Please select Tds Details first");
                return false;
            }
            var isTDSapp = void 0;
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
                var jsonmasterTDS = { PKID: this.Pk_Tdsid, ID: this.sup_id,
                    SUP_CODE: this.quryParamsSupCode, SECTIONID: this.sections,
                    PER_RATE: this.secRate, FRMDT: fr_dt, TODT: to_dt,
                    TDS_LIMIT_AMT: this.tdsLimit, TDS_TYPE: this.tdstype,
                    MAKERID: this._loginService.getLogin()[0].CMPID,
                    MAKERIP: this._loginService.getLogin()[0].MAKERIP,
                    VGUID: this._loginService.getLogin()[0].GUID, MODEOFENTRY: this.queryParamsReqType,
                    LDCRATE: (this.ldcRate == undefined) ? "0" : this.ldcRate,
                    CMPCODE: (this.Company == "") ? "0" : this.Company,
                    reqmode: this.queryParamsReqType,
                    LDCCERTNO: (this.LdccertNo == "") ? "0" : this.LdccertNo,
                };
                this._dataService.Common("Master/SUPPLIER_CHILD_TDS_IU_NG", jsonmasterTDS)
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
        }
        else {
            this._toasterService.toast("warning", "warning", "TDS only applicable for India");
            this.loaderService.display(false);
        }
    };
    suppliermaster.prototype.AddTDScildrcrd_old = function () {
        var _this = this;
        if (this.countrycode == 'INDIA' || this.countrycode == 'IN') {
            if (this.IS_TDSApp == false) {
                this._toasterService.toast("warning", "warning", "Please select Tds Details first");
                return false;
            }
            var isTDSapp = void 0;
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
                if (this.tdstype == "LDC" && this.ldcRate == "0") {
                    this._toasterService.toast("warning", "warning", "Please select LDS % Rate");
                    return false;
                }
                if (this.tdstype == "LDC" && this.tdsLimit == "0") {
                    this._toasterService.toast("warning", "warning", "Please enter amount limit");
                    return false;
                }
                if (this.tdstype == "LDC" && this.Company == "") {
                    this._toasterService.toast("warning", "warning", "Please select company");
                    return false;
                }
                this.loaderService.display(true);
                var jsonmasterTDS = { PKID: this.Pk_Tdsid, SUP_CODE: this.quryParamsSupCode, SECTIONID: this.sections, PER_RATE: this.secRate, FRMDT: fr_dt, TODT: to_dt, TDS_LIMIT_AMT: this.tdsLimit, TDS_TYPE: this.tdstype, MAKERID: this._loginService.getLogin()[0].CMPID, MAKERIP: this._loginService.getLogin()[0].MAKERIP, VGUID: this._loginService.getLogin()[0].GUID, MODEOFENTRY: this.queryParamsReqType,
                    LDCRATE: (this.ldcRate == undefined) ? "0" : this.ldcRate, CMPCODE: (this.Company == undefined) ? "" : this.Company };
                this._dataService.Common("Master/SUPPLIER_CHILD_TDS_IU", jsonmasterTDS)
                    .subscribe(function (data) {
                    if (data.Table[0].STATUS == "100") {
                        _this.TdsList = data.Table;
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
        }
        else {
            this._toasterService.toast("warning", "warning", "TDS only applicable for India");
            this.loaderService.display(false);
        }
    };
    suppliermaster.prototype.EDIT_Tds = function (id) {
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
    suppliermaster.prototype.ResetTDScildrcrd = function () {
        this.sections = "";
        this.secRate = "0";
        this.frmdt = "";
        this.todt = "";
        this.tdsLimit = "0";
        this.tdstype = "";
        this.ldcRate = "0";
        this.Company = "0";
        this.txtchildTDS = "Add";
        this.Pk_Tdsid = "";
        this.LdccertNo = "";
    };
    suppliermaster.prototype.EnableLDSRate = function (val) {
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
    suppliermaster.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"] }
    ]; };
    suppliermaster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mastersupplier',
            template: __webpack_require__(/*! raw-loader!./supplier.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/supplier.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"]
            //private http1: Http   
        ])
    ], suppliermaster);
    return suppliermaster;
}());



/***/ }),

/***/ "./src/app/master/request/vessel_Agent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/master/request/vessel_Agent.component.ts ***!
  \**********************************************************/
/*! exports provided: vesselAgentmaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vesselAgentmaster", function() { return vesselAgentmaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var vesselAgentmaster = /** @class */ (function () {
    function vesselAgentmaster(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService, http, _configuration
    //private http1: Http   
    ) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.http = http;
        this._configuration = _configuration;
        this.Header = "AGENT(VESSEL) MASTER";
        this.teleno = "";
        this.nofax = "";
        this.ShrtName = "";
        this.panno = "";
        this.title = "Mr.";
        this.Name = "";
        this.addrs21 = "";
        this.addrs22 = "";
        this.addrs23 = "";
        this.position2 = "After";
        this.Pincode2 = "";
        this.city2 = "";
        this.country2 = "";
        this.telephone = "";
        this.mobile = "";
        this.email = "";
        this.Ctitle1 = "Mr.";
        this.Cname1 = "";
        this.CDesignation1 = "";
        this.Ctelphone1 = "";
        this.Cfaxno1 = "";
        this.Cmobileno1 = "";
        this.Cemail1 = "";
        this.Ctitle2 = "Mr.";
        this.Cname2 = "";
        this.CDesignation2 = "";
        this.Ctelphone2 = "";
        this.Cfaxno2 = "";
        this.Cmobileno2 = "";
        this.Cemail2 = "";
        this.Ctitle3 = "Mr.";
        this.Cname3 = "";
        this.CDesignation3 = "";
        this.Ctelphone3 = "";
        this.Cfaxno3 = "";
        this.Cmobileno3 = "";
        this.Cemail3 = "";
        this.Ctitle4 = "Mr.";
        this.Cname4 = "";
        this.CDesignation4 = "";
        this.Ctelphone4 = "";
        this.Cfaxno4 = "";
        this.Cmobileno4 = "";
        this.Cemail4 = "";
        this.vslAgntId = "0";
        this.queryParamsReqType = "";
        this.quryParamsAgtCode = "";
        this.validEmail = false;
        this.exphousedt = "";
        this.exphouse = "";
        this.bnkDivision = "";
        this.sup_city = [];
        this.fileData = null;
        this.uploadedFilePath = null;
        this.text = "Submit";
        this.AgtCode = "";
        this.SHPGLine1 = "SELF";
        this.SHPGLine2 = "";
        this.SHPGLine3 = "";
        this.SHPGLine4 = "";
        this.isLoadingData = false;
    }
    vesselAgentmaster.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsReqType = params["ReqType"];
            _this.quryParamsAgtCode = params["VslAgtC"];
        });
        var jsonmaster = { CMPID: this._loginService.getLogin()[0].CMPID };
        this.loaderService.display(true);
        this.loaderService.display(true);
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
        this._dataService.getAll("Master/AgentFill")
            .subscribe(function (data) {
            _this.Shipgline = data.Table;
            _this.loaderService.display(false);
        });
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsAgtCode != ' ') {
            this._loginService.verifyRights(107, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'AGENT(VESSEL) MASTER - UPDATE REQUEST';
            this.populateEdit();
        }
        else if (this.queryParamsReqType == ' ' && this.quryParamsAgtCode != ' ') {
            this._loginService.verifyRights(107, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.Header = 'AGENT(VESSEL) MASTER - UPDATE';
            this.populateEdit();
        }
        if (this.queryParamsReqType == 'TEMP' && this.quryParamsAgtCode == ' ') {
            this.Header = 'AGENT(VESSEL) MASTER - REQUEST TO ADD';
        }
        if (this.queryParamsReqType == ' ' && this.quryParamsAgtCode == ' ') {
            this.Header = 'AGENT(VESSEL) MASTER - ADD';
            this._loginService.verifyRights(107, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        }
    };
    vesselAgentmaster.prototype.Countryfilter = function (citycode) {
        this.listcnt = this.Citylist.filter(function (cntrylist) { return cntrylist.DATAVALUEFIELD == citycode; });
        this.country2 = this.listcnt[0].CITY_COUNTRY;
        this.countrycode = this.listcnt[0].ISO_COUNTRY_CODE;
    };
    vesselAgentmaster.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
        }
    };
    vesselAgentmaster.prototype.populateEdit = function () {
        var _this = this;
        this.text = 'Update';
        this.loaderService.display(true);
        var jsonmaster = { fkAgt_code: this.quryParamsAgtCode, RequestMode: this.queryParamsReqType };
        this._dataService.getData("Master/Master_VesselAgent_Populate", jsonmaster)
            .subscribe(function (data) {
            _this.vslAgntId = data.Table[0].id;
            _this.AgtCode = data.Table[0].agt_code;
            _this.ShrtName = data.Table[0].agt_sname;
            _this.Name = data.Table[0].agt_name;
            _this.title = data.Table[0].agt_title;
            _this.addrs21 = data.Table[0].agt_add1;
            _this.addrs22 = data.Table[0].agt_add2;
            _this.addrs23 = data.Table[0].agt_add3;
            _this.email = data.Table[0].agt_email;
            _this.Pincode2 = data.Table[0].agt_pincode;
            _this.position2 = data.Table[0].agt_pinposition;
            _this.city2 = data.Table[0].agt_city;
            _this.country2 = data.Table[0].city_country;
            _this.countrycode = data.Table[0].agt_country;
            _this.telephone = data.Table[0].agt_telno;
            _this.nofax = data.Table[0].agt_faxno;
            _this.Ctitle1 = data.Table[0].agt_title1;
            _this.Cname1 = data.Table[0].agt_contact1;
            _this.CDesignation1 = data.Table[0].agt_designation1;
            _this.Ctelphone1 = data.Table[0].con_telno1;
            _this.Cfaxno1 = data.Table[0].agt_faxno1;
            _this.Cmobileno1 = data.Table[0].agt_telno1;
            _this.Cemail1 = data.Table[0].agt_cont1email;
            _this.Cemail2 = data.Table[0].agt_cont2email;
            _this.Cemail3 = data.Table[0].agt_cont3email;
            _this.Cemail4 = data.Table[0].agt_cont4email;
            _this.Ctitle2 = data.Table[0].agt_title2;
            _this.Cname2 = data.Table[0].agt_contact2;
            _this.CDesignation2 = data.Table[0].agt_designation2;
            _this.Ctelphone2 = data.Table[0].con_telno2;
            _this.Cfaxno2 = data.Table[0].agt_faxno2;
            _this.Cmobileno2 = data.Table[0].agt_telno2;
            _this.Cname3 = data.Table[0].agt_contact3;
            _this.Ctitle3 = data.Table[0].agt_title3;
            _this.Cname3 = data.Table[0].cagt_contact3;
            _this.CDesignation3 = data.Table[0].agt_designation3;
            _this.Ctelphone3 = data.Table[0].con_telno3;
            _this.Cfaxno3 = data.Table[0].agt_faxno3;
            _this.Cmobileno3 = data.Table[0].agt_telno3;
            _this.Cname4 = data.Table[0].agt_contact4;
            _this.Ctitle4 = data.Table[0].agt_title4;
            _this.Cname4 = data.Table[0].con_contact4;
            _this.CDesignation4 = data.Table[0].agt_designation4;
            _this.Ctelphone4 = data.Table[0].con_telno4;
            _this.Cfaxno4 = data.Table[0].agt_faxno4;
            _this.Cmobileno4 = data.Table[0].agt_telno4;
            _this.SHPGLine1 = data.Table[0].agt_liner1;
            _this.SHPGLine2 = data.Table[0].agt_liner2;
            _this.SHPGLine3 = data.Table[0].agt_liner3;
            _this.SHPGLine4 = data.Table[0].agt_liner4;
            _this.panno = data.Table[0].agt_panno;
        });
        this.loaderService.display(false);
    };
    vesselAgentmaster.prototype.Add_Main = function () {
        var _this = this;
        if (this.ShrtName.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Short name could not be blank !');
            return false;
        }
        if (this.Name.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Name could not be blank !');
            return false;
        }
        if (this.city2.normalize() == "") {
            this._toasterService.toast('warning', 'warning', 'Please select City !');
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            id: this.vslAgntId,
            agt_sname: this.ShrtName,
            agt_name: this.Name,
            agt_title: this.title,
            agt_add1: this.addrs21,
            agt_add2: this.addrs22,
            agt_add3: this.addrs23,
            agt_email: this.email,
            agt_pincode: this.Pincode2,
            agt_pinposition: this.position2,
            agt_city: this.city2,
            agt_country: this.country2,
            agt_telno: this.telephone,
            agt_faxno: this.nofax,
            agt_title1: this.Ctitle1,
            agt_contact1: this.Cname1,
            agt_designation1: this.CDesignation1,
            agt_telno1: this.Ctelphone1,
            agt_faxno1: this.Cfaxno1,
            agt_mobile1: this.Cmobileno1,
            agt_cont1email: this.Cemail1,
            agt_title2: this.Ctitle2,
            agt_contact2: this.Cname2,
            agt_designation2: this.CDesignation2,
            agt_telno2: this.Ctelphone2,
            agt_faxno2: this.Cfaxno2,
            agt_mobile2: this.Cmobileno2,
            agt_cont2email: this.Cemail2,
            agt_title3: this.Ctitle3,
            agt_contact3: this.Cname3,
            agt_designation3: this.CDesignation3,
            agt_telno3: this.Ctelphone3,
            agt_faxno3: this.Cfaxno3,
            agt_mobile3: this.Cmobileno3,
            agt_cont3email: this.Cemail3,
            agt_title4: this.Ctitle4,
            agt_contact4: this.Cname4,
            agt_designation4: this.CDesignation4,
            agt_telno4: this.Ctelphone4,
            agt_faxno4: this.Cfaxno4,
            agt_mobile4: this.Cmobileno4,
            agt_cont4email: this.Cemail4,
            agt_panno: this.panno,
            agt_liner1: this.SHPGLine1,
            agt_liner2: this.SHPGLine2,
            agt_liner3: this.SHPGLine3,
            agt_liner4: this.SHPGLine4,
            MakerID: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            RequestMode: this.queryParamsReqType
        };
        this._dataService.Common("Master/Vessel_Agent_MASTER_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsAgtCode == ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Vessel Agent saved successfully !');
                }
                else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsAgtCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Requst Vessel Agent Authorised successfully !');
                }
                else if (_this.queryParamsReqType == " " && _this.quryParamsAgtCode != ' ') {
                    _this._toasterService.toast('success', 'success', 'Vessel Agent update successfully !');
                }
                else if (_this.queryParamsReqType == " " && _this.quryParamsAgtCode == " ") {
                    _this._toasterService.toast('success', 'success', 'Vessel Agent saved successfully !');
                }
                _this.loaderService.display(false);
                _this.RestMain();
            }
            else if (data.Table[0].STATUS == "105") {
                if (confirm(data.Table[0].STATUSTEXT)) {
                    _this._dataService.Common("Master/Vessel_Agent_MASTER_IU", jsonmaster)
                        .subscribe(function (data) {
                        if (data.Table[0].STATUS == "100") {
                            if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsAgtCode == ' ') {
                                _this._toasterService.toast('success', 'success', 'Requst Vessel Agent saved successfully !');
                            }
                            else if (_this.queryParamsReqType == 'TEMP' && _this.quryParamsAgtCode != ' ') {
                                _this._toasterService.toast('success', 'success', 'Requst Vessel Agent Authorised successfully !');
                            }
                            else if (_this.queryParamsReqType == " " && _this.quryParamsAgtCode != ' ') {
                                _this._toasterService.toast('success', 'success', 'Vessel Agent update successfully !');
                            }
                            else if (_this.queryParamsReqType == " " && _this.quryParamsAgtCode == " ") {
                                _this._toasterService.toast('success', 'success', 'Vessel Agent saved successfully !');
                            }
                            _this.loaderService.display(false);
                            _this.RestMain();
                        }
                        else if (data.Table[0].STATUS == "105") {
                            _this._toasterService.toast("warning", "warning", 'Add VesselAgent with different City & address ');
                            _this.loaderService.display(false);
                        }
                    });
                }
                else {
                    _this.loaderService.display(false);
                    return false;
                }
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    vesselAgentmaster.prototype.RestMain = function () {
        this.ShrtName = '';
        this.Name = '';
        this.title = 'Messrs';
        this.countrycode = '';
        this.telephone = '';
        this.Ctitle1 = 'Mr.';
        this.Cname1 = '';
        this.CDesignation1 = '';
        this.Ctelphone1 = '';
        this.Cfaxno1 = '';
        this.Cmobileno1 = '';
        this.Cemail1 = '';
        this.Ctitle2 = 'Mr.';
        this.Cname2 = '';
        this.CDesignation2 = '';
        this.Ctelphone2 = '';
        this.Cfaxno2 = '';
        this.Cmobileno2 = '';
        this.Cname3 = '';
        this.Ctitle3 = 'Mr.';
        this.Cname3 = '';
        this.CDesignation3 = '';
        this.Ctelphone3 = '';
        this.Cfaxno3 = '';
        this.Cmobileno3 = '';
        this.Cname4 = '';
        this.Ctitle4 = 'Mr.';
        this.Cname4 = '';
        this.CDesignation4 = '';
        this.Ctelphone4 = '';
        this.Cfaxno4 = '';
        this.Cmobileno4 = '';
        this.Cemail4 = '';
        this.SHPGLine1 = "";
        this.SHPGLine2 = "";
        this.SHPGLine3 = "";
        this.SHPGLine4 = "";
        this.panno = "";
        this.text = 'Submit';
        // if(this.queryParamsReqType=="Exporter"){
        this._router.navigate(['/master/request/AgentVessel/' + this.queryParamsReqType + ' / ']);
        /// }
    };
    vesselAgentmaster.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"] }
    ]; };
    vesselAgentmaster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masterAgentVessel',
            template: __webpack_require__(/*! raw-loader!./vessel_Agent.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/request/vessel_Agent.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _app_constants__WEBPACK_IMPORTED_MODULE_8__["Configuration"]
            //private http1: Http   
        ])
    ], vesselAgentmaster);
    return vesselAgentmaster;
}());



/***/ })

}]);
//# sourceMappingURL=request-request-module.js.map