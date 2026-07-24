/* Chapter - 1: Reusability */

/* Lesson 66: Reusability section recap */


/* Lesson 65: Custom Hooks - useToggle part 9 */


/* Lesson 64: Custom Hooks - useToggle part 8 👻*/


/* Lesson 63: Custom Hooks - useToggle part 7 👻*/


/* Lesson 62: Custom Hooks - useToggle part 6 👻*/


/* Lesson 61: Custom Hooks - useToggle part 5 👻*/


/* Lesson 60: Custom Hooks - useToggle part 4 👻*/


/* Lesson 59: Custom Hooks - useToggle part 3 👻*/
/**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use 
 * the useToggle hook to conditionally render the stars. 
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../../hooks/useToggle"

export default function Star({onChange}) {
  const [on, toggle] = useToggle()

  return (
    <>
    { on ? <BsStarFill onClick={toggle} className="star filled"/>:
     <BsStar onClick={toggle} className="star "/>
    }
    </>
  )
}


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
/* 
import { BsStar, BsStarFill } from "react-icons/bs"
import Toggle  from "../Toggle/index"

export default function Star() {
    function toggle() {
        console.log("toggled")
    }
    
    return (
    <Toggle onToggle={toggle}>
        <Toggle.Button>
          <Toggle.On><BsStarFill className="star filled"/></Toggle.On>
          <Toggle.Off><BsStar className="star "/></Toggle.Off>
        </Toggle.Button>
      </Toggle>
    )
}
 */

    /**
     * Challenge:
     * 1. Receive a prop called onChange and pass it to the
     *    Toggle's onToggle function
     * 2. Add an onChange prop to the Star component instance
     *    in index.js that just runs a console.log() for now.
     */
/* 
import { BsStar, BsStarFill } from "react-icons/bs"
import Toggle  from "../Toggle/index"

export default function Star({onChange}) {

    
    return (
    <Toggle onToggle={onChange}>
        <Toggle.Button>
          <Toggle.On><BsStarFill className="star filled"/></Toggle.On>
          <Toggle.Off><BsStar className="star "/></Toggle.Off>
        </Toggle.Button>
      </Toggle>
    )
}
 */
/* Lesson 42: Composing new components with Toggle 👻*/
/* 
import { BsStar, BsStarFill } from "react-icons/bs"
import Toggle  from "../Toggle/index"

export default function Star() {
    return (
    <Toggle>
        <Toggle.Button>
          <Toggle.On><BsStarFill className="star filled"/></Toggle.On>
          <Toggle.Off><BsStar className="star "/></Toggle.Off>
        </Toggle.Button>
      </Toggle>
    )
}
 */
/* Lesson 41: Use Toggle with Menu component 👻*/


/* Lesson 40: Remove Star component 👻*/


/* Lesson 39: Toggle.On & Toggle.Off 👻👻*/


/* Lesson 38: Toggle.Button 👻*/


/* Lesson 37: Toggle Context 👻*/


/* Lesson 36: Toggle - Planning */


/* Lesson 35: Toggle - setup 👻*/

/* 
import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star() {
    const [starred, setStarred] = React.useState(false)
    
    function toggle() {
        setStarred(prev => !prev)
        console.log("Star toggled")
    }
    
    return (
        starred ? 
        <BsStarFill className="star filled" onClick={toggle} /> :
        <BsStar className="star " onClick={toggle} />
    )
}
 */