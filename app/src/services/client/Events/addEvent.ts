import axios from "@/lib/axios/axios";
import { Event } from "@/types/events";
import { buildAuthorizationHeader } from "../util";

export async function addEvent(values: Omit<Event, "id" | "owner">) {
  const res = (await axios.post(
    `/events`,
    { ...values },
    { headers: buildAuthorizationHeader() }
  )) as any;
  if (!res.status) {
    throw Error("Failed to add Event");
  }

  return res.data;
}
