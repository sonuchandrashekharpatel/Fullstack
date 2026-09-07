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
/*
CHALLENGE
- Make `PaginationButton` a client component
- Get the `pathname`, `searchParams` and `router`
- Create a `handlePageChange` function
  - Set the `page` query parameter to this button's page number  
  - Push the updated URL
- Attach `handlePageChange` to the button's `onClick`
*/
'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
export default function PaginationButton({page}: {page: number}) {
    
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    function handlePageChange() {
        const urlSearchParams = new URLSearchParams(searchParams.toString())
        urlSearchParams.set("page", page.toString())
        const url = `${pathname}?${urlSearchParams.toString()}`
        router.push(url)
    }
    
    return (
        <button 
            className="px-3 py-1.5 text-sm rounded-md border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={handlePageChange}
        >  
            {page}
        </button>
    )
}

/* Lesson 50: Creating Pagination Controls and Buttons */
/* 
export default function PaginationButton({page}: {page: number}) {
    return (
        <button className="px-3 py-1.5 text-sm rounded-md border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100">  
            {page}  
        </button>
    )
} */