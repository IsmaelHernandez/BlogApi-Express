const checkUserCredential = require('./auth.controllers')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../../config').api.jwtSecret

const postLogin = (req, res) => {
    const {email, password} = req.body
    if(email && password){
        checkUserCredential(email, password)
            .then((data) => {
               if(data){
                    // Generar el toekn
                    const token = jwt.sign({
                        //inf que se encrypta en el token
                        // se le pasa palabra secreta
                        id: data.id,
                        role: data.role
                    }, jwtSecret)

                    res.status(200).json({
                        message: 'Correct Credential',
                        token: token
                    })
               }else{
                    res.status(401).json({message: 'Invallid Credential'})
               }
            })
            .catch((err) => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.status(400).json({message: 'Missing Data'})
    }
}

module.exports = {
    postLogin
}