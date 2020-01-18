import { Currency } from '../types/Currency';
import getCurrencyDetail from '../getCurrencyDetail';

const currency: Currency = require('../../data/currency.json');

describe('getCurrencyDetail', () => {
  it('rerturn error on invalid input', () => {
    expect(() => {
      getCurrencyDetail('LuigiExtended');
    }).toThrowError('Invalid Currency Name');
  });

  it('can get detail value for given input', () => {
    expect(getCurrencyDetail('USD')).toEqual(currency['USD']);
  });
});
