import User from '../models/User';

class UserController {
  // Store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email, perfil });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message)
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email', 'perfil'] }); // Retorna todos os usuários, mostrando apenas id, nome e email
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {    
      const user = await User.findByPk(req.params.id);
      
      const { id, nome, email } = user;
      return res.json({id, nome, email, perfil});
    } catch (error) {
      return res.json(null);
    }
  }
  // Update
  async update(req, res) {
    try {
    const user = await User.findByPk(req.params.id);
 
    if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      } 
      
      const novosDados = await user.update(req.body);
      const { id, nome, email, perfil } = novosDados;
      
      return res.json({ id, nome, email, perfil });
    } catch (error) {
        return res.status(400).json({
            errors: error.errors.map((err) => err.message)
          });
    }
  }
  // Delete
  async delete(req, res) {
    try {
        const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      } 
      
      await user.destroy();
      
      return res.json(`Usuário apagado com sucesso!`);
    } catch (error) {
        return res.status(400).json({
            errors: error.errors.map((err) => err.message)
          });
    }
  }
}

export default new UserController();