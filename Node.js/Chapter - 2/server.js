/* Chapter - 2: Build a fullstack Node App */

/* Lesson 24: outro */

/* 
We studied:
. The FS module
    . reading and writing files
. The Path module
    . create file/directory paths
. Serving static assets
. Dependencies
. Sanitizing input


Stretch Goals
. Error Handling
    . A client request /api/xyz
    . A client request /api but uses a method which is not GET or POST
. Add uuids to incoming data
    . Use a dependency to generate the uuid
*/


/* Lesson 23: Intro Nodemon */
/* 
The Iteration Process
Edit -> Save -> See results

Hot Reloading with Nodemon
npm i --save-dev nodemon
npm i -D nodemon 

type in scripts of package.json
"dev" : "node server.js"
npm run dev // other start , run is used

What about frontend files?

Recap :
1. It's only for development
2. It's convenient tool. It dosen't change how Node.js runs
3. It's configurable: you can ignore files, watch specific extensions etc.

*/

/* Lesson 22: Server-Sent Events Challenge */
/*
Challenge 1:
  1. Set Content-Type, Cache-Control, and Connection headers
*/

/*
Challenge 2:
  1. Use res.write() to send an object to the frontend. 

  The object should include:
    - an event property with a descriptive name.
    - a story chosen at random from the stories array.

  Remember, the object is contained in a string which starts with 'data: '. 
  What do you need at the end of the string to signal the end of a message block?
*/
/* 
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"
import { handleGet, handleNews, handlePost } from "./handlers/routeHandlers.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    if(req.url === "/api"){
        if(req.method === "GET"){
            return await handleGet(res)
        }
        else if(req.method === "POST") {
            handlePost(req, res)
        }
    } 
    else if(req.url === "/api/news") {
        return await handleNews(req, res)
    }
    
    else if (!req.url.startsWith('/api')) {

        await serveStatic(req, res, __dirname)
    } else {
        console.log(req.url)
    }
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */
/* Lesson 21: Aside: Server-Sent Events */
/* 
Server-Sent-Events
. Provide a constant stream of data to a client
    . breaking news
    . Stock price tickers
    . Sport scores
    . Real-time monitoring

. Data flows only one way, so not suitable for
    . chat apps
    . Doorbell cams
    . Anything where two-way communication is needed
 
*/

/* 
For code goto aside folder of the this module
*/

/* Lesson 20: Add an Event Emitter */


/* Lesson 19: Aside: EventEmitter */
/* 
Event-Driven Architecture

Events : 
. An event signal that something happened
    . A user clicks a button
    . A file finishes downloading
    . A network request is received
    . And many more

The eventEmitter from node events module
*/

/* 
// import EventEmitter
import { EventEmitter } from "node:events"

const customersDetails = {
    fullName: "Meryl Sheep",
    email: "sonu123@gmail.com",
    phone: 1234567890
}

// create the emitter
const emailRequestEmitter = new EventEmitter()

// define the listener function
function generateEmail(customer) {
    console.log(`Email generated for ${customer.email}`)
}

// register the listener
emailRequestEmitter.on("emailRequest", generateEmail)
emailRequestEmitter.on("emailRequest", () => console.log("task assigned"))
emailRequestEmitter.on("emailRequest", () => console.log("email logged"))

// emit the event
setTimeout(() => {
    emailRequestEmitter.emit("emailRequest", customersDetails)
}, 2000)
    emailRequestEmitter.emit("emailRequest", customersDetails)
 */

