import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  numberWithCommas( x: number ) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  response: any[] = [
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 25962,
        "market_cap": 503049489798,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 544517421465,
        "total_volume": 4339285096,
        "high_24h": 26049,
        "low_24h": 25681,
        "price_change_24h": 40.98,
        "price_change_percentage_24h": 0.15809,
        "market_cap_change_24h": 384402826,
        "market_cap_change_percentage_24h": 0.07647,
        "circulating_supply": 19400737,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 69045,
        "ath_change_percentage": -62.4156,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 67.81,
        "atl_change_percentage": 38169.35313,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-13T01:44:09.265Z"
    },
    {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "current_price": 1740.95,
        "market_cap": 208945479169,
        "market_cap_rank": 2,
        "fully_diluted_valuation": 208945479169,
        "total_volume": 5986120433,
        "high_24h": 1755.94,
        "low_24h": 1723.49,
        "price_change_24h": -4.819064996389898,
        "price_change_percentage_24h": -0.27604,
        "market_cap_change_24h": -1356770066.0893555,
        "market_cap_change_percentage_24h": -0.64515,
        "circulating_supply": 120225039.057352,
        "total_supply": 120225039.057352,
        "max_supply": null,
        "ath": 4878.26,
        "ath_change_percentage": -64.37349,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 0.432979,
        "atl_change_percentage": 401294.68846,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
            "times": 88.67195038766378,
            "currency": "btc",
            "percentage": 8867.195038766378
        },
        "last_updated": "2023-06-13T01:44:04.935Z"
    },
    {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        "current_price": 0.998801,
        "market_cap": 83266538272,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 83266538272,
        "total_volume": 18613795611,
        "high_24h": 1.002,
        "low_24h": 0.996684,
        "price_change_24h": -0.001263357108914454,
        "price_change_percentage_24h": -0.12633,
        "market_cap_change_24h": -105321677.22319031,
        "market_cap_change_percentage_24h": -0.12633,
        "circulating_supply": 83366513300.21,
        "total_supply": 83366513300.21,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.51029,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.45662,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-13T01:40:00.388Z"
    },
    {
        "id": "binancecoin",
        "symbol": "bnb",
        "name": "BNB",
        "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
        "current_price": 231.34,
        "market_cap": 36035055975,
        "market_cap_rank": 4,
        "fully_diluted_valuation": 46241712692,
        "total_volume": 1236327100,
        "high_24h": 237.58,
        "low_24h": 222.23,
        "price_change_24h": -2.1197163253545455,
        "price_change_percentage_24h": -0.90795,
        "market_cap_change_24h": -538581584.7557755,
        "market_cap_change_percentage_24h": -1.4726,
        "circulating_supply": 155855196,
        "total_supply": 157900174,
        "max_supply": 200000000,
        "ath": 686.31,
        "ath_change_percentage": -66.31119,
        "ath_date": "2021-05-10T07:24:17.097Z",
        "atl": 0.0398177,
        "atl_change_percentage": 580567.81257,
        "atl_date": "2017-10-19T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-13T01:44:07.269Z"
    }
]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCoins().subscribe(
      (results: any) => {
        this.response = results.splice(0, 4);

      }
    )
  }
}
