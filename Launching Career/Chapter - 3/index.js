/* Chapter - 3: JavaScript Interview Challenges */

/* Lesson 57: Solution - Emoji Flower Bed */


/* Lesson 56: Challenge - Emoji Flower Bed */
/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr){
    return arr.filter(emoji => emoji.group === "animal bug" || emoji.group === "plant flower")
}


fetch(api) 
    .then(response => response.json())
    .then((data) => {
        clearTheGarden(data).forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });    
    })
    .catch(err => console.log(err));




/* Lesson 55: Solution - Find Anagrams in an Array */


/* Lesson 54: Challenge - Find Anagrams in an Array */
/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */
/* 
const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

function getSorted(str) {
    return str.toLowerCase().split("").sort().join("").trim()
}


function isAnagramInArray(anagram, arr){
    const phrase = getSorted(anagram)
    console.log(phrase)
    return arr.filter(text => phrase === getSorted(text))
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
 */

/* Lesson 53: Solution - Save the Weekend */


/* Lesson 52: Challenge - Save the Weekend */

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 
/* 
import podcasts from "./data.js";

function getHostNames(arr) {
    let hostNames = ""
    for(let i=0; i<arr.length; i++){
        if(i === arr.length - 1) {
            hostNames += arr[i]
        } 
        else if(i < arr.length - 2) {
            hostNames += arr[i] + ", "
        } 
        else if(i === arr.length - 2) {
            hostNames += arr[i] + " and "
        }
    }
    return hostNames
}

function createDescriptionsFor(data){
    return data.map(podcast => {
        const {title, duration, tags, hosts} = podcast

        const description = `${title} is a ${duration} minute ${tags[0]} podcast hosted by ${getHostNames(hosts)}.`

        return {
            ...podcast,
            description
        }
    })
}

console.log(createDescriptionsFor(podcasts))
 */

/* Lesson 51: Solution - Night at the Scrimbies */


/* Lesson 50: Challenge - Night at the Scrimbies */

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 
/* 
import podcasts from "./data.js";

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
   return data.reduce((acc, curr) => [...acc, ...curr.hosts], [])
}

function assignAwards(data){
    const hosts = getHosts(data)
    return hosts.map(host => {
        const randomAward = awards[Math.floor(Math.random() * awards.length)]
        return `${randomAward} ${host}` 
    })
}

console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));
 */

/* Lesson 49: Solution - Popularity Contest */


/* Lesson 48: Challenge - Popularity Contest */

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/
/* 
import postData from "./data.js";

function calcAverageLikes(data){
  return data.reduce((acc, curr) => acc + curr.likes, 0)
  
} 


console.log(calcAverageLikes(postData))
 */

/* Lesson 47: Solution - Welcome Aboard Scrimba Airlines */


/* Lesson 46: Challenge - Welcome Aboard Scrimba Airlines */



/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/
/* 
import podcasts from "./data.js";
function sortByDuration(data, flightLength){
    data.sort((a, b) => flightLength > 60 ? 
            b.duration - a. duration :
            a.duration - b.duration
        ).forEach((podcast, index) => {
            console.log(`${index}. ${podcast.title}, ${podcast.duration} minutes`)
        })
}

sortByDuration(podcasts, 61);

 */
/* Lesson 45: Solution Pt 2: Collect Unique Genre Tags */


/* Lesson 44: Solution Pt 1: Collect Unique Genre Tags */


/* Lesson 43: Challenge - Collect Unique Genre Tags */

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 
/* 
import mediaData from "./data.js";

function getUniqueTags(data){
    const flatArr = data.map(item => item.tags).flat()
    console.log(flatArr)
    return [ ...new Set(flatArr)]

}

console.log(getUniqueTags(mediaData));
 */


/* Lesson 42: Solution - Holiday Gift Shopping */


/* Lesson 41: Challenge - Holiday Gift Shopping */

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/
/* 
import products from "./data.js";
function sortProducts(data){
    const sorted = data.sort((a, b) => a.price - b.price)
    let list = ""
    sorted.forEach(item => {
        list += `${item.product}, ${item.price} \n`
    })

    return list
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);
 */



/* Lesson 40: Solution - Total Savory Items */


/* Lesson 39: Challenge - Total Savory Items */

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

/* 
import shoppingCart from "./data.js";
function totalSavory(arr){
    return arr.reduce((acc, curr) => acc + curr.price , 0)
}

console.log(totalSavory(shoppingCart));

 */

/* Lesson 38: Solution - Shopping Cart */


/* Lesson 37: Challenge - Shopping Cart */

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/
/* 
import shoppingCart from "./data.js";
function total(arr){
    return arr.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
}

console.log(total(shoppingCart));
 */

/* Lesson 36: Solution - Candy Sale */


/* Lesson 35: Challenge - Candy Sale */

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

/* 
import products from "./data.js";

function getSaleItems(data){
    return data.map(({price, item}) => {
        return {
            item,
            price
        }
    } )
};

console.log(getSaleItems(products))
 */
