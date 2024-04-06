const Sequelize = require("sequelize");
const connection = require("../database/database")

const Usuario = connection.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Usuario