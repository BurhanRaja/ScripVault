import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBalanceSheet, getCashFlow, getRevenueStmt } from "../../api/stocks";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  cashFlow: {},
  balanceSheet: {},
  revenueStmt: {},
};

export const getCashFlowThunk = createAsyncThunk(
  "stockDetails/cashflow",
  async (sybmol, duration) => {
    const res = await getCashFlow(sybmol, duration);
    return res;
  }
);

export const getRevenueStmtThunk = createAsyncThunk(
  "stockDetails/revenueStmt",
  async (sybmol, duration) => {
    const res = await getRevenueStmt(sybmol, duration);
    return res;
  }
);

export const getBalanceSheetThunk = createAsyncThunk(
  "stockDetails/balanceSheet",
  async (sybmol, duration) => {
    const res = await getBalanceSheet(sybmol, duration);
    return res;
  }
);

const stockDetailsSlice = createSlice({
  name: "stockDetails",
  initialState,
  reducers: {
    clearStockDetails: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(getCashFlowThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCashFlowThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cashFlow = payload;
      })
      .addCase(getCashFlowThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBalanceSheetThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBalanceSheetThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.balanceSheet = payload;
      })
      .addCase(getBalanceSheetThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getRevenueStmtThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRevenueStmtThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.revenueStmt = payload;
      })
      .addCase(getRevenueStmtThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearStockDetails } = stockDetailsSlice.actions;

export default stockDetailsSlice.reducer;
