import express from "express";
import { getUsers, postUsers } from "../controllers/users";
const usersRouters = express.Router();

usersRouters.route("/users").get(getUsers).post(postUsers);
export { usersRouters };
