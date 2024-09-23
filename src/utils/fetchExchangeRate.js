import { exchangeRate } from "./constants";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchExchangeRate = async () => {
  // Simulate a delay to show suspense effect
  await delay(2000);

  // Fetch a request after the delay
  const response = await fetch(exchangeRate);
  if (!response.ok) {
    throw new Error('Failed to fetch exchange rates');
  }
  return response.json();
};



