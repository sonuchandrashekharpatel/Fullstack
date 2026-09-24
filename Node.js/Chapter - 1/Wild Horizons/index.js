import http from 'node:http'
import { getDataFromDB } from "./database/db.js"
import { sendJSONResponse } from "./utils/sendJSONResponse.js"
import { filterData } from "./utils/filterData.js"

const PORT = 3000

const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)

    if(urlObj.pathname === "/api" && req.method === "GET"){

        const filteredData = filterData(destinations, queryObj)
        sendJSONResponse(res, 200, filteredData)

    } else if(req.url.startsWith("/api/continent") && req.method === "GET") {

        const continent = req.url.split("/").pop()
        const filteredData = filterData(destinations, {continent})
        sendJSONResponse(res, 200, filteredData)

    } else if(req.url.startsWith("/api/country") && req.method === "GET") {

        const country = req.url.split("/").pop()
        const filteredData = filterData(destinations, {country})
        sendJSONResponse(res, 200, filteredData)
    }
    else {
        sendJSONResponse(res, 404, {
            error: "endpoint not found",
            message: "The requested endpoint does not exist."
        })
    }
})

server.listen(PORT, () => { console.log(`Server is running on ${PORT}...`)})