import { Sequelize, Model } from "sequelize";

export default class FotoUser extends Model {
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
         id_usuario: { // <-- adiciona aqui!
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        
      },
      {
        sequelize,
        tableName: 'fotos_users',
      }
    );
  }
  associate(models){
      this.belongsTo(models.User, {foreignKey: 'id_usuario'});
  }
}