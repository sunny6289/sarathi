import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  status: "",
  loading: false,
  responseToast: false,
}

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      console.log(action.payload);
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.responseToast = true;
    },
    clearToast: (state) => {
      state.message = "";
      state.status = "";
      state.responseToast = false;
    }
  }
});

export const { setToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;