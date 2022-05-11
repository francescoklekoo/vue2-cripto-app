const BASE_URL = "https://api.coingecko.com/api/v3/";
const MARKETS =
  "coins/markets?vs_currency=eur&order=market_cap_desc&page=1&sparkline=false";
const COINS_ID = "coins/";

export const getMarkets = async () => {
  const response = await fetch(`${BASE_URL}${MARKETS}`);
  return await response.json();
};

export const getCoinDetail = async (id) => {
  const response = await fetch(`${BASE_URL}${COINS_ID}${id}`);
  return await response.json();
};
