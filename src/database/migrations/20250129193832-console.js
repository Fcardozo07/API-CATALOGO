


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('consoles', {
           id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          tipo: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          modelo: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          Marca: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          valor: {
              type: Sequelize.INTEGER,
              allowNull: true,
          },
          descricao: {
              type: Sequelize.STRING,
              allowNull: true,
          },
          created_at: {
              type: Sequelize.DATE,
              allowNull: false,
          },
          updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
          },
  }),
       
    
  
              down: (queryInterface)  => queryInterface.dropTable('consoles'),
   
     
       
    
  };
  