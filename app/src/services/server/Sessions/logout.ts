import axios from "@/lib/axios/axios";

export async function logout() {
  try {
    await axios.delete(`/logout`);
  } catch (err) {
    throw Error("Failed to Logout");
  }
}
