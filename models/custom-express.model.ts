import { Request, Response } from "express";
import { UserWithoutPassword } from "./users.model";

export type RequestBody<T> = Request<{}, {}, T>;

export type ResponseBody<T> = Response<T>;

declare global {
  namespace Express {
    interface Request {
      user?: UserWithoutPassword;
    }
  }
}
