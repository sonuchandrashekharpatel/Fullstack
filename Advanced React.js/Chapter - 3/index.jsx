/* Chapter - 3: Routing */

/* Lesson 64: Section wrapup */


/* Lesson 63: Coding the Sad Path - Error handling */


/* Lesson 62: Coding the Sad Path - Loading state (new) */


/* Lesson 61: Quick update to our fetching code */


/* Lesson 60: "Happy Path" vs. "Sad Path" (new) */


/* Lesson 59: 404 Page */


/* Lesson 58: Challenge: conditionally render the back button text */


/* Lesson 57: useLocation */


/* Lesson 56: Link state */


/* Lesson 55: Back to all vans */


/* Lesson 54: Fix remaining absolute paths */


/* Lesson 53: Challenge: Conditional rendering practice */


/* Lesson 52: Merging search params with the setSearchParams function */


/* Lesson 51: Merging search params with Links */


/* Lesson 50: Caveats to setting params */


/* Lesson 49: Challenge: Filter the vans with a setter function */


/* Lesson 48: Using the search params setter function */


/* Lesson 47: Challenge: Filter the vans with Links */


/* Lesson 46: Using Links to add search params */


/* Lesson 45: Challenge: Filter the vans in VanLife */


/* Lesson 44: Filter the array w/ the search param */


/* Lesson 43: Challenge: Set up search params in VanLife */


/* Lesson 42: useSearchParams */


/* Lesson 41: Search Params Intro */


/* Lesson 40: Outlet Context */


/* Lesson 39: Add the Final Navbar! */


/* Lesson 38: Add /host/vans/:id Nested Routes */


/* Lesson 37: Back to all vans */


/* Lesson 36: Relative Links */


/* Lesson 35: Building out the Host Van Detail page */


/* Lesson 34: 🔀 Optional Side Quest - Building out the Host Vans List and Detail Pages */


/* Lesson 33: Adding Host Vans Routes */


/* Lesson 32: Active Link Styling with NavLink - part 2 */


/* Lesson 31: Active Link Styling with NavLink */


/* Lesson 30: NavLink */


/* Lesson 29: Add Footer */


/* Lesson 28: Nested Routes Quiz */


/* Lesson 27: To nest or not to nest? */


/* Lesson 26: Index Routes */


/* Lesson 25: Relative Paths */


/* Lesson 24: Creating the Host Layout */


/* Lesson 23: Nesting the /host routes */


/* Lesson 22: Bootstrap the Host pages */


/* Lesson 21: Fixing the Navbar with a Layout Route part 2 */


/* Lesson 20: Fixing the Navbar with a Layout Route */


/* Lesson 19: Nested Routes Intro */


/* Lesson 18: Route Params Quiz */


/* Lesson 17: Route Params part 3.2 - useParams() challenge */


/* Lesson 16: Route Params part 3.1 - useParams() & challenge */


/* Lesson 15: A11y Update - wrapping complex content in a link */


/* Lesson 14: Route Params - part 2 */


/* Lesson 13: Route Params - part 1 */


/* Lesson 12: Challenge: Vans Page - Part 2 */


/* Lesson 11: Challenge: Vans Page - Part 1 */


/* Lesson 10: Mirage JS Server */


/* Lesson 9: VanLife project bootstrapping */
/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root"))
  .render(<App />)

/* Lesson 8: Link */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    )
}

function Home() {
  return <h1>This is Home Page</h1>
}

function About() {
  return <h1>This is About Page</h1>
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <App />
);

 */



/* Lesson 7: Quick Re-org */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    )
}

function Home() {
  return <h1>This is Home Page</h1>
}

function About() {
  return <h1>This is About Page</h1>
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <App />
);

 */
/* Lesson 6: Route, path, & element */
/**
 * Challenge:
 * 1. Create an "About" component (just render another h1 that says
 *    "About page" or something more interesting of your choosing).
 * 2. Create a new Route to render the About component when the path
 *    is /about
 */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return <h1>Hello, React Router!</h1>
}

