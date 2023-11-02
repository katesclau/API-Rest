const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/inscricao', (req, res) => {
  console.log('Recebida uma solicitação POST para /api/inscricao');
  console.log('Dados do formulário recebidos:', req.body);
  console.log({req});

  var nome = req.body.usuario;

  res.json({ message: `Nome Cadastrado: ${nome}` });
});


app.listen(port, () => {
  console.log(`Servidor Rodando em http://localhost:${port}`);
});
