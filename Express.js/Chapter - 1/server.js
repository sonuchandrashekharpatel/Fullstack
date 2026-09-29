
/* Chapter - 1: Buid an Express API */

/* Lesson 15: Wrapping Things Up */
/* 
What we studies
. create a server
. sending status codes (200, 400, etc.)
. setting headers
. handling requests and responses
. filtering data
. extracting data
. CORS

Strech Goals
. Handle POST requests
  . ingnore authentication for now
. Add better filtering!
. Make it real!

*/

/* Lesson 14: CORS */
/* 

By default, browsers enforce a same-origin policy this means
requests can only be made to the protocal, domain and port 
as the one serving the webpage.

*/

import express from "express"
import { apiRouter } from "./routes/apiRoutes.js"
import cors from "cors"


const PORT = 3000
const app = express()

app.use(cors())

app.use("/api", apiRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))




/* Lesson 13: Route Not found */
/* 
import express from "express"
import { apiRouter } from "./routes/apiRoutes.js"

const PORT = 3000
const app = express()

app.use("/api", apiRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 12: Modularise The Code */
/* 
import express from "express"
import { apiRouter } from "./routes/apiRoutes.js"

const PORT = 3000
const app = express()

app.use("/api", apiRouter)

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 11: express.Router() */
/* 
import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'

const app = express()

app.use('/api', apiRouter)

app.use((req, res) => {
  res.status(404).json({message: 'Endpoint not found'})
  
})

app.listen(8000, () => console.log('Listening 8000...'))
 */
/* Lesson 10: Path Parameters 2 */
/*
** The functionality **
Get all startups in a given country via api/country/<country name>
Get all startups in a given continent via api/continent/<continent name>
Get all startups in a given industry via api/industry/<industry name>

**Test Cases** 

These should work:
  api/country/india
  api/continent/europe
  api/industry/ai

This should return the object given in the challenge above. 
api/has_mvp/true

*/
/*
Challenge:
1. If the client’s 'field' is not supported, serve this object:
  {message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" }
2. Chain in the .status(<code>) method to set a status code.
What status code should you set?
3. You might run into an error! Find a solution!

hint.md for help!
*/
/* 
import express from "express"
import { startups } from "./data/data.js"

const PORT = 3000
const app = express()

app.get("/api", (req, res) => {
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
})

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params

  const allowedFields = ['country', "continent", "industry"]
  let filterData = startups
  
  // if(!startups[0][field]) {
  //   return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  // } 

  if(!allowedFields.includes(field)) {
    return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }
  filterData = filterData.filter(startup => {
      return startup[field.toLowerCase()].toLowerCase() === term.toLowerCase()
  })


  res.status(200).json(filterData)
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))

*/

/* Lesson 9: Add Path Parameters 1 */
/* 
import express from "express"
import { startups } from "./data/data.js"

const PORT = 3000
const app = express()

app.get("/api", (req, res) => {
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
})

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params

  let filterData = startups
  
  filterData = filterData.filter(startup => {
    return startup[field.toLowerCase()].toLowerCase() === term.toLowerCase()
  })


  res.json(filterData)
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 8: Aside: Path Parameters */
/*
Challenge: 
1. Update the code so a GET request to api/metals/gold
    logs an object {category: ‘metals’, type: ‘gold’}

But a GET request to api/crypto/eth
    logs an object {category: crypto-name, type: eth}
*/
/* 
import express from "express"

const PORT = 3000

const app = express()

app.get("/api/:category/:type", (req, res) => {

    console.log(req.params)
    res.json()
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */
/* Lesson 7: Filtering by Query Params */
/*
Challenge:
1. When a user hits the /api endpoint with query params, filter the data so 
we only serve objects that meet their requirements. 
     
The user can filter by the following properties:
  industry, country, continent, is_seeking_funding, has_mvp

Test Cases

/api?industry=renewable%20energy&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/

/* 
import express from "express"
import { startups } from "./data/data.js"

const PORT = 3000
const app = express()

app.get("/api", (req, res) => {
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
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */
/* Lesson 6: Aside: Query Parameters */
/* 
/api?course=express&bad_jokes=true

The req Object:
req.body: Data from request body
req.params: comming soon!
req.method: - HTTP method (e.g., GET, POST).
req.ip - Client's IP Address
req.query - The query params

*/
/* 
import express from 'express'
import { people } from "./aside/data.js"

const PORT = 3000

const app = express()

app.get("/", (req, res) => {
  console.log(req.query)

  res.json(people)
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 
*/

/* Lesson 5: Serving Data */

/*
Challenge:
  1. When the client makes a GET request to ‘/api’, serve all of our data as json.

  hint.md for help!
*/

/* 
import express from "express"
import { startups } from "./data/data.js"

const PORT = 3000

const app = express()

app.get("/api", (req, res) => {
  res.json(startups)
})

app.listen(3000, () => console.log(`Server is running on ${PORT}...`))
 */

/* Lesson 4: Aside: Sending a Response */
/* 
1. HTTP is text-based protocol. All data transferred between client
and the server must be present in the form of strings.
*/

/* 
import express from "express"

const PORT = 3000

const celebrity = {
  type: "action hero",
  name: "Akshay Kumar"
}

const app = express()

app.get("/", (req, res) => {
  res.json(celebrity)
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */
/* Lesson 3: A Basic Server */
/* 
import express from "express"

const PORT = 3000

const app = express()

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`))
 */
/* Lesson 2: Setting things Up */
/* 

Package.json is the blueprint!
. Contains Metadata (name, version, author, description, etc.)
. Simplifies collaboration
    . Manages dependencies
    . Defining start script

    npm init
*/

/* 
console.log('Hello Express!')
 */

/* Lesson 1: Startup Planet Intro */
/* 
3 ways users can get data:
1. /api
2. /api/indudtry/ai
3. /api?has_mvp=true&is_seeking_funding=true


We'll be studying:
. creating a server
. sending status code (200, 400 etc.)
. setting headers
. handling requests/responses
. filtering data
. extracting path/query params

    And loads more! Plus challenges

*/

/* Welcome to Express */

/* 
Requirements:
. A Solid foundation in JavaScript
    - map, reduce, filter
    - async/await
. No knowledge of Node.js or Express.js needed.
*/

/* 
import lessonGenerator from "../Aside/index.js"

const chapterName = "Buid an Express API"
const chapterNum = 1
const lesson = [
    "Startup Planet Intro",
    "Setting things Up",
    "A Basic Server",
    "Aside: Sending a Response",
    "Serving Data",
    "Aside: Query Parameters",
    "Filtering by Query Params",
    "Aside: Path Parameters",
    "Add Path Parameters 1",
    "Path Parameters 2",
    "express.Router()",
    "Modularise The Code",
    "Route the Code",
    "CORS",
    "Wrapping Things Up"
]
lessonGenerator(chapterName, lesson, chapterNum) */