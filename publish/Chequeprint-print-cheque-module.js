(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chequeprint-print-cheque-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <table style=\"width: 100%; height: 100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n\r\n            <tr class=\"trSpace\" height=\"100%\">\r\n                <td align=\"center\" valign=\"top\">\r\n                    <div id=\"space\" class=\"divSpace\">\r\n                        <table style=\"width: 750px;\" class=\"BorderShd\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n\r\n                            <tr>\r\n                                <td bgcolor=\"#ffffff\" height=\"1\">\r\n                                    <table id=\"Table4\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\">\r\n                                        <tr>\r\n                                            <td colspan=\"2\" align=\"left\"   rowspan=\"2\"  >\r\n                                             <table id=\"Table2\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\">\r\n                                            <tr>\r\n                                             <!-- <td   >\r\n                                             &nbsp;<img src=\"assets/img/stand_chartyed.jpeg\" style=\"height: 32px\" /></td> -->\r\n                                             <td   >\r\n                                                &nbsp;<img src=\"../../../assets/img/SCB.JPG\" style=\"height: 32px\" /></td>\r\n                                             <td valign=top>\r\n                                                <!-- <asp:Label ID=\"Label20\" runat=\"server\" Text=\"90 M.G Road\"\r\n                                                    CssClass=\"lbloutPutSubHeader1\"></asp:Label> -->\r\n                                                    <span class=\"lbloutPutSubHeader1\" style=\"display: block;\r\n                                                    margin-bottom: -.2em;\" >\r\n                                                        90 M.G Road\r\n                                                    </span>\r\n                                           \r\n                                                <!-- <asp:Label ID=\"Label21\" runat=\"server\" Text=\"Mumbai 400 001\"\r\n                                                    CssClass=\"lbloutPutSubHeader1\"></asp:Label> -->\r\n                                                    <span class=\"lbloutPutSubHeader1\" style=\"display: block;margin-bottom: -.2em;\">\r\n                                                        Mumbai 400 001\r\n                                                    </span>\r\n                                                  \r\n                                                <!-- <asp:Label ID=\"Label22\" runat=\"server\" Text=\"IFC&quot;SCBL0036001&quot;\"\r\n                                                    CssClass=\"lbloutPutSubHeader1\"></asp:Label> -->\r\n                                                    <span class=\"lbloutPutSubHeader1\" style=\"display: block;margin-bottom: -.2em;\" >\r\n                                                        IFC&quot;SCBL0036001&quot;\r\n                                                    </span>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                           <td colspan=\"2\" >\r\n                                                <!-- <asp:Label ID=\"Label19\" runat=\"server\" Text=\"Standard Charted Bank \"\r\n                                                    CssClass=\"lbloutPutSubHeader1\"></asp:Label> -->\r\n                                                    <span class=\"lbloutPutSubHeader1\">\r\n                                                        Standard Charted Bank\r\n                                                    </span>\r\n                                           </td>\r\n                                            </tr>\r\n                                          </table>\r\n                                          </td>\r\n                                            <td colspan=\"2\" align=\"left\"   rowspan=\"2\"  >\r\n                                                    <!-- <asp:Label ID=\"Label5\" runat=\"server\" Text=\"ACCOUNT PAYEE\"\r\n                                                        CssClass=\"lbloutHeader\"></asp:Label> -->\r\n                                                        <span class=\"lbloutHeader\">\r\n                                                            ACCOUNT PAYEE\r\n                                                        </span>\r\n                                            </td>\r\n                                            <td colspan=\"4\" align=\"left\"  >\r\n                                                    </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td colspan=\"4\" align=\"center\"   >\r\n                                                <!-- <asp:Label ID=\"Label18\" runat=\"server\" Text=\"231-0-500233-4\" CssClass=\"lbloutPutNor\"></asp:Label> -->\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    231-0-500233-4\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td colspan=\"2\"  >\r\n                                            </td>\r\n                                            <td colspan=\"3\" >\r\n                                            </td>\r\n                                            <td   colspan=\"3\" align=\"center\"  >\r\n                                                <!-- <asp:Label ID=\"lbldate\" runat=\"server\" CssClass=\"lbloutPutNor\"></asp:Label> -->\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                   {{CHEQUEDT}}\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"left\"   colspan=\"8\">\r\n                                                <!-- <asp:Label ID=\"Label16\" Text=\"PAY  \" runat=\"server\" CssClass=\"lbloutPutNor\"></asp:Label> -->\r\n                                                <span class=\"lbloutPutNor\">\r\n                                                    PAY\r\n                                                </span>\r\n                                                &nbsp;\r\n                                                <span class=\"lbloutPutHeader\" >\r\n                                                    {{PAYEENAME}}\r\n                                                </span>\r\n                                                <!-- <asp:Label ID=\"lblpay\" runat=\"server\" CssClass=\"lbloutPutHeader\"></asp:Label> -->\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 12px\"\r\n                                                colspan=\"5\">\r\n                                            </td>\r\n                                            <td align=\"center\" colspan=\"3\">\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    XXXXXXXXX\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        <td  colspan=\"5\">\r\n\r\n                                                <!-- <asp:Label ID=\"Label17\" Text=\"RUPEES  \" runat=\"server\" CssClass=\"lbloutPutNor\"></asp:Label> -->\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    RUPEES  </span>  &nbsp; <span class=\"lbloutPutHeader\" >{{AMOUNT_words}}</span>\r\n                                                \r\n                                                &nbsp;\r\n\r\n\r\n                                            </td>\r\n                                            <td align=\"center\" colspan=\"3\">\r\n                                                <span class=\"col-form-span-label\" style=\"border:1px solid black\">\r\n                                                    <b style=\"color: blue;\">Rs. {{CHEQUEAMOUNT |number:'2.2-4'}}******</b>\r\n                                                </span>\r\n                                            </td>\r\n\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 12px\"\r\n                                                colspan=\"5\" height=\"20\">\r\n                                                <span class=\"lbloutPutHeader\"> \r\n                                                    Not Over Rs.{{NOTOVERAMT |number:'2.2-4'}}. </span>\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\" height=\"20\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 12px\"\r\n                                                colspan=\"2\"  >\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 12px\"\r\n                                                colspan=\"3\"  >\r\n                                            </td>\r\n                                            <td align=\"center\" colspan=\"3\">\r\n                                                <span class=\"lbloutPutSubHeader\">\r\n                                                    <!-- For MANILAL PATEL CLEARING FORWARDING PVT.LTD -->\r\n                                                    For {{table8[0].CMP_NAME}}\r\n                                                 </span>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 9px\"\r\n                                                colspan=\"5\">\r\n                                                <span class=\"lbloutPutSubHeader1\"  >\r\n                                                    PAYABLE AT PER AT ALL BRANCHES OF STANDARD CHARTED BANK IN INDIA\r\n                                                 </span>\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\"  >\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"5\">\r\n                                                &nbsp;</td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"2\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\" >\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" colspan=\"3\">\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    Authorized Signatory\r\n                                                  </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"2\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\"  >\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    {{CHEQUENO}}\r\n                                                     </span>\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"2\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"8\">\r\n                                                ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                         </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" colspan=\"8\">\r\n\r\n                                                    <span class=\"lblRPTHeader\" >\r\n                                                        <!-- MANILAL PATEL CLEARING FORWARDING PVT.LTD  -->\r\n                                                        {{table8[0].CMP_NAME}}\r\n                                                           </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" colspan=\"8\">\r\n                                                    <span class=\"lbloutPutSubHeader1\" >\r\n                                                       <!-- KAMER BUILDING 3RD FLOOR, 38 CAWASJI PATEL STREET,FORT, MUMBAI - 400 001 -->\r\n                                                       {{table8[0].CMP_ADD1}} +  {{table8[0].CMP_ADD2}} +  {{table8[0].CMP_ADD3}}\r\n                                                           </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" colspan=\"8\"  >\r\n                                                <span class=\"lbloutPutSubHeader1\" >\r\n                                                   <!-- Tel:- +91 (0) 22 2204 1307 / 2204 1507 , Fax : +91 (0) 22 2204 6293 -->\r\n                                                   Tel:- {{table8[0].CMP_TELNO}} , Fax: {{table8[0].CMP_FAXNO}}\r\n                                                       </span>\r\n                                             </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" colspan=\"8\">\r\n                                                <span class=\"lbloutPutSubHeader1\">\r\n                                                   <!-- manilal.bom@manilal.com -->\r\n                                                   {{table8[0].CMP_EMAIL}}\r\n                                                       </span>\r\n                                              </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"2\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\"  >\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 10px\"\r\n                                                colspan=\"3\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"left\" colspan=\"2\">\r\n                                                <span class=\"lbloutPutHeader\">\r\n                                                    <b>Cheque No: </b>\r\n                                                                 </span>\r\n                                            </td>\r\n                                            <td align=\"left\"  colspan=\"3\">\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    {{chequeno}}\r\n                                                     </span>\r\n                                            </td>\r\n                                            <td align=\"right\" colspan=\"2\">\r\n                                                <span class=\"lbloutPutHeader\">\r\n                                                    <b>Cheque Date: </b>\r\n                                                     </span>\r\n\r\n                                            </td>\r\n                                            <td align=\"center\">\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    {{CHEQUEDT}}\r\n                                                      </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"left\" colspan=\"2\">\r\n                                                <span class=\"lbloutPutHeader\" >\r\n                                                    <b>Our Bank Payment Ref No: </b>\r\n                                                                 </span>\r\n\r\n                                            </td>\r\n                                            <td align=\"left\" colspan=\"5\">\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    {{printentryno}}\r\n                                                     </span>\r\n\r\n                                            </td>\r\n                                            <td align=\"left\">\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" colspan=\"8\" height=\"1px\">\r\n                                                <hr style=\"width: 787px; height: 1px;\" dir=\"rtl\" size=\"1\" width=\"1\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" colspan=\"8\">\r\n                                                <table class=\"table table-responsive-sm table-sm-new table-bordered bgwhite\" >\r\n                                                    <thead >\r\n                                                        <tr>\r\n                                                            <td class=\"lbloutPutHeader\"  >Your Ref No</td >\r\n                                                            <td class=\"lbloutPutHeader\"  >Your Inv dt.</td                              >\r\n                                                            <td  class=\"lbloutPutHeader\"  >Our Ref No</td >\r\n                                                            <td  class=\"lbloutPutHeader\" >Amount</td >\r\n                                                        </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                        <tr *ngFor=\"let data of table6\">\r\n                                                            <td><span class=\"lbloutPutNor\"  >{{data.YOUR_REF_NO}}</span></td>\r\n                                                            <td><span class=\"lbloutPutNor\" >{{data.YOUR_INV_DT}}</span></td>\r\n                                                            <td><span class=\"lbloutPutNor\"  >{{data.OUR_REF_NO}}</span></td>\r\n                                                            <td><span class=\"lbloutPutNor\"  >{{data.AMOUNT|number:'2.2-4'}}</span></td>\r\n                                                        </tr>\r\n\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"center\" height=\"1px\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"center\" colspan=\"2\" height=\"1px\">\r\n                                                &nbsp;\r\n                                            </td>\r\n                                            <td align=\"right\" colspan=\"3\" height=\"1px\">\r\n                                                <span class=\"lbloutPutHeader\" >\r\n                                                    <b>Net Total</b>\r\n                                                </span>\r\n                                            </td>\r\n                                            <td align=\"center\" colspan=\"2\" height=\"1px\">\r\n                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                <span class=\"lbloutPutHeader\">\r\n                                                    <b>{{AMOUNT|number:'2.2-4'}}</b>\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td align=\"left\" colspan=\"8\">\r\n                                                <span class=\"lbloutPutNor\" >\r\n                                                    {{NARRATION}}\r\n                                                       </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <!-- <tr>\r\n                                            <td align=\"left\" colspan=\"8\">\r\n                                                <asp:TextBox ID=\"txtPageNo\" runat=\"server\" Visible=\"False\"></asp:TextBox>\r\n                                            </td>\r\n                                        </tr> -->\r\n                                    </table>\r\n                                </td>\r\n                            </tr>\r\n\r\n                        </table>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"formheading\" height=\"20\">\r\n                <td>\r\n                    <table style=\"width: 100%;\" border=\"0\">\r\n                        <tr>\r\n                            <td width=\"50%\">\r\n\r\n                            </td>\r\n                            <td align=\"right\" valign=\"bottom\" width=\"150px\">\r\n\r\n                                <table style=\"width: 100%;\" border=\"0\">\r\n                                    <tr>\r\n\r\n                                        <td align=\"left\">\r\n                                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"printchq()\">\r\n                                                <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Print Cheque No. {{CHQNO}}</span></button>\r\n                                        </td>\r\n                                        <td align=\"left\">\r\n                                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" disabled>\r\n                                                <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Update Cheque\r\n                                                    No. {{CHQNO}}</span></button>\r\n                                        </td>\r\n                                        <td align=\"left\">\r\n                                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"BPprint()\">\r\n                                                <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Print BP No. {{ACC_BANK_ENTRYNO}}</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/Chequeprint/cheque-review.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/Chequeprint/cheque-review.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <strong>{{Header| uppercase}}</strong>\n                </div>\n            </div>\n        </div>\n    </div>\n<br>\n<br>\n    <div class=\"container border\" >\n        <div class=\"row\"> \n            <div class=\"col-md-4 col-lg-4 space\"  >\n                <div style=\"display: inline-flex;\">\n                    <span>\n                     <img src=\"../../../../assets/img/stand_chartyed.jpeg\" alt=\"\">\n                    </span>\n                    <span class=\"col-form-span-label\" style=\"color: blue;\">\n                     90 M.G Road <br>\n                     Mumbai 400 001<br>\n                     IFC\"SCBL0036001\"\n                    </span>\n                 </div>\n            </div>\n            <div class=\"col-md-4 col-lg-4 centerlabel space\" >\n                <br>\n                <span class=\"col-form-span-label\" style=\"border-top:1px solid black;border-bottom:1px solid black;color: blue;\">\n                   ACCOUNT PAYEE\n                </span>\n              \n            </div>\n            <div class=\"col-md-4 col-lg-4 centerlabel space\" >\n                <br>\n                <span class=\"col-form-span-label \">\n                    <b  style=\"color: blue;\">231-0-500233-4</b>\n                </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 space\">\n                <span class=\"col-form-span-label\"  style=\"color: blue;\">\n                    Standard Charted Bank\n                </span>\n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 centerlabel space\" >              \n            </div>\n            <div class=\"col-md-6 col-lg-6 centerlabel\" >\n                <span class=\"col-form-span-label\"  style=\"color: blue;\">\n                  {{table5.CHEQUEDT}}\n                </span>\n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 space\" >          \n                <span class=\"col-form-span-label\"  style=\"color: blue;\">\n                   PAY &nbsp;<b >{{table5.PAYEENAME}}</b>\n                </span>    \n            </div>\n            <div class=\"col-md-6 col-lg-6 space\" >\n        \n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 space\" >          \n     \n            </div>\n            <div class=\"col-md-6 col-lg-6 centerlabel space\" >\n                <span class=\"col-form-span-label\" style=\"color: blue;\">\n                    XXXXXXXXX\n                </span> \n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 space\" >   \n                <span class=\"col-form-span-label\"   style=\"color: blue;\">       \n                RUPEES &nbsp;<b> {{AMOUNT_words}}.</b>  </span> \n            </div>\n            <div class=\"col-md-6 col-lg-6 centerlabel space\" >\n                <span class=\"col-form-span-label\" style=\"border:1px solid black\">\n                    <b style=\"color: blue;\">Rs. {{table5.CHEQUEAMOUNT |number:'2.2-4'}}******</b>\n                </span> \n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 space\" >   \n                <span class=\"col-form-span-label\">       \n                    <b style=\"color: blue;\">Not Over Rs.{{table5.NOTOVERFLAG |number:'2.2-4'}}.</b>  </span> \n            </div>\n            <div class=\"col-md-6 col-lg-6\" >\n              \n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 \" >            \n            </div>\n            <div class=\"col-md-6 col-lg-6 centerlabel space\" >   \n                <span class=\"col-form-span-label\" style=\"color: blue;\">       \n                   For MANILAL PATEL CLEARING FORWARDING PVT.LTD \n                </span> \n            </div>\n         \n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 space\" >\n                <span class=\"col-form-span-label\"  style=\"color: blue;\">\n                   PAYABLE AT PER AT ALL BRANCHES OF STANDARD CHARTED BANK IN INDIA\n                </span> \n            </div>\n            <div class=\"col-md-6 col-lg-6 \" >   \n            </div>\n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-6 col-lg-6 \" >   \n            </div>\n            <div class=\"col-md-6 col-lg-6 centerlabel space\" >\n                <span class=\"col-form-span-label\" style=\"color: blue;\">\n                  Authorized Signatory\n                </span> \n            </div>\n     \n        </div>\n        <div class=\"row\" > \n            <div class=\"col-md-4 col-lg-4\" >\n\n            </div>\n            <div class=\"col-md-4 col-lg-4 centerlabel space\" >\n                <span class=\"col-form-span-label\" style=\"color: blue;\">\n                    {{table5.CHEQUENO}}\n                     </span>\n              \n            </div>\n            <div class=\"col-md-4 col-lg-4 centerlabel\" >\n             \n            </div>\n        </div>\n<div class=\"row\"><div class=\"col-12 space\"><hr></div></div>\n    \n<div class=\"row\" > \n\n    <div class=\"col-12 centerlabel space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n          <b>MANILAL PATEL CLEARING FORWARDING PVT.LTD </b> <br>\n          KAMER BUILDING ,3RD FLOOR,38 CAWASJI PATEL STREET FORT ,MUMBAI-400 001.        <br>\n          Tel:+91(0) 22 2204 1907/2204 5507. Fax:+91(0)22 22204 6299\n          Email:Manilal.bom@180.179.207.163\n             </span>\n      \n    </div>\n \n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-3 col-lg-3  space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n<b>Cheque No: </b>         \n             </span>\n      \n    </div>\n    <div class=\"col-md-3 col-lg-3  space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n            {{table5.CHQNO}}        \n             </span>\n      \n    </div>\n    <div class=\"col-md-3 col-lg-3  space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n            <b>Cheque Date: </b>         \n             </span>\n      \n    </div>\n    <div class=\"col-md-3 col-lg-3  space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n           {{table5.CHEQUEDT1}}         \n             </span>\n      \n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3 col-lg-3  space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n<b>Our Bank Payment Ref No: </b>         \n             </span>\n      \n    </div>\n    <div class=\"col-md-3 col-lg-3  space\" >\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n            {{table5.ACC_BANK_ENTRYNO}}       \n             </span>\n      \n    </div>\n</div>\n<div class=\"row\"><div class=\"col-12 space\"><hr></div></div>\n\n<div class=\"row\">\n<div class=\"col-12\">\n        <table class=\"table table-responsive-sm table-sm-new table-bordered bgwhite\" >\n            <thead >\n                <tr>\n                    <td class=\"col-form-span-label\"  style=\"color: blue;\"><b>Your Ref No</b></td >\n                    <td class=\"col-form-span-label \"  style=\"color: blue;\"><b>Your Inv dt.</b></td                              >\n                    <td  class=\"col-form-span-label\"  style=\"color: blue;\"><b>Our Ref No</b></td >\n                    <td  class=\"col-form-span-label \"  style=\"color: blue;\"><b>Amount</b></td >\n                </tr>\n            </thead>\n            <tbody>                               \n                <tr *ngFor=\"let data of table6\">              \n                    <td><span class=\"col-form-span-label\"  style=\"color: blue;\">{{data.YOUR_REF_NO}}</span></td>\n                    <td><span class=\"col-form-span-label\"  style=\"color: blue;\">{{data.YOUR_INV_DT}}</span></td>\n                    <td><span class=\"col-form-span-label\"  style=\"color: blue;\">{{data.OUR_REF_NO}}</span></td>\n                    <td><span class=\"col-form-span-label\"  style=\"color: blue;\">{{data.AMOUNT|number:'2.2-4'}}</span></td>\n                </tr>\n       \n            </tbody>\n        </table>\n\n</div>\n</div>\n\n    <div class=\"row\" > \n        <div class=\"col-md-3 col-lg-3 \" >   \n        </div>\n        <div class=\"col-md-3 col-lg-3 \" >   \n        </div>\n        <div class=\"col-md-3 col-lg-3 centerlabel space\" >\n            <span class=\"col-form-span-label\" style=\"color: blue;\">\n                <b>Net Total</b>\n            </span> \n        </div>\n        <div class=\"col-md-3 col-lg-3 centerlabel space\" >\n            <span class=\"col-form-span-label\" style=\"color: blue;\">\n                <b>{{AMOUNT|number:'2.2-4'}}</b>\n            </span> \n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <span class=\"col-form-span-label\" style=\"color: blue;\">\n            {{table5.NARRATION}}\n               </span>\n    </div>\n</div>\n    </div>\n<br>\n    <div class=\"row no-gutters footerbtn\">\n        <div class=\"col-12\">\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"printchq()\">\n                    <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Print Cheque No. {{table5.CHQNO}}</span></button>\n                &nbsp;\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\" disabled>\n                    <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Update Cheque\n                        No. {{table5.CHQNO}}</span></button> &nbsp;\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"BPprint()\">\n                    <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Print BP No. {{table5.ACC_BANK_ENTRYNO}}</span></button>\n                &nbsp;\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <strong>{{Header| uppercase}}</strong>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Bank</b> </span><span\n                        class=\"col-form-span-error\">*</span></td>\n                <td>\n                    <select class=\"form-control width350\"  [(ngModel)]=\"BankName\" (ngModelChange)=\"cheserchprint()\">\n                        <option value=\"\">Please select</option>\n                        <option *ngFor=\"let d of BankList\"  value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>\n                    </select>\n                </td>.\n                <td colspan=\"2\" align=\"center\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"addchequestock()\">\n                        <span class=\"col-form-span-label\"><i\n                                class=\"fa fa-dot-circle-o\"></i>View Available Cheque No</span></button>\n                </td>\n                </tr>\n                <tr>\n                    <td><span class=\"col-form-span-label\"><b>Starting Cheque No</b> </span><span\n                        class=\"col-form-span-error\">*</span></td>\n                <td colspan=\"3\">\n                    <div style=\"display: inline-flex;\">\n                    <input [(ngModel)]=\"start_chqno\" type=\"text\"  class=\"form-control width180\" maxlength=\"40\" >\n                    <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"cheqavailable()\">\n                        <span class=\"col-form-span-label\"><i\n                                class=\"fa fa-dot-circle-o\"></i>Cheque Status</span></button>&nbsp;&nbsp;\n                                <span class=\"col-form-span-label font-weight-bold\">{{chkstatus}}</span>\n                            </div>  </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n    </div>\n\n    <div class=\"row no-gutters\">\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\n            <div  style=\"height: 380px;overflow-y:auto;overflow-x: hidden;width: 100%;\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <thead >\n                    <tr  class=\"col-form-span-heading\">\n                        <td class=\"col-form-span-label\"></td >\n                        <td class=\"col-form-span-label font-weight-bold \">Status</td >\n                        <td class=\"col-form-span-label font-weight-bold \">Entry No</td                              >\n                        <td  class=\"col-form-span-label font-weight-bold \">Cheque No</td >\n                        <td  class=\"col-form-span-label font-weight-bold \">Cheque Type</td >\n                        <td  class=\"col-form-span-label font-weight-bold \">Payee Name</td >\n                        <td  class=\"col-form-span-label font-weight-bold \">Pay Date</td >\n                        <td  class=\"col-form-span-label font-weight-bold \"> Amount</td >\n                        <td  class=\"col-form-span-label font-weight-bold \">Requested By</td >\n                        <td  class=\"col-form-span-label font-weight-bold \">Requested On</td >\n                        <td  class=\"col-form-span-label font-weight-bold \">Bank Ref No</td >\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"searvhptintlist.length>0\" >\n                    <tr *ngFor=\"let obj of searvhptintlist |paginate: { itemsPerPage:20, currentPage: PageActual }\">\n                        <td class=\"col-form-span-label\"><input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"   [disabled]=\"obj.PRINTSTATUS=='Not Authorised'\"\n                            (ngModelChange)=\"getCheckboxValues($event,obj.ENTRYNO,obj.CHEQUETYPE,obj.AMOUNT,obj.BANKREFNO)\"> &nbsp;</td>\n                        <td><span class=\"col-form-span-label\">{{obj.PRINTSTATUS}} </span>\n                        </td>\n                        <td><span class=\"col-form-span-label\"  (click)=\"OpenView(obj.ENTRYNO)\">{{obj.ENTRYNO}}</span></td>\n                        <td   > <span class=\"col-form-span-label\"  *ngIf=\"obj.Checked != true\">{{obj.CHEQUENO}}</span>\n                            <span [ngClass]=\"{'class1':CHEQUENO=='Not Available.', 'class2':CHEQUENO!='Not Available.'}\" *ngIf=\"obj.Checked==true && flag=='1'\">{{CHEQUENO}}</span>\n                        </td>\n                        <td><span class=\"col-form-span-label\">{{obj.CHEQUETYPE}}</span></td>\n                        <td><span class=\"col-form-span-label\">{{obj.PAYEENAME}}</span></td>\n                        <td><span class=\"col-form-span-label\">{{obj.CHEQUEDT}}</span></td>\n                        <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\n                        <td><span class=\"col-form-span-label\">{{obj.RequestedBy}}</span></td>\n                        <td><span class=\"col-form-span-label\">{{obj.ENTRYDT}}</span></td>\n                        <!-- <td><span class=\"col-form-span-label\">{{obj.BANKREFNO}}</span></td> -->\n                        <td class=\"col-form-span-label\"> <input [(ngModel)]=\"obj.BANKREFNO\"  (change)=\"getbankrefno(obj.ENTRYNO,obj.BANKREFNO)\" *ngIf=\"obj.CHEQUETYPE!=''\" type=\"text\" maxlenght=\"40\" autofocus class=\"form-control width150\">\n                            <span [ngClass]=\"{'class1':StartCheck=='Not Available.', 'class2':StartCheck!='Not Available.'}\"  *ngIf=\"obj.Checked==true && (obj.CHEQUETYPE=='CHQ' || obj.CHEQUETYPE=='')\">{{BankRefNo}}</span></td>\n                    </tr>\n\n                </tbody>\n                <!-- <tr>\n                    <td colspan=\"9\">\n                      <div class=\"row justify-content-center no-gutters\"\n                        style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\n                        <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\n                      </div>\n                    </td>\n                  </tr>  -->\n            </table>\n\n            </div>\n        </div>\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">\n                <tr>\n                    <td colspan=\"9\">\n                      <div class=\"row justify-content-center no-gutters\"\n                        style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\n                        <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td  colspan=\"4\"  >\n                        <button class=\"btn btn-sm btn-primary\" style=\"float: right;\" type=\"submit\" (click)=\"payordergenrte()\">\n                            <span class=\"col-form-span-label\"><i\n                                    class=\"fa fa-dot-circle-o\"></i>Assign Cheque No to Entry No</span></button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"col-12 col-md-1 col-lg-1\"> </div>\n    </div>\n</div>\n\n\n<div class=\"modal\" [style.display]=\"showModal_ChequenoList ? 'block' : 'none'\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\"  >\n        <div class=\"modal-content \" >\n            <div class=\"modal-header formheading\">\n                        <strong>CHEQUE STOCK LIST</strong>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                        <div class=\"col-12\"  >\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\n                                    <thead style=\"text-align: center;\">\n                                        <tr>\n                                            <th class=\"col-form-span-heading\">Cheque No</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody >\n                                        <tr *ngFor=\"let obj of cheque_nolist | paginate: { itemsPerPage: 10, currentPage: p2, id: 'second' }\">\n                                            <td class=\"col-form-span-label \">{{obj.CHEQUENO}}</td>\n                                        </tr>\n                                    </tbody>\n\n                        </table>\n                       <span class=\"row justify-content-center no-gutters\"\n                       style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\n                        <pagination-controls (pageChange)=\"p2 = $event\" id=\"second\" autoHide=\"true\"></pagination-controls>\n\n                       </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\" style=\"border:none\">\n                <div style=\"float: right;\">\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\n                            (click)=\"close1()\"><i class=\"fa fa-ban\"></i>\n                            Close</span></button>\n                </div>\n              </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChequePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequePreviewComponent", function() { return ChequePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChequePreviewComponent = /** @class */ (function () {
    function ChequePreviewComponent(_router, _dataService, _auth, _activatedRoute, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.Header = "cheque preview";
        this.table8 = [];
        this.chkprntstrval = "";
        this.Print_List = [];
    }
    ChequePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.EntryNo = params["entryno"];
            _this.PrintCount = params["printcount"];
            _this.strchqno = params["strchequeno"];
            _this.ourbank = params["ourbank"];
            _this.strval = params["strvalue"];
        });
        this.PageLoad();
    };
    ChequePreviewComponent.prototype.PageLoad = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsoncmp = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            STRCHEQUENO: this.strchqno,
            COUNT: this.PrintCount,
            OURBANK: this.ourbank,
            ENTRYNO: this.EntryNo,
            STRVALUE: this.strval,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP
        };
        this._dataService.getData("Accounts/ACC_CHEQUE_PREVIEWPRINT_PAGELOAD_NG", jsoncmp)
            .subscribe(function (data) {
            _this.table5 = data.Table5[0];
            _this.CHEQUEDT = data.Table5[0].CHEQUEDT;
            _this.PAYEENAME = data.Table5[0].PAYEENAME;
            _this.CHEQUEAMOUNT = data.Table5[0].CHEQUEAMOUNT;
            //this.NOTOVERFLAG=data.Table5[0].NOTOVERFLAG
            _this.NOTOVERAMT = data.Table5[0].ACTUALAMOUNT;
            _this.CHEQUENO = data.Table5[0].CHEQUENO;
            _this.NARRATION = data.Table5[0].NARRATION;
            _this.table6 = data.Table6;
            _this.AMOUNT = data.Table7[0].AMOUNT;
            _this.AMOUNT_words = _this._dataService.toWords(data.Table5[0].ACTUALAMOUNT);
            _this.chequeno = data.Table5[0].CHQNO;
            _this.printentryno = data.Table5[0].ACC_BANK_ENTRYNO;
            _this.table8 = data.Table8;
            _this._loaderService.display(false);
        });
        this._loaderService.display(false);
    };
    ChequePreviewComponent.prototype.printchq = function () {
        //let URL = "http://localhost:50709/UI/Accounts/frm_Acc_CompCheq_PrintCheque_Print.aspx?" +
        var URL = "http://180.179.207.163/linkserp-ac/UI/Accounts/frm_Acc_CompCheq_PrintCheque_Print.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&Entryno=" + this.chequeno
            + "&CurLogInIP=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    ChequePreviewComponent.prototype.BPprint = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'BR' + '/' + this.printentryno + '/', "CashBook BankReceipt Print", toolbar);
    };
    ChequePreviewComponent.prototype.Acc_BP_CMP_Cheque_ReadyTo_Print_List_35 = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsoncmp = {
            strentryNo: this.strval,
        };
        this._dataService.getData("Accounts/ACC_BP_CMP_CHEQUE_READYTO_PRINT_LIST_35", jsoncmp)
            .subscribe(function (data) {
            _this.Print_List = data.Table;
        });
        this._loaderService.display(false);
    };
    ChequePreviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    ChequePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheque-review',
            template: __webpack_require__(/*! raw-loader!./cheque-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.html"),
            styles: ["\n\n    .space{\n      padding:0px;\n      margin:0px\n    }\n    hr {\n      border: 0.2px dotted gray;\n    }\n\n    .footerbtn{\n      position: absolute;\n      bottom: 0;\n      margin-bottom: 30px;\n      right:0\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ChequePreviewComponent);
    return ChequePreviewComponent;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/Chequeprint/cheque-review.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/Chequeprint/cheque-review.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChequeReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeReviewComponent", function() { return ChequeReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChequeReviewComponent = /** @class */ (function () {
    function ChequeReviewComponent(_router, _dataService, _auth, _activatedRoute, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.Header = "cheque preview";
    }
    ChequeReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.EntryNo = params["entryno"];
            _this.PrintCount = params["printcount"];
        });
        this._loaderService.display(true);
        var jsoncmp = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            COUNT: this.PrintCount,
            ENTRYNO: this.EntryNo,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP
        };
        // console.log(jsoncmp)
        this._dataService.getData("Accounts/ACC_CHEQUE_PREVIEWPRINT_PAGELOAD", jsoncmp)
            .subscribe(function (data) {
            //  console.log(data)
            _this.table5 = data.Table6[0];
            _this.table6 = data.Table7;
            _this.AMOUNT = data.Table8[0].AMOUNT;
            _this.AMOUNT_words = _this._dataService.convertNumberToWords(_this.AMOUNT);
            _this.chequeno = data.Table6[0].CHQNO;
            _this.printentryno = data.Table6[0].ACC_BANK_ENTRYNO;
            _this._loaderService.display(false);
        });
    };
    ChequeReviewComponent.prototype.printchq = function () {
        var URL = "http://180.179.207.163/erp/UI/Accounts/frm_Acc_CompCheq_PrintCheque_Print.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&entryno=" + this.chequeno
            + "&CurLogInIP=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    ChequeReviewComponent.prototype.BPprint = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CashBook-BankReceipt-print/' + 'BR' + '/' + this.printentryno + '/', "CashBook BankReceipt Print", toolbar);
    };
    ChequeReviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    ChequeReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheque-review',
            template: __webpack_require__(/*! raw-loader!./cheque-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/Chequeprint/cheque-review.component.html"),
            styles: ["\n \n  .space{\n    padding:0px;\n    margin:0px\n  }\n  hr {\n    border: 0.2px dotted gray;  \n  }\n\n  .footerbtn{\n    position: absolute;\n    bottom: 0;\n    margin-bottom: 30px;\n    right:0\n  }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ChequeReviewComponent);
    return ChequeReviewComponent;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/Chequeprint/print-cheque-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/Chequeprint/print-cheque-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PrintChequeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintChequeRoutingModule", function() { return PrintChequeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _print_cheque_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-cheque.component */ "./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.ts");
