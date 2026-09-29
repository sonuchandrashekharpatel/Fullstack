/* Lesson 12: Modularise The Code */
import { startups } from "../data/data.js"

export function getDataByPathParams(req, res) {
  const { field, term } = req.params

  const allowedFields = ['country', "continent", "industry"]
  let filterData = startups

  if(!allowedFields.includes(field)) {
    return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }
  filterData = filterData.filter(startup => {
      return startup[field.toLowerCase()].toLowerCase() === term.toLowerCase()
  })


  res.status(200).json(filterData)
}