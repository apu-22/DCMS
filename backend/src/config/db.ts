// src/config/db.ts

import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

// Expected .env keys:
// DB_HOST, DB_USER, DB_PASSWORD, DB_NAME

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

if (!DB_HOST || !DB_USER || !DB_NAME) {
  throw new Error(
    "❌ Missing required database environment variables"
  );
}

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD ?? "",
  database: DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

export const checkDbConnection = async (): Promise<void> => {
  try {
    const connection = await pool.getConnection();

    console.log("✅ MySQL connected");

    connection.release();
  } catch (error) {
    console.error("❌ MySQL connection failed:", error);
    process.exit(1);
  }
};