/* Lesson 34: Solution - Find Free Podcasts */


/* Lesson 33: Challenge - Find Free Podcasts */

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
    ]
    */
/*   
import podcasts from "./data.js";
function getFreePodcasts(data){
    return data.filter(pod => !pod.paid).map(podcast => {
        const {title, rating, paid} = podcast
        return {title, rating, paid}
    })
}

console.log(getFreePodcasts(podcasts))
 */

/* Lesson 32: Solution - Pizza Night? */


/* Lesson 31: Challenge - Pizza Night? */
/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 
/* 
const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    let food = ""
    let vote = 0
    for(let item in gameNightFood) {
        if(gameNightFood[item] > vote) {
            food = item
            vote = gameNightFood[item]
        }
    }
    return `The winner is ${food} with ${vote} votes!`
}

console.log(findTheWinner(gameNightFood));
 */
/* Lesson 30: Solution - Count the Scrimba Students */


/* Lesson 29: Challenge - Count the Scrimba Students */
/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */
/* 
const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    const initialValue = 0
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
}

console.log(sumArray(studentCount));
 */

/* Lesson 28: Solution - Pumpkin's Prizes */


/* Lesson 27: Challenge - Pumpkin's Prizes */

/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

/* 
const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

const a = []
a.push(...[1, 2, 3, 7])
console.log(a)

function flatten(arr){
    // return arr.flat()

    const flatArr = []
    arr.forEach(item => {
        if(Array.isArray(item)) {
            flatArr.push(...item)
        } else {

            flatArr.push(item)
        }
    })

    return flatArr
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
 */

/* Lesson 26: Solution Pt 2: Chef Mario's Recipe Book */


/* Lesson 25: Solution Pt 1: Chef Mario's Recipe Book */


/* Lesson 24: Challenge: Chef Mario's Recipe Book */
/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 
/* 
const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]

function removeDupesFromArray(arr){
    const dupesRecipe = {}
    return arr.filter(recipe => {
        if(dupesRecipe[recipe]) return false
        dupesRecipe[recipe] = true
        return true
    })
}

console.log(removeDupesFromArray(eggScrambleRecipe));
 */

/* Lesson 23: Solution - Frequency of Letters in Your Name */


/* Lesson 22: Challenge - Frequency of Letters in Your Name */
/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

/* 
function countChars(str){
    const letterFreq = {}
    str.toLowerCase().split(" ").join("").split("").forEach(char => {
        if(letterFreq[char]){
            letterFreq[char] += 1
        } else {
            letterFreq[char] = 1
        }
   })
   return letterFreq
}

console.log(countChars("Anshika Patel"));
 */
/* Lesson 21: Solution - Save Grandpa's Password */


/* Lesson 20: Challenge - Save Grandpa's Password */
/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 

/* 
const password = "aabb1212"; 
 
function removeDupeChars(chars){
    const dupesChars = {}

    return password.split("").filter( char => {
        if(dupesChars[char]) return false
        dupesChars[char] = true
        return true
    }).join("")
}

console.log(removeDupeChars(password));
 */

/* Lesson 19: Solution - Palindromes */


/* Lesson 18: Challenge - Palindromes */
/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/
/* 
function reverseString(str) {
    return str.split("").reverse().join("")
}

function isPalindrome(str){
    return str === reverseString(str.toLowerCase())
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
 */

/* Lesson 17: Solution - Decode an Alien Message */


/* Lesson 16: Challenge - Decode an Alien Message */
/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 
/* 
const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]
 */
/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  
/* 
function reverseString(str){
    return str.split("").reverse().join("");
}
 */
/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 
/* 
function reverseStringsInArray(arr){
    return arr.map(text => reverseString(text));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
 */

/* Lesson 15: Solution - Is It an Anagram? */


/* Lesson 14: Challenge: Is it an Anagram? */
/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 
/* 
function sort(str){
    return str.split("").sort().join("")
}

function isAnagram(str1, str2){
    return sort(str1) == sort(str2)
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
 */




/* Lesson 13: Solution - Emojify! */


/* Lesson 12: Challenge - Emojify! */
/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/
/* 
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}
 */
/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 
/* 
function emojifyWord(word){
    const condition = word.startsWith(":") &&
        word.startsWith(":") &&
        emojis[word.slice(1, -1)]

    if(condition) {
        return emojis[word.slice(1, -1)]
    } else if(word.startsWith(":") && word.startsWith(":")) {
        return word.slice(1, -1)
    } else {
        return word
    }
}
 */
/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 
/* 
function emojifyPhrase(phrase){
    
    return phrase.split(" ").map(word => emojifyWord(word)).join(" ")
}



console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
 */

/* Lesson 11: Solution - Definitely Not FizzBuzz */


/* Lesson 10: Challenge - Definitely Not FizzBuzz */
/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */
/* 
function awardBonuses(){
    let award = ""
    for(let i=1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            award = "JACKPOT! 1 Million and a Yacht!"
        } 
        else if(i % 3 === 0) {
            award = "Vacation!"
        }
        else if(i % 5 === 0) {
            award = "$100,000 bonus!"
        } 
        else {
            award = ":("
        }

        console.log(`${i} - ${award}`)
    }
}

awardBonuses();
 */
