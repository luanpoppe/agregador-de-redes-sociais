import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import { env } from "../utils/handleEnv";
import { UserWithoutPassword } from "../models/users.model";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization!.replaceAll("Bearer ", "");
  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
      return;
    }

    console.log("typeof user: ", typeof user);
    console.log("user: ", user);

    req.user = user as UserWithoutPassword;
    next();
  });
}
