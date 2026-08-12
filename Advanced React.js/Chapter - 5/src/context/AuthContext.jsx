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
import  { createContext, useState, useContext, useEffect } from "react"
import supabase from "../supabase-client"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)
    
    useEffect(() => {
        const getInitialSession = async () => {
            
            try {
                const { data, error } = await supabase.auth.getSession()
                if(error) {
                    throw error
                }
                setSession(data.session)
            } catch(err) {
                console.error("Error: Failed to get initial session", err.message)
            }
        }
        getInitialSession()

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            console.log("Session Changed: ", session)
        })

    }, [])

    // Auth functions ( signin, signup, logout)
    // Sign in (success, data, error)
    const signInUser = async (email, password) => {
        try {
            const { data, error} = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password
            })
    
            if(error) {
                console.error("Supabase sign-in error: ", error.message)
                return { success: false, error: error.message}
            }
            console.log("Supabase sign-in success: ", data)
    
            return { success: true, data }

        } catch(err) {
            console.error("Unexpected error during sign-in:", err.message)
            return { success: false, error: "An unexpected error occur during sign-in. Please try again." }
        }

    }
 
    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            if(error) {
                console.error("Supabase sign-out error: ", error.message)
                return { success: false, error: error.message}
            }
            return { success: true }

        } catch(err) {
            console.error("Unexpected error during sign-out", err.message)
            return { success: false, error: "An unexpected error occur during sign out"}
        }
    }

    // Signup
    const signUpNewUser = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email.toLowerCase(),
                password
            })

            if(error) {
                console.error("Supabase sign-up error", error.message)
                return { success: false, error: error.message }
            }
            console.log("Supabase sign-up success", data)
            return { success: true, data }
        } catch(err) {
            console.error("Unexpected error occur during sign-up", err.message)
            return { success: false, error: "An unexpected error occur. Please try again."}
        }
    }

    return (
        <AuthContext.Provider value={{ session, signInUser, signOut, signUpNewUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}


/* Lesson 19: Protected Route */


/* Lesson 18: Home redirect */


/* Lesson 17: RLS: Authenticated users only */


/* Lesson 16: Row Level Security */


/* Lesson 15: Navigate after sign out */


/* Lesson 14: Sign out */
    // Sign out
/**
Challenge:
* 1) Using the 'signInUser' function as a template, write a 'signOut' 
  function calling the 'auth.signOut()' method
* 2) Only destructure 'error' and handle both Supabase and unexpected errors
  in a similar way to in the 'signInUser' function
* 3) Add this function to the AuthContext's value prop
  Note: There is no need to pass the Supabase '.signOut()' method any 
  parameters.
*/   

/* 
import  { createContext, useState, useContext, useEffect } from "react"
import supabase from "../supabase-client"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)
    
    useEffect(() => {
        const getInitialSession = async () => {
            
            try {
                const { data, error } = await supabase.auth.getSession()
                if(error) {
                    throw error
                }
                setSession(data.session)
            } catch(err) {
                console.error("Error: Failed to get initial session", err.message)
            }
        }
        getInitialSession()

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            console.log("Session Changed: ", session)
        })

    }, [])

    // Auth functions ( signin, signup, logout)
    // Sign in (success, data, error)
    const signInUser = async (email, password) => {
        try {
            const { data, error} = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password
            })
    
            if(error) {
                console.error("Supabase sign-in error: ", error.message)
                return { success: false, error: error.message}
            }
            console.log("Supabase sign-in success: ", data)
    
            return { success: true, data }

        } catch(err) {
            console.error("Unexpected error during sign-in:", err.message)
            return { success: false, error: "An unexpected error occur during sign-in. Please try again." }
        }

    }
 
    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            if(error) {
                console.error("Supabase sign-out error: ", error.message)
                return { success: false, error: error.message}
            }
            return { success: true }

        } catch(err) {
            console.error("Unexpected error during sign-out", err.message)
            return { success: false, error: "An unexpected error occur during sign out"}
        }
    }
    return (
        <AuthContext.Provider value={{ session, signInUser, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
 */

/* Lesson 13: Navigate & Link */


/* Lesson 12: Sign in auth function - part 2 */
/**
Challenge:
* 1) In the try block, make an asynchronous call to Supabase to sign in with a
	   password
* 2) Passing an object with:
			- email: the user's email converted to lowercase
			- password: the user's password
* 3) Destructuring the response into 'data' and 'error' variables
* 4) Save and test by signing in the user from your Auth.Users table
*/
/* 
import  { createContext, useState, useContext, useEffect } from "react"
import supabase from "../supabase-client"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)
    
    useEffect(() => {
        const getInitialSession = async () => {
            
            try {
                const { data, error } = await supabase.auth.getSession()
                if(error) {
                    throw error
                }
                setSession(data.session)
            } catch(err) {
                console.error("Error: Failed to get initial session", err.message)
            }
        }
        getInitialSession()

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            console.log("Session Changed: ", session)
        })

    }, [])

    // Auth functions ( signin, signup, logout)
    // Sign in (success, data, error)
    const signInUser = async (email, password) => {
        try {
            const { data, error} = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password
            })
    
            if(error) {
                console.error("Supabase sign-in error: ", error.message)
                return { success: false, error: error.message}
            }
            console.log("Supabase sign-in success: ", data)
    
            return { success: true, data }

        } catch(err) {
            console.error("Unexpected error during sign-in:", err.message)
            return { success: false, error: "An unexpected error occur during sign-in. Please try again." }
        }

    }
    
    return (
        <AuthContext.Provider value={{ session, signInUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
 */

/* Lesson 11: Sign in auth function - part 1 */
/* 
import  { createContext, useState, useContext, useEffect } from "react"
import supabase from "../supabase-client"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    // Session state (user info, sign-in status)
    const [session, setSession] = useState(undefined)
    
    //  1. Check on 1st render for session (getSession())
    useEffect(() => {
        const getInitialSession = async () => {
            
            try {
                const { data, error } = await supabase.auth.getSession()

                if(error) {
                    throw error
                }
                setSession(data.session)
            } catch(err) {
                console.error("Error: Failed to get initial session", err.message)
            }
        }
        getInitialSession()

        //  2. Listen for changes in auth state (onAuthStateChange())
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            console.log("Session Changed: ", session)
        })

    }, [])

    // Auth functions ( signin, signup, logout)
    // Sign in (success, data, error)

    const signInUser = async (email, password) => {
        try {
            // supabase method
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password
            })

            // handle supabase error explicitly
            if(error) {
                console.error("Supabase sign-in error: ", error.message)
                return { success: false, error: error.message}
            }

            // success
            console.log("Supabase successfully signed in : ", data)
            return { success: true, data}

        } catch(err) {
            // unexpected error
            console.error("Unexpected error during sign in:", error.message)
            return { success: false, error: "An unexpected error occured. Please try again."}
        }
    }
    
    return (
        <AuthContext.Provider value={{ session, signInUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
 */


/* Lesson 10: Sign in component - part 2 */


/* Lesson 9: Sign in component - part 1 */


/* Lesson 8: Add user to Auth.Users */


/* Lesson 7: JWTs (authenticated) */


/* Lesson 6: JSON Web Tokens (anon) */


/* Lesson 5: Auth Session state - part 2 */
/* 
import  { createContext, useState, useContext, useEffect } from "react"
import supabase from "../supabase-client"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    // Session state (user info, sign-in status)
    const [session, setSession] = useState(undefined)
    
    //  1. Check on 1st render for session (getSession())
    useEffect(() => {
        const getInitialSession = async () => {
            
            try {
                const { data, error } = await supabase.auth.getSession()

                if(error) {
                    throw error
                }
                setSession(data.session)
            } catch(err) {
                console.error("Error: Failed to get initial session", err.message)
            }
        }
        getInitialSession()

        //  2. Listen for changes in auth state (onAuthStateChange())
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            console.log("Session Changed: ", session)
        })

    }, [])

    // Auth functions ( signin, signup, logout)
    

    return (
        <AuthContext.Provider value={{ session }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
 */

/* Lesson 4: Auth Session state - part 1 */
/* 
Session state variable
Initialized as undefined - loading/checking
    Updated to
    . null (Unauthorized/not logged in)
    . { data } (Authorised/signed in)
*/
  /**
Challenge:
* 1) Inside the useEffect, write an asynchronous 'getInitialSession' function 
     which executes the 'auth.getSession()' method from the Supabase client 
     library
* 2) Destructure the response into 'data' and 'error' variables
* 3) Using the try/catch syntax, handle both Supabase-specific errors and 
     unexpected errors
* 4) If successful, log the value of the 'session' property of the 'data' 
     object to the console and then use it to update the 'session' state 
* 5) Call the new function below the function definition
* 6) Check your browser's dev tools for 'null' being logged
     Hint: follow the same error handling pattern as the 'fetchMetrics' function
**/
/* 
import  { createContext, useState, useContext, useEffect } from "react"
import supabase from "../supabase-client"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    // Session state (user info, sign-in status)
    const [session, setSession] = useState(undefined)
    
    //  1. Check on 1st render for session (getSession())
    useEffect(() => {
        const getInitialSession = async () => {
            
            try {
                const { data, error } = await supabase.auth.getSession()

                if(error) {
                    throw error
                }
                setSession(data.session)
                console.log(data.session)
            } catch(err) {
                console.error("Error: Failed to get initial session", err.message)
            }
        }
        getInitialSession()

        //  2. Listen for changes in auth state

    }, [])

    // Auth functions ( signin, signup, logout)
    

    return (
        <AuthContext.Provider value={{ session }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
 */
/* Lesson 3: Context API */
/* 
import  { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    
    // Auth functions ( signin, signup, logout)
    
    // Session state (user info, sign-in status)
    const [session, setSession] = useState(undefined)

    return (
        <AuthContext.Provider value={{ session }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
} */