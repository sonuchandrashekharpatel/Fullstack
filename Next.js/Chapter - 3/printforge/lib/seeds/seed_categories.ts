/* Lesson 8: Seeding the Categories Table */

import {getDBConnection} from "../db"
import categories from "../data/categories.json"

async function seedCategories() {

    const db = await getDBConnection()

    // Create table
    await db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
            name TEXT NOT NULL,
            slug TEXT NOT NULL PRIMARY KEY
        )
        
    `)

    // Prepare INSERT categories
    const insertCategory = await db.prepare(`
        INSERT OR REPLACE INTO categories (
            name,
            slug
        ) VALUES ( ?, ?)
    `)

    // loop through each categories and insert into categories table

    for(const category of categories) {
        await insertCategory.run (
            category.name,
            category.slug
        )
    }

    await insertCategory.finalize()
    await db.close()
    
    console.log("Categories table seeded successfully")
}

seedCategories().catch(err => {
    console.error("Seeding Categories Failed:", err)
})