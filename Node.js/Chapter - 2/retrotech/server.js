/* Lesson 15: Incoming Body Parse */

import path from "node:path"
import http from "node:http"
import fs from "node:fs/promises"
import {getContentType} from "./utils/getContentType.js"

const PORT = 8001

const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {

  if(req.method === "POST" && req.url === "/sub") {
    
    try {
      let body = ''
  
      for await( let chunk of req) {
        body += chunk
  
      }
      console.log(body)
      const emailObj = JSON.parse(body)
      console.log(emailObj)

      res.statusCode = 201
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(emailObj))

    } catch (err) {
      console.error('Invalid JSON', err)

    }
    return
  }

  const publicDir = path.join(__dirname, 'public')

  console.log(req.url)
  const pathToResource  = path.join(publicDir, req.url === "/" ? 'index.html' : req.url)

  const ext = path.extname(pathToResource)
  const contentType = getContentType(ext)

  console.log(pathToResource)
  const content = await fs.readFile(pathToResource)

  res.statusCode = 200
  res.setHeader("Content-Type", contentType)
  res.end(content)

})

server.listen(PORT, () => { console.log(`Server is running on ${PORT}...`)})


/* Lesson 10: Aside serve Multiple Assets */
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

/* 
import path from "node:path"
import http from "node:http"
import fs from "node:fs/promises"
import {getContentType} from "./utils/getContentType.js"

const PORT = 8001

const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {

  const publicDir = path.join(__dirname, 'public')

  const pathToResource  = path.join(publicDir, req.url === "/" ? 'index.html' : req.url)

  const ext = path.extname(pathToResource)
  const contentType = getContentType(ext)

  const content = await fs.readFile(pathToResource)

  res.statusCode = 200
  res.setHeader("Content-Type", contentType)
  res.end(content)

})

server.listen(PORT, () => { console.log(`Server is running on ${PORT}...`)})
 */


/* Lesson 7: Aside: FS Module */
/* 
import path from "node:path"
import http from "node:http"
// import fs from "node:fs"
import fs from "node:fs/promises"

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {

  const pathToResource  = path.join(__dirname, 'public', 'index.html')

  // Method 1 readFileSync Can create the performance issues.

  // const content = fs.readFileSync(pathToResource, 'utf8')

  // res.statusCode = 200
  // res.setHeader("Content-Type", "text/html")
  // res.end(content)

  // Method 2 This can result is Callback hell
  // fs.readFile((err, content) => {
  //   if(err) {
  //     console.error(err)
  //     return
  //   }
  //   res.statusCode = 200
  //   res.setHeader("Content-Type", "text/html")
  //   res.end(content)

  // })

  // Method 3: This method is okay to use

  const content = await fs.readFile(pathToResource)
  console.log(content)
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end(content)

})

server.listen(PORT, () => { console.log(`Server is running on ${PORT}...`)})
*/

// Lesson - 21 Server-Sent-Events
/* 
import http from 'node:http'
import { handleFiles } from './handleFiles.js'
import { getTemp } from './getTemp.js'

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  if (!req.url.startsWith('/temp/live')) {
    return await handleFiles(req, res, __dirname)
  } else if (req.url === '/temp/live') {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Connection", "keep-alive")

    setInterval( () => {
      const temp = getTemp()

      res.write(
        `data: ${JSON.stringify({ event: 'temp-updated', temp: temp})}\n\n`  // use \n\n in the end because it signals the server end of complete message block this is required by server-sent-events protocal
      )

      // we res.write over the res.end because res.end finishes the response and ends the connection while it is not with res.write
    }, 2000)
    // SSE
  }
  
})

server.listen(8000, () => console.log('listening 8000'))
 */

// End

// import path from 'node:path'
// import http from 'node:http'
// import fs from 'node:fs/promises'
// import { getContentType } from './utils/getContentType.js'

// const PORT = 8000

// const __dirname = import.meta.dirname

// const server = http.createServer(async (req, res) => {

//   /* handle post here*/
//   let body = ''
//   for await (let chunk of req) {
//     body += chunk
//   }

//   try {
//     const emailObj = JSON.parse(body)
//     console.log(emailOb)
//     res.status = 201
//     res.setHeader("Content-Type", "application/json")
//     res.end(JSON.stringify(emailObj))

//   } catch(err) {
//     console.log(err)
//   }

//   const publicDir = path.join(__dirname, 'public')
//   const pathToResource = path.join(
//     publicDir, 
//     req.url === '/' ? 'index.html' : req.url
//   )

  
//   const content = await fs.readFile(pathToResource)

//   const extName = path.extname(pathToResource)
 
//   const contentType = getContentType(extName)

//   res.statusCode = 200
//   res.setHeader('Content-Type', contentType)
//   res.end(content)

// })

// server.listen(PORT, () => console.log('connected on port 8000'))

