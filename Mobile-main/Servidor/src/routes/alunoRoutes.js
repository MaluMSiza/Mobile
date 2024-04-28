const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController'); 

router.post('/autorizar', AlunoController.autorizarAluno);
router.get('/consultar/:data', AlunoController.consultarAlunosPorData);
router.get('/consulte', AlunoController.consultarTodosAlunos)
router.put('/alterar/:id', AlunoController.alterarAutorizacaoAluno);
router.delete('/excluir/:id', AlunoController.excluirAutorizacaoAluno);

module.exports = router;
