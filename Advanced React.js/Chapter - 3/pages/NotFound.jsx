/* Chapter - 3: Routing */

/* Lesson 64: Section wrapup */


/* Lesson 63: Coding the Sad Path - Error handling */


/* Lesson 62: Coding the Sad Path - Loading state (new) */


/* Lesson 61: Quick update to our fetching code */


/* Lesson 60: "Happy Path" vs. "Sad Path" (new) */


/* Lesson 59: 404 Page */

import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link to="/" className="link-button">Return to Home</Link>
        </div>
    )
}