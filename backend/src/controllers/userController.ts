import { Request, Response } from 'express'
import userService from '../services/userServices'

const getAllUsersControl = async (request: Request, response: Response) => {
    const allUsers = await userService.getAllUserService()
    return response.send({
        status: 200,
        message: 'Success',
        data: allUsers
    })
}
const createUserControl = async (request: Request, response: Response) => {
    const newUser = request.body;
    const createdUser = await userService.createUserService(newUser)
    return response.status(201).json({
        status: 201,
        message: 'New user created successfully',
        data: createdUser,    
    })
}

export default { getAllUsersControl, createUserControl }
