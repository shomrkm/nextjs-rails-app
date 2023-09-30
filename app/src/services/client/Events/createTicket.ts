import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";

export async function createTicket({
  eventId,
  comment,
}: {
  eventId: number;
  comment: string;
}) {
  const res = (await axios.post(
    `/events/${eventId}/tickets`,
    { comment },
    { headers: buildAuthorizationHeader() }
  )) as any;
  if (!res.status) {
    throw Error("Failed to add Event");
  }

  return res.data;
}
