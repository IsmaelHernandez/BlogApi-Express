const express = require('express')
const app = express()
const port = require('../config').api.port
const usersRouter = require('./users/users.router')
const db = require('./utils/database')

//? Para ver si se hizo bien la autenticacion de la BD
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

//? syncronizacion de las tablas
db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err))

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/api/v1/users', usersRouter)

app.listen(port, () => {
    console.log(`Started app listening on port ${port}`)
})