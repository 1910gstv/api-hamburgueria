const Sequelize = require("sequelize");
const connection = require("../database/database");

const Endereco = connection.define("enderecos", {
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
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

module.exports = Endereco;
