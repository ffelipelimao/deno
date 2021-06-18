import { Context } from 'https://deno.land/x/oak@v7.5.0/context.ts'
import { WhishlistRepository } from "../../../infra/database/mongodb/repositories/whishlist-repository.ts";
import { ok } from '../../../helpers/oak-http-helper.ts'
import { WishlistService } from "../service/wishlist-service.ts";

export class WishlistController {

    async handle(context: Context){

        const body = await context.request.body().value

        const wishlistService = new WishlistService(new WhishlistRepository())

        const game = await wishlistService.create(body)
                
        return ok(game, context)
     
    }
}