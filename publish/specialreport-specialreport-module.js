(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["specialreport-specialreport-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/specialreport/specialledger.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/Accreport/specialreport/specialledger.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" >  \r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\" >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col-sm-12\">\r\n                            <strong>{{Header}}</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 col-lg-6 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\r\n                <tr>\r\n                    <td class=\"col-form-span-heading\" colspan=\"6\"> <b>General Account Statement All For All City</b> </td>\r\n           </tr>\r\n                <tr>\r\n                    <td >\r\n                        <span  class=\"col-form-span-label\"><b>Account Name</b> </span><span\r\n                        class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n\r\n                            <td colspan=\"3\" >\r\n                               <ng-select   [items]=\"AccountList\" bindLabel=\"ACCTNAME\"\r\n                               bindValue=\"ACCTCODENAME\"  [(ngModel)]=\"Client\" (ngModelChange)=\"GetAccountName($event)\"\r\n                               class=\"custom\" placeholder=\"--Please Select--\">\r\n                                </ng-select>\r\n                            </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td><span class=\"col-form-span-label\"><b>From</b> </span><span\r\n                        class=\"col-form-span-error\">*</span></td>\r\n                <td>\r\n                    <my-date-picker name=\"FromDate\" (dateChanged)=\"FromDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                        class=\"form-control\"  [selDate]=\"FromDate\"    ></my-date-picker>\r\n                </td>\r\n                    <td><span class=\"col-form-span-label\"><b>To </b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td><my-date-picker name=\"ToDate\" (dateChanged)=\"ToDateChanged($event)\"  [options]=\"myDatePickerOptions\"\r\n                            class=\"form-control\"  [selDate]=\"ToDate\"   ></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"centerlabel\">\r\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"Showdata()\" > <span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>\r\n                                Search </span></button>&nbsp;\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3 col-lg-3\">\r\n        </div>\r\n\r\n\r\n    </div>\r\n     <div class=\"row no-gutters\"  *ngIf=\"displayType=='LIST'\" >\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n\t\t<div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                <tr align=\"right\" class=\"title-head formheading\">\r\n                    <th><a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';StatementList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a></th>\r\n                </tr>\r\n                <tr><td colspan=\"9\" class=\"centerlabel\"><strong>{{searchHeaderText}}</strong></td>\r\n                </tr>\r\n                <tr><td colspan=\"9\" class=\"centerlabel\"><strong> {{AccountName}}</strong> </td>\r\n                </tr>\r\n            </table>\r\n    \t  <table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t <tr>\r\n                <td align=\"right\">\r\n        <table  class=\"table table-bordered table-sm-new bgwhite\" style=\"width:300px\">    \r\n           <tr>\r\n            <td><span class=\"col-form-span-label\">Opening : </span> </td>\r\n            <td><span class=\"col-form-span-label\">{{OpDrBal}}</span></td>\r\n            <td><span class=\"col-form-span-label\"> {{OpCrBal}}</span></td>\r\n           </tr>\r\n           <tr>\r\n            <td   class=\"col-form-span-label\" align=\"right\">Current Total:</td>\r\n            <td   class=\"col-form-span-label\" align=\"right\">{{currTotalDr}} </td>\r\n            <td   class=\"col-form-span-label\" align=\"right\">{{currTotalcr}}  </td>\r\n           </tr>\r\n                    <tr>\r\n                <td ><span class=\"col-form-span-label\">Closing : </span> </td>\r\n                <td><span class=\"col-form-span-label\">{{CLDrBal}}</span></td>\r\n                <td><span class=\"col-form-span-label\"> {{CLCrBal}}</span></td>  \r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-form-span-label anchor-link\" (click)=\"AdvanceViewData()\" align=\"right\">Advance:  </td>\r\n                        <td class=\"col-form-span-label\" align=\"right\">{{AdvCrAmt}} </td>\r\n                        <td  class=\"col-form-span-label\" align=\"right\">{{AdvDrAmt}}</td>\r\n                    </tr>\r\n         \r\n            </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n    </div>\r\n    </div>\r\n    <div class=\"row no-gutters\"   *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10 \">\r\n           <div class=\"row  xyscroll\"  style=\"height: 500px;\">\r\n                <table class=\"table table-bordered table-sm-new table-striped \" >\r\n                    <thead>\r\n                        <tr class=\"title-head formheading table-primary\">\r\n                            <th class=\"col-form-span-label\" align=\"center\"></th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">\tNumber</th>\r\n                            <th class=\"col-form-span-label\" align=\"center\">Date</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Particulars</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Narration</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Debit</th>   \r\n                            <th class=\"col-form-span-label\" align=\"center\">Credit</th>   \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"StatementList.length > 0\">\r\n                        <tr *ngFor=\"let data of StatementList\">\r\n                            <td style=\"width: 30px;\"><span  class=\"col-form-span-label\" >{{data.TRANSTYPE}}</span> </td> \r\n                            <td style=\"width: 130px;\" ><span class=\"col-form-span-label\" (click)=\"Openprint(data.TRANSCODE,data.TRANSTYPE)\" >{{data.TRANSCODE}}</span>  </td>                             \r\n                            <td  style=\"width: 90px;\" ><span class=\"col-form-span-label\">{{data.TRANSDATE}}</span>  </td>\r\n                            <td  style=\"width:200px; \" class=\"col-form-span-label\">\r\n                                <p    style=\"white-space: pre-wrap;width: 200px; \" > {{data.EXP_SNAME}}{{data.SUP_SNAME}}</p>\r\n                            </td> \r\n                           <td  style=\"width:200px; \" class=\"col-form-span-label\">\r\n                            <p  style=\"white-space: pre-wrap;width: 200px; \" > {{data.NARR}}{{data.ACCTNAME}}</p>\r\n                           </td>\r\n                            <td  style=\"width: 100px;\" ><span class=\"col-form-span-label\">{{data.DRAMT}}</span>  </td>\r\n                            <td   style=\"width: 100px;\"><span class=\"col-form-span-label\">{{data.CRAMT}}</span>  </td>\r\n                        </tr>\r\n                        <tr> <td colspan=\"7\" class=\"centerlabel\">\r\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"Exportstatement()\" > <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-file-excel-o\"></i>\r\n                            Export To Excel </span></button>&nbsp;\r\n                        </td>\r\n                </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n         </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\">\r\n        </div>\r\n                    \r\n    </div>  \r\n</div>\r\n<div class=\"modal\" [style.display]=\"showModal_Advance ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\"  >\r\n        <div class=\"modal-content \" style=\"height:400px; width:800px;overflow-x: auto;\">\r\n            <div class=\"modal-header\">\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <table class=\"table table-sm-new table-responsive-sm\" >\r\n              <tr>\r\n             <td colspan=\"6\" class=\"centerlabel\"><strong>{{advheader}}</strong>  </td>\r\n                   </tr>\r\n                    <tr> \r\n                        <!-- <td colspan=\"6\" class=\"centerlabel\"><strong> {{ClientName}}</strong></td> -->\r\n                    </tr>\r\n                </table>\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > -->\r\n                        <div class=\"col\" >\r\n                        <table align=\"right\" class=\"table  table-sm-new bgwhite\" style=\"width:150px\">\r\n                         <tr>\r\n                           <td align=\"right\"> <span class=\"col-form-span-label\">Advance Total:</span></td>\r\n                           <td><span  class=\"col-form-span-label\">{{AdvTotal}}</span></td>\r\n                         </tr>\r\n                            </table>\r\n                            <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                <thead>\r\n                                  <tr class=\"col-form-span-heading \">\r\n                                    <th class=\"col-form-span-label\"></th>\r\n                                    <th class=\"col-form-span-label\">Number</th>\r\n                                    <th class=\"col-form-span-label\">Date</th>\r\n                                    <th class=\"col-form-span-label\">Particulars</th>\r\n                                    <th class=\"col-form-span-label\">Amount</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let data of AdvanceTable\">\r\n                                    <td class=\"col-form-span-label\">{{data.transtype}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transcode}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.Transdate}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.exp_sname}},{{data.sup_sname}},{{data.acctname}}</td>\r\n                                    <td class=\"col-form-span-label\">{{data.cramt|number:'2.2-4'}}</td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                             <!-- KC <div style=\"float: center;\"> -->\r\n                                <table class=\"table table-bordered table-sm-new bgwhite \">\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Print()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Print</span></button>\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Exportstatement()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> ExportToExcel</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"close()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"\r\n                                              aria-hidden=\"true\"></i> Close</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/Accreport/specialreport/specialledger.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/accounts/Accreport/specialreport/specialledger.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SpecialLedger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialLedger", function() { return SpecialLedger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
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








var SpecialLedger = /** @class */ (function () {
    function SpecialLedger(_dataService, _toasterService, loaderService, _router, http, exportser, _activatedRoute, _loginService, _loaderService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.exportser = exportser;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '18px',
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
        this.AccountList = [];
        this.displayType = 'SEARCH';
        this.StatementList = [];
        this.exceldata_list = [];
        this.advdata_list = [];
        this.advdataForExcel = [];
        this.dataForExcel = [];
        this.showModal_Advance = false;
        this.AdvanceTable = [];
        this.advheaderlist = [];
        this.Status = "All";
        this.Header = "GENERAL ACCOUNT STATEMENT ALL FOR ALL CITY";
    }
    SpecialLedger.prototype.ngOnInit = function () {
        this.verifyPermission('328', 'View');
        this._loaderService.display(true);
        this.getCompanyName();
        this.FillAccount();
        this.FromDate = this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE; ///this._dataService.datechnge(this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE)
        this.ToDate = new Date();
        this.ToDate = this._dataService.datechnge1(this.ToDate);
        this._loaderService.display(false);
    };
    SpecialLedger.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    SpecialLedger.prototype.FillAccount = function () {
        var _this = this;
        var jsonItem = {
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
            cmpid: this._loginService.getLogin()[0].CMPID,
        };
        this._dataService.getData("Accounts/ACC_CMP_FILL_GACCOUNT_SPECIAL_LEDGER_PAGELOAD", jsonItem)
            .subscribe(function (data) {
            _this.AccountList = data.Table;
            _this._loaderService.display(false);
        });
    };
    SpecialLedger.prototype.getCompanyName = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsoncmp = {
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            CityCode: this._loginService.getLogin()[0].CITYCODE
        };
        this._dataService.getData("Accounts/fn_Acc_Rpt_Common_CompanyDetails", jsoncmp)
            .subscribe(function (data) {
            _this.Compname = data.Table[0].cmp_name;
            _this.loaderService.display(false);
        });
    };
    SpecialLedger.prototype.Showdata = function () {
        var _this = this;
        this.loaderService.display(true);
        if (this.Client == "" || this.Client == undefined) {
            this._toasterService.toast('warning', 'warning', "Please select Account !");
            return false;
        }
        if (this.FromDate == "" || this.FromDate == undefined) {
            this._toasterService.toast('warning', 'warning', "From Date cannot be blank !");
            return false;
        }
        if (this.ToDate == "" || this.ToDate == undefined) {
            this._toasterService.toast('warning', 'warning', "To Date cannot be blank!");
            return false;
        }
        var jsonData = {
            ClientCode: (this.Client == undefined) ? "" : this.Client,
            cmpcode: this._loginService.getLogin()[0].CMPCODE,
            UserStartDate: this.FromDate,
            UserEndDate: this.ToDate,
            FinStartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            FinEndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/Acct_Rpt_ClientOutstandingAll_35_Special_ledger", jsonData)
            .subscribe(function (data) {
            _this.displayType = "LIST";
            _this.StatementList = data.Table;
            for (var i = 0; i < _this.StatementList.length; i++) {
                var obj = {
                    Type: _this.StatementList[i].TRANSTYPE,
                    Number: _this.StatementList[i].TRANSCODE,
                    Date: _this.StatementList[i].TRANSDATE,
                    Particulars: _this.StatementList[i].NARR + "," + _this.StatementList[i].EXP_SNAME + "," + _this.StatementList[i].SUP_SNAME + "," + _this.StatementList[i].ACCTNAME,
                    Debit: _this.StatementList[i].DRAMT,
                    Credit: _this.StatementList[i].CRAMT
                };
                _this.exceldata_list.push(obj);
            }
            _this.exceldata_list.forEach(function (row) {
                _this.dataForExcel.push(Object.values(row));
            });
            if (data.Table1[0].OPBAL > 0) {
                _this.OpDrBal = data.Table1[0].OPBAL + " Dr";
                _this.rptopbal = data.Table1[0].OPBAL + " Dr";
            }
            else {
                _this.OpCrBal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : Math.abs(data.Table1[0].OPBAL) + " Cr";
                _this.rptopbal = (data.Table1[0].OPBAL == "0.00") ? "0.0" : Math.abs(data.Table1[0].OPBAL) + " Cr";
            }
            if (data.Table1[0].CLBAL > 0) {
                _this.CLDrBal = data.Table1[0].CLBAL;
                _this.rptclbal = data.Table1[0].CLBAL + " Dr";
            }
            else {
                _this.CLCrBal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
                _this.rptclbal = (data.Table1[0].CLBAL == "0.00") ? "" : Math.abs(data.Table1[0].CLBAL) + " Cr";
            }
            if (data.Table1[0].TLDR > 0) {
                _this.currTotalDr = data.Table1[0].TLDR;
                _this.rptcrtotdr = data.Table1[0].TLDR + " Dr";
            }
            else {
                _this.currTotalDr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR);
                _this.rptcrtotdr = (data.Table1[0].TLDR == "0.00") ? "" : Math.abs(data.Table1[0].TLDR) + "Dr";
            }
            if (data.Table1[0].TLCR > 0) {
                _this.currTotalcr = data.Table1[0].TLCR;
                _this.rptcrtotcr = data.Table1[0].TLCR + " Cr";
            }
            else {
                _this.currTotalcr = (data.Table1[0].TLCR == "0.00") ? "" : Math.abs(data.Table1[0].TLCR);
                _this.rptcrtotcr = (data.Table1[0].TLCR == "0.00") ? "" : Math.abs(data.Table1[0].TLCR);
            }
            if (data.Table2[0].ADVTOTALDR > 0) {
                _this.AdvDrAmt = data.Table2[0].ADVTOTALDR;
                _this.rptadvtotdr = data.Table2[0].ADVTOTALDR;
            }
            else {
                _this.AdvDrAmt = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALDR);
                _this.rptadvtotdr = (data.Table2[0].ADVTOTALDR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALDR);
            }
            if (data.Table2[0].ADVTOTALCR > 0) {
                _this.AdvCrAmt = data.Table2[0].ADVTOTALCR;
                _this.rptadvtotcr = data.Table2[0].ADVTOTALCR;
            }
            else {
                _this.AdvCrAmt = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
                _this.rptadvtotcr = (data.Table2[0].ADVTOTALCR == "0.00") ? "" : Math.abs(data.Table2[0].ADVTOTALCR);
            }
            _this.searchHeaderText = "Account Statement From " + _this.FromDate + " To " + _this.ToDate;
            _this._loaderService.display(false);
        });
    };
    SpecialLedger.prototype.FromDateChanged = function (ev) {
        this.FromDate = ev.formatted;
    };
    SpecialLedger.prototype.ToDateChanged = function (ev) {
        this.ToDate = ev.formatted;
    };
    SpecialLedger.prototype.GetAccountName = function (icode) {
        var updateItem = this.AccountList.find(function (item) { return item.ACCTCODENAME === icode; });
        this.AccountName = updateItem.ACCTNAME;
    };
    SpecialLedger.prototype.Exportstatement = function () {
        if (confirm('Click OK For With Advance Excel,\n CANCEL For Without Advance Excel')) {
            var reportData = {
                data: this.dataForExcel,
                advdata: this.advdataForExcel,
                headers: Object.keys(this.exceldata_list[0]),
                advheaders: ["Type", "Number", "Particulars", "Amount"],
                pagetype: "ItemStatement",
                title: "Account Statement From " + this.FromDate + " To " + this.ToDate,
                subtitle: this.AccountName,
                clntname: this.Compname,
                opbal: "Opening: " + this.rptopbal,
                currenttot: "Current Total : " + this.rptcrtotdr + " " + this.rptcrtotcr,
                closing: "Closing : " + this.rptclbal,
                advance: "Advance : " + this.rptadvtotdr + this.rptadvtotcr
            };
            this.exportser.exportExceltry(reportData, "Account_StatementAll_With_Adv_" + this.AccountName);
        }
        else {
            return false;
        }
    };
    SpecialLedger.prototype.AdvanceViewData = function () {
        var _this = this;
        if ((this.AdvCrAmt == '' && this.AdvDrAmt == '') || (this.AdvCrAmt == undefined && this.AdvDrAmt == undefined)) {
            alert("No Record Found!");
            return false;
        }
        else {
            this.loaderService.display(true);
            this.showModal_Advance = true;
            this.advheader = "Account Statement for Advance From " + this.FromDate + " To " + this.ToDate;
            var jsonadv = {
                ClCode: this.Client,
                FINSTARTDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                FINENDDATE: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
                cmp_code: this._loginService.getLogin()[0].CMPCODE,
                citycode1: this._loginService.getLogin()[0].CITYCODE1,
                STARTDATE: this.FromDate,
                ENDDATE: this.ToDate
            };
            var jsonadvall = {
                ClCode: this.Client,
                cmp_code: this._loginService.getLogin()[0].CMPCODE,
                citycode1: this._loginService.getLogin()[0].CITYCODE1,
                STARTDATE: this.FromDate,
                ENDDATE: this.ToDate
            };
            if (this.Status == "All") {
                this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_GetAll", jsonadvall)
                    .subscribe(function (data) {
                    if (data.Table.length > 0) {
                        _this.AdvanceTable = data.Table;
                        _this.AdvTotal = data.Table1[0].totcramt;
                        _this.advdata_list = data.Table;
                        for (var i = 0; i < _this.advdata_list.length; i++) {
                            var obj = {
                                Type: _this.advdata_list[i].transtype,
                                Number: _this.advdata_list[i].Transcode,
                                Particulars: _this.advdata_list[i].exp_sname + "," + _this.advdata_list[i].sup_sname + "," + _this.advdata_list[i].acctname,
                                Amount: _this.advdata_list[i].cramt
                            };
                            _this.advheaderlist.push(obj);
                        }
                        _this.advheaderlist.forEach(function (row) {
                            _this.advdataForExcel.push(Object.values(row));
                        });
                    }
                    else {
                        return false;
                    }
                });
            }
            else {
                this._dataService.getData("Accounts/Acc_Rpt_TrialBalance_With_Advance_Print_Get", jsonadv)
                    .subscribe(function (data) {
                    if (data.Table.length > 0) {
                        _this.AdvanceTable = data.Table;
                        _this.AdvTotal = data.Table1[0].totcramt;
                        _this.advdata_list = data.Table;
                        for (var i = 0; i < _this.advdata_list.length; i++) {
                            var obj = {
                                Type: _this.advdata_list[i].transtype,
                                Number: _this.advdata_list[i].Transcode,
                                Particulars: _this.advdata_list[i].exp_sname + "," + _this.advdata_list[i].sup_sname + "," + _this.advdata_list[i].acctname,
                                Amount: _this.advdata_list[i].cramt
                            };
                            _this.advheaderlist.push(obj);
                        }
                        _this.advheaderlist.forEach(function (row) {
                            _this.advdataForExcel.push(Object.values(row));
                        });
                    }
                    else {
                        return false;
                    }
                });
            }
            this.loaderService.display(false);
        }
    };
    SpecialLedger.prototype.close = function () {
        this.showModal_Advance = false;
    };
    SpecialLedger.prototype.Print = function () {
        var frdt = this.FromDate.replace('/', '-');
        var todt = this.ToDate.replace('/', '-');
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('././#/popup/Account-actstatement-AdvancePrint/' + this.Client + '/' + this.AccountName + '/' + frdt.replace('/', '-') + '/' + todt.replace('/', '-') + '/' + this.Status + '/', "Print View", toolbar);
    };
    SpecialLedger.prototype.Openprint = function (No, Type) {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        if (confirm('Click OK to Print and Cancel to Edit')) {
            if (Type == "PI") {
                window.open('./#/popup/Account-Purchase-print/' + No + '/' + "PI" + '/', "PI Print", toolbar);
            }
            else if (Type == "JV") {
                window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/', "JV Print", toolbar);
            }
            else if (Type == "CN") {
                window.open('./#/popup/Account-CreditNote-Print/' + No + '/', "CN Print", toolbar);
            }
            else if (Type == "II") {
                //  window.open('./#/popup/Account-Invoice-print/' + No + '/' , "INV Print", toolbar);   
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
            else if (Type == "SI") {
                return false;
            }
            else if (Type == "BI") {
                return false;
            }
            else {
                window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/', "BR Print", toolbar);
            }
        }
        else {
            if (Type == "JV") {
                this._router.navigate(['/accounts/Voucher/JV/Add/JV/' + No]);
            }
            else if (Type == "BR") {
                this._router.navigate(['/accounts/Voucher/BankRecpt/Add/' + No]);
            }
            else if (Type == "BP") {
                this._router.navigate(['/accounts/Voucher/BankPayment/Add/' + No]);
            }
            else if (Type == "SI") {
                return false;
            }
            else if (Type == "II") {
                return false;
            }
            else {
                return false;
            }
        }
    };
    SpecialLedger.ctorParameters = function () { return [
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
    SpecialLedger = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-SpecialLedger-search',
            template: __webpack_require__(/*! raw-loader!./specialledger.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/Accreport/specialreport/specialledger.component.html")
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], SpecialLedger);
    return SpecialLedger;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/specialreport/specialreport-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/accounts/Accreport/specialreport/specialreport-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SpecialReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialReportRoutingModule", function() { return SpecialReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _specialledger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specialledger.component */ "./src/app/accounts/Accreport/specialreport/specialledger.component.ts");
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
            title: 'SpecialReport'
        },
        children: [
            { path: '', component: _specialledger_component__WEBPACK_IMPORTED_MODULE_2__["SpecialLedger"], data: { title: '' } },
        ]
    }
];
var SpecialReportRoutingModule = /** @class */ (function () {
    function SpecialReportRoutingModule() {
    }
    SpecialReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SpecialReportRoutingModule);
    return SpecialReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/Accreport/specialreport/specialreport.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/accounts/Accreport/specialreport/specialreport.module.ts ***!
  \**************************************************************************/
/*! exports provided: SpecialReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialReportModule", function() { return SpecialReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _specialreport_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specialreport-routing.module */ "./src/app/accounts/Accreport/specialreport/specialreport-routing.module.ts");
/* harmony import */ var _specialledger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specialledger.component */ "./src/app/accounts/Accreport/specialreport/specialledger.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SpecialReportModule = /** @class */ (function () {
    function SpecialReportModule() {
    }
    SpecialReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_specialledger_component__WEBPACK_IMPORTED_MODULE_3__["SpecialLedger"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _specialreport_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpecialReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], SpecialReportModule);
    return SpecialReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=specialreport-specialreport-module.js.map