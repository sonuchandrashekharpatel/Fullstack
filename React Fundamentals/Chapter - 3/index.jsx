/* Chapter - 3: React State */

/* Lesson 59: Update: "useEffect practice: scrollIntoView()" */

/* Lesson 59: Update */

/* 
useRef:
    1. Refs are similar to state, except:
    2. Changing them does not cause a re-render

They are commonaly used for accessing DOM nodes without needing
to assign ids to elements.
*/

/* Lesson 58: Section 3 Outro */

/* 
What we've learned:
1. Event Listeners
2. State
3. Conditional Rendering
4. Forms
5. State management strategies

*/
/* Lesson 57: Format recipe response 👻*/


/* Lesson 56: Challenge: Get recipe from the AI chef 🤖👨‍🍳 👻*/


/* Lesson 55: Challenge quiz: prep to get recipe from the AI chef 🤖👨‍🍳 👻*/


/* Lesson 54: Quick AI Update */


/* Lesson 53: AI code walkthrough */


/* Lesson 52: API Sign Ups */


/* Lesson 51: Chef Claude challenge: refactor to separate components 👻👻*/


/* Lesson 50: Sound pads challenge part 4.3 - updating item in array 👻*/


/* Lesson 49: Sound pads challenge part 4.2 - shared state 👻*/


/* Lesson 48: Sound pads challenge part 4.1 - local state 👻*/


/* Lesson 47: Sound pads challenge, part 3 👻*/


/* Lesson 46: Sound pads challenge, part 2 👻*/
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.
  createRoot(document.getElementById('root'))
  .render(<App />);

/* Lesson 45: Dynamic styles 👻*/

/* 
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.
  createRoot(document.getElementById('root'))
  .render(<App darkMode={true}/>); */

/* Lesson 44: Sound pads challenge, part 1 👻*/


/* Lesson 43: Passing data around React 👻👻*/


/* Lesson 42: Setting state from child components 👻👻*/


/* Lesson 41: Passing state as props 👻*/


/* Lesson 40: Chef Claude: Get recipe placeholder challenge 👻*/


/* Lesson 39: Chef Claude: conditional rendering challenge 2 👻*/


/* Lesson 38: Chef Claude: conditional rendering challenge 1 👻*/


/* Lesson 37: Conditional rendering quiz 👻*/


/* Lesson 36: Conditional rendering practice👻 */


/* Lesson 35: Conditional rendering: ternary */


/* Lesson 34: Conditional rendering practice: && 👻👻*/


/* Lesson 33: Conditional rendering: Why does && work? */


/* Lesson 32: Conditional rendering: && 👻👻*/
/* 
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 31: Chef Claude: conditional rendering intro */


