// import { ObjectId } from 'mongodb'
import { getCollection } from '../../../../database/db'
// import { genSaltSync, hashSync } from 'bcrypt-ts'
// import { uuid } from 'uuidv4'
import { userData } from './types'

export const getAllDataService = async () => {
    const collection = await getCollection('users')
    const allData = await collection?.find({}).toArray()

    console.log('collection', allData)

    return allData
}

export const getSingleUser = async (args: userData) => {
    const userList = await getCollection('users')
    const userData = await userList?.findOne({
        email: args.email
    })

    console.log('user', userData)

    return userData

    // test on Postman body with "email": "james@mail.com"
}

export const postUserFromAuth = async (args: userData) => {
    const userList = await getCollection('users')
    const emailExist = await userList?.findOne({
        email: args.email
    })

    if (emailExist !== null) {
        throw new Error('There is a user with that email')
    }

    const insertedData = await userList?.insertOne({
        name: args.name,
        email: args.email,
        dateOfBirth: args.dateOfBirth,
        yearsOfExperience: args.yearsOfExperience,
        currentJobTitle: args.currentJobTitle,
        areasOfExpertise: args.areasOfExpertise,
        rate: args.rate,
        interests: args.interests,
        aboutMe: args.aboutMe,
        id: args.id,
        isMentor: args.isMentor
    })

    console.log(insertedData)
    return insertedData
}

// Commented because JT didn't ask it to be removed
/* export const postSingleUser = async (args: userData) => {
    const userList = await getCollection('users')
    const emailExist = await userList?.findOne({
        email: args.email
    })

    if (emailExist !== null) {
        throw new Error('There is a user with that email')
    }

    const userId: string = uuid()
    const signupDt: string = new Date().toLocaleString()
    const lastLog: string = new Date().toLocaleString()
    const hashedPassword: string = await hashSync(
        args.password,
        genSaltSync(10)
    )

    const insertedData = await userList?.insertOne({
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
} */
