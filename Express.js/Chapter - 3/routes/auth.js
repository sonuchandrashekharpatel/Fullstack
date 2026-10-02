import express from 'express'
import { logoutUser ,loginUser, registerUser } from '../controllers/authController.js'
// import { logSignin } from '../middleware/logSignin.js'

export const authRouter = express.Router()

authRouter.post('/register', registerUser)

// authRouter.post('/login',logSignin, loginUser)
authRouter.post('/login', loginUser)

authRouter.get('/logout', logoutUser)



