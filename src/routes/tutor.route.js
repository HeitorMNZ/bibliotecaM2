// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const router = require('express').Router();
const TutorController = require('../controllers/tutor.controller');

router.get('/', TutorController.listarTutores);
router.get('/:id', TutorController.buscarTutorPorId);
router.post('/', TutorController.criarTutor);

module.exports = router;
