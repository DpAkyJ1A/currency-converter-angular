import { IExchangeRates } from "./exchange-rates";

export interface CurrenciesObject {
  data: IExchangeRates,
  meta: {
    last_updated_at: string,
  }
}
