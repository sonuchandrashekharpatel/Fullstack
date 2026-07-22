/* Chapter - 4: Build a Chrome Extension */

/* Lesson 54: Congrats & recap */
/* 
Recap:
    1. const
    2. addEventListener()
    3. innerHTML
    4. input.value
    5. function parameters
    6. template literal
    7. localStorage
    8. The JSON Object
    9. objects in arrays
    
*/

/* Lesson 53: Deploy the final version */


/* Lesson 52: Use the Chrome API to get the tab */


/* Lesson 51: How to get the current tab? */


/* Lesson 50: Save the tab url */
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

/* Lesson 49: Create the tabBtn */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function() {
    console.log(tabs[0].url)
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
 */

/* Lesson 48: Refactor renderLeads() to use a parameter */

/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
 */
/* Lesson 47: Arrays as parameters */
/* 
// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    return arr[0]
}



// Call it with an array as an argument to verify that it works


console.log(getFirst([3,4,5,6,7,2,7]))
*/

/* Lesson 46: Aside: Arguments vs Parameters */
/* 
// What are greeting and name?  parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)
*/

/* Lesson 45: Numbers as function parameters */
/* 
// Create a function, add(), that adds two numbers together and returns the sum



console.log( add(3, 4)   ) // should log 7
console.log( add(9, 102) ) // should log 111

function add(a, b) {
    return a + b
}
*/

/* 
// What are greeting and name?  parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)
*/

/* Lesson 44: Functions with multiple parameters */
/* 

const welcomeEl = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James", "👋")
 */
/* 
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {
    // Rewrite the expression using template literals
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

greetUser("Howdy", "James") */

/* Lesson 43: Write your first function parameter */
/* const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting + " , Per Harald Borgen 👋"    
}

greetUser("Howdy") */

/* Lesson 42: How function parameters can improve our code */


/* Lesson 41: Make the delete button work */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})
// 3. When clicked, clear localStorage, myLeads, and the DOM

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

 */
/* Lesson 40: Style the delete button */


/* Lesson 39: Checking localStorage before rendering */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// 1. Check if leadsFromLocalStorage is truthy

// 2. If so, set myLeads to its value and call renderLeads()
 if(leadsFromLocalStorage.length)  {
    myLeads = leadsFromLocalStorage
    renderLeads()
 } 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
 */

/* Lesson 38: Guess the expression - truthy or falsy? */
/* 
console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) //true
console.log(  Boolean(100)  ) //true
console.log(  Boolean(null) ) //false
console.log(  Boolean([0])  ) //true
console.log(  Boolean(-0)   ) //false
 */

/* Lesson 37: Truthy and falsy values */
/* 
// const credits = 0

// if (credits) {
//     console.log("Let's play 🎰")
// } else {
//     console.log("Sorry, you have no credits 😭")
// }

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let currentViewers = ["jane"]

console.log(currentViewers[5])

*/

/* Lesson 36: Get the leads from localStorage */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage - PS: JSON.parse()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

*/

/* Lesson 35: Save the leads to localStorage */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // PS: remember JSON.stringify()
    
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
 */

/* Lesson 34: Storing arrays in localStorage */

/* 
let myLeads = `["www.awesomelead.com"]`
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)

// 2. Push a new value to the array
myLeads.push("www.epiclead.com")

// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)

// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems  
}

renderLeads()
 */

/* Lesson 33: Your first localStorage */

/* 
let myLeads = ["www.awesomelead.com", "epiclead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// 1. Save a key-value pair in localStorage
// localStorage.setItem("myName", "Sonu Patel")

// Refresh the page. get value and log it to the console

console.log(localStorage.getItem("myName"))

// Clear localStorage

localStorage.clear()


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems  
}

renderLeads()
 */

/* Lesson 32: What is localStorage? */


/* Lesson 31: Deploying the Chrome Extension */


/* Lesson 30: Preparing the deployment */


/* Lesson 29: Style the list */
/* 
let myLeads = ["www.awesomelead.com", "epiclead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems  
}

renderLeads()
 */

/* Lesson Updates: Aside: Convert string to numbers with Number() */
/* 
// reference html elements
const form = document.getElementById('form');
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const resultText = document.getElementById('result');

// form event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // we can convert the strings into numbers using the Number() function
    const numOneVal = Number(numOneInput.value); 
    const numTwoVal = Number(numTwoInput.value);
    
    console.log(`numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`);
    console.log(`numTwoVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`);
    // now the numbers add up correctly
    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
})
 */

/* Lesson 28: Refactor the app to use a template string */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Refactor the code below to use a template string
        listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems  
}

*/

/* Lesson 27: Template strings on multiple lines */
/* 
// template strings/literals

const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const email = `Hey ${recipient}!
How is it going? Cheers 
 
Regards 
${sender}`

console.log(email)
*/

/* Lesson 26: Make the template string even more dynamic */
/* 
// template strings/literals

const recipient = "James"
// Create a new variable, sender, and set its value to your name
const sender = "Per"
// Use your sender variable instead of "Per"
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

console.log(email)
*/

/* Lesson 25: Write your first template string */
/* 
// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
const email = `Hey ${recipient}! How is it going? Cheers Per`

console.log(email)

*/

/* Lesson 24: Template strings */

/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems  
}
renderLeads()
 */

/* Lesson 23: Add the <a> tag */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems  
}
renderLeads()
 */
/* Lesson Updates: Aside: another way to render leads */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    inputEl.value = ""
})

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItems  
// }

*/


/* Lesson 22: Clear the input field */
/* 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems  
}

*/

/* Lesson 21: Create the render function */
/* 
1. Wrap the code below in a renderLeads() function
2. Call the renderLeads() function
*/

/* 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    
    ulEl.innerHTML = listItems
}

renderLeads()
 */

/* Lesson 20: Improving the performance of our app */
/* 
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
ulEl.innerHTML = listItems */


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
