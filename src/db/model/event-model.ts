import { EventDto } from 'src/event/dto/event.dt';

export class EventModel {
  payload: any;
  name: string;

  public static fromDto(eventDto: EventDto): EventModel {
    return {
      ...eventDto,
    };
  }
}
