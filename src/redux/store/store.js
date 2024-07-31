import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/signin/authSlice";
import toastReducer from "../slices/toastSlice";
import sidebarReducer from "../slices/sidebar/sidebarReducer";
import newEventReducer from "../slices/allEvents/newEventSlice";
import profileReducer from "../slices/profile/profileSlice";
import emergencyReducer from "../slices/emergency/emergencySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    sidebar: sidebarReducer,
    newEvent: newEventReducer,
    profile: profileReducer,
    emergency: emergencyReducer,
  }
});