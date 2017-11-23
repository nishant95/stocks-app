import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StockListModule } from './modules/stock-list/stock-list.module';

import { NvD3Module } from 'ng2-nvd3';
import { ChartModule } from 'angular2-highcharts';

import 'd3';
import 'nvd3';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NvD3Module,
    // ChartModule.forRoot(require('highstock')),
    StockListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
