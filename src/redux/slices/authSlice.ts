import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  otpSent: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("auth_token"),
  loading: false,
  error: null,
  otpSent: false,
};

// --- Async Thunks ---

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: { firstName: string; lastName: string; email: string; phoneNumber: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", userData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || "Registration failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", { email });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || "Login failed");
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/resend-otp", { email });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || "Resend failed");
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verify",
  async (data: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/verify", data);
      localStorage.setItem("auth_token", response.data.token);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || "Invalid OTP");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.otpSent = false;
      localStorage.removeItem("auth_token");
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyOtp.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.otpSent = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith("/rejected"), (state, action: any) => {
        state.loading = false;
        state.error = action.payload || "System error occurred";
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;