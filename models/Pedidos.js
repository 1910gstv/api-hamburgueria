const Sequelize = require("sequelize");
const connection = require("../database/database")

const Pedido = connection.define("pedidos", {
    data_pedido: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    valor_total : {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    pagamentos_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Pedido.associate = (models) => {
    Pedido.hasOne(models.Usuario, {foreignKey: "usuario_id"});
    Pedido.hasOne(models.Pagamento, { foreignKey: "pagamentos_id"});
    Pedido.belongsToMany(models.PedidoProduto, {foreignKey: "PedidoId"});
}
module.exports = Pedido