/* Chapter - 2: Writing SQL Queries */

/* Lesson 25: Recap */


/* Lesson 24: DELETE */


/* Lesson 23: UPDATE */


/* Lesson 22: INSERT INTO */


/* Lesson 21: Manipulating data */
/* import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';

(async () => {
  const db = new PGlite();
  await db.exec(`
        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            brand TEXT,
            model TEXT,
            year INTEGER,
            price INTEGER,
            color TEXT,
            condition INTEGER,
            sold BOOLEAN
        );
        INSERT INTO cars (brand, model, year, price, color, condition, sold
        ) VALUES 
          ('Ford', 'Mustang', 1965, 45000, 'white', 4, false),
          ('Chevrolet', 'Camaro', 1970, 48000, 'red', 2, false),
          ('Dodge', 'Charger', 1969, 58000, 'black', 4, true),
          ('Porsche', '911', 1985, 85000, 'silver', 5, false),
          ('Jaguar', 'E-Type', 1967, 56000, 'green', 2, true),
          ('Jaguar', 'S-Type', 1963, 100000, 'dark green', 3, true),
          ('Jaguar', 'X-Type', 2001, 10000, 'black', 3, true),
          ('BMW', 'M3', 1990, 35000, 'green-yellow', 1, true),
          ('Ferrari', 'F355', 1997, 150000, 'red', 5, false),
          ('Ford', 'Mustang', 1967, 15000, 'dark blue', 0, false),
          ('Aston Martin', 'DB5', 1964, 595000, 'silver', 5, false),
          ('Aston Martin', 'DB4', 1960, 465000, 'light green', 5, false),
          ('Aston Martin', 'DBS', 1969, 99000, 'red', 2, false),
          ('Aston Martin', 'DB4', 1960, 425000, 'green', 3, false),
          ('Aston Martin', 'DB5', 1965, 649000, 'dark red', 5, false),
          ('Toyota', 'Supra', 1994, 68000, 'black', 4, true),
          ('Nissan', 'Skyline GT-R', 1999, 95000, 'blue', 5, false),
          ('Volkswagen', 'Beetle', 1963, 25000, 'yellow', 3, true),
          ('Lamborghini', 'Countach', 1989, 320000, 'red', 5, false),
          ('Rolls-Royce', 'Silver Shadow', 1975, 55000, 'white', 2, true),
          ('Bentley', 'Continental GT', 2005, 85000, 'black', 5, false),
          ('Maserati', 'GranTurismo', 2010, 75000, 'blue', 4, true),
          ('Alfa Romeo', 'Spider', 1986, 28000, 'red', 3, true),
          ('Ford', 'Mustang', 1965, 20000, 'dark red', 1, true),
          ('Lotus', 'Esprit', 1993, 62000, 'light yellow', 4, false),
          ('Triumph', 'Herald', 1965, 12500, 'cream', 3, true),
          ('Ford', 'Capri', 1983, 22000, 'blue', 2, false),
          ('Ford', 'Granada', 1977, 18000, 'black', 1, false),
          ('Volkswagen', 'Golf GTI', 1991, 12500, 'light green', 1, true),
          ('Chevrolet', 'Camaro', 1969, 54000, 'mint green', 5, true),
          ('Chevrolet', 'Corvette', 1967, 88000, 'red', 5, true),
          ('Chevrolet', 'Corvette C5', 2001, 32000, 'yellow', 4, true),
          ('Ferrari', 'Testarossa', 1988, 195000, 'red', 5, true),
          ('Ferrari', '360 Modena', 2003, 125000, 'silver', 5, true),
          ('Bentley', 'Arnage', 2001, 45000, 'black', 4, false),
          ('Bentley', 'Continental R', 1999, 68000, 'blue', 5, false),
          ('Jaguar', 'XJ220', 1994, 450000, 'silver', 5, false),
          ('Porsche', '911 Carrera', 1985, 85000, 'red', 5, false),
          ('Porsche', '911 Turbo', 1995, 12000, 'black', 1, false),
          ('Porsche', '944 Turbo', 1986, 48000, 'white', 4, true),
          ('Porsche', '356B', 1960, 265000, 'silver', 4, false),
          ('Mercedes-Benz', '300SLR', 1955, 142000000, 'silver', 5, false),
          ('Bentley', 'T2', 1978, 52000, 'silver', 4, false);
`);

  // Load the SQL file
  const query = fs.readFileSync('query.sql', 'utf8');

  // Insert example
  await db.exec(`
  INSERT INTO cars (
	brand, model, year, price, color, condition, sold
) VALUES (
	'Ford', 'Escort RS2000', 1978, 39000, 'blue', 4, FALSE
), (
	'Aston Martin', 'V8 Vantage', 1977, 145000, 'dark green', 5, FALSE
);`)


  // For section 4 - execute the CRUD operation
  await db.exec(query)

  // Display data from the table 
  const response = await db.query(`SELECT brand, model, year, price, condition, condition FROM cars ORDER BY id;`)

  console.clear();
  console.table(response.rows);
})();
 */

