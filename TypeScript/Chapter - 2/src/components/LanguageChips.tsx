/* Chapter - 2: TypeScript in React */

/* Lesson 21: Solo project - Typed Tenzies */


/* Lesson 20: Congrats! */


/* Lesson 19: The Final Challenge */


/* Lesson 18: Typing Function Props */


/* Lesson 17: The WordLetters Component Challenge */


/* Lesson 16: Element within an Element */
// CHALLENGE: Type isLanguageLost, styles, and className
// HINT: TS's Omit utility type might come in handy here!
/*
CHALLENGE 1: Type lang and index, the parameters of the callback function
CHALLENGE 2: Type the return value of the callback function
CHALLENGE 3: Type languageElements
*/
import { clsx } from "clsx"
import type {JSX} from 'react'
import type { Language } from '../languages'

type LanguageChipsProps = {
    languages: Language[]
    wrongGuessCount: number
}

export default function LanguageChips({ languages, wrongGuessCount }:LanguageChipsProps): JSX.Element {
    
    
    const languageElements: JSX.Element[] = languages.map((lang: Language, index: number): JSX.Element => {
        const isLanguageLost: boolean = index < wrongGuessCount
        const styles: Omit<Language, "name"> = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className: string = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
        {lang.name}
      </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
}


/* Lesson 15: Component Props and Imported Types */
/* 
import { clsx } from "clsx"
import type {JSX} from 'react'
import type { Language } from '../languages'

type LanguageChipsProps = {
    languages: Language
    wrongGuessCount: number
}

export default function LanguageChips({ languages, wrongGuessCount }:LanguageChipsProps): JSX.Element {
    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
        {lang.name}
      </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
}
 */
/* Lesson 14: The AriaLiveStatus Component Challenge */


/* Lesson 13: Custom Component Prop Types */


/* Lesson 12: Typing Component Props */


/* Lesson 11: JSX Element or null */


/* Lesson 10: Typing React Components */


/* Lesson 9: The New Setup */
/* 
import { clsx } from "clsx"

export default function LanguageChips({ languages, wrongGuessCount }) {
    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
        {lang.name}
      </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
} */