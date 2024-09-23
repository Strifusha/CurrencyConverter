import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Input from '../Input/Input';
import { calculateCurrencyAmount } from '../../utils/calculateCurrencyAmount';
import { fetchExchangeRate } from '../../utils/fetchExchangeRate';
import { UAH, USD } from '../../utils/constants';

function Converter() {
  const { data: exchangeRates } = useQuery('exchangeRates', fetchExchangeRate, {
    suspense: true,
  });

  const [firstCurrency, setFirstCurrency] = useState(UAH);
  const [secondCurrency, setSecondCurrency] = useState(USD);
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(calculateCurrencyAmount(1, UAH, USD, exchangeRates.rates));

  // Handler for changing the first amount (recalculates the second amount)
  function handleFirstAmountChange(e) {
    const newFirstAmount = e.target.value;
    setFirstAmount(newFirstAmount);
    setSecondAmount(calculateCurrencyAmount(newFirstAmount, firstCurrency, secondCurrency, exchangeRates.rates));
  }

  // Handler for changing the second amount (recalculates the first amount)
  function handleSecondAmountChange(e) {
    const newSecondAmount = e.target.value;
    setSecondAmount(newSecondAmount);
    setFirstAmount(calculateCurrencyAmount(newSecondAmount, secondCurrency, firstCurrency, exchangeRates.rates));
  }

  // Handler for changing the first currency (recalculates the second amount)
  function handleFirstCurrencyChange(e) {
    setFirstCurrency(e.target.value);
    setSecondAmount(calculateCurrencyAmount(firstAmount, e.target.value, secondCurrency, exchangeRates.rates));
  }

  // Handler for changing the second currency (recalculates the first amount)
  function handleSecondCurrencyChange(e) {
    setSecondCurrency(e.target.value);
    setFirstAmount(calculateCurrencyAmount(secondAmount, e.target.value, firstCurrency, exchangeRates.rates));
  }

  return (
    <div className="inputsWrapper">
      <Input
        amount={firstAmount}
        currency={firstCurrency}
        onAmountChange={handleFirstAmountChange}
        onCurrencyChange={handleFirstCurrencyChange}
        autoFocus={true}
      />

      <Input
        amount={secondAmount}
        currency={secondCurrency}
        onAmountChange={handleSecondAmountChange}
        onCurrencyChange={handleSecondCurrencyChange}
      />
    </div>
  );
}

export default Converter;
