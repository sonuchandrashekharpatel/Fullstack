// Chapter 1: Build a Passanger Counter App

/* //  Lesson 28: Learning in public

    Benifits:
        1. Solidify your learning
        2. Build your network
        3. Help Others
    
    The stair step approach

    01 Comment on someone's post 
    02 Share your wour post
    03  Create long form content

    Reddit 
    scrimba

    Important
    01 Always focus on providing value
    02 Treat people well
    03 Don't take anything personally

 */

/* //  Lesson 27: Congrats & recap

    1. script tag
    2. variables
    3. numbers
    4. strings
    5. console.log()
    6. functions
    7. The DOM
    8. innerText
    9. textContent
 */

/* //  Lesson 26: Deploy with Netlify 
//  Lesson 27: Personalize and Download your App
 
//  Lesson 26: Set the count 0
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
    count = 0;
    countEl.innerText = count;
} */

/* //  Lesson 25: Debugging online
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
}

// Google:
// innerText alternative mdn  */

/* // Lesson 24: Create the save feature
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let string1 =  " "+ count + " - ";
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEl.innerText += string1;
    console.log(count)
} */

/* //  Lesson 23:  use plus equal for count
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
   // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
} */

/* //  Lesson 22: Improve the message with string concatenation
let welcomeEl = document.getElementById("welcome-el");

let name = "Sonu Patel"
let greeting = "Welcome back " 
let message = greeting + name
welcomeEl.innerText = message;
console.log(message);

welcomeEl.innerText = welcomeEl.innerText + "👋";
welcomeEl.innerText += " 👋";

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1 */

/* // Lesson 21: Render a welcome message
let welcomeEl = document.getElementById("welcome-el");

let name = "Sonu Patel"
let greeting = "Welcome back " 
let message = greeting + name";
welcomeEl.innerText = message;
console.log(message); */

/* // Lesson 20: String vs Numbers
let name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name;
console.log(myGreeting);

let points = 4;
let bonusPoints = "10";
let totalPoints = points + bonusPoints;
console.log(totalPoints);

console.log(4 + 5) // 9
console.log("2" + "4") // 24
console.log("5" + 1); // 51
console.log(100 + "100"); // 100100
 */

/* // Lesson 19: Love a greeting to the console
let name = "Sonu Patel";
let greeting = "Hi, my name is ";
let myGreeting = greeting +  name;
console.log(myGreeting); */

/* // Lesson 18: Write your first string variable 
Create a variable, message, that stores the string: "You have tree new notifications"
let username = 'sonu'
let message = "You have three new notifications"
let messageToUser = username + ", " + message +"!"
console.log(messageToUser); */

/* // Lesson 17: What is  a string? */

/* // Lesson 16: Create the save button

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1
    countEl.innerText = count;
}

function save() {
    console.log(count);
} */

/* //  Lesson 15: Display the count with innerText

let countEl = document.getElementById("count-el");

let count = 0;

console.log(countEl)

function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
} */

/* //  Lesson 14: DOM
 DOM = Document Object Model => How to modify the website  */

/* //  Lesson 13: Display the count
document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase

let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0
function increment() {
    count = count + 1;
    console.log(count);
    countEl.innerText = count;
} */

/* //  Lesson 12: Increments on clicks 
document.getElementById("count").innerText = 5

let count = 5
count = count + 1
console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
function increment() {
    count = count + 1;
    console.log(count)
} */

/* //  Lesson 11: Wtite a function that increments
let lapCompleted = 0

function incrementLap() {
    lapCompleted = lapCompleted + 1
}

incrementLap()

incrementLap()

incrementLap()

console.log(lapCompleted); */

/* //  Lesson 10: Write a function that logs the sum 
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
function sumLapTime() {
    let sum = lap1 + lap2 + lap3;
    console.log(sum);
}

sumLaps(); */

/* //  Lesson 9: Write your first function
function myLogger() {
    console.log(42);
}

myLogger(); */

/* //  Lesson 8: Using function to write less code
function coundown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
// Setting up the the race 🏎 🏎 🏎
coundown();

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
coundown(); */

/* // Lesson 7: The onclick event listener
function increment() {
    console.log("The button was clicked");
} */

/* // Lesson 6: Adding a button */

/* // Lesson 5: Reassigning and incrementing
let count = 5

count = 3

count = 1
console.log(count)

let count = 5;

count = count + 1;
count = count - 3; // 5 + 1 = 6
console.log(count);


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
let bonusPoints = 50
bonusPoints = bonusPoints + 100;
console.log(bonusPoints);

bonusPoints = bonusPoints - 25
console.log(bonusPoints);

bonusPoints = bonusPoints + 70
console.log(bonusPoints); */

/* // Lesson 4: Basic mathmetical operations
let count = 5 + 7
let count = 5 - 2
let firstBatch = 5
let secondBatch = 7
let count = firstBatch + secondBatch
console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
let myAge = 22
let humanDogRatio = 7

let myDogAge =  myAge * humanDogRatio
console.log(myDogAge) */

/* // Lesson 3: Write your first JavaScript variable 
let count = 0
console.log(count);
1. Create a variable, myAge, and set its value to your age
let myAge = 22;
2. Log the myAge variable to the console
console.log(myAge); */

/* Lesson 2: Setting up our JavaScript file
document.getElementById("count-el").innerText = 5; */
/* 

*/

/* Lesson 1: Let's build a passanger counter app! */
/* Chapter - 1: Build a Counter App */

/* Lesson 28: Recap */


/* Lesson 27: Set the count to 0 👻*/


/* Lesson 26: Debugging online */


/* Lesson 25: Create the save feature 👻*/


/* Lesson 24: Use plus equal for count 👻*/


/* Lesson 23: Improve the message with string concatenation 👻*/


/* Lesson 22: Render a welcome message 👻*/


/* Lesson 21: Escape! */


/* Lesson 20: Strings vs. Numbers 👻*/


/* Lesson 19: Log a greeting to the console 👻*/


/* Lesson 18: Write your first string variable 👻👻*/


/* Lesson 17: What is a string? */


/* Lesson 16: Create the save button 👻*/


/* Lesson 15: Display the count with innerText 👻*/


/* Lesson 14: The Document Object Model */


/* Lesson 13: Display the count */


/* Lesson 12: Increment on clicks 👻*/


/* Lesson 11: Write a function that increments 👻*/


/* Lesson 10: Write a function that logs the sum 👻*/


/* Lesson 9: Write your first function 👻*/


/* Lesson 8: Using functions to write less code */


/* Lesson 7: The onclick event listener */


/* Lesson 6: Adding a button 👻*/


/* Lesson 5: Reassigning and incrementing 👻*/


/* Lesson 4: Basic mathematical operations 👻*/


/* Lesson 3: Write your first JavaScript variable 👻*/


/* Lesson 2: Setting up our JavaScript file */
/* 

*/

/* Lesson 1: Let's build a passenger counter app! */
/* 

*/


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