import Marca from '../models/Marca';

class MarcaController {
  // Store
  async store(req, res) {
    try {
      const novoMarca = await Marca.create(req.body);
      return res.json(novoMarca);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const marcas = await Marca.findAll({ attributes: ['id', 'descricao'] }); // retorna todos os registros
      return res.json(marcas);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const marca = await Marca.findByPk(req.params.id);
      if (!marca) {
        return res.status(400).json({
          errors: ['Marca não existe.']
        });
      }
      const { id, descricao } = marca;
      return res.json({ id, descricao });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Encontra a marca pelo ID passado na requisição
      const marca = await Marca.findByPk(req.params.id);

      // Verifica se a marca existe
      if (!marca) {
        return res.status(400).json({
          errors: ['Marca não existe.']
        });
      }

      // Atualiza a marca com os novos dados
      const novosDados = await marca.update(req.body);

      // Extrai os campos desejados para retornar na resposta
      const { id, descricao } = novosDados;

      // Retorna a marca atualizada
      return res.json({ id, descricao });
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
      const marca = await Marca.findByPk(req.params.id);

      if (!marca) {
        return res.status(400).json({
          errors: ['Marca não existe.']
        });
      }

      await marca.destroy();

      return res.json('Marca apagada com sucesso!');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors ? error.errors.map((err) => err.message) : ['Erro desconhecido']
      });
    }
  }
}

export default new MarcaController();