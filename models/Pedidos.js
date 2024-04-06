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

module.exports = Pedido