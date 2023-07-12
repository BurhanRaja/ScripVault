import axios from "axios";

export const getAllStocks = async (symbol, skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `all/stocks/${symbol}?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getCurrentPriceStocks = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `stock/currentprice/${symbol}`
  );
  return response.data;
};

export const getFinancialRatios = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `stock/financial/ratios/${symbol}`
  );
  return response.data;
};

export const getRevenueGraph = async (symbol, duration = "yearly") => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `revenue/statement/graph/${symbol}?duration=${duration}`
  );
  return response.data;
};

export const getBalanceSheetGraph = async (symbol, duration = "yearly") => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `balance/sheet/graph/${symbol}?duration=${duration}`
  );
  return response.data;
};

export const getCashFlowGraph = async (symbol, duration = "yearly") => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `cash/flow/graph/${symbol}?duration=${duration}`
  );
  return response.data;
};

export const getStockInfo = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `stock/info/${symbol}`
  );
  return response.data;
};

export const getBalanceSheet = async (symbol, duration) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `stock/stock/balancesheet/${symbol}?duration=${duration}`
  );
  return response.data;
};

export const getCashFlow = async (symbol, duration) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `stock/cash/flow/${symbol}?duration=${duration}`
  );
  return response.data;
};

export const getRevenueStmt = async (symbol, duration) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `stock/income/statement/${symbol}?duration=${duration}`
  );
  return response.data;
};

export const getIndexes = async () => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `stock/index`
  );
  return response.data;
};

export const getTopStocks = async () => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + "top/stocks"
  );
  return response.data;
};
