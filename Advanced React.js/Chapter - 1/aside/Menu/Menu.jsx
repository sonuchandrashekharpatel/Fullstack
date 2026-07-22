/* Lesson 24: React.Children shortcomings 👻👻*/
/** Discovery Challenge:
 * In the MenuButton, MenuDropdown, and MenuItem components, 
 * accept `toggle` and `open` props and just console log 
 * both of them in all 3 components.
 */

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
