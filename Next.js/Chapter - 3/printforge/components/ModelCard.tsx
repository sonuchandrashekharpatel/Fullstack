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
import Link from "next/link"
import Image from "next/image"
import type {Model} from "@/lib/types"

export default function ModelCard({model}: { model: Model}) {

    return (
        <Link
        href={`/3d-models/${model.id}`}
        className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
        >
        <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
                role="article">
            <div className="relative aspect-square">
            <Image
                width={300}
                height={300}
                src={model.image}
                alt={model.name}
                className="absolute inset-0 object-cover w-full h-full"
            />
            </div>
            <div className="p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
                {model.name}
                </h2>
            </div>
            <p className="text-gray-800 text-sm line-clamp-2 min-h-10 leading-5">
                {model.description}
            </p>
            <div className="mt-2">
                <span
                className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800">
                  {model.category}  
                </span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
                <span>&hearts; {model.likes}</span>
            </div>
            </div>
        </div>
        </Link>
    )
}


/* Lesson 15: Filtering Data with SQL WHERE */


/* Lesson 14: Making ModelCards Dynamic */


/* Lesson 13: Wiring Database Models into the UI */
/* import Link from "next/link"
import Image from "next/image"
import type {Model} from "@/lib/types"

export default function ModelCard({model, category}: { model: Model[], category:string}) {


    return (
        <Link
        href={`/3d-models/${model.id}`}
        className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
        >
        <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
                role="article">
            <div className="relative aspect-square">
            <Image
                width={300}
                height={300}
                src={model.image}
                alt={model.name}
                className="absolute inset-0 object-cover w-full h-full"
            />
            </div>
            <div className="p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
                {model.name}
                </h2>
            </div>
            <p className="text-gray-800 text-sm line-clamp-2 min-h-10 leading-5">
                {model.description}
            </p>
            <div className="mt-2">
                <span
                className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800">
                  {category}  
                </span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
                <span>&hearts; {model.likes}</span>
            </div>
            </div>
        </div>
        </Link>
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
Recap Gauntlet Level Three
. Client components
. Dynamic routes
. usePathname
. Next Image & Font

*/
/* import Link from "next/link"
import Image from "next/image"

export default function ModelCard() {
    return (
        <Link
        href="/3d-models/1"
        className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
        >
        <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
                role="article">
            <div className="relative aspect-square">
            <Image
                width={300}
                height={300}
                src="/img/placeholder.png"
                alt="Articulated Dragon"
                className="absolute inset-0 object-cover w-full h-full"
            />
            </div>
            <div className="p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
                Articulated Dragon
                </h2>
            </div>
            <p className="text-gray-800 text-sm line-clamp-2 min-h-10 leading-5">
                A detailed dragon model with movable joints and wings
            </p>
            <div className="mt-2">
                <span
                className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800">
                    Toys & Games
                </span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
                <span>&hearts; 1847</span>
            </div>
            </div>
        </div>
        </Link>
    )
}
 */
/* Lesson 3: Structuring the 3D Models Section */
/* import Link from "next/link"

export default function ModelCard() {
    return (
        <Link
        href="/3d-models/1"
        className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
        >
        <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
                role="article">
            <div className="relative aspect-square">
            <img
                src="/img/placeholder.png"
                alt="Articulated Dragon"
                className="absolute inset-0 object-cover w-full h-full"
            />
            </div>
            <div className="p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
                Articulated Dragon
                </h2>
            </div>
            <p className="text-gray-800 text-sm line-clamp-2 min-h-10 leading-5">
                A detailed dragon model with movable joints and wings
            </p>
            <div className="mt-2">
                <span
                className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800">
                    Toys & Games
                </span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
                <span>&hearts; 1847</span>
            </div>
            </div>
        </div>
        </Link>
    )
} */