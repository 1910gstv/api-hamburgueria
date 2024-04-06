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

module.exports = PedidoProduto