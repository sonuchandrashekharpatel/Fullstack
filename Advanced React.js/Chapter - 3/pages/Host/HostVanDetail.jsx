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
/**
 * Challenge: check out the docs linked in the slide, and see if you
 * can implement the Outlet Context feature it talks about.
 * 
 * Part of this challenge will require you to (finally) build out those
 * nested components. Again, if you don't need CSS practice, you can
 * skip the styling part, and I'll handle that for you.
*/

import React from "react"
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'

export default function HostVanDetail() {
    const [ van, setVan ] = React.useState({})
    const { id } = useParams()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
                    <NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
                </nav>                
                {<Outlet context={van}/>}
            </div>
        </section>
    )
}

/* Lesson 39: Add the Final Navbar! */
/**
 * Challenge: Add the links for the navbar! Check the 
 * Figma design slide to see what the text is.
 * 
 * Make it so the link style changes to more clearly
 * indicate which route we're currently on.
 * 
 * Remember, "Details" leads to /host/vans/:id, not
 * /host/vans/:id/details, so you'll need to employ a
 * trick we recently learned for that to work.
*/
/* 
import React from "react"
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'

export default function HostVanDetail() {
    const [ van, setVan ] = React.useState({})
    const { id } = useParams()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
                    <NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
                </nav>                
                {<Outlet />}
            </div>
        </section>
    )
}
 */

/* Lesson 38: Add /host/vans/:id Nested Routes */
/* 
import React from "react"
import { useParams, Link, Outlet } from 'react-router-dom'

export default function HostVanDetail() {
    const [ van, setVan ] = React.useState({})
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                {<Outlet />}
            </div>
        </section>
    )
}
 */

/* Lesson 37: Back to all vans */
/**
 * Mini challenge: Try to make it so the "Back to all vans"
 * Link takes people BACK one route.
 * 
 * MAJOR HINT: we just talked about how `cd .` and `cd ..`
 * work in a terminal, and mentioned how `.` represents
 * the current route
 * 
 * MAJOR CAVEAT: it's not going to do what you think it'll
 * do, but we'll learn why and see an easy fix 🤭
*/
/* import React from "react"
import { useParams, Link } from 'react-router-dom'

export default function HostVanDetail() {
    const [ van, setVan ] = React.useState({})
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
 */
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

/* 
    description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
    hostId: "123"
    id: "1"
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
    name: "Modest Explorer"
    price: 60
    type: "simple"
*/

/* 
import React from "react"
import { useParams } from 'react-router-dom'

export default function HostVanDetail() {
    const [ van, setVan ] = React.useState({})
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    console.log(van)
    return (
        <div>
            { van ? <div>
            <img src={van.imageUrl} width="150px" />
            <div className="host-van-info">
                <p>{van.type}</p>
                <h2>{van.name}</h2>
                <p>{van.price}</p>
            </div>
            </div> :
            <h2>Loading...</h2>
            }
        </div>
    )
}
 */
/* Lesson 34: 🔀 Optional Side Quest - Building out the Host Vans List and Detail Pages */


/* Lesson 33: Adding Host Vans Routes */
/* 
export default function HostVanDetail() {
    return <h1>Host Van detail goes here...</h1>
} */