/* Lesson 18: sanitizeInput */
/* 
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"
import { handleGet, handlePost } from "./handlers/routeHandlers.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    if(req.url === "/api"){
        if(req.method === "GET"){
            return await handleGet(res)
        }
        else if(req.method === "POST") {
            handlePost(req, res)
        }
    }
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 17: Aside: sanitization */
/* import sanitizeHtml from 'sanitize-html'


// console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>',  {allowedTags: ["h1"], allowedAttributes: {}}))

// console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>'))
// console.log(sanitizeHtml('strong: <strong>I am in a strong tag</strong>'))
// console.log(sanitizeHtml('p: <p>I am in a p tag</p>'))
// console.log(sanitizeHtml('style: <style>I am in a style tag</style>'))
// console.log(sanitizeHtml("script:<script>I am in a script tag</script>"))




const hacker = {
    title: "Dr",
    sirname:  "<script>Evil</script>",
    location: "A dark room somewhere"
}

console.log(sanitizeHtml(hacker.title))
console.log(sanitizeHtml(hacker.surname))
console.log(sanitizeHtml(hacker.location))
 */

/* 
XSS = Cross-Site Scripting

An XSS (Cross-Site Scripting) attack is a security valnuerability
that allow an attacker to inject malicious scripts into webpages

Sanitization 
Sanitization is removing something suspicious from incoming input.
In this case, we will be removing any tags from user-uploaded text.

*/

/* Lesson 16: Handling POST Part 2 */
//addNewSightings

/* Lesson 16: Handling POST Part 1 */
// routeHandlers()

/* Lesson 16: parseJSONBody */
/* 
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"
import { handleGet, handlePost } from "./handlers/routeHandlers.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    if(req.url === "/api"){
        if(req.method === "GET"){
            return await handleGet(res)
        }
        else if(req.method === "POST") {
            handlePost(req, res)
        }
    }
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
  */

/* Lesson 15: Incoming Body Parse */
/* 
import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs/promises'
import { getContentType } from './aside/utils/getContentType.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  if (req.url === '/sub' && req.method === 'POST') {

    // let body = ''

    // for
  }

//   handle post here

  const publicDir = path.join(__dirname, 'public')
  const pathToResource = path.join(
    publicDir, 
    req.url === '/' ? 'index.html' : req.url
  )

  const content = await fs.readFile(pathToResource)

  const extName = path.extname(pathToResource)
 
  const contentType = getContentType(extName)

  res.statusCode = 200
  res.setHeader('Content-Type', contentType)
  res.end(content)

})

server.listen(PORT, () => console.log('connected on port 8000'))
 */

/* Lesson 14: Explainer: Adding POST */
/* 
Adding POST functionality
. collect the incoming data
. Parse it
. sanitize it
. Get out existing data
. Add the new datat to the existing data
. Write the completed data to the JSON file

*/
/*
Challenge: 
   1. Add a route for a POST request to '/api'.
   2. When a request comes in, pass the req and res to handlePost().
*/

/* import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"
import { handleGet, handlePost } from "./handlers/routeHandlers.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    console.log("Entering in backend...")
    console.log("api: ", req.url, "method :", req.method)
    console.log(req.url === "/api" && req.method === "POST")
    if(req.url === "/api"){
        if(req.method === "GET"){
            return await handleGet(res)
        }
        else if(req.method === "POST") {
            console.log("In Post request")
            handlePost(req, res)
        }
    }
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */


/* Lesson 13: Wire up the API */
/* 
Challenge: 
   1. Set up a route for ‘/api’.
   2. Nest an if to check if the method is ‘GET’. 
   3. When a GET request is received to '/api', use handleGet() to handle it.
*/

/* import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"
import { handleGet } from "./handlers/routeHandlers.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    if(req.url === "/api"){
        if(req.method === "GET"){
            return await handleGet(res)
        }
    }
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 12: Getting the JSON data */
/* 
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    getData()
    // console.log(import.meta)
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 11: Serve the frontend */
/* import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"

const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 10: Aside serve Multiple Assets */
/* import http from 'node:http'
import path from "node:path"
import fs from "node:fs/promises"
import { getContentType } from './utils/getContentType.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    const publicDir = path.join(__dirname, 'public')
    
    const pathToResource = path.join(publicDir, 
        req.url === "/" ? 'index.html': req.url
    )

    const content = await fs.readFile(pathToResource)

    const ext = path.extname(pathToResource)
    const contentType = getContentType(ext)

    res.statusCode = 200
    res.setHeader("Content_Type", contentType)
    res.end(content)

})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))

 */

