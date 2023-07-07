import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllStocks } from "../../api/stocks";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  nseData: {},
};

const allNSEStocksThunk = createAsyncThunk(
  "allStocks/nse",
  async (skip, limit) => {
    const res = await getAllStocks("NSE", skip, limit);
    return res;
  }
);

const allNSEStocksSlice = createSlice({
  name: "allStocks",
  initialState,
  reducers: {
    clearNSEStocksState: () => {
      return {
        nseData: {},
      };
    },
  },
  extraReducers: (build) => {
    build
      .addCase(allNSEStocksThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allBSEStocksThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nseData = payload;
      })
      .addCase(allNSEStocksThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearBSEStocksState, clearNSEStocksState } =
  allStocksSlice.actions;

export default allStocksSlice.reducer;
