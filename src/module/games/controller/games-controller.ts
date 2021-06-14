import { Context } from 'https://deno.land/x/oak@v7.5.0/context.ts'
import { api } from "../../../api/api.ts";
import { ok } from '../../../helpers/oak-http-helper.ts'
import { Game } from "../types/game.ts";

export class GamesController {

    async handle(context: Context){

        const params = context.request.url.searchParams

        const name = params.get('name')
                
        const response = await fetch(api+`/games?title=${name}`)

        const responseJson: Game[] = await response.json()

        const filteredSteamGames = responseJson.filter((game: Game) => (game.steamAppID ? game : undefined))

        const games = filteredSteamGames.map(gameFIlter => ({
            id: gameFIlter.gameID,
            name: gameFIlter.external,
            image: gameFIlter.thumb,
            steamId: gameFIlter.steamAppID
        }))

        return ok(games, context)

     
    }
}