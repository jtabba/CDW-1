import userData from '../database/userDatabase'

const getAllUserService = () => {
    const allUsers = userData.getAllUserData()
    return allUsers
}

export default { getAllUserService }
