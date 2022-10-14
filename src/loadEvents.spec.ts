import { Action, Store, ThunkDispatch } from "@reduxjs/toolkit";
import { configureRtkStore, IZoomGateway, RootState } from "./store";

describe('Load zoom events', () => {

  let store: Store<RootState> & { dispatch: ThunkDispatch<RootState, IZoomGateway, Action> };

  beforeEach(() => {
    store = configureRtkStore();
  });

  it('State should contain empty events as initial state', () => {
    expect(store.getState().events).toEqual([]);
  });

});
