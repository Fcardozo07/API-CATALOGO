import Jogo from '../models/Jogo';

class JogoController {
  // Store
  async store(req, res) {
    try {
      console.log('Dados recebidos:', req.body); // Log dos dados recebidos
      const novoJogo = await Jogo.create(req.body);
      return res.json(novoJogo);
    } catch (error) {
      console.error('Erro ao criar Jogo:', error); // Log do erro
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Index
// Index
async index(req, res) {
  try {
    // Monta filtro dinâmico
    const filtros = {};

    if (req.query.id_usuario) {
      filtros.id_usuario = req.query.id_usuario;
    }

    const jogos = await Jogo.findAll({
      where: filtros,
      attributes: ['id', 'titulo', 'id_marca', 'id_modelo', 'descricao', 'valor', 'id_usuario'],
    });

    return res.json(jogos);
  } catch (error) {
    return res.status(400).json({
      errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido'],
    });
  }
}


  // Show
  async show(req, res) {
    try {
        console.log('ID recebido:', req.params.id); // Log do ID recebido
      const jogoData = await Jogo.findByPk(req.params.id); // Renomeado para consoleData
      console.log('Resultado da busca:', jogoData); // Log do resultado da busca
      if (!jogoData) {
        return res.status(400).json({
          errors: ['Jogo não existe.']
        });
      }
      const { id, titulo,  id_marca, descricao, valor, id_modelo } = jogoData;
      return res.json({ id, titulo, id_modelo,  id_marca, descricao, valor });
    } catch (error) {
      console.error('Erro ao buscar Jogo:', error); // Log do erro
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Encontra a Console pelo ID passado na requisição
      const jogo = await Jogo.findByPk(req.params.id);

      // Verifica se a Console existe
      if (!jogo) {
        return res.status(400).json({
          errors: ['Jogo não existe.']
        });
      }

      // Atualiza a Console com os novos dados
      const novosDados = await jogo.update(req.body);

      // Extrai os campos desejados para retornar na resposta
      const { id, titulo, id_modelo,  id_marca, descricao, valor } = novosDados;

      // Retorna a Console atualizada
      return res.json({id, titulo, id_modelo,  id_marca, descricao, valor });
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
      const jogo = await Jogo.findByPk(req.params.id);

      if (!jogo) {
        return res.status(400).json({
          errors: ['Jogo não existe.']
        });
      }

      await jogo.destroy();

      return res.json('Jogo apagado com sucesso!');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }
}

export default new JogoController();