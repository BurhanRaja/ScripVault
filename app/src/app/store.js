import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/auth";
import nominateReducer from "../features/user/nominate";
import infoReducer from "../features/user/info";
import verifyLoginReducer from "../features/verify/verifyLogin";
import sendLoginEmailReducer from "../features/email/sendLoginEmail";
import stockBSEReducer from "../features/stocks/allBSEStocks";
import stockNSEReducer from "../features/stocks/allNSEStocks";
import stockIndexesReducer from "../features/stocks/stockIndexes";
import stockTopReducer from "../features/stocks/stocksTop";
import bestMFReducer from "../features/mutualfunds/bestMF";
import bestETFReducer from "../features/etfs/bestETF";
import kycReducer from "../features/kyc/kyc";
import allMutualFundsReducer from "../features/mutualfunds/allMutualFunds";
import allEtfsReducer from "../features/etfs/allEtfs";
import updateDataReducer from "../features/user/updateData";
import stockCurrentPriceReducer from "../features/stocks/currentPrice";
import stockDetailsReducer from "../features/stocks/stockDetails";
import companyMFReducer from "../features/mutualfunds/companyMF";
import mfDetailsReducer from "../features/mutualfunds/mfDetails";
import getTransactionReducer from "../features/transaction/getTransaction";
import addTransactionReducer from "../features/transaction/addTransaction";
import walletReducer from "../features/transaction/wallet";

import stockTransactionReducer from "../features/portfolio/stockTransaction";

const reducers = combineReducers({
  authReducer,
  nominateReducer,
  infoReducer,
  verifyLoginReducer,
  sendLoginEmailReducer,
  stockTopReducer,
  stockBSEReducer,
  stockNSEReducer,
  stockIndexesReducer,
  bestMFReducer,
  bestETFReducer,
  kycReducer,
  allMutualFundsReducer,
  allEtfsReducer,
  updateDataReducer,
  stockCurrentPriceReducer,
  stockDetailsReducer,
  companyMFReducer,
  mfDetailsReducer,
  getTransactionReducer,
  addTransactionReducer,
  walletReducer,
  stockTransactionReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
