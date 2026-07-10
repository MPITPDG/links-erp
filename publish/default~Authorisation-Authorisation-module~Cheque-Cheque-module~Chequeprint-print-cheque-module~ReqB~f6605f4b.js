(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Authorisation-Authorisation-module~Cheque-Cheque-module~Chequeprint-print-cheque-module~ReqB~f6605f4b"],{

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

/***/ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js ***!
  \*************************************************************/
/*! exports provided: OrderModule, OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    OrderPipe_1 = OrderPipe;
    /**
     * Check if a value is a string
     *
     * @param value
     */
    OrderPipe.isString = function (value) {
        return typeof value === "string" || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    OrderPipe.defaultCompare = function (a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive, comparator) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe_1.caseInsensitiveSort
                : OrderPipe_1.defaultCompare;
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    var OrderPipe_1;
    OrderPipe = OrderPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "orderBy",
            pure: false
        })
    ], OrderPipe);
    return OrderPipe;
}());

var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [OrderPipe],
            exports: [OrderPipe],
            providers: [OrderPipe]
        })
    ], OrderModule);
    return OrderModule;
}());


//# sourceMappingURL=ngx-order-pipe.js.map


/***/ })

}]);
//# sourceMappingURL=default~Authorisation-Authorisation-module~Cheque-Cheque-module~Chequeprint-print-cheque-module~ReqB~f6605f4b.js.map