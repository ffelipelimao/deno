import { Application } from 'https://deno.land/x/oak@v7.5.0/mod.ts'
import {router} from './router.ts'

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

const hostname = "0.0.0.0";
const port = 8080;

console.log(`Listening on ${hostname}:${port}`);

await app.listen({hostname,port});