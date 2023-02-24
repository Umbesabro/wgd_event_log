import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/event/dto/event.dt';
import { EventApi } from '../event-api';
import { PsqlClient } from './psql-client';

@Injectable()
export class PsqlEventClient extends PsqlClient implements EventApi {
  async save(eventDto: EventDto): Promise<EventDto> {
    const [psqlResult] = await this.psqlClient`
        insert into events (
          payload, event_name
        ) values (
          ${JSON.stringify(eventDto.payload)}, ${eventDto.name}
        )
      
        returning *
      `;
    const eventResult: EventDto = {
      id: psqlResult.id,
      payload: psqlResult.payload,
      name: psqlResult.event_name,
      createdAt: psqlResult.created_at
      
    };
    return eventResult;
  }
}
