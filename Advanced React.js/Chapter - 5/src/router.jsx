/* Chapter - 5: Authentication */

/* Lesson 36: Recap */


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


/* Lesson 4: Auth Session state - part 1 */


/* Lesson 3: Context API */


/* Lesson 2: Router setup */

/**
Challenge:
* 1) Pass an array of route objects to 'createBrowserRouter'
* 2) Each route object must have the following properties:
	    - path: the URL path as a string
	    - element: the React component to render
* 3) Create two routes:
	    - Root path ('/'): render the Signin component
	    - Dashboard path ('/dashboard'): render both Header and Dashboard 
	    components
*    Hint: React Router's element prop needs one root element, just like a 
     component's return statement 
*/
import { createBrowserRouter } from "react-router-dom"

import Signin from './components/Signin'
import Header from "./components/Header"
import Dashboard from "./routes/Dashboard"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Signin /> 
    },
    { 
        path:"/dashboard", 
        element: <>
            <Header />
            <Dashboard /> 
        </>    
    },
])