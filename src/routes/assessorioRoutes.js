import { Router } from 'express';
import AcessorioController from '../controllers/AcessorioController';

const router = Router();

router.get('/', AcessorioController.index);
router.get('/:id', AcessorioController.show);
router.post('/', AcessorioController.store);
router.put('/:id', AcessorioController.update); // Adicionei o parâmetro :id para a rota de atualização
router.delete('/:id', AcessorioController.delete); // Adicionei a rota de exclusão

export default router;