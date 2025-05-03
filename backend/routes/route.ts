import express from "express";
import { initialGetController } from "../controllers/controller";
import { getPosts } from "../controllers/posts";
import { authenticateToken } from "../middlewares/authenticate-requests";
const router = express.Router();

router.route("/").post(initialGetController).get(initialGetController);
router.route("/posts").get(authenticateToken, getPosts);
export { router };
