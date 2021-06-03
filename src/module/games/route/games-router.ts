import { Router } from 'https://deno.land/x/oak@v7.5.0/mod.ts';
import { GamesController } from "../controller/games-controller.ts";

const gamesController = new GamesController();

const router = new Router()

router.get('/games', gamesController.handle)

export default router