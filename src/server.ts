import { Application } from 'https://deno.land/x/oak@v7.5.0/mod.ts'

import salesRouter from './module/sales/route/sales-router.ts'
import gamesRouter from './module/games/route/games-router.ts'

const app = new Application();

app.use(salesRouter.routes())
app.use(gamesRouter.routes())

const hostname = '0.0.0.0';
const port = 8080;

console.log(`Listening on ${hostname}:${port}`);

await app.listen({hostname,port});