import axios from "axios";
import { RatesResponse } from "./types/Rates";

export default function fetchCurrencyData(
  base: string = "USD"
): Promise<RatesResponse> {
  return axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}`)
    .then(response => response.data);
}
