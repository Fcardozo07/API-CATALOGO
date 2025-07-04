import { Sequelize, Model } from "sequelize";

export default class Modelo extends Model {
  static init(sequelize) {
    super.init(
      {
        id_marca: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
        
      },
      {
        sequelize,
      }
    );
  }
}