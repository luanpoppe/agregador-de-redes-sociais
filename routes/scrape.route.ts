import express from "express";
import { getYoutubeScrape } from "../controllers/scrape";
const scrapeRouters = express.Router();

scrapeRouters.route("/yt").get(getYoutubeScrape);
export { scrapeRouters };
