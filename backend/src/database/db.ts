import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'
dotenv.config()

const uri: string = process.env.URI!

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
    maxPoolSize: 1
})

export const getCollection = async (collectionName: string) => {
    try {
        if (!uri) {
            throw new Error('Cannot connect to database - URI is not defined')
        }

        const connection = await client.connect()
        const db = connection.db('mentorShip')
        const collection = db.collection(collectionName)

        console.log('Successfully connected to MongoDb')

        return collection
    } catch (err) {
        console.error(err)
    }
}
