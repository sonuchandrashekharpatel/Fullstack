/* Chapter - 2: TypeScript in React */

/* Lesson 21: Solo project - Typed Tenzies */


/* Lesson 20: Congrats! */


/* Lesson 19: The Final Challenge */


/* Lesson 18: Typing Function Props */
import type {JSX} from "react"

type NewGameButtonProps = {
    isGameOver: boolean
    startNewGame: () => void
}
export default function NewGameButton({ isGameOver, startNewGame }: NewGameButtonProps): JSX.Element | null {
    if (!isGameOver) {
        return null
    } else {
        return (
            <button className="new-game" onClick={startNewGame}>
                New Game
            </button>
        )
    }
}

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
export default function NewGameButton({ isGameOver, startNewGame }) {
    if (!isGameOver) {
        return null
    } else {
        return (
            <button className="new-game" onClick={startNewGame}>
                New Game
            </button>
        )
    }
} */