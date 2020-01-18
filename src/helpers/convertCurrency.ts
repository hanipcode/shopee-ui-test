import { Rates } from "./types/Rates";
import convertCurrencyAmmount from "./convertCurrencyAmmount";

export default function convertCurrency(
  input: number,
  name: string,
  rates: Rates
): number {
  const usedRates = rates[name];
  if (!usedRates) {
    throw new Error("Invalid Currency");
  }
  return convertCurrencyAmmount(input, rates[name]);
}
