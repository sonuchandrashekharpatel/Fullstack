// Lesson - 21 Server-Sent-Events
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