(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./src/app/accounts/CompCheque/Cheque/chqstock-filter.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/CompCheque/Cheque/chqstock-filter.pipe.ts ***!
  \********************************************************************/
/*! exports provided: ChqstockFilterPipe, ReqBPFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChqstockFilterPipe", function() { return ChqstockFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqBPFilterPipe", function() { return ReqBPFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChqstockFilterPipe = /** @class */ (function () {
    function ChqstockFilterPipe() {
    }
    ChqstockFilterPipe.prototype.transform = function (value, searchString) {
        console.log(searchString);
        if (!searchString) {
            return value;
        }
        return value.filter(function (it) {
            var ChequeNo = it.ChequeNo.toString().includes(searchString.toLowerCase());
            var BP_Num = it.BP_Num.toString().includes(searchString);
            var bank_code = it.bank_code.toLowerCase().includes(searchString.toLowerCase());
            var BP_EntryNo = it.BP_EntryNo.toString().includes(searchString.toLowerCase());
            var Status = it.Status.toLowerCase().includes(searchString.toLowerCase());
            var PrintedBY = it.PrintedBY.toLowerCase().includes(searchString.toLowerCase());
            var PrintedOn = it.PrintedOn.toLowerCase().includes(searchString.toLowerCase());
            var Reason = it.Reason.toLowerCase().includes(searchString.toLowerCase());
            return (ChequeNo + BP_Num + bank_code + BP_EntryNo + Status + PrintedBY + PrintedOn + Reason);
        });
    };
    ChqstockFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'chqstockFilter'
        })
    ], ChqstockFilterPipe);
    return ChqstockFilterPipe;
}());

var ReqBPFilterPipe = /** @class */ (function () {
    function ReqBPFilterPipe() {
    }
    ReqBPFilterPipe.prototype.transform = function (value, searchString) {
        console.log(searchString);
        if (!searchString) {
            return value;
        }
        return value.filter(function (it) {
            var ENTRYNO = it.ENTRYNO.toString().includes(searchString.toLowerCase());
            var CREATEDBY = it.CREATEDBY.toLowerCase().includes(searchString.toLowerCase());
            var ENTRYDT = it.ENTRYDT.toLowerCase().includes(searchString.toLowerCase());
            var CHEQUEDT = it.CHEQUEDT.toLowerCase().includes(searchString.toLowerCase());
            var PAYEENAME = it.PAYEENAME.toLowerCase().includes(searchString.toLowerCase());
            var AMOUNT = it.AMOUNT.toString().includes(searchString.toLowerCase());
            var TYPE = it.TYPE.toLowerCase().includes(searchString.toLowerCase());
            return (ENTRYNO + CREATEDBY + ENTRYDT + CHEQUEDT + PAYEENAME + AMOUNT + TYPE);
        });
    };
    ReqBPFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ReqBPFilter'
        })
    ], ReqBPFilterPipe);
    return ReqBPFilterPipe;
}());



/***/ }),

/***/ "./src/app/export/export-share-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/export/export-share-data.service.ts ***!
  \*****************************************************/
/*! exports provided: SharedDataSerice, VesselSharedDataSerice, FcrSharedDataService, VesselSearchSharedDataService, ContainerIUSharedDataService, cartingVslAgnt, mblsharedservice, prealertshareservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataSerice", function() { return SharedDataSerice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VesselSharedDataSerice", function() { return VesselSharedDataSerice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcrSharedDataService", function() { return FcrSharedDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VesselSearchSharedDataService", function() { return VesselSearchSharedDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerIUSharedDataService", function() { return ContainerIUSharedDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartingVslAgnt", function() { return cartingVslAgnt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mblsharedservice", function() { return mblsharedservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prealertshareservice", function() { return prealertshareservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Components can import this service and access shared data
var SharedDataSerice = /** @class */ (function () {
    function SharedDataSerice() {
    }
    SharedDataSerice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SharedDataSerice);
    return SharedDataSerice;
}());

var VesselSharedDataSerice = /** @class */ (function () {
    function VesselSharedDataSerice() {
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VesselSharedDataSerice.prototype.changeData = function (newData) {
        this.sharedData = newData;
        this.valueChanged.emit(this.sharedData);
    };
    return VesselSharedDataSerice;
}());

var FcrSharedDataService = /** @class */ (function () {
    function FcrSharedDataService() {
    }
    return FcrSharedDataService;
}());

var VesselSearchSharedDataService = /** @class */ (function () {
    function VesselSearchSharedDataService() {
    }
    return VesselSearchSharedDataService;
}());

var ContainerIUSharedDataService = /** @class */ (function () {
    function ContainerIUSharedDataService() {
    }
    return ContainerIUSharedDataService;
}());

var cartingVslAgnt = /** @class */ (function () {
    function cartingVslAgnt() {
    }
    return cartingVslAgnt;
}());

var mblsharedservice = /** @class */ (function () {
    function mblsharedservice() {
    }
    return mblsharedservice;
}());

var prealertshareservice = /** @class */ (function () {
    function prealertshareservice() {
    }
    return prealertshareservice;
}());



/***/ }),

/***/ "./src/app/shared/guard/finanacial-year-auth-guard.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/guard/finanacial-year-auth-guard.service.ts ***!
  \********************************************************************/
