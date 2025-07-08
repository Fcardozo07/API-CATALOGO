import Console from '../models/Console';
import User from '../models/User';

class ConsoleController {
  // Store
  async store(req, res) {
    try {
      console.log('Dados recebidos:', req.body); // Log dos dados recebidos
      const novoConsole = await Console.create(req.body);
      return res.json(novoConsole);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Index
  async index(req, res) {
    try {

    const filtros = {};

    if (req.query.id_usuario) {
      filtros.id_usuario = req.query.id_usuario;
    }
      const consoles = await Console.findAll({
        where: filtros,
        attributes: ['id','tipo', 'id_modelo', 'id_marca', 'descricao', 'valor', 'id_usuario']
        }); 
      return res.json(consoles);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      console.log('ID recebido:', req.params.id); // Log do ID recebido
      const consoleData = await Console.findByPk(req.params.id); // Renomeado para consoleData
      console.log('Resultado da busca:', consoleData); // Log do resultado da busca
      if (!consoleData) {
        return res.status(400).json({
          errors: ['Console não existe.']
        });
      }
      const { id, tipo, id_modelo, id_marca, descricao, valor, id_usuario } = consoleData;
      return res.json({ id, tipo, id_modelo, id_marca, descricao, valor, id_usuario });
    } catch (error) {
      console.error('Erro ao buscar Console:', error); // Log do erro
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {

    const userExists = await User.findByPk(req.body.id_usuario);
        if (!userExists) {
        return res.status(400).json({ errors: ['Usuário não existe.'] });
        }

    try {
      // Encontra a Console pelo ID passado na requisição
      const console = await Console.findByPk(req.params.id);

      // Verifica se a Console existe
      if (!console) {
        return res.status(400).json({
          errors: ['Console não existe.']
        });
      }

      // Atualiza a Console com os novos dados
      const novosDados = await console.update(req.body);

      // Extrai os campos desejados para retornar na resposta
      const { id,tipo, id_modelo, id_marca, descricao, valor, id_usuario} = novosDados;

      // Retorna a Console atualizada
      return res.json({id,tipo, id_modelo, id_marca, descricao, valor, id_usuario});
    } catch (error) {
      // Em caso de erro, retorna um status 400 com uma mensagem de erro
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const console = await Console.findByPk(req.params.id);

      if (!console) {
        return res.status(400).json({
          errors: ['Console não existe.']
        });
      }

      await console.destroy();

      return res.json('Console apagado com sucesso!');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }
}

export default new ConsoleController();