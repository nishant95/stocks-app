import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockListModule } from './modules/stock-list/stock-list.module';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    StockListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
