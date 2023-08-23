import { Router } from 'express'
import * as dotenv from 'dotenv'
import userController from '../../../controllers/userController'
dotenv.config()

const router = Router()

router.get('/users', userController.getAllUsersControl)

export default router
