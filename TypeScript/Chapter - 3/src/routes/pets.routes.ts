/* Chapter - 3: TypeScript & Express */

/* Lesson 24: Congratulations! */


/* Lesson 23: Your own middleware */


/* Lesson 22: Adding and typing middleware */

import express from "express"
import {getPets, getPetById} from "../controllers/pets.controllers"
import type {Router, Request, Response} from "express"
import {validateNumericId} from "../middleware/pets.middleware"
import {pleaseAuth} from "../middleware/pets.middleware"

export const petRouter:Router = express.Router()

petRouter.get("/", getPets)

petRouter.get("/:id", validateNumericId, pleaseAuth, getPetById)


/* Lesson 21: Separating concerns with controllers */
/* import express from "express"
import {getPets, getPetById} from "../controllers/pets.controllers"
import type {Router, Request, Response} from "express"

export const petRouter:Router = express.Router()

petRouter.get("/", getPets)

petRouter.get("/:id", getPetById)
 */


/* Lesson 20: Separating concerns with Router */
/*
CHALLENGE: Handle all pet-related errors by
           exporting/importing the relevant data/types
*/
/* 
import express from "express"
import { pets } from "../data/pets"

import type {Router, Request, Response} from "express"
import type {Pet} from "../data/pets"

export const petRouter:Router = express.Router()

type PetQueryParams = {
    species?: string
    adopted?: "true" | "false"
    minAge?: string | undefined
    maxAge?: string | undefined
}

petRouter.get("/", (
    req: Request<{}, unknown, {}, PetQueryParams>,
    res: Response<Pet[]>
): void => {
    let filteredPets = pets
    const {species, adopted, minAge, maxAge} = req.query

    if(species) {
        filteredPets = filteredPets.filter((pet: Pet ): boolean =>
            pet.species.toLowerCase() === species.toLowerCase()
        )
    }

    if(adopted){
        filteredPets = filteredPets.filter((pet: Pet): boolean => 
            pet.adopted === JSON.parse(adopted)
        )
    }

    if(maxAge) {
        filteredPets = filteredPets.filter((pet: Pet): boolean => 
            pet.age <= JSON.parse(maxAge)
        )
    }
    
    if(minAge) {
        filteredPets = filteredPets.filter((pet: Pet): boolean => 
            pet.age >= JSON.parse(minAge)
        )
    }
    
    res.json(filteredPets)
    
})

petRouter.get("/:id", (
    req: Request<{id:string}>, 
    res: Response<{message:string} | Pet>
): void => {
    const petId: string  = req.params.id

    const pet: Pet | undefined = pets.find((pet: Pet): boolean => pet.id === Number(petId))

    if(!pet){
        res.status(404).send({message: "Pet not found"})
        return
    }

    res.json(pet)
})

 */