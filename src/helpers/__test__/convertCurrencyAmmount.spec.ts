import convertCurrencyAmmount from "../convertCurrencyAmmount";

describe("currency converter of ammount", () => {
  it("can convert currency from one to another", () => {
    const USD_INPUT = 2;
    const USD_TO_IDR_RATIO = 14000;
    const EXPECTED_VALUE = 28000;
    expect(convertCurrencyAmmount(USD_INPUT, USD_TO_IDR_RATIO)).toEqual(
      EXPECTED_VALUE
    );
  });
});
