import { getDBConnection } from "../db/db.js"

export async function getProducts(req, res){

    const db = await getDBConnection()

    const query = "SELECT * FROM products"
    const params = []
    const products = await db.all(query, params)
    res.json(products)
}

export async function getGenres(req, res) {
    const db = await getDBConnection()

    const genreRows = await db.all("SELECT DISTINCT genre FROM products")

    const genre = genreRows.map(row => row.genre)

    res.json(genre)
}