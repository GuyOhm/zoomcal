import { ZoomEvent } from '../../core/entities/event';
import { IZoomGateway } from '../../store/store';

export class HttpZoomGateway implements IZoomGateway {

  // see https://marketplace.zoom.us/docs/api-reference/zoom-api/methods/#operation/meetingCreate

  constructor(public baseUrl: string, public userId: string) {
    this.baseUrl = baseUrl; // https://api.zoom.us/v2/
    this.userId = userId; // to add to .env file
  }

  async loadEvents(): Promise<ZoomEvent[]> {
    // return axios.get(`${this.baseUrl}/users/${userId}/meetings`);
    return {} as unknown as ZoomEvent[];
  }

  async bookEvent(event: ZoomEvent): Promise<ZoomEvent> {
    // return axios.post(`${this.baseUrl}/users/${userId}/meetings`);
    return {} as unknown as ZoomEvent;
  }

}