function About() {
  return <h1>This is About Page</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>
);
 */

/* Lesson 5: BrowserRouter & Routes challenge */
/**
 * Challenge: set up the BrowserRouter and Routes!
 * Note: nothing will render to the page yet.
*/
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    </Routes>
  </BrowserRouter>
);
 */
/* Lesson 4: Routes */
/* 
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return(
    <h1>Hello world!</h1>
  )
}

// example.com/blog/1234

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route>

      </Route>
    </Routes>
  </BrowserRouter>
)
 */

/* Lesson 3: React Router Setup & BrowserRouter */
/* import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

function App() {
  return(
    <h1>Hello world!</h1>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
 */
/* Lesson 2: Multi-page vs single-page apps */
/* 
MPA vs SPA

*/

/* Lesson 1: Introduction to React Router 6 */
/* 
What we'll learn:
1. Routing Basics
2. Navigation
3. Layout and Index Routes
4. Nested Routes
5. Routes and Search Parameters
6. Protected Routes

+ More, with lots of hands-on practice

What we'll build:
1. SPA with 10+ routes
2. Filter by van type
3. Active nav link styling
4. Protected Routes
5. Nested routes (multiple levels deep)
6. Using a real database (Firebase)
7. Deployed (Netlify)

*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Routing"
const chapterNum = 3
const lesson = [
  "Introduction to React Router 6",
  "Multi-page vs single-page apps",
  "React Router Setup & BrowserRouter",
  "Routes",
  "BrowserRouter & Routes challenge",
  "Route, path, & element",
  "Quick Re-org",
  "Link",
  "VanLife project bootstrapping",
  "Mirage JS Server",
  "Challenge: Vans Page - Part 1",
  "Challenge: Vans Page - Part 2",
  "Route Params - part 1",
  "Route Params - part 2",
  "A11y Update - wrapping complex content in a link",
  "Route Params part 3.1 - useParams() & challenge",
  "Route Params part 3.2 - useParams() challenge",
  "Route Params Quiz",
  "Nested Routes Intro",
  "Fixing the Navbar with a Layout Route",
  "Fixing the Navbar with a Layout Route part 2",
  "Bootstrap the Host pages",
  "Nesting the /host routes",
  "Creating the Host Layout",
  "Relative Paths",
  "Index Routes",
  "To nest or not to nest?",
  "Nested Routes Quiz",
  "Add Footer",
  "NavLink",
  "Active Link Styling with NavLink",
  "Active Link Styling with NavLink - part 2",
  "Adding Host Vans Routes",
  "🔀 Optional Side Quest - Building out the Host Vans List and Detail Pages",
  "Building out the Host Van Detail page",
  "Relative Links",
  "Back to all vans",
  "Add /host/vans/:id Nested Routes",
  "Add the Final Navbar!",
  "Outlet Context",
  "Search Params Intro",
  "useSearchParams",
  "Challenge: Set up search params in VanLife",
  "Filter the array w/ the search param",
  "Challenge: Filter the vans in VanLife",
  "Using Links to add search params",
  "Challenge: Filter the vans with Links",
  "Using the search params setter function",
  "Challenge: Filter the vans with a setter function",
  "Caveats to setting params",
  "Merging search params with Links",
  "Merging search params with the setSearchParams function",
  "Challenge: Conditional rendering practice",
  "Fix remaining absolute paths",
  "Back to all vans",
  "Link state",
  "useLocation",
  "Challenge: conditionally render the back button text",
  "404 Page",
  "\"Happy Path\" vs. \"Sad Path\" (new)",
  "Quick update to our fetching code",
  "Coding the Sad Path - Loading state (new)",
  "Coding the Sad Path - Error handling",
  "Section wrapup"
]
lessonGenerator(chapterName, lesson, chapterNum) 
 */