import convertCurrency from '../convertCurrency';
import { RatesResponse } from '../types/Rates';

const rates: RatesResponse = require('../__mocks__/rates.json');

describe('getCurrencyValue', () => {
  it('error on invalid currency', () => {
    const invalidCur = 'MarioBros';
    expect(() => {
      convertCurrency(2, invalidCur, rates.rates);
    }).toThrowError('Invalid Currency');
  });

  it('given currency value as an input and an target, it return the value', () => {
    const INPUT = 2;
    const EXPECTED = rates.rates.IDR * INPUT;
    expect(convertCurrency(INPUT, 'IDR', rates.rates)).toEqual(EXPECTED);
  });
});
