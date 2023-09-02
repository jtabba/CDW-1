import { ObjectId } from 'mongodb'
import { getCollection } from '../../../../database/db'
import { genSaltSync, hashSync } from 'bcrypt-ts'
import { uuid } from 'uuidv4'

interface userDetail {
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    location: string
}

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

export const postSingleUser = async (args: userDetail) => {
    const collection = await getCollection('users')
    const usernameExist = await collection?.findOne({
        username: args.username
    })

    if (usernameExist !== null) {
        throw new Error('Username exists')
    }

    const userId: string = uuid()
    const signupDt: string = new Date().toLocaleString()
    const lastLog: string = new Date().toLocaleString()
    const hashedPassword: string = await hashSync(
        args.password,
        genSaltSync(10)
    )

    const insertedData = await collection?.insertOne({
        id: userId,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: hashedPassword,
        username: args.username,
        location: args.location,
        signupDate: signupDt,
        lastLogin: lastLog
    })

    console.log(insertedData)
    return insertedData
}
