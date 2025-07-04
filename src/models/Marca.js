import { Sequelize, Model } from "sequelize";

export default class Marca extends Model {
  static init(sequelize) {
    super.init(
      {
 
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}