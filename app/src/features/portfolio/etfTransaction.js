import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buyETF } from "../../api/portfolio";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
};

export const buyETFThunk = createAsyncThunk(
  "etfTransaction/buyETF",
  async (data) => {
    try {
      let res = await buyETF(data);
      return res;
    } catch (err) {
      return err?.response.data;
    }
  }
);

export const sellMFThunk = async (data) => {};

const etfTransaction = createSlice({
  name: "etfTransaction",
  initialState,
  reducers: {
    clearETFTransaction: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(buyETFThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(buyETFThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(buyETFThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearETFTransaction } = etfTransaction.actions;

export default etfTransaction.reducer;
