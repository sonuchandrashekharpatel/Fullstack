/* Chapter - 2: Performance */

/* Lesson 19: Solo Project - Component Library++ */


/* Lesson 18: useCallback() practice 👻👻👻*/


/* Lesson 17: useCallback() 👻*/


/* Lesson 16: useMemo() practice 👻*/


/* Lesson 15: useMemo(), React.memo(), and referential equality 👻*/


/* Lesson 14: Value vs. Reference Types & referential equality 👻*/


/* Lesson 13: React.memo() practice 👻*/
/**
 * Challenge: Using what you've learned about React.memo(),
 * improve the performance of this app when the counter
 * is changed. Since the products don't care about the `count`
 * value at all, they shouldn't need to rerender when `count`
 * changes.
 */

import React from "react"
import productsData from './data/data'
import Product from "./components/Product"

export default function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {
          productsData.map(product => (
            <Product
              key={product.id}
              product={product}
              darkMode={darkMode}
            />
          ))
        }
      </div>
    </>
  )
}

/* Lesson 12: React.memo() - reducing rerenders 👻*/
/* 
React.memo() => To reduce unnecessary rerenders

What is React.memo()?
. A "Higher-Order" component (HOC) built by React.
  . A higher order function is a method or function that takes 
    another function as an argument (e.g. .map(), .filter(), etc)
  
  . A HOC is function that takes a component as an argument, adds 
    some special abilities to it, and gives the "beefed-up" version 
    of it back.

What does React.memo() do?
. Memoizes (caches/"remembers") a component if the props don't 
  change from one render to the next

. Reminder: "Rendering" phase in React isn't usually slow/expensive. 
  It's more important to fix slow renders before worrying about reducing rerenders.

*/
/* import React from "react"
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
            <GrandParent count={count}/>
            <GrandParent />
        </div>
    )
} */
/**
 * Play around: what happens when you pass the count to just one
 * of the `GrandParent` components? What gets re-rendered?
 * Does it matter if the GrandParent component even uses
 * that prop that was passed to it?
 */
/* Lesson 11: useMemo() practice 👻*/
/* 
Maintain referential equality of a complex data type between renders
*/

/**
 * NOTE: I recommend opening the dev tools performance tab and throttling
 * to a 6x slowdown to help highlight the delays that are happening with
 * the expensive "sort" method call on each render.
 */
/* 
import React from "react"
import productsData from './data/data'
import { slowCountItems } from "./utils/utils"
import Product from "./components/Product"

export default function App() {
  const [count, setCount] = React.useState(0)
  const [sort, setSort] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }


  // Comment these 4 lines out when testing your solution below
  // const startTime1 = Date.now()
  // const sortedProducts = [...productsData].sort(
  //   (a,b) => 
  //     a.name.localeCompare(b.name)
  // )
  // const endTime1 = Date.now()

  // console.log(`Took ${endTime1 - startTime1}ms`)

  const startTime2 = Date.now()
  const sortedProducts = React.useMemo( () =>  
    [...productsData].sort((a, b) => a.name.localeCompare(b.name)), [productsData] 
  )
  const endTime2 = Date.now()

  console.log(`Took ${endTime2 - startTime2}ms`)

  const visibleProducts = sort ? sortedProducts : productsData

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setSort(prev => !prev)}
      >
        {sort ? "Unsort" : "Sort"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {
          visibleProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}
 */
/* Lesson 10: useMemo() */
/* 
useMemo(): To remember calculated values between renders

When to use useMemo()?
1. Avoid recalculating expensive calculations if it's not necessary.

*/

/* 
import React from "react"
import productsData from './data/data'
import { slowCountItems } from "./utils/utils"
import Product from "./components/Product"

export default function App() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  
  // React.useEffect(() => {
  //   console.log("productsData changed") 
  // }, [productsData])

  // const productsCount = slowCountItems(productsData, 500)

  const productsCount = React.useMemo(() => {
    return slowCountItems(productsData, 500)
  }, [productsData])
  
  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <h2>There are {productsCount} products</h2>
      <div className="products-list">
        {
          productsData.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
} */

/* Lesson 9: Code Splitting, lazy, Suspense - Part 2 👻*/


/* Lesson 8: Code Splitting, lazy, Suspense - Part 1 */
/* 
Code Splitting: For reducing the load size
What is Code splitting?
. Instead of always importing "heavy " code you can conditionally 
  import it only if/when needed.

. Splits up download, so your main feature aren't blocked by show 
  connections.
. Sometimes bypass unneeded code altogether.

How does it work?
. Uses "dynamic import" function import()

. Combine import() with React.lazy() to only load a "heavy" 
  component if needed.
  
. Use <Suspense> to provide a fallback UI while the "lazy 
  component" is loading.

*/

/**
 * Challenge: Add back the dynamic import of the ProductsList
 * component.
 * 
 * 1. Use `React.lazy()` to create a suspending component
 *    that will only render when needed
 * 2. Use the dynamic `import()` as the return value inside of
 *    `React.lazy()`
 * 3. Use the `<React.Suspense>` component will a `fallback`
 *    prop to give React something to render in the meantime
 *    while it's downloading all the code for the suspended
 *    component.
*/

/* 
import React from "react"
// import ProductsList from "./components/ProductList"

const ProductsList = React.lazy(() => {
  return import("./components/ProductList")
})

export default function App() {
  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
            </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <div className="products-list">
          {showProducts && <ProductsList />}
        </div>
      </React.Suspense>
    </>
  )
}
 */

/* Lesson 7: StrictMode - rerunning side effects 👻*/
/* 
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
 */

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