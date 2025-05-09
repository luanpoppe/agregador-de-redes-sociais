import { prisma } from "../../prisma";
import { Prisma } from "../../prisma/client";

export async function createChannel(body: Prisma.ChannelsCreateInput) {
  const createdChannel = await prisma.channels.create({
    data: { ...body },
  });

  return createdChannel;
}
