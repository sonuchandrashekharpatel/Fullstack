/* Chapter - 2: Performance */

/* Lesson 19: Solo Project - Component Library++ */


/* Lesson 18: useCallback() practice 👻👻👻*/


/* Lesson 17: useCallback() 👻*/


/* Lesson 16: useMemo() practice 👻*/


/* Lesson 15: useMemo(), React.memo(), and referential equality 👻*/


/* Lesson 14: Value vs. Reference Types & referential equality 👻*/


/* Lesson 13: React.memo() practice 👻*/
import React from "react"
import { sleep } from "../utils/utils"

function Product({ product, darkMode }) {
    sleep(1)
    const styles = {
        backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
        color: darkMode ? "white" : "#2b283a"
    }
    return (
        <div className="product-card" style={styles}>
            <p className="truncate">{product.name}</p>
        </div>
    )
}
export default React.memo(Product)

/* Lesson 12: React.memo() - reducing rerenders 👻*/


/* Lesson 11: useMemo() practice 👻*/


/* Lesson 10: useMemo() */


/* Lesson 9: Code Splitting, lazy, Suspense - Part 2 👻*/


/* Lesson 8: Code Splitting, lazy, Suspense - Part 1 */
/* import React from "react"

export default function Product ({ product }) {
    return (
        <div className="product-card">
            <p className="truncate">{product.name}</p>
        </div>
    )
}
 */
/* Lesson 7: StrictMode - rerunning side effects 👻*/


/* Lesson 6: StrictMode - double renders components 👻*/

/* 
import React from "react"
export default function Product({ product }) {
    return (
        <div className="product-card">
            <p className="truncate">{product.name}</p>
        </div>
    )
}
 */