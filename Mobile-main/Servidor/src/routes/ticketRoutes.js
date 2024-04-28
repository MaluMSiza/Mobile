const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticketController');

router.put('/alterar/:id', TicketController.alterarChamado);
router.get('/listar', TicketController.listarChamados);

module.exports = router;
