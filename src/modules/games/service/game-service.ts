import { api } from "../../../api/api.ts";
import { Game, GameAPI } from "../types/game-api.ts";

export async function getGames(name:string): Promise<Game[]> {
    const response = await fetch(api+`/games?title=${name}`)

    const responseJson: GameAPI[] = await response.json()

    const filteredSteamGames = responseJson.filter((game: GameAPI) => (game.steamAppID ? game : undefined))

    const games = filteredSteamGames.map(gameFIlter => ({
        id: Number(gameFIlter.gameID),
        name: gameFIlter.external,
        image: gameFIlter.thumb,
        steamId: Number(gameFIlter.steamAppID)
    }))

    return games
}
