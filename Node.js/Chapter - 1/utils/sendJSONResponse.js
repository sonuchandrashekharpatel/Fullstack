/* Lesson 17: Filter the Query Parameters */

export function sendJSONResponse(res, statusCode, payload) {
    
    res.statusCode = statusCode
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end(JSON.stringify(payload))
}


/* Lesson 13: Modularise the Code 1 */
/* 
export function sendJSONResponse(res, statusCode, payload) {
    
    res.statusCode = statusCode
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(payload))
}
 
*/


// Previos one
/* 
export function resRender(res, data) {
    res.setHeader("Content-Type", "application/json")

    if(data.error) {
        res.statusCode = 404
    } else {
        res.statusCode = 200
    }

    res.end(JSON.stringify(data))
}

// export function filterData(data, property, value) {
//     const filteredData = data.filter( item => item[property].toLowerCase() === value.toLowerCase())

//     return filteredData
// }

export function getDataByQueryParams(data, queryOb) {

    console.log("Query Object : ", queryOb)
    return data.filter(item => {

        for(let key in queryOb) {
            if(String(item[key]).toLowerCase() !== queryOb[key].toLowerCase()) return false 
        }
        return true
    })
}

export function getDataByPathParams(data, pathName) {

    const property = pathName.split("/")[2] //continent
    const value = pathName.split("/").pop()

    const filteredData = data.filter(item => item[property].toLowerCase() === value.toLowerCase())
    return filteredData
} 
*/

