import { Component, Input } from "@angular/core";
import { IExchangeRates } from "src/app/models/exchange-rates";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
})
export class ConversionComponent {
  currency1: string = 'USD';
  amount1: number = 0;
  currency2: string = 'UAH';
  amount2: number = 0;

  @Input() exchangeRates: IExchangeRates;

  convert1to2(): void {
    if (this.exchangeRates) {
      const exchangeRate1 = this.exchangeRates[this.currency1].value;
      const exchangeRate2 = this.exchangeRates[this.currency2].value;

      this.amount2 = this.amount1 * (1 / exchangeRate1) * exchangeRate2;

      this.amount2 = parseFloat(this.amount2.toFixed(2));
    }
  }

  convert2to1(): void {
    if (this.exchangeRates) {
      const exchangeRate1 = this.exchangeRates[this.currency1].value;
      const exchangeRate2 = this.exchangeRates[this.currency2].value;

      this.amount1 = this.amount2 * (1 / exchangeRate2) * exchangeRate1;

      this.amount1 = parseFloat(this.amount1.toFixed(2));
    }
  }
}
