import { Router } from 'express';
import MarcaController from '../controllers/MarcaController';

const router = Router();

router.get('/', MarcaController.index);
router.get('/:id', MarcaController.show);
router.post('/', MarcaController.store);
router.put('/:id', MarcaController.update); // Adicionei o parâmetro :id para a rota de atualização
router.delete('/:id', MarcaController.delete); // Adicionei a rota de exclusão

export default router;