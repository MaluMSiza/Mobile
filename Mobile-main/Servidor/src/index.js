const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');
const alunoRoutes = require('./routes/alunoRoutes');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/teste', (req, res) => {
    res.send('<h1>Servidor Operante</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/lanchesFESA', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', async () => {
  console.log('Conectado ao MongoDB');
});

server.use('/ticket', ticketRoutes);
server.use('/aluno', alunoRoutes);
