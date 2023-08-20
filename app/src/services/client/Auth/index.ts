import { defaultHeaders, handleResolve } from "..";

export const path = "http://127.0.0.1:3010/auth/github";

export const auth = (): Promise<void> => {
  return fetch(path, {
    method: "POST",
    headers: defaultHeaders,
  }).then(handleResolve);
};
