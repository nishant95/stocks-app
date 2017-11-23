import {Component, Input, OnInit} from '@angular/core';
import {StockData} from '../../shared/model/stock-data.model';
import {StockStorage} from '../../shared/storage/stock-storage';

declare var require: any;

const Highcharts = require('highcharts/highstock');
Highcharts.setOptions({
  global: {
    useUTC: false
  }
});

@Component({
  selector: 'app-highstock-chart',
  templateUrl: './highstock-chart.component.html',
  styleUrls: ['./highstock-chart.component.css']
})
export class HighstockChartComponent implements OnInit {
  @Input('stockPriceChanges')set stockPriceChanges(value: StockData[]) {
    this.setupStockPriceChanges(value);
  }

  private _selectedStocks: string[] = [];
  @Input('selectedStocks')set selectedStocks(stockIds: string[]){
    if (stockIds.length > 0) {
      if (this.selectedStocks[0] !== stockIds[0]) {
        if (this.chart) {
          this.initChartData(stockIds);
        }
      }
    }else {
      this.initSetup();
    }
    this._selectedStocks = stockIds;
  }

  get selectedStocks(): string[] {
    return this._selectedStocks;
  }


  chart: Object;
  options = {};

  constructor() {
      this.initSetup();
  }

  initSetup() {
    this.options = {
      series : [{
        name : this.selectedStocks.length > 0 ? this.selectedStocks[0] : '',
        data : [],
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
  }

  ngOnInit() {
  }

  saveInstance(chart) {
    this.chart = chart;
    this.initChartData(this.selectedStocks);
  }

  setupStockPriceChanges(changes: StockData[]) {
    changes.forEach((priceChange: StockData) => {
      if (this.chart) { this.chart['series'][0].addPoint([priceChange.updateTime.getTime(), priceChange.price]); }
    });
  }

  private initChartData(stockIds: string[]) {
    if (stockIds.length > 0) {
      const newData = [];
      StockStorage.store.find(item => item.stockId === stockIds[0]).prices.forEach(
        (priceEntry) => {
          newData.push([priceEntry.date.getTime(), priceEntry.price]);
        }
      );
      this.chart['series'][0].setData(newData);
      this.chart['series'][0].name = (stockIds[0].toUpperCase());
    }
  }
}
