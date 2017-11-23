class StockValues {
  stockId: string;
  prices: [{date: Date; price: number; }];
}

export class StockStorage {
  static store: StockValues[] = [];

  static push(stock) {
    const item = this.store.find(i => i.stockId === stock.stockId);
    if (item) {
      item.prices.push({price: stock.price, date: stock.updateTime});
    }else {
      const newItem = <any>{
        stockId: stock.stockId,
        prices: getArrayWithLimitedLength(50)
      };
      newItem.prices.push({price: stock.price, date: stock.updateTime});
      this.store.push(newItem);
    }
  }
}

function getArrayWithLimitedLength(length) {
  const array = [];

  array.push = function () {
    if (this.length >= length) {
      this.shift();
    }
    return Array.prototype.push.apply(this, arguments);
  };
  return array;
}
