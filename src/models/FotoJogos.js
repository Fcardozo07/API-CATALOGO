import { Sequelize, Model } from "sequelize";

export default class FotoJogos extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname:{
            type: Sequelize.STRING,
            defaultValue: "",
            validate:{
               notEmpty:{
                   msg: "Campo não pode ser vazio"
               }
            }
        },
        filename:{
            type: Sequelize.STRING,
            defaultValue: "",
            validate:{
               notEmpty:{
                   msg: "Campo não pode ser vazio"
               }
            }
        },
        id_jogos: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        
      },
      {
        sequelize,
        tableName: 'fotos_jogos',
      }
    );
  }
  associate(models){
      this.belongsTo(models.jogo, {foreignKey: 'id_jogos'});
  }
}