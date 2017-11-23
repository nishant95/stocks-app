import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighstockChartComponent} from './highstock-chart.component';
import {ChartModule} from 'angular2-highcharts';

declare var require: any;


@NgModule({
  imports: [
    CommonModule,
    ChartModule.forRoot(require('highcharts/highstock')),
  ],
  declarations: [HighstockChartComponent],
  exports: [HighstockChartComponent]
})
export class HighstockChartModule {}
