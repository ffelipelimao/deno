import { GameType } from "../../../../../src/modules/wishlist/types/game.ts";
import { Wishlist } from "../entities/wishlist.ts";


export class WhishlistRepository {
    
    async saveInWishlist(gameType: GameType): Promise<Wishlist | undefined>{
        try {

            const game =  await Wishlist.create({
                name: gameType.name,
                image: gameType.image,
                steamId: gameType.steamId
            })
            return game;
        } catch (error) {
          console.log(error)
        
        }
    }

    async listAllGames(){
        
        try {

            const games =  await Wishlist.all()
            return games
        } catch (error) {
          console.log(error)
        
        }

    }

    async deleteGameById(id: string){

        try {
            const game =  await Wishlist.deleteById(id)
            return game
        
        } catch (error) {
          console.log(error)
        
        }
    }

}