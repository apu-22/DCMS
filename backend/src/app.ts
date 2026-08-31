// src/app.ts

import express from "express";
import type { Application, Request, Response } from "express";import cors from "cors";
// import authRoutes from "./routes/authRoutes";

const app: Application = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "DCMS API is running" });
});

// app.use("/api/auth", authRoutes);

export default app;