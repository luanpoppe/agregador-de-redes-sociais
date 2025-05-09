import { Response } from "express";
import { RequestBody } from "../../models/custom-express.model";
import { Prisma } from "../../prisma/client";
import { createChannel } from "./channels";
import { CreateChannelBody } from "../../models/channels.model";

export async function postCreateChannel(
  req: RequestBody<CreateChannelBody>,
  res: Response
) {
  try {
    const channel = await createChannel(req.body);
    res.status(201).send(channel);
  } catch (error) {
    res.status(400).send({ err: error });
  }
}
