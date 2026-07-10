(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CrtNote-credit-note-module"],{

/***/ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js ***!
  \**************************************************************/
/*! exports provided: FilterPipeModule, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function() { return FilterPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    FilterPipe.isFoundOnWalking = function (value, key) {
        var /** @type {?} */ walker = value;
        var /** @type {?} */ found = false;
        do {
            if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                found = true;
                break;
            }
        } while (walker = Object.getPrototypeOf(walker));
        return found;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FilterPipe.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    /**
     * Checks function's value if type is function otherwise same value
     * @param {?} value
     * @return {?}
     */
    FilterPipe.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) { return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false); };
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByBoolean = function (filter) {
        return function (value) { return Boolean(value) === filter; };
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var /** @type {?} */ key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(FilterPipe.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                if (!value || !FilterPipe.isFoundOnWalking(value, key)) {
                    return false;
                }
                if (!_this.isMatching(filter[key], FilterPipe.getValue(value[key]))) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * @param {?} filter
     * @param {?} val
     * @return {?}
     */
    FilterPipe.prototype.isMatching = function (filter, val) {
        switch (typeof filter) {
            case 'boolean':
                return this.filterByBoolean(filter)(val);
            case 'string':
                return this.filterByString(filter)(val);
            case 'object':
                return this.filterByObject(filter)(val);
        }
        return this.filterDefault(filter)(val);
    };
    /**
     * Filter value by $or
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByOr = function (filter) {
        var _this = this;
        return function (value) {
            var /** @type {?} */ length = filter.length;
            var /** @type {?} */ arrayComparison = function (i) { return value.indexOf(filter[i]) !== -1; };
            var /** @type {?} */ otherComparison = function (i) { return _this.isMatching(filter[i], value); };
            var /** @type {?} */ comparison = Array.isArray(value) ? arrayComparison : otherComparison;
            for (var /** @type {?} */ i = 0; i < length; i++) {
                if (comparison(i)) {
                    return true;
                }
            }
            return false;
        };
    };
    /**
     * Default filterDefault function
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) { return filter === undefined || filter == value; };
    };
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.transform = function (array, filter) {
        if (!array) {
            return array;
        }
        switch (typeof filter) {
            case 'boolean':
                return array.filter(this.filterByBoolean(filter));
            case 'string':
                if (FilterPipe.isNumber(filter)) {
                    return array.filter(this.filterDefault(filter));
                }
                return array.filter(this.filterByString(filter));
            case 'object':
                return array.filter(this.filterByObject(filter));
            case 'function':
                return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    return FilterPipe;
}());
FilterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
FilterPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterPipeModule = /** @class */ (function () {
    function FilterPipeModule() {
    }
    return FilterPipeModule;
}());
FilterPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [FilterPipe],
                providers: [FilterPipe],
                exports: [FilterPipe]
            },] },
];
/** @nocollapse */
FilterPipeModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-filter-pipe.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/CrtNote/credit-note-search.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/transaction/CrtNote/credit-note-search.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"container\">\n        <div class=\"row\" *ngIf=\"Searchdata_list.length==0\">\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-6\">\n                <table class=\"table table-bordered table-sm-new bgwhite\" style=\"font-family:  Verdana;font-size: 12px;\">\n                    <tbody style='height:30px'>\n                        <tr>\n                            <td class=\"col-form-span-heading\" colspan=\"5\">\n                               Credit Note Search\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\" class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" value='CreditNo' [(ngModel)]=\"exampleRadios1\">&nbsp;  CreditNote No\n                            </td>\n                            <td class=\"col-form-span-label width240\" colspan=\"3\">\n                                <div style=\"display:flex;\">\n                                    <input type=\"text\" class=\"form-control width180\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [(ngModel)]=\"crtno\" [disabled]=\"exampleRadios1 != 'CreditNo'\">\n                                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"CreditNotePrint(crtno)\"><span  class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>Print</span></button>\n                                    <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"  (click)=\"CreditView(crtno);\"><i class=\"fa fa-search\"></i>View</span></button>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\">\n                                <table>\n                                    <tr>\n                                        <td class=\"col-form-span-label width100\">\n                                            <input type=\"radio\" name=\"exampleRadios\" value='Client'  [(ngModel)]=\"exampleRadios1\"> Client Name\n                                        </td>\n                                        <td class=\"col-form-span-label width500\" colspan=\"4\">\n                                            <!-- <select class=\"form-control \" [(ngModel)]=\"client\"  [disabled]=\"exampleRadios1 != 'Client'\">\n                                                <option value=\"\">--Please Select Client--</option>\n                                                <option *ngFor=\"let data of clientable\" value={{data.EXP_CODE}}>  {{data.EXP_NAME_CITY}}\n                                                </option>\n                                            </select> -->\n                                            <ng-select [items]=\"clientable\"\n                                            [searchFn]=\"customSearchFn\"\n                                            class=\"custom\"\n                                            bindLabel=\"EXP_NAME_CITY\"\n                                            bindValue=\"EXP_CODE\"\n                                            [(ngModel)]=\"client\" class=\"custom\"\n                                            placeholder=\"--Please Select Client --\"\n                                           [disabled]=\"exampleRadios1 != 'Client'\">\n                                   </ng-select>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td>\n                                            <span class=\"col-form-span-label width150\"><b>Start Date</b> </span>\n                                            <span class=\"col-form-span-error\">*</span>\n                                        </td>\n                                        <td>\n                                            <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\"  [(ngModel)]=\"client_startdate\" [disabled]=\"exampleRadios1 != 'Client'\">\n                                            </my-date-picker>\n                                        </td>\n                                        <td>\n                                            <span class=\"col-form-span-label width150\"><b>End Date</b> </span>\n                                            <span class=\"col-form-span-error\">*</span>\n                                        </td>\n                                        <td>\n                                            <my-date-picker name=\"EndDate\" [options]=\"myDatePickerOptions\"   [(ngModel)]=\"client_enddate\" [disabled]=\"exampleRadios1 != 'Client'\">\n                                            </my-date-picker>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" value='JobNo' [(ngModel)]=\"exampleRadios1\">&nbsp;   Job No\n                            </td>\n                            <td class=\"col-form-span-label width240\" colspan=\"4\">\n                                <input type=\"text\" class=\"form-control width180\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [(ngModel)]=\"jobno\" [disabled]=\"exampleRadios1 != 'JobNo'\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" value='Amount' [(ngModel)]=\"exampleRadios1\">&nbsp;  Amount\n                            </td>\n                            <td class=\"col-form-span-label width240\" colspan=\"4\">\n                                <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"amount\" [disabled]=\"exampleRadios1 != 'Amount'\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"Date\"  [(ngModel)]=\"exampleRadios1\"> Date Wise\n                            </td>\n\n                            <td>\n                                <span class=\"col-form-span-label width150\"><b>Start Date</b> </span>\n                                <span class=\"col-form-span-error\">*</span>\n                            </td>\n                            <td>\n                                <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\"  [(ngModel)]=\"datewise_startdate\" [disabled]=\"exampleRadios1 != 'Date'\">\n                                </my-date-picker>\n                            </td>\n                            <td>\n                                <span class=\"col-form-span-label width150\"><b>End Date</b> </span>\n                                <span class=\"col-form-span-error\">*</span>\n                            </td>\n                            <td>\n                                <my-date-picker name=\"EndDate\" [options]=\"myDatePickerOptions\"  [(ngModel)]=\"datewise_enddate\" [disabled]=\"exampleRadios1 != 'Date'\">\n                                </my-date-picker>\n                            </td>\n\n                        </tr>\n                        <tr>\n                            <td colspan=\"3\" class=\"col-form-span-label width100\">\n                                <input type=\"radio\" name=\"exampleRadios\" value=\"6\"   [(ngModel)]=\"exampleRadios1\"> Print All CreditNote of That Day\n                            </td>\n                            <td colspan=\"2\">\n                                <my-date-picker name=\"StartDate\" [options]=\"myDatePickerOptions\"   [(ngModel)]=\"printallcredit_date\" [disabled]=\"exampleRadios1 != '6'\">\n                                </my-date-picker>\n                            </td>\n\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\" class=\"centerlabel\">\n                                <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"searchlist()\"><span  class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\n                                <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\"  (click)=\"reset();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"col-sm-3\"></div>\n        </div>\n        <div *ngIf=\"Searchdata_list.length >1\" >\n            <button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"Searchdata_list=[]\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button>\n       </div>\n        <main *ngIf=\"Searchdata_list.length >1\">\n            <div id=\"content\">\n                <div class=\"table-wrapper\">\n                    <table class=\"table table-bordered table-sm-new bgwhite\" >\n                        <thead class=\"title-head formheading\">\n                            <tr>\n                                <th *ngIf=\"exampleRadios1=='6'\" class=\"centerlabel\"><input type=\"checkbox\"  [(ngModel)]='checkbox' (change)=\"checkAll($event)\" /> &nbsp; </th>\n                                <th   align=\"center\">CRT. NO.</th>\n                                <th   align=\"center\">CRT. DATE</th>\n                                <th   align=\"center\">BILL TO</th>\n                                <th   align=\"center\">JOB NO.</th>\n                                <th   align=\"center\">BILL TYPE</th>\n\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"Searchdata_list.length > 0\">\n                            <tr *ngFor=\"let data of Searchdata_list\">\n                                <td *ngIf=\"exampleRadios1=='6'\" class=\"centerlabel\"> <input type=\"checkbox\" [(ngModel)]=\"data.Checked\" (ngModelChange)=\"getCheckboxValues($event,data.crt_no)\"> &nbsp; </td>\n                                <td><span  class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(data.crt_no)\">{{data.crt_no}}</span> </td>\n                                <td><span  class=\"col-form-span-label\">{{data.crt_date}}</span>  </td>\n                                <td><span  class=\"col-form-span-label\">{{data.exp_name}}</span>  </td>\n                                <td><span  class=\"col-form-span-label\">{{data.crt_jobno}}</span> </td>\n                                <td><span  class=\"col-form-span-label\">{{data.crt_billtype}}</span> </td>\n\n\n                            </tr>\n                        </tbody>\n                        <tr>\n                            <td *ngIf=\"exampleRadios1=='6'\" colspan=\"8\" class=\"right-text pr-2\">\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"PrintCreditNote()\"> <span  class=\"col-form-span-label\"><i class=\"fa fa-print\"></i>&nbsp;Print</span></button>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </main>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/CrtNote/credit-note.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/transaction/CrtNote/credit-note.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td><span class=\"col-form-span-label\"><b>CreditNote No.</b> </span><span\r\n                            class=\"col-form-span-error\">*</span></td>\r\n                    <td> <input type=\"text\" class=\"form-control width180\" [disabled]=true [(ngModel)]=\"crt_no\"> </td>\r\n                    <td><span class=\"col-form-span-label\"><b>CreditNote dt.</b> </span></td>\r\n                    <td  style=\"text-align: left;\">    <my-date-picker name=\"crtdate\" [options]=\"myDatePickerOptionsInv\"\r\n                            (dateChanged)=\"CreditnoteDateChanged($event)\" [selDate]=\"crtdate\"></my-date-picker>\r\n                </tr>\r\n                <tr>\r\n                    <td>  <span class=\"col-form-span-label \"><b>Mode</b></span> </td>\r\n                    <td>\r\n                        <select class=\"form-control width180\" [(ngModel)]=\"mode\" [disabled]=\"modecondition\">\r\n                            <option value=\"\">--Please select--</option>\r\n                            <option *ngFor=\"let d of table5_mode\" value={{d.DTATVALUE}}>{{d.DTATTEXT}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td colspan=\"2\"></td>\r\n                </tr>\r\n\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n        <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n            <div class=\"tab\" role=\"tabpanel\">\r\n                <div class=\"bor\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" id=\"zero-tab\" data-toggle=\"tab\" href=\"#zero\">JobDetail</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link \" id=\"one-tab\" data-toggle=\"tab\" data-target=\"#one\">General</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"two-tab\" data-toggle=\"tab\" data-target=\"#two\">Charges</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"three-tab\" data-toggle=\"tab\" data-target=\"#three\">Invoice</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"tab-content\" style=\"height:400px;overflow-y:auto\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"zero\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td >\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <tr>\r\n                                                        <td>\r\n                                                            <span class=\"col-form-span-label\"><b>Job No.</b> </span>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <input type=\"text\" class=\"form-control width180\" maxlength=\"15\" minlength=\"15\" [OnlyNumber]=\"true\"   [(ngModel)]=\"jobno\" [disabled]=\"jobno_disable\">\r\n\r\n                                                        </td>\r\n                                                        <td colspan=\"2\"></td>\r\n                                                    </tr>\r\n                                                        <tr *ngIf=\"show_pkg_piece\">\r\n                                                            <td><span class=\"col-form-span-label\"><b>Packages</b> </span><span   class=\"col-form-span-error\">*</span></td>\r\n                                                            <td> <input type=\"text\" class=\"form-control width180\" OnlyNumber=\"true\" [(ngModel)]=\"packages\"> </td>\r\n                                                            <td><span class=\"col-form-span-label\"><b>Prop.Wt.</b> </span></td>\r\n                                                            <div style=\"display: flex;\">\r\n                                                                <input type=\"text\" class=\"form-control width180\" OnlyNumber=\"true\" [(ngModel)]=\"propweight\">\r\n                                                            </div>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td colspan=\"4\" align=\"center\">\r\n                                                                <div style=\"margin: 0 auto;margin-top:3px;\">\r\n                                                                    <span *ngIf=\"addjob\">\r\n                                                                        <button class=\"btn btn-sm btn-success\"   type=\"submit\" (click)=\"populatejob()\"> <span class=\"col-form-span-label\"><i  class=\"fa fa-plus\"></i>   Add</span></button>\r\n                                                                    </span>\r\n                                                                    <span *ngIf=\"jobupdate\">\r\n                                                                        <button class=\"btn btn-sm btn-success\"   type=\"submit\" (click)=\"updatejob()\"> <span  class=\"col-form-span-label\"><i  class=\"fa fa-plus\"></i> Update</span></button>\r\n                                                                    </span>\r\n\r\n                                                                    <button class=\"btn btn-sm btn-danger\" type=\"submit\"  (click)=\"resetjob()\"> <span  class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                                                </div>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td colspan=\"4\">\r\n                                                                <div class=\"row\">\r\n                                                                    <div class=\"col\">\r\n                                                        <table class=\"table table-responsive-sm table-bordered\">\r\n\r\n                                                        <thead>\r\n                                                            <tr class=\"col-form-span-heading\">\r\n                                                                <th class=\"width20 centerlabel\"></th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Job   No</span> </th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Packages</span></th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">Prop.Wt</span></th>\r\n                                                                <th class=\"width100 centerlabel\"><span class=\"col-form-span-label\">INV Number</span> </th>\r\n                                                                <th class=\"width100 centerlabel\"><span  class=\"col-form-span-label\">ADV. AMOUNT</span>\r\n                                                                </th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr *ngFor=\"let obj of jobdatalist\">\r\n                                                                <td align=\"center\">\r\n                                                                    <i class=\"fa fa-pencil\" (click)=\"Editjob(obj)\"></i>\r\n                                                                    &nbsp;\r\n                                                                    <i class=\"fa fa-trash\" (click)=\"deletejob(obj)\"></i>\r\n                                                                </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{obj.CRT_JOBNO}}</span> </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{obj.CRT_PKGS}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{obj.CRT_GRWT}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\"   [innerHtml]=\"obj.INV_STR\" (click)=\"viewjob($event)\" ></span></td>\r\n                                                                <td><span class=\"col-form-span-label\">{{obj.ADV_AMOUNT}}</span> </td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                        </table>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div role=\"tabpanel\" class=\"tab-pane \" id=\"one\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Client</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table_client\" bindLabel=\"EXP_NAME_CITY\"\r\n                                                bindValue=\"EXP_CODE\" (ngModelChange)=\"fillAddress($event)\"\r\n                                                [(ngModel)]=\"client\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Bill To Address</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"updated_billaddress\" bindLabel=\"DATATEXTFIELD\"\r\n                                                bindValue=\"DATAVALUEFIELD\" [(ngModel)]=\"billaddress\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Document Through</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table2_document\" bindLabel=\"EXP_NAME_CITY\"\r\n                                                bindValue=\"EXP_CODE\" [(ngModel)]=\"document\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Bill Type</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"billtype\">\r\n                                                <option value=\"\">--Please select--</option>\r\n                                                <option *ngFor=\"let d of table4_billtype\" value={{d.DTATVALUE}}>\r\n                                                    {{d.DTATTEXT}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>CreditNote Currency</b><span\r\n                                                    class=\"col-form-span-error\">*</span></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"currency\"\r\n                                                (ngModelChange)=\"GetCurrencyName($event)\">\r\n                                                <option value=\"\">Please select</option>\r\n                                                <option *ngFor=\"let d of table3_curreny\" value={{d.cur_code}}>\r\n                                                    {{d.curname}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>INR Rupees</b></span>\r\n                                        </td>\r\n                                        <td> <input class=\"form-control width120\" OnlyNumber=\"true\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"crt_currate\">\r\n                                        </td>\r\n                                        <td align=\"center\">\r\n                                            <span class=\"col-form-span-label\"><b>{{currencyname}}=</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width120\" OnlyNumber=\"true\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"crt_currate1\">\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Pkgs</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div style=\"display: flex; \">\r\n\r\n                                                <input type=\"text\" class=\"form-control width80 \" OnlyNumber=\"true\"\r\n                                                    [(ngModel)]=\"no_pkgs\">\r\n                                                <select class=\"form-control width120\" [(ngModel)]=\"pkgs\">\r\n                                                    <option value=\"\">--Please select--</option>\r\n                                                    <option *ngFor=\"let d of table6_pkgs\" value={{d.UNIT_CODE}}>\r\n                                                        {{d.UNIT_NAME}}</option>\r\n                                                </select>\r\n\r\n                                            </div>\r\n                                        </td>\r\n\r\n\r\n                                        <td> <span class=\"col-form-span-label \"><b>Volume</b></span></td>\r\n                                        <td> <input class=\"form-control width180\" OnlyNumber=\"true\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"volume\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Pieces</b></span>\r\n                                        </td>\r\n                                        <td>\r\n\r\n                                            <div style=\"display: flex;\">\r\n                                                <input type=\"text\" class=\"form-control  width80\" OnlyNumber=\"true\"\r\n                                                    [(ngModel)]=\"no_pieces\">\r\n                                                <select class=\"form-control width120\" [(ngModel)]=\"pieces\">\r\n                                                    <option value=\"\">--Please select--</option>\r\n                                                    <option *ngFor=\"let d of table7_pieces\" value={{d.UNIT_CODE}}>\r\n                                                        {{d.UNIT_NAME}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Weight in Kilo</b></span></td>\r\n                                        <td> <input class=\"form-control width180\" OnlyNumber=\"true\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"weight\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Client Reference</b></span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control width180\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"client_ref\">\r\n                                        </td>\r\n                                        <td colspan=\"2\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span class=\"col-form-span-label \"><b>Carrier</b></span>\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <input class=\"form-control width500\" maxlength=\"20\" [(ngModel)]=\"carrier\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Goods :</b></span> </td>\r\n                                        <td colspan=\"3\"> <input class=\"form-control width500\" maxlength=\"20\"\r\n                                                [(ngModel)]=\"goods\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>House (A.W.B./B/L) :</b></span>\r\n                                        </td>\r\n                                        <td> <input class=\"form-control width180\" maxlength=\"20\" [(ngModel)]=\"master\">\r\n                                        </td>\r\n                                        <td> <span class=\"col-form-span-label \"><b>House (A.W.B./B/L) Date :</b></span>\r\n                                        </td>\r\n                                        <td  style=\"text-align: left;\">\r\n                                            <my-date-picker name=\"masterdate\" [options]=\"myDatePickerOptions\"\r\n                                                (dateChanged)=\"MasterDateChanged($event)\" [selDate]=\"masterdate\">\r\n                                            </my-date-picker>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Narration</b></span> </td>\r\n                                        <td colspan=\"3\">\r\n                                            <textarea class=\"form-control\" id=\"autoresizing\" (input)=\"Narrationarea()\"\r\n                                                type=\"textarea\" cols=\"50\" rows=\"3\" [(ngModel)]=\"narration\"></textarea>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"two\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Charges Code </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table8_charge\" bindLabel=\"CHARGE_DESC\"\r\n                                                (ngModelChange)=\"GetChargeDesc($event)\" bindValue=\"CHARGE_CODE\"\r\n                                                [(ngModel)]=\"charge\" class=\"custom\" placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Account Name\r\n                                        </td>\r\n                                        <td colspan=\"3\">\r\n                                            <ng-select [items]=\"table9_account\" bindLabel=\"ACCTNAME\"\r\n                                                bindValue=\"ACCTCODE\" [(ngModel)]=\"account\" class=\"custom\"\r\n                                                placeholder=\"--Please Select--\">\r\n                                            </ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Description </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control \" [(ngModel)]=\"desc1\">\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Description1\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control \" [(ngModel)]=\"desc2\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <table class=\"table table-bordered table-sm-new\">\r\n                                                <tr>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Tax </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Qty </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Rate/Qty </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amt In Cur </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Cur Type </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Ex. Rate </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amt(INR) </td>\r\n                                                    <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amt Taxable(INR)</td>\r\n\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <select class=\"form-control width80\" [(ngModel)]=\"tax\">\r\n                                                            <option value=\"\">Please select</option>\r\n                                                            <option value=\"N\">N</option>\r\n                                                            <option value=\"G\">G</option>\r\n                                                        </select>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width60\" [(ngModel)]=\"qty\" [OnlyNumber]=\"true\">\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width60\" [(ngModel)]=\"rateperqty\" [OnlyNumber]=\"true\">\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width60\" value={{Curamount}}\r\n                                                            [disabled]=true>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <select class=\"form-control width80\" [(ngModel)]=\"currencytype\"  (ngModelChange)=\"getexchangerate($event)\">\r\n                                                            <option value=\"\">Please select</option>\r\n                                                            <option *ngFor=\"let d of table13_currencytype\" value={{d.DATAVALUE}}>\r\n                                                                {{d.DATATEXTVALUE}}</option>\r\n\r\n                                                        </select>\r\n                                                    </td>\r\n                                                    <td style=\" display: flex;\">\r\n                                                        <input type=\"text\" class=\"form-control width80\" [(ngModel)]=\"excrate\" (ngModelChange)=\"Calcamount()\" [disabled]='disableexrate' [OnlyNumber]=\"true\"  >\r\n                                                        <span class=\"col-form-span-label\" style=\"font-weight: bold;\"> = INR</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"text\" class=\"form-control width100\" value={{amount}}\r\n                                                            [disabled]=true>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span *ngIf=\"tax==='G'; else elseBlock1\">\r\n                                                            <input type=\"text\" class=\"form-control width120\"\r\n                                                                [(ngModel)]=\"taxamount_G\" [disabled]=true>\r\n                                                        </span>\r\n                                                        <ng-template #elseBlock1>\r\n                                                            <input type=\"text\" class=\"form-control width120\"\r\n                                                                [(ngModel)]=\"taxamount_N\" [disabled]=true>\r\n                                                        </ng-template>\r\n                                                    </td>\r\n\r\n                                                </tr>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Tax </td>\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"tax\">\r\n                                                <option value=\"\">Please select</option>\r\n                                                <option value=\"N\">N</option>\r\n                                                <option value=\"G\">G</option>\r\n                                            </select> </td>\r\n                                        <td colspan=\"2\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Qty </td>\r\n\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"qty\">\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Rate/Qty\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"rateperqty\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Currency Type </td>\r\n\r\n                                        <td>\r\n                                            <select class=\"form-control width180\" [(ngModel)]=\"currencytype\">\r\n                                                <option value=\"\">Please select</option>\r\n                                                <option *ngFor=\"let d of table13_currencytype\" value={{d.DATAVALUE}}>\r\n                                                    {{d.DATATEXTVALUE}}</option>\r\n\r\n                                            </select>\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Exchange Rate\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" [(ngModel)]=\"excrate\">\r\n                                        </td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amount\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" class=\"form-control width180\" value={{amount}}\r\n                                                [disabled]=true>\r\n                                        </td>\r\n                                        <td class=\"col-form-span-label\" style=\"font-weight: bold;\">Amount Taxable\r\n                                        </td>\r\n                                        <td>\r\n                                            <span *ngIf=\"tax==='G'; else elseBlock1\">\r\n                                                <input type=\"text\" class=\"form-control width180\"\r\n                                                    [(ngModel)]=\"taxamount_G\" [disabled]=true>\r\n                                            </span>\r\n                                            <ng-template #elseBlock1>\r\n                                                <input type=\"text\" class=\"form-control width180\"\r\n                                                    [(ngModel)]=\"taxamount_N\" [disabled]=true>\r\n                                            </ng-template>\r\n                                        </td>\r\n                                    </tr> -->\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"addcharges()\">\r\n                                                <span class=\"col-form-span-label\"><i\r\n                                                        class=\"fa fa-dot-circle-o\"></i>{{chargetext}}</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span\r\n                                                    class=\"col-form-span-label\" (click)=\"resetcharges();\"><i\r\n                                                        class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr class=\"col-form-span-heading\">\r\n                                                                <th  ></th>\r\n                                                                <th  align=\"center\"><span  class=\"col-form-span-label\">Charges code</span></th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Account Name</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Description</span>  </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\"> Tax</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Qty</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Rate</span> </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\"> Currency</span> </th>\r\n                                                                <th   align=\"center\"> <span  class=\"col-form-span-label\">Ex.Rate</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Amount</span> </th>\r\n                                                                <th   align=\"center\"><span  class=\"col-form-span-label\">Taxable Amount </span> </th>\r\n\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngIf=\"chargetable.length > 0\">\r\n                                                            <tr *ngFor=\"let data of chargetable\">\r\n                                                                <td>\r\n                                                                    <i class=\"fa fa-pencil\"\r\n                                                                        (click)=\"editcharge(data)\"></i>\r\n                                                                    &nbsp;\r\n                                                                    <i class=\"fa fa-trash\"\r\n                                                                        (click)=\"deletecharge(data)\"></i>\r\n                                                                </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CRT_CHRGCODE}}</span> </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.ACCOUNT_NAME}}</span>  </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.CRT_DES_TEXT}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CRT_TAXABLE}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CRT_QTY}}</span>  </td>\r\n                                                                <td><span   class=\"col-form-span-label\">{{data.CRT_RATE}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CURRENCY_NAME}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CRT_EXRATE}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CRT_AMOUNT}}</span>  </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.TAXABLEAMT}}</span>  </td>\r\n\r\n                                                            </tr>\r\n\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"three\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                    <tr>\r\n                                        <td>  <span class=\"col-form-span-label \"><b>Invoice No </b><span     class=\"col-form-span-error\">*</span></span>  </td>\r\n                                        <td>   <input class=\"form-control width180\" maxlength=\"20\" OnlyNumber=\"true\" (change)=\"GetInvoicebalAmt()\" [(ngModel)]=\"despach_invoiceno\">  </td>\r\n                                        <td> <span class=\"col-form-span-label \"><b>Amount</b><span class=\"col-form-span-error\">*</span></span>  </td>\r\n                                        <td>  <input class=\"form-control width180\" OnlyNumber=\"true\" maxlength=\"20\"  [(ngModel)]=\"despach_amount\"> </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"Checked\"><span  class=\"col-form-span-label \"><b>Adjust Against   Opening Balance</b>  </span> </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\" align=\"center\">\r\n                                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"despachadd()\">  <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i>{{despatchtext}}</span></button>\r\n                                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span  class=\"col-form-span-label\" (click)=\"despachreset();\"><i  class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <table class=\"table table-responsive-sm table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr class=\"col-form-span-heading\">\r\n                                                                <th></th>\r\n                                                                <th align=\"center\"><span  class=\"col-form-span-label\">Invoice No </span></th>\r\n                                                                <th align=\"center\"> <span  class=\"col-form-span-label\">Amount</span>  </th>\r\n                                                                <th align=\"center\">  <span  class=\"col-form-span-label\">Adjust</span>   </th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngIf=\"despach_table.length >0\">\r\n                                                            <tr *ngFor=\"let data of despach_table\">\r\n                                                                <td> <i class=\"fa fa-pencil\"\r\n                                                                        (click)=\"despachedit(data)\"></i>\r\n                                                                    &nbsp;\r\n                                                                    <i class=\"fa fa-trash\"\r\n                                                                        (click)=\"despachdelete(data)\"></i>\r\n                                                                </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.CRT_INVNO}}</span> </td>\r\n                                                                <td><span  class=\"col-form-span-label\">{{data.CRT_AMOUNT}}</span>  </td>\r\n                                                                <td><span class=\"col-form-span-label\">{{data.CRT_ADJUST}}</span>    </td>\r\n\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div align=\"center\" class=\"border p-1\">\r\n                    <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"MainCreditNote_submit()\"> <span\r\n                            class=\"col-form-span-label\"><i\r\n                                class=\"fa fa-dot-circle-o\"></i>{{Mainaddtext}}</span></button>\r\n                    <button class=\"btn btn-sm btn-danger\" type=\"submit\" (click)=\"MainReset()\"> <span\r\n                            class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i>Reset</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-1 col-lg-1\"> </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/transaction/CrtNote/credit-note-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/accounts/transaction/CrtNote/credit-note-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CreditNoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteRoutingModule", function() { return CreditNoteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _credit_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-note.component */ "./src/app/accounts/transaction/CrtNote/credit-note.component.ts");
/* harmony import */ var _credit_note_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-note-search.component */ "./src/app/accounts/transaction/CrtNote/credit-note-search.component.ts");
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
            title: 'Credit-Note'
        },
        children: [
            { path: 'general/:crtno', component: _credit_note_component__WEBPACK_IMPORTED_MODULE_2__["CreditNoteComponent"], data: { title: 'Home' } },
            { path: 'creditnotesearch', component: _credit_note_search_component__WEBPACK_IMPORTED_MODULE_3__["CreditNoteSearchComponent"], data: { title: 'Search' }, pathMatch: 'ful' },
        ]
    }
];
var CreditNoteRoutingModule = /** @class */ (function () {
    function CreditNoteRoutingModule() {
    }
    CreditNoteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CreditNoteRoutingModule);
    return CreditNoteRoutingModule;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/CrtNote/credit-note-search.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/accounts/transaction/CrtNote/credit-note-search.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreditNoteSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteSearchComponent", function() { return CreditNoteSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreditNoteSearchComponent = /** @class */ (function () {
    function CreditNoteSearchComponent(_dataService, _toasterService, loaderService, http, _activatedRoute, _router, _loginService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._loginService = _loginService;
        this.clientable = [];
        this.exampleRadios1 = 'CreditNo';
        this.client = "";
        this.crtno = "";
        this.jobno = "";
        this.amount = "";
        this.printarray = [];
        this.Searchdata_list = [];
        this.myDatePickerOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline: false,
            height: '20px',
            width: '135px',
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
    CreditNoteSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this._loginService.getLogin())
        this.verifyPermission('424', 'Add');
        var jsonmaster = {
            cmpid: this._loginService.getLogin()[0].CMPID,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            citycode1: this._loginService.getLogin()[0].CITYCODE1
        };
        this._dataService.getData("Accounts/ACC_INVOICE_Search_Pageloag", jsonmaster)
            .subscribe(function (data) {
            //  console.log(data)
            _this.clientable = data.Table;
        });
    };
    CreditNoteSearchComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    CreditNoteSearchComponent.prototype.customSearchFn = function (term, item) {
        return item.EXP_NAME_CITY.toLowerCase().startsWith(term.toLowerCase());
    };
    CreditNoteSearchComponent.prototype.searchlist = function () {
        var _this = this;
        if (this.exampleRadios1 == "CreditNo") {
            if (this.crtno == "") {
                this._toasterService.toast('warning', 'warning', "Please enter Credit No to search !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "Client") {
            if (this.client == "" || this.client == null) {
                this._toasterService.toast('warning', 'warning', "Please select client !");
                return false;
            }
            else if (this.client != "" &&
                (this.client_startdate == "" || this.client_startdate == undefined) &&
                (this.client_enddate == "" || this.client_enddate == undefined)) {
                this._toasterService.toast('warning', 'warning', "Please select startdate and enddate  !");
                return false;
            }
            if ((this.client_startdate != "" || this.client_startdate == undefined)
                && this.client_enddate != "" || this.client_enddate == undefined) {
                var intdtfrm1 = void 0, intdtTo1 = void 0;
                intdtfrm1 = this._dataService.datechnge(this.client_startdate.formatted);
                intdtTo1 = this._dataService.datechnge(this.client_enddate.formatted);
                if (this._dataService.date2Comparison(intdtfrm1, intdtTo1) == false) {
                    this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                    return false;
                }
            }
        }
        else if (this.exampleRadios1 == "JobNo") {
            if (this.jobno == "") {
                this._toasterService.toast('warning', 'warning', "Please input job no. !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "Amount") {
            if (this.amount == "") {
                this._toasterService.toast('warning', 'warning', "Please input amount !");
                return false;
            }
        }
        else if (this.exampleRadios1 == "Date") {
            if (this.datewise_startdate == "" || this.datewise_startdate == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select start Date !");
                return false;
            }
            if (this.datewise_enddate == "" || this.datewise_enddate == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select to Date !");
                return false;
            }
            if (this.datewise_startdate != "" && this.datewise_enddate != "") {
                var intdtfrm = void 0, intdtTo = void 0;
                intdtfrm = this._dataService.datechnge(this.datewise_startdate.formatted);
                intdtTo = this._dataService.datechnge(this.datewise_enddate.formatted);
                if (this._dataService.date2Comparison(intdtfrm, intdtTo) == false) {
                    this._toasterService.toast('warning', 'warning', 'To date should be greater than from date !');
                    return false;
                }
            }
        }
        else if (this.exampleRadios1 == "6") {
            if (this.printallcredit_date == "" || this.printallcredit_date == undefined) {
                this._toasterService.toast('warning', 'warning', "Please select start Date !");
                return false;
            }
            else {
                this.getcreditnoteofday();
            }
        }
        this.loaderService.display(true);
        var jsonmaster = {
            CREDITNO: this.crtno,
            Client: this.client,
            JobNo: this.jobno,
            Amount: this.amount,
            FromDate: this.exampleRadios1 == "Client" ? this.client_startdate.formatted : this.exampleRadios1 == "Date" ? this.datewise_startdate.formatted : "",
            ToDate: this.exampleRadios1 == "Client" ? this.client_enddate.formatted : this.exampleRadios1 == "Date" ? this.datewise_enddate.formatted : "",
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            TYPE: this.exampleRadios1,
            yearid: "",
            Fin_StartDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
            Fin_EndDate: this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE,
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CREDITNOTE_Search_List", jsonmaster)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            if (data.Table.length == "0") {
                _this._toasterService.toast("warning", "warning", "No record found");
            }
            else if (data.Table.length == "1") {
                _this.Searchdata_list = data.Table;
                _this.ListOnclick(data.Table[0].crt_no);
            }
            else {
                _this.Searchdata_list = data.Table;
            }
        });
    };
    CreditNoteSearchComponent.prototype.CreditView = function (creditno) {
        if (creditno == '' || creditno == undefined || creditno.length < 15) {
            alert("Enter 15 digit CreditNote No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-CreditNote-View/' + creditno + '/', "CreditNote View", toolbar);
    };
    CreditNoteSearchComponent.prototype.CreditNotePrint = function (creditno) {
        if (creditno == '' || creditno == undefined || creditno.length < 15) {
            alert("Enter 15 digit CreditNote No !");
            return false;
        }
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        // window.open('./#/popup/Account-CreditNote-print/' + creditno + '/' , "CreditNote Print", toolbar);
        var URL = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_CreditNote_Print.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&CreditNoteNo=" + creditno
            + "&DisplayMode=" + "0"
            + "&CurLogInIP=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    CreditNoteSearchComponent.prototype.ListOnclick = function (CREDITNO) {
        var authby;
        var updateItem = this.Searchdata_list.find(function (item) { return item.crt_no === CREDITNO; });
        authby = updateItem.AuthorisedBy;
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        // window.open('./#/popup/Account-CreditNote-print/' + creditno + '/' , "CreditNote Print", toolbar);
        if (confirm('Click Ok to Print or Click Cancel to Edit ?')) {
            var URL_1 = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_CreditNote_Print.aspx?" +
                "huhpnk=" + this._loginService.getLogin()[0].GUID
                + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
                + "&Userid=" + this._loginService.getLogin()[0].CMPID
                + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
                + "&CreditNoteNo=" + CREDITNO
                + "&DisplayMode=" + "0"
                + "&CurLogInIP=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp
                + "&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME
                + "&FinStartDate=" + this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE
                + "&FinEndDate=" + this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE;
            window.open(URL_1, "_blank");
            return false;
        }
        else {
            if (authby == "undefined" || authby == "0") {
                this._router.navigate(['/accounts/transaction/creditnote/general/' + CREDITNO]);
            }
            else {
                alert("You can update But print the Credit Note No.[" + CREDITNO + "] Because Credit note is Already Authorised !!");
                this.CreditView(CREDITNO);
            }
        }
    };
    CreditNoteSearchComponent.prototype.getcreditnoteofday = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            DAY: this.printallcredit_date.formatted
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CREDITNOTE_SEARCH_PERDAY", jsonmaster)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            //  console.log(data)
            if (data.Table.length == "0") {
                _this._toasterService.toast("warning", "warning", "No record found");
            }
            else if (data.Table.length == "1") {
                _this.ListOnclick(data.Table[0].crt_no);
            }
            else {
                _this.Searchdata_list = data.Table;
            }
        });
    };
    CreditNoteSearchComponent.prototype.getCheckboxValues = function (event, data) {
        var index = this.printarray.findIndex(function (x) { return x.creditno == data; });
        if (event) {
            var obj = {
                creditno: data
            };
            this.printarray.push(obj);
            // console.log(  this.printarray)
        }
        else {
            this.printarray.splice(index, 1);
            // console.log(  this.printarray)
        }
    };
    CreditNoteSearchComponent.prototype.checkAll = function (ev) {
        this.printarray = [];
        this.Searchdata_list.forEach(function (x) { return x.Checked = ev.target.checked; });
        if (ev.target.checked == true) {
            for (var i = 0; i < this.Searchdata_list.length; i++) {
                var obj = {
                    creditno: this.Searchdata_list[i].crt_no
                };
                this.printarray.push(obj);
                //  console.log(  this.printarray)
            }
        }
        else {
            this.printarray = [];
        }
    };
    CreditNoteSearchComponent.prototype.PrintCreditNote = function () {
        if (this.printarray.length == "0") {
            this._toasterService.toast("warning", "warning", "Select at least One CreditNote No to Print.");
            return false;
        }
        var output = this.printarray.map(function (item) {
            return item.creditno;
        });
        var datatry = output.join(",");
        var printnolist = datatry;
        //  console.log(printnolist)
        var URL = "http://180.179.207.163/erp/UI/Accounts/frm_Acc_Tran_CreditNote_BulkPrint.aspx?" +
            "huhpnk=" + this._loginService.getLogin()[0].GUID
            + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
            + "&Userid=" + this._loginService.getLogin()[0].CMPID
            + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
            + "&entryno=" + printnolist
            + "&CurLogInIP=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].edocumentIp;
        window.open(URL, "_blank");
    };
    CreditNoteSearchComponent.prototype.back = function () {
        //this.result.emit(true);
        this._router.navigate(['/accounts/transaction/creditnote/creditnotesearch']);
    };
    CreditNoteSearchComponent.prototype.reset = function () {
        this.crtno = "";
        this.client_startdate = "";
        this.client_enddate = "";
        this.datewise_startdate = "";
        this.datewise_enddate = "";
        this.client = "";
        this.jobno = "";
        this.amount = "";
        this.printallcredit_date = "";
        this.exampleRadios1 = "CreditNo";
    };
    CreditNoteSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    CreditNoteSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-credit-note-search',
            template: __webpack_require__(/*! raw-loader!./credit-note-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/CrtNote/credit-note-search.component.html"),
            styles: ["main{\n    position: absolute;\n    top: 110px;\n    left: 231px;\n    right: 0;\n    bottom: 0;\n    background: #f2f5fe;\n    padding: 1rem;\n  }\n\n  #content{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }"]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], CreditNoteSearchComponent);
    return CreditNoteSearchComponent;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/CrtNote/credit-note.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/accounts/transaction/CrtNote/credit-note.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteComponent", function() { return CreditNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreditNoteComponent = /** @class */ (function () {
    function CreditNoteComponent(_router, _dataService, _auth, _activatedRoute, _toasterService, _loginService, _loaderService, filterPipe) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._activatedRoute = _activatedRoute;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._loaderService = _loaderService;
        this.filterPipe = filterPipe;
        this.Header = "Credit Note ";
        this.TotalAmount = 0;
        this.billtype = "";
        this.pkgs = "";
        this.pieces = "";
        this.currency = "";
        this.service_tax = "";
        this.rupeestext = "";
        this.Adv_rec = "";
        this.volume = "";
        this.weight = "";
        this.client_ref = "";
        this.carrier = "";
        this.goods = "";
        this.master = "";
        this.currencyname = "";
        this.narration = "";
        this.no_pkgs = "";
        this.no_pieces = "";
        this.crt_currate = "";
        this.crt_currate1 = "1";
        this.crt_id = "0";
        this.crt_no = "0";
        this.queryParamsUserId = "";
        this.Mainaddtext = "Submit";
        this.pk_jobid = "0";
        this.pk_job_detail_id = "0";
        this.packages = "";
        this.propweight = "";
        this.invdate = "";
        this.mode = "";
        this.jobno = "";
        this.jobdatalist = [];
        this.pk_chrgeid = "0";
        this.pk_charge_detail_id = "0";
        this.chargetext = "Add";
        this.tax = "";
        this.chargetable = [];
        this.desc = "";
        this.desc1 = "";
        this.desc2 = "";
        this.qty = "";
        this.rateperqty = "";
        this.excrate = "1.00";
        this.currencytype = "";
        this.pk_Despid = "0";
        this.pk_Desp_detail_id = "0";
        this.despatchtext = "Add";
        this.despach_invoiceno = "";
        this.pk_inv_Despdetailid = "0";
        this.despach_table = [];
        this.fromright_dt = null;
        this.Checked = false;
        this.show_pkg_piece = false;
        this.jobno_disable = false;
        this.modecondition = false;
        this.addjob = true;
        this.jobupdate = false;
        this.disableaccount = false;
        this.Totalinvamt = 0;
        this.disableexrate = true;
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
            selectorWidth: '200px'
        };
        this.myDatePickerOptionsInv = {
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
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 }
        };
    }
    CreditNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loaderService.display(true);
        this.crtdate = new Date();
        this.crtdate = this._dataService.datechnge(this.crtdate);
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsUserId = params["crtno"];
            _this.crt_no = (_this.queryParamsUserId == " " ? "0" : _this.queryParamsUserId);
        });
        if (this.queryParamsUserId != ' ') {
            this.verifyPermission('424', 'Modify');
        }
        else {
            this.verifyPermission('424', 'Add');
        }
        var jsoncmp = {
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            cmpid: this._loginService.getLogin()[0].CMPID,
            INVNO: "",
            type: "CN"
        };
        this._dataService.getData("Accounts/ACC_INVOICE_PAGE_LOAD", jsoncmp)
            .subscribe(function (data) {
            //   console.log(data)
            _this.table_client = data.Table;
            _this.table1_billaddress = data.Table1;
            _this.table2_document = data.Table2;
            _this.table3_curreny = data.Table3;
            _this.table4_billtype = data.Table4;
            _this.table5_mode = data.Table5;
            _this.table6_pkgs = data.Table6;
            _this.table7_pieces = data.Table7;
            _this.table8_charge = data.Table8;
            _this.table9_account = data.Table9;
            _this.table13_currencytype = data.Table13;
            _this.currencytype = "CR115";
            if (_this.queryParamsUserId != ' ') {
                _this.MainCreditEdit_populate();
                _this.Mainaddtext = "Update";
            }
            _this._loaderService.display(false);
        });
    };
    CreditNoteComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (_this._loginService.getLogin()[0].ROLETYPE != 'SA') {
                _this.fromright_dt = data.Table[0].rightsfrmdt;
                _this.onDisableRange();
            }
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    CreditNoteComponent.prototype.onDisableRange = function () {
        var date = new Date(this.fromright_dt);
        var newdate = new Date(date);
        var bdate = new Date();
        bdate = newdate;
        var copy = this.getCopyOfOptions();
        bdate.setDate(bdate.getDate());
        copy.disableUntil = { year: bdate.getFullYear(), month: bdate.getMonth() + 1, day: bdate.getDate() };
        this.myDatePickerOptionsInv = copy;
        var d = new Date();
        d.setDate(d.getDate() + 1);
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.myDatePickerOptionsInv = copy1;
    };
    CreditNoteComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptionsInv));
    };
    CreditNoteComponent.prototype.CreditnoteDateChanged = function (ev) {
        this.crtdate = ev.formatted;
    };
    CreditNoteComponent.prototype.getexchangerate = function (ev) {
        if (ev == "CR115") {
            this.disableexrate = true;
            this.excrate = "1.00";
        }
        else {
            this.disableexrate = false;
            this.excrate = "";
        }
        if (this.currency.split("|")[0] == this.currencytype) {
            this.excrate = this.crt_currate;
            this.disableexrate = true;
        }
    };
    CreditNoteComponent.prototype.populatejob = function () {
        var _this = this;
        if (this.jobdatalist.length > "0") {
            var data2 = [];
            data2 = this.jobdatalist.filter(function (code) { return code.CRT_JOBNO == _this.jobno; });
            if (data2.length > "0") {
                this._toasterService.toast('warning', 'warning', 'Job Number already Exists!');
                return false;
            }
        }
        if (this.jobno == "") {
            this._toasterService.toast('warning', 'warning', 'Enter Jobno first!');
            return false;
        }
        var jsoncmp2 = {
            JOBSTR: this.jobno,
            TYPE: this.mode,
            CMPID: this._loginService.getLogin()[0].CMPID,
            GUID: this._loginService.getLogin()[0].GUID,
            INVNO: null,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE
        };
        this._dataService.getData("Accounts/ACC_CRTNOTE_JOB_POPULATE", jsoncmp2)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.jobdatalist = data.Table;
                _this.modecondition = true;
                _this.Adv_rec = data.Table1[0].ADV_AMT;
                _this.carrier = data.Table1[0].CARRIER;
                _this.client_ref = data.Table1[0].CLIENT_REF;
                _this.goods = data.Table1[0].GOODS;
                _this.weight = data.Table1[0].WEIGHTKILO;
                _this.no_pieces = data.Table1[0].NOOFPCS;
                _this.no_pkgs = data.Table1[0].NOOFPKG;
                _this.master = data.Table1[0].MAWBNO;
                _this.masterdate = data.Table1[0].MAWBDT;
                _this.volume = data.Table1[0].CBM.toFixed(3);
                _this.narration = data.Table1[0].CONTAINER;
                if (data.Table1[0].TYPEOFPCS != "") {
                    _this.pieces = data.Table1[0].TYPEOFPCS;
                }
                if (data.Table1[0].TYPEOFPKG != "") {
                    _this.pkgs = data.Table1[0].TYPEOFPKG;
                }
                var dataclient = [];
                if (data.Table1[0].EXPORTER != "") {
                    dataclient = _this.table_client.filter(function (code) { return code.EXP_CODE.split("|")[0] === data.Table1[0].EXPORTER; })[0];
                    _this.client = dataclient.EXP_CODE;
                    _this.fillAddress(dataclient.EXP_CODE);
                }
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    CreditNoteComponent.prototype.Editjob = function (data) {
        // console.log(data)
        this.addjob = false;
        this.jobupdate = true;
        this.show_pkg_piece = true;
        this.selected_data = data;
        this.jobno_disable = true;
        this.crt_no = data.INV_NO;
        this.invdate = "";
        this.jobno = data.CRT_JOBNO;
        this.packages = data.CRT_PKGS;
        this.propweight = data.CRT_GRWT;
    };
    CreditNoteComponent.prototype.updatejob = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: this.selected_data.ID,
            INV_NO: this.crt_no,
            INV_JOBNO: this.jobno,
            INV_PKGS: this.packages,
            INV_GRWT: this.propweight,
            VGUID: this.selected_data.VGUID,
            ACC_JOBDTLS_ID: this.selected_data.ACC_JOBDTLS_ID,
            CMPID: this._loginService.getLogin()[0].CMPID,
        };
        //   console.log(jsonmaster)
        this._dataService.Common("Accounts/ACC_CRTNOTE_JOB_TMP", jsonmaster)
            .subscribe(function (data) {
            //  console.log(data)
            if (data.Table[0].STATUS == '100') {
                _this.jobdatalist = data.Table;
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.resetjob();
                _this._loaderService.display(false);
            }
            else {
                _this._loaderService.display(false);
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
            }
        });
    };
    CreditNoteComponent.prototype.deletejob = function (deljob) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: deljob.ID,
            GUID: deljob.VGUID,
            ACC_JOBDTLS_ID: deljob.ACC_JOBDTLS_ID,
            MAKERID: this._loginService.getLogin()[0].CMPID,
        };
        //    console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CRTNOTE_JOB_DELETE", jsonmaster)
            .subscribe(function (data) {
            //   console.log(data)
            _this._loaderService.display(false);
            if (data.Table2[0].STATUS == "100") {
                _this._toasterService.toast("success", "success", data.Table2[0].STATUSTEXT);
                _this.jobdatalist = data.Table;
                _this.Adv_rec = data.Table1[0].ADV_AMT;
                _this.carrier = data.Table1[0].CARRIER;
                _this.client_ref = data.Table1[0].CLIENT_REF;
                _this.goods = data.Table1[0].GOODS;
                _this.weight = data.Table1[0].WEIGHTKILO;
                _this.no_pieces = data.Table1[0].NOOFPCS;
                _this.no_pkgs = data.Table1[0].NOOFPKG;
                _this.master = data.Table1[0].MAWBNO;
                _this.masterdate = data.Table1[0].MAWBDT;
                _this.volume = data.Table1[0].CBM;
                if (data.Table1[0].TYPEOFPCS != "") {
                    _this.pieces = data.Table1[0].TYPEOFPCS;
                }
                if (data.Table1[0].TYPEOFPKG != "") {
                    _this.pkgs = data.Table1[0].TYPEOFPKG;
                }
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table2[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    CreditNoteComponent.prototype.resetjob = function () {
        this.modecondition = false;
        this.show_pkg_piece = false;
        this.addjob = true;
        this.jobupdate = false;
        this.jobno_disable = false;
        this.packages = "";
        this.propweight = "";
        this.jobno = "";
        this.invdate = "";
    };
    Object.defineProperty(CreditNoteComponent.prototype, "amount", {
        // get amount() {
        //     var data = this.qty * this.rateperqty
        //     var exchage =1;
        //     if (this.currencytype=="CR115") {
        //        exchage = data* 1  }
        //     else{exchage = data* this.excrate}
        //      var final1 = exchage.toFixed(3)
        //      this.INV_Amt_INR=final1;
        //     return data;
        // }
        get: function () {
            var data = this.qty * this.rateperqty;
            this.Curamount = data;
            var exchage = 1;
            if (this.currencytype == "CR115") {
                exchage = data * 1;
            }
            else {
                exchage = data * this.excrate;
            }
            var final1 = exchage.toFixed(3);
            this.INV_Amt_INR = final1;
            if (this.currencytype == "CR115") {
                return data;
            }
            else {
                return final1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditNoteComponent.prototype, "taxamount_G", {
        get: function () {
            var data = this.qty * this.rateperqty;
            this.Curamount = data;
            var exchage = 1;
            if (this.currencytype == "CR115") {
                exchage = data * 1;
            }
            else {
                exchage = data * this.excrate;
            }
            var final = exchage.toFixed(3);
            this.taxamount_G_Inr = final;
            if (this.currencytype == "CR115") {
                return data;
            }
            else {
                return final;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditNoteComponent.prototype, "taxamount_N", {
        // get taxamount_G() {
        //     var data = this.qty * this.rateperqty
        //     var exchage =1;
        //     if (this.currencytype=="CR115") {
        //        exchage = data* 1  }
        //     else{exchage = data* this.excrate}
        //     var final = exchage.toFixed(3)
        //     this.taxamount_G_Inr=final;
        //     return data
        // }
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    CreditNoteComponent.prototype.addcharges = function () {
        var _this = this;
        if (this.charge == "" || this.charge == undefined) {
            this._toasterService.toast("warning", "warning", "Select Charges Code ");
            return false;
        }
        if (this.account == "" || this.account == undefined) {
            this._toasterService.toast("warning", "warning", "Select Account Name");
            return false;
        }
        if (this.tax == "" || this.tax == undefined) {
            this._toasterService.toast("warning", "warning", "Select Tax Type");
            return false;
        }
        if (this.qty == "" || this.qty == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Quantity");
            return false;
        }
        if (this.rateperqty == "" || this.rateperqty == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Rate");
            return false;
        }
        this._loaderService.display(true);
        var data2 = [];
        data2 = this.table9_account.filter(function (code) { return code.ACCTCODE === _this.account; })[0];
        var jsonmaster = {
            ID: this.pk_chrgeid,
            INV_NO: this.crt_no,
            INV_CHRGCODE: this.charge.split("|")[0],
            INV_ACCOUNT: this.account.split("|")[0],
            ACCOUNT_NAME: data2.ACCTNAME,
            INV_DESC_CHRG: "",
            INV_DESC1_CHRG1: this.desc1,
            INV_DESC2_CHRG1: this.desc2,
            INV_TAXABLE: this.tax,
            INV_AMOUNT: this.Curamount,
            INV_INRAMT: this.INV_Amt_INR,
            // INV_TAXABLE_AMOUNT: this.tax == "G" ? this.taxamount_G : this.taxamount_N,
            INV_TAXABLE_AMOUNT: this.tax == "G" ? this.Curamount : this.taxamount_N,
            INV_TAXABLE_INRAMT: this.tax == "G" ? this.taxamount_G_Inr : this.taxamount_N,
            USERNAME: this._loginService.getLogin()[0].CMP_USERNAME,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACC_CHARGDTLS_ID: this.pk_charge_detail_id,
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            INV_QTY: this.qty,
            INV_RATE: this.rateperqty,
            INV_CURRENCY: this.currencytype,
            INV_EXRATE: this.excrate,
        };
        //console.log(jsonmaster)
        this._dataService.Common("Accounts/ACC_CRTNOTE_CHARGE_TMP", jsonmaster)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this._loaderService.display(false);
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this.chargetable = data.Table;
                // for (var i = 0; i < this.chargetable.length; i++) {
                //     this.TotalAmount += parseFloat(this.chargetable[i].CRT_AMOUNT);
                // }
                for (var i = 0; i < _this.chargetable.length; i++) {
                    _this.TotalAmount += parseFloat(_this.chargetable[i].CRT_INRAMT);
                }
                _this.resetcharges();
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    CreditNoteComponent.prototype.deletecharge = function (deldata) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: deldata.ID,
            GUID: deldata.VGUID,
            ACC_CHARGS_ID: deldata.ACC_CHARGDTLS_ID,
            INV_CHRGCODE: deldata.INV_CHRGCODE,
        };
        //console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CRTNOTE_CHARGES_DELETE", jsonmaster)
            .subscribe(function (data) {
            // console.log(data);
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this.chargetable = data.Table;
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this._loaderService.display(false);
            }
            else {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this._loaderService.display(false);
            }
        });
    };
    CreditNoteComponent.prototype.resetcharges = function () {
        this.chargetext = "Add";
        this.account = "",
            this.desc1 = "",
            this.desc2 = "",
            this.desc = "";
        this.tax = "",
            this.qty = "";
        this.rateperqty = "";
        this.charge = "",
            this.pk_charge_detail_id = "0";
        this.pk_chrgeid = "0";
    };
    CreditNoteComponent.prototype.editcharge = function (data) {
        //  console.log(data)
        var data2 = [], data3 = [];
        data3 = this.table8_charge.filter(function (code) { return code.CHARGE_CODE.split("|")[0] === data.CRT_CHRGCODE; })[0];
        data2 = this.table9_account.filter(function (code) { return code.ACCTNAME === data.ACCOUNT_NAME; })[0];
        this.chargetext = "Update";
        this.pk_chrgeid = data.ID,
            this.pk_charge_detail_id = data.ACC_CHARGDTLS_ID;
        this.account = data2.ACCTCODE,
            this.desc = data.CRT_DESC_CHRG;
        this.desc1 = data.CRT_DESC1_CHRG1,
            this.desc2 = data.CRT_DESC2_CHRG1,
            this.tax = data.CRT_TAXABLE,
            this.charge = data3.CHARGE_CODE,
            this.rateperqty = data.CRT_RATE,
            this.qty = data.CRT_QTY;
        this.currencytype = data.CRT_CURRENCY,
            this.excrate = data.CRT_EXRATE;
    };
    CreditNoteComponent.prototype.GetChargeDesc = function (d) {
        // this.desc1 = d.split("|")[1]
        this.desc1 = d.split("|")[2];
        if (d.split("|")[0] == '8900') {
            this.disableaccount = false;
        }
        else {
            var gcode = d.split("|")[4] + '|' + d.split("|")[1];
            console.log(gcode);
            this.account = gcode;
            this.disableaccount = true;
        }
    };
    CreditNoteComponent.prototype.fillAddress = function (expcode) {
        this.updated_billaddress = [];
        var datafind = [];
        var data = expcode.split("|")[0];
        datafind = this.table1_billaddress.filter(function (code) { return code.EXP_CODE === data; });
        if (datafind.length == "1") {
            this.updated_billaddress = datafind;
            this.billaddress = datafind[0].DATAVALUEFIELD;
        }
        else if (datafind.length > 1) {
            this.updated_billaddress = datafind;
        }
        else {
            datafind = [];
            this.updated_billaddress = datafind;
            this.billaddress = datafind[0].DATAVALUEFIELD;
            this.billaddress = "";
        }
    };
    CreditNoteComponent.prototype.MasterDateChanged = function (ev) {
        this.masterdate = ev.formatted;
    };
    CreditNoteComponent.prototype.despachadd = function () {
        var _this = this;
        if (this.jobdatalist.length == "0") {
            this._toasterService.toast('warning', 'warning', 'Please Fill the JobDetails Tab Details!');
            return false;
        }
        if (this.chargetable.length == "0") {
            this._toasterService.toast('warning', 'warning', 'Please Fill the Charge Tab Details!');
            return false;
        }
        if (this.despach_invoiceno == "") {
            this._toasterService.toast("warning", "warning", "Enter Invoice No");
            return false;
        }
        if (this.despach_invoiceno.length > 0 && this.despach_invoiceno.length < 15) {
            this._toasterService.toast('warning', 'warning', 'Invalid Invoice No - Please Check !');
            this._loaderService.display(false);
            return false;
        }
        if (this.despach_amount == "" || this.despach_amount == 0 || this.despach_amount == undefined) {
            this._toasterService.toast("warning", "warning", "Enter Invoice  Amount");
            return false;
        }
        if (this.pk_Despid == "0") {
            // if ((this.Totalinvamt + parseInt(this.despach_amount)) > this.TotalAmount) {
            //     this._toasterService.toast("warning", "warning", "Amount Could not be greater than Total amount of Charges ")
            //     return false
            // }
            if ((this.adjustedamt + parseInt(this.despach_amount)) > this.invtotamt) {
                this._toasterService.toast("warning", "warning", "Amount Could not be greater than Total invoice amount ");
                return false;
            }
        }
        else {
            if ((this.Totalinvamt - parseInt(this.editdespach_amount) + parseInt(this.despach_amount)) > this.invtotamt) {
                this._toasterService.toast("warning", "warning", "Amount Could not be greater than Total invoice amount");
                return false;
            }
        }
        this._loaderService.display(true);
        var jsonmaster = {
            ID: this.pk_Despid,
            CRT_NO: (this.crt_no == "0") ? this.pk_Desp_detail_id : this.crt_no,
            CRT_INVNO: this.despach_invoiceno,
            CRT_AMOUNT: this.despach_amount,
            CRT_ADJUST: this.Checked == true ? "Y" : "N",
            CMPID: this._loginService.getLogin()[0].CMPID,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACC_INVDTLS_ID: this.pk_inv_Despdetailid,
            INVSTATUS: (this.checkno == true) ? 'Y' : 'N',
            CRT_CLIENT: this.client.split("|")[0]
        };
        // console.log(jsonmaster)
        this._dataService.Common("Accounts/ACC_CRTNOTE_INVOICE_TMP", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this.despach_table = data.Table1;
                _this.Totalinvamt = 0;
                for (var i = 0; i < _this.despach_table.length; i++) {
                    _this.Totalinvamt += parseFloat(_this.despach_table[i].CRT_AMOUNT);
                }
                _this.despachreset();
                _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
            else if (data.Table[0].STATUS == "103") {
                _this._loaderService.display(false);
                _this.checkno = confirm(data.Table[0].STATUSTEXT);
                if (_this.checkno == true) {
                    _this.despachadd();
                }
                else {
                    return false;
                }
            }
            else {
                _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                _this._loaderService.display(false);
            }
        });
    };
    CreditNoteComponent.prototype.despachedit = function (data) {
        this.despatchtext = "Update";
        this.pk_Despid = data.ID;
        this.pk_Desp_detail_id = data.CRT_NO,
            this.pk_inv_Despdetailid = data.ACC_INVDTLS_ID;
        this.despach_invoiceno = data.CRT_INVNO,
            this.despach_amount = data.CRT_AMOUNT;
        this.Checked = data.CRT_ADJUST == "Y" ? this.Checked = true : this.Checked = false;
    };
    CreditNoteComponent.prototype.despachreset = function () {
        this.despatchtext = "Add";
        this.despach_invoiceno = "",
            this.despach_amount = "";
        this.Checked = false;
        this.pk_Despid = "0";
        this.pk_Desp_detail_id = "0",
            this.pk_inv_Despdetailid = "0";
    };
    CreditNoteComponent.prototype.despachdelete = function (data) {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            ID: data.ID,
            GUID: data.VGUID,
            ACC_INVDTLS_ID: data.ACC_INVDTLS_ID,
            MAKERID: this._loginService.getLogin()[0].CMPID,
        };
        //  console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CRTNOTE_INV_DELETE", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS.split("#")[0] == "100") {
                _this._toasterService.toast("success", "success", data.Table1[0].STATUS.split("#")[1]);
                _this.despach_table = data.Table;
                _this.Totalinvamt = 0;
                if (_this.despach_table.length > 0) {
                    for (var i = 0; i < _this.despach_table.length; i++) {
                        _this.Totalinvamt += parseFloat(_this.despach_table[i].CRT_AMOUNT);
                    }
                }
                else {
                    _this.Totalinvamt = 0;
                }
                _this._loaderService.display(false);
            }
            else {
                _this._loaderService.display(false);
                _this._toasterService.toast("error", "error", data.Table1[0].STATUS.split("#")[1]);
            }
        });
    };
    CreditNoteComponent.prototype.MainCreditNote_submit = function () {
        var _this = this;
        if (this.crtdate == "" || this.crtdate == undefined || this.crtdate == null) {
            this._toasterService.toast('warning', 'warning', 'Please enter Credit Note Date!');
            return false;
        }
        if (this.chargetable.length == "0") {
            this._toasterService.toast('warning', 'warning', 'Please Fill the Charge Tab Details!');
            return false;
        }
        if (this.jobdatalist.length == "0") {
            this._toasterService.toast('warning', 'warning', 'Please Fill the JobDetails Tab Details!');
            return false;
        }
        if (this.client.split("|")[0] == "") {
            this._toasterService.toast('warning', 'warning', 'Please select client!');
            return false;
        }
        if (this.billaddress.split("|")[0] == "") {
            this._toasterService.toast('warning', 'warning', 'Please Select Bill to Address !');
            return false;
        }
        if (this.document == "") {
            this._toasterService.toast('warning', 'warning', 'Please select Document through!');
            return false;
        }
        if (this.no_pkgs == "") {
            this._toasterService.toast('warning', 'warning', 'No of Packages Cannot be left Blank!');
            return false;
        }
        if (this.currency.split("|")[0] != 'CR115') {
            if (this.crt_currate == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter INR Ruppes!');
                return false;
            }
            if (this.crt_currate1 == "") {
                this._toasterService.toast('warning', 'warning', 'Please Enter INR Ruppes!');
                return false;
            }
        }
        this._loaderService.display(true);
        var jsonmaster = {
            CMPID: this._loginService.getLogin()[0].CMPID,
            CMPCODE: this._loginService.getLogin()[0].CMPCODE,
            CITYCODE1: this._loginService.getLogin()[0].CITYCODE1,
            CITYCODE: this._loginService.getLogin()[0].CITYCODE,
            ID: this.crt_id,
            CRT_NO: this.crt_no,
            CRT_DATE: this.crtdate,
            CRT_CLIENT: this.client.split("|")[0],
            CRT_SHIPPER: this.document.split("|")[0],
            CRT_BILLTYPE: this.billtype,
            CRT_PKGS: this.no_pkgs,
            CRT_TYPEOFPKG: this.pkgs,
            CRT_NOOFPCS: this.no_pieces,
            CRT_TYPEOFPCS: this.pieces,
            CRT_CLIENTREF: this.client_ref,
            CRT_WT: this.weight,
            CRT_VOL: this.volume,
            CRT_HAWBNO: this.master,
            CRT_HAWBDT: this.masterdate,
            CRT_CARRIER: this.carrier,
            CRT_GOODS: this.goods,
            CRT_CUR: this.currency.split("|")[0],
            CRT_CURINR: "",
            CRT_CURRATE: this.crt_currate,
            CRT_CURRATE1: this.crt_currate1,
            CRT_TAX: "",
            CRT_CUR_NM: "",
            NARRATIONDESC: this.narration,
            MAKERIP: this._loginService.getLogin()[0].MAKERIP,
            BILLTOADDID: this.billaddress.split("|")[0],
            VGUID: this._loginService.getLogin()[0].GUID,
            CN_TYPE: this.mode,
        };
        //  console.log(jsonmaster)
        if (this.crt_no == "0" || this.crt_no == "") {
            this._dataService.Common("Accounts/ACC_CRTNOTE_Final_IU", jsonmaster)
                .subscribe(function (data) {
                // console.log(data)
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.MainReset();
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this._loaderService.display(false);
                }
            });
        }
        else {
            this._dataService.Common("Accounts/ACC_CRTNOTE_Final_IU", jsonmaster)
                .subscribe(function (data) {
                //console.log(data);
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast("success", "success", data.Table[0].STATUSTEXT);
                    _this.MainReset();
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast("error", "error", data.Table[0].STATUSTEXT);
                    _this._loaderService.display(false);
                }
            });
        }
    };
    CreditNoteComponent.prototype.MainCreditEdit_populate = function () {
        var _this = this;
        this._loaderService.display(true);
        var jsonmaster = {
            CRTNOTE: this.crt_no,
            cmp_code: this._loginService.getLogin()[0].CMPCODE,
            citycode: this._loginService.getLogin()[0].CITYCODE,
            makerid: this._loginService.getLogin()[0].CMPID,
            vguid: this._loginService.getLogin()[0].GUID
        };
        // console.log(jsonmaster)
        this._dataService.getData("Accounts/ACC_CRTNOTE_Edit_Populate", jsonmaster)
            .subscribe(function (data) {
            // console.log(data)
            _this.jobdatalist = data.Table;
            _this.chargetable = data.Table2;
            _this.despach_table = data.Table3;
            _this.goods = data.Table1[0].CRT_GOODS;
            _this.masterdate = data.Table1[0].CRT_HAWBDT;
            _this.master = data.Table1[0].CRT_HAWBNO;
            _this.carrier = data.Table1[0].CRT_CARRIER;
            _this.Adv_rec = data.Table1[0].CRT_ADVANCE;
            _this.no_pieces = data.Table1[0].CRT_NOOFPCS;
            _this.no_pkgs = data.Table1[0].CRT_PKGS;
            _this.volume = data.Table1[0].CRT_VOL;
            _this.weight = data.Table1[0].CRT_WT;
            _this.narration = data.Table1[0].NARRATION;
            _this.billtype = data.Table1[0].CRT_BILLTYPE;
            _this.client_ref = data.Table1[0].CRT_CLIENTREF;
            _this.crt_currate = data.Table1[0].CRT_CURRATE;
            _this.crt_currate1 = data.Table1[0].CRT_CURRATE1;
            _this.crtdate = data.Table1[0].CRT_DATE;
            _this.crt_no = data.Table1[0].CRT_NO;
            _this.crt_id = data.Table1[0].ID;
            _this.mode = data.Table1[0].CN_TYPE;
            if (data.Table1[0].CRT_TYPEOFPCS != "") {
                _this.pieces = data.Table1[0].CRT_TYPEOFPCS;
            }
            if (data.Table1[0].CRT_TYPEOFPKG != "") {
                _this.pkgs = data.Table1[0].CRT_TYPEOFPKG;
            }
            var datacurrency = [], dataclient = [], datadocument = [];
            if (data.Table1[0].CRT_CLIENT != "") {
                //console.log(data.Table1[0].CRT_CLIENT)
                dataclient = _this.table_client.filter(function (code) { return code.EXP_CODE.split("|")[0] === data.Table1[0].CRT_CLIENT; })[0];
                _this.client = dataclient.EXP_CODE;
            }
            if (data.Table1[0].CRT_CUR != "") {
                datacurrency = _this.table3_curreny.filter(function (code) { return code.cur_code.split("|")[0] === data.Table1[0].CRT_CUR; });
                _this.currency = datacurrency[0].cur_code;
            }
            if (data.Table1[0].CRT_SHIPPER != "") {
                datadocument = _this.table2_document.filter(function (code) { return code.EXP_CODE.split("|")[0] === data.Table1[0].CRT_SHIPPER; });
                _this.document = datadocument[0].EXP_CODE;
            }
            _this.fillAddress(data.Table1[0].CRT_CLIENT);
            _this.billaddress = data.Table1[0].BILLTOADDR;
            _this._loaderService.display(false);
        });
    };
    CreditNoteComponent.prototype.GetCurrencyName = function (data) {
        data = this.table3_curreny.filter(function (code) { return code.cur_code === data; })[0];
        this.currencyname = data.DATATEXTVALUE;
    };
    CreditNoteComponent.prototype.Narrationarea = function () {
        var textarea = document.querySelector("#autoresizing");
        textarea.addEventListener('input', autoResize, false);
        function autoResize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }
    };
    CreditNoteComponent.prototype.MainReset = function () {
        this.resetcharges();
        this.resetjob();
        this.despachreset();
        this.jobdatalist = [];
        this.chargetable = [];
        this.despach_table = [];
        this.goods = "";
        this.masterdate = "";
        this.master = "";
        this.carrier = "";
        this.Adv_rec = "";
        this.no_pieces = "";
        this.no_pkgs = "";
        this.volume = "";
        this.weight = "";
        this.narration = "";
        this.billtype = "";
        this.client_ref = "";
        this.crt_currate = "";
        this.crt_currate1 = "";
        this.crt_no = "0";
        this.mode = "";
        this.client = "";
        this.billaddress = "";
        this.pieces = "";
        this.pkgs = "";
        var jsonmaster = {
            VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._dataService.getData("Accounts/ACC_CREDITNOTE_NG_RESET", jsonmaster)
            .subscribe(function (data) {
            //console.log(data);
            if (data.Table[0].STATUS == "100") {
            }
        });
        this._router.navigate(['/accounts/transaction/creditnote/general/ ']);
    };
    CreditNoteComponent.prototype.viewinvno = function (Invoiceno) {
        // console.log(Invoiceno)
        var Inv = Invoiceno.target;
        Inv = Inv.innerText;
        // Inv=Inv.replace('</p>','')
        var inv = Inv.trim();
        // console.log(inv)
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/popup/Account-Invoice-View/' + inv + '/', "Invoice View", toolbar);
    };
    CreditNoteComponent.prototype.GetInvoicebalAmt = function () {
        var _this = this;
        var jsondata = {
            invno: this.despach_invoiceno,
            crtno: this.crt_no,
        };
        this._loaderService.display(true);
        this._dataService.getData("Accounts/ACC_CREDITNOTE_GETINVOICE_BALAMOUNT", jsondata)
            .subscribe(function (data) {
            //   console.log(data)
            if (data.Table[0].STATUS == "100") {
                _this.invtotamt = data.Table[0].Invoicetotamt;
                _this.adjustedamt = data.Table[0].AdjustedAmt;
                _this.despach_amount = data.Table[0].balamt;
            }
            else if (data.Table[0].STATUS == "103") {
                alert(data.Table[0].STATUSTXT);
                _this.despach_invoiceno = '';
                return false;
            }
            _this._loaderService.display(false);
        });
    };
    CreditNoteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"] }
    ]; };
    CreditNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-credit-note',
            template: __webpack_require__(/*! raw-loader!./credit-note.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/transaction/CrtNote/credit-note.component.html"),
            styles: ["\na:hover,a:focus{\n    text-decoration: none;\n    outline: none;\n}\n.tab .nav-tabs {\n    border-bottom:0 none;\n}\n.tab .nav-tabs li{\n    margin-right: 10px;\n}\n.tab .nav-tabs li a{\n    position: relative;\n    padding: 4px;\n    color: #fff;\n    font-size: 11px;\n    z-index: 1;\n    font-family:verdana;\n    font-weight:bold\n}\n.tab .nav-tabs li a:hover{\n    background:transparent;\n    border:1px solid transparent;\n    color: #444;\n}\n .tab .nav-tabs li a:before{\n    content: \"\";\n    width:100%;\n    height:100%;\n    position:absolute;\n    bottom: 5px;\n    left:-1px;\n    font-size:11px;\n\n    background-color: #379b50;\n    border: 1px solid #d3d3d3;\n    border-bottom: 0px none;\n    border-radius: 10px 10px 0 0;\n    transform-origin: left center 0;\n    transform: perspective(3px) rotateX(5deg);\n    z-index:-1;\n}\n.tab .nav-tabs li a.active:before{\n    background: #fff;\n}\n.tab .nav-tabs li a.active,\n.tab .nav-tabs li a.active:focus,\n.tab .nav-tabs li a.active:hover{\n    border:1px solid transparent;\n    background:transparent;\n    color: #212529;\n    z-index: 2;\n}\n#autoresizing {\n    display: block;\n    overflow: hidden;\n    resize: none;\n}\n"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]])
    ], CreditNoteComponent);
    return CreditNoteComponent;
}());



/***/ }),

/***/ "./src/app/accounts/transaction/CrtNote/credit-note.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/accounts/transaction/CrtNote/credit-note.module.ts ***!
  \********************************************************************/
/*! exports provided: CreditNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteModule", function() { return CreditNoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _credit_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-note.component */ "./src/app/accounts/transaction/CrtNote/credit-note.component.ts");
/* harmony import */ var _credit_note_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-note-routing.module */ "./src/app/accounts/transaction/CrtNote/credit-note-routing.module.ts");
/* harmony import */ var _credit_note_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credit-note-search.component */ "./src/app/accounts/transaction/CrtNote/credit-note-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CreditNoteModule = /** @class */ (function () {
    function CreditNoteModule() {
    }
    CreditNoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_credit_note_component__WEBPACK_IMPORTED_MODULE_2__["CreditNoteComponent"], _credit_note_search_component__WEBPACK_IMPORTED_MODULE_4__["CreditNoteSearchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _credit_note_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreditNoteRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipeModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], CreditNoteModule);
    return CreditNoteModule;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    //edocumentIp: 'http://109.15.43.138/'
    edocumentIp: 'http://81.250.195.254/'
};


/***/ })

}]);
//# sourceMappingURL=CrtNote-credit-note-module.js.map