/* Chapter - 2: Rendering Strategies and More */

/* Lesson 24: Section 2 Recap */
/* 
Recap:
What we've covered:
1. Added the categories nav bar and pages
2. usePathname & active link styling
3. Client components with "use client"
4. Rendering stategies
  . Static
  . Dynamic
  . Incremental Static Regeneration

5. Using <form>, <Form> and searchParams

Plus tons of challenges..


*/

/* Lesson 23: Tiny Library Solo */
/* 
Tiny Library:

Figma:  https://www.figma.com/design/FtShBWNFWZtBzGY6MlSLvT/Tiny-Library?node-id=1-1130&t=6fDjdfjzLyKbW6xY-0

*/

/* Lesson 22: PrintForge - Upgrade to Next's Form Component */


/* Lesson 21: NextJS Form Component */
/* 
. Prevents full page reloads on form submit.
. Pre-fetches target page layout for fast UI.
. Works smoothly even if JavaScript is disabled
. Syncs URL search parameters to server logic.
*/

import Form from "next/form"
async function getCatFacts() {
  const res = await fetch("https://catfact.ninja/facts")
  const data = await res.json()

  return data.data
}

export default async function Home({ searchParams }) {
  const { query } = await searchParams
  const catFacts = await getCatFacts()
  console.log(catFacts)

  let filterFacts = catFacts

  if(query) {
    filterFacts = filterFacts.filter( fact => fact.fact.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>

        <Form action="/" className="search-form">
          <label html="cat-fact-query" className="sr-only">Search Cat facts</label>
          <input 
            className="search-input"
            type="text" 
            name="query"
            id="cat-fact-query"
            placeholder="Search cat facts here..." 
            aria-label="search-box"
            defaultValue={query}
            autoComplete="off"
          />
        </Form>

        <div className="facts-list">
          {filterFacts.map((fact, index) => (
            <div key={index} className="fact-card">
              <p className="fact-text">{fact.fact}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

/* Lesson 20: PrintForge - Search Bar using native form */


/* Lesson 19: Cat Facts - searchParams pt. 2 */
/* 
What 'autoComplete' does?

. Controls browser form auto-fill suggestions.

. autoComplete="off" disables the popup history

. autoComplete="on" enables saved users inputs

. Keep custom UI clean by removing popups.

. Helps fill saved emails and secure passwords.

*/
/* 
async function getCatFacts() {
  const res = await fetch("https://catfact.ninja/facts")
  const data = await res.json()

  return data.data
}

export default async function Home({ searchParams }) {
  const { query } = await searchParams
  const catFacts = await getCatFacts()
  console.log(catFacts)

  let filterFacts = catFacts

  if(query) {
    filterFacts = filterFacts.filter( fact => fact.fact.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>

        <form className="search-form">
          <label html="cat-fact-query" className="sr-only">Search Cat facts</label>
          <input 
            className="search-input"
            type="text" 
            name="query"
            id="cat-fact-query"
            placeholder="Search cat facts here..." 
            aria-label="search-box"
            defaultValue={query}
            autoComplete="off"
          />
        </form>

        <div className="facts-list">
          {filterFacts.map((fact, index) => (
            <div key={index} className="fact-card">
              <p className="fact-text">{fact.fact}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
 */
/* Lesson 18: CatFacts - searchParams pt. 1 */


/* Lesson 17: HTML Form Submissions are Navigation Events */
/* 
Submitting a form is actually a navigation event on your site
*/

/**
 * Challenge:
 * 
 * Add a `form` element below the `h1` that has a single
 * `input` element (type="text"). Give it a `name` property
 * of something like "search" or "query", and a placeholder
 * 
 * Then, type something into the input and hit enter.
 * Check what happens with the page and the URL.
 */
/* 
async function getCatFacts() {
  const res = await fetch("https://catfact.ninja/facts")
  const data = await res.json()

  return data.data
}

export default async function Home() {
  const catFacts = await getCatFacts()

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>

        <form>
          <input type="text" name="search" aria-label="search-box" placeholder="Search here..." />
        </form>

        <div className="facts-list">
          {catFacts.map((fact, index) => (
            <div key={index} className="fact-card">
              <p className="fact-text">{fact.fact}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
 */
/* Lesson 16: CatFacts: Structured Play */
// export const dynamic = "force-dynamic"
/**
 * Structured play 🛝
 * - see what happens when you render the time stamp in dev mode
 *   (npm run dev) vs. production mode (npm run build + npm start).
 * - See what happens when you uncomment line 1 at the top.
 * - Each time, before starting up the server, see if you can
 *   guess what the behavior will be when you refresh the page;
 *   will the timestamp update? Will it stay the same?
 * 
 * Note: Try to remember how we need to do things slightly differently
 * in Scrimba. Considering downloading the code to your machine and
 * running it locally to see what's different.
 * 
 * In general, be curious and play around a bit!
 */
/* 
async function getCatFact() {
  const res = await fetch("https://catfact.ninja/fact", { cache: "no-store" })
  return await res.json()
}

export default async function Home() {

  const catFact = await getCatFact()
  const timestamp = new Date().toLocaleTimeString()

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>
        <div className="fact-card">
          <p className="timestamp">Rendered at: {timestamp}</p>
          <p className="fact-text">{catFact.fact}</p>
        </div>
      </main>
    </div>
  )
}
 */

/* Lesson 15: CatFacts - Add Fetch */
/**
 * Challenge: 
 * Part 1: Fetch a random cat fact from the CatFacts API
 *     - URL: "https://catfact.ninja/fact"
 *     - Make sure to return res.json() from this function
 *     - Run the code with `npm run build` and `npm start` 
 *       in the terminal.
 * 
 * Part 2: TBA
*     Challenge: 
*     https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
*     
*     Part 2: Add the `{cache: "no-store"}` option to the fetch request.
*     Rebuild (npm run build) and start (npm start) and see what it shows.
*     
*     Note: ⚠️ it may not show what you would expect ⚠️
 */
/* 
async function getCatFact() {
  const res = await fetch("https://catfact.ninja/fact", { cache: "no-store"})
  const data = await res.json()

  return data
}

export default async function Home() {
  const catFact = await getCatFact()

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>
        <div className="fact-card">
          <p className="fact-text">{catFact.fact}</p>
        </div>
      </main>
    </div>
  )
}

 */
/* Lesson 14: Cat Facts - SSG Pt. 1 */
/* 
One gotcha: 
. The most reliable way to see if your  page is rendering statically 
  or dynamically is to build and run the production version of your 
  app with :
  npm run && npm start

*/
/**
 * Challenge: build and run the Cat Facts app
 * 
 * 1. Open the terminal and enter `npm run build`
 * 2. When it finishes, check the output to see which routes
 *    are being rendered statically vs. dynamically
 * 3. (Optional): Run `npm start` to start the production
 *    version of the Cat Facts app.
 */
/**
 * Challenge: manually change this page to dynamic
 * 
 * 1. Add `export const dynamic = "force-dynamic"` to the
 *    top of the file.
 * 2. Do `npm run build` again and look carefully at the output.
*/
/* 
export const dynamic = "force-dynamic"
async function getCatFact() {
  return {
    fact: "Cats step with both left legs, then both right legs when they walk or run."
  }
}

export default async function Home() {
  const catFact = await getCatFact()

  return (
    <div className="page">
      <main className="main">
        <h1>🐈‍⬛ Cat Facts 🐈</h1>
        <div className="fact-card">
          <p className="fact-text">{catFact.fact}</p>
        </div>
      </main>
    </div>
  )
}
 */
/* Lesson 13: Rendering Strategies Pt. 3 */
/* 
What codes affects rendering?

If you write...                             Next marks route as      Because...

export const revalidate = 60                Static + ISR             Data can be cached for awhile, 
-or-                                                                 but should refresh after a specified
fetch (url, { next: {revalidate: 60} })                              amount of time.


fetch(url, {cache: "no-store"})             Dynamic SSR              Needs fresh, per-request data.
-or-                                                    
export const dynamic = "force-dynamic"


None of the above                           Static (SSG)             Data can be frozen at build-time.
-or-
fetch(url, {cache: "force-cache"})
-or-
export const dynamic = "force-static"

*/

/* Lesson 12: Rendering Strategies pt 2 */
/* 
Decision* Tree:

Step 1        : Is the page content identical for everyone?
  |-- Yes -- : If yes, Can it be a little outdated?

    |-- Yes -- : If yes, Static Site Generation (SSG)

    |-- No -- : If no, Incremental Static Regeneration (ISR)

  |-- No -- : If no, Server Side Rendering (SSR)

* Next.js figures out which rendering strategy to use for you!
  You just write code you need and Next.js handles the rest.

*/

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
/* 
export default function Page() {
  console.log(`Page: ${typeof document === "undefined" ? "Server" : "Client"} component`)
 
  return <h1>Hello, Next.js!</h1>
}
 */
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