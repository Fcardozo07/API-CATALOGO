module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('consoles', 'descricao', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('consoles', 'descricao');
    },
};