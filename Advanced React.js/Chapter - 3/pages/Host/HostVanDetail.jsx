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
/**
 * Challenge (not optional!): build the shared UI portion of the
 * Host Van Detail page. This is
 * 
 * Optional portion: also style it to look like the design.
 * 
 * For now, get the data from a request to `/api/host/vans/:id`
 * and display the van image, name, price, type
 */
import React from "react"
import { useParams } from 'react-router-dom'

export default function HostVanDetail() {
    const [ van, setVan ] = React.useState([])
    const { id } = useParams()

    console.log(id)
    React.useEffect(() => {
        fetch(`/api/hostvans/${id}`)
            .then(res => res.json())
            .then(data => console.log(data.vans))
    }, [])

    
    /* 
    
        description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        hostId: "123"
        id: "1"
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
        name: "Modest Explorer"
        price: 60
        type: "simple"
    */

    return (
        <div>
            <img src={van.imageUrl} />
            <div className="host-van-info">
                <p>{van.type}</p>
                <h2>{van.name}</h2>
                <p>{van.price}</p>
            </div>
        </div>
    )
}

/* Lesson 34: 🔀 Optional Side Quest - Building out the Host Vans List and Detail Pages */


/* Lesson 33: Adding Host Vans Routes */
/* 
export default function HostVanDetail() {
    return <h1>Host Van detail goes here...</h1>
} */