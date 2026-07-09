
//  Lesson 26: Deploy with Netlify 
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
}

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
 // Lesson 1: Let's build a passanger counter app! */
