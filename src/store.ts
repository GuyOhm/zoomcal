import { configureStore } from '@reduxjs/toolkit';
import { eventsSlice } from './slice';

export interface IZoomGateway {
  loadEvents: () => Promise<unknown[]>;
  bookEvent: (event: unknown) => Promise<unknown>;
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
