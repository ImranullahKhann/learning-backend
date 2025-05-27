import http from "node:http"
import { getDataFromDB } from './database/db.js'
import sendResponse from "./utils/sendResponse.js"

const PORT = 8000


const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    if (req.url === '/api' && req.method === 'GET') {
        sendResponse(res, 200, destinations)
    } else if (req.url.startsWith('/api/continent/') && req.method === 'GET') {
        const cont = req.url.replace("/api/continent/", "")
        const filteredDestinations = destinations.filter((dest) => dest.continent.toLowerCase() == cont.toLowerCase())

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