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


/* Lesson 28: Navigating with usePathname and useRouter */


/* Lesson 27: Setting Up Sort Controls */


/* Lesson 26: Understanding the Sorting Data Flow */


/* Lesson 25: Passing Search Through the UI */


/* Lesson 24: Searching by Name or Description */


/* Lesson 23: Upgrading getModels() for Search */


/* Lesson 22: Reading searchParams from the URL */


/* Lesson 21: Upgrading the SearchForm */


/* Lesson 20: Understanding the Search Data Flow */


/* Lesson 19: Fixing the “All” Category Link */


/* Lesson 18: Making the Category Page Title Dynamic */


/* Lesson 17: Building a Dynamic Single Model Page */


/* Lesson 16: Building a Dynamic Category Page */


/* Lesson 15: Filtering Data with SQL WHERE */


/* Lesson 14: Making ModelCards Dynamic */


/* Lesson 13: Wiring Database Models into the UI */


/* Lesson 12: Rendering Category Links from Data */
/*
CHALLENGE - Dynamically render all category links

1. Map over `categories`  
2. Use the existing 3D Printer NavLink as a template
(Leave the "All" NavLink in tact)
3. Dynamically set the `href`, `key`, and content  

Ignore any type warnings for now
*/

import NavLink from "@/components/NavLink"
import {getCategories} from '@/lib/categories'
import type {Category} from '@/lib/types'
export default async function CategoriesNav() {

    const categories = await getCategories()

    return (
        <aside
            className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
            <div className="relative">
            <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
                <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                    <NavLink href="/3d-models">All</NavLink>
                    {
                        categories.map((category: Category) => 
                            <NavLink key={category.slug} href={`/3d-models/categories/${category.slug}`}>
                                {category.name}
                            </NavLink>
                        )
                    }
                </ul>
            </nav>
            <div
                className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-linear-to-l from-white to-transparent md:hidden"/>
            </div>
        </aside>
    )
}

/* Lesson 11: Reading Categories from the Database */


/* Lesson 10: Reading Models from the Database */


/* Lesson 9: A Tiny SQLite Setup Note */


/* Lesson 8: Seeding the Categories Table */


/* Lesson 7: Seeding the Models Table */


/* Lesson 6: Setting Up the PrintForge Database */


/* Lesson 5: Introducing Data in Next.js */


/* Lesson 4: Adding Dynamic Routes and Image Optimisation */


/* Lesson 3: Structuring the 3D Models Section */
/* import NavLink from "@/components/NavLink"
export default function CategoriesNav() {
    return (
        <aside
            className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
            <div className="relative">
            <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
                <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                    <NavLink href="/3d-models">All</NavLink>
                    <NavLink href="/3d-models/categories/3d-printer">3D Printer</NavLink>
                </ul>
            </nav>
            <div
                className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-linear-to-l from-white to-transparent md:hidden"/>
            </div>
        </aside>

    )
} */