import { Router } from 'express';
import ModeloController from '../controllers/ModeloController';

const router = Router();

router.get('/', ModeloController.index);
router.get('/:id', ModeloController.show);
router.post('/', ModeloController.store);
router.put('/:id', ModeloController.update); // Adicionei o parâmetro :id para a rota de atualização
router.delete('/:id', ModeloController.delete); // Adicionei a rota de exclusão

export default router;