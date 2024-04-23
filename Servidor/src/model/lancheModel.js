// lancheModel.js
const mongoose = require('mongoose');

const lancheSchema = new mongoose.Schema({
  dataLanche: { type: Date, required: true },
  codigoAluno: { type: String, required: true },
  qtdeLanches: { type: Number, required: true, max: 3 },
  entregue: { type: Boolean, default: false }, // Valor padrão é false
});

const Lanche = mongoose.model('Lanche', lancheSchema);

module.exports = Lanche;
