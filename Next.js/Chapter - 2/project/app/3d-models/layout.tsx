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
/**
 * Challenge: Style the active categories links
 * 
 * Note: Be sure to think about what you're turning into a client
 * component, and restructure the app if needed
 */

import type { ReactNode } from "react"
import CategoriesNav from "../components/CategoriesNav"

export default function ModelsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNav />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}

/* Lesson 8: Even More on Client Components */


/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */
/* import NavLink from "@/app/components/NavLink"
import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories()
  console.log(categories)
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <div className="relative">
          <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
              <NavLink
                href="/3d-models"
              >
                All
              </NavLink>
              {categories.map(item => (
                <NavLink
                  href={`/3d-models/categories/${item.slug}`}
                  key={item.slug}
                >
                  {item.displayName}
                </NavLink>
              ))}
            </ul>
          </nav>
          <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-linear-to-l from-white to-transparent md:hidden" />
        </div>
      </aside>

      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
} */

/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */

/* 
Challenge
=========
Add the categories navigation bar
- Before anything: figure out *where* you would put the code for a navigation bar
  that should always be visible under the `/3d-models` route.
- Use `getAllCategories` from `app/lib/categories.ts` to get a list of
  the categories that should be used in the navigation bar
- Clicking any of the categories should send the user to
  `/3d-models/categories/<category-slug-goes-here>`

## Notes:
- For now, don't worry about if the user tries to type in an invalid
  slug. We'll handle that soon.
*/
/* import { getAllCategories } from "../lib/categories"
import { LayoutProps } from "../types"
import Link from "next/link"
export default function ModelsLayout({children}: LayoutProps) {

    const categories = getAllCategories()
    const categoriesLinks = categories.map((category) => <Link key={category.slug} href={`/3d-models/categories/${category.slug}`}>{category.displayName}</Link>)
    return (
        <>
            <nav>{categoriesLinks}</nav>
            {children}
        </>
    )
} */