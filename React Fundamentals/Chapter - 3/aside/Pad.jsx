/* Lesson 50: Sound pads challenge part 4.3 - updating item in array 👻*/
/**
 * Challenge:
 * Call setPads to update the state of the one pad that was
 * clicked. Map over the previous pads array, and if the current
 * item you're iterating over has the same id as the `id` passed
 * to this function, then return a new object with the `on` value
 * set to the opposite of what it was before.
 * Otherwise (if the ids don't match), just return the previous
 * item as it was, unchanged.
*/
import {useState } from 'react'
export default function Pad(props) {

    
    const style = { backgroundColor: props.color}
    return (
        <button 
            className={props.on ? "on" : undefined}
            style={style}
            onClick={() => props.toggle(props.id)}
        >
        </button>
    )
}

/* Lesson 49: Sound pads challenge part 4.2 - shared state 👻*/
/* 
import {useState } from 'react'
export default function Pad(props) {

    const [padState, setPadState] = useState(props.on)

    
    function toggle() {
        setPadState(prevState => !prevState)
    }
    
    const style = { backgroundColor: props.color}
    return (
        <button 
            className={padState ? "on" : undefined}
            style={style}
            onClick={props.toggle}
        >
        </button>
    )
}
 */

/* Lesson 48: Sound pads challenge part 4.1 - local state 👻*/
/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */

/* import {useState } from 'react'
export default function Pad(props) {

    const [padState, setPadState] = useState(props.on)

    
    function toggle() {
        setPadState(prevState => !prevState)
    }
    
    const style = { backgroundColor: props.color}
    return (
        <button 
            className={padState ? "on" : undefined}
            style={style}
            onClick={toggle}
        >
        </button>
    )
} */
/* Lesson 47: Sound pads challenge, part 3 👻*/
/* 
export default function Pad(props) {
    const style = { backgroundColor: props.color}

    return (
        <button 
            className={props.on ? "on" : undefined}
            style={style}
        >
        </button>
    )
} */

/* Lesson 46: Sound pads challenge, part 2 👻*/
/* export default function Pad(props) {
    const style = { backgroundColor: props.color}
    return (
        <button 
            style={style}>
        </button>
    )
} */