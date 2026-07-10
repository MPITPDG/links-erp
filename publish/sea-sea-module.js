(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sea-sea-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/import/sea/docket-print-search.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/sea/docket-print-search.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Search</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                        Import Code\r\n                    </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" [(ngModel)]=\"inputValue\" class=\"form-control\" [maxlength]=\"15\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i> Search</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/import/sea/entry-sea.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/sea/entry-sea.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{FormHeader}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1\">\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>IMPORT DETAILS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Note:-\r\n                            </b>\r\n                            <span class=\"col-form-span-error\">*</span> Mark fields are mandatory.)\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td  class=\"col-form-span-label\" colspan=\"2\"></td>\r\n                    <td  class=\"col-form-span-label bgyellow\" colspan=\"10\">\r\n                        <input type=\"checkbox\" class=\"col-form-span-label\"  name=\"ExWork\" [(ngModel)]=\"EXWORKS\" (ngModelChange)=\"onTypeChange('E')\">\r\n                        EX-WORKS&nbsp;&nbsp;&nbsp;\r\n                        <input type=\"checkbox\" class=\"col-form-span-label\"  name=\"CustomClr\" [(ngModel)]=\"CUSTOMCLR\" (ngModelChange)=\"onTypeChange('C')\">\r\n                        CUSTOMS CLEARANCE&nbsp;&nbsp;&nbsp;\r\n                        <input type=\"checkbox\" class=\"col-form-span-label\"  name=\"Freightfrd\" [(ngModel)]=\"FREIGHTFRD\" (ngModelChange)=\"onTypeChange('F')\">\r\n                        FREIGHT FORWARDING  \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\" class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Importer\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"10\">\r\n                        <ng-select [items]=\"ImporterList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"Importer\"\r\n                            class=\"form-control\" (ngModelChange)=\"BillTo=Importer\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Bill To</span>\r\n                    </td>\r\n                    <td colspan=\"10\">\r\n                        <ng-select [items]=\"BillToList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"BillTo\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                  <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Business Associate</span>\r\n                        <span class=\"col-form-span-error\">*</span>\r\n                    </td>\r\n                    <td colspan=\"10\">\r\n                        <ng-select [items]=\"BusinessAssociateList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\"\r\n                            [(ngModel)]=\"BusinessAssociate\" class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>SHIPMENT DETAILS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Party Ref. No.</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <input type=\"text\" [(ngModel)]=\"PartyRefNo\" class=\"form-control\" />\r\n                    </td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=5>\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <tr >\r\n                                <td colspan=\"12\">\r\n                                    <span class=\"col-form-span-label\">\r\n                                        <b>DATE OF RECEIPT OF DOCUMENT DETAILS</b>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"2\">\r\n                                    <span class=\"col-form-span-label\">Date of Receipt Of Documents</span>\r\n                                </td>\r\n                                <td colspan=\"8\">\r\n                                    <span class=\"col-form-span-label\">Remarks</span>\r\n                                </td>\r\n                                <td colspan=\"2\">\r\n                                    <span class=\"col-form-span-label\">&nbsp;</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"2\">\r\n                                    <my-date-picker name=\"RODDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"RODDate\"></my-date-picker>\r\n                                </td>\r\n                                <td colspan=\"8\">\r\n                                    <input type=\"text\" [(ngModel)]=\"RODRemark\" class=\"form-control\" />\r\n                                </td>\r\n                                <td colspan=\"2\">\r\n                                    <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_DateOfROD_Dtls(0,'A', RODdtID, '', '')\">\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <i class=\"fa fa-plus\"></i>\r\n                                        </span>\r\n                                    </button>&nbsp;\r\n                                    <button class=\"btn btn-sm btn-danger\" (click)=\"RODdtID=0;RODDate=null;RODRemark=''\">\r\n                                        <span class=\"col-form-span-label\">\r\n                                            <i class=\"fa fa-undo\"></i>\r\n                                        </span>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                            <thead class=\"trbg\">\r\n                                <th class=\"width50\">\r\n                                    <span class=\"col-form-span-label\"></span>\r\n                                </th>\r\n                                <th class=\"width220\">\r\n                                    <span class=\"col-form-span-label\">Date Of Receipt of Document</span>\r\n                                </th>\r\n                                <th colspan=\"10\">\r\n                                    <span class=\"col-form-span-label\">Remarks</span>\r\n                                </th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let obj of dtDATEOFROD; let i =index;\">\r\n                                    <td class=\"width50\">\r\n                                        <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_DateOfROD_Dtls(i,'P', obj.pk_tblIndex, obj.DateOfRODdt, obj.DateOfRODremark)\"></i>&nbsp;&nbsp;\r\n                                        <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_DateOfROD_Dtls(i,'D', obj.pk_tblIndex, obj.DateOfRODdt, obj.DateOfRODremark)\"></i>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"col-form-span-label\">{{obj.DateOfRODdt}}</span>\r\n                                    </td>\r\n                                    <td colspan=\"10\">\r\n                                        <span class=\"col-form-span-label\">{{obj.DateOfRODremark}}</span>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Description of Goods\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"DescriptionGoods\" [(ngModel)]=\"DescriptionGoods\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">No. of Packages\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"NoOfPackages1\" [(ngModel)]=\"NoOfPackages1\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Type of Packages\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"TypeOfPackage2List\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"TypeOfPackage2\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Gross Weight Kgs\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"GrossWeight\" [(ngModel)]=\"GrossWeight\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Net Weight Kgs</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"NetWeight\" [(ngModel)]=\"NetWeight\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td width=\"150px\">\r\n                        <span class=\"col-form-span-label\">Container number</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Container Size \\ Type</span>\r\n                    </td>\r\n                    <td width=\"130px\">\r\n                        <span class=\"col-form-span-label\">No Of Packages</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td width=\"150px\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ContNo\" [maxlength]=\"11\" />\r\n                    </td>\r\n                    <td width=\"60px\">\r\n                        <ng-select [items]=\"ContLengthList\" bindLabel=\"length\" bindValue=\"length\" placeholder=\"--\" [(ngModel)]=\"ContLength\" class=\"form-control width60\"\r\n                            (ngModelChange)=\"changeDrpContainerSize(ContType)\">\r\n                        </ng-select>\r\n                    </td>\r\n                    <td width=\"300px\">\r\n                        <ng-select [items]=\"ContTypeList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"ContType\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                    <td width=\"130px\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ContNoOfPackage\" [maxlength]=\"14\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_Good_Dtls(0,'A', ContId, '', '', '', '')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetGood_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Container No</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Container Size \\ Type</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">No Of Packages</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtGOOD; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_Good_Dtls(i,'P', obj.pk_tblIndex, obj.ContainerNumber, obj.ContLength, obj.ContType, obj.NoOfPackages)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_Good_Dtls(i,'D', obj.pk_tblIndex, obj.ContainerNumber,'','','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.ContainerNumber}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.ContLength + ' ' + obj.ContainerSize}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.NoOfPackages}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"12\">\r\n                    <span class=\"col-form-span-label\">\r\n                        <b>Vessel Details</b>\r\n                    </span>\r\n                        <!-- <div class=\"form-check form-check-inline\"  style=\"display: flex;\">\r\n                              <span class=\"col-form-span-label\"><b>Direct Vessel</b></span>\r\n                              <input type=\"radio\" name=\"DirectVessel\" [(ngModel)]=\"DirectVessel\" value=\"YES\" (ngModelChange)=\"(VesselName==null)?TranshipmentVessel=null:TranshipmentVessel=VesselName;\"\r\n                              /><b>Yes</b>&ngsp;&nbsp;\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Vessel Details</b>\r\n                        </span>\r\n                        </div> -->\r\n                      \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Vessel Name\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <!-- <ng-select [items]=\"VesselNameList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"VesselName\"\r\n                            class=\"form-control\" (ngModelChange)=\"changeVesselName()\">\r\n                        </ng-select> -->\r\n                        <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"VesselName\"  />\r\n                        \r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Vessel VoyNo.\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        \r\n                        <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"voyno\"  />\r\n                        \r\n                    </td>\r\n\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Liner Agent</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"AgentList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"LinerAgent\"\r\n                            class=\"form-control\">\r\n                        </ng-select> \r\n\r\n                        <!-- <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"LinerAgent\"  /> -->\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">IGM No/date</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"IGMNo\"  />\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"IGMdt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"IGMdt\"></my-date-picker>\r\n                    </td>\r\n                   \r\n                </tr>\r\n              \r\n                <!---->\r\n                 \r\n                <!-- <tr class=\"trheader\">\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Transhipment</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\" class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Transhipment Vessel</span>\r\n                    </td>\r\n                    <td colspan=\"10\">\r\n                        <ng-select [items]=\"TranshipmentVesselList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\"\r\n                            [(ngModel)]=\"TranshipmentVessel\" class=\"form-control\" [disabled]=\"DirectVessel=='YES'\" (ngModelChange)=\"changeTranVesselName()\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\" class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Transhipment Port</span>\r\n                    </td>\r\n                    <td colspan=\"10\">\r\n                        <ng-select [items]=\"TranshipmentPortList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"TranshipmentPort\"\r\n                            class=\"form-control\" [disabled]=\"DirectVessel=='YES'\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr> -->\r\n                <tr>\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Arrival Details </b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td  class=\"width160\">\r\n                        <span class=\"col-form-span-label\">POL </span>\r\n                    </td>\r\n                    <td colspan=\"2\" >\r\n                        <!-- <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ArrivalPort\"  /> -->\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"ArrivalPort\"  >\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of Arrivalportlist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Arrival Port (POD) </span>\r\n                    </td>\r\n                    <td colspan=\"2\" >\r\n                      <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ArrivalPortPOD\"  /> \r\n                        <!-- <select class=\"form-control width150\"  [(ngModel)]=\"ArrivalPortPOD\"  >\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of ShipmentPortList\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                        </select> -->\r\n                        <!-- <span class=\"col-form-span-label\">{{ArrivalPort}}</span> -->\r\n                    </td>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Terminal</span>\r\n                    </td>\r\n                    <td colspan=\"3\"  >\r\n                        <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ShedNo\"  />\r\n                        <!-- <span class=\"col-form-span-label\">{{ShedNo}}</span> -->\r\n                    </td>\r\n                <tr>\r\n                   \r\n                   \r\n                </tr>\r\n                <tr>\r\n                    <td  class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Expected Arrival Date</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <my-date-picker name=\"ExpectedArrDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ExpectedArrDate\"></my-date-picker>\r\n                        <!-- <span class=\"col-form-span-label\">{{ExpectedArrDate}}</span> -->\r\n                    </td>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Actual Arrival Date</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <my-date-picker name=\"ActualArrDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ActualArrDate\" (ngModelChange)=\"OnChangeArrivalDt(ActualArrDate)\"></my-date-picker>\r\n                        <!-- <span class=\"col-form-span-label\">{{ActualArrDate}}</span> -->\r\n                    </td>\r\n                    <td  class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Last Free Date</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <!-- <my-date-picker name=\"LastDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"LastDate\"></my-date-picker> -->\r\n                        <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"LastDate\" [disabled]=\"true\"  />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Arriving Details</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Arriving Date at ICD</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\" style=\"display: -webkit-flex\">\r\n                            <my-date-picker name=\"ArrivingICD\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ArrivingICD\"></my-date-picker>(Internal Container Depot)</span>\r\n                        \r\n                    </td>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Final Destination Port</span>\r\n                    </td>\r\n                    <td colspan=\"2\"  >\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"Finaldest\"  >\r\n                            <option value=\"\">Please select</option>\r\n                            <option *ngFor=\"let d of ShipmentPortList\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                    </td>\r\n                    <td   class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Arrival Date at Final Destination</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <my-date-picker name=\"dtfinaldest\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"dtfinaldest\"></my-date-picker>\r\n                        <!-- <span class=\"col-form-span-label\">{{ActualArrDate}}</span> -->\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>PORT DETAILS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td colspan=\"3\" class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Bank Ref. No.</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <input type=\"text\" [(ngModel)]=\"BankRefNo\" class=\"form-control\" />\r\n                    </td>\r\n                   \r\n                </tr> -->\r\n               <!--  <tr>\r\n                    <td colspan=\"3\" class=\"width160\">\r\n                        <span class=\"col-form-span-label\">G.L.Date</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <my-date-picker name=\"GLDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"GLDate\"></my-date-picker>\r\n                    </td> \r\n                    <td></td>\r\n                    <td></td>\r\n                  \r\n                </tr>-->\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Port of Shipment\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        <ng-select [items]=\"ShipmentPortList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"ShipmentPort\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                    <td colspan=\"2\"></td>\r\n                    <td colspan=\"4\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">MBL No.</span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"MblNo\" [(ngModel)]=\"MblNo\" />\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">MBL Date</span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        <my-date-picker name=\"MblDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"MblDate\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">HBL No.</span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"HblNo\" [(ngModel)]=\"HblNo\" />\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">HBL Date</span>\r\n                    </td>\r\n                    <td colspan=\"4\">\r\n                        <my-date-picker name=\"HblDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"HblDate\"></my-date-picker>\r\n                    </td>\r\n                </tr> \r\n                <!-- <tr class=\"trbg\">\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"DocumentCancel\" />&nbsp;DOCUMENT CANCELLED</b>\r\n                        </span>\r\n                    </td>\r\n                </tr> -->\r\n            </table>\r\n\r\n          \r\n           \r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"12\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>DOCUMENT CALL FOR</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">Document Name</span>\r\n                    </td>\r\n                    <td colspan=\"8\">\r\n                        <span class=\"col-form-span-label\">Received On</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <input type=\"text\" [(ngModel)]=\"DocumentName\" class=\"form-control\" />\r\n                    </td>\r\n                    <td colspan=\"8\">\r\n                        <my-date-picker name=\"DocumentRecOn\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"DocumentRecOn\"></my-date-picker>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_DocCallForUs_Dtls(0,'A', DocCallForUsID, '', '')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"DocCallForUsID=0;DocumentRecOn=null;DocumentName=''\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th colspan=\"9\">\r\n                        <span class=\"col-form-span-label\">Document Name</span>\r\n                    </th>\r\n                    <th class=\"width160\">\r\n                        <span class=\"col-form-span-label\">Recevied On</span>\r\n                    </th>\r\n                    <th class=\"width200\">\r\n                        <span class=\"col-form-span-label\">Acknowledged On</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtCALLFORUS; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_DocCallForUs_Dtls(i,'P', obj.pk_tblIndex, obj.DocName, obj.ReceivedOn)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_DocCallForUs_Dtls(i,'D', obj.pk_tblIndex, obj.DocName, '')\"></i>\r\n                        </td>\r\n                        <td colspan=\"9\">\r\n                            <span class=\"col-form-span-label\">{{obj.DocName}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.ReceivedOn}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.AcknowledgedOn}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            \r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>DOCUMENT SUBMITTED TO CUSTOMS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Bill of Entry Type</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <ng-select [items]=\"BillOfEntryNoList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"BillOfEntry\"\r\n                            class=\"form-control width120\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Online Submission Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"onlinesuubDt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"onlinesuubDt\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\"> Online Submission By</span>\r\n                    </td>\r\n                    <td>\r\n                        <select class=\"form-control width150\"  [(ngModel)]=\"submissionBy\"  >\r\n                            <option value=\"0\">Please select</option>\r\n                            <option *ngFor=\"let d of userdtls\" value={{d.CMPID}}>{{d.fullname}}</option>\r\n                        </select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Bill of Entry No.</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"BillOfEntryNo\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Bill of Entry Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"BillOfEntryDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"BillOfEntryDate\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"BillOfEntryRemark\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Assessment Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"AssessmentDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"AssessmentDate\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AssessmentRemark\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Duty Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"dutyamt\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Stamp Duty Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"StampDutyAmt\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td colspan=\"4\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>Other Document Submitted</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Document Name</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Submitted On</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"CustomDocumentName\" />\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"CustomSubmittedOn\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"CustomSubmittedOn\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"CustomRemark\" />\r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_BOE_Dtls(0,'A', CustomId, '', '', '')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetBOE_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width200\">\r\n                        <span class=\"col-form-span-label\">Document Name</span>\r\n                    </th>\r\n                    <th class=\"width120\">\r\n                        <span class=\"col-form-span-label\">Submitted On</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Remarks</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtDOCSUB; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_BOE_Dtls(i,'P', obj.pk_tblIndex, obj.BOEno, obj.BOEdt, obj.BOEremark)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_BOE_Dtls(i,'D', obj.pk_tblIndex, obj.BOEno,'','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.BOEno}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.BOEdt}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.BOEremark}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"5\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>COMMERCIAL INVOICE DETAILS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Invoice No\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"InvoiceNo\" [(ngModel)]=\"InvoiceNo\" [maxlength]=\"30\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Date\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"InvoiceDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"InvoiceDate\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_Invoice_Dtls(0,'A', InvoiceId, '', '')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetInvoice_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width200\">\r\n                        <span class=\"col-form-span-label\">Invoice No</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Invoice Date</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtINVOICE; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_Invoice_Dtls(i,'P', obj.pk_tblIndex, obj.Invoice_No, obj.Invoice_Date)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_Invoice_Dtls(i,'D', obj.pk_tblIndex, obj.Invoice_No,'','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.Invoice_No}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.Invoice_Date}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">Incoterm\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"IncotermList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"Incoterm\"\r\n                            class=\"form-control\" (ngModelChange)=\"checkEnableIncoterm()\">\r\n                        </ng-select>\r\n                    </td>\r\n                    <td class=\"width100\" >\r\n                        <a href=\"javascript:void(0);\" (click)=\"moreDetails();\" style=\"color: #c37804;text-decoration: underline;\">\r\n                            <span class=\"col-form-span-label\">For Details..</span>\r\n                        </a>\r\n                    </td>\r\n                    <td class=\"width100\" colspan=\"2\">\r\n                        <a href=\"javascript:void(0);\" (click)=\"moreDetails();\" style=\"color: #c37804;text-decoration: underline;\">\r\n                            <span class=\"col-form-span-label\">Chart</span>\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\">\r\n                        <div style=\"border: 1px #c2cfd6 solid;\">\r\n                            <span class=\"col-form-span-label\">{{BriefIncoterm}}</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td>\r\n                        &nbsp;\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Value</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Currency</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Exch. Rate 1 = INR</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Amount In INR</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Invoice Value\r\n                            <span class=\"col-form-span-error\">*</span>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" id=\"InvValue\" name=\"InvValue\" [(ngModel)]=\"InvValue\" (blur)=\"amountValidationInvoice('InvValue', 'InvCurrency', 'InvExchRate')\"\r\n                            [OnlyNumber]=\"true\" [maxlength]=\"30\" />\r\n                    </td>\r\n                    <td class=\"width220\">\r\n                        <select id=\"InvCurrency\" [(ngModel)]=\"InvCurrency\" class=\"form-control\" (change)=\"checkCurrency('InvCurrency','InvValue','InvExchRate')\">\r\n                            <option value=\"null\">--Select--</option>\r\n                            <option *ngFor=\"let c of InvoiceCurrencyList\" value=\"{{c.DATAVALUEFIELD}}\">{{c.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                        <!-- <ng-select [items]=\"InvoiceCurrencyList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"InvCurrency\"\r\n                            class=\"form-control\" (change)=\"checkCurrency('InvCurrency','InvValue','InvExchRate')\">\r\n                        </ng-select> -->\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" id=\"InvExchRate\" class=\"form-control\" [(ngModel)]=\"InvExchRate\" (blur)=\"amountValidationInvExchChange('InvExchRate', 'InvCurrency')\"\r\n                            [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"InvTotInr\" [OnlyNumber]=\"true\" [disabled]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Freight Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" id=\"FrightAmount\" name=\"FrightAmount\" [(ngModel)]=\"FrightAmount\" (blur)=\"amountValidationInvoice('FrightAmount', 'FrightCurrency', 'FrightExchRate')\"\r\n                            [OnlyNumber]=\"true\" [maxlength]=\"30\" [disabled]=\"FrightEnable\" />\r\n                    </td>\r\n                    <td class=\"width220\">\r\n                        <select id=\"FrightCurrency\" [(ngModel)]=\"FrightCurrency\" [disabled]=\"FrightEnable\" class=\"form-control\" (change)=\"checkCurrency('FrightCurrency','FrightAmount','FrightExchRate')\">\r\n                            <option value=\"null\">--Select--</option>\r\n                            <option *ngFor=\"let c of FrightCurrencyList\" value=\"{{c.DATAVALUEFIELD}}\">{{c.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                        <!-- <ng-select [items]=\"FrightCurrencyList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"FrightCurrency\"\r\n                            class=\"form-control\" [disabled]=\"FrightEnable\" (change)=\"checkCurrency('FrightCurrency','FrightAmount','FrightExchRate')\">\r\n                        </ng-select> -->\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" id=\"FrightExchRate\" name=\"FrightExchRate\" class=\"form-control\" [(ngModel)]=\"FrightExchRate\" (blur)=\"amountValidationInvExchChange('FrightExchRate', 'FrightCurrency')\"\r\n                            [OnlyNumber]=\"true\" [disabled]=\"FrightEnable\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"FrightTotInr\" [OnlyNumber]=\"true\" [disabled]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Insurance Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" id=\"InsuranceAmount\" name=\"InsuranceAmount\" [(ngModel)]=\"InsuranceAmount\" (blur)=\"amountValidationInvoice('InsuranceAmount', 'InsuranceCurrency', 'InsuranceExchRate')\"\r\n                            [OnlyNumber]=\"true\" [maxlength]=\"30\" [disabled]=\"InsurenceEnable\" />\r\n                    </td>\r\n                    <td class=\"width220\">\r\n                        <select id=\"InsuranceCurrency\" [(ngModel)]=\"InsuranceCurrency\" [disabled]=\"InsurenceEnable\" class=\"form-control\" (change)=\"checkCurrency('InsuranceCurrency','InsuranceAmount','InsuranceExchRate')\">\r\n                            <option value=\"null\">--Select--</option>\r\n                            <option *ngFor=\"let c of InsuranceCurrencyList\" value=\"{{c.DATAVALUEFIELD}}\">{{c.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                        <!-- <ng-select [items]=\"InsuranceCurrencyList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\"\r\n                            [(ngModel)]=\"InsuranceCurrency\" class=\"form-control\" [disabled]=\"InsurenceEnable\" (change)=\"checkCurrency('InsuranceCurrency','InsuranceAmount','InsuranceExchRate')\">\r\n                        </ng-select> -->\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" id=\"InsuranceExchRate\" name=\"InsuranceExchRate\" class=\"form-control\" [(ngModel)]=\"InsuranceExchRate\" (blur)=\"amountValidationInvExchChange('InsuranceExchRate', 'InsuranceCurrency')\"\r\n                            [OnlyNumber]=\"true\" [disabled]=\"InsurenceEnable\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"InsuranceTotInr\" [OnlyNumber]=\"true\" [disabled]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Commission Amount </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"CommissionAmount\" id=\"CommissionAmount\" [(ngModel)]=\"CommissionAmount\" (blur)=\"amountValidationInvoice('CommissionAmount', 'CommissionCurrency', 'CommissionExchRate')\"\r\n                            [OnlyNumber]=\"true\" [maxlength]=\"30\" />\r\n                    </td>\r\n                    <td class=\"width220\">\r\n                        <select id=\"CommissionCurrency\" [(ngModel)]=\"CommissionCurrency\" class=\"form-control\" (change)=\"checkCurrency('CommissionCurrency','CommissionAmount','CommissionExchRate')\">\r\n                            <option value=\"null\">--Select--</option>\r\n                            <option *ngFor=\"let c of CommissionCurrencyList\" value=\"{{c.DATAVALUEFIELD}}\">{{c.DATATEXTFIELD}}</option>\r\n                        </select>\r\n                        <!-- <ng-select [items]=\"CommissionCurrencyList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\"\r\n                            [(ngModel)]=\"CommissionCurrency\" class=\"form-control\" (change)=\"checkCurrency('CommissionCurrency','CommissionAmount','CommissionExchRate')\">\r\n                        </ng-select> -->\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" id=\"CommissionExchRate\" name=\"CommissionExchRate\" class=\"form-control\" [(ngModel)]=\"CommissionExchRate\" (blur)=\"amountValidationInvExchChange('CommissionExchRate', 'CommissionCurrency')\"\r\n                            [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"CommissionTotInr\" [OnlyNumber]=\"true\" [disabled]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                    <td class=\"width220\">\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">CIF Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"CifAmount\" [OnlyNumber]=\"true\" [disabled]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                    <td class=\"width220\">\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Assessable Value</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AccessableValue\" [OnlyNumber]=\"true\" [disabled]=\"true\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"6\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>DUTY DETAILS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"DutyPaidBy\" [(ngModel)]=\"DutyPaidBy\" value=\"LNK\"/><b>Paid By Links</b>&ngsp;&nbsp;\r\n                            <input type=\"radio\" name=\"DutyPaidBy\" [(ngModel)]=\"DutyPaidBy\" value=\"O\"/><b>Paid BY Client</b>&ngsp;&nbsp;\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Duty Paid</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Interest INR</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Paid On</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Cash No</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DutyPaid\" [maxlength]=\"10\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DutyIns\" [maxlength]=\"10\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"DutyPaidOnDate\" [options]=\"myDatePickerOptions\" [maxlength]=\"30\" [(ngModel)]=\"DutyPaidOnDate\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DutyCashNo\" [maxlength]=\"30\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DutyRemark\" />\r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_Duty_Dtls(0,'A', DutyId, '', '', '', '', '')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetDuty_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Duty Paid</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Interest INR</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Duty Paid On</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Cash No</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Duty Remarks</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtDUTY; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_Duty_Dtls(i,'P', obj.pk_tblIndex, obj.DutyPaid, obj.DutyIns, obj.DutyPaidOn, obj.DutyCashNo, obj.DutyRemark)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_Duty_Dtls(i,'D', obj.pk_tblIndex, obj.DutyPaid, obj.DutyIns,'','','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DutyPaid}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DutyIns}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DutyPaidOn}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DutyCashNo}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DutyRemark}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"6\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>ADVANCE DETAILS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"6\" style=\"text-align: -webkit-center;\">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" style=\"width:500px\">\r\n                            <tr>\r\n                                <td></td>\r\n                                <td class=\"trbg\">\r\n                                    <span class=\"col-form-span-label\">Advance Recieved</span>\r\n                                </td>\r\n                                <td class=\"trbg\">\r\n                                    <span class=\"col-form-span-label\">Advance Recieved On</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">Advance Duty</span>\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AdvRecOne\" [maxlength]=\"30\" [OnlyNumber]=\"true\" />\r\n                                </td>\r\n                                <td>\r\n                                    <my-date-picker name=\"AdvRecOneDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"AdvRecOneDate\"></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">Advance Steamer Agent</span>\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AdvRecTwo\" [maxlength]=\"30\" [OnlyNumber]=\"true\" />\r\n                                </td>\r\n                                <td>\r\n                                    <my-date-picker name=\"AdvRecTwoDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"AdvRecTwoDate\"></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">Advance CFS</span>\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AdvRecThree\" [maxlength]=\"30\" [OnlyNumber]=\"true\" />\r\n                                </td>\r\n                                <td>\r\n                                    <my-date-picker name=\"AdvRecThreeDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"AdvRecThreeDate\"></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\">Advance  Others</span>\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AdvRecFour\" [maxlength]=\"30\" [OnlyNumber]=\"true\" />\r\n                                </td>\r\n                                <td>\r\n                                    <my-date-picker name=\"AdvRecFourDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"AdvRecFourDate\"></my-date-picker>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>OTHER DETAIL</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Examination Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"ExaminationDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ExaminationDate\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ExaminationRemark\" />\r\n                    </td>\r\n                </tr>\r\n               \r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Custom Clerk</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"CustomClerk\" />\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Dock Clerk</span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DockClerk\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"6\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>STAEMER AGENT CHARGES</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Type Of Charge</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Receipt No.</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Payment Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width220\">\r\n                        <ng-select [items]=\"SteTypeChargeList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"SteTypeCharge\"\r\n                            class=\"form-control\">\r\n                        </ng-select>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SteRecNo\" />\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"StePayDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"StePayDate\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SteAmount\" [OnlyNumber]=\"true\" [maxlength]=\"30\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SteRemark\" />\r\n                    </td>\r\n                    <td>\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_SteAgent_Dtls(0,'A', SteId, '', '','','','')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetSteAgent_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width200\">\r\n                        <span class=\"col-form-span-label\">Type Of Charge</span>\r\n                    </th>\r\n                    <th class=\"width150\">\r\n                        <span class=\"col-form-span-label\">Receipt Number</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Paid Date</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Amount</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtSTEAGENT; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_SteAgent_Dtls(i,'P', obj.pk_tblIndex, obj.SteType, obj.SteRecNo, obj.StePaydt, obj.SteAmount, obj.SteRemark)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_SteAgent_Dtls(i,'D', obj.pk_tblIndex, obj.SteType, obj.SteRecNo,'','','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.SteTypeValue}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.SteRecNo}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.StePaydt}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.SteAmount}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.SteRemark}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">D/OReceived on</span>\r\n                    </td>\r\n                    <td >\r\n                        <my-date-picker name=\"DOrecvdOn\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"DOrecvdOn\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">D/O Validity Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"validatedt\" /> -->\r\n                        <my-date-picker name=\"validatedt\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"validatedt\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Delivery Mode</span>\r\n                    </td>\r\n                     <td colspan=\"3\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"deliverymode\" [(ngModel)]=\"deliverymode\" value=\"CFS\"  /><b>CFS Delivery </b> &nbsp;&nbsp;&nbsp;\r\n                            <input type=\"radio\" name=\"deliverymode\" [(ngModel)]=\"deliverymode\" value=\"DPD\"  /><b>DPD (Direct Port Delivery)</b> \r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                 \r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"5\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>PORT / CFS PAYMENT DETAIL</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Receipt / Chappa No</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Paid Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width220\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PortRecNo\" />\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                        <my-date-picker name=\"PortPaidDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"PortPaidDate\"></my-date-picker>\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PortAmount\" [maxlength]=\"30\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PortRemark\" />\r\n                    </td>\r\n                    <td class=\"width60\">\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_Port_Dtls(0,'A', PortId, '', '','','')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetPort_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width150\">\r\n                        <span class=\"col-form-span-label\">Receipt Number</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Paid Date</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Amount</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtPORTCFS; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_Port_Dtls(i,'P', obj.pk_tblIndex, obj.PortRecNo, obj.PortPaiddt, obj.PortAmount, obj.PortRemark)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_Port_Dtls(i,'D', obj.pk_tblIndex, obj.PortRecNo, obj.PortPaiddt,'','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PortRecNo}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PortPaiddt}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PortAmount}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.PortRemark}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <!-- <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"5\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>OCTROI DETAIL</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Receipt</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Paid Date</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Amount</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">&nbsp;</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width220\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"OctRecNo\" />\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                        <my-date-picker name=\"OctPaidDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"OctPaidDate\"></my-date-picker>\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"OctAmount\" [maxlength]=\"30\" [OnlyNumber]=\"true\" />\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"OctRemark\" />\r\n                    </td>\r\n                    <td class=\"width60\">\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_Octroi_Dtls(0,'A', OctId, '', '','','')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetOctroi_Dtls()\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width150\">\r\n                        <span class=\"col-form-span-label\">Receipt Number</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Paid Date</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Amount</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Remark</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtOCTROI; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_Octroi_Dtls(i,'P', obj.pk_tblIndex, obj.OctRecNo, obj.OctRecPaidDT, obj.OctAmount, obj.OctRemark)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_Octroi_Dtls(i,'D', obj.pk_tblIndex, obj.OctRecNo, obj.OctRecPaidDT,'','')\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OctRecNo}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OctRecPaidDT}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OctAmount}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OctRemark}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table> -->\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr class=\"trheader\">\r\n                    <td colspan=\"4\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <b>DELIVERY DETAILS</b>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"rTruck\" [(ngModel)]=\"rTruck\" value=\"O\" (ngModelChange)=\"TruckOur=null;Supplier=null;TruckNo='';TruckType='';RateAgreed=''\"\r\n                            /> Our\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <ng-select [items]=\"TruckOurList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"TruckOur\"\r\n                            class=\"form-control\" [disabled]=\"rTruck!='O'\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"4\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"rTruck\" [(ngModel)]=\"rTruck\" value=\"H\" (ngModelChange)=\"TruckOur=null;RateAgreed=''\" /> Hired By Links &nbsp;&nbsp;&nbsp;\r\n                            <input type=\"radio\" name=\"rTruck\" [(ngModel)]=\"rTruck\" value=\"HI\" (ngModelChange)=\"TruckOur=null;RateAgreed=''\" /> Hired By Importer\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            Supplier\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <ng-select [items]=\"SupplierList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"Supplier\"\r\n                            class=\"form-control\" [disabled]=\"rTruck=='O'\">\r\n                        </ng-select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            Truck No\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TruckNo\" [disabled]=\"rTruck=='O'\" />\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            Truck Type\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TruckType\" [disabled]=\"rTruck=='O'\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            Rate Agreed\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"RateAgreed\" [disabled]=\"rTruck=='O'||rTruck=='HI'\" />\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                    </td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            Loading Date\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <my-date-picker name=\"DeliveryDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"DeliveryDate\"></my-date-picker>\r\n                    </td>\r\n                    <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">\r\n                            Remark\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DeliveryRemark\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"width60 centerlabel\">\r\n                        <button class=\"btn btn-sm btn-success\" (click)=\"fnAddEdit_Delivery_Dtls(0,'A', DeliveryId, '', '', '', '', '', '', '', '')\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </button>&nbsp;\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"resetDelivery_Dtls();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-undo\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <thead class=\"trbg\">\r\n                    <th class=\"width50\">\r\n                        <span class=\"col-form-span-label\"></span>\r\n                    </th>\r\n                    <th class=\"width150\">\r\n                        <span class=\"col-form-span-label\">Our/Hired</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Truck/Supplier</span>\r\n                    </th>\r\n                    <th class=\"width100\">\r\n                        <span class=\"col-form-span-label\">Truck No</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Truck Type</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Rate Agreed</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Date</span>\r\n                    </th>\r\n                    <th>\r\n                        <span class=\"col-form-span-label\">Remarks</span>\r\n                    </th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of dtDELIVERY; let i =index;\">\r\n                        <td class=\"width50\">\r\n                            <i class=\"fa fa-pencil-square-o\" (click)=\"fnAddEdit_Delivery_Dtls(i,'P', obj.pk_tblIndex, obj.OH_truck, obj.trackValue, obj.truck, obj.TruckNo, obj.TruckType, obj.RateAgreed, obj.DelDate, obj.DelRemark)\"></i>&nbsp;&nbsp;\r\n                            <i class=\"fa fa-trash-o\" style=\"color: red\" (click)=\"fnAddEdit_Delivery_Dtls(i,'D', obj.pk_tblIndex, obj.OH_truck, obj.trackValue, obj.truck, obj.TruckNo, obj.TruckType, obj.RateAgreed, obj.DelDate, obj.DelRemark)\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.OH_truck}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.truck}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.TruckNo}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.TruckType}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.RateAgreed}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DelDate}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj.DelRemark}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            Remark\r\n                        </span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <textarea class=\"form-control\" [(ngModel)]=\"ImpRemark\" rows=\"2\"></textarea>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            &nbsp;\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">\r\n                <tfoot style=\"background-color: #f0f3f5;\">\r\n                    <tr>\r\n                        <td colspan=\"12\" class=\"centerlabel\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"submit()\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <i class=\"fa fa-dot-circle-o\"></i> Submit</span>\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"abort()\">\r\n                                <span class=\"col-form-span-label\">\r\n                                    <i class=\"fa fa-ban\"></i> Abort</span>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/import/sea/sea.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/sea/sea.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row\">\r\n    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/import/sea/search.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/import/sea/search.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>Search</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"displayType=='SEARCH'\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table table-sm-new bgwhite\">\r\n                <tr class=\"trbg\">\r\n                    <td class=\"width150\">\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"CODE\" [(ngModel)]=\"Type\" />&nbsp;Import Code</span>\r\n                    </td>\r\n                    <td class=\"width130\">\r\n                        <input type=\"text\" [(ngModel)]=\"ImportCode\" class=\"form-control\" [maxlength]=\"15\" [OnlyNumber]=\"true\" [disabled]=\"Type!='CODE'\"\r\n                        />\r\n                    </td>\r\n                    <td>\r\n                        <button type=\"button\" name=\"printButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\" [disabled]=\"Type!='CODE'\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-print\"></i> Print</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"DATE\" [(ngModel)]=\"Type\" />&nbsp;Import Date Wise</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">From</span>\r\n                        <my-date-picker name=\"ImportFromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ImportFromDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">To</span>\r\n                        <my-date-picker name=\"ImportToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"ImportToDate\" [disabled]=\"Type!='DATE'\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"IMPORTER\" [(ngModel)]=\"Type\" />&nbsp;Importer</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"ImporterList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"Importer\"\r\n                            class=\"form-control\" [disabled]=\"Type!='IMPORTER'\">\r\n                        </ng-select>\r\n                        <div class=\"centerlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioImporter\" value=\"All\" [(ngModel)]=\"ImporterType\"  [disabled]=\"Type!='IMPORTER'\"/>&nbsp;All</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioImporter\" value=\"UC\" [(ngModel)]=\"ImporterType\"  [disabled]=\"Type!='IMPORTER'\"/>&nbsp;Under Clearence</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"BILLTO\" [(ngModel)]=\"Type\" />&nbsp;Bill To</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"BillToList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"BillTo\"\r\n                            class=\"form-control\" [disabled]=\"Type!='BILLTO'\">\r\n                        </ng-select>\r\n                        <div class=\"centerlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioBillTo\" value=\"All\" [(ngModel)]=\"BillToType\"  [disabled]=\"Type!='BILLTO'\"/>&nbsp;All</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioBillTo\" value=\"UC\" [(ngModel)]=\"BillToType\"  [disabled]=\"Type!='BILLTO'\"/>&nbsp;Under Clearence</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"VESSEL\" [(ngModel)]=\"Type\" />&nbsp;Vessel Name</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"VesselList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"Vessel\"\r\n                            class=\"form-control\" [disabled]=\"Type!='VESSEL'\">\r\n                        </ng-select>\r\n                        <div class=\"centerlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioVessel\" value=\"All\" [(ngModel)]=\"VesselType\"  [disabled]=\"Type!='VESSEL'\"/>&nbsp;All</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioVessel\" value=\"UC\" [(ngModel)]=\"VesselType\"  [disabled]=\"Type!='VESSEL'\"/>&nbsp;Under Clearence</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"AGENT\" [(ngModel)]=\"Type\" />&nbsp;Agent Name</span>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <ng-select [items]=\"AgentList\" bindLabel=\"DATATEXTFIELD\" bindValue=\"DATAVALUEFIELD\" placeholder=\"--Select--\" [(ngModel)]=\"Agent\"\r\n                            class=\"form-control\" [disabled]=\"Type!='AGENT'\">\r\n                        </ng-select>\r\n                        <div class=\"centerlabel\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioAgent\" value=\"All\" [(ngModel)]=\"AgentType\"  [disabled]=\"Type!='AGENT'\"/>&nbsp;All</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <span class=\"col-form-span-label\">\r\n                                <input type=\"radio\" name=\"radioAgent\" value=\"UC\" [(ngModel)]=\"AgentType\"  [disabled]=\"Type!='AGENT'\"/>&nbsp;Under Clearence</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg\">\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">\r\n                            <input type=\"radio\" name=\"check\" value=\"GL\" [(ngModel)]=\"Type\" />&nbsp;G.L Date Wise</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">From</span>\r\n                        <my-date-picker name=\"GlFromDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"GlFromDate\" [disabled]=\"Type!='GL'\"></my-date-picker>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"col-form-span-label\">To</span>\r\n                        <my-date-picker name=\"GlToDate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"GlToDate\" [disabled]=\"Type!='GL'\"></my-date-picker>\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"trbg centerlabel\">\r\n                    <td colspan=\"3\">\r\n                        <button type=\"button\" name=\"submitButton\" class=\"btn btn-sm btn-primary\" (click)=\"search();\">\r\n                            <span class=\"col-form-span-label\">\r\n                                <i class=\"fa fa-search\"></i> Search</span>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"displayType=='LIST'\">\r\n        <div class=\"col-sm-12 xyscroll\" style=\"height:300px;\">\r\n            <table class=\"table table-sm-new table-bordered bgwhite\">\r\n                <thead>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th colspan=\"8\">\r\n                            {{searchHeaderText}}\r\n                            <a href=\"javascript:void(0);\" (click)=\"displayType='SEARCH';searchList=[]\" style=\"float: right;text-decoration: underline;color: red;\">back to search</a>\r\n                        </th>\r\n                    </tr>\r\n                    <tr class=\"title-head formheading\">\r\n                        <th>Import Code</th>\r\n                        <th>Import Date</th>\r\n                        <th>Importer</th>\r\n                        <th>Vessel</th>\r\n                        <th>Agent</th>\r\n                        <th>Desc of Goods</th>\r\n                        <th>No. of Pkgs.</th>\r\n                        <th>Gross Weight</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let obj of searchList\">\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">\r\n                                <a href=\"javascript:void(0);\" (click)=\"redirectToEdit(obj['pk_ImpoterId'])\">{{obj[\"Import Code\"]}}</a>\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"Import Date\"]}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"Importer\"]}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"Vessel\"]}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"Agent\"]}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"Desc of Goods\"]}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"No. of Pkgs.\"]}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\">{{obj[\"Gross Weight\"]}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/import/sea/docket-print-search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/import/sea/docket-print-search.component.ts ***!
  \*************************************************************/
