/* Chapter - 4: Persistence */

/* Lesson 10: Recap */


/* Lesson 9: Insert new data */


/* Lesson 8: New deal form */
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <App />
        </StrictMode>
)


/* Lesson 7: Realtime subscription */


/* Lesson 6: Format data for chart rerec */


/* Lesson 5: Storing the data in state */


/* Lesson 4: Query with aggregate function */


/* Lesson 3: Query the database using supabase-js */
/* import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "../App"

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <App />
        </StrictMode>
    )
 */
/* Lesson 2: Supabase project setup */
/* 
*Challenge:* 
1) Insert more rows until you have at least 3 different sales rep names.
2) Make sure the highest value is not tied with anyone else.
3) Make sure at least 1 sales rep is duplicated.
WARNING: Make sure there is no whitespace eitherside of the name.
*/
/* 
JavaScript Client Library:
supabase-js: A Powerful SDK that simplifies database interactions by 
abstractions by abstracting complex API calls and providing a seamless 
interface for postgreSQL database operations.

Also be used to...

. listen to database changes
. invoke Deno Edge Functions
. build login and user management functionality
. manage large files


It provides Simplicity, Security, Performance.

1. Simplicity
. Converts into HTTPS Request
. PostREST converts to SQL
. Transforms to JSON
. Process into JS Object

2. Security
. DDOS protection
. Prevents SQL injection
. RLS at database level

3. Performance
. Connection Pooling
. Caching

*/

/* Lesson 1: Introduction */
/* 
Teacher: Jonathan Hill

We will be:
1. Creating Supabase  project and table
2. Connecting database to frontend
3. Querying database to fetch data
4. Setting up-realtime database subscription
5. Inserting data via front-end form

Plus challenges!

*/


/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Persistence"
const chapterNum = 4
const lesson = [
    "Introduction",
    "Supabase project setup",
    "Query the database using supabase-js",
    "Query with aggregate function",
    "Storing the data in state",
    "Format data for chart rerec",
    "Realtime subscription",
    "New deal form",
    "Insert new data",
    "Recap"
];
lessonGenerator(chapterName, lesson, chapterNum)
 */