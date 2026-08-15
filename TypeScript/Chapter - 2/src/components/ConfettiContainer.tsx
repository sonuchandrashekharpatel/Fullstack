/* Chapter - 2: TypeScript in React */

/* Lesson 21: Solo project - Typed Tenzies */


/* Lesson 20: Congrats! */


/* Lesson 19: The Final Challenge */


/* Lesson 18: Typing Function Props */


/* Lesson 17: The WordLetters Component Challenge */


/* Lesson 16: Element within an Element */


/* Lesson 15: Component Props and Imported Types */


/* Lesson 14: The AriaLiveStatus Component Challenge */


/* Lesson 13: Custom Component Prop Types */


/* Lesson 12: Typing Component Props */

import Confetti from "react-confetti"
import type {JSX} from "react"

export default function ConfettiContainer({ isGameWon }:{isGameWon:boolean}):JSX.Element | null {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }
}


/* Lesson 11: JSX Element or null */
/*
CHALLENGE: Explictly type the ConfettiContainer component's return value
*//* 
import Confetti from "react-confetti"
import type {JSX} from "react"

export default function ConfettiContainer({ isGameWon }):JSX.Element | null {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }
}
 */

/* Lesson 10: Typing React Components */


/* Lesson 9: The New Setup */
/* 
import Confetti from "react-confetti"

export default function ConfettiContainer({ isGameWon }) {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}
 */