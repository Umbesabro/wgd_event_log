import { Injectable } from '@nestjs/common';
import { EventApi } from 'src/db/event-api';
import { PsqlEventClient } from 'src/db/psql/psql-event-client';
import { EventDto } from './dto/event.dt';

@Injectable()
export class EventService {
  constructor(private readonly eventClient: PsqlEventClient) {}

  save(eventDto: EventDto): EventDto {
    this.eventClient.save(eventDto);
    return null;
  }
}
