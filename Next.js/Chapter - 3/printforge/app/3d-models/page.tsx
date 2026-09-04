/* Chapter - 3: Making Data Flow */


/* Lesson 71: Section 3 Outro */


/* Lesson 70: Final Pagination Challenge */


/* Lesson 69: Final UX Polish Challenge Pack */


/* Lesson 68: Applying Edge Case Handling to Category Pages */


/* Lesson 67: Debug the Redirect Bug */


/* Lesson 66: Handling Invalid Sort Params */


/* Lesson 65: Handling Invalid Page Params */


/* Lesson 64: Handling Out-of-Bounds Page Params */


/* Lesson 63: Polishing Edge Cases and UX */


/* Lesson 62: Refactoring Query Param Logic */


/* Lesson 61: Refactoring modelsPerPage */


/* Lesson 60: Adding Pagination to Category Pages */


/* Lesson 59: Styling the Active Pagination Button */


/* Lesson 58: Rendering the Right Number of Pagination Buttons */


/* Lesson 57: Calculating Total Pages */


/* Lesson 56: Counting Total Matching Models */


/* Lesson 55: Counting Rows with COUNT() */


/* Lesson 54: Returning One Page of Models */


/* Lesson 53: Limiting Results with LIMIT and OFFSET */


/* Lesson 52: Reading the Page Query on the Server */


/* Lesson 51: Updating the URL with a Page Query */


/* Lesson 50: Creating Pagination Controls and Buttons */


/* Lesson 49: Introducing Pagination */


/* Lesson 48: Checkpoint Challenge: Searching Within Categories, Part 2 */


/* Lesson 47: Checkpoint Challenge: Searching Within Categories, Part 1 */


/* Lesson 46: Showing a No Results Found State */


/* Lesson 45: Handling Non-existent Models and Categories */


/* Lesson 44: Showing a Not Found State */


/* Lesson 43: Triggering Loading UI from SearchForm */


/* Lesson 42: Triggering Loading UI from SortButtons */


/* Lesson 41: Debugging the Missing Category Page Title */


/* Lesson 40: Setting up the LoadingUI Component */


/* Lesson 39: Creating the Models Browser Component */


/* Lesson 38: Showing Pending UI with useTransition */


/* Lesson 37: Using Multiple loading.tsx Files */


/* Lesson 36: Adding Route-Level Loading UI */


/* Lesson 35: Combining sort and search functionality */


/* Lesson 34: Refactoring getModels() to take an object */
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'

export default async function ModelsPage({ searchParams }: {
    searchParams: Promise<{ search : string, sort?: string }>
}) {
    const search = (await searchParams).search?.toLowerCase() || ''
    const sort = (await searchParams).sort || ''
    const models = await getModels({search, sort})

    return (
        <>
            <SearchForm search={search} />
            <ModelGrid models={models} search={search}/>
        </>
    )
}


/* Lesson 33: Upgrading getModels() for Category Sorting */


/* Lesson 32: Sorting Models within Categories */


/* Lesson 31: Sorting Data with SQL ORDER BY */


/* Lesson 30: Sending Sort Params to the Data Layer */


/* Lesson 29: Styling the Active SortButton */


/* Lesson 28: Navigating with usePathname and useRouter */


/* Lesson 27: Setting Up Sort Controls */


/* 
Lesson 26: Understanding the Sorting Data Flow */
/* import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'

export default async function ModelsPage({ searchParams }: {
    searchParams: Promise<{ search : string, sort?: string }>
}) {
    const search = (await searchParams).search?.toLowerCase() || ''
    const sort = (await searchParams).sort || ''
    const models = await getModels(search, sort)

    return (
        <>
            <SearchForm search={search} />
            <ModelGrid models={models} search={search}/>
        </>
    )
}
 */

/* Lesson 25: Passing Search Through the UI */

/* 
CHALLENGE 1 - Dynamic ModelsGrid title  
- Pass `search` into `ModelsGrid`  
- Render a title based on the current state:  
	- "3D Models" on the main page  
	- Category name on category pages  
	- "Search results for '[SEARCH]'" when a search is active  
  
CHALLENGE 2 - Show search term in input  
- Pass `search` into `SearchForm`  
- Use `defaultValue` so the search term appears in the input field  
*/

/* 
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'

export default async function ModelsPage({ searchParams }: {
    searchParams: Promise<{ search : string}>
}) {
    const { search } = await searchParams
    const models = await getModels(search)

    return (
        <>
            <SearchForm search={search} />
            <ModelGrid models={models} search={search}/>
        </>
    )
}
 */


/* Lesson 24: Searching by Name or Description */
/* 
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'

export default async function ModelsPage({ searchParams }: {
    searchParams: Promise<{ search : string}>
}) {
    const { search } = await searchParams
    const models = await getModels(search)

    return (
        <>
            <SearchForm />
            <ModelGrid models={models} />
        </>
    )
}

 */
/* Lesson 23: Upgrading getModels() for Search */


