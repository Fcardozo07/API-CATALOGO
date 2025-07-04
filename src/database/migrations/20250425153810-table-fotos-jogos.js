const { password } = require("../../config/database");



module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('fotos_jogos', {
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
          
          id_jogos: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'jogos',
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
                   down: (queryInterface)  => queryInterface.dropTable('fotos_jogos'),
   
  };
  