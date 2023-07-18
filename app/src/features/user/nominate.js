import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addUserNominate,
  getUserNominate,
  updateUserNominate,
} from "../../api/user";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  nominate: {},
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

export const getNominateThunk = createAsyncThunk(
  "nominate/allNominates",
  async () => {
    let res = await getUserNominate();
    return res;
  }
);

const nominateSlice = createSlice({
  name: "nominate",
  initialState,
  reducers: {
    clearUserNominateState: () => initialState,
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
      })
      .addCase(getNominatesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNominatesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nominate = payload;
      })
      .addCase(getNominatesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getSingleNominateThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleNominateThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nominate = payload;
      })
      .addCase(getSingleNominateThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearNominateState } = nominateSlice.actions;

export default nominateSlice.reducer;
