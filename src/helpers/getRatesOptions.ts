import currency from '../data/currency.json';

export interface CurrencyOptionItem {
  label: string;
  value: string;
}

export type CurrencyOption = CurrencyOptionItem[];

export default function getRatesOptions(only: string[]): CurrencyOption {
  return Object.keys(currency)
    .filter(key => only.includes(currency[key].code))
    .map((key: string) => ({
      label: `${currency[key].name} (${currency[key].code})`,
      value: currency[key].code,
    }));
}
