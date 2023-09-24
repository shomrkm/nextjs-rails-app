import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";

export async function deleteEvent(id: string) {
  const res = (await axios.delete(`/events/${id}`, {
    headers: buildAuthorizationHeader(),
  })) as any;
  if (!res.status) {
    throw Error("Failed to delete event");
  }

  return res.data;
}
