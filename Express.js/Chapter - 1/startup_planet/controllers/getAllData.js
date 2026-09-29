import { startups } from "../data/data.js"

export function getAllData(req, res) {

    let filterData = startups

    const { country, continent, industry, is_seeking_funding, has_mvp } = req.query

    if(continent) {
        filterData = filterData.filter(startup => 
            startup.continent.toLowerCase() === continent.toLowerCase()
        )
    }

    if(country) {
        filterData = filterData.filter(startup => 
            startup.country.toLowerCase() === country.toLowerCase()
        )
    }

    if(industry) {
        filterData = filterData.filter(startup => 
            startup.industry.toLowerCase() === industry.toLowerCase()
        )
    }

    if(is_seeking_funding) {
        filterData = filterData.filter(startup => 
            startup.is_seeking_funding.toString() === is_seeking_funding.toLowerCase()
        )
    }

    if(has_mvp) {
        filterData = filterData.filter(startup => 
            startup.has_mvp.toString() === has_mvp.toLowerCase()
        )
    }
    
    if(filterData.length === 0) return res.json({message: "No such startup found."})
    res.json(filterData)
}