import fetchCurrencyData from "../fetchCurrencyData";
if (process.env.SKIP_INTEGRATION) {
  describe("integration skipped", () => {
    it("skipping the integration test", () => {
      expect(true).toBe(true);
    });
  });
} else {
  describe("fetchCurrency", () => {
    it("default to usd base", done => {
      fetchCurrencyData().then(data => {
        expect(data.base).toEqual("USD");
        done();
      });
    });

    it("return the same as inputed base", done => {
      fetchCurrencyData("IDR").then(data => {
        expect(data.base).toEqual("IDR");
        done();
      });
    });
  });
}
