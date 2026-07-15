/* Chapter - 3: React State */

/* Lesson 59: Update: "useEffect practice: scrollIntoView()" */


/* Lesson 59: Update: "Sneak peak: ref" */


/* Lesson 58: Section 3 Outro */


/* Lesson 57: Format recipe response 👻*/


/* Lesson 56: Challenge: Get recipe from the AI chef 🤖👨‍🍳 👻*/


/* Lesson 55: Challenge quiz: prep to get recipe from the AI chef 🤖👨‍🍳 👻*/


/* Lesson 54: Quick AI Update */


/* Lesson 53: AI code walkthrough */


/* Lesson 52: API Sign Ups */


/* Lesson 51: Chef Claude challenge: refactor to separate components 👻👻*/
import Header from "./components/Header"
import Main from './components/Main'

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

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

/* 
import padsData from "./aside/pads.js"
import Pad from './aside/Pad.jsx'
import { useState } from "react"

export default function App() {

    const [pads, setPads] = useState(padsData)

    function toggle(id) {
        setPads( prevPads =>  prevPads.map(pad =>  {
                if(pad.id === id) {
                    return {
                        ...pad,
                        on: !pad.on
                    }
                } 
                return pad
            })
        )
    }

    const buttonElements = pads.map(pad => {
        return <Pad
            key={pad.id} 
            id={pad.id}
            color={pad.color} 
            on={pad.on}
            toggle = {toggle}
        >
        </Pad>
    })


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
 */

/* Lesson 49: Sound pads challenge part 4.2 - shared state 👻*/
/**
 * Challenge: Create a toggle() function that logs
 * "clicked!" to the console
 * 
 * Pass that function down to each of the Pad components
 * and set it up so when they get clicked, the function runs
 */

/* 
import padsData from "./aside/pads.js"
import Pad from './aside/Pad.jsx'
import { useState } from "react"

export default function App() {

    const [pads, setPads] = useState(padsData)

    function toggle() {
        console.log("clicked!")
    }
    const buttonElements = pads.map(pad => {
        return <Pad
            key={pad.id} 
            color={pad.color} 
            on={pad.on}
            toggle = {toggle}
        >
        </Pad>
    })


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

 */

/* Lesson 48: Sound pads challenge part 4.1 - local state 👻*/
/* 
import padsData from "./aside/pads.js"
import Pad from './aside/Pad.jsx'
import { useState } from "react"

export default function App() {

    const [pads, setPads] = useState(padsData)

    const buttonElements = pads.map(pad => {
        return <Pad key={pad.id} color={pad.color} on={pad.on}></Pad>
    })

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
 */

/* Lesson 47: Sound pads challenge, part 3 👻*/
/* 
import padsData from "./aside/pads.js"
import Pad from './aside/Pad.jsx'
import { useState } from "react"

export default function App() {

    const [pads, setPads] = useState(padsData)

    const buttonElements = pads.map(pad => {
        return <Pad key={pad.id} color={pad.color} on={pad.on}></Pad>
    })

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
 */

/* Lesson 46: Sound pads challenge, part 2 👻*/
/* 
import padsData from "./aside/pads.js"
import Pad from './aside/Pad.jsx'
import { useState } from "react"

export default function App() {

    const [pads, setPads] = useState(padsData)

    const buttonElements = pads.map(pad => {
        return <Pad key={pad.id} color={pad.color}  ></Pad>
    })

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
 */

/* Lesson 45: Dynamic styles 👻*/
/* 
import padsData from "./aside/pads.js"
import { useState } from "react"

export default function App({darkMode}) {

    const [pads, setPads] = useState(padsData)

    const style = darkMode ? { backgroundColor: "#222222"} : { backgroundColor: "#cccccc" }

    const buttonElements = pads.map(pad => {
        return <button key={pad.id} style={style}></button>
    })

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
 */

/* Lesson 44: Sound pads challenge, part 1 👻*/
/**
 * Challenge part 1:
 * 1. Initialize state with the default value of the
 *    array pulled in from pads.js
 * 2. Map over that state array and display each one
 *    as a <button> (CSS is already written for you)
 *    (Don't worry about using the "on" or "color" 
 *    properties yet)
 */

/* 
import padsData from "./aside/pads.js"
import { useState } from "react"

export default function App() {

    const [pads, setPads] = useState(padsData)

    const buttonElements = pads.map(pad => {
        return <button key={pad.id}></button>
    })

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
 */

