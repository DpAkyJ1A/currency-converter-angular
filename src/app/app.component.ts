import { Component, OnInit } from '@angular/core';
import { IExchangeRates } from './models/exchange-rates';
import { ExchangeRatesService } from './services/exchange-rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency converter';

  exchangeRates: IExchangeRates;
  loaded = false;

  constructor(private exchangeRatesService: ExchangeRatesService) {};

  ngOnInit(): void {
    this.exchangeRatesService.getData().subscribe(obj => {
      this.exchangeRates = obj.data;
      this.loaded = true;
    })
  }
}
