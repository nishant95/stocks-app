import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StockData} from '../../shared/model/stock-data.model';
import {StockStorage} from '../../shared/storage/stock-storage';

declare let d3: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input('stockPriceChanges')set stockPriceChanges(value: StockData[]) {
    this.setupStockPriceChanges(value);
  }

  private _selectedStocks: string[] = [];
  @Input('selectedStocks')set selectedStocks(stockIds: string[]){
      if (stockIds.length > 0) {
        if (this.selectedStocks[0] !== stockIds[0]) {
          const newData = {
            key: stockIds[0],
            values: []
          };
          StockStorage.store.find(item => item.stockId === stockIds[0]).prices.forEach(
            (priceEntry) => {
              newData.values.push({
                x: priceEntry.date,
                y: priceEntry.price
              });
            }
          );
          this.data = [newData];
          if (this.nvd3Chart && this.nvd3Chart.chart) { this.nvd3Chart.chart.update(); }
        }
      }else {
          this.data = [];
          if (this.nvd3Chart && this.nvd3Chart.chart) { this.nvd3Chart.chart.update(); }
      }
      this._selectedStocks = stockIds;
  }

  get selectedStocks(): string[] {
      return this._selectedStocks;
  }

  @ViewChild('nvd3Chart')nvd3Chart;
  options;
  data = [];

  constructor() {
  }

  ngOnInit() {
    this.initChart();
  }

  private initChart() {
    const dateFormat = d3.time.format.multi([
      ['%H:%M:%S', function (d) {
        return d.getHours();
      }], // %L for millis
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
  }

  setupStockPriceChanges(changes: StockData[]) {
    changes.forEach((priceChange: StockData) => {
      const existingEntry = this.data.find((item) => item.key === priceChange.stockId);
      if (existingEntry) {
        existingEntry.values.push({
          y: priceChange.price,
          x: priceChange.updateTime
        });
      } else {
        this.data.push({
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
  }
}
