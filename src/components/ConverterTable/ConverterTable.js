import { quickConvertionOptions } from "../../utils/constants";
import { calculateCurrencyAmount } from "../../utils/calculateCurrencyAmount";
import { fetchExchangeRate } from "../../utils/fetchExchangeRate";
import { useQuery } from "react-query";
import { UAH } from "../../utils/constants";

function ConverterTable({currency}) {
  const { data: exchangeRates } = useQuery('exchangeRates', fetchExchangeRate, {
    suspense: true,
  });

  return (
    <div className="tableWrapper">
      <table>
        <caption>Convert {UAH} to {currency}</caption>
        <thead>
          <tr>
            <th>{UAH}</th>
            <th>{currency}</th>
          </tr>
        </thead>
        <tbody>
          {quickConvertionOptions.map((option) => (
            <tr key={option}>
              <th>{option} {UAH}</th>
              <td>{calculateCurrencyAmount(option, UAH, currency, exchangeRates.rates).toFixed(2)} {currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ConverterTable;