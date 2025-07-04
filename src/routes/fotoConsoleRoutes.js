import { Router } from 'express';
import FotoConsoleController from '../controllers/FotoConsoleController';



const router = Router();

router.post('/', FotoConsoleController.store);
router.get('/console/:id', FotoConsoleController.listByConsole);
router.delete('/:id', FotoConsoleController.delete);


export default router;