import { startups } from "../data/data.js"

export function getDataByPathParams(req, res) {

    const { field, term } = req.params

    const allowedFields = ["continent", "country", "industry"]

    if(allowedFields.includes(field)){
        const filterData = startups.filter(startup => startup[field].toLowerCase() === term?.toLowerCase())
        
        if(filterData.length === 0) return res.json({message: "No such startup found."})
        return res.json(filterData)
    }

    res.json({message: "Invalid field. Try searching for continent, country, industry."})

}