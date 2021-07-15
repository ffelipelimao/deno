import { WhishlistRepository } from "../../../infra/database/mongodb/repositories/whishlist-repository.ts";
import { GameType } from "../types/game.ts";

export class WishlistService{

    constructor(private readonly repository: WhishlistRepository){}

    async create(gameType: GameType){
        return await this.repository.saveInWishlist(gameType)
    }

    async list(){
        return await this.repository.listAllGames()
        
    }

    async delete(id: string){
        console.log(id)
         return await this.repository.deleteGameById(id)
    }
}