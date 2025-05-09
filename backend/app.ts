import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/route";
import { usersRouters } from "./routes/users.routes";
import { authRouter } from "./routes/auth.routes";
import { scrapeRouters } from "./routes/scrape.route";
import { channelRouter } from "./routes/channels.routes";
dotenv.config();

export const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/", authRouter);
app.use("/", usersRouters);
app.use("/scrape/", scrapeRouters);
app.use("/channel/", channelRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
