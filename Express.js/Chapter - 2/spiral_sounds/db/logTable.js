import { getDBConnection } from "./db.js"

async function logTable() {
    const db = await getDBConnection()

    try {
        const products = await db.all("SELECT * FROM products")
        console.table(products)

    } catch(err) {
        console.log("Error in fetching the products: ", err)
    } finally {
        await db.close()
        console.log("Database connection closed...")
    }
}

logTable()