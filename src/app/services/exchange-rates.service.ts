import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CurrenciesObject } from "../models/currencies-object";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  constructor(private http: HttpClient) {}

  getData(): Observable<CurrenciesObject> {
    return this.http.get<CurrenciesObject>(environment.apiUrl);
  }
}