/* Lesson 20: Challenges 2 */


/* Lesson 19: HAVING */


/* Lesson 18: GROUP BY */


/* Lesson 17: MAX, MIN, AVG */


/* Lesson 16: COUNT and SUM */


/* Lesson 15: LIMIT */


/* Lesson 14: ORDER BY */


/* Lesson 13: Challenges 1 */


/* Lesson 12: IN operator */


/* Lesson 11: OR */


/* Lesson 10: BETWEEN */


/* Lesson 9: AND */


/* Lesson 8: NOT and LIKE */


/* Lesson 7: Not equal */


/* Lesson 6: Numerical Filtering */


/* Lesson 5: WHERE clause */


/* Lesson 4: Selecting Columns */


/* Lesson 3: SELECT all */
/* Navigate to query.sql */

/* Lesson 2: Project Setup */
/* 
Writing Queries: 
We're focusing on writing queries to view and manage data

PostgreSQL
We're using the PGLite library to run a PostgreSQL database in our 
scrims

Runner
When we save our project, index.js is run. This creates our query 
and logs the output.
*/

import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';

(async () => {
  const db = new PGlite();
  await db.exec(`
        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            brand TEXT,
            model TEXT,
            year INTEGER,
            price INTEGER,
            color TEXT,
            condition INTEGER,
            sold BOOLEAN
        );
        INSERT INTO cars (brand, model, year, price, color, condition, sold
        ) VALUES 
          ('Ford', 'Mustang', 1965, 45000, 'white', 4, false),
          ('Chevrolet', 'Camaro', 1970, 48000, 'red', 2, false),
          ('Dodge', 'Charger', 1969, 58000, 'black', 4, true),
          ('Porsche', '911', 1985, 85000, 'silver', 5, false),
          ('Jaguar', 'E-Type', 1967, 56000, 'green', 2, true),
          ('Jaguar', 'S-Type', 1963, 100000, 'dark green', 3, true),
          ('Jaguar', 'X-Type', 2001, 10000, 'black', 3, true),
          ('BMW', 'M3', 1990, 35000, 'green-yellow', 1, true),
          ('Ferrari', 'F355', 1997, 150000, 'red', 5, false),
          ('Ford', 'Mustang', 1967, 15000, 'dark blue', 0, false),
          ('Aston Martin', 'DB5', 1964, 595000, 'silver', 5, false),
          ('Aston Martin', 'DB4', 1960, 465000, 'light green', 5, false),
          ('Aston Martin', 'DBS', 1969, 99000, 'red', 2, false),
          ('Aston Martin', 'DB4', 1960, 425000, 'green', 3, false),
          ('Aston Martin', 'DB5', 1965, 649000, 'dark red', 5, false),
          ('Toyota', 'Supra', 1994, 68000, 'black', 4, true),
          ('Nissan', 'Skyline GT-R', 1999, 95000, 'blue', 5, false),
          ('Volkswagen', 'Beetle', 1963, 25000, 'yellow', 3, true),
          ('Lamborghini', 'Countach', 1989, 320000, 'red', 5, false),
          ('Rolls-Royce', 'Silver Shadow', 1975, 55000, 'white', 2, true),
          ('Bentley', 'Continental GT', 2005, 85000, 'black', 5, false),
          ('Maserati', 'GranTurismo', 2010, 75000, 'blue', 4, true),
          ('Alfa Romeo', 'Spider', 1986, 28000, 'red', 3, true),
          ('Ford', 'Mustang', 1965, 20000, 'dark red', 1, true),
          ('Lotus', 'Esprit', 1993, 62000, 'light yellow', 4, false),
          ('Triumph', 'Herald', 1965, 12500, 'cream', 3, true),
          ('Ford', 'Capri', 1983, 22000, 'blue', 2, false),
          ('Ford', 'Granada', 1977, 18000, 'black', 1, false),
          ('Volkswagen', 'Golf GTI', 1991, 12500, 'light green', 1, true),
          ('Chevrolet', 'Camaro', 1969, 54000, 'mint green', 5, true),
          ('Chevrolet', 'Corvette', 1967, 88000, 'red', 5, true),
          ('Chevrolet', 'Corvette C5', 2001, 32000, 'yellow', 4, true),
          ('Ferrari', 'Testarossa', 1988, 195000, 'red', 5, true),
          ('Ferrari', '360 Modena', 2003, 125000, 'silver', 5, true),
          ('Bentley', 'Arnage', 2001, 45000, 'black', 4, false),
          ('Bentley', 'Continental R', 1999, 68000, 'blue', 5, false),
          ('Jaguar', 'XJ220', 1994, 450000, 'silver', 5, false),
          ('Porsche', '911 Carrera', 1985, 85000, 'red', 5, false),
          ('Porsche', '911 Turbo', 1995, 12000, 'black', 1, false),
          ('Porsche', '944 Turbo', 1986, 48000, 'white', 4, true),
          ('Porsche', '356B', 1960, 265000, 'silver', 4, false),
          ('Bentley', 'T2', 1978, 52000, 'silver', 4, false);
`);

  // Load the SQL file
  const query = fs.readFileSync('query.sql', 'utf8');

  // Executing simple queries for sections 1 - 3
  const response = await db.query(query);

  console.clear();
  console.table(response.rows);
})();


