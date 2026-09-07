/* Chapter - 3: Making Data Flow */


/* Lesson 71: Section 3 Outro */


/* Lesson 70: Final Pagination Challenge */


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


/* Lesson 58: Rendering the Right Number of Pagination Buttons */


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
import PaginationButton from "./PaginationButton";

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
}