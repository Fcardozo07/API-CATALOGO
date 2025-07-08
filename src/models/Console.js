import { Sequelize, Model } from "sequelize";

export default class Console extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: Sequelize.STRING,        
        id_marca: Sequelize.INTEGER,
        id_modelo: Sequelize.INTEGER,
        valor: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
        id_usuario: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
      },
      {
        sequelize,
      }
    );
  }
}