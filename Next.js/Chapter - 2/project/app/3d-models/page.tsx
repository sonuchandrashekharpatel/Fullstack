/* Chapter - 2: Rendering Strategies and More */

/* Lesson 24: Section 2 Recap */


/* Lesson 23: Tiny Library Solo */


/* Lesson 22: PrintForge - Upgrade to Next's Form Component */
/**
 * Challenge: Upgrade our form to a Form from Next.js
 */

import Form from "next/form"
import { getModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"
import type {ModelPageProps} from "@/app/types"
import type { Model } from "@/app/types"

export default async function ModelsPage({ searchParams }: ModelPageProps) {
  const models = await getModels()
  const { query } = await searchParams

  const filteredModels = query ? models.filter((model: Model): boolean =>
    model.name.toLowerCase().includes(query.toLowerCase())  || model.description.toLowerCase().includes(query.toLowerCase()))
    : models

  return (
    <>
    <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. dragon"                    autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form
      
      
      >
      <ModelsGrid title="3D Models" models={filteredModels} ></ModelsGrid>
    </>
  )
}

/* Lesson 21: NextJS Form Component */


/* Lesson 20: PrintForge - Search Bar using native form */
/**
 * Challenge:
 * 1. Add a form with an input above the ModelsGrid. Don't worry about
 *    a label for now.
 * 2. Get access to the query from searchParams. Optional: use the
 *    ModelsPageProps from our types file to satisy TypeScript.
 * 3. Filter down the models being passed to ModelsGrid. Include:
 *    a. any models with a `name` that includes the query, AND
 *    b. any models with a `description` that includes the query.
 * 
 *    Make sure to ignore capitalization when filtering.
 * 
 *    A good test search term is "tool"
 * 
 * Optional: try to style it like the design in Figma
 */
/* import { getModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"
import type {ModelPageProps} from "@/app/types"
import type { Model } from "@/app/types"

export default async function ModelsPage({ searchParams }: ModelPageProps) {
  const models = await getModels()
  const { query } = await searchParams

  const filteredModels = query ? models.filter((model: Model): boolean =>
    model.name.toLowerCase().includes(query.toLowerCase())  || model.description.toLowerCase().includes(query.toLowerCase()))
    : models

  return (
    <>
      <form className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. dragon"                    autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </form>
      <ModelsGrid title="3D Models" models={filteredModels} ></ModelsGrid>
    </>
  )
} */


/* Lesson 19: Cat Facts - searchParams pt. 2 */


/* Lesson 18: CatFacts - searchParams pt. 1 */


/* Lesson 17: HTML Form Submissions are Navigation Events */


/* Lesson 16: CatFacts: Structured Play */


/* Lesson 15: CatFacts - Add Fetch */


/* Lesson 14: Cat Facts - SSG Pt. 1 */


/* Lesson 13: Rendering Strategies Pt. 3 */


/* Lesson 12: Rendering Strategies pt 2 */


/* Lesson 11: Rendering Strategies Intro */


/* Lesson 10: Challenge: Category Pages */
/* import { getModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"

export default async function ModelsPage() {
  const models = await getModels()
  return <ModelsGrid title="3D Models" models={models} ></ModelsGrid>
}
 */

/* Lesson 9: Challenge: Style Categories Link */


/* Lesson 8: Even More on Client Components */


/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */
/* 
Options:
. Change RootLayout into client component
  . Effectiverly turns the whole app into client components

  . Change Navbar into client component

. Change NavLink into client component

Why shouldn't we make whole app to client component:
. Bigger JavaScript Bundles (Slower Load Times)
. Poorer Initial Page Performance & Metrics
. Loss of Direct Backend & Database Access 
. Extra Network Waterfalls for Data Fetching
. Worse SEO and Search Crawling 
*/
/* 
Challenge
=========
- Decide which component(s) needs to be converted into client components
- TBA
*/
/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */


/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */


/* Lesson 1: Walking through refactors */
/* import { getAllModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"

export default async function ModelsPage() {
  const models = await getAllModels()
  return <ModelsGrid title="3D Models" models={models} ></ModelsGrid>
}
 */

/* Lesson 0: Previous Chapter */

/* import { getAllModels } from "@/app/lib/models"
import type { Model } from "@/app/types"
import ModelCard from "@/app/components/ModelCard"

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
 */