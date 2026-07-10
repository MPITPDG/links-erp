(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ActFinalization-actfinalization-module~AirFreight-airfreight-module~BankReconcil-BankReconci~e9a929f2"],{

/***/ "./src/app/shared/service/exportexcel.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/exportexcel.service.ts ***!
  \*******************************************************/
/*! exports provided: ExportexcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportexcelService", function() { return ExportexcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/service/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as Excel from 'exceljs';
//import * as ExcelJS from "exceljs/dist/exceljs";
var ExportexcelService = /** @class */ (function () {
    function ExportexcelService(_loaderService) {
        this._loaderService = _loaderService;
    }
    ExportexcelService.prototype.exportExceltry = function (excelData, downloadname) {
        //Title, Header & Data
        var title = excelData.title;
        var subtitle = excelData.subtitle;
        var header = excelData.headers;
        var data = excelData.data;
        var clntname = excelData.clntname;
        var opbal = excelData.opbal;
        var currenttot = excelData.currenttot;
        var closing = excelData.closing;
        var advance = excelData.advance;
        var advdata = excelData.advdata;
        var advheaders = excelData.advheaders;
        var currtotal = excelData.currtotal;
        var itemname = excelData.itemname;
        var novertotal = excelData.novertotal;
        var subtitle1 = excelData.subtitle1;
        var subtitle2 = excelData.subtitle2;
        var subtitle3 = excelData.subtitle3;
        var subtitle4 = excelData.subtitle4;
        var totpenddata = excelData.totpenddata;
        var recdata = excelData.recdata;
        var UnAdjAmtdata = excelData.UnAdjAmtdata;
        var netoutstanddata = excelData.netoutstanddata;
        var totadvdata = excelData.totadvdata;
        var actstmtalldata = excelData.actstmtalldata;
        var actstmtalltotdata = excelData.actstmtalltotdata;
        var workingdata = excelData.workingdata;
        var totpendheaders = excelData.totpendheaders;
        var recdataheaders = excelData.recdataheaders;
        var unadjamtheaders = excelData.unadjamtheaders;
        var netoutstandheaders = excelData.netoutstandheaders;
        var totadvheaders = excelData.totadvheaders;
        var actstmtheaders = excelData.actstmtheaders;
        var actstmttotheaders = excelData.actstmttotheaders;
        var workingheaders = excelData.workingheaders;
        //Create a workbook with a worksheet
        var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(' Data');
        //title row(Company Name)
        worksheet.addRow([]);
        var titleRow = worksheet.getCell('A1');
        titleRow.value = title;
        titleRow.font = {
            name: 'Times New Roman',
            size: 10,
            underline: 'single',
            bold: true,
            color: { argb: '000000' }
        };
        titleRow.alignment = { vertical: 'middle', horizontal: 'left' };
        //subtitle row(Date information)
        worksheet.addRow([]);
        var subtitleRow = worksheet.getCell('A2');
        subtitleRow.value = subtitle;
        subtitleRow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        //Bank or Cash balance in case of Cashbook condition
        if (excelData.pagetype == "CashBook") {
            worksheet.addRow([]);
            var cashrow = worksheet.getCell('A3');
            if (excelData.Bal1.includes("<B>")) {
                var newdata = excelData.Bal1.replace(/<B[^>]*>/g, '').replace(/<\/B>/g, '');
                cashrow.value = "Cash OP Balance :" + newdata;
                cashrow.font = {
                    bold: true,
                    name: 'Times New Roman',
                    size: 10,
                };
            }
            else {
                cashrow.value = "Cash OP Balance :" + excelData.Bal1;
                cashrow.font = {
                    name: 'Times New Roman',
                    size: 10,
                };
            }
            worksheet.addRow([]);
            var bankrow = worksheet.getCell('A4');
            if (excelData.Bal2.includes("<B>")) {
                var newdata = excelData.Bal2.replace(/<B[^>]*>/g, '').replace(/<\/B>/g, '');
                bankrow.value = "Bank OP Balance :" + newdata;
                bankrow.font = {
                    bold: true,
                    name: 'Times New Roman',
                    size: 10,
                };
            }
            else {
                bankrow.value = "Bank OP Balance :" + excelData.Bal2;
                bankrow.font = {
                    name: 'Times New Roman',
                    size: 10,
                };
            }
        }
        if (excelData.pagetype == "ItemActStatement") {
            worksheet.addRow([]);
            var ClientNameRow = worksheet.getCell('A3');
            ClientNameRow.value = itemname;
            ClientNameRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            //subtitle row(Date information)
            worksheet.addRow([]);
            var crtotaleRow = worksheet.getCell('A5');
            crtotaleRow.value = "Current Total : " + currtotal;
            crtotaleRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
        }
        if (excelData.pagetype == "ClientIncomeTax" || excelData.pagetype == "InvoicingDelay") {
            worksheet.addRow([]);
            var ClientNameRow = worksheet.getCell('A3');
            ClientNameRow.value = subtitle1;
            ClientNameRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var subtitle1row = worksheet.getCell('A4');
            subtitle1row.value = subtitle2;
            subtitle1row.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var subtitle2row = worksheet.getCell('A5');
            subtitle2row.value = subtitle3;
            subtitle2row.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var subtitle3row = worksheet.getCell('A6');
            subtitle3row.value = subtitle4;
            subtitle3row.font = {
                name: 'Times New Roman',
                size: 10,
            };
        }
        if (excelData.pagetype == "InvPurchase") {
            worksheet.addRow([]);
            var ClientNameRow = worksheet.getCell('A3');
            ClientNameRow.value = subtitle1;
            ClientNameRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var subtitle1row = worksheet.getCell('A4');
            subtitle1row.value = subtitle2;
            subtitle1row.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var subtitle2row = worksheet.getCell('A5');
            subtitle2row.value = subtitle3;
            subtitle2row.font = {
                name: 'Times New Roman',
                size: 10,
            };
        }
        if (excelData.pagetype == "SundryExpenses") {
            worksheet.addRow([]);
            var ClientNameRow = worksheet.getCell('A3');
            ClientNameRow.value = subtitle1;
            ClientNameRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
        }
        if (excelData.pagetype == "ReceivableAnyOneClient") {
            worksheet.addRow([]);
            var subtitle1Row = worksheet.getCell('A3');
            subtitle1Row.value = subtitle1;
            subtitle1Row.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var ClientNameRow = worksheet.getCell('A4');
            ClientNameRow.value = clntname;
            ClientNameRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
        }
        if (excelData.pagetype == "AccountStatement" || excelData.pagetype == "ItemStatement" || excelData.pagetype == "ClSuppAcList") {
            //ClientName row(Date information)
            worksheet.addRow([]);
            var ClientNameRow = worksheet.getCell('A3');
            ClientNameRow.value = clntname;
            ClientNameRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var opbalRow = worksheet.getCell('A4');
            opbalRow.value = opbal;
            opbalRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var currenttotRow = worksheet.getCell('A5');
            currenttotRow.value = currenttot;
            currenttotRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var closingRow = worksheet.getCell('A6');
            closingRow.value = closing;
            closingRow.font = {
                name: 'Times New Roman',
                size: 10,
            };
            worksheet.addRow([]);
            var advanceow = worksheet.getCell('A7');
            advanceow.value = advance;
            advanceow.font = {
                name: 'Times New Roman',
                size: 10,
            };
        }
        if (excelData.pagetype == "ReceivableAnyOneClient") {
            worksheet.addRow([]);
            worksheet.addRow(['Pending Invoices']);
        }
        if (excelData.pagetype == "ReceivableAnyOneClientAgeing") {
            worksheet.addRow([]);
            worksheet.addRow(['TOTAL PENDING AMOUNT']);
        }
        //header of table by default take name coming from backend
        var headerRow = worksheet.addRow(header);
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
        //fill the data in table
        data.forEach(function (d) {
            var dara1;
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
            //bold condition in case of cashbook(applied on naration column)
            if (excelData.pagetype == "CashBook") {
                dara1 = row.getCell('G').value;
                if (dara1.includes("<B>")) {
                    row.getCell('G').value = dara1.replace(/<B[^>]*>/g, '').replace(/<\/B>/g, '');
                    row.getCell('G').style = { font: { bold: true } };
                }
            }
            if (excelData.pagetype == "TrialBalanceGrpwise") {
                dara1 = row.getCell('C').value;
                if (dara1 != null) {
                    if (dara1.includes("<B>")) {
                        row.getCell('C').value = dara1.replace(/<B[^>]*>/g, '').replace(/<\/b>/g, '');
                        row.getCell('C').style = { font: { bold: true } };
                    }
                }
            }
        });
        //header of table by default take name coming from backend
        worksheet.addRow([]);
        if (excelData.pagetype == "AccountStatement" || excelData.pagetype == "ItemStatement") {
            var advheaderRow = worksheet.addRow(advheaders);
            advheaderRow.eachCell(function (cell, number) {
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
            //fill the advdata in table
            advdata.forEach(function (d) {
                var advdata1;
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
        if (excelData.pagetype == "NotOverReport") {
            var nheaderRow = worksheet.addRow(novertotal);
            nheaderRow.eachCell(function (cell, number) {
                // cell.fill = {
                //   type: 'pattern',
                //   pattern: 'solid',
                //   fgColor: { argb: '000000' },
                //   bgColor: { argb: '' }
                // }
                cell.font = {
                    name: 'Times New Roman',
                    bold: true,
                    color: { argb: '00000000' },
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
        if (excelData.pagetype == "ReceivableAnyOneClient") {
            //totpendheader of table by default take name coming from backend
            var totpendheader = worksheet.addRow(totpendheaders);
            totpendheader.eachCell(function (cell, number) {
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
            totpenddata.forEach(function (d) {
                var totpend;
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
            worksheet.addRow(['Less : Un Adjusted Receipts']);
            //recdataheader of table by default take name coming from backend
            var recdataheader = worksheet.addRow(recdataheaders);
            recdataheader.eachCell(function (cell, number) {
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
            recdata.forEach(function (d) {
                var totpend;
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
            //unadjamtheaders of table by default take name coming from backend
            //  let unadjamtheader = worksheet.addRow(unadjamtheaders);
            //  unadjamtheader.eachCell((cell, number) => {
            //    cell.fill = {
            //      type: 'pattern',
            //      pattern: 'solid',
            //      fgColor: { argb: '000000' },
            //      bgColor: { argb: '' }
            //    }
            //    cell.font = {
            //      name: 'Times New Roman',
            //      bold: true,
            //      color: { argb: 'FFFFFF' },
            //      size: 10
            //    }
            //    cell.border = {
            //      top: {
            //        style: 'thin'
            //      },
            //      left: {
            //        style: 'thin'
            //      },
            //      bottom: {
            //        style: 'thin'
            //      },
            //      right: {
            //        style: 'thin'
            //      }
            //    }
            //   }) 
            UnAdjAmtdata.forEach(function (d) {
                var totpend;
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
            worksheet.addRow([]);
            worksheet.addRow([]);
            //netoutstandheaders of table by default take name coming from backend
            var netoutstandheader = worksheet.addRow(netoutstandheaders);
            netoutstandheader.eachCell(function (cell, number) {
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
            netoutstanddata.forEach(function (d) {
                var totpend;
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
            worksheet.addRow(['Advances']);
            //recadvheader of table by default take name coming from backend
            var recadvheader = worksheet.addRow(advheaders);
            recadvheader.eachCell(function (cell, number) {
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
            advdata.forEach(function (d) {
                var totpend;
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
            //totadvheader of table by default take name coming from backend
            //  let totadvheader = worksheet.addRow(totadvheaders);
            //  totadvheader.eachCell((cell, number) => {
            //    cell.fill = {
            //      type: 'pattern',
            //      pattern: 'solid',
            //      fgColor: { argb: '000000' },
            //      bgColor: { argb: '' }
            //    }
            //    cell.font = {
            //      name: 'Times New Roman',
            //      bold: true,
            //      color: { argb: 'FFFFFF' },
            //      size: 10
            //    }
            //    cell.border = {
            //      top: {
            //        style: 'thin'
            //      },
            //      left: {
            //        style: 'thin'
            //      },
            //      bottom: {
            //        style: 'thin'
            //      },
            //      right: {
            //        style: 'thin'
            //      }
            //    }
            //   }) 
            totadvdata.forEach(function (d) {
                var totpend;
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
            worksheet.addRow([]);
            worksheet.addRow(['WORKING OF OUTSTANDING']);
            worksheet.addRow([]);
            worksheet.addRow(['Account Statement All']);
            worksheet.addRow([]);
            //actstmtheader of table by default take name coming from backend
            var actstmtheader = worksheet.addRow(actstmtheaders);
            actstmtheader.eachCell(function (cell, number) {
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
            actstmtalldata.forEach(function (d) {
                var actdata;
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
                if (excelData.pagetype == "ReceivableAnyOneClient") {
                    actdata = row.getCell('F').value;
                    if (actdata != null) {
                        if (actdata.includes("<s>") || actdata.includes("<b>")) {
                            row.getCell('F').value = actdata.replace(/<s[^>]*>/g, '').replace(/<\/s>/g, '').replace(/<b[^>]*>/g, '').replace(/<\/b>/g, '');
                            row.getCell('F').style = { font: { bold: true } };
                        }
                        // if(actdata.includes("<b>") ){
                        //   row.getCell('F').value= actdata.replace(/<b[^>]*>/g, '').replace(/<\/b>/g, '');
                        //   row.getCell('F').style= {font:{bold: true}};
                        // }
                    }
                }
            });
            // let clmformat=worksheet.getColumn(6)
            // clmformat.eachCell((cell, number) => {
            //     cell.font = {
            //     name: 'Times New Roman',
            //     bold: true,
            //     color: { argb: 'FFFFFF' },
            //     size: 10
            //   }
            // })
            worksheet.addRow([]);
            worksheet.addRow([]);
            //actstmttotheader of table by default take name coming from backend
            var actstmttotheader = worksheet.addRow(actstmttotheaders);
            actstmttotheader.eachCell(function (cell, number) {
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
            actstmtalltotdata.forEach(function (d) {
                var totpend;
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
            worksheet.addRow([]);
            worksheet.addRow([]);
            worksheet.addRow(['Detail Working of Client Bill Wise  OutStanding ']);
            //workingheaders of table by default take name coming from backend
            var workingheader = worksheet.addRow(workingheaders);
            workingheader.eachCell(function (cell, number) {
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
            workingdata.forEach(function (d) {
                var totpend;
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
        if (excelData.pagetype == "ReceivableAnyOneClientAgeing") {
            //unadjamtheaders of table by default take name coming from backend
            worksheet.addRow(['UNADJUSTED RECEIPTS']);
            var unadjamtheader = worksheet.addRow(unadjamtheaders);
            unadjamtheader.eachCell(function (cell, number) {
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
            UnAdjAmtdata.forEach(function (d) {
                var totpend;
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
            worksheet.addRow([]);
            worksheet.addRow(['ADVANCE AMOUNT']);
            var recadvheader = worksheet.addRow(advheaders);
            recadvheader.eachCell(function (cell, number) {
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
            advdata.forEach(function (d) {
                var totpend;
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
        //row for total amount in particular pages on last column of table that is amount
        if (excelData.pagetype == "Purchase" || excelData.pagetype == "Storage" || excelData.pagetype == "Brokerage") {
            worksheet.addRow(['', '', '', '', '', '', excelData.totalamount_text + ":", excelData.totalamount_value]);
            //     var lastRow = worksheet.lastRow;
            // let no=lastRow.number
            // let cell
            // for (let i: number = 1; i < lastRow.values.length; i++) {
            //    cell = lastRow.getCell(i);    
            // }
            //  var column=cell.address.charAt(0)
            // var getRowInsert = worksheet.getRow(++(no));
            // getRowInsert.getCell(column).value = excelData.totalamount_text + ":" + excelData.totalamount_value;;
            // getRowInsert.fill = {
            //   type: 'pattern',
            //   pattern: 'solid',
            //   fgColor: {
            //     argb: 'FFFFFFFF'
            //   }
            // };
            // getRowInsert.font = {
            //   name: 'Times New Roman',
            //   size: 10,
            //   color: {
            //     argb: '00000000',
            //   },
            // },
            // getRowInsert.eachCell({ includeEmpty: true },(cell, number) => {
            //     cell.border = {
            //       top: {
            //         style: 'thin'
            //       },
            //       left: {
            //         style: 'thin'
            //       },
            //       bottom: {
            //         style: 'thin'
            //       },
            //       right: {
            //         style: 'thin'
            //       }
            //     };
            //   });
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
        this._loaderService.display(false);
        //download file call
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, downloadname + '.xlsx');
        });
    };
    ExportexcelService.prototype.exportExcelActStatement = function (excelData, downloadname) {
        //Title, Header & Data
        var title = excelData.title;
        var subtitle = excelData.subtitle;
        var header = excelData.headers;
        var data = excelData.data;
        var clntname = excelData.clntname;
        var opbal = excelData.opbal;
        var currenttot = excelData.currenttot;
        var closing = excelData.closing;
        var advance = excelData.advance;
        var advdata = excelData.advdata;
        var advheaders = excelData.advheaders;
        //Create a workbook with a worksheet
        var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(' Data');
        worksheet.addRow([]);
        //title row(Company Name)
        var blankRow = worksheet.getCell('A1');
        blankRow.value = "";
        worksheet.addRow([]);
        //title row(Company Name)
        var titleRow = worksheet.getCell('A2');
        titleRow.value = title;
        titleRow.font = {
            name: 'Times New Roman',
            size: 10,
            underline: 'single',
            bold: true,
            color: { argb: '000000' }
        };
        titleRow.alignment = { vertical: 'middle', horizontal: 'left' };
        //subtitle row(Date information)
        worksheet.addRow([]);
        var subtitleRow = worksheet.getCell('A3');
        subtitleRow.value = subtitle;
        subtitleRow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        //ClientName row(Date information)
        worksheet.addRow([]);
        var ClientNameRow = worksheet.getCell('A4');
        ClientNameRow.value = clntname;
        ClientNameRow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        worksheet.addRow([]);
        var opbalRow = worksheet.getCell('A5');
        opbalRow.value = opbal;
        opbalRow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        worksheet.addRow([]);
        var currenttotRow = worksheet.getCell('A6');
        currenttotRow.value = currenttot;
        currenttotRow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        worksheet.addRow([]);
        var closingRow = worksheet.getCell('A7');
        closingRow.value = closing;
        closingRow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        worksheet.addRow([]);
        var advanceow = worksheet.getCell('A8');
        advanceow.value = advance;
        advanceow.font = {
            name: 'Times New Roman',
            size: 10,
        };
        //header of table by default take name coming from backend
        var headerRow = worksheet.addRow(header);
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
        //fill the data in table
        data.forEach(function (d) {
            var dara1;
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
            //bold condition in case of cashbook(applied on naration column)
            dara1 = row.getCell('A').value;
            if (dara1.includes("<TD colspan=4> <B>")) {
                row.getCell('A').value = dara1.replace(/<B[^>]*>/g, '').replace(/<\/B>/g, '');
                row.getCell('A').value = dara1.replace(/<TD colspan=4> <B[^>]*>/g, '').replace(/<\/B><\/TD>/g, '');
                row.getCell('A').style = { font: { bold: true } };
            }
        });
        //header of table by default take name coming from backend
        /*  worksheet.addRow([]);
         var row =  worksheet.addRow(["Advance"]);
          let advheaderRow = worksheet.addRow(advheaders);
          advheaderRow.eachCell((cell, number) => {
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '000000' },
              bgColor: { argb: '' }
            }
            cell.font = {
              name: 'Times New Roman',
              bold: true,
              color: { argb: 'FFFFFF' },
              size: 10
            }
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
            }
          })
            data.forEach(d => {
          let advdata1
          const row = worksheet.addRow(d);
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
         row.eachCell({ includeEmpty: true },(cell, number) => {
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
          });*/
        //row for total amount in particular pages on last column of table that is amount
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
        this._loaderService.display(false);
        //download file call
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, downloadname + '.xlsx');
        });
    };
    ExportexcelService.ctorParameters = function () { return [
        { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    ExportexcelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], ExportexcelService);
    return ExportexcelService;
}());



/***/ })

}]);
//# sourceMappingURL=default~ActFinalization-actfinalization-module~AirFreight-airfreight-module~BankReconcil-BankReconci~e9a929f2.js.map