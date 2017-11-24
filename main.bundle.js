webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-stock-list></app-stock-list>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_stock_list_stock_list_module__ = __webpack_require__("../../../../../src/app/modules/stock-list/stock-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_nvd3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_nvd3__["NvD3Module"],
                // ChartModule.forRoot(require('highstock')),
                __WEBPACK_IMPORTED_MODULE_4__modules_stock_list_stock_list_module__["a" /* StockListModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/highstock-chart/highstock-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/highstock-chart/highstock-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<chart type=\"StockChart\" [options]=\"options\" (load)=\"saveInstance($event.context)\"></chart>\n"

/***/ }),

/***/ "../../../../../src/app/modules/highstock-chart/highstock-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighstockChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_storage_stock_storage__ = __webpack_require__("../../../../../src/app/shared/storage/stock-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Highcharts = __webpack_require__("../../../../highcharts/highstock.js");
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
var HighstockChartComponent = (function () {
    function HighstockChartComponent() {
        this._selectedStocks = [];
        this.options = {};
        this.initSetup();
    }
    Object.defineProperty(HighstockChartComponent.prototype, "stockPriceChanges", {
        set: function (value) {
            this.setupStockPriceChanges(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighstockChartComponent.prototype, "selectedStocks", {
        get: function () {
            return this._selectedStocks;
        },
        set: function (stockIds) {
            if (stockIds.length > 0) {
                if (this.selectedStocks[0] !== stockIds[0]) {
                    if (this.chart) {
                        this.initChartData(stockIds);
                    }
                }
            }
            else {
                this.initSetup();
            }
            this._selectedStocks = stockIds;
        },
        enumerable: true,
        configurable: true
    });
    HighstockChartComponent.prototype.initSetup = function () {
        this.options = {
            series: [{
                    name: this.selectedStocks.length > 0 ? this.selectedStocks[0] : '',
                    data: [],
                    tooltip: {
                        valueDecimals: 2
                    },
                    rangeSelector: {
                        allButtonsEnabled: true,
                        buttons: [{
                                type: 'minute',
                                count: 1,
                                text: '1m',
                            }, {
                                type: 'minute',
                                count: 3,
                                text: '3m'
                            }, {
                                type: 'hour',
                                count: 1,
                                text: '1h'
                            }, {
                                type: 'all',
                                text: 'All'
                            }]
                    }
                }]
        };
    };
    HighstockChartComponent.prototype.ngOnInit = function () {
    };
    HighstockChartComponent.prototype.saveInstance = function (chart) {
        this.chart = chart;
        this.initChartData(this.selectedStocks);
    };
    HighstockChartComponent.prototype.setupStockPriceChanges = function (changes) {
        var _this = this;
        changes.forEach(function (priceChange) {
            if (_this.chart) {
                _this.chart['series'][0].addPoint([priceChange.updateTime.getTime(), priceChange.price]);
            }
        });
    };
    HighstockChartComponent.prototype.initChartData = function (stockIds) {
        if (stockIds.length > 0) {
            var newData_1 = [];
            __WEBPACK_IMPORTED_MODULE_1__shared_storage_stock_storage__["a" /* StockStorage */].store.find(function (item) { return item.stockId === stockIds[0]; }).prices.forEach(function (priceEntry) {
                newData_1.push([priceEntry.date.getTime(), priceEntry.price]);
            });
            this.chart['series'][0].setData(newData_1);
            this.chart['series'][0].name = (stockIds[0].toUpperCase());
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('stockPriceChanges'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], HighstockChartComponent.prototype, "stockPriceChanges", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('selectedStocks'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], HighstockChartComponent.prototype, "selectedStocks", null);
    HighstockChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-highstock-chart',
            template: __webpack_require__("../../../../../src/app/modules/highstock-chart/highstock-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/highstock-chart/highstock-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HighstockChartComponent);
    return HighstockChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/highstock-chart/highstock-chart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighstockChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highstock_chart_component__ = __webpack_require__("../../../../../src/app/modules/highstock-chart/highstock-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HighstockChartModule = (function () {
    function HighstockChartModule() {
    }
    HighstockChartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__["ChartModule"].forRoot(__webpack_require__("../../../../highcharts/highstock.js")),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__highstock_chart_component__["a" /* HighstockChartComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__highstock_chart_component__["a" /* HighstockChartComponent */]]
        })
    ], HighstockChartModule);
    return HighstockChartModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/line-chart/line-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .nvd3-svg {\n    overflow: visible !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/line-chart/line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedStocks.length > 0\">\n  <nvd3 #nvd3Chart [options]=\"options\" [data]=\"data\"></nvd3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_storage_stock_storage__ = __webpack_require__("../../../../../src/app/shared/storage/stock-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartComponent = (function () {
    function LineChartComponent() {
        this._selectedStocks = [];
        this.data = [];
    }
    Object.defineProperty(LineChartComponent.prototype, "stockPriceChanges", {
        set: function (value) {
            this.setupStockPriceChanges(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineChartComponent.prototype, "selectedStocks", {
        get: function () {
            return this._selectedStocks;
        },
        set: function (stockIds) {
            if (stockIds.length > 0) {
                if (this.selectedStocks[0] !== stockIds[0]) {
                    var newData_1 = {
                        key: stockIds[0],
                        values: []
                    };
                    __WEBPACK_IMPORTED_MODULE_1__shared_storage_stock_storage__["a" /* StockStorage */].store.find(function (item) { return item.stockId === stockIds[0]; }).prices.forEach(function (priceEntry) {
                        newData_1.values.push({
                            x: priceEntry.date,
                            y: priceEntry.price
                        });
                    });
                    this.data = [newData_1];
                    if (this.nvd3Chart && this.nvd3Chart.chart) {
                        this.nvd3Chart.chart.update();
                    }
                }
            }
            else {
                this.data = [];
                if (this.nvd3Chart && this.nvd3Chart.chart) {
                    this.nvd3Chart.chart.update();
                }
            }
            this._selectedStocks = stockIds;
        },
        enumerable: true,
        configurable: true
    });
    LineChartComponent.prototype.ngOnInit = function () {
        this.initChart();
    };
    LineChartComponent.prototype.initChart = function () {
        var dateFormat = d3.time.format.multi([
            ['%H:%M:%S', function (d) {
                    return d.getHours();
                }],
            ['%a %d', function (d) {
                    return true;
                }]
        ]);
        this.options = {
            chart: {
                type: 'lineWithFocusChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function (e) {
                        console.log('stateChange');
                    },
                    changeState: function (e) {
                        console.log('changeState');
                    },
                    tooltipShow: function (e) {
                        console.log('tooltipShow');
                    },
                    tooltipHide: function (e) {
                        console.log('tooltipHide');
                    }
                },
                xScale: d3.time.scale(),
                xAxis: {
                    //   axisLabel: 'Time',
                    tickFormat: function (d) {
                        return dateFormat(new Date(d));
                    },
                    rotateLabels: -45,
                },
                x2Axis: {
                    axisLabel: 'Time',
                    tickFormat: function (d) {
                        return dateFormat(new Date(d));
                    },
                    rotateLabels: -45,
                },
                forceY: [0, 400],
                yAxis: {
                    axisLabel: 'Price',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5
                },
                callback: function (chart) {
                    console.log('!!! lineChart callback !!!');
                }
            }
        };
    };
    LineChartComponent.prototype.setupStockPriceChanges = function (changes) {
        var _this = this;
        changes.forEach(function (priceChange) {
            var existingEntry = _this.data.find(function (item) { return item.key === priceChange.stockId; });
            if (existingEntry) {
                existingEntry.values.push({
                    y: priceChange.price,
                    x: priceChange.updateTime
                });
            }
            else {
                _this.data.push({
                    key: priceChange.stockId,
                    values: [{
                            y: priceChange.price,
                            x: priceChange.updateTime
                        }]
                });
            }
        });
        if (changes.length > 0 && this.nvd3Chart && this.nvd3Chart.chart) {
            this.nvd3Chart.chart.update();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('stockPriceChanges'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LineChartComponent.prototype, "stockPriceChanges", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('selectedStocks'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LineChartComponent.prototype, "selectedStocks", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nvd3Chart'),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "nvd3Chart", void 0);
    LineChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__("../../../../../src/app/modules/line-chart/line-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/line-chart/line-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/stock-list/stock-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_list_stock_list_component__ = __webpack_require__("../../../../../src/app/modules/stock-list/stock-list/stock-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_stocks_service__ = __webpack_require__("../../../../../src/app/shared/service/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_chart_line_chart_component__ = __webpack_require__("../../../../../src/app/modules/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highstock_chart_highstock_chart_module__ = __webpack_require__("../../../../../src/app/modules/highstock-chart/highstock-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pipe_time_ago_pipe__ = __webpack_require__("../../../../../src/app/shared/pipe/time-ago.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_nvd3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var StockListModule = (function () {
    function StockListModule() {
    }
    StockListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_nvd3__["NvD3Module"],
                __WEBPACK_IMPORTED_MODULE_5__highstock_chart_highstock_chart_module__["a" /* HighstockChartModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__shared_pipe_time_ago_pipe__["a" /* TimeAgoPipe */], __WEBPACK_IMPORTED_MODULE_4__line_chart_line_chart_component__["a" /* LineChartComponent */], __WEBPACK_IMPORTED_MODULE_2__stock_list_stock_list_component__["a" /* StockListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_service_stocks_service__["a" /* StocksService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stock_list_stock_list_component__["a" /* StockListComponent */]]
        })
    ], StockListModule);
    return StockListModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/stock-list/stock-list/stock-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".increasing{\n  background-color: limegreen;\n}\n\n.decreasing{\n  background-color: red;\n}\n\n.decimal{\n  text-align: right;\n}\n\nth{\n  text-align: center;\n}\n\n.stock-row{\n  cursor: pointer;\n}\n\n.stock-row.active{\n  background-color: darkgrey;\n}\n\n.chart-panel{\n  margin-top: 20px;\n}\n\n.chart-div{\n  margin-top: 20px;\n}\n\n.row{\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/stock-list/stock-list/stock-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <table class=\"table table-hover\">\n      <thead>\n      <th>Ticker</th>\n      <th class=\"decimal\">Price</th>\n      <th class=\"decimal\">Session Max</th>\n      <th class=\"decimal\">Session Min</th>\n      <th>Last Updated</th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let stock of stocks\"\n          (click)=\"selectStock(stock.stockId)\"\n          class=\"stock-row\"\n          [class.active]=\"selectedStockIds.length > 0 && stock.stockId===selectedStockIds[0]\">\n        <td class=\"stockid\">\n\n          {{stock.stockId | uppercase}}\n        </td>\n        <td [class.increasing]=\"stock.isIncreasing\"\n            [class.decreasing]=\"stock.isDecreasing\"\n            class=\"decimal\">\n\n          {{stock.price | number: '1.2-2'}}\n        </td>\n        <td class=\"decimal\">\n          {{stock.sessionMax | number: '1.2-2'}}\n        </td>\n        <td class=\"decimal\">\n          {{stock.sessionMin | number: '1.2-2'}}\n        </td>\n        <td class=\"date\">\n\n          {{stock.updateTime | timeAgo}}\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-6\">\n    <div *ngIf=\"selectedStockIds.length>0\" class=\"chart-panel\">\n      <div class=\"row\">\n        <h2 style=\"text-align: center;\" class=\"col-8\">{{selectedStockIds[0] | uppercase}}</h2>\n        <div class=\"col-3\">\n          <label>\n            <select value=\"2\" name=\"chartLib\" (change)=\"changeLib($event.target.value)\" class=\"form-control\">\n              <option value=\"2\">highcharts</option>\n              <option value=\"1\">nvd3</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div *ngIf=\"libValue==1\" class=\"chart-div\">\n          <app-line-chart [selectedStocks]=\"selectedStockIds\" [stockPriceChanges]=\"priceChangesInSelectedStocks\">\n          </app-line-chart>\n      </div>\n      <div *ngIf=\"libValue==2\">\n        <app-highstock-chart [selectedStocks]=\"selectedStockIds\" [stockPriceChanges]=\"priceChangesInSelectedStocks\">\n        </app-highstock-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/stock-list/stock-list/stock-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_stocks_service__ = __webpack_require__("../../../../../src/app/shared/service/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_storage_stock_storage__ = __webpack_require__("../../../../../src/app/shared/storage/stock-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockListComponent = (function () {
    function StockListComponent(_stockService) {
        var _this = this;
        this._stockService = _stockService;
        this.stocks = [];
        this.selectedStockIds = [];
        this.libValue = 2;
        this.priceChangesInSelectedStocks = [];
        this._stockService.wsObservable.subscribe(function (value) {
            _this.updatePrices(value);
        }, function (error) {
        }, function () {
        });
    }
    Object.defineProperty(StockListComponent.prototype, "selectedStock", {
        get: function () {
            var _this = this;
            return this.stocks.find(function (s) { return s.stockId === _this.selectedStockIds[0]; });
        },
        enumerable: true,
        configurable: true
    });
    StockListComponent.prototype.updatePrices = function (priceChanges) {
        var _this = this;
        var priceChangesInSelectedStocks = [];
        priceChanges.forEach(function (priceChange) {
            var changedStock = _this.stocks.find(function (stock) { return stock.stockId === priceChange[0]; });
            if (changedStock) {
                var prevPrice = changedStock.price;
                changedStock.isFirst = false;
                changedStock.updateTime = (new Date());
                if (priceChange[1] > prevPrice) {
                    changedStock.isIncreasing = true;
                    changedStock.isDecreasing = false;
                    changedStock.price = priceChange[1];
                    changedStock.sessionMax = Math.max(changedStock.sessionMax, changedStock.price);
                }
                else {
                    changedStock.isIncreasing = false;
                    changedStock.isDecreasing = true;
                    changedStock.price = priceChange[1];
                    changedStock.sessionMin = Math.min(changedStock.sessionMin, changedStock.price);
                }
            }
            else {
                changedStock = {
                    stockId: priceChange[0],
                    price: priceChange[1],
                    updateTime: (new Date()),
                    isFirst: true,
                    isDecreasing: false,
                    isIncreasing: false,
                    sessionMax: priceChange[1],
                    sessionMin: priceChange[1]
                };
                _this.stocks.push(changedStock);
            }
            if (_this.selectedStockIds.findIndex(function (id) { return id === changedStock.stockId; }) > -1) {
                priceChangesInSelectedStocks.push(changedStock);
            }
            if (_this.selectedStockIds.length === 0) {
                _this.selectedStockIds = [changedStock.stockId];
            }
            __WEBPACK_IMPORTED_MODULE_2__shared_storage_stock_storage__["a" /* StockStorage */].push({ stockId: changedStock.stockId, updateTime: changedStock.updateTime, price: changedStock.price });
        });
        this.priceChangesInSelectedStocks = priceChangesInSelectedStocks;
    };
    StockListComponent.prototype.selectStock = function (stockId) {
        this.selectedStockIds = [stockId];
        this.selectedStockIds = this.selectedStockIds.slice();
    };
    StockListComponent.prototype.changeLib = function (libValue) {
        if (libValue === '1') {
            this.libValue = 1;
        }
        else if (libValue === '2') {
            this.libValue = 2;
        }
    };
    StockListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stock-list',
            template: __webpack_require__("../../../../../src/app/modules/stock-list/stock-list/stock-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/stock-list/stock-list/stock-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_stocks_service__["a" /* StocksService */]])
    ], StockListComponent);
    return StockListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/constant/api-endpoints.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiEndpoints; });
var ApiEndpoints = (function () {
    function ApiEndpoints() {
    }
    ApiEndpoints.STOCK_WEBSOCKET_URL = 'ws://stocks.mnet.website';
    return ApiEndpoints;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipe/time-ago.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimeAgoPipe = (function (_super) {
    __extends(TimeAgoPipe, _super);
    function TimeAgoPipe(ref) {
        var _this = _super.call(this, ref) || this;
        _this.alive = true;
        return _this;
    }
    TimeAgoPipe.prototype.transform = function (obj, args) {
        if (obj instanceof Date) {
            this.value = obj;
            if (!this.timer) {
                this.timer = this.getObservable();
            }
            return _super.prototype.transform.call(this, this.timer);
        }
        return _super.prototype.transform.call(this, obj);
    };
    TimeAgoPipe.prototype.getObservable = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 1000).takeWhile(function () { return _this.alive; }).map(function () {
            var result;
            // current time
            var now = new Date().getTime();
            // time since message was sent in seconds
            var delta = (now - _this.value.getTime()) / 1000;
            // format string
            if (delta < 10) {
                result = 'A few seconds ago';
            }
            else if (delta < 30) {
                result = '30 seconds ago';
            }
            else if (delta < 45) {
                result = '45 seconds ago';
            }
            else if (delta < 86400) {
                result = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US').transform(_this.value, 'h:mm a');
            }
            else {
                result = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US').transform(_this.value, 'MMM d, h:mm a');
            }
            return result;
        });
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TimeAgoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeAgo',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* AsyncPipe */]));



/***/ }),

/***/ "../../../../../src/app/shared/service/stocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_api_endpoints_constant__ = __webpack_require__("../../../../../src/app/shared/constant/api-endpoints.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StocksService = (function () {
    function StocksService() {
        this.initializeWebSocket(__WEBPACK_IMPORTED_MODULE_1__constant_api_endpoints_constant__["a" /* ApiEndpoints */].STOCK_WEBSOCKET_URL);
    }
    StocksService.prototype.initializeWebSocket = function (url) {
        var _this = this;
        this.wsObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.ws = new WebSocket(url);
            _this.ws.onclose = function (e) {
                if (e.wasClean) {
                    observer.complete();
                }
                else {
                    observer.error(e);
                }
            };
            _this.ws.onerror = function (e) {
                observer.error(e);
            };
            _this.ws.onmessage = function (e) {
                observer.next(JSON.parse(e.data));
            };
            return function () {
                _this.ws.close();
            };
        });
    };
    StocksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StocksService);
    return StocksService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/storage/stock-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockStorage; });
var StockValues = (function () {
    function StockValues() {
    }
    return StockValues;
}());
var StockStorage = (function () {
    function StockStorage() {
    }
    StockStorage.push = function (stock) {
        var item = this.store.find(function (i) { return i.stockId === stock.stockId; });
        if (item) {
            item.prices.push({ price: stock.price, date: stock.updateTime });
        }
        else {
            var newItem = {
                stockId: stock.stockId,
                prices: getArrayWithLimitedLength(50)
            };
            newItem.prices.push({ price: stock.price, date: stock.updateTime });
            this.store.push(newItem);
        }
    };
    StockStorage.store = [];
    return StockStorage;
}());

function getArrayWithLimitedLength(length) {
    var array = [];
    array.push = function () {
        if (this.length >= length) {
            this.shift();
        }
        return Array.prototype.push.apply(this, arguments);
    };
    return array;
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map