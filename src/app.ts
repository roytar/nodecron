// app.ts
import "dotenv/config"; // Initializes environment variables immediately
import mysql from "mysql2/promise";
import cron from "node-cron";
import cronstrue from "cronstrue";

const log = (msg: string): void =>
  console.log(`[${new Date().toISOString()}] [INFO] ${msg}`);
const logError = (msg: string, err: unknown): void =>
  console.error(`[${new Date().toISOString()}] [ERROR] ${msg}`, err);
const requiredEnv = (name: string): string => {
  const value = process.env[name];
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

log("Always-on TypeScript worker process started.");

// 1. Resolve and Validate Cron Schedule Configuration
const DEFAULT_SCHEDULE = "*/10 * * * *";
let cronSchedule: string = process.env.CRON_SCHEDULE || DEFAULT_SCHEDULE;

if (process.env.CRON_SCHEDULE) {
  const isValid = cron.validate(process.env.CRON_SCHEDULE);

  if (isValid) {
    log(
      `Configured schedule: "${cronstrue.toString(cronSchedule)}" (from .env)`,
    );
  } else {
    logError(
      `Warning: Invalid cron syntax "${process.env.CRON_SCHEDULE}" provided in .env. Falling back to default.`,
      null,
    );
    cronSchedule = DEFAULT_SCHEDULE;
    log(
      `Configured schedule: "${cronstrue.toString(cronSchedule)}" (fallback default)`,
    );
  }
} else {
  log(
    `Configured schedule: "${cronstrue.toString(cronSchedule)}" (using default)`,
  );
}

// 2. Initialize Database Pool
const pool = mysql.createPool({
  host: requiredEnv("DB_HOST"),
  user: requiredEnv("DB_USER"),
  password: requiredEnv("DB_PASSWORD"),
  database: requiredEnv("DB_NAME"),
  waitForConnections: true,
  connectionLimit: 10,
});

// 3. Startup Guard: Exit if the pool cannot connect
try {
  log("Verifying database connection pool...");
  const testConn = await pool.getConnection();
  testConn.release();
  log("Database connection verified successfully.");
} catch (err) {
  logError(
    "Fatal Error: Failed to initialize MySQL connection pool. Exiting process.",
    err,
  );
  process.exit(1);
}

// 4. Task Execution Logic
async function performTask(): Promise<void> {
  const readableSchedule = cronstrue.toString(cronSchedule);
  log(`Task triggered via schedule: "${readableSchedule}"`);

  let conn: mysql.PoolConnection | undefined;
  try {
    conn = await pool.getConnection();

    // Execute query and safely cast structural mysql outputs
    // const [result] = await conn.query<mysql.ResultSetHeader>(
    //   'UPDATE users SET status = "active" WHERE last_login > NOW() - INTERVAL 1 DAY',
    // );

    // log(`Success. Rows updated: ${result.affectedRows}`);
  } catch (err) {
    logError("Database task failed during execution:", err);
  } finally {
    if (conn) conn.release();
  }
}

// 5. Schedule Loop using the verified string
cron.schedule(cronSchedule, performTask);
