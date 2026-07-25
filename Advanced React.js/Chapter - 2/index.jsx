/* Chapter - 2: Performance */

/* Lesson 19: Solo Project - Component Library++ */


/* Lesson 18: useCallback() practice 👻👻👻*/


/* Lesson 17: useCallback() 👻*/


/* Lesson 16: useMemo() practice 👻*/


/* Lesson 15: useMemo(), React.memo(), and referential equality 👻*/


/* Lesson 14: Value vs. Reference Types & referential equality 👻*/


/* Lesson 13: React.memo() practice 👻*/


/* Lesson 12: React.memo() - reducing rerenders 👻*/


/* Lesson 11: useMemo() practice 👻*/


/* Lesson 10: useMemo() */


/* Lesson 9: Code Splitting, lazy, Suspense - Part 2 👻*/


/* Lesson 8: Code Splitting, lazy, Suspense - Part 1 */


/* Lesson 7: StrictMode - rerunning side effects 👻*/


/* Lesson 6: StrictMode - double renders components 👻*/
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
); 

/* Lesson 5: Using Dev Tools to Measure Performance */


/* Lesson 4: Rendering Phases Quiz 👻*/


/* Lesson 3: Three phases of "rendering" */


/* Lesson 2: Recursive rendering */
/* 

*/
/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 
 */
/* Lesson 1: Performance Intro */

/* 
Performance : For improving the App speed.

Performance Strategies: 
1. Send less code to the browser (Code splitting)
2. Cache expensive calculations to re-use from 
  render to render.
3. Avoid unnecessary re- renders
4. Re-structure the application


Caveats: 
1. React is really fast.
2. Don't prematurely optimize
3. Balance optimizations with readability/maintainability.


What we'll learn
1. How React Renders components
2. Strict quality
3. React.StrictMode
4. Code splitting
5. useMemo()
6. React.memo()


*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Performance"
const chapterNum = 2
const lesson = [
 "Performance Intro",
  "Recursive rendering",
  "Three phases of \"rendering\"",
  "Rendering Phases Quiz",
  "Using Dev Tools to Measure Performance",
  "StrictMode - double renders components",
  "StrictMode - rerunning side effects",
  "Code Splitting, lazy, Suspense - Part 1",
  "Code Splitting, lazy, Suspense - Part 2",
  "useMemo()",
  "useMemo() practice",
  "React.memo() - reducing rerenders",
  "React.memo() practice",
  "Value vs. Reference Types & referential equality",
  "useMemo(), React.memo(), and referential equality",
  "useMemo() practice",
  "useCallback()",
  "useCallback() practice",
  "Solo Project - Component Library++"
]

lessonGenerator(chapterName, lesson, chapterNum)
 */
