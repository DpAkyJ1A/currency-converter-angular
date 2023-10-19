import { Component, Input } from "@angular/core";
import { IExchangeRates } from "src/app/models/exchange-rates";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html'
})

export class ConversionComponent {
  @Input() exchangeRates: IExchangeRates;
}
