import { Router } from 'express';
import FotoJogoController from '../controllers/FotoJogoController';



const router = Router();

router.post('/', FotoJogoController.store);
router.get('/jogo/:id', FotoJogoController.listByJogo);
router.delete('/:id', FotoJogoController.delete);


export default router;