/* Lesson 66: Reusability section recap */


/* Lesson 65: Custom Hooks - useToggle part 9 */

import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle({
    initialValue = false,
     onToggle = () => {} 
}) {
    const [on, setOn] = React.useState(initialValue)

    useEffectOnUpdate(onToggle, [on])
    
    function toggle(initialValue) {
        setOn(prevState => !prevState)
    }
    return [on ,toggle]
}


/* Lesson 64: Custom Hooks - useToggle part 8 👻*/
/**
 * Challenge:
 * 1. Pass a second parameter called `onToggle` to useToggle.
 *    Give it a "noop" function `() => {}` as a default.
 * 2. Think: how can we call this `onToggle` function any time
 *    `on` changes, but NOT on the first render? 🤔
 * 3. Modify Menu.js to pass in the correct 2nd parameter.
 */
/* 
import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle(initialValue = false, onToggle = () => {} ) {
    const [on, setOn] = React.useState(initialValue)

    useEffectOnUpdate(onToggle, [on])

    function toggle(initialValue) {
        setOn(prevState => !prevState)
    }
    return [on ,toggle]
}
 */
/* Lesson 63: Custom Hooks - useToggle part 7 👻*/
/**
 * Challenge:
 * 1. Pass a parameter called `initialValue` to our custom hook.
 *    Have its default be `false` in case that parameter isn't
 *    provided when useToggle() is called.
 * 2. Initialize state with the `initialValue` parameter
 */

import React from "react"
/* 
export default function useToggle(initialValue = false) {
    const [on, setOn] = React.useState(initialValue)

    function toggle(initialValue) {
        setOn(prevState => !prevState)
    }
    return [on ,toggle]
}
 */

/* Lesson 62: Custom Hooks - useToggle part 6 👻*/


/* Lesson 61: Custom Hooks - useToggle part 5 👻*/


/* Lesson 60: Custom Hooks - useToggle part 4 👻*/


/* Lesson 59: Custom Hooks - useToggle part 3 👻*/


/* Lesson 58: Custom Hooks - useToggle part 2 👻*/
/**
 * Create the beginnings of the useToggle custom hook!
 * 
 * 1. Create a function called useToggle(). Skip the
 *    parameters for now. (We'll come back to that)
 * 2. Bring the useState and toggle function from
 *    our Toggle component into this hook
 * 3. Add the missing import (React)
 * 4. RETURN from this function an array with `on` as
 *    the first index and `toggle` as the second
 *    index.
 * 5. Add the missing import in Toggle.js
 */

/* import React from "react"

export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevState => !prevState)
    }
    return [on ,toggle]
}
 */
/* Lesson 57: Custom Hooks - useToggle 👻*/
/**
 * Create the beginnings of the useToggle custom hook!
 * 
 * 1. Create a function called useToggle(). Skip the
 *    parameters for now. (We'll come back to that)
 * 2. Bring the useState and toggle function from
 *    our Toggle component into this hook
 * 3. TBA
*/
/* 
import React from "react"

export default function useToggle(effectFunction, deps) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevState => !prevState)
    }
}
 */