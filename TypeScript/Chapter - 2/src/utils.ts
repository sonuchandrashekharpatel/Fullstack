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


/* Lesson 11: JSX Element or null */


/* Lesson 10: Typing React Components */


/* Lesson 9: The New Setup */


/* Lesson 8: Typing App.tsx functions */


/* Lesson 7: Typing Derived Values and Arrow Functions */


/* Lesson 6: Typing useState() */


/* Lesson 5: TS Refresher - A new getRandomIndex() function */

/*
CHALLENGE 1: Complete the getRandomIndex function
CHALLENGE 2: Add type annotations where relevant
CHALLENGE 3: Use getRandomIndex in getRandomWord and
.            getFarewellText
*/

import { words } from "./words"

function getRandomIndex(array: string[]): number {
    const randomIndex: number = Math.floor(Math.random() * array.length)
    return randomIndex
}
export function getRandomWord(): string {
    return words[getRandomIndex(words)]
}

export function getFarewellText(language: string): string {
    const options: string[] = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    return options[getRandomIndex(options)];
}

/* Lesson 4: TS Refresher - Functions */
/*
CHALLENGE 1: Type the return value of getRandomWord()
CHALLENGE 2: Type the randomIndex variable 
*/
/*
CHALLENGE 1: Type the parameter of getFarwellText()
CHALLENGE 2: Type the return value of getFarewellText()
CHALLENGE 3: Type the options variable
CHALLENGE 4: Type the randomIndex variable 
*/
/* import { words } from "./words"

type Language = {
    name: string
    backgroundColor: string
    color: string
}
export function getRandomWord(): string {
    const randomIndex: number = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

export function getFarewellText(language: Language): string {
    const options: string[] = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const randomIndex: number = Math.floor(Math.random() * options.length);
    return options[randomIndex];
} */