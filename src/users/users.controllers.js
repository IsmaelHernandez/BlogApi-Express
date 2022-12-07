const Users = require('../models/users.models')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')


const findAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })

    return data
}

const createUser = async (obj) => {
    const data = await Users.create({
        id: uuid.v4(),
        first_name: obj.first_name,
        last_name: obj.last_name,
        username: obj.username,
        email: obj.email,
        password: hashPassword(obj.password),
        age: obj.age,
        country: obj.country
    })

    return data
}

const findUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: {
            email: email
        }
    })

    return data
}

// const patchUser = async(id) => {
//     const id = req.Use
// }

const deleteUsers = async() => {

}


module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    findUserByEmail,
}