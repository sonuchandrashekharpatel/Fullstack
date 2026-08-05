/* Chapter - 3: Routing */

/* Lesson 64: Section wrapup */


/* Lesson 63: Coding the Sad Path - Error handling */


/* Lesson 62: Coding the Sad Path - Loading state (new) */


/* Lesson 61: Quick update to our fetching code */

import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import getVans from "../../api"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        async function loadVans() {
            const data = await getVans()
            setVans(data)
        }
        loadVans()

    }, [])
    
    let vanElements = displayedVan.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={`${van.id}`} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                    <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>    
                {typeFilter && 
                    <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
                }            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}


/* Lesson 60: "Happy Path" vs. "Sad Path" (new) */


/* Lesson 59: 404 Page */


/* Lesson 58: Challenge: conditionally render the back button text */
/* 
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={`${van.id}`} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                    <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>    
                {typeFilter && 
                    <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
                }            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 57: useLocation */

/* import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={`${van.id}`} state={{ search: `?${searchParams.toString()}` }} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                    <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>    
                {typeFilter && 
                    <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
                }            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 56: Link state */
/* 
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={`${van.id}`} state={{search: searchParams.toString()}} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                    <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>    
                {typeFilter && 
                    <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
                }            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 55: Back to all vans */


/* Lesson 54: Fix remaining absolute paths */
/**
 * Mini-challenge: change the absolute path in the Link below
 * to a relative path. There's also one still in the HostVans.jsx
 * file that you should change, too.
*/
/* 
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
    return (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`}  aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
})

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>    
                {typeFilter && 
                    <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
                }            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */
/* Lesson 53: Challenge: Conditional rendering practice */
    /**
     * Challenges:
     * 1. Conditionally render the "Clear filter" button only if
     *    there's a `type` filter currently applied in the search params
     * 
     * 2. On just the 3 filter buttons (not the Clear filter button),
     *    conditionally render the className "selected" if the
     *    typeFilter value equals the value that button sets it to.
     *    (We don't have a variable for that, so it'll be a hard-coded
     *    string).
     * 
     *    Hint: `...${typeFilter === "simple" ? ...}`
     */
/* 
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
    return (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
})

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>Rugged</button>    
                {typeFilter && 
                    <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
                }            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

 */
/* Lesson 52: Merging search params with the setSearchParams function */


/* Lesson 51: Merging search params with Links */


/* Lesson 50: Caveats to setting params */


/* Lesson 49: Challenge: Filter the vans with a setter function */
/**
 * Challenge: change the Links to buttons and use the
 * setSearchParams function to set the search params
 * when the buttons are clicked. Keep all the classNames
 * the same.
 */
/* import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
    return (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
})

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className="van-type simple">Simple</button>    
                <button onClick={() => setSearchParams({type: "luxury"})} className="van-type luxury">Luxury</button>    
                <button onClick={() => setSearchParams({type: "rugged"})} className="van-type rugged">Rugged</button>    
                <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>    
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 48: Using the search params setter function */


/* Lesson 47: Challenge: Filter the vans with Links */
/**
 * Challenge: add links to filter the vans by type. Use a hard-coded
 * `to` string like we just practiced. The types are "simple", 
 * "luxury", and "rugged".
 * 
 * For now, give the Links a className of `van-type simple` (and
 * manually replace "simple" with "luxury" and "rugged" for 
 * the Links that filter by those types.)
 * 
 * Include a Link to clear the filters. Its className should be
 * `van-type clear-filters`
 */
/* import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = React.useState([])
    console.log(vans)

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
    return (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
})

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link to="?type=simple" className="van-type simple">Simple</Link>    
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>    
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>    
                <Link to="." className="van-type ">Clear</Link>    
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */
/* Lesson 46: Using Links to add search params */



/* Lesson 45: Challenge: Filter the vans in VanLife */
/**
 * Challenge: filter the list of vans based on the `typeFilter`
 * we created earlier. For now, just enter "simple", "luxury",
 * or "rugged" into the search param in the URL to check your work.
 */
/* 
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    

    const [vans, setVans] = React.useState([])
    console.log(vans)

    const displayedVan = typeFilter ? vans.filter(van => typeFilter === van.type) : vans
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = displayedVan.map(van => {
    return (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
})

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 44: Filter the array w/ the search param */


/* Lesson 43: Challenge: Set up search params in VanLife */
/**
 * Challenge: access the search params in this component
 * 1. Using the hook from react-router-dom, set a variable
 *    called `searchParams`
 * 2. Save the value of the `type` parameter (from the
 *    `searchParams` object) to a variable called `typeFilter`
 * 3. Log the value of the `typeFilter` to the console
 */
/* 
import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    console.log(typeFilter)


    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = vans.map(van => {
    return <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
})


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */
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
/* 
import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {

    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    let vanElements = vans.map(van => {
    return <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`} aria-label={`View Detail for ${van.name}, priced at $${van.price} per day`} >
            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
})


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 14: Route Params - part 2 */
/* 
import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    console.log(vans)
    let vanElements = vans.map(van => {
    return <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl}/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
})


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */

/* Lesson 13: Route Params - part 1 */


/* Lesson 12: Challenge: Vans Page - Part 2 */
/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */
/* 
import React from "react"


export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    console.log(vans)
    let vanElements = vans.map(van => {
    return <div key={van.id} className="van-tile">

        <img src={van.imageUrl}/>
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
})


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
 */
/* Lesson 11: Challenge: Vans Page - Part 1 */
/* 
export default function Vans() {
    return <h1 >Vans page goes here 🚐</h1>
} */