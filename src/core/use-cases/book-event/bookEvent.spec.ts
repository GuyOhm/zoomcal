import { Action, Store, ThunkDispatch } from "@reduxjs/toolkit";
import { configureRtkStore, IZoomGateway, RootState } from "../../../store/store";
import { InMemoryZoomGateway } from '../../../adapters/secondary/InMemoryGateway';
import { bookEvent } from './bookEventThunk';

describe('Book zoom event', () => {

  let store: Store<RootState> & { dispatch: ThunkDispatch<RootState, IZoomGateway, Action> };
  let zoomGateway: IZoomGateway;

  beforeEach(() => {
    zoomGateway = new InMemoryZoomGateway();
    store = configureRtkStore(zoomGateway);
  });

  it('should call zoom gateway when dispatching book event', async () => {
    const spy = jest.spyOn(zoomGateway, 'bookEvent');
    await store.dispatch(bookEvent({
      title: 'event 2',
      start: "2022-10-12T06:30:00.000Z",
      end: "2022-10-12T08:00:00.000Z",
    }));
    expect(spy).toHaveBeenCalled();
  });

    it('State should add event to state if succesful', async () => {
    await store.dispatch(bookEvent({
      title: 'event 2',
      start: "2022-10-12T06:30:00.000Z",
      end: "2022-10-12T08:00:00.000Z",
    }));
    expect(store.getState().events).toEqual([{
      title: 'event 2',
      start: "2022-10-12T06:30:00.000Z",
      end: "2022-10-12T08:00:00.000Z",
    }]);
  });

});
