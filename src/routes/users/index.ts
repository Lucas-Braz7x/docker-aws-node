import { Request, Response, Router } from "express";
import Knex from "knex";
import { knexConfig } from "../../infra/db/knexfile";

const userRouter = Router();
const db = Knex(knexConfig);

userRouter.post("/", async (req, res) => {
  const { name, email } = req.body;

  try {
    const [result] = await db("users").insert({ name, email }).returning("id");

    res.status(200).json({ id: result.id, name, email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário", error });
  }
});

userRouter.get("/", async (_req, res) => {
  try {
    const users = await db("users").select("*");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

userRouter.put("/:id", async (req: Request, res: any) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const count = await db("users").where({ id }).update({ name, email });

    if (!count)
      return res.status(404).json({ error: "Usuário não encontrado" });

    res.json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
});

userRouter.delete("/:id", async (req: Request, res: any) => {
  const { id } = req.params;

  try {
    const count = await db("users").where({ id }).del();

    if (!count)
      return res.status(404).json({ error: "Usuário não encontrado" });

    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});

export { userRouter };
