/* Lesson 12: Display a user's name 👻*/
import express from "express"
import { getCurrentUser } from "../controllers/meController.js"

export const meRouter = express.Router()

meRouter.get("/", getCurrentUser)