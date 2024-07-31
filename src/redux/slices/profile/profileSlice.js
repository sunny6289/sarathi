import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileData: {
    name: "ABCD",
    dob: "1990-01-01",
    gender: "Male",
    email: "abcd@example.com",
    phone: "1234567890",
  }
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfileData(state, action) {
      state.profileData = action.payload;
    }
  }
});

export const {updateProfileData} = profileSlice.actions;
export default profileSlice.reducer;