import { EventDto } from "src/event/dto/event.dt";
import { EventModel } from "./model/event-model";

export interface EventApi {

    save(eventDto: EventDto): Promise<EventModel>;
}