/* Chapter - 2: Rendering Strategies and More */

/* Lesson 24: Section 2 Recap */


/* Lesson 23: Tiny Library Solo */


/* Lesson 22: PrintForge - Upgrade to Next's Form Component */


/* Lesson 21: NextJS Form Component */


/* Lesson 20: PrintForge - Search Bar using native form */


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
import { getModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"

export default async function ModelsPage() {
  const models = await getModels()
  return <ModelsGrid title="3D Models" models={models} ></ModelsGrid>
}


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