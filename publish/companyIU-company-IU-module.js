(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companyIU-company-IU-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/companyIU/company-IU.compnent.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/companyIU/company-IU.compnent.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>{{Header| uppercase}}</strong>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">  </div>\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-sm-new bgwhite\">    \r\n                              \r\n                <tr >\r\n                    <td class=\"col-form-span-heading   \" colspan=\"4\">\r\n                        Company Details\r\n                    </td>\r\n                </tr>\r\n                   <tr>\r\n                    \r\n                    <td><span class=\"col-form-span-label\"><b>Company Name</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td colspan=\"3\">  <input [(ngModel)]=\"CmpName\" type=\"text\"    class=\"form-control width300\" maxlength=\"40\" > </td> \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Address1</b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                    <td colspan=\"3\">  <input [(ngModel)]=\"CmpAddr1\" type=\"text\"    class=\"form-control width300\" maxlength=\"40\"   >   </td> \r\n                               \r\n                    </tr>\r\n                   \r\n                    <tr>                             \r\n                        <td><span class=\"col-form-span-label\"><b>Address2 </b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                        <td>  <input [(ngModel)]=\"CmpAddr2\" type=\"text\"    class=\"form-control width180\"   > </td>  \r\n                        <td><span class=\"col-form-span-label\"><b>Address3 </b> </span><span class=\"col-form-span-error\">*</span></td>         \r\n                        <td>  <input [(ngModel)]=\"CmpAddr3\" type=\"text\"    class=\"form-control width180\"   > </td>   \r\n                    </tr> \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                        <td>\r\n                            <select class=\"form-control width150\"  [(ngModel)]=\"city\">\r\n                                <option value=\"\">Please select</option>\r\n                                <option *ngFor=\"let d of Citylist\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                            </select>\r\n                        </td> \r\n                        \r\n                    </tr>\r\n                    <td colspan=\"4\">\r\n                        <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                            <tr>   \r\n                               \r\n                                    <td><span class=\"col-form-span-label\"><b>Active City</b> </span><span class=\"col-form-span-error\">*</span> </td>  \r\n                                    <td> \r\n                                        <ng-select [items]=\"Branchlist\"  class=\"form-control width350\"\r\n                                        bindLabel=\"CITYNAME\"\r\n                                        bindValue=\"CITYCODE\" \r\n                                        appendTo=\"body\"\r\n                                        multiple=\"true\"  [closeOnSelect]=\"false\"\r\n                                        [selectableGroup]=\"true\"\r\n                                        [(ngModel)]=\"branchcode\"\r\n                                        (change)=\"onchnage(branchcode)\"\r\n                                        >\r\n                                        \r\n                                        <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                                            <input  type=\"checkbox\" [(ngModel)]=\"item$.selected\"  /> \r\n                                            {{ item.CITYNAME}}\r\n                                         </ng-template>\r\n                                        </ng-select>\r\n                                    </td>     \r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n            \r\n                   <!--td  colspan=\"4\">                                \r\n                    <table class=\"table table-bordered table-sm-new bgwhite\" >\r\n                        <tr>   \r\n                           \r\n                                <td><span class=\"col-form-span-label\"><b>Active City</b> </span> </td>  \r\n                                <td> \r\n                                    <ng-select [items]=\"Branchlist\"  class=\"form-control width350\"\r\n                                    bindLabel=\"CITYNAME\"\r\n                                    bindValue=\"CITYCODE\" \r\n                                    appendTo=\"body\"\r\n                                    multiple=\"true\"  [closeOnSelect]=\"false\"\r\n                                    [selectableGroup]=\"true\"\r\n                                    [(ngModel)]=\"branchcode\"\r\n                                    (change)=\"onchnage(branchcode)\">\r\n                                    <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                                        <input  type=\"checkbox\" [(ngModel)]=\"item$.selected\"  /> \r\n                                        {{ item.CITYNAME}}\r\n                                     </ng-template>\r\n                                    </ng-select>\r\n                                </td>     \r\n                        </tr>\r\n                    </table-->\r\n                         \r\n                               \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Custom Licence No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"CmpCustLicNo\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>IATA Code</b></span> </td>\r\n                        <td><input [(ngModel)]=\"CmpIATACode\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr>     \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Telephone No(General)</b></span> </td>\r\n                        <td><input [(ngModel)]=\"CmpTelNo\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>Fax No.(General)</b></span> </td>\r\n                        <td><input [(ngModel)]=\"CmpFaxNo\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr>  \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Email(General)</b></span> </td>\r\n                        <td><input [(ngModel)]=\"CmpEmail\" type=\"text\" class=\"form-control width180\"  ></td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Regd Service Tax No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpregsertax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>Regd Tpt Tax No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpregtpttax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Regd Auxiliary  Service Tax No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpregauxsertax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>Regd ESIC</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpregesic\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Income Tax No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpincometax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>Tan No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmptanno\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Regd Storage Service Tax</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpregstosertax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>Regd Ch Service Tax</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Cmpchsertax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr> \r\n                  \r\n                     <td class=\"col-form-span-heading\" colspan=\"4\">\r\n                        Address Details\r\n                    </td>\r\n                    <!-- <tr>                    \r\n                        <td colspan=\"4\"   style=\"background-color: #1b8eb7;cursor: pointer;\" ><span class=\"col-form-span-label\"><b style=\" color: white; \">Address Details</b></span></td>\r\n                    </tr> -->\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Branch Address1</b></span><span class=\"col-form-span-error\">*</span> </td>\r\n                        <td>  <input [(ngModel)]=\"BrAddr1\" type=\"text\"    class=\"form-control width180\" >   </td> \r\n                      \r\n                           <td><span class=\"col-form-span-label\"><b>Branch Address2</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                           <td><input [(ngModel)]=\"BrAddr2\" type=\"text\" class=\"form-control width180\"></td>\r\n                       </tr>\r\n                       <tr>\r\n                           <td><span class=\"col-form-span-label\"><b>Branch Address3</b></span><span class=\"col-form-span-error\">*</span></td>\r\n                           <td><input [(ngModel)]=\"BrAddr3\" type=\"text\" class=\"form-control width180\"></td>\r\n                      \r\n                           <td><span class=\"col-form-span-label\"><b>City</b> </span><span class=\"col-form-span-error\">*</span></td>        \r\n                           <td>\r\n                               <select class=\"form-control width150\"  [(ngModel)]=\"city2\">\r\n                                   <option value=\"\">Please select</option>\r\n                                   <option *ngFor=\"let d of Citylist1\" value={{d.DATAVALUEFIELD}}>{{d.DATATEXTFIELD}}</option>\r\n                               </select>\r\n                           </td> \r\n                           \r\n                    </tr>\r\n                                                    \r\n                  \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Telephone No.(General)</b></span></td>\r\n                        <td><input [(ngModel)]=\"BrTelNo\" type=\"text\" class=\"form-control width180\"></td>\r\n                   \r\n                        <td><span class=\"col-form-span-label\"><b>Fax No.(General)</b></span></td>\r\n                        <td><input [(ngModel)]=\"BrFaxNo\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Email(General)</b></span></td>\r\n                        <td><input [(ngModel)]=\"BrEmail\" type=\"text\" class=\"form-control width180\"   (change)=\"onChange($event.target.value)\"></td>\r\n                        <td>\r\n                            <span class=\"col-form-span-label\"><b>Company Image</b> </span>\r\n                           \r\n                        </td>         \r\n                    <td colspan=\"3\">  \r\n                        <input #fileUpload type=\"file\" name=\"CmpbrImage\" accept=\".png, .jpg, .jpeg\" (change)=\"onFileChanged1($event)\" class=\"form-control width180\"> \r\n                         <!-- <input #fileUpload type=\"file\" class=\"col-form-span-label\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple accept=\".pdf\" /> -->\r\n                    </td> \r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Company Url</b></span> </td>\r\n                        <td><input [(ngModel)]=\"BrCmpurl\" type=\"text\" class=\"form-control width180\"></td>\r\n                                          \r\n                    </tr> \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>Company Tax</b></span> </td>\r\n                        <td><input [(ngModel)]=\"BrCmpTax\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>GST No.</b></span> </td>\r\n                        <td><input [(ngModel)]=\"BrGSTNo\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr>   \r\n                    <tr>\r\n                        <td><span class=\"col-form-span-label\"><b>ACSTMNT From</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Bracstmntfrom\" type=\"text\" class=\"form-control width180\"></td>\r\n                    \r\n                        <td><span class=\"col-form-span-label\"><b>ACSTMNT FromEmail</b></span> </td>\r\n                        <td><input [(ngModel)]=\"Bracstmntfromemail\" type=\"text\" class=\"form-control width180\"></td>\r\n                    </tr>   \r\n                    <tr>\r\n                             <td >\r\n                            <span class=\"col-form-span-label\" ><b>IsHblissue</b>  </span>   \r\n                           </td>\r\n                           <td >\r\n                            <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"isHblissu\" class=\"form-control width20\"   /> </span>         \r\n                           </td>\r\n                           <td >\r\n                            <span class=\"col-form-span-label\" ><b>Ishawblissw</b>  </span>    \r\n                           </td>\r\n                           <td >\r\n                            <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"ishawblissw\"   class=\"form-control width20\" /> </span>    \r\n                           </td>\r\n                        \r\n                           </tr>\r\n                           <tr>\r\n                            <td  >\r\n                                <span class=\"col-form-span-label\" ><b>IsActive</b>  </span>   \r\n                            </td> \r\n                            <td>\r\n                                <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"isactive\"   class=\"form-control width20\" /> </span>    \r\n                             </td> \r\n                            \r\n                                <td >\r\n                                    <span class=\"col-form-span-label\" ><b>IsMore</b>  </span>    \r\n                                </td>\r\n                                <td >\r\n                                    <span class=\"col-form-span-label\" > <input type=\"checkbox\" [(ngModel)]=\"ismore\"   class=\"form-control width20\" /> </span>    \r\n                                 </td>  \r\n                           </tr>\r\n                    \r\n                   \r\n                  \r\n                                          \r\n                    <tr>\r\n                        <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Addcildrcrd()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{txtchild}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"Resetcildrcrd();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <div class=\"row xyscroll\" >\r\n                                <table class=\"table table-responsive-sm table-bordered\"> \r\n                                    <thead>\r\n                                        <tr class=\"title-head formheading\">\r\n                                            <th  class=\"col-form-span-label\" ></th>\r\n                                            <th class=\"col-form-span-label\">Address</th>\r\n                                            <!--th  class=\"col-form-span-label\">Address2</th>\r\n                                            <th  class=\"col-form-span-label\">Address3</th>                                                     \r\n                                            <th  class=\"col-form-span-label\">City</th-->    \r\n                                            <th  class=\"col-form-span-label\">Phone</th>    \r\n                                            <th  class=\"col-form-span-label\">Fax</th>    \r\n                                            <th  class=\"col-form-span-label\">Email</th>    \r\n                                            <!--th  class=\"col-form-span-label\">Company Image</th>  \r\n                                            <th  class=\"col-form-span-label\">Company Url</th-->  \r\n                                            <th  class=\"col-form-span-label\">Company Tax</th>  \r\n                                            <th class=\"col-form-span-label\">Gst No</th> \r\n                                            <!--th  class=\"col-form-span-label\">ACSTMNT From</th> \r\n                                            <th  class=\"col-form-span-label\">ACSTMNT FromEmail</th--> \r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody   *ngIf=\"addrlist.length>0\">\r\n                                        <tr *ngFor=\"let obj of addrlist\">\r\n                                            <td class=\"centerlabel\">\r\n                                                <i class=\"fa fa-pencil\" (click)=\"Editchildrecd(obj.ID)\" ></i>\r\n                                                &nbsp;\r\n                                                <i class=\"fa fa-trash\" (click)=\"deletechildrecd(obj.ID)\"></i>\r\n                                            </td>\r\n                                           <td><span class=\"col-form-span-label\"  [innerHtml]=\"obj.BRANCHADDRESS\"> </span></td>\r\n                                            <!--td><span class=\"col-form-span-label\">{{obj.BRADDR1}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRADDR2}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRADDR3}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.CITYID}}</span></td-->\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRPHONE}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRFAX}}</span></td>\r\n\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BREMAIL}}</span></td>\r\n                                            <!--td><span class=\"col-form-span-label\">{{obj.BRCMPIMAGE}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRCMPURL}}</span></td-->\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRTAX}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRGSTNO}}</span></td>\r\n                                            <!--td><span class=\"col-form-span-label\">{{obj.BRCSTMNT}}</span></td>\r\n                                            <td><span class=\"col-form-span-label\">{{obj.BRCSTMNTEMAIL}}</span></td-->\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </td>\r\n                    </tr> \r\n                    <tr>\r\n                        <td colspan=\"4\"  class=\"centerlabel\">                                \r\n                            <button class=\"btn btn-sm btn-success\" type=\"submit\" (click)=\"Add_Main()\"> <span class=\"col-form-span-label\"><i class=\"fa fa-dot-circle-o\" ></i> {{text}}</span></button>\r\n                            <button class=\"btn btn-sm btn-danger\" type=\"reset\"> <span class=\"col-form-span-label\" (click)=\"RestMain();\"><i class=\"fa fa-ban\"></i> Reset</span></button>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-sm-2\">  </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/companyIU/company-search.componet.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/companyIU/company-search.componet.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\t\t\r\n\t\t<div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header formheading\">\r\n                    <strong>COMPANY LIST</strong>\r\n                </div>\r\n            </div>\r\n\t\t</div>\t\t\r\n\t</div>\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-10\">\r\n\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">   \r\n\t\t\t<tr>\r\n\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t<table class=\"table table-bordered table-sm-new bgwhite\">\r\n\t\t\t\t\r\n\t\t\t\t\t<!--tr class=\"bgwhite\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"col-form-span-label \">Company Name</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input [(ngModel)]=\"CMPNAME1\" type=\"text\"  class=\"form-control width150\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\" class=\"centerlabel\" >\r\n\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success\" type=\"submit\"   (click)=\"serchList()\"><span class=\"col-form-span-label\"><i class=\"fa fa-search\"></i> Search</span></button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr-->\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t<!---/*style=\"max-height:300px\"-->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<table class=\"table table-sm-new bgwhite\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr class=\"col-form-span-heading\" style=\"white-space:nowrap;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">COMPANY NAME</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">PHONE NO</th>\r\n                                            <th class=\"col-form-span-label\">FAX NO</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">EMAIL</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-form-span-label\">ACTIVE CITY</th>\r\n                                            \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t </thead>\r\n\t\t\t\t\t\t\t\t\t<tbody class=\"bgwhite\">\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let obj of Reqlist\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"col-form-span-label anchor-link\" (click)=\"ListOnclick(obj.CMPCODE)\" style=\"cursor:pointer;\">{{obj.CMPNAME}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CMPPHONE}}</td>\r\n                                            <td class=\"col-form-span-label\">{{obj.CMPFAX}}</td> \r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CMPEMAIL}}</td> \r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-form-span-label\">{{obj.CMPACTIVECITY}}</td>                                             \r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\r\n\t\t              \r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n</div>\r\n</div>\r\n</div>                "

/***/ }),

