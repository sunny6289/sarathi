import { createSlice } from "@reduxjs/toolkit";
import { TEMP_EVENTS } from "../../../rawData/tempEvents";

const initialState = {
  data: TEMP_EVENTS,
};

const newEventSlice = createSlice({
  name: "newEvent",
  initialState,
  reducers: {
    createEvent: (state, action) => {
      const {src, title, place, Date, Time, organizedBy} = action.payload;
      state.data.push({
        id: `event${state.data.length + 1}`,
        src,
        title,
        place,
        Date,
        Time,
        organizedBy,
      })
    }
  },
});

export const { createEvent } = newEventSlice.actions;
export default newEventSlice.reducer;
