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
// CHALLENGE: Type the gameStatusClass variable

import clsx from "clsx"
import {getFarewellText} from "../utils";
import {languages} from "../languages";
import type {JSX} from 'react'

type GameStatusProps = {
    isGameWon: boolean,
    isGameLost: boolean,
    isGameOver: boolean,
    isLastGuessIncorrect: boolean | string,
    wrongGuessCount: number
}
export default function GameStatus({
    isGameWon,
    isGameLost,
    isGameOver,
    isLastGuessIncorrect,
    wrongGuessCount
}: GameStatusProps ): JSX.Element {

    const gameStatusClass: string = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            { !isGameOver && isLastGuessIncorrect && (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
            }

            {isGameWon && (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )}

            {isGameLost && (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}
        </section>
    )
} 


/* Lesson 12: Typing Component Props */
/*
CHALLENGE 1: Explictly type the GameStatus component's return value
CHALLENGE 2: Type all the props of GameStatus
.            (Unsure of the types? Check App.tsx!)
*/
/* 
import clsx from "clsx"
import {getFarewellText} from "../utils";
import {languages} from "../languages";
import type {JSX} from 'react'

export default function GameStatus({
    isGameWon,
    isGameLost,
    isGameOver,
    isLastGuessIncorrect,
    wrongGuessCount
}: {
    isGameWon: boolean,
    isGameLost: boolean,
    isGameOver: boolean,
    isLastGuessIncorrect: boolean,
    wrongGuessCount: number
}): JSX.Element {
    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            { !isGameOver && isLastGuessIncorrect && (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
            }

            {isGameWon && (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )}

            {isGameLost && (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}
        </section>
    )
} 
 */
/* Lesson 11: JSX Element or null */


/* Lesson 10: Typing React Components */


/* Lesson 9: The New Setup */
/* 
import clsx from "clsx"
import {getFarewellText} from "../utils";
import {languages} from "../languages";

export default function GameStatus({
                                       isGameWon,
                                       isGameLost,
                                       isGameOver,
                                       isLastGuessIncorrect,
                                       wrongGuessCount
                                   }) {
    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            { !isGameOver && isLastGuessIncorrect && (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
            }

            {isGameWon && (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )}

            {isGameLost && (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}
        </Section>
    )
} 
 */