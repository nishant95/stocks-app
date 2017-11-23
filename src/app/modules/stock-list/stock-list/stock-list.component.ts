import { Component, OnInit } from '@angular/core';
import {StockData} from '../../../shared/model/stock-data.model';
import {StocksService} from '../../../shared/service/stocks.service';
import {StockStorage} from '../../../shared/storage/stock-storage';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  stocks: StockData[] = [];
  selectedStockIds: string[] = [];
  libValue = 1;
  get selectedStock(): StockData{
    return this.stocks.find(s => s.stockId === this.selectedStockIds[0]);
  }

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
      if (this.selectedStockIds.findIndex(id => id === changedStock.stockId) > -1) {
        priceChangesInSelectedStocks.push(changedStock);
      }
      if (this.selectedStockIds.length === 0) { this.selectedStockIds = [changedStock.stockId]; }
      StockStorage.push({stockId: changedStock.stockId, updateTime: changedStock.updateTime, price: changedStock.price});
    });
    this.priceChangesInSelectedStocks = priceChangesInSelectedStocks;
  }

  selectStock(stockId: string) {
    this.selectedStockIds = [stockId];
    this.selectedStockIds = this.selectedStockIds.slice();
  }

  changeLib(libValue) {
    if (libValue === '1') {
      this.libValue = 1;
    }else if (libValue === '2') {
      this.libValue = 2;
    }
  }
}
