/* Chapter - 5: Authentication */

/* Lesson 36: Recap */
/* 
What we've covered:
- React Router DOM
- Context API
- Session
- JWTs
- Sign in / up / out
- RLS
- Trigger

Plus Challenges!
*/
/* 
Design:
Colors, fonts, icon, layout, other CSS

Format:
Swap chart for leaderboard. Render an AI generated headshot for the top sales rep

Stretch Goals:
Add a read-only account type for managers.

*/
/* Lesson 35: Account type in Header */


/* Lesson 34: Update fetchMetrics - part 2 */


/* Lesson 33: Update fetchMetrics - part 1 */


/* Lesson 32: Update new deal form - part 2 */


/* Lesson 31: Update new deal form - part 1 */


/* Lesson 30: Fetch all profiles - part 2 */


/* Lesson 29: Fetch all profiles - part 1 */


/* Lesson 28: Refactor deals table - part 3 */


/* Lesson 27: Refactor deals table - part 2 */


/* Lesson 26: Refactor deals table - part 1 */


/* Lesson 25: Trigger */


/* Lesson 24: Sign up expansion */


/* Lesson 23: User profiles table */


/* Lesson 22: Database refactor - part 2 */


/* Lesson 21: Database refactor - part 1 */


/* Lesson 20: Sign up */


/* Lesson 19: Protected Route */


/* Lesson 18: Home redirect */


/* Lesson 17: RLS: Authenticated users only */


/* Lesson 16: Row Level Security */


/* Lesson 15: Navigate after sign out */


/* Lesson 14: Sign out */


/* Lesson 13: Navigate & Link */


/* Lesson 12: Sign in auth function - part 2 */


/* Lesson 11: Sign in auth function - part 1 */


/* Lesson 10: Sign in component - part 2 */


/* Lesson 9: Sign in component - part 1 */


/* Lesson 8: Add user to Auth.Users */


/* Lesson 7: JWTs (authenticated) */


/* Lesson 6: JSON Web Tokens (anon) */


/* Lesson 5: Auth Session state - part 2 */
/**
 * Challenge (delete 2 options to leave your answer)
 * 
 * Multiple choice quiz:
 * 
 * 1. Which part of the JWT includes the role of either authenticated or anon?
 *  
 * B) PAYLOAD
 * 
 * 
 * 2. How does Supabase know the JWT is authentic (not forged)?
 *
 * B) It verifies the JWT's signature was created with the project's secret
 *
 * 
 * 3. What does the JWT signature prove?
 *
 * A) That the JWT hasn't been tampered with and came from a trusted source
 * 
 * 
 * 4. In our castle metaphor, what represents the project secret?
 *
 * C) The castle's secret pen
 * 
 * 
 * 5. What's the main difference between an anon JWT and an authenticated JWT?
 *
 * A) The role field in the payload is different
 */

/* Lesson 4: Auth Session state - part 1 */


/* Lesson 3: Context API */
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { RouterProvider } from 'react-router-dom'

import { router } from './router.jsx'
import { AuthContextProvider } from "./context/AuthContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root"))
    .render (
    <StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </StrictMode>
)

/* Lesson 2: Router setup */
/* 
React Router DOM
. client-side-routing (without full page reload)
. URL
. Authentication-based-protection
. navigation

*/
/* import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { RouterProvider } from 'react-router-dom'

import { router } from './router.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById("root"))
    .render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
    )
 */
/* Lesson 1: Introduction */
/* 
User Story: Authentication
1. Sign up as rep or admin
2. Sign in / out
3. Reps can add deals for themselves
4. Admins can add deals for any reps
5. Data Security
6. Account info in header

Overview: 
We'll be:
1. Setting up router and context
2. Listening for session
3. Learning about JWTs
4. Signing users up / in
5. Writing RLS policies
6. Writing a trigger

Plus Challenges!
 */

/* 
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import App from './App'
import "./index.css"

ReactDOM.createRoot(document.getElementById("root"))
    .render(
    <StrictMode>
        <App />
    </StrictMode>
    ) 
*/
/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Authentication"
const chapterNum = 5
const lesson = [
    "Introduction",
    "Router setup",
    "Context API",
    "Auth Session state - part 1",
    "Auth Session state - part 2",
    "JSON Web Tokens (anon)",
    "JWTs (authenticated)",
    "Add user to Auth.Users",
    "Sign in component - part 1",
    "Sign in component - part 2",
    "Sign in auth function - part 1",
    "Sign in auth function - part 2",
    "Navigate & Link",
    "Sign out",
    "Navigate after sign out",
    "Row Level Security",
    "RLS: Authenticated users only",
    "Home redirect",
    "Protected Route",
    "Sign up",
    "Database refactor - part 1",
    "Database refactor - part 2",
    "User profiles table",
    "Sign up expansion",
    "Trigger",
    "Refactor deals table - part 1",
    "Refactor deals table - part 2",
    "Refactor deals table - part 3",
    "Fetch all profiles - part 1",
    "Fetch all profiles - part 2",
    "Update new deal form - part 1",
    "Update new deal form - part 2",
    "Update fetchMetrics - part 1",
    "Update fetchMetrics - part 2",
    "Account type in Header",
    "Recap"
];
lessonGenerator(chapterName, lesson, chapterNum) 
 */