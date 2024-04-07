const Sequelize = require("sequelize");
const connection = require("../database/database")

const Pagamento = connection.define("pagamentos", {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Pagamento.associate = (models) => {
    Pagamento.belongsTo(models.Pedido, {foreignKey: 'pagamentos_id'});
}

module.exports = Pagamento