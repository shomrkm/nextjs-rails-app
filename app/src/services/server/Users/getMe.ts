import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";

export async function getMe() {
  try {
    const res = await axios.get(`/users/me`, {
      headers: buildAuthorizationHeader(),
    });
    return res.data;
  } catch (error: any) {
    return null;
  }
}
