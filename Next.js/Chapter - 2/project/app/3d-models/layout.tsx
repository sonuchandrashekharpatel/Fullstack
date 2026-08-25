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
import { getAllCategories } from "../lib/categories"
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
}