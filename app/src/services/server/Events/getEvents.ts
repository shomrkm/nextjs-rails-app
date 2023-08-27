import axios from "@/lib/axios/axios";

export async function getEvents() {
  const res = (await axios.get(`/events`)) as any;
  if (!res.status) {
    throw Error("Failed to fetch data");
  }

  return res.data;
}
