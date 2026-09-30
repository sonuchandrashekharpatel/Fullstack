import { getDBConnection } from "./db.js"
import { vinyl } from "../data/data.js"

async function seedTable() {
    const db = await getDBConnection()

    try {
        await db.exec("BEGIN TRANSACTION")

        for(const product of vinyl) {
            const { title, artist, price, image, year, genre, stock } = product
            await db.run(
                `
                    INSERT INTO products (
                        title,
                        artist,
                        price,
                        image,
                        year,
                        genre,
                        stock
                    )
                    VALUES(?, ?, ?, ?, ?, ?, ?)
                `,
                [title, artist, price, image, year, genre, stock]
            )
        }

        await db.exec("COMMIT")
        console.log("Products inserted successfully...")
    
    } catch(err) {

        await db.exec("ROLLBACK")
        console.log("Error in inserting products: ", err)
    
    } finally {
        await db.close()
        console.log("Database connection closed...")
    }
}

seedTable()