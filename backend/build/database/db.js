var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
dotenv.config();
const uri = process.env.URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
    maxPoolSize: 1
});
export const getCollection = (collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!uri) {
            throw new Error('Cannot connect to database - URI is not defined');
        }
        const connection = yield client.connect();
        const db = connection.db('mentorShip');
        const collection = db.collection(collectionName);
        console.log('Successfully connected to MongoDb');
        return collection;
    }
    catch (err) {
        console.error(err);
    }
});