/*! exports provided: SeaDocketPrintSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaDocketPrintSearchComponent", function() { return SeaDocketPrintSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
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






var SeaDocketPrintSearchComponent = /** @class */ (function () {
    function SeaDocketPrintSearchComponent(_dataService, _loginService, _toasterService, _router, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._router = _router;
        this._loaderService = _loaderService;
        this.inputValue = '';
    }
    SeaDocketPrintSearchComponent.prototype.ngOnInit = function () {
        this.verifyPermission(125, "View");
    };
    SeaDocketPrintSearchComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this._loaderService.display(false);
        });
    };
    SeaDocketPrintSearchComponent.prototype.search = function () {
        var _this = this;
        if (this.inputValue == '') {
            this._toasterService.toast("warning", "Alert", "Please enter Import Code.");
            return false;
        }
        else if (this.inputValue.length != 15) {
            this._toasterService.toast("warning", "Alert", "Import Code should be 15 digit.");
            return false;
        }
        else {
            var _jsonData = {
                mode: 'Sea',
                importcode: this.inputValue
            };
            this._loaderService.display(true);
            this._dataService.getData("Import/SeaAirDocketPrint", _jsonData)
                .subscribe(function (data) {
                _this._loaderService.display(false);
                if (data.Table.length == 0) {
                    _this._toasterService.toast("warning", "Alert", "No record Found.");
                }
                else {
                    window.open("/#/new-tab/import-sea-docket-print/" + _this.inputValue, "_blank");
                }
            });
        }
    };
    SeaDocketPrintSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    SeaDocketPrintSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-import-sea-docket-print-search',
            template: __webpack_require__(/*! raw-loader!./docket-print-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/sea/docket-print-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], SeaDocketPrintSearchComponent);
    return SeaDocketPrintSearchComponent;
}());



/***/ }),

