// TicketController.js
const Ticket = require('../models/ticketModel');

const TicketController = {
  async abrirChamado(req, res) {
    try {
      const { dataChamado, nomeAbertura, descricaoProblema } = req.body;
      const ticket = new Ticket({ dataChamado, nomeAbertura, descricaoProblema });
      const chamado = await ticket.save();
      res.status(201).json(chamado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async alterarChamado(req, res) {
    try {
      const { id } = req.params;
      const { dataChamado, nomeAbertura, descricaoProblema, situacao } = req.body;
      const chamadoAtualizado = await Ticket.findByIdAndUpdate(id, { dataChamado, nomeAbertura, descricaoProblema, situacao }, { new: true });
      res.status(200).json(chamadoAtualizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async excluirChamado(req, res) {
    try {
      const { id } = req.params;
      await Ticket.findByIdAndDelete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async listarChamados(req, res) {
    try {
      const { filtro } = req.query;
      let chamados;
      if (filtro === 'atendidos') {
        chamados = await Ticket.find({ situacao: 'atendido' });
      } else if (filtro === 'pendentes') {
        chamados = await Ticket.find({ situacao: 'pendente' });
      } else {
        chamados = await Ticket.find();
      }
      res.status(200).json(chamados);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = TicketController;
