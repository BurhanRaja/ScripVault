import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/auth";
import nominateReducer from "../features/user/nominate";
import infoReducer from "../features/user/info";

const reducers = combineReducers({
  authReducer,
  nominateReducer,
  infoReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