/* harmony import */ var _cheque_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque-preview.component */ "./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.ts");
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
            { path: 'listprintCheque', component: _print_cheque_component__WEBPACK_IMPORTED_MODULE_2__["PrintChequeComponent"], data: { title: 'List' } },
            { path: 'chqreview/:entryno/:printcount/:strchequeno/:ourbank/:strvalue', component: _cheque_preview_component__WEBPACK_IMPORTED_MODULE_3__["ChequePreviewComponent"], data: { title: 'Preview' } },
        ]
    } //24710170796
    //SCBL0036070 
];
var PrintChequeRoutingModule = /** @class */ (function () {
    function PrintChequeRoutingModule() {
    }
    PrintChequeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PrintChequeRoutingModule);
    return PrintChequeRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.ts ***!
  \***************************************************************************/
/*! exports provided: PrintChequeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintChequeComponent", function() { return PrintChequeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrintChequeComponent = /** @class */ (function () {
    function PrintChequeComponent(_router, _dataService, _auth, _activatedRoute, _toasterService, _loginService, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.Header = "COMP BP ENTRYNO - LIST - ASSIGN TO - CHEQUE NO AND PRINT";
        this.BankName = "";
        this.searvhptintlist = [];
        this.checkbox = false;
        this.newarray = [];
        this.cheque_nolist = [];
        this.showModal_ChequenoList = false;
        this.PageActual = 1;
        this.p2 = 1;
        this.AssignCount = 1;
        this.StartCheck = "";
        this.EntryNo = "";
        this.flag = "";
        this.Print_List = [];
        this.chkprntstrval = "";
    }
    PrintChequeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this._loginService.getLogin())
        this._loaderService.display(true);
        this.verifyPermission('92', 'View');
        var jsoncmp = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        // console.log(jsoncmp)
        this._dataService.getData("Accounts/ACC_CHEQUESTOCK_FILLOURBANK", jsoncmp)
            .subscribe(function (data) {
            //  console.log(data)
            _this.BankList = data.Table;
            _this.BankName = _this.BankList[0].ACCTCODENAME;
            _this.cheserchprint();
            _this._loaderService.display(false);
        });
    };
    PrintChequeComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    PrintChequeComponent.prototype.cheserchprint = function () {
        var _this = this;
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            ENTRYNO: "",
            FROMDT: "",
            TODAT: "",
            OURBNK: this.BankName,
            TYPE: "",
            STATUStype: "BP",
        };
        //console.log(jsonmaster)
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_BP_CMP_CHEQUE_SEARCH_PRINTING", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.searvhptintlist = data.Table;
            //  console.log(data.Table.length);
            /// this.AvilableCount = data.Table.length
            _this.HDPOAMT = data.Table1[0].PAYORDERAMT;
            _this.HDNEFTAMT = data.Table1[0].NEFTAMT;
            _this.HDRTGSAMT = data.Table1[0].RTGSAMT;
            _this._loaderService.display(false);
        });
    };
    PrintChequeComponent.prototype.addchequestock = function () {
        var _this = this;
        var jsonmaster = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            OURBANK: this.BankName,
            chequeno: ""
        };
        // console.log(jsonmaster)
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_CHEQUE_STOCK_HELPVIEW", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.cheque_nolist = data.Table;
            _this.showModal_ChequenoList = true;
            _this._loaderService.display(false);
        });
    };
    PrintChequeComponent.prototype.cheqavailable = function () {
        // console.log(this.newarray.length);
        var _this = this;
        if (this.start_chqno == '' || this.start_chqno == undefined) {
            alert("Please enter Starting Cheque No");
            return false;
        }
        if (this.newarray.length == '0' || this.newarray == undefined) {
            alert("Please Select atleast one BP Request Entryno at a time !");
            return false;
        }
        var jsonmaster = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CHEQUNO: this.start_chqno,
            OURBANK: this.BankName,
            PRINTCNTVAL: "1"
        };
        //   console.log(jsonmaster)
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_BP_CHEQUE_AVAILABILITY", jsonmaster)
            .subscribe(function (data) {
            //     console.log(data)
            _this._loaderService.display(false);
            _this.AvilableCount = data.Table[0].Column1;
            if (data.Table[0].Column1 == '1') {
                _this.Hdcheckstatus = 'Y';
                _this._toasterService.toast("success", "success", "All Cheques Available");
                _this.chkstatus = "All Cheques Available";
            }
            else if (data.Table[0].Column1 = '0') {
                _this.Hdcheckstatus = 'N';
                _this._toasterService.toast("success", "success", "Cheque/s does not available");
                _this.chkstatus = "Cheque/s does not available";
            }
            else {
                _this._toasterService.toast("success", "success", "*" + data.Table[0].STATUS + " Contineous Cheques Available");
            }
            _this.check_chqueno();
        });
    };
    PrintChequeComponent.prototype.payordergenrte = function () {
        var _this = this;
        //console.log(this.newarray.length);
        if (this.newarray.length == 0) {
            alert("Please Select Atleast one Entry No. !");
            return false;
        }
        if (this.PayOrderCel == "" || this.PayOrderCel == "CHQ") {
            if (this.BankRefNo == "") {
                alert("Please Add Bank Ref.No. !");
                return false;
            }
        }
        if (this.PayOrderCel == "NEFT" || this.PayOrderCel == "RTGS") {
            if (this.newarray[0].BRefNo == undefined || this.newarray[0].BRefNo == '') {
                alert("Please Add Bank Ref.No. !");
                return false;
            }
        }
        this.openwin();
        // var output = this.newarray.map(function (item) {
        //   return item.EntryNo;
        // });
        // var bpreqno = output.join(",") pay order no = "" else will call check status funtion
        this._loaderService.display(true);
        console.log(this.HdnChequeStr);
        console.log(this.HdPayOrder);
        if (this.HdPayOrder != "") {
            var jsonmaster = {
                CMPID: this._loginService.getLogin()[0].CMPID,
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                OURBANK: this.BankName,
                //   BPReqNo: bpreqno + ',',
                BPReqNo: this.HdPayOrder,
                MAKERID: this._loginService.getLogin()[0].CMPID,
                MAKERIP: this._loginService.getLogin()[0].MAKERIP
            };
            //  console.log(jsonmaster);
            this._dataService.getData("Accounts/ACC_BRBPCRCPCE_PAYORDER_GENERATE_NG", jsonmaster)
                .subscribe(function (data) {
                _this._loaderService.display(false);
                if (data.Table[0].STATUS == "0") {
                    _this._toasterService.toast("success", "success", data.Table[0].SUCCESS);
                    _this.cheserchprint();
                    _this.newarray = [];
                }
            });
        }
        else {
            this._loaderService.display(false);
            //  console.log(this.Hdcheckstatus);
            if (this.Hdcheckstatus == "Y") {
                //  console.log('@');
                var _jsonmaster = {
                    CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                    CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                    chequNo: this.start_chqno,
                    count: "1",
                    OURBANK: this.BankName,
                    BPReqNo: this.HdnChequeStr.split("|")[0] + ",",
                    Pstatus: this.HdnStatus
                };
                //  console.log(_jsonmaster);
                var brno_1 = this.HdnChequeStr.split("|")[0] + ",";
                this._dataService.getData("Accounts/ACC_CMP_BP_CHEQUENO_ASSIGNTOPRINT_LIST", _jsonmaster)
                    .subscribe(function (data) {
                    console.log(data);
                    _this._router.navigate(['/accounts/CompCheque/prntchque/chqreview/' + brno_1 + '/'
                            + _this.HdnPrintCount + '/' + _this.start_chqno + '/' + _this.BankName + '/' + _this.HdnChequeStr]);
                });
            }
        }
    };
    PrintChequeComponent.prototype.ChequePreview = function () {
        var brno = this.HdnChequeStr.split("|")[0] + ",";
        for (var i = 0; i < this.Print_List.length; i++) {
            //let strval
            this.chkprntstrval = this.chkprntstrval + this.Print_List[i].ENTRYNO + "," + this.Print_List[i].CHEQUENO + "," + this.BankName + "," + "P" + "," + "" + "," + this.Print_List[i].BANKREFNO + ";";
            //  console.log(strval);
        }
        this._router.navigate(['/accounts/CompCheque/prntchque/chqreview/' + brno + '/'
                + this.HdnPrintCount + '/' + this.start_chqno + '/' + this.BankName + '/' + this.chkprntstrval]);
    };
    //hdcheckstatus='Y'
    // api call new one
    PrintChequeComponent.prototype.Acc_BP_CMP_Cheque_ReadyTo_Print_List_35 = function (str) {
        var _this = this;
        this._loaderService.display(true);
        var jsoncmp = {
            strentryNo: str,
        };
        // console.log(jsoncmp)
        this._dataService.getData("Accounts/ACC_BP_CMP_CHEQUE_READYTO_PRINT_LIST_35", jsoncmp)
            .subscribe(function (data) {
            //  console.log(data)
            _this.Print_List = data.Table;
        });
        this._loaderService.display(false);
    };
    PrintChequeComponent.prototype.openwin = function () {
        // this._loaderService.display(true)
        var _this = this;
        var stringArr, stringArr1;
        var cmpname;
        var cmpname1;
        cmpname = "";
        cmpname1 = "";
        stringArr = [];
        stringArr1 = [];
        var j;
        j = 0;
        var Cmp_Code = this._loginService.getLogin()[0].CMPCODE;
        var ChqNo = this.StartCheck;
        var selectedata = this.searvhptintlist.filter(function (filter) { return filter.ENTRYNO == _this.newarray[0].EntryNo; })[0];
        console.log(selectedata);
        var AMOUNT = selectedata.AMOUNT; //data.table.Amount
        var CondPOAMT = this.HDPOAMT; //data.table1.PAYORDERAMT
        var CondNEFTMT = 1;
        var CondRTGSAMT = 1;
        if (selectedata.CHEQUETYPE == 'NEFT') {
            /*
            Modification done for NEFT cheque print,
            after getting the mail from chetan on 22/03/2017 11:45 AM
            Please modify the same as “Amount should be greater than 1 lakh”.
      
            Again modified for freight service IDFC bank checque print for NEFT and RTGS
            by nisha As per Chetan's mail
      
            */
            if (AMOUNT >= CondNEFTMT) {
                if (Cmp_Code == "30" || Cmp_Code == "31") { //02
                    var answer = confirm("Are you sure you want to generate NEFT BP Without Cheque No. ? \n click cancel ");
                }
                else {
                    var answer = confirm("Are you sure you want to generate NEFT BP With Cheque No. ? ");
                }
                if (answer == false) {
                    if (Cmp_Code == "30" || Cmp_Code == "31") { //02
                        if (selectedata.BANKREFNO == '' || selectedata.BANKREFNO == undefined) {
                            alert("Please Enter Bank Ref.No. !");
                            this._loaderService.display(false);
                            return false;
                        }
                        cmpname = selectedata.ENTRYNO; //data.table.ENTRYNO
                        this.HdnStatus = "I"; //INPROCESS  // declare a globel variable HdnStatus ans assign here
                        // stringArr1 = stringArr + cmpname + ",";
                        stringArr1 = stringArr + cmpname + '|' + selectedata.BANKREFNO + ",";
                        j = j + 1;
                    }
                    else {
                        this._loaderService.display(false);
                        return false;
                    }
                }
                else {
                    cmpname = selectedata.ENTRYNO; //data.table.ENTRYNO
                    this.HdnStatus = "I"; //INPROCESS // declare a globel variable HdnStatus ans assign here
                    stringArr = stringArr + cmpname + ",";
                    j = j + 1;
                }
            }
            else {
                var answer = confirm("Are you sure you want to Generate NEFT BP Without Cheque No. ? \n\n NOTE : NEFT Cheque will Print Only when \n            Request Amount Should be greater and equal to 1 Lakh .");
                if (answer == false) {
                    this._loaderService.display(false);
                    return false;
                }
                else {
                    cmpname1 = selectedata.ENTRYNO;
                    ;
                    // stringArr1 = stringArr1 + cmpname1 + ","; // ONLY BP NO WILL GENERATE FOR NEFT BUT NO CHEQUE WILL PRINT
                    stringArr1 = stringArr1 + cmpname1 + '|' + selectedata.BANKREFNO + ",";
                }
            }
        }
        else if (selectedata.CHEQUETYPE == 'RTGS') {
            if (AMOUNT >= CondRTGSAMT) {
                if (Cmp_Code == "30" || Cmp_Code == "31") {
                    var answer = confirm("Are you sure you want to Generate RTGS BP Without Cheque No. ?  \n click cancel ");
                    //  \n\n NOTE : RTGS Cheque will Print Only when Request Amount Should be greate or equal to Rs. 2 Lakh .")
                }
                else {
                    var answer = confirm("Are you sure you want to Generate RTGS BP Without Cheque No. ? ");
                    //\n\n NOTE : RTGS Cheque will Print Only when Request Amount Should be greate or equal to Rs. 2 Lakh .")
                }
                if (answer == false) {
                    if (Cmp_Code == "30" || Cmp_Code == "31") {
                        if (selectedata.BANKREFNO == '' || selectedata.BANKREFNO == undefined) {
                            alert("Please Enter Bank Ref.No. !");
                            this._loaderService.display(false);
                            return false;
                        }
                        cmpname = selectedata.ENTRYNO;
                        this.HdnStatus = "I"; //INPROCESS
                        // stringArr1 = stringArr + cmpname + ",";
                        if (selectedata.BANKREFNO == undefined) {
                            selectedata.BANKREFNO = "";
                        }
                        stringArr1 = stringArr + cmpname + '|' + selectedata.BANKREFNO + ",";
                        j = j + 1;
                    }
                    else {
                        this._loaderService.display(false);
                        return false;
                    }
                }
                else {
                    cmpname = selectedata.ENTRYNO;
                    this.HdnStatus = "I"; //INPROCESS
                    stringArr = stringArr + cmpname + ",";
                    j = j + 1;
                }
            }
            else {
                var answer = confirm("Are you sure you want to Generate RTGS BP Without Cheque No. ? \n\n NOTE : RTGS Cheque will Print Only when Request Amount Should be greate or equal to Rs. 2 Lakh .");
                if (answer == false) {
                    this._loaderService.display(false);
                    return false;
                }
                else {
                    cmpname1 = selectedata.ENTRYNO;
                    if (selectedata.BANKREFNO == undefined) {
                        selectedata.BANKREFNO = "";
                    }
                    // stringArr1 = stringArr1 + cmpname1 + ","; // ONLY BP NO WILL GENERATE FOR RTGS BUT NO CHEQUE WILL PRINT
                    stringArr1 = stringArr1 + cmpname1 + '|' + selectedata.BANKREFNO + ",";
                }
            }
        }
        ///*
        else if (selectedata.CHEQUETYPE == 'Pay Order') //&& ()
         {
            /*
            Modification done for PO cheque print,
            after discussion with chetan
            Please modify the same as “Amount up to 1 lakh Payorder without cheque no acceptable”.
            */
            // /*
            if (AMOUNT >= CondNEFTMT) {
                if (Cmp_Code == "02" || Cmp_Code == "01") {
                    var answer = confirm("Are you sure you want to generate Payorder BP Without Cheque No. ? \n click cancel   \n\n NOTE : Payorder Cheque will Print Only when \n            Request Amount Should be greater and equal to 1 Lakh   ");
                }
                else {
                    var answer = confirm("Are you sure you want to generate Payorder BP With Cheque No. ? \n\n NOTE : Payorder Cheque will Print Only when \n            Request Amount Should be greater and equal to 1 Lakh .");
                }
                if (answer == false) {
                    if (Cmp_Code == "02" || Cmp_Code == "01") {
                        if (selectedata.BANKREFNO == '' || selectedata.BANKREFNO == undefined) {
                            alert("Please Enter Bank Ref.No. !");
                            this._loaderService.display(false);
                            return false;
                        }
                        cmpname = selectedata.ENTRYNO;
                        this.HdnStatus = "I"; //INPROCESS
                        // stringArr1 = stringArr + cmpname + ",";
                        if (selectedata.BANKREFNO == undefined) {
                            selectedata.BANKREFNO = "";
                        }
                        stringArr1 = stringArr + cmpname + '|' + selectedata.BANKREFNO + ",";
                        j = j + 1;
                    }
                    else {
                        this._loaderService.display(false);
                        return false;
                    }
                }
                else {
                    cmpname = selectedata.ENTRYNO;
                    this.HdnStatus = "I"; //INPROCESS
                    stringArr = stringArr + cmpname + ",";
                    j = j + 1;
                }
            }
            else {
                var answer = confirm("Are you sure you want to Generate Payorder BP Without Cheque No. ? \n\n NOTE : Payorder Cheque will Print Only when \n            Request Amount Should be greater and equal to 1 Lakh .");
                if (answer == false) {
                    this._loaderService.display(false);
                    return false;
                }
                else {
                    cmpname1 = selectedata.ENTRYNO;
                    stringArr1 = stringArr1 + cmpname1 + ","; // ONLY BP NO WILL GENERATE FOR NEFT BUT NO CHEQUE WILL PRINT
                }
            }
        }
        else if (selectedata.CHEQUETYPE == 'DD') //&& ()
         {
            /*
            Modification done for DD cheque print,
            after discussion with chetan
            Please modify the same as “for MPCLFPL DD without Cheque No”.
            Please modify the same as “for MPFSPL DD with Cheque No”.
            */
            if (Cmp_Code == "01") {
                var answer = confirm("Are you sure you want to generate DD Bank Payment Without Cheque No. ? ");
            }
            else {
                var answer = confirm("Are you sure you want to generate DD Bank Payment With Cheque No. ? ");
            }
            if (answer == true) {
                if (selectedata.BANKREFNO == '' || selectedata.BANKREFNO == undefined) {
                    alert("Please Enter Bank Ref.No. !");
                    this._loaderService.display(false);
                    return false;
                }
                if (Cmp_Code == "33") {
                    //dd checq will print with chq no.
                    cmpname = selectedata.ENTRYNO;
                    this.HdnStatus = "I"; //INPROCESS
                    // stringArr1 = stringArr + cmpname + ",";
                    if (selectedata.BANKREFNO == undefined) {
                        selectedata.BANKREFNO = "";
                    }
                    stringArr1 = stringArr + cmpname + '|' + selectedata.BANKREFNO + ",";
                    j = j + 1;
                }
                else if (Cmp_Code == "30") {
                    //dd checq will print without chq no.
                    cmpname = selectedata.ENTRYNO;
                    // stringArr1 = stringArr + cmpname + ",";
                    if (selectedata.BANKREFNO == undefined) {
                        selectedata.BANKREFNO = "";
                    }
                    stringArr1 = stringArr + cmpname + '|' + selectedata.BANKREFNO + ",";
                    j = j + 1;
                }
                else {
                    this._loaderService.display(false);
                    return false;
                }
            }
            else {
                this._loaderService.display(false);
                return false;
            }
            //}
            //else {
            //    var answer = confirm("Are you sure you want to Generate Payorder BP Without Cheque No. ? \n\n NOTE : Payorder Cheque will Print Only when \n            Request Amount Should be greater and equal to 1 Lakh .")
            //    if (answer == false) { fnLoading_Stop(); return false; }
            //    else {
            //        cmpname1 = tRows[i].getElementsByTagName("td")[2].innerText;
            //        stringArr1 = stringArr1 + cmpname1 + ","; // ONLY BP NO WILL GENERATE FOR NEFT BUT NO CHEQUE WILL PRINT
            //    }
            //}
        }
        else // NORMAL CHEQUE, NOTE OVER CHEQUE AND PAY ORDER CHEQUE WILL PRINT WITH GENERATE BP NO
         {
            cmpname = selectedata.ENTRYNO;
            this.HdnStatus = "I"; //INPROCESS
            // stringArr = stringArr + cmpname + ",";
            stringArr = stringArr + cmpname + '|' + this.BankRefNo + ",";
            j = j + 1;
        }
        this.HdPayOrder = stringArr1;
        //alert(stringArr1);
        if (stringArr != "" && stringArr1 != "") {
            alert("Please select any one type.");
            this._loaderService.display(false);
            return false;
        }
        if (stringArr1 == "") {
            if (j != 0) {
                this.HdnChequeStr = stringArr;
                this.HdnPrintCount = j;
                this._loaderService.display(false);
                return true;
            }
            else {
                alert("Please Select Atleast one Entry No. !");
                this._loaderService.display(false);
                return false;
            }
        }
    };
    PrintChequeComponent.prototype.getbankrefno = function (eno, bno) {
        this.newarray = [];
        var obj = {
            EntryNo: eno,
            BRefNo: bno
        };
        this.newarray.push(obj);
    };
    PrintChequeComponent.prototype.getCheckboxValues = function (event, entryno, chqtype, amount, bnkrefno) {
        // if(this.start_chqno=="" || this.start_chqno ==undefined){
        //   alert("Enter the Cheque No. !")
        //   return false;
        // }
        this.CHEQUENO = "";
        var index = this.newarray.findIndex(function (x) { return x.ENTRYNO == entryno; });
        if (event) {
            //  console.log(this.newarray);
            this.flag = "1";
            if (this.newarray.length > "0") {
                alert("Please Select only one BP Request Entryno at a time !");
                for (var i = 0; i < this.searvhptintlist.length; i++) {
                    if (this.searvhptintlist[i].ENTRYNO == entryno) {
                        this.searvhptintlist[i]["Checked"] = false;
                    }
                }
                return false;
            }
            var obj = {
                EntryNo: entryno,
                BRefNo: bnkrefno
            };
            this.newarray.push(obj);
            this.PayOrderCel = chqtype;
            this.Amount = amount;
            this.EntryNo = entryno;
            this.check_chqueno();
        }
        else {
            //  console.log(this.newarray);
            this.newarray.splice(index, 1);
            this.flag = "0";
        }
    };
    PrintChequeComponent.prototype.check_chqueno = function () {
        debugger;
        this.AssignCount = "1";
        if (this.PayOrderCel == "" || this.PayOrderCel == "CHQ") {
            if (this.AvilableCount >= this.AssignCount) {
                this.CHEQUENO = this.start_chqno;
                this.BankRefNo = this.start_chqno;
                //  this.StartCheck =  parseInt(this.StartCheck) + 1
                this.AssignCount = parseInt(this.AssignCount) + 1;
                //  document.getElementById("inputbox_chqno").style.color= "green";
            }
            else {
                if (this.start_chqno == undefined) {
                    this.CHEQUENO = "";
                }
                else {
                    this.CHEQUENO = "Not Available.";
                }
                //   document.getElementById("inputbox_chqno").style.color= "red";
            }
        }
        else if (this.PayOrderCel == "Not Over") {
            if (this.AvilableCount >= this.AssignCount) {
                this.CHEQUENO = this.start_chqno;
                //    this.StartCheck =  parseInt(this.StartCheck)+ 1
                this.AssignCount = parseInt(this.AssignCount) + 1;
                // document.getElementById("inputbox_chqno").style.color= "green";
            }
            else {
                if (this.start_chqno == undefined) {
                    this.CHEQUENO = "";
                }
                else {
                    //this.CHEQUENO = "Not Available."
                    if (this.start_chqno == undefined) {
                        this.CHEQUENO = "";
                    }
                    else {
                        this.CHEQUENO = "Not Available.";
                    }
                }
            }
        }
        else if (this.PayOrderCel == "Pay Order" && (this.Amount >= this.HDPOAMT)) {
            if (this.AvilableCount >= this.AssignCount) {
                this.CHEQUENO = this.start_chqno;
                //  this.StartCheck = parseInt(this.StartCheck) + 1
                this.AssignCount = parseInt(this.AssignCount) + 1;
            }
            else {
                // this.CHEQUENO = "Not Available."
                if (this.start_chqno == undefined) {
                    this.CHEQUENO = "";
                }
                else {
                    this.CHEQUENO = "Not Available.";
                }
            }
        }
        else if (this.PayOrderCel == "NEFT" && (this.Amount >= this.HDNEFTAMT && this.Amount < 199999.99)) {
            if (this.AvilableCount >= this.AssignCount) {
                this.CHEQUENO = this.start_chqno;
                //  this.StartCheck =  parseInt(this.StartCheck)+ 1
                this.AssignCount = parseInt(this.AssignCount) + 1;
            }
            else {
                this.CHEQUENO = "Not Available.";
                if (this.start_chqno == undefined) {
                    this.CHEQUENO = "";
                }
                else {
                    this.CHEQUENO = "Not Available.";
                }
            }
        }
        else if (this.PayOrderCel == "RTGS" && this.Amount >= this.HDNEFTAMT) {
            if (this.AvilableCount >= this.AssignCount) {
                this.CHEQUENO = this.start_chqno;
                //  this.StartCheck =  parseInt(this.StartCheck) + 1
                this.AssignCount = parseInt(this.AssignCount) + 1;
            }
            else {
                // this.CHEQUENO = "Not Available."
                if (this.start_chqno == undefined) {
                    this.CHEQUENO = "";
                }
                else {
                    this.CHEQUENO = "Not Available.";
                }
            }
        }
        else if (this.PayOrderCel == "DD") {
            if (this.AvilableCount >= this.AssignCount) {
                this.CHEQUENO = this.start_chqno;
                // this.StartCheck =  parseInt(this.StartCheck) + 1
                this.AssignCount = parseInt(this.AssignCount) + 1;
            }
            else {
                this.CHEQUENO = "Not Available.";
            }
        }
    };
    PrintChequeComponent.prototype.close1 = function () {
        this.showModal_ChequenoList = false;
    };
    PrintChequeComponent.prototype.OpenView = function (No) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Request-Bank-Payment-print/' + No + '/', "Request Bank Payment View", toolbar);
    };
    PrintChequeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    PrintChequeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-cheque',
            template: __webpack_require__(/*! raw-loader!./print-cheque.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.html"),
            styles: ["\n.class1{\n  color:red;\n  font-weight:bold;\n  font-family:sans-serif\n}\n.class2{\n  font-weight:bold;\n  color:green;\n  font-family:sans-serif\n}\n"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], PrintChequeComponent);
    return PrintChequeComponent;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/Chequeprint/print-cheque.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/Chequeprint/print-cheque.module.ts ***!
  \************************************************************************/
/*! exports provided: printchequeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printchequeModule", function() { return printchequeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _print_cheque_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-cheque-routing.module */ "./src/app/accounts/CompCheque/Chequeprint/print-cheque-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _print_cheque_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./print-cheque.component */ "./src/app/accounts/CompCheque/Chequeprint/print-cheque.component.ts");
/* harmony import */ var _cheque_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cheque-review.component */ "./src/app/accounts/CompCheque/Chequeprint/cheque-review.component.ts");
/* harmony import */ var _cheque_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cheque-preview.component */ "./src/app/accounts/CompCheque/Chequeprint/cheque-preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { ReqBPFilterPipe } from '../Cheque/chqstock-filter.pipe';





var printchequeModule = /** @class */ (function () {
    function printchequeModule() {
    }
    printchequeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_print_cheque_component__WEBPACK_IMPORTED_MODULE_11__["PrintChequeComponent"], _cheque_review_component__WEBPACK_IMPORTED_MODULE_12__["ChequeReviewComponent"], _cheque_preview_component__WEBPACK_IMPORTED_MODULE_13__["ChequePreviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipeModule"],
                _print_cheque_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintChequeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], printchequeModule);
    return printchequeModule;
}());



/***/ })

}]);
//# sourceMappingURL=Chequeprint-print-cheque-module.js.map