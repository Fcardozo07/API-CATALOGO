import { Router } from 'express';
import FotoAcessorioController from '../controllers/FotoAcessorioController';



const router = Router();

router.post('/', FotoAcessorioController.store);
router.get('/acessorio/:id', FotoAcessorioController.listByAcessorio);
router.delete('/:id', FotoAcessorioController.delete);


export default router;