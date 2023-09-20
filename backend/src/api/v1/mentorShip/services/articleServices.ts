import { getCollection } from '../../../../database/db'
import { articleData } from './types'

export const getArticlesService = async () => {
    const articleList = await getCollection('articles')
    const allArticles = await articleList?.find({}).toArray()

    console.log('articles', allArticles)

    return allArticles
}

export const postSingleArticle = async (args: articleData) => {
    const articleList = await getCollection('articles')
    const articleExist = await articleList?.findOne({
        url: args.url
    })
    console.log(articleExist)

    if (articleExist !== null) {
        throw new Error('Article is already posted')
    }

    const insertedArticle = await articleList?.insertOne({
        articleName: args.articleName,
        url: args.url
    })

    console.log('article', insertedArticle)
    return insertedArticle
}

export const postManyArticles = async (...args: articleData[]) => {
    const articleList = await getCollection('articles')
    const articleArr: articleData[] = [...args].flat()

    const uniqueUrl = new Set(articleArr.map(item => item.url))

    if (uniqueUrl.size < articleArr.length) {
        throw new Error('there are duplicate links')
    }

    const insertedArticles = await articleList?.insertMany(articleArr)

    console.log('articles', insertedArticles)
    return insertedArticles
}
