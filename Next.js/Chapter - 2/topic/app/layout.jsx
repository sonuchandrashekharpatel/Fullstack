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
import "./global.css"

export const metadata = {
    title: "Cat Facts",
    description: "A fun app for learning about cats using the Cat Facts API!",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body>{children}</body>
        </html>
    )
}


/* Lesson 13: Rendering Strategies Pt. 3 */


/* Lesson 12: Rendering Strategies pt 2 */


/* Lesson 11: Rendering Strategies Intro */


/* Lesson 10: Challenge: Category Pages */


/* Lesson 9: Challenge: Style Categories Link */


/* Lesson 8: Even More on Client Components */
/* 
"use client"
import "./global.css"
import Navbar from "@/app/components/Navbar"

export default function RootLayout({ children }: {children: React.ReactNode }) {
  console.log(`RootLayout: ${typeof document === "undefined"  ? "Server" : "Client"} component`)
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>&copy; {new Date().getFullYear()} Generic Web Dev, LLC.</footer>

      </body>
    </html>
  )
}
 */

/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */
/* 
import "./global.css"
import Navbar from "@/app/components/Navbar"

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>&copy; {new Date().getFullYear()} Generic Web Dev, LLC.</footer>

      </body>
    </html>
  )
}
 */
/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */
/* 
import "./global.css"
import Link from "next/link"

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/posts">Posts</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>&copy; {new Date().getFullYear()} Generic Web Dev, LLC.</footer>

      </body>
    </html>
  )
}

*/

/* Lesson 1: Walking through refactors */
