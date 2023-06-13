import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly coinsUrl: string = 'https://api.coingecko.com/api/v3/coins'

  constructor(private http: HttpClient) { }

  getCoins(): Observable<any> {
    return this.http.get<any>(`${this.coinsUrl}/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`)
  }

  getCoin(id: string): Observable<any> {
    return this.http.get<any>(`${this.coinsUrl}/${id}`)
  }
}
