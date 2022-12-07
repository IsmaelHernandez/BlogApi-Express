//? Aqui se manejara el tema de las relaciones
const Categories = require('./categories.models')
const Posts = require('./posts.models')
const Users = require('./users.models')



const initModels = () => {
    //? Relacionar categoris con post 1 -> M una categoria tiene muchas publicaciones
    Categories.hasMany(Posts)
    //? Post -> 1 category un posts pertenece a una categoria
    Posts.belongsTo(Categories)
    //? un usuario tiene muchos post
    Users.hasMany(Posts)
    
    //? Un post pertenece a un usuario
    Posts.belongsTo(Users)
}

module.exports = initModels