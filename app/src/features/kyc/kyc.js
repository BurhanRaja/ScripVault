import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addKyc } from "../../api/kyc";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
};

export const addKycThunk = createAsyncThunk("kyc/add", async (data) => {
  try {
    let res = await addKyc(data);
    return res;
  } catch (err) {
    return err;
  }
});

export const approveKycThunk = createAsyncThunk("", async () => {
  try {
    // let res = await
  } catch (err) {}
});

const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    clearKycState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(addKycThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addKycThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addKycThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearKycState } = kycSlice.actions;

export default kycSlice.reducer;
