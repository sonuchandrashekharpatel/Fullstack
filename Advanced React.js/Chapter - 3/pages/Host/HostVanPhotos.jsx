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
import { useOutletContext } from "react-router"

export default function HostVanPhotos() {
    const van = useOutletContext()
    return (
        <img src={van.imageUrl} className="host-van-detail-image" />
    )
}

/* Lesson 39: Add the Final Navbar! */


/* Lesson 38: Add /host/vans/:id Nested Routes */


/* export default function HostVanPhotos() {
    return (
        <h2>Photos view here</h2>
    )
} */