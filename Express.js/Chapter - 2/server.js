/* Chapter - 2: Build a Fullstack Express App */

/* Lesson 15: Outro */
/* 
What we studied
. Middlware
. Serving static files
. Creating a database
. Seeding a table
. Retrieving from a database
. SQL Queries and binding.

*/

/* Lesson 14: Add Search Functionality 👻*/
/*
Challenge:

1. When the user inputs text into the search box, that text will be passed to the server as a query string. We should serve products where the search text finds a match with the title, artist, or genre. We are accepting partial matching queries, so "lo" would match with "block" and "slow" and "allow".

hint.md for help!

Example incoming query: '?search=lo'
*/

/* Lesson 13: Wire Up the dropdown 👻*/
/*
Challenge:
1. Detect if a query string ‘genre’ is used. 
   If it is, retrieve only products with that genre from the database and serve them. 
   If not, all products should be served.

hint.md for help

Example incoming query: '?genre=rock'
*/

/* Lesson 12: Getting All Products 👻*/
/* 
getProducts() needs to be able to:

. Serve all products.
. Serve the products in a provided genre.
. Serve products whose title, artist or genre contain a provided search query.
*/

/*
Challenge:
1. Write logic in getProducts() so all products display on page load.
	 
   As we will need to modify it in the next challenge, store the SQL query in a let and pass it into the all() method.
*/

/* Lesson 11: Populate the Dropdown 👻*/
/*
Challenge:

1. Get all distinct genres (no repeats) from the products table.

  - Our front end code is expecting an array of genres as strings, but you will likely get an array of objects from the database. Find a solution to that!

2. Serve the array of genres and open up the mini browser to check the dropdown is populated.

hint.md for help  
*/  



/* Lesson 10: Aside: Getting our Data */
/* 
getData.js
*/

/* Lesson 9: seedTable.js 👻*/
/*
  Challenge:
  1. Take the data 'vinyl' imported from data.js and add it to our database.
     The keys in the objects align with the columns in our database.
     The 'id' column in the database will self-populate - you do not need to do anything.

  2. If something goes wrong, rollback the process so no data is added.

  3. Run seedTable.js and then logTable.js to check.
  
    hint.md for help!
*/

/* 
seedTable.js
*/

/* Lesson 8: Aside: Adding data to Database */


/* Lesson 7: sqlite3 Method Overview */
/* 
Useful sqlite3 Methods

. db.exec()
    . You want to run multiple statements at once.
    . Typical use: Schema setup:

    ex: await db.exec( `
        CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTO INCREMENT,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            size TEXT NOT NULL,
        )
    `)

. db.run()
    . You want to run a single statement.
    . Typical usecase are inserting updating, deleting.

    ex: db.run(
        `INSERT INTO users (name, email) values (?, ?)`, 
        [name, email]
    )

=> Neither db.exec() nor db.run() return any data!

db.get()
. Used when you expect one row back (or you only care about the first row.)
. Typical use: lookup one row by id:

    db.get(`SELECT * FROM users WHERE id = ?`, [id])

. db.all()
    . You want all matching rows from a table as an array.
    . Typical use select all in-stock products:
        db.all(
        `SELECT * FROM products WHERE status = ?`, ['in_stock']
        )

*/

/* Lesson 6: Setting up the Database 👻 */
/*

Challenge:
1. Create a database and store its connection in a const 'db'.  
      The database will live in a file called 'database.db' which can be in root.
      The database driver will be 'sqlite3.Database'.
2. Use the exec() method to write SQL to create a table called 'products'. It should have the following columns:
      id (unique key) 
      title (required, text)  
      artist (required, text) 
      price (required, floating-point number)
      image (required, text) (this is "text" because it will hold an image url)
      year (integer)
      genre (text)
      stock (integer)
3. Close the database connection and log a message to say table created.

When you are done, run createTable.js and then logTable.js to verify that it has worked.
  
hint.md for help!
  
*/

/* 
createTable.js
logTable.js
*/

/* Lesson 5: Aside: Creating a DB Table */
/* 
SQLite3 - The database driver
. Opens a connection to the database file.
. Executes SQL queries
. Handles reading writing results.

SQLite - a wrapper
. Provides async/await support for cleaner code.

*/

/* Lesson 4: Setting up the routes 👻*/
/* 
2 Routes

/api/products
. All products
. Products by genre
. Products by search

/api/products/genres
. Populate the genres list for the dropdown

*/

/*
Challenge 2:

- Handle any request to /api/products and pass it to productsRouter.

- Save and reload the mini browser. 
  You should see the results of the console.logs from productsControllers.js

*/

import express from 'express'
import { productsRouter } from "./routes/products.js"

const app = express()

app.use(express.static('public'))

app.use("/api/products", productsRouter)

app.listen(
    3000, 
    () => console.log("Server is running on 3000..."))
    .on(
        'error', 
        (err) => {
        console.error('Failed to start server', err)
})

/* Lesson 3: Serve the frontend files 👻 */

/* 
.on() Express ya Node.js ka ek Event Listener method hai.

*/
/*
Challenge:
    1. Use express.static() to serve all the files in 'public'.
*/

/* 
import express from 'express'

const app = express()

app.use(express.static('public'))

app.listen(3000, () => console.log("Server is running on 3000..."))
    .on('error', (err) => {
        console.error('Failed to start server', err)
})
 */

/* Lesson 2: Aside: Middleware and express.static */
/* 
Middleware: 
1. Enabling CORS
2. Parsing Requests
3. Logging requests
4. And many more uses

Custom vs Built-in vs 3rd Party
. Custom
    . Built by us specific to our use-case

Built-in
. Provided by express

3rd Party
. Available as NPM dependency

*/
/* 
import express from "express"

const app = express()

app.use(express.static("aside/public"))
app.use((req, res, next) => {

    console.log("Custom headers are set.")
    next()
})

app.use((req, res, next) => {

    console.log(`${ new Date().toISOString()} ${req.method} ${req.url}`)

    next()
})

app.get("/", (req, res) => {
    res.send(`<html><h1>Hello Express!</h1></html>`)
})

app.listen(3000, () => console.log("Server is running on 3000..."))
 */

/* Lesson 1: Intro */
/* 
Functionallity:
Serve all assets.
Display all products from database.
Display a selection of products based on user requirements.

What will be studying:
. Middleware
. Serving static files
. Creating a database
. Retrieving from a database
. SQL queries and binding

And Loads more! Plus challenges

Why SQLite is cool!

. Zero setup - no server needed.
. Lightweight and fast.
. Cross-platform
. Used standard SQL syntax.

*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a Fullstack Express App"
const chapterNum = 2
const lesson = [
    "Intro",
    "Aside: Middleware and express.static",
    'Serve the frontend files',
    "Setting up the routes",
    "Aside: Creating a DB Table",
    "Setting up the Database",
    "sqlite3 Method Overview",
    "Aside: Adding data to Database",
    "seedTable.js",
    "Aside: Getting our Data",
    "Populate the Dropdown",
    "Getting All Products",
    "Wire Up the dropdown",
    "Add Search Functionality",
    "Outro"
]
lessonGenerator(chapterName, lesson, chapterNum)  */