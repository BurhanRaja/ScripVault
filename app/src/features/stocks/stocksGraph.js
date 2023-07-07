import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBalanceSheetGraph,
  getCashFlowGraph,
  getRevenueGraph,
} from "../../api/stocks";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  cashFlowGraph: {},
  balanceSheetGraph: {},
  revenueStmtGraph: {},
};

export const getCashFlowGraphThunk = createAsyncThunk(
  "stockGraph/cashflow",
  async (sybmol, duration) => {
    const res = await getCashFlowGraph(sybmol, duration);
    return res;
  }
);

export const getRevenueStmtGraphThunk = createAsyncThunk(
  "stockGraph/revenueStmt",
  async (sybmol, duration) => {
    const res = await getRevenueGraph(sybmol, duration);
    return res;
  }
);

export const getBalanceSheetGraphThunk = createAsyncThunk(
  "stockGraph/balanceSheet",
  async (sybmol, duration) => {
    const res = await getBalanceSheetGraph(sybmol, duration);
    return res;
  }
);

const stockGraphSlice = createSlice({
  name: "stockGraph",
  initialState,
  reducers: {
    clearStockGraph: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(getCashFlowGraphThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCashFlowGraphThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cashFlowGraph = payload;
      })
      .addCase(getCashFlowGraphThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBalanceSheetGraphThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBalanceSheetGraphThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.balanceSheetGraph = payload;
      })
      .addCase(getBalanceSheetGraphThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getRevenueStmtGraphThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRevenueStmtGraphThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.revenueStmtGraph = payload;
      })
      .addCase(getRevenueStmtGraphThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearStockGraph } = stockGraphSlice.actions;

export default stockGraphSlice.reducer;
