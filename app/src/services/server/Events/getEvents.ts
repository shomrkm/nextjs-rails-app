import axios from "@/lib/axios/axios";
import { cookies } from "next/headers";
import { buildAuthorizationHeader } from "../util";

export async function getEvents() {
  const token = cookies().get("token");

  const res = await axios.get(`/events`, {
    headers: buildAuthorizationHeader(),
  });
  if (!res.status) {
    throw Error("Failed to fetch data");
  }

  return res.data;
}
