import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/", async (_req, res) => {
  res.send("Eu tô rodandoooooooooooooo!");
});

export { statusRouter };
