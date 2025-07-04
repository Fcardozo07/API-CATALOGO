import Acessorio from '../models/Acessorio';

class AcessorioController {
  // Store
  async store(req, res) {
    try {
      console.log('Dados recebidos:', req.body); // Log dos dados recebidos
      const novoAcessorio = await Acessorio.create(req.body);
      return res.json(novoAcessorio);
    } catch (error) {
      console.error('Erro ao criar Acessorio:', error); // Log do erro
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const acessorios = await Acessorio.findAll({ attributes: ['id','tipo', 'id_modelo', 'id_marca', 'descricao','valor'] }); // retorna todos os registros
      return res.json(acessorios);
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
      const acessoriosData = await Acessorio.findByPk(req.params.id); // Renomeado para consoleData
      console.log('Resultado da busca:', acessoriosData); // Log do resultado da busca
      if (!acessoriosData) {
        return res.status(400).json({
          errors: ['Acessorio não existe.']
        });
      }
      const { id, tipo, id_modelo, id_marca, descricao, valor } = acessoriosData;
      return res.json({ id, tipo, id_modelo, id_marca, descricao, valor });
    } catch (error) {
      console.error('Erro ao buscar Acessorio:', error); // Log do erro
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Encontra a Console pelo ID passado na requisição
      const acessorios = await Acessorio.findByPk(req.params.id);

      // Verifica se a Console existe
      if (!acessorios) {
        return res.status(400).json({
          errors: ['Acessorio não existe.']
        });
      }

      // Atualiza a Console com os novos dados
      const novosDados = await acessorios.update(req.body);

      // Extrai os campos desejados para retornar na resposta
      const { id,tipo, id_modelo, id_marca, descricao, valor} = novosDados;

      // Retorna a Console atualizada
      return res.json({id,tipo, id_modelo, id_marca, descricao, valor});
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
      const acessorios = await Acessorio.findByPk(req.params.id);

      if (!acessorios) {
        return res.status(400).json({
          errors: ['Acessorio não existe.']
        });
      }

      await acessorios.destroy();

      return res.json('Acessorio apagado com sucesso!');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }
}

export default new AcessorioController();