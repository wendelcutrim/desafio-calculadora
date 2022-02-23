const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicacao = require('./multiplicacao');
const dividir = require('./dividir');

//teste somar
let testeSoma = somar(10,78);
console.log("Utilizando a função somar: ");
console.log(testeSoma);

//teste subtrair
let testeSubtrair = subtrair(8,3);
console.log("Utilizando a função subtrair: ");
console.log(testeSubtrair);

//teste multipicação
let testeMultiplicacao = multiplicacao(20,3);
console.log("Utilizando a função multiplicação: ");
console.log(testeMultiplicacao);

//teste multipicação retornando 0
testeMultiplicacao = multiplicacao(20,0);
console.log("Multiplicação retornando 0...");
console.log(testeMultiplicacao);

//teste dividir
let testeDividir = dividir(30,5);
console.log("Utilizando a função divisão: ");
console.log(testeDividir);

//teste dividir por 0
testeDividir = dividir(30,0);
console.log("Utilizando a função divisão, tentando dividir por 0: ");
console.log(testeDividir);