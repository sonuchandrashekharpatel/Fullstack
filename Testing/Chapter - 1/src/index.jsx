/* Chapter - 1: Testing */

/* Lesson 12: Congratulations! */
/* 
What you learned:
1. What is testing is
2. Why test our apps
3. Setting up the tooling
4. Writing your first test
5. Organizing your test
6. Structuring your test
7. Testing user interactions
8. Mocking external services
9. Code coverage
10. Accessibility testing
11. TDD
12. Different types of testing
13. Vitest
14. React Testing Library
15. Mock Service Worker

...with lots of challanges

*/

/* Lesson 11: Types of testing */
/* 
Types of Testing:
How ?
1. Manual Testing
2. Automated testing
1. Functional Testing
2. Not-functinal Testing
3. Unit testing
4. Component testing
5. Integration Testing
6. End to end testing
7. System Testing 
8. UI Testing
9. Acceptance Testing
10. API Testing
11. Contract testing
12. Usability testing
13. Accessibility Testing
14. Compatablity Testing
15. Performance Testing
16. Stress Testing
17. Load Testing
18. Security Testing

How Much and why?
1. Regression Testing
2. Smoke Testing

At What level of abstraction:
1. Black box testing
2. Gray box testin
3. White box testing

Recap: 
1. Different ways to classify testing
2. Different types of testing
3. Manual vs automated testing
4. Functional vs non-functional testing
5. Regression vs smoke testing
6. Black box, gray box and white box testing

*/

/* Lesson 10: Accessibility testing with a side of TDD 👻*/
/* 
Accessibility Testing:
It's a type of testing that ensures "that the web app can be use 
by people with disablilities, conforming to accessibility 
guidelines such as the web content Accessibility Guidelines."
 ~ MDN

TTest Driven Devlopment
  1. Write a failing test
  2. Write just enough code to make it pass
  3. Refactor to improve the code.

*/

/* Lesson 9: View code coverage */
/* 
  . What code coverage is
  . Why report code coverage
  . How to add it to your testing
  . Code coverage report
  . Configuring code coverage
*/

/* Lesson 8: Mock external services: Test 👻*/

/* Lesson 7: Mock external services: Set up the tooling */
/* 
Recap: 
1. What mocking is
2. Why we mock services
3. MSW: The API mocking library for javascript
4. Setting up the mocking mechanism

*/
/* 
When writing tests it's only a matter of time before you need to 
create a fake version of an internal - or external - service. 
This commonaly reffered as mocking.
*/

/* Lesson 6: Test user interactions 👻*/


/* Lesson 5: Practice, practice, and practice! 👻*/


/* Lesson 4: Write your first test 👻*/


/* Lesson 3: Set up the tooling */
/* 
Testing Tools:
1. Vitest
2. React Testing Library + Friends
3. jsdom

"./tooling.md"
*/

/* Lesson 2: What we will test: Meme Generator */
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />)

/* Lesson 1: Welcome to the Testing Module */
/* 
Testing Tools:
1. Vitest
2. React Testing Library
3. Mock Service Worker

What is Testing?
The process of checking that your app does what the user wants to do.

Why test your app?
To ensure that the app meets the user's needs and expectations.

01. What testing is?
02. Why test our apps
03. Setting up the tooling
04. Writing your first test
05. Organizing your first test
06. Structuring your tests
07. Testing user interactions
08. Mocking external services
09. Code coverarge
10. Accessibility testing
11. TDD
12. Different types of testing
13. Vitest
14. React Testing Library
15. Mock Service Worker

... With lots of challanges


Prerequisites:
1. JavaScript
2. HTML
3. Accessible Development
4. React 
5. Vite  
6. node.js 
7. npm

Teacher: Shant Dashjian
*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Testing"
const chapterNum = 1
const lesson = [
  "Welcome to the Testing Module",
  "What we will test: Meme Generator",
  "Set up the tooling",
  "Write your first test",
  "Practice, practice, and practice!",
  "Test user interactions",
  "Mock external services: Set up the tooling",
  "Mock external services: Test",
  "View code coverage",
  "Accessibility testing with a side of TDD",
  "Types of testing",
  "Congratulations!"
]
lessonGenerator(chapterName, lesson, chapterNum) */ 

