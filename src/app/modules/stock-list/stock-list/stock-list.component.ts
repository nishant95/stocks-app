import { Component, OnInit } from '@angular/core';
import {StockData} from '../../../shared/model/stock-data.model';
import {StocksService} from '../../../shared/service/stocks.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  stocks: StockData[] = [];
  selectedStocks: string[] = [];

  priceChangesInSelectedStocks: StockData[] = [];

  constructor(private _stockService: StocksService) {
    this._stockService.wsObservable.subscribe((value) => {
      this.updatePrices(value);
    }, (error) => {

    }, () => {

    });
  }

  updatePrices(priceChanges: any[][]) {
    const priceChangesInSelectedStocks = [];
    priceChanges.forEach((priceChange: any[]) => {
      let changedStock = this.stocks.find((stock) => stock.stockId === priceChange[0]);
      if (changedStock) {
        const prevPrice = changedStock.price;
        changedStock.isFirst = false;
        changedStock.updateTime = (new Date());
        if (priceChange[1] > prevPrice) {
          changedStock.isIncreasing = true;
          changedStock.isDecreasing = false;
          changedStock.price = priceChange[1];
          changedStock.sessionMax = Math.max(changedStock.sessionMax, changedStock.price);
        } else {
          changedStock.isIncreasing = false;
          changedStock.isDecreasing = true;
          changedStock.price = priceChange[1];
          changedStock.sessionMin = Math.min(changedStock.sessionMin, changedStock.price);
        }
      } else {
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
        this.stocks.push(changedStock);
      }
      if (this.selectedStocks.findIndex(id => id === changedStock.stockId) > -1) {
        priceChangesInSelectedStocks.push(changedStock);
      }
    });
    this.priceChangesInSelectedStocks = priceChangesInSelectedStocks;
  }

  selectStock(stockId: string) {
    this.selectedStocks = [stockId];
  }
}
