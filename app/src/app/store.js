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
import kycReducer from "../features/kyc/kyc";

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
  kycReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
