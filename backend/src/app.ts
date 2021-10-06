import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";

const app = express();
const port = 3000;

createConnection().then(async (connection) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
