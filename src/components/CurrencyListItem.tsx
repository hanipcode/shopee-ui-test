import React from 'react';
import { Card, Row, Col, Button } from 'react-onsenui';
import accounting from 'accounting';
import getCurrencyDetail from '../helpers/getCurrencyDetail';
import convertCurrency from '../helpers/convertCurrency';
import { Rates } from '../helpers/types/Rates';

interface Props {
  base?: string;
  itemRate: string;
  rates: Rates;
  nominal: number;
  onClickRemove: (base: string) => void;
}

function BaseInfo({
  base = 'USD',
  rates,
  itemRate = 'USD',
  nominal,
  onClickRemove,
}: Props) {
  const detailCurrency = getCurrencyDetail(itemRate);
  const ammountRate = convertCurrency(1, itemRate, rates);
  const ammountNominal = convertCurrency(nominal, itemRate, rates);
  const isNanNominal = Number.isNaN(ammountNominal);
  let displayedNominal = '';
  if (!isNanNominal || ammountNominal > 0) {
    displayedNominal = `(${accounting.formatMoney(
      ammountNominal,
      detailCurrency.symbol,
      4
    )})`;
  }
  return (
    <Card>
      <h3 className="title">
        {detailCurrency.code} {displayedNominal}
      </h3>
      <div className="content">
        <Row>
          <Col>{detailCurrency.name}</Col>
        </Row>
        <Row>
          <Col>{`1 ${base} = ${ammountRate.toFixed(4)} ${
            detailCurrency.code
          }`}</Col>
        </Row>
        <Row>
          <Button
            onClick={() => onClickRemove(itemRate)}
            modifier="large--quiet"
            style={styles.button}
          >
            Hapus Kurs
          </Button>
        </Row>
      </div>
    </Card>
  );
}

const styles = {
  changeCurrencyRow: {
    display: 'flex',
    flexDirrection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    marginTop: 12,
    color: 'red',
  },
};

export default BaseInfo;
