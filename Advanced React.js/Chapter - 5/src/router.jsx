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

/**
 Challenge:
* 1) In 'router.jsx', import the 'ProtectedRoute' component
* 2) Wrap the header and dashboard components in the 'ProtectedRoute' component 
* 3) Save and navigate to '/dashboard' to test the protected route
*/

import { createBrowserRouter } from "react-router-dom"
import Signin from './components/Signin'
import Header from "./components/Header"
import Dashboard from "./routes/Dashboard"
import Signup from "./components/Signup"
import RootRedirect from "./routes/RootRedirect"
import ProtectedRoute from "./components/ProtectedRoute"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <RootRedirect /> 
    },
    { 
        path:"/dashboard", 
        element: <ProtectedRoute>
            <Header />
            <Dashboard /> 
        </ProtectedRoute>    
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/signin",
        element: <Signin />
    }
])


/* Lesson 18: Home redirect */
/**
Challenge:
* 1) Update the root path ('/') to use the new 'RootRedirect' component
* 2) Add a new route for '/signin' that renders the 'Signin' component
* 3) In 'Header.jsx', update the navigation to '/signin' when the user 
		 successfully signs out
* 4) Save and test that navigating to ('/') 
			- when signed out takes you to '/signin'
			- when signed in takes you to '/dashboard'
*/
/* 
import { createBrowserRouter } from "react-router-dom"

import Signin from './components/Signin'
import Header from "./components/Header"
import Dashboard from "./routes/Dashboard"
import Signup from "./components/Signup"
import RootRedirect from "./routes/RootRedirect"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <RootRedirect /> 
    },
    { 
        path:"/dashboard", 
        element: <>
            <Header />
            <Dashboard /> 
        </>    
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/signin",
        element: <Signin />
    }
])
 */

/* Lesson 17: RLS: Authenticated users only */


/* Lesson 16: Row Level Security */


/* Lesson 15: Navigate after sign out */


/* Lesson 14: Sign out */


/* Lesson 13: Navigate & Link */
/**
Challenge:
* 1) Create a new route with path '/signup'
* 2) Set the element as the 'Signup.jsx' component
* 3) Save and test your path by navigating to '/signup'
*/
/* 
import { createBrowserRouter } from "react-router-dom"

import Signin from './components/Signin'
import Header from "./components/Header"
import Dashboard from "./routes/Dashboard"
import Signup from "./components/Signup"
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
    {
        path: "/signup",
        element: <Signup />
    }    
])
 */
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
/* 
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
]) */