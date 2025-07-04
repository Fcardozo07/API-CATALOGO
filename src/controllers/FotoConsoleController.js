import multer from 'multer';
import multerConfig from '../config/multerConfig';

import FotoConsoles from '../models/FotoConsoles';


const upload = multer(multerConfig).single('foto');

class FotoConsoleController {
    
    //Store
    store(req, res) {
        return upload(req, res, async (error) => {
          if (error) {
            return res.status(400).json({ errors: [error.code] });
          }
          console.log(req.file); // Verifique se o campo filename está presente
          const { originalname, filename } = req.file;
          const { id_console } = req.body;
      
          if (!originalname || !filename || !id_console) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
          }
      
          const fotoConsoles = await FotoConsoles.create({ originalname, filename, id_console });
          return res.json(fotoConsoles);
        });
      }

      //Show
      async listByConsole(req, res) {
        const { id } = req.params;
      
        try {
          const fotos = await FotoConsoles.findAll({ where: { id_console: id } });
      
          return res.json(fotos);
        } catch (error) {
          return res.status(500).json({ error: 'Erro ao buscar imagens.' });
        }
      }

      //Delete
      async delete(req, res) {
        const { id } = req.params;

        try {
          const foto = await FotoConsoles.findByPk(id);
                if (!foto) {
            return res.status(404).json({ error: 'Foto não encontrada.' });
          }
          await foto.destroy();
          return res.json({ message: 'Foto excluída com sucesso.' });

        }catch (error) {
          return res.status(500).json({ error: 'Erro ao excluir a foto.' });
        }
      }

        
    
      
  
}



export default new FotoConsoleController();