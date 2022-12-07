const { json } = require('sequelize')
const UsersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    UsersControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getUsersById = (req, res) => {
    const id = req.params.id
    UsersControllers.findUserById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })


}

const postUsers = (req, res) => {
    const { first_name, last_name, username, email, password, age, country } = req.body
    UsersControllers.createUser({ first_name, last_name, username, email, password, age, country })
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

//? api/v1/users/me
//? saber que user hace la peticion
const getMyUser = (req, res) => {
    const id = req.user.id //lo define passport al proteger una ruta
    UsersControllers.findUserById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400), json({ message: err.message })
        })
}

const patchUser = (req, res) => {
    const id = req.params.id
    const { first_name, last_name, user_name, age, country } = req.body

    userControllers.updateUser(id, { first_name, last_name, user_name, age, country })
        .then((data) => {
            if (data) {
                res.status(200).json({ message: 'User Modified Succesfully' })
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

const patchMyUser = (req, res) => {
    const id = req.user.id
    const { first_name, last_name, country, age, user_name } = req.body
    userControllers.updateUser(id, { first_name, last_name, country, age, user_name })
        .then(() => {
            res.status(200).json({ message: 'Your user was modified succesfully' })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}


const deleteUsers = (req, res) => {
    const id = req.user.id
    userControllers.deleteUsers(id)
        .then((data) => {
            res.status(204).json({ message: 'You User elimined Succesfully' })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}



module.exports = {
    getAllUsers,
    getUsersById,
    postUsers,
    getMyUser,
    patchUser,
    patchMyUser,
    deleteUsers,
}