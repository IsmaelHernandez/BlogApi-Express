const PostsControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    PostsControllers.findAllPosts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getPostsById = (req, res) => {
    const id = req.user.id
    PostsControllers.getPostsById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const createNewPosts = (req, res) => {
    const {title, content, convertURL, categoryId } = req.body
    const userId = req.user.id
    PostsControllers.createPosts({title, content, convertURL, userId, categoryId})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Missing Data'})
        })
  
}

module.exports = {
    getAllPosts,
    getPostsById,
    createNewPosts,
    
}