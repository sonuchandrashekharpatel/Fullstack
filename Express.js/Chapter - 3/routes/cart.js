import express from 'express'
import { requireAuth } from '../middleware/requireAuth.js'
import { addToCart, deleteAll, deleteItem, getAll, getCartCount } from '../controllers/cartController.js'


export const cartRouter = express.Router()

cartRouter.post('/add', requireAuth, addToCart)

cartRouter.get('/cart-count', requireAuth, getCartCount)

cartRouter.get('/', requireAuth, getAll)

cartRouter.delete('/all', requireAuth, deleteAll)

cartRouter.delete('/:itemId', requireAuth, deleteItem)
