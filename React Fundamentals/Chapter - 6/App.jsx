
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
/**
 * Challenge: Bid farewell to each programming language
 * as it gets erased from existance 👋😭
 * 
 * Use the `getFarewellText` function from the new utils.js
 * file to generate the text.
 * 
 * Check hint.md if you're feeling stuck, but do your best
 * to solve the challenge without the hint! 🕵️
 */


import Header from "./components/Header"
import { getFarewellText } from "./utils"
import { languages } from "./languages"
import { useState, useEffect } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    const [ farewellText , setFarewellText] = useState("")
    
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    useEffect( () => {
        if (wrongGuessCount) {
            let language = languages[wrongGuessCount - 1].name
            setFarewellText(getFarewellText(language))
        }
    }, [wrongGuessCount])

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1;

    const isGameOver = isGameWon || isGameLost
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    const keyboardElements = alphabet.split("").map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

            return <button 
                className={className}
                key={letter}
                onClick={()=> addGuessedLetter(letter)}
                >{letter.toUpperCase()}
            </button>
        })
    
    const languageElements = languages.map((lang, index) => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        const className = clsx("chip", index < wrongGuessCount && "lost") 

        return <p className={className} key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => {
            const isGuessed = guessedLetters.includes(letter)

            return <span 
                key={index}
                className="letter"
            >{ isGuessed && letter.toUpperCase()}
            </span>

        })

        const gameStatusClass = clsx("game-status", isGameWon && "won", isGameLost && "lost")
    return (
        <main>
            <Header />
            <section className={gameStatusClass}>
                {isGameWon && <div>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </div>}

                { isGameLost && <div>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </div>}

                { farewellText && 
                    <p>{farewellText}</p>

                }

            </section>


            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
            <section className="keyboard">{keyboardElements}</section>
            { isGameOver && <button className="new-game">New Game</button> }
        </main>
    )
}


/* Lesson 17: Assembly Endgame - Backlog inventory */
/**
 * 
 * - Farewell messages in the status section
 * - Fix a11y issues
 * - Choose a random word from a list of words
 * - Confetti drops when user wins    
*/

/* Lesson 16: Assembly Endgame - Conditional rendering with a helper function */


/* Lesson 15: Assembly Endgame - Quick CSS alignment fix 🤦🏻‍♂️ */


/* Lesson 14: Assembly Endgame - Display won/lost status 👻*/
/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge:
 * Conditionally render either the "won" or "lost" statuses
 * from the design, both the text and the styles, based on the
 * new derived variables.
 * 
 * Note: We always want the surrounding `section` to be rendered,
 * so only change the content inside that section. Otherwise the
 * content on the page would jump around a bit too much.
 */

/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1;

    const isGameOver = isGameWon || isGameLost
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    const keyboardElements = alphabet.split("").map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

            return <button 
                className={className}
                key={letter}
                onClick={()=> addGuessedLetter(letter)}
                >{letter.toUpperCase()}
            </button>
        })
    
    const languageElements = languages.map((lang, index) => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        const className = clsx("chip", index < wrongGuessCount && "lost") 

        return <p className={className} key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => {
            const isGuessed = guessedLetters.includes(letter)

            return <span 
                key={index}
                className="letter"
            >{ isGuessed && letter.toUpperCase()}
            </span>

        })

        const gameStatusClass = clsx("game-status", isGameWon && "won", isGameLost && "lost")
    return (
        <main>
            <Header />
            <section className={gameStatusClass}>
                {isGameWon && <div>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </div>}

                { isGameLost && <div>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </div>}

            </section>


            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
            <section className="keyboard">{keyboardElements}</section>
            { isGameOver && <button className="new-game">New Game</button> }
        </main>
    )
}

                // { isGameOver ? (
                //     isGameWon ? (
                //         <>
                //             <h2>You win!</h2>
                //             <p>Well done! 🎉</p>
                //         </>
                //     ) : (
                //         <>
                //             <h2>Game over!</h2>
                //             <p>You lose! Better start learning Assembly 😭</p>
                //         </>
                //     )
                // ) : (
                //         null
                //     )
                // } 
 */


/* Lesson 13: Assembly Endgame - isGameOver 👻*/
/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge:
 * 1. Create a variable `isGameOver` which evaluates to `true`
 *    if the user has guessed incorrectly 8 times. Consider how
 *    we might make this more dynamic if we were ever to add or
 *    remove languages from the languages array.
 * 2. Conditionally render the New Game button only if the game
 *    is over.
 */
