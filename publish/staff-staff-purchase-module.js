(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-purchase-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpur-GenCode.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Request/staff/staffpur-GenCode.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>{{strheader}}</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n      <div class=\"col-md-1\">\r\n        </div>\r\n      <div   class=\"col-md-10\" style=\"overflow-y: auto;height: 500px;\">\r\n        <table  class=\"table table-bordered table-sm-new bgwhite table-hover\" >\r\n          <thead>\r\n           \r\n            <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n              <th  class=\"col-form-span-label\"> GENERATE </th>\r\n              <th class=\"col-form-span-label\">\r\n                STATUS\r\n              </th>\r\n              <th class=\"col-form-span-label\">\r\n                REQ CODE\r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                REQUESTED BY \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                REQUESTED ON \r\n              </th>\r\n              <th *ngIf=\" Status == 'SRPI' || Status == 'RPI'\" class=\"col-form-span-label\" >\r\n                AMOUNT \r\n              </th>\r\n              <th *ngIf=\" Status == 'JVREQ'\"class=\"col-form-span-label\" >\r\n                DEBIT \r\n              </th>\r\n              <th *ngIf=\"Status == 'JVREQ'\" class=\"col-form-span-label\" >\r\n               CREDIT\r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AUTHORISED BY \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AUTHORISED ON \r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr *ngFor=\"let obj of datatable \"     >\r\n              <td >  <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"GenerateCodeJVCPSRPI(obj.REQCODE,obj.PSTATUS,obj.AUTHORISATIONSTATUS,obj.ISGEN_RIGHTS)\"> <span\r\n                *ngIf=\"obj.ISGEN_RIGHTS !='1' && obj.PSTATUS =='JVREQ'\" class=\"col-form-span-label\"><i  class=\"fa fa-lock\"></i>lock</span>\r\n                <span *ngIf=\"obj.ISGEN_RIGHTS =='1' && obj.PSTATUS =='JVREQ'\" class=\"col-form-span-label\"><i  class=\"fa fa-laptop\"></i>Generate</span>\r\n                <span *ngIf=\"obj.PSTATUS =='RCP' || obj.PSTATUS =='RPI' || obj.PSTATUS =='SRPI'\" class=\"col-form-span-label\"> <i  class=\"fa fa-laptop\"></i>Generate</span></button> </td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISESTATUS}}</td>\r\n              <td class=\"col-form-span-label link-label\"  (click)=\"ViewData(obj.REQCODE,obj.PSTATUS)\"><u> {{obj.REQCODE}}</u> </td> \r\n              <td class=\"col-form-span-label\">{{obj.REQUESTEDBY}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.REQUESTEDON}}</td>\r\n              <td *ngIf=\" obj.PSTATUS == 'SRPI' || obj.PSTATUS == 'RPI'\" class=\"col-form-span-label\">{{obj.AMOUNT}}</td>\r\n              <td *ngIf=\" obj.PSTATUS == 'JVREQ'\"class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.DEBIT|number:'2.2-4'}}</td>\r\n              <td *ngIf=\" obj.PSTATUS == 'JVREQ'\"class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.CREDIT|number:'2.2-4'}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISEDBY}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISATIONDATE}}</td>\r\n              \r\n            </tr>\r\n          </tbody>\r\n       \r\n        </table>\r\n          </div>\r\n      <div class=\"col-md-1\">\r\n      </div>\r\n    </div>           \r\n  </div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase-Auth.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Request/staff/staffpurchase-Auth.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header formheading\">\r\n            <strong>{{strheader}}</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" >\r\n      <div class=\"col-md-1\">\r\n        <!-- <app-staffpurchase-view [callgetdataforauth]=\"getdataforauth()\" ></app-staffpurchase-view> -->\r\n      </div>\r\n      <div   class=\"col-md-10\" style=\"overflow-y: auto;height: 500px;\">\r\n        <table *ngIf=\" srpidata != ''\" class=\"table table-bordered table-sm-new bgwhite table-hover\" >\r\n          <thead>\r\n           \r\n            <tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n              <th *ngIf=\" FLAG != 'VIEW'\" class=\"col-form-span-label\"><input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp; </th>\r\n          \r\n              <th class=\"col-form-span-label\">\r\n                REQ CODE\r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                REQUESTED ON \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                REQUESTED BY \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AMOUNT \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AUTHORISED BY \r\n              </th>\r\n              <th class=\"col-form-span-label\" >\r\n                AUTHORISED ON \r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"bgwhite\">\r\n            <tr\r\n              *ngFor=\"let obj of srpidata \"  \r\n              >\r\n              <td *ngIf=\" FLAG != 'VIEW'\" class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.Checked\"\r\n                  (ngModelChange)=\"getCheckboxValues($event,obj.REQCODE)\"> &nbsp; </td>\r\n        \r\n               <td class=\"col-form-span-label link-label\"  (click)=\"srpinvoiceviewdata(obj.REQCODE,FLAG,authstatus,Status)\"><u> {{obj.REQCODE}}</u> </td> \r\n              <!-- <td class=\"col-form-span-label link-label\" (click)=\"srpinvoiceviewdata(obj.REQCODE,FLAG,authstatus)\">{{obj.REQCODE}}</td> -->\r\n              <td class=\"col-form-span-label\">{{obj.REQUESTEDON}}</td>\r\n              <td class=\"col-form-span-label\">{{obj.REQUESTEDBY}}</td>\r\n              <td class=\"col-form-span-label\" style=\"text-align: right;\">{{obj.AMOUNT|number:'2.2-4'}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISEDBY}}</td>\r\n              <td class=\"col-form-span-label\" >{{obj.AUTHORISATIONDATE}}</td>\r\n            </tr>\r\n          </tbody>\r\n        \r\n          <tr >\r\n               <td *ngIf=\"(hidebtnrow =='U' || hidebtnrow == 'M')  \"  colspan=\"8\" class=\"right-text pr-2\">\r\n                <button *ngIf=\"Status=='RPI'\" class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Verify()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Verify</span></button>\r\n                  <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"rejectdata()\"> <span\r\n                    class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Reject</span></button>\r\n                       <button class=\"btn btn-sm btn-success\" *ngIf=\" hidebtnrow =='U' \" type=\"submit\" (click)=\"Passdatatomanagement()\"> <span\r\n                  class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>Management</span></button>\r\n                 \r\n            </td>\r\n          </tr>\r\n        \r\n        </table>\r\n        <table class=\"table table-bordered table-sm-new bgwhite table-hover\">\r\n          <tr>\r\n            <td colspan=\"10\" class=\"right-text pr-2\">\r\n         \r\n           <span class=\"col-form-span-label link-label\" (click)=\"VerifiedDataList('V')\" ><b><u>Verified</u></b></span>&nbsp;&nbsp;\r\n           <span class=\"col-form-span-label link-label\" (click)=\"getdataforauth()\" ><b><u>UnVerified</u></b></span>&nbsp;&nbsp;\r\n             <span class=\"col-form-span-label link-label\" (click)=\"VerifiedDataList('R')\" ><b><u>Rejected</u></b></span>&nbsp;&nbsp;\r\n             <span class=\"col-form-span-label link-label\" (click)=\"VerifiedDataList('M')\" ><b><u>Management</u></b></span>&nbsp;&nbsp;\r\n          \r\n         </td>\r\n       </tr>\r\n        </table> \r\n        \r\n     \r\n      </div>\r\n      <div class=\"col-md-1\">\r\n      </div>\r\n    </div>           \r\n  </div>  \r\n   \r\n  <div bsModal #Staff=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\r\n    <div class=\"modal-dialog modal-lg\" >\r\n        <div class=\"modal-content\">\r\n           <div class=\"modal-header\">\r\n          \r\n            <!-- <button type=\"button\" class=\"close order-1\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">×</span>\r\n           </button>\r\n          </div> -->\r\n        \r\n        </div>\r\n            <div class=\"modal-body modal-fix-body\">\r\n              <app-staffpurchase-view  (hideModal)=\"abortStaff($event)\"  [purcode]=\"PURCODE\" [flag]=\"FLAG\" [authstatus]=\"authstatus\" [authstatlist]=\"authstat\" *ngIf=\"PURCODE !=''\"></app-staffpurchase-view>  \r\n               <!-- <app-accounts-transaction-purchase-search></app-accounts-transaction-purchase-search>    -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n \r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase-view.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Request/staff/staffpurchase-view.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <table class=\"table table-bordered table-sm-new bgwhite\">\r\n        <tr>\r\n          <td class=\"col-form-span-heading \" colspan=\"4\">\r\n            General Details\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><span class=\"col-form-span-label\"><b>Purchase No </b> </span></td>\r\n          <td> <span class=\"col-form-span-label\">{{PUR_CODE}}</span> </td>\r\n          <td><span class=\"col-form-span-label\"><b>Purchase Date </b> </span></td>\r\n          <td><span class=\"col-form-span-label\">{{PUR_DATE}}</span> </td>\r\n        </tr>\r\n        <tr>\r\n            <td><span class=\"col-form-span-label\"><b>Narration </b> </span></td>\r\n            <td colspan=\"3\"> <span class=\"col-form-span-label\">{{REMARKS}}</span> </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"col-form-span-heading  \" colspan=\"4\">\r\n            Staff Details\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n            <td><span class=\"col-form-span-label\"><b>Staff Name </b> </span></td>\r\n            <td> <span class=\"col-form-span-label\">{{PUR_SUPPLIERNAME}}</span> </td>\r\n            \r\n        </tr>\r\n        <tr>\r\n            <td class=\"col-form-span-heading \" colspan=\"2\">\r\n                Passing Details \r\n            </td>\r\n            <td  colspan=\"2\"\r\n              class=\"col-form-span-label\"> \r\n              <span class=\"col-form-span-label\" ><b>IsPassed</b>  </span>  \r\n              <input type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"IsPassed\">\r\n          </td>\r\n          </tr>\r\n          <tr>\r\n            <td><span class=\"col-form-span-label\"><b>Passed By </b> </span></td>\r\n            <td> <span class=\"col-form-span-label\">{{PASSEDBYPERSON}}</span> </td>\r\n            <td><span class=\"col-form-span-label\"><b>Passed Amount </b> </span></td>\r\n            <td><span class=\"col-form-span-label\">{{PASSEDAMOUNT}}</span> </td>\r\n          </tr>\r\n          <tr>\r\n              <td><span class=\"col-form-span-label\"><b>Invoice Amount </b> </span></td>\r\n              <td> <span class=\"col-form-span-label\">{{SUPINVAMT}}</span> </td>\r\n              <td><span class=\"col-form-span-label\"><b>Voucher No. </b> </span></td>\r\n              <td> <span class=\"col-form-span-label\">{{VOUCHERNO}}</span> </td>\r\n          </tr>\r\n         \r\n        <tr>\r\n          <td class=\"col-form-span p-1\" colspan=\"4\">\r\n          </td>\r\n        </tr>\r\n        <td class=\"col-form-span-heading \" colspan=\"4\">\r\n            Account Details \r\n        </td>\r\n        <tr *ngIf=\" flag != 'Y' &&  flag == 'EDIT'\">\r\n          <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n          <td colspan=\"3\">\r\n            <span class=\"col-form-span-label\">{{ACCTNAME}}</span>  \r\n              <!-- <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n              [(ngModel)]=\"AccountName\" [disabled]=\"disable_Accountname\" class=\"custom \" placeholder=\"--Select--\">\r\n          </ng-select> -->\r\n\r\n          </td>\r\n      </tr>\r\n      <tr *ngIf=\" flag == 'VIEW'\">\r\n          <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n          <td colspan=\"3\">\r\n            <span class=\"col-form-span-label\">{{ItemName}}</span>\r\n              <!-- <ng-select [items]=\"Allitemlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n              class=\"custom \" [disabled]=\"disable_Item\" placeholder=\"--Select--\">\r\n          </ng-select> -->\r\n          </td>\r\n      </tr>\r\n      <tr *ngIf=\" flag == 'EDIT'\">\r\n          <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n          <td> <span class=\"col-form-span-label\">{{Amount}}</span> </td>\r\n          <!-- <td >  <input [(ngModel)]=\"Amount\"  [disabled]=\"disable_Amount\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n          <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n          <!-- <td >  <input [(ngModel)]=\"Deduction\"  type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n          <td> <span class=\"col-form-span-label\">{{Deduction}}</span> </td>\r\n      </tr>\r\n      <tr *ngIf=\" flag == 'EDIT'\">\r\n          <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n          <td> <span class=\"col-form-span-label\">{{JobNo}}</span> </td>\r\n          <!-- <td >  <input [(ngModel)]=\"JobNo\" type=\"text\" [disabled]=\"disable_JobNo\"  class=\"form-control width150\" maxlength=\"40\" > </td> -->\r\n          <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\r\n          <td >  <input [(ngModel)]=\"actpassedamount\"  type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n      </tr>\r\n      <tr *ngIf=\" flag != 'VIEW'\">\r\n          <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n          <td colspan=\"3\">\r\n              <input [(ngModel)]=\"ActNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n          </td>\r\n      </tr>\r\n\r\n      <tr *ngIf=\" flag == 'EDIT'\">\r\n          <td colspan=\"4\"  class=\"centerlabel\">\r\n              <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n              <!-- <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button> -->\r\n          </td>\r\n      </tr>\r\n      <tr>\r\n\r\n      </tr>\r\n      <tr >\r\n\r\n          <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n          <td *ngIf=\" flag == 'EDIT'\" colspan=\"3\">  <input [(ngModel)]=\"NetAmt\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n          <td *ngIf=\" flag == 'VIEW'\" colspan=\"3\"> <span class=\"col-form-span-label\">{{NetAmt}}</span> </td>\r\n  </tr>\r\n\r\n  <tr>\r\n      <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n      <td *ngIf=\" flag == 'EDIT'\">  <input [(ngModel)]=\"NetAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n      <td *ngIf=\" flag == 'VIEW'\"> <span class=\"col-form-span-label\">{{NetAmount}}</span> </td>\r\n      <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n      <td *ngIf=\" flag == 'EDIT'\">  <input [(ngModel)]=\"Netdeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n      <td *ngIf=\" flag == 'VIEW'\"> <span class=\"col-form-span-label\">{{Netdeduction}}</span> </td>\r\n  </tr>\r\n  <!-- <tr>\r\n      <td colspan=\"4\"  class=\"centerlabel\">\r\n          <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n         \r\n      </td>\r\n  </tr> -->\r\n        <tr>\r\n          <td colspan=\"4\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite \">\r\n              <thead>\r\n                <tr class=\"col-form-span-heading \">\r\n                  <th  *ngIf=\" flag == 'EDIT'\" class=\"col-form-span-label\" ></th>\r\n                  <th class=\"col-form-span-label\">Account Name</th>\r\n                  <th class=\"col-form-span-label\">Amount</th>\r\n                  <th class=\"col-form-span-label\">Deduction</th>\r\n                  <th class=\"col-form-span-label\">Pass Amt</th>\r\n                  <th class=\"col-form-span-label\">Item</th>\r\n                  <th class=\"col-form-span-label\">Job No</th>\r\n                  <th class=\"col-form-span-label\">Narration </th>\r\n                 \r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of datatabl_1\">\r\n                  <td *ngIf=\" flag == 'EDIT'\" class=\"centerlabel\">\r\n                    <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(data.ID)\" ></i>\r\n                    &nbsp;\r\n                    <i class=\"fa fa-trash\" (click)=\"deletechildrecd(data.ID,obj.ACC_PURCHASEDTLS_ID)\"></i>\r\n                </td>\r\n                <td><span class=\"col-form-span-label\"  [innerHtml]=\"data.ACCOUNT_NAME\"> </span></td>\r\n                  <td class=\"col-form-span-label\">{{data.AMOUNT}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.DEDUCTION}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.SRPIPASSAMOUNT}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.ITEM}}</td>\r\n                  <td class=\"col-form-span-label anchor-link\" (click)=\"jobprofitreport(data.JOBNO)\">{{data.JOBNO}}</td>\r\n                  <td class=\"col-form-span-label\">{{data.NARRATION}}</td>\r\n                </tr>\r\n            \r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr  >\r\n          <td colspan=\"4\"  class=\"centerlabel\">\r\n              <button class=\"btn btn-sm btn-success\" *ngIf=\" flag == 'EDIT'\" type=\"submit\" (click)=\"SaveVerify()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n              <button *ngIf=\" flag == 'EDIT'\" class=\"btn btn-sm btn-danger\" (click)=\"abortModal()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                aria-hidden=\"true\"></i> Abort</span></button>\r\n                \r\n          </td>\r\n      </tr>\r\n        \r\n      </table>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase_IU.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Request/staff/staffpurchase_IU.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>STAFF PURCHASE</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-2 \">\r\n    </div>\r\n    <div class=\"col-sm-8 \">\r\n          \r\n         <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\"  colspan=\"4\">\r\n                    <b> GENERAL DETAILS </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span  class=\"col-form-span-label\"><b>Purchase No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"PurchaseNo\" type=\"text\"   disabled=\"disabled\" class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td ><span class=\"col-form-span-label\"><b>Purchase Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n                <td>\r\n                    <my-date-picker name=\"PurchaseDate\" [options]=\"myDatePickerOptions\" class=\"form-control\" [selDate]=\"PurchaseDate\"></my-date-picker>\r\n                </td>\r\n\r\n                </tr>\r\n             <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">  <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > </td>\r\n             </tr>\r\n             <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\"  colspan=\"4\">\r\n                    <b>STAFF DETAILS</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Staff Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                   \r\n                    <ng-select [items]=\"Stafflist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"staff\"\r\n                        class=\"custom \" placeholder=\"--Select--\">\r\n                    </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\"  colspan=\"2\">\r\n                   <b> PASSING DETAILS</b>\r\n                </td>\r\n                <td class=\"col-form-span-label\"  colspan=\"2\">\r\n                    <span class=\"col-form-span-label\" ><b>Passed</b>  </span> &nbsp;&nbsp;\r\n                    <span  > <input type=\"checkbox\" [(ngModel)]=\"IsPassed\"  (change)=\"changeEvent($event)\"  /> </span>\r\n                </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Passed By</b> </span></td>\r\n                <td >\r\n                    <select class=\"form-control width150\"  [(ngModel)]=\"passedby\" [disabled]='togglepassedby' >\r\n                        <option value=\"\">Please select</option>\r\n                        <option *ngFor=\"let d of PassedBylist\"  value={{d.CMPID}}>{{d.CMP_USERNAME}}</option>\r\n                    </select>\r\n                </td>\r\n                <td><span class=\"col-form-span-label\"><b>Passed Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"PassedAmount\" type=\"text\" [OnlyNumber]=\"true\" [disabled]='togglepamount'   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Invoice Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"InvoiceAmount\" type=\"text\" [OnlyNumber]=\"true\" [disabled]='toggleinvamount' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Voucher No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"VoucherNo\"   type=\"text\" [disabled]='togglevno'  class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\"  colspan=\"4\">\r\n                   <b> ACCOUNTS DETAILS</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                    \r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n                 \r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Amount</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Amount\" [OnlyNumber]=\"true\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Deduction\" [OnlyNumber]=\"true\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Job No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" type=\"text\"  [OnlyNumber]=\"true\"  class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Pass Amount</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"actpassedamount\" [OnlyNumber]=\"true\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ActNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n            </tr>\r\n            <tr >\r\n\r\n                <td><span class=\"col-form-span-heading\"><b> Net Total</b> </span></td>\r\n                <td colspan=\"3\">  <input [(ngModel)]=\"NetAmt\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td><span class=\"col-form-span-label\"><b> Amount</b> </span></td>\r\n            <td >  <input [(ngModel)]=\"NetAmount\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            <td><span class=\"col-form-span-label\"><b>Deduction</b> </span></td>\r\n            <td >  <input [(ngModel)]=\"Netdeduction\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n        </tr>\r\n      \r\n       \r\n    </table>\r\n     <table class=\"table table-bordered table-sm-new bgwhite\"  *ngIf=\"Accountlist.length>0\">\r\n        <tr>\r\n            <td colspan=\"4\" >\r\n                <div class=\"row xyscroll\" style=\"width:625px;\" >\r\n                    <table class=\"table table-responsive-sm table-bordered\" > \r\n                        <thead>\r\n                            <tr class=\"title-head formheading\">\r\n                                <th  class=\"col-form-span-label\" ></th>\r\n                                <th class=\"col-form-span-label\">Account Name</th>\r\n                                <th  class=\"col-form-span-label\">Amount</th>    \r\n                                <th  class=\"col-form-span-label\">Deduction</th>    \r\n                                <th  class=\"col-form-span-label\">Pass Amt</th>    \r\n                                <th  class=\"col-form-span-label\">Item</th>  \r\n                                <th class=\"col-form-span-label\">Job No</th> \r\n                                <th class=\"col-form-span-label\">Narration</th> \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody  >\r\n                            <tr *ngFor=\"let obj of Accountlist\">\r\n                                <td class=\"centerlabel\">\r\n                                    <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                    &nbsp;\r\n                                    <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.ACC_PURCHASEDTLS_ID)\"></i>\r\n                                </td>\r\n                               <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                               <td><span class=\"col-form-span-label\">{{obj.AMOUNT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.DEDUCTION}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.SRPIPASSAMOUNT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </td>\r\n        </tr> \r\n        <tr>\r\n            <td colspan=\"4\"  class=\"centerlabel\">\r\n                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n\r\n    <div class=\"col-sm-2\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase_search.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Request/staff/staffpurchase_search.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Staff Purchase Search</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"searchList==0\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td  colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CODE\" [(ngModel)]=\"Type\" />&nbsp;Purchase No</span>\r\n                    </td>\r\n                    <td  >\r\n                        <input type=\"text\" [(ngModel)]=\"PurchaseNo\" class=\"form-control width150\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CODE'\"\r\n                        />\r\n                    </td>\r\n                    <td>\r\n                        <button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-primary\" (click)=\"Print(PurchaseNo);\" [disabled]=\"Type!='CODE'\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-print\"></i> Print</span>\r\n                        </button>\r\n                    </td> \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"STAFF\" [(ngModel)]=\"Type\" />&nbsp;Staff</span>\r\n                    </td>\r\n                    <td colspan=\"2\" >\r\n                         \r\n                                 <select class=\"form-control width200\"  [(ngModel)]=\"Staff\" [disabled]=\"Type!='STAFF'\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option *ngFor=\"let d of Stafflist\" value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option> \r\n                                </select>\r\n                            \r\n                       \r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"2\" >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"JOBNO\" [(ngModel)]=\"Type\" />&nbsp;Job No</span>\r\n                    </td>\r\n                    <td colspan=\"2\" >\r\n                        <input type=\"text\" [(ngModel)]=\"JobNo\"   class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [OnlyNumber]=\"true\" [disabled]=\"Type!='JOBNO'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"2\" >\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"AMOUNT\" [(ngModel)]=\"Type\" />&nbsp;Amount</span>\r\n                    </td>\r\n                    <td colspan=\"3\"  >\r\n                        <input type=\"text\" [(ngModel)]=\"Amount\" [OnlyNumber]=\"true\" class=\"form-control\" [maxlength]=\"15\" class=\"form-control width150\" [disabled]=\"Type!='AMOUNT'\"\r\n                        />\r\n                    </td>\r\n                   \r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td   colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DATE\" [(ngModel)]=\"Type\" />&nbsp; Date Wise</span>\r\n                    </td>\r\n                    <td>\r\n                        <div style=\"display: flex;\">\r\n                            <span class=\"col-form-span-label\">From</span>\r\n                            <my-date-picker name=\"PurchaseFromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PurchaseFromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                        </div>\r\n                        <td>\r\n                            <div style=\"display: flex;\"> \r\n                                <span class=\"col-form-span-label\">To</span>\r\n                                <my-date-picker name=\"PurchaseToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PurchaseToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                            </div>\r\n                    </td>\r\n                   \r\n                </tr>\r\n                \r\n                <tr class=\"trbg\">\r\n                    <td  colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"PRINTAV\" [(ngModel)]=\"Type\" />&nbsp; Print All Vouchers of a day</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                      \r\n                            <span class=\"col-form-span-label\">Date</span>\r\n                            <my-date-picker name=\"Day\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PurchaseDay\" [disabled]=\"Type!='PRINTAV'\"></my-date-picker>\r\n                       \r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td  colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DISPLAY\" [(ngModel)]=\"Type\" />&nbsp;Display</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                      \r\n                        <div class=\"leftlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"0\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;List</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioDisplay\" value=\"1\" [(ngModel)]=\"Display\"  [disabled]=\"Type!='DISPLAY'\"/>&nbsp;Details</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n             \r\n                <tr class=\"trbg\" >\r\n                    <td colspan=\"4\" class=\"centerlabel\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i> Search</span>\r\n                                      \r\n                        </button>\r\n                        <button class=\"btn btn-sm btn-danger\" type=\"reset\">\r\n                            <span class=\"col-form-span-label\" (click)=\"ResetAll();\"><i class=\"fa fa-ban\"></i> Reset</span></button> \r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"searchList.length >0\">\r\n        <div class=\"col-sm-12 xyscroll\" style=\"height:300px;\">\r\n            <table class=\"table table-sm-new table-bordered bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th colspan=\"8\">\r\n                            {{searchHeaderText}}\r\n                            <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';searchList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                        </th>\r\n                    </tr>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th>Purchase Code</th>\r\n                        <th>Purchase Date</th>\r\n                        <th>Staff</th>\r\n                     \r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of searchList\">\r\n                        <td>\r\n                            <span class=\"col-form-span-label anchor-link\" (click)=\"redirectToEdit(obj.PUR_CODE)\" style=\"cursor:pointer;\">{{obj.PUR_CODE}}</span>\r\n                          \r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PUR_DATE}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.SUPPLIER}}</span>\r\n                        </td>\r\n                      \r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/Request/staff/staff-purchase.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staff-purchase.module.ts ***!
  \*****************************************************************/
/*! exports provided: staffPurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staffPurchaseModule", function() { return staffPurchaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _staff_purchase_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-purchase.routing */ "./src/app/accounts/Request/staff/staff-purchase.routing.ts");
/* harmony import */ var _staffpurchase_IU_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staffpurchase_IU.component */ "./src/app/accounts/Request/staff/staffpurchase_IU.component.ts");
/* harmony import */ var _staffpurchase_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staffpurchase_search.component */ "./src/app/accounts/Request/staff/staffpurchase_search.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _staffpurchase_Auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staffpurchase-Auth.component */ "./src/app/accounts/Request/staff/staffpurchase-Auth.component.ts");
/* harmony import */ var _staffpur_GenCode_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./staffpur-GenCode.component */ "./src/app/accounts/Request/staff/staffpur-GenCode.component.ts");
/* harmony import */ var _staffpurchase_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./staffpurchase-view.component */ "./src/app/accounts/Request/staff/staffpurchase-view.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SharedModule } from '../../../shared/shared.module';







