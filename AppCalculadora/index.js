const express = require("express");
const calc = require("./calculadora");
const app = express();

app.get("/ola", (req, res) => {
  res.send("hello, world!");
});
app.get("/ola/:nome", (req, res) => {
  res.send("Ola, " + req.params.nome);
});

app.get("/somar/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a + b;
  res.send("Resultado da soma: " + resultado);
});

app.get("/subtrair/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a - b;
  res.send("Resultado da subtração: " + resultado);
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a * b;
  res.send("Resultado da multiplicação: " + resultado);
});

app.get("/dividir/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a / b;
  res.send("Resultado da divisão: " + resultado);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
