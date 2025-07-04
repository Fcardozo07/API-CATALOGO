import Modelo from '../models/Modelo';

class ModeloController {
  // Store
  async store(req, res) {
    try {
      const novoModelo = await Modelo.create(req.body);
      return res.json(novoModelo);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const Modelos = await Modelo.findAll({ attributes: ['id', 'id_marca', 'descricao'] }); // retorna todos os registros
      return res.json(Modelos);
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
      const modelo = await Modelo.findByPk(req.params.id);
      console.log('Resultado da busca:', modelo); // Log do resultado da busca
      if (!modelo) {
        return res.status(400).json({
          errors: ['Modelo não existe.']
        });
      }
      const { id, id_marca, descricao } = modelo;
      return res.json({ id, id_marca, descricao });
    } catch (error) {
      console.error('Erro ao buscar modelo:', error); // Log do erro
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Encontra a Modelo pelo ID passado na requisição
      const modelo = await Modelo.findByPk(req.params.id);

      // Verifica se a Modelo existe
      if (!modelo) {
        return res.status(400).json({
          errors: ['Modelo não existe.']
        });
      }

      // Atualiza a Modelo com os novos dados
      const novosDados = await modelo.update(req.body);

      // Extrai os campos desejados para retornar na resposta
      const { id, id_marca, descricao } = novosDados;

      // Retorna a Modelo atualizada
      return res.json({ id, id_marca, descricao });
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
      const modelo = await Modelo.findByPk(req.params.id);

      if (!modelo) {
        return res.status(400).json({
          errors: ['Modelo não existe.']
        });
      }

      await modelo.destroy();

      return res.json('Modelo apagado com sucesso!');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }
}

export default new ModeloController();