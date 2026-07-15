/* Lesson 17: useEffect cleanup function */
import { useState, useEffect } from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        function watchWindowWidth() {
            console.log("Resized")
            setWindowWidth(window.innerWidth)

        }
        window.addEventListener("resize", watchWindowWidth)

        return function () {
            console.log("cleaning up ...")
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])

    return <h1>Window width: {windowWidth}</h1>
}

/* Lesson 16: State and Effect practices 👻👻*/
/**
 * Challenge:
 * 1. Create state called `windowWidth`, default to 
 *    `window.innerWidth`
 * 2. When the window width changes, update the state
 * 3. Display the window width in the h1 so it updates
 *    every time it changes
 */

/* 
import { useState, useEffect } from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    return <h1>Window width: {windowWidth}</h1>
}
 */

/* 
export default function WindowTracker() {
    return <h1>Window width: {window.innerWidth}</h1>
} */