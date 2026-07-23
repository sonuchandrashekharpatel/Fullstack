/* Lesson 52: Render Props Part 4 - children as render props */
import React from "react"

export default function Decision({children}) {
    const [goingOut, setGoingOut] = React.useState(false)

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {children(goingOut)}
        </div>
    )
}


/* Lesson 51: Render Props Part 3 👻👻*/
/* import React from "react"

export default function Decision({render}) {
    const [goingOut, setGoingOut] = React.useState(false)

    
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {render(goingOut)}
        </div>
    )
}
 */
/* Lesson 50: Render Props Part 2 👻*/
/* import React from "react"

export default function Decision({sayName}) {
    const [goingOut, setGoingOut] = React.useState(false)

    sayName(goingOut)
    
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
        </div>
    )
} */