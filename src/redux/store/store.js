import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/signin/authSlice";
import toastReducer from "../slices/toastSlice";
import sidebarReducer from "../slices/sidebar/sidebarReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    sidebar: sidebarReducer,
  }
});