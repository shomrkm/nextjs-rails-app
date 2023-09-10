import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";

export async function getEvents() {
  const { status, data } = await axios.get(`/events`, {
    headers: buildAuthorizationHeader(),
  });
  if (status !== 200) {
    throw Error("Failed to fetch data");
  }

  return data;
}
