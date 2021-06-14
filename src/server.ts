import { Application } from 'https://deno.land/x/oak@v7.5.0/mod.ts'

import gamesRouter from './module/games/route/games-router.ts'
import wishlistRouter from './module/wishlist/routes/wishlist-routes.ts'

const app = new Application();

app.use(gamesRouter.routes())
app.use(wishlistRouter.routes())

const hostname = '0.0.0.0';
const port = 8080;

console.log(`Listening on ${hostname}:${port}`);

await app.listen({hostname,port});
