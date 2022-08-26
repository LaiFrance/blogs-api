const {User} = require('../database/models/index')

const getAllUsers = async () => {
    const result = await User.findAll()
    return result
}