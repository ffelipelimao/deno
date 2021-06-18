import { Application } from 'https://deno.land/x/oak@v7.5.0/mod.ts'
import { connectDB } from "./infra/database/mongodb/config/connection.ts";

import gamesRouter from './modules/games/routes/games-router.ts'
import wishlistRouter from './modules/wishlist/routes/wishlist-routes.ts'

await connectDB()

const app = new Application();

app.use(gamesRouter.routes())
app.use(wishlistRouter.routes())

const hostname = '0.0.0.0';
const port = 8080;

console.log(`Listening on ${hostname}:${port}`);

await app.listen({hostname,port});
