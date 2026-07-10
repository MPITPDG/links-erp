(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["windowpoppage-window-pop-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/Admin-Quotation-Print.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/Admin-Quotation-Print.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"printmain\" style=\"background-color:white ;\">\r\n  <div id=\"demo\">\r\n    <table bordercolor=\"black\" height=\"764\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\r\n      <tbody>\r\n        <tr>\r\n          <td valign=\"top\">\r\n\r\n          </td>\r\n          <td valign=\"top\">\r\n            <table id=\"Table2\" style=\"border-right: black 1px solid; border-top: black 1px solid;\r\n                  left: 0px; border-left: black 1px solid; border-bottom: black 1px solid;margin:0 auto\"\r\n                  cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\">\r\n              <tbody>\r\n                <tr style=\"background-color: aquamarine;\">\r\n                  <td>\r\n                    <tr width=\"700\">\r\n                      <td>\r\n                        <span>\r\n                          <img src={{CMP_IMAGE}} width=\"700\"> </span>\r\n                      </td>\r\n                    </tr>\r\n                   </td>\r\n                 </tr>\r\n                 <tr>\r\n                    <td style=\"border-bottom: black 1px solid\">\r\n                    </td>\r\n                 </tr>\r\n                 <tr>\r\n                <td style=\"border-bottom: black 1px solid\">\r\n                  <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n                    <tbody>\r\n                      <tr>\r\n\r\n                        <td style=\"border-bottom: black 1px solid\" align=\"center\" width=\"33%\" colspan=\"4\">\r\n                          <span id=\"lblGSTNodata\" class=\"Rpt_CodeDate\" style=\"font-family:Arial;font-weight:bold;\">GSTIN -\r\n                            {{GSTNO}}</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td width=\"33%\">&nbsp;&nbsp;<span id=\"lblInvoiceNo\" class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">No.\r\n                            {{datatable1[0].QUT_CODE}}</span>\r\n                        </td>\r\n                        <td align=\"center\" width=\"33%\">\r\n                          <span id=\"Label2\" style=\"font-family:Arial;font-size:16pt;font-weight:bold;\">QUOTATION</span>\r\n                        </td>\r\n                        <td align=\"right\">\r\n                          <span id=\"lblInvoiceDt\" class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">DATE :\r\n                            {{datatable1[0].QUOTDT}}</span>&nbsp;\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </td>\r\n                 </tr>\r\n                 <tr>\r\n                <td style=\"border-bottom: black 1px solid\">\r\n                  <table id=\"Table4\" cellspacing=\"0\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                    <tbody>\r\n                      <!-- <tr>\r\n                                    <td valign=\"top\" width=\"1%\" class=\"Rpt_CodeDate\" style=\"font-weight:bold;\" colspan=\"2\">To The,</td>\r\n                                  </tr> -->\r\n                      <tr>\r\n                        <td valign=\"top\" width=\"1%\"></td>\r\n                        <td style=\"border-right: black 1px solid\" valign=\"top\" width=\"49%\">\r\n                          <table id=\"tbl_exp_mst\" class=\"Rpt_Label_content\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\"\r\n                            border=\"0\">\r\n                          </table>\r\n\r\n                          <span id=\"lblExpName\" class=\"Rpt_Label\" style=\"display:inline-block;width:100%;\">To The, <br><br>\r\n                            {{datatable1[0].EXPNAME}}.</span>\r\n                          <span id=\"lblExpAdd\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\r\n                        </td>\r\n                        <td>\r\n                          <table id=\"Table6\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\r\n                            <tbody>\r\n\r\n                              <tr>\r\n                                <td align=\"right\" width=\"40%\">\r\n                                  <span id=\"Label9\" class=\"Rpt_Label\"> POL:</span>\r\n                                </td>\r\n                                <td width=\"60%\">\r\n                                  <span id=\"lbl_carrier\" class=\"Rpt_Label_content\"\r\n                                    style=\"display:inline-block;width:100%;\">{{datatable1[0].POL}} </span>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td align=\"right\" width=\"40%\">\r\n                                  <span id=\"Label9\" class=\"Rpt_Label\">  POD :</span>\r\n                                </td>\r\n                                <td width=\"60%\">\r\n                                  <span id=\"lbl_carrier\" class=\"Rpt_Label_content\"\r\n                                    style=\"display:inline-block;width:100%;\">{{datatable1[0].POD}}</span>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td align=\"right\" width=\"40%\" colspan=\"1\" rowspan=\"1\">\r\n                                  <span id=\"Label10\" class=\"Rpt_Label\"> Shipment Type :</span>\r\n                                </td>\r\n                                <td width=\"60%\">\r\n                                  <span id=\"lblHBLno\" class=\"Rpt_Label_content\"\r\n                                    style=\"display:inline-block;width:100%;\">{{datatable1[0].SHIPTYPE}}</span>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td align=\"right\" width=\"40%\" colspan=\"1\" rowspan=\"1\">\r\n                                  <span id=\"Label10\" class=\"Rpt_Label\"> Shipment Mode :</span>\r\n                                </td>\r\n                                <td width=\"60%\">\r\n                                  <span id=\"lblHBLno\" class=\"Rpt_Label_content\"\r\n                                    style=\"display:inline-block;width:100%;\">{{datatable1[0].SHIPMODE}}</span>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td align=\"right\" width=\"40%\">\r\n                                  <span id=\"Label11\" class=\"Rpt_Label\"> VALID DATE :</span>\r\n                                </td>\r\n                                <td width=\"60%\">\r\n                                 <b><span id=\"lblHBLDt\" class=\"Rpt_Label_content\" designtimedragdrop=\"3266\"\r\n                                    style=\"display:inline-block;width:100%;\">{{datatable1[0].QUOTVALIDDT}}</span></b> \r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </td>\r\n                 </tr>\r\n                 <!-- <tr>\r\n                <td style=\"border-bottom: black 1px solid\">\r\n                  <table id=\"Table7\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td align=\"right\" width=\"22%\">\r\n\r\n                        </td>\r\n                        <td width=\"30%\" colspan=\"3\">\r\n\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td align=\"right\" width=\"22%\">\r\n                          <span id=\"Label16\" class=\"Rpt_Label\" designtimedragdrop=\"3485\"></span>\r\n                        </td>\r\n                        <td width=\"30%\">\r\n                          <span id=\"lblContents\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\r\n                        </td>\r\n\r\n                        <td align=\"right\" width=\"20%\">\r\n                          <span id=\"lbl\" class=\"Rpt_Label\"></span>\r\n                        </td>\r\n\r\n                        <td width=\"30%\">\r\n                          <span id=\"lblSBillNo\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td align=\"right\" width=\"22%\">\r\n                          <span id=\"Label17\" class=\"Rpt_Label\"></span>\r\n                        </td>\r\n                        <td width=\"30%\">\r\n                          <span id=\"lblUrRef\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\r\n                        </td>\r\n\r\n                        <td align=\"right\" width=\"20%\">\r\n                          <span id=\"Label20\" class=\"Rpt_Label\"></span>\r\n                        </td>\r\n                        <td width=\"30%\">\r\n                          <span id=\"lblpol\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"> </span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td align=\"right\" width=\"22%\">\r\n                          <span id=\"Label18\" class=\"Rpt_Label\"></span>\r\n                        </td>\r\n                        <td width=\"30%\">\r\n                          <span id=\"lblPkgs\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\r\n                        </td>\r\n\r\n                        <td align=\"right\" width=\"20%\">\r\n                          <span id=\"Label21\" class=\"Rpt_Label\"></span>\r\n                        </td>\r\n                        <td width=\"30%\">\r\n                          <span id=\"lblpod\" class=\"Rpt_Label_content\" designtimedragdrop=\"620\"\r\n                            style=\"display:inline-block;width:100%;\"></span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </td>\r\n                 </tr> -->\r\n                 <tr>\r\n                  <td>\r\n                    <table style=\"height:300px\">\r\n                      <tr style=\"border-bottom: 1px solid\" >\r\n                        <td colspan=\"4\" valign=\"top\" width=\"100%\">\r\n                          <table id=\"Table3\" style=\"font-size: 7pt; font-family: Verdana, Arial\"  cellspacing=\"0\"\r\n                            cellpadding=\"0\" width=\"700\" >\r\n                            <tbody>\r\n                              <tr>\r\n                                <td>\r\n                                  <table id=\"Table3\" style=\"font-size: 7pt; font-family: Verdana, Arial\" height=\"100%\" cellspacing=\"0\"\r\n                                    cellpadding=\"0\" width=\"100%\" border=\"1\">\r\n                                    <tr style=\"height:20px\">\r\n                                      <td style=\"width: 20px; \" align=\"center\">\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Sr.No.\r\n                                        </span>\r\n                                      </td>\r\n                                      <td style=\" width: 500px;  \"\r\n                                        align=\"center\" >\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Charges\r\n                                        </span>\r\n                                      </td>\r\n                                      <!-- <td style=\"border-left: 1px solid; width: 150px; border-bottom: 1px solid; \"\r\n                                        align=\"center\" >\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">HSN Code\r\n                                        </span>\r\n                                      </td> -->\r\n                                      <td style=\" width: 60px; \" align=\"center\"\r\n                                        >\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">QUANTITY</span>\r\n                                      </td>\r\n                                      <td style=\" width: 60px; \" align=\"center\"\r\n                                        >\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">RATE</span>\r\n                                      </td>\r\n                                      <td style=\" width: 70px; \" align=\"center\"\r\n                                      >\r\n                                      <span class=\"Rpt_Label_content\"\r\n                                        style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">CURRENCY\r\n                                        </span>\r\n                                    </td>\r\n                                      <td style=\" width: 70px; \" align=\"center\"\r\n                                        >\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">EX\r\n                                          RATE</span>\r\n                                      </td>\r\n                                    \r\n                                      <td style=\" width:100px; \" align=\"center\"\r\n                                      >\r\n                                        <span class=\"Rpt_Label_content\"\r\n                                          style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">AMOUNT</span>\r\n                                      </td>\r\n                                    </tr>\r\n                             \r\n                              <!-- </tr> -->\r\n                              <!-- <tr>\r\n                                <td id=\"tdCharges\" align=\"left\" colspan=\"7\">\r\n                                  <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\r\n                                    <tbody> -->\r\n                                      <tr *ngFor=\"let data of chargestable\" >\r\n                                        <td valign=\"top\" style=\"width: 20px;font-size:8pt; \" align=\"center\">{{data.SrNo}} </td>\r\n                                        <td valign=\"top\" style=\"width: 500px;font-size:8pt; \" align=\"left\">{{data.CHRG_DESC}}</td>\r\n                                        <!-- <td valign=\"top\" style=\"width: 100px; border-left: 1px solid; \" align=\"center\">{{data.SACCODE}}</td> -->\r\n                                       \r\n                                        <td valign=\"top\" style=\"width: 200px; font-size:8pt;\" align=\"center\">{{data.UNIT}}</td>\r\n                                        <td valign=\"top\"style=\"width: 50px; font-size:8pt; \" align=\"right\">{{data.RATE|number:'2.2-4'}}</td>\r\n                                        <td valign=\"top\" style=\"width: 100px; font-size:8pt; \" align=\"center\">{{data.CURRENCY}}</td>\r\n                                        <td valign=\"top\" style=\"width: 50px; font-size:8pt; \" align=\"right\">{{data.EXRATE}}</td>\r\n                                        <td valign=\"top\" style=\"width: 100px; font-size:8pt;\" align=\"right\">{{data.AMOUNT|number:'2.2-4'}}</td>\r\n                                      </tr>\r\n                                    <!-- </tbody>\r\n                                  </table>\r\n                                </td>\r\n                              </tr> -->\r\n                                \r\n                                  <tr valign=\"bottom\">\r\n                                    <td align=\"center\" width=\"5\" ></td>\r\n                                    <td align=\"center\" width=\"500\" ></td>\r\n                                    <td align=\"center\" width=\"150\" ></td>\r\n                                    <td align=\"center\" width=\"150\" ></td>\r\n                                    <td align=\"center\" width=\"150\" ></td>\r\n                                    <td  align=\"center\" width=\"150\" class=\"Rpt_Label\" >Total Amount</td>\r\n                                    <td  align=\"right\" width=\"150\" class=\"Rpt_Label\" >{{TOTAMOUNT|number:'2.2-4' }}</td>\r\n                                  </tr>\r\n                            <!-- </tbody> -->\r\n                          </table>\r\n                       \r\n                          </td>\r\n                          </tr>\r\n                     \r\n                            </tbody>\r\n                          </table>\r\n                        </td>\r\n                         </tr>\r\n                      \r\n                    </table>\r\n                  </td>\r\n                 </tr>\r\n              \r\n                 <tr>\r\n                  <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td align=\"left\" width=\"22%\">\r\n                          <span id=\"Label18\" class=\"Rpt_Label\">&nbsp;CONDITIONS:</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td width=\"95%\" style=\"font-size: 12px;\" align=\"left\">\r\n                          <B><p>&nbsp;{{NARRATION1}}\r\n                            <!-- \"Validity: One Month (Validity Date from DB)\r\n                                                        Rates quoted above are for general cargo & subject to carrier's acceptance, space and availability\r\n                                                      Surcharges (Fuel and IRC) are subject to change \r\n                                                      terms of payment : 30 days upon receipt of invoice \r\n                                                      storage free of charges while 3 days after arrival\"\t -->\r\n                          </p></B>\r\n                        </td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </tr>\r\n                <tr>\r\n                  <table>\r\n                    <tbody id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n                      <br>\r\n                      <tr>\r\n                        <td style=\"font-size: 12px;\"><b>\"THANK YOU FOR YOUR BUSINESS!\"</b></td>\r\n                      </tr>\r\n                        <tr>\r\n                        <td colspan=\"3\">\r\n                          <!-- <p>Place: Place Of Contract Mumbai,India</p> -->\r\n                          <span id=\"Label1\" class=\"Rpt_Label\">&nbsp;Place:</span> \r\n                          <span id=\"Label4\" class=\"Rpt_Label_content\" >  Place Of Contract Mumbai,India</span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <span id=\"Label2\" class=\"Rpt_Label_content\" >&nbsp;Date: {{datatable1[0].QUOTDT}}</span>\r\n                          <!-- <p>Date:{{datatable1[0].QUOTDT}}</p> -->\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/img/IATAimg.png\" width=\"80\" height=\"70\"></td>\r\n                        <td><img src=\"assets/img/AEoimg.jpg\" width=\"80\" height=\"70\" style=\"margin-left: 400px;\"></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n            \r\n                    </tbody>\r\n                  </table>\r\n                </tr>\r\n               </tbody>\r\n             </table>\r\n           </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n   </div>\r\n  <div class=\"modal-footer\">\r\n    <div class=\"row\">\r\n      <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/CashBook-BR-print.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/CashBook-BR-print.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\">\n    <table cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\" style=\"border-right: 1px solid black; border-top: 1px solid black; border-left: 1px solid black;\n            border-bottom: 1px solid;margin: 0 auto;\">\n        <tbody>\n            <tr>\n                <td>\n              <tr width=\"700\" >\n                <td>\n                    <!-- <span\n                    style='font-size:28pt; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\n                    Manilal Patel Clearing Forwarding Pvt. Ltd.</span><br> -->\n                  <!-- <span\n                    style='font-size:24pt; font-weight: bold; font-family: \"Euclid Fraktur\",\"Old English Text MT\", fantasy, serif; color: black;'>\n                    {{table3[0].CMP_BOLDNAME| titlecase }}{{table3[0].CMP_FULLNAME| titlecase }}</span> -->\n                    <span> \n                        <!-- <img src=\"../../../assets/img/HEADER_CLGBOM.jpg\"></span> -->\n                            <!-- <img src=\"assets/img/HEADER_CLGBOM.jpg\" width=\"700\">  </span>    -->\n                           <img src={{CMP_IMAGE}} width=\"700\">  </span>       \n      \n    \n                </td>\n              </tr>\n        </td>\n      </tr>\n      <!-- <tr>\n        <td style=\"border-bottom: black 1px solid\">\n          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n            <tbody>\n              <tr>\n                <td width=\"45%\">\n                  <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                    <b> &nbsp;{{table3[0].CMP_ADD1}}<br> &nbsp;{{table3[0].CMP_ADD2}}<br>\n                        &nbsp;{{table3[0].CMP_ADD3}}</b></span>\n                </td>\n                <td  width=\"33%\">\n                  <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                     <b>TelNo.+91(22)27240275/3095<br>FaxNo.+91(22)27240280,<br>Email:accounts.bom@manilal.com<br>Website:www.manilal.com</b>\n    \n                     <b>TelNo.&nbsp;{{table3[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{table3[0].CMP_FAXNO}}<br>\n                        Email:&nbsp;{{table3[0].CMP_EMAIL}}<br>Website:&nbsp;</b> \n                  </span>\n                </td>\n                <td align=\"right\">\n                  <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                    <img url=\"../../../assets/Untitled-1.png\"></span>&nbsp;\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <br>\n        </td>\n      </tr> -->\n        <tr>\n            <td style=\"border-bottom: 1px solid\" >\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" height=\"30\" border=\"0\">\n                        <tbody><tr>\n                            <td width=\"30%\">                              \n                                <span class=\"Rpt_CodeDate\"  style=\"font-family:Verdana;font-weight:bold;cursor:hand;\">NO.{{table[0].ENTRYNO}}</span>\n                            </td>\n                            <td align=\"center\"  width=\"40%\">\n                                <span style=\"font-family:Verdana;font-size:12pt;font-weight:bold;\">CASH BOOK - {{labeltext}}</span>\n                            </td>\n                            <td  width=\"30%\">\n                                <span  class=\"Rpt_CodeDate\" style=\"font-family:Verdana;font-weight:bold;float:right;\">DATE:{{table[0].ENTRYDT}}</span>&nbsp;\n                            </td>\n                        </tr>\n                    </tbody></table>\n                </td>\n        </tr>\n      <tr>\n            <td style=\"border-bottom: 1px solid\">\n                    <table  cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                        <tbody><tr>\n                            <td style=\"border-top-width: 1px; border-left-width: 1px; border-left-color: #000000;\n                                border-bottom-width: 1px; border-bottom-color: #000000; border-top-color: #000000;\n                                border-right-width: 1px; border-right-color: #000000\" valign=\"top\" align=\"left\" width=\"100%\"  height=\"30\">\n                                <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                                    <tbody>\n                                        <tr *ngIf=\" PageType == 'BP' || PageType == 'CC'\" >\n                                            <td colspan=\"2\">\n                                                <table style=\"width:70%;\">\n                                                    <tr>\n                                                        <td align=\"right\" width=\"100\">\n                                                            <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">Cheque No :</span>\n                                                        </td>\n                                                        <td>\n                                                            <span  class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table[0].CHEQUENO}}</span>\n                                                        </td>\n                                                        <td align=\"right\" width=\"100\">\n                                                            <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">Cheque Date :</span>\n                                                        </td>\n                                                        <td>\n                                                            <span  class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table[0].CHEQUEDT}}</span>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n                                            </td>\n                                       \n                                        </tr>\n                                     \n                                        <tr>\n                                        <td align=\"right\" width=\"100\">\n                                            <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">Our Bank :</span>\n                                        </td>\n                                        <td>\n                                            <span  class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table[0].OURBANKNM}}</span>\n                                        </td>\n                                    </tr>\n                        \n                                </tbody></table>\n                            </td>\n                        </tr>\n                    </tbody></table>\n                </td>\n        </tr>\n        <tr>\n            <td style=\"border-bottom: black 1px solid\" valign=\"top\" height=\"550\">\n                        <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                            <tbody><tr>\n                                <td height=\"3\">\n                                </td>\n                            </tr>\n                        </tbody></table>\n                    <table cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:100%;border-collapse:collapse;\">\n                <tbody>\n                    <tr class=\"dgHeader\" align=\"center\">\n                    <td style=\"white-space:nowrap;\">Account</td>\n                    <td style=\"white-space:nowrap;\">Job No</td>\n                    <td style=\"white-space:nowrap;\">Bill No</td>\n                    <td style=\"white-space:nowrap;\">Deduction</td>\n                    <td style=\"white-space:nowrap;\">Amount</td>\n                    <td style=\"white-space:nowrap;\">Entry Type</td>\n                </tr>\n                <tr class=\"dgItem\" *ngFor=\"let data of table1\"> \n                    <td style=\"white-space:nowrap;\" [innerHtml]=\"data.CLIENTNAME\"></td>\n                    <td style=\"white-space:nowrap;cursor:hand;\">{{data.JOBNO}}</td>\n                    <td style=\"white-space:nowrap;\">{{data.BILLNO}}</td>\n                    <td align=\"right\" style=\"white-space:nowrap;\">{{data.DEDUCTION|number:'2.2-4'}}</td>\n                    <td align=\"right\" style=\"white-space:nowrap;\">{{data.AMOUNT|number:'2.2-4'}}</td>\n                    <td style=\"white-space:nowrap;\">{{data.ENTRYTYPENM}}</td>\n                </tr>\n            \n            </tbody></table>\n<br>\n            <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                <tbody><tr>\n                    <td >\n                        <span  class=\"Rpt_Label_content\">{{table[0].NARRATION}}</span>\n                    </td>\n                </tr>\n            </tbody></table>\n         \n                </td>\n        </tr>\n\n        <tr>\n            <td style=\"border-bottom: black 1px solid\" valign=\"top\">\n                    <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody><tr>\n                            <td align=\"right\">\n                                <span  class=\"Rpt_Label_content\" style=\"font-weight:bold;\"> Total Amount :</span>\n                            </td>\n                            <td align=\"right\" width=\"10%\">\n                                <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">{{table2[0].TOT_AMOUNT|number:'2.2-4'}}</span>\n                            </td>\n                        </tr>\n                        <tr style=\"border-top: black 1px solid\">\n                            <td align=\"right\">\n                                <span  class=\"Rpt_Label_content\" style=\"font-weight:bold;\">Total Deduction : </span>\n                            </td>\n                            <td align=\"right\" width=\"10%\">\n                                <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">{{table2[0].TOT_DEDUCTION|number:'2.2-4'}}</span>\n                            </td>\n                        </tr>\n                        <tr style=\"border-top: black 1px solid\">\n                            <td align=\"right\">\n                                <span  class=\"Rpt_Label_content\"  style=\"font-weight:bold;\">Grand Total :</span>\n                            </td>\n                            <td align=\"right\" width=\"10%\">\n                                <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">{{table2[0].NETTOT|number:'2.2-4'}}</span>\n                            </td>\n                        </tr>\n                    </tbody></table>\n                </td>\n        </tr>\n        <tr>\n            <td style=\"border-bottom: black 1px solid\" valign=\"top\">\n                    <span  class=\"Rpt_Label_content\">INDIAN RUPEES : {{total_words}} </span>\n                </td>\n        </tr>\n        <tr>\n            <td valign=\"top\" align=\"center\" height=\"25\">\n                </td>\n        </tr>\n        <tr>\n            <td style=\"border-bottom: black 1px solid\" valign=\"top\" align=\"center\">\n                    <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody><tr>\n                            <td align=\"center\">\n                                <span style=\"font-family:Verdana;font-size:10pt;\">{{table[0].USERNAME}}   </span>\n                            </td>\n                            <td align=\"center\">\n                                <span  style=\"font-family:Verdana;font-size:8pt;\">____________</span>\n                            </td>\n                            <td align=\"center\">\n                                <span  style=\"font-family:Verdana;font-size:8pt;\">____________</span>\n                            </td>\n                            <td align=\"center\">\n                                <span style=\"font-family:Verdana;font-size:8pt;\">____________</span>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td align=\"center\">\n                                <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Entered By</span>\n                            </td>\n                            <td align=\"center\">\n                                <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Checked By</span>\n                            </td>\n                            <td align=\"center\">\n                                <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Audited By</span>\n                            </td>\n                            <td align=\"center\">\n                                <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Authorised By</span>\n                            </td>\n                        </tr>\n                    </tbody></table>\n                </td>\n        </tr> \n    </tbody>\n    </table>\n    </div>\n    <div class=\"row\" style=\"float: right;\">\n        <div class=\"col-12\">\n        <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\n      </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/JV-print.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/JV-print.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\">\r\n    <table cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\" style=\"border-right: 1px solid black; border-top: 1px solid black; border-left: 1px solid black;\r\n            border-bottom: 1px solid;margin: 0 auto;\">\r\n        <tbody>\r\n            <tr>\r\n                <td>\r\n              <tr width=\"700\" >\r\n                <td width=\"100%\" align=\"center\">\r\n                    <!-- <span\r\n                    style='font-size:28pt; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\r\n                    Manilal Patel Clearing Forwarding Pvt. Ltd.</span><br> -->\r\n                  <!-- <span\r\n                    style='font-size:28pt; font-weight: bold; font-family: \"Euclid Fraktur\",\"Old English Text MT\", fantasy, serif; color: black;'>\r\n                   {{table3[0].cmp_name| titlecase }}</span> -->\r\n                   <span> \r\n                    <!-- <img src=\"../../../assets/img/HEADER_CLGBOM.jpg\"></span> -->\r\n                        <!-- <img src=\"assets/img/HEADER_CLGBOM.jpg\" width=\"700\">  </span>    -->\r\n                       <img src={{CMP_IMAGE}} width=\"700\">  </span>    \r\n                </td>\r\n              </tr>\r\n        </td>\r\n      </tr>\r\n      <!-- <tr>\r\n        <td style=\"border-bottom: black 1px solid\">\r\n          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n            <tbody>\r\n             \r\n              <tr>\r\n                <td width=\"45%\">\r\n                  <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                    <b> &nbsp;{{table3[0].cmp_add1}}<br> &nbsp;{{table3[0].cmp_add2}}<br>\r\n                        &nbsp;{{table3[0].cmp_add3}}</b></span>\r\n                </td>\r\n                <td  width=\"33%\">\r\n                  <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                    <b>TelNo.&nbsp;{{table3[0].cmp_telno}}<br>FaxNo.&nbsp;{{table3[0].cmp_faxno}}<br>\r\n                        Email:&nbsp;{{table3[0].cmp_email}}</b>\r\n    \r\n                    <b>TelNo.&nbsp;{{table3[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{table3[0].CMP_FAXNO}}<br>\r\n                        Email:&nbsp;{{table3[0].CMP_EMAIL}}<br>Website:&nbsp;</b>\r\n                  </span>\r\n                </td>\r\n                <td align=\"right\">\r\n                  <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                    <img url=\"../../../assets/Untitled-1.png\"></span>&nbsp; \r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <br>\r\n        </td>\r\n      </tr> -->\r\n        <tr>\r\n            <td style=\"border-bottom: 1px solid\" >\r\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" height=\"30\" border=\"0\">\r\n                        <tbody><tr>\r\n                            <td width=\"30%\">                              \r\n                                <span class=\"Rpt_CodeDate\"  style=\"font-family:Verdana;font-weight:bold;cursor:hand;\">NO.{{table3[0].jvcode}}</span>\r\n                            </td>\r\n                            <td align=\"center\"  width=\"40%\">\r\n                                <span style=\"font-family:Verdana;font-size:12pt;font-weight:bold;\">{{header}}</span>\r\n                            </td>\r\n                            <td  width=\"30%\">\r\n                                <span  class=\"Rpt_CodeDate\" style=\"font-family:Verdana;font-weight:bold;float:right;\">DATE:{{table3[0].jv_date}}</span>&nbsp;\r\n                            </td>\r\n                        </tr>\r\n                    </tbody></table>\r\n                </td>\r\n        </tr>\r\n      <tr>\r\n            <td style=\"border-bottom: 1px solid\">\r\n                    <table  cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n                        <tbody><tr>\r\n                            <td style=\"border-top-width: 1px; border-left-width: 1px; border-left-color: #000000;\r\n                                border-bottom-width: 1px; border-bottom-color: #000000; border-top-color: #000000;\r\n                                border-right-width: 1px; border-right-color: #000000\" valign=\"top\" align=\"left\" width=\"100%\"  height=\"30\">\r\n                                <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                                    <tbody><tr>\r\n                                        <td align=\"right\" width=\"100\">\r\n                                            <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">Amount In Rs.:</span>\r\n                                        </td>\r\n                                        <!-- <td>\r\n                                            <span  class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table[0].OURBANKNM}}</span>\r\n                                        </td> -->\r\n                                    </tr>\r\n                        \r\n                                </tbody></table>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody></table>\r\n                </td>\r\n        </tr>\r\n        <tr>\r\n            <td style=\"border-bottom: black 0px solid\" valign=\"top\" height=\"550\">\r\n                         <!-- <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                            <tbody><tr>\r\n                                <td height=\"3\">\r\n                                </td>\r\n                            </tr>\r\n                        </tbody></table>  -->\r\n                    <table cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:100%;border-collapse:collapse;\">\r\n                <tbody>\r\n                    <tr class=\"dgHeader\" align=\"center\">\r\n                    <td style=\"white-space:nowrap;\">Particulars</td>\r\n                    <td style=\"white-space:nowrap;\">Job No</td>\r\n                    <td style=\"white-space:nowrap;\">Invoice No</td>\r\n                    <td style=\"white-space:nowrap;\">Entry Type</td>\r\n                    <td style=\"white-space:nowrap;\">Debit</td>\r\n                    <td style=\"white-space:nowrap;\">Credit</td>\r\n                </tr>\r\n                <tr class=\"dgItem\" *ngFor=\"let data of table1\"> \r\n                    <!-- <td style=\"white-space:nowrap;\" >{{data.ACCTNAME}} <br> (Being {{data.JV_NARR}} )</td> -->\r\n                    <td><span style=\"font-family:Verdana;\">{{data.ACCTNAME}}</span>\r\n                    <br><span style=\"font-family:Verdana;font-style:italic;\">(Being {{data.JV_NARR}} )</span></td>\r\n                    <td style=\"white-space:nowrap;cursor:hand;\">{{data.JV_JOBNO}}</td>\r\n                    <td style=\"white-space:nowrap;\">{{data.JV_INVOICENO}}</td>\r\n                    <td style=\"white-space:nowrap;\">{{data.ENTRYTYPENM}}</td>\r\n                    <!-- <td align=\"right\" style=\"white-space:nowrap;\">{{data.JV_DEBIT}}</td> -->\r\n                    <td align=\"right\" > <span *ngIf=\"data.JV_DEBIT==0.00\"> </span>\r\n                        <span *ngIf=\"data.JV_DEBIT!=0.00\">{{data.JV_DEBIT}}</span></td>\r\n                        <td align=\"right\" > <span *ngIf=\"data.JV_CREDIT==0.00\"> </span>\r\n                            <span *ngIf=\"data.JV_CREDIT!=0.00\">{{data.JV_CREDIT}}</span></td>\r\n                  <!-- <td align=\"right\" style=\"white-space:nowrap;\">{{data.JV_CREDIT}}</td> -->\r\n               </tr>\r\n                <tr class=\"dgItem\">\r\n                    <td align=\"center\" colspan=\"4\" style=\"font-family:Verdana;font-weight:bold;\">TOTAL</td>\r\n                    <td align=\"right\"> <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;font-weight:bold;\">{{getTotalDebit()}}</span></td>\r\n                    <td align=\"right\"> <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;font-weight:bold;\">{{getTotalCredit()}}</span></td>\r\n                </tr>\r\n            </tbody></table>\r\n<br>\r\n            <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                <tbody><tr>\r\n                    <td width=\"25%\" >\r\n                        <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;font-weight:bold;\">Narration:</span>\r\n                    </td>\r\n                    <td align=\"left\">\r\n                        <span  class=\"Rpt_Label_content\">{{table3[0].jv_desc}}</span>\r\n                    </td>\r\n                </tr>\r\n            </tbody></table>\r\n                        </td>\r\n        </tr>\r\n        \r\n        <tr>\r\n            <td valign=\"top\" align=\"center\" height=\"25\">\r\n                </td>\r\n        </tr>\r\n        <tr>\r\n            <td style=\"border-bottom: black 1px solid\" valign=\"top\" align=\"center\">\r\n                    <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                        <tbody><tr>\r\n                            <td align=\"center\">\r\n                                <span style=\"font-family:Verdana;font-size:10pt;\">{{table3[0].CMP_USERNAME}}   </span>\r\n                            </td>\r\n                            <td align=\"center\">\r\n                                <span  style=\"font-family:Verdana;font-size:8pt;\">____________</span>\r\n                            </td>\r\n                            <td align=\"center\">\r\n                                <span  style=\"font-family:Verdana;font-size:8pt;\">____________</span>\r\n                            </td>\r\n                            <td align=\"center\">\r\n                                <span style=\"font-family:Verdana;font-size:8pt;\">{{table3[0].AUTHORISEDBY}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td align=\"center\">\r\n                                <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Entered By</span>\r\n                            </td>\r\n                            <td align=\"center\">\r\n                                <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Checked By</span>\r\n                            </td>\r\n                            <td align=\"center\">\r\n                                <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Audited By</span>\r\n                            </td>\r\n                            <td align=\"center\">\r\n                                <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Authorised By</span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody></table>\r\n                </td>\r\n        </tr> \r\n    </tbody>\r\n    </table>\r\n    </div>\r\n    <div class=\"row\" style=\"float: right;\">\r\n        <div class=\"col-12\">\r\n        <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/actstatement-advance-Print.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/actstatement-advance-Print.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"printmain\" >\r\n  <div id=\"demo\">\r\n    <table bordercolor=\"black\" height=\"764\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\r\n      <tbody>\r\n        <tr>\r\n          <td valign=\"top\">\r\n          </td>\r\n          <td valign=\"top\">\r\n            <table id=\"Table2\" style=\"border-right: black 1px solid; border-top: black 1px solid;\r\n                left: 0px; border-left: black 1px solid; border-bottom: black 1px solid;margin:0 auto\" cellspacing=\"0\"\r\n              cellpadding=\"0\" width=\"700\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td >\r\n                <tr width=\"100%\">\r\n                  <td width=\"45%\" class=\"centerlabel\">\r\n                    <span\r\n                      style='font-size:22px;  ;font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\r\n                      {{table3[0].cmp_name}}</span>\r\n\r\n                  </td>\r\n                </tr>\r\n\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td  style=\"height:10px\">\r\n    \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n            <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"45%\">\r\n                  <span class=\"Rpt_CodeDate\" >\r\n                    <b> &nbsp;{{table3[0].cmp_add1}} &nbsp;{{table3[0].cmp_add2}} \r\n                        &nbsp;{{table3[0].city_name}}&nbsp;{{table3[0].cmp_add3}} \r\n                        <!-- &nbsp;\"E-mail : \"  {{table3[0].cmp_email}} &nbsp; \"Tel. No. : \" {{table3[0].cmp_telno}} \r\n                        &nbsp; \"Fax  No. : \" {{table3[0].cmp_faxno}}<br> -->\r\n                    </b></span>\r\n                </td>\r\n                  <!-- <td align=\"right\">\r\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                      <img src=\"../../../assets/Untitled-1.png\"></span>&nbsp;\r\n                  </td> -->\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td  style=\"height:10px\">\r\n    \r\n          </td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n\r\n          </td>\r\n        </tr> -->\r\n       \r\n        <tr>\r\n          <td class=\"centerlabel\">\r\n            <span class=\"Rpt_CodeDate\" >\r\n                <b> {{strheader}} \r\n           </b></span>\r\n          </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"centerlabel\"> \r\n          <span class=\"Rpt_CodeDate\" >\r\n              <b> {{clientName}} \r\n         </b></span>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"centerlabel\">\r\n        <span class=\"Rpt_CodeDate\" >\r\n            <b> {{clientAdd[0].Name}} &nbsp;{{clientAdd[0].Address1}} &nbsp;{{clientAdd[0].Address2}} <br>\r\n              {{clientAdd[0].Address3}} &nbsp;{{clientAdd[0].Pincode}}\r\n       </b></span>\r\n      </td>\r\n  </tr> \r\n  \r\n  <tr>\r\n    <td  style=\"height:10px\">\r\n\r\n    </td>\r\n  </tr>\r\n    <tr width=\"700\">\r\n      <td style=\"border-bottom: black 1px solid\">\r\n\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td  style=\"height:100px\">\r\n\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n    \r\n        <table align =\"right\" cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:200px;border-collapse:collapse;\">\r\n          \r\n       \r\n            <tr class=\"dgHeader\" >\r\n                <td style=\"white-space:nowrap;\">Opening:</td>\r\n                <td align=\"right\" style=\"white-space:nowrap;\" >{{OpDrBal}}</td>\r\n                <td align=\"right\" style=\"white-space:nowrap;\" >{{OpCrBal}}</td>\r\n           </tr>\r\n            <tr>\r\n              <td style=\"white-space:nowrap;\">Current Total:</td>\r\n              <td align=\"right\" style=\"white-space:nowrap;\" >{{currTotalDr}}</td>\r\n              <td align=\"right\" style=\"white-space:nowrap;\" >{{currTotalcr}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"white-space:nowrap;\">Closing:</td>\r\n                <td align=\"right\" style=\"white-space:nowrap;\" >{{CLDrBal}}</td>\r\n                <td align=\"right\" style=\"white-space:nowrap;\" >{{CLCrBal}}</td>\r\n              </tr>\r\n             <tr>\r\n              <td style=\"white-space:nowrap;\">Advance:</td>\r\n              <td align=\"right\" style=\"white-space:nowrap;\" >{{AdvDrAmt}}</td>\r\n              <td align=\"right\" style=\"white-space:nowrap;\" >{{AdvCrAmt}}</td>\r\n             </tr>\r\n        </table>\r\n \r\n    </tr>\r\n    <tr>\r\n      <td  style=\"height:10px\">\r\n\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"border-bottom: black 1px solid\" valign=\"top\" >\r\n                  <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                      <tbody><tr>\r\n                          <td height=\"3\">\r\n                          </td>\r\n                      </tr>\r\n                  </tbody></table>\r\n              <table cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:100%;border-collapse:collapse;\">\r\n          <tbody>\r\n              <tr class=\"dgHeader\" align=\"center\">\r\n              <td style=\"white-space:nowrap;\"></td>\r\n              <td style=\"white-space:nowrap;\">Number</td>\r\n              <td style=\"white-space:nowrap;\">Date</td>\r\n              <td style=\"white-space:nowrap;\">Particulars</td>\r\n              <td style=\"white-space:nowrap;\">Debit</td>\r\n              <td style=\"white-space:nowrap;\">Credit</td>\r\n          </tr>\r\n          <tr class=\"dgItem\" *ngFor=\"let data of outstandTable\"> \r\n              <td style=\"white-space:nowrap;\" >{{data.TRANSTYPE}}</td>\r\n              <td style=\"white-space:nowrap;\">{{data.TRANSCODE}}</td>\r\n              <td style=\"white-space:nowrap;\">{{data.TRANSDATE}}</td>\r\n              <td  style=\"white-space:nowrap;\">{{data.NARR}}{{data.EXP_SNAME}}{{data.SUP_SNAME}}{{data.ACCTNAME}}</td>\r\n              <td align=\"right\" style=\"white-space:nowrap;\">{{data.DRAMT|number:'2.2-4'}}</td>\r\n              <td align=\"right\" style=\"white-space:nowrap;\">{{data.CRAMT|number:'2.2-4'}}</td>\r\n          </tr>\r\n      \r\n      </tbody></table>\r\n<br>\r\n      <!-- <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n          <tbody><tr>\r\n              <td >\r\n                  <span  class=\"Rpt_Label_content\">{{table[0].NARRATION}}</span>\r\n              </td>\r\n          </tr>\r\n      </tbody></table> -->\r\n   \r\n          </td>\r\n  </tr>   \r\n  <tr>\r\n    <td  style=\"height:10px\"></td>\r\n  </tr>   \r\n  <tr>\r\n    <td > \r\n      <span class=\"Rpt_CodeDate\" >\r\n          <b> Advance Details \r\n     </b></span>\r\n    </td>\r\n</tr>\r\n  <tr>\r\n    <td style=\"border-bottom: black 1px solid\" valign=\"top\" >\r\n                <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                    <tbody><tr>\r\n                        <td height=\"3\">\r\n                        </td>\r\n                    </tr>\r\n                </tbody></table>\r\n            <table cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:100%;border-collapse:collapse;\">\r\n        <tbody>\r\n            <tr class=\"dgHeader\" align=\"center\">\r\n            <td style=\"white-space:nowrap;\"></td>\r\n            <td style=\"white-space:nowrap;\">Number</td>\r\n            <td style=\"white-space:nowrap;\">Date</td>\r\n            <td style=\"white-space:nowrap;\">Particulars</td>\r\n            <td style=\"white-space:nowrap;\">Amount</td>\r\n          \r\n        </tr>\r\n        <tr class=\"dgItem\" *ngFor=\"let data of AdvanceTable\"> \r\n            <td style=\"white-space:nowrap;\" >{{data.transtype}}</td>\r\n            <td style=\"white-space:nowrap;\">{{data.Transcode}}</td>\r\n            <td style=\"white-space:nowrap;\">{{data.Transdate}}</td>\r\n            <td  style=\"white-space:nowrap;\">{{data.exp_sname}},{{data.sup_sname}},{{data.acctname}}</td>\r\n            <td align=\"right\" style=\"white-space:nowrap;\">{{data.cramt|number:'2.2-4'}}</td>\r\n            \r\n        </tr>\r\n    \r\n    </tbody></table>\r\n<br>\r\n    <!-- <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n        <tbody><tr>\r\n            <td >\r\n                <span  class=\"Rpt_Label_content\">{{table[0].NARRATION}}</span>\r\n            </td>\r\n        </tr>\r\n    </tbody></table> -->\r\n \r\n        </td>\r\n</tr>   \r\n        <tr>\r\n          <td>\r\n            <span class=\"Rpt_Label_content\"\r\n              style=\"display:inline-block;width:100%;border-top: black 1px solid\">{{table3.CMPADDRESS1}}</span>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n    </td>\r\n    </tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <div class=\"row\">\r\n      <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/advancefromclientPopUp.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/advancefromclientPopUp.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>OUTSTANDING RECEIVABLE - ADVANCE FROM CLIENTS </strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-12 col-md-2 col-lg-2\"> </div>\r\n        <div class=\"col-12 col-md-8 col-lg-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">     \r\n              \r\n\r\n                    <thead>\r\n                        <!-- <tr class=\"title-head formheading\">\r\n                            <th colspan=\"7\" >\r\n                          <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';ClAdvList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                            </th>\r\n                        </tr> -->\r\n                    <tr class=\"title-head formheading \">\r\n                            <th>Client Name</th>\r\n                            <th>Job No</th>\r\n                            <th>Type</th>\r\n                            <th>Trans Code</th>\r\n                            <th>Trans Date </th>\r\n                            <th>Dr Amt</th>\r\n                            <th>Cr Amt</th>\r\n                        </tr>   \r\n                   </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let obj of ClAdvList\">\r\n                            <td><span class=\"col-form-span-label \" style=\"cursor:pointer;\">{{obj.CLIENTNAME}}</span></td>\r\n                           <td><span class=\"col-form-span-label anchor-link\" (click)=\"OpenJobPrint(obj.JOBNO)\" >{{obj.JOBNO.replace(\"'\", \"\")}}</span></td>\r\n                           <td> <span class=\"col-form-span-label\">{{obj.TYPE}}</span></td>\r\n                           <td> <span *ngIf=\"obj.TYPE!=''\" class=\"col-form-span-label anchor-link\" (click)=\"OpenPrint(obj.TRANSCODE,obj.TYPE)\">{{obj.TRANSCODE.replace(\"'\", \"\")}}</span>\r\n                            <span *ngIf=\"obj.TYPE==''\" class=\"col-form-span-label \" ><b>{{obj.TRANSCODE.replace(\"'\", \"\")}}</b></span> </td>\r\n                            <!-- <td> <span class=\"col-form-span-label\">{{obj.TRANSDATE}}</span></td> -->\r\n                            <td>\r\n                                <span *ngIf=\"obj.TYPE!=''\" class=\"col-form-span-label \">{{obj.TRANSDATE}}</span>\r\n                                <span *ngIf=\"obj.TYPE==''\" class=\"col-form-span-label \" ><b>{{obj.TRANSDATE}}</b></span>\r\n                            </td>\r\n                            <td><span class=\"col-form-span-label\">{{obj.DRAMT|number:'2.2-4'}}</span></td>\r\n                            <!-- <td><span class=\"col-form-span-label\">{{obj.CRAMT|number:'2.2-4'}}</span></td> -->\r\n                            <td>\r\n                                <span *ngIf=\"obj.TYPE!=''\" class=\"col-form-span-label \">{{obj.CRAMT|number:'2.2-4'}}</span>\r\n                                <span *ngIf=\"obj.TYPE==''\" class=\"col-form-span-label \" ><b>{{obj.CRAMT|number:'2.2-4'}}</b></span>\r\n                            </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <!-- <tr> <td colspan=\"7\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ExportAdvfrmClnt()\" > <span\r\n                        class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                        Export To Excel </span></button>&nbsp;\r\n                    </td>\r\n                 </tr> -->\r\n               \r\n            </table>\r\n        </div>\r\n        <div class=\"col-12 col-md-2 col-lg-2\"> </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/consign-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/consign-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <div *ngIf=\"links == 'L'\"></div>\r\n            <div *ngIf=\"links == 'M'\">\r\n                <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                    <tbody>\r\n                        <tr *ngIf=\"viewData?.Table[0]?.EXPTCANCEL == 'Y'\">\r\n                            <td colspan=\"4\">\r\n                                <span class=\"col-form-span-label red\">\r\n                                    <strong>CONSIGNMENT IS CANCELLED</strong>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"edocView == 1\">\r\n                            <th class=\"col-form-span-heading centerlabel  link-label\" colspan=\"4\">\r\n                                <span (click)=\"openEdoc()\">E-Document - View/Upload File</span>\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">EXPORT NO </span>\r\n                            </td>\r\n                            <td colspan=\"3\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.EXPTNO}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Mode Of Shipment</span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.EXPT_MODE}}</span>\r\n                            </td>\r\n                            <td class=\"width130 centerlabel\" rowspan=\"14\">\r\n                                <span class=\"col-form-span-label\" *ngIf=\"viewData?.Table[0]?.CLEARANCE == 'S'\">\r\n                                    <strong>SHIPMENT CLEARANCE BY SHIPPER'S AGENT</strong>\r\n                                </span>\r\n                                <span class=\"col-form-span-label\" *ngIf=\"viewData?.Table[0]?.CLEARANCE != 'S'\">\r\n                                    <strong>SHIPMENT CLEARANCE BY US</strong>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Exporter/Shipper </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.EXP_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Bill To </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.BILLTO_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Agent </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.AGENT_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Consignee </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.CON_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Sourcing Agent </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.SRCAGT_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Consignee Bank </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.BANK_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Buyer Name </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.BUYER_NAME}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Loading Port </span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.EXPT_LDGPORT}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span class=\"col-form-span-label\">Origin City : {{viewData?.Table[0]?.ORIGIN}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Port Of Discharge </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.PORT_OF_DISCHARGE}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">I / T </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.IT}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Destination City </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.DEST_CITY}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Destination Country </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.DEST_COUNTRY}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"width150\">\r\n                                <span class=\"col-form-span-label\">Doc Recd. Date </span>\r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <span class=\"col-form-span-label\">{{viewData?.Table[0]?.EXPT_DOCRECD}}</span>\r\n                            </td>\r\n                        </tr>\r\n                     \r\n                        <tbody>\r\n                </table>\r\n                      </div>\r\n          \r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/creditnote-print.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/creditnote-print.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"printmain\" *ngIf=\"printmodal\">\n    <div id=\"demo\">\n      <table bordercolor=\"black\" height=\"764\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\n        <tbody>\n          <tr>\n            <td valign=\"top\">\n            </td>\n            <td valign=\"top\">\n              <table id=\"Table2\" style=\"border-right: black 1px solid; border-top: black 1px solid;\n                  left: 0px; border-left: black 1px solid; border-bottom: black 1px solid;margin:0 auto\" cellspacing=\"0\"\n                cellpadding=\"0\" width=\"700\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td>\n                  <tr width=\"700\">\n                    <td>\n                      <!-- <span\n                        style='font-size:28px; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\n                        {{datattable5[0].CMP_NAME| titlecase }}</span> -->\n                        <span> \n                          <!-- <img src=\"../../../assets/img/HEADER_CLGBOM.jpg\"></span> -->\n                              <!-- <img src=\"assets/img/HEADER_CLGBOM.jpg\" width=\"700\">  </span>    -->\n                             <img src={{CMP_IMAGE}} width=\"700\">  </span>      \n                    </td>\n                  </tr>\n            </td>\n          </tr>\n          <!-- <tr>\n            <td style=\"border-bottom: black 1px solid\">\n              <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td width=\"45%\">\n                      <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                        <b> &nbsp;{{datattable5[0].CMP_ADD1}}<br> &nbsp;{{datattable5[0].CMP_ADD2}}<br>\n                            &nbsp;{{datattable5[0].CMP_ADD3}}</b></span>\n                    </td>\n                    <td  width=\"33%\">\n                      <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                        <b>TelNo.&nbsp;{{datattable5[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{datattable5[0].CMP_FAXNO}}<br>\n                            Email:&nbsp;{{datattable5[0].CMP_EMAIL}} <br>Website:&nbsp;{{datattable5[0].cmp_email}}</b>\n        \n                         <b>TelNo.&nbsp;{{table3[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{table3[0].CMP_FAXNO}}<br>\n                            Email:&nbsp;{{table3[0].CMP_EMAIL}}<br>Website:&nbsp;</b> \n                      </span>\n                    </td>\n                    <td align=\"right\">\n                      <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                        <img src=\"../../../assets/Untitled-1.png\"></span>&nbsp;\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr> -->\n          <tr>\n            <td style=\"border-bottom: black 1px solid\">\n  \n            </td>\n          </tr>\n          <tr>\n            <td style=\"border-bottom: black 1px solid\">\n              <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td width=\"33%\">\n                      &nbsp;&nbsp;<span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">No.\n                        {{CRT_NO}}</span>\n                    </td>\n                    <td align=\"center\" width=\"33%\">\n                      <span style=\"font-family:Arial;font-size:16pt;font-weight:bold;\">CREDIT NOTE</span>\n                    </td>\n                    <td align=\"right\">\n                      <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">DATE :\n                        {{CRT_DATE}}</span>&nbsp;\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"border-bottom: black 1px solid\">\n              <table id=\"Table4\" cellspacing=\"0\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td valign=\"top\" width=\"1%\">\n                    </td>\n                    <td style=\"border-right: black 1px solid\" valign=\"top\" width=\"49%\">\n                      <table id=\"tbl_exp_mst\" class=\"Rpt_Label_content\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\"\n                        border=\"0\">\n                      </table>\n  \n                      <span class=\"Rpt_Label\" style=\"display:inline-block;width:100%;\">{{EXP_NAME}}\n                      </span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">\n                        {{EXP_ADD1}}<br>{{EXP_ADD2}}<br>{{EXP_ADD3}}\n                        <br>{{EXP_CITY}} - {{EXP_PINCODE}}, <span class=\"col-form-span-label\"\n                          [innerHTML]=\"EXP_COUNTRY\"></span>\n                      </span>\n  \n  \n                    </td>\n                    <td>\n                      <table id=\"Table6\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\n                        <tbody>\n                          <tr>\n                            <td align=\"right\" width=\"40%\">\n                              <span class=\"Rpt_Label\"> OUR REF :</span>\n                            </td>\n                            <td width=\"60%\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;width:100%;\">{{INV_JOBNO1}}</span>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td align=\"right\" width=\"40%\">\n                              <span class=\"Rpt_Label\"> VESSEL / AIRLINE :</span>\n                            </td>\n                            <td width=\"60%\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;width:100%;\">{{CRT_CARRIER}}</span>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td align=\"right\" width=\"40%\" colspan=\"1\" rowspan=\"1\">\n                              <span class=\"Rpt_Label\"> H.B/L/H.A.W.B :</span>\n                            </td>\n                            <td width=\"60%\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;width:100%;\">{{CRT_HAWBNO}}</span>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td align=\"right\" width=\"40%\">\n                              <span class=\"Rpt_Label\"> DATE :</span>\n                            </td>\n                            <td width=\"60%\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;width:100%;\">{{CRT_HAWBDT}}</span>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"border-bottom: black 1px solid\">\n              <table id=\"Table7\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <!-- <tr>\n                    <td align=\"right\" width=\"22%\">\n                      <span class=\"Rpt_Label\">DOCUMENT THROUGH:</span>\n                    </td>\n                    <td width=\"30%\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{DOCTHROUGH1}}</span>\n                    </td>\n                    <td align=\"right\" width=\"20%\">\n  \n                    </td>\n                    <td width=\"30%\">\n  \n                    </td>\n                  </tr> -->\n                  <tr>\n                    <td align=\"right\" width=\"22%\">\n                      <span class=\"Rpt_Label\">CONTENTS :</span>\n                    </td>\n                    <td width=\"30%\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\n                    </td>\n                    <td align=\"right\" width=\"20%\">\n                      <span class=\"Rpt_Label\">PIECES :</span>\n                    </td>\n                    <td width=\"30%\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{CRT_NOOFPCS}}</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td align=\"right\" width=\"22%\">\n                      <span class=\"Rpt_Label\">YOUR REFERENCE :</span>\n                    </td>\n                    <td width=\"30%\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{CRT_CLIENTREF}}</span>\n                    </td>\n                    <td align=\"right\" width=\"20%\">\n                    \n                    </td>\n                    <td width=\"30%\">\n                      \n                    </td>\n                  </tr>\n                  <tr>\n                    <td align=\"right\" width=\"22%\">\n  \n                    </td>\n                    <td width=\"30%\">\n  \n                    </td>\n                    <td align=\"right\" width=\"20%\">\n  \n                    </td>\n                    <td width=\"30%\">\n  \n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <table id=\"Table5\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <!-- <td valign=\"top\" width=\"200\">\n                      <table id=\"tblEnclosure\" cellspacing=\"0\" cellpadding=\"0\" width=\"200\" border=\"0\">\n                        <tbody>\n                          <tr>\n                            <td style=\"border-bottom: 1px solid\" align=\"center\" width=\"150\" height=\"40\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Enclosure</span>\n                            </td>\n                            <td style=\"border-left: 1px solid; border-bottom: 1px solid\" align=\"center\" width=\"50\"\n                              height=\"40\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Nos</span>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td id=\"tdEnclosure\" style=\"border-bottom: 1px solid\" align=\"center\" colspan=\"2\">\n                              <table cellspacing=\"0\" cellpadding=\"0\" width=\"200px\" he=\"\" border=\"0\"\n                                class=\"Rpt_Label_content\">\n                                <tbody>\n                                  <tr *ngFor=\"let data of enclosuretable\">\n                                    <td width=\"1%\"></td>\n                                    <td>{{data.inv_desc}}</td>\n                                    <td width=\"50px\" style=\"BORDER-LEFT: 1px solid\">{{data.inv_number}}</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </td>\n                          </tr>\n                          <tr>\n                          </tr>\n                        </tbody>\n                      </table>\n  \n                    </td> -->\n                    <td id=\"tdheight\" style=\"border-left: 1px solid\" valign=\"top\" width=\"700\" height=\"300\">\n                      <table id=\"tbl_Charges\" style=\"font-size: 7pt; font-family: Verdana, Arial\" height=\"100%\"\n                        cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\">\n                        <tbody>\n                          <tr>\n                            <td style=\"width: 560px; border-bottom: 1px solid; height: 40px\" align=\"center\" height=\"40\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Charges\n                                Particulars</span>\n                            </td>\n                            <td style=\"border-left: 1px solid; width: 70px; border-bottom: 1px solid; height: 40px\"\n                              align=\"center\" height=\"40\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Taxable\n                                INDIAN RUPEES</span>\n                            </td>\n                            <td style=\"border-left: 1px solid; width: 70px; border-bottom: 1px solid\" align=\"center\"\n                              height=\"40\">\n                              <span class=\"Rpt_Label_content\"\n                                style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Non\n                                Taxable INDIAN RUPEES</span>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td id=\"tdCharges\" align=\"center\" colspan=\"3\">\n                              <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                                <tbody>\n                                  <tr *ngFor=\"let data2 of chargestable\">\n                                    <td width=\"1px\"></td>\n                                    <td width=\"560px\" valign=\"top\">{{data2.CHRG_DESC1}} </td>\n                                    <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='0')\" >\n                                      {{data2.TAXABLE_AMT_INR|number:'2.2-4'}}&nbsp;</td>\n                                      <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='1')\" >\n                                        {{data2.TAXABLEAMT |number:'2.2-4'}}&nbsp;</td>\n                                        <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='0')\" >\n                                          {{data2.NON_TAXABLE_AMT_INR |number:'2.2-4'}}&nbsp;</td>\n                                          <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='1')\" >\n                                            {{data2.NONTAXABLEAMT |number:'2.2-4'}}&nbsp;</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"width: 560px\" align=\"center\" height=\"100%\">\n                              &nbsp;\n                            </td>\n                            <td style=\"border-left: black 1px solid; width: 70px\" align=\"center\" height=\"100%\">\n                              &nbsp;\n                            </td>\n                            <td style=\"border-left: black 1px solid\" align=\"center\" width=\"70\" height=\"100%\">\n                              &nbsp;\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n  \n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <table id=\"Table9\" cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td style=\"border-top: 1px solid;height:32px\" valign=\"top\" width=\"560\" colspan=\"2\">\n                      <!-- <table id=\"tbl_jobno\" class=\"labelnormal\" style=\"color: black\" cellspacing=\"0\"\n                              cellpadding=\"1\" width=\"90%\" border=\"0\">\n                              <tbody>\n                                <tr>\n                                  <td></td>\n                                </tr>\n                              </tbody>\n                            </table> -->\n  \n                      <span class=\"Rpt_Label_content\"\n                      [innerHTML]=\"NARRATION1\"></span>\n  \n                      <!-- <span\n                        style=\"display:inline-block;color:Black;font-family:Arial;font-size:14px;font-weight:bold;width:90%;padding:0px;margin:0px\"><br>\n                        PAY BY DATE: {{PAYBLEBYDT1}}</span> -->\n                    </td>\n                    <td style=\"border-left: black 1px solid; height: 32px\" align=\"right\" width=\"70\" height=\"32\">\n                      &nbsp;\n                    </td>\n                    <td style=\"border-left: black 1px solid; height: 32px\" align=\"right\" width=\"69\" height=\"32\">\n                      &nbsp;\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border-top: black 1px solid; border-bottom: black 3px solid\" width=\"560\" colspan=\"2\"\n                      height=\"25\">\n                      &nbsp;\n                    </td>\n                    <td style=\"border-top: black 1px solid; border-left: black 1px solid; border-bottom: black 3px solid\"\n                      align=\"right\" width=\"70\" height=\"25\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\" >{{datatable6[0].TAXAMT|number:'2.2-4'}}</span>\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\" >{{datatable6[0].TAXAMT_INR|number:'2.2-4'}}</span>\n  \n                     \n              \n                    </td>\n                    <td style=\"border-top: black 1px solid; border-left: black 1px solid; border-bottom: black 3px solid\"\n                      align=\"right\" width=\"69\" height=\"25\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\" >{{datatable6[0].NONTAXABLEAMT|number:'2.2-4'}}</span>\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\" >{{datatable6[0].NONTAXABLEAMT_INR|number:'2.2-4'}}</span>\n  \n                    </td>\n                  </tr>\n                  <tr *ngFor=\"let data of gsttable\">\n                    <td id=\"tdTaxableAmt\" style=\"border-bottom: black 1px solid\" nowrap=\"nowrap\" colspan=\"2\">\n                      <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                        <tbody>\n                          <tr>\n                            <td width=\"1px\"></td>\n                            <td valign=\"top\" [innerHTML]=\"data.DESC1\"></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n  \n                    <td id=\"tdTotalTaxableAmt\" style=\"border-left: black 1px solid; border-bottom: black 1px solid\"\n                      align=\"right\" width=\"70\">\n                      <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                        <tbody>\n                          <tr>\n                            <td width=\"1px\"></td>\n                             \n                            <td width=\"559px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='1')\">\n                              {{data.TAXABLEAMT|number:'2.2-4'}}</td>\n                              <td width=\"559px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='0')\">\n                                {{data.TAXABLEAMTINR|number:'2.2-4'}}</td>  \n                         \n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n  \n                    <td id=\"tdRight\" style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\"\n                      width=\"69\">\n                      <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                        <tbody>\n                          <tr>\n                            <td width=\"1px\"></td>\n                            <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='1')\"></td>\n                              <!-- {{data.TOTCRT_AMOUNT|number:'2.2-4'}}</td> -->\n                              <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='0')\"></td>\n                                <!-- {{data.TOTCRT_INRAMT|number:'2.2-4'}}</td>  -->\n                       \n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n  \n                  </tr>\n                  <tr  style=\"border-top: black 3px solid\">\n                    <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\n                      <span class=\"Rpt_Label_content\">Amount Rounded off</span>\n                    </td>\n                    <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                      <span class=\"Rpt_Label_content\"  >{{dattable10[0].ROUNDVALUE}}</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\n                      <span class=\"Rpt_Label_content\">{{sum_words}} </span>\n                    </td>\n                    <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                      <span class=\"Rpt_Label_content\"  style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\">{{datatable4[0].TOTAMT |number:'2.2-4'}}</span>\n                      <span class=\"Rpt_Label_content\"  style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\">{{datatable4[0].TOTINRAMT |number:'2.2-4'}}</span>\n\n                    </td>\n                  </tr>\n                  <!-- <tr>\n                    <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\n                      <span class=\"Rpt_Label_content\">Less: Advance</span>\n                    </td>\n                    <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                      <span class=\"Rpt_Label_content\">{{INV_ADVANCE1|number:'2.2-4'}}</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\n                      <span class=\"Rpt_Label_content\">Balance due to us</span>\n                    </td>\n                    <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                      <span class=\"Rpt_Label_content\">{{this.balance|number:'2.2-4'}}</span></td>\n                  </tr> -->\n                  <tr>\n                    <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\n                      <span class=\"Rpt_Label_content\"></span>\n                    </td>\n                    <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                      <span class=\"Rpt_Label_content\"></span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\n                      <span class=\"Rpt_Label_content\"></span>\n                    </td>\n                    <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                      <span class=\"Rpt_Label_content\"></span>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"height: 165px\" align=\"right\">\n              <table id=\"Table11\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td valign=\"top\">\n                      <table id=\"tbl_Despatch\" class=\"Rpt_Label_content\" style=\"font-size: 7pt\" cellspacing=\"0\"\n                        cellpadding=\"1\" width=\"90%\" border=\"0\">\n                        <tr *ngFor=\"let data of dispatchtable\">\n                          <td style=\"border-bottom: black 1px solid\" width=\"45%\">\n                            <span class=\"Rpt_Label_content\">{{data.inv_desc}}</span>\n                          </td>\n                          <td style=\"border-bottom: black 1px solid\" width=\"45%\">\n                            <span class=\"Rpt_Label_content\">{{data.inv_number}} </span>\n                          </td>\n                        </tr>\n  \n                      </table>\n                    </td>\n                    <td valign=\"top\" align=\"center\" width=\"35%\">\n                      <table id=\"Table1\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody>\n                          <tr>\n                            <td>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n  \n                            </td>\n                          </tr>\n                          <!-- <tr>\n                            <td height=\"25\">\n                            </td>\n                          </tr> -->\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td valign=\"top\">\n                      <table id=\"tbl_Despatch\" class=\"Rpt_Label_content\" style=\"font-size: 7pt\" cellspacing=\"0\"\n                        cellpadding=\"1\" width=\"90%\" border=\"0\">\n                      </table>\n  \n                      <!-- <span id=\"lblStaxNotify\" class=\"Rpt_Label_content\"\n                        style=\"display:inline-block;width:100%;border: 1px solid #808080;\"></span> -->\n                    </td>\n                    <td valign=\"top\" align=\"center\" width=\"35%\">\n                      <table id=\"Table1\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody>\n                          <tr>\n                            <td>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <span id=\"lblFor\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">For\n                                {{datattable5[0].CMP_NAME}}\n                              </span>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td height=\"25\">\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"Table13\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                <tbody>\n                  <tr>\n                    <td width=\"33%\" colspan=\"2\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:456px;\">\n                        {{datattable5[0].SERVICETAX_REGD}}</span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:90%;\">Our ESIC\n                        Regd No. {{datattable5[0].ESIC_REGD}}</span>\n                    </td>\n                    <td valign=\"top\" align=\"center\" width=\"40%\">\n                      <span class=\"Rpt_Label_content\">Authorised\n                        Signatory</span>\n                    </td>\n                  </tr>\n                  <!-- <tr>\n                     <td width=\"33%\" colspan=\"2\">\n                      <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:90%;\">Income Tax No.\n                        {{datattable5[0].INCOMETAXNO}}</span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:90%;\">CIN\n                        No.\n                        {{CINNO_REG1}}</span>\n                    </td>\n  \n                    <td valign=\"top\" colspan=\"4\" align=\"center\" width=\"77%\">\n                      <span class=\"Rpt_Label_content\">Authorised\n                        Signatory</span>\n                    </td>\n                  </tr> -->\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <!-- <tr>\n            <td>\n              <span class=\"Rpt_Label_content\"\n                style=\"display:inline-block;width:100%;border-top: black 1px solid\">For {{CMP_NAME}}</span>\n            </td>\n          </tr>\n   -->\n        </tbody>\n      </table>\n      </td>\n      </tr>\n      </tbody>\n      </table>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"row\">\n        <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"modal\" [style.display]=\"showModal ? 'block' : 'none'\">\n    <table style=\"width: 250px; height: 88px; text-align: center\" cellspacing=\"1\" cellpadding=\"1\" width=\"250\"\n      align=\"center\" border=\"1\">\n      <tr>\n        <td style=\"font-weight: bold; font-size: x-small; color: white; font-family: Verdana\" bgcolor=\"#62bada\">\n          Please select Currency &amp; Click OK to Print\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <input type=\"radio\" class=\"col-form-span-label\" name=\"exampleRadios\" value='0' [(ngModel)]=\"exampleRadios1\">&nbsp; INR Invoice\n          <input type=\"radio\" class=\"col-form-span-label\"  name=\"exampleRadios\" value='1' [(ngModel)]=\"exampleRadios1\">&nbsp; NON INR\n          Invoice\n  \n          <button class=\"btn btn-success mt-1\" type=\"submit\" (click)=\"currencyType(exampleRadios1)\"> <span\n              class=\"col-form-span-label\">OK</span></button>\n        </td>\n      </tr>\n    </table>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/creditnote-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/creditnote-view.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background-color: #62bada;height: 30px;font-family: Verdana;\nfont-size: 15px;\">\n    <strong>CREDIT NOTE DETAIL VIEW</strong>\n</div>\n<div class=\"modal-body\">\n    <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-sm-new bgwhite\" style=\" width: 750px;margin: 0px auto;\">                                 \n        <tr>\n            <td class=\"col-form-span-heading \" colspan=\"4\">\n              General Details\n            </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"width:100%;\">\n              <tr>\n                <td><span class=\"col-form-span-label\"><b>CreditNote No </b> </span></td>\n                <td> <span class=\"col-form-span-label\">{{CRT_NO}}</span> </td>\n                <td><span class=\"col-form-span-label\"><b>CreditNote Date </b> </span></td>\n                <td><span class=\"col-form-span-label\">{{CRT_DATE}}</span> </td>\n                <td><span class=\"col-form-span-label\"><b>Supply Type</b> </span></td>\n                <td><span class=\"col-form-span-label\">{{SUPPLYTYPE}}</span> </td>\n              </tr>\n\n            </table>\n          </td>\n\n        </tr>\n        <tr>\n            <td class=\"col-form-span-heading  \" colspan=\"4\">  Job Details   </td>\n        </tr>\n      <tr>\n         <td class=\"col-form-span p-1\" colspan=\"4\">   </td>\n    </tr>\n    <tr>\n    <td colspan=\"4\">\n    <table class=\"table table-bordered table-sm-new bgwhite \">   \n      <thead>\n        <tr class=\"col-form-span-heading\">\n          <th class=\"col-form-span-label\" colspan=\"2\">Job No</th>\n          <th class=\"col-form-span-label\">Packages</th>\n          <th class=\"col-form-span-label\">Prop.Weight</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of datatabl_1\">\n          <td class=\"col-form-span-label\" colspan=\"2\">{{data.crt_jobno}}</td>\n          <td class=\"col-form-span-label\">{{data.crt_pkgs}}</td>\n          <td class=\"col-form-span-label\">{{data.crt_grwt}}</td>\n        </tr>\n        </tbody>\n        </table>\n        </td>\n    </tr>\n    <tr>\n      <td class=\"col-form-span-heading  \" colspan=\"4\">   Main Details </td>\n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" ><b>Client Name\t </b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{CLIENTNAME}}</span> </td>    \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" ><b>Bill To Address</b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\"  [innerHTML]=\"BILLTO_CRTADDR\"></span> </td>   \n    </tr>\n    <tr>\n          <td  colspan=\"4\">  <hr style=\"border:2px solid #c2cfd6;padding: 0px;margin:0px;\"></td>\n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>Document Through\t </b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{CLIENTNAME}}</span> </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>Bill Type</b> </span></td>         \n        <td> <span class=\"col-form-span-label\" >{{CRT_BILLTYPE}}</span> </td>  \n        <td><span class=\"col-form-span-label\"><b>Advanced Received </b> </span></td>         \n        <td><span class=\"col-form-span-label\" >{{CRT_ADVANCE}}</span>  </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>Number Of Packages</b> </span></td>         \n        <td> <span class=\"col-form-span-label\" >{{CRT_PKGS}}</span> </td>  \n        <td><span class=\"col-form-span-label\"><b>\tVolume </b> </span></td>         \n        <td><span class=\"col-form-span-label\" >{{CRT_VOL}}</span>  </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>Number Of Pieces</b> </span></td>         \n        <td> <span class=\"col-form-span-label\" >{{CRT_NOOFPCS}}</span> </td>  \n        <td><span class=\"col-form-span-label\"><b>Weight Kilo </b> </span></td>         \n        <td><span class=\"col-form-span-label\" >{{CRT_WT}}</span>  </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>Client Reference </b> </span></td>         \n        <td> <span class=\"col-form-span-label\" >{{CRT_CLIENTREF}}</span> </td>  \n        <td><span class=\"col-form-span-label\"><b>Carrier</b> </span></td>         \n        <td><span class=\"col-form-span-label\" >{{CRT_CARRIER}}</span>  </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>Goods </b> </span></td>         \n        <td> <span class=\"col-form-span-label\" >{{CRT_GOODS}}</span> </td>  \n        <td><span class=\"col-form-span-label\"><b>Service Tax Rate </b> </span></td>         \n        <td><span class=\"col-form-span-label\" >{{CRT_TAX}}</span>  </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\"><b>HOUSE (A.W.B./B/L) </b> </span></td>         \n        <td> <span class=\"col-form-span-label\" >{{CRT_HAWBNO}}</span> </td>  \n        <td><span class=\"col-form-span-label\"><b>Date\t </b> </span></td>         \n        <td><span class=\"col-form-span-label\" >{{CRT_HAWBDT}}</span>  </td>   \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Pay By Date </b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{PAYBLEBYDT}}</span> </td>    \n    </tr>\n    <tr>\n        <td class=\"col-form-span-heading  \" colspan=\"4\">   Narration  Details </td>\n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Narration </b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\"  [innerHTML]=\"NARRATION\"></span> </td>    \n    </tr>\n    <tr>\n        <td class=\"col-form-span-heading  \" colspan=\"4\">  Currency Details  </td>\n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" colspan=\"4\"><b>CRToice Currency\t </b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{CUR_NAME}}</span> </td>    \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Exchange Rate  </b> </span></td>         \n        <td colspan=\"3\"> <span class=\"col-form-span-label\" ></span> </td>    \n    </tr>\n    <tr>\n        <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Rupees </b> </span></td> \n        <td>{{CRT_CURRATE}}</td>        \n        <td> <span class=\"col-form-span-label\" >{{CUR_NAME}}</span> </td>  \n        <td></td>  \n    </tr>\n    <tr>\n        <td class=\"col-form-span-heading  \" colspan=\"4\">  Charges  Details </td>\n    </tr>\n    <tr>\n    <td class=\"col-form-span p-1\" colspan=\"4\">  </td>\n    </tr>\n    <tr>\n        <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite \">   \n              <thead>\n              <tr class=\"col-form-span-heading \">\n                <th class=\"col-form-span-label\">Charg Code</th>\n                <th class=\"col-form-span-label\">Account Name</th>\n                <th class=\"col-form-span-label\">Description</th>\n                <th class=\"col-form-span-label\">Description</th>\n                <th class=\"col-form-span-label\">Qty</th>\n                <th class=\"col-form-span-label\">Rate</th>\n                <th class=\"col-form-span-label\">Cur.Type</th>\n                <th class=\"col-form-span-label\">Ex.RAte</th>\n                <th class=\"col-form-span-label\">Tax</th>\n                <th class=\"col-form-span-label\">Amount</th>\n                <th class=\"col-form-span-label\">\tTaxable Amount</th>\n              </tr>\n              </thead> \n              <tbody>\n              <tr *ngFor=\"let data of datatabl_2\">\n                <td class=\"col-form-span-label\" >{{data.CRT_CHRGCODE}}</td>\n                <td class=\"col-form-span-label\" > <span [innerHTML]=\"data.ACCTNAME\"></span> </td>\n                <td class=\"col-form-span-label\">{{data.CHRG_DESC}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_DESC}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_QTY}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_RATE}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_CURRENCY}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_EXRATE}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_TAXABLE}}</td>\n                <td class=\"col-form-span-label\">{{data.CRT_AMOUNT}}</td>\n                <td class=\"col-form-span-label\">{{data.TAXABLEAMT}}</td>\n              </tr>\n              <tr *ngFor=\"let data of datatabl_6\">\n                <td  colspan=\"7\"> </td>\n                <td></td>\n                <td></td>\n                <td class=\"col-form-span-label\" style=\"font-weight: bold;\">{{data.NONTAXABLEAMT}}</td>\n                <td  class=\"col-form-span-label\" style=\"font-weight: bold;\"> {{data.TAXAMT}}</td>\n              </tr>\n              <tr *ngFor=\"let data of datatabl_8\">\n                <td class=\"col-form-span-label\" colspan=\"10\"> <span [innerHTML]=\"data.DESC1\"></span> </td>\n                \n                <td class=\"col-form-span-label\"    > <span [innerHTML]=\"data.INV_INRAMT\"></span> </td>\n              </tr>\n              <tr *ngFor=\"let data of datatabl_10\">\n                <td class=\"col-form-span-label\" colspan=\"10\"> <span [innerHTML]=\"data.DESC1\"></span> </td>\n                 \n                <td class=\"col-form-span-label\"  > <span [innerHTML]=\"data.ROUNDAMOUNT\"></span> </td>\n              </tr>\n\n              <tr  *ngFor=\"let data of datatabl_6\">\n             \n                <td class=\"col-form-span-label\" colspan=\"10\" style=\"font-weight: bold;\">Total Credit Note Amount\t </td>\n       \n                <td class=\"col-form-span-label\"  style=\"font-weight: bold;\">{{data.TOTALAMT}}</td>\n              </tr>\n              </tbody>\n            </table>\n        </td>\n    </tr>\n    <tr>\n        <td class=\"col-form-span-heading  \" colspan=\"4\"> Credit Invoice Details</td>\n    </tr>\n    <tr>\n      <td colspan=\"4\">        \n          <table class=\"table table-bordered table-sm-new bgwhite \">   \n            <thead>\n            <tr class=\"col-form-span-heading\">\n              <th class=\"col-form-span-label\">Invoice No.</th>\n              <th class=\"col-form-span-label\">Amount</th>\n              <th class=\"col-form-span-label\">Adjust Agnst O/Bal</th>              \n            </tr>\n            </thead> \n            <tbody>\n              <tr *ngFor=\"let data of datatabl_3\">\n                <td class=\"col-form-span-label\" >{{data.CRT_INVNO}}</td>\n                <td class=\"col-form-span-label\" > <span [innerHTML]=\"data.CRT_AMOUNT\"></span> </td>\n                <td class=\"col-form-span-label\">{{data.CRT_ADJUST}}</td>                \n              </tr>\n             </tbody>\n          </table>     \n    </tr>\n  </table>\n  </div>\n  </div>\n    </div>\n    </div>\n<div class=\"modal-footer\" style=\"background-color: #62bada;height: 30px;\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/invoice-print.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/invoice-print.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"printmain\" *ngIf=\"printmodal\">\n  <div id=\"demo\">\n    <table bordercolor=\"black\" height=\"764\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\n      <tbody>\n        <tr>\n          <td valign=\"top\">\n          </td>\n          <td valign=\"top\">\n            <table id=\"Table2\" style=\"border-right: black 1px solid; border-top: black 1px solid;\n                left: 0px; border-left: black 1px solid; border-bottom: black 1px solid;margin:0 auto\" cellspacing=\"0\"\n              cellpadding=\"0\" width=\"700\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td>\n                <tr width=\"700\">\n                  <td>\n                    <!-- <span\n                      style='font-size:28px; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\n                      Manilal Patel Clearing Forwarding Private Limited</span> -->\n                      <!-- <span\n                style='font-size:24pt; font-weight: bold; font-family: \"Euclid Fraktur\",\"Old English Text MT\", fantasy, serif; color: black;'>\n                 {{table0[0].CMP_NAME| titlecase }}</span> -->\n                 <span> \n                  <!-- <img src=\"../../../assets/img/HEADER_CLGBOM.jpg\"></span> -->\n                      <!-- <img src=\"assets/img/HEADER_CLGBOM.jpg\" width=\"700\">  </span>    -->\n                     <img src={{CMP_IMAGE}} width=\"700\">  </span>       \n\n                  </td>\n                </tr>\n          </td>\n        </tr>\n        <!-- <tr>\n          <td style=\"border-bottom: black 1px solid\">\n            <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td width=\"45%\">\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                      <b> &nbsp;{{table0[0].CMP_ADD1}}<br> &nbsp;{{table0[0].CMP_ADD2}}<br>\n                          &nbsp;{{table0[0].CMP_ADD3}}</b></span>\n                  </td>\n                  <td  width=\"33%\">\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                     <b>TelNo.+91(22)27240275/3095<br>FaxNo.+91(22)27240280,<br>Email:accounts.bom@manilal.com<br>Website:www.manilal.com</b> \n      \n                      <b>TelNo.&nbsp;{{table0[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{table0[0].CMP_FAXNO}}<br>\n                          Email:&nbsp;{{table0[0].CMP_EMAIL}}<br>Website:&nbsp;</b>\n                    </span>\n                  </td>\n                  <td align=\"right\">\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                      <img src=\"../../../assets/Untitled-1.png\"></span>&nbsp;\n                     <img src=\" ../img/Untitled-1.png\"></span>&nbsp; \n                     \n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr> -->\n        <tr>\n          <td style=\"border-bottom: black 1px solid\">\n\n          </td>\n        </tr>\n        <tr>\n          <td style=\"border-bottom: black 1px solid\">\n            <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td width=\"33%\">\n                    &nbsp;&nbsp;<span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">No.\n                      {{INV_NO1}}</span>\n                  </td>\n                  <td align=\"center\" width=\"33%\">\n                    <span style=\"font-family:Arial;font-size:16pt;font-weight:bold;\">INVOICE</span>\n                  </td>\n                  <td align=\"right\">\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">DATE :\n                      {{INV_DATE1}}</span>&nbsp;\n                  </td>\n                \n\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"border-bottom: black 1px solid\">\n            <table id=\"Table4\" cellspacing=\"0\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td valign=\"top\" width=\"1%\">\n                  </td>\n                  <td style=\"border-right: black 1px solid\" valign=\"top\" width=\"49%\">\n                    <table id=\"tbl_exp_mst\" class=\"Rpt_Label_content\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\"\n                      border=\"0\">\n                    </table>\n\n                    <span class=\"Rpt_Label\" style=\"display:inline-block;width:100%;\">{{EXP_NAME1}}\n                    </span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">\n                      {{EXP_INVADD11}}<br>{{EXP_INVADD2}}<br>{{EXP_INVADD3}}\n                      <br>{{EXP_INVCITY}} - {{EXP_INVPINCODE}}, <span class=\"col-form-span-label\"\n                        [innerHTML]=\"CITY_COUNTRY1\"></span>\n                    </span>\n\n\n                  </td>\n                  <td>\n                    <table id=\"Table6\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\n                      <tbody>\n                        <tr>\n                          <td align=\"right\" width=\"40%\">\n                            <span class=\"Rpt_Label\"> OUR REF :</span>\n                          </td>\n                          <td width=\"60%\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;width:100%;\">{{INV_JOBNO1}}</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td align=\"right\" width=\"40%\">\n                            <span class=\"Rpt_Label\"> VESSEL / AIRLINE :</span>\n                          </td>\n                          <td width=\"60%\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;width:100%;\">{{INV_CARRIER1}}</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td align=\"right\" width=\"40%\" colspan=\"1\" rowspan=\"1\">\n                            <span class=\"Rpt_Label\"> H.B/L/H.A.W.B :</span>\n                          </td>\n                          <td width=\"60%\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;width:100%;\">{{INV_HAWBNO1}}</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td align=\"right\" width=\"40%\">\n                            <span class=\"Rpt_Label\"> DATE :</span>\n                          </td>\n                          <td width=\"60%\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;width:100%;\">{{INV_HAWBDT1}}</span>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"border-bottom: black 1px solid\">\n            <table id=\"Table7\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td align=\"right\" width=\"22%\">\n                    <span class=\"Rpt_Label\">DOCUMENT THROUGH:</span>\n                  </td>\n                  <td width=\"30%\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{DOCTHROUGH1}}</span>\n                  </td>\n                  <td align=\"right\" width=\"20%\">\n\n                  </td>\n                  <td width=\"30%\">\n\n                  </td>\n                </tr>\n                <tr>\n                  <td align=\"right\" width=\"22%\">\n                    <span class=\"Rpt_Label\">CONTENTS :</span>\n                  </td>\n                  <td width=\"30%\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"></span>\n                  </td>\n                  <td align=\"right\" width=\"20%\">\n\n                  </td>\n                  <td width=\"30%\">\n\n                  </td>\n                </tr>\n                <tr>\n                  <td align=\"right\" width=\"22%\">\n                    <span class=\"Rpt_Label\">YOUR REFERENCE :</span>\n                  </td>\n                  <td width=\"30%\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{INV_CLIENTREF1}}</span>\n                  </td>\n                  <td align=\"right\" width=\"20%\">\n\n                  </td>\n                  <td width=\"30%\">\n\n                  </td>\n                </tr>\n                <tr>\n                  <td align=\"right\" width=\"22%\">\n\n                  </td>\n                  <td width=\"30%\">\n\n                  </td>\n                  <td align=\"right\" width=\"20%\">\n\n                  </td>\n                  <td width=\"30%\">\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <table id=\"Table5\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td valign=\"top\" width=\"200\">\n                    <table id=\"tblEnclosure\" cellspacing=\"0\" cellpadding=\"0\" width=\"200\" border=\"0\">\n                      <tbody>\n                        <tr>\n                          <td style=\"border-bottom: 1px solid\" align=\"center\" width=\"150\" height=\"40\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Enclosure</span>\n                          </td>\n                          <td style=\"border-left: 1px solid; border-bottom: 1px solid\" align=\"center\" width=\"50\"\n                            height=\"40\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Nos</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td id=\"tdEnclosure\" style=\"border-bottom: 1px solid\" align=\"center\" colspan=\"2\">\n                            <table cellspacing=\"0\" cellpadding=\"0\" width=\"200px\" he=\"\" border=\"0\"\n                              class=\"Rpt_Label_content\">\n                              <tbody>\n                                <tr *ngFor=\"let data of enclosuretable\">\n                                  <td width=\"1%\"></td>\n                                  <td>{{data.inv_desc}}</td>\n                                  <td width=\"50px\" style=\"BORDER-LEFT: 1px solid\">{{data.inv_number}}</td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </td>\n                        </tr>\n                        <tr>\n                        </tr>\n                      </tbody>\n                    </table>\n\n                  </td>\n                  <td id=\"tdheight\" style=\"border-left: 1px solid\" valign=\"top\" width=\"500\" height=\"300\">\n                    <table id=\"tbl_Charges\" style=\"font-size: 7pt; font-family: Verdana, Arial\" height=\"100%\"\n                      cellspacing=\"0\" cellpadding=\"0\" width=\"500\" border=\"0\">\n                      <tbody>\n                        <tr>\n                          <td style=\"width: 360px; border-bottom: 1px solid; height: 40px\" align=\"center\" height=\"40\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Charges\n                              Particulars</span>\n                          </td>\n                          <td style=\"border-left: 1px solid; width: 70px; border-bottom: 1px solid; height: 40px\"\n                            align=\"center\" height=\"40\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Taxable\n                              INDIAN RUPEES</span>\n                          </td>\n                          <td style=\"border-left: 1px solid; width: 70px; border-bottom: 1px solid\" align=\"center\"\n                            height=\"40\">\n                            <span class=\"Rpt_Label_content\"\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Non\n                              Taxable INDIAN RUPEES</span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td id=\"tdCharges\" align=\"center\" colspan=\"3\">\n                            <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                              <tbody>\n                                <tr *ngFor=\"let data2 of chargestable\">\n                                  <td width=\"1px\"></td>\n                                  <td width=\"360px\" valign=\"top\">{{data2.CHRG_DESC}} </td>\n                                  <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='1')\" >\n                                    {{data2.INV_AMOUNT_Y|number:'2.2-4'}}&nbsp;</td>\n                                    <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='0')\" >\n                                      {{data2.INV_INRAMT_Y |number:'2.2-4'}}&nbsp;</td>\n                                      <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='1')\" >\n                                        {{data2.INV_INRAMT_N |number:'2.2-4'}}&nbsp;</td>\n                                        <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='0')\" >\n                                          {{data2.INV_INRAMT_N |number:'2.2-4'}}&nbsp;</td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 360px\" align=\"center\" height=\"100%\">\n                            &nbsp;\n                          </td>\n                          <td style=\"border-left: black 1px solid; width: 70px\" align=\"center\" height=\"100%\">\n                            &nbsp;\n                          </td>\n                          <td style=\"border-left: black 1px solid\" align=\"center\" width=\"70\" height=\"100%\">\n                            &nbsp;\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <table id=\"Table9\" cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td style=\"border-top: 1px solid;height:32px\" valign=\"top\" width=\"560\" colspan=\"2\">\n                    <!-- <table id=\"tbl_jobno\" class=\"labelnormal\" style=\"color: black\" cellspacing=\"0\"\n                            cellpadding=\"1\" width=\"90%\" border=\"0\">\n                            <tbody>\n                              <tr>\n                                <td></td>\n                              </tr>\n                            </tbody>\n                          </table> -->\n\n                    <span class=\"Rpt_Label_content\"\n                    [innerHTML]=\"NARRATION1\"></span>\n\n                    <span\n                      style=\"display:inline-block;color:Black;font-family:Arial;font-size:14px;font-weight:bold;width:90%;padding:0px;margin:0px\"><br>\n                      PAY BY DATE: {{PAYBLEBYDT1}}</span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; height: 32px\" align=\"right\" width=\"70\" height=\"32\">\n                    &nbsp;\n                  </td>\n                  <td style=\"border-left: black 1px solid; height: 32px\" align=\"right\" width=\"69\" height=\"32\">\n                    &nbsp;\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"border-top: black 1px solid; border-bottom: black 3px solid\" width=\"560\" colspan=\"2\"\n                    height=\"25\">\n                    &nbsp;\n                  </td>\n                  <td style=\"border-top: black 1px solid; border-left: black 1px solid; border-bottom: black 3px solid\"\n                    align=\"right\" width=\"70\" height=\"25\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\" >{{datattable5[0].TOT_INV_AMOUNT_Y|number:'2.2-4'}}</span>\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\" >{{datattable5[0].TOT_INV_INRAMT_Y|number:'2.2-4'}}</span>\n\n                  </td>\n                  <td style=\"border-top: black 1px solid; border-left: black 1px solid; border-bottom: black 3px solid\"\n                    align=\"right\" width=\"69\" height=\"25\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\" >{{datattable5[0].TOT_INV_AMOUNT_N|number:'2.2-4'}}</span>\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\" >{{datattable5[0].TOT_INV_INRAMT_N|number:'2.2-4'}}</span>\n\n                  </td>\n                </tr>\n                <tr *ngFor=\"let data of gsttable\">\n                  <td id=\"tdTaxableAmt\" style=\"border-bottom: black 1px solid\" nowrap=\"nowrap\" colspan=\"2\">\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                      <tbody>\n                        <tr>\n                          <td width=\"1px\"></td>\n                          <td valign=\"top\">{{data.DESC1}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n\n                  <td id=\"tdTotalTaxableAmt\" style=\"border-left: black 1px solid; border-bottom: black 1px solid\"\n                    align=\"right\" width=\"70\">\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                      <tbody>\n                        <tr>\n                          <td width=\"1px\"></td>\n                         \n                          <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='1')\">\n                            {{data.INV_AMOUNT|number:'2.2-4'}}</td>\n                            <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='0')\">\n                              {{data.INV_INRAMT|number:'2.2-4'}}</td> \n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n\n                  <td id=\"tdRight\" style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\"\n                    width=\"69\">\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\n                      <tbody>\n                        <tr>\n                          <td width=\"1px\"></td>\n                      \n                        \n                          <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='1')\">\n                            {{data.TAXABLEAMT|number:'2.2-4'}}</td>\n                            <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='0')\">\n                              {{data.TAXABLEAMTINR|number:'2.2-4'}}</td> \n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n\n                </tr>\n                <tr  style=\"border-top: black 3px solid\">\n                  <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\n                    <span class=\"Rpt_Label_content\">Amount Rounded off</span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                    <span class=\"Rpt_Label_content\"  >{{dattable9[0].ROUNDVALUE}}</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\n                    <span class=\"Rpt_Label_content\">TOTAL RUPEES : {{sum_words}} </span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                    <span class=\"Rpt_Label_content\"  style=\"display:inline-block;width:100%;\" >{{this.sum |number:'2.2-4'}}</span>\n                    </td>\n                </tr>\n                <tr>\n                  <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\n                    <span class=\"Rpt_Label_content\">Less: Advance</span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                    <span class=\"Rpt_Label_content\">{{INV_ADVANCE1|number:'2.2-4'}}</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\n                    <span class=\"Rpt_Label_content\">Balance due to us</span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                    <span class=\"Rpt_Label_content\">{{this.balance|number:'2.2-4'}}</span></td>\n                </tr>\n                <tr>\n                  <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\n                    <span class=\"Rpt_Label_content\"></span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                    <span class=\"Rpt_Label_content\"></span>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\n                    <span class=\"Rpt_Label_content\"></span>\n                  </td>\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\n                    <span class=\"Rpt_Label_content\"></span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"height: 165px\" align=\"right\">\n            <table id=\"Table11\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td valign=\"top\">\n                    <table id=\"tbl_Despatch\" class=\"Rpt_Label_content\" style=\"font-size: 7pt\" cellspacing=\"0\"\n                      cellpadding=\"1\" width=\"90%\" border=\"0\">\n                      <tr *ngFor=\"let data of dispatchtable\">\n                        <td style=\"border-bottom: black 1px solid\" width=\"45%\">\n                          <span class=\"Rpt_Label_content\">{{data.inv_desc}}</span>\n                        </td>\n                        <td style=\"border-bottom: black 1px solid\" width=\"45%\">\n                          <span class=\"Rpt_Label_content\">{{data.inv_number}} </span>\n                        </td>\n                      </tr>\n\n                    </table>\n                  </td>\n                  <td valign=\"top\" align=\"center\" width=\"35%\">\n                    <table id=\"Table1\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                      <tbody>\n                        <tr>\n                          <td>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n\n                          </td>\n                        </tr>\n                        <tr>\n                          <td height=\"25\">\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n                </tr>\n                <tr>\n                  <td valign=\"top\">\n                    <table id=\"tbl_Despatch\" class=\"Rpt_Label_content\" style=\"font-size: 7pt\" cellspacing=\"0\"\n                      cellpadding=\"1\" width=\"90%\" border=\"0\">\n                    </table>\n\n                    <span id=\"lblStaxNotify\" class=\"Rpt_Label_content\"\n                      style=\"display:inline-block;width:100%;border: 1px solid #808080;\"></span>\n                  </td>\n                  <td valign=\"top\" align=\"center\" width=\"35%\">\n                    <table id=\"Table1\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                      <tbody>\n                        <tr>\n                          <td>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <span id=\"lblFor\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">For\n                              {{CMP_FULLNAME1}}\n                            </span>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td height=\"25\">\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"Table13\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n              <tbody>\n                <tr>\n                  <td width=\"33%\" colspan=\"2\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:456px;\">GSTIN -\n                      {{GSTIN1}}</span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:90%;\">Our ESIC\n                      Regd No. {{ESIC_REGD1}}</span>\n                  </td>\n                  <td valign=\"top\" align=\"center\" width=\"40%\">\n\n                  </td>\n                </tr>\n                <tr>\n                  <td width=\"33%\" colspan=\"2\">\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:90%;\">Income Tax No.\n                      {{INCOMETAXNO1}}</span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:90%;\">CIN\n                      No.\n                      {{CINNO_REG1}}</span>\n                  </td>\n\n                  <td valign=\"top\" align=\"center\" width=\"40%\">\n                    <span class=\"Rpt_Label_content\">Authorised\n                      Signatory</span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span class=\"Rpt_Label_content\"\n              style=\"display:inline-block;width:100%;border-top: black 1px solid\">{{CMPADDRESS1}}</span>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n    </td>\n    </tr>\n    </tbody>\n    </table>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"row\">\n      <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" [style.display]=\"showModal ? 'block' : 'none'\">\n  <table style=\"width: 250px; height: 88px; text-align: center\" cellspacing=\"1\" cellpadding=\"1\" width=\"250\"\n    align=\"center\" border=\"1\">\n    <tr>\n      <td style=\"font-weight: bold; font-size: x-small; color: white; font-family: Verdana\" bgcolor=\"#62bada\">\n        Please select Currency &amp; Click OK to Print\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <input type=\"radio\" class=\"col-form-span-label\" name=\"exampleRadios\" value='0' [(ngModel)]=\"exampleRadios1\">&nbsp; INR Invoice\n        <input type=\"radio\" class=\"col-form-span-label\"  name=\"exampleRadios\" value='1' [(ngModel)]=\"exampleRadios1\">&nbsp; NON INR\n        Invoice\n\n        <button class=\"btn btn-success mt-1\" type=\"submit\" (click)=\"currencyType(exampleRadios1)\"> <span\n            class=\"col-form-span-label\">OK</span></button>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/invoice-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/invoice-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background-color: #62bada;height: 30px;font-family: Verdana;\n    font-size: 15px;\">\n  <strong>INVOICE DETAIL VIEW</strong>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-10\">\n      <table class=\"table table-bordered table-sm-new bgwhite\" style=\" width: 750px;margin: 0px auto;\">\n        <tr>\n          <td class=\"col-form-span-heading \" colspan=\"4\">\n            General Details\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"width:100%;\">\n              <tr>\n                <td><span class=\"col-form-span-label\"><b>Invoice No </b> </span></td>\n                <td> <span class=\"col-form-span-label\">{{INV_NO}}</span> </td>\n                <td><span class=\"col-form-span-label\"><b>Invoice Date </b> </span></td>\n                <td><span class=\"col-form-span-label\">{{INV_DATE}}</span> </td>\n                <td><span class=\"col-form-span-label\"><b>Supply Type</b> </span></td>\n                <td><span class=\"col-form-span-label\">{{SUPPLYTYPE}}</span> </td>\n              </tr>\n             \n            </table>\n          </td>\n         \n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\n            Job Details\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span p-1\" colspan=\"4\">\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite \">\n              <thead>\n                <tr class=\"col-form-span-heading\">\n                  <th class=\"col-form-span-label\" colspan=\"2\">Job No</th>\n                  <th class=\"col-form-span-label\">Packages</th>\n                  <th class=\"col-form-span-label\">Prop.Weight</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of datatabl_1\">\n                  <!-- <td class=\"col-form-span-label\" colspan=\"2\">{{data.inv_jobno}}</td> -->\n                  <td class=\"col-form-span-label anchor-link\" (click)=\"jobprofitreport(data.inv_jobno)\" colspan=\"2\">{{data.inv_jobno}}</td>\n                  <td class=\"col-form-span-label\">{{data.inv_pkgs}}</td>\n                  <td class=\"col-form-span-label\">{{data.inv_grwt}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\n            Main Details\n          </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Client Name </b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\">{{CLIENTNAME}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\" [innerHTML]=\"BILLTO_INVADDR\"></span> </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <hr style=\"border:2px solid #c2cfd6;padding: 0px;margin:0px;\">\n          </td>\n        </tr>\n        <!-- <tr style=\"background-color:#c2cfd6;\">\n<td class=\"p-1\" colspan=\"4\">\n</td>\n</tr> -->\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Document Through </b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\">{{CLIENTNAME}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Bill Type</b> </span></td>\n          <td> <span class=\"col-form-span-label\">{{INV_BILLTYPE}}</span> </td>\n          <td><span class=\"col-form-span-label\"><b>Advanced Received </b> </span></td>\n          <td><span class=\"col-form-span-label\">{{INV_ADVANCE}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Number Of Packages</b> </span></td>\n          <td> <span class=\"col-form-span-label\">{{INV_PKGS}}</span> </td>\n          <td><span class=\"col-form-span-label\"><b> Volume </b> </span></td>\n          <td><span class=\"col-form-span-label\">{{INV_VOL}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Number Of Pieces</b> </span></td>\n          <td> <span class=\"col-form-span-label\">{{INV_NOOFPCS}}</span> </td>\n          <td><span class=\"col-form-span-label\"><b>Weight Kilo </b> </span></td>\n          <td><span class=\"col-form-span-label\">{{INV_WT}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Client Reference </b> </span></td>\n          <td> <span class=\"col-form-span-label\">{{INV_CLIENTREF}}</span> </td>\n          <td><span class=\"col-form-span-label\"><b>Carrier</b> </span></td>\n          <td><span class=\"col-form-span-label\">{{INV_CARRIER}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>Goods </b> </span></td>\n          <td> <span class=\"col-form-span-label\">{{INV_GOODS}}</span> </td>\n          <td><span class=\"col-form-span-label\"><b>Service Tax Rate </b> </span></td>\n          <td><span class=\"col-form-span-label\">{{INV_TAX}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\"><b>HOUSE (A.W.B./B/L) </b> </span></td>\n          <td> <span class=\"col-form-span-label\">{{INV_HAWBNO}}</span> </td>\n          <td><span class=\"col-form-span-label\"><b>Date </b> </span></td>\n          <td><span class=\"col-form-span-label\">{{INV_HAWBDT}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Pay By Date </b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\">{{PAYBLEBYDT}}</span> </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\n            Narration Details\n          </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Narration </b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\" [innerHTML]=\"NARRATION\"></span> </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\n            Currency Details\n\n          </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Invoice Currency </b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\">{{CUR_NAME}}</span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Exchange Rate\n              </b> </span></td>\n          <td colspan=\"3\"> <span class=\"col-form-span-label\"></span> </td>\n        </tr>\n        <tr>\n          <td><span class=\"col-form-span-label\" colspan=\"4\"><b>Rupees </b> </span></td>\n          <td>{{INV_CURRATE}}</td>\n          <td> <span class=\"col-form-span-label\">{{CUR_NAME}}</span> </td>\n          <td>{{INV_CURRATE1}}</td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\n            Charges Details\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span p-1\" colspan=\"4\">\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite \">\n              <thead>\n                <tr class=\"col-form-span-heading \">\n                  <th class=\"col-form-span-label\">Charg Code</th>\n                  <th class=\"col-form-span-label\">Account Name</th>\n                  <th class=\"col-form-span-label\">Description</th>\n                  <th class=\"col-form-span-label\">Description</th>\n                  <th class=\"col-form-span-label\">Tax</th>\n                  <th class=\"col-form-span-label\">Qty </th>\n                  <th class=\"col-form-span-label\">Rate </th>\n                  <th class=\"col-form-span-label\">Cur.Type </th>\n                  <th class=\"col-form-span-label\">Ex.Rate </th>\n                  <th class=\"col-form-span-label\">Taxable Amt INR</th>\n                  <th class=\"col-form-span-label\"> NonTaxable Amt INR</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of datatabl_4\">\n                  <td class=\"col-form-span-label\">{{data.INV_CHRGCODE}}</td>\n                  <td class=\"col-form-span-label\"> <span [innerHTML]=\"data.ACCTNAME\"></span> </td>\n                  <td class=\"col-form-span-label\">{{data.CHRG_DESC}}</td>\n                  <td class=\"col-form-span-label\">{{data.INV_DESC}}</td>\n                  <td class=\"col-form-span-label\">{{data.INV_TAXABLE}}</td>\n                  <td class=\"col-form-span-label\">{{data.INV_QTY}}</td>\n                  <td class=\"col-form-span-label\">{{data.INV_RATE}}</td>\n                  <td class=\"col-form-span-label\">{{data.INV_CURRENCYNAME}}</td>\n                  <td class=\"col-form-span-label\">{{data.INV_EXRATE}}</td>\n                  <td class=\"col-form-span-label\">{{data.TAXABLEAMTINR}}</td>\n                  <td class=\"col-form-span-label\">{{data.NONTAXABLEAMT_INR}}</td>\n                </tr>\n                <tr *ngFor=\"let data of datatabl_5\">\n                  <td colspan=\"7\"> </td>\n                  <td></td>\n                  <td></td>\n                  <td class=\"col-form-span-label\" style=\"font-weight: bold;\">{{data.TAXAMT}}</td>\n                  <td class=\"col-form-span-label\" style=\"font-weight: bold;\"> {{data.NONTAXABLEAMT}}</td>\n                </tr>\n                <tr *ngFor=\"let data of datatabl_9\">\n                  <td class=\"col-form-span-label\" colspan=\"7\"> <span [innerHTML]=\"data.DESC1\"></span> </td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td class=\"col-form-span-label\"> <span [innerHTML]=\"data.INV_INRAMT\"></span> </td>\n                </tr>\n                <tr *ngFor=\"let data of datatabl_5\">\n                  <td colspan=\"3\"> </td>\n                  <td class=\"col-form-span-label\" colspan=\"6\" style=\"font-weight: bold;\">Total Invoice Amount</td>\n                  <td></td>\n                  <td class=\"col-form-span-label\" style=\"font-weight: bold;\">{{data.TOTALAMT}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\n            Enclosure Details\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span p-1\" colspan=\"4\">\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite \">\n              <thead>\n                <tr class=\"col-form-span-heading \">\n                  <th class=\"col-form-span-label\">Enclosure Code </th>\n                  <th class=\"col-form-span-label\">Description</th>\n                  <th class=\"col-form-span-label\">Numbers</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of datatabl_6\">\n                  <td class=\"col-form-span-label\">{{data.inv_enclcode}}</td>\n                  <td class=\"col-form-span-label\">{{data.inv_desc}}</td>\n                  <td class=\"col-form-span-label\">{{data.inv_number}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span-heading \" colspan=\"4\">\n            Despatch Details\n          </td>\n        </tr>\n        <tr>\n          <td class=\"col-form-span p-1\" colspan=\"4\">\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <table class=\"table table-bordered table-sm-new bgwhite \">\n              <thead>\n                <tr class=\"col-form-span-heading \">\n                  <th class=\"col-form-span-label\">Despatch Code </th>\n                  <th class=\"col-form-span-label\">Description</th>\n                  <th class=\"col-form-span-label\">Numbers</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of datatabl_7\">\n                  <td class=\"col-form-span-label\">{{data.inv_despcode}}</td>\n                  <td class=\"col-form-span-label\">{{data.inv_desc}}</td>\n                  <td class=\"col-form-span-label\">{{data.inv_number}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-1\"></div>\n  </div>\n</div>\n<div class=\"modal-footer\" style=\"background-color: #62bada;height: 30px;\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"purchaseprint\">\n\n<table width=\"100%\" border=\"1\" cellspacing=\"3\" cellpadding=\"3\" width=\"700\"  style=\"border-right: 1px solid black; border-top: 1px solid black; border-left: 1px solid black;\nborder-bottom: 1px solid;margin: 0 auto;\">\n    <tbody><tr>\n        <td height=\"92\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                <tbody><tr>\n                    <td width=\"23%\" height=\"84\">\n                        <div align=\"center\">\n                            <img alt=\"\" url=\"../../../assets/Untitled-1.png\" width=\"134\" height=\"84\"></div>\n                    </td>\n                    <td width=\"77%\">\n                        <table width=\"95%\" border=\"0\" align=\"center\" cellpadding=\"1\" cellspacing=\"0\">\n                            <tbody><tr>\n                                <td colspan=\"2\">\n                                    <font size=\"6\" face=\"Arial\"><strong>\n                                        <span id=\"lblcmpName\">{{compnytable.CMP_NAME}}</span></strong></font>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td width=\"48%\">\n                                    <font size=\"2\" face=\"Arial\">\n                                        <span [innerHtml]=\"compnytable.ADDRESS\"></span></font>\n                                </td>\n                                <td width=\"52%\">\n                                    <font size=\"2\" face=\"Arial\">TEL :\n                                        <span >{{compnytable.CMP_TELNO}}</span><br>\n                                        FAX :\n                                        <span id=\"lblCmpFaxNo\">{{compnytable.CMP_FAXNO}}</span><br>\n                                        E-MAIL :\n                                        <span id=\"lblCmpEmail\">{{compnytable.CMP_EMAIL}}</span><br>\n                                        <b>EORI:</b>\n                                        <span id=\"lblEORI\" style=\"font-weight:bold;\">{{compnytable.EORI_NUMBER}}</span>\n                                    </font>\n                                </td>\n                            </tr>\n                        </tbody></table>\n                    </td>\n                </tr>\n            </tbody></table>\n        </td>\n    </tr>\n    <tr style=\"border-top: black 1px solid\">\n        <td>\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                <tbody><tr>\n                    <td width=\"30%\">\n                        <font size=\"4\" face=\"Arial\">&nbsp;&nbsp;NO.\n                            <span id=\"lblEntryNo\">{{table0.ENTRYNO}}</span></font>\n                    </td>\n                    <td width=\"42%\">\n                        <div align=\"center\">\n                            <font size=\"6\" face=\"Arial\">PURCHASE</font></div>\n                    </td>\n                    <td width=\"28%\">\n                        <div align=\"right\">\n                            <font size=\"4\" face=\"Arial\">&nbsp;<span>{{table0.ENTRYDATE}}</span>&nbsp;&nbsp;</font></div>\n                    </td>\n                </tr>\n            </tbody></table>\n        </td>\n    </tr>\n    <tr  style=\"border-top: black 1px solid\">\n        <td>\n            <table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"3\">\n                <tbody><tr>\n                    <td width=\"20%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\"><strong>SUPPLIER &nbsp;</strong>\n                        </font>\n                    </td>\n                    <td width=\"0%\">\n                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">:</font></strong>\n                    </td>\n                    <td width=\"40%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                            <span id=\"lblSupplier\">{{table0.SUP_NAME}}</span>\n                        </font>\n                    </td>\n                     <td width=\"10%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\"><strong>Supplier Inv.Date &nbsp;</strong></font>\n                    </td>\n                    <td width=\"0%\">\n                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">:</font></strong>\n                    </td>\n                    <td width=\"30%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                            <span id=\"supinvdt\">{{table0.SUPINVDT}}</span>\n                        </font>\n                    </td>\n                </tr>\n                <tr>\n                    <td width=\"20%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\"><strong>SUPPLIER BILL NO.\n                            &nbsp;</strong></font>\n                    </td>\n                    <td width=\"0%\">\n                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">:</font></strong>\n                    </td>\n                    <td width=\"30%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                            <span id=\"lblBillNo\">{{table0.BILLNO}}</span>\n                        </font>\n                    </td>\n                    <td width=\"20%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\"><strong>To Be Paid On. &nbsp;</strong></font>\n                    </td>\n                    <td width=\"0%\">\n                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">:</font></strong>\n                    </td>\n                    <td width=\"80%\">\n                        <font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                            <span id=\"lblPaiddt\">{{table0.PAIDDT}}</span>\n                        </font>\n                    </td>\n                </tr>\n            </tbody></table>\n            <div id=\"DIVINR\" style=\"left: 224px; width: 272px; position: absolute; top: 168px;\n                height: 50px\" ms_positioning=\"FlowLayout\">\n                \n            </div>\n        </td>\n    </tr>\n    <tr  style=\"border-top: black 1px solid\">\n        <td>\n            <div id=\"dvPrintDtls\"><table width=\"100%\" border=\"1\" cellspacing=\"1\" cellpadding=\"5\" align=\"center\"><tbody><tr align=\"center\"><td width=\"35%\" height=\"9\"><strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                        ACCOUNT\n                    </font></strong></td><td width=\"16%\"><strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                        MAWB/MBL\n                    </font></strong></td><td width=\"20%\"><strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                        CONSOLE / JOB#\n                    </font></strong></td><td width=\"15%\"><strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                        PAYMENT EURO\n                    </font></strong></td><td width=\"14%\"><strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">\n                        RECEIVABLE EURO\n                    </font></strong></td><td height=\"27\"><strong><font face=\"Verdana, Arial, Helvetica, sans-serif\" size=\"2\">SHORT NARRATION</font></strong></td></tr>\n                     <tr *ngFor=\"let data of accounttable\"> -->\n                        <td height=\"27\"><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">{{data.ACCTNAME}}&nbsp;</font></td>\n                        <td align=\"center\"><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">{{data.MAWBMBL}}&nbsp;</font></td>\n                        <td align=\"center\"><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">{{data.JOBNO}}&nbsp;</font></td>\n                        <td align=\"center\"><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">{{data.INVOICEEURO}}&nbsp;</font></td>\n                        <td align=\"center\"><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">{{data.DEDUCTIONEURO}}&nbsp;</font></td>\n                        <td align=\"left\" colspan=\"4\"><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">{{data.NARRATION}}&nbsp;</font></td>\n                    </tr>              \n                    </tbody>\n                </table>\n            </div>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"1\">\n                <tbody>\n                    <tr>\n                    <td>\n                        <br>\n                        <br>\n                        <table width=\"88%\" height=\"26\" border=\"0\" align=\"center\" cellpadding=\"2\" cellspacing=\"2\">\n                            <tbody><tr>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">CHEQUE NO.</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">__________</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">DATE</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">__________</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">AMOUNT</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">__________</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">BANK</font></strong>\n                                </td>\n                                <td>\n                                    <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">___________</font></strong>\n                                </td>\n                            </tr>\n                        </tbody></table>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <br>\n                        <br>\n                        <table width=\"81%\" height=\"26\" border=\"0\" align=\"center\" cellpadding=\"2\" cellspacing=\"2\">\n                            <tbody><tr>\n                                <td>\n                                    <div align=\"center\">\n                                       \n                                            <span id=\"lblenterby\" class=\"UnderLine\">{{table0.USERNAME}}             </span>\n                                       \n                                    </div>\n                                </td>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">_____________</font></strong></div>\n                                </td>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">____________</font></strong></div>\n                                </td>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">___________</font></strong></div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">ENTERED BY</font></strong></div>\n                                </td>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">ACCOUNTANT</font></strong></div>\n                                </td>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">AUTHORISED</font></strong></div>\n                                </td>\n                                <td>\n                                    <div align=\"center\">\n                                        <strong><font size=\"2\" face=\"Verdana, Arial, Helvetica, sans-serif\">AUDITED</font></strong></div>\n                                </td>\n                            </tr>\n                        </tbody></table>\n                    </td>\n                </tr>\n            </tbody></table>\n        </td>\n    </tr>\n</tbody>\n</table>\n</div>\n<div class=\"row\" style=\"float: right;\">\n    <div class=\"col-12\">\n    <input type=\"button\" class=\"btn btn-sm btn-primary\" value=\"Print\" (click)=\"PrintElem()\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/jv-view.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/jv-view.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background-color: #62bada;height: 20px;width: 750px;margin: 0px auto;font-family: Verdana;\r\n    font-size: 15px;\">\r\n  <strong>JV DETAIL VIEW</strong>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\" style=\" width: 750px;margin: 0px auto;\" >\r\n            <tr>\r\n              <td class=\"col-form-span-heading \" colspan=\"4\">\r\n                General Details\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td><span class=\"col-form-span-label\"><b>Voucher No </b> </span></td>\r\n              <td> <span class=\"col-form-span-label\">{{VoucherNo}}</span> </td>\r\n              <td><span class=\"col-form-span-label\"><b>Voucher Date </b> </span></td>\r\n              <td><span class=\"col-form-span-label\">{{VoucherDate}}</span> </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration </b> </span></td>\r\n                <td colspan=\"3\"> <span class=\"col-form-span-label\">{{Narration}}</span> </td>\r\n            </tr>\r\n        \r\n            <tr>\r\n              <td class=\"col-form-span-heading \" colspan=\"4\">\r\n                Account Details\r\n              </td>\r\n            </tr>\r\n      <tr>\r\n          <td><span class=\"col-form-span-label\"><b> Total Debit</b> </span></td>\r\n          <td > <span class=\"col-form-span-label\"><b>{{TotDebit}}</b></span> </td>\r\n          <td><span class=\"col-form-span-label\"><b>Total Credit</b> </span></td>\r\n          <td > <span class=\"col-form-span-label\"><b>{{TotCredit}}</b></span> </td>\r\n      </tr>\r\n    \r\n            <tr>\r\n              <td colspan=\"4\">\r\n                <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                  <thead>\r\n                    <tr class=\"col-form-span-heading \">\r\n                      <th class=\"col-form-span-label\">Account Name</th>\r\n                      <th class=\"col-form-span-label\">Debit</th>\r\n                      <th class=\"col-form-span-label\">Credit</th>\r\n                      <th class=\"col-form-span-label\">Item </th>\r\n                      <th class=\"col-form-span-label\">Entry Type</th>\r\n                      <th class=\"col-form-span-label\">Job No</th>\r\n                      <th class=\"col-form-span-label\">Bill No</th>\r\n                      <th class=\"col-form-span-label\">Department</th>\r\n                      <th class=\"col-form-span-label\">Narration</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of AccountNameList\">\r\n                  \r\n                    <td><span class=\"col-form-span-label\"  [innerHtml]=\"data.ACCOUNT_NAME\"> </span></td>\r\n                      <td class=\"col-form-span-label\">{{data.DEBIT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.CREDIT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.ITEM}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.ET}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.JOBNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.BILLNO}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.DEPARTMENT}}</td>\r\n                      <td class=\"col-form-span-label\">{{data.NARRATION}}</td>\r\n                       </tr>\r\n               \r\n                  </tbody>\r\n                </table>\r\n              </td>\r\n            </tr>\r\n          \r\n       </table>\r\n      </div>\r\n      <div class=\"col-2\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\" style=\"background-color: #62bada;height: 20px;width: 750px;margin: 0px auto;\">\r\n  </div>\r\n     \r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/proformainvoice-print.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/proformainvoice-print.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"printmain\" *ngIf=\"printmodal\">\r\n  <div id=\"demo\">\r\n    <table bordercolor=\"black\" height=\"764\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\r\n      <tbody>\r\n        <tr>\r\n          <td valign=\"top\">\r\n          </td>\r\n          <td valign=\"top\">\r\n            <table id=\"Table2\" style=\"border-right: black 1px solid; border-top: black 1px solid;\r\n                left: 0px; border-left: black 1px solid; border-bottom: black 1px solid;margin:0 auto\" cellspacing=\"0\"\r\n              cellpadding=\"0\" width=\"700\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                <tr width=\"700\">\r\n                  <td>\r\n                    <!-- <span\r\n                      style='font-size:28px; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\r\n                      Manilal Patel Clearing Forwarding Private Limited</span> -->\r\n                      <!-- <span\r\n                style='font-size:24pt; font-weight: bold; font-family: \"Euclid Fraktur\",\"Old English Text MT\", fantasy, serif; color: black;'>\r\n                 {{table0[0].CMP_NAME| titlecase }}</span> -->\r\n                 <span>\r\n                  <!-- <img src=\"../../../assets/img/HEADER_CLGBOM.jpg\"></span> -->\r\n                      <!-- <img src=\"assets/img/HEADER_CLGBOM.jpg\" width=\"700\">  </span>    -->\r\n                     <img src={{CMP_IMAGE}} width=\"700\">  </span>\r\n\r\n                  </td>\r\n                </tr>\r\n          </td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n            <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"45%\">\r\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                      <b> &nbsp;{{table0[0].CMP_ADD1}}<br> &nbsp;{{table0[0].CMP_ADD2}}<br>\r\n                          &nbsp;{{table0[0].CMP_ADD3}}</b></span>\r\n                  </td>\r\n                  <td  width=\"33%\">\r\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                     <b>TelNo.+91(22)27240275/3095<br>FaxNo.+91(22)27240280,<br>Email:accounts.bom@manilal.com<br>Website:www.manilal.com</b>\r\n\r\n                      <b>TelNo.&nbsp;{{table0[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{table0[0].CMP_FAXNO}}<br>\r\n                          Email:&nbsp;{{table0[0].CMP_EMAIL}}<br>Website:&nbsp;</b>\r\n                    </span>\r\n                  </td>\r\n                  <td align=\"right\">\r\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\r\n                      <img src=\"../../../assets/Untitled-1.png\"></span>&nbsp;\r\n                     <img src=\" ../img/Untitled-1.png\"></span>&nbsp;\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr> -->\r\n        <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n            <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"33%\">\r\n                    &nbsp;&nbsp;<span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">No.\r\n                      {{INV_NO1}}</span>\r\n                  </td>\r\n                  <td align=\"center\" width=\"33%\">\r\n                    <span style=\"font-family:Arial;font-size:16pt;font-weight:bold;\">Proforma Invoice</span>\r\n                  </td>\r\n                  <td align=\"right\">\r\n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">DATE :\r\n                      {{INV_DATE1}}</span>&nbsp;\r\n                  </td>\r\n\r\n\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n            <table id=\"Table4\" cellspacing=\"0\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td valign=\"top\" width=\"1%\">\r\n                  </td>\r\n                  <td style=\"border-right: black 1px solid\" valign=\"top\" width=\"49%\">\r\n                    <table id=\"tbl_exp_mst\" class=\"Rpt_Label_content\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\"\r\n                      border=\"0\">\r\n                    </table>\r\n\r\n                    <span class=\"Rpt_Label\" style=\"display:inline-block;width:100%;\">{{EXP_NAME1}}\r\n                    </span><span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">\r\n                      {{EXP_INVADD11}}<br>{{EXP_INVADD2}}<br>{{EXP_INVADD3}}\r\n                      <br>{{EXP_INVCITY}} - {{EXP_INVPINCODE}}, <span class=\"col-form-span-label\"\r\n                        [innerHTML]=\"CITY_COUNTRY1\"></span>\r\n                    </span>\r\n\r\n\r\n                  </td>\r\n                  <td>\r\n                    <table id=\"Table6\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td align=\"right\" width=\"40%\">\r\n                            <span class=\"Rpt_Label\"> OUR REF :</span>\r\n                          </td>\r\n                          <td width=\"60%\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;width:100%;\">{{INV_JOBNO1}}</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"right\" width=\"40%\">\r\n                            <span class=\"Rpt_Label\"> VESSEL / AIRLINE :</span>\r\n                          </td>\r\n                          <td width=\"60%\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;width:100%;\">{{INV_CARRIER1}}</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"right\" width=\"40%\" colspan=\"1\" rowspan=\"1\">\r\n                            <span class=\"Rpt_Label\"> H.B/L/H.A.W.B :</span>\r\n                          </td>\r\n                          <td width=\"60%\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;width:100%;\">{{INV_HAWBNO1}}</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"right\" width=\"40%\">\r\n                            <span class=\"Rpt_Label\"> DATE :</span>\r\n                          </td>\r\n                          <td width=\"60%\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;width:100%;\">{{INV_HAWBDT1}}</span>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"border-bottom: black 1px solid\">\r\n            <table id=\"Table7\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td align=\"right\" width=\"22%\">\r\n                    <span class=\"Rpt_Label\">DOCUMENT THROUGH:</span>\r\n                  </td>\r\n                  <td colspan=\"2\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{DOCTHROUGH1}}</span>\r\n                  </td>\r\n                  <!-- <td align=\"right\" width=\"20%\">\r\n\r\n                  </td> -->\r\n                  <td width=\"30%\">\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"right\" width=\"22%\">\r\n                    <span class=\"Rpt_Label\">CONTENTS :</span>\r\n                  </td>\r\n                  <td width=\"30%\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{INV_GOODS1}}</span>\r\n                  </td>\r\n                  <td align=\"right\" width=\"20%\">\r\n                    <span class=\"Rpt_Label\">S/Bill No.:</span>\r\n                  </td>\r\n                  <td width=\"30%\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{BillNo}}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"right\" width=\"22%\">\r\n                    <span class=\"Rpt_Label\">YOUR REFERENCE :</span>\r\n                  </td>\r\n                  <td width=\"30%\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{INV_CLIENTREF1}}</span>\r\n                  </td>\r\n                  <td align=\"right\" width=\"20%\">\r\n                    <span class=\"Rpt_Label\">POL :</span>\r\n                  </td>\r\n                  <td width=\"30%\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{Pol}}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"right\" width=\"22%\">\r\n                    <span class=\"Rpt_Label\">NO.OF.PACKAGES :</span>\r\n                  </td>\r\n                  <td width=\"30%\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{INV_PKGS}}</span>\r\n                  </td>\r\n                  <td align=\"right\" width=\"20%\">\r\n                    <span class=\"Rpt_Label\">POD :</span>\r\n                  </td>\r\n                  <td width=\"30%\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{Pod}}</span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <table id=\"Table5\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td valign=\"top\" width=\"200\">\r\n                    <table id=\"tblEnclosure\" cellspacing=\"0\" cellpadding=\"0\" width=\"200\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"border-bottom: 1px solid\" align=\"center\" width=\"150\" height=\"40\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Enclosure</span>\r\n                          </td>\r\n                          <td style=\"border-left: 1px solid; border-bottom: 1px solid\" align=\"center\" width=\"50\"\r\n                            height=\"40\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Nos</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td id=\"tdEnclosure\" style=\"border-bottom: 1px solid\" align=\"center\" colspan=\"2\">\r\n                            <table cellspacing=\"0\" cellpadding=\"0\" width=\"200px\" he=\"\" border=\"0\"\r\n                              class=\"Rpt_Label_content\">\r\n                              <tbody>\r\n                                <tr *ngFor=\"let data of enclosuretable\">\r\n                                  <td width=\"1%\"></td>\r\n                                  <td>{{data.inv_desc}}</td>\r\n                                  <td width=\"50px\" style=\"BORDER-LEFT: 1px solid\">{{data.inv_number}}</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n\r\n                  </td>\r\n                  <td id=\"tdheight\" style=\"border-left: 1px solid\" valign=\"top\" width=\"500\" height=\"300\">\r\n                    <table id=\"tbl_Charges\" style=\"font-size: 7pt; font-family: Verdana, Arial\" height=\"100%\"\r\n                      cellspacing=\"0\" cellpadding=\"0\" width=\"500\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"width: 360px; border-bottom: 1px solid; height: 40px\" align=\"center\" height=\"40\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Charges\r\n                              Particulars</span>\r\n                          </td>\r\n                          <td style=\"border-left: 1px solid; width: 70px; border-bottom: 1px solid; height: 40px\"\r\n                            align=\"center\" height=\"40\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Taxable\r\n                              {{CURNAME}}</span>\r\n                          </td>\r\n                          <td style=\"border-left: 1px solid; width: 70px; border-bottom: 1px solid\" align=\"center\"\r\n                            height=\"40\">\r\n                            <span class=\"Rpt_Label_content\"\r\n                              style=\"display:inline-block;color:Black;font-size:7pt;font-weight:bold;width:100%;\">Non\r\n                              Taxable  {{CURNAME}}</span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td id=\"tdCharges\" align=\"center\" colspan=\"3\">\r\n                            <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\r\n                              <tbody>\r\n                                <tr *ngFor=\"let data2 of chargestable\">\r\n                                  <td width=\"1px\"></td>\r\n                                  <td width=\"360px\" valign=\"top\">{{data2.CHRG_DESC}} </td>\r\n                                  <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='1')\" >\r\n                                    {{(data2.INV_AMOUNT_Y|number:'1.2-4').replaceAll(',', '')}}&nbsp;</td>\r\n                                    <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='0')\" >\r\n                                      {{(data2.INV_INRAMT_Y |number:'1.2-4').replaceAll(',', '')}}&nbsp;</td>\r\n                                      <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='1')\" >\r\n                                        {{(data2.INV_AMOUNT_N |number:'1.2-4').replaceAll(',', '')}}&nbsp;</td>\r\n                                        <td width=\"70px\" style=\"BORDER-LEFT: 1px solid\" align=\"right\" valign=\"bottom\" *ngIf=\"(inrtype=='0')\" >\r\n                                          {{(data2.INV_INRAMT_N| number : '1.2-2').replaceAll(',', '') }}&nbsp;</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td style=\"width: 360px\" align=\"center\" height=\"100%\">\r\n                            &nbsp;\r\n                          </td>\r\n                          <td style=\"border-left: black 1px solid; width: 70px\" align=\"center\" height=\"100%\">\r\n                            &nbsp;\r\n                          </td>\r\n                          <td style=\"border-left: black 1px solid\" align=\"center\" width=\"70\" height=\"100%\">\r\n                            &nbsp;\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <table id=\"Table9\" cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"border-top: 1px solid;height:32px\" valign=\"top\" width=\"560\" colspan=\"2\">\r\n                    <!-- <table id=\"tbl_jobno\" class=\"labelnormal\" style=\"color: black\" cellspacing=\"0\"\r\n                            cellpadding=\"1\" width=\"90%\" border=\"0\">\r\n                            <tbody>\r\n                              <tr>\r\n                                <td></td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table> -->\r\n\r\n                    <span class=\"Rpt_Label_content\"\r\n                    [innerHTML]=\"NARRATION1\"></span>\r\n\r\n                    <span\r\n                      style=\"display:inline-block;color:Black;font-family:Arial;font-size:14px;font-weight:bold;width:90%;padding:0px;margin:0px\"><br>\r\n                      PAY BY DATE: {{PAYBLEBYDT1}}</span>\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; height: 32px\" align=\"right\" width=\"70\" height=\"32\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; height: 32px\" align=\"right\" width=\"69\" height=\"32\">\r\n                    &nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"border-top: black 1px solid; border-bottom: black 3px solid\" width=\"560\" colspan=\"2\"\r\n                    height=\"25\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td style=\"border-top: black 1px solid; border-left: black 1px solid; border-bottom: black 3px solid\"\r\n                    align=\"right\" width=\"70\" height=\"25\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\" >{{(datattable5[0].TOT_INV_AMOUNT_Y| number : '1.2-2').replaceAll(',', '')}}</span>\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\" >{{(datattable5[0].TOT_INV_INRAMT_Y| number : '1.2-2').replaceAll(',', '')}}</span>\r\n\r\n                  </td>\r\n                  <td style=\"border-top: black 1px solid; border-left: black 1px solid; border-bottom: black 3px solid\"\r\n                    align=\"right\" width=\"69\" height=\"25\">\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='1')\" >{{(datattable5[0].TOT_INV_AMOUNT_N| number : '1.2-2').replaceAll(',', '')}}</span>\r\n                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"  *ngIf=\"(inrtype=='0')\" >{{(datattable5[0].TOT_INV_INRAMT_N| number : '1.2-2').replaceAll(',', '')}}</span>\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of gsttable\">\r\n                  <td id=\"tdTaxableAmt\" style=\"border-bottom: black 1px solid\" nowrap=\"nowrap\" colspan=\"2\">\r\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"1px\"></td>\r\n                          <td *ngIf=\"(inrtype=='0')\"  valign=\"top\">{{data.DESC1}}</td>\r\n                          <td *ngIf=\"(inrtype=='1')\"  valign=\"top\">{{data.DESC_NONINR}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n\r\n                  <td id=\"tdTotalTaxableAmt\" style=\"border-left: black 1px solid; border-bottom: black 1px solid\"\r\n                    align=\"right\" width=\"70\">\r\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"1px\"></td>\r\n\r\n                          <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='1')\">\r\n                            {{data.INV_AMOUNT|number:'2.2-4'}}</td>\r\n                            <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='0')\">\r\n                              {{data.INV_INRAMT|number:'2.2-4'}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n\r\n                  <td id=\"tdRight\" style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\"\r\n                    width=\"69\">\r\n                    <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\" class=\"Rpt_Label_content\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"1px\"></td>\r\n\r\n\r\n                          <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='1')\">\r\n                            {{data.TAXABLEAMT| number : '1.2-2'}}</td>\r\n                            <td width=\"359px\"  align=\"right\" valign=\"top\"   *ngIf=\"(inrtype=='0')\">\r\n                              {{data.TAXABLEAMTINR| number : '1.2-2'}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n\r\n                </tr>\r\n                <tr  style=\"border-top: black 3px solid\" *ngIf=\"(inrtype=='0')\">\r\n                  <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\r\n                    <span class=\"Rpt_Label_content\">Amount Rounded off</span>\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\r\n                    <span class=\"Rpt_Label_content\"  >{{dattable9[0].ROUNDVALUE|number:'1.2-4'}}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\r\n                    <span *ngIf=\"inrtype=='0'\" class=\"Rpt_Label_content\">TOTAL RUPEES : {{sum_words}} </span>\r\n                    <span *ngIf=\"inrtype=='1'\" class=\"Rpt_Label_content\">TOTAL {{CURNAME}} : {{sum_words}} </span>\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\r\n                    <span class=\"Rpt_Label_content\"  style=\"display:inline-block;width:100%;\" >{{(this.sum | number : '1.2-2').replaceAll(',', '')}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"(inrtype=='0'&& INV_ADVANCE1 >0)\">\r\n                  <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\r\n                    <span class=\"Rpt_Label_content\">Less: Advance</span>\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\r\n                    <span class=\"Rpt_Label_content\">{{INV_ADVANCE1|number:'2.2-4'}}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"(inrtype=='0' && INV_ADVANCE1 >0)\">\r\n                  <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"630\" colspan=\"3\">\r\n                    <span class=\"Rpt_Label_content\">{{balanceduelbl}}</span>\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\r\n                    <span class=\"Rpt_Label_content\">{{this.balance|number:'2.2-4'}}</span></td>\r\n                </tr>\r\n\r\n\r\n                <tr>\r\n                  <td style=\"border-bottom: black 1px solid\" width=\"630\" colspan=\"3\">\r\n                    <span class=\"Rpt_Label_content\"></span>\r\n                  </td>\r\n                  <td style=\"border-left: black 1px solid; border-bottom: black 1px solid\" align=\"right\" width=\"69\">\r\n                    <span class=\"Rpt_Label_content\"></span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"height: 165px\" align=\"right\">\r\n            <table id=\"Table11\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td valign=\"top\">\r\n                    <table id=\"tbl_Despatch\" class=\"Rpt_Label_content\" style=\"font-size: 7pt\" cellspacing=\"0\"\r\n                      cellpadding=\"1\" width=\"90%\" border=\"0\">\r\n                      <tr *ngFor=\"let data of dispatchtable\">\r\n                        <td style=\"border-bottom: black 1px solid\" width=\"45%\">\r\n                          <span class=\"Rpt_Label_content\">{{data.inv_desc}}</span>\r\n                        </td>\r\n                        <td style=\"border-bottom: black 1px solid\" width=\"45%\">\r\n                          <span class=\"Rpt_Label_content\">{{data.inv_number}} </span>\r\n                        </td>\r\n                      </tr>\r\n\r\n                    </table>\r\n                  </td>\r\n                  <!-- <td valign=\"top\" align=\"center\" width=\"35%\">\r\n                    <table id=\"Table1\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td height=\"25\">\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td> -->\r\n                  <td valign=\"top\" align=\"center\" width=\"100%\">\r\n                    <table id=\"Table1\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n\r\n                        <tr>\r\n                            <td style=\"border-bottom: black 0px solid\" width=\"700px\">\r\n                                <table id=\"Tablebank\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\r\n\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                          <span id=\"Label4\" class=\"Rpt_Labelbank\">BANK DETAILS</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td id=\"tdleft\" width=\"700px\" >\r\n                                            <table id=\"Tableleft\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" >\r\n                                                <tr>\r\n                                                    <td width=\"100px\" align=\"left\">\r\n                                                        <span id=\"lblbeneficiary\" class=\"Rpt_Labelbank\">Beneficiary </span>\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td width=\"240px\">\r\n                                                       <span id=\"lblbeneficiarydata\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                       Width=\"100%\"class=\"Rpt_Label_contentbank\">{{datatablebank[0].BENEFICIARY}}</span>\r\n                                                    </td>\r\n                                                    <td align=\"left\" width=\"140px\" >\r\n                                                         <span id=\"lblswiftcode\" class=\"Rpt_Labelbank\">Swift Code </span>\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td width=\"240px\">\r\n\r\n                                                            <span id=\"lblswiftcodedata\" class=\"Rpt_Label_contentbank\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                            Width=\"100%\">{{datatablebank[0].SWIFTCODE}}</span>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td  align=\"left\">\r\n                                                        <span id=\"lblbankact\" class=\"Rpt_Labelbank\">Bank A/C</span>\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n\r\n                                                            <span id=\"lblbankactdata\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                            Width=\"100%\"class=\"Rpt_Label_contentbank\">{{datatablebank[0].BANKACT}}</span>\r\n                                                    </td>\r\n                                                    <td align=\"left\"  >\r\n\r\n                                                        <span id=\"lblcinno\" class=\"Rpt_Labelbank\">CIN NO </span>\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                         <span id=\"lblcinnodata\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                         Width=\"100%\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].CINNO1}}</span>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td align=\"left\">\r\n\r\n                                                        <span id=\"lblbankname\" class=\"Rpt_Labelbank\">Bank Name </span>\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <span id=\"lblBankNameData\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                        Width=\"100%\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].BANKNAME}}</span>\r\n                                                    </td>\r\n                                                    <td align=\"left\" >\r\n                                                        <span id=\"lblpanno\" class=\"Rpt_Labelbank\">PAN No </span>\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                        <span id=\"lblpannoData\"  DESIGNTIMEDRAGDROP=\"620\"\r\n                                                        Width=\"100%\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].PANNO}}</span>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td  align=\"left\" rowspan=\"1\">\r\n                                                      <span id=\"lblbankbranch\" class=\"Rpt_Labelbank\">Bank Branch</span>\r\n\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n\r\n                                                        <span id=\"lblbankbranchData\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                        Width=\"160px\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].BRANCH}},{{datatablebank[0].BANKADDRESS}}</span>\r\n                                                    </td>\r\n                                                    <td align=\"left\" width=\"140px\">\r\n                                                      <span id=\"lblneftcode\" class=\"Rpt_Labelbank\">RTGS/NEFT Code </span>\r\n\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                       <span id=\"lblneftcodeData\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                       Width=\"100%\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].RTGSCODE}}</span>\r\n                                                    </td>\r\n                                                </tr>\r\n\r\n                                                <tr>\r\n                                                  <td  align=\"left\">\r\n                                                    <span id=\"lbluom\" class=\"Rpt_Labelbank\">UAM No</span>\r\n\r\n                                                  </td>\r\n                                                  <td width=\"20px\">\r\n                                                    <span >:</span>\r\n                                                  </td>\r\n                                                  <td >\r\n\r\n                                                      <span id=\"lbluomData\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].MICRCODE}}</span>\r\n                                                  </td>\r\n                                                    <td align=\"left\"  >\r\n                                                      <span id=\"lblneftcode\" class=\"Rpt_Labelbank\">MICR Code </span>\r\n\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                       <span id=\"lblMicrCodeData\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                       Width=\"100%\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].MICRCODE}}</span>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td  align=\"left\">\r\n                                                      <span id=\"lbluom\" class=\"Rpt_Labelbank\"></span>\r\n\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <!-- <span >:</span> -->\r\n                                                    </td>\r\n                                                    <td >\r\n\r\n                                                        <!-- <span id=\"lbluomData\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].MICRCODE}}</span> -->\r\n                                                    </td>\r\n                                                    <td align=\"left\"  rowspan=\"1\">\r\n                                                      <span id=\"lblIFSCCode\" class=\"Rpt_Labelbank\">IFSC Code </span>\r\n\r\n                                                    </td>\r\n                                                    <td width=\"20px\">\r\n                                                      <span >:</span>\r\n                                                    </td>\r\n                                                    <td >\r\n                                                       <span id=\"lblIFSCCodeData\" DESIGNTIMEDRAGDROP=\"620\"\r\n                                                       Width=\"50%\" class=\"Rpt_Label_contentbank\">{{datatablebank[0].IFSCCODE}}</span>\r\n                                                    </td>\r\n                                                </tr>\r\n\r\n                                            </table>\r\n                                        </td>\r\n                                        <!-- <td id=\"Tableright\" width=\"150px\" align=\"right\">\r\n\r\n                                           \r\n                                        </td> -->\r\n\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                        <!-- <tr>\r\n                            <td>\r\n                              <span id=\"lblirnno\" class=\"Rpt_Label_content\">IRN No.:</span>\r\n\r\n                                <span id=\"lblirnnoData\" class=\"Rpt_Label_content\">{{datatable10[0].IRNNO}}</span>\r\n                            </td>\r\n                        </tr> -->\r\n\r\n\r\n                        <tr>\r\n\r\n                            <td width=\"100%\" align=\"right\">\r\n                              <span id=\"lblFor\" class=\"Rpt_Label_contentbank\">For {{CMP_FULLNAME1}}</span>\r\n                            </td>\r\n                        </tr>\r\n\r\n                    </table>\r\n                </td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n            <table id=\"Table13\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\r\n              <!-- <tr>\r\n                  <td width=\"33%\" colspan=\"2\">\r\n                    <span id=\"lblservicetaxreg\" class=\"Rpt_Label_content\">For {{cmpname}}</span>\r\n                    <span id=\"lblFor\" class=\"Rpt_Label_content\">For {{cmpname}}</span>\r\n                      <asp:Label ID=\"lblservicetaxreg\" runat=\"server\" CssClass=\"Rpt_Label_content\" DESIGNTIMEDRAGDROP=\"498\"\r\n                          Width=\"456px\"></asp:Label><asp:Label ID=\"lblesicreg\" runat=\"server\" CssClass=\"Rpt_Label_content\"\r\n                              DESIGNTIMEDRAGDROP=\"767\" Width=\"90%\"></asp:Label>\r\n                  </td>\r\n                  <td valign=\"top\" align=\"center\" width=\"40%\"></td>\r\n              </tr> -->\r\n\r\n\r\n\r\n\r\n              <tr>\r\n                  <td width=\"33%\" colspan=\"2\">\r\n                    <span id=\"lblincometaxno\" class=\"Rpt_Label_content\"> {{INCOMETAXNO1}}</span>\r\n                    <span id=\"lblcinno\" class=\"Rpt_Label_content\"> {{CINNO_REG1}}</span>\r\n                      <!-- <asp:Label ID=\"lblIncomeTaxNo\" runat=\"server\"\r\n                          CssClass=\"Rpt_Label_content\" Width=\"90%\"></asp:Label><asp:Label ID=\"lblCINNo\" runat=\"server\" CssClass=\"Rpt_Label_content\" Width=\"90%\"></asp:Label> -->\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                  <td>\r\n                    <span id=\"lblStaxNotify\" class=\"Rpt_Label_content\"> {{SAXNOTIFY}}</span>\r\n                  </td>\r\n                  <td width=\"100%\" height=\"20\" align=\"right\" colspan=\"2\">\r\n\r\n                      <!-- <img id=\"IMGSIGN\" src=\"assets/img/Signature-Image.jpg\" width=\"134\" runat=\"server\"> -->\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                  <td valign=\"top\" align=\"right\" width=\"100%\">\r\n                      <!-- <asp:Label ID=\"Label34\" runat=\"server\" CssClass=\"Rpt_Label_contentbank\" DESIGNTIMEDRAGDROP=\"223\">AUTHORISED SIGNATORY&nbsp&nbsp;</asp:Label> -->\r\n                      <span id=\"Label34\" class=\"Rpt_Label_contentbank\">AUTHORISED SIGNATORY</span>\r\n                  </td>\r\n\r\n              </tr>\r\n\r\n          </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\" valign=\"top\" align=\"left\">\r\n              <table id=\"Table13\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"1\">\r\n                  <tr>\r\n                      <td>\r\n                          <span id=\"lblirnno\" class=\"Rpt_Label\" align=\"left\">Note :  </span>\r\n                          <span class=\"Rpt_Label_content\" > Figures can vary at the time of final bill.If any refund comes after final payment, please submit proper letter within 15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; days of final Tax Invoice.</span>\r\n                      </td>\r\n                  </tr>\r\n              </table>\r\n          </td>\r\n      </tr>\r\n        <!-- <tr>\r\n          <td>\r\n            <span class=\"Rpt_Label_contentbank\"\r\n              style=\"display:inline-block;width:100%;border-top: black 1px solid\">{{CMPADDRESS1}}</span>\r\n          </td>\r\n        </tr> -->\r\n\r\n      </tbody>\r\n    </table>\r\n    </td>\r\n    </tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <div class=\"row\">\r\n      <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <table style=\"width: 250px; height: 88px; text-align: center\" cellspacing=\"1\" cellpadding=\"1\" width=\"250\"\r\n    align=\"center\" border=\"1\">\r\n    <tr>\r\n      <td style=\"font-weight: bold; font-size: x-small; color: white; font-family: Verdana\" bgcolor=\"#62bada\">\r\n        Please select Currency &amp; Click OK to Print\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <input type=\"radio\" class=\"col-form-span-label\" name=\"exampleRadios\" value='0' [(ngModel)]=\"exampleRadios1\">&nbsp; INR Invoice\r\n        <input type=\"radio\" class=\"col-form-span-label\"  name=\"exampleRadios\" value='1' [(ngModel)]=\"exampleRadios1\">&nbsp; NON INR\r\n        Invoice\r\n\r\n        <button class=\"btn btn-success mt-1\" type=\"submit\" (click)=\"currencyType(exampleRadios1)\"> <span\r\n            class=\"col-form-span-label\">OK</span></button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/purchase-print.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/purchase-print.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\">\n<table id=\"Table1\" cellspacing=\"0\" cellpadding=\"0\" width=\"700\" border=\"0\" style=\"border-right: 1px solid black; border-top: 1px solid black; border-left: 1px solid black;\n        border-bottom: 1px solid;margin: 0 auto;\">\n\t<tbody>\n        <tr>\n            <td>\n          <tr width=\"700\" >\n            <td>\n                <!-- <span\n                style='font-size:28pt; font-weight: bold; font-family: \"Euclid Fraktur\", \"Old English Text MT\", fantasy, serif; color: black;'>\n                Manilal Patel Clearing Forwarding Pvt. Ltd.</span><br> -->\n              <!-- <span\n                style='font-size:28pt; font-weight: bold; font-family: \"Euclid Fraktur\",\"Old English Text MT\", fantasy, serif; color: black;'>\n               {{table3[0].CMP_NAME| titlecase }}</span> -->\n               <span> \n                <!-- <img src=\"../../../assets/img/HEADER_CLGBOM.jpg\"></span> -->\n                    <!-- <img src=\"assets/img/HEADER_CLGBOM.jpg\" width=\"700\">  </span>    -->\n                   <img src={{CMP_IMAGE}} width=\"700\">  </span>    \n            </td>\n          </tr>\n    </td>\n  </tr>\n  <!-- <tr>\n    <td style=\"border-bottom: black 5px solid\">\n      <table id=\"Table3\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n        <tbody>\n          <tr>\n            <td width=\"45%\">\n            \n                <b> &nbsp;{{table3[0].CMP_ADD1}}<br> &nbsp;{{table3[0].CMP_ADD2}}<br>\n                    &nbsp;{{table3[0].CMP_ADD3}}</b></span> \n                    <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                        <b> &nbsp;{{table3[0].CMP_ADD1}}<br> &nbsp;{{table3[0].CMP_ADD2}}<br>\n                            &nbsp;{{table3[0].CMP_ADD3}}</b></span>\n            </td>\n            <td  width=\"33%\">\n              <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n              <b>TelNo.+91(22)27240275/3095<br>FaxNo.+91(22)27240280,<br>Email:accounts.bom@manilal.com<br>Website:www.manilal.com</b>\n\n                <b>TelNo.&nbsp;{{table3[0].CMP_TELNO}}<br>FaxNo.&nbsp;{{table3[0].CMP_FAXNO}}<br>\n                    Email:&nbsp;{{table3[0].CMP_EMAIL}}<br>Website:&nbsp;www.manilal.com</b>\n              </span>\n            </td>\n            <td align=\"right\">\n              <span class=\"Rpt_CodeDate\" style=\"font-weight:bold;\">\n                <img src=\"../../../assets/Untitled-1.png\"></span>&nbsp;\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <br>\n    </td>\n  </tr> -->\n  <tr>\n    <td style=\"border-bottom: black 1px solid\">\n  \n\t<tr>\n\t\t<td style=\"border-bottom: 1px solid\" >\n                <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                    <tbody><tr>\n                        <td width=\"25%\">\n                            &nbsp;\n                            <span *ngIf=\" Status == 'PI' || Status == 'GENPI'\" class=\"Rpt_CodeDate\"  style=\"font-family:Verdana;font-weight:bold;cursor:hand;\" (click)=\"openEdocument()\">{{table0[0].pur_code}}</span>\n                            <span *ngIf=\" Status == 'RPI' || Status == 'SRPI'\" class=\"Rpt_CodeDate\"  style=\"font-family:Verdana;font-weight:bold;cursor:hand;\" (click)=\"openEdocument()\">{{table0[0].PUR_CODE}}</span>\n                        </td>\n                        <td align=\"center\"  >\n                            <span style=\"font-family:Verdana;font-size:12pt;font-weight:bold;\">{{printheader}}</span>\n                        </td>\n                        <td align=\"right\" >\n                            <span   *ngIf=\" Status == 'PI' || Status == 'GENPI'\"class=\"Rpt_CodeDate\" style=\"font-family:Verdana;font-weight:bold;\">{{table0[0].pur_date}}</span>&nbsp;\n                            <span   *ngIf=\" Status == 'RPI' || Status=='SRPI'\"class=\"Rpt_CodeDate\" style=\"font-family:Verdana;font-weight:bold;\">{{table0[0].PUR_DATE}}</span>&nbsp;\n                        </td>\n                    </tr>\n                </tbody></table>\n            </td>\n    </tr>\n    <tr>\n\t\t<td style=\"border-bottom: 1px solid\">\n                <table  cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                    <tbody><tr>\n                        <td style=\"border-top-width: 1px; border-left-width: 1px; border-left-color: #000000;\n                            border-bottom-width: 1px; border-bottom-color: #000000; border-top-color: #000000;\n                            border-right-width: 1px; border-right-color: #000000\" valign=\"top\" align=\"left\" width=\"50%\" colspan=\"2\" height=\"30\">\n                            <table  cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                                <tbody><tr>\n                                    <td align=\"right\" width=\"100\">\n                                        <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">SUPPLIER :</span>\n                                    </td>\n                                    <td>\n                                        <span  *ngIf=\" Status == 'PI' || Status == 'GENPI'\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table0[0].supplier}}</span>\n                                        <span  *ngIf=\"Status == 'RPI' || Status=='SRPI'\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table0[0].SUPPLIER}}</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td align=\"right\">\n                                        <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">INVOICE NO :</span>\n                                    </td>\n                                    <td>\n                                        <span *ngIf=\" Status == 'PI' || Status == 'GENPI'\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\" [innerHtml]=\"table0[0].pur_invno\"></span>\n                                        <span *ngIf=\" Status == 'RPI' || Status=='SRPI'\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\" [innerHtml]=\"table0[0].PUR_INVNO\"></span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td align=\"right\">\n                                        <span class=\"Rpt_Label_content\" style=\"font-weight:bold;\">DUE DATE :</span>\n                                    </td>\n                                    <td nowrap=\"\">\n                                        <span  *ngIf=\" Status == 'PI' || Status == 'GENPI'\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table0[0].pur_duedt}}</span>\n                                        <span  *ngIf=\"  Status == 'RPI' || Status=='SRPI'\" class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\">{{table0[0].PUR_DUEDT}}</span>\n                                    </td>\n                                </tr>\n                            </tbody></table>\n                        </td>\n                    </tr>\n                </tbody></table>\n            </td>\n    </tr>\n    <tr >\n\t\t<td  style=\"border-bottom: black 1px solid\" valign=\"top\" height=\"550\">\n                    <table id=\"Table10\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody><tr>\n                            <td height=\"5\">\n                            </td>\n                        </tr>\n                    </tbody></table>\n                <table cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:700px;border-collapse:collapse;\">\n\t\t\t<tbody>\n                <tr class=\"dgHeader\" align=\"center\">\n                <td style=\"white-space:nowrap;\">Debit Account</td>\n                <td style=\"white-space:nowrap;\">Job No</td>\n                <td style=\"white-space:nowrap;\">Item Name</td>\n                <td style=\"white-space:nowrap;\">Amount</td>\n                <td style=\"white-space:nowrap;\">Deduction</td>\n                <td style=\"white-space:nowrap;\">Narration</td>\n            </tr>\n            <tr class=\"dgItem\" *ngFor=\"let data of table1\"> \n                <td style=\"white-space:nowrap;\">{{data.ACCTNAME}}</td>\n                <td style=\"white-space:nowrap;cursor:hand; \"  (click)=\"printjobReport(data.PUR_JOBNO)\">{{data.PUR_JOBNO}}</td>\n                <td style=\"white-space:nowrap;\">{{data.ITEMNAME}}</td>\n                <td align=\"right\" style=\"white-space:nowrap;\">{{data.PUR_AMOUNT|number:'2.2-4'}}</td>\n                <td align=\"right\" style=\"white-space:nowrap;\">{{data.PUR_DEDUCTION|number:'2.2-4'}}</td>\n                <td style=\"white-space:nowrap;\">{{data.PUR_DESC}}</td>\n\t\t\t</tr>\n\t\t</tbody></table>\n            </td>\n    </tr>\n    <tr *ngIf=\"table4.length>0\">\n\t\t<td  valign=\"top\" >\n                    <!-- <table id=\"Table11\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody><tr>\n                            <td height=\"5\">\n                            </td>\n                        </tr>\n                    </tbody></table> -->\n                <table cellspacing=\"0\" rules=\"all\" border=\"1\" style=\"width:50%;border-collapse:collapse;\">\n\t\t\t<tbody>\n                <tr class=\"dgHeader\" align=\"center\">\n                <td style=\"white-space:nowrap;\">TT</td>\n                <td style=\"white-space:nowrap;\">Entry No</td>\n                <td style=\"white-space:nowrap;\">Entry Dt</td>\n                <td style=\"white-space:nowrap;\">Cheque No</td>\n                <td style=\"white-space:nowrap;\">Cr Amt</td>\n                <td style=\"white-space:nowrap;\">Dr Amt</td>\n            </tr>\n            <tr class=\"dgItem\" *ngFor=\"let data of table4\"> \n                <td style=\"white-space:nowrap;\">{{data.TRANSTYPE}}</td>\n                <td style=\"white-space:nowrap;cursor:hand;\">{{data.ENTRYNO}}</td>\n                <td style=\"white-space:nowrap;\">{{data.ENTRYDT}}</td>\n                <td align=\"right\" style=\"white-space:nowrap;\">{{data.CHEQUENO}}</td>\n                <td align=\"right\" style=\"white-space:nowrap;\">{{data.CRAMT|number:'2.2-4'}}</td>\n                <td style=\"white-space:nowrap;\">{{data.DRAMT|number:'2.2-4'}}</td>\n\t\t\t</tr>\n\t\t</tbody></table>\n            </td>\n    </tr>\n    <tr>\n\t\t<td style=\"border-bottom: black 1px solid\" valign=\"top\">\n                <span  class=\"Rpt_Label_content\">{{table0[0].Remarks}}</span>\n            </td>\n    </tr>\n    <tr>\n\t\t<td style=\"border-bottom: black 1px solid\" valign=\"top\">\n                <table id=\"Table12\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                    <tbody><tr>\n                        <td align=\"right\">\n                            <span  class=\"Rpt_Label_content\" style=\"font-weight:bold;\"> Total Amount :</span>\n                        </td>\n                        <td align=\"right\" width=\"20%\">\n                            <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">{{table2[0].TOTALAMT|number:'2.2-4'}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td align=\"right\">\n                            <span  class=\"Rpt_Label_content\" style=\"font-weight:bold;\">Total Deduction : </span>\n                        </td>\n                        <td align=\"right\" width=\"20%\">\n                            <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">{{table2[0].TOTALDEDUCTION|number:'2.2-4'}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td align=\"right\">\n                            <span  class=\"Rpt_Label_content\"  style=\"font-weight:bold;\">Grand Total :</span>\n                        </td>\n                        <td align=\"right\" width=\"20%\">\n                            <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">{{table2[0].TOTALNETTOTAL|number:'2.2-4'}}</span>\n                        </td>\n                    </tr>\n                </tbody></table>\n            </td>\n    </tr>\n    <tr>\n\t\t<td style=\"border-bottom: black 1px solid\" valign=\"top\">\n                <span  class=\"Rpt_Label_content\">INDIAN RUPEES : {{total_words}} </span>\n            </td>\n\t</tr>\n\t<tr>\n\t\t<td valign=\"top\" align=\"center\" height=\"25\">\n            </td>\n    </tr>\n    <tr>\n\t\t<td style=\"border-bottom: black 1px solid\" valign=\"top\" align=\"center\">\n                <table  cellspacing=\"1\" cellpadding=\"1\" width=\"90%\" border=\"0\">\n                    <tbody><tr>\n                        <td align=\"center\">\n                            <span style=\"font-family:Verdana;font-size:8pt;\">{{table2[0].ENTERDBY}}   </span>\n                        </td>\n                        <td align=\"center\">\n                            <span  style=\"font-family:Verdana;font-size:8pt;\">____________</span>\n                        </td>\n                        <td align=\"center\">\n                            <span  style=\"font-family:Verdana;font-size:8pt;\">____________</span>\n                        </td>\n                        <td align=\"center\">\n                            <span style=\"font-family:Verdana;font-size:8pt;\">____________</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td align=\"center\">\n                            <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Entered By</span>\n                        </td>\n                        <td align=\"center\">\n                            <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Accountant</span>\n                        </td>\n                        <td align=\"center\">\n                            <span  class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Authorised</span>\n                        </td>\n                        <td align=\"center\">\n                            <span class=\"Rpt_Label_content\" style=\"font-family:Verdana;\">Audited</span>\n                        </td>\n                    </tr>\n                </tbody></table>\n            </td>\n\t</tr>\n\t<tr>\n\t\t<td>\n                <table  cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                    <tbody><tr>\n                        <td valign=\"top\" align=\"left\">\n                        </td>\n                        <td valign=\"top\" align=\"right\" width=\"50%\">\n                            <table  cellspacing=\"1\" cellpadding=\"1\" border=\"0\">\n                                <tbody><tr>\n                                    <td align=\"right\">\n                                        <span  style=\"font-family:Verdana;font-size:8pt;\">E. &amp; O. E.</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td align=\"right\">\n                                        <table  cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" border=\"0\">\n                                            <tbody><tr>\n                                                <td valign=\"top\">\n                                                    <span class=\"Rpt_Label_content\" style=\"display:inline-block;width:25px;\">For </span>\n                                                </td>\n                                                <td>\n                                                    <span  class=\"Rpt_Label_content\" style=\"display:inline-block;width:100%;\"> {{table3[0].CMP_NAME}}  </span>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td valign=\"top\" height=\"25\">\n                                                </td>\n                                                <td height=\"25\">\n                                                </td>\n                                            </tr>\n                                        </tbody></table>\n                                    </td>\n                                </tr>\n                            </tbody></table>\n                        </td>\n                    </tr>\n                </tbody></table>\n            </td>\n\t</tr>\n    </td>\n  </tr>\n</tbody>\n</table>\n</div>\n<div class=\"row\" style=\"float: right;\">\n    <div class=\"col-12\">\n    <input type=\"button\" value=\"Print\" (click)=\"PrintElem()\" />\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/purchase-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/purchase-view.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>PURCHASE REQUEST VIEW</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\" width: 750px;margin: 0px auto;\">\r\n\r\n                <tr class=\"bakgrdliteBlue\">\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b> General Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>Purchase No</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                            <td><span class=\"col-form-span-label\"><b> {{PurchaseNo}}</b> </span></td>\r\n                    <td><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                            <td><span class=\"col-form-span-label\"><b> {{PurchaseDate}}</b> </span></td>\r\n                    </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                    <td colspan=\"3\"><span class=\"col-form-span-label\"><b> {{Narration}}</b> </span></td>\r\n                </tr>\r\n                <tr class=\"bakgrdliteBlue\">\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>Supplier Details</b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Supplier Name</b> </span></td>\r\n                    <td colspan=\"3\">\r\n                        <span class=\"col-form-span-label\"><b> {{pursuppliername}}</b> </span>\r\n                        \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Bill To Address</b> </span></td>\r\n                    <td><span class=\"col-form-span-label\"><b> {{billaddress}}</b> </span></td>\r\n              \r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>Inv No</b> </span></td>\r\n                            <td><span class=\"col-form-span-label\"><b> {{InvNo}}</b> </span></td>\r\n                \r\n                    <td><span class=\"col-form-span-label\"><b>Inv Date</b> </span></td>\r\n                            <td><span class=\"col-form-span-label\"><b> {{InvDate}}</b> </span></td>\r\n                    </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>Bill Received On</b> </span></td>\r\n                    <td><span class=\"col-form-span-label\"><b> {{BillReceive}}</b> </span></td>\r\n                    <td><span class=\"col-form-span-label\"><b>Due Date</b> </span></td>\r\n                     <td><span class=\"col-form-span-label\"><b> {{DueDate}}</b> </span></td>\r\n                 </tr>\r\n                 <tr class=\"bakgrdliteBlue\">\r\n                    <td class=\"col-form-span-heading \" colspan=\"2\">\r\n                        Supplier Invoice Passing Details\r\n                    </td>\r\n                    <td  colspan=\"2\"\r\n                      class=\"col-form-span-label\"> \r\n                      <span class=\"col-form-span-label\" ><b>IsPassed</b>  </span>  \r\n                      <input type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"IsPassed\">\r\n                  </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>Passed By </b> </span></td>\r\n                    <td> <span class=\"col-form-span-label\">{{passedbyperson}}</span> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Passed Amount </b> </span></td>\r\n                    <td><span class=\"col-form-span-label\">{{PassedAmount}}</span> </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td><span class=\"col-form-span-label\"><b>Invoice Amount </b> </span></td>\r\n                      <td> <span class=\"col-form-span-label\">{{InvoiceAmount}}</span> </td>\r\n                      <td><span class=\"col-form-span-label\"><b>Voucher No. </b> </span></td>\r\n                      <td> <span class=\"col-form-span-label\">{{VoucherNo}}</span> </td>\r\n                  </tr>\r\n                <tr class=\"bakgrdliteBlue\" >\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        <b>Accounts Details</b>\r\n                    </td>\r\n                </tr>\r\n                   <tr>\r\n\r\n                    <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n                    <td> <input [(ngModel)]=\"NetAmt\"  type=\"text\" class=\"form-control width150\"\r\n                            maxlength=\"40\"> </td>\r\n                    <td colspan=\"2\"></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n                    <td> <span class=\"col-form-span-label\">{{NetAmount}}</span> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                    <td> <span class=\"col-form-span-label\">{{Netdeduction}}</span> </td>\r\n                                   </tr>\r\n                <tr>\r\n                    <td colspan=\"4\">\r\n                        <div class=\"row xyscroll\">\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountlist.length>0\">\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                      \r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Amount</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Deduction</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Pass Amt</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Item</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Job No</th>\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Narration</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"Accountlist.length>0\">\r\n                                    <tr *ngFor=\"let obj of Accountlist\">\r\n                                      \r\n                                        <td><span class=\"col-form-span-label\" [innerHtml]=\"obj.ACCOUNT_NAME\"> </span>\r\n                                        </td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.SRPIPASSAMOUNT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n              \r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/reqbp-bill-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/reqbp-bill-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header formheading\">\n                    <strong>BP REQUEST VIEW BILL LIST   </strong>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col-12 col-md-2 col-lg-2\"> </div>\n        <div class=\"col-12 col-md-8 col-lg-8\">\n            <table class=\"table table-bordered table-sm-new bgwhite\">     \n                <thead> \n                <tr class=\"col-form-span-heading\">\n                    <th class=\"col-form-span-label\">TRANSTYPE</th>\n                    <th class=\"col-form-span-label\">TRANSCODE</th>\n                    <th class=\"col-form-span-label\">DRAMT </th>\n                    <th class=\"col-form-span-label\">CRAMT </th>                   \n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of bill_list\">\n                    <td class=\"col-form-span-label\">{{data.TRANSTYPE}}</td>\n                    <td class=\"col-form-span-label\">{{data.TRANSCODE}}</td>\n                    <td class=\"col-form-span-label\">{{data.DRAMT}}</td>\n                    <td class=\"col-form-span-label\">{{data.CRAMT}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-12 col-md-2 col-lg-2\"> </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/reqbp-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/reqbp-view.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background-color: #62bada;height: 30px;font-family: Verdana;\nfont-size: 15px;\">\n    <strong>VIEW REQUEST BANK PAYMENT</strong>\n</div>\n<div class=\"modal-body\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <table class=\"table table-bordered table-sm-new bgwhite\">\n                    <tr>\n                        <td class=\"col-form-span-heading\" colspan=\"12\">\n                            General Details\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" ><b>Entry No </b> </span></td>\n                        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{table.ENTRYNO}}</span> </td>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" ><b> Entry Date</b> </span></td>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\">{{table.ENTRYDT}}</span> </td>\n                    </tr>\n                     <tr>\n                        <td class=\"col-form-span-heading \" colspan=\"12\">\n                            Bank/Cash Details\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" ><b>Cheque Type</b> </span></td>\n                        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{table.CHEQUETYPE}}</span> </td>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\"><b>Cheque No </b> </span></td>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" >{{table.CHEQUENO}}</span> </td>\n                    </tr>\n                <tr>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" ><b>Bank</b> </span></td>\n                        <td colspan=\"3\"> <span class=\"col-form-span-label\" >{{table.BANK}}</span> </td>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\"><b>Our Bank</b> </span></td>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" >{{table.BANKNAME}}</span> </td>\n                    </tr>\n                     <tr>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" ><b>Chq.Pay By Dt. </b> </span></td>\n                        <td colspan=\"9\"> <span class=\"col-form-span-label\">{{table.CHEQUEDT}}</span> </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"3\"><span class=\"col-form-span-label\" ><b>Narration </b> </span></td>\n                        <td colspan=\"9\"> <span class=\"col-form-span-label\">{{table.NARRATION}}</span> </td>\n                    </tr>\n                    <tr>\n                        <td class=\"col-form-span-heading\" colspan=\"12\">\n                            Details\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"col-form-span p-1\" colspan=\"12\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"col-form-span-heading \" colspan=\"3\"> </td>\n                        <td class=\"col-form-span-heading \" colspan=\"2\"> Tot Amount </td>\n                        <td class=\"col-form-span-heading \" colspan=\"1\"> {{table2[0].TOTAMOUNT}} </td>\n                        <td class=\"col-form-span-heading \" colspan=\"2\"> Tot Deduction </td>\n                        <td class=\"col-form-span-heading \" colspan=\"1\"> {{table2[0].TOTDEDUCTION}} </td>\n                        <td class=\"col-form-span-heading \" colspan=\"2\"> Net Amount </td>\n                        <td class=\"col-form-span-heading \" colspan=\"1\"> {{table2[0].NETTOTAL}} </td>\n                    </tr>\n                    <tr>\n                        <td  colspan=\"3\"><span class=\"col-form-span-label\"><b>Paynee Name </b> </span></td>\n                        <td colspan=\"9\"> <span class=\"col-form-span-label\">{{table.PAYEENAME}}</span> </td>\n                    </tr>\n                    <tr>\n                        <td class=\"col-form-span p-1\" colspan=\"12\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"12\">\n                            <table class=\"table table-bordered table-sm-new bgwhite \">\n                                <thead>\n                                    <tr class=\"col-form-span-heading\">\n                                        <th class=\"col-form-span-label\">Account Name</th>\n                                        <th class=\"col-form-span-label\">Job</th>\n                                        <th class=\"col-form-span-label\">Job No</th>\n                                        <th class=\"col-form-span-label\">Bill No</th>\n                                        <th class=\"col-form-span-label\">Bill</th>\n                                        <th class=\"col-form-span-label\">Deduction</th>\n                                        <th class=\"col-form-span-label\">Amount</th>\n                                        <th class=\"col-form-span-label\">Narration</th>\n                                        <th class=\"col-form-span-label\">Entry Type</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let data of table1\">\n                                        <td class=\"col-form-span-label\">{{data.CLIENT}}</td>\n                                        <td class=\"col-form-span-label  anchor-link\" (click)=\"AdvRecvClient(data.JOBNO)\">{{data.JOBADV}}</td>\n                                        <td class=\"col-form-span-label  anchor-link\" (click)=\"Jobprofit(data.JOBNO)\">{{data.JOBNO}}</td>\n                                        <td class=\"col-form-span-label anchor-link\" (click)=\"billprint(data.BILLNO)\">{{data.BILLNO}}</td>\n                                        <td class=\"col-form-span-label anchor-link\" (click)=\"billlist(data.BILLNO)\">{{data.BILLLIST}}</td>\n                                        <td class=\"col-form-span-label\">{{data.DEDUCTION}}</td>\n                                        <td class=\"col-form-span-label\">{{data.AMOUNT}}</td>\n                                        <td class=\"col-form-span-label\">{{data.NARRATION}}</td>\n                                        <td class=\"col-form-span-label\">{{data.ENTRYTYPE}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                    </tr>\n\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer\" style=\"background-color: #62bada;height: 30px;bottom:0;position: absolute;width: 100%;\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/singlejobno-report.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/singlejobno-report.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"report-div\">\n    <table cellspacing=\"0\" cellpadding=\"0\"\n        style=\"height:800px;width:700px;margin:0 auto;border-color: #000000;background-color: #ffffff;\" border=\"1\">\n        <tbody>\n            <tr>\n                <td height=\"100\">\n                    <table cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                        <tbody>\n                            <tr>\n                                <td align=\"center\" height=\"30\">\n                                    <span class=\"rptlblCmpName\">{{table0.HEADING_1}} </span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"center\" height=\"10\">\n                                    <span class=\"rptlblCmpAdd\" >{{table0.HEADING_2}}</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"center\" height=\"20\">\n                                    <span  class=\"rptlblCmpAdd\">{{table0.HEADING_3}}</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"center\" height=\"20\">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"border-top: black 1px solid; height: 20px\" align=\"center\" height=\"20\">\n                                    &nbsp;\n                                    <table cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                                        <tbody>\n                                            <tr>\n                                                <td align=\"right\" width=\"45%\" colspan=\"1\" rowspan=\"1\">\n                                                    <span class=\"rptlblHeader\">Job No : </span>\n                                                </td>\n                                                <td>\n                                                </td>\n                                                <td>\n                                                    <span class=\"rptlblHeader\">{{JobNo}}</span>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td align=\"center\" width=\"45%\" colspan=\"3\">\n                                                    <span class=\"rptlblHeader\">Client Name :</span>&nbsp;&nbsp;\n                                                    <span class=\"rptlblHeader\">{{table1.EXP_NAME}}</span>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"border-top: black 1px solid; height: 25px\" bordercolor=\"#000070\" align=\"center\" height=\"25\">\n                </td>\n            </tr>\n            <tr>\n                <td align=\"center\" style=\"padding:20px; height: 50px\" height=\"50\">\n                    <table cellspacing=\"1\" cellpadding=\"1\" border=\"0\">\n                        <tbody>\n                            <tr>\n                                <td align=\"right\" width=\"20%\" colspan=\"1\" rowspan=\"1\">\n                                    <span class=\"rptlblHeader\">Bill No. :</span>\n                                </td>\n                                <td>\n                                    <span class=\"rptlblNormal\">{{table1.INV_NO}}</span>\n                                </td>\n                                <td align=\"right\">\n                                    <span class=\"rptlblHeader\">Date :</span>\n                                </td>\n                                <td>\n                                    <span class=\"rptlblNormal\">{{table1.INV_DATE}}</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"right\">\n\n                                </td>\n                                <td colspan=\"3\">\n\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"right\">\n                                    <span class=\"rptlblHeader\">Packages :</span>\n                                </td>\n                                <td>\n                                    <span class=\"rptlblNormal\">{{table1.INV_PKGS}}</span>\n                                </td>\n                                <td align=\"right\">\n                                    <span class=\"rptlblHeader\">Weighting :</span>\n                                </td>\n                                <td>\n                                    <span class=\"rptlblNormal\">{{table1.INV_WT}}</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"right\">\n                                    <span class=\"rptlblHeader\">Vessel/Airline :</span>\n                                </td>\n                                <td>\n                                    <span class=\"rptlblNormal\">{{table1.INV_CARRIER}}</span>\n                                </td>\n                                <td align=\"right\">\n                                </td>\n                                <td>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n            <tr>\n                <td height=\"500\" style=\"padding:30px;height:500px;\" >\n                    <table cellspacing=\"0\" cellpadding=\"0\" align=\"center\" width=\"100%\">\n                        <tbody>\n                            <tr *ngFor=\"let data of table2\">\n                                <td>\n                            <tr>\n                                <td style=\"padding:15px 0\">\n                                    <span\n                                        class=\"rptlblHeader\">{{data.ACCTCODE}}&nbsp;&nbsp;&nbsp;&nbsp;{{data.ACCTNAME}}</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td  width=\"100%\">\n                                    <table BORDER=1 RULES=ROWS FRAME=BOX class=\"tabledata\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n                                        <thead>\n                                            <tr style=\"font-family:Arial;font-size:9pt;font-weight:bold;\">\n                                                <td style=\"width:50px;\">&nbsp;</td>\n                                                <td style=\"width:250px;\">&nbsp;</td>\n                                                <td align=\"left\" valign=\"top\" style=\"width:80px;\">Date</td>\n                                                <td align=\"right\" valign=\"top\" style=\"width:120px;\">Debit\n                                                </td>\n                                                <td align=\"right\" valign=\"top\" style=\"width:150px;\">Credit\n                                                </td>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let data1 of table3\" style=\"font-family:Arial;font-size:8pt;\">\n                                                <ng-container *ngIf=\"data.ACCTCODE == data1.TACCTCODE\">\n                                                    <td align=\"left\" valign=\"top\">&nbsp;{{data1.TTYPE}}</td>\n                                                    <td align=\"left\" valign=\"top\" style=\"font-weight: bold;\" (click)=\"invoiceprint(data1.TCODE,data1.TTYPE)\"><b>{{data1.TCODE}}</b></td>\n                                                    <td align=\"left\" valign=\"top\">{{data1.TDATE}}</td>\n                                                    <td align=\"right\" valign=\"top\">{{data1.TDRAMT}}</td>\n                                                    <td align=\"right\" valign=\"top\">{{data1.TCRAMT}}</td>\n                                                </ng-container>\n                                            </tr>                                        \n                                                <tr style=\"font-family:Arial;font-size:8pt;font-weight:bold\">                             \n                                                <td align=\"left\" valign=\"top\" colspan=\"3\" style=\"width: 380px;\">&nbsp;{{data.REMARKS}}</td>\n                                                <td align=\"right\" valign=\"top\" >{{data.PAIDAMT}}</td>\n                                                <td align=\"right\" valign=\"top\">{{data.RECOVERYAMT}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </td>\n                            </tr>\n                         \n                </td>\n            </tr>\n        </tbody>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td height=\"100\">\n            <table cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n                <tbody>\n                    <tr>\n                        <td align=\"left\" width=\"5%\" colspan=\"1\" rowspan=\"1\">\n                        </td>\n                        <td align=\"left\" width=\"20%\">\n                            <span class=\"rptlblHeader\">Paid --> </span>&nbsp;\n                            <span class=\"rptlblHeader\">{{table4.GRAND_PAIDAMT}}</span>\n                        </td>\n                        <td align=\"left\" width=\"25%\" colspan=\"1\" rowspan=\"1\">\n                            <span class=\"rptlblHeader\">Recovered --> </span>\n                            <span class=\"rptlblHeader\">{{table4.GRAND_RECOVERYAMT}}</span>&nbsp;\n                        </td>\n                        <td align=\"left\" width=\"30%\" colspan=\"1\" rowspan=\"1\">\n                            <span class=\"rptlblHeader\">{{table4.GRAND_DIFFAMT}}\n                                {{table4.GRAND_REMARKS}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <table style=\"border-top: black 1px solid;\" cellspacing=\"1\" cellpadding=\"1\" width=\"100%\" border=\"0\">\n\n                <tbody>\n                    <tr>\n                        <td align=\"left\" width=\"5%\" colspan=\"1\" rowspan=\"1\">\n                        </td>\n                        <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"15%\">\n                            <span id=\"Label16\" class=\"rptlblHeader\">Company </span>&nbsp;\n                        </td>\n                        <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"15%\">\n                            <span id=\"Label14\" class=\"rptlblHeader\">Paid </span>&nbsp;\n                        </td>\n                        <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"15%\" colspan=\"1\" rowspan=\"1\">\n                            <span id=\"Label17\" class=\"rptlblHeader\">Recovered </span>\n                        </td>\n                        <td style=\"border-bottom: black 1px solid\" align=\"left\" width=\"20%\" colspan=\"1\" rowspan=\"1\">\n                            <span id=\"Label20\" class=\"rptlblHeader\">Remarks </span>\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let data2 of table5\">\n                        <td align=\"left\" width=\"5%\" colspan=\"1\" rowspan=\"1\">\n\n                        </td>\n                        <td align=\"left\" width=\"15%\">\n                            <span id=\"lblMPCLF\" class=\"rptlblHeader\">{{data2.ACCTCODE}}</span>&nbsp;\n                        </td>\n                        <td align=\"left\" width=\"15%\">\n                            <span id=\"lblTotDRAmtMPCLF\" class=\"rptlblHeader\">{{data2.GRAND_PAIDAMT}}</span>\n                        </td>\n                        <td align=\"left\" width=\"15%\" colspan=\"1\" rowspan=\"1\">\n                            <span id=\"lblTotCRAmtMPCLF\" class=\"rptlblHeader\">{{data2.GRAND_RECOVERYAMT}}</span>&nbsp;\n                        </td>\n                        <td align=\"left\" width=\"25%\" colspan=\"1\" rowspan=\"1\">\n                            <span id=\"lblGrandTotMPCLF\" class=\"rptlblHeader\">{{data2.GRAND_DIFFAMT}}\n                                &nbsp;&nbsp;{{data2.GRAND_REMARKS}}\n                            </span>\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let data3 of table6\">\n                        <td align=\"left\" width=\"5%\" colspan=\"1\" rowspan=\"1\">\n\n                        </td>\n                        <td align=\"left\" width=\"15%\">\n                            <span id=\"lblMPCLF\" class=\"rptlblHeader\">{{data3.ACCTCODE}}</span>&nbsp;\n                        </td>\n                        <td align=\"left\" width=\"15%\">\n                            <span id=\"lblTotDRAmtMPCLF\" class=\"rptlblHeader\">{{data3.GRAND_PAIDAMT}}</span>\n                        </td>\n                        <td align=\"left\" width=\"15%\" colspan=\"1\" rowspan=\"1\">\n                            <span id=\"lblTotCRAmtMPCLF\" class=\"rptlblHeader\">{{data3.GRAND_RECOVERYAMT}}</span>&nbsp;\n                        </td>\n                        <td align=\"left\" width=\"25%\" colspan=\"1\" rowspan=\"1\">\n                            <span id=\"lblGrandTotMPCLF\" class=\"rptlblHeader\">{{data3.GRAND_DIFFAMT}}\n                                &nbsp;&nbsp;{{data3.GRAND_REMARKS}}\n                            </span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    <tr>\n        <td style=\"border-top: black 1px solid; height: 25px\" bordercolor=\"#000070\" align=\"center\" height=\"25\">\n        </td>\n    </tr>\n    </tbody>\n    </table>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-12\">\n            <input type=\"button\" class=\"btn btn-md btn-primary\" value=\"Print\" (click)=\"PrintElem()\" />\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/srpi-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Account/srpi-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-sm-new bgwhite\">\r\n    <tr>\r\n      <td class=\"col-form-span-heading \" colspan=\"4\">\r\n        General Details\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td><span class=\"col-form-span-label\"><b>Purchase No </b> </span></td>\r\n      <td> <span class=\"col-form-span-label\">{{PUR_CODE}}</span> </td>\r\n      <td><span class=\"col-form-span-label\"><b>Purchase Date </b> </span></td>\r\n      <td><span class=\"col-form-span-label\">{{PUR_DATE}}</span> </td>\r\n    </tr>\r\n    <tr>\r\n        <td><span class=\"col-form-span-label\"><b>Narration </b> </span></td>\r\n        <td colspan=\"3\"> <span class=\"col-form-span-label\">{{REMARKS}}</span> </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"col-form-span-heading  \" colspan=\"4\">\r\n        Staff Details\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n        <td><span class=\"col-form-span-label\"><b>Staff Name </b> </span></td>\r\n        <td> <span class=\"col-form-span-label\">{{PUR_SUPPLIERNAME}}</span> </td>\r\n        \r\n    </tr>\r\n    <tr>\r\n        <td class=\"col-form-span-heading \" colspan=\"2\">\r\n            Passing Details \r\n        </td>\r\n        <td  colspan=\"2\"\r\n          class=\"col-form-span-label\"> \r\n          <span class=\"col-form-span-label\" ><b>IsPassed</b>  </span>  \r\n          <input type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"IsPassed\">\r\n      </td>\r\n      </tr>\r\n      <tr>\r\n        <td><span class=\"col-form-span-label\"><b>Passed By </b> </span></td>\r\n        <td> <span class=\"col-form-span-label\">{{PASSEDBYPERSON}}</span> </td>\r\n        <td><span class=\"col-form-span-label\"><b>Passed Amount </b> </span></td>\r\n        <td><span class=\"col-form-span-label\">{{PASSEDAMOUNT}}</span> </td>\r\n      </tr>\r\n      <tr>\r\n          <td><span class=\"col-form-span-label\"><b>Invoice Amount </b> </span></td>\r\n          <td> <span class=\"col-form-span-label\">{{SUPINVAMT}}</span> </td>\r\n          <td><span class=\"col-form-span-label\"><b>Voucher No. </b> </span></td>\r\n          <td> <span class=\"col-form-span-label\">{{VOUCHERNO}}</span> </td>\r\n      </tr>\r\n     \r\n    <tr>\r\n      <td class=\"col-form-span p-1\" colspan=\"4\">\r\n      </td>\r\n    </tr>\r\n    <td class=\"col-form-span-heading \" colspan=\"4\">\r\n        Account Details \r\n    </td>\r\n    <tr *ngIf=\" flag != 'Y' &&  flag == 'EDIT'\">\r\n      <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n      <td colspan=\"3\">\r\n        <span class=\"col-form-span-label\">{{ACCTNAME}}</span>  \r\n          <!-- <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n          [(ngModel)]=\"AccountName\" [disabled]=\"disable_Accountname\" class=\"custom \" placeholder=\"--Select--\">\r\n      </ng-select> -->\r\n\r\n      </td>\r\n  </tr>\r\n  <tr *ngIf=\" flag == 'VIEW'\">\r\n      <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n      <td colspan=\"3\">\r\n        <span class=\"col-form-span-label\">{{ItemName}}</span>\r\n          <!-- <ng-select [items]=\"Allitemlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n          class=\"custom \" [disabled]=\"disable_Item\" placeholder=\"--Select--\">\r\n      </ng-select> -->\r\n      </td>\r\n  </tr>\r\n  <tr *ngIf=\" flag == 'EDIT'\">\r\n      <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n      <td> <span class=\"col-form-span-label\">{{Amount}}</span> </td>\r\n      <!-- <td >  <input [(ngModel)]=\"Amount\"  [disabled]=\"disable_Amount\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n      <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n      <!-- <td >  <input [(ngModel)]=\"Deduction\"  type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n      <td> <span class=\"col-form-span-label\">{{Deduction}}</span> </td>\r\n  </tr>\r\n  <tr *ngIf=\" flag == 'EDIT'\">\r\n      <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n      <td> <span class=\"col-form-span-label\">{{JobNo}}</span> </td>\r\n      <!-- <td >  <input [(ngModel)]=\"JobNo\" type=\"text\" [disabled]=\"disable_JobNo\"  class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n      <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\r\n      <td >  <input [(ngModel)]=\"actpassedamount\"  type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n  </tr>\r\n  <tr *ngIf=\" flag != 'VIEW'\">\r\n      <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n      <td colspan=\"3\">\r\n          <input [(ngModel)]=\"ActNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n      </td>\r\n  </tr>\r\n\r\n  <tr *ngIf=\" flag == 'EDIT'\">\r\n      <td colspan=\"4\"  class=\"centerlabel\">\r\n          <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n          <!-- <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button> -->\r\n      </td>\r\n  </tr>\r\n  <tr>\r\n\r\n  </tr>\r\n  <tr >\r\n\r\n      <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n      <td *ngIf=\" flag == 'EDIT'\" colspan=\"3\">  <input [(ngModel)]=\"NetAmt\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n      <td *ngIf=\" flag == 'VIEW'\" colspan=\"3\"> <span class=\"col-form-span-label\">{{NetAmt}}</span> </td>\r\n</tr>\r\n\r\n<tr>\r\n  <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n  <td *ngIf=\" flag == 'EDIT'\">  <input [(ngModel)]=\"NetAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n  <td *ngIf=\" flag == 'VIEW'\"> <span class=\"col-form-span-label\">{{NetAmount}}</span> </td>\r\n  <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n  <td *ngIf=\" flag == 'EDIT'\">  <input [(ngModel)]=\"Netdeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n  <td *ngIf=\" flag == 'VIEW'\"> <span class=\"col-form-span-label\">{{Netdeduction}}</span> </td>\r\n</tr>\r\n<!-- <tr>\r\n  <td colspan=\"4\"  class=\"centerlabel\">\r\n      <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n     \r\n  </td>\r\n</tr> -->\r\n    <tr>\r\n      <td colspan=\"4\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite \">\r\n          <thead>\r\n            <tr class=\"col-form-span-heading \">\r\n              <th  *ngIf=\" flag == 'EDIT'\" class=\"col-form-span-label\" ></th>\r\n              <th class=\"col-form-span-label\">Account Name</th>\r\n              <th class=\"col-form-span-label\">Amount</th>\r\n              <th class=\"col-form-span-label\">Deduction</th>\r\n              <th class=\"col-form-span-label\">Pass Amt</th>\r\n              <th class=\"col-form-span-label\">Item</th>\r\n              <th class=\"col-form-span-label\">Job No</th>\r\n              <th class=\"col-form-span-label\">Narration </th>\r\n             \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let data of datatabl_1\">\r\n              <td *ngIf=\" flag == 'EDIT'\" class=\"centerlabel\">\r\n                <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(data.ID)\" ></i>\r\n                &nbsp;\r\n                <i class=\"fa fa-trash\" (click)=\"deletechildrecd(data.ID,obj.ACC_PURCHASEDTLS_ID)\"></i>\r\n            </td>\r\n            <td><span class=\"col-form-span-label\"  [innerHtml]=\"data.ACCOUNT_NAME\"> </span></td>\r\n              <td class=\"col-form-span-label\">{{data.AMOUNT}}</td>\r\n              <td class=\"col-form-span-label\">{{data.DEDUCTION}}</td>\r\n              <td class=\"col-form-span-label\">{{data.SRPIPASSAMOUNT}}</td>\r\n              <td class=\"col-form-span-label\">{{data.ITEM}}</td>\r\n              <td class=\"col-form-span-label\">{{data.JOBNO}}</td>\r\n              <td class=\"col-form-span-label\">{{data.NARRATION}}</td>\r\n            </tr>\r\n        \r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    <tr  >\r\n      <td colspan=\"4\"  class=\"centerlabel\">\r\n          <button class=\"btn btn-sm btn-success\" *ngIf=\" flag == 'EDIT'\" type=\"submit\" (click)=\"SaveVerify()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n          <button *ngIf=\" flag == 'EDIT'\" class=\"btn btn-sm btn-danger\" (click)=\"abortModal()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n            aria-hidden=\"true\"></i> Abort</span></button>\r\n            \r\n      </td>\r\n  </tr>\r\n    \r\n  </table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Quotation/quotation-print.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Quotation/quotation-print.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"watermark-layer\"></div> -->\r\n<div class=\" quotation-container  quotation-wrapper\" id=\"printable-area\">\r\n    <!-- <img src=\"../../../assets/img/Untitled-1.png\" class=\"watermark-print\" /> -->\r\n     <div class=\"content \">\r\n<header class=\"row header-section align-items-center\">\r\n \r\n    <div class=\"col-xs-6 quote-details-block\">\r\n        <h6 class=\"quotation-title\">Quote #{{quotno}}</h6>\r\n        \r\n        <p class=\"meta-item client-company\">\r\n            <i class=\"fas fa-link custom-icon\"></i>\r\n            <span class=\"label\">{{cmpname}}</span> \r\n        </p>\r\n        \r\n        <p class=\"meta-item date-info\">\r\n            <i class=\"fa fa-calendar me-1\"></i> &nbsp; &nbsp; \r\n            <span class=\"label\">\r\n               Issued {{quotdate }} \r\n                (Valid {{quotdate }} - {{validupto  }})\r\n            </span>\r\n        </p>\r\n          <p class=\"contact-line\">\r\n           <i class=\"fa fa-user me-1\"></i>\r\n            <span class=\"contact-person\">{{contactperson}}</span>\r\n\r\n           <span class=\"small-box-separator\"></span> \r\n<span class=\"contact-email\"> <i class=\"fa fa-envelope text-primary me-2\"></i> <a href=\"mailto:Info@ manilal.com\">Info@ manilal.com</a> </span>\r\n            <!-- <span class=\"contact-email\"> <i class=\"fa fa-envelope text-primary me-2\"></i> <a href=\"mailto:{{ clientemail }}\">{{clientemail}}</a> </span> -->\r\n        </p>\r\n\r\n    </div>\r\n    \r\n  <div class=\"col-6 text-right text-end\">\r\n    <img [src]=\"cmpimage\" alt=\"Company Logo\" class=\"logo\">\r\n  </div>\r\n\r\n    </header>\r\n     \r\n   <section class=\"row shipment-summary-section\">\r\n  <div class=\"col-12\">\r\n    <div class=\"summary-bar\">\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Incoterms:</span>\r\n        <span class=\"value\">{{ incoterm }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Direction:</span>\r\n        <span class=\"value\">{{ shipmenttype }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Shipment Type:</span>\r\n        <span class=\"value\">{{ containerloadtype }}</span>\r\n      </div>\r\n      <!-- <div class=\"summary-item load-details\">\r\n        <span class=\"label\">Load:</span>\r\n        <span class=\"value\">{{ loadtype }}</span>\r\n      </div> -->\r\n    </div>\r\n      <div class=\"summary-bar\">\r\n            <!-- <div class=\"summary-item\">\r\n                <span class=\"label\">Pickup:</span>\r\n                <span class=\"value\">{{pickup}}</span>\r\n            </div> -->\r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Pol:</span>\r\n                <span class=\"value\">{{pol}}</span>\r\n            </div>\r\n            <div class=\"summary-item\">\r\n                <span *ngIf=\"shipmode=='SEA'\" class=\"label\">Ocean:</span>\r\n                 <span *ngIf=\"shipmode=='AIR'\" class=\"label\">Air:</span>\r\n                <span class=\"value\">{{ocean}}</span>\r\n            </div>\r\n            <div class=\"summary-item \">\r\n                <span class=\"label\">Pod:</span>\r\n                  <span class=\"value\">{{pod}}</span>\r\n            </div>\r\n            <!-- <div class=\"summary-item load-details\">\r\n                <span class=\"label\">Pod:</span>\r\n                  <span class=\"value\">{{pod}}</span>\r\n            </div> -->\r\n        </div>\r\n  </div>\r\n</section>\r\n\r\n <!-- <hr class=\"header-divider\"> -->\r\n <!-- <section class=\"row shipment-summary-section\">\r\n    <div class=\"col-12\">\r\n        <div class=\"summary-bar\">\r\n          \r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Pol:</span>\r\n                <span class=\"value\">{{pol}}</span>\r\n            </div>\r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Ocean:</span>\r\n                <span class=\"value\">{{ocean}}</span>\r\n            </div>\r\n            <div class=\"summary-item \">\r\n                <span class=\"label\">Pod:</span>\r\n                  <span class=\"value\">{{pod}}</span>\r\n            </div>\r\n         \r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n  <hr class=\"header-divider\">\r\n <!--  <div class=\"clearfix\"></div> -->\r\n\r\n  <section class=\"item-details-section\">\r\n    <table class=\"table item-table\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 55%;\" class=\"label\">Fee</th>\r\n          <th style=\"width: 10%;\" class=\"label text-right\">Units</th>\r\n          <th style=\"width: 15%;\" class=\"label text-right\">Unit Price</th>\r\n          <th style=\"width: 15%;\" class=\"label text-right\">Total Price</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of quotdtltable; let i = index\" \r\n    [ngClass]=\"{\r\n        'charge-group-divider': item.CHARGENAME === 'TOTAL',  'charge-header-row': item.CHARGENAME === 'ORIGIN CHARGES' || item.CHARGENAME === 'DESTINATION CHARGES' \r\n    }\">\r\n          <!-- <td>{{ i + 1 }}</td> -->\r\n          <td>\r\n            <!-- <span \r\n            class=\"label\">{{ item.CHARGENAME }} <span  *ngIf=\"item.CHARGENAME !== 'ORIGIN CHARGES' && item.CHARGENAME !== 'DESTINATION CHARGES'\" class=\"small-box-separator\"></span>\r\n            </span> <span class=\"labelseperator\"> {{item.UNITNAME}} </span>  -->\r\n             <span \r\n        class=\"label\"\r\n        [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME === 'ORIGIN CHARGES' || item.CHARGENAME === 'DESTINATION CHARGES' || item.CHARGENAME === 'TOTAL'\r\n        }\"\r\n    >\r\n        {{ item.CHARGENAME }} \r\n        \r\n        <span \r\n            *ngIf=\"item.CHARGENAME !== 'ORIGIN CHARGES' && item.CHARGENAME !== 'DESTINATION CHARGES' && item.CHARGENAME !== 'TOTAL'\" \r\n            class=\"small-box-separator\"\r\n        ></span>\r\n    </span> \r\n    \r\n    <span class=\"labelseperator\" > {{item.UNITNAME}} </span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\">{{ item.UNIT }}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\"\r\n             [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME  === 'TOTAL'\r\n        }\"\r\n            >{{ item.UNITPRICE  }}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\"\r\n             [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME  === 'TOTAL'\r\n        }\"\r\n            >{{ item.TOTPRICE}}</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </section>\r\n</div>\r\n \r\n  <!-- <footer class=\"footer-section\">\r\n      <p class=\"text-center small\">Thank you for your business.</p>\r\n      <p class=\"text-center small\">\r\n          For any questions, please contact {{ company.email }}\r\n      </p>\r\n      <div class=\"signature-line\">Authorized Signature: _________________________</div>\r\n  </footer> -->\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-end no-print\">\r\n  <button class=\"btn btn-primary\" (click)=\"printDocument()\">\r\n    <i class=\"fa fa-print\"></i> Print Quotation\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Quotation/quote-air-print.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Quotation/quote-air-print.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"watermark-layer\"></div> -->\r\n<div class=\"  quotation-wrapper\" id=\"printable-area\">\r\n      <img src=\"../../../assets/img/Untitled-1.png\" alt=\"Watermark\" class=\"watermark-print\" />\r\n     <div class=\"quotation-container \">\r\n\r\n     <header class=\"row header-section align-items-center\">\r\n\r\n  <div class=\"col-8 quote-details-block\">\r\n\r\n    <h6 class=\"quotation-title\">Quote #{{quotno}}</h6>\r\n\r\n    <p class=\"meta-item client-company d-flex align-items-center\">\r\n      <img src=\"../../../assets/icons/circle.png\" alt=\"\" class=\"meta-icon\" />  \r\n      <span class=\"label ms-1\">{{cmpname}}</span>\r\n    </p>\r\n\r\n    <p class=\"meta-item date-info d-flex align-items-center\">\r\n      <i class=\"fa fa-calendar meta-icon\"></i>\r\n      <span class=\"label ms-1\">\r\n         Issued {{quotdate}} (Valid {{quotdate}} - {{validupto}})\r\n      </span>\r\n    </p>\r\n\r\n    <p class=\"contact-line d-flex align-items-center\">\r\n      <i class=\"fa fa-user meta-icon\"></i>\r\n      <span class=\"contact-email ms-1\">\r\n        <i class=\"fa fa-envelope text-primary me-1\"></i>\r\n        <a href=\"mailto:Info@manilal.com\">Info@manilal.com</a>\r\n      </span>\r\n    </p>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-4 text-end\">\r\n    <img [src]=\"cmpimage\" alt=\"Company Logo\" class=\"logo\">\r\n  </div>\r\n\r\n</header>\r\n\r\n   <section class=\"row item-details-section\">\r\n  <div class=\"col-12 p-0\">\r\n    <div class=\"summary-bar\">\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Incoterms:</span>\r\n        <span class=\"value\">{{ incoterm }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Direction:</span>\r\n        <span class=\"value\">{{ shipmenttype}}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Shipment Type:</span>\r\n        <span class=\"value\">{{shipmode }}</span>\r\n      </div>\r\n   \r\n    </div>\r\n      <div class=\"summary-bar\">\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Volume</span>\r\n        <span class=\"value\">{{ volume }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Weight:</span>\r\n        <span class=\"value\">{{ weight }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Ch Wt:</span>\r\n        <span class=\"value\">{{ chblwt }}</span>\r\n      </div>\r\n   \r\n    </div>\r\n      <div class=\"summary-bar\">\r\n          \r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Pol:</span>\r\n                <span class=\"value\">{{pol}}</span>\r\n            </div>\r\n            <div class=\"summary-item\">\r\n              <!-- <img *ngIf=\"shipmode=='SEA'\" src=\"assets/icons/ship-icon.svg\" alt=\"Ship Mode\" class=\"ship-icon-image\"> -->\r\n                <i *ngIf=\"shipmode=='SEA'\" class=\"fa fa-ship\"></i> &nbsp; \r\n                <span *ngIf=\"shipmode=='SEA'\" class=\"label\">Ocean:</span>\r\n                 <span *ngIf=\"shipmode=='AIR'\" class=\"fa fa-air\">Air:</span>\r\n                <span class=\"value\">{{ocean}}</span>\r\n            </div>\r\n            <div class=\"summary-item \">\r\n                <span class=\"label\">Pod:</span>\r\n                  <span class=\"value\">{{pod}}</span>\r\n            </div>\r\n           \r\n        </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n  <section class=\"item-details-section\">\r\n    <table class=\"table item-table\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 55%;\" class=\"label\">Fee</th>\r\n          <th style=\"width: 10%;\" class=\"label text-right\">Units</th>\r\n          <th style=\"width: 15%;\" class=\"label text-right\">Unit Price</th>\r\n          <th style=\"width: 15%;\" class=\"label text-right\">Total Price</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr\r\n  *ngFor=\"let item of quotdtltable; let i = index\"\r\n  [ngClass]=\"{\r\n    'charge-group-divider': item.CHARGENAME === 'TOTAL',\r\n    'charge-header-row': item.CHARGETYPEHEADER === 'ORIGIN' || item.CHARGETYPEHEADER === 'DESTINATION' || item.CHARGETYPEHEADER === 'PICKUP' || item.CHARGETYPEHEADER === 'OCEANFREIGHT' || item.CHARGETYPEHEADER === 'DELIVERY' \r\n  }\"\r\n>   \r\n          <!-- <td>{{ i + 1 }}</td> -->\r\n          <td>\r\n          \r\n             <span \r\n        class=\"label\"\r\n        [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME === 'ORIGIN CHARGES' || item.CHARGENAME === 'DESTINATION CHARGES' || item.CHARGENAME === 'TOTAL'\r\n        }\"\r\n    >\r\n        {{ item.CHARGENAME }} \r\n        \r\n        <span \r\n            *ngIf=\"item.CHARGENAME !== 'ORIGIN CHARGES' && item.CHARGENAME !== 'DESTINATION CHARGES' && item.CHARGENAME !== 'TOTAL'\" \r\n            class=\"small-box-separator\"\r\n        ></span>\r\n    </span> \r\n    \r\n    <span class=\"labelseperator\" > {{item.UNITNAME}} </span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\">{{ item.UNIT }}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\"\r\n             [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME  === 'TOTAL'\r\n        }\"\r\n            >{{ item.UNITPRICE  }}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\"\r\n             [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME  === 'TOTAL'\r\n        }\"\r\n            >{{ item.TOTPRICE}}</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </section>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-end no-print\">\r\n  <button class=\"btn btn-primary\" (click)=\"printDocument()\">\r\n    <i class=\"fa fa-print\"></i> Print Quotation\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Quotation/quote-sea-print.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/Quotation/quote-sea-print.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"watermark-layer\"></div> -->\r\n<div class=\"  quotation-wrapper\" id=\"printable-area\">\r\n      <img src=\"../../../assets/img/Untitled-1.png\" alt=\"Watermark\" class=\"watermark-print\" />\r\n     <div class=\"quotation-container \">\r\n<!-- <header class=\"row header-section align-items-center\">\r\n \r\n    <div class=\"col-8 quote-details-block\">\r\n        <h6 class=\"quotation-title\">Quote #{{quotno}}</h6>\r\n        \r\n        <p class=\"meta-item client-company\">\r\n            <img src=\"../../../assets/icons/circle.png\" alt=\"\"  />  &nbsp; \r\n            <span class=\"label\">{{cmpname}}</span> \r\n        </p>\r\n        \r\n        <p class=\"meta-item date-info\">\r\n            <i class=\"fa fa-calendar me-1\"></i> &nbsp; &nbsp; \r\n            <span class=\"label\">\r\n               Issued {{quotdate }} \r\n                (Valid {{quotdate }} - {{validupto  }})\r\n            </span>\r\n        </p>\r\n          <p class=\"contact-line\">\r\n           <i class=\"fa fa-user me-1\"></i> &nbsp; &nbsp; \r\n              <span class=\"contact-email\"> <i class=\"fa fa-envelope text-primary me-2\"></i> <a href=\"mailto:Info@ manilal.com\">Info@ manilal.com</a> </span>\r\n           \r\n        </p>\r\n\r\n    </div>\r\n    \r\n  <div class=\"col-4 text-right text-end\">\r\n    <img [src]=\"cmpimage\" alt=\"Company Logo\" class=\"logo\">\r\n  </div>\r\n\r\n    </header> -->\r\n     <header class=\"row header-section align-items-center\">\r\n\r\n  <div class=\"col-8 quote-details-block\">\r\n\r\n    <h6 class=\"quotation-title\">Quote #{{quotno}}</h6>\r\n\r\n    <p class=\"meta-item client-company d-flex align-items-center\">\r\n      <img src=\"../../../assets/icons/circle.png\" alt=\"\" class=\"meta-icon\" />  \r\n      <span class=\"label ms-1\">{{cmpname}}</span>\r\n    </p>\r\n\r\n    <p class=\"meta-item date-info d-flex align-items-center\">\r\n      <i class=\"fa fa-calendar meta-icon\"></i>\r\n      <span class=\"label ms-1\">\r\n         Issued {{quotdate}} (Valid {{quotdate}} - {{validupto}})\r\n      </span>\r\n    </p>\r\n\r\n    <p class=\"contact-line d-flex align-items-center\">\r\n      <i class=\"fa fa-user meta-icon\"></i>\r\n      <span class=\"contact-email ms-1\">\r\n        <i class=\"fa fa-envelope text-primary me-1\"></i>\r\n        <a href=\"mailto:Info@manilal.com\">Info@manilal.com</a>\r\n      </span>\r\n    </p>\r\n\r\n  </div>\r\n<div class=\"col-4 d-flex justify-content-end align-items-center\" style=\"padding-right: 25px;\">\r\n  <img [src]=\"cmpimage\" alt=\"Company Logo\" class=\"logo\">\r\n</div>\r\n  <!-- <div class=\"col-4 text-end pe-3\">\r\n    <img [src]=\"cmpimage\" alt=\"Company Logo\" class=\"logo\">\r\n  </div> -->\r\n\r\n</header>\r\n\r\n   <section class=\"row item-details-section\">\r\n     <div class=\"col-12 p-0\">\r\n    <div class=\"summary-bar\">\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Incoterms:</span>\r\n        <span class=\"value\">{{ incoterm }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Direction:</span>\r\n        <span class=\"value\">{{ shipmenttype }}</span>\r\n      </div>\r\n      <div class=\"summary-item\">\r\n        <span class=\"label\">Shipment Type:</span>\r\n        <span class=\"value\">{{ containerloadtype }}</span>\r\n      </div>\r\n      <!-- <div class=\"summary-item load-details\">\r\n        <span class=\"label\">Load:</span>\r\n        <span class=\"value\">{{ loadtype }}</span>\r\n      </div> -->\r\n    </div>\r\n      <div class=\"summary-bar\">\r\n           \r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Pol:</span>\r\n                <span class=\"value\">{{pol}}</span>\r\n            </div>\r\n            <div class=\"summary-item\">\r\n              <!-- <img *ngIf=\"shipmode=='SEA'\" src=\"assets/icons/ship-icon.svg\" alt=\"Ship Mode\" class=\"ship-icon-image\"> -->\r\n                <i *ngIf=\"shipmode=='SEA'\" class=\"fa fa-ship\"></i> &nbsp; \r\n                <span *ngIf=\"shipmode=='SEA'\" class=\"label\">Ocean:</span>\r\n                 <span *ngIf=\"shipmode=='AIR'\" class=\"label\">Air:</span>\r\n                <span class=\"value\">{{ocean}}</span>\r\n            </div>\r\n            <div class=\"summary-item \">\r\n                <span class=\"label\">Pod:</span>\r\n                  <span class=\"value\">{{pod}}</span>\r\n            </div>\r\n        \r\n        </div>\r\n  </div>\r\n   </section>\r\n\r\n <!-- <hr class=\"header-divider\"> -->\r\n <!-- <section class=\"row shipment-summary-section\">\r\n    <div class=\"col-12\">\r\n        <div class=\"summary-bar\">\r\n          \r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Pol:</span>\r\n                <span class=\"value\">{{pol}}</span>\r\n            </div>\r\n            <div class=\"summary-item\">\r\n                <span class=\"label\">Ocean:</span>\r\n                <span class=\"value\">{{ocean}}</span>\r\n            </div>\r\n            <div class=\"summary-item \">\r\n                <span class=\"label\">Pod:</span>\r\n                  <span class=\"value\">{{pod}}</span>\r\n            </div>\r\n         \r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n  <!-- <hr class=\"header-divider\"> -->\r\n <!--  <div class=\"clearfix\"></div> -->\r\n\r\n  <section class=\"item-details-section\">\r\n    <table class=\"table item-table\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 55%;\" class=\"label\">Fee</th>\r\n          <th style=\"width: 10%;\" class=\"label text-right\">Units</th>\r\n          <th style=\"width: 15%;\" class=\"label text-right\">Unit Price</th>\r\n          <th style=\"width: 15%;\" class=\"label text-right\">Total Price</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      <!-- <tr *ngFor=\"let item of quotdtltable; let i = index\" \r\n    [ngClass]=\"{\r\n        'charge-group-divider': item.CHARGENAME === 'TOTAL',  'charge-header-row': item.CHARGENAME === 'ORIGIN CHARGES' || item.CHARGENAME === 'DESTINATION CHARGES' \r\n    }\"> -->\r\n     <tr\r\n  *ngFor=\"let item of quotdtltable; let i = index\"\r\n  [ngClass]=\"{\r\n    'charge-group-divider': item.CHARGENAME === 'TOTAL',\r\n    'charge-header-row': item.CHARGETYPEHEADER === 'ORIGIN' || item.CHARGETYPEHEADER === 'DESTINATION' || item.CHARGETYPEHEADER === 'PICKUP' || item.CHARGETYPEHEADER === 'OCEANFREIGHT' || item.CHARGETYPEHEADER === 'DELIVERY' \r\n  }\"\r\n>     \r\n          <td>\r\n            <!-- <span \r\n            class=\"label\">{{ item.CHARGENAME }} <span  *ngIf=\"item.CHARGENAME !== 'ORIGIN CHARGES' && item.CHARGENAME !== 'DESTINATION CHARGES'\" class=\"small-box-separator\"></span>\r\n            </span> <span class=\"labelseperator\"> {{item.UNITNAME}} </span>  -->\r\n             <span \r\n        class=\"label\"\r\n        [ngClass]=\"{\r\n            'labelheader': item.CHARGETYPEHEADER === 'ORIGIN' || item.CHARGETYPEHEADER === 'DESTINATION' || item.CHARGETYPEHEADER === 'TOTAL' || item.CHARGETYPEHEADER === 'PICKUP' || item.CHARGETYPEHEADER === 'OCEANFREIGHT' || item.CHARGETYPEHEADER === 'DELIVERY'\r\n        }\"\r\n    >\r\n        {{ item.CHARGENAME }} \r\n        \r\n        <span \r\n            *ngIf=\"item.CHARGENAME !== 'ORIGIN CHARGES' && item.CHARGENAME !== 'DESTINATION CHARGES' && item.CHARGENAME !== 'TOTAL' && item.CHARGENAME !== 'PICKUP' && item.CHARGENAME !== 'OCEAN FREIGHT' && item.CHARGENAME !== 'DELIVERY'\" \r\n            class=\"small-box-separator\"\r\n        ></span>\r\n    </span> \r\n    \r\n    <span class=\"labelseperator\" > {{item.UNITNAME}} </span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\">{{ item.UNIT }}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\"\r\n             [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME  === 'TOTAL'\r\n        }\"\r\n            >{{ item.UNITPRICE  }}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <span class=\"label\"\r\n             [ngClass]=\"{\r\n            'labelheader': item.CHARGENAME  === 'TOTAL'\r\n        }\"\r\n            >{{ item.TOTPRICE}}</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </section>\r\n</div>\r\n \r\n  <!-- <footer class=\"footer-section\">\r\n      <p class=\"text-center small\">Thank you for your business.</p>\r\n      <p class=\"text-center small\">\r\n          For any questions, please contact {{ company.email }}\r\n      </p>\r\n      <div class=\"signature-line\">Authorized Signature: _________________________</div>\r\n  </footer> -->\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-end no-print\">\r\n  <button class=\"btn btn-primary\" (click)=\"printDocument()\">\r\n    <i class=\"fa fa-print\"></i> Print Quotation\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/export/invoice-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/export/invoice-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n    <tbody>\r\n       <tr>\r\n          <td class=\"col-form-span-heading centerlabel\" colspan=\"6\">EXPORTER'S INVOICE DETAIL</td>\r\n       </tr>\r\n       <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">EXPORT NO </span> </td>\r\n          <td colspan=\"5\"><span class=\"col-form-span-label\">{{exptno}}</span></td>\r\n       </tr>\r\n       <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Gri No </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_GRINO}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Gri Date </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_GRINO}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Exporter Inv no.<span class=\"col-form-span-error\">*</span></span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_INVNO}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Inv Date<span class=\"col-form-span-error\">*</span></span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_INVDATE}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Currency Name </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_CURNAME}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\"></span></td>\r\n          <td colspan=\"2\"></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Currency Rate  </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_CURRATE}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">INR Rate </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_CURINRRATE}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Incoterm </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_INVTYPE}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Invoice Amount</span></td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_INVAMT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Frieght Charges </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_FREIGHT}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Insurance Amount </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_INSAMT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Discount </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.INVDISCOUNT}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Packing & Others </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_PACKING}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Commission </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.INVCOMMISSION}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Commission Paid to </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.COMMNAME}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Address1 </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.COMMADDR1}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Address2 </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.COMMADDR2}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Nature of Payment </span> </td>\r\n          <td colspan=\"5\"><span class=\"col-form-span-label\">{{invData?.NATUREOFPAYMENT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Other Deduction </span> </td>\r\n          <td colspan=\"5\"><span class=\"col-form-span-label\">{{invData?.INVDEDUCTAMT}}</span></td>\r\n       </tr>\r\n     </tbody>\r\n </table>\r\n <div class=\"row xscroll\" *ngIf=\"itcData.length > 0\">\r\n     <table class=\"table table-bordered table-striped table-sm-new\">\r\n         <thead>\r\n             <tr class=\"col-form-span-heading\">\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">ITC Code</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">FOB INR</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Drawback Sub Sr.No</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Unit1</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Type1</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Group Code</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Appendix of public notice</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Condition No.</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Unit2</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Type2</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">% of Drawback</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Rate per Unit</span></th>\r\n                 <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Description</span></th>\r\n                 </tr>\r\n         </thead>\r\n         <tbody>\r\n             <tr *ngFor=\"let obj of itcData\">\r\n                 <td><span class=\"col-form-span-label\">{{obj.ITCCODE}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.FOBINR}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.DBKSUBSRNO}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.UNIT}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.TPE}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.EXP_ITCGROUPCODE}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.APPENDIXNO}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.CONDITIONNO}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.UNITA}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.TPEA}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.DBKPERCENT}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.RATEPERUNIT}}</span></td>\r\n                 <td><span class=\"col-form-span-label\">{{obj.DESCRIPTION}}</span></td>\r\n                 </tr>\r\n         <tbody>\r\n     </table>\r\n   </div>\r\n <table class=\"table table-bordered table-striped table-sm-new\">\r\n    <tbody>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">FOB INR </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_FOB}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Market Value </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_MKTVALUE}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Freight </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_FRT}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Type of Shipping Bill </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.EXPT_SHIPBILLTYPE}}</span></td>\r\n       </tr>\r\n       <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Value Addition % </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBVALUE}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Amount </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBAMOUNT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\" colspan=\"6\">\r\n             <span class=\"col-form-span-label\">\r\n                 <input type=\"radio\" name=\"InvShipType\" [checked]=\"invData?.SBBOOKTYPE == 'D'\" value=\"Provisional\" [disabled]=\"true\"/>Provisional \r\n             </span> \r\n         </td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Receipt No. </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBPRORECPTNO}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Date </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBPRORECPTDT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\" colspan=\"6\"><span class=\"col-form-span-label\"><input type=\"radio\" name=\"InvShipType\" [checked]=\"invData?.SBBOOKTYPE == 'D'\" value=\"DEEC\" [disabled]=\"true\"/>DEEC Book  </span> </td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Book No. </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBDEECBOOKNO}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Date </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBDEECBOOKDT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Advance Licence No  </span> </td>\r\n          <td colspan=\"5\"><span class=\"col-form-span-label\">{{invData?.SBDEECLICNO}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\" colspan=\"6\"><span class=\"col-form-span-label\"><input type=\"radio\" name=\"InvShipType\" [checked]=\"invData?.SBBOOKTYPE == 'E'\" value=\"Book\" [disabled]=\"true\"/>Exp/Imp Book  </span> </td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Passbook No. </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBEXPBOOKNO}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Date </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBEXPBOOKDT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Exempted Material Value </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBEXEMPT1}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">{{invData?.SBEXEMPT2}}</span></td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBEXEMPT3}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Group Code </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBGROUPCODE}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">SION No. </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBSIONNO}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Duty % </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBDUTY}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Duty Amount </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBDUTYAMT}}</span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Cess % </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.SBCESS}}</span></td>\r\n          <td class=\"width150\"></td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\"></span></td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\" colspan=\"6\"><span class=\"col-form-span-label\"><input type=\"checkbox\" class=\"col-form-span-label\"  name=\"checkbox1\" [checked]=\"invData?.IMPLABLE == 'Y'\" [disabled]=\"true\" />Import Lable Used </span> </td>\r\n       </tr>\r\n        <tr>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Bill of Entry No. </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.BILLENTRYNO}}</span></td>\r\n          <td class=\"width150\"><span class=\"col-form-span-label\">Date </span> </td>\r\n          <td colspan=\"2\"><span class=\"col-form-span-label\">{{invData?.BILLENTRYDT}}</span></td>\r\n       </tr>\r\n       <!-- <tr class=\"col-form-span-heading\">\r\n          <th><span class=\"col-form-span-label\"></span> </th>\r\n          <th><span class=\"col-form-span-label\">AR4 Form No </span></th>\r\n          <th><span class=\"col-form-span-label\">Date</span> </th>\r\n          <th><span class=\"col-form-span-label\">Commission Rate </span></th>\r\n          <th><span class=\"col-form-span-label\">Division </span> </th>\r\n          <th><span class=\"col-form-span-label\">Rate </span></th>\r\n       </tr>\r\n       <tr>\r\n          <td><span class=\"col-form-span-label\">AR4 Form 1 </span> </td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMNO}}</span></td>\r\n          <td class=\"width100\"><span class=\"col-form-span-label\">{{invData?.ARFORMDT}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.COMMISSIONRATE}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.DIVISION}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.RANGE}}</span></td>\r\n       </tr>\r\n       <tr>\r\n          <td><span class=\"col-form-span-label\">AR4 Form 2 </span> </td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMNO1}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMDT1}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.COMMISSIONRATE1}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.DIVISION1}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.RANGE1}}</span></td>\r\n       </tr>\r\n       <tr>\r\n          <td><span class=\"col-form-span-label\">AR4 Form 3 </span> </td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMNO2}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMDT2}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.COMMISSIONRATE2}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.DIVISION2}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.RANGE2}}</span></td>\r\n       </tr>\r\n       <tr>\r\n          <td><span class=\"col-form-span-label\">AR4 Form 4 </span> </td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMNO3}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.ARFORMDT3}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.COMMISSIONRATE3}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.DIVISION3}}</span></td>\r\n          <td><span class=\"col-form-span-label\">{{invData?.RANGE3}}</span></td>\r\n       </tr> -->\r\n     </tbody>\r\n </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/export/order-size-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/windowpoppage/export/order-size-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <strong>ORDER SIZE DETAILS</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr class=\"trbg\">\r\n                <td colspan=\"4\" style=\"text-align:center;\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Genaral Details</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Expt No</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.EXPTNO}}</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Consignee Name</b>\r\n                    </span>\r\n                </td>\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.CONSIGNEE}}</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Order No</b>\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.ORDERNO}}</span>\r\n                </td>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Style No</b>\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.STYLENO}}</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">Total Pcs</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.TOT_PCS}}</span>\r\n                </td>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">Total Pkgs</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.TOT_PKGS }}</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">Total Gr. Wt.</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.TOT_GRWT}}</span>\r\n                </td>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">Total Net Wt.</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.TOT_NETWT}}</span>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"width120\">\r\n                    <span class=\"col-form-span-label\">Total Volume</span>\r\n                </td>\r\n                <td colspan=\"3\">\r\n                    <span class=\"col-form-span-label\">{{OrderSizeList[0]?.TOT_VOL}}</span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trbg\">\r\n                <td colspan=\"4\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Size Details</b>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <thead>\r\n                <tr class=\"title-head formheading\">\r\n                    <th class=\"width100\" style=\"text-align:right\">Size</th>\r\n                    <th>Pcs</th>\r\n                    <th>Pkgs</th>\r\n                    <th>Gr Wt.</th>\r\n                    <th>Net Wt.</th>\r\n                    <th>Volume</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let obj of OrderSizeList\">\r\n                    <td class=\"width100\" style=\"text-align:right\">\r\n                        <span class=\"col-form-span-label\"><b>{{obj.CODE_SIZE}}=></b></span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"obj.PCS\" [maxlength]=\"15\" class=\"form-control\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"obj.PKGS\" [maxlength]=\"15\" class=\"form-control\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"obj.GRWT\" [maxlength]=\"15\" class=\"form-control\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"obj.NETWT\" [maxlength]=\"15\" class=\"form-control\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"obj.VOL\" [maxlength]=\"15\" class=\"form-control\" />\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr class=\"trbg centerlabel\">\r\n                <td colspan=\"4\">\r\n                    <button type=\"button\" name=\"searchButton\" class=\"btn btn-sm btn-primary\" (click)=\"submit();\" #submitButton>\r\n                        <span class=\"col-form-span-label\">\r\n                            <i class=\"fa fa-send-o\"></i>&nbsp;Submit</span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/windowpoppage/Account/Admin-Quotation-Print.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/windowpoppage/Account/Admin-Quotation-Print.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuotationPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationPrintComponent", function() { return QuotationPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuotationPrintComponent = /** @class */ (function () {
    function QuotationPrintComponent(_dataService, _route, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.QuotationNo = "";
        this.CMP_IMAGE = "";
        this.GSTNO = "";
        this.PANNO = "";
        this.QuotDate = "";
        this.Narration = "";
        this.ClientName = "";
        this.NARRATION1 = "";
        this.TOTAMOUNT = "";
    }
    QuotationPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.QuotationNo = params["QuotNo"];
        });
        this.print();
    };
    QuotationPrintComponent.prototype.print = function () {
        var _this = this;
        var jsonmaster = {
            QuotNo: this.QuotationNo,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        // console.log(jsonmaster)
        //console.log(jsonmaster)
        this._dataService.getData("Admin/Mst_Quotation_Print", jsonmaster)
            .subscribe(function (res) {
            //   console.log(res)
            _this.Narration = res.Table1[0].NARRATION;
            _this.CMP_IMAGE = "assets/img/" + res.Table[0].CMP_IMAGE;
            _this.GSTNO = res.Table[0].GSTIN;
            _this.PANNO = res.Table[0].PANNO;
            _this.datatable1 = res.Table1;
            _this.chargestable = res.Table2;
            _this.TOTAMOUNT = res.Table3[0].TOTAMOUNT;
            _this._loaderService.display(false);
            if (_this.Narration != "") {
                var html = _this.Narration.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
                _this.NARRATION1 = html;
            }
        });
    };
    QuotationPrintComponent.prototype.PrintElem = function () {
    };
    QuotationPrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    QuotationPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-print',
            template: __webpack_require__(/*! raw-loader!./Admin-Quotation-Print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/Admin-Quotation-Print.component.html"),
            styles: ["\n    p .MsoNormal{\n      padding:0rem !important;\n      margin:0rem !important\n    }\n    .Rpt_Label_content {\n      font-size: 8pt;\n      color: black;\n      font-family: Verdana,Arial;\n    }\n    .Rpt_Label {\n      font-weight: bold;\n      font-size: 8pt;\n      color: black;\n      font-family: Verdana,Arial;\n  }\n  .Rpt_CodeDate {\n    font-weight: bold;\n    font-size: 9pt;\n    color: black;\n    font-family: Verdana,Arial;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], QuotationPrintComponent);
    return QuotationPrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/CashBook-BR-print.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/windowpoppage/Account/CashBook-BR-print.component.ts ***!
  \**********************************************************************/
/*! exports provided: CashBookBRPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashBookBRPrintComponent", function() { return CashBookBRPrintComponent; });
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







var CashBookBRPrintComponent = /** @class */ (function () {
    function CashBookBRPrintComponent(_dataService, _toasterService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.table3 = [];
        this.table2 = [];
        this.table1 = [];
        this.table = [];
    }
    CashBookBRPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            //  console.log(params)
            _this.PageType = params["Type"];
            _this.EntryNo = params["BrNo"];
            _this.getData();
        });
    };
    CashBookBRPrintComponent.prototype.getData = function () {
        var _this = this;
        var API_Pass = "";
        var _jsonData;
        if (this.PageType == "CC") {
            _jsonData = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.EntryNo,
                FROMDATE: "",
                TODATE: "",
                CLIENT: "",
                CHEQUENO: "",
                OURBANK: "",
                JOBNO: "",
                AMOUNT: "",
                STATUS: this.PageType,
                MODE: "PRINT",
                DISPLAYTYPE: "ENTRYNO",
                YEARID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
                Cmpid: this._loginService.getLogin()[0].CMPID
            };
            API_Pass = "Accounts/ACC_ReqBP_SEARCH";
        }
        else {
            _jsonData = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.EntryNo,
                FROMDATE: "",
                TODATE: "",
                CLIENT: "",
                CHEQUENO: "",
                OURBANK: "",
                JOBNO: "",
                AMOUNT: "",
                STATUS: this.PageType,
                MODE: "PRINT",
                DISPLAYTYPE: "ENTRYNO",
                YEARID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
            };
            API_Pass = "Accounts/ACC_CASHBOOK_SEARCH";
        }
        this._dataService.getData(API_Pass, _jsonData)
            .subscribe(function (data) {
            if (_this.PageType == "CC") {
                _this.table3 = data.Table3;
                _this.table2 = data.Table2;
                _this.table1 = data.Table1;
                _this.table = data.Table;
                _this.CMP_IMAGE = "assets/img/" + _this.table3[0].CMP_IMAGE;
                _this.total_words = _this._dataService.ConvertNumberToWordsNew(parseFloat(data.Table2[0].NETTOT).toFixed(2));
                _this.labeltext = "Bank Payment";
            }
            else {
                _this.table3 = data.Table3;
                _this.table2 = data.Table2;
                _this.table1 = data.Table1;
                _this.table = data.Table;
                _this.CMP_IMAGE = "assets/img/" + _this.table3[0].CMP_IMAGE;
                _this.total_words = _this._dataService.ConvertNumberToWordsNew(parseFloat(data.Table2[0].NETTOT).toFixed(2));
                if (_this.table[0].STATUS == "BP") {
                    _this.labeltext = "Bank Payment";
                }
                else if (_this.table[0].STATUS == "BR") {
                    _this.labeltext = "Bank Receipt";
                }
                else if (_this.table[0].STATUS == "CP") {
                    _this.labeltext = "CASH Payment";
                }
                else if (_this.table[0].STATUS == "CR") {
                    _this.labeltext = "CASH Receipt";
                }
                else if (_this.table[0].STATUS == "CE") {
                    _this.labeltext = "CASH Expense";
                }
            }
        });
    };
    CashBookBRPrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - CASH BOOK-Bank Receipt Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - CASH BOOK-Bank Receipt Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    CashBookBRPrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    CashBookBRPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cash-book-br-print',
            template: __webpack_require__(/*! raw-loader!./CashBook-BR-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/CashBook-BR-print.component.html"),
            styles: ["\n  .dgHeader {\n    border-right: black 1px solid;\n    table-layout: auto;\n    border-top: black 1px solid;\n    font-weight: bold;\n    font-size: 8pt;\n    border-left: black 1px solid;\n    color: black;\n    border-bottom: black 1px solid;\n    font-family: Verdana;\n    border-collapse: separate;\n}\n.dgItem {\n    border-right: black 1px solid;\n    border-top: black 1px solid;\n    font-size: 8pt;\n    border-left: black 1px solid;\n    color: black;\n    border-bottom: black 1px solid;\n    font-family: Verdana;\n}\n.Rpt_CodeDate {\n  font-weight: bold;\n  font-size: 9pt;\n  color: black;\n  font-family: Verdana,Arial;\n}\n.LabelNormal {\n  font-size: 8pt;\n  font-family: Verdana, Arial;\n  color: #003388;\n  cursor: default;\n  border-width: 0px;\n}\n.Rpt_Label_content{\n  font-size: 9pt;\n  font-family: Verdana, Arial;\n  color: black;\n}\n    "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], CashBookBRPrintComponent);
    return CashBookBRPrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/JV-print.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/windowpoppage/Account/JV-print.component.ts ***!
  \*************************************************************/
/*! exports provided: JVPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JVPrintComponent", function() { return JVPrintComponent; });
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







var JVPrintComponent = /** @class */ (function () {
    function JVPrintComponent(_dataService, _toasterService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.table3 = [];
        this.table2 = [];
        this.tbllist = [];
        this.table1 = [];
        this.table = [];
        this.totalcredit = 0;
        this.totaldebit = 0;
        this.header = "";
        this.amtinwords = "";
        this.CMP_IMAGE = "";
        this.getTotalDebit = function () {
            this.totaldebit = 0;
            // for (var i = 0; i < this.table1.length; i++) {
            //   this.totaldebit  =  this.totaldebit  + parseFloat(this.table1[i].JV_DEBIT);
            // }
            for (var _i = 0, _a = this.table1; _i < _a.length; _i++) {
                var p = _a[_i];
                this.totaldebit += parseFloat(p.JV_DEBIT);
            }
            return this.totaldebit.toFixed(2);
        };
        this.getTotalCredit = function () {
            var total = 0;
            for (var _i = 0, _a = this.table1; _i < _a.length; _i++) {
                var p = _a[_i];
                total += parseFloat(p.JV_CREDIT);
            }
            return total.toFixed(2);
        };
    }
    JVPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            //  console.log(params)
            _this.Type = params["Type"];
            _this.EntryNo = params["entryno"];
            _this.getData();
            if (_this.Type == 'JV') {
                _this.header = "Journal Voucher";
            }
            else if (_this.Type == 'JVREQ') {
                _this.header = "Journal Voucher Request";
            }
        });
    };
    JVPrintComponent.prototype.getData = function () {
        var _this = this;
        var _jsonData = {
            JVCode: this.EntryNo,
            Type: this.Type,
        };
        this._dataService.getData("Accounts/ACC_JV_PRINT", _jsonData)
            .subscribe(function (data) {
            //   console.log(data)
            _this.table3 = data.Table;
            _this.table1 = data.Table1;
            _this.tbllist = data.Table1;
            _this.CMP_IMAGE = "assets/img/" + _this.table3[0].cmp_image;
            //this.amtinwords=this._dataService.convertNumberToWords(data.Table[0]. )
        });
    };
    JVPrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - Journal Voucher Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Journal Voucher Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    JVPrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    JVPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-JV-print',
            template: __webpack_require__(/*! raw-loader!./JV-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/JV-print.component.html"),
            styles: ["\n    .dgHeader {\n      border-right: black 1px solid;\n      table-layout: auto;\n      border-top: black 1px solid;\n      font-weight: bold;\n      font-size: 8pt;\n      border-left: black 1px solid;\n      color: black;\n      border-bottom: black 1px solid;\n      font-family: Verdana;\n      border-collapse: separate;\n  }\n  .dgItem {\n      border-right: black 1px solid;\n      border-top: black 1px solid;\n      font-size: 8pt;\n      border-left: black 1px solid;\n      color: black;\n      border-bottom: black 1px solid;\n      font-family: Verdana;\n  }\n  .Rpt_CodeDate {\n    font-weight: bold;\n    font-size: 9pt;\n    color: black;\n    font-family: Verdana,Arial;\n  }\n  .LabelNormal {\n    font-size: 8pt;\n    font-family: Verdana, Arial;\n    color: #003388;\n    cursor: default;\n    border-width: 0px;\n  }\n  .Rpt_Label_content{\n    font-size: 9pt;\n    font-family: Verdana, Arial;\n    color: black;\n  }\n      "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], JVPrintComponent);
    return JVPrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/actstatement-advance-Print.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/windowpoppage/Account/actstatement-advance-Print.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ActstatAdvancePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActstatAdvancePrintComponent", function() { return ActstatAdvancePrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActstatAdvancePrintComponent = /** @class */ (function () {
    function ActstatAdvancePrintComponent(_dataService, _toasterService, _route, _loginService, loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._route = _route;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.display = 'none';
        this.table3 = [];
        this.table1 = [];
        this.table2 = [];
        this.clientAdd = [];
    }
    ActstatAdvancePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clientName = params["clientnm"];
            _this.fromdate = params["fromdate"];
            _this.todate = params["todate"];
            _this.STATUS = params["status"];
            _this.clientcode = params["clientcd"];
            _this.strheader = "Account Statement For Advance From " + _this.fromdate + " To " + _this.todate;
            _this.GetCompanydtls();
            _this.ShowOutstanding();
            _this.ViewAdvanceData();
        });
    };
    ActstatAdvancePrintComponent.prototype.ngOnChanges = function () {
        //this.GetCompanydtls();
        this.ViewAdvanceData();
    };
    ActstatAdvancePrintComponent.prototype.GetCompanydtls = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsoncmp)
            .subscribe(function (data) {
            _this.table3 = data.Table;
            _this.loaderService.display(false);
        });
    };
    ActstatAdvancePrintComponent.prototype.ViewAdvanceData = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonadv = {
            ClCode: this.clientcode,
            FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.fromdate,
            ENDDATE: this.todate
        };
        var jsonadvall = {
            ClCode: this.clientcode,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.fromdate,
            ENDDATE: this.todate
        };
        if (this.STATUS == "All") {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_GetAll", jsonadvall)
                .subscribe(function (data) {
                _this.AdvanceTable = data.Table;
                _this.loaderService.display(false);
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                .subscribe(function (data) {
                _this.AdvanceTable = data.Table;
                _this.loaderService.display(false);
            });
        }
    };
    ActstatAdvancePrintComponent.prototype.ShowOutstanding = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            ClientCode: this.clientcode,
            FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.fromdate,
            ENDDATE: this.todate,
        };
        var jsonmasterall = {
            ClCode: this.clientcode,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            STARTDATE: this.fromdate,
            ENDDATE: this.todate,
        };
        if (this.STATUS == "All") {
            this._dataService.getData("Accounts/Acc_Rpt_ClientOutstandingList_GetAll", jsonmasterall)
                .subscribe(function (data) {
                _this.outstandTable = data.Table;
                _this.table1 = data.Table1;
                _this.table2 = data.Table2;
                _this.clientAdd = data.Table3;
                if (data.Table1[0].OPBAL > 0) {
                    _this.OpDrBal = data.Table1[0].OPBAL + " Dr";
                }
                else {
                    _this.OpCrBal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : Math.abs(data.Table1[0].OPBAL) + " Cr";
                }
                if (data.Table1[0].CLBAL > 0) {
                    _this.CLDrBal = data.Table1[0].CLBAL + " Dr";
                }
                else {
                    _this.CLCrBal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                }
                if (data.Table1[0].TLDR > 0) {
                    _this.currTotalDr = data.Table1[0].TLDR;
                }
                else {
                    _this.currTotalDr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR);
                }
                if (data.Table1[0].TLCR > 0) {
                    _this.currTotalcr = data.Table1[0].TLCR;
                }
                else {
                    _this.currTotalcr = (data.Table1[0].TLCR == "0.00") ? "" : Math.abs(data.Table1[0].TLCR);
                }
                if (data.Table2[0].ADVTOTALDR > 0) {
                    _this.AdvDrAmt = data.Table2[0].ADVTOTALDR;
                }
                else {
                    _this.AdvDrAmt = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALDR);
                }
                if (data.Table2[0].ADVTOTALCR > 0) {
                    _this.AdvCrAmt = data.Table2[0].ADVTOTALCR;
                }
                else {
                    _this.AdvCrAmt = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
                }
                _this.loaderService.display(false);
            });
        }
        else {
            this._dataService.getData("Accounts/Acc_Rpt_ClientOutstandingList_Get", jsonmaster)
                .subscribe(function (data) {
                _this.outstandTable = data.Table;
                _this.table1 = data.Table1;
                _this.table2 = data.Table2;
                _this.loaderService.display(false);
            });
        }
    };
    ActstatAdvancePrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - Advance Statement Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Advance Statement Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    ActstatAdvancePrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    ActstatAdvancePrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actstatement-advance-print',
            template: __webpack_require__(/*! raw-loader!./actstatement-advance-Print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/actstatement-advance-Print.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], ActstatAdvancePrintComponent);
    return ActstatAdvancePrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/advancefromclientPopUp.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/windowpoppage/Account/advancefromclientPopUp.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdvanceFromClientPopUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceFromClientPopUp", function() { return AdvanceFromClientPopUp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdvanceFromClientPopUp = /** @class */ (function () {
    function AdvanceFromClientPopUp(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.ExporterList = [];
        this.ClAdvList = [];
        this.exceldata_list = [];
        this.dataForExcel = [];
        this.excelHeaders = [];
        this.displayType = 'SEARCH';
        this.Type = 'JOBNO';
        this.All = "";
    }
    AdvanceFromClientPopUp.prototype.ngOnInit = function () {
        var _this = this;
        this._loaderService.display(true);
        this.verifyPermission('183', 'View');
        this._activatedRoute.params.subscribe(function (params) {
            _this.JobNo = params["ADVJOBNO"];
        });
        this.GetClientAdvanceData();
    };
    AdvanceFromClientPopUp.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    AdvanceFromClientPopUp.prototype.GetClientAdvanceData = function () {
        var _this = this;
        this.dataForExcel = [];
        if (this.Type == "All") {
            this.All = "T";
        }
        else {
            this.All = "";
        }
        var jsonData = {
            Jobno: (this.JobNo == undefined) ? "" : this.JobNo,
            ClientCode: "",
            All: this.All,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/Acc_Rpt_Receivable_AdvFromClients", jsonData)
            .subscribe(function (data) {
            _this.displayType = "LIST";
            _this.ClAdvList = data.Table;
            _this.ClAdvList.forEach(function (x) { delete x.PK_ID; });
            _this.ClAdvList.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
                _this._loaderService.display(false);
            });
        });
    };
    AdvanceFromClientPopUp.prototype.OpenPrint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print ')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-Print/' + No.replace("'", "") + '/', "PI Print", toolbar);
            }
            if (Type == "JV") {
                window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
            }
            if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-Print/' + No.replace("'", "") + '/', "CN Print", toolbar);
            }
            if (Type == "II") {
                //  window.open('./#/popup/Account-Invoice-Print/' + No.replace("'", "") + '/' , "INV Print", toolbar);   
                var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                    "huhpnk=" + this._loginService.getLogin()[0].GUID
                    + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                    + "&Userid=" + this._loginService.getLogin()[0].CMPID
                    + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                    + "&InvoiceNo=" + No.replace("'", "")
                    + "&DisplayMode=" + "0"
                    + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
                window.open(URL_1, "Invoice Print", toolbar);
                return false;
            }
            if (Type == "SI") {
                return false;
            }
            if (Type == "BI") {
                return false;
            }
            else
                // {  window.open('./#/popup/Account-BP-Print/' + No.replace("'", "") + '/' + Type + '/', "BR Print", toolbar);  }
                window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/', "CASH BOOK - Bank Payment", toolbar);
        }
        else {
            return false;
        }
    };
    AdvanceFromClientPopUp.prototype.OpenJobPrint = function (jobno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + jobno.replace("'", "") + '/', "JOB Print", toolbar);
    };
    // ExportAdvfrmClnt()
    // { 
    //   this.excelHeaders= ["Client Name","Job No","Type","Voucher Code","Voucher Date","Dr Amt","Cr Amt"];
    //     let reportData = {
    //         data: this.dataForExcel,
    //         headers:this.excelHeaders,
    //         pagetype: "AdvFrmClient",
    //         title:"Advance From Client"
    //     }
    //   this.exportser.exportExceltry(reportData, "AdvanceFromClient");     
    // }
    AdvanceFromClientPopUp.prototype.ResetAll = function () {
        this.JobNo = "";
        this.Exporter = "";
        this.Type = "JOBNO";
    };
    AdvanceFromClientPopUp.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
    ]; };
    AdvanceFromClientPopUp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advancefromClient',
            template: __webpack_require__(/*! raw-loader!./advancefromclientPopUp.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/advancefromclientPopUp.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], AdvanceFromClientPopUp);
    return AdvanceFromClientPopUp;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/consign-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/windowpoppage/Account/consign-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConsigneeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeViewComponent", function() { return ConsigneeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConsigneeViewComponent = /** @class */ (function () {
    function ConsigneeViewComponent(_dataService, _loginService, route, _toasterService, _LoaderService
    //private _redirectToEdoc: RedirectPage
    ) {
        var _this = this;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this.route = route;
        this._toasterService = _toasterService;
        this._LoaderService = _LoaderService;
        this.ExptNo = '';
        this.edocView = 0;
        this.containerData = [];
        this.deliveryData = [];
        this.loadTrans = {};
        this.remark = {};
        this.links = 'M';
        this.containerno = null;
        this.vessel = null;
        this.route.params.subscribe(function (params) {
            _this.ExptNo = (params["expt_no"]) ? params["expt_no"] : null;
            _this.setViewData(_this.ExptNo);
        });
    }
    ConsigneeViewComponent.prototype.ngOnChanges = function () {
    };
    ConsigneeViewComponent.prototype.setViewData = function (exptno) {
        var _this = this;
        this._LoaderService.display(true);
        var _jsonData = {
            exptno: exptno,
            cmpid: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Export/PageConsignmentView", _jsonData)
            .subscribe(function (data) {
            _this.viewData = data;
            _this.containerData = data.Table1;
            if (_this._loginService.getLogin()[0].ROLETYPE == "SA") {
                _this.edocView = 1;
            }
            else {
                if (data.Table6.length > 0) {
                    _this.edocView = data.Table6[0].VIEWFORM;
                }
                else {
                    _this.edocView = 0;
                }
            }
            _this.deliveryData = data.Table6;
            if (_this.viewData.Table2.length > 0) {
                _this.loadTrans = {
                    EXPT_LOAD_DATE: _this.viewData.Table2[0].LOADDT,
                    EXPT_LOAD1_DATE: _this.viewData.Table2[0].PORT1LOADDT,
                    EXPT_LOAD2_DATE: _this.viewData.Table2[0].PORT2LOADDT,
                    EXPT_TRANSPORT1: _this.viewData.Table2[0].TRANSPORT1,
                    EXPT_TRANSPORT2: _this.viewData.Table2[0].TRANSPORT2
                };
            }
            _this._LoaderService.display(false);
        }, function (error) { _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.STATUSTEXT); _this._LoaderService.display(false); }, function () { });
    };
    ConsigneeViewComponent.prototype.openEdoc = function () {
        // this._redirectToEdoc.redirectToNewTab("EDOC");        
        var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].edocumentIp + "edocument/View.html#/AutoRedirect?eformid=258&huhpnk=" + this._loginService.getLogin()[0].CMP_USERENCCODE + "&JOBNO=" + this.ExptNo + "&cmpcode=" + this._loginService.getLogin()[0].CMPCODE + "&citycode=" + this._loginService.getLogin()[0].CITYCODE + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].edocumentIp;
        var theTop = (screen.height / 2) - (510 / 2);
        var theLeft = (screen.width / 2) - (760 / 2);
        var toolbar = 'resizable=yes,scrollbars=no,width=740,height=490,status=no,left=' + theLeft + ',top=' + theTop;
        var NewWin = window.open(URL, "EDOC_VIEW", toolbar);
        NewWin.focus();
    };
    ConsigneeViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    ConsigneeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-view',
            template: __webpack_require__(/*! raw-loader!./consign-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/consign-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
            //private _redirectToEdoc: RedirectPage
        ])
    ], ConsigneeViewComponent);
    return ConsigneeViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/creditnote-print.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/windowpoppage/Account/creditnote-print.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreditnotePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditnotePrintComponent", function() { return CreditnotePrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreditnotePrintComponent = /** @class */ (function () {
    function CreditnotePrintComponent(_dataService, _route, _loginService, loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.sum = 0;
        this.CRT_jobno = "";
        this.CRT_pkgs = "";
        this.CRT_grwt = "";
        this.CRT_NO = "";
        this.CRT_DATE = "";
        this.CLIENTNAME = "";
        this.BILLTO_CRTADDR = "";
        this.CRT_BILLTYPE = "";
        this.CUR_NAME = "";
        this.NARRATION = "";
        this.CRT_GOODS = "";
        this.CRT_WT = "";
        this.CRT_VOL = "";
        this.CRT_TAX = "";
        this.PAYBLEBYDT = "";
        this.CRT_NOOFPCS = "";
        this.CRT_PKGS = "";
        this.CRT_HAWBDT = "";
        this.CRT_HAWBNO = "";
        this.CRT_CARRIER = "";
        this.CRT_ADVANCE = "";
        this.CRT_CLIENTREF = "";
        this.CRT_CURRATE = "";
        this.NARRATION1 = "";
        this.EXP_ADD1 = "";
        this.EXP_ADD2 = "";
        this.EXP_ADD3 = "";
        this.EXP_CITY = "";
        this.EXP_COUNTRY = "";
        this.EXP_NAME = "";
        this.EXP_PINCODE = "";
        this.showModal = false;
        this.printmodal = false;
        this.inrtype = "";
        this.crt_number = "";
        this.CMP_IMAGE = "";
    }
    CreditnotePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.crt_number = params["CrtNo"];
            _this.checkcrt(params["CrtNo"]);
        });
    };
    CreditnotePrintComponent.prototype.checkcrt = function (crtno) {
        var _this = this;
        var jsonmaster = {
            invno: crtno,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        console.log(jsonmaster);
        this._dataService.getData("Accounts/ACC_creditNote_Chk_Inv_NONINR", jsonmaster)
            .subscribe(function (res) {
            console.log(res);
            if (res.Table[0].AUTHORISEDTOPRINT == "0") {
                alert('You can not Print Invoice No. ' + _this.crt_number + '\n  Because Authorisation is Pending !!');
            }
            else if (res.Table[0].AUTHORISEDTOPRINT == "1") {
                _this.showModal = true;
                _this.inrtype = res.Table[0].PRINT1;
            }
        });
    };
    CreditnotePrintComponent.prototype.currencyType = function (d) {
        this.inrtype = d;
        this.showModal = false;
        this.printmodal = true;
        this.printdata();
    };
    CreditnotePrintComponent.prototype.printdata = function () {
        var _this = this;
        // console.log(this.inrtype)
        var jsonmaster = {
            CNno: this.crt_number,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            type: "Print",
            finstartdt: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            fin_enddt: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CN_view", jsonmaster)
            .subscribe(function (data) {
            //  console.log(data)
            _this.CRT_NO = data.Table[0].CRT_NO;
            _this.CRT_DATE = data.Table[0].CRT_DATE;
            _this.CLIENTNAME = data.Table[0].CLIENTNAME;
            _this.BILLTO_CRTADDR = data.Table[0].BILLTO_CRTADDR;
            _this.CRT_BILLTYPE = data.Table[0].CRT_BILLTYPE;
            _this.CUR_NAME = data.Table[0].CUR_NAME;
            _this.CRT_CLIENTREF = data.Table[0].CRT_CLIENTREF;
            _this.NARRATION = data.Table[0].NARRATION;
            _this.CRT_GOODS = data.Table[0].CRT_GOODS;
            _this.CRT_CURRATE = data.Table[0].CRT_CURRATE;
            _this.CRT_WT = data.Table[0].CRT_WT;
            _this.CRT_VOL = data.Table[0].CRT_VOL;
            _this.CRT_TAX = data.Table[0].CRT_TAX;
            _this.PAYBLEBYDT = data.Table[0].PAYBLEBYDT;
            _this.CRT_NOOFPCS = data.Table[0].CRT_NOOFPCS;
            _this.CRT_PKGS = data.Table[0].CRT_PKGS;
            _this.CRT_HAWBDT = data.Table[0].CRT_HAWBDT;
            _this.CRT_HAWBNO = data.Table[0].CRT_HAWBNO;
            _this.CRT_CARRIER = data.Table[0].CRT_CARRIER;
            _this.CRT_ADVANCE = data.Table[0].CRT_ADVANCE;
            _this.NARRATION1 = data.Table[0].NARRATION;
            _this.EXP_ADD1 = data.Table[0].EXP_ADD1;
            _this.EXP_ADD2 = data.Table[0].EXP_ADD2;
            _this.EXP_ADD3 = data.Table[0].EXP_ADD3;
            _this.EXP_CITY = data.Table[0].EXP_CITY;
            _this.EXP_COUNTRY = data.Table[0].EXP_COUNTRY;
            _this.EXP_NAME = data.Table[0].EXP_NAME;
            _this.EXP_PINCODE = data.Table[0].EXP_PINCODE;
            _this.desptchtable = data.Table3;
            _this.chargestable = data.Table2;
            _this.datatable4 = data.Table4;
            _this.datatable6 = data.Table6;
            _this.datattable5 = data.Table5;
            _this.gsttable = data.Table8;
            _this.dattable9 = data.Table9;
            _this.dattable10 = data.Table10;
            _this.CMP_IMAGE = "assets/img/" + _this.datattable5[0].CMP_IMAGE;
            _this.loaderService.display(false);
            // if (this.NARRATION1 != "") {
            //   var html = this.NARRATION1.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
            //   this.NARRATION1 = html
            // }
            if (_this.inrtype == "0") {
                // for (var i = 0; i < data.Table7.length; i++) {
                //   this.sum = this.sum + data.Table7[i].INV_INRAMT
                // }
                _this.sum = (_this.sum + _this.datatable6[0].TAXAMT_INR + _this.datatable6[0].NONTAXABLEAMT_INR) + _this.dattable10[0].ROUNDVALUE;
                console.log(_this.sum);
                _this.sum_words = _this._dataService.toWords(data.Table4[0].TOTINRAMT);
                _this.balance = _this.sum - _this.INV_ADVANCE1;
            }
            else if (_this.inrtype == "1") {
                // for (var i = 0; i < data.Table7.length; i++) {
                //   this.sum = this.sum + data.Table7[i].INV_AMOUNT
                // }
                _this.sum = (_this.sum + _this.datatable6[0].TAXAMT + _this.datatable6[0].NONTAXABLEAMT) + _this.dattable10[0].ROUNDVALUE;
                console.log(_this.sum);
                _this.sum_words = _this._dataService.toWords(data.Table4[0].TOTAMT);
                _this.balance = _this.sum - _this.INV_ADVANCE1;
            }
        });
    };
    CreditnotePrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - Invoice Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Invoice Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    CreditnotePrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }
    ]; };
    CreditnotePrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creditnote-print',
            template: __webpack_require__(/*! raw-loader!./creditnote-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/creditnote-print.component.html"),
            styles: ["\n  p .MsoNormal{\n    padding:0rem !important;\n    margin:0rem !important\n  }\n  .Rpt_Label_content {\n    font-size: 8pt;\n    color: black;\n    font-family: Verdana,Arial;\n  }\n  .Rpt_Label {\n    font-weight: bold;\n    font-size: 8pt;\n    color: black;\n    font-family: Verdana,Arial;\n}\n.Rpt_CodeDate {\n  font-weight: bold;\n  font-size: 9pt;\n  color: black;\n  font-family: Verdana,Arial;\n}\n  "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], CreditnotePrintComponent);
    return CreditnotePrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/creditnote-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/windowpoppage/Account/creditnote-view.component.ts ***!
  \********************************************************************/
/*! exports provided: CreditnoteViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditnoteViewComponent", function() { return CreditnoteViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreditnoteViewComponent = /** @class */ (function () {
    function CreditnoteViewComponent(_dataService, _route, _loginService, loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.CRT_jobno = "";
        this.CRT_pkgs = "";
        this.CRT_grwt = "";
        this.CRT_NO = "";
        this.CRT_DATE = "";
        this.CLIENTNAME = "";
        this.BILLTO_CRTADDR = "";
        this.CRT_BILLTYPE = "";
        this.CUR_NAME = "";
        this.NARRATION = "";
        this.CRT_GOODS = "";
        this.CRT_WT = "";
        this.CRT_VOL = "";
        this.CRT_TAX = "";
        this.PAYBLEBYDT = "";
        this.CRT_NOOFPCS = "";
        this.CRT_PKGS = "";
        this.CRT_HAWBDT = "";
        this.CRT_HAWBNO = "";
        this.CRT_CARRIER = "";
        this.CRT_ADVANCE = "";
        this.CRT_CLIENTREF = "";
        this.CRT_CURRATE = "";
        this.SUPPLYTYPE = "";
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
    }
    CreditnoteViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.viewdata(params["CrtNo"]);
        });
    };
    CreditnoteViewComponent.prototype.viewdata = function (dataCRT) {
        var _this = this;
        var jsonmaster = {
            CNno: dataCRT,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            type: "View",
            finstartdt: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            fin_enddt: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CN_view", jsonmaster)
            .subscribe(function (data) {
            //console.log(data)
            _this.datatabl_1 = data.Table1;
            _this.datatabl_2 = data.Table2;
            _this.datatabl_3 = data.Table3;
            _this.datatabl_4 = data.Table4;
            _this.datatabl_5 = data.Table5;
            _this.datatabl_6 = data.Table6;
            _this.datatabl_7 = data.Table7;
            _this.datatabl_8 = data.Table8;
            _this.datatabl_9 = data.Table9;
            _this.datatabl_10 = data.Table10;
            _this.CRT_NO = data.Table[0].CRT_NO;
            _this.CRT_DATE = data.Table[0].CRT_DATE;
            _this.CLIENTNAME = data.Table[0].CLIENTNAME;
            _this.BILLTO_CRTADDR = data.Table[0].BILLTO_ADD;
            _this.CRT_BILLTYPE = data.Table[0].CRT_BILLTYPE;
            _this.CUR_NAME = data.Table[0].CUR_NAME;
            _this.CRT_CLIENTREF = data.Table[0].CRT_CLIENTREF;
            _this.NARRATION = data.Table[0].NARRATION;
            _this.CRT_GOODS = data.Table[0].CRT_GOODS;
            _this.CRT_CURRATE = data.Table[0].CRT_CURRATE;
            _this.CRT_WT = data.Table[0].CRT_WT;
            _this.CRT_VOL = data.Table[0].CRT_VOL;
            _this.CRT_TAX = data.Table[0].CRT_TAX;
            _this.PAYBLEBYDT = data.Table[0].PAYBLEBYDT;
            _this.CRT_NOOFPCS = data.Table[0].CRT_NOOFPCS;
            _this.CRT_PKGS = data.Table[0].CRT_PKGS;
            _this.CRT_HAWBDT = data.Table[0].CRT_HAWBDT;
            _this.CRT_HAWBNO = data.Table[0].CRT_HAWBNO;
            _this.CRT_CARRIER = data.Table[0].CRT_CARRIER;
            _this.CRT_ADVANCE = data.Table[0].CRT_ADVANCE;
            _this.SUPPLYTYPE = data.Table[0].SUPPLYTYPE;
        });
    };
    CreditnoteViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    CreditnoteViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creditnote-view',
            template: __webpack_require__(/*! raw-loader!./creditnote-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/creditnote-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], CreditnoteViewComponent);
    return CreditnoteViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/invoice-print.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/windowpoppage/Account/invoice-print.component.ts ***!
  \******************************************************************/
/*! exports provided: InvoicePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePrintComponent", function() { return InvoicePrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoicePrintComponent = /** @class */ (function () {
    function InvoicePrintComponent(_dataService, _route, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.sum = 0;
        this.NARRATION1 = "";
        this.INV_CARRIER1 = "";
        this.INV_GOODS1 = "";
        this.GSTIN1 = "";
        this.ESIC_REGD1 = "";
        this.INCOMETAXNO1 = "";
        this.CINNO_REG1 = "";
        this.PAYBLEBYDT1 = "";
        this.DOCTHROUGH1 = "";
        this.INV_CLIENTREF1 = "";
        this.INV_NO1 = "";
        this.INV_HAWBNO1 = "";
        this.INV_DATE1 = "";
        this.INV_HAWBDT1 = "";
        this.INV_JOBNO1 = "";
        this.EXP_INVADD11 = "";
        this.CITY_COUNTRY1 = "";
        this.EXP_INVADD2 = "";
        this.EXP_INVADD3 = "";
        this.EXP_INVCITY = "";
        this.EXP_INVPINCODE = "";
        this.EXP_NAME1 = "";
        this.CMPADDRESS1 = "";
        this.CMP_FULLNAME1 = "";
        this.CMP_IMAGE = "";
        this.table0 = [];
        this.inv_number = "";
        this.showModal = false;
        this.printmodal = false;
        this.inrtype = "";
        this.SUPPLYTYPE = "";
    }
    InvoicePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.inv_number = params["InvNo"];
            _this.chevkauthorize(params["InvNo"]);
        });
    };
    InvoicePrintComponent.prototype.chevkauthorize = function (invoiceno) {
        var _this = this;
        var jsonmaster = {
            invno: invoiceno,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_AUTHORISATION_CHECK", jsonmaster)
            .subscribe(function (res) {
            //console.log(res)
            if (res.Table[0].AUTHORISEDTOPRINT == "1") {
                _this.checkinv();
            }
            else if (res.Table[0].AUTHORISEDTOPRINT == "0") { // Authorised can take print
                alert('You can not Print Invoice No. ' + _this.inv_number + '\n  Because Authorisation is Pending !!');
            }
            else {
                alert('No Records Found');
            }
        });
    };
    InvoicePrintComponent.prototype.checkinv = function () {
        var _this = this;
        var jsonmaster = {
            invno: this.inv_number,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        //console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_Chk_Inv_NONINR", jsonmaster)
            .subscribe(function (res) {
            //console.log(res)
            _this.inrtype = res.Table[0].Column1;
            _this.showModal = true;
        });
    };
    InvoicePrintComponent.prototype.currencyType = function (d) {
        this.inrtype = d;
        this.showModal = false;
        this.printmodal = true;
        this.print();
    };
    InvoicePrintComponent.prototype.print = function () {
        var _this = this;
        var jsonmaster = {
            invno: this.inv_number,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        // console.log(jsonmaster)
        //console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_Print", jsonmaster)
            .subscribe(function (res) {
            //   console.log(res)
            _this.GSTIN1 = res.Table[0].GSTIN;
            _this.ESIC_REGD1 = res.Table[0].ESIC_REGD;
            _this.INCOMETAXNO1 = res.Table[0].INCOMETAXNO;
            _this.CMPADDRESS1 = res.Table[0].CMPADDRESS;
            _this.CMP_FULLNAME1 = res.Table[0].CMP_FULLNAME;
            _this.CMP_IMAGE = "assets/img/" + res.Table[0].CMP_IMAGE;
            _this.currencyname = res.Table1[0].currencyname;
            _this.NARRATION1 = res.Table1[0].NARRATION;
            _this.INV_CARRIER1 = res.Table1[0].INV_CARRIER;
            _this.INV_GOODS1 = res.Table1[0].INV_GOODS;
            _this.CINNO_REG1 = res.Table1[0].CINNO_REG;
            _this.PAYBLEBYDT1 = res.Table1[0].PAYBLEBYDT;
            _this.DOCTHROUGH1 = res.Table1[0].DOCTHROUGH;
            _this.INV_CLIENTREF1 = res.Table1[0].INV_CLIENTREF;
            _this.INV_NO1 = res.Table1[0].INV_NO;
            _this.INV_HAWBNO1 = res.Table1[0].INV_HAWBNO;
            _this.INV_DATE1 = res.Table1[0].INV_DATE;
            _this.INV_ADVANCE1 = res.Table1[0].INV_ADVANCE;
            _this.INV_HAWBDT1 = res.Table1[0].INV_HAWBDT;
            _this.EXP_INVADD11 = res.Table1[0].EXP_INVADD1;
            _this.CITY_COUNTRY1 = res.Table1[0].CITY_COUNTRY;
            _this.EXP_NAME1 = res.Table1[0].EXP_NAME;
            _this.EXP_INVADD2 = res.Table1[0].EXP_INVADD2;
            _this.EXP_INVADD3 = res.Table1[0].EXP_INVADD3;
            _this.EXP_INVCITY = res.Table1[0].EXP_INVCITY;
            _this.EXP_INVPINCODE = res.Table1[0].EXP_INVPINCODE;
            _this.INV_JOBNO1 = res.Table2[0].INV_JOBNO;
            _this.table0 = res.Table;
            _this.enclosuretable = res.Table3;
            _this.chargestable = res.Table4;
            _this.dispatchtable = res.Table6;
            _this.datattable5 = res.Table5;
            _this.gsttable = res.Table7;
            _this.datatable8 = res.Table8;
            _this.dattable9 = res.Table9;
            _this._loaderService.display(false);
            if (_this.NARRATION1 != "") {
                var html = _this.NARRATION1.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
                _this.NARRATION1 = html;
            }
            if (_this.inrtype == "0") {
                for (var i = 0; i < res.Table7.length; i++) {
                    _this.sum = _this.sum + res.Table7[i].INV_INRAMT;
                }
                _this.sum = (_this.sum + _this.datattable5[0].TOT_INV_INRAMT_Y + _this.datattable5[0].TOT_INV_INRAMT_N) + _this.dattable9[0].ROUNDVALUE;
                _this.sum_words = _this._dataService.ConvertNumberToWordsNew(_this.sum);
                _this.balance = _this.sum - _this.INV_ADVANCE1;
            }
            else if (_this.inrtype == "1") {
                for (var i = 0; i < res.Table7.length; i++) {
                    _this.sum = _this.sum + res.Table7[i].INV_AMOUNT;
                }
                _this.sum = (_this.sum + _this.datattable5[0].TOT_INV_AMOUNT_Y + _this.datattable5[0].TOT_INV_AMOUNT_N) + _this.dattable9[0].ROUNDVALUE;
                _this.sum_words = _this._dataService.ConvertNumberToWordsNew(_this.sum);
                _this.balance = _this.sum - _this.INV_ADVANCE1;
            }
        });
    };
    InvoicePrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - Invoice Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Invoice Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    InvoicePrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    InvoicePrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-print',
            template: __webpack_require__(/*! raw-loader!./invoice-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/invoice-print.component.html"),
            styles: ["\n  p .MsoNormal{\n    padding:0rem !important;\n    margin:0rem !important\n  }\n  .Rpt_Label_content {\n    font-size: 8pt;\n    color: black;\n    font-family: Verdana,Arial;\n  }\n  .Rpt_Label {\n    font-weight: bold;\n    font-size: 8pt;\n    color: black;\n    font-family: Verdana,Arial;\n}\n.Rpt_CodeDate {\n  font-weight: bold;\n  font-size: 9pt;\n  color: black;\n  font-family: Verdana,Arial;\n}\n  "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], InvoicePrintComponent);
    return InvoicePrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/invoice-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/windowpoppage/Account/invoice-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: InvoiceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewComponent", function() { return InvoiceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoiceViewComponent = /** @class */ (function () {
    function InvoiceViewComponent(_dataService, _route, _loginService, loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this.loaderService = loaderService;
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
        this.SUPPLYTYPE = "";
        this.INV_CURRATE1 = "";
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
    }
    InvoiceViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.invoiceviewdata(params["InvNo"]);
        });
    };
    InvoiceViewComponent.prototype.invoiceviewdata = function (datainv) {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            invoiceno: datainv,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
        };
        //console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_view", jsonmaster)
            .subscribe(function (data) {
            //    console.log(data)
            if (data.Table[0].STATUS == "#100") {
                _this.datatabl_1 = data.Table1;
                _this.datatabl_2 = data.Table2;
                _this.datatabl_3 = data.Table3;
                _this.datatabl_4 = data.Table4;
                _this.datatabl_5 = data.Table5;
                _this.datatabl_6 = data.Table6;
                _this.datatabl_7 = data.Table7;
                _this.datatabl_8 = data.Table8;
                _this.datatabl_9 = data.Table9;
                _this.datatabl_10 = data.Table10;
                _this.INV_NO = data.Table2[0].INV_NO;
                _this.INV_DATE = data.Table2[0].INV_DATE;
                _this.CLIENTNAME = data.Table2[0].CLIENTNAME;
                _this.BILLTO_INVADDR = data.Table2[0].BILLTO_INVADDR;
                _this.INV_BILLTYPE = data.Table2[0].INV_BILLTYPE;
                _this.CUR_NAME = data.Table2[0].CUR_NAME;
                _this.INV_CLIENTREF = data.Table2[0].INV_CLIENTREF;
                _this.NARRATION = data.Table2[0].NARRATION;
                _this.INV_GOODS = data.Table2[0].INV_GOODS;
                _this.INV_CURRATE = data.Table2[0].INV_CURRATE;
                _this.INV_CURRATE1 = data.Table2[0].INV_CURRATE1;
                _this.INV_WT = data.Table2[0].INV_WT;
                _this.INV_VOL = data.Table2[0].INV_VOL;
                _this.INV_TAX = data.Table2[0].INV_TAX;
                _this.PAYBLEBYDT = data.Table2[0].PAYBLEBYDT;
                _this.INV_NOOFPCS = data.Table2[0].INV_NOOFPCS;
                _this.INV_PKGS = data.Table2[0].INV_PKGS;
                _this.INV_HAWBDT = data.Table2[0].INV_HAWBDT;
                _this.INV_HAWBNO = data.Table2[0].INV_HAWBNO;
                _this.INV_CARRIER = data.Table2[0].INV_CARRIER;
                _this.INV_ADVANCE = data.Table2[0].INV_ADVANCE;
                _this.SUPPLYTYPE = data.Table2[0].SUPPLYTYPE;
                _this.loaderService.display(false);
            }
            else {
                _this.loaderService.display(false);
            }
        });
    };
    InvoiceViewComponent.prototype.jobprofitreport = function (jobno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + jobno + '/', "Job Profit Report", toolbar);
    };
    InvoiceViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    InvoiceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-view',
            template: __webpack_require__(/*! raw-loader!./invoice-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/invoice-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], InvoiceViewComponent);
    return InvoiceViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InvoicehistoryPurchaseprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicehistoryPurchaseprintComponent", function() { return InvoicehistoryPurchaseprintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoicehistoryPurchaseprintComponent = /** @class */ (function () {
    function InvoicehistoryPurchaseprintComponent(_dataService, _route, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.table0 = [];
        this.accounttable = [];
        this.compnytable = [];
    }
    InvoicehistoryPurchaseprintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.EntryNo = params["entryno"];
            _this.getpurchaseprintdata();
        });
    };
    InvoicehistoryPurchaseprintComponent.prototype.getpurchaseprintdata = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            entryno: this.EntryNo,
        };
        this._dataService.getData("Accounts/ACCFRA_TRAN_PURCHASE_PRINT", jsonmaster)
            .subscribe(function (data) {
            //console.log(data)
            _this.table0 = data.Table[0];
            _this.accounttable = data.Table1;
            _this.compnytable = data.Table2[0];
            _this._loaderService.display(false);
        });
    };
    InvoicehistoryPurchaseprintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('purchaseprint').innerHTML;
        var mywindow = window.open('', 'Accounts - Purchase Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Purchase Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    InvoicehistoryPurchaseprintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    InvoicehistoryPurchaseprintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoicehistory-purchaseprint',
            template: __webpack_require__(/*! raw-loader!./invoicehistory-purchaseprint.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], InvoicehistoryPurchaseprintComponent);
    return InvoicehistoryPurchaseprintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/jv-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/windowpoppage/Account/jv-view.component.ts ***!
  \************************************************************/
/*! exports provided: JVViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JVViewComponent", function() { return JVViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JVViewComponent = /** @class */ (function () {
    function JVViewComponent(_dataService, _toasterService, _route, _loginService, loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._route = _route;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.AccountNameList = [];
        this.EntryNo = "";
        this.VoucherNo = "";
        this.VoucherDate = "";
        this.Narration = "";
        this.TotDebit = "";
        this.TotCredit = "";
    }
    JVViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.EntryNo = params["entryno"];
        });
        this.PageLoad();
    };
    JVViewComponent.prototype.PageLoad = function () {
        var _this = this;
        var jsonparam = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            ENTRYNO: this.EntryNo,
            VGUID: this._loginService.getLogin()[0].VGUID,
            STATUS: "JVREQ" };
        this._dataService.getData("Accounts/ACC_JV_View", jsonparam)
            .subscribe(function (data) {
            _this.VoucherNo = data.Table[0].JVCODE;
            _this.VoucherDate = data.Table[0].JV_DATE;
            _this.Narration = data.Table[0].NARRATION;
            _this.AccountNameList = data.Table1;
            _this.TotDebit = data.Table2[0].TOTDEBIT;
            _this.TotCredit = data.Table2[0].TOTCREDIT;
        });
    };
    JVViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    JVViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-JV-view',
            template: __webpack_require__(/*! raw-loader!./jv-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/jv-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], JVViewComponent);
    return JVViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/proformainvoice-print.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/windowpoppage/Account/proformainvoice-print.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProformaInvoicePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProformaInvoicePrintComponent", function() { return ProformaInvoicePrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProformaInvoicePrintComponent = /** @class */ (function () {
    function ProformaInvoicePrintComponent(_dataService, _route, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._route = _route;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.sum = 0;
        this.NARRATION1 = "";
        this.INV_CARRIER1 = "";
        this.INV_GOODS1 = "";
        this.GSTIN1 = "";
        this.ESIC_REGD1 = "";
        this.INCOMETAXNO1 = "";
        this.CINNO_REG1 = "";
        this.PAYBLEBYDT1 = "";
        this.DOCTHROUGH1 = "";
        this.INV_CLIENTREF1 = "";
        this.INV_PKGS = "";
        this.INV_NO1 = "";
        this.INV_HAWBNO1 = "";
        this.INV_DATE1 = "";
        this.INV_HAWBDT1 = "";
        this.INV_JOBNO1 = "";
        this.EXP_INVADD11 = "";
        this.CITY_COUNTRY1 = "";
        this.EXP_INVADD2 = "";
        this.EXP_INVADD3 = "";
        this.EXP_INVCITY = "";
        this.EXP_INVPINCODE = "";
        this.EXP_NAME1 = "";
        this.CMPADDRESS1 = "";
        this.CMP_FULLNAME1 = "";
        this.CMP_IMAGE = "";
        this.table0 = [];
        this.inv_number = "";
        this.showModal = false;
        this.printmodal = false;
        this.inrtype = "";
        this.SUPPLYTYPE = "";
        this.CURNAME = "";
        this.amt_y = "";
        this.amt_n = "";
        this.cmpname = "";
        this.SAXNOTIFY = "";
        this.IRNNO = "";
        this.BillNo = "";
        this.Pod = "";
        this.Pol = "";
    }
    ProformaInvoicePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.inv_number = params["InvNo"];
            _this.chevkauthorize(params["InvNo"]);
        });
    };
    ProformaInvoicePrintComponent.prototype.chevkauthorize = function (invoiceno) {
        var _this = this;
        var jsonmaster = {
            invno: invoiceno,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_AUTHORISATION_CHECK", jsonmaster)
            .subscribe(function (res) {
            //console.log(res)
            // if (res.Table[0].AUTHORISEDTOPRINT == "1") {
            _this.checkinv();
            // } else if (res.Table[0].AUTHORISEDTOPRINT == "0") {// Authorised can take print
            //   alert('You can not Print Invoice No. ' + this.inv_number + '\n  Because Authorisation is Pending !!')
            // } else {
            //   alert('No Records Found')
            // }
        });
    };
    ProformaInvoicePrintComponent.prototype.checkinv = function () {
        var _this = this;
        var jsonmaster = {
            invno: this.inv_number,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        //console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_Chk_Inv_NONINR", jsonmaster)
            .subscribe(function (res) {
            //console.log(res)
            _this.inrtype = res.Table[0].Column1;
            if (_this.inrtype == "1") {
                _this.showModal = true;
            }
            else {
                _this.showModal = false;
                _this.printmodal = true;
                _this.print();
            }
        });
    };
    ProformaInvoicePrintComponent.prototype.currencyType = function (d) {
        if (this.exampleRadios1 == "" || this.exampleRadios1 == undefined) {
            alert('Please select at least one currency type');
            return false;
        }
        this.inrtype = d;
        this.showModal = false;
        this.printmodal = true;
        this.print();
    };
    ProformaInvoicePrintComponent.prototype.print = function () {
        var _this = this;
        var jsonmaster = {
            invno: this.inv_number,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE
        };
        // console.log(jsonmaster)
        //console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_invoice_Print", jsonmaster)
            .subscribe(function (res) {
            //   console.log(res)
            _this.GSTIN1 = res.Table[0].GSTIN;
            _this.ESIC_REGD1 = res.Table[0].ESIC_REGD;
            _this.INCOMETAXNO1 = res.Table[0].INCOMETAXNO;
            _this.CMPADDRESS1 = res.Table[0].CMPADDRESS;
            _this.CMP_FULLNAME1 = res.Table[0].CMP_FULLNAME;
            _this.cmpname = res.Table[0].CMPNAME;
            _this.CMP_IMAGE = "assets/img/" + res.Table[0].CMP_IMAGE;
            _this.currencyname = res.Table1[0].currencyname;
            _this.CURNAME = res.Table1[0].CUR_NAME;
            _this.NARRATION1 = res.Table1[0].NARRATION;
            _this.INV_CARRIER1 = res.Table1[0].INV_CARRIER;
            _this.INV_GOODS1 = res.Table1[0].INV_GOODS;
            _this.CINNO_REG1 = res.Table1[0].CINNO_REG;
            _this.PAYBLEBYDT1 = res.Table1[0].PAYBLEBYDT;
            _this.DOCTHROUGH1 = res.Table1[0].DOCTHROUGH;
            _this.INV_CLIENTREF1 = res.Table1[0].INV_CLIENTREF;
            _this.INV_PKGS = res.Table1[0].INV_PKGS;
            _this.INV_NO1 = res.Table1[0].INV_NO;
            _this.INV_HAWBNO1 = res.Table1[0].INV_HAWBNO;
            _this.INV_DATE1 = res.Table1[0].INV_DATE;
            _this.INV_ADVANCE1 = res.Table1[0].INV_ADVANCE;
            _this.INV_HAWBDT1 = res.Table1[0].INV_HAWBDT;
            _this.EXP_INVADD11 = res.Table1[0].EXP_INVADD1;
            _this.CITY_COUNTRY1 = res.Table1[0].CITY_COUNTRY;
            _this.EXP_NAME1 = res.Table1[0].EXP_NAME;
            _this.EXP_INVADD2 = res.Table1[0].EXP_INVADD2;
            _this.EXP_INVADD3 = res.Table1[0].EXP_INVADD3;
            _this.EXP_INVCITY = res.Table1[0].EXP_INVCITY;
            _this.EXP_INVPINCODE = res.Table1[0].EXP_INVPINCODE;
            _this.SAXNOTIFY = res.Table1[0].STAXNOTIFY;
            _this.INV_JOBNO1 = res.Table2[0].INV_JOBNO;
            _this.BillNo = res.Table11[0].BILLNO;
            _this.Pol = res.Table11[0].POL;
            _this.Pod = res.Table11[0].POD;
            _this.table0 = res.Table;
            _this.enclosuretable = res.Table3;
            _this.chargestable = res.Table4;
            _this.dispatchtable = res.Table6;
            _this.datattable5 = res.Table5;
            _this.gsttable = res.Table7;
            _this.datatable8 = res.Table8;
            _this.dattable9 = res.Table9;
            _this.datatable10 = res.Table10;
            _this.datatablebank = res.Table12;
            _this._loaderService.display(false);
            if (_this.NARRATION1 != "") {
                var html = _this.NARRATION1.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
                _this.NARRATION1 = html;
            }
            if (_this.inrtype == "0") {
                for (var i = 0; i < res.Table7.length; i++) {
                    _this.sum = _this.sum + res.Table7[i].INV_INRAMT;
                }
                _this.sum = (_this.sum + _this.datattable5[0].TOT_INV_INRAMT_Y + _this.datattable5[0].TOT_INV_INRAMT_N); //+ this.dattable9[0].ROUNDVALUE
                _this.sum_words = _this._dataService.ConvertNumberToWordsNew(_this.sum);
                _this.balance = _this.sum - _this.INV_ADVANCE1;
            }
            else if (_this.inrtype == "1") {
                for (var i = 0; i < res.Table7.length; i++) {
                    _this.sum = _this.sum + res.Table7[i].INV_AMOUNT;
                }
                _this.sum = (_this.sum + _this.datattable5[0].TOT_INV_AMOUNT_Y + _this.datattable5[0].TOT_INV_AMOUNT_N); ///+ this.dattable9[0].ROUNDVALUE
                _this.sum_words = _this._dataService.ConvertNumberToWordsNew(_this.sum);
                _this.balance = _this.sum - _this.INV_ADVANCE1;
                console.log(_this.sum);
            }
            if (_this.datatable8.length > 0) {
                if (_this.inrtype == "1") {
                    _this.TotalTaxableAmt = _this.datatable8[0].TOTALTAXABLEAMT;
                    if (_this.TotalTaxableAmt != "0.00") {
                        _this.TotalTaxableAmt = _this.TotalTaxableAmt - _this.dattable9[0].ROUNDVALUE;
                    }
                }
                else {
                    _this.TotalTaxableAmt = _this.datatable8[0].TOTALTAXABLEAMTINR;
                }
            }
            // var totamt
            _this.totamtfinal = _this.amt_y + _this.amt_n + _this.TotalTaxableAmt;
            if (_this.inrtype == "1") {
                _this.totamtfinal = _this.totamtfinal;
            }
            else {
                _this.totamtfinal = Math.round(_this.totamtfinal);
                if (_this.totamtfinal - _this.INV_ADVANCE1 > 0) {
                    _this.balanceduelbl = "Balance due to us";
                }
                else if (_this.totamtfinal - _this.INV_ADVANCE1 < 0) {
                    _this.balanceduelbl = "Balance due to you";
                }
                else if (_this.totamtfinal - _this.INV_ADVANCE1 == 0) {
                    _this.balanceduelbl = "Zero Balance";
                }
            }
            if (res.Table10[0].IRNNO != "") {
                _this.IRNNO = "IRN NO. :" + res.Table10[0].IRNNO;
            }
            else {
                _this.IRNNO = res.Table10[0].IRNNO;
            }
            //this.QrImage='data:image/jpg;base64,'+ atob(res.Table10[0].QRCODE);
            _this.qrdata = res.Table10[0].QRCODE;
            if (_this.inrtype == "0") {
                _this.CURNAME = 'INDIAN RUPEES';
            }
            else {
                _this.CURNAME = _this.CURNAME;
            }
        });
    };
    ProformaInvoicePrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - Invoice Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Invoice Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    ProformaInvoicePrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    ProformaInvoicePrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proformainvoice-print',
            template: __webpack_require__(/*! raw-loader!./proformainvoice-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/proformainvoice-print.component.html"),
            styles: ["\n  p .MsoNormal{\n    padding:0rem !important;\n    margin:0rem !important\n  }\n  .Rpt_Label_content {\n    font-size: 8pt;\n    color: black;\n    font-family: Verdana,Arial;\n  }\n  .Rpt_Label {\n    font-weight: bold;\n    font-size: 8pt;\n    color: black;\n    font-family: Verdana,Arial;\n}\n.Rpt_CodeDate {\n  font-weight: bold;\n  font-size: 9pt;\n  color: black;\n  font-family: Verdana,Arial;\n}\n  "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], ProformaInvoicePrintComponent);
    return ProformaInvoicePrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/purchase-print.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/windowpoppage/Account/purchase-print.component.ts ***!
  \*******************************************************************/
/*! exports provided: PurchasePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePrintComponent", function() { return PurchasePrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PurchasePrintComponent = /** @class */ (function () {
    function PurchasePrintComponent(_dataService, _toasterService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.SuppNo = "";
        this.table0 = [];
        this.table1 = [];
        this.table2 = [];
        this.table3 = [];
        this.table4 = [];
        this.totalamount = 0;
        this.totaldeduction = 0;
        this.grandtotal = 0;
        this.total_words = "";
        this.Status = "";
        this.printheader = "";
        this.CMP_IMAGE = "";
    }
    PurchasePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.SuppNo = params["SuppNo"];
            _this.Status = params["Status"];
            if (_this.Status == 'PI' || _this.Status == 'GENPI') {
                _this.printheader = 'PURCHASE VOUCHER';
            }
            else if (_this.Status == 'RPI') {
                _this.printheader = 'PURCHASE VOUCHER REQUEST';
            }
            else if (_this.Status == 'SRPI') {
                _this.printheader = 'STAFF PURCHASE VOUCHER REQUEST';
            }
            _this.getDataforPrint();
        });
    };
    PurchasePrintComponent.prototype.getDataforPrint = function () {
        var _this = this;
        console.log("#");
        var _jsonData = {
            PUR_CODE: this.SuppNo,
            FROMDATE: "",
            TODATE: "",
            PUR_SUPPLIER: "0",
            DISPLAYTYPE: "3",
            PUR_INVNO: "",
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            YEAR_ID: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
        };
        ///  console.log(_jsonData)
        this._loaderService.display(true);
        var url = "";
        if (this.Status == 'PI' || this.Status == 'GENPI') {
            url = "Accounts/ACC_PURCHASE_PRINT_PI";
        }
        else if (this.Status == 'RPI') {
            url = "Accounts/ACC_PURCHASE_PRINT_RPI";
        }
        else if (this.Status == 'SRPI') {
            url = "Accounts/ACC_PURCHASE_PRINT_SRPI";
        }
        this._dataService.getData(url, _jsonData)
            ///   this._dataService.getData("Accounts/ACC_PURCHASE_PRINT_PI", _jsonData)
            .subscribe(function (data) {
            console.log(data);
            _this.table0 = data.Table;
            _this.table1 = data.Table1;
            _this.table2 = data.Table2;
            _this.table3 = data.Table3;
            if (_this.Status == 'PI' || _this.Status == 'GENPI') {
                _this.table4 = data.Table4;
            }
            if (data.Table2[0].TOTALNETTOTAL != "" || data.Table2[0].TOTALNETTOTAL != undefined) {
                //this.total_words = this._dataService.convertNumberToWords(data.Table2[0].TOTALNETTOTAL)
                _this.total_words = _this._dataService.toWords(data.Table2[0].TOTALNETTOTAL);
                _this.CMP_IMAGE = "assets/img/" + _this.table3[0].CMP_IMAGE;
            }
            _this._loaderService.display(false);
        });
    };
    PurchasePrintComponent.prototype.openEdocument = function () {
        var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp + "edocument-Links/View.html#/AutoRedirect?eformid=255&huhpnk=" + this._loginService.getLogin()[0].CMP_USERENCCODE + "&JOBNO=" + this.SuppNo + "&cmpcode=" + this._loginService.getLogin()[0].CMPCODE + "&citycode=" + this._loginService.getLogin()[0].CITYCODE + "&CurLogInIP=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        var theTop = (screen.height / 2) - (510 / 2);
        var theLeft = (screen.width / 2) - (760 / 2);
        var toolbar = 'resizable=yes,scrollbars=no,width=740,height=400,status=no,left=' + theLeft + ',top=' + theTop;
        var NewWin = window.open(URL, "EDOC_VIEW", toolbar);
        NewWin.focus();
    };
    PurchasePrintComponent.prototype.printjobReport = function (jobno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + jobno + '/', "Job Profit Report", toolbar);
    };
    PurchasePrintComponent.prototype.PrintElem = function () {
        var data = document.getElementById('demo').innerHTML;
        var mywindow = window.open('', 'Accounts - Purchase Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Purchase Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    PurchasePrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    PurchasePrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-print',
            template: __webpack_require__(/*! raw-loader!./purchase-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/purchase-print.component.html"),
            styles: ["\n  .dgHeader {\n    border-right: black 1px solid;\n    table-layout: auto;\n    border-top: black 1px solid;\n    font-weight: bold;\n    font-size: 8pt;\n    border-left: black 1px solid;\n    color: black;\n    border-bottom: black 1px solid;\n    font-family: Verdana;\n    border-collapse: separate;\n}\n.dgItem {\n    border-right: black 1px solid;\n    border-top: black 1px solid;\n    font-size: 8pt;\n    border-left: black 1px solid;\n    color: black;\n    border-bottom: black 1px solid;\n    font-family: Verdana;\n}\n.Rpt_CodeDate {\n  font-weight: bold;\n  font-size: 9pt;\n  color: black;\n  font-family: Verdana,Arial;\n}\n.LabelNormal {\n  font-size: 8pt;\n  font-family: Verdana, Arial;\n  color: #003388;\n  cursor: default;\n  border-width: 0px;\n}\n.Rpt_Label_content{\n  font-size: 9pt;\n  font-family: Verdana, Arial;\n  color: black;\n}\n    "]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], PurchasePrintComponent);
    return PurchasePrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/purchase-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/windowpoppage/Account/purchase-view.component.ts ***!
  \******************************************************************/
/*! exports provided: PurchaseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseViewComponent", function() { return PurchaseViewComponent; });
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







var PurchaseViewComponent = /** @class */ (function () {
    function PurchaseViewComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
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
        this.passedbyperson = "";
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
        this.NetAmount = "";
        this.Netdeduction = "";
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
        this.formid = "";
        this.fromright_dt = null;
    }
    PurchaseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PurchaseDate = new Date();
        this.PurchaseDate = this._dataService.datechnge(this.PurchaseDate);
        this._activatedRoute.params.subscribe(function (params) {
            _this.PurchaseNo = params["PurchaseNo"];
            _this.STATUS = params["Status"];
        });
        this.editpopulate();
    };
    PurchaseViewComponent.prototype.editpopulate = function () {
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
        this._dataService.getData("Accounts/ACC_PURCHASE_VIEW", jsonview)
            .subscribe(function (data) {
            //console.log(data)
            _this.DueDate = (data.Table[0].PUR_DUEDT != "") ? _this._dataService.stringdttoArry(data.Table[0].PUR_DUEDT) : "";
            _this.BillReceive = (data.Table[0].PUR_SUPBILLDATE != "") ? data.Table[0].PUR_SUPBILLDATE : ""; ///(data.Table[0].PUR_SUPBILLDATE != "") ? this._dataService.stringdttoArry(data.Table[0].PUR_SUPBILLDATE) : "";
            _this.InvDate = (data.Table[0].PUR_SUPINVDATE != "") ? data.Table[0].PUR_SUPINVDATE : ""; // (data.Table[0].PUR_SUPINVDATE != "") ? this._dataService.stringdttoArry(data.Table[0].PUR_SUPINVDATE) : "";
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
            _this.pursuppliername = data.Table[0].PUR_SUPPLIERNAME;
            _this.passedbyperson = data.Table[0].PASSEDBYPERSON;
            if (data.Table[0].FK_SUP_ADDR_ID != "") {
                var suppcode = data.Table[0].FK_SUP_ADDR_ID.split("|")[1];
                // console.log(suppcode)
                _this.GetSupplierName(suppcode);
            }
            _this.loaderService.display(false);
        });
    };
    PurchaseViewComponent.prototype.GetSupplierName = function (Suppcode) {
        this.billaddressfilter = this.billaddressList.filter(function (x) { return x.SUPPCODE === Suppcode; });
        if (this.billaddressfilter.length == "1") {
            this.billaddress = this.billaddressfilter[0].DATAVALUEFIELD;
        }
    };
    PurchaseViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    PurchaseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-View',
            template: __webpack_require__(/*! raw-loader!./purchase-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/purchase-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], PurchaseViewComponent);
    return PurchaseViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/reqbp-bill-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/windowpoppage/Account/reqbp-bill-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ReqbpBillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqbpBillListComponent", function() { return ReqbpBillListComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var ReqbpBillListComponent = /** @class */ (function () {
    function ReqbpBillListComponent(_dataService, _toasterService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
    }
    ReqbpBillListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            //  console.log(params)
            _this.billno = params["BillNo"];
            _this.billlist();
        });
    };
    ReqbpBillListComponent.prototype.billlist = function () {
        var _this = this;
        var jsoncmp = {
            // EntryNo: '455555554555555'
            EntryNo: this.billno
        };
        console.log(jsoncmp);
        //this._loaderService.display(true);
        this._dataService.getData("Accounts/Acc_CMPBP_BPlISTView", jsoncmp)
            .subscribe(function (data) {
            // console.log(data)
            _this.bill_list = data.Table;
        });
    };
    ReqbpBillListComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    ReqbpBillListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reqbp-bill-list',
            template: __webpack_require__(/*! raw-loader!./reqbp-bill-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/reqbp-bill-list.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], ReqbpBillListComponent);
    return ReqbpBillListComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/reqbp-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/windowpoppage/Account/reqbp-view.component.ts ***!
  \***************************************************************/
/*! exports provided: ReqbpViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqbpViewComponent", function() { return ReqbpViewComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var ReqbpViewComponent = /** @class */ (function () {
    function ReqbpViewComponent(_dataService, _toasterService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
    }
    ReqbpViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            //  console.log(params)
            _this.entryno = params["EntryNo"];
            _this.viewdata();
        });
    };
    ReqbpViewComponent.prototype.viewdata = function () {
        var _this = this;
        var jsoncmp = {
            EntryNo: this.entryno
        };
        //console.log(jsoncmp)
        //this._loaderService.display(true);
        this._dataService.getData("Accounts/Acc_CMPBP_BPView", jsoncmp)
            .subscribe(function (data) {
            //console.log(data)
            _this.table = data.Table[0];
            _this.table1 = data.Table1;
            _this.table2 = data.Table2;
            //   this.rejectlist=data.Table
            // this._loaderService.display(false);
        });
    };
    ReqbpViewComponent.prototype.billprint = function (entryno) {
        if (entryno == '' || entryno == undefined || entryno.length < 15) {
            alert("Enter 15 digit EntryNo No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (entryno.substring(11, 12) == "9") {
            window.open('./#/popup/Account-Purchase-print/' + entryno + '/' + 'PI' + '/', "Purchase Print", toolbar);
        }
        else if (entryno.substring(8, 9) == "1") {
            // window.open('./#/popup/Account-Invoice-print/' + entryno + '/' , "BPRequest View", toolbar);        
            var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&InvoiceNo=" + entryno
                + "&DisplayMode=" + "0"
                + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
            window.open(URL_1, "Invoice Print", toolbar);
            return false;
        }
    };
    ReqbpViewComponent.prototype.billlist = function (billno) {
        // in erp 2 condtion = 1 ng print 
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Request-BP-Bill-List/' + billno + '/', "BPRequest View", toolbar);
    };
    ReqbpViewComponent.prototype.Jobprofit = function (jobno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + jobno + '/', "Job Profit Report", toolbar);
    };
    ReqbpViewComponent.prototype.AdvRecvClient = function (jobno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('../#/popup/Account-AdvRecfrmClient/' + jobno + '/', "ADVANCE FROM CLIENTS", toolbar);
    };
    ReqbpViewComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    ReqbpViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reqbp-view',
            template: __webpack_require__(/*! raw-loader!./reqbp-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/reqbp-view.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], ReqbpViewComponent);
    return ReqbpViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/singlejobno-report.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/windowpoppage/Account/singlejobno-report.component.ts ***!
  \***********************************************************************/
/*! exports provided: SinglejobnoReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglejobnoReportComponent", function() { return SinglejobnoReportComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var SinglejobnoReportComponent = /** @class */ (function () {
    function SinglejobnoReportComponent(_dataService, _toasterService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.JobNo = "";
        this.table0 = [];
        this.table1 = [];
        this.table2 = [];
        this.table3 = [];
        this.table4 = [];
        this.table5 = [];
        this.table6 = [];
    }
    SinglejobnoReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            //  console.log(params) 
            _this.JobNo = params["jobno"];
            _this.getData();
        });
    };
    SinglejobnoReportComponent.prototype.getData = function () {
        var _this = this;
        var jsoncmp = {
            JOBNO: this.JobNo
        };
        this._dataService.getData("Accounts/ACC_RPT_JOBPROFITS_JOBWISE", jsoncmp).subscribe(function (data) {
            // console.log(data);
            _this.table0 = data.Table[0];
            _this.table1 = data.Table1[0];
            _this.table2 = data.Table2;
            _this.table3 = data.Table3;
            _this.table4 = data.Table4[0];
            _this.table5 = data.Table5;
            _this.table6 = data.Table6;
        });
    };
    SinglejobnoReportComponent.prototype.PrintElem = function () {
        var data = document.getElementById('report-div').innerHTML;
        var mywindow = window.open('', 'Accounts -Job Profit Report Print', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Accounts - Job Profit Report Print</title>');
        mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.onload = function () {
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
        };
        return true;
    };
    SinglejobnoReportComponent.prototype.invoiceprint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (Type == "II") {
            // window.open('./#/popup/Account-Invoice-print/' + No + '/' , "Invoice Print", toolbar);
            var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&InvoiceNo=" + No
                + "&DisplayMode=" + "0"
                + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME;
            window.open(URL_1, "Invoice Print", toolbar);
            return false;
        }
        else if (Type == "PI") {
            window.open('./#/popup/Account-Purchase-print/' + No.replace("'", "") + '/' + 'PI' + '/', "PI Print", toolbar);
        }
        else if (Type == "JV") {
            window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
        }
        else if (Type == "CN") {
            window.open('./#/popup/Account-CreditNote-Print/' + No.replace("'", "") + '/', "CN Print", toolbar);
        }
        else if (Type == "SI") {
            return false;
        }
        else if (Type == "BI") {
            return false;
        }
        else
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/', "CASH BOOK - Bank Payment", toolbar);
    };
    SinglejobnoReportComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"] },
        { type: src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    SinglejobnoReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singlejobno-report',
            template: __webpack_require__(/*! raw-loader!./singlejobno-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/singlejobno-report.component.html"),
            styles: ["\n  \n\n.rptlblNormal {\n  font-size: 10pt;\n  color: black;\n  font-family: Arial, Verdana;\n}\n.LabelHeader {\n  font-weight: bold;\n  font-size: x-small;\n  cursor: default;\n  color: 003333;\n  font-family: Verdana;\n}\n.rptlblCmpName {\n  font-weight: bold;\n  font-size: 14pt;\n  color: black;\n  font-family: Arial, Verdana;\n}\n.rptlblHeader {\n  font-weight: bold;\n  font-size: 10pt;\n  color: black;\n  font-family: Arial, Verdana;\n}\n.rptlblCmpAdd {\n  font-weight: bold;\n  font-size: 8pt;\n  color: black;\n  font-family: Arial, Verdana;\n}\n  "]
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_shared_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastCommonService"],
            src_app_shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_service_loginService__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], SinglejobnoReportComponent);
    return SinglejobnoReportComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Account/srpi-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/windowpoppage/Account/srpi-view.component.ts ***!
  \**************************************************************/
/*! exports provided: srpiViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srpiViewComponent", function() { return srpiViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var srpiViewComponent = /** @class */ (function () {
    function srpiViewComponent(_dataService, _toasterService, _route, _loginService, loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._route = _route;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.display = 'none';
        this.disabledBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /// @Output() OutSRIPNO: EventEmitter<any> = new EventEmitter<any>();
        this.purcode = '';
        this.flag = '';
        this.authstatus = '';
        this.authstatlist = '';
        this.PUR_CODE = "";
        this.PUR_DATE = "";
        this.REMARKS = "";
        this.PASSEDBY = "";
        this.PASSEDAMOUNT = "";
        this.SUPINVAMT = "";
        this.VOUCHERNO = "";
        this.datatabl_1 = [];
        this.txtchild = "Add";
        this.Allitemlist = [];
        this.Stafflist = [];
        this.codelistActt = [];
        this.PassedBylist = [];
        this.AccountNameList = [];
        this.NetAmount = "0";
        this.Netdeduction = "0";
        this.text = "Verify";
        this.txtadd = "Add";
        this.NetAmt = "0";
        this.VGUID = "";
        this.IsPassed = false;
        this.passedby = "";
        this.staff = "";
        this.PASSEDBYPERSON = "";
        this.FLAG = "";
        this.AUTHSTATUS = "";
        this.disable_Accountname = false;
        this.disable_Item = false;
        this.disable_Amount = false;
        this.disable_JobNo = false;
        this.disable_IsPassed = false;
    }
    ;
    srpiViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.PUR_CODE = params["pur_code"];
            _this.FLAG = params["flag"];
            _this.AUTHSTATUS = params["authstatus"];
            //this.authstatlist= params["authstatlist"];
        });
        this.disable_Accountname = true;
        this.disable_Item = true;
        this.disable_Amount = true;
        this.disable_JobNo = true;
        this.staffpurchaseviewdata(this.PUR_CODE);
    };
    srpiViewComponent.prototype.PageLoad = function () {
        var _this = this;
        var jsonparam = { cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "SRPI" };
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.Stafflist = data.Table1;
            _this.PassedBylist = data.Table2;
            _this.Allitemlist = data.Table3;
        });
    };
    srpiViewComponent.prototype.ngOnChanges = function () {
        // console.log(this.purcode)
        // console.log(this.flag)
        // console.log(this.authstatus)
        this.PageLoad();
        this.staffpurchaseviewdata(this.purcode);
    };
    srpiViewComponent.prototype.staffpurchaseviewdata = function (purinvno) {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            ENTRYNO: purinvno,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: "SRPI",
            CMPID: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_VIEW", jsonmaster)
            .subscribe(function (data) {
            _this.PUR_CODE = data.Table[0].PUR_CODE;
            _this.PUR_DATE = data.Table[0].PUR_DATE;
            _this.REMARKS = data.Table[0].REMARKS;
            _this.PASSEDBYPERSON = data.Table[0].PASSEDBYPERSON;
            _this.IsPassed = data.Table[0].PASS;
            _this.PASSEDAMOUNT = data.Table[0].PASSEDAMOUNT;
            _this.SUPINVAMT = data.Table[0].SUPINVAMT;
            _this.VOUCHERNO = data.Table[0].VOUCHERNO;
            _this.PUR_SUPPLIER = data.Table[0].PUR_SUPPLIER;
            _this.PUR_SUPPLIERNAME = data.Table[0].PUR_SUPPLIERNAME;
            _this.datatabl_1 = data.Table1;
            _this.NetAmt = data.Table2[0].NETTOTAL;
            _this.NetAmount = data.Table2[0].TOTAMOUNT;
            _this.Netdeduction = data.Table2[0].TOTDEDUCTION;
        });
        this.loaderService.display(false);
    };
    srpiViewComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.datatabl_1.filter(function (filter) { return filter.ID == id; })[0];
        this.ID = filterData.ID;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.Amount = filterData.AMOUNT;
        this.Deduction = filterData.DEDUCTION;
        if (filterData.SRPIPASSAMOUNT > 0) {
            this.actpassedamount = filterData.SRPIPASSAMOUNT;
        }
        else if (filterData.SRPIPASSAMOUNT == 0) {
            this.actpassedamount = filterData.AMOUNT;
        }
        ///this.actpassedamount=filterData.AMOUNT;
        this.Item = filterData.ITEM_DATAVALUE;
        this.JobNo = filterData.JOBNO;
        this.ActNarration = filterData.NARRATION;
        this.txtchild = "Update";
        this.ACCBANKDTLSID = filterData.ACC_PURCHASEDTLS_ID;
        this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
        this.VGUID = this._loginService.getLogin()[0].GUID;
        this.ItemName = filterData.ITEM;
    };
    srpiViewComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        var jsonchild = { ID: this.ID, ENTRYNO: this.PUR_CODE, CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo, DEDUCTION: this.Deduction, AMOUNT: this.Amount, USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            NARRATION: this.ActNarration, IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: this.Item.split("|")[0],
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: this.Item.split("|")[2],
            ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID,
            STATUS: "SRPI",
            IsJobReport: this.AccountName.split("|")[1],
            ITEM_DATAVALUE: this.Item,
            SRPIPASSAMOUNT: this.actpassedamount,
            ISOLDENTRY: "0",
            CMPID: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this.datatabl_1 = data.Table;
                _this.NetAmount = data.Table1[0].TOTAMOUNT;
                _this.Netdeduction = data.Table1[0].TOTDEDUCTION;
                _this.NetAmt = data.Table1[0].NETTOTAL;
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table1[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    srpiViewComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        this.AccountName = undefined;
        this.JobNo = "";
        this.Deduction = "";
        this.Amount = "";
        this.ActNarration = "";
        this.Item = undefined;
        this.actpassedamount = "";
        this.txtchild = "Add";
    };
    srpiViewComponent.prototype.Add_Main = function () {
        var _this = this;
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.PUR_CODE,
            ENTRYDT: this.PUR_DATE,
            STATUS: "SRPI",
            SUP_CODE: this.staff,
            SUP_NAME: "",
            SUP_INVNO: "",
            SUP_INVDT: "",
            SUP_BILLRECEIVEDDT: "",
            SUP_DUEDT: "",
            PASSFLAG: (this.IsPassed == true) ? "Y" : "",
            PASSEDBY: (this.PASSEDBY == "") ? "0" : this.PASSEDBY,
            PASSEDAMT: (this.PASSEDAMOUNT == "") ? "0" : this.PASSEDAMOUNT,
            INVAMT: (this.SUPINVAMT == "") ? "0" : this.SUPINVAMT,
            VOUCHERNO: (this.VOUCHERNO == "") ? "0" : this.VOUCHERNO,
            MAWBN0: "",
            FREIGHTG100235: "0",
            SURCHARGEG101468: "0",
            AIRFRTCOMMG100153: "0",
            FRTREBATEG100186: "0",
            NARRATION: this.REMARKS,
            ACTUALAMOUNT: this.NetAmt,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.PUR_CODE == ' ') ? "INSERT" : "UPDATE",
            DOCUMENTG100179: "0",
            FK_SUP_ADDR_ID: "0",
            AMSENSEXP_G102024: "0",
            MISCEXP_G102025: "0"
        };
        var url = "";
        if (this.PUR_CODE == " ") {
            url = "Accounts/ACC_PURCHASE_INSERT";
        }
        else {
            url = "Accounts/ACC_PURCHASE_UPDATE";
        }
        this._dataService.Common(url, jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100#") {
                //this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT );
                _this.Verify();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.Verify();
                _this.loaderService.display(false);
            }
        });
    };
    srpiViewComponent.prototype.Verify = function () {
        var _this = this;
        var jsonverify = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            STATUS: "SRPI",
            JVREQNO: this.PUR_CODE,
            AUTHORISATIONDT: "",
            CMPID: this._loginService.getLogin()[0].CMPID,
            AUTHORISATIONSTATUS: this.AUTHSTATUS
        };
        this._dataService.getData("Accounts/Acc_CPJVPI_REQUEST_Authorisation_Update", jsonverify)
            .subscribe(function (data) {
            if (data.Table2[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table2[0].STATUS.split("#")[1]);
                ///this.OutSRIPNO.emit({ VeriSRPNO: this.PUR_CODE });
                {
                    _this.hideModal.emit(_this.purcode);
                    _this.hideModal.emit(_this.authstatus);
                }
            }
            else if (data.Table2[0].STATUS.split("#")[0] == "105") {
                _this._toasterService.toast('warning', 'warning', data.Table2[0].STATUS.split("#")[1]);
            }
            _this.loaderService.display(false);
        });
    };
    srpiViewComponent.prototype.SaveVerify = function () {
        var answer = confirm("Are you sure you want to authorise the Request Staff Purchase no." + this.PUR_CODE + " ?");
        if (answer == false) {
            return false;
        }
        else {
            this.Add_Main();
        }
    };
    srpiViewComponent.prototype.abortModal = function () {
        this.hideModal.emit(this.authstatlist);
    };
    srpiViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], srpiViewComponent.prototype, "disabledBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], srpiViewComponent.prototype, "hideModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], srpiViewComponent.prototype, "purcode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], srpiViewComponent.prototype, "flag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], srpiViewComponent.prototype, "authstatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], srpiViewComponent.prototype, "authstatlist", void 0);
    srpiViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-srpi-view',
            template: __webpack_require__(/*! raw-loader!./srpi-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Account/srpi-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], srpiViewComponent);
    return srpiViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Quotation/quotation-print.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/windowpoppage/Quotation/quotation-print.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ========================================= */\r\n/* BASE STYLES (for Screen and Print)        */\r\n/* ========================================= */\r\n.quote-details-block {\r\n    /* Ensures the block doesn't collapse and helps with alignment within the column */\r\n    padding-right: 20px; \r\n}\r\n.quotation-container {\r\n    padding: 30px; /* Optional: for screen view, if needed */\r\n    max-width: 800px; /* Optional: for screen view */\r\n    margin: 0 auto;\r\n    background: #fff; /* Ensure white background */\r\n    font-family: Arial, sans-serif;\r\n}\r\n.quotation-title {\r\n    /* Use a clear, bold font for the main title, adjust size to your preference */\r\n    font-size: 2 em; \r\n    font-weight: 400;\r\n    color: #333;\r\n    margin-bottom: 5px; /* Reduce space below the title */\r\n    line-height: 1.2;\r\n      font-family: 'Segoe UI', sans-serif;\r\n}\r\n.header-divider {\r\n    border-top: 1px solid #eee;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.logo {\r\n    max-width: 180px;\r\n    height: auto;\r\n}\r\n/* Metadata (Quote No, Date, etc.) */\r\n.meta-item {\r\n    font-size: 0.9em;\r\n    color: #666; /* Slightly greyed out for softer contrast */\r\n    margin: 3px 0; /* Tighten up the line spacing */\r\n    display: flex; /* Use flexbox to align the icon and text */\r\n    align-items: center;\r\n}\r\n/* Styling the icons for the Links India and Date lines */\r\n.meta-item .custom-icon {\r\n    /* Styles for the '' and '' icons */\r\n    font-size: 1em;\r\n    color: #007bff; /* Use a brand color for the icons */\r\n    margin-right: 8px; /* Space between icon and text */\r\n    width: 15px; /* Give the icon a fixed width for alignment */\r\n    text-align: center;\r\n}\r\n/* Specific styling for the company/link name */\r\n.client-company .label {\r\n    font-weight: 400; /* Make the company name slightly bold */\r\n    color: #333;\r\n}\r\n/* Address Blocks */\r\n.block-title {\r\n    font-size: 1em;\r\n    color: #666;\r\n    text-transform: uppercase;\r\n    border-bottom: 1px solid #ddd;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n/* Table Styles */\r\n.item-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n}\r\n.item-table th, .item-table td {\r\n    padding: 8px 10px;\r\n    border-bottom: 1px solid #eee;\r\n    text-align: left;\r\n    font-size: 0.9em;\r\n}\r\n.item-table th {\r\n    background-color: #f8f8f8; /* Light grey header */\r\n    color: #333;\r\n    /* font-weight: bold; */\r\n    /* border-top: 2px solid #333;  */\r\n}\r\n/* Totals Summary Table */\r\n.summary-table {\r\n    margin-top: 30px;\r\n}\r\n.summary-table table {\r\n    width: 100%;\r\n    max-width: 300px; /* Keep total box narrow */\r\n}\r\n.summary-table th, .summary-table td {\r\n    padding: 5px 0;\r\n}\r\n.summary-table th {\r\n    text-align: left;\r\n    font-weight: 600;\r\n}\r\n.total-row th, .total-row td {\r\n    border-top: 2px solid #333;\r\n    font-size: 1.1em;\r\n    padding-top: 10px;\r\n}\r\n.total-row h4 {\r\n    font-weight: bold;\r\n    color: #000;\r\n}\r\n.notes-section {\r\n    font-size: 0.9em;\r\n}\r\n.footer-section {\r\n    margin-top: 50px;\r\n    padding-top: 20px;\r\n}\r\n.header-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n.logo {\r\n  max-width: 150px;  /* adjust as needed */\r\n  height: auto;\r\n  display: block;\r\n  margin-left: auto; /* push it to the right */\r\n}\r\n.signature-line {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    border-top: 1px dashed #666;\r\n    padding-top: 5px;\r\n    width: 60%;\r\n    margin-left: 20%;\r\n    font-size: 0.85em;\r\n}\r\n/* Styling for the combined contact line */\r\n.contact-line {\r\n    font-size: 0.95em;\r\n    margin-bottom: 5px; /* Adjust spacing below the line */\r\n    color: #333;\r\n    /* Use flex or inline-block to ensure elements stay on one line */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n/* Style the contact person's name to stand out slightly */\r\n.contact-person {\r\n    font-weight: 600;\r\n    margin-right: 8px; /* Space before the separator */\r\n}\r\n/* Style the separator character (the '|' in this example) */\r\n.separator-icon {\r\n    font-weight: 400;\r\n    color: #666; /* Grey color for the separator */\r\n    margin: 0 8px; /* Space on both sides of the separator */\r\n}\r\n.small-box-separator {\r\n    display: inline-block; /* Make it behave like an inline element but with block properties */\r\n    width: 6px; /* Width of the box */\r\n    height: 6px; /* Height of the box */\r\n    background-color: #666; /* Color of the filled box */\r\n    border-radius: 1px; /* Slightly rounded corners */\r\n    margin: 0 8px; /* Space on both sides of the box */\r\n    flex-shrink: 0; /* Prevent the box from shrinking if space is tight */\r\n}\r\n/* Style the email address */\r\n.contact-email {\r\n    color: #007bff; /* Use a brand color for the email to make it clickable on screen */\r\n}\r\n.shipment-summary-section {\r\n  /* background-color: #e8f0df; light green tint like in screenshot */\r\n  padding: 5px 5px;\r\n  border-radius: 6px;\r\n  font-family: 'Segoe UI', sans-serif;\r\n  font-size: 13px;\r\n  /* color: #333; */\r\n  margin-bottom: 15px;\r\n}\r\n/* Align items in a row */\r\n.summary-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap; /* ensures responsiveness */\r\n}\r\n/* Each label-value pair inline */\r\n.summary-item {\r\n  flex: 1;\r\n  min-width: 160px;\r\n  margin: 2px 10px;\r\n  white-space: nowrap;\r\n}\r\n.label {\r\n  font-weight: 500;\r\n  color: #555;\r\n  margin-right: 4px;\r\n  font-family: 'Segoe UI', sans-serif;\r\n}\r\n.value {\r\n  font-weight: 600;\r\n  color: #000;\r\n}\r\n.small {\r\n  font-size: 12px;\r\n  color: #555;\r\n}\r\n.second-row {\r\n  margin-top: 5px;\r\n}\r\n.summary-bar + .summary-bar {\r\n  margin-top: 8px; /* adjust to your liking (6–12px works well) */\r\n}\r\n.summary-item .labelseperator {\r\n    font-weight: 200;\r\n    font-family: 'Segoe UI', sans-serif;\r\n    color: #e7e2e2;\r\n    /* Remove 'display: block;' to keep it on the same line as the value */\r\n    margin-right: 5px; /* Add a little space between the label and the value */\r\n    text-transform: none; /* Turn off uppercase for the label if you want */\r\n    \r\n}\r\n.summary-item .value {\r\n    font-weight: 700;\r\n    color: #333;\r\n    text-transform: uppercase; /* Keep the data value uppercase */\r\n}\r\n.summary-item .labelheader {\r\n    font-weight: 300;\r\n    color: #333;\r\n    text-transform: uppercase; /* Keep the data value uppercase */\r\n   \r\n}\r\n.charge-header-row td {\r\n    /* Apply a dark, bold border only to the bottom */\r\n    border-bottom: 2px solid #333 !important; \r\n    \r\n    /* Ensure no background is applied */\r\n    background-color: transparent !important; \r\n    \r\n    padding-bottom: 8px; /* Extra spacing after the separator */\r\n}\r\n/* Ensure these rows don't get the default table stripe background */\r\ntr.charge-header-row {\r\n    background-color: transparent !important;\r\n}\r\n/* Adjustments for the multi-line Load Detail */\r\n.summary-item.load-details {\r\n    text-align: right;\r\n}\r\n.charge-group-divider {\r\n    /* Set a specific background color if you also want the row itself to stand out */\r\n    background-color: #f0f0f0; \r\n}\r\n/* Target the cells (<td>) within the separator row */\r\n.charge-group-divider td {\r\n    /* IMPORTANT: Override the default light border of the table rows */\r\n    border-bottom: 2px solid #333 !important; /* Thicker, dark border for emphasis */\r\n    padding-bottom: 10px; /* Optional: Add a bit of extra space below the separator */\r\n}\r\n.labelheader {\r\n    font-weight: 700; /* Bolder text */\r\n    color: #333; /* Darker color */\r\n      font-family: 'Segoe UI', sans-serif;\r\n    /* Add any other styling you want for the header text here */\r\n}\r\n.quotation-wrapper {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  background: white; /* Ensure white page background */\r\n  z-index: 1;\r\n  overflow: hidden; /* Prevent pseudo-element overflow */\r\n}\r\n.quotation-wrapper * {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.quotation-wrapper::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 50%;\r\n  width: 300px; /* control size */\r\n  height: 300px;\r\n  background: url('/assets/img/Untitled-1.png') center center no-repeat ;\r\n  background-size: contain;\r\n  opacity: 0.08; /* faint but visible */\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 0;\r\n  pointer-events: none; /* avoid interaction issues */\r\n  -webkit-print-color-adjust: exact;\r\n  print-color-adjust: exact;\r\n}\r\n.content {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n@media print {\r\n    /* 1. HIDE elements not needed for print (like the button) */\r\n  \r\n\r\n   body {\r\n    -webkit-print-color-adjust: exact;\r\n    print-color-adjust: exact;\r\n  }\r\n\r\n  .quotation-wrapper::before {\r\n    display: none; /* hide pseudo-element in print */\r\n  }\r\n\r\n  .watermark-print {\r\n    display: block;\r\n    position: fixed; /* stays in same place on every printed page */\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 400px; /* adjust size */\r\n    height: 200px;\r\n    opacity: 0.08;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    z-index: 0;\r\n    pointer-events: none;\r\n  }\r\n  .content {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n    .quotation-container {\r\n        width: 100%;\r\n        max-width: 100%;\r\n        padding: 0; /* Remove padding for edge-to-edge content */\r\n        box-shadow: none; /* Remove any shadow or border */\r\n    }\r\n\r\n    /* 4. Force totals and footer to the bottom of the page (if needed) */\r\n    .totals-and-notes {\r\n        margin-top: 40px;\r\n    }\r\n    \r\n    /* 5. Improve legibility for print */\r\n    p, td, th, h1, h5 {\r\n        color: #000 !important;\r\n    }\r\n\r\n    /* 6. Ensure the main content prints correctly */\r\n    .item-details-section {\r\n        overflow: visible; /* Prevent clipping */\r\n    }\r\n\r\n    /* 7. Ensure footer prints correctly at the bottom of the last page */\r\n    .footer-section {\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n    /* Use a standard font for reliable printing */\r\n    * {\r\n        font-family: \"Times New Roman\", Times, serif !important;\r\n    }\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93cG9wcGFnZS9RdW90YXRpb24vcXVvdGF0aW9uLXByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7SUFDSSxrRkFBa0Y7SUFDbEYsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhLEVBQUUseUNBQXlDO0lBQ3hELGdCQUFnQixFQUFFLDhCQUE4QjtJQUNoRCxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsNEJBQTRCO0lBQzlDLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksOEVBQThFO0lBQzlFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQixFQUFFLGlDQUFpQztJQUNyRCxnQkFBZ0I7TUFDZCxtQ0FBbUM7QUFDekM7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBLG9DQUFvQztBQUNwQztJQUNJLGdCQUFnQjtJQUNoQixXQUFXLEVBQUUsNENBQTRDO0lBQ3pELGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsYUFBYSxFQUFFLDJDQUEyQztJQUMxRCxtQkFBbUI7QUFDdkI7QUFFQSx5REFBeUQ7QUFDekQ7SUFDSSxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLGNBQWMsRUFBRSxvQ0FBb0M7SUFDcEQsaUJBQWlCLEVBQUUsZ0NBQWdDO0lBQ25ELFdBQVcsRUFBRSw4Q0FBOEM7SUFDM0Qsa0JBQWtCO0FBQ3RCO0FBRUEsK0NBQStDO0FBQy9DO0lBQ0ksZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELFdBQVc7QUFDZjtBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCLEVBQUUsc0JBQXNCO0lBQ2pELFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsMEJBQTBCO0FBQ2hEO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQixHQUFHLHFCQUFxQjtFQUN4QyxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFFLHlCQUF5QjtBQUM5QztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0EsMENBQTBDO0FBQzFDO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFFLGtDQUFrQztJQUN0RCxXQUFXO0lBQ1gsaUVBQWlFO0lBQ2pFLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUUsK0JBQStCO0FBQ3REO0FBRUEsNERBQTREO0FBQzVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSxpQ0FBaUM7SUFDOUMsYUFBYSxFQUFFLHlDQUF5QztBQUM1RDtBQUNBO0lBQ0kscUJBQXFCLEVBQUUsb0VBQW9FO0lBQzNGLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQyxzQkFBc0IsRUFBRSw0QkFBNEI7SUFDcEQsa0JBQWtCLEVBQUUsNkJBQTZCO0lBQ2pELGFBQWEsRUFBRSxtQ0FBbUM7SUFDbEQsY0FBYyxFQUFFLHFEQUFxRDtBQUN6RTtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGNBQWMsRUFBRSxtRUFBbUU7QUFDdkY7QUFFQTtFQUNFLG1FQUFtRTtFQUNuRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBRSwyQkFBMkI7QUFDOUM7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZSxFQUFFLDhDQUE4QztBQUNqRTtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGlCQUFpQixFQUFFLHVEQUF1RDtJQUMxRSxvQkFBb0IsRUFBRSxpREFBaUQ7O0FBRTNFO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QixFQUFFLGtDQUFrQztBQUNqRTtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUIsRUFBRSxrQ0FBa0M7O0FBRWpFO0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQsd0NBQXdDOztJQUV4QyxvQ0FBb0M7SUFDcEMsd0NBQXdDOztJQUV4QyxtQkFBbUIsRUFBRSxzQ0FBc0M7QUFDL0Q7QUFFQSxvRUFBb0U7QUFDcEU7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQSwrQ0FBK0M7QUFDL0M7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlGQUFpRjtJQUNqRix5QkFBeUI7QUFDN0I7QUFFQSxxREFBcUQ7QUFDckQ7SUFDSSxtRUFBbUU7SUFDbkUsd0NBQXdDLEVBQUUsc0NBQXNDO0lBQ2hGLG9CQUFvQixFQUFFLDJEQUEyRDtBQUNyRjtBQUNBO0lBQ0ksZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLFdBQVcsRUFBRSxpQkFBaUI7TUFDNUIsbUNBQW1DO0lBQ3JDLDREQUE0RDtBQUNoRTtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCLEVBQUUsaUNBQWlDO0VBQ3BELFVBQVU7RUFDVixnQkFBZ0IsRUFBRSxvQ0FBb0M7QUFDeEQ7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQztFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZLEVBQUUsaUJBQWlCO0VBQy9CLGFBQWE7RUFDYixzRUFBc0U7RUFDdEUsd0JBQXdCO0VBQ3hCLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysb0JBQW9CLEVBQUUsNkJBQTZCO0VBQ25ELGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7QUFDRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7QUFNRjtJQUNJLDREQUE0RDs7O0dBRzdEO0lBQ0MsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWEsRUFBRSxpQ0FBaUM7RUFDbEQ7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZSxFQUFFLDhDQUE4QztJQUMvRCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsYUFBYTtJQUNiLGFBQWE7SUFDYix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7SUFDRTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVSxFQUFFLDRDQUE0QztRQUN4RCxnQkFBZ0IsRUFBRSxnQ0FBZ0M7SUFDdEQ7O0lBRUEscUVBQXFFO0lBQ3JFO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBLG9DQUFvQztJQUNwQztRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQSxnREFBZ0Q7SUFDaEQ7UUFDSSxpQkFBaUIsRUFBRSxxQkFBcUI7SUFDNUM7O0lBRUEscUVBQXFFO0lBQ3JFO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtJQUNaOztJQUVBLDhDQUE4QztJQUM5QztRQUNJLHVEQUF1RDtJQUMzRDs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC93aW5kb3dwb3BwYWdlL1F1b3RhdGlvbi9xdW90YXRpb24tcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIEJBU0UgU1RZTEVTIChmb3IgU2NyZWVuIGFuZCBQcmludCkgICAgICAgICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5xdW90ZS1kZXRhaWxzLWJsb2NrIHtcclxuICAgIC8qIEVuc3VyZXMgdGhlIGJsb2NrIGRvZXNuJ3QgY29sbGFwc2UgYW5kIGhlbHBzIHdpdGggYWxpZ25tZW50IHdpdGhpbiB0aGUgY29sdW1uICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBcclxufVxyXG4ucXVvdGF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4OyAvKiBPcHRpb25hbDogZm9yIHNjcmVlbiB2aWV3LCBpZiBuZWVkZWQgKi9cclxuICAgIG1heC13aWR0aDogODAwcHg7IC8qIE9wdGlvbmFsOiBmb3Igc2NyZWVuIHZpZXcgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjsgLyogRW5zdXJlIHdoaXRlIGJhY2tncm91bmQgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnF1b3RhdGlvbi10aXRsZSB7XHJcbiAgICAvKiBVc2UgYSBjbGVhciwgYm9sZCBmb250IGZvciB0aGUgbWFpbiB0aXRsZSwgYWRqdXN0IHNpemUgdG8geW91ciBwcmVmZXJlbmNlICovXHJcbiAgICBmb250LXNpemU6IDIgZW07IFxyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyAvKiBSZWR1Y2Ugc3BhY2UgYmVsb3cgdGhlIHRpdGxlICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlYWRlci1kaXZpZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKiBNZXRhZGF0YSAoUXVvdGUgTm8sIERhdGUsIGV0Yy4pICovXHJcbi5tZXRhLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiAjNjY2OyAvKiBTbGlnaHRseSBncmV5ZWQgb3V0IGZvciBzb2Z0ZXIgY29udHJhc3QgKi9cclxuICAgIG1hcmdpbjogM3B4IDA7IC8qIFRpZ2h0ZW4gdXAgdGhlIGxpbmUgc3BhY2luZyAqL1xyXG4gICAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggdG8gYWxpZ24gdGhlIGljb24gYW5kIHRleHQgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgdGhlIGljb25zIGZvciB0aGUgTGlua3MgSW5kaWEgYW5kIERhdGUgbGluZXMgKi9cclxuLm1ldGEtaXRlbSAuY3VzdG9tLWljb24ge1xyXG4gICAgLyogU3R5bGVzIGZvciB0aGUgJ+6glScgYW5kICfuoJYnIGljb25zICovXHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMDA3YmZmOyAvKiBVc2UgYSBicmFuZCBjb2xvciBmb3IgdGhlIGljb25zICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXHJcbiAgICB3aWR0aDogMTVweDsgLyogR2l2ZSB0aGUgaWNvbiBhIGZpeGVkIHdpZHRoIGZvciBhbGlnbm1lbnQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3BlY2lmaWMgc3R5bGluZyBmb3IgdGhlIGNvbXBhbnkvbGluayBuYW1lICovXHJcbi5jbGllbnQtY29tcGFueSAubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgLyogTWFrZSB0aGUgY29tcGFueSBuYW1lIHNsaWdodGx5IGJvbGQgKi9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi8qIEFkZHJlc3MgQmxvY2tzICovXHJcbi5ibG9jay10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRhYmxlIFN0eWxlcyAqL1xyXG4uaXRlbS10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbS10YWJsZSB0aCwgLml0ZW0tdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uaXRlbS10YWJsZSB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyAvKiBMaWdodCBncmV5IGhlYWRlciAqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzOyAgKi9cclxufVxyXG5cclxuLyogVG90YWxzIFN1bW1hcnkgVGFibGUgKi9cclxuLnN1bW1hcnktdGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uc3VtbWFyeS10YWJsZSB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7IC8qIEtlZXAgdG90YWwgYm94IG5hcnJvdyAqL1xyXG59XHJcbi5zdW1tYXJ5LXRhYmxlIHRoLCAuc3VtbWFyeS10YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG4uc3VtbWFyeS10YWJsZSB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udG90YWwtcm93IHRoLCAudG90YWwtcm93IHRkIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi50b3RhbC1yb3cgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uaGVhZGVyLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4OyAgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bzsgLyogcHVzaCBpdCB0byB0aGUgcmlnaHQgKi9cclxufVxyXG4uc2lnbmF0dXJlLWxpbmUge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzY2NjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG59XHJcbi8qIFN0eWxpbmcgZm9yIHRoZSBjb21iaW5lZCBjb250YWN0IGxpbmUgKi9cclxuLmNvbnRhY3QtbGluZSB7XHJcbiAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgLyogQWRqdXN0IHNwYWNpbmcgYmVsb3cgdGhlIGxpbmUgKi9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgLyogVXNlIGZsZXggb3IgaW5saW5lLWJsb2NrIHRvIGVuc3VyZSBlbGVtZW50cyBzdGF5IG9uIG9uZSBsaW5lICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGNvbnRhY3QgcGVyc29uJ3MgbmFtZSB0byBzdGFuZCBvdXQgc2xpZ2h0bHkgKi9cclxuLmNvbnRhY3QtcGVyc29uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgLyogU3BhY2UgYmVmb3JlIHRoZSBzZXBhcmF0b3IgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHNlcGFyYXRvciBjaGFyYWN0ZXIgKHRoZSAnfCcgaW4gdGhpcyBleGFtcGxlKSAqL1xyXG4uc2VwYXJhdG9yLWljb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNjY2OyAvKiBHcmV5IGNvbG9yIGZvciB0aGUgc2VwYXJhdG9yICovXHJcbiAgICBtYXJnaW46IDAgOHB4OyAvKiBTcGFjZSBvbiBib3RoIHNpZGVzIG9mIHRoZSBzZXBhcmF0b3IgKi9cclxufVxyXG4uc21hbGwtYm94LXNlcGFyYXRvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIE1ha2UgaXQgYmVoYXZlIGxpa2UgYW4gaW5saW5lIGVsZW1lbnQgYnV0IHdpdGggYmxvY2sgcHJvcGVydGllcyAqL1xyXG4gICAgd2lkdGg6IDZweDsgLyogV2lkdGggb2YgdGhlIGJveCAqL1xyXG4gICAgaGVpZ2h0OiA2cHg7IC8qIEhlaWdodCBvZiB0aGUgYm94ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2OyAvKiBDb2xvciBvZiB0aGUgZmlsbGVkIGJveCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4OyAvKiBTbGlnaHRseSByb3VuZGVkIGNvcm5lcnMgKi9cclxuICAgIG1hcmdpbjogMCA4cHg7IC8qIFNwYWNlIG9uIGJvdGggc2lkZXMgb2YgdGhlIGJveCAqL1xyXG4gICAgZmxleC1zaHJpbms6IDA7IC8qIFByZXZlbnQgdGhlIGJveCBmcm9tIHNocmlua2luZyBpZiBzcGFjZSBpcyB0aWdodCAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgZW1haWwgYWRkcmVzcyAqL1xyXG4uY29udGFjdC1lbWFpbCB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjsgLyogVXNlIGEgYnJhbmQgY29sb3IgZm9yIHRoZSBlbWFpbCB0byBtYWtlIGl0IGNsaWNrYWJsZSBvbiBzY3JlZW4gKi9cclxufVxyXG5cclxuLnNoaXBtZW50LXN1bW1hcnktc2VjdGlvbiB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U4ZjBkZjsgbGlnaHQgZ3JlZW4gdGludCBsaWtlIGluIHNjcmVlbnNob3QgKi9cclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLyogY29sb3I6ICMzMzM7ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLyogQWxpZ24gaXRlbXMgaW4gYSByb3cgKi9cclxuLnN1bW1hcnktYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLyogZW5zdXJlcyByZXNwb25zaXZlbmVzcyAqL1xyXG59XHJcblxyXG4vKiBFYWNoIGxhYmVsLXZhbHVlIHBhaXIgaW5saW5lICovXHJcbi5zdW1tYXJ5LWl0ZW0ge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBtYXJnaW46IDJweCAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzU1NTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLnNlY29uZC1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uc3VtbWFyeS1iYXIgKyAuc3VtbWFyeS1iYXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDsgLyogYWRqdXN0IHRvIHlvdXIgbGlraW5nICg24oCTMTJweCB3b3JrcyB3ZWxsKSAqL1xyXG59XHJcbi5zdW1tYXJ5LWl0ZW0gLmxhYmVsc2VwZXJhdG9yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZTdlMmUyO1xyXG4gICAgLyogUmVtb3ZlICdkaXNwbGF5OiBibG9jazsnIHRvIGtlZXAgaXQgb24gdGhlIHNhbWUgbGluZSBhcyB0aGUgdmFsdWUgKi9cclxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAvKiBBZGQgYSBsaXR0bGUgc3BhY2UgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIHRoZSB2YWx1ZSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IC8qIFR1cm4gb2ZmIHVwcGVyY2FzZSBmb3IgdGhlIGxhYmVsIGlmIHlvdSB3YW50ICovXHJcbiAgICBcclxufVxyXG5cclxuLnN1bW1hcnktaXRlbSAudmFsdWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgLyogS2VlcCB0aGUgZGF0YSB2YWx1ZSB1cHBlcmNhc2UgKi9cclxufVxyXG4uc3VtbWFyeS1pdGVtIC5sYWJlbGhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAvKiBLZWVwIHRoZSBkYXRhIHZhbHVlIHVwcGVyY2FzZSAqL1xyXG4gICBcclxufVxyXG4uY2hhcmdlLWhlYWRlci1yb3cgdGQge1xyXG4gICAgLyogQXBwbHkgYSBkYXJrLCBib2xkIGJvcmRlciBvbmx5IHRvIHRoZSBib3R0b20gKi9cclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7IFxyXG4gICAgXHJcbiAgICAvKiBFbnN1cmUgbm8gYmFja2dyb3VuZCBpcyBhcHBsaWVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBcclxuICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDsgLyogRXh0cmEgc3BhY2luZyBhZnRlciB0aGUgc2VwYXJhdG9yICovXHJcbn1cclxuXHJcbi8qIEVuc3VyZSB0aGVzZSByb3dzIGRvbid0IGdldCB0aGUgZGVmYXVsdCB0YWJsZSBzdHJpcGUgYmFja2dyb3VuZCAqL1xyXG50ci5jaGFyZ2UtaGVhZGVyLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIEFkanVzdG1lbnRzIGZvciB0aGUgbXVsdGktbGluZSBMb2FkIERldGFpbCAqL1xyXG4uc3VtbWFyeS1pdGVtLmxvYWQtZGV0YWlscyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2hhcmdlLWdyb3VwLWRpdmlkZXIge1xyXG4gICAgLyogU2V0IGEgc3BlY2lmaWMgYmFja2dyb3VuZCBjb2xvciBpZiB5b3UgYWxzbyB3YW50IHRoZSByb3cgaXRzZWxmIHRvIHN0YW5kIG91dCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgXHJcbn1cclxuXHJcbi8qIFRhcmdldCB0aGUgY2VsbHMgKDx0ZD4pIHdpdGhpbiB0aGUgc2VwYXJhdG9yIHJvdyAqL1xyXG4uY2hhcmdlLWdyb3VwLWRpdmlkZXIgdGQge1xyXG4gICAgLyogSU1QT1JUQU5UOiBPdmVycmlkZSB0aGUgZGVmYXVsdCBsaWdodCBib3JkZXIgb2YgdGhlIHRhYmxlIHJvd3MgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7IC8qIFRoaWNrZXIsIGRhcmsgYm9yZGVyIGZvciBlbXBoYXNpcyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7IC8qIE9wdGlvbmFsOiBBZGQgYSBiaXQgb2YgZXh0cmEgc3BhY2UgYmVsb3cgdGhlIHNlcGFyYXRvciAqL1xyXG59XHJcbi5sYWJlbGhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogNzAwOyAvKiBCb2xkZXIgdGV4dCAqL1xyXG4gICAgY29sb3I6ICMzMzM7IC8qIERhcmtlciBjb2xvciAqL1xyXG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIEFkZCBhbnkgb3RoZXIgc3R5bGluZyB5b3Ugd2FudCBmb3IgdGhlIGhlYWRlciB0ZXh0IGhlcmUgKi9cclxufVxyXG5cclxuLnF1b3RhdGlvbi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7IC8qIEVuc3VyZSB3aGl0ZSBwYWdlIGJhY2tncm91bmQgKi9cclxuICB6LWluZGV4OiAxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgcHNldWRvLWVsZW1lbnQgb3ZlcmZsb3cgKi9cclxufVxyXG5cclxuLnF1b3RhdGlvbi13cmFwcGVyICoge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiAucXVvdGF0aW9uLXdyYXBwZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAzMDBweDsgLyogY29udHJvbCBzaXplICovXHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL1VudGl0bGVkLTEucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQgO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBvcGFjaXR5OiAwLjA4OyAvKiBmYWludCBidXQgdmlzaWJsZSAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIGF2b2lkIGludGVyYWN0aW9uIGlzc3VlcyAqL1xyXG4gIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcclxuICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xyXG59XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC8qIDEuIEhJREUgZWxlbWVudHMgbm90IG5lZWRlZCBmb3IgcHJpbnQgKGxpa2UgdGhlIGJ1dHRvbikgKi9cclxuICBcclxuXHJcbiAgIGJvZHkge1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xyXG4gICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcclxuICB9XHJcblxyXG4gIC5xdW90YXRpb24td3JhcHBlcjo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIGhpZGUgcHNldWRvLWVsZW1lbnQgaW4gcHJpbnQgKi9cclxuICB9XHJcblxyXG4gIC53YXRlcm1hcmstcHJpbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIHN0YXlzIGluIHNhbWUgcGxhY2Ugb24gZXZlcnkgcHJpbnRlZCBwYWdlICovXHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiA0MDBweDsgLyogYWRqdXN0IHNpemUgKi9cclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjA4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gICAgLnF1b3RhdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwOyAvKiBSZW1vdmUgcGFkZGluZyBmb3IgZWRnZS10by1lZGdlIGNvbnRlbnQgKi9cclxuICAgICAgICBib3gtc2hhZG93OiBub25lOyAvKiBSZW1vdmUgYW55IHNoYWRvdyBvciBib3JkZXIgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiA0LiBGb3JjZSB0b3RhbHMgYW5kIGZvb3RlciB0byB0aGUgYm90dG9tIG9mIHRoZSBwYWdlIChpZiBuZWVkZWQpICovXHJcbiAgICAudG90YWxzLWFuZC1ub3RlcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogNS4gSW1wcm92ZSBsZWdpYmlsaXR5IGZvciBwcmludCAqL1xyXG4gICAgcCwgdGQsIHRoLCBoMSwgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyogNi4gRW5zdXJlIHRoZSBtYWluIGNvbnRlbnQgcHJpbnRzIGNvcnJlY3RseSAqL1xyXG4gICAgLml0ZW0tZGV0YWlscy1zZWN0aW9uIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogUHJldmVudCBjbGlwcGluZyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC8qIDcuIEVuc3VyZSBmb290ZXIgcHJpbnRzIGNvcnJlY3RseSBhdCB0aGUgYm90dG9tIG9mIHRoZSBsYXN0IHBhZ2UgKi9cclxuICAgIC5mb290ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFVzZSBhIHN0YW5kYXJkIGZvbnQgZm9yIHJlbGlhYmxlIHByaW50aW5nICovXHJcbiAgICAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/windowpoppage/Quotation/quotation-print.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/windowpoppage/Quotation/quotation-print.component.ts ***!
  \**********************************************************************/
/*! exports provided: SalesQuotationPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesQuotationPrintComponent", function() { return SalesQuotationPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SalesQuotationPrintComponent = /** @class */ (function () {
    function SalesQuotationPrintComponent(_dataService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.companyLogoUrl = 'assets/logo.png';
        this.quotmastertable = [];
        this.quotdtltable = [];
    }
    SalesQuotationPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.quotationno = params["quotno"];
            console.log(_this.quotationno);
            // this.incoterm="EXWOP"
            // this.shipmenttype="EXPORT"
            //this.containerloadtype='LCL/FCL'
            _this.getDataforPrint();
        });
    };
    SalesQuotationPrintComponent.prototype.getDataforPrint = function () {
        var _this = this;
        var json = { QUOTCODE: this.quotationno };
        this._dataService.getData("Master/MASTER_QUOTATION_PRINT", json)
            .subscribe(function (data) {
            console.log(data);
            _this.quotmastertable = data.Table;
            _this.quotno = data.Table[0].QUOT_CODE;
            console.log(data.Table[0].QUOT_CODE);
            _this.quotdate = data.Table[0].QUOT_DATE;
            _this.quotdate = _this.convertDateToHyphenFormat(_this.quotdate);
            _this.validupto = data.Table[0].VALIDUPTO;
            _this.validupto = _this.convertDateToHyphenFormat(_this.validupto);
            _this.cmpname = data.Table[0].CMP_NAME;
            _this.cmpimage = "assets/img/Untitled-1.png"; // + data.Table[0].CMP_IMAGE;
            _this.clientemail = data.Table[0].EMAIL;
            _this.quotdtltable = data.Table1;
            _this.contactperson = data.Table[0].CONTACT_PERSON;
            _this.pickup = '';
            _this.pol = data.Table[0].POL;
            _this.pod = data.Table[0].POD;
            _this.shipmode = data.Table[0].SHIP_MODE;
            _this.ocean = data.Table[0].LINER_NAME;
            _this.shipmenttype = data.Table[0].SHIP_TYPE;
            _this.containerloadtype = data.Table[0].CONTLOADTYPE;
            _this.incoterm = data.Table[0].INCOTERM;
        });
        console.log(this.quotno);
        this._loaderService.display(false);
    };
    // Function to trigger the browser's print dialog
    SalesQuotationPrintComponent.prototype.printDocument = function () {
        window.print();
    };
    SalesQuotationPrintComponent.prototype.convertDateToHyphenFormat = function (dateString) {
        if (!dateString) {
            return ''; // Handle null or empty input
        }
        // 1. Split the string by the '/' separator.
        var parts = dateString.split('/');
        // Check if we have three parts (DD, MM, YYYY)
        if (parts.length === 3) {
            // 2. Join the parts using the '-' separator.
            // The order (parts[0]=DD, parts[1]=MM, parts[2]=YYYY) remains the same.
            return parts.join('-');
        }
        // Return the original string if the format is unexpected
        return dateString;
    };
    SalesQuotationPrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesQuotationPrintComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesQuotationPrintComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesQuotationPrintComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SalesQuotationPrintComponent.prototype, "companyLogoUrl", void 0);
    SalesQuotationPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-print',
            template: __webpack_require__(/*! raw-loader!./quotation-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Quotation/quotation-print.component.html"),
            styles: [__webpack_require__(/*! ./quotation-print.component.css */ "./src/app/windowpoppage/Quotation/quotation-print.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], SalesQuotationPrintComponent);
    return SalesQuotationPrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Quotation/quote-air-print.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/windowpoppage/Quotation/quote-air-print.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuoteAirPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteAirPrintComponent", function() { return QuoteAirPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuoteAirPrintComponent = /** @class */ (function () {
    function QuoteAirPrintComponent(_dataService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.quotmastertable = [];
        this.quotdtltable = [];
    }
    QuoteAirPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.quotationno = params["quotno"];
            console.log(_this.quotationno);
            // this.incoterm="EXWOP"
            // this.shipmenttype="EXPORT"
            // this.containerloadtype='LCL/FCL'
            _this.getDataforPrint();
        });
    };
    QuoteAirPrintComponent.prototype.getDataforPrint = function () {
        var _this = this;
        var json = { QUOTCODE: this.quotationno };
        this._dataService.getData("Master/MASTER_QUOTATION_PRINT", json)
            .subscribe(function (data) {
            console.log(data);
            _this.quotmastertable = data.Table;
            _this.quotno = data.Table[0].QUOT_CODE;
            console.log(data.Table[0].QUOT_CODE);
            _this.quotdate = data.Table[0].QUOT_DATE;
            _this.quotdate = _this.convertDateToHyphenFormat(_this.quotdate);
            _this.validupto = data.Table[0].VALIDUPTO;
            _this.validupto = _this.convertDateToHyphenFormat(_this.validupto);
            _this.cmpname = data.Table[0].CMP_NAME;
            _this.cmpimage = "assets/img/Untitled-1.png"; // + data.Table[0].CMP_IMAGE;
            _this.clientemail = data.Table[0].EMAIL;
            _this.quotdtltable = data.Table1;
            _this.contactperson = data.Table[0].CONTACT_PERSON;
            _this.pickup = '';
            _this.pol = data.Table[0].POL;
            _this.pod = data.Table[0].POD;
            _this.shipmode = data.Table[0].SHIP_MODE;
            _this.ocean = data.Table[0].LINER_NAME;
            _this.weight = data.Table[0].WEIGHT;
            _this.volume = data.Table[0].VOLUME;
            _this.chblwt = data.Table[0].CHWEIGHT;
            _this.shipmenttype = data.Table[0].SHIP_TYPE;
            _this.containerloadtype = data.Table[0].CONTLOADTYPE;
            _this.incoterm = data.Table[0].INCOTERM;
        });
        console.log(this.quotno);
        this._loaderService.display(false);
    };
    // Function to trigger the browser's print dialog
    QuoteAirPrintComponent.prototype.printDocument = function () {
        window.print();
    };
    QuoteAirPrintComponent.prototype.convertDateToHyphenFormat = function (dateString) {
        if (!dateString) {
            return ''; // Handle null or empty input
        }
        // 1. Split the string by the '/' separator.
        var parts = dateString.split('/');
        // Check if we have three parts (DD, MM, YYYY)
        if (parts.length === 3) {
            // 2. Join the parts using the '-' separator.
            // The order (parts[0]=DD, parts[1]=MM, parts[2]=YYYY) remains the same.
            return parts.join('-');
        }
        // Return the original string if the format is unexpected
        return dateString;
    };
    QuoteAirPrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteAirPrintComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteAirPrintComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteAirPrintComponent.prototype, "client", void 0);
    QuoteAirPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salesquotation-print',
            template: __webpack_require__(/*! raw-loader!./quote-air-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Quotation/quote-air-print.component.html"),
            styles: [__webpack_require__(/*! ./quote-print.component.css */ "./src/app/windowpoppage/Quotation/quote-print.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], QuoteAirPrintComponent);
    return QuoteAirPrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/Quotation/quote-print.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/windowpoppage/Quotation/quote-print.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ========================================= */\r\n/* BASE STYLES (for Screen and Print)        */\r\n/* ========================================= */\r\n/* Meta icons (both images and font awesome) */\r\n.meta-icon {\r\n  width: 16px;       /* same size for images and font icons */\r\n  height: 16px;      /* for images */\r\n  font-size: 16px;   /* for font-awesome icons */\r\n  display: inline-block;\r\n  vertical-align: middle; /* aligns icon with text */\r\n}\r\n/* Small spacing after icon */\r\n.ms-1 {\r\n  margin-left: 4px;\r\n}\r\n/* Ensure flexbox aligns items vertically */\r\n.meta-item, .contact-line {\r\n  display: flex;\r\n  align-items: center; /* vertical center icon + text */\r\n}\r\n.quote-details-block {\r\n    /* Ensures the block doesn't collapse and helps with alignment within the column */\r\n    padding-right: 20px; \r\n}\r\n.quotation-container {\r\n    padding: 30px; /* Optional: for screen view, if needed */\r\n    max-width: 800px; /* Optional: for screen view */\r\n    margin: 0 auto;\r\n    background: #fff; /* Ensure white background */\r\n     font-family: 'Segoe UI', sans-serif;\r\n    /* font-family: Arial, sans-serif; */\r\n}\r\n.quotation-title {\r\n    /* Use a clear, bold font for the main title, adjust size to your preference */\r\n     font-family: 'Segoe UI', sans-serif;\r\n    font-size: 2 em; \r\n    font-weight: 400;\r\n    color: #333;\r\n    margin-bottom: 5px; /* Reduce space below the title */\r\n    line-height: 1.2;\r\n    \r\n}\r\n.header-divider {\r\n    border-top: 1px solid #eee;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.logoold {\r\n    max-width: 180px;\r\n    height: auto;\r\n}\r\n.logo {\r\n  max-width: 160px;\r\n  height: auto;\r\n  margin-top: 0;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  z-index: 2; /* Above watermark */\r\n}\r\n/* Metadata (Quote No, Date, etc.) */\r\n.meta-item {\r\n    font-size: 0.9em;\r\n    color: #666; /* Slightly greyed out for softer contrast */\r\n    margin: 3px 0; /* Tighten up the line spacing */\r\n    display: flex; /* Use flexbox to align the icon and text */\r\n    align-items: center;\r\n}\r\n/* Styling the icons for the Links India and Date lines */\r\n.meta-item .custom-icon {\r\n   \r\n    font-size: 1em;\r\n    color: #007bff; /* Use a brand color for the icons */\r\n    margin-right: 8px; /* Space between icon and text */\r\n    width: 14px; /* Give the icon a fixed width for alignment */\r\n    text-align: center;\r\n}\r\n/* Specific styling for the company/link name */\r\n.client-company .label {\r\n    font-weight: 400; /* Make the company name slightly bold */\r\n    color: #333;\r\n}\r\n/* Address Blocks */\r\n.block-title {\r\n    font-size: 1em;\r\n    color: #666;\r\n    text-transform: uppercase;\r\n    border-bottom: 1px solid #ddd;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n/* Table Styles */\r\n.item-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n}\r\n.item-table th, .item-table td {\r\n    padding: 8px 10px;\r\n    border-bottom: 1px solid #eee;\r\n    text-align: left;\r\n    font-size: 0.9em;\r\n}\r\n.item-table th {\r\n    background-color: #f8f8f8; /* Light grey header */\r\n    color: #333;\r\n    /* font-weight: bold; */\r\n    /* border-top: 2px solid #333;  */\r\n}\r\n/* Totals Summary Table */\r\n.summary-table {\r\n    margin-top: 30px;\r\n}\r\n.summary-table table {\r\n    width: 100%;\r\n    max-width: 300px; /* Keep total box narrow */\r\n}\r\n.summary-table th, .summary-table td {\r\n    padding: 5px 0;\r\n}\r\n.summary-table th {\r\n    text-align: left;\r\n    font-weight: 600;\r\n}\r\n.total-row th, .total-row td {\r\n    border-top: 2px solid #333;\r\n    font-size: 1.1em;\r\n    padding-top: 10px;\r\n}\r\n.total-row h4 {\r\n    font-weight: bold;\r\n    color: #000;\r\n}\r\n.notes-section {\r\n    font-size: 0.9em;\r\n}\r\n.footer-section {\r\n    margin-top: 50px;\r\n    padding-top: 20px;\r\n}\r\n.header-sectionold {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n.header-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px 0;\r\n  position: relative;\r\n  z-index: 5;\r\n  background: transparent;\r\n}\r\n/* Company logo */\r\n.logo {\r\n  max-width: 160px;\r\n  height: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: inline-block; /* ✅ allows vertical alignment */\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  z-index: 5;\r\n}\r\n.signature-line {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    border-top: 1px dashed #666;\r\n    padding-top: 5px;\r\n    width: 60%;\r\n    margin-left: 20%;\r\n    font-size: 0.85em;\r\n}\r\n/* Styling for the combined contact line */\r\n.contact-line {\r\n    font-size: 0.95em;\r\n    margin-bottom: 5px; /* Adjust spacing below the line */\r\n    color: #333;\r\n    /* Use flex or inline-block to ensure elements stay on one line */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n/* Style the contact person's name to stand out slightly */\r\n.contact-person {\r\n    font-weight: 600;\r\n    margin-right: 8px; /* Space before the separator */\r\n}\r\n/* Style the separator character (the '|' in this example) */\r\n.separator-icon {\r\n    font-weight: 400;\r\n    color: #666; /* Grey color for the separator */\r\n    margin: 0 8px; /* Space on both sides of the separator */\r\n}\r\n.small-box-separator {\r\n    display: inline-block; /* Make it behave like an inline element but with block properties */\r\n    width: 6px; /* Width of the box */\r\n    height: 6px; /* Height of the box */\r\n    background-color: #666; /* Color of the filled box */\r\n    border-radius: 1px; /* Slightly rounded corners */\r\n    margin: 0 8px; /* Space on both sides of the box */\r\n    flex-shrink: 0; /* Prevent the box from shrinking if space is tight */\r\n}\r\n/* Style the email address */\r\n.contact-email {\r\n    color: #007bff; /* Use a brand color for the email to make it clickable on screen */\r\n}\r\n.shipment-summary-section {\r\n  /* background-color: #e8f0df; light green tint like in screenshot */\r\n  padding: 8px 12px;\r\n  border-radius: 6px;\r\n  font-family: 'Segoe UI', sans-serif;\r\n  font-size: 13px;\r\n  /* color: #333; */\r\n  margin-bottom: 15px;\r\n}\r\n/* Align items in a row */\r\n.summary-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap; /* ensures responsiveness */\r\n}\r\n/* Each label-value pair inline */\r\n.summary-item {\r\n  flex: 1;\r\n  min-width: 160px;\r\n  margin: 2px 10px;\r\n  white-space: nowrap;\r\n}\r\n.label {\r\n  font-family: 'Segoe UI', sans-serif;\r\n  font-weight: 500;\r\n  color: #555;\r\n  margin-right: 4px;\r\n  \r\n}\r\n.value {\r\n  font-weight: 600;\r\n  color: #000;\r\n}\r\n.small {\r\n  font-size: 12px;\r\n  color: #555;\r\n}\r\n.second-row {\r\n  margin-top: 5px;\r\n}\r\n.summary-bar + .summary-bar {\r\n  margin-top: 8px; /* adjust to your liking (6–12px works well) */\r\n}\r\n.summary-item .labelseperator {\r\n   font-family: 'Segoe UI', sans-serif;\r\n    font-weight: 200;\r\n     color: #e7e2e2;\r\n    /* Remove 'display: block;' to keep it on the same line as the value */\r\n    margin-right: 5px; /* Add a little space between the label and the value */\r\n    text-transform: none; /* Turn off uppercase for the label if you want */\r\n    \r\n}\r\n.summary-item .value {\r\n    font-weight: 700;\r\n    color: #333;\r\n    text-transform: uppercase; /* Keep the data value uppercase */\r\n}\r\n.summary-item .labelheader {\r\n    font-weight: 300;\r\n    color: #333;\r\n    text-transform: uppercase; /* Keep the data value uppercase */\r\n   \r\n}\r\n.charge-header-row td {\r\n    /* Apply a dark, bold border only to the bottom */\r\n    border-bottom: 2px solid #333 !important; \r\n    \r\n    /* Ensure no background is applied */\r\n    background-color: transparent !important; \r\n    \r\n    padding-bottom: 8px; /* Extra spacing after the separator */\r\n}\r\n/* Ensure these rows don't get the default table stripe background */\r\ntr.charge-header-row {\r\n    background-color: transparent !important;\r\n}\r\n/* Adjustments for the multi-line Load Detail */\r\n.summary-item.load-details {\r\n    text-align: right;\r\n}\r\n.charge-group-divider {\r\n    /* Set a specific background color if you also want the row itself to stand out */\r\n    background-color: #f0f0f0; \r\n}\r\n/* Target the cells (<td>) within the separator row */\r\n.charge-group-divider td {\r\n    /* IMPORTANT: Override the default light border of the table rows */\r\n    border-bottom: 2px solid #333 !important; /* Thicker, dark border for emphasis */\r\n    padding-bottom: 10px; /* Optional: Add a bit of extra space below the separator */\r\n}\r\n.labelheader {\r\n    font-weight: 700; /* Bolder text */\r\n    color: #333; /* Darker color */\r\n      font-family: 'Segoe UI', sans-serif;\r\n    /* Add any other styling you want for the header text here */\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: white;\r\n}\r\n.quotation-wrapper {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  background: white;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n/* Screen watermark (faint, behind content) */\r\n.quotation-wrapper::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  width: 400px;\r\n  height: 400px;\r\n  background: url('Untitled-1.png') center center no-repeat;\r\n  background-size: contain;\r\n  opacity: 0.08;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 0;\r\n  pointer-events: none;\r\n}\r\n.quotation-content {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: transparent;\r\n}\r\n/* Hide the image watermark on screen */\r\n.watermark-print {\r\n  display: none;\r\n}\r\n@media print {\r\n   html, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: white;\r\n    -webkit-print-color-adjust: exact;\r\n    print-color-adjust: exact;\r\n  }\r\n   .header-section {\r\n    display: flex !important;\r\n    justify-content: space-between !important;\r\n    align-items: center !important;\r\n    position: relative !important;\r\n    z-index: 10 !important;\r\n    page-break-inside: avoid;\r\n  }\r\n\r\n  .logo {\r\n    max-width: 150px !important;\r\n    height: auto !important;\r\n    margin: 0 !important;\r\n    padding: 5px !important;\r\n    display: inline-block !important;\r\n    vertical-align: middle !important;\r\n  }\r\n  /* Hide the pseudo-element because browsers often skip it */\r\n  .quotation-wrapper::before {\r\n    display: none !important;\r\n  }\r\n\r\n\r\n  /* ✅ Watermark for print */\r\n  .watermark-print {\r\n    display: block !important;\r\n    position: fixed !important;\r\n    top: 50% !important;\r\n    left: 50% !important;\r\n    width: 300px !important;\r\n    height: 300px !important;\r\n    -webkit-transform: translate(-50%, -50%) scale(1) !important;\r\n            transform: translate(-50%, -50%) scale(1) !important;\r\n    opacity: 0.08 !important;\r\n    z-index: 0 !important;\r\n    pointer-events: none;\r\n  }\r\n\r\n  /* .quotation-content {\r\n    position: relative;\r\n    z-index: 1;\r\n  } */\r\n.quotation-container {\r\n    padding: 30px; /* Optional: for screen view, if needed */\r\n    max-width: 800px; /* Optional: for screen view */\r\n    margin: 0 auto;\r\n    background: #fff; /* Ensure white background */\r\n    font-family: Arial, sans-serif;\r\n}\r\n  /* Hide any navigation/buttons/etc. */\r\n  .no-print, nav, aside, footer:not(.footer-section) {\r\n    display: none !important;\r\n  }\r\n\r\n  /* @page {\r\n    size: A4 portrait;\r\n    margin: 12mm;\r\n  } */\r\n}\r\ntr.charge-group-divider {\r\n  background-color: #f9f9f9;     /* light background */\r\n  font-weight: bold;\r\n  border-top: 2px solid #ccc;\r\n}\r\n/* Ensure TOTAL values stay on one line */\r\ntr.charge-group-divider td {\r\n  white-space: nowrap;           /* no line breaks */\r\n  text-align: right;             /* align numbers to right */\r\n  vertical-align: middle;\r\n  font-size: 14px;\r\n}\r\n/* Make the 'TOTAL' text bold and centered */\r\ntr.charge-group-divider td:first-child {\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  color: #000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93cG9wcGFnZS9RdW90YXRpb24vcXVvdGUtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUU5Qyw4Q0FBOEM7QUFDOUM7RUFDRSxXQUFXLFFBQVEsd0NBQXdDO0VBQzNELFlBQVksT0FBTyxlQUFlO0VBQ2xDLGVBQWUsSUFBSSwyQkFBMkI7RUFDOUMscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFFLDBCQUEwQjtBQUNwRDtBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLDJDQUEyQztBQUMzQztFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBRSxnQ0FBZ0M7QUFDdkQ7QUFFQTtJQUNJLGtGQUFrRjtJQUNsRixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWEsRUFBRSx5Q0FBeUM7SUFDeEQsZ0JBQWdCLEVBQUUsOEJBQThCO0lBQ2hELGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSw0QkFBNEI7S0FDN0MsbUNBQW1DO0lBQ3BDLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksOEVBQThFO0tBQzdFLG1DQUFtQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBRSxvQkFBb0I7QUFDbEM7QUFDQSxvQ0FBb0M7QUFDcEM7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFLDRDQUE0QztJQUN6RCxhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DLGFBQWEsRUFBRSwyQ0FBMkM7SUFDMUQsbUJBQW1CO0FBQ3ZCO0FBRUEseURBQXlEO0FBQ3pEOztJQUVJLGNBQWM7SUFDZCxjQUFjLEVBQUUsb0NBQW9DO0lBQ3BELGlCQUFpQixFQUFFLGdDQUFnQztJQUNuRCxXQUFXLEVBQUUsOENBQThDO0lBQzNELGtCQUFrQjtBQUN0QjtBQUVBLCtDQUErQztBQUMvQztJQUNJLGdCQUFnQixFQUFFLHdDQUF3QztJQUMxRCxXQUFXO0FBQ2Y7QUFDQSxtQkFBbUI7QUFDbkI7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QixFQUFFLHNCQUFzQjtJQUNqRCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQixFQUFFLDBCQUEwQjtBQUNoRDtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCLEVBQUUsZ0NBQWdDO0VBQ3ZELHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQSwwQ0FBMEM7QUFDMUM7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUUsa0NBQWtDO0lBQ3RELFdBQVc7SUFDWCxpRUFBaUU7SUFDakUsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBLDBEQUEwRDtBQUMxRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBRSwrQkFBK0I7QUFDdEQ7QUFFQSw0REFBNEQ7QUFDNUQ7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFLGlDQUFpQztJQUM5QyxhQUFhLEVBQUUseUNBQXlDO0FBQzVEO0FBQ0E7SUFDSSxxQkFBcUIsRUFBRSxvRUFBb0U7SUFDM0YsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLHNCQUFzQixFQUFFLDRCQUE0QjtJQUNwRCxrQkFBa0IsRUFBRSw2QkFBNkI7SUFDakQsYUFBYSxFQUFFLG1DQUFtQztJQUNsRCxjQUFjLEVBQUUscURBQXFEO0FBQ3pFO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksY0FBYyxFQUFFLG1FQUFtRTtBQUN2RjtBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFFLDJCQUEyQjtBQUM5QztBQUVBLGlDQUFpQztBQUNqQztFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCOztBQUVuQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZSxFQUFFLDhDQUE4QztBQUNqRTtBQUNBO0dBQ0csbUNBQW1DO0lBQ2xDLGdCQUFnQjtLQUNmLGNBQWM7SUFDZixzRUFBc0U7SUFDdEUsaUJBQWlCLEVBQUUsdURBQXVEO0lBQzFFLG9CQUFvQixFQUFFLGlEQUFpRDs7QUFFM0U7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCLEVBQUUsa0NBQWtDO0FBQ2pFO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QixFQUFFLGtDQUFrQzs7QUFFakU7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCx3Q0FBd0M7O0lBRXhDLG9DQUFvQztJQUNwQyx3Q0FBd0M7O0lBRXhDLG1CQUFtQixFQUFFLHNDQUFzQztBQUMvRDtBQUVBLG9FQUFvRTtBQUNwRTtJQUNJLHdDQUF3QztBQUM1QztBQUNBLCtDQUErQztBQUMvQztJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUZBQWlGO0lBQ2pGLHlCQUF5QjtBQUM3QjtBQUVBLHFEQUFxRDtBQUNyRDtJQUNJLG1FQUFtRTtJQUNuRSx3Q0FBd0MsRUFBRSxzQ0FBc0M7SUFDaEYsb0JBQW9CLEVBQUUsMkRBQTJEO0FBQ3JGO0FBQ0E7SUFDSSxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbEMsV0FBVyxFQUFFLGlCQUFpQjtNQUM1QixtQ0FBbUM7SUFDckMsNERBQTREO0FBQ2hFO0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IseURBQTZFO0VBQzdFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtBQUN6QjtBQUVBLHVDQUF1QztBQUN2QztFQUNFLGFBQWE7QUFDZjtBQU1DO0dBQ0U7SUFDQyxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjtHQUNDO0lBQ0Msd0JBQXdCO0lBQ3hCLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztFQUNuQztFQUNBLDJEQUEyRDtFQUMzRDtJQUNFLHdCQUF3QjtFQUMxQjs7O0VBR0EsMEJBQTBCO0VBQzFCO0lBQ0UseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7RUFFQTs7O0tBR0c7QUFDTDtJQUNJLGFBQWEsRUFBRSx5Q0FBeUM7SUFDeEQsZ0JBQWdCLEVBQUUsOEJBQThCO0lBQ2hELGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSw0QkFBNEI7SUFDOUMsOEJBQThCO0FBQ2xDO0VBQ0UscUNBQXFDO0VBQ3JDO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBOzs7S0FHRztBQUNMO0FBRUE7RUFDRSx5QkFBeUIsTUFBTSxxQkFBcUI7RUFDcEQsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QjtBQUVBLHlDQUF5QztBQUN6QztFQUNFLG1CQUFtQixZQUFZLG1CQUFtQjtFQUNsRCxpQkFBaUIsY0FBYywyQkFBMkI7RUFDMUQsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3BvcHBhZ2UvUXVvdGF0aW9uL3F1b3RlLXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBCQVNFIFNUWUxFUyAoZm9yIFNjcmVlbiBhbmQgUHJpbnQpICAgICAgICAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogTWV0YSBpY29ucyAoYm90aCBpbWFnZXMgYW5kIGZvbnQgYXdlc29tZSkgKi9cclxuLm1ldGEtaWNvbiB7XHJcbiAgd2lkdGg6IDE2cHg7ICAgICAgIC8qIHNhbWUgc2l6ZSBmb3IgaW1hZ2VzIGFuZCBmb250IGljb25zICovXHJcbiAgaGVpZ2h0OiAxNnB4OyAgICAgIC8qIGZvciBpbWFnZXMgKi9cclxuICBmb250LXNpemU6IDE2cHg7ICAgLyogZm9yIGZvbnQtYXdlc29tZSBpY29ucyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiBhbGlnbnMgaWNvbiB3aXRoIHRleHQgKi9cclxufVxyXG5cclxuLyogU21hbGwgc3BhY2luZyBhZnRlciBpY29uICovXHJcbi5tcy0xIHtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4vKiBFbnN1cmUgZmxleGJveCBhbGlnbnMgaXRlbXMgdmVydGljYWxseSAqL1xyXG4ubWV0YS1pdGVtLCAuY29udGFjdC1saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIHZlcnRpY2FsIGNlbnRlciBpY29uICsgdGV4dCAqL1xyXG59XHJcblxyXG4ucXVvdGUtZGV0YWlscy1ibG9jayB7XHJcbiAgICAvKiBFbnN1cmVzIHRoZSBibG9jayBkb2Vzbid0IGNvbGxhcHNlIGFuZCBoZWxwcyB3aXRoIGFsaWdubWVudCB3aXRoaW4gdGhlIGNvbHVtbiAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbn1cclxuLnF1b3RhdGlvbi1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweDsgLyogT3B0aW9uYWw6IGZvciBzY3JlZW4gdmlldywgaWYgbmVlZGVkICovXHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4OyAvKiBPcHRpb25hbDogZm9yIHNjcmVlbiB2aWV3ICovXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7IC8qIEVuc3VyZSB3aGl0ZSBiYWNrZ3JvdW5kICovXHJcbiAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7ICovXHJcbn1cclxuXHJcbi5xdW90YXRpb24tdGl0bGUge1xyXG4gICAgLyogVXNlIGEgY2xlYXIsIGJvbGQgZm9udCBmb3IgdGhlIG1haW4gdGl0bGUsIGFkanVzdCBzaXplIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyIGVtOyBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgLyogUmVkdWNlIHNwYWNlIGJlbG93IHRoZSB0aXRsZSAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhZGVyLWRpdmlkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5sb2dvb2xkIHtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmxvZ28ge1xyXG4gIG1heC13aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjsgLyogQWJvdmUgd2F0ZXJtYXJrICovXHJcbn1cclxuLyogTWV0YWRhdGEgKFF1b3RlIE5vLCBEYXRlLCBldGMuKSAqL1xyXG4ubWV0YS1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjb2xvcjogIzY2NjsgLyogU2xpZ2h0bHkgZ3JleWVkIG91dCBmb3Igc29mdGVyIGNvbnRyYXN0ICovXHJcbiAgICBtYXJnaW46IDNweCAwOyAvKiBUaWdodGVuIHVwIHRoZSBsaW5lIHNwYWNpbmcgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IHRvIGFsaWduIHRoZSBpY29uIGFuZCB0ZXh0ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBTdHlsaW5nIHRoZSBpY29ucyBmb3IgdGhlIExpbmtzIEluZGlhIGFuZCBEYXRlIGxpbmVzICovXHJcbi5tZXRhLWl0ZW0gLmN1c3RvbS1pY29uIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjMDA3YmZmOyAvKiBVc2UgYSBicmFuZCBjb2xvciBmb3IgdGhlIGljb25zICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXHJcbiAgICB3aWR0aDogMTRweDsgLyogR2l2ZSB0aGUgaWNvbiBhIGZpeGVkIHdpZHRoIGZvciBhbGlnbm1lbnQgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3BlY2lmaWMgc3R5bGluZyBmb3IgdGhlIGNvbXBhbnkvbGluayBuYW1lICovXHJcbi5jbGllbnQtY29tcGFueSAubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgLyogTWFrZSB0aGUgY29tcGFueSBuYW1lIHNsaWdodGx5IGJvbGQgKi9cclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi8qIEFkZHJlc3MgQmxvY2tzICovXHJcbi5ibG9jay10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRhYmxlIFN0eWxlcyAqL1xyXG4uaXRlbS10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbS10YWJsZSB0aCwgLml0ZW0tdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uaXRlbS10YWJsZSB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyAvKiBMaWdodCBncmV5IGhlYWRlciAqL1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzOyAgKi9cclxufVxyXG5cclxuLyogVG90YWxzIFN1bW1hcnkgVGFibGUgKi9cclxuLnN1bW1hcnktdGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uc3VtbWFyeS10YWJsZSB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7IC8qIEtlZXAgdG90YWwgYm94IG5hcnJvdyAqL1xyXG59XHJcbi5zdW1tYXJ5LXRhYmxlIHRoLCAuc3VtbWFyeS10YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG4uc3VtbWFyeS10YWJsZSB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udG90YWwtcm93IHRoLCAudG90YWwtcm93IHRkIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi50b3RhbC1yb3cgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uaGVhZGVyLXNlY3Rpb25vbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhlYWRlci1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBDb21wYW55IGxvZ28gKi9cclxuLmxvZ28ge1xyXG4gIG1heC13aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyog4pyFIGFsbG93cyB2ZXJ0aWNhbCBhbGlnbm1lbnQgKi9cclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLnNpZ25hdHVyZS1saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM2NjY7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxufVxyXG4vKiBTdHlsaW5nIGZvciB0aGUgY29tYmluZWQgY29udGFjdCBsaW5lICovXHJcbi5jb250YWN0LWxpbmUge1xyXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIEFkanVzdCBzcGFjaW5nIGJlbG93IHRoZSBsaW5lICovXHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIC8qIFVzZSBmbGV4IG9yIGlubGluZS1ibG9jayB0byBlbnN1cmUgZWxlbWVudHMgc3RheSBvbiBvbmUgbGluZSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjb250YWN0IHBlcnNvbidzIG5hbWUgdG8gc3RhbmQgb3V0IHNsaWdodGx5ICovXHJcbi5jb250YWN0LXBlcnNvbiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7IC8qIFNwYWNlIGJlZm9yZSB0aGUgc2VwYXJhdG9yICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBzZXBhcmF0b3IgY2hhcmFjdGVyICh0aGUgJ3wnIGluIHRoaXMgZXhhbXBsZSkgKi9cclxuLnNlcGFyYXRvci1pY29uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzY2NjsgLyogR3JleSBjb2xvciBmb3IgdGhlIHNlcGFyYXRvciAqL1xyXG4gICAgbWFyZ2luOiAwIDhweDsgLyogU3BhY2Ugb24gYm90aCBzaWRlcyBvZiB0aGUgc2VwYXJhdG9yICovXHJcbn1cclxuLnNtYWxsLWJveC1zZXBhcmF0b3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBNYWtlIGl0IGJlaGF2ZSBsaWtlIGFuIGlubGluZSBlbGVtZW50IGJ1dCB3aXRoIGJsb2NrIHByb3BlcnRpZXMgKi9cclxuICAgIHdpZHRoOiA2cHg7IC8qIFdpZHRoIG9mIHRoZSBib3ggKi9cclxuICAgIGhlaWdodDogNnB4OyAvKiBIZWlnaHQgb2YgdGhlIGJveCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjsgLyogQ29sb3Igb2YgdGhlIGZpbGxlZCBib3ggKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDsgLyogU2xpZ2h0bHkgcm91bmRlZCBjb3JuZXJzICovXHJcbiAgICBtYXJnaW46IDAgOHB4OyAvKiBTcGFjZSBvbiBib3RoIHNpZGVzIG9mIHRoZSBib3ggKi9cclxuICAgIGZsZXgtc2hyaW5rOiAwOyAvKiBQcmV2ZW50IHRoZSBib3ggZnJvbSBzaHJpbmtpbmcgaWYgc3BhY2UgaXMgdGlnaHQgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGVtYWlsIGFkZHJlc3MgKi9cclxuLmNvbnRhY3QtZW1haWwge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7IC8qIFVzZSBhIGJyYW5kIGNvbG9yIGZvciB0aGUgZW1haWwgdG8gbWFrZSBpdCBjbGlja2FibGUgb24gc2NyZWVuICovXHJcbn1cclxuXHJcbi5zaGlwbWVudC1zdW1tYXJ5LXNlY3Rpb24ge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlOGYwZGY7IGxpZ2h0IGdyZWVuIHRpbnQgbGlrZSBpbiBzY3JlZW5zaG90ICovXHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAvKiBjb2xvcjogIzMzMzsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBBbGlnbiBpdGVtcyBpbiBhIHJvdyAqL1xyXG4uc3VtbWFyeS1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBlbnN1cmVzIHJlc3BvbnNpdmVuZXNzICovXHJcbn1cclxuXHJcbi8qIEVhY2ggbGFiZWwtdmFsdWUgcGFpciBpbmxpbmUgKi9cclxuLnN1bW1hcnktaXRlbSB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIG1hcmdpbjogMnB4IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIFxyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uc2Vjb25kLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zdW1tYXJ5LWJhciArIC5zdW1tYXJ5LWJhciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4OyAvKiBhZGp1c3QgdG8geW91ciBsaWtpbmcgKDbigJMxMnB4IHdvcmtzIHdlbGwpICovXHJcbn1cclxuLnN1bW1hcnktaXRlbSAubGFiZWxzZXBlcmF0b3Ige1xyXG4gICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgY29sb3I6ICNlN2UyZTI7XHJcbiAgICAvKiBSZW1vdmUgJ2Rpc3BsYXk6IGJsb2NrOycgdG8ga2VlcCBpdCBvbiB0aGUgc2FtZSBsaW5lIGFzIHRoZSB2YWx1ZSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIEFkZCBhIGxpdHRsZSBzcGFjZSBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgdGhlIHZhbHVlICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgLyogVHVybiBvZmYgdXBwZXJjYXNlIGZvciB0aGUgbGFiZWwgaWYgeW91IHdhbnQgKi9cclxuICAgIFxyXG59XHJcblxyXG4uc3VtbWFyeS1pdGVtIC52YWx1ZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAvKiBLZWVwIHRoZSBkYXRhIHZhbHVlIHVwcGVyY2FzZSAqL1xyXG59XHJcbi5zdW1tYXJ5LWl0ZW0gLmxhYmVsaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IC8qIEtlZXAgdGhlIGRhdGEgdmFsdWUgdXBwZXJjYXNlICovXHJcbiAgIFxyXG59XHJcbi5jaGFyZ2UtaGVhZGVyLXJvdyB0ZCB7XHJcbiAgICAvKiBBcHBseSBhIGRhcmssIGJvbGQgYm9yZGVyIG9ubHkgdG8gdGhlIGJvdHRvbSAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzMgIWltcG9ydGFudDsgXHJcbiAgICBcclxuICAgIC8qIEVuc3VyZSBubyBiYWNrZ3JvdW5kIGlzIGFwcGxpZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyAvKiBFeHRyYSBzcGFjaW5nIGFmdGVyIHRoZSBzZXBhcmF0b3IgKi9cclxufVxyXG5cclxuLyogRW5zdXJlIHRoZXNlIHJvd3MgZG9uJ3QgZ2V0IHRoZSBkZWZhdWx0IHRhYmxlIHN0cmlwZSBiYWNrZ3JvdW5kICovXHJcbnRyLmNoYXJnZS1oZWFkZXItcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogQWRqdXN0bWVudHMgZm9yIHRoZSBtdWx0aS1saW5lIExvYWQgRGV0YWlsICovXHJcbi5zdW1tYXJ5LWl0ZW0ubG9hZC1kZXRhaWxzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jaGFyZ2UtZ3JvdXAtZGl2aWRlciB7XHJcbiAgICAvKiBTZXQgYSBzcGVjaWZpYyBiYWNrZ3JvdW5kIGNvbG9yIGlmIHlvdSBhbHNvIHdhbnQgdGhlIHJvdyBpdHNlbGYgdG8gc3RhbmQgb3V0ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyBcclxufVxyXG5cclxuLyogVGFyZ2V0IHRoZSBjZWxscyAoPHRkPikgd2l0aGluIHRoZSBzZXBhcmF0b3Igcm93ICovXHJcbi5jaGFyZ2UtZ3JvdXAtZGl2aWRlciB0ZCB7XHJcbiAgICAvKiBJTVBPUlRBTlQ6IE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxpZ2h0IGJvcmRlciBvZiB0aGUgdGFibGUgcm93cyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzMgIWltcG9ydGFudDsgLyogVGhpY2tlciwgZGFyayBib3JkZXIgZm9yIGVtcGhhc2lzICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgLyogT3B0aW9uYWw6IEFkZCBhIGJpdCBvZiBleHRyYSBzcGFjZSBiZWxvdyB0aGUgc2VwYXJhdG9yICovXHJcbn1cclxuLmxhYmVsaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IC8qIEJvbGRlciB0ZXh0ICovXHJcbiAgICBjb2xvcjogIzMzMzsgLyogRGFya2VyIGNvbG9yICovXHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogQWRkIGFueSBvdGhlciBzdHlsaW5nIHlvdSB3YW50IGZvciB0aGUgaGVhZGVyIHRleHQgaGVyZSAqL1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5xdW90YXRpb24td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogU2NyZWVuIHdhdGVybWFyayAoZmFpbnQsIGJlaGluZCBjb250ZW50KSAqL1xyXG4ucXVvdGF0aW9uLXdyYXBwZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9VbnRpdGxlZC0xLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBvcGFjaXR5OiAwLjA4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5xdW90YXRpb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGltYWdlIHdhdGVybWFyayBvbiBzY3JlZW4gKi9cclxuLndhdGVybWFyay1wcmludCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIFxyXG5cclxuXHJcblxyXG4gQG1lZGlhIHByaW50IHtcclxuICAgaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XHJcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xyXG4gIH1cclxuICAgLmhlYWRlci1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMCAhaW1wb3J0YW50O1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIEhpZGUgdGhlIHBzZXVkby1lbGVtZW50IGJlY2F1c2UgYnJvd3NlcnMgb2Z0ZW4gc2tpcCBpdCAqL1xyXG4gIC5xdW90YXRpb24td3JhcHBlcjo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuICAvKiDinIUgV2F0ZXJtYXJrIGZvciBwcmludCAqL1xyXG4gIC53YXRlcm1hcmstcHJpbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC4wOCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiAucXVvdGF0aW9uLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9ICovXHJcbi5xdW90YXRpb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7IC8qIE9wdGlvbmFsOiBmb3Igc2NyZWVuIHZpZXcsIGlmIG5lZWRlZCAqL1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDsgLyogT3B0aW9uYWw6IGZvciBzY3JlZW4gdmlldyAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyAvKiBFbnN1cmUgd2hpdGUgYmFja2dyb3VuZCAqL1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbiAgLyogSGlkZSBhbnkgbmF2aWdhdGlvbi9idXR0b25zL2V0Yy4gKi9cclxuICAubm8tcHJpbnQsIG5hdiwgYXNpZGUsIGZvb3Rlcjpub3QoLmZvb3Rlci1zZWN0aW9uKSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvKiBAcGFnZSB7XHJcbiAgICBzaXplOiBBNCBwb3J0cmFpdDtcclxuICAgIG1hcmdpbjogMTJtbTtcclxuICB9ICovXHJcbn1cclxuIFxyXG50ci5jaGFyZ2UtZ3JvdXAtZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgICAgIC8qIGxpZ2h0IGJhY2tncm91bmQgKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2NjYztcclxufVxyXG5cclxuLyogRW5zdXJlIFRPVEFMIHZhbHVlcyBzdGF5IG9uIG9uZSBsaW5lICovXHJcbnRyLmNoYXJnZS1ncm91cC1kaXZpZGVyIHRkIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAgICAgICAgICAgLyogbm8gbGluZSBicmVha3MgKi9cclxuICB0ZXh0LWFsaWduOiByaWdodDsgICAgICAgICAgICAgLyogYWxpZ24gbnVtYmVycyB0byByaWdodCAqL1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHRoZSAnVE9UQUwnIHRleHQgYm9sZCBhbmQgY2VudGVyZWQgKi9cclxudHIuY2hhcmdlLWdyb3VwLWRpdmlkZXIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/windowpoppage/Quotation/quote-sea-print.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/windowpoppage/Quotation/quote-sea-print.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuoteSeaPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSeaPrintComponent", function() { return QuoteSeaPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuoteSeaPrintComponent = /** @class */ (function () {
    function QuoteSeaPrintComponent(_dataService, _loaderService, _router, http, _route, _loginService) {
        this._dataService = _dataService;
        this._loaderService = _loaderService;
        this._router = _router;
        this.http = http;
        this._route = _route;
        this._loginService = _loginService;
        this.companyLogoUrl = 'assets/logo.png';
        this.quotmastertable = [];
        this.quotdtltable = [];
    }
    QuoteSeaPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.quotationno = params["quotno"];
            console.log(_this.quotationno);
            // this.incoterm="EXWOP"
            // this.shipmenttype="EXPORT"
            // this.containerloadtype='LCL/FCL'
            _this.getDataforPrint();
        });
    };
    QuoteSeaPrintComponent.prototype.getDataforPrint = function () {
        var _this = this;
        var json = { QUOTCODE: this.quotationno };
        this._dataService.getData("Master/MASTER_QUOTATION_PRINT", json)
            .subscribe(function (data) {
            console.log(data);
            _this.quotmastertable = data.Table;
            _this.quotno = data.Table[0].QUOT_CODE;
            console.log(data.Table[0].QUOT_CODE);
            _this.quotdate = data.Table[0].QUOT_DATE;
            _this.quotdate = _this.convertDateToHyphenFormat(_this.quotdate);
            _this.validupto = data.Table[0].VALIDUPTO;
            _this.validupto = _this.convertDateToHyphenFormat(_this.validupto);
            _this.cmpname = data.Table[0].CMP_NAME;
            _this.cmpimage = "assets/img/Untitled-1.png"; // + data.Table[0].CMP_IMAGE;
            _this.clientemail = data.Table[0].EMAIL;
            _this.quotdtltable = data.Table1;
            _this.contactperson = data.Table[0].CONTACT_PERSON;
            _this.pickup = '';
            _this.pol = data.Table[0].POL;
            _this.pod = data.Table[0].POD;
            _this.shipmode = data.Table[0].SHIP_MODE;
            _this.ocean = data.Table[0].LINER_NAME;
            _this.shipmenttype = data.Table[0].SHIP_TYPE;
            _this.containerloadtype = data.Table[0].CONTLOADTYPE;
            _this.incoterm = data.Table[0].INCOTERM;
        });
        console.log(this.quotno);
        this._loaderService.display(false);
    };
    // Function to trigger the browser's print dialog
    QuoteSeaPrintComponent.prototype.printDocument = function () {
        window.print();
    };
    QuoteSeaPrintComponent.prototype.convertDateToHyphenFormat = function (dateString) {
        if (!dateString) {
            return ''; // Handle null or empty input
        }
        // 1. Split the string by the '/' separator.
        var parts = dateString.split('/');
        // Check if we have three parts (DD, MM, YYYY)
        if (parts.length === 3) {
            // 2. Join the parts using the '-' separator.
            // The order (parts[0]=DD, parts[1]=MM, parts[2]=YYYY) remains the same.
            return parts.join('-');
        }
        // Return the original string if the format is unexpected
        return dateString;
    };
    QuoteSeaPrintComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteSeaPrintComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteSeaPrintComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteSeaPrintComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuoteSeaPrintComponent.prototype, "companyLogoUrl", void 0);
    QuoteSeaPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salesquotation-print',
            template: __webpack_require__(/*! raw-loader!./quote-sea-print.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/Quotation/quote-sea-print.component.html"),
            styles: [__webpack_require__(/*! ./quote-print.component.css */ "./src/app/windowpoppage/Quotation/quote-print.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], QuoteSeaPrintComponent);
    return QuoteSeaPrintComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/export/calculatecbm-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/windowpoppage/export/calculatecbm-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: CalCbmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalCbmViewComponent", function() { return CalCbmViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalCbmViewComponent = /** @class */ (function () {
    function CalCbmViewComponent(_route, _dataService, _loginService) {
        this._route = _route;
        this._dataService = _dataService;
        this._loginService = _loginService;
        this.chkcbm = "";
        this.length = "";
        this.width = "";
        this.height = "";
        this.pkgs = "";
        this.calcbm = "";
        this.cm_val = "";
        this.inch_val = "";
        this.tot_val = "";
        this.m_tot_val = "";
        this.tot_cbm_val = "";
        this.cbm = "";
    }
    CalCbmViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.exptno = params["exptno"];
        });
    };
    CalCbmViewComponent.prototype.fn_CalCBM = function () {
        if (Math.abs(this.length) == 0) {
            alert("Please enter length !");
            return false;
        }
        if (Math.abs(this.width) == 0) {
            alert("Please enter Width !");
            return false;
        }
        if (Math.abs(this.height) == 0) {
            alert("Please enter height");
            return false;
        }
        if (Math.abs(this.pkgs) == 0) {
            alert("Please enter Pkgs.");
            return false;
        }
        //INCH = 1 AND CM = 2
        if (this.chkcbm == "1") {
            //INCH = 1
            this.cm_val = this.cm_val + (2.54 * this.length) * (2.54 * this.width) * (2.54 * this.height) * (2.54 * this.pkgs);
        }
        else if (this.chkcbm == "2") {
            //CM = 1
            this.inch_val = this.inch_val + (this.length * this.width * this.height * this.pkgs);
        }
        this.tot_val = this.cm_val + this.inch_val;
        this.tot_val = this.tot_val / 1000000;
        this.m_tot_val = this.m_tot_val + this.tot_val;
        this.cbm = Math.round(this.m_tot_val * 10000) / 10000;
        return this.cbm;
    };
    CalCbmViewComponent.prototype.fun_clear = function () {
        this.length = "";
        this.width = "";
        this.height = "";
        this.pkgs = "";
        this.cbm = "";
    };
    CalCbmViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    CalCbmViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-calcbm-view',
            template: "\n                <table class=\"table table-bordered table-sm-new\" >\n                <tr class=\"trheader\">\n                        <th colspan=\"2\">\n                                <span class=\"col-form-span-label\">\n                                        CALCULATE CBM \n                                </span>\n                        </th>\n                </tr>\n                <tr>\n                        <td>\n                            <table class=\"table table-bordered table-sm-new\" >\n                                <tr>\n                                        <td><span class=\"col-form-span-label\"> INCH </span></td>\n                                        <td><span class=\"col-form-span-label\"> CM </span></td>\n                                        <td><span class=\"col-form-span-label\"> LENGTH</span></td>\n                                        <td><span class=\"col-form-span-label\"> WIDTH</span></td>\n                                        <td><span class=\"col-form-span-label\"> HEIGHT</span></td>\n                                        <td><span class=\"col-form-span-label\"> PKGS.</span></td>\n                                        <td><span class=\"col-form-span-label\"> TOTAL CBM</span></td>\n                                </tr>\n                                <tr>\n                                        <td class=\"col-form-span-label\"  >\n                                                <input type=\"radio\" name=\"radiogroupS\" value='1' [(ngModel)]=\"chkcbm\" >\n                                        </td>\n                                        <td class=\"col-form-span-label\"  >\n                                                <input type=\"radio\" name=\"radiogroupS\" value='2' [(ngModel)]=\"chkcbm\" >\n                                        </td>\n                                        <td>\n                                                <input type=\"text\" [(ngModel)]=\"length\" class=\"form-control width80\" />\n                                        </td>\n                                        <td>\n                                                <input type=\"text\" [(ngModel)]=\"width\" class=\"form-control width80\" />\n                                        </td>\n                                        <td>\n                                                <input type=\"text\" [(ngModel)]=\"height\" class=\"form-control width80\" />\n                                        </td>\n                                        <td>\n                                                <input type=\"text\" [(ngModel)]=\"pkgs\" class=\"form-control width80\" />\n                                        </td>\n                                        <td>\n                                                <input type=\"text\" [(ngModel)]=\"cbm\" class=\"form-control width80\" />\n                                        </td>\n                                    \n                                </tr>\t\n                            </table>\n\n                        </td>\n                </tr>\n                \n                <tr class=\"trbg centerlabel\">\n                        <td colspan=\"2\">\n                                <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"fn_CalCBM();\">\n                                  <span class=\"col-form-span-label\">\n                                    <i class=\"fa fa-save\"></i>CalculateCBM</span>\n                          \n                                </button>&nbsp;\n                                <button type=\"button\" name=\"cancelAddedCustomClr\" class=\"btn btn-sm btn-warning\" (click)=\"fun_clear();\" >\n                                        <span class=\"col-form-span-label\">\n                                                <i class=\"fa fa-undo\"></i>&nbsp;Clear</span>\n                                </button>&nbsp;\n                                 \n                        </td>\n                </tr>\n            </table>\n        "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], CalCbmViewComponent);
    return CalCbmViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/export/chronology-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/windowpoppage/export/chronology-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChronologyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChronologyViewComponent", function() { return ChronologyViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChronologyViewComponent = /** @class */ (function () {
    function ChronologyViewComponent(_dataService, _loginService, _toasterService, _route) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._route = _route;
        this.cartingData = [];
        this.cargoRecdData = [];
        this.destDocData = [];
    }
    ChronologyViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.exptno = params["exptno"];
            _this.setChronologyData(params["exptno"]);
        });
    };
    ChronologyViewComponent.prototype.setChronologyData = function (exptno) {
        var _this = this;
        var _jsonData = {
            Type1: exptno,
            Type2: this._loginService.getLogin()[0].CMPCODE,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.Common("Export/ConsignmentChronologyView", _jsonData)
            .subscribe(function (data) {
            //console.log(data);
            _this.chronData = (data.Table[0] != undefined) ? data.Table[0] : null;
            _this.cartingData = data.Table1;
            _this.cargoRecdData = data.Table2;
            _this.destDocData = (data.Table3 != undefined) ? data.Table3 : [];
        }, function (error) { _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText); }, function () { });
        var _jsonData1 = {
            Type1: exptno,
            Type2: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.Common("Export/ConsignmentView", _jsonData1)
            .subscribe(function (data) {
            _this.deliveryData = data.Table3;
            _this.loadTrans = {
                EXPT_LOAD_DATE: data.Table2[0].LOADDT,
                EXPT_LOAD1_DATE: data.Table2[0].PORT1LOADDT,
                EXPT_LOAD2_DATE: data.Table2[0].PORT2LOADDT,
                EXPT_TRANSPORT1: data.Table2[0].TRANSPORT1,
                EXPT_TRANSPORT2: data.Table2[0].TRANSPORT2
            };
        }, function (error) { _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText); }, function () { });
    };
    ChronologyViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    ChronologyViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-chronology-view',
            template: "\n            \t\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"col-form-span-heading centerlabel\" colspan=\"6\">CONSIGNMENT DETAILS (CHRONOLOGY)</td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">EXPORT NO </span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{exptno}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Doc Recd. Date </span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_DOCRECD}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Approval Received on</span> </td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{chronData?.EXPTAPPDT}}</span></td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Approved by </span> </td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{chronData?.EXPTAPPWM}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\"><span class=\"col-form-span-label\">CARGO RECEIPT DETAILS: </span> </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\">\n                                        <table class=\"table table-bordered table-striped table-sm-new\">\n\t\t\t\t\t\t\t                <tbody>\n\t\t\t\t\t\t\t\t                <tr>\n                                                    <th><span class=\"col-form-span-label\">No of Pkgs</span> </th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">Recd Date</span></th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">Recd Where</span></th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">Recd Locally</span></th>\n                                                </tr>\n\t\t\t\t\t\t\t\t                <tr *ngFor=\"let obj of cargoRecdData\">\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span> </td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.RECDDATE}}</span></td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.RECDWHERE}}</span> </td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.RECDLOCAL}}</span></td>\n\t\t\t\t\t\t\t\t                </tr>\n\t\t\t\t\t\t\t\t            </tbody>\n\t\t\t\t\t\t\t            </table>\n                                    </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Shipping Bill No. </span> </td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{chronData?.EXPT_SHIPBILLNO}}</span></td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Shipping Bill Date </span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{chronData?.EXPT_SHIPBILLDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Custom Cleared On </span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_SHIPCUSTOM}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"chronData?.EXPT_MODE != 'SEA'\">\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Carted Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.CARTEDDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"chronData?.EXPT_MODE == 'SEA'\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <th  class=\"col-form-span-heading\" colspan=\"4\"><span class=\"col-form-span-label\">Carting Details</span></th>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\">\n                                        <table class=\"table table-bordered table-sm-new\">\n\t\t\t\t\t\t\t                <tbody>\n\t\t\t\t\t\t\t\t                <tr class=\"col-form-span-heading\">\n                                                    <th><span class=\"col-form-span-label\">Carting Date</span> </th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">No.of Packages</span></th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">Remark</span></th>\n                                                </tr>\n\t\t\t\t\t\t\t\t                <tr *ngFor=\"let obj of cartingData\">\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.CARTEDON}}</span> </td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.NOOFPKG}}</span></td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.REMARK}}</span> </td>\n\t\t\t\t\t\t\t\t                </tr>\n\t\t\t\t\t\t\t\t            </tbody>\n\t\t\t\t\t\t\t            </table>\n                                     </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new  bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Out - Of - Charge date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.OUTCHARGEDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"chronData?.EXPT_MODE == 'SEA'\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">Container Loading at Origin Confirmation Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">{{loadTrans?.EXPT_LOAD_DATE}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"chronData?.EXPT_MODE == 'SEA'\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">E.T.D. (SCHEDULED)</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.VSL_ETD}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">SAILED ON (ACTUAL)</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.VSL_ETD1}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"chronData?.EXPT_MODE == 'SEA'\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"loadTrans?.EXPT_TRANSPORT1 != ''\">\n\t\t\t\t\t\t\t\t\t <td  colspan=\"3\"><span class=\"col-form-span-label\">Container Loading at Transhipment Port1 Confirmation Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">{{loadTrans?.EXPT_LOAD1_DATE}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"loadTrans?.EXPT_TRANSPORT2 != ''\">\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">Container Loading at Transhipment Port2 Confirmation Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">{{loadTrans?.EXPT_LOAD2_DATE}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"chronData?.EXPT_MODE != 'SEA'\">\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Flight Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.FLIGHTDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">EP Copy Recd Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EPCOPYDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">EP Copy Sent to Client Date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EPCOPYSENTDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Prealert sent on</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.txtPrealertDate}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"destDocData.length > 0\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <th colspan=\"4\"><span class=\"col-form-span-label\">DESTINATION DOCUMENTS RECEIVED :</span></th>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\">\n                                        <table class=\"table table-bordered table-sm-new bgwhite\">\n\t\t\t\t\t\t\t                <tbody>\n\t\t\t\t\t\t\t\t                <tr class=\"col-form-span-heading\">\n                                                    <th><span class=\"col-form-span-label\"></span> </th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">List Of Documents</span></th>\n\t\t\t\t\t\t\t\t\t                <th><span class=\"col-form-span-label\">Recd. Date</span></th>\n                                                </tr>\n\t\t\t\t\t\t\t\t                <tr *ngFor=\"let obj of destDocData\">\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.ID}}</span> </td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.DOCUMENT}}</span></td>\n\t\t\t\t\t\t\t\t\t                <td><span class=\"col-form-span-label\">{{obj.RECDDT}}</span> </td>\n\t\t\t\t\t\t\t\t                </tr>\n\t\t\t\t\t\t\t\t            </tbody>\n\t\t\t\t\t\t\t            </table>\n                                     </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <table class=\"table table-bordered table-sm-new bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"destDocData.length > 0\">\n\t\t\t\t\t\t\t\t\t <th colspan=\"4\"><span class=\"col-form-span-label\">DOCUMENT SENT TO CONSIGNEE :</span></th>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"destDocData.length > 0\">\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Date.</span> </td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{chronData?.DOCSENTDT}}</span></td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Courier No.</span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{chronData?.COURIERNO}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr *ngIf=\"destDocData.length > 0\">\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Remark</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.DESTDOCRMK}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Actual Arrival date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_ACT_ARRIVAL_DATE}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Delivery given date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\" *ngFor=\"let obj of deliveryData\">{{chronData?.ACTUALDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">CC No.</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_SHIPCCNO}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Marks & Numbers</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.MARKS_NUMBERS}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Quota validate date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_QUOTAVALIDDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Quota obtain date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_QUOTAOBTAINDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\">Quota expiry date</span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{chronData?.EXPT_QUOTAEXPIRYDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n        "
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ChronologyViewComponent);
    return ChronologyViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/export/clp-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/windowpoppage/export/clp-view.component.ts ***!
  \************************************************************/
/*! exports provided: CLPViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLPViewComponent", function() { return CLPViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CLPViewComponent = /** @class */ (function () {
    function CLPViewComponent(_dataService, _loginService, _toasterService, _route, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._route = _route;
        this._loaderService = _loaderService;
        this.setData = [];
        this.destPortData = [];
        this.detailsData = [];
    }
    CLPViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.setCLPData(params["containerno"], params["vessel"], params["exptno"]);
        });
    };
    CLPViewComponent.prototype.setCLPData = function (containerno, vessel, exptno) {
        var _this = this;
        var _jsonData = {
            Type1: containerno,
            Type2: vessel,
            Type3: exptno,
            Type4: this._loginService.getLogin()[0].CMPCODE,
            Type5: this._loginService.getLogin()[0].CITYCODE
        };
        this._loaderService.display(true);
        this._dataService.Common("Export/ConsignmentCLPView", _jsonData)
            .subscribe(function (data) {
            _this.setData = data.Table[0];
            _this.destPortData = data.Table1;
            _this.detailsData = data.Table2;
            _this._loaderService.display(false);
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
            _this._loaderService.display(false);
        }, function () { });
    };
    CLPViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    CLPViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-clp-view',
            template: "\n            \t\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"col-form-span-heading centerlabel\" colspan=\"4\">CONSIGNMENT DETAILS (CLP) </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\" rowspan=\"3\"><span class=\"col-form-span-label\"><strong>Origin Vessel Details</strong> </span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.VSL_NAME}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\"><strong>Voyage: </strong> {{setData?.VSL_VOYNO}} </span>&nbsp;&nbsp;\n                                        <span class=\"col-form-span-label\"><strong>ETD: </strong>{{setData?.VSL_ETD}} </span>\n                                    </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\"><strong>Loading Port: </strong>{{setData?.LOADING_PORT}} </span>&nbsp;&nbsp;\n                                        <span class=\"col-form-span-label\"><strong>Origin City: </strong> {{setData?.ORIGIN_CITY}}</span>\n                                    </td>\n                                  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\"><span class=\"col-form-span-label\"><strong>Container Loading at Origin Conformation Date :</strong> {{setData?.LOADDT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr *ngIf=\"setData?.IS_VSLDELAY == 'Y'\">\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\"><span class=\"col-form-span-label red\">VESSEL DELAYED</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\" *ngIf=\"setData?.DIRECTVSL == 'YES'\"><strong>Direct Vessel</strong></span>\n                                        <span class=\"col-form-span-label\" *ngIf=\"setData?.DIRECTVSL != 'YES'\"><strong>Transhipment Vessel</strong></span>\n                                    </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\" class=\"col-form-span-label\"><strong>TRANSHIPMENT DETAILS</strong></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Name of The Port #1 </strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.TRAN_PORT1}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\" rowspan=\"3\"><span class=\"col-form-span-label\"><strong>Vessel #1 Details</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.TRAN1_VSL_NAME}}&nbsp;</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\"><strong>Voyage:</strong> {{setData?.VSL_VOYNO1}}</span>&nbsp;&nbsp;\n                                        <span class=\"col-form-span-label\"><strong>ETD: </strong>{{setData?.ETD1}}</span>\n                                    </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\"><strong>ETA: </strong>{{setData?.ETA1}}</span>&nbsp;&nbsp;\n                                    </td>\n                                  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\" class=\"col-form-span-label\"><strong>Container Loading at Port #1 Conformation Date :</strong> {{setData?.LOADDT1}} </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Name of The Port #2</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.TRAN_PORT2}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\" rowspan=\"3\"><span class=\"col-form-span-label\"><strong>Vessel #2 Details</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.TRAN2_VSL_NAME}}&nbsp;</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\"><strong>Voyage: </strong>{{setData?.VSL_VOYNO2}}</span>&nbsp;&nbsp;\n                                        <span class=\"col-form-span-label\"><strong>ETD:</strong> {{setData?.ETD2}} </span>\n                                    </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\">\n                                        <span class=\"col-form-span-label\"><strong>ETA: </strong>{{setData?.ETA2}}</span>&nbsp;&nbsp;\n                                    </td>\n                                  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td colspan=\"4\" class=\"col-form-span-label\"><strong>Container Loading at Port #2 Conformation Date : </strong>{{setData?.LOADDT2}}</td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Shipping Line</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.LINER_NAME}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Vessel Agent</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.AGENT_NAME}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Container No.</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.CONTAINERNO}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Container Size</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.CONTAINER_SIZE}}</span></td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Status of Container</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.CONTAINERSTATUS}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Destination Port</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.DESTPORT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr *ngIf=\"destPortData.length > 0\">\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\" *ngFor=\"let obj of destPortData\">{{obj.DESTPORT1}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Steamer Agent Seal no.</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.AGTSEALNO}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\">\n                                        <span class=\"col-form-span-label\" *ngIf=\"setData?.HSTUFFED != 'YES'\"><strong>Stuffed At</strong></span>\n                                        <span class=\"col-form-span-label\" *ngIf=\"setData?.HSTUFFED == 'YES'\"><strong>H. Stuffed At</strong></span>\n                                     </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.STUFF_WHERE}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Custom Seal no.</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.CUSTSEALNO}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Freight Type</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.FREIGHT}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Freight</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.FREIGHT_CUR}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>BAF</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.BAF_CUR}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.THCNAME}}</span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.THC_CUR}}</span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.OTHERNAME}}</span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.OTHERCUR}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Remark</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.REMARK}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n                            <div class=\"row xscroll\">\n                                <table class=\"table table-bordered table-striped table-sm-new\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width130 centerlabel\"><span class=\"col-form-span-label\"></span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">CURRENCY</span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width75 centerlabel\"><span class=\"col-form-span-label\">VALUE</span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">CURRENCY</span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width10 centerlabel\"><span class=\"col-form-span-label\"></span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width75 centerlabel\"><span class=\"col-form-span-label\">VALUE</span></th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width130\"><span class=\"col-form-span-label\"><strong>ORIGIN PORT</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.OCUR1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-OCURRATE1\">{{setData?.OCURRATE1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.OCUR2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width10 centerlabel\"><span class=\"col-form-span-label\">=</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-label\">{{setData?.OCURRATE2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width130\"><span class=\"col-form-span-label\"><strong>DEST. PORT</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.DCUR1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-label\">{{setData?.DCURRATE1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.DCUR2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width10 centerlabel\"><span class=\"col-form-span-label\">=</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-label\">{{setData?.DCURRATE2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t</table>\n                              </div>\n                                <table class=\"table table-bordered table-sm-new\" *ngIf=\"detailsData.length > 0\">\n\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t\t        <tr>\n\t\t\t\t\t\t\t\t\t        <td class=\"width150 col-form-span-heading centerlabel\" colspan=\"10\">Consignment Details.</td>\n\t\t\t\t\t\t\t\t        </tr>\n\t\t\t\t\t\t\t\t\t    <tr class=\"col-form-span-heading\">\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Export No.</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Shipper</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Consignee</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">No.Of Pcs</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">No.Of Pkgs</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Gr. Wt.</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Net Wt.</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">CBM</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Order No</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">CLP Seq.</span></th>\n\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t        <tbody>\n                                        <ng-container *ngFor=\"let obj of detailsData\">\n\t\t\t\t\t\t\t\t            <tr [ngClass]=\"(obj.IS_SAME_JOB=='Y')?'bghighlightblue':'default'\">\n\t\t\t\t\t\t\t\t\t            <td rowspan=\"3\"><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.EXPORTER}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.CONSIGNEE}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.NETWT}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.ORDERNO}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.CLPSEQUENCE}}</span></td>\n\t\t\t\t\t\t\t\t            </tr>\n\t\t\t\t\t\t\t\t            <tr [ngClass]=\"(obj.IS_SAME_JOB=='Y')?'bghighlightblue':'default'\">\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\"><strong>Description</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td colspan=\"8\"><div class=\"col-form-span-label\" [innerHTML]=\"obj.ITC_DESC\"></div></td>\n\t\t\t\t\t\t\t\t            </tr>\n\t\t\t\t\t\t\t\t            <tr [ngClass]=\"(obj.IS_SAME_JOB=='Y')?'bghighlightblue':'default'\">\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\"><strong>FCR No.</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.FCR_NO}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\"><strong>FCR Date.</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t    <td colspan=\"8\"><span class=\"col-form-span-label\">{{obj.FCR_DATE}}</span></td>\n\t\t\t\t\t\t\t\t            </tr>\n                                        </ng-container>\n                                    <tbody>\n\t\t\t\t\t\t\t    </table>\n                                <table class=\"table table-bordered table-striped table-sm-new\">\n\t\t\t\t\t\t\t       <tbody>\n\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t\t     <td class=\"col-form-span-label centerlabel red\" colspan=\"4\">\n                                            <strong *ngIf=\"setData?.VERIFIED == 'Y'\">VERIFIED</strong>\n                                            <strong *ngIf=\"setData?.VERIFIED != 'Y'\">NOT VERIFIED</strong>\n                                        </td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr *ngIf=\"setData?.VERIFIED == 'Y'\">\n\t\t\t\t\t\t\t\t\t     <td class=\"col-form-span-label centerlabel red\" colspan=\"4\">   \n                                            <strong *ngIf=\"setData?.LOADDT != 'Y'\">LOADING CONFIRMATION DONE</strong>  \n                                            <strong *ngIf=\"setData?.LOADDT == 'Y'\">LOADING CONFIRMATION NOT DONE</strong>\n                                        </td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t\t\t     <td class=\"col-form-span-label centerlabel\" colspan=\"4\"></td>\n\t\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t    </table>\n        "
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], CLPViewComponent);
    return CLPViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/export/invoice-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/windowpoppage/export/invoice-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: InvoiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsComponent", function() { return InvoiceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceDetailsComponent = /** @class */ (function () {
    function InvoiceDetailsComponent(_dataService, _loginService, _toasterService, _route, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._route = _route;
        this._loaderService = _loaderService;
        this.itcData = [];
        this.exptno = this.exptno;
    }
    InvoiceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.exptno = params["exptno"];
            _this.setInvoiceData(params["exptno"]);
        });
    };
    InvoiceDetailsComponent.prototype.setInvoiceData = function (exptno) {
        var _this = this;
        var _jsonData = {
            Type1: exptno,
            Type2: this._loginService.getLogin()[0].CMPCODE,
            Type3: this._loginService.getLogin()[0].CITYCODE
        };
        this._loaderService.display(true);
        this._dataService.Common("Export/ConsignmentInvoiceView", _jsonData)
            .subscribe(function (data) {
            _this.invData = (data.Table[0] != undefined) ? data.Table[0] : null;
            _this.itcData = data.Table1;
            _this._loaderService.display(false);
        }, function (error) { _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText); _this._loaderService.display(false); }, function () { });
    };
    InvoiceDetailsComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    InvoiceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-invoice-view',
            template: __webpack_require__(/*! raw-loader!./invoice-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/export/invoice-details.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], InvoiceDetailsComponent);
    return InvoiceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/export/order-size-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/windowpoppage/export/order-size-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExportConsignmentOrderSizeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportConsignmentOrderSizeDetailComponent", function() { return ExportConsignmentOrderSizeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common-font-changer.directive */ "./src/app/shared/common-font-changer.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExportConsignmentOrderSizeDetailComponent = /** @class */ (function () {
    function ExportConsignmentOrderSizeDetailComponent(_dataService, _toasterService, _disable, _loginService, _route) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._disable = _disable;
        this._loginService = _loginService;
        this._route = _route;
        this.TransferJobList = [];
        this.paramData = { orderno: null, styleno: null, exptno: null, concode: null };
        this.OrderSizeList = [];
        this.OldJobNo = '';
        this.Branch = null;
        this.BranchList = [];
        this.UserRemarks = '';
        this.CNT_TYPE = "";
        this.ErrorMessage = '';
    }
    ExportConsignmentOrderSizeDetailComponent.prototype.ngAfterViewInit = function () {
        console.log(this.submitButton.nativeElement);
    };
    ExportConsignmentOrderSizeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.paramData = {
                orderno: params["orderno"],
                styleno: params["styleno"],
                exptno: params["exptno"],
                concode: params["concode"]
            };
            _this.pageLoad(_this.paramData);
        });
    };
    ExportConsignmentOrderSizeDetailComponent.prototype.pageLoad = function (paramData) {
        var _this = this;
        //  this._disable.disableButton(this.submitButton);
        var _jsonData = {
            orderno: paramData.orderno,
            styleno: paramData.styleno,
            exptno: paramData.exptno,
            concode: paramData.concode
        };
        this._dataService.getData("Export/OrderSizeDetailsList", _jsonData)
            .subscribe(function (data) {
            _this.OrderSizeList = data.Table;
            _this.CNT_TYPE = data.Table[0].CNT_TYPE;
            //  this._disable.enableButton(this.submitButton);
            //  console.log("Data", data);
        });
    };
    ExportConsignmentOrderSizeDetailComponent.prototype.submit = function () {
        var _this = this;
        var tempArray = this.OrderSizeList;
        var strValue = '';
        var Total_pkg = 0;
        var Total_Noofpkgs = 0;
        var Total_grwt = 0;
        var Total_netwt = 0;
        var Total_vol = 0;
        tempArray.forEach(function (item) {
            Total_pkg = Number(Total_pkg) + Number(item.PCS);
            Total_Noofpkgs = Number(Total_Noofpkgs) + Number(item.PKGS);
            Total_grwt = Number(Total_grwt) + Number(item.GRWT);
            Total_netwt = Number(Total_netwt) + Number(item.NETWT);
            Total_vol = Number(Total_vol) + Number(item.VOL);
            strValue += item["PK_ID"] + "|"
                + item["CODE_SIZE"] + "|"
                + item["FK_ORDERID"] + "|"
                + item["PCS"] + "|"
                + item["PKGS"] + "|"
                + item["GRWT"] + "|"
                + item["NETWT"] + "|"
                + item["VOL"] + ";";
        });
        if (Number.isNaN(Total_pkg)
            || Number.isNaN(Total_Noofpkgs)
            || Number.isNaN(Total_grwt)
            || Number.isNaN(Total_netwt)
            || Number.isNaN(Total_vol)) {
            this._toasterService.toast('error', 'Alert', 'Invalid input please try to input number or decimal number value.');
        }
        else {
            if (Total_pkg == 0) {
                this._toasterService.toast('error', 'Alert', 'Please enter atleast one entry !');
                return false;
            }
            if (Total_Noofpkgs == 0) {
                this._toasterService.toast('error', 'Alert', 'Please Enter PKGs !');
                return false;
            }
            if (Total_grwt == 0) {
                this._toasterService.toast('error', 'Alert', 'Please Enter Gross Wt. !');
                return false;
            }
            if (Total_netwt == 0) {
                this._toasterService.toast('error', 'Alert', 'Please Enter Net Wt. !');
                return false;
            }
            if (Total_vol == 0) {
                this._toasterService.toast('error', 'Alert', 'Please Enter Volume !');
                return false;
            }
            if (Total_pkg != Number(tempArray[0]["TOT_PCS"])) {
                this._toasterService.toast('error', 'Alert', "Size wise Toal Pcs : [ " + Total_pkg + " ], Should be Equal to Order Pcs: " + tempArray[0]["TOT_PCS"] + " !");
                return false;
            }
            if (Total_Noofpkgs != Number(tempArray[0]["TOT_PKGS"])) {
                this._toasterService.toast('error', 'Alert', "Size wise Toal Pkgs : [ " + Total_Noofpkgs + " ], Should be Equal to Order Pkgs: [ " + tempArray[0]["TOT_PKGS"] + " ] !");
                return false;
            }
            if (Total_grwt.toFixed(3) != Number(tempArray[0]["TOT_GRWT"]).toFixed(3)) {
                this._toasterService.toast('error', 'Alert', "Size wise Toal Gross Wt. : [ " + Total_grwt + " ], Should be Equal to Order Gr. Wt: [ " + tempArray[0]["TOT_GRWT"] + " ] !");
                return false;
            }
            if (Total_netwt.toFixed(3) != Number(tempArray[0]["TOT_NETWT"]).toFixed(3)) {
                this._toasterService.toast('error', 'Alert', "Size wise Toal Net Wt. : [ " + Total_netwt + " ], Should be Equal to Order Net Wt. : [ " + tempArray[0]["TOT_NETWT"] + " ] !");
                return false;
            }
            if (this.CNT_TYPE != 'GOH') {
                if (Total_vol.toFixed(3) != Number(tempArray[0]["TOT_VOL"]).toFixed(3)) {
                    this._toasterService.toast('error', 'Alert', "Size wise Toal Volume : [ " + Total_vol + " ] Should be Equal to Order Volume : [ " + tempArray[0]["TOT_VOL"] + " ] !");
                    return false;
                }
            }
            this._disable.disableButton(this.submitButton);
            var _jsonData = {
                ExptNo: this.paramData.exptno,
                Concode: this.paramData.concode,
                OrderNo: this.paramData.orderno,
                StyleNo: this.paramData.styleno,
                TotalPackage: Total_pkg,
                Str: strValue,
                MakerId: this._loginService.getLogin()[0].CMPID,
                MakerIp: this._loginService.getLogin()[0].CMPID //Change later by ip
            };
            this._dataService.Common("Export/OrderSizeDetailsSubmit", _jsonData)
                .subscribe(function (data) {
                _this._disable.enableButton(_this.submitButton);
                if (data.Table[0].STATUS == '100') {
                    _this._toasterService.toast('success', 'Alert', 'Order size details saved successfully !');
                }
            });
        }
    };
    ExportConsignmentOrderSizeDetailComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExportConsignmentOrderSizeDetailComponent.prototype, "submitButton", void 0);
    ExportConsignmentOrderSizeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./order-size-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/windowpoppage/export/order-size-detail.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_common_font_changer_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ExportConsignmentOrderSizeDetailComponent);
    return ExportConsignmentOrderSizeDetailComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/export/remark-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/windowpoppage/export/remark-view.component.ts ***!
  \***************************************************************/
/*! exports provided: RemarkViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkViewComponent", function() { return RemarkViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemarkViewComponent = /** @class */ (function () {
    function RemarkViewComponent(_route, _dataService, _loginService) {
        this._route = _route;
        this._dataService = _dataService;
        this._loginService = _loginService;
    }
    RemarkViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.exptno = params["exptno"];
            _this.setRemarkData(_this.exptno);
        });
    };
    RemarkViewComponent.prototype.setRemarkData = function (exptno) {
        var _this = this;
        var _jsonData = {
            Type1: exptno,
            Type2: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.Common("Export/ConsignmentView", _jsonData)
            .subscribe(function (data) {
            _this.remarkData = {
                CON_REMARK: data.Table[0].CON_REMARK,
                OUR_REMARK: data.Table[0].OUR_REMARK
            };
        });
    };
    RemarkViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    RemarkViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-remark-view',
            template: "\n            \t\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"col-form-span-heading centerlabel\" colspan=\"6\">CONSIGNMENT DETAILS (REMARKS) </td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><b>EXPORT NO</b></span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{exptno}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><b>Consignee Remark</b></span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{remarkData?.CON_REMARK}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><b>Our Remark</b></span> </td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{remarkData?.OUR_REMARK}}</span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n        "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], RemarkViewComponent);
    return RemarkViewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/importfra/container-jobview.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/windowpoppage/importfra/container-jobview.component.ts ***!
  \************************************************************************/
/*! exports provided: ContainerjobviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerjobviewComponent", function() { return ContainerjobviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContainerjobviewComponent = /** @class */ (function () {
    function ContainerjobviewComponent(_dataService, _loginService, _toasterService, _route, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._route = _route;
        this._loaderService = _loaderService;
        this.setData = [];
        this.jobdtls = [];
        this.DIRECTVSL = "";
    }
    ContainerjobviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.setCLPData(params["containerno"], params["consoleno"]);
        });
    };
    ContainerjobviewComponent.prototype.setCLPData = function (containerno, consoleno) {
        var _this = this;
        var _jsonData = {
            containerno: containerno,
            consoleno: consoleno
        };
        this._loaderService.display(true);
        this._dataService.getData("Importfra/GetContainerjobview", _jsonData)
            .subscribe(function (data) {
            _this.setData = data.Table1[0];
            _this.DIRECTVSL = data.Table1[0].DIRECTVSL;
            _this.jobdtls = data.Table2;
            _this._loaderService.display(false);
        }, function (error) {
            _this._toasterService.toast('error', 'Error', error.status + '<br/>' + error.statusText);
            _this._loaderService.display(false);
        }, function () { });
    };
    ContainerjobviewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    ContainerjobviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-clp-view',
            template: "\n            \t\t\t\t<table class=\"table table-bordered table-striped table-sm-new bgwhite\">\n\t\t\t\t\t\t\t   <tbody>\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Container No.</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\"><b>{{setData?.CONTAINERNO}}</b></span></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Container Size</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.CONTAINERSIZE}}</span></td>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Status of Container</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td><span class=\"col-form-span-label\">{{setData?.CONTAINERSTATUS}}</span></td>\n                                  </tr>\n                                  \n\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Destination Port</strong></span></td>\n\t\t\t\t\t\t\t\t\t <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.DESTPORT}}</span></td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Steamer Agent Seal no.</strong></span></td>\n                                    <td  ><span class=\"col-form-span-label\">{{setData?.AGTSEALNO}}</span></td>\n                                    <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Custom Seal no.</strong></span></td>\n                                    <td  ><span class=\"col-form-span-label\">{{setData?.CUSTSEALNO}}</span></td>\n                                  </tr>\n                                  \n                                  <tr>\n                                    <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Freight</strong></span></td>\n                                    <td  ><span class=\"col-form-span-label\">{{setData?.FREIGHTUSD}}</span></td>\n                                    <td class=\"width150\"><span class=\"col-form-span-label\"><strong>BAF</strong></span></td>\n                                    <td  ><span class=\"col-form-span-label\">{{setData?.BAFCUR}}</span></td>\n                                  </tr>\n                                  \n                                  <tr>\n                                    <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Remark</strong></span></td>\n                                    <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.REMARK}}</span></td>\n                                  </tr>   \n                                  <tr>\n                                    <td  colspan=\"4\"><span class=\"col-form-span-label\"><strong>OHRER CHARGES</strong></span></td>\n                                  </tr>\n                                  <tr>\n                                    <td ></td>\n                                    <td colspan=\"4\"><span class=\"col-form-span-label\">{{setData?.OTHERAMT1}}</span></td>                                        \n                                  </tr>\n                                  <tr>\n                                    <td></td>\n                                    <td colspan=\"4\"><span class=\"col-form-span-label\">{{setData?.OTHERAMT1}}</span></td>\n                                  </tr> \n                                  <tr>                                        \n                                    <td colspan=\"4\"><span class=\"col-form-span-label  centerlabel\" *ngIf=\"DIRECTVSL=='DIRECT'\"  ><b>{{setData?.DIRECTVSL}}</b></span></td>\n                                  </tr>\n                                  <ng-container  *ngIf=\"DIRECTVSL=='TRANSHIPMENT'\" >\n                                  <table class=\"table table-bordered table-striped table-sm-new\">\n                                    <tbody>\n                                        <tr>                                        \n                                            <td colspan=\"4\"><span class=\"col-form-span-label centerlabel \"  ><b>{{setData?.DIRECTVSL}}</b></span></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"width150\"><span class=\"col-form-span-label\"><strong>\tTranshipment Port1</strong></span></td>\n                                            <td><span class=\"col-form-span-label\">{{setData?.TRANSHIPMENTPORT1}}</span></td>\n                                            <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Connecting Vessel1</strong></span></td>\n                                            <td><span class=\"col-form-span-label\">{{setData?.CONVESSEL1}}</span></td>\n                                       </tr>\n                                       <tr>\n                                            <td class=\"width150\"><span class=\"col-form-span-label\"><strong>\tVoyage No </strong></span></td>\n                                            <td><span class=\"col-form-span-label\">{{setData?.CONVESSEL1VOY1}}</span></td>\n                                            <td class=\"width150\"><span class=\"col-form-span-label\"><strong> ETD(at transhipment port1)1</strong></span></td>\n                                            <td><span class=\"col-form-span-label\">{{setData?.ETDPORT1}}</span></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETA</strong></span></td>\n                                            <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.ETA1}}</span></td>\n                                        </tr>  \n                                        <tr>\n                                        <td class=\"width150\"><span class=\"col-form-span-label\"><strong>\tTranshipment Port2</strong></span></td>\n                                        <td><span class=\"col-form-span-label\">{{setData?.TRANSHIPMENTPORT2}}</span></td>\n                                        <td class=\"width150\"><span class=\"col-form-span-label\"><strong>Connecting Vessel2</strong></span></td>\n                                        <td><span class=\"col-form-span-label\">{{setData?.CONVESSEL2}}</span></td>\n                                   </tr>\n                                   <tr>\n                                        <td class=\"width150\"><span class=\"col-form-span-label\"><strong>\tVoyage No </strong></span></td>\n                                        <td><span class=\"col-form-span-label\">{{setData?.CONVESSEL1VOY2}}</span></td>\n                                        <td class=\"width150\"><span class=\"col-form-span-label\"><strong> ETD(at transhipment port2)2</strong></span></td>\n                                        <td><span class=\"col-form-span-label\">{{setData?.ETDPORT2}}</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETA</strong></span></td>\n                                        <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.ETA2}}</span></td>\n                                    </tr>  \n                                  </tbody>\n                                   </table>\n                                  </ng-container> \t\n                                  <tr>\n                                    <td class=\"width150\"><span class=\"col-form-span-label\"><strong>ETA</strong></span></td>\n                                    <td colspan=\"3\"><span class=\"col-form-span-label\">{{setData?.ETA}}</span></td>\n                                  </tr>\t\t\t\t\t\t\t \n                                  <tr>                                        \n                                  <td colspan=\"4\"><span class=\"col-form-span-label\" style=\"text-align: center;\"><b> EXCHANGE RATES</b></span></td>\n                                </tr>\n                            </tbody>\n\t\t\t\t\t\t\t</table>\n                            <div class=\"row xscroll\">\n                                <table class=\"table table-bordered table-striped table-sm-new\">\n                               \n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"col-form-span-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width130 centerlabel\"><span class=\"col-form-span-label\"></span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">CURRENCY</span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width75 centerlabel\"><span class=\"col-form-span-label\">VALUE</span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"centerlabel\"><span class=\"col-form-span-label\">CURRENCY</span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width10 centerlabel\"><span class=\"col-form-span-label\"></span></th>\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"width75 centerlabel\"><span class=\"col-form-span-label\">VALUE</span></th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width130\"><span class=\"col-form-span-label\"><strong>ORIGIN PORT</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.OGN_CURR_NAME1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-OCURRATE1\">{{setData?.OCURRATE1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.OGN_CURR_NAME2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width10 centerlabel\"><span class=\"col-form-span-label\">=</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-label\">{{setData?.OCURRATE2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width130\"><span class=\"col-form-span-label\"><strong>DEST. PORT</strong></span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.DEST_CURR_NAME1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-label\">{{setData?.DCURRATE1}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\">{{setData?.DEST_CURR_NAME2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width10 centerlabel\"><span class=\"col-form-span-label\">=</span></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"width75\"><span class=\"col-form-span-label\">{{setData?.DCURRATE2}}</span></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t</table>\n                              </div>\n                                <table class=\"table table-bordered table-sm-new\" *ngIf=\"jobdtls.length > 0\">\n\t\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t\t        <tr>\n\t\t\t\t\t\t\t\t\t        <td class=\"width150 col-form-span-heading centerlabel\" colspan=\"10\">Consignment Details.</td>\n\t\t\t\t\t\t\t\t        </tr>\n\t\t\t\t\t\t\t\t\t    <tr class=\"col-form-span-heading\">\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">Job No.</span></th>\n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">NoofPkgs</span></th>\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">CBM</span></th>\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t    <th class=\"centerlabel\"><span class=\"col-form-span-label\">CLP Seq.</span></th>\n\t\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t        <tbody>\n                                       \n\t\t\t\t\t\t\t\t            <tr *ngFor =\"let obj of jobdtls\">\n\t\t\t\t\t\t\t\t\t            <td  ><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\t\t\t\t\t\t\t\t\t\t\t\n                                                <td><span class=\"col-form-span-label\">{{obj.NOOFPKGS}}</span></td>\t\n                                                <td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t    <td><span class=\"col-form-span-label\">{{obj.CLPSEQUENCE}}</span></td>\n\t\t\t\t\t\t\t\t            </tr>\t\n                                         \n                                    </tbody>\n\t\t\t\t\t\t\t    </table>\n                                \n        "
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], ContainerjobviewComponent);
    return ContainerjobviewComponent;
}());



/***/ }),

/***/ "./src/app/windowpoppage/window-pop-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/windowpoppage/window-pop-page.module.ts ***!
  \*********************************************************/
/*! exports provided: WindowPopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowPopPageModule", function() { return WindowPopPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _window_pop_page_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./window-pop-page.routing */ "./src/app/windowpoppage/window-pop-page.routing.ts");
/* harmony import */ var _export_order_size_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./export/order-size-detail.component */ "./src/app/windowpoppage/export/order-size-detail.component.ts");
/* harmony import */ var _export_invoice_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./export/invoice-details.component */ "./src/app/windowpoppage/export/invoice-details.component.ts");
/* harmony import */ var _export_clp_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./export/clp-view.component */ "./src/app/windowpoppage/export/clp-view.component.ts");
/* harmony import */ var _export_chronology_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./export/chronology-view.component */ "./src/app/windowpoppage/export/chronology-view.component.ts");
/* harmony import */ var _export_remark_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./export/remark-view.component */ "./src/app/windowpoppage/export/remark-view.component.ts");
/* harmony import */ var _importfra_container_jobview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./importfra/container-jobview.component */ "./src/app/windowpoppage/importfra/container-jobview.component.ts");
/* harmony import */ var _export_calculatecbm_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./export/calculatecbm-view.component */ "./src/app/windowpoppage/export/calculatecbm-view.component.ts");
/* harmony import */ var _Account_invoice_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Account/invoice-print.component */ "./src/app/windowpoppage/Account/invoice-print.component.ts");
/* harmony import */ var _Account_creditnote_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Account/creditnote-print.component */ "./src/app/windowpoppage/Account/creditnote-print.component.ts");
/* harmony import */ var _Account_creditnote_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Account/creditnote-view.component */ "./src/app/windowpoppage/Account/creditnote-view.component.ts");
/* harmony import */ var _Account_invoice_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Account/invoice-view.component */ "./src/app/windowpoppage/Account/invoice-view.component.ts");
/* harmony import */ var _Account_purchase_print_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Account/purchase-print.component */ "./src/app/windowpoppage/Account/purchase-print.component.ts");
/* harmony import */ var _Account_reqbp_bill_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Account/reqbp-bill-list.component */ "./src/app/windowpoppage/Account/reqbp-bill-list.component.ts");
/* harmony import */ var _Account_reqbp_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Account/reqbp-view.component */ "./src/app/windowpoppage/Account/reqbp-view.component.ts");
/* harmony import */ var _Account_CashBook_BR_print_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Account/CashBook-BR-print.component */ "./src/app/windowpoppage/Account/CashBook-BR-print.component.ts");
/* harmony import */ var _Account_invoicehistory_purchaseprint_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Account/invoicehistory-purchaseprint.component */ "./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.ts");
/* harmony import */ var _Account_singlejobno_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Account/singlejobno-report.component */ "./src/app/windowpoppage/Account/singlejobno-report.component.ts");
/* harmony import */ var _Account_JV_print_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Account/JV-print.component */ "./src/app/windowpoppage/Account/JV-print.component.ts");
/* harmony import */ var _Account_advancefromclientPopUp_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Account/advancefromclientPopUp.component */ "./src/app/windowpoppage/Account/advancefromclientPopUp.component.ts");
/* harmony import */ var _Account_actstatement_advance_Print_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Account/actstatement-advance-Print.component */ "./src/app/windowpoppage/Account/actstatement-advance-Print.component.ts");
/* harmony import */ var _Account_jv_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Account/jv-view.component */ "./src/app/windowpoppage/Account/jv-view.component.ts");
/* harmony import */ var _Account_purchase_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Account/purchase-view.component */ "./src/app/windowpoppage/Account/purchase-view.component.ts");
/* harmony import */ var _Account_srpi_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Account/srpi-view.component */ "./src/app/windowpoppage/Account/srpi-view.component.ts");
/* harmony import */ var _Account_consign_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Account/consign-view.component */ "./src/app/windowpoppage/Account/consign-view.component.ts");
/* harmony import */ var _Account_Admin_Quotation_Print_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Account/Admin-Quotation-Print.component */ "./src/app/windowpoppage/Account/Admin-Quotation-Print.component.ts");
/* harmony import */ var _Account_proformainvoice_print_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Account/proformainvoice-print.component */ "./src/app/windowpoppage/Account/proformainvoice-print.component.ts");
/* harmony import */ var _Quotation_quote_sea_print_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Quotation/quote-sea-print.component */ "./src/app/windowpoppage/Quotation/quote-sea-print.component.ts");
/* harmony import */ var _Quotation_quotation_print_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Quotation/quotation-print.component */ "./src/app/windowpoppage/Quotation/quotation-print.component.ts");
/* harmony import */ var _Quotation_quote_air_print_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Quotation/quote-air-print.component */ "./src/app/windowpoppage/Quotation/quote-air-print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// import { ExportConsignmentOrderSizeDetailComponent } from './export/order-size-detail.component';
// import { InvoiceDetailsComponent } from './export/invoice-details.component';
// import { CLPViewComponent } from './export/clp-view.component';
// import { ChronologyViewComponent } from './export/chronology-view.component';
// import { RemarkViewComponent } from './export/remark-view.component';
// import { ContainerjobviewComponent } from './importfra/container-jobview.component'
// import {CalCbmViewComponent } from './export/calculatecbm-view.component';
var WindowPopPageModule = /** @class */ (function () {
    function WindowPopPageModule() {
    }
    WindowPopPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _window_pop_page_routing__WEBPACK_IMPORTED_MODULE_6__["WindowPopPageRoutingModule"]],
            declarations: [
                _export_order_size_detail_component__WEBPACK_IMPORTED_MODULE_7__["ExportConsignmentOrderSizeDetailComponent"],
                _export_invoice_details_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceDetailsComponent"],
                _export_clp_view_component__WEBPACK_IMPORTED_MODULE_9__["CLPViewComponent"],
                _export_chronology_view_component__WEBPACK_IMPORTED_MODULE_10__["ChronologyViewComponent"],
                _export_remark_view_component__WEBPACK_IMPORTED_MODULE_11__["RemarkViewComponent"],
                _importfra_container_jobview_component__WEBPACK_IMPORTED_MODULE_12__["ContainerjobviewComponent"],
                _export_calculatecbm_view_component__WEBPACK_IMPORTED_MODULE_13__["CalCbmViewComponent"],
                _Account_invoice_print_component__WEBPACK_IMPORTED_MODULE_14__["InvoicePrintComponent"],
                _Account_creditnote_print_component__WEBPACK_IMPORTED_MODULE_15__["CreditnotePrintComponent"],
                _Account_creditnote_view_component__WEBPACK_IMPORTED_MODULE_16__["CreditnoteViewComponent"], _Account_invoice_view_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceViewComponent"], _Account_purchase_print_component__WEBPACK_IMPORTED_MODULE_18__["PurchasePrintComponent"],
                _Account_reqbp_bill_list_component__WEBPACK_IMPORTED_MODULE_19__["ReqbpBillListComponent"], _Account_reqbp_view_component__WEBPACK_IMPORTED_MODULE_20__["ReqbpViewComponent"],
                _Account_CashBook_BR_print_component__WEBPACK_IMPORTED_MODULE_21__["CashBookBRPrintComponent"], _Account_invoicehistory_purchaseprint_component__WEBPACK_IMPORTED_MODULE_22__["InvoicehistoryPurchaseprintComponent"],
                _Account_singlejobno_report_component__WEBPACK_IMPORTED_MODULE_23__["SinglejobnoReportComponent"], _Account_JV_print_component__WEBPACK_IMPORTED_MODULE_24__["JVPrintComponent"],
                _Account_advancefromclientPopUp_component__WEBPACK_IMPORTED_MODULE_25__["AdvanceFromClientPopUp"], _Account_actstatement_advance_Print_component__WEBPACK_IMPORTED_MODULE_26__["ActstatAdvancePrintComponent"], _Account_jv_view_component__WEBPACK_IMPORTED_MODULE_27__["JVViewComponent"],
                _Account_purchase_view_component__WEBPACK_IMPORTED_MODULE_28__["PurchaseViewComponent"], _Account_srpi_view_component__WEBPACK_IMPORTED_MODULE_29__["srpiViewComponent"], _Account_consign_view_component__WEBPACK_IMPORTED_MODULE_30__["ConsigneeViewComponent"], _Account_Admin_Quotation_Print_component__WEBPACK_IMPORTED_MODULE_31__["QuotationPrintComponent"],
                _Account_proformainvoice_print_component__WEBPACK_IMPORTED_MODULE_32__["ProformaInvoicePrintComponent"], _Quotation_quote_sea_print_component__WEBPACK_IMPORTED_MODULE_33__["QuoteSeaPrintComponent"], _Quotation_quotation_print_component__WEBPACK_IMPORTED_MODULE_34__["SalesQuotationPrintComponent"], _Quotation_quote_air_print_component__WEBPACK_IMPORTED_MODULE_35__["QuoteAirPrintComponent"]
            ]
        })
    ], WindowPopPageModule);
    return WindowPopPageModule;
}());



/***/ }),

/***/ "./src/app/windowpoppage/window-pop-page.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/windowpoppage/window-pop-page.routing.ts ***!
  \**********************************************************/
/*! exports provided: WindowPopPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowPopPageRoutingModule", function() { return WindowPopPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _export_order_size_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export/order-size-detail.component */ "./src/app/windowpoppage/export/order-size-detail.component.ts");
/* harmony import */ var _export_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export/invoice-details.component */ "./src/app/windowpoppage/export/invoice-details.component.ts");
/* harmony import */ var _export_clp_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./export/clp-view.component */ "./src/app/windowpoppage/export/clp-view.component.ts");
/* harmony import */ var _export_chronology_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./export/chronology-view.component */ "./src/app/windowpoppage/export/chronology-view.component.ts");
/* harmony import */ var _export_remark_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./export/remark-view.component */ "./src/app/windowpoppage/export/remark-view.component.ts");
/* harmony import */ var _importfra_container_jobview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./importfra/container-jobview.component */ "./src/app/windowpoppage/importfra/container-jobview.component.ts");
/* harmony import */ var _export_calculatecbm_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./export/calculatecbm-view.component */ "./src/app/windowpoppage/export/calculatecbm-view.component.ts");
/* harmony import */ var _Account_invoice_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Account/invoice-print.component */ "./src/app/windowpoppage/Account/invoice-print.component.ts");
/* harmony import */ var _Account_invoice_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Account/invoice-view.component */ "./src/app/windowpoppage/Account/invoice-view.component.ts");
/* harmony import */ var _Account_creditnote_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Account/creditnote-view.component */ "./src/app/windowpoppage/Account/creditnote-view.component.ts");
/* harmony import */ var _Account_creditnote_print_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Account/creditnote-print.component */ "./src/app/windowpoppage/Account/creditnote-print.component.ts");
/* harmony import */ var _Account_purchase_print_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Account/purchase-print.component */ "./src/app/windowpoppage/Account/purchase-print.component.ts");
/* harmony import */ var _Account_CashBook_BR_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Account/CashBook-BR-print.component */ "./src/app/windowpoppage/Account/CashBook-BR-print.component.ts");
/* harmony import */ var _Account_reqbp_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Account/reqbp-view.component */ "./src/app/windowpoppage/Account/reqbp-view.component.ts");
/* harmony import */ var _Account_reqbp_bill_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Account/reqbp-bill-list.component */ "./src/app/windowpoppage/Account/reqbp-bill-list.component.ts");
/* harmony import */ var _Account_singlejobno_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Account/singlejobno-report.component */ "./src/app/windowpoppage/Account/singlejobno-report.component.ts");
/* harmony import */ var _Account_invoicehistory_purchaseprint_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Account/invoicehistory-purchaseprint.component */ "./src/app/windowpoppage/Account/invoicehistory-purchaseprint.component.ts");
/* harmony import */ var _Account_JV_print_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Account/JV-print.component */ "./src/app/windowpoppage/Account/JV-print.component.ts");
/* harmony import */ var _Account_advancefromclientPopUp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Account/advancefromclientPopUp.component */ "./src/app/windowpoppage/Account/advancefromclientPopUp.component.ts");
/* harmony import */ var _Account_actstatement_advance_Print_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Account/actstatement-advance-Print.component */ "./src/app/windowpoppage/Account/actstatement-advance-Print.component.ts");
/* harmony import */ var _Account_jv_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Account/jv-view.component */ "./src/app/windowpoppage/Account/jv-view.component.ts");
/* harmony import */ var _Account_purchase_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Account/purchase-view.component */ "./src/app/windowpoppage/Account/purchase-view.component.ts");
/* harmony import */ var _Account_srpi_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Account/srpi-view.component */ "./src/app/windowpoppage/Account/srpi-view.component.ts");
/* harmony import */ var _Account_consign_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Account/consign-view.component */ "./src/app/windowpoppage/Account/consign-view.component.ts");
/* harmony import */ var _Account_Admin_Quotation_Print_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Account/Admin-Quotation-Print.component */ "./src/app/windowpoppage/Account/Admin-Quotation-Print.component.ts");
/* harmony import */ var _Account_proformainvoice_print_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Account/proformainvoice-print.component */ "./src/app/windowpoppage/Account/proformainvoice-print.component.ts");
/* harmony import */ var _Quotation_quote_sea_print_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Quotation/quote-sea-print.component */ "./src/app/windowpoppage/Quotation/quote-sea-print.component.ts");
/* harmony import */ var _Quotation_quotation_print_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Quotation/quotation-print.component */ "./src/app/windowpoppage/Quotation/quotation-print.component.ts");
/* harmony import */ var _Quotation_quote_air_print_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Quotation/quote-air-print.component */ "./src/app/windowpoppage/Quotation/quote-air-print.component.ts");
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
            title: 'Window Popup'
        },
        children: [
            // { path: 'order-size-detail/:exptno/:orderno/:styleno/:concode', component: ExportConsignmentOrderSizeDetailComponent, data: { title: 'Order Size Detail' } },
            // { path: 'consignment-exporter-invoice-detail/:exptno', component: InvoiceDetailsComponent, data: { title: 'Exporter Invoice Detail' } },
            // { path: 'consignment-clp-view/:exptno/:containerno/:vessel', component: CLPViewComponent, data: { title: 'Clp View' } },
            // { path: 'consignment-chronology-view/:exptno', component: ChronologyViewComponent, data: { title: 'Chronology View' } },
            // { path: 'consignment-remark-view/:exptno', component: RemarkViewComponent, data: { title: 'Remark View' } },
            // { path: 'console-containerjob-view/:containerno/:consoleno', component: ContainerjobviewComponent, data: { title: 'Container Job View' } },
            // { path: 'consignment-calcbm-view/:exptno', component: CalCbmViewComponent, data: { title: 'Calculate CBM View' } },
            { path: 'order-size-detail/:exptno/:orderno/:styleno/:concode', component: _export_order_size_detail_component__WEBPACK_IMPORTED_MODULE_2__["ExportConsignmentOrderSizeDetailComponent"], data: { title: 'Order Size Detail' } },
            { path: 'consignment-exporter-invoice-detail/:exptno', component: _export_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailsComponent"], data: { title: 'Exporter Invoice Detail' } },
            { path: 'consignment-clp-view/:exptno/:containerno/:vessel', component: _export_clp_view_component__WEBPACK_IMPORTED_MODULE_4__["CLPViewComponent"], data: { title: 'Clp View' } },
            { path: 'consignment-chronology-view/:exptno', component: _export_chronology_view_component__WEBPACK_IMPORTED_MODULE_5__["ChronologyViewComponent"], data: { title: 'Chronology View' } },
            { path: 'consignment-remark-view/:exptno', component: _export_remark_view_component__WEBPACK_IMPORTED_MODULE_6__["RemarkViewComponent"], data: { title: 'Remark View' } },
            { path: 'console-containerjob-view/:containerno/:consoleno', component: _importfra_container_jobview_component__WEBPACK_IMPORTED_MODULE_7__["ContainerjobviewComponent"], data: { title: 'Container Job View' } },
            { path: 'consignment-calcbm-view/:exptno', component: _export_calculatecbm_view_component__WEBPACK_IMPORTED_MODULE_8__["CalCbmViewComponent"], data: { title: 'Calculate CBM View' } },
            { path: 'Account-Invoice-print/:InvNo', component: _Account_invoice_print_component__WEBPACK_IMPORTED_MODULE_9__["InvoicePrintComponent"], data: { title: 'Invoice Print' } },
            { path: 'Account-Invoice-View/:InvNo', component: _Account_invoice_view_component__WEBPACK_IMPORTED_MODULE_10__["InvoiceViewComponent"], data: { title: 'Invoice View' } },
            { path: 'Account-CreditNote-View/:CrtNo', component: _Account_creditnote_view_component__WEBPACK_IMPORTED_MODULE_11__["CreditnoteViewComponent"], data: { title: 'CreditNote View' } },
            { path: 'Account-CreditNote-print/:CrtNo', component: _Account_creditnote_print_component__WEBPACK_IMPORTED_MODULE_12__["CreditnotePrintComponent"], data: { title: 'CreditNote Print' } },
            { path: 'Account-Purchase-print/:SuppNo/:Status', component: _Account_purchase_print_component__WEBPACK_IMPORTED_MODULE_13__["PurchasePrintComponent"], data: { title: 'Purchase Print' } },
            { path: 'Account-CashBook-BankReceipt-print/:Type/:BrNo', component: _Account_CashBook_BR_print_component__WEBPACK_IMPORTED_MODULE_14__["CashBookBRPrintComponent"], data: { title: 'CashBook-Bank Receipt' } },
            { path: 'Account-Request-Bank-Payment-print/:EntryNo', component: _Account_reqbp_view_component__WEBPACK_IMPORTED_MODULE_15__["ReqbpViewComponent"], data: { title: 'View Request Bank Payment' } },
            { path: 'Account-Request-BP-Bill-List/:BillNo', component: _Account_reqbp_bill_list_component__WEBPACK_IMPORTED_MODULE_16__["ReqbpBillListComponent"], data: { title: 'Bank Payment- Bill List' } },
            { path: 'Account-Job-Profit-Report/:jobno', component: _Account_singlejobno_report_component__WEBPACK_IMPORTED_MODULE_17__["SinglejobnoReportComponent"], data: { title: 'Job Profit Report' } },
            { path: 'Account-PurchasePrint-InvoiceHistory/:entryno', component: _Account_invoicehistory_purchaseprint_component__WEBPACK_IMPORTED_MODULE_18__["InvoicehistoryPurchaseprintComponent"], data: { title: 'Invoice History-Purchase Print' } },
            { path: 'Account-JV-Print/:entryno/:Type', component: _Account_JV_print_component__WEBPACK_IMPORTED_MODULE_19__["JVPrintComponent"], data: { title: 'Journal Voucher  Print' } },
            { path: 'Account-AdvRecfrmClient/:ADVJOBNO', component: _Account_advancefromclientPopUp_component__WEBPACK_IMPORTED_MODULE_20__["AdvanceFromClientPopUp"], data: { title: 'ADVANCE FROM CLIENTS' } },
            { path: 'Account-actstatement-AdvancePrint/:clientcd/:clientnm/:fromdate/:todate/:status', component: _Account_actstatement_advance_Print_component__WEBPACK_IMPORTED_MODULE_21__["ActstatAdvancePrintComponent"], data: { title: ' Advance Print' } },
            { path: 'Account-JV-View/:entryno', component: _Account_jv_view_component__WEBPACK_IMPORTED_MODULE_22__["JVViewComponent"], data: { title: 'Journal Voucher  View' } },
            { path: 'Account-Purchase-View/:PurchaseNo/:Status', component: _Account_purchase_view_component__WEBPACK_IMPORTED_MODULE_23__["PurchaseViewComponent"], data: { title: 'Purchase View' } },
            { path: 'Account-SRPI-View/:pur_code/:flag/:authstatus', component: _Account_srpi_view_component__WEBPACK_IMPORTED_MODULE_24__["srpiViewComponent"], data: { title: ' SRPI View' } },
            { path: 'Export-Consignment-view/:expt_no', component: _Account_consign_view_component__WEBPACK_IMPORTED_MODULE_25__["ConsigneeViewComponent"], data: { title: 'Consignment View' } },
            { path: 'Admin-Quotation-Print/:QuotNo', component: _Account_Admin_Quotation_Print_component__WEBPACK_IMPORTED_MODULE_26__["QuotationPrintComponent"], data: { title: 'Quotation Print' } },
            { path: 'Account-ProformaInvoice-Print/:InvNo', component: _Account_proformainvoice_print_component__WEBPACK_IMPORTED_MODULE_27__["ProformaInvoicePrintComponent"], data: { title: 'Proforma Invoice Print' } },
            { path: 'Sea-Quotationprint/:quotno', component: _Quotation_quote_sea_print_component__WEBPACK_IMPORTED_MODULE_28__["QuoteSeaPrintComponent"], data: { title: 'Sea Quotation Print' } },
            { path: 'Wisor-Quotationprint/:quotno', component: _Quotation_quotation_print_component__WEBPACK_IMPORTED_MODULE_29__["SalesQuotationPrintComponent"], data: { title: 'Wisor Quotation Print' } },
            { path: 'Air-Quotationprint/:quotno', component: _Quotation_quote_air_print_component__WEBPACK_IMPORTED_MODULE_30__["QuoteAirPrintComponent"], data: { title: 'Air Quotation Print' } },
        ]
    }
];
var WindowPopPageRoutingModule = /** @class */ (function () {
    function WindowPopPageRoutingModule() {
    }
    WindowPopPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WindowPopPageRoutingModule);
    return WindowPopPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=windowpoppage-window-pop-page-module.js.map