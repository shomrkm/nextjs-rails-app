import { User } from "../users";

export type Ticket = {
  id: string | null;
  user: User;
  event: Event;
  comment: string;
};
