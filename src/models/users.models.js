const { DataTypes} = require('sequelize')
// Importamos la bd
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
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
        type: DataTypes.STRING
    }

})

module.exports = Users