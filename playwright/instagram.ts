import { Page } from "playwright";
import { env } from "../utils/handleEnv";

export class InstagramScraper {
  constructor(public page: Page) {}

  async getPosts(page: string) {
    await this.loadPage(page);
    await this.scrollAndWait();
    await this.scrollAndWait();
    await this.scrollAndWait();

    const main = this.page.locator("main");
    const posts = await main
      .locator("div > div > div > div > div > div > div")
      .all();

    const final = [];
    for (const p of posts) {
      const a = p.locator("a");
      const qtdElementos = await a.count();
      if (!qtdElementos) continue;

      const href = await a.getAttribute("href");
      const alt = await a
        .locator("div")
        .nth(0)
        .locator("div")
        .nth(0)
        .locator("img")
        .getAttribute("alt");

      final.push({
        href,
        alt,
      });
    }

    return final;
  }

  async loadPage(page: string) {
    const url = `https://www.instagram.com/${page}/`;

    await this.page.goto(url, { waitUntil: "domcontentloaded" });
    await this.page.waitForSelector("main");
  }

  async scrollAndWait() {
    await this.page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await this.page.waitForTimeout(1000);
  }

  async login() {
    await this.page.goto("https://www.instagram.com/accounts/login");
    await this.page.waitForSelector("input");

    const allInputs = this.page.locator("input");
    await allInputs.nth(0).fill("alt_191");
    await allInputs.nth(1).fill(env.INSTAGRAM_PASSWORD);
    await this.page.click('button[type="submit"]');

    await this.page.waitForTimeout(5000);
    await this.page.context().storageState({ path: "storageState.json" });
  }
}
