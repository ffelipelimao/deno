import { Context } from 'https://deno.land/x/oak@v7.5.0/mod.ts';

export const ok = (data: any, {response }?: Context) => {
   ctx.response.status = 200
   ctx.response.body = data
}

export const badRequest = (data: Error,ctx: Context) => {
   ctx.response.status = 400
   ctx.response.body = data
}
