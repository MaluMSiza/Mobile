// LancheController.js
const Lanche = require('../models/lancheModel');

const LancheController = {
  async marcarEntrega(req, res) {
    try {
      const { id } = req.params;
      const lancheEntregue = await Lanche.findByIdAndUpdate(id, { entregue: true }, { new: true });
      res.status(200).json(lancheEntregue);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async listarLanchesPorData(req, res) {
    try {
      const { data } = req.params;
      const lanches = await Lanche.find({ dataLanche: data });
      res.status(200).json(lanches);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = LancheController;
