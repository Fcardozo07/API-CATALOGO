const { password } = require("../../config/database");



module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
           id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          nome: {
              type: Sequelize.STRING,
              allowNull: false,
          },          
   
          email: {
              type: Sequelize.STRING,
              allowNull: true,
              unique: true,
          },
          password_hash: {
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
       
    
  
              down: (queryInterface)  => queryInterface.dropTable('users'),
   
     
       
    
  };
  