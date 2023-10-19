import { CurrencyExchangeRate } from "./currency-exchange-rate";

export interface IExchangeRates {
  [currencyCode: string]: CurrencyExchangeRate;
}
