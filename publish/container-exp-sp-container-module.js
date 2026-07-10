(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container-exp-sp-container-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/delete_container.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/delete_container.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>DELETE EXISTING CONTAINER</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\" style=\"border: 1px solid gray;\">\r\n                <tbody>\r\n                     <!-- <tr>\r\n                        <td colspan=\"5\" style=\"background-color:lightgrey \">\r\n                         <span class=\"col-form-span-label\"><b>Container Search</b></span></td>\r\n                      </tr> -->\r\n                      <tr>\r\n                        <td class=\"width120\">\r\n                        <span class=\"col-form-span-label\">Container No.:</span></td>\r\n                \r\n                            <td ><input type=\"text\"  style=\"border-radius: 5px;\" maxlength=\"13\" class=\"form-control width150\"\r\n                             [(ngModel)]=\"containerno\"  ></td>\r\n                            <td style=\"text-align: left;\">\r\n                                <button class=\"btn btn-sm btn-success\"  type=\"submit\" id=\"search\" name=\"search\" \r\n                                 (click)=\"search()\" ><span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Search</span></button>\r\n                            </td>\r\n                             <td>\r\n                                <button class=\"btn btn-sm btn-danger\"  type=\"reset\" id=\"delete\" name=\"delete\"  [disabled]='disabledeletebtn'\r\n                                 (click)=\"DeleteContainer()\" ><span class=\"col-form-span-label\"><i class=\"fa fa-trash\" ></i> Delete</span></button>\r\n                            </td>\r\n                            <td style=\"width:150px;\"></td>\r\n                     </tr>\r\n                   <tr>\r\n                    <td colspan=\"5\" style=\"text-align: center;\">\r\n                            <span class=\"col-form-span-label\" style=\"color: red;\"> <b> {{msg}}</b></span>\r\n                    </td>\r\n                   </tr>\r\n                   <tr *ngIf=\"containerlist.length>0\">\r\n                    <td colspan=\"5\">\r\n                         <hr >\r\n                    </td>\r\n                   </tr>\r\n                   \r\n                     <tr>\r\n                        <td colspan=\"4\">\r\n                            \r\n                         <table class=\"table table-responsive-sm table-bordered\"   *ngIf=\"containerlist.length>0\" >\r\n                        <thead>\r\n                            <tr class=\"bakgrdliteBlue\">\r\n                             \r\n                                <th class=\"col-form-span-label  font-weight-bold headerwhite\">Container No</th>\r\n                                <th  class=\"col-form-span-label  font-weight-bold headerwhite\">Expt No</th>\r\n                               \r\n                            </tr>\r\n                        </thead>\r\n                         <tbody  >\r\n                            <tr *ngFor=\"let obj of containerlist\">\r\n                             \r\n                               <td><span class=\"col-form-span-label\" > {{obj.CONTAINERNO}}</span></td>\r\n                               <td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n                            \r\n                            </tr>\r\n                        </tbody>  \r\n                      </table>\r\n                    \r\n                        </td>\r\n                     </tr>\r\n               </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n        </div>\r\n    </div>\r\n    <div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_fs_multicontainer_edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_fs_multicontainer_edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\r\n<!-- <div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header formheading\">\r\n          <strong>CLP</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n    <div class=\"row no-gutters\">\r\n    <!-- <div class=\"col-md-1 col-sm-12 col-lg-1\">\r\n    </div> -->\r\n    <div class=\"col-md-10  col-sm-12 col-lg-12\" >\r\n         <table class=\"table table-borderlessjob  table-sm-new\">\r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"12\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      VESSEL DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                              <tr >\r\n                               <td class=\"width500\"><span class=\"col-form-span-label\">Vessel</span></td>\r\n                                <td class=\"width230\"><span class=\"col-form-span-label\">Vessel Agent</span></td>\r\n                                <td class=\"width240\"> <span class=\"col-form-span-label\">Shpg. Line</span></td>\r\n                              </tr>\r\n                            <tr>\r\n                               \r\n                                <td >\r\n                                        <ng-select [items]=\"vessel\" bindLabel=\"VSLNAME\" bindValue=\"VALUEFILED\"\r\n                                        (ngModelChange)=\"onfillAgent($event)\" [(ngModel)]=\"Vsl\" class=\"custom width500\"\r\n                                        placeholder=\"--Please Select--\">\r\n                                     </ng-select>\r\n                                </td>\r\n                               \r\n                                <td >\r\n                                    <select class=\"form-control width230 \"  [(ngModel)]=\"Vslagt\" (change)=\"onfillshipline($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                \r\n                                <td >\r\n                                    <select class=\"form-control width240 \"  [(ngModel)]=\"Vslshpgline\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslshpline\" value={{d.AGT_LINER}}>{{d.LINER_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            \r\n                           \r\n          </table>\r\n           <table class=\"table table-bordered table-sm-new\" style=\"width:100%\">  \r\n             \r\n                           <tr>\r\n                            <td colspan=\"12\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                 <tr>\r\n                               <td class=\"width250\"><span class=\"col-form-span-label \">Expt No.</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">Pkgs</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label\">Cbm</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label\">Pcs</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">GrWt</span></td>\r\n                                <td class=\"width200\"  ><span class=\"col-form-span-label\">NetWt</span></td>  \r\n                              \r\n                            </tr>\r\n                            <tr>                               \r\n                               \r\n                               \r\n                                <td class=\"width250\">\r\n                                    <select class=\"form-control \"  [disabled]='disable_exptno' [(ngModel)]=\"exptno\" (change)=\"OnChangeExjob($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of ExptNoList\" value={{d.EXPTNO}}>{{d.EXPTNO}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td class=\"col-form-span-label width200\">{{TOTAL_NOOFPKGS}}</td>\r\n                                <td class=\"col-form-span-label width200\">{{TOTAL_CBM}}</td>\r\n                                <td class=\"col-form-span-label width200\">{{TOTAL_NO_OF_PCS}}</td>\r\n                                <td  class=\"col-form-span-label width200\">{{TOTAL_NO_GR_WT}}</td>\r\n                                <td  class=\"col-form-span-label width200\">{{TOTAL_NO_NET_WT}}</td>\r\n                             \r\n                             \r\n                            </tr>  \r\n                                </table>\r\n\r\n                            </td>\r\n                           </tr>\r\n                           <tr>\r\n                            <td colspan=\"12\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                <tr >\r\n                             \r\n                                <td class=\"width250\"><span class=\"col-form-span-label\">No Of Containers to Split</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label\">Container Size</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label \">Container Status</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">Destination Port</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">Move Type</span></td>  \r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\"></span></td>                               \r\n                            </tr>  \r\n                             <tr>\r\n                                <td class=\"width250\"> <input [(ngModel)]=\"noofcontainers\" type=\"text\"  [disabled] ='disable_noofcontainer' class=\"form-control width80\" maxlength=\"2\" ></td>\r\n                                 <td class=\"width200\"><div class=\"form-check form-check-inline\"  style=\"display: flex;\">\r\n                                    <select class=\"form-control width40 form-check-inline\"  [disabled] ='disable_contsize' [(ngModel)]=\"cntsize\">\r\n                                        <option value=\"20\">20</option>\r\n                                        <option value=\"40\">40</option>\r\n                                    </select>\r\n                                    <select class=\"form-control width50 form-check-inline\" [disabled] ='disable_contsize1' [(ngModel)]=\"cntsize1\">\r\n                                        <option value=\"F\">F</option>\r\n                                        <option value=\"H\">H</option>\r\n                                        <option value=\"G\">GOH</option>\r\n                                    </select>                                    \r\n                                </div></td>\r\n                                  <td class=\"width200\">\r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"contstatus\" [disabled] ='disable_contstatus'>\r\n                                        <option value=\"LCL/FCL\">LCL/FCL </option>\r\n                                        <option value=\"FCL/FCL\">FCL/FCL </option>\r\n                                        <option value=\"LCL/LCL\">LCL/LCL </option>\r\n                                        <option value=\"FCL/LCL\">FCL/LCL </option>\r\n                                        <option value=\"GROUPAGE\">GROUPAGE </option>\r\n                                    </select>\r\n                                </td>\r\n\r\n                                <td class=\"width200\">\r\n                                    <select class=\"form-control width150\"  [(ngModel)]=\"destport\" [disabled] ='disable_destport'>\r\n                                        <option value=\"\">Please select</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                        <option *ngFor=\"let d of city\" value={{d.CITY_CODE}}>{{d.CITY_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td class=\"width200\"><select class=\"form-control width100\"  [(ngModel)]=\"Movetype\" [disabled] ='disable_movetype'>\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option value=\"CY/CY\">CY/CY</option>\r\n                                    <option value=\"CFS/CY\">CFS/CY</option>\t\r\n                                    <option value=\"CFS/CFS\">CFS/CFS</option>\t\r\n                                </select>\r\n                                </td>\r\n                                 <td class=\"width200\">\r\n                                      <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled]='disable_grnerate_btn' (click)=\"GenerateContainer()\"><span class=\"col-form-span-label\">\r\n                                        <i class=\"fa fa-plus\"></i> Generate</span></button>\r\n                                 </td>\r\n                            </tr>      \r\n                                </table>\r\n                            </td>\r\n                           </tr>\r\n                            \r\n                            \r\n                                       \r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"9\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      CONTAINER DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                           <tr>\r\n                            <td colspan=\"10\">\r\n                                <table class=\"table table-bordered table-sm-new\" style=\"width:100%;\"> \r\n                                  <tr >\r\n                                <td><span class=\"col-form-span-label\">Container No</span></td>\r\n                                 <td > <span class=\"col-form-span-label\">Steamer Seal No</span></td>\r\n                                <td> <span class=\"col-form-span-label \">Custom Seal No</span></td>\r\n                                <td><span class=\"col-form-span-label\">Freight</span></td>\r\n                                <td > <span class=\"col-form-span-label \">Pkgs</span></td>\r\n                                <td><span class=\"col-form-span-label\">Pcs</span></td>\r\n                                <td><span class=\"col-form-span-label \">GrWt</span></td>\r\n                                <td  ><span class=\"col-form-span-label  \">NetWt</span></td>\r\n                                <td><span class=\"col-form-span-label  \">CBM</span></td>\r\n                                <td ><span class=\"col-form-span-label \">CLP Sq.</span></td> \r\n                            </tr>\r\n                               <tr >\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO\" class=\"form-control width100\" maxlength=\"11\" /></td>\r\n                               \r\n                              \r\n                                <td> <input [(ngModel)]=\"SteAgtSealno\" type=\"text\"    class=\"form-control width100\" maxlength=\"20\" ></td>                              \r\n                                <td><input [(ngModel)]=\"CustSealNo\" type=\"text\"    class=\"form-control width100\" maxlength=\"20\" ></td>\t\r\n                                <td>\r\n                                    <select class=\"form-control width50\"   [(ngModel)]=\"freight\">\r\n                                        <option value=\"PP\">PP</option>\r\n                                        <option value=\"CC\">CC</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                    </select>\r\n                                </td>\t\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NOOFPKGS\" class=\"form-control width100\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_OF_PCS\" class=\"form-control width100\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_GR_WT\" class=\"form-control width100\"/></td>\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_NET_WT\" class=\"form-control width100\"/></td>\r\n                                 <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_CBM\" class=\"form-control width100\"/></td>\r\n                                  <td  ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_CLP_SEQ\" class=\"form-control width100\" maxlength=\"2\" /></td> \r\n                            </tr>\r\n                                </table>\r\n\r\n                            </td>\r\n                           </tr>\r\n                    \r\n                            <tr>\r\n                                <td colspan=\"12\" class=\"centerlabel\" >\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"AddChild()\"><span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i> {{Add}}</span></button>\r\n                                    <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"childreset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                \r\n                                </td>\r\n                            </tr>\r\n                            \r\n           </table>\r\n           <div class=\"row xyscroll\" style=\"height:200px;background-color: white;border-left: 1px solid #d5e5f5;\">\t\t\t\t\t\t\t\t\r\n                            <table class=\"table table-borderlessjob table-sm-new bgwhite\">\r\n                                <thead>\r\n                                    <tr class=\"trheader\">\r\n                                        <th class=\"col-form-span-label\"></th>\r\n                                        <th class=\"col-form-span-label-console\">Container No</th>\r\n                                        <th class=\"col-form-span-label-console\">Size</th>\r\n                                        <th class=\"col-form-span-label-console\">Expt No</th>\r\n                                        <th class=\"col-form-span-label-console\">No Of Pkg</th>\r\n                                        <th class=\"col-form-span-label-console\">CBM</th>\r\n                                        <th class=\"col-form-span-label-console\">No Of Pcs</th>\r\n                                        <th class=\"col-form-span-label-console\">Grwt</th>\r\n                                        <th class=\"col-form-span-label-console\">NetWt</th>\r\n                                        <th class=\"col-form-span-label-console\">CLP Seq.</th>                                      \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                     <tr *ngFor=\"let obj of containerClp \" [class.updated-row]=\"obj.ID=== lastUpdatedRowId\">\t\t\t\t\t\t\t\t\t \r\n                                        <td>\t\t\t\t\t\t\t\t\t\t\t\r\n                                            <i class=\"fa fa-pencil\" (click)=\"EditchildExptNo(obj.ID)\"></i>\t\r\n                                            <!-- <i class=\"fa fa-trash\" (click)=\"deletechildExptNo(obj.ID,obj.CONTAINERID)\" ></i>\t\t\t\t\t\t\t\t\t\t\t  -->\r\n                                        </td> \r\n                                        <td><span class=\"col-form-span-label\">{{obj.CONTAINERNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.SIZEDET}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NETWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CLP_SEQ}}</span></td>                                        \r\n                                    </tr>  \r\n                                </tbody>\t\t\t\t\t\t\t\t\t\r\n                            </table>\r\n             </div>   \r\n    </div>\r\n    <!-- <div class=\"col-md-1  col-sm-12 col-lg-1\">\r\n    </div> -->\r\n    </div>\r\n     <div class=\"row no-gutters\">\r\n    <div class=\"col-md-1 col-sm-12 col-lg-1\">\r\n    </div>\r\n     <div class=\"col-md-10  col-sm-12 col-lg-10 \" >\r\n         <div class=\"d-flex justify-content-center\">\r\n             <button type=\"button\" class=\"btn btn-sm btn-primary mx-2\" (click)=\"finalSubmit()\"><span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Submit</span></button>\r\n              <button type=\"reset\" class=\"btn btn-sm btn-danger mx-2\" (click)=\"masterReset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n              </div>\r\n     </div>\r\n        <div class=\"col-md-1 col-sm-12 col-lg-1\">\r\n    </div>\r\n     </div>\r\n \r\n    \r\n   \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_fs_multicontainer_iu.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_fs_multicontainer_iu.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\r\n<!-- <div class=\"row no-gutters\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header formheading\">\r\n          <strong>CLP</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n    <div class=\"row no-gutters\">\r\n    <!-- <div class=\"col-md-1 col-sm-12 col-lg-1\">\r\n    </div> -->\r\n    <div class=\"col-md-10  col-sm-12 col-lg-12\" >\r\n         <table class=\"table table-bordered table-striped table-sm-new\">\r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"12\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      VESSEL DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                              <tr class=\"col-form-span-heading\">\r\n                               <td class=\"width500\"><span class=\"col-form-span-label\">Vessel</span></td>\r\n                                <td class=\"width230\"><span class=\"col-form-span-label\">Vessel Agent</span></td>\r\n                                <td class=\"width240\"> <span class=\"col-form-span-label\">Shpg. Line</span></td>\r\n                              </tr>\r\n                            <tr>\r\n                               \r\n                                <td >\r\n                                        <ng-select [items]=\"vessel\" bindLabel=\"VSLNAME\" bindValue=\"VALUEFILED\"\r\n                                        (ngModelChange)=\"onfillAgent($event)\" [(ngModel)]=\"Vsl\" class=\"custom width500\"\r\n                                        placeholder=\"--Please Select--\">\r\n                                     </ng-select>\r\n                                </td>\r\n                               \r\n                                <td >\r\n                                    <select class=\"form-control width230 \"  [(ngModel)]=\"Vslagt\" (change)=\"onfillshipline($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                \r\n                                <td >\r\n                                    <select class=\"form-control width240 \"  [(ngModel)]=\"Vslshpgline\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslshpline\" value={{d.AGT_LINER}}>{{d.LINER_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            \r\n                           \r\n          </table>\r\n           <table class=\"table table-bordered table-sm-new\" style=\"width:100%\">  \r\n             \r\n                           <tr>\r\n                            <td colspan=\"12\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                 <tr class=\"col-form-span-heading\">\r\n                               <td class=\"width250\"><span class=\"col-form-span-label \">Expt No.</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">Pkgs</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label\">Cbm</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label\">Pcs</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">GrWt</span></td>\r\n                                <td class=\"width200\"  ><span class=\"col-form-span-label\">NetWt</span></td>  \r\n                              \r\n                            </tr>\r\n                            <tr>                               \r\n                               \r\n                               \r\n                                <td class=\"width250\">\r\n                                    <select class=\"form-control \"  [disabled]='disable_exptno' [(ngModel)]=\"exptno\" (change)=\"OnChangeExjob($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of ExptNoList\" value={{d.EXPTNO}}>{{d.EXPTNO}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td class=\"col-form-span-label width200\">{{TOTAL_NOOFPKGS}}</td>\r\n                                <td class=\"col-form-span-label width200\">{{TOTAL_CBM}}</td>\r\n                                <td class=\"col-form-span-label width200\">{{TOTAL_NO_OF_PCS}}</td>\r\n                                <td  class=\"col-form-span-label width200\">{{TOTAL_NO_GR_WT}}</td>\r\n                                <td  class=\"col-form-span-label width200\">{{TOTAL_NO_NET_WT}}</td>\r\n                             \r\n                             \r\n                            </tr>  \r\n                                </table>\r\n\r\n                            </td>\r\n                           </tr>\r\n                           <tr>\r\n                            <td colspan=\"12\">\r\n                                <table class=\"table table-bordered table-sm-new\">\r\n                                <tr class=\"col-form-span-heading\">\r\n                               \r\n                                <td class=\"width250\"><span class=\"col-form-span-label\">No Of Containers to Split</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label\">Container Size</span></td>\r\n                                <td class=\"width200\"><span class=\"col-form-span-label \">Container Status</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">Destination Port</span></td>\r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\">Move Type</span></td>  \r\n                                <td class=\"width200\" ><span class=\"col-form-span-label\"></span></td>                               \r\n                            </tr>  \r\n                             <tr>\r\n                                <td class=\"width250\"> <input [(ngModel)]=\"noofcontainers\" type=\"text\"  [disabled] ='disable_noofcontainer' class=\"form-control width80\" maxlength=\"2\" ></td>\r\n                                 <td class=\"width200\"><div class=\"form-check form-check-inline\"  style=\"display: flex;\">\r\n                                    <select class=\"form-control width40 form-check-inline\"  [disabled] ='disable_contsize' [(ngModel)]=\"cntsize\">\r\n                                        <option value=\"20\">20</option>\r\n                                        <option value=\"40\">40</option>\r\n                                    </select>\r\n                                    <select class=\"form-control width50 form-check-inline\" [disabled] ='disable_contsize1' [(ngModel)]=\"cntsize1\">\r\n                                        <option value=\"F\">F</option>\r\n                                        <option value=\"H\">H</option>\r\n                                        <option value=\"G\">GOH</option>\r\n                                    </select>                                    \r\n                                </div></td>\r\n                                  <td class=\"width200\">\r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"contstatus\" [disabled] ='disable_contstatus'>\r\n                                        <option value=\"LCL/FCL\">LCL/FCL </option>\r\n                                        <option value=\"FCL/FCL\">FCL/FCL </option>\r\n                                        <option value=\"LCL/LCL\">LCL/LCL </option>\r\n                                        <option value=\"FCL/LCL\">FCL/LCL </option>\r\n                                        <option value=\"GROUPAGE\">GROUPAGE </option>\r\n                                    </select>\r\n                                </td>\r\n\r\n                                <td class=\"width200\">\r\n                                    <select class=\"form-control width150\"  [(ngModel)]=\"destport\" [disabled] ='disable_destport'>\r\n                                        <option value=\"\">Please select</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                        <option *ngFor=\"let d of city\" value={{d.CITY_CODE}}>{{d.CITY_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td class=\"width200\"><select class=\"form-control width100\"  [(ngModel)]=\"Movetype\" [disabled] ='disable_movetype'>\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option value=\"CY/CY\">CY/CY</option>\r\n                                    <option value=\"CFS/CY\">CFS/CY</option>\t\r\n                                    <option value=\"CFS/CFS\">CFS/CFS</option>\t\r\n                                </select>\r\n                                </td>\r\n                                 <td class=\"width200\">\r\n                                      <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled]='disable_grnerate_btn' (click)=\"GenerateContainer()\"><span class=\"col-form-span-label\">\r\n                                        <i class=\"fa fa-plus\"></i> Generate</span></button>\r\n                                 </td>\r\n                            </tr>      \r\n                                </table>\r\n                            </td>\r\n                           </tr>\r\n                            \r\n                            \r\n                                       \r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"9\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      CONTAINER DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                           <tr>\r\n                            <td colspan=\"10\">\r\n                                <table class=\"table table-bordered table-sm-new\" style=\"width:100%;\"> \r\n                                  <tr class=\"col-form-span-heading\">\r\n                                <td><span class=\"col-form-span-label\">Container No</span></td>\r\n                                 <td > <span class=\"col-form-span-label\"><b>Steamer Seal No</b></span></td>\r\n                                <td> <span class=\"col-form-span-label \"><b>Custom Seal No</b></span></td>\r\n                                <td><span class=\"col-form-span-label\"><b>Freight</b></span></td>\r\n                                <td > <span class=\"col-form-span-label font-weight-bold\">Pkgs</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold\">Pcs</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold \">GrWt</span></td>\r\n                                <td  ><span class=\"col-form-span-label font-weight-bold \">NetWt</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold \">CBM</span></td>\r\n                                <td ><span class=\"col-form-span-label font-weight-bold\">CLP Sq.</span></td> \r\n                            </tr>\r\n                               <tr >\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO\" class=\"form-control width100\" maxlength=\"11\" /></td>\r\n                               \r\n                              \r\n                                <td> <input [(ngModel)]=\"SteAgtSealno\" type=\"text\"    class=\"form-control width100\" maxlength=\"20\" ></td>                              \r\n                                <td><input [(ngModel)]=\"CustSealNo\" type=\"text\"    class=\"form-control width100\" maxlength=\"20\" ></td>\t\r\n                                <td>\r\n                                    <select class=\"form-control width50\"   [(ngModel)]=\"freight\">\r\n                                        <option value=\"PP\">PP</option>\r\n                                        <option value=\"CC\">CC</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                    </select>\r\n                                </td>\t\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NOOFPKGS\" class=\"form-control width100\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_OF_PCS\" class=\"form-control width100\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_GR_WT\" class=\"form-control width100\"/></td>\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_NET_WT\" class=\"form-control width100\"/></td>\r\n                                 <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_CBM\" class=\"form-control width100\"/></td>\r\n                                  <td  ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_CLP_SEQ\" class=\"form-control width100\" maxlength=\"2\" /></td> \r\n                            </tr>\r\n                                </table>\r\n\r\n                            </td>\r\n                           </tr>\r\n                    \r\n                            <tr>\r\n                                <td colspan=\"12\" class=\"centerlabel\" >\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"AddChild()\"><span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i> {{Add}}</span></button>\r\n                                    <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"childreset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                \r\n                                </td>\r\n                            </tr>\r\n                            \r\n           </table>\r\n           <div class=\"row xyscroll\" style=\"height:200px;background-color: white;border-left: 1px solid #d5e5f5;\">\t\t\t\t\t\t\t\t\r\n                            <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                                <thead>\r\n                                    <tr class=\"title-head formheading\">\r\n                                        <th class=\"col-form-span-label\"></th>\r\n                                        <th class=\"col-form-span-label\">Container No</th>\r\n                                        <th class=\"col-form-span-label\">Size</th>\r\n                                        <th class=\"col-form-span-label\">Expt No</th>\r\n                                        <th class=\"col-form-span-label\">No Of Pkg</th>\r\n                                        <th class=\"col-form-span-label\">CBM</th>\r\n                                        <th class=\"col-form-span-label\">No Of Pcs</th>\r\n                                        <th class=\"col-form-span-label\">Grwt</th>\r\n                                        <th class=\"col-form-span-label\">NetWt</th>\r\n                                        <th class=\"col-form-span-label\">CLP Seq.</th>                                      \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                     <tr *ngFor=\"let obj of containerClp \">\t\t\t\t\t\t\t\t\t \r\n                                        <td>\t\t\t\t\t\t\t\t\t\t\t\r\n                                            <i class=\"fa fa-pencil\" (click)=\"EditchildExptNo(obj.ID)\"></i>\t\r\n                                            <i class=\"fa fa-trash\" (click)=\"deletechildExptNo(obj.ID,obj.CONTAINERID)\" ></i>\t\t\t\t\t\t\t\t\t\t\t \r\n                                        </td> \r\n                                        <td><span class=\"col-form-span-label\">{{obj.CONTAINERNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.SIZEDET}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NETWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CLP_SEQ}}</span></td>                                        \r\n                                    </tr>  \r\n                                </tbody>\t\t\t\t\t\t\t\t\t\r\n                            </table>\r\n             </div>   \r\n    </div>\r\n    <!-- <div class=\"col-md-1  col-sm-12 col-lg-1\">\r\n    </div> -->\r\n    </div>\r\n     <div class=\"row no-gutters\">\r\n    <div class=\"col-md-1 col-sm-12 col-lg-1\">\r\n    </div>\r\n     <div class=\"col-md-10  col-sm-12 col-lg-10 \" >\r\n         <div class=\"d-flex justify-content-center\">\r\n             <button type=\"button\" class=\"btn btn-sm btn-primary mx-2\" (click)=\"finalSubmit()\"><span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Submit</span></button>\r\n              <button type=\"reset\" class=\"btn btn-sm btn-danger mx-2\" (click)=\"masterReset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n              </div>\r\n     </div>\r\n        <div class=\"col-md-1 col-sm-12 col-lg-1\">\r\n    </div>\r\n     </div>\r\n \r\n    \r\n   \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_container_IU.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_sp_container_IU.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<tabset #containerTabs class=\"tab-container\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"tab-content\">\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--  -->\r\n\t\t\t\t\t\t\t<tab heading=\"Container\" class=\"tab-pane active\"   >\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" >{{vsldet}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to List</u></span></button>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Agent<span class=\"col-form-span-error\">*</span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width500\"  [(ngModel)]=\"Vslagt\" (change)=\"onfillshipline($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">Shpg. Line<span class=\"col-form-span-error\">*</span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width500\"  [(ngModel)]=\"Vslshpgline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of vslshpline\" value={{d.AGT_LINER}}>{{d.LINER_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Container No.<span class=\"col-form-span-error\">*</span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"Containerno\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" placeholder=\"Containerno\">\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\">Container Size<span class=\"col-form-span-error\">*</span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width50 form-check-inline\"  [(ngModel)]=\"cntsize\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"20\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"40\">40</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width50 form-check-inline\"  [(ngModel)]=\"cntsize1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"F\">F</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"H\">H</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"G\">GOH</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"R\">RFR</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"P\">PAL</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"O\">OPN</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"L\">LCL</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\t\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">Status Container</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width100\"  [(ngModel)]=\"contstatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"LCL/FCL\">LCL/FCL </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"FCL/FCL\">FCL/FCL </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"LCL/LCL\">LCL/LCL </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"FCL/LCL\">FCL/LCL </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"GROUPAGE\">GROUPAGE </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Destination Port</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"destport\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of city\" value={{d.CITY_CODE}}>{{d.CITY_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Move Type</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><select class=\"form-control width80\"  [(ngModel)]=\"Movetype\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CY/CY\">CY/CY</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CFS/CY\">CFS/CY</option>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CFS/CFS\">CFS/CFS</option>\t\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td > <span class=\"col-form-span-label \">Steamer Agent Seal No</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <input [(ngModel)]=\"SteAgtSealno\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" ></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">H.Stuffed</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width50\"  [(ngModel)]=\"hstuffed\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"YES\">YES</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"NO\">NO</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">Where</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"stufwhere\" type=\"text\"  class=\"form-control width180\" maxlength=\"40\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"stufwhere2\" type=\"text\"  class=\"form-control width180\" maxlength=\"40\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"stufwhere3\" type=\"text\"  class=\"form-control width180\" maxlength=\"40\"  >\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"stufcity\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of city\" value={{d.CITY_CODE}}>{{d.CITY_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"><span class=\"col-form-span-label fontcolorRed \">If it is H. Stuffed then\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t\t\t\t\tplease mention the detail stuffing address and\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t\t\t\t\tif it is not H. Stuffed then\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t\t\t\tplease mention where it is stuffed i.e. CFS, ICD etc</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">Custom Seal No</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"CustSealNo\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" ></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">FREIGHT</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width50\" (click)=\"onchangeFreight($event.target.value)\"   [(ngModel)]=\"freight\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"PP\">PP</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CC\">CC</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\">  </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"radio\"  [disabled]=\"freightEnable\"    (checked)= \"LINERCONTRACT=='L'\" (click)=\"radioonclick('L')\"  name=\"rlist\" /><span class=\"col-form-span-label \">Payable to shpg line</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"radio\"  [disabled]=\"freightEnable\" (checked)=\"LINERCONTRACT =='S'\" (click)=\"radioonclick('S')\" name=\"rlist\" /><span class=\"col-form-span-label \">As per Service Contract </span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"2\" > <span class=\"col-form-span-label \">Charges</span></td>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">FREIGHT</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td > \r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"frtCurency\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"frtCurChargs\" type=\"text\" [disabled]= \"freightRateEnable\"   class=\"form-control width180\" maxlength=\"18\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">BAF</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"BAFCurency\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"BAFCurChargs\" type=\"text\"  [disabled]= \"freightRateEnable\"    class=\"form-control width180\" maxlength=\"18\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Booking Carrier No</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"BcarrierNo\" type=\"text\"    class=\"form-control width180\" maxlength=\"18\"  ></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Booking Carrier Confirm Dt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><my-date-picker   [options]=\"myDatePickerOptions\" [(ngModel)]=\"Bcarrierdt\" required></my-date-picker></td>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"2\"><span class=\"col-form-span-label \">Other Charges</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <input [(ngModel)]=\"ThcName\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\"  ></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"ThcCurency\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"ThcCurChargs\" type=\"text\"    class=\"form-control width180\" maxlength=\"18\" >\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td> <input [(ngModel)]=\"otherName\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\"  ></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"OtherCurency\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"otherCurChargs\" type=\"text\"    class=\"form-control width180\" maxlength=\"18\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td ><span class=\"col-form-span-label\">Contract<span class=\"col-form-span-error\">*</span></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\"><select class=\"form-control width150\"  [(ngModel)]=\"contract\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Link Cargo </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Client</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t</select></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\" colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tExchange Rate\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading \"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading \" ><span class=\"col-form-span-heading \">CURRENCY</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading \"><span class=\"col-form-span-heading \">VALUE</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading \"></td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading \"><span class=\"col-form-span-heading \">CURRENCY</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading \"><span class=\"col-form-span-heading \">VALUE</span></td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-heading \">ORIGIN PORT<span class=\"col-form-span-error\">*</span></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"OCUR1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"OCURRate1\" type=\"text\"    class=\"form-control width180\" maxlength=\"10\"  ></td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>=</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"OCUR2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"OCURRate2\" type=\"text\"    class=\"form-control width180\" maxlength=\"10\"  > </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-heading \">DESTINATION PORT</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"DCUR1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"DCURRate1\" type=\"text\"    class=\"form-control width180\" maxlength=\"10\"  ></td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>=</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width150\"  [(ngModel)]=\"DCUR2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of currency\" value={{d.CUR_CODE}}>{{d.CUR_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"DCURRate2\" type=\"text\"    class=\"form-control width180\" maxlength=\"10\"  ></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Remark</span></td>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\"><textarea [(ngModel)]=\"remark\" class=\"form-control width500\"  rows=\"3\" cols=\"100\" maxlength=\"500\" ></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer rightlabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success   \" type=\"submit\" id=\"btnAgtAdd\" name=\"btnAgtAdd\" [disabled]=\"buttonStatus\" (click)=\"AddEditContainer()\"><i class=\"fa fa-dot-circle-o\" ></i> Submit</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-danger   \" type=\"reset\" id=\"btnAgtRest\" name=\"btnAgtrest\" (click)=\"ResetAll()\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</table>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</tab>\r\n\t\t\t\t\t\t\t<!-- -->\r\n\t\t\t\t\t\t\t<tab heading=\"CLP\" class=\"tab-pane\"    >\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"23\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" >{{clpHeader}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to List</u></span></button>\r\n\t\t\t\t\t\t\t\t\t\t</td> \t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tr> \r\n\t\t\t\t\t\t\t\t\t<tr  class=\"bakgrdskyBlue\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td></td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td rowspan=\"3\"  ><span class=\"col-form-span-label font-weight-bold \">Expt No.</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"centerlabel\"> <span class=\"col-form-span-label font-weight-bold  \">Total</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"centerlabel\"> <span class=\"col-form-span-label font-weight-bold \">Available</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"6\" class=\"centerlabel\"> <span class=\"col-form-span-label font-weight-bold \">This Container</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td rowspan=\"3\"><span class=\"col-form-span-label font-weight-bold \">Color<br>Code</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td rowspan=\"3\"><span class=\"col-form-span-label font-weight-bold\">Container No <br> If Required</span></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\"><span class=\"col-form-span-label font-weight-bold\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\"><span class=\"col-form-span-label font-weight-bold\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td ><input type=\"text\" [(ngModel)]=\"pkgs\" class=\"form-control\" disabled/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td ><input type=\"text\" [(ngModel)]=\"cbm\" class=\"form-control\" disabled/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td ><input type=\"text\" [(ngModel)]=\"pcs\" class=\"form-control\" disabled/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td ><input type=\"text\" [(ngModel)]=\"grwt\" class=\"form-control\" disabled/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td ><input type=\"text\" [(ngModel)]=\"netwt\" class=\"form-control\" disabled/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td ><input type=\"text\" [(ngModel)]=\"clp\" class=\"form-control\" disabled/></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr class=\"bakgrdliteBlue\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td  ><span class=\"col-form-span-label font-weight-bold\">Select</span></td> -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td></td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">pkgs</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">CBM</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">Pcs</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">GrWt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">NetWt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">pkgs</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">CBM</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">Pcs</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">GrWt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">NetWt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">pkgs</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">CBM</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">Pcs</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">GrWt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">NetWt</span></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">CLP Sq.</span></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of containerClp\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td   class=\"col-form-span-label\"> <input type=\"checkbox\" [(ngModel)]=\"obj.EXPTNO\"  >{{obj.EXPTNO}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"> \r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"obj.TRANS_TYPE\"> \r\n\t\t\t\t\t\t\t\t\t\t\t</span>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t{{obj.EXPTNO}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.TOTAL_NOOFPKGS}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.TOTAL_CBM}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.TOTAL_NO_OF_PCS}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.TOTAL_NO_GR_WT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.TOTAL_NO_NET_WT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.AVAILABLE_NOOFPKGS}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.AVAILABLE_CBM}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.AVAILABLE_NO_OF_PCS}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.AVAILABLE_NO_GR_WT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.AVAILABLE_NO_NET_WT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.THIS_CONTAINER_NOOFPKGS\" class=\"form-control\" (change)=\"selectionChange('THIS_CONTAINER_NOOFPKGS')\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.THIS_CONTAINER_CBM\" class=\"form-control\" (change)=\"selectionChange('THIS_CONTAINER_CBM')\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.THIS_CONTAINER_NO_OF_PCS\" class=\"form-control\" (change)=\"selectionChange('THIS_CONTAINER_NO_OF_PCS')\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.THIS_CONTAINER_NO_GR_WT\" class=\"form-control\"  (change)=\"selectionChange('THIS_CONTAINER_NO_GR_WT')\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.THIS_CONTAINER_NO_NET_WT\" class=\"form-control\"  (change)=\"selectionChange('THIS_CONTAINER_NO_NET_WT')\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.THIS_CONTAINER_NO_CLP_SEQ\" class=\"form-control\" maxlength=\"2\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.COLOUR_CODE\" class=\"form-control\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t<td> <select class=\"form-control width80\"  [(ngModel)]=\"obj.CONTAINER_NO\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of containerNoClp\" value={{d.CONTAINERNO}}>{{d.CONTAINERNO}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> </td>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"23\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label centerlabel\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"verified\" [disabled]=\"verifiedflg != ''\"  > Verified    \r\n\t\t\t\t\t\t\t\t\t\t\t</span>\t\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"23\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer rightlabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success   \" type=\"submit\" id=\"btnAgtAdd\" name=\"btnAgtAdd\" [disabled]=\"buttonStatus\" (click)=\"addContainerCLP()\"><i class=\"fa fa-dot-circle-o\" ></i> Submit</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-danger   \" type=\"reset\" id=\"btnAgtRest\" name=\"btnAgtrest\" (click)=\"ResetAll()\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</tab>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<tab heading =\"No of Pallet\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"2\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" >No Of Pallets</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to List</u></span></button>\r\n\t\t\t\t\t\t\t\t\t\t\t</td> \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Containerno</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" >{{P_Containerno}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"2\"    >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" >{{p_header}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td> \r\n\t\t\t\t\t\t\t\t\t\t</tr> \r\n\t\t\t\t\t\t\t\t\t\t<tr class=\"bakgrdliteBlue\">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">Exporter</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label font-weight-bold\">No of Pallets</span></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of P_List\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CON_NAME}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"obj.NO_OF_PALLETS\" class=\"form-control\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer rightlabel\">\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\" id=\"btnAgtAdd\" name=\"btnAgtAdd\" [disabled]=\"buttonStatus\" (click)=\"AddPallets()\"><i class=\"fa fa-dot-circle-o\" ></i> Submit</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</tab>\r\n\t\t\t\t\t\t\t<!--<tab heading =\"Container Transfer\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"4\"    >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\" >{{T_header}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td> \r\n\t\t\t\t\t\t\t\t\t\t</tr> \r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of T_List\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.Containerno}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.Exptno}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.Tot_pkgs}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.Tot_Cbm}}</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">New Vessel</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width500\"  [(ngModel)]=\"T_vessel\" (change)=\"onfillshipline($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Vessel Agent</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width500\"  [(ngModel)]=\"T_Vslagt\" (change)=\"onfillshipline($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Shpg Line</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control width500\"  [(ngModel)]=\"T_shpgline\" (change)=\"onfillshipline($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</tab>-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</tabset>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_container_vessel_vw.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_sp_container_vessel_vw.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"animated fadeIn\">\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\"> \r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\t\r\n\t\t\t\t\t\t\t<!-- <accordion>\r\n\t\t\t\t\t\t\t\t<accordion-group heading=\"Static Header, initially expanded\"\r\n\t\t\t\t\t\t\t\t[isOpen]=\"status.isFirstOpen\">\r\n\t\t\t\t\t\t\t\tThis content is straight in the template.\r\n\t\t\t\t\t\t\t\t</accordion-group>\r\n\t\t\t\t\t\t\t</accordion> -->\r\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label\"><b>Vessel Details</b></span>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\" style=\"float: right;\" (click)=\"back();\"><span class=\"col-form-span-label\"><u><i class=\"fa fa-arrow-circle-left\"></i>&nbsp;Back to search</u></span></button>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td rowspan=\"3\"> <span class=\"col-form-span-label \">Vessel Details</span></td>\r\n\t\t\t\t\t\t\t\t\t<td ><span class=\"col-form-span-label\" >{{ VSL_NAMERot }}</span></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\" >{{VSL_VOYAGE_ETD  }}</span></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\" >{{ PORT }}</span></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">Last Carting Date</span></td>\r\n\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\" >{{ vslLstCartdt }}</span></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<!-- <tr>\r\n\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">ETD</span></td>\r\n\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\" >{{ vslEtd }}</span></td>\r\n\t\t\t\t\t\t\t\t</tr> -->\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td> <span class=\"col-form-span-label \">Actual Departure</span></td>\r\n\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label\" >{{ vslActDepart }}</span></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td    colspan=\"2\" class=\"rightlabel\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning active btn-md-2\" type=\"button\" (click)=\"AddContainer()\">   Add Container</button>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-heading\"  colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t\tContainer List\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"bakgrdliteBlue width100per\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<thead  class=\"bakgrdskyBlue\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\" >Verified</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Container Det</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Agent Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Shpg Line</th>  \r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Destination</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Pkgs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Volume</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let c of contList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td >  <i [ngClass]=\"(c.CHECK==true) ? 'fa fa-minus-square-o': 'fa fa-plus-square-o'\" (click)=\"getContJob(c.CONTAINERNO)\"></i>  </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold\">{{c.VERIFIED}}</td>\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold \" style=\"color: blue;\"(click)=\"contineronclick(c.CONTAINERID,c.VERIFIED)\" ><a>{{c.CONDET}} </a></td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold\">{{c.AGT_NAME}}</td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold\">{{c.SHPGLINE}}</td>\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold\">{{c.DESTPORT}}</td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold\">{{c.NOOFPKGS}}</td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label font-weight-bold\">{{c.CBM}}</td>\t\r\n                                                        <td class=\"col-form-span-label font-weight-bold\"> <i class=\"fa fa-download\" (click)=\"ClpDownload(c.CONTAINERNO)\"></i></td>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"c.CHECK==true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"bakgrdwhite width100per\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Agent Seal No</span> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.AGTSEALNO}}</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Custom Seal No</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"><span class=\"col-form-span-label \">{{c.AGTSEALNO}}</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">FREIGHT</span> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.FREIGHT}}</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Freight</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"><span class=\"col-form-span-label \">{{c.FREIGHT_CHARGE}}</span>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">BAF</span> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.BAF_CHARGE}}</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Other Charges</span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"><span class=\"col-form-span-label \">{{c.OTHER_CHARGE}}</span>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Remark</span> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\"><span class=\"col-form-span-label \">{{c.REMARK}}</span>\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Origin Port</span></td> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Currency</span> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Value</span>\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Currency</span> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td ><span class=\"col-form-span-label \">Value</span> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.O_CUR1}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.OCURRATE1}}</span></td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.O_CUR2}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.OCURRATE2}}</span></td>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">Dest. Port</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.D_CUR1}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.DCURRATE1}}</span></td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.D_CUR2}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label \">{{c.DCURRATE2}}</span></td>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"c.CHECK==true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"bakgrdwhite width100per\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\" >Exptno</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Shipper</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Consignee</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">NoofPcs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">NoofPkgs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Gr.Wt</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Net.Wt</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">CBM</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Orderno</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">CLP Seq.</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let obj of filtjoblist\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"3\" class=\"col-form-span-label\">{{obj.EXPTNO}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.EXP_NAME}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CON_NAME}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.NOOFPCS}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.NOOFPKGS}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.GRWT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.NETWT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CBM}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let o of orderList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  *ngIf =\"obj.EXPTNO==o.EXPTNO_O\"  class=\"col-form-span-label\">{{o.ORDERNO}}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CLP_SEQUENCE}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\" >Description</th>\t\t\t\t\t\t\t\t\t\t\t\t\t \t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\"colspan=\"7\"  >{{obj.DESCRIPTION}}</td>  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\" >FCR No.</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.FCR_NO}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\" colspan=\"2\" >FCR Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\" colspan=\"5\">{{obj.FCR_DATE}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t</div>\t\r\n</div>\r\n\r\n<!-- \t\r\n\t<div class=\"card-body\"> \r\n\t<div class=\"row\">\r\n\t\r\n\t<div class=\"col-md-6\"> \r\n\t\r\n\t\r\n\t\r\n\t</div>\r\n\t</div>\r\n\t</div>\r\n\t</div> \r\n\t</div>\r\n-->\r\n<!-- <div class=\"col-md-7\">\r\n\t<div class=\"card\">\r\n\t<div class=\"card-body\"> \r\n\t<div class=\"row\">\r\n\t\r\n\t<div class=\"col-md-6  \">\r\n\t<table class=\"table table-bordered table-sm-new\">\r\n\t<tr>\r\n\t<td class=\"col-form-span-heading\"  colspan=\"2\">\r\n\tContainer Details\r\n</td>\t\t\t\t\t\t\t\t\t\r\n</tr>\r\n<tr>\r\n<td rowspan=\"4\" style=\"width:150px;\"> <span class=\"col-form-span-label \">Vessel Details</span></td>\r\n<td><span class=\"col-form-span-label\" >{{VSL_NAMERot}}</span></td>\r\n</tr>\r\n<tr>\t\t\t\t\t\t\t\t\t \r\n<td><span class=\"col-form-span-label\" >{{VSL_VOYAGE_ETD}}</span></td>\r\n</tr>\r\n<tr>\t\t\t\t\t\t\t\t\t \r\n<td><span class=\"col-form-span-label\" >{{PORT}}</span></td>\r\n</tr>\r\n<tr>\t\t\t\t\t\t\t\t\t \r\n<td><span class=\"col-form-span-label\" >{{ORIGINPORT}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Vessel Agent</span></td>\r\n<td><span class=\"col-form-span-label\" >{{AGT_NAME}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Shpg Line</span></td>\r\n<td><span class=\"col-form-span-label\" >{{SHPGLINE}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Container No.</span></td>\r\n<td><span class=\"col-form-span-label\" >{{CONTAINERNO}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Container Size</span></td>\r\n<td><span class=\"col-form-span-label\" >{{SIZE}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Status of Container</span></td>\r\n<td><span class=\"col-form-span-label\" >{{CONTAINERSTATUS}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Destination Port</span></td>\r\n<td><span class=\"col-form-span-label\" >{{DESTPORT}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Steamer Agent Seal No</span></td>\r\n<td><span class=\"col-form-span-label\" >{{DESTPORT}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Stuffed at</span></td>\r\n<td><span class=\"col-form-span-label\" >{{STUFFED_AT}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Custom Seal No</span></td>\r\n<td><span class=\"col-form-span-label\" >{{CUSTSEALNO}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Freight</span></td>\r\n<td><span class=\"col-form-span-label\" >{{FREIGHT}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Freight</span></td>\r\n<td><span class=\"col-form-span-label\" >{{FREIGHT_CHARGE}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">BAF</span></td>\r\n<td><span class=\"col-form-span-label\" >{{BAF_CHARGE}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Other Charges</span></td>\r\n<td><span class=\"col-form-span-label\" >{{OTHER_CHARGE}}</span></td>\r\n</tr>\r\n<tr>\r\n<td > <span class=\"col-form-span-label \">Remark</span></td>\r\n<td><span class=\"col-form-span-label\" >{{REMARK}}</span></td>\r\n</tr>\r\n<tr>\r\n<td colspan=\"2\">\r\n<table class=\"table table-hover\">\r\n<thead>\t\t\t\t\t\t\t\t\t\t\t\t\r\n<th class=\"col-form-span-label\" > </th>\r\n<th class=\"col-form-span-label\">Currency</th>\r\n<th class=\"col-form-span-label\">value</th>\r\n<th class=\"col-form-span-label\">Currency</th>\r\n<th class=\"col-form-span-label\">value</th>\r\n</thead>\r\n<tbody>\r\n<tr >\r\n<td class=\"col-form-span-label\">ORIGIN PORT</td>\r\n<td><span class=\"col-form-span-label\" >{{O_CUR1}}</span></td>\r\n<td><span class=\"col-form-span-label\" >{{OCURRATE1 }}</span></td>\r\n<td><span class=\"col-form-span-label\" >{{O_CUR2}}</span></td>\r\n<td><span class=\"col-form-span-label\" >{{OCURRATE2}}</span></td>\r\n</tr>\r\n<tr >\r\n<td class=\"col-form-span-label\">DEST. PORT</td>\r\n<td><span class=\"col-form-span-label\" >{{D_CUR1}}</span></td>\r\n<td><span class=\"col-form-span-label\" >{{DCURRATE1}}</span></td>\r\n<td><span class=\"col-form-span-label\" >{{D_CUR2}}</span></td>\r\n<td><span class=\"col-form-span-label\" >{{DCURRATE2}}</span></td>\r\n</tr>\r\n</tbody>\r\n</table>\t\t\t\t\t\t\t\t\t\t\r\n</td>\r\n</tr>\r\n\r\n<tr>\r\n<td class=\"col-form-span-heading\"  colspan=\"2\">\r\nConsignment Details\r\n</td>\t\t\t\t\t\t\t\t\t\r\n</tr>\r\n<tr>\r\n<td colspan=\"2\">\r\n<table class=\"table table-hover\">\r\n<thead>\t\t\t\t\t\t\t\t\t\t\t\t\r\n<th class=\"col-form-span-label\" >Exptno</th>\r\n<th class=\"col-form-span-label\">Shipper</th>\r\n<th class=\"col-form-span-label\">Consignee</th>\r\n<th class=\"col-form-span-label\">NoofPcs</th>\r\n<th class=\"col-form-span-label\">NoofPkgs</th>\r\n<th class=\"col-form-span-label\">Gr.Wt</th>\r\n<th class=\"col-form-span-label\">Net.Wt</th>\r\n<th class=\"col-form-span-label\">CBM</th>\r\n<th class=\"col-form-span-label\">Orderno</th>\r\n<th class=\"col-form-span-label\">CLP Seq.</th>\r\n</thead>\t\t\t\t\t\t\t\t\t\t\t \r\n<tbody *ngFor=\"let d of exJoblist\" >\r\n<tr  >\t\r\n<td rowspan=\"3\" class=\"col-form-span-label\">{{d.EXPTNO}}</td>\r\n<td class=\"col-form-span-label\">{{d.EXP_NAME}}</td>\r\n<td class=\"col-form-span-label\">{{d.CON_NAME}}</td>\r\n<td class=\"col-form-span-label\">{{d.NOOFPCS}}</td>\r\n<td class=\"col-form-span-label\">{{d.NOOFPKGS}}</td>\r\n<td class=\"col-form-span-label\">{{d.GRWT}}</td>\r\n<td class=\"col-form-span-label\">{{d.NETWT}}</td>\r\n<td class=\"col-form-span-label\">{{d.CBM}}</td>\r\n<td>\r\n<table class=\"table table-hover\">\r\n<tr *ngFor=\"let o of orderList\">\r\n<td  *ngIf =\"EXPTNO==EXPTNO_O\"  class=\"col-form-span-label\">{{o.ORDERNO}}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n</td>\r\n</tr>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n</table>\r\n</td>\r\n\r\n<td class=\"col-form-span-label\">{{d.CLP_SEQUENCE}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \r\n</tr>\r\n<tr>\r\n<th class=\"col-form-span-label\" >Description</th>\t\t\t\t\t\t\t\t\t\t\t\t\t \t\r\n<td class=\"col-form-span-label\"colspan=\"7\"  >{{d.DESCRIPTION}}</td>  \r\n</tr>\r\n<tr>\r\n<th class=\"col-form-span-label\" >FCR No.</th>\r\n<td class=\"col-form-span-label\">{{d.FCR_NO}}</td>\r\n<th class=\"col-form-span-label\" colspan=\"2\" >FCR Date</th>\r\n<td class=\"col-form-span-label\" colspan=\"5\">{{d.FCR_DATE}}</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</td>\t\t\t\t\t\t\t\r\n\r\n</tr>\r\n</table>\t\t\t\t\t\t\t\r\n<!--\t\t</div>\r\n</div>\r\n</div>\r\n</div> \r\n</div>\t\t\r\n</div>\t\t\t\t-->\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n<!--  </div> -->\t\t\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n\t\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t\t   <strong>EXPORT CONSINGNMENT</strong>\r\n\t\t\t\t</div>\r\n                <div class=\"card-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t</div>\r\n                    <div class=\"col-sm-8\">\r\n                        <table class=\"table table-bordered table-striped table-sm-new\">\r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"4\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      VESSEL DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label \"><b>Vessel</b> <span class=\"col-form-span-error\">*</span></span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <!-- <select class=\"form-control width500\"  [(ngModel)]=\"Vsl\" (change)=\"onfillAgent($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vessel\" value={{d.VALUEFILED}}>{{d.VSLNAME}}</option>\r\n                                    </select> -->\r\n                                     <ng-select [items]=\"vessel\" bindLabel=\"VSLNAME\" bindValue=\"VALUEFILED\"\r\n                                        (ngModelChange)=\"onfillAgent($event)\" [(ngModel)]=\"Vsl\" class=\"custom \"\r\n                                        placeholder=\"--Please Select--\">\r\n                                     </ng-select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label \"><b>Vessel Agent</b><span class=\"col-form-span-error\">*</span></span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <select class=\"form-control width500\"  [(ngModel)]=\"Vslagt\" (change)=\"onfillshipline($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\"><b>Shpg. Line</b><span class=\"col-form-span-error\">*</span></span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <select class=\"form-control width500\"  [(ngModel)]=\"Vslshpgline\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslshpline\" value={{d.AGT_LINER}}>{{d.LINER_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                           \r\n                        </table>\r\n                    </div>\r\n                    </div>               \r\n                    <div class=\"row\">\r\n                    <!-- <div class=\"col-sm-1\">\r\n                    </div> -->\r\n                    <div class=\"col-sm-12\">\r\n\r\n                        <table class=\"table table-bordered table-sm-new\" style=\"width:100%\">                           \r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"9\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      CONTAINER DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                            <!-- <tr  class=\"bakgrdskyBlue\">\r\n                                <td colspan=\"2\"><span class=\"col-form-span-label font-weight-bold \">Container Det.</span></td>     \r\n                            </tr> -->\r\n                            <tr class=\"trheadercontainer\">\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite\">Container No</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite\">Container Size</span></td>\r\n                                <td> <span class=\"col-form-span-label headerwhite \"><b>Cont. Status</b></span></td>\r\n                                <td><span class=\"col-form-span-label headerwhite\"><b>Destination Port</b></span></td>\r\n                                <td><span class=\"col-form-span-label headerwhite\"><b>Move Type</b></span></td>\r\n                                <td > <span class=\"col-form-span-label headerwhite\"><b>Steamer Agent Seal No</b></span></td>\r\n                                <td> <span class=\"col-form-span-label headerwhite\"><b>Custom Seal No</b></span></td>\r\n                                <td><span class=\"col-form-span-label headerwhite\"><b>FREIGHT</b></span></td>\r\n\r\n                            </tr>\r\n                            <tr >\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO\" class=\"form-control width120\" maxlength=\"11\" /></td>\r\n                                <td><div class=\"form-check form-check-inline\"  style=\"display: flex;\">\r\n                                    <select class=\"form-control width40 form-check-inline\"  [(ngModel)]=\"cntsize\">\r\n                                        <option value=\"20\">20</option>\r\n                                        <option value=\"40\">40</option>\r\n                                    </select>\r\n                                    <select class=\"form-control width50 form-check-inline\"  [(ngModel)]=\"cntsize1\">\r\n                                        <option value=\"F\">F</option>\r\n                                        <option value=\"H\">H</option>\r\n                                        <option value=\"G\">GOH</option>\r\n                                        <option value=\"R\">RFR</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"P\">PAL</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"O\">OPN</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"L\">LCL</option>\r\n                                    </select>                                    \r\n                                </div></td>\r\n                                <td>\r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"contstatus\">\r\n                                        <option value=\"LCL/FCL\">LCL/FCL </option>\r\n                                        <option value=\"FCL/FCL\">FCL/FCL </option>\r\n                                        <option value=\"LCL/LCL\">LCL/LCL </option>\r\n                                        <option value=\"FCL/LCL\">FCL/LCL </option>\r\n                                        <option value=\"GROUPAGE\">GROUPAGE </option>\r\n                                    </select>\r\n                                </td>\r\n\r\n                                <td>\r\n                                    <select class=\"form-control width150\"  [(ngModel)]=\"destport\">\r\n                                        <option value=\"\">Please select</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                        <option *ngFor=\"let d of city\" value={{d.CITY_CODE}}>{{d.CITY_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td><select class=\"form-control width70\"  [(ngModel)]=\"Movetype\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option value=\"CY/CY\">CY/CY</option>\r\n                                    <option value=\"CFS/CY\">CFS/CY</option>\t\r\n                                    <option value=\"CFS/CFS\">CFS/CFS</option>\t\r\n                                </select>\r\n                                </td>\r\n                                <td> <input [(ngModel)]=\"SteAgtSealno\" type=\"text\"    class=\"form-control width150\" maxlength=\"20\" ></td>                              \r\n                                <td><input [(ngModel)]=\"CustSealNo\" type=\"text\"    class=\"form-control width150\" maxlength=\"20\" ></td>\t\r\n                                <td>\r\n                                    <select class=\"form-control width50\"   [(ngModel)]=\"freight\">\r\n                                        <option value=\"PP\">PP</option>\r\n                                        <option value=\"CC\">CC</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                    </select>\r\n                                </td>\t\r\n                            </tr>\r\n                            <tr  >\r\n                                <!-- <td colspan=\"2\"><span class=\"col-form-span-label font-weight-bold \">Container Det.</span></td>                                  -->\r\n                                <td rowspan=\"2\"  class=\"col-form-span-heading centerlabel\"    ><span class=\"col-form-span-label font-weight-bold  \">Expt No.</span></td>\r\n                                <td colspan=\"7\"  class=\"col-form-span-heading centerlabel\"> <span class=\"col-form-span-label font-weight-bold    \">Total</span></td>\r\n                           </tr>\r\n                            <tr class=\"trheadercontainer\">\r\n                               \r\n                                <td><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">pkgs</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">CBM</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">Pcs</span></td>\r\n                                <td colspan=\"2\"><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">GrWt</span></td>\r\n                                <td  colspan=\"2\"><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">NetWt</span></td>                               \r\n                            </tr>\r\n                            <tr>                               \r\n                               \r\n                               \r\n                                <td>\r\n                                    <select class=\"form-control width150\"  [(ngModel)]=\"exptno\" (change)=\"OnChangeExjob($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of ExptNoList\" value={{d.EXPTNO}}>{{d.EXPTNO}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td class=\"col-form-span-label width40\">{{TOTAL_NOOFPKGS}}</td>\r\n                                <td class=\"col-form-span-label width40\">{{TOTAL_CBM}}</td>\r\n                                <td class=\"col-form-span-label width40\">{{TOTAL_NO_OF_PCS}}</td>\r\n                                <td colspan=\"2\" class=\"col-form-span-label width40\">{{TOTAL_NO_GR_WT}}</td>\r\n                                <td colspan=\"2\" class=\"col-form-span-label width40\">{{TOTAL_NO_NET_WT}}</td>\r\n                                \r\n                              \r\n                            </tr>\r\n                            <tr  class=\"col-form-span-heading centerlabel\" >\r\n                                <td colspan=\"9\" class=\"centerlabel\"> <span class=\"col-form-span-heading font-weight-bold \">This Container</span></td>  \r\n                            </tr>\r\n                            <tr class=\"trheadercontainer\">\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">pkgs</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">CBM</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">Pcs</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">GrWt</span></td>\r\n                                <td  colspan=\"2\"><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">NetWt</span></td>\r\n                                <td  colspan=\"2\"><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">CLP Sq.</span></td> \r\n                            </tr>\r\n                            <tr>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NOOFPKGS\" class=\"form-control\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_CBM\" class=\"form-control\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_OF_PCS\" class=\"form-control\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_GR_WT\" class=\"form-control\"/></td>\r\n                                <td  colspan=\"2\"><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_NET_WT\" class=\"form-control width100\"/></td>\r\n                                <td  colspan=\"2\"><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_CLP_SEQ\" class=\"form-control width100\" maxlength=\"2\" /></td> \r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"14\" class=\"centerlabel\" >\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"AddChild()\"><span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i> {{Add}}</span></button>\r\n                                    <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"childreset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                \r\n                                </td>\r\n                            </tr>\r\n                            \r\n                        </table>\r\n\r\n                        <div class=\"row xyscroll\" style=\"height:150px;background-color: white;border-left: 1px solid #d5e5f5;\">\t\t\t\t\t\t\t\t\r\n                            <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                                <thead>\r\n                                    <tr class=\"title-head formheading\">\r\n                                        <th class=\"col-form-span-label\"></th>\r\n                                        <th class=\"col-form-span-label\">Container No</th>\r\n                                        <th class=\"col-form-span-label\">Size</th>\r\n                                        <th class=\"col-form-span-label\">Expt No</th>\r\n                                        <th class=\"col-form-span-label\">No Of Pkg</th>\r\n                                        <th class=\"col-form-span-label\">CBM</th>\r\n                                        <th class=\"col-form-span-label\">No Of Pcs</th>\r\n                                        <th class=\"col-form-span-label\">Grwt</th>\r\n                                        <th class=\"col-form-span-label\">NetWt</th>\r\n                                        <th class=\"col-form-span-label\">CLP Seq.</th>                                      \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                     <tr *ngFor=\"let obj of containerClp \">\t\t\t\t\t\t\t\t\t \r\n                                        <td>\t\t\t\t\t\t\t\t\t\t\t\r\n                                            <i class=\"fa fa-pencil\" (click)=\"EditchildExptNo(obj.ID)\"></i>\t\r\n                                            <i class=\"fa fa-trash\" (click)=\"deletechildExptNo(obj.ID,obj.CONTAINERID)\" ></i>\t\t\t\t\t\t\t\t\t\t\t \r\n                                        </td> \r\n                                        <td><span class=\"col-form-span-label\">{{obj.CONTAINERNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.SIZEDET}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NETWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CLP_SEQ}}</span></td>                                        \r\n                                    </tr>  \r\n                                </tbody>\t\t\t\t\t\t\t\t\t\r\n                            </table>\r\n                        </div>\r\n                    \r\n                    </div>\r\n                    <!-- <div class=\"col-sm-1\">\r\n                    </div> -->\r\n                     </div>\r\n                <div class=\"card-footer\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"finalSubmit()\"><span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Submit</span></button>\r\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"masterReset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP_New.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP_New.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n\t\t\t\t<div class=\"card-header formheading\">\r\n\t\t\t\t   <strong>EXPORT CONSINGNMENT</strong>\r\n\t\t\t\t</div>\r\n                <div class=\"card-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t</div>\r\n                    <div class=\"col-sm-8\">\r\n                        <table class=\"table table-bordered table-striped table-sm-new\">\r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"4\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      VESSEL DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label \"><b>Vessel</b> <span class=\"col-form-span-error\">*</span></span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <!-- <select class=\"form-control width500\"  [(ngModel)]=\"Vsl\" (change)=\"onfillAgent($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vessel\" value={{d.VALUEFILED}}>{{d.VSLNAME}}</option>\r\n                                    </select> -->\r\n                                     <ng-select [items]=\"vessel\" bindLabel=\"VSLNAME\" bindValue=\"VALUEFILED\"\r\n                                        (ngModelChange)=\"onfillAgent($event)\" [(ngModel)]=\"Vsl\" class=\"custom \"\r\n                                        placeholder=\"--Please Select--\">\r\n                                     </ng-select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label \"><b>Vessel Agent</b><span class=\"col-form-span-error\">*</span></span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <select class=\"form-control width500\"  [(ngModel)]=\"Vslagt\" (change)=\"onfillshipline($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslAgent\" value={{d.AGT_CODE}}>{{d.AGT_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"col-form-span-label\"><b>Shpg. Line</b><span class=\"col-form-span-error\">*</span></span>\r\n                                </td>\r\n                                <td colspan=\"3\">\r\n                                    <select class=\"form-control width500\"  [(ngModel)]=\"Vslshpgline\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of vslshpline\" value={{d.AGT_LINER}}>{{d.LINER_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                           \r\n                        </table>\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n\t\t\t\t\t</div>\r\n                 </div>   \r\n                           \r\n                    <div class=\"row\">\r\n                    <!-- <div class=\"col-sm-1\">\r\n                    </div> -->\r\n                    <div class=\"col-sm-12\">\r\n\r\n                        <table class=\"table table-bordered table-sm-new\" style=\"width:100%\">                           \r\n                            <tr>\r\n                                <td class=\"col-form-span-heading\"  colspan=\"9\">\r\n                                    <span class=\"col-form-span-label centerlabel\"> \r\n                                      CONTAINER DETAILS\r\n                                    </span>\t\r\n                                </td>\r\n                            </tr>\r\n                            <!-- <tr  class=\"bakgrdskyBlue\">\r\n                                <td colspan=\"2\"><span class=\"col-form-span-label font-weight-bold \">Container Det.</span></td>     \r\n                            </tr> -->\r\n                            <tr class=\"trheadercontainer\">\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite\">Container No</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite\">Container Size</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td> <span class=\"col-form-span-label headerwhite \"><b>Cont. Status</b></span></td>\r\n                                <td><span class=\"col-form-span-label headerwhite\"><b>Destination Port</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td><span class=\"col-form-span-label headerwhite\"><b>Move Type</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td > <span class=\"col-form-span-label headerwhite\"><b>Steamer Agent Seal No</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td> <span class=\"col-form-span-label headerwhite\"><b>Custom Seal No</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td><span class=\"col-form-span-label headerwhite\"><b>Freight</b></span><span class=\"col-form-span-error\">*</span></td>\r\n\r\n                            </tr>\r\n                            <tr >\r\n                                <td ><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO\" (change)=\"onchangecontainer($event.target.value)\"class=\"form-control width120\" maxlength=\"11\" /></td>\r\n                                <td><div class=\"form-check form-check-inline\"  style=\"display: flex;\">\r\n                                    <select class=\"form-control width40 form-check-inline\"  [(ngModel)]=\"cntsize\">\r\n                                        <option value=\"20\">20</option>\r\n                                        <option value=\"40\">40</option>\r\n                                    </select>\r\n                                    <select class=\"form-control width50 form-check-inline\"  [(ngModel)]=\"cntsize1\">\r\n                                        <option value=\"F\">F</option>\r\n                                        <option value=\"H\">H</option>\r\n                                        <option value=\"G\">GOH</option>\r\n                                    </select>                                    \r\n                                </div></td>\r\n                                <td>\r\n                                    <select class=\"form-control width70\"  [(ngModel)]=\"contstatus\">\r\n                                        <option value=\"LCL/FCL\">LCL/FCL </option>\r\n                                        <option value=\"FCL/FCL\">FCL/FCL </option>\r\n                                        <option value=\"LCL/LCL\">LCL/LCL </option>\r\n                                        <option value=\"FCL/LCL\">FCL/LCL </option>\r\n                                        <option value=\"GROUPAGE\">GROUPAGE </option>\r\n                                    </select>\r\n                                </td>\r\n\r\n                                <td>\r\n                                    <select class=\"form-control width150\"  [(ngModel)]=\"destport\">\r\n                                        <option value=\"\">Please select</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                        <option *ngFor=\"let d of city\" value={{d.CITY_CODE}}>{{d.CITY_NAME}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td><select class=\"form-control width70\"  [(ngModel)]=\"Movetype\">\r\n                                    <option value=\"\">Please select</option>\r\n                                    <option value=\"CY/CY\">CY/CY</option>\r\n                                    <option value=\"CFS/CY\">CFS/CY</option>\t\r\n                                    <option value=\"CFS/CFS\">CFS/CFS</option>\t\r\n                                </select>\r\n                                </td>\r\n                                <td> <input [(ngModel)]=\"SteAgtSealno\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" ></td>                              \r\n                                <td><input [(ngModel)]=\"CustSealNo\" type=\"text\"    class=\"form-control width180\" maxlength=\"20\" ></td>\t\r\n                                <td>\r\n                                    <select class=\"form-control width50\"   [(ngModel)]=\"freight\">\r\n                                        <option value=\"PP\">PP</option>\r\n                                        <option value=\"CC\">CC</option>\t\t\t\t\t\t\t\t\t\t\t\t \r\n                                    </select>\r\n                                </td>\t\r\n                            </tr>\r\n                            <tr  >\r\n                                <!-- <td colspan=\"2\"><span class=\"col-form-span-label font-weight-bold \">Container Det.</span></td>                                  -->\r\n                                <td rowspan=\"2\"  class=\"col-form-span-heading centerlabel\"    ><span class=\"col-form-span-label font-weight-bold  \">Expt No.</span></td>\r\n                                <td colspan=\"7\"  class=\"col-form-span-heading centerlabel\"> <span class=\"col-form-span-label font-weight-bold    \">Total</span></td>\r\n                           </tr>\r\n                            <tr class=\"trheadercontainer\">\r\n                               \r\n                                <td><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">Pkgs</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">CBM</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">Pcs</span></td>\r\n                                <td colspan=\"2\"><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">GrWt</span></td>\r\n                                <td  colspan=\"2\"><span class=\"col-form-span-label font-weight-bold width40 headerwhite\">NetWt</span></td>                               \r\n                            </tr>\r\n                            <tr>                               \r\n                               \r\n                               \r\n                                <td>\r\n                                    <select class=\"form-control width150\"  [(ngModel)]=\"exptno\" (change)=\"OnChangeExjob($event.target.value)\">\r\n                                        <option value=\"\">Please select</option>\r\n                                        <option *ngFor=\"let d of ExptNoList\" value={{d.EXPTNO}}>{{d.EXPTNO}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td class=\"col-form-span-label width40\">{{TOTAL_NOOFPKGS}}</td>\r\n                                <td class=\"col-form-span-label width40\">{{TOTAL_CBM}}</td>\r\n                                <td class=\"col-form-span-label width40\">{{TOTAL_NO_OF_PCS}}</td>\r\n                                <td colspan=\"2\" class=\"col-form-span-label width40\">{{TOTAL_NO_GR_WT}}</td>\r\n                                <td colspan=\"2\" class=\"col-form-span-label width40\">{{TOTAL_NO_NET_WT}}</td>\r\n                                \r\n                              \r\n                            </tr>\r\n                            <tr  class=\"col-form-span-heading centerlabel\" >\r\n                                <td colspan=\"9\" class=\"centerlabel\"> <span class=\"col-form-span-heading font-weight-bold \">This Container</span></td>  \r\n                            </tr>\r\n                            <tr class=\"trheadercontainer\">\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">Pkgs</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">CBM</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">Pcs</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">GrWt</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td  colspan=\"2\"><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">NetWt</span><span class=\"col-form-span-error\">*</span></td>\r\n                                <td  colspan=\"2\"><span class=\"col-form-span-label font-weight-bold headerwhite headerwhite\">CLP Sq.</span><span class=\"col-form-span-error\">*</span></td> \r\n                            </tr>\r\n                            <tr>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NOOFPKGS\" class=\"form-control\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_CBM\" class=\"form-control\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_OF_PCS\" class=\"form-control\"/></td>\r\n                                <td><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_GR_WT\" class=\"form-control\"/></td>\r\n                                <td  colspan=\"2\"><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_NET_WT\" class=\"form-control\"/></td>\r\n                                <td  colspan=\"2\"><input type=\"text\" [(ngModel)]=\"THIS_CONTAINER_NO_CLP_SEQ\" class=\"form-control\" maxlength=\"2\" /></td> \r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"14\" class=\"centerlabel\" >\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"AddChild()\"><span class=\"col-form-span-label\"><i class=\"fa fa-plus\"></i> {{Add}}</span></button>\r\n                                    <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"childreset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                                \r\n                                </td>\r\n                            </tr>\r\n                            \r\n                        </table>\r\n\r\n                        <div class=\"row xyscroll\" style=\"background-color: white;border-left: 1px solid #d5e5f5;\">\t\t\t\t\t\t\t\t\r\n                            <table class=\"table table-bordered table-striped table-sm-new bgwhite\">\r\n                                <thead>\r\n                                    <tr class=\"title-head formheading\">\r\n                                        <th class=\"col-form-span-label\"></th>\r\n                                        <th class=\"col-form-span-label\">Container No</th>\r\n                                        <th class=\"col-form-span-label\">Size</th>\r\n                                        <th class=\"col-form-span-label\">Expt No</th>\r\n                                        <th class=\"col-form-span-label\">No Of Pkg</th>\r\n                                        <th class=\"col-form-span-label\">CBM</th>\r\n                                        <th class=\"col-form-span-label\">No Of Pcs</th>\r\n                                        <th class=\"col-form-span-label\">Grwt</th>\r\n                                        <th class=\"col-form-span-label\">NetWt</th>\r\n                                        <th class=\"col-form-span-label\">CLP Seq.</th>                                      \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                     <tr *ngFor=\"let obj of containerClp \">\t\t\t\t\t\t\t\t\t \r\n                                        <td>\t\t\t\t\t\t\t\t\t\t\t\r\n                                            <i class=\"fa fa-pencil\" (click)=\"EditchildExptNo(obj.ID)\"></i>\t\r\n                                            <i class=\"fa fa-trash\" (click)=\"deletechildExptNo(obj.ID,obj.CONTAINERID)\" ></i>\t\t\t\t\t\t\t\t\t\t\t \r\n                                        </td> \r\n                                        <td><span class=\"col-form-span-label\">{{obj.CONTAINERNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.SIZEDET}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.EXPTNO}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PKGS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CBM}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.PCS}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.GRWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.NETWT}}</span></td>\r\n                                        <td><span class=\"col-form-span-label\">{{obj.CLP_SEQ}}</span></td>                                        \r\n                                    </tr>  \r\n                                </tbody>\t\t\t\t\t\t\t\t\t\r\n                            </table>\r\n                    </div>\r\n                    <!-- <div class=\"col-sm-1\">\r\n                    </div> -->\r\n                    </div>\r\n                     \r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"submit()\"><span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\"></i> Submit</span></button>\r\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"masterReset()\"><span class=\"col-form-span-label\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_vessel_search.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/container/exp_sp_vessel_search.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\"> \r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new\">\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<label class=\"radio inline\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\"   name=\"rlist\" [(ngModel)]=\"vsllist\" /><span class=\"col-form-span-label \">Vessel Name</span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"vslName\" type=\"text\"  maxlength=\"15\" class=\"form-control width150\" [disabled]=\"vsllist != '1'\"   maxlength=\"40\"  >\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Voyage No</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"vsl_voyno\" type=\"text\"  maxlength=\"10\" [disabled]=\"vsllist != '1'\" class=\"form-control width150\">\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t \t<label class=\"radio inline\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"2\" [(ngModel)]=\"vsllist\"     name=\"rlist\"/><span class=\"col-form-span-label \">List Name</span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control width250\" [(ngModel)]=\"vslcmpName\" [disabled]=\"vsllist != '2'\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"-1\">Please select</option>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let d of vessel\" value={{d.VALUEFILED}}>{{d.VSLNAME}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"centerlabel\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success\"  type=\"submit\" id=\"btnAgtAdd\" name=\"btnAgtAdd\" [disabled]=\"buttonStatus\" (click)=\"onSearch()\" ><span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> Search</span></button>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</td>\t\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\" *ngIf=\"this.vesselSearch.length>1\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Vessel det</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">Port</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">ETD</th>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody class=\"bgwhite\">\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let prtAgt of this.vesselSearch\">\r\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(prtAgt.VSL_RTNO,prtAgt.PORT)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\">{{prtAgt.VSLNAME}}</span></td>\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{prtAgt.PORT}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{prtAgt.ETD}}</td>\r\n\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n"

