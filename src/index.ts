import express from "express";
import { knexConfig } from "./infra/db/knexfile";
import Knex from "knex";

const app = express();
const port = 3000;

const db = Knex(knexConfig);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await db("users").select("*");

    res.json(users);
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: "Error ao buscar usuários" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
