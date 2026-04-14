const animaisService = require('../services/animais.service');

// GET /animais
const listarAnimais = async (req, res) => {
  try {
    const animais = await animaisService.listarTodosAnimais();
    res.status(200).json({ total: animais.length, animais });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar animais.' });
  }
};

// GET /animais/:id — Busca animal por ID
const buscarAnimaisPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await animaisService.buscarAnimalPorId(id);

    if (!animal) {
      return res.status(404).json({ erro: `Animal ${id} não encontrado.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar animal.' });
  }
};

// POST /animais — Cadastra novo animal
const criarAnimal = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoAnimal = await animaisService.criarAnimal({ nome, email });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Animal cadastrado com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarAnimais, buscarAnimaisPorId, criarAnimal };
