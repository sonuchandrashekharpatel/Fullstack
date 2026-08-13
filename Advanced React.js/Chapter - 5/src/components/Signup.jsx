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
/**
  Challenge:
* 1) Extract the name and account-type from the form into variables
* 2) Pass these extracted values as additional arguments to the 'signUpNewUser'
*    function
*/

/* 
Refactor
  - user_profiles table & RLS ✔️
  - signUp component & signUpNewUser ✔️
  - trigger
  - sales_deals table & RLS
  - fetch all user_profiles
  - form component
  - fetchMetrics
*/
import { useActionState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { signUpNewUser } = useAuth()
  const navigate = useNavigate()

  const [error, submitFunction, isPending ] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email")
      const password = formData.get("password")
      const name = formData.get("name")
      const accountType = formData.get("account-type")

      const { success, data, error: signUpError } = await signUpNewUser(email, password, name, accountType)

      if(signUpError) {
        return new Error(signUpError)
      }

      if(success && data?.session){
        navigate("/dashboard")
        return null
      }

      return null
    }
    , null)
  return (
    <>
      <h1 className="landing-header">Paper Like A Boss</h1>
      <div className="sign-form-container">
        <form
          action={submitFunction}
          aria-label="Sign up form"
          aria-describedby="form-description"
        >
          <div id="form-description" className="sr-only">
            Use this form to create a new account. Enter your email and
            password.
          </div>

          <h2 className="form-title">Sign up today!</h2>
          <p>
            Already have an account?{' '}
            <Link className="form-link" to="/">Sign in</Link>
          </p>
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            type="name"
            name="name"
            id="name"
            placeholder=""
            required
            aria-required="true"
            aria-invalid= { error ? "true" : "false" }
            aria-describedby= { error ? "sign-up error" : undefined }
            disabled ={isPending }
          />

          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
            aria-required="true"
            aria-invalid= { error ? "true" : "false" }
            aria-describedby= { error ? "sign-up error" : undefined }
            disabled ={isPending }
          />

          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
            aria-required="true"
            aria-invalid= { error ? "true" : "false" }
            aria-describedby= { error ? "sign-up error" : undefined }
            disabled ={isPending }
          />
          <fieldset
            className="form-fieldset"
            aria-required="true"
            aria-label="Select your role"
          >
            <legend>Select your role</legend>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="account-type"
                  value="admin"
                  required
                />{' '}
                Admin
              </label>
              <label>
                <input type="radio" name="account-type" value="rep" required />{' '}
                Sales Rep
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="form-button"
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? 'Signing up...' : 'Sign Up'}
          </button>

          {error && (
            <div
              id="signup-error"
              role="alert"
              className="sign-form-error-message"
            >
              {error.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
export default Signup


/* Lesson 23: User profiles table */
/* 
Refactor
  - user_profiles table & RLS ✔️
  - signUp component & signUpNewUser
  - trigger
  - sales_deals table & RLS
  - fetch all user_profiles
  - form component
  - fetchMetrics
   
*/

/* Lesson 22: Database refactor - part 2 */
/* 
Populate user_profiles
1. INSERT request after sign up
  - simple
  - 2 operations

2. Supabase trigger after sign up
  - automatic
  - more complex

Algorithm
Step 1. Sign up
Step 2. User added to Auth 'users'
Step 3. User added to user_profiles
Step 4. JWT sent to client
Step 5. Session
Step 6. All 'users' fetched from user_profiles

  A. if user is "Rep"
    a. Current user found from 'users'
    b. Form input value set as name of current user
    c. Choose value 
  
  B. if user is "Admin"
    a. Populate dropdown from 'users'
    b. Choose Name and value

Step 7. user_id of submitted name found from 'users'
Step 8. Insert deal ( user_id, value) into sales_deals
Step 9. Aggregate data fetched from sales_deals joined with  user profiles
Step 10. Aggregated sales data visulized.

Refactor
  - user_profiles table & RLS
  - signUp component & signUpNewUser
  - trigger
  - sales_deals table & RLS
  - fetch all user_profiles
  - form component
  - fetchMetrics

*/

/* Lesson 21: Database refactor - part 1 */
/* 
Reps only add their deals
1. UX
  - form name field is their name
  - readonly
2. RLS
- name in INSERT matches

RLS => allow authenticated reps to insert their rows into sales_deals

Problems
1. Where to store the account type?
  - not secure to store in JWT's use metadata
2. sales_deals row ownership
  - name
*/

/* Lesson 20: Sign up */
/* import { useActionState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { signUpNewUser } = useAuth()
  const navigate = useNavigate()

  const [error, submitFunction, isPending ] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email")
      const password = formData.get("password")

      const { success, data, error: signUpError } = await signUpNewUser(email, password)

      if(signUpError) {
        return new Error(signUpError)
      }

      if(success && data?.session){
        navigate("/dashboard")
        return null
      }

      return null
    }
    , null)
  return (
    <>
      <h1 className="landing-header">Paper Like A Boss</h1>
      <div className="sign-form-container">
        <form
          action={submitFunction}
          aria-label="Sign up form"
          aria-describedby="form-description"
        >
          <div id="form-description" className="sr-only">
            Use this form to create a new account. Enter your email and
            password.
          </div>

          <h2 className="form-title">Sign up today!</h2>
          <p>
            Already have an account?{' '}
            <Link className="form-link" to="/">Sign in</Link>
          </p>

          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
            aria-required="true"
            aria-invalid= { error ? "true" : "false" }
            aria-describedby= { error ? "sign-up error" : undefined }
            disabled ={isPending }
          />

          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
            aria-required="true"
            aria-invalid= { error ? "true" : "false" }
            aria-describedby= { error ? "sign-up error" : undefined }
            disabled ={isPending }
          />

          <button
            type="submit"
            className="form-button"
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? 'Signing up...' : 'Sign Up'}
          </button>

          {error && (
            <div
              id="signup-error"
              role="alert"
              className="sign-form-error-message"
            >
              {error.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
export default Signup
 */
/* Lesson 19: Protected Route */


/* Lesson 18: Home redirect */


/* Lesson 17: RLS: Authenticated users only */


/* Lesson 16: Row Level Security */


/* Lesson 15: Navigate after sign out */


/* Lesson 14: Sign out */


/* Lesson 13: Navigate & Link */
/**
Challenge:
* 1) In 'Signup.jsx', import the Link component
* 2) Turn 'Sign in' into a link which routes back to 'Signin.jsx' 
* 3) Add the 'form-link' class to the link
* 4) Save and test your link
    Hint: Check 'router.jsx' for the correct path
*/
/* 
import { Link } from "react-router-dom"

const Signup = () => {
    
  return (
    <>
      <h1 className="landing-header">Paper Like A Boss</h1>
      <div className="sign-form-container">
        <form
          // action={}
          aria-label="Sign up form"
          aria-describedby="form-description"
        >
          <div id="form-description" className="sr-only">
            Use this form to create a new account. Enter your email and
            password.
          </div>

          <h2 className="form-title">Sign up today!</h2>
          <p>
            Already have an account?{' '}
            <Link className="form-link" to="/">Sign in</Link>
          </p>

          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
            aria-required="true"
          //aria-invalid=
          //aria-describedby=
          //disabled=
          />

          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
            aria-required="true"
          //aria-invalid=
          //aria-describedby=
          //disabled=
          />

          <button
            type="submit"
            className="form-button"
          //disabled=
          //aria-busy=
          >
            Sign Up
          </button>

        </form>
      </div>
    </>
  );
}
export default Signup */