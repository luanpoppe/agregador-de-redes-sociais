import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { env } from "../utils/handleEnv";
import { generateAccessToken } from "../utils/generateToken";
import bcrypt from "bcryptjs";
import { prisma } from "../prisma";
import { RequestBody } from "../models/custom-express.model";
import { LoginBody } from "../models/users.model";

let refreshTokens: any[] = [];

export async function postLogin(req: RequestBody<LoginBody>, res: Response) {
  const email = req.body.email;
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    res.status(400).send("Can't find user");
    return;
  }

  try {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordCorrect) {
      const { password, ...userWithoutPassword } = user;
      const authToken = generateAccessToken(userWithoutPassword);
      const refreshToken = jwt.sign(user, env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      res.status(200).json({ authToken, refreshToken });
    } else {
      res.status(401).send({ error: "Not allowed" });
    }
  } catch (error) {
    res.sendStatus(500);
  }
}

export function postNewTokenWithRefreshToken(req: Request, res: Response) {
  const refreshToken = req.body.token;
  if (!refreshToken) {
    res.sendStatus(401);
    return;
  }

  if (!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403);
    return;
  }

  jwt.verify(refreshToken, env.REFRESH_TOKEN_SECRET, (err: any, user: any) => {
    if (err) {
      res.sendStatus(403);
      return;
    }

    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken });
  });
}

export function deleteRefreshToken(req: Request, res: Response) {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
}
