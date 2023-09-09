import axios from "@/lib/axios/axios";
import { cookies } from "next/headers";

export async function getEvents() {
  const token = cookies().get("token");

  // TODO: Refactoring
  const res = (await axios.get(`/events`, {
    headers: { Authorization: token ? `Bearer ${token?.value ?? ""}` : "" },
  })) as any;
  if (!res.status) {
    throw Error("Failed to fetch data");
  }

  return res.data;
}
