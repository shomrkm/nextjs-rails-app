import { Event } from "../events";
import { User } from "../users";

export type Ticket = {
  id: number | null;
  user: User;
  event_id: number;
  comment: string;
};
