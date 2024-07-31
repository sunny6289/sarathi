import { createSlice } from "@reduxjs/toolkit";
import { TEMP_EMERGENCIES } from "../../../rawData/emergencies";

const initialState = {
  data: TEMP_EMERGENCIES,
};

const emergencySlice = createSlice({
  name: "emergency",
  initialState,
  reducers: {
    createEmergency: (state, action) => {
      const {
        contactNumber,
        description,
        emailAddress,
        fullName,
        helptype,
        location,
        urgency,
        date,
        time,
      } = action.payload;
      state.data.push({
        id: `emer${state.data.length + 1}`,
        name: fullName,
        type: helptype,
        location,
        date,
        time,
        description,
        severity: urgency,
        mobileNo: contactNumber,
        mailId: emailAddress,
      })
    },
  },
});

export const {createEmergency} = emergencySlice.actions;
export default emergencySlice.reducer;
