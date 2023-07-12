import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopStocks } from "../../api/stocks";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  stocks: {}
};

export const getStockTopThunk = createAsyncThunk("stocksTop/get", async () => {
  try {
    let res = await getTopStocks();
    return res;
  } catch (err) {
    return err;
  }
});

const stockTopSlice = createSlice({
  name: "stocksTop",
  initialState,
  reducers: {
    clearStockTopState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(getStockTopThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockTopThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stocks = payload;
      })
      .addCase(getStockTopThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearStockTopState } = stockTopSlice.actions;

export default stockTopSlice.reducer;
