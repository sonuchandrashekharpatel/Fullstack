/* Chapter - 2: Introduction Multiple Tables */
/* 

import { PGlite } from '@electric-sql/pglite';
import fs from 'fs'

(async () => {
    const db = new PGlite()

    //Set up the DB files
    const createTables = fs.readFileSync('sql/create-tables.sql', 'utf8')
    await db.exec(createTables)
    console.log("Tables created successfully.");

    // const insertCarsData  = fs.readFileSync('sql/insert-cars-data.sql', 'utf8')
    // await db.exec(insertCarsData)
    // console.log('Data populated successfully.')


    // Run the changes made in the DM Section
    const crudOperations = fs.readFileSync('sql/create-tables.sql', 'utf8');
    await db.exec(crudOperations)

    // Populate our new tables
    // const populateTables = fs.readFileSync('sql/populate-tables.sql', 'utf8')

    // await db.exec(populateTables)

    // Alter the existing cars table
    // const alterTable = fs.readFileSync('sql/alter-table.sql', 'utf8')
    // await db.exec(alterTable)

    // Insert new data to the tables
    // const insertNewData = fs.readFileSync('sql/insert-new-data.sql', 'utf-8');
    // await db.exec(insertNewData);
    
    // Alter constraint dropping NOT NULL
    // const alterConstraints = fs.readFileSync('alter-constraint.sql', 'utf-8')
    // await db.exec(alterConstraints)

    // Load the query file
    const query = fs.readFileSync('query.sql', 'utf8')

    // Run the query from the query file
    const res = await db.query(query)

    console.clear()
    console.table(res.rows);
})()

*/
/* Lesson 12: Recap */
/* 
CREATE TABLES:
To add a new table to our database

ALTER TABLE: 
Implement constraints and keys after a table has been 
created.

JOIN: 
Using JOINs to select results from multiple tables.

AGGREGATES:
Implement aggregates referencing multiple tables.
*/

/* Lesson 11: A primer on SQL Injection */
/* 
SQL Injection (SQLI) refers to the malicious practice 
of inputting SQL statements to compromize the security
of an application.

Attackers will attempt to input data to a site which 
will interfere with or expose data from a database.

Typically, this happens when a site does not correctly
process user input before posting it to database.

A user can enter malicious input from the frontend which will be processed as SQL;

This can be used to:
1. Exposed sensitive data
2. Bypass authentication
3. Modify or delete data
4. Execute admin operations

Example: 


Injection can be prevented by:
1. Using parameterized queries
2. Using ORMs
3. Validating and Sanitise inputs
4. Limiting databases priviliges
5. Using Web Application Firewalls

Using prameterised queries
1.  Queries can be prepared to avoid directly sending 
    user input the databases.

2. With parameterisation, our queries are treated as 
   two separate threads: The SQL and the data.

3. The parameters are not interpreted as SQL and the 
   SQL is parsed with placeholder values.

USING ORMs: 
ORMs allow us to translate data into objects before data
into objects before passing to data to database.

This can help prevent SQL injections by adding a layer 
of translation between our inputs and the database.

Validating and sanitise inputs:
1.  Inputs can be interpreted before being sent to the 
    databases. We can check for malicious input at this stage.

2.  Unexpected characters can be checked for and rejected.

3.  Whitelist can be configured to allow valid inputs.

Using Web Application Firewalls
1.  WAFs can be used to identify and block common SQL 
    injection patterns.

2.  Services like AWS WAF, Cloudflare, or ModSecurity 
    offer these services as part of their plateform.


*/




/* Lesson 10: Joining multiple tables */


/* Lesson 9: Aggregates */



/* Lesson 8: Full join, inner join and drop */
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';

(async () => {
  const db = new PGlite()

  // Set up the DB files
  const createTables = fs.readFileSync('sql/create-tables.sql', 'utf8')
  const insertCarsData = fs.readFileSync('sql/insert-cars-data.sql', 'utf8')
  await db.exec(createTables)
  await db.exec(insertCarsData)

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync('sql/crud-operations.sql', 'utf8')
  await db.exec(crudOperations)

  // Populate the tables
  const populateTables = fs.readFileSync('sql/populate-tables.sql', 'utf8')
  await db.exec(populateTables)

  // Alter the tables
  const alterTable = fs.readFileSync('sql/alter-table.sql', 'utf8')
  await db.exec(alterTable)

  // Insert new Data dropping NOT NULL
  const insertNewData = fs.readFileSync('sql/insert-new-data.sql', 'utf8');
  await db.exec(insertNewData)

  // Alter constraints
  const alterConstraints = fs.readFileSync('sql/alter-constraints.sql', 'utf8')
  await db.exec(alterConstraints)

  // Load the query files
  const query = fs.readFileSync('query.sql', 'utf8')

  const response = await db.query(query)
  console.clear()
  console.table(response.rows)

})();


/* Lesson 7: Left and Right Join */


/* Lesson 6: Joins */


