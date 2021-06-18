import { WhishlistRepository } from "../../../../infra/database/mongodb/repositories/whishlist-repository.ts";
import { GameType } from "../types/game.ts";

export class WishlistService{

    constructor(private readonly repository: WhishlistRepository){}

    async create(gameType: GameType){
        console.log('Passou por aqui')
        return await this.repository.saveInWishlist(gameType)
    }
}