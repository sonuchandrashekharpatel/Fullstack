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
/* 
To do:
. Add category page
  . Path: /3d-models/categories/[categoryName]
. Add category navigation bar
*/
import HeroImage from "@/public/hero-image.png"

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
            <a
              href="/3d-models"
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Models
            </a>
          </div>
        </div>
        <img src={HeroImage.src} width={350} />
      </section>
    </main>
  )
}
