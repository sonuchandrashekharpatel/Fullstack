/* Lesson 22: Protecting Cart Routes */

import { getDBConnection } from "../db/db.js"

export async function addToCart(req, res) {
    const db = await getDBConnection()

    try {

        const { productId } = req.body
        const userId = parseInt(req.session.userId)

        const cart = await db.get("SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?", [userId, productId])

        if(cart) {
            await db.run(`
                UPDATE cart_items SET quantity = quantity + 1
                WHERE id = ?
            `, [cart.id])

        } else {
            await db.run(`
                INSERT INTO cart_items (
                    user_id,
                    product_id,
                    quantity
                ) VALUES (?, ?, ?)
            `, [userId, productId, 1])
        }
            
        res.json({ message: "Added to cart" })

    } catch(err) {
        console.log("addToCart Error:", err)
    }
}
 
export async function getCartCount(req, res) {
    const db = await getDBConnection()

    try {

        const cart = await db.get("SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?", [req.session.userId])
        res.json(cart)

    } catch(err) {

        res.status(500).send({ error: "Something went wrong" })
        console.log("getCartCount Error: ", err)
    }
}

export async function getAll(req, res) {

    const db = await getDBConnection()

    try {

        const items = await db.all(`
            SELECT ci.id AS cartItemId, ci.quantity, p.title, p.artist, p.price 
            FROM cart_items AS ci JOIN products AS p
            ON ci.product_id = p.id WHERE ci.user_id = ?
        ` , [req.session.userId])

        res.json({items})

    } catch(err) {

        console.log("getAll Error: ", err)
        res.status(500).json({ error: "Something went wrong..."})
    }
}

export async function deleteItem(req, res) {
    const db = await getDBConnection()

    try {
        let { itemId } = req.params

        itemId = parseInt(itemId)

        if(!itemId) {
            return res.status(400).send({ error: "Item id is invalid." })
        }

        await db.run("DELETE FROM cart_items WHERE id = ? AND user_id = ?", [itemId, req.session.userId])
        
        res.status(204).send()

    } catch(err) {
        console.log("deleteItem Error: ", err)
    }
}

export async function deleteAll(req, res) {
    const db = await getDBConnection()

    try {

        await db.run("DELETE FROM cart_items WHERE user_id = ?", [req.session.userId])
        res.status(204).send()

    } catch(err) {
        console.log("deleteAll Error: ", err)
    }
}

/* Lesson 20: Cart Page Challenge 3 */
/* 

import { getDBConnection } from "../db/db.js"

export async function addToCart(req, res) {
    const db = await getDBConnection()

    try {

        if(!req.session.userId) {
            return res.status(400).send({ error: "Please login first."})
        }

        const { productId } = req.body
        const userId = parseInt(req.session.userId)

        const cart = await db.get("SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?", [userId, productId])

        if(cart) {
            await db.run(`
                UPDATE cart_items SET quantity = quantity + 1
                WHERE id = ?
            `, [cart.id])

        } else {
            await db.run(`
                INSERT INTO cart_items (
                    user_id,
                    product_id,
                    quantity
                ) VALUES (?, ?, ?)
            `, [userId, productId, 1])
        }
            
        res.json({ message: "Added to cart" })

    } catch(err) {
        console.log("addToCart Error:", err)
    }
}
 
export async function getCartCount(req, res) {
    const db = await getDBConnection()

    if(!req.session.userId) {
        res.status(400).send({ error: "Login error", message: "Please login first."})
    }
    try {

        const cart = await db.get("SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?", [req.session.userId])
        res.json(cart)

    } catch(err) {

        res.status(500).send({ error: "Something went wrong" })
        console.log("getCartCount Error: ", err)
    }
}

export async function getAll(req, res) {

    if(!req.session.userId) {
        return res.status(400).json({ error: "not logged in"})
    }
    const db = await getDBConnection()

    try {

        const items = await db.all(`
            SELECT ci.id AS cartItemId, ci.quantity, p.title, p.artist, p.price 
            FROM cart_items AS ci JOIN products AS p
            ON ci.product_id = p.id WHERE ci.user_id = ?
        ` , [req.session.userId])

        res.json({items})

    } catch(err) {

        console.log("getAll Error: ", err)
        res.status(500).json({ error: "Something went wrong..."})
    }
}

export async function deleteItem(req, res) {
    const db = await getDBConnection()

    try {
        let { itemId } = req.params

        itemId = parseInt(itemId)

        if(!itemId) {
            return res.status(400).send({ error: "Item id is invalid." })
        }

        await db.run("DELETE FROM cart_items WHERE id = ? AND user_id = ?", [itemId, req.session.userId])
        
        res.status(204).send()

    } catch(err) {
        console.log("deleteItem Error: ", err)
    }
}

export async function deleteAll(req, res) {
    const db = await getDBConnection()

    try {

        await db.run("DELETE FROM cart_items WHERE user_id = ?", [req.session.userId])

        res.status(204).send()

    } catch(err) {
        console.log("deleteAll Error: ", err)
    }
}
*/

