import { EventDto } from "src/event/dto/event.dt";

export interface EventApi {

    save(eventDto: EventDto): Promise<EventDto>;
}