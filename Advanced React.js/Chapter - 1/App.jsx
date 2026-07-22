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
/* 
What's wrong with React.Children?
. Fragile/ Delicate
. Limited in depth

*/

/* 
Wouldn't it be great if there were a way to 
"teleport" data to the components in the tree that 
need it without passing props? With React's 
context feature, there is!

*/

/* Lesson 23: The React.Children API 👻👻*/
/* 
React.Children
  . Utility that provides method for interacting with a component's 
      direct children elements.

    . React.Children.map()
    . React.Children.forEach()
    
  . Others which you can check out in the React Docs

React.cloneElement()
  . Utility that duplicates a React element and provides a way to 
    inject additional props to that element.

  . When used with React.Children.map(), it can be used to 
    "augment" the original children with new props.
*/

/* Lesson 22: Prop Drilling Problem #2 - Implicit State */
/* 
Implicit State
. React.Children
. Context
*/



/* Lesson 21: Summarize Challenge - Compound Components in React */
/* 
* Write a summary of the steps you took when completing
the previous challenge, and how the parts all work
together:

*/

/* Lesson 20: Compound Components in React - Part 3 👻*/
/**
 * 1. MenuDropdown should render children instead of items
 * 2. MenuItem (new component you need to create) should also
 *    render children. Grab the <div className="menu-item">
 *    from MenuDropdown before deleting it if you want to be
 *    lazy :)
 * 3. Map over the `sports` array inside MenuDropdown in this
 *    file and render a MenuItem for each sport in the array
 */

import Menu from "./aside/Menu/Menu"
import MenuButton from "./aside/Menu/MenuButton"
import MenuDropdown from "./aside/Menu/MenuDropdown"
import MenuItem from "./aside/Menu/MenuItem"

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown >
          
            {
              sports.map(sport => {
                return <MenuItem key={sport}>{sport}</MenuItem>
              })
            }
          
        </MenuDropdown>
      </Menu>
    </>
  )
}


/* Lesson 19: Compound Components in React - Part 2 👻*/
/**
 * Challenge:
 * 1. Convert the MenuButton to accept children and 
 *    render them. (In this case, the children will
 *    just be the button text)
 * 2. Change the MenuButton below to pass "Sports"
 *    in as a child of the component instead of by
 *    using the `buttonText` prop.
 * 
 * NOTE: It's fine that the menu is still broken, I
 * promise we're getting there! 😃
 */

/* 
import Menu from "./aside/Menu/Menu"
import MenuButton from "./aside/Menu/MenuButton"
import MenuDropdown from "./aside/Menu/MenuDropdown"

export default function App() {
  return (
    <>
      <Menu>
      <MenuButton>Sports</MenuButton>
        <MenuDropdown items={["Tennis", "Racquetball", "Pickleball", "Squash"]} />
      </Menu>
    </>
  )
}
 */

/* Lesson 18: Compound Components Quiz 👻*/
/* 
# Compound Components Quiz

1. How would you explain the concept of compound components in React to someone who
   only knows the very basics of React?

Components that work together to accomplish a greater objective than might make
sense to try and accomplish with a single component alone.


2. What are some examples of HTML elements that work together to add functionality
   or styling to each other?

<ul> & <li>, <select> & <option>, <table> & all the other table elements


3. How can compound components help you avoid having to drill props multiple levels
   down?
   
Compound component "flatten" the heirarchy that I would otherwise need to pass
props through. Since I need to provide the children to render, the parent-most
component has direct access to those "grandchild" components, to which it can
pass whatever props it needs to pass directly.

*/

/* Lesson 17: Compound Components in React - Part 1 👻*/
/**
 * Challenge:
 * 1. Convert the Menu component to use props.children 
 *    instead of taking an `items` prop. (We'll update 
 *    the MenuButton and MenuDropdown components later.) 
 *    See note inside the Menu.js file for more info
 * 
 * 2. import MenuButton and MenuDropdown into THIS file
 *    and render them as children of the Menu component. 
 *    Remember to pass the buttonText and items array to 
 *    the components that need those props to function.
 *    (We'll also be updating that soon!)
 * 
 * NOTE: The functionality of the menu will be broken after 
 * these changes, but that's okay! As such, don't worry 
 * about moving the state or toggle function from the Menu; 
 * there's more we need to learn before we can do that.
*/

/* 
import Menu from "./aside/Menu/Menu"
import MenuButton from "./aside/Menu/MenuButton"
import MenuDropdown from "./aside/Menu/MenuDropdown"

export default function App() {
  return (
    <>
      <Menu>
        <MenuButton buttonText="Sports" />
        <MenuDropdown items={["Tennis", "Racquetball", "Pickleball", "Squash"]} />
      </Menu>
    </>
  )
}
 */
/* Lesson 16: Aside: Compound Components Intro */
/* 
HTML Examples
. <form>, <input>
. <ul>, <li>
. <table, <thead>, <tbody>, <td>, etc.
. <select>, <option>
+ Many others

Compound Components
. Use children props
. Have dedicated function/styling
. Make the component structure more transparent
. Give more control to the "user" of the component

*/

/* Lesson 15: Prop Drilling */

/* 
What isnProp drilling?
Prop drilling happens when a component down the component tree 
need access to data in a grandparent (or higher) component, and 
the data is manually passed down to  each child component until 
it finally reaches the component that needs it.

Solutions to prop drilling
1. Do nothing!
. Avoid Hasty Abstractions

2. Compound Components
. "Flattens" the structure
. Easy pass props to more deeply-nested components

3. Context
. Accessible state directly from the components that need it

*/


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

/* 
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
} */

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