/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */
import Link from "next/link"
import { getAllModels } from "@/app/lib/models"
import type { Model } from "@/app/types"
import ModelCard from "@/app/components/ModalCard"

export default async function ModelsPage() {
  const models = await getAllModels()
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">All Models</h1>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="3D Models Gallery"
      >
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  )
}


/* Lesson 24: Dynamic Routes */


/* Lesson 23: Challenge - Create the Models List Page */

/* 
Challenge
=========
1. Create the models list page, which should be under the "/3d-models" route.
2. Import the `getAllModels` function from "@/app/lib/models".
3. Call the `getAllModels` function to get a list of all models. It's an async
   function, so handle it accordingly.
4. Map over the models data and display a list of the model names (model.name)

Check out app/data/models.json to see the details on the models data. E.g. you
can use the `id` property as a `key` when mapping the data.

You also can use the Model type I created in "@/app/types" if you'd like to
satisfy TypeScript when you're mapping over the array. (But it isn't required
to do so for this challenge if you don't want to.)
*/
/* import { getAllModels } from "../lib/models"
import type {Model} from "../types/index"

export default async function ModelsPage() {
    const modelsData: Model[] =  await getAllModels()

    const modelName = modelsData.map((model: Model) => <pre key={model.id}>{model.name}</pre>)
    return (
        <div>
            {modelName}
        </div>
    )
} */