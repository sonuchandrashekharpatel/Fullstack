/* Lesson 22: Protecting Cart Routes */
import { getDBConnection } from "../db/db.js";

export async function addToCart(req, res) {
    const db = await getDBConnection()
    try {

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
}

export async function getCartCount(req, res) {
    const db = await getDBConnection()

    try {
        const items = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])
        res.status(200).json({ totalItems: items.totalItems || 0 })

    } catch(err) {
        console.error("getCartCount Error: ", err)
        res.status(500).json({ error: "Failed to getCartCount "})
    }
}

export async function getAll(req, res) {
    try {
        if(!req.session.userId) {
            return res.json({ err: 'not logged in' })
        }

        const db = await getDBConnection()

        const cartItems = await db.all(`SELECT CI.id, CI.quantity, P.title, P.artist, P.price
            FROM cart_items CI JOIN products P ON CI.product_id = P.id
            WHERE CI.user_id = ?`, [req.session.userId])

        console.log(cartItems)

        const items = cartItems.map(item => {
            return {
                cartItemId: item.id,
                quantity: item.quantity,
                title: item.title,
                artist: item.artist,
                price: item.price
            }
        })

        res.status(200).json({ items: items })

    } catch (err) {
        console.error("getAll Error: ", err)
    }
}

export async function deleteItem(req, res) {

    const db = await getDBConnection()
    try {

        const itemId = parseInt(req.params.itemId)

        if(isNaN(itemId)) {
            return res.status(400).json({ error: "Invalid item ID" })
        }

        const item = await db.get(`SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?`, [itemId, req.session.userId])

        if(!item) {
            return res.status(400).json({ error: "Item not found" })
        }

        await db.run(`DELETE FROM cart_items WHERE id = ? AND user_id = ?`, [itemId, req.session.userId])

        res.status(204).send()
    } catch(err) {
        console.error("deleteItem Error: ", err)
    }
}

export async function deleteAll(req, res) {
    try {
    const db = await getDBConnection()
    console.log("Cart item deleted successfully.")
    
    await db.run(`DELETE FROM cart_items WHERE user_id = ?`, [req.session.userId])
  
    res.status(204).send()
    } catch(err) {
        console.error('deleteAll Error: ', err)
    }
}


/* Lesson 20: Cart Page Challenge 3 */
/* import { getDBConnection } from "../db/db.js";

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
}

export async function getCartCount(req, res) {
    const db = await getDBConnection()

    try {
        const items = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])
        res.status(200).json({ totalItems: items.totalItems || 0 })

    } catch(err) {
        console.error("getCartCount Error: ", err)
        res.status(500).json({ error: "Failed to getCartCount "})
    }
}

export async function getAll(req, res) {
    try {
        if(!req.session.userId) {
            return res.json({ err: 'not logged in' })
        }

        const db = await getDBConnection()

        const cartItems = await db.all(`SELECT CI.id, CI.quantity, P.title, P.artist, P.price
            FROM cart_items CI JOIN products P ON CI.product_id = P.id
            WHERE CI.user_id = ?`, [req.session.userId])

        console.log(cartItems)

        const items = cartItems.map(item => {
            return {
                cartItemId: item.id,
                quantity: item.quantity,
                title: item.title,
                artist: item.artist,
                price: item.price
            }
        })

        res.status(200).json({ items: items })

    } catch (err) {
        console.error("getAll Error: ", err)
    }
}

export async function deleteItem(req, res) {

    const db = await getDBConnection()
    try {

        const itemId = parseInt(req.params.itemId)

        if(isNaN(itemId)) {
            return res.status(400).json({ error: "Invalid item ID" })
        }

        const item = await db.get(`SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?`, [itemId, req.session.userId])

        if(!item) {
            return res.status(400).json({ error: "Item not found" })
        }

        await db.run(`DELETE FROM cart_items WHERE id = ? AND user_id = ?`, [itemId, req.session.userId])

        res.status(204).send()
    } catch(err) {
        console.error("deleteItem Error: ", err)
    }
}

export async function deleteAll(req, res) {
    try {
    const db = await getDBConnection()
    console.log("Cart item deleted successfully.")
    
    await db.run(`DELETE FROM cart_items WHERE user_id = ?`, [req.session.userId])
  
    res.status(204).send()
    } catch(err) {
        console.error('deleteAll Error: ', err)
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
}

export async function getCartCount(req, res) {
    const db = await getDBConnection()

    try {
        const items = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])
        res.status(200).json({ totalItems: items.totalItems || 0 })

    } catch(err) {
        console.error("getCartCount Error: ", err)
        res.status(500).json({ error: "Failed to getCartCount "})
    }
}

export async function getAll(req, res) {
    try {
        if(!req.session.userId) {
            return res.json({ err: 'not logged in' })
        }

        const db = await getDBConnection()

        const cartItems = await db.all(`SELECT CI.id, CI.quantity, P.title, P.artist, P.price
            FROM cart_items CI JOIN products P ON CI.product_id = P.id
            WHERE CI.user_id = ?`, [req.session.userId])

        console.log(cartItems)

        const items = cartItems.map(item => {
            return {
                cartItemId: item.id,
                quantity: item.quantity,
                title: item.title,
                artist: item.artist,
                price: item.price
            }
        })

        res.status(200).json({ items: items })

    } catch (err) {
        console.error("getAll Error: ", err)
    }
}

export async function deleteItem(req, res) {

    const db = await getDBConnection()
    try {

        const itemId = parseInt(req.params.itemId)

        if(isNaN(itemId)) {
            return res.status(400).json({ error: "Invalid item ID" })
        }

        const item = await db.get(`SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?`, [itemId, req.session.userId])

        if(!item) {
            return res.status(400).json({ error: "Item not found" })
        }

        await db.run(`DELETE FROM cart_items WHERE id = ? AND user_id = ?`, [itemId, req.session.userId])

        res.status(204).send()
    } catch(err) {
        console.error("deleteItem Error: ", err)
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
}

export async function getCartCount(req, res) {
    const db = await getDBConnection()

    try {
        const items = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])
        res.status(200).json({ totalItems: items.totalItems || 0 })

    } catch(err) {
        console.error("getCartCount Error: ", err)
        res.status(500).json({ error: "Failed to getCartCount "})
    }
}

export async function getAll(req, res) {
    try {
        if(!req.session.userId) {
            return res.json({ err: 'not logged in' })
        }

        const db = await getDBConnection()

        const cartItems = await db.all(`SELECT CI.id, CI.quantity, P.title, P.artist, P.price
            FROM cart_items CI JOIN products P ON CI.product_id = P.id
            WHERE CI.user_id = ?`, [req.session.userId])

        console.log(cartItems)

        const items = cartItems.map(item => {
            return {
                cartItemId: item.id,
                quantity: item.quantity,
                title: item.title,
                artist: item.artist,
                price: item.price
            }
        })

        res.status(200).json({ items: items })

    } catch (err) {
        console.error("getAll Error: ", err)
    }
} */


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
}

export async function getCartCount(req, res) {
    const db = await getDBConnection()

    try {
        const items = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])
        res.status(200).json({ totalItems: items.totalItems || 0 })

    } catch(err) {
        console.error("getCartCount Error: ", err)
        res.status(500).json({ error: "Failed to getCartCount "})
    }
} */
 
/* Lesson 16: Adding to cart_table */
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