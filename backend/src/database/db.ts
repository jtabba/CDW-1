import dotenv from 'dotenv'
import {MongoClient, ServerApiVersion} from 'mongodb'

dotenv.config()

const uri: string = process.env.URI 

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
    maxPoolSize: 1
});

export const connectToDb = async (collectionName: string) => {
    
    try {
        const connection = await client.connect();
        const db = connection.db("shipUserDatabase");
        const collection = db.collection(collectionName)
        console.log("Successfully connected to MongoDb");

        return collection;
    } catch (err: Error | unknown) {
        console.error("error", err);
    }
};