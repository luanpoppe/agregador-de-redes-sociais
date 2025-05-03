import { Browser, chromium, Page } from "playwright";
import { YoutubeScraper } from "./youtube";
import { InstagramScraper } from "./instagram";

export class ScrapePlayWright {
  page?: Page;
  browser?: Browser;
  youtube?: YoutubeScraper;
  instagram?: InstagramScraper;

  async initializae() {
    const browser = await chromium.launch({ headless: false });
    this.browser = browser;
    const context = await browser.newContext({
      storageState: "storageState.json",
    });
    const page = await context.newPage();
    this.page = page;

    this.youtube = new YoutubeScraper(this.page);
    this.instagram = new InstagramScraper(this.page);
  }

  async finalize() {
    await this.browser?.close();
  }
}

async function scrapeWebsite() {
  const scraper = new ScrapePlayWright();
  await scraper.initializae();
  const { youtube, instagram } = scraper;

  // const res = await youtube?.getYoutubeVideos("@phsantos");

  const res = await instagram?.getPosts("esperonquegoste");
  if (scraper.page?.url().includes("login")) {
    await instagram?.login();
    const res = await instagram?.getPosts("esperonquegoste");
    console.log("res: ", res);
  }
  console.log("res: ", res);
  // await scraper.finalize();
}

// scrapeWebsite();
