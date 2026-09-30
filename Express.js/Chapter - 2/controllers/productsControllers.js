
/* Lesson 14: Add Search Functionality */

import { getDBConnection } from "../db/db.js"

export async function getGenres(req, res) {
    const db = await getDBConnection()
    try {

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const genres = genresRows.map(row => row.genre)
        res.json(genres)

    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch the genres" ,  details: err})
    
    } finally {
        await db.close()
    }
}

export async function getProducts(req, res) {

    const db = await getDBConnection()

    try {
        
        let query = "SELECT * FROM products"
        const params = []

        const { genre, search } = req.query

        if(genre) {
            query += " WHERE genre = ?"
            params.push(genre) 

        } else if (search) {
            
            query += " WHERE title LIKE ? OR artist LIKE ? OR genre LIKE ?"
            params.push(`%${search}%`)
            params.push(`%${search}%`)
            params.push(`%${search}%`)
        }
        
        const products = await db.all(query, params)
        
        res.json(products)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Error in fetching products", details: err.message })
    }
}


/* Lesson 13: Wire Up the dropdown */
/*
Challenge:
1. Detect if a query string ‘genre’ is used. 
   If it is, retrieve only products with that genre from the database and serve them. 
   If not, all products should be served.

hint.md for help

Example incoming query: '?genre=rock'
*/
/* 
import { getDBConnection } from "../db/db.js"

export async function getGenres(req, res) {
    const db = await getDBConnection()
    try {

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const genres = genresRows.map(row => row.genre)
        res.json(genres)

    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch the genres" ,  details: err})
    
    } finally {
        await db.close()
    }
}

export async function getProducts(req, res) {

    const db = await getDBConnection()

    try {
        
        let query = "SELECT * FROM products"
        const params = []

        const { genre } = req.query

        if(genre) {
            query += " WHERE genre = ?"
            params.push(genre) 
        }
        
        const products = await db.all(query, params)
        
        res.json(products)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Error in fetching products", details: err.message })
    }
}
 */

/* Lesson 12: Getting All Products */
/*
Challenge:
1. Write logic in getProducts() so all products display on page load.
	 
   As we will need to modify it in the next challenge, store the SQL query in a let and pass it into the all() method.
*/

/* import { getDBConnection } from "../db/db.js"

export async function getGenres(req, res) {
    const db = await getDBConnection()
    try {

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const genres = genresRows.map(row => row.genre)
        res.json(genres)

    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch the genres" ,  details: err})
    
    } finally {
        await db.close()
    }
}

export async function getProducts(req, res) {

    const db = await getDBConnection()

    try {

        const query = "SELECT * FROM products"
        const products = await db.all(query)

        res.json(products)

    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Error in fetching products", details: err.message })
    }
}
 */

/* Lesson 11: Populate the Dropdown */

/*
Challenge:

1. Get all distinct genres (no repeats) from the products table.

  - Our front end code is expecting an array of genres as strings, but you will likely get an array of objects from the database. Find a solution to that!

2. Serve the array of genres and open up the mini browser to check the dropdown is populated.

hint.md for help  
*/

/* 
import { getDBConnection } from "../db/db.js"

export async function getGenres(req, res) {
    const db = await getDBConnection()
    try {

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const genres = genresRows.map(row => row.genre)
        res.json(genres)

    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch the genres" ,  details: err})
    
    } finally {
        await db.close()
    }
}

export async function getProducts() {
    console.log('products')
}
 */
/* Lesson 4: Setting up the routes */
/* 
export async function getGenres() {
    console.log('genres')
}

export async function getProducts() {
    console.log('products')
} */