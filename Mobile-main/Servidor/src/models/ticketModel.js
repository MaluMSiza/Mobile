const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  alunoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true }, // Referência ao aluno pelo ID
  alunoNome: { type: String, required: true }, // Nome do aluno
  podePegarLanche: { type: Boolean, default: false }, // Booleano para validar se pode ou não pegar lanche
  situacao: { type: String, default: 'pendente' }, // Situação do ticket
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
