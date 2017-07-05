import { Component, OnInit } from '@angular/core';
import { CoinPriceService } from "./price.service";
import { Coin } from "./Coin";

@Component({
    selector: 'coin-price',
    template: `
    <div *ngFor="let coin of Coins" class="col-1-4">
    <div>
        <h2>{{coin.currencyname}}</h2>
        <div>{{coin.price}}</div>
    </div>
    </div>
    `;
})

export class CoinPriceComponent implements OnInit{
    constructor(private coinPrinceService: CoinPriceService) { }

    ngOnInit(): void {
    this.coinPrinceService.getPrice()
      .then(Coins => Coins);
  }
}
