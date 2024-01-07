import { AxiosResponse as Response } from "axios";

export const errors = {
  400: { message: "Invalid Request Error" },
  401: { message: "Unauthorized Error" },
  403: { message: "Forbidden Error" },
  404: { message: "Not Found Error" },
  405: { message: "Method Not Allowed Error" },
  500: { message: "Internal Server Error" },
} as const;

export type Errors = typeof errors;
export type ErrorStatus = keyof Errors;
export type ErrorsMessage = {
  [K in ErrorStatus]: Errors[K]["message"];
}[ErrorStatus];
export type Err = { message: ErrorsMessage; status: ErrorStatus };

export class HttpError extends Error {
  message: ErrorsMessage;
  status: ErrorStatus = 500;
  response: Response;
  constructor(status: ErrorStatus, response: Response) {
    super(errors[status].message);
    this.message = errors[status].message;
    this.status = status;
    this.response = response;
  }
  serialize() {
    return { message: this.message, status: this.status };
  }
}

export class BadRequestError extends HttpError {
  constructor(res: Response) {
    super(400, res);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(res: Response) {
    super(401, res);
  }
}

export class ForbiddenErrorError extends HttpError {
  constructor(res: Response) {
    super(403, res);
  }
}

export class NotFoundError extends HttpError {
  constructor(res: Response) {
    super(404, res);
  }
}

export class MethodNotAllowedError extends HttpError {
  constructor(res: Response) {
    super(405, res);
  }
}

export class InternalServerError extends HttpError {
  constructor(res: Response) {
    super(500, res);
  }
}
