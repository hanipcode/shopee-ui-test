import currency from '../data/currency.json';
import { CurrencyInfo, Currency } from './types/Currency.js';

export default function getCurrencyDetail(name: string): CurrencyInfo {
  const currencyData: Currency = currency;
  if (!currencyData[name]) {
    throw new Error('Invalid Currency Name');
  }
  return currencyData[name];
}
