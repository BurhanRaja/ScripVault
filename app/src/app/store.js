import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/auth";
import nominateReducer from "../features/user/nominate";
import infoReducer from "../features/user/info";
import verifyLoginReducer from "../features/verify/verifyLogin";
import sendLoginEmailReducer from "../features/email/sendLoginEmail";
import stockBSEReducer from "../features/stocks/allBSEStocks";
import stockNSEReducer from "../features/stocks/allNSEStocks";
import stockIndexesReducer from "../features/stocks/stockIndexes";

const reducers = combineReducers({
  authReducer,
  nominateReducer,
  infoReducer,
  verifyLoginReducer,
  sendLoginEmailReducer,
  stockBSEReducer,
  stockNSEReducer,
  stockIndexesReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
