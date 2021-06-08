import { Router } from 'https://deno.land/x/oak@v7.5.0/mod.ts';
import { DealsController } from "../controller/deals-controller.ts";

const dealsController = new DealsController();

const router = new Router()

router.get('/deals', dealsController.handle)

export default router