import { Action, Store, ThunkDispatch } from "@reduxjs/toolkit";
import { InMemoryZoomGateway } from "./InMemoryGateway";
import { loadEvents } from "./loadEventsThunk";
import { configureRtkStore, IZoomGateway, RootState } from "./store";

describe('Load zoom events', () => {

  let store: Store<RootState> & { dispatch: ThunkDispatch<RootState, IZoomGateway, Action> };
  let zoomGateway: IZoomGateway;

  beforeEach(() => {
    zoomGateway = new InMemoryZoomGateway();
    store = configureRtkStore(zoomGateway);
  });

  it('State should contain empty events as initial state', () => {
    expect(store.getState().events).toEqual([]);
  });

  it('should call zoom gateway when dispatching load events', async () => {
    const spy = jest.spyOn(zoomGateway, 'loadEvents');
    await store.dispatch(loadEvents());
    expect(spy).toHaveBeenCalled();
  });

});
