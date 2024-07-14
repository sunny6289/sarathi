import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/signin/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});