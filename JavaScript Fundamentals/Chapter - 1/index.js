/* Lesson 1: Let's build a passanger counter app! */
/* Chapter - 1: Build a Counter App */

/* Lesson 28: Recap */
/* 
Recap:
1. script tag
2. variables
3. numbers
4. strings
5. console.log()
6. functions
7. The DOM
8. getElementById()
9. innerText
10. textContent

*/

/* Lesson 27: Set the count to 0 👻*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count
}


/* Lesson 26: Debugging online */
/* 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr
    console.log(count)
}
 */
/* Lesson 25: Create the save feature 👻*/

// 1. Grab the save-el paragrah and store it in a variable called saveEl
/* 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "

    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
 */



/* Lesson 24: Use plus equal for count 👻*/
/* 
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
 */

/* Lesson 23: Improve the message with string concatenation 👻*/
/* 
let welcomeEl = document.getElementById("welcome-el")

let name = "Sonu Patel"
let greeting = "Welcome back "

let greetingMessage = greeting + name

welcomeEl.innerText = greetingMessage

welcomeEl.innerText = welcomeEl.innerText + " 👋" */

/* Lesson 22: Render a welcome message 👻*/
/* 
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")

let name = "Sonu Patel"
let greeting = "Welcome back "

let greetingMessage = greeting + name

welcomeEl.innerText = greetingMessage
 */

/* Lesson 21: Escape! */
/* 
\ = Escape Character
*/
/* 
let wish = 'I\'d love to see the show \"The lion King\" '

console.log(wish)
 */
/* Lesson 20: Strings vs. Numbers 👻*/
/* 
let name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

console.log(4 + 5) // 9
console.log("2" + "4")// 24
console.log("5" + 1) // 51
console.log(100 + "100") // 100100
 */
/* Lesson 19: Log a greeting to the console 👻*/
/* 
Create two variables, name and greeting. The name variable should store your name,
and the greeting should store e.g. "Hi, my name is "

Create a third variable, myGreeting, that contatenates the two strings
Log myGreeting to the console 
*/
/* 
let name = "Sonu"
let greeting = "Hi, my name is "
let myGreeting = greeting + name

console.log(myGreeting) */

/* Lesson 18: Write your first string variable 👻👻*/
/* 
let username = "Sonu"
// Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)
 */
/* Lesson 17: What is a string? */


/* Lesson 16: Create the save button 👻*/
/* 
// 1. Create a function, save(), which logs out the count when it's called
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
} 

function save() {
    console.log(count)
}
 */

/* Lesson 15: Display the count with innerText 👻*/
/* 
// grab the count-el element, store it in a countEl variable
// set countEl's innerText to the count

*/

/* 
let countEl = document.getElementById("count-el")

let count = 0;
function increment() {
    count = count + 1
    countEl.innerText = count
}
 */

/* Lesson 14: The Document Object Model */
/* 
The DOM
Document Object Model
*/

/* Lesson 13: Display the count */
/* 
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
 */

/* Lesson 12: Increment on clicks 👻*/
/* 
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

*/
/* 
let count = 0

function increment() {
    count = count + 1;
    console.log(count)
    document.getElementById("count-el").innerText = count
}
 */
/* Lesson 11: Write a function that increments 👻*/
/* 
    Create a function that increments the lapsCompleted variable with one
    Run it three times

*/

/* 
let lapsCompleted = 0

function increment(){
    lapsCompleted = lapsCompleted + 1
}

increment()
increment()
increment()

console.log(lapsCompleted)
 */


/* Lesson 10: Write a function that logs the sum 👻*/
/* 
let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function lapTime() {
    let totalTime = lap1 + lap2 + lap3

    console.log(totalTime)
}

lapTime()
 */

/* Lesson 9: Write your first function 👻*/
/* 
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function myLogger() {
    console.log(42)
}

myLogger()
*/

/* Lesson 8: Using functions to write less code */

/* 
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()
 */

/* Lesson 7: The onclick event listener */
/* 
// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    console.log("The button was clicked")
}
 */

/* Lesson 6: Adding a button 👻*/


/* Lesson 5: Reassigning and incrementing 👻*/
/* let count = 5
count = 3

count = count + 1 // 3 + 1 = 4

console.log(count) // 4 
*/

/* 
let count = 5
count = count + 1
console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusVariable = 50
 bonusVariable = bonusVariable + 50
 
// Decrease it down to 25, and then finally increase it to 70
bonusVariable = bonusVariable - 75
bonusVariable = bonusVariable + 45

// Console.log the value after each step
console.log(bonusVariable)
*/

/* Lesson 4: Basic mathematical operations 👻*/
/* 
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

let myAge = 25
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio
console.log(myDogAge)
 */

/* Lesson 3: Write your first JavaScript variable 👻*/
/* 
// document.getElementById("count-el").innerText = 5


let count = 0

console.log(count)

// 1. Create a variable, myAge, and set its value to your age
let myAge = 25

// 2. Log the myAge variable to the console
console.log(myAge)
 */

/* Lesson 2: Setting up our JavaScript file */


/* Lesson 1: Let's build a passenger counter app! */


/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a Counter App"
const chapterNum = 1
const lesson = [
  "Let's build a passenger counter app!",
  "Setting up our JavaScript file",
  "Write your first JavaScript variable",
  "Basic mathematical operations",
  "Reassigning and incrementing",
  "Adding a button",
  "The onclick event listener",
  "Using functions to write less code",
  "Write your first function",
  "Write a function that logs the sum",
  "Write a function that increments",
  "Increment on clicks",
  "Display the count",
  "The Document Object Model",
  "Display the count with innerText",
  "Create the save button",
  "What is a string?",
  "Write your first string variable",
  "Log a greeting to the console",
  "Strings vs. Numbers",
  "Escape!",
  "Render a welcome message",
  "Improve the message with string concatenation",
  "Use plus equal for count",
  "Create the save feature",
  "Debugging online",
  "Set the count to 0",
  "Recap"
];

lessonGenerator(chapterName, lesson, chapterNum) 
 */