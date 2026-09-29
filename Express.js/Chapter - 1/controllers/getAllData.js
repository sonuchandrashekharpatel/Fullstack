/* Lesson 12: Modularise The Code */
import { startups } from "../data/data.js"

export function getAllData(req, res) {
  let filterData = startups
    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query
    
    if(industry) {
      filterData = filterData.filter( data => 
        data.industry.toLowerCase() === industry.toLowerCase()
      )
    }
    
    if(country) {
      filterData = filterData.filter( data => 
        data.country.toLowerCase() === country.toLowerCase()
      )
    }
    
    if(continent) {
      filterData = filterData.filter( data => 
        data.continent.toLowerCase() === continent.toLowerCase()
      )
    }
    
    if(is_seeking_funding) {
      filterData = filterData.filter( data => 
        data.is_seeking_funding.toString().toLowerCase() === is_seeking_funding.toLowerCase()
      )
    }
  
    if(has_mvp) {
      filterData = filterData.filter( data => 
        data.has_mvp.toString().toLowerCase() === has_mvp.toLowerCase()
      )
    }  
  
    res.json(filterData)
}
