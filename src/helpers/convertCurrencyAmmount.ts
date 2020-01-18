export default function convertCurrencyAmmount(
  input: number,
  rate: number
): number {
  return input * rate;
}
