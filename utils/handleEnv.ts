import { config } from "dotenv";
config();

export const env = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
  INSTAGRAM_PASSWORD: process.env.INSTAGRAM_PASSWORD!,
};
