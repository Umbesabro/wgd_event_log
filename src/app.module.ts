import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PsqlEventClient } from './db/psql/psql-event-client';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';
import { QueueDispatcher } from './queue/queue-dispatcher';

@Module({
  imports: [],
  controllers: [AppController, EventController],
  providers: [AppService, PsqlEventClient, EventService, QueueDispatcher],
})
export class AppModule {}
