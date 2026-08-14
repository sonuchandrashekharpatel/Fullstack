/* Chapter - 5: Authentication */

/* Lesson 36: Recap */


/* Lesson 35: Account type in Header */
/**
Challenge:
* 1) Destructure "users' from the "useAuth" hook
* 2) Find the current users's profile by using the .find() method on the "users" array 
* 3) Match the user's id with session.user.id
* 4) Store the result in a "currentUser" variable
* 5) Log the "currentUser" variable to the console and log in to test
     Hint: Consider what is required to prevent an error if session hasn't 
     loaded yet
*/

import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Header() {
  const { session, signOut, users } = useAuth()
  const [ error, setError ] = useState(null)
  const navigate = useNavigate()

  const handleSignOut = async (e) => {
    e.preventDefault()

    const {success, error } = await signOut()
    if(success) {
      navigate("/signin")
    } else {
      setError(error)
    }
  }

  const currentUser = users.find(user => user.id === session?.user?.id )
  
  const accountTypeMap = {
    rep: "Sales Rep",
    admin: "Admin"
  }

  const displayAccountType = currentUser?.account_type ?
    accountTypeMap[currentUser.account_type] : ''
  return ( 
    <>
      <header role="banner" aria-label="Dashboard header">
        <div
          className="header-email"
          role="navigation"
          aria-label="User account navigation"
        >
          <h2>
            <span className="sr-only">Logged in as:</span>
            {currentUser?.name}({displayAccountType})
          </h2>
          { error && 
            <div role="alert" className="error-message" id="signout-error">
              {error}
            </div>
          }
          <button onClick={handleSignOut} aria-label="Sign out of your account">
            Sign out
          </button>
        </div>
        <h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
            aria-hidden="true"
            role="img"
            aria-label="Dashboard icon"
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Sales Team Dashboard</span>
        </h1>
      </header>
    </>
  );
};

export default Header;


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
/* 
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Header() {
  const { session, signOut } = useAuth()
  const [ error, setError ] = useState(null)
  const navigate = useNavigate()

  const handleSignOut = async (e) => {
    e.preventDefault()

    const {success, error } = await signOut()
    if(success) {
      navigate("/signin")
    } else {
      setError(error)
    }
  }
  return ( 
    <>
      <header role="banner" aria-label="Dashboard header">
        <div
          className="header-email"
          role="navigation"
          aria-label="User account navigation"
        >
          <h2>
            <span className="sr-only">Logged in as:</span>
            {session?.user?.email}
          </h2>
          { error && 
            <div role="alert" className="error-message" id="signout-error">
              {error}
            </div>
          }
          <button onClick={handleSignOut} aria-label="Sign out of your account">
            Sign out
          </button>
        </div>
        <h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
            aria-hidden="true"
            role="img"
            aria-label="Dashboard icon"
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Sales Team Dashboard</span>
        </h1>
      </header>
    </>
  );
};

export default Header;

 */
/* Lesson 17: RLS: Authenticated users only */


/* Lesson 16: Row Level Security */


/* Lesson 15: Navigate after sign out */

/**
Challenge:
* 1) After a successful sign out (when success is true), use the useNavigate 
    hook to redirect the user to the home route ('/')
* 2) Save and test this functionality
*/
/* 
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Header() {
  const { session, signOut } = useAuth()
  const [ error, setError ] = useState(null)
  const navigate = useNavigate()

  const handleSignOut = async (e) => {
    e.preventDefault()

    const {success, error } = await signOut()
    if(success) {
      // navigate to "/"
      navigate("/")
    } else {
      setError(error)
    }
  }
  return ( 
    <>
      <header role="banner" aria-label="Dashboard header">
        <div
          className="header-email"
          role="navigation"
          aria-label="User account navigation"
        >
          <h2>
            <span className="sr-only">Logged in as:</span>
            {session?.user?.email}
          </h2>
          { error && 
            <div role="alert" className="error-message" id="signout-error">
              {error}
            </div>
          }
          <button onClick={handleSignOut} aria-label="Sign out of your account">
            Sign out
          </button>
        </div>
        <h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
            aria-hidden="true"
            role="img"
            aria-label="Dashboard icon"
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Sales Team Dashboard</span>
        </h1>
      </header>
    </>
  );
};

export default Header;
 */
/* Lesson 14: Sign out */
/* import { useAuth } from "../context/AuthContext"
import { useState } from "react"

function Header() {
  const { signOut } = useAuth()
  const [ error, setError ] = useState(null)

  const handleSignOut = async (e) => {
    e.preventDefault()

    const {success, error } = await signOut()
    if(success) {
      // navigate to "/"
    } else {
      setError(error)
    }
  }
  return ( 
    <>
      <header role="banner" aria-label="Dashboard header">
        <div
          className="header-email"
          role="navigation"
          aria-label="User account navigation"
        >

          <button onClick={handleSignOut} aria-label="Sign out of your account">
            Sign out
          </button>
          { error && 
            <div role="role" className="error-message" id="signout-error">
              {error}
            </div>
          }
        </div>
        <h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
            aria-hidden="true"
            role="img"
            aria-label="Dashboard icon"
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Sales Team Dashboard</span>
        </h1>
      </header>
    </>
  );
};

export default Header; */

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
/* 
function Header() {
  return (
    <>
      <header role="banner" aria-label="Dashboard header">
        <h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
            aria-hidden="true"
            role="img"
            aria-label="Dashboard icon"
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Sales Team Dashboard</span>
        </h1>
      </header>
    </>
  );
};

export default Header; */