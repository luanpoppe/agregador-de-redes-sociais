import jwt from "jsonwebtoken";
import { Request } from "express";
import bcrypt from "bcryptjs";
import { RequestBody, ResponseBody } from "../models/custom-express.model";
import { User, UserWithoutPassword } from "../models/users.model";
import { prisma } from "../prisma";
import { generateAccessToken } from "../utils/generateToken";
import { env } from "../utils/handleEnv";
import { TokensModel } from "../models/auth.model";

export async function postUsers(
  req: RequestBody<User>,
  res: ResponseBody<UserWithoutPassword & TokensModel>
) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user: User = { ...req.body, password: hashedPassword };
    const userCreated = await prisma.users.create({
      data: user,
    });

    const { password, ...userWithoutPassword } = userCreated;
    const authToken = generateAccessToken(userWithoutPassword);
    const refreshToken = jwt.sign(user, env.REFRESH_TOKEN_SECRET);
    res.status(201).send({ ...userWithoutPassword, authToken, refreshToken });
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getUsers(
  req: Request,
  res: ResponseBody<UserWithoutPassword[]>
) {
  const users = await prisma.users.findMany();
  const usersWithoutPassword: UserWithoutPassword[] = users.map((u) => {
    const { password, ...user } = u;
    return user;
  });
  res.json(usersWithoutPassword);
}
