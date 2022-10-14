import { configureStore } from '@reduxjs/toolkit';
import { ZoomEvent } from '../core/entities/event';
import { eventsSlice } from './slice';

export interface IZoomGateway {
  loadEvents: () => Promise<ZoomEvent[]>;
  bookEvent: (event: ZoomEvent) => Promise<ZoomEvent>;
}

export const configureRtkStore = (gateway?: IZoomGateway) => configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: gateway,
        },
  }),
});

export const store = configureRtkStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
