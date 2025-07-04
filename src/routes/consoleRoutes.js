import { Router } from 'express';
import ConsoleController from '../controllers/ConsoleController';

const router = Router();

router.get('/', ConsoleController.index);
router.get('/:id', ConsoleController.show);
router.post('/', ConsoleController.store);
router.put('/:id', ConsoleController.update); // Adicionei o parâmetro :id para a rota de atualização
router.delete('/:id', ConsoleController.delete); // Adicionei a rota de exclusão

export default router;