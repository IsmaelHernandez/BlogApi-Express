const Posts = require('../models/posts.models')
const uuid = require('uuid')
const Categories = require('../models/categories.models')

const findAllPosts = async () => {
    const data = await Posts.findAll({
        include: [
            {
                model: Categories
                
            }
        ]
    })
    return data 
}

const createPosts = async (obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        title: obj.title,
        content: obj.content,
        userId: obj.userId,
        convertURL: obj.convertURL,
        categoryId: obj.categoryId

    })
    return data
}

const findPostById = async (id) =>{
    const data = await Posts.findOne({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    createPosts,
    findPostById,
}