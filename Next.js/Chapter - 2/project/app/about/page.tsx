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


/* Lesson 9: Challenge: Style Categories Link */


/* Lesson 8: Even More on Client Components */


/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */


/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */


/* Lesson 1: Walking through refactors */


/* Lesson 0: Previous Chapter */

import HeroImageSquare from "@/public/hero-image-square.png"

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
                            src={HeroImageSquare.src}
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

            <hr className="border-gray-200" aria-hidden="true" />

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

            <hr className="border-gray-200" aria-hidden="true" />

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
