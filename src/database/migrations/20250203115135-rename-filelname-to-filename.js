module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn('fotos_assessorios', 'filelname', 'filename');
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn('fotos_assessorios', 'filename', 'filelname');
    }
  };