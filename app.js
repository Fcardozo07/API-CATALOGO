import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import consoleRoutes from './src/routes/consoleRoutes';
import marcaRoutes from './src/routes/marcaRoutes';
import modeloRoutes from './src/routes/modeloRoutes';
import assessorioRoutes from './src/routes/assessorioRoutes';
import jogoRoutes from './src/routes/jogoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';
import fotoConsoleRoutes from './src/routes/fotoConsoleRoutes';
import fotoAcessorioRoutes from './src/routes/fotoAcessorioRoutes';
import fotoJogoRoutes from './src/routes/fotoJogoRoutes';
import cors from 'cors';

const path = require('path');



import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }


middlewares() {
    this.app.use(cors({
      origin: '*', // ou substitua pelo domínio do seu frontend, ex: 'http://localhost:3000'
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true // use apenas se estiver usando cookies/autenticação
    }));

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
}


routes() {
    //this.app.use('/',homeRoutes);
    this.app.use('/jogos',jogoRoutes);
    this.app.use('/fotos',fotoRoutes);
    this.app.use('/fotosConsole',fotoConsoleRoutes);
    this.app.use('/users',userRoutes);  
    this.app.use('/marcas',marcaRoutes);  
    this.app.use('/tokens',tokenRoutes);
    this.app.use('/modelos',modeloRoutes); 
    this.app.use('/consoles',consoleRoutes);  
    this.app.use('/acessorios',assessorioRoutes);
    this.app.use('/fotosAcessorios',fotoAcessorioRoutes);
    this.app.use('/fotosJogos',fotoJogoRoutes);
    this.app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

 
}

}

export default new App().app;