/*! exports provided: FinancialYearAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialYearAuthGuard", function() { return FinancialYearAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/toastService */ "./src/app/shared/service/toastService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinancialYearAuthGuard = /** @class */ (function () {
    function FinancialYearAuthGuard(_loginService, _myRoute, _toasterService) {
        this._loginService = _loginService;
        this._myRoute = _myRoute;
        this._toasterService = _toasterService;
    }
    // canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     let checkFinancialYear = this._loginService.getLogin()[0]["FINANCIAL_YEAR"];
    //     if (checkFinancialYear) {
    //         return true;
    //     }
    //     this._toasterService.toast('warning', 'Alert', 'Choose Financial Year First.');
    //     this._myRoute.navigate(['accounts']);
    //     return false;
    // }
    FinancialYearAuthGuard.prototype.canActivate = function (next, state) {
        var checkFinancialYear = this._loginService.getLogin()[0]["FINANCIAL_YEAR"];
        console.log("triggered canactivate===>");
        if (checkFinancialYear) {
            return true;
        }
        this._toasterService.toast('warning', 'Alert', 'Choose Financial Year First.');
        this._myRoute.navigate(['accounts']);
        return false;
    };
    FinancialYearAuthGuard.prototype.canDeactivate = function () {
        console.log("triggered canDeactivate ===>");
        if (this._loginService.getLogin() == null) {
            return true;
        }
        else {
            this._loginService.setFinancialYearModify(null);
            return true;
        }
    };
    FinancialYearAuthGuard.ctorParameters = function () { return [
        { type: _service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] }
    ]; };
    FinancialYearAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"]])
    ], FinancialYearAuthGuard);
    return FinancialYearAuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/service/jobprofitservice.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/service/jobprofitservice.service.ts ***!
  \************************************************************/
/*! exports provided: JobprofitserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobprofitserviceService", function() { return JobprofitserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobprofitserviceService = /** @class */ (function () {
    function JobprofitserviceService() {
        this.no1 = 1;
        this.no2 = 3;
    }
    JobprofitserviceService.prototype.exportExceltry = function (excelData, downloadname) {
        var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet('Sales Data');
        var data1 = excelData.data1;
        var data2 = excelData.data2;
        var header2 = excelData.headers2;
        var header1 = excelData.headers1;
        //  console.log(header1);
        // fill the data in table
        if (excelData.pagetype == "acctwise") {
            data1.forEach(function (d) {
                var row = worksheet.addRow(d);
                row.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: 'FFFFFFFF'
                    }
                };
                row.font = {
                    name: 'Times New Roman',
                    size: 10,
                    color: {
                        argb: '00000000',
                    },
                };
            });
        }
        if (excelData.pagetype == "date_multijob") {
            worksheet.addRow([]);
            var detailrow = worksheet.getCell('A1');
            detailrow.value = excelData.detail;
            for (var i = 0; i < header1.length; i++) {
                if (i == 0) {
                    // worksheet.mergeCells(2,1,2,3);
                    worksheet.mergeCells(2, this.no1, 2, this.no2);
                    console.log(2, this.no1, 2, this.no2);
                    //  worksheet.mergeCells('A1:C1');
                    worksheet.getRow(2).getCell(this.no1).value = header1[i];
                    worksheet.getRow(2).getCell(this.no1).alignment = { horizontal: 'center' };
                    worksheet.getRow(2).getCell(this.no1).border = {
                        top: {
                            style: 'thin'
                        },
                        left: {
                            style: 'thin'
                        },
                        bottom: {
                            style: 'thin'
                        },
                        right: {
                            style: 'thin'
                        }
                    };
                }
                else {
                    this.no1 = this.no1 + 3;
                    this.no2 = this.no2 + 3;
                    //   console.log(2, this.no1, 1, this.no2);
                    worksheet.mergeCells(2, this.no1, 2, this.no2);
                    worksheet.getRow(2).getCell(this.no1).value = header1[i];
                    worksheet.getRow(2).getCell(this.no1).alignment = { horizontal: 'center' };
                    worksheet.getRow(2).getCell(this.no1).border = {
                        top: {
                            style: 'thin'
                        },
                        left: {
                            style: 'thin'
                        },
                        bottom: {
                            style: 'thin'
                        },
                        right: {
                            style: 'thin'
                        }
                    };
                }
            }
            ;
        }
        //header of table by default take name coming from backend
        if (header2 != "") {
            console.log(header2);
            var headerRow = worksheet.addRow(header2);
            headerRow.eachCell(function (cell, number) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: '000000' },
                    bgColor: { argb: '' }
                };
                cell.font = {
                    name: 'Times New Roman',
                    bold: true,
                    color: { argb: 'FFFFFF' },
                    size: 10
                };
                cell.border = {
                    top: {
                        style: 'thin'
                    },
                    left: {
                        style: 'thin'
                    },
                    bottom: {
                        style: 'thin'
                    },
                    right: {
                        style: 'thin'
                    }
                };
            });
        }
        if (data2 != "") {
            data2.forEach(function (d) {
                var row = worksheet.addRow(d);
                row.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: 'FFFFFFFF'
                    }
                };
                row.font = {
                    name: 'Times New Roman',
                    size: 10,
                    color: {
                        argb: '00000000',
                    },
                },
                    row.eachCell({ includeEmpty: true }, function (cell, number) {
                        cell.border = {
                            top: {
                                style: 'thin'
                            },
                            left: {
                                style: 'thin'
                            },
                            bottom: {
                                style: 'thin'
                            },
                            right: {
                                style: 'thin'
                            }
                        };
                    });
            });
        }
        //autosize width for cell
        worksheet.columns.forEach(function (column, i) {
            var maxLength = 0;
            column["eachCell"]({ includeEmpty: true }, function (cell) {
                var columnLength = cell.value ? cell.value.toString().length : 12;
                if (columnLength > maxLength) {
                    maxLength = columnLength;
                }
            });
            column.width = maxLength < 10 ? 10 : maxLength;
        });
        //download file call
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, downloadname + '.xlsx');
        });
    };
    JobprofitserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JobprofitserviceService);
    return JobprofitserviceService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map