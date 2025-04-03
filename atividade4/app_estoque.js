const express = require ('express');
const app = express();
const estoque = [];
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const id = Number(req.params.id);
  const nome = req.params.nome;
  const qtd = Number(req.params.qtd);
  res.send(`Id: ${id}`);
  res.send(`nome: ${nome}`);
  res.send(`qtd: ${qtd}`);
});

app.get('/listar', (req, res) => {
   
});

app.get('/remover', (req, res) => {
  
});

app.get('/editar', (req, res) => {
   
});
const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' +PORT);
});