const express = require('express');
const router = express.Router();
const LancheController = require('../controllers/LancheController');

router.put('/entregar/:id', LancheController.marcarEntrega);
router.get('/listar/:data', LancheController.listarLanchesPorData);

module.exports = router;
