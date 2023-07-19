import axios from "axios";

export const getAllMutualFund = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/all?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

// ------------------------------------------ Category --------------------------------------------

export const getAllUTIFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/uti?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllUnionFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/union?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllTataFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/tata?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllSBIFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/sbi?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllRelianceFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/reliance?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllNipponFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/nippon?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllNaviFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/navi?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllMotilalFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/motilal?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllMahindraFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/mahindra?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllLICFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/lic?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllKotakFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/kotak?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllHDFCFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/hdfc?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllIDBIFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/idbi?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllICICIFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/icici?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllHSBCFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/hsbc?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllFranklinFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/franklin?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllAxisFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/axis?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllAdityaFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/aditya?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

// ----------------------------------- Best Funds --------------------------------------------------

export const getAllBestDebtFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/best-debt?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllBestLongTermFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/best-long-duration?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllBestReturnsFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/best-returns?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllBestEquityFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/best-equity?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

export const getAllBestTaxSaverFunds = async (skip, limit) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/best-tax-saver?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

// ------------------------------------ Mutual Funds ----------------------------------
export const getHistoryFunds = async (symbol, start, end, interval) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API +
      `mutualfund/history/${symbol}?start=${start}&end=${end}&interval=${interval}`
  );
  return response.data;
};

export const getDetailsFunds = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `mutualfund/details/${symbol}`
  );
  return response.data;
};

export const getCurrentPriceFunds = async (symbol) => {
  const response = await axios.get(
    process.env.REACT_APP_STOCK_API + `mutualfund/current/price/${symbol}`
  );
  return response.data;
};
