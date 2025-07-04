import multer from 'multer';
import multerConfig from '../config/multerConfig';

import FotoJogos from '../models/FotoJogos';


const upload = multer(multerConfig).single('foto');

class FotoJogoController {
    
    //Store
    store(req, res) {
        return upload(req, res, async (error) => {
          if (error) {
            return res.status(400).json({ errors: [error.code] });
          }
          console.log(req.file); // Verifique se o campo filename está presente
          const { originalname, filename } = req.file;
          const { id_jogos } = req.body;
      
          if (!originalname || !filename || !id_jogos) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
          }
      
          const fotoJogo = await FotoJogos.create({ originalname, filename, id_jogos });
          return res.json(fotoJogo);
        });
      }
            
      
            //Show
            async listByJogo(req, res) {
              const { id } = req.params;
            
              try {
                const fotos = await FotoJogos.findAll({ where: { id_jogos: id } });
            
                return res.json(fotos);
              } catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar imagens.' });
              }
            }
            
            //Delete
            async delete(req, res) {
              const { id } = req.params;
            
              try {
                const foto = await FotoJogos.findByPk(id);
            
                if (!foto) {
                  return res.status(404).json({ error: 'Imagem não encontrada.' });
                }
            
                await foto.destroy();
            
                return res.json({ message: 'Imagem excluída com sucesso.' });
              } catch (error) {
                return res.status(500).json({ error: 'Erro ao excluir imagem.' });
              }
            }
  
}



export default new FotoJogoController();