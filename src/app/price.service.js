"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Coin_1 = require("./Coin");
var coins = Coin_1.Coin[];
var CoinPriceService = (function () {
    function CoinPriceService(http) {
        this.http = http;
        this.baseUrl = 'https://min-api.cryptocompare.com/';
    }
    CoinPriceService.prototype.getPrice = function () {
        var _this = this;
        coins = this.http.get(this.baseUrl + "/data/price?fsym=ETH&tsyms=BTC,USD,EUR");
        for (var coin in coins) {
            coins.add({});
        }
        return new Promise(function (resolve) { (function () { return resolve(_this.http.get(_this.baseUrl + "/data/price?fsym=ETH&tsyms=BTC,USD,EUR")); }); });
    };
    ;
    return CoinPriceService;
}());
CoinPriceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CoinPriceService);
exports.CoinPriceService = CoinPriceService;
// @Injectable()
// export class PeopleService{
//   constructor(private http : Http){
//   }
//   // other methods...
// } 
//# sourceMappingURL=price.service.js.map