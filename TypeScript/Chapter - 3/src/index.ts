/* Chapter - 3: TypeScript & Express */

/* Lesson 24: Congratulations! */


/* Lesson 23: Your own middleware */


/* Lesson 22: Adding and typing middleware */


/* Lesson 21: Separating concerns with controllers */


/* Lesson 20: Separating concerns with Router */


/* Lesson 19: Number query params */


/* Lesson 18: Boolean query params */


/* Lesson 17: An even more specific Request */


/* Lesson 16: String query params */


/* Lesson 15: Non-existent IDs */
/*
CHALLENGE: Type and complete the `/:id` route
    1. Type everything in the `.find()` callback function
    2. Type the `pet` variable (keeping in mind that
       we might not find a pet with that ID)
    3. Handle what happens if we don't find a
       pet with the provided ID
    4. Type the Response generic
*/

import express from 'express'
import {pets}  from "./data/pets"
import cors from "cors"

import type {Express, Request, Response} from "express"
import type {Pet} from "./data/pets"

const app: Express = express()
const PORT: number = 8000

app.use(cors())

app.get("/", (req: Request, res: Response<Pet[]>): void => {
    res.json(pets)
})

app.get("/:id", (req: Request<{id:string}>, res: Response<{message:string} | Pet>): void => {
    const petId: string  = req.params.id
    const pet: Pet | undefined = pets.find((pet: Pet): boolean => pet.id === Number(petId))

    if(!pet){
        res.status(404).send({message: "Pet not found"})
        return
    }

    res.json(pet)
})


app.use((req: Request, res: Response<{message: string}>) => {
    res.status(404).send({ message: "No endpoint found" })
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})

/* Lesson 14: A more specific Request */
/*
CHALLENGE: Complete the `/:id` route!
1. Type req, res, and callback's return value
2. Pull the `id` from the path params
3. Find the pet that matches said `id`
4. Send back said pet with `res.json()`
       
Don't worry about non-existent IDs or other TypeScript yet
*/

/* 
import express from 'express'
import {pets}  from "./data/pets"
import cors from "cors"

import type {Express, Request, Response} from "express"
import type {Pet} from "./data/pets"

const app: Express = express()
const PORT: number = 8000

app.use(cors())

app.get("/", (req: Request, res: Response<Pet[]>): void => {
    res.json(pets)
})

app.get("/:id", (req: Request<{id:string}>, res: Response): void => {
    const petId: string  = req.params.id
    const petObj: Pet = pets.find((pet: Pet) => pet.id === Number(petId))

    res.json(petObj)
})


app.use((req: Request, res: Response<{message: string}>) => {
    res.status(404).send({ message: "No endpoint found" })
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 13: A more specific Response */
/* 
import express from 'express'
import {pets}  from "./data/pets"
import cors from "cors"

import type {Express, Request, Response} from "express"
import type {Pet} from "./data/pets"

const app: Express = express()
const PORT: number = 8000

app.use(cors())

app.get("/", (req: Request, res: Response<Pet[]>): void => {
    res.json(pets)
})


app.use((req: Request, res: Response<{message: string}>) => {
    res.status(404).send({ message: "No endpoint found" })
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 12: Automating the server restart */


/* Lesson 11: Typing the 404 catch-all */
/* 
CHALLENGE: Create a 404 catch-all after the `/` route
           Don’t forget to type annotate everything!
           (there are 3 places)
           
HINT: In `hint.md`
*/
/* 
import express from 'express'
import {pets}  from "./data/pets"
import cors from "cors"

import type {Express, Request, Response} from "express"

const app: Express = express()
const PORT: number = 8000

app.use(cors())

app.get("/", (req: Request, res: Response): void => {
    res.json(pets)
})

// This is Okay But we use next one
// app.get("*", (req: Request, res: Response) => {
//     res.status(404).send({ message: "No page found"})
// })

// Here it is...

app.use((req: Request, res: Response) => {
    res.status(404).send({ message: "No route found" })
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 10: cors and TypeScript */
/*
CHALLENGE: Figure out why `cors` is cors-ing an error...
.           and fix it!
*/
/* 
import express from 'express'
import {pets}  from "./data/pets"
import cors from "cors"

import type {Express, Request, Response} from "express"

const app: Express = express()
const PORT: number = 8000

app.use(cors())

app.get("/", (req: Request, res: Response): void => {
    res.json(pets)
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})

 */
