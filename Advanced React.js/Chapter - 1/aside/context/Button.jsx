/* Lesson 30: Theme switcher final touches 👻*/


/* Lesson 29: State + Context 👻👻👻👻*/

import React from "react"
import { ThemeContext } from "../../App"

export default function Button() {
    const {theme, toggleTheme} = React.useContext(ThemeContext)
    
    return (
        <button className={`${theme}-theme`} onClick={toggleTheme}>
            Switch Theme
        </button>
    )
}


/* Lesson 28: Add context to the Menu component 👻👻*/


/* Lesson 27: useContext() 👻👻*/
/**
 * Challenge part 2:
 * Do the same with the Button component :) Only worry
 * about changing the className, don't worry about getting
 * the button click to work just yet.
 */
/* 
import React from "react"
import { ThemeContext } from "../../App"

export default function Button() {
    const value = React.useContext(ThemeContext)
    return (
        <button className={`${value.theme}-theme`}>
            Switch Theme
        </button>
    )
}
 */


/* Lesson 26: createContext() & Context Provider 👻*/
/* 
export default function Button() {
    return (
        <button className="dark-theme">
            Switch Theme
        </button>
    )
}
 */