var staffPurchaseModule = /** @class */ (function () {
    function staffPurchaseModule() {
    }
    staffPurchaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_staff_purchase_routing__WEBPACK_IMPORTED_MODULE_6__["staffPurchaseRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"]
            ],
            declarations: [
                _staffpurchase_IU_component__WEBPACK_IMPORTED_MODULE_7__["StaffPurchaseComponent"], _staffpurchase_view_component__WEBPACK_IMPORTED_MODULE_12__["staffpurchaseViewComponent"],
                _staffpurchase_search_component__WEBPACK_IMPORTED_MODULE_8__["StaffPurchaseSearchComponent"], _staffpurchase_Auth_component__WEBPACK_IMPORTED_MODULE_10__["StaffPurchaseAuth"], _staffpur_GenCode_component__WEBPACK_IMPORTED_MODULE_11__["ReqSRPGenerateComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], staffPurchaseModule);
    return staffPurchaseModule;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staff/staff-purchase.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staff-purchase.routing.ts ***!
  \******************************************************************/
/*! exports provided: staffPurchaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staffPurchaseRoutingModule", function() { return staffPurchaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _staffpurchase_IU_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staffpurchase_IU.component */ "./src/app/accounts/Request/staff/staffpurchase_IU.component.ts");
/* harmony import */ var _staffpurchase_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffpurchase_search.component */ "./src/app/accounts/Request/staff/staffpurchase_search.component.ts");
/* harmony import */ var _staffpurchase_Auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staffpurchase-Auth.component */ "./src/app/accounts/Request/staff/staffpurchase-Auth.component.ts");
/* harmony import */ var _staffpur_GenCode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staffpur-GenCode.component */ "./src/app/accounts/Request/staff/staffpur-GenCode.component.ts");
/* harmony import */ var _staffpurchase_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staffpurchase-view.component */ "./src/app/accounts/Request/staff/staffpurchase-view.component.ts");
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
            title: ' Staff'
        },
        children: [
            { path: 'StaffPurchaseReq/:EntryNo', component: _staffpurchase_IU_component__WEBPACK_IMPORTED_MODULE_2__["StaffPurchaseComponent"], data: { title: 'Add' } },
            { path: 'Search', component: _staffpurchase_search_component__WEBPACK_IMPORTED_MODULE_3__["StaffPurchaseSearchComponent"], data: { title: 'Search' } },
            { path: 'auth/:Status', component: _staffpurchase_Auth_component__WEBPACK_IMPORTED_MODULE_4__["StaffPurchaseAuth"], data: { title: 'Auth' } },
            { path: 'Generate/:Status', component: _staffpur_GenCode_component__WEBPACK_IMPORTED_MODULE_5__["ReqSRPGenerateComponent"], data: { title: 'Generate' } },
            { path: 'SRPIView/:pur_code/:flag/:authstatus', component: _staffpurchase_view_component__WEBPACK_IMPORTED_MODULE_6__["staffpurchaseViewComponent"], data: { title: ' Staff Purchase View' } }
        ]
    }
];
var staffPurchaseRoutingModule = /** @class */ (function () {
    function staffPurchaseRoutingModule() {
    }
    staffPurchaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], staffPurchaseRoutingModule);
    return staffPurchaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staff/staffpur-GenCode.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staffpur-GenCode.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReqSRPGenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqSRPGenerateComponent", function() { return ReqSRPGenerateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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







