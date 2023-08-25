/* import { connectToDb } from "./db"

const getAllUserData = async () => {
    const collection = await connectToDb('Users')
    return collection?.find({}).toArray()
}
const createUser = async(userData: object) => {
    const collection = await connectToDb('Users')
    await collection?.insertOne(userData)
    
}

export default { getAllUserData, createUser } */
