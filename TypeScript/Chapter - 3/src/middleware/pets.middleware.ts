/* Chapter - 3: TypeScript & Express */

/* Lesson 24: Congratulations! */


/* Lesson 23: Your own middleware */
/*
CHALLENGE: Create a `pleaseAuth` middleware
1. Write a standalone function called `pleaseAuth`
2. It should take req, res, and next
3. If query.password === "please", call next()
4. Otherwise, send a 401 with a message in JSON
5. Type req, res, and next
6. Attach this middleware to the `/:id` route
   
TESTS:
/pets/1 - should result in 401 Unauthorised error
/pets/1?password=please - we should get Bella the dog
*/

import type {Request, Response, NextFunction} from "express"

export const validateNumericId = (
    req: Request<{id:string}>,
    res: Response<{message:string}>,
    next: NextFunction
) => {
    const {id} = req.params
    if(!/^\d+$/.test(id)) {
        res.status(400).send({message: "Pet ID must be a number"})
    } else {
        next()
    }
}

export const pleaseAuth = (
    req:Request<{}, unknown, {}, {password?: string}>,
    res: Response<{message: string}>,
    next: NextFunction
) => {
    
    if(req.query.password === "please") {
        next()
    } else {
        res.status(401).send({message: "Give me the query with password please otherwise no data."})
    }
}

/* Lesson 22: Adding and typing middleware */
/* 
import type {Request, Response, NextFunction} from "express"

export const validateNumericId = (
    req: Request<{id:string}>,
    res: Response<{message:string}>,
    next: NextFunction
) => {
    const {id} = req.params
    if(!/^\d+$/.test(id)) {
        res.status(400).send({message: "Pet ID must be a number"})
    } else {
        next()
    }
} */