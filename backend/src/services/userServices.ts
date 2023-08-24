import userDatabase from '../database/userDatabase'

const getAllUserService = () => {
    const allUsers = userDatabase.getAllUserData()
    return allUsers
}
const createUserService = async (userData: object) => {
    const createdUser = await userDatabase.createUser(userData)
    return createdUser
}

export default { getAllUserService, createUserService }
