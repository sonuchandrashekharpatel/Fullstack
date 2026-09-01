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
import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
        <main>
            <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
                <div className="flex-1 space-y-6">
                <p className="hidden text-sm text-gray-600 uppercase md:block">
                    Your go-to platform for 3D printing files
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">
                    Discover what's possible with 3D Printing
                </h1>
                <p className="text-lg text-gray-600">
                    Join our community of creators and explore a vast
                    library of user-submitted models.
                </p>

                <div className="flex gap-4">
                    <Link
                    href="/3d-models"
                    className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
                    >
                    Browse Models
                    </Link>
                </div>
                </div>
                <Image width={1206} height={1201} src="/img/hero-image.png" className="w-87.5 h-auto rounded-lg" alt="Hero Image"/>
            </section>
        </main>
    )
}


/* Lesson 12: Rendering Category Links from Data */


/* Lesson 11: Reading Categories from the Database */


/* Lesson 10: Reading Models from the Database */


/* Lesson 9: A Tiny SQLite Setup Note */


/* Lesson 8: Seeding the Categories Table */


/* Lesson 7: Seeding the Models Table */


/* Lesson 6: Setting Up the PrintForge Database */
/* 
UI Layer: /app
Data Layer: /lib
Database: printforge.db

*/

/* Lesson 5: Introducing Data in Next.js */
/* 
UI layer 
Data Layer
Database

SQL -> Database language
// SQLite -> Database

*/

/* Lesson 4: Adding Dynamic Routes and Image Optimisation */
/*  
CHALLENGE - Next Image Component  
- Replace all `<img>` elements with Next’s `Image` component
- Add `width` and `height` props to each image
	- Home - `/page.tsx` (1206x1201)
	- About - `/about/page.tsx`  (724x724)
	- Single - `/3d-models/[id]/page.tsx` (500x500)
	- `ModelCard.tsx` (300x300)
	- `Navbar.tsx` Logo (200x42)
	- `Navbar.tsx` Logo Icon (40x35)
	  
DOCS:
- https://nextjs.org/docs/app/getting-started/images
*/
/* import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
        <main>
            <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
                <div className="flex-1 space-y-6">
                <p className="hidden text-sm text-gray-600 uppercase md:block">
                    Your go-to platform for 3D printing files
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">
                    Discover what's possible with 3D Printing
                </h1>
                <p className="text-lg text-gray-600">
                    Join our community of creators and explore a vast
                    library of user-submitted models.
                </p>

                <div className="flex gap-4">
                    <Link
                    href="/3d-models"
                    className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
                    >
                    Browse Models
                    </Link>
                </div>
                </div>
                <Image width={1206} height={1201} src="/img/hero-image.png" className="w-87.5 h-auto rounded-lg" alt="Hero Image"/>
            </section>
        </main>
    )
}
 */

/* Lesson 3: Structuring the 3D Models Section */
/* 
Recap Gauntlet
Level Two
. Nested routes
. Nested Layouts
. Components & Props
. Page composition

*/
/* 
import Link from "next/link"

export default function Home() {
    return (
        <main>
            <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
                <div className="flex-1 space-y-6">
                <p className="hidden text-sm text-gray-600 uppercase md:block">
                    Your go-to platform for 3D printing files
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">
                    Discover what's possible with 3D Printing
                </h1>
                <p className="text-lg text-gray-600">
                    Join our community of creators and explore a vast
                    library of user-submitted models.
                </p>

                <div className="flex gap-4">
                    <Link
                    href="/3d-models"
                    className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
                    >
                    Browse Models
                    </Link>
                </div>
                </div>
                <img src="/img/hero-image.png" className="w-87.5 h-auto rounded-lg" alt="Hero Image"/>
            </section>
        </main>
    )
}
 */
/* Lesson 2: Rebuilding the App Shell */
/*  
CHALLENGE - About Page
- Create `app/about/page.tsx`  
- Copy the contents of the `<main>` element from `about.html` into the page
  
DOCS: 
- https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route
*/
/* import Link from "next/link"

export default function Home() {
    return (
        <main>
            <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
                <div className="flex-1 space-y-6">
                <p className="hidden text-sm text-gray-600 uppercase md:block">
                    Your go-to platform for 3D printing files
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">
                    Discover what's possible with 3D Printing
                </h1>
                <p className="text-lg text-gray-600">
                    Join our community of creators and explore a vast
                    library of user-submitted models.
                </p>

                <div className="flex gap-4">
                    <Link
                    href="/3d-models"
                    className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
                    >
                    Browse Models
                    </Link>
                </div>
                </div>
                <img src="/img/hero-image.png" className="w-87.5 h-auto rounded-lg" alt="Hero Image"/>
            </section>
        </main>
    )
}
 */
/* Lesson 1: Welcome to Section 3! */
