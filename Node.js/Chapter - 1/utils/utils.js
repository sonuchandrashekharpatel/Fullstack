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