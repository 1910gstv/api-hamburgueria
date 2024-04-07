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
});

Produto.associate = (models) => {
    Produto.hasOne(models.Categoria, {foreignKey: "categorias_id"})
    Produto.belongsToMany(models.PedidoProduto, { foreignKey: "ProdutoId"})
}

module.exports = Produto