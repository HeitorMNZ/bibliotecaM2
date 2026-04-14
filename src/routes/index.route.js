const express = require('express');
const router = express.Router();
// Importação das Rotas
const TutorRoute = require('./Tutor.route');
const animalRoute = require('./animais.route');
// Importação Seletiva de Middlewares
const { autenticar, validarContentType } = require('../middlewares/main.middleware');

// 1. Rota Raiz (Totalmente Pública)
router.get('/', (req, res) => {
  res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'Online' });
});

// 2. Aplicando a "Barreira" de Segurança
// A partir daqui, TUDO exige token e JSON correto
router.use(autenticar);
router.use(validarContentType);

// 3. Rotas Protegidas
router.use('/Tutores', TutorRoute);
router.use('/animais', animalRoute);

// 4. Rota 404 - Caso nenhuma rota acima seja encontrada
router.use((req, res) => {
  res
    .status(404)
    .json({ erro: 'Rota não encontrada na Clínica Heitor.' });
});

module.exports = router;
