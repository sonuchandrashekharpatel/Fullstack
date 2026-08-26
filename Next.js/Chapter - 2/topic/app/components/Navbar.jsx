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
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
   console.log(`Navbar: ${typeof document === "undefined"  ? "Server" : "Client"} component`)
    return (
    <nav>
        <ul>
            <li><Link href="/" className={pathname === "/" ? "is-active" : null}>Home</Link></li>
            <li><Link href="/about" className={pathname === "/about" ? "is-active" : null}>About</Link></li>
            <li><Link href="/posts" className={pathname === "/posts" ? "is-active" : null}>Posts</Link></li>
        </ul>   
    </nav>
    )
}

/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */
/* "use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
    console.log(pathname)
    return (
    <nav>
        <ul>
            <li><Link href="/" className={pathname === "/" ? "is-active" : null}>Home</Link></li>
            <li><Link href="/about" className={pathname === "/about" ? "is-active" : null}>About</Link></li>
            <li><Link href="/posts" className={pathname === "/posts" ? "is-active" : null}>Posts</Link></li>
        </ul>   
    </nav>
    )
} */