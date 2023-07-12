import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBestDebtFunds,
  getAllBestEquityFunds,
  getAllBestLongTermFunds,
  getAllBestReturnsFunds,
  getAllBestTaxSaverFunds,
} from "../../api/mutual_funds";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  bestDebt: {},
  bestLongTerm: {},
  bestReturns: {},
  bestEquity: {},
  bestTaxSaver: {},
};

export const getBestDebtFundsThunk = createAsyncThunk(
  "mfBest/debt",
  async () => {
    try {
      let res = await getAllBestDebtFunds();
      return res;
    } catch (err) {
      return err;
    }
  }
);

export const getBestLongTermFundsThunk = createAsyncThunk(
  "mfBest/longTerm",
  async () => {
    try {
      let res = await getAllBestLongTermFunds();
      return res;
    } catch (err) {
      return err;
    }
  }
);

export const getBestReturnsFundsThunk = createAsyncThunk(
  "mfBest/returns",
  async () => {
    try {
      let res = await getAllBestReturnsFunds();
      return res;
    } catch (err) {
      return err;
    }
  }
);

export const getBestEquityFundsThunk = createAsyncThunk(
  "mfBest/equity",
  async () => {
    try {
      let res = await getAllBestEquityFunds();
      return res;
    } catch (err) {
      return err;
    }
  }
);

export const getBestTaxSaverFundsThunk = createAsyncThunk(
  "mfBest/taxSaver",
  async () => {
    try {
      let res = await getAllBestTaxSaverFunds();
      return res;
    } catch (err) {
      return err;
    }
  }
);

const bestMFSlice = createSlice({
  name: "mfBest",
  initialState,
  reducers: {
    clearBestDebtState: () => initialState,
    clearBestLongTermState: () => initialState,
    clearBestTaxSaverState: () => initialState,
    clearBestEquityState: () => initialState,
    clearBestReturnsState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(getBestDebtFundsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestDebtFundsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestDebt = payload;
      })
      .addCase(getBestDebtFundsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestLongTermFundsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestLongTermFundsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestLongTerm = payload;
      })
      .addCase(getBestLongTermFundsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestReturnsFundsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestReturnsFundsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestReturns = payload;
      })
      .addCase(getBestReturnsFundsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestEquityFundsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestEquityFundsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestEquity = payload;
      })
      .addCase(getBestEquityFundsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestTaxSaverFundsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestTaxSaverFundsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestTaxSaver = payload;
      })
      .addCase(getBestTaxSaverFundsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {
  clearBestDebtState,
  clearBestEquityState,
  clearBestLongTermState,
  clearBestReturnsState,
  clearBestTaxSaverState,
} = bestMFSlice.actions;

export default bestMFSlice.reducer;
