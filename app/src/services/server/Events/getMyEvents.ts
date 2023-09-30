import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";

export async function getMyEvents() {
  const { status, data } = await axios.get(`/events/my_events`, {
    headers: buildAuthorizationHeader(),
  });
  if (status !== 200) {
    throw Error("Failed to fetch data");
  }

  return data;
}
