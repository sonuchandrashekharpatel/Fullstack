/* Lesson 21: Aside: Protected Routes */
import express from 'express'
import { logSignIn } from "../middleware/logSignIn.js"

import { 
    registerUser, 
    login,
    logout 
} from '../controllers/authController.js'

export const authRouter = express.Router()

authRouter.post("/register", registerUser)
authRouter.post("/login",logSignIn, login)
authRouter.get("/logout", logout)

/* Lesson 14: Add Logout functionality 👻*/

/* Lesson 13: Login */
/* 
import express from 'express'
import { registerUser, login, logout } from '../controllers/authController.js'

export const authRouter = express.Router()

authRouter.post("/register", registerUser)

authRouter.post("/login", login)

authRouter.get("/logout", logout)
*/

/* Lesson 3: The /register Route 👻*/

/* 
import express from 'express'
import { registerUser, login } from '../controllers/authController.js'

export const authRouter = express.Router()

authRouter.post("/register", registerUser) */


