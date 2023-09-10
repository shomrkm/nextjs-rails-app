import { cookies } from "next/headers";

export const buildAuthorizationHeader = () => {
  const token = cookies().get("token")?.value;
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
};
