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
import React from "react"
import Timer from "./components/Timer"

export default function App() {
  const [showTimer, setShowTimer] = React.useState(false)

  function toggleTimer() {
    setShowTimer(prev => !prev)
  }

  return (
    <div>
      <button className="button" onClick={toggleTimer}>{showTimer ? "Hide" : "Show"} Timer</button>
      {showTimer &&
        <Timer />
      }
    </div>
  )
}

/* Lesson 6: StrictMode - double renders components 👻*/
/* 
What is StrictMode doing?

. Double renders all functions that should be pure functions.
. Re-runs all effects in components.
. Checks for deprecated React APIs.
*/
/* 
import { faker } from "@faker-js/faker"
import React from "react"
import Product from "./components/Product"
import productsData from "./data/data"

export default function App() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)  
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  const productDataCopy = [...productsData]
  productDataCopy.push({
    id: faker.database.mongodbObjectId(),
    name: "+ Create new item"
  })

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <div className="products-list">
        {
          productDataCopy.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
} */

/* Lesson 5: Using Dev Tools to Measure Performance */


/* Lesson 4: Rendering Phases Quiz 👻*/
/* 
We talk a lot about "rendering" in React, but oftentimes we lump together
the 3 phases of the rendering process. Understanding the distinction
between these phases can help us in determining a good strategy for
improving the performance of our React apps.


1. What are the 3 phases of the rendering process called in React?
1 - Render
2 - Reconciliation
3 - Commit


2. What happens in the Render phase?
React runs the code from the component that had the state change,
and all the descendent components of that component as well.


3. What happens in the Reconciliation phase?
React compares the old render with the new render (in VDOM) using
its diffing algorithm to figure out what changes needs to be made
to the real DOM.


4. What happens in the Commit phase?
The changes determined from the reconciliation phase are actually
committed (painted) to the real DOM, and the user sees the updates
on the page.

*/

/* Lesson 3: Three phases of "rendering" */
/* 
What actually happens during a "re-render"?
 => State Change
 => Render
 => Reconciliation
 => Commit Dom
 

Anology: Architect a building plan
Update blueprints: 
    Architect pulls up old blueprints, and makes new 
    version that includer the desired chanegs.

List changes: 
    Architect determines what actual changes need 
    to  implemented in the building. (Just because 
    there's a whole new, updated blueprint dosen't 
    mean the whole building should be built from scratch!)

Build: 
    The contractor and team make the actual building updates 
    as indicated  by the blueprints and plans from the previous
    phase. They do as little work possible to make the changes 
    so the result looks as desired without extra work needed.



Rendering Phases: 
1. Rendering: 
    All components in this branch of the tree are called again. 
    Any calculations, function creation and side effects get run 
    again in JS, and a new virtual DOM medel is created.

2. Reconciliation: 
    React uses an advanced "diffing algorithm" to check the 
    previous version of the virtual DOM against the new version 
    of the actual DOM and determines what has actully changed 
    from the last render.

3. Commit: 
    React makes changes to the actual DOM based on the smallest 
    amount of work needed (based on what it determined in 
    reconciliation) to ensure the actual DOM is displaying 
    correctly.


*/

/* Lesson 2: Recursive rendering */
/* 
import React from "react"
import GrandParent from "./components/GrandParent"

export default function App() {
    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div>
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
            <h2>{count}</h2>
            <p>App component</p>
            <GrandParent count={count} />
            <GrandParent />
        </div>
    )
}
 */