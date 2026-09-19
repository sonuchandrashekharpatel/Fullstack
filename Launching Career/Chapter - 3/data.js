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
/* 
const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr){
    
}


fetch(api) 
    .then(response => response.json())
    .then((data) => {
        data.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });    
    })
    .catch(err => console.log(err));
 */




/* Lesson 55: Solution - Find Anagrams in an Array */


/* Lesson 54: Challenge - Find Anagrams in an Array */


/* Lesson 53: Solution - Save the Weekend */


/* Lesson 52: Challenge - Save the Weekend */
/* 
export default [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan", 
        duration: 150, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Bob Smith", "Camilla Lambert"], 
        genre: "true crime",
        rating: 5, 
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures", 
        duration: 99, 
        tags: ["entertainment", "general", "unicorns"], 
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {   
        id: 4,
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        id: 5,
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        id: 6,
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

 */

/* Lesson 51: Solution - Night at the Scrimbies */


/* Lesson 50: Challenge - Night at the Scrimbies */
/* 

export default [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan", 
        duration: 150, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Bob Smith", "Camilla Lambert"], 
        genre: "true crime",
        rating: 5, 
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures", 
        duration: 99, 
        tags: ["entertainment", "general", "unicorns"], 
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

*/
/* Lesson 49: Solution - Popularity Contest */


/* Lesson 48: Challenge - Popularity Contest */
/* 
export default [
     {
        post: "A lot of you have asked about my morning skin care routine...",
        likes: 348
     },
     {
        post: "New Year, new me. #blessed",
        likes: 102
     },
     {
        post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
        likes: 544
     },
     {
        post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
        likes: 745
     },
     {
        post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
        likes: 412
     },
     {
        post: "Leg day #summerbody2022 #gymshark #beachworkout",
        likes: 275
     },
]
   

*/

/* Lesson 47: Solution - Welcome Aboard Scrimba Airlines */


/* Lesson 46: Challenge - Welcome Aboard Scrimba Airlines */
/* 
export default [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan", 
        duration: 150, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Bob Smith", "Camilla Lambert"], 
        genre: "true crime",
        rating: 5, 
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures", 
        duration: 99, 
        tags: ["entertainment", "general", "unicorns"], 
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

*/

/* Lesson 45: Solution Pt 2: Collect Unique Genre Tags */


/* Lesson 44: Solution Pt 1: Collect Unique Genre Tags */


/* Lesson 43: Challenge - Collect Unique Genre Tags */

export default [
    {
        id: 1,
        title: "Stranger Scrims", 
        duration: 40, 
        tags: ["supernatural", "horror", "drama"], 
    },
    {
        id: 2,
        title: "The Scrim of the Dragon", 
        duration: 60, 
        tags: ["drama", "fantasy"], 
    },
    {
        id: 3,
        title: "Scrim Hunters", 
        duration: 22, 
        tags: ["reality", "home improvement"], 
    },
    {
        id: 4,
        title: "This Old Scrim", 
        duration: 30, 
        tags: ["reality", "home improvement"], 
    },
    {
        id: 5,
        title: "What We Do in the Scrim", 
        duration: 55, 
        tags: ["drama", "comedy", "supernatural"], 
    },
    {
        id: 6,
        title: "The Scrimdalorian", 
        duration: 58, 
        tags: ["fantasy", "sci-fi", "adventure"], 
    },
]


/* Lesson 42: Solution - Holiday Gift Shopping */


/* Lesson 41: Challenge - Holiday Gift Shopping */
/* 
export default [
    {
        product: "🍭",
        price: 2.99,
    },
    {
        product: "🍫",
        price: .99, 
    },
    {
        product: "🏡",
        price: 40000000
    },
    {
        product: "🧁",
        price: .99, 
    },
    {
        product: "📚",
        price: .99, 
    },
    {
        product: "⏰",
        price: 13.99, 
    }, 
    {
        product: "🍬",
        price: .89, 
    },
    {
        product: "🥎",
        price: 3.99,
    }, 
    {
        product: "🎸",
        price: 13.99, 
    }, 
    {
        product: "🎨",
        price: 23.99, 
    }, 
    {
        product: "💕",
        price: 0, 
    }, 
]
 */

/* Lesson 40: Solution - Total Savory Items */


/* Lesson 39: Challenge - Total Savory Items */
/* 
export default [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
        onSale: true
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
        onSale: false
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
        onSale: false
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
        onSale: false
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
        onSale: true
    }, 
]
 */

/* Lesson 38: Solution - Shopping Cart */


/* Lesson 37: Challenge - Shopping Cart */
/* 
export default [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
        onSale: true
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
        onSale: false
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
        onSale: false
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
        onSale: false
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
        onSale: true
    }, 
]
 */

/* Lesson 36: Solution - Candy Sale */


/* Lesson 35: Challenge - Candy Sale */
/* 
export default [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
    }, 
]
 */

/* Lesson 34: Solution - Find Free Podcasts */


/* Lesson 33: Challenge - Find Free Podcasts */
/* export default [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan", 
        duration: 150, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Bob Smith", "Camilla Lambert"], 
        genre: "true crime",
        rating: 5, 
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures", 
        duration: 99, 
        tags: ["entertainment", "general", "unicorns"], 
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]
 */

/* Lesson 32: Solution - Pizza Night? */


/* Lesson 31: Challenge - Pizza Night? */


/* Lesson 30: Solution - Count the Scrimba Students */


/* Lesson 29: Challenge - Count the Scrimba Students */


/* Lesson 28: Solution - Pumpkin's Prizes */


/* Lesson 27: Challenge - Pumpkin's Prizes */


/* Lesson 26: Solution Pt 2: Chef Mario's Recipe Book */


/* Lesson 25: Solution Pt 1: Chef Mario's Recipe Book */


/* Lesson 24: Challenge: Chef Mario's Recipe Book */


/* Lesson 23: Solution - Frequency of Letters in Your Name */


/* Lesson 22: Challenge - Frequency of Letters in Your Name */


/* Lesson 21: Solution - Save Grandpa's Password */


/* Lesson 20: Challenge - Save Grandpa's Password */


/* Lesson 19: Solution - Palindromes */


/* Lesson 18: Challenge - Palindromes */


/* Lesson 17: Solution - Decode an Alien Message */


/* Lesson 16: Challenge - Decode an Alien Message */


/* Lesson 15: Solution - Is It an Anagram? */


/* Lesson 14: Challenge: Is it an Anagram? */


/* Lesson 13: Solution - Emojify! */


/* Lesson 12: Challenge - Emojify! */


/* Lesson 11: Solution - Definitely Not FizzBuzz */


/* Lesson 10: Challenge - Definitely Not FizzBuzz */


/* Lesson 9: Solution - toTitleCase() */


/* Lesson 8: Challenge - toTitleCase() */


/* Lesson 7: Solution - Alternating Caps */


/* Lesson 6: Challenge - Alternating Caps */


/* Lesson 5: Solution - Shh... Whisper Function */


/* Lesson 4: Challenge - Shh... Whispering Function */


/* Lesson 3: Solution - Panic Function */


/* Lesson 2: Challenge - Panic Function */

