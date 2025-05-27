import http from "node:http"
import { getDataFromDB } from './database/db.js'
import sendResponse from "./utils/sendResponse.js"
import { filterData } from "./utils/filterData.js"
import { getOutputByQueryParams } from "./utils/getOutputByQueryParams.js"

const PORT = 8000


const server = http.createServer(async (req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)

    const destinations = await getDataFromDB()
    if (urlObj.pathname === '/api' && req.method === 'GET') {
        let payload = destinations
        if (queryObj)
            payload = getOutputByQueryParams(destinations, queryObj)
        sendResponse(res, 200, payload)
    } else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
        const filteredDestinations = filterData(req, destinations)

        sendResponse(res, 200, filteredDestinations)
    } else if (req.url.startsWith("/api/country/") && req.method === "GET") {
        const filteredDestinations = filterData(req, destinations)

        sendResponse(res, 200, filteredDestinations)
    } else {
        sendResponse(res, 404, {
                error: "not found",
                message: "The requested route does not exist"
        }) 
    }
})

server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})