/* Lesson 19: Cart Page Challenge 2 */
/*
Challenge:
1. When a user clicks the delete button, that item should be deleted from the cart_items table, regardless of quantity.

2. Research Challenge: You need to think about how to end the response! What status code should you use, and what method? (Clue: it’s not the json() method!)

hint.md for help!
*/


/* 
import { getDBConnection } from "../db/db.js"

export async function addToCart(req, res) {
    const db = await getDBConnection()

    try {

        if(!req.session.userId) {
            return res.status(400).send({ error: "Please login first."})
        }

        const { productId } = req.body
        const userId = parseInt(req.session.userId)

        const cart = await db.get("SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?", [userId, productId])

        if(cart) {
            await db.run(`
                UPDATE cart_items SET quantity = quantity + 1
                WHERE id = ?
            `, [cart.id])

        } else {
            await db.run(`
                INSERT INTO cart_items (
                    user_id,
                    product_id,
                    quantity
                ) VALUES (?, ?, ?)
            `, [userId, productId, 1])
        }
            
        res.json({ message: "Added to cart" })

    } catch(err) {
        console.log("addToCart Error:", err)
    }
}
 
export async function getCartCount(req, res) {
    const db = await getDBConnection()

    if(!req.session.userId) {
        res.status(400).send({ error: "Login error", message: "Please login first."})
    }
    try {

        const cart = await db.get("SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?", [req.session.userId])
        res.json(cart)

    } catch(err) {

        res.status(500).send({ error: "Something went wrong" })
        console.log("getCartCount Error: ", err)
    }
}

export async function getAll(req, res) {

    const db = await getDBConnection()

    try {

        if(!req.session.userId) return res.status(400).send({ error: "Login Error", message: "Please login first"})

        const items = await db.all(`
            SELECT ci.id AS cartItemId, ci.quantity, p.title, p.artist, p.price 
            FROM cart_items AS ci JOIN products AS p
            ON ci.product_id = p.id WHERE ci.user_id = ?
        `, [req.session.userId])

        res.json({items})

    } catch(err) {

        console.log("getAll Error: ", err)
        res.status(500).json({ error: "Something went wrong..."})
    }
}

export async function deleteItem(req, res) {
    const db = await getDBConnection()

    try {
        let { itemId } = req.params

        itemId = parseInt(itemId)
        if(!itemId) {
            return res.status(400).send({ error: "Item id is invalid." })
        }

        const item = await db.get("SELECT * FROM cart_items WHERE id = ? AND user_id = ?", [itemId, req.session.userId])
        console.log(item)

        await db.run("DELETE FROM cart_items WHERE id = ? AND user_id = ?", [itemId, req.session.userId])
        
        const cartItems = await db.all("SELECT * FROM cart_items")
        
        console.table(cartItems)
        
        res.status(204).send()

    } catch(err) {
        console.log("deleteItem Error: ", err)
    }
}

*/
/* Lesson 18: Cart Page Challenge 1 👻*/
/* 

import { getDBConnection } from "../db/db.js"

export async function addToCart(req, res) {
    const db = await getDBConnection()

    try {

        if(!req.session.userId) {
            return res.status(400).send({ error: "Please login first."})
        }

        const { productId } = req.body
        const userId = parseInt(req.session.userId)

        const cart = await db.get("SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?", [userId, productId])

        if(cart) {
            await db.run(`
                UPDATE cart_items SET quantity = quantity + 1
                WHERE id = ?
            `, [cart.id])

        } else {
            await db.run(`
                INSERT INTO cart_items (
                    user_id,
                    product_id,
                    quantity
                ) VALUES (?, ?, ?)
            `, [userId, productId, 1])
        }
            
        res.json({ message: "Added to cart" })

    } catch(err) {
        console.log("addToCart Error:", err)
    }
}
 
export async function getCartCount(req, res) {
    const db = await getDBConnection()

    if(!req.session.userId) {
        res.status(400).send({ error: "Login error", message: "Please login first."})
    }
    try {

        const cart = await db.get("SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?", [req.session.userId])
        res.json(cart)

    } catch(err) {

        res.status(500).send({ error: "Something went wrong" })
        console.log("getCartCount Error: ", err)
    }
}

export async function getAll(req, res) {

    const db = await getDBConnection()

    try {

        if(!req.session.userId) return res.status(400).send({ error: "Login Error", message: "Please login first"})

        const items = await db.all(`
            SELECT ci.id AS cartItemId, ci.quantity, p.title, p.artist, p.price 
            FROM cart_items AS ci JOIN products AS p
            ON ci.product_id = p.id WHERE ci.user_id = ?
        `, [req.session.userId])

        // const cartItems = await db.all("SELECT * FROM cart_items WHERE user_id = ?", [req.session.userId])

        // const items = await Promise.all(
            
        //     cartItems.map(async (cartItem) => {

        //     const product = await db.get("SELECT title, artist, price FROM products WHERE id = ?", [cartItem.product_id])

        //     return {
        //         cartItemId: cartItem.id,
        //         quantity: cartItem.quantity,
        //         title: product.title,
        //         artist: product.artist,
        //         price: product.price
        //     }
        // }))

        res.json({items})

    } catch(err) {

        console.log("getAll Error: ", err)
        res.status(500).json({ error: "Something went wrong..."})
    }
}

*/

