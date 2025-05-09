import { CreateChannelBody } from "../../models/channels.model";
import { ScrapePlayWright } from "../../playwright";
import { prisma } from "../../prisma";
import { Prisma } from "../../prisma/client";

export async function createChannel(body: CreateChannelBody) {
  const scrape = new ScrapePlayWright();
  let dbBody: Prisma.ChannelsCreateInput;

  await scrape.initialize();
  if (body.platform == "youtube") {
    const { youtube } = scrape;
    const infos = await youtube?.getChannelInfo(body.channelId);
    if (!infos)
      throw new Error("Não foi possível obter as infos do canal do youtube");
    dbBody = infos;
  }

  try {
    const createdChannel = await prisma.channels.create({
      data: dbBody!,
    });

    return createdChannel;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
