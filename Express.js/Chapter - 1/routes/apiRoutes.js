/* Lesson 12: Modularise The Code */
import express from "express"
import { getAllData } from "../controllers/getAllData.js"
import { getDataByPathParams } from "../controllers/getDataByPathParams.js"

export const apiRouter = express.Router()

apiRouter.get("/", getAllData)

apiRouter.get("/:field/:term", getDataByPathParams)

/* Lesson 11: express.Router() */
/* 
import express from "express"
import { productsController } from "../controllers/productsController.js"
import { servicesController } from '../controllers/servicesController.js'

export const apiRouter = express.Router()

apiRouter.get("/products", productsController)
apiRouter.get("/services", servicesController)
 */