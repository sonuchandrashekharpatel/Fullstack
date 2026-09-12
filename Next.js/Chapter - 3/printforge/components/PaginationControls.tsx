/* Chapter - 3: Making Data Flow */


/* Lesson 71: Section 3 Outro */


/* Lesson 70: Final Pagination Challenge */

import PaginationButton from "./PaginationButton";

export default function PaginationControls({totalPages, currentPage}: {
    totalPages: number
    currentPage: number
}) {
    const paginationButtons = []

    for(let i=1; i<=totalPages; i++) {
        const isActive = i === currentPage
        paginationButtons.push(<PaginationButton key={i} page={i} isActive={isActive} />)
    }

    function increment() {

    }

    function decrement() {

    }
    return (
        <div className="flex justify-center gap-1">
            <button 
                onClick={increment}
            >{"<<"}</button>

            {paginationButtons}

            <button
                onClick={decrement}
            >{">>"}</button>
        </div>
    )
}


/* Lesson 69: Final UX Polish Challenge Pack */


/* Lesson 68: Applying Edge Case Handling to Category Pages */


/* Lesson 67: Debug the Redirect Bug */


/* Lesson 66: Handling Invalid Sort Params */


/* Lesson 65: Handling Invalid Page Params */


/* Lesson 64: Handling Out-of-Bounds Page Params */


/* Lesson 63: Polishing Edge Cases and UX */


/* Lesson 62: Refactoring Query Param Logic */


/* Lesson 61: Refactoring modelsPerPage */


/* Lesson 60: Adding Pagination to Category Pages */


/* Lesson 59: Styling the Active Pagination Button */
/* 
import PaginationButton from "./PaginationButton";

export default function PaginationControls({totalPages, currentPage}: {
    totalPages: number
    currentPage: number
}) {
    const paginationButtons = []

    for(let i=1; i<=totalPages; i++) {
        const isActive = i === currentPage
        paginationButtons.push(<PaginationButton key={i} page={i} isActive={isActive} />)
    }
    return (
        <div className="flex justify-center gap-1">
            {paginationButtons}
        </div>
    )
}
 */

/* Lesson 58: Rendering the Right Number of Pagination Buttons */

/*
CHALLENGE - Render the correct number of pagination buttons
1. Accept a `totalPages` prop.
2. Use `totalPages` to create an array of page numbers.
   For example, if totalPages is 5, we want:
   [1, 2, 3, 4, 5]
3. Map over that array.
4. For each page number, render a PaginationButton.
5. Pass the page number into PaginationButton using the `page` prop.
6. Don't forget to add a key!
*/
/* 
import PaginationButton from "./PaginationButton";

export default function PaginationControls({totalPages}: {totalPages: number}) {
    const paginationButtons = []

    for(let i=1; i<=totalPages; i++) {
        paginationButtons.push(<PaginationButton key={i} page={i} />)
    }
    return (
        <div className="flex justify-center gap-1">
            {paginationButtons}
        </div>
    )
}
 */
/* Lesson 57: Calculating Total Pages */


/* Lesson 56: Counting Total Matching Models */


/* Lesson 55: Counting Rows with COUNT() */


/* Lesson 54: Returning One Page of Models */


/* Lesson 53: Limiting Results with LIMIT and OFFSET */


/* Lesson 52: Reading the Page Query on the Server */


/* Lesson 51: Updating the URL with a Page Query */


/* Lesson 50: Creating Pagination Controls and Buttons */

/*
CHALLENGE
1. Create a new `PaginationButton` component. It should:
- accept a `page` prop
- render a button
- display the page number inside the button
  
2. Render 5 `PaginationButton`s in the `PaginationControls` component

*/
/* import PaginationButton from "./PaginationButton";

export default function PaginationControls() {
    return (
        <div className="flex justify-center gap-1">
            <PaginationButton page={1} />
            <PaginationButton page={2} />
            <PaginationButton page={3} />
            <PaginationButton page={4} />
            <PaginationButton page={5} />
        </div>
    )
} */