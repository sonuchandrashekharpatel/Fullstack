/* Chapter - 2: TypeScript in React */

/* Lesson 21: Solo project - Typed Tenzies */


/* Lesson 20: Congrats! */


/* Lesson 19: The Final Challenge */
/*
FINAL CHALLENGE! Fully type the Keyboard component
1. Type the return value of Keyboard
2. Type the props 
3. Explictly type all variables inside of Keyboard
*/

import { clsx } from "clsx"
import type {JSX} from "react"

type KeyboardProps = {
    alphabet: string
    guessedLetters: string[]
    currentWord: string
    isGameOver: boolean
    addGuessedLetter: (letter: string) => void
}
export default function Keyboard({
                                     alphabet,
                                     guessedLetters,
                                     currentWord,
                                     isGameOver,
                                     addGuessedLetter
                                 }: KeyboardProps): JSX.Element {
    const keyboardElements: JSX.Element[]= alphabet.split("").map((letter: string): JSX.Element => {
        const isGuessed: boolean = guessedLetters.includes(letter)
        const isCorrect: boolean = isGuessed && currentWord.includes(letter)
        const isWrong: boolean = isGuessed && !currentWord.includes(letter)
        const className: string = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                aria-disabled={isGuessed}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}

/* Lesson 18: Typing Function Props */


/* Lesson 17: The WordLetters Component Challenge */


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

export default function Keyboard({
                                     alphabet,
                                     guessedLetters,
                                     currentWord,
                                     isGameOver,
                                     addGuessedLetter
                                 }) {
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                aria-disabled={isGuessed}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
} */