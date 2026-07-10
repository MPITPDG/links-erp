(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userprofile-userprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/userprofile/userprofile-creation.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/userprofile/userprofile-creation.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n       <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">               \r\n                <tr >\r\n                    <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        User Details\r\n                    </td>\r\n                </tr>                 \r\n                    <tr> \r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>User Name</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>          \r\n                        <td>  \r\n                            <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control width250\" maxlength=\"40\" >   \r\n                        </td> \r\n                        <td colspan=\"2\" rowspan=\"4\">\r\n                            <!-- <div class=\"image-preview mb-3\" *ngIf=\"previewUrl\">\r\n                                <img [src]=\"previewUrl\" height=\"300\" />                 \r\n                            </div> -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>Password</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                        <td>  \r\n                            <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control width250\" maxlength=\"20\" placeholder=\"New Password\"   (keydown)=\"onKeydown($event.target.value)\" required pattern=\"a-zA-Z0–9\"  > \r\n                            <span id=\"8char\" class=\"col-form-span-label\"> <i class=\"fa fa-check\"  style=\"color:#FF0004;\" ></i>&nbsp; 8 Characters Long</span>  &nbsp;  \r\n                            <span id=\"ucase\" class=\"col-form-span-label\"> <i class=\"fa fa-check\"  style=\"color:#FF0004;\" ></i>&nbsp;  1 Uppercase Letter </span><br>\r\n                        \r\n                                <span id=\"lcase\" class=\"col-form-span-label\"> <i class=\"fa fa-check\"  style=\"color:#FF0004;\" ></i>&nbsp;1 Lowercase Letter</span>  &nbsp; \r\n                                <span id=\"1num\" class=\"col-form-span-label\"> <i class=\"fa fa-check\"  style=\"color:#FF0004;\" ></i>&nbsp;1 Number </span>\r\n                        </td>         \r\n                    </tr>\r\n                    <tr>                       \r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>Full Name</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                        <td>\r\n                            <input [(ngModel)]=\"fullname\" type=\"text\" class=\"form-control width250\"> \r\n                        </td>         \r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>Greeting</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                    <td>  \r\n                        <input [(ngModel)]=\"greeting\" type=\"text\" class=\"form-control width250\" maxlength=\"40\" > \r\n                    </td>  \r\n                    </tr>    \r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>Location</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                    <td colspan=\"3\"> \r\n                        <select [(ngModel)]=\"location\" placeholder=\"Selet Location\" class=\"form-control width250\">\r\n                            <option *ngFor=\"let ct of Locationlist\" value={{ct.LOCATION}}>{{ct.LOCATION}}</option>\r\n                        </select> \r\n                        <!-- <input [(ngModel)]=\"location\" type=\"text\" class=\"form-control width250\" maxlength=\"40\" >  -->\r\n                    </td>  \r\n                    </tr>   \r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>Image Name</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                    <td colspan=\"3\">  \r\n                        <input #fileUpload type=\"file\" accept=\".png, .jpg, .jpeg\" (change)=\"onFileChanged($event)\" class=\"form-control width180\"> \r\n                         <!-- <input #fileUpload type=\"file\" class=\"col-form-span-label\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple accept=\".pdf\" /> -->\r\n                    </td>  \r\n                    </tr>   \r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>E-Mail</b> </span>\r\n                            <!-- <span class=\"col-form-span-error\">*</span> -->\r\n                        </td>         \r\n                    <td colspan=\"3\">  \r\n                        <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control width250\"  (change)=\"onChange(email)\">  \r\n                    </td>  \r\n                    </tr>\r\n                    <tr>\r\n                        <td > \r\n                            <span class=\"col-form-span-label\"><b>Date Limit</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                        <td colspan=\"3\">   \r\n                            <my-date-picker name=\"datelimit\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"datelimit\"></my-date-picker>\r\n                        </td>  \r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\" style=\" display: flex; \" >\r\n                            <span class=\"col-form-span-label\" ><b>Equivalent to Admin</b> </span> \r\n                        \r\n                            <span class=\"col-form-span-label\" ><input type=\"checkbox\" [(ngModel)]=\"equadmin\"  class=\"form-control width180\"  /> </span>    \r\n                         </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>List Branch</b> </span>\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </td>         \r\n                    <td colspan=\"3\">\r\n                    \r\n\r\n                    <ng-select [items]=\"Branchlist\"  class=\"form-control width350\"\r\n                    bindLabel=\"CITYNAME\"\r\n                    bindValue=\"CITYCODE\" \r\n                    appendTo=\"body\"\r\n                    multiple=\"true\"  [closeOnSelect]=\"false\"\r\n                    [selectableGroup]=\"true\"\r\n                    [(ngModel)]=\"branchcode\"\r\n                    (change)=\"onchnage(branchcode)\">\r\n                    <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                        <input  type=\"checkbox\" [(ngModel)]=\"item$.selected\"  /> \r\n                        {{ item.CITYNAME}}\r\n                     </ng-template>\r\n                    </ng-select>\r\n\r\n                    </td>  \r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\" style=\" display: flex; \">\r\n                            <span class=\"col-form-span-label\" ><b>Is Resigned</b>  </span>    \r\n                         \r\n                            <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"isresigned\"   class=\"form-control width180\" /> </span>    \r\n                         </td> \r\n                    </tr>\r\n                    <tr >\r\n                        <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                            Unblock Details\r\n                        </td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>No of Days</b> </span>\r\n                        </td>         \r\n                    <td  >   \r\n                        <span class=\"col-form-span-label\" colspan=\"3\">                \r\n                             <input [(ngModel)]=\"noofdays\" pattern=\"^[0-9]+$\" type=\"text\" class=\"form-control width180\" maxlength=\"40\" >  \r\n                        </span>    \r\n                    </td>\r\n                  \r\n                    </tr>\r\n                    \r\n                    <tr>\r\n                        <td colspan=\"4\" style=\" display: flex; \">\r\n                            <span class=\"col-form-span-label\" ><b> Unblock User</b>  </span>    \r\n                         \r\n                            <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"unblock\"   class=\"form-control width180\" /> </span>    \r\n                         </td> \r\n                    </tr>\r\n                     \r\n                    <tr>\r\n                        <td class=\"centerlabel\" colspan=\"4\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Profile()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-plus\" ></i> {{text}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/userprofile/userprofile-search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/userprofile/userprofile-search.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>USER LIST</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1\">  </div>\r\n        <div class=\"col-sm-10\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">   \r\n                <tr>\r\n                    <td colspan=\"4\">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <!-- <tr>\r\n                                <td><span class=\"col-form-span-label\" ><b>User Name :</b> </span></td> \r\n                                <td>\r\n                                    <span class=\"col-form-span-label\"> \r\n                                        <input  type=\"text\" class=\"form-control width300\">  \r\n                                    </span>  \r\n                                </td>\r\n                            </tr>\r\n                            <tr> -->\r\n                                <!-- <td></td>\r\n                                <td colspan=\"4\" class=\"\">\r\n                                    <button class=\"btn btn-sm btn-success \" type=\"submit\" (click)=\"Search()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-search\" ></i> Search</span></button>\r\n                                </td> -->\r\n                                <tr >\r\n                                    <td colspan=\"4\">\r\n                                        <table class=\"table table-sm-new bgwhite\">\r\n                                            <thead>\r\n                                                <tr class=\"title-head formheading\">\r\n                                                    \r\n                                                    <th>USER NAME</th>\r\n                                                    <th>FULL NAME</th>\r\n                                                    <th>DATE LIMIT</th>\r\n                                                    <th>EMAIL</th>\r\n                                                    \r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let obj of Reqlist  | paginate: config\">\r\n                                                  \r\n                                                    <td>\r\n                                                        <span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.CMP_USERCODE)\" style=\"cursor:pointer;\">{{obj.CMP_USERNAME}}</span>\r\n                                                       \r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span class=\"col-form-span-label\">{{obj.FULLNAME}}</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span class=\"col-form-span-label\">{{obj.CMP_DATELIMIT}}</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span class=\"col-form-span-label\">{{obj.MAIL}}</span>\r\n                                                    </td>\r\n                                                 \r\n                                                </tr>\r\n                                            \r\n                                            </tbody>\r\n                                        </table>\r\n                                        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls> \r\n                                    </td>\r\n                                </tr>\r\n                            \r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        </div>\r\n</div>                "

/***/ }),

