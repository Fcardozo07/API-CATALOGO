


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('marcas', {
           id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          descricao: {
              type: Sequelize.STRING,
              allowNull: false,
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
       
    
  
              down: (queryInterface)  => queryInterface.dropTable('marcas'),
   
     
       
    
  };
  