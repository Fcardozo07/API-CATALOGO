import { Sequelize, Model } from "sequelize";

export default class Acessorio extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: Sequelize.STRING,
        id_marca: Sequelize.INTEGER,
        id_modelo: Sequelize.INTEGER,
        id_console: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        valor: Sequelize.FLOAT,
        descricao: Sequelize.STRING,
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