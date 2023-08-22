import { Request, Response, Router } from 'express'
import * as dotenv from 'dotenv'
import userController from '../../../controllers/userController'
dotenv.config()

const router = Router()

router.get('/', userController.getAllUsersControl)

export default router
