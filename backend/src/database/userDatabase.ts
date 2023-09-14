import { getCollection } from './db'
const getAllUserData = async () => {
    const collection = await getCollection('Users')
    return collection?.find({}).toArray()
}
const createUser = async (userData: object) => {
    const collection = await getCollection('Users')
    await collection?.insertOne(userData)
}

export default { getAllUserData, createUser }
