/* Lesson 16: parseJSONBody */
/*
Challenge 2:
  1. Create a const 'rawBody' to store whatever is returned by parseJSONBody()
  2. For now, log 'rawBody'.
  3. Input an entry on the front end to test.
*/

import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"

export async function handleGet(req, res) {
    const data = await getData()

    sendResponse(res, 200, "application/json", JSON.stringify(data))
}

export async function handlePost(req, res) {
    try {
        const rawBody = await parseJSONBody(req)
        console.log(rawBody)
    } catch(err) {
        console.log(err)
    }
}

/* Lesson 14: Explainer: Adding POST */
/* 
import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

export async function handleGet(req, res) {
    const data = await getData()

    sendResponse(res, 200, "application/json", JSON.stringify(data))
}

export async function handlePost(req, res) {
    console.log('POST request received')
}
 */
/* Lesson 13: Wire up the API */
/*
Challenge:
1. Export a function called handleGet(). 
2. It should:
   - use getData() to get the data
   - stringify that data
   - use sendResponse() to serve it
   
Open the browser and load the sightings page to see if it works.
*/

/* 
import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"


export async function handleGet(req, res) {
    const data = await getData()

    sendResponse(res, 200, "application/json", JSON.stringify(data))

}
 */

/* Lesson 14: Explainer: Adding POST */
/*
Challenge:
  1. Create and export a function called handlePost().
  2. For now, that function can just log 'POST request received'.
*/
// console.log("POST request received")
/*
Challenge 2:
1. Create a const 'rawBody' to store whatever is returned by parseJSONBody()
2. For now, log 'rawBody'.
3. Input an entry on the front end to test.
// console.log(rawBody)
*/  
/*
Challenge:
1. Replace ??? with the correct status code!
*/
// handleGet

/* import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sendResponse } from "../utils/sendResponse.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sightingEvents } from "../events/sightingEvents.js";
import { stories } from "../data/stories.js"

export async function handleGet(res) {
    const data = JSON.stringify(await getData())
    sendResponse(res, 200, "application/json", data)
}

export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONBody(req)

        const sanitized = sanitizeInput(parsedBody)
        
        await addNewSighting(sanitized)
        sightingEvents.emit("sighting-added", sanitized)

        sendResponse(res, 201, "application/json", JSON.stringify(sanitized))

    } catch(err) {
        sendResponse(res, 400, "application/json", JSON.stringify({ error: err}))
    }   
}

export async function handleNews(req, res) {
    try {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/event-stream")
        res.setHeader("Cache-Control", "no-cache")
        res.setHeader("Connection", "keep-alive")

        setInterval(() => {
            let randomIndex = Math.floor(Math.random() * stories.length)

            res.write(`data: ${JSON.stringify({event: "random-stories", story: stories[randomIndex]})}\n\n`)
        }, 3000)
    } catch(err) {

    }
} */

