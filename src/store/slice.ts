import { createSlice } from "@reduxjs/toolkit";
import { ZoomEvent } from "../core/entities/event";
import { loadEvents } from "../core/use-cases/load-events/loadEventsThunk";
import { bookEvent } from '../core/use-cases/book-event/bookEventThunk';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: [] as ZoomEvent[],
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(loadEvents.fulfilled, (state, action) => {
      state = action.payload;
    });
    builder.addCase(bookEvent.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  }
});
