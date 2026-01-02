import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ["Authorization", "Content-type"],
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "PUT"],
  }),
);

// routes imports

import { healthcheck } from "./controllers/healthcheck.controllers.js";
app.use("/api/v1/healthcheck", healthcheck);

export default app;
