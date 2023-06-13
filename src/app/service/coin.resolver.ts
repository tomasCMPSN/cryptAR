import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CoinResolver {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<boolean> {
    return this.apiService.getCoin(route.paramMap.get('id')!);
  }
}
