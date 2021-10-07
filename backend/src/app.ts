import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

import { cityString } from "./utils/api";

const result = dotenv.config();

const app = express();
const port = process.env.PORT;

createConnection().then(async (connection) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  cityString();

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
