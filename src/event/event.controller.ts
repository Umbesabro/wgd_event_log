import { Body, Controller, Post } from '@nestjs/common';
import { EventDto } from './dto/event.dt';
import { EventService } from './event.service';

@Controller('api/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('create')
  async createSalesOrder(@Body() event: EventDto): Promise<EventDto> {
    console.log("Received ");
    console.log(JSON.stringify(event));
    return await this.eventService.save(event);
  }
}
