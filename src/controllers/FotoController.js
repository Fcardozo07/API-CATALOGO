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

    async index(req, res) {
        try {
            const fotos = await FotoUser.findAll({
                attributes: ['id', 'originalname', 'filename', 'id_usuario'],
    
            });
            return res.json(fotos);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors ? error.errors.map((err) => err.message) : [error.message],
            });
        }
    }

     async show(req, res) {
    try {
      const foto = await FotoUser.findOne({
        where: { id_usuario: req.params.id_usuario },
        attributes: ['id', 'originalname', 'filename', 'id_usuario'],
       

      });

        if (!foto) {
        return res.json([]);
        }   
        return res.json([foto]);

    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : [error.message],
      });
    }
  }


     async delete(req, res) {
        try {
            const foto = await FotoUser.findByPk(req.params.id);
            if (!foto) {
                return res.status(404).json({ error: 'Foto não encontrada' });
            }
            await foto.destroy();
            return res.json({ message: 'Foto deletada com sucesso' });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors ? error.errors.map((err) => err.message) : [error.message],
            });
        }
    }
    
  
}



export default new FotoController();