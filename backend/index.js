const express = require('express');
const app = express();
const port = 3000; // Porta que o servidor vai escutar

app.get('/', (req, res) => {
  res.send('Seu endpoint está funcionando!');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});