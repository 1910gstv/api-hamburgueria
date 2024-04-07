const Sequelize = require("sequelize");
const connection = require("../database/database")

const PedidoProduto = connection.define("pedidosprodutos", {
    PedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ProdutoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

PedidoProduto.associate = (models) => {
    PedidoProduto.hasOne(models.Pedido, {foreignKey: "PedidoId"})
    PedidoProduto.hasOne(models.Produto, {foreignKey: "ProdutoId"})
}

module.exports = PedidoProduto