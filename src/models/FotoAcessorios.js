import { Sequelize, Model } from "sequelize";

export default class FotoAcessorios extends Model {
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
        id_acessorio: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        
      },
      {
        sequelize,
        tableName: 'fotos_acessorios',
      }
    );
  }
  associate(models){
      this.belongsTo(models.Acessorio, {foreignKey: 'id_acessorio'});
  }
}