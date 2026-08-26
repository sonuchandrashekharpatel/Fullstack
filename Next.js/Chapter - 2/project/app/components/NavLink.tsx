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

import Link from "next/link"
import type { NavLinkProps } from "../types"

export default function NavLink({ href, children, isActive }: NavLinkProps) {
    return (
        <li className="text-sm uppercase">
            <Link
                href={href}
                className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive && "text-orange-accent"}`}
            >
                {children}
            </Link>
        </li>
    )
}

/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */
/* 
import Link from "next/link"
import type { NavLinkProps } from "../types"

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <li className="text-sm uppercase">
            <Link
                href={href}
                className="px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent"
            >
                {children}
            </Link>
        </li>
    )
} */