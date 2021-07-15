import { Context } from "https://deno.land/x/oak@v7.5.0/context.ts";
import { ok } from "../../../helpers/oak-http-helper.ts";
import { WhishlistRepository } from "../../../infra/database/mongodb/repositories/whishlist-repository.ts";
import { WishlistService } from "../service/wishlist-service.ts";

export class WishlistAllController {

    async handle(context: Context){

        const wishlistService = new WishlistService(new WhishlistRepository())

        const games = await wishlistService.list()
                
        return ok(games, context)
     
    }
}