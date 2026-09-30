/* Lesson 9: seedTable.js */
import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "node:path"
import { vinyl } from "./data.js"

async function seedTable() {
    const db = await open({
        filename: path.join("database.db"),
        driver: sqlite3.Database
    })

    try {
        await db.exec("BEGIN TRANSACTION")

        for(const product of vinyl) {
            const { title, artist, price, image, year, genre, stock } = product

            await db.run(`
                INSERT INTO products (
                    title, 
                    artist,
                    price,
                    image,
                    year, 
                    genre,
                    stock
                )
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `, [title, artist, price, image, year, genre, stock])
        }

        await db.exec("COMMIT")
        console.log("Table seeded successfully...")

    } catch(err) {

        await db.exec("ROLLBACK")
        console.log("Error in inserting products: ", err)
    } finally {

        await db.close()
    }
}

seedTable()

/* Lesson 8: Aside: Adding data to Database */
/* 
import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "node:path"
import { abductionsData } from "./aside/abductionData.js"


async function seedTable() {
    
    const db = await open({
        filename: path.join("database.db"),
        driver: sqlite3.Database
    })

    try {
        await db.exec(`BEGIN TRANSACTION`)

        for(const { location, details } of abductionsData) {
            await db.run(`
                INSERT INTO abductions (location, details) 
                Values (?, ?)
            `, [location, details])
        }

        await db.exec('COMMIT')
        console.log("Table seeded successfully...")

    } catch(err) {

        await db.exec("ROLLBACK")
        console.log("Error in inserting Abductions : ", err)
    } finally {

        await db.close()
    }
}

seedTable()
 */