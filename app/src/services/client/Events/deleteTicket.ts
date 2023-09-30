import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";

export async function deleteTicket({
  eventId,
  ticketId,
}: {
  eventId: number;
  ticketId: number;
}) {
  const res = (await axios.delete(`/events/${eventId}/tickets/${ticketId}`, {
    headers: buildAuthorizationHeader(),
  })) as any;
  if (!res.status) {
    throw Error("Failed to cancel Event");
  }

  return res.data;
}
