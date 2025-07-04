module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn('fotos_users', 'filelname', 'filename');
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn('fotos_users', 'filename', 'filelname');
    }
  };