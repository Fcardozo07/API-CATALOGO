'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('consoles');
  },

  down: async (queryInterface, Sequelize) => {
    // Código para recriar a tabela, se necessário
    await queryInterface.createTable('consoles===', {
      // Defina as colunas da tabela aqui
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      // Adicione outras colunas conforme necessário
    });
  }
};