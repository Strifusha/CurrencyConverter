import React from 'react';
import { useQuery } from 'react-query';
import { calculateCurrencyAmount } from '../../utils/calculateCurrencyAmount';
import { fetchExchangeRate } from '../../utils/fetchExchangeRate';
import { minAmountInUSD, minAmountInEUR } from '../../utils/constants';
import { USD, EUR, UAH } from '../../utils/constants';

function Header() {
  const { data: exchangeRates } = useQuery('exchangeRates', fetchExchangeRate, {
    suspense: true,
  });

  const uahForUSD = exchangeRates ? calculateCurrencyAmount(minAmountInUSD, USD, UAH, exchangeRates.rates).toFixed(2) : '';
  const uahForEUR = exchangeRates ? calculateCurrencyAmount(minAmountInEUR, EUR, UAH, exchangeRates.rates).toFixed(2) : '';

  return (
    <header className="header">
      <div className="rate">
        <span>$ {uahForUSD} / € {uahForEUR}</span> 
      </div>
    </header>
  );
}

export default Header;

