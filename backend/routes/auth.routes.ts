import express from "express";
import {
  deleteRefreshToken,
  postLogin,
  postNewTokenWithRefreshToken,
} from "../controllers/auth";

const authRouter = express.Router();

authRouter.route("/login").post(postLogin);
authRouter.route("/logout").delete(deleteRefreshToken);
authRouter.route("/new-token").post(postNewTokenWithRefreshToken);

export { authRouter };
