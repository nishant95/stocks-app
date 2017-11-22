import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StocksService } from '../../shared/service/stocks.service';
import {LineChartComponent} from '../line-chart/line-chart.component';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    CommonModule,
    NvD3Module
  ],
  declarations: [StockListComponent, LineChartComponent],
  providers: [StocksService],
  exports: [StockListComponent]
})
export class StockListModule { }
