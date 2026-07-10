(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OEJV-journalvoucherOE-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header formheading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <strong>{{Header| uppercase}}</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 \">\r\n         <table class=\"table table-bordered table-sm-new bgwhite\">\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkrules=='N') ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('R')\"></i>  \r\n                    <b> Rules for Old Entry </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkrules=='Y'\">\r\n                <td colspan=\"4\">\r\n                    <table>\r\n                        <td>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">1. Main General Details and Cheque Details is non-editable.</span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\"  style=\"font-weight:lighter ;color: red;\" >{{lblNetSummary}}</span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">3. Accounts and Account's Net Total (Amount-Deduction) should be same. </span>\r\n                            </tr>\r\n                            <tr>\r\n                                <span  class=\"col-form-span-label\">4. Entry wise: Item, Entry Type, Department, Bill No., Job No., Amount, Deduction, Narration are editable.</span>\r\n                            </tr>\r\n                        </td>\r\n                    </table>\r\n                 </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\" colspan=\"4\">\r\n                    <b> General Details </b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n                <td><span  class=\"col-form-span-label\"><b>Voucher No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >\r\n                    <table >\r\n                        <tbody  style=\"border: none;\">\r\n                        <tr>\r\n                               <td >  <input [(ngModel)]=\"VoucherNo\" type=\"text\"  [disabled]='disablevoucherno' class=\"form-control width150\" maxlength=\"40\" ></td>\r\n                               <td *ngIf=\"showhidebtn==false\"> <button type=\"submit\" (click)=\"ShowoldData(VoucherNo)\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Search</span></button> </td> \r\n                        </tr>\r\n                    </tbody>\r\n                    </table>\r\n           \r\n                </td>\r\n                <td ><span class=\"col-form-span-label\"><b>Voucher Date</b> </span><span class=\"col-form-span-error\">*</span>  </td>\r\n                <!-- <td>\r\n                    <my-date-picker name=\"VoucherDate\" [disabled]='togglevdate' class=\"form-control\" [options]=\"myDatePickerOptions\" [selDate]=\"VoucherDate\"  ></my-date-picker>\r\n                </td> -->\r\n                <td>\r\n                    <input [(ngModel)]=\"VoucherDate\" disabled=\"disabled\" [OnlyNumber]=\"true\" type=\"text\"  class=\"form-control width150\" >\r\n                </td>\r\n                </tr>\r\n             <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">  <input [(ngModel)]=\"Narration\" type=\"text\"  class=\"form-control\"  > </td>\r\n             </tr>\r\n             <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkoriginactdtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('OA')\"></i>  \r\n                    <b> Original Accounts Detail </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkoriginactdtl==true\">\r\n                <td colspan=\"4\" class=\"table table-bordered table-sm-new bgblue\">\r\n                    <table>\r\n                        <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"OriginalAccountlist.length>0\" >\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                    \r\n                                        <th class=\"col-form-span-label  font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Debit</th>\r\n                                        <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Credit</th>\r\n                                        <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Item</th>\r\n                                        <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Entry Type </th>\r\n                                        <th class=\"col-form-span-label  font-weight-bold headerwhite\">Job No</th>\r\n                                        <th class=\"col-form-span-label  font-weight-bold headerwhite\">Bill No</th>\r\n                                        <th class=\"col-form-span-label  font-weight-bold headerwhite\">Department</th>\r\n                                        <th class=\"col-form-span-label  font-weight-bold headerwhite\">Narration</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                 <tbody   >\r\n                                    <tr *ngFor=\"let obj of OriginalAccountlist\">\r\n                                        <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.DEBIT}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.CREDIT}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.ENTRYTYPE}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                         <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                       </div>\r\n                    </table>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr class=\"trheader\">\r\n                <td  class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                    <i [ngClass]=\"(chkactwisedtl==false) ? 'fa fa-plus-square-o': 'fa fa-minus-square-o'\" (click)=\"showrules('A')\"></i>  \r\n                    <b> Accounts Wise Detail </b>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"chkactwisedtl==true\">\r\n                <td colspan=\"4\">\r\n                    <table class=\"table table-bordered table-sm-new bgblue\">\r\n                        <div class=\"row xyscroll\"  style=\"width:715px;\" >\r\n                            <table class=\"table table-responsive-sm table-bordered\" *ngIf=\"Accountwiselist.length>0\" >\r\n                                <thead>\r\n                                    <tr class=\"bakgrdliteBlue\">\r\n                                        <th class=\"col-form-span-label font-weight-bold headerwhite\">Account Name</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Debit Total</th>\r\n                                        <th  class=\"col-form-span-label font-weight-bold headerwhite\">Credit Total</th>\r\n                                      \r\n                                    </tr>\r\n                                </thead>\r\n                                 <tbody   >\r\n                                    <tr *ngFor=\"let obj of Accountwiselist\">\r\n                                       <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.TOT_DEBIT}}</span></td>\r\n                                       <td><span class=\"col-form-span-label\">{{obj.TOT_CREDIT}}</span></td>\r\n                                     \r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                       </div>\r\n                    </table>\r\n\r\n                </td>\r\n            </tr>\r\n\r\n            <tr class=\"trheader\">\r\n                <td class=\"col-form-span-label\" style=\"color: whitesmoke;\"  colspan=\"4\">\r\n                   <b> Accounts Details</b>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Account Name</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n\r\n                    <ng-select [items]=\"AccountNameList\" bindLabel=\"ACCTNAME\" bindValue=\"ACCTCODENAME\"\r\n                    [(ngModel)]=\"AccountName\" (change)=\"GetActName($event.ACCTCODENAME)\" class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Item</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td colspan=\"3\">\r\n\r\n                    <ng-select [items]=\"ItemList\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Item\"\r\n                    class=\"custom \" placeholder=\"--Select--\">\r\n                </ng-select>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Entry Type</b> </span></td>\r\n                <td style=\" display: flex; \"> \r\n                    <select class=\"form-control width150\"  [(ngModel)]=\"EntryType\" (change)=\"GetEntryType($event.target.value)\" >\r\n                                   \r\n                        <option value=\"0\">-- Select Type --</option>\t\r\n                        <option value=\"GR\">General</option>\t\r\n                        <option value=\"AD\">Advance</option>\r\n                        <option value=\"AB\">Against Bill</option>\r\n                        <option value=\"JB\">JobNo</option>\t\r\n                        <option value=\"AO\">Opening Balance</option>\t\r\n                        </select> \r\n                       \r\n            </td>\r\n                <td><span class=\"col-form-span-label\"><b> Department</b> </span></td>\r\n                <td>\r\n                 <select class=\"form-control width150\"  [(ngModel)]=\"Department\" (change)=\"GetDepartmentName($event)\" >\r\n                    <option value=\"0\">Please select</option>\r\n                    <option *ngFor=\"let d of Departmentlist\"  value={{d.VALUEFIELD}}>{{d.TEXTFIELD}}</option>\r\n                    \r\n                </select>\r\n                <!-- <ng-select class=\"form-control width150\" [items]=\"Departmentlist\" bindLabel=\"TEXTFIELD\" bindValue=\"VALUEFIELD\" [(ngModel)]=\"Department\"\r\n                (change)=\"GetDepartmentName($event)\" class=\"custom \" placeholder=\"--Select--\">\r\n            </ng-select> -->\r\n            </td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Bill No</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"BillNo\" type=\"text\"  [OnlyNumber]=\"true\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Job No</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"JobNo\" [OnlyNumber]=\"true\" type=\"text\" (blur)=\"ValidateJobNo($event.target.value)\"   class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b> Debit</b> </span><span class=\"col-form-span-error\">*</span></td>\r\n                <td >  <input [(ngModel)]=\"Debit\" type=\"text\"  [OnlyNumber]=\"true\" [disabled]='toggledebit' class=\"form-control width150\" maxlength=\"40\" > </td>\r\n                <td><span class=\"col-form-span-label\"><b>Credit</b> </span></td>\r\n                <td >  <input [(ngModel)]=\"Credit\" [OnlyNumber]=\"true\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"col-form-span-label\"><b>Narration</b> </span></td>\r\n                <td colspan=\"3\">\r\n                    <input [(ngModel)]=\"ShortNarration\" type=\"text\"    class=\"form-control width500\" maxlength=\"40\" >\r\n                </td>\r\n            </tr>\r\n\r\n            <tr *ngIf=\"showhidebtn==true\">\r\n                <td colspan=\"4\"  class=\"centerlabel\">\r\n                    <button class=\"btn btn-sm btn-success\" [disabled]='toggleupdatechldbtn' type=\"submit\" (click)=\"Addchildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetchildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n\r\n            </tr>\r\n\r\n\r\n        <tr>\r\n            <td><span class=\"col-form-span-label\"><b> Total Debit</b> </span></td>\r\n            <td >  <input [(ngModel)]=\"TotalDebit\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n            <td><span class=\"col-form-span-label\"><b>Total Credit</b> </span></td>\r\n            <td >  <input [(ngModel)]=\"TotalCredit\" disabled=\"disabled\" type=\"text\"    class=\"form-control width150\" maxlength=\"40\" > </td>\r\n        </tr>\r\n        \r\n        \r\n\r\n    <!-- </table> \r\n      <table class=\"table table-bordered table-sm-new bgwhite\"> -->\r\n\r\n        <tr>\r\n             <td colspan=\"4\" >\r\n                <div class=\"row xyscroll\" style=\"width:715px;\"   > \r\n                    <table class=\"table table-responsive-sm table-bordered\"  *ngIf=\"Accountlist.length>0\" >\r\n                        <thead>\r\n                            <tr class=\"bakgrdliteBlue\">\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\" ></th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Account Name</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Debit</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Credit</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Item</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Entry Type </th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Job No</th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Bill No</th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Department</th>\r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Narration</th>\r\n                            </tr>\r\n                        </thead>\r\n                         <tbody  >\r\n                            <tr *ngFor=\"let obj of Accountlist\">\r\n                                <td class=\"centerlabel\">\r\n                                    <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                    &nbsp;\r\n                                    <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID,obj.JV_dtls_ID)\"></i>\r\n                                </td>\r\n                               <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.ACCOUNT_NAME\"> </span></td>\r\n                               <td><span class=\"col-form-span-label\">{{obj.DEBIT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.CREDIT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ITEM}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.ENTRYTYPE}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.JOBNO}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.BILLNO}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.DEPARTMENT}}</span></td>\r\n                                <td><span class=\"col-form-span-label\">{{obj.NARRATION}}</span></td>\r\n                            </tr>\r\n                        </tbody>  \r\n                    </table>\r\n               </div> \r\n             </td>\r\n        </tr>\r\n        <tr *ngIf=\"showhidebtn==true\">\r\n            <td colspan=\"4\"  class=\"centerlabel\">\r\n                <button class=\"btn btn-sm btn-success\" [disabled]='toggleupdatebtn' type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n            </td>\r\n        </tr>\r\n    </table>   \r\n</div>\r\n<div class=\"col-sm-12 col-md-2 col-lg-2\">\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.ts ***!
  \**************************************************************************/
/*! exports provided: JournalVoucherOEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherOEComponent", function() { return JournalVoucherOEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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







var JournalVoucherOEComponent = /** @class */ (function () {
    function JournalVoucherOEComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.Allitemlist = [];
        this.codelistActt = [];
        this.VoucherNo = "";
        this.Narration = "";
        this.AccountNameList = [];
        this.ItemList = [];
        this.EntryTypeList = [];
        this.Departmentlist = [];
        this.BillNo = "";
        this.JobNo = "";
        this.Debit = "";
        this.Credit = "";
        this.ShortNarration = "";
        this.TotalCredit = "0";
        this.TotalDebit = "0";
        this.text = "Submit";
        this.txtchild = "Add";
        this.txtadd = "Add";
        this.ID = "0";
        this.ENTRYNO = "";
        this.CLIENT = "";
        this.ACCTNAME = "";
        this.JV_DTLS_ID = "0";
        this.STATUS = "JV";
        this.Accountlist = [];
        this.OriginalAccountlist = [];
        this.jv_trn = "";
        this.ISNOTEDITABLE = "0";
        this.ISJVGENERATE = "0";
        this.Accountwiselist = [];
        this.toggledebit = false;
        this.togglevdate = false;
        this.toggleupdatebtn = false;
        this.toggleupdatechldbtn = false;
        this.Header = "JOURNAL VOUCHER UPDATE OLD ENTRY";
        this.chkrules = "N";
        this.chkoriginactdtl = false;
        this.chkactwisedtl = false;
        this.IsOldEntry = "1";
        this.lblNetSummary = "2. Net Amount will be same.";
        this.showhidebtn = false;
        this.disablevoucherno = false;
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
    JournalVoucherOEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.VoucherDate = new Date();
        this.VoucherDate = this._dataService.datechnge(this.VoucherDate);
        var jsonparam = { cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            PSTATUS: this.STATUS };
        this._dataService.getData("Accounts/ACC_JV_PAGELOAD", jsonparam)
            .subscribe(function (data) {
            _this.AccountNameList = data.Table;
            _this.Departmentlist = data.Table1;
            _this.Allitemlist = data.Table2;
        });
        var jsonreset = { VGUID: this._loginService.getLogin()[0].GUID };
        this._dataService.getData("Accounts/ACC_JV_RESET", jsonreset)
            .subscribe(function (data) {
        });
    };
    JournalVoucherOEComponent.prototype.ShowoldData = function () {
        var _this = this;
        if (this.Validate_JV_OldEntryNo() == false) {
            return false;
        }
        else {
            var jsonview = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.VoucherNo,
                VGUID: this._loginService.getLogin()[0].GUID,
                STATUS: this.STATUS
            };
            this._dataService.getData("Accounts/ACC_JV_View_OLD", jsonview)
                .subscribe(function (data) {
                _this.VoucherNo = data.Table2[0].JVCODE;
                _this.VoucherDate = (data.Table2[0].JV_DATE != "") ? (data.Table2[0].JV_DATE) : "";
                _this.Narration = data.Table2[0].NARRATION;
                _this.Accountlist = data.Table;
                _this.OriginalAccountlist = data.Table;
                _this.Accountwiselist = data.Table1;
                _this.lblNetSummary = data.Table3[0].MSG_LINE2;
                _this.chkrules = 'Y';
                _this.showhidebtn = true;
                _this.disablevoucherno = true;
                _this.TotalDebit = data.Table3[0].TOTDEBIT;
                _this.TotalCredit = data.Table3[0].TOTCREDIT;
                _this.OldActualAmt = data.Table3[0].NETTOTAL;
                _this.OldTotCredit = data.Table3[0].TOTCREDIT;
                _this.OldTotDebit = data.Table3[0].TOTDEBIT;
            });
        }
    };
    JournalVoucherOEComponent.prototype.Validate_JV_OldEntryNo = function () {
        if (this.VoucherNo == "" || this.VoucherNo == undefined) {
            alert("Please enter Journal Voucher No. !");
            return false;
        }
        else if (this.VoucherNo != "" && this.VoucherNo.length < 15) {
            alert("You have entered Voucher No. is not Valid. !!");
            return false;
        }
    };
    JournalVoucherOEComponent.prototype.Validate_OLD_NEW_NETAMT_IU = function () {
        this.NewTotDebit = this.TotalDebit;
        this.NewTotCredit = this.TotalCredit;
        this.NEWNETTOTAMT = this.NewTotDebit - this.NewTotCredit;
        if ((this.NEWNETTOTAMT) != (this.OldActualAmt)) {
            alert('Failed to Submit!\n\nOriginal Net Total [' + this.OldTotDebit + '-' + this.OldTotCredit + '] (i.e., Total Debit [' + this.OldTotDebit + '] less Total Credit [' + this.OldTotCredit + ']) \n is not equal to Current Net Total [' + this.TotalDebit + '-' + this.TotalCredit + '] (i.e., Total Debit [' + this.NewTotDebit + '] less total Credit [' + this.NewTotCredit + '])');
            return false;
        }
    };
    JournalVoucherOEComponent.prototype.showrules = function (chktype) {
        if (chktype == 'R') {
            if (this.chkrules == 'N') {
                this.chkrules = "Y";
            }
            else {
                this.chkrules = "N";
            }
        }
        else if (chktype == 'OA') {
            if (this.chkoriginactdtl == false) {
                this.chkoriginactdtl = true;
            }
            else {
                this.chkoriginactdtl = false;
            }
        }
        else if (chktype == 'A') {
            if (this.chkactwisedtl == false) {
                this.chkactwisedtl = true;
            }
            else {
                this.chkactwisedtl = false;
            }
        }
    };
    JournalVoucherOEComponent.prototype.Editchildrecd = function (id) {
        var filterData = this.Accountlist.filter(function (filter) { return filter.ID == id; })[0];
        this.ID = filterData.ID;
        this.AccountName = filterData.CLIENT + '|' + filterData.ISJOBREPORT;
        this.GetActName(filterData.CLIENT + '|' + filterData.ISJOBREPORT);
        this.Item = filterData.ITEM_DATAVALUE;
        this.Debit = filterData.DEBIT;
        this.Credit = filterData.CREDIT;
        this.EntryType = filterData.ENTRYTYPE;
        this.BillNo = filterData.BILLNO;
        this.JobNo = filterData.JOBNO;
        this.ShortNarration = filterData.NARRATION;
        this.txtchild = "Update";
        this.JV_DTLS_ID = filterData.JV_dtls_ID;
        this.ACCTNAME = filterData.ACCOUNT_NAME;
        this.DepartmentName = filterData.DEPARTMENT;
        this.Department = filterData.DEPTID;
        this.jv_trn = filterData.JV_TRANS;
    };
    JournalVoucherOEComponent.prototype.GetDepartmentName = function (event) {
        this.DepartmentName = event.target.options[event.target.options.selectedIndex].text; //.split("|")[1];
    };
    JournalVoucherOEComponent.prototype.GetEntryType = function (entrytypeval) {
        if (entrytypeval == "AD") {
            this.toggledebit = true;
            this.Debit = "";
        }
        else {
            this.toggledebit = false;
            this.Debit = "";
        }
    };
    JournalVoucherOEComponent.prototype.GetActName = function (Acctcode) {
        var codeacct;
        this.codelistActt = this.AccountNameList.filter(function (code) { return code.ACCTCODENAME === Acctcode; });
        this.ACCTNAME = this.codelistActt[0].ACCTNAME;
        codeacct = this.codelistActt[0].ACCTCODENAME;
        this.ItemList = this.Allitemlist.filter(function (code) { return code.ACCTCODE === Acctcode.split("|")[0]; });
    };
    JournalVoucherOEComponent.prototype.deletechildrecd = function (id, jvdtlsid) {
        var _this = this;
        if (this.ISNOTEDITABLE == "1") {
            this._toasterService.toast("warning", "warning", "You cannot delete this reocrd!");
        }
        else {
            if (confirm('Are you sure want to delete the record ?')) {
                this.loaderService.display(true);
                var jsondelete = { ID: id, VGUID: this._loginService.getLogin()[0].GUID, JV_DTLS_ID: jvdtlsid };
                this._dataService.getData("Accounts/ACC_JV_TMP_DEL", jsondelete)
                    .subscribe(function (data) {
                    if (data.Table1[0].STATUS.split("#")[0] == "100") {
                        _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUSTEXT);
                        _this.Accountlist = data.Table;
                        _this.TotalDebit = data.Table1[0].TOTDEBIT;
                        _this.TotalCredit = data.Table1[0].TOTCREDIT;
                        _this.loaderService.display(false);
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
    };
    JournalVoucherOEComponent.prototype.Add_Main = function () {
        var _this = this;
        if (this.IsOldEntry == "1") {
            if (this.Validate_OLD_NEW_NETAMT_IU() == false) {
                return false;
            }
        }
        if (this.ISJVGENERATE == '1') {
            alert("You can not Update this JV Request because JV is already Generated for this Request !");
            return false;
        }
        if (this.VoucherDate == "") {
            this._toasterService.toast('warning', 'warning', 'Please Enter Voucher Date !');
            return false;
        }
        if (parseFloat(this.TotalDebit) != parseFloat(this.TotalCredit)) {
            this._toasterService.toast('warning', 'warning', 'The Debit And Credit Total Not Matching Please Check !');
            return false;
        }
        if (parseFloat(this.TotalDebit) == 0 || parseFloat(this.TotalCredit) == 0) {
            this._toasterService.toast('warning', 'warning', 'The Debit or Credit Total Cannot Be Zero !');
            return false;
        }
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            ENTRYNO: this.VoucherNo,
            ENTRYDT: this.VoucherDate,
            STATUS: this.STATUS,
            NARRATION: this.Narration,
            VGUID: this._loginService.getLogin()[0].GUID,
            MAKER_ID: this._loginService.getLogin()[0].CMPID,
            MAKER_IP: this._loginService.getLogin()[0].MAKERIP,
            ACTION: (this.VoucherNo == " ") ? "INSERT" : "UPDATE",
        };
        this._dataService.Common("Accounts/ACC_JV_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table1[0].STATUS.split("#")[1]);
                _this.Print(data.Table1[0].ENTRYNO);
                _this.loaderService.display(false);
                _this.ResetMain();
                _this.showhidebtn = false;
                _this.disablevoucherno = false;
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    JournalVoucherOEComponent.prototype.Print = function (jvno) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-JV-Print/' + jvno + '/' + this.STATUS + '/', "Journal Voucher Print", toolbar);
    };
    JournalVoucherOEComponent.prototype.ResetMain = function () {
        this.Resetchildrcrd();
        this.VoucherNo = " ";
        this.VoucherDate = '';
        this.TotalCredit = '';
        this.TotalDebit = '';
        this.text = "Submit";
        this.Accountlist = "";
        this.lblNetSummary = '2. Net Amount will be same.';
        this.OriginalAccountlist = [];
        this.Accountwiselist = [];
        this.Narration = "";
        this._router.navigate(["/accounts/OldEntry/OEJV/Add/ "]);
    };
    JournalVoucherOEComponent.prototype.Addchildrcrd = function () {
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
        if (this.EntryType == "AO" || this.EntryType == "AB") {
            if (this.BillNo == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter BillNo. !');
                return false;
            }
            if (this.BillNo.length < 15) {
                this._toasterService.toast('warning', 'warning', 'Invalid BillNo - Please Check !');
                return false;
            }
        }
        if (this.EntryType == "AD") {
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
            if (this.JobNo.substr(2, 3) != this._loginService.getLogin()[0].CITYCODE1) {
                this._toasterService.toast("warning", "warning", 'You have entered Job No of different City !');
                return false;
            }
        }
        if (this.JobNo == "" && this.BillNo == "") {
            if (this.Department == "" || this.Department == undefined) {
                this._toasterService.toast('warning', 'warning', 'Please Select Department !');
                return false;
            }
        }
        if ((this.Debit == "" || this.Debit == "0") && (this.Credit == "" || this.Credit == "0")) {
            this._toasterService.toast('warning', 'warning', 'Both Debit & Credit Amount cannot be Left Blank !');
            return false;
        }
        if (parseFloat(this.Debit) > 0 && parseFloat(this.Credit) > 0) {
            this._toasterService.toast('warning', 'warning', 'Either Debit or Credit Amount Should Be Entered !');
            return false;
        }
        if (this.Debit.length > 0 && parseFloat(this.Debit) > 0) {
            if (this.Debit.slice(0, 1) == ".") {
                this._toasterService.toast('warning', 'warning', 'Debit Amount Entered not Valid !');
                return false;
            }
            if (parseFloat(this.Debit) < 0) {
                this._toasterService.toast('warning', 'warning', 'Debit Amount Entered not Valid !');
                return false;
            }
        }
        if (this.Credit.length > 0 && parseFloat(this.Credit) > 0) {
            if (this.Credit.slice(0, 1) == ".") {
                this._toasterService.toast('warning', 'warning', 'Credit Amount Entered not Valid !');
                return false;
            }
            if (parseFloat(this.Credit) < 0) {
                this._toasterService.toast('warning', 'warning', 'Credit Amount Entered not Valid !');
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
        if (this.Debit > this.Credit) {
            this.jv_trn = "D";
            this.Credit = "";
        }
        else {
            this.jv_trn = "C";
            this.Debit = "";
        }
        var jsonchild = { ID: this.ID, ENTRYNO: this.VoucherNo, CLIENT: this.AccountName.split("|")[0],
            JOBNO: this.JobNo, BILLNO: this.BillNo, JV_TRN: this.jv_trn, DEBIT: this.Debit, CREDIT: this.Credit,
            ENTRYTYPE: (this.EntryType == undefined) ? "" : this.EntryType, NARRATION: this.ShortNarration, ITEMCODE: (this.Item == undefined) ? "" : this.Item.split("|")[0],
            DEPTID: this.Department, VGUID: this._loginService.getLogin()[0].GUID,
            ACCOUNT_NAME: this.ACCTNAME, ITEM: (this.Item == undefined || this.Item == "") ? "" : this.Item.split("|")[2],
            DEPARTMENT: (this.DepartmentName == undefined) ? "" : this.DepartmentName, JV_DTLS_ID: this.JV_DTLS_ID,
            STATUS: this.STATUS,
            ISJOBREPORT: this.AccountName.split("|")[1],
            ITEM_DATAVALUE: (this.Item == undefined) ? "" : this.Item,
            ISOLDENTRY: this.IsOldEntry
        };
        this._dataService.Common("Accounts/ACC_JV_TMP_IU", jsonchild)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this.Accountlist = data.Table;
                _this.TotalDebit = data.Table1[0].TOTDEBIT;
                _this.TotalCredit = data.Table1[0].TOTCREDIT;
                _this.Resetchildrcrd();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table1[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    JournalVoucherOEComponent.prototype.Resetchildrcrd = function () {
        this.ID = "0";
        this.AccountName = undefined;
        this.JobNo = "";
        this.Debit = "";
        this.Credit = "";
        this.ShortNarration = "";
        this.Item = undefined;
        this.Department = "";
        this.EntryType = "";
        this.txtchild = "Add";
        this.BillNo = "";
        this.toggledebit = false;
        this.JV_DTLS_ID = "0";
    };
    JournalVoucherOEComponent.prototype.Reset = function () {
        if (confirm('Are you sure you want to reset all data?')) {
            this.Resetchildrcrd();
            this.VoucherNo = " ";
            this.disablevoucherno = false;
            this.VoucherDate = '';
            this.Narration = '';
            this.TotalCredit = '';
            this.TotalDebit = '';
            this.text = "Submit";
            this.Accountlist = [];
            this.lblNetSummary = '2. Net Amount will be same.';
            this.OriginalAccountlist = [];
            this.Accountwiselist = [];
            this.showhidebtn = false;
            this._toasterService.toast('info', 'success', "Clear all data");
            this.loaderService.display(false);
            {
                this._router.navigate(["/accounts/OldEntry/OEJV/Add/ "]);
            }
        }
        else {
            return false;
            this.loaderService.display(false);
        }
    };
    JournalVoucherOEComponent.prototype.ValidateJobNo = function (jbno) {
        var _this = this;
        if (this.EntryType == "JB" && this.JobNo.length > 0) {
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
            var jsonvalidate = { JVJOBNO: jbno, JVACCOUNT: this.AccountName.split("|")[0] };
            this._dataService.getData("Accounts/ACC_JV_JOBNO_VALIDATE", jsonvalidate)
                .subscribe(function (data) {
                if (data.Table[0].STATUS.split("#")[0] == "100") {
                }
                else if (data.Table[0].STATUS.split("#")[0] == "103") {
                    if (confirm(data.Table[0].STATUSTEXT + 'Are you sure you want to add this JOBNO ?')) {
                        return true;
                    }
                    else {
                        _this.JobNo = "";
                        return false;
                    }
                }
                _this.loaderService.display(false);
            });
        }
        else {
            return false;
        }
    };
    JournalVoucherOEComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    JournalVoucherOEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./journalvoucher-IUOld.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], JournalVoucherOEComponent);
    return JournalVoucherOEComponent;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEJV/journalvoucherOE.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEJV/journalvoucherOE.module.ts ***!
  \*******************************************************************/
/*! exports provided: JVOEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JVOEModule", function() { return JVOEModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _journalvoucherOE_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journalvoucherOE.routing */ "./src/app/accounts/OldEntry/OEJV/journalvoucherOE.routing.ts");
/* harmony import */ var _journalvoucher_IUOld_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./journalvoucher-IUOld.component */ "./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SharedModule } from '../../../shared/shared.module';


;
///import {BankReceiptModule} from '../BankRecpt/bankrecpt.module';
var JVOEModule = /** @class */ (function () {
    function JVOEModule() {
    }
    JVOEModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_journalvoucherOE_routing__WEBPACK_IMPORTED_MODULE_6__["JVOERoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _journalvoucher_IUOld_component__WEBPACK_IMPORTED_MODULE_7__["JournalVoucherOEComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], JVOEModule);
    return JVOEModule;
}());



/***/ }),

/***/ "./src/app/accounts/OldEntry/OEJV/journalvoucherOE.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/OldEntry/OEJV/journalvoucherOE.routing.ts ***!
  \********************************************************************/
/*! exports provided: JVOERoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JVOERoutingModule", function() { return JVOERoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _journalvoucher_IUOld_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journalvoucher-IUOld.component */ "./src/app/accounts/OldEntry/OEJV/journalvoucher-IUOld.component.ts");
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
            title: ' Old JV'
        },
        children: [
            { path: 'Add/:EntryNo', component: _journalvoucher_IUOld_component__WEBPACK_IMPORTED_MODULE_2__["JournalVoucherOEComponent"], data: { title: 'Add' } },
        ]
    }
];
var JVOERoutingModule = /** @class */ (function () {
    function JVOERoutingModule() {
    }
    JVOERoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JVOERoutingModule);
    return JVOERoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=OEJV-journalvoucherOE-module.js.map