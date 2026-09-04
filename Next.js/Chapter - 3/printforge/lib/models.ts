/* Chapter - 3: Making Data Flow */


/* Lesson 71: Section 3 Outro */


/* Lesson 70: Final Pagination Challenge */


/* Lesson 69: Final UX Polish Challenge Pack */


/* Lesson 68: Applying Edge Case Handling to Category Pages */


/* Lesson 67: Debug the Redirect Bug */


/* Lesson 66: Handling Invalid Sort Params */


/* Lesson 65: Handling Invalid Page Params */


/* Lesson 64: Handling Out-of-Bounds Page Params */


/* Lesson 63: Polishing Edge Cases and UX */


/* Lesson 62: Refactoring Query Param Logic */


/* Lesson 61: Refactoring modelsPerPage */


/* Lesson 60: Adding Pagination to Category Pages */


/* Lesson 59: Styling the Active Pagination Button */


/* Lesson 58: Rendering the Right Number of Pagination Buttons */


/* Lesson 57: Calculating Total Pages */


/* Lesson 56: Counting Total Matching Models */


/* Lesson 55: Counting Rows with COUNT() */


/* Lesson 54: Returning One Page of Models */


/* Lesson 53: Limiting Results with LIMIT and OFFSET */


/* Lesson 52: Reading the Page Query on the Server */


/* Lesson 51: Updating the URL with a Page Query */


/* Lesson 50: Creating Pagination Controls and Buttons */


/* Lesson 49: Introducing Pagination */


/* Lesson 48: Checkpoint Challenge: Searching Within Categories, Part 2 */


/* Lesson 47: Checkpoint Challenge: Searching Within Categories, Part 1 */


/* Lesson 46: Showing a No Results Found State */


/* Lesson 45: Handling Non-existent Models and Categories */


/* Lesson 44: Showing a Not Found State */


/* Lesson 43: Triggering Loading UI from SearchForm */


/* Lesson 42: Triggering Loading UI from SortButtons */


/* Lesson 41: Debugging the Missing Category Page Title */


/* Lesson 40: Setting up the LoadingUI Component */


/* Lesson 39: Creating the Models Browser Component */


/* Lesson 38: Showing Pending UI with useTransition */


/* Lesson 37: Using Multiple loading.tsx Files */


/* Lesson 36: Adding Route-Level Loading UI */


/* Lesson 35: Combining sort and search functionality */


/* Lesson 34: Refactoring getModels() to take an object */
import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug}:{
    search?: string, 
    sort?: string, 
    categorySlug?: string
}) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models"

    const placeholders = []
    
    if(search) {
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
        sql += " WHERE (name LIKE ? OR description LIKE ?)"
    }

    if(categorySlug) {
        sql += " WHERE category = ?"
        placeholders.push(categorySlug)
    }
    
    if(sort) {
        sql += ` ORDER BY ${
            sort === "alpha" ? 'name ASC' : sort === "recent"
            ? "dateAdded DESC"
            : "likes DESC"
        }`
    }

    try {
        return await db.all(sql, placeholders)

    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}


/* Lesson 33: Upgrading getModels() for Category Sorting */
/*
CHALLENGE — Add category filtering to getModels()

Update the `getModels()` data function so that it can also filter by category.

You’ll need to:
1. Accept an optional `categorySlug` parameter
2. Use it to filter the SQL query when a category is provided
3. Make sure the function works in either of these situations:
   - Search only (3D Models page)
   - Category only (Category page)
4. Update the category page to use this new functionality

For now, don’t worry about handling both search and category at the same time.
*/
/* import {getDBConnection} from "./db"

export async function getModels(
    search?: string, 
    sort?: string, 
    categorySlug?: string
) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models"

    const placeholders = []
    
    if(search) {
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
        sql += " WHERE (name LIKE ? OR description LIKE ?)"
    }

    if(categorySlug) {
        sql = " WHERE category = ?"
        placeholders.push(categorySlug)
    }
    
    if(sort) {
        sql += ` ORDER BY ${
            sort === "alpha" ? 'name ASC' : sort === "recent"
            ? "dateAdded DESC"
            : "likes DESC"
        }`
    }

    try {
        return await db.all(sql, placeholders)

    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */
/* Lesson 32: Sorting Models within Categories */
/* 
import {getDBConnection} from "./db"

export async function getModels(search?: string, sort?: string) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models"

    const placeholders = []
    
    try {
        if(search) {
            placeholders.push(`%${search}%`)
            placeholders.push(`%${search}%`)

            sql += " WHERE name LIKE ? OR description LIKE ?"

        }
        if(sort) {
            sql += ` ORDER BY ${
                sort === "alpha" ? 'name ASC' : sort === "recent"
                ? "dateAdded DESC"
                : "likes DESC"
            }`
        }
        return await db.all(sql, placeholders)

    } finally {
        await db.close()
    }
}

export async function getModelsByCategorySlug(categorySlug: string, sort?: string) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models WHERE category = ?"

    if(sort) {
        console.log("Sort by:", sort)
        sql += ` ORDER BY ${
            sort === "alpha" ? 'name ASC' :
            sort === "recent" ? "dateAdded DESC"
            : "likes DESC"
        }`
    }
    try {
        return await db.all(sql, [categorySlug])
    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */

