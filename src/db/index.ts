import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

// Load environment variables from .env.local
config({ path: ".env.local" });

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env.local");
}

// Initialize the Neon database connection
const sql = neon(process.env.DATABASE_URL);

// Initialize Drizzle ORM with optional logger
const db = drizzle(sql, { logger: true }); // Uncomment to enable logging

export { db };