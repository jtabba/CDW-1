import { ObjectId } from 'mongodb'
import { getCollection  } from '../../../../database/db'

export const getAllDataService = async () => {
    const collection = await getCollection('users')
    const allData = await collection?.find({}).toArray()

    console.log('collection', allData)

    return allData
}

export const getSingleUser = async (id: string) => {
    const collection = await getCollection('users')
    const userData = await collection?.findOne({
        _id: new ObjectId(id)
    })

    console.log('user', userData)

    return userData
}
