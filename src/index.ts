import express from "express";
import { userRouter, statusRouter } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/status", statusRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
