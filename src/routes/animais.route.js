const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animais.controller');

router.get('/', animalController.listarAnimais);
router.get('/:id', animalController.buscarAnimaisPorId);
router.post('/', animalController.criarAnimal);

module.exports = router;
