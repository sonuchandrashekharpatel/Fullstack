/* Lesson 30: Theme switcher final touches 👻*/


/* Lesson 29: State + Context 👻👻👻👻*/


/* Lesson 28: Add context to the Menu component 👻👻*/



/* Lesson 27: useContext() 👻👻*/
/**
 * Challenge:
 * Part 1: Update our CSS className to use the context 
 * value instead of being hard-coded as "dark". Also,
 * change the text "Dark" in the h1 to correspond with
 * the `value` from context.
*/

import React from 'react'
import { ThemeContext } from '../../App'

export default function Header() {
    const value = React.useContext(ThemeContext)

    
    return (
        <header className={`${value.theme}-theme`}>
            <h1>{value.theme === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}

/* Lesson 26: createContext() & Context Provider 👻*/
/* 
export default function Header() {
    return (
        <header className="dark-theme">
            <h1>Dark Theme</h1>
        </header>
    )
}
 */