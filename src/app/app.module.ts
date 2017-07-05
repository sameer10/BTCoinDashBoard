import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from "@angular/http";
import { CoinPriceService } from "./price.service";
import { CoinPriceComponent } from "./coinPrince.Component";

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent, CoinPriceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CoinPriceService]
})
export class AppModule { }
