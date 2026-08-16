/* Chapter - 1: Build a Node API */

/* Lesson 19: Wrapping Things Up */
/* 
What we studies:
. The core HTTP module
. Creating a server
. sending status code(200, 400, etc)
. setting headers
. handling requests/responses
. filtering data
. extracting query params

Stretch Goals
. Gentler error handling
. Handle POST request
    . ingone authentication for now
. Add better filtering
. Expand this api and sell it!

*/

/* Lesson 18: CORS */
/* 
Same-Origin Policy
"By default, browser enforce a same-origin policy,
this means request can only be made to the same 
protocol, domain, and port as the one serving the webpage."

url: 

Protocol: https, http
Domain: scrimba.com, mozilla.org
Port: 8000, 3000

CORS -> Cross Origin Resource Sharing

No need to set CORS
CORS needed to allow to known frontend.
CORS needed to allow all access


    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

*/

/* Lesson 17: Filter the Query Parameters */
/*
Challenge:

  1. Update filteredData so it holds only the objects the client wants 
     based on query params. If the client doesn’t use any query params, 
     serve all of the data.
     The query params we are accepting are:
     'country', 'continent', and 'is_open_to_public'.

     Keep our code tidy by doing the the filtering in a util function.
*/
/* 
import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
import { resRender, getDataByPathParams, getDataByQueryParams } from './utils/utils.js'
 
const PORT = 8000

let continent = ''

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    const urlOb = new URL(req.url, `http://${req.headers.host}`)

    console.log(urlOb)
    const queryOb = Object.fromEntries(urlOb.searchParams)
    const search =  urlOb.search
    // const search = ""
    
    if (urlOb.pathname === '/api' && req.method === 'GET') {
        console.log("Query Object:", queryOb)

        if(search) {
            resRender(res, getDataQueryParams(destinations, queryOb))
        } else {

            resRender(res, destinations)
        }
    } 
    else if(req.url.startsWith("/api/continent")) {
        const data = getDataByPathParams(destinations, urlOb.pathname)

        if(search){
            resRender(res, getDataByQueryParams(data, queryOb))
        } else {
            resRender(res, data)
        }
    }
    else if(req.url.startsWith("/api/country") && req.method === "GET") {
        const data = getDataByPathParams(destinations, urlOb.pathname)
        if(search) {
            resRender(res, getDataByQueryParams(data, queryOb))
        } else {        
            resRender(res, data)
        }
    }
    else {
        resRender(res, {error: "not found", message: "The requested route dosen't exist"})
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
 */

/* Lesson 16: Get the Query Parameters */
/*
  Challenge:
  1. Complete the two lines of code below.
  Use the URL constructor and pass in the relative and base urls.
  
  Use the fromEntries() method on the Object class .
  What do you need to pass in? 
*/
/*
Challenge:
  1. Have a look through the urlObj and find a property which we 
     can use instead of req.url. We need something that will 
     satisfy the condition regardless of whether query params were used.
*/

/* 
import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
import { resRender, filterData } from './utils/utils.js'
 
const PORT = 8000

let continent = ''

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    const urlOb = new URL(req.url, `http://${req.headers.host}`)

    console.log(urlOb)
    const queryOb = Object.fromEntries(urlOb.searchParams)
    const search =  urlOb.search
    
    if (urlOb.pathname === '/api' && req.method === 'GET') {
        console.log("Query Object:", queryOb)

        resRender(res, destinations)
    } 
    else if(req.url.startsWith("/api/continent")) {

        console.log(req.url.split("/")[2]) // continent
        const property = req.url.split("/")[2]
        const continent = req.url.split("/").pop()

        resRender(res, filterData(destinations, property, continent))
    }
    else if(req.url.startsWith("/api/country") && req.method === "GET") {

        const value = req.url.split("/").pop()
        const property = req.url.split("/")[2]

        resRender(res, filterData(destinations, property, value))
    }
    else {
        resRender(res, {error: "not found", message: "The requested route dosen't exist"})
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
 */
/* Lesson 15: Aside: Query Parameters */

/* import http from "node:http"
const server = http.createServer((req, res) => {

    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)
    console.log(urlObj)

    // console.log(urlObj)

    res.end(JSON.stringify(queryObj))
})

server.listen(3000, () => {
    console.log("Server is running on 3000...")
})
 */

/* Lesson 14: Modularize the code 2 */

