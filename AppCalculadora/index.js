const express = require ('express');
const calc = require('./calculadora');
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' +PORT);
});

app.get('/operacao/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a); 
    const b = parseFloat(req.params.b); 
    const resultado = calc.somar(a, b);  
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/operacao/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a); 
    const b = parseFloat(req.params.b); 
    const resultado = calc.subtrair(a, b);  
    res.send(`Resultado da subtracao: ${resultado}`);
});

app.get('/operacao/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a); 
    const b = parseFloat(req.params.b); 
    const resultado = calc.multiplicar(a, b);  
    res.send(`Resultado da multiplicacao: ${resultado}`);
});

app.get('/operacao/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a); 
    const b = parseFloat(req.params.b); 
    const resultado = calc.dividir(a, b);  
    res.send(`Resultado da divisao: ${resultado}`);
});

