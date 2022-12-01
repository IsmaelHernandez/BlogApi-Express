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
        .then(data => {
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
    const data = req.body
    if(data.first_name && data.last_name && data.email && data.password && data.age && data.country){
        UsersControllers.findUserById(data)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.status(400).json({message: 'Missing Data'})
    }
}


module.exports = {
    getAllUsers,
    getUsersById,
    postUsers,
}