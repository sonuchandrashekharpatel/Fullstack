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

'use client'
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import type {Model} from "@/lib/types"
import { useTransition } from 'react'

export default function ModelsBrowser({ search, models, categoryName }: {
    search?: string
    models: Model[]
    categoryName?: string
}) {

    const [isPending, startTransition] = useTransition()
    return (
        <>
            <SearchForm search={search} startTransition={startTransition}/>
            <ModelGrid 
                isPending={isPending} 
                models={models} 
                search={search} 
                categoryName={categoryName}
                startTransition={startTransition}
            />
        </>
    )
}


/* Lesson 42: Triggering Loading UI from SortButtons */

/*
CHALLENGE - Pass startTransition to SortButton (yay propdrilling)
1. Pass startTransition from ModelsBrowser into ModelsGrid
2. Accept and type startTransition inside ModelsGrid
3. Pass startTransition from ModelsGrid into SortControls
4. Accept and type startTransition inside SortControls
5. Pass startTransition from SortControls into SortButton
6. Accept and type startTransition inside SortButton
*/
/* 
'use client'
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import type {Model} from "@/lib/types"
import { useTransition } from 'react'

export default function ModelsBrowser({ search, models, categoryName }: {
    search?: string
    models: Model[]
    categoryName?: string
}) {

    const [isPending, startTransition] = useTransition()
    return (
        <>
            <SearchForm search={search} />
            <ModelGrid 
                isPending={isPending} 
                models={models} 
                search={search} 
                categoryName={categoryName}
                startTransition={startTransition}
            />
        </>
    )
}
 */

/* Lesson 41: Debugging the Missing Category Page Title */


/* Lesson 40: Setting up the LoadingUI Component */
/*
CHALLENGE - Use isPending inside ModelsGrid
1. Accept and type the isPending prop (it's a boolean)
2. Import the LoadingUI component
3. Use isPending to decide what to render:
   - If isPending is true, show LoadingUI saying "Loading models..."
   - If isPending is false, grid of ModelCards
*/
/* 
'use client'
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import type {Model} from "@/lib/types"
import { useTransition } from 'react'

export default function ModelsBrowser({ search, models, categoryName }: {
    search?: string
    models: Model[]
    categoryName?: string
}) {

    const [isPending, startTransition] = useTransition()
    return (
        <>
            <SearchForm search={search} />
            <ModelGrid isPending={isPending} models={models} search={search} categoryName={categoryName}/>
        </>
    )
}
 */

/* Lesson 39: Creating the Models Browser Component */
/* 
'use client'
import SearchForm from "@/components/SearchForm"
import ModelGrid from "@/components/ModelGrid"
import type {Model} from "@/lib/types"

export default async function ModelsBrowser({ search, models, categoryName }: {
    search?: string
    models: Model[]
    categoryName?: string
}) {

    return (
        <>
            <SearchForm search={search} />
            <ModelGrid models={models} search={search} categoryName={categoryName}/>
        </>
    )
}
 */

