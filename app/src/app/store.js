import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/auth";
import nominateReducer from "../features/user/nominate";

const reducers = combineReducers({
  authReducer,
  nominateReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
