import { Context } from "https://deno.land/x/oak@v7.5.0/context.ts";
import { ok } from "../../../helpers/oak-http-helper.ts";
import { WhishlistRepository } from "../../../infra/database/mongodb/repositories/whishlist-repository.ts";
import { WishlistService } from "../service/wishlist-service.ts";

export class WishlistDeleteController {

    async handle(context: Context){

        const path = context.request.url.pathname

        const id = path.split('/')[2]

        const wishlistService = new WishlistService(new WhishlistRepository())
        
        const game = await wishlistService.delete(id)
                
        return ok(game, context)
     
    }
}