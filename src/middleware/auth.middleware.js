//Passport maneja estrategias
const JwtStrategy = require('passport-jwt').Strategy;

// Estraer el token de los headers de mi peticion
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport')
const jwtSecret = require('../../config').api.jwtSecret
const { findUserById } = require('../users/users.controllers')


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}
passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        try {
            const users = await findUserById(tokenDecoded.id)
            if (!users) {
                return done(null, false) //? No existe error pero tampoco el user
            }
            return done(null, tokenDecoded) //? noexiste un error pero si el user
        } catch (error) {
            return done(error, false) //? si existe el error pero no el usuario
        }
    })
)



module.exports = passport

