import { buildAuthorizationHeader } from "@/services/server/util";

import axios from "./axios/axios";
import {
  BadRequestError,
  ForbiddenErrorError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from "./error";
import { AxiosResponse as Response } from "axios";

// TODO: method が GET 以外でも共通で使えるようにリファクタリングする
export const getRequestFromServer = async <T>(path: string) => {
  const res = await axios.get<T>(`${path}`, {
    headers: buildAuthorizationHeader(),
  });
  return divideResponse<T>(res);
};

const divideResponse = async <T>(res: Response) => {
  if (res.status === 400) {
    throw new BadRequestError(res);
  } else if (res.status === 401) {
    // バックエンドから 401 が返ってくる場合は、現在のセッションは無効なので破棄する
    // await logout(userId);
    throw new UnauthorizedError(res);
  } else if (res.status === 403) {
    throw new ForbiddenErrorError(res);
  } else if (res.status === 404) {
    throw new NotFoundError(res);
  } else if (res.status == 500) {
    throw new InternalServerError(res);
  }

  return res;
};