/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const isGameOver = wrongGuessCount >= languages.length - 1;
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    const keyboardElements = alphabet.split("").map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

            return <button 
                className={className}
                key={letter}
                onClick={()=> addGuessedLetter(letter)}
                >{letter.toUpperCase()}
            </button>
        })
    
    const languageElements = languages.map((lang, index) => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        const className = clsx("chip", index < wrongGuessCount && "lost") 

        return <p className={className} key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => {
            const isGuessed = guessedLetters.includes(letter)

            return <span 
                key={index}
                className="letter"
            >{ isGuessed && letter.toUpperCase()}
            </span>

        })

    return (
        <main>
            <Header />
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">{letterElements}</section>
            <section className="keyboard">{keyboardElements}</section>
            { isGameOver && <button className="new-game">New Game</button> }
        </main>
    )
}
 */

/* Lesson 12: Assembly Endgame - Lost languages 👻*/
/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge: When mapping over the languages, determine how
 * many of them have been "lost" and add the "lost" class if
 * so.
 * 
 * Hint: use the wrongGuessCount combined with the index of
 * the item in the array while inside the languages.map code
*/
/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    const keyboardElements = alphabet.split("").map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

            return <button 
                className={className}
                key={letter}
                onClick={()=> addGuessedLetter(letter)}
                >{letter.toUpperCase()}
            </button>
        })
    
    const languageElements = languages.map((lang, index) => {
        
        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        const className = clsx("chip", index < wrongGuessCount && "lost") 

        return <p className={className} key={lang.name} style={styles}>{lang.name}</p>
    })
    
    const letterElements = currentWord.split("")
        .map((letter, index) => {
            const isGuessed = guessedLetters.includes(letter)

            return <span 
                key={index}
                className="letter"
            >{ isGuessed && letter.toUpperCase()}
            </span>

        })

    return (
        <main>
            <Header />
            <section className="game-status">
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

/* Lesson 11: Assembly Endgame - Wrong guess count 👻*/
/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge: Derive a variable (`wrongGuessCount`) for the 
 * number of incorrect guesses by using the other state 
 * values we're already holding in the component.
 * 
 * console.log the wrongGuessCount for now
 */

/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    let wrongGuessedCount = 0
    for(let letter of guessedLetters) {
        !currentWord.includes(letter) && wrongGuessedCount++
    }
    console.log(wrongGuessedCount)

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    const keyboardElements = alphabet.split("").map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

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
        .map((letter, index) => {
            const isGuessed = guessedLetters.includes(letter)

            return <span 
                key={index}
                className="letter"
            >{ isGuessed && letter.toUpperCase()}
            </span>

        })

    return (
        <main>
            <Header />
            <section className="game-status">
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

/* Lesson 10: Assembly Endgame - Only display correctly guessed letters in word 👻*/
/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Only display the correctly-guessed letters
 * in the word
 */

/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    const keyboardElements = alphabet.split("").map(letter => {

            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

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
        .map((letter, index) => {
            const isGuessed = guessedLetters.includes(letter)

            return <span 
                key={index}
                className="letter"
            >{ isGuessed && letter.toUpperCase()}
            </span>

        })

    return (
        <main>
            <Header />
            <section className="game-status">
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

/* 
import Header from "./components/Header"
import { languages } from "./languages"
import { useState } from "react"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [ guessedLetters, setGuessedLetters] = useState([])
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter])
    }

    
    const keyboardElements = alphabet.split("")
        .map(letter => {
            
            // let className = ""
            // if(guessedLetters.includes(letter)){
            //     if(currentWord.split("").includes(letter)){
            //         className += " right-guessed"
            //     } else {
            //         className += " wrong-guessed"
            //     }
            // }
            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && currentWord.split("").includes(letter)
            const isWrong = isGuessed && !currentWord.split("").includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })

            console.log(className)

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
            <section className="game-status">
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

export default function AssemblyEndgame() {

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
            <section className="game-status">
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

export default function AssemblyEndgame() {

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
            <section className="game-status">
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

export default function AssemblyEndgame() {

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
            <section className="game-status">
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

export default function AssemblyEndgame() {

    const languageElements = languages.map(lang => {

        const styles = { backgroundColor: lang.backgroundColor, color: lang.color}
        return <p key={lang.name} style={styles}>{lang.name}</p>
    })

    return(
        <main>
            <Header />
            <section className="game-status">
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

export default function AssemblyEndgame() {

    return(
        <main>
            <Header />
            <section className="game-status">
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

export default function AssemblyEndgame() {

    return(
        <main>
            <Header />
        </main>
    )
}
 */