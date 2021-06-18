import { v4 } from "https://deno.land/std@0.99.0/uuid/mod.ts";
import { GameType } from "../../../../src/modules/wishlist/types/game.ts";
import { Wishlist } from "../entities/wishlist.ts";


export class WhishlistRepository {
    
    async saveInWishlist(gameType: GameType): Promise<Wishlist | undefined>{
        try {
            console.log('Passou por aqui')
        
            const game =  await Wishlist.create({
                _id: v4.generate(),
                name: gameType.name,
                image: gameType.image,
                steamId: gameType.steamId
            })
            return game;
        } catch (error) {
          console.log(error)
        
        }
    }
}