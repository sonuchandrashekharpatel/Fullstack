/* Chapter - 1: Reusability */

/* Lesson 66: Reusability section recap */


/* Lesson 65: Custom Hooks - useToggle part 9 */


/* Lesson 64: Custom Hooks - useToggle part 8 👻*/


/* Lesson 63: Custom Hooks - useToggle part 7 👻*/


/* Lesson 62: Custom Hooks - useToggle part 6 👻*/


/* Lesson 61: Custom Hooks - useToggle part 5 👻*/


/* Lesson 60: Custom Hooks - useToggle part 4 👻*/


/* Lesson 59: Custom Hooks - useToggle part 3 👻*/


/* Lesson 58: Custom Hooks - useToggle part 2 👻*/


/* Lesson 57: Custom Hooks - useToggle 👻*/


/* Lesson 56: Custom Hooks - useEffectOnUpdate 👻👻👻👻👻*/


/* Lesson 55: Custom Hooks Intro */


/* Lesson 54: Toggle.Display 👻👻*/


/* Lesson 53: Toggle.Display intro */


/* Lesson 52: Render Props Part 4 - children as render props */


/* Lesson 51: Render Props Part 3 👻👻*/


/* Lesson 50: Render Props Part 2 👻*/


/* Lesson 49: Render Props Part 1 */


/* Lesson 48: Fix missing onToggle bug using a noop function */


/* Lesson 47: Fix onToggle bug using refs 👻*/


/* Lesson 46: Refs and DOM manipulation */


/* Lesson 45: Intro to Refs */


/* Lesson 44: Menu onClose event 👻*/


/* Lesson 43: onToggle event listener 👻👻*/
/**
 * Challenge:
 * 1. Accept `onToggle` as a prop for the Toggle component
 * 2. Using a useEffect, run the function passed to the
 *    onToggle prop anytime the `on` state changes.
 * 3. In Star.js, pass an onToggle prop to the Toggle
 *    component whose value is a function. That function
 *    can just run a console.log for now.
 * Note: There's more we need to do here, you may notice a
 * small bug we'll need to address later.
*/

/**
 * Challenge:
 * 1. Accept `onToggle` as a prop for the Toggle component
 * 2. Using a useEffect, run the function passed to the
 *    onToggle prop anytime the `on` state changes.
 * 3. In Star.js, pass an onToggle prop to the Toggle
 *    component whose value is a function. That function
 *    can just run a console.log for now.
 * Note: There's more we need to do here, you may notice a
 * small bug we'll need to address later.
 */

import React from "react"
const ToggleContext = React.createContext()
export default function Toggle({children, onToggle = () => {}}) {
    const [on, setOn] = React.useState(false)

    React.useEffect(() => {
        onToggle()
    }, [on])

    function toggle() {
        setOn(prevState => !prevState)
    }

    return <ToggleContext.Provider value={{on, toggle}}>{children}</ToggleContext.Provider>
}

export { ToggleContext }


/* Lesson 42: Composing new components with Toggle 👻*/


/* Lesson 41: Use Toggle with Menu component 👻*/
/* 
import React from "react"
const ToggleContext = React.createContext()
export default function Toggle({children}) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevState => !prevState)
        console.log("toggled")
    }

    return <ToggleContext.Provider value={{on, toggle}}>{children}</ToggleContext.Provider>
}

export { ToggleContext }
 */

/* Lesson 40: Remove Star component 👻*/
/* 
import React from "react"
const ToggleContext = React.createContext()
export default function Toggle({children}) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevState => !prevState)
    }

    return <ToggleContext.Provider value={{on, toggle}}>{children}</ToggleContext.Provider>
}

export { ToggleContext }
 */
/* Lesson 39: Toggle.On & Toggle.Off 👻👻*/


/* Lesson 38: Toggle.Button 👻*/


/* Lesson 37: Toggle Context 👻*/
/**
 * Challenge: set up context!
 * Reminder of the steps:
 * 1. Create a new context (outside the component, but in this file)
 * 2. Export that context instance from the file so we 
 *    can use it eleswhere
 * 3. Use the Context Provider to wrap the `children` returned
 *    from this Toggle component
 * 4. Pass the state values to the context value prop for access
 *    from child components later on
 */
/* import React from "react"
const ToggleContext = React.createContext()
export default function Toggle({children}) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevState => !prevState)
        console.log("Toggled")
    }

    return <ToggleContext.Provider value={{on, toggle}}>{children}</ToggleContext.Provider>
}

export { ToggleContext } */


/* Lesson 36: Toggle - Planning */


/* Lesson 35: Toggle - setup 👻*/
/**
 * Challenge:
 * 
 * 1. Create a Toggle component that initializes its own boolean state.
 * 2. Create a function called `toggle` in that component that flips the 
 *    boolean when the function runs.
 * NOTE: Don't worry about rendering anything yet
*/

/* 
import React from "react"
export default function Toggle({children}) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevState => !prevState)
    }

    return children
}
 */

/* Lesson 34: Headless Toggle component */
/* 
import React from "react"

const ToggleContext = React.createContext()

export default function Toggle({ children }) {
    const [on, setOn] = React.useState(false)
    
    function toggle() {
        setOn(prevOn => !prevOn)  
    }
    
    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export {ToggleContext} */