const Aluno = require('../models/alunoModel'); // Importe o modelo do aluno

const AlunoController = {
  async autorizarAluno(req, res) {
      const aluno = new Aluno(req.body);
      await aluno
        .save()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
           res.status(500).json(error);
        });
  },
  async consultarTodosAlunos(req, res) {
    try {
      const aluno = await Aluno.find();
      res.status(200).json(aluno);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async consultarAlunosPorData(req, res) {
    try {
      const { data } = req.params;
      const aluno = await Aluno.find({ dataLiberacaoLanche: data });
      res.status(200).json(aluno);
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

module.exports = AlunoController();
