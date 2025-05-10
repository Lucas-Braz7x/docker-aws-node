module.exports = {
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT || 5432,
    user: process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PASSWORD || "postgrespassword",
    database: process.env.DATABASE_NAME || "so2",
  },
  migrations: {
    directory: "./migrations",
  },
};
