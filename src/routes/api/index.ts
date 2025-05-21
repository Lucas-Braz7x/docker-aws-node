import { Request, response, Response, Router } from "express";
import { API_URL_PLAYER, API_URL_QUERY, API_URL_SEASON } from "../../constants";

const apiRouter = Router();

apiRouter.get("/player/:player", async (req, res) => {
  const { player } = req.params;

  try {
    const result = await fetch(`${API_URL_PLAYER}/${player}`).then((response) =>
      response.json()
    );

    res.json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: `Erro ao buscar dados do jogador ${player}` });
  }
});

apiRouter.get("/season/:season", async (req, res) => {
  const { season } = req.params;

  try {
    const result = await fetch(`${API_URL_SEASON}/${season}`).then(
      async (response) => await response.json()
    );

    res.json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: `Erro ao buscar dados da temporada ${season}` });
  }
});

apiRouter.get("/query/:player/:season", async (req, res) => {
  const { player, season } = req.params;

  try {
    const result = await fetch(
      `${API_URL_QUERY}?playerName=${player}&season=${season}&sortBy=PlayerName&ascending=true&pageNumber=1&pageSize=10`
    ).then(async (response) => await response.json());

    res.json(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: `Erro ao buscar dados da temporada ${season}` });
  }
});

export { apiRouter };
