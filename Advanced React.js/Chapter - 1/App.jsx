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


/* Lesson 31: Menu component final touches 👻*/


/* Lesson 30: Theme switcher final touches 👻*/


/* Lesson 29: State + Context 👻👻👻👻*/


/* Lesson 28: Add context to the Menu component 👻👻*/


/* Lesson 27: useContext() 👻👻*/


/* Lesson 26: createContext() & Context Provider 👻*/


/* Lesson 25: Context Intro */


/* Lesson 24: React.Children shortcomings 👻👻*/


/* Lesson 23: The React.Children API 👻👻*/


/* Lesson 22: Prop Drilling Problem #2 - Implicit State */


/* Lesson 21: Summarize Challenge - Compound Components in React */


/* Lesson 20: Compound Components in React - Part 3 👻*/


/* Lesson 19: Compound Components in React - Part 2 👻*/


/* Lesson 18: Compound Components Quiz 👻*/


/* Lesson 17: Compound Components in React - Part 1 👻*/


/* Lesson 16: Aside: Compound Components Intro */


/* Lesson 15: Prop Drilling */


/* Lesson 14: Menu Component Intro */
/* 
What the problem?

Complications:
1. Inflexible / tightly coupled
2. Opaque
3. Not DRY
4. "Prop drilling"


What we'll Learn
1. Compound Components
2. React.Children API
3. Context
4. Implicit State

+ Many challenges!

*/
import Menu from "./aside/Menu/Menu"

export default function App() {
  return (
    <>
      <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </>
  )
}

/* Lesson 13: Mega Challenge - Overloaded Avatar Component 👻*/
/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
*/

/* 
import Avatar from "./aside/Avatar"
export default function App() {

  return (
  <>
    <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
    <br />
    <Avatar>BZ</Avatar>
    <br />
    <Avatar />
  </>

  )
}
 */

/* Lesson 12: Challenge - Button w/ Variants 👻*/
/**
 * Challenge: 
 * 
 * Accept a `variant` prop and style the Button component
 * accordingly. The values can be `success`, `warning`, or `danger`. 
 * Check the Figma design for the specific colors to be used for each
 * variant.
 
*/
/* 
import { FcGoogle } from 'react-icons/fc';
import Button from './aside/Button';

export default function App() {

  function handleClick() {
    console.log("Logging in...")
  }

  return (
  <main>
    <Button size="sm" variant="danger" onClick={handleClick} className="green">
      <FcGoogle />
      Log in with Google
    </Button>
  </main>
  )
}
 */
/* Lesson 11: Button - fix className issue 👻*/


/* Lesson 10: Button - size prop 👻👻*/
/**
 * Challenge: accept the `size` prop and set the `className` of the
 * <button> to:
 * 
 * "button-small" if `size` is "sm"
 * "button-large" if `size` is "lg"
 * 
 * Note: don't try to manually add a `className` to the Button
 * instance in index.js yet. (DO add `className` to this file
 * as part of the challenge, though.)
 */
/* 
import { FcGoogle } from 'react-icons/fc';
import Button from './aside/Button';

export default function App() {

  function handleClick() {
    console.log("Logging in...")
  }

  return (
  <main>
    <Button size="sm" onClick={handleClick} className="green">
      <FcGoogle />
      Log in with Google
    </Button>
  </main>
  )
} */