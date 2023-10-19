import { Component, Input } from "@angular/core";
import { IExchangeRates } from "src/app/models/exchange-rates";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
})
export class ConversionComponent {
  currency1: string = 'USD';
  amount1: number = 1;
  currency2: string = 'UAH';
  amount2: number = 0;

  @Input() exchangeRates: IExchangeRates;

  ngOnChanges(): void {
    this.convert1to2();
  }

  convert1to2(): void {
    if (this.exchangeRates) {
      this.amount2 = this.convert(this.currency1, this.currency2, this.amount1);
    }
  }

  convert2to1(): void {
    if (this.exchangeRates) {
      this.amount1 = this.convert(this.currency2, this.currency1, this.amount2);
    }
  }

  convert(
    currency1: string,
    currency2: string,
    amount1: number,
  ): number {
    const exchangeRate1 = this.exchangeRates[currency1].value;
    const exchangeRate2 = this.exchangeRates[currency2].value;

    const newAmount = amount1 * (1 / exchangeRate1) * exchangeRate2;

    return parseFloat(newAmount.toFixed(2));
  }
}
