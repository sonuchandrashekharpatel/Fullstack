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
import { useAuth } from "../context/AuthContext"
import { useActionState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Signin = () => {
    const { signInUser } = useAuth()
    const navigate = useNavigate()

    const [error, submitAction, isPending ] = useActionState(
        async (prevState, formData) => {
            const email= formData.get("email")
            const password = formData.get('password')

            const {
                success,
                data,
                error: signInError
            } = await signInUser(email, password)

            if(signInError) {
                return new Error(signInError)
            }
            if(success && data?.session) {
                // Navigate to /dashboard
                navigate("/dashboard")
                return null;
            }
            return null
        }
        , null)
    const { session } = useAuth()
    return (
        <>
            <h1 className='landing-header'>Paper Like a Boss</h1>
            <div className="sign-form-container">
                <form
                action= { submitAction }
                aria-label="Sign in form"
                aria-describedby="form-description"
                >
                    <div id="form-description" className="sr-only">
                        Use this form to sign in to your account. Enter your email and
                        password.
                    </div>

                    <h2 className="form-title">Sign in</h2>
                    <p>
                        Don't have an account yet?{' '}
                        <Link className="form-link" to="/signup">Sign up</Link>
                    </p>

                    <label htmlFor="email">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        aria-required="true"
                        aria-invalid= { error ? "true" : "false"}
                        aria-describedby= { error ? "signin-error" : undefined }
                        disabled= {isPending}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        aria-required="true"
                        aria-invalid= { error ? "true" : "false"}
                        aria-describedby= { error ? "signin-error" : undefined }
                        disabled= {isPending}
                        required
                    />

                    <button
                        type="submit"
                        className="form-button"
                        aria-busy={isPending}
                    >
                        {isPending ? "Signing in..." : "Sign In" }
                    </button>
                    { error && (
                        <div
                            id="signin=-error"
                            role="alert"
                            className="sign-form-error-message"
                        >
                            {error.message}
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Signin


/* Lesson 12: Sign in auth function - part 2 */


/* Lesson 11: Sign in auth function - part 1 */

/* import { useAuth } from "../context/AuthContext"
import { useActionState } from "react"

const Signin = () => {
    const { signInUser } = useAuth()

    const [error, submitAction, isPending ] = useActionState(
        async (prevState, formData) => {
            // 1. Extract form data
            const email= formData.get("email")
            const password = formData.get('password')

            // 2. Call our sign-function
            const {
                success,
                data,
                error: signInError
            } = await signInUser(email, password)

            // 3. Handle known errors (return error)
            if(signInError) {
                return new Error(signInError)
            }
            // 4. Handle success (e.g. redirect, /dashboard)
            if(success && data?.session) {
                // Navigate to /dashboard
                return null;
            }
            return null
        }
        , null)
    const { session } = useAuth()
    return (
        <>
            <h1 className='landing-header'>Paper Like a Boss</h1>
            <div className="sign-form-container">
                <form
                action= { submitAction }
                aria-label="Sign in form"
                aria-describedby="form-description"
                >
                    <div id="form-description" className="sr-only">
                        Use this form to sign in to your account. Enter your email and
                        password.
                    </div>

                    <h2 className="form-title">Sign in</h2>
                    <p>
                        Don't have an account yet?{' '}
                        Sign up
                    </p>

                    <label htmlFor="email">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        aria-required="true"
                        aria-invalid= { error ? "true" : "false"}
                        aria-describedby= { error ? "signin-error" : undefined }
                        disabled= {isPending}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        aria-required="true"
                        aria-invalid= { error ? "true" : "false"}
                        aria-describedby= { error ? "signin-error" : undefined }
                        disabled= {isPending}
                        required
                    />

                    <button
                        type="submit"
                        className="form-button"
                        //className=
                        aria-busy={isPending}
                    >
                        {isPending ? "Signing in..." : "Sign In" }
                    </button>
                    { error && (
                        <div
                            id="signin=-error"
                            role="alert"
                            className="sign-form-error-message"
                        >
                            {error.message}
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Signin
 */

/* Lesson 10: Sign in component - part 2 */
/* 
import { useAuth } from "../context/AuthContext"
import { useActionState } from "react"

const Signin = () => {
    const [error, submitAction, isPending ] = useActionState(
        async (prevState, formData) => {
            // 1. Extract form data
            const email= formData.get("email")
            const password = formData.get('password')

            try {
                // 2. Call our sign-function
                // const {
                //     success,
                //     data,
                //     error: signInError
                // } = await sign in function(email, password)
    
                // 3. Handle known errors (return error)
                if(signInError) {
                    return new Error(signInError)
                }
                // 4. Handle success (e.g. redirect, /dashboard)
                if(success && data?.session) {
                    // Navigate to /dashboard
                    return null;
                }
                // 5. Handle any other cases (safety net)
                return null
                
            } catch (err) {
                // 6. Handle unexpected Errors (return error)
                console.error("Signin Error: ", err.message)
                return new Error('An unexpected error occurred. Please try again')
            }
        }
    , null)
    const { session } = useAuth()
    return (
        <>
            <h1 className='landing-header'>Paper Like a Boss</h1>
            <div className="sign-form-container">
                <form
                action= { submitAction }
                aria-label="Sign in form"
                aria-describedby="form-description"
                >
                    <div id="form-description" className="sr-only">
                        Use this form to sign in to your account. Enter your email and
                        password.
                    </div>

                    <h2 className="form-title">Sign in</h2>
                    <p>
                        Don't have an account yet?{' '}
                        Sign up
                    </p>

                    <label htmlFor="email">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        aria-required="true"
                        aria-invalid= { error ? "true" : "false"}
                        aria-describedby= { error ? "signin-error" : undefined }
                        disabled= {isPending}
                        required
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
                        aria-invalid= { error ? "true" : "false"}
                        aria-describedby= { error ? "signin-error" : undefined }
                        disabled= {isPending}
                    />

                    <button
                        type="submit"
                        className="form-button"
                        //className=
                        aria-busy={isPending}
                    >
                        {isPending ? "Signing in..." : "Sign In" }
                    </button>
                    { error && (
                        <div
                            id="signin=-error"
                            role="alert"
                            className="sign-form-error-message"
                        >
                            {error.message}
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Signin
 */
/* Lesson 9: Sign in component - part 1 */
/**
Challenge:
* 1) Import the 'useActionState' hook
* 2) Call the hook at the top level of the component, destructuring three values:
			 - 'error' (state for error handling)
			 - 'submitAction' (the form action function)
			 - 'isPending' (loading state boolean)
* 3) Pass two arguments to useActionState:
			- First argument: an async arrow function with 2 parameters
			- Second argument: initial state value of null
* 4) Inside the async function, extract the email and password into variables
* 5) Add the 'sumbmitAction' to your form's action prop
*/
/* 
import { useAuth } from "../context/AuthContext"
import { useActionState } from "react"

const Signin = () => {
    const [error, submitAction, isPending ] = useActionState(
        async (prevState, formData) => {
            // 1. Extract form data
            const credentials = {
                email: formData.get("email"),
                password: formData.get('password')
            }

            console.log(credentials)
        }
        , null)
    const { session } = useAuth()
    return (
        <>
            <h1 className='landing-header'>Paper Like a Boss</h1>
            <div className="sign-form-container">
                <form
                action= { submitAction }
                aria-label="Sign in form"
                aria-describedby="form-description"
                >
                <div id="form-description" className="sr-only">
                    Use this form to sign in to your account. Enter your email and
                    password.
                </div>

                <h2 className="form-title">Sign in</h2>
                <p>
                    Don't have an account yet?{' '}
                    Sign up
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
                    //className=
                    //aria-busy=
                >
                    Sign In
                </button>
                
                </form>
            </div>
        </>
    )
}

export default Signin */


/* Lesson 8: Add user to Auth.Users */


/* Lesson 7: JWTs (authenticated) */


/* Lesson 6: JSON Web Tokens (anon) */


/* Lesson 5: Auth Session state - part 2 */


/* Lesson 4: Auth Session state - part 1 */


/* Lesson 3: Context API */
/* import { useAuth } from "../context/AuthContext"

const Signin = () => {
    const { session } = useAuth()
    console.log(session)
    return (
        <>
            <h1 className='landing-header'>Paper Like a Boss</h1>
        </>
    )
}

export default Signin
 */
/* Lesson 2: Router setup */

/* const Signin = () => {
    return (
        <>
            <h1 className='landing-header'>Paper Like a Boss</h1>
        </>
    )
}

export default Signin */