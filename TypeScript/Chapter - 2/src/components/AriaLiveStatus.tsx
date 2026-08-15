/* Chapter - 2: TypeScript in React */

/* Lesson 21: Solo project - Typed Tenzies */


/* Lesson 20: Congrats! */


/* Lesson 19: The Final Challenge */


/* Lesson 18: Typing Function Props */


/* Lesson 17: The WordLetters Component Challenge */


/* Lesson 16: Element within an Element */


/* Lesson 15: Component Props and Imported Types */


/* Lesson 14: The AriaLiveStatus Component Challenge */
/*
CHALLENGE 1: Explictly type the AriaLiveStatus component's return value
CHALLENGE 2: Type the component's props using a custom Type
CHALLENGE 3: Type any variables in the functional component
*/

import type {JSX} from 'react'

type AriaLiveStatusProps = {
    currentWord: string
    lastGuessedLetter: string
    guessedLetters: string[]
    numGuessesLeft: number  
}
export default function AriaLiveStatus({
                                           currentWord,
                                           lastGuessedLetter,
                                           guessedLetters,
                                           numGuessesLeft
                                       }: AriaLiveStatusProps): JSX.Element {
    return (
        <section
            className="sr-only"
            aria-live="polite"
            role="status"
        >
            <p>
                {currentWord.includes(lastGuessedLetter) ?
                    `Correct! The letter ${lastGuessedLetter} is in the word.` :
                    `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                }
                You have {numGuessesLeft} attempts left.
            </p>
            <p>
                Current word: {currentWord.split("").map((letter: string): string =>
                guessedLetters.includes(letter) ? letter + "." : "blank."
            ).join(" ")}
            </p>
        </section>
    )
}
/* Lesson 13: Custom Component Prop Types */


/* Lesson 12: Typing Component Props */


/* Lesson 11: JSX Element or null */


/* Lesson 10: Typing React Components */


/* Lesson 9: The New Setup */

/* 
export default function AriaLiveStatus({
                                           currentWord,
                                           lastGuessedLetter,
                                           guessedLetters,
                                           numGuessesLeft
                                       }) {
    return (
        <section
            className="sr-only"
            aria-live="polite"
            role="status"
        >
            <p>
                {currentWord.includes(lastGuessedLetter) ?
                    `Correct! The letter ${lastGuessedLetter} is in the word.` :
                    `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                }
                You have {numGuessesLeft} attempts left.
            </p>
            <p>
                Current word: {currentWord.split("").map(letter =>
                guessedLetters.includes(letter) ? letter + "." : "blank."
            ).join(" ")}
            </p>
        </section>
    )
} */