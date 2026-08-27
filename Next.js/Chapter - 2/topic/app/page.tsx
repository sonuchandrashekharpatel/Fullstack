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
/* 
Rendering strategies: 
  Decide when and where a page's HTML is built

  Build-time:
    Pre-rendered once, served from cache

  Request-time:
    HTML-rendered on demand, always fresh.

  In-browser:
  Built in-browser after JS loads.

Types of Rendering Strategies:
  Strategy                          When rendered?                      Where rendered?

  Static Site Generation            Once, at build time                 On server when 'next build' is run
  (SSG)

  Incremental Static                Once, at build time then            On server, in the background when 
  Regeneration (ISR)                regenerated after a time window     the next request triggers regeneration

  Server-side Rendering             On every request from the           On server, when a request for 
  SSR                               browser                             that page comes in

*/

/* Lesson 10: Challenge: Category Pages */


/* Lesson 9: Challenge: Style Categories Link */


/* Lesson 8: Even More on Client Components */
/* 
Client Components
. Any file marked with "use client"
. Any compound that are imported and rendered by a client component

*/
export default function Page() {
  console.log(`Page: ${typeof document === "undefined" ? "Server" : "Client"} component`)
 
  return <h1>Hello, Next.js!</h1>
}
/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */


/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */


/* Lesson 1: Walking through refactors */
/* 
export default function Page() {
  return <h1>Hello, Next.js!</h1>
} 
*/