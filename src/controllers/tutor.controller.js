// CONTROLLER: Coordena a comunicação entre a Rota e o Service.
// Extrai dados do req, chama o Service e formata a resposta com res.
// Nunca contém regra de negócio — apenas orquestração.

const tutorService = require('../services/tutor.service');

// GET /Tutors — Lista todos os Tutors
const listarTutores = async (req, res) => {
  try {
    const tutores = await tutorService.listarTodosTutores();
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};

// GET /Tutors/:id — Busca Tutor por ID
const buscarTutorPorId = async (req, res) => {
  try {
    // Extrai o parâmetro da URL — essa é a responsabilidade do Controller
    const { id } = req.params;
    const tutor = await tutorService.buscarTutorPorId(id);

    // Se o Service retornou null, o Tutor não existe
    if (!tutor) {
      return res
        .status(404)
        .json({ erro: `Tutor ${id} não encontrado no acervo.` });
    }

    res.status(200).json({ tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar tutor.' });
  }
};

// POST /Tutors — Cadastra novo Tutor
const criarTutor = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição
    const { titulo, autor } = req.body;
    const novoTutor = await tutorService.criarTutor({ titulo, autor });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Tutor cadastrado no acervo com sucesso!',
      tutor: novoTutor,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarTutores, buscarTutorPorId, criarTutor };