/***/ "./src/app/admin/companyIU/company-IU-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/companyIU/company-IU-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: companyIURoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyIURoutingModule", function() { return companyIURoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_IU_compnent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-IU.compnent */ "./src/app/admin/companyIU/company-IU.compnent.ts");
/* harmony import */ var _company_search_componet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-search.componet */ "./src/app/admin/companyIU/company-search.componet.ts");
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
            title: 'Company'
        },
        children: [
            { path: 'Company/:Id', component: _company_IU_compnent__WEBPACK_IMPORTED_MODULE_2__["companyIU"], data: { title: 'Company Creation' }, pathMatch: 'ful' },
            { path: 'Companysearch', component: _company_search_componet__WEBPACK_IMPORTED_MODULE_3__["companySearch"], data: { title: 'Search' }, pathMatch: 'ful' },
        ]
    }
];
var companyIURoutingModule = /** @class */ (function () {
    function companyIURoutingModule() {
    }
    companyIURoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], companyIURoutingModule);
    return companyIURoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/companyIU/company-IU.compnent.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/companyIU/company-IU.compnent.ts ***!
  \********************************************************/
/*! exports provided: companyIU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyIU", function() { return companyIU; });
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








var companyIU = /** @class */ (function () {
    function companyIU(_dataService, _toasterService, loaderService, _router, http, httpClient, _activatedRoute, _loginService, _configuration) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this.httpClient = httpClient;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._configuration = _configuration;
        this.uploadResult = [];
        this.fileData = null;
        this.selectedFileNames = [];
        this.CmpCode = "";
        this.CmpName = "";
        this.CmpAddr1 = "";
        this.CmpAddr2 = "";
        this.CmpAddr3 = "";
        this.CmpCustLicNo = "";
        this.CmpIATACode = "";
        this.CmpTelNo = "";
        this.CmpFaxNo = "";
        this.CmpEmail = "";
        this.Cmpregsertax = "";
        this.Cmpregtpttax = "";
        this.Cmpregauxsertax = "";
        this.Cmpregesic = "";
        this.Cmpincometax = "";
        this.Cmptanno = "";
        this.Cmpregstosertax = "";
        this.Cmpchsertax = "";
        this.city = "";
        this.city2 = "";
        this.BrAddr1 = "";
        this.BrAddr2 = "";
        this.BrAddr3 = "";
        this.Bracstmntfrom = "";
        this.Bracstmntfromemail = "";
        this.BrCmpurl = "";
        this.City = "";
        this.BrCmpTax = "";
        this.BrGSTNo = "";
        this.BrTelNo = "";
        this.BrFaxNo = "";
        this.BrEmail = "";
        this.ACTIVECITY = [];
        this.ACTIVECITYCODE = [];
        this.AUTHORITY = [];
        this.Citylist = [];
        this.addrlist = [];
        this.CityCode = [];
        this.Addresscity = "";
        this.Citylist1 = [];
        this.TmpcitybranchObject = {};
        this.branchArr = [];
        this.pk_cmpaddressId = "0";
        this.cmp_id = "0";
        this.queryParamsReqType = "";
        this.queryParamsUserId = "";
        this.validEmail = false;
        ///exp_city :any=[];imp_city :any=[];sorc_city: any=[];
        this.isHblissu = false;
        this.ishawblissw = false;
        this.isactive = false;
        this.ismore = false;
        this.text = "Submit";
        this.txtchild = "Add";
        this.count1 = 0;
        this.Header = "Company Details";
    }
    companyIU.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.verifyRights('1', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Add', data);
        });
        this._activatedRoute.params.subscribe(function (params) {
            _this.queryParamsUserId = params["Id"];
        });
        var jsoncmp = { MakerID: this._loginService.getLogin()[0].CMPID };
        this._dataService.Common("Admin/Companypageload", jsoncmp)
            .subscribe(function (data) {
        });
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist = data.Table;
        });
        this._dataService.getAll("Common/GetFillcity")
            .subscribe(function (data) {
            _this.Citylist1 = data.Table;
        });
        this._dataService.getAll("Admin/Fill_Usercity")
            .subscribe(function (data) {
            _this.Branchlist = data.Table;
            ///this.loaderService.display(false);
        });
        if (this.queryParamsUserId != ' ') {
            this.editpopulate();
            this.text = 'Update';
        }
        /*  if(this.queryParamsUserId ==' ')
          {
              this._dataService.getData("Company/Fill_CompanyBranch_DetailsPageLoad",'' )
              .subscribe((data: any) => {
                  this.addrlist=data.Table
              })
              
          } */
    };
    companyIU.prototype.editpopulate = function () {
        var _this = this;
        var jsonmaster = { _CmpCode: this.queryParamsUserId };
        this._dataService.getData("Admin/Fill_Company_Details", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                _this.cmp_id = data.Table[0].ID;
                _this.CmpName = data.Table[0].cmpname;
                _this.CmpAddr1 = data.Table[0].cmpaddr1;
                _this.CmpAddr2 = data.Table[0].cmpaddr2;
                _this.CmpAddr3 = data.Table[0].cmpaddr3;
                _this.city = data.Table[0].cmpcity;
                //this.ACTIVECITY =    data.Table[0].cmpactivecity    ; 
                // this.ACTIVECITYCODE=data.Table[0].cmpactivecitycode; 
                _this.CmpCustLicNo = data.Table[0].cmpcustlicno;
                _this.CmpIATACode = data.Table[0].cmpiatacode;
                _this.CmpTelNo = data.Table[0].cmptelno;
                _this.CmpFaxNo = data.Table[0].cmpfaxno;
                _this.CmpEmail = data.Table[0].cmpemail;
                _this.Cmpregsertax = data.Table[0].cmprgdsrvtax;
                _this.Cmpregtpttax = data.Table[0].cmprgdtpttax;
                _this.Cmpregauxsertax = data.Table[0].cmprgdauxtax;
                _this.Cmpregesic = data.Table[0].cmprgdesic;
                _this.Cmpincometax = data.Table[0].cmprgdinctaxno;
                _this.Cmptanno = data.Table[0].cmptanno;
                _this.Cmpregstosertax = data.Table[0].cmprgdstrtax;
                _this.Cmpchsertax = data.Table[0].cmprgdchsrvtax;
                if (data.Table[0].cmpactivecity != '') {
                    data.Table[0].cmpactivecity.split(',').forEach(function (item, index) {
                        _this.branchArr.push(item.trim());
                    });
                }
                _this.branchcode = _this.branchArr;
                _this.loaderService.display(false);
                _this.addrlist = data.Table1;
                //this.citybranchlict=data.Table2;
                _this.loaderService.display(false);
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    companyIU.prototype.Addcildrcrd = function () {
        var _this = this;
        if (this.BrAddr1 == "" || this.BrAddr1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Branch Address1 cannot be blank!');
            return false;
        }
        ///if(this.BrAddr1.normalize()==""){
        /// this._toasterService.toast('warning', 'warning', 'Branch Address1 could not be blank !');
        /// return false;
        //}
        if (this.BrAddr2 == "" || this.BrAddr2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Branch Address2 could not be blank !');
            return false;
        }
        if (this.BrAddr3 == "" || this.BrAddr3 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Branch Address3 could not be blank !');
            return false;
        }
        if (this.city2 == "") {
            this._toasterService.toast('warning', 'warning', 'Please select Branch City  !');
            return false;
        }
        // this.onChange(this.BrEmail)
        this.uploadFiles();
        this.loaderService.display(true);
        var jsonmasterchild = { pk_cmpaddressid: this.pk_cmpaddressId, braddrs1: this.BrAddr1,
            braddrs2: this.BrAddr2, braddrs3: this.BrAddr3, fk_cityid: this.city2, brphoneno: this.BrTelNo,
            brfaxno: this.BrFaxNo, bremail: this.BrEmail, brcmpImage: this.CmpbrImage, brcmpurl: this.BrCmpurl,
            brtax: this.BrCmpTax, brgstno: this.BrGSTNo, bracstmntfrom: this.Bracstmntfrom,
            bracstmntfrmemail: this.Bracstmntfromemail,
            brishblissu: (this.isHblissu == true) ? "Y" : "",
            brishawbissw: (this.ishawblissw == true) ? "Y" : "",
            brisactive: (this.isactive == true) ? "Y" : "",
            brismore: (this.ismore == true) ? "Y" : "",
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            MakerID: this._loginService.getLogin()[0].CMPID,
            vguid: this._loginService.getLogin()[0].GUID,
            cmpid: this.cmp_id
        };
        if (this.queryParamsUserId != ' ') {
            this._dataService.Common("Admin/Company_Address_UPDATE", jsonmasterchild)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.addrlist = data.Table1;
                    _this.loaderService.display(false);
                    _this.Resetcildrcrd();
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            });
        }
        else {
            this._dataService.Common("Admin/Company_Address_IU", jsonmasterchild)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.addrlist = data.Table1;
                    _this.loaderService.display(false);
                    _this.Resetcildrcrd();
                    _this.txtchild = "Add";
                }
                else {
                    _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                    _this.loaderService.display(false);
                }
            });
        }
    };
    companyIU.prototype.Resetcildrcrd = function () {
        this.pk_cmpaddressId = "";
        this.BrAddr1 = "";
        this.BrAddr2 = "";
        this.BrAddr3 = "";
        this.BrTelNo = "";
        this.BrFaxNo = "";
        this.BrEmail = "";
        this.BrGSTNo = "";
        this.BrCmpTax = "";
        this.city2 = "";
        this.Bracstmntfrom = "";
        this.Bracstmntfromemail = "";
        this.isHblissu = false;
        this.ishawblissw = false;
        this.ismore = false;
        this.isactive = false;
        this.CmpbrImage = "";
        this.BrCmpurl = "";
    };
    companyIU.prototype.Editchildrecd = function (id) {
        var filterData = this.addrlist.filter(function (filter) { return filter.ID == id; })[0];
        this.pk_cmpaddressId = filterData.ID;
        this.BrAddr1 = filterData.BRADDR1;
        this.BrAddr2 = filterData.BRADDR2;
        this.BrAddr3 = filterData.BRADDR3;
        // this.City=filterData.CITYID;
        this.city2 = filterData.CITYID;
        this.BrTelNo = filterData.BRPHONE;
        this.BrFaxNo = filterData.BRFAX;
        this.BrEmail = filterData.BREMAIL;
        this.CmpbrImage = filterData.BRCMPIMAGE;
        this.BrCmpurl = filterData.BRCMPURL;
        this.BrCmpTax = filterData.BRTAX;
        this.BrGSTNo = filterData.BRGSTNO;
        this.Bracstmntfrom = filterData.BRCSTMNT;
        this.Bracstmntfromemail = filterData.BRCSTMNTEMAIL;
        // this.isHblissu=filterData.BRISBLISSU;
        this.isHblissu = (filterData.BRISBLISSU == 'Y') ? true : false;
        ;
        //this.ishawblissw=filterData.BRHAWBLIW; 
        this.ishawblissw = (filterData.BRHAWBLIW == 'Y') ? true : false;
        //this.isactive=filterData.BRISACTIVE;
        this.isactive = (filterData.BRISACTIVE == 'Y') ? true : false;
        ;
        //this.ismore=filterData.BRISMORE;
        this.ismore = (filterData.BRISMORE == 'Y') ? true : false;
        this.txtchild = "Update";
    };
    companyIU.prototype.deletechildrecd = function (id) {
        var _this = this;
        if (confirm('Are you sure want to delete the record ?')) {
            this.loaderService.display(true);
            var jsonmaster = { id: id, guid: this._loginService.getLogin()[0].GUID, makerid: this._loginService.getLogin()[0].CMPID, ID: this.queryParamsUserId };
            this._dataService.getData("Admin/Company_Address_deleteNew", jsonmaster)
                .subscribe(function (data) {
                if (data.Table[0].STATUS == "100") {
                    _this.addrlist = data.Table1;
                    _this._toasterService.toast('info', 'Complete', data.Table[0].STA_MSG);
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
    };
    companyIU.prototype.onChange = function (emialid) {
        if (this._dataService.emailvalidation(emialid) == false) {
            this._toasterService.toast('warning', 'warning', 'Enter Invalid E-mail !');
            return false;
        }
    };
    companyIU.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
        this.filesToUpload = event.target.files[0];
        // file.append('myFile', this.selectedFile, this.selectedFile.name);
        console.log(file);
    };
    companyIU.prototype.Add_Main = function () {
        var _this = this;
        if (this.CmpName == "" || this.CmpName == undefined) {
            this._toasterService.toast('warning', 'warning', 'Company name could not be blank !');
            return false;
        }
        if (this.CmpAddr1 == "" || this.CmpAddr1 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Company Address1 could not be blank !');
            return false;
        }
        if (this.CmpAddr2 == "" || this.CmpAddr2 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Company Address2 could not be blank !');
            return false;
        }
        if (this.CmpAddr3 == "" || this.CmpAddr3 == undefined) {
            this._toasterService.toast('warning', 'warning', 'Company Address3 could not be blank !');
            return false;
        }
        if (this.city == "") {
            this._toasterService.toast('warning', 'warning', 'Please select Company City  !');
            return false;
        }
        if (this.queryParamsUserId == ' ') {
            if (this.count1 == 0) {
                this._toasterService.toast('warning', 'warning', 'Please select at least one active City  !');
                return false;
            }
        }
        //      let isSelected: any = this.Branchlist.filter((item) => item.checked == true);
        //      ///if(branchcode != null && branchcode.length > 0) {
        //         if(isSelected.length== 0) {
        //             this._toasterService.toast('warning', 'warning', 'Please select atleast one Active City   !');            
        //             return false;
        //    }else
        //       {
        //         //  this._toasterService.toast('warning', 'warning', 'Please select atleast one Active City   !');            
        //         // return false;
        //      }
        /////if(this.queryParamsUserId ==' ')
        ///{
        this.branchcode.forEach(function (item, index) {
            _this.ACTIVECITY = _this.ACTIVECITY + item + ",";
            _this.listcnt = _this.Branchlist.filter(function (cntrylist) { return cntrylist.CITYCODE == item; });
            _this.ACTIVECITYCODE = _this.ACTIVECITYCODE + _this.listcnt[0].CITYCODE1 + ",";
            var autcode = item + '-' + _this.listcnt[0].CITYCODE1 + '-555,';
            _this.AUTHORITY = _this.AUTHORITY + autcode;
        });
        //// }
        /* if(this.AUTHORITY== ""){
            this._toasterService.toast('warning', 'warning', 'Please select atleast one Active City !' );
            return false;
        }*/
        this.loaderService.display(true);
        var jsonmaster = {
            pk_cmpId: this.cmp_id,
            cmpname: this.CmpName.replace("'", "`"),
            cmpaddr1: this.CmpAddr1,
            cmpaddr2: this.CmpAddr2.replace("'", "`"),
            cmpaddr3: this.CmpAddr3,
            cmpcity: this.city,
            cmpactivecity: this.ACTIVECITY,
            cmpactivecitycode: this.ACTIVECITYCODE,
            cmpcustlicno: this.CmpCustLicNo.replace("'", "`"),
            cmpiatacode: this.CmpIATACode.replace("'", "`"),
            cmptelno: this.CmpTelNo,
            cmpfaxno: this.CmpFaxNo,
            cmpemail: this.CmpEmail,
            cmprgdsrvtax: this.Cmpregsertax,
            cmprgdtpttax: this.Cmpregtpttax.replace("'", "`"),
            cmprgdauxtax: this.Cmpregauxsertax.replace("'", "`"),
            cmprgdesic: this.Cmpregesic.replace("'", "`"),
            cmprgdinctaxno: this.Cmpincometax,
            cmptanno: this.Cmptanno,
            cmprgdstrtax: this.Cmpregstosertax,
            cmprgdchsrvtax: this.Cmpchsertax,
            MakerIP: this._loginService.getLogin()[0].MAKERIP,
            MakerID: this._loginService.getLogin()[0].CMPID,
            RequestMode: this.queryParamsReqType,
            VGUID: this._loginService.getLogin()[0].GUID
        };
        this._dataService.Common("Admin/Company_Master_IU", jsonmaster)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                if (_this.queryParamsUserId == ' ') {
                    {
                        _this._toasterService.toast('success', 'success', 'Company  saved successfully !');
                    }
                    _this.loaderService.display(false);
                    _this.RestMain();
                }
                else if (_this.queryParamsUserId != ' ') {
                    {
                        _this._toasterService.toast('success', 'success', 'Company updated successfully !');
                    }
                    _this.loaderService.display(false);
                    _this.RestMain();
                }
            }
            else {
                _this._toasterService.toast("warning", "warning", data.Table[0].STATUSTEXT);
                _this.loaderService.display(false);
            }
        });
    };
    //  onItemSelect(item:any){
    //     console.log(item);
    //      console.log(this.branchcode);
    //      this.count1=this.branchcode.length;
    //  }
    companyIU.prototype.RestMain = function () {
        this.Resetcildrcrd();
        this.CmpName = '';
        this.CmpAddr1 = '';
        this.CmpAddr2 = '';
        this.CmpAddr3 = '';
        this.branchcode = [];
        this.CmpTelNo = '';
        this.CmpFaxNo = '';
        this.CmpEmail = '';
        this.CityCode = '';
        this.CmpCustLicNo = '';
        this.CmpIATACode = '';
        this.Cmpchsertax = '';
        this.Cmpincometax = '';
        this.Cmpregesic = '';
        this.Cmpregsertax = '';
        this.Cmpregstosertax = '';
        this.Cmpregtpttax = '';
        this.Cmpregauxsertax = '';
        this.Cmptanno = '';
        this.text = "Submit";
        this.city = '';
        this.addrlist = [];
        this.branchcode = [];
        this._router.navigate(['/admin/company/Company/ ']);
        /* if(this.queryParamsUserId !='')
         {
          this._router.navigate(['/admin/companyIU/company-IU/ / ']);
         }
         else
         {this._router.navigate(['/admin/companyIU/company-IU/'+ this.queryParamsUserId  +' / ']);}
         
         this.loaderService.display(false);*/
    };
    companyIU.prototype.onchnage = function (branchs) {
        console.log(branchs);
        this.count1 = branchs.length;
    };
    companyIU.prototype.uploadFiles = function () {
        var _this = this;
        this.uploadResult = "";
        // if (this.filesToUpload.length > 0)
        // {
        // this.filesToUpload[0].size;
        var formData = new FormData();
        formData.append('uploadedFiles', this.selectedFile, this.selectedFile.name);
        var apiUrl = "http://localhost:8090/Uploadfiles";
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
    };
    // }
    companyIU.prototype.onFileChanged1 = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.CmpbrImage = _this.selectedFile.name;
            _this.filesToUpload = event.target.files[0];
        };
    };
    companyIU.prototype.onUpload = function () {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        this.httpClient.post('http://localhost:8090/Uploadfiles', uploadData)
            .subscribe(function (res) {
            console.log(res);
            _this.receivedImageData = res;
            _this.base64Data = _this.receivedImageData.pic;
            _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
        }, function (err) { return console.log('Error Occured duringng saving: ' + err); });
        // let apiUrl ="Admin/UploadFiles"; 
        // this.http.post(apiUrl, uploadData )            
        //   .subscribe((data: any) => {
        //             this.uploadResult = data.Table;                       
        //         },
        //         err => {                        
        //             alert("File Upload successfully !");
        //         },
        //         () => {
        //             this.fileUploadVar.nativeElement.value = "";
        //             this.selectedFileNames = [];
        //             this.filesToUpload = [];
        //         } );
    };
    companyIU.prototype.handleOnChange = function (email) {
        // don't remember from where i copied this code, but this works.
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
        }
        else {
            alert("File Upload successfully !");
            this.BrEmail = "";
        }
    };
    companyIU.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUpload', { static: false }),
        __metadata("design:type", Object)
    ], companyIU.prototype, "fileUploadVar", void 0);
    companyIU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Companycreation',
            template: __webpack_require__(/*! raw-loader!./company-IU.compnent.html */ "./node_modules/raw-loader/index.js!./src/app/admin/companyIU/company-IU.compnent.html")
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_2__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Configuration"]])
    ], companyIU);
    return companyIU;
}());