/***/ }),

/***/ "./src/app/export/container/delete_container.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/export/container/delete_container.component.ts ***!
  \****************************************************************/
/*! exports provided: DeleteContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContainer", function() { return DeleteContainer; });
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







var DeleteContainer = /** @class */ (function () {
    function DeleteContainer(_router, _dataService, _toasterService, _loginService, _route, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._route = _route;
        this._loaderService = _loaderService;
        this.containerlist = [];
        this.msg = "";
        this.disabledeletebtn = true;
    }
    DeleteContainer.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights(430, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
    };
    DeleteContainer.prototype.search = function () {
        var _this = this;
        var jsondata = {
            CONTAINERNO: this.containerno,
            MODE: 'SEARCH',
        };
        this._dataService.getData("Export/EXP_CONTAINER_UPDATE_EXISTCONTAINER", jsondata)
            .subscribe(function (data) {
            //console.log(data);
            if (data.Table[0].STATUS == "100") {
                _this.msg = data.Table[0].STATUSTXT;
                _this.containerlist = data.Table1;
                _this.disabledeletebtn = false;
            }
            else if (data.Table[0].STATUS == "103") {
                alert(data.Table[0].STATUSTXT);
            }
        });
    };
    DeleteContainer.prototype.DeleteContainer = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete container ' + this.containerno + ' ?')) {
            this._loaderService.display(true);
            var jsondata = {
                CONTAINERNO: this.containerno,
                MODE: 'DELETE',
            };
            this._dataService.getData("Export/EXP_CONTAINER_UPDATE_EXISTCONTAINER", jsondata)
                .subscribe(function (data) {
                //console.log(data);
                if (data.Table[0].STATUS == "100") {
                    alert('container deleted successfully');
                    _this.containerlist = [];
                    _this.containerno = '';
                    _this.msg = '';
                    _this._loaderService.display(false);
                    return false;
                }
            });
        }
        else {
            this._loaderService.display(false);
            return false;
        }
    };
    DeleteContainer.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
    ]; };
    DeleteContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./delete_container.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/delete_container.component.html"),
            styles: ["\n    table, tr, td, th{\n         border: none;\n\n         }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], DeleteContainer);
    return DeleteContainer;
}());



