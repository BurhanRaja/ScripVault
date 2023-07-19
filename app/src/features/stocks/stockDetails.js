import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBalanceSheet,
  getCashFlow,
  getRevenueStmt,
  getStockHistoricalData,
  getStockSuggestion,
} from "../../api/stocks";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  cashFlow: {},
  balanceSheet: {},
  revenueStmt: {},
  suggestion: {},
  historicalData: [],
};

export const getCashFlowThunk = createAsyncThunk(
  "stockDetails/cashflow",
  async (sybmol) => {
    try {
      const res = await getCashFlow(sybmol);
      return res;
    } catch (err) {
      return err?.response.data;
    }
  }
);

export const getRevenueStmtThunk = createAsyncThunk(
  "stockDetails/revenueStmt",
  async (sybmol) => {
    try {
      const res = await getRevenueStmt(sybmol);
      return res;
    } catch (err) {
      return err?.response.data;
    }
  }
);

export const getBalanceSheetThunk = createAsyncThunk(
  "stockDetails/balanceSheet",
  async (sybmol) => {
    try {
      const res = await getBalanceSheet(sybmol);
      return res;
    } catch (err) {
      return err?.response.data;
    }
  }
);

export const getStockSuggestionThunk = createAsyncThunk(
  "stockDetails/suggestion",
  async (symbol) => {
    try {
      let res = await getStockSuggestion(symbol);
      return res;
    } catch (err) {
      return err?.response.data;
    }
  }
);

export const getStockHistoricalDataThunk = createAsyncThunk(
  "stockDetails/historicalData",
  async (symbol) => {
    try {
      let res = await getStockHistoricalData(symbol);
      return res;
    } catch (err) {
      return err?.response.data;
    }
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
      })
      .addCase(getStockSuggestionThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockSuggestionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.suggestion = payload;
      })
      .addCase(getStockSuggestionThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getStockHistoricalDataThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockHistoricalDataThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.historicalData = payload;
      })
      .addCase(getStockHistoricalDataThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearStockDetails } = stockDetailsSlice.actions;

export default stockDetailsSlice.reducer;