/***/ }),

/***/ "./src/app/admin/companyIU/company-IU.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/companyIU/company-IU.module.ts ***!
  \******************************************************/
/*! exports provided: CompanyIUModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyIUModule", function() { return CompanyIUModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _company_IU_compnent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-IU.compnent */ "./src/app/admin/companyIU/company-IU.compnent.ts");
/* harmony import */ var _company_search_componet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-search.componet */ "./src/app/admin/companyIU/company-search.componet.ts");
/* harmony import */ var _company_IU_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-IU-routing.module */ "./src/app/admin/companyIU/company-IU-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CompanyIUModule = /** @class */ (function () {
    function CompanyIUModule() {
    }
    CompanyIUModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_company_IU_compnent__WEBPACK_IMPORTED_MODULE_6__["companyIU"], _company_search_componet__WEBPACK_IMPORTED_MODULE_7__["companySearch"]],
            imports: [_company_IU_routing_module__WEBPACK_IMPORTED_MODULE_8__["companyIURoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ], providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], CompanyIUModule);
    return CompanyIUModule;
}());



/***/ }),

/***/ "./src/app/admin/companyIU/company-search.componet.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/companyIU/company-search.componet.ts ***!
  \************************************************************/
/*! exports provided: companySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companySearch", function() { return companySearch; });
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







var companySearch = /** @class */ (function () {
    function companySearch(_activatedRoute, _router, _dataService, _auth, _toasterService, _loginService, loaderService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._dataService = _dataService;
        this._auth = _auth;
        this._toasterService = _toasterService;
        this._loginService = _loginService;
        this.loaderService = loaderService;
        this.Reqlist = [];
        this.baseUrl = "";
    }
    companySearch.prototype.ngOnInit = function () {
        var _this = this;
        // this._loginService.verifyRights(400, '')
        //.subscribe((data: any) => { this._loginService.checkVerify('View', data); });
        this.loaderService.display(true);
        this._loginService.verifyRights('1', '')
            .subscribe(function (data) {
            _this._loginService.checkVerify('Add', data);
        });
        this._dataService.getAll("Admin/Company_MST_Search")
            .subscribe(function (data) {
            _this.Reqlist = data.Table;
            _this.loaderService.display(false);
        });
    };
    /*serchList() {
      
     /// this.baseUrl = 'Company/Company_MST_Search';
     this.loaderService.display(true);
     console.log(this.CMPNAME1);
      const jsoncompany = {cmpname:this.CMPNAME1}
      this._dataService.getData("Admin/Company_MST_Search",jsoncompany)
      ////this._dataService.Common(this.baseUrl,jsonmaster)
      .subscribe((data: any) => {
      //if (data.Table[0].STATUS === "100") {
        this.Reqlist = data.Table;
        this.loaderService.display(false);
  
});*/
    /* this.config = {
         itemsPerPage: 25,
         currentPage: 1,
         totalItems: this.Reqlist.count
       
       };  */
    /// }
    // pageChanged(event){
    ////   this.config.currentPage = event;
    // }
    companySearch.prototype.ListOnclick = function (CODE) {
        //// this._router.navigate(['/admin/company/companyIU/'+CODE]);
        this._router.navigate(['/admin/company/Company/' + CODE]);
    };
    companySearch.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    companySearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Companysearch',
            template: __webpack_require__(/*! raw-loader!./company-search.componet.html */ "./node_modules/raw-loader/index.js!./src/app/admin/companyIU/company-search.componet.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_service_authService__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastCommonService"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], companySearch);
    return companySearch;
}());



/***/ })

}]);
//# sourceMappingURL=companyIU-company-IU-module.js.map