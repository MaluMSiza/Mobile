const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');

router.post('/abrir', TicketController.abrirChamado);
router.put('/alterar/:id', TicketController.alterarChamado);
router.delete('/excluir/:id', TicketController.excluirChamado);
router.get('/listar', TicketController.listarChamados);

module.exports = router;
