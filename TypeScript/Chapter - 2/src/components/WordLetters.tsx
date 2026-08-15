/* Chapter - 2: TypeScript in React */

/* Lesson 21: Solo project - Typed Tenzies */


/* Lesson 20: Congrats! */


/* Lesson 19: The Final Challenge */


/* Lesson 18: Typing Function Props */


/* Lesson 17: The WordLetters Component Challenge */
/*
CHALLENGE 1: Explictly type the WordLetter's component's return value
CHALLENGE 2: Type the component's props using a custom Type
CHALLENGE 3: Explictly type any variables in the component
*/

import { clsx } from "clsx"
import type {JSX} from "react"

type WordLetters = {
    currentWord: string
    guessedLetters: string[]
    isGameLost: boolean
}


export default function WordLetters({ currentWord, guessedLetters, isGameLost }: WordLetters): JSX.Element {
    return (
        <section className="word">
            {currentWord.split("").map((letter: string, index: number): JSX.Element => {
                const shouldRevealLetter: boolean = isGameLost || guessedLetters.includes(letter)
                const letterClassName: string = clsx(
                    isGameLost && !guessedLetters.includes(letter) && "missed-letter"
                )
                return (
                    <span key={index} className={letterClassName}>
                        {shouldRevealLetter ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    )
}

/* Lesson 16: Element within an Element */


/* Lesson 15: Component Props and Imported Types */


/* Lesson 14: The AriaLiveStatus Component Challenge */


/* Lesson 13: Custom Component Prop Types */


/* Lesson 12: Typing Component Props */


/* Lesson 11: JSX Element or null */


/* Lesson 10: Typing React Components */


/* Lesson 9: The New Setup */
/* 
import { clsx } from "clsx"

export default function WordLetters({ currentWord, guessedLetters, isGameLost }) {
    return (
        <section className="word">
            {currentWord.split("").map((letter, index) => {
                const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
                const letterClassName = clsx(
                    isGameLost && !guessedLetters.includes(letter) && "missed-letter"
                )
                return (
                    <span key={index} className={letterClassName}>
                        {shouldRevealLetter ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    )
} */