/***/ "./src/app/admin/userfilerpipe.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/userfilerpipe.pipe.ts ***!
  \*********************************************/
/*! exports provided: UserfilerpipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserfilerpipePipe", function() { return UserfilerpipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserfilerpipePipe = /** @class */ (function () {
    function UserfilerpipePipe() {
    }
    UserfilerpipePipe.prototype.transform = function (value, searchString) {
        if (!searchString) {
            return value;
        }
        return value.filter(function (it) {
            var FULLNAME = it.FULLNAME.toLowerCase().includes(searchString.toLowerCase());
            var CMP_USERNAME = it.CMP_USERNAME.toLowerCase().includes(searchString.toLowerCase());
            var MAIL = it.MAIL.toLowerCase().includes(searchString.toLowerCase());
            return (FULLNAME + CMP_USERNAME + MAIL);
        });
    };
    UserfilerpipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userfilerpipe'
        })
    ], UserfilerpipePipe);
    return UserfilerpipePipe;
}());



/***/ }),

/***/ "./src/app/admin/userprofile/userprofile-creation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/userprofile/userprofile-creation.component.ts ***!
  \*********************************************************************/
/*! exports provided: userprofilecreation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userprofilecreation", function() { return userprofilecreation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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








var userprofilecreation = /** @class */ (function () {
    function userprofilecreation(_dataService, _toasterService, loaderService, http, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.uploadResult = [];
        this.fileData = null;
        this.selectedFileNames = [];
        this.Header = 'User Profile';
        this.LinerId = "0";
        this.queryParamsUserId = "";
        this.quryParamsLinerCode = "";
        this.equadmin = false;
        this.isresigned = false;
        this.unblock = false;
        this.USRCODE = "";
        this.ACTIVECITY = [];
        this.ACTIVECITYCODE = [];
        this.AUTHORITY = [];
        this.ID = "0";
        this.text = "Submit";
        this.count1 = 0;
        this.branchArr = [];
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
    userprofilecreation.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsUserId = params["userid"];
        });
        if (this.queryParamsUserId == " ") {
            this._loginService.verifyRights(0, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        }
        else {
            this._loginService.verifyRights(123, '')
                .subscribe(function (data) { _this._loginService.checkVerify('Modify', data); });
            this.editpopulate();
            this.text = "Update";
        }
        this._dataService.getAll("Admin/Fill_Location")
            .subscribe(function (data) {
            _this.Locationlist = data.Table;
        });
        this._dataService.getAll("Admin/Fill_Usercity")
            .subscribe(function (data) {
            _this.Branchlist = data.Table;
        });
        this._loginService.verifyRights(108, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
    };
    userprofilecreation.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
        }
    };
    userprofilecreation.prototype.onKeydown = function (searchValue) {
        //  console.log(searchValue);     
        var ucase = new RegExp("[A-Z]+");
        var lcase = new RegExp("[a-z]+");
        var num = new RegExp("[0-9]+");
    };
    userprofilecreation.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
        // file.append('myFile', this.selectedFile, this.selectedFile.name);
        console.log(file);
    };
    userprofilecreation.prototype.Add_Profile = function () {
        var _this = this;
        if (this.username == "") {
            this._toasterService.toast('warning', 'warning', 'User Name could not be blank !');
            return false;
        }
        if (this.password == "") {
            this._toasterService.toast('warning', 'warning', 'Password could not be blank !');
            return false;
        }
        if (this.fullname == "" || this.fullname == undefined) {
            this._toasterService.toast('warning', 'warning', 'Full Name could not be blank !');
            return false;
        }
        if (this.greeting == "" || this.greeting == undefined) {
            this._toasterService.toast('warning', 'warning', 'Greeting could not be blank !');
            return false;
        }
        if (this.location == "" || this.location == undefined) {
            this._toasterService.toast('warning', 'warning', 'Please select Location !');
            return false;
        }
        if (this.datelimit == "" || this.datelimit == undefined) {
            this._toasterService.toast('warning', 'warning', 'Datelimit could not be blank !');
            return false;
        }
        if (this.queryParamsUserId == ' ') {
            if (this.count1 == 0) {
                this._toasterService.toast('warning', 'warning', 'Please select at least one branch  !');
                return false;
            }
        }
        this.branchcode.forEach(function (item, index) {
            _this.ACTIVECITY = _this.ACTIVECITY + item + ",";
            _this.listcnt = _this.Branchlist.filter(function (cntrylist) { return cntrylist.CITYCODE == item; });
            _this.ACTIVECITYCODE = _this.ACTIVECITYCODE + _this.listcnt[0].CITYCODE1 + ",";
            var autcode = item + '-' + _this.listcnt[0].CITYCODE1 + '-555,';
            _this.AUTHORITY = _this.AUTHORITY + autcode;
        });
        //    if(this.AUTHORITY== ""){
        //         this._toasterService.toast('warning', 'warning', 'Please select atleast one branch');            
        //         return false;
        //     }
        this.loaderService.display(true);
        var userdata = {
            USRCODE: this.USRCODE,
            USRNAME: this.username,
            PASSWORD: this.password,
            DATELINE: this.datelimit.formatted,
            FULLNAME: this.fullname,
            GREET: this.greeting,
            EMAIL: this.email,
            ACTIVECITY: this.ACTIVECITY,
            ACTIVECITYCODE: this.ACTIVECITYCODE,
            AUTHORITY: this.AUTHORITY,
            ISADMIN: (this.equadmin == true) ? "Y" : "N",
            ROLE: (this.equadmin == true) ? "SA" : "User",
            IMG: this.imageName,
            LOCATION: this.location,
            ID: this.ID,
            NOOFDAYS: (this.noofdays == '') ? "30" : this.noofdays,
            UNBLOCK: (this.unblock == true) ? "0" : "",
            ISRESIGNED: (this.isresigned == true) ? "Y" : "",
        };
        this._dataService.Common("Admin/Admin_Profile_IU", userdata)
            .subscribe(function (data) {
            console.log(data.Table[0].STATUS);
            console.log(data);
            if (data.Table[0].STATUS.split("#")[0] == "100") {
                {
                    _this._toasterService.toast('success', 'success', data.Table[0].STATUSTEXT);
                }
                _this.loaderService.display(false);
                _this.RestMain();
            }
            else {
                // console.log("sds")
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.RestMain();
                _this.loaderService.display(false);
            }
        });
    };
    userprofilecreation.prototype.editpopulate = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = { CMP_USERCODE: this.queryParamsUserId };
        this._dataService.getData("Admin/Profile_details_populate", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.USRCODE = data.Table[0].CMP_USERCODE;
                _this.username = data.Table[0].CMP_USERNAME;
                _this.password = data.Table[0].CMP_PASSWORD;
                _this.datelimit = (data.Table[0].CMP_DATELIMIT != "") ? _this._dataService.stringdttoArry(data.Table[0].CMP_DATELIMIT) : "";
                _this.fullname = data.Table[0].FULLNAME;
                _this.greeting = data.Table[0].GREETING;
                _this.email = data.Table[0].MAIL;
                // this.ACTIVECITY=	data.Table[0].CMP_ACTIVECITY;
                // this.ACTIVECITYCODE=	data.Table[0].CMP_ACTIVECITYCODE;
                _this.AUTHORITY = data.Table[0].AUTHORITY;
                _this.equadmin = (data.Table[0].CMP_EQUALTOADMIN == 'Y') ? true : false;
                //this.imageName=	data.Table[0].IMAGE;
                _this.location = data.Table[0].LOCATION;
                _this.ID = data.Table[0].CMPID;
                _this.noofdays = data.Table[0].NOOFDAYS;
                _this.unblock = (data.Table[0].BLOCK == '0') ? false : true;
                _this.isresigned = (data.Table[0].ISRESIGNED == '1') ? true : false;
                if (data.Table[0].CMP_ACTIVECITY != '') {
                    data.Table[0].CMP_ACTIVECITY.split(',').forEach(function (item, index) {
                        _this.branchArr.push(item.trim());
                    });
                }
                _this.branchcode = _this.branchArr;
                _this.loaderService.display(false);
            }
            else {
                _this.loaderService.display(false);
            }
        });
    };
    userprofilecreation.prototype.RestMain = function () {
        this.username = "";
        this.password = "";
        this.fullname = "";
        this.greeting = "";
        this.imageName = "";
        this.isresigned = false;
        this.email = "";
        this.equadmin = false;
        this.branchcode = [];
        this.noofdays = "";
        this.unblock = false;
        this.text = "Submit";
        this.ACTIVECITY = "";
        this.ACTIVECITYCODE = "";
        this.AUTHORITY = "";
    };
    userprofilecreation.prototype.onchnage = function (branchs) {
        console.log(branchs);
        this.count1 = branchs.length;
    };
    userprofilecreation.prototype.ileChangeEvent = function (fileInput) {
        //Clear Uploaded Files result message
        this.uploadResult = "";
        this.filesToUpload = fileInput.target.files;
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
        }
        return false;
    };
    userprofilecreation.prototype.upload = function () {
        if (this.filesToUpload.length == 0) {
            alert('Please select at least 1  files to upload!');
        }
        else {
            this.uploadFiles();
        }
    };
    userprofilecreation.prototype.uploadFiles = function () {
        var _this = this;
        this.uploadResult = "";
        if (this.filesToUpload.length > 0) {
            this.filesToUpload[0].size;
            var formData = new FormData();
            formData.append('uploadedFiles', this.filesToUpload[0], this.filesToUpload[0].name);
            var apiUrl = "Admin/UploadFiles";
            this.http.post(apiUrl, formData)
                .subscribe(function (data) {
                _this.uploadResult = data.Table;
            }, function (err) {
                alert("File Upload successfully !");
            }, function () {
                _this.fileUploadVar.nativeElement.value = "";
                _this.selectedFileNames = [];
                _this.filesToUpload = [];
            });
        }
    };
    userprofilecreation.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUpload', { static: false }),
        __metadata("design:type", Object)
    ], userprofilecreation.prototype, "fileUploadVar", void 0);
    userprofilecreation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofilecreation',
            template: __webpack_require__(/*! raw-loader!./userprofile-creation.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/userprofile/userprofile-creation.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], userprofilecreation);
    return userprofilecreation;
}());



/***/ }),

