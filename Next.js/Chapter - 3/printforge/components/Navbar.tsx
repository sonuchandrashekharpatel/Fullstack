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


/* Lesson 11: Reading Categories from the Database */


/* Lesson 10: Reading Models from the Database */


/* Lesson 9: A Tiny SQLite Setup Note */


/* Lesson 8: Seeding the Categories Table */


/* Lesson 7: Seeding the Models Table */


/* Lesson 6: Setting Up the PrintForge Database */


/* Lesson 5: Introducing Data in Next.js */


/* Lesson 4: Adding Dynamic Routes and Image Optimisation */

import Link from "next/link"
import NavLink from "./NavLink"
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4 pr-2">
                <Link href="/">
                <div className="relative cursor-pointer">

                    <Image
                        width={200}
                        height={42}
                        src="/img/printforge-logo.svg"
                        alt="PrintForge Logo"
                        className="w-50 h-auto hidden md:block"
                    />

                    <Image
                        width={40}
                        height={35}
                        src="/img/printforge-logo-icon.svg"
                        alt="PrintForge Logo"
                        className="w-10 h-auto block md:hidden"
                    />
                </div>
                </Link>
                
                <ul className="flex items-center gap-1.5">
                    <NavLink href="/3d-models">3D Models</NavLink>
                    <NavLink href="/about">About</NavLink>
                </ul>
            </nav>
        </header>
    )
}

/* Lesson 3: Structuring the 3D Models Section */


/* Lesson 2: Rebuilding the App Shell */
/*
CHALLENGE - Navbar Component
Create a Navbar component using the `<header>` element
in the `index.html` mockup and import/use in `layout.tsx`

DOCS: 
- https://react.dev/learn/your-first-component#defining-a-component
- https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
*/
/*  
CHALLENGE - Link Component
- Change all anchor elements to Link components  
- Update all `href` attributes to use routes

DOCS:
- https://nextjs.org/docs/app/api-reference/components/link
*/
/*  
CHALLENGE - NavLink Component  
- Create a `NavLink.tsx` component  
- Accept `href` and `children` as props  
- Move one of the `<li>` elements from `Navbar.tsx` into the component  
- Replace the hardcoded values with props  
- Use `NavLink` inside `Navbar.tsx`
  
DOCS:
- https://react.dev/learn/passing-props-to-a-component#passing-props-to-a-component 
*/
/* 
import Link from "next/link"
import NavLink from "./NavLink"
export default function Navbar() {
    return (
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4 pr-2">
                <Link href="/">
                <div className="relative cursor-pointer">

                    <img
                    src="/img/printforge-logo.svg"
                    alt="PrintForge Logo"
                    className="w-50 h-auto hidden md:block"
                    />

                    <img
                    src="/img/printforge-logo-icon.svg"
                    alt="PrintForge Logo"
                    className="w-10 h-auto block md:hidden"
                    />
                </div>
                </Link>
                
                <ul className="flex items-center gap-1.5">
                    <NavLink href="/3d-models">3D Models</NavLink>
                    <NavLink href="/about">About</NavLink>
                </ul>
            </nav>
        </header>
    )
} */