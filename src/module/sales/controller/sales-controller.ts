import { Context } from 'https://deno.land/x/oak@v7.5.0/context.ts'
import { ok } from '../../../helpers/oak-http-helper.ts'

export class SalesController {

    handle(context: Context){
        
        const _obj = {
            message:'Hello Sales'
        }
            
        return ok(_obj, context)
     
    }
}