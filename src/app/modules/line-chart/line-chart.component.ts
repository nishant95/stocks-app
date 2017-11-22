import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StockData} from '../../shared/model/stock-data.model';

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

  @ViewChild('nvd3Chart')nvd3Chart;
  stocks: StockHistoricData[] = [];
  options;
  data = [];

  constructor() {
  }

  ngOnInit() {
    const dateFormat = d3.time.format.multi([
        ['%H:%M:%S', function(d) { return d.getHours(); } ], // %L for millis
        ['%a %d', function(d) { return true; }]
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
          axisLabelDistance: -10
        },
        callback: function (chart) {
          console.log('!!! lineChart callback !!!');
        }
      }
    };
  }

  // setupStockPriceChanges(changes: StockData[]) {
  //   console.log(changes);
  //   changes.forEach((priceChange: StockData) => {
  //     const changedStock = this.stocks.find((stock) => stock.stockId === priceChange.stockId);
  //     if (changedStock) {
  //       changedStock.prices.push({
  //         price: priceChange.price,
  //         updateTime: priceChange.updateTime
  //       });
  //     } else {
  //       this.stocks.push({
  //         stockId: priceChange.stockId,
  //         prices: [{
  //           price: priceChange.price,
  //           updateTime: priceChange.updateTime
  //         }]
  //       });
  //     }
  //   });
  // }

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
    if (changes.length > 0 && this.nvd3Chart.chart) {
      this.nvd3Chart.chart.update();
    }
  }


  // stockDataForChart() {
  //   const data = [];
  //   this.stocks.forEach(
  //     (stock: StockHistoricData) => {
  //       const chartValues = [];
  //       stock.prices.forEach((priceChange) => {
  //         chartValues.push({x: priceChange.updateTime, y: priceChange.price});
  //       });
  //
  //       data.push({
  //         values: chartValues,
  //         key: stock.stockId,
  //         color: '#7777ff'
  //       });
  //     }
  //   );
  //   this.data = data;
  //   return data;
  // }
}

//  color: '#ff7f0e'
//  color: '#2ca02c'
//  color: '#7777ff',
class StockHistoricData {
  stockId: string;
  prices: { price: number, updateTime: Date}[];
}
