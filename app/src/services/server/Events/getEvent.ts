import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";
import { Event } from "@/types/events";

export async function getEvent(id: string): Promise<Event> {
  const { status, data } = await axios.get(`/events/${id}`, {
    headers: buildAuthorizationHeader(),
  });
  if (status !== 200) {
    throw Error("Failed to fetch data");
  }

  return data as Event;
}