/* Lesson 43: Passing data around React 👻👻*/
/* 
import React from "react"
import Header from "./aside/Header"
import Body from "./aside/Body"

export default function App() {
    const [userName, setUserName] = React.useState("Joe")
    return (
        <main>
            <Header userName = {userName} />
            <Body userName = {userName} />
        </main>
    )
}
 */

/* Lesson 42: Setting state from child components 👻👻*/
/*
import React from "react"
import avatar from "./images/user.png"

import Star from "./aside/Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star 
                        isFilled={contact.isFavorite}
                        handleClick={toggleFavorite}
                    />

                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

 */

/* Lesson 41: Passing state as props 👻*/
/**
 * Challenge:
 * - Create a new component called `Count`
 *    - It should receive a prop called `number`, whose value
 *      is the current value of our count
 *    - Have the component render the h2.count element below
 *      and display the incoming prop `number`
 * - Replace the h2.count below with an instance of
 *   the new Count component, passing the correct value
 *   to its `number` prop.
 * - After doing this, everything should be working the
 *   same as before.
*/

/* 
import React from "react"
import Count from "./aside/Count"

export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    

    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count number = {count}/>
                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}
 */

/* Lesson 40: Chef Claude: Get recipe placeholder challenge 👻*/


/* Lesson 39: Chef Claude: conditional rendering challenge 2 👻*/


/* Lesson 38: Chef Claude: conditional rendering challenge 1 👻*/
/* 
import Header from "./components/Header"
import Main from './components/Main'

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}  */

/* Lesson 37: Conditional rendering quiz 👻*/
/* 
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on some kind of condition.


2. When would you use &&?
When you want to either display something or NOT display something.


3. When would you use a ternary?
When you need to decide which of 2 things to display


4. What if you need to decide between > 2 options on
   what to display?
if...else if...else conditional or maybe a `switch` statement.
 */

/* Lesson 36: Conditional rendering practice👻 */
/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there's exactly 1 unread message, it should read "You have 
 *   1 unread message (singular)"
 * - If there are > 1 unread messages, display "You have <n> unread
 *   messages" (plural)
*/

/* 
import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])

    const displayMessage = messages.length === 0 ? "You're all caught up!":
        messages.length === 1 ? "You have 1 unread message" : 
        `You have ${messages.length} unread messages`

    return (
        <div>
            <h1>{displayMessage}</h1>
        </div>
    )
}
 */

/* Lesson 34: Conditional rendering practice: && 👻👻*/
/**
 * Challenge:
 * Only display the <h1> below if there are unread messages
*/

/*
import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    
    
    return (
        <div>
            { unreadMessages.length > 0 &&  <h1>You have {unreadMessages.length} unread messages!</h1>}
            { unreadMessages.length === 0 &&  <p>You have no unread messages</p>}
        </div>
    )
}
*/

/* Lesson 32: Conditional rendering: && 👻👻*/
/* 
import Joke from './aside/Joke.jsx'
import jokesData from './aside/jokesData.js'

export default function App() {

    const jokeElements = jokesData.map(joke => {
        return <Joke 
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })

    console.log(jokeElements)
    return(
        <>
            {jokeElements}
        </>
    )
}
 */

/* Lesson 25: Chef Claude: Refactor form submission 👻*/
/* 
import Header from "./components/Header"
import Main from './components/Main'

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
} 
 */

/* Lesson 20: Complex state: updating state objects 👻👻*/
/* 
import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove to favorites": "Add from favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={ starIcon }
                            alt={ contact.isFavorite ? "filled star icon" : "empty star icon" }
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
 */

/* Lesson 19: Complex state: Objects 👻👻👻*/
/**
 * Challenge: Fill in the values in the markup
 * using the properties of our state object above
 * (Ignore `isFavorite` for now)
 */

/**
 * Challenge: Use a ternary to determine which star image variable
 * should be used based on the `contact.isFavorite` property. Test 
 * your results by manually changing the isFavorite value in state.
 * 
 * `true` => starFilled
 * `false` => starEmpty
 */

/* 
import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => !prevContact.isFavorite)
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove to favorites": "Add from favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={ starIcon }
                            alt={ contact.isFavorite ? "filled star icon" : "empty star icon" }
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
 */