var ReqSRPGenerateComponent = /** @class */ (function () {
    function ReqSRPGenerateComponent(_router, _dataService, _auth, _toasterService, _loginService, loaderService, _route) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this._route = _route;
        this.datatable = [];
        this.Status = "";
        this.strheader = "";
        this.PAGETYPE = "";
    }
    ReqSRPGenerateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._route.params.subscribe(function (params) {
            _this.Status = params["Status"];
            if (_this.Status == "SRPI") {
                _this.strheader = "GENERATE PURCHASE INVOICE FOR STAFF PURCHASE REQUEST ";
            }
            else if (_this.Status == "RPI") {
                _this.strheader = "GENERATE PURCHASE INVOICE FOR PURCHASE REQUEST  ";
            }
            else if (_this.Status == "JVREQ") {
                _this.strheader = "GENERATE JOURNAL VOUCHER ";
            }
        });
        this.getdataforgenerate();
        this.loaderService.display(false);
    };
    ReqSRPGenerateComponent.prototype.getdataforgenerate = function () {
        var _this = this;
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            STATUS: this.Status,
            AUTHORISATIONSTATUS: "V"
        };
        this._dataService.getData("Accounts/ACC_REQUEST_FILL_TO_GENERATE_PAGELOAD", jsonmaster)
            .subscribe(function (data) {
            _this.datatable = data.Table;
            _this.loaderService.display(false);
        });
    };
    ReqSRPGenerateComponent.prototype.ViewData = function (No, status) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (status == "JVREQ") {
            window.open('./#/popup/Account-JV-View/' + No + '/', "Journal Voucher View", toolbar);
        }
        else if (status == "SRPI") {
            window.open('./#/popup/Account-SRPI-View/' + No + '/' + 'VIEW' + '/' + 'V' + '/', "Staff Purchase Request View", toolbar);
        }
        else if (status == "RPI") {
            window.open('./#/popup/Account-Purchase-View/' + No + '/' + 'RPI' + '/', "Purchase Request View", toolbar);
        }
    };
    ReqSRPGenerateComponent.prototype.GenerateCodeJVCPSRPI = function (REQJVCODE, STATUS, AUTHORISATIONSTATUS, ISGEN_RIGHTS) {
        var _this = this;
        if (STATUS == 'JVREQ') {
            var msgs = "";
            if (ISGEN_RIGHTS != '1') {
                msgs = msgs + 'You have only rights to generate JV for the period ' + ISGEN_RIGHTS + '.! \n';
            }
            if (msgs.length != 0) {
                msgs = '' + msgs;
                alert(msgs);
                return false;
            }
            else {
                var answer = confirm("Are you sure you want to generate JV ?");
            }
        }
        else if (STATUS == 'RCP') {
            var answer = confirm("Are you sure you want to generate CP ?");
        }
        else if (STATUS == 'RPI') {
            var answer = confirm("Are you sure you want to generate Purchase ?");
        }
        else if (STATUS == 'SRPI') {
            var answer = confirm("Are you sure you want to generate Staff Purchase ?");
        }
        if (answer == false) {
            return false;
        }
        var adddata = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP,
            REQCODE: REQJVCODE,
            STATUS: STATUS,
            AUTHORISATIONSTATUS: "V",
            FormId: "194",
        };
        this._dataService.getData("Accounts/ACC_GENERATE_FINAL_CODE_CPJVPI", adddata)
            .subscribe(function (data) {
            if (data.Table2[0].GETSTATUS.split("#")[0] == "100") {
                _this.getdataforgenerate();
                _this.PAGETYPE = data.Table2[0].GETSTATUS.split("#")[1];
                _this._toasterService.toast('success', 'success', data.Table2[0].GETSTATUS.split("#")[2]);
                _this.Print(data.Table2[0].ENTRYNO, _this.PAGETYPE);
            }
        });
    };
    ReqSRPGenerateComponent.prototype.Print = function (no, pgtype) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (pgtype == 'GENJV') {
            window.open('./#/popup/Account-JV-Print/' + no + '/' + "JV" + '/', "Journal Voucher Print", toolbar);
        }
        else if (pgtype == 'GENCP') {
            window.open('./#/popup/Account-CashBook-BankReceipt-print/' + pgtype + '/' + no + '/', "CashBook BankReceipt Print", toolbar);
        }
        else if (pgtype == 'GENPI') {
            // window.open('./#/popup/Account-Purchase-print/' + no + '/' , "Purchase Print", toolbar);
            window.open('./#/popup/Account-Purchase-print/' + no + '/' + 'GENPI' + '/', "Request Purchase Print", toolbar);
        }
        else if (pgtype == 'SRPI') {
            window.open('./#/popup/Account-Purchase-print/' + no + '/' + 'PI' + '/', "Staff Purchase Print", toolbar);
        }
    };
    ReqSRPGenerateComponent.prototype.Validate_Generate = function (ISGEN_RIGHTS) {
        var msgs = "";
        if (ISGEN_RIGHTS != '1') {
            msgs = msgs + 'You have only rights to generate JV for the period ' + ISGEN_RIGHTS + '.! \n';
        }
        if (msgs.length != 0) {
            msgs = '' + msgs;
            alert(msgs);
        }
    };
    ReqSRPGenerateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    ReqSRPGenerateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./staffpur-GenCode.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpur-GenCode.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ReqSRPGenerateComponent);
    return ReqSRPGenerateComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staff/staffpurchase-Auth.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staffpurchase-Auth.component.ts ***!
  \************************************************************************/
