
/* Lesson 14: Add Search Functionality */
/* 
import { getDBConnection } from '../db/db.js'

export async function getGenres(req, res) {
    try {

        const db = await getDBConnection()

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const stringsGenre = genresRows.map(genre => genre.genre)
        res.json(stringsGenre)

    } catch (err) {
        res.status(500).json({ error:'Failed to fetch genres', details: err.message })
    }
}

export async function getProducts(req, res) {
    try {
        const db = await getDBConnection()

        const { genre } = req.query
        
        let query = `SELECT * FROM products`
        let params = []
        
        if(genre){
            query += ' WHERE genre = ?'
            params.push(genre)
            const products = await db.all(query, params)
            return res.json(products)
        }
        
        const {search} = req.query
        if(search) {
            query += ' WHERE genre LIKE ? OR title LIKE ? OR artist LIKE ?', [search, search, search]
            params.push(`%${search}%`)
            params.push(`%${search}%`)
            params.push(`%${search}%`)

            const products =  await db.all(query, params)
            return res.json(products)
        }

        const products = await db.all(query)
        res.status(200).json(products)

    } catch(err) {
        console.error('getProducts Error: ', error)
        res.status(500).json({ error: "Failed to fetch products", details: err.message })
    }
}
 */


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
import { getDBConnection } from '../db/db.js'

export async function getGenres(req, res) {
    try {

        const db = await getDBConnection()

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const stringsGenre = genresRows.map(genre => genre.genre)
        res.json(stringsGenre)

    } catch (err) {
        res.status(500).json({ error:'Failed to fetch genres', details: err.message })
    }
}

export async function getProducts(req, res) {
    try {
        const db = await getDBConnection()

        const { genre } = req.query
        
        let query = `SELECT * FROM products`

        
        if(!genre){
            const products = await db.all(query)
            return res.status(200).json(products)
        }

        query += ' WHERE genre = ?'
        const products = await db.all(query, [genre])
        res.json(products)

    } catch(err) {
        console.error('getProducts Error: ', error)
        res.status(500).json({ error: "Failed to fetch products", details: err.message })
    }
}
 */

/* Lesson 12: Getting All Products */
/*
Challenge:
1. Write logic in getProducts() so all products display on page load.
	 
   As we will need to modify it in the next challenge, store the SQL query in a let and pass it into the all() method.
*/
/* 
import { getDBConnection } from '../db/db.js'

export async function getGenres(req, res) {
    try {

        const db = await getDBConnection()

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const stringsGenre = genresRows.map(genre => genre.genre)
        res.json(stringsGenre)

    } catch (err) {
        res.status(500).json({ error:'Failed to fetch genres', details: err.message })
    }
}

export async function getProducts(req, res) {
    try {
        const db = await getDBConnection()

        let query = `SELECT * FROM products`
        const products = await db.all(query)

        res.status(200).json(products)

    } catch(err) {
        console.error('getProducts Error: ', error)
        res.status(500).json({ error: "Failed to fetch products", details: err.message })
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
import { getDBConnection } from '../db/db.js'

export async function getGenres(req, res) {
    try {

        const db = await getDBConnection()

        const genresRows = await db.all(`SELECT DISTINCT genre FROM products`)
        
        const genre = genresRows.map(genre => genre.genre)
        res.json(genre)

    } catch (err) {
        res.status(500).json({ error:'Failed to fetch genres', details: err.message })
    }
}

export async function getProducts() {
    console.log('products')
}
 */

/* Lesson 4: Setting up the routes */

export async function getGenres() {
    console.log('genres')
}

export async function getProducts() {
    console.log('products')
}