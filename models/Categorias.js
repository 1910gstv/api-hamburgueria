const Sequelize = require("sequelize");
const connection = require("../database/database")

const Categoria = connection.define("categorias", {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Categoria