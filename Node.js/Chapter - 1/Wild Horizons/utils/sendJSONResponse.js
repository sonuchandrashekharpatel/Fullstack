export function sendJSONResponse(res, statusCode, payload) {
    
    res.statusCode = statusCode
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")

        if(payload.length === 0) {
            payload = { message: "No such destination found"}
        }
        res.end(JSON.stringify(payload))
}