import multer from 'multer';
import multerConfig from '../config/multerConfig';

import FotoAcessorios from '../models/FotoAcessorios';


const upload = multer(multerConfig).single('foto');

class FotoAcessorioController {
    //Store
    store(req, res) {
        return upload(req, res, async (error) => {
          if (error) {
            return res.status(400).json({ errors: [error.code] });
          }
          console.log(req.file); // Verifique se o campo filename está presente
          const { originalname, filename } = req.file;
          const { id_acessorio: id_acessorio } = req.body;
      
          if (!originalname || !filename || !id_acessorio) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
          }
      
          const fotoAcessorio = await FotoAcessorios.create({ originalname, filename, id_acessorio: id_acessorio });
          return res.json(fotoAcessorio);
        });
      }
            
            async listByAcessorio(req, res) {
              const { id } = req.params;
            
              try {
                const fotos = await FotoAcessorios.findAll({ where: { id_acessorio: id } });
            
                return res.json(fotos);
              } catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar imagens.' });
              }
            }
            
            //Delete
            async delete(req, res) {
              const { id } = req.params;
        
              try {
                const foto = await FotoAcessorios.findByPk(id);
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



export default new FotoAcessorioController();