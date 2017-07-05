import { Http,Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Coin } from "./Coin";

var coins = Coin[];
@Injectable()
export class CoinPriceService{
    private baseUrl: string = 'https://min-api.cryptocompare.com/';
    constructor(private http : Http){

    }

    getPrice(): Promise<Coin[]>{
     coins = this.http.get(`${this.baseUrl}/data/price?fsym=ETH&tsyms=BTC,USD,EUR`);
     for(var coin in coins)
     {
        coins.add({})
     }
      return new Promise(resolve => {()=>resolve(this.http.get(`${this.baseUrl}/data/price?fsym=ETH&tsyms=BTC,USD,EUR`))});
    };
  

//     private getHeaders(){
//     // I included these headers because otherwise FireFox
//     // will request text/html instead of application/json
//     let headers = new Headers();
//     headers.append('Accept', 'application/json');
//     return headers;
//   }

}


// @Injectable()
// export class PeopleService{
//   constructor(private http : Http){
//   }
//   // other methods...
// }