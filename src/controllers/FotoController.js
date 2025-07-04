import multer from 'multer';
import multerConfig from '../config/multerConfig';

import FotoUser from '../models/FotoUser';


const upload = multer(multerConfig).single('foto');

class FotoController {
    store(req, res) {
        return upload(req, res, async (error) => {
          if (error) {
            return res.status(400).json({ errors: [error.code] });
          }
          console.log(req.file); // Verifique se o campo filename está presente
          const { originalname, filename } = req.file;
          const { id_usuario } = req.body;
      
          if (!originalname || !filename || !id_usuario) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
          }
      
          const fotoUser = await FotoUser.create({ originalname, filename, id_usuario });
          return res.json(fotoUser);
        });
      }

  
}



export default new FotoController();