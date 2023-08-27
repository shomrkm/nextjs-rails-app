import Axios from "axios";

// Create the axios instance
const axios = Axios.create({
  // Detect whether on server or on client
  baseURL:
    typeof window === "undefined"
      ? process.env.NEXT_SERVER_API_URL
      : process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
  // To bypass CSRF protection when making requests to the Rail API,
  // I need to get CSRF Token (in Cookie) and then set it in header.
  xsrfCookieName: "CSRF-TOKEN",
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: true,
});

export default axios;