/***/ }),

/***/ "./src/app/export/container/exp-sp-container.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/export/container/exp-sp-container.module.ts ***!
  \*************************************************************/
/*! exports provided: ExportContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportContainerModule", function() { return ExportContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _exp_sp_container_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exp-sp-container.routing */ "./src/app/export/container/exp-sp-container.routing.ts");
/* harmony import */ var _exp_sp_vessel_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exp_sp_vessel_search.component */ "./src/app/export/container/exp_sp_vessel_search.component.ts");
/* harmony import */ var _exp_sp_container_vessel_vw_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exp_sp_container_vessel_vw.component */ "./src/app/export/container/exp_sp_container_vessel_vw.component.ts");
/* harmony import */ var _exp_sp_container_IU_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exp_sp_container_IU.component */ "./src/app/export/container/exp_sp_container_IU.component.ts");
/* harmony import */ var _exp_sp_factoryStuff_ContainerIU_CLP__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exp_sp_factoryStuff_ContainerIU_CLP */ "./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.ts");
/* harmony import */ var _exp_sp_factoryStuff_ContainerIU_CLP_New__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exp_sp_factoryStuff_ContainerIU_CLP_New */ "./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP_New.ts");
/* harmony import */ var _delete_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete_container.component */ "./src/app/export/container/delete_container.component.ts");
/* harmony import */ var _exp_fs_multicontainer_iu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exp_fs_multicontainer_iu.component */ "./src/app/export/container/exp_fs_multicontainer_iu.component.ts");
/* harmony import */ var _exp_fs_multicontainer_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exp_fs_multicontainer_edit.component */ "./src/app/export/container/exp_fs_multicontainer_edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ExportContainerModule = /** @class */ (function () {
    function ExportContainerModule() {
    }
    ExportContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_exp_sp_container_routing__WEBPACK_IMPORTED_MODULE_8__["ExportcontainerRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            declarations: [_exp_fs_multicontainer_iu_component__WEBPACK_IMPORTED_MODULE_15__["FSmulticontainerIU"], _exp_fs_multicontainer_edit_component__WEBPACK_IMPORTED_MODULE_16__["FSmulticontainerEdit"], _exp_sp_vessel_search_component__WEBPACK_IMPORTED_MODULE_9__["ExptSpVesselSearch"], _exp_sp_container_vessel_vw_component__WEBPACK_IMPORTED_MODULE_10__["ExptSpContVslvw"], _exp_sp_container_IU_component__WEBPACK_IMPORTED_MODULE_11__["ExptSpContainerIU"], _exp_sp_factoryStuff_ContainerIU_CLP__WEBPACK_IMPORTED_MODULE_12__["ExptSpContainerIUFS"], _exp_sp_factoryStuff_ContainerIU_CLP_New__WEBPACK_IMPORTED_MODULE_13__["ExptSpContainerIUFSNEW"], _delete_container_component__WEBPACK_IMPORTED_MODULE_14__["DeleteContainer"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ExportContainerModule);
    return ExportContainerModule;
}());