/***/ "./src/app/admin/userprofile/userprofile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/userprofile/userprofile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserprofileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileRoutingModule", function() { return UserprofileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userprofile_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userprofile-search.component */ "./src/app/admin/userprofile/userprofile-search.component.ts");
/* harmony import */ var _userprofile_creation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userprofile-creation.component */ "./src/app/admin/userprofile/userprofile-creation.component.ts");
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
            title: 'Admin/UserProfile'
        },
        children: [
            { path: 'userprofile/:userid', component: _userprofile_creation_component__WEBPACK_IMPORTED_MODULE_3__["userprofilecreation"], data: { title: 'Profile' }, pathMatch: 'ful' },
            { path: 'ProfileSearch', component: _userprofile_search_component__WEBPACK_IMPORTED_MODULE_2__["userprofilesearch"], data: { title: 'Search' }, pathMatch: 'ful' },
        ]
    }
];
var UserprofileRoutingModule = /** @class */ (function () {
    function UserprofileRoutingModule() {
    }
    UserprofileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserprofileRoutingModule);
    return UserprofileRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/userprofile/userprofile-search.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/userprofile/userprofile-search.component.ts ***!
  \*******************************************************************/
/*! exports provided: userprofilesearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userprofilesearch", function() { return userprofilesearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
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







var userprofilesearch = /** @class */ (function () {
    function userprofilesearch(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.Reqlist = [];
    }
    userprofilesearch.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._dataService.getAll("Admin/Fill_UserPopulate")
            .subscribe(function (data) {
            _this.Reqlist = data.Table;
            _this.loaderService.display(false);
        });
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
            totalItems: this.Reqlist.count
        };
    };
    userprofilesearch.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    userprofilesearch.prototype.ListOnclick = function (CODE) {
        this._router.navigate(['/admin/admin/userprofile/' + CODE]);
    };
    userprofilesearch.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    userprofilesearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofilesearch',
            template: __webpack_require__(/*! raw-loader!./userprofile-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/userprofile/userprofile-search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], userprofilesearch);
    return userprofilesearch;
}());



/***/ }),

/***/ "./src/app/admin/userprofile/userprofile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/userprofile/userprofile.module.ts ***!
  \*********************************************************/
/*! exports provided: UserprofileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileModule", function() { return UserprofileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userprofile-routing.module */ "./src/app/admin/userprofile/userprofile-routing.module.ts");
/* harmony import */ var _userprofile_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userprofile-search.component */ "./src/app/admin/userprofile/userprofile-search.component.ts");
/* harmony import */ var _userprofile_creation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userprofile-creation.component */ "./src/app/admin/userprofile/userprofile-creation.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _userfilerpipe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../userfilerpipe.pipe */ "./src/app/admin/userfilerpipe.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserprofileModule = /** @class */ (function () {
    function UserprofileModule() {
    }
    UserprofileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_userprofile_search_component__WEBPACK_IMPORTED_MODULE_7__["userprofilesearch"], _userprofile_creation_component__WEBPACK_IMPORTED_MODULE_8__["userprofilecreation"], _userfilerpipe_pipe__WEBPACK_IMPORTED_MODULE_10__["UserfilerpipePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserprofileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ], providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], UserprofileModule);
    return UserprofileModule;
}());



/***/ })

}]);
//# sourceMappingURL=userprofile-userprofile-module.js.map