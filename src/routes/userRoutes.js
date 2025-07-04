import { Router } from 'express';
import UserController from '../controllers/UserController'; 
import loginRequired from '../midllewares/loginRequired';

const router = Router();
//No caso de um sistema real, estes não deveriam existir, pois qualquer um poderia acessar os dados dos usuários
router.get('/', UserController.index); // Rota para listar todos os usuários
router.get('/:id', UserController.show); // Rota para listar um usuário específico

//Estes podem existir, pois são rotas de autenticação
router.post('/', UserController.store); // Rota para criar um novo usuário, este pode ser acessado por qualquer um
router.put('/:id', UserController.update); // Rota para atualizar um usuário com autenticação
router.delete('/:id', UserController.delete); // Rota para deletar um usuário com autenticação
export default router;