/***/ "./src/app/import/sea/entry-sea.component.ts":
/*!***************************************************!*\
  !*** ./src/app/import/sea/entry-sea.component.ts ***!
  \***************************************************/
/*! exports provided: EntrySeaImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrySeaImportComponent", function() { return EntrySeaImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
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







var EntrySeaImportComponent = /** @class */ (function () {
    function EntrySeaImportComponent(_router, _dataService, _toasterService, _loginService, _route, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._route = _route;
        this._loaderService = _loaderService;
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
            selectorHeight: '198px',
            selectorWidth: '200px'
        };
        this.FormHeader = '';
        this.ImporterList = [];
        this.BillToList = [];
        this.AgentList = [];
        this.InvoiceCurrencyList = [];
        this.FrightCurrencyList = [];
        this.InsuranceCurrencyList = [];
        this.CommissionCurrencyList = [];
        this.ShipmentPortList = [];
        this.TranshipmentPortList = [];
        this.TruckOurList = [];
        this.VesselNameList = [];
        this.TranshipmentVesselList = [];
        this.SupplierList = [];
        this.ContLengthList = [];
        this.ContTypeList = [];
        this.IncotermList = [];
        this.TypeOfPackage2List = [];
        this.SteTypeChargeList = [];
        this.BillOfEntryNoList = [];
        this.BusinessAssociateList = [];
        this.hdInvHasRec = '0';
        this.Iu_Mode = '';
        this.Mode = '';
        this.ImportId = '0';
        this.Importer = null;
        this.BillTo = null;
        this.VesselName = null;
        this.LinerAgent = null;
        this.BusinessAssociate = null;
        this.MblNo = '';
        this.MblDate = null;
        this.HblNo = '';
        this.HblDate = null;
        this.DirectVessel = 'YES';
        this.EXWORKS = false;
        this.CUSTOMCLR = false;
        this.FREIGHTFRD = false;
        this.TranshipmentVessel = null;
        this.TranshipmentPort = null;
        this.ArrivalPort = '';
        this.ShedNo = '';
        this.ExpectedArrDate = null;
        this.ActualArrDate = null;
        this.ArrivingICD = null;
        this.BankRefNo = '';
        this.PartyRefNo = '';
        this.GLDate = null;
        this.LastDate = null;
        this.FreeLastDate = null;
        this.ShipmentPort = null;
        this.DocumentCancel = false;
        this.RODdtID = 0;
        this.RODDate = null;
        this.RODRemark = '';
        this.DocCallForUsID = 0;
        this.DocumentName = '';
        this.DocumentRecOn = null;
        this.DescriptionGoods = '';
        this.NoOfPackages1 = '';
        this.TypeOfPackage2 = null;
        this.GrossWeight = '';
        this.NetWeight = '';
        this.ContId = 0;
        this.ContNo = '';
        this.ContLength = null;
        this.ContType = null;
        this.ContNoOfPackage = '';
        this.BillOfEntry = null;
        this.BillOfEntryNo = '';
        this.BillOfEntryDate = null;
        this.BillOfEntryRemark = '';
        this.CustomId = 0;
        this.CustomDocumentName = '';
        this.CustomSubmittedOn = null;
        this.CustomRemark = '';
        this.InvoiceId = 0;
        this.InvoiceNo = '';
        this.InvoiceDate = null;
        this.Incoterm = null;
        this.BriefIncoterm = '';
        this.FrightEnable = false;
        this.InsurenceEnable = false;
        this.LocalCurrency = {
            abb: '',
            cur: '',
            curname: ''
        };
        this.InvValue = '';
        this.InvCurrency = null;
        this.InvExchRate = '';
        this.InvTotInr = '0';
        this.FrightAmount = '';
        this.FrightCurrency = null;
        this.FrightExchRate = '';
        this.FrightTotInr = '0';
        this.InsuranceAmount = '';
        this.InsuranceCurrency = null;
        this.InsuranceExchRate = '';
        this.InsuranceTotInr = '0';
        this.CommissionAmount = '';
        this.CommissionCurrency = null;
        this.CommissionExchRate = '';
        this.CommissionTotInr = '0';
        this.CifAmount = '0';
        this.AccessableValue = '0';
        this.DutyId = 0;
        this.DutyPaid = '';
        this.DutyIns = '';
        this.DutyPaidOnDate = null;
        this.DutyCashNo = '';
        this.DutyRemark = '';
        this.AdvRecOne = '';
        this.AdvRecOneDate = null;
        this.AdvRecTwo = '';
        this.AdvRecTwoDate = null;
        this.AdvRecThree = '';
        this.AdvRecThreeDate = null;
        this.AdvRecFour = '';
        this.AdvRecFourDate = null;
        this.ExaminationDate = null;
        this.ExaminationRemark = '';
        this.AssessmentDate = null;
        this.AssessmentRemark = '';
        this.CustomClerk = '';
        this.DockClerk = '';
        this.SteId = 0;
        this.SteTypeCharge = '';
        this.SteRecNo = '';
        this.StePayDate = null;
        this.SteAmount = '';
        this.SteRemark = '';
        this.PortId = 0;
        this.PortRecNo = '';
        this.PortPaidDate = null;
        this.PortAmount = '';
        this.PortRemark = '';
        this.OctId = 0;
        this.OctRecNo = '';
        this.OctPaidDate = null;
        this.OctAmount = '';
        this.OctRemark = '';
        this.DeliveryId = 0;
        this.rTruck = 'O';
        this.TruckOur = null;
        this.Supplier = null;
        this.TruckNo = '';
        this.TruckType = '';
        this.RateAgreed = '';
        this.DeliveryDate = null;
        this.DeliveryRemark = '';
        this.ImpRemark = '';
        this.voyno = "";
        this.IGMNo = "";
        this.ArrivalPortPOD = "";
        this.Finaldest = "";
        this.dtfinaldest = null;
        this.onlinesuubDt = null;
        this.submissionBy = "0";
        this.dutyamt = "";
        this.StampDutyAmt = "";
        this.DutyPaidBy = 'LNK';
        this.DOrecvdOn = null;
        this.validatedt = null;
        this.deliverymode = 'CFS';
        this.IGMdt = null;
        this.Arrivalportlist = [];
        this.userdtls = [];
        this.dtDATEOFROD = [];
        this.dtGOOD = [];
        this.dtDOCSUB = [];
        this.dtDUTY = [];
        this.dtSTEAGENT = [];
        this.dtPORTCFS = [];
        this.dtOCTROI = [];
        this.dtDELIVERY = [];
        this.dtINVOICE = [];
        this.dtCALLFORUS = [];
    }
    ;
    EntrySeaImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            if (params["import-id"]) {
                _this.ImportId = params["import-id"];
                _this.Iu_Mode = 'UPDATE';
                _this.FormHeader = 'UPDATE - IMPORT SEA';
                _this.verifyPermission(126, "Modify");
            }
            else {
                _this.FormHeader = 'ADD - IMPORT SEA';
                _this.Iu_Mode = 'ADD';
                _this.verifyPermission(126, "Add");
            }
        });
    };
    EntrySeaImportComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (_this._loginService.checkVerify(userMode, data)) {
                _this.fillCommonDropdownList();
            }
            else {
                _this._loaderService.display(false);
            }
        });
    };
    EntrySeaImportComponent.prototype.fillCommonDropdownList = function () {
        var _this = this;
        var _jsonData = {
            mode: 'Sea',
            iu_mode: this.Iu_Mode,
            citycode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Import/Fill_Dropdown", _jsonData)
            .subscribe(function (data) {
            _this.getLocalCurrency();
            _this.ImporterList = data.Table;
            _this.BillToList = data.Table;
            _this.AgentList = data.Table1;
            _this.InvoiceCurrencyList = data.Table2;
            _this.FrightCurrencyList = data.Table2;
            _this.InsuranceCurrencyList = data.Table2;
            _this.CommissionCurrencyList = data.Table2;
            _this.ShipmentPortList = data.Table4;
            _this.TranshipmentPortList = data.Table4;
            _this.TruckOurList = data.Table5;
            _this.VesselNameList = data.Table6;
            _this.TranshipmentVesselList = data.Table7;
            _this.SupplierList = data.Table8;
            _this.ContLengthList = data.Table9;
            _this.ContLength = (data.Table9.length > 0) ? data.Table9[0]["length"] : null;
            _this.ContTypeList = data.Table10;
            _this.IncotermList = data.Table11;
            _this.TypeOfPackage2List = data.Table12;
            _this.SteTypeChargeList = data.Table13;
            _this.BillOfEntryNoList = data.Table15;
            _this.BusinessAssociateList = data.Table16;
            _this.Arrivalportlist = data.Table17;
            _this.userdtls = data.Table18;
            _this.populate(_this.ImportId);
        });
    };
    EntrySeaImportComponent.prototype.getLocalCurrency = function () {
        var _this = this;
        var _jsonData = {
            citycode1: this._loginService.getLogin()[0].CITYCODE1,
        };
        this._dataService.getData("Import/GetLocalCurrency", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table.length > 0) {
                _this.LocalCurrency["abb"] = data.Table[0]["Abb"];
                _this.LocalCurrency["cur"] = data.Table[0]["LocalCurrency"].split("|")[0];
                _this.LocalCurrency["curname"] = data.Table[0]["LocalCurrency"].split("|")[1];
            }
        });
    };
    EntrySeaImportComponent.prototype.populate = function (importId) {
        var _this = this;
        var _jsonData = {
            importid: importId,
        };
        this._dataService.getData("Import/populate_import", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.filltable(importId);
            if (data.Table.length > 0) {
                if (_this.ImportId != 0) {
                    _this.populateImport(data.Table);
                }
            }
        });
    };
    EntrySeaImportComponent.prototype.filltable = function (pkid) {
        var _this = this;
        var _jsonArrayData = [
            { ImportId: pkid, TableNo: "01", TableName: "DATEOFROD" },
            { ImportId: pkid, TableNo: "02", TableName: "GOOD" },
            { ImportId: pkid, TableNo: "03", TableName: "DOCSUB" },
            { ImportId: pkid, TableNo: "04", TableName: "DUTY" },
            { ImportId: pkid, TableNo: "05", TableName: "STEAGENT" },
            { ImportId: pkid, TableNo: "06", TableName: "PORTCFS" },
            { ImportId: pkid, TableNo: "07", TableName: "OCTROI" },
            { ImportId: pkid, TableNo: "08", TableName: "DELIVERY" },
            { ImportId: pkid, TableNo: "09", TableName: "INVOICE" },
            { ImportId: pkid, TableNo: "10", TableName: "CALLFORUS" },
        ];
        this._dataService.Common("Import/filltables", _jsonArrayData)
            .subscribe(function (data) {
            _this.dtDATEOFROD = data.DATEOFROD;
            _this.dtGOOD = data.GOOD;
            _this.dtDOCSUB = data.DOCSUB;
            _this.dtDUTY = data.DUTY;
            _this.dtSTEAGENT = data.STEAGENT;
            _this.dtPORTCFS = data.PORTCFS;
            _this.dtOCTROI = data.OCTROI;
            _this.dtDELIVERY = data.DELIVERY;
            _this.dtINVOICE = data.INVOICE;
            _this.hdInvHasRec = (_this.dtINVOICE.length > 0) ? "1" : "0";
            _this.dtCALLFORUS = data.CALLFORUS;
        });
    };
    EntrySeaImportComponent.prototype.populateImport = function (data) {
        var popObject = data[0];
        this.Importer = popObject.fk_Importer;
        this.BillTo = popObject.fk_BillTo;
        this.VesselName = popObject.fk_Vessel_Airline; //popObject.fk_Vessel_Airline;
        this.LinerAgent = popObject.fk_Agent_Name;
        this.MblNo = popObject.Mbl_Mabl_NO;
        this.MblDate = (popObject.Mbl_Mabl_DT) ? this._dataService.stringdttoArry(popObject.Mbl_Mabl_DT) : null;
        this.HblNo = popObject.Bbl_Habl_NO;
        this.HblDate = (popObject.Bbl_Habl_DT) ? this._dataService.stringdttoArry(popObject.Bbl_Habl_DT) : null;
        this.DirectVessel = popObject.Dir_vessel.trim();
        this.TranshipmentVessel = (popObject.fk_Tran_Vessel_Airline != "") ? popObject.fk_Tran_Vessel_Airline : null;
        this.TranshipmentPort = (popObject.fk_Trans_Port != "") ? popObject.fk_Trans_Port : null;
        this.BankRefNo = popObject.Bank_Ref_No;
        this.PartyRefNo = popObject.Party_Ref_No;
        this.GLDate = (popObject.GlDate) ? this._dataService.stringdttoArry(popObject.GlDate) : null;
        this.LastDate = popObject.LastFreeDate;
        this.ShipmentPort = (popObject.fK_Port_of_Shipment != "") ? popObject.fK_Port_of_Shipment : null;
        this.DescriptionGoods = popObject.Desc_Good;
        this.NoOfPackages1 = popObject.NumOfPkg1;
        this.TypeOfPackage2 = (popObject.fk_TypeOfPackage != "") ? popObject.fk_TypeOfPackage : null;
        this.GrossWeight = popObject.GrossWt;
        this.NetWeight = popObject.NetWt;
        this.BillOfEntryNo = popObject.Bill_EntryNO;
        this.BillOfEntryDate = (popObject.BOE_Date) ? this._dataService.stringdttoArry(popObject.BOE_Date) : null;
        this.BillOfEntryRemark = popObject.BOE_Remark;
        this.InvoiceNo = popObject.Invoice_No;
        this.InvoiceDate = (popObject.Invoice_Date) ? this._dataService.stringdttoArry(popObject.Invoice_Date) : null;
        this.Incoterm = (popObject.fk_Incoterm != "") ? popObject.fk_Incoterm : null;
        this.checkEnableIncoterm();
        this.InvValue = popObject.InvoiceValue;
        this.InvCurrency = (popObject.fk_Inv_Currency != "|") ? (popObject.fk_Inv_Currency != "0|") ? popObject.fk_Inv_Currency : null : null;
        this.InvExchRate = popObject.InvExchRate;
        this.InvTotInr = popObject.Inv_Total;
        this.FrightAmount = popObject.Fright_Amount;
        //this.hdFriCurrency        ignore model
        this.FrightCurrency = (popObject.fk_Fri_Currency != "|") ? (popObject.fk_Fri_Currency != "") ? popObject.fk_Fri_Currency : null : null;
        this.FrightExchRate = popObject.FrightExchRate;
        this.FrightTotInr = popObject.Fright_Total;
        this.InsuranceAmount = popObject.Ins_Amount;
        //this.hdInsCurrency        ignore model
        this.InsuranceCurrency = (popObject.fk_Ins_Currency != "|") ? (popObject.fk_Ins_Currency != "") ? popObject.fk_Ins_Currency : null : null;
        this.InsuranceExchRate = popObject.InsExchRate;
        this.InsuranceTotInr = popObject.Ins_Total;
        this.CommissionAmount = popObject.Com_Amount;
        //this.hdCommissionCurrency        ignore model
        this.CommissionCurrency = (popObject.fk_Com_Currency != "|") ? (popObject.fk_Com_Currency != "") ? popObject.fk_Com_Currency : null : null;
        this.CommissionExchRate = popObject.ComExchRate;
        this.CommissionTotInr = popObject.Com_Total;
        this.CifAmount = popObject.CIF_Amount;
        this.AccessableValue = popObject.Access_Value;
        this.AdvRecOne = popObject.AdvRec1;
        this.AdvRecOneDate = (popObject.AdvRec1_Date) ? this._dataService.stringdttoArry(popObject.AdvRec1_Date) : null;
        this.AdvRecTwo = popObject.AdvRec2;
        this.AdvRecTwoDate = (popObject.AdvRec2_Date) ? this._dataService.stringdttoArry(popObject.AdvRec2_Date) : null;
        this.AdvRecThree = popObject.AdvRec3;
        this.AdvRecThreeDate = (popObject.AdvRec3_Date) ? this._dataService.stringdttoArry(popObject.AdvRec3_Date) : null;
        this.AdvRecFour = popObject.AdvRec4;
        this.AdvRecFourDate = (popObject.AdvRec4_Date) ? this._dataService.stringdttoArry(popObject.AdvRec4_Date) : null;
        this.ExaminationDate = (popObject.Exam_Date) ? this._dataService.stringdttoArry(popObject.Exam_Date) : null;
        this.ExaminationRemark = popObject.Exam_Remark;
        this.AssessmentDate = (popObject.Assess_Date) ? this._dataService.stringdttoArry(popObject.Assess_Date) : null;
        this.AssessmentRemark = popObject.Assess_Remark;
        this.CustomClerk = popObject.Custom_Clerk;
        this.DockClerk = popObject.Dock_Clerk;
        this.ArrivingICD = (popObject.ArrivingDateAtICD) ? this._dataService.stringdttoArry(popObject.ArrivingDateAtICD) : null;
        this.ImpRemark = popObject.Remark;
        this.FormHeader = "Update - Import Sea - " + popObject.Import_Code + " - " + popObject.Import_Date;
        this.BusinessAssociate = (popObject.BusinessAssociate != "") ? popObject.BusinessAssociate : null;
        this.BillOfEntry = (popObject.fk_BillOfEntry != "") ? popObject.fk_BillOfEntry : null;
        this.DocumentCancel = (popObject.Doc_Cancel == "Y") ? true : false;
        this.EXWORKS = (popObject.ExWork == 'EX') ? true : false;
        this.CUSTOMCLR = (popObject.CustomClr == 'CUSTOM') ? true : false;
        this.FREIGHTFRD = (popObject.Freightfrd == 'FRTFRD') ? true : false;
        this.VesselName = popObject.vsl_name;
        this.voyno = popObject.vsl_voyageno;
        this.IGMNo = popObject.vsl_IGMno;
        this.ArrivalPort = popObject.vsl_Arrivalport;
        this.ShedNo = popObject.vsl_Berthno;
        this.Finaldest = popObject.FINAL_DESTPORT;
        this.dtfinaldest = (popObject.ARRV_DTFINALDEST) ? this._dataService.stringdttoArry(popObject.ARRV_DTFINALDEST) : null;
        this.onlinesuubDt = (popObject.ARRV_DTFINALDEST) ? this._dataService.stringdttoArry(popObject.ARRV_DTFINALDEST) : null;
        this.submissionBy = popObject.ONLINE_SUB_BY;
        this.dutyamt = popObject.DUTY_AMT;
        this.StampDutyAmt = popObject.STAMP_DUTY;
        this.DutyPaidBy = popObject.DUTYPAIDBY;
        this.DOrecvdOn = (popObject.ArrivingDateAtICD) ? this._dataService.stringdttoArry(popObject.ArrivingDateAtICD) : null;
        this.validatedt = (popObject.DELIVERY_VALIDATE_DT) ? this._dataService.stringdttoArry(popObject.DELIVERY_VALIDATE_DT) : null;
        this.deliverymode = popObject.DELIVERYMODE;
        this.ArrivalPortPOD = popObject.VSL_ARRIVALPORTPOD;
        this.IGMdt = (popObject.IGMdt) ? this._dataService.stringdttoArry(popObject.IGMdt) : null;
        this.ExpectedArrDate = (popObject.Exp_Arrival_Date) ? this._dataService.stringdttoArry(popObject.Exp_Arrival_Date) : null;
        this.ActualArrDate = (popObject.Act_Arrival_Date) ? this._dataService.stringdttoArry(popObject.Act_Arrival_Date) : null;
    };
    EntrySeaImportComponent.prototype.moreDetails = function () {
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = 'resizable=no,scrollbars=no,width=886,height=438,status=no,left=' + theLeft + ',top=' + theTop;
        window.open('./#/information/import/incoterm-information', "Clp_View", toolbar);
    };
    EntrySeaImportComponent.prototype.onTypeChange = function (type) {
        if (type == 'E') {
            this.CUSTOMCLR = false;
            this.FREIGHTFRD = false;
        }
        else if (type == 'C' || type == 'F') {
            this.EXWORKS = false;
        }
    };
    EntrySeaImportComponent.prototype.changeVesselName = function () {
        this.TranshipmentVessel = this.VesselName;
        this.changeTranVesselName();
    };
    EntrySeaImportComponent.prototype.changeTranVesselName = function () {
        if (this.TranshipmentVessel != null) {
            var TextValue = this.TranshipmentVessel;
            var TextSplit = TextValue.split('|');
            this.ArrivalPort = TextSplit[5] + "|" + TextSplit[6];
            this.ShedNo = TextSplit[8];
            this.ExpectedArrDate = TextSplit[3];
            this.ActualArrDate = TextSplit[4];
        }
        else if (this.VesselName != null) {
            var TextValue = this.VesselName;
            var TextSplit = TextValue.split('|');
            this.ArrivalPort = TextSplit[5] + "|" + TextSplit[6];
            this.ShedNo = TextSplit[8];
            this.ExpectedArrDate = TextSplit[3];
            this.ActualArrDate = TextSplit[4];
        }
        else {
            this.ArrivalPort = '';
            this.ShedNo = '';
            this.ExpectedArrDate = '';
            this.ActualArrDate = '';
        }
    };
    EntrySeaImportComponent.prototype.changeDrpContainerSize = function (contType) {
        var _this = this;
        if (this.ContLength) {
            var _jsonData = {
                container_size: this.ContLength,
            };
            this._loaderService.display(true);
            this._dataService.getData("Import/GetContainerType", _jsonData)
                .subscribe(function (data) {
                _this._loaderService.display(false);
                _this.ContTypeList = data.Table;
                _this.ContType = contType;
            });
        }
    };
    EntrySeaImportComponent.prototype.checkEnableIncoterm = function () {
        if (this.Incoterm) {
            if (this.Incoterm.split('|')[1] == 'N') {
                this.freightEnable(true);
            }
            else {
                this.freightEnable(false);
            }
            if (this.Incoterm.split('|')[2] == 'N') {
                this.insurenceEnable(true);
            }
            else {
                this.insurenceEnable(false);
            }
            this.BriefIncoterm = this.Incoterm.split('|')[3];
        }
        else {
            this.BriefIncoterm = '';
            this.FrightEnable = false;
            this.InsurenceEnable = false;
        }
    };
    EntrySeaImportComponent.prototype.freightEnable = function (value) {
        this.FrightEnable = value;
        if (value) {
            this.FrightAmount = '';
            this.FrightCurrency = null;
            this.FrightExchRate = 0;
        }
    };
    EntrySeaImportComponent.prototype.insurenceEnable = function (value) {
        this.InsurenceEnable = value;
        if (value) {
            this.InsuranceAmount = '';
            this.InsuranceCurrency = null;
            this.InsuranceExchRate = 0;
        }
    };
    EntrySeaImportComponent.prototype.amountValidationInvoice = function (ctrlAmount, drpCntl, exchCtrl) {
        if (Math.abs(this[ctrlAmount]) == 0) {
            if (ctrlAmount == "InvValue") {
                this.clearInvoiceDtls('FrightAmount', 'FrightCurrency', 'FrightExchRate');
                this.clearInvoiceDtls('InsuranceAmount', 'InsuranceCurrency', 'InsuranceExchRate');
                this.clearInvoiceDtls('CommissionAmount', 'CommissionCurrency', 'CommissionExchRate');
            }
            this[ctrlAmount] = "";
            this[drpCntl] = null;
            this[exchCtrl] = "";
        }
        this.sumAmount();
    };
    EntrySeaImportComponent.prototype.clearInvoiceDtls = function (ctrlAmount, drpCntl, exchCtrl) {
        this[ctrlAmount] = "";
        this[drpCntl] = null;
        this[exchCtrl] = "";
    };
    EntrySeaImportComponent.prototype.sumAmount = function () {
        this.InvTotInr = Math.round(Math.abs(this.InvValue) * Math.abs(this.InvExchRate) * 100) / 100;
        this.FrightTotInr = Math.round(Math.abs(this.FrightAmount) * Math.abs(this.FrightExchRate) * 100) / 100;
        this.InsuranceTotInr = Math.round(Math.abs(this.InsuranceAmount) * Math.abs(this.InsuranceExchRate) * 100) / 100;
        this.CommissionTotInr = Math.round(Math.abs(this.CommissionAmount) * Math.abs(this.CommissionExchRate) * 100) / 100;
        this.cifAmount();
    };
    EntrySeaImportComponent.prototype.cifAmount = function () {
        var cifAmount = 0;
        cifAmount = Math.round((Math.abs(this.InvTotInr) + Math.abs(this.FrightTotInr) + Math.abs(this.InsuranceTotInr) + Math.abs(this.CommissionTotInr)) * 100) / 100;
        this.CifAmount = cifAmount;
        var accValue = Math.round(cifAmount * 1.01).toString() + ".00";
        //var accValue = pad_with_zeros(Math.round(CifAmt*1.01),2)
        //alert(Math.round(CifAmt*1.01))
        this.AccessableValue = accValue;
    };
    EntrySeaImportComponent.prototype.checkCurrency = function (drpCntl, ctrlAmount, exchCtrl) {
        if (this.Incoterm) {
            if (this.checkValues(ctrlAmount, drpCntl)) {
                var textSplit = this[drpCntl].split('|');
                if (textSplit[0] == this.LocalCurrency["cur"]) {
                    this[exchCtrl] = 1;
                    document.getElementById(exchCtrl).readOnly = true;
                }
                else {
                    this[exchCtrl] = (textSplit[1] != "") ? textSplit[1] : 0;
                    document.getElementById(exchCtrl).readOnly = false;
                }
            }
        }
        else {
            document.getElementById(drpCntl).value = null;
            this[drpCntl] = null;
            alert("Select Incoterm...");
        }
        this.sumAmount();
    };
    EntrySeaImportComponent.prototype.checkValues = function (CtrlName, DrpCtrl) {
        if (Math.abs(this[CtrlName]) == 0) {
            alert("Amount Value Should not be empty...");
            document.getElementById(DrpCtrl).value = null;
            return false;
        }
        return true;
    };
    EntrySeaImportComponent.prototype.amountValidationInvExchChange = function (ctrlAmount, drpCtrl) {
        if (this[ctrlAmount] != "") {
            // if (ValidationforDigits(ctrlAmount, 10) == false) return false;
            // if (ValidationforAfterDigits(ctrlAmount, 3) == false) return false;
            // if (IsNumericDouble(ctrlAmount, "Exchange Rate") == false) return false;
            //else 
            this.InvExchChange(drpCtrl, ctrlAmount);
        }
    };
    EntrySeaImportComponent.prototype.InvExchChange = function (drpCtrl, ctrlAmount) {
        if (this[drpCtrl] != null) {
            this.sumAmount();
        }
        else {
            this[ctrlAmount] = 0;
            alert("Please select Currency..");
        }
    };
    EntrySeaImportComponent.prototype.fnAddEdit_DateOfROD_Dtls = function (index, type, pk_tblIndex, date, remark) {
        if (type == 'A') {
            if (!this.RODDate) {
                alert("Date Of Receipt Of Document Should not be Empty.");
                return false;
            }
            if (this._dataService.DateFromAndToComparision(this.RODDate.formatted, this._dataService.getCurrentdate())) {
                alert("Date Of Receipt Of Document Should be less than or equal to " + this._dataService.getCurrentdate());
                return false;
            }
            if (this.dtDATEOFROD.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtDATEOFROD.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_1 = this.dtDATEOFROD.indexOf(updateItem);
                this.dtDATEOFROD[index_1]["DateOfRODdt"] = this.RODDate.formatted;
                this.dtDATEOFROD[index_1]["DateOfRODremark"] = this.RODRemark;
            }
            else {
                this.dtDATEOFROD.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__DateOfROD_DtlsId: "",
                    pk_tblIndex: (this.dtDATEOFROD.length > 0) ? Math.max.apply(Math, this.dtDATEOFROD.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    DateOfRODdt: this.RODDate.formatted,
                    DateOfRODremark: this.RODRemark,
                });
            }
            this.resetDateOfROD();
        }
        else if (type == 'P') {
            this.RODdtID = pk_tblIndex;
            this.RODDate = this._dataService.stringdttoArry(date);
            this.RODRemark = remark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure want to delete Date of Receipt of Document date " + date)) {
                this.dtDATEOFROD.splice(index, 1);
                this.resetDateOfROD();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetDateOfROD = function () {
        this.RODdtID = 0;
        this.RODDate = null;
        this.RODRemark = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_DocCallForUs_Dtls = function (index, type, pk_tblIndex, name, date) {
        if (type == 'A') {
            if (!this.DocumentName) {
                alert("Document Name Should not be Empty.");
                return false;
            }
            if (this.dtCALLFORUS.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtCALLFORUS.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_2 = this.dtCALLFORUS.indexOf(updateItem);
                this.dtCALLFORUS[index_2]["DocName"] = this.DocumentName;
                this.dtCALLFORUS[index_2]["ReceivedOn"] = this.DocumentRecOn.formatted;
            }
            else {
                this.dtCALLFORUS.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk_DocCall_DtlsId: "",
                    pk_tblIndex: (this.dtCALLFORUS.length > 0) ? Math.max.apply(Math, this.dtCALLFORUS.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    DocName: this.DocumentName,
                    ReceivedOn: this.DocumentRecOn.formatted,
                    AcknowledgedOn: "",
                    ISEDIT: 0
                });
            }
            this.resetDocCallForUs();
        }
        else if (type == 'P') {
            this.DocCallForUsID = pk_tblIndex;
            this.DocumentName = name;
            this.DocumentRecOn = this._dataService.stringdttoArry(date);
        }
        else if (type == 'D') {
            if (confirm("Are you sure want to delete Document " + name)) {
                this.dtCALLFORUS.splice(index, 1);
                this.resetDocCallForUs();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetDocCallForUs = function () {
        this.DocCallForUsID = 0;
        this.DocumentName = '';
        this.DocumentRecOn = null;
    };
    EntrySeaImportComponent.prototype.fnAddEdit_Good_Dtls = function (index, type, pk_tblIndex, contno, contlength, contype, noofpackage) {
        var _this = this;
        if (type == 'A') {
            if (!this.ContNo) {
                alert("Container Number Should not be Empty.");
                return false;
            }
            if (this.ContNo.length != 11) {
                alert("Please enter 11 digit Container Number..");
                return false;
            }
            if (!this.ContType) {
                alert("Please Select Container Type..");
                return false;
            }
            if (this.ContId != 0) {
                var updateItem = this.dtGOOD.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_3 = this.dtGOOD.indexOf(updateItem);
                this.dtGOOD[index_3]["ContainerNumber"] = this.ContNo;
                this.dtGOOD[index_3]["ContLength"] = this.ContLength;
                this.dtGOOD[index_3]["ContType"] = this.ContType;
                this.dtGOOD[index_3]["NoOfPackages"] = this.ContNoOfPackage;
                this.dtGOOD[index_3]["ContainerSize"] = this.ContTypeList.find(function (key) { return key.DATAVALUEFIELD == _this.ContType; }).DATATEXTFIELD;
            }
            else {
                this.dtGOOD.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__Good_DtlsId: "",
                    pk_tblIndex: (this.dtGOOD.length > 0) ? Math.max.apply(Math, this.dtGOOD.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    ContainerNumber: this.ContNo,
                    ContainerSize: this.ContTypeList.find(function (key) { return key.DATAVALUEFIELD == _this.ContType; }).DATATEXTFIELD,
                    NoOfPackages: this.ContNoOfPackage,
                    ContLength: (this.ContLength) ? this.ContLength : "",
                    ContType: this.ContType
                });
            }
            this.resetGood_Dtls();
        }
        else if (type == 'P') {
            this.ContId = pk_tblIndex;
            this.ContNo = contno;
            this.ContLength = contlength;
            this.ContNoOfPackage = noofpackage;
            this.changeDrpContainerSize(contype);
            //this.ContType=" "+ contype;
        }
        else if (type == 'D') {
            if (confirm("Are you sure want to delete Container No." + contno)) {
                this.dtGOOD.splice(index, 1);
                this.resetGood_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetGood_Dtls = function () {
        this.ContId = 0;
        this.ContNo = '';
        this.ContType = null;
        this.ContNoOfPackage = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_BOE_Dtls = function (index, type, pk_tblIndex, name, date, remark) {
        if (type == 'A') {
            if (!this.CustomDocumentName) {
                alert("Document Name Should not be Empty.");
                return false;
            }
            if (!this.CustomSubmittedOn) {
                alert("Date Should not be Empty.");
                return false;
            }
            if (!this.CustomRemark) {
                alert("Remark Should not be Empty.");
                return false;
            }
            if (this.dtDOCSUB.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtDOCSUB.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_4 = this.dtDOCSUB.indexOf(updateItem);
                this.dtDOCSUB[index_4]["BOEno"] = this.CustomDocumentName;
                this.dtDOCSUB[index_4]["BOEdt"] = this.CustomSubmittedOn.formatted;
                this.dtDOCSUB[index_4]["BOEremark"] = this.CustomRemark;
            }
            else {
                this.dtDOCSUB.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__BOE_DtlsId: "",
                    pk_tblIndex: (this.dtDOCSUB.length > 0) ? Math.max.apply(Math, this.dtDOCSUB.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    BOEno: this.CustomDocumentName,
                    BOEdt: this.CustomSubmittedOn.formatted,
                    BOEremark: this.CustomRemark
                });
            }
            this.resetBOE_Dtls();
        }
        else if (type == 'P') {
            this.CustomId = pk_tblIndex;
            this.CustomDocumentName = name;
            this.CustomSubmittedOn = this._dataService.stringdttoArry(date);
            this.CustomRemark = remark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure want to delete Bill of Entry No." + date)) {
                this.dtDOCSUB.splice(index, 1);
                this.resetBOE_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetBOE_Dtls = function () {
        this.CustomId = 0;
        this.CustomDocumentName = '';
        this.CustomSubmittedOn = null;
        this.CustomRemark = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_Invoice_Dtls = function (index, type, pk_tblIndex, invno, invdate) {
        if (type == 'A') {
            if (!this.InvoiceNo) {
                alert("Invoice No Should not be Empty.");
                return false;
            }
            if (!this.InvoiceDate) {
                alert("Invoice Date Should not be Empty.");
                return false;
            }
            if (this.dtINVOICE.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtINVOICE.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_5 = this.dtINVOICE.indexOf(updateItem);
                this.dtINVOICE[index_5]["Invoice_No"] = this.InvoiceNo;
                this.dtINVOICE[index_5]["Invoice_Date"] = this.InvoiceDate.formatted;
            }
            else {
                this.dtINVOICE.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk_Inv_DtlsId: "",
                    pk_tblIndex: (this.dtINVOICE.length > 0) ? Math.max.apply(Math, this.dtINVOICE.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    Invoice_No: this.InvoiceNo,
                    Invoice_Date: this.InvoiceDate.formatted,
                });
            }
            this.resetInvoice_Dtls();
        }
        else if (type == 'P') {
            this.InvoiceId = pk_tblIndex;
            this.InvoiceNo = invno;
            this.InvoiceDate = this._dataService.stringdttoArry(invdate);
        }
        else if (type == 'D') {
            if (confirm("Are you sure you want to delete Invoice No. " + invno + "?")) {
                this.dtINVOICE.splice(index, 1);
                this.resetInvoice_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetInvoice_Dtls = function () {
        this.InvoiceId = 0;
        this.InvoiceNo = '';
        this.InvoiceDate = null;
    };
    EntrySeaImportComponent.prototype.fnAddEdit_Duty_Dtls = function (index, type, pk_tblIndex, dutypaid, dutyins, dutypaidon, dutycashno, dutyremark) {
        if (type == 'A') {
            if (!this.DutyPaid && !this.DutyIns) {
                alert("Please enter any one of Duty Paid or Interest.");
                return false;
            }
            if (!this.DutyPaidOnDate) {
                alert("Date Should not be Empty.");
                return false;
            }
            if (!this.DutyCashNo) {
                alert("Cash No Should not be Empty.");
                return false;
            }
            if (this.dtDUTY.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtDUTY.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_6 = this.dtDUTY.indexOf(updateItem);
                this.dtDUTY[index_6]["DutyPaid"] = this.DutyPaid;
                this.dtDUTY[index_6]["DutyIns"] = this.DutyIns;
                this.dtDUTY[index_6]["DutyPaidOn"] = this.DutyPaidOnDate.formatted;
                this.dtDUTY[index_6]["DutyCashNo"] = this.DutyCashNo;
                this.dtDUTY[index_6]["DutyRemark"] = this.DutyRemark;
            }
            else {
                this.dtDUTY.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__DateOfROD_DtlsId: "",
                    pk_tblIndex: (this.dtDUTY.length > 0) ? Math.max.apply(Math, this.dtDUTY.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    DutyPaid: this.DutyPaid,
                    DutyIns: this.DutyIns,
                    DutyPaidOn: this.DutyPaidOnDate.formatted,
                    DutyCashNo: this.DutyCashNo,
                    DutyRemark: this.DutyRemark
                });
            }
            this.resetDuty_Dtls();
        }
        else if (type == 'P') {
            this.DutyId = pk_tblIndex;
            this.DutyPaid = dutypaid;
            this.DutyIns = dutyins;
            this.DutyPaidOnDate = this._dataService.stringdttoArry(dutypaidon);
            this.DutyCashNo = dutycashno;
            this.DutyRemark = dutyremark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure you want to delete Duty Paid. " + dutypaid + "?")) {
                this.dtDUTY.splice(index, 1);
                this.resetDuty_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetDuty_Dtls = function () {
        this.DutyId = 0;
        this.DutyPaid = '';
        this.DutyIns = '';
        this.DutyPaidOnDate = null;
        this.DutyCashNo = '';
        this.DutyRemark = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_SteAgent_Dtls = function (index, type, pk_tblIndex, stetype, sterecno, stepaydate, steamount, steremark) {
        var _this = this;
        if (type == 'A') {
            if (!this.SteTypeCharge) {
                alert("Please select Steamer Agent Charges Type");
                return false;
            }
            if (!this.SteRecNo) {
                alert("Steamer Agent Receipt No Should not be Empty.");
                return false;
            }
            if (!this.StePayDate) {
                alert("Date Should not be Empty.");
                return false;
            }
            if (!this.SteAmount) {
                alert("Amount Should not be Empty.");
                return false;
            }
            if (!this.SteRemark) {
                alert("Remark Should not be Empty.");
                return false;
            }
            if (this.dtSTEAGENT.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtSTEAGENT.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_7 = this.dtSTEAGENT.indexOf(updateItem);
                this.dtSTEAGENT[index_7]["SteType"] = this.SteTypeCharge;
                this.dtSTEAGENT[index_7]["SteRecNo"] = this.SteRecNo;
                this.dtSTEAGENT[index_7]["StePaydt"] = this.StePayDate.formatted;
                this.dtSTEAGENT[index_7]["SteAmount"] = this.SteAmount;
                this.dtSTEAGENT[index_7]["SteTypeValue"] = this.SteTypeChargeList.find(function (key) { return key.DATAVALUEFIELD == _this.SteTypeCharge; }).DATATEXTFIELD;
                this.dtSTEAGENT[index_7]["SteRemark"] = this.SteRemark;
            }
            else {
                this.dtSTEAGENT.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__SteAgent_DtlsId: "",
                    pk_tblIndex: (this.dtSTEAGENT.length > 0) ? Math.max.apply(Math, this.dtSTEAGENT.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    SteType: this.SteTypeCharge,
                    SteRecNo: this.SteRecNo,
                    StePaydt: this.StePayDate.formatted,
                    SteAmount: this.SteAmount,
                    SteTypeValue: this.SteTypeChargeList.find(function (key) { return key.DATAVALUEFIELD == _this.SteTypeCharge; }).DATATEXTFIELD,
                    SteRemark: this.SteRemark
                });
            }
            this.resetSteAgent_Dtls();
        }
        else if (type == 'P') {
            this.SteId = pk_tblIndex;
            this.SteTypeCharge = stetype;
            this.SteRecNo = sterecno;
            this.StePayDate = this._dataService.stringdttoArry(stepaydate);
            this.SteAmount = steamount;
            this.SteRemark = steremark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure you want to delete Steamer Agent Charges No. " + sterecno + "?")) {
                this.dtSTEAGENT.splice(index, 1);
                this.resetSteAgent_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetSteAgent_Dtls = function () {
        this.SteId = 0;
        this.SteTypeCharge = null;
        this.SteRecNo = '';
        this.StePayDate = null;
        this.SteAmount = '';
        this.SteRemark = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_Port_Dtls = function (index, type, pk_tblIndex, rcno, paydate, amount, remark) {
        if (type == 'A') {
            if (!this.PortRecNo) {
                alert("Port Receipt No Should not be Empty.");
                return false;
            }
            if (!this.PortPaidDate) {
                alert("Date Should not be Empty.");
                return false;
            }
            if (!this.PortAmount) {
                alert("Amount Should not be Empty.");
                return false;
            }
            if (!this.PortRemark) {
                alert("Remark Should not be Empty.");
                return false;
            }
            if (this.dtPORTCFS.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtPORTCFS.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_8 = this.dtPORTCFS.indexOf(updateItem);
                this.dtPORTCFS[index_8]["PortRecNo"] = this.PortRecNo;
                this.dtPORTCFS[index_8]["PortPaiddt"] = this.PortPaidDate.formatted;
                this.dtPORTCFS[index_8]["PortAmount"] = this.PortAmount;
                this.dtPORTCFS[index_8]["PortRemark"] = this.PortRemark;
            }
            else {
                this.dtPORTCFS.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__Port_DtlsId: "",
                    pk_tblIndex: (this.dtPORTCFS.length > 0) ? Math.max.apply(Math, this.dtPORTCFS.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    PortRecNo: this.PortRecNo,
                    PortPaiddt: this.PortPaidDate.formatted,
                    PortAmount: this.PortAmount,
                    PortRemark: this.PortRemark
                });
            }
            this.resetPort_Dtls();
        }
        else if (type == 'P') {
            this.PortId = pk_tblIndex;
            this.PortRecNo = rcno;
            this.PortPaidDate = this._dataService.stringdttoArry(paydate);
            this.PortAmount = amount;
            this.PortRemark = remark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure you want to delete Steamer Agent Charges No. " + rcno + "?")) {
                this.dtPORTCFS.splice(index, 1);
                this.resetPort_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetPort_Dtls = function () {
        this.PortId = 0;
        this.PortRecNo = '';
        this.PortPaidDate = null;
        this.PortAmount = '';
        this.PortRemark = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_Octroi_Dtls = function (index, type, pk_tblIndex, rcno, paydate, amount, remark) {
        if (type == 'A') {
            if (!this.OctRecNo) {
                alert("Octroi Receipt No Should not be Empty.");
                return false;
            }
            if (!this.OctPaidDate) {
                alert("Date Should not be Empty.");
                return false;
            }
            if (!this.OctAmount) {
                alert("Amount Should not be Empty.");
                return false;
            }
            if (!this.OctRemark) {
                alert("Remark Should not be Empty.");
                return false;
            }
            if (this.dtOCTROI.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtOCTROI.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_9 = this.dtOCTROI.indexOf(updateItem);
                this.dtOCTROI[index_9]["OctRecNo"] = this.OctRecNo;
                this.dtOCTROI[index_9]["OctRecPaidDT"] = this.OctPaidDate.formatted;
                this.dtOCTROI[index_9]["OctAmount"] = this.OctAmount;
                this.dtOCTROI[index_9]["OctRemark"] = this.OctRemark;
            }
            else {
                this.dtOCTROI.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__Octroi_DtlsId: "",
                    pk_tblIndex: (this.dtOCTROI.length > 0) ? Math.max.apply(Math, this.dtOCTROI.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    OctRecNo: this.OctRecNo,
                    OctRecPaidDT: this.OctPaidDate.formatted,
                    OctAmount: this.OctAmount,
                    OctRemark: this.OctRemark
                });
            }
            this.resetOctroi_Dtls();
        }
        else if (type == 'P') {
            this.OctId = pk_tblIndex;
            this.OctRecNo = rcno;
            this.OctPaidDate = this._dataService.stringdttoArry(paydate);
            this.OctAmount = amount;
            this.OctRemark = remark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure you want to delete Octroi No. " + rcno + "?")) {
                this.dtOCTROI.splice(index, 1);
                this.resetOctroi_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetOctroi_Dtls = function () {
        this.OctId = 0;
        this.OctRecNo = '';
        this.OctPaidDate = null;
        this.OctAmount = '';
        this.OctRemark = '';
    };
    EntrySeaImportComponent.prototype.fnAddEdit_Delivery_Dtls = function (index, type, pk_tblIndex, oh_truck, truck_value, truck_name, truck_no, truck_type, rate_agreed, date, remark) {
        var _this = this;
        var OH_truck = "";
        var truck = "";
        var truckValue = "";
        if (type == 'A') {
            if (this.rTruck == 'O') {
                if (!this.TruckOur) {
                    alert("Please Select Truck Value.");
                    return false;
                }
                OH_truck = "OUR";
                truck = this.TruckOurList.find(function (key) { return key.DATAVALUEFIELD == _this.TruckOur; }).DATATEXTFIELD;
                truckValue = this.TruckOur;
            }
            else {
                if (!this.Supplier) {
                    alert("Please Select Supplier.");
                    return false;
                }
                if (!this.TruckNo) {
                    alert("Truck Number Should not be Empty.");
                    return false;
                }
                if (!this.TruckType) {
                    alert("Truck Type Should not be Empty.");
                    return false;
                }
                if (this.rTruck == 'H') {
                    if (!this.RateAgreed) {
                        alert("Rate Agreed Should not be Empty.");
                        return false;
                    }
                    OH_truck = "HIRED";
                }
                else {
                    OH_truck = "HIREDIMP";
                }
                truck = this.SupplierList.find(function (key) { return key.DATAVALUEFIELD == _this.Supplier; }).DATATEXTFIELD;
                truckValue = this.Supplier;
            }
            if (!this.DeliveryDate) {
                alert("Date Should not be Empty.");
                return false;
            }
            if (!this.DeliveryRemark || this.DeliveryRemark == '') {
                alert("Remark Should not be Empty.");
                return false;
            }
            if (this.dtDELIVERY.filter(function (key) { return key.pk_tblIndex == pk_tblIndex; }).length > 0) {
                var updateItem = this.dtDELIVERY.find(function (key) { return key.pk_tblIndex == pk_tblIndex; });
                var index_10 = this.dtDELIVERY.indexOf(updateItem);
                this.dtDELIVERY[index_10]["OH_truck"] = OH_truck;
                this.dtDELIVERY[index_10]["trackValue"] = truckValue;
                this.dtDELIVERY[index_10]["TruckNo"] = this.TruckNo;
                this.dtDELIVERY[index_10]["TruckType"] = this.TruckType;
                this.dtDELIVERY[index_10]["RateAgreed"] = this.RateAgreed;
                this.dtDELIVERY[index_10]["DelDate"] = this.DeliveryDate.formatted;
                this.dtDELIVERY[index_10]["DelRemark"] = this.DeliveryRemark;
                this.dtDELIVERY[index_10]["truck"] = truck;
            }
            else {
                this.dtDELIVERY.push({
                    STATUS: 100,
                    fk_ImpoterId: "",
                    Import_Code: "",
                    pk__Del_DtlsId: "",
                    pk_tblIndex: (this.dtDELIVERY.length > 0) ? Math.max.apply(Math, this.dtDELIVERY.map(function (o) { return o.pk_tblIndex; })) + 1 : 1,
                    OH_truck: OH_truck,
                    trackValue: truckValue,
                    TruckNo: this.TruckNo,
                    TruckType: this.TruckType,
                    RateAgreed: this.RateAgreed,
                    DelDate: this.DeliveryDate.formatted,
                    DelRemark: this.DeliveryRemark,
                    truck: truck
                });
            }
            this.resetDelivery_Dtls();
        }
        else if (type == 'P') {
            this.DeliveryId = pk_tblIndex;
            if (oh_truck == 'OUR') {
                this.rTruck = 'O';
                this.TruckOur = truck_value;
            }
            else {
                this.rTruck = (oh_truck == 'HIRED') ? 'H' : 'HI';
                this.Supplier = truck_value;
            }
            this.TruckNo = truck_no;
            this.TruckType = truck_type;
            this.RateAgreed = rate_agreed;
            this.DeliveryDate = this._dataService.stringdttoArry(date);
            this.DeliveryRemark = remark;
        }
        else if (type == 'D') {
            if (confirm("Are you sure you want to delete Delivery Truck. " + truck_name + "?")) {
                this.dtDELIVERY.splice(index, 1);
                this.resetDelivery_Dtls();
            }
        }
    };
    EntrySeaImportComponent.prototype.resetDelivery_Dtls = function () {
        this.DeliveryId = 0;
        this.rTruck = 'O';
        this.TruckOur = null;
        this.Supplier = null;
        this.TruckNo = '';
        this.TruckType = '';
        this.RateAgreed = '';
        this.DeliveryDate = null;
        this.DeliveryRemark = '';
    };
    EntrySeaImportComponent.prototype.ValidateValueAndExchRate = function (drpCtrl, txtCtrl, AmtCtrl, lblCtrl) {
        if (Math.abs(this[AmtCtrl]) != 0) {
            if (this[drpCtrl] == null) {
                alert("Please select currency for " + lblCtrl + ".");
                document.getElementById(drpCtrl).focus();
                return false;
            }
        }
        if (this[drpCtrl] != null) {
            if (Math.abs(this[txtCtrl]) == 0 || isNaN(this[txtCtrl])) {
                alert("Please enter ExchRate for " + lblCtrl + ".");
                document.getElementById(txtCtrl).focus();
                return false;
            }
        }
        return true;
    };
    EntrySeaImportComponent.prototype.LastFreeDateValidation = function (name, Sname, SnameExpect) {
        if (this[name]) {
            var name1 = this[name];
            var Sname1 = this[Sname];
            var Sname2 = this[SnameExpect];
            if (Sname1 == null) {
                if (Sname2 == null) {
                    alert("Please Enter G. L. Date or Select Vessel first.");
                    return false;
                }
                else {
                    if (this._dataService.DateFromAndToComparision(name1, Sname2) == false) {
                        alert("Last Free Date Should be greater than Expected Arrival Date");
                        return false;
                    }
                }
            }
            else {
                if (this._dataService.DateFromAndToComparision(name1, Sname1.formatted) == false) {
                    alert("Last Free Date Should be greater than G.L Date");
                    return false;
                }
            }
        }
        return true;
    };
    EntrySeaImportComponent.prototype.InvoiceDateValidation = function (name) {
        if (this[name] != null) {
            var name1 = this[name];
            var Sname1 = this.GetLowestEtaDate();
            if (this._dataService.DateFromAndToComparision(Sname1, name1.formatted) == false) {
                Sname1 = "Invoice Date Should be Less than " + Sname1 + " Date";
                alert(Sname1);
                return false;
            }
        }
        else {
            return true;
        }
    };
    EntrySeaImportComponent.prototype.GetLowestEtaDate = function () {
        var Drp1 = this.VesselName;
        var Drp2 = this.TranshipmentVessel;
        if (Drp1 != Drp2) {
            var TextSplit1, TextSplit2;
            TextSplit1 = Drp1.split('|');
            TextSplit2 = Drp2.split('|');
            if (this._dataService.DateFromAndToComparision(TextSplit2[3], TextSplit1[3]) == true) {
                return TextSplit1[3];
            }
            else {
                return TextSplit2[3];
            }
        }
        else {
            return this.ExpectedArrDate;
        }
    };
    EntrySeaImportComponent.prototype.AdvanceTabValidation = function (ctrlAmount, ctrlDate) {
        if (this[ctrlAmount].trim('normalize') == "") {
            if (this[ctrlDate] != null) {
                alert("Please Enter Advance Recieved");
                return false;
            }
        }
        if (this[ctrlDate] == null) {
            if (this[ctrlAmount].trim('normalize') != "") {
                alert("Please Enter Advance Recieved On");
                return false;
            }
        }
        return true;
    };
    EntrySeaImportComponent.prototype.get_CurrencyCode = function (CtrlName) {
        return (this[CtrlName] != null) ? this[CtrlName].split('|')[0] : "";
    };
    EntrySeaImportComponent.prototype.totalValidation = function () {
        if (!this.EXWORKS && !this.CUSTOMCLR && !this.FREIGHTFRD) {
            alert("Please Check atleast one checkbox");
            document.getElementsByName("ExWork")[0].focus();
            return false;
        }
        if (!this.Importer) {
            alert("Select Importer...");
            return false;
        }
        if (!this.BusinessAssociate) {
            alert("Select Business Associate...");
            return false;
        }
        // if (!this.VesselName) { alert("Select Vessel Name..."); return false; }
        // else if (this.DirectVessel == 'NO') {
        //     if (!this.TranshipmentVessel) { alert("Please select Transhipment Vessel."); return false; }
        //     else if (this.VesselName == this.TranshipmentVessel) { alert("Transhipment Vessel and Vessel Name should not be Same for Direct Vessel No."); return false; }
        //     if (!this.TranshipmentPort) { alert("Please select Transhipment Port Name."); return false; }
        // }
        if (!this.MblNo && !this.HblNo) {
            alert("Please enter any one of following details MBL No. Or HBL No.");
            document.getElementsByName("MblNo")[0].focus();
            return false;
        }
        else if (this.MblNo != '') {
            if (!this.MblDate) {
                alert("Please select MBL Date.");
                return false;
            }
            else if (!this._dataService.DateFromAndToComparision(this.MblDate.formatted, this._dataService.getCurrentdate())) {
                alert("MBL Date should be Less than or Equal to " + this._dataService.getCurrentdate());
                return false;
            }
        }
        else if (this.HblNo != '') {
            if (!this.HblDate) {
                alert("Please select HBL Date.");
                return false;
            }
            else if (!this._dataService.DateFromAndToComparision(this.HblDate.formatted, this._dataService.getCurrentdate())) {
                alert("HBL Date should be Less than or Equal to " + this._dataService.getCurrentdate());
                return false;
            }
        }
        else if (!this.ShipmentPort) {
            alert("Select Port of Shipment");
            return false;
        }
        else if (this.DescriptionGoods == '') {
            alert("Description of Goods should not be empty");
            document.getElementsByName("DescriptionGoods")[0].focus();
            return false;
        }
        else if (this.NoOfPackages1 == '') {
            alert("No. of Packages should not be empty");
            document.getElementsByName("NoOfPackages1")[0].focus();
            return false;
        }
        else if (!this.TypeOfPackage2) {
            alert("Select Types of Packages");
            return false;
        }
        else if (this.GrossWeight == '') {
            alert("Gross Weight should not be empty");
            document.getElementsByName("GrossWeight")[0].focus();
            return false;
        }
        else if (this.NetWeight != "") {
            if (Math.abs(this.NetWeight) > Math.abs(this.GrossWeight)) {
                alert("Net Weight Less then or Equal to Gross Weight.");
                document.getElementsByName("NetWeight")[0].focus();
                return false;
            }
        }
        if (this.dtINVOICE.length == 0) {
            alert("Please Enter Atleast one Invoice No.");
            document.getElementsByName("InvoiceNo")[0].focus();
            return false;
        }
        else if (!this.Incoterm) {
            alert("Please select Incoterm..");
            return false;
        }
        else if (this.InvValue == "") {
            alert("Invoice Value should not be empty");
            return false;
        }
        else if (!this.InvCurrency) {
            alert("Please select Currency of Invoice.");
            document.getElementById("InvCurrency").focus();
            return false;
        }
        else if (this.InvExchRate == "") {
            alert("Invoice Exch.Rate should not be empty");
            document.getElementById("InvExchRate").focus();
            return false;
        }
        else if (!this.ValidateValueAndExchRate('InvCurrency', 'InvExchRate', 'InvValue', 'Invoice Value')) {
            return false;
        }
        else if (this.FrightEnable == false) {
            if (!this.ValidateValueAndExchRate('FrightCurrency', 'FrightExchRate', 'FrightAmount', 'Fright Amount')) {
                return false;
            }
        }
        else if (this.InsurenceEnable == false) {
            if (!this.ValidateValueAndExchRate('InsuranceCurrency', 'InsuranceExchRate', 'InsuranceAmount', 'Insurance Amount')) {
                return false;
            }
        }
        else if (!this.ValidateValueAndExchRate('CommissionCurrency', 'CommissionExchRate', 'CommissionAmount', 'Commission Amount')) {
            return false;
        }
        else if (this.GLDate) {
            if (this.ExpectedArrDate != null) {
                if (!this._dataService.DateFromAndToComparision(this.GLDate.formatted, this.ExpectedArrDate)) {
                    alert("G.L.Date Should be Greater than or Equal to Expected Arrival Date.");
                    this.GLDate = null;
                    return false;
                }
            }
        }
        else if (this.BillOfEntryDate != null) {
            if (!this._dataService.date2Comparison(this.BillOfEntryDate.formatted, this._dataService.getCurrentdate())) {
                alert("Bill Of Entry Date should be Less than or Equal to " + this._dataService.getCurrentdate());
                return false;
            }
        }
        //else if (!this.LastFreeDateValidation('LastDate', 'GLDate', 'ExpectedArrDate')) { return false; }
        else if (!this.InvoiceDateValidation('InvoiceDate')) {
            return false;
        }
        else if (Math.abs(this.InvValue) != 0) {
            if (Math.abs(this.InvExchRate) == 0) {
                alert("Please enter Exch.Rate for Invoice");
                document.getElementById("InvExchRate").focus();
                return false;
            }
        }
        else if (!this.AdvanceTabValidation('AdvRecOne', 'AdvRecOneDate')) {
            return false;
        }
        else if (!this.AdvanceTabValidation('AdvRecTwo', 'AdvRecTwoDate')) {
            return false;
        }
        else if (!this.AdvanceTabValidation('AdvRecThree', 'AdvRecThreeDate')) {
            return false;
        }
        else if (!this.AdvanceTabValidation('AdvRecFour', 'AdvRecFourDate')) {
            return false;
        }
        return true;
    };
    EntrySeaImportComponent.prototype.InsertAllDatas = function (mode) {
        var _this = this;
        var fk_Imp_Code = this.Importer;
        var fk_BillTo = this.BillTo;
        var Vsl_Air_Split = "0"; // this.VesselName.split('|');//Sea
        var fk_Vsl_Air_name = ""; //Vsl_Air_Split[0];//Sea
        var fk_Agt_name = (this.LinerAgent) ? this.LinerAgent : ""; //Sea
        var Trans_vsl_Split = ""; // this.TranshipmentVessel.split('|');//Sea
        var fk_Trans_vsl_name = ""; //Trans_vsl_Split[0];//Sea
        var ArrivingDateAtICD = (this.ArrivingICD != null) ? this.SqlDate(this.ArrivingICD.formatted) : ""; //Sea
        var GlDate = (this.GLDate != null) ? this.SqlDate(this.GLDate.formatted) : ""; //Sea
        var Desc_Good = this.DescriptionGoods; //document.getElementById("txtDescGoods").value;//Sea
        var NumOfPkg1 = Math.abs(this.NoOfPackages1); //Sea
        var TypeOfPkg = (this.TypeOfPackage2) ? this.TypeOfPackage2 : ""; //Sea
        var GrossWt = Math.abs(this.GrossWeight); //Sea
        var NetWt = Math.abs(this.NetWeight); //Sea 
        var fk_ArilineId = ""; //Air
        var FightNo = ""; //Air
        var FightDate = ""; //Air
        var fk_ArilineId_Transhipment = ""; //Air
        var FightNo_Transhipment = ""; //Air
        var FightDate_Transhipment = ""; //Air
        var fk_ArrivalPort = ""; //Air
        var Exp_Arrival_Date = (this.ExpectedArrDate != null) ? this.SqlDate(this.ExpectedArrDate.formatted) : ""; //Air
        var Act_Arrival_Date = (this.ActualArrDate != null) ? this.SqlDate(this.ActualArrDate.formatted) : ""; //Air
        var Mbl_Mabl_NO = this.MblNo;
        var Mbl_Mabl_DT = (this.MblDate != null) ? this.SqlDate(this.MblDate.formatted) : "";
        var Bbl_Habl_NO = this.HblNo;
        var Bbl_Habl_DT = (this.HblDate != null) ? this.SqlDate(this.HblDate.formatted) : "";
        var Dir_vessel = (this.DirectVessel == 'YES') ? 'YES' : 'NO';
        var fk_Trans_Port = (this.TranshipmentPort) ? this.TranshipmentPort : "";
        var Bank_Ref_No = this.BankRefNo;
        var Party_Ref_No = this.PartyRefNo;
        var LastFreeDate; // (this.LastDate != null) ?  this.LastDate  :"";
        if (this.FreeLastDate != null) {
            var strdate = this.LastDate.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            LastFreeDate = StrSqlDate;
        }
        else {
            LastFreeDate = "";
        }
        var fk_ShipmentPort = (this.ShipmentPort) ? this.ShipmentPort : "";
        var BoeNo = (this.BillOfEntry != null) ? this.BillOfEntryNoList.find(function (key) { return key.DATAVALUEFIELD == _this.BillOfEntry; }).DATATEXTFIELD : "";
        var fk_BillOfEntry = (this.BillOfEntry) ? this.BillOfEntry : "";
        var BoeDt = (this.BillOfEntryDate != null) ? this.SqlDate(this.BillOfEntryDate.formatted) : "";
        var BoeRemark = this.BillOfEntryRemark;
        var InvoiceNo = this.InvoiceNo;
        var InvoiceDt = (this.InvoiceDate != null) ? this.SqlDate(this.InvoiceDate.formatted) : "";
        var Incoterm_Split = (this.Incoterm) ? this.Incoterm.split("|")[0] : "";
        var fk_Incoterm = Incoterm_Split;
        var InvoiceValue = Math.abs(this.InvValue);
        var fk_cur_name = this.get_CurrencyCode('InvCurrency');
        var InvExchRate = Math.abs(this.InvExchRate);
        var InvTot = Math.abs(this.InvTotInr);
        var FrightAmt = Math.abs(this.FrightAmount);
        var fk_FrightCur = this.get_CurrencyCode('FrightCurrency');
        var FrightExchRate = Math.abs(this.FrightExchRate);
        var FrightTot = Math.abs(this.FrightTotInr);
        var InsAmt = Math.abs(this.InsuranceAmount);
        var fk_InsCur = this.get_CurrencyCode('InsuranceCurrency');
        var InsExchRate = Math.abs(this.InsuranceExchRate);
        var InsTot = Math.abs(this.InsuranceTotInr);
        var ComAmt = Math.abs(this.CommissionAmount);
        var fk_ComCur = this.get_CurrencyCode('CommissionCurrency');
        var ComExchRate = Math.abs(this.CommissionExchRate);
        var ComTot = Math.abs(this.CommissionTotInr);
        var CifAmt = Math.abs(this.CifAmount);
        var AccessValue = Math.abs(this.AccessableValue);
        var AdvRec1 = Math.abs(this.AdvRecOne);
        var AdvRec1Dt = (this.AdvRecOneDate != null) ? this.SqlDate(this.AdvRecOneDate.formatted) : "";
        var AdvRec2 = Math.abs(this.AdvRecTwo);
        var AdvRec2Dt = (this.AdvRecTwoDate != null) ? this.SqlDate(this.AdvRecTwoDate.formatted) : "";
        var AdvRec3 = Math.abs(this.AdvRecThree);
        var AdvRec3Dt = (this.AdvRecThreeDate != null) ? this.SqlDate(this.AdvRecThreeDate.formatted) : "";
        var AdvRec4 = Math.abs(this.AdvRecFour);
        var AdvRec4Dt = (this.AdvRecFourDate != null) ? this.SqlDate(this.AdvRecFourDate.formatted) : "";
        var ExamDate = (this.ExaminationDate != null) ? this.SqlDate(this.ExaminationDate.formatted) : "";
        var ExamRemark = this.ExaminationRemark;
        var AssessDate = (this.AssessmentDate != null) ? this.SqlDate(this.AssessmentDate.formatted) : "";
        var AssessRemark = this.AssessmentRemark;
        var CustomClerk = this.CustomClerk;
        var DockClerk = this.DockClerk;
        var imp_id = this.ImportId;
        var Remark = this.ImpRemark;
        var Doc_Cancel = (this.DocumentCancel) ? 'Y' : 'N';
        var BusinessAssociate = (this.BusinessAssociate) ? this.BusinessAssociate : "";
        var billofentryNo = this.BillOfEntryNo;
        var _jsonData = {
            ImpMode: "Sea",
            imp_id: imp_id,
            fk_Imp_Code: fk_Imp_Code,
            fk_Vsl_Air_name: fk_Vsl_Air_name,
            fk_Agt_name: fk_Agt_name,
            Mbl_Mabl_NO: Mbl_Mabl_NO,
            Mbl_Mabl_DT: Mbl_Mabl_DT,
            Bbl_Habl_NO: Bbl_Habl_NO,
            Bbl_Habl_DT: Bbl_Habl_DT,
            Dir_vessel: Dir_vessel,
            fk_Trans_vsl_name: fk_Trans_vsl_name,
            fk_Trans_Port: fk_Trans_Port,
            Bank_Ref_No: Bank_Ref_No,
            Party_Ref_No: Party_Ref_No,
            GlDate: GlDate,
            LastFreeDate: LastFreeDate,
            fk_ShipmentPort: fk_ShipmentPort,
            Desc_Good: Desc_Good,
            NumOfPkg1: NumOfPkg1,
            TypeOfPkg: TypeOfPkg,
            GrossWt: GrossWt,
            NetWt: NetWt,
            BoeNo: BoeNo,
            BoeDt: BoeDt,
            BoeRemark: BoeRemark,
            InvoiceNo: InvoiceNo,
            InvoiceDt: InvoiceDt,
            fk_Incoterm: fk_Incoterm,
            InvoiceValue: InvoiceValue,
            fk_cur_name: fk_cur_name,
            InvExchRate: InvExchRate,
            InvTot: InvTot,
            FrightAmt: FrightAmt,
            fk_FrightCur: fk_FrightCur,
            FrightExchRate: FrightExchRate,
            FrightTot: FrightTot,
            InsAmt: InsAmt,
            fk_InsCur: fk_InsCur,
            InsExchRate: InsExchRate,
            InsTot: InsTot,
            ComAmt: ComAmt,
            fk_ComCur: fk_ComCur,
            ComExchRate: ComExchRate,
            ComTot: ComTot,
            CifAmt: CifAmt,
            AccessValue: AccessValue,
            AdvRec1: AdvRec1,
            AdvRec1Dt: AdvRec1Dt,
            AdvRec2: AdvRec2,
            AdvRec2Dt: AdvRec2Dt,
            AdvRec3: AdvRec3,
            AdvRec3Dt: AdvRec3Dt,
            AdvRec4: AdvRec4,
            AdvRec4Dt: AdvRec4Dt,
            ExamDate: ExamDate,
            ExamRemark: ExamRemark,
            AssessDate: AssessDate,
            AssessRemark: AssessRemark,
            CustomClerk: CustomClerk,
            DockClerk: DockClerk,
            fk_BillTo: fk_BillTo,
            fk_BillOfEntry: fk_BillOfEntry,
            MakerID: this._loginService.getLogin()[0].CMPID,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            Citycode1: this._loginService.getLogin()[0].CITYCODE1,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
            ArrivingDateAtICD: ArrivingDateAtICD,
            Doc_Cancel: Doc_Cancel,
            Remark: Remark,
            fk_ArilineId: fk_ArilineId,
            FightNo: FightNo,
            FightDate: FightDate,
            fk_ArilineId_Transhipment: fk_ArilineId_Transhipment,
            FightNo_Transhipment: FightNo_Transhipment,
            FightDate_Transhipment: FightDate_Transhipment,
            fk_ArrivalPort: fk_ArrivalPort,
            Exp_Arrival_Date: Exp_Arrival_Date,
            Act_Arrival_Date: Act_Arrival_Date,
            BusinessAssociate: BusinessAssociate,
            Bill_EntryNO: billofentryNo,
            EXWORKS: (this.EXWORKS) ? "EX" : "",
            CUSTOM_CLR: (this.CUSTOMCLR) ? "CUSTOM" : "",
            FREIGHT_FRD: (this.FREIGHTFRD) ? "FRTFRD" : "",
            VSL_NAME: this.VesselName,
            VSL_VOYAGENO: this.voyno,
            VSL_IGMNO: this.IGMNo,
            VSL_ARRIVALPORT: this.ArrivalPort,
            VSL_ARRIVALPORTPOD: this.ArrivalPortPOD,
            VSL_BERTHNO: this.ShedNo,
            FINAL_DESTPORT: this.Finaldest,
            ARRV_DTFINALDEST: this.dtfinaldest,
            ONLINE_SUB_DT: (this.onlinesuubDt != null) ? this.SqlDate(this.onlinesuubDt.formatted) : "",
            ONLINE_SUB_BY: (this.submissionBy != null) ? this.submissionBy : 0,
            DUTY_AMT: (this.dutyamt != null) ? this.dutyamt : 0,
            STAMP_DUTY: (this.StampDutyAmt != null) ? this.StampDutyAmt : 0,
            DUTYPAIDBY: this.DutyPaidBy,
            DO_RECEIVED_ON: (this.DOrecvdOn != null) ? this.SqlDate(this.DOrecvdOn.formatted) : "",
            DELIVERY_VALIDATE_BY: (this.validatedt != null) ? this.SqlDate(this.validatedt.formatted) : "",
            DELIVERYMODE: this.deliverymode,
            // ,
            // IGMdt:(this.IGMdt != null) ? this.SqlDate(this.IGMdt.formatted) : "",
            DateOfRod: this.dtDATEOFROD,
            Goods: this.dtGOOD,
            Boe: this.dtDOCSUB,
            Duty: this.dtDUTY,
            SteAgent: this.dtSTEAGENT,
            Port: this.dtPORTCFS,
            Octroi: this.dtOCTROI,
            Delivery: this.dtDELIVERY,
            Invoice: this.dtINVOICE,
            DocCallForUs: this.dtCALLFORUS,
        };
        this._loaderService.display(true);
        this._dataService.Common("Import/Import_Iu", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            if (data.Table1[0].STATUS == '100') {
                if (_this.ImportId == 0) {
                    alert("The Import Code " + data.Table1[0].Import_Code + " Inserted Successfully!");
                    _this.resetAllData();
                }
                else {
                    alert("The Import Code " + data.Table1[0].Import_Code + " Updated Successfully!");
                    _this._router.navigate(['/import/sea/entry-data']);
                }
            }
            else {
                alert(data.Table[0].STATUSTEXT);
            }
        });
    };
    EntrySeaImportComponent.prototype.OnChangeArrivalDt = function (date) {
        var strdate = date.formatted.split("/");
        var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
        var yourDate = this._dataService.addDays(StrSqlDate, 2);
        this.LastDate = yourDate;
        this.FreeLastDate = yourDate;
    };
    EntrySeaImportComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    EntrySeaImportComponent.prototype.submit = function () {
        if (!this.totalValidation()) {
            return false;
        }
        this.InsertAllDatas('Sea');
    };
    EntrySeaImportComponent.prototype.abort = function () {
        if (this.ImportId == 0) {
            this.resetAllData();
        }
        else {
            this._router.navigate(['/import/sea/entry-data']);
        }
    };
    EntrySeaImportComponent.prototype.resetAllData = function () {
        this.hdInvHasRec = '0';
        this.Iu_Mode = '';
        this.Mode = '';
        this.ImportId = '0';
        this.Importer = null;
        this.BillTo = null;
        this.VesselName = null;
        this.LinerAgent = null;
        this.BusinessAssociate = null;
        this.MblNo = '';
        this.MblDate = null;
        this.HblNo = '';
        this.HblDate = null;
        this.DirectVessel = 'YES';
        this.EXWORKS = false;
        this.CUSTOMCLR = false;
        this.FREIGHTFRD = false;
        this.TranshipmentVessel = null;
        this.TranshipmentPort = null;
        this.ArrivalPort = '';
        this.ShedNo = '';
        this.ExpectedArrDate = null;
        this.ActualArrDate = null;
        this.ArrivingICD = null;
        this.BankRefNo = '';
        this.PartyRefNo = '';
        this.GLDate = null;
        this.LastDate = null;
        this.ShipmentPort = null;
        this.DocumentCancel = false;
        this.RODdtID = 0;
        ;
        this.RODDate = null;
        this.RODRemark = '';
        this.DocCallForUsID = 0;
        this.DocumentName = '';
        this.DocumentRecOn = null;
        this.DescriptionGoods = '';
        this.NoOfPackages1 = '';
        this.TypeOfPackage2 = null;
        this.GrossWeight = '';
        this.NetWeight = '';
        this.ContId = 0;
        this.ContNo = '';
        this.ContLength = null;
        this.ContType = null;
        this.ContNoOfPackage = '';
        this.BillOfEntry = null;
        this.BillOfEntryNo = '';
        this.BillOfEntryDate = null;
        this.BillOfEntryRemark = '';
        this.CustomId = 0;
        this.CustomDocumentName = '';
        this.CustomSubmittedOn = null;
        this.CustomRemark = '';
        this.InvoiceId = 0;
        this.InvoiceNo = '';
        this.InvoiceDate = null;
        this.Incoterm = null;
        this.BriefIncoterm = '';
        this.FrightEnable = false;
        this.InsurenceEnable = false;
        this.LocalCurrency = {
            abb: '',
            cur: '',
            curname: ''
        };
        this.InvValue = '';
        this.InvCurrency = null;
        this.InvExchRate = '';
        this.InvTotInr = '0';
        this.FrightAmount = '';
        this.FrightCurrency = null;
        this.FrightExchRate = '';
        this.FrightTotInr = '0';
        this.InsuranceAmount = '';
        this.InsuranceCurrency = null;
        this.InsuranceExchRate = '';
        this.InsuranceTotInr = '0';
        this.CommissionAmount = '';
        this.CommissionCurrency = null;
        this.CommissionExchRate = '';
        this.CommissionTotInr = '0';
        this.CifAmount = '0';
        this.AccessableValue = '0';
        this.DutyId = 0;
        this.DutyPaid = '';
        this.DutyIns = '';
        this.DutyPaidOnDate = null;
        this.DutyCashNo = '';
        this.DutyRemark = '';
        this.AdvRecOne = '';
        this.AdvRecOneDate = null;
        this.AdvRecTwo = '';
        this.AdvRecTwoDate = null;
        this.AdvRecThree = '';
        this.AdvRecThreeDate = null;
        this.AdvRecFour = '';
        this.AdvRecFourDate = null;
        this.ExaminationDate = null;
        this.ExaminationRemark = '';
        this.AssessmentDate = null;
        this.AssessmentRemark = '';
        this.CustomClerk = '';
        this.DockClerk = '';
        this.SteId = 0;
        this.SteTypeCharge = '';
        this.SteRecNo = '';
        this.StePayDate = null;
        this.SteAmount = '';
        this.SteRemark = '';
        this.PortId = 0;
        this.PortRecNo = '';
        this.PortPaidDate = null;
        this.PortAmount = '';
        this.PortRemark = '';
        this.OctId = 0;
        this.OctRecNo = '';
        this.OctPaidDate = null;
        this.OctAmount = '';
        this.OctRemark = '';
        this.DeliveryId = 0;
        this.rTruck = 'O';
        this.TruckOur = null;
        this.Supplier = null;
        this.TruckNo = '';
        this.TruckType = '';
        this.RateAgreed = '';
        this.DeliveryDate = null;
        this.DeliveryRemark = '';
        this.ImpRemark = '';
        this.VesselName = '';
        this.voyno = '';
        this.IGMNo = '';
        this.ArrivalPort = '';
        this.ShedNo = '';
        this.Finaldest = '';
        this.dtfinaldest = null;
        this.onlinesuubDt = null;
        this.submissionBy = '0';
        this.dutyamt = '';
        this.StampDutyAmt = '';
        this.DutyPaidBy = '';
        this.DOrecvdOn = null;
        this.validatedt = null;
        this.deliverymode = '';
        this.IGMdt = null;
        this.FreeLastDate = null;
    };
    EntrySeaImportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    EntrySeaImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./entry-sea.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/sea/entry-sea.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], EntrySeaImportComponent);
    return EntrySeaImportComponent;
}());



/***/ }),

/***/ "./src/app/import/sea/sea.component.ts":
/*!*********************************************!*\
  !*** ./src/app/import/sea/sea.component.ts ***!
  \*********************************************/
/*! exports provided: SeaImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaImportComponent", function() { return SeaImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeaImportComponent = /** @class */ (function () {
    function SeaImportComponent() {
    }
    SeaImportComponent.prototype.ngOnInit = function () {
    };
    SeaImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./sea.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/sea/sea.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SeaImportComponent);
    return SeaImportComponent;
}());



/***/ }),

/***/ "./src/app/import/sea/sea.module.ts":
/*!******************************************!*\
  !*** ./src/app/import/sea/sea.module.ts ***!
  \******************************************/
/*! exports provided: SeaImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaImportModule", function() { return SeaImportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sea_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sea.routing */ "./src/app/import/sea/sea.routing.ts");
/* harmony import */ var _sea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sea.component */ "./src/app/import/sea/sea.component.ts");
/* harmony import */ var _entry_sea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entry-sea.component */ "./src/app/import/sea/entry-sea.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.component */ "./src/app/import/sea/search.component.ts");
/* harmony import */ var _docket_print_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./docket-print-search.component */ "./src/app/import/sea/docket-print-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SeaImportModule = /** @class */ (function () {
    function SeaImportModule() {
    }
    SeaImportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_sea_routing__WEBPACK_IMPORTED_MODULE_7__["SeaImportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [
                _sea_component__WEBPACK_IMPORTED_MODULE_8__["SeaImportComponent"],
                _entry_sea_component__WEBPACK_IMPORTED_MODULE_9__["EntrySeaImportComponent"],
                _search_component__WEBPACK_IMPORTED_MODULE_10__["SeaSearchComponent"],
                _docket_print_search_component__WEBPACK_IMPORTED_MODULE_11__["SeaDocketPrintSearchComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], SeaImportModule);
    return SeaImportModule;
}());



/***/ }),

/***/ "./src/app/import/sea/sea.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/import/sea/sea.routing.ts ***!
  \*******************************************/
/*! exports provided: SeaImportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaImportRoutingModule", function() { return SeaImportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sea.component */ "./src/app/import/sea/sea.component.ts");
/* harmony import */ var _entry_sea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry-sea.component */ "./src/app/import/sea/entry-sea.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/import/sea/search.component.ts");
/* harmony import */ var _docket_print_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docket-print-search.component */ "./src/app/import/sea/docket-print-search.component.ts");
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
            title: 'Sea'
        },
        children: [
            { path: '', component: _sea_component__WEBPACK_IMPORTED_MODULE_2__["SeaImportComponent"], data: { title: 'Home' } },
            { path: 'entry-data', component: _entry_sea_component__WEBPACK_IMPORTED_MODULE_3__["EntrySeaImportComponent"], data: { title: 'Add Import Sea' } },
            { path: 'update-data/:import-id', component: _entry_sea_component__WEBPACK_IMPORTED_MODULE_3__["EntrySeaImportComponent"], data: { title: 'Update Import Sea' } },
            { path: 'search', component: _search_component__WEBPACK_IMPORTED_MODULE_4__["SeaSearchComponent"], data: { title: 'Search' } },
            { path: 'docket-print-search', component: _docket_print_search_component__WEBPACK_IMPORTED_MODULE_5__["SeaDocketPrintSearchComponent"], data: { title: 'Docket Print Search' } },
        ]
    }
];
var SeaImportRoutingModule = /** @class */ (function () {
    function SeaImportRoutingModule() {
    }
    SeaImportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SeaImportRoutingModule);
    return SeaImportRoutingModule;
}());



