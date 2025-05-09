import { Response, Request } from "express";
import { ScrapePlayWright } from "../playwright";

export async function getYoutubeScrape(
  req: Request<{}, {}, {}, { yt: string }>,
  res: Response
) {
  try {
    const scraper = new ScrapePlayWright();
    await scraper.initialize();
    const { youtube } = scraper;

    const youtubeInfo = await youtube?.getYoutubeVideos(req.query.yt);
    res.status(200).send(youtubeInfo);
  } catch (error) {
    res.sendStatus(500);
  }
}