/***/ }),

/***/ "./src/app/export/container/exp-sp-container.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/export/container/exp-sp-container.routing.ts ***!
  \**************************************************************/
/*! exports provided: ExportcontainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportcontainerRoutingModule", function() { return ExportcontainerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exp_sp_vessel_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp_sp_vessel_search.component */ "./src/app/export/container/exp_sp_vessel_search.component.ts");
/* harmony import */ var _exp_sp_container_vessel_vw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp_sp_container_vessel_vw.component */ "./src/app/export/container/exp_sp_container_vessel_vw.component.ts");
/* harmony import */ var _exp_sp_container_IU_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exp_sp_container_IU.component */ "./src/app/export/container/exp_sp_container_IU.component.ts");
/* harmony import */ var _exp_sp_factoryStuff_ContainerIU_CLP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp_sp_factoryStuff_ContainerIU_CLP */ "./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.ts");
/* harmony import */ var _delete_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete_container.component */ "./src/app/export/container/delete_container.component.ts");
/* harmony import */ var _exp_fs_multicontainer_iu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exp_fs_multicontainer_iu.component */ "./src/app/export/container/exp_fs_multicontainer_iu.component.ts");
/* harmony import */ var _exp_fs_multicontainer_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exp_fs_multicontainer_edit.component */ "./src/app/export/container/exp_fs_multicontainer_edit.component.ts");
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
            title: 'container'
        },
        children: [
            { path: 'vessel-view', component: _exp_sp_vessel_search_component__WEBPACK_IMPORTED_MODULE_2__["ExptSpVesselSearch"], data: { title: 'Container / Vessel / Search' } },
            { path: 'container-vessel-view', component: _exp_sp_container_vessel_vw_component__WEBPACK_IMPORTED_MODULE_3__["ExptSpContVslvw"], data: { title: 'Container / Vessel / Search' } },
            { path: 'form', component: _exp_sp_container_IU_component__WEBPACK_IMPORTED_MODULE_4__["ExptSpContainerIU"], data: { title: 'Container / form' } },
            { path: 'clp', component: _exp_sp_container_IU_component__WEBPACK_IMPORTED_MODULE_4__["ExptSpContainerIU"], data: { title: 'Container / CLP' } },
            { path: 'containerFS', component: _exp_sp_factoryStuff_ContainerIU_CLP__WEBPACK_IMPORTED_MODULE_5__["ExptSpContainerIUFS"], data: { title: 'Container / CLP' } },
            //{ path: 'containerFS', component: ExptSpContainerIUFSNEW, data: { title: 'Container / CLP' } },
            { path: 'delete', component: _delete_container_component__WEBPACK_IMPORTED_MODULE_6__["DeleteContainer"], data: { title: 'Delete Container' } },
            { path: 'containerFSauto', component: _exp_fs_multicontainer_iu_component__WEBPACK_IMPORTED_MODULE_7__["FSmulticontainerIU"], data: { title: 'Factory Stuff CLP' } },
            { path: 'multicontainerFSedit', component: _exp_fs_multicontainer_edit_component__WEBPACK_IMPORTED_MODULE_8__["FSmulticontainerEdit"], data: { title: 'Factory Stuffing CLP EDIT' } },
        ]
    }
];
var ExportcontainerRoutingModule = /** @class */ (function () {
    function ExportcontainerRoutingModule() {
    }
    ExportcontainerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExportcontainerRoutingModule);
    return ExportcontainerRoutingModule;
}());



/***/ }),

