import { configureStore } from '@reduxjs/toolkit';

export interface IZoomGateway {
  loadEvents: () => Promise<unknown[]>;
  bookEvent: (event: unknown) => Promise<unknown>;
}

const rtkStore = (gateway?: IZoomGateway) => configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: gateway,
        },
  }),
});

export const store = rtkStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
