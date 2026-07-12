/* Chapter - 3: Build a Blackjack Game */

/* Lesson 67: Solo Project - Password Generator */


/* Lesson 66: Sorting fruits */


/* Lesson 65: EmojiFighter */


/* Lesson 64: Rock papers scissors */


/* Lesson 63: Logical operators */


/* Lesson 62: push, pop, unshift, shift challenge */


/* Lesson 61: Loops and arrays */


/* Lesson 60: if else */


/* Lesson 59: Objects and functions */


/* Lesson 58: JavaScript Challenges */


/* Lesson 57:  */


/* Lesson 56: Congrats & recap */


/* Lesson 55: AI for Coding Students */


/* Lesson 54: Methods on object */


/* Lesson 53: Use an object to store player data */


/* Lesson 52: Create your first object */


/* Lesson 51: Aside: Intro to objects */


/* Lesson 50: Object sneak peek */


/* Lesson 49: Only trigger newCard() if you're allowed to */


/* Lesson 48: Aside: The OR operator (||) */


/* Lesson 47: Write your first logical operator */


/* Lesson 46: Aside: The AND operator (&&) */


/* Lesson 45: Our new card feature is broken */


/* Lesson 44: Assign values in the startGame function */


/* Lesson 43: Complete getRandomNumber function */


/* Lesson 42: Make getRandomCard() work */


/* Lesson 41: Completing our dice function */


/* Lesson 40: Using Math.random() and Math.floor() to create a dice */


/* Lesson 39: Flooring the number with Math.floor() */


/* Lesson 38: Math.random() * 6 */


/* Lesson 37: Aside: Math.random() */


/* Lesson 36: Use a function to set the card values */


/* Lesson 35: Aside: Returning values in functions */


/* Lesson 34: How can we avoid to hard-code card values? */


/* Lesson 33: Use a loop to render cards */


/* Lesson 32: For loops, arrays, and DOM */


/* Lesson 31: Write your first array-based for loop */


/* Lesson 30: Aside: For loops and arrays */


/* Lesson 29: Write your first loop */


/* Lesson 28: Aside: Loops */


/* Lesson 27: Push a new card to the array */


/* Lesson 26: Creating the cards array */


/* Lesson 25: Aside: Array.push() and .pop() */


/* Lesson 24: Arrays with multiple data types */


/* Lesson 23: Aside: Array indexes */


/* Lesson 22: Aside: Intro to arrays */


/* Lesson 21: Solving our cards problem with an array */


/* Lesson 20: Rename the startGame function */


/* Lesson 19: Add to the sum when newCard is clicked */


/* Lesson 18: New card button */


/* Lesson 17: Display the cards */


/* Lesson 16: Display the sum */


/* Lesson 15: Display the message */


/* Lesson 14: Make the start button work */


/* Lesson 13: Add basic styling */


/* Lesson 12: Link to stylesheet */


/* Lesson 11: Add the message variable */
/* 
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ""
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!
console.log(message)
 */

/* Lesson 10: Let's practice boolean conditions */
/* 
console.log(4 === 3)  // false
console.log(5 > 2)    //  true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   //  true
console.log(11 <= 11) // true
console.log(3 <= 2)   // true
 */

/* Lesson 9: Add the isAlive variable */
/* 
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;


// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false;
}

// 3. Log it out to check that you're doing it right
console.log(isAlive)
 */

/* Lesson 8: Add the hasBlackJack variable */
/* 
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
}

// CASH OUT!
console.log(hasBlackJack)
 */

/* Lesson 7: Aside: Booleans */
/* 
let hasDiscountCode = true

function processOrder() {
    if (hasDiscountCode) {
        console.log('Discount applied to food order')
        hasDiscountCode = false
    } else {
        console.log('No discount applied')
    }
}

processOrder()
processOrder()
 */

/* Lesson 6: The if...else statement for our game ✔️*/
/* 
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if(sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if(sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
 */

/* Lesson 5: if/else...if/else statement ✔️*/
/* 
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if(age < 100) {
    console.log("Not elegible")
} else if(age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}
 */

/* Lesson 4: Your first if...else statement ✔️*/
/* 
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if(age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}
 */

/* Lesson 3: If...else conditionals ✔️*/
/* 
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6 // 23

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
 */

/* Lesson 2: Add the firstCard, secondCard, and sum ✔️*/
/* 
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
*/

/* 
let firstCard = 4
let secondCard = 9

let sum = firstCard + secondCard
 */

/* Lesson 1: Let's build a Blackjack game! ✔️*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a Blackjack Game"
const chapterNum = 3
const lesson = [
    "Let's build a Blackjack game!",
    "Add the firstCard, secondCard, and sum",
    "If...else conditionals",
    "Your first if...else statement",
    "if/else...if/else statement",
    "The if...else statement for our game",
    "Aside: Booleans",
    "Add the hasBlackJack variable",
    "Add the isAlive variable",
    "Let's practice boolean conditions",
    "Add the message variable",
    "Link to stylesheet",
    "Add basic styling",
    "Make the start button work",
    "Display the message",
    "Display the sum",
    "Display the cards",
    "New card button",
    "Add to the sum when newCard is clicked",
    "Rename the startGame function",
    "Solving our cards problem with an array",
    "Aside: Intro to arrays",
    "Aside: Array indexes",
    "Arrays with multiple data types",
    "Aside: Array.push() and .pop()",
    "Creating the cards array",
    "Push a new card to the array",
    "Aside: Loops",
    "Write your first loop",
    "Aside: For loops and arrays",
    "Write your first array-based for loop",
    "For loops, arrays, and DOM",
    "Use a loop to render cards",
    "How can we avoid to hard-code card values?",
    "Aside: Returning values in functions",
    "Use a function to set the card values",
    "Aside: Math.random()",
    "Math.random() * 6",
    "Flooring the number with Math.floor()",
    "Using Math.random() and Math.floor() to create a dice",
    "Completing our dice function",
    "Make getRandomCard() work",
    "Complete getRandomNumber function",
    "Assign values in the startGame function",
    "Our new card feature is broken",
    "Aside: The AND operator (&&)",
    "Write your first logical operator",
    "Aside: The OR operator (||)",
    "Only trigger newCard() if you're allowed to",
    "Object sneak peek",
    "Aside: Intro to objects",
    "Create your first object",
    "Use an object to store player data",
    "Methods on object",
    "AI for Coding Students",
    "Congrats & recap",
    "",
    "JavaScript Challenges",
    "Objects and functions",
    "if else",
    "Loops and arrays",
    "push, pop, unshift, shift challenge",
    "Logical operators",
    "Rock papers scissors",
    "EmojiFighter",
    "Sorting fruits",
    "Solo Project - Password Generator"
]
lessonGenerator(chapterName, lesson, chapterNum)
 */