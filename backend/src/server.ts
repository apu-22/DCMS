// src/server.ts

import dotenv from "dotenv";
import app from "./app.js";
import { checkDbConnection } from "./config/db.js";

dotenv.config();


const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  await checkDbConnection();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();