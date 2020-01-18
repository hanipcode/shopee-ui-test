import React, { useState, useCallback } from 'react';
import { Card, Row, Col } from 'react-onsenui';
import CurrencyListItem from './CurrencyListItem';
import AddCurrencyButton from './AddCurrencyButton';
import { CurrencyOption } from '../helpers/getRatesOptions';
import { RatesResponse } from '../helpers/types/Rates';

interface Props {
  base: string;
  ratesData: RatesResponse;
  inputValue: string;
  ratesOptions?: CurrencyOption;
  setBase?: (base: string) => void;
}

function CurrencyList({ ratesOptions, ratesData, base, inputValue }: Props) {
  const initialRatesList: string[] = [];
  const [ratesList, setRatesList] = useState(initialRatesList);
  const filteredRateList = ratesList.filter(rate => rate !== base);
  const addRatesList = useCallback(
    (base: string) => {
      if (ratesList.includes(base)) {
        return;
      }
      setRatesList([...ratesList, base]);
    },
    [ratesList]
  );
  const removeRatesList = useCallback(
    (base: string) => {
      setRatesList(ratesList.filter(rateBase => rateBase !== base));
    },
    [ratesList]
  );
  const nominal = parseInt(inputValue, 10);
  return (
    <div>
      {filteredRateList.length === 0 && (
        <Card>
          <small>Anda Belum Menambahkan Kurs / Kurs sama dengan base</small>
        </Card>
      )}
      {filteredRateList.map(itemRate => (
        <CurrencyListItem
          base={base}
          itemRate={itemRate}
          rates={ratesData?.rates}
          onClickRemove={removeRatesList}
          nominal={nominal}
        />
      ))}
      <AddCurrencyButton ratesOptions={ratesOptions} onClick={addRatesList} />
    </div>
  );
}

const styles = {
  container: {
    margin: 8,
  },
};

export default CurrencyList;