/***/ "./src/app/export/container/exp_fs_multicontainer_edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/export/container/exp_fs_multicontainer_edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: FSmulticontainerEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSmulticontainerEdit", function() { return FSmulticontainerEdit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FSmulticontainerEdit = /** @class */ (function () {
    function FSmulticontainerEdit(_router, _dataService, _auth, _toasterService, _loginService, _ContainerIUSharedDataService, _vslsharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._ContainerIUSharedDataService = _ContainerIUSharedDataService;
        this._vslsharedvataSerice = _vslsharedvataSerice;
        this.loaderService = loaderService;
        this.latestEntryID = null;
        this.Add = "Add";
        this.vslrotation = "";
        this.vslport = "";
        this.vsldet = "";
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ContainerID = "0";
        this.Containerno = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.contstatus = "LCL/FCL";
        this.destport = "";
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
        this.containerClp = [];
        this.vessel = [];
        this.vslName = "";
        this.vsl_voyno = "";
        this.vslAgent = [];
        this.shpline = [];
        this.vslshpline = [];
        this.containerlist = [];
        this.Movetype = "";
        this.city = [];
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = "";
        this.AVAILABLE_CBM = "";
        this.AVAILABLE_NO_OF_PCS = "";
        this.AVAILABLE_NO_GR_WT = "";
        this.AVAILABLE_NO_NET_WT = "";
        this.id = "0";
        this.containerid = "0";
        this.disable_grnerate_btn = true;
        this.disable_noofcontainer = true;
        this.disable_destport = true;
        this.disable_contstatus = true;
        this.disable_contsize = true;
        this.disable_contsize1 = true;
        this.disable_movetype = true;
        this.disable_exptno = false;
        this.lastUpdatedRowId = null;
        this.selectedRowId = null;
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
    FSmulticontainerEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(231, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
        var jsonExport = { SEARCHMODE: "0", VSLNAME: this.vslName, VSL_VOY: this.vsl_voyno, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.Common("Export/Export_Vessel_List", jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vessel = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('Warning', 'Warning', 'Data Loaded Successfully');
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerEdit.prototype.onfillAgent = function (vsldt) {
        var _this = this;
        if (vsldt != "") {
            var rtnos = "", ports = "";
            rtnos = vsldt.split('|')[0];
            ports = vsldt.split('|')[1];
            if (this.vslAgent.length > 0) {
                if (confirm("Are you sure ,Do you want to change the vessel ,While changing the vessel current data will be lost")) {
                    this.containerClp = [];
                }
                else {
                    return false;
                }
            }
            this.loaderService.display(true);
            var jsonExport = { vsl: rtnos, port: ports, CMPCOD: this._loginService.getLogin()[0].CMPCODE, CITYCODE: this._loginService.getLogin()[0].CITYCODE, CMPID: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_Fill_EditMode', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.containerlist = data.Table;
                    //  this.vsldet = "VESSEL: " + this.containerlist[0].VSL_NAME + " - ROTATION: " + this.containerlist[0].VSL_RTNO + "  -  VOYAGE: " + this.containerlist[0].VSL_VOYNO + " -  ETD: " + this.containerlist[0].ETD;
                    _this.vslrotation = _this.containerlist[0].VSL_RTNO;
                    _this.vslport = _this.containerlist[0].PORT;
                    _this.vslAgent = data.Table1;
                    _this.city = data.Table2;
                    _this.shpline = data.Table3;
                    _this.VSLExptNoList = data.Table4;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this.childreset();
            this.masterReset();
            this.containerClp = [];
        }
    };
    FSmulticontainerEdit.prototype.OnChangeExjob = function (exjobno) {
        var _this = this;
        if (exjobno != "") {
            this.loaderService.display(true);
            var jsonExport = { exptno: exjobno, userid: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_FillExptDtls', jsonExport)
                .subscribe(function (data) {
                _this.containerClp = data.Table1;
                //     if(data.Table[0].AVAI_PKGS ==0)
                //     {
                //         this._toasterService.toast('warning', 'warning', "Total Pkgs is used ");
                //         this.loaderService.display(false);  
                //         return false;
                //     }
                //     else{
                _this.TOTAL_NOOFPKGS = data.Table[0].EXPT_NOOFPKGS;
                _this.TOTAL_CBM = data.Table[0].EXPT_VOLUME;
                _this.TOTAL_NO_OF_PCS = data.Table[0].EXPT_NOOFPCS;
                _this.TOTAL_NO_GR_WT = data.Table[0].EXPT_GRWT;
                _this.TOTAL_NO_NET_WT = data.Table[0].EXPT_NETWT;
                _this.disable_exptno = true;
                //    this.AVAILABLE_NOOFPKGS =  data.Table[0].AVAI_PKGS;
                //    this.AVAILABLE_CBM= data.Table[0].AVAI_CBM;
                //    this.AVAILABLE_NO_OF_PCS = data.Table[0].AVAI_PCS;
                //    this.AVAILABLE_NO_GR_WT= data.Table[0].AVAI_GRWT;
                //    this.AVAILABLE_NO_NET_WT=data.Table[0].AVAI_NETWT;
                //    this.destport=data.Table[0].POD;
                //     }
                _this.loaderService.display(false);
            });
        }
        else {
            this.childreset();
        }
    };
    FSmulticontainerEdit.prototype.onfillshipline = function (Agtcode) {
        if (Agtcode != "") {
            this.vslshpline = this.shpline.filter(function (agent) { return agent.VSL_AGENT === Agtcode; });
            this.ExptNoList = this.VSLExptNoList.filter(function (agent) { return agent.EXPT_VSLAGENT === Agtcode; });
            this.AVAILABLE_NOOFPKGS = this.ExptNoList[0].AVAI_PKGS;
            this.AVAILABLE_CBM = this.ExptNoList[0].AVAI_CBM;
            this.AVAILABLE_NO_OF_PCS = this.ExptNoList[0].AVAI_PCS;
            this.AVAILABLE_NO_GR_WT = this.ExptNoList[0].AVAI_GRWT;
            this.AVAILABLE_NO_NET_WT = this.ExptNoList[0].AVAI_NETWT;
        }
    };
    FSmulticontainerEdit.prototype.AddChild = function () {
        var _this = this;
        if (this.vessel == undefined || this.vessel == null || this.vessel == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == null || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.THIS_CONTAINER_NO == undefined || this.THIS_CONTAINER_NO == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO.length < 11) {
            this._toasterService.toast('error', 'Error', "Container no. length should be 11 characters");
            return false;
        }
        if (this.cntsize == undefined || this.cntsize == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.cntsize1 == undefined || this.cntsize1 == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.destport == undefined || this.destport == "") {
            this._toasterService.toast('error', 'Error', "Please select Destination POrt ");
            return false;
        }
        if (this.Movetype == undefined || this.Movetype == "") {
            this._toasterService.toast('error', 'Error', "Please select Move Type");
            return false;
        }
        if (this.SteAgtSealno == "") {
            this._toasterService.toast('error', 'Error', "Please enter Steamer agent No");
            return false;
        }
        if (this.CustSealNo == "") {
            this._toasterService.toast('error', 'Error', "Please enter Custome Seal No.");
            return false;
        }
        if (this.freight == undefined || this.freight == null || this.freight == "") {
            this._toasterService.toast('error', 'Error', "Please select Freight ");
            return false;
        }
        if (this.exptno == undefined || this.exptno == "") {
            this._toasterService.toast('error', 'Error', "Please select Ex-Job No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO_CLP_SEQ == undefined || this.THIS_CONTAINER_NO_CLP_SEQ == null || this.THIS_CONTAINER_NO_CLP_SEQ == "") { }
        else {
            if (this.THIS_CONTAINER_NO_CLP_SEQ.length < 2) {
                this._toasterService.toast('warning', 'warning', "CLP should be 2 digit no start from 01");
                return false;
            }
        }
        if (this.THIS_CONTAINER_NOOFPKGS == undefined || this.THIS_CONTAINER_NOOFPKGS == null || this.THIS_CONTAINER_NOOFPKGS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pkgs can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_CBM == undefined || this.THIS_CONTAINER_CBM == null || this.THIS_CONTAINER_CBM == "") {
            this._toasterService.toast('warning', 'warning', "CBM can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_OF_PCS == undefined || this.THIS_CONTAINER_NO_OF_PCS == null || this.THIS_CONTAINER_NO_OF_PCS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pcs  can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_GR_WT == undefined || this.THIS_CONTAINER_NO_GR_WT == null || this.THIS_CONTAINER_NO_GR_WT == "") {
            this._toasterService.toast('warning', 'warning', "GrWt can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_NET_WT == undefined || this.THIS_CONTAINER_NO_NET_WT == null || this.THIS_CONTAINER_NO_NET_WT == "") {
            this._toasterService.toast('warning', 'warning', "NetWt can`t be blank");
            return false;
        }
        // if (parseFloat(this.THIS_CONTAINER_NOOFPKGS) > parseFloat(this.AVAILABLE_NOOFPKGS)) {
        //     this._toasterService.toast('warning', 'warning', "No of packages should be less than or equal to available no of pkgs");                      
        //     return false;                       
        // }
        // if (parseFloat(this.THIS_CONTAINER_CBM) > parseFloat(this.AVAILABLE_CBM )) {
        //     this._toasterService.toast('warning', 'warning', "CBM should be less than or equal to available CBM");                     
        //     return false;                         
        // }
        // if (parseFloat(this.THIS_CONTAINER_NO_OF_PCS) > parseFloat(this.AVAILABLE_NO_OF_PCS) ) {
        // this._toasterService.toast('warning', 'warning', "No of Pcs should be less than or equal to available Pcs");                       
        //     return false;                        
        // }
        // if (parseFloat(this.THIS_CONTAINER_NO_GR_WT) > parseFloat(this.AVAILABLE_NO_GR_WT )) {
        // this._toasterService.toast('warning', 'warning', "GrWt should be less than or equal to available GrWt");                       
        //     return false;                     
        // }
        // if (parseFloat(this.THIS_CONTAINER_NO_NET_WT) > parseFloat(this.AVAILABLE_NO_NET_WT) ) {
        //     this._toasterService.toast('warning', 'warning', "NetWt should be less than or equal to available NetWt");                        
        //     return false;                        
        // }
        this.loaderService.display(true); //ID,CONTAINERID
        var jsonExport = {
            ID: this.id, CONTAINERID: this.containerid, CONTAINERNO: this.THIS_CONTAINER_NO, EXPTNO: this.exptno, PKGS: this.THIS_CONTAINER_NOOFPKGS, CBM: this.THIS_CONTAINER_CBM, Pcs: this.THIS_CONTAINER_NO_OF_PCS, GrWt: this.THIS_CONTAINER_NO_GR_WT, NetWt: this.THIS_CONTAINER_NO_NET_WT, CLP_SEQ: this.THIS_CONTAINER_NO_CLP_SEQ, USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID,
        };
        this._dataService.Common('Export/Export_MulticontainerFSTmp_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.containerClp = data.Table;
                var row = _this.containerClp.find(function (r) { return r.ID === _this.id; });
                if (!row)
                    return;
                // Update row data
                row.value = "Updated at " + new Date().toLocaleTimeString();
                // Highlight this row
                _this.lastUpdatedRowId = row.ID;
                // Remove highlight after 3 seconds
                // setTimeout(() => {
                //     this.lastUpdatedRowId = null;
                // }, 3000);
                //this.latestEntryID = this.getLatestEntryID(data.Table);
                _this.childreset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerEdit.prototype.getLatestEntryID = function (dataTable) {
        if (dataTable.length === 0) {
            return null;
        }
        // Assuming ID is a number and higher IDs mean more recent entries
        var highestID = Math.max.apply(Math, dataTable.map(function (item) { return item.ID; }));
        return highestID;
    };
    FSmulticontainerEdit.prototype.EditchildExptNo = function (Id) {
        this.Add = "Update";
        this.containerClpedt = this.containerClp.filter(function (pkid) { return pkid.ID === Id; });
        this.id = this.containerClpedt[0].ID;
        this.containerid = this.containerClpedt[0].CONTAINERID;
        this.THIS_CONTAINER_NO = this.containerClpedt[0].CONTAINERNO;
        this.cntsize = this.containerClpedt[0].CONT_SIZE;
        this.cntsize1 = this.containerClpedt[0].CONT_SIZE1;
        this.exptno = this.containerClpedt[0].EXPTNO;
        this.TOTAL_NOOFPKGS = this.containerClpedt[0].TOTAL_NOOFPKGS;
        this.TOTAL_CBM = this.containerClpedt[0].TOTAL_CBM;
        this.TOTAL_NO_OF_PCS = this.containerClpedt[0].TOTAL_NO_OF_PCS;
        this.TOTAL_NO_GR_WT = this.containerClpedt[0].TOTAL_NO_GR_WT;
        this.TOTAL_NO_NET_WT = this.containerClpedt[0].TOTAL_NO_NET_WT;
        this.THIS_CONTAINER_NOOFPKGS = this.containerClpedt[0].PKGS;
        this.THIS_CONTAINER_CBM = this.containerClpedt[0].CBM;
        this.THIS_CONTAINER_NO_OF_PCS = this.containerClpedt[0].PCS;
        this.THIS_CONTAINER_NO_GR_WT = this.containerClpedt[0].GRWT;
        this.THIS_CONTAINER_NO_NET_WT = this.containerClpedt[0].NETWT;
        this.THIS_CONTAINER_NO_CLP_SEQ = this.containerClpedt[0].CLP_SEQ;
        this.contstatus = this.containerClpedt[0].CONTAINERSTATUS;
        this.destport = this.containerClpedt[0].DESTPORT;
        this.Movetype = this.containerClpedt[0].MOVETYPE;
        this.SteAgtSealno = this.containerClpedt[0].AGTSEALNO;
        this.CustSealNo = this.containerClpedt[0].CUSTSEALNO;
        this.freight = this.containerClpedt[0].FREIGHT;
        this.AVAILABLE_NOOFPKGS = parseFloat(this.containerClpedt[0].AVAI_PKGS) + parseFloat(this.THIS_CONTAINER_NOOFPKGS);
        this.AVAILABLE_CBM = parseFloat(this.containerClpedt[0].AVAI_CBM) + parseFloat(this.THIS_CONTAINER_CBM);
        this.AVAILABLE_NO_OF_PCS = parseFloat(this.containerClpedt[0].AVAI_PCS) + parseFloat(this.THIS_CONTAINER_NO_OF_PCS);
        this.AVAILABLE_NO_GR_WT = parseFloat(this.containerClpedt[0].AVAI_GRWT) + parseFloat(this.THIS_CONTAINER_NO_GR_WT);
        this.AVAILABLE_NO_NET_WT = parseFloat(this.containerClpedt[0].AVAI_NETWT) + parseFloat(this.THIS_CONTAINER_NO_NET_WT);
    };
    FSmulticontainerEdit.prototype.deletechildExptNo = function (ID, contid) {
        var _this = this;
        if (contid == 0) {
            this.loaderService.display(true);
            var jsondelete = { ID: ID, userid: this._loginService.getLogin()[0].CMPID, vguid: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Export/ContainerFS_DELETE", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                    _this.containerClp = data.Table;
                    _this.AVAILABLE_NOOFPKGS = data.Table1[0].AVAI_PKGS;
                    _this.AVAILABLE_NO_OF_PCS = data.Table1[0].AVAI_PCS;
                    _this.AVAILABLE_NO_GR_WT = data.Table1[0].AVAI_GRWT;
                    _this.AVAILABLE_NO_NET_WT = data.Table1[0].AVAI_NETWT;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this._toasterService.toast('info', 'info', "This container is already containerized please contact administrator !");
        }
    };
    FSmulticontainerEdit.prototype.childreset = function () {
        this.Add = "Add";
        this.id = "0";
        this.containerid = "0";
        this.THIS_CONTAINER_NO = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        //this.exptno="" ;
        // this.TOTAL_NOOFPKGS=  "" ;
        // this.TOTAL_CBM=  "";
        // this.TOTAL_NO_OF_PCS= "";
        // this.TOTAL_NO_GR_WT=  "" ;
        // this.TOTAL_NO_NET_WT= "" ;
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = 0;
        this.AVAILABLE_CBM = 0;
        this.AVAILABLE_NO_OF_PCS = 0;
        this.AVAILABLE_NO_GR_WT = 0;
        this.AVAILABLE_NO_NET_WT = 0;
        this.contstatus = "LCL/FCL";
        // this.Movetype="";
        // this.destport=""
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
    };
    FSmulticontainerEdit.prototype.finalSubmit = function () {
        var _this = this;
        if (this.Vsl == undefined || this.Vsl == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.Vslshpgline == undefined || this.Vslshpgline == "") {
            this._toasterService.toast('error', 'Error', "Please select shipping Line ");
            return false;
        }
        var invalid = this.containerClp.some(function (obj) {
            return !obj.CONTAINERNO || obj.CONTAINERNO.startsWith("CONTAINERNO");
        });
        if (invalid) {
            alert("Please update all container numbers before submitting.");
            return;
        }
        var rtnos = "", ports = "";
        rtnos = this.Vsl.split('|')[0];
        ports = this.Vsl.split('|')[1];
        this.loaderService.display(true);
        var jsonExport = {
            VSL_RTNO: rtnos, VSL_PORT: ports, VSL_AGNT: this.Vslagt, VSL_SHIPLINE: this.Vslshpgline, USERID: this._loginService.getLogin()[0].CMPID,
            VGUID: this._loginService.getLogin()[0].GUID, EXPTNO: this.exptno
        };
        this._dataService.Common('Export/Export_MulticontainerFS_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.masterReset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerEdit.prototype.masterReset = function () {
        this.childreset();
        this.Vsl = undefined;
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.noofcontainers = '';
        this.ExptNoList = [];
        this.containerClp = [];
        // this.disable_grnerate_btn=false;
        // this.disable_noofcontainer=false;
        // this.disable_contsize=false;
        // this.disable_contsize1=false;
        // this.disable_destport=false;
        // this.disable_movetype=false;
        // this.disable_contstatus=false;
        this.disable_exptno = false;
        this.TOTAL_NOOFPKGS = "";
        this.TOTAL_CBM = "";
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.Movetype = "";
        this.destport = "";
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
    };
    FSmulticontainerEdit.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    FSmulticontainerEdit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multicontainerFS-Edit',
            template: __webpack_require__(/*! raw-loader!./exp_fs_multicontainer_edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_fs_multicontainer_edit.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], FSmulticontainerEdit);
    return FSmulticontainerEdit;
}());



/***/ }),

/***/ "./src/app/export/container/exp_fs_multicontainer_iu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/export/container/exp_fs_multicontainer_iu.component.ts ***!
  \************************************************************************/
/*! exports provided: FSmulticontainerIU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSmulticontainerIU", function() { return FSmulticontainerIU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FSmulticontainerIU = /** @class */ (function () {
    function FSmulticontainerIU(_router, _dataService, _auth, _toasterService, _loginService, _ContainerIUSharedDataService, _vslsharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._ContainerIUSharedDataService = _ContainerIUSharedDataService;
        this._vslsharedvataSerice = _vslsharedvataSerice;
        this.loaderService = loaderService;
        this.Add = "Add";
        this.vslrotation = "";
        this.vslport = "";
        this.vsldet = "";
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ContainerID = "0";
        this.Containerno = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.contstatus = "LCL/FCL";
        this.destport = "";
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
        this.containerClp = [];
        this.vessel = [];
        this.vslName = "";
        this.vsl_voyno = "";
        this.vslAgent = [];
        this.shpline = [];
        this.vslshpline = [];
        this.containerlist = [];
        this.Movetype = "";
        this.city = [];
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = "";
        this.AVAILABLE_CBM = "";
        this.AVAILABLE_NO_OF_PCS = "";
        this.AVAILABLE_NO_GR_WT = "";
        this.AVAILABLE_NO_NET_WT = "";
        this.id = "0";
        this.containerid = "0";
        this.disable_grnerate_btn = false;
        this.disable_noofcontainer = false;
        this.disable_destport = false;
        this.disable_contstatus = false;
        this.disable_contsize = false;
        this.disable_contsize1 = false;
        this.disable_movetype = false;
        this.disable_exptno = false;
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
    FSmulticontainerIU.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(231, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
        var jsonExport = { SEARCHMODE: "0", VSLNAME: this.vslName, VSL_VOY: this.vsl_voyno, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.Common("Export/Export_Vessel_List", jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vessel = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('Warning', 'Warning', 'Data Loaded Successfully');
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerIU.prototype.GenerateContainer = function () {
        var _this = this;
        if (this.destport == undefined || this.destport == "") {
            this._toasterService.toast('error', 'Error', "Please select Destination POrt ");
            return false;
        }
        if (this.Movetype == undefined || this.Movetype == "") {
            this._toasterService.toast('error', 'Error', "Please select Move Type");
            return false;
        }
        if (this.noofcontainers == "" || this.noofcontainers == '' || this.noofcontainers == undefined) {
            this._toasterService.toast('error', 'Error', "Please enter No Of Containers.");
            return false;
        }
        var jsonExport = {
            EXPTNO: this.exptno, NOOFCONTAINERS: this.noofcontainers, CONTSIZE: this.cntsize, CONTSIZE1: this.cntsize1, CONTSTATUS: this.contstatus, DESTPORT: this.destport, MOVETYPE: this.Movetype, USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID
        };
        this.loaderService.display(true);
        this._dataService.Common('Export/EXP_CONTAINER_FS_GENERATE', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', 'Containers added successfully');
                _this.containerClp = data.Table;
                _this.disable_grnerate_btn = true;
                _this.disable_noofcontainer = true;
                _this.disable_contsize = true;
                _this.disable_contsize1 = true;
                _this.disable_destport = true;
                _this.disable_movetype = true;
                _this.disable_contstatus = true;
                _this.disable_exptno = true;
                _this.AVAILABLE_NOOFPKGS = data.Table1[0].AVAI_PKGS;
                _this.AVAILABLE_NO_OF_PCS = data.Table1[0].AVAI_PCS;
                _this.AVAILABLE_NO_GR_WT = data.Table1[0].AVAI_GRWT;
                _this.AVAILABLE_NO_NET_WT = data.Table1[0].AVAI_NETWT;
                //this.childreset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerIU.prototype.onfillAgent = function (vsldt) {
        var _this = this;
        if (vsldt != "") {
            var rtnos = "", ports = "";
            rtnos = vsldt.split('|')[0];
            ports = vsldt.split('|')[1];
            if (this.vslAgent.length > 0) {
                if (confirm("Are you sure ,Do you want to change the vessel ,While changing the vessel current data will be lost")) {
                    this.containerClp = [];
                }
                else {
                    return false;
                }
            }
            this.loaderService.display(true);
            var jsonExport = { vsl: rtnos, port: ports, CMPCOD: this._loginService.getLogin()[0].CMPCODE, CITYCODE: this._loginService.getLogin()[0].CITYCODE, CMPID: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_Fill', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.containerlist = data.Table;
                    //  this.vsldet = "VESSEL: " + this.containerlist[0].VSL_NAME + " - ROTATION: " + this.containerlist[0].VSL_RTNO + "  -  VOYAGE: " + this.containerlist[0].VSL_VOYNO + " -  ETD: " + this.containerlist[0].ETD;
                    _this.vslrotation = _this.containerlist[0].VSL_RTNO;
                    _this.vslport = _this.containerlist[0].PORT;
                    _this.vslAgent = data.Table1;
                    _this.city = data.Table2;
                    _this.shpline = data.Table3;
                    _this.VSLExptNoList = data.Table4;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this.childreset();
            this.masterReset();
            this.containerClp = [];
        }
    };
    FSmulticontainerIU.prototype.OnChangeExjob = function (exjobno) {
        var _this = this;
        if (exjobno != "") {
            this.loaderService.display(true);
            var jsonExport = { exptno: exjobno, userid: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_FillExptno', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].AVAI_PKGS == 0) {
                    _this._toasterService.toast('warning', 'warning', "Total Pkgs is used ");
                    _this.loaderService.display(false);
                    return false;
                }
                else {
                    _this.TOTAL_NOOFPKGS = data.Table[0].PKGS;
                    _this.TOTAL_CBM = data.Table[0].CBM;
                    _this.TOTAL_NO_OF_PCS = data.Table[0].PCS;
                    _this.TOTAL_NO_GR_WT = data.Table[0].GRWT;
                    _this.TOTAL_NO_NET_WT = data.Table[0].NETWT;
                    //    this.THIS_CONTAINER_NOOFPKGS=data.Table[0].AVAI_PKGS;
                    //    this.THIS_CONTAINER_CBM=data.Table[0].AVAI_CBM;
                    //    this.THIS_CONTAINER_NO_OF_PCS=data.Table[0].AVAI_PCS;
                    //    this.THIS_CONTAINER_NO_GR_WT=data.Table[0].AVAI_GRWT;
                    //    this.THIS_CONTAINER_NO_NET_WT=data.Table[0].AVAI_NETWT;
                    _this.AVAILABLE_NOOFPKGS = data.Table[0].AVAI_PKGS;
                    _this.AVAILABLE_CBM = data.Table[0].AVAI_CBM;
                    _this.AVAILABLE_NO_OF_PCS = data.Table[0].AVAI_PCS;
                    _this.AVAILABLE_NO_GR_WT = data.Table[0].AVAI_GRWT;
                    _this.AVAILABLE_NO_NET_WT = data.Table[0].AVAI_NETWT;
                    _this.destport = data.Table[0].POD;
                }
                _this.loaderService.display(false);
            });
        }
        else {
            this.childreset();
        }
    };
    FSmulticontainerIU.prototype.onfillshipline = function (Agtcode) {
        if (Agtcode != "") {
            this.vslshpline = this.shpline.filter(function (agent) { return agent.VSL_AGENT === Agtcode; });
            this.ExptNoList = this.VSLExptNoList.filter(function (agent) { return agent.EXPT_VSLAGENT === Agtcode; });
            this.AVAILABLE_NOOFPKGS = this.ExptNoList[0].AVAI_PKGS;
            this.AVAILABLE_CBM = this.ExptNoList[0].AVAI_CBM;
            this.AVAILABLE_NO_OF_PCS = this.ExptNoList[0].AVAI_PCS;
            this.AVAILABLE_NO_GR_WT = this.ExptNoList[0].AVAI_GRWT;
            this.AVAILABLE_NO_NET_WT = this.ExptNoList[0].AVAI_NETWT;
        }
    };
    FSmulticontainerIU.prototype.AddChild = function () {
        var _this = this;
        if (this.vessel == undefined || this.vessel == null || this.vessel == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == null || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.THIS_CONTAINER_NO == undefined || this.THIS_CONTAINER_NO == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO.length < 11) {
            this._toasterService.toast('error', 'Error', "Container no. length should be 11 characters");
            return false;
        }
        if (this.cntsize == undefined || this.cntsize == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.cntsize1 == undefined || this.cntsize1 == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.destport == undefined || this.destport == "") {
            this._toasterService.toast('error', 'Error', "Please select Destination POrt ");
            return false;
        }
        if (this.Movetype == undefined || this.Movetype == "") {
            this._toasterService.toast('error', 'Error', "Please select Move Type");
            return false;
        }
        if (this.SteAgtSealno == "") {
            this._toasterService.toast('error', 'Error', "Please enter Steamer agent No");
            return false;
        }
        if (this.CustSealNo == "") {
            this._toasterService.toast('error', 'Error', "Please enter Custome Seal No.");
            return false;
        }
        if (this.freight == undefined || this.freight == null || this.freight == "") {
            this._toasterService.toast('error', 'Error', "Please select Freight ");
            return false;
        }
        if (this.exptno == undefined || this.exptno == "") {
            this._toasterService.toast('error', 'Error', "Please select Ex-Job No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO_CLP_SEQ == undefined || this.THIS_CONTAINER_NO_CLP_SEQ == null || this.THIS_CONTAINER_NO_CLP_SEQ == "") { }
        else {
            if (this.THIS_CONTAINER_NO_CLP_SEQ.length < 2) {
                this._toasterService.toast('warning', 'warning', "CLP should be 2 digit no start from 01");
                return false;
            }
        }
        if (this.THIS_CONTAINER_NOOFPKGS == undefined || this.THIS_CONTAINER_NOOFPKGS == null || this.THIS_CONTAINER_NOOFPKGS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pkgs can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_CBM == undefined || this.THIS_CONTAINER_CBM == null || this.THIS_CONTAINER_CBM == "") {
            this._toasterService.toast('warning', 'warning', "CBM can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_OF_PCS == undefined || this.THIS_CONTAINER_NO_OF_PCS == null || this.THIS_CONTAINER_NO_OF_PCS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pcs  can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_GR_WT == undefined || this.THIS_CONTAINER_NO_GR_WT == null || this.THIS_CONTAINER_NO_GR_WT == "") {
            this._toasterService.toast('warning', 'warning', "GrWt can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_NET_WT == undefined || this.THIS_CONTAINER_NO_NET_WT == null || this.THIS_CONTAINER_NO_NET_WT == "") {
            this._toasterService.toast('warning', 'warning', "NetWt can`t be blank");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NOOFPKGS) > parseFloat(this.AVAILABLE_NOOFPKGS)) {
            this._toasterService.toast('warning', 'warning', "No of packages should be less than or equal to available no of pkgs");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_CBM) > parseFloat(this.AVAILABLE_CBM)) {
            this._toasterService.toast('warning', 'warning', "CBM should be less than or equal to available CBM");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_OF_PCS) > parseFloat(this.AVAILABLE_NO_OF_PCS)) {
            this._toasterService.toast('warning', 'warning', "No of Pcs should be less than or equal to available Pcs");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_GR_WT) > parseFloat(this.AVAILABLE_NO_GR_WT)) {
            this._toasterService.toast('warning', 'warning', "GrWt should be less than or equal to available GrWt");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_NET_WT) > parseFloat(this.AVAILABLE_NO_NET_WT)) {
            this._toasterService.toast('warning', 'warning', "NetWt should be less than or equal to available NetWt");
            return false;
        }
        this.loaderService.display(true); //ID,CONTAINERID
        var jsonExport = {
            ID: this.id, CONTAINERID: this.containerid, CONTAINERNO: this.THIS_CONTAINER_NO, CONTSIZE: this.cntsize, CONTSIZE1: this.cntsize1, EXPTNO: this.exptno, PKGS: this.THIS_CONTAINER_NOOFPKGS, CBM: this.THIS_CONTAINER_CBM, Pcs: this.THIS_CONTAINER_NO_OF_PCS, GrWt: this.THIS_CONTAINER_NO_GR_WT, NetWt: this.THIS_CONTAINER_NO_NET_WT, CLP_SEQ: this.THIS_CONTAINER_NO_CLP_SEQ, USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID, CONTSTATUS: this.contstatus, DESTPORT: this.destport, MOVETYPE: this.Movetype, STEAM_AGENTNO: this.SteAgtSealno, CUSTOM_AGENTNO: this.CustSealNo, FREIGHT: this.freight
        };
        this._dataService.Common('Export/Export_containerFSTmp_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.containerClp = data.Table;
                _this.childreset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerIU.prototype.EditchildExptNo = function (Id) {
        this.Add = "Update";
        this.containerClpedt = this.containerClp.filter(function (pkid) { return pkid.ID === Id; });
        this.id = this.containerClpedt[0].ID;
        this.containerid = this.containerClpedt[0].CONTAINERID;
        this.THIS_CONTAINER_NO = this.containerClpedt[0].CONTAINERNO;
        this.cntsize = this.containerClpedt[0].CONT_SIZE;
        this.cntsize1 = this.containerClpedt[0].CONT_SIZE1;
        this.exptno = this.containerClpedt[0].EXPTNO;
        this.TOTAL_NOOFPKGS = this.containerClpedt[0].TOTAL_NOOFPKGS;
        this.TOTAL_CBM = this.containerClpedt[0].TOTAL_CBM;
        this.TOTAL_NO_OF_PCS = this.containerClpedt[0].TOTAL_NO_OF_PCS;
        this.TOTAL_NO_GR_WT = this.containerClpedt[0].TOTAL_NO_GR_WT;
        this.TOTAL_NO_NET_WT = this.containerClpedt[0].TOTAL_NO_NET_WT;
        this.THIS_CONTAINER_NOOFPKGS = this.containerClpedt[0].PKGS;
        this.THIS_CONTAINER_CBM = this.containerClpedt[0].CBM;
        this.THIS_CONTAINER_NO_OF_PCS = this.containerClpedt[0].PCS;
        this.THIS_CONTAINER_NO_GR_WT = this.containerClpedt[0].GRWT;
        this.THIS_CONTAINER_NO_NET_WT = this.containerClpedt[0].NETWT;
        this.THIS_CONTAINER_NO_CLP_SEQ = this.containerClpedt[0].CLP_SEQ;
        this.contstatus = this.containerClpedt[0].CONTAINERSTATUS;
        this.destport = this.containerClpedt[0].DESTPORT;
        this.Movetype = this.containerClpedt[0].MOVETYPE;
        this.SteAgtSealno = this.containerClpedt[0].AGTSEALNO;
        this.CustSealNo = this.containerClpedt[0].CUSTSEALNO;
        this.freight = this.containerClpedt[0].FREIGHT;
        this.AVAILABLE_NOOFPKGS = parseFloat(this.containerClpedt[0].AVAI_PKGS) + parseFloat(this.THIS_CONTAINER_NOOFPKGS);
        this.AVAILABLE_CBM = parseFloat(this.containerClpedt[0].AVAI_CBM) + parseFloat(this.THIS_CONTAINER_CBM);
        this.AVAILABLE_NO_OF_PCS = parseFloat(this.containerClpedt[0].AVAI_PCS) + parseFloat(this.THIS_CONTAINER_NO_OF_PCS);
        this.AVAILABLE_NO_GR_WT = parseFloat(this.containerClpedt[0].AVAI_GRWT) + parseFloat(this.THIS_CONTAINER_NO_GR_WT);
        this.AVAILABLE_NO_NET_WT = parseFloat(this.containerClpedt[0].AVAI_NETWT) + parseFloat(this.THIS_CONTAINER_NO_NET_WT);
    };
    FSmulticontainerIU.prototype.deletechildExptNo = function (ID, contid) {
        var _this = this;
        if (contid == 0) {
            this.loaderService.display(true);
            var jsondelete = { ID: ID, userid: this._loginService.getLogin()[0].CMPID, vguid: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Export/ContainerFS_DELETE", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                    _this.containerClp = data.Table;
                    _this.AVAILABLE_NOOFPKGS = data.Table1[0].AVAI_PKGS;
                    _this.AVAILABLE_NO_OF_PCS = data.Table1[0].AVAI_PCS;
                    _this.AVAILABLE_NO_GR_WT = data.Table1[0].AVAI_GRWT;
                    _this.AVAILABLE_NO_NET_WT = data.Table1[0].AVAI_NETWT;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this._toasterService.toast('info', 'info', "This container is already containerized please contact administrator !");
        }
    };
    FSmulticontainerIU.prototype.childreset = function () {
        this.Add = "Add";
        this.id = "0";
        this.containerid = "0";
        this.THIS_CONTAINER_NO = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        //this.exptno="" ;
        // this.TOTAL_NOOFPKGS=  "" ;
        // this.TOTAL_CBM=  "";
        // this.TOTAL_NO_OF_PCS= "";
        // this.TOTAL_NO_GR_WT=  "" ;
        // this.TOTAL_NO_NET_WT= "" ;
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = 0;
        this.AVAILABLE_CBM = 0;
        this.AVAILABLE_NO_OF_PCS = 0;
        this.AVAILABLE_NO_GR_WT = 0;
        this.AVAILABLE_NO_NET_WT = 0;
        this.contstatus = "LCL/FCL";
        // this.Movetype="";
        // this.destport=""
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
    };
    FSmulticontainerIU.prototype.finalSubmit = function () {
        var _this = this;
        if (this.Vsl == undefined || this.Vsl == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.Vslshpgline == undefined || this.Vslshpgline == "") {
            this._toasterService.toast('error', 'Error', "Please select shipping Line ");
            return false;
        }
        var invalid = this.containerClp.some(function (obj) {
            return !obj.CONTAINERNO || obj.CONTAINERNO.startsWith("CONTAINERNO");
        });
        if (invalid) {
            alert("Please update all container numbers before submitting.");
            return;
        }
        var rtnos = "", ports = "";
        rtnos = this.Vsl.split('|')[0];
        ports = this.Vsl.split('|')[1];
        this.loaderService.display(true);
        var jsonExport = {
            VSL_RTNO: rtnos, VSL_PORT: ports, VSL_AGNT: this.Vslagt, VSL_SHIPLINE: this.Vslshpgline, USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID
        };
        this._dataService.Common('Export/Export_containerFS_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.masterReset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    FSmulticontainerIU.prototype.masterReset = function () {
        this.childreset();
        this.Vsl = undefined;
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.noofcontainers = '';
        this.ExptNoList = [];
        this.containerClp = [];
        this.disable_grnerate_btn = false;
        this.disable_noofcontainer = false;
        this.disable_contsize = false;
        this.disable_contsize1 = false;
        this.disable_destport = false;
        this.disable_movetype = false;
        this.disable_contstatus = false;
        this.disable_exptno = false;
        this.TOTAL_NOOFPKGS = "";
        this.TOTAL_CBM = "";
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.Movetype = "";
        this.destport = "";
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
    };
    FSmulticontainerIU.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    FSmulticontainerIU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multicontainerFS-iu',
            template: __webpack_require__(/*! raw-loader!./exp_fs_multicontainer_iu.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_fs_multicontainer_iu.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], FSmulticontainerIU);
    return FSmulticontainerIU;
}());



/***/ }),

/***/ "./src/app/export/container/exp_sp_container_IU.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/export/container/exp_sp_container_IU.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExptSpContainerIU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptSpContainerIU", function() { return ExptSpContainerIU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { CLPList, ContainerCLP  } from  'ngx-bootstrap/tabs';
var ExptSpContainerIU = /** @class */ (function () {
    function ExptSpContainerIU(_router, _dataService, _auth, _toasterService, _loginService, _ContainerIUSharedDataService, _vslsharedvataSerice, _loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._ContainerIUSharedDataService = _ContainerIUSharedDataService;
        this._vslsharedvataSerice = _vslsharedvataSerice;
        this._loaderService = _loaderService;
        this.baseUrl = "";
        this.showLoader = false;
        this.vslrotation = "";
        this.vslport = "";
        this.vsldet = "";
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ContainerID = "0";
        this.Containerno = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.contstatus = "LCL/FCL";
        this.destport = "";
        this.SteAgtSealno = "";
        this.hstuffed = "NO";
        this.stufwhere = "";
        this.stufwhere2 = "";
        this.stufwhere3 = "";
        this.stufcity = "";
        this.CustSealNo = "";
        this.freight = "PP";
        this.frtCurency = "";
        this.frtCurChargs = "";
        this.BAFCurency = "";
        this.BAFCurChargs = "";
        this.ThcName = "";
        this.ThcCurency = "";
        this.ThcCurChargs = "";
        this.otherName = "";
        this.OtherCurency = "";
        this.otherCurChargs = "";
        this.OCUR1 = "";
        this.OCURRate1 = "";
        this.OCUR2 = "";
        this.OCURRate2 = "";
        this.DCUR1 = "";
        this.DCURRate1 = "";
        this.DCUR2 = "";
        this.DCURRate2 = "";
        this.remark = "";
        this.LINERCONTRACT = "";
        this.BcarrierNo = "";
        this.Bcarrierdt = "";
        this.Movetype = "";
        this.containerlist = [];
        this.vslAgent = [];
        this.shpline = [];
        this.vslshpline = [];
        this.city = [];
        this.currency = [];
        this.freightEnable = true;
        this.freightRateEnable = false;
        this.buttonStatus = false;
        this.contract = "";
        //------------CLP
        this.containerClp = [];
        this.clpVessel = [];
        this.containerNoClp = [];
        this.clpstring = "";
        this.clpHeader = "";
        this.pkgs = "";
        this.pcs = "";
        this.cbm = "";
        this.grwt = "";
        this.netwt = "";
        this.ClpSeq = "";
        this.colurcode = "";
        this.contReq = "";
        this.verified = "";
        this.verifiedflg = "";
        this.CLP = "";
        this.ClpRotation = "";
        //NO OF PALLET
        this.p_vslrtno = "";
        this.p_etd = "";
        this.P_vslName = "";
        this.p_VoyNo = "";
        this.P_List = "";
        this.P_Containerno = "";
        this.p_header = "";
        this.cntrpkgs = "0";
        this.cntrpkgss = "0";
        this.cntrcbm = "0";
        this.cntrpcs = "0";
        this.cntrgrwt = "0";
        this.cntrnetwt = "0";
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
    ExptSpContainerIU.prototype.selectTab = function (tab_id) {
        this.containerTabs.tabs[tab_id].active = true;
        this._loaderService.display(false);
    };
    ExptSpContainerIU.prototype.disableEnable_clp = function () {
        this.containerTabs.tabs[1].disabled = !this.containerTabs.tabs[1].disabled;
    };
    ExptSpContainerIU.prototype.disableEnable_pallet = function () {
        this.containerTabs.tabs[2].disabled = !this.containerTabs.tabs[2].disabled;
    };
    ExptSpContainerIU.prototype.ngOnInit = function () {
        var _this = this;
        if (this._vslsharedvataSerice.RtnosharedData == undefined || this._vslsharedvataSerice.RtnosharedData == null) {
            this._toasterService.toast('error', 'Error', "Please select Vessel Details first ");
            this.disableEnable_clp();
            this.disableEnable_pallet();
        }
        else {
            this._loaderService.display(true);
            this.baseUrl = 'Export/Export_container_filldropdown';
            var jsonExport = { vsl_rtno: this._vslsharedvataSerice.RtnosharedData, Port: this._vslsharedvataSerice.vslPortsharedData };
            this._dataService.Common(this.baseUrl, jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.containerlist = data.Table;
                    _this.vsldet = "VESSEL: " + _this.containerlist[0].VSL_NAME + " - ROTATION: " + _this.containerlist[0].VSL_RTNO + "  -  VOYAGE: " + _this.containerlist[0].VSL_VOYNO + " -  ETD: " + _this.containerlist[0].ETD;
                    _this.vslrotation = _this.containerlist[0].VSL_RTNO;
                    _this.vslport = _this.containerlist[0].PORT;
                    _this.vslAgent = data.Table1;
                    _this.city = data.Table2;
                    _this.currency = data.Table3;
                    _this.shpline = data.Table4;
                    _this.editmodeContainerfill();
                }
                else {
                    _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                    _this._loaderService.display(false);
                }
            });
        }
    };
    ExptSpContainerIU.prototype.editmodeContainerfill = function () {
        var _this = this;
        if (this._ContainerIUSharedDataService.ContainerID !== undefined) {
            this.baseUrl = 'Export/Export_container_Populate';
            var jsonExport = { ContainerID: this._ContainerIUSharedDataService.ContainerID };
            this._dataService.Common(this.baseUrl, jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.Vslagt = data.Table[0].EXPT_AGENT;
                    _this.onfillshipline(_this.Vslagt);
                    _this.Vslshpgline = data.Table[0].SHPGLINE;
                    _this.ContainerID = data.Table[0].ContainerID;
                    _this.Containerno = data.Table[0].CONTAINERNO;
                    _this.cntsize = data.Table[0].CONTAINERSIZE;
                    _this.cntsize1 = data.Table[0].CONTAINERSIZE1;
                    _this.contstatus = data.Table[0].CONTAINERSTATUS;
                    _this.destport = data.Table[0].DESTPORT;
                    _this.SteAgtSealno = data.Table[0].AGTSEALNO;
                    _this.hstuffed = data.Table[0].HSTUFFED;
                    _this.stufwhere = data.Table[0].STUFFWHERE;
                    _this.stufwhere2 = data.Table[0].STUFFWHERE1;
                    _this.stufwhere3 = data.Table[0].STUFFWHERE2;
                    _this.stufcity = data.Table[0].STUFFINGCITY;
                    _this.CustSealNo = data.Table[0].CUSTSEALNO;
                    _this.freight = data.Table[0].FREIGHT;
                    _this.frtCurency = data.Table[0].FREIGHTCUR;
                    _this.frtCurChargs = data.Table[0].FREIGHTUSD;
                    _this.BAFCurency = data.Table[0].BAFCUR;
                    _this.BAFCurChargs = data.Table[0].BAFUSD;
                    _this.ThcName = data.Table[0].THCNAME;
                    _this.ThcCurency = data.Table[0].THCCUR;
                    _this.ThcCurChargs = data.Table[0].THCINR;
                    _this.otherName = data.Table[0].OTHERNAME;
                    _this.OtherCurency = data.Table[0].OTHERCUR;
                    _this.otherCurChargs = data.Table[0].OTHERAMT;
                    _this.OCUR1 = data.Table[0].OCUR1;
                    _this.OCURRate1 = data.Table[0].OCURRATE1;
                    _this.OCUR2 = data.Table[0].OCUR2;
                    _this.OCURRate2 = data.Table[0].OCURRATE2;
                    _this.DCUR1 = data.Table[0].DCUR1;
                    _this.DCURRate1 = data.Table[0].DCURRATE1;
                    _this.DCUR2 = data.Table[0].DCUR2;
                    _this.DCURRate2 = data.Table[0].DCURRATE2;
                    _this.remark = data.Table[0].REMARK;
                    _this.Movetype = data.Table[0].MoveType;
                    _this.contract = data.Table[0].TypeOfContract;
                    _this.editmodeContainerCLPfill();
                }
            });
        }
        else {
            this.disableEnable_clp();
            this._loaderService.display(false);
        }
    };
    ExptSpContainerIU.prototype.editmodeContainerCLPfill = function () {
        var _this = this;
        if (this._ContainerIUSharedDataService.ContainerID !== undefined) {
            this.baseUrl = 'Export/Export_containerCLP_Populate';
            var jsonExportclp = { vsl_rtno: this._vslsharedvataSerice.RtnosharedData, Port: this._vslsharedvataSerice.vslPortsharedData, CONTAINERNO: this.Containerno, EXPT_AGENT: this.Vslagt, GUID: this._loginService.getLogin()[0].GUID, cmpcode: this._loginService.getLogin()[0].CMPCODE };
            this._dataService.Common(this.baseUrl, jsonExportclp)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.clpVessel = data.Table;
                    _this.clpHeader = "VESSEL: " + _this.clpVessel[0].VSL_NAME + " - ROTATION: " + _this.clpVessel[0].VSL_RTNO + "  -  VOYAGE: " + _this.clpVessel[0].VSL_VOYNO + " -  ETD: " + _this.clpVessel[0].ETD;
                    _this.ClpRotation = _this.clpVessel[0].VSL_RTNO;
                    _this.verified = _this.clpVessel[0].VERIFIED;
                    _this.verifiedflg = _this.clpVessel[0].VERIFIED_FLAG;
                    _this.containerClp = data.Table1;
                    var totpkgs = 0;
                    var totcbm = 0;
                    var totpcs = 0;
                    var totgrwt = 0;
                    var totnetwt = 0;
                    for (var i = 0; i < _this.containerClp.length; i++) {
                        _this.cntrpkgs = _this.containerClp[i].THIS_CONTAINER_NOOFPKGS;
                        _this.cntrcbm = _this.containerClp[i].THIS_CONTAINER_CBM;
                        _this.cntrpcs = _this.containerClp[i].THIS_CONTAINER_NO_OF_PCS;
                        _this.cntrgrwt = _this.containerClp[i].THIS_CONTAINER_NO_GR_WT;
                        _this.cntrnetwt = _this.containerClp[i].THIS_CONTAINER_NO_NET_WT;
                        if (parseFloat(_this.cntrpkgs) > 0) {
                            totpkgs += parseFloat(_this.cntrpkgs);
                        }
                        if (parseFloat(_this.cntrcbm) > 0) {
                            totcbm += parseFloat(_this.cntrcbm);
                        }
                        if (parseFloat(_this.cntrpcs) > 0) {
                            totpcs += parseFloat(_this.cntrpcs);
                        }
                        if (parseFloat(_this.cntrgrwt) > 0) {
                            totgrwt += parseFloat(_this.cntrgrwt);
                        }
                        if (parseFloat(_this.cntrnetwt) > 0) {
                            totnetwt += parseFloat(_this.cntrnetwt);
                        }
                    }
                    _this.pkgs = totpkgs;
                    _this.cbm = totcbm;
                    _this.pcs = totpcs;
                    _this.grwt = totgrwt;
                    _this.netwt = totnetwt;
                    _this.containerNoClp = data.Table2;
                    if (_this.verified == "Y") {
                        _this.LoadPallet();
                        //  this.disableEnable_Tab3();
                        _this.disableEnable_clp();
                    }
                    _this._loaderService.display(false);
                }
                else {
                    _this._toasterService.toast('error', 'Error', data.Table[0].STA_MSG);
                    _this.disableEnable_clp();
                    _this._loaderService.display(false);
                }
            });
        }
    };
    ExptSpContainerIU.prototype.LoadPallet = function () {
        var _this = this;
        this.baseUrl = 'Export/Export_containerCLP_Pallets';
        var jsonExportclp = { ContainerID: this._ContainerIUSharedDataService.ContainerID, ContainerNo: this.Containerno, vsl_rtno: this._vslsharedvataSerice.RtnosharedData, huhpnk: this._loginService.getLogin()[0].CMP_USERENCCODE };
        this._dataService.Common(this.baseUrl, jsonExportclp)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.p_header = "VESSEL: " + data.Table1[0].VSL_NAME + " - ROTATION: " + data.Table1[0].VSL_RTNO + "  -  VOYAGE: " + data.Table1[0].VSL_VOYNO + " -  ETD: " + data.Table1[0].ETD;
                _this.p_vslrtno = data.Table1[0].VSL_RTNO;
                _this.P_List = data.Table2;
            }
        });
    };
    ExptSpContainerIU.prototype.onfillshipline = function (Agtcode) {
        this.vslshpline = this.shpline.filter(function (agent) { return agent.VSL_AGENT === Agtcode; });
    };
    ExptSpContainerIU.prototype.radioonclick = function (lcontract) {
        this.LINERCONTRACT = lcontract;
        if (lcontract === "S") {
            this.freightRateEnable = true;
        }
        else {
            this.freightRateEnable = false;
        }
    };
    ExptSpContainerIU.prototype.onchangeFreight = function (frtVal) {
        if (frtVal == "CC") {
            this.freightEnable = false;
        }
        else {
            this.freightEnable = true;
        }
    };
    ExptSpContainerIU.prototype.AddEditContainer = function () {
        var _this = this;
        if (this.vslAgent == undefined || this.vslAgent == null || this.vslAgent == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.Vslshpgline == undefined || this.Vslshpgline == null || this.Vslshpgline == "") {
            this._toasterService.toast('error', 'Error', "Please select Shiping Line ");
            return false;
        }
        if (this.Containerno == undefined || this.Containerno == null || this.Containerno == "") {
            this._toasterService.toast('error', 'Error', "Container No. can not be blank");
            return false;
        }
        else if (this.Containerno.length < 11) {
            this._toasterService.toast('error', 'Error', "Container no. length should be 11 characters");
            return false;
        }
        if (this.contstatus == "LCL/LCL") {
            if (this.SteAgtSealno == undefined || this.SteAgtSealno == null || this.SteAgtSealno == "") {
                this._toasterService.toast('error', 'Error', "Steamer Agent Seal No Cannot Be Left Blank");
                return false;
            }
        }
        if (this.OCUR1 != "") {
            if (this.OCUR1 == this.OCUR2) {
                this._toasterService.toast('error', 'Error', "Both currency can not be same");
                return false;
            }
        }
        if (this.DCUR1 != "") {
            if (this.DCUR1 == this.DCUR2) {
                this._toasterService.toast('error', 'Error', "Both currency can not be same");
                return false;
            }
        }
        if (this.contract == "") {
            this._toasterService.toast('error', 'Error', "Please select type of contract");
            return false;
        }
        var Bcarrierdt;
        if (this.Bcarrierdt == "") {
            Bcarrierdt = "";
        }
        else {
            Bcarrierdt = this.Bcarrierdt.formatted;
        }
        // if (  this.SteAgtSealno==""){
        //     this._toasterService.toast('error', 'Error', "Steamer Agent Seal No. cannot blank");
        //     return false;
        // }
        this._loaderService.display(true);
        var jsonExport = {
            ContainerID: this.ContainerID, vsl_rtno: this.vslrotation, EXPT_AGENT: this.Vslagt, CONTAINERNO: this.Containerno, CONTAINERSIZE: this.cntsize, CONTAINERSIZE1: this.cntsize1, CONTAINERSTATUS: this.contstatus, DESTPORT: this.destport, AGTSEALNO: this.SteAgtSealno, HSTUFFED: this.hstuffed, STUFFWHERE: this.stufwhere, CUSTSEALNO: this.CustSealNo, FREIGHTUSD: this.frtCurChargs, BAFUSD: this.BAFCurChargs, STUFFWHERE1: this.stufwhere2, STUFFWHERE2: this.stufwhere3, STUFFINGCITY: this.stufcity, REMARK: this.remark, FREIGHT: this.freight, LINERCONTRACT: this.LINERCONTRACT, THCINR: this.ThcCurChargs, OCUR1: this.OCUR1, OCURRATE1: this.OCURRate1, OCUR2: this.OCUR2, OCURRATE2: this.OCURRate2, DCUR1: this.DCUR1, DCURRATE1: this.DCURRate1, DCUR2: this.DCUR2, DCURRATE2: this.DCURRate2, FREIGHTCUR: this.frtCurency, BAFCUR: this.BAFCurency, THCNAME: this.ThcName, THCCUR: this.ThcCurency, OTHERNAME: this.otherName, OTHERCUR: this.OtherCurency, OTHERAMT: this.otherCurChargs, SHPGLINE: this.Vslshpgline, Port: this.vslport, MOVETYPE: this.Movetype, BCARRIERNO: this.BcarrierNo, BCARRIERDT: Bcarrierdt, cmpid: this._loginService.getLogin()[0].CMPID, CITYCODE: this._loginService.getLogin()[0].CITYCODE, cmpcode: this._loginService.getLogin()[0].CMPCODE, contract: this.contract
        };
        this._dataService.Common("Export/Export_container_IU", jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                _this.buttonStatus = false;
                _this._vslsharedvataSerice.RtnosharedData = _this.vslrotation;
                _this._vslsharedvataSerice.vslPortsharedData = _this.vslport;
                _this.ContainerID = data.Table[0].CONTAINERID;
                _this.editmodeContainerCLPfill();
                _this.selectTab(1);
                //this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.buttonStatus = false;
                _this._loaderService.display(false);
            }
        });
    };
    // Check duplicate value in an array 
    ExptSpContainerIU.prototype.checkDuplicateInObject = function (propertyName, inputArray) {
        var seenDuplicate = false, testObject = {};
        inputArray.map(function (item) {
            var itemPropertyName = item[propertyName];
            if (itemPropertyName == null) { }
            else {
                if (itemPropertyName in testObject) {
                    testObject[itemPropertyName].duplicate = true;
                    item.duplicate = true;
                    seenDuplicate = true;
                }
                else {
                    testObject[itemPropertyName] = item;
                    delete item.duplicate;
                }
            }
        });
        return seenDuplicate;
    };
    ExptSpContainerIU.prototype.addContainerCLP = function () {
        var _this = this;
        var count = 0;
        if (this.checkDuplicateInObject("THIS_CONTAINER_NO_CLP_SEQ", this.containerClp) == false) {
            this.clpstring = "";
            for (var i = 0; i <= this.containerClp.length - 1; i++) {
                this.CLP = this.containerClp[i].THIS_CONTAINER_NO_CLP_SEQ;
                if (this.CLP == undefined || this.CLP == null || this.CLP == "") { }
                else {
                    if (this.CLP.length < 2) {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "CLP should be 2 digit no start from 01");
                        break;
                    }
                    if (this.containerClp[i].THIS_CONTAINER_NOOFPKGS == undefined || this.containerClp[i].THIS_CONTAINER_NOOFPKGS == null || this.containerClp[i].THIS_CONTAINER_NOOFPKGS == "") {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "No of Pkgs can`t be blank");
                        break;
                    }
                    if (this.containerClp[i].THIS_CONTAINER_CBM == undefined || this.containerClp[i].THIS_CONTAINER_CBM == null || this.containerClp[i].THIS_CONTAINER_CBM == "") {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "CBM can`t be blank");
                        break;
                    }
                    if (this.containerClp[i].THIS_CONTAINER_NO_OF_PCS == undefined || this.containerClp[i].THIS_CONTAINER_NO_OF_PCS == null || this.containerClp[i].THIS_CONTAINER_NO_OF_PCS == "") {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "No of Pcs  can`t be blank");
                        break;
                    }
                    if (this.containerClp[i].THIS_CONTAINER_NO_GR_WT == undefined || this.containerClp[i].THIS_CONTAINER_NO_GR_WT == null || this.containerClp[i].THIS_CONTAINER_NO_GR_WT == "") {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "GrWt can`t be blank");
                        break;
                    }
                    if (this.containerClp[i].THIS_CONTAINER_NO_NET_WT == undefined || this.containerClp[i].THIS_CONTAINER_NO_NET_WT == null || this.containerClp[i].THIS_CONTAINER_NO_NET_WT == "") {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "NetWt can`t be blank");
                        break;
                    }
                    if (parseFloat(this.containerClp[i].THIS_CONTAINER_NOOFPKGS) > parseFloat(this.containerClp[i].AVAILABLE_NOOFPKGS)) {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "No of packages should be less than or equal to available no of pkgs");
                        break;
                    }
                    if (parseFloat(this.containerClp[i].THIS_CONTAINER_CBM) > parseFloat(this.containerClp[i].AVAILABLE_CBM)) {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "CBM should be less than or equal to available CBM");
                        break;
                    }
                    if (parseFloat(this.containerClp[i].THIS_CONTAINER_NO_OF_PCS) > parseFloat(this.containerClp[i].AVAILABLE_NO_OF_PCS)) {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "No of Pcs should be less than or equal to available Pcs");
                        break;
                    }
                    if (parseFloat(this.containerClp[i].THIS_CONTAINER_NO_GR_WT) > parseFloat(this.containerClp[i].AVAILABLE_NO_GR_WT)) {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "GrWt should be less than or equal to available GrWt");
                        break;
                    }
                    if (parseFloat(this.containerClp[i].THIS_CONTAINER_NO_NET_WT) > parseFloat(this.containerClp[i].AVAILABLE_NO_NET_WT)) {
                        count = 1;
                        this._toasterService.toast('warning', 'warning', "NetWt should be less than or equal to available NetWt");
                        break;
                    }
                    this.clpstring = this.clpstring + this.containerClp[i].EXPTNO + "," + this.containerClp[i].THIS_CONTAINER_NOOFPKGS + "," + this.containerClp[i].THIS_CONTAINER_CBM + "," + this.containerClp[i].THIS_CONTAINER_NO_OF_PCS + "," + this.containerClp[i].THIS_CONTAINER_NO_GR_WT + "," + this.containerClp[i].THIS_CONTAINER_NO_NET_WT + "," + this.containerClp[i].THIS_CONTAINER_NO_CLP_SEQ + "," + this.containerClp[i].COLOUR_CODE + "," + this.containerClp[i].CONTAINER_NO + ";";
                }
            }
            if (this.clpstring == "") {
                count = 1;
                this._toasterService.toast('warning', 'warning', "Please enter at least one CLP");
                return false;
            }
            if (count == 0) {
                this._loaderService.display(true);
                this.baseUrl = 'Export/Export_containerCLP_IU';
                var jsonExport = {
                    ContainerNo: this.Containerno, vsl_rtno: this.ClpRotation, cmpid: this._loginService.getLogin()[0].CMPID, ContVerified: this.verified, CITYCODE: this._loginService.getLogin()[0].CITYCODE, clpString: this.clpstring, CMPCODE: this._loginService.getLogin()[0].CMPCODE
                };
                this._dataService.Common(this.baseUrl, jsonExport)
                    .subscribe(function (data) {
                    if (data.Table[0].STATUS == "100") {
                        _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                        _this.buttonStatus = false;
                        _this._vslsharedvataSerice.RtnosharedData = _this.vslrotation;
                        _this._vslsharedvataSerice.vslPortsharedData = _this.vslport;
                        _this._loaderService.display(false);
                        _this.editmodeContainerCLPfill();
                        _this.selectTab(1);
                    }
                    else {
                        _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                        _this.buttonStatus = false;
                    }
                });
            }
        }
        else {
            this._toasterService.toast('error', 'Error', "CLP should be unique ");
            return false;
        }
        this.buttonStatus = false;
    };
    ExptSpContainerIU.prototype.AddPallets = function () {
        var _this = this;
        this.baseUrl = 'Export/Export_containerCLP_Pallets_IU';
        var jsonExport = [];
        for (var i = 0; i < this.P_List.length; i++) {
            jsonExport.push({
                id: this.P_List[i].ID, ContainerID: this._ContainerIUSharedDataService.ContainerID, ContainerNo: this.Containerno, vsl_rtno: this.p_vslrtno, CON_CODE: this.P_List[i].ID, EXPT_CONSIGNEE: this.P_List[i].NO_OF_PALLETS, huhpnk: this._loginService.getLogin()[0].CMP_USERENCCODE
            });
        }
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Complete', data.Table[0].STATUSTEXT);
                _this.buttonStatus = false;
                _this._vslsharedvataSerice.RtnosharedData = _this.vslrotation;
                _this._vslsharedvataSerice.vslPortsharedData = _this.vslport;
                _this.editmodeContainerCLPfill();
                _this.selectTab(1);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.buttonStatus = false;
            }
        });
        this.buttonStatus = false;
    };
    ExptSpContainerIU.prototype.ResetAll = function () {
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ContainerID = "0";
        this.Containerno = "";
        this.cntsize = "";
        this.cntsize1 = "";
        this.contstatus = "LCL/FCL";
        this.destport = "";
        this.SteAgtSealno = "";
        this.hstuffed = "NO";
        this.stufwhere = "";
        this.stufwhere2 = "";
        this.stufwhere3 = "";
        this.stufcity = "";
        this.CustSealNo = "";
        this.freight = "PP";
        this.frtCurency = "";
        this.frtCurChargs = "";
        this.BAFCurency = "";
        this.BAFCurChargs = "";
        this.ThcName = "";
        this.ThcCurency = "";
        this.ThcCurChargs = "";
        this.otherName = "";
        this.OtherCurency = "";
        this.otherCurChargs = "";
        this.OCUR1 = "";
        this.OCURRate1 = "";
        this.OCUR2 = "";
        this.OCURRate2 = "";
        this.DCUR1 = "";
        this.DCURRate1 = "";
        this.DCUR2 = "";
        this.DCURRate2 = "";
        this.remark = "";
        this.BcarrierNo = "";
        this.Bcarrierdt = "";
        this.Movetype = "";
    };
    ExptSpContainerIU.prototype.back = function () {
        this._vslsharedvataSerice.RtnosharedData = this._vslsharedvataSerice.RtnosharedData;
        this._vslsharedvataSerice.vslPortsharedData = this._vslsharedvataSerice.vslPortsharedData;
        this._router.navigate(['/export/container/container-vessel-view']);
        this._ContainerIUSharedDataService.ContainerID == null;
    };
    ExptSpContainerIU.prototype.selectionChange = function (cntrval) {
        // this.pkgs =0;
        // this.cbm =0;
        // this.pcs=0;
        // this.grwt=0;
        // this.netwt=0;
        var totpkgs = 0;
        for (var i = 0; i < this.containerClp.length; i++) {
            this.cntrpkgs = this.containerClp[i][cntrval];
            if (parseFloat(this.cntrpkgs) > 0) {
                totpkgs += parseFloat(this.cntrpkgs);
            }
        }
        if (cntrval == 'THIS_CONTAINER_NOOFPKGS') {
            this.pkgs = totpkgs;
        }
        else if (cntrval == 'THIS_CONTAINER_CBM') {
            this.cbm = totpkgs;
        }
        else if (cntrval == 'THIS_CONTAINER_NO_OF_PCS') {
            this.pcs = totpkgs;
        }
        else if (cntrval == 'THIS_CONTAINER_NO_GR_WT') {
            this.grwt = totpkgs;
        }
        else if (cntrval == 'THIS_CONTAINER_NO_NET_WT') {
            this.netwt = totpkgs;
        }
    };
    ExptSpContainerIU.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('containerTabs', { static: false }),
        __metadata("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"])
    ], ExptSpContainerIU.prototype, "containerTabs", void 0);
    ExptSpContainerIU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-iu',
            template: __webpack_require__(/*! raw-loader!./exp_sp_container_IU.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_container_IU.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptSpContainerIU);
    return ExptSpContainerIU;
}());



/***/ }),

