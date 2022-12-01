const bcrypt = require('bcrypt')

//? Funcion para encryptar una password
const hashPassword = (plainPassword) => {
    //? plain conraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}

//?  Funcion para comparar la contraseña con la encryptada
const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword)
}

// console.log(comparePassword('Isma123','$2b$10$QevW.bL1urkS1xfZ7xDkcO5pKS5vpIjzbG5Gx/s6RktauB7wDfSdm'))

module.exports = {
    hashPassword,
    comparePassword
}