/* Lesson 5: Alter table */
/* 
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';

(async () => {
  const db = new PGlite()

  // Set up the DB files
  const createTables = fs.readFileSync('sql/create-tables.sql', 'utf8')
  const insertCarsData = fs.readFileSync('sql/insert-cars-data.sql', 'utf8')
  await db.exec(createTables)
  await db.exec(insertCarsData)

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync('sql/crud-operations.sql', 'utf8')
  await db.exec(crudOperations)

  // Populate the tables
  const populateTables = fs.readFileSync('sql/populate-tables.sql', 'utf8')
  await db.exec(populateTables)

  // Alter the tables
  const alterTable = fs.readFileSync('sql/alter-table.sql', 'utf8')
  await db.exec(alterTable)

  // Insert new Data
  const insertNewData = fs.readFileSync('sql/insert-new-data.sql', 'utf8');
  await db.exec(insertNewData)

  // Load the query files
  const query = fs.readFileSync('query.sql', 'utf8')

  const response = await db.query(query)
  console.clear()
  console.table(response.rows)

})();
 */

/* Lesson 4: Populating tables */
/* 
import { PGlite } from "@electric-sql/pglite"
import fs from "fs";

(async () => {
  const db = new PGlite();

  // Set up the DB files
  const createTables = fs.readFileSync('sql/create-tables.sql', 'utf8');
  const insertCarsData = fs.readFileSync('sql/insert-cars-data.sql', 'utf8');

  await db.exec(createTables)
  await db.exec(insertCarsData)

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync("sql/crud-operations.sql", 'utf8')
  await db.exec(crudOperations)

  // populate our new tables
  const populateTables = fs.readFileSync("sql/populate-tables.sql", 'utf8')
  await db.exec(populateTables)

  // Load the sql query file
  const query = fs.readFileSync('query.sql', 'utf8');

  // Run the query From the query file
  const response = await db.query(query)

  console.clear()
  console.table(response.rows)
})();
 */

/* Lesson 3: Creating tables */
/* 
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';

(async () => {
  const db = new PGlite();

  // Set up the DB files
  const createTables = fs.readFileSync('sql/create-tables.sql', 'utf8');
  const insertCarsData = fs.readFileSync('sql/insert-cars-data.sql', 'utf8');
  await db.exec(createTables);
  await db.exec(insertCarsData);

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync('sql/crud-operations.sql', 'utf8');
  await db.exec(crudOperations);

  // Load the SQL query file
  const query = fs.readFileSync('query.sql', 'utf8');


  // Run the query from the query file
  const response = await db.query(query);

  console.clear();
  console.table(response.rows);
})();
 */

/* Lesson 2: Setup */
/* 
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';

(async () => {
  const db = new PGlite();

  // Set up the DB files
  const createTables = fs.readFileSync('sql/create-tables.sql', 'utf8');
  const insertCarsData = fs.readFileSync('sql/insert-cars-data.sql', 'utf8');
  await db.exec(createTables);
  await db.exec(insertCarsData);

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync('sql/crud-operations.sql', 'utf8');
  await db.exec(crudOperations);

  // Load the SQL query file
  const query = fs.readFileSync('query.sql', 'utf8');


  // Run the query from the query file
  const response = await db.query(query);

  console.clear();
  console.table(response.rows);
})();

*/
/* Lesson 1: Introduction Multiple Tables */

/* 
We will learn:
1. Creating database tables
2. Primary and foreign keys
3. Column constraints
4. Joining tables

And loads more! Plus challenges 

In the previous section, we used a single table

In these lessons, we'll be creating new tables

We'll learn to tables and see data from multiple talbes in outputs.

New Dealerships
We just had a great financial year and have opened new dealerdhips

Staff
We've recruited and are managing our employees using a new staff table

Sold cars
We'll add a table to hold the we've sold
*/

/* 
console.table([
  { column: "id", type: "serial" },
  { column: "cars_id", type: "int" },
  { column: "seller", type: "int" },
  { column: "date", type: "date" },
  { column: "price", type: "int" }
]);

console.table([
  { column: "id", type: "serial" },
  { column: "dealership_id", type: "int" },
  { column: "name", type: "text" },
  { column: "role", type: "text" }
]);

console.table([
  { column: "id", type: "serial" },
  { column: "dealership_id", type: "int" },
  { column: "brand", type: "text" },
  { column: "model", type: "text" },
  { column: "year", type: "int" },
  { column: "price", type: "int" },
  { column: "color", type: "text" },
  { column: "condition", type: "int" },
  { column: "sold", type: "boolean" }
]);

console.table([
  { column: "id", type: "serial" },
  { column: "city", type: "text" },
  { column: "state", type: "varchar" },
  { column: "established", type: "date" }
]);
 */
/*
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Introduction Multiple Tables"
const chapterNum = 2

const lesson = [
    "Introduction Multiple Tables",
    "Setup",
    "Creating tables",
    "Populating tables",
    "Alter table",
    "Joins",
    "Left and Right Join",
    "Full join, inner join and drop",
    "Aggregates",
    "Joining multiple tables",
    "A primer on SQL Injection",
    "Recap"
]

lessonGenerator(chapterName, lesson ,chapterNum)
 */

