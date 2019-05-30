'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cod_lote: {
        type: Sequelize.INTEGER
      },
      etapa: {
        type: Sequelize.STRING
      },
      responsavel: {
        type: Sequelize.STRING
      },
      maquina: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATE
      },
      data_fim: {
        type: Sequelize.DATE
      },
      data_atualizacao: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      id_produto: {
        type: Sequelize.INTEGER
      },
      trajeto: {
        type: Sequelize.STRING
      },
      quantidade_produtos: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lotes');
  }
};