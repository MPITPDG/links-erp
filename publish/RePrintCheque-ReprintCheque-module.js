(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RePrintCheque-ReprintCheque-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"row\" *ngIf=\"Searchdata_list.length==0\"> -->\r\n            <div class=\"row\">\r\n            <div class=\"col-sm-3\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\">\r\n                    <tbody style='height:30px'>\r\n                        <tr>\r\n                            <td class=\"col-form-span-heading\" colspan=\"9\">\r\n                                COMP BP ENTRYNO - LIST - ASSIGN TO - CHEQUE NO AND PRINT\r\n                            </td>\r\n                        </tr>\r\n                        <tr> \r\n                            <td>\r\n                                <span class=\"col-form-span-label width200\"><b>Bank</b> </span>                               \r\n                            </td>\r\n                            <td>\r\n                                <select class=\"form-control width250\"  [(ngModel)]=\"OurBank\"  >\r\n                                    <option value=\"0\">Please select</option>\r\n                                    <option *ngFor=\"let d of OurBankList\"  value={{d.ACCTCODENAME}}>{{d.ACCTNAME}}</option>                \r\n                                </select>\r\n                            </td>                         \r\n                            <td colspan=\"2\">\r\n                                <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"ViewChequeStockhelp()\"><span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> View Available Cheque No.</span></button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td >\r\n                                <span class=\"col-form-span-label width350\"><b>Starting Cheque No</b> </span>\r\n                            </td>\r\n                            <td > \r\n                                <input type=\"text\" class=\"form-control width100\" [(ngModel)]=\"SChequeNo\" >\r\n                            </td>  \r\n                           <td colspan=\"2\">\r\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"CheckStatus()\"><span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-search\"></i>Check Status </span></button>\r\n                           </td>                                   \r\n                        </tr>\r\n                        <tr>\r\n                            <td align=\"center\" colspan=\"4\" >\r\n                                <span  align=\"center\"  class=\"col-form-span-label width200\">{{MSG}}</span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-sm-3\"></div> \r\n        </div>  \r\n        <div class=\"row xyscroll\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-12\">\r\n            <table class=\"table table-sm-new table-responsive-sm table-bordered\"  >\r\n                <thead>                    \r\n                    <tr class=\"title-head formheading\">\r\n                        <th  class=\"col-form-span-label\"><input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp; </th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Status</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Entry No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Cheque No</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Payee Name</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tPay Date</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Amount</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">\tRequested By</th>\r\n                        <th class=\"col-form-span-label\" align=\"center\">Requested On</th>                            \r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"data_list.length > 0\">\r\n                    <tr *ngFor=\"let data of data_list\">\r\n                        <td  class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"data.Checked\"\r\n                            (ngModelChange)=\"getCheckboxValues($event,data.ENTRYNO,data.CHEQUETYPE)\"   > &nbsp; </td>\r\n                            <td><span\r\n                            class=\"col-form-span-label\" >{{data.PRINTSTATUS}}</span>\r\n                        </td> \r\n                        <td><span class=\"col-form-span-label link-label\" (click)=\"ViewReqBP(data.ENTRYNO,data.PAYEENAME)\"><u>{{data.ENTRYNO}}</u></span>\r\n                        </td>\r\n                        <td> \r\n                            <span [ngClass]=\"{'red': data.CHEQUENO  === 'Not Available', 'blue': data.CHEQUENO != 'Not Available'}\"\r\n                            class=\"col-form-span-label\"><b>{{data.CHEQUENO}}</b></span>\r\n                        </td>\r\n                        <td><span\r\n                                class=\"col-form-span-label\">{{data.PAYEENAME}}</span>\r\n                        </td>                             \r\n                        <td><span\r\n                            class=\"col-form-span-label\">{{data.CHEQUEDT}}</span>\r\n                    </td>\r\n                    \r\n                    \r\n                    <td><span\r\n                            class=\"col-form-span-label\">{{data.AMOUNT}}</span>\r\n                    </td> \r\n                            <td><span\r\n                            class=\"col-form-span-label\">{{data.RequestedBy}}</span>\r\n                            </td>\r\n                        <td><span\r\n                        class=\"col-form-span-label\">{{data.ENTRYDT}}</span>\r\n                        </td>\r\n                    \r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n         \r\n</div>\r\n<div>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\">\r\n                <tr>\r\n                    <td style=\"float: right;\" colspan=\"9\">\r\n                        <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"AssignToPrint()\"><span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Assign Cheque No To Entry No</span></button>\r\n                    </td>\r\n\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"modal\" [style.display]=\"showModal_ChqList ? 'block' : 'none'\">\r\n            <div class=\"modal-dialog modal-sg\" role=\"document\"  >\r\n                <!-- <div class=\"modal-content \" style=\"height:400px; width:600px;overflow-x: auto;\"> -->\r\n                    <div class=\"modal-content \">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">CHEQUE STOCK VIEW</h5>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row\">\r\n                             <div class=\"col\" style=\"height:400px;overflow-y: auto;\" > \r\n                                <!-- <div class=\"col\" > -->\r\n                                <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label\"><b> Cheque Stock List</b></span>\r\n                                        </td>                                         \r\n                                    </tr>                                 \r\n                                    <tr>\r\n                                        <td>\r\n                                            <thead style=\"text-align: center;\">\r\n                                                <tr>                                                    \r\n                                                    <th class=\"col-form-span-label\">Cheque No</th>                                                 \r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody >                                               \r\n                                                <tr *ngFor=\"let obj of ListChq \">                                                \r\n                                                    <td class=\"col-form-span-label\">{{obj.CHEQUENO}}</td>                                                 \r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </td>\r\n                                    </tr> \r\n                                </table>        \r\n                            </div>\r\n                        </div>\r\n                        <div style=\"float: right;\">                            \r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"\r\n                                    (click)=\"close()\"><i class=\"fa fa-ban\"></i>\r\n                                    Close</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"row\" *ngIf=\"Searchdata_list.length==0\"> -->\r\n            <div class=\"row\" >\r\n            <div class=\"col-sm-3\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\">\r\n                    <tbody style='height:30px'>\r\n                        <tr>\r\n                            <td class=\"col-form-span-heading\" colspan=\"5\">\r\n                                CANCEL - CHEQUE\r\n\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                           \r\n                            <td >\r\n                                <span class=\"col-form-span-label width150\"><b>Bank Payment No</b> </span>\r\n                               \r\n                            </td> \r\n                             <td>\r\n                                <input type=\"text\" class=\"form-control width150\" maxlength=\"15\" [(ngModel)]=\"BPNo\" >\r\n                            </td>  \r\n                              <td>\r\n                                <button class=\"btn btn-block btn-primary\" type=\"submit\" (click)=\"GetReqNo()\"><span\r\n                                    class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\r\n                                      </td>\r\n                        </tr>\r\n                        \r\n                     \r\n                        <tr>\r\n                            \r\n\r\n                            <td>\r\n                                <span class=\"col-form-span-label width150\" ><b>Remark</b> </span>\r\n                             \r\n                            </td>\r\n                            <td colspan=\"2\">\r\n                                <!-- <input type=\"text\" class=\"form-control width100\" [(ngModel)]=\"Remark\" > -->\r\n                                <textarea  class=\"form-control \"[(ngModel)]=\"Remark\" maxlength=\"8000\" aria-multiline=\"true\" ></textarea>\r\n                            </td>  \r\n\r\n                        </tr>\r\n                       \r\n                     <tr>\r\n                         <td>\r\n\r\n                         </td>\r\n                        <td colspan=\"2\">\r\n                            <button class=\"btn btn-block btn-outline-danger\" type=\"submit\" (click)=\"UpdateChequeNo()\"><span\r\n                                class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Cancel This Cheque</span></button>\r\n                                  </td>\r\n                     </tr>\r\n                      \r\n                    \r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-sm-3\"></div>        </div>\r\n  \r\n                     \r\n            </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RePrintChequeAssignChequeNoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RePrintChequeAssignChequeNoComponent", function() { return RePrintChequeAssignChequeNoComponent; });
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







