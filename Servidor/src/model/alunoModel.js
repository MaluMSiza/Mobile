const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  dataLiberacaoLanche: { type: Date, required: true },
  qtdeLanches: { type: Number, required: true, max: 3 },
});

const Aluno = mongoose.model('Aluno', alunoSchema);
module.exports = Aluno;

