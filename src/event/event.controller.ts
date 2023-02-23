import { Body, Controller, Post } from '@nestjs/common';
import { EventDto } from './dto/event.dt';
import { EventService } from './event.service';

@Controller('api/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('create')
  createSalesOrder(@Body() event: EventDto): EventDto {
    this.eventService.save(event);
    return null;
  }
}
