/* Chapter - 3: Routing */

/* Lesson 64: Section wrapup */


/* Lesson 63: Coding the Sad Path - Error handling */


/* Lesson 62: Coding the Sad Path - Loading state (new) */


/* Lesson 61: Quick update to our fetching code */


/* Lesson 60: "Happy Path" vs. "Sad Path" (new) */


/* Lesson 59: 404 Page */


/* Lesson 58: Challenge: conditionally render the back button text */
/**
 * Challenge: When a filter is applied, change the text of
 * the button to say "Back to luxury vans" (e.g.) instead of
 * "Back to all vans".
 * 
 * As usual, there's more than one way to solve this, so just
 * give it your best shot
 */
import React from "react"
import { useParams, Link, useLocation, useSearchParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    const [searchParams, setSearchParams ] = useSearchParams()

    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    
    const search = location.state?.search || ''
    return (
        <div className='van-detail-container'>
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {location.state?.type || "all"} vans</span></Link>
            
            { van ? <div className="van-detail">
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div> : 
            <h2>Loading...</h2>
                
            }
        </div>
    )
}

/* Lesson 57: useLocation */
/**
 * Challenge: modify the Link `to` prop below to send the user
 * back to the previous page with the searchParams included, if
 * they exist. (Remember we may not have anything in that state
 * if there were no filters applied before coming to this
 * van detail page, so make sure to "code defensively" to handle
 * that case.)
 */
/* import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])


    const search = location.state?.search || ''
    return (
        <div className='van-detail-container'>
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            { van ? <div className="van-detail">
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div> : 
            <h2>Loading...</h2>
                
            }
        </div>
    )
}
 */

/* Lesson 56: Link state */


/* Lesson 55: Back to all vans */
/* import React from "react"
import { useParams, Link } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className='van-detail-container'>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            { van ? <div className="van-detail">
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div> : 
            <h2>Loading...</h2>
                
            }
        </div>
    )
}
 */

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
/**
 * Challenge part 2:
 * Using the endpoint set up (with mirage js), fetch the data
 * for the van with the current ID from params.id. Log the data
 * that comes back to the console.
 * 
 * Hint: the endpoint is a GET request to `/api/vans/:vanid`
 */
/* import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className='van-detail-container'>
            { van ? <div className="van-detail">
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div> : 
            <h2>Loading...</h2>
                
            }
        </div>
    )
}
 */

/* Lesson 16: Route Params part 3.1 - useParams() & challenge */
/* import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    console.log(params)
    
    return <h1>Van Detail goes here...</h1>
}
 */

/* Lesson 15: A11y Update - wrapping complex content in a link */


/* Lesson 14: Route Params - part 2 */


/* Lesson 13: Route Params - part 1 */
/* 
export default function VanDetail() {
    return <h1>Van Detail goes here...</h1>
} */