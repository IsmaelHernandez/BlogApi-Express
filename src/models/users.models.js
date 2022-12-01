const { DataTypes} = require('sequelize')
// Importamos la bd
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        defaultValue: 'normal'

    },
    country: {
        type: DataTypes.STRING(3)
    }

})

module.exports = Users