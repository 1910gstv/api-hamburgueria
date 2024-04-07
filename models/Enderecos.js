const Sequelize = require("sequelize");
const connection = require("../database/database");

const Endereco = connection.define("enderecos", {
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //Acrescentar coluna numero
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Endereco.associate = (models) => {
  Endereco.belongsTo(models.Usuario, {foreignKey: "endereco_id"})
}

module.exports = Endereco;
