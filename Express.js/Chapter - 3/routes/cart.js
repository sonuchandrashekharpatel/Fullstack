/* Lesson 22: Protecting Cart Routes 👻*/
import express from "express"

import { addToCart,
    getCartCount,
    getAll, 
    deleteItem, 
    deleteAll 
} from "../controllers/cartController.js"


export const cartRouter = express.Router()

cartRouter.post("/add", addToCart)
cartRouter.get("/cart-count", getCartCount)
cartRouter.get("/", getAll)
cartRouter.delete("/all", deleteAll)
cartRouter.delete("/:itemId", deleteItem)



/* Lesson 20: Cart Page Challenge 3 👻*/
/* 
import express from "express"
import { addToCart, getCartCount, getAll, deleteItem, deleteAll } from "../controllers/cartController.js"
export const cartRouter = express.Router()

cartRouter.post("/add", addToCart)

cartRouter.get("/cart-count", getCartCount)

cartRouter.get("/", getAll)

cartRouter.delete("/all", deleteAll)

cartRouter.delete("/:itemId", deleteItem)

 */
/* Lesson 19: Cart Page Challenge 2 👻*/
/* 
import express from "express"
import { addToCart, getCartCount, getAll, deleteItem, deleteAll } from "../controllers/cartController.js"
export const cartRouter = express.Router()

cartRouter.post("/add", addToCart)

cartRouter.get("/cart-count", getCartCount)

cartRouter.get("/", getAll)


cartRouter.delete("/:itemId", deleteItem)
 */

/* Lesson 18: Cart Page Challenge 1 👻*/
/* 
import express from "express"
import { addToCart, getCartCount, getAll } from "../controllers/cartController.js"
export const cartRouter = express.Router()

cartRouter.post("/add", addToCart)

cartRouter.get("/cart-count", getCartCount)

cartRouter.get("/", getAll)

*/
/* Lesson 17: The Cart Count 👻*/
/* 
import express from "express"
import { addToCart, getCartCount } from "../controllers/cartController.js"
export const cartRouter = express.Router()

cartRouter.post("/add", addToCart)

cartRouter.get("/cart-count", getCartCount)
*/

/* Lesson 16: Adding to cart_table 👻*/
/* 
import express from "express"
import { addToCart } from "../controllers/cartController.js"
export const cartRouter = express.Router()

cartRouter.post("/add", addToCart)
*/


/*
 import express from 'express'
import { requireAuth } from '../middleware/requireAuth.js'
import { addToCart, deleteAll, deleteItem, getAll, getCartCount } from '../controllers/cartController.js'


export const cartRouter = express.Router()

cartRouter.post('/add', requireAuth, addToCart)

cartRouter.get('/cart-count', requireAuth, getCartCount)

cartRouter.get('/', requireAuth, getAll)

cartRouter.delete('/all', requireAuth, deleteAll)

cartRouter.delete('/:itemId', requireAuth, deleteItem)
 */