/*! exports provided: StaffPurchaseAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPurchaseAuth", function() { return StaffPurchaseAuth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







///import { BsModalService, BsModalRef } from 'ngx-bootstrap';

var StaffPurchaseAuth = /** @class */ (function () {
    function StaffPurchaseAuth(_router, _dataService, _auth, _toasterService, _loginService, 
    ///  private modalService: BsModalService,
    loaderService, _route) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this._route = _route;
        this.dataTable = [];
        this.VeriSRPNO = '';
        this.srpidata = [];
        this.Listdata = [];
        this.newArray = [];
        this.order = 'REQCODE';
        this.reverse = false;
        this.PageActual = 1;
        this.PURCODE = "";
        this.authstatus = "";
        this.authstat = "";
        this.FLAG = "EDIT";
        this.hidebtnrow = "U";
        this.datatabl_1 = [];
        this.STRTXT = [];
        //this.getdataforauth()
    }
    StaffPurchaseAuth.prototype.ngOnChanges = function () {
        // this.VeriSRPNO = (this.VeriSRPNO != undefined || this.VeriSRPNO != '') ? this.VeriSRPNO : '';
        // console.log(this.VeriSRPNO );
    };
    StaffPurchaseAuth.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.Status = params["Status"];
        });
        // console.log(this._loginService.getLogin()[0])
        if (this.Status == 'SRPI') {
            this.strheader = 'Authorise Staff Purchase Request List';
        }
        else if (this.Status == 'RPI') {
            this.strheader = 'Authorise Purchase Request List';
        }
        this.loaderService.display(true);
        this.getdataforauth();
    };
    StaffPurchaseAuth.prototype.getdataforauth = function () {
        var _this = this;
        this.FLAG = "EDIT";
        this.authstatus = "U";
        this.hidebtnrow = "U";
        this.authstat = "U";
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            STATUS: this.Status,
            AUTHORISATIONSTATUS: this.authstatus
        };
        this._dataService.getData("Accounts/ACC_CPJVPI_REQUEST_AUTHORISATION_PAGELOAD", jsonmaster)
            .subscribe(function (data) {
            _this.srpidata = data.Table;
            _this.dataTable = data.Table;
            _this.loaderService.display(false);
        });
    };
    StaffPurchaseAuth.prototype.abortdata = function () {
        this.srpidata.forEach(function (obj) {
            obj.Checked = false;
        });
        this.checkbox = false;
        this.newArray = [];
    };
    StaffPurchaseAuth.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    StaffPurchaseAuth.prototype.checkAll = function (ev) {
        this.newArray = [];
        this.srpidata.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.srpidata.length; i++) {
                var obj = {
                    inoiceno: this.srpidata[i].REQCODE
                };
                this.newArray.push(obj);
            }
        }
        else {
            this.newArray = [];
        }
    };
    StaffPurchaseAuth.prototype.getCheckboxValues = function (event, data) {
        var index = this.newArray.findIndex(function (x) { return x.REQCODE == data; });
        if (event) {
            var obj = {
                inoiceno: data
            };
            //this.STRTXT = this.STRTXT + ","  +  data  
            this.newArray.push(obj);
        }
        else {
            this.newArray.splice(index, 1);
        }
    };
    StaffPurchaseAuth.prototype.srpinvoiceviewdata = function (pur_code, flag, authstatus, sts) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        this.PURCODE = pur_code;
        if (sts == 'SRPI') {
            this.staffmodel.show();
            // window.open('./#/popup/Account-SRPI-View/' + pur_code + '/' + sts +'/', "Staff Purchase View", toolbar);
        }
        if (sts == 'RPI') {
            window.open('./#/popup/Account-Purchase-View/' + pur_code + '/' + sts + '/', "Purchase View", toolbar);
        }
    };
    StaffPurchaseAuth.prototype.rejectdata = function () {
        var _this = this;
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One Staff Purchase Request No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var answer = confirm("Are you sure you want to reject the Staff Purchase Request no. " + output1 + " ?"); //, "Modified title")
        if (answer == false) {
            return false;
        }
        else {
            var adddata = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                STATUS: this.Status,
                JVREQNO: output1,
                AUTHORISATIONDT: "",
                CMPID: this._loginService.getLogin()[0].CMPID,
                AUTHORISATIONSTATUS: "U"
            };
            this._dataService.getData("Accounts/Acc_CPJVPI_REQUEST_Authorisation_REJECT", adddata)
                .subscribe(function (data) {
                if (data.Table2[0].STATUSMSG != "") {
                    _this.srpidata = data.Table;
                    _this.newArray = [];
                    _this._toasterService.toast('success', 'success', data.Table2[0].STATUSMSG);
                }
            });
        }
    };
    StaffPurchaseAuth.prototype.Passdatatomanagement = function () {
        var _this = this;
        this.authstatus = "M";
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One Staff Purchase Request No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var answer = confirm("Are you sure you want to refer this Staff request Purchase no. " + output1 + " to Management ?");
        if (answer == false) {
            return false;
        }
        else {
            var adddata = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                STATUS: this.Status,
                JVREQNO: output1,
                AUTHORISATIONDT: "",
                CMPID: this._loginService.getLogin()[0].CMPID,
                AUTHORISATIONSTATUS: "U"
            };
            this._dataService.getData("Accounts/Acc_CPJVPI_REQUEST_Management_UPDATE", adddata)
                .subscribe(function (data) {
                if (data.Table2[0].STATUSMSG != "") {
                    _this.srpidata = data.Table;
                    _this.newArray = [];
                    _this._toasterService.toast('success', 'success', data.Table2[0].STATUSMSG);
                }
            });
        }
    };
    StaffPurchaseAuth.prototype.VerifiedDataList = function (authstatusedit) {
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
            STATUS: this.Status,
            AUTHORISATIONSTATUS: authstatusedit
        };
        this._dataService.getData("Accounts/ACC_CPJVPI_REQUEST_AUTHORISATION", adddata)
            .subscribe(function (data) {
            _this.srpidata = data.Table;
        });
    };
    StaffPurchaseAuth.prototype.abortStaff = function (event) {
        this.staffmodel.hide();
        if (event == "V" || event == "M" || event == "R") {
            this.VerifiedDataList(event);
        }
        else {
            this.getdataforauth();
        }
    };
    StaffPurchaseAuth.prototype.Verify = function () {
        var _this = this;
        this.authstatus = "U";
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('info', 'info', 'Select At Least One Purchase Request No!');
            return false;
        }
        var output = this.newArray.map(function (item) {
            return item.inoiceno;
        });
        var datatry = output.join(",");
        var output1 = datatry;
        var answer = confirm("Are you sure you want to verify this Purchase request  no. " + output1);
        if (answer == false) {
            return false;
        }
        else {
            var adddata = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                STATUS: this.Status,
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
    StaffPurchaseAuth.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Staff', { static: false }),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], StaffPurchaseAuth.prototype, "staffmodel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StaffPurchaseAuth.prototype, "callgetdataforauth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StaffPurchaseAuth.prototype, "VeriSRPNO", void 0);
    StaffPurchaseAuth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./staffpurchase-Auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase-Auth.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StaffPurchaseAuth);
    return StaffPurchaseAuth;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staff/staffpurchase-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staffpurchase-view.component.ts ***!
  \************************************************************************/
