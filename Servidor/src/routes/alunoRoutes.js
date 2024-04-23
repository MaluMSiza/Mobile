const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController'); // Importe o controlador dos alunos

// Rotas para autorização de alunos
router.post('/autorizar', AlunoController.autorizarAluno);
router.get('/consultar/:data', AlunoController.consultarAlunosPorData);
router.put('/alterar/:id', AlunoController.alterarAutorizacaoAluno);
router.delete('/excluir/:id', AlunoController.excluirAutorizacaoAluno);

module.exports = router;