/* Lesson 17: The Cart Count */
/*
Challenge:

1. Write code to ensure that when a logged-in user clicks 'Add to Cart', their current cart count is shown in the header with a cart icon. The frontend has been done for you. All the backend need do is provide the following JSON on the /api/cart/cart-count endpoint: 
{ <THE TOTAL NUMBER OF THE USER'S ITEMS> || 0 }

Ignore frontend console errors for now!
 
For testing, log in with:
Username: test
Password: test

Loads of help in hint.md
*/
/* 
import { getDBConnection } from "../db/db.js"

export async function addToCart(req, res) {
    const db = await getDBConnection()

    try {

        if(!req.session.userId) {
            return res.status(400).send({ error: "Please login first."})
        }

        const { productId } = req.body
        const userId = parseInt(req.session.userId)

        const cart = await db.get("SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?", [userId, productId])

        if(cart) {
            await db.run(`
                UPDATE cart_items SET quantity = quantity + 1
                WHERE id = ?
            `, [cart.id])

        } else {
            await db.run(`
                INSERT INTO cart_items (
                    user_id,
                    product_id,
                    quantity
                ) VALUES (?, ?, ?)
            `, [userId, productId, 1])
        }
            
        res.json({ message: "Added to cart" })

    } catch(err) {
        console.log("addToCart Error:", err)
    }
}
 
export async function getCartCount(req, res) {
    const db = await getDBConnection()

    if(!req.session.userId) {
        res.status(400).send({ error: "Login error", message: "Please login first."})
    }
    try {

        const cart = await db.get("SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?", [req.session.userId])
        res.json(cart)

    } catch(err) {

        res.status(500).send({ error: "Something went wrong" })
        console.log("getCartCount Error: ", err)
    }
}

*/
/*
Lesson 16: Adding to cart_table */
/*

Challenge:

1. Write code to ensure that when a logged-in user clicks 'Add to Cart', the product is either added to their cart or its quantity increased if it’s already there, storing the data in the cart_items table. If successful, send the frontend this JSON: { message: 'Added to cart' }.

Ignore frontend console errors for now!

For testing, log in with:
Username: test
Password: test

Use logTable.js to verify success!

Loads of help in hint.md

*/
/* 
import { getDBConnection } from "../db/db.js"

export async function addToCart(req, res) {
    const db = await getDBConnection()

    try {

        if(!req.session.userId) {
            return res.status(400).send({ error: "Please login first."})
        }

        const { productId } = req.body
        const userId = parseInt(req.session.userId)

        const cart = await db.get("SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?", [userId, productId])

        if(cart) {
            await db.run(`
                UPDATE cart_items SET quantity = quantity + 1
                WHERE id = ?
            `, [cart.id])

        } else {
            await db.run(`
                INSERT INTO cart_items (
                    user_id,
                    product_id,
                    quantity
                ) VALUES (?, ?, ?)
            `, [userId, productId, 1])
        }
            
        res.json({ message: "Added to cart" })


    } catch(err) {
        console.log("addToCart Error:", err)
    }
}

*/
/*
 import { getDBConnection } from "../db/db.js";

export async function addToCart(req, res) {
    const db = await getDBConnection()
    try {

        const userId = req.session.userId
        let { productId } = req.body
        productId = parseInt( productId )

        if(userId) {
            
            const product = await db.get(`SELECT * FROM cart_items WHERE product_id = ? AND user_id = ?`, [productId, userId])

            if(!product) {
                await db.run(`INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)`, [userId, productId, 1])
                return res.status(200).json({ message: "Added to cart"})
            }

            await db.run(`UPDATE cart_items SET quantity = ? WHERE product_id = ? AND user_id = ?`, [product.quantity + 1, productId, userId])
            res.status(200).json({ message: 'Added to cart'})
        } else {
            console.error('addToCart Error: Please login first')
        }
    } catch(err) {
        console.error('addToCart Error: ', err)
        res.status(500).json({ error: "Adding to cart failed!"})
    }
} */