/* Lesson 31: Sorting Data with SQL ORDER BY */


/* Lesson 30: Sending Sort Params to the Data Layer */
/* import {getDBConnection} from "./db"

export async function getModels(search?: string, sort?: string) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models"

    const placeholders = []
    
    try {
        if(search) {
            placeholders.push(`%${search}%`)
            placeholders.push(`%${search}%`)

            sql += " WHERE name LIKE ? OR description LIKE ?"

        }
        if(sort) {
            console.log("Sort by:", sort)
            sql += ` ORDER BY ${
                sort === "alpha" ? 'name ASC' : sort === "recent"
                ? "dateAdded DESC"
                : "likes DESC"
            }`
        }
        return await db.all(sql, placeholders)

    } finally {
        await db.close()
    }
}

export async function getModelsByCategorySlug(categorySlug: string) {
    const db = await getDBConnection()
    
    try {
        return await db.all(`SELECT * FROM models WHERE category = ?`, [categorySlug])
    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */

/* Lesson 29: Styling the Active SortButton */


/* Lesson 28: Navigating with usePathname and useRouter */


/* Lesson 27: Setting Up Sort Controls */


/* Lesson 26: Understanding the Sorting Data Flow */


/* Lesson 25: Passing Search Through the UI */


/* Lesson 24: Searching by Name or Description */
/* import {getDBConnection} from "./db"

export async function getModels(search?: string) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models"

    const placeholders = []
    
    try {
        if(search) {
            placeholders.push(`%${search}%`)
            placeholders.push(`%${search}%`)

            sql += " WHERE name LIKE ? OR description LIKE ?"
            return await db.all(sql, placeholders)
        }
        return await db.all("SELECT * FROM models")
    } finally {
        await db.close()
    }
}

export async function getModelsByCategorySlug(categorySlug: string) {
    const db = await getDBConnection()
    try {
        return await db.all(`SELECT * FROM models WHERE category = ?`, [categorySlug])
    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */

/* Lesson 23: Upgrading getModels() for Search */
/* import {getDBConnection} from "./db"

export async function getModels(search?: string) {
    const db = await getDBConnection()
    let sql = "SELECT * FROM models"

    const placeholders = ["%" + search + "%"]
    
    try {
        if(search) {
            sql += " WHERE name LIKE ?"
            return await db.all(sql, placeholders)
        }
        return await db.all("SELECT * FROM models")
    } finally {
        await db.close()
    }
}

export async function getModelsByCategorySlug(categorySlug: string) {
    const db = await getDBConnection()
    try {
        return await db.all(`SELECT * FROM models WHERE category = ?`, [categorySlug])
    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */

/* Lesson 22: Reading searchParams from the URL */


/* Lesson 21: Upgrading the SearchForm */


/* Lesson 20: Understanding the Search Data Flow */


/* Lesson 19: Fixing the “All” Category Link */


/* Lesson 18: Making the Category Page Title Dynamic */


/* Lesson 17: Building a Dynamic Single Model Page */


/* Lesson 16: Building a Dynamic Category Page */

/* import {getDBConnection} from "./db"

export async function getModels() {
    const db = await getDBConnection()

    try {
        return await db.all("SELECT * FROM models")
    } finally {
        await db.close()
    }
}

export async function getModelsByCategorySlug(categorySlug: string) {
    const db = await getDBConnection()
    try {
        return await db.all(`SELECT * FROM models WHERE category = ?`, [categorySlug])
    } finally {
        await db.close()
    }
}

export async function getModelById(id: number) {
    const db = await getDBConnection()

    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */
/* Lesson 15: Filtering Data with SQL WHERE */
/* 
import {getDBConnection} from "./db"

export async function getModels() {
    const db = await getDBConnection()

    try {
        return await db.all("SELECT * FROM models")
    } finally {
        await db.close()
    }
}

export async function getModelsByCategorySlug(categorySlug: string) {
    const db = await getDBConnection()
    try {
        return await db.all(`SELECT * FROM models WHERE category = ?`, [categorySlug])
    } finally {
        await db.close()
    }
}
 */

/* Lesson 14: Making ModelCards Dynamic */


/* Lesson 13: Wiring Database Models into the UI */


/* Lesson 12: Rendering Category Links from Data */


/* Lesson 11: Reading Categories from the Database */


/* Lesson 10: Reading Models from the Database */
/* 
import {getDBConnection} from "./db"

export async function getModels() {
    const db = await getDBConnection()

    try {
        return await db.all("SELECT * FROM models")
    } finally {
        await db.close()
    }
} */