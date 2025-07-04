

import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = Router();

router.get('/:id', HomeController.index);


export default router;