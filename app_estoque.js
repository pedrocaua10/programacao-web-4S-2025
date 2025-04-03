const express = require("express");
const app = express();
const estoque = require("./estoque.js");

const PORT = 8080;
app.listen(PORT, () => {
  console.log("app rodando na porta " + PORT);
});

app.get("/adicionar/:id/:nome/:qtd", (req, res) => {
  const id = Number(req.params.id);
  const nome = req.params.nome;
  const qtd = Number(req.params.qtd);
  if (estoque.adicionar(id, nome, qtd)) {
    res.send(`Produto ${nome} adicionado com sucesso`);
  } else {
    res.send(`Erro: Produto com ID ${id} ja existe no estoque`);
  }
});

app.get("/listar", (req, res) => {
  const produto = estoque.listar();
  res.json(produto);
});

app.get("/remover/:id", (req, res) => {
  const id = Number(req.params.id);
  if (estoque.remover(id)) {
    req.send(`Produto com ID ${id} removido com sucesso`);
  } else {
    req.send(`Erro: Produto com ID ${id} nao encontrado`);
  }
});

app.get("/editar/:id/:qtd", (reql, res) => {
  const id = Number(req.params.id);
  const qtd = Number(req.params.qtd);
  if (estoque.editar(id, qtd)) {
    res.send(`Quantidade do produto com ID ${id} atualizado para ${qtd}`);
  } else {
    req.send(`ErroProduto com ID ${id} nao encontrado`);
  }
});