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
/*  
CHALLENGE - Add pagination to the category page  
  
PART 1: Update getModelCount()  

1. Update getModelCount() (lib/models.ts) so it can accept:  
- search  
- categorySlug  

2. If categorySlug exists, update the SQL query so it only counts models  
from that category.  
  
3. Make sure this works alongside search.  
   So if both search and categorySlug exist, both conditions should apply.  
  
PART 2: Update category/page.tsx  
  
4. Grab `page` from the URL using `searchParams`.  
  
5. Set `modelsPerPage`.  
  
6. Use `getModelCount()` to determine `totalPages`.  
Make sure you pass in both:  
- search  
- categorySlug  
  
4. Update the call to `getModels()` so it receives:  
- page  
- modelsPerPage  
  
5. Pass `totalPages` and `currentPage` into `ModelsBrowser`.  
  
Don't worry about any repeated code right now.  
We'll clean that up later.  
*/

import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug, page, modelsPerPage }:{
    search?: string, 
    sort?: string, 
    categorySlug?: string,
    page: number
    modelsPerPage: number
}) {
    const db = await getDBConnection()
    
    let sql = "SELECT * FROM models"
    
    const placeholders = []
    const where = []
    if(search) {
        where.push("(name LIKE ? OR description LIKE ?)")
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
    }
    
    if(categorySlug) {
        where.push("category = ?")
        placeholders.push(categorySlug)
    }
    
    if(where.length > 0) {
        sql += " WHERE " + where.join(" AND ")
    }
    if(sort) {
        sql += ` ORDER BY ${
            sort === "alpha" ? 'name ASC' : sort === "recent"
            ? "dateAdded DESC"
            : "likes DESC"
        }`
    }
    
    sql += " LIMIT ? OFFSET ?"
    placeholders.push(modelsPerPage, (page - 1) * modelsPerPage)
    
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

export default async function getModelsCount({search, categorySlug}: {
    search?: string
    categorySlug?: string
}) {
    const db = await getDBConnection()
    let sql = "SELECT COUNT(*) AS count FROM models"
    const placeholders = []
    const where = []

    if(search) {
        where.push("(name LIKE ? OR description LIKE ?)")
        placeholders.push(`%${search}%`, `%${search}%`)
    }

    if(categorySlug) {
        where.push("category = ?")
        placeholders.push(categorySlug)
    }

    if(where.length > 0) {
        sql += " WHERE " + where.join(" AND ")
    }
     
    try {
        const {count} = await db.get(sql, placeholders)
        return count
    } finally {

        await db.close()
    }
}

/* Lesson 59: Styling the Active Pagination Button */


/* Lesson 58: Rendering the Right Number of Pagination Buttons */


/* Lesson 57: Calculating Total Pages */


/* Lesson 56: Counting Total Matching Models */


/* Lesson 55: Counting Rows with COUNT() */
/*  
CHALLENGE - Complete getModelCount()  
1. Make connection with the database
   
2. Accept an object with `search`.  
  
3. Build a SQL query that counts matching models:  
SELECT COUNT(*) as count FROM models  
  
4. If `search` exists, update the SQL query so it only counts models  
where the name or description matches the search.  
Remember: placeholders are still our friend here.  
  
5. Use db.get(), not db.all(),  
because we only expect one result.  
  
6. Return the `count` property of the resulting object
*/
/* 
import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug, page, modelsPerPage }:{
    search?: string, 
    sort?: string, 
    categorySlug?: string,
    page: number
    modelsPerPage: number
}) {
    const db = await getDBConnection()
    
    let sql = "SELECT * FROM models"

    const placeholders = []
    const where = []
    if(search) {
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
        where.push("(name LIKE ? OR description LIKE ?)")
    }

    if(categorySlug) {
        // My Solution: Not best: sql += ` ${search ? "AND" : "WHERE"} category = ?`
        where.push("category = ?")
        placeholders.push(categorySlug)
    }
   
    if(where.length > 0) {
        sql += " WHERE" + where.join(" AND ")
    }
    if(sort) {
        sql += ` ORDER BY ${
            sort === "alpha" ? 'name ASC' : sort === "recent"
            ? "dateAdded DESC"
            : "likes DESC"
        }`
    }

    sql += " LIMIT ? OFFSET ?"
    placeholders.push(modelsPerPage, (page - 1) * modelsPerPage)

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

export default async function getModelsCount({search}: {search?: string}) {
    const db = await getDBConnection()

    let sql = "SELECT COUNT(*) AS count FROM models"
    const placeholders = []

    if(search) {
        sql += " WHERE (name LIKE ? description LIKE ?)"
        placeholders.push(`%${search}%`, `%${search}%`)
    }

    try {
        const {count} = await await db.get(sql, placeholders)
        return count
    } finally {

        await db.close()
    }
} */
/* Lesson 54: Returning One Page of Models */
/*
CHALLENGE
1. Work out the offset:
   Hint:
   page 1 should skip 0 rows
   page 2 should skip 4 rows
   page 3 should skip 8 rows

2. Add LIMIT and OFFSET to the end of the SQL query.
   
3. Use placeholders instead of putting the numbers directly
   into the SQL string.

4. Add `modelsPerPage` and `offset` to the `placeholders` array.
*/
/* 
import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug, page, modelsPerPage }:{
    search?: string, 
    sort?: string, 
    categorySlug?: string,
    page: number
    modelsPerPage: number
}) {
    const db = await getDBConnection()
    
    let sql = "SELECT * FROM models"

    const placeholders = []
    const where = []
    if(search) {
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
        where.push("(name LIKE ? OR description LIKE ?)")
    }

    if(categorySlug) {
        // My Solution: Not best: sql += ` ${search ? "AND" : "WHERE"} category = ?`
        where.push("category = ?")
        placeholders.push(categorySlug)
    }
   
    if(where.length > 0) {
        sql += " WHERE" + where.join(" AND ")
    }
    if(sort) {
        sql += ` ORDER BY ${
            sort === "alpha" ? 'name ASC' : sort === "recent"
            ? "dateAdded DESC"
            : "likes DESC"
        }`
    }

    sql += " LIMIT ? OFFSET ?"
    placeholders.push(modelsPerPage, (page - 1) * modelsPerPage)

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

/* Lesson 53: Limiting Results with LIMIT and OFFSET */
/* 
OFFSET = how many rows to skip
LIMIT = how many rows to return

Ex: 
1. SELECT * FROM models
    WHERE category = ?
    LIMIT 4 OFFSET 8

2. SELECT * FROM models
    LIMIT 4 OFFSET 8

LIMIT and OFFSET has to be in end

*/

/* Lesson 52: Reading the Page Query on the Server */
/* 
import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug, page, modelsPerPage }:{
    search?: string, 
    sort?: string, 
    categorySlug?: string,
    page: number
    modelsPerPage: number
}) {
    const db = await getDBConnection()
    
    let sql = "SELECT * FROM models"

    const placeholders = []
    const where = []
    if(search) {
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
        where.push("(name LIKE ? OR description LIKE ?)")
    }

    if(categorySlug) {
        // My Solution: Not best: sql += ` ${search ? "AND" : "WHERE"} category = ?`
        where.push("category = ?")
        placeholders.push(categorySlug)
    }
   
    if(where.length > 0) {
        sql += " WHERE" + where.join(" AND ")
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

/* Lesson 51: Updating the URL with a Page Query */


/* Lesson 50: Creating Pagination Controls and Buttons */


/* Lesson 49: Introducing Pagination */


/* Lesson 48: Checkpoint Challenge: Searching Within Categories, Part 2 */
/*
CHALLENGE - Search within a category, Part 2
1. Only add a WHERE clause if at least one condition exists
2. Build each condition separately
3. Combine multiple conditions using AND
4. Keep the params array in the same order
   as the placeholders in the SQL string

HINT:
This is mostly a JavaScript problem. Think about
- arrays
- conditionals
- string building
*/
/* 
import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug}:{
    search?: string, 
    sort?: string, 
    categorySlug?: string
}) {
    const db = await getDBConnection()
    
    let sql = "SELECT * FROM models"

    const placeholders = []
    const where = []
    if(search) {
        placeholders.push(`%${search}%`)
        placeholders.push(`%${search}%`)
        where.push("(name LIKE ? OR description LIKE ?)")
    }

    if(categorySlug) {
        // My Solution: Not best: sql += ` ${search ? "AND" : "WHERE"} category = ?`
        where.push("category = ?")
        placeholders.push(categorySlug)
    }
   
    if(where.length > 0) {
        sql += " WHERE" + where.join(" AND ")
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
/* 
import {getDBConnection} from "./db"

export async function getModels({ search, sort, categorySlug}:{
    search?: string, 
    sort?: string, 
    categorySlug?: string
}) {
    const db = await getDBConnection()
    
    // Simulate slow data fetching...
    await new Promise( resolve => setTimeout(resolve, 3000))
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

    // Simulate slow data fetching
    await new Promise(resolve => setTimeout(resolve, 3000))
    try {
        return await db.get(`SELECT * FROM models WHERE id == ?`, [id])
    } finally {
        await db.close()
    }
}
 */
/* Lesson 35: Combining sort and search functionality */


/* Lesson 34: Refactoring getModels() to take an object */
/* 
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
} */

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