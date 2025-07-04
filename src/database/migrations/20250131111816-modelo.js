


module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('modelos', {
           id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          id_marca: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'marcas', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
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
                down: (queryInterface)  => queryInterface.dropTable('modelos'),
};  
  