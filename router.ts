import { Router } from 'https://deno.land/x/oak@v7.5.0/mod.ts';

export const router = new Router()

router.get('/test',(ctx) => ctx.response.body = 'Hello')