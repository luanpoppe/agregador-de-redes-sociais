import express from "express";
import {
  deleteRefreshToken,
  postCheckToken,
  postLogin,
  postNewTokenWithRefreshToken,
} from "../controllers/auth";

const authRouter = express.Router();

authRouter.route("/login").post(postLogin);
authRouter.route("/logout").delete(deleteRefreshToken);
authRouter.route("/check-token").post(postCheckToken);
authRouter.route("/new-token").post(postNewTokenWithRefreshToken);

export { authRouter };
