/* Chapter - 1: Build a Cookie Consent */

/* Lesson 31: Recap */


/* Lesson 30: Accessibility Issues */


/* Lesson 29: There is no choice 2 */


/* Lesson 28: Aside: Classlist Toggle Challenge */


/* Lesson 27: Aside: classlist.toggle */


/* Lesson 26: There is no choice 1 */


/* Lesson 25: Disable the close button */


/* Lesson 24: Aside: Disabling elements */


/* Lesson 23: Form Data 2 */


/* Lesson 22: Aside: FormData methods */


/* Lesson 21: Form Data 1 */


/* Lesson 20: Aside: FormData */


/* Lesson 19: Add modal message 3 */


/* Lesson 18: Add modal message 2 */


/* Lesson 17: Add modal message */


/* Lesson 16: Buttons in forms - weird behaviour */


/* Lesson 15: preventDefault Challenge */


/* Lesson 14: Aside: preventDefault */


/* Lesson 13: Submit the form */


/* Lesson 12: Aside: Validation Attributes */


/* Lesson 11: Aside: Forms - challenge */


/* Lesson 10: Aside: Forms - submitting */


/* Lesson 9: Add a form 1 */


/* Lesson 8: Aside: Forms */


/* Lesson 7: Close the modal */
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")

setTimeout(function(){
    // modal.style.display = "inline"
}, 1500)

modalCloseBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

/* Lesson 6: Make the modal reappear */
/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/
/* const modal = document.getElementById("modal")

setTimeout(function(){
    modal.style.display = "inline"
}, 1500) */


/* Lesson 5: Aside: element.style */
/* 
element.style: Target an element's style with JavaScript
*/
/*
Challenge
1. When the button is clicked and the answer revealed, 
   change the background color to #68e1fd and text color
   to #1434A4 just in the "question" div.
   ⚠️ You will run into a problem with the background 
   color. See if you can find the solution by googling.
2. When the answer is revealed, make the button disappear.
*/
const revealBtn = document.getElementById("reveal-btn")
const answer = document.getElementById("answer")
const question = document.getElementById("question")

revealBtn.addEventListener("click", function() {
    answer.style.display = "block"
    question.style.backgroundColor = "#68e1fd"
    question.style.color = "#1434a4"

})
/* Lesson 4: Set the timer */
/*
Challenge:
1. Log out the phrase "Modal Opened!" 
   after a 1.5 second delay.
*/

/* 
setTimeout(function() {
    console.log("Modal Opened!")
}, 1500)
 */

/* Lesson 3: Aside: setTimeout */
/* 
setTimeout: The method you've been waiting for!
*/
/*
Challenge:
1. Make the third console.log fire 3 seconds after 
   the answer appears.
*/
/* 
console.log("What is the capital of Peru?")

setTimeout(function() {
    console.log("Lima!")

    setTimeout(function() {
        console.log("Ready for next question?")
    }, 3000)
}, 3000)
 */

/* Lesson 2: Position the modal */


/* Lesson 1: Cookie Consent Intro */
/* 
The world's most annoying Cookie Consent


Along the way...
1. setTimeout
2. element.style
3. forms
4. formData & .get()
5. event.preventDefault
6. CSS: row-reverse
7. toggling classes
8. 'disabled' attribute
*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Build a Cookie Consent"
const chapterNum = 1
const lesson = [
    "Cookie Consent Intro",
    "Position the modal",
    "Aside: setTimeout",
    "Set the timer",
    "Aside: element.style",
    "Make the modal reappear",
    "Close the modal",
    "Aside: Forms",
    "Add a form 1",
    "Aside: Forms - submitting",
    "Aside: Forms - challenge",
    "Aside: Validation Attributes",
    "Submit the form",
    "Aside: preventDefault",
    "preventDefault Challenge",
    "Buttons in forms - weird behaviour",
    "Add modal message",
    "Add modal message 2",
    "Add modal message 3",
    "Aside: FormData",
    "Form Data 1",
    "Aside: FormData methods",
    "Form Data 2",
    "Aside: Disabling elements",
    "Disable the close button",
    "There is no choice 1",
    "Aside: classlist.toggle",
    "Aside: Classlist Toggle Challenge",
    "There is no choice 2",
    "Accessibility Issues",
    "Recap"
]
lessonGenerator(chapterName, lesson, chapterNum)  */