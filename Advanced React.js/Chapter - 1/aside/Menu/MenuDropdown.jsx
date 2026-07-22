/* Lesson 24: React.Children shortcomings 👻👻*/
/** Discovery Challenge:
 * Make it so the children of MenuDropdown also have
 * access to toggle and open.
 */
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