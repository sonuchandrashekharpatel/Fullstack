/* Chapter - 5: Capstone Project #1 - Tenzies */

/* Lesson 19: Tenzies Outro */


/* Lesson 18: Tenzies: Accessibility Improvements - part 2 👻*/


/* Lesson 17: Tenzies: Accessibility Improvements */


/* Lesson 16: Tenzies: New game 👻*/


/* Lesson 15: Tenzies: Lazy State Initialization */


/* Lesson 14: Tenzies: End game - part 3 👻*/


/* Lesson 13: Tenzies: End game - part 2 👻 👻*/


/* Lesson 12: Tenzies: End game - part 1 👻*/


/* Lesson 11: Tenzies: Hold dice - part 3 👻*/


/* Lesson 10: Tenzies: Hold dice - part 2 👻*/


/* Lesson 9: Tenzies: Hold dice - part 1 👻👻*/


/* Lesson 8: Tenzies: Styling held dice 👻*/


/* Lesson 7: Tenzies: Change dice to objects 👻*/


/* Lesson 6: Tenzies: Roll dice button 👻*/


/* Lesson 5: Tenzies: Map array to Die components 👻*/


/* Lesson 4: Tenzies: Generate 10 random numbers 👻*/


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

/* Lesson 2: Tenzies: Setup 👻*/

/* 
export default function App() {
    return (
        <main>
            
        </main>
    )
} */