/*
Challenge:
  1. Add an 'api/country/<country>' route.
*/
/*
Challenge:
  1. Create a util function to filter data.
  2. Wire it up and delete unneeded code.
*/
/* 
import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
import { resRender, filterData } from './utils/utils.js'
 
const PORT = 8000

let continent = ''

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    resRender(destinations, res)
  } 
  else if(req.url.startsWith("/api/continent")) {

    console.log(req.url.split("/")[2]) // continent
    const property = req.url.split("/")[2]
    const continent = req.url.split("/").pop()

    resRender(filterData(destinations, property, continent), res)
  }
  else if(req.url.startsWith("/api/country") && req.method === "GET") {

    const value = req.url.split("/").pop()
    const property = req.url.split("/")[2]

    resRender(filterData(destinations, property, value), res)
  }
  else {
      resRender({error: "not found", message: "The requested route dosen't exist"}, res)
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
 */

/* Lesson 13: Modularise the Code 1 */
/*
Challenge:
  1. Create a utility function to make this code DRYer.
  2. Delete unnecessary code.
*/
/* 
import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
import { resRender } from './utils/utils.js'
 
const PORT = 8000

let continent = ''

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    resRender(destinations, res)

  } 
  else if(req.url.startsWith("/api/continent")) {

    console.log(req.url.split("/")[3])

    const continent = req.url.split("/").pop()

    const filteredDestinations = destinations.filter(destination => {
        console.log(destination.continent, continent)
        return destination.continent.toLowerCase() == continent
    }
    )
    resRender(filteredDestinations, res)
  }
  else {
      resRender({error: "not found", message: "The requested route dosen't exist"}, res)
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
 */
/* Lesson 12: Add Path Parameters */
/* 
 Challenge:
  1. Check if the url starts with “/api/continent”.
    (Is there a JS method that allows you to check what a string starts with?)

  2. If it does, serve only items from that continent.
    (How can you get to what comes after the final slash?)
    (What method can you use to filter data?)
*/
/* import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
 
const PORT = 8000

let continent = ''

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200

    res.end(JSON.stringify(destinations))

  } 
  else if(req.url.startsWith("/api/continent")) {

    console.log(req.url.split("/")[3])
    // const continent = req.url.split("/")[3]
    const continent = req.url.split("/").pop()

    const filteredDestinations = destinations.filter(destination => {
        console.log(destination.continent, continent)
        return destination.continent.toLowerCase() == continent
    }
    )

    res.end(JSON.stringify(filteredDestinations))

  }
  
  else {
      res.statusCode = 404
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify({error: "not found", message: "The requested route dosen't exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
 */

/* Lesson 11: Route Not Found */
/*
Challenge:
  1. If the client tries to access a route that isn’t covered by the above, send this object: 
      {error: "not found", message: "The requested route does not exist"}
  Think: what do we need to send along with the data?
  status code
*/
/* 
import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200

    res.end(JSON.stringify(destinations))

  } else {
      res.statusCode = 404
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify({error: "not found", message: "The requested route dosen't exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
 */

/* Lesson 10: Adding Content-Type */
/* 
Content-Types (Mime Types)  
. application/json
. text/html
. text/css
. application/javascript

. etc...

Mime Types
 In Content‑Types (MIME Types), the word MIME stands for Multipurpose Internet Mail Extensions.

🔎 Meaning of MIME
Originally developed for email systems so that messages could carry not just plain text but also attachments like images, audio, video, or application files.

Over time, MIME types became the standard way to describe the nature of any file on the internet.
*/
/*
Challenge:
1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
   Content-Type to ‘application/json’ - watch out for casing! 
*/
/* import http from 'node:http'
import { getDataFromDB } from './aside/db.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

    console.log(res)

  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200


    // res.end(JSON.stringify(destinations))
  }
    console.log(res)
    res.end("Namastey")

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

 */
/* Lesson 9: Serve stringified JSON */
/* 
import http from "http"
import { getDataFromDB } from "./aside/db.js"

const server = http.createServer( async (req, res) => {
    const destinations = await getDataFromDB()

    if(req.method === "GET" && req.url === "/api") {
        res.end(JSON.stringify(destinations))
    } else {
        res.end("Sorry! We don't serve here.")
    }
})

server.listen(3000, () => {
    console.log("Server is running on 3000...")
})
 */

