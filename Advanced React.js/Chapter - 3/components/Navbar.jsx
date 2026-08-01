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

import { Link } from "react-router-dom"
export default function  Navbar() {
    return (
        <header>
            <Link to="/"className="logo">#VANLIFE</Link>
            <div>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </header>
    )
}

/* Lesson 10: Mirage JS Server */


/* Lesson 9: VanLife project bootstrapping */
/* 
import { Link } from "react-router-dom"
export default function  Navbar() {
    return (
        <header>
            <h1 className="logo">#VANLIFE</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </header>
    )
}
 */