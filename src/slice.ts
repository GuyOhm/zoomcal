import { createSlice } from "@reduxjs/toolkit";
import { ZoomEvent } from "./event";
import { loadEvents } from "./loadEventsThunk";

export const eventsSlice = createSlice({
  name: 'events',
  initialState: [] as ZoomEvent[],
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(loadEvents.fulfilled, (state, action) => {
      state = action.payload;
    });
  }
});