/*! exports provided: staffpurchaseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staffpurchaseViewComponent", function() { return staffpurchaseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var staffpurchaseViewComponent = /** @class */ (function () {
    function staffpurchaseViewComponent(_dataService, _toasterService, _route, _loginService, loaderService) {
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
    staffpurchaseViewComponent.prototype.ngOnInit = function () {
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
    staffpurchaseViewComponent.prototype.PageLoad = function () {
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
    staffpurchaseViewComponent.prototype.ngOnChanges = function () {
        // console.log(this.purcode)
        // console.log(this.flag)
        // console.log(this.authstatus)
        this.PageLoad();
        this.staffpurchaseviewdata(this.purcode);
    };
    staffpurchaseViewComponent.prototype.staffpurchaseviewdata = function (purinvno) {
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
    staffpurchaseViewComponent.prototype.Editchildrecd = function (id) {
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
    staffpurchaseViewComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        this.loaderService.display(true);
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
        this.loaderService.display(false);
    };
    staffpurchaseViewComponent.prototype.Resetchildrcrd = function () {
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
    staffpurchaseViewComponent.prototype.Add_Main = function () {
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
    staffpurchaseViewComponent.prototype.Verify = function () {
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
    staffpurchaseViewComponent.prototype.SaveVerify = function () {
        var answer = confirm("Are you sure you want to authorise the Request Staff Purchase no." + this.PUR_CODE + " ?");
        if (answer == false) {
            return false;
        }
        else {
            this.Add_Main();
        }
    };
    staffpurchaseViewComponent.prototype.abortModal = function () {
        this.hideModal.emit(this.authstatlist);
    };
    staffpurchaseViewComponent.prototype.jobprofitreport = function (jobno) {
        if (jobno == '' || jobno == undefined || jobno.length < 15) {
            alert("Enter 15 digit Job No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Job-Profit-Report/' + jobno + '/', "Job Profit Report", toolbar);
    };
    staffpurchaseViewComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], staffpurchaseViewComponent.prototype, "disabledBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], staffpurchaseViewComponent.prototype, "hideModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], staffpurchaseViewComponent.prototype, "purcode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], staffpurchaseViewComponent.prototype, "flag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], staffpurchaseViewComponent.prototype, "authstatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], staffpurchaseViewComponent.prototype, "authstatlist", void 0);
    staffpurchaseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staffpurchase-view',
            template: __webpack_require__(/*! raw-loader!./staffpurchase-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase-view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], staffpurchaseViewComponent);
    return staffpurchaseViewComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staff/staffpurchase_IU.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staffpurchase_IU.component.ts ***!
  \**********************************************************************/
/*! exports provided: StaffPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPurchaseComponent", function() { return StaffPurchaseComponent; });
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








var StaffPurchaseComponent = /** @class */ (function () {
    function StaffPurchaseComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.Allitemlist = [];
        this.Stafflist = [];
        this.codelistActt = [];
        this.PassedBylist = [];
        this.passedby = "";
        this.IsPassed = false;
        this.PurchaseNo = "";
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
        this.txtadd = "Add";
        this.ID = "0";
        this.ENTRYNO = "";
        this.CLIENT = "";
        this.ISNOTEDITABLE = "0";
        this.ACCTNAME = "";
        this.ACCBANKDTLSID = "0";
        this.STATUS = "SRPI";
        this.Accountlist = [];
        this.NetAmt = "0";
        this.PurchaseDone = "";
        this.togglevno = true;
        this.togglepassedby = true;
        this.togglepamount = true;
        this.toggleinvamount = true;
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
    StaffPurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._activatedRoute.params.subscribe(function (params) {
            _this.PurchaseNo = params["EntryNo"];
        });
        this.PurchaseDate = new Date();
        this.PurchaseDate = this._dataService.datechnge(this.PurchaseDate);
        if (this.PurchaseNo != ' ') {
            this.verifyPermission('412', 'Modify');
        }
        else {
            this.verifyPermission('412', 'Add');
        }
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
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_PURCHASE_RESET", jsonreset)
            .subscribe(function (data) {
        });
        if (this.PurchaseNo != ' ') {
            this.editpopulate();
            this.text = 'Update';
        }
        this.loaderService.display(false);
    };
    StaffPurchaseComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
        });
    };
    StaffPurchaseComponent.prototype.Addchildrcrd = function () {
        var _this = this;
        if (this.AccountName == "" || this.AccountName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Account  !');
            return false;
        }
        if (this.Item == "" || this.Item == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Item  !');
            return false;
        }
        if (this.Amount == "" || this.Amount == undefined) {
            this._toasterService.toast('warning', 'warning', 'Amount could not be blank !');
            return false;
        }
        if (this.Amount == "0") {
            this._toasterService.toast('warning', 'warning', 'Amount could not be zero !');
            return false;
        }
        if (this.Amount.length <= 0) {
            this.Amount = "0";
        }
        if (this.Deduction.length <= 0) {
            this.Deduction = "0";
        }
        if (this.actpassedamount.length <= 0) {
            this.actpassedamount = "0";
        }
        if (isNaN(parseFloat(this.Amount))) {
            this.Amount = "0";
        }
        if (isNaN(parseFloat(this.Deduction))) {
            this.Deduction = "0";
        }
        //  if (parseFloat(this.Amount) > 0 && parseFloat(this.Deduction) > 0) {
        //     alert('Invalid Amount/Deduction - Please Check');
        //      return false;
        // }
        if (parseFloat(this.Amount) < 0) {
            this._toasterService.toast("warning", "warning", 'Invalid Amount - Please Check');
            return false;
        }
        if (parseFloat(this.Deduction) < 0) {
            this._toasterService.toast("warning", "warning", 'Invalid Deduction - Please Check');
            return false;
        }
        if (this.JobNo.length == 0) {
            this._toasterService.toast('warning', 'warning', 'Plz enter the Job No. !');
            return false;
        }
        if (this.JobNo.length > 0 && this.JobNo.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid JobNo - Please Check !');
            return false;
        }
        if (this.JobNo.substr(0, 2) != this._loginService.getLogin()[0].CMPCODE) {
            this._toasterService.toast("warning", "warning", 'You have entered Job No of different Company !');
            return false;
        }
        if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
            this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
            return false;
        }
        var jsonchild = { ID: this.ID, ENTRYNO: this.PurchaseNo, CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo, DEDUCTION: this.Deduction, AMOUNT: this.Amount, USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            NARRATION: this.ActNarration, IS_NOT_EDIT_ABLE: this.ISNOTEDITABLE,
            ITEMCODE: this.Item.split("|")[0],
            VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME,
            ITEM: this.Item.split("|")[2],
            ACC_PURCHASEDTLS_ID: this.ACCBANKDTLSID,
            STATUS: this.STATUS,
            IsJobReport: this.AccountName.split("|")[1],
            ITEM_DATAVALUE: this.Item,
            SRPIPASSAMOUNT: this.actpassedamount,
            ISOLDENTRY: "0",
            cmpid: this._loginService.getLogin()[0].CMPID
        };
        this._dataService.Common("Accounts/ACC_PURCHASE_TMP_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
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
        });
    };
    StaffPurchaseComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        // this.AccountName=undefined;
        this.JobNo = "";
        this.Deduction = "";
        this.Amount = "";
        this.ActNarration = "";
        this.Item = undefined;
        this.actpassedamount = "";
        this.txtchild = "Add";
        // this.ItemList=[];
        // this.AccountNameList=[];
    };
    StaffPurchaseComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.ID = filterData.ID;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === filterData.CLIENT; });
        this.Item = filterData.ITEM_DATAVALUE;
        this.Amount = filterData.AMOUNT;
        this.Deduction = filterData.DEDUCTION;
        this.actpassedamount = filterData.SRPIPASSAMOUNT;
        this.JobNo = filterData.JOBNO;
        this.ActNarration = filterData.NARRATION;
        this.txtchild = "Update";
        this.ACCBANKDTLSID = filterData.ACC_PURCHASEDTLS_ID;
        this.ISNOTEDITABLE = filterData.IS_NOT_EDIT_ABLE;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
    };
    StaffPurchaseComponent.prototype.deletechildrecd = function (id, pdtlsid) {
        var _this = this;
        if (this.ISNOTEDITABLE == "1") {
            this._toasterService.toast("warning", "warning", "You cannot delete this reocrd!");
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, ACC_PURCHASEDTLS_ID: pdtlsid };
                this._dataService.getData("Accounts/ACC_PURCHASE_TMP_DEL", jsondelete)
                    .subscribe(function (data) {
                    if (data.Table[0].STATUS == "100") {
                        _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                        _this.Accountlist = data.Table;
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
        }
    };
    StaffPurchaseComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.PurchaseDone == '1') {
            alert('You can not Update this Staff Purchase Request because Purchase is already Generated for this Staff Purchase Request !');
            return false;
        }
        if (this.PurchaseDate == "") {
            this._toasterService.toast('warning', 'warning', 'Please Enter Purchase Date !');
            return false;
        }
        if (this.staff == "" || this.staff == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Staff !');
            return false;
        }
        if (this.IsPassed == true) {
            if (this.passedby == "") {
                this._toasterService.toast('warning', 'warning', 'Please select Passed by !');
                return false;
            }
            if (this.PassedAmount == "" || this.PassedAmount == "0") {
                this._toasterService.toast('warning', 'warning', 'Passed Amount cannot be blank  !');
                return false;
            }
            if (this.InvoiceAmount == "" || this.InvoiceAmount == "0") {
                this._toasterService.toast('warning', 'warning', 'Invoice Amount cannot be blank  !');
                return false;
            }
            if (parseFloat(this.PassedAmount) > parseFloat(this.InvoiceAmount)) {
                this._toasterService.toast('warning', 'warning', 'Passed Amount cannot Greater Than Invoice Amount  !');
                return false;
            }
        }
        if (this.Accountlist.length == 0) {
            this._toasterService.toast('warning', 'warning', 'Please enter the details Data !');
            return false;
        }
        if ((parseFloat(this.NetAmount) + parseFloat(this.Netdeduction)) < 0.01) {
            this._toasterService.toast('warning', 'warning', 'Sum of Total Amount and Deduction cannot be Less Than 0.01');
            return false;
        }
        if (this.PurchaseDone == "1") {
            this._toasterService.toast('warning', 'warning', 'You can not Update this Purchase Request because Purchase is already Generated for this Request !');
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.PurchaseNo,
            ENTRYDT: this.PurchaseDate,
            STATUS: this.STATUS,
            SUP_CODE: this.staff,
            SUP_NAME: "",
            SUP_INVNO: "",
            SUP_INVDT: "",
            SUP_BILLRECEIVEDDT: "",
            SUP_DUEDT: "",
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
            ACTION: (this.PurchaseNo == ' ') ? "INSERT" : "UPDATE",
            DOCUMENTG100179: "0",
            FK_SUP_ADDR_ID: "0",
            AMSENSEXP_G102024: "0",
            MISCEXP_G102025: "0"
        };
        var url = "";
        if (this.PurchaseNo == " ") {
            url = "Accounts/ACC_PURCHASE_INSERT";
        }
        else {
            url = "Accounts/ACC_PURCHASE_INSERT";
        }
        this._dataService.Common(url, jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
                _this.ResetMain();
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    StaffPurchaseComponent.prototype.GetActName = function (Acctcode) {
        this.ItemList = [];
        var codeacct;
        // this.ACCTNAME=event.target.options[event.target.options.selectedIndex].text;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    StaffPurchaseComponent.prototype.changeEvent = function (event) {
        if (event.target.checked) {
            this.togglevno = false;
            this.VoucherNo = "";
            this.togglepassedby = false;
            this.passedby = "";
            this.togglepamount = false;
            this.PassedAmount = "";
            this.toggleinvamount = false;
            this.InvoiceAmount = "";
        }
        else {
            this.togglevno = true;
            this.togglepassedby = true;
            this.togglepamount = true;
            this.toggleinvamount = true;
            this.VoucherNo = "";
            this.passedby = "";
            this.PassedAmount = "";
            this.InvoiceAmount = "";
        }
    };
    StaffPurchaseComponent.prototype.editpopulate = function () {
        var _this = this;
        var jsonview = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            EntryNo: this.PurchaseNo,
            VGUID: this._loginService.getLogin()[0].GUID,
            STATUS: this.STATUS,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_VIEW", jsonview)
            .subscribe(function (data) {
            _this.PurchaseNo = data.Table[0].PUR_CODE;
            _this.PurchaseDate = (data.Table[0].PUR_DATE != "") ? (data.Table[0].PUR_DATE) : "";
            _this.staff = data.Table[0].PUR_SUPPLIER;
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
            _this.PurchaseDone = data.Table[0].ISPURGENERATE;
            _this.loaderService.display(false);
        });
        if (this.STATUS == 'SRPI') {
            if (this.PurchaseDone == '1') {
                this._toasterService.toast('warning', 'warning', 'You can not Update this Staff Purchase Request because Purchase is already Generated for this Staff Purchase Request !');
            }
        }
    };
    StaffPurchaseComponent.prototype.ResetMain = function () {
        this.Resetchildrcrd();
        this.PurchaseNo = '';
        this.PurchaseDate = '';
        this.passedby = '';
        this.PassedAmount = '';
        this.togglepamount = true;
        this.togglepassedby = true;
        this.InvoiceAmount = '';
        this.toggleinvamount = true;
        this.staff = '';
        this.VoucherNo = '';
        this.togglevno = true;
        this.IsPassed = false;
        this.Narration = '';
        this.NetAmount = '';
        this.Netdeduction = '';
        this.NetAmt = '';
        this.text = "Submit";
        this.Accountlist = "";
        this._router.navigate(['/accounts/purchase/StaffPurchase/ ']);
    };
    StaffPurchaseComponent.prototype.Reset = function () {
        var _this = this;
        this.Resetchildrcrd();
        this.PurchaseNo = '';
        this.PurchaseDate = '';
        this.passedby = '';
        this.PassedAmount = '';
        this.InvoiceAmount = '';
        this.staff = undefined;
        this.VoucherNo = '';
        this.IsPassed = false;
        this.Narration = '';
        this.NetAmount = '';
        this.Netdeduction = '';
        this.NetAmt = '';
        this.text = "Submit";
        this.Accountlist = [];
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_PURCHASE_RESET", jsonreset)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
            }
            _this.loaderService.display(false);
        });
    };
    StaffPurchaseComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    StaffPurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./staffpurchase_IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase_IU.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], StaffPurchaseComponent);
    return StaffPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/accounts/Request/staff/staffpurchase_search.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/Request/staff/staffpurchase_search.component.ts ***!
  \**************************************************************************/
