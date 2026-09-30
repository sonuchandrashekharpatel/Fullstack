import { getDBConnection } from "./db.js"

async function createTable() {
    const db = await getDBConnection()

    await db.exec(
        `
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                artist TEXT NOT NULL,
                price REAL NOT NULL,
                image TEXT NOT NULL,
                year INTEGER NOT NULL,
                genre TEXT NOT NULL,
                stock INTEGER NOT NULL
            )
        `
    )

    await db.close()
    console.log("Table Created Successfully...")
}

createTable()