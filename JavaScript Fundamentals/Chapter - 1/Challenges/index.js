/* Chapter - 1: JavaScript Challenges */

/* Lesson 8: Figma tutorial */


/* Lesson 7: Arithmetic Operator Precedence */
/* 
Operator Precedence
. BODMAS

. Multiply and divide come first, then add and subtract
. The calculation is evaluated from left to right
. Overrride operator precedence by putting parentheses () 
    around the part you want to be executed first.
*/
/*
Challenge:
1. The following expression should calculate total expenses 
   for a trip, but it has a problem. It is giving me 548 but 
   I think that is too cheap. Have a look, and see if you can 
   figure out what problem we have with operator precedence and 
   change the code so we log out the correct cost of the trip.
*/

/* 
const tripLengthDays = 2
const tripDistanceKM = 300
const fuelPricePerKM = 1.5
const hotelCostPerNight = 60
const hotelDiscountPerNight = 6
const foodCost = 50

const totalCost = foodCost + (tripDistanceKM * fuelPricePerKM) + (hotelCostPerNight - hotelDiscountPerNight) * tripLengthDays

console.log(totalCost)
*/

/* Lesson 6: Calculator challenge */
/* 
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let result;

function add() {
    result = num1 + num2 
    sumEl.textContent = "Sum: " + result;   
}

function subtract() {
    result = num1 - num2
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    result = num1 * num2
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    result = num1 / num2
    sumEl.textContent = "Sum: " + result;
}
 */
/* Lesson 5: Rendering an error message */
/* 
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorPara = document.getElementById("error")

function purchase() {
    errorPara.textContent = "Something went wrong, please try again"
}

 */
/* Lesson 4: Strings and numbers */
/* // Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114
 */


/* Lesson 3: Incrementing and decrementing */
/* 
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}


// Call the functions to that the line below logs out 10
add3Points()
add3Points()
add3Points()

remove1Point()
remove1Point()

console.log(myPoints)
 */
/* Lesson 2: Concatenate two strings in a function */
/* let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function greet() {
    console.log(greeting + ", " + name + "!")
}

greet()
 */
/* Lesson 1: Variables practice */

/* 
// Create two variables, firstName and lastName

let firstName = "Sonu"
let lastName = "Patel"
// Concatenate the two variables into a third variable called fullName

let fullName = firstName + " " + lastName
// Log fullName to the console

console.log(fullName)
 */

/* 
import lessonGenerator from "../../../index.js"

const chapterName = "JavaScript Challenges"
const chapterNum = 1
const lesson = [
  "Variables practice",
  "Concatenate two strings in a function",
  "Incrementing and decrementing",
  "Strings and numbers",
  "Rendering an error message",
  "Calculator challenge",
  "Arithmetic Operator Precedence",
  "Figma tutorial",
]

lessonGenerator(chapterName, lesson, chapterNum) 
 */
