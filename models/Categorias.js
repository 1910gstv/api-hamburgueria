const Sequelize = require("sequelize");
const connection = require("../database/database")

const Categoria = connection.define("categorias", {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Categoria.associate = (models) => {
    Categoria.belongsTo(models.Produto , {foreignKey: "categorias_id"})
}

module.exports = Categoria