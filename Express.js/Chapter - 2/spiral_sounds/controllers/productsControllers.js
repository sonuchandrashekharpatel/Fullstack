import { getDBConnection } from "../db/db.js"

export async function getProducts(req, res){

    const db = await getDBConnection()

    const { search, genre } = req.query

    let query = "SELECT * FROM products"
    const params = []

    if(genre) {
        query += " WHERE genre = ?"
        params.push(genre)
    }

    if(search) {
        query += " WHERE title LIKE ? OR artist LIKE ? OR genre LIKE ?"
        params.push(`%${search}%`)
        params.push(`%${search}%`)
        params.push(`%${search}%`)
    }
    const products = await db.all(query, params)
    res.json(products)
}

export async function getGenres(req, res) {
    const db = await getDBConnection()

    const genreRows = await db.all("SELECT DISTINCT genre FROM products")

    const genre = genreRows.map(row => row.genre)

    res.json(genre)
}