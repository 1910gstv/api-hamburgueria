const Sequelize = require("sequelize");
const connection = require("../database/database")

const Pagamento = connection.define("pagamentos", {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Pagamento