/* Lesson 9: global vars in node */
/* 
// CommonJS
// console.log("hey!")
// console.log(__dirname)
// console.log(__filename)
// const path = require("node:path")

// ES Modules using import.meta
// ES Module after v20+
// console.log(import.meta.dirname)
// console.log(import.meta.filename)

// ES module using import.meta v20-

// import path from 'node:path'
// import url from 'node:url'

// const __filename = url.fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// console.log(__filename)
// console.log(__dirname)
 */

/* Lesson 8: Serve index.html */
/* 
import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))

 */
/* Lesson 7: Aside: FS Module */
/* 

FS module uses:
. Read files - .readFile()
. Create files - .writeFile()
. Update file - .appendFile()
. Delete files .unlink()
. Rename files - .rename()

*/

/*
import http from "node:http"
import path from "node:path"
// import fs from "node:fs"
import fs from "node:fs/promises" //for asychronus code

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer( async (req, res)=> {
    const pathToResource = path.join(__dirname, "public", "index.html")

    // const content = fs.readFileSync(pathToResource, "utf8") // Because this could create performance issues.

    // fs.readFile(pathToResource, "utf8", (err, content) => {
    //     if(err) {
    //         console.error(err)
    //         return 
    //     } else {
    //         res.statusCode = 200
    //         res.setHeader('Content-Type', 'text/html')
    //         res.end(content)
    //     }
    // })

    // To avoid the callback hell we are using this.

    const content = await fs.readFile( pathToResource)
    console.log(content)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(content)

})

server.listen(PORT, () => console.log('connected on port 8000'))
 */

/* Lesson 6: Get Path to resource */
/* 
Challenge 1:

1. Get the name of the directory holding this server.js file and store it to a const ‘__dirname’.

Challenge 2:

1. Create and export a function called 'serveStatic'. 
   It should take in the base directory as a parameter.

2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
   (Which node module will you need to import to do this? Which method joins the path together?)

3. Log 'filePath' to the console.

Challenge 3:

1. Import and call serveStatic and pass it the directory of this current module.

*/
/* 
import http from 'node:http'
import path from "node:path"
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000


// Challenge 1:

// 1. Get the name of the directory holding this server.js file and store it to a const ‘__dirname’.


const __dirname = import.meta.dirname
console.log(__dirname)


const server = http.createServer((req, res) => {


// Challenge 3:

// 1. Import and call serveStatic and pass it the directory of this current module.

    serveStatic(__dirname)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
 */

import http from "http"
import { serveStatic } from "./utils/serveStatic.js"
const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res)=> {
    serveStatic(__dirname)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end("<h1>Wait...</h1>")
})

server.listen(PORT, () => console.log('connected on port 8000'))



/* Lesson 5: Aside: Path Module */
/* 
The Current Working Directory (CWD) is the folder you're in 
then you run your Node.js app, typically with a command like:
node server.js

Absolute Paths
. Show the full location of a file or folder on the system where 
  your code is running.
. Always the same, no matter where you run your main script 
  (index.js in our case)
. Independent of the current working directory(CWD)
. "/users/jane/my-app/public/index.html"

Relative Paths
. Relative to the file it appears in.
. Often include . (current folder) or .. (up one folder)

ex: import { serveStatic } from "./utils/serveStatic.js"


Relative paths created with path module:
. Start from current working directory.
. Are therefore affected by changes to the CWD.
. That means they're not as safe, but sometime more flexible.

Path Module
. Join path elements to create one path (absolute or relative) which will work on any supported OS.
. Extract file names and extensions.
*/

