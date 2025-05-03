import jwt from "jsonwebtoken";
import { env } from "./handleEnv";

export function generateAccessToken(user: any) {
  return jwt.sign(user, env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}
