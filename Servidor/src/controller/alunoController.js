const Aluno = require('../models/alunoModel'); // Importe o modelo do aluno

const AlunoController = {
  async autorizarAluno(req, res) {
    try {
      const { codigo, nome, dataLiberacaoLanche, qtdeLanches } = req.body;
      const aluno = new Aluno({ codigo, nome, dataLiberacaoLanche, qtdeLanches });
      const autorizado = await aluno.save();
      res.status(201).json(autorizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async consultarAlunosPorData(req, res) {
    try {
      const { data } = req.params;
      const alunos = await Aluno.find({ dataLiberacaoLanche: data });
      res.status(200).json(alunos);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async alterarAutorizacaoAluno(req, res) {
    try {
      const { id } = req.params;
      const { codigo, nome, dataLiberacaoLanche, qtdeLanches } = req.body;
      const alunoAtualizado = await Aluno.findByIdAndUpdate(id, { codigo, nome, dataLiberacaoLanche, qtdeLanches }, { new: true });
      res.status(200).json(alunoAtualizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async excluirAutorizacaoAluno(req, res) {
    try {
      const { id } = req.params;
      await Aluno.findByIdAndDelete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = AlunoController;
