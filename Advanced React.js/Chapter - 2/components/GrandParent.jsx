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


/* Lesson 5: Using Dev Tools to Measure Performance */


/* Lesson 4: Rendering Phases Quiz 👻*/


/* Lesson 3: Three phases of "rendering" */


/* Lesson 2: Recursive rendering */

import React from "react"
import Parent from "./Parent"

export default function GrandParent({ count }) {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component. Count: {count}</p>
            <Parent />
            <Parent />
        </div>
    )
}
