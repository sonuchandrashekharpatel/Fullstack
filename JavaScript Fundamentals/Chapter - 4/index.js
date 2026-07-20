/* Chapter - 4: Build a Chrome Extension */

/* Lesson 54: Congrats & recap */


/* Lesson 53: Deploy the final version */


/* Lesson 52: Use the Chrome API to get the tab */


/* Lesson 51: How to get the current tab? */


/* Lesson 50: Save the tab url */


/* Lesson 49: Create the tabBtn */


/* Lesson 48: Refactor renderLeads() to use a parameter */


/* Lesson 47: Arrays as parameters */


/* Lesson 46: Aside: Arguments vs Parameters */


/* Lesson 45: Numbers as function parameters */


/* Lesson 44: Functions with multiple parameters */


/* Lesson 43: Write your first function parameter */


/* Lesson 42: How function parameters can improve our code */


/* Lesson 41: Make the delete button work */


/* Lesson 40: Style the delete button */


/* Lesson 39: Checking localStorage before rendering */


/* Lesson 38: Guess the expression - truthy or falsy? */


/* Lesson 37: Truthy and falsy values */


/* Lesson 36: Get the leads from localStorage */


/* Lesson 35: Save the leads to localStorage */


/* Lesson 34: Storing arrays in localStorage */


/* Lesson 33: Your first localStorage */


/* Lesson 32: What is localStorage? */


/* Lesson 31: Deploying the Chrome Extension */


/* Lesson 30: Preparing the deployment */


/* Lesson 29: Style the list */


/* Lesson 28: Refactor the app to use a template string */


/* Lesson 27: Template strings on multiple lines */


/* Lesson 26: Make the template string even more dynamic */


/* Lesson 25: Write your first template string */


/* Lesson 24: Template strings */


/* Lesson 23: Add the <a> tag */


/* Lesson 22: Clear the input field */


/* Lesson 21: Create the render function */


/* Lesson 20: Improving the performance of our app */
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems




/* Lesson 19: Use createElement() and append() instead of innerHTML */
/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set textContent
    // append to ul

    const li = document.createElement("li")
    li.textContent = myLeads[i]

    ulEl.appendChild(li)
}
 */

/* Lesson 18: Render the <li> elements with innerHTML */
/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
 */

/* Lesson 17: More innerHTML practice */
/* 
// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
*/

/* 
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>"
}
 */

/* Lesson 16: Write your first innerHTML */
/* 
// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container")

container.innerHTML = "<button>" + "Buy!" + "</button>"
 */

/* Lesson 15: How to render <li> elements with innerHTML */
/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
 */
/* Lesson 14: Render the leads in the unordered list */
/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}
 */

/* Lesson 13: Create the unordered list */
/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
 */

/* Lesson 12: Use a for loop to log out leads */
/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Log out the items in the myLeads array using a for loop 

for(let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}
 */

/* Lesson 11: Push the value from the input field */
/* 
// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
 */



/* Lesson 10: Push to the myLeads array */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
    
    myLeads.push("www.awesomelead.com")
})
 */

/* Lesson 9: When to use let and const */
/* 
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
 */

/* Lesson 8: Create the myLeads array and inputEl */

/* 
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
 */

/* 
let myLeads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    console.log("Button clicked!")
}) */

/* Lesson 7: Your turn to refactor */
/* 
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button
 */

/* 
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    console.log("Button clicked!")
})
 */

/* Lesson 6: Write your first addEventListener() */
/* 
// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked
 */

/* 
const box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box!")
})
 */

/* Lesson 5: Refactor to addEventListener */
/* 
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    console.log("Button clicked!")
})
 */

/* Lesson 4: Make the input button work with onclick */
/* 
function saveLead() {
    console.log("Button clicked!")
}
 */

/* Lesson 3: Style the button and input tag */


/* Lesson 2: Add button and input tag */


/* Lesson 1: Let's build a Chrome Extension! */
/* 

*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a Chrome Extension"
const chapterNum = 4
const lesson = [
  "Let's build a Chrome Extension!",
  "Add button and input tag",
  "Style the button and input tag",
  "Make the input button work with onclick",
  "Refactor to addEventListener",
  "Write your first addEventListener()",
  "Your turn to refactor",
  "Create the myLeads array and inputEl",
  "When to use let and const",
  "Push to the myLeads array",
  "Push the value from the input field",
  "Use a for loop to log out leads",
  "Create the unordered list",
  "Render the leads in the unordered list",
  "How to render <li> elements with innerHTML",
  "Write your first innerHTML",
  "More innerHTML practice",
  "Render the <li> elements with innerHTML",
  "Use createElement() and append() instead of innerHTML",
  "Improving the performance of our app",
  "Create the render function",
  "Clear the input field",
  "Add the <a> tag",
  "Template strings",
  "Write your first template string",
  "Make the template string even more dynamic",
  "Template strings on multiple lines",
  "Refactor the app to use a template string",
  "Style the list",
  "Preparing the deployment",
  "Deploying the Chrome Extension",
  "What is localStorage?",
  "Your first localStorage",
  "Storing arrays in localStorage",
  "Save the leads to localStorage",
  "Get the leads from localStorage",
  "Truthy and falsy values",
  "Guess the expression - truthy or falsy?",
  "Checking localStorage before rendering",
  "Style the delete button",
  "Make the delete button work",
  "How function parameters can improve our code",
  "Write your first function parameter",
  "Functions with multiple parameters",
  "Numbers as function parameters",
  "Aside: Arguments vs Parameters",
  "Arrays as parameters",
  "Refactor renderLeads() to use a parameter",
  "Create the tabBtn",
  "Save the tab url",
  "How to get the current tab?",
  "Use the Chrome API to get the tab",
  "Deploy the final version",
  "Congrats & recap"
]

lessonGenerator(chapterName, lesson, chapterNum) 
 */
