import express from "express";
import cors from "cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import SearchRouter from "./routes/SearchRoutes";

const result = dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT;

createConnection().then(async (connection) => {
  app.use("/search", SearchRouter);
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
