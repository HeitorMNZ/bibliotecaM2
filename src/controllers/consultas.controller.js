const consultasService = require('../services/consultas.service');

// GET /consultas — Lista todas as consultas
const listarConsultas = async (req, res) => {
  try {
    const consultas = await consultasService.listarTodasConsultas();
    res.status(200).json({ total: consultas.length, consultas });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar consultas.' });
  }
};

// GET /consultas/:id — Busca consulta por ID
const buscarConsultaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await consultasService.buscarConsultaPorId(id);

    if (!consulta) {
      return res.status(404).json({ erro: `Consulta ${id} não encontrada.` });
    }

    res.status(200).json({ consulta });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar consulta.' });
  }
};

// POST /consultas — Cadastra nova consulta
const criarConsulta = async (req, res) => {
  try {
    const { data, hora, tutorId, animalId, descricao } = req.body;
    const novaConsulta = await consultasService.criarConsulta({
      data,
      hora,
      tutorId,
      animalId,
      descricao,
    });

    res.status(201).json({
      mensagem: 'Consulta cadastrada com sucesso!',
      consulta: novaConsulta,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarConsultas, buscarConsultaPorId, criarConsulta };
