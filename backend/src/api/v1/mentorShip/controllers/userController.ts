import { Request, Response } from 'express'
import {
    getAllDataService,
    getSingleUser,
    postSingleUser
} from '../services/userServices'

export const getAll = async (req: Request, res: Response) => {
    const allData = await getAllDataService()

    return res.send({
        status: 200,
        message: 'Success',
        data: allData
    })
}

export const getSingle = async (req: Request, res: Response) => {
    const userData = await getSingleUser(req.body.userId)

    return res.send({
        status: 200,
        message: 'Success',
        data: userData
    })

    // for testing of single use one of the following IDs and add it to postman body as "userId": "id here"
    // {
    //     "_id": "64e738b63ef7a62f2d9a3d60",
    //     "name": "Bob"
    // },
    // {
    //     "_id": "64e740b422d2034f57c25504",
    //     "name": "Jeff"
    // }

    // Testing for postman
    // body
    // {
    // "userId": "64e738b63ef7a62f2d9a3d60"
    // endpoint: http://localhost:8080/api/v1/getUser
    //  }
}

export const postUser = async (req: Request, res: Response) => {
    const insertedData = await postSingleUser(req.body)

    return res.send({
        status: 201,
        message: 'Registration is done',
        data: insertedData
    })

    /* {
    "firstName": "John",
    "lastName": "Rolfe",
    "email": "mrjohn@mail.com",
    "username": "johnro",
    "password": "password",
    "location": "Ontario"
} */
}
