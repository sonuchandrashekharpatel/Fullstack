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


/* Lesson 42: Composing new components with Toggle 👻*/

import React from "react"
import Button from "../Button/Button"
import Toggle from "../Toggle/index"

export default function MenuButton({ children }) {
    const menuId = React.useId()
    
    return (
        <Toggle.Button>
            <Button 
                aria-haspopup="true"
                aria-controls={menuId}
                >{children}
            </Button>
        </Toggle.Button>
    )
}


/* Lesson 41: Use Toggle with Menu component 👻*/
/* 
import React from "react"
import Button from "../Button/Button"

export default function MenuButton({ children }) {
    const menuId = React.useId()
    
    return (
        <Button 
            aria-haspopup="true"
            aria-controls={menuId}
            >{children}</Button>
    )
}
 */

/* Lesson 40: Remove Star component 👻*/


/* Lesson 39: Toggle.On & Toggle.Off 👻👻*/


/* Lesson 38: Toggle.Button 👻*/


/* Lesson 37: Toggle Context 👻*/


/* Lesson 36: Toggle - Planning */


/* Lesson 35: Toggle - setup 👻*/


/* Lesson 34: Headless Toggle component */


/* Lesson 33: Aside - Compound components w/ dot syntax */


/* Lesson 32: A11y in menu component */
/* 
import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {

    const { toggle, open, menuId } = React.useContext(MenuContext)

    return (
        <Button 
            onClick={toggle}
            aria-expanded={open}
            aria-haspopup="true"
            aria-controls={menuId}
        >{children}</Button>
    )
}
 */
/* Lesson 31: Menu component final touches 👻*/
/* 
import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {

    const { toggle } = React.useContext(MenuContext)

    return (
        <Button onClick={toggle}>{children}</Button>
    )
}
 */

/* Lesson 23: The React.Children API 👻👻*/
/* import Button from "../Button/Button"

export default function MenuButton({ children, toggle }) {
    
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}
 */
/* Lesson 19: Compound Components in React - Part 2 👻*/
/* 
import Button from "../Button/Button"

export default function MenuButton({ children, onClick }) {
    console.log(onClick)
    return (
        <Button onClick={onClick}>{children}</Button>
    )
} */


/* Lesson 14: Menu Component Intro */
/* 
import Button from "../Button/Button"

export default function MenuButton({ buttonText, onClick }) {
    return (
        <Button onClick={onClick}>{buttonText}</Button>
    )
} */