require("dotenv").config();

import config from "config";
import express from "express";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express()

app.use(express.json())

app.use(morganMiddleware);
app.use("/api/", router);

const port = config.get<number>("port");

app.listen(4000, async () =>{
    await db();
    Logger.info(`A aplicação esta funcionando na porta: ${port}`)
})