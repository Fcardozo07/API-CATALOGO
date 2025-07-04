const { password } = require("../../config/database");



module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('fotos_users', {
           id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          originalname: {
              type: Sequelize.STRING,
              allowNull: false,
          }, 
          filelname: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          
          id_usuario: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'users',
              key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
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
       
    
  
              down: (queryInterface)  => queryInterface.dropTable('fotos_users'),
   
     
       
    
  };
  