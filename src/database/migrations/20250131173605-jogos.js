module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('jogos', {
       id:{
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
       },
       id_console: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: { model: 'consoles', key: 'id' }, // FK para a tabela 'consoles'
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
       },
       id_marca: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: { model: 'marcas', key: 'id' }, // FK para a tabela 'marcas'
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
       },
       titulo: {
              type: Sequelize.STRING,
              allowNull: false,
       },
       descricao: {
              type: Sequelize.STRING,
              allowNull: false,
       },
         valor: {
                  type: Sequelize.INTEGER,
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
    down: (queryInterface) => queryInterface.dropTable('jogos'),
};