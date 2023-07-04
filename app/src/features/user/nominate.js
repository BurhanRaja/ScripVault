import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUserNominate, updateUserNominate } from "../../api/user";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
};

export const addNominateThunk = createAsyncThunk(
  "nominate/add",
  async (data) => {
    let res = await addUserNominate(data);
    return res;
  }
);

export const updateNominateThunk = createAsyncThunk(
  "nominate/update",
  async (data) => {
    let res = await updateUserNominate(data);
    return res;
  }
);

const nominateSlice = createSlice({
  name: "nominate",
  initialState,
  reducers: {
    clearNominateState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(addNominateThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNominateThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addNominateThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })
      .addCase(updateNominateThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNominateThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateNominateThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearNominateState } = nominateSlice.actions;

export default nominateSlice.reducer;