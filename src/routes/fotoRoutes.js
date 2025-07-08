import { Router } from 'express';
import fotoController from '../controllers/FotoController';



const router = Router();

router.post('/', fotoController.store);
router.get('/', fotoController.index);
router.get('/:id_usuario', fotoController.show);
router.delete('/:id', fotoController.delete);




export default router;