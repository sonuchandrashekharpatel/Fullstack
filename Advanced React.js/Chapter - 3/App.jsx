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
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />}/>
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

/* Lesson 30: NavLink */
/* 
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

 function Layout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }
  return (
    <div>
      <h3>Welcome to my page!</h3>
      <nav>
        <NavLink 
        to="/"
        className={({isActive}) => isActive ? "my-link" : ""}
        >Home</NavLink>

        <NavLink 
        to="/about"
        className={({isActive}) => isActive ? "my-link" : ""}
        style={({isActive}) => isActive ? activeStyle : null}
        >About</NavLink>

        <NavLink 
        to="/contact"
        className={({isActive}) => isActive ? "my-link" : ""}
        >Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  )
};

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <h2>About Me</h2>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
 */

/* Lesson 29: Add Footer */
/**
 * Challenge: Add the footer to the site! Make a separate Footer component
 * in the components folder, and just use this as the markup:
 * 
 * <footer>&#169; 2022 #VANLIFE</footer>
 * 
 * I'm mostly wanting to test your ability to find where the footer would
 * be added, and don't care too much about getting the styling correct.
 * But if you feel you need extra CSS practice, feel free to do the styling
 * as well!
 * 
 */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />}/>
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
 */
/* Lesson 28: Nested Routes Quiz */
/* 
1. What is the primary reason to use a nested route?
Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.


3. What does the <Outlet /> component do? When do you use it?
We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition


4. What is an "Index Route"?
It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.
*/

/* Lesson 27: To nest or not to nest? */
/**
 * Thought experiment:
 * 
 * Re-write the vans route as a nested route. Because there's no shared
 * UI between /vans and /vans/:id, the parent "vans" route won't have its
 * own `element` prop, just a `path` prop.
 * 
 * Hint: you're not creating a Layout Route (since that's only for
 * shared UI), but you are using another kind of "pathless" route...
*/
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />}/>
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
 */
/* Lesson 26: Index Routes */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
 */
/* Lesson 25: Relative Paths */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
            <Route path="host" element={<HostLayout />}>
              <Route path="host" element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
} */


/* Lesson 24: Creating the Host Layout */
/**
 * Challenge: Make the HostLayout component!
 * The HostLayout should use Links to navigate to the following
 * routes: 
 *    * Dashboard ("/host")
 *    * Income ("/host/income")
 *    * Reviews ("/host/reviews")
 * Then replace the parent "/host" route's element below with the
 * new HostLayout component you made.
 * 
 * NOTE: The dashboard route/page will be gone for now, but don't fret.
 * We'll be fixing that in the next lesson.
 */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostLayout from "./components/HostLayout"
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
            <Route path="/host" element={<HostLayout />}>
              <Route path="/host" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
 */

/* Lesson 23: Nesting the /host routes */
/* 
Challenge: 
1. Turn the "/host" path into a parent route and nest
"/host/income" and "/host/reviews" as children routes.
Then try entering "/host/income" in the URL and see what
happens.

2. See if you can figure out why it did what it did.
*/

/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import Dashboard from "./pages/Host/Dashboard"

import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
            <Route path="/host" element={<Dashboard />}> 
                <Route path="/host/income" element={<Income />} />
                <Route path="/host/reviews" element={<Reviews />} />
              </Route >
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
 */


/* Lesson 22: Bootstrap the Host pages */

/**
 * Challenge:
 * 1. Add a "Host" link to the Navbar that takes you to the "/host" path
 * 2. Create the following components in the pages/Host folder:
 *    a. Dashboard ("/host")
 *    b. Income ("/host/income")
 *    c. Reviews ("/host/reviews")
 *    These components can just have an h1 for now that says, e.g.
 *    "Host Dashboard here".
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import Dashboard from "./pages/Host/Dashboard"

import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
            <Route path="/host" element={< Dashboard/> } />
            <Route path="/host/income" element={< Income/>} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

 */
/* Lesson 21: Fixing the Navbar with a Layout Route part 2 */
/**
 * Challenge: get the Header working again
 */
/* import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans/Vans'
import "./server" 
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
 */

/* Lesson 20: Fixing the Navbar with a Layout Route */
/**
 * Challenge: set up the code so we can use a layout route!
 * 
 * 1. Create a folder called "components"
 * 2. Create 2 new component files: Layout.jsx and Header.jsx
 * 3. Move the <header> code below to the Header component file. 
 *    (DON'T import that Header component here!)
 */
/* import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans'
import "./server" 
import VanDetail from "./pages/VanDetail"

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
        </Routes>
    </BrowserRouter>
  )
}

 */
/* Lesson 19: Nested Routes Intro */
/* 
Nested Routes
. Nested URL 
  . /van
  . /van/van-id-or-more

. Shared UI
  . Often parts of the page are shared within the same route


Nesting <Route>
. Can use either <Route /> OR <Route> ... </Route>

. When you want to keep displaying some UI on the page, but also you
  whant to display some more.

. When you want to avoid repetition in your route definitions.

*/

/* Lesson 18: Route Params Quiz */
/* 
1. What is a route/url parameter?
Ans. Route/url parameter is a placeholder in url path that is replaced with the actual the value

------------
2. Add a route parameter called `productId` to the Route path below:


<Route path="/products/:productId" element={<ProductDetail />} />


------------
3. Add whatever you need to add for the component below to display
   the route parameter in the <h1>


import { useParams } from "react-router-dom"

function ProductDetail() {
    const params = useParams()
    return <h1>Product detail page goes here whose id is {params.productId}</h1>
}
*/

/* Lesson 17: Route Params part 3.2 - useParams() challenge */


/* Lesson 16: Route Params part 3.1 - useParams() & challenge */


/* Lesson 15: A11y Update - wrapping complex content in a link */


/* Lesson 14: Route Params - part 2 */


/* Lesson 13: Route Params - part 1 */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Vans from './pages/Vans'
import "./server" 
import VanDetail from "./pages/VanDetail"

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />}/>
        </Routes>
    </BrowserRouter>
  )
}
 */
/* Lesson 12: Challenge: Vans Page - Part 2 */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Vans from './pages/Vans'
import "./server" 

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
        </Routes>
    </BrowserRouter>
  )
} */


/* Lesson 11: Challenge: Vans Page - Part 1 */
/**
 * Challenge: Create the Vans list page, Route, and Link
 * 
 * 1. Create a Vans component in the "pages" directory. For now,
 *    just render <h1>Vans page goes here 🚐</h1>
 * 2. Create a Route for the Vans page on the /vans route
 * 3. Add a Link in the nav bar to the Vans route
 */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import "./server" 


export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
 */

/* Lesson 10: Mirage JS Server */
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import "./server" 


export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
 */

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
/* 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"


export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

 */