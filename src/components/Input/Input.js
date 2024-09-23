import { useRef, useEffect } from "react";
import { currencyOptions } from "../../utils/constants";
import "./Input.css";

function Input({amount, currency, onAmountChange, onCurrencyChange, autoFocus}) {
  const inputRef = useRef(null);
  function handleAmountChange(e) {
    onAmountChange(e)
  }

  function handleCurrencyChange(e) {
    onCurrencyChange(e)
  }

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      const preventScroll = (e) => {
        e.preventDefault();
      };

      // add a listener to prevent a scroll effect
      input.addEventListener('wheel', preventScroll);

      return () => {
        // remove the listener after unmouting
        input.removeEventListener('wheel', preventScroll);
      };
    }
  }, []);


  return (
    <div className="inputWrapper">
      <input
        placeholder="0"
        ref={inputRef}
        type="number"
        value={amount}
        onChange={handleAmountChange}
        className="currencyInput"
        autoFocus={autoFocus}
      />

      <select
        value={currency}
        onChange={handleCurrencyChange}
        className="currencySelect"
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Input;