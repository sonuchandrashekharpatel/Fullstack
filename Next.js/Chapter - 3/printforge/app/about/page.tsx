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
import Image from "next/image"

export default function AboutPage() {
    return (
        <main>
            <section className="container max-w-4xl px-4 py-8 mx-auto">
                <h1 className="mb-6 text-4xl font-bold text-center">
                About PrintForge
                </h1>

                <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
                <div className="relative h-75 w-full">

                    <Image
                        width={724}
                        height={724}
                        src="/img/hero-image-square.png"
                        alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />

                </div>
                <div>
                    <p
                    className="mb-4 text-sm text-gray-600 uppercase"
                    aria-hidden="true"
                    >
                    About PrintForge
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold font-montserrat-alternates">
                    Empowering Makers Worldwide
                    </h2>
                    <p className="mb-4 text-gray-700">
                    Founded in 2023, PrintForge has quickly become the
                    go-to platform for 3D printing enthusiasts, makers,
                    and professional designers to share and discover
                    amazing STL files for 3D printing.
                    </p>
                    <p className="text-gray-700">
                    Our mission is to foster a vibrant community where
                    creativity meets technology, enabling anyone to
                    bring their ideas to life through 3D printing.
                    </p>
                </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true"/>

            <section className="py-12" aria-labelledby="key-features">
                <div className="px-6 mx-auto max-w-7xl">
                <h2 id="key-features" className="sr-only">
                    Key Features
                </h2>
                <div className="grid gap-6 md:gap-0 md:grid-cols-3">
                    <article className="p-6 bg-white">
                    <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                        100K+ Models
                    </h3>
                    <p className="text-gray-600">
                        Access our vast library of community-created 3D
                        models, from practical tools to artistic
                        creations.
                    </p>
                    </article>
                    <article className="p-6 bg-white border-gray-400 md:border-x">
                    <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                        Active Community
                    </h3>
                    <p className="text-gray-600">
                        Join thousands of makers who share tips, provide
                        feedback, and collaborate on projects.
                    </p>
                    </article>
                    <article className="p-6 bg-white">
                    <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                        Free to Use
                    </h3>
                    <p className="text-gray-600">
                        Most models are free to download, with optional
                        premium features for power users.
                    </p>
                    </article>
                </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true"/>

            <section className="container max-w-3xl px-4 py-8 mx-auto">
                <div className="prose max-w-none">
                <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
                <p className="mb-4 text-gray-700">
                    At PrintForge, we believe that 3D printing is
                    revolutionizing the way we create, prototype, and
                    manufacture. Our platform serves as a bridge between
                    designers and makers, enabling the sharing of knowledge
                    and creativity that pushes the boundaries of what's
                    possible with 3D printing.
                </p>
                <p className="text-gray-700">
                    Whether you're a hobbyist looking for your next weekend
                    project, an educator seeking teaching materials, or a
                    professional designer wanting to share your creations,
                    PrintForge provides the tools and community to support
                    your journey in 3D printing.
                </p>
                </div>
            </section>
        </main>
    )
}

/* Lesson 3: Structuring the 3D Models Section */


/* Lesson 2: Rebuilding the App Shell */
/* 
export default function AboutPage() {
    return (
        <main>
            <section className="container max-w-4xl px-4 py-8 mx-auto">
                <h1 className="mb-6 text-4xl font-bold text-center">
                About PrintForge
                </h1>

                <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
                <div className="relative h-75 w-full">

                    <img
                    src="/img/hero-image-square.png"
                    alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />

                </div>
                <div>
                    <p
                    className="mb-4 text-sm text-gray-600 uppercase"
                    aria-hidden="true"
                    >
                    About PrintForge
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold font-montserrat-alternates">
                    Empowering Makers Worldwide
                    </h2>
                    <p className="mb-4 text-gray-700">
                    Founded in 2023, PrintForge has quickly become the
                    go-to platform for 3D printing enthusiasts, makers,
                    and professional designers to share and discover
                    amazing STL files for 3D printing.
                    </p>
                    <p className="text-gray-700">
                    Our mission is to foster a vibrant community where
                    creativity meets technology, enabling anyone to
                    bring their ideas to life through 3D printing.
                    </p>
                </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true"/>

            <section className="py-12" aria-labelledby="key-features">
                <div className="px-6 mx-auto max-w-7xl">
                <h2 id="key-features" className="sr-only">
                    Key Features
                </h2>
                <div className="grid gap-6 md:gap-0 md:grid-cols-3">
                    <article className="p-6 bg-white">
                    <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                        100K+ Models
                    </h3>
                    <p className="text-gray-600">
                        Access our vast library of community-created 3D
                        models, from practical tools to artistic
                        creations.
                    </p>
                    </article>
                    <article className="p-6 bg-white border-gray-400 md:border-x">
                    <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                        Active Community
                    </h3>
                    <p className="text-gray-600">
                        Join thousands of makers who share tips, provide
                        feedback, and collaborate on projects.
                    </p>
                    </article>
                    <article className="p-6 bg-white">
                    <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                        Free to Use
                    </h3>
                    <p className="text-gray-600">
                        Most models are free to download, with optional
                        premium features for power users.
                    </p>
                    </article>
                </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true"/>

            <section className="container max-w-3xl px-4 py-8 mx-auto">
                <div className="prose max-w-none">
                <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
                <p className="mb-4 text-gray-700">
                    At PrintForge, we believe that 3D printing is
                    revolutionizing the way we create, prototype, and
                    manufacture. Our platform serves as a bridge between
                    designers and makers, enabling the sharing of knowledge
                    and creativity that pushes the boundaries of what's
                    possible with 3D printing.
                </p>
                <p className="text-gray-700">
                    Whether you're a hobbyist looking for your next weekend
                    project, an educator seeking teaching materials, or a
                    professional designer wanting to share your creations,
                    PrintForge provides the tools and community to support
                    your journey in 3D printing.
                </p>
                </div>
            </section>
        </main>
    )
} */