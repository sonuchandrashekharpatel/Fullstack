/* Chapter - 4: Side Effect */

/* Lesson 22: Section 4 Outro */
/* 
Recap:
1. Controlled components (forms)
2. Functional programming in React
3. Fetching data
4. Side Effect
*/

/* Lesson 21: scrollIntoView() iFrame bug fix 🐜 */


/* Lesson 20: useEffect practice: scrollIntoView() 👻👻*/


/* Lesson 19: Sneak peak: refs */
/* 
useRef:
    1. Refs are similar to state, except:
    2. Changing them does not cause a re-render

They are commonaly used for accessing DOM nodes without needing
to assign ids to elements.
*/

/* Lesson 18: Meme Generator - Get random meme 👻*/
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

/* Lesson 17: useEffect cleanup function */


/* Lesson 16: State and Effect practices 👻👻*/
/**
 * Challenge:
 * 1. Create state called `show`, default to `true`
 * 2. When the button is clicked, toggle `show`
 * 3. Only display `<WindowTracker>` if `show` is `true`
 */
/* 
import WindowTracker from "./aside/WindowTracker";
import { useState } from "react"
export default function App() {
    const [show, setShow  ] = useState(true)
    return (
        <main className="container">
            <button onClick={() => {setShow(prevShow => !prevShow)}}>
                Toggle WindowTracker
            </button>

            {show && <WindowTracker />}
        </main>
    )
}
 */
/* Lesson 15: Meme Generator - Fetch Memes 👻*/
/* 
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
 */
/* Lesson 14: useEffect practice! 👻👻*/
/**
 * Challenge part 1:
 * Fetch the data from this url: "https://swapi.dev/api/people/1"
 * and save it in the starWarsData state. Make sure you don't
 * get stuck in an infinite rendering loop!
 */

/**
 * Challenge part 2:
 * Combine the "count" state with the request URL
 * so that pressing the "Get next character" button
 * will get a new character from the Star Wars API.
 * Remember to consider the dependencies array!
 */

/* 
import React from "react"

export default function App() {
    const [starWarsData , setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>        
    )
}
 */

/* Lesson 13: useEffect quiz!👻 */
/* 
1. In what way are React components meant to be "pure functions"
- Given the same props or state, the component will always return
  the same content, or UI
- Rendering and re-rendering a component will never have any kind
  of side effect on an outside system


2. What is a "side effect" in React? What are some examples?
- Any code that affects or interacts with an outside system
- local storage, API, websockets, DOM manipulation


3. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with data, 
  rendering DOM elements


4. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component renders for the first time
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


5. How would you explain what the "dependecies array" is?
- Second parameter to the useEffect function
- A way for React to know whether or not it should re-run the effect function

*/

/* Lesson 12: useEffect empty dependencies array */
/* 
import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])
    
    console.log("Rendered!")
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
 */

/* Lesson 11: useEffect() Dependencies array 👻👻👻*/
/**
 * Challenge: re-write the useEffect
 * It should run any time `count` changes
 * For now, just console.log("Effect function ran")
 */

/* 
import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)
    
    React.useEffect(function () {
        console.log("Effect function ran")
    }, [count])


    // React.useEffect(function() {
    //     console.log("Effect ran")
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data))
    // }, [0])
    
    console.log("Rendered!")
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
*/

/* Lesson 10: useEffect() syntax and default behavior */
/* 
import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState(null)
    
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            // .then(data => setStarWarsData(data))
    })
    
    console.log("Rendered!")
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
 */
/* Lesson 9: Intro to useEffect */
/* 
What are React's primary tasks?
.   Work with the DOM/browser to render UI to the page

.   Manage state for us between render cycles (i.e, state values 
    are "remembered" from one render to next)

.   Keep the UI updated whenever state or props changes occur.

What can't React handle on it's own?
. (Out)side effects!
    . localStorage
    . API/databases interactions
    . Subscription (e.g. websocket connections)
    . Basically anything that React isn't in charge of

*/

/* Lesson 8: Fetching data in React 👻👻*/
/**
 * Challenge:
 * Instead of console logging the data, save it in state
 * and display it to the page. (Just replace the hard-coded
 * object inside the `<pre>` element with the data)
 */

/* 
import React from 'react'

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState(null)

    console.log("Rendered!")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
 */
/* Lesson 7: Functional programming in React */
/* 
Functional Programming: 
Main Principles:
    . Pure functions
    . Immutability
    . Avoiding side Effects
*/

/* Lesson 6: Meme Generator - Planning data fetch 👻*/


/* Lesson 5: Meme Generator - Controlled Components - part 2 */


/* Lesson 4: Meme Generator - Controlled Components - part 1 👻*/


/* Lesson 3: Meme Generator State 👻*/


/* Lesson 2: Meme Generator Starting Point 👻*/
/* 
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
} */