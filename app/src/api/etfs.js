import axios from "axios";

export const getAllEtfs = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `all/etfs?skip=${skip}&limit=${limit}`
  );

  return response.data;
};

export const getBestBondEtf = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `etf/best-bond-etf?skip=${skip}&limit=${limit}`
  );

  return response.data;
};

export const getBestIndexEtf = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `etf/best-index-etf?skip=${skip}&limit=${limit}`
  );

  return response.data;
};

export const getBestGoldEtf = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `etf/best-gold-etf?skip=${skip}&limit=${limit}`
  );

  return response.data;
};

export const getBestSectorEtf = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `etf/best-sector-etf?skip=${skip}&limit=${limit}`
  );

  return response.data;
};

export const getCurrentPriceEtf = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `etf/current/price/${symbol}`
  );

  return response.data;
};

export const getDetailsEtf = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `etf/details/${symbol}`
  );

  return response.data;
};

export const getHistoricalDataEtf = async (symbol, period, interval) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `etf/historical-data/${symbol}?period=${period}&interval=${interval}`
  );

  return response.data;
};
