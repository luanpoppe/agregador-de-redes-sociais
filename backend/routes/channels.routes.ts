import express from "express";
import { postCreateChannel } from "../controllers/channels";
const channelRouter = express.Router();

channelRouter.route("/").post(postCreateChannel);
export { channelRouter };
