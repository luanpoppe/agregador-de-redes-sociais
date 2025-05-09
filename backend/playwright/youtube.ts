import { Page } from "playwright";
import { Prisma } from "../prisma/client";

export class YoutubeScraper {
  constructor(public page: Page) {}

  async getYoutubeVideos(channel: string) {
    await this.loadVideosPage(channel);
    await this.scrollAndWait();
    await this.scrollAndWait();
    await this.scrollAndWait();

    const videoData = await this.page.$$eval(
      "ytd-rich-item-renderer > #content",
      (contents) =>
        contents.map((content) => {
          const titleElement = content.querySelector("#video-title");
          const thumbnail = content.querySelector("yt-image img");
          const dateReleased = content.querySelectorAll(
            "#metadata-line span"
          )[1];
          const link =
            content.querySelector<HTMLAnchorElement>("#video-title-link");

          return {
            title: titleElement?.textContent?.trim(),
            thumbnail: thumbnail?.getAttribute("src"),
            dateReleased: dateReleased?.textContent,
            url: link?.href,
          };
        })
    );

    return videoData;
  }

  async getChannelInfo(channel: string) {
    const url = `https://www.youtube.com/${channel}`;

    await this.page.goto(url, { waitUntil: "domcontentloaded" });

    await this.page.waitForSelector("yt-dynamic-text-view-model > h1 > span");

    const tituloLocator = this.page.locator(
      "yt-dynamic-text-view-model > h1 > span"
    );
    const imagemLocator = this.page.locator("yt-avatar-shape img");
    const titulo = await tituloLocator.innerText();
    const imagem = await imagemLocator.getAttribute("src");

    const infos: Prisma.ChannelsCreateInput = {
      channelId: channel,
      name: titulo,
      profilePicture: imagem,
    };

    return infos;
  }

  async loadVideosPage(channel: string) {
    const url = `https://www.youtube.com/${channel}/videos`;

    await this.page.goto(url, { waitUntil: "domcontentloaded" });

    await this.page.waitForSelector(
      "ytd-rich-item-renderer > #content #video-title"
    );
  }

  async scrollAndWait() {
    await this.page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await this.page.waitForTimeout(1000);
  }
}
