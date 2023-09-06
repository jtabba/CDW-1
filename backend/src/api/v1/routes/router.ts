import express from 'express'
import * as dotenv from 'dotenv'
import {
    getAll,
    getSingle,
    // postUser,
    postUserAuth
} from '../mentorShip/controllers/userController'
import {
    getArticles,
    postArticle,
    postArticles
} from '../mentorShip/controllers/articleController'
dotenv.config()

const router = express.Router()

// users
router.get('/getAll', getAll)
router.get('/getUser', getSingle)
router.post('/authSignup', postUserAuth)
// router.post('/register', postUser)

// articles
router.get('/getArticles', getArticles)
router.post('/postArticle', postArticle)
router.post('/postArticles', postArticles)

export default router