/* Lesson 9: Request and Response types */
/*
CHALLENGE: Use the newly imported Request and Response types 
.          to type the `req` and `res` parameters
*/
/* import express from 'express'
import type {Express, Request, Response} from "express"
import {pets}  from "./data/pets"

const app: Express = express()
const PORT: number = 8000

app.get("/", (req: Request, res: Response): void => {
    res.json(pets)
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 8: Typing the real data */
/* import express from 'express'
import type {Express} from "express"
import {pets}  from "./data/pets"

const app: Express = express()
const PORT: number = 8000


app.get("/", (req, res) => {
    res.json(pets)
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 7: Restarting the Express server */
/* import express from 'express'
import type {Express} from "express"

const app: Express = express()
const PORT: number = 8000

type Pet = {
    name: string
    species: string
    adopted: boolean
    age: number
}

const pets: Pet[] = [
    {
        name: "Dog",
        species: "German Sheppard",
        adopted: true,
        age: 12
    },
    {
        name: "Dog",
        species: "German Sheppard",
        adopted: true,
        age: 12
    },
    {
        name: "Dog",
        species: "German Sheppard",
        adopted: true,
        age: 12
    },
]
app.get("/", (req, res) => {
    res.json(pets)
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 6: Typing Express data */
/*
CHALLENGE: Respond with some data!
1. Create an object called `pet` before the `/` route that includes:
   - name (string)
   - species (string)
   - adopted (boolean)
   - age (number)
2. Type your new pet object (inline or using a custom type)
3. Update your existing GET `/` route to return that pet object
4. Compile the TypeScript and run the resulting JavaScript to see it in action
*/
/* import express from 'express'
import type {Express} from "express"

const app: Express = express()
const PORT: number = 8000

type Pet = {
    name: string
    species: string
    adopted: boolean
    age: number
}

const pet: Pet = {
    name: "Dog",
    species: "German Sheppard",
    adopted: true,
    age: 12
}

app.get("/", (req, res) => {
    res.json(pet)
})

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 5: Running an Express & TypeScript project */
/*
CHALLENGE: Send back a response
1. Add a GET route for `/` that responds with an empty JSON object.
2. Compile the app with `npx tsc`
3. Run the compiled JavaScript with `node dist/index.js`
   
(Ignore any TypeScript warning for now)
*/
/* 
import express from 'express'
import type {Express} from "express"

const app: Express = express()
const PORT: number = 8000

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.json({})
})
 */

/* Lesson 4: Setting up an Express & TypeScript project */
/*
CHALLENGE: Build a basic Express app using vanilla JavaScript
1. Import Express and create an app instance.
2. Listen on port 8000.
3. When the server starts, log: "Listening on port 8000"
   
You won't need to create any endpoints or routes yet
*/
/*
MINI CHALLENGE: Add some types  
1. Use the `Express` type where it makes sense
2. Add a `void` return type where it makes sense
*/
/* 
import express from 'express'
import type {Express} from "express"

const app: Express = express()
const PORT: number = 8000

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`)
})
 */

/* Lesson 3: Set up your environment */
/* 
CHALLENGE: Set up an Express+TypeScript environment
1. Initialise Node project with `npm init -y`
2. Install `express` as a dependency
3. Install `typescript` and `@types/express` as dev dependencies
4. Create and set up tsconfig.json
   a. Install and extend `@tsconfig/node20`
   b. Add compiler options: `rootDir` and `outDir`
*/

/* Lesson 2: Setting up a Express and TypeScript Environment */


/* Lesson 1: Intro to Express & TypeScript */
/* 
What will be learning:
1. Express + TypeScript environment
2. Typing Express Concept
3. Working with custom types
4. Request & Response generics
5. Filtering results based on types
6. Typing Express Middleware

+ Plus Challenges!

Teacher: Rachel Johnson
*/


/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "TypeScript & Express"
const chapterNum = 3
const lesson = [
    "Intro to Express & TypeScript",
    "Setting up a Express and TypeScript Environment",
    "Set up your environment",
    "Setting up an Express & TypeScript project",
    "Running an Express & TypeScript project",
    "Typing Express data",
    "Restarting the Express server",
    "Typing the real data",
    "Request and Response types",
    "cors and TypeScript",
    "Typing the 404 catch-all",
    "Automating the server restart",
    "A more specific Response",
    "A more specific Request",
    "Non-existent IDs",
    "String query params",
    "An even more specific Request",
    "Boolean query params",
    "Number query params",
    "Separating concerns with Router",
    "Separating concerns with controllers",
    "Adding and typing middleware",
    "Your own middleware",
    "Congratulations!"
]
lessonGenerator(chapterName, lesson, chapterNum)  */