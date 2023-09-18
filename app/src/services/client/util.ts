import Cookies from "js-cookie";

export const buildAuthorizationHeader = () => {
  const token = Cookies.get("token");
  console.log("token: ", token);
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
};
