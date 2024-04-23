const express = require('express');
const cors= require('cors');
const server = express();
server.use(express.json());
server.use(cors());


server.get('/teste', (req,res) => {
    res.send('<h1> Servidor Operante </h1>');
});

server.listen(3000, ()=>{
    console.log("Servidor Online");
});
const ProdutoRoutes = require('./routes/ProdutoRouter');
server.use('/produto', ProdutoRoutes);

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Porta do servidor

app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/nome-do-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rotas e lógica do servidor aqui

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


// const express = require("express");
// const cors = require('cors');
// const server = express(); 
// server.use(express.json());
// server.use(cors());

// server.get('/teste', (req, res)=> {
//   res.send('<center><h1> tudo certo com a api!!!!</h1></center>');
// });  

// const PessoaRoutes = require('./routes/PessoaRoutes');
// const CidadesRoutes = require('./routes/CidadeRouter');
// server.use('/pessoa', PessoaRoutes);
// server.use('/cidade', CidadesRoutes);

// server.listen(3000, () => {
//     console.log('API online');
// });