/* 
import http from "http"
import path from "node:path"

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res)=> {
    const absPathToResource = path.join(__dirname, "public", "index.html")
    const relPathToResource = path.join("public", "index.html")

    console.log("Absolute: ",absPathToResource)
    console.log("Relative: ", relPathToResource)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end("<h1>Wait...</h1>")
})

server.listen(PORT, () => console.log('connected on port 8000'))

*/

/* Lesson 4: Routing and Paths */
/* 
Reading and serving data
. Identify what resources the client wants.
. Identify the path to that resource:
    . The current module's directory.
    . The path to that resource from that directory.
. Read the resources we want to serve using FS Module
. Send those resources to the client.



// Scrimba 
const filePath = '/home/projects/s0ptsakbdf/pubic/index.html'

// Mac 
const filePath = '/users/thomas/docs/s0ptsakbdf/public/index.html'

// Windows
const filePath = `\Users\thomas\docs\s0ptsakbdf\public\index.html`

We need to be OS agnostic
agnostic means something that doesn't care about the path

import.meta
import.meta is an object specific to the  modular JS environment,
which provides metadata about the current module.

*/
/* import http from "http"

const PORT = 8000
const __dirname = import.meta.dirname

console.log(__dirname)

const server = http.createServer((req, res)=> {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end()
})

server.listen(PORT, () => console.log('connected on port 8000'))
 */
/* Lesson 3: A Diversion into the writeHead() */
/* 
res.writeHead() vs res.setHeader()
What's the difference?

res.setHeader()
1. Sets a response header but dosen't send it immediately.
2. Allow you to set or modify headers individually, at any point 
   before sending the response.

res.writeHead()
1. Send any headers immediately.
2. No further modification is possible.

Potential problems
1. A header set using setHeader() after writeHead() will not be not be included in response.

2. A header set using setHeader() can be overruled by a header set with writeHead().

*/
/* 
First Point
import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end('<html><h1>The server is working!!!</h1></html>')

})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))

// Second Point
import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'})
    res.end('<html><h1>The server is working!!!</h1></html>')

})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`)) */

/* 
import http from "node:http"

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "text/html")
    // res.statusCode = 200
    res.writeHead(200, { "Content-Type" : "text/html" })
    res.end("<html><h1>The server is working</h1></html>")
})

const PORT = 8000

server.listen(8000, () => {
    console.log(`Server is running on ${PORT}`)
})
 */

/* Lesson 2: Setting up the project */
/*
Challenge: 
1. Initialise a nodejs project:
	Name: “from-the-other-side”.
    Description: “A platform for sharing ghostly encounters”.

2. Enable modular js (in package.json).

hint.md for help
*/
/* 
import http from "node:http"

const PORT = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, () => { console.log(`Server is running on ${PORT}...`)})
 */
/* Lesson 1: Intro */
/* 
Our three main tasks:
. Serve assets
. Provide data via an API
. Add user input to our data

Extra
. A section Events

We will  be studying:
. The FS Module
    . reading/writes files
. The Path module
    . create file/directory paths
. Serving static assets
. Using a dependancy to sanitize input
. Event Emmitters & Server-sent events

*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a fullstack Node App"

const chapterNum = 2

const lesson = [
    "Intro",
    "Setting up the project",
    "A Diversion into the writeHead()",
    "Routing and Paths",
    "Aside: Path Module",
    "Get Path to resource",
    "Aside: FS Module",
    'Serve index.html',
    "global vars in node",
    "Getting the JSON data",
    "Wire up the API",
    "Explainer: Adding POST",
    "Incoming Body Parse",
    "parseJSONBody",
    "Handling POST Part 1",
    "Handling POST Part 2",
    "Aside: sanitization",
    "sanitizeInput",
    "Aside: EventEmitter",
    "Add an Event Emitter",
    "Aside: Server-Sent Events",
    "Server-Sent Events Challenge",
    "Intro Nodemon",
    "outro"
]

lessonGenerator(chapterName, lesson, chapterNum) */