import { Router } from 'express';
import JogoController from '../controllers/JogoController';

const router = Router();

router.get('/', JogoController.index);
router.get('/:id', JogoController.show);
router.post('/', JogoController.store);
router.put('/:id', JogoController.update); // Adicionei o parâmetro :id para a rota de atualização
router.delete('/:id', JogoController.delete); // Adicionei a rota de exclusão

export default router;