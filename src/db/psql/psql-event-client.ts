import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/event/dto/event.dt';
import { EventApi } from '../event-api';
import { EventModel } from '../model/event-model';
import { PsqlClient } from './psql-client';


@Injectable()
export class PsqlEventClient extends PsqlClient implements EventApi {
 async  save(eventDto: EventDto): Promise<EventModel> {
    const result = await this.psqlClient`
        insert into events (
          payload, event_name
        ) values (
          ${JSON.stringify(eventDto.payload)}, ${eventDto.name}
        )
      
        returning *
      `;
    console.log(JSON.stringify(result));
    return null;
  }
}