/***/ }),

/***/ "./src/app/import/sea/search.component.ts":
/*!************************************************!*\
  !*** ./src/app/import/sea/search.component.ts ***!
  \************************************************/
/*! exports provided: SeaSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaSearchComponent", function() { return SeaSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
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






var SeaSearchComponent = /** @class */ (function () {
    function SeaSearchComponent(_dataService, _loginService, _toasterService, _router, _loaderService) {
        this._dataService = _dataService;
        this._loginService = _loginService;
        this._toasterService = _toasterService;
        this._router = _router;
        this._loaderService = _loaderService;
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
            selectorHeight: '198px',
            selectorWidth: '200px'
        };
        this.ImporterList = [];
        this.BillToList = [];
        this.VesselList = [];
        this.AgentList = [];
        this.searchList = [];
        this.displayType = 'SEARCH';
        this.searchHeaderText = 'List of Sea';
        this.Mode = 'Sea';
        this.Type = 'CODE';
        this.ImportCode = '';
        this.ImportFromDate = null;
        this.ImportToDate = null;
        this.Importer = null;
        this.ImporterType = 'All';
        this.BillTo = null;
        this.BillToType = 'All';
        this.Vessel = null;
        this.VesselType = 'All';
        this.Agent = null;
        this.AgentType = 'All';
        this.GlFromDate = null;
        this.GlToDate = null;
    }
    SeaSearchComponent.prototype.ngOnInit = function () {
        this.verifyPermission(126, "Modify");
    };
    SeaSearchComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this._loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            if (_this._loginService.checkVerify(userMode, data)) {
                _this.fillCommonDropdownList();
            }
            else {
                _this._loaderService.display(false);
            }
        });
    };
    SeaSearchComponent.prototype.fillCommonDropdownList = function () {
        var _this = this;
        var _jsonData = {
            citycode: this._loginService.getLogin()[0].CITYCODE,
        };
        this._dataService.getData("Import/Fill_Dropdown_Report_Search", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            _this.ImporterList = data.Table;
            _this.BillToList = data.Table;
            _this.VesselList = data.Table1;
            _this.AgentList = data.Table;
        });
    };
    SeaSearchComponent.prototype.fnValidate_Code = function () {
        if (this.ImportCode.trim().length === 0) {
            alert("Please Enter Import Code.");
            return false;
        }
        else if (this.ImportCode.trim().length != 15) {
            alert("Invalid Import Code.");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.fnValidate_Date = function () {
        if (!this.ImportFromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.ImportToDate) {
            alert("Please select To Date.");
            return false;
        }
        else if (!this._dataService.DateFromAndToComparision(this.ImportFromDate.formatted, this.ImportToDate.formatted)) {
            alert("To Date should be greater than From Date");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.fnValidate_Importer = function () {
        if (!this.Importer) {
            alert("Please select Importer.");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.fnValidate_BillTo = function () {
        if (!this.BillTo) {
            alert("Please select Bill To.");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.fnValidate_Vessel = function () {
        if (!this.BillTo) {
            alert("Please select Vessel Name.");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.fnValidate_Agent = function () {
        if (!this.Agent) {
            alert("Please select Agent Name.");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.fnValidate_Gl = function () {
        if (!this.GlFromDate) {
            alert("Please select From Date.");
            return false;
        }
        else if (!this.GlToDate) {
            alert("Please select To Date.");
            return false;
        }
        else if (!this._dataService.DateFromAndToComparision(this.ImportFromDate.formatted, this.ImportToDate.formatted)) {
            alert("To Date should be greater than From Date");
            return false;
        }
        return true;
    };
    SeaSearchComponent.prototype.SqlDate = function (strdateP) {
        if (strdateP != "" || strdateP != undefined) {
            var strdate = strdateP.split("/");
            var StrSqlDate = strdate[1] + "/" + strdate[0] + "/" + strdate[2];
            return StrSqlDate;
        }
        else
            return "";
    };
    SeaSearchComponent.prototype.search = function () {
        var SearchType = "";
        if (this.Type == 'CODE') {
            if (this.fnValidate_Code()) {
                SearchType = "1";
                this.getData(SearchType);
            }
            ;
        }
        else if (this.Type == 'DATE') {
            if (this.fnValidate_Date()) {
                SearchType = "2";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'IMPORTER') {
            if (this.fnValidate_Importer()) {
                SearchType = "3";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'BILLTO') {
            if (this.fnValidate_BillTo()) {
                SearchType = "4";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'VESSEL') {
            if (this.fnValidate_Vessel()) {
                SearchType = "5";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'AGENT') {
            if (this.fnValidate_Agent()) {
                SearchType = "6";
                this.getData(SearchType);
            }
        }
        else if (this.Type == 'GL') {
            if (this.fnValidate_Gl()) {
                SearchType = "7";
                this.getData(SearchType);
            }
        }
    };
    SeaSearchComponent.prototype.getData = function (searchtype) {
        var _this = this;
        var _jsonData = {
            Mode: this.Mode,
            ImportCode: this.ImportCode,
            ImportFromDate: (this.ImportFromDate) ? this.SqlDate(this.ImportFromDate.formatted) : "",
            ImportToDate: (this.ImportToDate) ? this.SqlDate(this.ImportToDate.formatted) : "",
            Importer: (this.Importer) ? this.Importer : "",
            ImporterType: this.ImporterType,
            BillTo: (this.BillTo) ? this.BillTo : "",
            BillToType: this.BillToType,
            Vessel: (this.Vessel) ? this.Vessel : "",
            VesselType: this.VesselType,
            Agent: (this.Agent) ? this.Agent : "",
            AgentType: this.AgentType,
            GlFromDate: (this.GlToDate) ? this.SqlDate(this.GlToDate.formatted) : "",
            GlToDate: (this.GlToDate) ? this.SqlDate(this.GlToDate.formatted) : "",
            SearchType: searchtype,
            CityCode1: this._loginService.getLogin()[0].CITYCODE1,
            CmpCode: this._loginService.getLogin()[0].CMPCODE,
        };
        this._loaderService.display(true);
        this._dataService.Common("Import/Report_Search", _jsonData)
            .subscribe(function (data) {
            _this._loaderService.display(false);
            // console.log(data);
            if (data.Table.length == 0) {
                _this._toasterService.toast("warning", "Alert", "No record found");
            }
            else if (data.Table.length == 1) {
                _this._router.navigate(["./import/sea/update-data/", data.Table[0].pk_ImpoterId]);
            }
            else if (data.Table.length > 1) {
                _this.displayType = 'LIST';
                _this.searchList = data.Table;
            }
        });
    };
    SeaSearchComponent.prototype.redirectToEdit = function (pkid) {
        this._router.navigate(["./import/sea/update-data/", pkid]);
    };
    SeaSearchComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    SeaSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-import-sea-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/import/sea/search.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../../../../node_modules/@ng-select/ng-select/themes/default.theme.css */ "./node_modules/@ng-select/ng-select/themes/default.theme.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_4__["ToastCommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], SeaSearchComponent);
    return SeaSearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=sea-sea-module.js.map