/* Lesson 22: Reading searchParams from the URL */
/* 
params          : params reads the dynamic route segments.
.                 The path parts defined by our folder structure

searchParams    :  searchParams reads the query parameters, the stuff after the ? mark.

*/
/*
CHALLENGE - grab the `search` query using `searchParams`
1. Type `searchParams` 
   (remember, there might not be any parameters)
2. Use `searchParams` to get and store the `search` query (if it exists).
   (If it doesn't exist, `search` should be an empty string)

DOCS: https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
*/
/* 
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'

export default async function ModelsPage({ searchParams }: {
    searchParams: Promise<{ search : string}>
}) {
    const models = await getModels()
    const { search } = await searchParams
    console.log(search)

    return (
        <>
            <SearchForm />
            <ModelGrid models={models} />
        </>
    )
}
 */
/* Lesson 21: Upgrading the SearchForm */


/* Lesson 20: Understanding the Search Data Flow */


/* Lesson 19: Fixing the “All” Category Link */


/* Lesson 18: Making the Category Page Title Dynamic */


/* Lesson 17: Building a Dynamic Single Model Page */
/* 
Datebase Method:
1. db.exec() : executes the query immediately
2. db.prepare() : prepare a query that we might want to reuse
3. db.finalize() : It cleans the prepare query when we're done with prepared query
4. db.all(): Returns all matching rows in the database
5. db.close(): Which safely closes the database connection

6. db.all(): Expecting multiple results Returns an array of objects
7. db.get(): Expecting only 1 result Returns object or undefined

*/

/* Lesson 16: Building a Dynamic Category Page */
/* 

. Flow of Data 


.     UI Layer                     Data Layer                  Database
    ┌─────────────────┐          ┌────────────────┐           ┌──────────────┐
    |                 |          |                |           |              |
    |                 |          | getModelsBy    |           |              |
    |   CategoryPage  |←-------- | CategorySlug   |←----------|    models    |
    |                 |          | (categorySlug) |           |              |
    |                 |          |                |           |              |
    └─────────────────┘          └────────────────┘           └──────────────┘
       /app                         /lib                      printforge.db

*/

/*
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'

export default async function ModelsPage() {
    const models = await getModels()

    return (
        <>
            <SearchForm />
            <ModelGrid models={models} />
        </>
    )
}
 */

/* Lesson 15: Filtering Data with SQL WHERE */


/* Lesson 14: Making ModelCards Dynamic */
/*  
CHALLENGE — Make the ModelCard dynamic  
  
1. Accept a `model` prop (and type it)  
  
2. Replace the static content with values from `model`:  
- the link  
- the image (src and alt)  
- the model name  
- the description  
- the category  
- the number of likes  

TIP: If you're not sure what model property to use, you can check the original .json files or the types file
*/
/* 

. Flow of Data 


.     UI Layer                     Data Layer                  Database
    ┌─────────────────┐          ┌──────────────┐           ┌──────────────┐
    |  ModelsPage     |          |              |           |              |
    |      ↓          |          |              |           |              |
    |  ModelsGrid     |←-------- |  getModels() |←----------|    models    |
    |      ↓          |          |              |           |              |
    |  ModelsCard     |          |              |           |              |
    └─────────────────┘          └──────────────┘           └──────────────┘
       /app                         /lib                      printforge.db

*/

/* Lesson 13: Wiring Database Models into the UI */
/*
CHALLENGE - Use `getModels()` to start wiring model data into the app.

1. Import `getModels` from `@/lib/models`
2. Fetch the models in the page (remember to await!)
3. Pass them into `ModelsGrid` (accept and type the prop)
4. Inside `ModelsGrid`, map over the models and render a `ModelCard` for each one

You do not need to worry about every `ModelCard` detail just yet — the goal here is 52 of the same Articulated Dragon ModelCards
*/
/* 
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import {getModels} from '@/lib/models'
import {getCategories} from "@/lib/categories"

export default async function ModelsPage() {
    const models = await getModels()
    const categories = await getCategories()
    console.table(categories)

    return (
        <>
            <SearchForm />
            <ModelGrid models={models} categories={categories} />
        </>
    )
}
 */
/* Lesson 12: Rendering Category Links from Data */


/* Lesson 11: Reading Categories from the Database */


/* Lesson 10: Reading Models from the Database */


/* Lesson 9: A Tiny SQLite Setup Note */


/* Lesson 8: Seeding the Categories Table */


/* Lesson 7: Seeding the Models Table */


/* Lesson 6: Setting Up the PrintForge Database */


/* Lesson 5: Introducing Data in Next.js */


/* Lesson 4: Adding Dynamic Routes and Image Optimisation */
/*
CHALLENGE - 3D Models Category Page
- Create `app/3d-models/categories/[categorySlug]/page.tsx`
- Render a `ModelGrid` on the page
  
DOCS:
- https://nextjs.org/docs/app/getting-started/layouts-and-pages#nesting-layouts
- https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-dynamic-segment
*/

/* Lesson 3: Structuring the 3D Models Section */
/*  
CHALLENGE - 3D Models Page
- Create a `/3d-models` page and route  
- Render an `<h1>` element on the page
  
DOCS: 
- https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route
*/
/* import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"

export default function ModelsPage() {
    return (
        <>
            <SearchForm />
            <ModelGrid />
        </>
    )
} */