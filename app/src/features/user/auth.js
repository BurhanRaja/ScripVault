import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../../api/user";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  token: "",
};

export const userRegisterThunk = createAsyncThunk(
  "auth/register",
  async (data) => {
    let res = await userRegister(data);
    return res;
  }
);

export const userLoginThunk = createAsyncThunk("auth/login", async (data) => {
  let res = await userLogin(data);
  return res;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUserAuthState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(userRegisterThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegisterThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(userRegisterThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(userLoginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = payload.token;
      })
      .addCase(userLoginThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearUserAuthState } = authSlice.actions;

export default authSlice.reducer;
