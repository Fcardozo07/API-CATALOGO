import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Console from "../models/Console";
import User from "../models/User";
import Marca from "../models/Marca";
import Modelo from "../models/Modelo";
import Assessorio from "../models/Acessorio";
import Jogo from "../models/Jogo";
import FotoUser from "../models/FotoUser";
import FotoConsoles from "../models/FotoConsoles";
import FotoAcessorios from "../models/FotoAcessorios";
import FotoJogos from "../models/FotoJogos";


const models = [Console, User, Marca, Modelo, Assessorio, Jogo, FotoUser, FotoConsoles, FotoAcessorios, FotoJogos];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));