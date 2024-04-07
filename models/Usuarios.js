const Sequelize = require("sequelize");
const connection = require("../database/database")

const Usuario = connection.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Usuario.associate = (models) => {
    Usuario.hasOne(models.Endereco, {foreignKey: "endereco_id"})
    Usuario.belongsTo(models.Pedido, {foreignKey: "usuario_id"});
}

module.exports = Usuario