import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'react-onsenui';
import Select from 'react-select';
import ColorEnum from '../styles/color';
import { CurrencyOption } from '../helpers/getRatesOptions';

interface Props {
  base?: string;
  ratesOptions?: CurrencyOption;
  onClick?: (base: string) => void;
}

function AddCurrencyButton({ ratesOptions, onClick }: Props) {
  const [isAdding, setIsAdding] = useState(false);
  const [base, setBase] = useState('');
  return (
    <>
      {isAdding && (
        <Card>
          <Row style={styles.changeCurrencyRow}>
            <Col width="64%">
              <Select
                placeholder="Pilih Kurensi"
                onChange={({ value }) => setBase(value)}
                options={ratesOptions}
              />
            </Col>
            <Col>
              <Button
                style={styles.marginLeft}
                onClick={() => {
                  if (!!onClick) {
                    onClick(base);
                  }
                  setIsAdding(false);
                }}
                ripple
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Card>
      )}
      {!isAdding && (
        <div style={styles.container}>
          <Button
            modifier="large--quiet"
            style={styles.button}
            onClick={() => setIsAdding(true)}
            ripple
          >
            Tambah Kurensi
          </Button>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    margin: 8,
  },
  button: {
    marginTop: 8,
    color: ColorEnum.brand,
  },
  marginLeft: {
    marginLeft: 16,
  },
  changeCurrencyRow: {
    display: 'flex',
    flexDirrection: 'row',
    alignItems: 'center',
  },
};

export default AddCurrencyButton;
