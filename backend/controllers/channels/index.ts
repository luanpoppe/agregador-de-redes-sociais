import { Response } from "express";
import { RequestBody } from "../../models/custom-express.model";
import { Prisma } from "../../prisma/client";
import { createChannel } from "./channels";

export async function postCreateChannel(
  req: RequestBody<Prisma.ChannelsCreateInput>,
  res: Response
) {
  const channel = await createChannel(req.body);
  res.send(channel);
}
