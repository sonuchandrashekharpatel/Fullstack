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