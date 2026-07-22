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


/* Lesson 41: Use Toggle with Menu component 👻*/


/* Lesson 40: Remove Star component 👻*/


/* Lesson 39: Toggle.On & Toggle.Off 👻👻*/


/* Lesson 38: Toggle.Button 👻*/


/* Lesson 37: Toggle Context 👻*/


/* Lesson 36: Toggle - Planning */


/* Lesson 35: Toggle - setup 👻*/


/* Lesson 34: Headless Toggle component */


/* Lesson 33: Aside - Compound components w/ dot syntax */


/* Lesson 32: A11y in menu component */
import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {

    const { open, menuId } = React.useContext(MenuContext)

    return (
        <>
            { open && 
                <div className="menu-dropdown" id={menuId}>{children}</div>
            }
        </>
    )
}


/* Lesson 31: Menu component final touches 👻*/

/* 
import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {

    const { open } = React.useContext(MenuContext)

    return (
        <>
        { open && 
            <div className="menu-dropdown">{children}</div>
        }
        </>
    )
}
 */

/* Lesson 30: Theme switcher final touches 👻*/


/* Lesson 29: State + Context 👻👻👻👻*/


/* Lesson 28: Add context to the Menu component 👻👻*/
/**
 * Challenge part 2:
 * Pull in the value from context and update the conditional
 * rendering code below to use that value instead of `open`,
 * which used to be passed down via props.
*/
/* 
import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children, open, toggle }) {

    const value = React.useContext(MenuContext)

    return (
        <>
        { value && 
            <div className="menu-dropdown">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {
                            open,
                            toggle
                        })
                    })
                }
            </div>
        }
        </>
    )
}
 */

/* Lesson 24: React.Children shortcomings 👻👻*/
/** Discovery Challenge:
 * Make it so the children of MenuDropdown also have
 * access to toggle and open.
 */

/* 
import React from "react"

export default function MenuDropdown({ children, open, toggle }) {
    return (
        <>
        { open && 
            <div className="menu-dropdown">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {
                            open,
                            toggle
                        })
                    })
                }
            </div>
        }
        </>
    )
}
 */
/* Lesson 23: The React.Children API 👻👻*/
/* 
export default function MenuDropdown({ children, open }) {
    return (
        <div className="menu-dropdown">
            {open && children}
        </div>
    )
} */

/* Lesson 20: Compound Components in React - Part 3 👻*/
/* 
export default function MenuDropdown({ children }) {
    return (
        <div className="menu-dropdown">
            {children}
        </div>
    )
}
 */
/* Lesson 14: Menu Component Intro */
/* 
export default function MenuDropdown({ items }) {
    return (
        <div className="menu-dropdown">
            {items.map(
                item => (
                    <div
                        className="menu-item"
                        key={item}
                    >
                        {item}
                    </div>
                )
            )}
        </div>
    )
} */