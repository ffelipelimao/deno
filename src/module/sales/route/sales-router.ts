import { Router } from 'https://deno.land/x/oak@v7.5.0/mod.ts';
import { SalesController } from "../controller/sales-controller.ts";

const salesController = new SalesController();

const router = new Router()

router.get('/sales', salesController.handle)

export default router