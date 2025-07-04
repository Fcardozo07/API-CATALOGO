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
    down: (queryInterface) => queryInterface.dropTable('consoles'),
};