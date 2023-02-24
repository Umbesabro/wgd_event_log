import { Injectable } from '@nestjs/common';
import { PsqlEventClient } from 'src/db/psql/psql-event-client';
import { QueueDispatcher } from 'src/queue/queue-dispatcher';
import { EventDto } from './dto/event.dt';

@Injectable()
export class EventService {
  constructor(
    private readonly eventClient: PsqlEventClient,
    private readonly queueDispatcher: QueueDispatcher,
  ) {}

  async save(eventDto: EventDto): Promise<EventDto> {
    const persistedEvent = await this.eventClient.save(eventDto);
    console.log(JSON.stringify(persistedEvent));
    this.queueDispatcher.sendMessage(persistedEvent, persistedEvent.name);
    return persistedEvent;
  }
}
