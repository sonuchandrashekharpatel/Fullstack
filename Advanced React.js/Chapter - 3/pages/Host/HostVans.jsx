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
    /**
     * Here's the other absolute path Link that needs changing 👇
     */
import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const hostVanEls = vans.map( van => {
        return <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    })

    return (
        <section>
            <h1 className="host-van-title">Your listed vans</h1>
            <div className="host-van-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVanEls}
                        </section>
                    ) : (
                        <h2>Loading ...</h2>
                    )
                }
            </div>
        </section>
    )
}


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
/* import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const hostVanEls = vans.map( van => {
        return <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    })

    return (
        <section>
            <h1 className="host-van-title">Your listed vans</h1>
            <div className="host-van-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVanEls}
                        </section>
                    ) : (
                        <h2>Loading ...</h2>
                    )
                }
            </div>
        </section>
    )
}
 */
/* Lesson 33: Adding Host Vans Routes */


/* export default function HostVan() {
    
    return <h1>Host Van goes here...</h1>
} */