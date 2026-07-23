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
import React from "react"
import Toggle from "../Toggle/index"
export default function Menu({children, onOpen}) {
    const menuId = React.useId()

    
    return (
        <Toggle onToggle={onOpen}>
            <div className="menu" role="menu">
                {children}
            </div>
        </Toggle>
    )
}


/* Lesson 42: Composing new components with Toggle 👻*/


/* Lesson 41: Use Toggle with Menu component 👻*/
/* 
import React from "react"
import Toggle from "../Toggle/index"
export default function Menu({children}) {
    const menuId = React.useId()

    
    return (
        <Toggle>
            <div className="menu" role="menu">
                {children}
            </div>
        </Toggle>
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
/* import React from "react"

const MenuContext = React.createContext()

export default function Menu({children}) {
    const [open, setOpen] = React.useState(false)
    const menuId = React.useId()

    function toggle() {
        console.log("toggle")
        setOpen(prevOpen => !prevOpen)
    }
    
    return (
        <MenuContext.Provider value={{open, toggle, menuId}}>
            <div className="menu" role="menu">
                {children}
            </div>

        </MenuContext.Provider>
    )
}

export { MenuContext } */


/* Lesson 31: Menu component final touches 👻*/
/* 
import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()

export default function Menu({children}) {
    const [open, setOpen] = React.useState(false)

    function toggle() {
        console.log("toggle")
        setOpen(prevOpen => !prevOpen)
    }
    
    return (
        <MenuContext.Provider value={{open, toggle}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
 */

/* Lesson 30: Theme switcher final touches 👻*/


/* Lesson 29: State + Context 👻👻👻👻*/


/* Lesson 28: Add context to the Menu component 👻👻*/
/* 
import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()

export default function Menu({children}) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        console.log("toggle")
        setOpen(prevOpen => !prevOpen)
    }
    
    return (
        <MenuContext.Provider value={open}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
 */
/* Lesson 24: React.Children shortcomings 👻👻*/
/** Discovery Challenge:
 * In the MenuButton, MenuDropdown, and MenuItem components, 
 * accept `toggle` and `open` props and just console log 
 * both of them in all 3 components.
 */
/* 
import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({children}) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        console.log("toggle")
        setOpen(prevOpen => !prevOpen)
    }
    
    return (
        <div className="menu">
            {
                React.Children.map(children, (child) => {
                    const component = React.cloneElement(child, {
                        open,
                        toggle
                    })

                    console.log(component)
                    return component;
                })
            }
        </div>
    )
}
 */

/* Lesson 23: The React.Children API 👻👻*/
/**
 * Challenge: figure out what needs to be passed to the
 * children so they'll have access to new props!
 */
/* 
import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({children}) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        console.log("toggle")
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">

            { 
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        open,
                        toggle
                    })
                })
            }
        </div>
    )
} */


/* Lesson 17: Compound Components in React - Part 1 👻*/
/**
 * Note: leave the div className="menu" here and render
 * the children inside that div. Notice this component will become
 * significantly simpler by doing so 💡
 * 
 * Also, notice our state will be broken after we make 
 * these changes - that's okay! We'll fix it soon. In the meantime,
 * leave the useState() call and toggle() definitions alone. Your
 * new version won't be using them, but we'll come back to them
 * later.
 */

/* 
import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu(props) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">

            { props.children}
        </div>
    )
}
 */

/* Lesson 14: Menu Component Intro */

/* 
import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ buttonText = "Menu", items }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            <MenuButton
                buttonText={buttonText}
                onClick={toggle}
            />

            {open && <MenuDropdown items={items} />}
        </div>
    )
} */
