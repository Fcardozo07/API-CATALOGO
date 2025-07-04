module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('consoles', 'valor', {
            type: Sequelize.FLOAT,
            allowNull: true,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('consoles', 'valor', {
            type: Sequelize.INTEGER,
            allowNull: true,
        });
    }
};