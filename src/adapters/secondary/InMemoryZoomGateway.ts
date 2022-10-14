import { ZoomEvent } from '../../core/entities/event';
import { IZoomGateway } from '../../store/store';

export class InMemoryZoomGateway implements IZoomGateway {

  public events = [{
    title: 'event 1',
    start: "2022-10-12T06:30:00.000Z",
    end: "2022-10-12T08:00:00.000Z",
  }]

  async loadEvents(): Promise<ZoomEvent[]> {
    return Promise.resolve(this.events);
  }

  async bookEvent(event: ZoomEvent): Promise<ZoomEvent> {
    return Promise.resolve(event);
  }

}