/* Lesson 9: Solution - toTitleCase() */


/* Lesson 8: Challenge - toTitleCase() */
/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

/* 
function capitalizeWord(word){

    return word[0].toUpperCase() + word.slice(1);
}
 */
/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 
/* 
function toTitleCase(str){
    return str.split(" ").map( word => capitalizeWord(word)).join(" ")
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
 */
/* Lesson 7: Solution - Alternating Caps */


/* Lesson 6: Challenge - Alternating Caps */
/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/
/* 
function altCaps(str){
    const newStr = str.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join("")
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
 */
/* Lesson 5: Solution - Shh... Whisper Function */


/* Lesson 4: Challenge - Shh... Whispering Function */
/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
/* 
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
 */

/* Lesson 3: Solution - Panic Function */


/* Lesson 2: Challenge - Panic Function */
/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

/* 
function panic(str) {
    return str.toUpperCase().split(" ").join(" 😱 ") + "!"
}
// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
 */

/* Lesson 1: Technical Interview Challenges - Intro */
/* 
What you'll practice
    1. String and string methods
    2. Arrays and arrays methods
    3. Working with data with API
    4. "Classic" interview challenges like reversing a string, finding anagrams and FizzBuzz

Interview Challeges
    1. A skill you learn trough practice!
    2. An efficient but limited way for a potential employer to gauge your ability to code
    3. Not an amazing measure of your potential

Tips for success
    1. Write presudo code (or look at a time)
    2. Use built in methods, unless states otherwise
    3. Look things up
    4. console.log frequently
    5. Practive solving problems aloud - or make scrims!
    6. Stuck? study solutions and try again


Keep in Mind
    1. Solved the problem? you're doing great (Optimization and edge cases are stretch goals)
    2. Your solution will probably be different than mine. That's ok!
    3. Write "pure" functions
    4. Verbose and readable over short and clever
    */
/* 
// Write a function that capitalizes a string

function capitalize(str) {
    return str.toUpperCase()
}

console.log(capitalize("anshika"))
 */

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "JavaScript Interview Challenges"
const chapterNum = 3
const lesson = [
  "Technical Interview Challenges - Intro",
  "Challenge - Panic Function",
  "Solution - Panic Function",
  "Challenge - Shh... Whispering Function",
  "Solution - Shh... Whisper Function",
  "Challenge - Alternating Caps",
  "Solution - Alternating Caps",
  "Challenge - toTitleCase()",
  "Solution - toTitleCase()",
  "Challenge - Definitely Not FizzBuzz",
  "Solution - Definitely Not FizzBuzz",
  "Challenge - Emojify!",
  "Solution - Emojify!",
  "Challenge: Is it an Anagram?",
  "Solution - Is It an Anagram?",
  "Challenge - Decode an Alien Message",
  "Solution - Decode an Alien Message",
  "Challenge - Palindromes",
  "Solution - Palindromes",
  "Challenge - Save Grandpa's Password",
  "Solution - Save Grandpa's Password",
  "Challenge - Frequency of Letters in Your Name",
  "Solution - Frequency of Letters in Your Name",
  "Challenge: Chef Mario's Recipe Book",
  "Solution Pt 1: Chef Mario's Recipe Book",
  "Solution Pt 2: Chef Mario's Recipe Book",
  "Challenge - Pumpkin's Prizes",
  "Solution - Pumpkin's Prizes",
  "Challenge - Count the Scrimba Students",
  "Solution - Count the Scrimba Students",
  "Challenge - Pizza Night?",
  "Solution - Pizza Night?",
  "Challenge - Find Free Podcasts",
  "Solution - Find Free Podcasts",
  "Challenge - Candy Sale",
  "Solution - Candy Sale",
  "Challenge - Shopping Cart",
  "Solution - Shopping Cart",
  "Challenge - Total Savory Items",
  "Solution - Total Savory Items",
  "Challenge - Holiday Gift Shopping",
  "Solution - Holiday Gift Shopping",
  "Challenge - Collect Unique Genre Tags",
  "Solution Pt 1: Collect Unique Genre Tags",
  "Solution Pt 2: Collect Unique Genre Tags",
  "Challenge - Welcome Aboard Scrimba Airlines",
  "Solution - Welcome Aboard Scrimba Airlines",
  "Challenge - Popularity Contest",
  "Solution - Popularity Contest",
  "Challenge - Night at the Scrimbies",
  "Solution - Night at the Scrimbies",
  "Challenge - Save the Weekend",
  "Solution - Save the Weekend",
  "Challenge - Find Anagrams in an Array",
  "Solution - Find Anagrams in an Array",
  "Challenge - Emoji Flower Bed",
  "Solution - Emoji Flower Bed"
]

lessonGenerator(chapterName, lesson , chapterNum)
 */