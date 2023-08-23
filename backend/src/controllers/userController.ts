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

export default { getAllUsersControl }
