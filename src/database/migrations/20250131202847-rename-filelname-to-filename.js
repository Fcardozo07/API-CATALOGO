module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn('fotos_consoles', 'filelname', 'filename');
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn('fotos_consoles', 'filename', 'filelname');
    }
  };