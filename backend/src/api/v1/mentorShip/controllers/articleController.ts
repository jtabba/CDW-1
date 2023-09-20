import { Request, Response } from 'express'
import {
    getArticlesService,
    postSingleArticle,
    postManyArticles
} from '../services/articleServices'

export const getArticles = async (req: Request, res: Response) => {
    const allArticles = await getArticlesService()

    return res.send({
        status: 200,
        message: 'Success',
        data: allArticles
    })
}

export const postArticle = async (req: Request, res: Response) => {
    const insertedArticle = await postSingleArticle(req.body)

    return res.send({
        status: 200,
        message: 'Success',
        data: insertedArticle
    })
}

export const postArticles = async (req: Request, res: Response) => {
    const insertedArticles = await postManyArticles(req.body)

    return res.send({
        status: 201,
        message: 'Success',
        data: insertedArticles
    })
}
