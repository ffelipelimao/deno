import { Context } from 'https://deno.land/x/oak@v7.5.0/context.ts'
import { ok } from '../../../helpers/oak-http-helper.ts'

export class DealsController {

    handle(context: Context){

        const params = context.request.url.searchParams

        const price = params.get('price')
        const orderby = params.get('orderby')
        
        const _obj = {
            price,
            orderby
        }
            
        return ok(_obj, context)
     
    }
}