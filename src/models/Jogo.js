import { Sequelize, Model } from "sequelize";

export default class Jogo extends Model {
  static init(sequelize) {
    super.init(
      {
        
        id_marca: Sequelize.INTEGER,       
        id_modelo: Sequelize.INTEGER,
        valor: Sequelize.FLOAT,
        descricao: Sequelize.STRING,
        titulo: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true, // Habilita timestamps
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
  }
}