const UsersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    UsersControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getUsersById = (req, res) => {
    const id = req.params.id
    UsersControllers.findUserById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    

}

const postUsers = (req, res) => {
    const {first_name, last_name, email, password, age, country} = req.body
        UsersControllers.createUser({first_name, last_name, email, password, age, country})
            .then((response) => {
                res.status(201).json(response)
            })
            .catch((err) => {
                res.status(400).json({ message: err.message})
            })
}


module.exports = {
    getAllUsers,
    getUsersById,
    postUsers,
}