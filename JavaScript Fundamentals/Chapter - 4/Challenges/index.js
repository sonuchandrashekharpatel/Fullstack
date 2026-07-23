/* Chapter - 4.2: JavaScript Challanges - part 3 */

/* Lesson 9: Solo Project - Unit converter */


/* Lesson 8: Convert string to number challenge */
// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it


const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`



/* Lesson 7: Rounding numbers */
/* // Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice.toFixed(2) }`

 */

/* Lesson 6: Render images */

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function getImages() {
  let images = ""
  for(let i = 0; i< imgs.length; i++) {
    images +=`<img class="team-img" src=${imgs[i]} />`
  }

  return images
}

const container = document.getElementById("container")

container.innerHTML = getImages()

/* Lesson 5: Generate sentence */
/* 
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let items = ""
    for(let i = 0; i< arr.length; i++) {
        if(i < arr.length - 1) items += arr[i] + ", "
        if(i === arr.length - 1) items += arr[i]
    }
    return `The ${arr.length} ${desc} are ${items}`
}

console.log(generateSentence("largest countries", ["China", "India", "USA"]))
 */
/* Lesson 4: addEventListener and object in array */
/* 
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

const button = document.getElementById("button")

button.addEventListener("click", function() {
    console.log(data[0].score)
})
// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
 */


/* Lesson 3: save to localStorage */
/* 
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("name", "Sonu Patel")

console.log(localStorage.getItem("name"))
 */
/* Lesson 2: Log out items in an array */
/* 
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function arrayLogger(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

arrayLogger(myCourses)
 */
/* Lesson 1: let & const */
/* 
// SETTING THE STAGE
const  player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
 */

/* 
import lessonGenerator from "../../../Aside/index.js"

const chapterName = "JavaScript Challanges - part 3"
const chapterNum = 4.2
const lesson = [
  "let & const",
  "Log out items in an array",
  "save to localStorage",
  "addEventListener and object in array",
  "Generate sentence",
  "Render images",
  "Rounding numbers",
  "Convert string to number challenge",
  "Solo Project - Unit converter"
];
lessonGenerator(chapterName, lesson, chapterNum) 
 */
