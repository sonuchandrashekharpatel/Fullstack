


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
/**
 * Mini-quiz:
 * What are the 2 parameters in React.useEffect?
 *  1. Callback function
 *  2. dependency array
*/
/*  
* Mini-challenge:
 * Update our custom hook function to accept
 * the same parameters we talked about above

*/
/**
 * Mini-challenge:
 * Update the code to use our hook's parameters
 * instead of the values from the Toggle component
*/
/**
 * Challenge: use our new, shiny custom hook
 * to set up the effect again. You'll know it's
 * working when the console log runs after clicking
 * the box, but not on the initial render.
 */

/**
 * Challenge: use our new, shiny custom hook
 * to set up the effect again. You'll know it's
 * working when the console log runs after clicking
 * the box, but not on the initial render.
*/

import React from "react"

export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(true)

    React.useEffect(() => {
        if(firstRender.current) {
            firstRender.current =  false
        } else {
            effectFunction()
        }
    }, deps)
}
