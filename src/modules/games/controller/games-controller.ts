import { Context } from 'https://deno.land/x/oak@v7.5.0/context.ts'
import { badRequest, ok } from '../../../helpers/oak-http-helper.ts'
import { getGames } from "../service/game-service.ts";

export class GamesController {

    async handle(context: Context){

        const params = context.request.url.searchParams

        const name = params.get('name')

        if(name){
            const games = await getGames(name)

            return ok(games, context)
        }else{
            return badRequest(new Error('No game typed :('), context)
        }
    }
}