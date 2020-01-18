import { useEffect, useState, useCallback } from 'react';
import { RatesResponse } from '../helpers/types/Rates';
import fetchCurrencyData from '../helpers/fetchCurrencyData';

interface ReturnValue {
  ratesData: RatesResponse;
  availableRates: string[];
  fetchRates: (base: string) => void;
  base: string;
  setBase: (base: string) => void;
}

export default function useRatesData(): ReturnValue {
  const initialState: any = {};
  const [ratesData, setratesData] = useState(initialState);
  const initialRateKeys: string[] = [];
  const [availableRates, setAvailableRates] = useState(initialRateKeys);
  const initialBase: string = 'USD';
  const [base, setBase] = useState(initialBase);

  const fetchRates = useCallback(async (base: string = 'USD') => {
    const ratesDataResponse = await fetchCurrencyData(base);
    const availableRatesKey = Object.keys(ratesDataResponse.rates);

    setratesData(ratesDataResponse);
    setAvailableRates(availableRatesKey);
  }, []);

  useEffect(() => {
    fetchRates(base);
  }, [base, fetchRates]);

  return {
    ratesData,
    availableRates,
    fetchRates,
    base,
    setBase,
  };
}
