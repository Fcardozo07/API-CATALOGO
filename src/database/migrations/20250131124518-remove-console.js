module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('jogos');
    },
    down: (queryInterface, Sequelize) => {
        // Código para recriar a tabela, se necessário
        
    }
};