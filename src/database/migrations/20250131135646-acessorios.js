module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('assessorios', {
   id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
    },
    id_marca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'marcas', key: 'id' }, // FK para a tabela 'marcas'
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    id_modelo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'modelos', key: 'id' }, // FK para a tabela 'modelos'
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    id_console: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'consoles', key: 'id' }, // FK para a tabela 'consoles'
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    valor: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },    
    }),
    down: (queryInterface) => queryInterface.dropTable('assessorios'),
};