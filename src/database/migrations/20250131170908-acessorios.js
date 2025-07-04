module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('assessorios', {
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
        },
        id_modelo: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_console: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        valor: {
            type: Sequelize.FLOAT,
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
    down: (queryInterface) => queryInterface.dropTable('assessorios'),
};