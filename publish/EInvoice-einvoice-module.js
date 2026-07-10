(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EInvoice-einvoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/ecreditnote-generatejson.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/EInvoice/ecreditnote-generatejson.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>{{subheader}}</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"overflow-y: auto;height: 460px;\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite \">\r\n          <thead>\r\n\r\n            <tr  style=\"white-space:nowrap;\">\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\">  <input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp;  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Crt No </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Crt Date   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Client </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Client GST No.  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Supply Type </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Total Amount     </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"  > Taxable Amt   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Non Taxable Amt  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> IGST </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> CGST  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> SGST  </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of EcreditnoteListtbl \"\r\n              >\r\n              <td class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.INV_NO)\"> &nbsp; </td>\r\n              <td class=\"col-form-span-label anchor-link \" (click)=\"CreditNoteView(obj.INV_NO)\">{{obj.INV_NO}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.INV_DATE}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CLIENT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.EXP_GSTNO}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.SUPTYPE}}</td>\r\n              <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.TOTALAMT|number:'2.2-4'}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.TAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.NONTAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.IGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.SGST}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <!-- <tr>\r\n            <td colspan=\"12\" class=\"right-text pr-2\">\r\n              <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"GenerateEInvoice()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Generate</span></button>\r\n\r\n            </td>\r\n          </tr> -->\r\n          <!-- <tr>\r\n            <td colspan=\"8\">\r\n              <div class=\"row justify-content-center no-gutters\"\r\n                style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\r\n                <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\r\n              </div>\r\n            </td>\r\n          </tr> -->\r\n        </table>\r\n\r\n      </div>\r\n      <!-- <div class=\"col-md-1  col-lg-1 col-12\">\r\n      </div> -->\r\n\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"display: flex;\r\n      justify-content: flex-end;\r\n      margin-left: auto;\r\n      margin-right: 0;\">\r\n          <div class=\"col-md-4 col-lg-4 col-12\" >\r\n            <span class=\"col-form-span-label\" style=\"color: red;\"><b>No. Of Rows Found:-{{NoofRows}}</b></span>\r\n          </div>     \r\n          <div class=\"col-md-8 col-lg-8 col-12\" >\r\n            <button style=\"float: right;\" class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"GenerateECreditNote()\"> <span\r\n              class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Generate</span></button>\r\n          </div>    \r\n        \r\n       \r\n      </div>\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/ecreditnote-resetjson.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/EInvoice/ecreditnote-resetjson.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>{{subheader}}</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"overflow-y: auto;height: 460px;\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite \">\r\n          <thead>\r\n            \r\n            <tr  style=\"white-space:nowrap;\">\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\">  <input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp;  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> JSON FILENAME </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Crt No   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Crt date </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Client   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Supply Type   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"  > Taxable Amt   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Non Taxable Amt  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> IGST </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> CGST  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> SGST  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> RoundOff Amt  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Total Amount  </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of resetjsonlist \"   [ngClass]=\"{ 'disabled-row': obj.SUPTYPE === 'B2CS' }\"\r\n              >\r\n              <td class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.FK_JSON_ID,obj.ID,obj.INV_NO,i)\"> &nbsp; </td>\r\n              <td [attr.disabled]=\"obj.SUPTYPE === 'B2CS'  ? true : null\" class=\"col-form-span-label\">{{obj.JSONFILENAME}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.INV_NO}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.INV_DATE}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CLIENT}}</td>\r\n              <td [ngClass]=\"{\r\n                'col-form-span-label': true,\r\n                'green-text': obj.SUPTYPE === 'B2B' || obj.SUPTYPE === 'EXPWOP' || obj.SUPTYPE === 'SEZWOP'\r\n              }\" class=\"col-form-span-label\">{{obj.SUPTYPE}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.TAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.NONTAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.IGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.SGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.ROUNDOFFAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.TOTALAMT}}</td>\r\n            </tr>\r\n          </tbody>\r\n         \r\n        </table>\r\n  \r\n      </div>\r\n      <!-- <div class=\"col-md-1  col-lg-1 col-12\">\r\n      </div> -->\r\n    \r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"display: flex;\r\n      justify-content: flex-end;\r\n      margin-left: auto;\r\n      margin-right: 0;\">\r\n        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"ResetJson()\"> <span\r\n          class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Reset</span></button>\r\n      </div>\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/einvoice-generatejson.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/EInvoice/einvoice-generatejson.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>{{subheader}}</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div   class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"overflow-y: auto;height: 455px;\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite \">\r\n          <thead>\r\n            \r\n            <tr  style=\"white-space:nowrap;\">\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\">  <input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp;  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Inv No </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Inv Date   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Client </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Client GST No.  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Supply Type </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Total Amount     </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"  > Taxable Amt   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Non Taxable Amt  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> IGST </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> CGST  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> SGST  </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of EInvoiceListtbl \"  \r\n              >\r\n              <td class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.INV_NO)\"> &nbsp; </td>\r\n              <td class=\"col-form-span-label anchor-link \" (click)=\"InvoiceView(obj.INV_NO)\">{{obj.INV_NO}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.INV_DATE}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CLIENT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.EXP_GSTNO}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.SUPTYPE}}</td>\r\n              <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.TOTALAMT|number:'2.2-4'}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.TAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.NONTAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.IGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.SGST}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <!-- <tr>\r\n            <td colspan=\"12\" class=\"right-text pr-2\">\r\n              <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"GenerateEInvoice()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Generate</span></button>\r\n           \r\n            </td>\r\n          </tr> -->\r\n          <!-- <tr>\r\n            <td colspan=\"8\">\r\n              <div class=\"row justify-content-center no-gutters\"\r\n                style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\r\n                <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\r\n              </div>\r\n            </td>\r\n          </tr> -->\r\n        </table>\r\n  \r\n      </div>\r\n      <!-- <div class=\"col-md-1  col-lg-1 col-12\">\r\n      </div> -->\r\n    \r\n    </div>\r\n  \r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"display: flex;\r\n      justify-content: flex-end;\r\n      margin-left: auto;\r\n      margin-right: 0;\">\r\n       <div class=\"col-md-4 col-lg-4 col-12\" >\r\n        <span class=\"col-form-span-label\" style=\"color: red;\"><b>No. Of Rows Found:-{{NoofRows}}</b></span>\r\n      </div>     \r\n      <div class=\"col-md-8 col-lg-8 col-12\" >\r\n        <button style=\"float: right;\" class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"GenerateEInvoice()\"> <span\r\n          class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Generate</span></button>\r\n      </div>\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/einvoice-resetjson.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/EInvoice/einvoice-resetjson.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>{{subheader}}</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"overflow-y: auto;height: 460px;\">\r\n        <table class=\"table table-bordered table-sm-new bgwhite \">\r\n          <thead>\r\n            \r\n            <tr  style=\"white-space:nowrap;\">\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\">  <input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp;  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> JSON FILENAME </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Inv No   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Inv date </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Client   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\" > Supply Type   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"  > Taxable Amt   </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Non Taxable Amt  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> IGST </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> CGST  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> SGST  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> RoundOff Amt  </th>\r\n              <th class=\"col-form-span-label\"  style=\"  background-color: #004980; color: white;\"> Total Amount  </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of resetjsonlist \"   [ngClass]=\"{ 'disabled-row': obj.SUPTYPE === 'B2CS' }\"\r\n              >\r\n              <td class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\" [id]=\"i\" [value]=\"i\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.FK_JSON_ID,obj.ID,obj.INV_NO,i)\"> &nbsp; </td>\r\n              <td [attr.disabled]=\"obj.SUPTYPE === 'B2CS'  ? true : null\" class=\"col-form-span-label\">{{obj.JSONFILENAME}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.INV_NO}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.INV_DATE}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CLIENT}}</td>\r\n              <td [ngClass]=\"{\r\n                'col-form-span-label': true,\r\n                'green-text': obj.SUPTYPE === 'B2B' || obj.SUPTYPE === 'EXPWOP' || obj.SUPTYPE === 'SEZWOP'\r\n              }\" class=\"col-form-span-label\">{{obj.SUPTYPE}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.TAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.NONTAXABLEAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.IGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.CGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.SGST}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.ROUNDOFFAMT}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.TOTALAMT}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <!-- <tr>\r\n            <td colspan=\"12\" class=\"right-text pr-2\">\r\n              <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"GenerateEInvoice()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Generate</span></button>\r\n           \r\n            </td>\r\n          </tr> -->\r\n          <!-- <tr>\r\n            <td colspan=\"8\">\r\n              <div class=\"row justify-content-center no-gutters\"\r\n                style=\"font-family:verdana;font-size: 11px;padding: 1px;\">\r\n                <pagination-controls (pageChange)=\"PageActual=$event\" autoHide=\"true\"></pagination-controls>\r\n              </div>\r\n            </td>\r\n          </tr> -->\r\n        </table>\r\n  \r\n      </div>\r\n      <!-- <div class=\"col-md-1  col-lg-1 col-12\">\r\n      </div> -->\r\n    \r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n      <div class=\"col-md-12  col-lg-12 col-12\" style=\"display: flex;\r\n      justify-content: flex-end;\r\n      margin-left: auto;\r\n      margin-right: 0;\">\r\n        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"ResetJson()\"> <span\r\n          class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Reset</span></button>\r\n      </div>\r\n      <!-- <div class=\"col-md-1 col-lg-1 col-12\">\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/einvoice-uploadirn.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/EInvoice/einvoice-uploadirn.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >\r\n    <div class=\"row no-gutters\"  >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>UPLOAD DETAILS</b> </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width130\">\r\n                        <span  class=\"col-form-span-label\"><b>Trans Type</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <td colspan=\"3\" >\r\n                        <div >\r\n                            <span class=\"col-form-span-label\">\r\n                             <input type=\"radio\" name=\"radioDisplay\" value=\"INV\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\" />&nbsp;Invoice</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n                             <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"CN\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\"  />&nbsp;Credit Note</span>\r\n                          </div>\r\n\r\n                                <!-- <div >\r\n                            <span class=\"col-form-span-label\">\r\n                           <input type=\"radio\" name=\"radioDisplay\" value=\"CN\" (change)=\"lblchange($event)\" [(ngModel)]=\"rdbtype\"  />&nbsp;Credit Note</span>\r\n                                 </div> -->\r\n                          </td>\r\n                 </tr>\r\n                 <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\"><b>Select File</b> </span>\r\n                        <span class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                <td colspan=\"3\">\r\n                    <input  type=\"file\" #inputFile  accept=\".csv,.xls,.xlsx,.doc,.docx,.ppt,.pptx,.txt,.pdf,.png\" (change)=\"onFileChange($event)\" class=\"form-control width180\">\r\n                     <!-- <input #fileUpload type=\"file\" class=\"col-form-span-label\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple accept=\".pdf\" /> -->\r\n                     <!-- <input type=\"text\" #Caption ngModel name=\"Caption\" id=\"Caption\"> -->\r\n                </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                      \r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"onupload()\"><span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Upload</span></button>\r\n                            &nbsp;&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"submit\" (click)=\"Reset()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i>Reset</span></button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12 \">\r\n        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <thead>\r\n                <tr class=\"col-form-span-heading\">\r\n                   \r\n                    <th   align=\"center\"><span  class=\"col-form-span-label\"> INV NO</span></th>\r\n                    <th   align=\"center\"><span  class=\"col-form-span-label\"> INV DATE</span> </th>\r\n                    <th   align=\"center\"><span  class=\"col-form-span-label\">  SUPPLY TYPE</span></th>\r\n                    <th   align=\"center\"> <span  class=\"col-form-span-label\"> CLIENT</span> </th>\r\n                    <th   align=\"center\"> <span  class=\"col-form-span-label\"> IRN NO</span> </th>\r\n                    <th   align=\"center\"> <span  class=\"col-form-span-label\">ACK NO</span> </th>\r\n                    <th   align=\"center\"> <span  class=\"col-form-span-label\">ACK DT</span> </th>\r\n                    <th   align=\"center\"> <span  class=\"col-form-span-label\">JSON CREATED BY</span> </th>\r\n                    <th   align=\"center\"> <span  class=\"col-form-span-label\">RESPONSE UPDATED BY</span> </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"data_table.length > 0\">\r\n                <tr *ngFor=\"let data of data_table\">\r\n                  \r\n                    <td><span  class=\"col-form-span-label\">{{data.INVNO}}</span>  </td>\r\n                    <td><span class=\"col-form-span-label\">{{data.INVDATE}}</span>   </td>\r\n                    <td><span  class=\"col-form-span-label\">{{data.SUPTYPE}}</span>  </td>\r\n                    <td><span  class=\"col-form-span-label\">{{data.CLIENTNAME}}</span>  </td>\r\n                    <td><span  class=\"col-form-span-label\">{{data.IRNNO}}</span>  </td>\r\n                    <td><span  class=\"col-form-span-label\">{{data.ACKNO}}</span>  </td>\r\n                    <td><span  class=\"col-form-span-label\">{{data.ACKDATE}}</span>  </td>\r\n                    <td><span  class=\"col-form-span-label\">{{ data['JSON CREATED BY']}}</span>  </td>\r\n                    <td><span  class=\"col-form-span-label\">{{ data['RESPONSE UPDATED BY']}}</span>  </td>\r\n                </tr>\r\n            </tbody>\r\n\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/EInvoice/ecreditnote-generatejson.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/EInvoice/ecreditnote-generatejson.component.ts ***!
  \*************************************************************************/
/*! exports provided: EcreditNoteGenerateJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcreditNoteGenerateJson", function() { return EcreditNoteGenerateJson; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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








var EcreditNoteGenerateJson = /** @class */ (function () {
    function EcreditNoteGenerateJson(_router, _dataService, _auth, _toasterService, _loginService, _loaderService, 
    //   private _http: Http,
    _config) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._config = _config;
        this.EcreditnoteListtbl = [];
        this.newArray = [];
        this.subheader = "";
        this.NoofRows = "";
    }
    EcreditNoteGenerateJson.prototype.ngOnInit = function () {
        this.rptdownloadurl = this._config.Server;
        this.subheader = "List Of Pending Credit Note From : " + this._dataService.datechnge1(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
            + " To :  " + this._dataService.datechnge1(new Date);
        this.GetECreditNoteList();
    };
    EcreditNoteGenerateJson.prototype.GetECreditNoteList = function () {
        var _this = this;
        var jsonmaster = {
            FINSTARTDT: this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE),
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_ECreditNote_List", jsonmaster)
            .subscribe(function (data) {
            console.log(data);
            _this.EcreditnoteListtbl = data.Table;
            _this.NoofRows = data.Table.length;
            _this._loaderService.display(false);
        });
    };
    EcreditNoteGenerateJson.prototype.getCheckboxValues = function (event, data) {
        var index = this.newArray.findIndex(function (x) { return x.InvNo == data; });
        if (event) {
            var obj = {
                InvNo: data
            };
            this.newArray.push(obj);
        }
        else {
            this.newArray.splice(index, 1);
        }
    };
    EcreditNoteGenerateJson.prototype.GenerateECreditNote = function () {
        var _this = this;
        if (this.newArray.length == 0) {
            alert('Please select at least One CreditNote No. ');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.InvNo;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        if (this.newArray.length > 0) {
            if (confirm('Are you sure you want to Generate Json for selected Credit Note No. \n ' + output1 + '?')) {
                this._loaderService.display(true);
                var adddata = {
                    CRTNO: output1,
                    CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                    CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                    CMPID: this._loginService.getLogin()[0].CMPID,
                    MAKERIP: this._loginService.getLogin()[0].MAKERIP,
                    FINSTARTDT: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                };
                //console.log(adddata)
                this._loaderService.display(true);
                this._dataService.getData("Accounts/ACC_ECREDITNOTEGETDATA_FORJSON", adddata)
                    .subscribe(function (data) {
                    if (data.Table7[0].STATUS == "100") {
                        alert(data.Table7[0].STATUSMSG);
                        _this.downloadFile(data.Table7[0].FILENAMET);
                        _this.GetECreditNoteList();
                        _this.newArray = [];
                        _this._loaderService.display(false);
                        return false;
                    }
                    else {
                        alert('No Json file to Generate !!');
                        _this._loaderService.display(false);
                        return false;
                    }
                });
            }
        }
    };
    EcreditNoteGenerateJson.prototype.downloadFile = function (fileName) {
        this._dataService.postAndGetResponse(fileName, 'creditnote').subscribe(function (fileData) {
            var blob = new Blob([fileData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var link = document.createElement("a");
            if (link.download !== undefined) {
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    };
    EcreditNoteGenerateJson.prototype.CreditNoteView = function (creditno) {
        if (creditno == '' || creditno == undefined || creditno.length < 15) {
            alert("Enter 15 digit CreditNote No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CreditNote-View/' + creditno + '/', "CreditNote View", toolbar);
    };
    EcreditNoteGenerateJson.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    EcreditNoteGenerateJson = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecreditnote-generatejson',
            template: __webpack_require__(/*! raw-loader!./ecreditnote-generatejson.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/ecreditnote-generatejson.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], EcreditNoteGenerateJson);
    return EcreditNoteGenerateJson;
}());



/***/ }),

/***/ "./src/app/accounts/EInvoice/ecreditnote-resetjson.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/EInvoice/ecreditnote-resetjson.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreditNoteResetJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteResetJson", function() { return CreditNoteResetJson; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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








var CreditNoteResetJson = /** @class */ (function () {
    function CreditNoteResetJson(_router, _dataService, _auth, _toasterService, _loginService, _loaderService, _activatedRoute, 
    //   private _http: Http, 
    _config) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._activatedRoute = _activatedRoute;
        this._config = _config;
        this.resetjsonlist = [];
        this.newArray = [];
        this.subheader = "";
        this.JsonId = "";
    }
    CreditNoteResetJson.prototype.ngOnInit = function () {
        this.subheader = "List Of JSON Created Credit Note From : " + this._dataService.datechnge1(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
            + " To :  " + this._dataService.datechnge1(new Date);
        this.GetResetJsonList();
    };
    CreditNoteResetJson.prototype.GetResetJsonList = function () {
        var _this = this;
        var jsonmaster = {
            FINSTARTDT: this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE),
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_ECreditNote_ResetJsonList", jsonmaster)
            .subscribe(function (data) {
            console.log(data);
            _this.resetjsonlist = data.Table;
            _this._loaderService.display(false);
        });
    };
    CreditNoteResetJson.prototype.getCheckboxValues = function (event, jsonid, id, invno, i) {
        var _this = this;
        this.newArray = this.newArray || [];
        this.JsonId = jsonid;
        if (event) {
            // Selecting: Update all checkboxes with the same jsonid to be checked
            this.resetjsonlist.forEach(function (item) {
                if (item.FK_JSON_ID === jsonid) {
                    var obj = {
                        id: item.ID,
                        jsonid: item.FK_JSON_ID,
                        invno: item.INV_NO,
                        Checked: true // Mark as selected
                    };
                    // Add to newArray only if not already present
                    if (!_this.newArray.some(function (x) { return x.id === item.ID; })) {
                        _this.newArray.push(obj);
                    }
                    item.Checked = true; // Update the UI state
                }
                else {
                    item.Checked = false; // Uncheck others with different jsonid
                }
            });
        }
        else {
            // Deselecting: Update all checkboxes with the same jsonid to be unchecked
            this.resetjsonlist.forEach(function (item) {
                if (item.FK_JSON_ID === jsonid) {
                    item.Checked = false; // Uncheck in UI
                    // Remove from newArray
                    _this.newArray = _this.newArray.filter(function (x) { return x.jsonid !== jsonid; });
                }
            });
        }
        console.log(this.newArray);
    };
    CreditNoteResetJson.prototype.getCheckboxValuesold = function (event, jsonid, id, invno, i) {
        var _this = this;
        this.newArray = [];
        this.JsonId = "";
        this.JsonId = jsonid;
        var index = this.newArray.findIndex(function (x) { return x.id == id; });
        if (event) {
            // Update all checkboxes with the same jsonid to be checked
            this.resetjsonlist.forEach(function (item) {
                if (item.FK_JSON_ID === jsonid) {
                    var obj = {
                        id: item.ID,
                        jsonid: item.FK_JSON_ID,
                        invno: item.INV_NO,
                        Checked: true // Assuming your object has a Checked property
                    };
                    _this.newArray.push(obj);
                    item.Checked = true;
                }
                else {
                    item.Checked = false;
                }
            });
        }
        else {
            if (index !== -1) {
                this.newArray.splice(index, 1);
            }
        }
        console.log(this.newArray);
    };
    CreditNoteResetJson.prototype.ResetJson = function () {
        var _this = this;
        if (this.newArray.length == 0) {
            alert('Please select at least one Json File. ');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.invno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var outputinvoiceid = this.newArray.map(function (item) {
            return item.id;
        });
        var datatry1 = outputinvoiceid.join(",");
        var outputinvoiceid1 = datatry1;
        console.log(outputinvoiceid1);
        console.log(output1);
        if (this.newArray.length > 0) {
            if (confirm('Are you sure you want to Reset Json File \n ' + output1 + '?')) {
                this._loaderService.display(true);
                var adddata = {
                    JSONFILEID: this.JsonId,
                    CRNOTEID: outputinvoiceid1
                };
                this._loaderService.display(true);
                //console.log(adddata)
                this._dataService.getData("Accounts/ACC_ECREDITNOTERESETDATA_FORJSON", adddata)
                    .subscribe(function (data) {
                    if (data.Table[0].STATUS == "100") {
                        alert(data.Table[0].STATUSMSG);
                        _this.GetResetJsonList();
                        _this.newArray = [];
                        _this._loaderService.display(false);
                        return false;
                    }
                    else {
                        alert('No Json file to Reset !!');
                        _this._loaderService.display(false);
                        return false;
                    }
                });
            }
        }
    };
    CreditNoteResetJson.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    CreditNoteResetJson = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecreditnote-resetjson',
            template: __webpack_require__(/*! raw-loader!./ecreditnote-resetjson.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/ecreditnote-resetjson.component.html"),
            styles: ["\n    .green-text {\n        color: green; /* Adjust the styles as per your requirement */\n      },\n      .disabled-row {\n        opacity: 0.5; /* or any other styling to indicate a disabled state */\n        pointer-events: none; /* Disable pointer events */\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], CreditNoteResetJson);
    return CreditNoteResetJson;
}());



/***/ }),

/***/ "./src/app/accounts/EInvoice/einvoice-generatejson.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/EInvoice/einvoice-generatejson.component.ts ***!
  \**********************************************************************/
/*! exports provided: GenerateJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateJson", function() { return GenerateJson; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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








var GenerateJson = /** @class */ (function () {
    function GenerateJson(_router, _dataService, _auth, _toasterService, _loginService, _loaderService, _activatedRoute, 
    //   private _http: Http, 
    _config) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._activatedRoute = _activatedRoute;
        this._config = _config;
        this.EInvoiceListtbl = [];
        this.ECreditNoteListtbl = [];
        this.newArray = [];
        this.subheader = "";
        this.jsontype = "";
        this.NoofRows = "";
    }
    GenerateJson.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            // this.jsontype = params["jsontype"]     
            _this.rptdownloadurl = _this._config.Server;
            _this.subheader = "List Of Pending Invoice From : " + _this._dataService.datechnge1(_this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
                + " To :  " + _this._dataService.datechnge1(new Date);
            _this.GetEInvoiceList();
        });
    };
    GenerateJson.prototype.GetEInvoiceList = function () {
        var _this = this;
        var jsonmaster = {
            FINSTARTDT: this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE),
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_EInvoice_List", jsonmaster)
            .subscribe(function (data) {
            console.log(data);
            _this.EInvoiceListtbl = data.Table;
            _this.NoofRows = data.Table.length;
            _this._loaderService.display(false);
        });
    };
    GenerateJson.prototype.getCheckboxValues = function (event, data) {
        var index = this.newArray.findIndex(function (x) { return x.InvNo == data; });
        if (event) {
            var obj = {
                InvNo: data
            };
            this.newArray.push(obj);
        }
        else {
            this.newArray.splice(index, 1);
        }
    };
    GenerateJson.prototype.GenerateEInvoice = function () {
        var _this = this;
        if (this.newArray.length == 0) {
            alert('Please select at least One Invoice No. ');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.InvNo;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        if (this.newArray.length > 0) {
            if (confirm('Are you sure you want to Generate Json for selected Invoice No. \n ' + output1 + '?')) {
                this._loaderService.display(true);
                var adddata = {
                    INVNO: output1,
                    CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                    CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                    CMPID: this._loginService.getLogin()[0].CMPID,
                    MAKERIP: this._loginService.getLogin()[0].MAKERIP,
                    FINSTARTDT: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                };
                //console.log(adddata)
                this._loaderService.display(true);
                this._dataService.getData("Accounts/ACC_EINVOICEGETDATA_FORJSON", adddata)
                    .subscribe(function (data) {
                    if (data.Table7[0].STATUS == "100") {
                        alert(data.Table7[0].STATUSMSG);
                        _this.downloadFile(data.Table7[0].FILENAMET);
                        _this.GetEInvoiceList();
                        _this.newArray = [];
                        _this._loaderService.display(false);
                        return false;
                    }
                    else {
                        alert('No Json file to Generate !!');
                        _this._loaderService.display(false);
                        return false;
                    }
                });
            }
        }
    };
    // downloadFile(fname): Observable<any>{
    //   return this._http.get(this.rptdownloadurl + '/EInvoice/EInvoiceJson/fname', {responseType: ResponseContentType.Blob});
    // }
    GenerateJson.prototype.download = function (url, downloadName) {
        var a = document.createElement("a");
        a.download = downloadName;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }, 100);
        // a.parentNode.removeChild(a);
        document.body.removeChild(a);
        return false;
    };
    GenerateJson.prototype.downloadFile = function (fileName) {
        this._dataService.postAndGetResponse(fileName, 'invoice').subscribe(function (fileData) {
            var blob = new Blob([fileData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var link = document.createElement("a");
            if (link.download !== undefined) {
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    };
    GenerateJson.prototype.InvoiceView = function (Invoiceno) {
        if (Invoiceno.length == 14) {
            Invoiceno = "0" + Invoiceno;
        }
        if (Invoiceno == '' || Invoiceno == undefined || Invoiceno.length < 15) {
            alert("Enter 15 digit Invoice No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Invoice-View/' + Invoiceno + '/', "Invoice View", toolbar);
    };
    GenerateJson.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    GenerateJson = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-einvoice-generatejson',
            template: __webpack_require__(/*! raw-loader!./einvoice-generatejson.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/einvoice-generatejson.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], GenerateJson);
    return GenerateJson;
}());



/***/ }),

/***/ "./src/app/accounts/EInvoice/einvoice-resetjson.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/accounts/EInvoice/einvoice-resetjson.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetJson", function() { return ResetJson; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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








var ResetJson = /** @class */ (function () {
    function ResetJson(_router, _dataService, _auth, _toasterService, _loginService, _loaderService, _activatedRoute, 
    //   private _http: Http, 
    _config) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this._activatedRoute = _activatedRoute;
        this._config = _config;
        this.resetjsonlist = [];
        this.newArray = [];
        this.subheader = "";
        this.JsonId = "";
    }
    ResetJson.prototype.ngOnInit = function () {
        this.subheader = "List Of JSON Created Invoices From : " + this._dataService.datechnge1(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
            + " To :  " + this._dataService.datechnge1(new Date);
        this.GetResetJsonList();
    };
    ResetJson.prototype.GetResetJsonList = function () {
        var _this = this;
        var jsonmaster = {
            FINSTARTDT: this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE),
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_EInvoice_ResetJsonList", jsonmaster)
            .subscribe(function (data) {
            console.log(data);
            _this.resetjsonlist = data.Table;
            _this._loaderService.display(false);
        });
    };
    ResetJson.prototype.getCheckboxValuesold = function (event, jsonid, id, invno, i) {
        var _this = this;
        this.newArray = [];
        this.JsonId = "";
        this.JsonId = jsonid;
        var index = this.newArray.findIndex(function (x) { return x.id == id; });
        if (event) {
            // Update all checkboxes with the same jsonid to be checked
            this.resetjsonlist.forEach(function (item) {
                if (item.FK_JSON_ID === jsonid) {
                    var obj = {
                        id: item.ID,
                        jsonid: item.FK_JSON_ID,
                        invno: item.INV_NO,
                        Checked: true // Assuming your object has a Checked property
                    };
                    _this.newArray.push(obj);
                    item.Checked = true;
                }
                else {
                    item.Checked = false;
                }
            });
        }
        else {
            console.log(index);
            if (index !== -1) {
                this.newArray.splice(index, 1);
            }
        }
        console.log(this.newArray);
    };
    ResetJson.prototype.getCheckboxValues = function (event, jsonid, id, invno, i) {
        var _this = this;
        this.newArray = this.newArray || [];
        this.JsonId = jsonid;
        if (event) {
            // Selecting: Update all checkboxes with the same jsonid to be checked
            this.resetjsonlist.forEach(function (item) {
                if (item.FK_JSON_ID === jsonid) {
                    var obj = {
                        id: item.ID,
                        jsonid: item.FK_JSON_ID,
                        invno: item.INV_NO,
                        Checked: true // Mark as selected
                    };
                    // Add to newArray only if not already present
                    if (!_this.newArray.some(function (x) { return x.id === item.ID; })) {
                        _this.newArray.push(obj);
                    }
                    item.Checked = true; // Update the UI state
                }
                else {
                    item.Checked = false; // Uncheck others with different jsonid
                }
            });
        }
        else {
            // Deselecting: Update all checkboxes with the same jsonid to be unchecked
            this.resetjsonlist.forEach(function (item) {
                if (item.FK_JSON_ID === jsonid) {
                    item.Checked = false; // Uncheck in UI
                    // Remove from newArray
                    _this.newArray = _this.newArray.filter(function (x) { return x.jsonid !== jsonid; });
                }
            });
        }
        console.log(this.newArray);
    };
    ResetJson.prototype.ResetJson = function () {
        var _this = this;
        if (this.newArray.length == 0) {
            alert('Please select at least one Json File. ');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.invno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var outputinvoiceid = this.newArray.map(function (item) {
            return item.id;
        });
        var datatry1 = outputinvoiceid.join(",");
        var outputinvoiceid1 = datatry1;
        console.log(outputinvoiceid1);
        console.log(output1);
        if (this.newArray.length > 0) {
            if (confirm('Are you sure you want to Reset Json File \n ' + output1 + '?')) {
                this._loaderService.display(true);
                var adddata = {
                    JSONFILEID: this.JsonId,
                    INVOICEID: outputinvoiceid1,
                };
                this._loaderService.display(true);
                //console.log(adddata)
                this._dataService.getData("Accounts/ACC_EINVOICERESETDATA_FORJSON", adddata)
                    .subscribe(function (data) {
                    if (data.Table[0].STATUS == "100") {
                        alert(data.Table[0].STATUSMSG);
                        _this.GetResetJsonList();
                        _this.newArray = [];
                        _this._loaderService.display(false);
                        return false;
                    }
                    else {
                        alert('No Json file to Reset !!');
                        _this._loaderService.display(false);
                        return false;
                    }
                });
            }
        }
    };
    ResetJson.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    ResetJson = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-einvoice-resetjson',
            template: __webpack_require__(/*! raw-loader!./einvoice-resetjson.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/einvoice-resetjson.component.html"),
            styles: ["\n    .green-text {\n        color: green; /* Adjust the styles as per your requirement */\n      },\n      .disabled-row {\n        opacity: 0.5; /* or any other styling to indicate a disabled state */\n        pointer-events: none; /* Disable pointer events */\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], ResetJson);
    return ResetJson;
}());



/***/ }),

/***/ "./src/app/accounts/EInvoice/einvoice-uploadirn.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/accounts/EInvoice/einvoice-uploadirn.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadIRN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadIRN", function() { return UploadIRN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
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

// import { HttpClient,HttpHeaders } from '@angular/common/http';

;





var UploadIRN = /** @class */ (function () {
    function UploadIRN(_dataService, http, _loginService, _config, _loaderService) {
        this._dataService = _dataService;
        this.http = http;
        this._loginService = _loginService;
        this._config = _config;
        this._loaderService = _loaderService;
        //form: FormGroup;
        this.Header = "E-INVOICE UPLOAD JSON RESPONSE";
        this.rdbtype = "INV";
        this.selectedFileNames = [];
        this.selectedFile = null;
        this.fileToUpload = null;
        this.selfilename = "";
        this.uploadurl = "";
        this.url = "";
        this.selectedfile = null;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.onUploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.data_table = [];
    }
    UploadIRN.prototype.ngOnInit = function () {
        this.uploadurl = this._config.ServerWithApiUrl;
        this.url = this.uploadurl + "Accounts/UploadIRNFile";
    };
    UploadIRN.prototype.onFileChange = function (event) {
        this.selectedFile = event.target.files[0];
        this.selfilename = this.selectedFile.name;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.myForm.patchValue({
                fileSource: file
            });
        }
    };
    UploadIRN.prototype.onupload = function () {
        var _this = this;
        if (this.selectedFile == undefined) {
            alert('Please select file to upload');
            return false;
        }
        this._loaderService.display(true);
        var filedata = new FormData();
        filedata.append("file", this.selectedFile, this.selectedFile.name);
        filedata.append("transtype", this.rdbtype);
        filedata.append("cmpid", this._loginService.getLogin()[0].CMPID);
        filedata.append("vguid", this._loginService.getLogin()[0].GUID);
        filedata.append("makerip", this._loginService.getLogin()[0].MAKERIP);
        this.http.post(this.url, filedata)
            // this.http.post("http://localhost:45896/api/Accounts/UploadIRNFile",filedata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.data_table = data.Table1;
                _this._loaderService.display(false);
                alert(data.Table[0].STATUSTXT);
            }
            else {
                alert(data.Table[0].STATUSTXT);
            }
            _this.selectedFile = null;
            _this._loaderService.display(false);
        });
        this.myInputVariable.nativeElement.value = "";
    };
    UploadIRN.prototype.Reset = function () {
        this.data_table = [];
    };
    UploadIRN.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_5__["Configuration"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UploadIRN.prototype, "myInputVariable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadIRN.prototype, "onUploadFinished", void 0);
    UploadIRN = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-einvoice-uploadirn',
            template: __webpack_require__(/*! raw-loader!./einvoice-uploadirn.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/EInvoice/einvoice-uploadirn.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_5__["Configuration"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], UploadIRN);
    return UploadIRN;
}());



/***/ }),

/***/ "./src/app/accounts/EInvoice/einvoice.module.ts":
/*!******************************************************!*\
  !*** ./src/app/accounts/EInvoice/einvoice.module.ts ***!
  \******************************************************/
/*! exports provided: einvoicemodule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "einvoicemodule", function() { return einvoicemodule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _einvoice_generatejson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./einvoice-generatejson.component */ "./src/app/accounts/EInvoice/einvoice-generatejson.component.ts");
/* harmony import */ var _einvoice_uploadirn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./einvoice-uploadirn.component */ "./src/app/accounts/EInvoice/einvoice-uploadirn.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _einvoice_resetjson_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./einvoice-resetjson.component */ "./src/app/accounts/EInvoice/einvoice-resetjson.component.ts");
/* harmony import */ var _ecreditnote_generatejson_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ecreditnote-generatejson.component */ "./src/app/accounts/EInvoice/ecreditnote-generatejson.component.ts");
/* harmony import */ var _ecreditnote_resetjson_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ecreditnote-resetjson.component */ "./src/app/accounts/EInvoice/ecreditnote-resetjson.component.ts");
/* harmony import */ var _einvoice_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./einvoice.routing */ "./src/app/accounts/EInvoice/einvoice.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { ClientEdiDesignComponent } from './client-edi-design.component';
// import { ClientedifilterpipePipe } from './client-edifilterpipe.pipe';
var einvoicemodule = /** @class */ (function () {
    function einvoicemodule() {
    }
    einvoicemodule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_einvoice_routing__WEBPACK_IMPORTED_MODULE_11__["einvoiceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_6__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                //SharedModule
            ],
            declarations: [_einvoice_generatejson_component__WEBPACK_IMPORTED_MODULE_2__["GenerateJson"], _einvoice_uploadirn_component__WEBPACK_IMPORTED_MODULE_3__["UploadIRN"], _einvoice_resetjson_component__WEBPACK_IMPORTED_MODULE_8__["ResetJson"], _ecreditnote_generatejson_component__WEBPACK_IMPORTED_MODULE_9__["EcreditNoteGenerateJson"], _ecreditnote_resetjson_component__WEBPACK_IMPORTED_MODULE_10__["CreditNoteResetJson"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], einvoicemodule);
    return einvoicemodule;
}());



/***/ }),

/***/ "./src/app/accounts/EInvoice/einvoice.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/accounts/EInvoice/einvoice.routing.ts ***!
  \*******************************************************/
/*! exports provided: einvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "einvoiceRoutingModule", function() { return einvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _einvoice_uploadirn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./einvoice-uploadirn.component */ "./src/app/accounts/EInvoice/einvoice-uploadirn.component.ts");
/* harmony import */ var _einvoice_resetjson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./einvoice-resetjson.component */ "./src/app/accounts/EInvoice/einvoice-resetjson.component.ts");
/* harmony import */ var _einvoice_generatejson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./einvoice-generatejson.component */ "./src/app/accounts/EInvoice/einvoice-generatejson.component.ts");
/* harmony import */ var _ecreditnote_generatejson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ecreditnote-generatejson.component */ "./src/app/accounts/EInvoice/ecreditnote-generatejson.component.ts");
/* harmony import */ var _ecreditnote_resetjson_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecreditnote-resetjson.component */ "./src/app/accounts/EInvoice/ecreditnote-resetjson.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ClientEdiDesignComponent } from './client-edi-design.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Report'
        },
        children: [
            { path: 'GenerateJson', component: _einvoice_generatejson_component__WEBPACK_IMPORTED_MODULE_4__["GenerateJson"], data: { title: 'Generate Json' } },
            { path: 'UploadIRN', component: _einvoice_uploadirn_component__WEBPACK_IMPORTED_MODULE_2__["UploadIRN"], data: { title: 'Upload IRN' } },
            { path: 'ResetJson', component: _einvoice_resetjson_component__WEBPACK_IMPORTED_MODULE_3__["ResetJson"], data: { title: 'Reset Invoice Json' } },
            { path: 'GeneratecnJson', component: _ecreditnote_generatejson_component__WEBPACK_IMPORTED_MODULE_5__["EcreditNoteGenerateJson"], data: { title: 'Generate Json' } },
            { path: 'ResetcnJson', component: _ecreditnote_resetjson_component__WEBPACK_IMPORTED_MODULE_6__["CreditNoteResetJson"], data: { title: 'Reset CreditNote Json' } },
        ]
    }
];
var einvoiceRoutingModule = /** @class */ (function () {
    function einvoiceRoutingModule() {
    }
    einvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], einvoiceRoutingModule);
    return einvoiceRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=EInvoice-einvoice-module.js.map