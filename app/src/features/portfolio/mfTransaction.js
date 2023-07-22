import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buyMutualFund } from "../../api/portfolio";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
};

export const buyMFThunk = createAsyncThunk(
  "mfTransaction/buyStock",
  async (data) => {
    try {
      let res = await buyMutualFund(data);
      return res;
    } catch (err) {
      return err?.response.data;
    }
  }
);

export const sellMFThunk = async (data) => {};

const mfTransaction = createSlice({
  name: "mfTransaction",
  initialState,
  reducers: {
    clearStockTransaction: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(buyMFThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(buyMFThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(buyMFThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearStockTransaction } = mfTransaction.actions;

export default mfTransaction.reducer;
