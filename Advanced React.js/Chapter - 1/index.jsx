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
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/* Lesson 49: Render Props Part 1 */
/* document.getElementById("button").addEventListener("click", function() {
  console.log("Clicked")
})

document.getElementById("input").addEventListener("input", function(e) {
  console.log(e.target.value)
})

function addEventListener(eventType, callback) {
  callback()
} */
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


/* Lesson 13: Mega Challenge - Overloaded Avatar Component 👻*/


/* Lesson 12: Challenge - Button w/ Variants 👻*/


/* Lesson 11: Button - fix className issue 👻*/


/* Lesson 10: Button - size prop 👻👻*/
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */
/* Lesson 9: Aside - Destructuring props */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FcGoogle } from 'react-icons/fc';
import Button from './aside/Button';

function handleClick() {
  console.log("Logging in...")
}
function App() {
  return (
    <main>
      <Button variant onClick={handleClick} style={{color: "green"}}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); */

/* Lesson 8: Aside - props spreading */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FcGoogle } from 'react-icons/fc';
import Button from './aside/Button';

function handleClick() {
  console.log("Logging in...")
}
function App() {
  return (
    <main>
      <Button onClick={handleClick} style={{color: "green"}}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 7: Challenge - add onClick event listener 👻*/
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FcGoogle } from 'react-icons/fc';
import Button from './aside/Button';

function handleClick() {
  console.log("Logging in...")
}
function App() {
  return (
    <main>
      <Button onClick={handleClick}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 6: Button - More Complex React Children 👻*/
/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
*/

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaMoneyBill } from 'react-icons/fa';
import Button from './aside/Button';

function App() {
  return (
    <main>
      <Button>
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 5: Challenge - Button w/ Children 👻*/
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './aside/Button';

function App() {
  return (
    <main>
      <Button>Buy now!</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 4: Aside - React Children */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import Marquee from './aside/Maquee';

function App() {
  return(
    <main>
      <Marquee>🧛‍♀️ Welcome to Horrorville 🧛‍♀️</Marquee>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
 */

/* Lesson 3: Aside - children in HTML */


/* Lesson 2: Button - props review challenge 👻*/
/**
 * Challenge: 
 * 
 * Build a Button component in a separate file.
 * (For styling purposes, make sure it renders an HTML <button> element)
 * Your button component should take a `text` prop
// import Button from "./Button"  <-- You need to make this component first
 */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './aside/Button';



function App() {
  return (
    <main>
      <Button text="Click Here"></Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 1: Advanced React Intro */

/* 

What we'll learn:
1. Reusability
2. React Router 6
3. Performance

Reusability:
1. Children
2. Compound components
3. Context
4. Composition
5. Render Props
6. Custom Hooks

B. React Router 6
1. Routing Basics
2. Navigation
3. Layout and Index Routes
4. Nested Routes
5. Route and Search
6. Parameters
7. Protected Routes

C. Performance
1. How React Renders
2. Using Dev Tools
3. Code splitting
4. useMemo()
5. memo()
6. useCallback()


*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Reusability"
const chapterNum = 1
const lesson = [
    "Advanced React Intro",
    "Button - props review challenge",
    "Aside - children in HTML",
    "Aside - React Children",
    "Challenge - Button w/ Children",
    "Button - More Complex React Children",
    "Challenge - add onClick event listener",
    "Aside - props spreading",
    "Aside - Destructuring props",
    "Button - size prop",
    "Button - fix className issue",
    "Challenge - Button w/ Variants",
    "Mega Challenge - Overloaded Avatar Component",
    "Menu Component Intro",
    "Prop Drilling",
    "Aside: Compound Components Intro",
    "Compound Components in React - Part 1",
    "Compound Components Quiz",
    "Compound Components in React - Part 2",
    "Compound Components in React - Part 3",
    "Summarize Challenge - Compound Components in React",
    "Prop Drilling Problem #2 - Implicit State",
    "The React.Children API",
    "React.Children shortcomings",
    "Context Intro",
    "createContext() & Context Provider",
    "useContext()",
    "Add context to the Menu component",
    "State + Context",
    "Theme switcher final touches",
    "Menu component final touches",
    "A11y in menu component",
    "Aside - Compound components w/ dot syntax",
    "Headless Toggle component",
    "Toggle - setup",
    "Toggle - Planning",
    "Toggle Context",
    "Toggle.Button",
    "Toggle.On & Toggle.Off",
    "Remove Star component",
    "Use Toggle with Menu component",
    "Composing new components with Toggle",
    "onToggle event listener",
    "Menu onClose event",
    "Intro to Refs",
    "Refs and DOM manipulation",
    "Fix onToggle bug using refs",
    "Fix missing onToggle bug using a noop function",
    "Render Props Part 1",
    "Render Props Part 2",
    "Render Props Part 3",
    "Render Props Part 4 - children as render props",
    "Toggle.Display intro",
    "Toggle.Display",
    "Custom Hooks Intro",
    "Custom Hooks - useEffectOnUpdate",
    "Custom Hooks - useToggle",
    "Custom Hooks - useToggle part 2",
    "Custom Hooks - useToggle part 3",
    "Custom Hooks - useToggle part 4",
    "Custom Hooks - useToggle part 5",
    "Custom Hooks - useToggle part 6",
    "Custom Hooks - useToggle part 7",
    "Custom Hooks - useToggle part 8",
    "Custom Hooks - useToggle part 9",
    "Reusability section recap"
]
lessonGenerator(chapterName, lesson, chapterNum) 
 */
