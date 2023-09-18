import { User } from "../users";

export type Event = {
  id: string | null;
  name: string;
  place: string;
  start_at: string;
  end_at: string;
  content: string;
  owner: User;
};
