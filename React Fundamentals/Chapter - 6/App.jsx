
/* Chapter - 6: Capstone Project #2 - Assembly: Endgame */


/* Lesson 26: Assembly Endgame Outro */


/* Lesson 25: Assembly Endgame - 🎊🎊🎊🎊🎊 👻*/


/* Lesson 24: Assembly Endgame - Display missed letters when lost 👻*/


/* Lesson 23: Assembly Endgame - New game button resets the game 👻*/


/* Lesson 22: Assembly Endgame - Choose random word 👻*/


/* Lesson 21: Assembly Endgame - Make the game more a11y-friendly part 2 */


/* Lesson 20: Assembly Endgame - Make the game more a11y-friendly part 1 */


/* Lesson 19: Assembly Endgame - Disable keyboard when the game is over 👻*/


/* Lesson 18: Assembly Endgame - Farewell messages 👻*/


/* Lesson 17: Assembly Endgame - Backlog inventory */


/* Lesson 16: Assembly Endgame - Conditional rendering with a helper function */


/* Lesson 15: Assembly Endgame - Quick CSS alignment fix 🤦🏻‍♂️ */


/* Lesson 14: Assembly Endgame - Display won/lost status 👻*/


/* Lesson 13: Assembly Endgame - isGameOver 👻*/


/* Lesson 12: Assembly Endgame - Lost languages 👻*/


/* Lesson 11: Assembly Endgame - Wrong guess count 👻*/


/* Lesson 10: Assembly Endgame - Only display correctly guessed letters in word 👻*/


/* Lesson 9: Assembly Endgame - Keyboard letter styles for guesses 👻*/

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Update the keyboard when a letter is right
 * or wrong.
 * 
 * Bonus: use the `clsx` package to easily add conditional 
 * classNames to the keys of the keyboard. Check the docs 
 * to learn how to use it 📖
*/

import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssembyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    
    const keyboardElements = alphabet.split("")
        .map(letter => {
            
            let className = "key"
            if(guessedLetters.includes(letter)){
                if(currentWord.split("").includes(letter)){
                    className += " right-guessed"
                } else {
                    className += " wrong-guessed"
                }
            }
            return <button 
                className={className}
                key={letter}
                onClick={()=> addGuessedLetter(letter)}
                >{letter.toUpperCase()}
            </button>
        })
    
    const languageElements = languages.map(lang => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        return <p key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => 
            <span 
                key={index}
                className="letter"
            >{letter.toUpperCase()}
            </span>
        )


    return(
        <main>
            <Header />
            <section className="status-section">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
            <section className="keyboard">{keyboardElements}</section>
            <button className="new-game">New Game</button>
        </main>
    )
}


/* Lesson 8: Assembly Endgame - Save the guessed letters 👻👻👻*/
/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: TBA
 * 
 * Think: what would be the best way to store the user's
 * guessed letters?
 * 
 * Answer: React State
 */

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Create a new array in state to hold user's
 * guessed letters. When the user chooses a letter, add
 * that letter to this state array.
 * 
 * Don't worry about whether it was a right or wrong 
 * guess yet.
 */

/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"

export default function AssembyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    console.log(guessedLetters)
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {

        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }
    const keyboardElements = alphabet.split("")
        .map(letter => (
            <button 
                className="key" 
                key={letter}
                onClick={()=> addGuessedLetter(letter)}
                >{letter.toUpperCase()}
                </button>
            )
        )
    
    const languageElements = languages.map(lang => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        return <p key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => 
            <span 
                key={index}
                className="letter"
            >{letter.toUpperCase()}
            </span>
        )


    return(
        <main>
            <Header />
            <section className="status-section">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
            <section className="keyboard">{keyboardElements}</section>
            <button className="new-game">New Game</button>
        </main>
    )
}
 */

/* Lesson 7: Assembly Endgame - Keyboard 👻*/
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
*/
/* import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"

export default function AssembyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardElements = alphabet.split("")
        .map(letter =><button className="key" key={letter}>{letter.toUpperCase()}</button>)
    
    const languageElements = languages.map(lang => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        return <p key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => 
            <span 
                key={index}
                className="letter"
            >{letter.toUpperCase()}
            </span>
        )

    return(
        <main>
            <Header />
            <section className="status-section">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
            <section className="keyboard">{keyboardElements}</section>
            <button className="new-game">New Game</button>
        </main>
    )
}
 */

/* Lesson 6: Assembly Endgame - Word Display 👻*/
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
*/

/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"

export default function AssembyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    
    const languageElements = languages.map(lang => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        return <p key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => 
            <span 
                key={index}
                className="letter"
            >{letter.toUpperCase()}
            </span>
        )

    return(
        <main>
            <Header />
            <section className="status-section">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
        </main>
    )
}
 */

/* Lesson 5: Assembly Endgame - Languages List 👻*/
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 * 
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
*/
/* 
import Header from "./components/Header"
import { languages } from "./languages"

export default function AssembyEndgame() {

    const languageElements = languages.map(lang => {

        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        return <p key={lang.name} style={styles}>{lang.name}</p>
    })

    return(
        <main>
            <Header />
            <section className="status-section">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
        </main>
    )
}
 */
/* Lesson 4: Assembly Endgame - Status Section 👻*/
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Build a status section below the header.
 * For now, you can just hard-code in the styles for
 * a winning game, and we'll make it more dynamic
 * later.
*/

/* 
import Header from "./components/Header";

export default function AssembyEndgame() {

    return(
        <main>
            <Header />
            <section className="status-section">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
        </main>
    )
} */

/* Lesson 3: Assembly Endgame - Header Section 👻*/

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
*/

/* 
import Header from "./components/Header";

export default function AssembyEndgame() {

    return(
        <main>
            <Header />
        </main>
    )
}
 */