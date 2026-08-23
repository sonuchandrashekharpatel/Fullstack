/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */

import modelsData from "../data/models.json"
import type { Model } from "@/app/types/index"

export async function getAllModels(): Promise<Model[]> {
    // This is where you'd write code to fetch the list of models from
    // database. We're mocking that with our JSON array of data in the models.json for now.
    return modelsData
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find((model: Model) => model.id.toString() === id.toString())
    if(!foundModel) {
        throw new Error(`Model with the id ${id} not found`)
    }
    return foundModel
}

/* Lesson 24: Dynamic Routes */


/* Lesson 23: Challenge - Create the Models List Page */
/* 
import modelsData from "../data/models.json"
import type { Model } from "@/app/types/index"

export async function getAllModels(): Promise<Model[]> {
    // This is where you'd write code to fetch the list of models from
    // database. We're mocking that with our JSON array of data in the models.json for now.
    return modelsData
}
 */