/* Lesson 8: Aside: JSON and APIs */
/* 
"HTTP is text-based protocol. All data transferred between 
client and server must be in the form of strings."

Use the JSON.stringify() method to work with
*/
/* 
const animal = {
    type: "mammal",
    name: "Whale"
}

console.log(animal)
console.log(typeof animal)
console.log(JSON.stringify(animal))
console.log(typeof JSON.stringify(animal))
 */

/* Lesson 7: Routing and the req object */
/* 
The Request Object
. Gives us acess to the incoming request
. The url the client used
. The headers
. Any data sent
. The method (GET, POST, DELETE)

Method:
. GET
. POST
. DELETE
. PUT
. PATCH

This is non-exhastive list

 */
/* 
import http from "node:http"

const server = http.createServer((req, res) => {
    console.log(req.method)
    if(req.url === "") {
        res.end("This is from server!")
    }

    res.end(`${req.method}`)

})

server.listen(3000, () => {
    console.log("Server is running on 3000...")
})
 */
/* Lesson 6: Aside: The Request/Response Cycle */
/* 
Client make request.
REQUEST:

. Method: GET
. Request Path: /api
. Data: query string/path params

Server Handles the reqeust:
HANDLE REQUEST:
. filtering data
. throwing an error
. Generate Response

RESPONSE:
. Resource (JSON)
. Content-Type: application/json
. Status code: 200, 404 etc.
. Status message: OK

Response sent back to client.



*/

/* Lesson 5: Recap */
/* 
The response object
. Has method which allow us to:
    . specify content-type
    . set status code (200, 400)
    . provide content(html, JSON, images)

    .end() This ended with responses well it one chunk
    .write()  in several chunk.

    use res.end() after the write() to cut off the the connection.
*/
/* 
import http from "node:http"

const server = http.createServer((req, res) => {
    res.write("This is some data \n"),
    res.write("This is some more data! \n")
    res.end("Hello from server!")

}, "utf8", () => {
    console.log("Response end.")
})

server.listen(3000, () => {
    console.log("Server is running 3000....")
})
 */

/* Lesson 4: Recreate the server */
/* 
Challenge:
1. Recreate our server so we send a string over http when a GET request comes in. 
2. Test it by making a GET request to http://localhost:8000 in the network widget.
See hint.md for prompts.
*/
/* import http from "node:http"

const PORT = 3000

const server = http.createServer((req, res) => {
    res.end("Hello from the server!")
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)
} )
 */

/* Lesson 3: Aside: The HTTP */
/* 
The HTTP Module
. Allows data to be transferred over  the HTTP protocol
. Create servers
. Handle requests from clients
. Provide responses to those requests
*/

import http from "node:http"

const PORT = 8000
const server = http.createServer((req, res) => {
    res.end("Hello from the server")
})

server.listen(PORT, () => {
    console.log("Server is running on ", PORT)
})

/* 
import http from 'node:http'// This helps apps to look for node modules not our own java script module
const PORT = 3000

const server = http.createServer((req, res) => {
    res.end("Hello from the server!")
})

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

console.log("Sab Thik Hai Sir!")
*/
/* Lesson 2: The package.json file */
/* 
package.json is the blueprint!
. Contains metadata {name, version, author, description etc.}
. Simplifies collaboration
    . Manages dependencies
    . Defining start script
*/

/* 
console.log("Hello Node!")
 */

/* Lesson 1: Wild Horizons Intro */
/* 
Intro
3 ways users can get data:
1. /api
2. /api/coutry/india
3. /api?count=turkey&is_open_to_public=true

We will be studying:
. The core HTTP module
    . create a server
    . sending status code(200, 400, etc)
    . setting headers
    . handling request and responses
    . filtering data
    . extracting query params

And loads more! Plus challenges
*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a Node API"

const chapterNum = 1

const lesson = [
    "Wild Horizons Intro",
    "The package.json file",
    "Aside: The HTTP",
    "Recreate the server",
    "Recap",
    "Aside: The Request/Response Cycle",
    "Routing and the req object",
    "Aside: JSON and APIs",
    "Serve stringified JSON",
    "Adding Content-Type",
    "Route Not Found",
    "Add Path Parameters",
    "Modularise the Code 1",
    "Modularize the code 2",
    "Aside: Query Parameters",
    "Get the Query Parameters",
    "Filter the Query Parameters",
    "CORS",
    "Wrapping Things Up"
]

lessonGenerator(chapterName, lesson, chapterNum)
 */
