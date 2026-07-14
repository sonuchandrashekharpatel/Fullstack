/* Chapter - 3: Build a Blackjack Game */

/* Lesson 67: Solo Project - Password Generator */


/* Lesson 66: Sorting fruits */
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function putFruitIntoShelf() {
    for(let i = 0; i< fruit.length; i++) {
        if(fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else {
            orangeShelf.textContent += "🍊"
        }
    }
}

putFruitIntoShelf()



/* Lesson 65: EmojiFighter */
/* let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
    let firstFighter = fighters[Math.floor(Math.random() * fighters.length)]
    let secondFighter = fighters[Math.floor(Math.random() * fighters.length)]
    
    stageEl.textContent = firstFighter + " vs " + secondFighter
})
 */

/* Lesson 64: Rock papers scissors */
/* 
let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomIndex () {
    let randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
}
 */

/* Lesson 63: Logical operators */
/* 
let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(weekday === "Friday" && dayOfMonth === 13) {
    console.log("😱")
}
 */

/* Lesson 62: push, pop, unshift, shift challenge */
/* let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop()
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.push("Pakistan")
console.log(largeCountries)
 */

/* Lesson 61: Loops and arrays */
/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
/* 
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log('The 5 largest countries in the world:')
for(let i=0; i< largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
} */

/* Lesson 60: if else */
/* 
let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if(age < 6) {
    console.log("free")
} else if( age >= 6 && age <= 17) {
    console.log("child discount")
} else if( age >= 18 && age <= 26) {
    console.log("student discount")
}else if(age >= 27 && age <= 66){
    console.log("full price")
} else {
    console.log("senior citizen discount")
}
*/

/* Lesson 59: Objects and functions */
/* 
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Sonu",
    age: 25,
    country: "India"
}

function logData() {
    let message = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(message) 
}

logData()
 */

/* Lesson 58: JavaScript Challenges */


/* Lesson 57:  */


/* Lesson 56: Congrats & recap */
/* 
Recap:
.   Arrays
.   Object
.   booleans
.   if else statements
.   coparison operator
.   logical operator
.   for loops
.   The Math Object
.   return statements

*/

/* Lesson 55: AI for Coding Students */
/* 
When you're learning to code:
. Understand what piece of code does
. Knows it's usecases
    . What it's good for, what it's limitations are
. Build muscle memory
    . This only comes with practice - not watching

You will not make it far as a professional developer if you do not understand the code you're writing

1. Make sure you understand it.
2. Verify it from a non-ai source
3. Write it out yourself
4. Ask why does this code work?

AI should enhance your skills, not replace them.

Times to use AI:
. To explain code you don't understand
    . AI can hallucinate (give false info)
    . Other source might be more benefecial

. Debugging
    . Try your best without AI
    . Make sure you understand the bug

. Research Tool
    . You still need traditional research

The Ethics of AI:
. AI has a huge carbon footprint
    . Servers are crunching a lot of data
. AI is trained on content made by people who have not consented 
    and don't get share of the rewards.

*/

/* Lesson 54: Methods on object */
/* 
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
 */

/* Lesson 53: Use an object to store player data */
/* // 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Sonu Patel",
    chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": ₹" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
 */

/* Lesson 52: Create your first object */
/* 
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)

 */
/* Lesson 51: Aside: Intro to objects */
/* 
// Objects - store data in-depth - composite / complex data type
// key-value pairs
// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


console.log( course.tags )
 */

/* Lesson 50: Object sneak peek */


/* Lesson 49: Only trigger newCard() if you're allowed to */
/* let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }
}
 */

/* Lesson 48: Aside: The OR operator (||) */
/* 
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = true

if(likesDocumentaries || likesStartups) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
 */

/* Lesson 47: Write your first logical operator */
/* 
let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if(!hasSolvedChallenge && !hasHintsLeft) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}
 */

/* Lesson 46: Aside: The AND operator (&&) */



/* Lesson 45: Our new card feature is broken */
/* 
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = []
    cards.push(firstCard)
    cards.push(secondCard)

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
 */

/* Lesson 44: Assign values in the startGame function */
/* 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
 */

/* Lesson 43: Complete getRandomNumber function */
/* 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    const rand= Math.floor( Math.random()*13 ) + 1
    if (rand > 10) return 10
    else if(rand === 1) return 11
    else {
        return rand
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
 */

/* Lesson 42: Make getRandomCard() work */
/* let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Make this function return a random number between 1 and 13
function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
 */

/* Lesson 41: Completing our dice function */
/* 
// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    console.log(randomNumber)
    return randomNumber
}
 */

/* Lesson 40: Using Math.random() and Math.floor() to create a dice */
/* 
let randomNumber = Math.floor( Math.random() * 6)

console.log(randomNumber) */

/* 

Write down all the possible values randomNumber can hold now!

 0, 1, 2, 3, 4. 5

*/

/* Lesson 39: Flooring the number with Math.floor() */
/* 
let flooredNumber = Math.floor(2.45632)

console.log(flooredNumber)
 */

/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the  numbers after the point and return the complete whole number downward.

*/

/* Lesson 38: Math.random() * 6 */
/* 
let randomNumber = Math.random() * 6

console.log(randomNumber) */

/* 

In which range will our randomNumber be now?

From: 0
To: 5.999999

*/

/* Lesson 37: Aside: Math.random() */
/* 
let randomNumber = Math.random()

console.log(randomNumber)
 */

/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/
/* Lesson 36: Use a function to set the card values */
/* 
// 2. Use getRandomCard() to set the values of firstCard and secondCard

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
 */
/* Lesson 35: Aside: Returning values in functions */
/* 
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if(player1Time < player2Time) {
        return player1Time
    } else if(player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime() {
    return player1Time + player2Time
}

let totalTime = totalRaceTime()

console.log(totalTime) */

/* Lesson 34: How can we avoid to hard-code card values? */


/* Lesson 33: Use a loop to render cards */
/* 
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    // Create a for loop that renders out all the cards instead of just two
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}
 */

/* Lesson 32: For loops, arrays, and DOM */
/* 
let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for(let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
} 
 */
/* Lesson 31: Write your first array-based for loop */
/* 
let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for(let i = 0; i < cards.length; i++){
    console.log([i])
}
 */

/* Lesson 30: Aside: For loops and arrays */


/* Lesson 29: Write your first loop */
/* 
for (let i = 0; i < 6; i += 1) {
    console.log(i)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for(let i = 10; i <= 100; i += 10) {
    console.log(i)
}
 */
/* Lesson 28: Aside: Loops */
/* 
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}
 */

/* Lesson 27: Push a new card to the array */
/* 
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
}
 */

/* Lesson 26: Creating the cards array */
/* 
let firstCard = 10
let secondCard = 4
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards= [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    renderGame()
}
 */

/* Lesson 25: Aside: Array.push() and .pop() */
/* 
let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop()

 */

/* Lesson 24: Arrays with multiple data types */
/* 
// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let info = [
    "Sonu Patel",
    24,
    true
]
 */

/* Lesson 23: Aside: Array indexes */
/* 
// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",        // 0 
    "Here's the code for my project",    // 1
    "I've just relaunched my portfolio"  // 2
]

console.log( featuredPosts[2] )

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])
 */

/* Lesson 22: Aside: Intro to arrays */
/* 
// Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
let Bio = [
    "fullstack developer course completed at scrimba",
    "Graduted in BTech in Computer Science and Engineering",
    "Typescript, JavaScript, HTML/CSS"
]
 */

/* Lesson 21: Solving our cards problem with an array */


/* Lesson 20: Rename the startGame function */
/* 
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 3
    sum += card
    renderGame()
}
 */

/* Lesson 19: Add to the sum when newCard is clicked */
/* 
let firstCard = 10
    // 1. Create a card variable, and hard code its value to a number (2-11)
    
    // 2. Add the new card to the sum variable
    
    // 3. Call startGame()
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 3
    sum += card
    startGame()
}
 */

/* Lesson 18: New card button */


/* Lesson 17: Display the cards */
/* 
// 2. Store the cards paragraph in a variable called cardsEl
// // 3. Render the cars on the page using this format -> "Cards: 10 4"

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function newCard() {
    console.log("Drawing a new card from the deck!")
}
 */

/* Lesson 16: Display the sum */
/* 
// 2. Store the sum paragraph in a variable called sumEl
// 3. Render the sum on the page using this format -> "Sum: 14"

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}
 */

/* Lesson 15: Display the message */
/* 
// 1. Store the message-el paragraph in a variable called messageEl
// 2. Display the message in the messageEl using messageEl.textContent

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl

// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}
 */

/* Lesson 14: Make the start button work */
/* 

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    console.log(message)

}
 */

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