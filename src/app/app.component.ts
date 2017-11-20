import { Component } from '@angular/core';
import {StocksService} from './shared/service/stocks.service';
import {StockData} from './shared/model/stock-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  stocks: StockData[] = [];

  constructor(private _stockService: StocksService) {
    this._stockService.wsObservable.subscribe((value) => {
      this.updatePrices(value);
    }, (error) => {

    }, () => {

    });
  }

  updatePrices(priceChanges: any[][]) {
    priceChanges.forEach((priceChange: any[]) => {
      const changedStock = this.stocks.find((stock) => stock.stockId === priceChange[0]);
      if (changedStock) {
        const prevPrice = changedStock.price;
        changedStock.isFirst = false;
        if (priceChange[1] > prevPrice) {
          changedStock.isIncreasing = true;
          changedStock.isDecreasing = false;
          changedStock.price = priceChange[1];
          changedStock.sessionMax = Math.max(changedStock.sessionMax, changedStock.price);
        }else {
          changedStock.isIncreasing = false;
          changedStock.isDecreasing = true;
          changedStock.price = priceChange[1];
          changedStock.sessionMin = Math.min(changedStock.sessionMin, changedStock.price);
        }
      }else {
        this.stocks.push({
          stockId: priceChange[0],
          price: priceChange[1],
          updateTime: (new Date()),
          isFirst: true,
          isDecreasing: false,
          isIncreasing: false,
          sessionMax: priceChange[1],
          sessionMin: priceChange[1]
        });
      }
    });
  }
}
