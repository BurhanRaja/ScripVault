import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBestBondEtf,
  getBestGoldEtf,
  getBestIndexEtf,
  getBestSectorEtf,
} from "../../api/etfs";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  bestBondETF: {},
  bestIndexETF: {},
  bestGoldETF: {},
  bestSectorETF: {},
};

export const getBestBondETFThunk = createAsyncThunk(
  "bestETF/bond",
  async ({ skip, limit }) => {
    try {
      let res = await getBestBondEtf(skip, limit);
      return res;
    } catch (err) {
      return err?.response?.data;
    }
  }
);

export const getBestIndexETFThunk = createAsyncThunk(
  "bestETF/index",
  async ({ skip, limit }) => {
    try {
      let res = await getBestIndexEtf(skip, limit);
      return res;
    } catch (err) {
      return err?.response?.data;
    }
  }
);

export const getBestGoldETFThunk = createAsyncThunk(
  "bestETF/gold",
  async ({ skip, limit }) => {
    try {
      let res = await getBestGoldEtf(skip, limit);
      return res;
    } catch (err) {
      return err?.response?.data;
    }
  }
);

export const getBestSectorETFThunk = createAsyncThunk(
  "bestETF/sector",
  async ({ skip, limit }) => {
    try {
      let res = await getBestSectorEtf(skip, limit);
      return res;
    } catch (err) {
      return err?.response?.data;
    }
  }
);

const bestETFSlice = createSlice({
  name: "bestETF",
  initialState,
  reducers: {
    clearBestETFState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(getBestBondETFThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestBondETFThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestBondETF = payload;
      })
      .addCase(getBestBondETFThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestIndexETFThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestIndexETFThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestIndexETF = payload;
      })
      .addCase(getBestIndexETFThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestGoldETFThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestGoldETFThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestGoldETF = payload;
      })
      .addCase(getBestGoldETFThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBestSectorETFThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestSectorETFThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bestSectorETF = payload;
      })
      .addCase(getBestSectorETFThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearBestETFState } = bestETFSlice.actions;

export default bestETFSlice.reducer;
