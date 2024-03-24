import { createAsyncThunk } from "@reduxjs/toolkit";
import { BackendUrl } from "../../api/backend-url";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (
    { Email, Password }: { Email: string; Password: string },
    { rejectWithValue }
  ) => {
    try {
      const loginRes = await fetch(`${BackendUrl}/auth/login/company`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });

      const loginData = await loginRes.json();

      sessionStorage.setItem("accessToken", loginData.token);
      sessionStorage.setItem("refreshToken", loginData.refreshToken);

      const getCurrentUserRes = await fetch(`${BackendUrl}/Auth/comapny`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      const currentUserData = await getCurrentUserRes.json();

      sessionStorage.setItem("currentUser", JSON.stringify(currentUserData));
      return loginData;
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userDriverLogin = createAsyncThunk(
  "auth/driver/login",
  async (
    { Email, Password }: { Email: string; Password: string },
    { rejectWithValue }
  ) => {
    try {
      const loginRes = await fetch(`${BackendUrl}/auth/login/driver`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });

      const loginData = await loginRes.json();

      sessionStorage.setItem("accessToken", loginData.token);
      sessionStorage.setItem("refreshToken", loginData.refreshToken);

      const getCurrentUserRes = await fetch(`${BackendUrl}/Auth/driver`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      const currentUserData = await getCurrentUserRes.json();

      sessionStorage.setItem("currentUser", JSON.stringify(currentUserData));
      return loginData;
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
