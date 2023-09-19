import axios from "@/lib/axios/axios";
import { buildAuthorizationHeader } from "../util";
import { User } from "@/types/users";

export async function getMe() {
  try {
    const res = await axios.get(`/users/me`, {
      headers: buildAuthorizationHeader(),
    });
    return res.data as User;
  } catch (error: any) {
    return null;
  }
}
