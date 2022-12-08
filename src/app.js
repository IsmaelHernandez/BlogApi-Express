const express = require('express')
const app = express()

const port = require('../config').api.port

const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const postsRouter = require('./posts/posts.router')

const db = require('./utils/database')
const initModels = require('./models/initModels')

//? Para ver si se hizo bien la autenticacion de la BD
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

//? syncronizacion de las tablas
db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postsRouter)

app.listen(port, () => {
    console.log(`Started app listening on port ${port}`)
})