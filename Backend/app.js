import express from "express";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";
import cors from "cors";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({
    msg: "Health check",
  });
});

export { app };