/* Lesson 30: Forms: Object.fromEntries 👻*/

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    console.log(dietaryRestrictions)

    const data = {
      ...Object.fromEntries(formData),
      dietaryRestrictions
    }

    console.log(data)

  }

  return (
    <section>

      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="password">Description:</label>
        <textarea id="description" name="description"></textarea>

        <fieldset>

          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio"  name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <label>
            <input type="radio"  name="employmentStatus" defaultChecked={true} value="Full-time" />
            Full-time
          </label>

        </fieldset>

        <fieldset>

          <legend>Dietary Restriction</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestrictions" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestrictions" defaultChecked={true} value="Gluten-free" />
            Gluten-free
          </label>
          
        </fieldset>
        
        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>

          <option value="" disabled>-- Choose Color --</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
          <option value="Indigo">Indigo</option>
          <option value="Voilet">Voilet</option>

        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 29: Forms: select and option */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")

    const employmentStatus = formData.get("employmentStatus")
    const favColor = formData.get("favColor")
    console.log(favColor)
  }

  return (
    <section>

      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="password">Description:</label>
        <textarea id="description" name="description"></textarea>

        <fieldset>

          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio"  name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <label>
            <input type="radio"  name="employmentStatus" defaultChecked={true} value="Full-time" />
            Full-time
          </label>

        </fieldset>

        <fieldset>

          <legend>Dietary Restriction</legend>
          <label>
            <input type="checkbox" name="dietaryRestriction" value="Kosher" />
            Unemployed
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestriction" value="Vegan" />
            Part-time
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestriction" defaultChecked={true} value="Gluted free" />
            Full-time
          </label>
          
        </fieldset>
        
        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>

          <option value="" disabled>-- Choose Color --</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
          <option value="Indigo">Indigo</option>
          <option value="Voilet">Voilet</option>

        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 28: Forms: checkbox */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    // const favColor = formData.get("favColor")
    console.log(dietaryRestrictions)
  }

  return (
    <section>

      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="password">Description:</label>
        <textarea id="description" name="description"></textarea>

        <fieldset>

          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio"  name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <label>
            <input type="radio"  name="employmentStatus" defaultChecked={true} value="Full-time" />
            Full-time
          </label>

        </fieldset>

        <fieldset>

          <legend>Dietary Restrictions</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Kosher" />
            Unemployed
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestrictions" value="Vegan" />
            Part-time
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestrictions" defaultChecked={true} value="Gluted free" />
            Full-time
          </label>
          
        </fieldset>
        

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

 */

/* Lesson 27: Forms: radio 👻*/

/**
 * Challenge: grab the employment status from the form and log it
 * to the console. (Remember to select one of the radios before submitting)
 * 
 * Note: This won't work the way you might expect quite yet!
 */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  // const element = document.getElementByName("input[type='radio']")

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")

    const employmentStatus = formData.get("employmentStatus")
    console.log(employmentStatus)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="password">Description:</label>
        <textarea id="description" name="description"></textarea>

        <fieldset>

          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio"  name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <label>
            <input type="radio"  name="employmentStatus" defaultChecked={true} value="Full-time" />
            Full-time
          </label>

        </fieldset>

        <fieldset>

          <legend>Dietary Restriction</legend>
          <label>
            <input type="checkbox" name="dietaryRestriction" value="Kosher" />
            Unemployed
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestriction" value="Vegan" />
            Part-time
          </label>
          <label>
            <input type="checkbox"  name="dietaryRestriction" defaultChecked={true} value="Gluted free" />
            Full-time
          </label>
          
        </fieldset>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 26: Forms: textarea & defaultValue */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="password">Description:</label>
        <textarea id="description" name="description"></textarea>
        

        
        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 25: Chef Claude: Refactor form submission 👻*/

/* 
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

 */

/* Lesson 24: Form action 👻 */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const email = formData.get("email")   
    const password = formData.get("password")
    console.log(password) 
    console.log(email)

  }

  return (
    <>
      <h1>Signup Form</h1>

      <form action={signUp} >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email"></input>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>

        <input type="submit" />
      </form>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 23: Form submission */

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function handleSubmit(e) {
    e.preventDefault()
    const formEl = e.currentTarget
    const formData = new FormData(formEl)
    const email = formData.get("email")    
    console.log(email)

    // Gather the info from the form
    // Submit it to a backend
    formEl.reset()

  }

  return (
    <>
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email"></input>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>

        <input type="submit" />
      </form>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 22: Form basics 👻*/

/* 
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <h1>Signup Form</h1>

      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email"></input>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>

        <input type="submit" />
      </form>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 21: React forms intro */

/* 
document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    submitViaAPI({
        firstName,
        lastName
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log("Submitted!")
}
 */

/* Lesson 20: Complex state: updating state objects 👻👻*/


/* Lesson 19: Complex state: Objects 👻👻👻*/


/* Lesson 18: Chef Claude: Refactor array state 👻*/


/* Lesson 17: Complex state: Arrays 👻👻👻*/


/* Lesson 16: Toggling state 👻*/


/* Lesson 15: Ternary practice 👻👻*/

/* 
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 14: Changing state quiz 👻*/

/* 
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
Ans. value and callback functions

2. When would you want to pass the first option (from answer
   above) to the state setter function?

Ans. When we do not want to use old value of the state.

3. When would you want to pass the second option (from answer
   above) to the state setter function?

We use the second option when we have we need to use the previous value to determine the new value of the state.
*/

/* Lesson 13: Updating state with a callback function 👻*/

/* 
Note: if you ever need the old value of state to help you determine
the new value of the state, you should pass a callback function to 
your state setter function instead of using state directly. This 
callback function will recieve the old value of state as it's 
parameter, which you can use to determine your new value of state. 
*/

/* Lesson 12: State practice 👻👻👻👻*/


/* Lesson 11: Changing state 👻*/


/* Lesson 10: useState array destructuring */


/* Lesson 9: useState 👻*/

/* 

import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 8: Props vs. State: State */

/* 
State: State refers to values that are managed by the component, 
similar to variable decalred inside a function. Any time you have 
changing value that should be saved/displayed, you'll likely be 
using state.

"View as a function of state"

1. 'Render':
    React runs your function and displays whatever get returned. 
    The function will only be run again if(1) it recieves new props
    from above, or(2) its internal state values change.

2. setState
    Changing a local, non state variable dosen't cause React to 
    re-render the component. Changing the state with a built-in 
    'setState' function does.

3. view = function(state)
    Thus, when state changes and React re-runs (re-renders) your 
    component, something new gets returned and replaces what used 
    to be on the page.

 */

/* Lesson 7: Props vs. State: Props */

/* 
Props: Props refers to the properties being passed into a component
    in order for it to work correctly, similar to how a function
    recieves parameters: "from above." A component recieving props 
    is not allowed to modify those props. ("i.e. they
    are immutable.")
*/

/* 
function addTwoNumbers(a, b) {
    // DON'T DO THIS
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
    // DON'T DO THIS
    props.logoIcon = "some-other-icon.png"
}

<Navbar logoIcon="spatula.png" />
 */

/* Lesson 6: Chef Claude: Map ingredients list 👻👻👻*/

/* 
import { createRoot } from 'react-dom/client';
import App from "./App"

createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 5: Event Listeners 👻👻*/

/**
 * Challenge: add our new function to the button
 */

/**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
*/

/* 
import ReactDOM from 'react-dom/client';

function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }

  function handleOver() {
    console.log("I was Hovered!")
  }
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver= {handleOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 4: Chef Claude: Project overview */


/* Lesson 3: Chef Claude: form */


/* Lesson 2: Chef Claude: Header 👻*/

/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
*/

/* 
import { createRoot } from 'react-dom/client';
import App from "./App"

createRoot(document.getElementById('root')).render(<App />);
 */

/* Lesson 1: Section 3 Intro */

/* 
So far...
1. Static Websites
2. Reusable components

Static web pages vs Dynamic web apps

1. Read-on;y, no user driven changes to data
2. Example:
    . Blogs
    . News
    . Recipe
    . etc.

Dynamic Web Apps
1. Read-write: user has ability to change data
2. Highly interactive
3. Displays your data
4. Examples:
    . Bank Website
    . Airbnb
    . eCommerce sites
    . etc.

Project: CHEF CLAUDE
*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "React State"
const chapterNum = 3
const lesson = [
  "Section 3 Intro",
  "Chef Claude: Header",
  "Chef Claude: form",
  "Chef Claude: Project overview",
  "Event Listeners",
  "Chef Claude: Map ingredients list",
  "Props vs. State: Props",
  "Props vs. State: State",
  "useState",
  "useState array destructuring",
  "Changing state",
  "State practice",
  "Updating state with a callback function",
  "Changing state quiz",
  "Ternary practice",
  "Toggling state",
  "Complex state: Arrays",
  "Chef Claude: Refactor array state",
  "Complex state: Objects",
  "Complex state: updating state objects",
  "React forms intro",
  "Form basics",
  "Form submission",
  "Form action",
  "Chef Claude: Refactor form submission",
  "Forms: textarea & defaultValue",
  "Forms: radio",
  "Forms: checkbox",
  "Forms: select and option",
  "Forms: Object.fromEntries",
  "Chef Claude: conditional rendering intro",
  "Conditional rendering: &&",
  "Conditional rendering: Why does && work?",
  "Conditional rendering practice: &&",
  "Conditional rendering: ternary",
  "Conditional rendering practice",
  "Conditional rendering quiz",
  "Chef Claude: conditional rendering challenge 1",
  "Chef Claude: conditional rendering challenge 2",
  "Chef Claude: Get recipe placeholder challenge",
  "Passing state as props",
  "Setting state from child components",
  "Passing data around React",
  "Sound pads challenge, part 1",
  "Dynamic styles",
  "Sound pads challenge, part 2",
  "Sound pads challenge, part 3",
  "Sound pads challenge part 4.1 - local state",
  "Sound pads challenge part 4.2 - shared state",
  "Sound pads challenge part 4.3 - updating item in array",
  "Chef Claude challenge: refactor to separate components",
  "API Sign Ups",
  "AI code walkthrough",
  "Quick AI Update",
  "Challenge quiz: prep to get recipe from the AI chef 🤖👨‍🍳",
  "Challenge: Get recipe from the AI chef 🤖👨‍🍳",
  "Format recipe response",
  "Section 3 Outro"
];

lessonGenerator(chapterName, lesson, chapterNum) 
*/