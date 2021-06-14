import { Context } from 'https://deno.land/x/oak@v7.5.0/context.ts'
import { ok } from '../../../helpers/oak-http-helper.ts'

export class WishlistController {

    async handle(context: Context){

        const body = await context.request.body().value
                
        return ok(body, context)
     
    }
}