var RePrintChequeAssignChequeNoComponent = /** @class */ (function () {
    function RePrintChequeAssignChequeNoComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _router, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.data_list = [];
        this.displayType = 'LIST';
        this.OurBankList = [];
        this.PrintCount = 0;
        this.showModal_ChqList = false;
        this.ListChq = [];
        this.newArray = [];
        this.MSG = "";
        this.Chequestr = [];
        this.PayOrderCel = "";
        this.celltxt = "";
        this.str = "";
        this.chkclick = "N";
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '20px',
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
    RePrintChequeAssignChequeNoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifyPermission('92', 'View');
        var jsonparam = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/ACC_CHEQUESTOCK_FILLOURBANK", jsonparam)
            .subscribe(function (data) {
            _this.OurBankList = data.Table;
        });
        this.loaderService.display(false);
        var jsondef = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/ACC_SETDEFAULT", jsondef)
            .subscribe(function (data) {
            _this.defval = data.Table[0].acctcode;
            var defbankval = data.Table[0].acctcode;
            _this.OurBank = defbankval;
            if (_this.OurBankList != undefined) {
                _this.GetDataList();
            }
        });
        /// this.SetDefBank();
    };
    RePrintChequeAssignChequeNoComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    RePrintChequeAssignChequeNoComponent.prototype.SetDefBank = function () {
        var _this = this;
        var jsondef = { CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/ACC_SETDEFAULT", jsondef)
            .subscribe(function (data) {
            _this.defval = data.Table[0].acctcode;
            var defbankval = data.Table[0].acctcode;
            _this.OurBank = defbankval;
        });
        this.loaderService.display(false);
    };
    RePrintChequeAssignChequeNoComponent.prototype.GetDataList = function () {
        var _this = this;
        var jsondata = {
            USERID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            ENTRYNO: "",
            FROMDATE: "",
            TODATE: "",
            OURBNK: this.OurBank,
            TYPE: "",
            STATUSTYPE: ""
        };
        this._dataService.getData("Accounts/ACC_BP_CMP_CHEQUE_SEARCH_READYTO_REPRINT", jsondata)
            .subscribe(function (data) {
            _this.data_list = data.Table;
            _this.loaderService.display(false);
        });
    };
    RePrintChequeAssignChequeNoComponent.prototype.ViewChequeStockhelp = function () {
        var _this = this;
        this.showModal_ChqList = true;
        this.loaderService.display(true);
        var jsonchqdtl = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            chequeno: "",
            OURBANK: this.OurBank.split("|")[0]
        };
        this._dataService.getData("Accounts/ACC_CHEQUE_STOCK_HELPVIEW", jsonchqdtl)
            .subscribe(function (data) {
            _this.ListChq = data.Table;
            _this.loaderService.display(false);
        });
    };
    RePrintChequeAssignChequeNoComponent.prototype.checkAll = function (ev) {
        this.newArray = [];
        this.data_list.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.data_list.length; i++) {
                var obj = {
                    bpno: this.data_list[i].entryno
                };
                this.newArray.push(obj);
            }
        }
        else {
            this.newArray = [];
        }
    };
    RePrintChequeAssignChequeNoComponent.prototype.CheckStatus = function () {
        var _this = this;
        if (this.SChequeNo.toString() == '' || this.SChequeNo == undefined) {
            alert("Please Enter Starting Cheque No");
            this._toasterService.toast('warning', 'warning', 'Please Enter Starting Cheque No!');
            return false;
        }
        if (this.newArray == "" || this.newArray == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please Select Atleast one Cheque!');
            return false;
        }
        var jsonchqstatus = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CHEQUENO: this.SChequeNo,
            OURBNK: this.OurBank.split("|")[0],
            PRINTCOUNT: this.PrintCount
        };
        this._dataService.getData("Accounts/ACC_BP_CHEQUE_AVAILABILITY", jsonchqstatus)
            .subscribe(function (data) {
            if (data.Table[0].STATUS1 == "1") {
                _this.ChkStatus = "Y";
                _this.MSG = "All Cheques Available";
            }
            else {
                _this.ChkStatus = "N";
                if (data.Table[0].STATUS == "0") {
                    _this.MSG = "Cheque/s does not available";
                }
                else {
                    _this.MSG = "*" + (data.Table[0].STATUS + " Continuous Cheques Available");
                }
            }
            _this.Assign(data.Table);
        });
        this.loaderService.display(false);
        //this.chkclick="Y";
    };
    RePrintChequeAssignChequeNoComponent.prototype.close = function () {
        this.showModal_ChqList = false;
    };
    RePrintChequeAssignChequeNoComponent.prototype.getCheckboxValues = function (event, data, chktype) {
        ///this.chkclick="N";
        //this.celltxt = ""
        var index = this.newArray.findIndex(function (x) { return x.ENTRYNO == data; });
        if (event) {
            var obj = {
                entryno: data,
                checked: event,
                chequetype: chktype
            };
            this.Chequestr = this.Chequestr + data + ",";
            this.newArray.push(obj);
            this.PrintCount = this.PrintCount + 1;
        }
        else {
            //this.newArray.push(obj);
            this.newArray.splice(index, 1);
            this.PrintCount = this.PrintCount - 1;
        }
    };
    RePrintChequeAssignChequeNoComponent.prototype.Assign = function (dtbl) {
        if (dtbl[0].STATUS != "0") {
            this.AvailableCount = dtbl[0].STATUS;
            this.AssignCount = 1;
            this.StartCheque = Number(this.SChequeNo);
            for (var i = 0; i < this.data_list.length; i++) {
                if (this.data_list[i].Checked === true) {
                    if (this.AvailableCount >= this.AssignCount) {
                        this.data_list[i]["CHEQUENO"] = this.StartCheque;
                        //this.data_list[i]["CHEQUENO"].color="Green" 
                        this.StartCheque = this.StartCheque + 1;
                        this.AssignCount = this.AssignCount + 1;
                    }
                    else {
                        this.data_list[i]["CHEQUENO"] = "Not Available";
                    }
                }
                else {
                    this.data_list[i]["CHEQUENO"] = "";
                }
            }
        }
        else
            for (var i = 0; i < this.data_list.length; i++) {
                if (this.data_list[i].Checked === true) {
                    this.data_list[i]["CHEQUENO"] = "Not Available";
                }
                else {
                    this.data_list[i]["CHEQUENO"] = "";
                }
            }
    };
    RePrintChequeAssignChequeNoComponent.prototype.AssignChqNoToList = function (dtbl) {
        if (dtbl[0].STATUS == "1") {
            //var StartCheque=this.SChequeNo;
            this.AvailableCount = dtbl[0].STATUS;
            this.AssignCount = 1;
            for (var i = 0, len = this.newArray.length; i < len; i++) {
                if (this.newArray[i].checked == true) {
                    if (this.AvailableCount >= this.AssignCount) {
                        //this.celltxt = this.SChequeNo
                        this.StartCheque = this.StartCheque + 1;
                        this.AssignCount = this.AssignCount + 1;
                    }
                    else {
                        this.celltxt = "Not Available";
                    }
                }
                else {
                    this.celltxt = "";
                }
            }
        }
        else {
            for (var i = 0, len = this.newArray.length; i < len; i++) {
                if (this.newArray[i].checked == true) {
                    this.celltxt = "Not Available";
                }
                else {
                    this.celltxt = "";
                }
            }
        }
        ////this.newArray = []
    };
    RePrintChequeAssignChequeNoComponent.prototype.AssignToPrint = function () {
        var _this = this;
        this.CheckStatus();
        //var str = '';
        var j = 0;
        for (var i = 0, len = this.newArray.length; i < len; i++) {
            this.str += this.newArray[i].entryno + ' ,';
            this.hdnstatus = "I";
            j = j + 1;
        }
        if (this.ChkStatus == "Y") {
            var jsonprint = {
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
                CHEQUENO: this.SChequeNo,
                COUNT: this.PrintCount,
                OURBNK: this.OurBank.split("|")[0],
                ENTRYNO: this.str,
                PSTATUS: this.hdnstatus
            };
            this._dataService.getData("Accounts/ACC_CMP_BP_CHEQUENO_ASSIGNTOPRINT_LIST", jsonprint)
                .subscribe(function (data) {
                if (data.Table[0].STATUS1 == "1") {
                    _this.MSG = "*All Cheques Available";
                    _this.RedirectToPrint(_this.str);
                }
                else {
                    if (data.Table[0].STATUS == "0") {
                        _this.MSG = "Cheque/s does not available";
                        _this._toasterService.toast('warning', 'warning', 'Cheque/s does not available!');
                    }
                    else {
                        _this._toasterService.toast('warning', 'warning', '"*" + data.Table[0].STATUS + " Continuous Cheques Available"!');
                    }
                }
            });
        }
    };
    RePrintChequeAssignChequeNoComponent.prototype.RedirectToPrint = function (chkstr) {
        var _this = this;
        var StrValue = "";
        var StrChequeno = "";
        var jsonchkprint = {
            strentryNo: chkstr
        };
        this._dataService.getData("Accounts/ACC_BP_CMP_CHEQUE_READYTO_PRINT_LIST_35", jsonchkprint)
            .subscribe(function (data) {
            if (data.Table.length > 0) {
                var ENTRYNO;
                var STATUS1;
                var chequeno;
                var OurBank1;
                for (var i = 0, len = data.Table.length; i < len; i++) {
                    STATUS1 = data.Table[i].Status;
                    ENTRYNO = data.Table[i].EntryNo;
                    chequeno = data.Table[i].ChequeNo;
                    OurBank1 = _this.OurBank;
                    StrValue = StrValue + (ENTRYNO) + "," + chequeno + "," + (OurBank1) + "," + "P" + "," + "" + ";";
                    StrChequeno = StrChequeno + chequeno + ",";
                }
            }
        });
    };
    RePrintChequeAssignChequeNoComponent.prototype.ViewReqBP = function (enno, name) {
        if (enno == '' || enno == undefined || enno.length < 15) {
            alert("Enter 15 digit EntryNo No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Request-Bank-Payment-print/' + enno + '/', "BPRequest View", toolbar);
        // let theTop = (screen.height / 2) - (483 / 2);
        // let theLeft = (screen.width / 2) - (780 / 2);
        // let toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        // let URL = "http://localhost:1086/manilal_v4_20200303_0859/UI/Accounts/frm_Acc_CompCheq_Request_BP_View.aspx?" +
        // "EntryNo=" + enno
        // + "&EntryDt=" + name
        // window.open(URL, "", toolbar);
        // this.loaderService.display(false);
    };
    RePrintChequeAssignChequeNoComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    RePrintChequeAssignChequeNoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-RePrintCheque-Chequereport-search',
            template: __webpack_require__(/*! raw-loader!./ReprintCheque-Assign-ChequeNo.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], RePrintChequeAssignChequeNoComponent);
    return RePrintChequeAssignChequeNoComponent;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReprintChequeCancelChequeNoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReprintChequeCancelChequeNoComponent", function() { return ReprintChequeCancelChequeNoComponent; });
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







var ReprintChequeCancelChequeNoComponent = /** @class */ (function () {
    function ReprintChequeCancelChequeNoComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _router, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '20px',
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
    ReprintChequeCancelChequeNoComponent.prototype.ngOnInit = function () {
        this.verifyPermission('92', 'View');
    };
    ReprintChequeCancelChequeNoComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    ReprintChequeCancelChequeNoComponent.prototype.GetReqNo = function () {
        var _this = this;
        if ((this.BPNo == '' || this.BPNo == undefined)) {
            alert("Please Enter Bank Payment No");
            return false;
        }
        if ((this.BPNo.length < 15) || (this.BPNo.substring(11, 12) != "2")) {
            alert("Please Enter valid Bank Payment No");
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            ENTRYNO: this.BPNo
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/Acc_BP_CMP_ReqNo_Get", jsonmaster)
            .subscribe(function (data) {
            _this.EntryNo = data.Table[0].ENTRYNO;
            _this.ChequeNo = data.Table[0].CHEQUENO;
            _this.loaderService.display(false);
        });
    };
    ReprintChequeCancelChequeNoComponent.prototype.UpdateChequeNo = function () {
        var _this = this;
        if (this.BPNo == '' || this.BPNo == undefined) {
            alert("Please Enter Bank Payment No");
            return false;
        }
        if ((this.BPNo.length < 15) || (this.BPNo.substring(11, 12) != "2")) {
            alert("Please Enter valid Bank Payment No");
            return false;
        }
        if (this.Remark == '' || this.Remark == undefined) {
            alert("Please Enter Valid reason for Cancel");
            return false;
        }
        if (confirm("Are you sure you want to cancel cheque no. " + this.ChequeNo + ". ?")) {
            this.HdnCancel = "1";
            this.loaderService.display(true);
            var jsonmaster = {
                USERID: this._loginService.getLogin()[0].CMPID,
                CMPCODE: this._loginService.getLogin()[0].CMPCODE,
                citycode: this._loginService.getLogin()[0].CITYCODE,
                ENTRYNO: this.BPNo,
                Remark: this.Remark,
                MakerIP: this._loginService.getLogin()[0].MAKERIP,
            };
            // console.log(jsonmaster)
            this._dataService.getData("Accounts/Acc_BP_CMP_ChequeNo_Cancel", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                }
                else {
                    _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                }
                _this.BPNo = "";
                _this.Remark = "";
                _this.loaderService.display(false);
            });
        }
        else {
            this.HdnCancel = "0";
            return false;
        }
    };
    ReprintChequeCancelChequeNoComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    ReprintChequeCancelChequeNoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-RePrintCheque-Cancel-ChequeNo',
            template: __webpack_require__(/*! raw-loader!./ReprintCheque-Cancel-ChequeNo.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], ReprintChequeCancelChequeNoComponent);
    return ReprintChequeCancelChequeNoComponent;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RePrintChequeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RePrintChequeRoutingModule", function() { return RePrintChequeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ReprintCheque_Cancel_ChequeNo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReprintCheque-Cancel-ChequeNo.component */ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.ts");
/* harmony import */ var _ReprintCheque_Assign_ChequeNo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReprintCheque-Assign-ChequeNo.component */ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.ts");
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
            title: 'Cancel-Cheque'
        },
        children: [
            { path: 'Cancel', component: _ReprintCheque_Cancel_ChequeNo_component__WEBPACK_IMPORTED_MODULE_2__["ReprintChequeCancelChequeNoComponent"], data: { title: 'Cancel' } },
            { path: 'Reprint', component: _ReprintCheque_Assign_ChequeNo_component__WEBPACK_IMPORTED_MODULE_3__["RePrintChequeAssignChequeNoComponent"], data: { title: 'Reprint' } },
        ]
    }
];
var RePrintChequeRoutingModule = /** @class */ (function () {
    function RePrintChequeRoutingModule() {
    }
    RePrintChequeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RePrintChequeRoutingModule);
    return RePrintChequeRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque.module.ts ***!
  \***************************************************************************/
/*! exports provided: RePrintChequeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RePrintChequeModule", function() { return RePrintChequeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ReprintCheque_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReprintCheque-routing.module */ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ReprintCheque_Cancel_ChequeNo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReprintCheque-Cancel-ChequeNo.component */ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Cancel-ChequeNo.component.ts");
/* harmony import */ var _ReprintCheque_Assign_ChequeNo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReprintCheque-Assign-ChequeNo.component */ "./src/app/accounts/CompCheque/RePrintCheque/ReprintCheque-Assign-ChequeNo.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RePrintChequeModule = /** @class */ (function () {
    function RePrintChequeModule() {
    }
    RePrintChequeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ReprintCheque_Cancel_ChequeNo_component__WEBPACK_IMPORTED_MODULE_8__["ReprintChequeCancelChequeNoComponent"], _ReprintCheque_Assign_ChequeNo_component__WEBPACK_IMPORTED_MODULE_9__["RePrintChequeAssignChequeNoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ReprintCheque_routing_module__WEBPACK_IMPORTED_MODULE_2__["RePrintChequeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_5__["MyDatePickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], RePrintChequeModule);
    return RePrintChequeModule;
}());



/***/ })

}]);
//# sourceMappingURL=RePrintCheque-ReprintCheque-module.js.map