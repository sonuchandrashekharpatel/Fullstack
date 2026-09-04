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


/* Lesson 33: Upgrading getModels() for Category Sorting */


/* Lesson 32: Sorting Models within Categories */


/* Lesson 31: Sorting Data with SQL ORDER BY */


/* Lesson 30: Sending Sort Params to the Data Layer */


/* Lesson 29: Styling the Active SortButton */
'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function SortButton({children, sort}: { 
  children: React.ReactNode
  sort: string
}) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const isActive = searchParams.get("sort") === sort

  function handleSort() {
    const url = `${pathname}?sort=${sort}`
    router.push(url)
  }

  return (
      <button
        onClick={handleSort}
        className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 ${isActive ? "text-white bg-orange-400 border-orange-400" : 'border-gray-300 text-gray-700 hover:bg-gray-100'} hover:bg-gray-100`}
      >
        {children}
      </button>
    )
}

/* Lesson 28: Navigating with usePathname and useRouter */
/* 
'use client'
import { useRouter, usePathname } from "next/navigation"

export default function SortButton({children, sort}: { 
  children: React.ReactNode
  sort: string
}) {
  const pathname = usePathname()
  const router = useRouter()

  function handleSort() {
    const url = `${pathname}?sort=${sort}`
    router.push(url)
  }

  
  return (
      <button
        onClick={handleSort}
        className={"px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"}
      >
        {children}
      </button>
    )
} */

/* Lesson 27: Setting Up Sort Controls */
/* 
export default function SortButton({children}: { children: React.ReactNode }) {
    return (
      <button
        className={"px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"}
      >
        {children}
      </button>
    )
} */