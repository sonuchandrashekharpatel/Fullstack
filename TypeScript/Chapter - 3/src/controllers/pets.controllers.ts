/* Chapter - 3: TypeScript & Express */

/* Lesson 24: Congratulations! */


/* Lesson 23: Your own middleware */


/* Lesson 22: Adding and typing middleware */


/* Lesson 21: Separating concerns with controllers */


import type {Request, Response} from "express"
import {pets} from "../data/pets"
import {Pet} from "../data/pets"

type PetQueryParams = {
    species?: string
    adopted?: "true" | "false"
    minAge?: string 
    maxAge?: string 
}

export const getPets = (
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
    
}

export const getPetById = (
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
}