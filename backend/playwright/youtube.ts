import { Page } from "playwright";

export class YoutubeScraper {
  constructor(public page: Page) {}

  async getYoutubeVideos(channel: string) {
    await this.loadPage(channel);
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

  async loadPage(channel: string) {
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