/* 
IIFE : Immediately Invoked Function Expression

1. Name & Meaning: Ise IIFE kehte hain. Yeh ek aisa function 
  expression hai jo define hote hi turant run (execute) ho jata hai.

( () => {
    console.log("Hello!");
})();

// Kuch lines ke baad...
(); // <--- SyntaxError!

3. Syntax Breakdown:
  A.) First Parentheses (...): Yeh function ko Statement se Expression mein convert karta hai.

  B.) Function () => { ... }: Yeh actual code body hai (Arrow ya Normal function dono use kar sakte hain).

  C.) Second Parentheses (): Yeh function ko turant call/execute karne ka kaam karta hai.

4. One-Time Execution: Yeh sirf ek hi baar chalta hai, jab script ya file load hoti hai.
*/

/* Lesson 1: Introducing our SQL project */
/* 
Retro Rides
Car dealership that sells vintage autos from the 1900s.

Powered by SQL
The CEO, Rodney, manages his stock of vintage cars 
using an SQL databases.

Room to grow
We'll start with one table and grow that to use
multiple in later lessons.

Setup
We'll be using a simple node application with PGLite library

Practical understanding:
We'll focus on building skills writing SQL queries 
rather that a fully functional application.

*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Writing SQL Queries"
const chapterNum = 2
const lesson = [
    "Introducing our SQL project",
    "Project Setup",
    "SELECT all",
    "Selecting Columns",
    "WHERE clause",
    "Numerical Filtering",
    "Not equal",
    "NOT and LIKE",
    "AND",
    "BETWEEN",
    "OR",
    "IN operator",
    "Challenges 1",
    "ORDER BY",
    "LIMIT",
    "COUNT and SUM",
    "MAX, MIN, AVG",
    "GROUP BY",
    "HAVING",
    "Challenges 2",
    "Manipulating data",
    "INSERT INTO",
    "UPDATE",
    "DELETE",
    "Recap"
]
lessonGenerator(chapterName, lesson, chapterNum)  
*/