/***/ "./src/app/export/container/exp_sp_container_vessel_vw.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/export/container/exp_sp_container_vessel_vw.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExptSpContVslvw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptSpContVslvw", function() { return ExptSpContVslvw; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExptSpContVslvw = /** @class */ (function () {
    function ExptSpContVslvw(_router, _dataService, _auth, _toasterService, _loginService, _vslsharedvataSerice, _ContainersharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._vslsharedvataSerice = _vslsharedvataSerice;
        this._ContainersharedvataSerice = _ContainersharedvataSerice;
        this.loaderService = loaderService;
        this.baseUrl = 'Export/Export_container_View';
        //status: any = {
        //    isFirstOpen: true,
        //    isOpen: true
        //};
        this.vslRtno = "";
        this.vslName = "";
        this.vslVoyno = "";
        this.vslLstCartdt = "";
        this.vslEtd = "";
        this.vslActDepart = "";
        this.VSL_NAMERot = "";
        this.VSL_VOYAGE_ETD = "";
        this.PORT = "";
        this.ORIGINPORT = "";
        this.AGT_NAME = "";
        this.SHPGLINE = "";
        this.CONTAINERNO = "";
        this.SIZE = "";
        this.CONTAINERSTATUS = "";
        this.DESTPORT = "";
        this.DESTPORT1 = "";
        this.AGTSEALNO = "";
        this.SINGLESHPR = "";
        this.HSTUFFED = "";
        this.STUFFED_AT = "";
        this.CUSTSEALNO = "";
        this.FREIGHT_CHARGE = "";
        this.BAF_CHARGE = "";
        this.THCNAME = "";
        this.THC_CHARGE = "";
        this.OTHERNAME = "";
        this.OTHER_CHARGE = "";
        this.REMARK = "";
        this.FREIGHT = "";
        this.O_CUR1 = "";
        this.OCURRATE1 = "";
        this.O_CUR2 = "";
        this.OCURRATE2 = "";
        this.D_CUR1 = "";
        this.DCURRATE1 = "";
        this.D_CUR2 = "";
        this.DCURRATE2 = "";
        this.vsldetList = [];
        this.vsAgtList = [];
        this.contList = [];
        this.exJoblist = [];
        this.orderList = [];
        this.filtjoblist = [];
        this.collapse = true;
        this.collapse1 = false;
        this.Expand = true;
        this.Expand1 = false;
    }
    ExptSpContVslvw.prototype.ngOnInit = function () {
        var _this = this;
        this._ContainersharedvataSerice.ContainerID = undefined;
        // this._vslsharedvataSerice.RtnosharedData = undefined;
        //this._vslsharedvataSerice.vslPortsharedData = undefined //this.PORT;
        this.loaderService.display(true);
        var jsonExport = { vsl_rtno: this._vslsharedvataSerice.RtnosharedData, Port: this._vslsharedvataSerice.vslPortsharedData };
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vslRtno = data.Table[0].VSL_RTNO;
                //this.vslName = data.Table1[0].VSL_NAME;
                //this.vslVoyno = data.Table1[0].VSL_VOYNO;
                //this.vslLstCartdt = data.Table1[0].CARTING;
                //this.vslEtd = data.Table1[0].ETD;
                //this.vslActDepart = data.Table1[0].SAILING;
                _this.vsldetList = data.Table1;
                _this.VSL_NAMERot = _this.vsldetList[0].VSL_NAME;
                _this.VSL_VOYAGE_ETD = _this.vsldetList[0].VSL_VOYAGE_ETD;
                _this.PORT = _this.vsldetList[0].PORT;
                _this.ORIGINPORT = _this.vsldetList[0].ORIGINPORT;
                _this.vslLstCartdt = _this.vsldetList[0].CARTING;
                _this.vslActDepart = _this.vsldetList[0].SAILING;
                _this.contList = data.Table2;
                _this.exJoblist = data.Table3;
                _this.orderList = data.Table4;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', 'No record found');
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContVslvw.prototype.getContJob = function (containerno) {
        var updateItem = this.contList.find(function (item) { return item.CONTAINERNO === containerno; });
        var index1 = this.contList.indexOf(updateItem);
        if (this.contList[index1]["CHECK"] == true) {
            this.contList[index1]["CHECK"] = null;
        }
        else {
            for (var obj = 0; obj < this.contList.length; obj++) {
                this.contList[obj]["CHECK"] = null;
            }
            var index = this.contList.indexOf(updateItem);
            this.contList[index]["CHECK"] = true;
            this.filtjoblist = this.exJoblist.filter(function (joblist) { return joblist.CONTIANERNO_E === containerno; });
        }
    };
    ExptSpContVslvw.prototype.contineronclick = function (containerId, VERIFIED) {
        if (VERIFIED == "NO") {
            var ports = "";
            this._ContainersharedvataSerice.ContainerID = containerId;
            this._vslsharedvataSerice.RtnosharedData = this.vslRtno;
            ports = this.PORT.split(':')[1];
            this._vslsharedvataSerice.vslPortsharedData = ports; //this.PORT;
            this._router.navigate(['/export/container/form']);
        }
        else {
            this._toasterService.toast('Message', 'Message', "Container is verified You can't modified");
        }
    };
    ExptSpContVslvw.prototype.AddContainer = function () {
        var _this = this;
        this._loginService.verifyRights(231, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        if (this.vslActDepart == "") {
            this._vslsharedvataSerice.RtnosharedData = this.vslRtno;
            this._vslsharedvataSerice.vslPortsharedData = this._vslsharedvataSerice.vslPortsharedData;
            this._router.navigate(['/export/container/form']);
        }
        else {
            this._toasterService.toast('warning', 'Message', "vessel is sailed !");
            return false;
        }
    };
    /*  ClpDownload(containerno) {
         this._toasterService.toast('info', 'Complete', "Download Clp Excel format");
         this.loaderService.display(true);
         this.baseUrl = "Export/Export_containerCLP_Excl_Generation"
         //this._ContainersharedvataSerice.Containerno = this.CONTAINERNO;
         //this._vslsharedvataSerice.RtnosharedData = this.vslRtno;
         this._vslsharedvataSerice.vslPortsharedData = "MAA" //this.PORT;
 
         const jsonExport = { ContainerNo: containerno, vsl_rtno: this.vslRtno, vsl_port: "MAA", CMPCODE: "01", CITYCODE: "MAA" };
 
         this._dataService.Common(this.baseUrl, jsonExport)
             .subscribe((data: any) => {
                 if (data.Table[0].STATUS == 100) {
                     this.loaderService.display(false);
 
                 }
                 else {
                     this.loaderService.display(false);
                     this._toasterService.toast('error', 'Error', data.Table[0].statusText);
                     this.loaderService.display(false);
                 }
             });
     } */
    ExptSpContVslvw.prototype.ClpDownload = function (containerno) {
        var _this = this;
        this._toasterService.toast('info', 'processing', "Download Clp Excel format");
        this.loaderService.display(true);
        //  const jsonExport = { ContainerNo: containerno, vsl_rtno: this.vslRtno, vsl_port:this.vslport, CMPCODE: "01", CITYCODE: "MAA" };
        var jsonExport = { ContainerNo: containerno, vsl_rtno: this.vslRtno, vsl_port: this._vslsharedvataSerice.vslPortsharedData, CMPCODE: this._loginService.getLogin()[0].CMPCODE, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.getDownload("Export/ConvertHtmlToExcelDownload", jsonExport, { responseType: 'arraybuffer' })
            .subscribe(function (data) {
            _this._dataService.downloadFileByUrl(data);
            _this.loaderService.display(false);
        });
    };
    ExptSpContVslvw.prototype.back = function () {
        //this.result.emit(true);
        this._router.navigate(['/export/container/vessel-view']);
    };
    ExptSpContVslvw.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    ExptSpContVslvw = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-iu',
            template: __webpack_require__(/*! raw-loader!./exp_sp_container_vessel_vw.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_container_vessel_vw.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptSpContVslvw);
    return ExptSpContVslvw;
}());



/***/ }),

/***/ "./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.ts":
/*!*************************************************************************!*\
  !*** ./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.ts ***!
  \*************************************************************************/
/*! exports provided: ExptSpContainerIUFS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptSpContainerIUFS", function() { return ExptSpContainerIUFS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExptSpContainerIUFS = /** @class */ (function () {
    function ExptSpContainerIUFS(_router, _dataService, _auth, _toasterService, _loginService, _ContainerIUSharedDataService, _vslsharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._ContainerIUSharedDataService = _ContainerIUSharedDataService;
        this._vslsharedvataSerice = _vslsharedvataSerice;
        this.loaderService = loaderService;
        this.Add = "Add";
        this.vslrotation = "";
        this.vslport = "";
        this.vsldet = "";
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ContainerID = "0";
        this.Containerno = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.contstatus = "LCL/FCL";
        this.destport = "";
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
        this.containerClp = [];
        this.vessel = [];
        this.vslName = "";
        this.vsl_voyno = "";
        this.vslAgent = [];
        this.shpline = [];
        this.vslshpline = [];
        this.containerlist = [];
        this.Movetype = "";
        this.city = [];
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = "";
        this.AVAILABLE_CBM = "";
        this.AVAILABLE_NO_OF_PCS = "";
        this.AVAILABLE_NO_GR_WT = "";
        this.AVAILABLE_NO_NET_WT = "";
        this.id = "0";
        this.containerid = "0";
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
    ExptSpContainerIUFS.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(231, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
        var jsonExport = { SEARCHMODE: "0", VSLNAME: this.vslName, VSL_VOY: this.vsl_voyno, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.Common("Export/Export_Vessel_List", jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vessel = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('Warning', 'Warning', 'Data Loaded Successfully');
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFS.prototype.onfillAgent = function (vsldt) {
        var _this = this;
        if (vsldt != "") {
            var rtnos = "", ports = "";
            rtnos = vsldt.split('|')[0];
            ports = vsldt.split('|')[1];
            if (this.vslAgent.length > 0) {
                if (confirm("Are you sure ,Do you want to change the vessel ,While changing the vessel current data will be lost")) {
                    this.containerClp = [];
                }
                else {
                    return false;
                }
            }
            this.loaderService.display(true);
            var jsonExport = { vsl: rtnos, port: ports, CMPCOD: this._loginService.getLogin()[0].CMPCODE, CITYCODE: this._loginService.getLogin()[0].CITYCODE, CMPID: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_Fill', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.containerlist = data.Table;
                    //  this.vsldet = "VESSEL: " + this.containerlist[0].VSL_NAME + " - ROTATION: " + this.containerlist[0].VSL_RTNO + "  -  VOYAGE: " + this.containerlist[0].VSL_VOYNO + " -  ETD: " + this.containerlist[0].ETD;
                    _this.vslrotation = _this.containerlist[0].VSL_RTNO;
                    _this.vslport = _this.containerlist[0].PORT;
                    _this.vslAgent = data.Table1;
                    _this.city = data.Table2;
                    _this.shpline = data.Table3;
                    _this.VSLExptNoList = data.Table4;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this.childreset();
            this.masterReset();
            this.containerClp = [];
        }
    };
    ExptSpContainerIUFS.prototype.OnChangeExjob = function (exjobno) {
        var _this = this;
        if (exjobno != "") {
            this.loaderService.display(true);
            var jsonExport = { exptno: exjobno, userid: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_FillExptno', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].AVAI_PKGS == 0) {
                    _this._toasterService.toast('warning', 'warning', "Total Pkgs is used ");
                    _this.loaderService.display(false);
                    return false;
                }
                else {
                    _this.TOTAL_NOOFPKGS = data.Table[0].PKGS;
                    _this.TOTAL_CBM = data.Table[0].CBM;
                    _this.TOTAL_NO_OF_PCS = data.Table[0].PCS;
                    _this.TOTAL_NO_GR_WT = data.Table[0].GRWT;
                    _this.TOTAL_NO_NET_WT = data.Table[0].NETWT;
                    _this.THIS_CONTAINER_NOOFPKGS = data.Table[0].AVAI_PKGS;
                    _this.THIS_CONTAINER_CBM = data.Table[0].AVAI_CBM;
                    _this.THIS_CONTAINER_NO_OF_PCS = data.Table[0].AVAI_PCS;
                    _this.THIS_CONTAINER_NO_GR_WT = data.Table[0].AVAI_GRWT;
                    _this.THIS_CONTAINER_NO_NET_WT = data.Table[0].AVAI_NETWT;
                    _this.AVAILABLE_NOOFPKGS = data.Table[0].AVAI_PKGS;
                    _this.AVAILABLE_CBM = data.Table[0].AVAI_CBM;
                    _this.AVAILABLE_NO_OF_PCS = data.Table[0].AVAI_PCS;
                    _this.AVAILABLE_NO_GR_WT = data.Table[0].AVAI_GRWT;
                    _this.AVAILABLE_NO_NET_WT = data.Table[0].AVAI_NETWT;
                }
                _this.loaderService.display(false);
            });
        }
        else {
            this.childreset();
        }
    };
    ExptSpContainerIUFS.prototype.onfillshipline = function (Agtcode) {
        if (Agtcode != "") {
            this.vslshpline = this.shpline.filter(function (agent) { return agent.VSL_AGENT === Agtcode; });
            this.ExptNoList = this.VSLExptNoList.filter(function (agent) { return agent.EXPT_VSLAGENT === Agtcode; });
            this.AVAILABLE_NOOFPKGS = this.ExptNoList[0].AVAI_PKGS;
            this.AVAILABLE_CBM = this.ExptNoList[0].AVAI_CBM;
            this.AVAILABLE_NO_OF_PCS = this.ExptNoList[0].AVAI_PCS;
            this.AVAILABLE_NO_GR_WT = this.ExptNoList[0].AVAI_GRWT;
            this.AVAILABLE_NO_NET_WT = this.ExptNoList[0].AVAI_NETWT;
        }
    };
    ExptSpContainerIUFS.prototype.AddChild = function () {
        var _this = this;
        if (this.vessel == undefined || this.vessel == null || this.vessel == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == null || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.THIS_CONTAINER_NO == undefined || this.THIS_CONTAINER_NO == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO.length < 11) {
            this._toasterService.toast('error', 'Error', "Container no. length should be 11 characters");
            return false;
        }
        if (this.cntsize == undefined || this.cntsize == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.cntsize1 == undefined || this.cntsize1 == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.destport == undefined || this.destport == "") {
            this._toasterService.toast('error', 'Error', "Please select Destination POrt ");
            return false;
        }
        if (this.Movetype == undefined || this.Movetype == "") {
            this._toasterService.toast('error', 'Error', "Please select Move Type");
            return false;
        }
        if (this.SteAgtSealno == "") {
            this._toasterService.toast('error', 'Error', "Please enter Steamer agent No");
            return false;
        }
        if (this.CustSealNo == "") {
            this._toasterService.toast('error', 'Error', "Please enter Custome Seal No.");
            return false;
        }
        if (this.exptno == undefined || this.exptno == "") {
            this._toasterService.toast('error', 'Error', "Please select Ex-Job No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO_CLP_SEQ == undefined || this.THIS_CONTAINER_NO_CLP_SEQ == null || this.THIS_CONTAINER_NO_CLP_SEQ == "") { }
        else {
            if (this.THIS_CONTAINER_NO_CLP_SEQ.length < 2) {
                this._toasterService.toast('warning', 'warning', "CLP should be 2 digit no start from 01");
                return false;
            }
        }
        if (this.THIS_CONTAINER_NOOFPKGS == undefined || this.THIS_CONTAINER_NOOFPKGS == null || this.THIS_CONTAINER_NOOFPKGS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pkgs can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_CBM == undefined || this.THIS_CONTAINER_CBM == null || this.THIS_CONTAINER_CBM == "") {
            this._toasterService.toast('warning', 'warning', "CBM can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_OF_PCS == undefined || this.THIS_CONTAINER_NO_OF_PCS == null || this.THIS_CONTAINER_NO_OF_PCS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pcs  can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_GR_WT == undefined || this.THIS_CONTAINER_NO_GR_WT == null || this.THIS_CONTAINER_NO_GR_WT == "") {
            this._toasterService.toast('warning', 'warning', "GrWt can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_NET_WT == undefined || this.THIS_CONTAINER_NO_NET_WT == null || this.THIS_CONTAINER_NO_NET_WT == "") {
            this._toasterService.toast('warning', 'warning', "NetWt can`t be blank");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NOOFPKGS) > parseFloat(this.AVAILABLE_NOOFPKGS)) {
            this._toasterService.toast('warning', 'warning', "No of packages should be less than or equal to available no of pkgs");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_CBM) > parseFloat(this.AVAILABLE_CBM)) {
            this._toasterService.toast('warning', 'warning', "CBM should be less than or equal to available CBM");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_OF_PCS) > parseFloat(this.AVAILABLE_NO_OF_PCS)) {
            this._toasterService.toast('warning', 'warning', "No of Pcs should be less than or equal to available Pcs");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_GR_WT) > parseFloat(this.AVAILABLE_NO_GR_WT)) {
            this._toasterService.toast('warning', 'warning', "GrWt should be less than or equal to available GrWt");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_NET_WT) > parseFloat(this.AVAILABLE_NO_NET_WT)) {
            this._toasterService.toast('warning', 'warning', "NetWt should be less than or equal to available NetWt");
            return false;
        }
        this.loaderService.display(true); //ID,CONTAINERID
        var jsonExport = {
            ID: this.id, CONTAINERID: this.containerid, CONTAINERNO: this.THIS_CONTAINER_NO, CONTSIZE: this.cntsize, CONTSIZE1: this.cntsize1, EXPTNO: this.exptno, PKGS: this.THIS_CONTAINER_NOOFPKGS, CBM: this.THIS_CONTAINER_CBM, Pcs: this.THIS_CONTAINER_NO_OF_PCS, GrWt: this.THIS_CONTAINER_NO_GR_WT, NetWt: this.THIS_CONTAINER_NO_NET_WT, CLP_SEQ: this.THIS_CONTAINER_NO_CLP_SEQ, USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID, CONTSTATUS: this.contstatus, DESTPORT: this.destport, MOVETYPE: this.Movetype, STEAM_AGENTNO: this.SteAgtSealno, CUSTOM_AGENTNO: this.CustSealNo, FREIGHT: this.freight
        };
        this._dataService.Common('Export/Export_containerFSTmp_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.containerClp = data.Table;
                _this.childreset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFS.prototype.EditchildExptNo = function (Id) {
        this.Add = "Update";
        this.containerClpedt = this.containerClp.filter(function (pkid) { return pkid.ID === Id; });
        this.id = this.containerClpedt[0].ID;
        this.containerid = this.containerClpedt[0].CONTAINERID;
        this.THIS_CONTAINER_NO = this.containerClpedt[0].CONTAINERNO;
        this.cntsize = this.containerClpedt[0].CONT_SIZE;
        this.cntsize1 = this.containerClpedt[0].CONT_SIZE1;
        this.exptno = this.containerClpedt[0].EXPTNO;
        this.TOTAL_NOOFPKGS = this.containerClpedt[0].TOTAL_NOOFPKGS;
        this.TOTAL_CBM = this.containerClpedt[0].TOTAL_CBM;
        this.TOTAL_NO_OF_PCS = this.containerClpedt[0].TOTAL_NO_OF_PCS;
        this.TOTAL_NO_GR_WT = this.containerClpedt[0].TOTAL_NO_GR_WT;
        this.TOTAL_NO_NET_WT = this.containerClpedt[0].TOTAL_NO_NET_WT;
        this.THIS_CONTAINER_NOOFPKGS = this.containerClpedt[0].PKGS;
        this.THIS_CONTAINER_CBM = this.containerClpedt[0].CBM;
        this.THIS_CONTAINER_NO_OF_PCS = this.containerClpedt[0].PCS;
        this.THIS_CONTAINER_NO_GR_WT = this.containerClpedt[0].GRWT;
        this.THIS_CONTAINER_NO_NET_WT = this.containerClpedt[0].NETWT;
        this.THIS_CONTAINER_NO_CLP_SEQ = this.containerClpedt[0].CLP_SEQ;
        this.contstatus = this.containerClpedt[0].CONTAINERSTATUS;
        this.destport = this.containerClpedt[0].DESTPORT;
        this.Movetype = this.containerClpedt[0].MOVETYPE;
        this.SteAgtSealno = this.containerClpedt[0].AGTSEALNO;
        this.CustSealNo = this.containerClpedt[0].CUSTSEALNO;
        this.freight = this.containerClpedt[0].FREIGHT;
        this.AVAILABLE_NOOFPKGS = parseFloat(this.containerClpedt[0].AVAI_PKGS) + parseFloat(this.THIS_CONTAINER_NOOFPKGS);
        this.AVAILABLE_CBM = parseFloat(this.containerClpedt[0].AVAI_CBM) + parseFloat(this.THIS_CONTAINER_CBM);
        this.AVAILABLE_NO_OF_PCS = parseFloat(this.containerClpedt[0].AVAI_PCS) + parseFloat(this.THIS_CONTAINER_NO_OF_PCS);
        this.AVAILABLE_NO_GR_WT = parseFloat(this.containerClpedt[0].AVAI_GRWT) + parseFloat(this.THIS_CONTAINER_NO_GR_WT);
        this.AVAILABLE_NO_NET_WT = parseFloat(this.containerClpedt[0].AVAI_NETWT) + parseFloat(this.THIS_CONTAINER_NO_NET_WT);
    };
    ExptSpContainerIUFS.prototype.deletechildExptNo = function (ID, contid) {
        var _this = this;
        if (contid == 0) {
            this.loaderService.display(true);
            var jsondelete = { ID: ID, userid: this._loginService.getLogin()[0].CMPID, vguid: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Export/ContainerFS_DELETE", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                    _this.containerClp = data.Table;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this._toasterService.toast('info', 'info', "This container is already containerized please contact administrator !");
        }
    };
    ExptSpContainerIUFS.prototype.childreset = function () {
        this.Add = "Add";
        this.id = "0";
        this.containerid = "0";
        this.THIS_CONTAINER_NO = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.exptno = "";
        this.TOTAL_NOOFPKGS = "";
        this.TOTAL_CBM = "";
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = 0;
        this.AVAILABLE_CBM = 0;
        this.AVAILABLE_NO_OF_PCS = 0;
        this.AVAILABLE_NO_GR_WT = 0;
        this.AVAILABLE_NO_NET_WT = 0;
        this.contstatus = "LCL/FCL";
        this.Movetype = "";
        this.destport = "";
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
    };
    ExptSpContainerIUFS.prototype.finalSubmit = function () {
        var _this = this;
        if (this.Vsl == undefined || this.Vsl == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.Vslshpgline == undefined || this.Vslshpgline == "") {
            this._toasterService.toast('error', 'Error', "Please select shipping Line ");
            return false;
        }
        var rtnos = "", ports = "";
        rtnos = this.Vsl.split('|')[0];
        ports = this.Vsl.split('|')[1];
        this.loaderService.display(true);
        var jsonExport = {
            VSL_RTNO: rtnos, VSL_PORT: ports, VSL_AGNT: this.Vslagt, VSL_SHIPLINE: this.Vslshpgline, USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID
        };
        this._dataService.Common('Export/Export_containerFS_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.masterReset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFS.prototype.masterReset = function () {
        this.childreset();
        this.Vsl = undefined;
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ExptNoList = [];
        this.containerClp = [];
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
    };
    ExptSpContainerIUFS.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    ExptSpContainerIUFS = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-containerFS-iu',
            template: __webpack_require__(/*! raw-loader!./exp_sp_factoryStuff_ContainerIU_CLP.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptSpContainerIUFS);
    return ExptSpContainerIUFS;
}());



/***/ }),

/***/ "./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP_New.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP_New.ts ***!
  \*****************************************************************************/
/*! exports provided: ExptSpContainerIUFSNEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptSpContainerIUFSNEW", function() { return ExptSpContainerIUFSNEW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExptSpContainerIUFSNEW = /** @class */ (function () {
    function ExptSpContainerIUFSNEW(_router, _dataService, _auth, _toasterService, _loginService, _ContainerIUSharedDataService, _vslsharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._ContainerIUSharedDataService = _ContainerIUSharedDataService;
        this._vslsharedvataSerice = _vslsharedvataSerice;
        this.loaderService = loaderService;
        this.Add = "Add";
        this.vslrotation = "";
        this.vslport = "";
        this.vsldet = "";
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ContainerID = "0";
        this.Containerno = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.contstatus = "LCL/FCL";
        this.destport = "";
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
        this.containerClp = [];
        this.vessel = [];
        this.vslName = "";
        this.vsl_voyno = "";
        this.vslAgent = [];
        this.shpline = [];
        this.vslshpline = [];
        this.containerlist = [];
        this.Movetype = "";
        this.city = [];
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = "";
        this.AVAILABLE_CBM = "";
        this.AVAILABLE_NO_OF_PCS = "";
        this.AVAILABLE_NO_GR_WT = "";
        this.AVAILABLE_NO_NET_WT = "";
        this.id = "0";
        this.containerid = "0";
        this.finalsubmitmode = "INSERT";
        this.containernumber = "";
        this.vessellist = [];
        this.VSLNAME = "";
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
    ExptSpContainerIUFSNEW.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(231, '')
            .subscribe(function (data) { _this._loginService.checkVerify('Add', data); });
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
        var jsonExport = { SEARCHMODE: "0", VSLNAME: this.vslName, VSL_VOY: this.vsl_voyno, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.Common("Export/Export_Vessel_List", jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vessel = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('Warning', 'Warning', 'Data Loaded Successfully');
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFSNEW.prototype.onfillAgent = function (vsldt) {
        var _this = this;
        if (vsldt != "") {
            this.vessellist = this.vessel.filter(function (code) { return code.VALUEFILED === vsldt; });
            //console.log(this.codelistActt)
            this.VSLNAME = this.vessellist[0].VSLNAME;
            var rtnos = "", ports = "";
            rtnos = vsldt.split('|')[0];
            ports = vsldt.split('|')[1];
            if (this.vslAgent.length > 0) {
                if (confirm("Are you sure ,Do you want to change the vessel ,While changing the vessel current data will be lost")) {
                    this.containerClp = [];
                }
                else {
                    return false;
                }
            }
            this.loaderService.display(true);
            var jsonExport = { vsl: rtnos, port: ports, CMPCOD: this._loginService.getLogin()[0].CMPCODE, CITYCODE: this._loginService.getLogin()[0].CITYCODE, CMPID: this._loginService.getLogin()[0].CMPID };
            this._dataService.getData('Export/ContainerFS_Fill', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.containerlist = data.Table;
                    //  this.vsldet = "VESSEL: " + this.containerlist[0].VSL_NAME + " - ROTATION: " + this.containerlist[0].VSL_RTNO + "  -  VOYAGE: " + this.containerlist[0].VSL_VOYNO + " -  ETD: " + this.containerlist[0].ETD;
                    _this.vslrotation = _this.containerlist[0].VSL_RTNO;
                    _this.vslport = _this.containerlist[0].PORT;
                    _this.vslAgent = data.Table1;
                    _this.city = data.Table2;
                    _this.shpline = data.Table3;
                    _this.VSLExptNoList = data.Table4;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this.childreset();
            this.masterReset();
            this.containerClp = [];
        }
    };
    ExptSpContainerIUFSNEW.prototype.OnChangeExjob = function (exjobno) {
        var _this = this;
        if (exjobno != "") {
            this.loaderService.display(true);
            var jsonExport = { exptno: exjobno, userid: this._loginService.getLogin()[0].CMPID, containerno: this.THIS_CONTAINER_NO };
            this._dataService.getData('Export/ContainerFS_FillExptnoNew', jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == '103') {
                    alert(data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                    return false;
                }
                else if (data.Table[0].AVAI_PKGS == 0) {
                    _this._toasterService.toast('warning', 'warning', "Total Pkgs is used ");
                    _this.loaderService.display(false);
                    return false;
                }
                else {
                    _this.TOTAL_NOOFPKGS = data.Table[0].PKGS;
                    _this.TOTAL_CBM = data.Table[0].CBM;
                    _this.TOTAL_NO_OF_PCS = data.Table[0].PCS;
                    _this.TOTAL_NO_GR_WT = data.Table[0].GRWT;
                    _this.TOTAL_NO_NET_WT = data.Table[0].NETWT;
                    _this.THIS_CONTAINER_NOOFPKGS = data.Table[0].AVAI_PKGS;
                    _this.THIS_CONTAINER_CBM = data.Table[0].AVAI_CBM;
                    _this.THIS_CONTAINER_NO_OF_PCS = data.Table[0].AVAI_PCS;
                    _this.THIS_CONTAINER_NO_GR_WT = data.Table[0].AVAI_GRWT;
                    _this.THIS_CONTAINER_NO_NET_WT = data.Table[0].AVAI_NETWT;
                    _this.AVAILABLE_NOOFPKGS = data.Table[0].AVAI_PKGS;
                    _this.AVAILABLE_CBM = data.Table[0].AVAI_CBM;
                    _this.AVAILABLE_NO_OF_PCS = data.Table[0].AVAI_PCS;
                    _this.AVAILABLE_NO_GR_WT = data.Table[0].AVAI_GRWT;
                    _this.AVAILABLE_NO_NET_WT = data.Table[0].AVAI_NETWT;
                }
                _this.loaderService.display(false);
            });
        }
        else {
            this.childreset();
        }
    };
    ExptSpContainerIUFSNEW.prototype.onfillshipline = function (Agtcode) {
        if (Agtcode != "") {
            this.vslshpline = this.shpline.filter(function (agent) { return agent.VSL_AGENT === Agtcode; });
            this.ExptNoList = this.VSLExptNoList.filter(function (agent) { return agent.EXPT_VSLAGENT === Agtcode; });
            this.AVAILABLE_NOOFPKGS = this.ExptNoList[0].AVAI_PKGS;
            this.AVAILABLE_CBM = this.ExptNoList[0].AVAI_CBM;
            this.AVAILABLE_NO_OF_PCS = this.ExptNoList[0].AVAI_PCS;
            this.AVAILABLE_NO_GR_WT = this.ExptNoList[0].AVAI_GRWT;
            this.AVAILABLE_NO_NET_WT = this.ExptNoList[0].AVAI_NETWT;
        }
    };
    ExptSpContainerIUFSNEW.prototype.onchangecontainer = function (contno) {
        var _this = this;
        this.loaderService.display(true);
        var jsonExport = { vslno: this.Vsl.split("|")[0], vslagent: this.Vslagt,
            shipline: this.Vslshpgline,
            containerno: contno,
            userid: this._loginService.getLogin()[0].CMPID,
            vguid: this._loginService.getLogin()[0].GUID };
        this._dataService.getData('Export/EXP_SHIPMENT_PROGRESS_CONTAINERFS_GETDATA', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.containerClp = data.Table1;
                _this.cntsize = data.Table2[0].CONTAINERSIZE;
                _this.cntsize1 = data.Table2[0].CONTAINERSIZE1;
                _this.contstatus = data.Table2[0].CONTAINERSTATUS;
                _this.Movetype = data.Table2[0].MOVETYPE;
                _this.destport = data.Table2[0].DESTPORT;
                _this.finalsubmitmode = 'UPDATE';
                _this.loaderService.display(false);
            }
            else if (data.Table[0].STATUS == 103) {
                _this.finalsubmitmode = 'INSERT';
                _this.loaderService.display(false);
            }
            _this.containernumber = contno;
        });
    };
    ExptSpContainerIUFSNEW.prototype.AddChild = function () {
        var _this = this;
        if (this.vessel == undefined || this.vessel == null || this.vessel == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == null || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.THIS_CONTAINER_NO == undefined || this.THIS_CONTAINER_NO == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO.length < 11) {
            this._toasterService.toast('error', 'Error', "Container no. length should be 11 characters");
            return false;
        }
        if (this.cntsize == undefined || this.cntsize == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.cntsize1 == undefined || this.cntsize1 == "") {
            this._toasterService.toast('error', 'Error', "Please enter Container Size. ");
            return false;
        }
        if (this.destport == undefined || this.destport == "") {
            this._toasterService.toast('error', 'Error', "Please select Destination POrt ");
            return false;
        }
        if (this.Movetype == undefined || this.Movetype == "") {
            this._toasterService.toast('error', 'Error', "Please select Move Type");
            return false;
        }
        if (this.SteAgtSealno == "") {
            this._toasterService.toast('error', 'Error', "Please enter Steamer agent No");
            return false;
        }
        if (this.CustSealNo == "") {
            this._toasterService.toast('error', 'Error', "Please enter Custome Seal No.");
            return false;
        }
        if (this.exptno == undefined || this.exptno == "") {
            this._toasterService.toast('error', 'Error', "Please select Ex-Job No. ");
            return false;
        }
        if (this.THIS_CONTAINER_NO_CLP_SEQ == undefined || this.THIS_CONTAINER_NO_CLP_SEQ == null || this.THIS_CONTAINER_NO_CLP_SEQ == "") {
            this._toasterService.toast('error', 'Error', "Please enter clp sequence ");
            return false;
        }
        if (this.THIS_CONTAINER_NO_CLP_SEQ.length < 2) {
            this._toasterService.toast('warning', 'warning', "CLP should be 2 digit no start from 01");
            return false;
        }
        if (this.THIS_CONTAINER_NOOFPKGS == undefined || this.THIS_CONTAINER_NOOFPKGS == null || this.THIS_CONTAINER_NOOFPKGS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pkgs can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_CBM == undefined || this.THIS_CONTAINER_CBM == null || this.THIS_CONTAINER_CBM == "") {
            this._toasterService.toast('warning', 'warning', "CBM can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_OF_PCS == undefined || this.THIS_CONTAINER_NO_OF_PCS == null || this.THIS_CONTAINER_NO_OF_PCS == "") {
            this._toasterService.toast('warning', 'warning', "No of Pcs  can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_GR_WT == undefined || this.THIS_CONTAINER_NO_GR_WT == null || this.THIS_CONTAINER_NO_GR_WT == "") {
            this._toasterService.toast('warning', 'warning', "GrWt can`t be blank");
            return false;
        }
        if (this.THIS_CONTAINER_NO_NET_WT == undefined || this.THIS_CONTAINER_NO_NET_WT == null || this.THIS_CONTAINER_NO_NET_WT == "") {
            this._toasterService.toast('warning', 'warning', "NetWt can`t be blank");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NOOFPKGS) > parseFloat(this.AVAILABLE_NOOFPKGS)) {
            this._toasterService.toast('warning', 'warning', "No of packages should be less than or equal to available no of pkgs");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_CBM) > parseFloat(this.AVAILABLE_CBM)) {
            this._toasterService.toast('warning', 'warning', "CBM should be less than or equal to available CBM");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_OF_PCS) > parseFloat(this.AVAILABLE_NO_OF_PCS)) {
            this._toasterService.toast('warning', 'warning', "No of Pcs should be less than or equal to available Pcs");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_GR_WT) > parseFloat(this.AVAILABLE_NO_GR_WT)) {
            this._toasterService.toast('warning', 'warning', "GrWt should be less than or equal to available GrWt");
            return false;
        }
        if (parseFloat(this.THIS_CONTAINER_NO_NET_WT) > parseFloat(this.AVAILABLE_NO_NET_WT)) {
            this._toasterService.toast('warning', 'warning', "NetWt should be less than or equal to available NetWt");
            return false;
        }
        this.loaderService.display(true); //ID,CONTAINERID
        var jsonExport = {
            ID: this.id, CONTAINERID: this.containerid, CONTAINERNO: this.THIS_CONTAINER_NO, CONTSIZE: this.cntsize, CONTSIZE1: this.cntsize1, EXPTNO: this.exptno, PKGS: this.THIS_CONTAINER_NOOFPKGS, CBM: this.THIS_CONTAINER_CBM,
            Pcs: this.THIS_CONTAINER_NO_OF_PCS, GrWt: this.THIS_CONTAINER_NO_GR_WT, NetWt: this.THIS_CONTAINER_NO_NET_WT, CLP_SEQ: this.THIS_CONTAINER_NO_CLP_SEQ,
            USERID: this._loginService.getLogin()[0].CMPID, VGUID: this._loginService.getLogin()[0].GUID, CONTSTATUS: this.contstatus, DESTPORT: this.destport,
            MOVETYPE: this.Movetype, STEAM_AGENTNO: this.SteAgtSealno, CUSTOM_AGENTNO: this.CustSealNo, FREIGHT: this.freight
        };
        this._dataService.Common('Export/Export_containerFSTmp_IU_New', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                _this.containerClp = data.Table;
                _this.childreset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFSNEW.prototype.EditchildExptNo = function (Id) {
        this.Add = "Update";
        this.containerClpedt = this.containerClp.filter(function (pkid) { return pkid.ID === Id; });
        this.id = this.containerClpedt[0].ID;
        this.containerid = this.containerClpedt[0].CONTAINERID;
        this.THIS_CONTAINER_NO = this.containerClpedt[0].CONTAINERNO;
        this.cntsize = this.containerClpedt[0].CONT_SIZE;
        this.cntsize1 = this.containerClpedt[0].CONT_SIZE1;
        this.exptno = this.containerClpedt[0].EXPTNO;
        this.TOTAL_NOOFPKGS = this.containerClpedt[0].TOTAL_NOOFPKGS;
        this.TOTAL_CBM = this.containerClpedt[0].TOTAL_CBM;
        this.TOTAL_NO_OF_PCS = this.containerClpedt[0].TOTAL_NO_OF_PCS;
        this.TOTAL_NO_GR_WT = this.containerClpedt[0].TOTAL_NO_GR_WT;
        this.TOTAL_NO_NET_WT = this.containerClpedt[0].TOTAL_NO_NET_WT;
        this.THIS_CONTAINER_NOOFPKGS = this.containerClpedt[0].PKGS;
        this.THIS_CONTAINER_CBM = this.containerClpedt[0].CBM;
        this.THIS_CONTAINER_NO_OF_PCS = this.containerClpedt[0].PCS;
        this.THIS_CONTAINER_NO_GR_WT = this.containerClpedt[0].GRWT;
        this.THIS_CONTAINER_NO_NET_WT = this.containerClpedt[0].NETWT;
        this.THIS_CONTAINER_NO_CLP_SEQ = this.containerClpedt[0].CLP_SEQ;
        this.contstatus = this.containerClpedt[0].CONTAINERSTATUS;
        this.destport = this.containerClpedt[0].DESTPORT;
        this.Movetype = this.containerClpedt[0].MOVETYPE;
        this.SteAgtSealno = this.containerClpedt[0].AGTSEALNO;
        this.CustSealNo = this.containerClpedt[0].CUSTSEALNO;
        this.freight = this.containerClpedt[0].FREIGHT;
        this.AVAILABLE_NOOFPKGS = parseFloat(this.containerClpedt[0].AVAI_PKGS) + parseFloat(this.THIS_CONTAINER_NOOFPKGS);
        this.AVAILABLE_CBM = parseFloat(this.containerClpedt[0].AVAI_CBM) + parseFloat(this.THIS_CONTAINER_CBM);
        this.AVAILABLE_NO_OF_PCS = parseFloat(this.containerClpedt[0].AVAI_PCS) + parseFloat(this.THIS_CONTAINER_NO_OF_PCS);
        this.AVAILABLE_NO_GR_WT = parseFloat(this.containerClpedt[0].AVAI_GRWT) + parseFloat(this.THIS_CONTAINER_NO_GR_WT);
        this.AVAILABLE_NO_NET_WT = parseFloat(this.containerClpedt[0].AVAI_NETWT) + parseFloat(this.THIS_CONTAINER_NO_NET_WT);
    };
    ExptSpContainerIUFSNEW.prototype.deletechildExptNo = function (ID, contid) {
        var _this = this;
        if (contid == 0) {
            this.loaderService.display(true);
            var jsondelete = { ID: ID, userid: this._loginService.getLogin()[0].CMPID, vguid: this._loginService.getLogin()[0].GUID };
            this._dataService.getData("Export/ContainerFS_DELETE", jsondelete)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTEXT);
                    _this.containerClp = data.Table;
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this._toasterService.toast('info', 'info', "This container is already containerized please contact administrator !");
        }
    };
    ExptSpContainerIUFSNEW.prototype.childreset = function () {
        this.Add = "Add";
        this.id = "0";
        this.containerid = "0";
        this.THIS_CONTAINER_NO = "";
        this.cntsize = "20";
        this.cntsize1 = "F";
        this.exptno = "";
        this.TOTAL_NOOFPKGS = "";
        this.TOTAL_CBM = "";
        this.TOTAL_NO_OF_PCS = "";
        this.TOTAL_NO_GR_WT = "";
        this.TOTAL_NO_NET_WT = "";
        this.THIS_CONTAINER_NOOFPKGS = "";
        this.THIS_CONTAINER_CBM = "";
        this.THIS_CONTAINER_NO_OF_PCS = "";
        this.THIS_CONTAINER_NO_GR_WT = "";
        this.THIS_CONTAINER_NO_NET_WT = "";
        this.THIS_CONTAINER_NO_CLP_SEQ = "";
        this.AVAILABLE_NOOFPKGS = 0;
        this.AVAILABLE_CBM = 0;
        this.AVAILABLE_NO_OF_PCS = 0;
        this.AVAILABLE_NO_GR_WT = 0;
        this.AVAILABLE_NO_NET_WT = 0;
        this.contstatus = "LCL/FCL";
        this.Movetype = "";
        this.destport = "";
        this.SteAgtSealno = "";
        this.CustSealNo = "";
        this.freight = "PP";
    };
    ExptSpContainerIUFSNEW.prototype.finalSubmit = function () {
        var _this = this;
        if (this.Vsl == undefined || this.Vsl == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.Vslshpgline == undefined || this.Vslshpgline == "") {
            this._toasterService.toast('error', 'Error', "Please select shipping Line ");
            return false;
        }
        var rtnos = "", ports = "";
        rtnos = this.Vsl.split('|')[0];
        ports = this.Vsl.split('|')[1];
        this.loaderService.display(true);
        var jsonExport = {
            VSL_RTNO: rtnos, VSL_PORT: ports, VSL_AGNT: this.Vslagt, VSL_SHIPLINE: this.Vslshpgline, USERID: this._loginService.getLogin()[0].CMPID,
            VGUID: this._loginService.getLogin()[0].GUID
        };
        this._dataService.Common('Export/Export_containerFS_IU', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this._toasterService.toast('info', 'Success', data.Table[0].STATUSTXT);
                _this.masterReset();
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTXT);
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFSNEW.prototype.masterReset = function () {
        this.childreset();
        this.Vsl = undefined;
        this.Vslagt = "";
        this.Vslshpgline = "";
        this.ExptNoList = [];
        this.containerClp = [];
        var jsonPage = { userid: this._loginService.getLogin()[0].CMPID };
        this._dataService.getData("Export/ContainerFS_PAGELOAD", jsonPage)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
            }
        });
    };
    ExptSpContainerIUFSNEW.prototype.submit = function () {
        var _this = this;
        console.log(this.finalsubmitmode);
        if (this.Vsl == undefined || this.Vsl == "") {
            this._toasterService.toast('error', 'Error', "Please select Vessel ");
            return false;
        }
        if (this.Vslagt == undefined || this.Vslagt == "") {
            this._toasterService.toast('error', 'Error', "Please select Agent Name ");
            return false;
        }
        if (this.Vslshpgline == undefined || this.Vslshpgline == "") {
            this._toasterService.toast('error', 'Error', "Please select shipping Line ");
            return false;
        }
        var rtnos = "", ports = "";
        rtnos = this.Vsl.split('|')[0];
        ports = this.Vsl.split('|')[1];
        this.loaderService.display(true);
        var jsonExport = {
            VSL_RTNO: rtnos, VSL_PORT: ports, VSL_AGNT: this.Vslagt, VSL_SHIPLINE: this.Vslshpgline,
            CONTAINERNO: this.containernumber, CONTSIZE: this.cntsize, CONTSIZE1: this.cntsize1,
            CONTSTATUS: this.contstatus, DESTPORT: this.destport, MOVETYPE: this.Movetype,
            STEAM_AGENTNO: this.SteAgtSealno, CUSTOM_AGENTNO: this.CustSealNo, FREIGHT: this.freight,
            USERID: this._loginService.getLogin()[0].CMPID,
            VGUID: this._loginService.getLogin()[0].GUID,
            ACTION: this.finalsubmitmode
        };
        this._dataService.Common('Export/Export_containerFS_INSERTUPDATE', jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                alert(data.Table[0].STATUSTXT);
                _this.masterReset();
                _this.loaderService.display(false);
                return false;
            }
            else {
                _this._toasterService.toast('error', 'Error', data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpContainerIUFSNEW.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    ExptSpContainerIUFSNEW = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-containerFS-iu',
            template: __webpack_require__(/*! raw-loader!./exp_sp_factoryStuff_ContainerIU_CLP_New.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_factoryStuff_ContainerIU_CLP_New.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ContainerIUSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptSpContainerIUFSNEW);
    return ExptSpContainerIUFSNEW;
}());



/***/ }),

/***/ "./src/app/export/container/exp_sp_vessel_search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/export/container/exp_sp_vessel_search.component.ts ***!
  \********************************************************************/
/*! exports provided: ExptSpVesselSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExptSpVesselSearch", function() { return ExptSpVesselSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/authService */ "./src/app/shared/service/authService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-share-data.service */ "./src/app/export/export-share-data.service.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExptSpVesselSearch = /** @class */ (function () {
    function ExptSpVesselSearch(_router, _dataService, _auth, _toasterService, _loginService, _rtnosharedvataSerice, _vslportsharedvataSerice, loaderService) {
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this._rtnosharedvataSerice = _rtnosharedvataSerice;
        this._vslportsharedvataSerice = _vslportsharedvataSerice;
        this.loaderService = loaderService;
        this.baseUrl = 'Export/Export_Vessel_List';
        this.vslName = "";
        this.vsl_voyno = "";
        this.vslcmpName = "-1";
        this.vessel = [];
        this.vesselSearch = [];
        this.searchmode = "0";
        this.listdisable = true;
        this.vsldisable = false;
        this.buttonStatus = false;
        this.vsllist = "0";
    }
    ExptSpVesselSearch.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(231, '')
            .subscribe(function (data) { _this._loginService.checkVerify('View', data); });
        var jsonExport = { SEARCHMODE: "0", VSLNAME: this.vslName, VSL_VOY: this.vsl_voyno, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
        this._dataService.Common(this.baseUrl, jsonExport)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == 100) {
                _this.vessel = data.Table1;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast('Warning', 'Warning', 'Data Loaded Successfully');
                _this.loaderService.display(false);
            }
        });
    };
    ExptSpVesselSearch.prototype.onSearch = function () {
        var _this = this;
        var vslval;
        if (this.vsllist == "1") {
            if (this.vslName == undefined || this.vslName == null || this.vslName == "") {
                this._toasterService.toast('error', 'Error', "Please enter Vessel Name ");
                return false;
            }
            if (this.vsl_voyno == undefined || this.vsl_voyno == null || this.vsl_voyno == "") {
                this._toasterService.toast('error', 'Error', "Please enter Vessel Voyage ");
                return false;
            }
            vslval = this.vslName;
        }
        else {
            if (this.vslcmpName == undefined || this.vslcmpName == null || this.vslcmpName == "-1") {
                this._toasterService.toast('error', 'Error', "Please select Vessel Name ");
                return false;
            }
            vslval = this.vslcmpName;
        }
        this.loaderService.display(true);
        if (this.vsllist == "1") {
            var jsonExport = { SEARCHMODE: this.vsllist, VSLNAME: this.vslName, VSL_VOY: this.vsl_voyno, CITYCODE: this._loginService.getLogin()[0].CITYCODE };
            this._dataService.Common(this.baseUrl, jsonExport)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == 100) {
                    _this.vesselSearch = data.Table1;
                    _this.loaderService.display(false);
                    if (_this.vesselSearch.length == 1) {
                        _this._rtnosharedvataSerice.RtnosharedData = data.Table1[0].VSL_RTNO;
                        _this._vslportsharedvataSerice.vslPortsharedData = data.Table1[0].PORT;
                        _this._router.navigate(['/export/container/container-vessel-view']); //container/container-vessel-view
                    }
                }
                else {
                    _this._toasterService.toast('error', 'Error', 'No record found');
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            var rtnos = "", ports = "";
            rtnos = this.vslcmpName.split('|')[0];
            ports = this.vslcmpName.split('|')[1];
            this._rtnosharedvataSerice.RtnosharedData = rtnos;
            this._vslportsharedvataSerice.vslPortsharedData = ports;
            this._router.navigate(['/export/container/container-vessel-view']); //container/container-vessel-view
        }
    };
    ExptSpVesselSearch.prototype.ListOnclick = function (Rtno, Port) {
        this._rtnosharedvataSerice.RtnosharedData = Rtno;
        this._vslportsharedvataSerice.vslPortsharedData = Port;
        this._router.navigate(['/export/container/container-vessel-view']); //container/container-vessel-view
    };
    ExptSpVesselSearch.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    ExptSpVesselSearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-iu',
            template: __webpack_require__(/*! raw-loader!./exp_sp_vessel_search.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/container/exp_sp_vessel_search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _export_share_data_service__WEBPACK_IMPORTED_MODULE_6__["VesselSearchSharedDataService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], ExptSpVesselSearch);
    return ExptSpVesselSearch;
}());



/***/ })

}]);
//# sourceMappingURL=container-exp-sp-container-module.js.map