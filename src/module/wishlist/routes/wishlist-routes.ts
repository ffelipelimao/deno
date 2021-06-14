import { Router } from 'https://deno.land/x/oak@v7.5.0/mod.ts';
import { WishlistController } from "../controller/wishlist-controller.ts";

const wishlistController = new WishlistController();

const router = new Router()

router.post('/wishlist', wishlistController.handle)

export default router