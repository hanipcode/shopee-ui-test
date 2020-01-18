import React, { useState } from 'react';
import { Page, Toolbar, Col, Input, Card } from 'react-onsenui';
import ColorEnum from './styles/color';
import BaseInfo from './components/BaseInfo';
import useRatesData from './hooks/useRatesData';
import getRatesOptions from './helpers/getRatesOptions';
import CurrencyList from './components/CurrencyList';

const App: React.FC = () => {
  const { availableRates, setBase, base, ratesData } = useRatesData();
  const [inputValue, setInputValue] = useState('10');
  const ratesOptions = getRatesOptions(availableRates);
  const excludedBaseRatesOptions = ratesOptions.filter(
    option => option.value !== base
  );
  return (
    <Page
      renderToolbar={() => (
        <Toolbar style={styles.header}>
          <div className="center" style={styles.textWhite}>
            Shopee Currency
          </div>
        </Toolbar>
      )}
      className="center"
    >
      <BaseInfo ratesOptions={ratesOptions} setBase={setBase} base={base} />
      <Card>
        <Col> Nominal Mata Uang</Col>
        <Col style={styles.input} width="100%">
          <Input
            modifier="material"
            placeholder="angka nominal"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
        </Col>
      </Card>
      <CurrencyList
        base={base}
        inputValue={inputValue}
        ratesOptions={excludedBaseRatesOptions}
        ratesData={ratesData}
      />
    </Page>
  );
};

const styles = {
  header: {
    backgroundColor: ColorEnum.brand,
  },
  input: {
    marginTop: 12,
  },
  textWhite: {
    color: ColorEnum.white,
  },
};

export default App;
