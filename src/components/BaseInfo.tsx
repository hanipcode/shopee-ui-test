import React from 'react';
import { Card, Row, Col } from 'react-onsenui';
import getCurrencyDetail from '../helpers/getCurrencyDetail';
import Select from 'react-select';
import { CurrencyOption } from '../helpers/getRatesOptions';

interface Props {
  base?: string;
  ratesOptions?: CurrencyOption;
  setBase: (base: string) => void;
}

function BaseInfo({ base = 'USD', ratesOptions = [], setBase }: Props) {
  const detailCurrency = getCurrencyDetail(base);
  const defaultValueList = ratesOptions.filter(({ value }) => value === 'USD');
  const defaultValue =
    defaultValueList.length > 0 ? defaultValueList[0] : { value: null };
  const valueByBase = ratesOptions.find(({ value }) => value === base);
  return (
    <Card>
      <h3 className="title">Detail Kurs</h3>
      <div className="content">
        <Row>
          <Col>Nama Kurs</Col>
          <Col>{detailCurrency.name}</Col>
        </Row>
        <Row>
          <Col>Kode Kurs</Col>
          <Col>{detailCurrency.code}</Col>
        </Row>
        <Row>
          <Col>Simbol</Col>
          <Col>{detailCurrency.symbol}</Col>
        </Row>
        <Row style={styles.changeCurrencyRow}>
          <Col>Ubah Base Kurs</Col>
          <Col>
            {defaultValue.value && (
              <Select
                placeholder="Pilih Kurensi"
                options={ratesOptions}
                value={valueByBase || defaultValue}
                onChange={({ value }) => setBase(value)}
              />
            )}
          </Col>
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
};

export default BaseInfo;
