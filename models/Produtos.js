const Sequelize = require("sequelize");
const connection = require("../database/database")

const Produto = connection.define('produtos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categorias_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Produto