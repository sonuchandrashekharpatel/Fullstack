/* Lesson 11: Serve the frontend */
/*
Challenge: 
  1. Write code below to serve files from our public directory.
     
    Don’t worry about handling errors for now.
    hint.md for help!
*/
/*
Challenge:

 If the error code is “ENOENT”, serve the 404.html page.  
 If there’s another error, serve a 500 with this string: 
 `<html><h1>Server Error: ${err.code}</h1></html>`. 

The Content-Type for the 500 can be ‘text/html’.
*/

import path from 'node:path'
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js"
import { getContentType } from "./getContentType.js"

export async function serveStatic(req, res, baseDir) {
    const publicDir = path.join(baseDir, "public")

    const filePath = path.join(publicDir, req.url === "/" ? "index.html" : req.url)

    const ext = path.extname(filePath)

    const contentType = getContentType(ext)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)

    } catch(err) {
        
        if(err.code === "ENOENT"){
            const filePath = path.join(baseDir, "public", "404.html")
            const content = await fs.readFile(filePath)
            sendResponse(res, 404, 'text/html', content)
        } else {
            sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`)
        }
    }
}


/* Lesson 10: Aside: Serve Multiple Assets */



/* Lesson 8: Serve index.html */
/*
Challenge 1: 

- Store index.html as a buffer in a const ‘content’. 
- As this is an async process, do this inside a try/catch block.
- For now, just log the error in the catch block.
- You will need to change something to do with the function declaration. What is it?

*/

/*
Challenge 3:

- Import sendResponse() and use it to serve index.html. 
  Pass in all of the information sendResponse() is expecting.
  serveStatic() will need another param. What is it?

  Make any changes necessary in server.js and delete any unneeded code.

*/
/* 
import path from 'node:path'
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js"

export async function serveStatic(res, baseDir) {
    const filePath = path.join(baseDir, "public", "index.html")

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)

    } catch(err) {
        console.error(err)
    }
}
 */

/* Lesson 6: Get Path to resource */

/* 
// Challenge 2:

// 1. Create and export a function called 'serveStatic'. 
//    It should take in the base directory as a parameter.

// 2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
//    (Which node module will you need to import to do this? Which method joins the path together?)

// 3. Log 'filePath' to the console.

import path from "node:path"

export function serveStatic(baseDir) {
    const filePath = path.join(baseDir, "public", "index.html")

    console.log(filePath)
} 
*/

/* 
import path from 'node:path'
import fs from "node:fs/promises"

export async function serveStatic(baseDir) {
    const filePath = path.join(baseDir, "public", "index.html")

    const content = await fs.readFile(filePath)


    console.log(filePath)
}
 */