import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userDriverLogin } from "./authActions";

const userToken = null;
const userInfo = sessionStorage.getItem("currentUser")
  ? JSON.parse(sessionStorage.getItem("currentUser")!)
  : null;

const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem("currentUser");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userToken = payload;
      state.userInfo = JSON.parse(sessionStorage.getItem("currentUser")!);
    });

    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
    });

    builder.addCase(userDriverLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userDriverLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userToken = payload;
      state.userInfo = JSON.parse(sessionStorage.getItem("currentUser")!);
    });
    builder.addCase(userDriverLogin.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
