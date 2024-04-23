// ticketModel.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  dataChamado: { type: Date, required: true },
  nomeAbertura: { type: String, required: true },
  descricaoProblema: { type: String, required: true },
  situacao: { type: String, default: 'pendente' }, // Valor padrão é "pendente"
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