/* Lesson 18: Chef Claude: Refactor array state 👻*/
/* 
import Header from "./components/Header"
import Main from './components/Main'

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
} 
 */

/* Lesson 17: Complex state: Arrays 👻👻👻*/
/**
 * Challenge: Convert the code below to use an array
 * held in state instead of a local variable. Initialize 
 * the state array as an empty array
 * 
 * Don't worry about fixing `addFavoriteThing` quite yet.
 */

/**
 * Challenge: you do it!
 * Every time "Add item" is clicked, it should add another string
 * "Test" to the list on the page
 */

/* 
import { useState } from "react"
export default function App() {
    
  const [myFavoriteThings, setMyFavoriteThings ] = useState([])

  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    setMyFavoriteThings(prevFavThings => [...prevFavThings, "Test"])
    console.log(myFavoriteThings)
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}
 */

/* Lesson 16: Toggling state 👻*/
/**
 * Challenge: 
 * - Initialize state for `isGoingOut` as a boolean
 * - Make it so clicking the button flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
 */

/* 
import { useState } from "react"

export default function App() {
    const [ isGoingOut, setIsGoingOut ] = useState(true)

    function handleClick() {
        setIsGoingOut(prev => !prev)
    }
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
 */

/* Lesson 15: Ternary practice 👻👻*/
/**
 * Challenge: Replace the if/else below with a ternary
 * to determine the text that should display on the page
 */

/**
 * Challenge: move our ternary directly inside of the JSX
 * so the "Yes" and "No" are determined inside the <h1>
 * 
 * Hint: you will no longer need the `answer` variable
 * */

/* 
export default function App() {
    const isGoingOut = true
    
    // let answer = isGoingOut ? "Yes" : "No" // 👈 Use ternary here
    
    // Remove the code below 👇 once your ternary is done
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
 */

/* Lesson 13: Updating state with a callback function 👻*/
/* 
Note: if you ever need the old value of state to help you determine
the new value of the state, you should pass a callback function to 
your state setter function instead of using state directly. This 
callback function will recieve the old value of state as it's 
parameter, which you can use to determine your new value of state. 
*/

/* 
// Challenge: update `substract` to use a callback function

import React from "react"

export default function App() {
    const  [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function minus() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={add}>+</button>
            </div>
        </main>
    )
}
 */

/* Lesson 12: State practice 👻👻👻👻*/
/**
 * Challenge: 
 * Create state to track our count value (initial value is 0)
 * Don't forget to replace the hard-coded "0" with your new state
 */

/**
 * Challenge: 
 * Create a function called `add` that runs
 * when the + button is clicked. (Can just console.log("add") for now)
 */

/**
 * Challenge: 
 * See if you can think of a way to add 1 to the count
 * every time the + button is clicked
 */

/**
 * Challenge: 
 * Add functionality to the minus button
 */

/* 
import React from "react"

export default function App() {
    const  [count, setCount] = React.useState(0)

    function add() {
        setCount(count + 1 )
    }
    
    function minus() {
        setCount(count - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={add}>+</button>
            </div>
        </main>
    )
}
 */

/* Lesson 11: Changing state 👻*/
/**
 * Challenge: 
 * 1. Create a function called `handleClick` that runs
 *    setIsImportant("Definitely")
 * 2. Add a click event listener to the button
 *    that runs `handleClick` when the button is clicked.
 */

/* 
import React from 'react'
export default function App() {
    const state = "Yes"

    let [isImportant, setIsImportant] = React.useState("Yes")
    // setResult("Heck yes!")
    function handleClick() {
        setIsImportant("Heck Yes!")
    }
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick= {handleClick}>{isImportant}</button>
        </main>
    )
}
*/

/* Lesson 10: useState array destructuring */
/* 
import React from 'react'
export default function App() {
    const state = "Yes"

    const [result, func] = React.useState("Yes")

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result}</button>
        </main>
    )
}
 */

/* Lesson 9: useState 👻*/
/* 
import React from 'react'
export default function App() {
    const state = "Yes"

    const result = React.useState("Yes")

    console.log(result)
    
    // function handleClick(){
    //     state = "Heck yes"
    // }
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            // <button className="value" onClick={handleClick}>{result[0]}</button>
            <button className="value" >{result[0]}</button>
        </main>
    )
}
 */

/* Lesson 3: Chef Claude: form */
/* 
import Header from "./components/Header"
import Main from './components/Main'

export default function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
} */