/*! exports provided: StaffPurchaseSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPurchaseSearchComponent", function() { return StaffPurchaseSearchComponent; });
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






var StaffPurchaseSearchComponent = /** @class */ (function () {
    function StaffPurchaseSearchComponent(_dataService, _loginService, _toasterService, _router, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._router = _router;
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
        this.Stafflist = [];
        this.searchList = [];
        this.displayType = 'SEARCH';
        this.searchHeaderText = 'List of Purchase';
        this.Display = "0";
        this.Type = 'CODE';
        this.PurchaseNo = '';
        this.PurchaseFromDate = null;
        this.PurchaseToDate = null;
        this.PurchaseDay = null;
        this.SuppFromDt = null;
        this.SupptoDt = null;
        this.JobNo = '';
        this.Amount = '';
        this.Day = null;
        this.Staff = null;
    }
    StaffPurchaseSearchComponent.prototype.ngOnInit = function () {
        ///  console.log(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
        // this.verifyPermission(202, "Modify");
        var _this = this;
        var _jsonData = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: "SRPI"
        };
        this._dataService.getData("Accounts/ACC_PURCHASE_PAGELOAD", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.Stafflist = data.Table1;
        });
    };
    // verifyPermission(formId, userMode) {
    //     this._loaderService.display(true);
    //     this._loginService.verifyRights(formId, '')
    //         .subscribe((data: any) => {
    //             if (this._loginService.checkVerify(userMode, data)) {
    //                 this.fillCommonDropdownList();
    //             } else { this._loaderService.display(false); }
    //         });
    // }
    StaffPurchaseSearchComponent.prototype.fnValidate_Code = function () {
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
    StaffPurchaseSearchComponent.prototype.fnValidate_JobNo = function () {
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
    StaffPurchaseSearchComponent.prototype.fnValidate_Amount = function () {
        if (this.Amount.trim().length === 0) {
            alert("Please Enter Amount.");
            return false;
        }
        return true;
    };
    StaffPurchaseSearchComponent.prototype.fnValidate_Date = function () {
        if (!this.PurchaseFromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.PurchaseToDate) {
            alert("Please select To Date.");
            return false;
        }
        else if (!this._dataService.DateFromAndToComparision(this.PurchaseFromDate.formatted, this.PurchaseToDate.formatted)) {
            alert("To Date should be greater than From Date");
            return false;
        }
        return true;
    };
    StaffPurchaseSearchComponent.prototype.fnValidate_Supplier = function () {
        if (!this.Staff) {
            alert("Please select Staff.");
            return false;
        }
        return true;
    };
    StaffPurchaseSearchComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    StaffPurchaseSearchComponent.prototype.search = function () {
        var SearchType = "";
        if (this.Type == 'CODE') {
            if (this.fnValidate_Code()) {
                SearchType = "PurNo";
                this.getData(SearchType);
            }
            ;
        }
        else if (this.Type == 'DATE') {
            if (this.fnValidate_Date()) {
                SearchType = "Date";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'STAFF') {
            if (this.fnValidate_Supplier()) {
                SearchType = "Supplier";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'JOBNO') {
            if (this.fnValidate_JobNo()) {
                SearchType = "JobNo";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'AMOUNT') {
            if (this.fnValidate_Amount()) {
                SearchType = "Amount";
                this.getData(SearchType);
            }
        }
    };
    StaffPurchaseSearchComponent.prototype.getData = function (searchtype) {
        var _this = this;
        var _jsonData = {
            PUR_CODE: this.PurchaseNo,
            FROMDATE: (this.PurchaseFromDate) ? this.PurchaseFromDate.formatted : "",
            TODATE: (this.PurchaseToDate) ? this.PurchaseToDate.formatted : "",
            PUR_SUPPLIER: (this.Staff) ? this.Staff : "0",
            PUR_INVNO: "",
            PUR_JOBNO: (this.JobNo) ? this.JobNo : "",
            AMOUNT: (this.Amount) ? this.Amount : "",
            DISPLAYTYPE: this.Display,
            Type: searchtype,
            STATUS: "SRPI",
            citycode: this._loginService.getLogin()[0].CITYCODE,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            year_id: this._loginService.getLogin()[0].FINANCIAL_YEAR.YEARID,
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
            USERID: this._loginService.getLogin()[0].CMPID
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_PURCHASE_SEARCH_RPI", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            // console.log(data);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                _this._router.navigate(["/accounts/Request/staff/StaffPurchaseReq/", data.Table[0].PUR_CODE]);
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    StaffPurchaseSearchComponent.prototype.redirectToEdit = function (EntryNo) {
        this._router.navigate(['/accounts/Request/staff/StaffPurchaseReq/' + EntryNo]);
    };
    StaffPurchaseSearchComponent.prototype.ResetAll = function () {
        this.PurchaseNo = "",
            this.JobNo = "",
            this.Amount = "",
            this.Staff = "",
            this.PurchaseFromDate = "",
            this.PurchaseToDate = "",
            this.Day = "",
            this.PurchaseDay = "";
    };
    StaffPurchaseSearchComponent.prototype.Print = function (no) {
        if (this.PurchaseNo == '' || this.PurchaseNo == undefined || this.PurchaseNo.length < 15) {
            alert("Enter 15 digit No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Purchase-print/' + no + '/' + 'SRPI' + '/', "Staff Purchase Print", toolbar);
    };
    StaffPurchaseSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    StaffPurchaseSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts-transaction-purchase-search',
            template: __webpack_require__(/*! raw-loader!./staffpurchase_search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Request/staff/staffpurchase_search.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], StaffPurchaseSearchComponent);
    return StaffPurchaseSearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=staff-staff-purchase-module.js.map