import { Router } from 'https://deno.land/x/oak@v7.5.0/mod.ts';
import { WishlistCreateController, WishlistAllController, WishlistDeleteController } from "../controller/index.ts";

const wishlistCreateController = new WishlistCreateController();
const wishlistAllController = new WishlistAllController();
const wishlistDeleteController = new WishlistDeleteController()

const router = new Router()

router.post('/wishlist', wishlistCreateController.handle)
router.get('/wishlist', wishlistAllController.handle)
router.delete('/wishlist/:id', wishlistDeleteController.handle)

export default router