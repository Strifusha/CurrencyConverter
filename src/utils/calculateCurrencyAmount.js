//calculate the converted currency amount based on exchange rates
export const calculateCurrencyAmount = (amount, fromCurrency, toCurrency, rates) => {
  if (fromCurrency === toCurrency) return amount;
    const result = (amount / rates[fromCurrency]) * rates[toCurrency];

    return parseFloat(result.toFixed(2));
}