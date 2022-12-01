const express = require('express')
const app = express()
const config = require('./src/config')

app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.listen(config.port, () => {
    console.log(`Started app listening on port ${config.port}`)
})