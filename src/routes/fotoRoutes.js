import { Router } from 'express';
import fotoController from '../controllers/FotoController';



const router = Router();

router.post('/', fotoController.store);


export default router;