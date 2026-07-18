/* Chapter - 5: Capstone Project #1 - Tenzies */

/* Lesson 19: Tenzies Outro */


/* Lesson 18: Tenzies: Accessibility Improvements - part 2 👻*/


/* Lesson 17: Tenzies: Accessibility Improvements */


/* Lesson 16: Tenzies: New game 👻*/


/* Lesson 15: Tenzies: Lazy State Initialization */


/* Lesson 14: Tenzies: End game - part 3 👻*/


/* Lesson 13: Tenzies: End game - part 2 👻 👻*/

import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())

    for(let i = 0; i< dice.length; i++) {
        if(dice[i].isHeld && dice[i].value)
    }
    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    function hold(id) {
        setDice(prevDice => {
            return prevDice.map(die => {
                return die.id === id ?  { ...die, isHeld: !die.isHeld } : die
            })
        })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        hold={() => hold(die.id)}
    />)

    function rollDice() {
        setDice(oldDice => {
            return oldDice.map(die => 
                die.isHeld ? 
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
            )
        })
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
}

/* Lesson 12: Tenzies: End game - part 1 👻*/
// check if the game is won

/**
 * Critical thinking time!
 * 
 * We want to indicate to the user that the game is over
 * if (1) all the dice are held, and (2) all the dice have
 * the same value.
 * 
 * How might we do this? Some questions to consider:
 * 
 * 1. Do we need to save a `gameWon` value in state? If so, why?
 *    If not, why not?
 * No.
 * 
 * 
 * 2. Do we need to create a side effect to synchronize the `gameWon`
 *    value (whether it's in state or not) with the current state of 
 *    the dice?
 * No.
 * 
 * 
 * Conclusion:
 * We can derive the gameWon status based on the condition(s) of the current
 * dice state on every render.
 */

/* 
import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    function hold(id) {
        setDice(prevDice => {
            return prevDice.map(die => {
                return die.id === id ?  { ...die, isHeld: !die.isHeld } : die
            })
        })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        hold={() => hold(die.id)}
    />)

    function rollDice() {
        setDice(oldDice => {
            return oldDice.map(die => 
                die.isHeld ? 
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
            )
        })
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
} */


/* Lesson 11: Tenzies: Hold dice - part 3 👻*/
/**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `hold`
 * function below. When we're "rolling" a die, we're really
 * just updating the `value` property of the die object.
*/
/* 
import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    function hold(id) {
        setDice(prevDice => {
            return prevDice.map(die => {
                return die.id === id ?  { ...die, isHeld: !die.isHeld } : die
            })
        })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        hold={() => hold(die.id)}
    />)

    function rollDice() {
        setDice(oldDice => {
            return oldDice.map(die => 
                die.isHeld ? 
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
            )
        })
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
        </main>
    )
}
 */

/* Lesson 10: Tenzies: Hold dice - part 2 👻*/
/**
 * Challenge: Update the `hold` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's more than one way to 
 * accomplish this.
*/
/* 
import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    function hold(id) {
        setDice(prevDice => {
            return prevDice.map(die => {
                return die.id === id ?  { ...die, isHeld: !die.isHeld } : die
            })
        })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        hold={() => hold(die.id)}
    />)

    function handleClick() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleClick}>Roll Dice</button>
        </main>
    )
}
 */

/* Lesson 9: Tenzies: Hold dice - part 1 👻👻*/
/**
 * Challenge: Create a function `hold` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
*/
/* 
import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())

    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    function hold(id) {
        console.log(id)
        setDice(prevDice => {
            return prevDice.map(die => {
                if(die.id === id) {
                    return {
                        ...die,
                        isHeld: !die.isHeld
                    }
                }
                return die
            })
        })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        hold={() => hold(die.id)}
    />)


    function handleClick() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleClick}>Roll Dice</button>
        </main>
    )
}
 */

/* Lesson 8: Tenzies: Styling held dice 👻*/
/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

/*

import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())

    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    function heldDice(id) {
        console.log(id)
        setDice(prevDice => {
            return prevDice.map(die => {
                if(die.id === id) {
                    return {
                        ...die,
                        isHeld: !die.isHeld
                    }
                }
                return die
            })
        })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        id={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        handleClick={heldDice}
    />)


    function handleClick() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleClick}>Roll Dice</button>
        </main>
    )
}
 */

/* Lesson 7: Tenzies: Change dice to objects 👻*/
/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

/* 
import Die from "./components/Die";
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())

    
    function generateAllNewDice() {
        
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        )
    }

    const diceElements = dice.map(die => <Die 
        key={die.id}
        value={die.value} 
        isHeld={die.isHeld}
    />) 

    function handleClick() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleClick}>Roll Dice</button>
        </main>
    )
}
 */

/* Lesson 6: Tenzies: Roll dice button 👻*/
/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

/* 
import Die from "./components/Die";
import { useState } from 'react'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())

    const diceElements = dice.map(value => <Die value={value}/>) 

    function generateAllNewDice() {

        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    function handleClick() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={handleClick}>Roll Dice</button>
        </main>
    )
}
 */

/* Lesson 5: Tenzies: Map array to Die components 👻*/
/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */
/* 
import Die from "./components/Die";
import { useState} from 'react'

export default function App() {

    const [dice, setDice ] = useState(generateAllNewDice())

    const diceElements = dice.map(value => <Die value={value}/>) 

    console.log(diceElements)
    function generateAllNewDice() {
        let randomNumArr = []

        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    console.log(generateAllNewDice())
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    )
}
 */

/* Lesson 4: Tenzies: Generate 10 random numbers 👻*/
/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
*/
/* 
import Die from "./components/Die";

export default function App() {

    function generateAllNewDice() {
        let randomNumArr = []

        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    console.log(generateAllNewDice())
    return (
        <main>
            <div className="dice-container">
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
            </div>
        </main>
    )
}
 */


/* Lesson 3: Tenzies: Die component 👻*/
/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop. Should
 *   render a button with that value displayed.
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */
/* 
import Die from "./components/Die";

export default function App() {

    return (
        <main>
            <div className="dice-container">
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
                <Die  value={1}/>
            </div>
        </main>
    )
}
 */
/* Lesson 2: Tenzies: Setup 👻*/

/* 
export default function App() {
    return (
        <main>
            
        </main>
    )
} */